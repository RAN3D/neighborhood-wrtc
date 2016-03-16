# neighborhood-wrtc

<i>Keywords: WebRTC, browser-to-browser communication, overlay network</i>

Project that aims to ease the WebRTC connection establishment process. Among
others, it alleviates the need to know which socket produced which offer. It
aims to be part of network protocols that build overlay networks.  The API may
change to face the need of overlay network protocols.

Neighborhood-wrtc is built on top of the (who said amazing?)
[simple-peer](https://github.com/feross/simple-peer) project.

## Installation

Through npm: ```$ npm install neighborhood-wrtc```

Through bower: ```$ bower install neighborhood-wrtc```

## Usage

```js
var Neighborhood = require('neighborhood-wrtc');

// #0 initialize neighborhood tables with(-out here) WebRTC-specific options  
var n1 = new Neighborhood({});
var n2 = new Neighborhood({});

// #A default behavior of connections possibly with parameters
var options = {
  onInitiate: function(requestMessage){
    // probably find a way to send it to someone
  },
  onAccept: function(responseMessage){
    // probably find a way to send it back
  },
  onReady: function(){
    // do something when the connection is established
  }
};

// #B initiate a connection 
var idSocket = n1.connection(options);

// #C the initiate part of n1 sends the request message to n2
var idSocket = n2.connection(options, requestMessage);

// #D the accept part sends the response message to n1
var idSocket = n1.connection(responseMessage);
```

<br />

```
// #1 receive a message from a neighbor in the table
n1.on('receive', function(origin, message){
  origin.send('ping');
};

n2.on('receive', function(origin, message){
  origin.send('pong');
};


// #2 it returns {id, socket, state}
n1.get(idSocket).socket.send('ping');
```