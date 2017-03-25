'use strict';

/**
 * Exception that fires when trying to access or use a socket that does not
 * exist.
 */
class ExSocketNotFound {
    /**
     * @param {string} source The source of the exception.
     * @param {string} peerId The identifier of the peer that has been tried.
     * @param {string} protocolId The identifier of the protocol that failed.
     * @param {string} message A error message.
     */
    constructor (source, peerId, protocolId, message) {
        this.source = source;
        this.peer = peerId;
        this.protocolId = protocolId;
        this.message = message;
    };
};

module.exports = ExSocketNotFound;
