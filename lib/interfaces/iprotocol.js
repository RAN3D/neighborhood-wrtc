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
    pid(){ throw new ExUndefinedFunction('pid'); };

    /**
     * Behavior when an arc leading to peer has been established.
     * @param {string} peerId The identifier of the peer reachable through the 
     * arc.
     */
    connected(peerId){ throw new ExUndefinedFunction('connected'); };

    /**
     * Behavior when an arc leading to peer has been disconnected.
     * @param {string} peerId The identifier of the peer reachable through the
     * arc.
     */
    disconnected(peerId){ throw new ExUndefinedFunction('disconnected'); };

    /**
     * Behavior when an arc failed to establish properly.
     * @param {string} peerId The identifier of the peer that we tried to
     * establish a connection with.
     */
    failed(peerId){ throw new ExUndefinedFunction('failed'); };

    /**
     * Behavior when a message from peerId has been received.
     * @param {string} peerId The identifier of the peer that sent the message.
     * @param {object} message The received message. 
     */
    received(peerId, message) { throw new ExUndefinedFunction('received'); };
};


module.exports = IProtocol;
