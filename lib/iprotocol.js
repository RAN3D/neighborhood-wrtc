'use strict';

const ExUndefinedFunction = require('./exceptions.js').ExUndefinedFunction;

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
     * establish a connexion with.
     */
    failed(peerId){ throw new ExUndefinedFunction('failed'); };
};


module.exports = IProtocol;
