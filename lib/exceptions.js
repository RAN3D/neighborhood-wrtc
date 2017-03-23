'use strict';

/**
 * Exception that fires when trying to access or use a socket that does not
 * exist.
 * @param {string} source The source of the exception.
 * @param {string} peerId The identifier of the peer that has been tried.
 * @param {string} protocolId The identifier of the protocol that failed.
 * @param {string} message A error message.
 */
class ExSocketNotFound {    
    constructor (source, peerId, protocolId, message) {
        this.source = source;
        this.peer = peerId;
        this.protocolId = protocolId;
        this.message = message;
    };
};


/**
 * Exception that fires when the interface of the protocol using neighborhood is
 * not complete.
 * @param {string} source The function name that is not provided.
 */
class ExUndefinedFunction {
    constructor (source){
        this.source = source;
        this.message = 'The function was not provided.';
    };
}

module.exports = ExSocketNotFound;
