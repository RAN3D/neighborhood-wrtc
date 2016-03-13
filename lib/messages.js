module.exports.MRequest = function(id, offer){
    this.id = id;
    this.type = 'MRequest';
    this.offer = offer;
};

module.exports.MAnswer = function(id, offer){
    this.id = id;
    this.type = 'MAnswer';
    this.offer = offer;
};
