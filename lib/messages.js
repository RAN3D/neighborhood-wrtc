module.exports.MRequest = function(id, offer){
    this.id = id;
    this.type = 'MRequest';
    this.offer = offer;
};

module.exports.MResponse = function(id, offer){
    this.id = id;
    this.type = 'MResponse';
    this.offer = offer;
};
