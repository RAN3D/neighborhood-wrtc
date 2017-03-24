'use strict';

var Neighborhood = require('neighborhood-wrtc');

// #1 create a protocol that will run on top of this module. It must implement
// the 4 properties : pid, opened, closed, failed.
class P {
    constructor(pid){
        this.id = pid;
        
    };
    
    pid () {
        return this.id;
    };
    
    connected (peerId) {
        console.log('@'+ this.id + ' an arc has been created.');
    };
    
    disconnected (peerId) {
        console.log('@'+ this.id +': an arc has been removed.');
    };

    received (peerId, message) {
        console.log('@'+ this.id +': received "'+message+'" from '+ peerId);
    };
};

// #2 create the neighborhood tables and, for each, register a protocol
let opts = { config: { trickle: true } };
var n1 = new Neighborhood(opts);
var p1 = n1.register(new P(1));

var n2 = new Neighborhood(opts);
var p2 = n2.register(new P(2));

// var n3 = new Neighborhood();
// var p3 = n3.register(new P(3));

// var n4 = new Neighborhood();
// var p4 = n4.register(new P(4));

// #3 callback functions ensuring the peers exchanges messages
// from -> to -> from
var callback = (from, to) => {
    return (offer) => {
        to.connect( (answer) => { from.connect(answer); }, offer);
    };
};

// #4 establishing a connection from p1 to p2, twice but one socket is kept
p1.connect(callback(p1, p2));
//p1.connect(callback(p1, p2));
// #5 p1 -> p3
// p1.connect(callback(p1, p3));
// // > console: should see 6 'connection established' messages
// // > console: and two others after 10 seconds
//setTimeout(function(){
//     p1.connect(callback(p1, p3));
//}, 5000);

// // #6 a connection can fail to establish
// var failCallback = function(from, to){
//     return function(offer) {
//         to.connect(function(answer){
//             // from.connect(answer); intentionnal comment
//         }, offer);
//     };
// };

// p1.connect(failCallback(p1, p4));

// // #7 remove an arc using n1.disconnect(id)
// setTimeout(function(){
//     // (wait a bit for the connection to complete)
//     console.log('p1 -/-> p2 : ' + p1.disconnect(n2.PEER));
//     console.log('p1 -/-> p2 : ' + p1.disconnect(n2.PEER));
//     console.log('p1 -/-> p2 : ' + p1.disconnect(n3.PEER));
// }, 3000);


// // #8 send a message
// setTimeout(function(){
//     console.log('p1 -msg-> p2 : ' + p1.send(n2.PEER, 'Hello! :3'));
//     console.log('p1 -msg-> p1 : ' + p1.send(n1.PEER, 'Hello! :3'));
// },1500);
