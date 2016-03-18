module.exports.MRequest = function(temp, id, offer){
    return { id: id,
             temp: temp, // temporary id at origin 
             type: 'MRequest',
             offer: offer };
};

module.exports.MResponse = function(temp, id, offer){
    return { id: id,
             temp: temp, // still piggyback temp origin id
             type: 'MResponse',
             offer: offer };
};
