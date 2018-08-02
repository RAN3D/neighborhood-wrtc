'use strict'

/**
 * Message sent when protocolId wishes to send payload. It is a basic
 * encapsualtion of protocolId.
 */
class MSend {
  /**
     * @param {string} peerId The identifier of the peer that sent the message
     * @param {string} protocolId The identifier of the protocol that sent the
     * message
     * @param {object} payload The payload of the message.
     */
  constructor (peerId, payload) {
    this.peer = peerId
    this.payload = payload
    this.type = 'MSend'
  };
};

module.exports = MSend
