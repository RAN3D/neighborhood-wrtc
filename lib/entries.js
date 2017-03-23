'use strict';

/**
 * Entry of the pending table containing sockets being created.
 * @param {string} temporaryId A temporary id used to retrieve the entry.
 * @param {string} peerId The identifier of the peer reachable through the
 * socket. Null if the peerId is yet to be known.
 * @param {string} protocolId The identifier of the protocol that wishes to
 * establish the connexion.
 * @param {object} socket The WebRTC socket. 
 * @param {number} timeout Maximum time for a connexion to establish.
 */
class EPending {
    constructor (temporaryId, peerId, protocolId, socket, timeout) {    
        this.tid = temporaryId; // key
        this.peer = peerId;
        this.pid = protocolId;
        this.socket = socket;
//        this.successful = false;
//        this.alreadyExists = false;
//        this.timeout = timeout;
    };
};

/**
 * Entry of the living table containing sockets still in use.
 * @param {string} peerId The identifier of the peer reachable through the 
 * socket.
 * @param {string} protocolId The identifier of the protocol that creates an arc
 * to this peer using this socket. Protocols can have multiple arcs leading to a
 * same peer. Multiple protocols can share a same socket.
 * @param {object} socket The WebRTC socket.
 */
class ELiving {
    constructor (peerId, protocolId, socket) {
        this.peer = peerId; // key
        this.socket = socket;

        this.protocols = new Map();
        this.increment(protocolId);
    };

    /**
     * Add an occurrence of the arc to the protocol
     * @param {string} protocolId The identifier of the protocol.
     */
    increment (protocolId) {
        if (!this.protocols.has(protocolId)){
            this.protocols.set(protocolId, 0);
        };
        this.protocols.set(protocolId, this.protocols.get(protocolId) + 1);
    };

    /**
     * Remove an occurrence of the arc to the protocol
     * @param {string} protocolId The identifier of the protocol.
     * @returns {boolean} True if an arc has been remove, false if the protocol
     * do not have such arc.
     */
    decrement (protocolId) {
        let found = false;
        if (this.protocols.has(protocolId)){
            this.protocols.set(this.protocols.get(protocolId) - 1);
            if (this.protocols.get(protocolId) <= 0){
                this.protocols.delete(protocolId);
            };
            found = true;
        };
        return found;        
    };

    /**
     * Count the number of arcs leading to this peer
     * @returns {integer} The sum of occurrences of protocols using this
     * socket.
     */
    sum () {
        let result = 0;
        this.protocols.foreach( (k, v) => {
            result += v;
        });
        return result;
    };
};


/**
 * Entry of the dying table containing sockets being removed.
 * @param {string} peerId The identifier of the peer reachable through the
 * socket.
 * @param {object} socket The WebRTC socket.
 * @param {number} timeout Time before the connexion is completely removed 
 * and destroyed.
 */
class EDying {
    constructor (peerId, socket, timeout){
        this.pid = peerId; // key
        this.socket = socket;
        this.timeout = timeout;
    };
};


module.exports = EPending;
module.exports = ELiving;
module.exports = EDying;
