'use strict'

/**
 * Exception that fires when trying to access or use a socket that does not
 * exist.
 */
class ExSocketNotFound {
  /**
     * @param {string} source The source of the exception.
     * @param {string} peerId The identifier of the peer that has been tried.
     * @param {string} message A error message.
     */
  constructor (source, peerId, message) {
    this.source = source
    this.peer = peerId
    this.message = message
  };
};

module.exports = ExSocketNotFound
