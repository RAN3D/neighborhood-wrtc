// var Neighborhood = require('../lib/neighborhood.js');
var Neighborhood = require('neighborhood-wrtc');
//var WRTC = require('electron-webrtc')();
var WRTC;
var opts = {webrtc: {wrtc: WRTC || null, trickle: true}};

// create 3 neighborhood tables without options
var n1 = new Neighborhood(opts);
var n2 = new Neighborhood(opts);
var n3 = new Neighborhood(opts);

var callbacks = function(src, dest){
    return {
        onInitiate: function(offer){
            dest.connection(callbacks(dest, src), offer);
        },
        onAccept: function(offer){
            dest.connection(offer);
        },
        onReady: function(){
            console.log("Connection established.");
        }
    };
};

// #1 establishing a connection from n1 to n2, twice but one socket is kept
n1.connection(callbacks(n1, n2));
n1.connection(callbacks(n1, n2));
// #2 establishing a connection from n1 to n3
n1.connection(callbacks(n1, n3));
// > console: should see 6 "connection established" messages

setTimeout(function(){
    n1.connection(callbacks(n1,n3));
}, 10000);
