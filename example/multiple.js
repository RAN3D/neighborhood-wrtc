'use strict';

const Neighborhood = require('neighborhood-wrtc');

// #1 create a protocol that will run on top of this module. It must implement
// the 4 properties : pid, opened, closed, failed.
class P {
    constructor(pid, n){
        this.id = pid;
        this.interface = n.register(this);
    };
    
    _pid () { return this.id;  };
    
    _connected (peerId) {
        console.log('P-%s: an arc has been created.', this.id);
    };
    
    _disconnected (peerId) {
        console.log('P-%s: an arc has been removed.', this.id);
    };

    _received (peerId, message) {
        // #1 someone tries to establish a WebRTC connection
        if (message.type === 'MRequest'){
            this.interface.connect( (response) => {
                this.interface.send(peerId, response);
            },  message);
        } else if (message.type === 'MResponse'){
            this.interface.connect(message);
        } else {
            // #2 regular message
            console.log('P-%s: message received from @%s: %s',
                        this.id, peerId, message);
        };
    };

    _failed (peerId) {
        console.log('P-%s: failed to establish a connection with %s.',
                    this.id, peerId);
    };
};

// #2 create the neighborhood tables and, for each, register a protocol
const opts1 = { peer: '1', config: { trickle: true } };
const n1 = new Neighborhood(opts1);
const p11 = new P(1, n1);
const p12 = new P(2, n1);

const opts2 = { peer: '2', config: { trickle: true } };
const n2 = new Neighborhood(opts2);
const p21 = new P(1, n2);
const p22 = new P(2, n2);

// #3 callback functions ensuring the peers exchanges messages
// from -> to -> from
var callback = (from, to) => {
    return (offer) => {
        to.interface.connect( (answer) => {
            from.interface.connect(answer);
        }, offer);
    };
};

// #4 establish WebRTC connection from protocol 1@1 to protocol 1@2
p11.interface.connect(callback(p11, p21));

// #5 create an arc from protocol 1@1 to protocol 1@2 using WebRTC chan
setTimeout( () => {
    p11.interface.connect( (request) => {
        p11.interface.send('2', request);
    });
}, 2000 );

// #6 create an arc from protocol 2@1 to protocol 2@2 using WebRTC chan
setTimeout( () => {
    p12.interface.connect( (request) => {
        p12.interface.send('2', request);
    });
}, 4000 );

// #7 remove an arc from protocol 2
setTimeout( () => {
    p12.interface.disconnect('2');
}, 6000);
