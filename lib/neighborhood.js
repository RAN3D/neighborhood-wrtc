'use strict';

const EventEmitter = require('events');
const _ = require('lodash');
const uuid = require('uuid/v4');
const SortedArray = require('./extended-sorted-array.js');
const MultiSet = require('./multiset.js');
const SimplePeer = require('simple-peer');

/**
 * Easy-to-use interface on SimplePeer (npm: simple-peer)
 * @param {object} options the options available to the connections, e.g. timeout before
 * @param {string} options.protocol Protocol to use
 * @param {object} options.webrtc Webrtc options
 * @param {number} options.timeout Time to wait for socket destruction or failed message (time in milliseconds)
 * @param {function} options.encoding Method to customize message sent, default: return JSON.stringify(data);
 * @param {function} options.decoding Method to decode a received message, default: return JSON.parse(data);
 * @param {boolean} options.verbose Print log message: default false
 */
class Neighborhood extends EventEmitter {
	constructor (options) {
		super();
    // #1 save options
    this.options = {
      protocol: 'default',
      webrtc: {
        iceServers: [],
        trickle: false,
        initiator: false
      },
      config: {},
      trickle: false,
      timeout: 2 * 60 * 1000,
      encoding: (d) => {
        return JSON.stringify(d);
      },
      decoding: (d) => {
        return JSON.parse(d);
      },
      verbose: false
    };
    this.options = _.merge(this.options, options);
    // Override config to match webrtc options
    this.options.config = this.options.webrtc;

    this.protocol = this.options.protocol + '-neighborhood-wrtc';

		this.encoding = this.options.encoding;
		this.decoding = this.options.decoding;
		this.ID = uuid();

		if(options && options.verbose) {
			this.verbose = options.verbose;
		}

    /*!
     * \brief compare the id of entries in tables
     */
    this.Comparator = (a, b) => {
        var first = a.id || a;
        var second = b.id || b;
        if (first < second){ return -1; };
        if (first > second){ return  1; };
        return 0;
    };
    // #2 initialize tables
    this.pending = new SortedArray(this.Comparator); // not finalized yet
    this.living = new MultiSet(this.Comparator); // live and usable
    this.dying = new SortedArray(this.Comparator); // being remove
	}

  /**
   * @private
   */
	MResponse (tid, pid, offer, protocol) {
		return {
			tid: tid,
			pid: pid,
			protocol: protocol,
			type: 'MResponse',
			offer: offer
		};
	}
  /**
   * @private
   */
	MRequest (tid, pid, offer, protocol) {
		return {
			tid: tid,
			pid: pid,
			protocol: protocol,
			type: 'MRequest',
			offer: offer
		};
	}

  /**
   * @private
   */
	log (...args) {
		if(this.verbose) {
			console.log('[NEIGHBORHOOD] ', args);
		}
	}

  /**
   * Disconnect one of the arc with the identifier in argument. If
   * it was the last arc with such id, the socket is relocated to the dying
   * table. The socket will be destroy after a bit. If there is no argument,
   * disconnect the whole.
   * @param {string|undefined} id Id provided to just disconnect the arc or if undefined disconnect all arcs
   */
  disconnect (id) {
    let result = true;
    if (!id) {
      // #1 disconnect everything
      this.pending.arr.forEach((e) => {
          e.socket && e.socket.destroy();
      });
      while (this.living.ms.arr.length > 0) {
          const e = this.living.ms.arr[0];
          e.socket && e.socket.destroy();
      }
      while (this.dying.arr.length > 0) {
          const e = this.dying.arr[0];
          e.socket && e.socket.destroy();
      }
    } else {
      // #2 remove one arc
      let entry = this.living.remove(id);
      entry && this.emit('disconnect', entry.id);
      if (entry && entry.occ <= 0) {
          entry.timeout = setTimeout(function () {
              entry.socket.destroy();
          }, this.options.timeout);
          this.dying.insert(entry);
      }
      result = entry && true || false;
    }
    return result;
  }

	/**
	 * New method to encode the message as we want
	 * @param  {object} message The message to encode
	 * @return {string|binary} Encoded message
	 */
	encode (message) {
		return this.encoding(message);
	}

	/**
	 * New method to encode the message as we want
	 * @param  {object} message The message to encode
	 * @return {string|binary} Encoded message
	 */
	decode (message) {
		return this.decoding(message);
	}

	/**
	 * Send a message to the socket in argument
	 * @param {string} id the identifier of the socket
	 * @param {object} message the message to send
	 * @return {boolean} true if the message is sent, false otherwise
	 */
	send (id, message) {
		// #1 convert message to string (TODO) check if there is a better way
		let msg = ((message instanceof String) && message) || this.encode(message);
		// #2 get the socket to use
		let entry = this.get(id);
		let socket = entry && entry.socket;
		// #3 send
		let result = msg && socket && socket.connected && socket._channel && (socket._channel.readyState === 'open');
		// result && socket.send(msg);
		try {
			result && socket.send(msg);
			// DONT SET RESULT TO TRUE !
		} catch (e) {
			this.log('[NEIGHBORHOOD:SEND:ERROR] ', new Error(e));
			result = false;
		}
		return result;
	}

	/**
	* creates a new incomming or outgoing connection depending on arguments
	* @param {callback} callbacks the callback function when the stun/ice server returns the
	* offer
	* @param {object} message empty if it must initiate a connection, or the message received
	* if it must answer or finalize one
	* @param {string} protocol the connection is established for a specific protocol
	* @return {string} the id of the socket
	*/
	connection (callbacks, message, protocol) {

		let msg = (callbacks && callbacks.type && callbacks) || message;
		let result;

		if (!msg) {
			result = this.initiate(callbacks, protocol);
		} else if (msg.type==='MRequest') {

			if(message && message.pid && this.ID !== message.pid) {
				result = this.accept(msg, callbacks);
				result = this.alreadyExists(msg, callbacks) || result;
			}

		} else if (msg.type==='MResponse') {
			result = this.finalize(msg);
			result = this.alreadyExists(msg) || result;
		}

		return result && result.id;
	}

  /**
   * Get the entry corresponding to the id in argument. The entry contains
   * the socket.
   * @param {string} id the identifier of the socket to retrieve
   * @return {object} an entry from tables. It priorizes entries in living, then dying,
   * then pending.
   */
  get(id){
      return this.living.get(id) || this.dying.get(id) || this.pending.get(id);
  }

	/**
	 * @private
	 * Common behavior to initiating and accepting sockets
	 * @param {object} entry the entry in the neighborhood table
	 * @return {void}
	 */
	common (entry) {
		const self = this, socket = entry.socket;

		socket.on('data', (message) => {
			message = self.decode(message);
			self.emit('receive', entry.pid, message);
		});
		socket.on('stream', (stream) => {
			self.emit('stream', entry.pid, stream);
		});

		socket.on('error', err => {
			self.emit('error', new Error(err));
		});
	}

	/**
	 * @private
	 * initiates a connection with another peer -- the id of which is unknown
	 * @param {callback} callbacks the function to call when signaling info are received and
	 * when the connection is ready to be used
	 * @param {string} protocol The protocol
	 * @return {object} entry
	 */
	initiate (callbacks, protocol) {
		const self = this;
		let opts = self.options.config;
		opts.initiator = true;
		let socket = new SimplePeer(opts);
		let entry = {
			id: uuid(),
			socket: socket,
			protocol: protocol,
			successful: false, // not yet
			onOffer: callbacks && callbacks.onInitiate,
			onReady: callbacks && callbacks.onReady
		};

		this.pending.insert(entry);
		socket.on('signal', (offer) => {
			entry.onOffer && entry.onOffer(self.MRequest(entry.id, self.ID, offer, protocol));
		});

		entry.timeout = setTimeout(() => {
			let e = self.pending.get(entry.id);
			if (e && !e.successful) {
				self.emit('fail', '[FAIL:INITIATE] an error occured during removing the entry');
			}
			self.pending.remove(entry) && socket.destroy();
		}, this.options.timeout);
		return entry;
	}


	/**
	 * @private
	 * accept the offer of another peer
	 * @param {object} message the received message containing id and offer
	 * @param {callback} callbacks the function call after receiving the offer and
	 * when the connection is ready
	 * @return {object} Entry
	 */
	accept (message, callbacks) {
		// #1 if already exists, use it


		let prior = this.pending.get(message.tid);
		if (prior) {
			return prior;
		}
		// #2 otherwise, create the socket
		const self = this;
		// let opts=JSON.parse(JSON.stringify(this.options));// quick but ugly copy
		let opts = this.options.config;
		opts.initiator = false;
		let socket = new SimplePeer(opts);
		let entry = {
			id: message.tid,
			pid: message.pid,
			protocol: message.protocol,
			socket: socket,
			successful: false,
			onOffer: callbacks && callbacks.onAccept,
			onReady: callbacks && callbacks.onReady
		};

		this.pending.insert(entry);
		socket.on('signal', function (offer) {
			entry.onOffer && entry.onOffer(self.MResponse(entry.id, self.ID, offer, entry.protocol));
		});
		socket.on('connect', function () {
			self.get(entry.pid) && socket.destroy();
			self.pending.remove(entry);
			self.living.insert({
				id: entry.pid,
				socket: entry.socket,
				onReady: entry.onReady,
				onOffer: entry.onOffer
			});


			entry.onReady && entry.onReady(entry.pid);
			self.emit('ready', entry.pid);
			entry.protocol && self.emit('ready-'+entry.protocol, entry.pid);

			clearTimeout(entry.timeout);
			entry.timeout = null;
		});
		socket.on('close', function () {
			if (self.pending.contains(entry.id)) {
				// #A pending: entry is kept until automatic destruction
				entry.socket = null;
			} else {
				// #B living or dying: clear the tables
				entry.timeout && clearTimeout(entry.timeout);
				entry.timeout = null;
				let live = self.living.removeAll(entry.pid);
				if (live) {
					for (let i = 0; i < live.occ; ++i) {
						self.emit('disconnect', entry.pid);
					}
				}
				self.dying.remove(entry.pid);
			}
		});

		this.common(entry);

		entry.timeout = setTimeout(function () {
			let e = self.pending.get(entry.id);
			if (e && !e.successful) {
				self.emit('fail', '[FAIL:ACCEPT] an error occured during removing the entry');
			}
			self.pending.remove(entry.id) && socket.destroy();
		}, this.options.timeout);
		return entry;
	}


	/**
	 * @private
	* finalize the behavior of an initiating socket
	* @param {object} message the received message possibly containing an answer to the
	* proposed offer
	* @return {object} Return prior entry
	*/
	finalize (message) {
		// #1 if it does not exists, stop; or if it exists but already setup
		// return it
		let prior = this.pending.get(message.tid);
		if (!prior || prior.pid) {
			return prior;
		}
		// #2 otherwise set the events correctly
		prior.pid = message.pid;

		let entry = {
			id: message.pid,
			socket: prior.socket,
			protocol: prior.protocol,
			onReady: prior.onReady,
			onOffer: prior.onOffer
		};

		const self = this;
		let socket = entry.socket;
		socket.on('connect', function () {

			self.get(entry.id) && socket.destroy();
			self.pending.remove(prior);
			self.living.insert(entry);
			entry.onReady && entry.onReady(prior.pid);
			self.emit('ready', prior.pid);
			entry.protocol && self.emit('ready-'+entry.protocol, prior.pid);
			clearTimeout(prior.timeout);

		});
		socket.on('close', function () {
			if (self.pending.contains(message.tid)) {
				self.pending.get(message.tid).socket = null;
			} else {
				prior.timeout && clearTimeout(prior.timeout);
				prior.timeout = null;
				let live = self.living.removeAll(prior.pid);
				if (live) {
					for (let i = 0; i < live.occ; ++i) {
						self.emit('disconnect', prior.pid);
					}
				}
				self.dying.remove(prior.pid);
			}
		});

		this.common(prior);

		return prior;
	}

	/**
	 * @private
	*  the peer id already exists in the tables
	*  @param {object} message The message
	*  @param {callback} callbacks the callbacks
	*  @return {object} alreaydExist
	*/
	alreadyExists (message, callbacks) {
		const self = this;
		let alreadyExists = this.get(message.pid);
		if  (!alreadyExists) {
			// #A does not already exists but pending
			let entry = this.pending.get(message.tid);
			entry && entry.socket && message.offer && entry.socket.signal(message.offer);
		} else {
			// #B already exists and pending
			let toRemove = this.pending.get(message.tid);
			if (toRemove && toRemove.socket) { // exists but socket still w8in
				if (!alreadyExists.timeout) {
					// #1 already in living socket, add an occurrence
					this.living.insert(message.pid);
					toRemove.successful = true;
				} else {
					// #2 was dying, resurect the socket
					this.dying.remove(alreadyExists);
					clearTimeout(alreadyExists.timeout);
					alreadyExists.timeout = null;
					this.living.insert(alreadyExists);
					toRemove.successful = true;
				}
				toRemove.socket.destroy();
				// #C standard on accept function if it exists in arg
				message.offer && callbacks && callbacks.onAccept && callbacks.onAccept(self.MResponse(message.tid, this.ID,	null,	message.protocol));

				(callbacks &&	callbacks.onReady && callbacks.onReady(alreadyExists.id)) ||	(toRemove && 	toRemove.onReady &&	toRemove.onReady(alreadyExists.id));
				this.emit('ready', alreadyExists.id);
				message.protocol && this.emit('ready-'+message.protocol, alreadyExists.id);
			}
		}
		return alreadyExists;
	}

}


module.exports = Neighborhood;
