'use strict'

const Neighborhood = require('neighborhood-wrtc')

localStorage.debug = 'neighborhood-wrtc' // eslint-disable-line

// #1 create a protocol that will run on top of this module. It must implement
// the 4 properties : pid, opened, closed, failed.
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

  _failed (peerId) {
    console.log('%s-P%s: failed to establish a connection with %s.',
      this.peer, this.id, peerId)
  };
};

// #2 create the neighborhood tables and, for each, register a protocol
const opts1 = { peer: '1', timeout: 10 * 1000, config: { trickle: true } }
const n1 = new Neighborhood(opts1)
const p1 = n1.register(new P(1, '1'))

const opts2 = { peer: '2', timeout: 10 * 1000, config: { trickle: true } }
const n2 = new Neighborhood(opts2)
const p2 = n2.register(new P(1, '2'))

const opts3 = { peer: '3', config: { trickle: true} } // eslint-disable-line
const n3 = new Neighborhood(opts3)
const p3 = n3.register(new P(1, '3'))

const opts4 = { peer: '4', config: { trickle: true} } // eslint-disable-line
const n4 = new Neighborhood(opts4)
const p4 = n4.register(new P(1, '4'))

// #3 callback functions ensuring the peers exchanges messages
// from -> to -> from
const callback = (from, to) => {
  return (offer) => {
    to.connect((answer) => { from.connect(answer) }, offer)
  }
}

// #4 establishing a connection from p1 to p2, twice but one socket is kept
p1.connect(callback(p1, p2)).then((peer) => {
  console.log('P1 is connected to peer:', peer)
  // #4 establishing a connection from p1 to p2, twice but one socket is kept
  p1.connect(callback(p1, p2)).then((peer) => {
    console.log('P1 is again connected to peer:', peer)
  }).catch(e => {
    console.log('p2 sync 2nd: ', e)
  })
}).catch(e => {
  console.log('p1 sync 1st: ', e)
})

// #5 p1 -> p3
p1.connect(callback(p1, p3)).then((peer) => {
  console.log('p1 async 2nd connected to: ', peer)
}).catch(e => {
  console.log('p1 async 2nd: ', e)
})
// // > console: should see 6 'P-1: an arc has been created' messages

// // > console: and two others after 3 seconds
setTimeout(() => {
  p1.connect(callback(p1, p3)).then((peer) => {
    console.log('p1 3000 connected to: ', peer)
  }).catch(e => {
    console.log('p1 3000: ', e)
  })
}, 3000)

// // #6 a connection can fail to establish
var failCallback = function (from, to) {
  return function (offer) {
    to.connect(function (answer) {
      setTimeout(() => {
        from.connect(answer) // intentionnal timeout
      }, 11000)
    }, offer)
  }
}

p1.connect(failCallback(p1, p4)).then((peer) => {
  console.log('p1 failCallback connected to: ', peer)
}).catch(e => {
  console.log('p1 failCallback: ', e)
}) // takes some time: see options.timeout

// #7 remove an arc using n1.disconnect(id)
// (wait a bit for the connection to complete)
setTimeout(() => {
  p1.disconnect(n2.PEER).then(() => {
    console.log('p1 is disconnected from p2')
    p1.disconnect(n2.PEER).then(() => {
      console.log('p1 is disconnected from p2 again')
      p1.disconnect(n2.PEER).then(() => {
        console.log('p1 is disconnected from p2 again again!! (normally it produces an error)')
      }).catch(e => {
        console.error('this error must happen (saying that there is no peer to disconnect from): ', e)
      })
    }).catch(e => {
      console.error(e)
    })
  }).catch(e => {
    console.error(e)
  })
  p1.disconnect(n3.PEER).then(() => {
    console.log('p1 is disconnected from p3')
  }).catch(e => {
    console.error(e)
  })
}, 6000)

// #8 resurect
setTimeout(() => {
  p1.connect(callback(p1, p2))
}, 20000)

// send a message
setTimeout(() => {
  p1.send(n2.PEER, 'Hello! :3').then(() => {
    console.log('First message sent')
  })
  p1.send(n3.PEER, 'Hello! :3')
}, 25000)

// #9 remove again the arc
setTimeout(() => {
  p1.disconnect(n2.PEER)
}, 30000)
