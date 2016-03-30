# neighborhood-wrtc

<i>Keywords: WebRTC, browser-to-browser communication, overlay network</i>

Project that aims to ease the WebRTC connection establishment process. Among
others, it alleviates the need to know which socket produced which offer.  It
also reuses existing connections instead of establishing new ones, when it is
possible. It aims to be part of network protocols that build overlay networks.
The API may change to face the need of overlay network protocols.

Neighborhood-wrtc is built on top of the (who said amazing?)
[simple-peer](https://github.com/feross/simple-peer) project.

## Installation

Using npm: ```$ npm install neighborhood-wrtc```

Using bower: ```$ bower install neighborhood-wrtc```

## Usage

```js
var Neighborhood = require('neighborhood-wrtc');

// #A initialize neighborhood tables with(-out here) WebRTC-specific options
var n1 = new Neighborhood(someOptions);
var n2 = new Neighborhood(otherOptions);

// #B default behavior of connections possibly with parameters
var callbacks = {
  onInitiate: function(requestMessage){
    // probably find a way to send it to someone
  },
  onAccept: function(responseMessage){
    // probably find a way to send it back
  },
  onReady: function(id){
    // do something when the connection is established
    // maybe use the id of the new socket to perform an operation
  }
};

// #C establish a browser-to-browser communication channel
// #1 initiate a connection at n1
var idSocket1 = n1.connection(callbacks);

// #2 accept the connection at n2 using the message from n1
var idSocket2 = n2.connection(callbacks, requestMessage);

// #3 finalize the connection at n1 using the answer from n2
var idSocket1 = n1.connection(responseMessage);
```

<br />

```js
// #A receive a message from a neighbor in the table
n1.on('receive', function(id, message){
  n1.send(id, 'ping');
};

n2.on('receive', function(id, message){
  n2.send(id, 'pong'); 
};

// #B get the entry corresponding to the id in argument,
// null if it does not exist
var entry = n1.get(idSocket);

// #C n1 sends a message to n2 using the identifier of the socket
var success = n1.send(idSocket1, 'ping');
```

<br />

```js
// #A an arc is added successfully, i.e., either a channel has been
// properly established, or the channel already existed and an arc
// depends on it. It is worth noting that a same instance of the module
// can be used by multiple protocol at once, hence, the events are
// divided:
// #1 general event without specific protocol associated;
n1.on('ready', function(id){
  // the arc id has been established
});

// #2 protocol-specific event.
n1.on('ready-' + <protocol-name>, function(id){
  // protocol-name is listening with more attention to such events
});

// #B remove an arc from the view. If this arc happens to be the last
// of its kind. The channel will be destroy after a short delay (except
// if an arc of the corresponding type is added again before the
// countdown).
n2.disconnect(id);

// #C remove all arcs at once.
n2.disconnect();
```
