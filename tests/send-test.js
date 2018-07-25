const assert = require('assert')
const Neighborhood = require('../lib/iprotocol.js')
const wrtc = require('wrtc')

describe('Tests for the send method', function () {
  this.timeout(4000)
  it('Test to send a message, reply and wait the response', function () {
    return new Promise((resolve, reject) => {
      const callback = (from, to) => {
        return (offer) => {
          to.connect((answer) => { from.connect(answer) }, offer)
        }
      }
      let p1 = new Neighborhood({ peer: '1', timeout: 2000, pendingTimeout: 2000, config: {wrtc} })
      p1._connected = (peer) => { }
      p1._disconnected = (peer) => { }
      p1._received = (peer, message) => {
        console.log('Received the message: %s from %s', JSON.stringify(message), peer)
        assert.equal(message.message, 'Hello world!')
        p1.disconnect().then(() => {
          resolve()
        })
      }
      let p2 = new Neighborhood({ peer: '2', timeout: 2000, pendingTimeout: 2000, config: {wrtc} })
      p2._connected = (peer) => { }
      p2._disconnected = (peer) => { }
      p2._received = (peer, message) => {
        console.log('Received the message: %s from %s', JSON.stringify(message), peer)
        message.message += ' world!'
        p2.send(peer, message)
      }

      p1.connect(callback(p1, p2)).then((peer) => {
        p1.send('2', { message: 'Hello' })
      })
    })
  })
})
