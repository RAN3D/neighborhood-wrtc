const assert = require('assert')
const Neighborhood = require('../lib/iprotocol.js')
const wrtc = require('wrtc')

describe('Tests for disconnect method', function () {
  this.timeout(4000)
  it('disconnect one peer', function () {
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
      console.log('Neighbours: ', p1.neighbours().length)
      return p1.connect(callback(p1, p3)).then((peer) => {
        console.log('Neighbours: ', p1.neighbours().length)
        return p1.disconnect('2').then(() => {
          assert.equal(p1.neighbours().length, 1)
          p1.disconnect()
        })
      })
    })
  })
  it('disconnect all peers', function () {
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
      console.log('Neighbours: ', p1.neighbours().length)
      return p1.connect(callback(p1, p3)).then((peer) => {
        console.log('Neighbours: ', p1.neighbours().length)
        return p1.disconnect().then(() => {
          assert.equal(p1.neighbours().length, 0)
          p1.disconnect()
        })
      })
    })
  })
})
