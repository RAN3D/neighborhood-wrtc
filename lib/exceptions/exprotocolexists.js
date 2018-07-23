'use strict'

/**
 * Exception that rise when a protocol registers and its identifier already
 * exists in registered protocols of neighborhood-wrtc.
 */
class ExProtocolExists {
  constructor () {
    this.message = 'The idenfifier of the registering protocol already exists.'
  };
};

module.exports = ExProtocolExists
