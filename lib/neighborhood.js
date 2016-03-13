var SortedArray = require('sorted-cmp-array');
var Socket = require('simple-peer');

var GUID = require('./guid.js');

/*!
 * \brief neigbhorhood table providing easy establishment and management of
 * connections
 * \param options the options available to the connections, e.g. timeout before
 * connection are truely removed, WebRTC options
 */
function Neighborhood(options){
    this.protocol = options.protocol || 'neighborhood';
    this.peer = GUID();
    // #1 save options
    this.options = options.webrtc || {};
    this.TIMEOUT = options.timeout || (120 * 1000); // 2 minutes
    // #2 initialize tables
    this.pending = new SortedArray(Comparator); // not finalized yet
    this.living = new SortedArray(Comparator); // live and usable
    this.dying = new SortedArray(Comparator); // being remove 
};

/*!
 * \brief creates a new incomming or outgoing connection
 * \param arg message or object containing  and the necessary 
 * properties to create an offer.
 */
Neighborhood.prototype.newConnection = function(callback, object){
    var self = this;
    // #1 create the webrtc options to create the new pending socket
    var opts = this.options;
    opts.initiator = (object.offer && true) || false;
    opts.trickle = false;
    // #2 create the socket, assign it an identifiers, add it to pending
    var socket = new Socket(options);
    var entry = {id: (object.id || GUID()), socket: socket};
    // #A socket -> pending
    this.pending.insert(entry);
    socket.on('signal', function(offer){
        var msg;
        if (opts.initiator){
            msg = new MRequest(self.peer, entry.id, offer);
        } else {
            msg = new MResponse(self.peer, entry.id, offer);
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
        if (self.pending.contains(entry){
            self.pending.remove(entry);
        } else if (self.living.contains(entry)){
            self.living.remove(entry);
        } else if (self.dying.contains(entry)){
            self.dying.remove(entry);
        });
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
    if (object.offer){
        socket.signal(object.offer);
    };
    // #4 if the socket did not established in time, remove
    setTimeout(function(){
        if (self.pending.contains(entry)){
            self.pending.remove(entry);
            socket.destroy();
        };
    }, this.TIMEOUT);
    // #5 give a quick access to signal function when it initiates
    // a connection
    if (opts.initiator){
        return function(finalize){
            socket.signal(finalize);
        };
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
