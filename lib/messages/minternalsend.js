'use strict'

/**
 * Message sent.
 */
class MInternalSend {
  /**
     * @param {string} peerId The identifier of the peer that sent the message
     * @param {object} payload The payload of the message.
     */
  constructor (peerId, payload) {
    this.peer = peerId
    this.payload = payload
    this.type = 'MInternalSend'
  }
}

module.exports = MInternalSend
