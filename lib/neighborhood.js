var EventEmitter = require('events').EventEmitter;
var Socket = require('simple-peer');
var util = require('util');

util.inherits(Neighborhood, EventEmitter);

//var SortedArray = require('./extended-sorted-array.js');
var MultiSet = require('./multiset.js');
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
    this.PROTOCOL = 'neighborhood-wrtc';
    this.ID = GUID();   
    // #1 save options
    this.options = (options && options.webrtc) || {};
    this.options.trickle = (options && options.webrtc &&
                            options.webrtc.trickle) || false;
    this.TIMEOUT = (options && options.timeout) || (120 * 1000); // 2 minutes
    // #2 initialize tables
    this.pending = new MultiSet(Comparator); // not finalized yet
    this.living = new MultiSet(Comparator); // live and usable
    this.dying = new MultiSet(Comparator); // being remove 
};

/*!
 * \brief creates a new incomming or outgoing connection depending on arguments
 * \param callback the callback function when the stun/ice server returns the
 * offer
 * \param object empty if it must initiate a connection, or the message received
 * if it must answer or finalize one
 * \return the id of the socket
 */
Neighborhood.prototype.connection = function(callbacks, message){
    var msg = (callbacks && callbacks.type && callbacks) || message;
    var result;
    
    if (!msg){
        result = initiate.call(this, callbacks);
        result && common.call(this, result);
    } else if (msg.type==='MRequest'){
        result = accept.call(this, msg, callbacks);
        result && common.call(this, result);
        result = alreadyExists.call(this, msg, callbacks) || result;
    } else if (msg.type==='MResponse'){
        result = finalize.call(this, msg);
        result = alreadyExists.call(this, msg) || result;
    };

    return result && result.id;
};

/*!
 * \brief get the socket with the id in argument along with its current state
 * \param id the identifier of the socket to retrieve
 * \return an entry of tables. It priorizes entries in living, then dying,
 * then pending.
 */
Neighborhood.prototype.get = function(id){
    return this.living.get(id) || this.dying.get(id) || this.pending.get(id);
};

// // // // // // // // // //
//    PRIVATE functions    //
// // // // // // // // // //

/*!
 * \brief initiates a connection with another peer -- the id of which is unknown
 * \param callbacks the function to call when signaling info are received and
 * when the connection is ready to be used
 */
function initiate(callbacks){
    var self = this;
    // var opts=JSON.parse(JSON.stringify(this.options));// quick but ugly copy
    var opts = this.options;
    opts.initiator = true;        
    var socket = new Socket(opts);
    var entry = {id: GUID(), // the id is temporary
                 socket: socket,
                 onOffer: callbacks && callbacks.onInitiate,
                 onReady: callbacks && callbacks.onReady };
    
    this.pending.insert(entry);
    socket.on('signal', function(offer){
        entry.onOffer &&
            entry.onOffer(new MRequest(entry.id, self.ID, offer));
    });
    entry.timeout = setTimeout(function(){
        if (self.pending.contains(entry)){
            self.pending.remove(entry);
            socket.destroy();
        };
    }, this.TIMEOUT);
    
    return entry;
};

/*!
 * \brief accept the offer of another peer
 * \param message the received message containing id and offer
 * \param callbacks the function call after receiving the offer and 
 * when the connection is ready
 */
function accept(message, callbacks){
    var prior = this.pending.get(message.tid);
    if (prior){ return prior; };
    
    var self = this;
    // var opts=JSON.parse(JSON.stringify(this.options));// quick but ugly copy
    opts = this.options;
    opts.initiator = false;
    var socket = new Socket(opts);
    var entry = {id: message.tid,
                 pid: message.pid,
                 socket: socket,
                 onOffer: callbacks && callbacks.onAccept,
                 onReady: callbacks && callbacks.onReady };
    
    this.pending.insert(entry);
    socket.on('signal', function(offer){
        entry.onOffer &&
            entry.onOffer(new MResponse(entry.id, self.ID, offer));
    });
    socket.on('connect', function(){
        if (!self.get(entry.pid)){
            self.pending.remove(entry);
        } else {
            socket.destroy();
        };
        self.living.insert({id: entry.pid,
                            socket: entry.socket,
                            onReady: entry.onReady});
        entry.onReady && entry.onReady(entry.pid);
        clearTimeout(entry.timeout);
    });
    socket.on('close', function(){
        if (self.pending.contains(entry.id)){
            self.pending.removeAll(entry.id)
        } else {
            self.living.contains(entry.pid) && self.living.removeAll(entry.pid);
            self.dying.contains(entry.pid) && self.dying.removeAll(entry.pid);
        };
        clearTimeout(entry.timeout);
    });
    entry.timeout = setTimeout(function(){
        if (self.pending.contains(entry.id)){
            self.pending.remove(entry.id);
            socket.destroy();
        };
    }, this.TIMEOUT);

    return entry;
};

/*!
 * \brief Common behavior to initiating and accepting sockets
 * \param entry the entry in the neighborhood table
 */
function common(entry){
    var self = this, socket = entry.socket;
    
    socket.on('data', function(message){
        message = JSON.parse(message.toString());
        self.emit('receive', socket, message);
    });
    socket.on('stream', function(stream){
        self.emit('stream', socket, message);
    });
    socket.on('error', function(err){
        //console.error(err); (XXX) do something useful here
    });
};

/*!
 * \brief finalize the behavior of an initiating socket
 * \param messge the received message possibly containing an answer to the
 * proposed offer
 */
function finalize(message){
    var prior = this.pending.get(message.tid);
    if (!prior || prior.pid){return prior;}

    prior.pid = message.pid;    
    
    var entry = {id: message.pid,
                 socket: prior.socket,
                 onReady: prior.onReady };
    
    var self = this, socket = entry.socket;
    socket.on('connect', function(){
        if (!self.get(entry)){
            self.pending.remove(prior.id);
        } else {
            socket.destroy();
        };
        self.living.insert(entry);
        entry.onReady && entry.onReady(prior.pid);
        clearTimeout(prior.timeout);        
    });
    socket.on('close', function(){
        if (self.pending.contains(message.tid)){
            self.pending.removeAll(message.tid);
        } else {
            self.living.contains(prior.pid) && self.living.removeAll(prior.pid);
            self.dying.contains(prior.pid) && self.dying.removeAll(prior.pid);
        };
        clearTimeout(prior.timeout);
    });  
    socket.on('dying', function(){
        if (self.living.contains(entry)){
            var e = self.living.remove(entry);
            if (e.occ <= 0){
                entry.timeout = setTimeout(function(){
                    socket.destroy();
                }, self.TIMEOUT);
                self.dying.insert(entry);
            };
        };
    });
    
    return prior;
};

/*!
 * \brief the peer id already exists in the tables
 */
function alreadyExists(message, callbacks){
    var alreadyExists = this.get(message.pid);

    // #A already exists but pending
    if  (!alreadyExists){
        var entry = this.pending.get(message.tid);
        entry && entry.socket.signal(message.offer);
    } else {
        var toRemove = this.pending.get(message.tid);
        toRemove && toRemove.socket.destroy();
        this.living.insert(message.pid); // (TODO) resurrect dead
        message.offer && callbacks &&
            callbacks.onAccept(new MResponse(message.tid, this.ID, null));
        (callbacks && callbacks.onReady(alreadyExists.id)) ||
            (toRemove && toRemove.onReady(alreadyExists.id));
    };
    
    return alreadyExists;
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
