var Neighborhood = require('../lib/neighborhood.js');
var WRTC = require('electron-webrtc')();

var opts = {webrtc: {wrtc: WRTC}};

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
            console.log("Connection established");
        }
    };
};

// #1 establishing a connection from n1 to n2
n1.connection(callbacks(n1, n2));
// #2 establishing a connection from n1 to n3
//n1.connection(callbacks(n1, n3));
// > console: should see 4 "connection established" messages

// #3 two arcs with one socket
setTimeout(function(){
    n1.connection(callbacks(n1, n3))
}, 20000);
