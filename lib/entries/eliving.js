'use strict'

/**
 * Entry of the living table containing sockets still in use.
 */
class ELiving {
  /**
     * @param {string} peerId The identifier of the peer reachable through the
     * socket.
     * @param {object} socket The WebRTC socket.
     */
  constructor (peerId, socket) {
    this.peer = peerId // key
    this.socket = socket
    this.counter = 0
    this.increment()
  }

  /**
     * Add an occurrence of the arc to the protocol
     */
  increment () {
    this.counter++
  }

  /**
     * Remove an occurrence of the arc to the protocol
     */
  decrement () {
    this.counter--
  }
}

module.exports = ELiving
