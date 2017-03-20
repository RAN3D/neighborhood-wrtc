'use strict';

module.exports.MResponse = (tid, pid, offer, protocol) => {
		return {
			tid: tid,
			pid: pid,
			protocol: protocol,
			type: 'MResponse',
			offer: offer
		};
};

module.exports.MRequest = (tid, pid, offer, protocol) => {
		return {
			tid: tid,
			pid: pid,
			protocol: protocol,
			type: 'MRequest',
			offer: offer
		};
};
