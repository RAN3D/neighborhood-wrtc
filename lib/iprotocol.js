'use strict'

const N = require('./neighborhood')
/**
 * An interface for protocols that checks if all functions have been provided.
 * Not fully necessary since it will only be checked at runtime anyway.
 */
class IProtocol extends N {
  /**
     * Behavior when an arc leading to peer has been established.
     * @param {string} [peerId] The identifier of the peer reachable through the
     * arc.
     * @param {boolean} [isOutgoing] State whether or not the added arc is an
     * outgoing arc.
     */
  _connected (peerId, isOutgoing) { throw new Error('[_connected] not yet implemented.') }

  /**
     * Behavior when an arc leading to peer has been disconnected.
     * @param {string} [peerId] The identifier of the peer reachable through the
     * arc.
     */
  _disconnected (peerId) { throw new Error('[_disconnected] not yet implemented.') }

  /**
     * Behavior when an arc failed to establish properly.
     * @param {string} [peerId] The identifier of the peer that we tried to
     * establish a connection with.
     * @param {boolean} [isOutgoing] State whether or not the failed arc was
     * supposed to be an outgoing arc.
     */
  _failed (peerId, isOutgoing) { throw new Error('[_failed] not yet implemented.') }

  /**
     * Behavior when a message from peerId has been received.
     * @param {string} [peerId] The identifier of the peer that sent the message.
     * @param {object} [message] The received message.
     */
  _received (peerId, message) { throw new Error('[_received] not yet implemented.') }

  /**
     * Behavior when a stream from peerId is being received.
     * @param {string} [peerId] The identifier of the peer that sent the message.
     * @param {object} [stream] The received stream.
     */
  _streamed (peerId, stream) { throw new Error('[_streamed] not yet implemented.') }
}

module.exports = IProtocol
