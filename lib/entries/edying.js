'use strict';

/**
 * Entry of the dying table containing sockets being removed.
 */
class EDying {
    /**
     * @param {string} peerId The identifier of the peer reachable through the
     * socket.
     * @param {object} socket The WebRTC socket.
     * @param {number} timeout Time before the connexion is completely removed 
     * and destroyed.
     */
    constructor (peerId, socket, timeout){
        this.peer = peerId; // key
        this.socket = socket;
        this.timeout = timeout;
    };
};

module.exports = EDying;
