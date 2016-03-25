var EventEmitter = require('events').EventEmitter;
var Socket = require('simple-peer');
var util = require('util');

util.inherits(Neighborhood, EventEmitter);

//var SortedArray = require('./extended-sorted-array.js');
var MultiSet = require('./multiset.js');
//var GUID = require('./guid.js'); (TODO) uncomment
var GUID = function(){return (''+Math.ceil(Math.random()*100000)+''); };

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
    this.TIMEOUT = (options && options.timeout) || (2 * 60 * 1000); // 2 minutes
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
 * \param protocol the connection is established for a specific protocol
 * \return the id of the socket
 */
Neighborhood.prototype.connection = function(callbacks, message, protocol){
    var msg = (callbacks && callbacks.type && callbacks) || message;
    var result;
    
    if (!msg){
        result = initiate.call(this, callbacks, protocol);
    } else if (msg.type==='MRequest'){
        result = accept.call(this, msg, callbacks);
        result = alreadyExists.call(this, msg, callbacks) || result;
    } else if (msg.type==='MResponse'){
        result = finalize.call(this, msg);
        result = alreadyExists.call(this, msg) || result;
    };

    return result && result.id;
};


/*!
 * \brief disconnect one of the arc with the identifier in argument. If 
 * it was the last arc with such id, the socket is relocated to the dying
 * table. The socket will be destroy after a bit.
 */
Neighborhood.prototype.disconnect = function(id){
    var entry = this.living.remove(id);
    if (entry && entry.occ <= 0){
        entry.timeout = setTimeout(function(){
            entry.socket.destroy();
        }, this.TIMEOUT);
        this.dying.insert(entry);
    };
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
function initiate(callbacks, protocol){
    var self = this;
    // var opts=JSON.parse(JSON.stringify(this.options));// quick but ugly copy
    var opts = this.options;
    opts.initiator = true;        
    var socket = new Socket(opts);
    var entry = {id: GUID(),
                 socket: socket,
                 protocol: protocol,
                 onOffer: callbacks && callbacks.onInitiate,
                 onReady: callbacks && callbacks.onReady };
    
    this.pending.insert(entry);
    socket.on('signal', function(offer){
        entry.onOffer &&
            entry.onOffer(new MRequest(entry.id, self.ID, offer, protocol));
    });
    entry.timeout = setTimeout(function(){
        self.pending.remove(entry) && socket.destroy();
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
    // #1 if already exists, use it
    var prior = this.pending.get(message.tid);
    if (prior){ return prior; };
    // #2 otherwise, create the socket
    var self = this;
    // var opts=JSON.parse(JSON.stringify(this.options));// quick but ugly copy
    opts = this.options;
    opts.initiator = false;
    var socket = new Socket(opts);
    var entry = {id: message.tid,
                 pid: message.pid,
                 protocol: message.protocol,
                 socket: socket,
                 onOffer: callbacks && callbacks.onAccept,
                 onReady: callbacks && callbacks.onReady };
    
    this.pending.insert(entry);
    socket.on('signal', function(offer){
        entry.onOffer &&
            entry.onOffer(new MResponse(entry.id,
                                        self.ID,
                                        offer,
                                        entry.protocol));
    });
    socket.on('connect', function(){
        self.get(entry.pid) && socket.destroy();
        self.pending.remove(entry);
        self.living.insert({id: entry.pid,
                            socket: entry.socket,
                            onReady: entry.onReady,
                            onOffer: entry.onOffer});
        entry.onReady && entry.onReady(entry.pid);
        self.emit('ready', entry.pid);
        entry.protocol && self.emit('ready-'+entry.protocol, entry.pid);
        clearTimeout(entry.timeout);
        entry.timeout = null;
    });
    socket.on('close', function(){
        if (self.pending.contains(entry.id)){
            // #A pending: entry is kept until automatic destruction
            entry.socket = null;
        } else {
            // #B living or dying: clear the tables
            entry.timeout && clearTimeout(entry.timeout);
            entry.timeout = null;
            self.living.removeAll(entry.pid);
            self.dying.removeAll(entry.pid);
        };
    });

    common.call(this, entry);
    
    entry.timeout = setTimeout(function(){
        self.pending.remove(entry.id) && socket.destroy();
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
    // #1 if it does not exists, stop; or if it exists but already setup
    // return it
    var prior = this.pending.get(message.tid);
    if (!prior || prior.pid){return prior;}
    // #2 otherwise set the events correctly
    prior.pid = message.pid;    
    
    var entry = {id: message.pid,
                 socket: prior.socket,
                 protocol: prior.protocol,
                 onReady: prior.onReady,
                 onOffer: prior.onOffer };
    
    var self = this, socket = entry.socket;
    socket.on('connect', function(){
        self.get(entry.id) && socket.destroy();
        self.pending.remove(entry);
        self.living.insert(entry);
        entry.onReady && entry.onReady(prior.pid);
        self.emit('ready', prior.pid);
        entry.protocol && self.emit('ready-'+entry.protocol, prior.pid);
        clearTimeout(prior.timeout);  
    });
    socket.on('close', function(){
        if (self.pending.contains(message.tid)){
            self.pending.get(message.tid).socket = null;
        } else {
            prior.timeout && clearTimeout(prior.timeout);
            prior.timeout = null;
            self.living.removeAll(prior.pid);
            self.dying.removeAll(prior.pid);
        };
    });  

    common.call(this, prior);
    
    return prior;
};

/*!
 * \brief the peer id already exists in the tables
 */
function alreadyExists(message, callbacks){
    var alreadyExists = this.get(message.pid);
    if  (!alreadyExists){
        // #A does not already exists but pending
        var entry = this.pending.get(message.tid);
        entry && entry.socket && entry.socket.signal(message.offer);
    } else {
        // #B already exists and pending
        var toRemove = this.pending.get(message.tid);        
        if (toRemove && toRemove.socket){ // exists but socket still w8in
            if (!alreadyExists.timeout){
                // #1 already in living socket, add an occurrence
                this.living.insert(message.pid);
            } else {
                // #2 was dying, resurect the socket 
                clearTimeout(alreadyExists.timeout);
                alreadyExists.timeout = null;
                this.living.insert(this.dying.remove(alreadyExists));
            };
            toRemove.socket.destroy();
            message.offer &&
                callbacks &&
                callbacks.onAccept &&
                callbacks.onAccept(new MResponse(message.tid,
                                                 this.ID,
                                                 null,
                                                 message.protocol));
            (callbacks &&
             callbacks.onReady &&
             callbacks.onReady(alreadyExists.id)) ||
                (toRemove &&
                 toRemove.onReady &&
                 toRemove.onReady(alreadyExists.id));
            this.emit('ready', alreadyExists.id);
            message.protocol && this.emit('ready-'+message.protocol,
                                          alreadyExists.id);
        };
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
