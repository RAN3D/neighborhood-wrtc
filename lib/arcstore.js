'use strict'

const ELiving = require('./entries/eliving.js')

const ExSocketNotFound = require('./exceptions/exsocketnotfound.js')

/**
 * Table that contains all living sockets that might be in use. Peers can
 * comprise multiples protocols that may use multiple times an arc.
 */
class ArcStore {
  constructor () {
    this.store = new Map()
    this.tid = new Map()
  }

  /**
     * add another arc leading to peerId in the store
     * @param {string} peerId The identifier of the peer reachable through the
     * socket.
     * @param {object} socket The WebRTC socket. Can be null if the socket to
     * peerId is known to be in the store.
     * @param {string} tid TemporyId of a set of offer that we store in order to say if the already see a set of offers. (trickle true problems)
     * @return {Boolean} Return true if increment was done, false otherwise
     */
  insert (peerId, socket, tid) {
    // #1 make sure the peerId exists if the socket is not set.
    if (socket === null && !this.store.has(peerId)) {
      throw new ExSocketNotFound(
        'arcStore',
        peerId,
        'Try to add an arc to a peer that does not exists')
    }

    // #2 the peerId is not known yet, create the entry
    if (!this.store.has(peerId)) {
      let entry = new ELiving(peerId, socket)
      this.store.set(peerId, entry)
      return true
    } else {
      // check if we already see the tid (fix the problem of multiple offers, trickle true!)
      if (!this.tid.has(tid)) {
        this.tid.set(tid, true)
        // #3 increment the number of arcs of protocolId
        this.store.get(peerId).increment()
        return true
      } else {
        return false
      }
    }
  }

  /**
     * ProtocolId removes an arc to the peerId.
     * @param {string} peerId The identifier of the peer accessible through the
     * arc to delete.
     * @returns {ELiving} The entry if no protocol is using the socket, null
     * otherwise.
     */
  remove (peerId) {
    let unusedSocket = null
    // #1 check if a socket to the arc exists
    if (!this.store.has(peerId)) {
      throw new ExSocketNotFound(
        'arcStore',
        peerId,
        'Try to remove an arc to a peer that does not exists')
    }
    this.store.get(peerId).decrement()
    // #3 remove the entry if no protocol use it
    if (this.store.get(peerId).counter <= 0) {
      unusedSocket = this.store.get(peerId)
      this.store.delete(peerId)
    }
    return unusedSocket
  }

  /**
     * removes all arcs.
     * @returns {object[]} Objects comprising {peer, socket, occ}; peer being
     * the identifier of the peer reachable through the socket, socket being a
     * WebRTC connection that is not used by any protocols, null if protocols
     * still use it, occ being the number of arcs removed by protocolId.
     */
  removeAll () {
    let result = []
    this.store.forEach((v, k) => {
      let entry = {
        peer: v.peer,
        socket: null,
        occ: v.counter
      }
      for (let i = 0; i < entry.occ; ++i) {
        let unusedSocket = this.remove(k)
        if (unusedSocket !== null) {
          entry.socket = unusedSocket.socket
          result.push(entry)
        }
      }
    })
    return result
  }

  /**
     * Remove all arcs leading to peerId.
     * @param {string} peerId The identifier of the peer reachable by a WebRTC
     * connection to remove.
     * @returns {Map} Map where key is the identifier of the protocol that sees
     * its arcs being removed, and value is the number of arcs removed;
     */
  removePeer (peerId) {
    let result
    if (this.store.has(peerId)) {
      result = this.store.get(peerId)
      this.store.delete(peerId)
    } else {
      result = new Map()
    }
    return result
  };
  /**
     * Check if the store has at least one occurrence of the peer.
     * @param {string} peerId The identifier of the peer to check.
     * @returns {boolean} true if it exists, false otherwise.
     */
  contains (peerId) {
    return this.store.has(peerId)
  }

  /**
     * Get the entry of the arc leading to PeerId
     * @param {string} peerId The identifier of the remote peer
     * @returns {ELiving} The entry containing peerId, null if it does not
     * exists.
     */
  get (peerId) {
    let entry = null
    if (this.contains(peerId)) {
      entry = this.store.get(peerId)
    }
    return entry
  }
}

module.exports = ArcStore
