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
        result = initiate.call(this, GUID(), callbacks);
        result && common.call(this, result);
    } else if (msg.type==='MRequest'){
        result = accept.call(this, msg, callbacks);
        result && common.call(this, result);
    } else if (msg.type==='MResponse'){
        result = finalize.call(this, msg);
    };

    return result.id;
};


function initiate(id, callbacks){
    var self = this;
    var opts=JSON.parse(JSON.stringify(this.options));// quick but ugly copy
    opts.initiator = true;        
    var socket = new Socket(opts);
    var entry = {id: id, // the id is temporary
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
    
function accept(message, callbacks){
    var self = this;
    
    var exists = alreadyExists.call(this, message, callbacks);
    if (exists){
        return exists;
    };
    
    var opts=JSON.parse(JSON.stringify(this.options));// quick but ugly copy
    opts.initiator = false;
    var socket = new Socket(opts);
    var entry = {id: message.id,
                 socket: socket,
                 onOffer: callbacks && callbacks.onAccept,
                 onReady: callbacks && callbacks.onReady };
    
    this.pending.insert(entry);
    socket.on('signal', function(offer){
        entry.onOffer &&
            entry.onOffer(new MResponse(message.temp, self.ID, offer));
    });
    socket.on('connect', function(){
        self.pending.remove(entry);
        self.living.insert(entry);
        entry.onReady && entry.onReady(entry.id);
        clearTimeout(entry.timeout);
    });
    socket.on('close', function(){
        self.pending.contains(entry) && self.pending.removeAll(entry);
        self.living.contains(entry) && self.living.removeAll(entry);
        self.dying.contains(entry) && self.dying.removeAll(entry);
        clearTimeout(entry.timeout);
    });
    entry.timeout = setTimeout(function(){
        if (self.pending.contains(entry)){
            self.pending.remove(entry);
            socket.destroy();
        };
    }, this.TIMEOUT);

    socket.signal(message.offer);
    
    return entry;
};

function common(entry){
    var self = this;
    var socket = entry.socket;
    
    socket.on('data', function(message){
        message = JSON.parse(message.toString());
        self.emit('receive', socket, message);
    });
    socket.on('stream', function(stream){
        self.emit('stream', socket, message);
    });
    socket.on('error', function(err){
        //console.error(err);
    });
};

function finalize(message){

    var exists = alreadyExists.call(this, message);
    if (exists){
        this.pending.get(message.temp).socket.destroy();
        return exists;
    };
    
    var self = this;
    var prior = this.pending.get(message.temp);
    var entry = {id: message.id,
                 socket: prior.socket,
                 onOffer: prior.onOffer,
                 onReady: prior.onReady };
    var socket = entry.socket;
    
    socket.on('connect', function(){
        self.pending.remove(message.temp);        
        self.living.insert(entry);
        entry.onReady && entry.onReady(entry.id);
        clearTimeout(entry.timeout);
    });
    socket.on('close', function(){
        self.pending.contains(message.temp) &&
            self.pending.removeAll(message.temp);
        self.living.contains(entry) && self.living.removeAll(entry);
        self.dying.contains(entry) && self.dying.removeAll(entry);
        clearTimeout(entry.timeout);
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

    socket.signal(message.offer);
    
    return entry;
};

// (TODO) make it work MResponse not gen
function alreadyExists(message, callbacks){
    var alreadyExists = this.get(message);
    if (alreadyExists){
        switch (alreadyExists.state){
        case 'pending':
            result = this.pending.insert(message);
            break;
        case 'living':
            result = this.living.insert(message);
            break;
        case 'dying':
            result = this.dying.insert(message); // (TODO) resurrect it
            break;
        };
        callbacks &&
            callbacks.onAccept(new MResponse(message.temp, this.ID, null));
    };  
    return alreadyExists;
};


/*!
 * \brief get the socket with the id in argument along with its current state
 * \param id the identifier of the socket to retrieve
 * \return {id, socket, state}
 */
Neighborhood.prototype.get = function(id){
    if (this.pending.contains(id)){
        return {id: id, socket: this.pending.get(id).socket, state: 'pending'};
    } else if (this.living.contains(id)){
        return {id: id, socket: this.living.get(id).socket, state: 'living'};
    } else if (this.dying.contains(id)){
        return {id: id, socket: this.dying.get(id).socket, state:'dying'};
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
