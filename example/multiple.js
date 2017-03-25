'use strict';

const Neighborhood = require('neighborhood-wrtc');

// #1 create a protocol that will run on top of this module. It must implement
// the 4 properties : pid, opened, closed, failed.
class P {
    constructor(pid){
        this.id = pid;        
    };
    
    pid () { return this.id;  };
    
    connected (peerId) {
        console.log('P-%s: an arc has been created.', this.id);
    };
    
    disconnected (peerId) {
        console.log('P-%s: an arc has been removed.', this.id);
    };

    received (peerId, message) {
        console.log('P-%s: message received from @%s: %s',
                    this.id, peerId, message);
    };

    failed (peerId) {
        console.log('P-%s: failed to establish a connection with %s.',
                    this.id, peerId);
    };
};

// #2 create the neighborhood tables and, for each, register a protocol
const opts1 = { peer: '1', config: { trickle: true } };
const n1 = new Neighborhood(opts1);
const p1 = n1.register(new P(1));
const p2 = n1.register(new P(2));

const opts2 = { peer: '2', config: { trickle: true } };
const n2 = new Neighborhood(opts2);
const p3 = n2.register(new P(1));
const p4 = n2.register(new P(2));

// #3 callback functions ensuring the peers exchanges messages
// from -> to -> from
var callback = (from, to) => {
    return (offer) => {
        to.connect( (answer) => { from.connect(answer); }, offer);
    };
};


