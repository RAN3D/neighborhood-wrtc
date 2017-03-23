'use strict';

/**
 * The message containing the request to create a WebRTC connexion
 * @param {string} temporaryId A temporary identifier during the socket
 * creation. The key will be changed to peerId when the connexion is established
 * successfully.
 * @param {string} peerId The identifier of the peer that will be reachable
 * through the socket being created. Null if it is yet to be known.
 * @param {string} protocolId The identifier of the protocol that wishes to
 * create the connexion.
 * @param {object} offer The WebRTC offer containing ways to establish a direct 
 * peer-to-peer connexions. See WebRTC for more information.
 */
class MRequest {
    constructor (temporaryId, peerId, protocolId, offer) {
        this.tid = temporaryId;
        this.peer = peerId;
        this.pid = protocolId;
        this.offer = offer;
        this.type = 'MRequest';
    };
};

/**
 * The message containing the response to create a WebRTC connexion
 * @param {string} temporaryId A temporary identifier during the socket
 * creation. The key will be changed to peerId when the connexion is established
 * successfully.
 * @param {string} peerId The identifier of the peer that will be reachable
 * through the socket being created. Null if it is yet to be known.
 * @param {string} protocolId The identifier of the protocol that wishes to
 * create the connexion.
 * @param {object} offer The WebRTC offer containing ways to establish a direct 
 * peer-to-peer connexions. See WebRTC for more information.
 */
class MResponse {
    constructor (temporaryId, peerId, protocolId, offer) {
        this.tid = temporaryId;
        this.peer = peerId;
        this.pid = protocolId;
        this.offer = offer;
        this.type = 'MResponse';
    };
};

/**
 * Message sent when protocolId wishes to send payload. It is a basic
 * encapsualtion of protocolId.
 * @param {string} protocolId The identifier of the protocol that wishes to send
 * a message
 * @param {object} payload The payload of the message.
 */
class MSend {
    constructor (protocolId, payload){
        this.pid = protocolId;
        this.payload = payload;
        this.type = 'MSend';
    };
};

module.exports = MRequest;
module.exports = MResponse;
module.exports = MSend;
