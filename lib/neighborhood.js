'use strict';

const debug = require('debug')('neighborhood-wrtc');
const EventEmitter = require('events');
const Socket = require('simple-peer');

const _ = require('lodash');
const uuid = require('uuid/v4');
const SimplePeer = require('simple-peer');

const ArcStore = require('./arcstore.js');
const EPending = require('./entries.js').EPending;
const EDying = require('./entries.js').EDying;

const INeighborhood = require('./ineighborhood.js');

const MResponse = require('./messages.js').MResponse;
const MRequest = require('./messages.js').MRequest;
const MSend = require('./messages.js').MSend;

const ExLateMessage = require('./exceptions.js').ExLateMessage;

/**
 * Easy-to-use interface to establish multiple WebRTC connections using
 * SimplePeer (npm: simple-peer)
 * @param {object} options the options available to the connections, e.g. 
 * timeout before
 * @param {object} options.config simple-peer options
 * @param {number} options.timeout Time to wait for socket destruction or
 * failed message (time in milliseconds)
 * @param {function} options.encoding Method to customize message sent, 
 * default: return JSON.stringify(data);
 * @param {function} options.decoding Method to decode a received message,
 * default: return JSON.parse(data);
 */
class Neighborhood extends EventEmitter {
    constructor (options) {
        super();
        // #1 save options
        this.options = {
            peer: uuid(),
            config: { iceServers: [], trickle: false, initiator: false },
            timeout: 1 * 60 * 1000,
            encoding: (d) => { return JSON.stringify(d); },
            decoding: (d) => { return JSON.parse(d); }
        };
        this.options = _.merge(this.options, options);
        this.encode = this.options.encoding; // not sure it should stay that
        this.decode = this.options.decoding; // way
        
        // #2 unmutable values
        this.PEER = this.options.peer;
        debug('[%s] initialized.', this.PEER);
        
        // #3 initialize tables
        this.pending = new Map(); // not finalized yet
        this.living = new ArcStore(); // live and usable
        this.dying = new Map(); // being removed

        // #4 table of all registered protocols
        this.protocols = new Map();
    }


    /**
     * The protocolId asks this module to get an interface. The interface
     * comprises functions such as connect, disconnect, or send. ProtocolId
     * should provide some functions as well such as failed, opened, received,
     * pid.
     * @param {IProtocol} protocol The protocol that requires the interface.
     * @returns {INeighborhood} The interface to use this module easily.
     */
    register (protocol) {
        debug('[%s] protocol %s just registered.', this.PEER, protocol.pid());
        this.protocols.set(protocol.pid(), protocol);
        return new INeighborhood(
            this._connect.bind(this, protocol.pid()),
            this._disconnect.bind(this, protocol.pid()),
            this._send.bind(this, protocol.pid())
        );
    };

    
    
    /**
     * @private
     * Create a WebRTC connection.
     * @param {string} protocolId The identifier of the protocol that wishes to
     * establish an new connection.
     * @param {func|object} arg1 Either a callback function to send the message
     * to the remote peer (for instance, it can use a signaling server or the
     * already created WebRTC connexions), or a message received from the remote
     * peer.
     * @param {object} arg2 The message received from a peer that initialized a
     * WebRTC connection.
     */
    _connect (protocolId, arg1, arg2){
        if (typeof arg1 === 'function' && typeof arg2 === 'undefined') {
            this._initiate(protocolId, arg1); // arg1: callback for offers
        } else if (typeof arg1 === 'function' && typeof arg2 !== 'undefined'){
            this._accept(protocolId, arg1, arg2); // arg1:callback, arg2:request
        } else {
            this._finalize(protocolId, arg1); // arg1: response
        };
    };
    
    /**
     * @private
     * Initiate the creation of a WebRTC connection. At this point, the identity
     * of the remote peer is unknown.
     * @param {string} protocolId The identifier of the protocol that creates a 
     * connection.
     * @param {func} sender A function called at each offer
     */
    _initiate (protocolId, sender) {
        // #1 create an initiator
        this.options.config.initiator = true;
        let socket = new Socket(this.options.config);
        // #2 insert the new entry in the pending table
        let entry = new EPending(uuid(), null, protocolId, socket);
        this.pending.set(entry.tid, entry);
        
        // #3 define events
        socket.once('connect', () => {
            entry.successful = true;
            this.living.insert(this.pending.get(entry.tid).peer,
                               protocolId,
                               socket);
            this.protocols.get(protocolId).connected(entry.peer);
        });
        socket.on('data', (d) => {
            let msg = this.decode(d);
            this.protocols.get(msg.pid).received(msg.peer, msg.payload);
        });
        socket.on('stream', (s) => {
            this.protocols.get(entry.pid).streamed(entry.peer, s); // (TODO)
        });
        socket.on('error', (e) => {
            // (TODO) ?
        });
        // #4 send offer message using sender
        socket.on('signal', (offer) => {
            sender(new MRequest(entry.tid, this.PEER, protocolId, offer));
        });
        
        // #5 check if the socket has been established correctly
        setTimeout( () => {
            (!entry.successful || entry.alreadyExists) &&
                entry.socket.destroy();
            !entry.successful &&
                this.protocols.get(protocolId).failed(entry.peer);
            this.pending.delete(entry.tid);
        }, this.options.timeout);
        
    };
    
    /**
     * @private
     * Try to finalize the WebRTC connection using the remote offers.
     * @param {string} protocolId The identifier of the protocol that wishes to
     * open a connection.
     * @param {MResponse} msg The message containing an offer, a peerId etc.
     */ 
    _finalize(protocolId, msg) {
        if (!this.pending.has(msg.tid)){
            throw new ExLateMessage('_finalize', msg);
        };
        
        let entry = this.pending.get(msg.tid);
        if (entry.alreadyExists || entry.successful) { return ;};
        
        // #A check if the connection already exists
        if (this.living.contains(msg.peer)){
            entry.alreadyExists = true;
            entry.successful = true;
            this.living.insert(msg.peer, protocolId);
            this.protocols.get(protocolId).connected(msg.peer);
        } else if (this.dying.has(msg.peer)){
            // #B rise from the dead
            entry.alreadyExists = true;
            entry.successful = true;
            let rise = this.dying.get(msg.peer).socket;
            this.dying.delete(msg.peer);
            this.living.insert(msg.peer, protocolId, rise);
            this.protocols.get(protocolId).connected(msg.peer);
        } else {
            // #C just signal the offer
            entry.peer = msg.peer;
            entry.socket.signal(msg.offer);
        };                        
    };

    /**
     * @private
     * Establish a connection in response to the request of remote peer.
     * @param {string} protocolId The identifier of the protocol that wishes to
     * create a connection.
     * @param {func} sender The function that send the offer to the remote initiating 
     * peer.
     * @param {object} msg The request message containing offers, peerId, etc.
     **/
    _accept (protocolId, sender, msg) {        
        // #1 initialize the entry if it does not exist
        let firstCall = false;
        if (!this.pending.has(msg.tid)) {
            firstCall = true;
            let entry = new EPending(msg.tid, msg.peer, protocolId);
            this.pending.set(entry.tid, entry);
            
            setTimeout( () => {
                (!entry.successful || entry.alreadyExists) &&
                    entry.socket && entry.socket.destroy();
                !entry.successful &&
                    this.protocols.get(protocolId).failed(entry.peer);
                this.pending.delete(entry.tid);
            }, this.options.timeout);            
        };
        
        // #2 check if a WebRTC connection to peerId already exists
        let entry = this.pending.get(msg.tid);
        if (entry.alreadyExists || entry.successful) { return ;};
        
        // #A check if the connection already exists
        if (this.living.contains(msg.peer)){
            entry.alreadyExists = true;
            entry.successful = true;
            this.living.insert(msg.peer, protocolId);
            this.protocols.get(protocolId).connected(msg.peer);
            firstCall && sender(new MResponse(entry.tid,
                                              this.PEER,
                                              protocolId,
                                              null));
        } else if (this.dying.has(msg.peer)){
            // #B rise from the dead
            entry.alreadyExists = true;
            entry.successful = true;
            let rise = this.dying.get(msg.peer).socket;
            this.dying.delete(msg.peer);
            this.living.insert(msg.peer, protocolId, rise);
            this.protocols.get(protocolId).connected(msg.peer);
            firstCall && sender(new MResponse(entry.tid,
                                              this.PEER,
                                              protocolId,
                                              null));            
        } else {
            // #3 create the events and signal the offer
            if (firstCall && !entry.socket){
                // #A create a socket
                this.options.config.initiator = false;
                let socket = new Socket(this.options.config);
                // #B update the entry
                entry.socket = socket;
                // #C define events
                socket.once('connect', () => {
                    entry.successful = true;
                    this.living.insert(this.pending.get(entry.tid).peer,
                                       protocolId,
                                       socket);
                    this.protocols.get(protocolId).connected(entry.peer);
                });
                socket.on('data', (d) => {
                    let msg = this.decode(d);
                    this.protocols.get(msg.pid).received(msg.peer, msg.payload);
                });
                socket.on('stream', (s) => {
                    // (TODO)
                    this.protocols.get(entry.pid).streamed(entry.peer, s); 
                });
                socket.on('error', (e) => {
                    // (TODO) ?
                });
                // #4 send offer message using sender
                socket.on('signal', (offer) => {
                    sender(new MResponse(entry.tid,
                                         this.PEER,
                                         protocolId,
                                         offer));
                });
            };
            entry.socket.signal(msg.offer);
        };
    };

    
    _disconnect (protocolId, peerId) {
        
    };
    
    _send (protocolId, peerId, message) {
        
    };

};

module.exports = Neighborhood;
