var Neighborhood = require('neighborhood-wrtc').default;
var WRTC;
var opts = {
  webrtc: {
    iceServers: [],
    trickle: true
  }
};

// create 3 neighborhood tables without options
var n1 = new Neighborhood(opts);
var n2 = new Neighborhood(opts);
var n3 = new Neighborhood(opts);
var n4 = new Neighborhood(opts);

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
// > console: and two others after a bit
setTimeout(function(){
    n1.connection(callbacks(n1,n3));
}, 10000);

// #3 a connection can fail to establish
var failCallbacks = function(src, dest){
    return {
        onInitiate: function(offer){
            dest.connection(failCallbacks(dest, src), offer);
        },
        onAccept: function(offer){
//            dest.connection(offer);
        },
        onReady: function(){
            console.log('message that never appears');
        }
    }
};

n1.connection(failCallbacks(n1, n4));

// #4 two minutes -- the timeout -- before a fail appears
n1.on('fail', function(){
    console.log('@n1, Fail.');
});

n4.on('fail', function(){
    console.log('@n4, Fail.');
});

// #5 remove an arc using n1.disconnect(id)
function disco(peer){
    return function(id){
        console.log('@'+ peer +' the arc '+ id +' has been removed.');
    };
};

n1.on('disconnect', disco('n1'));
n2.on('disconnect', disco('n2'));
n3.on('disconnect', disco('n3'));
n4.on('disconnect', disco('n4'));
