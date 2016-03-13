var EventEmitter = require('events').EventEmitter;
var Socket = require('simple-peer');
var util = require('util');

var SortedArray = require('./extended-sorted-array.js');
var GUID = require('./guid.js');

var MRequest = require('./messages.js').MRequest;
var MResponse = require('./messages.js').MResponse;

/*!
 * \brief neigbhorhood table providing easy establishment and management of
 * connections
 * \param options the options available to the connections, e.g. timeout before
 * connection are truely removed, WebRTC options
 */
function Neighborhood(options){
    EventEmitter.call(this);
    this.protocol = options.protocol || 'neighborhood';
    // #1 save options
    this.options = options.webrtc || {};
    this.options.trickle = (options.webrtc && options.webrtc.trickle) || false;
    this.TIMEOUT = options.timeout || (120 * 1000); // 2 minutes
    // #2 initialize tables
    this.pending = new SortedArray(Comparator); // not finalized yet
    this.living = new SortedArray(Comparator); // live and usable
    this.dying = new SortedArray(Comparator); // being remove 
};

/*!
 * \brief creates a new incomming or outgoing connection depending on arguments
 * \param callback the callback function when the stun/ice server returns the
 * offer
 * \param object empty if it must initiate a connection, or the message received
 * if it must answer or finalize one
 * \return the id of the socket
 */
Neighborhood.prototype.connection = function(callback, object){
    var self = this;
    var id = (object && object.id) || GUID();
    if (object && object.type === 'MResponse'){
        if (this.pending.contains(object.id)){
            this.pending.get(object.id).socket.signal(object.offer);
        };
    } else {
        // #1 create the webrtc options to create the new pending socket
        var opts = this.options; opts.initiator = !(object && object.type);
        // #2 create the socket, assign it an identifiers, add it to pending
        var socket = new Socket(opts);
        var entry = {id: id, socket: socket};
        // #A socket -> pending
        this.pending.insert(entry);
        socket.on('signal', function(offer){
            var msg;
            if (opts.initiator){
                msg = new MRequest(entry.id, offer);
            } else {
                msg = new MResponse(entry.id, offer);
            };
            callback(msg);
        });
        // #B pending -> living
        socket.on('connect', function(){
            self.pending.remove(entry);
            self.living.insert(entry);
        });
        socket.on('data', function(message){
            self.emit('receive', socket, message);
        });
        socket.on('stream', function(stream){
            self.emit('stream', socket, message);
        });
        socket.on('close', function(){
            if (self.pending.contains(entry)){
                self.pending.remove(entry);
            } else if (self.living.contains(entry)){
                self.living.remove(entry);
            } else if (self.dying.contains(entry)){
                self.dying.remove(entry);
            };
        });
        // #C living -> dying
        socket.on('dying', function(){
            if (self.living.contains(entry)){
                self.living.remove(entry);
                self.dying.insert(entry);
                setTimeout(function(){
                    socket.destroy();
                }, self.TIMEOUT);
            };
        });
        // #3 give the socket the offer of the counterpart
        if (object && object.offer){
            socket.signal(object.offer);
        };
        // #4 if the socket did not established in time, remove
        setTimeout(function(){
            if (self.pending.contains(entry)){
                self.pending.remove(entry);
                socket.destroy();
            };
        }, this.TIMEOUT);
    };
    
    return id;
};


/*!
 * \brief get the socket with the id in argument along with its current state
 * \param id the identifier of the socket to retrieve
 * \return {id, socket, state}
 */
Neighborhood.prototype.get = function(id){
    if (this.pending.contains(id)){
        return {id: id, socket:this.pending.get(id).socket, state:'pending'};
    } else if (this.living.contains(id)){
        return {id: id, socket:this.living.get(id).socket, state:'living'};
    } else if (this.dying.contains(id)){
        return {id: id, socket:this.dying.get(id).socket, state:'dying'};
    } else {
        return null;
    };
};

    
/*!
 * \brief compare the id of entries in tables
 */
function Comparator(a, b){
    var first = a.id || a;
    var second = b.id || b;
    if (first < second){ return -1; };
    if (first > second){ return  1; };
    return 0;
};


module.exports = Neighborhood;
