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

```$ npm install neighborhood-wrtc```

## API

You can find the API [here](https://ran3d.github.io/neighborhood-wrtc/).

## Examples

Usage examples of this module can be found
[here](https://ran3d.github.io/neighborhood-wrtc/examples/simple.html) and
[here](https://ran3d.github.io/neighborhood-wrtc/examples/multiple.html).  To
run the example, make sure your web browser is
[WebRTC-compatible](https://webrtc.org) and switch to console mode.

Module [n2n-overlay-wrtc](https://github.com/ran3d/n2n-overlay-wrtc) uses this
module to establish WebRTC connections from neighbor-to-neighbor, i.e., at most
1 hop distance.