module.exports.MRequest = function(tid, pid, offer){
    return { tid: tid,
             pid: pid,
             type: 'MRequest',
             offer: offer };
};

module.exports.MResponse = function(tid, pid, offer){
    return { tid: tid,
             pid: pid,
             type: 'MResponse',
             offer: offer };
};
