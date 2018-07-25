const assert = require('assert')
const Neighborhood = require('../lib/iprotocol.js')
const wrtc = require('wrtc')

describe('Tests for connect method', function () {
  this.timeout(4000)
  it('returns the peer id that we want to connect with after the connection was established.', function () {
    const callback = (from, to) => {
      return (offer) => {
        to.connect((answer) => { from.connect(answer) }, offer)
      }
    }
    let p1 = new Neighborhood({ peer: '1', timeout: 2000, pendingTimeout: 2000, config: {wrtc} })
    p1._connected = (peer) => { }
    p1._disconnected = (peer) => { }
    let p2 = new Neighborhood({ peer: '2', timeout: 2000, pendingTimeout: 2000, config: {wrtc} })
    p2._connected = (peer) => { }
    p2._disconnected = (peer) => { }

    return p1.connect(callback(p1, p2)).then((peer) => {
      console.log('[%s] Connected to [%s] ', p1.PEER, peer)
      assert.equal(peer, '2')
      p1.disconnect()
    })
  })

  it('timeout', function () {
    const callback = (from, to) => {
      return (offer) => {
        // to.connect((answer) => { from.connect(answer) }, offer)
      }
    }
    let p1 = new Neighborhood({ peer: '1', timeout: 2000, pendingTimeout: 2000, config: {wrtc} })
    p1._connected = (peer) => { }
    p1._disconnected = (peer) => { }
    p1._failed = (peer) => { }
    let p2 = new Neighborhood({ peer: '2', timeout: 2000, pendingTimeout: 2000, config: {wrtc} })
    p2._connected = (peer) => { }
    p2._disconnected = (peer) => { }

    return p1.connect(callback(p1, p2)).catch(e => {
      console.log('connection failed between [%s] and [%s] ', p1.PEER, p2.PEER)
      assert.equal(e.message, 'timeout exceeded.')
    })
  })
})
