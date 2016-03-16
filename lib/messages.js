module.exports.MRequest = function(id, offer){
    return { id: id,
             type: 'MRequest',
             offer: offer };
};

module.exports.MResponse = function(id, offer){
    return { id: id,
             type: 'MResponse',
             offer: offer };
};
