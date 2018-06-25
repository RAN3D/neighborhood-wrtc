'use strict'

/**
 * Interface of functions that are available to a protocol that registered
 * to this module.
 */
class INeighborhood {
  /**
     * @param {string} peerId The identifier of the peer that created this
     * interface.
     * @param {function} connect The connection function provided by this
     * module.
     * @param {function} disconnect The disconnection function provided by this
     * module.
     * @param {function} send The send function provided by this module.
     */
  constructor (peerId, connect, disconnect, send, stream, neighbours) {
    this.peer = peerId
    this.connect = connect
    this.disconnect = disconnect
    this.send = send
    this.stream = stream
    this.neighbours = neighbours
  };

  /**
     * Create a WebRTC connexion.
     * @param {function|object} arg1 Either a callback function to send the
     * message to the remote peer (for instance, it can use a signaling server
     * or the already created WebRTC connexions), or a message received from the
     * remote peer.
     * @param {object} arg2 The message received from a peer that initialized a
     * WebRTC connexion.
     */
  connect (arg1, arg2) {
    this.connect(arg1, arg2)
  };

  /**
     * Remove an arc that led to peerId.
     * @param {string} peerId The identifier of the remote peer.
     * @returns {promise} Resolved when the arc is removed.
     */
  disconnect (peerId) {
    return this.disconnect(peerId)
  };

  /**
     * Send message to peerId.
     * @param {string} peerId The identifier of the remote peer.
     * @param {string} message The message to send.
     * @param {number} [retry=10] Retry few times to send the message before
     * giving up.
     * @returns {promise} Resolved when the message is sent, reject
     * otherwise. Note that loss of messages is not handled by default.
     */
  send (peerId, message, retry) {
    return this.send(peerId, message)
  };

  /**
   * Send a MediaStream (see MediaStream API) to a peerId neighbour
   * @param  {[type]} peerId The identifier of the remote peer.
   * @param  {[type]} media  MediaStream
   * @param  {[type]} [retry=0]  Retry few times to send the message before
   * @return {promise}        Resolved when the stream has been well sent.
   */
  stream (peerId, media, retry) {
    return this.stream(peerId, media)
  }

  /**
   * Return an array of neighbours including peerName and sockets and protocols with occurences
   * @return {Array<ELiving>} {peer: String, socket: SimplePeer, protocols: Map}
   */
  neighbours () {
    return this.neighbours()
  }
};

module.exports = INeighborhood
