'use strict';

/**
 * Exception that fires when the interface of the protocol using neighborhood is
 * not complete.
 */
class ExUndefinedFunction {
    /**
     * @param {string} source The function name that is not provided.
     */
    constructor (source) {
        this.source = source;
        this.message = 'The function was not provided.';
    };
}

module.exports = ExUndefinedFunction;
