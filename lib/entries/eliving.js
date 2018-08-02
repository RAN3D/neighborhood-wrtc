'use strict'
const debug = (require('debug'))('neighborhood-wrtc')
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
    debug('[eliving:%s] initialized: %f', this.peer, this.counter)
  }

  /**
     * Add an occurrence of the arc to the protocol
     */
  increment () {
    this.counter++
    debug('[eliving:%s] increment: %f', this.peer, this.counter)
  }

  /**
     * Remove an occurrence of the arc to the protocol
     */
  decrement () {
    this.counter--
    debug('[eliving:%s] decrement: %f', this.peer, this.counter)
  }
}

module.exports = ELiving
