'use strict'

const Neighborhood = neighborhood // eslint-disable-line

localStorage.debug = 'neighborhood-wrtc' // eslint-disable-line

// #1 create a protocol that will run on top of this module. It must implement
// the 4 properties : pid, opened, closed, failed.
class P extends Neighborhood { // check IProtocol to see the interface
  _connected (peerId) {
    console.log('@%s: an arc has been created.', this.PEER)
  };

  _disconnected (peerId) {
    console.log('@%s: an arc has been removed.', this.PEER, peerId)
  };

  _received (peerId, message) {
    console.log('@%s: message received from @%s: %s',
      this.PEER, peerId, message)
  };

  _failed (peerId) {
    console.log('%s: failed to establish a connection with %s.',
      this.PEER, peerId)
  };
};
const timeout = 5 * 1000 // this is the living time for a dying socket
const pendingTimeout = 2 * 1000 // this the timeout for the connection estblishment
// #2 create the neighborhood tables and, for each, register a protocol
const opts1 = { peer: '1', timeout, pendingTimeout, config: { trickle: true } }
const p1 = new P(opts1)

const opts2 = { peer: '2', timeout, pendingTimeout, config: { trickle: true } }
const p2 = new P(opts2)

const opts3 = { peer: '3', timeout, pendingTimeout, config: { trickle: true} } // eslint-disable-line
const p3 = new P(opts3)

const opts4 = { peer: '4', timeout, pendingTimeout, config: { trickle: true} } // eslint-disable-line
const p4 = new P(opts4)

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

    p1.connect(callback(p1, p3)).then((peer) => {
      console.log('p1 async 2nd connected to: ', peer)
      p1.connect(callback(p1, p3)).then((peer) => {
        console.log('p1 3000 connected to: ', peer)

        failback()
      }).catch(e => {
        console.log('p1 3000: ', e)
      })
    }).catch(e => {
      console.log('p1 async 2nd: ', e)
    })
  }).catch(e => {
    console.log('p2 sync 2nd: ', e)
  })
}).catch(e => {
  console.log('p1 sync 1st: ', e)
})

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

function failback () {
  p1.connect(failCallback(p1, p4)).then((peer) => {
    console.log('p1 failCallback connected to: ', peer)
  }).catch(e => {
    console.log('p1 failCallback: ', e)
    // #7 remove an arc using n1.disconnect(id)
    p1.disconnect(p2.PEER).then(() => {
      console.log('p1 is disconnected from p2')
      p1.disconnect(p2.PEER).then(() => {
        console.log('p1 is disconnected from p2 again')
        p1.disconnect(p2.PEER).then(() => {
          console.log('p1 is disconnected from p2 again again!! (normally it produces an error)')
        }).catch(e => {
          console.error('this error must happen (saying that there is no peer to disconnect from): ', e)
          p1.disconnect(p3.PEER).then(() => {
            console.log('p1 is disconnected from p3')
            console.log(p1.neighbours())
            p1.connect(callback(p1, p2)).then(() => {
              console.log('Connection resurected.')
              console.log(p1.neighbours(), p2.neighbours())
              p1.send(p2.PEER, 'Hello! :3').then(() => {
                console.log('First message sent')
              }).catch(e => {
                console.error('cant send message from p1 to p2', e)
              })
              p1.send(p3.PEER, 'Hello! :3').catch(e => {
                console.error('cant send message from p1 to p3', e)
              })
              // #9 remove again the arc
              setTimeout(() => {
                p1.disconnect(p2.PEER)
              }, 1000)
            })
          }).catch(e => {
            console.error(e)
          })
        })
      }).catch(e => {
        console.error(e)
      })
    }).catch(e => {
      console.error(e)
    })
  }) // takes some time: see options.timeout
}

function neigh () { // eslint-disable-line
  console.log(p1.neighbours())
  console.log(p2.neighbours())
  console.log(p3.neighbours())
}
