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
    constructor (source) {
        this.source = source;
        this.message = 'The function was not provided.';
    };
}

/**
 * Exception that fires when a message arrives too late and the entry in the
 * table has already been purged.
 * @param {string} source The function name that throw the exception.
 * @param {object} message The late message
 */
class ExLateMessage {
    constructor (source, msg) {
        this.source = source;
        this.msg = msg;
        this.message = 'The message arrives too late';
    };
};

module.exports = ExSocketNotFound;
module.exports = ExUndefinedFunction;
module.exports = ExLateMessage;
