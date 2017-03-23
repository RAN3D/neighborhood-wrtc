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

/**
 * Easy-to-use interface to establish multiple WebRTC connexions using
 * SimplePeer (npm: simple-peer)
 * @param {object} options the options available to the connections, e.g. 
 * timeout before
 * @param {string} options.protocol Protocol to use
 * @param {object} options.config simple-peer options
 * @param {number} options.timeout Time to wait for socket destruction or
 * failed message (time in milliseconds)
 * @param {function} options.encoding Method to customize message sent, 
 * default: return JSON.stringify(data);
 * @param {function} options.decoding Method to decode a received message,
 * default: return JSON.parse(data);
 * @param {boolean} options.verbose Print log message: default false
 */
class Neighborhood extends EventEmitter {
    constructor (options) {
        super();
        // #1 save options
        this.options = {
            protocol: 'default',
            config: { iceServers: [], trickle: false, initiator: false },
            timeout: 2 * 60 * 1000,
            encoding: (d) => { return JSON.stringify(d); },
            decoding: (d) => { return JSON.parse(d); }
        };
        this.options = _.merge(this.options, options);
        this.encode = this.options.encoding; // not sure it should stay that
        this.decode = this.options.decoding; // way
        
        // #2 unmutable values
        this.ID = uuid();
        this.PROTOCOL = this.options.protocol + '-neighborhood-wrtc';
        debug('new neighborhood: ' + this.ID);
        
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
        debug('protocol ' + protocol.pid() + ' just registered.');
        this.protocols.set(protocol.pid(), protocol);
        return new INeighborhood(
            this._connect.bind(this, protocol.pid()),
            this._disconnected.bind(this, protocol.pid()),
            this._send.bind(this, protocol.pid())
        );
    };

    /**
     * @private
     * Create a connexion to a remote peer
     */
    _connection (protocolId, initiator, send){
        return (initiator && this._initiate(protocolId, send)) ||
            this._answer(protocolId, send);
    };

    _initiate (protocolId, send) {
        let connectionPromise = new Promise( (resolve, reject) => {
            // #1 create an initiator
            this.options.config.initiator = true;
            let socket = new Socket(this.options.config);
            // #2 insert the new entry in the pending table
            let entry = new EPending(uuid(), null, protocolId, socket);
            this.pending.set(entry);
            
            socket.on('connect', () => {
                this.pending.delete(entry.tid);
                this.living.insert(this.pending.get(entry.tid).peer,
                                   protocolId,
                                   socket);
                resolve(this.pending.get(entry.tid).peer);
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
                this.pending.delete(entry.tid);
                reject(e);
            });                    
            // #3 initialize the event corresponding to offer receptions
            socket.on('signal', (offer) => {
                send(new MRequest(entry.tid,this.ID,protocolId,offer));
            });
            // #4 initialize the behavior when receive a remote offer
            connectionPromise.receive = (m) => {
                // #A check if the connexion already exists
                if (this.living.contains(m.peer)){
                    try {
                        this.living.insert(m.peer, protocolId);
                        this.pending.delete(m.tid);
                        socket.destroy();
                        connectionPromise.receive = (m) => {};
                        resolve(m.peer);
                    } catch (e){
                        connectionPromise.receive = (m) => {};
                        reject(e);
                    };
                } else if (this.dying.has(m.peer)){
                    // #B rise from the dead
                    try {
                        let rise = this.dying.get(m.peer).socket;
                        this.dying.delete(m.peer);
                        this.living.insert(m.peer, protocolId, rise);
                        this.pending.delete(m.tid);
                        socket.destroy();
                        connectionPromise.receive = (m) => {};
                        resolve(m.peer);
                    } catch (e){
                        connectionPromise.receive = (m) => {};
                        reject(e);
                    };                        
                } else {
                    // #C just signal the offer
                    this.pending.get(m.tid).peer = m.peer;
                    socket.signal(m.offer);
                };                        
            };
        });
        return connectionPromise;
    };

    _answer (protocolId, send) {
        let connectionPromise = new Promise( (resolve, reject) => {
            // #1 create an initiator
            this.options.config.initiator = true;
            let socket = new Socket(this.options.config);
            // #2 insert the new entry in the pending table
            let entry = new EPending(uuid(), null, protocolId, socket);
            this.pending.set(entry);
            
            socket.on('connect', () => {
                this.pending.delete(entry.tid);
                this.living.insert(this.pending.get(entry.tid).peer,
                                   protocolId,
                                   socket);
                resolve(this.pending.get(entry.tid).peer);
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
                this.pending.delete(entry.tid);
                reject(e);
            });                    
            // #3 initialize the event corresponding to offer receptions
            socket.on('signal', (offer) => {
                send(new MRequest(entry.tid,this.ID,protocolId,offer));
            });
            // #4 initialize the behavior when receive a remote offer
            connectionPromise.receive = (m) => {
                // #A check if the connexion already exists
                if (this.living.contains(m.peer)){
                    try {
                        this.living.insert(m.peer, protocolId);
                        this.pending.delete(m.tid);
                        socket.destroy();
                        connectionPromise.receive = (m) => {};
                        resolve(m.peer);
                    } catch (e){
                        connectionPromise.receive = (m) => {};
                        reject(e);
                    };
                } else if (this.dying.has(m.peer)){
                    // #B rise from the dead
                    try {
                        let rise = this.dying.get(m.peer).socket;
                        this.dying.delete(m.peer);
                        this.living.insert(m.peer, protocolId, rise);
                        this.pending.delete(m.tid);
                        socket.destroy();
                        connectionPromise.receive = (m) => {};
                        resolve(m.peer);
                    } catch (e){
                        connectionPromise.receive = (m) => {};
                        reject(e);
                    };                        
                } else {
                    // #C just signal the offer
                    this.pending.get(m.tid).peer = m.peer;
                    socket.signal(m.offer);
                };                        
            };
        });
        return connectionPromise;
    };

    
    _disconnect (protocolId, peerId) {

    };
    
    _send (protocolId, peerId, message) {
        
    };

};

module.exports = Neighborhood;
