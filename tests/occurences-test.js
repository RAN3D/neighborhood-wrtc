const assert = require('assert')
const Neighborhood = require('../lib/iprotocol.js')
const wrtc = require('wrtc')

describe('Tests occurences', function () {
  this.timeout(4000)
  it('connect 2 peers A <=> B; A <=> C, and check number occurences', function () {
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
    let p3 = new Neighborhood({ peer: '3', timeout: 2000, pendingTimeout: 2000, config: {wrtc} })
    p3._connected = (peer) => { }
    p3._disconnected = (peer) => { }

    return p1.connect(callback(p1, p2)).then((peer) => {
      console.log('Neighbours: ', p1.neighbours().length, ' Occurences: ', p1.neighbours().map(n => n.counter))
      return p1.connect(callback(p1, p3)).then((peer) => {
        p1.neighbours().forEach(neigh => {
          assert.equal(neigh.counter, 1)
        })
        p1.disconnect()
      })
    })
  })
  it('Connect 2 times the same peer A to B, A <*2==*2> B; ', function () {
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
      console.log('Neighbours: ', p1.neighbours().length, ' Occurences: ', p1.neighbours().map(n => n.counter))
      p1.neighbours().forEach(neigh => {
        assert.equal(neigh.counter, 1)
      })
      return p1.connect(callback(p1, p2)).then((peer) => {
        console.log('Neighbours: ', p1.neighbours().length, ' Occurences: ', p1.neighbours().map(n => n.counter))
        p1.neighbours().forEach(neigh => {
          assert.equal(neigh.counter, 2)
        })
        p1.disconnect()
      })
    })
  })

  it('Connect 2 times the same peer A to B, A <*2==*2> B; And disconnect one time', function () {
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
      console.log('Neighbours: ', p1.neighbours().length, ' Occurences: ', p1.neighbours().map(n => n.counter))
      return p1.connect(callback(p1, p2)).then((peer) => {
        console.log('Neighbours: ', p1.neighbours().length, ' Occurences: ', p1.neighbours().map(n => n.counter))
        p1.neighbours().forEach(neigh => {
          assert.equal(neigh.counter, 2)
        })
        return p1.disconnect('2').then(() => {
          console.log('Neighbours: ', p1.neighbours().length, ' Occurences: ', p1.neighbours().map(n => n.counter))
          p1.neighbours().forEach(neigh => {
            assert.equal(neigh.counter, 1)
          })
          p1.disconnect()
        })
      })
    })
  })
})
