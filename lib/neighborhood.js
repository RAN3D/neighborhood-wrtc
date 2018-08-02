'use strict'

const debug = (require('debug'))('neighborhood-wrtc')

const merge = require('lodash.merge')
const uuid = require('uuid/v4')
const Socket = require('simple-peer')
const Events = require('events')

const ArcStore = require('./arcstore.js')
const EPending = require('./entries/epending.js')
const EDying = require('./entries/edying.js')

const MResponse = require('./messages/mresponse.js')
const MRequest = require('./messages/mrequest.js')
const MSend = require('./messages/msend.js')
const MInternalSend = require('./messages/minternalsend.js')

// const ExIncompleteMessage = require('./exceptions/exincompletemessage.js')

/**
 * Easy-to-use interface to establish multiple WebRTC connections using
 * SimplePeer (npm: simple-peer)
 */
class Neighborhood extends Events {
  /**
     * @param {object} [options] the options available to the connections, e.g.
     * timeout before
     * @param {object} [options.socketClass] simple-peer default socket class (usefull if you need to change the type of socket)
     * @param {object} [options.config] simple-peer options
     * @param {number} [options.timeout = 60000] Time to wait (in milliseconds) for dying socket
     * @param {number} [options.pendingTimeout = 10000] Time to wait (in milliseconds) for pending socket
     * before neighborhood-wrtc assumes that a connection establishment failed,
     * or before an unused connection is removed.
     * @param {function} [options.encoding] Method to customize message sent,
     * default: return JSON.stringify(data);
     * @param {function} [options.decoding] Method to decode a received message,
     * default: return JSON.parse(data);
     */
  constructor (options) {
    super()
    // #1 save options
    this.options = {
      socketClass: Socket,
      peer: uuid(),
      config: { trickle: true, initiator: false },
      timeout: 1 * 60 * 1000,
      pendingTimeout: 10 * 1000,
      encoding: (d) => { return JSON.stringify(d) },
      decoding: (d) => { return JSON.parse(d) }
    }
    this.options = merge(this.options, options)
    this.encode = this.options.encoding // not sure it should stay that
    this.decode = this.options.decoding // way

    // #2 unmutable values
    this.PEER = this.options.peer
    debug('[%s] initialized.', this.PEER)

    // #3 initialize tables
    this.pending = new Map() // not finalized yet
    this.living = new ArcStore() // live and usable
    this.dying = new Map() // being removed
  }

  /**
   * Create a WebRTC connection.
   * @param {function|object} arg1 Either a callback function to send the
   * message to the remote peer (for instance, it can use a signaling server
   * or the already created WebRTC connexions), or a message received from the
   * remote peer.
   * @param {object} arg2 The message received from a peer that initialized a
   * WebRTC connection.
   */
  connect (arg1, arg2) {
    return new Promise((resolve, reject) => {
      const id = uuid()
      if (typeof arg1 === 'function' && typeof arg2 === 'undefined') {
        this._initiate(arg1, id) // arg1: callback for offers
      } else if (typeof arg1 === 'function' && typeof arg2 !== 'undefined') {
        this._accept(arg1, arg2, id) // arg1:callback, arg2:request
      } else {
        this._finalize(arg1, id) // arg1: response
      }
      this.once(id, (connectedWith, timeout = false, message) => {
        if (timeout) reject(new Error('timeout exceeded.', message))
        resolve(connectedWith)
      })
    })
  }

  /**
   * @private
   * Initiate the creation of a WebRTC connection. At this point, the identity
   * of the remote peer is unknown.
   * @param {function} sender A function called at each offer
   * @param {String} jobId The jobId that initiate the connection
   */
  _initiate (sender, jobId) {
    // #1 create an initiator
    this.options.config.initiator = true
    let SocketClass = this.options.socketClass
    let socket
    // handle DOMException: Failed to construct 'RTCPeerConnection': Cannot create so many PeerConnections
    try {
      socket = new SocketClass(this.options.config)
    } catch (e) {
      this.emit(jobId, null, true, e.message)
    }
    // #2 insert the new entry in the pending table
    let entry = new EPending(uuid(), null, socket)
    entry.jobId = jobId
    // entry.tid = peerIdToConnectWith || entry.tid
    this.pending.set(entry.tid, entry)

    // #3 define events
    socket.once('connect', () => {
      entry.successful = true
      if (this.living.contains(entry.peer)) {
        entry.alreadyExists = true
        entry.successful = true
        debug('[_initiate(connect/living)] insert/increment')
        const inserting = this.living.insert(entry.peer, undefined, entry.tid)
        if (inserting) {
          debug('[init] emit connect event: ', entry.jobId, entry.peer, false)
          this.emit(entry.jobId, entry.peer, false)
          // notify
          this._connected(entry.peer, true)
        }
        entry.peer = null // becomes the unknown soldier
      } else {
        debug('[_initiate(connect)] insert/increment')
        const inserting = this.living.insert(entry.peer, socket, entry.tid)
        if (inserting) {
          debug('[init] emit connect event: ', entry.jobId, entry.peer, false)
          this.emit(entry.jobId, entry.peer, false)
          // notify
          this._connected(entry.peer, true)
        }
      }

      this._checkPendingEntry(entry)
    })
    socket.once('close', () => {
      if (entry.peer !== null) { // if not the unknown soldier
        if (this.living.contains(entry.peer)) {
          // #A remove the socket from the table of living connections
          this.living.removePeer(entry.peer)
          // #B notify
          this._disconnected(entry.peer)
        } else if (this.dying.has(entry.peer)) {
          let d = this.dying.get(entry.peer)
          clearTimeout(d.timeout)
          this.dying.delete(entry.peer)
        }
        debug('[init] emit close event: ', entry.jobId, entry.peer, true)
        this._checkPendingEntry(entry)
        this.emit(entry.jobId, entry.peer, true, 'closed')
      } else {
        debug('[%s] -‡- WebRTC -‡> %s', this.PEER, 'unknown')
      }
    })

    socket.on('data', (d) => {
      let msg = this.decode(d)
      if (msg.type === 'MInternalSend') {
        this._receiveInternalMessage(msg)
      } else {
        this._received(msg.peer, msg.payload)
      }
    })
    socket.on('stream', (s) => {
      this._streamed(entry.peer, s)
    })
    socket.on('error', (e) => {
      // Nothing here, for the failure are detected and handled after
      // this.options.timeout milliseconds.
      debug(e)
      socket.destroy()
      debug('[init] emit error event: ', entry.jobId, entry.peer, true)
      this.emit(entry.jobId, entry.peer, true, e.message)
    })
    // #4 send offer message using sender
    socket.on('signal', (offer) => {
      if (socket.connected && !socket._isNegociating) {
        this._sendRenegociateRequest(new MRequest(entry.tid, this.PEER, offer, 'renegociate'), entry.peer)
      } else {
        sender(new MRequest(entry.tid, this.PEER, offer))
      }
    })

    // #5 check if the socket has been established correctly
    setTimeout(() => {
      if ((!entry.successful || entry.alreadyExists) && (entry.socket !== null)) {
        entry.socket.destroy()
      }
      if (!entry.successful) {
        this._failed(entry.peer, true)
        debug('[init] emit timeout event: ', entry.jobId, entry.peer, true)
        this.emit(entry.jobId, entry.peer, true)
      }
      this.pending.delete(entry.tid)
    }, this.options.pendingTimeout)
  }

  /**
     * @private
     * Try to finalize the WebRTC connection using the remote offers.
     * @param {MResponse} msg The message containing an offer, a peerId etc.
     */
  _finalize (msg) {
    if (msg.offerType === 'renegociate') {
      debug(`[%s] _finalize regenociation:`, msg)
      if (this.living.store.has(msg.peer)) {
        const socket = this.living.get(msg.peer).socket
        socket.connected && !socket._isNegociating && socket.signal(msg.offer)
      }
      return
    }
    if (!this.pending.has(msg.tid)) {
      // debug(new ExLateMessage('_finalize', msg))
      return
    }

    let entry = this.pending.get(msg.tid)
    if (entry) {
      if (entry.alreadyExists || entry.successful) {
        this._checkPendingEntry(entry)
        debug('The socket already exists: ', entry.peer)
        return
      }
    }
    // #A check if the connection already exists
    if (this.living.contains(msg.peer)) {
      entry.alreadyExists = true
      entry.successful = true
      debug('[_finalize(living exists)] insert/increment')
      const inserting = this.living.insert(msg.peer, undefined, msg.tid)
      if (inserting) {
        debug('[%s]finalize --- arc --> %s', this.PEER, msg.peer)
        this._connected(msg.peer, true)
        this.emit(entry.jobId, msg.peer, false)
      }
      this._checkPendingEntry(entry)
    } else if (this.dying.has(msg.peer)) {
      debug('[_finalize(dying exists)] insert/increment')
      // #B rise from the dead
      entry.alreadyExists = true
      entry.successful = true
      let rise = this.dying.get(msg.peer)
      clearTimeout(rise.timeout)
      this.dying.delete(msg.peer)
      const inserting = this.living.insert(msg.peer, rise.socket, msg.tid)
      if (inserting) {
        debug('[%s]finalize -¡- arc -¡> %s', this.PEER, msg.peer)
        this._connected(msg.peer, true)
        this.emit(entry.jobId, msg.peer, false)
      }
      this._checkPendingEntry(entry)
    } else {
      // #C just signal the offer
      entry.peer = msg.peer
      if (!msg.offer) {
        // throw new ExIncompleteMessage('_finalize', entry, msg)
        // do not do anything
        // if the connection is not done, it will timeout
        // otherwise it will open a channel
      } else {
        debug('[finalize] signaling: ', msg)
        entry.socket.signal(msg.offer)
      }
    }
  }

  /**
     * @private
     * Establish a connection in response to the request of remote peer.
     * @param {function} sender The function that send the offer to the remote
     * initiating peer.
     * @param {MRequest} msg The request message containing offers, peerId, etc.
     **/
  _accept (sender, msg) {
    if (msg.offerType === 'renegociate') {
      debug(`[%s] _accept regenociation:`, msg)
      if (this.living.store.has(msg.peer)) {
        this.living.get(msg.peer).socket.signal(msg.offer)
      }
      return
    }
    // #1 initialize the entry if it does not exist
    let firstCall = false
    const tid = msg.tid
    const peer = msg.peer
    if (!this.pending.has(tid)) {
      firstCall = true
      let entry = new EPending(tid, peer)
      this.pending.set(tid, entry)

      setTimeout(() => {
        (!entry.successful || entry.alreadyExists) && entry.socket && entry.socket.destroy()
        !entry.successful && this._failed(peer, false)
        this.pending.delete(tid)
      }, this.options.pendingTimeout)
    }

    // #2 check if a WebRTC connection to peerId already exists
    let entry = this.pending.get(msg.tid)
    // let entry = this.pending.get(peer)
    if (entry.alreadyExists || entry.successful) { return }

    // #A check if the connection already exists
    if (this.living.contains(msg.peer)) {
      entry.alreadyExists = true
      entry.successful = true
      debug('[_accept(living exists)] insert/increment', msg)
      const inserting = this.living.insert(msg.peer, undefined, msg.tid)
      if (inserting) {
        debug('[%s] <-- arc --- %s', this.PEER, entry.peer)
        this._connected(msg.peer, false)
      }
      firstCall && sender(new MResponse(entry.tid, this.PEER, null))

      this._checkPendingEntry(entry)
    } else if (this.dying.has(msg.peer)) {
      debug('[_accept(dying exists)] insert/increment', msg)
      // #B rise from the dead
      entry.alreadyExists = true
      entry.successful = true
      let rise = this.dying.get(msg.peer)
      clearTimeout(rise.timeout)
      this.dying.delete(msg.peer)
      const inserting = this.living.insert(msg.peer, rise.socket, msg.tid)
      if (inserting) {
        debug('[%s] <¡- arc -¡- %s', this.PEER, msg.peer)
        this._connected(msg.peer, false)
      }
      firstCall && sender(new MResponse(entry.tid, this.PEER, null))

      // delete the pending entry cause we do not use the created one if exists
      this._checkPendingEntry(entry)
    } else {
      // #3 create the events and signal the offer
      if (firstCall && !entry.socket) {
        // #A create a socket
        this.options.config.initiator = false
        let SocketClass = this.options.socketClass
        let socket
        // handle DOMException: Failed to construct 'RTCPeerConnection': Cannot create so many PeerConnections
        try {
          socket = new SocketClass(this.options.config)
        } catch (e) {
          this.emit(entry.jobId, entry.peer, true, e.message)
        }
        // #B update the entry
        entry.socket = socket
        // #C define events
        socket.once('connect', () => {
          entry.successful = true
          if (this.living.contains(entry.peer)) {
            entry.alreadyExists = true
            entry.successful = true
            debug('[_accept(connect/living)] insert/increment')
            const inserting = this.living.insert(entry.peer, undefined, msg.tid)
            if (inserting) {
              debug('[%s] <-- arc --- %s', this.PEER, entry.peer)
              this._connected(entry.peer, false)
            }
            entry.peer = null // becomes the unknown soldier
          } else {
            debug('[_accept(connect/dying)] insert/increment')
            const inserting = this.living.insert(entry.peer, socket, msg.tid)
            if (inserting) {
              debug('[%s] <-- WebRTC --- %s', this.PEER, entry.peer)
              this._connected(entry.peer, false)
            }
          }

          this._checkPendingEntry(entry)
        })
        socket.once('close', () => {
          if (entry.peer !== null) { // if not the unknown soldier
            if (this.living.contains(entry.peer)) {
              // #A remove the socket from the table of
              // living connections
              this.living.removePeer(entry.peer)
              this._disconnected(entry.peer)
            } else if (this.dying.has(entry.peer)) {
              let d = this.dying.get(entry.peer)
              clearTimeout(d.timeout)
              this.dying.delete(entry.peer)
            }
            debug('[%s] <‡- WebRTC -‡- %s', this.PEER, entry.peer)
          } else {
            debug('[%s] <‡- WebRTC -‡- %s', this.PEER, 'unknown')
          }
          this._checkPendingEntry(entry)
        })

        socket.on('data', (d) => {
          let msg = this.decode(d)
          if (msg.type === 'MInternalSend') {
            this._receiveInternalMessage(msg)
          } else {
            this._received(msg.peer, msg.payload)
          }
        })
        socket.on('stream', (s) => {
          this._streamed(entry.peer, s)
        })
        socket.on('error', (e) => {
          // Nothing here, for the failure are detected and handled
          // after this.options.timeout milliseconds.
          debug(e)
          socket.destroy()
        })
        // #4 send offer message using sender
        socket.on('signal', (offer) => {
          if (socket.connected && !socket._isNegotiating) {
            this._sendRenegociateResponse(new MResponse(entry.tid, this.PEER, offer, 'renegociate'), entry.peer)
          } else {
            sender(new MResponse(entry.tid, this.PEER, offer))
          }
        })
      }
      entry.socket.signal(msg.offer)
    }
  }

  /**
     * Remove an arc. If it was the last arc,
     * the WebRTC connexion is downgraded to the dying table. In this table, the
     * connexion will be closed if none create it.
     * @param {string|undefined} peerId The identifier of the peer. If no arg,
     * remove all arcs.
     */
  disconnect (peerId) {
    return new Promise((resolve, reject) => {
      if (typeof peerId === 'undefined') {
        // #1 remove all arcs
        let entries
        try {
          entries = this.living.removeAll()
        } catch (e) {
          return reject(e)
        }
        entries.forEach((entry) => {
          if (entry.socket !== null) {
            let dying = new EDying(entry.peer, entry.socket,
              setTimeout(() => {
                entry.socket && entry.socket.destroy()
              }, this.options.timeout))
            this.dying.set(dying.peer, dying)
          }

          for (let i = 0; i < entry.occ; ++i) {
            if (entry.socket === null || (entry.socket !== null && i < entry.occ - 1)) {
              debug('DISCONNECT-ALL [%s] ††† arc ††† %s', this.PEER, peerId)
            } else {
              debug('DISCONNECT-ALL [%s] ††† WebRTC ††† %s', this.PEER, peerId)
            }
            this._disconnected(entry.peer)
          }
        })
        resolve()
      } else {
        let entry = null
        // #2 remove one arc
        try {
          entry = this.living.remove(peerId)
        } catch (e) {
          return reject(e)
        }
        if (entry) {
          let dying = new EDying(entry.peer, entry.socket, setTimeout(() => {
            entry.socket && entry.socket.destroy()
          }, this.options.timeout))
          this.dying.set(dying.peer, dying)
          debug('DISCONNECT-ONE [%s] ††† WebRTC ††† %s', this.PEER, peerId)
        } else {
          debug('DISCONNECT-ONE [%s] ††† arc ††† %s', this.PEER, peerId)
        }
        this._disconnected(peerId)
        resolve()
      }
    })
  }

  /**
     * Send a message to a remote peer.
     * @param {string} peerId The remote peer to send the message to.
     * @param {object} message The message to send.
     * @param {number} [retry=0] Retry few times to send the message before
     * giving up.
     * @returns {promise} Resolved when the message is sent, reject
     * otherwise. Note that loss of messages is not handled by default.
     */
  send (peerId, message, retry = 0) {
    return new Promise((resolve, reject) => {
      // #1 get the proper entry in the tables
      let entry = null
      if (this.living.contains(peerId)) {
        entry = this.living.get(peerId)
      } else if (this.dying.has(peerId)) {
        entry = this.dying.get(peerId) // (TODO) warn: not safe
      }
      if (entry === null) {
        return reject(new Error('peer not found: ' + peerId))
      }
      // #2 define the recursive sending function
      let __send = (r) => {
        try {
          entry.socket.send(this.encode(new MSend(this.PEER, message)))
          debug('[%s] --- msg --> %s:%s', this.PEER, peerId)
          resolve()
        } catch (e) {
          debug('[%s] -X- msg -X> %s:%s', this.PEER, peerId)
          if (r < retry) {
            setTimeout(() => { __send(r + 1) }, 1000)
          } else {
            return reject(e)
          }
        }
      }
      // #3 start to send
      __send(0)
    })
  }

  stream (peerId, media, retry = 0) {
    return new Promise((resolve, reject) => {
      // #1 get the proper entry in the tables
      let entry = null
      if (this.living.contains(peerId)) {
        entry = this.living.get(peerId)
      } else if (this.dying.has(peerId)) {
        entry = this.dying.get(peerId) // (TODO) warn: not safe
      }
      if (entry === null) {
        this.living.store.forEach(elem => {
          debug(elem.peer)
        })
        reject(new Error('peer not found: ' + peerId))
      }
      // #2 define the recursive sending function
      let __send = (r) => {
        try {
          entry.socket.addStream(media)
          debug('[%s] --- MEDIA msg --> %s:%s', this.PEER, peerId)
          resolve()
        } catch (e) {
          debug('[%s] -X- MEDIA msg -X> %s:%s', this.PEER, peerId)
          if (r < retry) {
            setTimeout(() => { __send(r + 1) }, 1000)
          } else {
            reject(e)
          }
        }
      }
      // #3 start to send
      __send(0)
    })
  }

  _sendRenegociateRequest (request, to, retry = 0) {
    return new Promise((resolve, reject) => {
      // #1 get the proper entry in the tables
      let entry = null
      if (this.living.contains(to)) {
        entry = this.living.get(to)
      } else if (this.dying.has(to)) {
        entry = this.dying.get(to) // (TODO) warn: not safe
      }
      if (entry === null) {
        this.living.store.forEach(elem => {
          debug(elem.peer)
        })
        return reject(new Error('peer not found: ' + to))
      }
      // #2 define the recursive sending function
      let __send = (r) => {
        try {
          entry.socket.send(this.encode(new MInternalSend(this.PEER, request)))
          debug('[%s] --- MEDIA Internal Renegociate msg --> %s:%s',
            this.PEER, to)
          resolve()
        } catch (e) {
          debug('[%s] -X- MEDIA Internal Renegociate msg -X> %s:%s',
            this.PEER, to)
          if (r < retry) {
            setTimeout(() => { __send(r + 1) }, 1000)
          } else {
            return reject(e)
          }
        }
      }
      // #3 start to send
      __send(0)
    })
  }

  _sendRenegociateResponse (response, to, retry = 0) {
    return new Promise((resolve, reject) => {
      // #1 get the proper entry in the tables
      let entry = null
      if (this.living.contains(to)) {
        entry = this.living.get(to)
      } else if (this.dying.has(to)) {
        entry = this.dying.get(to) // (TODO) warn: not safe
      }
      if (entry === null) {
        this.living.store.forEach(elem => {
          debug(elem.peer)
        })
        return reject(new Error('peer not found: ' + to))
      }
      // #2 define the recursive sending function
      let __send = (r) => {
        try {
          entry.socket.send(this.encode(new MInternalSend(this.PEER, response)))
          debug('[%s] --- MEDIA Internal Renegociate msg --> %s:%s',
            this.PEER, to)
          resolve()
        } catch (e) {
          debug('[%s] -X- MEDIA Internal Renegociate msg -X> %s:%s',
            this.PEER, to)
          if (r < retry) {
            setTimeout(() => { __send(r + 1) }, 1000)
          } else {
            return reject(e)
          }
        }
      }
      // #3 start to send
      __send(0)
    })
  }

  _receiveInternalMessage (msg) {
    debug('Receive internal message: ', msg)
    this.living.get(msg.peer).socket.signal(msg.payload.offer)
  }

  /**
   * return an array of living sockets
   * @return {[ELiving]} a living entry with socket, peer id and number of occurences (arcs)
   */
  neighbours () {
    const neigh = []
    this.living.store.forEach(elem => {
      neigh.push(elem)
    })
    return neigh
  }

  _checkPendingEntry (entry) {
    if (this.pending.has(entry.tid)) {
      if (entry.peer === null) {
        if (entry.socket) {
          entry.socket.destroy()
          entry.socket = null
        }
      }
      this.pending.delete(entry.tid)
    }
  }
}

module.exports = Neighborhood
