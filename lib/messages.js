var GUID = require('./guid.js');


module.exports.MRequest = function(peer, offer){
    this.id = GUID();
    this.type = 'MRequest';
    this.peer = peer;
    this.offer = offer;
};

module.exports.MAnswer = function(peer, offer){
    this.id = GUID();
    this.type = 'MAnswer';
    this.peer = peer;
    this.offer = offer;
};
