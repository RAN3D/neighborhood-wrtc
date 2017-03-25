# Neighborhood-wrtc [![Build Status](https://travis-ci.org/RAN3D/neighborhood-wrtc.svg?branch=master)](https://travis-ci.org/RAN3D/neighborhood-wrtc)

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

Note: The API may change to face the need of overlay network protocols.

Neighborhood-wrtc is built on top of the (who said amazing?)
[simple-peer](https://github.com/feross/simple-peer) project.

## Installation

Using npm: ```$ npm install neighborhood-wrtc```

## API

You can find the API [here](https://ran3d.github.io/neighborhood-wrtc/).

## Examples

Usage examples of this module can be found
[here](https://ran3d.github.io/neighborhood-wrtc/examples/simple.html) and
[here](https://ran3d.github.io/neighborhood-wrtc/examples/multiple.html).  To
run the example, make sure your Web browser is
[WebRTC-compatible](https://webrtc.org) and switch to console mode.

