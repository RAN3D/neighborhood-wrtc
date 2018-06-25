# neighborhood-wrtc [![Build Status](https://travis-ci.org/RAN3D/neighborhood-wrtc.svg?branch=master)](https://travis-ci.org/RAN3D/neighborhood-wrtc)

<i>Keywords: WebRTC, browser-to-browser communication, overlay network</i>

Project that aims to ease the WebRTC connection establishment process. Among
others, it alleviates the need to know which socket produced which offer.  It
also reuses existing connections instead of establishing new ones, when this is
possible. It aims to be part of network protocols that build overlay networks
and to provide them logical arcs - using identifiers - instead of channels.
Finally, it is designed to handle multiple protocols, for they may share
identical arcs. For instance, consider several applications embedded in a single
web page, some of them are connected to a same peer. Instead of working
completely on their own, these applications will share the same channel. The
neighborhood-wrtc module will redirect the messages to the right applications.

Note: The [API](https://ran3d.github.io/neighborhood-wrtc/) may change to face
the need of overlay network protocols.

Neighborhood-wrtc is built on top of the (who said amazing?)
[simple-peer](https://github.com/feross/simple-peer) project.


## Principle

<p align='center'>
<img src='./img/notsharing.png'> </img>
</p>

Three peer-to-peer applications ```8O```, ```:|``` and ```>_<``` run in a same
tab of a WebRTC-compatible browser. When they want to connect to their
respective remote counterpart, the browser must establish 3 WebRTC connections,
for they do not share any information between each other.

<p align='center'>
<img src='./img/sharing.png'> </img>
</p>

Using this module to create WebRTC connections, they can share it and messages
will be automatically redirected to corresponding applications. In this example,
instead of establishing and maintaining 3 distinct connections -- which may be
costly in terms of time and bandwidth -- neighborhood-wrtc only establish 1. The
connection is destroyed only if the 3 applications remove it.

## Installation

```
$ npm install neighborhood-wrtc
```

## API

You can find the API [here](https://ran3d.github.io/neighborhood-wrtc/).

Want to create your protocol?
```javascript
// import the lib
import Neighborhood from 'neighborhood-wrtc'
// create a class that fullfilled the [following API](https://ran3d.github.io/neighborhood-wrtc/class/lib/interfaces/iprotocol.js~IProtocol.html)
class P { // check IProtocol to see the interface
  constructor (pid, peer) {
    this.id = pid
    this.peer = peer
  };

  _pid () { return this.id };

  _connected (peerId) {
    console.log('@%s-P%s: an arc has been created.', this.peer, this.id)
  };

  _disconnected (peerId) {
    console.log('@%s-P%s: an arc has been removed.', this.peer, this.id)
  };

  _received (peerId, message) {
    console.log('@%s-P%s: message received from @%s: %s',
      this.peer, this.id, peerId, message)
  };

  _streamed (peerId, stream) {
    console.log('Receive a stream from: %s', peerId, stream)
  }

  _failed (peerId) {
    console.log('%s-P%s: failed to establish a connection with %s.',
      this.peer, this.id, peerId)
  };
};

// create the Peer
const neigh = new Neighborhood({
  peer: 'myid1',
  config: {
    config: {iceServers: [...]},
    trickle: true
  }
})
// create the protocol
const p1 = neigh.register(new P('mywonderfullprotocol', 'myid1'))

// create the Peer
const neigh = new Neighborhood({
  peer: 'myid2',
  config: {
    config: {iceServers: [...]},
    trickle: true
  }
})
// create the protocol
const p2 = neigh.register(new P('mywonderfullprotocol', 'myid2'))

// now connec them
// #3 callback functions ensuring the peers exchanges messages
// from -> to -> from
const callback = (from, to) => {
  return (offer) => {
    to.connect((answer) => { from.connect(answer) }, offer)
  }
}

// #4 establishing a connection from p1 to p2
p1.connect(callback(p1, p2))
// now p1 can send message to p2 and p2 can send message to p1
//
// call any function of [the following API](https://ran3d.github.io/neighborhood-wrtc/class/lib/interfaces/ineighborhood.js~INeighborhood.html)

```

## Examples

Usage examples of this module can be found
[simple](https://ran3d.github.io/neighborhood-wrtc/examples/simple.html),
[multiple](https://ran3d.github.io/neighborhood-wrtc/examples/multiple.html) and [media](https://ran3d.github.io/neighborhood-wrtc/examples/media.html).  To
run the example, make sure your web browser is
[WebRTC-compatible](https://webrtc.org) and switch to console mode.

Module [n2n-overlay-wrtc](https://github.com/ran3d/n2n-overlay-wrtc) uses this
module to establish WebRTC connections from neighbor-to-neighbor, i.e., at most
1 hop distance.

## Socket

By default we used [simple-peer](https://github.com/feross/simple-peer) as Socket but if you want to change the type of Socket you want to use you'll need to follow this API:

```
new Neighborhood({
    socketClass: YourFavouriteSocketClass
})
```

```js
// ### events

// emit when the connection is established
socket.on('connect', () => {})

// emit when the socket is closed
socket.on('close', () => {})

// emit when data is received
socket.on('data', (data) => {})

// emit when a stream is received
socket.on('stream', (stream) => {})

// emit when an error occured
socket.on('error', (error) => {})

// emit when an offer is created
socket.on('signal', (offer) => {})

//### functions

// destroy the socket and emite the event close
// `Destroy and cleanup this peer connection.`
socket.destroy()

// pass an offer to the peer
socket.signal(offer)

// send data to the socket
socket.send(data)
```
