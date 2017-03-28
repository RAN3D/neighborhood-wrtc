'use strict';

const ExUndefinedFunction = require('../exceptions/exundefinedfunction.js');

/**
 * An interface for protocols that checks if all functions have been provided.
 * Not fully necessary since it will only be checked at runtime anyway.
 */
class IProtocol {
    constructor () {};

    /**
     * Get the identifier of the protocol
     * @Returns {string} The identifier of the protocol
     */
    _pid(){ throw new ExUndefinedFunction('pid'); };

    /**
     * Behavior when an arc leading to peer has been established.
     * @param {string} [peerId] The identifier of the peer reachable through the 
     * arc.
     * @param {boolean} [isOutgoing] State whether or not the added arc is an 
     * outgoing arc.
     */
    _connected(peerId, isOutgoing){ throw new ExUndefinedFunction('connected');};

    /**
     * Behavior when an arc leading to peer has been disconnected.
     * @param {string} [peerId] The identifier of the peer reachable through the
     * arc.
     */
    _disconnected(peerId){ throw new ExUndefinedFunction('disconnected'); };

    /**
     * Behavior when an arc failed to establish properly.
     * @param {string} [peerId] The identifier of the peer that we tried to
     * establish a connection with.
     * @param {boolean} [isOutgoing] State whether or not the failed arc was 
     * supposed to be an outgoing arc.
     */
    _failed(peerId, isOutgoing){ throw new ExUndefinedFunction('failed'); };

    /**
     * Behavior when a message from peerId has been received.
     * @param {string} [peerId] The identifier of the peer that sent the message.
     * @param {object} [message] The received message. 
     */
    _received(peerId, message) { throw new ExUndefinedFunction('received'); };
    
    /**
     * Behavior when a stream from peerId is being received.
     * @param {string} [peerId] The identifier of the peer that sent the message.
     * @param {object} [stream] The received stream. 
     */
    _streamed(peerId, stream) { throw new ExUndefinedFunction('streamed'); };

};


module.exports = IProtocol;
