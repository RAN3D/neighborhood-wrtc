'use strict';

/**
 * Exception that fires when a message arrives too late and the entry in the
 * table has already been purged.
 */
class ExLateMessage {
    /**
     * @param {string} source The function name that throw the exception.
     * @param {object} message The late message
     */
    constructor (source, msg) {
        this.source = source;
        this.msg = msg;
        this.message = 'The message arrives too late';
    };
};

module.exports = ExLateMessage;
