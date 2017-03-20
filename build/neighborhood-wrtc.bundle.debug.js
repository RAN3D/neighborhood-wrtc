require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var SortedArray = require('sorted-cmp-array');

SortedArray.prototype.get = function (entry) {
    var index = this.indexOf(entry);
    return index >= 0 && this.arr[index] || null;
};

SortedArray.prototype.contains = function (entry) {
    return this.indexOf(entry) >= 0;
};

module.exports = SortedArray;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVuZGVkLXNvcnRlZC1hcnJheS5qcyJdLCJuYW1lcyI6WyJTb3J0ZWRBcnJheSIsInJlcXVpcmUiLCJwcm90b3R5cGUiLCJnZXQiLCJlbnRyeSIsImluZGV4IiwiaW5kZXhPZiIsImFyciIsImNvbnRhaW5zIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsY0FBY0MsUUFBUSxrQkFBUixDQUFsQjs7QUFFQUQsWUFBWUUsU0FBWixDQUFzQkMsR0FBdEIsR0FBNEIsVUFBU0MsS0FBVCxFQUFlO0FBQ3ZDLFFBQUlDLFFBQVEsS0FBS0MsT0FBTCxDQUFhRixLQUFiLENBQVo7QUFDQSxXQUFTQyxTQUFTLENBQVYsSUFBYyxLQUFLRSxHQUFMLENBQVNGLEtBQVQsQ0FBZixJQUFtQyxJQUExQztBQUNILENBSEQ7O0FBTUFMLFlBQVlFLFNBQVosQ0FBc0JNLFFBQXRCLEdBQWlDLFVBQVNKLEtBQVQsRUFBZTtBQUM1QyxXQUFRLEtBQUtFLE9BQUwsQ0FBYUYsS0FBYixLQUF1QixDQUEvQjtBQUNILENBRkQ7O0FBSUFLLE9BQU9DLE9BQVAsR0FBaUJWLFdBQWpCIiwiZmlsZSI6ImV4dGVuZGVkLXNvcnRlZC1hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTb3J0ZWRBcnJheSA9IHJlcXVpcmUoJ3NvcnRlZC1jbXAtYXJyYXknKTtcblxuU29ydGVkQXJyYXkucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKGVudHJ5KXtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4T2YoZW50cnkpO1xuICAgIHJldHVybiAoKGluZGV4ID49IDApJiZ0aGlzLmFycltpbmRleF0pIHx8IG51bGw7XG59O1xuXG5cblNvcnRlZEFycmF5LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uKGVudHJ5KXtcbiAgICByZXR1cm4gKHRoaXMuaW5kZXhPZihlbnRyeSkgPj0gMCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNvcnRlZEFycmF5O1xuIl19
},{"sorted-cmp-array":30}],2:[function(require,module,exports){
var SortedArray = require('./extended-sorted-array');

function MultiSet(Comparator) {
    this.ms = new SortedArray(Comparator || defaultComparator);
};

MultiSet.prototype.insert = function (entryOrId) {
    var object = this.ms.get(entryOrId);
    if (object) {
        // #1 if the object already exists, increment its occurrence
        object.occ += 1;
    } else {
        // #2 initalize the occurrence to 1 and insert it otherwise
        entryOrId.occ = 1;
        this.ms.insert(entryOrId);
    };
    return object;
};

MultiSet.prototype.remove = function (entryOrId) {
    var object = this.ms.get(entryOrId);
    if (object) {
        object.occ -= 1;
        object.occ <= 0 && this.ms.remove(entryOrId);
    };
    return object;
};

MultiSet.prototype.removeAll = function (entryOrId) {
    var object = this.ms.get(entryOrId);
    if (object) {
        //        object.occ = 0;
        this.ms.remove(entryOrId);
    };
    return object;
};

MultiSet.prototype.contains = function (entryOrId) {
    return this.ms.contains(entryOrId);
};

MultiSet.prototype.get = function (entryOrId) {
    return this.ms.get(entryOrId);
};

function defaultComparator(a, b) {
    var first = a.id || a;
    var second = b.id || b;
    if (first < second) {
        return -1;
    };
    if (first > second) {
        return 1;
    };
    return 0;
};

module.exports = MultiSet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11bHRpc2V0LmpzIl0sIm5hbWVzIjpbIlNvcnRlZEFycmF5IiwicmVxdWlyZSIsIk11bHRpU2V0IiwiQ29tcGFyYXRvciIsIm1zIiwiZGVmYXVsdENvbXBhcmF0b3IiLCJwcm90b3R5cGUiLCJpbnNlcnQiLCJlbnRyeU9ySWQiLCJvYmplY3QiLCJnZXQiLCJvY2MiLCJyZW1vdmUiLCJyZW1vdmVBbGwiLCJjb250YWlucyIsImEiLCJiIiwiZmlyc3QiLCJpZCIsInNlY29uZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLGNBQWNDLFFBQVEseUJBQVIsQ0FBbEI7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQkMsVUFBbEIsRUFBNkI7QUFDekIsU0FBS0MsRUFBTCxHQUFVLElBQUlKLFdBQUosQ0FBZ0JHLGNBQVlFLGlCQUE1QixDQUFWO0FBQ0g7O0FBRURILFNBQVNJLFNBQVQsQ0FBbUJDLE1BQW5CLEdBQTRCLFVBQVNDLFNBQVQsRUFBbUI7QUFDM0MsUUFBSUMsU0FBUyxLQUFLTCxFQUFMLENBQVFNLEdBQVIsQ0FBWUYsU0FBWixDQUFiO0FBQ0EsUUFBSUMsTUFBSixFQUFXO0FBQ1A7QUFDQUEsZUFBT0UsR0FBUCxJQUFjLENBQWQ7QUFDSCxLQUhELE1BR087QUFDSDtBQUNBSCxrQkFBVUcsR0FBVixHQUFnQixDQUFoQjtBQUNBLGFBQUtQLEVBQUwsQ0FBUUcsTUFBUixDQUFlQyxTQUFmO0FBQ0g7QUFDRCxXQUFPQyxNQUFQO0FBQ0gsQ0FYRDs7QUFhQVAsU0FBU0ksU0FBVCxDQUFtQk0sTUFBbkIsR0FBNEIsVUFBU0osU0FBVCxFQUFtQjtBQUMzQyxRQUFJQyxTQUFTLEtBQUtMLEVBQUwsQ0FBUU0sR0FBUixDQUFZRixTQUFaLENBQWI7QUFDQSxRQUFJQyxNQUFKLEVBQVc7QUFDUEEsZUFBT0UsR0FBUCxJQUFjLENBQWQ7QUFDQ0YsZUFBT0UsR0FBUCxJQUFjLENBQWYsSUFBcUIsS0FBS1AsRUFBTCxDQUFRUSxNQUFSLENBQWVKLFNBQWYsQ0FBckI7QUFDSDtBQUNELFdBQU9DLE1BQVA7QUFDSCxDQVBEOztBQVNBUCxTQUFTSSxTQUFULENBQW1CTyxTQUFuQixHQUErQixVQUFTTCxTQUFULEVBQW1CO0FBQzlDLFFBQUlDLFNBQVMsS0FBS0wsRUFBTCxDQUFRTSxHQUFSLENBQVlGLFNBQVosQ0FBYjtBQUNBLFFBQUlDLE1BQUosRUFBVztBQUNmO0FBQ1EsYUFBS0wsRUFBTCxDQUFRUSxNQUFSLENBQWVKLFNBQWY7QUFDSDtBQUNELFdBQU9DLE1BQVA7QUFDSCxDQVBEOztBQVNBUCxTQUFTSSxTQUFULENBQW1CUSxRQUFuQixHQUE4QixVQUFTTixTQUFULEVBQW1CO0FBQzdDLFdBQU8sS0FBS0osRUFBTCxDQUFRVSxRQUFSLENBQWlCTixTQUFqQixDQUFQO0FBQ0gsQ0FGRDs7QUFJQU4sU0FBU0ksU0FBVCxDQUFtQkksR0FBbkIsR0FBeUIsVUFBU0YsU0FBVCxFQUFtQjtBQUN4QyxXQUFPLEtBQUtKLEVBQUwsQ0FBUU0sR0FBUixDQUFZRixTQUFaLENBQVA7QUFDSCxDQUZEOztBQUlBLFNBQVNILGlCQUFULENBQTJCVSxDQUEzQixFQUE4QkMsQ0FBOUIsRUFBZ0M7QUFDNUIsUUFBSUMsUUFBUUYsRUFBRUcsRUFBRixJQUFRSCxDQUFwQjtBQUNBLFFBQUlJLFNBQVNILEVBQUVFLEVBQUYsSUFBUUYsQ0FBckI7QUFDQSxRQUFJQyxRQUFRRSxNQUFaLEVBQW1CO0FBQUMsZUFBTyxDQUFDLENBQVI7QUFBVTtBQUM5QixRQUFJRixRQUFRRSxNQUFaLEVBQW1CO0FBQUMsZUFBUSxDQUFSO0FBQVU7QUFDOUIsV0FBTyxDQUFQO0FBQ0g7O0FBR0RDLE9BQU9DLE9BQVAsR0FBaUJuQixRQUFqQiIsImZpbGUiOiJtdWx0aXNldC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTb3J0ZWRBcnJheSA9IHJlcXVpcmUoJy4vZXh0ZW5kZWQtc29ydGVkLWFycmF5Jyk7XG5cbmZ1bmN0aW9uIE11bHRpU2V0KENvbXBhcmF0b3Ipe1xuICAgIHRoaXMubXMgPSBuZXcgU29ydGVkQXJyYXkoQ29tcGFyYXRvcnx8ZGVmYXVsdENvbXBhcmF0b3IpO1xufTtcblxuTXVsdGlTZXQucHJvdG90eXBlLmluc2VydCA9IGZ1bmN0aW9uKGVudHJ5T3JJZCl7XG4gICAgdmFyIG9iamVjdCA9IHRoaXMubXMuZ2V0KGVudHJ5T3JJZCk7XG4gICAgaWYgKG9iamVjdCl7XG4gICAgICAgIC8vICMxIGlmIHRoZSBvYmplY3QgYWxyZWFkeSBleGlzdHMsIGluY3JlbWVudCBpdHMgb2NjdXJyZW5jZVxuICAgICAgICBvYmplY3Qub2NjICs9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gIzIgaW5pdGFsaXplIHRoZSBvY2N1cnJlbmNlIHRvIDEgYW5kIGluc2VydCBpdCBvdGhlcndpc2VcbiAgICAgICAgZW50cnlPcklkLm9jYyA9IDE7XG4gICAgICAgIHRoaXMubXMuaW5zZXJ0KGVudHJ5T3JJZCk7XG4gICAgfTtcbiAgICByZXR1cm4gb2JqZWN0O1xufTtcblxuTXVsdGlTZXQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKGVudHJ5T3JJZCl7XG4gICAgdmFyIG9iamVjdCA9IHRoaXMubXMuZ2V0KGVudHJ5T3JJZCk7XG4gICAgaWYgKG9iamVjdCl7XG4gICAgICAgIG9iamVjdC5vY2MgLT0gMTtcbiAgICAgICAgKG9iamVjdC5vY2MgPD0gMCkgJiYgdGhpcy5tcy5yZW1vdmUoZW50cnlPcklkKTtcbiAgICB9O1xuICAgIHJldHVybiBvYmplY3Q7XG59O1xuXG5NdWx0aVNldC5wcm90b3R5cGUucmVtb3ZlQWxsID0gZnVuY3Rpb24oZW50cnlPcklkKXtcbiAgICB2YXIgb2JqZWN0ID0gdGhpcy5tcy5nZXQoZW50cnlPcklkKTtcbiAgICBpZiAob2JqZWN0KXtcbi8vICAgICAgICBvYmplY3Qub2NjID0gMDtcbiAgICAgICAgdGhpcy5tcy5yZW1vdmUoZW50cnlPcklkKTtcbiAgICB9O1xuICAgIHJldHVybiBvYmplY3Q7XG59O1xuXG5NdWx0aVNldC5wcm90b3R5cGUuY29udGFpbnMgPSBmdW5jdGlvbihlbnRyeU9ySWQpe1xuICAgIHJldHVybiB0aGlzLm1zLmNvbnRhaW5zKGVudHJ5T3JJZCk7XG59O1xuXG5NdWx0aVNldC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oZW50cnlPcklkKXtcbiAgICByZXR1cm4gdGhpcy5tcy5nZXQoZW50cnlPcklkKTtcbn07XG5cbmZ1bmN0aW9uIGRlZmF1bHRDb21wYXJhdG9yKGEsIGIpe1xuICAgIHZhciBmaXJzdCA9IGEuaWQgfHwgYTtcbiAgICB2YXIgc2Vjb25kID0gYi5pZCB8fCBiO1xuICAgIGlmIChmaXJzdCA8IHNlY29uZCl7cmV0dXJuIC0xfTtcbiAgICBpZiAoZmlyc3QgPiBzZWNvbmQpe3JldHVybiAgMX07XG4gICAgcmV0dXJuIDA7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gTXVsdGlTZXQ7XG4iXX0=
},{"./extended-sorted-array":1}],3:[function(require,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS)
			return 62 // '+'
		if (code === SLASH)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],4:[function(require,module,exports){
module.exports = function(haystack, needle, comparator, low, high) {
  var mid, cmp;

  if(low === undefined)
    low = 0;

  else {
    low = low|0;
    if(low < 0 || low >= haystack.length)
      throw new RangeError("invalid lower bound");
  }

  if(high === undefined)
    high = haystack.length - 1;

  else {
    high = high|0;
    if(high < low || high >= haystack.length)
      throw new RangeError("invalid upper bound");
  }

  while(low <= high) {
    /* Note that "(low + high) >>> 1" may overflow, and results in a typecast
     * to double (which gives the wrong results). */
    mid = low + (high - low >> 1);
    cmp = +comparator(haystack[mid], needle, mid, haystack);

    /* Too low. */
    if(cmp < 0.0)
      low  = mid + 1;

    /* Too high. */
    else if(cmp > 0.0)
      high = mid - 1;

    /* Key found. */
    else
      return mid;
  }

  /* Key not found. */
  return ~low;
}

},{}],5:[function(require,module,exports){

},{}],6:[function(require,module,exports){
(function (global){
'use strict';

var buffer = require('buffer');
var Buffer = buffer.Buffer;
var SlowBuffer = buffer.SlowBuffer;
var MAX_LEN = buffer.kMaxLength || 2147483647;
exports.alloc = function alloc(size, fill, encoding) {
  if (typeof Buffer.alloc === 'function') {
    return Buffer.alloc(size, fill, encoding);
  }
  if (typeof encoding === 'number') {
    throw new TypeError('encoding must not be number');
  }
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size > MAX_LEN) {
    throw new RangeError('size is too large');
  }
  var enc = encoding;
  var _fill = fill;
  if (_fill === undefined) {
    enc = undefined;
    _fill = 0;
  }
  var buf = new Buffer(size);
  if (typeof _fill === 'string') {
    var fillBuf = new Buffer(_fill, enc);
    var flen = fillBuf.length;
    var i = -1;
    while (++i < size) {
      buf[i] = fillBuf[i % flen];
    }
  } else {
    buf.fill(_fill);
  }
  return buf;
}
exports.allocUnsafe = function allocUnsafe(size) {
  if (typeof Buffer.allocUnsafe === 'function') {
    return Buffer.allocUnsafe(size);
  }
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size > MAX_LEN) {
    throw new RangeError('size is too large');
  }
  return new Buffer(size);
}
exports.from = function from(value, encodingOrOffset, length) {
  if (typeof Buffer.from === 'function' && (!global.Uint8Array || Uint8Array.from !== Buffer.from)) {
    return Buffer.from(value, encodingOrOffset, length);
  }
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }
  if (typeof value === 'string') {
    return new Buffer(value, encodingOrOffset);
  }
  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    var offset = encodingOrOffset;
    if (arguments.length === 1) {
      return new Buffer(value);
    }
    if (typeof offset === 'undefined') {
      offset = 0;
    }
    var len = length;
    if (typeof len === 'undefined') {
      len = value.byteLength - offset;
    }
    if (offset >= value.byteLength) {
      throw new RangeError('\'offset\' is out of bounds');
    }
    if (len > value.byteLength - offset) {
      throw new RangeError('\'length\' is out of bounds');
    }
    return new Buffer(value.slice(offset, offset + len));
  }
  if (Buffer.isBuffer(value)) {
    var out = new Buffer(value.length);
    value.copy(out, 0, 0, value.length);
    return out;
  }
  if (value) {
    if (Array.isArray(value) || (typeof ArrayBuffer !== 'undefined' && value.buffer instanceof ArrayBuffer) || 'length' in value) {
      return new Buffer(value);
    }
    if (value.type === 'Buffer' && Array.isArray(value.data)) {
      return new Buffer(value.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ' + 'ArrayBuffer, Array, or array-like object.');
}
exports.allocUnsafeSlow = function allocUnsafeSlow(size) {
  if (typeof Buffer.allocUnsafeSlow === 'function') {
    return Buffer.allocUnsafeSlow(size);
  }
  if (typeof size !== 'number') {
    throw new TypeError('size must be a number');
  }
  if (size >= MAX_LEN) {
    throw new RangeError('size is too large');
  }
  return new SlowBuffer(size);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9idWZmZXItc2hpbXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBidWZmZXIgPSByZXF1aXJlKCdidWZmZXInKTtcbnZhciBCdWZmZXIgPSBidWZmZXIuQnVmZmVyO1xudmFyIFNsb3dCdWZmZXIgPSBidWZmZXIuU2xvd0J1ZmZlcjtcbnZhciBNQVhfTEVOID0gYnVmZmVyLmtNYXhMZW5ndGggfHwgMjE0NzQ4MzY0NztcbmV4cG9ydHMuYWxsb2MgPSBmdW5jdGlvbiBhbGxvYyhzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIEJ1ZmZlci5hbGxvYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2Moc2l6ZSwgZmlsbCwgZW5jb2RpbmcpO1xuICB9XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBub3QgYmUgbnVtYmVyJyk7XG4gIH1cbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NpemUgbXVzdCBiZSBhIG51bWJlcicpO1xuICB9XG4gIGlmIChzaXplID4gTUFYX0xFTikge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdzaXplIGlzIHRvbyBsYXJnZScpO1xuICB9XG4gIHZhciBlbmMgPSBlbmNvZGluZztcbiAgdmFyIF9maWxsID0gZmlsbDtcbiAgaWYgKF9maWxsID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmMgPSB1bmRlZmluZWQ7XG4gICAgX2ZpbGwgPSAwO1xuICB9XG4gIHZhciBidWYgPSBuZXcgQnVmZmVyKHNpemUpO1xuICBpZiAodHlwZW9mIF9maWxsID09PSAnc3RyaW5nJykge1xuICAgIHZhciBmaWxsQnVmID0gbmV3IEJ1ZmZlcihfZmlsbCwgZW5jKTtcbiAgICB2YXIgZmxlbiA9IGZpbGxCdWYubGVuZ3RoO1xuICAgIHZhciBpID0gLTE7XG4gICAgd2hpbGUgKCsraSA8IHNpemUpIHtcbiAgICAgIGJ1ZltpXSA9IGZpbGxCdWZbaSAlIGZsZW5dO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBidWYuZmlsbChfZmlsbCk7XG4gIH1cbiAgcmV0dXJuIGJ1Zjtcbn1cbmV4cG9ydHMuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiBhbGxvY1Vuc2FmZShzaXplKSB7XG4gIGlmICh0eXBlb2YgQnVmZmVyLmFsbG9jVW5zYWZlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvY1Vuc2FmZShzaXplKTtcbiAgfVxuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignc2l6ZSBtdXN0IGJlIGEgbnVtYmVyJyk7XG4gIH1cbiAgaWYgKHNpemUgPiBNQVhfTEVOKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NpemUgaXMgdG9vIGxhcmdlJyk7XG4gIH1cbiAgcmV0dXJuIG5ldyBCdWZmZXIoc2l6ZSk7XG59XG5leHBvcnRzLmZyb20gPSBmdW5jdGlvbiBmcm9tKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiBCdWZmZXIuZnJvbSA9PT0gJ2Z1bmN0aW9uJyAmJiAoIWdsb2JhbC5VaW50OEFycmF5IHx8IFVpbnQ4QXJyYXkuZnJvbSAhPT0gQnVmZmVyLmZyb20pKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJyk7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcih2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCk7XG4gIH1cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHZhciBvZmZzZXQgPSBlbmNvZGluZ09yT2Zmc2V0O1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gbmV3IEJ1ZmZlcih2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgdmFyIGxlbiA9IGxlbmd0aDtcbiAgICBpZiAodHlwZW9mIGxlbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGxlbiA9IHZhbHVlLmJ5dGVMZW5ndGggLSBvZmZzZXQ7XG4gICAgfVxuICAgIGlmIChvZmZzZXQgPj0gdmFsdWUuYnl0ZUxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ29mZnNldFxcJyBpcyBvdXQgb2YgYm91bmRzJyk7XG4gICAgfVxuICAgIGlmIChsZW4gPiB2YWx1ZS5ieXRlTGVuZ3RoIC0gb2Zmc2V0KSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnbGVuZ3RoXFwnIGlzIG91dCBvZiBib3VuZHMnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIodmFsdWUuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBsZW4pKTtcbiAgfVxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHZhbHVlKSkge1xuICAgIHZhciBvdXQgPSBuZXcgQnVmZmVyKHZhbHVlLmxlbmd0aCk7XG4gICAgdmFsdWUuY29weShvdXQsIDAsIDAsIHZhbHVlLmxlbmd0aCk7XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuICBpZiAodmFsdWUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8ICdsZW5ndGgnIGluIHZhbHVlKSB7XG4gICAgICByZXR1cm4gbmV3IEJ1ZmZlcih2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZS50eXBlID09PSAnQnVmZmVyJyAmJiBBcnJheS5pc0FycmF5KHZhbHVlLmRhdGEpKSB7XG4gICAgICByZXR1cm4gbmV3IEJ1ZmZlcih2YWx1ZS5kYXRhKTtcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nLCBCdWZmZXIsICcgKyAnQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKTtcbn1cbmV4cG9ydHMuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gYWxsb2NVbnNhZmVTbG93KHNpemUpIHtcbiAgaWYgKHR5cGVvZiBCdWZmZXIuYWxsb2NVbnNhZmVTbG93ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3coc2l6ZSk7XG4gIH1cbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NpemUgbXVzdCBiZSBhIG51bWJlcicpO1xuICB9XG4gIGlmIChzaXplID49IE1BWF9MRU4pIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc2l6ZSBpcyB0b28gbGFyZ2UnKTtcbiAgfVxuICByZXR1cm4gbmV3IFNsb3dCdWZmZXIoc2l6ZSk7XG59XG4iXX0=
},{"buffer":7}],7:[function(require,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('is-array')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var kMaxLength = 0x3fffffff

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Note:
 *
 * - Implementation must support adding new properties to `Uint8Array` instances.
 *   Firefox 4-29 lacked support, fixed in Firefox 30+.
 *   See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *  - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *  - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *    incorrect length in some situations.
 *
 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they will
 * get the Object implementation, which is slower but will work correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = (function () {
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        new Uint8Array(1).subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Find the length
  var length
  if (type === 'number')
    length = subject > 0 ? subject >>> 0 : 0
  else if (type === 'string') {
    if (encoding === 'base64')
      subject = base64clean(subject)
    length = Buffer.byteLength(subject, encoding)
  } else if (type === 'object' && subject !== null) { // assume object is array-like
    if (subject.type === 'Buffer' && isArray(subject.data))
      subject = subject.data
    length = +subject.length > 0 ? Math.floor(+subject.length) : 0
  } else
    throw new TypeError('must start with number, buffer, array or string')

  if (this.length > kMaxLength)
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
      'size: 0x' + kMaxLength.toString(16) + ' bytes')

  var buf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer.TYPED_ARRAY_SUPPORT && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    if (Buffer.isBuffer(subject)) {
      for (i = 0; i < length; i++)
        buf[i] = subject.readUInt8(i)
    } else {
      for (i = 0; i < length; i++)
        buf[i] = ((subject[i] % 256) + 256) % 256
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer.TYPED_ARRAY_SUPPORT && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

Buffer.isBuffer = function (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b))
    throw new TypeError('Arguments must be Buffers')

  var x = a.length
  var y = b.length
  for (var i = 0, len = Math.min(x, y); i < len && a[i] === b[i]; i++) {}
  if (i !== len) {
    x = a[i]
    y = b[i]
  }
  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function (list, totalLength) {
  if (!isArray(list)) throw new TypeError('Usage: Buffer.concat(list[, length])')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (totalLength === undefined) {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    case 'hex':
      ret = str.length >>> 1
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    default:
      ret = str.length
  }
  return ret
}

// pre-set for values that may exist in the future
Buffer.prototype.length = undefined
Buffer.prototype.parent = undefined

// toString(encoding, start=0, end=buffer.length)
Buffer.prototype.toString = function (encoding, start, end) {
  var loweredCase = false

  start = start >>> 0
  end = end === undefined || end === Infinity ? this.length : end >>> 0

  if (!encoding) encoding = 'utf8'
  if (start < 0) start = 0
  if (end > this.length) end = this.length
  if (end <= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase)
          throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.equals = function (b) {
  if(!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max)
      str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  return Buffer.compare(this, b)
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(byte)) throw new Error('Invalid hex string')
    buf[offset + i] = byte
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function asciiWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  var charsWritten = blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function utf16leWrite (buf, string, offset, length) {
  var charsWritten = blitBuffer(utf16leToBytes(string), buf, offset, length, 2)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = utf16leWrite(this, string, offset, length)
      break
    default:
      throw new TypeError('Unknown encoding: ' + encoding)
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function binarySlice (buf, start, end) {
  return asciiSlice(buf, start, end)
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len;
    if (start < 0)
      start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0)
      end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start)
    end = start

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0)
    throw new RangeError('offset is not uint')
  if (offset + ext > length)
    throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
      ((this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      this[offset + 3])
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80))
    return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16) |
      (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
      (this[offset + 1] << 16) |
      (this[offset + 2] << 8) |
      (this[offset + 3])
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  if (!noAssert)
    checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value > max || value < min) throw new TypeError('value is out of bounds')
  if (offset + ext > buf.length) throw new TypeError('index out of range')
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = value
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else objectWriteUInt16(this, value, offset, true)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else objectWriteUInt16(this, value, offset, false)
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = value
  } else objectWriteUInt32(this, value, offset, true)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else objectWriteUInt32(this, value, offset, false)
  return offset + 4
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = value
  return offset + 1
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
  } else objectWriteUInt16(this, value, offset, true)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = value
  } else objectWriteUInt16(this, value, offset, false)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else objectWriteUInt32(this, value, offset, true)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert)
    checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = value
  } else objectWriteUInt32(this, value, offset, false)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (value > max || value < min) throw new TypeError('value is out of bounds')
  if (offset + ext > buf.length) throw new TypeError('index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert)
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert)
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  if (end < start) throw new TypeError('sourceEnd < sourceStart')
  if (target_start < 0 || target_start >= target.length)
    throw new TypeError('targetStart out of bounds')
  if (start < 0 || start >= source.length) throw new TypeError('sourceStart out of bounds')
  if (end < 0 || end > source.length) throw new TypeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < len; i++) {
      target[i + target_start] = this[i + start]
    }
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end < start) throw new TypeError('end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  if (start < 0 || start >= this.length) throw new TypeError('start out of bounds')
  if (end < 0 || end > this.length) throw new TypeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i]
      }
      return buf.buffer
    }
  } else {
    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr.constructor = Buffer
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.equals = BP.equals
  arr.compare = BP.compare
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

var INVALID_BASE64_RE = /[^+\/0-9A-z]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F) {
      byteArray.push(b)
    } else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++) {
        byteArray.push(parseInt(h[j], 16))
      }
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length, unitSize) {
  if (unitSize) length -= length % unitSize;
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

},{"base64-js":3,"ieee754":13,"is-array":15}],8:[function(require,module,exports){
(function (Buffer){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

}).call(this,{"isBuffer":require("../../is-buffer/index.js")})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9jb3JlLXV0aWwtaXMvbGliL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJnKTtcbiAgfVxuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuXG5mdW5jdGlvbiBpc0Vycm9yKGUpIHtcbiAgcmV0dXJuIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IEJ1ZmZlci5pc0J1ZmZlcjtcblxuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufVxuIl19
},{"../../is-buffer/index.js":16}],9:[function(require,module,exports){
(function (process){
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = require('./debug');
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window && typeof window.process !== 'undefined' && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document && 'WebkitAppearance' in document.documentElement.style) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window && window.console && (console.firebug || (console.exception && console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

}).call(this,require('_process'))
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kZWJ1ZycpO1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9ICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWVcbiAgICAgICAgICAgICAgICYmICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWUuc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgPyBjaHJvbWUuc3RvcmFnZS5sb2NhbFxuICAgICAgICAgICAgICAgICAgOiBsb2NhbHN0b3JhZ2UoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG4gICdsaWdodHNlYWdyZWVuJyxcbiAgJ2ZvcmVzdGdyZWVuJyxcbiAgJ2dvbGRlbnJvZCcsXG4gICdkb2RnZXJibHVlJyxcbiAgJ2RhcmtvcmNoaWQnLFxuICAnY3JpbXNvbidcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuICAvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG4gIC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG4gIC8vIGV4cGxpY2l0bHlcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdyAmJiB0eXBlb2Ygd2luZG93LnByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIGlzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG4gIC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG4gIHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudCAmJiAnV2Via2l0QXBwZWFyYW5jZScgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlKSB8fFxuICAgIC8vIGlzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcbiAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93ICYmIHdpbmRvdy5jb25zb2xlICYmIChjb25zb2xlLmZpcmVidWcgfHwgKGNvbnNvbGUuZXhjZXB0aW9uICYmIGNvbnNvbGUudGFibGUpKSkgfHxcbiAgICAvLyBpcyBmaXJlZm94ID49IHYzMT9cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG4gICAgLy8gZG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uKHYpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnIubWVzc2FnZTtcbiAgfVxufTtcblxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuICB2YXIgdXNlQ29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cbiAgYXJnc1swXSA9ICh1c2VDb2xvcnMgPyAnJWMnIDogJycpXG4gICAgKyB0aGlzLm5hbWVzcGFjZVxuICAgICsgKHVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKVxuICAgICsgYXJnc1swXVxuICAgICsgKHVzZUNvbG9ycyA/ICclYyAnIDogJyAnKVxuICAgICsgJysnICsgZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG4gIGlmICghdXNlQ29sb3JzKSByZXR1cm47XG5cbiAgdmFyIGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuICBhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKVxuXG4gIC8vIHRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG4gIC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cbiAgLy8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsYXN0QyA9IDA7XG4gIGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgIGlmICgnJSUnID09PSBtYXRjaCkgcmV0dXJuO1xuICAgIGluZGV4Kys7XG4gICAgaWYgKCclYycgPT09IG1hdGNoKSB7XG4gICAgICAvLyB3ZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcbiAgICAgIC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG4gICAgICBsYXN0QyA9IGluZGV4O1xuICAgIH1cbiAgfSk7XG5cbiAgYXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGxvZygpIHtcbiAgLy8gdGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcbiAgLy8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcbiAgcmV0dXJuICdvYmplY3QnID09PSB0eXBlb2YgY29uc29sZVxuICAgICYmIGNvbnNvbGUubG9nXG4gICAgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZS5sb2csIGNvbnNvbGUsIGFyZ3VtZW50cyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuICB0cnkge1xuICAgIGlmIChudWxsID09IG5hbWVzcGFjZXMpIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UuZGVidWcgPSBuYW1lc3BhY2VzO1xuICAgIH1cbiAgfSBjYXRjaChlKSB7fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHZhciByO1xuICB0cnkge1xuICAgIHIgPSBleHBvcnRzLnN0b3JhZ2UuZGVidWc7XG4gIH0gY2F0Y2goZSkge31cblxuICAvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG4gIGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuICAgIHIgPSBwcm9jZXNzLmVudi5ERUJVRztcbiAgfVxuXG4gIHJldHVybiByO1xufVxuXG4vKipcbiAqIEVuYWJsZSBuYW1lc3BhY2VzIGxpc3RlZCBpbiBgbG9jYWxTdG9yYWdlLmRlYnVnYCBpbml0aWFsbHkuXG4gKi9cblxuZXhwb3J0cy5lbmFibGUobG9hZCgpKTtcblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG4iXX0=
},{"./debug":10,"_process":20}],10:[function(require,module,exports){

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = require('ms');

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (namespaces || '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

},{"ms":18}],11:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    len = arguments.length;
    args = new Array(len - 1);
    for (i = 1; i < len; i++)
      args[i - 1] = arguments[i];

    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    var m;
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.listenerCount = function(emitter, type) {
  var ret;
  if (!emitter._events || !emitter._events[type])
    ret = 0;
  else if (isFunction(emitter._events[type]))
    ret = 1;
  else
    ret = emitter._events[type].length;
  return ret;
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],12:[function(require,module,exports){
// originally pulled out of simple-peer

module.exports = function getBrowserRTC () {
  if (typeof window === 'undefined') return null
  var wrtc = {
    RTCPeerConnection: window.RTCPeerConnection || window.mozRTCPeerConnection ||
      window.webkitRTCPeerConnection,
    RTCSessionDescription: window.RTCSessionDescription ||
      window.mozRTCSessionDescription || window.webkitRTCSessionDescription,
    RTCIceCandidate: window.RTCIceCandidate || window.mozRTCIceCandidate ||
      window.webkitRTCIceCandidate
  }
  if (!wrtc.RTCPeerConnection) return null
  return wrtc
}

},{}],13:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],14:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],15:[function(require,module,exports){

/**
 * isArray
 */

var isArray = Array.isArray;

/**
 * toString
 */

var str = Object.prototype.toString;

/**
 * Whether or not the given `val`
 * is an array.
 *
 * example:
 *
 *        isArray([]);
 *        // > true
 *        isArray(arguments);
 *        // > false
 *        isArray('');
 *        // > false
 *
 * @param {mixed} val
 * @return {bool}
 */

module.exports = isArray || function (val) {
  return !! val && '[object Array]' == str.call(val);
};

},{}],16:[function(require,module,exports){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}

},{}],17:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],18:[function(require,module,exports){
/**
 * Helpers.
 */

var s = 1000
var m = s * 60
var h = m * 60
var d = h * 24
var y = d * 365.25

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} options
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {}
  var type = typeof val
  if (type === 'string' && val.length > 0) {
    return parse(val)
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ?
			fmtLong(val) :
			fmtShort(val)
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val))
}

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str)
  if (str.length > 10000) {
    return
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str)
  if (!match) {
    return
  }
  var n = parseFloat(match[1])
  var type = (match[2] || 'ms').toLowerCase()
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y
    case 'days':
    case 'day':
    case 'd':
      return n * d
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n
    default:
      return undefined
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd'
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h'
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm'
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's'
  }
  return ms + 'ms'
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms'
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name
  }
  return Math.ceil(ms / n) + ' ' + name + 's'
}

},{}],19:[function(require,module,exports){
(function (process){
'use strict';

if (!process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = nextTick;
} else {
  module.exports = process.nextTick;
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return process.nextTick(fn);
  case 2:
    return process.nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return process.nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return process.nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments[i];
    }
    return process.nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}

}).call(this,require('_process'))
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9wcm9jZXNzLW5leHRpY2stYXJncy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIXByb2Nlc3MudmVyc2lvbiB8fFxuICAgIHByb2Nlc3MudmVyc2lvbi5pbmRleE9mKCd2MC4nKSA9PT0gMCB8fFxuICAgIHByb2Nlc3MudmVyc2lvbi5pbmRleE9mKCd2MS4nKSA9PT0gMCAmJiBwcm9jZXNzLnZlcnNpb24uaW5kZXhPZigndjEuOC4nKSAhPT0gMCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IG5leHRUaWNrO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBwcm9jZXNzLm5leHRUaWNrO1xufVxuXG5mdW5jdGlvbiBuZXh0VGljayhmbiwgYXJnMSwgYXJnMiwgYXJnMykge1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJjYWxsYmFja1wiIGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG4gIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgYXJncywgaTtcbiAgc3dpdGNoIChsZW4pIHtcbiAgY2FzZSAwOlxuICBjYXNlIDE6XG4gICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZm4pO1xuICBjYXNlIDI6XG4gICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gYWZ0ZXJUaWNrT25lKCkge1xuICAgICAgZm4uY2FsbChudWxsLCBhcmcxKTtcbiAgICB9KTtcbiAgY2FzZSAzOlxuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uIGFmdGVyVGlja1R3bygpIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgYXJnMSwgYXJnMik7XG4gICAgfSk7XG4gIGNhc2UgNDpcbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiBhZnRlclRpY2tUaHJlZSgpIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgYXJnMSwgYXJnMiwgYXJnMyk7XG4gICAgfSk7XG4gIGRlZmF1bHQ6XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gLSAxKTtcbiAgICBpID0gMDtcbiAgICB3aGlsZSAoaSA8IGFyZ3MubGVuZ3RoKSB7XG4gICAgICBhcmdzW2krK10gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uIGFmdGVyVGljaygpIHtcbiAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=
},{"_process":20}],20:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canMutationObserver = typeof window !== 'undefined'
    && window.MutationObserver;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    var queue = [];

    if (canMutationObserver) {
        var hiddenDiv = document.createElement("div");
        var observer = new MutationObserver(function () {
            var queueList = queue.slice();
            queue.length = 0;
            queueList.forEach(function (fn) {
                fn();
            });
        });

        observer.observe(hiddenDiv, { attributes: true });

        return function nextTick(fn) {
            if (!queue.length) {
                hiddenDiv.setAttribute('yes', 'no');
            }
            queue.push(fn);
        };
    }

    if (canPost) {
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],21:[function(require,module,exports){
(function (process,global,Buffer){
'use strict'

function oldBrowser () {
  throw new Error('secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11')
}

var crypto = global.crypto || global.msCrypto

if (crypto && crypto.getRandomValues) {
  module.exports = randomBytes
} else {
  module.exports = oldBrowser
}

function randomBytes (size, cb) {
  // phantomjs needs to throw
  if (size > 65536) throw new Error('requested too many random bytes')
  // in case browserify  isn't using the Uint8Array version
  var rawBytes = new global.Uint8Array(size)

  // This will not work in older browsers.
  // See https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
  if (size > 0) {  // getRandomValues fails on IE if size == 0
    crypto.getRandomValues(rawBytes)
  }
  // phantomjs doesn't like a buffer being passed here
  var bytes = new Buffer(rawBytes.buffer)

  if (typeof cb === 'function') {
    return process.nextTick(function () {
      cb(null, bytes)
    })
  }

  return bytes
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer)
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yYW5kb21ieXRlcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmZ1bmN0aW9uIG9sZEJyb3dzZXIgKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ3NlY3VyZSByYW5kb20gbnVtYmVyIGdlbmVyYXRpb24gbm90IHN1cHBvcnRlZCBieSB0aGlzIGJyb3dzZXJcXG51c2UgY2hyb21lLCBGaXJlRm94IG9yIEludGVybmV0IEV4cGxvcmVyIDExJylcbn1cblxudmFyIGNyeXB0byA9IGdsb2JhbC5jcnlwdG8gfHwgZ2xvYmFsLm1zQ3J5cHRvXG5cbmlmIChjcnlwdG8gJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJhbmRvbUJ5dGVzXG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IG9sZEJyb3dzZXJcbn1cblxuZnVuY3Rpb24gcmFuZG9tQnl0ZXMgKHNpemUsIGNiKSB7XG4gIC8vIHBoYW50b21qcyBuZWVkcyB0byB0aHJvd1xuICBpZiAoc2l6ZSA+IDY1NTM2KSB0aHJvdyBuZXcgRXJyb3IoJ3JlcXVlc3RlZCB0b28gbWFueSByYW5kb20gYnl0ZXMnKVxuICAvLyBpbiBjYXNlIGJyb3dzZXJpZnkgIGlzbid0IHVzaW5nIHRoZSBVaW50OEFycmF5IHZlcnNpb25cbiAgdmFyIHJhd0J5dGVzID0gbmV3IGdsb2JhbC5VaW50OEFycmF5KHNpemUpXG5cbiAgLy8gVGhpcyB3aWxsIG5vdCB3b3JrIGluIG9sZGVyIGJyb3dzZXJzLlxuICAvLyBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL3dpbmRvdy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzXG4gIGlmIChzaXplID4gMCkgeyAgLy8gZ2V0UmFuZG9tVmFsdWVzIGZhaWxzIG9uIElFIGlmIHNpemUgPT0gMFxuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMocmF3Qnl0ZXMpXG4gIH1cbiAgLy8gcGhhbnRvbWpzIGRvZXNuJ3QgbGlrZSBhIGJ1ZmZlciBiZWluZyBwYXNzZWQgaGVyZVxuICB2YXIgYnl0ZXMgPSBuZXcgQnVmZmVyKHJhd0J5dGVzLmJ1ZmZlcilcblxuICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgY2IobnVsbCwgYnl0ZXMpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBieXRlc1xufVxuIl19
},{"_process":20,"buffer":7}],22:[function(require,module,exports){
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

'use strict';

/*<replacement>*/

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var processNextTick = require('process-nextick-args');
/*</replacement>*/

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var Readable = require('./_stream_readable');
var Writable = require('./_stream_writable');

util.inherits(Duplex, Readable);

var keys = objectKeys(Writable.prototype);
for (var v = 0; v < keys.length; v++) {
  var method = keys[v];
  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  processNextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}
},{"./_stream_readable":24,"./_stream_writable":26,"core-util-is":8,"inherits":14,"process-nextick-args":19}],23:[function(require,module,exports){
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.

'use strict';

module.exports = PassThrough;

var Transform = require('./_stream_transform');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};
},{"./_stream_transform":25,"core-util-is":8,"inherits":14}],24:[function(require,module,exports){
(function (process){
'use strict';

module.exports = Readable;

/*<replacement>*/
var processNextTick = require('process-nextick-args');
/*</replacement>*/

/*<replacement>*/
var isArray = require('isarray');
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = require('events').EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream;
(function () {
  try {
    Stream = require('st' + 'ream');
  } catch (_) {} finally {
    if (!Stream) Stream = require('events').EventEmitter;
  }
})();
/*</replacement>*/

var Buffer = require('buffer').Buffer;
/*<replacement>*/
var bufferShim = require('buffer-shims');
/*</replacement>*/

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

/*<replacement>*/
var debugUtil = require('util');
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var BufferList = require('./internal/streams/BufferList');
var StringDecoder;

util.inherits(Readable, Stream);

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') {
    return emitter.prependListener(event, fn);
  } else {
    // This is a hack to make sure that our error handler is attached before any
    // userland ones.  NEVER DO THIS. This is here only because this code needs
    // to continue to work with older versions of Node.js that do not include
    // the prependListener() method. The goal is to eventually remove this hack.
    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
  }
}

function ReadableState(options, stream) {
  Duplex = Duplex || require('./_stream_duplex');

  options = options || {};

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~~this.highWaterMark;

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // when piping, we only care about 'readable' events that happen
  // after read()ing all the bytes and not getting any pushback.
  this.ranOut = false;

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || require('./_stream_duplex');

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options && typeof options.read === 'function') this._read = options.read;

  Stream.call(this);
}

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;

  if (!state.objectMode && typeof chunk === 'string') {
    encoding = encoding || state.defaultEncoding;
    if (encoding !== state.encoding) {
      chunk = bufferShim.from(chunk, encoding);
      encoding = '';
    }
  }

  return readableAddChunk(this, state, chunk, encoding, false);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  var state = this._readableState;
  return readableAddChunk(this, state, chunk, '', true);
};

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

function readableAddChunk(stream, state, chunk, encoding, addToFront) {
  var er = chunkInvalid(state, chunk);
  if (er) {
    stream.emit('error', er);
  } else if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else if (state.objectMode || chunk && chunk.length > 0) {
    if (state.ended && !addToFront) {
      var e = new Error('stream.push() after EOF');
      stream.emit('error', e);
    } else if (state.endEmitted && addToFront) {
      var _e = new Error('stream.unshift() after end event');
      stream.emit('error', _e);
    } else {
      var skipAdd;
      if (state.decoder && !addToFront && !encoding) {
        chunk = state.decoder.write(chunk);
        skipAdd = !state.objectMode && chunk.length === 0;
      }

      if (!addToFront) state.reading = false;

      // Don't add to the buffer if we've decoded to an empty string chunk and
      // we're not in object mode
      if (!skipAdd) {
        // if we want the data now, just emit it.
        if (state.flowing && state.length === 0 && !state.sync) {
          stream.emit('data', chunk);
          stream.read(0);
        } else {
          // update the buffer info.
          state.length += state.objectMode ? 1 : chunk.length;
          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

          if (state.needReadable) emitReadable(stream);
        }
      }

      maybeReadMore(stream, state);
    }
  } else if (!addToFront) {
    state.reading = false;
  }

  return needMoreData(state);
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function chunkInvalid(state, chunk) {
  var er = null;
  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    processNextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('_read() is not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : cleanup;
  if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable) {
    debug('onunpipe');
    if (readable === src) {
      cleanup();
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', cleanup);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this);
    }return this;
  }

  // try to find the right one.
  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;

  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        processNextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this, state);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    processNextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var state = this._readableState;
  var paused = false;

  var self = this;
  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) self.push(chunk);
    }

    self.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = self.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
  forEach(events, function (ev) {
    stream.on(ev, self.emit.bind(self, ev));
  });

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  self._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return self;
};

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = bufferShim.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    processNextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function forEach(xs, f) {
  for (var i = 0, l = xs.length; i < l; i++) {
    f(xs[i], i);
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
}).call(this,require('_process'))
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliL19zdHJlYW1fcmVhZGFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFkYWJsZTtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBwcm9jZXNzTmV4dFRpY2sgPSByZXF1aXJlKCdwcm9jZXNzLW5leHRpY2stYXJncycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIER1cGxleDtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG5SZWFkYWJsZS5SZWFkYWJsZVN0YXRlID0gUmVhZGFibGVTdGF0ZTtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBFRSA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcblxudmFyIEVFbGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uIChlbWl0dGVyLCB0eXBlKSB7XG4gIHJldHVybiBlbWl0dGVyLmxpc3RlbmVycyh0eXBlKS5sZW5ndGg7XG59O1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgU3RyZWFtO1xuKGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBTdHJlYW0gPSByZXF1aXJlKCdzdCcgKyAncmVhbScpO1xuICB9IGNhdGNoIChfKSB7fSBmaW5hbGx5IHtcbiAgICBpZiAoIVN0cmVhbSkgU3RyZWFtID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xuICB9XG59KSgpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbnZhciBCdWZmZXIgPSByZXF1aXJlKCdidWZmZXInKS5CdWZmZXI7XG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIGJ1ZmZlclNoaW0gPSByZXF1aXJlKCdidWZmZXItc2hpbXMnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIHV0aWwgPSByZXF1aXJlKCdjb3JlLXV0aWwtaXMnKTtcbnV0aWwuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgZGVidWdVdGlsID0gcmVxdWlyZSgndXRpbCcpO1xudmFyIGRlYnVnID0gdm9pZCAwO1xuaWYgKGRlYnVnVXRpbCAmJiBkZWJ1Z1V0aWwuZGVidWdsb2cpIHtcbiAgZGVidWcgPSBkZWJ1Z1V0aWwuZGVidWdsb2coJ3N0cmVhbScpO1xufSBlbHNlIHtcbiAgZGVidWcgPSBmdW5jdGlvbiAoKSB7fTtcbn1cbi8qPC9yZXBsYWNlbWVudD4qL1xuXG52YXIgQnVmZmVyTGlzdCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvc3RyZWFtcy9CdWZmZXJMaXN0Jyk7XG52YXIgU3RyaW5nRGVjb2RlcjtcblxudXRpbC5pbmhlcml0cyhSZWFkYWJsZSwgU3RyZWFtKTtcblxuZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKGVtaXR0ZXIsIGV2ZW50LCBmbikge1xuICAvLyBTYWRseSB0aGlzIGlzIG5vdCBjYWNoZWFibGUgYXMgc29tZSBsaWJyYXJpZXMgYnVuZGxlIHRoZWlyIG93blxuICAvLyBldmVudCBlbWl0dGVyIGltcGxlbWVudGF0aW9uIHdpdGggdGhlbS5cbiAgaWYgKHR5cGVvZiBlbWl0dGVyLnByZXBlbmRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLnByZXBlbmRMaXN0ZW5lcihldmVudCwgZm4pO1xuICB9IGVsc2Uge1xuICAgIC8vIFRoaXMgaXMgYSBoYWNrIHRvIG1ha2Ugc3VyZSB0aGF0IG91ciBlcnJvciBoYW5kbGVyIGlzIGF0dGFjaGVkIGJlZm9yZSBhbnlcbiAgICAvLyB1c2VybGFuZCBvbmVzLiAgTkVWRVIgRE8gVEhJUy4gVGhpcyBpcyBoZXJlIG9ubHkgYmVjYXVzZSB0aGlzIGNvZGUgbmVlZHNcbiAgICAvLyB0byBjb250aW51ZSB0byB3b3JrIHdpdGggb2xkZXIgdmVyc2lvbnMgb2YgTm9kZS5qcyB0aGF0IGRvIG5vdCBpbmNsdWRlXG4gICAgLy8gdGhlIHByZXBlbmRMaXN0ZW5lcigpIG1ldGhvZC4gVGhlIGdvYWwgaXMgdG8gZXZlbnR1YWxseSByZW1vdmUgdGhpcyBoYWNrLlxuICAgIGlmICghZW1pdHRlci5fZXZlbnRzIHx8ICFlbWl0dGVyLl9ldmVudHNbZXZlbnRdKSBlbWl0dGVyLm9uKGV2ZW50LCBmbik7ZWxzZSBpZiAoaXNBcnJheShlbWl0dGVyLl9ldmVudHNbZXZlbnRdKSkgZW1pdHRlci5fZXZlbnRzW2V2ZW50XS51bnNoaWZ0KGZuKTtlbHNlIGVtaXR0ZXIuX2V2ZW50c1tldmVudF0gPSBbZm4sIGVtaXR0ZXIuX2V2ZW50c1tldmVudF1dO1xuICB9XG59XG5cbmZ1bmN0aW9uIFJlYWRhYmxlU3RhdGUob3B0aW9ucywgc3RyZWFtKSB7XG4gIER1cGxleCA9IER1cGxleCB8fCByZXF1aXJlKCcuL19zdHJlYW1fZHVwbGV4Jyk7XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgLy8gb2JqZWN0IHN0cmVhbSBmbGFnLiBVc2VkIHRvIG1ha2UgcmVhZChuKSBpZ25vcmUgbiBhbmQgdG9cbiAgLy8gbWFrZSBhbGwgdGhlIGJ1ZmZlciBtZXJnaW5nIGFuZCBsZW5ndGggY2hlY2tzIGdvIGF3YXlcbiAgdGhpcy5vYmplY3RNb2RlID0gISFvcHRpb25zLm9iamVjdE1vZGU7XG5cbiAgaWYgKHN0cmVhbSBpbnN0YW5jZW9mIER1cGxleCkgdGhpcy5vYmplY3RNb2RlID0gdGhpcy5vYmplY3RNb2RlIHx8ICEhb3B0aW9ucy5yZWFkYWJsZU9iamVjdE1vZGU7XG5cbiAgLy8gdGhlIHBvaW50IGF0IHdoaWNoIGl0IHN0b3BzIGNhbGxpbmcgX3JlYWQoKSB0byBmaWxsIHRoZSBidWZmZXJcbiAgLy8gTm90ZTogMCBpcyBhIHZhbGlkIHZhbHVlLCBtZWFucyBcImRvbid0IGNhbGwgX3JlYWQgcHJlZW1wdGl2ZWx5IGV2ZXJcIlxuICB2YXIgaHdtID0gb3B0aW9ucy5oaWdoV2F0ZXJNYXJrO1xuICB2YXIgZGVmYXVsdEh3bSA9IHRoaXMub2JqZWN0TW9kZSA/IDE2IDogMTYgKiAxMDI0O1xuICB0aGlzLmhpZ2hXYXRlck1hcmsgPSBod20gfHwgaHdtID09PSAwID8gaHdtIDogZGVmYXVsdEh3bTtcblxuICAvLyBjYXN0IHRvIGludHMuXG4gIHRoaXMuaGlnaFdhdGVyTWFyayA9IH5+dGhpcy5oaWdoV2F0ZXJNYXJrO1xuXG4gIC8vIEEgbGlua2VkIGxpc3QgaXMgdXNlZCB0byBzdG9yZSBkYXRhIGNodW5rcyBpbnN0ZWFkIG9mIGFuIGFycmF5IGJlY2F1c2UgdGhlXG4gIC8vIGxpbmtlZCBsaXN0IGNhbiByZW1vdmUgZWxlbWVudHMgZnJvbSB0aGUgYmVnaW5uaW5nIGZhc3RlciB0aGFuXG4gIC8vIGFycmF5LnNoaWZ0KClcbiAgdGhpcy5idWZmZXIgPSBuZXcgQnVmZmVyTGlzdCgpO1xuICB0aGlzLmxlbmd0aCA9IDA7XG4gIHRoaXMucGlwZXMgPSBudWxsO1xuICB0aGlzLnBpcGVzQ291bnQgPSAwO1xuICB0aGlzLmZsb3dpbmcgPSBudWxsO1xuICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gIHRoaXMuZW5kRW1pdHRlZCA9IGZhbHNlO1xuICB0aGlzLnJlYWRpbmcgPSBmYWxzZTtcblxuICAvLyBhIGZsYWcgdG8gYmUgYWJsZSB0byB0ZWxsIGlmIHRoZSBvbndyaXRlIGNiIGlzIGNhbGxlZCBpbW1lZGlhdGVseSxcbiAgLy8gb3Igb24gYSBsYXRlciB0aWNrLiAgV2Ugc2V0IHRoaXMgdG8gdHJ1ZSBhdCBmaXJzdCwgYmVjYXVzZSBhbnlcbiAgLy8gYWN0aW9ucyB0aGF0IHNob3VsZG4ndCBoYXBwZW4gdW50aWwgXCJsYXRlclwiIHNob3VsZCBnZW5lcmFsbHkgYWxzb1xuICAvLyBub3QgaGFwcGVuIGJlZm9yZSB0aGUgZmlyc3Qgd3JpdGUgY2FsbC5cbiAgdGhpcy5zeW5jID0gdHJ1ZTtcblxuICAvLyB3aGVuZXZlciB3ZSByZXR1cm4gbnVsbCwgdGhlbiB3ZSBzZXQgYSBmbGFnIHRvIHNheVxuICAvLyB0aGF0IHdlJ3JlIGF3YWl0aW5nIGEgJ3JlYWRhYmxlJyBldmVudCBlbWlzc2lvbi5cbiAgdGhpcy5uZWVkUmVhZGFibGUgPSBmYWxzZTtcbiAgdGhpcy5lbWl0dGVkUmVhZGFibGUgPSBmYWxzZTtcbiAgdGhpcy5yZWFkYWJsZUxpc3RlbmluZyA9IGZhbHNlO1xuICB0aGlzLnJlc3VtZVNjaGVkdWxlZCA9IGZhbHNlO1xuXG4gIC8vIENyeXB0byBpcyBraW5kIG9mIG9sZCBhbmQgY3J1c3R5LiAgSGlzdG9yaWNhbGx5LCBpdHMgZGVmYXVsdCBzdHJpbmdcbiAgLy8gZW5jb2RpbmcgaXMgJ2JpbmFyeScgc28gd2UgaGF2ZSB0byBtYWtlIHRoaXMgY29uZmlndXJhYmxlLlxuICAvLyBFdmVyeXRoaW5nIGVsc2UgaW4gdGhlIHVuaXZlcnNlIHVzZXMgJ3V0ZjgnLCB0aG91Z2guXG4gIHRoaXMuZGVmYXVsdEVuY29kaW5nID0gb3B0aW9ucy5kZWZhdWx0RW5jb2RpbmcgfHwgJ3V0ZjgnO1xuXG4gIC8vIHdoZW4gcGlwaW5nLCB3ZSBvbmx5IGNhcmUgYWJvdXQgJ3JlYWRhYmxlJyBldmVudHMgdGhhdCBoYXBwZW5cbiAgLy8gYWZ0ZXIgcmVhZCgpaW5nIGFsbCB0aGUgYnl0ZXMgYW5kIG5vdCBnZXR0aW5nIGFueSBwdXNoYmFjay5cbiAgdGhpcy5yYW5PdXQgPSBmYWxzZTtcblxuICAvLyB0aGUgbnVtYmVyIG9mIHdyaXRlcnMgdGhhdCBhcmUgYXdhaXRpbmcgYSBkcmFpbiBldmVudCBpbiAucGlwZSgpc1xuICB0aGlzLmF3YWl0RHJhaW4gPSAwO1xuXG4gIC8vIGlmIHRydWUsIGEgbWF5YmVSZWFkTW9yZSBoYXMgYmVlbiBzY2hlZHVsZWRcbiAgdGhpcy5yZWFkaW5nTW9yZSA9IGZhbHNlO1xuXG4gIHRoaXMuZGVjb2RlciA9IG51bGw7XG4gIHRoaXMuZW5jb2RpbmcgPSBudWxsO1xuICBpZiAob3B0aW9ucy5lbmNvZGluZykge1xuICAgIGlmICghU3RyaW5nRGVjb2RlcikgU3RyaW5nRGVjb2RlciA9IHJlcXVpcmUoJ3N0cmluZ19kZWNvZGVyLycpLlN0cmluZ0RlY29kZXI7XG4gICAgdGhpcy5kZWNvZGVyID0gbmV3IFN0cmluZ0RlY29kZXIob3B0aW9ucy5lbmNvZGluZyk7XG4gICAgdGhpcy5lbmNvZGluZyA9IG9wdGlvbnMuZW5jb2Rpbmc7XG4gIH1cbn1cblxuZnVuY3Rpb24gUmVhZGFibGUob3B0aW9ucykge1xuICBEdXBsZXggPSBEdXBsZXggfHwgcmVxdWlyZSgnLi9fc3RyZWFtX2R1cGxleCcpO1xuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZWFkYWJsZSkpIHJldHVybiBuZXcgUmVhZGFibGUob3B0aW9ucyk7XG5cbiAgdGhpcy5fcmVhZGFibGVTdGF0ZSA9IG5ldyBSZWFkYWJsZVN0YXRlKG9wdGlvbnMsIHRoaXMpO1xuXG4gIC8vIGxlZ2FjeVxuICB0aGlzLnJlYWRhYmxlID0gdHJ1ZTtcblxuICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5yZWFkID09PSAnZnVuY3Rpb24nKSB0aGlzLl9yZWFkID0gb3B0aW9ucy5yZWFkO1xuXG4gIFN0cmVhbS5jYWxsKHRoaXMpO1xufVxuXG4vLyBNYW51YWxseSBzaG92ZSBzb21ldGhpbmcgaW50byB0aGUgcmVhZCgpIGJ1ZmZlci5cbi8vIFRoaXMgcmV0dXJucyB0cnVlIGlmIHRoZSBoaWdoV2F0ZXJNYXJrIGhhcyBub3QgYmVlbiBoaXQgeWV0LFxuLy8gc2ltaWxhciB0byBob3cgV3JpdGFibGUud3JpdGUoKSByZXR1cm5zIHRydWUgaWYgeW91IHNob3VsZFxuLy8gd3JpdGUoKSBzb21lIG1vcmUuXG5SZWFkYWJsZS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcblxuICBpZiAoIXN0YXRlLm9iamVjdE1vZGUgJiYgdHlwZW9mIGNodW5rID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gZW5jb2RpbmcgfHwgc3RhdGUuZGVmYXVsdEVuY29kaW5nO1xuICAgIGlmIChlbmNvZGluZyAhPT0gc3RhdGUuZW5jb2RpbmcpIHtcbiAgICAgIGNodW5rID0gYnVmZmVyU2hpbS5mcm9tKGNodW5rLCBlbmNvZGluZyk7XG4gICAgICBlbmNvZGluZyA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWFkYWJsZUFkZENodW5rKHRoaXMsIHN0YXRlLCBjaHVuaywgZW5jb2RpbmcsIGZhbHNlKTtcbn07XG5cbi8vIFVuc2hpZnQgc2hvdWxkICphbHdheXMqIGJlIHNvbWV0aGluZyBkaXJlY3RseSBvdXQgb2YgcmVhZCgpXG5SZWFkYWJsZS5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uIChjaHVuaykge1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICByZXR1cm4gcmVhZGFibGVBZGRDaHVuayh0aGlzLCBzdGF0ZSwgY2h1bmssICcnLCB0cnVlKTtcbn07XG5cblJlYWRhYmxlLnByb3RvdHlwZS5pc1BhdXNlZCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX3JlYWRhYmxlU3RhdGUuZmxvd2luZyA9PT0gZmFsc2U7XG59O1xuXG5mdW5jdGlvbiByZWFkYWJsZUFkZENodW5rKHN0cmVhbSwgc3RhdGUsIGNodW5rLCBlbmNvZGluZywgYWRkVG9Gcm9udCkge1xuICB2YXIgZXIgPSBjaHVua0ludmFsaWQoc3RhdGUsIGNodW5rKTtcbiAgaWYgKGVyKSB7XG4gICAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXIpO1xuICB9IGVsc2UgaWYgKGNodW5rID09PSBudWxsKSB7XG4gICAgc3RhdGUucmVhZGluZyA9IGZhbHNlO1xuICAgIG9uRW9mQ2h1bmsoc3RyZWFtLCBzdGF0ZSk7XG4gIH0gZWxzZSBpZiAoc3RhdGUub2JqZWN0TW9kZSB8fCBjaHVuayAmJiBjaHVuay5sZW5ndGggPiAwKSB7XG4gICAgaWYgKHN0YXRlLmVuZGVkICYmICFhZGRUb0Zyb250KSB7XG4gICAgICB2YXIgZSA9IG5ldyBFcnJvcignc3RyZWFtLnB1c2goKSBhZnRlciBFT0YnKTtcbiAgICAgIHN0cmVhbS5lbWl0KCdlcnJvcicsIGUpO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUuZW5kRW1pdHRlZCAmJiBhZGRUb0Zyb250KSB7XG4gICAgICB2YXIgX2UgPSBuZXcgRXJyb3IoJ3N0cmVhbS51bnNoaWZ0KCkgYWZ0ZXIgZW5kIGV2ZW50Jyk7XG4gICAgICBzdHJlYW0uZW1pdCgnZXJyb3InLCBfZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBza2lwQWRkO1xuICAgICAgaWYgKHN0YXRlLmRlY29kZXIgJiYgIWFkZFRvRnJvbnQgJiYgIWVuY29kaW5nKSB7XG4gICAgICAgIGNodW5rID0gc3RhdGUuZGVjb2Rlci53cml0ZShjaHVuayk7XG4gICAgICAgIHNraXBBZGQgPSAhc3RhdGUub2JqZWN0TW9kZSAmJiBjaHVuay5sZW5ndGggPT09IDA7XG4gICAgICB9XG5cbiAgICAgIGlmICghYWRkVG9Gcm9udCkgc3RhdGUucmVhZGluZyA9IGZhbHNlO1xuXG4gICAgICAvLyBEb24ndCBhZGQgdG8gdGhlIGJ1ZmZlciBpZiB3ZSd2ZSBkZWNvZGVkIHRvIGFuIGVtcHR5IHN0cmluZyBjaHVuayBhbmRcbiAgICAgIC8vIHdlJ3JlIG5vdCBpbiBvYmplY3QgbW9kZVxuICAgICAgaWYgKCFza2lwQWRkKSB7XG4gICAgICAgIC8vIGlmIHdlIHdhbnQgdGhlIGRhdGEgbm93LCBqdXN0IGVtaXQgaXQuXG4gICAgICAgIGlmIChzdGF0ZS5mbG93aW5nICYmIHN0YXRlLmxlbmd0aCA9PT0gMCAmJiAhc3RhdGUuc3luYykge1xuICAgICAgICAgIHN0cmVhbS5lbWl0KCdkYXRhJywgY2h1bmspO1xuICAgICAgICAgIHN0cmVhbS5yZWFkKDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgYnVmZmVyIGluZm8uXG4gICAgICAgICAgc3RhdGUubGVuZ3RoICs9IHN0YXRlLm9iamVjdE1vZGUgPyAxIDogY2h1bmsubGVuZ3RoO1xuICAgICAgICAgIGlmIChhZGRUb0Zyb250KSBzdGF0ZS5idWZmZXIudW5zaGlmdChjaHVuayk7ZWxzZSBzdGF0ZS5idWZmZXIucHVzaChjaHVuayk7XG5cbiAgICAgICAgICBpZiAoc3RhdGUubmVlZFJlYWRhYmxlKSBlbWl0UmVhZGFibGUoc3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtYXliZVJlYWRNb3JlKHN0cmVhbSwgc3RhdGUpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghYWRkVG9Gcm9udCkge1xuICAgIHN0YXRlLnJlYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBuZWVkTW9yZURhdGEoc3RhdGUpO1xufVxuXG4vLyBpZiBpdCdzIHBhc3QgdGhlIGhpZ2ggd2F0ZXIgbWFyaywgd2UgY2FuIHB1c2ggaW4gc29tZSBtb3JlLlxuLy8gQWxzbywgaWYgd2UgaGF2ZSBubyBkYXRhIHlldCwgd2UgY2FuIHN0YW5kIHNvbWVcbi8vIG1vcmUgYnl0ZXMuICBUaGlzIGlzIHRvIHdvcmsgYXJvdW5kIGNhc2VzIHdoZXJlIGh3bT0wLFxuLy8gc3VjaCBhcyB0aGUgcmVwbC4gIEFsc28sIGlmIHRoZSBwdXNoKCkgdHJpZ2dlcmVkIGFcbi8vIHJlYWRhYmxlIGV2ZW50LCBhbmQgdGhlIHVzZXIgY2FsbGVkIHJlYWQobGFyZ2VOdW1iZXIpIHN1Y2ggdGhhdFxuLy8gbmVlZFJlYWRhYmxlIHdhcyBzZXQsIHRoZW4gd2Ugb3VnaHQgdG8gcHVzaCBtb3JlLCBzbyB0aGF0IGFub3RoZXJcbi8vICdyZWFkYWJsZScgZXZlbnQgd2lsbCBiZSB0cmlnZ2VyZWQuXG5mdW5jdGlvbiBuZWVkTW9yZURhdGEoc3RhdGUpIHtcbiAgcmV0dXJuICFzdGF0ZS5lbmRlZCAmJiAoc3RhdGUubmVlZFJlYWRhYmxlIHx8IHN0YXRlLmxlbmd0aCA8IHN0YXRlLmhpZ2hXYXRlck1hcmsgfHwgc3RhdGUubGVuZ3RoID09PSAwKTtcbn1cblxuLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG5SZWFkYWJsZS5wcm90b3R5cGUuc2V0RW5jb2RpbmcgPSBmdW5jdGlvbiAoZW5jKSB7XG4gIGlmICghU3RyaW5nRGVjb2RlcikgU3RyaW5nRGVjb2RlciA9IHJlcXVpcmUoJ3N0cmluZ19kZWNvZGVyLycpLlN0cmluZ0RlY29kZXI7XG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVjb2RlciA9IG5ldyBTdHJpbmdEZWNvZGVyKGVuYyk7XG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUuZW5jb2RpbmcgPSBlbmM7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gRG9uJ3QgcmFpc2UgdGhlIGh3bSA+IDhNQlxudmFyIE1BWF9IV00gPSAweDgwMDAwMDtcbmZ1bmN0aW9uIGNvbXB1dGVOZXdIaWdoV2F0ZXJNYXJrKG4pIHtcbiAgaWYgKG4gPj0gTUFYX0hXTSkge1xuICAgIG4gPSBNQVhfSFdNO1xuICB9IGVsc2Uge1xuICAgIC8vIEdldCB0aGUgbmV4dCBoaWdoZXN0IHBvd2VyIG9mIDIgdG8gcHJldmVudCBpbmNyZWFzaW5nIGh3bSBleGNlc3NpdmVseSBpblxuICAgIC8vIHRpbnkgYW1vdW50c1xuICAgIG4tLTtcbiAgICBuIHw9IG4gPj4+IDE7XG4gICAgbiB8PSBuID4+PiAyO1xuICAgIG4gfD0gbiA+Pj4gNDtcbiAgICBuIHw9IG4gPj4+IDg7XG4gICAgbiB8PSBuID4+PiAxNjtcbiAgICBuKys7XG4gIH1cbiAgcmV0dXJuIG47XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgZGVzaWduZWQgdG8gYmUgaW5saW5hYmxlLCBzbyBwbGVhc2UgdGFrZSBjYXJlIHdoZW4gbWFraW5nXG4vLyBjaGFuZ2VzIHRvIHRoZSBmdW5jdGlvbiBib2R5LlxuZnVuY3Rpb24gaG93TXVjaFRvUmVhZChuLCBzdGF0ZSkge1xuICBpZiAobiA8PSAwIHx8IHN0YXRlLmxlbmd0aCA9PT0gMCAmJiBzdGF0ZS5lbmRlZCkgcmV0dXJuIDA7XG4gIGlmIChzdGF0ZS5vYmplY3RNb2RlKSByZXR1cm4gMTtcbiAgaWYgKG4gIT09IG4pIHtcbiAgICAvLyBPbmx5IGZsb3cgb25lIGJ1ZmZlciBhdCBhIHRpbWVcbiAgICBpZiAoc3RhdGUuZmxvd2luZyAmJiBzdGF0ZS5sZW5ndGgpIHJldHVybiBzdGF0ZS5idWZmZXIuaGVhZC5kYXRhLmxlbmd0aDtlbHNlIHJldHVybiBzdGF0ZS5sZW5ndGg7XG4gIH1cbiAgLy8gSWYgd2UncmUgYXNraW5nIGZvciBtb3JlIHRoYW4gdGhlIGN1cnJlbnQgaHdtLCB0aGVuIHJhaXNlIHRoZSBod20uXG4gIGlmIChuID4gc3RhdGUuaGlnaFdhdGVyTWFyaykgc3RhdGUuaGlnaFdhdGVyTWFyayA9IGNvbXB1dGVOZXdIaWdoV2F0ZXJNYXJrKG4pO1xuICBpZiAobiA8PSBzdGF0ZS5sZW5ndGgpIHJldHVybiBuO1xuICAvLyBEb24ndCBoYXZlIGVub3VnaFxuICBpZiAoIXN0YXRlLmVuZGVkKSB7XG4gICAgc3RhdGUubmVlZFJlYWRhYmxlID0gdHJ1ZTtcbiAgICByZXR1cm4gMDtcbiAgfVxuICByZXR1cm4gc3RhdGUubGVuZ3RoO1xufVxuXG4vLyB5b3UgY2FuIG92ZXJyaWRlIGVpdGhlciB0aGlzIG1ldGhvZCwgb3IgdGhlIGFzeW5jIF9yZWFkKG4pIGJlbG93LlxuUmVhZGFibGUucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiAobikge1xuICBkZWJ1ZygncmVhZCcsIG4pO1xuICBuID0gcGFyc2VJbnQobiwgMTApO1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICB2YXIgbk9yaWcgPSBuO1xuXG4gIGlmIChuICE9PSAwKSBzdGF0ZS5lbWl0dGVkUmVhZGFibGUgPSBmYWxzZTtcblxuICAvLyBpZiB3ZSdyZSBkb2luZyByZWFkKDApIHRvIHRyaWdnZXIgYSByZWFkYWJsZSBldmVudCwgYnV0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhIGJ1bmNoIG9mIGRhdGEgaW4gdGhlIGJ1ZmZlciwgdGhlbiBqdXN0IHRyaWdnZXJcbiAgLy8gdGhlICdyZWFkYWJsZScgZXZlbnQgYW5kIG1vdmUgb24uXG4gIGlmIChuID09PSAwICYmIHN0YXRlLm5lZWRSZWFkYWJsZSAmJiAoc3RhdGUubGVuZ3RoID49IHN0YXRlLmhpZ2hXYXRlck1hcmsgfHwgc3RhdGUuZW5kZWQpKSB7XG4gICAgZGVidWcoJ3JlYWQ6IGVtaXRSZWFkYWJsZScsIHN0YXRlLmxlbmd0aCwgc3RhdGUuZW5kZWQpO1xuICAgIGlmIChzdGF0ZS5sZW5ndGggPT09IDAgJiYgc3RhdGUuZW5kZWQpIGVuZFJlYWRhYmxlKHRoaXMpO2Vsc2UgZW1pdFJlYWRhYmxlKHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbiA9IGhvd011Y2hUb1JlYWQobiwgc3RhdGUpO1xuXG4gIC8vIGlmIHdlJ3ZlIGVuZGVkLCBhbmQgd2UncmUgbm93IGNsZWFyLCB0aGVuIGZpbmlzaCBpdCB1cC5cbiAgaWYgKG4gPT09IDAgJiYgc3RhdGUuZW5kZWQpIHtcbiAgICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSBlbmRSZWFkYWJsZSh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIEFsbCB0aGUgYWN0dWFsIGNodW5rIGdlbmVyYXRpb24gbG9naWMgbmVlZHMgdG8gYmVcbiAgLy8gKmJlbG93KiB0aGUgY2FsbCB0byBfcmVhZC4gIFRoZSByZWFzb24gaXMgdGhhdCBpbiBjZXJ0YWluXG4gIC8vIHN5bnRoZXRpYyBzdHJlYW0gY2FzZXMsIHN1Y2ggYXMgcGFzc3Rocm91Z2ggc3RyZWFtcywgX3JlYWRcbiAgLy8gbWF5IGJlIGEgY29tcGxldGVseSBzeW5jaHJvbm91cyBvcGVyYXRpb24gd2hpY2ggbWF5IGNoYW5nZVxuICAvLyB0aGUgc3RhdGUgb2YgdGhlIHJlYWQgYnVmZmVyLCBwcm92aWRpbmcgZW5vdWdoIGRhdGEgd2hlblxuICAvLyBiZWZvcmUgdGhlcmUgd2FzICpub3QqIGVub3VnaC5cbiAgLy9cbiAgLy8gU28sIHRoZSBzdGVwcyBhcmU6XG4gIC8vIDEuIEZpZ3VyZSBvdXQgd2hhdCB0aGUgc3RhdGUgb2YgdGhpbmdzIHdpbGwgYmUgYWZ0ZXIgd2UgZG9cbiAgLy8gYSByZWFkIGZyb20gdGhlIGJ1ZmZlci5cbiAgLy9cbiAgLy8gMi4gSWYgdGhhdCByZXN1bHRpbmcgc3RhdGUgd2lsbCB0cmlnZ2VyIGEgX3JlYWQsIHRoZW4gY2FsbCBfcmVhZC5cbiAgLy8gTm90ZSB0aGF0IHRoaXMgbWF5IGJlIGFzeW5jaHJvbm91cywgb3Igc3luY2hyb25vdXMuICBZZXMsIGl0IGlzXG4gIC8vIGRlZXBseSB1Z2x5IHRvIHdyaXRlIEFQSXMgdGhpcyB3YXksIGJ1dCB0aGF0IHN0aWxsIGRvZXNuJ3QgbWVhblxuICAvLyB0aGF0IHRoZSBSZWFkYWJsZSBjbGFzcyBzaG91bGQgYmVoYXZlIGltcHJvcGVybHksIGFzIHN0cmVhbXMgYXJlXG4gIC8vIGRlc2lnbmVkIHRvIGJlIHN5bmMvYXN5bmMgYWdub3N0aWMuXG4gIC8vIFRha2Ugbm90ZSBpZiB0aGUgX3JlYWQgY2FsbCBpcyBzeW5jIG9yIGFzeW5jIChpZSwgaWYgdGhlIHJlYWQgY2FsbFxuICAvLyBoYXMgcmV0dXJuZWQgeWV0KSwgc28gdGhhdCB3ZSBrbm93IHdoZXRoZXIgb3Igbm90IGl0J3Mgc2FmZSB0byBlbWl0XG4gIC8vICdyZWFkYWJsZScgZXRjLlxuICAvL1xuICAvLyAzLiBBY3R1YWxseSBwdWxsIHRoZSByZXF1ZXN0ZWQgY2h1bmtzIG91dCBvZiB0aGUgYnVmZmVyIGFuZCByZXR1cm4uXG5cbiAgLy8gaWYgd2UgbmVlZCBhIHJlYWRhYmxlIGV2ZW50LCB0aGVuIHdlIG5lZWQgdG8gZG8gc29tZSByZWFkaW5nLlxuICB2YXIgZG9SZWFkID0gc3RhdGUubmVlZFJlYWRhYmxlO1xuICBkZWJ1ZygnbmVlZCByZWFkYWJsZScsIGRvUmVhZCk7XG5cbiAgLy8gaWYgd2UgY3VycmVudGx5IGhhdmUgbGVzcyB0aGFuIHRoZSBoaWdoV2F0ZXJNYXJrLCB0aGVuIGFsc28gcmVhZCBzb21lXG4gIGlmIChzdGF0ZS5sZW5ndGggPT09IDAgfHwgc3RhdGUubGVuZ3RoIC0gbiA8IHN0YXRlLmhpZ2hXYXRlck1hcmspIHtcbiAgICBkb1JlYWQgPSB0cnVlO1xuICAgIGRlYnVnKCdsZW5ndGggbGVzcyB0aGFuIHdhdGVybWFyaycsIGRvUmVhZCk7XG4gIH1cblxuICAvLyBob3dldmVyLCBpZiB3ZSd2ZSBlbmRlZCwgdGhlbiB0aGVyZSdzIG5vIHBvaW50LCBhbmQgaWYgd2UncmUgYWxyZWFkeVxuICAvLyByZWFkaW5nLCB0aGVuIGl0J3MgdW5uZWNlc3NhcnkuXG4gIGlmIChzdGF0ZS5lbmRlZCB8fCBzdGF0ZS5yZWFkaW5nKSB7XG4gICAgZG9SZWFkID0gZmFsc2U7XG4gICAgZGVidWcoJ3JlYWRpbmcgb3IgZW5kZWQnLCBkb1JlYWQpO1xuICB9IGVsc2UgaWYgKGRvUmVhZCkge1xuICAgIGRlYnVnKCdkbyByZWFkJyk7XG4gICAgc3RhdGUucmVhZGluZyA9IHRydWU7XG4gICAgc3RhdGUuc3luYyA9IHRydWU7XG4gICAgLy8gaWYgdGhlIGxlbmd0aCBpcyBjdXJyZW50bHkgemVybywgdGhlbiB3ZSAqbmVlZCogYSByZWFkYWJsZSBldmVudC5cbiAgICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSBzdGF0ZS5uZWVkUmVhZGFibGUgPSB0cnVlO1xuICAgIC8vIGNhbGwgaW50ZXJuYWwgcmVhZCBtZXRob2RcbiAgICB0aGlzLl9yZWFkKHN0YXRlLmhpZ2hXYXRlck1hcmspO1xuICAgIHN0YXRlLnN5bmMgPSBmYWxzZTtcbiAgICAvLyBJZiBfcmVhZCBwdXNoZWQgZGF0YSBzeW5jaHJvbm91c2x5LCB0aGVuIGByZWFkaW5nYCB3aWxsIGJlIGZhbHNlLFxuICAgIC8vIGFuZCB3ZSBuZWVkIHRvIHJlLWV2YWx1YXRlIGhvdyBtdWNoIGRhdGEgd2UgY2FuIHJldHVybiB0byB0aGUgdXNlci5cbiAgICBpZiAoIXN0YXRlLnJlYWRpbmcpIG4gPSBob3dNdWNoVG9SZWFkKG5PcmlnLCBzdGF0ZSk7XG4gIH1cblxuICB2YXIgcmV0O1xuICBpZiAobiA+IDApIHJldCA9IGZyb21MaXN0KG4sIHN0YXRlKTtlbHNlIHJldCA9IG51bGw7XG5cbiAgaWYgKHJldCA9PT0gbnVsbCkge1xuICAgIHN0YXRlLm5lZWRSZWFkYWJsZSA9IHRydWU7XG4gICAgbiA9IDA7XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUubGVuZ3RoIC09IG47XG4gIH1cblxuICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBub3RoaW5nIGluIHRoZSBidWZmZXIsIHRoZW4gd2Ugd2FudCB0byBrbm93XG4gICAgLy8gYXMgc29vbiBhcyB3ZSAqZG8qIGdldCBzb21ldGhpbmcgaW50byB0aGUgYnVmZmVyLlxuICAgIGlmICghc3RhdGUuZW5kZWQpIHN0YXRlLm5lZWRSZWFkYWJsZSA9IHRydWU7XG5cbiAgICAvLyBJZiB3ZSB0cmllZCB0byByZWFkKCkgcGFzdCB0aGUgRU9GLCB0aGVuIGVtaXQgZW5kIG9uIHRoZSBuZXh0IHRpY2suXG4gICAgaWYgKG5PcmlnICE9PSBuICYmIHN0YXRlLmVuZGVkKSBlbmRSZWFkYWJsZSh0aGlzKTtcbiAgfVxuXG4gIGlmIChyZXQgIT09IG51bGwpIHRoaXMuZW1pdCgnZGF0YScsIHJldCk7XG5cbiAgcmV0dXJuIHJldDtcbn07XG5cbmZ1bmN0aW9uIGNodW5rSW52YWxpZChzdGF0ZSwgY2h1bmspIHtcbiAgdmFyIGVyID0gbnVsbDtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoY2h1bmspICYmIHR5cGVvZiBjaHVuayAhPT0gJ3N0cmluZycgJiYgY2h1bmsgIT09IG51bGwgJiYgY2h1bmsgIT09IHVuZGVmaW5lZCAmJiAhc3RhdGUub2JqZWN0TW9kZSkge1xuICAgIGVyID0gbmV3IFR5cGVFcnJvcignSW52YWxpZCBub24tc3RyaW5nL2J1ZmZlciBjaHVuaycpO1xuICB9XG4gIHJldHVybiBlcjtcbn1cblxuZnVuY3Rpb24gb25Fb2ZDaHVuayhzdHJlYW0sIHN0YXRlKSB7XG4gIGlmIChzdGF0ZS5lbmRlZCkgcmV0dXJuO1xuICBpZiAoc3RhdGUuZGVjb2Rlcikge1xuICAgIHZhciBjaHVuayA9IHN0YXRlLmRlY29kZXIuZW5kKCk7XG4gICAgaWYgKGNodW5rICYmIGNodW5rLmxlbmd0aCkge1xuICAgICAgc3RhdGUuYnVmZmVyLnB1c2goY2h1bmspO1xuICAgICAgc3RhdGUubGVuZ3RoICs9IHN0YXRlLm9iamVjdE1vZGUgPyAxIDogY2h1bmsubGVuZ3RoO1xuICAgIH1cbiAgfVxuICBzdGF0ZS5lbmRlZCA9IHRydWU7XG5cbiAgLy8gZW1pdCAncmVhZGFibGUnIG5vdyB0byBtYWtlIHN1cmUgaXQgZ2V0cyBwaWNrZWQgdXAuXG4gIGVtaXRSZWFkYWJsZShzdHJlYW0pO1xufVxuXG4vLyBEb24ndCBlbWl0IHJlYWRhYmxlIHJpZ2h0IGF3YXkgaW4gc3luYyBtb2RlLCBiZWNhdXNlIHRoaXMgY2FuIHRyaWdnZXJcbi8vIGFub3RoZXIgcmVhZCgpIGNhbGwgPT4gc3RhY2sgb3ZlcmZsb3cuICBUaGlzIHdheSwgaXQgbWlnaHQgdHJpZ2dlclxuLy8gYSBuZXh0VGljayByZWN1cnNpb24gd2FybmluZywgYnV0IHRoYXQncyBub3Qgc28gYmFkLlxuZnVuY3Rpb24gZW1pdFJlYWRhYmxlKHN0cmVhbSkge1xuICB2YXIgc3RhdGUgPSBzdHJlYW0uX3JlYWRhYmxlU3RhdGU7XG4gIHN0YXRlLm5lZWRSZWFkYWJsZSA9IGZhbHNlO1xuICBpZiAoIXN0YXRlLmVtaXR0ZWRSZWFkYWJsZSkge1xuICAgIGRlYnVnKCdlbWl0UmVhZGFibGUnLCBzdGF0ZS5mbG93aW5nKTtcbiAgICBzdGF0ZS5lbWl0dGVkUmVhZGFibGUgPSB0cnVlO1xuICAgIGlmIChzdGF0ZS5zeW5jKSBwcm9jZXNzTmV4dFRpY2soZW1pdFJlYWRhYmxlXywgc3RyZWFtKTtlbHNlIGVtaXRSZWFkYWJsZV8oc3RyZWFtKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbWl0UmVhZGFibGVfKHN0cmVhbSkge1xuICBkZWJ1ZygnZW1pdCByZWFkYWJsZScpO1xuICBzdHJlYW0uZW1pdCgncmVhZGFibGUnKTtcbiAgZmxvdyhzdHJlYW0pO1xufVxuXG4vLyBhdCB0aGlzIHBvaW50LCB0aGUgdXNlciBoYXMgcHJlc3VtYWJseSBzZWVuIHRoZSAncmVhZGFibGUnIGV2ZW50LFxuLy8gYW5kIGNhbGxlZCByZWFkKCkgdG8gY29uc3VtZSBzb21lIGRhdGEuICB0aGF0IG1heSBoYXZlIHRyaWdnZXJlZFxuLy8gaW4gdHVybiBhbm90aGVyIF9yZWFkKG4pIGNhbGwsIGluIHdoaWNoIGNhc2UgcmVhZGluZyA9IHRydWUgaWZcbi8vIGl0J3MgaW4gcHJvZ3Jlc3MuXG4vLyBIb3dldmVyLCBpZiB3ZSdyZSBub3QgZW5kZWQsIG9yIHJlYWRpbmcsIGFuZCB0aGUgbGVuZ3RoIDwgaHdtLFxuLy8gdGhlbiBnbyBhaGVhZCBhbmQgdHJ5IHRvIHJlYWQgc29tZSBtb3JlIHByZWVtcHRpdmVseS5cbmZ1bmN0aW9uIG1heWJlUmVhZE1vcmUoc3RyZWFtLCBzdGF0ZSkge1xuICBpZiAoIXN0YXRlLnJlYWRpbmdNb3JlKSB7XG4gICAgc3RhdGUucmVhZGluZ01vcmUgPSB0cnVlO1xuICAgIHByb2Nlc3NOZXh0VGljayhtYXliZVJlYWRNb3JlXywgc3RyZWFtLCBzdGF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF5YmVSZWFkTW9yZV8oc3RyZWFtLCBzdGF0ZSkge1xuICB2YXIgbGVuID0gc3RhdGUubGVuZ3RoO1xuICB3aGlsZSAoIXN0YXRlLnJlYWRpbmcgJiYgIXN0YXRlLmZsb3dpbmcgJiYgIXN0YXRlLmVuZGVkICYmIHN0YXRlLmxlbmd0aCA8IHN0YXRlLmhpZ2hXYXRlck1hcmspIHtcbiAgICBkZWJ1ZygnbWF5YmVSZWFkTW9yZSByZWFkIDAnKTtcbiAgICBzdHJlYW0ucmVhZCgwKTtcbiAgICBpZiAobGVuID09PSBzdGF0ZS5sZW5ndGgpXG4gICAgICAvLyBkaWRuJ3QgZ2V0IGFueSBkYXRhLCBzdG9wIHNwaW5uaW5nLlxuICAgICAgYnJlYWs7ZWxzZSBsZW4gPSBzdGF0ZS5sZW5ndGg7XG4gIH1cbiAgc3RhdGUucmVhZGluZ01vcmUgPSBmYWxzZTtcbn1cblxuLy8gYWJzdHJhY3QgbWV0aG9kLiAgdG8gYmUgb3ZlcnJpZGRlbiBpbiBzcGVjaWZpYyBpbXBsZW1lbnRhdGlvbiBjbGFzc2VzLlxuLy8gY2FsbCBjYihlciwgZGF0YSkgd2hlcmUgZGF0YSBpcyA8PSBuIGluIGxlbmd0aC5cbi8vIGZvciB2aXJ0dWFsIChub24tc3RyaW5nLCBub24tYnVmZmVyKSBzdHJlYW1zLCBcImxlbmd0aFwiIGlzIHNvbWV3aGF0XG4vLyBhcmJpdHJhcnksIGFuZCBwZXJoYXBzIG5vdCB2ZXJ5IG1lYW5pbmdmdWwuXG5SZWFkYWJsZS5wcm90b3R5cGUuX3JlYWQgPSBmdW5jdGlvbiAobikge1xuICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKCdfcmVhZCgpIGlzIG5vdCBpbXBsZW1lbnRlZCcpKTtcbn07XG5cblJlYWRhYmxlLnByb3RvdHlwZS5waXBlID0gZnVuY3Rpb24gKGRlc3QsIHBpcGVPcHRzKSB7XG4gIHZhciBzcmMgPSB0aGlzO1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuXG4gIHN3aXRjaCAoc3RhdGUucGlwZXNDb3VudCkge1xuICAgIGNhc2UgMDpcbiAgICAgIHN0YXRlLnBpcGVzID0gZGVzdDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIHN0YXRlLnBpcGVzID0gW3N0YXRlLnBpcGVzLCBkZXN0XTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBzdGF0ZS5waXBlcy5wdXNoKGRlc3QpO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgc3RhdGUucGlwZXNDb3VudCArPSAxO1xuICBkZWJ1ZygncGlwZSBjb3VudD0lZCBvcHRzPSVqJywgc3RhdGUucGlwZXNDb3VudCwgcGlwZU9wdHMpO1xuXG4gIHZhciBkb0VuZCA9ICghcGlwZU9wdHMgfHwgcGlwZU9wdHMuZW5kICE9PSBmYWxzZSkgJiYgZGVzdCAhPT0gcHJvY2Vzcy5zdGRvdXQgJiYgZGVzdCAhPT0gcHJvY2Vzcy5zdGRlcnI7XG5cbiAgdmFyIGVuZEZuID0gZG9FbmQgPyBvbmVuZCA6IGNsZWFudXA7XG4gIGlmIChzdGF0ZS5lbmRFbWl0dGVkKSBwcm9jZXNzTmV4dFRpY2soZW5kRm4pO2Vsc2Ugc3JjLm9uY2UoJ2VuZCcsIGVuZEZuKTtcblxuICBkZXN0Lm9uKCd1bnBpcGUnLCBvbnVucGlwZSk7XG4gIGZ1bmN0aW9uIG9udW5waXBlKHJlYWRhYmxlKSB7XG4gICAgZGVidWcoJ29udW5waXBlJyk7XG4gICAgaWYgKHJlYWRhYmxlID09PSBzcmMpIHtcbiAgICAgIGNsZWFudXAoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbmVuZCgpIHtcbiAgICBkZWJ1Zygnb25lbmQnKTtcbiAgICBkZXN0LmVuZCgpO1xuICB9XG5cbiAgLy8gd2hlbiB0aGUgZGVzdCBkcmFpbnMsIGl0IHJlZHVjZXMgdGhlIGF3YWl0RHJhaW4gY291bnRlclxuICAvLyBvbiB0aGUgc291cmNlLiAgVGhpcyB3b3VsZCBiZSBtb3JlIGVsZWdhbnQgd2l0aCBhIC5vbmNlKClcbiAgLy8gaGFuZGxlciBpbiBmbG93KCksIGJ1dCBhZGRpbmcgYW5kIHJlbW92aW5nIHJlcGVhdGVkbHkgaXNcbiAgLy8gdG9vIHNsb3cuXG4gIHZhciBvbmRyYWluID0gcGlwZU9uRHJhaW4oc3JjKTtcbiAgZGVzdC5vbignZHJhaW4nLCBvbmRyYWluKTtcblxuICB2YXIgY2xlYW5lZFVwID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgZGVidWcoJ2NsZWFudXAnKTtcbiAgICAvLyBjbGVhbnVwIGV2ZW50IGhhbmRsZXJzIG9uY2UgdGhlIHBpcGUgaXMgYnJva2VuXG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmNsb3NlKTtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignZHJhaW4nLCBvbmRyYWluKTtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ3VucGlwZScsIG9udW5waXBlKTtcbiAgICBzcmMucmVtb3ZlTGlzdGVuZXIoJ2VuZCcsIG9uZW5kKTtcbiAgICBzcmMucmVtb3ZlTGlzdGVuZXIoJ2VuZCcsIGNsZWFudXApO1xuICAgIHNyYy5yZW1vdmVMaXN0ZW5lcignZGF0YScsIG9uZGF0YSk7XG5cbiAgICBjbGVhbmVkVXAgPSB0cnVlO1xuXG4gICAgLy8gaWYgdGhlIHJlYWRlciBpcyB3YWl0aW5nIGZvciBhIGRyYWluIGV2ZW50IGZyb20gdGhpc1xuICAgIC8vIHNwZWNpZmljIHdyaXRlciwgdGhlbiBpdCB3b3VsZCBjYXVzZSBpdCB0byBuZXZlciBzdGFydFxuICAgIC8vIGZsb3dpbmcgYWdhaW4uXG4gICAgLy8gU28sIGlmIHRoaXMgaXMgYXdhaXRpbmcgYSBkcmFpbiwgdGhlbiB3ZSBqdXN0IGNhbGwgaXQgbm93LlxuICAgIC8vIElmIHdlIGRvbid0IGtub3csIHRoZW4gYXNzdW1lIHRoYXQgd2UgYXJlIHdhaXRpbmcgZm9yIG9uZS5cbiAgICBpZiAoc3RhdGUuYXdhaXREcmFpbiAmJiAoIWRlc3QuX3dyaXRhYmxlU3RhdGUgfHwgZGVzdC5fd3JpdGFibGVTdGF0ZS5uZWVkRHJhaW4pKSBvbmRyYWluKCk7XG4gIH1cblxuICAvLyBJZiB0aGUgdXNlciBwdXNoZXMgbW9yZSBkYXRhIHdoaWxlIHdlJ3JlIHdyaXRpbmcgdG8gZGVzdCB0aGVuIHdlJ2xsIGVuZCB1cFxuICAvLyBpbiBvbmRhdGEgYWdhaW4uIEhvd2V2ZXIsIHdlIG9ubHkgd2FudCB0byBpbmNyZWFzZSBhd2FpdERyYWluIG9uY2UgYmVjYXVzZVxuICAvLyBkZXN0IHdpbGwgb25seSBlbWl0IG9uZSAnZHJhaW4nIGV2ZW50IGZvciB0aGUgbXVsdGlwbGUgd3JpdGVzLlxuICAvLyA9PiBJbnRyb2R1Y2UgYSBndWFyZCBvbiBpbmNyZWFzaW5nIGF3YWl0RHJhaW4uXG4gIHZhciBpbmNyZWFzZWRBd2FpdERyYWluID0gZmFsc2U7XG4gIHNyYy5vbignZGF0YScsIG9uZGF0YSk7XG4gIGZ1bmN0aW9uIG9uZGF0YShjaHVuaykge1xuICAgIGRlYnVnKCdvbmRhdGEnKTtcbiAgICBpbmNyZWFzZWRBd2FpdERyYWluID0gZmFsc2U7XG4gICAgdmFyIHJldCA9IGRlc3Qud3JpdGUoY2h1bmspO1xuICAgIGlmIChmYWxzZSA9PT0gcmV0ICYmICFpbmNyZWFzZWRBd2FpdERyYWluKSB7XG4gICAgICAvLyBJZiB0aGUgdXNlciB1bnBpcGVkIGR1cmluZyBgZGVzdC53cml0ZSgpYCwgaXQgaXMgcG9zc2libGVcbiAgICAgIC8vIHRvIGdldCBzdHVjayBpbiBhIHBlcm1hbmVudGx5IHBhdXNlZCBzdGF0ZSBpZiB0aGF0IHdyaXRlXG4gICAgICAvLyBhbHNvIHJldHVybmVkIGZhbHNlLlxuICAgICAgLy8gPT4gQ2hlY2sgd2hldGhlciBgZGVzdGAgaXMgc3RpbGwgYSBwaXBpbmcgZGVzdGluYXRpb24uXG4gICAgICBpZiAoKHN0YXRlLnBpcGVzQ291bnQgPT09IDEgJiYgc3RhdGUucGlwZXMgPT09IGRlc3QgfHwgc3RhdGUucGlwZXNDb3VudCA+IDEgJiYgaW5kZXhPZihzdGF0ZS5waXBlcywgZGVzdCkgIT09IC0xKSAmJiAhY2xlYW5lZFVwKSB7XG4gICAgICAgIGRlYnVnKCdmYWxzZSB3cml0ZSByZXNwb25zZSwgcGF1c2UnLCBzcmMuX3JlYWRhYmxlU3RhdGUuYXdhaXREcmFpbik7XG4gICAgICAgIHNyYy5fcmVhZGFibGVTdGF0ZS5hd2FpdERyYWluKys7XG4gICAgICAgIGluY3JlYXNlZEF3YWl0RHJhaW4gPSB0cnVlO1xuICAgICAgfVxuICAgICAgc3JjLnBhdXNlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIGRlc3QgaGFzIGFuIGVycm9yLCB0aGVuIHN0b3AgcGlwaW5nIGludG8gaXQuXG4gIC8vIGhvd2V2ZXIsIGRvbid0IHN1cHByZXNzIHRoZSB0aHJvd2luZyBiZWhhdmlvciBmb3IgdGhpcy5cbiAgZnVuY3Rpb24gb25lcnJvcihlcikge1xuICAgIGRlYnVnKCdvbmVycm9yJywgZXIpO1xuICAgIHVucGlwZSgpO1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcik7XG4gICAgaWYgKEVFbGlzdGVuZXJDb3VudChkZXN0LCAnZXJyb3InKSA9PT0gMCkgZGVzdC5lbWl0KCdlcnJvcicsIGVyKTtcbiAgfVxuXG4gIC8vIE1ha2Ugc3VyZSBvdXIgZXJyb3IgaGFuZGxlciBpcyBhdHRhY2hlZCBiZWZvcmUgdXNlcmxhbmQgb25lcy5cbiAgcHJlcGVuZExpc3RlbmVyKGRlc3QsICdlcnJvcicsIG9uZXJyb3IpO1xuXG4gIC8vIEJvdGggY2xvc2UgYW5kIGZpbmlzaCBzaG91bGQgdHJpZ2dlciB1bnBpcGUsIGJ1dCBvbmx5IG9uY2UuXG4gIGZ1bmN0aW9uIG9uY2xvc2UoKSB7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignZmluaXNoJywgb25maW5pc2gpO1xuICAgIHVucGlwZSgpO1xuICB9XG4gIGRlc3Qub25jZSgnY2xvc2UnLCBvbmNsb3NlKTtcbiAgZnVuY3Rpb24gb25maW5pc2goKSB7XG4gICAgZGVidWcoJ29uZmluaXNoJyk7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmNsb3NlKTtcbiAgICB1bnBpcGUoKTtcbiAgfVxuICBkZXN0Lm9uY2UoJ2ZpbmlzaCcsIG9uZmluaXNoKTtcblxuICBmdW5jdGlvbiB1bnBpcGUoKSB7XG4gICAgZGVidWcoJ3VucGlwZScpO1xuICAgIHNyYy51bnBpcGUoZGVzdCk7XG4gIH1cblxuICAvLyB0ZWxsIHRoZSBkZXN0IHRoYXQgaXQncyBiZWluZyBwaXBlZCB0b1xuICBkZXN0LmVtaXQoJ3BpcGUnLCBzcmMpO1xuXG4gIC8vIHN0YXJ0IHRoZSBmbG93IGlmIGl0IGhhc24ndCBiZWVuIHN0YXJ0ZWQgYWxyZWFkeS5cbiAgaWYgKCFzdGF0ZS5mbG93aW5nKSB7XG4gICAgZGVidWcoJ3BpcGUgcmVzdW1lJyk7XG4gICAgc3JjLnJlc3VtZSgpO1xuICB9XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5mdW5jdGlvbiBwaXBlT25EcmFpbihzcmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdGUgPSBzcmMuX3JlYWRhYmxlU3RhdGU7XG4gICAgZGVidWcoJ3BpcGVPbkRyYWluJywgc3RhdGUuYXdhaXREcmFpbik7XG4gICAgaWYgKHN0YXRlLmF3YWl0RHJhaW4pIHN0YXRlLmF3YWl0RHJhaW4tLTtcbiAgICBpZiAoc3RhdGUuYXdhaXREcmFpbiA9PT0gMCAmJiBFRWxpc3RlbmVyQ291bnQoc3JjLCAnZGF0YScpKSB7XG4gICAgICBzdGF0ZS5mbG93aW5nID0gdHJ1ZTtcbiAgICAgIGZsb3coc3JjKTtcbiAgICB9XG4gIH07XG59XG5cblJlYWRhYmxlLnByb3RvdHlwZS51bnBpcGUgPSBmdW5jdGlvbiAoZGVzdCkge1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuXG4gIC8vIGlmIHdlJ3JlIG5vdCBwaXBpbmcgYW55d2hlcmUsIHRoZW4gZG8gbm90aGluZy5cbiAgaWYgKHN0YXRlLnBpcGVzQ291bnQgPT09IDApIHJldHVybiB0aGlzO1xuXG4gIC8vIGp1c3Qgb25lIGRlc3RpbmF0aW9uLiAgbW9zdCBjb21tb24gY2FzZS5cbiAgaWYgKHN0YXRlLnBpcGVzQ291bnQgPT09IDEpIHtcbiAgICAvLyBwYXNzZWQgaW4gb25lLCBidXQgaXQncyBub3QgdGhlIHJpZ2h0IG9uZS5cbiAgICBpZiAoZGVzdCAmJiBkZXN0ICE9PSBzdGF0ZS5waXBlcykgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAoIWRlc3QpIGRlc3QgPSBzdGF0ZS5waXBlcztcblxuICAgIC8vIGdvdCBhIG1hdGNoLlxuICAgIHN0YXRlLnBpcGVzID0gbnVsbDtcbiAgICBzdGF0ZS5waXBlc0NvdW50ID0gMDtcbiAgICBzdGF0ZS5mbG93aW5nID0gZmFsc2U7XG4gICAgaWYgKGRlc3QpIGRlc3QuZW1pdCgndW5waXBlJywgdGhpcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBzbG93IGNhc2UuIG11bHRpcGxlIHBpcGUgZGVzdGluYXRpb25zLlxuXG4gIGlmICghZGVzdCkge1xuICAgIC8vIHJlbW92ZSBhbGwuXG4gICAgdmFyIGRlc3RzID0gc3RhdGUucGlwZXM7XG4gICAgdmFyIGxlbiA9IHN0YXRlLnBpcGVzQ291bnQ7XG4gICAgc3RhdGUucGlwZXMgPSBudWxsO1xuICAgIHN0YXRlLnBpcGVzQ291bnQgPSAwO1xuICAgIHN0YXRlLmZsb3dpbmcgPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGRlc3RzW2ldLmVtaXQoJ3VucGlwZScsIHRoaXMpO1xuICAgIH1yZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHRyeSB0byBmaW5kIHRoZSByaWdodCBvbmUuXG4gIHZhciBpbmRleCA9IGluZGV4T2Yoc3RhdGUucGlwZXMsIGRlc3QpO1xuICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm4gdGhpcztcblxuICBzdGF0ZS5waXBlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICBzdGF0ZS5waXBlc0NvdW50IC09IDE7XG4gIGlmIChzdGF0ZS5waXBlc0NvdW50ID09PSAxKSBzdGF0ZS5waXBlcyA9IHN0YXRlLnBpcGVzWzBdO1xuXG4gIGRlc3QuZW1pdCgndW5waXBlJywgdGhpcyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBzZXQgdXAgZGF0YSBldmVudHMgaWYgdGhleSBhcmUgYXNrZWQgZm9yXG4vLyBFbnN1cmUgcmVhZGFibGUgbGlzdGVuZXJzIGV2ZW50dWFsbHkgZ2V0IHNvbWV0aGluZ1xuUmVhZGFibGUucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGV2LCBmbikge1xuICB2YXIgcmVzID0gU3RyZWFtLnByb3RvdHlwZS5vbi5jYWxsKHRoaXMsIGV2LCBmbik7XG5cbiAgaWYgKGV2ID09PSAnZGF0YScpIHtcbiAgICAvLyBTdGFydCBmbG93aW5nIG9uIG5leHQgdGljayBpZiBzdHJlYW0gaXNuJ3QgZXhwbGljaXRseSBwYXVzZWRcbiAgICBpZiAodGhpcy5fcmVhZGFibGVTdGF0ZS5mbG93aW5nICE9PSBmYWxzZSkgdGhpcy5yZXN1bWUoKTtcbiAgfSBlbHNlIGlmIChldiA9PT0gJ3JlYWRhYmxlJykge1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuX3JlYWRhYmxlU3RhdGU7XG4gICAgaWYgKCFzdGF0ZS5lbmRFbWl0dGVkICYmICFzdGF0ZS5yZWFkYWJsZUxpc3RlbmluZykge1xuICAgICAgc3RhdGUucmVhZGFibGVMaXN0ZW5pbmcgPSBzdGF0ZS5uZWVkUmVhZGFibGUgPSB0cnVlO1xuICAgICAgc3RhdGUuZW1pdHRlZFJlYWRhYmxlID0gZmFsc2U7XG4gICAgICBpZiAoIXN0YXRlLnJlYWRpbmcpIHtcbiAgICAgICAgcHJvY2Vzc05leHRUaWNrKG5SZWFkaW5nTmV4dFRpY2ssIHRoaXMpO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5sZW5ndGgpIHtcbiAgICAgICAgZW1pdFJlYWRhYmxlKHRoaXMsIHN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblJlYWRhYmxlLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IFJlYWRhYmxlLnByb3RvdHlwZS5vbjtcblxuZnVuY3Rpb24gblJlYWRpbmdOZXh0VGljayhzZWxmKSB7XG4gIGRlYnVnKCdyZWFkYWJsZSBuZXh0dGljayByZWFkIDAnKTtcbiAgc2VsZi5yZWFkKDApO1xufVxuXG4vLyBwYXVzZSgpIGFuZCByZXN1bWUoKSBhcmUgcmVtbmFudHMgb2YgdGhlIGxlZ2FjeSByZWFkYWJsZSBzdHJlYW0gQVBJXG4vLyBJZiB0aGUgdXNlciB1c2VzIHRoZW0sIHRoZW4gc3dpdGNoIGludG8gb2xkIG1vZGUuXG5SZWFkYWJsZS5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICBpZiAoIXN0YXRlLmZsb3dpbmcpIHtcbiAgICBkZWJ1ZygncmVzdW1lJyk7XG4gICAgc3RhdGUuZmxvd2luZyA9IHRydWU7XG4gICAgcmVzdW1lKHRoaXMsIHN0YXRlKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIHJlc3VtZShzdHJlYW0sIHN0YXRlKSB7XG4gIGlmICghc3RhdGUucmVzdW1lU2NoZWR1bGVkKSB7XG4gICAgc3RhdGUucmVzdW1lU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICBwcm9jZXNzTmV4dFRpY2socmVzdW1lXywgc3RyZWFtLCBzdGF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzdW1lXyhzdHJlYW0sIHN0YXRlKSB7XG4gIGlmICghc3RhdGUucmVhZGluZykge1xuICAgIGRlYnVnKCdyZXN1bWUgcmVhZCAwJyk7XG4gICAgc3RyZWFtLnJlYWQoMCk7XG4gIH1cblxuICBzdGF0ZS5yZXN1bWVTY2hlZHVsZWQgPSBmYWxzZTtcbiAgc3RhdGUuYXdhaXREcmFpbiA9IDA7XG4gIHN0cmVhbS5lbWl0KCdyZXN1bWUnKTtcbiAgZmxvdyhzdHJlYW0pO1xuICBpZiAoc3RhdGUuZmxvd2luZyAmJiAhc3RhdGUucmVhZGluZykgc3RyZWFtLnJlYWQoMCk7XG59XG5cblJlYWRhYmxlLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ2NhbGwgcGF1c2UgZmxvd2luZz0laicsIHRoaXMuX3JlYWRhYmxlU3RhdGUuZmxvd2luZyk7XG4gIGlmIChmYWxzZSAhPT0gdGhpcy5fcmVhZGFibGVTdGF0ZS5mbG93aW5nKSB7XG4gICAgZGVidWcoJ3BhdXNlJyk7XG4gICAgdGhpcy5fcmVhZGFibGVTdGF0ZS5mbG93aW5nID0gZmFsc2U7XG4gICAgdGhpcy5lbWl0KCdwYXVzZScpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gZmxvdyhzdHJlYW0pIHtcbiAgdmFyIHN0YXRlID0gc3RyZWFtLl9yZWFkYWJsZVN0YXRlO1xuICBkZWJ1ZygnZmxvdycsIHN0YXRlLmZsb3dpbmcpO1xuICB3aGlsZSAoc3RhdGUuZmxvd2luZyAmJiBzdHJlYW0ucmVhZCgpICE9PSBudWxsKSB7fVxufVxuXG4vLyB3cmFwIGFuIG9sZC1zdHlsZSBzdHJlYW0gYXMgdGhlIGFzeW5jIGRhdGEgc291cmNlLlxuLy8gVGhpcyBpcyAqbm90KiBwYXJ0IG9mIHRoZSByZWFkYWJsZSBzdHJlYW0gaW50ZXJmYWNlLlxuLy8gSXQgaXMgYW4gdWdseSB1bmZvcnR1bmF0ZSBtZXNzIG9mIGhpc3RvcnkuXG5SZWFkYWJsZS5wcm90b3R5cGUud3JhcCA9IGZ1bmN0aW9uIChzdHJlYW0pIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgdmFyIHBhdXNlZCA9IGZhbHNlO1xuXG4gIHZhciBzZWxmID0gdGhpcztcbiAgc3RyZWFtLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgZGVidWcoJ3dyYXBwZWQgZW5kJyk7XG4gICAgaWYgKHN0YXRlLmRlY29kZXIgJiYgIXN0YXRlLmVuZGVkKSB7XG4gICAgICB2YXIgY2h1bmsgPSBzdGF0ZS5kZWNvZGVyLmVuZCgpO1xuICAgICAgaWYgKGNodW5rICYmIGNodW5rLmxlbmd0aCkgc2VsZi5wdXNoKGNodW5rKTtcbiAgICB9XG5cbiAgICBzZWxmLnB1c2gobnVsbCk7XG4gIH0pO1xuXG4gIHN0cmVhbS5vbignZGF0YScsIGZ1bmN0aW9uIChjaHVuaykge1xuICAgIGRlYnVnKCd3cmFwcGVkIGRhdGEnKTtcbiAgICBpZiAoc3RhdGUuZGVjb2RlcikgY2h1bmsgPSBzdGF0ZS5kZWNvZGVyLndyaXRlKGNodW5rKTtcblxuICAgIC8vIGRvbid0IHNraXAgb3ZlciBmYWxzeSB2YWx1ZXMgaW4gb2JqZWN0TW9kZVxuICAgIGlmIChzdGF0ZS5vYmplY3RNb2RlICYmIChjaHVuayA9PT0gbnVsbCB8fCBjaHVuayA9PT0gdW5kZWZpbmVkKSkgcmV0dXJuO2Vsc2UgaWYgKCFzdGF0ZS5vYmplY3RNb2RlICYmICghY2h1bmsgfHwgIWNodW5rLmxlbmd0aCkpIHJldHVybjtcblxuICAgIHZhciByZXQgPSBzZWxmLnB1c2goY2h1bmspO1xuICAgIGlmICghcmV0KSB7XG4gICAgICBwYXVzZWQgPSB0cnVlO1xuICAgICAgc3RyZWFtLnBhdXNlKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBwcm94eSBhbGwgdGhlIG90aGVyIG1ldGhvZHMuXG4gIC8vIGltcG9ydGFudCB3aGVuIHdyYXBwaW5nIGZpbHRlcnMgYW5kIGR1cGxleGVzLlxuICBmb3IgKHZhciBpIGluIHN0cmVhbSkge1xuICAgIGlmICh0aGlzW2ldID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIHN0cmVhbVtpXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpc1tpXSA9IGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gc3RyZWFtW21ldGhvZF0uYXBwbHkoc3RyZWFtLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfShpKTtcbiAgICB9XG4gIH1cblxuICAvLyBwcm94eSBjZXJ0YWluIGltcG9ydGFudCBldmVudHMuXG4gIHZhciBldmVudHMgPSBbJ2Vycm9yJywgJ2Nsb3NlJywgJ2Rlc3Ryb3knLCAncGF1c2UnLCAncmVzdW1lJ107XG4gIGZvckVhY2goZXZlbnRzLCBmdW5jdGlvbiAoZXYpIHtcbiAgICBzdHJlYW0ub24oZXYsIHNlbGYuZW1pdC5iaW5kKHNlbGYsIGV2KSk7XG4gIH0pO1xuXG4gIC8vIHdoZW4gd2UgdHJ5IHRvIGNvbnN1bWUgc29tZSBtb3JlIGJ5dGVzLCBzaW1wbHkgdW5wYXVzZSB0aGVcbiAgLy8gdW5kZXJseWluZyBzdHJlYW0uXG4gIHNlbGYuX3JlYWQgPSBmdW5jdGlvbiAobikge1xuICAgIGRlYnVnKCd3cmFwcGVkIF9yZWFkJywgbik7XG4gICAgaWYgKHBhdXNlZCkge1xuICAgICAgcGF1c2VkID0gZmFsc2U7XG4gICAgICBzdHJlYW0ucmVzdW1lKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBzZWxmO1xufTtcblxuLy8gZXhwb3NlZCBmb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5LlxuUmVhZGFibGUuX2Zyb21MaXN0ID0gZnJvbUxpc3Q7XG5cbi8vIFBsdWNrIG9mZiBuIGJ5dGVzIGZyb20gYW4gYXJyYXkgb2YgYnVmZmVycy5cbi8vIExlbmd0aCBpcyB0aGUgY29tYmluZWQgbGVuZ3RocyBvZiBhbGwgdGhlIGJ1ZmZlcnMgaW4gdGhlIGxpc3QuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGZyb21MaXN0KG4sIHN0YXRlKSB7XG4gIC8vIG5vdGhpbmcgYnVmZmVyZWRcbiAgaWYgKHN0YXRlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgdmFyIHJldDtcbiAgaWYgKHN0YXRlLm9iamVjdE1vZGUpIHJldCA9IHN0YXRlLmJ1ZmZlci5zaGlmdCgpO2Vsc2UgaWYgKCFuIHx8IG4gPj0gc3RhdGUubGVuZ3RoKSB7XG4gICAgLy8gcmVhZCBpdCBhbGwsIHRydW5jYXRlIHRoZSBsaXN0XG4gICAgaWYgKHN0YXRlLmRlY29kZXIpIHJldCA9IHN0YXRlLmJ1ZmZlci5qb2luKCcnKTtlbHNlIGlmIChzdGF0ZS5idWZmZXIubGVuZ3RoID09PSAxKSByZXQgPSBzdGF0ZS5idWZmZXIuaGVhZC5kYXRhO2Vsc2UgcmV0ID0gc3RhdGUuYnVmZmVyLmNvbmNhdChzdGF0ZS5sZW5ndGgpO1xuICAgIHN0YXRlLmJ1ZmZlci5jbGVhcigpO1xuICB9IGVsc2Uge1xuICAgIC8vIHJlYWQgcGFydCBvZiBsaXN0XG4gICAgcmV0ID0gZnJvbUxpc3RQYXJ0aWFsKG4sIHN0YXRlLmJ1ZmZlciwgc3RhdGUuZGVjb2Rlcik7XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG4vLyBFeHRyYWN0cyBvbmx5IGVub3VnaCBidWZmZXJlZCBkYXRhIHRvIHNhdGlzZnkgdGhlIGFtb3VudCByZXF1ZXN0ZWQuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGZyb21MaXN0UGFydGlhbChuLCBsaXN0LCBoYXNTdHJpbmdzKSB7XG4gIHZhciByZXQ7XG4gIGlmIChuIDwgbGlzdC5oZWFkLmRhdGEubGVuZ3RoKSB7XG4gICAgLy8gc2xpY2UgaXMgdGhlIHNhbWUgZm9yIGJ1ZmZlcnMgYW5kIHN0cmluZ3NcbiAgICByZXQgPSBsaXN0LmhlYWQuZGF0YS5zbGljZSgwLCBuKTtcbiAgICBsaXN0LmhlYWQuZGF0YSA9IGxpc3QuaGVhZC5kYXRhLnNsaWNlKG4pO1xuICB9IGVsc2UgaWYgKG4gPT09IGxpc3QuaGVhZC5kYXRhLmxlbmd0aCkge1xuICAgIC8vIGZpcnN0IGNodW5rIGlzIGEgcGVyZmVjdCBtYXRjaFxuICAgIHJldCA9IGxpc3Quc2hpZnQoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyByZXN1bHQgc3BhbnMgbW9yZSB0aGFuIG9uZSBidWZmZXJcbiAgICByZXQgPSBoYXNTdHJpbmdzID8gY29weUZyb21CdWZmZXJTdHJpbmcobiwgbGlzdCkgOiBjb3B5RnJvbUJ1ZmZlcihuLCBsaXN0KTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG4vLyBDb3BpZXMgYSBzcGVjaWZpZWQgYW1vdW50IG9mIGNoYXJhY3RlcnMgZnJvbSB0aGUgbGlzdCBvZiBidWZmZXJlZCBkYXRhXG4vLyBjaHVua3MuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGNvcHlGcm9tQnVmZmVyU3RyaW5nKG4sIGxpc3QpIHtcbiAgdmFyIHAgPSBsaXN0LmhlYWQ7XG4gIHZhciBjID0gMTtcbiAgdmFyIHJldCA9IHAuZGF0YTtcbiAgbiAtPSByZXQubGVuZ3RoO1xuICB3aGlsZSAocCA9IHAubmV4dCkge1xuICAgIHZhciBzdHIgPSBwLmRhdGE7XG4gICAgdmFyIG5iID0gbiA+IHN0ci5sZW5ndGggPyBzdHIubGVuZ3RoIDogbjtcbiAgICBpZiAobmIgPT09IHN0ci5sZW5ndGgpIHJldCArPSBzdHI7ZWxzZSByZXQgKz0gc3RyLnNsaWNlKDAsIG4pO1xuICAgIG4gLT0gbmI7XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIGlmIChuYiA9PT0gc3RyLmxlbmd0aCkge1xuICAgICAgICArK2M7XG4gICAgICAgIGlmIChwLm5leHQpIGxpc3QuaGVhZCA9IHAubmV4dDtlbHNlIGxpc3QuaGVhZCA9IGxpc3QudGFpbCA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0LmhlYWQgPSBwO1xuICAgICAgICBwLmRhdGEgPSBzdHIuc2xpY2UobmIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgICsrYztcbiAgfVxuICBsaXN0Lmxlbmd0aCAtPSBjO1xuICByZXR1cm4gcmV0O1xufVxuXG4vLyBDb3BpZXMgYSBzcGVjaWZpZWQgYW1vdW50IG9mIGJ5dGVzIGZyb20gdGhlIGxpc3Qgb2YgYnVmZmVyZWQgZGF0YSBjaHVua3MuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGNvcHlGcm9tQnVmZmVyKG4sIGxpc3QpIHtcbiAgdmFyIHJldCA9IGJ1ZmZlclNoaW0uYWxsb2NVbnNhZmUobik7XG4gIHZhciBwID0gbGlzdC5oZWFkO1xuICB2YXIgYyA9IDE7XG4gIHAuZGF0YS5jb3B5KHJldCk7XG4gIG4gLT0gcC5kYXRhLmxlbmd0aDtcbiAgd2hpbGUgKHAgPSBwLm5leHQpIHtcbiAgICB2YXIgYnVmID0gcC5kYXRhO1xuICAgIHZhciBuYiA9IG4gPiBidWYubGVuZ3RoID8gYnVmLmxlbmd0aCA6IG47XG4gICAgYnVmLmNvcHkocmV0LCByZXQubGVuZ3RoIC0gbiwgMCwgbmIpO1xuICAgIG4gLT0gbmI7XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIGlmIChuYiA9PT0gYnVmLmxlbmd0aCkge1xuICAgICAgICArK2M7XG4gICAgICAgIGlmIChwLm5leHQpIGxpc3QuaGVhZCA9IHAubmV4dDtlbHNlIGxpc3QuaGVhZCA9IGxpc3QudGFpbCA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0LmhlYWQgPSBwO1xuICAgICAgICBwLmRhdGEgPSBidWYuc2xpY2UobmIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgICsrYztcbiAgfVxuICBsaXN0Lmxlbmd0aCAtPSBjO1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBlbmRSZWFkYWJsZShzdHJlYW0pIHtcbiAgdmFyIHN0YXRlID0gc3RyZWFtLl9yZWFkYWJsZVN0YXRlO1xuXG4gIC8vIElmIHdlIGdldCBoZXJlIGJlZm9yZSBjb25zdW1pbmcgYWxsIHRoZSBieXRlcywgdGhlbiB0aGF0IGlzIGFcbiAgLy8gYnVnIGluIG5vZGUuICBTaG91bGQgbmV2ZXIgaGFwcGVuLlxuICBpZiAoc3RhdGUubGVuZ3RoID4gMCkgdGhyb3cgbmV3IEVycm9yKCdcImVuZFJlYWRhYmxlKClcIiBjYWxsZWQgb24gbm9uLWVtcHR5IHN0cmVhbScpO1xuXG4gIGlmICghc3RhdGUuZW5kRW1pdHRlZCkge1xuICAgIHN0YXRlLmVuZGVkID0gdHJ1ZTtcbiAgICBwcm9jZXNzTmV4dFRpY2soZW5kUmVhZGFibGVOVCwgc3RhdGUsIHN0cmVhbSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5kUmVhZGFibGVOVChzdGF0ZSwgc3RyZWFtKSB7XG4gIC8vIENoZWNrIHRoYXQgd2UgZGlkbid0IGdldCBvbmUgbGFzdCB1bnNoaWZ0LlxuICBpZiAoIXN0YXRlLmVuZEVtaXR0ZWQgJiYgc3RhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgc3RhdGUuZW5kRW1pdHRlZCA9IHRydWU7XG4gICAgc3RyZWFtLnJlYWRhYmxlID0gZmFsc2U7XG4gICAgc3RyZWFtLmVtaXQoJ2VuZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvckVhY2goeHMsIGYpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB4cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmKHhzW2ldLCBpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbmRleE9mKHhzLCB4KSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0geHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHhzW2ldID09PSB4KSByZXR1cm4gaTtcbiAgfVxuICByZXR1cm4gLTE7XG59Il19
},{"./_stream_duplex":22,"./internal/streams/BufferList":27,"_process":20,"buffer":7,"buffer-shims":6,"core-util-is":8,"events":11,"inherits":14,"isarray":17,"process-nextick-args":19,"string_decoder/":31,"util":5}],25:[function(require,module,exports){
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

'use strict';

module.exports = Transform;

var Duplex = require('./_stream_duplex');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(Transform, Duplex);

function TransformState(stream) {
  this.afterTransform = function (er, data) {
    return afterTransform(stream, er, data);
  };

  this.needTransform = false;
  this.transforming = false;
  this.writecb = null;
  this.writechunk = null;
  this.writeencoding = null;
}

function afterTransform(stream, er, data) {
  var ts = stream._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));

  ts.writechunk = null;
  ts.writecb = null;

  if (data !== null && data !== undefined) stream.push(data);

  cb(er);

  var rs = stream._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    stream._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = new TransformState(this);

  var stream = this;

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  this.once('prefinish', function () {
    if (typeof this._flush === 'function') this._flush(function (er, data) {
      done(stream, er, data);
    });else done(stream);
  });
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('_transform() is not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);

  if (data !== null && data !== undefined) stream.push(data);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  var ws = stream._writableState;
  var ts = stream._transformState;

  if (ws.length) throw new Error('Calling transform done when ws.length != 0');

  if (ts.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}
},{"./_stream_duplex":22,"core-util-is":8,"inherits":14}],26:[function(require,module,exports){
(function (process){
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.

'use strict';

module.exports = Writable;

/*<replacement>*/
var processNextTick = require('process-nextick-args');
/*</replacement>*/

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: require('util-deprecate')
};
/*</replacement>*/

/*<replacement>*/
var Stream;
(function () {
  try {
    Stream = require('st' + 'ream');
  } catch (_) {} finally {
    if (!Stream) Stream = require('events').EventEmitter;
  }
})();
/*</replacement>*/

var Buffer = require('buffer').Buffer;
/*<replacement>*/
var bufferShim = require('buffer-shims');
/*</replacement>*/

util.inherits(Writable, Stream);

function nop() {}

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

function WritableState(options, stream) {
  Duplex = Duplex || require('./_stream_duplex');

  options = options || {};

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;

  // cast to ints.
  this.highWaterMark = ~~this.highWaterMark;

  // drain event flag.
  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
    });
  } catch (_) {}
})();

// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function (object) {
      if (realHasInstance.call(this, object)) return true;

      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function (object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || require('./_stream_duplex');

  // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.

  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
    return new Writable(options);
  }

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  processNextTick(cb, er);
}

// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;

  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    processNextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;
  var isBuf = Buffer.isBuffer(chunk);

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = bufferShim.from(chunk, encoding);
  }
  return chunk;
}

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    chunk = decodeChunk(state, chunk, encoding);
    if (Buffer.isBuffer(chunk)) encoding = 'buffer';
  }
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;
  if (sync) processNextTick(cb, er);else cb(er);

  stream._writableState.errorEmitted = true;
  stream.emit('error', er);
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    while (entry) {
      buffer[count] = entry;
      entry = entry.next;
      count += 1;
    }

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequestCount = 0;
  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('_write() is not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function prefinish(stream, state) {
  if (!state.prefinished) {
    state.prefinished = true;
    stream.emit('prefinish');
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    if (state.pendingcb === 0) {
      prefinish(stream, state);
      state.finished = true;
      stream.emit('finish');
    } else {
      prefinish(stream, state);
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) processNextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;
  this.finish = function (err) {
    var entry = _this.entry;
    _this.entry = null;
    while (entry) {
      var cb = entry.callback;
      state.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    if (state.corkedRequestsFree) {
      state.corkedRequestsFree.next = _this;
    } else {
      state.corkedRequestsFree = _this;
    }
  };
}
}).call(this,require('_process'))
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliL19zdHJlYW1fd3JpdGFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEEgYml0IHNpbXBsZXIgdGhhbiByZWFkYWJsZSBzdHJlYW1zLlxuLy8gSW1wbGVtZW50IGFuIGFzeW5jIC5fd3JpdGUoY2h1bmssIGVuY29kaW5nLCBjYiksIGFuZCBpdCdsbCBoYW5kbGUgYWxsXG4vLyB0aGUgZHJhaW4gZXZlbnQgZW1pc3Npb24gYW5kIGJ1ZmZlcmluZy5cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdyaXRhYmxlO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIHByb2Nlc3NOZXh0VGljayA9IHJlcXVpcmUoJ3Byb2Nlc3MtbmV4dGljay1hcmdzJyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBhc3luY1dyaXRlID0gIXByb2Nlc3MuYnJvd3NlciAmJiBbJ3YwLjEwJywgJ3YwLjkuJ10uaW5kZXhPZihwcm9jZXNzLnZlcnNpb24uc2xpY2UoMCwgNSkpID4gLTEgPyBzZXRJbW1lZGlhdGUgOiBwcm9jZXNzTmV4dFRpY2s7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBEdXBsZXg7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuV3JpdGFibGUuV3JpdGFibGVTdGF0ZSA9IFdyaXRhYmxlU3RhdGU7XG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgdXRpbCA9IHJlcXVpcmUoJ2NvcmUtdXRpbC1pcycpO1xudXRpbC5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBpbnRlcm5hbFV0aWwgPSB7XG4gIGRlcHJlY2F0ZTogcmVxdWlyZSgndXRpbC1kZXByZWNhdGUnKVxufTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIFN0cmVhbTtcbihmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgU3RyZWFtID0gcmVxdWlyZSgnc3QnICsgJ3JlYW0nKTtcbiAgfSBjYXRjaCAoXykge30gZmluYWxseSB7XG4gICAgaWYgKCFTdHJlYW0pIFN0cmVhbSA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcbiAgfVxufSkoKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJykuQnVmZmVyO1xuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBidWZmZXJTaGltID0gcmVxdWlyZSgnYnVmZmVyLXNoaW1zJyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxudXRpbC5pbmhlcml0cyhXcml0YWJsZSwgU3RyZWFtKTtcblxuZnVuY3Rpb24gbm9wKCkge31cblxuZnVuY3Rpb24gV3JpdGVSZXEoY2h1bmssIGVuY29kaW5nLCBjYikge1xuICB0aGlzLmNodW5rID0gY2h1bms7XG4gIHRoaXMuZW5jb2RpbmcgPSBlbmNvZGluZztcbiAgdGhpcy5jYWxsYmFjayA9IGNiO1xuICB0aGlzLm5leHQgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBXcml0YWJsZVN0YXRlKG9wdGlvbnMsIHN0cmVhbSkge1xuICBEdXBsZXggPSBEdXBsZXggfHwgcmVxdWlyZSgnLi9fc3RyZWFtX2R1cGxleCcpO1xuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIC8vIG9iamVjdCBzdHJlYW0gZmxhZyB0byBpbmRpY2F0ZSB3aGV0aGVyIG9yIG5vdCB0aGlzIHN0cmVhbVxuICAvLyBjb250YWlucyBidWZmZXJzIG9yIG9iamVjdHMuXG4gIHRoaXMub2JqZWN0TW9kZSA9ICEhb3B0aW9ucy5vYmplY3RNb2RlO1xuXG4gIGlmIChzdHJlYW0gaW5zdGFuY2VvZiBEdXBsZXgpIHRoaXMub2JqZWN0TW9kZSA9IHRoaXMub2JqZWN0TW9kZSB8fCAhIW9wdGlvbnMud3JpdGFibGVPYmplY3RNb2RlO1xuXG4gIC8vIHRoZSBwb2ludCBhdCB3aGljaCB3cml0ZSgpIHN0YXJ0cyByZXR1cm5pbmcgZmFsc2VcbiAgLy8gTm90ZTogMCBpcyBhIHZhbGlkIHZhbHVlLCBtZWFucyB0aGF0IHdlIGFsd2F5cyByZXR1cm4gZmFsc2UgaWZcbiAgLy8gdGhlIGVudGlyZSBidWZmZXIgaXMgbm90IGZsdXNoZWQgaW1tZWRpYXRlbHkgb24gd3JpdGUoKVxuICB2YXIgaHdtID0gb3B0aW9ucy5oaWdoV2F0ZXJNYXJrO1xuICB2YXIgZGVmYXVsdEh3bSA9IHRoaXMub2JqZWN0TW9kZSA/IDE2IDogMTYgKiAxMDI0O1xuICB0aGlzLmhpZ2hXYXRlck1hcmsgPSBod20gfHwgaHdtID09PSAwID8gaHdtIDogZGVmYXVsdEh3bTtcblxuICAvLyBjYXN0IHRvIGludHMuXG4gIHRoaXMuaGlnaFdhdGVyTWFyayA9IH5+dGhpcy5oaWdoV2F0ZXJNYXJrO1xuXG4gIC8vIGRyYWluIGV2ZW50IGZsYWcuXG4gIHRoaXMubmVlZERyYWluID0gZmFsc2U7XG4gIC8vIGF0IHRoZSBzdGFydCBvZiBjYWxsaW5nIGVuZCgpXG4gIHRoaXMuZW5kaW5nID0gZmFsc2U7XG4gIC8vIHdoZW4gZW5kKCkgaGFzIGJlZW4gY2FsbGVkLCBhbmQgcmV0dXJuZWRcbiAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICAvLyB3aGVuICdmaW5pc2gnIGlzIGVtaXR0ZWRcbiAgdGhpcy5maW5pc2hlZCA9IGZhbHNlO1xuXG4gIC8vIHNob3VsZCB3ZSBkZWNvZGUgc3RyaW5ncyBpbnRvIGJ1ZmZlcnMgYmVmb3JlIHBhc3NpbmcgdG8gX3dyaXRlP1xuICAvLyB0aGlzIGlzIGhlcmUgc28gdGhhdCBzb21lIG5vZGUtY29yZSBzdHJlYW1zIGNhbiBvcHRpbWl6ZSBzdHJpbmdcbiAgLy8gaGFuZGxpbmcgYXQgYSBsb3dlciBsZXZlbC5cbiAgdmFyIG5vRGVjb2RlID0gb3B0aW9ucy5kZWNvZGVTdHJpbmdzID09PSBmYWxzZTtcbiAgdGhpcy5kZWNvZGVTdHJpbmdzID0gIW5vRGVjb2RlO1xuXG4gIC8vIENyeXB0byBpcyBraW5kIG9mIG9sZCBhbmQgY3J1c3R5LiAgSGlzdG9yaWNhbGx5LCBpdHMgZGVmYXVsdCBzdHJpbmdcbiAgLy8gZW5jb2RpbmcgaXMgJ2JpbmFyeScgc28gd2UgaGF2ZSB0byBtYWtlIHRoaXMgY29uZmlndXJhYmxlLlxuICAvLyBFdmVyeXRoaW5nIGVsc2UgaW4gdGhlIHVuaXZlcnNlIHVzZXMgJ3V0ZjgnLCB0aG91Z2guXG4gIHRoaXMuZGVmYXVsdEVuY29kaW5nID0gb3B0aW9ucy5kZWZhdWx0RW5jb2RpbmcgfHwgJ3V0ZjgnO1xuXG4gIC8vIG5vdCBhbiBhY3R1YWwgYnVmZmVyIHdlIGtlZXAgdHJhY2sgb2YsIGJ1dCBhIG1lYXN1cmVtZW50XG4gIC8vIG9mIGhvdyBtdWNoIHdlJ3JlIHdhaXRpbmcgdG8gZ2V0IHB1c2hlZCB0byBzb21lIHVuZGVybHlpbmdcbiAgLy8gc29ja2V0IG9yIGZpbGUuXG4gIHRoaXMubGVuZ3RoID0gMDtcblxuICAvLyBhIGZsYWcgdG8gc2VlIHdoZW4gd2UncmUgaW4gdGhlIG1pZGRsZSBvZiBhIHdyaXRlLlxuICB0aGlzLndyaXRpbmcgPSBmYWxzZTtcblxuICAvLyB3aGVuIHRydWUgYWxsIHdyaXRlcyB3aWxsIGJlIGJ1ZmZlcmVkIHVudGlsIC51bmNvcmsoKSBjYWxsXG4gIHRoaXMuY29ya2VkID0gMDtcblxuICAvLyBhIGZsYWcgdG8gYmUgYWJsZSB0byB0ZWxsIGlmIHRoZSBvbndyaXRlIGNiIGlzIGNhbGxlZCBpbW1lZGlhdGVseSxcbiAgLy8gb3Igb24gYSBsYXRlciB0aWNrLiAgV2Ugc2V0IHRoaXMgdG8gdHJ1ZSBhdCBmaXJzdCwgYmVjYXVzZSBhbnlcbiAgLy8gYWN0aW9ucyB0aGF0IHNob3VsZG4ndCBoYXBwZW4gdW50aWwgXCJsYXRlclwiIHNob3VsZCBnZW5lcmFsbHkgYWxzb1xuICAvLyBub3QgaGFwcGVuIGJlZm9yZSB0aGUgZmlyc3Qgd3JpdGUgY2FsbC5cbiAgdGhpcy5zeW5jID0gdHJ1ZTtcblxuICAvLyBhIGZsYWcgdG8ga25vdyBpZiB3ZSdyZSBwcm9jZXNzaW5nIHByZXZpb3VzbHkgYnVmZmVyZWQgaXRlbXMsIHdoaWNoXG4gIC8vIG1heSBjYWxsIHRoZSBfd3JpdGUoKSBjYWxsYmFjayBpbiB0aGUgc2FtZSB0aWNrLCBzbyB0aGF0IHdlIGRvbid0XG4gIC8vIGVuZCB1cCBpbiBhbiBvdmVybGFwcGVkIG9ud3JpdGUgc2l0dWF0aW9uLlxuICB0aGlzLmJ1ZmZlclByb2Nlc3NpbmcgPSBmYWxzZTtcblxuICAvLyB0aGUgY2FsbGJhY2sgdGhhdCdzIHBhc3NlZCB0byBfd3JpdGUoY2h1bmssY2IpXG4gIHRoaXMub253cml0ZSA9IGZ1bmN0aW9uIChlcikge1xuICAgIG9ud3JpdGUoc3RyZWFtLCBlcik7XG4gIH07XG5cbiAgLy8gdGhlIGNhbGxiYWNrIHRoYXQgdGhlIHVzZXIgc3VwcGxpZXMgdG8gd3JpdGUoY2h1bmssZW5jb2RpbmcsY2IpXG4gIHRoaXMud3JpdGVjYiA9IG51bGw7XG5cbiAgLy8gdGhlIGFtb3VudCB0aGF0IGlzIGJlaW5nIHdyaXR0ZW4gd2hlbiBfd3JpdGUgaXMgY2FsbGVkLlxuICB0aGlzLndyaXRlbGVuID0gMDtcblxuICB0aGlzLmJ1ZmZlcmVkUmVxdWVzdCA9IG51bGw7XG4gIHRoaXMubGFzdEJ1ZmZlcmVkUmVxdWVzdCA9IG51bGw7XG5cbiAgLy8gbnVtYmVyIG9mIHBlbmRpbmcgdXNlci1zdXBwbGllZCB3cml0ZSBjYWxsYmFja3NcbiAgLy8gdGhpcyBtdXN0IGJlIDAgYmVmb3JlICdmaW5pc2gnIGNhbiBiZSBlbWl0dGVkXG4gIHRoaXMucGVuZGluZ2NiID0gMDtcblxuICAvLyBlbWl0IHByZWZpbmlzaCBpZiB0aGUgb25seSB0aGluZyB3ZSdyZSB3YWl0aW5nIGZvciBpcyBfd3JpdGUgY2JzXG4gIC8vIFRoaXMgaXMgcmVsZXZhbnQgZm9yIHN5bmNocm9ub3VzIFRyYW5zZm9ybSBzdHJlYW1zXG4gIHRoaXMucHJlZmluaXNoZWQgPSBmYWxzZTtcblxuICAvLyBUcnVlIGlmIHRoZSBlcnJvciB3YXMgYWxyZWFkeSBlbWl0dGVkIGFuZCBzaG91bGQgbm90IGJlIHRocm93biBhZ2FpblxuICB0aGlzLmVycm9yRW1pdHRlZCA9IGZhbHNlO1xuXG4gIC8vIGNvdW50IGJ1ZmZlcmVkIHJlcXVlc3RzXG4gIHRoaXMuYnVmZmVyZWRSZXF1ZXN0Q291bnQgPSAwO1xuXG4gIC8vIGFsbG9jYXRlIHRoZSBmaXJzdCBDb3JrZWRSZXF1ZXN0LCB0aGVyZSBpcyBhbHdheXNcbiAgLy8gb25lIGFsbG9jYXRlZCBhbmQgZnJlZSB0byB1c2UsIGFuZCB3ZSBtYWludGFpbiBhdCBtb3N0IHR3b1xuICB0aGlzLmNvcmtlZFJlcXVlc3RzRnJlZSA9IG5ldyBDb3JrZWRSZXF1ZXN0KHRoaXMpO1xufVxuXG5Xcml0YWJsZVN0YXRlLnByb3RvdHlwZS5nZXRCdWZmZXIgPSBmdW5jdGlvbiBnZXRCdWZmZXIoKSB7XG4gIHZhciBjdXJyZW50ID0gdGhpcy5idWZmZXJlZFJlcXVlc3Q7XG4gIHZhciBvdXQgPSBbXTtcbiAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICBvdXQucHVzaChjdXJyZW50KTtcbiAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICB9XG4gIHJldHVybiBvdXQ7XG59O1xuXG4oZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcml0YWJsZVN0YXRlLnByb3RvdHlwZSwgJ2J1ZmZlcicsIHtcbiAgICAgIGdldDogaW50ZXJuYWxVdGlsLmRlcHJlY2F0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJ1ZmZlcigpO1xuICAgICAgfSwgJ193cml0YWJsZVN0YXRlLmJ1ZmZlciBpcyBkZXByZWNhdGVkLiBVc2UgX3dyaXRhYmxlU3RhdGUuZ2V0QnVmZmVyICcgKyAnaW5zdGVhZC4nKVxuICAgIH0pO1xuICB9IGNhdGNoIChfKSB7fVxufSkoKTtcblxuLy8gVGVzdCBfd3JpdGFibGVTdGF0ZSBmb3IgaW5oZXJpdGFuY2UgdG8gYWNjb3VudCBmb3IgRHVwbGV4IHN0cmVhbXMsXG4vLyB3aG9zZSBwcm90b3R5cGUgY2hhaW4gb25seSBwb2ludHMgdG8gUmVhZGFibGUuXG52YXIgcmVhbEhhc0luc3RhbmNlO1xuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmhhc0luc3RhbmNlICYmIHR5cGVvZiBGdW5jdGlvbi5wcm90b3R5cGVbU3ltYm9sLmhhc0luc3RhbmNlXSA9PT0gJ2Z1bmN0aW9uJykge1xuICByZWFsSGFzSW5zdGFuY2UgPSBGdW5jdGlvbi5wcm90b3R5cGVbU3ltYm9sLmhhc0luc3RhbmNlXTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyaXRhYmxlLCBTeW1ib2wuaGFzSW5zdGFuY2UsIHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgaWYgKHJlYWxIYXNJbnN0YW5jZS5jYWxsKHRoaXMsIG9iamVjdCkpIHJldHVybiB0cnVlO1xuXG4gICAgICByZXR1cm4gb2JqZWN0ICYmIG9iamVjdC5fd3JpdGFibGVTdGF0ZSBpbnN0YW5jZW9mIFdyaXRhYmxlU3RhdGU7XG4gICAgfVxuICB9KTtcbn0gZWxzZSB7XG4gIHJlYWxIYXNJbnN0YW5jZSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0IGluc3RhbmNlb2YgdGhpcztcbiAgfTtcbn1cblxuZnVuY3Rpb24gV3JpdGFibGUob3B0aW9ucykge1xuICBEdXBsZXggPSBEdXBsZXggfHwgcmVxdWlyZSgnLi9fc3RyZWFtX2R1cGxleCcpO1xuXG4gIC8vIFdyaXRhYmxlIGN0b3IgaXMgYXBwbGllZCB0byBEdXBsZXhlcywgdG9vLlxuICAvLyBgcmVhbEhhc0luc3RhbmNlYCBpcyBuZWNlc3NhcnkgYmVjYXVzZSB1c2luZyBwbGFpbiBgaW5zdGFuY2VvZmBcbiAgLy8gd291bGQgcmV0dXJuIGZhbHNlLCBhcyBubyBgX3dyaXRhYmxlU3RhdGVgIHByb3BlcnR5IGlzIGF0dGFjaGVkLlxuXG4gIC8vIFRyeWluZyB0byB1c2UgdGhlIGN1c3RvbSBgaW5zdGFuY2VvZmAgZm9yIFdyaXRhYmxlIGhlcmUgd2lsbCBhbHNvIGJyZWFrIHRoZVxuICAvLyBOb2RlLmpzIExhenlUcmFuc2Zvcm0gaW1wbGVtZW50YXRpb24sIHdoaWNoIGhhcyBhIG5vbi10cml2aWFsIGdldHRlciBmb3JcbiAgLy8gYF93cml0YWJsZVN0YXRlYCB0aGF0IHdvdWxkIGxlYWQgdG8gaW5maW5pdGUgcmVjdXJzaW9uLlxuICBpZiAoIXJlYWxIYXNJbnN0YW5jZS5jYWxsKFdyaXRhYmxlLCB0aGlzKSAmJiAhKHRoaXMgaW5zdGFuY2VvZiBEdXBsZXgpKSB7XG4gICAgcmV0dXJuIG5ldyBXcml0YWJsZShvcHRpb25zKTtcbiAgfVxuXG4gIHRoaXMuX3dyaXRhYmxlU3RhdGUgPSBuZXcgV3JpdGFibGVTdGF0ZShvcHRpb25zLCB0aGlzKTtcblxuICAvLyBsZWdhY3kuXG4gIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLndyaXRlID09PSAnZnVuY3Rpb24nKSB0aGlzLl93cml0ZSA9IG9wdGlvbnMud3JpdGU7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMud3JpdGV2ID09PSAnZnVuY3Rpb24nKSB0aGlzLl93cml0ZXYgPSBvcHRpb25zLndyaXRldjtcbiAgfVxuXG4gIFN0cmVhbS5jYWxsKHRoaXMpO1xufVxuXG4vLyBPdGhlcndpc2UgcGVvcGxlIGNhbiBwaXBlIFdyaXRhYmxlIHN0cmVhbXMsIHdoaWNoIGlzIGp1c3Qgd3JvbmcuXG5Xcml0YWJsZS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBFcnJvcignQ2Fubm90IHBpcGUsIG5vdCByZWFkYWJsZScpKTtcbn07XG5cbmZ1bmN0aW9uIHdyaXRlQWZ0ZXJFbmQoc3RyZWFtLCBjYikge1xuICB2YXIgZXIgPSBuZXcgRXJyb3IoJ3dyaXRlIGFmdGVyIGVuZCcpO1xuICAvLyBUT0RPOiBkZWZlciBlcnJvciBldmVudHMgY29uc2lzdGVudGx5IGV2ZXJ5d2hlcmUsIG5vdCBqdXN0IHRoZSBjYlxuICBzdHJlYW0uZW1pdCgnZXJyb3InLCBlcik7XG4gIHByb2Nlc3NOZXh0VGljayhjYiwgZXIpO1xufVxuXG4vLyBDaGVja3MgdGhhdCBhIHVzZXItc3VwcGxpZWQgY2h1bmsgaXMgdmFsaWQsIGVzcGVjaWFsbHkgZm9yIHRoZSBwYXJ0aWN1bGFyXG4vLyBtb2RlIHRoZSBzdHJlYW0gaXMgaW4uIEN1cnJlbnRseSB0aGlzIG1lYW5zIHRoYXQgYG51bGxgIGlzIG5ldmVyIGFjY2VwdGVkXG4vLyBhbmQgdW5kZWZpbmVkL25vbi1zdHJpbmcgdmFsdWVzIGFyZSBvbmx5IGFsbG93ZWQgaW4gb2JqZWN0IG1vZGUuXG5mdW5jdGlvbiB2YWxpZENodW5rKHN0cmVhbSwgc3RhdGUsIGNodW5rLCBjYikge1xuICB2YXIgdmFsaWQgPSB0cnVlO1xuICB2YXIgZXIgPSBmYWxzZTtcblxuICBpZiAoY2h1bmsgPT09IG51bGwpIHtcbiAgICBlciA9IG5ldyBUeXBlRXJyb3IoJ01heSBub3Qgd3JpdGUgbnVsbCB2YWx1ZXMgdG8gc3RyZWFtJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGNodW5rICE9PSAnc3RyaW5nJyAmJiBjaHVuayAhPT0gdW5kZWZpbmVkICYmICFzdGF0ZS5vYmplY3RNb2RlKSB7XG4gICAgZXIgPSBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIG5vbi1zdHJpbmcvYnVmZmVyIGNodW5rJyk7XG4gIH1cbiAgaWYgKGVyKSB7XG4gICAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXIpO1xuICAgIHByb2Nlc3NOZXh0VGljayhjYiwgZXIpO1xuICAgIHZhbGlkID0gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHZhbGlkO1xufVxuXG5Xcml0YWJsZS5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nLCBjYikge1xuICB2YXIgc3RhdGUgPSB0aGlzLl93cml0YWJsZVN0YXRlO1xuICB2YXIgcmV0ID0gZmFsc2U7XG4gIHZhciBpc0J1ZiA9IEJ1ZmZlci5pc0J1ZmZlcihjaHVuayk7XG5cbiAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiID0gZW5jb2Rpbmc7XG4gICAgZW5jb2RpbmcgPSBudWxsO1xuICB9XG5cbiAgaWYgKGlzQnVmKSBlbmNvZGluZyA9ICdidWZmZXInO2Vsc2UgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSBzdGF0ZS5kZWZhdWx0RW5jb2Rpbmc7XG5cbiAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykgY2IgPSBub3A7XG5cbiAgaWYgKHN0YXRlLmVuZGVkKSB3cml0ZUFmdGVyRW5kKHRoaXMsIGNiKTtlbHNlIGlmIChpc0J1ZiB8fCB2YWxpZENodW5rKHRoaXMsIHN0YXRlLCBjaHVuaywgY2IpKSB7XG4gICAgc3RhdGUucGVuZGluZ2NiKys7XG4gICAgcmV0ID0gd3JpdGVPckJ1ZmZlcih0aGlzLCBzdGF0ZSwgaXNCdWYsIGNodW5rLCBlbmNvZGluZywgY2IpO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn07XG5cbldyaXRhYmxlLnByb3RvdHlwZS5jb3JrID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RhdGUgPSB0aGlzLl93cml0YWJsZVN0YXRlO1xuXG4gIHN0YXRlLmNvcmtlZCsrO1xufTtcblxuV3JpdGFibGUucHJvdG90eXBlLnVuY29yayA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fd3JpdGFibGVTdGF0ZTtcblxuICBpZiAoc3RhdGUuY29ya2VkKSB7XG4gICAgc3RhdGUuY29ya2VkLS07XG5cbiAgICBpZiAoIXN0YXRlLndyaXRpbmcgJiYgIXN0YXRlLmNvcmtlZCAmJiAhc3RhdGUuZmluaXNoZWQgJiYgIXN0YXRlLmJ1ZmZlclByb2Nlc3NpbmcgJiYgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0KSBjbGVhckJ1ZmZlcih0aGlzLCBzdGF0ZSk7XG4gIH1cbn07XG5cbldyaXRhYmxlLnByb3RvdHlwZS5zZXREZWZhdWx0RW5jb2RpbmcgPSBmdW5jdGlvbiBzZXREZWZhdWx0RW5jb2RpbmcoZW5jb2RpbmcpIHtcbiAgLy8gbm9kZTo6UGFyc2VFbmNvZGluZygpIHJlcXVpcmVzIGxvd2VyIGNhc2UuXG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnKSBlbmNvZGluZyA9IGVuY29kaW5nLnRvTG93ZXJDYXNlKCk7XG4gIGlmICghKFsnaGV4JywgJ3V0ZjgnLCAndXRmLTgnLCAnYXNjaWknLCAnYmluYXJ5JywgJ2Jhc2U2NCcsICd1Y3MyJywgJ3Vjcy0yJywgJ3V0ZjE2bGUnLCAndXRmLTE2bGUnLCAncmF3J10uaW5kZXhPZigoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKSkgPiAtMSkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZyk7XG4gIHRoaXMuX3dyaXRhYmxlU3RhdGUuZGVmYXVsdEVuY29kaW5nID0gZW5jb2Rpbmc7XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gZGVjb2RlQ2h1bmsoc3RhdGUsIGNodW5rLCBlbmNvZGluZykge1xuICBpZiAoIXN0YXRlLm9iamVjdE1vZGUgJiYgc3RhdGUuZGVjb2RlU3RyaW5ncyAhPT0gZmFsc2UgJiYgdHlwZW9mIGNodW5rID09PSAnc3RyaW5nJykge1xuICAgIGNodW5rID0gYnVmZmVyU2hpbS5mcm9tKGNodW5rLCBlbmNvZGluZyk7XG4gIH1cbiAgcmV0dXJuIGNodW5rO1xufVxuXG4vLyBpZiB3ZSdyZSBhbHJlYWR5IHdyaXRpbmcgc29tZXRoaW5nLCB0aGVuIGp1c3QgcHV0IHRoaXNcbi8vIGluIHRoZSBxdWV1ZSwgYW5kIHdhaXQgb3VyIHR1cm4uICBPdGhlcndpc2UsIGNhbGwgX3dyaXRlXG4vLyBJZiB3ZSByZXR1cm4gZmFsc2UsIHRoZW4gd2UgbmVlZCBhIGRyYWluIGV2ZW50LCBzbyBzZXQgdGhhdCBmbGFnLlxuZnVuY3Rpb24gd3JpdGVPckJ1ZmZlcihzdHJlYW0sIHN0YXRlLCBpc0J1ZiwgY2h1bmssIGVuY29kaW5nLCBjYikge1xuICBpZiAoIWlzQnVmKSB7XG4gICAgY2h1bmsgPSBkZWNvZGVDaHVuayhzdGF0ZSwgY2h1bmssIGVuY29kaW5nKTtcbiAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKGNodW5rKSkgZW5jb2RpbmcgPSAnYnVmZmVyJztcbiAgfVxuICB2YXIgbGVuID0gc3RhdGUub2JqZWN0TW9kZSA/IDEgOiBjaHVuay5sZW5ndGg7XG5cbiAgc3RhdGUubGVuZ3RoICs9IGxlbjtcblxuICB2YXIgcmV0ID0gc3RhdGUubGVuZ3RoIDwgc3RhdGUuaGlnaFdhdGVyTWFyaztcbiAgLy8gd2UgbXVzdCBlbnN1cmUgdGhhdCBwcmV2aW91cyBuZWVkRHJhaW4gd2lsbCBub3QgYmUgcmVzZXQgdG8gZmFsc2UuXG4gIGlmICghcmV0KSBzdGF0ZS5uZWVkRHJhaW4gPSB0cnVlO1xuXG4gIGlmIChzdGF0ZS53cml0aW5nIHx8IHN0YXRlLmNvcmtlZCkge1xuICAgIHZhciBsYXN0ID0gc3RhdGUubGFzdEJ1ZmZlcmVkUmVxdWVzdDtcbiAgICBzdGF0ZS5sYXN0QnVmZmVyZWRSZXF1ZXN0ID0gbmV3IFdyaXRlUmVxKGNodW5rLCBlbmNvZGluZywgY2IpO1xuICAgIGlmIChsYXN0KSB7XG4gICAgICBsYXN0Lm5leHQgPSBzdGF0ZS5sYXN0QnVmZmVyZWRSZXF1ZXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5idWZmZXJlZFJlcXVlc3QgPSBzdGF0ZS5sYXN0QnVmZmVyZWRSZXF1ZXN0O1xuICAgIH1cbiAgICBzdGF0ZS5idWZmZXJlZFJlcXVlc3RDb3VudCArPSAxO1xuICB9IGVsc2Uge1xuICAgIGRvV3JpdGUoc3RyZWFtLCBzdGF0ZSwgZmFsc2UsIGxlbiwgY2h1bmssIGVuY29kaW5nLCBjYik7XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBkb1dyaXRlKHN0cmVhbSwgc3RhdGUsIHdyaXRldiwgbGVuLCBjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIHN0YXRlLndyaXRlbGVuID0gbGVuO1xuICBzdGF0ZS53cml0ZWNiID0gY2I7XG4gIHN0YXRlLndyaXRpbmcgPSB0cnVlO1xuICBzdGF0ZS5zeW5jID0gdHJ1ZTtcbiAgaWYgKHdyaXRldikgc3RyZWFtLl93cml0ZXYoY2h1bmssIHN0YXRlLm9ud3JpdGUpO2Vsc2Ugc3RyZWFtLl93cml0ZShjaHVuaywgZW5jb2RpbmcsIHN0YXRlLm9ud3JpdGUpO1xuICBzdGF0ZS5zeW5jID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG9ud3JpdGVFcnJvcihzdHJlYW0sIHN0YXRlLCBzeW5jLCBlciwgY2IpIHtcbiAgLS1zdGF0ZS5wZW5kaW5nY2I7XG4gIGlmIChzeW5jKSBwcm9jZXNzTmV4dFRpY2soY2IsIGVyKTtlbHNlIGNiKGVyKTtcblxuICBzdHJlYW0uX3dyaXRhYmxlU3RhdGUuZXJyb3JFbWl0dGVkID0gdHJ1ZTtcbiAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXIpO1xufVxuXG5mdW5jdGlvbiBvbndyaXRlU3RhdGVVcGRhdGUoc3RhdGUpIHtcbiAgc3RhdGUud3JpdGluZyA9IGZhbHNlO1xuICBzdGF0ZS53cml0ZWNiID0gbnVsbDtcbiAgc3RhdGUubGVuZ3RoIC09IHN0YXRlLndyaXRlbGVuO1xuICBzdGF0ZS53cml0ZWxlbiA9IDA7XG59XG5cbmZ1bmN0aW9uIG9ud3JpdGUoc3RyZWFtLCBlcikge1xuICB2YXIgc3RhdGUgPSBzdHJlYW0uX3dyaXRhYmxlU3RhdGU7XG4gIHZhciBzeW5jID0gc3RhdGUuc3luYztcbiAgdmFyIGNiID0gc3RhdGUud3JpdGVjYjtcblxuICBvbndyaXRlU3RhdGVVcGRhdGUoc3RhdGUpO1xuXG4gIGlmIChlcikgb253cml0ZUVycm9yKHN0cmVhbSwgc3RhdGUsIHN5bmMsIGVyLCBjYik7ZWxzZSB7XG4gICAgLy8gQ2hlY2sgaWYgd2UncmUgYWN0dWFsbHkgcmVhZHkgdG8gZmluaXNoLCBidXQgZG9uJ3QgZW1pdCB5ZXRcbiAgICB2YXIgZmluaXNoZWQgPSBuZWVkRmluaXNoKHN0YXRlKTtcblxuICAgIGlmICghZmluaXNoZWQgJiYgIXN0YXRlLmNvcmtlZCAmJiAhc3RhdGUuYnVmZmVyUHJvY2Vzc2luZyAmJiBzdGF0ZS5idWZmZXJlZFJlcXVlc3QpIHtcbiAgICAgIGNsZWFyQnVmZmVyKHN0cmVhbSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChzeW5jKSB7XG4gICAgICAvKjxyZXBsYWNlbWVudD4qL1xuICAgICAgYXN5bmNXcml0ZShhZnRlcldyaXRlLCBzdHJlYW0sIHN0YXRlLCBmaW5pc2hlZCwgY2IpO1xuICAgICAgLyo8L3JlcGxhY2VtZW50PiovXG4gICAgfSBlbHNlIHtcbiAgICAgIGFmdGVyV3JpdGUoc3RyZWFtLCBzdGF0ZSwgZmluaXNoZWQsIGNiKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWZ0ZXJXcml0ZShzdHJlYW0sIHN0YXRlLCBmaW5pc2hlZCwgY2IpIHtcbiAgaWYgKCFmaW5pc2hlZCkgb253cml0ZURyYWluKHN0cmVhbSwgc3RhdGUpO1xuICBzdGF0ZS5wZW5kaW5nY2ItLTtcbiAgY2IoKTtcbiAgZmluaXNoTWF5YmUoc3RyZWFtLCBzdGF0ZSk7XG59XG5cbi8vIE11c3QgZm9yY2UgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIG9uIG5leHRUaWNrLCBzbyB0aGF0IHdlIGRvbid0XG4vLyBlbWl0ICdkcmFpbicgYmVmb3JlIHRoZSB3cml0ZSgpIGNvbnN1bWVyIGdldHMgdGhlICdmYWxzZScgcmV0dXJuXG4vLyB2YWx1ZSwgYW5kIGhhcyBhIGNoYW5jZSB0byBhdHRhY2ggYSAnZHJhaW4nIGxpc3RlbmVyLlxuZnVuY3Rpb24gb253cml0ZURyYWluKHN0cmVhbSwgc3RhdGUpIHtcbiAgaWYgKHN0YXRlLmxlbmd0aCA9PT0gMCAmJiBzdGF0ZS5uZWVkRHJhaW4pIHtcbiAgICBzdGF0ZS5uZWVkRHJhaW4gPSBmYWxzZTtcbiAgICBzdHJlYW0uZW1pdCgnZHJhaW4nKTtcbiAgfVxufVxuXG4vLyBpZiB0aGVyZSdzIHNvbWV0aGluZyBpbiB0aGUgYnVmZmVyIHdhaXRpbmcsIHRoZW4gcHJvY2VzcyBpdFxuZnVuY3Rpb24gY2xlYXJCdWZmZXIoc3RyZWFtLCBzdGF0ZSkge1xuICBzdGF0ZS5idWZmZXJQcm9jZXNzaW5nID0gdHJ1ZTtcbiAgdmFyIGVudHJ5ID0gc3RhdGUuYnVmZmVyZWRSZXF1ZXN0O1xuXG4gIGlmIChzdHJlYW0uX3dyaXRldiAmJiBlbnRyeSAmJiBlbnRyeS5uZXh0KSB7XG4gICAgLy8gRmFzdCBjYXNlLCB3cml0ZSBldmVyeXRoaW5nIHVzaW5nIF93cml0ZXYoKVxuICAgIHZhciBsID0gc3RhdGUuYnVmZmVyZWRSZXF1ZXN0Q291bnQ7XG4gICAgdmFyIGJ1ZmZlciA9IG5ldyBBcnJheShsKTtcbiAgICB2YXIgaG9sZGVyID0gc3RhdGUuY29ya2VkUmVxdWVzdHNGcmVlO1xuICAgIGhvbGRlci5lbnRyeSA9IGVudHJ5O1xuXG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICB3aGlsZSAoZW50cnkpIHtcbiAgICAgIGJ1ZmZlcltjb3VudF0gPSBlbnRyeTtcbiAgICAgIGVudHJ5ID0gZW50cnkubmV4dDtcbiAgICAgIGNvdW50ICs9IDE7XG4gICAgfVxuXG4gICAgZG9Xcml0ZShzdHJlYW0sIHN0YXRlLCB0cnVlLCBzdGF0ZS5sZW5ndGgsIGJ1ZmZlciwgJycsIGhvbGRlci5maW5pc2gpO1xuXG4gICAgLy8gZG9Xcml0ZSBpcyBhbG1vc3QgYWx3YXlzIGFzeW5jLCBkZWZlciB0aGVzZSB0byBzYXZlIGEgYml0IG9mIHRpbWVcbiAgICAvLyBhcyB0aGUgaG90IHBhdGggZW5kcyB3aXRoIGRvV3JpdGVcbiAgICBzdGF0ZS5wZW5kaW5nY2IrKztcbiAgICBzdGF0ZS5sYXN0QnVmZmVyZWRSZXF1ZXN0ID0gbnVsbDtcbiAgICBpZiAoaG9sZGVyLm5leHQpIHtcbiAgICAgIHN0YXRlLmNvcmtlZFJlcXVlc3RzRnJlZSA9IGhvbGRlci5uZXh0O1xuICAgICAgaG9sZGVyLm5leHQgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWUgPSBuZXcgQ29ya2VkUmVxdWVzdChzdGF0ZSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIFNsb3cgY2FzZSwgd3JpdGUgY2h1bmtzIG9uZS1ieS1vbmVcbiAgICB3aGlsZSAoZW50cnkpIHtcbiAgICAgIHZhciBjaHVuayA9IGVudHJ5LmNodW5rO1xuICAgICAgdmFyIGVuY29kaW5nID0gZW50cnkuZW5jb2Rpbmc7XG4gICAgICB2YXIgY2IgPSBlbnRyeS5jYWxsYmFjaztcbiAgICAgIHZhciBsZW4gPSBzdGF0ZS5vYmplY3RNb2RlID8gMSA6IGNodW5rLmxlbmd0aDtcblxuICAgICAgZG9Xcml0ZShzdHJlYW0sIHN0YXRlLCBmYWxzZSwgbGVuLCBjaHVuaywgZW5jb2RpbmcsIGNiKTtcbiAgICAgIGVudHJ5ID0gZW50cnkubmV4dDtcbiAgICAgIC8vIGlmIHdlIGRpZG4ndCBjYWxsIHRoZSBvbndyaXRlIGltbWVkaWF0ZWx5LCB0aGVuXG4gICAgICAvLyBpdCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gd2FpdCB1bnRpbCBpdCBkb2VzLlxuICAgICAgLy8gYWxzbywgdGhhdCBtZWFucyB0aGF0IHRoZSBjaHVuayBhbmQgY2IgYXJlIGN1cnJlbnRseVxuICAgICAgLy8gYmVpbmcgcHJvY2Vzc2VkLCBzbyBtb3ZlIHRoZSBidWZmZXIgY291bnRlciBwYXN0IHRoZW0uXG4gICAgICBpZiAoc3RhdGUud3JpdGluZykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZW50cnkgPT09IG51bGwpIHN0YXRlLmxhc3RCdWZmZXJlZFJlcXVlc3QgPSBudWxsO1xuICB9XG5cbiAgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0Q291bnQgPSAwO1xuICBzdGF0ZS5idWZmZXJlZFJlcXVlc3QgPSBlbnRyeTtcbiAgc3RhdGUuYnVmZmVyUHJvY2Vzc2luZyA9IGZhbHNlO1xufVxuXG5Xcml0YWJsZS5wcm90b3R5cGUuX3dyaXRlID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgY2IobmV3IEVycm9yKCdfd3JpdGUoKSBpcyBub3QgaW1wbGVtZW50ZWQnKSk7XG59O1xuXG5Xcml0YWJsZS5wcm90b3R5cGUuX3dyaXRldiA9IG51bGw7XG5cbldyaXRhYmxlLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nLCBjYikge1xuICB2YXIgc3RhdGUgPSB0aGlzLl93cml0YWJsZVN0YXRlO1xuXG4gIGlmICh0eXBlb2YgY2h1bmsgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYiA9IGNodW5rO1xuICAgIGNodW5rID0gbnVsbDtcbiAgICBlbmNvZGluZyA9IG51bGw7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2IgPSBlbmNvZGluZztcbiAgICBlbmNvZGluZyA9IG51bGw7XG4gIH1cblxuICBpZiAoY2h1bmsgIT09IG51bGwgJiYgY2h1bmsgIT09IHVuZGVmaW5lZCkgdGhpcy53cml0ZShjaHVuaywgZW5jb2RpbmcpO1xuXG4gIC8vIC5lbmQoKSBmdWxseSB1bmNvcmtzXG4gIGlmIChzdGF0ZS5jb3JrZWQpIHtcbiAgICBzdGF0ZS5jb3JrZWQgPSAxO1xuICAgIHRoaXMudW5jb3JrKCk7XG4gIH1cblxuICAvLyBpZ25vcmUgdW5uZWNlc3NhcnkgZW5kKCkgY2FsbHMuXG4gIGlmICghc3RhdGUuZW5kaW5nICYmICFzdGF0ZS5maW5pc2hlZCkgZW5kV3JpdGFibGUodGhpcywgc3RhdGUsIGNiKTtcbn07XG5cbmZ1bmN0aW9uIG5lZWRGaW5pc2goc3RhdGUpIHtcbiAgcmV0dXJuIHN0YXRlLmVuZGluZyAmJiBzdGF0ZS5sZW5ndGggPT09IDAgJiYgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0ID09PSBudWxsICYmICFzdGF0ZS5maW5pc2hlZCAmJiAhc3RhdGUud3JpdGluZztcbn1cblxuZnVuY3Rpb24gcHJlZmluaXNoKHN0cmVhbSwgc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZS5wcmVmaW5pc2hlZCkge1xuICAgIHN0YXRlLnByZWZpbmlzaGVkID0gdHJ1ZTtcbiAgICBzdHJlYW0uZW1pdCgncHJlZmluaXNoJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluaXNoTWF5YmUoc3RyZWFtLCBzdGF0ZSkge1xuICB2YXIgbmVlZCA9IG5lZWRGaW5pc2goc3RhdGUpO1xuICBpZiAobmVlZCkge1xuICAgIGlmIChzdGF0ZS5wZW5kaW5nY2IgPT09IDApIHtcbiAgICAgIHByZWZpbmlzaChzdHJlYW0sIHN0YXRlKTtcbiAgICAgIHN0YXRlLmZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgIHN0cmVhbS5lbWl0KCdmaW5pc2gnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJlZmluaXNoKHN0cmVhbSwgc3RhdGUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbmVlZDtcbn1cblxuZnVuY3Rpb24gZW5kV3JpdGFibGUoc3RyZWFtLCBzdGF0ZSwgY2IpIHtcbiAgc3RhdGUuZW5kaW5nID0gdHJ1ZTtcbiAgZmluaXNoTWF5YmUoc3RyZWFtLCBzdGF0ZSk7XG4gIGlmIChjYikge1xuICAgIGlmIChzdGF0ZS5maW5pc2hlZCkgcHJvY2Vzc05leHRUaWNrKGNiKTtlbHNlIHN0cmVhbS5vbmNlKCdmaW5pc2gnLCBjYik7XG4gIH1cbiAgc3RhdGUuZW5kZWQgPSB0cnVlO1xuICBzdHJlYW0ud3JpdGFibGUgPSBmYWxzZTtcbn1cblxuLy8gSXQgc2VlbXMgYSBsaW5rZWQgbGlzdCBidXQgaXQgaXMgbm90XG4vLyB0aGVyZSB3aWxsIGJlIG9ubHkgMiBvZiB0aGVzZSBmb3IgZWFjaCBzdHJlYW1cbmZ1bmN0aW9uIENvcmtlZFJlcXVlc3Qoc3RhdGUpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB0aGlzLm5leHQgPSBudWxsO1xuICB0aGlzLmVudHJ5ID0gbnVsbDtcbiAgdGhpcy5maW5pc2ggPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgdmFyIGVudHJ5ID0gX3RoaXMuZW50cnk7XG4gICAgX3RoaXMuZW50cnkgPSBudWxsO1xuICAgIHdoaWxlIChlbnRyeSkge1xuICAgICAgdmFyIGNiID0gZW50cnkuY2FsbGJhY2s7XG4gICAgICBzdGF0ZS5wZW5kaW5nY2ItLTtcbiAgICAgIGNiKGVycik7XG4gICAgICBlbnRyeSA9IGVudHJ5Lm5leHQ7XG4gICAgfVxuICAgIGlmIChzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWUpIHtcbiAgICAgIHN0YXRlLmNvcmtlZFJlcXVlc3RzRnJlZS5uZXh0ID0gX3RoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLmNvcmtlZFJlcXVlc3RzRnJlZSA9IF90aGlzO1xuICAgIH1cbiAgfTtcbn0iXX0=
},{"./_stream_duplex":22,"_process":20,"buffer":7,"buffer-shims":6,"core-util-is":8,"events":11,"inherits":14,"process-nextick-args":19,"util-deprecate":32}],27:[function(require,module,exports){
'use strict';

var Buffer = require('buffer').Buffer;
/*<replacement>*/
var bufferShim = require('buffer-shims');
/*</replacement>*/

module.exports = BufferList;

function BufferList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

BufferList.prototype.push = function (v) {
  var entry = { data: v, next: null };
  if (this.length > 0) this.tail.next = entry;else this.head = entry;
  this.tail = entry;
  ++this.length;
};

BufferList.prototype.unshift = function (v) {
  var entry = { data: v, next: this.head };
  if (this.length === 0) this.tail = entry;
  this.head = entry;
  ++this.length;
};

BufferList.prototype.shift = function () {
  if (this.length === 0) return;
  var ret = this.head.data;
  if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
  --this.length;
  return ret;
};

BufferList.prototype.clear = function () {
  this.head = this.tail = null;
  this.length = 0;
};

BufferList.prototype.join = function (s) {
  if (this.length === 0) return '';
  var p = this.head;
  var ret = '' + p.data;
  while (p = p.next) {
    ret += s + p.data;
  }return ret;
};

BufferList.prototype.concat = function (n) {
  if (this.length === 0) return bufferShim.alloc(0);
  if (this.length === 1) return this.head.data;
  var ret = bufferShim.allocUnsafe(n >>> 0);
  var p = this.head;
  var i = 0;
  while (p) {
    p.data.copy(ret, i);
    i += p.data.length;
    p = p.next;
  }
  return ret;
};
},{"buffer":7,"buffer-shims":6}],28:[function(require,module,exports){
(function (process){
var Stream = (function (){
  try {
    return require('st' + 'ream'); // hack to fix a circular dependency issue when used with browserify
  } catch(_){}
}());
exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = Stream || exports;
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');

if (!process.browser && process.env.READABLE_STREAM === 'disable' && Stream) {
  module.exports = Stream;
}

}).call(this,require('_process'))
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vcmVhZGFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbInZhciBTdHJlYW0gPSAoZnVuY3Rpb24gKCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHJlcXVpcmUoJ3N0JyArICdyZWFtJyk7IC8vIGhhY2sgdG8gZml4IGEgY2lyY3VsYXIgZGVwZW5kZW5jeSBpc3N1ZSB3aGVuIHVzZWQgd2l0aCBicm93c2VyaWZ5XG4gIH0gY2F0Y2goXyl7fVxufSgpKTtcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL19zdHJlYW1fcmVhZGFibGUuanMnKTtcbmV4cG9ydHMuU3RyZWFtID0gU3RyZWFtIHx8IGV4cG9ydHM7XG5leHBvcnRzLlJlYWRhYmxlID0gZXhwb3J0cztcbmV4cG9ydHMuV3JpdGFibGUgPSByZXF1aXJlKCcuL2xpYi9fc3RyZWFtX3dyaXRhYmxlLmpzJyk7XG5leHBvcnRzLkR1cGxleCA9IHJlcXVpcmUoJy4vbGliL19zdHJlYW1fZHVwbGV4LmpzJyk7XG5leHBvcnRzLlRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vbGliL19zdHJlYW1fdHJhbnNmb3JtLmpzJyk7XG5leHBvcnRzLlBhc3NUaHJvdWdoID0gcmVxdWlyZSgnLi9saWIvX3N0cmVhbV9wYXNzdGhyb3VnaC5qcycpO1xuXG5pZiAoIXByb2Nlc3MuYnJvd3NlciAmJiBwcm9jZXNzLmVudi5SRUFEQUJMRV9TVFJFQU0gPT09ICdkaXNhYmxlJyAmJiBTdHJlYW0pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBTdHJlYW07XG59XG4iXX0=
},{"./lib/_stream_duplex.js":22,"./lib/_stream_passthrough.js":23,"./lib/_stream_readable.js":24,"./lib/_stream_transform.js":25,"./lib/_stream_writable.js":26,"_process":20}],29:[function(require,module,exports){
(function (Buffer){
module.exports = Peer

var debug = require('debug')('simple-peer')
var getBrowserRTC = require('get-browser-rtc')
var inherits = require('inherits')
var randombytes = require('randombytes')
var stream = require('readable-stream')

var MAX_BUFFERED_AMOUNT = 64 * 1024

inherits(Peer, stream.Duplex)

/**
 * WebRTC peer connection. Same API as node core `net.Socket`, plus a few extra methods.
 * Duplex stream.
 * @param {Object} opts
 */
function Peer (opts) {
  var self = this
  if (!(self instanceof Peer)) return new Peer(opts)

  self._id = randombytes(4).toString('hex').slice(0, 7)
  self._debug('new peer %o', opts)

  opts = Object.assign({
    allowHalfOpen: false
  }, opts)

  stream.Duplex.call(self, opts)

  self.channelName = opts.initiator
    ? opts.channelName || randombytes(20).toString('hex')
    : null

  // Needed by _transformConstraints, so set this early
  self._isChromium = typeof window !== 'undefined' && !!window.webkitRTCPeerConnection

  self.initiator = opts.initiator || false
  self.channelConfig = opts.channelConfig || Peer.channelConfig
  self.config = opts.config || Peer.config
  self.constraints = self._transformConstraints(opts.constraints || Peer.constraints)
  self.offerConstraints = self._transformConstraints(opts.offerConstraints || {})
  self.answerConstraints = self._transformConstraints(opts.answerConstraints || {})
  self.reconnectTimer = opts.reconnectTimer || false
  self.sdpTransform = opts.sdpTransform || function (sdp) { return sdp }
  self.stream = opts.stream || false
  self.trickle = opts.trickle !== undefined ? opts.trickle : true

  self.destroyed = false
  self.connected = false

  self.remoteAddress = undefined
  self.remoteFamily = undefined
  self.remotePort = undefined
  self.localAddress = undefined
  self.localPort = undefined

  self._wrtc = (opts.wrtc && typeof opts.wrtc === 'object')
    ? opts.wrtc
    : getBrowserRTC()

  if (!self._wrtc) {
    if (typeof window === 'undefined') {
      throw new Error('No WebRTC support: Specify `opts.wrtc` option in this environment')
    } else {
      throw new Error('No WebRTC support: Not a supported browser')
    }
  }

  self._pcReady = false
  self._channelReady = false
  self._iceComplete = false // ice candidate trickle done (got null candidate)
  self._channel = null
  self._pendingCandidates = []
  self._previousStreams = []

  self._chunk = null
  self._cb = null
  self._interval = null
  self._reconnectTimeout = null

  self._pc = new (self._wrtc.RTCPeerConnection)(self.config, self.constraints)

  // We prefer feature detection whenever possible, but sometimes that's not
  // possible for certain implementations.
  self._isWrtc = Array.isArray(self._pc.RTCIceConnectionStates)
  self._isReactNativeWebrtc = typeof self._pc._peerConnectionId === 'number'

  self._pc.oniceconnectionstatechange = function () {
    self._onIceConnectionStateChange()
  }
  self._pc.onsignalingstatechange = function () {
    self._onSignalingStateChange()
  }
  self._pc.onicecandidate = function (event) {
    self._onIceCandidate(event)
  }

  if (self.initiator) {
    var createdOffer = false
    self._pc.onnegotiationneeded = function () {
      if (!createdOffer) self._createOffer()
      createdOffer = true
    }

    self._setupData({
      channel: self._pc.createDataChannel(self.channelName, self.channelConfig)
    })
  } else {
    self._pc.ondatachannel = function (event) {
      self._setupData(event)
    }
  }

  if ('addTrack' in self._pc) {
    // WebRTC Spec, Firefox
    if (self.stream) {
      self.stream.getTracks().forEach(function (track) {
        self._pc.addTrack(track, self.stream)
      })
    }
    self._pc.ontrack = function (event) {
      self._onTrack(event)
    }
  } else {
    // Chrome, etc. This can be removed once all browsers support `ontrack`
    if (self.stream) self._pc.addStream(self.stream)
    self._pc.onaddstream = function (event) {
      self._onAddStream(event)
    }
  }

  // HACK: wrtc doesn't fire the 'negotionneeded' event
  if (self.initiator && self._isWrtc) {
    self._pc.onnegotiationneeded()
  }

  self._onFinishBound = function () {
    self._onFinish()
  }
  self.once('finish', self._onFinishBound)
}

Peer.WEBRTC_SUPPORT = !!getBrowserRTC()

/**
 * Expose config, constraints, and data channel config for overriding all Peer
 * instances. Otherwise, just set opts.config, opts.constraints, or opts.channelConfig
 * when constructing a Peer.
 */
Peer.config = {
  iceServers: [
    {
      urls: 'stun:stun.l.google.com:19302'
    },
    {
      urls: 'stun:global.stun.twilio.com:3478?transport=udp'
    }
  ]
}
Peer.constraints = {}
Peer.channelConfig = {}

Object.defineProperty(Peer.prototype, 'bufferSize', {
  get: function () {
    var self = this
    return (self._channel && self._channel.bufferedAmount) || 0
  }
})

Peer.prototype.address = function () {
  var self = this
  return { port: self.localPort, family: 'IPv4', address: self.localAddress }
}

Peer.prototype.signal = function (data) {
  var self = this
  if (self.destroyed) throw new Error('cannot signal after peer is destroyed')
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (err) {
      data = {}
    }
  }
  self._debug('signal()')

  if (data.candidate) {
    if (self._pc.remoteDescription) self._addIceCandidate(data.candidate)
    else self._pendingCandidates.push(data.candidate)
  }
  if (data.sdp) {
    self._pc.setRemoteDescription(new (self._wrtc.RTCSessionDescription)(data), function () {
      if (self.destroyed) return

      self._pendingCandidates.forEach(function (candidate) {
        self._addIceCandidate(candidate)
      })
      self._pendingCandidates = []

      if (self._pc.remoteDescription.type === 'offer') self._createAnswer()
    }, function (err) { self._onError(err) })
  }
  if (!data.sdp && !data.candidate) {
    self._destroy(new Error('signal() called with invalid signal data'))
  }
}

Peer.prototype._addIceCandidate = function (candidate) {
  var self = this
  try {
    self._pc.addIceCandidate(
      new self._wrtc.RTCIceCandidate(candidate),
      noop,
      function (err) { self._onError(err) }
    )
  } catch (err) {
    self._destroy(new Error('error adding candidate: ' + err.message))
  }
}

/**
 * Send text/binary data to the remote peer.
 * @param {TypedArrayView|ArrayBuffer|Buffer|string|Blob|Object} chunk
 */
Peer.prototype.send = function (chunk) {
  var self = this

  // HACK: `wrtc` module crashes on Node.js Buffer, so convert to Uint8Array
  // See: https://github.com/feross/simple-peer/issues/60
  if (self._isWrtc && Buffer.isBuffer(chunk)) {
    chunk = new Uint8Array(chunk)
  }

  self._channel.send(chunk)
}

Peer.prototype.destroy = function (onclose) {
  var self = this
  self._destroy(null, onclose)
}

Peer.prototype._destroy = function (err, onclose) {
  var self = this
  if (self.destroyed) return
  if (onclose) self.once('close', onclose)

  self._debug('destroy (error: %s)', err && err.message)

  self.readable = self.writable = false

  if (!self._readableState.ended) self.push(null)
  if (!self._writableState.finished) self.end()

  self.destroyed = true
  self.connected = false
  self._pcReady = false
  self._channelReady = false
  self._previousStreams = null

  clearInterval(self._interval)
  clearTimeout(self._reconnectTimeout)
  self._interval = null
  self._reconnectTimeout = null
  self._chunk = null
  self._cb = null

  if (self._onFinishBound) self.removeListener('finish', self._onFinishBound)
  self._onFinishBound = null

  if (self._pc) {
    try {
      self._pc.close()
    } catch (err) {}

    self._pc.oniceconnectionstatechange = null
    self._pc.onsignalingstatechange = null
    self._pc.onicecandidate = null
    if ('addTrack' in self._pc) {
      self._pc.ontrack = null
    } else {
      self._pc.onaddstream = null
    }
    self._pc.onnegotiationneeded = null
    self._pc.ondatachannel = null
  }

  if (self._channel) {
    try {
      self._channel.close()
    } catch (err) {}

    self._channel.onmessage = null
    self._channel.onopen = null
    self._channel.onclose = null
  }
  self._pc = null
  self._channel = null

  if (err) self.emit('error', err)
  self.emit('close')
}

Peer.prototype._setupData = function (event) {
  var self = this
  self._channel = event.channel
  self._channel.binaryType = 'arraybuffer'

  if (typeof self._channel.bufferedAmountLowThreshold === 'number') {
    self._channel.bufferedAmountLowThreshold = MAX_BUFFERED_AMOUNT
  }

  self.channelName = self._channel.label

  self._channel.onmessage = function (event) {
    self._onChannelMessage(event)
  }
  self._channel.onbufferedamountlow = function () {
    self._onChannelBufferedAmountLow()
  }
  self._channel.onopen = function () {
    self._onChannelOpen()
  }
  self._channel.onclose = function () {
    self._onChannelClose()
  }
}

Peer.prototype._read = function () {}

Peer.prototype._write = function (chunk, encoding, cb) {
  var self = this
  if (self.destroyed) return cb(new Error('cannot write after peer is destroyed'))

  if (self.connected) {
    try {
      self.send(chunk)
    } catch (err) {
      return self._onError(err)
    }
    if (self._channel.bufferedAmount > MAX_BUFFERED_AMOUNT) {
      self._debug('start backpressure: bufferedAmount %d', self._channel.bufferedAmount)
      self._cb = cb
    } else {
      cb(null)
    }
  } else {
    self._debug('write before connect')
    self._chunk = chunk
    self._cb = cb
  }
}

// When stream finishes writing, close socket. Half open connections are not
// supported.
Peer.prototype._onFinish = function () {
  var self = this
  if (self.destroyed) return

  if (self.connected) {
    destroySoon()
  } else {
    self.once('connect', destroySoon)
  }

  // Wait a bit before destroying so the socket flushes.
  // TODO: is there a more reliable way to accomplish this?
  function destroySoon () {
    setTimeout(function () {
      self._destroy()
    }, 100)
  }
}

Peer.prototype._createOffer = function () {
  var self = this
  if (self.destroyed) return

  self._pc.createOffer(function (offer) {
    if (self.destroyed) return
    offer.sdp = self.sdpTransform(offer.sdp)
    self._pc.setLocalDescription(offer, noop, function (err) { self._onError(err) })
    var sendOffer = function () {
      var signal = self._pc.localDescription || offer
      self._debug('signal')
      self.emit('signal', {
        type: signal.type,
        sdp: signal.sdp
      })
    }
    if (self.trickle || self._iceComplete) sendOffer()
    else self.once('_iceComplete', sendOffer) // wait for candidates
  }, function (err) { self._onError(err) }, self.offerConstraints)
}

Peer.prototype._createAnswer = function () {
  var self = this
  if (self.destroyed) return

  self._pc.createAnswer(function (answer) {
    if (self.destroyed) return
    answer.sdp = self.sdpTransform(answer.sdp)
    self._pc.setLocalDescription(answer, noop, function (err) { self._onError(err) })
    if (self.trickle || self._iceComplete) sendAnswer()
    else self.once('_iceComplete', sendAnswer)

    function sendAnswer () {
      var signal = self._pc.localDescription || answer
      self._debug('signal')
      self.emit('signal', {
        type: signal.type,
        sdp: signal.sdp
      })
    }
  }, function (err) { self._onError(err) }, self.answerConstraints)
}

Peer.prototype._onIceConnectionStateChange = function () {
  var self = this
  if (self.destroyed) return
  var iceGatheringState = self._pc.iceGatheringState
  var iceConnectionState = self._pc.iceConnectionState
  self._debug('iceConnectionStateChange %s %s', iceGatheringState, iceConnectionState)
  self.emit('iceConnectionStateChange', iceGatheringState, iceConnectionState)
  if (iceConnectionState === 'connected' || iceConnectionState === 'completed') {
    clearTimeout(self._reconnectTimeout)
    self._pcReady = true
    self._maybeReady()
  }
  if (iceConnectionState === 'disconnected') {
    if (self.reconnectTimer) {
      // If user has set `opt.reconnectTimer`, allow time for ICE to attempt a reconnect
      clearTimeout(self._reconnectTimeout)
      self._reconnectTimeout = setTimeout(function () {
        self._destroy()
      }, self.reconnectTimer)
    } else {
      self._destroy()
    }
  }
  if (iceConnectionState === 'failed') {
    self._destroy(new Error('Ice connection failed.'))
  }
  if (iceConnectionState === 'closed') {
    self._destroy()
  }
}

Peer.prototype.getStats = function (cb) {
  var self = this

  // Promise-based getStats() (standard)
  if (self._pc.getStats.length === 0) {
    self._pc.getStats().then(function (res) {
      var reports = []
      res.forEach(function (report) {
        reports.push(report)
      })
      cb(null, reports)
    }, function (err) { cb(err) })

  // Two-parameter callback-based getStats() (deprecated, former standard)
  } else if (self._isReactNativeWebrtc) {
    self._pc.getStats(null, function (res) {
      var reports = []
      res.forEach(function (report) {
        reports.push(report)
      })
      cb(null, reports)
    }, function (err) { cb(err) })

  // Single-parameter callback-based getStats() (non-standard)
  } else if (self._pc.getStats.length > 0) {
    self._pc.getStats(function (res) {
      var reports = []
      res.result().forEach(function (result) {
        var report = {}
        result.names().forEach(function (name) {
          report[name] = result.stat(name)
        })
        report.id = result.id
        report.type = result.type
        report.timestamp = result.timestamp
        reports.push(report)
      })
      cb(null, reports)
    }, function (err) { cb(err) })

  // Unknown browser, skip getStats() since it's anyone's guess which style of
  // getStats() they implement.
  } else {
    cb(null, [])
  }
}

Peer.prototype._maybeReady = function () {
  var self = this
  self._debug('maybeReady pc %s channel %s', self._pcReady, self._channelReady)
  if (self.connected || self._connecting || !self._pcReady || !self._channelReady) return
  self._connecting = true

  self.getStats(function (err, items) {
    // Treat getStats error as non-fatal. It's not essential.
    if (err) items = []

    self._connecting = false
    self.connected = true

    var remoteCandidates = {}
    var localCandidates = {}
    var candidatePairs = {}

    items.forEach(function (item) {
      // TODO: Once all browsers support the hyphenated stats report types, remove
      // the non-hypenated ones
      if (item.type === 'remotecandidate' || item.type === 'remote-candidate') {
        remoteCandidates[item.id] = item
      }
      if (item.type === 'localcandidate' || item.type === 'local-candidate') {
        localCandidates[item.id] = item
      }
      if (item.type === 'candidatepair' || item.type === 'candidate-pair') {
        candidatePairs[item.id] = item
      }
    })

    items.forEach(function (item) {
      // Spec-compliant
      if (item.type === 'transport') {
        setSelectedCandidatePair(candidatePairs[item.selectedCandidatePairId])
      }

      // Old implementations
      if (
        (item.type === 'googCandidatePair' && item.googActiveConnection === 'true') ||
        ((item.type === 'candidatepair' || item.type === 'candidate-pair') && item.selected)
      ) {
        setSelectedCandidatePair(item)
      }
    })

    function setSelectedCandidatePair (selectedCandidatePair) {
      var local = localCandidates[selectedCandidatePair.localCandidateId]

      if (local && local.ip) {
        // Spec
        self.localAddress = local.ip
        self.localPort = Number(local.port)
      } else if (local && local.ipAddress) {
        // Firefox
        self.localAddress = local.ipAddress
        self.localPort = Number(local.portNumber)
      } else if (typeof selectedCandidatePair.googLocalAddress === 'string') {
        // TODO: remove this once Chrome 58 is released
        local = selectedCandidatePair.googLocalAddress.split(':')
        self.localAddress = local[0]
        self.localPort = Number(local[1])
      }

      var remote = remoteCandidates[selectedCandidatePair.remoteCandidateId]

      if (remote && remote.ip) {
        // Spec
        self.remoteAddress = remote.ip
        self.remotePort = Number(remote.port)
      } else if (remote && remote.ipAddress) {
        // Firefox
        self.remoteAddress = remote.ipAddress
        self.remotePort = Number(remote.portNumber)
      } else if (typeof selectedCandidatePair.googRemoteAddress === 'string') {
        // TODO: remove this once Chrome 58 is released
        remote = selectedCandidatePair.googRemoteAddress.split(':')
        self.remoteAddress = remote[0]
        self.remotePort = Number(remote[1])
      }
      self.remoteFamily = 'IPv4'

      self._debug(
        'connect local: %s:%s remote: %s:%s',
        self.localAddress, self.localPort, self.remoteAddress, self.remotePort
      )
    }

    if (self._chunk) {
      try {
        self.send(self._chunk)
      } catch (err) {
        return self._onError(err)
      }
      self._chunk = null
      self._debug('sent chunk from "write before connect"')

      var cb = self._cb
      self._cb = null
      cb(null)
    }

    // If `bufferedAmountLowThreshold` and 'onbufferedamountlow' are unsupported,
    // fallback to using setInterval to implement backpressure.
    if (typeof self._channel.bufferedAmountLowThreshold !== 'number') {
      self._interval = setInterval(function () { self._onInterval() }, 150)
      if (self._interval.unref) self._interval.unref()
    }

    self._debug('connect')
    self.emit('connect')
  })
}

Peer.prototype._onInterval = function () {
  if (!this._cb || !this._channel || this._channel.bufferedAmount > MAX_BUFFERED_AMOUNT) {
    return
  }
  this._onChannelBufferedAmountLow()
}

Peer.prototype._onSignalingStateChange = function () {
  var self = this
  if (self.destroyed) return
  self._debug('signalingStateChange %s', self._pc.signalingState)
  self.emit('signalingStateChange', self._pc.signalingState)
}

Peer.prototype._onIceCandidate = function (event) {
  var self = this
  if (self.destroyed) return
  if (event.candidate && self.trickle) {
    self.emit('signal', {
      candidate: {
        candidate: event.candidate.candidate,
        sdpMLineIndex: event.candidate.sdpMLineIndex,
        sdpMid: event.candidate.sdpMid
      }
    })
  } else if (!event.candidate) {
    self._iceComplete = true
    self.emit('_iceComplete')
  }
}

Peer.prototype._onChannelMessage = function (event) {
  var self = this
  if (self.destroyed) return
  var data = event.data
  if (data instanceof ArrayBuffer) data = new Buffer(data)
  self.push(data)
}

Peer.prototype._onChannelBufferedAmountLow = function () {
  var self = this
  if (self.destroyed || !self._cb) return
  self._debug('ending backpressure: bufferedAmount %d', self._channel.bufferedAmount)
  var cb = self._cb
  self._cb = null
  cb(null)
}

Peer.prototype._onChannelOpen = function () {
  var self = this
  if (self.connected || self.destroyed) return
  self._debug('on channel open')
  self._channelReady = true
  self._maybeReady()
}

Peer.prototype._onChannelClose = function () {
  var self = this
  if (self.destroyed) return
  self._debug('on channel close')
  self._destroy()
}

Peer.prototype._onAddStream = function (event) {
  var self = this
  if (self.destroyed) return
  self._debug('on add stream')
  self.emit('stream', event.stream)
}

Peer.prototype._onTrack = function (event) {
  var self = this
  if (self.destroyed) return
  self._debug('on track')
  var id = event.streams[0].id
  if (self._previousStreams.indexOf(id) !== -1) return // Only fire one 'stream' event, even though there may be multiple tracks per stream
  self._previousStreams.push(id)
  self.emit('stream', event.streams[0])
}

Peer.prototype._onError = function (err) {
  var self = this
  if (self.destroyed) return
  self._debug('error %s', err.message || err)
  self._destroy(err)
}

Peer.prototype._debug = function () {
  var self = this
  var args = [].slice.call(arguments)
  args[0] = '[' + self._id + '] ' + args[0]
  debug.apply(null, args)
}

// Transform constraints objects into the new format (unless Chromium)
// TODO: This can be removed when Chromium supports the new format
Peer.prototype._transformConstraints = function (constraints) {
  var self = this

  if (Object.keys(constraints).length === 0) {
    return constraints
  }

  if ((constraints.mandatory || constraints.optional) && !self._isChromium) {
    // convert to new format

    // Merge mandatory and optional objects, prioritizing mandatory
    var newConstraints = Object.assign({}, constraints.optional, constraints.mandatory)

    // fix casing
    if (newConstraints.OfferToReceiveVideo !== undefined) {
      newConstraints.offerToReceiveVideo = newConstraints.OfferToReceiveVideo
      delete newConstraints['OfferToReceiveVideo']
    }

    if (newConstraints.OfferToReceiveAudio !== undefined) {
      newConstraints.offerToReceiveAudio = newConstraints.OfferToReceiveAudio
      delete newConstraints['OfferToReceiveAudio']
    }

    return newConstraints
  } else if (!constraints.mandatory && !constraints.optional && self._isChromium) {
    // convert to old format

    // fix casing
    if (constraints.offerToReceiveVideo !== undefined) {
      constraints.OfferToReceiveVideo = constraints.offerToReceiveVideo
      delete constraints['offerToReceiveVideo']
    }

    if (constraints.offerToReceiveAudio !== undefined) {
      constraints.OfferToReceiveAudio = constraints.offerToReceiveAudio
      delete constraints['offerToReceiveAudio']
    }

    return {
      mandatory: constraints // NOTE: All constraints are upgraded to mandatory
    }
  }

  return constraints
}

function noop () {}

}).call(this,require("buffer").Buffer)
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zaW1wbGUtcGVlci9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gUGVlclxuXG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdzaW1wbGUtcGVlcicpXG52YXIgZ2V0QnJvd3NlclJUQyA9IHJlcXVpcmUoJ2dldC1icm93c2VyLXJ0YycpXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpXG52YXIgcmFuZG9tYnl0ZXMgPSByZXF1aXJlKCdyYW5kb21ieXRlcycpXG52YXIgc3RyZWFtID0gcmVxdWlyZSgncmVhZGFibGUtc3RyZWFtJylcblxudmFyIE1BWF9CVUZGRVJFRF9BTU9VTlQgPSA2NCAqIDEwMjRcblxuaW5oZXJpdHMoUGVlciwgc3RyZWFtLkR1cGxleClcblxuLyoqXG4gKiBXZWJSVEMgcGVlciBjb25uZWN0aW9uLiBTYW1lIEFQSSBhcyBub2RlIGNvcmUgYG5ldC5Tb2NrZXRgLCBwbHVzIGEgZmV3IGV4dHJhIG1ldGhvZHMuXG4gKiBEdXBsZXggc3RyZWFtLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqL1xuZnVuY3Rpb24gUGVlciAob3B0cykge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgaWYgKCEoc2VsZiBpbnN0YW5jZW9mIFBlZXIpKSByZXR1cm4gbmV3IFBlZXIob3B0cylcblxuICBzZWxmLl9pZCA9IHJhbmRvbWJ5dGVzKDQpLnRvU3RyaW5nKCdoZXgnKS5zbGljZSgwLCA3KVxuICBzZWxmLl9kZWJ1ZygnbmV3IHBlZXIgJW8nLCBvcHRzKVxuXG4gIG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBhbGxvd0hhbGZPcGVuOiBmYWxzZVxuICB9LCBvcHRzKVxuXG4gIHN0cmVhbS5EdXBsZXguY2FsbChzZWxmLCBvcHRzKVxuXG4gIHNlbGYuY2hhbm5lbE5hbWUgPSBvcHRzLmluaXRpYXRvclxuICAgID8gb3B0cy5jaGFubmVsTmFtZSB8fCByYW5kb21ieXRlcygyMCkudG9TdHJpbmcoJ2hleCcpXG4gICAgOiBudWxsXG5cbiAgLy8gTmVlZGVkIGJ5IF90cmFuc2Zvcm1Db25zdHJhaW50cywgc28gc2V0IHRoaXMgZWFybHlcbiAgc2VsZi5faXNDaHJvbWl1bSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICEhd2luZG93LndlYmtpdFJUQ1BlZXJDb25uZWN0aW9uXG5cbiAgc2VsZi5pbml0aWF0b3IgPSBvcHRzLmluaXRpYXRvciB8fCBmYWxzZVxuICBzZWxmLmNoYW5uZWxDb25maWcgPSBvcHRzLmNoYW5uZWxDb25maWcgfHwgUGVlci5jaGFubmVsQ29uZmlnXG4gIHNlbGYuY29uZmlnID0gb3B0cy5jb25maWcgfHwgUGVlci5jb25maWdcbiAgc2VsZi5jb25zdHJhaW50cyA9IHNlbGYuX3RyYW5zZm9ybUNvbnN0cmFpbnRzKG9wdHMuY29uc3RyYWludHMgfHwgUGVlci5jb25zdHJhaW50cylcbiAgc2VsZi5vZmZlckNvbnN0cmFpbnRzID0gc2VsZi5fdHJhbnNmb3JtQ29uc3RyYWludHMob3B0cy5vZmZlckNvbnN0cmFpbnRzIHx8IHt9KVxuICBzZWxmLmFuc3dlckNvbnN0cmFpbnRzID0gc2VsZi5fdHJhbnNmb3JtQ29uc3RyYWludHMob3B0cy5hbnN3ZXJDb25zdHJhaW50cyB8fCB7fSlcbiAgc2VsZi5yZWNvbm5lY3RUaW1lciA9IG9wdHMucmVjb25uZWN0VGltZXIgfHwgZmFsc2VcbiAgc2VsZi5zZHBUcmFuc2Zvcm0gPSBvcHRzLnNkcFRyYW5zZm9ybSB8fCBmdW5jdGlvbiAoc2RwKSB7IHJldHVybiBzZHAgfVxuICBzZWxmLnN0cmVhbSA9IG9wdHMuc3RyZWFtIHx8IGZhbHNlXG4gIHNlbGYudHJpY2tsZSA9IG9wdHMudHJpY2tsZSAhPT0gdW5kZWZpbmVkID8gb3B0cy50cmlja2xlIDogdHJ1ZVxuXG4gIHNlbGYuZGVzdHJveWVkID0gZmFsc2VcbiAgc2VsZi5jb25uZWN0ZWQgPSBmYWxzZVxuXG4gIHNlbGYucmVtb3RlQWRkcmVzcyA9IHVuZGVmaW5lZFxuICBzZWxmLnJlbW90ZUZhbWlseSA9IHVuZGVmaW5lZFxuICBzZWxmLnJlbW90ZVBvcnQgPSB1bmRlZmluZWRcbiAgc2VsZi5sb2NhbEFkZHJlc3MgPSB1bmRlZmluZWRcbiAgc2VsZi5sb2NhbFBvcnQgPSB1bmRlZmluZWRcblxuICBzZWxmLl93cnRjID0gKG9wdHMud3J0YyAmJiB0eXBlb2Ygb3B0cy53cnRjID09PSAnb2JqZWN0JylcbiAgICA/IG9wdHMud3J0Y1xuICAgIDogZ2V0QnJvd3NlclJUQygpXG5cbiAgaWYgKCFzZWxmLl93cnRjKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIFdlYlJUQyBzdXBwb3J0OiBTcGVjaWZ5IGBvcHRzLndydGNgIG9wdGlvbiBpbiB0aGlzIGVudmlyb25tZW50JylcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBXZWJSVEMgc3VwcG9ydDogTm90IGEgc3VwcG9ydGVkIGJyb3dzZXInKVxuICAgIH1cbiAgfVxuXG4gIHNlbGYuX3BjUmVhZHkgPSBmYWxzZVxuICBzZWxmLl9jaGFubmVsUmVhZHkgPSBmYWxzZVxuICBzZWxmLl9pY2VDb21wbGV0ZSA9IGZhbHNlIC8vIGljZSBjYW5kaWRhdGUgdHJpY2tsZSBkb25lIChnb3QgbnVsbCBjYW5kaWRhdGUpXG4gIHNlbGYuX2NoYW5uZWwgPSBudWxsXG4gIHNlbGYuX3BlbmRpbmdDYW5kaWRhdGVzID0gW11cbiAgc2VsZi5fcHJldmlvdXNTdHJlYW1zID0gW11cblxuICBzZWxmLl9jaHVuayA9IG51bGxcbiAgc2VsZi5fY2IgPSBudWxsXG4gIHNlbGYuX2ludGVydmFsID0gbnVsbFxuICBzZWxmLl9yZWNvbm5lY3RUaW1lb3V0ID0gbnVsbFxuXG4gIHNlbGYuX3BjID0gbmV3IChzZWxmLl93cnRjLlJUQ1BlZXJDb25uZWN0aW9uKShzZWxmLmNvbmZpZywgc2VsZi5jb25zdHJhaW50cylcblxuICAvLyBXZSBwcmVmZXIgZmVhdHVyZSBkZXRlY3Rpb24gd2hlbmV2ZXIgcG9zc2libGUsIGJ1dCBzb21ldGltZXMgdGhhdCdzIG5vdFxuICAvLyBwb3NzaWJsZSBmb3IgY2VydGFpbiBpbXBsZW1lbnRhdGlvbnMuXG4gIHNlbGYuX2lzV3J0YyA9IEFycmF5LmlzQXJyYXkoc2VsZi5fcGMuUlRDSWNlQ29ubmVjdGlvblN0YXRlcylcbiAgc2VsZi5faXNSZWFjdE5hdGl2ZVdlYnJ0YyA9IHR5cGVvZiBzZWxmLl9wYy5fcGVlckNvbm5lY3Rpb25JZCA9PT0gJ251bWJlcidcblxuICBzZWxmLl9wYy5vbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLl9vbkljZUNvbm5lY3Rpb25TdGF0ZUNoYW5nZSgpXG4gIH1cbiAgc2VsZi5fcGMub25zaWduYWxpbmdzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLl9vblNpZ25hbGluZ1N0YXRlQ2hhbmdlKClcbiAgfVxuICBzZWxmLl9wYy5vbmljZWNhbmRpZGF0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHNlbGYuX29uSWNlQ2FuZGlkYXRlKGV2ZW50KVxuICB9XG5cbiAgaWYgKHNlbGYuaW5pdGlhdG9yKSB7XG4gICAgdmFyIGNyZWF0ZWRPZmZlciA9IGZhbHNlXG4gICAgc2VsZi5fcGMub25uZWdvdGlhdGlvbm5lZWRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghY3JlYXRlZE9mZmVyKSBzZWxmLl9jcmVhdGVPZmZlcigpXG4gICAgICBjcmVhdGVkT2ZmZXIgPSB0cnVlXG4gICAgfVxuXG4gICAgc2VsZi5fc2V0dXBEYXRhKHtcbiAgICAgIGNoYW5uZWw6IHNlbGYuX3BjLmNyZWF0ZURhdGFDaGFubmVsKHNlbGYuY2hhbm5lbE5hbWUsIHNlbGYuY2hhbm5lbENvbmZpZylcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIHNlbGYuX3BjLm9uZGF0YWNoYW5uZWwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHNlbGYuX3NldHVwRGF0YShldmVudClcbiAgICB9XG4gIH1cblxuICBpZiAoJ2FkZFRyYWNrJyBpbiBzZWxmLl9wYykge1xuICAgIC8vIFdlYlJUQyBTcGVjLCBGaXJlZm94XG4gICAgaWYgKHNlbGYuc3RyZWFtKSB7XG4gICAgICBzZWxmLnN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKGZ1bmN0aW9uICh0cmFjaykge1xuICAgICAgICBzZWxmLl9wYy5hZGRUcmFjayh0cmFjaywgc2VsZi5zdHJlYW0pXG4gICAgICB9KVxuICAgIH1cbiAgICBzZWxmLl9wYy5vbnRyYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBzZWxmLl9vblRyYWNrKGV2ZW50KVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBDaHJvbWUsIGV0Yy4gVGhpcyBjYW4gYmUgcmVtb3ZlZCBvbmNlIGFsbCBicm93c2VycyBzdXBwb3J0IGBvbnRyYWNrYFxuICAgIGlmIChzZWxmLnN0cmVhbSkgc2VsZi5fcGMuYWRkU3RyZWFtKHNlbGYuc3RyZWFtKVxuICAgIHNlbGYuX3BjLm9uYWRkc3RyZWFtID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBzZWxmLl9vbkFkZFN0cmVhbShldmVudClcbiAgICB9XG4gIH1cblxuICAvLyBIQUNLOiB3cnRjIGRvZXNuJ3QgZmlyZSB0aGUgJ25lZ290aW9ubmVlZGVkJyBldmVudFxuICBpZiAoc2VsZi5pbml0aWF0b3IgJiYgc2VsZi5faXNXcnRjKSB7XG4gICAgc2VsZi5fcGMub25uZWdvdGlhdGlvbm5lZWRlZCgpXG4gIH1cblxuICBzZWxmLl9vbkZpbmlzaEJvdW5kID0gZnVuY3Rpb24gKCkge1xuICAgIHNlbGYuX29uRmluaXNoKClcbiAgfVxuICBzZWxmLm9uY2UoJ2ZpbmlzaCcsIHNlbGYuX29uRmluaXNoQm91bmQpXG59XG5cblBlZXIuV0VCUlRDX1NVUFBPUlQgPSAhIWdldEJyb3dzZXJSVEMoKVxuXG4vKipcbiAqIEV4cG9zZSBjb25maWcsIGNvbnN0cmFpbnRzLCBhbmQgZGF0YSBjaGFubmVsIGNvbmZpZyBmb3Igb3ZlcnJpZGluZyBhbGwgUGVlclxuICogaW5zdGFuY2VzLiBPdGhlcndpc2UsIGp1c3Qgc2V0IG9wdHMuY29uZmlnLCBvcHRzLmNvbnN0cmFpbnRzLCBvciBvcHRzLmNoYW5uZWxDb25maWdcbiAqIHdoZW4gY29uc3RydWN0aW5nIGEgUGVlci5cbiAqL1xuUGVlci5jb25maWcgPSB7XG4gIGljZVNlcnZlcnM6IFtcbiAgICB7XG4gICAgICB1cmxzOiAnc3R1bjpzdHVuLmwuZ29vZ2xlLmNvbToxOTMwMidcbiAgICB9LFxuICAgIHtcbiAgICAgIHVybHM6ICdzdHVuOmdsb2JhbC5zdHVuLnR3aWxpby5jb206MzQ3OD90cmFuc3BvcnQ9dWRwJ1xuICAgIH1cbiAgXVxufVxuUGVlci5jb25zdHJhaW50cyA9IHt9XG5QZWVyLmNoYW5uZWxDb25maWcgPSB7fVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUGVlci5wcm90b3R5cGUsICdidWZmZXJTaXplJywge1xuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICByZXR1cm4gKHNlbGYuX2NoYW5uZWwgJiYgc2VsZi5fY2hhbm5lbC5idWZmZXJlZEFtb3VudCkgfHwgMFxuICB9XG59KVxuXG5QZWVyLnByb3RvdHlwZS5hZGRyZXNzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgcmV0dXJuIHsgcG9ydDogc2VsZi5sb2NhbFBvcnQsIGZhbWlseTogJ0lQdjQnLCBhZGRyZXNzOiBzZWxmLmxvY2FsQWRkcmVzcyB9XG59XG5cblBlZXIucHJvdG90eXBlLnNpZ25hbCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICBpZiAoc2VsZi5kZXN0cm95ZWQpIHRocm93IG5ldyBFcnJvcignY2Fubm90IHNpZ25hbCBhZnRlciBwZWVyIGlzIGRlc3Ryb3llZCcpXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICB0cnkge1xuICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGRhdGEgPSB7fVxuICAgIH1cbiAgfVxuICBzZWxmLl9kZWJ1Zygnc2lnbmFsKCknKVxuXG4gIGlmIChkYXRhLmNhbmRpZGF0ZSkge1xuICAgIGlmIChzZWxmLl9wYy5yZW1vdGVEZXNjcmlwdGlvbikgc2VsZi5fYWRkSWNlQ2FuZGlkYXRlKGRhdGEuY2FuZGlkYXRlKVxuICAgIGVsc2Ugc2VsZi5fcGVuZGluZ0NhbmRpZGF0ZXMucHVzaChkYXRhLmNhbmRpZGF0ZSlcbiAgfVxuICBpZiAoZGF0YS5zZHApIHtcbiAgICBzZWxmLl9wYy5zZXRSZW1vdGVEZXNjcmlwdGlvbihuZXcgKHNlbGYuX3dydGMuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uKShkYXRhKSwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbGYuZGVzdHJveWVkKSByZXR1cm5cblxuICAgICAgc2VsZi5fcGVuZGluZ0NhbmRpZGF0ZXMuZm9yRWFjaChmdW5jdGlvbiAoY2FuZGlkYXRlKSB7XG4gICAgICAgIHNlbGYuX2FkZEljZUNhbmRpZGF0ZShjYW5kaWRhdGUpXG4gICAgICB9KVxuICAgICAgc2VsZi5fcGVuZGluZ0NhbmRpZGF0ZXMgPSBbXVxuXG4gICAgICBpZiAoc2VsZi5fcGMucmVtb3RlRGVzY3JpcHRpb24udHlwZSA9PT0gJ29mZmVyJykgc2VsZi5fY3JlYXRlQW5zd2VyKClcbiAgICB9LCBmdW5jdGlvbiAoZXJyKSB7IHNlbGYuX29uRXJyb3IoZXJyKSB9KVxuICB9XG4gIGlmICghZGF0YS5zZHAgJiYgIWRhdGEuY2FuZGlkYXRlKSB7XG4gICAgc2VsZi5fZGVzdHJveShuZXcgRXJyb3IoJ3NpZ25hbCgpIGNhbGxlZCB3aXRoIGludmFsaWQgc2lnbmFsIGRhdGEnKSlcbiAgfVxufVxuXG5QZWVyLnByb3RvdHlwZS5fYWRkSWNlQ2FuZGlkYXRlID0gZnVuY3Rpb24gKGNhbmRpZGF0ZSkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdHJ5IHtcbiAgICBzZWxmLl9wYy5hZGRJY2VDYW5kaWRhdGUoXG4gICAgICBuZXcgc2VsZi5fd3J0Yy5SVENJY2VDYW5kaWRhdGUoY2FuZGlkYXRlKSxcbiAgICAgIG5vb3AsXG4gICAgICBmdW5jdGlvbiAoZXJyKSB7IHNlbGYuX29uRXJyb3IoZXJyKSB9XG4gICAgKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBzZWxmLl9kZXN0cm95KG5ldyBFcnJvcignZXJyb3IgYWRkaW5nIGNhbmRpZGF0ZTogJyArIGVyci5tZXNzYWdlKSlcbiAgfVxufVxuXG4vKipcbiAqIFNlbmQgdGV4dC9iaW5hcnkgZGF0YSB0byB0aGUgcmVtb3RlIHBlZXIuXG4gKiBAcGFyYW0ge1R5cGVkQXJyYXlWaWV3fEFycmF5QnVmZmVyfEJ1ZmZlcnxzdHJpbmd8QmxvYnxPYmplY3R9IGNodW5rXG4gKi9cblBlZXIucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoY2h1bmspIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgLy8gSEFDSzogYHdydGNgIG1vZHVsZSBjcmFzaGVzIG9uIE5vZGUuanMgQnVmZmVyLCBzbyBjb252ZXJ0IHRvIFVpbnQ4QXJyYXlcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL3NpbXBsZS1wZWVyL2lzc3Vlcy82MFxuICBpZiAoc2VsZi5faXNXcnRjICYmIEJ1ZmZlci5pc0J1ZmZlcihjaHVuaykpIHtcbiAgICBjaHVuayA9IG5ldyBVaW50OEFycmF5KGNodW5rKVxuICB9XG5cbiAgc2VsZi5fY2hhbm5lbC5zZW5kKGNodW5rKVxufVxuXG5QZWVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKG9uY2xvc2UpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHNlbGYuX2Rlc3Ryb3kobnVsbCwgb25jbG9zZSlcbn1cblxuUGVlci5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBmdW5jdGlvbiAoZXJyLCBvbmNsb3NlKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICBpZiAoc2VsZi5kZXN0cm95ZWQpIHJldHVyblxuICBpZiAob25jbG9zZSkgc2VsZi5vbmNlKCdjbG9zZScsIG9uY2xvc2UpXG5cbiAgc2VsZi5fZGVidWcoJ2Rlc3Ryb3kgKGVycm9yOiAlcyknLCBlcnIgJiYgZXJyLm1lc3NhZ2UpXG5cbiAgc2VsZi5yZWFkYWJsZSA9IHNlbGYud3JpdGFibGUgPSBmYWxzZVxuXG4gIGlmICghc2VsZi5fcmVhZGFibGVTdGF0ZS5lbmRlZCkgc2VsZi5wdXNoKG51bGwpXG4gIGlmICghc2VsZi5fd3JpdGFibGVTdGF0ZS5maW5pc2hlZCkgc2VsZi5lbmQoKVxuXG4gIHNlbGYuZGVzdHJveWVkID0gdHJ1ZVxuICBzZWxmLmNvbm5lY3RlZCA9IGZhbHNlXG4gIHNlbGYuX3BjUmVhZHkgPSBmYWxzZVxuICBzZWxmLl9jaGFubmVsUmVhZHkgPSBmYWxzZVxuICBzZWxmLl9wcmV2aW91c1N0cmVhbXMgPSBudWxsXG5cbiAgY2xlYXJJbnRlcnZhbChzZWxmLl9pbnRlcnZhbClcbiAgY2xlYXJUaW1lb3V0KHNlbGYuX3JlY29ubmVjdFRpbWVvdXQpXG4gIHNlbGYuX2ludGVydmFsID0gbnVsbFxuICBzZWxmLl9yZWNvbm5lY3RUaW1lb3V0ID0gbnVsbFxuICBzZWxmLl9jaHVuayA9IG51bGxcbiAgc2VsZi5fY2IgPSBudWxsXG5cbiAgaWYgKHNlbGYuX29uRmluaXNoQm91bmQpIHNlbGYucmVtb3ZlTGlzdGVuZXIoJ2ZpbmlzaCcsIHNlbGYuX29uRmluaXNoQm91bmQpXG4gIHNlbGYuX29uRmluaXNoQm91bmQgPSBudWxsXG5cbiAgaWYgKHNlbGYuX3BjKSB7XG4gICAgdHJ5IHtcbiAgICAgIHNlbGYuX3BjLmNsb3NlKClcbiAgICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgICBzZWxmLl9wYy5vbmljZWNvbm5lY3Rpb25zdGF0ZWNoYW5nZSA9IG51bGxcbiAgICBzZWxmLl9wYy5vbnNpZ25hbGluZ3N0YXRlY2hhbmdlID0gbnVsbFxuICAgIHNlbGYuX3BjLm9uaWNlY2FuZGlkYXRlID0gbnVsbFxuICAgIGlmICgnYWRkVHJhY2snIGluIHNlbGYuX3BjKSB7XG4gICAgICBzZWxmLl9wYy5vbnRyYWNrID0gbnVsbFxuICAgIH0gZWxzZSB7XG4gICAgICBzZWxmLl9wYy5vbmFkZHN0cmVhbSA9IG51bGxcbiAgICB9XG4gICAgc2VsZi5fcGMub25uZWdvdGlhdGlvbm5lZWRlZCA9IG51bGxcbiAgICBzZWxmLl9wYy5vbmRhdGFjaGFubmVsID0gbnVsbFxuICB9XG5cbiAgaWYgKHNlbGYuX2NoYW5uZWwpIHtcbiAgICB0cnkge1xuICAgICAgc2VsZi5fY2hhbm5lbC5jbG9zZSgpXG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuXG4gICAgc2VsZi5fY2hhbm5lbC5vbm1lc3NhZ2UgPSBudWxsXG4gICAgc2VsZi5fY2hhbm5lbC5vbm9wZW4gPSBudWxsXG4gICAgc2VsZi5fY2hhbm5lbC5vbmNsb3NlID0gbnVsbFxuICB9XG4gIHNlbGYuX3BjID0gbnVsbFxuICBzZWxmLl9jaGFubmVsID0gbnVsbFxuXG4gIGlmIChlcnIpIHNlbGYuZW1pdCgnZXJyb3InLCBlcnIpXG4gIHNlbGYuZW1pdCgnY2xvc2UnKVxufVxuXG5QZWVyLnByb3RvdHlwZS5fc2V0dXBEYXRhID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICBzZWxmLl9jaGFubmVsID0gZXZlbnQuY2hhbm5lbFxuICBzZWxmLl9jaGFubmVsLmJpbmFyeVR5cGUgPSAnYXJyYXlidWZmZXInXG5cbiAgaWYgKHR5cGVvZiBzZWxmLl9jaGFubmVsLmJ1ZmZlcmVkQW1vdW50TG93VGhyZXNob2xkID09PSAnbnVtYmVyJykge1xuICAgIHNlbGYuX2NoYW5uZWwuYnVmZmVyZWRBbW91bnRMb3dUaHJlc2hvbGQgPSBNQVhfQlVGRkVSRURfQU1PVU5UXG4gIH1cblxuICBzZWxmLmNoYW5uZWxOYW1lID0gc2VsZi5fY2hhbm5lbC5sYWJlbFxuXG4gIHNlbGYuX2NoYW5uZWwub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgc2VsZi5fb25DaGFubmVsTWVzc2FnZShldmVudClcbiAgfVxuICBzZWxmLl9jaGFubmVsLm9uYnVmZmVyZWRhbW91bnRsb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5fb25DaGFubmVsQnVmZmVyZWRBbW91bnRMb3coKVxuICB9XG4gIHNlbGYuX2NoYW5uZWwub25vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgIHNlbGYuX29uQ2hhbm5lbE9wZW4oKVxuICB9XG4gIHNlbGYuX2NoYW5uZWwub25jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLl9vbkNoYW5uZWxDbG9zZSgpXG4gIH1cbn1cblxuUGVlci5wcm90b3R5cGUuX3JlYWQgPSBmdW5jdGlvbiAoKSB7fVxuXG5QZWVyLnByb3RvdHlwZS5fd3JpdGUgPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nLCBjYikge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgaWYgKHNlbGYuZGVzdHJveWVkKSByZXR1cm4gY2IobmV3IEVycm9yKCdjYW5ub3Qgd3JpdGUgYWZ0ZXIgcGVlciBpcyBkZXN0cm95ZWQnKSlcblxuICBpZiAoc2VsZi5jb25uZWN0ZWQpIHtcbiAgICB0cnkge1xuICAgICAgc2VsZi5zZW5kKGNodW5rKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHNlbGYuX29uRXJyb3IoZXJyKVxuICAgIH1cbiAgICBpZiAoc2VsZi5fY2hhbm5lbC5idWZmZXJlZEFtb3VudCA+IE1BWF9CVUZGRVJFRF9BTU9VTlQpIHtcbiAgICAgIHNlbGYuX2RlYnVnKCdzdGFydCBiYWNrcHJlc3N1cmU6IGJ1ZmZlcmVkQW1vdW50ICVkJywgc2VsZi5fY2hhbm5lbC5idWZmZXJlZEFtb3VudClcbiAgICAgIHNlbGYuX2NiID0gY2JcbiAgICB9IGVsc2Uge1xuICAgICAgY2IobnVsbClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc2VsZi5fZGVidWcoJ3dyaXRlIGJlZm9yZSBjb25uZWN0JylcbiAgICBzZWxmLl9jaHVuayA9IGNodW5rXG4gICAgc2VsZi5fY2IgPSBjYlxuICB9XG59XG5cbi8vIFdoZW4gc3RyZWFtIGZpbmlzaGVzIHdyaXRpbmcsIGNsb3NlIHNvY2tldC4gSGFsZiBvcGVuIGNvbm5lY3Rpb25zIGFyZSBub3Rcbi8vIHN1cHBvcnRlZC5cblBlZXIucHJvdG90eXBlLl9vbkZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIGlmIChzZWxmLmRlc3Ryb3llZCkgcmV0dXJuXG5cbiAgaWYgKHNlbGYuY29ubmVjdGVkKSB7XG4gICAgZGVzdHJveVNvb24oKVxuICB9IGVsc2Uge1xuICAgIHNlbGYub25jZSgnY29ubmVjdCcsIGRlc3Ryb3lTb29uKVxuICB9XG5cbiAgLy8gV2FpdCBhIGJpdCBiZWZvcmUgZGVzdHJveWluZyBzbyB0aGUgc29ja2V0IGZsdXNoZXMuXG4gIC8vIFRPRE86IGlzIHRoZXJlIGEgbW9yZSByZWxpYWJsZSB3YXkgdG8gYWNjb21wbGlzaCB0aGlzP1xuICBmdW5jdGlvbiBkZXN0cm95U29vbiAoKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLl9kZXN0cm95KClcbiAgICB9LCAxMDApXG4gIH1cbn1cblxuUGVlci5wcm90b3R5cGUuX2NyZWF0ZU9mZmVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgaWYgKHNlbGYuZGVzdHJveWVkKSByZXR1cm5cblxuICBzZWxmLl9wYy5jcmVhdGVPZmZlcihmdW5jdGlvbiAob2ZmZXIpIHtcbiAgICBpZiAoc2VsZi5kZXN0cm95ZWQpIHJldHVyblxuICAgIG9mZmVyLnNkcCA9IHNlbGYuc2RwVHJhbnNmb3JtKG9mZmVyLnNkcClcbiAgICBzZWxmLl9wYy5zZXRMb2NhbERlc2NyaXB0aW9uKG9mZmVyLCBub29wLCBmdW5jdGlvbiAoZXJyKSB7IHNlbGYuX29uRXJyb3IoZXJyKSB9KVxuICAgIHZhciBzZW5kT2ZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2lnbmFsID0gc2VsZi5fcGMubG9jYWxEZXNjcmlwdGlvbiB8fCBvZmZlclxuICAgICAgc2VsZi5fZGVidWcoJ3NpZ25hbCcpXG4gICAgICBzZWxmLmVtaXQoJ3NpZ25hbCcsIHtcbiAgICAgICAgdHlwZTogc2lnbmFsLnR5cGUsXG4gICAgICAgIHNkcDogc2lnbmFsLnNkcFxuICAgICAgfSlcbiAgICB9XG4gICAgaWYgKHNlbGYudHJpY2tsZSB8fCBzZWxmLl9pY2VDb21wbGV0ZSkgc2VuZE9mZmVyKClcbiAgICBlbHNlIHNlbGYub25jZSgnX2ljZUNvbXBsZXRlJywgc2VuZE9mZmVyKSAvLyB3YWl0IGZvciBjYW5kaWRhdGVzXG4gIH0sIGZ1bmN0aW9uIChlcnIpIHsgc2VsZi5fb25FcnJvcihlcnIpIH0sIHNlbGYub2ZmZXJDb25zdHJhaW50cylcbn1cblxuUGVlci5wcm90b3R5cGUuX2NyZWF0ZUFuc3dlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIGlmIChzZWxmLmRlc3Ryb3llZCkgcmV0dXJuXG5cbiAgc2VsZi5fcGMuY3JlYXRlQW5zd2VyKGZ1bmN0aW9uIChhbnN3ZXIpIHtcbiAgICBpZiAoc2VsZi5kZXN0cm95ZWQpIHJldHVyblxuICAgIGFuc3dlci5zZHAgPSBzZWxmLnNkcFRyYW5zZm9ybShhbnN3ZXIuc2RwKVxuICAgIHNlbGYuX3BjLnNldExvY2FsRGVzY3JpcHRpb24oYW5zd2VyLCBub29wLCBmdW5jdGlvbiAoZXJyKSB7IHNlbGYuX29uRXJyb3IoZXJyKSB9KVxuICAgIGlmIChzZWxmLnRyaWNrbGUgfHwgc2VsZi5faWNlQ29tcGxldGUpIHNlbmRBbnN3ZXIoKVxuICAgIGVsc2Ugc2VsZi5vbmNlKCdfaWNlQ29tcGxldGUnLCBzZW5kQW5zd2VyKVxuXG4gICAgZnVuY3Rpb24gc2VuZEFuc3dlciAoKSB7XG4gICAgICB2YXIgc2lnbmFsID0gc2VsZi5fcGMubG9jYWxEZXNjcmlwdGlvbiB8fCBhbnN3ZXJcbiAgICAgIHNlbGYuX2RlYnVnKCdzaWduYWwnKVxuICAgICAgc2VsZi5lbWl0KCdzaWduYWwnLCB7XG4gICAgICAgIHR5cGU6IHNpZ25hbC50eXBlLFxuICAgICAgICBzZHA6IHNpZ25hbC5zZHBcbiAgICAgIH0pXG4gICAgfVxuICB9LCBmdW5jdGlvbiAoZXJyKSB7IHNlbGYuX29uRXJyb3IoZXJyKSB9LCBzZWxmLmFuc3dlckNvbnN0cmFpbnRzKVxufVxuXG5QZWVyLnByb3RvdHlwZS5fb25JY2VDb25uZWN0aW9uU3RhdGVDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICBpZiAoc2VsZi5kZXN0cm95ZWQpIHJldHVyblxuICB2YXIgaWNlR2F0aGVyaW5nU3RhdGUgPSBzZWxmLl9wYy5pY2VHYXRoZXJpbmdTdGF0ZVxuICB2YXIgaWNlQ29ubmVjdGlvblN0YXRlID0gc2VsZi5fcGMuaWNlQ29ubmVjdGlvblN0YXRlXG4gIHNlbGYuX2RlYnVnKCdpY2VDb25uZWN0aW9uU3RhdGVDaGFuZ2UgJXMgJXMnLCBpY2VHYXRoZXJpbmdTdGF0ZSwgaWNlQ29ubmVjdGlvblN0YXRlKVxuICBzZWxmLmVtaXQoJ2ljZUNvbm5lY3Rpb25TdGF0ZUNoYW5nZScsIGljZUdhdGhlcmluZ1N0YXRlLCBpY2VDb25uZWN0aW9uU3RhdGUpXG4gIGlmIChpY2VDb25uZWN0aW9uU3RhdGUgPT09ICdjb25uZWN0ZWQnIHx8IGljZUNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2NvbXBsZXRlZCcpIHtcbiAgICBjbGVhclRpbWVvdXQoc2VsZi5fcmVjb25uZWN0VGltZW91dClcbiAgICBzZWxmLl9wY1JlYWR5ID0gdHJ1ZVxuICAgIHNlbGYuX21heWJlUmVhZHkoKVxuICB9XG4gIGlmIChpY2VDb25uZWN0aW9uU3RhdGUgPT09ICdkaXNjb25uZWN0ZWQnKSB7XG4gICAgaWYgKHNlbGYucmVjb25uZWN0VGltZXIpIHtcbiAgICAgIC8vIElmIHVzZXIgaGFzIHNldCBgb3B0LnJlY29ubmVjdFRpbWVyYCwgYWxsb3cgdGltZSBmb3IgSUNFIHRvIGF0dGVtcHQgYSByZWNvbm5lY3RcbiAgICAgIGNsZWFyVGltZW91dChzZWxmLl9yZWNvbm5lY3RUaW1lb3V0KVxuICAgICAgc2VsZi5fcmVjb25uZWN0VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLl9kZXN0cm95KClcbiAgICAgIH0sIHNlbGYucmVjb25uZWN0VGltZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuX2Rlc3Ryb3koKVxuICAgIH1cbiAgfVxuICBpZiAoaWNlQ29ubmVjdGlvblN0YXRlID09PSAnZmFpbGVkJykge1xuICAgIHNlbGYuX2Rlc3Ryb3kobmV3IEVycm9yKCdJY2UgY29ubmVjdGlvbiBmYWlsZWQuJykpXG4gIH1cbiAgaWYgKGljZUNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2Nsb3NlZCcpIHtcbiAgICBzZWxmLl9kZXN0cm95KClcbiAgfVxufVxuXG5QZWVyLnByb3RvdHlwZS5nZXRTdGF0cyA9IGZ1bmN0aW9uIChjYikge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICAvLyBQcm9taXNlLWJhc2VkIGdldFN0YXRzKCkgKHN0YW5kYXJkKVxuICBpZiAoc2VsZi5fcGMuZ2V0U3RhdHMubGVuZ3RoID09PSAwKSB7XG4gICAgc2VsZi5fcGMuZ2V0U3RhdHMoKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIHZhciByZXBvcnRzID0gW11cbiAgICAgIHJlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZXBvcnQpIHtcbiAgICAgICAgcmVwb3J0cy5wdXNoKHJlcG9ydClcbiAgICAgIH0pXG4gICAgICBjYihudWxsLCByZXBvcnRzKVxuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHsgY2IoZXJyKSB9KVxuXG4gIC8vIFR3by1wYXJhbWV0ZXIgY2FsbGJhY2stYmFzZWQgZ2V0U3RhdHMoKSAoZGVwcmVjYXRlZCwgZm9ybWVyIHN0YW5kYXJkKVxuICB9IGVsc2UgaWYgKHNlbGYuX2lzUmVhY3ROYXRpdmVXZWJydGMpIHtcbiAgICBzZWxmLl9wYy5nZXRTdGF0cyhudWxsLCBmdW5jdGlvbiAocmVzKSB7XG4gICAgICB2YXIgcmVwb3J0cyA9IFtdXG4gICAgICByZXMuZm9yRWFjaChmdW5jdGlvbiAocmVwb3J0KSB7XG4gICAgICAgIHJlcG9ydHMucHVzaChyZXBvcnQpXG4gICAgICB9KVxuICAgICAgY2IobnVsbCwgcmVwb3J0cylcbiAgICB9LCBmdW5jdGlvbiAoZXJyKSB7IGNiKGVycikgfSlcblxuICAvLyBTaW5nbGUtcGFyYW1ldGVyIGNhbGxiYWNrLWJhc2VkIGdldFN0YXRzKCkgKG5vbi1zdGFuZGFyZClcbiAgfSBlbHNlIGlmIChzZWxmLl9wYy5nZXRTdGF0cy5sZW5ndGggPiAwKSB7XG4gICAgc2VsZi5fcGMuZ2V0U3RhdHMoZnVuY3Rpb24gKHJlcykge1xuICAgICAgdmFyIHJlcG9ydHMgPSBbXVxuICAgICAgcmVzLnJlc3VsdCgpLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICB2YXIgcmVwb3J0ID0ge31cbiAgICAgICAgcmVzdWx0Lm5hbWVzKCkuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgIHJlcG9ydFtuYW1lXSA9IHJlc3VsdC5zdGF0KG5hbWUpXG4gICAgICAgIH0pXG4gICAgICAgIHJlcG9ydC5pZCA9IHJlc3VsdC5pZFxuICAgICAgICByZXBvcnQudHlwZSA9IHJlc3VsdC50eXBlXG4gICAgICAgIHJlcG9ydC50aW1lc3RhbXAgPSByZXN1bHQudGltZXN0YW1wXG4gICAgICAgIHJlcG9ydHMucHVzaChyZXBvcnQpXG4gICAgICB9KVxuICAgICAgY2IobnVsbCwgcmVwb3J0cylcbiAgICB9LCBmdW5jdGlvbiAoZXJyKSB7IGNiKGVycikgfSlcblxuICAvLyBVbmtub3duIGJyb3dzZXIsIHNraXAgZ2V0U3RhdHMoKSBzaW5jZSBpdCdzIGFueW9uZSdzIGd1ZXNzIHdoaWNoIHN0eWxlIG9mXG4gIC8vIGdldFN0YXRzKCkgdGhleSBpbXBsZW1lbnQuXG4gIH0gZWxzZSB7XG4gICAgY2IobnVsbCwgW10pXG4gIH1cbn1cblxuUGVlci5wcm90b3R5cGUuX21heWJlUmVhZHkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICBzZWxmLl9kZWJ1ZygnbWF5YmVSZWFkeSBwYyAlcyBjaGFubmVsICVzJywgc2VsZi5fcGNSZWFkeSwgc2VsZi5fY2hhbm5lbFJlYWR5KVxuICBpZiAoc2VsZi5jb25uZWN0ZWQgfHwgc2VsZi5fY29ubmVjdGluZyB8fCAhc2VsZi5fcGNSZWFkeSB8fCAhc2VsZi5fY2hhbm5lbFJlYWR5KSByZXR1cm5cbiAgc2VsZi5fY29ubmVjdGluZyA9IHRydWVcblxuICBzZWxmLmdldFN0YXRzKGZ1bmN0aW9uIChlcnIsIGl0ZW1zKSB7XG4gICAgLy8gVHJlYXQgZ2V0U3RhdHMgZXJyb3IgYXMgbm9uLWZhdGFsLiBJdCdzIG5vdCBlc3NlbnRpYWwuXG4gICAgaWYgKGVycikgaXRlbXMgPSBbXVxuXG4gICAgc2VsZi5fY29ubmVjdGluZyA9IGZhbHNlXG4gICAgc2VsZi5jb25uZWN0ZWQgPSB0cnVlXG5cbiAgICB2YXIgcmVtb3RlQ2FuZGlkYXRlcyA9IHt9XG4gICAgdmFyIGxvY2FsQ2FuZGlkYXRlcyA9IHt9XG4gICAgdmFyIGNhbmRpZGF0ZVBhaXJzID0ge31cblxuICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIC8vIFRPRE86IE9uY2UgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdGhlIGh5cGhlbmF0ZWQgc3RhdHMgcmVwb3J0IHR5cGVzLCByZW1vdmVcbiAgICAgIC8vIHRoZSBub24taHlwZW5hdGVkIG9uZXNcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdyZW1vdGVjYW5kaWRhdGUnIHx8IGl0ZW0udHlwZSA9PT0gJ3JlbW90ZS1jYW5kaWRhdGUnKSB7XG4gICAgICAgIHJlbW90ZUNhbmRpZGF0ZXNbaXRlbS5pZF0gPSBpdGVtXG4gICAgICB9XG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnbG9jYWxjYW5kaWRhdGUnIHx8IGl0ZW0udHlwZSA9PT0gJ2xvY2FsLWNhbmRpZGF0ZScpIHtcbiAgICAgICAgbG9jYWxDYW5kaWRhdGVzW2l0ZW0uaWRdID0gaXRlbVxuICAgICAgfVxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2NhbmRpZGF0ZXBhaXInIHx8IGl0ZW0udHlwZSA9PT0gJ2NhbmRpZGF0ZS1wYWlyJykge1xuICAgICAgICBjYW5kaWRhdGVQYWlyc1tpdGVtLmlkXSA9IGl0ZW1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgLy8gU3BlYy1jb21wbGlhbnRcbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICd0cmFuc3BvcnQnKSB7XG4gICAgICAgIHNldFNlbGVjdGVkQ2FuZGlkYXRlUGFpcihjYW5kaWRhdGVQYWlyc1tpdGVtLnNlbGVjdGVkQ2FuZGlkYXRlUGFpcklkXSlcbiAgICAgIH1cblxuICAgICAgLy8gT2xkIGltcGxlbWVudGF0aW9uc1xuICAgICAgaWYgKFxuICAgICAgICAoaXRlbS50eXBlID09PSAnZ29vZ0NhbmRpZGF0ZVBhaXInICYmIGl0ZW0uZ29vZ0FjdGl2ZUNvbm5lY3Rpb24gPT09ICd0cnVlJykgfHxcbiAgICAgICAgKChpdGVtLnR5cGUgPT09ICdjYW5kaWRhdGVwYWlyJyB8fCBpdGVtLnR5cGUgPT09ICdjYW5kaWRhdGUtcGFpcicpICYmIGl0ZW0uc2VsZWN0ZWQpXG4gICAgICApIHtcbiAgICAgICAgc2V0U2VsZWN0ZWRDYW5kaWRhdGVQYWlyKGl0ZW0pXG4gICAgICB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHNldFNlbGVjdGVkQ2FuZGlkYXRlUGFpciAoc2VsZWN0ZWRDYW5kaWRhdGVQYWlyKSB7XG4gICAgICB2YXIgbG9jYWwgPSBsb2NhbENhbmRpZGF0ZXNbc2VsZWN0ZWRDYW5kaWRhdGVQYWlyLmxvY2FsQ2FuZGlkYXRlSWRdXG5cbiAgICAgIGlmIChsb2NhbCAmJiBsb2NhbC5pcCkge1xuICAgICAgICAvLyBTcGVjXG4gICAgICAgIHNlbGYubG9jYWxBZGRyZXNzID0gbG9jYWwuaXBcbiAgICAgICAgc2VsZi5sb2NhbFBvcnQgPSBOdW1iZXIobG9jYWwucG9ydClcbiAgICAgIH0gZWxzZSBpZiAobG9jYWwgJiYgbG9jYWwuaXBBZGRyZXNzKSB7XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgc2VsZi5sb2NhbEFkZHJlc3MgPSBsb2NhbC5pcEFkZHJlc3NcbiAgICAgICAgc2VsZi5sb2NhbFBvcnQgPSBOdW1iZXIobG9jYWwucG9ydE51bWJlcilcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGVjdGVkQ2FuZGlkYXRlUGFpci5nb29nTG9jYWxBZGRyZXNzID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBUT0RPOiByZW1vdmUgdGhpcyBvbmNlIENocm9tZSA1OCBpcyByZWxlYXNlZFxuICAgICAgICBsb2NhbCA9IHNlbGVjdGVkQ2FuZGlkYXRlUGFpci5nb29nTG9jYWxBZGRyZXNzLnNwbGl0KCc6JylcbiAgICAgICAgc2VsZi5sb2NhbEFkZHJlc3MgPSBsb2NhbFswXVxuICAgICAgICBzZWxmLmxvY2FsUG9ydCA9IE51bWJlcihsb2NhbFsxXSlcbiAgICAgIH1cblxuICAgICAgdmFyIHJlbW90ZSA9IHJlbW90ZUNhbmRpZGF0ZXNbc2VsZWN0ZWRDYW5kaWRhdGVQYWlyLnJlbW90ZUNhbmRpZGF0ZUlkXVxuXG4gICAgICBpZiAocmVtb3RlICYmIHJlbW90ZS5pcCkge1xuICAgICAgICAvLyBTcGVjXG4gICAgICAgIHNlbGYucmVtb3RlQWRkcmVzcyA9IHJlbW90ZS5pcFxuICAgICAgICBzZWxmLnJlbW90ZVBvcnQgPSBOdW1iZXIocmVtb3RlLnBvcnQpXG4gICAgICB9IGVsc2UgaWYgKHJlbW90ZSAmJiByZW1vdGUuaXBBZGRyZXNzKSB7XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgc2VsZi5yZW1vdGVBZGRyZXNzID0gcmVtb3RlLmlwQWRkcmVzc1xuICAgICAgICBzZWxmLnJlbW90ZVBvcnQgPSBOdW1iZXIocmVtb3RlLnBvcnROdW1iZXIpXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxlY3RlZENhbmRpZGF0ZVBhaXIuZ29vZ1JlbW90ZUFkZHJlc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIFRPRE86IHJlbW92ZSB0aGlzIG9uY2UgQ2hyb21lIDU4IGlzIHJlbGVhc2VkXG4gICAgICAgIHJlbW90ZSA9IHNlbGVjdGVkQ2FuZGlkYXRlUGFpci5nb29nUmVtb3RlQWRkcmVzcy5zcGxpdCgnOicpXG4gICAgICAgIHNlbGYucmVtb3RlQWRkcmVzcyA9IHJlbW90ZVswXVxuICAgICAgICBzZWxmLnJlbW90ZVBvcnQgPSBOdW1iZXIocmVtb3RlWzFdKVxuICAgICAgfVxuICAgICAgc2VsZi5yZW1vdGVGYW1pbHkgPSAnSVB2NCdcblxuICAgICAgc2VsZi5fZGVidWcoXG4gICAgICAgICdjb25uZWN0IGxvY2FsOiAlczolcyByZW1vdGU6ICVzOiVzJyxcbiAgICAgICAgc2VsZi5sb2NhbEFkZHJlc3MsIHNlbGYubG9jYWxQb3J0LCBzZWxmLnJlbW90ZUFkZHJlc3MsIHNlbGYucmVtb3RlUG9ydFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChzZWxmLl9jaHVuaykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2VsZi5zZW5kKHNlbGYuX2NodW5rKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBzZWxmLl9vbkVycm9yKGVycilcbiAgICAgIH1cbiAgICAgIHNlbGYuX2NodW5rID0gbnVsbFxuICAgICAgc2VsZi5fZGVidWcoJ3NlbnQgY2h1bmsgZnJvbSBcIndyaXRlIGJlZm9yZSBjb25uZWN0XCInKVxuXG4gICAgICB2YXIgY2IgPSBzZWxmLl9jYlxuICAgICAgc2VsZi5fY2IgPSBudWxsXG4gICAgICBjYihudWxsKVxuICAgIH1cblxuICAgIC8vIElmIGBidWZmZXJlZEFtb3VudExvd1RocmVzaG9sZGAgYW5kICdvbmJ1ZmZlcmVkYW1vdW50bG93JyBhcmUgdW5zdXBwb3J0ZWQsXG4gICAgLy8gZmFsbGJhY2sgdG8gdXNpbmcgc2V0SW50ZXJ2YWwgdG8gaW1wbGVtZW50IGJhY2twcmVzc3VyZS5cbiAgICBpZiAodHlwZW9mIHNlbGYuX2NoYW5uZWwuYnVmZmVyZWRBbW91bnRMb3dUaHJlc2hvbGQgIT09ICdudW1iZXInKSB7XG4gICAgICBzZWxmLl9pbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHsgc2VsZi5fb25JbnRlcnZhbCgpIH0sIDE1MClcbiAgICAgIGlmIChzZWxmLl9pbnRlcnZhbC51bnJlZikgc2VsZi5faW50ZXJ2YWwudW5yZWYoKVxuICAgIH1cblxuICAgIHNlbGYuX2RlYnVnKCdjb25uZWN0JylcbiAgICBzZWxmLmVtaXQoJ2Nvbm5lY3QnKVxuICB9KVxufVxuXG5QZWVyLnByb3RvdHlwZS5fb25JbnRlcnZhbCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLl9jYiB8fCAhdGhpcy5fY2hhbm5lbCB8fCB0aGlzLl9jaGFubmVsLmJ1ZmZlcmVkQW1vdW50ID4gTUFYX0JVRkZFUkVEX0FNT1VOVCkge1xuICAgIHJldHVyblxuICB9XG4gIHRoaXMuX29uQ2hhbm5lbEJ1ZmZlcmVkQW1vdW50TG93KClcbn1cblxuUGVlci5wcm90b3R5cGUuX29uU2lnbmFsaW5nU3RhdGVDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICBpZiAoc2VsZi5kZXN0cm95ZWQpIHJldHVyblxuICBzZWxmLl9kZWJ1Zygnc2lnbmFsaW5nU3RhdGVDaGFuZ2UgJXMnLCBzZWxmLl9wYy5zaWduYWxpbmdTdGF0ZSlcbiAgc2VsZi5lbWl0KCdzaWduYWxpbmdTdGF0ZUNoYW5nZScsIHNlbGYuX3BjLnNpZ25hbGluZ1N0YXRlKVxufVxuXG5QZWVyLnByb3RvdHlwZS5fb25JY2VDYW5kaWRhdGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIGlmIChzZWxmLmRlc3Ryb3llZCkgcmV0dXJuXG4gIGlmIChldmVudC5jYW5kaWRhdGUgJiYgc2VsZi50cmlja2xlKSB7XG4gICAgc2VsZi5lbWl0KCdzaWduYWwnLCB7XG4gICAgICBjYW5kaWRhdGU6IHtcbiAgICAgICAgY2FuZGlkYXRlOiBldmVudC5jYW5kaWRhdGUuY2FuZGlkYXRlLFxuICAgICAgICBzZHBNTGluZUluZGV4OiBldmVudC5jYW5kaWRhdGUuc2RwTUxpbmVJbmRleCxcbiAgICAgICAgc2RwTWlkOiBldmVudC5jYW5kaWRhdGUuc2RwTWlkXG4gICAgICB9XG4gICAgfSlcbiAgfSBlbHNlIGlmICghZXZlbnQuY2FuZGlkYXRlKSB7XG4gICAgc2VsZi5faWNlQ29tcGxldGUgPSB0cnVlXG4gICAgc2VsZi5lbWl0KCdfaWNlQ29tcGxldGUnKVxuICB9XG59XG5cblBlZXIucHJvdG90eXBlLl9vbkNoYW5uZWxNZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICBpZiAoc2VsZi5kZXN0cm95ZWQpIHJldHVyblxuICB2YXIgZGF0YSA9IGV2ZW50LmRhdGFcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikgZGF0YSA9IG5ldyBCdWZmZXIoZGF0YSlcbiAgc2VsZi5wdXNoKGRhdGEpXG59XG5cblBlZXIucHJvdG90eXBlLl9vbkNoYW5uZWxCdWZmZXJlZEFtb3VudExvdyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIGlmIChzZWxmLmRlc3Ryb3llZCB8fCAhc2VsZi5fY2IpIHJldHVyblxuICBzZWxmLl9kZWJ1ZygnZW5kaW5nIGJhY2twcmVzc3VyZTogYnVmZmVyZWRBbW91bnQgJWQnLCBzZWxmLl9jaGFubmVsLmJ1ZmZlcmVkQW1vdW50KVxuICB2YXIgY2IgPSBzZWxmLl9jYlxuICBzZWxmLl9jYiA9IG51bGxcbiAgY2IobnVsbClcbn1cblxuUGVlci5wcm90b3R5cGUuX29uQ2hhbm5lbE9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICBpZiAoc2VsZi5jb25uZWN0ZWQgfHwgc2VsZi5kZXN0cm95ZWQpIHJldHVyblxuICBzZWxmLl9kZWJ1Zygnb24gY2hhbm5lbCBvcGVuJylcbiAgc2VsZi5fY2hhbm5lbFJlYWR5ID0gdHJ1ZVxuICBzZWxmLl9tYXliZVJlYWR5KClcbn1cblxuUGVlci5wcm90b3R5cGUuX29uQ2hhbm5lbENsb3NlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgaWYgKHNlbGYuZGVzdHJveWVkKSByZXR1cm5cbiAgc2VsZi5fZGVidWcoJ29uIGNoYW5uZWwgY2xvc2UnKVxuICBzZWxmLl9kZXN0cm95KClcbn1cblxuUGVlci5wcm90b3R5cGUuX29uQWRkU3RyZWFtID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICBpZiAoc2VsZi5kZXN0cm95ZWQpIHJldHVyblxuICBzZWxmLl9kZWJ1Zygnb24gYWRkIHN0cmVhbScpXG4gIHNlbGYuZW1pdCgnc3RyZWFtJywgZXZlbnQuc3RyZWFtKVxufVxuXG5QZWVyLnByb3RvdHlwZS5fb25UcmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgaWYgKHNlbGYuZGVzdHJveWVkKSByZXR1cm5cbiAgc2VsZi5fZGVidWcoJ29uIHRyYWNrJylcbiAgdmFyIGlkID0gZXZlbnQuc3RyZWFtc1swXS5pZFxuICBpZiAoc2VsZi5fcHJldmlvdXNTdHJlYW1zLmluZGV4T2YoaWQpICE9PSAtMSkgcmV0dXJuIC8vIE9ubHkgZmlyZSBvbmUgJ3N0cmVhbScgZXZlbnQsIGV2ZW4gdGhvdWdoIHRoZXJlIG1heSBiZSBtdWx0aXBsZSB0cmFja3MgcGVyIHN0cmVhbVxuICBzZWxmLl9wcmV2aW91c1N0cmVhbXMucHVzaChpZClcbiAgc2VsZi5lbWl0KCdzdHJlYW0nLCBldmVudC5zdHJlYW1zWzBdKVxufVxuXG5QZWVyLnByb3RvdHlwZS5fb25FcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIGlmIChzZWxmLmRlc3Ryb3llZCkgcmV0dXJuXG4gIHNlbGYuX2RlYnVnKCdlcnJvciAlcycsIGVyci5tZXNzYWdlIHx8IGVycilcbiAgc2VsZi5fZGVzdHJveShlcnIpXG59XG5cblBlZXIucHJvdG90eXBlLl9kZWJ1ZyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gIGFyZ3NbMF0gPSAnWycgKyBzZWxmLl9pZCArICddICcgKyBhcmdzWzBdXG4gIGRlYnVnLmFwcGx5KG51bGwsIGFyZ3MpXG59XG5cbi8vIFRyYW5zZm9ybSBjb25zdHJhaW50cyBvYmplY3RzIGludG8gdGhlIG5ldyBmb3JtYXQgKHVubGVzcyBDaHJvbWl1bSlcbi8vIFRPRE86IFRoaXMgY2FuIGJlIHJlbW92ZWQgd2hlbiBDaHJvbWl1bSBzdXBwb3J0cyB0aGUgbmV3IGZvcm1hdFxuUGVlci5wcm90b3R5cGUuX3RyYW5zZm9ybUNvbnN0cmFpbnRzID0gZnVuY3Rpb24gKGNvbnN0cmFpbnRzKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIGlmIChPYmplY3Qua2V5cyhjb25zdHJhaW50cykubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGNvbnN0cmFpbnRzXG4gIH1cblxuICBpZiAoKGNvbnN0cmFpbnRzLm1hbmRhdG9yeSB8fCBjb25zdHJhaW50cy5vcHRpb25hbCkgJiYgIXNlbGYuX2lzQ2hyb21pdW0pIHtcbiAgICAvLyBjb252ZXJ0IHRvIG5ldyBmb3JtYXRcblxuICAgIC8vIE1lcmdlIG1hbmRhdG9yeSBhbmQgb3B0aW9uYWwgb2JqZWN0cywgcHJpb3JpdGl6aW5nIG1hbmRhdG9yeVxuICAgIHZhciBuZXdDb25zdHJhaW50cyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbnN0cmFpbnRzLm9wdGlvbmFsLCBjb25zdHJhaW50cy5tYW5kYXRvcnkpXG5cbiAgICAvLyBmaXggY2FzaW5nXG4gICAgaWYgKG5ld0NvbnN0cmFpbnRzLk9mZmVyVG9SZWNlaXZlVmlkZW8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgbmV3Q29uc3RyYWludHMub2ZmZXJUb1JlY2VpdmVWaWRlbyA9IG5ld0NvbnN0cmFpbnRzLk9mZmVyVG9SZWNlaXZlVmlkZW9cbiAgICAgIGRlbGV0ZSBuZXdDb25zdHJhaW50c1snT2ZmZXJUb1JlY2VpdmVWaWRlbyddXG4gICAgfVxuXG4gICAgaWYgKG5ld0NvbnN0cmFpbnRzLk9mZmVyVG9SZWNlaXZlQXVkaW8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgbmV3Q29uc3RyYWludHMub2ZmZXJUb1JlY2VpdmVBdWRpbyA9IG5ld0NvbnN0cmFpbnRzLk9mZmVyVG9SZWNlaXZlQXVkaW9cbiAgICAgIGRlbGV0ZSBuZXdDb25zdHJhaW50c1snT2ZmZXJUb1JlY2VpdmVBdWRpbyddXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0NvbnN0cmFpbnRzXG4gIH0gZWxzZSBpZiAoIWNvbnN0cmFpbnRzLm1hbmRhdG9yeSAmJiAhY29uc3RyYWludHMub3B0aW9uYWwgJiYgc2VsZi5faXNDaHJvbWl1bSkge1xuICAgIC8vIGNvbnZlcnQgdG8gb2xkIGZvcm1hdFxuXG4gICAgLy8gZml4IGNhc2luZ1xuICAgIGlmIChjb25zdHJhaW50cy5vZmZlclRvUmVjZWl2ZVZpZGVvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0cmFpbnRzLk9mZmVyVG9SZWNlaXZlVmlkZW8gPSBjb25zdHJhaW50cy5vZmZlclRvUmVjZWl2ZVZpZGVvXG4gICAgICBkZWxldGUgY29uc3RyYWludHNbJ29mZmVyVG9SZWNlaXZlVmlkZW8nXVxuICAgIH1cblxuICAgIGlmIChjb25zdHJhaW50cy5vZmZlclRvUmVjZWl2ZUF1ZGlvICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0cmFpbnRzLk9mZmVyVG9SZWNlaXZlQXVkaW8gPSBjb25zdHJhaW50cy5vZmZlclRvUmVjZWl2ZUF1ZGlvXG4gICAgICBkZWxldGUgY29uc3RyYWludHNbJ29mZmVyVG9SZWNlaXZlQXVkaW8nXVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBtYW5kYXRvcnk6IGNvbnN0cmFpbnRzIC8vIE5PVEU6IEFsbCBjb25zdHJhaW50cyBhcmUgdXBncmFkZWQgdG8gbWFuZGF0b3J5XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbnN0cmFpbnRzXG59XG5cbmZ1bmN0aW9uIG5vb3AgKCkge31cbiJdfQ==
},{"buffer":7,"debug":9,"get-browser-rtc":12,"inherits":14,"randombytes":21,"readable-stream":28}],30:[function(require,module,exports){
'use strict';
module.exports = SortedArray
var search = require('binary-search')

function SortedArray(cmp, arr) {
  if (typeof cmp != 'function')
    throw new TypeError('comparator must be a function')

  this.arr = arr || []
  this.cmp = cmp
}

SortedArray.prototype.insert = function(element) {
  var index = search(this.arr, element, this.cmp)
  if (index < 0)
    index = ~index

  this.arr.splice(index, 0, element)
}

SortedArray.prototype.indexOf = function(element) {
  var index = search(this.arr, element, this.cmp)
  return index >= 0
    ? index
    : -1
}

SortedArray.prototype.remove = function(element) {
  var index = search(this.arr, element, this.cmp)
  if (index < 0)
    return false

  this.arr.splice(index, 1)
  return true
}

},{"binary-search":4}],31:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var Buffer = require('buffer').Buffer;

var isBufferEncoding = Buffer.isEncoding
  || function(encoding) {
       switch (encoding && encoding.toLowerCase()) {
         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
         default: return false;
       }
     }


function assertEncoding(encoding) {
  if (encoding && !isBufferEncoding(encoding)) {
    throw new Error('Unknown encoding: ' + encoding);
  }
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters. CESU-8 is handled as part of the UTF-8 encoding.
//
// @TODO Handling all encodings inside a single object makes it very difficult
// to reason about this code, so it should be split up in the future.
// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
// points as used by CESU-8.
var StringDecoder = exports.StringDecoder = function(encoding) {
  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
  assertEncoding(encoding);
  switch (this.encoding) {
    case 'utf8':
      // CESU-8 represents each of Surrogate Pair by 3-bytes
      this.surrogateSize = 3;
      break;
    case 'ucs2':
    case 'utf16le':
      // UTF-16 represents each of Surrogate Pair by 2-bytes
      this.surrogateSize = 2;
      this.detectIncompleteChar = utf16DetectIncompleteChar;
      break;
    case 'base64':
      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
      this.surrogateSize = 3;
      this.detectIncompleteChar = base64DetectIncompleteChar;
      break;
    default:
      this.write = passThroughWrite;
      return;
  }

  // Enough space to store all bytes of a single character. UTF-8 needs 4
  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
  this.charBuffer = new Buffer(6);
  // Number of bytes received for the current incomplete multi-byte character.
  this.charReceived = 0;
  // Number of bytes expected for the current incomplete multi-byte character.
  this.charLength = 0;
};


// write decodes the given buffer and returns it as JS string that is
// guaranteed to not contain any partial multi-byte characters. Any partial
// character found at the end of the buffer is buffered up, and will be
// returned when calling write again with the remaining bytes.
//
// Note: Converting a Buffer containing an orphan surrogate to a String
// currently works, but converting a String to a Buffer (via `new Buffer`, or
// Buffer#write) will replace incomplete surrogates with the unicode
// replacement character. See https://codereview.chromium.org/121173009/ .
StringDecoder.prototype.write = function(buffer) {
  var charStr = '';
  // if our last write ended with an incomplete multibyte character
  while (this.charLength) {
    // determine how many remaining bytes this buffer has to offer for this char
    var available = (buffer.length >= this.charLength - this.charReceived) ?
        this.charLength - this.charReceived :
        buffer.length;

    // add the new bytes to the char buffer
    buffer.copy(this.charBuffer, this.charReceived, 0, available);
    this.charReceived += available;

    if (this.charReceived < this.charLength) {
      // still not enough chars in this buffer? wait for more ...
      return '';
    }

    // remove bytes belonging to the current character from the buffer
    buffer = buffer.slice(available, buffer.length);

    // get the character that was split
    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
    var charCode = charStr.charCodeAt(charStr.length - 1);
    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
      this.charLength += this.surrogateSize;
      charStr = '';
      continue;
    }
    this.charReceived = this.charLength = 0;

    // if there are no more bytes in this buffer, just emit our char
    if (buffer.length === 0) {
      return charStr;
    }
    break;
  }

  // determine and set charLength / charReceived
  this.detectIncompleteChar(buffer);

  var end = buffer.length;
  if (this.charLength) {
    // buffer the incomplete character bytes we got
    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
    end -= this.charReceived;
  }

  charStr += buffer.toString(this.encoding, 0, end);

  var end = charStr.length - 1;
  var charCode = charStr.charCodeAt(end);
  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
    var size = this.surrogateSize;
    this.charLength += size;
    this.charReceived += size;
    this.charBuffer.copy(this.charBuffer, size, 0, size);
    buffer.copy(this.charBuffer, 0, 0, size);
    return charStr.substring(0, end);
  }

  // or just emit the charStr
  return charStr;
};

// detectIncompleteChar determines if there is an incomplete UTF-8 character at
// the end of the given buffer. If so, it sets this.charLength to the byte
// length that character, and sets this.charReceived to the number of bytes
// that are available for this character.
StringDecoder.prototype.detectIncompleteChar = function(buffer) {
  // determine how many bytes we have to check at the end of this buffer
  var i = (buffer.length >= 3) ? 3 : buffer.length;

  // Figure out if one of the last i bytes of our buffer announces an
  // incomplete char.
  for (; i > 0; i--) {
    var c = buffer[buffer.length - i];

    // See http://en.wikipedia.org/wiki/UTF-8#Description

    // 110XXXXX
    if (i == 1 && c >> 5 == 0x06) {
      this.charLength = 2;
      break;
    }

    // 1110XXXX
    if (i <= 2 && c >> 4 == 0x0E) {
      this.charLength = 3;
      break;
    }

    // 11110XXX
    if (i <= 3 && c >> 3 == 0x1E) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = i;
};

StringDecoder.prototype.end = function(buffer) {
  var res = '';
  if (buffer && buffer.length)
    res = this.write(buffer);

  if (this.charReceived) {
    var cr = this.charReceived;
    var buf = this.charBuffer;
    var enc = this.encoding;
    res += buf.slice(0, cr).toString(enc);
  }

  return res;
};

function passThroughWrite(buffer) {
  return buffer.toString(this.encoding);
}

function utf16DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 2;
  this.charLength = this.charReceived ? 2 : 0;
}

function base64DetectIncompleteChar(buffer) {
  this.charReceived = buffer.length % 3;
  this.charLength = this.charReceived ? 3 : 0;
}

},{"buffer":7}],32:[function(require,module,exports){
(function (global){

/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy91dGlsLWRlcHJlY2F0ZS9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBkZXByZWNhdGU7XG5cbi8qKlxuICogTWFyayB0aGF0IGEgbWV0aG9kIHNob3VsZCBub3QgYmUgdXNlZC5cbiAqIFJldHVybnMgYSBtb2RpZmllZCBmdW5jdGlvbiB3aGljaCB3YXJucyBvbmNlIGJ5IGRlZmF1bHQuXG4gKlxuICogSWYgYGxvY2FsU3RvcmFnZS5ub0RlcHJlY2F0aW9uID0gdHJ1ZWAgaXMgc2V0LCB0aGVuIGl0IGlzIGEgbm8tb3AuXG4gKlxuICogSWYgYGxvY2FsU3RvcmFnZS50aHJvd0RlcHJlY2F0aW9uID0gdHJ1ZWAgaXMgc2V0LCB0aGVuIGRlcHJlY2F0ZWQgZnVuY3Rpb25zXG4gKiB3aWxsIHRocm93IGFuIEVycm9yIHdoZW4gaW52b2tlZC5cbiAqXG4gKiBJZiBgbG9jYWxTdG9yYWdlLnRyYWNlRGVwcmVjYXRpb24gPSB0cnVlYCBpcyBzZXQsIHRoZW4gZGVwcmVjYXRlZCBmdW5jdGlvbnNcbiAqIHdpbGwgaW52b2tlIGBjb25zb2xlLnRyYWNlKClgIGluc3RlYWQgb2YgYGNvbnNvbGUuZXJyb3IoKWAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gLSB0aGUgZnVuY3Rpb24gdG8gZGVwcmVjYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gbXNnIC0gdGhlIHN0cmluZyB0byBwcmludCB0byB0aGUgY29uc29sZSB3aGVuIGBmbmAgaXMgaW52b2tlZFxuICogQHJldHVybnMge0Z1bmN0aW9ufSBhIG5ldyBcImRlcHJlY2F0ZWRcIiB2ZXJzaW9uIG9mIGBmbmBcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZGVwcmVjYXRlIChmbiwgbXNnKSB7XG4gIGlmIChjb25maWcoJ25vRGVwcmVjYXRpb24nKSkge1xuICAgIHJldHVybiBmbjtcbiAgfVxuXG4gIHZhciB3YXJuZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gZGVwcmVjYXRlZCgpIHtcbiAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgaWYgKGNvbmZpZygndGhyb3dEZXByZWNhdGlvbicpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfSBlbHNlIGlmIChjb25maWcoJ3RyYWNlRGVwcmVjYXRpb24nKSkge1xuICAgICAgICBjb25zb2xlLnRyYWNlKG1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4obXNnKTtcbiAgICAgIH1cbiAgICAgIHdhcm5lZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGRlcHJlY2F0ZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGBsb2NhbFN0b3JhZ2VgIGZvciBib29sZWFuIHZhbHVlcyBmb3IgdGhlIGdpdmVuIGBuYW1lYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBjb25maWcgKG5hbWUpIHtcbiAgLy8gYWNjZXNzaW5nIGdsb2JhbC5sb2NhbFN0b3JhZ2UgY2FuIHRyaWdnZXIgYSBET01FeGNlcHRpb24gaW4gc2FuZGJveGVkIGlmcmFtZXNcbiAgdHJ5IHtcbiAgICBpZiAoIWdsb2JhbC5sb2NhbFN0b3JhZ2UpIHJldHVybiBmYWxzZTtcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdmFsID0gZ2xvYmFsLmxvY2FsU3RvcmFnZVtuYW1lXTtcbiAgaWYgKG51bGwgPT0gdmFsKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBTdHJpbmcodmFsKS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZSc7XG59XG4iXX0=
},{}],33:[function(require,module,exports){
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return  bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;

},{}],34:[function(require,module,exports){
(function (global){
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16);
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var  rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

module.exports = rng;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy91dWlkL2xpYi9ybmctYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuICBJbiB0aGVcbi8vIGJyb3dzZXIgdGhpcyBpcyBhIGxpdHRsZSBjb21wbGljYXRlZCBkdWUgdG8gdW5rbm93biBxdWFsaXR5IG9mIE1hdGgucmFuZG9tKClcbi8vIGFuZCBpbmNvbnNpc3RlbnQgc3VwcG9ydCBmb3IgdGhlIGBjcnlwdG9gIEFQSS4gIFdlIGRvIHRoZSBiZXN0IHdlIGNhbiB2aWFcbi8vIGZlYXR1cmUtZGV0ZWN0aW9uXG52YXIgcm5nO1xuXG52YXIgY3J5cHRvID0gZ2xvYmFsLmNyeXB0byB8fCBnbG9iYWwubXNDcnlwdG87IC8vIGZvciBJRSAxMVxuaWYgKGNyeXB0byAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8gUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICB2YXIgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG4gIHJuZyA9IGZ1bmN0aW9uIHdoYXR3Z1JORygpIHtcbiAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbiAgICByZXR1cm4gcm5kczg7XG4gIH07XG59XG5cbmlmICghcm5nKSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyICBybmRzID0gbmV3IEFycmF5KDE2KTtcbiAgcm5nID0gZnVuY3Rpb24oKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIHI7IGkgPCAxNjsgaSsrKSB7XG4gICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgciA9IE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMDtcbiAgICAgIHJuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJuZHM7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcm5nO1xuIl19
},{}],35:[function(require,module,exports){
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

},{"./lib/bytesToUuid":33,"./lib/rng":34}],"neighborhood-wrtc":[function(require,module,exports){
'use strict';

const EventEmitter = require('events');
const Socket = require('simple-peer');

const uuid = require('uuid/v4');
const SortedArray = require('./extended-sorted-array.js');
const MultiSet = require('./multiset.js');
const SimplePeer = require('simple-peer');

/**
 * Neigbhorhood table providing easy establishment and management of
 * connections
 * @param {object} options the options available to the connections, e.g. timeout before
 * connection are truely removed, WebRTC options
 */
class Neighborhood extends EventEmitter {
	constructor(options) {
		super();

		this.PROTOCOL = 'neighborhood-wrtc';
		// #1 save options
		this.options = {};
		this.options.config = options && options.webrtc || {};
		this.options.trickle = options && options.webrtc && options.webrtc.trickle || false;
		this.TIMEOUT = options && options.timeout || 2 * 60 * 1000; // 2 minutes

		this.encoding = options.encoding;
		this.decoding = options.decoding;
		this.ID = uuid();
		if (this.options.config.wrtc) {
			this.options.wrtc = this.options.config.wrtc;
		}

		if (options && options.verbose) {
			this.verbose = options.verbose;
		}

		/*!
   * \brief compare the id of entries in tables
   */
		this.Comparator = (a, b) => {
			var first = a.id || a;
			var second = b.id || b;
			if (first < second) {
				return -1;
			};
			if (first > second) {
				return 1;
			};
			return 0;
		};
		// #2 initialize tables
		this.pending = new SortedArray(this.Comparator); // not finalized yet
		this.living = new MultiSet(this.Comparator); // live and usable
		this.dying = new SortedArray(this.Comparator); // being remove
	}

	MResponse(tid, pid, offer, protocol) {
		return {
			tid: tid,
			pid: pid,
			protocol: protocol,
			type: 'MResponse',
			offer: offer
		};
	}
	MRequest(tid, pid, offer, protocol) {
		return {
			tid: tid,
			pid: pid,
			protocol: protocol,
			type: 'MRequest',
			offer: offer
		};
	}

	log(...args) {
		if (this.verbose) {
			console.log('[NEIGHBORHOOD] ', args);
		}
	}

	/**
  * Disconnect one of the arc with the identifier in argument. If
  * it was the last arc with such id, the socket is relocated to the dying
  * table. The socket will be destroy after a bit. If there is no argument,
  * disconnect the whole.
  * @param {string|undefined} id Id provided to just disconnect the arc or if undefined disconnect all arcs
  */
	disconnect(id) {
		let result = true;
		if (!id) {
			// #1 disconnect everything
			this.pending.arr.forEach(e => {
				e.socket && e.socket.destroy();
			});
			while (this.living.ms.arr.length > 0) {
				const e = this.living.ms.arr[0];
				e.socket && e.socket.destroy();
			}
			while (this.dying.arr.length > 0) {
				const e = this.dying.arr[0];
				e.socket && e.socket.destroy();
			}
		} else {
			// #2 remove one arc
			let entry = this.living.remove(id);
			entry && this.emit('disconnect', entry.id);
			if (entry && entry.occ <= 0) {
				entry.timeout = setTimeout(function () {
					entry.socket.destroy();
				}, this.TIMEOUT);
				this.dying.insert(entry);
			}
			result = entry && true || false;
		}
		return result;
	}

	/**
  * New method to encode the message as we want
  * @param  {object} message The message to encode
  * @return {string|binary} Encoded message
  */
	encode(message) {
		return this.encoding(message);
	}

	/**
  * New method to encode the message as we want
  * @param  {object} message The message to encode
  * @return {string|binary} Encoded message
  */
	decode(message) {
		return this.decoding(message);
	}

	/**
  * Send a message to the socket in argument
  * @param {string} id the identifier of the socket
  * @param {object} message the message to send
  * @return {boolean} true if the message is sent, false otherwise
  */
	send(id, message) {
		// #1 convert message to string (TODO) check if there is a better way
		let msg = message instanceof String && message || this.encode(message);
		// #2 get the socket to use
		let entry = this.get(id);
		let socket = entry && entry.socket;
		// #3 send
		let result = msg && socket && socket.connected && socket._channel && socket._channel.readyState === 'open';
		// result && socket.send(msg);
		try {
			result && socket.send(msg);
			// DONT SET RESULT TO TRUE !
		} catch (e) {
			this.log('[NEIGHBORHOOD:SEND:ERROR] ', new Error(e));
			result = false;
		}
		return result;
	}

	/**
 * creates a new incomming or outgoing connection depending on arguments
 * @param {callback} callbacks the callback function when the stun/ice server returns the
 * offer
 * @param {object} message empty if it must initiate a connection, or the message received
 * if it must answer or finalize one
 * @param {string} protocol the connection is established for a specific protocol
 * @return {string} the id of the socket
 */
	connection(callbacks, message, protocol) {

		let msg = callbacks && callbacks.type && callbacks || message;
		let result;

		if (!msg) {
			result = this.initiate(callbacks, protocol);
		} else if (msg.type === 'MRequest') {

			if (message && message.pid && this.ID !== message.pid) {
				result = this.accept(msg, callbacks);
				result = this.alreadyExists(msg, callbacks) || result;
			}
		} else if (msg.type === 'MResponse') {
			result = this.finalize(msg);
			result = this.alreadyExists(msg) || result;
		}

		return result && result.id;
	}

	/**
  * Get the entry corresponding to the id in argument. The entry contains
  * the socket.
  * @param {string} id the identifier of the socket to retrieve
  * @return {object} an entry from tables. It priorizes entries in living, then dying,
  * then pending.
  */
	get(id) {
		return this.living.get(id) || this.dying.get(id) || this.pending.get(id);
	}

	/**
  * Common behavior to initiating and accepting sockets
  * @param {object} entry the entry in the neighborhood table
  * @return {void}
  */
	common(entry) {
		const self = this,
		      socket = entry.socket;

		socket.on('data', message => {
			message = self.decode(message);
			self.emit('receive', entry.pid, message);
		});
		socket.on('stream', stream => {
			self.emit('stream', entry.pid, stream);
		});

		socket.on('error', err => {
			self.emit('error', new Error(err));
		});
	}

	/**
  * initiates a connection with another peer -- the id of which is unknown
  * @param {callback} callbacks the function to call when signaling info are received and
  * when the connection is ready to be used
  * @param {string} protocol The protocol
  * @return {object} entry
  */
	initiate(callbacks, protocol) {
		const self = this;
		let opts = self.options;
		opts.initiator = true;
		let socket = new SimplePeer(opts);
		let entry = {
			id: uuid(),
			socket: socket,
			protocol: protocol,
			successful: false, // not yet
			onOffer: callbacks && callbacks.onInitiate,
			onReady: callbacks && callbacks.onReady
		};

		this.pending.insert(entry);
		socket.on('signal', offer => {
			entry.onOffer && entry.onOffer(self.MRequest(entry.id, self.ID, offer, protocol));
		});

		entry.timeout = setTimeout(() => {
			let e = self.pending.get(entry.id);
			if (e && !e.successful) {
				self.emit('fail', '[FAIL:INITIATE] an error occured during removing the entry');
			}
			self.pending.remove(entry) && socket.destroy();
		}, this.TIMEOUT);
		return entry;
	}

	/**
  * accept the offer of another peer
  * @param {object} message the received message containing id and offer
  * @param {callback} callbacks the function call after receiving the offer and
  * when the connection is ready
  * @return {object} Entry
  */
	accept(message, callbacks) {
		// #1 if already exists, use it


		let prior = this.pending.get(message.tid);
		if (prior) {
			return prior;
		}
		// #2 otherwise, create the socket
		const self = this;
		// let opts=JSON.parse(JSON.stringify(this.options));// quick but ugly copy
		let opts = this.options;
		opts.initiator = false;
		let socket = new SimplePeer(opts);
		let entry = {
			id: message.tid,
			pid: message.pid,
			protocol: message.protocol,
			socket: socket,
			successful: false,
			onOffer: callbacks && callbacks.onAccept,
			onReady: callbacks && callbacks.onReady
		};

		this.pending.insert(entry);
		socket.on('signal', function (offer) {
			entry.onOffer && entry.onOffer(self.MResponse(entry.id, self.ID, offer, entry.protocol));
		});
		socket.on('connect', function () {
			self.get(entry.pid) && socket.destroy();
			self.pending.remove(entry);
			self.living.insert({
				id: entry.pid,
				socket: entry.socket,
				onReady: entry.onReady,
				onOffer: entry.onOffer
			});

			entry.onReady && entry.onReady(entry.pid);
			self.emit('ready', entry.pid);
			entry.protocol && self.emit('ready-' + entry.protocol, entry.pid);

			clearTimeout(entry.timeout);
			entry.timeout = null;
		});
		socket.on('close', function () {
			if (self.pending.contains(entry.id)) {
				// #A pending: entry is kept until automatic destruction
				entry.socket = null;
			} else {
				// #B living or dying: clear the tables
				entry.timeout && clearTimeout(entry.timeout);
				entry.timeout = null;
				let live = self.living.removeAll(entry.pid);
				if (live) {
					for (let i = 0; i < live.occ; ++i) {
						self.emit('disconnect', entry.pid);
					}
				}
				self.dying.remove(entry.pid);
			}
		});

		this.common(entry);

		entry.timeout = setTimeout(function () {
			let e = self.pending.get(entry.id);
			if (e && !e.successful) {
				self.emit('fail', '[FAIL:ACCEPT] an error occured during removing the entry');
			}
			self.pending.remove(entry.id) && socket.destroy();
		}, this.TIMEOUT);
		return entry;
	}

	/**
 * finalize the behavior of an initiating socket
 * @param {object} message the received message possibly containing an answer to the
 * proposed offer
 * @return {object} Return prior entry
 */
	finalize(message) {
		// #1 if it does not exists, stop; or if it exists but already setup
		// return it
		let prior = this.pending.get(message.tid);
		if (!prior || prior.pid) {
			return prior;
		}
		// #2 otherwise set the events correctly
		prior.pid = message.pid;

		let entry = {
			id: message.pid,
			socket: prior.socket,
			protocol: prior.protocol,
			onReady: prior.onReady,
			onOffer: prior.onOffer
		};

		const self = this;
		let socket = entry.socket;
		socket.on('connect', function () {

			self.get(entry.id) && socket.destroy();
			self.pending.remove(prior);
			self.living.insert(entry);
			entry.onReady && entry.onReady(prior.pid);
			self.emit('ready', prior.pid);
			entry.protocol && self.emit('ready-' + entry.protocol, prior.pid);
			clearTimeout(prior.timeout);
		});
		socket.on('close', function () {
			if (self.pending.contains(message.tid)) {
				self.pending.get(message.tid).socket = null;
			} else {
				prior.timeout && clearTimeout(prior.timeout);
				prior.timeout = null;
				let live = self.living.removeAll(prior.pid);
				if (live) {
					for (let i = 0; i < live.occ; ++i) {
						self.emit('disconnect', prior.pid);
					}
				}
				self.dying.remove(prior.pid);
			}
		});

		this.common(prior);

		return prior;
	}

	/**
 *  the peer id already exists in the tables
 *  @param {object} message The message
 *  @param {callback} callbacks the callbacks
 *  @return {object} alreaydExist
 */
	alreadyExists(message, callbacks) {
		const self = this;
		let alreadyExists = this.get(message.pid);
		if (!alreadyExists) {
			// #A does not already exists but pending
			let entry = this.pending.get(message.tid);
			entry && entry.socket && message.offer && entry.socket.signal(message.offer);
		} else {
			// #B already exists and pending
			let toRemove = this.pending.get(message.tid);
			if (toRemove && toRemove.socket) {
				// exists but socket still w8in
				if (!alreadyExists.timeout) {
					// #1 already in living socket, add an occurrence
					this.living.insert(message.pid);
					toRemove.successful = true;
				} else {
					// #2 was dying, resurect the socket
					this.dying.remove(alreadyExists);
					clearTimeout(alreadyExists.timeout);
					alreadyExists.timeout = null;
					this.living.insert(alreadyExists);
					toRemove.successful = true;
				}
				toRemove.socket.destroy();
				// #C standard on accept function if it exists in arg
				message.offer && callbacks && callbacks.onAccept && callbacks.onAccept(self.MResponse(message.tid, this.ID, null, message.protocol));

				callbacks && callbacks.onReady && callbacks.onReady(alreadyExists.id) || toRemove && toRemove.onReady && toRemove.onReady(alreadyExists.id);
				this.emit('ready', alreadyExists.id);
				message.protocol && this.emit('ready-' + message.protocol, alreadyExists.id);
			}
		}
		return alreadyExists;
	}

}

module.exports = Neighborhood;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5laWdoYm9yaG9vZC5qcyJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJyZXF1aXJlIiwiU29ja2V0IiwidXVpZCIsIlNvcnRlZEFycmF5IiwiTXVsdGlTZXQiLCJTaW1wbGVQZWVyIiwiTmVpZ2hib3Job29kIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwiUFJPVE9DT0wiLCJjb25maWciLCJ3ZWJydGMiLCJ0cmlja2xlIiwiVElNRU9VVCIsInRpbWVvdXQiLCJlbmNvZGluZyIsImRlY29kaW5nIiwiSUQiLCJ3cnRjIiwidmVyYm9zZSIsIkNvbXBhcmF0b3IiLCJhIiwiYiIsImZpcnN0IiwiaWQiLCJzZWNvbmQiLCJwZW5kaW5nIiwibGl2aW5nIiwiZHlpbmciLCJNUmVzcG9uc2UiLCJ0aWQiLCJwaWQiLCJvZmZlciIsInByb3RvY29sIiwidHlwZSIsIk1SZXF1ZXN0IiwibG9nIiwiYXJncyIsImNvbnNvbGUiLCJkaXNjb25uZWN0IiwicmVzdWx0IiwiYXJyIiwiZm9yRWFjaCIsImUiLCJzb2NrZXQiLCJkZXN0cm95IiwibXMiLCJsZW5ndGgiLCJlbnRyeSIsInJlbW92ZSIsImVtaXQiLCJvY2MiLCJzZXRUaW1lb3V0IiwiaW5zZXJ0IiwiZW5jb2RlIiwibWVzc2FnZSIsImRlY29kZSIsInNlbmQiLCJtc2ciLCJTdHJpbmciLCJnZXQiLCJjb25uZWN0ZWQiLCJfY2hhbm5lbCIsInJlYWR5U3RhdGUiLCJFcnJvciIsImNvbm5lY3Rpb24iLCJjYWxsYmFja3MiLCJpbml0aWF0ZSIsImFjY2VwdCIsImFscmVhZHlFeGlzdHMiLCJmaW5hbGl6ZSIsImNvbW1vbiIsInNlbGYiLCJvbiIsInN0cmVhbSIsImVyciIsIm9wdHMiLCJpbml0aWF0b3IiLCJzdWNjZXNzZnVsIiwib25PZmZlciIsIm9uSW5pdGlhdGUiLCJvblJlYWR5IiwicHJpb3IiLCJvbkFjY2VwdCIsImNsZWFyVGltZW91dCIsImNvbnRhaW5zIiwibGl2ZSIsInJlbW92ZUFsbCIsImkiLCJzaWduYWwiLCJ0b1JlbW92ZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLE1BQU1BLGVBQWVDLFFBQVEsUUFBUixDQUFyQjtBQUNBLE1BQU1DLFNBQVNELFFBQVEsYUFBUixDQUFmOztBQUVBLE1BQU1FLE9BQU9GLFFBQVEsU0FBUixDQUFiO0FBQ0EsTUFBTUcsY0FBY0gsUUFBUSw0QkFBUixDQUFwQjtBQUNBLE1BQU1JLFdBQVdKLFFBQVEsZUFBUixDQUFqQjtBQUNBLE1BQU1LLGFBQWFMLFFBQVEsYUFBUixDQUFuQjs7QUFFQTs7Ozs7O0FBTUEsTUFBTU0sWUFBTixTQUEyQlAsWUFBM0IsQ0FBd0M7QUFDdkNRLGFBQWFDLE9BQWIsRUFBc0I7QUFDckI7O0FBRUUsT0FBS0MsUUFBTCxHQUFnQixtQkFBaEI7QUFDQTtBQUNBLE9BQUtELE9BQUwsR0FBZSxFQUFmO0FBQ0EsT0FBS0EsT0FBTCxDQUFhRSxNQUFiLEdBQXVCRixXQUFXQSxRQUFRRyxNQUFwQixJQUErQixFQUFyRDtBQUNBLE9BQUtILE9BQUwsQ0FBYUksT0FBYixHQUF3QkosV0FBV0EsUUFBUUcsTUFBbkIsSUFDQUgsUUFBUUcsTUFBUixDQUFlQyxPQURoQixJQUM0QixLQURuRDtBQUVBLE9BQUtDLE9BQUwsR0FBZ0JMLFdBQVdBLFFBQVFNLE9BQXBCLElBQWlDLElBQUksRUFBSixHQUFTLElBQXpELENBVG1CLENBUzZDOztBQUVsRSxPQUFLQyxRQUFMLEdBQWdCUCxRQUFRTyxRQUF4QjtBQUNBLE9BQUtDLFFBQUwsR0FBZ0JSLFFBQVFRLFFBQXhCO0FBQ0EsT0FBS0MsRUFBTCxHQUFVZixNQUFWO0FBQ0EsTUFBRyxLQUFLTSxPQUFMLENBQWFFLE1BQWIsQ0FBb0JRLElBQXZCLEVBQTZCO0FBQzVCLFFBQUtWLE9BQUwsQ0FBYVUsSUFBYixHQUFvQixLQUFLVixPQUFMLENBQWFFLE1BQWIsQ0FBb0JRLElBQXhDO0FBQ0E7O0FBRUQsTUFBR1YsV0FBV0EsUUFBUVcsT0FBdEIsRUFBK0I7QUFDOUIsUUFBS0EsT0FBTCxHQUFlWCxRQUFRVyxPQUF2QjtBQUNBOztBQUVDOzs7QUFHQSxPQUFLQyxVQUFMLEdBQWtCLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVO0FBQ3hCLE9BQUlDLFFBQVFGLEVBQUVHLEVBQUYsSUFBUUgsQ0FBcEI7QUFDQSxPQUFJSSxTQUFTSCxFQUFFRSxFQUFGLElBQVFGLENBQXJCO0FBQ0EsT0FBSUMsUUFBUUUsTUFBWixFQUFtQjtBQUFFLFdBQU8sQ0FBQyxDQUFSO0FBQVk7QUFDakMsT0FBSUYsUUFBUUUsTUFBWixFQUFtQjtBQUFFLFdBQVEsQ0FBUjtBQUFZO0FBQ2pDLFVBQU8sQ0FBUDtBQUNILEdBTkQ7QUFPQTtBQUNBLE9BQUtDLE9BQUwsR0FBZSxJQUFJdkIsV0FBSixDQUFnQixLQUFLaUIsVUFBckIsQ0FBZixDQWpDbUIsQ0FpQzhCO0FBQ2pELE9BQUtPLE1BQUwsR0FBYyxJQUFJdkIsUUFBSixDQUFhLEtBQUtnQixVQUFsQixDQUFkLENBbENtQixDQWtDMEI7QUFDN0MsT0FBS1EsS0FBTCxHQUFhLElBQUl6QixXQUFKLENBQWdCLEtBQUtpQixVQUFyQixDQUFiLENBbkNtQixDQW1DNEI7QUFDakQ7O0FBRURTLFdBQVdDLEdBQVgsRUFBZ0JDLEdBQWhCLEVBQXFCQyxLQUFyQixFQUE0QkMsUUFBNUIsRUFBc0M7QUFDckMsU0FBTztBQUNOSCxRQUFLQSxHQURDO0FBRU5DLFFBQUtBLEdBRkM7QUFHTkUsYUFBVUEsUUFISjtBQUlOQyxTQUFNLFdBSkE7QUFLTkYsVUFBT0E7QUFMRCxHQUFQO0FBT0E7QUFDREcsVUFBVUwsR0FBVixFQUFlQyxHQUFmLEVBQW9CQyxLQUFwQixFQUEyQkMsUUFBM0IsRUFBcUM7QUFDcEMsU0FBTztBQUNOSCxRQUFLQSxHQURDO0FBRU5DLFFBQUtBLEdBRkM7QUFHTkUsYUFBVUEsUUFISjtBQUlOQyxTQUFNLFVBSkE7QUFLTkYsVUFBT0E7QUFMRCxHQUFQO0FBT0E7O0FBRURJLEtBQUssR0FBR0MsSUFBUixFQUFjO0FBQ2IsTUFBRyxLQUFLbEIsT0FBUixFQUFpQjtBQUNoQm1CLFdBQVFGLEdBQVIsQ0FBWSxpQkFBWixFQUErQkMsSUFBL0I7QUFDQTtBQUNEOztBQUVBOzs7Ozs7O0FBT0FFLFlBQVlmLEVBQVosRUFBZ0I7QUFDZCxNQUFJZ0IsU0FBUyxJQUFiO0FBQ0EsTUFBSSxDQUFDaEIsRUFBTCxFQUFTO0FBQ1A7QUFDQSxRQUFLRSxPQUFMLENBQWFlLEdBQWIsQ0FBaUJDLE9BQWpCLENBQTBCQyxDQUFELElBQU87QUFDNUJBLE1BQUVDLE1BQUYsSUFBWUQsRUFBRUMsTUFBRixDQUFTQyxPQUFULEVBQVo7QUFDSCxJQUZEO0FBR0EsVUFBTyxLQUFLbEIsTUFBTCxDQUFZbUIsRUFBWixDQUFlTCxHQUFmLENBQW1CTSxNQUFuQixHQUE0QixDQUFuQyxFQUFzQztBQUNsQyxVQUFNSixJQUFJLEtBQUtoQixNQUFMLENBQVltQixFQUFaLENBQWVMLEdBQWYsQ0FBbUIsQ0FBbkIsQ0FBVjtBQUNBRSxNQUFFQyxNQUFGLElBQVlELEVBQUVDLE1BQUYsQ0FBU0MsT0FBVCxFQUFaO0FBQ0g7QUFDRCxVQUFPLEtBQUtqQixLQUFMLENBQVdhLEdBQVgsQ0FBZU0sTUFBZixHQUF3QixDQUEvQixFQUFrQztBQUM5QixVQUFNSixJQUFJLEtBQUtmLEtBQUwsQ0FBV2EsR0FBWCxDQUFlLENBQWYsQ0FBVjtBQUNBRSxNQUFFQyxNQUFGLElBQVlELEVBQUVDLE1BQUYsQ0FBU0MsT0FBVCxFQUFaO0FBQ0g7QUFDRixHQWJELE1BYU87QUFDTDtBQUNBLE9BQUlHLFFBQVEsS0FBS3JCLE1BQUwsQ0FBWXNCLE1BQVosQ0FBbUJ6QixFQUFuQixDQUFaO0FBQ0F3QixZQUFTLEtBQUtFLElBQUwsQ0FBVSxZQUFWLEVBQXdCRixNQUFNeEIsRUFBOUIsQ0FBVDtBQUNBLE9BQUl3QixTQUFTQSxNQUFNRyxHQUFOLElBQWEsQ0FBMUIsRUFBNkI7QUFDekJILFVBQU1sQyxPQUFOLEdBQWdCc0MsV0FBVyxZQUFZO0FBQ25DSixXQUFNSixNQUFOLENBQWFDLE9BQWI7QUFDSCxLQUZlLEVBRWIsS0FBS2hDLE9BRlEsQ0FBaEI7QUFHQSxTQUFLZSxLQUFMLENBQVd5QixNQUFYLENBQWtCTCxLQUFsQjtBQUNIO0FBQ0RSLFlBQVNRLFNBQVMsSUFBVCxJQUFpQixLQUExQjtBQUNEO0FBQ0QsU0FBT1IsTUFBUDtBQUNEOztBQUVGOzs7OztBQUtBYyxRQUFRQyxPQUFSLEVBQWlCO0FBQ2hCLFNBQU8sS0FBS3hDLFFBQUwsQ0FBY3dDLE9BQWQsQ0FBUDtBQUNBOztBQUVEOzs7OztBQUtBQyxRQUFRRCxPQUFSLEVBQWlCO0FBQ2hCLFNBQU8sS0FBS3ZDLFFBQUwsQ0FBY3VDLE9BQWQsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7QUFNQUUsTUFBTWpDLEVBQU4sRUFBVStCLE9BQVYsRUFBbUI7QUFDbEI7QUFDQSxNQUFJRyxNQUFRSCxtQkFBbUJJLE1BQXBCLElBQStCSixPQUFoQyxJQUE0QyxLQUFLRCxNQUFMLENBQVlDLE9BQVosQ0FBdEQ7QUFDQTtBQUNBLE1BQUlQLFFBQVEsS0FBS1ksR0FBTCxDQUFTcEMsRUFBVCxDQUFaO0FBQ0EsTUFBSW9CLFNBQVNJLFNBQVNBLE1BQU1KLE1BQTVCO0FBQ0E7QUFDQSxNQUFJSixTQUFTa0IsT0FBT2QsTUFBUCxJQUFpQkEsT0FBT2lCLFNBQXhCLElBQXFDakIsT0FBT2tCLFFBQTVDLElBQXlEbEIsT0FBT2tCLFFBQVAsQ0FBZ0JDLFVBQWhCLEtBQStCLE1BQXJHO0FBQ0E7QUFDQSxNQUFJO0FBQ0h2QixhQUFVSSxPQUFPYSxJQUFQLENBQVlDLEdBQVosQ0FBVjtBQUNBO0FBQ0EsR0FIRCxDQUdFLE9BQU9mLENBQVAsRUFBVTtBQUNYLFFBQUtQLEdBQUwsQ0FBUyw0QkFBVCxFQUF1QyxJQUFJNEIsS0FBSixDQUFVckIsQ0FBVixDQUF2QztBQUNBSCxZQUFTLEtBQVQ7QUFDQTtBQUNELFNBQU9BLE1BQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7O0FBU0F5QixZQUFZQyxTQUFaLEVBQXVCWCxPQUF2QixFQUFnQ3RCLFFBQWhDLEVBQTBDOztBQUV6QyxNQUFJeUIsTUFBT1EsYUFBYUEsVUFBVWhDLElBQXZCLElBQStCZ0MsU0FBaEMsSUFBOENYLE9BQXhEO0FBQ0EsTUFBSWYsTUFBSjs7QUFFQSxNQUFJLENBQUNrQixHQUFMLEVBQVU7QUFDVGxCLFlBQVMsS0FBSzJCLFFBQUwsQ0FBY0QsU0FBZCxFQUF5QmpDLFFBQXpCLENBQVQ7QUFDQSxHQUZELE1BRU8sSUFBSXlCLElBQUl4QixJQUFKLEtBQVcsVUFBZixFQUEyQjs7QUFFakMsT0FBR3FCLFdBQVdBLFFBQVF4QixHQUFuQixJQUEwQixLQUFLZCxFQUFMLEtBQVlzQyxRQUFReEIsR0FBakQsRUFBc0Q7QUFDckRTLGFBQVMsS0FBSzRCLE1BQUwsQ0FBWVYsR0FBWixFQUFpQlEsU0FBakIsQ0FBVDtBQUNBMUIsYUFBUyxLQUFLNkIsYUFBTCxDQUFtQlgsR0FBbkIsRUFBd0JRLFNBQXhCLEtBQXNDMUIsTUFBL0M7QUFDQTtBQUVELEdBUE0sTUFPQSxJQUFJa0IsSUFBSXhCLElBQUosS0FBVyxXQUFmLEVBQTRCO0FBQ2xDTSxZQUFTLEtBQUs4QixRQUFMLENBQWNaLEdBQWQsQ0FBVDtBQUNBbEIsWUFBUyxLQUFLNkIsYUFBTCxDQUFtQlgsR0FBbkIsS0FBMkJsQixNQUFwQztBQUNBOztBQUVELFNBQU9BLFVBQVVBLE9BQU9oQixFQUF4QjtBQUNBOztBQUVBOzs7Ozs7O0FBT0FvQyxLQUFJcEMsRUFBSixFQUFPO0FBQ0gsU0FBTyxLQUFLRyxNQUFMLENBQVlpQyxHQUFaLENBQWdCcEMsRUFBaEIsS0FBdUIsS0FBS0ksS0FBTCxDQUFXZ0MsR0FBWCxDQUFlcEMsRUFBZixDQUF2QixJQUE2QyxLQUFLRSxPQUFMLENBQWFrQyxHQUFiLENBQWlCcEMsRUFBakIsQ0FBcEQ7QUFDSDs7QUFFRjs7Ozs7QUFLQStDLFFBQVF2QixLQUFSLEVBQWU7QUFDZCxRQUFNd0IsT0FBTyxJQUFiO0FBQUEsUUFBbUI1QixTQUFTSSxNQUFNSixNQUFsQzs7QUFFQUEsU0FBTzZCLEVBQVAsQ0FBVSxNQUFWLEVBQW1CbEIsT0FBRCxJQUFhO0FBQzlCQSxhQUFVaUIsS0FBS2hCLE1BQUwsQ0FBWUQsT0FBWixDQUFWO0FBQ0FpQixRQUFLdEIsSUFBTCxDQUFVLFNBQVYsRUFBcUJGLE1BQU1qQixHQUEzQixFQUFnQ3dCLE9BQWhDO0FBQ0EsR0FIRDtBQUlBWCxTQUFPNkIsRUFBUCxDQUFVLFFBQVYsRUFBcUJDLE1BQUQsSUFBWTtBQUMvQkYsUUFBS3RCLElBQUwsQ0FBVSxRQUFWLEVBQW9CRixNQUFNakIsR0FBMUIsRUFBK0IyQyxNQUEvQjtBQUNBLEdBRkQ7O0FBSUE5QixTQUFPNkIsRUFBUCxDQUFVLE9BQVYsRUFBbUJFLE9BQU87QUFDekJILFFBQUt0QixJQUFMLENBQVUsT0FBVixFQUFtQixJQUFJYyxLQUFKLENBQVVXLEdBQVYsQ0FBbkI7QUFDQSxHQUZEO0FBR0E7O0FBRUQ7Ozs7Ozs7QUFPQVIsVUFBVUQsU0FBVixFQUFxQmpDLFFBQXJCLEVBQStCO0FBQzlCLFFBQU11QyxPQUFPLElBQWI7QUFDQSxNQUFJSSxPQUFPSixLQUFLaEUsT0FBaEI7QUFDQW9FLE9BQUtDLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxNQUFJakMsU0FBUyxJQUFJdkMsVUFBSixDQUFldUUsSUFBZixDQUFiO0FBQ0EsTUFBSTVCLFFBQVE7QUFDWHhCLE9BQUl0QixNQURPO0FBRVgwQyxXQUFRQSxNQUZHO0FBR1hYLGFBQVVBLFFBSEM7QUFJWDZDLGVBQVksS0FKRCxFQUlRO0FBQ25CQyxZQUFTYixhQUFhQSxVQUFVYyxVQUxyQjtBQU1YQyxZQUFTZixhQUFhQSxVQUFVZTtBQU5yQixHQUFaOztBQVNBLE9BQUt2RCxPQUFMLENBQWEyQixNQUFiLENBQW9CTCxLQUFwQjtBQUNBSixTQUFPNkIsRUFBUCxDQUFVLFFBQVYsRUFBcUJ6QyxLQUFELElBQVc7QUFDOUJnQixTQUFNK0IsT0FBTixJQUFpQi9CLE1BQU0rQixPQUFOLENBQWNQLEtBQUtyQyxRQUFMLENBQWNhLE1BQU14QixFQUFwQixFQUF3QmdELEtBQUt2RCxFQUE3QixFQUFpQ2UsS0FBakMsRUFBd0NDLFFBQXhDLENBQWQsQ0FBakI7QUFDQSxHQUZEOztBQUlBZSxRQUFNbEMsT0FBTixHQUFnQnNDLFdBQVcsTUFBTTtBQUNoQyxPQUFJVCxJQUFJNkIsS0FBSzlDLE9BQUwsQ0FBYWtDLEdBQWIsQ0FBaUJaLE1BQU14QixFQUF2QixDQUFSO0FBQ0EsT0FBSW1CLEtBQUssQ0FBQ0EsRUFBRW1DLFVBQVosRUFBd0I7QUFDdkJOLFNBQUt0QixJQUFMLENBQVUsTUFBVixFQUFrQiw0REFBbEI7QUFDQTtBQUNEc0IsUUFBSzlDLE9BQUwsQ0FBYXVCLE1BQWIsQ0FBb0JELEtBQXBCLEtBQThCSixPQUFPQyxPQUFQLEVBQTlCO0FBQ0EsR0FOZSxFQU1iLEtBQUtoQyxPQU5RLENBQWhCO0FBT0EsU0FBT21DLEtBQVA7QUFDQTs7QUFHRDs7Ozs7OztBQU9Bb0IsUUFBUWIsT0FBUixFQUFpQlcsU0FBakIsRUFBNEI7QUFDM0I7OztBQUdBLE1BQUlnQixRQUFRLEtBQUt4RCxPQUFMLENBQWFrQyxHQUFiLENBQWlCTCxRQUFRekIsR0FBekIsQ0FBWjtBQUNBLE1BQUlvRCxLQUFKLEVBQVc7QUFDVixVQUFPQSxLQUFQO0FBQ0E7QUFDRDtBQUNBLFFBQU1WLE9BQU8sSUFBYjtBQUNBO0FBQ0EsTUFBSUksT0FBTyxLQUFLcEUsT0FBaEI7QUFDQW9FLE9BQUtDLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxNQUFJakMsU0FBUyxJQUFJdkMsVUFBSixDQUFldUUsSUFBZixDQUFiO0FBQ0EsTUFBSTVCLFFBQVE7QUFDWHhCLE9BQUkrQixRQUFRekIsR0FERDtBQUVYQyxRQUFLd0IsUUFBUXhCLEdBRkY7QUFHWEUsYUFBVXNCLFFBQVF0QixRQUhQO0FBSVhXLFdBQVFBLE1BSkc7QUFLWGtDLGVBQVksS0FMRDtBQU1YQyxZQUFTYixhQUFhQSxVQUFVaUIsUUFOckI7QUFPWEYsWUFBU2YsYUFBYUEsVUFBVWU7QUFQckIsR0FBWjs7QUFVQSxPQUFLdkQsT0FBTCxDQUFhMkIsTUFBYixDQUFvQkwsS0FBcEI7QUFDQUosU0FBTzZCLEVBQVAsQ0FBVSxRQUFWLEVBQW9CLFVBQVV6QyxLQUFWLEVBQWlCO0FBQ3BDZ0IsU0FBTStCLE9BQU4sSUFBaUIvQixNQUFNK0IsT0FBTixDQUFjUCxLQUFLM0MsU0FBTCxDQUFlbUIsTUFBTXhCLEVBQXJCLEVBQXlCZ0QsS0FBS3ZELEVBQTlCLEVBQWtDZSxLQUFsQyxFQUF5Q2dCLE1BQU1mLFFBQS9DLENBQWQsQ0FBakI7QUFDQSxHQUZEO0FBR0FXLFNBQU82QixFQUFQLENBQVUsU0FBVixFQUFxQixZQUFZO0FBQ2hDRCxRQUFLWixHQUFMLENBQVNaLE1BQU1qQixHQUFmLEtBQXVCYSxPQUFPQyxPQUFQLEVBQXZCO0FBQ0EyQixRQUFLOUMsT0FBTCxDQUFhdUIsTUFBYixDQUFvQkQsS0FBcEI7QUFDQXdCLFFBQUs3QyxNQUFMLENBQVkwQixNQUFaLENBQW1CO0FBQ2xCN0IsUUFBSXdCLE1BQU1qQixHQURRO0FBRWxCYSxZQUFRSSxNQUFNSixNQUZJO0FBR2xCcUMsYUFBU2pDLE1BQU1pQyxPQUhHO0FBSWxCRixhQUFTL0IsTUFBTStCO0FBSkcsSUFBbkI7O0FBUUEvQixTQUFNaUMsT0FBTixJQUFpQmpDLE1BQU1pQyxPQUFOLENBQWNqQyxNQUFNakIsR0FBcEIsQ0FBakI7QUFDQXlDLFFBQUt0QixJQUFMLENBQVUsT0FBVixFQUFtQkYsTUFBTWpCLEdBQXpCO0FBQ0FpQixTQUFNZixRQUFOLElBQWtCdUMsS0FBS3RCLElBQUwsQ0FBVSxXQUFTRixNQUFNZixRQUF6QixFQUFtQ2UsTUFBTWpCLEdBQXpDLENBQWxCOztBQUVBcUQsZ0JBQWFwQyxNQUFNbEMsT0FBbkI7QUFDQWtDLFNBQU1sQyxPQUFOLEdBQWdCLElBQWhCO0FBQ0EsR0FqQkQ7QUFrQkE4QixTQUFPNkIsRUFBUCxDQUFVLE9BQVYsRUFBbUIsWUFBWTtBQUM5QixPQUFJRCxLQUFLOUMsT0FBTCxDQUFhMkQsUUFBYixDQUFzQnJDLE1BQU14QixFQUE1QixDQUFKLEVBQXFDO0FBQ3BDO0FBQ0F3QixVQUFNSixNQUFOLEdBQWUsSUFBZjtBQUNBLElBSEQsTUFHTztBQUNOO0FBQ0FJLFVBQU1sQyxPQUFOLElBQWlCc0UsYUFBYXBDLE1BQU1sQyxPQUFuQixDQUFqQjtBQUNBa0MsVUFBTWxDLE9BQU4sR0FBZ0IsSUFBaEI7QUFDQSxRQUFJd0UsT0FBT2QsS0FBSzdDLE1BQUwsQ0FBWTRELFNBQVosQ0FBc0J2QyxNQUFNakIsR0FBNUIsQ0FBWDtBQUNBLFFBQUl1RCxJQUFKLEVBQVU7QUFDVCxVQUFLLElBQUlFLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsS0FBS25DLEdBQXpCLEVBQThCLEVBQUVxQyxDQUFoQyxFQUFtQztBQUNsQ2hCLFdBQUt0QixJQUFMLENBQVUsWUFBVixFQUF3QkYsTUFBTWpCLEdBQTlCO0FBQ0E7QUFDRDtBQUNEeUMsU0FBSzVDLEtBQUwsQ0FBV3FCLE1BQVgsQ0FBa0JELE1BQU1qQixHQUF4QjtBQUNBO0FBQ0QsR0FoQkQ7O0FBa0JBLE9BQUt3QyxNQUFMLENBQVl2QixLQUFaOztBQUVBQSxRQUFNbEMsT0FBTixHQUFnQnNDLFdBQVcsWUFBWTtBQUN0QyxPQUFJVCxJQUFJNkIsS0FBSzlDLE9BQUwsQ0FBYWtDLEdBQWIsQ0FBaUJaLE1BQU14QixFQUF2QixDQUFSO0FBQ0EsT0FBSW1CLEtBQUssQ0FBQ0EsRUFBRW1DLFVBQVosRUFBd0I7QUFDdkJOLFNBQUt0QixJQUFMLENBQVUsTUFBVixFQUFrQiwwREFBbEI7QUFDQTtBQUNEc0IsUUFBSzlDLE9BQUwsQ0FBYXVCLE1BQWIsQ0FBb0JELE1BQU14QixFQUExQixLQUFpQ29CLE9BQU9DLE9BQVAsRUFBakM7QUFDQSxHQU5lLEVBTWIsS0FBS2hDLE9BTlEsQ0FBaEI7QUFPQSxTQUFPbUMsS0FBUDtBQUNBOztBQUdEOzs7Ozs7QUFNQXNCLFVBQVVmLE9BQVYsRUFBbUI7QUFDbEI7QUFDQTtBQUNBLE1BQUkyQixRQUFRLEtBQUt4RCxPQUFMLENBQWFrQyxHQUFiLENBQWlCTCxRQUFRekIsR0FBekIsQ0FBWjtBQUNBLE1BQUksQ0FBQ29ELEtBQUQsSUFBVUEsTUFBTW5ELEdBQXBCLEVBQXlCO0FBQ3hCLFVBQU9tRCxLQUFQO0FBQ0E7QUFDRDtBQUNBQSxRQUFNbkQsR0FBTixHQUFZd0IsUUFBUXhCLEdBQXBCOztBQUVBLE1BQUlpQixRQUFRO0FBQ1h4QixPQUFJK0IsUUFBUXhCLEdBREQ7QUFFWGEsV0FBUXNDLE1BQU10QyxNQUZIO0FBR1hYLGFBQVVpRCxNQUFNakQsUUFITDtBQUlYZ0QsWUFBU0MsTUFBTUQsT0FKSjtBQUtYRixZQUFTRyxNQUFNSDtBQUxKLEdBQVo7O0FBUUEsUUFBTVAsT0FBTyxJQUFiO0FBQ0EsTUFBSTVCLFNBQVNJLE1BQU1KLE1BQW5CO0FBQ0FBLFNBQU82QixFQUFQLENBQVUsU0FBVixFQUFxQixZQUFZOztBQUVoQ0QsUUFBS1osR0FBTCxDQUFTWixNQUFNeEIsRUFBZixLQUFzQm9CLE9BQU9DLE9BQVAsRUFBdEI7QUFDQTJCLFFBQUs5QyxPQUFMLENBQWF1QixNQUFiLENBQW9CaUMsS0FBcEI7QUFDQVYsUUFBSzdDLE1BQUwsQ0FBWTBCLE1BQVosQ0FBbUJMLEtBQW5CO0FBQ0FBLFNBQU1pQyxPQUFOLElBQWlCakMsTUFBTWlDLE9BQU4sQ0FBY0MsTUFBTW5ELEdBQXBCLENBQWpCO0FBQ0F5QyxRQUFLdEIsSUFBTCxDQUFVLE9BQVYsRUFBbUJnQyxNQUFNbkQsR0FBekI7QUFDQWlCLFNBQU1mLFFBQU4sSUFBa0J1QyxLQUFLdEIsSUFBTCxDQUFVLFdBQVNGLE1BQU1mLFFBQXpCLEVBQW1DaUQsTUFBTW5ELEdBQXpDLENBQWxCO0FBQ0FxRCxnQkFBYUYsTUFBTXBFLE9BQW5CO0FBRUEsR0FWRDtBQVdBOEIsU0FBTzZCLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFlBQVk7QUFDOUIsT0FBSUQsS0FBSzlDLE9BQUwsQ0FBYTJELFFBQWIsQ0FBc0I5QixRQUFRekIsR0FBOUIsQ0FBSixFQUF3QztBQUN2QzBDLFNBQUs5QyxPQUFMLENBQWFrQyxHQUFiLENBQWlCTCxRQUFRekIsR0FBekIsRUFBOEJjLE1BQTlCLEdBQXVDLElBQXZDO0FBQ0EsSUFGRCxNQUVPO0FBQ05zQyxVQUFNcEUsT0FBTixJQUFpQnNFLGFBQWFGLE1BQU1wRSxPQUFuQixDQUFqQjtBQUNBb0UsVUFBTXBFLE9BQU4sR0FBZ0IsSUFBaEI7QUFDQSxRQUFJd0UsT0FBT2QsS0FBSzdDLE1BQUwsQ0FBWTRELFNBQVosQ0FBc0JMLE1BQU1uRCxHQUE1QixDQUFYO0FBQ0EsUUFBSXVELElBQUosRUFBVTtBQUNULFVBQUssSUFBSUUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixLQUFLbkMsR0FBekIsRUFBOEIsRUFBRXFDLENBQWhDLEVBQW1DO0FBQ2xDaEIsV0FBS3RCLElBQUwsQ0FBVSxZQUFWLEVBQXdCZ0MsTUFBTW5ELEdBQTlCO0FBQ0E7QUFDRDtBQUNEeUMsU0FBSzVDLEtBQUwsQ0FBV3FCLE1BQVgsQ0FBa0JpQyxNQUFNbkQsR0FBeEI7QUFDQTtBQUNELEdBZEQ7O0FBZ0JBLE9BQUt3QyxNQUFMLENBQVlXLEtBQVo7O0FBRUEsU0FBT0EsS0FBUDtBQUNBOztBQUVEOzs7Ozs7QUFNQWIsZUFBZWQsT0FBZixFQUF3QlcsU0FBeEIsRUFBbUM7QUFDbEMsUUFBTU0sT0FBTyxJQUFiO0FBQ0EsTUFBSUgsZ0JBQWdCLEtBQUtULEdBQUwsQ0FBU0wsUUFBUXhCLEdBQWpCLENBQXBCO0FBQ0EsTUFBSyxDQUFDc0MsYUFBTixFQUFxQjtBQUNwQjtBQUNBLE9BQUlyQixRQUFRLEtBQUt0QixPQUFMLENBQWFrQyxHQUFiLENBQWlCTCxRQUFRekIsR0FBekIsQ0FBWjtBQUNBa0IsWUFBU0EsTUFBTUosTUFBZixJQUF5QlcsUUFBUXZCLEtBQWpDLElBQTBDZ0IsTUFBTUosTUFBTixDQUFhNkMsTUFBYixDQUFvQmxDLFFBQVF2QixLQUE1QixDQUExQztBQUNBLEdBSkQsTUFJTztBQUNOO0FBQ0EsT0FBSTBELFdBQVcsS0FBS2hFLE9BQUwsQ0FBYWtDLEdBQWIsQ0FBaUJMLFFBQVF6QixHQUF6QixDQUFmO0FBQ0EsT0FBSTRELFlBQVlBLFNBQVM5QyxNQUF6QixFQUFpQztBQUFFO0FBQ2xDLFFBQUksQ0FBQ3lCLGNBQWN2RCxPQUFuQixFQUE0QjtBQUMzQjtBQUNBLFVBQUthLE1BQUwsQ0FBWTBCLE1BQVosQ0FBbUJFLFFBQVF4QixHQUEzQjtBQUNBMkQsY0FBU1osVUFBVCxHQUFzQixJQUF0QjtBQUNBLEtBSkQsTUFJTztBQUNOO0FBQ0EsVUFBS2xELEtBQUwsQ0FBV3FCLE1BQVgsQ0FBa0JvQixhQUFsQjtBQUNBZSxrQkFBYWYsY0FBY3ZELE9BQTNCO0FBQ0F1RCxtQkFBY3ZELE9BQWQsR0FBd0IsSUFBeEI7QUFDQSxVQUFLYSxNQUFMLENBQVkwQixNQUFaLENBQW1CZ0IsYUFBbkI7QUFDQXFCLGNBQVNaLFVBQVQsR0FBc0IsSUFBdEI7QUFDQTtBQUNEWSxhQUFTOUMsTUFBVCxDQUFnQkMsT0FBaEI7QUFDQTtBQUNBVSxZQUFRdkIsS0FBUixJQUFpQmtDLFNBQWpCLElBQThCQSxVQUFVaUIsUUFBeEMsSUFBb0RqQixVQUFVaUIsUUFBVixDQUFtQlgsS0FBSzNDLFNBQUwsQ0FBZTBCLFFBQVF6QixHQUF2QixFQUE0QixLQUFLYixFQUFqQyxFQUFxQyxJQUFyQyxFQUEyQ3NDLFFBQVF0QixRQUFuRCxDQUFuQixDQUFwRDs7QUFFQ2lDLGlCQUFhQSxVQUFVZSxPQUF2QixJQUFrQ2YsVUFBVWUsT0FBVixDQUFrQlosY0FBYzdDLEVBQWhDLENBQW5DLElBQTRFa0UsWUFBYUEsU0FBU1QsT0FBdEIsSUFBaUNTLFNBQVNULE9BQVQsQ0FBaUJaLGNBQWM3QyxFQUEvQixDQUE3RztBQUNBLFNBQUswQixJQUFMLENBQVUsT0FBVixFQUFtQm1CLGNBQWM3QyxFQUFqQztBQUNBK0IsWUFBUXRCLFFBQVIsSUFBb0IsS0FBS2lCLElBQUwsQ0FBVSxXQUFTSyxRQUFRdEIsUUFBM0IsRUFBcUNvQyxjQUFjN0MsRUFBbkQsQ0FBcEI7QUFDQTtBQUNEO0FBQ0QsU0FBTzZDLGFBQVA7QUFDQTs7QUF6YXNDOztBQThheENzQixPQUFPQyxPQUFQLEdBQWlCdEYsWUFBakIiLCJmaWxlIjoibmVpZ2hib3Job29kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcbmNvbnN0IFNvY2tldCA9IHJlcXVpcmUoJ3NpbXBsZS1wZWVyJyk7XG5cbmNvbnN0IHV1aWQgPSByZXF1aXJlKCd1dWlkL3Y0Jyk7XG5jb25zdCBTb3J0ZWRBcnJheSA9IHJlcXVpcmUoJy4vZXh0ZW5kZWQtc29ydGVkLWFycmF5LmpzJyk7XG5jb25zdCBNdWx0aVNldCA9IHJlcXVpcmUoJy4vbXVsdGlzZXQuanMnKTtcbmNvbnN0IFNpbXBsZVBlZXIgPSByZXF1aXJlKCdzaW1wbGUtcGVlcicpO1xuXG4vKipcbiAqIE5laWdiaG9yaG9vZCB0YWJsZSBwcm92aWRpbmcgZWFzeSBlc3RhYmxpc2htZW50IGFuZCBtYW5hZ2VtZW50IG9mXG4gKiBjb25uZWN0aW9uc1xuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgdGhlIG9wdGlvbnMgYXZhaWxhYmxlIHRvIHRoZSBjb25uZWN0aW9ucywgZS5nLiB0aW1lb3V0IGJlZm9yZVxuICogY29ubmVjdGlvbiBhcmUgdHJ1ZWx5IHJlbW92ZWQsIFdlYlJUQyBvcHRpb25zXG4gKi9cbmNsYXNzIE5laWdoYm9yaG9vZCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG5cdGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG5cdFx0c3VwZXIoKTtcblxuICAgIHRoaXMuUFJPVE9DT0wgPSAnbmVpZ2hib3Job29kLXdydGMnO1xuICAgIC8vICMxIHNhdmUgb3B0aW9uc1xuICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgIHRoaXMub3B0aW9ucy5jb25maWcgPSAob3B0aW9ucyAmJiBvcHRpb25zLndlYnJ0YykgfHwge307XG4gICAgdGhpcy5vcHRpb25zLnRyaWNrbGUgPSAob3B0aW9ucyAmJiBvcHRpb25zLndlYnJ0YyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMud2VicnRjLnRyaWNrbGUpIHx8IGZhbHNlO1xuICAgIHRoaXMuVElNRU9VVCA9IChvcHRpb25zICYmIG9wdGlvbnMudGltZW91dCkgfHwgKDIgKiA2MCAqIDEwMDApOyAvLyAyIG1pbnV0ZXNcblxuXHRcdHRoaXMuZW5jb2RpbmcgPSBvcHRpb25zLmVuY29kaW5nO1xuXHRcdHRoaXMuZGVjb2RpbmcgPSBvcHRpb25zLmRlY29kaW5nO1xuXHRcdHRoaXMuSUQgPSB1dWlkKCk7XG5cdFx0aWYodGhpcy5vcHRpb25zLmNvbmZpZy53cnRjKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMud3J0YyA9IHRoaXMub3B0aW9ucy5jb25maWcud3J0Yztcblx0XHR9XG5cblx0XHRpZihvcHRpb25zICYmIG9wdGlvbnMudmVyYm9zZSkge1xuXHRcdFx0dGhpcy52ZXJib3NlID0gb3B0aW9ucy52ZXJib3NlO1xuXHRcdH1cblxuICAgIC8qIVxuICAgICAqIFxcYnJpZWYgY29tcGFyZSB0aGUgaWQgb2YgZW50cmllcyBpbiB0YWJsZXNcbiAgICAgKi9cbiAgICB0aGlzLkNvbXBhcmF0b3IgPSAoYSwgYikgPT4ge1xuICAgICAgICB2YXIgZmlyc3QgPSBhLmlkIHx8IGE7XG4gICAgICAgIHZhciBzZWNvbmQgPSBiLmlkIHx8IGI7XG4gICAgICAgIGlmIChmaXJzdCA8IHNlY29uZCl7IHJldHVybiAtMTsgfTtcbiAgICAgICAgaWYgKGZpcnN0ID4gc2Vjb25kKXsgcmV0dXJuICAxOyB9O1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9O1xuICAgIC8vICMyIGluaXRpYWxpemUgdGFibGVzXG4gICAgdGhpcy5wZW5kaW5nID0gbmV3IFNvcnRlZEFycmF5KHRoaXMuQ29tcGFyYXRvcik7IC8vIG5vdCBmaW5hbGl6ZWQgeWV0XG4gICAgdGhpcy5saXZpbmcgPSBuZXcgTXVsdGlTZXQodGhpcy5Db21wYXJhdG9yKTsgLy8gbGl2ZSBhbmQgdXNhYmxlXG4gICAgdGhpcy5keWluZyA9IG5ldyBTb3J0ZWRBcnJheSh0aGlzLkNvbXBhcmF0b3IpOyAvLyBiZWluZyByZW1vdmVcblx0fVxuXG5cdE1SZXNwb25zZSAodGlkLCBwaWQsIG9mZmVyLCBwcm90b2NvbCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0aWQ6IHRpZCxcblx0XHRcdHBpZDogcGlkLFxuXHRcdFx0cHJvdG9jb2w6IHByb3RvY29sLFxuXHRcdFx0dHlwZTogJ01SZXNwb25zZScsXG5cdFx0XHRvZmZlcjogb2ZmZXJcblx0XHR9O1xuXHR9XG5cdE1SZXF1ZXN0ICh0aWQsIHBpZCwgb2ZmZXIsIHByb3RvY29sKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRpZDogdGlkLFxuXHRcdFx0cGlkOiBwaWQsXG5cdFx0XHRwcm90b2NvbDogcHJvdG9jb2wsXG5cdFx0XHR0eXBlOiAnTVJlcXVlc3QnLFxuXHRcdFx0b2ZmZXI6IG9mZmVyXG5cdFx0fTtcblx0fVxuXG5cdGxvZyAoLi4uYXJncykge1xuXHRcdGlmKHRoaXMudmVyYm9zZSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ1tORUlHSEJPUkhPT0RdICcsIGFyZ3MpO1xuXHRcdH1cblx0fVxuXG4gIC8qKlxuICAgKiBEaXNjb25uZWN0IG9uZSBvZiB0aGUgYXJjIHdpdGggdGhlIGlkZW50aWZpZXIgaW4gYXJndW1lbnQuIElmXG4gICAqIGl0IHdhcyB0aGUgbGFzdCBhcmMgd2l0aCBzdWNoIGlkLCB0aGUgc29ja2V0IGlzIHJlbG9jYXRlZCB0byB0aGUgZHlpbmdcbiAgICogdGFibGUuIFRoZSBzb2NrZXQgd2lsbCBiZSBkZXN0cm95IGFmdGVyIGEgYml0LiBJZiB0aGVyZSBpcyBubyBhcmd1bWVudCxcbiAgICogZGlzY29ubmVjdCB0aGUgd2hvbGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfHVuZGVmaW5lZH0gaWQgSWQgcHJvdmlkZWQgdG8ganVzdCBkaXNjb25uZWN0IHRoZSBhcmMgb3IgaWYgdW5kZWZpbmVkIGRpc2Nvbm5lY3QgYWxsIGFyY3NcbiAgICovXG4gIGRpc2Nvbm5lY3QgKGlkKSB7XG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgaWYgKCFpZCkge1xuICAgICAgLy8gIzEgZGlzY29ubmVjdCBldmVyeXRoaW5nXG4gICAgICB0aGlzLnBlbmRpbmcuYXJyLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICBlLnNvY2tldCAmJiBlLnNvY2tldC5kZXN0cm95KCk7XG4gICAgICB9KTtcbiAgICAgIHdoaWxlICh0aGlzLmxpdmluZy5tcy5hcnIubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IGUgPSB0aGlzLmxpdmluZy5tcy5hcnJbMF07XG4gICAgICAgICAgZS5zb2NrZXQgJiYgZS5zb2NrZXQuZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgd2hpbGUgKHRoaXMuZHlpbmcuYXJyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBlID0gdGhpcy5keWluZy5hcnJbMF07XG4gICAgICAgICAgZS5zb2NrZXQgJiYgZS5zb2NrZXQuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyAjMiByZW1vdmUgb25lIGFyY1xuICAgICAgbGV0IGVudHJ5ID0gdGhpcy5saXZpbmcucmVtb3ZlKGlkKTtcbiAgICAgIGVudHJ5ICYmIHRoaXMuZW1pdCgnZGlzY29ubmVjdCcsIGVudHJ5LmlkKTtcbiAgICAgIGlmIChlbnRyeSAmJiBlbnRyeS5vY2MgPD0gMCkge1xuICAgICAgICAgIGVudHJ5LnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgZW50cnkuc29ja2V0LmRlc3Ryb3koKTtcbiAgICAgICAgICB9LCB0aGlzLlRJTUVPVVQpO1xuICAgICAgICAgIHRoaXMuZHlpbmcuaW5zZXJ0KGVudHJ5KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGVudHJ5ICYmIHRydWUgfHwgZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuXHQvKipcblx0ICogTmV3IG1ldGhvZCB0byBlbmNvZGUgdGhlIG1lc3NhZ2UgYXMgd2Ugd2FudFxuXHQgKiBAcGFyYW0gIHtvYmplY3R9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gZW5jb2RlXG5cdCAqIEByZXR1cm4ge3N0cmluZ3xiaW5hcnl9IEVuY29kZWQgbWVzc2FnZVxuXHQgKi9cblx0ZW5jb2RlIChtZXNzYWdlKSB7XG5cdFx0cmV0dXJuIHRoaXMuZW5jb2RpbmcobWVzc2FnZSk7XG5cdH1cblxuXHQvKipcblx0ICogTmV3IG1ldGhvZCB0byBlbmNvZGUgdGhlIG1lc3NhZ2UgYXMgd2Ugd2FudFxuXHQgKiBAcGFyYW0gIHtvYmplY3R9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gZW5jb2RlXG5cdCAqIEByZXR1cm4ge3N0cmluZ3xiaW5hcnl9IEVuY29kZWQgbWVzc2FnZVxuXHQgKi9cblx0ZGVjb2RlIChtZXNzYWdlKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGVjb2RpbmcobWVzc2FnZSk7XG5cdH1cblxuXHQvKipcblx0ICogU2VuZCBhIG1lc3NhZ2UgdG8gdGhlIHNvY2tldCBpbiBhcmd1bWVudFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaWQgdGhlIGlkZW50aWZpZXIgb2YgdGhlIHNvY2tldFxuXHQgKiBAcGFyYW0ge29iamVjdH0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBzZW5kXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIG1lc3NhZ2UgaXMgc2VudCwgZmFsc2Ugb3RoZXJ3aXNlXG5cdCAqL1xuXHRzZW5kIChpZCwgbWVzc2FnZSkge1xuXHRcdC8vICMxIGNvbnZlcnQgbWVzc2FnZSB0byBzdHJpbmcgKFRPRE8pIGNoZWNrIGlmIHRoZXJlIGlzIGEgYmV0dGVyIHdheVxuXHRcdGxldCBtc2cgPSAoKG1lc3NhZ2UgaW5zdGFuY2VvZiBTdHJpbmcpICYmIG1lc3NhZ2UpIHx8IHRoaXMuZW5jb2RlKG1lc3NhZ2UpO1xuXHRcdC8vICMyIGdldCB0aGUgc29ja2V0IHRvIHVzZVxuXHRcdGxldCBlbnRyeSA9IHRoaXMuZ2V0KGlkKTtcblx0XHRsZXQgc29ja2V0ID0gZW50cnkgJiYgZW50cnkuc29ja2V0O1xuXHRcdC8vICMzIHNlbmRcblx0XHRsZXQgcmVzdWx0ID0gbXNnICYmIHNvY2tldCAmJiBzb2NrZXQuY29ubmVjdGVkICYmIHNvY2tldC5fY2hhbm5lbCAmJiAoc29ja2V0Ll9jaGFubmVsLnJlYWR5U3RhdGUgPT09ICdvcGVuJyk7XG5cdFx0Ly8gcmVzdWx0ICYmIHNvY2tldC5zZW5kKG1zZyk7XG5cdFx0dHJ5IHtcblx0XHRcdHJlc3VsdCAmJiBzb2NrZXQuc2VuZChtc2cpO1xuXHRcdFx0Ly8gRE9OVCBTRVQgUkVTVUxUIFRPIFRSVUUgIVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHRoaXMubG9nKCdbTkVJR0hCT1JIT09EOlNFTkQ6RVJST1JdICcsIG5ldyBFcnJvcihlKSk7XG5cdFx0XHRyZXN1bHQgPSBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8qKlxuXHQqIGNyZWF0ZXMgYSBuZXcgaW5jb21taW5nIG9yIG91dGdvaW5nIGNvbm5lY3Rpb24gZGVwZW5kaW5nIG9uIGFyZ3VtZW50c1xuXHQqIEBwYXJhbSB7Y2FsbGJhY2t9IGNhbGxiYWNrcyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gd2hlbiB0aGUgc3R1bi9pY2Ugc2VydmVyIHJldHVybnMgdGhlXG5cdCogb2ZmZXJcblx0KiBAcGFyYW0ge29iamVjdH0gbWVzc2FnZSBlbXB0eSBpZiBpdCBtdXN0IGluaXRpYXRlIGEgY29ubmVjdGlvbiwgb3IgdGhlIG1lc3NhZ2UgcmVjZWl2ZWRcblx0KiBpZiBpdCBtdXN0IGFuc3dlciBvciBmaW5hbGl6ZSBvbmVcblx0KiBAcGFyYW0ge3N0cmluZ30gcHJvdG9jb2wgdGhlIGNvbm5lY3Rpb24gaXMgZXN0YWJsaXNoZWQgZm9yIGEgc3BlY2lmaWMgcHJvdG9jb2xcblx0KiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBpZCBvZiB0aGUgc29ja2V0XG5cdCovXG5cdGNvbm5lY3Rpb24gKGNhbGxiYWNrcywgbWVzc2FnZSwgcHJvdG9jb2wpIHtcblxuXHRcdGxldCBtc2cgPSAoY2FsbGJhY2tzICYmIGNhbGxiYWNrcy50eXBlICYmIGNhbGxiYWNrcykgfHwgbWVzc2FnZTtcblx0XHRsZXQgcmVzdWx0O1xuXG5cdFx0aWYgKCFtc2cpIHtcblx0XHRcdHJlc3VsdCA9IHRoaXMuaW5pdGlhdGUoY2FsbGJhY2tzLCBwcm90b2NvbCk7XG5cdFx0fSBlbHNlIGlmIChtc2cudHlwZT09PSdNUmVxdWVzdCcpIHtcblxuXHRcdFx0aWYobWVzc2FnZSAmJiBtZXNzYWdlLnBpZCAmJiB0aGlzLklEICE9PSBtZXNzYWdlLnBpZCkge1xuXHRcdFx0XHRyZXN1bHQgPSB0aGlzLmFjY2VwdChtc2csIGNhbGxiYWNrcyk7XG5cdFx0XHRcdHJlc3VsdCA9IHRoaXMuYWxyZWFkeUV4aXN0cyhtc2csIGNhbGxiYWNrcykgfHwgcmVzdWx0O1xuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIGlmIChtc2cudHlwZT09PSdNUmVzcG9uc2UnKSB7XG5cdFx0XHRyZXN1bHQgPSB0aGlzLmZpbmFsaXplKG1zZyk7XG5cdFx0XHRyZXN1bHQgPSB0aGlzLmFscmVhZHlFeGlzdHMobXNnKSB8fCByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdCAmJiByZXN1bHQuaWQ7XG5cdH1cblxuICAvKipcbiAgICogR2V0IHRoZSBlbnRyeSBjb3JyZXNwb25kaW5nIHRvIHRoZSBpZCBpbiBhcmd1bWVudC4gVGhlIGVudHJ5IGNvbnRhaW5zXG4gICAqIHRoZSBzb2NrZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCB0aGUgaWRlbnRpZmllciBvZiB0aGUgc29ja2V0IHRvIHJldHJpZXZlXG4gICAqIEByZXR1cm4ge29iamVjdH0gYW4gZW50cnkgZnJvbSB0YWJsZXMuIEl0IHByaW9yaXplcyBlbnRyaWVzIGluIGxpdmluZywgdGhlbiBkeWluZyxcbiAgICogdGhlbiBwZW5kaW5nLlxuICAgKi9cbiAgZ2V0KGlkKXtcbiAgICAgIHJldHVybiB0aGlzLmxpdmluZy5nZXQoaWQpIHx8IHRoaXMuZHlpbmcuZ2V0KGlkKSB8fCB0aGlzLnBlbmRpbmcuZ2V0KGlkKTtcbiAgfVxuXG5cdC8qKlxuXHQgKiBDb21tb24gYmVoYXZpb3IgdG8gaW5pdGlhdGluZyBhbmQgYWNjZXB0aW5nIHNvY2tldHNcblx0ICogQHBhcmFtIHtvYmplY3R9IGVudHJ5IHRoZSBlbnRyeSBpbiB0aGUgbmVpZ2hib3Job29kIHRhYmxlXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRjb21tb24gKGVudHJ5KSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXMsIHNvY2tldCA9IGVudHJ5LnNvY2tldDtcblxuXHRcdHNvY2tldC5vbignZGF0YScsIChtZXNzYWdlKSA9PiB7XG5cdFx0XHRtZXNzYWdlID0gc2VsZi5kZWNvZGUobWVzc2FnZSk7XG5cdFx0XHRzZWxmLmVtaXQoJ3JlY2VpdmUnLCBlbnRyeS5waWQsIG1lc3NhZ2UpO1xuXHRcdH0pO1xuXHRcdHNvY2tldC5vbignc3RyZWFtJywgKHN0cmVhbSkgPT4ge1xuXHRcdFx0c2VsZi5lbWl0KCdzdHJlYW0nLCBlbnRyeS5waWQsIHN0cmVhbSk7XG5cdFx0fSk7XG5cblx0XHRzb2NrZXQub24oJ2Vycm9yJywgZXJyID0+IHtcblx0XHRcdHNlbGYuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoZXJyKSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogaW5pdGlhdGVzIGEgY29ubmVjdGlvbiB3aXRoIGFub3RoZXIgcGVlciAtLSB0aGUgaWQgb2Ygd2hpY2ggaXMgdW5rbm93blxuXHQgKiBAcGFyYW0ge2NhbGxiYWNrfSBjYWxsYmFja3MgdGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBzaWduYWxpbmcgaW5mbyBhcmUgcmVjZWl2ZWQgYW5kXG5cdCAqIHdoZW4gdGhlIGNvbm5lY3Rpb24gaXMgcmVhZHkgdG8gYmUgdXNlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcHJvdG9jb2wgVGhlIHByb3RvY29sXG5cdCAqIEByZXR1cm4ge29iamVjdH0gZW50cnlcblx0ICovXG5cdGluaXRpYXRlIChjYWxsYmFja3MsIHByb3RvY29sKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0bGV0IG9wdHMgPSBzZWxmLm9wdGlvbnM7XG5cdFx0b3B0cy5pbml0aWF0b3IgPSB0cnVlO1xuXHRcdGxldCBzb2NrZXQgPSBuZXcgU2ltcGxlUGVlcihvcHRzKTtcblx0XHRsZXQgZW50cnkgPSB7XG5cdFx0XHRpZDogdXVpZCgpLFxuXHRcdFx0c29ja2V0OiBzb2NrZXQsXG5cdFx0XHRwcm90b2NvbDogcHJvdG9jb2wsXG5cdFx0XHRzdWNjZXNzZnVsOiBmYWxzZSwgLy8gbm90IHlldFxuXHRcdFx0b25PZmZlcjogY2FsbGJhY2tzICYmIGNhbGxiYWNrcy5vbkluaXRpYXRlLFxuXHRcdFx0b25SZWFkeTogY2FsbGJhY2tzICYmIGNhbGxiYWNrcy5vblJlYWR5XG5cdFx0fTtcblxuXHRcdHRoaXMucGVuZGluZy5pbnNlcnQoZW50cnkpO1xuXHRcdHNvY2tldC5vbignc2lnbmFsJywgKG9mZmVyKSA9PiB7XG5cdFx0XHRlbnRyeS5vbk9mZmVyICYmIGVudHJ5Lm9uT2ZmZXIoc2VsZi5NUmVxdWVzdChlbnRyeS5pZCwgc2VsZi5JRCwgb2ZmZXIsIHByb3RvY29sKSk7XG5cdFx0fSk7XG5cblx0XHRlbnRyeS50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRsZXQgZSA9IHNlbGYucGVuZGluZy5nZXQoZW50cnkuaWQpO1xuXHRcdFx0aWYgKGUgJiYgIWUuc3VjY2Vzc2Z1bCkge1xuXHRcdFx0XHRzZWxmLmVtaXQoJ2ZhaWwnLCAnW0ZBSUw6SU5JVElBVEVdIGFuIGVycm9yIG9jY3VyZWQgZHVyaW5nIHJlbW92aW5nIHRoZSBlbnRyeScpO1xuXHRcdFx0fVxuXHRcdFx0c2VsZi5wZW5kaW5nLnJlbW92ZShlbnRyeSkgJiYgc29ja2V0LmRlc3Ryb3koKTtcblx0XHR9LCB0aGlzLlRJTUVPVVQpO1xuXHRcdHJldHVybiBlbnRyeTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIGFjY2VwdCB0aGUgb2ZmZXIgb2YgYW5vdGhlciBwZWVyXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBtZXNzYWdlIHRoZSByZWNlaXZlZCBtZXNzYWdlIGNvbnRhaW5pbmcgaWQgYW5kIG9mZmVyXG5cdCAqIEBwYXJhbSB7Y2FsbGJhY2t9IGNhbGxiYWNrcyB0aGUgZnVuY3Rpb24gY2FsbCBhZnRlciByZWNlaXZpbmcgdGhlIG9mZmVyIGFuZFxuXHQgKiB3aGVuIHRoZSBjb25uZWN0aW9uIGlzIHJlYWR5XG5cdCAqIEByZXR1cm4ge29iamVjdH0gRW50cnlcblx0ICovXG5cdGFjY2VwdCAobWVzc2FnZSwgY2FsbGJhY2tzKSB7XG5cdFx0Ly8gIzEgaWYgYWxyZWFkeSBleGlzdHMsIHVzZSBpdFxuXG5cblx0XHRsZXQgcHJpb3IgPSB0aGlzLnBlbmRpbmcuZ2V0KG1lc3NhZ2UudGlkKTtcblx0XHRpZiAocHJpb3IpIHtcblx0XHRcdHJldHVybiBwcmlvcjtcblx0XHR9XG5cdFx0Ly8gIzIgb3RoZXJ3aXNlLCBjcmVhdGUgdGhlIHNvY2tldFxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdC8vIGxldCBvcHRzPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5vcHRpb25zKSk7Ly8gcXVpY2sgYnV0IHVnbHkgY29weVxuXHRcdGxldCBvcHRzID0gdGhpcy5vcHRpb25zO1xuXHRcdG9wdHMuaW5pdGlhdG9yID0gZmFsc2U7XG5cdFx0bGV0IHNvY2tldCA9IG5ldyBTaW1wbGVQZWVyKG9wdHMpO1xuXHRcdGxldCBlbnRyeSA9IHtcblx0XHRcdGlkOiBtZXNzYWdlLnRpZCxcblx0XHRcdHBpZDogbWVzc2FnZS5waWQsXG5cdFx0XHRwcm90b2NvbDogbWVzc2FnZS5wcm90b2NvbCxcblx0XHRcdHNvY2tldDogc29ja2V0LFxuXHRcdFx0c3VjY2Vzc2Z1bDogZmFsc2UsXG5cdFx0XHRvbk9mZmVyOiBjYWxsYmFja3MgJiYgY2FsbGJhY2tzLm9uQWNjZXB0LFxuXHRcdFx0b25SZWFkeTogY2FsbGJhY2tzICYmIGNhbGxiYWNrcy5vblJlYWR5XG5cdFx0fTtcblxuXHRcdHRoaXMucGVuZGluZy5pbnNlcnQoZW50cnkpO1xuXHRcdHNvY2tldC5vbignc2lnbmFsJywgZnVuY3Rpb24gKG9mZmVyKSB7XG5cdFx0XHRlbnRyeS5vbk9mZmVyICYmIGVudHJ5Lm9uT2ZmZXIoc2VsZi5NUmVzcG9uc2UoZW50cnkuaWQsIHNlbGYuSUQsIG9mZmVyLCBlbnRyeS5wcm90b2NvbCkpO1xuXHRcdH0pO1xuXHRcdHNvY2tldC5vbignY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHNlbGYuZ2V0KGVudHJ5LnBpZCkgJiYgc29ja2V0LmRlc3Ryb3koKTtcblx0XHRcdHNlbGYucGVuZGluZy5yZW1vdmUoZW50cnkpO1xuXHRcdFx0c2VsZi5saXZpbmcuaW5zZXJ0KHtcblx0XHRcdFx0aWQ6IGVudHJ5LnBpZCxcblx0XHRcdFx0c29ja2V0OiBlbnRyeS5zb2NrZXQsXG5cdFx0XHRcdG9uUmVhZHk6IGVudHJ5Lm9uUmVhZHksXG5cdFx0XHRcdG9uT2ZmZXI6IGVudHJ5Lm9uT2ZmZXJcblx0XHRcdH0pO1xuXG5cblx0XHRcdGVudHJ5Lm9uUmVhZHkgJiYgZW50cnkub25SZWFkeShlbnRyeS5waWQpO1xuXHRcdFx0c2VsZi5lbWl0KCdyZWFkeScsIGVudHJ5LnBpZCk7XG5cdFx0XHRlbnRyeS5wcm90b2NvbCAmJiBzZWxmLmVtaXQoJ3JlYWR5LScrZW50cnkucHJvdG9jb2wsIGVudHJ5LnBpZCk7XG5cblx0XHRcdGNsZWFyVGltZW91dChlbnRyeS50aW1lb3V0KTtcblx0XHRcdGVudHJ5LnRpbWVvdXQgPSBudWxsO1xuXHRcdH0pO1xuXHRcdHNvY2tldC5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoc2VsZi5wZW5kaW5nLmNvbnRhaW5zKGVudHJ5LmlkKSkge1xuXHRcdFx0XHQvLyAjQSBwZW5kaW5nOiBlbnRyeSBpcyBrZXB0IHVudGlsIGF1dG9tYXRpYyBkZXN0cnVjdGlvblxuXHRcdFx0XHRlbnRyeS5zb2NrZXQgPSBudWxsO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gI0IgbGl2aW5nIG9yIGR5aW5nOiBjbGVhciB0aGUgdGFibGVzXG5cdFx0XHRcdGVudHJ5LnRpbWVvdXQgJiYgY2xlYXJUaW1lb3V0KGVudHJ5LnRpbWVvdXQpO1xuXHRcdFx0XHRlbnRyeS50aW1lb3V0ID0gbnVsbDtcblx0XHRcdFx0bGV0IGxpdmUgPSBzZWxmLmxpdmluZy5yZW1vdmVBbGwoZW50cnkucGlkKTtcblx0XHRcdFx0aWYgKGxpdmUpIHtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpdmUub2NjOyArK2kpIHtcblx0XHRcdFx0XHRcdHNlbGYuZW1pdCgnZGlzY29ubmVjdCcsIGVudHJ5LnBpZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGYuZHlpbmcucmVtb3ZlKGVudHJ5LnBpZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmNvbW1vbihlbnRyeSk7XG5cblx0XHRlbnRyeS50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgZSA9IHNlbGYucGVuZGluZy5nZXQoZW50cnkuaWQpO1xuXHRcdFx0aWYgKGUgJiYgIWUuc3VjY2Vzc2Z1bCkge1xuXHRcdFx0XHRzZWxmLmVtaXQoJ2ZhaWwnLCAnW0ZBSUw6QUNDRVBUXSBhbiBlcnJvciBvY2N1cmVkIGR1cmluZyByZW1vdmluZyB0aGUgZW50cnknKTtcblx0XHRcdH1cblx0XHRcdHNlbGYucGVuZGluZy5yZW1vdmUoZW50cnkuaWQpICYmIHNvY2tldC5kZXN0cm95KCk7XG5cdFx0fSwgdGhpcy5USU1FT1VUKTtcblx0XHRyZXR1cm4gZW50cnk7XG5cdH1cblxuXG5cdC8qKlxuXHQqIGZpbmFsaXplIHRoZSBiZWhhdmlvciBvZiBhbiBpbml0aWF0aW5nIHNvY2tldFxuXHQqIEBwYXJhbSB7b2JqZWN0fSBtZXNzYWdlIHRoZSByZWNlaXZlZCBtZXNzYWdlIHBvc3NpYmx5IGNvbnRhaW5pbmcgYW4gYW5zd2VyIHRvIHRoZVxuXHQqIHByb3Bvc2VkIG9mZmVyXG5cdCogQHJldHVybiB7b2JqZWN0fSBSZXR1cm4gcHJpb3IgZW50cnlcblx0Ki9cblx0ZmluYWxpemUgKG1lc3NhZ2UpIHtcblx0XHQvLyAjMSBpZiBpdCBkb2VzIG5vdCBleGlzdHMsIHN0b3A7IG9yIGlmIGl0IGV4aXN0cyBidXQgYWxyZWFkeSBzZXR1cFxuXHRcdC8vIHJldHVybiBpdFxuXHRcdGxldCBwcmlvciA9IHRoaXMucGVuZGluZy5nZXQobWVzc2FnZS50aWQpO1xuXHRcdGlmICghcHJpb3IgfHwgcHJpb3IucGlkKSB7XG5cdFx0XHRyZXR1cm4gcHJpb3I7XG5cdFx0fVxuXHRcdC8vICMyIG90aGVyd2lzZSBzZXQgdGhlIGV2ZW50cyBjb3JyZWN0bHlcblx0XHRwcmlvci5waWQgPSBtZXNzYWdlLnBpZDtcblxuXHRcdGxldCBlbnRyeSA9IHtcblx0XHRcdGlkOiBtZXNzYWdlLnBpZCxcblx0XHRcdHNvY2tldDogcHJpb3Iuc29ja2V0LFxuXHRcdFx0cHJvdG9jb2w6IHByaW9yLnByb3RvY29sLFxuXHRcdFx0b25SZWFkeTogcHJpb3Iub25SZWFkeSxcblx0XHRcdG9uT2ZmZXI6IHByaW9yLm9uT2ZmZXJcblx0XHR9O1xuXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0bGV0IHNvY2tldCA9IGVudHJ5LnNvY2tldDtcblx0XHRzb2NrZXQub24oJ2Nvbm5lY3QnLCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHNlbGYuZ2V0KGVudHJ5LmlkKSAmJiBzb2NrZXQuZGVzdHJveSgpO1xuXHRcdFx0c2VsZi5wZW5kaW5nLnJlbW92ZShwcmlvcik7XG5cdFx0XHRzZWxmLmxpdmluZy5pbnNlcnQoZW50cnkpO1xuXHRcdFx0ZW50cnkub25SZWFkeSAmJiBlbnRyeS5vblJlYWR5KHByaW9yLnBpZCk7XG5cdFx0XHRzZWxmLmVtaXQoJ3JlYWR5JywgcHJpb3IucGlkKTtcblx0XHRcdGVudHJ5LnByb3RvY29sICYmIHNlbGYuZW1pdCgncmVhZHktJytlbnRyeS5wcm90b2NvbCwgcHJpb3IucGlkKTtcblx0XHRcdGNsZWFyVGltZW91dChwcmlvci50aW1lb3V0KTtcblxuXHRcdH0pO1xuXHRcdHNvY2tldC5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoc2VsZi5wZW5kaW5nLmNvbnRhaW5zKG1lc3NhZ2UudGlkKSkge1xuXHRcdFx0XHRzZWxmLnBlbmRpbmcuZ2V0KG1lc3NhZ2UudGlkKS5zb2NrZXQgPSBudWxsO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHJpb3IudGltZW91dCAmJiBjbGVhclRpbWVvdXQocHJpb3IudGltZW91dCk7XG5cdFx0XHRcdHByaW9yLnRpbWVvdXQgPSBudWxsO1xuXHRcdFx0XHRsZXQgbGl2ZSA9IHNlbGYubGl2aW5nLnJlbW92ZUFsbChwcmlvci5waWQpO1xuXHRcdFx0XHRpZiAobGl2ZSkge1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGl2ZS5vY2M7ICsraSkge1xuXHRcdFx0XHRcdFx0c2VsZi5lbWl0KCdkaXNjb25uZWN0JywgcHJpb3IucGlkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0c2VsZi5keWluZy5yZW1vdmUocHJpb3IucGlkKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMuY29tbW9uKHByaW9yKTtcblxuXHRcdHJldHVybiBwcmlvcjtcblx0fVxuXG5cdC8qKlxuXHQqICB0aGUgcGVlciBpZCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgdGFibGVzXG5cdCogIEBwYXJhbSB7b2JqZWN0fSBtZXNzYWdlIFRoZSBtZXNzYWdlXG5cdCogIEBwYXJhbSB7Y2FsbGJhY2t9IGNhbGxiYWNrcyB0aGUgY2FsbGJhY2tzXG5cdCogIEByZXR1cm4ge29iamVjdH0gYWxyZWF5ZEV4aXN0XG5cdCovXG5cdGFscmVhZHlFeGlzdHMgKG1lc3NhZ2UsIGNhbGxiYWNrcykge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGxldCBhbHJlYWR5RXhpc3RzID0gdGhpcy5nZXQobWVzc2FnZS5waWQpO1xuXHRcdGlmICAoIWFscmVhZHlFeGlzdHMpIHtcblx0XHRcdC8vICNBIGRvZXMgbm90IGFscmVhZHkgZXhpc3RzIGJ1dCBwZW5kaW5nXG5cdFx0XHRsZXQgZW50cnkgPSB0aGlzLnBlbmRpbmcuZ2V0KG1lc3NhZ2UudGlkKTtcblx0XHRcdGVudHJ5ICYmIGVudHJ5LnNvY2tldCAmJiBtZXNzYWdlLm9mZmVyICYmIGVudHJ5LnNvY2tldC5zaWduYWwobWVzc2FnZS5vZmZlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vICNCIGFscmVhZHkgZXhpc3RzIGFuZCBwZW5kaW5nXG5cdFx0XHRsZXQgdG9SZW1vdmUgPSB0aGlzLnBlbmRpbmcuZ2V0KG1lc3NhZ2UudGlkKTtcblx0XHRcdGlmICh0b1JlbW92ZSAmJiB0b1JlbW92ZS5zb2NrZXQpIHsgLy8gZXhpc3RzIGJ1dCBzb2NrZXQgc3RpbGwgdzhpblxuXHRcdFx0XHRpZiAoIWFscmVhZHlFeGlzdHMudGltZW91dCkge1xuXHRcdFx0XHRcdC8vICMxIGFscmVhZHkgaW4gbGl2aW5nIHNvY2tldCwgYWRkIGFuIG9jY3VycmVuY2Vcblx0XHRcdFx0XHR0aGlzLmxpdmluZy5pbnNlcnQobWVzc2FnZS5waWQpO1xuXHRcdFx0XHRcdHRvUmVtb3ZlLnN1Y2Nlc3NmdWwgPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vICMyIHdhcyBkeWluZywgcmVzdXJlY3QgdGhlIHNvY2tldFxuXHRcdFx0XHRcdHRoaXMuZHlpbmcucmVtb3ZlKGFscmVhZHlFeGlzdHMpO1xuXHRcdFx0XHRcdGNsZWFyVGltZW91dChhbHJlYWR5RXhpc3RzLnRpbWVvdXQpO1xuXHRcdFx0XHRcdGFscmVhZHlFeGlzdHMudGltZW91dCA9IG51bGw7XG5cdFx0XHRcdFx0dGhpcy5saXZpbmcuaW5zZXJ0KGFscmVhZHlFeGlzdHMpO1xuXHRcdFx0XHRcdHRvUmVtb3ZlLnN1Y2Nlc3NmdWwgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRvUmVtb3ZlLnNvY2tldC5kZXN0cm95KCk7XG5cdFx0XHRcdC8vICNDIHN0YW5kYXJkIG9uIGFjY2VwdCBmdW5jdGlvbiBpZiBpdCBleGlzdHMgaW4gYXJnXG5cdFx0XHRcdG1lc3NhZ2Uub2ZmZXIgJiYgY2FsbGJhY2tzICYmIGNhbGxiYWNrcy5vbkFjY2VwdCAmJiBjYWxsYmFja3Mub25BY2NlcHQoc2VsZi5NUmVzcG9uc2UobWVzc2FnZS50aWQsIHRoaXMuSUQsXHRudWxsLFx0bWVzc2FnZS5wcm90b2NvbCkpO1xuXG5cdFx0XHRcdChjYWxsYmFja3MgJiZcdGNhbGxiYWNrcy5vblJlYWR5ICYmIGNhbGxiYWNrcy5vblJlYWR5KGFscmVhZHlFeGlzdHMuaWQpKSB8fFx0KHRvUmVtb3ZlICYmIFx0dG9SZW1vdmUub25SZWFkeSAmJlx0dG9SZW1vdmUub25SZWFkeShhbHJlYWR5RXhpc3RzLmlkKSk7XG5cdFx0XHRcdHRoaXMuZW1pdCgncmVhZHknLCBhbHJlYWR5RXhpc3RzLmlkKTtcblx0XHRcdFx0bWVzc2FnZS5wcm90b2NvbCAmJiB0aGlzLmVtaXQoJ3JlYWR5LScrbWVzc2FnZS5wcm90b2NvbCwgYWxyZWFkeUV4aXN0cy5pZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBhbHJlYWR5RXhpc3RzO1xuXHR9XG5cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IE5laWdoYm9yaG9vZDtcbiJdfQ==
},{"./extended-sorted-array.js":1,"./multiset.js":2,"events":11,"simple-peer":29,"uuid/v4":35}]},{},[])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvZXh0ZW5kZWQtc29ydGVkLWFycmF5LmpzIiwibGliL211bHRpc2V0LmpzIiwibm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9saWIvYjY0LmpzIiwibm9kZV9tb2R1bGVzL2JpbmFyeS1zZWFyY2gvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1yZXNvbHZlL2VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL2J1ZmZlci1zaGltcy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS11dGlsLWlzL2xpYi91dGlsLmpzIiwibm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9kZWJ1Zy5qcyIsIm5vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwibm9kZV9tb2R1bGVzL2dldC1icm93c2VyLXJ0Yy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvaXMtYXJyYXkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbXMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy1uZXh0aWNrLWFyZ3MvaW5kZXguanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3JhbmRvbWJ5dGVzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9fc3RyZWFtX2R1cGxleC5qcyIsIm5vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliL19zdHJlYW1fcGFzc3Rocm91Z2guanMiLCJub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9fc3RyZWFtX3JlYWRhYmxlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWIvX3N0cmVhbV90cmFuc2Zvcm0uanMiLCJub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9fc3RyZWFtX3dyaXRhYmxlLmpzIiwibm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWIvaW50ZXJuYWwvc3RyZWFtcy9CdWZmZXJMaXN0LmpzIiwibm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9yZWFkYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtcGVlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9zb3J0ZWQtY21wLWFycmF5L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3N0cmluZ19kZWNvZGVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3V0aWwtZGVwcmVjYXRlL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXVpZC9saWIvYnl0ZXNUb1V1aWQuanMiLCJub2RlX21vZHVsZXMvdXVpZC9saWIvcm5nLWJyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvdXVpZC92NC5qcyIsImxpYi9uZWlnaGJvcmhvb2QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1aENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvNkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDemlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcHZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFNvcnRlZEFycmF5ID0gcmVxdWlyZSgnc29ydGVkLWNtcC1hcnJheScpO1xuXG5Tb3J0ZWRBcnJheS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleE9mKGVudHJ5KTtcbiAgICByZXR1cm4gaW5kZXggPj0gMCAmJiB0aGlzLmFycltpbmRleF0gfHwgbnVsbDtcbn07XG5cblNvcnRlZEFycmF5LnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgIHJldHVybiB0aGlzLmluZGV4T2YoZW50cnkpID49IDA7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNvcnRlZEFycmF5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1WNGRHVnVaR1ZrTFhOdmNuUmxaQzFoY25KaGVTNXFjeUpkTENKdVlXMWxjeUk2V3lKVGIzSjBaV1JCY25KaGVTSXNJbkpsY1hWcGNtVWlMQ0p3Y205MGIzUjVjR1VpTENKblpYUWlMQ0psYm5SeWVTSXNJbWx1WkdWNElpd2lhVzVrWlhoUFppSXNJbUZ5Y2lJc0ltTnZiblJoYVc1eklpd2liVzlrZFd4bElpd2laWGh3YjNKMGN5SmRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRXNTVUZCU1VFc1kwRkJZME1zVVVGQlVTeHJRa0ZCVWl4RFFVRnNRanM3UVVGRlFVUXNXVUZCV1VVc1UwRkJXaXhEUVVGelFrTXNSMEZCZEVJc1IwRkJORUlzVlVGQlUwTXNTMEZCVkN4RlFVRmxPMEZCUTNaRExGRkJRVWxETEZGQlFWRXNTMEZCUzBNc1QwRkJUQ3hEUVVGaFJpeExRVUZpTEVOQlFWbzdRVUZEUVN4WFFVRlRReXhUUVVGVExFTkJRVllzU1VGQll5eExRVUZMUlN4SFFVRk1MRU5CUVZOR0xFdEJRVlFzUTBGQlppeEpRVUZ0UXl4SlFVRXhRenRCUVVOSUxFTkJTRVE3TzBGQlRVRk1MRmxCUVZsRkxGTkJRVm9zUTBGQmMwSk5MRkZCUVhSQ0xFZEJRV2xETEZWQlFWTktMRXRCUVZRc1JVRkJaVHRCUVVNMVF5eFhRVUZSTEV0QlFVdEZMRTlCUVV3c1EwRkJZVVlzUzBGQllpeExRVUYxUWl4RFFVRXZRanRCUVVOSUxFTkJSa1E3TzBGQlNVRkxMRTlCUVU5RExFOUJRVkFzUjBGQmFVSldMRmRCUVdwQ0lpd2labWxzWlNJNkltVjRkR1Z1WkdWa0xYTnZjblJsWkMxaGNuSmhlUzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkluWmhjaUJUYjNKMFpXUkJjbkpoZVNBOUlISmxjWFZwY21Vb0ozTnZjblJsWkMxamJYQXRZWEp5WVhrbktUdGNibHh1VTI5eWRHVmtRWEp5WVhrdWNISnZkRzkwZVhCbExtZGxkQ0E5SUdaMWJtTjBhVzl1S0dWdWRISjVLWHRjYmlBZ0lDQjJZWElnYVc1a1pYZ2dQU0IwYUdsekxtbHVaR1Y0VDJZb1pXNTBjbmtwTzF4dUlDQWdJSEpsZEhWeWJpQW9LR2x1WkdWNElENDlJREFwSmlaMGFHbHpMbUZ5Y2x0cGJtUmxlRjBwSUh4OElHNTFiR3c3WEc1OU8xeHVYRzVjYmxOdmNuUmxaRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNWpiMjUwWVdsdWN5QTlJR1oxYm1OMGFXOXVLR1Z1ZEhKNUtYdGNiaUFnSUNCeVpYUjFjbTRnS0hSb2FYTXVhVzVrWlhoUFppaGxiblJ5ZVNrZ1BqMGdNQ2s3WEc1OU8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRk52Y25SbFpFRnljbUY1TzF4dUlsMTkiLCJ2YXIgU29ydGVkQXJyYXkgPSByZXF1aXJlKCcuL2V4dGVuZGVkLXNvcnRlZC1hcnJheScpO1xuXG5mdW5jdGlvbiBNdWx0aVNldChDb21wYXJhdG9yKSB7XG4gICAgdGhpcy5tcyA9IG5ldyBTb3J0ZWRBcnJheShDb21wYXJhdG9yIHx8IGRlZmF1bHRDb21wYXJhdG9yKTtcbn07XG5cbk11bHRpU2V0LnByb3RvdHlwZS5pbnNlcnQgPSBmdW5jdGlvbiAoZW50cnlPcklkKSB7XG4gICAgdmFyIG9iamVjdCA9IHRoaXMubXMuZ2V0KGVudHJ5T3JJZCk7XG4gICAgaWYgKG9iamVjdCkge1xuICAgICAgICAvLyAjMSBpZiB0aGUgb2JqZWN0IGFscmVhZHkgZXhpc3RzLCBpbmNyZW1lbnQgaXRzIG9jY3VycmVuY2VcbiAgICAgICAgb2JqZWN0Lm9jYyArPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICMyIGluaXRhbGl6ZSB0aGUgb2NjdXJyZW5jZSB0byAxIGFuZCBpbnNlcnQgaXQgb3RoZXJ3aXNlXG4gICAgICAgIGVudHJ5T3JJZC5vY2MgPSAxO1xuICAgICAgICB0aGlzLm1zLmluc2VydChlbnRyeU9ySWQpO1xuICAgIH07XG4gICAgcmV0dXJuIG9iamVjdDtcbn07XG5cbk11bHRpU2V0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoZW50cnlPcklkKSB7XG4gICAgdmFyIG9iamVjdCA9IHRoaXMubXMuZ2V0KGVudHJ5T3JJZCk7XG4gICAgaWYgKG9iamVjdCkge1xuICAgICAgICBvYmplY3Qub2NjIC09IDE7XG4gICAgICAgIG9iamVjdC5vY2MgPD0gMCAmJiB0aGlzLm1zLnJlbW92ZShlbnRyeU9ySWQpO1xuICAgIH07XG4gICAgcmV0dXJuIG9iamVjdDtcbn07XG5cbk11bHRpU2V0LnByb3RvdHlwZS5yZW1vdmVBbGwgPSBmdW5jdGlvbiAoZW50cnlPcklkKSB7XG4gICAgdmFyIG9iamVjdCA9IHRoaXMubXMuZ2V0KGVudHJ5T3JJZCk7XG4gICAgaWYgKG9iamVjdCkge1xuICAgICAgICAvLyAgICAgICAgb2JqZWN0Lm9jYyA9IDA7XG4gICAgICAgIHRoaXMubXMucmVtb3ZlKGVudHJ5T3JJZCk7XG4gICAgfTtcbiAgICByZXR1cm4gb2JqZWN0O1xufTtcblxuTXVsdGlTZXQucHJvdG90eXBlLmNvbnRhaW5zID0gZnVuY3Rpb24gKGVudHJ5T3JJZCkge1xuICAgIHJldHVybiB0aGlzLm1zLmNvbnRhaW5zKGVudHJ5T3JJZCk7XG59O1xuXG5NdWx0aVNldC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGVudHJ5T3JJZCkge1xuICAgIHJldHVybiB0aGlzLm1zLmdldChlbnRyeU9ySWQpO1xufTtcblxuZnVuY3Rpb24gZGVmYXVsdENvbXBhcmF0b3IoYSwgYikge1xuICAgIHZhciBmaXJzdCA9IGEuaWQgfHwgYTtcbiAgICB2YXIgc2Vjb25kID0gYi5pZCB8fCBiO1xuICAgIGlmIChmaXJzdCA8IHNlY29uZCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgfTtcbiAgICBpZiAoZmlyc3QgPiBzZWNvbmQpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfTtcbiAgICByZXR1cm4gMDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTXVsdGlTZXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTExYkhScGMyVjBMbXB6SWwwc0ltNWhiV1Z6SWpwYklsTnZjblJsWkVGeWNtRjVJaXdpY21WeGRXbHlaU0lzSWsxMWJIUnBVMlYwSWl3aVEyOXRjR0Z5WVhSdmNpSXNJbTF6SWl3aVpHVm1ZWFZzZEVOdmJYQmhjbUYwYjNJaUxDSndjbTkwYjNSNWNHVWlMQ0pwYm5ObGNuUWlMQ0psYm5SeWVVOXlTV1FpTENKdlltcGxZM1FpTENKblpYUWlMQ0p2WTJNaUxDSnlaVzF2ZG1VaUxDSnlaVzF2ZG1WQmJHd2lMQ0pqYjI1MFlXbHVjeUlzSW1FaUxDSmlJaXdpWm1seWMzUWlMQ0pwWkNJc0luTmxZMjl1WkNJc0ltMXZaSFZzWlNJc0ltVjRjRzl5ZEhNaVhTd2liV0Z3Y0dsdVozTWlPaUpCUVVGQkxFbEJRVWxCTEdOQlFXTkRMRkZCUVZFc2VVSkJRVklzUTBGQmJFSTdPMEZCUlVFc1UwRkJVME1zVVVGQlZDeERRVUZyUWtNc1ZVRkJiRUlzUlVGQk5rSTdRVUZEZWtJc1UwRkJTME1zUlVGQlRDeEhRVUZWTEVsQlFVbEtMRmRCUVVvc1EwRkJaMEpITEdOQlFWbEZMR2xDUVVFMVFpeERRVUZXTzBGQlEwZzdPMEZCUlVSSUxGTkJRVk5KTEZOQlFWUXNRMEZCYlVKRExFMUJRVzVDTEVkQlFUUkNMRlZCUVZORExGTkJRVlFzUlVGQmJVSTdRVUZETTBNc1VVRkJTVU1zVTBGQlV5eExRVUZMVEN4RlFVRk1MRU5CUVZGTkxFZEJRVklzUTBGQldVWXNVMEZCV2l4RFFVRmlPMEZCUTBFc1VVRkJTVU1zVFVGQlNpeEZRVUZYTzBGQlExQTdRVUZEUVVFc1pVRkJUMFVzUjBGQlVDeEpRVUZqTEVOQlFXUTdRVUZEU0N4TFFVaEVMRTFCUjA4N1FVRkRTRHRCUVVOQlNDeHJRa0ZCVlVjc1IwRkJWaXhIUVVGblFpeERRVUZvUWp0QlFVTkJMR0ZCUVV0UUxFVkJRVXdzUTBGQlVVY3NUVUZCVWl4RFFVRmxReXhUUVVGbU8wRkJRMGc3UVVGRFJDeFhRVUZQUXl4TlFVRlFPMEZCUTBnc1EwRllSRHM3UVVGaFFWQXNVMEZCVTBrc1UwRkJWQ3hEUVVGdFFrMHNUVUZCYmtJc1IwRkJORUlzVlVGQlUwb3NVMEZCVkN4RlFVRnRRanRCUVVNelF5eFJRVUZKUXl4VFFVRlRMRXRCUVV0TUxFVkJRVXdzUTBGQlVVMHNSMEZCVWl4RFFVRlpSaXhUUVVGYUxFTkJRV0k3UVVGRFFTeFJRVUZKUXl4TlFVRktMRVZCUVZjN1FVRkRVRUVzWlVGQlQwVXNSMEZCVUN4SlFVRmpMRU5CUVdRN1FVRkRRMFlzWlVGQlQwVXNSMEZCVUN4SlFVRmpMRU5CUVdZc1NVRkJjVUlzUzBGQlMxQXNSVUZCVEN4RFFVRlJVU3hOUVVGU0xFTkJRV1ZLTEZOQlFXWXNRMEZCY2tJN1FVRkRTRHRCUVVORUxGZEJRVTlETEUxQlFWQTdRVUZEU0N4RFFWQkVPenRCUVZOQlVDeFRRVUZUU1N4VFFVRlVMRU5CUVcxQ1R5eFRRVUZ1UWl4SFFVRXJRaXhWUVVGVFRDeFRRVUZVTEVWQlFXMUNPMEZCUXpsRExGRkJRVWxETEZOQlFWTXNTMEZCUzB3c1JVRkJUQ3hEUVVGUlRTeEhRVUZTTEVOQlFWbEdMRk5CUVZvc1EwRkJZanRCUVVOQkxGRkJRVWxETEUxQlFVb3NSVUZCVnp0QlFVTm1PMEZCUTFFc1lVRkJTMHdzUlVGQlRDeERRVUZSVVN4TlFVRlNMRU5CUVdWS0xGTkJRV1k3UVVGRFNEdEJRVU5FTEZkQlFVOURMRTFCUVZBN1FVRkRTQ3hEUVZCRU96dEJRVk5CVUN4VFFVRlRTU3hUUVVGVUxFTkJRVzFDVVN4UlFVRnVRaXhIUVVFNFFpeFZRVUZUVGl4VFFVRlVMRVZCUVcxQ08wRkJRemRETEZkQlFVOHNTMEZCUzBvc1JVRkJUQ3hEUVVGUlZTeFJRVUZTTEVOQlFXbENUaXhUUVVGcVFpeERRVUZRTzBGQlEwZ3NRMEZHUkRzN1FVRkpRVTRzVTBGQlUwa3NVMEZCVkN4RFFVRnRRa2tzUjBGQmJrSXNSMEZCZVVJc1ZVRkJVMFlzVTBGQlZDeEZRVUZ0UWp0QlFVTjRReXhYUVVGUExFdEJRVXRLTEVWQlFVd3NRMEZCVVUwc1IwRkJVaXhEUVVGWlJpeFRRVUZhTEVOQlFWQTdRVUZEU0N4RFFVWkVPenRCUVVsQkxGTkJRVk5JTEdsQ1FVRlVMRU5CUVRKQ1ZTeERRVUV6UWl4RlFVRTRRa01zUTBGQk9VSXNSVUZCWjBNN1FVRkROVUlzVVVGQlNVTXNVVUZCVVVZc1JVRkJSVWNzUlVGQlJpeEpRVUZSU0N4RFFVRndRanRCUVVOQkxGRkJRVWxKTEZOQlFWTklMRVZCUVVWRkxFVkJRVVlzU1VGQlVVWXNRMEZCY2tJN1FVRkRRU3hSUVVGSlF5eFJRVUZSUlN4TlFVRmFMRVZCUVcxQ08wRkJRVU1zWlVGQlR5eERRVUZETEVOQlFWSTdRVUZCVlR0QlFVTTVRaXhSUVVGSlJpeFJRVUZSUlN4TlFVRmFMRVZCUVcxQ08wRkJRVU1zWlVGQlVTeERRVUZTTzBGQlFWVTdRVUZET1VJc1YwRkJUeXhEUVVGUU8wRkJRMGc3TzBGQlIwUkRMRTlCUVU5RExFOUJRVkFzUjBGQmFVSnVRaXhSUVVGcVFpSXNJbVpwYkdVaU9pSnRkV3gwYVhObGRDNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW5aaGNpQlRiM0owWldSQmNuSmhlU0E5SUhKbGNYVnBjbVVvSnk0dlpYaDBaVzVrWldRdGMyOXlkR1ZrTFdGeWNtRjVKeWs3WEc1Y2JtWjFibU4wYVc5dUlFMTFiSFJwVTJWMEtFTnZiWEJoY21GMGIzSXBlMXh1SUNBZ0lIUm9hWE11YlhNZ1BTQnVaWGNnVTI5eWRHVmtRWEp5WVhrb1EyOXRjR0Z5WVhSdmNueDhaR1ZtWVhWc2RFTnZiWEJoY21GMGIzSXBPMXh1ZlR0Y2JseHVUWFZzZEdsVFpYUXVjSEp2ZEc5MGVYQmxMbWx1YzJWeWRDQTlJR1oxYm1OMGFXOXVLR1Z1ZEhKNVQzSkpaQ2w3WEc0Z0lDQWdkbUZ5SUc5aWFtVmpkQ0E5SUhSb2FYTXViWE11WjJWMEtHVnVkSEo1VDNKSlpDazdYRzRnSUNBZ2FXWWdLRzlpYW1WamRDbDdYRzRnSUNBZ0lDQWdJQzh2SUNNeElHbG1JSFJvWlNCdlltcGxZM1FnWVd4eVpXRmtlU0JsZUdsemRITXNJR2x1WTNKbGJXVnVkQ0JwZEhNZ2IyTmpkWEp5Wlc1alpWeHVJQ0FnSUNBZ0lDQnZZbXBsWTNRdWIyTmpJQ3M5SURFN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnTHk4Z0l6SWdhVzVwZEdGc2FYcGxJSFJvWlNCdlkyTjFjbkpsYm1ObElIUnZJREVnWVc1a0lHbHVjMlZ5ZENCcGRDQnZkR2hsY25kcGMyVmNiaUFnSUNBZ0lDQWdaVzUwY25sUGNrbGtMbTlqWXlBOUlERTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJYTXVhVzV6WlhKMEtHVnVkSEo1VDNKSlpDazdYRzRnSUNBZ2ZUdGNiaUFnSUNCeVpYUjFjbTRnYjJKcVpXTjBPMXh1ZlR0Y2JseHVUWFZzZEdsVFpYUXVjSEp2ZEc5MGVYQmxMbkpsYlc5MlpTQTlJR1oxYm1OMGFXOXVLR1Z1ZEhKNVQzSkpaQ2w3WEc0Z0lDQWdkbUZ5SUc5aWFtVmpkQ0E5SUhSb2FYTXViWE11WjJWMEtHVnVkSEo1VDNKSlpDazdYRzRnSUNBZ2FXWWdLRzlpYW1WamRDbDdYRzRnSUNBZ0lDQWdJRzlpYW1WamRDNXZZMk1nTFQwZ01UdGNiaUFnSUNBZ0lDQWdLRzlpYW1WamRDNXZZMk1nUEQwZ01Da2dKaVlnZEdocGN5NXRjeTV5WlcxdmRtVW9aVzUwY25sUGNrbGtLVHRjYmlBZ0lDQjlPMXh1SUNBZ0lISmxkSFZ5YmlCdlltcGxZM1E3WEc1OU8xeHVYRzVOZFd4MGFWTmxkQzV3Y205MGIzUjVjR1V1Y21WdGIzWmxRV3hzSUQwZ1puVnVZM1JwYjI0b1pXNTBjbmxQY2tsa0tYdGNiaUFnSUNCMllYSWdiMkpxWldOMElEMGdkR2hwY3k1dGN5NW5aWFFvWlc1MGNubFBja2xrS1R0Y2JpQWdJQ0JwWmlBb2IySnFaV04wS1h0Y2JpOHZJQ0FnSUNBZ0lDQnZZbXBsWTNRdWIyTmpJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV0Y3k1eVpXMXZkbVVvWlc1MGNubFBja2xrS1R0Y2JpQWdJQ0I5TzF4dUlDQWdJSEpsZEhWeWJpQnZZbXBsWTNRN1hHNTlPMXh1WEc1TmRXeDBhVk5sZEM1d2NtOTBiM1I1Y0dVdVkyOXVkR0ZwYm5NZ1BTQm1kVzVqZEdsdmJpaGxiblJ5ZVU5eVNXUXBlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbTF6TG1OdmJuUmhhVzV6S0dWdWRISjVUM0pKWkNrN1hHNTlPMXh1WEc1TmRXeDBhVk5sZEM1d2NtOTBiM1I1Y0dVdVoyVjBJRDBnWm5WdVkzUnBiMjRvWlc1MGNubFBja2xrS1h0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1dGN5NW5aWFFvWlc1MGNubFBja2xrS1R0Y2JuMDdYRzVjYm1aMWJtTjBhVzl1SUdSbFptRjFiSFJEYjIxd1lYSmhkRzl5S0dFc0lHSXBlMXh1SUNBZ0lIWmhjaUJtYVhKemRDQTlJR0V1YVdRZ2ZId2dZVHRjYmlBZ0lDQjJZWElnYzJWamIyNWtJRDBnWWk1cFpDQjhmQ0JpTzF4dUlDQWdJR2xtSUNobWFYSnpkQ0E4SUhObFkyOXVaQ2w3Y21WMGRYSnVJQzB4ZlR0Y2JpQWdJQ0JwWmlBb1ptbHljM1FnUGlCelpXTnZibVFwZTNKbGRIVnliaUFnTVgwN1hHNGdJQ0FnY21WMGRYSnVJREE3WEc1OU8xeHVYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnVFhWc2RHbFRaWFE3WEc0aVhYMD0iLCJ2YXIgbG9va3VwID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nO1xuXG47KGZ1bmN0aW9uIChleHBvcnRzKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuICB2YXIgQXJyID0gKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJylcbiAgICA/IFVpbnQ4QXJyYXlcbiAgICA6IEFycmF5XG5cblx0dmFyIFBMVVMgICA9ICcrJy5jaGFyQ29kZUF0KDApXG5cdHZhciBTTEFTSCAgPSAnLycuY2hhckNvZGVBdCgwKVxuXHR2YXIgTlVNQkVSID0gJzAnLmNoYXJDb2RlQXQoMClcblx0dmFyIExPV0VSICA9ICdhJy5jaGFyQ29kZUF0KDApXG5cdHZhciBVUFBFUiAgPSAnQScuY2hhckNvZGVBdCgwKVxuXG5cdGZ1bmN0aW9uIGRlY29kZSAoZWx0KSB7XG5cdFx0dmFyIGNvZGUgPSBlbHQuY2hhckNvZGVBdCgwKVxuXHRcdGlmIChjb2RlID09PSBQTFVTKVxuXHRcdFx0cmV0dXJuIDYyIC8vICcrJ1xuXHRcdGlmIChjb2RlID09PSBTTEFTSClcblx0XHRcdHJldHVybiA2MyAvLyAnLydcblx0XHRpZiAoY29kZSA8IE5VTUJFUilcblx0XHRcdHJldHVybiAtMSAvL25vIG1hdGNoXG5cdFx0aWYgKGNvZGUgPCBOVU1CRVIgKyAxMClcblx0XHRcdHJldHVybiBjb2RlIC0gTlVNQkVSICsgMjYgKyAyNlxuXHRcdGlmIChjb2RlIDwgVVBQRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gVVBQRVJcblx0XHRpZiAoY29kZSA8IExPV0VSICsgMjYpXG5cdFx0XHRyZXR1cm4gY29kZSAtIExPV0VSICsgMjZcblx0fVxuXG5cdGZ1bmN0aW9uIGI2NFRvQnl0ZUFycmF5IChiNjQpIHtcblx0XHR2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuXG5cdFx0aWYgKGI2NC5sZW5ndGggJSA0ID4gMCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0Jylcblx0XHR9XG5cblx0XHQvLyB0aGUgbnVtYmVyIG9mIGVxdWFsIHNpZ25zIChwbGFjZSBob2xkZXJzKVxuXHRcdC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcblx0XHQvLyByZXByZXNlbnQgb25lIGJ5dGVcblx0XHQvLyBpZiB0aGVyZSBpcyBvbmx5IG9uZSwgdGhlbiB0aGUgdGhyZWUgY2hhcmFjdGVycyBiZWZvcmUgaXQgcmVwcmVzZW50IDIgYnl0ZXNcblx0XHQvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG5cdFx0dmFyIGxlbiA9IGI2NC5sZW5ndGhcblx0XHRwbGFjZUhvbGRlcnMgPSAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMikgPyAyIDogJz0nID09PSBiNjQuY2hhckF0KGxlbiAtIDEpID8gMSA6IDBcblxuXHRcdC8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuXHRcdGFyciA9IG5ldyBBcnIoYjY0Lmxlbmd0aCAqIDMgLyA0IC0gcGxhY2VIb2xkZXJzKVxuXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuXHRcdGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gYjY0Lmxlbmd0aCAtIDQgOiBiNjQubGVuZ3RoXG5cblx0XHR2YXIgTCA9IDBcblxuXHRcdGZ1bmN0aW9uIHB1c2ggKHYpIHtcblx0XHRcdGFycltMKytdID0gdlxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTgpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgMTIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAyKSkgPDwgNikgfCBkZWNvZGUoYjY0LmNoYXJBdChpICsgMykpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDAwMCkgPj4gMTYpXG5cdFx0XHRwdXNoKCh0bXAgJiAweEZGMDApID4+IDgpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fVxuXG5cdFx0aWYgKHBsYWNlSG9sZGVycyA9PT0gMikge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAyKSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMSkpID4+IDQpXG5cdFx0XHRwdXNoKHRtcCAmIDB4RkYpXG5cdFx0fSBlbHNlIGlmIChwbGFjZUhvbGRlcnMgPT09IDEpIHtcblx0XHRcdHRtcCA9IChkZWNvZGUoYjY0LmNoYXJBdChpKSkgPDwgMTApIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPDwgNCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA+PiAyKVxuXHRcdFx0cHVzaCgodG1wID4+IDgpICYgMHhGRilcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyXG5cdH1cblxuXHRmdW5jdGlvbiB1aW50OFRvQmFzZTY0ICh1aW50OCkge1xuXHRcdHZhciBpLFxuXHRcdFx0ZXh0cmFCeXRlcyA9IHVpbnQ4Lmxlbmd0aCAlIDMsIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG5cdFx0XHRvdXRwdXQgPSBcIlwiLFxuXHRcdFx0dGVtcCwgbGVuZ3RoXG5cblx0XHRmdW5jdGlvbiBlbmNvZGUgKG51bSkge1xuXHRcdFx0cmV0dXJuIGxvb2t1cC5jaGFyQXQobnVtKVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKG51bSA+PiAxOCAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiAxMiAmIDB4M0YpICsgZW5jb2RlKG51bSA+PiA2ICYgMHgzRikgKyBlbmNvZGUobnVtICYgMHgzRilcblx0XHR9XG5cblx0XHQvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG5cdFx0Zm9yIChpID0gMCwgbGVuZ3RoID0gdWludDgubGVuZ3RoIC0gZXh0cmFCeXRlczsgaSA8IGxlbmd0aDsgaSArPSAzKSB7XG5cdFx0XHR0ZW1wID0gKHVpbnQ4W2ldIDw8IDE2KSArICh1aW50OFtpICsgMV0gPDwgOCkgKyAodWludDhbaSArIDJdKVxuXHRcdFx0b3V0cHV0ICs9IHRyaXBsZXRUb0Jhc2U2NCh0ZW1wKVxuXHRcdH1cblxuXHRcdC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcblx0XHRzd2l0Y2ggKGV4dHJhQnl0ZXMpIHtcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0dGVtcCA9IHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAyKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9PSdcblx0XHRcdFx0YnJlYWtcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0dGVtcCA9ICh1aW50OFt1aW50OC5sZW5ndGggLSAyXSA8PCA4KSArICh1aW50OFt1aW50OC5sZW5ndGggLSAxXSlcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDEwKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wID4+IDQpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSgodGVtcCA8PCAyKSAmIDB4M0YpXG5cdFx0XHRcdG91dHB1dCArPSAnPSdcblx0XHRcdFx0YnJlYWtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0XG5cdH1cblxuXHRleHBvcnRzLnRvQnl0ZUFycmF5ID0gYjY0VG9CeXRlQXJyYXlcblx0ZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gdWludDhUb0Jhc2U2NFxufSh0eXBlb2YgZXhwb3J0cyA9PT0gJ3VuZGVmaW5lZCcgPyAodGhpcy5iYXNlNjRqcyA9IHt9KSA6IGV4cG9ydHMpKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihoYXlzdGFjaywgbmVlZGxlLCBjb21wYXJhdG9yLCBsb3csIGhpZ2gpIHtcbiAgdmFyIG1pZCwgY21wO1xuXG4gIGlmKGxvdyA9PT0gdW5kZWZpbmVkKVxuICAgIGxvdyA9IDA7XG5cbiAgZWxzZSB7XG4gICAgbG93ID0gbG93fDA7XG4gICAgaWYobG93IDwgMCB8fCBsb3cgPj0gaGF5c3RhY2subGVuZ3RoKVxuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJpbnZhbGlkIGxvd2VyIGJvdW5kXCIpO1xuICB9XG5cbiAgaWYoaGlnaCA9PT0gdW5kZWZpbmVkKVxuICAgIGhpZ2ggPSBoYXlzdGFjay5sZW5ndGggLSAxO1xuXG4gIGVsc2Uge1xuICAgIGhpZ2ggPSBoaWdofDA7XG4gICAgaWYoaGlnaCA8IGxvdyB8fCBoaWdoID49IGhheXN0YWNrLmxlbmd0aClcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiaW52YWxpZCB1cHBlciBib3VuZFwiKTtcbiAgfVxuXG4gIHdoaWxlKGxvdyA8PSBoaWdoKSB7XG4gICAgLyogTm90ZSB0aGF0IFwiKGxvdyArIGhpZ2gpID4+PiAxXCIgbWF5IG92ZXJmbG93LCBhbmQgcmVzdWx0cyBpbiBhIHR5cGVjYXN0XG4gICAgICogdG8gZG91YmxlICh3aGljaCBnaXZlcyB0aGUgd3JvbmcgcmVzdWx0cykuICovXG4gICAgbWlkID0gbG93ICsgKGhpZ2ggLSBsb3cgPj4gMSk7XG4gICAgY21wID0gK2NvbXBhcmF0b3IoaGF5c3RhY2tbbWlkXSwgbmVlZGxlLCBtaWQsIGhheXN0YWNrKTtcblxuICAgIC8qIFRvbyBsb3cuICovXG4gICAgaWYoY21wIDwgMC4wKVxuICAgICAgbG93ICA9IG1pZCArIDE7XG5cbiAgICAvKiBUb28gaGlnaC4gKi9cbiAgICBlbHNlIGlmKGNtcCA+IDAuMClcbiAgICAgIGhpZ2ggPSBtaWQgLSAxO1xuXG4gICAgLyogS2V5IGZvdW5kLiAqL1xuICAgIGVsc2VcbiAgICAgIHJldHVybiBtaWQ7XG4gIH1cblxuICAvKiBLZXkgbm90IGZvdW5kLiAqL1xuICByZXR1cm4gfmxvdztcbn1cbiIsbnVsbCwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgYnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJyk7XG52YXIgQnVmZmVyID0gYnVmZmVyLkJ1ZmZlcjtcbnZhciBTbG93QnVmZmVyID0gYnVmZmVyLlNsb3dCdWZmZXI7XG52YXIgTUFYX0xFTiA9IGJ1ZmZlci5rTWF4TGVuZ3RoIHx8IDIxNDc0ODM2NDc7XG5leHBvcnRzLmFsbG9jID0gZnVuY3Rpb24gYWxsb2Moc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBCdWZmZXIuYWxsb2MgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gQnVmZmVyLmFsbG9jKHNpemUsIGZpbGwsIGVuY29kaW5nKTtcbiAgfVxuICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3Qgbm90IGJlIG51bWJlcicpO1xuICB9XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdzaXplIG11c3QgYmUgYSBudW1iZXInKTtcbiAgfVxuICBpZiAoc2l6ZSA+IE1BWF9MRU4pIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc2l6ZSBpcyB0b28gbGFyZ2UnKTtcbiAgfVxuICB2YXIgZW5jID0gZW5jb2Rpbmc7XG4gIHZhciBfZmlsbCA9IGZpbGw7XG4gIGlmIChfZmlsbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jID0gdW5kZWZpbmVkO1xuICAgIF9maWxsID0gMDtcbiAgfVxuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcihzaXplKTtcbiAgaWYgKHR5cGVvZiBfZmlsbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgZmlsbEJ1ZiA9IG5ldyBCdWZmZXIoX2ZpbGwsIGVuYyk7XG4gICAgdmFyIGZsZW4gPSBmaWxsQnVmLmxlbmd0aDtcbiAgICB2YXIgaSA9IC0xO1xuICAgIHdoaWxlICgrK2kgPCBzaXplKSB7XG4gICAgICBidWZbaV0gPSBmaWxsQnVmW2kgJSBmbGVuXTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYnVmLmZpbGwoX2ZpbGwpO1xuICB9XG4gIHJldHVybiBidWY7XG59XG5leHBvcnRzLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gYWxsb2NVbnNhZmUoc2l6ZSkge1xuICBpZiAodHlwZW9mIEJ1ZmZlci5hbGxvY1Vuc2FmZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2NVbnNhZmUoc2l6ZSk7XG4gIH1cbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NpemUgbXVzdCBiZSBhIG51bWJlcicpO1xuICB9XG4gIGlmIChzaXplID4gTUFYX0xFTikge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdzaXplIGlzIHRvbyBsYXJnZScpO1xuICB9XG4gIHJldHVybiBuZXcgQnVmZmVyKHNpemUpO1xufVxuZXhwb3J0cy5mcm9tID0gZnVuY3Rpb24gZnJvbSh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgQnVmZmVyLmZyb20gPT09ICdmdW5jdGlvbicgJiYgKCFnbG9iYWwuVWludDhBcnJheSB8fCBVaW50OEFycmF5LmZyb20gIT09IEJ1ZmZlci5mcm9tKSkge1xuICAgIHJldHVybiBCdWZmZXIuZnJvbSh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpO1xuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgb2Zmc2V0ID0gZW5jb2RpbmdPck9mZnNldDtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIG5ldyBCdWZmZXIodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuICAgIHZhciBsZW4gPSBsZW5ndGg7XG4gICAgaWYgKHR5cGVvZiBsZW4gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBsZW4gPSB2YWx1ZS5ieXRlTGVuZ3RoIC0gb2Zmc2V0O1xuICAgIH1cbiAgICBpZiAob2Zmc2V0ID49IHZhbHVlLmJ5dGVMZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdvZmZzZXRcXCcgaXMgb3V0IG9mIGJvdW5kcycpO1xuICAgIH1cbiAgICBpZiAobGVuID4gdmFsdWUuYnl0ZUxlbmd0aCAtIG9mZnNldCkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ2xlbmd0aFxcJyBpcyBvdXQgb2YgYm91bmRzJyk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQnVmZmVyKHZhbHVlLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgbGVuKSk7XG4gIH1cbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWx1ZSkpIHtcbiAgICB2YXIgb3V0ID0gbmV3IEJ1ZmZlcih2YWx1ZS5sZW5ndGgpO1xuICAgIHZhbHVlLmNvcHkob3V0LCAwLCAwLCB2YWx1ZS5sZW5ndGgpO1xuICAgIHJldHVybiBvdXQ7XG4gIH1cbiAgaWYgKHZhbHVlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8ICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG5ldyBCdWZmZXIodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodmFsdWUudHlwZSA9PT0gJ0J1ZmZlcicgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZS5kYXRhKSkge1xuICAgICAgcmV0dXJuIG5ldyBCdWZmZXIodmFsdWUuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZywgQnVmZmVyLCAnICsgJ0FycmF5QnVmZmVyLCBBcnJheSwgb3IgYXJyYXktbGlrZSBvYmplY3QuJyk7XG59XG5leHBvcnRzLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIGFsbG9jVW5zYWZlU2xvdyhzaXplKSB7XG4gIGlmICh0eXBlb2YgQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2NVbnNhZmVTbG93KHNpemUpO1xuICB9XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdzaXplIG11c3QgYmUgYSBudW1iZXInKTtcbiAgfVxuICBpZiAoc2l6ZSA+PSBNQVhfTEVOKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NpemUgaXMgdG9vIGxhcmdlJyk7XG4gIH1cbiAgcmV0dXJuIG5ldyBTbG93QnVmZmVyKHNpemUpO1xufVxuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTlpZFdabVpYSXRjMmhwYlhNdmFXNWtaWGd1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJJaXdpWm1sc1pTSTZJbWRsYm1WeVlYUmxaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJbmRYTmxJSE4wY21samRDYzdYRzVjYm5aaGNpQmlkV1ptWlhJZ1BTQnlaWEYxYVhKbEtDZGlkV1ptWlhJbktUdGNiblpoY2lCQ2RXWm1aWElnUFNCaWRXWm1aWEl1UW5WbVptVnlPMXh1ZG1GeUlGTnNiM2RDZFdabVpYSWdQU0JpZFdabVpYSXVVMnh2ZDBKMVptWmxjanRjYm5aaGNpQk5RVmhmVEVWT0lEMGdZblZtWm1WeUxtdE5ZWGhNWlc1bmRHZ2dmSHdnTWpFME56UTRNelkwTnp0Y2JtVjRjRzl5ZEhNdVlXeHNiMk1nUFNCbWRXNWpkR2x2YmlCaGJHeHZZeWh6YVhwbExDQm1hV3hzTENCbGJtTnZaR2x1WnlrZ2UxeHVJQ0JwWmlBb2RIbHdaVzltSUVKMVptWmxjaTVoYkd4dll5QTlQVDBnSjJaMWJtTjBhVzl1SnlrZ2UxeHVJQ0FnSUhKbGRIVnliaUJDZFdabVpYSXVZV3hzYjJNb2MybDZaU3dnWm1sc2JDd2daVzVqYjJScGJtY3BPMXh1SUNCOVhHNGdJR2xtSUNoMGVYQmxiMllnWlc1amIyUnBibWNnUFQwOUlDZHVkVzFpWlhJbktTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpZ25aVzVqYjJScGJtY2diWFZ6ZENCdWIzUWdZbVVnYm5WdFltVnlKeWs3WEc0Z0lIMWNiaUFnYVdZZ0tIUjVjR1Z2WmlCemFYcGxJQ0U5UFNBbmJuVnRZbVZ5SnlrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0ozTnBlbVVnYlhWemRDQmlaU0JoSUc1MWJXSmxjaWNwTzF4dUlDQjlYRzRnSUdsbUlDaHphWHBsSUQ0Z1RVRllYMHhGVGlrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCU1lXNW5aVVZ5Y205eUtDZHphWHBsSUdseklIUnZieUJzWVhKblpTY3BPMXh1SUNCOVhHNGdJSFpoY2lCbGJtTWdQU0JsYm1OdlpHbHVaenRjYmlBZ2RtRnlJRjltYVd4c0lEMGdabWxzYkR0Y2JpQWdhV1lnS0Y5bWFXeHNJRDA5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNCbGJtTWdQU0IxYm1SbFptbHVaV1E3WEc0Z0lDQWdYMlpwYkd3Z1BTQXdPMXh1SUNCOVhHNGdJSFpoY2lCaWRXWWdQU0J1WlhjZ1FuVm1abVZ5S0hOcGVtVXBPMXh1SUNCcFppQW9kSGx3Wlc5bUlGOW1hV3hzSUQwOVBTQW5jM1J5YVc1bkp5a2dlMXh1SUNBZ0lIWmhjaUJtYVd4c1FuVm1JRDBnYm1WM0lFSjFabVpsY2loZlptbHNiQ3dnWlc1aktUdGNiaUFnSUNCMllYSWdabXhsYmlBOUlHWnBiR3hDZFdZdWJHVnVaM1JvTzF4dUlDQWdJSFpoY2lCcElEMGdMVEU3WEc0Z0lDQWdkMmhwYkdVZ0tDc3JhU0E4SUhOcGVtVXBJSHRjYmlBZ0lDQWdJR0oxWmx0cFhTQTlJR1pwYkd4Q2RXWmJhU0FsSUdac1pXNWRPMXh1SUNBZ0lIMWNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQmlkV1l1Wm1sc2JDaGZabWxzYkNrN1hHNGdJSDFjYmlBZ2NtVjBkWEp1SUdKMVpqdGNibjFjYm1WNGNHOXlkSE11WVd4c2IyTlZibk5oWm1VZ1BTQm1kVzVqZEdsdmJpQmhiR3h2WTFWdWMyRm1aU2h6YVhwbEtTQjdYRzRnSUdsbUlDaDBlWEJsYjJZZ1FuVm1abVZ5TG1Gc2JHOWpWVzV6WVdabElEMDlQU0FuWm5WdVkzUnBiMjRuS1NCN1hHNGdJQ0FnY21WMGRYSnVJRUoxWm1abGNpNWhiR3h2WTFWdWMyRm1aU2h6YVhwbEtUdGNiaUFnZlZ4dUlDQnBaaUFvZEhsd1pXOW1JSE5wZW1VZ0lUMDlJQ2R1ZFcxaVpYSW5LU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWduYzJsNlpTQnRkWE4wSUdKbElHRWdiblZ0WW1WeUp5azdYRzRnSUgxY2JpQWdhV1lnS0hOcGVtVWdQaUJOUVZoZlRFVk9LU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRkpoYm1kbFJYSnliM0lvSjNOcGVtVWdhWE1nZEc5dklHeGhjbWRsSnlrN1hHNGdJSDFjYmlBZ2NtVjBkWEp1SUc1bGR5QkNkV1ptWlhJb2MybDZaU2s3WEc1OVhHNWxlSEJ2Y25SekxtWnliMjBnUFNCbWRXNWpkR2x2YmlCbWNtOXRLSFpoYkhWbExDQmxibU52WkdsdVowOXlUMlptYzJWMExDQnNaVzVuZEdncElIdGNiaUFnYVdZZ0tIUjVjR1Z2WmlCQ2RXWm1aWEl1Wm5KdmJTQTlQVDBnSjJaMWJtTjBhVzl1SnlBbUppQW9JV2RzYjJKaGJDNVZhVzUwT0VGeWNtRjVJSHg4SUZWcGJuUTRRWEp5WVhrdVpuSnZiU0FoUFQwZ1FuVm1abVZ5TG1aeWIyMHBLU0I3WEc0Z0lDQWdjbVYwZFhKdUlFSjFabVpsY2k1bWNtOXRLSFpoYkhWbExDQmxibU52WkdsdVowOXlUMlptYzJWMExDQnNaVzVuZEdncE8xeHVJQ0I5WEc0Z0lHbG1JQ2gwZVhCbGIyWWdkbUZzZFdVZ1BUMDlJQ2R1ZFcxaVpYSW5LU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWduWENKMllXeDFaVndpSUdGeVozVnRaVzUwSUcxMWMzUWdibTkwSUdKbElHRWdiblZ0WW1WeUp5azdYRzRnSUgxY2JpQWdhV1lnS0hSNWNHVnZaaUIyWVd4MVpTQTlQVDBnSjNOMGNtbHVaeWNwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdibVYzSUVKMVptWmxjaWgyWVd4MVpTd2daVzVqYjJScGJtZFBjazltWm5ObGRDazdYRzRnSUgxY2JpQWdhV1lnS0hSNWNHVnZaaUJCY25KaGVVSjFabVpsY2lBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ2RtRnNkV1VnYVc1emRHRnVZMlZ2WmlCQmNuSmhlVUoxWm1abGNpa2dlMXh1SUNBZ0lIWmhjaUJ2Wm1aelpYUWdQU0JsYm1OdlpHbHVaMDl5VDJabWMyVjBPMXh1SUNBZ0lHbG1JQ2hoY21kMWJXVnVkSE11YkdWdVozUm9JRDA5UFNBeEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2JtVjNJRUoxWm1abGNpaDJZV3gxWlNrN1hHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNoMGVYQmxiMllnYjJabWMyVjBJRDA5UFNBbmRXNWtaV1pwYm1Wa0p5a2dlMXh1SUNBZ0lDQWdiMlptYzJWMElEMGdNRHRjYmlBZ0lDQjlYRzRnSUNBZ2RtRnlJR3hsYmlBOUlHeGxibWQwYUR0Y2JpQWdJQ0JwWmlBb2RIbHdaVzltSUd4bGJpQTlQVDBnSjNWdVpHVm1hVzVsWkNjcElIdGNiaUFnSUNBZ0lHeGxiaUE5SUhaaGJIVmxMbUo1ZEdWTVpXNW5kR2dnTFNCdlptWnpaWFE3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2h2Wm1aelpYUWdQajBnZG1Gc2RXVXVZbmwwWlV4bGJtZDBhQ2tnZTF4dUlDQWdJQ0FnZEdoeWIzY2dibVYzSUZKaGJtZGxSWEp5YjNJb0oxeGNKMjltWm5ObGRGeGNKeUJwY3lCdmRYUWdiMllnWW05MWJtUnpKeWs3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2hzWlc0Z1BpQjJZV3gxWlM1aWVYUmxUR1Z1WjNSb0lDMGdiMlptYzJWMEtTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dVbUZ1WjJWRmNuSnZjaWduWEZ3bmJHVnVaM1JvWEZ3bklHbHpJRzkxZENCdlppQmliM1Z1WkhNbktUdGNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJRzVsZHlCQ2RXWm1aWElvZG1Gc2RXVXVjMnhwWTJVb2IyWm1jMlYwTENCdlptWnpaWFFnS3lCc1pXNHBLVHRjYmlBZ2ZWeHVJQ0JwWmlBb1FuVm1abVZ5TG1selFuVm1abVZ5S0haaGJIVmxLU2tnZTF4dUlDQWdJSFpoY2lCdmRYUWdQU0J1WlhjZ1FuVm1abVZ5S0haaGJIVmxMbXhsYm1kMGFDazdYRzRnSUNBZ2RtRnNkV1V1WTI5d2VTaHZkWFFzSURBc0lEQXNJSFpoYkhWbExteGxibWQwYUNrN1hHNGdJQ0FnY21WMGRYSnVJRzkxZER0Y2JpQWdmVnh1SUNCcFppQW9kbUZzZFdVcElIdGNiaUFnSUNCcFppQW9RWEp5WVhrdWFYTkJjbkpoZVNoMllXeDFaU2tnZkh3Z0tIUjVjR1Z2WmlCQmNuSmhlVUoxWm1abGNpQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdkbUZzZFdVdVluVm1abVZ5SUdsdWMzUmhibU5sYjJZZ1FYSnlZWGxDZFdabVpYSXBJSHg4SUNkc1pXNW5kR2duSUdsdUlIWmhiSFZsS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnYm1WM0lFSjFabVpsY2loMllXeDFaU2s3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2gyWVd4MVpTNTBlWEJsSUQwOVBTQW5RblZtWm1WeUp5QW1KaUJCY25KaGVTNXBjMEZ5Y21GNUtIWmhiSFZsTG1SaGRHRXBLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdibVYzSUVKMVptWmxjaWgyWVd4MVpTNWtZWFJoS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZEdhWEp6ZENCaGNtZDFiV1Z1ZENCdGRYTjBJR0psSUdFZ2MzUnlhVzVuTENCQ2RXWm1aWElzSUNjZ0t5QW5RWEp5WVhsQ2RXWm1aWElzSUVGeWNtRjVMQ0J2Y2lCaGNuSmhlUzFzYVd0bElHOWlhbVZqZEM0bktUdGNibjFjYm1WNGNHOXlkSE11WVd4c2IyTlZibk5oWm1WVGJHOTNJRDBnWm5WdVkzUnBiMjRnWVd4c2IyTlZibk5oWm1WVGJHOTNLSE5wZW1VcElIdGNiaUFnYVdZZ0tIUjVjR1Z2WmlCQ2RXWm1aWEl1WVd4c2IyTlZibk5oWm1WVGJHOTNJRDA5UFNBblpuVnVZM1JwYjI0bktTQjdYRzRnSUNBZ2NtVjBkWEp1SUVKMVptWmxjaTVoYkd4dlkxVnVjMkZtWlZOc2IzY29jMmw2WlNrN1hHNGdJSDFjYmlBZ2FXWWdLSFI1Y0dWdlppQnphWHBsSUNFOVBTQW5iblZ0WW1WeUp5a2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9KM05wZW1VZ2JYVnpkQ0JpWlNCaElHNTFiV0psY2ljcE8xeHVJQ0I5WEc0Z0lHbG1JQ2h6YVhwbElENDlJRTFCV0Y5TVJVNHBJSHRjYmlBZ0lDQjBhSEp2ZHlCdVpYY2dVbUZ1WjJWRmNuSnZjaWduYzJsNlpTQnBjeUIwYjI4Z2JHRnlaMlVuS1R0Y2JpQWdmVnh1SUNCeVpYUjFjbTRnYm1WM0lGTnNiM2RDZFdabVpYSW9jMmw2WlNrN1hHNTlYRzRpWFgwPSIsIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpcy1hcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbnZhciBrTWF4TGVuZ3RoID0gMHgzZmZmZmZmZlxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBOb3RlOlxuICpcbiAqIC0gSW1wbGVtZW50YXRpb24gbXVzdCBzdXBwb3J0IGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLlxuICogICBGaXJlZm94IDQtMjkgbGFja2VkIHN1cHBvcnQsIGZpeGVkIGluIEZpcmVmb3ggMzArLlxuICogICBTZWU6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY5NTQzOC5cbiAqXG4gKiAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAtIElFMTAgaGFzIGEgYnJva2VuIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhcnJheXMgb2ZcbiAqICAgIGluY29ycmVjdCBsZW5ndGggaW4gc29tZSBzaXR1YXRpb25zLlxuICpcbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5IHdpbGxcbiAqIGdldCB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uLCB3aGljaCBpcyBzbG93ZXIgYnV0IHdpbGwgd29yayBjb3JyZWN0bHkuXG4gKi9cbkJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUID0gKGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYnVmID0gbmV3IEFycmF5QnVmZmVyKDApXG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICBhcnIuZm9vID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfVxuICAgIHJldHVybiA0MiA9PT0gYXJyLmZvbygpICYmIC8vIHR5cGVkIGFycmF5IGluc3RhbmNlcyBjYW4gYmUgYXVnbWVudGVkXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgJiYgLy8gY2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gICAgICAgIG5ldyBVaW50OEFycmF5KDEpLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59KSgpXG5cbi8qKlxuICogQ2xhc3M6IEJ1ZmZlclxuICogPT09PT09PT09PT09PVxuICpcbiAqIFRoZSBCdWZmZXIgY29uc3RydWN0b3IgcmV0dXJucyBpbnN0YW5jZXMgb2YgYFVpbnQ4QXJyYXlgIHRoYXQgYXJlIGF1Z21lbnRlZFxuICogd2l0aCBmdW5jdGlvbiBwcm9wZXJ0aWVzIGZvciBhbGwgdGhlIG5vZGUgYEJ1ZmZlcmAgQVBJIGZ1bmN0aW9ucy4gV2UgdXNlXG4gKiBgVWludDhBcnJheWAgc28gdGhhdCBzcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdCByZXR1cm5zXG4gKiBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBCeSBhdWdtZW50aW5nIHRoZSBpbnN0YW5jZXMsIHdlIGNhbiBhdm9pZCBtb2RpZnlpbmcgdGhlIGBVaW50OEFycmF5YFxuICogcHJvdG90eXBlLlxuICovXG5mdW5jdGlvbiBCdWZmZXIgKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpXG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoc3ViamVjdCwgZW5jb2RpbmcsIG5vWmVybylcblxuICB2YXIgdHlwZSA9IHR5cGVvZiBzdWJqZWN0XG5cbiAgLy8gRmluZCB0aGUgbGVuZ3RoXG4gIHZhciBsZW5ndGhcbiAgaWYgKHR5cGUgPT09ICdudW1iZXInKVxuICAgIGxlbmd0aCA9IHN1YmplY3QgPiAwID8gc3ViamVjdCA+Pj4gMCA6IDBcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoZW5jb2RpbmcgPT09ICdiYXNlNjQnKVxuICAgICAgc3ViamVjdCA9IGJhc2U2NGNsZWFuKHN1YmplY3QpXG4gICAgbGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoc3ViamVjdCwgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcgJiYgc3ViamVjdCAhPT0gbnVsbCkgeyAvLyBhc3N1bWUgb2JqZWN0IGlzIGFycmF5LWxpa2VcbiAgICBpZiAoc3ViamVjdC50eXBlID09PSAnQnVmZmVyJyAmJiBpc0FycmF5KHN1YmplY3QuZGF0YSkpXG4gICAgICBzdWJqZWN0ID0gc3ViamVjdC5kYXRhXG4gICAgbGVuZ3RoID0gK3N1YmplY3QubGVuZ3RoID4gMCA/IE1hdGguZmxvb3IoK3N1YmplY3QubGVuZ3RoKSA6IDBcbiAgfSBlbHNlXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbXVzdCBzdGFydCB3aXRoIG51bWJlciwgYnVmZmVyLCBhcnJheSBvciBzdHJpbmcnKVxuXG4gIGlmICh0aGlzLmxlbmd0aCA+IGtNYXhMZW5ndGgpXG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAnc2l6ZTogMHgnICsga01heExlbmd0aC50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcblxuICB2YXIgYnVmXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIC8vIFByZWZlcnJlZDogUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICBidWYgPSBCdWZmZXIuX2F1Z21lbnQobmV3IFVpbnQ4QXJyYXkobGVuZ3RoKSlcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIFRISVMgaW5zdGFuY2Ugb2YgQnVmZmVyIChjcmVhdGVkIGJ5IGBuZXdgKVxuICAgIGJ1ZiA9IHRoaXNcbiAgICBidWYubGVuZ3RoID0gbGVuZ3RoXG4gICAgYnVmLl9pc0J1ZmZlciA9IHRydWVcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiB0eXBlb2Ygc3ViamVjdC5ieXRlTGVuZ3RoID09PSAnbnVtYmVyJykge1xuICAgIC8vIFNwZWVkIG9wdGltaXphdGlvbiAtLSB1c2Ugc2V0IGlmIHdlJ3JlIGNvcHlpbmcgZnJvbSBhIHR5cGVkIGFycmF5XG4gICAgYnVmLl9zZXQoc3ViamVjdClcbiAgfSBlbHNlIGlmIChpc0FycmF5aXNoKHN1YmplY3QpKSB7XG4gICAgLy8gVHJlYXQgYXJyYXktaXNoIG9iamVjdHMgYXMgYSBieXRlIGFycmF5XG4gICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihzdWJqZWN0KSkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICBidWZbaV0gPSBzdWJqZWN0LnJlYWRVSW50OChpKVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgIGJ1ZltpXSA9ICgoc3ViamVjdFtpXSAlIDI1NikgKyAyNTYpICUgMjU2XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgYnVmLndyaXRlKHN1YmplY3QsIDAsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJiAhbm9aZXJvKSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBidWZbaV0gPSAwXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ1ZlxufVxuXG5CdWZmZXIuaXNCdWZmZXIgPSBmdW5jdGlvbiAoYikge1xuICByZXR1cm4gISEoYiAhPSBudWxsICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuY29tcGFyZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG5cbiAgdmFyIHggPSBhLmxlbmd0aFxuICB2YXIgeSA9IGIubGVuZ3RoXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbiAmJiBhW2ldID09PSBiW2ldOyBpKyspIHt9XG4gIGlmIChpICE9PSBsZW4pIHtcbiAgICB4ID0gYVtpXVxuICAgIHkgPSBiW2ldXG4gIH1cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAncmF3JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIChsaXN0LCB0b3RhbExlbmd0aCkge1xuICBpZiAoIWlzQXJyYXkobGlzdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1VzYWdlOiBCdWZmZXIuY29uY2F0KGxpc3RbLCBsZW5ndGhdKScpXG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIoMClcbiAgfSBlbHNlIGlmIChsaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBsaXN0WzBdXG4gIH1cblxuICB2YXIgaVxuICBpZiAodG90YWxMZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIHRvdGFsTGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b3RhbExlbmd0aCArPSBsaXN0W2ldLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHZhciBidWYgPSBuZXcgQnVmZmVyKHRvdGFsTGVuZ3RoKVxuICB2YXIgcG9zID0gMFxuICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIGl0ZW0uY29weShidWYsIHBvcylcbiAgICBwb3MgKz0gaXRlbS5sZW5ndGhcbiAgfVxuICByZXR1cm4gYnVmXG59XG5cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gZnVuY3Rpb24gKHN0ciwgZW5jb2RpbmcpIHtcbiAgdmFyIHJldFxuICBzdHIgPSBzdHIgKyAnJ1xuICBzd2l0Y2ggKGVuY29kaW5nIHx8ICd1dGY4Jykge1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ3Jhdyc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXQgPSBzdHIubGVuZ3RoICogMlxuICAgICAgYnJlYWtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCA+Pj4gMVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSB1dGY4VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgcmV0ID0gYmFzZTY0VG9CeXRlcyhzdHIpLmxlbmd0aFxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aFxuICB9XG4gIHJldHVybiByZXRcbn1cblxuLy8gcHJlLXNldCBmb3IgdmFsdWVzIHRoYXQgbWF5IGV4aXN0IGluIHRoZSBmdXR1cmVcbkJ1ZmZlci5wcm90b3R5cGUubGVuZ3RoID0gdW5kZWZpbmVkXG5CdWZmZXIucHJvdG90eXBlLnBhcmVudCA9IHVuZGVmaW5lZFxuXG4vLyB0b1N0cmluZyhlbmNvZGluZywgc3RhcnQ9MCwgZW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPT09IEluZmluaXR5ID8gdGhpcy5sZW5ndGggOiBlbmQgPj4+IDBcblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAoZW5kIDw9IHN0YXJ0KSByZXR1cm4gJydcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBiaW5hcnlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHV0ZjE2bGVTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpXG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIChiKSB7XG4gIGlmKCFCdWZmZXIuaXNCdWZmZXIoYikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RyID0gJydcbiAgdmFyIG1heCA9IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVNcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgIHN0ciA9IHRoaXMudG9TdHJpbmcoJ2hleCcsIDAsIG1heCkubWF0Y2goLy57Mn0vZykuam9pbignICcpXG4gICAgaWYgKHRoaXMubGVuZ3RoID4gbWF4KVxuICAgICAgc3RyICs9ICcgLi4uICdcbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKVxufVxuXG4vLyBgZ2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuZ2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy5yZWFkVUludDgob2Zmc2V0KVxufVxuXG4vLyBgc2V0YCB3aWxsIGJlIHJlbW92ZWQgaW4gTm9kZSAwLjEzK1xuQnVmZmVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodiwgb2Zmc2V0KSB7XG4gIGNvbnNvbGUubG9nKCcuc2V0KCkgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHVzaW5nIGFycmF5IGluZGV4ZXMgaW5zdGVhZC4nKVxuICByZXR1cm4gdGhpcy53cml0ZVVJbnQ4KHYsIG9mZnNldClcbn1cblxuZnVuY3Rpb24gaGV4V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICBvZmZzZXQgPSBOdW1iZXIob2Zmc2V0KSB8fCAwXG4gIHZhciByZW1haW5pbmcgPSBidWYubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cblxuICAvLyBtdXN0IGJlIGFuIGV2ZW4gbnVtYmVyIG9mIGRpZ2l0c1xuICB2YXIgc3RyTGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAoc3RyTGVuICUgMiAhPT0gMCkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYnl0ZSA9IHBhcnNlSW50KHN0cmluZy5zdWJzdHIoaSAqIDIsIDIpLCAxNilcbiAgICBpZiAoaXNOYU4oYnl0ZSkpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBoZXggc3RyaW5nJylcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSBieXRlXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJzV3JpdHRlblxufVxuXG5mdW5jdGlvbiBhc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IGJsaXRCdWZmZXIoYXNjaWlUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gYmluYXJ5V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgsIDIpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZykge1xuICAvLyBTdXBwb3J0IGJvdGggKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKVxuICAvLyBhbmQgdGhlIGxlZ2FjeSAoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpXG4gIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgaWYgKCFpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICB9IGVsc2UgeyAgLy8gbGVnYWN5XG4gICAgdmFyIHN3YXAgPSBlbmNvZGluZ1xuICAgIGVuY29kaW5nID0gb2Zmc2V0XG4gICAgb2Zmc2V0ID0gbGVuZ3RoXG4gICAgbGVuZ3RoID0gc3dhcFxuICB9XG5cbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuICBlbmNvZGluZyA9IFN0cmluZyhlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKClcblxuICB2YXIgcmV0XG4gIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIHJldCA9IGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgIHJldCA9IGJpbmFyeVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICByZXQgPSBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gdXRmMTZsZVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gIH1cbiAgcmV0dXJuIHJldFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnQnVmZmVyJyxcbiAgICBkYXRhOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLl9hcnIgfHwgdGhpcywgMClcbiAgfVxufVxuXG5mdW5jdGlvbiBiYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXRmOFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJlcyA9ICcnXG4gIHZhciB0bXAgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBpZiAoYnVmW2ldIDw9IDB4N0YpIHtcbiAgICAgIHJlcyArPSBkZWNvZGVVdGY4Q2hhcih0bXApICsgU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pXG4gICAgICB0bXAgPSAnJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0bXAgKz0gJyUnICsgYnVmW2ldLnRvU3RyaW5nKDE2KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXMgKyBkZWNvZGVVdGY4Q2hhcih0bXApXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gYmluYXJ5U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICByZXR1cm4gYXNjaWlTbGljZShidWYsIHN0YXJ0LCBlbmQpXG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlbjtcbiAgICBpZiAoc3RhcnQgPCAwKVxuICAgICAgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApXG4gICAgICBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpXG4gICAgZW5kID0gc3RhcnRcblxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gQnVmZmVyLl9hdWdtZW50KHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZCkpXG4gIH0gZWxzZSB7XG4gICAgdmFyIHNsaWNlTGVuID0gZW5kIC0gc3RhcnRcbiAgICB2YXIgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkLCB0cnVlKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47IGkrKykge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICAgIHJldHVybiBuZXdCdWZcbiAgfVxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMClcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb2Zmc2V0IGlzIG5vdCB1aW50JylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGxlbmd0aClcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQ4ID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDgpIHwgdGhpc1tvZmZzZXQgKyAxXVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKVxuICAgIHJldHVybiAodGhpc1tvZmZzZXRdKVxuICByZXR1cm4gKCgweGZmIC0gdGhpc1tvZmZzZXRdICsgMSkgKiAtMSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDNdIDw8IDI0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlTEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignYnVmZmVyIG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbHVlIGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignaW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4ZmYsIDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHZhbHVlID0gTWF0aC5mbG9vcih2YWx1ZSlcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuZnVuY3Rpb24gb2JqZWN0V3JpdGVVSW50MTYgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuKSB7XG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgMik7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSB2YWx1ZVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCA0KTsgaSA8IGo7IGkrKykge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCA+Pj4gMFxuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gdmFsdWVcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSB2YWx1ZVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gdmFsdWVcbiAgfSBlbHNlIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgPj4+IDBcbiAgaWYgKCFub0Fzc2VydClcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gdmFsdWVcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Ugb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0ID4+PiAwXG4gIGlmICghbm9Bc3NlcnQpXG4gICAgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9IHZhbHVlXG4gIH0gZWxzZSBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgVHlwZUVycm9yKCd2YWx1ZSBpcyBvdXQgb2YgYm91bmRzJylcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBUeXBlRXJyb3IoJ2luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDQsIDMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgsIC0zLjQwMjgyMzQ2NjM4NTI4ODZlKzM4KVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdEJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KVxuICAgIGNoZWNrSUVFRTc1NChidWYsIHZhbHVlLCBvZmZzZXQsIDgsIDEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4LCAtMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgpXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gY29weSh0YXJnZXRCdWZmZXIsIHRhcmdldFN0YXJ0PTAsIHNvdXJjZVN0YXJ0PTAsIHNvdXJjZUVuZD1idWZmZXIubGVuZ3RoKVxuQnVmZmVyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKHRhcmdldCwgdGFyZ2V0X3N0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIHZhciBzb3VyY2UgPSB0aGlzXG5cbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKCF0YXJnZXRfc3RhcnQpIHRhcmdldF9zdGFydCA9IDBcblxuICAvLyBDb3B5IDAgYnl0ZXM7IHdlJ3JlIGRvbmVcbiAgaWYgKGVuZCA9PT0gc3RhcnQpIHJldHVyblxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCBzb3VyY2UubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmIChlbmQgPCBzdGFydCkgdGhyb3cgbmV3IFR5cGVFcnJvcignc291cmNlRW5kIDwgc291cmNlU3RhcnQnKVxuICBpZiAodGFyZ2V0X3N0YXJ0IDwgMCB8fCB0YXJnZXRfc3RhcnQgPj0gdGFyZ2V0Lmxlbmd0aClcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSBzb3VyY2UubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDAgfHwgZW5kID4gc291cmNlLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignc291cmNlRW5kIG91dCBvZiBib3VuZHMnKVxuXG4gIC8vIEFyZSB3ZSBvb2I/XG4gIGlmIChlbmQgPiB0aGlzLmxlbmd0aClcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldF9zdGFydCA8IGVuZCAtIHN0YXJ0KVxuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgKyBzdGFydFxuXG4gIHZhciBsZW4gPSBlbmQgLSBzdGFydFxuXG4gIGlmIChsZW4gPCAxMDAwIHx8ICFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0X3N0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQuX3NldCh0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksIHRhcmdldF9zdGFydClcbiAgfVxufVxuXG4vLyBmaWxsKHZhbHVlLCBzdGFydD0wLCBlbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uICh2YWx1ZSwgc3RhcnQsIGVuZCkge1xuICBpZiAoIXZhbHVlKSB2YWx1ZSA9IDBcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kKSBlbmQgPSB0aGlzLmxlbmd0aFxuXG4gIGlmIChlbmQgPCBzdGFydCkgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5kIDwgc3RhcnQnKVxuXG4gIC8vIEZpbGwgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuXG4gIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFR5cGVFcnJvcignc3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChlbmQgPCAwIHx8IGVuZCA+IHRoaXMubGVuZ3RoKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdlbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgICB0aGlzW2ldID0gdmFsdWVcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGJ5dGVzID0gdXRmOFRvQnl0ZXModmFsdWUudG9TdHJpbmcoKSlcbiAgICB2YXIgbGVuID0gYnl0ZXMubGVuZ3RoXG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xuICAgICAgdGhpc1tpXSA9IGJ5dGVzW2kgJSBsZW5dXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBBcnJheUJ1ZmZlcmAgd2l0aCB0aGUgKmNvcGllZCogbWVtb3J5IG9mIHRoZSBidWZmZXIgaW5zdGFuY2UuXG4gKiBBZGRlZCBpbiBOb2RlIDAuMTIuIE9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydCBBcnJheUJ1ZmZlci5cbiAqL1xuQnVmZmVyLnByb3RvdHlwZS50b0FycmF5QnVmZmVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgICByZXR1cm4gKG5ldyBCdWZmZXIodGhpcykpLmJ1ZmZlclxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYnVmID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5sZW5ndGgpXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYnVmLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGJ1ZltpXSA9IHRoaXNbaV1cbiAgICAgIH1cbiAgICAgIHJldHVybiBidWYuYnVmZmVyXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0J1ZmZlci50b0FycmF5QnVmZmVyIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyJylcbiAgfVxufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBCUCA9IEJ1ZmZlci5wcm90b3R5cGVcblxuLyoqXG4gKiBBdWdtZW50IGEgVWludDhBcnJheSAqaW5zdGFuY2UqIChub3QgdGhlIFVpbnQ4QXJyYXkgY2xhc3MhKSB3aXRoIEJ1ZmZlciBtZXRob2RzXG4gKi9cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLmNvbnN0cnVjdG9yID0gQnVmZmVyXG4gIGFyci5faXNCdWZmZXIgPSB0cnVlXG5cbiAgLy8gc2F2ZSByZWZlcmVuY2UgdG8gb3JpZ2luYWwgVWludDhBcnJheSBnZXQvc2V0IG1ldGhvZHMgYmVmb3JlIG92ZXJ3cml0aW5nXG4gIGFyci5fZ2V0ID0gYXJyLmdldFxuICBhcnIuX3NldCA9IGFyci5zZXRcblxuICAvLyBkZXByZWNhdGVkLCB3aWxsIGJlIHJlbW92ZWQgaW4gbm9kZSAwLjEzK1xuICBhcnIuZ2V0ID0gQlAuZ2V0XG4gIGFyci5zZXQgPSBCUC5zZXRcblxuICBhcnIud3JpdGUgPSBCUC53cml0ZVxuICBhcnIudG9TdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9Mb2NhbGVTdHJpbmcgPSBCUC50b1N0cmluZ1xuICBhcnIudG9KU09OID0gQlAudG9KU09OXG4gIGFyci5lcXVhbHMgPSBCUC5lcXVhbHNcbiAgYXJyLmNvbXBhcmUgPSBCUC5jb21wYXJlXG4gIGFyci5jb3B5ID0gQlAuY29weVxuICBhcnIuc2xpY2UgPSBCUC5zbGljZVxuICBhcnIucmVhZFVJbnQ4ID0gQlAucmVhZFVJbnQ4XG4gIGFyci5yZWFkVUludDE2TEUgPSBCUC5yZWFkVUludDE2TEVcbiAgYXJyLnJlYWRVSW50MTZCRSA9IEJQLnJlYWRVSW50MTZCRVxuICBhcnIucmVhZFVJbnQzMkxFID0gQlAucmVhZFVJbnQzMkxFXG4gIGFyci5yZWFkVUludDMyQkUgPSBCUC5yZWFkVUludDMyQkVcbiAgYXJyLnJlYWRJbnQ4ID0gQlAucmVhZEludDhcbiAgYXJyLnJlYWRJbnQxNkxFID0gQlAucmVhZEludDE2TEVcbiAgYXJyLnJlYWRJbnQxNkJFID0gQlAucmVhZEludDE2QkVcbiAgYXJyLnJlYWRJbnQzMkxFID0gQlAucmVhZEludDMyTEVcbiAgYXJyLnJlYWRJbnQzMkJFID0gQlAucmVhZEludDMyQkVcbiAgYXJyLnJlYWRGbG9hdExFID0gQlAucmVhZEZsb2F0TEVcbiAgYXJyLnJlYWRGbG9hdEJFID0gQlAucmVhZEZsb2F0QkVcbiAgYXJyLnJlYWREb3VibGVMRSA9IEJQLnJlYWREb3VibGVMRVxuICBhcnIucmVhZERvdWJsZUJFID0gQlAucmVhZERvdWJsZUJFXG4gIGFyci53cml0ZVVJbnQ4ID0gQlAud3JpdGVVSW50OFxuICBhcnIud3JpdGVVSW50MTZMRSA9IEJQLndyaXRlVUludDE2TEVcbiAgYXJyLndyaXRlVUludDE2QkUgPSBCUC53cml0ZVVJbnQxNkJFXG4gIGFyci53cml0ZVVJbnQzMkxFID0gQlAud3JpdGVVSW50MzJMRVxuICBhcnIud3JpdGVVSW50MzJCRSA9IEJQLndyaXRlVUludDMyQkVcbiAgYXJyLndyaXRlSW50OCA9IEJQLndyaXRlSW50OFxuICBhcnIud3JpdGVJbnQxNkxFID0gQlAud3JpdGVJbnQxNkxFXG4gIGFyci53cml0ZUludDE2QkUgPSBCUC53cml0ZUludDE2QkVcbiAgYXJyLndyaXRlSW50MzJMRSA9IEJQLndyaXRlSW50MzJMRVxuICBhcnIud3JpdGVJbnQzMkJFID0gQlAud3JpdGVJbnQzMkJFXG4gIGFyci53cml0ZUZsb2F0TEUgPSBCUC53cml0ZUZsb2F0TEVcbiAgYXJyLndyaXRlRmxvYXRCRSA9IEJQLndyaXRlRmxvYXRCRVxuICBhcnIud3JpdGVEb3VibGVMRSA9IEJQLndyaXRlRG91YmxlTEVcbiAgYXJyLndyaXRlRG91YmxlQkUgPSBCUC53cml0ZURvdWJsZUJFXG4gIGFyci5maWxsID0gQlAuZmlsbFxuICBhcnIuaW5zcGVjdCA9IEJQLmluc3BlY3RcbiAgYXJyLnRvQXJyYXlCdWZmZXIgPSBCUC50b0FycmF5QnVmZmVyXG5cbiAgcmV0dXJuIGFyclxufVxuXG52YXIgSU5WQUxJRF9CQVNFNjRfUkUgPSAvW14rXFwvMC05QS16XS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0cmluZ3RyaW0oc3RyKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gaXNBcnJheWlzaCAoc3ViamVjdCkge1xuICByZXR1cm4gaXNBcnJheShzdWJqZWN0KSB8fCBCdWZmZXIuaXNCdWZmZXIoc3ViamVjdCkgfHxcbiAgICAgIHN1YmplY3QgJiYgdHlwZW9mIHN1YmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICB0eXBlb2Ygc3ViamVjdC5sZW5ndGggPT09ICdudW1iZXInXG59XG5cbmZ1bmN0aW9uIHRvSGV4IChuKSB7XG4gIGlmIChuIDwgMTYpIHJldHVybiAnMCcgKyBuLnRvU3RyaW5nKDE2KVxuICByZXR1cm4gbi50b1N0cmluZygxNilcbn1cblxuZnVuY3Rpb24gdXRmOFRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYiA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaWYgKGIgPD0gMHg3Rikge1xuICAgICAgYnl0ZUFycmF5LnB1c2goYilcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN0YXJ0ID0gaVxuICAgICAgaWYgKGIgPj0gMHhEODAwICYmIGIgPD0gMHhERkZGKSBpKytcbiAgICAgIHZhciBoID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0ci5zbGljZShzdGFydCwgaSsxKSkuc3Vic3RyKDEpLnNwbGl0KCclJylcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgaC5sZW5ndGg7IGorKykge1xuICAgICAgICBieXRlQXJyYXkucHVzaChwYXJzZUludChoW2pdLCAxNikpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYywgaGksIGxvXG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KHN0cilcbn1cblxuZnVuY3Rpb24gYmxpdEJ1ZmZlciAoc3JjLCBkc3QsIG9mZnNldCwgbGVuZ3RoLCB1bml0U2l6ZSkge1xuICBpZiAodW5pdFNpemUpIGxlbmd0aCAtPSBsZW5ndGggJSB1bml0U2l6ZTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSlcbiAgICAgIGJyZWFrXG4gICAgZHN0W2kgKyBvZmZzZXRdID0gc3JjW2ldXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gZGVjb2RlVXRmOENoYXIgKHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgweEZGRkQpIC8vIFVURiA4IGludmFsaWQgY2hhclxuICB9XG59XG4iLCIoZnVuY3Rpb24gKEJ1ZmZlcil7XG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gTk9URTogVGhlc2UgdHlwZSBjaGVja2luZyBmdW5jdGlvbnMgaW50ZW50aW9uYWxseSBkb24ndCB1c2UgYGluc3RhbmNlb2ZgXG4vLyBiZWNhdXNlIGl0IGlzIGZyYWdpbGUgYW5kIGNhbiBiZSBlYXNpbHkgZmFrZWQgd2l0aCBgT2JqZWN0LmNyZWF0ZSgpYC5cblxuZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhcmcpO1xuICB9XG4gIHJldHVybiBvYmplY3RUb1N0cmluZyhhcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuZXhwb3J0cy5pc0FycmF5ID0gaXNBcnJheTtcblxuZnVuY3Rpb24gaXNCb29sZWFuKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nO1xufVxuZXhwb3J0cy5pc0Jvb2xlYW4gPSBpc0Jvb2xlYW47XG5cbmZ1bmN0aW9uIGlzTnVsbChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsID0gaXNOdWxsO1xuXG5mdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGxPclVuZGVmaW5lZCA9IGlzTnVsbE9yVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0cy5pc1N0cmluZyA9IGlzU3RyaW5nO1xuXG5mdW5jdGlvbiBpc1N5bWJvbChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnO1xufVxuZXhwb3J0cy5pc1N5bWJvbCA9IGlzU3ltYm9sO1xuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gdm9pZCAwO1xufVxuZXhwb3J0cy5pc1VuZGVmaW5lZCA9IGlzVW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBpc1JlZ0V4cChyZSkge1xuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gKG9iamVjdFRvU3RyaW5nKGUpID09PSAnW29iamVjdCBFcnJvcl0nIHx8IGUgaW5zdGFuY2VvZiBFcnJvcik7XG59XG5leHBvcnRzLmlzRXJyb3IgPSBpc0Vycm9yO1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cbmV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCcgfHwgIC8vIEVTNiBzeW1ib2xcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICd1bmRlZmluZWQnO1xufVxuZXhwb3J0cy5pc1ByaW1pdGl2ZSA9IGlzUHJpbWl0aXZlO1xuXG5leHBvcnRzLmlzQnVmZmVyID0gQnVmZmVyLmlzQnVmZmVyO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cbn0pLmNhbGwodGhpcyx7XCJpc0J1ZmZlclwiOnJlcXVpcmUoXCIuLi8uLi9pcy1idWZmZXIvaW5kZXguanNcIil9KVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OWpiM0psTFhWMGFXd3RhWE12YkdsaUwzVjBhV3d1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVNJc0ltWnBiR1VpT2lKblpXNWxjbUYwWldRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeThnUTI5d2VYSnBaMmgwSUVwdmVXVnVkQ3dnU1c1akxpQmhibVFnYjNSb1pYSWdUbTlrWlNCamIyNTBjbWxpZFhSdmNuTXVYRzR2TDF4dUx5OGdVR1Z5YldsemMybHZiaUJwY3lCb1pYSmxZbmtnWjNKaGJuUmxaQ3dnWm5KbFpTQnZaaUJqYUdGeVoyVXNJSFJ2SUdGdWVTQndaWEp6YjI0Z2IySjBZV2x1YVc1bklHRmNiaTh2SUdOdmNIa2diMllnZEdocGN5QnpiMlowZDJGeVpTQmhibVFnWVhOemIyTnBZWFJsWkNCa2IyTjFiV1Z1ZEdGMGFXOXVJR1pwYkdWeklDaDBhR1ZjYmk4dklGd2lVMjltZEhkaGNtVmNJaWtzSUhSdklHUmxZV3dnYVc0Z2RHaGxJRk52Wm5SM1lYSmxJSGRwZEdodmRYUWdjbVZ6ZEhKcFkzUnBiMjRzSUdsdVkyeDFaR2x1WjF4dUx5OGdkMmwwYUc5MWRDQnNhVzFwZEdGMGFXOXVJSFJvWlNCeWFXZG9kSE1nZEc4Z2RYTmxMQ0JqYjNCNUxDQnRiMlJwWm5rc0lHMWxjbWRsTENCd2RXSnNhWE5vTEZ4dUx5OGdaR2x6ZEhKcFluVjBaU3dnYzNWaWJHbGpaVzV6WlN3Z1lXNWtMMjl5SUhObGJHd2dZMjl3YVdWeklHOW1JSFJvWlNCVGIyWjBkMkZ5WlN3Z1lXNWtJSFJ2SUhCbGNtMXBkRnh1THk4Z2NHVnljMjl1Y3lCMGJ5QjNhRzl0SUhSb1pTQlRiMlowZDJGeVpTQnBjeUJtZFhKdWFYTm9aV1FnZEc4Z1pHOGdjMjhzSUhOMVltcGxZM1FnZEc4Z2RHaGxYRzR2THlCbWIyeHNiM2RwYm1jZ1kyOXVaR2wwYVc5dWN6cGNiaTh2WEc0dkx5QlVhR1VnWVdKdmRtVWdZMjl3ZVhKcFoyaDBJRzV2ZEdsalpTQmhibVFnZEdocGN5QndaWEp0YVhOemFXOXVJRzV2ZEdsalpTQnphR0ZzYkNCaVpTQnBibU5zZFdSbFpGeHVMeThnYVc0Z1lXeHNJR052Y0dsbGN5QnZjaUJ6ZFdKemRHRnVkR2xoYkNCd2IzSjBhVzl1Y3lCdlppQjBhR1VnVTI5bWRIZGhjbVV1WEc0dkwxeHVMeThnVkVoRklGTlBSbFJYUVZKRklFbFRJRkJTVDFaSlJFVkVJRndpUVZNZ1NWTmNJaXdnVjBsVVNFOVZWQ0JYUVZKU1FVNVVXU0JQUmlCQlRsa2dTMGxPUkN3Z1JWaFFVa1ZUVTF4dUx5OGdUMUlnU1UxUVRFbEZSQ3dnU1U1RFRGVkVTVTVISUVKVlZDQk9UMVFnVEVsTlNWUkZSQ0JVVHlCVVNFVWdWMEZTVWtGT1ZFbEZVeUJQUmx4dUx5OGdUVVZTUTBoQlRsUkJRa2xNU1ZSWkxDQkdTVlJPUlZOVElFWlBVaUJCSUZCQlVsUkpRMVZNUVZJZ1VGVlNVRTlUUlNCQlRrUWdUazlPU1U1R1VrbE9SMFZOUlU1VUxpQkpUbHh1THk4Z1RrOGdSVlpGVGxRZ1UwaEJURXdnVkVoRklFRlZWRWhQVWxNZ1QxSWdRMDlRV1ZKSlIwaFVJRWhQVEVSRlVsTWdRa1VnVEVsQlFreEZJRVpQVWlCQlRsa2dRMHhCU1Uwc1hHNHZMeUJFUVUxQlIwVlRJRTlTSUU5VVNFVlNJRXhKUVVKSlRFbFVXU3dnVjBoRlZFaEZVaUJKVGlCQlRpQkJRMVJKVDA0Z1QwWWdRMDlPVkZKQlExUXNJRlJQVWxRZ1QxSmNiaTh2SUU5VVNFVlNWMGxUUlN3Z1FWSkpVMGxPUnlCR1VrOU5MQ0JQVlZRZ1QwWWdUMUlnU1U0Z1EwOU9Ua1ZEVkVsUFRpQlhTVlJJSUZSSVJTQlRUMFpVVjBGU1JTQlBVaUJVU0VWY2JpOHZJRlZUUlNCUFVpQlBWRWhGVWlCRVJVRk1TVTVIVXlCSlRpQlVTRVVnVTA5R1ZGZEJVa1V1WEc1Y2JpOHZJRTVQVkVVNklGUm9aWE5sSUhSNWNHVWdZMmhsWTJ0cGJtY2dablZ1WTNScGIyNXpJR2x1ZEdWdWRHbHZibUZzYkhrZ1pHOXVKM1FnZFhObElHQnBibk4wWVc1alpXOW1ZRnh1THk4Z1ltVmpZWFZ6WlNCcGRDQnBjeUJtY21GbmFXeGxJR0Z1WkNCallXNGdZbVVnWldGemFXeDVJR1poYTJWa0lIZHBkR2dnWUU5aWFtVmpkQzVqY21WaGRHVW9LV0F1WEc1Y2JtWjFibU4wYVc5dUlHbHpRWEp5WVhrb1lYSm5LU0I3WEc0Z0lHbG1JQ2hCY25KaGVTNXBjMEZ5Y21GNUtTQjdYRzRnSUNBZ2NtVjBkWEp1SUVGeWNtRjVMbWx6UVhKeVlYa29ZWEpuS1R0Y2JpQWdmVnh1SUNCeVpYUjFjbTRnYjJKcVpXTjBWRzlUZEhKcGJtY29ZWEpuS1NBOVBUMGdKMXR2WW1wbFkzUWdRWEp5WVhsZEp6dGNibjFjYm1WNGNHOXlkSE11YVhOQmNuSmhlU0E5SUdselFYSnlZWGs3WEc1Y2JtWjFibU4wYVc5dUlHbHpRbTl2YkdWaGJpaGhjbWNwSUh0Y2JpQWdjbVYwZFhKdUlIUjVjR1Z2WmlCaGNtY2dQVDA5SUNkaWIyOXNaV0Z1Snp0Y2JuMWNibVY0Y0c5eWRITXVhWE5DYjI5c1pXRnVJRDBnYVhOQ2IyOXNaV0Z1TzF4dVhHNW1kVzVqZEdsdmJpQnBjMDUxYkd3b1lYSm5LU0I3WEc0Z0lISmxkSFZ5YmlCaGNtY2dQVDA5SUc1MWJHdzdYRzU5WEc1bGVIQnZjblJ6TG1selRuVnNiQ0E5SUdselRuVnNiRHRjYmx4dVpuVnVZM1JwYjI0Z2FYTk9kV3hzVDNKVmJtUmxabWx1WldRb1lYSm5LU0I3WEc0Z0lISmxkSFZ5YmlCaGNtY2dQVDBnYm5Wc2JEdGNibjFjYm1WNGNHOXlkSE11YVhOT2RXeHNUM0pWYm1SbFptbHVaV1FnUFNCcGMwNTFiR3hQY2xWdVpHVm1hVzVsWkR0Y2JseHVablZ1WTNScGIyNGdhWE5PZFcxaVpYSW9ZWEpuS1NCN1hHNGdJSEpsZEhWeWJpQjBlWEJsYjJZZ1lYSm5JRDA5UFNBbmJuVnRZbVZ5Snp0Y2JuMWNibVY0Y0c5eWRITXVhWE5PZFcxaVpYSWdQU0JwYzA1MWJXSmxjanRjYmx4dVpuVnVZM1JwYjI0Z2FYTlRkSEpwYm1jb1lYSm5LU0I3WEc0Z0lISmxkSFZ5YmlCMGVYQmxiMllnWVhKbklEMDlQU0FuYzNSeWFXNW5KenRjYm4xY2JtVjRjRzl5ZEhNdWFYTlRkSEpwYm1jZ1BTQnBjMU4wY21sdVp6dGNibHh1Wm5WdVkzUnBiMjRnYVhOVGVXMWliMndvWVhKbktTQjdYRzRnSUhKbGRIVnliaUIwZVhCbGIyWWdZWEpuSUQwOVBTQW5jM2x0WW05c0p6dGNibjFjYm1WNGNHOXlkSE11YVhOVGVXMWliMndnUFNCcGMxTjViV0p2YkR0Y2JseHVablZ1WTNScGIyNGdhWE5WYm1SbFptbHVaV1FvWVhKbktTQjdYRzRnSUhKbGRIVnliaUJoY21jZ1BUMDlJSFp2YVdRZ01EdGNibjFjYm1WNGNHOXlkSE11YVhOVmJtUmxabWx1WldRZ1BTQnBjMVZ1WkdWbWFXNWxaRHRjYmx4dVpuVnVZM1JwYjI0Z2FYTlNaV2RGZUhBb2NtVXBJSHRjYmlBZ2NtVjBkWEp1SUc5aWFtVmpkRlJ2VTNSeWFXNW5LSEpsS1NBOVBUMGdKMXR2WW1wbFkzUWdVbVZuUlhod1hTYzdYRzU5WEc1bGVIQnZjblJ6TG1selVtVm5SWGh3SUQwZ2FYTlNaV2RGZUhBN1hHNWNibVoxYm1OMGFXOXVJR2x6VDJKcVpXTjBLR0Z5WnlrZ2UxeHVJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlHRnlaeUE5UFQwZ0oyOWlhbVZqZENjZ0ppWWdZWEpuSUNFOVBTQnVkV3hzTzF4dWZWeHVaWGh3YjNKMGN5NXBjMDlpYW1WamRDQTlJR2x6VDJKcVpXTjBPMXh1WEc1bWRXNWpkR2x2YmlCcGMwUmhkR1VvWkNrZ2UxeHVJQ0J5WlhSMWNtNGdiMkpxWldOMFZHOVRkSEpwYm1jb1pDa2dQVDA5SUNkYmIySnFaV04wSUVSaGRHVmRKenRjYm4xY2JtVjRjRzl5ZEhNdWFYTkVZWFJsSUQwZ2FYTkVZWFJsTzF4dVhHNW1kVzVqZEdsdmJpQnBjMFZ5Y205eUtHVXBJSHRjYmlBZ2NtVjBkWEp1SUNodlltcGxZM1JVYjFOMGNtbHVaeWhsS1NBOVBUMGdKMXR2WW1wbFkzUWdSWEp5YjNKZEp5QjhmQ0JsSUdsdWMzUmhibU5sYjJZZ1JYSnliM0lwTzF4dWZWeHVaWGh3YjNKMGN5NXBjMFZ5Y205eUlEMGdhWE5GY25KdmNqdGNibHh1Wm5WdVkzUnBiMjRnYVhOR2RXNWpkR2x2YmloaGNtY3BJSHRjYmlBZ2NtVjBkWEp1SUhSNWNHVnZaaUJoY21jZ1BUMDlJQ2RtZFc1amRHbHZiaWM3WEc1OVhHNWxlSEJ2Y25SekxtbHpSblZ1WTNScGIyNGdQU0JwYzBaMWJtTjBhVzl1TzF4dVhHNW1kVzVqZEdsdmJpQnBjMUJ5YVcxcGRHbDJaU2hoY21jcElIdGNiaUFnY21WMGRYSnVJR0Z5WnlBOVBUMGdiblZzYkNCOGZGeHVJQ0FnSUNBZ0lDQWdkSGx3Wlc5bUlHRnlaeUE5UFQwZ0oySnZiMnhsWVc0bklIeDhYRzRnSUNBZ0lDQWdJQ0IwZVhCbGIyWWdZWEpuSUQwOVBTQW5iblZ0WW1WeUp5QjhmRnh1SUNBZ0lDQWdJQ0FnZEhsd1pXOW1JR0Z5WnlBOVBUMGdKM04wY21sdVp5Y2dmSHhjYmlBZ0lDQWdJQ0FnSUhSNWNHVnZaaUJoY21jZ1BUMDlJQ2R6ZVcxaWIyd25JSHg4SUNBdkx5QkZVellnYzNsdFltOXNYRzRnSUNBZ0lDQWdJQ0IwZVhCbGIyWWdZWEpuSUQwOVBTQW5kVzVrWldacGJtVmtKenRjYm4xY2JtVjRjRzl5ZEhNdWFYTlFjbWx0YVhScGRtVWdQU0JwYzFCeWFXMXBkR2wyWlR0Y2JseHVaWGh3YjNKMGN5NXBjMEoxWm1abGNpQTlJRUoxWm1abGNpNXBjMEoxWm1abGNqdGNibHh1Wm5WdVkzUnBiMjRnYjJKcVpXTjBWRzlUZEhKcGJtY29ieWtnZTF4dUlDQnlaWFIxY200Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1MGIxTjBjbWx1Wnk1allXeHNLRzhwTzF4dWZWeHVJbDE5IiwiKGZ1bmN0aW9uIChwcm9jZXNzKXtcbi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2RlYnVnJyk7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZVxuICAgICAgICAgICAgICAgJiYgJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZS5zdG9yYWdlXG4gICAgICAgICAgICAgICAgICA/IGNocm9tZS5zdG9yYWdlLmxvY2FsXG4gICAgICAgICAgICAgICAgICA6IGxvY2Fsc3RvcmFnZSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcbiAgJ2xpZ2h0c2VhZ3JlZW4nLFxuICAnZm9yZXN0Z3JlZW4nLFxuICAnZ29sZGVucm9kJyxcbiAgJ2RvZGdlcmJsdWUnLFxuICAnZGFya29yY2hpZCcsXG4gICdjcmltc29uJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG4gIC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcbiAgLy8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2VcbiAgLy8gZXhwbGljaXRseVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93ICYmIHR5cGVvZiB3aW5kb3cucHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gaXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcbiAgLy8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcbiAgcmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50ICYmICdXZWJraXRBcHBlYXJhbmNlJyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUpIHx8XG4gICAgLy8gaXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cgJiYgd2luZG93LmNvbnNvbGUgJiYgKGNvbnNvbGUuZmlyZWJ1ZyB8fCAoY29uc29sZS5leGNlcHRpb24gJiYgY29uc29sZS50YWJsZSkpKSB8fFxuICAgIC8vIGlzIGZpcmVmb3ggPj0gdjMxP1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcbiAgICAvLyBkb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24odikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVyci5tZXNzYWdlO1xuICB9XG59O1xuXG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG4gIHZhciB1c2VDb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcblxuICBhcmdzWzBdID0gKHVzZUNvbG9ycyA/ICclYycgOiAnJylcbiAgICArIHRoaXMubmFtZXNwYWNlXG4gICAgKyAodXNlQ29sb3JzID8gJyAlYycgOiAnICcpXG4gICAgKyBhcmdzWzBdXG4gICAgKyAodXNlQ29sb3JzID8gJyVjICcgOiAnICcpXG4gICAgKyAnKycgKyBleHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cbiAgaWYgKCF1c2VDb2xvcnMpIHJldHVybjtcblxuICB2YXIgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG4gIGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpXG5cbiAgLy8gdGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcbiAgLy8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuICAvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxhc3RDID0gMDtcbiAgYXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgaWYgKCclJScgPT09IG1hdGNoKSByZXR1cm47XG4gICAgaW5kZXgrKztcbiAgICBpZiAoJyVjJyA9PT0gbWF0Y2gpIHtcbiAgICAgIC8vIHdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuICAgICAgLy8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcbiAgICAgIGxhc3RDID0gaW5kZXg7XG4gICAgfVxuICB9KTtcblxuICBhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5sb2coKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmxvZ2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gbG9nKCkge1xuICAvLyB0aGlzIGhhY2tlcnkgaXMgcmVxdWlyZWQgZm9yIElFOC85LCB3aGVyZVxuICAvLyB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbiBkb2Vzbid0IGhhdmUgJ2FwcGx5J1xuICByZXR1cm4gJ29iamVjdCcgPT09IHR5cGVvZiBjb25zb2xlXG4gICAgJiYgY29uc29sZS5sb2dcbiAgICAmJiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlLmxvZywgY29uc29sZSwgYXJndW1lbnRzKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG4gIHRyeSB7XG4gICAgaWYgKG51bGwgPT0gbmFtZXNwYWNlcykge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZyA9IG5hbWVzcGFjZXM7XG4gICAgfVxuICB9IGNhdGNoKGUpIHt9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgdmFyIHI7XG4gIHRyeSB7XG4gICAgciA9IGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZztcbiAgfSBjYXRjaChlKSB7fVxuXG4gIC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcbiAgaWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG4gICAgciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuICB9XG5cbiAgcmV0dXJuIHI7XG59XG5cbi8qKlxuICogRW5hYmxlIG5hbWVzcGFjZXMgbGlzdGVkIGluIGBsb2NhbFN0b3JhZ2UuZGVidWdgIGluaXRpYWxseS5cbiAqL1xuXG5leHBvcnRzLmVuYWJsZShsb2FkKCkpO1xuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgfSBjYXRjaCAoZSkge31cbn1cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoJ19wcm9jZXNzJykpXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5a1pXSjFaeTl6Y21NdlluSnZkM05sY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJJaXdpWm1sc1pTSTZJbWRsYm1WeVlYUmxaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktpcGNiaUFxSUZSb2FYTWdhWE1nZEdobElIZGxZaUJpY205M2MyVnlJR2x0Y0d4bGJXVnVkR0YwYVc5dUlHOW1JR0JrWldKMVp5Z3BZQzVjYmlBcVhHNGdLaUJGZUhCdmMyVWdZR1JsWW5WbktDbGdJR0Z6SUhSb1pTQnRiMlIxYkdVdVhHNGdLaTljYmx4dVpYaHdiM0owY3lBOUlHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ2NtVnhkV2x5WlNnbkxpOWtaV0oxWnljcE8xeHVaWGh3YjNKMGN5NXNiMmNnUFNCc2IyYzdYRzVsZUhCdmNuUnpMbVp2Y20xaGRFRnlaM01nUFNCbWIzSnRZWFJCY21kek8xeHVaWGh3YjNKMGN5NXpZWFpsSUQwZ2MyRjJaVHRjYm1WNGNHOXlkSE11Ykc5aFpDQTlJR3h2WVdRN1hHNWxlSEJ2Y25SekxuVnpaVU52Ykc5eWN5QTlJSFZ6WlVOdmJHOXljenRjYm1WNGNHOXlkSE11YzNSdmNtRm5aU0E5SUNkMWJtUmxabWx1WldRbklDRTlJSFI1Y0dWdlppQmphSEp2YldWY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNZbUlDZDFibVJsWm1sdVpXUW5JQ0U5SUhSNWNHVnZaaUJqYUhKdmJXVXVjM1J2Y21GblpWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQeUJqYUhKdmJXVXVjM1J2Y21GblpTNXNiMk5oYkZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ09pQnNiMk5oYkhOMGIzSmhaMlVvS1R0Y2JseHVMeW9xWEc0Z0tpQkRiMnh2Y25NdVhHNGdLaTljYmx4dVpYaHdiM0owY3k1amIyeHZjbk1nUFNCYlhHNGdJQ2RzYVdkb2RITmxZV2R5WldWdUp5eGNiaUFnSjJadmNtVnpkR2R5WldWdUp5eGNiaUFnSjJkdmJHUmxibkp2WkNjc1hHNGdJQ2RrYjJSblpYSmliSFZsSnl4Y2JpQWdKMlJoY210dmNtTm9hV1FuTEZ4dUlDQW5ZM0pwYlhOdmJpZGNibDA3WEc1Y2JpOHFLbHh1SUNvZ1EzVnljbVZ1ZEd4NUlHOXViSGtnVjJWaVMybDBMV0poYzJWa0lGZGxZaUJKYm5Od1pXTjBiM0p6TENCR2FYSmxabTk0SUQ0OUlIWXpNU3hjYmlBcUlHRnVaQ0IwYUdVZ1JtbHlaV0oxWnlCbGVIUmxibk5wYjI0Z0tHRnVlU0JHYVhKbFptOTRJSFpsY25OcGIyNHBJR0Z5WlNCcmJtOTNibHh1SUNvZ2RHOGdjM1Z3Y0c5eWRDQmNJaVZqWENJZ1ExTlRJR04xYzNSdmJXbDZZWFJwYjI1ekxseHVJQ3BjYmlBcUlGUlBSRTg2SUdGa1pDQmhJR0JzYjJOaGJGTjBiM0poWjJWZ0lIWmhjbWxoWW14bElIUnZJR1Y0Y0d4cFkybDBiSGtnWlc1aFlteGxMMlJwYzJGaWJHVWdZMjlzYjNKelhHNGdLaTljYmx4dVpuVnVZM1JwYjI0Z2RYTmxRMjlzYjNKektDa2dlMXh1SUNBdkx5Qk9Ram9nU1c0Z1lXNGdSV3hsWTNSeWIyNGdjSEpsYkc5aFpDQnpZM0pwY0hRc0lHUnZZM1Z0Wlc1MElIZHBiR3dnWW1VZ1pHVm1hVzVsWkNCaWRYUWdibTkwSUdaMWJHeDVYRzRnSUM4dklHbHVhWFJwWVd4cGVtVmtMaUJUYVc1alpTQjNaU0JyYm05M0lIZGxKM0psSUdsdUlFTm9jbTl0WlN3Z2QyVW5iR3dnYW5WemRDQmtaWFJsWTNRZ2RHaHBjeUJqWVhObFhHNGdJQzh2SUdWNGNHeHBZMmwwYkhsY2JpQWdhV1lnS0hSNWNHVnZaaUIzYVc1a2IzY2dJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JSGRwYm1SdmR5QW1KaUIwZVhCbGIyWWdkMmx1Wkc5M0xuQnliMk5sYzNNZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlIZHBibVJ2ZHk1d2NtOWpaWE56TG5SNWNHVWdQVDA5SUNkeVpXNWtaWEpsY2ljcElIdGNiaUFnSUNCeVpYUjFjbTRnZEhKMVpUdGNiaUFnZlZ4dVhHNGdJQzh2SUdseklIZGxZbXRwZEQ4Z2FIUjBjRG92TDNOMFlXTnJiM1psY21ac2IzY3VZMjl0TDJFdk1UWTBOVGsyTURZdk16YzJOemN6WEc0Z0lDOHZJR1J2WTNWdFpXNTBJR2x6SUhWdVpHVm1hVzVsWkNCcGJpQnlaV0ZqZEMxdVlYUnBkbVU2SUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5bVlXTmxZbTl2YXk5eVpXRmpkQzF1WVhScGRtVXZjSFZzYkM4eE5qTXlYRzRnSUhKbGRIVnliaUFvZEhsd1pXOW1JR1J2WTNWdFpXNTBJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUJrYjJOMWJXVnVkQ0FtSmlBblYyVmlhMmwwUVhCd1pXRnlZVzVqWlNjZ2FXNGdaRzlqZFcxbGJuUXVaRzlqZFcxbGJuUkZiR1Z0Wlc1MExuTjBlV3hsS1NCOGZGeHVJQ0FnSUM4dklHbHpJR1pwY21WaWRXYy9JR2gwZEhBNkx5OXpkR0ZqYTI5MlpYSm1iRzkzTG1OdmJTOWhMek01T0RFeU1DOHpOelkzTnpOY2JpQWdJQ0FvZEhsd1pXOW1JSGRwYm1SdmR5QWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdkMmx1Wkc5M0lDWW1JSGRwYm1SdmR5NWpiMjV6YjJ4bElDWW1JQ2hqYjI1emIyeGxMbVpwY21WaWRXY2dmSHdnS0dOdmJuTnZiR1V1WlhoalpYQjBhVzl1SUNZbUlHTnZibk52YkdVdWRHRmliR1VwS1NrZ2ZIeGNiaUFnSUNBdkx5QnBjeUJtYVhKbFptOTRJRDQ5SUhZek1UOWNiaUFnSUNBdkx5Qm9kSFJ3Y3pvdkwyUmxkbVZzYjNCbGNpNXRiM3BwYkd4aExtOXlaeTlsYmkxVlV5OWtiMk56TDFSdmIyeHpMMWRsWWw5RGIyNXpiMnhsSTFOMGVXeHBibWRmYldWemMyRm5aWE5jYmlBZ0lDQW9kSGx3Wlc5bUlHNWhkbWxuWVhSdmNpQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdibUYyYVdkaGRHOXlJQ1ltSUc1aGRtbG5ZWFJ2Y2k1MWMyVnlRV2RsYm5RZ0ppWWdibUYyYVdkaGRHOXlMblZ6WlhKQloyVnVkQzUwYjB4dmQyVnlRMkZ6WlNncExtMWhkR05vS0M5bWFYSmxabTk0WEZ3dktGeGNaQ3NwTHlrZ0ppWWdjR0Z5YzJWSmJuUW9VbVZuUlhod0xpUXhMQ0F4TUNrZ1BqMGdNekVwSUh4OFhHNGdJQ0FnTHk4Z1pHOTFZbXhsSUdOb1pXTnJJSGRsWW10cGRDQnBiaUIxYzJWeVFXZGxiblFnYW5WemRDQnBiaUJqWVhObElIZGxJR0Z5WlNCcGJpQmhJSGR2Y210bGNseHVJQ0FnSUNoMGVYQmxiMllnYm1GMmFXZGhkRzl5SUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmlCdVlYWnBaMkYwYjNJZ0ppWWdibUYyYVdkaGRHOXlMblZ6WlhKQloyVnVkQ0FtSmlCdVlYWnBaMkYwYjNJdWRYTmxja0ZuWlc1MExuUnZURzkzWlhKRFlYTmxLQ2t1YldGMFkyZ29MMkZ3Y0d4bGQyVmlhMmwwWEZ3dktGeGNaQ3NwTHlrcE8xeHVmVnh1WEc0dktpcGNiaUFxSUUxaGNDQWxhaUIwYnlCZ1NsTlBUaTV6ZEhKcGJtZHBabmtvS1dBc0lITnBibU5sSUc1dklGZGxZaUJKYm5Od1pXTjBiM0p6SUdSdklIUm9ZWFFnWW5rZ1pHVm1ZWFZzZEM1Y2JpQXFMMXh1WEc1bGVIQnZjblJ6TG1admNtMWhkSFJsY25NdWFpQTlJR1oxYm1OMGFXOXVLSFlwSUh0Y2JpQWdkSEo1SUh0Y2JpQWdJQ0J5WlhSMWNtNGdTbE5QVGk1emRISnBibWRwWm5rb2RpazdYRzRnSUgwZ1kyRjBZMmdnS0dWeWNpa2dlMXh1SUNBZ0lISmxkSFZ5YmlBblcxVnVaWGh3WldOMFpXUktVMDlPVUdGeWMyVkZjbkp2Y2wwNklDY2dLeUJsY25JdWJXVnpjMkZuWlR0Y2JpQWdmVnh1ZlR0Y2JseHVYRzR2S2lwY2JpQXFJRU52Ykc5eWFYcGxJR3h2WnlCaGNtZDFiV1Z1ZEhNZ2FXWWdaVzVoWW14bFpDNWNiaUFxWEc0Z0tpQkFZWEJwSUhCMVlteHBZMXh1SUNvdlhHNWNibVoxYm1OMGFXOXVJR1p2Y20xaGRFRnlaM01vWVhKbmN5a2dlMXh1SUNCMllYSWdkWE5sUTI5c2IzSnpJRDBnZEdocGN5NTFjMlZEYjJ4dmNuTTdYRzVjYmlBZ1lYSm5jMXN3WFNBOUlDaDFjMlZEYjJ4dmNuTWdQeUFuSldNbklEb2dKeWNwWEc0Z0lDQWdLeUIwYUdsekxtNWhiV1Z6Y0dGalpWeHVJQ0FnSUNzZ0tIVnpaVU52Ykc5eWN5QS9JQ2NnSldNbklEb2dKeUFuS1Z4dUlDQWdJQ3NnWVhKbmMxc3dYVnh1SUNBZ0lDc2dLSFZ6WlVOdmJHOXljeUEvSUNjbFl5QW5JRG9nSnlBbktWeHVJQ0FnSUNzZ0p5c25JQ3NnWlhod2IzSjBjeTVvZFcxaGJtbDZaU2gwYUdsekxtUnBabVlwTzF4dVhHNGdJR2xtSUNnaGRYTmxRMjlzYjNKektTQnlaWFIxY200N1hHNWNiaUFnZG1GeUlHTWdQU0FuWTI5c2IzSTZJQ2NnS3lCMGFHbHpMbU52Ykc5eU8xeHVJQ0JoY21kekxuTndiR2xqWlNneExDQXdMQ0JqTENBblkyOXNiM0k2SUdsdWFHVnlhWFFuS1Z4dVhHNGdJQzh2SUhSb1pTQm1hVzVoYkNCY0lpVmpYQ0lnYVhNZ2MyOXRaWGRvWVhRZ2RISnBZMnQ1TENCaVpXTmhkWE5sSUhSb1pYSmxJR052ZFd4a0lHSmxJRzkwYUdWeVhHNGdJQzh2SUdGeVozVnRaVzUwY3lCd1lYTnpaV1FnWldsMGFHVnlJR0psWm05eVpTQnZjaUJoWm5SbGNpQjBhR1VnSldNc0lITnZJSGRsSUc1bFpXUWdkRzljYmlBZ0x5OGdabWxuZFhKbElHOTFkQ0IwYUdVZ1kyOXljbVZqZENCcGJtUmxlQ0IwYnlCcGJuTmxjblFnZEdobElFTlRVeUJwYm5SdlhHNGdJSFpoY2lCcGJtUmxlQ0E5SURBN1hHNGdJSFpoY2lCc1lYTjBReUE5SURBN1hHNGdJR0Z5WjNOYk1GMHVjbVZ3YkdGalpTZ3ZKVnRoTFhwQkxWb2xYUzluTENCbWRXNWpkR2x2YmlodFlYUmphQ2tnZTF4dUlDQWdJR2xtSUNnbkpTVW5JRDA5UFNCdFlYUmphQ2tnY21WMGRYSnVPMXh1SUNBZ0lHbHVaR1Y0S3lzN1hHNGdJQ0FnYVdZZ0tDY2xZeWNnUFQwOUlHMWhkR05vS1NCN1hHNGdJQ0FnSUNBdkx5QjNaU0J2Ym14NUlHRnlaU0JwYm5SbGNtVnpkR1ZrSUdsdUlIUm9aU0FxYkdGemRDb2dKV05jYmlBZ0lDQWdJQzh2SUNoMGFHVWdkWE5sY2lCdFlYa2dhR0YyWlNCd2NtOTJhV1JsWkNCMGFHVnBjaUJ2ZDI0cFhHNGdJQ0FnSUNCc1lYTjBReUE5SUdsdVpHVjRPMXh1SUNBZ0lIMWNiaUFnZlNrN1hHNWNiaUFnWVhKbmN5NXpjR3hwWTJVb2JHRnpkRU1zSURBc0lHTXBPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFbHVkbTlyWlhNZ1lHTnZibk52YkdVdWJHOW5LQ2xnSUhkb1pXNGdZWFpoYVd4aFlteGxMbHh1SUNvZ1RtOHRiM0FnZDJobGJpQmdZMjl1YzI5c1pTNXNiMmRnSUdseklHNXZkQ0JoSUZ3aVpuVnVZM1JwYjI1Y0lpNWNiaUFxWEc0Z0tpQkFZWEJwSUhCMVlteHBZMXh1SUNvdlhHNWNibVoxYm1OMGFXOXVJR3h2WnlncElIdGNiaUFnTHk4Z2RHaHBjeUJvWVdOclpYSjVJR2x6SUhKbGNYVnBjbVZrSUdadmNpQkpSVGd2T1N3Z2QyaGxjbVZjYmlBZ0x5OGdkR2hsSUdCamIyNXpiMnhsTG14dloyQWdablZ1WTNScGIyNGdaRzlsYzI0bmRDQm9ZWFpsSUNkaGNIQnNlU2RjYmlBZ2NtVjBkWEp1SUNkdlltcGxZM1FuSUQwOVBTQjBlWEJsYjJZZ1kyOXVjMjlzWlZ4dUlDQWdJQ1ltSUdOdmJuTnZiR1V1Ykc5blhHNGdJQ0FnSmlZZ1JuVnVZM1JwYjI0dWNISnZkRzkwZVhCbExtRndjR3g1TG1OaGJHd29ZMjl1YzI5c1pTNXNiMmNzSUdOdmJuTnZiR1VzSUdGeVozVnRaVzUwY3lrN1hHNTlYRzVjYmk4cUtseHVJQ29nVTJGMlpTQmdibUZ0WlhOd1lXTmxjMkF1WEc0Z0tseHVJQ29nUUhCaGNtRnRJSHRUZEhKcGJtZDlJRzVoYldWemNHRmpaWE5jYmlBcUlFQmhjR2tnY0hKcGRtRjBaVnh1SUNvdlhHNWNibVoxYm1OMGFXOXVJSE5oZG1Vb2JtRnRaWE53WVdObGN5a2dlMXh1SUNCMGNua2dlMXh1SUNBZ0lHbG1JQ2h1ZFd4c0lEMDlJRzVoYldWemNHRmpaWE1wSUh0Y2JpQWdJQ0FnSUdWNGNHOXlkSE11YzNSdmNtRm5aUzV5WlcxdmRtVkpkR1Z0S0Nka1pXSjFaeWNwTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQmxlSEJ2Y25SekxuTjBiM0poWjJVdVpHVmlkV2NnUFNCdVlXMWxjM0JoWTJWek8xeHVJQ0FnSUgxY2JpQWdmU0JqWVhSamFDaGxLU0I3ZlZ4dWZWeHVYRzR2S2lwY2JpQXFJRXh2WVdRZ1lHNWhiV1Z6Y0dGalpYTmdMbHh1SUNwY2JpQXFJRUJ5WlhSMWNtNGdlMU4wY21sdVozMGdjbVYwZFhKdWN5QjBhR1VnY0hKbGRtbHZkWE5zZVNCd1pYSnphWE4wWldRZ1pHVmlkV2NnYlc5a1pYTmNiaUFxSUVCaGNHa2djSEpwZG1GMFpWeHVJQ292WEc1Y2JtWjFibU4wYVc5dUlHeHZZV1FvS1NCN1hHNGdJSFpoY2lCeU8xeHVJQ0IwY25rZ2UxeHVJQ0FnSUhJZ1BTQmxlSEJ2Y25SekxuTjBiM0poWjJVdVpHVmlkV2M3WEc0Z0lIMGdZMkYwWTJnb1pTa2dlMzFjYmx4dUlDQXZMeUJKWmlCa1pXSjFaeUJwYzI0bmRDQnpaWFFnYVc0Z1RGTXNJR0Z1WkNCM1pTZHlaU0JwYmlCRmJHVmpkSEp2Yml3Z2RISjVJSFJ2SUd4dllXUWdKRVJGUWxWSFhHNGdJR2xtSUNnaGNpQW1KaUIwZVhCbGIyWWdjSEp2WTJWemN5QWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdKMlZ1ZGljZ2FXNGdjSEp2WTJWemN5a2dlMXh1SUNBZ0lISWdQU0J3Y205alpYTnpMbVZ1ZGk1RVJVSlZSenRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ5TzF4dWZWeHVYRzR2S2lwY2JpQXFJRVZ1WVdKc1pTQnVZVzFsYzNCaFkyVnpJR3hwYzNSbFpDQnBiaUJnYkc5allXeFRkRzl5WVdkbExtUmxZblZuWUNCcGJtbDBhV0ZzYkhrdVhHNGdLaTljYmx4dVpYaHdiM0owY3k1bGJtRmliR1VvYkc5aFpDZ3BLVHRjYmx4dUx5b3FYRzRnS2lCTWIyTmhiSE4wYjNKaFoyVWdZWFIwWlcxd2RITWdkRzhnY21WMGRYSnVJSFJvWlNCc2IyTmhiSE4wYjNKaFoyVXVYRzRnS2x4dUlDb2dWR2hwY3lCcGN5QnVaV05sYzNOaGNua2dZbVZqWVhWelpTQnpZV1poY21rZ2RHaHliM2R6WEc0Z0tpQjNhR1Z1SUdFZ2RYTmxjaUJrYVhOaFlteGxjeUJqYjI5cmFXVnpMMnh2WTJGc2MzUnZjbUZuWlZ4dUlDb2dZVzVrSUhsdmRTQmhkSFJsYlhCMElIUnZJR0ZqWTJWemN5QnBkQzVjYmlBcVhHNGdLaUJBY21WMGRYSnVJSHRNYjJOaGJGTjBiM0poWjJWOVhHNGdLaUJBWVhCcElIQnlhWFpoZEdWY2JpQXFMMXh1WEc1bWRXNWpkR2x2YmlCc2IyTmhiSE4wYjNKaFoyVW9LU0I3WEc0Z0lIUnllU0I3WEc0Z0lDQWdjbVYwZFhKdUlIZHBibVJ2ZHk1c2IyTmhiRk4wYjNKaFoyVTdYRzRnSUgwZ1kyRjBZMmdnS0dVcElIdDlYRzU5WEc0aVhYMD0iLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Z1snZGVmYXVsdCddID0gY3JlYXRlRGVidWc7XG5leHBvcnRzLmNvZXJjZSA9IGNvZXJjZTtcbmV4cG9ydHMuZGlzYWJsZSA9IGRpc2FibGU7XG5leHBvcnRzLmVuYWJsZSA9IGVuYWJsZTtcbmV4cG9ydHMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5leHBvcnRzLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblxuLyoqXG4gKiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cbiAqL1xuXG5leHBvcnRzLm5hbWVzID0gW107XG5leHBvcnRzLnNraXBzID0gW107XG5cbi8qKlxuICogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuICpcbiAqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMgPSB7fTtcblxuLyoqXG4gKiBQcmV2aW91cyBsb2cgdGltZXN0YW1wLlxuICovXG5cbnZhciBwcmV2VGltZTtcblxuLyoqXG4gKiBTZWxlY3QgYSBjb2xvci5cbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuICB2YXIgaGFzaCA9IDAsIGk7XG5cbiAgZm9yIChpIGluIG5hbWVzcGFjZSkge1xuICAgIGhhc2ggID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcbiAgICBoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICB9XG5cbiAgcmV0dXJuIGV4cG9ydHMuY29sb3JzW01hdGguYWJzKGhhc2gpICUgZXhwb3J0cy5jb2xvcnMubGVuZ3RoXTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cbiAgZnVuY3Rpb24gZGVidWcoKSB7XG4gICAgLy8gZGlzYWJsZWQ/XG4gICAgaWYgKCFkZWJ1Zy5lbmFibGVkKSByZXR1cm47XG5cbiAgICB2YXIgc2VsZiA9IGRlYnVnO1xuXG4gICAgLy8gc2V0IGBkaWZmYCB0aW1lc3RhbXBcbiAgICB2YXIgY3VyciA9ICtuZXcgRGF0ZSgpO1xuICAgIHZhciBtcyA9IGN1cnIgLSAocHJldlRpbWUgfHwgY3Vycik7XG4gICAgc2VsZi5kaWZmID0gbXM7XG4gICAgc2VsZi5wcmV2ID0gcHJldlRpbWU7XG4gICAgc2VsZi5jdXJyID0gY3VycjtcbiAgICBwcmV2VGltZSA9IGN1cnI7XG5cbiAgICAvLyB0dXJuIHRoZSBgYXJndW1lbnRzYCBpbnRvIGEgcHJvcGVyIEFycmF5XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIGFyZ3NbMF0gPSBleHBvcnRzLmNvZXJjZShhcmdzWzBdKTtcblxuICAgIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIGFyZ3NbMF0pIHtcbiAgICAgIC8vIGFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG4gICAgICBhcmdzLnVuc2hpZnQoJyVPJyk7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCBmdW5jdGlvbihtYXRjaCwgZm9ybWF0KSB7XG4gICAgICAvLyBpZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG4gICAgICBpZiAobWF0Y2ggPT09ICclJScpIHJldHVybiBtYXRjaDtcbiAgICAgIGluZGV4Kys7XG4gICAgICB2YXIgZm9ybWF0dGVyID0gZXhwb3J0cy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG4gICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGZvcm1hdHRlcikge1xuICAgICAgICB2YXIgdmFsID0gYXJnc1tpbmRleF07XG4gICAgICAgIG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuICAgICAgICAvLyBub3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG4gICAgICAgIGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgaW5kZXgtLTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcblxuICAgIC8vIGFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG4gICAgZXhwb3J0cy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cbiAgICB2YXIgbG9nRm4gPSBkZWJ1Zy5sb2cgfHwgZXhwb3J0cy5sb2cgfHwgY29uc29sZS5sb2cuYmluZChjb25zb2xlKTtcbiAgICBsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgfVxuXG4gIGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgZGVidWcuZW5hYmxlZCA9IGV4cG9ydHMuZW5hYmxlZChuYW1lc3BhY2UpO1xuICBkZWJ1Zy51c2VDb2xvcnMgPSBleHBvcnRzLnVzZUNvbG9ycygpO1xuICBkZWJ1Zy5jb2xvciA9IHNlbGVjdENvbG9yKG5hbWVzcGFjZSk7XG5cbiAgLy8gZW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBleHBvcnRzLmluaXQpIHtcbiAgICBleHBvcnRzLmluaXQoZGVidWcpO1xuICB9XG5cbiAgcmV0dXJuIGRlYnVnO1xufVxuXG4vKipcbiAqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcbiAqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcbiAgZXhwb3J0cy5zYXZlKG5hbWVzcGFjZXMpO1xuXG4gIGV4cG9ydHMubmFtZXMgPSBbXTtcbiAgZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4gIHZhciBzcGxpdCA9IChuYW1lc3BhY2VzIHx8ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuICB2YXIgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIXNwbGl0W2ldKSBjb250aW51ZTsgLy8gaWdub3JlIGVtcHR5IHN0cmluZ3NcbiAgICBuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcbiAgICBpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG4gICAgICBleHBvcnRzLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBkaXNhYmxlKCkge1xuICBleHBvcnRzLmVuYWJsZSgnJyk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcbiAgdmFyIGksIGxlbjtcbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChpID0gMCwgbGVuID0gZXhwb3J0cy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChleHBvcnRzLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQ29lcmNlIGB2YWxgLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICogQHJldHVybiB7TWl4ZWR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBjb2VyY2UodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcbiAgcmV0dXJuIHZhbDtcbn1cbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxuRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24obikge1xuICBpZiAoIWlzTnVtYmVyKG4pIHx8IG4gPCAwIHx8IGlzTmFOKG4pKVxuICAgIHRocm93IFR5cGVFcnJvcignbiBtdXN0IGJlIGEgcG9zaXRpdmUgbnVtYmVyJyk7XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgZXIsIGhhbmRsZXIsIGxlbiwgYXJncywgaSwgbGlzdGVuZXJzO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzKVxuICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICBpZiAoIXRoaXMuX2V2ZW50cy5lcnJvciB8fFxuICAgICAgICAoaXNPYmplY3QodGhpcy5fZXZlbnRzLmVycm9yKSAmJiAhdGhpcy5fZXZlbnRzLmVycm9yLmxlbmd0aCkpIHtcbiAgICAgIGVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgaWYgKGVyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgICB9XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1VuY2F1Z2h0LCB1bnNwZWNpZmllZCBcImVycm9yXCIgZXZlbnQuJyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlciA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNVbmRlZmluZWQoaGFuZGxlcikpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmIChpc0Z1bmN0aW9uKGhhbmRsZXIpKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAvLyBmYXN0IGNhc2VzXG4gICAgICBjYXNlIDE6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBzbG93ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0gMSk7XG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCBsZW47IGkrKylcbiAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoaGFuZGxlcikpIHtcbiAgICBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0gMSk7XG4gICAgZm9yIChpID0gMTsgaSA8IGxlbjsgaSsrKVxuICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG5cbiAgICBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICBpZiAodGhpcy5fZXZlbnRzLm5ld0xpc3RlbmVyKVxuICAgIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGxpc3RlbmVyLmxpc3RlbmVyKSA/XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICBlbHNlIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2VcbiAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG5cbiAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkgJiYgIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcbiAgICB2YXIgbTtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX21heExpc3RlbmVycykpIHtcbiAgICAgIG0gPSB0aGlzLl9tYXhMaXN0ZW5lcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICB9XG5cbiAgICBpZiAobSAmJiBtID4gMCAmJiB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoID4gbSkge1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoKTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZS50cmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIGluIElFIDEwXG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgdmFyIGZpcmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZygpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGcpO1xuXG4gICAgaWYgKCFmaXJlZCkge1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBnLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHRoaXMub24odHlwZSwgZyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBlbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWZmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZFxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBsaXN0LCBwb3NpdGlvbiwgbGVuZ3RoLCBpO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIGxpc3QgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICBwb3NpdGlvbiA9IC0xO1xuXG4gIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fFxuICAgICAgKGlzRnVuY3Rpb24obGlzdC5saXN0ZW5lcikgJiYgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcblxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxpc3QpKSB7XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gPiAwOykge1xuICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8XG4gICAgICAgICAgKGxpc3RbaV0ubGlzdGVuZXIgJiYgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIga2V5LCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICBpZiAoIXRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgZWxzZSBpZiAodGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAoa2V5IGluIHRoaXMuX2V2ZW50cykge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNGdW5jdGlvbihsaXN0ZW5lcnMpKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICB9IGVsc2Uge1xuICAgIC8vIExJRk8gb3JkZXJcbiAgICB3aGlsZSAobGlzdGVuZXJzLmxlbmd0aClcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2xpc3RlbmVycy5sZW5ndGggLSAxXSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IFtdO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gW3RoaXMuX2V2ZW50c1t0eXBlXV07XG4gIGVsc2VcbiAgICByZXQgPSB0aGlzLl9ldmVudHNbdHlwZV0uc2xpY2UoKTtcbiAgcmV0dXJuIHJldDtcbn07XG5cbkV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50ID0gZnVuY3Rpb24oZW1pdHRlciwgdHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIWVtaXR0ZXIuX2V2ZW50cyB8fCAhZW1pdHRlci5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IDA7XG4gIGVsc2UgaWYgKGlzRnVuY3Rpb24oZW1pdHRlci5fZXZlbnRzW3R5cGVdKSlcbiAgICByZXQgPSAxO1xuICBlbHNlXG4gICAgcmV0ID0gZW1pdHRlci5fZXZlbnRzW3R5cGVdLmxlbmd0aDtcbiAgcmV0dXJuIHJldDtcbn07XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnICYmIGFyZyAhPT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbiIsIi8vIG9yaWdpbmFsbHkgcHVsbGVkIG91dCBvZiBzaW1wbGUtcGVlclxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldEJyb3dzZXJSVEMgKCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBudWxsXG4gIHZhciB3cnRjID0ge1xuICAgIFJUQ1BlZXJDb25uZWN0aW9uOiB3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gfHwgd2luZG93Lm1velJUQ1BlZXJDb25uZWN0aW9uIHx8XG4gICAgICB3aW5kb3cud2Via2l0UlRDUGVlckNvbm5lY3Rpb24sXG4gICAgUlRDU2Vzc2lvbkRlc2NyaXB0aW9uOiB3aW5kb3cuUlRDU2Vzc2lvbkRlc2NyaXB0aW9uIHx8XG4gICAgICB3aW5kb3cubW96UlRDU2Vzc2lvbkRlc2NyaXB0aW9uIHx8IHdpbmRvdy53ZWJraXRSVENTZXNzaW9uRGVzY3JpcHRpb24sXG4gICAgUlRDSWNlQ2FuZGlkYXRlOiB3aW5kb3cuUlRDSWNlQ2FuZGlkYXRlIHx8IHdpbmRvdy5tb3pSVENJY2VDYW5kaWRhdGUgfHxcbiAgICAgIHdpbmRvdy53ZWJraXRSVENJY2VDYW5kaWRhdGVcbiAgfVxuICBpZiAoIXdydGMuUlRDUGVlckNvbm5lY3Rpb24pIHJldHVybiBudWxsXG4gIHJldHVybiB3cnRjXG59XG4iLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cbiIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuIiwiXG4vKipcbiAqIGlzQXJyYXlcbiAqL1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbi8qKlxuICogdG9TdHJpbmdcbiAqL1xuXG52YXIgc3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBXaGV0aGVyIG9yIG5vdCB0aGUgZ2l2ZW4gYHZhbGBcbiAqIGlzIGFuIGFycmF5LlxuICpcbiAqIGV4YW1wbGU6XG4gKlxuICogICAgICAgIGlzQXJyYXkoW10pO1xuICogICAgICAgIC8vID4gdHJ1ZVxuICogICAgICAgIGlzQXJyYXkoYXJndW1lbnRzKTtcbiAqICAgICAgICAvLyA+IGZhbHNlXG4gKiAgICAgICAgaXNBcnJheSgnJyk7XG4gKiAgICAgICAgLy8gPiBmYWxzZVxuICpcbiAqIEBwYXJhbSB7bWl4ZWR9IHZhbFxuICogQHJldHVybiB7Ym9vbH1cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXkgfHwgZnVuY3Rpb24gKHZhbCkge1xuICByZXR1cm4gISEgdmFsICYmICdbb2JqZWN0IEFycmF5XScgPT0gc3RyLmNhbGwodmFsKTtcbn07XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDBcbnZhciBtID0gcyAqIDYwXG52YXIgaCA9IG0gKiA2MFxudmFyIGQgPSBoICogMjRcbnZhciB5ID0gZCAqIDM2NS4yNVxuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbFxuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbCkgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/XG5cdFx0XHRmbXRMb25nKHZhbCkgOlxuXHRcdFx0Zm10U2hvcnQodmFsKVxuICB9XG4gIHRocm93IG5ldyBFcnJvcigndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICsgSlNPTi5zdHJpbmdpZnkodmFsKSlcbn1cblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gIHN0ciA9IFN0cmluZyhzdHIpXG4gIGlmIChzdHIubGVuZ3RoID4gMTAwMDApIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgbWF0Y2ggPSAvXigoPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKHN0cilcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSlcbiAgdmFyIHR5cGUgPSAobWF0Y2hbMl0gfHwgJ21zJykudG9Mb3dlckNhc2UoKVxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHlcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIG4gKiBkXG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoXG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtXG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNzJzpcbiAgICBjYXNlICdzZWMnOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIG4gKiBzXG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdFNob3J0KG1zKSB7XG4gIGlmIChtcyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJ1xuICB9XG4gIGlmIChtcyA+PSBoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBoKSArICdoJ1xuICB9XG4gIGlmIChtcyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJ1xuICB9XG4gIGlmIChtcyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJ1xuICB9XG4gIHJldHVybiBtcyArICdtcydcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgcmV0dXJuIHBsdXJhbChtcywgZCwgJ2RheScpIHx8XG4gICAgcGx1cmFsKG1zLCBoLCAnaG91cicpIHx8XG4gICAgcGx1cmFsKG1zLCBtLCAnbWludXRlJykgfHxcbiAgICBwbHVyYWwobXMsIHMsICdzZWNvbmQnKSB8fFxuICAgIG1zICsgJyBtcydcbn1cblxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIGhlbHBlci5cbiAqL1xuXG5mdW5jdGlvbiBwbHVyYWwobXMsIG4sIG5hbWUpIHtcbiAgaWYgKG1zIDwgbikge1xuICAgIHJldHVyblxuICB9XG4gIGlmIChtcyA8IG4gKiAxLjUpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihtcyAvIG4pICsgJyAnICsgbmFtZVxuICB9XG4gIHJldHVybiBNYXRoLmNlaWwobXMgLyBuKSArICcgJyArIG5hbWUgKyAncydcbn1cbiIsIihmdW5jdGlvbiAocHJvY2Vzcyl7XG4ndXNlIHN0cmljdCc7XG5cbmlmICghcHJvY2Vzcy52ZXJzaW9uIHx8XG4gICAgcHJvY2Vzcy52ZXJzaW9uLmluZGV4T2YoJ3YwLicpID09PSAwIHx8XG4gICAgcHJvY2Vzcy52ZXJzaW9uLmluZGV4T2YoJ3YxLicpID09PSAwICYmIHByb2Nlc3MudmVyc2lvbi5pbmRleE9mKCd2MS44LicpICE9PSAwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gbmV4dFRpY2s7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHByb2Nlc3MubmV4dFRpY2s7XG59XG5cbmZ1bmN0aW9uIG5leHRUaWNrKGZuLCBhcmcxLCBhcmcyLCBhcmczKSB7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImNhbGxiYWNrXCIgYXJndW1lbnQgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gIH1cbiAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBhcmdzLCBpO1xuICBzd2l0Y2ggKGxlbikge1xuICBjYXNlIDA6XG4gIGNhc2UgMTpcbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmbik7XG4gIGNhc2UgMjpcbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiBhZnRlclRpY2tPbmUoKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIGFyZzEpO1xuICAgIH0pO1xuICBjYXNlIDM6XG4gICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gYWZ0ZXJUaWNrVHdvKCkge1xuICAgICAgZm4uY2FsbChudWxsLCBhcmcxLCBhcmcyKTtcbiAgICB9KTtcbiAgY2FzZSA0OlxuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uIGFmdGVyVGlja1RocmVlKCkge1xuICAgICAgZm4uY2FsbChudWxsLCBhcmcxLCBhcmcyLCBhcmczKTtcbiAgICB9KTtcbiAgZGVmYXVsdDpcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiAtIDEpO1xuICAgIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgYXJncy5sZW5ndGgpIHtcbiAgICAgIGFyZ3NbaSsrXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gYWZ0ZXJUaWNrKCkge1xuICAgICAgZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfSk7XG4gIH1cbn1cblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoJ19wcm9jZXNzJykpXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5d2NtOWpaWE56TFc1bGVIUnBZMnN0WVhKbmN5OXBibVJsZUM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU0lzSW1acGJHVWlPaUpuWlc1bGNtRjBaV1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUozVnpaU0J6ZEhKcFkzUW5PMXh1WEc1cFppQW9JWEJ5YjJObGMzTXVkbVZ5YzJsdmJpQjhmRnh1SUNBZ0lIQnliMk5sYzNNdWRtVnljMmx2Ymk1cGJtUmxlRTltS0NkMk1DNG5LU0E5UFQwZ01DQjhmRnh1SUNBZ0lIQnliMk5sYzNNdWRtVnljMmx2Ymk1cGJtUmxlRTltS0NkMk1TNG5LU0E5UFQwZ01DQW1KaUJ3Y205alpYTnpMblpsY25OcGIyNHVhVzVrWlhoUFppZ25kakV1T0M0bktTQWhQVDBnTUNrZ2UxeHVJQ0J0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRzVsZUhSVWFXTnJPMXh1ZlNCbGJITmxJSHRjYmlBZ2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCd2NtOWpaWE56TG01bGVIUlVhV05yTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJ1WlhoMFZHbGpheWhtYml3Z1lYSm5NU3dnWVhKbk1pd2dZWEpuTXlrZ2UxeHVJQ0JwWmlBb2RIbHdaVzltSUdadUlDRTlQU0FuWm5WdVkzUnBiMjRuS1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2lnblhDSmpZV3hzWW1GamExd2lJR0Z5WjNWdFpXNTBJRzExYzNRZ1ltVWdZU0JtZFc1amRHbHZiaWNwTzF4dUlDQjlYRzRnSUhaaGNpQnNaVzRnUFNCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvTzF4dUlDQjJZWElnWVhKbmN5d2dhVHRjYmlBZ2MzZHBkR05vSUNoc1pXNHBJSHRjYmlBZ1kyRnpaU0F3T2x4dUlDQmpZWE5sSURFNlhHNGdJQ0FnY21WMGRYSnVJSEJ5YjJObGMzTXVibVY0ZEZScFkyc29abTRwTzF4dUlDQmpZWE5sSURJNlhHNGdJQ0FnY21WMGRYSnVJSEJ5YjJObGMzTXVibVY0ZEZScFkyc29ablZ1WTNScGIyNGdZV1owWlhKVWFXTnJUMjVsS0NrZ2UxeHVJQ0FnSUNBZ1ptNHVZMkZzYkNodWRXeHNMQ0JoY21jeEtUdGNiaUFnSUNCOUtUdGNiaUFnWTJGelpTQXpPbHh1SUNBZ0lISmxkSFZ5YmlCd2NtOWpaWE56TG01bGVIUlVhV05yS0daMWJtTjBhVzl1SUdGbWRHVnlWR2xqYTFSM2J5Z3BJSHRjYmlBZ0lDQWdJR1p1TG1OaGJHd29iblZzYkN3Z1lYSm5NU3dnWVhKbk1pazdYRzRnSUNBZ2ZTazdYRzRnSUdOaGMyVWdORHBjYmlBZ0lDQnlaWFIxY200Z2NISnZZMlZ6Y3k1dVpYaDBWR2xqYXlobWRXNWpkR2x2YmlCaFpuUmxjbFJwWTJ0VWFISmxaU2dwSUh0Y2JpQWdJQ0FnSUdadUxtTmhiR3dvYm5Wc2JDd2dZWEpuTVN3Z1lYSm5NaXdnWVhKbk15azdYRzRnSUNBZ2ZTazdYRzRnSUdSbFptRjFiSFE2WEc0Z0lDQWdZWEpuY3lBOUlHNWxkeUJCY25KaGVTaHNaVzRnTFNBeEtUdGNiaUFnSUNCcElEMGdNRHRjYmlBZ0lDQjNhR2xzWlNBb2FTQThJR0Z5WjNNdWJHVnVaM1JvS1NCN1hHNGdJQ0FnSUNCaGNtZHpXMmtySzEwZ1BTQmhjbWQxYldWdWRITmJhVjA3WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCd2NtOWpaWE56TG01bGVIUlVhV05yS0daMWJtTjBhVzl1SUdGbWRHVnlWR2xqYXlncElIdGNiaUFnSUNBZ0lHWnVMbUZ3Y0d4NUtHNTFiR3dzSUdGeVozTXBPMXh1SUNBZ0lIMHBPMXh1SUNCOVhHNTlYRzRpWFgwPSIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhbk11dGF0aW9uT2JzZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyO1xuICAgIHZhciBjYW5Qb3N0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cucG9zdE1lc3NhZ2UgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICA7XG5cbiAgICBpZiAoY2FuU2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZikgeyByZXR1cm4gd2luZG93LnNldEltbWVkaWF0ZShmKSB9O1xuICAgIH1cblxuICAgIHZhciBxdWV1ZSA9IFtdO1xuXG4gICAgaWYgKGNhbk11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgdmFyIGhpZGRlbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBxdWV1ZUxpc3QgPSBxdWV1ZS5zbGljZSgpO1xuICAgICAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHF1ZXVlTGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShoaWRkZW5EaXYsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIGlmICghcXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaGlkZGVuRGl2LnNldEF0dHJpYnV0ZSgneWVzJywgJ25vJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGV2LnNvdXJjZTtcbiAgICAgICAgICAgIGlmICgoc291cmNlID09PSB3aW5kb3cgfHwgc291cmNlID09PSBudWxsKSAmJiBldi5kYXRhID09PSAncHJvY2Vzcy10aWNrJykge1xuICAgICAgICAgICAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0cnVlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgICAgIHF1ZXVlLnB1c2goZm4pO1xuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKCdwcm9jZXNzLXRpY2snLCAnKicpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZuLCAwKTtcbiAgICB9O1xufSkoKTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG4iLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcil7XG4ndXNlIHN0cmljdCdcblxuZnVuY3Rpb24gb2xkQnJvd3NlciAoKSB7XG4gIHRocm93IG5ldyBFcnJvcignc2VjdXJlIHJhbmRvbSBudW1iZXIgZ2VuZXJhdGlvbiBub3Qgc3VwcG9ydGVkIGJ5IHRoaXMgYnJvd3NlclxcbnVzZSBjaHJvbWUsIEZpcmVGb3ggb3IgSW50ZXJuZXQgRXhwbG9yZXIgMTEnKVxufVxuXG52YXIgY3J5cHRvID0gZ2xvYmFsLmNyeXB0byB8fCBnbG9iYWwubXNDcnlwdG9cblxuaWYgKGNyeXB0byAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmFuZG9tQnl0ZXNcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gb2xkQnJvd3NlclxufVxuXG5mdW5jdGlvbiByYW5kb21CeXRlcyAoc2l6ZSwgY2IpIHtcbiAgLy8gcGhhbnRvbWpzIG5lZWRzIHRvIHRocm93XG4gIGlmIChzaXplID4gNjU1MzYpIHRocm93IG5ldyBFcnJvcigncmVxdWVzdGVkIHRvbyBtYW55IHJhbmRvbSBieXRlcycpXG4gIC8vIGluIGNhc2UgYnJvd3NlcmlmeSAgaXNuJ3QgdXNpbmcgdGhlIFVpbnQ4QXJyYXkgdmVyc2lvblxuICB2YXIgcmF3Qnl0ZXMgPSBuZXcgZ2xvYmFsLlVpbnQ4QXJyYXkoc2l6ZSlcblxuICAvLyBUaGlzIHdpbGwgbm90IHdvcmsgaW4gb2xkZXIgYnJvd3NlcnMuXG4gIC8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvd2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXNcbiAgaWYgKHNpemUgPiAwKSB7ICAvLyBnZXRSYW5kb21WYWx1ZXMgZmFpbHMgb24gSUUgaWYgc2l6ZSA9PSAwXG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhyYXdCeXRlcylcbiAgfVxuICAvLyBwaGFudG9tanMgZG9lc24ndCBsaWtlIGEgYnVmZmVyIGJlaW5nIHBhc3NlZCBoZXJlXG4gIHZhciBieXRlcyA9IG5ldyBCdWZmZXIocmF3Qnl0ZXMuYnVmZmVyKVxuXG4gIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICBjYihudWxsLCBieXRlcylcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKCdfcHJvY2VzcycpLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIpXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5eVlXNWtiMjFpZVhSbGN5OWljbTkzYzJWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVNJc0ltWnBiR1VpT2lKblpXNWxjbUYwWldRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lKM1Z6WlNCemRISnBZM1FuWEc1Y2JtWjFibU4wYVc5dUlHOXNaRUp5YjNkelpYSWdLQ2tnZTF4dUlDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0ozTmxZM1Z5WlNCeVlXNWtiMjBnYm5WdFltVnlJR2RsYm1WeVlYUnBiMjRnYm05MElITjFjSEJ2Y25SbFpDQmllU0IwYUdseklHSnliM2R6WlhKY1hHNTFjMlVnWTJoeWIyMWxMQ0JHYVhKbFJtOTRJRzl5SUVsdWRHVnlibVYwSUVWNGNHeHZjbVZ5SURFeEp5bGNibjFjYmx4dWRtRnlJR055ZVhCMGJ5QTlJR2RzYjJKaGJDNWpjbmx3ZEc4Z2ZId2daMnh2WW1Gc0xtMXpRM0o1Y0hSdlhHNWNibWxtSUNoamNubHdkRzhnSmlZZ1kzSjVjSFJ2TG1kbGRGSmhibVJ2YlZaaGJIVmxjeWtnZTF4dUlDQnRiMlIxYkdVdVpYaHdiM0owY3lBOUlISmhibVJ2YlVKNWRHVnpYRzU5SUdWc2MyVWdlMXh1SUNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUc5c1pFSnliM2R6WlhKY2JuMWNibHh1Wm5WdVkzUnBiMjRnY21GdVpHOXRRbmwwWlhNZ0tITnBlbVVzSUdOaUtTQjdYRzRnSUM4dklIQm9ZVzUwYjIxcWN5QnVaV1ZrY3lCMGJ5QjBhSEp2ZDF4dUlDQnBaaUFvYzJsNlpTQStJRFkxTlRNMktTQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0ozSmxjWFZsYzNSbFpDQjBiMjhnYldGdWVTQnlZVzVrYjIwZ1lubDBaWE1uS1Z4dUlDQXZMeUJwYmlCallYTmxJR0p5YjNkelpYSnBabmtnSUdsemJpZDBJSFZ6YVc1bklIUm9aU0JWYVc1ME9FRnljbUY1SUhabGNuTnBiMjVjYmlBZ2RtRnlJSEpoZDBKNWRHVnpJRDBnYm1WM0lHZHNiMkpoYkM1VmFXNTBPRUZ5Y21GNUtITnBlbVVwWEc1Y2JpQWdMeThnVkdocGN5QjNhV3hzSUc1dmRDQjNiM0pySUdsdUlHOXNaR1Z5SUdKeWIzZHpaWEp6TGx4dUlDQXZMeUJUWldVZ2FIUjBjSE02THk5a1pYWmxiRzl3WlhJdWJXOTZhV3hzWVM1dmNtY3ZaVzR0VlZNdlpHOWpjeTlYWldJdlFWQkpMM2RwYm1SdmR5NWpjbmx3ZEc4dVoyVjBVbUZ1Wkc5dFZtRnNkV1Z6WEc0Z0lHbG1JQ2h6YVhwbElENGdNQ2tnZXlBZ0x5OGdaMlYwVW1GdVpHOXRWbUZzZFdWeklHWmhhV3h6SUc5dUlFbEZJR2xtSUhOcGVtVWdQVDBnTUZ4dUlDQWdJR055ZVhCMGJ5NW5aWFJTWVc1a2IyMVdZV3gxWlhNb2NtRjNRbmwwWlhNcFhHNGdJSDFjYmlBZ0x5OGdjR2hoYm5SdmJXcHpJR1J2WlhOdUozUWdiR2xyWlNCaElHSjFabVpsY2lCaVpXbHVaeUJ3WVhOelpXUWdhR1Z5WlZ4dUlDQjJZWElnWW5sMFpYTWdQU0J1WlhjZ1FuVm1abVZ5S0hKaGQwSjVkR1Z6TG1KMVptWmxjaWxjYmx4dUlDQnBaaUFvZEhsd1pXOW1JR05pSUQwOVBTQW5ablZ1WTNScGIyNG5LU0I3WEc0Z0lDQWdjbVYwZFhKdUlIQnliMk5sYzNNdWJtVjRkRlJwWTJzb1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdZMklvYm5Wc2JDd2dZbmwwWlhNcFhHNGdJQ0FnZlNsY2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCaWVYUmxjMXh1ZlZ4dUlsMTkiLCIvLyBhIGR1cGxleCBzdHJlYW0gaXMganVzdCBhIHN0cmVhbSB0aGF0IGlzIGJvdGggcmVhZGFibGUgYW5kIHdyaXRhYmxlLlxuLy8gU2luY2UgSlMgZG9lc24ndCBoYXZlIG11bHRpcGxlIHByb3RvdHlwYWwgaW5oZXJpdGFuY2UsIHRoaXMgY2xhc3Ncbi8vIHByb3RvdHlwYWxseSBpbmhlcml0cyBmcm9tIFJlYWRhYmxlLCBhbmQgdGhlbiBwYXJhc2l0aWNhbGx5IGZyb21cbi8vIFdyaXRhYmxlLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8qPHJlcGxhY2VtZW50PiovXG5cbnZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICB2YXIga2V5cyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAga2V5cy5wdXNoKGtleSk7XG4gIH1yZXR1cm4ga2V5cztcbn07XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxubW9kdWxlLmV4cG9ydHMgPSBEdXBsZXg7XG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgcHJvY2Vzc05leHRUaWNrID0gcmVxdWlyZSgncHJvY2Vzcy1uZXh0aWNrLWFyZ3MnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIHV0aWwgPSByZXF1aXJlKCdjb3JlLXV0aWwtaXMnKTtcbnV0aWwuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbnZhciBSZWFkYWJsZSA9IHJlcXVpcmUoJy4vX3N0cmVhbV9yZWFkYWJsZScpO1xudmFyIFdyaXRhYmxlID0gcmVxdWlyZSgnLi9fc3RyZWFtX3dyaXRhYmxlJyk7XG5cbnV0aWwuaW5oZXJpdHMoRHVwbGV4LCBSZWFkYWJsZSk7XG5cbnZhciBrZXlzID0gb2JqZWN0S2V5cyhXcml0YWJsZS5wcm90b3R5cGUpO1xuZm9yICh2YXIgdiA9IDA7IHYgPCBrZXlzLmxlbmd0aDsgdisrKSB7XG4gIHZhciBtZXRob2QgPSBrZXlzW3ZdO1xuICBpZiAoIUR1cGxleC5wcm90b3R5cGVbbWV0aG9kXSkgRHVwbGV4LnByb3RvdHlwZVttZXRob2RdID0gV3JpdGFibGUucHJvdG90eXBlW21ldGhvZF07XG59XG5cbmZ1bmN0aW9uIER1cGxleChvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBEdXBsZXgpKSByZXR1cm4gbmV3IER1cGxleChvcHRpb25zKTtcblxuICBSZWFkYWJsZS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICBXcml0YWJsZS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMucmVhZGFibGUgPT09IGZhbHNlKSB0aGlzLnJlYWRhYmxlID0gZmFsc2U7XG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy53cml0YWJsZSA9PT0gZmFsc2UpIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcblxuICB0aGlzLmFsbG93SGFsZk9wZW4gPSB0cnVlO1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmFsbG93SGFsZk9wZW4gPT09IGZhbHNlKSB0aGlzLmFsbG93SGFsZk9wZW4gPSBmYWxzZTtcblxuICB0aGlzLm9uY2UoJ2VuZCcsIG9uZW5kKTtcbn1cblxuLy8gdGhlIG5vLWhhbGYtb3BlbiBlbmZvcmNlclxuZnVuY3Rpb24gb25lbmQoKSB7XG4gIC8vIGlmIHdlIGFsbG93IGhhbGYtb3BlbiBzdGF0ZSwgb3IgaWYgdGhlIHdyaXRhYmxlIHNpZGUgZW5kZWQsXG4gIC8vIHRoZW4gd2UncmUgb2suXG4gIGlmICh0aGlzLmFsbG93SGFsZk9wZW4gfHwgdGhpcy5fd3JpdGFibGVTdGF0ZS5lbmRlZCkgcmV0dXJuO1xuXG4gIC8vIG5vIG1vcmUgZGF0YSBjYW4gYmUgd3JpdHRlbi5cbiAgLy8gQnV0IGFsbG93IG1vcmUgd3JpdGVzIHRvIGhhcHBlbiBpbiB0aGlzIHRpY2suXG4gIHByb2Nlc3NOZXh0VGljayhvbkVuZE5ULCB0aGlzKTtcbn1cblxuZnVuY3Rpb24gb25FbmROVChzZWxmKSB7XG4gIHNlbGYuZW5kKCk7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2goeHMsIGYpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB4cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmKHhzW2ldLCBpKTtcbiAgfVxufSIsIi8vIGEgcGFzc3Rocm91Z2ggc3RyZWFtLlxuLy8gYmFzaWNhbGx5IGp1c3QgdGhlIG1vc3QgbWluaW1hbCBzb3J0IG9mIFRyYW5zZm9ybSBzdHJlYW0uXG4vLyBFdmVyeSB3cml0dGVuIGNodW5rIGdldHMgb3V0cHV0IGFzLWlzLlxuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUGFzc1Rocm91Z2g7XG5cbnZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL19zdHJlYW1fdHJhbnNmb3JtJyk7XG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgdXRpbCA9IHJlcXVpcmUoJ2NvcmUtdXRpbC1pcycpO1xudXRpbC5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxudXRpbC5pbmhlcml0cyhQYXNzVGhyb3VnaCwgVHJhbnNmb3JtKTtcblxuZnVuY3Rpb24gUGFzc1Rocm91Z2gob3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUGFzc1Rocm91Z2gpKSByZXR1cm4gbmV3IFBhc3NUaHJvdWdoKG9wdGlvbnMpO1xuXG4gIFRyYW5zZm9ybS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xufVxuXG5QYXNzVGhyb3VnaC5wcm90b3R5cGUuX3RyYW5zZm9ybSA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIGNiKG51bGwsIGNodW5rKTtcbn07IiwiKGZ1bmN0aW9uIChwcm9jZXNzKXtcbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFkYWJsZTtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBwcm9jZXNzTmV4dFRpY2sgPSByZXF1aXJlKCdwcm9jZXNzLW5leHRpY2stYXJncycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIER1cGxleDtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG5SZWFkYWJsZS5SZWFkYWJsZVN0YXRlID0gUmVhZGFibGVTdGF0ZTtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBFRSA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlcjtcblxudmFyIEVFbGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uIChlbWl0dGVyLCB0eXBlKSB7XG4gIHJldHVybiBlbWl0dGVyLmxpc3RlbmVycyh0eXBlKS5sZW5ndGg7XG59O1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgU3RyZWFtO1xuKGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBTdHJlYW0gPSByZXF1aXJlKCdzdCcgKyAncmVhbScpO1xuICB9IGNhdGNoIChfKSB7fSBmaW5hbGx5IHtcbiAgICBpZiAoIVN0cmVhbSkgU3RyZWFtID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xuICB9XG59KSgpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbnZhciBCdWZmZXIgPSByZXF1aXJlKCdidWZmZXInKS5CdWZmZXI7XG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIGJ1ZmZlclNoaW0gPSByZXF1aXJlKCdidWZmZXItc2hpbXMnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIHV0aWwgPSByZXF1aXJlKCdjb3JlLXV0aWwtaXMnKTtcbnV0aWwuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgZGVidWdVdGlsID0gcmVxdWlyZSgndXRpbCcpO1xudmFyIGRlYnVnID0gdm9pZCAwO1xuaWYgKGRlYnVnVXRpbCAmJiBkZWJ1Z1V0aWwuZGVidWdsb2cpIHtcbiAgZGVidWcgPSBkZWJ1Z1V0aWwuZGVidWdsb2coJ3N0cmVhbScpO1xufSBlbHNlIHtcbiAgZGVidWcgPSBmdW5jdGlvbiAoKSB7fTtcbn1cbi8qPC9yZXBsYWNlbWVudD4qL1xuXG52YXIgQnVmZmVyTGlzdCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvc3RyZWFtcy9CdWZmZXJMaXN0Jyk7XG52YXIgU3RyaW5nRGVjb2RlcjtcblxudXRpbC5pbmhlcml0cyhSZWFkYWJsZSwgU3RyZWFtKTtcblxuZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKGVtaXR0ZXIsIGV2ZW50LCBmbikge1xuICAvLyBTYWRseSB0aGlzIGlzIG5vdCBjYWNoZWFibGUgYXMgc29tZSBsaWJyYXJpZXMgYnVuZGxlIHRoZWlyIG93blxuICAvLyBldmVudCBlbWl0dGVyIGltcGxlbWVudGF0aW9uIHdpdGggdGhlbS5cbiAgaWYgKHR5cGVvZiBlbWl0dGVyLnByZXBlbmRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBlbWl0dGVyLnByZXBlbmRMaXN0ZW5lcihldmVudCwgZm4pO1xuICB9IGVsc2Uge1xuICAgIC8vIFRoaXMgaXMgYSBoYWNrIHRvIG1ha2Ugc3VyZSB0aGF0IG91ciBlcnJvciBoYW5kbGVyIGlzIGF0dGFjaGVkIGJlZm9yZSBhbnlcbiAgICAvLyB1c2VybGFuZCBvbmVzLiAgTkVWRVIgRE8gVEhJUy4gVGhpcyBpcyBoZXJlIG9ubHkgYmVjYXVzZSB0aGlzIGNvZGUgbmVlZHNcbiAgICAvLyB0byBjb250aW51ZSB0byB3b3JrIHdpdGggb2xkZXIgdmVyc2lvbnMgb2YgTm9kZS5qcyB0aGF0IGRvIG5vdCBpbmNsdWRlXG4gICAgLy8gdGhlIHByZXBlbmRMaXN0ZW5lcigpIG1ldGhvZC4gVGhlIGdvYWwgaXMgdG8gZXZlbnR1YWxseSByZW1vdmUgdGhpcyBoYWNrLlxuICAgIGlmICghZW1pdHRlci5fZXZlbnRzIHx8ICFlbWl0dGVyLl9ldmVudHNbZXZlbnRdKSBlbWl0dGVyLm9uKGV2ZW50LCBmbik7ZWxzZSBpZiAoaXNBcnJheShlbWl0dGVyLl9ldmVudHNbZXZlbnRdKSkgZW1pdHRlci5fZXZlbnRzW2V2ZW50XS51bnNoaWZ0KGZuKTtlbHNlIGVtaXR0ZXIuX2V2ZW50c1tldmVudF0gPSBbZm4sIGVtaXR0ZXIuX2V2ZW50c1tldmVudF1dO1xuICB9XG59XG5cbmZ1bmN0aW9uIFJlYWRhYmxlU3RhdGUob3B0aW9ucywgc3RyZWFtKSB7XG4gIER1cGxleCA9IER1cGxleCB8fCByZXF1aXJlKCcuL19zdHJlYW1fZHVwbGV4Jyk7XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgLy8gb2JqZWN0IHN0cmVhbSBmbGFnLiBVc2VkIHRvIG1ha2UgcmVhZChuKSBpZ25vcmUgbiBhbmQgdG9cbiAgLy8gbWFrZSBhbGwgdGhlIGJ1ZmZlciBtZXJnaW5nIGFuZCBsZW5ndGggY2hlY2tzIGdvIGF3YXlcbiAgdGhpcy5vYmplY3RNb2RlID0gISFvcHRpb25zLm9iamVjdE1vZGU7XG5cbiAgaWYgKHN0cmVhbSBpbnN0YW5jZW9mIER1cGxleCkgdGhpcy5vYmplY3RNb2RlID0gdGhpcy5vYmplY3RNb2RlIHx8ICEhb3B0aW9ucy5yZWFkYWJsZU9iamVjdE1vZGU7XG5cbiAgLy8gdGhlIHBvaW50IGF0IHdoaWNoIGl0IHN0b3BzIGNhbGxpbmcgX3JlYWQoKSB0byBmaWxsIHRoZSBidWZmZXJcbiAgLy8gTm90ZTogMCBpcyBhIHZhbGlkIHZhbHVlLCBtZWFucyBcImRvbid0IGNhbGwgX3JlYWQgcHJlZW1wdGl2ZWx5IGV2ZXJcIlxuICB2YXIgaHdtID0gb3B0aW9ucy5oaWdoV2F0ZXJNYXJrO1xuICB2YXIgZGVmYXVsdEh3bSA9IHRoaXMub2JqZWN0TW9kZSA/IDE2IDogMTYgKiAxMDI0O1xuICB0aGlzLmhpZ2hXYXRlck1hcmsgPSBod20gfHwgaHdtID09PSAwID8gaHdtIDogZGVmYXVsdEh3bTtcblxuICAvLyBjYXN0IHRvIGludHMuXG4gIHRoaXMuaGlnaFdhdGVyTWFyayA9IH5+dGhpcy5oaWdoV2F0ZXJNYXJrO1xuXG4gIC8vIEEgbGlua2VkIGxpc3QgaXMgdXNlZCB0byBzdG9yZSBkYXRhIGNodW5rcyBpbnN0ZWFkIG9mIGFuIGFycmF5IGJlY2F1c2UgdGhlXG4gIC8vIGxpbmtlZCBsaXN0IGNhbiByZW1vdmUgZWxlbWVudHMgZnJvbSB0aGUgYmVnaW5uaW5nIGZhc3RlciB0aGFuXG4gIC8vIGFycmF5LnNoaWZ0KClcbiAgdGhpcy5idWZmZXIgPSBuZXcgQnVmZmVyTGlzdCgpO1xuICB0aGlzLmxlbmd0aCA9IDA7XG4gIHRoaXMucGlwZXMgPSBudWxsO1xuICB0aGlzLnBpcGVzQ291bnQgPSAwO1xuICB0aGlzLmZsb3dpbmcgPSBudWxsO1xuICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gIHRoaXMuZW5kRW1pdHRlZCA9IGZhbHNlO1xuICB0aGlzLnJlYWRpbmcgPSBmYWxzZTtcblxuICAvLyBhIGZsYWcgdG8gYmUgYWJsZSB0byB0ZWxsIGlmIHRoZSBvbndyaXRlIGNiIGlzIGNhbGxlZCBpbW1lZGlhdGVseSxcbiAgLy8gb3Igb24gYSBsYXRlciB0aWNrLiAgV2Ugc2V0IHRoaXMgdG8gdHJ1ZSBhdCBmaXJzdCwgYmVjYXVzZSBhbnlcbiAgLy8gYWN0aW9ucyB0aGF0IHNob3VsZG4ndCBoYXBwZW4gdW50aWwgXCJsYXRlclwiIHNob3VsZCBnZW5lcmFsbHkgYWxzb1xuICAvLyBub3QgaGFwcGVuIGJlZm9yZSB0aGUgZmlyc3Qgd3JpdGUgY2FsbC5cbiAgdGhpcy5zeW5jID0gdHJ1ZTtcblxuICAvLyB3aGVuZXZlciB3ZSByZXR1cm4gbnVsbCwgdGhlbiB3ZSBzZXQgYSBmbGFnIHRvIHNheVxuICAvLyB0aGF0IHdlJ3JlIGF3YWl0aW5nIGEgJ3JlYWRhYmxlJyBldmVudCBlbWlzc2lvbi5cbiAgdGhpcy5uZWVkUmVhZGFibGUgPSBmYWxzZTtcbiAgdGhpcy5lbWl0dGVkUmVhZGFibGUgPSBmYWxzZTtcbiAgdGhpcy5yZWFkYWJsZUxpc3RlbmluZyA9IGZhbHNlO1xuICB0aGlzLnJlc3VtZVNjaGVkdWxlZCA9IGZhbHNlO1xuXG4gIC8vIENyeXB0byBpcyBraW5kIG9mIG9sZCBhbmQgY3J1c3R5LiAgSGlzdG9yaWNhbGx5LCBpdHMgZGVmYXVsdCBzdHJpbmdcbiAgLy8gZW5jb2RpbmcgaXMgJ2JpbmFyeScgc28gd2UgaGF2ZSB0byBtYWtlIHRoaXMgY29uZmlndXJhYmxlLlxuICAvLyBFdmVyeXRoaW5nIGVsc2UgaW4gdGhlIHVuaXZlcnNlIHVzZXMgJ3V0ZjgnLCB0aG91Z2guXG4gIHRoaXMuZGVmYXVsdEVuY29kaW5nID0gb3B0aW9ucy5kZWZhdWx0RW5jb2RpbmcgfHwgJ3V0ZjgnO1xuXG4gIC8vIHdoZW4gcGlwaW5nLCB3ZSBvbmx5IGNhcmUgYWJvdXQgJ3JlYWRhYmxlJyBldmVudHMgdGhhdCBoYXBwZW5cbiAgLy8gYWZ0ZXIgcmVhZCgpaW5nIGFsbCB0aGUgYnl0ZXMgYW5kIG5vdCBnZXR0aW5nIGFueSBwdXNoYmFjay5cbiAgdGhpcy5yYW5PdXQgPSBmYWxzZTtcblxuICAvLyB0aGUgbnVtYmVyIG9mIHdyaXRlcnMgdGhhdCBhcmUgYXdhaXRpbmcgYSBkcmFpbiBldmVudCBpbiAucGlwZSgpc1xuICB0aGlzLmF3YWl0RHJhaW4gPSAwO1xuXG4gIC8vIGlmIHRydWUsIGEgbWF5YmVSZWFkTW9yZSBoYXMgYmVlbiBzY2hlZHVsZWRcbiAgdGhpcy5yZWFkaW5nTW9yZSA9IGZhbHNlO1xuXG4gIHRoaXMuZGVjb2RlciA9IG51bGw7XG4gIHRoaXMuZW5jb2RpbmcgPSBudWxsO1xuICBpZiAob3B0aW9ucy5lbmNvZGluZykge1xuICAgIGlmICghU3RyaW5nRGVjb2RlcikgU3RyaW5nRGVjb2RlciA9IHJlcXVpcmUoJ3N0cmluZ19kZWNvZGVyLycpLlN0cmluZ0RlY29kZXI7XG4gICAgdGhpcy5kZWNvZGVyID0gbmV3IFN0cmluZ0RlY29kZXIob3B0aW9ucy5lbmNvZGluZyk7XG4gICAgdGhpcy5lbmNvZGluZyA9IG9wdGlvbnMuZW5jb2Rpbmc7XG4gIH1cbn1cblxuZnVuY3Rpb24gUmVhZGFibGUob3B0aW9ucykge1xuICBEdXBsZXggPSBEdXBsZXggfHwgcmVxdWlyZSgnLi9fc3RyZWFtX2R1cGxleCcpO1xuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZWFkYWJsZSkpIHJldHVybiBuZXcgUmVhZGFibGUob3B0aW9ucyk7XG5cbiAgdGhpcy5fcmVhZGFibGVTdGF0ZSA9IG5ldyBSZWFkYWJsZVN0YXRlKG9wdGlvbnMsIHRoaXMpO1xuXG4gIC8vIGxlZ2FjeVxuICB0aGlzLnJlYWRhYmxlID0gdHJ1ZTtcblxuICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5yZWFkID09PSAnZnVuY3Rpb24nKSB0aGlzLl9yZWFkID0gb3B0aW9ucy5yZWFkO1xuXG4gIFN0cmVhbS5jYWxsKHRoaXMpO1xufVxuXG4vLyBNYW51YWxseSBzaG92ZSBzb21ldGhpbmcgaW50byB0aGUgcmVhZCgpIGJ1ZmZlci5cbi8vIFRoaXMgcmV0dXJucyB0cnVlIGlmIHRoZSBoaWdoV2F0ZXJNYXJrIGhhcyBub3QgYmVlbiBoaXQgeWV0LFxuLy8gc2ltaWxhciB0byBob3cgV3JpdGFibGUud3JpdGUoKSByZXR1cm5zIHRydWUgaWYgeW91IHNob3VsZFxuLy8gd3JpdGUoKSBzb21lIG1vcmUuXG5SZWFkYWJsZS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcblxuICBpZiAoIXN0YXRlLm9iamVjdE1vZGUgJiYgdHlwZW9mIGNodW5rID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gZW5jb2RpbmcgfHwgc3RhdGUuZGVmYXVsdEVuY29kaW5nO1xuICAgIGlmIChlbmNvZGluZyAhPT0gc3RhdGUuZW5jb2RpbmcpIHtcbiAgICAgIGNodW5rID0gYnVmZmVyU2hpbS5mcm9tKGNodW5rLCBlbmNvZGluZyk7XG4gICAgICBlbmNvZGluZyA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWFkYWJsZUFkZENodW5rKHRoaXMsIHN0YXRlLCBjaHVuaywgZW5jb2RpbmcsIGZhbHNlKTtcbn07XG5cbi8vIFVuc2hpZnQgc2hvdWxkICphbHdheXMqIGJlIHNvbWV0aGluZyBkaXJlY3RseSBvdXQgb2YgcmVhZCgpXG5SZWFkYWJsZS5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uIChjaHVuaykge1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICByZXR1cm4gcmVhZGFibGVBZGRDaHVuayh0aGlzLCBzdGF0ZSwgY2h1bmssICcnLCB0cnVlKTtcbn07XG5cblJlYWRhYmxlLnByb3RvdHlwZS5pc1BhdXNlZCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX3JlYWRhYmxlU3RhdGUuZmxvd2luZyA9PT0gZmFsc2U7XG59O1xuXG5mdW5jdGlvbiByZWFkYWJsZUFkZENodW5rKHN0cmVhbSwgc3RhdGUsIGNodW5rLCBlbmNvZGluZywgYWRkVG9Gcm9udCkge1xuICB2YXIgZXIgPSBjaHVua0ludmFsaWQoc3RhdGUsIGNodW5rKTtcbiAgaWYgKGVyKSB7XG4gICAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXIpO1xuICB9IGVsc2UgaWYgKGNodW5rID09PSBudWxsKSB7XG4gICAgc3RhdGUucmVhZGluZyA9IGZhbHNlO1xuICAgIG9uRW9mQ2h1bmsoc3RyZWFtLCBzdGF0ZSk7XG4gIH0gZWxzZSBpZiAoc3RhdGUub2JqZWN0TW9kZSB8fCBjaHVuayAmJiBjaHVuay5sZW5ndGggPiAwKSB7XG4gICAgaWYgKHN0YXRlLmVuZGVkICYmICFhZGRUb0Zyb250KSB7XG4gICAgICB2YXIgZSA9IG5ldyBFcnJvcignc3RyZWFtLnB1c2goKSBhZnRlciBFT0YnKTtcbiAgICAgIHN0cmVhbS5lbWl0KCdlcnJvcicsIGUpO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUuZW5kRW1pdHRlZCAmJiBhZGRUb0Zyb250KSB7XG4gICAgICB2YXIgX2UgPSBuZXcgRXJyb3IoJ3N0cmVhbS51bnNoaWZ0KCkgYWZ0ZXIgZW5kIGV2ZW50Jyk7XG4gICAgICBzdHJlYW0uZW1pdCgnZXJyb3InLCBfZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBza2lwQWRkO1xuICAgICAgaWYgKHN0YXRlLmRlY29kZXIgJiYgIWFkZFRvRnJvbnQgJiYgIWVuY29kaW5nKSB7XG4gICAgICAgIGNodW5rID0gc3RhdGUuZGVjb2Rlci53cml0ZShjaHVuayk7XG4gICAgICAgIHNraXBBZGQgPSAhc3RhdGUub2JqZWN0TW9kZSAmJiBjaHVuay5sZW5ndGggPT09IDA7XG4gICAgICB9XG5cbiAgICAgIGlmICghYWRkVG9Gcm9udCkgc3RhdGUucmVhZGluZyA9IGZhbHNlO1xuXG4gICAgICAvLyBEb24ndCBhZGQgdG8gdGhlIGJ1ZmZlciBpZiB3ZSd2ZSBkZWNvZGVkIHRvIGFuIGVtcHR5IHN0cmluZyBjaHVuayBhbmRcbiAgICAgIC8vIHdlJ3JlIG5vdCBpbiBvYmplY3QgbW9kZVxuICAgICAgaWYgKCFza2lwQWRkKSB7XG4gICAgICAgIC8vIGlmIHdlIHdhbnQgdGhlIGRhdGEgbm93LCBqdXN0IGVtaXQgaXQuXG4gICAgICAgIGlmIChzdGF0ZS5mbG93aW5nICYmIHN0YXRlLmxlbmd0aCA9PT0gMCAmJiAhc3RhdGUuc3luYykge1xuICAgICAgICAgIHN0cmVhbS5lbWl0KCdkYXRhJywgY2h1bmspO1xuICAgICAgICAgIHN0cmVhbS5yZWFkKDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgYnVmZmVyIGluZm8uXG4gICAgICAgICAgc3RhdGUubGVuZ3RoICs9IHN0YXRlLm9iamVjdE1vZGUgPyAxIDogY2h1bmsubGVuZ3RoO1xuICAgICAgICAgIGlmIChhZGRUb0Zyb250KSBzdGF0ZS5idWZmZXIudW5zaGlmdChjaHVuayk7ZWxzZSBzdGF0ZS5idWZmZXIucHVzaChjaHVuayk7XG5cbiAgICAgICAgICBpZiAoc3RhdGUubmVlZFJlYWRhYmxlKSBlbWl0UmVhZGFibGUoc3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtYXliZVJlYWRNb3JlKHN0cmVhbSwgc3RhdGUpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghYWRkVG9Gcm9udCkge1xuICAgIHN0YXRlLnJlYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBuZWVkTW9yZURhdGEoc3RhdGUpO1xufVxuXG4vLyBpZiBpdCdzIHBhc3QgdGhlIGhpZ2ggd2F0ZXIgbWFyaywgd2UgY2FuIHB1c2ggaW4gc29tZSBtb3JlLlxuLy8gQWxzbywgaWYgd2UgaGF2ZSBubyBkYXRhIHlldCwgd2UgY2FuIHN0YW5kIHNvbWVcbi8vIG1vcmUgYnl0ZXMuICBUaGlzIGlzIHRvIHdvcmsgYXJvdW5kIGNhc2VzIHdoZXJlIGh3bT0wLFxuLy8gc3VjaCBhcyB0aGUgcmVwbC4gIEFsc28sIGlmIHRoZSBwdXNoKCkgdHJpZ2dlcmVkIGFcbi8vIHJlYWRhYmxlIGV2ZW50LCBhbmQgdGhlIHVzZXIgY2FsbGVkIHJlYWQobGFyZ2VOdW1iZXIpIHN1Y2ggdGhhdFxuLy8gbmVlZFJlYWRhYmxlIHdhcyBzZXQsIHRoZW4gd2Ugb3VnaHQgdG8gcHVzaCBtb3JlLCBzbyB0aGF0IGFub3RoZXJcbi8vICdyZWFkYWJsZScgZXZlbnQgd2lsbCBiZSB0cmlnZ2VyZWQuXG5mdW5jdGlvbiBuZWVkTW9yZURhdGEoc3RhdGUpIHtcbiAgcmV0dXJuICFzdGF0ZS5lbmRlZCAmJiAoc3RhdGUubmVlZFJlYWRhYmxlIHx8IHN0YXRlLmxlbmd0aCA8IHN0YXRlLmhpZ2hXYXRlck1hcmsgfHwgc3RhdGUubGVuZ3RoID09PSAwKTtcbn1cblxuLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG5SZWFkYWJsZS5wcm90b3R5cGUuc2V0RW5jb2RpbmcgPSBmdW5jdGlvbiAoZW5jKSB7XG4gIGlmICghU3RyaW5nRGVjb2RlcikgU3RyaW5nRGVjb2RlciA9IHJlcXVpcmUoJ3N0cmluZ19kZWNvZGVyLycpLlN0cmluZ0RlY29kZXI7XG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVjb2RlciA9IG5ldyBTdHJpbmdEZWNvZGVyKGVuYyk7XG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUuZW5jb2RpbmcgPSBlbmM7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gRG9uJ3QgcmFpc2UgdGhlIGh3bSA+IDhNQlxudmFyIE1BWF9IV00gPSAweDgwMDAwMDtcbmZ1bmN0aW9uIGNvbXB1dGVOZXdIaWdoV2F0ZXJNYXJrKG4pIHtcbiAgaWYgKG4gPj0gTUFYX0hXTSkge1xuICAgIG4gPSBNQVhfSFdNO1xuICB9IGVsc2Uge1xuICAgIC8vIEdldCB0aGUgbmV4dCBoaWdoZXN0IHBvd2VyIG9mIDIgdG8gcHJldmVudCBpbmNyZWFzaW5nIGh3bSBleGNlc3NpdmVseSBpblxuICAgIC8vIHRpbnkgYW1vdW50c1xuICAgIG4tLTtcbiAgICBuIHw9IG4gPj4+IDE7XG4gICAgbiB8PSBuID4+PiAyO1xuICAgIG4gfD0gbiA+Pj4gNDtcbiAgICBuIHw9IG4gPj4+IDg7XG4gICAgbiB8PSBuID4+PiAxNjtcbiAgICBuKys7XG4gIH1cbiAgcmV0dXJuIG47XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgZGVzaWduZWQgdG8gYmUgaW5saW5hYmxlLCBzbyBwbGVhc2UgdGFrZSBjYXJlIHdoZW4gbWFraW5nXG4vLyBjaGFuZ2VzIHRvIHRoZSBmdW5jdGlvbiBib2R5LlxuZnVuY3Rpb24gaG93TXVjaFRvUmVhZChuLCBzdGF0ZSkge1xuICBpZiAobiA8PSAwIHx8IHN0YXRlLmxlbmd0aCA9PT0gMCAmJiBzdGF0ZS5lbmRlZCkgcmV0dXJuIDA7XG4gIGlmIChzdGF0ZS5vYmplY3RNb2RlKSByZXR1cm4gMTtcbiAgaWYgKG4gIT09IG4pIHtcbiAgICAvLyBPbmx5IGZsb3cgb25lIGJ1ZmZlciBhdCBhIHRpbWVcbiAgICBpZiAoc3RhdGUuZmxvd2luZyAmJiBzdGF0ZS5sZW5ndGgpIHJldHVybiBzdGF0ZS5idWZmZXIuaGVhZC5kYXRhLmxlbmd0aDtlbHNlIHJldHVybiBzdGF0ZS5sZW5ndGg7XG4gIH1cbiAgLy8gSWYgd2UncmUgYXNraW5nIGZvciBtb3JlIHRoYW4gdGhlIGN1cnJlbnQgaHdtLCB0aGVuIHJhaXNlIHRoZSBod20uXG4gIGlmIChuID4gc3RhdGUuaGlnaFdhdGVyTWFyaykgc3RhdGUuaGlnaFdhdGVyTWFyayA9IGNvbXB1dGVOZXdIaWdoV2F0ZXJNYXJrKG4pO1xuICBpZiAobiA8PSBzdGF0ZS5sZW5ndGgpIHJldHVybiBuO1xuICAvLyBEb24ndCBoYXZlIGVub3VnaFxuICBpZiAoIXN0YXRlLmVuZGVkKSB7XG4gICAgc3RhdGUubmVlZFJlYWRhYmxlID0gdHJ1ZTtcbiAgICByZXR1cm4gMDtcbiAgfVxuICByZXR1cm4gc3RhdGUubGVuZ3RoO1xufVxuXG4vLyB5b3UgY2FuIG92ZXJyaWRlIGVpdGhlciB0aGlzIG1ldGhvZCwgb3IgdGhlIGFzeW5jIF9yZWFkKG4pIGJlbG93LlxuUmVhZGFibGUucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiAobikge1xuICBkZWJ1ZygncmVhZCcsIG4pO1xuICBuID0gcGFyc2VJbnQobiwgMTApO1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICB2YXIgbk9yaWcgPSBuO1xuXG4gIGlmIChuICE9PSAwKSBzdGF0ZS5lbWl0dGVkUmVhZGFibGUgPSBmYWxzZTtcblxuICAvLyBpZiB3ZSdyZSBkb2luZyByZWFkKDApIHRvIHRyaWdnZXIgYSByZWFkYWJsZSBldmVudCwgYnV0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhIGJ1bmNoIG9mIGRhdGEgaW4gdGhlIGJ1ZmZlciwgdGhlbiBqdXN0IHRyaWdnZXJcbiAgLy8gdGhlICdyZWFkYWJsZScgZXZlbnQgYW5kIG1vdmUgb24uXG4gIGlmIChuID09PSAwICYmIHN0YXRlLm5lZWRSZWFkYWJsZSAmJiAoc3RhdGUubGVuZ3RoID49IHN0YXRlLmhpZ2hXYXRlck1hcmsgfHwgc3RhdGUuZW5kZWQpKSB7XG4gICAgZGVidWcoJ3JlYWQ6IGVtaXRSZWFkYWJsZScsIHN0YXRlLmxlbmd0aCwgc3RhdGUuZW5kZWQpO1xuICAgIGlmIChzdGF0ZS5sZW5ndGggPT09IDAgJiYgc3RhdGUuZW5kZWQpIGVuZFJlYWRhYmxlKHRoaXMpO2Vsc2UgZW1pdFJlYWRhYmxlKHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbiA9IGhvd011Y2hUb1JlYWQobiwgc3RhdGUpO1xuXG4gIC8vIGlmIHdlJ3ZlIGVuZGVkLCBhbmQgd2UncmUgbm93IGNsZWFyLCB0aGVuIGZpbmlzaCBpdCB1cC5cbiAgaWYgKG4gPT09IDAgJiYgc3RhdGUuZW5kZWQpIHtcbiAgICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSBlbmRSZWFkYWJsZSh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIEFsbCB0aGUgYWN0dWFsIGNodW5rIGdlbmVyYXRpb24gbG9naWMgbmVlZHMgdG8gYmVcbiAgLy8gKmJlbG93KiB0aGUgY2FsbCB0byBfcmVhZC4gIFRoZSByZWFzb24gaXMgdGhhdCBpbiBjZXJ0YWluXG4gIC8vIHN5bnRoZXRpYyBzdHJlYW0gY2FzZXMsIHN1Y2ggYXMgcGFzc3Rocm91Z2ggc3RyZWFtcywgX3JlYWRcbiAgLy8gbWF5IGJlIGEgY29tcGxldGVseSBzeW5jaHJvbm91cyBvcGVyYXRpb24gd2hpY2ggbWF5IGNoYW5nZVxuICAvLyB0aGUgc3RhdGUgb2YgdGhlIHJlYWQgYnVmZmVyLCBwcm92aWRpbmcgZW5vdWdoIGRhdGEgd2hlblxuICAvLyBiZWZvcmUgdGhlcmUgd2FzICpub3QqIGVub3VnaC5cbiAgLy9cbiAgLy8gU28sIHRoZSBzdGVwcyBhcmU6XG4gIC8vIDEuIEZpZ3VyZSBvdXQgd2hhdCB0aGUgc3RhdGUgb2YgdGhpbmdzIHdpbGwgYmUgYWZ0ZXIgd2UgZG9cbiAgLy8gYSByZWFkIGZyb20gdGhlIGJ1ZmZlci5cbiAgLy9cbiAgLy8gMi4gSWYgdGhhdCByZXN1bHRpbmcgc3RhdGUgd2lsbCB0cmlnZ2VyIGEgX3JlYWQsIHRoZW4gY2FsbCBfcmVhZC5cbiAgLy8gTm90ZSB0aGF0IHRoaXMgbWF5IGJlIGFzeW5jaHJvbm91cywgb3Igc3luY2hyb25vdXMuICBZZXMsIGl0IGlzXG4gIC8vIGRlZXBseSB1Z2x5IHRvIHdyaXRlIEFQSXMgdGhpcyB3YXksIGJ1dCB0aGF0IHN0aWxsIGRvZXNuJ3QgbWVhblxuICAvLyB0aGF0IHRoZSBSZWFkYWJsZSBjbGFzcyBzaG91bGQgYmVoYXZlIGltcHJvcGVybHksIGFzIHN0cmVhbXMgYXJlXG4gIC8vIGRlc2lnbmVkIHRvIGJlIHN5bmMvYXN5bmMgYWdub3N0aWMuXG4gIC8vIFRha2Ugbm90ZSBpZiB0aGUgX3JlYWQgY2FsbCBpcyBzeW5jIG9yIGFzeW5jIChpZSwgaWYgdGhlIHJlYWQgY2FsbFxuICAvLyBoYXMgcmV0dXJuZWQgeWV0KSwgc28gdGhhdCB3ZSBrbm93IHdoZXRoZXIgb3Igbm90IGl0J3Mgc2FmZSB0byBlbWl0XG4gIC8vICdyZWFkYWJsZScgZXRjLlxuICAvL1xuICAvLyAzLiBBY3R1YWxseSBwdWxsIHRoZSByZXF1ZXN0ZWQgY2h1bmtzIG91dCBvZiB0aGUgYnVmZmVyIGFuZCByZXR1cm4uXG5cbiAgLy8gaWYgd2UgbmVlZCBhIHJlYWRhYmxlIGV2ZW50LCB0aGVuIHdlIG5lZWQgdG8gZG8gc29tZSByZWFkaW5nLlxuICB2YXIgZG9SZWFkID0gc3RhdGUubmVlZFJlYWRhYmxlO1xuICBkZWJ1ZygnbmVlZCByZWFkYWJsZScsIGRvUmVhZCk7XG5cbiAgLy8gaWYgd2UgY3VycmVudGx5IGhhdmUgbGVzcyB0aGFuIHRoZSBoaWdoV2F0ZXJNYXJrLCB0aGVuIGFsc28gcmVhZCBzb21lXG4gIGlmIChzdGF0ZS5sZW5ndGggPT09IDAgfHwgc3RhdGUubGVuZ3RoIC0gbiA8IHN0YXRlLmhpZ2hXYXRlck1hcmspIHtcbiAgICBkb1JlYWQgPSB0cnVlO1xuICAgIGRlYnVnKCdsZW5ndGggbGVzcyB0aGFuIHdhdGVybWFyaycsIGRvUmVhZCk7XG4gIH1cblxuICAvLyBob3dldmVyLCBpZiB3ZSd2ZSBlbmRlZCwgdGhlbiB0aGVyZSdzIG5vIHBvaW50LCBhbmQgaWYgd2UncmUgYWxyZWFkeVxuICAvLyByZWFkaW5nLCB0aGVuIGl0J3MgdW5uZWNlc3NhcnkuXG4gIGlmIChzdGF0ZS5lbmRlZCB8fCBzdGF0ZS5yZWFkaW5nKSB7XG4gICAgZG9SZWFkID0gZmFsc2U7XG4gICAgZGVidWcoJ3JlYWRpbmcgb3IgZW5kZWQnLCBkb1JlYWQpO1xuICB9IGVsc2UgaWYgKGRvUmVhZCkge1xuICAgIGRlYnVnKCdkbyByZWFkJyk7XG4gICAgc3RhdGUucmVhZGluZyA9IHRydWU7XG4gICAgc3RhdGUuc3luYyA9IHRydWU7XG4gICAgLy8gaWYgdGhlIGxlbmd0aCBpcyBjdXJyZW50bHkgemVybywgdGhlbiB3ZSAqbmVlZCogYSByZWFkYWJsZSBldmVudC5cbiAgICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSBzdGF0ZS5uZWVkUmVhZGFibGUgPSB0cnVlO1xuICAgIC8vIGNhbGwgaW50ZXJuYWwgcmVhZCBtZXRob2RcbiAgICB0aGlzLl9yZWFkKHN0YXRlLmhpZ2hXYXRlck1hcmspO1xuICAgIHN0YXRlLnN5bmMgPSBmYWxzZTtcbiAgICAvLyBJZiBfcmVhZCBwdXNoZWQgZGF0YSBzeW5jaHJvbm91c2x5LCB0aGVuIGByZWFkaW5nYCB3aWxsIGJlIGZhbHNlLFxuICAgIC8vIGFuZCB3ZSBuZWVkIHRvIHJlLWV2YWx1YXRlIGhvdyBtdWNoIGRhdGEgd2UgY2FuIHJldHVybiB0byB0aGUgdXNlci5cbiAgICBpZiAoIXN0YXRlLnJlYWRpbmcpIG4gPSBob3dNdWNoVG9SZWFkKG5PcmlnLCBzdGF0ZSk7XG4gIH1cblxuICB2YXIgcmV0O1xuICBpZiAobiA+IDApIHJldCA9IGZyb21MaXN0KG4sIHN0YXRlKTtlbHNlIHJldCA9IG51bGw7XG5cbiAgaWYgKHJldCA9PT0gbnVsbCkge1xuICAgIHN0YXRlLm5lZWRSZWFkYWJsZSA9IHRydWU7XG4gICAgbiA9IDA7XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUubGVuZ3RoIC09IG47XG4gIH1cblxuICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBub3RoaW5nIGluIHRoZSBidWZmZXIsIHRoZW4gd2Ugd2FudCB0byBrbm93XG4gICAgLy8gYXMgc29vbiBhcyB3ZSAqZG8qIGdldCBzb21ldGhpbmcgaW50byB0aGUgYnVmZmVyLlxuICAgIGlmICghc3RhdGUuZW5kZWQpIHN0YXRlLm5lZWRSZWFkYWJsZSA9IHRydWU7XG5cbiAgICAvLyBJZiB3ZSB0cmllZCB0byByZWFkKCkgcGFzdCB0aGUgRU9GLCB0aGVuIGVtaXQgZW5kIG9uIHRoZSBuZXh0IHRpY2suXG4gICAgaWYgKG5PcmlnICE9PSBuICYmIHN0YXRlLmVuZGVkKSBlbmRSZWFkYWJsZSh0aGlzKTtcbiAgfVxuXG4gIGlmIChyZXQgIT09IG51bGwpIHRoaXMuZW1pdCgnZGF0YScsIHJldCk7XG5cbiAgcmV0dXJuIHJldDtcbn07XG5cbmZ1bmN0aW9uIGNodW5rSW52YWxpZChzdGF0ZSwgY2h1bmspIHtcbiAgdmFyIGVyID0gbnVsbDtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoY2h1bmspICYmIHR5cGVvZiBjaHVuayAhPT0gJ3N0cmluZycgJiYgY2h1bmsgIT09IG51bGwgJiYgY2h1bmsgIT09IHVuZGVmaW5lZCAmJiAhc3RhdGUub2JqZWN0TW9kZSkge1xuICAgIGVyID0gbmV3IFR5cGVFcnJvcignSW52YWxpZCBub24tc3RyaW5nL2J1ZmZlciBjaHVuaycpO1xuICB9XG4gIHJldHVybiBlcjtcbn1cblxuZnVuY3Rpb24gb25Fb2ZDaHVuayhzdHJlYW0sIHN0YXRlKSB7XG4gIGlmIChzdGF0ZS5lbmRlZCkgcmV0dXJuO1xuICBpZiAoc3RhdGUuZGVjb2Rlcikge1xuICAgIHZhciBjaHVuayA9IHN0YXRlLmRlY29kZXIuZW5kKCk7XG4gICAgaWYgKGNodW5rICYmIGNodW5rLmxlbmd0aCkge1xuICAgICAgc3RhdGUuYnVmZmVyLnB1c2goY2h1bmspO1xuICAgICAgc3RhdGUubGVuZ3RoICs9IHN0YXRlLm9iamVjdE1vZGUgPyAxIDogY2h1bmsubGVuZ3RoO1xuICAgIH1cbiAgfVxuICBzdGF0ZS5lbmRlZCA9IHRydWU7XG5cbiAgLy8gZW1pdCAncmVhZGFibGUnIG5vdyB0byBtYWtlIHN1cmUgaXQgZ2V0cyBwaWNrZWQgdXAuXG4gIGVtaXRSZWFkYWJsZShzdHJlYW0pO1xufVxuXG4vLyBEb24ndCBlbWl0IHJlYWRhYmxlIHJpZ2h0IGF3YXkgaW4gc3luYyBtb2RlLCBiZWNhdXNlIHRoaXMgY2FuIHRyaWdnZXJcbi8vIGFub3RoZXIgcmVhZCgpIGNhbGwgPT4gc3RhY2sgb3ZlcmZsb3cuICBUaGlzIHdheSwgaXQgbWlnaHQgdHJpZ2dlclxuLy8gYSBuZXh0VGljayByZWN1cnNpb24gd2FybmluZywgYnV0IHRoYXQncyBub3Qgc28gYmFkLlxuZnVuY3Rpb24gZW1pdFJlYWRhYmxlKHN0cmVhbSkge1xuICB2YXIgc3RhdGUgPSBzdHJlYW0uX3JlYWRhYmxlU3RhdGU7XG4gIHN0YXRlLm5lZWRSZWFkYWJsZSA9IGZhbHNlO1xuICBpZiAoIXN0YXRlLmVtaXR0ZWRSZWFkYWJsZSkge1xuICAgIGRlYnVnKCdlbWl0UmVhZGFibGUnLCBzdGF0ZS5mbG93aW5nKTtcbiAgICBzdGF0ZS5lbWl0dGVkUmVhZGFibGUgPSB0cnVlO1xuICAgIGlmIChzdGF0ZS5zeW5jKSBwcm9jZXNzTmV4dFRpY2soZW1pdFJlYWRhYmxlXywgc3RyZWFtKTtlbHNlIGVtaXRSZWFkYWJsZV8oc3RyZWFtKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbWl0UmVhZGFibGVfKHN0cmVhbSkge1xuICBkZWJ1ZygnZW1pdCByZWFkYWJsZScpO1xuICBzdHJlYW0uZW1pdCgncmVhZGFibGUnKTtcbiAgZmxvdyhzdHJlYW0pO1xufVxuXG4vLyBhdCB0aGlzIHBvaW50LCB0aGUgdXNlciBoYXMgcHJlc3VtYWJseSBzZWVuIHRoZSAncmVhZGFibGUnIGV2ZW50LFxuLy8gYW5kIGNhbGxlZCByZWFkKCkgdG8gY29uc3VtZSBzb21lIGRhdGEuICB0aGF0IG1heSBoYXZlIHRyaWdnZXJlZFxuLy8gaW4gdHVybiBhbm90aGVyIF9yZWFkKG4pIGNhbGwsIGluIHdoaWNoIGNhc2UgcmVhZGluZyA9IHRydWUgaWZcbi8vIGl0J3MgaW4gcHJvZ3Jlc3MuXG4vLyBIb3dldmVyLCBpZiB3ZSdyZSBub3QgZW5kZWQsIG9yIHJlYWRpbmcsIGFuZCB0aGUgbGVuZ3RoIDwgaHdtLFxuLy8gdGhlbiBnbyBhaGVhZCBhbmQgdHJ5IHRvIHJlYWQgc29tZSBtb3JlIHByZWVtcHRpdmVseS5cbmZ1bmN0aW9uIG1heWJlUmVhZE1vcmUoc3RyZWFtLCBzdGF0ZSkge1xuICBpZiAoIXN0YXRlLnJlYWRpbmdNb3JlKSB7XG4gICAgc3RhdGUucmVhZGluZ01vcmUgPSB0cnVlO1xuICAgIHByb2Nlc3NOZXh0VGljayhtYXliZVJlYWRNb3JlXywgc3RyZWFtLCBzdGF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF5YmVSZWFkTW9yZV8oc3RyZWFtLCBzdGF0ZSkge1xuICB2YXIgbGVuID0gc3RhdGUubGVuZ3RoO1xuICB3aGlsZSAoIXN0YXRlLnJlYWRpbmcgJiYgIXN0YXRlLmZsb3dpbmcgJiYgIXN0YXRlLmVuZGVkICYmIHN0YXRlLmxlbmd0aCA8IHN0YXRlLmhpZ2hXYXRlck1hcmspIHtcbiAgICBkZWJ1ZygnbWF5YmVSZWFkTW9yZSByZWFkIDAnKTtcbiAgICBzdHJlYW0ucmVhZCgwKTtcbiAgICBpZiAobGVuID09PSBzdGF0ZS5sZW5ndGgpXG4gICAgICAvLyBkaWRuJ3QgZ2V0IGFueSBkYXRhLCBzdG9wIHNwaW5uaW5nLlxuICAgICAgYnJlYWs7ZWxzZSBsZW4gPSBzdGF0ZS5sZW5ndGg7XG4gIH1cbiAgc3RhdGUucmVhZGluZ01vcmUgPSBmYWxzZTtcbn1cblxuLy8gYWJzdHJhY3QgbWV0aG9kLiAgdG8gYmUgb3ZlcnJpZGRlbiBpbiBzcGVjaWZpYyBpbXBsZW1lbnRhdGlvbiBjbGFzc2VzLlxuLy8gY2FsbCBjYihlciwgZGF0YSkgd2hlcmUgZGF0YSBpcyA8PSBuIGluIGxlbmd0aC5cbi8vIGZvciB2aXJ0dWFsIChub24tc3RyaW5nLCBub24tYnVmZmVyKSBzdHJlYW1zLCBcImxlbmd0aFwiIGlzIHNvbWV3aGF0XG4vLyBhcmJpdHJhcnksIGFuZCBwZXJoYXBzIG5vdCB2ZXJ5IG1lYW5pbmdmdWwuXG5SZWFkYWJsZS5wcm90b3R5cGUuX3JlYWQgPSBmdW5jdGlvbiAobikge1xuICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKCdfcmVhZCgpIGlzIG5vdCBpbXBsZW1lbnRlZCcpKTtcbn07XG5cblJlYWRhYmxlLnByb3RvdHlwZS5waXBlID0gZnVuY3Rpb24gKGRlc3QsIHBpcGVPcHRzKSB7XG4gIHZhciBzcmMgPSB0aGlzO1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuXG4gIHN3aXRjaCAoc3RhdGUucGlwZXNDb3VudCkge1xuICAgIGNhc2UgMDpcbiAgICAgIHN0YXRlLnBpcGVzID0gZGVzdDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIHN0YXRlLnBpcGVzID0gW3N0YXRlLnBpcGVzLCBkZXN0XTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBzdGF0ZS5waXBlcy5wdXNoKGRlc3QpO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgc3RhdGUucGlwZXNDb3VudCArPSAxO1xuICBkZWJ1ZygncGlwZSBjb3VudD0lZCBvcHRzPSVqJywgc3RhdGUucGlwZXNDb3VudCwgcGlwZU9wdHMpO1xuXG4gIHZhciBkb0VuZCA9ICghcGlwZU9wdHMgfHwgcGlwZU9wdHMuZW5kICE9PSBmYWxzZSkgJiYgZGVzdCAhPT0gcHJvY2Vzcy5zdGRvdXQgJiYgZGVzdCAhPT0gcHJvY2Vzcy5zdGRlcnI7XG5cbiAgdmFyIGVuZEZuID0gZG9FbmQgPyBvbmVuZCA6IGNsZWFudXA7XG4gIGlmIChzdGF0ZS5lbmRFbWl0dGVkKSBwcm9jZXNzTmV4dFRpY2soZW5kRm4pO2Vsc2Ugc3JjLm9uY2UoJ2VuZCcsIGVuZEZuKTtcblxuICBkZXN0Lm9uKCd1bnBpcGUnLCBvbnVucGlwZSk7XG4gIGZ1bmN0aW9uIG9udW5waXBlKHJlYWRhYmxlKSB7XG4gICAgZGVidWcoJ29udW5waXBlJyk7XG4gICAgaWYgKHJlYWRhYmxlID09PSBzcmMpIHtcbiAgICAgIGNsZWFudXAoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbmVuZCgpIHtcbiAgICBkZWJ1Zygnb25lbmQnKTtcbiAgICBkZXN0LmVuZCgpO1xuICB9XG5cbiAgLy8gd2hlbiB0aGUgZGVzdCBkcmFpbnMsIGl0IHJlZHVjZXMgdGhlIGF3YWl0RHJhaW4gY291bnRlclxuICAvLyBvbiB0aGUgc291cmNlLiAgVGhpcyB3b3VsZCBiZSBtb3JlIGVsZWdhbnQgd2l0aCBhIC5vbmNlKClcbiAgLy8gaGFuZGxlciBpbiBmbG93KCksIGJ1dCBhZGRpbmcgYW5kIHJlbW92aW5nIHJlcGVhdGVkbHkgaXNcbiAgLy8gdG9vIHNsb3cuXG4gIHZhciBvbmRyYWluID0gcGlwZU9uRHJhaW4oc3JjKTtcbiAgZGVzdC5vbignZHJhaW4nLCBvbmRyYWluKTtcblxuICB2YXIgY2xlYW5lZFVwID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgZGVidWcoJ2NsZWFudXAnKTtcbiAgICAvLyBjbGVhbnVwIGV2ZW50IGhhbmRsZXJzIG9uY2UgdGhlIHBpcGUgaXMgYnJva2VuXG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmNsb3NlKTtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignZHJhaW4nLCBvbmRyYWluKTtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ3VucGlwZScsIG9udW5waXBlKTtcbiAgICBzcmMucmVtb3ZlTGlzdGVuZXIoJ2VuZCcsIG9uZW5kKTtcbiAgICBzcmMucmVtb3ZlTGlzdGVuZXIoJ2VuZCcsIGNsZWFudXApO1xuICAgIHNyYy5yZW1vdmVMaXN0ZW5lcignZGF0YScsIG9uZGF0YSk7XG5cbiAgICBjbGVhbmVkVXAgPSB0cnVlO1xuXG4gICAgLy8gaWYgdGhlIHJlYWRlciBpcyB3YWl0aW5nIGZvciBhIGRyYWluIGV2ZW50IGZyb20gdGhpc1xuICAgIC8vIHNwZWNpZmljIHdyaXRlciwgdGhlbiBpdCB3b3VsZCBjYXVzZSBpdCB0byBuZXZlciBzdGFydFxuICAgIC8vIGZsb3dpbmcgYWdhaW4uXG4gICAgLy8gU28sIGlmIHRoaXMgaXMgYXdhaXRpbmcgYSBkcmFpbiwgdGhlbiB3ZSBqdXN0IGNhbGwgaXQgbm93LlxuICAgIC8vIElmIHdlIGRvbid0IGtub3csIHRoZW4gYXNzdW1lIHRoYXQgd2UgYXJlIHdhaXRpbmcgZm9yIG9uZS5cbiAgICBpZiAoc3RhdGUuYXdhaXREcmFpbiAmJiAoIWRlc3QuX3dyaXRhYmxlU3RhdGUgfHwgZGVzdC5fd3JpdGFibGVTdGF0ZS5uZWVkRHJhaW4pKSBvbmRyYWluKCk7XG4gIH1cblxuICAvLyBJZiB0aGUgdXNlciBwdXNoZXMgbW9yZSBkYXRhIHdoaWxlIHdlJ3JlIHdyaXRpbmcgdG8gZGVzdCB0aGVuIHdlJ2xsIGVuZCB1cFxuICAvLyBpbiBvbmRhdGEgYWdhaW4uIEhvd2V2ZXIsIHdlIG9ubHkgd2FudCB0byBpbmNyZWFzZSBhd2FpdERyYWluIG9uY2UgYmVjYXVzZVxuICAvLyBkZXN0IHdpbGwgb25seSBlbWl0IG9uZSAnZHJhaW4nIGV2ZW50IGZvciB0aGUgbXVsdGlwbGUgd3JpdGVzLlxuICAvLyA9PiBJbnRyb2R1Y2UgYSBndWFyZCBvbiBpbmNyZWFzaW5nIGF3YWl0RHJhaW4uXG4gIHZhciBpbmNyZWFzZWRBd2FpdERyYWluID0gZmFsc2U7XG4gIHNyYy5vbignZGF0YScsIG9uZGF0YSk7XG4gIGZ1bmN0aW9uIG9uZGF0YShjaHVuaykge1xuICAgIGRlYnVnKCdvbmRhdGEnKTtcbiAgICBpbmNyZWFzZWRBd2FpdERyYWluID0gZmFsc2U7XG4gICAgdmFyIHJldCA9IGRlc3Qud3JpdGUoY2h1bmspO1xuICAgIGlmIChmYWxzZSA9PT0gcmV0ICYmICFpbmNyZWFzZWRBd2FpdERyYWluKSB7XG4gICAgICAvLyBJZiB0aGUgdXNlciB1bnBpcGVkIGR1cmluZyBgZGVzdC53cml0ZSgpYCwgaXQgaXMgcG9zc2libGVcbiAgICAgIC8vIHRvIGdldCBzdHVjayBpbiBhIHBlcm1hbmVudGx5IHBhdXNlZCBzdGF0ZSBpZiB0aGF0IHdyaXRlXG4gICAgICAvLyBhbHNvIHJldHVybmVkIGZhbHNlLlxuICAgICAgLy8gPT4gQ2hlY2sgd2hldGhlciBgZGVzdGAgaXMgc3RpbGwgYSBwaXBpbmcgZGVzdGluYXRpb24uXG4gICAgICBpZiAoKHN0YXRlLnBpcGVzQ291bnQgPT09IDEgJiYgc3RhdGUucGlwZXMgPT09IGRlc3QgfHwgc3RhdGUucGlwZXNDb3VudCA+IDEgJiYgaW5kZXhPZihzdGF0ZS5waXBlcywgZGVzdCkgIT09IC0xKSAmJiAhY2xlYW5lZFVwKSB7XG4gICAgICAgIGRlYnVnKCdmYWxzZSB3cml0ZSByZXNwb25zZSwgcGF1c2UnLCBzcmMuX3JlYWRhYmxlU3RhdGUuYXdhaXREcmFpbik7XG4gICAgICAgIHNyYy5fcmVhZGFibGVTdGF0ZS5hd2FpdERyYWluKys7XG4gICAgICAgIGluY3JlYXNlZEF3YWl0RHJhaW4gPSB0cnVlO1xuICAgICAgfVxuICAgICAgc3JjLnBhdXNlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIGRlc3QgaGFzIGFuIGVycm9yLCB0aGVuIHN0b3AgcGlwaW5nIGludG8gaXQuXG4gIC8vIGhvd2V2ZXIsIGRvbid0IHN1cHByZXNzIHRoZSB0aHJvd2luZyBiZWhhdmlvciBmb3IgdGhpcy5cbiAgZnVuY3Rpb24gb25lcnJvcihlcikge1xuICAgIGRlYnVnKCdvbmVycm9yJywgZXIpO1xuICAgIHVucGlwZSgpO1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcik7XG4gICAgaWYgKEVFbGlzdGVuZXJDb3VudChkZXN0LCAnZXJyb3InKSA9PT0gMCkgZGVzdC5lbWl0KCdlcnJvcicsIGVyKTtcbiAgfVxuXG4gIC8vIE1ha2Ugc3VyZSBvdXIgZXJyb3IgaGFuZGxlciBpcyBhdHRhY2hlZCBiZWZvcmUgdXNlcmxhbmQgb25lcy5cbiAgcHJlcGVuZExpc3RlbmVyKGRlc3QsICdlcnJvcicsIG9uZXJyb3IpO1xuXG4gIC8vIEJvdGggY2xvc2UgYW5kIGZpbmlzaCBzaG91bGQgdHJpZ2dlciB1bnBpcGUsIGJ1dCBvbmx5IG9uY2UuXG4gIGZ1bmN0aW9uIG9uY2xvc2UoKSB7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignZmluaXNoJywgb25maW5pc2gpO1xuICAgIHVucGlwZSgpO1xuICB9XG4gIGRlc3Qub25jZSgnY2xvc2UnLCBvbmNsb3NlKTtcbiAgZnVuY3Rpb24gb25maW5pc2goKSB7XG4gICAgZGVidWcoJ29uZmluaXNoJyk7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmNsb3NlKTtcbiAgICB1bnBpcGUoKTtcbiAgfVxuICBkZXN0Lm9uY2UoJ2ZpbmlzaCcsIG9uZmluaXNoKTtcblxuICBmdW5jdGlvbiB1bnBpcGUoKSB7XG4gICAgZGVidWcoJ3VucGlwZScpO1xuICAgIHNyYy51bnBpcGUoZGVzdCk7XG4gIH1cblxuICAvLyB0ZWxsIHRoZSBkZXN0IHRoYXQgaXQncyBiZWluZyBwaXBlZCB0b1xuICBkZXN0LmVtaXQoJ3BpcGUnLCBzcmMpO1xuXG4gIC8vIHN0YXJ0IHRoZSBmbG93IGlmIGl0IGhhc24ndCBiZWVuIHN0YXJ0ZWQgYWxyZWFkeS5cbiAgaWYgKCFzdGF0ZS5mbG93aW5nKSB7XG4gICAgZGVidWcoJ3BpcGUgcmVzdW1lJyk7XG4gICAgc3JjLnJlc3VtZSgpO1xuICB9XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5mdW5jdGlvbiBwaXBlT25EcmFpbihzcmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdGUgPSBzcmMuX3JlYWRhYmxlU3RhdGU7XG4gICAgZGVidWcoJ3BpcGVPbkRyYWluJywgc3RhdGUuYXdhaXREcmFpbik7XG4gICAgaWYgKHN0YXRlLmF3YWl0RHJhaW4pIHN0YXRlLmF3YWl0RHJhaW4tLTtcbiAgICBpZiAoc3RhdGUuYXdhaXREcmFpbiA9PT0gMCAmJiBFRWxpc3RlbmVyQ291bnQoc3JjLCAnZGF0YScpKSB7XG4gICAgICBzdGF0ZS5mbG93aW5nID0gdHJ1ZTtcbiAgICAgIGZsb3coc3JjKTtcbiAgICB9XG4gIH07XG59XG5cblJlYWRhYmxlLnByb3RvdHlwZS51bnBpcGUgPSBmdW5jdGlvbiAoZGVzdCkge1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuXG4gIC8vIGlmIHdlJ3JlIG5vdCBwaXBpbmcgYW55d2hlcmUsIHRoZW4gZG8gbm90aGluZy5cbiAgaWYgKHN0YXRlLnBpcGVzQ291bnQgPT09IDApIHJldHVybiB0aGlzO1xuXG4gIC8vIGp1c3Qgb25lIGRlc3RpbmF0aW9uLiAgbW9zdCBjb21tb24gY2FzZS5cbiAgaWYgKHN0YXRlLnBpcGVzQ291bnQgPT09IDEpIHtcbiAgICAvLyBwYXNzZWQgaW4gb25lLCBidXQgaXQncyBub3QgdGhlIHJpZ2h0IG9uZS5cbiAgICBpZiAoZGVzdCAmJiBkZXN0ICE9PSBzdGF0ZS5waXBlcykgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAoIWRlc3QpIGRlc3QgPSBzdGF0ZS5waXBlcztcblxuICAgIC8vIGdvdCBhIG1hdGNoLlxuICAgIHN0YXRlLnBpcGVzID0gbnVsbDtcbiAgICBzdGF0ZS5waXBlc0NvdW50ID0gMDtcbiAgICBzdGF0ZS5mbG93aW5nID0gZmFsc2U7XG4gICAgaWYgKGRlc3QpIGRlc3QuZW1pdCgndW5waXBlJywgdGhpcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBzbG93IGNhc2UuIG11bHRpcGxlIHBpcGUgZGVzdGluYXRpb25zLlxuXG4gIGlmICghZGVzdCkge1xuICAgIC8vIHJlbW92ZSBhbGwuXG4gICAgdmFyIGRlc3RzID0gc3RhdGUucGlwZXM7XG4gICAgdmFyIGxlbiA9IHN0YXRlLnBpcGVzQ291bnQ7XG4gICAgc3RhdGUucGlwZXMgPSBudWxsO1xuICAgIHN0YXRlLnBpcGVzQ291bnQgPSAwO1xuICAgIHN0YXRlLmZsb3dpbmcgPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGRlc3RzW2ldLmVtaXQoJ3VucGlwZScsIHRoaXMpO1xuICAgIH1yZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHRyeSB0byBmaW5kIHRoZSByaWdodCBvbmUuXG4gIHZhciBpbmRleCA9IGluZGV4T2Yoc3RhdGUucGlwZXMsIGRlc3QpO1xuICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm4gdGhpcztcblxuICBzdGF0ZS5waXBlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICBzdGF0ZS5waXBlc0NvdW50IC09IDE7XG4gIGlmIChzdGF0ZS5waXBlc0NvdW50ID09PSAxKSBzdGF0ZS5waXBlcyA9IHN0YXRlLnBpcGVzWzBdO1xuXG4gIGRlc3QuZW1pdCgndW5waXBlJywgdGhpcyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBzZXQgdXAgZGF0YSBldmVudHMgaWYgdGhleSBhcmUgYXNrZWQgZm9yXG4vLyBFbnN1cmUgcmVhZGFibGUgbGlzdGVuZXJzIGV2ZW50dWFsbHkgZ2V0IHNvbWV0aGluZ1xuUmVhZGFibGUucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGV2LCBmbikge1xuICB2YXIgcmVzID0gU3RyZWFtLnByb3RvdHlwZS5vbi5jYWxsKHRoaXMsIGV2LCBmbik7XG5cbiAgaWYgKGV2ID09PSAnZGF0YScpIHtcbiAgICAvLyBTdGFydCBmbG93aW5nIG9uIG5leHQgdGljayBpZiBzdHJlYW0gaXNuJ3QgZXhwbGljaXRseSBwYXVzZWRcbiAgICBpZiAodGhpcy5fcmVhZGFibGVTdGF0ZS5mbG93aW5nICE9PSBmYWxzZSkgdGhpcy5yZXN1bWUoKTtcbiAgfSBlbHNlIGlmIChldiA9PT0gJ3JlYWRhYmxlJykge1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuX3JlYWRhYmxlU3RhdGU7XG4gICAgaWYgKCFzdGF0ZS5lbmRFbWl0dGVkICYmICFzdGF0ZS5yZWFkYWJsZUxpc3RlbmluZykge1xuICAgICAgc3RhdGUucmVhZGFibGVMaXN0ZW5pbmcgPSBzdGF0ZS5uZWVkUmVhZGFibGUgPSB0cnVlO1xuICAgICAgc3RhdGUuZW1pdHRlZFJlYWRhYmxlID0gZmFsc2U7XG4gICAgICBpZiAoIXN0YXRlLnJlYWRpbmcpIHtcbiAgICAgICAgcHJvY2Vzc05leHRUaWNrKG5SZWFkaW5nTmV4dFRpY2ssIHRoaXMpO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5sZW5ndGgpIHtcbiAgICAgICAgZW1pdFJlYWRhYmxlKHRoaXMsIHN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblJlYWRhYmxlLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IFJlYWRhYmxlLnByb3RvdHlwZS5vbjtcblxuZnVuY3Rpb24gblJlYWRpbmdOZXh0VGljayhzZWxmKSB7XG4gIGRlYnVnKCdyZWFkYWJsZSBuZXh0dGljayByZWFkIDAnKTtcbiAgc2VsZi5yZWFkKDApO1xufVxuXG4vLyBwYXVzZSgpIGFuZCByZXN1bWUoKSBhcmUgcmVtbmFudHMgb2YgdGhlIGxlZ2FjeSByZWFkYWJsZSBzdHJlYW0gQVBJXG4vLyBJZiB0aGUgdXNlciB1c2VzIHRoZW0sIHRoZW4gc3dpdGNoIGludG8gb2xkIG1vZGUuXG5SZWFkYWJsZS5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICBpZiAoIXN0YXRlLmZsb3dpbmcpIHtcbiAgICBkZWJ1ZygncmVzdW1lJyk7XG4gICAgc3RhdGUuZmxvd2luZyA9IHRydWU7XG4gICAgcmVzdW1lKHRoaXMsIHN0YXRlKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIHJlc3VtZShzdHJlYW0sIHN0YXRlKSB7XG4gIGlmICghc3RhdGUucmVzdW1lU2NoZWR1bGVkKSB7XG4gICAgc3RhdGUucmVzdW1lU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICBwcm9jZXNzTmV4dFRpY2socmVzdW1lXywgc3RyZWFtLCBzdGF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzdW1lXyhzdHJlYW0sIHN0YXRlKSB7XG4gIGlmICghc3RhdGUucmVhZGluZykge1xuICAgIGRlYnVnKCdyZXN1bWUgcmVhZCAwJyk7XG4gICAgc3RyZWFtLnJlYWQoMCk7XG4gIH1cblxuICBzdGF0ZS5yZXN1bWVTY2hlZHVsZWQgPSBmYWxzZTtcbiAgc3RhdGUuYXdhaXREcmFpbiA9IDA7XG4gIHN0cmVhbS5lbWl0KCdyZXN1bWUnKTtcbiAgZmxvdyhzdHJlYW0pO1xuICBpZiAoc3RhdGUuZmxvd2luZyAmJiAhc3RhdGUucmVhZGluZykgc3RyZWFtLnJlYWQoMCk7XG59XG5cblJlYWRhYmxlLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ2NhbGwgcGF1c2UgZmxvd2luZz0laicsIHRoaXMuX3JlYWRhYmxlU3RhdGUuZmxvd2luZyk7XG4gIGlmIChmYWxzZSAhPT0gdGhpcy5fcmVhZGFibGVTdGF0ZS5mbG93aW5nKSB7XG4gICAgZGVidWcoJ3BhdXNlJyk7XG4gICAgdGhpcy5fcmVhZGFibGVTdGF0ZS5mbG93aW5nID0gZmFsc2U7XG4gICAgdGhpcy5lbWl0KCdwYXVzZScpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gZmxvdyhzdHJlYW0pIHtcbiAgdmFyIHN0YXRlID0gc3RyZWFtLl9yZWFkYWJsZVN0YXRlO1xuICBkZWJ1ZygnZmxvdycsIHN0YXRlLmZsb3dpbmcpO1xuICB3aGlsZSAoc3RhdGUuZmxvd2luZyAmJiBzdHJlYW0ucmVhZCgpICE9PSBudWxsKSB7fVxufVxuXG4vLyB3cmFwIGFuIG9sZC1zdHlsZSBzdHJlYW0gYXMgdGhlIGFzeW5jIGRhdGEgc291cmNlLlxuLy8gVGhpcyBpcyAqbm90KiBwYXJ0IG9mIHRoZSByZWFkYWJsZSBzdHJlYW0gaW50ZXJmYWNlLlxuLy8gSXQgaXMgYW4gdWdseSB1bmZvcnR1bmF0ZSBtZXNzIG9mIGhpc3RvcnkuXG5SZWFkYWJsZS5wcm90b3R5cGUud3JhcCA9IGZ1bmN0aW9uIChzdHJlYW0pIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgdmFyIHBhdXNlZCA9IGZhbHNlO1xuXG4gIHZhciBzZWxmID0gdGhpcztcbiAgc3RyZWFtLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgZGVidWcoJ3dyYXBwZWQgZW5kJyk7XG4gICAgaWYgKHN0YXRlLmRlY29kZXIgJiYgIXN0YXRlLmVuZGVkKSB7XG4gICAgICB2YXIgY2h1bmsgPSBzdGF0ZS5kZWNvZGVyLmVuZCgpO1xuICAgICAgaWYgKGNodW5rICYmIGNodW5rLmxlbmd0aCkgc2VsZi5wdXNoKGNodW5rKTtcbiAgICB9XG5cbiAgICBzZWxmLnB1c2gobnVsbCk7XG4gIH0pO1xuXG4gIHN0cmVhbS5vbignZGF0YScsIGZ1bmN0aW9uIChjaHVuaykge1xuICAgIGRlYnVnKCd3cmFwcGVkIGRhdGEnKTtcbiAgICBpZiAoc3RhdGUuZGVjb2RlcikgY2h1bmsgPSBzdGF0ZS5kZWNvZGVyLndyaXRlKGNodW5rKTtcblxuICAgIC8vIGRvbid0IHNraXAgb3ZlciBmYWxzeSB2YWx1ZXMgaW4gb2JqZWN0TW9kZVxuICAgIGlmIChzdGF0ZS5vYmplY3RNb2RlICYmIChjaHVuayA9PT0gbnVsbCB8fCBjaHVuayA9PT0gdW5kZWZpbmVkKSkgcmV0dXJuO2Vsc2UgaWYgKCFzdGF0ZS5vYmplY3RNb2RlICYmICghY2h1bmsgfHwgIWNodW5rLmxlbmd0aCkpIHJldHVybjtcblxuICAgIHZhciByZXQgPSBzZWxmLnB1c2goY2h1bmspO1xuICAgIGlmICghcmV0KSB7XG4gICAgICBwYXVzZWQgPSB0cnVlO1xuICAgICAgc3RyZWFtLnBhdXNlKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBwcm94eSBhbGwgdGhlIG90aGVyIG1ldGhvZHMuXG4gIC8vIGltcG9ydGFudCB3aGVuIHdyYXBwaW5nIGZpbHRlcnMgYW5kIGR1cGxleGVzLlxuICBmb3IgKHZhciBpIGluIHN0cmVhbSkge1xuICAgIGlmICh0aGlzW2ldID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIHN0cmVhbVtpXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpc1tpXSA9IGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gc3RyZWFtW21ldGhvZF0uYXBwbHkoc3RyZWFtLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfShpKTtcbiAgICB9XG4gIH1cblxuICAvLyBwcm94eSBjZXJ0YWluIGltcG9ydGFudCBldmVudHMuXG4gIHZhciBldmVudHMgPSBbJ2Vycm9yJywgJ2Nsb3NlJywgJ2Rlc3Ryb3knLCAncGF1c2UnLCAncmVzdW1lJ107XG4gIGZvckVhY2goZXZlbnRzLCBmdW5jdGlvbiAoZXYpIHtcbiAgICBzdHJlYW0ub24oZXYsIHNlbGYuZW1pdC5iaW5kKHNlbGYsIGV2KSk7XG4gIH0pO1xuXG4gIC8vIHdoZW4gd2UgdHJ5IHRvIGNvbnN1bWUgc29tZSBtb3JlIGJ5dGVzLCBzaW1wbHkgdW5wYXVzZSB0aGVcbiAgLy8gdW5kZXJseWluZyBzdHJlYW0uXG4gIHNlbGYuX3JlYWQgPSBmdW5jdGlvbiAobikge1xuICAgIGRlYnVnKCd3cmFwcGVkIF9yZWFkJywgbik7XG4gICAgaWYgKHBhdXNlZCkge1xuICAgICAgcGF1c2VkID0gZmFsc2U7XG4gICAgICBzdHJlYW0ucmVzdW1lKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBzZWxmO1xufTtcblxuLy8gZXhwb3NlZCBmb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5LlxuUmVhZGFibGUuX2Zyb21MaXN0ID0gZnJvbUxpc3Q7XG5cbi8vIFBsdWNrIG9mZiBuIGJ5dGVzIGZyb20gYW4gYXJyYXkgb2YgYnVmZmVycy5cbi8vIExlbmd0aCBpcyB0aGUgY29tYmluZWQgbGVuZ3RocyBvZiBhbGwgdGhlIGJ1ZmZlcnMgaW4gdGhlIGxpc3QuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGZyb21MaXN0KG4sIHN0YXRlKSB7XG4gIC8vIG5vdGhpbmcgYnVmZmVyZWRcbiAgaWYgKHN0YXRlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgdmFyIHJldDtcbiAgaWYgKHN0YXRlLm9iamVjdE1vZGUpIHJldCA9IHN0YXRlLmJ1ZmZlci5zaGlmdCgpO2Vsc2UgaWYgKCFuIHx8IG4gPj0gc3RhdGUubGVuZ3RoKSB7XG4gICAgLy8gcmVhZCBpdCBhbGwsIHRydW5jYXRlIHRoZSBsaXN0XG4gICAgaWYgKHN0YXRlLmRlY29kZXIpIHJldCA9IHN0YXRlLmJ1ZmZlci5qb2luKCcnKTtlbHNlIGlmIChzdGF0ZS5idWZmZXIubGVuZ3RoID09PSAxKSByZXQgPSBzdGF0ZS5idWZmZXIuaGVhZC5kYXRhO2Vsc2UgcmV0ID0gc3RhdGUuYnVmZmVyLmNvbmNhdChzdGF0ZS5sZW5ndGgpO1xuICAgIHN0YXRlLmJ1ZmZlci5jbGVhcigpO1xuICB9IGVsc2Uge1xuICAgIC8vIHJlYWQgcGFydCBvZiBsaXN0XG4gICAgcmV0ID0gZnJvbUxpc3RQYXJ0aWFsKG4sIHN0YXRlLmJ1ZmZlciwgc3RhdGUuZGVjb2Rlcik7XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG4vLyBFeHRyYWN0cyBvbmx5IGVub3VnaCBidWZmZXJlZCBkYXRhIHRvIHNhdGlzZnkgdGhlIGFtb3VudCByZXF1ZXN0ZWQuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGZyb21MaXN0UGFydGlhbChuLCBsaXN0LCBoYXNTdHJpbmdzKSB7XG4gIHZhciByZXQ7XG4gIGlmIChuIDwgbGlzdC5oZWFkLmRhdGEubGVuZ3RoKSB7XG4gICAgLy8gc2xpY2UgaXMgdGhlIHNhbWUgZm9yIGJ1ZmZlcnMgYW5kIHN0cmluZ3NcbiAgICByZXQgPSBsaXN0LmhlYWQuZGF0YS5zbGljZSgwLCBuKTtcbiAgICBsaXN0LmhlYWQuZGF0YSA9IGxpc3QuaGVhZC5kYXRhLnNsaWNlKG4pO1xuICB9IGVsc2UgaWYgKG4gPT09IGxpc3QuaGVhZC5kYXRhLmxlbmd0aCkge1xuICAgIC8vIGZpcnN0IGNodW5rIGlzIGEgcGVyZmVjdCBtYXRjaFxuICAgIHJldCA9IGxpc3Quc2hpZnQoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyByZXN1bHQgc3BhbnMgbW9yZSB0aGFuIG9uZSBidWZmZXJcbiAgICByZXQgPSBoYXNTdHJpbmdzID8gY29weUZyb21CdWZmZXJTdHJpbmcobiwgbGlzdCkgOiBjb3B5RnJvbUJ1ZmZlcihuLCBsaXN0KTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG4vLyBDb3BpZXMgYSBzcGVjaWZpZWQgYW1vdW50IG9mIGNoYXJhY3RlcnMgZnJvbSB0aGUgbGlzdCBvZiBidWZmZXJlZCBkYXRhXG4vLyBjaHVua3MuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGNvcHlGcm9tQnVmZmVyU3RyaW5nKG4sIGxpc3QpIHtcbiAgdmFyIHAgPSBsaXN0LmhlYWQ7XG4gIHZhciBjID0gMTtcbiAgdmFyIHJldCA9IHAuZGF0YTtcbiAgbiAtPSByZXQubGVuZ3RoO1xuICB3aGlsZSAocCA9IHAubmV4dCkge1xuICAgIHZhciBzdHIgPSBwLmRhdGE7XG4gICAgdmFyIG5iID0gbiA+IHN0ci5sZW5ndGggPyBzdHIubGVuZ3RoIDogbjtcbiAgICBpZiAobmIgPT09IHN0ci5sZW5ndGgpIHJldCArPSBzdHI7ZWxzZSByZXQgKz0gc3RyLnNsaWNlKDAsIG4pO1xuICAgIG4gLT0gbmI7XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIGlmIChuYiA9PT0gc3RyLmxlbmd0aCkge1xuICAgICAgICArK2M7XG4gICAgICAgIGlmIChwLm5leHQpIGxpc3QuaGVhZCA9IHAubmV4dDtlbHNlIGxpc3QuaGVhZCA9IGxpc3QudGFpbCA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0LmhlYWQgPSBwO1xuICAgICAgICBwLmRhdGEgPSBzdHIuc2xpY2UobmIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgICsrYztcbiAgfVxuICBsaXN0Lmxlbmd0aCAtPSBjO1xuICByZXR1cm4gcmV0O1xufVxuXG4vLyBDb3BpZXMgYSBzcGVjaWZpZWQgYW1vdW50IG9mIGJ5dGVzIGZyb20gdGhlIGxpc3Qgb2YgYnVmZmVyZWQgZGF0YSBjaHVua3MuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGNvcHlGcm9tQnVmZmVyKG4sIGxpc3QpIHtcbiAgdmFyIHJldCA9IGJ1ZmZlclNoaW0uYWxsb2NVbnNhZmUobik7XG4gIHZhciBwID0gbGlzdC5oZWFkO1xuICB2YXIgYyA9IDE7XG4gIHAuZGF0YS5jb3B5KHJldCk7XG4gIG4gLT0gcC5kYXRhLmxlbmd0aDtcbiAgd2hpbGUgKHAgPSBwLm5leHQpIHtcbiAgICB2YXIgYnVmID0gcC5kYXRhO1xuICAgIHZhciBuYiA9IG4gPiBidWYubGVuZ3RoID8gYnVmLmxlbmd0aCA6IG47XG4gICAgYnVmLmNvcHkocmV0LCByZXQubGVuZ3RoIC0gbiwgMCwgbmIpO1xuICAgIG4gLT0gbmI7XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIGlmIChuYiA9PT0gYnVmLmxlbmd0aCkge1xuICAgICAgICArK2M7XG4gICAgICAgIGlmIChwLm5leHQpIGxpc3QuaGVhZCA9IHAubmV4dDtlbHNlIGxpc3QuaGVhZCA9IGxpc3QudGFpbCA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0LmhlYWQgPSBwO1xuICAgICAgICBwLmRhdGEgPSBidWYuc2xpY2UobmIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgICsrYztcbiAgfVxuICBsaXN0Lmxlbmd0aCAtPSBjO1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBlbmRSZWFkYWJsZShzdHJlYW0pIHtcbiAgdmFyIHN0YXRlID0gc3RyZWFtLl9yZWFkYWJsZVN0YXRlO1xuXG4gIC8vIElmIHdlIGdldCBoZXJlIGJlZm9yZSBjb25zdW1pbmcgYWxsIHRoZSBieXRlcywgdGhlbiB0aGF0IGlzIGFcbiAgLy8gYnVnIGluIG5vZGUuICBTaG91bGQgbmV2ZXIgaGFwcGVuLlxuICBpZiAoc3RhdGUubGVuZ3RoID4gMCkgdGhyb3cgbmV3IEVycm9yKCdcImVuZFJlYWRhYmxlKClcIiBjYWxsZWQgb24gbm9uLWVtcHR5IHN0cmVhbScpO1xuXG4gIGlmICghc3RhdGUuZW5kRW1pdHRlZCkge1xuICAgIHN0YXRlLmVuZGVkID0gdHJ1ZTtcbiAgICBwcm9jZXNzTmV4dFRpY2soZW5kUmVhZGFibGVOVCwgc3RhdGUsIHN0cmVhbSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5kUmVhZGFibGVOVChzdGF0ZSwgc3RyZWFtKSB7XG4gIC8vIENoZWNrIHRoYXQgd2UgZGlkbid0IGdldCBvbmUgbGFzdCB1bnNoaWZ0LlxuICBpZiAoIXN0YXRlLmVuZEVtaXR0ZWQgJiYgc3RhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgc3RhdGUuZW5kRW1pdHRlZCA9IHRydWU7XG4gICAgc3RyZWFtLnJlYWRhYmxlID0gZmFsc2U7XG4gICAgc3RyZWFtLmVtaXQoJ2VuZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvckVhY2goeHMsIGYpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB4cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmKHhzW2ldLCBpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbmRleE9mKHhzLCB4KSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0geHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHhzW2ldID09PSB4KSByZXR1cm4gaTtcbiAgfVxuICByZXR1cm4gLTE7XG59XG59KS5jYWxsKHRoaXMscmVxdWlyZSgnX3Byb2Nlc3MnKSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTl5WldGa1lXSnNaUzF6ZEhKbFlXMHZiR2xpTDE5emRISmxZVzFmY21WaFpHRmliR1V1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVpTENKbWFXeGxJam9pWjJWdVpYSmhkR1ZrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpZDFjMlVnYzNSeWFXTjBKenRjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCU1pXRmtZV0pzWlR0Y2JseHVMeW84Y21Wd2JHRmpaVzFsYm5RK0tpOWNiblpoY2lCd2NtOWpaWE56VG1WNGRGUnBZMnNnUFNCeVpYRjFhWEpsS0Nkd2NtOWpaWE56TFc1bGVIUnBZMnN0WVhKbmN5Y3BPMXh1THlvOEwzSmxjR3hoWTJWdFpXNTBQaW92WEc1Y2JpOHFQSEpsY0d4aFkyVnRaVzUwUGlvdlhHNTJZWElnYVhOQmNuSmhlU0E5SUhKbGNYVnBjbVVvSjJsellYSnlZWGtuS1R0Y2JpOHFQQzl5WlhCc1lXTmxiV1Z1ZEQ0cUwxeHVYRzR2S2p4eVpYQnNZV05sYldWdWRENHFMMXh1ZG1GeUlFUjFjR3hsZUR0Y2JpOHFQQzl5WlhCc1lXTmxiV1Z1ZEQ0cUwxeHVYRzVTWldGa1lXSnNaUzVTWldGa1lXSnNaVk4wWVhSbElEMGdVbVZoWkdGaWJHVlRkR0YwWlR0Y2JseHVMeW84Y21Wd2JHRmpaVzFsYm5RK0tpOWNiblpoY2lCRlJTQTlJSEpsY1hWcGNtVW9KMlYyWlc1MGN5Y3BMa1YyWlc1MFJXMXBkSFJsY2p0Y2JseHVkbUZ5SUVWRmJHbHpkR1Z1WlhKRGIzVnVkQ0E5SUdaMWJtTjBhVzl1SUNobGJXbDBkR1Z5TENCMGVYQmxLU0I3WEc0Z0lISmxkSFZ5YmlCbGJXbDBkR1Z5TG14cGMzUmxibVZ5Y3loMGVYQmxLUzVzWlc1bmRHZzdYRzU5TzF4dUx5bzhMM0psY0d4aFkyVnRaVzUwUGlvdlhHNWNiaThxUEhKbGNHeGhZMlZ0Wlc1MFBpb3ZYRzUyWVhJZ1UzUnlaV0Z0TzF4dUtHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ2RISjVJSHRjYmlBZ0lDQlRkSEpsWVcwZ1BTQnlaWEYxYVhKbEtDZHpkQ2NnS3lBbmNtVmhiU2NwTzF4dUlDQjlJR05oZEdOb0lDaGZLU0I3ZlNCbWFXNWhiR3g1SUh0Y2JpQWdJQ0JwWmlBb0lWTjBjbVZoYlNrZ1UzUnlaV0Z0SUQwZ2NtVnhkV2x5WlNnblpYWmxiblJ6SnlrdVJYWmxiblJGYldsMGRHVnlPMXh1SUNCOVhHNTlLU2dwTzF4dUx5bzhMM0psY0d4aFkyVnRaVzUwUGlvdlhHNWNiblpoY2lCQ2RXWm1aWElnUFNCeVpYRjFhWEpsS0NkaWRXWm1aWEluS1M1Q2RXWm1aWEk3WEc0dktqeHlaWEJzWVdObGJXVnVkRDRxTDF4dWRtRnlJR0oxWm1abGNsTm9hVzBnUFNCeVpYRjFhWEpsS0NkaWRXWm1aWEl0YzJocGJYTW5LVHRjYmk4cVBDOXlaWEJzWVdObGJXVnVkRDRxTDF4dVhHNHZLanh5WlhCc1lXTmxiV1Z1ZEQ0cUwxeHVkbUZ5SUhWMGFXd2dQU0J5WlhGMWFYSmxLQ2RqYjNKbExYVjBhV3d0YVhNbktUdGNiblYwYVd3dWFXNW9aWEpwZEhNZ1BTQnlaWEYxYVhKbEtDZHBibWhsY21sMGN5Y3BPMXh1THlvOEwzSmxjR3hoWTJWdFpXNTBQaW92WEc1Y2JpOHFQSEpsY0d4aFkyVnRaVzUwUGlvdlhHNTJZWElnWkdWaWRXZFZkR2xzSUQwZ2NtVnhkV2x5WlNnbmRYUnBiQ2NwTzF4dWRtRnlJR1JsWW5WbklEMGdkbTlwWkNBd08xeHVhV1lnS0dSbFluVm5WWFJwYkNBbUppQmtaV0oxWjFWMGFXd3VaR1ZpZFdkc2IyY3BJSHRjYmlBZ1pHVmlkV2NnUFNCa1pXSjFaMVYwYVd3dVpHVmlkV2RzYjJjb0ozTjBjbVZoYlNjcE8xeHVmU0JsYkhObElIdGNiaUFnWkdWaWRXY2dQU0JtZFc1amRHbHZiaUFvS1NCN2ZUdGNibjFjYmk4cVBDOXlaWEJzWVdObGJXVnVkRDRxTDF4dVhHNTJZWElnUW5WbVptVnlUR2x6ZENBOUlISmxjWFZwY21Vb0p5NHZhVzUwWlhKdVlXd3ZjM1J5WldGdGN5OUNkV1ptWlhKTWFYTjBKeWs3WEc1MllYSWdVM1J5YVc1blJHVmpiMlJsY2p0Y2JseHVkWFJwYkM1cGJtaGxjbWwwY3loU1pXRmtZV0pzWlN3Z1UzUnlaV0Z0S1R0Y2JseHVablZ1WTNScGIyNGdjSEpsY0dWdVpFeHBjM1JsYm1WeUtHVnRhWFIwWlhJc0lHVjJaVzUwTENCbWJpa2dlMXh1SUNBdkx5QlRZV1JzZVNCMGFHbHpJR2x6SUc1dmRDQmpZV05vWldGaWJHVWdZWE1nYzI5dFpTQnNhV0p5WVhKcFpYTWdZblZ1Wkd4bElIUm9aV2x5SUc5M2JseHVJQ0F2THlCbGRtVnVkQ0JsYldsMGRHVnlJR2x0Y0d4bGJXVnVkR0YwYVc5dUlIZHBkR2dnZEdobGJTNWNiaUFnYVdZZ0tIUjVjR1Z2WmlCbGJXbDBkR1Z5TG5CeVpYQmxibVJNYVhOMFpXNWxjaUE5UFQwZ0oyWjFibU4wYVc5dUp5a2dlMXh1SUNBZ0lISmxkSFZ5YmlCbGJXbDBkR1Z5TG5CeVpYQmxibVJNYVhOMFpXNWxjaWhsZG1WdWRDd2dabTRwTzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUM4dklGUm9hWE1nYVhNZ1lTQm9ZV05ySUhSdklHMWhhMlVnYzNWeVpTQjBhR0YwSUc5MWNpQmxjbkp2Y2lCb1lXNWtiR1Z5SUdseklHRjBkR0ZqYUdWa0lHSmxabTl5WlNCaGJubGNiaUFnSUNBdkx5QjFjMlZ5YkdGdVpDQnZibVZ6TGlBZ1RrVldSVklnUkU4Z1ZFaEpVeTRnVkdocGN5QnBjeUJvWlhKbElHOXViSGtnWW1WallYVnpaU0IwYUdseklHTnZaR1VnYm1WbFpITmNiaUFnSUNBdkx5QjBieUJqYjI1MGFXNTFaU0IwYnlCM2IzSnJJSGRwZEdnZ2IyeGtaWElnZG1WeWMybHZibk1nYjJZZ1RtOWtaUzVxY3lCMGFHRjBJR1J2SUc1dmRDQnBibU5zZFdSbFhHNGdJQ0FnTHk4Z2RHaGxJSEJ5WlhCbGJtUk1hWE4wWlc1bGNpZ3BJRzFsZEdodlpDNGdWR2hsSUdkdllXd2dhWE1nZEc4Z1pYWmxiblIxWVd4c2VTQnlaVzF2ZG1VZ2RHaHBjeUJvWVdOckxseHVJQ0FnSUdsbUlDZ2haVzFwZEhSbGNpNWZaWFpsYm5SeklIeDhJQ0ZsYldsMGRHVnlMbDlsZG1WdWRITmJaWFpsYm5SZEtTQmxiV2wwZEdWeUxtOXVLR1YyWlc1MExDQm1iaWs3Wld4elpTQnBaaUFvYVhOQmNuSmhlU2hsYldsMGRHVnlMbDlsZG1WdWRITmJaWFpsYm5SZEtTa2daVzFwZEhSbGNpNWZaWFpsYm5SelcyVjJaVzUwWFM1MWJuTm9hV1owS0dadUtUdGxiSE5sSUdWdGFYUjBaWEl1WDJWMlpXNTBjMXRsZG1WdWRGMGdQU0JiWm00c0lHVnRhWFIwWlhJdVgyVjJaVzUwYzF0bGRtVnVkRjFkTzF4dUlDQjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlGSmxZV1JoWW14bFUzUmhkR1VvYjNCMGFXOXVjeXdnYzNSeVpXRnRLU0I3WEc0Z0lFUjFjR3hsZUNBOUlFUjFjR3hsZUNCOGZDQnlaWEYxYVhKbEtDY3VMMTl6ZEhKbFlXMWZaSFZ3YkdWNEp5azdYRzVjYmlBZ2IzQjBhVzl1Y3lBOUlHOXdkR2x2Ym5NZ2ZId2dlMzA3WEc1Y2JpQWdMeThnYjJKcVpXTjBJSE4wY21WaGJTQm1iR0ZuTGlCVmMyVmtJSFJ2SUcxaGEyVWdjbVZoWkNodUtTQnBaMjV2Y21VZ2JpQmhibVFnZEc5Y2JpQWdMeThnYldGclpTQmhiR3dnZEdobElHSjFabVpsY2lCdFpYSm5hVzVuSUdGdVpDQnNaVzVuZEdnZ1kyaGxZMnR6SUdkdklHRjNZWGxjYmlBZ2RHaHBjeTV2WW1wbFkzUk5iMlJsSUQwZ0lTRnZjSFJwYjI1ekxtOWlhbVZqZEUxdlpHVTdYRzVjYmlBZ2FXWWdLSE4wY21WaGJTQnBibk4wWVc1alpXOW1JRVIxY0d4bGVDa2dkR2hwY3k1dlltcGxZM1JOYjJSbElEMGdkR2hwY3k1dlltcGxZM1JOYjJSbElIeDhJQ0VoYjNCMGFXOXVjeTV5WldGa1lXSnNaVTlpYW1WamRFMXZaR1U3WEc1Y2JpQWdMeThnZEdobElIQnZhVzUwSUdGMElIZG9hV05vSUdsMElITjBiM0J6SUdOaGJHeHBibWNnWDNKbFlXUW9LU0IwYnlCbWFXeHNJSFJvWlNCaWRXWm1aWEpjYmlBZ0x5OGdUbTkwWlRvZ01DQnBjeUJoSUhaaGJHbGtJSFpoYkhWbExDQnRaV0Z1Y3lCY0ltUnZiaWQwSUdOaGJHd2dYM0psWVdRZ2NISmxaVzF3ZEdsMlpXeDVJR1YyWlhKY0lseHVJQ0IyWVhJZ2FIZHRJRDBnYjNCMGFXOXVjeTVvYVdkb1YyRjBaWEpOWVhKck8xeHVJQ0IyWVhJZ1pHVm1ZWFZzZEVoM2JTQTlJSFJvYVhNdWIySnFaV04wVFc5a1pTQS9JREUySURvZ01UWWdLaUF4TURJME8xeHVJQ0IwYUdsekxtaHBaMmhYWVhSbGNrMWhjbXNnUFNCb2QyMGdmSHdnYUhkdElEMDlQU0F3SUQ4Z2FIZHRJRG9nWkdWbVlYVnNkRWgzYlR0Y2JseHVJQ0F2THlCallYTjBJSFJ2SUdsdWRITXVYRzRnSUhSb2FYTXVhR2xuYUZkaGRHVnlUV0Z5YXlBOUlINStkR2hwY3k1b2FXZG9WMkYwWlhKTllYSnJPMXh1WEc0Z0lDOHZJRUVnYkdsdWEyVmtJR3hwYzNRZ2FYTWdkWE5sWkNCMGJ5QnpkRzl5WlNCa1lYUmhJR05vZFc1cmN5QnBibk4wWldGa0lHOW1JR0Z1SUdGeWNtRjVJR0psWTJGMWMyVWdkR2hsWEc0Z0lDOHZJR3hwYm10bFpDQnNhWE4wSUdOaGJpQnlaVzF2ZG1VZ1pXeGxiV1Z1ZEhNZ1puSnZiU0IwYUdVZ1ltVm5hVzV1YVc1bklHWmhjM1JsY2lCMGFHRnVYRzRnSUM4dklHRnljbUY1TG5Ob2FXWjBLQ2xjYmlBZ2RHaHBjeTVpZFdabVpYSWdQU0J1WlhjZ1FuVm1abVZ5VEdsemRDZ3BPMXh1SUNCMGFHbHpMbXhsYm1kMGFDQTlJREE3WEc0Z0lIUm9hWE11Y0dsd1pYTWdQU0J1ZFd4c08xeHVJQ0IwYUdsekxuQnBjR1Z6UTI5MWJuUWdQU0F3TzF4dUlDQjBhR2x6TG1ac2IzZHBibWNnUFNCdWRXeHNPMXh1SUNCMGFHbHpMbVZ1WkdWa0lEMGdabUZzYzJVN1hHNGdJSFJvYVhNdVpXNWtSVzFwZEhSbFpDQTlJR1poYkhObE8xeHVJQ0IwYUdsekxuSmxZV1JwYm1jZ1BTQm1ZV3h6WlR0Y2JseHVJQ0F2THlCaElHWnNZV2NnZEc4Z1ltVWdZV0pzWlNCMGJ5QjBaV3hzSUdsbUlIUm9aU0J2Ym5keWFYUmxJR05pSUdseklHTmhiR3hsWkNCcGJXMWxaR2xoZEdWc2VTeGNiaUFnTHk4Z2IzSWdiMjRnWVNCc1lYUmxjaUIwYVdOckxpQWdWMlVnYzJWMElIUm9hWE1nZEc4Z2RISjFaU0JoZENCbWFYSnpkQ3dnWW1WallYVnpaU0JoYm5sY2JpQWdMeThnWVdOMGFXOXVjeUIwYUdGMElITm9iM1ZzWkc0bmRDQm9ZWEJ3Wlc0Z2RXNTBhV3dnWENKc1lYUmxjbHdpSUhOb2IzVnNaQ0JuWlc1bGNtRnNiSGtnWVd4emIxeHVJQ0F2THlCdWIzUWdhR0Z3Y0dWdUlHSmxabTl5WlNCMGFHVWdabWx5YzNRZ2QzSnBkR1VnWTJGc2JDNWNiaUFnZEdocGN5NXplVzVqSUQwZ2RISjFaVHRjYmx4dUlDQXZMeUIzYUdWdVpYWmxjaUIzWlNCeVpYUjFjbTRnYm5Wc2JDd2dkR2hsYmlCM1pTQnpaWFFnWVNCbWJHRm5JSFJ2SUhOaGVWeHVJQ0F2THlCMGFHRjBJSGRsSjNKbElHRjNZV2wwYVc1bklHRWdKM0psWVdSaFlteGxKeUJsZG1WdWRDQmxiV2x6YzJsdmJpNWNiaUFnZEdocGN5NXVaV1ZrVW1WaFpHRmliR1VnUFNCbVlXeHpaVHRjYmlBZ2RHaHBjeTVsYldsMGRHVmtVbVZoWkdGaWJHVWdQU0JtWVd4elpUdGNiaUFnZEdocGN5NXlaV0ZrWVdKc1pVeHBjM1JsYm1sdVp5QTlJR1poYkhObE8xeHVJQ0IwYUdsekxuSmxjM1Z0WlZOamFHVmtkV3hsWkNBOUlHWmhiSE5sTzF4dVhHNGdJQzh2SUVOeWVYQjBieUJwY3lCcmFXNWtJRzltSUc5c1pDQmhibVFnWTNKMWMzUjVMaUFnU0dsemRHOXlhV05oYkd4NUxDQnBkSE1nWkdWbVlYVnNkQ0J6ZEhKcGJtZGNiaUFnTHk4Z1pXNWpiMlJwYm1jZ2FYTWdKMkpwYm1GeWVTY2djMjhnZDJVZ2FHRjJaU0IwYnlCdFlXdGxJSFJvYVhNZ1kyOXVabWxuZFhKaFlteGxMbHh1SUNBdkx5QkZkbVZ5ZVhSb2FXNW5JR1ZzYzJVZ2FXNGdkR2hsSUhWdWFYWmxjbk5sSUhWelpYTWdKM1YwWmpnbkxDQjBhRzkxWjJndVhHNGdJSFJvYVhNdVpHVm1ZWFZzZEVWdVkyOWthVzVuSUQwZ2IzQjBhVzl1Y3k1a1pXWmhkV3gwUlc1amIyUnBibWNnZkh3Z0ozVjBaamduTzF4dVhHNGdJQzh2SUhkb1pXNGdjR2x3YVc1bkxDQjNaU0J2Ym14NUlHTmhjbVVnWVdKdmRYUWdKM0psWVdSaFlteGxKeUJsZG1WdWRITWdkR2hoZENCb1lYQndaVzVjYmlBZ0x5OGdZV1owWlhJZ2NtVmhaQ2dwYVc1bklHRnNiQ0IwYUdVZ1lubDBaWE1nWVc1a0lHNXZkQ0JuWlhSMGFXNW5JR0Z1ZVNCd2RYTm9ZbUZqYXk1Y2JpQWdkR2hwY3k1eVlXNVBkWFFnUFNCbVlXeHpaVHRjYmx4dUlDQXZMeUIwYUdVZ2JuVnRZbVZ5SUc5bUlIZHlhWFJsY25NZ2RHaGhkQ0JoY21VZ1lYZGhhWFJwYm1jZ1lTQmtjbUZwYmlCbGRtVnVkQ0JwYmlBdWNHbHdaU2dwYzF4dUlDQjBhR2x6TG1GM1lXbDBSSEpoYVc0Z1BTQXdPMXh1WEc0Z0lDOHZJR2xtSUhSeWRXVXNJR0VnYldGNVltVlNaV0ZrVFc5eVpTQm9ZWE1nWW1WbGJpQnpZMmhsWkhWc1pXUmNiaUFnZEdocGN5NXlaV0ZrYVc1blRXOXlaU0E5SUdaaGJITmxPMXh1WEc0Z0lIUm9hWE11WkdWamIyUmxjaUE5SUc1MWJHdzdYRzRnSUhSb2FYTXVaVzVqYjJScGJtY2dQU0J1ZFd4c08xeHVJQ0JwWmlBb2IzQjBhVzl1Y3k1bGJtTnZaR2x1WnlrZ2UxeHVJQ0FnSUdsbUlDZ2hVM1J5YVc1blJHVmpiMlJsY2lrZ1UzUnlhVzVuUkdWamIyUmxjaUE5SUhKbGNYVnBjbVVvSjNOMGNtbHVaMTlrWldOdlpHVnlMeWNwTGxOMGNtbHVaMFJsWTI5a1pYSTdYRzRnSUNBZ2RHaHBjeTVrWldOdlpHVnlJRDBnYm1WM0lGTjBjbWx1WjBSbFkyOWtaWElvYjNCMGFXOXVjeTVsYm1OdlpHbHVaeWs3WEc0Z0lDQWdkR2hwY3k1bGJtTnZaR2x1WnlBOUlHOXdkR2x2Ym5NdVpXNWpiMlJwYm1jN1hHNGdJSDFjYm4xY2JseHVablZ1WTNScGIyNGdVbVZoWkdGaWJHVW9iM0IwYVc5dWN5a2dlMXh1SUNCRWRYQnNaWGdnUFNCRWRYQnNaWGdnZkh3Z2NtVnhkV2x5WlNnbkxpOWZjM1J5WldGdFgyUjFjR3hsZUNjcE8xeHVYRzRnSUdsbUlDZ2hLSFJvYVhNZ2FXNXpkR0Z1WTJWdlppQlNaV0ZrWVdKc1pTa3BJSEpsZEhWeWJpQnVaWGNnVW1WaFpHRmliR1VvYjNCMGFXOXVjeWs3WEc1Y2JpQWdkR2hwY3k1ZmNtVmhaR0ZpYkdWVGRHRjBaU0E5SUc1bGR5QlNaV0ZrWVdKc1pWTjBZWFJsS0c5d2RHbHZibk1zSUhSb2FYTXBPMXh1WEc0Z0lDOHZJR3hsWjJGamVWeHVJQ0IwYUdsekxuSmxZV1JoWW14bElEMGdkSEoxWlR0Y2JseHVJQ0JwWmlBb2IzQjBhVzl1Y3lBbUppQjBlWEJsYjJZZ2IzQjBhVzl1Y3k1eVpXRmtJRDA5UFNBblpuVnVZM1JwYjI0bktTQjBhR2x6TGw5eVpXRmtJRDBnYjNCMGFXOXVjeTV5WldGa08xeHVYRzRnSUZOMGNtVmhiUzVqWVd4c0tIUm9hWE1wTzF4dWZWeHVYRzR2THlCTllXNTFZV3hzZVNCemFHOTJaU0J6YjIxbGRHaHBibWNnYVc1MGJ5QjBhR1VnY21WaFpDZ3BJR0oxWm1abGNpNWNiaTh2SUZSb2FYTWdjbVYwZFhKdWN5QjBjblZsSUdsbUlIUm9aU0JvYVdkb1YyRjBaWEpOWVhKcklHaGhjeUJ1YjNRZ1ltVmxiaUJvYVhRZ2VXVjBMRnh1THk4Z2MybHRhV3hoY2lCMGJ5Qm9iM2NnVjNKcGRHRmliR1V1ZDNKcGRHVW9LU0J5WlhSMWNtNXpJSFJ5ZFdVZ2FXWWdlVzkxSUhOb2IzVnNaRnh1THk4Z2QzSnBkR1VvS1NCemIyMWxJRzF2Y21VdVhHNVNaV0ZrWVdKc1pTNXdjbTkwYjNSNWNHVXVjSFZ6YUNBOUlHWjFibU4wYVc5dUlDaGphSFZ1YXl3Z1pXNWpiMlJwYm1jcElIdGNiaUFnZG1GeUlITjBZWFJsSUQwZ2RHaHBjeTVmY21WaFpHRmliR1ZUZEdGMFpUdGNibHh1SUNCcFppQW9JWE4wWVhSbExtOWlhbVZqZEUxdlpHVWdKaVlnZEhsd1pXOW1JR05vZFc1cklEMDlQU0FuYzNSeWFXNW5KeWtnZTF4dUlDQWdJR1Z1WTI5a2FXNW5JRDBnWlc1amIyUnBibWNnZkh3Z2MzUmhkR1V1WkdWbVlYVnNkRVZ1WTI5a2FXNW5PMXh1SUNBZ0lHbG1JQ2hsYm1OdlpHbHVaeUFoUFQwZ2MzUmhkR1V1Wlc1amIyUnBibWNwSUh0Y2JpQWdJQ0FnSUdOb2RXNXJJRDBnWW5WbVptVnlVMmhwYlM1bWNtOXRLR05vZFc1ckxDQmxibU52WkdsdVp5azdYRzRnSUNBZ0lDQmxibU52WkdsdVp5QTlJQ2NuTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ5WldGa1lXSnNaVUZrWkVOb2RXNXJLSFJvYVhNc0lITjBZWFJsTENCamFIVnVheXdnWlc1amIyUnBibWNzSUdaaGJITmxLVHRjYm4wN1hHNWNiaTh2SUZWdWMyaHBablFnYzJodmRXeGtJQ3BoYkhkaGVYTXFJR0psSUhOdmJXVjBhR2x1WnlCa2FYSmxZM1JzZVNCdmRYUWdiMllnY21WaFpDZ3BYRzVTWldGa1lXSnNaUzV3Y205MGIzUjVjR1V1ZFc1emFHbG1kQ0E5SUdaMWJtTjBhVzl1SUNoamFIVnVheWtnZTF4dUlDQjJZWElnYzNSaGRHVWdQU0IwYUdsekxsOXlaV0ZrWVdKc1pWTjBZWFJsTzF4dUlDQnlaWFIxY200Z2NtVmhaR0ZpYkdWQlpHUkRhSFZ1YXloMGFHbHpMQ0J6ZEdGMFpTd2dZMmgxYm1zc0lDY25MQ0IwY25WbEtUdGNibjA3WEc1Y2JsSmxZV1JoWW14bExuQnliM1J2ZEhsd1pTNXBjMUJoZFhObFpDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdjbVYwZFhKdUlIUm9hWE11WDNKbFlXUmhZbXhsVTNSaGRHVXVabXh2ZDJsdVp5QTlQVDBnWm1Gc2MyVTdYRzU5TzF4dVhHNW1kVzVqZEdsdmJpQnlaV0ZrWVdKc1pVRmtaRU5vZFc1cktITjBjbVZoYlN3Z2MzUmhkR1VzSUdOb2RXNXJMQ0JsYm1OdlpHbHVaeXdnWVdSa1ZHOUdjbTl1ZENrZ2UxeHVJQ0IyWVhJZ1pYSWdQU0JqYUhWdWEwbHVkbUZzYVdRb2MzUmhkR1VzSUdOb2RXNXJLVHRjYmlBZ2FXWWdLR1Z5S1NCN1hHNGdJQ0FnYzNSeVpXRnRMbVZ0YVhRb0oyVnljbTl5Snl3Z1pYSXBPMXh1SUNCOUlHVnNjMlVnYVdZZ0tHTm9kVzVySUQwOVBTQnVkV3hzS1NCN1hHNGdJQ0FnYzNSaGRHVXVjbVZoWkdsdVp5QTlJR1poYkhObE8xeHVJQ0FnSUc5dVJXOW1RMmgxYm1zb2MzUnlaV0Z0TENCemRHRjBaU2s3WEc0Z0lIMGdaV3h6WlNCcFppQW9jM1JoZEdVdWIySnFaV04wVFc5a1pTQjhmQ0JqYUhWdWF5QW1KaUJqYUhWdWF5NXNaVzVuZEdnZ1BpQXdLU0I3WEc0Z0lDQWdhV1lnS0hOMFlYUmxMbVZ1WkdWa0lDWW1JQ0ZoWkdSVWIwWnliMjUwS1NCN1hHNGdJQ0FnSUNCMllYSWdaU0E5SUc1bGR5QkZjbkp2Y2lnbmMzUnlaV0Z0TG5CMWMyZ29LU0JoWm5SbGNpQkZUMFluS1R0Y2JpQWdJQ0FnSUhOMGNtVmhiUzVsYldsMEtDZGxjbkp2Y2ljc0lHVXBPMXh1SUNBZ0lIMGdaV3h6WlNCcFppQW9jM1JoZEdVdVpXNWtSVzFwZEhSbFpDQW1KaUJoWkdSVWIwWnliMjUwS1NCN1hHNGdJQ0FnSUNCMllYSWdYMlVnUFNCdVpYY2dSWEp5YjNJb0ozTjBjbVZoYlM1MWJuTm9hV1owS0NrZ1lXWjBaWElnWlc1a0lHVjJaVzUwSnlrN1hHNGdJQ0FnSUNCemRISmxZVzB1WlcxcGRDZ25aWEp5YjNJbkxDQmZaU2s3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lIWmhjaUJ6YTJsd1FXUmtPMXh1SUNBZ0lDQWdhV1lnS0hOMFlYUmxMbVJsWTI5a1pYSWdKaVlnSVdGa1pGUnZSbkp2Ym5RZ0ppWWdJV1Z1WTI5a2FXNW5LU0I3WEc0Z0lDQWdJQ0FnSUdOb2RXNXJJRDBnYzNSaGRHVXVaR1ZqYjJSbGNpNTNjbWwwWlNoamFIVnVheWs3WEc0Z0lDQWdJQ0FnSUhOcmFYQkJaR1FnUFNBaGMzUmhkR1V1YjJKcVpXTjBUVzlrWlNBbUppQmphSFZ1YXk1c1pXNW5kR2dnUFQwOUlEQTdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJR2xtSUNnaFlXUmtWRzlHY205dWRDa2djM1JoZEdVdWNtVmhaR2x1WnlBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnSUNBdkx5QkViMjRuZENCaFpHUWdkRzhnZEdobElHSjFabVpsY2lCcFppQjNaU2QyWlNCa1pXTnZaR1ZrSUhSdklHRnVJR1Z0Y0hSNUlITjBjbWx1WnlCamFIVnVheUJoYm1SY2JpQWdJQ0FnSUM4dklIZGxKM0psSUc1dmRDQnBiaUJ2WW1wbFkzUWdiVzlrWlZ4dUlDQWdJQ0FnYVdZZ0tDRnphMmx3UVdSa0tTQjdYRzRnSUNBZ0lDQWdJQzh2SUdsbUlIZGxJSGRoYm5RZ2RHaGxJR1JoZEdFZ2JtOTNMQ0JxZFhOMElHVnRhWFFnYVhRdVhHNGdJQ0FnSUNBZ0lHbG1JQ2h6ZEdGMFpTNW1iRzkzYVc1bklDWW1JSE4wWVhSbExteGxibWQwYUNBOVBUMGdNQ0FtSmlBaGMzUmhkR1V1YzNsdVl5a2dlMXh1SUNBZ0lDQWdJQ0FnSUhOMGNtVmhiUzVsYldsMEtDZGtZWFJoSnl3Z1kyaDFibXNwTzF4dUlDQWdJQ0FnSUNBZ0lITjBjbVZoYlM1eVpXRmtLREFwTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDOHZJSFZ3WkdGMFpTQjBhR1VnWW5WbVptVnlJR2x1Wm04dVhHNGdJQ0FnSUNBZ0lDQWdjM1JoZEdVdWJHVnVaM1JvSUNzOUlITjBZWFJsTG05aWFtVmpkRTF2WkdVZ1B5QXhJRG9nWTJoMWJtc3ViR1Z1WjNSb08xeHVJQ0FnSUNBZ0lDQWdJR2xtSUNoaFpHUlViMFp5YjI1MEtTQnpkR0YwWlM1aWRXWm1aWEl1ZFc1emFHbG1kQ2hqYUhWdWF5azdaV3h6WlNCemRHRjBaUzVpZFdabVpYSXVjSFZ6YUNoamFIVnVheWs3WEc1Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvYzNSaGRHVXVibVZsWkZKbFlXUmhZbXhsS1NCbGJXbDBVbVZoWkdGaWJHVW9jM1J5WldGdEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0J0WVhsaVpWSmxZV1JOYjNKbEtITjBjbVZoYlN3Z2MzUmhkR1VwTzF4dUlDQWdJSDFjYmlBZ2ZTQmxiSE5sSUdsbUlDZ2hZV1JrVkc5R2NtOXVkQ2tnZTF4dUlDQWdJSE4wWVhSbExuSmxZV1JwYm1jZ1BTQm1ZV3h6WlR0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCdVpXVmtUVzl5WlVSaGRHRW9jM1JoZEdVcE8xeHVmVnh1WEc0dkx5QnBaaUJwZENkeklIQmhjM1FnZEdobElHaHBaMmdnZDJGMFpYSWdiV0Z5YXl3Z2QyVWdZMkZ1SUhCMWMyZ2dhVzRnYzI5dFpTQnRiM0psTGx4dUx5OGdRV3h6Ynl3Z2FXWWdkMlVnYUdGMlpTQnVieUJrWVhSaElIbGxkQ3dnZDJVZ1kyRnVJSE4wWVc1a0lITnZiV1ZjYmk4dklHMXZjbVVnWW5sMFpYTXVJQ0JVYUdseklHbHpJSFJ2SUhkdmNtc2dZWEp2ZFc1a0lHTmhjMlZ6SUhkb1pYSmxJR2gzYlQwd0xGeHVMeThnYzNWamFDQmhjeUIwYUdVZ2NtVndiQzRnSUVGc2MyOHNJR2xtSUhSb1pTQndkWE5vS0NrZ2RISnBaMmRsY21Wa0lHRmNiaTh2SUhKbFlXUmhZbXhsSUdWMlpXNTBMQ0JoYm1RZ2RHaGxJSFZ6WlhJZ1kyRnNiR1ZrSUhKbFlXUW9iR0Z5WjJWT2RXMWlaWElwSUhOMVkyZ2dkR2hoZEZ4dUx5OGdibVZsWkZKbFlXUmhZbXhsSUhkaGN5QnpaWFFzSUhSb1pXNGdkMlVnYjNWbmFIUWdkRzhnY0hWemFDQnRiM0psTENCemJ5QjBhR0YwSUdGdWIzUm9aWEpjYmk4dklDZHlaV0ZrWVdKc1pTY2daWFpsYm5RZ2QybHNiQ0JpWlNCMGNtbG5aMlZ5WldRdVhHNW1kVzVqZEdsdmJpQnVaV1ZrVFc5eVpVUmhkR0VvYzNSaGRHVXBJSHRjYmlBZ2NtVjBkWEp1SUNGemRHRjBaUzVsYm1SbFpDQW1KaUFvYzNSaGRHVXVibVZsWkZKbFlXUmhZbXhsSUh4OElITjBZWFJsTG14bGJtZDBhQ0E4SUhOMFlYUmxMbWhwWjJoWFlYUmxjazFoY21zZ2ZId2djM1JoZEdVdWJHVnVaM1JvSUQwOVBTQXdLVHRjYm4xY2JseHVMeThnWW1GamEzZGhjbVJ6SUdOdmJYQmhkR2xpYVd4cGRIa3VYRzVTWldGa1lXSnNaUzV3Y205MGIzUjVjR1V1YzJWMFJXNWpiMlJwYm1jZ1BTQm1kVzVqZEdsdmJpQW9aVzVqS1NCN1hHNGdJR2xtSUNnaFUzUnlhVzVuUkdWamIyUmxjaWtnVTNSeWFXNW5SR1ZqYjJSbGNpQTlJSEpsY1hWcGNtVW9KM04wY21sdVoxOWtaV052WkdWeUx5Y3BMbE4wY21sdVowUmxZMjlrWlhJN1hHNGdJSFJvYVhNdVgzSmxZV1JoWW14bFUzUmhkR1V1WkdWamIyUmxjaUE5SUc1bGR5QlRkSEpwYm1kRVpXTnZaR1Z5S0dWdVl5azdYRzRnSUhSb2FYTXVYM0psWVdSaFlteGxVM1JoZEdVdVpXNWpiMlJwYm1jZ1BTQmxibU03WEc0Z0lISmxkSFZ5YmlCMGFHbHpPMXh1ZlR0Y2JseHVMeThnUkc5dUozUWdjbUZwYzJVZ2RHaGxJR2gzYlNBK0lEaE5RbHh1ZG1GeUlFMUJXRjlJVjAwZ1BTQXdlRGd3TURBd01EdGNibVoxYm1OMGFXOXVJR052YlhCMWRHVk9aWGRJYVdkb1YyRjBaWEpOWVhKcktHNHBJSHRjYmlBZ2FXWWdLRzRnUGowZ1RVRllYMGhYVFNrZ2UxeHVJQ0FnSUc0Z1BTQk5RVmhmU0ZkTk8xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDOHZJRWRsZENCMGFHVWdibVY0ZENCb2FXZG9aWE4wSUhCdmQyVnlJRzltSURJZ2RHOGdjSEpsZG1WdWRDQnBibU55WldGemFXNW5JR2gzYlNCbGVHTmxjM05wZG1Wc2VTQnBibHh1SUNBZ0lDOHZJSFJwYm5rZ1lXMXZkVzUwYzF4dUlDQWdJRzR0TFR0Y2JpQWdJQ0J1SUh3OUlHNGdQajQrSURFN1hHNGdJQ0FnYmlCOFBTQnVJRDQrUGlBeU8xeHVJQ0FnSUc0Z2ZEMGdiaUErUGo0Z05EdGNiaUFnSUNCdUlIdzlJRzRnUGo0K0lEZzdYRzRnSUNBZ2JpQjhQU0J1SUQ0K1BpQXhOanRjYmlBZ0lDQnVLeXM3WEc0Z0lIMWNiaUFnY21WMGRYSnVJRzQ3WEc1OVhHNWNiaTh2SUZSb2FYTWdablZ1WTNScGIyNGdhWE1nWkdWemFXZHVaV1FnZEc4Z1ltVWdhVzVzYVc1aFlteGxMQ0J6YnlCd2JHVmhjMlVnZEdGclpTQmpZWEpsSUhkb1pXNGdiV0ZyYVc1blhHNHZMeUJqYUdGdVoyVnpJSFJ2SUhSb1pTQm1kVzVqZEdsdmJpQmliMlI1TGx4dVpuVnVZM1JwYjI0Z2FHOTNUWFZqYUZSdlVtVmhaQ2h1TENCemRHRjBaU2tnZTF4dUlDQnBaaUFvYmlBOFBTQXdJSHg4SUhOMFlYUmxMbXhsYm1kMGFDQTlQVDBnTUNBbUppQnpkR0YwWlM1bGJtUmxaQ2tnY21WMGRYSnVJREE3WEc0Z0lHbG1JQ2h6ZEdGMFpTNXZZbXBsWTNSTmIyUmxLU0J5WlhSMWNtNGdNVHRjYmlBZ2FXWWdLRzRnSVQwOUlHNHBJSHRjYmlBZ0lDQXZMeUJQYm14NUlHWnNiM2NnYjI1bElHSjFabVpsY2lCaGRDQmhJSFJwYldWY2JpQWdJQ0JwWmlBb2MzUmhkR1V1Wm14dmQybHVaeUFtSmlCemRHRjBaUzVzWlc1bmRHZ3BJSEpsZEhWeWJpQnpkR0YwWlM1aWRXWm1aWEl1YUdWaFpDNWtZWFJoTG14bGJtZDBhRHRsYkhObElISmxkSFZ5YmlCemRHRjBaUzVzWlc1bmRHZzdYRzRnSUgxY2JpQWdMeThnU1dZZ2QyVW5jbVVnWVhOcmFXNW5JR1p2Y2lCdGIzSmxJSFJvWVc0Z2RHaGxJR04xY25KbGJuUWdhSGR0TENCMGFHVnVJSEpoYVhObElIUm9aU0JvZDIwdVhHNGdJR2xtSUNodUlENGdjM1JoZEdVdWFHbG5hRmRoZEdWeVRXRnlheWtnYzNSaGRHVXVhR2xuYUZkaGRHVnlUV0Z5YXlBOUlHTnZiWEIxZEdWT1pYZElhV2RvVjJGMFpYSk5ZWEpyS0c0cE8xeHVJQ0JwWmlBb2JpQThQU0J6ZEdGMFpTNXNaVzVuZEdncElISmxkSFZ5YmlCdU8xeHVJQ0F2THlCRWIyNG5kQ0JvWVhabElHVnViM1ZuYUZ4dUlDQnBaaUFvSVhOMFlYUmxMbVZ1WkdWa0tTQjdYRzRnSUNBZ2MzUmhkR1V1Ym1WbFpGSmxZV1JoWW14bElEMGdkSEoxWlR0Y2JpQWdJQ0J5WlhSMWNtNGdNRHRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdjM1JoZEdVdWJHVnVaM1JvTzF4dWZWeHVYRzR2THlCNWIzVWdZMkZ1SUc5MlpYSnlhV1JsSUdWcGRHaGxjaUIwYUdseklHMWxkR2h2WkN3Z2IzSWdkR2hsSUdGemVXNWpJRjl5WldGa0tHNHBJR0psYkc5M0xseHVVbVZoWkdGaWJHVXVjSEp2ZEc5MGVYQmxMbkpsWVdRZ1BTQm1kVzVqZEdsdmJpQW9iaWtnZTF4dUlDQmtaV0oxWnlnbmNtVmhaQ2NzSUc0cE8xeHVJQ0J1SUQwZ2NHRnljMlZKYm5Rb2Jpd2dNVEFwTzF4dUlDQjJZWElnYzNSaGRHVWdQU0IwYUdsekxsOXlaV0ZrWVdKc1pWTjBZWFJsTzF4dUlDQjJZWElnYms5eWFXY2dQU0J1TzF4dVhHNGdJR2xtSUNodUlDRTlQU0F3S1NCemRHRjBaUzVsYldsMGRHVmtVbVZoWkdGaWJHVWdQU0JtWVd4elpUdGNibHh1SUNBdkx5QnBaaUIzWlNkeVpTQmtiMmx1WnlCeVpXRmtLREFwSUhSdklIUnlhV2RuWlhJZ1lTQnlaV0ZrWVdKc1pTQmxkbVZ1ZEN3Z1luVjBJSGRsWEc0Z0lDOHZJR0ZzY21WaFpIa2dhR0YyWlNCaElHSjFibU5vSUc5bUlHUmhkR0VnYVc0Z2RHaGxJR0oxWm1abGNpd2dkR2hsYmlCcWRYTjBJSFJ5YVdkblpYSmNiaUFnTHk4Z2RHaGxJQ2R5WldGa1lXSnNaU2NnWlhabGJuUWdZVzVrSUcxdmRtVWdiMjR1WEc0Z0lHbG1JQ2h1SUQwOVBTQXdJQ1ltSUhOMFlYUmxMbTVsWldSU1pXRmtZV0pzWlNBbUppQW9jM1JoZEdVdWJHVnVaM1JvSUQ0OUlITjBZWFJsTG1ocFoyaFhZWFJsY2sxaGNtc2dmSHdnYzNSaGRHVXVaVzVrWldRcEtTQjdYRzRnSUNBZ1pHVmlkV2NvSjNKbFlXUTZJR1Z0YVhSU1pXRmtZV0pzWlNjc0lITjBZWFJsTG14bGJtZDBhQ3dnYzNSaGRHVXVaVzVrWldRcE8xeHVJQ0FnSUdsbUlDaHpkR0YwWlM1c1pXNW5kR2dnUFQwOUlEQWdKaVlnYzNSaGRHVXVaVzVrWldRcElHVnVaRkpsWVdSaFlteGxLSFJvYVhNcE8yVnNjMlVnWlcxcGRGSmxZV1JoWW14bEtIUm9hWE1wTzF4dUlDQWdJSEpsZEhWeWJpQnVkV3hzTzF4dUlDQjlYRzVjYmlBZ2JpQTlJR2h2ZDAxMVkyaFViMUpsWVdRb2Jpd2djM1JoZEdVcE8xeHVYRzRnSUM4dklHbG1JSGRsSjNabElHVnVaR1ZrTENCaGJtUWdkMlVuY21VZ2JtOTNJR05zWldGeUxDQjBhR1Z1SUdacGJtbHphQ0JwZENCMWNDNWNiaUFnYVdZZ0tHNGdQVDA5SURBZ0ppWWdjM1JoZEdVdVpXNWtaV1FwSUh0Y2JpQWdJQ0JwWmlBb2MzUmhkR1V1YkdWdVozUm9JRDA5UFNBd0tTQmxibVJTWldGa1lXSnNaU2gwYUdsektUdGNiaUFnSUNCeVpYUjFjbTRnYm5Wc2JEdGNiaUFnZlZ4dVhHNGdJQzh2SUVGc2JDQjBhR1VnWVdOMGRXRnNJR05vZFc1cklHZGxibVZ5WVhScGIyNGdiRzluYVdNZ2JtVmxaSE1nZEc4Z1ltVmNiaUFnTHk4Z0ttSmxiRzkzS2lCMGFHVWdZMkZzYkNCMGJ5QmZjbVZoWkM0Z0lGUm9aU0J5WldGemIyNGdhWE1nZEdoaGRDQnBiaUJqWlhKMFlXbHVYRzRnSUM4dklITjViblJvWlhScFl5QnpkSEpsWVcwZ1kyRnpaWE1zSUhOMVkyZ2dZWE1nY0dGemMzUm9jbTkxWjJnZ2MzUnlaV0Z0Y3l3Z1gzSmxZV1JjYmlBZ0x5OGdiV0Y1SUdKbElHRWdZMjl0Y0d4bGRHVnNlU0J6ZVc1amFISnZibTkxY3lCdmNHVnlZWFJwYjI0Z2QyaHBZMmdnYldGNUlHTm9ZVzVuWlZ4dUlDQXZMeUIwYUdVZ2MzUmhkR1VnYjJZZ2RHaGxJSEpsWVdRZ1luVm1abVZ5TENCd2NtOTJhV1JwYm1jZ1pXNXZkV2RvSUdSaGRHRWdkMmhsYmx4dUlDQXZMeUJpWldadmNtVWdkR2hsY21VZ2QyRnpJQ3B1YjNRcUlHVnViM1ZuYUM1Y2JpQWdMeTljYmlBZ0x5OGdVMjhzSUhSb1pTQnpkR1Z3Y3lCaGNtVTZYRzRnSUM4dklERXVJRVpwWjNWeVpTQnZkWFFnZDJoaGRDQjBhR1VnYzNSaGRHVWdiMllnZEdocGJtZHpJSGRwYkd3Z1ltVWdZV1owWlhJZ2QyVWdaRzljYmlBZ0x5OGdZU0J5WldGa0lHWnliMjBnZEdobElHSjFabVpsY2k1Y2JpQWdMeTljYmlBZ0x5OGdNaTRnU1dZZ2RHaGhkQ0J5WlhOMWJIUnBibWNnYzNSaGRHVWdkMmxzYkNCMGNtbG5aMlZ5SUdFZ1gzSmxZV1FzSUhSb1pXNGdZMkZzYkNCZmNtVmhaQzVjYmlBZ0x5OGdUbTkwWlNCMGFHRjBJSFJvYVhNZ2JXRjVJR0psSUdGemVXNWphSEp2Ym05MWN5d2diM0lnYzNsdVkyaHliMjV2ZFhNdUlDQlpaWE1zSUdsMElHbHpYRzRnSUM4dklHUmxaWEJzZVNCMVoyeDVJSFJ2SUhkeWFYUmxJRUZRU1hNZ2RHaHBjeUIzWVhrc0lHSjFkQ0IwYUdGMElITjBhV3hzSUdSdlpYTnVKM1FnYldWaGJseHVJQ0F2THlCMGFHRjBJSFJvWlNCU1pXRmtZV0pzWlNCamJHRnpjeUJ6YUc5MWJHUWdZbVZvWVhabElHbHRjSEp2Y0dWeWJIa3NJR0Z6SUhOMGNtVmhiWE1nWVhKbFhHNGdJQzh2SUdSbGMybG5ibVZrSUhSdklHSmxJSE41Ym1NdllYTjVibU1nWVdkdWIzTjBhV011WEc0Z0lDOHZJRlJoYTJVZ2JtOTBaU0JwWmlCMGFHVWdYM0psWVdRZ1kyRnNiQ0JwY3lCemVXNWpJRzl5SUdGemVXNWpJQ2hwWlN3Z2FXWWdkR2hsSUhKbFlXUWdZMkZzYkZ4dUlDQXZMeUJvWVhNZ2NtVjBkWEp1WldRZ2VXVjBLU3dnYzI4Z2RHaGhkQ0IzWlNCcmJtOTNJSGRvWlhSb1pYSWdiM0lnYm05MElHbDBKM01nYzJGbVpTQjBieUJsYldsMFhHNGdJQzh2SUNkeVpXRmtZV0pzWlNjZ1pYUmpMbHh1SUNBdkwxeHVJQ0F2THlBekxpQkJZM1IxWVd4c2VTQndkV3hzSUhSb1pTQnlaWEYxWlhOMFpXUWdZMmgxYm10eklHOTFkQ0J2WmlCMGFHVWdZblZtWm1WeUlHRnVaQ0J5WlhSMWNtNHVYRzVjYmlBZ0x5OGdhV1lnZDJVZ2JtVmxaQ0JoSUhKbFlXUmhZbXhsSUdWMlpXNTBMQ0IwYUdWdUlIZGxJRzVsWldRZ2RHOGdaRzhnYzI5dFpTQnlaV0ZrYVc1bkxseHVJQ0IyWVhJZ1pHOVNaV0ZrSUQwZ2MzUmhkR1V1Ym1WbFpGSmxZV1JoWW14bE8xeHVJQ0JrWldKMVp5Z25ibVZsWkNCeVpXRmtZV0pzWlNjc0lHUnZVbVZoWkNrN1hHNWNiaUFnTHk4Z2FXWWdkMlVnWTNWeWNtVnVkR3g1SUdoaGRtVWdiR1Z6Y3lCMGFHRnVJSFJvWlNCb2FXZG9WMkYwWlhKTllYSnJMQ0IwYUdWdUlHRnNjMjhnY21WaFpDQnpiMjFsWEc0Z0lHbG1JQ2h6ZEdGMFpTNXNaVzVuZEdnZ1BUMDlJREFnZkh3Z2MzUmhkR1V1YkdWdVozUm9JQzBnYmlBOElITjBZWFJsTG1ocFoyaFhZWFJsY2sxaGNtc3BJSHRjYmlBZ0lDQmtiMUpsWVdRZ1BTQjBjblZsTzF4dUlDQWdJR1JsWW5WbktDZHNaVzVuZEdnZ2JHVnpjeUIwYUdGdUlIZGhkR1Z5YldGeWF5Y3NJR1J2VW1WaFpDazdYRzRnSUgxY2JseHVJQ0F2THlCb2IzZGxkbVZ5TENCcFppQjNaU2QyWlNCbGJtUmxaQ3dnZEdobGJpQjBhR1Z5WlNkeklHNXZJSEJ2YVc1MExDQmhibVFnYVdZZ2QyVW5jbVVnWVd4eVpXRmtlVnh1SUNBdkx5QnlaV0ZrYVc1bkxDQjBhR1Z1SUdsMEozTWdkVzV1WldObGMzTmhjbmt1WEc0Z0lHbG1JQ2h6ZEdGMFpTNWxibVJsWkNCOGZDQnpkR0YwWlM1eVpXRmthVzVuS1NCN1hHNGdJQ0FnWkc5U1pXRmtJRDBnWm1Gc2MyVTdYRzRnSUNBZ1pHVmlkV2NvSjNKbFlXUnBibWNnYjNJZ1pXNWtaV1FuTENCa2IxSmxZV1FwTzF4dUlDQjlJR1ZzYzJVZ2FXWWdLR1J2VW1WaFpDa2dlMXh1SUNBZ0lHUmxZblZuS0Nka2J5QnlaV0ZrSnlrN1hHNGdJQ0FnYzNSaGRHVXVjbVZoWkdsdVp5QTlJSFJ5ZFdVN1hHNGdJQ0FnYzNSaGRHVXVjM2x1WXlBOUlIUnlkV1U3WEc0Z0lDQWdMeThnYVdZZ2RHaGxJR3hsYm1kMGFDQnBjeUJqZFhKeVpXNTBiSGtnZW1WeWJ5d2dkR2hsYmlCM1pTQXFibVZsWkNvZ1lTQnlaV0ZrWVdKc1pTQmxkbVZ1ZEM1Y2JpQWdJQ0JwWmlBb2MzUmhkR1V1YkdWdVozUm9JRDA5UFNBd0tTQnpkR0YwWlM1dVpXVmtVbVZoWkdGaWJHVWdQU0IwY25WbE8xeHVJQ0FnSUM4dklHTmhiR3dnYVc1MFpYSnVZV3dnY21WaFpDQnRaWFJvYjJSY2JpQWdJQ0IwYUdsekxsOXlaV0ZrS0hOMFlYUmxMbWhwWjJoWFlYUmxjazFoY21zcE8xeHVJQ0FnSUhOMFlYUmxMbk41Ym1NZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0F2THlCSlppQmZjbVZoWkNCd2RYTm9aV1FnWkdGMFlTQnplVzVqYUhKdmJtOTFjMng1TENCMGFHVnVJR0J5WldGa2FXNW5ZQ0IzYVd4c0lHSmxJR1poYkhObExGeHVJQ0FnSUM4dklHRnVaQ0IzWlNCdVpXVmtJSFJ2SUhKbExXVjJZV3gxWVhSbElHaHZkeUJ0ZFdOb0lHUmhkR0VnZDJVZ1kyRnVJSEpsZEhWeWJpQjBieUIwYUdVZ2RYTmxjaTVjYmlBZ0lDQnBaaUFvSVhOMFlYUmxMbkpsWVdScGJtY3BJRzRnUFNCb2IzZE5kV05vVkc5U1pXRmtLRzVQY21sbkxDQnpkR0YwWlNrN1hHNGdJSDFjYmx4dUlDQjJZWElnY21WME8xeHVJQ0JwWmlBb2JpQStJREFwSUhKbGRDQTlJR1p5YjIxTWFYTjBLRzRzSUhOMFlYUmxLVHRsYkhObElISmxkQ0E5SUc1MWJHdzdYRzVjYmlBZ2FXWWdLSEpsZENBOVBUMGdiblZzYkNrZ2UxeHVJQ0FnSUhOMFlYUmxMbTVsWldSU1pXRmtZV0pzWlNBOUlIUnlkV1U3WEc0Z0lDQWdiaUE5SURBN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2MzUmhkR1V1YkdWdVozUm9JQzA5SUc0N1hHNGdJSDFjYmx4dUlDQnBaaUFvYzNSaGRHVXViR1Z1WjNSb0lEMDlQU0F3S1NCN1hHNGdJQ0FnTHk4Z1NXWWdkMlVnYUdGMlpTQnViM1JvYVc1bklHbHVJSFJvWlNCaWRXWm1aWElzSUhSb1pXNGdkMlVnZDJGdWRDQjBieUJyYm05M1hHNGdJQ0FnTHk4Z1lYTWdjMjl2YmlCaGN5QjNaU0FxWkc4cUlHZGxkQ0J6YjIxbGRHaHBibWNnYVc1MGJ5QjBhR1VnWW5WbVptVnlMbHh1SUNBZ0lHbG1JQ2doYzNSaGRHVXVaVzVrWldRcElITjBZWFJsTG01bFpXUlNaV0ZrWVdKc1pTQTlJSFJ5ZFdVN1hHNWNiaUFnSUNBdkx5QkpaaUIzWlNCMGNtbGxaQ0IwYnlCeVpXRmtLQ2tnY0dGemRDQjBhR1VnUlU5R0xDQjBhR1Z1SUdWdGFYUWdaVzVrSUc5dUlIUm9aU0J1WlhoMElIUnBZMnN1WEc0Z0lDQWdhV1lnS0c1UGNtbG5JQ0U5UFNCdUlDWW1JSE4wWVhSbExtVnVaR1ZrS1NCbGJtUlNaV0ZrWVdKc1pTaDBhR2x6S1R0Y2JpQWdmVnh1WEc0Z0lHbG1JQ2h5WlhRZ0lUMDlJRzUxYkd3cElIUm9hWE11WlcxcGRDZ25aR0YwWVNjc0lISmxkQ2s3WEc1Y2JpQWdjbVYwZFhKdUlISmxkRHRjYm4wN1hHNWNibVoxYm1OMGFXOXVJR05vZFc1clNXNTJZV3hwWkNoemRHRjBaU3dnWTJoMWJtc3BJSHRjYmlBZ2RtRnlJR1Z5SUQwZ2JuVnNiRHRjYmlBZ2FXWWdLQ0ZDZFdabVpYSXVhWE5DZFdabVpYSW9ZMmgxYm1zcElDWW1JSFI1Y0dWdlppQmphSFZ1YXlBaFBUMGdKM04wY21sdVp5Y2dKaVlnWTJoMWJtc2dJVDA5SUc1MWJHd2dKaVlnWTJoMWJtc2dJVDA5SUhWdVpHVm1hVzVsWkNBbUppQWhjM1JoZEdVdWIySnFaV04wVFc5a1pTa2dlMXh1SUNBZ0lHVnlJRDBnYm1WM0lGUjVjR1ZGY25KdmNpZ25TVzUyWVd4cFpDQnViMjR0YzNSeWFXNW5MMkoxWm1abGNpQmphSFZ1YXljcE8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCbGNqdGNibjFjYmx4dVpuVnVZM1JwYjI0Z2IyNUZiMlpEYUhWdWF5aHpkSEpsWVcwc0lITjBZWFJsS1NCN1hHNGdJR2xtSUNoemRHRjBaUzVsYm1SbFpDa2djbVYwZFhKdU8xeHVJQ0JwWmlBb2MzUmhkR1V1WkdWamIyUmxjaWtnZTF4dUlDQWdJSFpoY2lCamFIVnVheUE5SUhOMFlYUmxMbVJsWTI5a1pYSXVaVzVrS0NrN1hHNGdJQ0FnYVdZZ0tHTm9kVzVySUNZbUlHTm9kVzVyTG14bGJtZDBhQ2tnZTF4dUlDQWdJQ0FnYzNSaGRHVXVZblZtWm1WeUxuQjFjMmdvWTJoMWJtc3BPMXh1SUNBZ0lDQWdjM1JoZEdVdWJHVnVaM1JvSUNzOUlITjBZWFJsTG05aWFtVmpkRTF2WkdVZ1B5QXhJRG9nWTJoMWJtc3ViR1Z1WjNSb08xeHVJQ0FnSUgxY2JpQWdmVnh1SUNCemRHRjBaUzVsYm1SbFpDQTlJSFJ5ZFdVN1hHNWNiaUFnTHk4Z1pXMXBkQ0FuY21WaFpHRmliR1VuSUc1dmR5QjBieUJ0WVd0bElITjFjbVVnYVhRZ1oyVjBjeUJ3YVdOclpXUWdkWEF1WEc0Z0lHVnRhWFJTWldGa1lXSnNaU2h6ZEhKbFlXMHBPMXh1ZlZ4dVhHNHZMeUJFYjI0bmRDQmxiV2wwSUhKbFlXUmhZbXhsSUhKcFoyaDBJR0YzWVhrZ2FXNGdjM2x1WXlCdGIyUmxMQ0JpWldOaGRYTmxJSFJvYVhNZ1kyRnVJSFJ5YVdkblpYSmNiaTh2SUdGdWIzUm9aWElnY21WaFpDZ3BJR05oYkd3Z1BUNGdjM1JoWTJzZ2IzWmxjbVpzYjNjdUlDQlVhR2x6SUhkaGVTd2dhWFFnYldsbmFIUWdkSEpwWjJkbGNseHVMeThnWVNCdVpYaDBWR2xqYXlCeVpXTjFjbk5wYjI0Z2QyRnlibWx1Wnl3Z1luVjBJSFJvWVhRbmN5QnViM1FnYzI4Z1ltRmtMbHh1Wm5WdVkzUnBiMjRnWlcxcGRGSmxZV1JoWW14bEtITjBjbVZoYlNrZ2UxeHVJQ0IyWVhJZ2MzUmhkR1VnUFNCemRISmxZVzB1WDNKbFlXUmhZbXhsVTNSaGRHVTdYRzRnSUhOMFlYUmxMbTVsWldSU1pXRmtZV0pzWlNBOUlHWmhiSE5sTzF4dUlDQnBaaUFvSVhOMFlYUmxMbVZ0YVhSMFpXUlNaV0ZrWVdKc1pTa2dlMXh1SUNBZ0lHUmxZblZuS0NkbGJXbDBVbVZoWkdGaWJHVW5MQ0J6ZEdGMFpTNW1iRzkzYVc1bktUdGNiaUFnSUNCemRHRjBaUzVsYldsMGRHVmtVbVZoWkdGaWJHVWdQU0IwY25WbE8xeHVJQ0FnSUdsbUlDaHpkR0YwWlM1emVXNWpLU0J3Y205alpYTnpUbVY0ZEZScFkyc29aVzFwZEZKbFlXUmhZbXhsWHl3Z2MzUnlaV0Z0S1R0bGJITmxJR1Z0YVhSU1pXRmtZV0pzWlY4b2MzUnlaV0Z0S1R0Y2JpQWdmVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmxiV2wwVW1WaFpHRmliR1ZmS0hOMGNtVmhiU2tnZTF4dUlDQmtaV0oxWnlnblpXMXBkQ0J5WldGa1lXSnNaU2NwTzF4dUlDQnpkSEpsWVcwdVpXMXBkQ2duY21WaFpHRmliR1VuS1R0Y2JpQWdabXh2ZHloemRISmxZVzBwTzF4dWZWeHVYRzR2THlCaGRDQjBhR2x6SUhCdmFXNTBMQ0IwYUdVZ2RYTmxjaUJvWVhNZ2NISmxjM1Z0WVdKc2VTQnpaV1Z1SUhSb1pTQW5jbVZoWkdGaWJHVW5JR1YyWlc1MExGeHVMeThnWVc1a0lHTmhiR3hsWkNCeVpXRmtLQ2tnZEc4Z1kyOXVjM1Z0WlNCemIyMWxJR1JoZEdFdUlDQjBhR0YwSUcxaGVTQm9ZWFpsSUhSeWFXZG5aWEpsWkZ4dUx5OGdhVzRnZEhWeWJpQmhibTkwYUdWeUlGOXlaV0ZrS0c0cElHTmhiR3dzSUdsdUlIZG9hV05vSUdOaGMyVWdjbVZoWkdsdVp5QTlJSFJ5ZFdVZ2FXWmNiaTh2SUdsMEozTWdhVzRnY0hKdlozSmxjM011WEc0dkx5QkliM2RsZG1WeUxDQnBaaUIzWlNkeVpTQnViM1FnWlc1a1pXUXNJRzl5SUhKbFlXUnBibWNzSUdGdVpDQjBhR1VnYkdWdVozUm9JRHdnYUhkdExGeHVMeThnZEdobGJpQm5ieUJoYUdWaFpDQmhibVFnZEhKNUlIUnZJSEpsWVdRZ2MyOXRaU0J0YjNKbElIQnlaV1Z0Y0hScGRtVnNlUzVjYm1aMWJtTjBhVzl1SUcxaGVXSmxVbVZoWkUxdmNtVW9jM1J5WldGdExDQnpkR0YwWlNrZ2UxeHVJQ0JwWmlBb0lYTjBZWFJsTG5KbFlXUnBibWROYjNKbEtTQjdYRzRnSUNBZ2MzUmhkR1V1Y21WaFpHbHVaMDF2Y21VZ1BTQjBjblZsTzF4dUlDQWdJSEJ5YjJObGMzTk9aWGgwVkdsamF5aHRZWGxpWlZKbFlXUk5iM0psWHl3Z2MzUnlaV0Z0TENCemRHRjBaU2s3WEc0Z0lIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z2JXRjVZbVZTWldGa1RXOXlaVjhvYzNSeVpXRnRMQ0J6ZEdGMFpTa2dlMXh1SUNCMllYSWdiR1Z1SUQwZ2MzUmhkR1V1YkdWdVozUm9PMXh1SUNCM2FHbHNaU0FvSVhOMFlYUmxMbkpsWVdScGJtY2dKaVlnSVhOMFlYUmxMbVpzYjNkcGJtY2dKaVlnSVhOMFlYUmxMbVZ1WkdWa0lDWW1JSE4wWVhSbExteGxibWQwYUNBOElITjBZWFJsTG1ocFoyaFhZWFJsY2sxaGNtc3BJSHRjYmlBZ0lDQmtaV0oxWnlnbmJXRjVZbVZTWldGa1RXOXlaU0J5WldGa0lEQW5LVHRjYmlBZ0lDQnpkSEpsWVcwdWNtVmhaQ2d3S1R0Y2JpQWdJQ0JwWmlBb2JHVnVJRDA5UFNCemRHRjBaUzVzWlc1bmRHZ3BYRzRnSUNBZ0lDQXZMeUJrYVdSdUozUWdaMlYwSUdGdWVTQmtZWFJoTENCemRHOXdJSE53YVc1dWFXNW5MbHh1SUNBZ0lDQWdZbkpsWVdzN1pXeHpaU0JzWlc0Z1BTQnpkR0YwWlM1c1pXNW5kR2c3WEc0Z0lIMWNiaUFnYzNSaGRHVXVjbVZoWkdsdVowMXZjbVVnUFNCbVlXeHpaVHRjYm4xY2JseHVMeThnWVdKemRISmhZM1FnYldWMGFHOWtMaUFnZEc4Z1ltVWdiM1psY25KcFpHUmxiaUJwYmlCemNHVmphV1pwWXlCcGJYQnNaVzFsYm5SaGRHbHZiaUJqYkdGemMyVnpMbHh1THk4Z1kyRnNiQ0JqWWlobGNpd2daR0YwWVNrZ2QyaGxjbVVnWkdGMFlTQnBjeUE4UFNCdUlHbHVJR3hsYm1kMGFDNWNiaTh2SUdadmNpQjJhWEowZFdGc0lDaHViMjR0YzNSeWFXNW5MQ0J1YjI0dFluVm1abVZ5S1NCemRISmxZVzF6TENCY0lteGxibWQwYUZ3aUlHbHpJSE52YldWM2FHRjBYRzR2THlCaGNtSnBkSEpoY25rc0lHRnVaQ0J3WlhKb1lYQnpJRzV2ZENCMlpYSjVJRzFsWVc1cGJtZG1kV3d1WEc1U1pXRmtZV0pzWlM1d2NtOTBiM1I1Y0dVdVgzSmxZV1FnUFNCbWRXNWpkR2x2YmlBb2Jpa2dlMXh1SUNCMGFHbHpMbVZ0YVhRb0oyVnljbTl5Snl3Z2JtVjNJRVZ5Y205eUtDZGZjbVZoWkNncElHbHpJRzV2ZENCcGJYQnNaVzFsYm5SbFpDY3BLVHRjYm4wN1hHNWNibEpsWVdSaFlteGxMbkJ5YjNSdmRIbHdaUzV3YVhCbElEMGdablZ1WTNScGIyNGdLR1JsYzNRc0lIQnBjR1ZQY0hSektTQjdYRzRnSUhaaGNpQnpjbU1nUFNCMGFHbHpPMXh1SUNCMllYSWdjM1JoZEdVZ1BTQjBhR2x6TGw5eVpXRmtZV0pzWlZOMFlYUmxPMXh1WEc0Z0lITjNhWFJqYUNBb2MzUmhkR1V1Y0dsd1pYTkRiM1Z1ZENrZ2UxeHVJQ0FnSUdOaGMyVWdNRHBjYmlBZ0lDQWdJSE4wWVhSbExuQnBjR1Z6SUQwZ1pHVnpkRHRjYmlBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUdOaGMyVWdNVHBjYmlBZ0lDQWdJSE4wWVhSbExuQnBjR1Z6SUQwZ1czTjBZWFJsTG5CcGNHVnpMQ0JrWlhOMFhUdGNiaUFnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJR1JsWm1GMWJIUTZYRzRnSUNBZ0lDQnpkR0YwWlM1d2FYQmxjeTV3ZFhOb0tHUmxjM1FwTzF4dUlDQWdJQ0FnWW5KbFlXczdYRzRnSUgxY2JpQWdjM1JoZEdVdWNHbHdaWE5EYjNWdWRDQXJQU0F4TzF4dUlDQmtaV0oxWnlnbmNHbHdaU0JqYjNWdWREMGxaQ0J2Y0hSelBTVnFKeXdnYzNSaGRHVXVjR2x3WlhORGIzVnVkQ3dnY0dsd1pVOXdkSE1wTzF4dVhHNGdJSFpoY2lCa2IwVnVaQ0E5SUNnaGNHbHdaVTl3ZEhNZ2ZId2djR2x3WlU5d2RITXVaVzVrSUNFOVBTQm1ZV3h6WlNrZ0ppWWdaR1Z6ZENBaFBUMGdjSEp2WTJWemN5NXpkR1J2ZFhRZ0ppWWdaR1Z6ZENBaFBUMGdjSEp2WTJWemN5NXpkR1JsY25JN1hHNWNiaUFnZG1GeUlHVnVaRVp1SUQwZ1pHOUZibVFnUHlCdmJtVnVaQ0E2SUdOc1pXRnVkWEE3WEc0Z0lHbG1JQ2h6ZEdGMFpTNWxibVJGYldsMGRHVmtLU0J3Y205alpYTnpUbVY0ZEZScFkyc29aVzVrUm00cE8yVnNjMlVnYzNKakxtOXVZMlVvSjJWdVpDY3NJR1Z1WkVadUtUdGNibHh1SUNCa1pYTjBMbTl1S0NkMWJuQnBjR1VuTENCdmJuVnVjR2x3WlNrN1hHNGdJR1oxYm1OMGFXOXVJRzl1ZFc1d2FYQmxLSEpsWVdSaFlteGxLU0I3WEc0Z0lDQWdaR1ZpZFdjb0oyOXVkVzV3YVhCbEp5azdYRzRnSUNBZ2FXWWdLSEpsWVdSaFlteGxJRDA5UFNCemNtTXBJSHRjYmlBZ0lDQWdJR05zWldGdWRYQW9LVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0JtZFc1amRHbHZiaUJ2Ym1WdVpDZ3BJSHRjYmlBZ0lDQmtaV0oxWnlnbmIyNWxibVFuS1R0Y2JpQWdJQ0JrWlhOMExtVnVaQ2dwTzF4dUlDQjlYRzVjYmlBZ0x5OGdkMmhsYmlCMGFHVWdaR1Z6ZENCa2NtRnBibk1zSUdsMElISmxaSFZqWlhNZ2RHaGxJR0YzWVdsMFJISmhhVzRnWTI5MWJuUmxjbHh1SUNBdkx5QnZiaUIwYUdVZ2MyOTFjbU5sTGlBZ1ZHaHBjeUIzYjNWc1pDQmlaU0J0YjNKbElHVnNaV2RoYm5RZ2QybDBhQ0JoSUM1dmJtTmxLQ2xjYmlBZ0x5OGdhR0Z1Wkd4bGNpQnBiaUJtYkc5M0tDa3NJR0oxZENCaFpHUnBibWNnWVc1a0lISmxiVzkyYVc1bklISmxjR1ZoZEdWa2JIa2dhWE5jYmlBZ0x5OGdkRzl2SUhOc2IzY3VYRzRnSUhaaGNpQnZibVJ5WVdsdUlEMGdjR2x3WlU5dVJISmhhVzRvYzNKaktUdGNiaUFnWkdWemRDNXZiaWduWkhKaGFXNG5MQ0J2Ym1SeVlXbHVLVHRjYmx4dUlDQjJZWElnWTJ4bFlXNWxaRlZ3SUQwZ1ptRnNjMlU3WEc0Z0lHWjFibU4wYVc5dUlHTnNaV0Z1ZFhBb0tTQjdYRzRnSUNBZ1pHVmlkV2NvSjJOc1pXRnVkWEFuS1R0Y2JpQWdJQ0F2THlCamJHVmhiblZ3SUdWMlpXNTBJR2hoYm1Sc1pYSnpJRzl1WTJVZ2RHaGxJSEJwY0dVZ2FYTWdZbkp2YTJWdVhHNGdJQ0FnWkdWemRDNXlaVzF2ZG1WTWFYTjBaVzVsY2lnblkyeHZjMlVuTENCdmJtTnNiM05sS1R0Y2JpQWdJQ0JrWlhOMExuSmxiVzkyWlV4cGMzUmxibVZ5S0NkbWFXNXBjMmduTENCdmJtWnBibWx6YUNrN1hHNGdJQ0FnWkdWemRDNXlaVzF2ZG1WTWFYTjBaVzVsY2lnblpISmhhVzRuTENCdmJtUnlZV2x1S1R0Y2JpQWdJQ0JrWlhOMExuSmxiVzkyWlV4cGMzUmxibVZ5S0NkbGNuSnZjaWNzSUc5dVpYSnliM0lwTzF4dUlDQWdJR1JsYzNRdWNtVnRiM1psVEdsemRHVnVaWElvSjNWdWNHbHdaU2NzSUc5dWRXNXdhWEJsS1R0Y2JpQWdJQ0J6Y21NdWNtVnRiM1psVEdsemRHVnVaWElvSjJWdVpDY3NJRzl1Wlc1a0tUdGNiaUFnSUNCemNtTXVjbVZ0YjNabFRHbHpkR1Z1WlhJb0oyVnVaQ2NzSUdOc1pXRnVkWEFwTzF4dUlDQWdJSE55WXk1eVpXMXZkbVZNYVhOMFpXNWxjaWduWkdGMFlTY3NJRzl1WkdGMFlTazdYRzVjYmlBZ0lDQmpiR1ZoYm1Wa1ZYQWdQU0IwY25WbE8xeHVYRzRnSUNBZ0x5OGdhV1lnZEdobElISmxZV1JsY2lCcGN5QjNZV2wwYVc1bklHWnZjaUJoSUdSeVlXbHVJR1YyWlc1MElHWnliMjBnZEdocGMxeHVJQ0FnSUM4dklITndaV05wWm1saklIZHlhWFJsY2l3Z2RHaGxiaUJwZENCM2IzVnNaQ0JqWVhWelpTQnBkQ0IwYnlCdVpYWmxjaUJ6ZEdGeWRGeHVJQ0FnSUM4dklHWnNiM2RwYm1jZ1lXZGhhVzR1WEc0Z0lDQWdMeThnVTI4c0lHbG1JSFJvYVhNZ2FYTWdZWGRoYVhScGJtY2dZU0JrY21GcGJpd2dkR2hsYmlCM1pTQnFkWE4wSUdOaGJHd2dhWFFnYm05M0xseHVJQ0FnSUM4dklFbG1JSGRsSUdSdmJpZDBJR3R1YjNjc0lIUm9aVzRnWVhOemRXMWxJSFJvWVhRZ2QyVWdZWEpsSUhkaGFYUnBibWNnWm05eUlHOXVaUzVjYmlBZ0lDQnBaaUFvYzNSaGRHVXVZWGRoYVhSRWNtRnBiaUFtSmlBb0lXUmxjM1F1WDNkeWFYUmhZbXhsVTNSaGRHVWdmSHdnWkdWemRDNWZkM0pwZEdGaWJHVlRkR0YwWlM1dVpXVmtSSEpoYVc0cEtTQnZibVJ5WVdsdUtDazdYRzRnSUgxY2JseHVJQ0F2THlCSlppQjBhR1VnZFhObGNpQndkWE5vWlhNZ2JXOXlaU0JrWVhSaElIZG9hV3hsSUhkbEozSmxJSGR5YVhScGJtY2dkRzhnWkdWemRDQjBhR1Z1SUhkbEoyeHNJR1Z1WkNCMWNGeHVJQ0F2THlCcGJpQnZibVJoZEdFZ1lXZGhhVzR1SUVodmQyVjJaWElzSUhkbElHOXViSGtnZDJGdWRDQjBieUJwYm1OeVpXRnpaU0JoZDJGcGRFUnlZV2x1SUc5dVkyVWdZbVZqWVhWelpWeHVJQ0F2THlCa1pYTjBJSGRwYkd3Z2IyNXNlU0JsYldsMElHOXVaU0FuWkhKaGFXNG5JR1YyWlc1MElHWnZjaUIwYUdVZ2JYVnNkR2x3YkdVZ2QzSnBkR1Z6TGx4dUlDQXZMeUE5UGlCSmJuUnliMlIxWTJVZ1lTQm5kV0Z5WkNCdmJpQnBibU55WldGemFXNW5JR0YzWVdsMFJISmhhVzR1WEc0Z0lIWmhjaUJwYm1OeVpXRnpaV1JCZDJGcGRFUnlZV2x1SUQwZ1ptRnNjMlU3WEc0Z0lITnlZeTV2YmlnblpHRjBZU2NzSUc5dVpHRjBZU2s3WEc0Z0lHWjFibU4wYVc5dUlHOXVaR0YwWVNoamFIVnVheWtnZTF4dUlDQWdJR1JsWW5WbktDZHZibVJoZEdFbktUdGNiaUFnSUNCcGJtTnlaV0Z6WldSQmQyRnBkRVJ5WVdsdUlEMGdabUZzYzJVN1hHNGdJQ0FnZG1GeUlISmxkQ0E5SUdSbGMzUXVkM0pwZEdVb1kyaDFibXNwTzF4dUlDQWdJR2xtSUNobVlXeHpaU0E5UFQwZ2NtVjBJQ1ltSUNGcGJtTnlaV0Z6WldSQmQyRnBkRVJ5WVdsdUtTQjdYRzRnSUNBZ0lDQXZMeUJKWmlCMGFHVWdkWE5sY2lCMWJuQnBjR1ZrSUdSMWNtbHVaeUJnWkdWemRDNTNjbWwwWlNncFlDd2dhWFFnYVhNZ2NHOXpjMmxpYkdWY2JpQWdJQ0FnSUM4dklIUnZJR2RsZENCemRIVmpheUJwYmlCaElIQmxjbTFoYm1WdWRHeDVJSEJoZFhObFpDQnpkR0YwWlNCcFppQjBhR0YwSUhkeWFYUmxYRzRnSUNBZ0lDQXZMeUJoYkhOdklISmxkSFZ5Ym1Wa0lHWmhiSE5sTGx4dUlDQWdJQ0FnTHk4Z1BUNGdRMmhsWTJzZ2QyaGxkR2hsY2lCZ1pHVnpkR0FnYVhNZ2MzUnBiR3dnWVNCd2FYQnBibWNnWkdWemRHbHVZWFJwYjI0dVhHNGdJQ0FnSUNCcFppQW9LSE4wWVhSbExuQnBjR1Z6UTI5MWJuUWdQVDA5SURFZ0ppWWdjM1JoZEdVdWNHbHdaWE1nUFQwOUlHUmxjM1FnZkh3Z2MzUmhkR1V1Y0dsd1pYTkRiM1Z1ZENBK0lERWdKaVlnYVc1a1pYaFBaaWh6ZEdGMFpTNXdhWEJsY3l3Z1pHVnpkQ2tnSVQwOUlDMHhLU0FtSmlBaFkyeGxZVzVsWkZWd0tTQjdYRzRnSUNBZ0lDQWdJR1JsWW5WbktDZG1ZV3h6WlNCM2NtbDBaU0J5WlhOd2IyNXpaU3dnY0dGMWMyVW5MQ0J6Y21NdVgzSmxZV1JoWW14bFUzUmhkR1V1WVhkaGFYUkVjbUZwYmlrN1hHNGdJQ0FnSUNBZ0lITnlZeTVmY21WaFpHRmliR1ZUZEdGMFpTNWhkMkZwZEVSeVlXbHVLeXM3WEc0Z0lDQWdJQ0FnSUdsdVkzSmxZWE5sWkVGM1lXbDBSSEpoYVc0Z1BTQjBjblZsTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnYzNKakxuQmhkWE5sS0NrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ0x5OGdhV1lnZEdobElHUmxjM1FnYUdGeklHRnVJR1Z5Y205eUxDQjBhR1Z1SUhOMGIzQWdjR2x3YVc1bklHbHVkRzhnYVhRdVhHNGdJQzh2SUdodmQyVjJaWElzSUdSdmJpZDBJSE4xY0hCeVpYTnpJSFJvWlNCMGFISnZkMmx1WnlCaVpXaGhkbWx2Y2lCbWIzSWdkR2hwY3k1Y2JpQWdablZ1WTNScGIyNGdiMjVsY25KdmNpaGxjaWtnZTF4dUlDQWdJR1JsWW5WbktDZHZibVZ5Y205eUp5d2daWElwTzF4dUlDQWdJSFZ1Y0dsd1pTZ3BPMXh1SUNBZ0lHUmxjM1F1Y21WdGIzWmxUR2x6ZEdWdVpYSW9KMlZ5Y205eUp5d2diMjVsY25KdmNpazdYRzRnSUNBZ2FXWWdLRVZGYkdsemRHVnVaWEpEYjNWdWRDaGtaWE4wTENBblpYSnliM0luS1NBOVBUMGdNQ2tnWkdWemRDNWxiV2wwS0NkbGNuSnZjaWNzSUdWeUtUdGNiaUFnZlZ4dVhHNGdJQzh2SUUxaGEyVWdjM1Z5WlNCdmRYSWdaWEp5YjNJZ2FHRnVaR3hsY2lCcGN5QmhkSFJoWTJobFpDQmlaV1p2Y21VZ2RYTmxjbXhoYm1RZ2IyNWxjeTVjYmlBZ2NISmxjR1Z1WkV4cGMzUmxibVZ5S0dSbGMzUXNJQ2RsY25KdmNpY3NJRzl1WlhKeWIzSXBPMXh1WEc0Z0lDOHZJRUp2ZEdnZ1kyeHZjMlVnWVc1a0lHWnBibWx6YUNCemFHOTFiR1FnZEhKcFoyZGxjaUIxYm5CcGNHVXNJR0oxZENCdmJteDVJRzl1WTJVdVhHNGdJR1oxYm1OMGFXOXVJRzl1WTJ4dmMyVW9LU0I3WEc0Z0lDQWdaR1Z6ZEM1eVpXMXZkbVZNYVhOMFpXNWxjaWduWm1sdWFYTm9KeXdnYjI1bWFXNXBjMmdwTzF4dUlDQWdJSFZ1Y0dsd1pTZ3BPMXh1SUNCOVhHNGdJR1JsYzNRdWIyNWpaU2duWTJ4dmMyVW5MQ0J2Ym1Oc2IzTmxLVHRjYmlBZ1puVnVZM1JwYjI0Z2IyNW1hVzVwYzJnb0tTQjdYRzRnSUNBZ1pHVmlkV2NvSjI5dVptbHVhWE5vSnlrN1hHNGdJQ0FnWkdWemRDNXlaVzF2ZG1WTWFYTjBaVzVsY2lnblkyeHZjMlVuTENCdmJtTnNiM05sS1R0Y2JpQWdJQ0IxYm5CcGNHVW9LVHRjYmlBZ2ZWeHVJQ0JrWlhOMExtOXVZMlVvSjJacGJtbHphQ2NzSUc5dVptbHVhWE5vS1R0Y2JseHVJQ0JtZFc1amRHbHZiaUIxYm5CcGNHVW9LU0I3WEc0Z0lDQWdaR1ZpZFdjb0ozVnVjR2x3WlNjcE8xeHVJQ0FnSUhOeVl5NTFibkJwY0dVb1pHVnpkQ2s3WEc0Z0lIMWNibHh1SUNBdkx5QjBaV3hzSUhSb1pTQmtaWE4wSUhSb1lYUWdhWFFuY3lCaVpXbHVaeUJ3YVhCbFpDQjBiMXh1SUNCa1pYTjBMbVZ0YVhRb0ozQnBjR1VuTENCemNtTXBPMXh1WEc0Z0lDOHZJSE4wWVhKMElIUm9aU0JtYkc5M0lHbG1JR2wwSUdoaGMyNG5kQ0JpWldWdUlITjBZWEowWldRZ1lXeHlaV0ZrZVM1Y2JpQWdhV1lnS0NGemRHRjBaUzVtYkc5M2FXNW5LU0I3WEc0Z0lDQWdaR1ZpZFdjb0ozQnBjR1VnY21WemRXMWxKeWs3WEc0Z0lDQWdjM0pqTG5KbGMzVnRaU2dwTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUdSbGMzUTdYRzU5TzF4dVhHNW1kVzVqZEdsdmJpQndhWEJsVDI1RWNtRnBiaWh6Y21NcElIdGNiaUFnY21WMGRYSnVJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0IyWVhJZ2MzUmhkR1VnUFNCemNtTXVYM0psWVdSaFlteGxVM1JoZEdVN1hHNGdJQ0FnWkdWaWRXY29KM0JwY0dWUGJrUnlZV2x1Snl3Z2MzUmhkR1V1WVhkaGFYUkVjbUZwYmlrN1hHNGdJQ0FnYVdZZ0tITjBZWFJsTG1GM1lXbDBSSEpoYVc0cElITjBZWFJsTG1GM1lXbDBSSEpoYVc0dExUdGNiaUFnSUNCcFppQW9jM1JoZEdVdVlYZGhhWFJFY21GcGJpQTlQVDBnTUNBbUppQkZSV3hwYzNSbGJtVnlRMjkxYm5Rb2MzSmpMQ0FuWkdGMFlTY3BLU0I3WEc0Z0lDQWdJQ0J6ZEdGMFpTNW1iRzkzYVc1bklEMGdkSEoxWlR0Y2JpQWdJQ0FnSUdac2IzY29jM0pqS1R0Y2JpQWdJQ0I5WEc0Z0lIMDdYRzU5WEc1Y2JsSmxZV1JoWW14bExuQnliM1J2ZEhsd1pTNTFibkJwY0dVZ1BTQm1kVzVqZEdsdmJpQW9aR1Z6ZENrZ2UxeHVJQ0IyWVhJZ2MzUmhkR1VnUFNCMGFHbHpMbDl5WldGa1lXSnNaVk4wWVhSbE8xeHVYRzRnSUM4dklHbG1JSGRsSjNKbElHNXZkQ0J3YVhCcGJtY2dZVzU1ZDJobGNtVXNJSFJvWlc0Z1pHOGdibTkwYUdsdVp5NWNiaUFnYVdZZ0tITjBZWFJsTG5CcGNHVnpRMjkxYm5RZ1BUMDlJREFwSUhKbGRIVnliaUIwYUdsek8xeHVYRzRnSUM4dklHcDFjM1FnYjI1bElHUmxjM1JwYm1GMGFXOXVMaUFnYlc5emRDQmpiMjF0YjI0Z1kyRnpaUzVjYmlBZ2FXWWdLSE4wWVhSbExuQnBjR1Z6UTI5MWJuUWdQVDA5SURFcElIdGNiaUFnSUNBdkx5QndZWE56WldRZ2FXNGdiMjVsTENCaWRYUWdhWFFuY3lCdWIzUWdkR2hsSUhKcFoyaDBJRzl1WlM1Y2JpQWdJQ0JwWmlBb1pHVnpkQ0FtSmlCa1pYTjBJQ0U5UFNCemRHRjBaUzV3YVhCbGN5a2djbVYwZFhKdUlIUm9hWE03WEc1Y2JpQWdJQ0JwWmlBb0lXUmxjM1FwSUdSbGMzUWdQU0J6ZEdGMFpTNXdhWEJsY3p0Y2JseHVJQ0FnSUM4dklHZHZkQ0JoSUcxaGRHTm9MbHh1SUNBZ0lITjBZWFJsTG5CcGNHVnpJRDBnYm5Wc2JEdGNiaUFnSUNCemRHRjBaUzV3YVhCbGMwTnZkVzUwSUQwZ01EdGNiaUFnSUNCemRHRjBaUzVtYkc5M2FXNW5JRDBnWm1Gc2MyVTdYRzRnSUNBZ2FXWWdLR1JsYzNRcElHUmxjM1F1WlcxcGRDZ25kVzV3YVhCbEp5d2dkR2hwY3lrN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQXZMeUJ6Ykc5M0lHTmhjMlV1SUcxMWJIUnBjR3hsSUhCcGNHVWdaR1Z6ZEdsdVlYUnBiMjV6TGx4dVhHNGdJR2xtSUNnaFpHVnpkQ2tnZTF4dUlDQWdJQzh2SUhKbGJXOTJaU0JoYkd3dVhHNGdJQ0FnZG1GeUlHUmxjM1J6SUQwZ2MzUmhkR1V1Y0dsd1pYTTdYRzRnSUNBZ2RtRnlJR3hsYmlBOUlITjBZWFJsTG5CcGNHVnpRMjkxYm5RN1hHNGdJQ0FnYzNSaGRHVXVjR2x3WlhNZ1BTQnVkV3hzTzF4dUlDQWdJSE4wWVhSbExuQnBjR1Z6UTI5MWJuUWdQU0F3TzF4dUlDQWdJSE4wWVhSbExtWnNiM2RwYm1jZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2JHVnVPeUJwS3lzcElIdGNiaUFnSUNBZ0lHUmxjM1J6VzJsZExtVnRhWFFvSjNWdWNHbHdaU2NzSUhSb2FYTXBPMXh1SUNBZ0lIMXlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVYRzRnSUM4dklIUnllU0IwYnlCbWFXNWtJSFJvWlNCeWFXZG9kQ0J2Ym1VdVhHNGdJSFpoY2lCcGJtUmxlQ0E5SUdsdVpHVjRUMllvYzNSaGRHVXVjR2x3WlhNc0lHUmxjM1FwTzF4dUlDQnBaaUFvYVc1a1pYZ2dQVDA5SUMweEtTQnlaWFIxY200Z2RHaHBjenRjYmx4dUlDQnpkR0YwWlM1d2FYQmxjeTV6Y0d4cFkyVW9hVzVrWlhnc0lERXBPMXh1SUNCemRHRjBaUzV3YVhCbGMwTnZkVzUwSUMwOUlERTdYRzRnSUdsbUlDaHpkR0YwWlM1d2FYQmxjME52ZFc1MElEMDlQU0F4S1NCemRHRjBaUzV3YVhCbGN5QTlJSE4wWVhSbExuQnBjR1Z6V3pCZE8xeHVYRzRnSUdSbGMzUXVaVzFwZENnbmRXNXdhWEJsSnl3Z2RHaHBjeWs3WEc1Y2JpQWdjbVYwZFhKdUlIUm9hWE03WEc1OU8xeHVYRzR2THlCelpYUWdkWEFnWkdGMFlTQmxkbVZ1ZEhNZ2FXWWdkR2hsZVNCaGNtVWdZWE5yWldRZ1ptOXlYRzR2THlCRmJuTjFjbVVnY21WaFpHRmliR1VnYkdsemRHVnVaWEp6SUdWMlpXNTBkV0ZzYkhrZ1oyVjBJSE52YldWMGFHbHVaMXh1VW1WaFpHRmliR1V1Y0hKdmRHOTBlWEJsTG05dUlEMGdablZ1WTNScGIyNGdLR1YyTENCbWJpa2dlMXh1SUNCMllYSWdjbVZ6SUQwZ1UzUnlaV0Z0TG5CeWIzUnZkSGx3WlM1dmJpNWpZV3hzS0hSb2FYTXNJR1YyTENCbWJpazdYRzVjYmlBZ2FXWWdLR1YySUQwOVBTQW5aR0YwWVNjcElIdGNiaUFnSUNBdkx5QlRkR0Z5ZENCbWJHOTNhVzVuSUc5dUlHNWxlSFFnZEdsamF5QnBaaUJ6ZEhKbFlXMGdhWE51SjNRZ1pYaHdiR2xqYVhSc2VTQndZWFZ6WldSY2JpQWdJQ0JwWmlBb2RHaHBjeTVmY21WaFpHRmliR1ZUZEdGMFpTNW1iRzkzYVc1bklDRTlQU0JtWVd4elpTa2dkR2hwY3k1eVpYTjFiV1VvS1R0Y2JpQWdmU0JsYkhObElHbG1JQ2hsZGlBOVBUMGdKM0psWVdSaFlteGxKeWtnZTF4dUlDQWdJSFpoY2lCemRHRjBaU0E5SUhSb2FYTXVYM0psWVdSaFlteGxVM1JoZEdVN1hHNGdJQ0FnYVdZZ0tDRnpkR0YwWlM1bGJtUkZiV2wwZEdWa0lDWW1JQ0Z6ZEdGMFpTNXlaV0ZrWVdKc1pVeHBjM1JsYm1sdVp5a2dlMXh1SUNBZ0lDQWdjM1JoZEdVdWNtVmhaR0ZpYkdWTWFYTjBaVzVwYm1jZ1BTQnpkR0YwWlM1dVpXVmtVbVZoWkdGaWJHVWdQU0IwY25WbE8xeHVJQ0FnSUNBZ2MzUmhkR1V1WlcxcGRIUmxaRkpsWVdSaFlteGxJRDBnWm1Gc2MyVTdYRzRnSUNBZ0lDQnBaaUFvSVhOMFlYUmxMbkpsWVdScGJtY3BJSHRjYmlBZ0lDQWdJQ0FnY0hKdlkyVnpjMDVsZUhSVWFXTnJLRzVTWldGa2FXNW5UbVY0ZEZScFkyc3NJSFJvYVhNcE8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaHpkR0YwWlM1c1pXNW5kR2dwSUh0Y2JpQWdJQ0FnSUNBZ1pXMXBkRkpsWVdSaFlteGxLSFJvYVhNc0lITjBZWFJsS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnY21Wek8xeHVmVHRjYmxKbFlXUmhZbXhsTG5CeWIzUnZkSGx3WlM1aFpHUk1hWE4wWlc1bGNpQTlJRkpsWVdSaFlteGxMbkJ5YjNSdmRIbHdaUzV2Ymp0Y2JseHVablZ1WTNScGIyNGdibEpsWVdScGJtZE9aWGgwVkdsamF5aHpaV3htS1NCN1hHNGdJR1JsWW5WbktDZHlaV0ZrWVdKc1pTQnVaWGgwZEdsamF5QnlaV0ZrSURBbktUdGNiaUFnYzJWc1ppNXlaV0ZrS0RBcE8xeHVmVnh1WEc0dkx5QndZWFZ6WlNncElHRnVaQ0J5WlhOMWJXVW9LU0JoY21VZ2NtVnRibUZ1ZEhNZ2IyWWdkR2hsSUd4bFoyRmplU0J5WldGa1lXSnNaU0J6ZEhKbFlXMGdRVkJKWEc0dkx5QkpaaUIwYUdVZ2RYTmxjaUIxYzJWeklIUm9aVzBzSUhSb1pXNGdjM2RwZEdOb0lHbHVkRzhnYjJ4a0lHMXZaR1V1WEc1U1pXRmtZV0pzWlM1d2NtOTBiM1I1Y0dVdWNtVnpkVzFsSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCMllYSWdjM1JoZEdVZ1BTQjBhR2x6TGw5eVpXRmtZV0pzWlZOMFlYUmxPMXh1SUNCcFppQW9JWE4wWVhSbExtWnNiM2RwYm1jcElIdGNiaUFnSUNCa1pXSjFaeWduY21WemRXMWxKeWs3WEc0Z0lDQWdjM1JoZEdVdVpteHZkMmx1WnlBOUlIUnlkV1U3WEc0Z0lDQWdjbVZ6ZFcxbEtIUm9hWE1zSUhOMFlYUmxLVHRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JuMDdYRzVjYm1aMWJtTjBhVzl1SUhKbGMzVnRaU2h6ZEhKbFlXMHNJSE4wWVhSbEtTQjdYRzRnSUdsbUlDZ2hjM1JoZEdVdWNtVnpkVzFsVTJOb1pXUjFiR1ZrS1NCN1hHNGdJQ0FnYzNSaGRHVXVjbVZ6ZFcxbFUyTm9aV1IxYkdWa0lEMGdkSEoxWlR0Y2JpQWdJQ0J3Y205alpYTnpUbVY0ZEZScFkyc29jbVZ6ZFcxbFh5d2djM1J5WldGdExDQnpkR0YwWlNrN1hHNGdJSDFjYm4xY2JseHVablZ1WTNScGIyNGdjbVZ6ZFcxbFh5aHpkSEpsWVcwc0lITjBZWFJsS1NCN1hHNGdJR2xtSUNnaGMzUmhkR1V1Y21WaFpHbHVaeWtnZTF4dUlDQWdJR1JsWW5WbktDZHlaWE4xYldVZ2NtVmhaQ0F3SnlrN1hHNGdJQ0FnYzNSeVpXRnRMbkpsWVdRb01DazdYRzRnSUgxY2JseHVJQ0J6ZEdGMFpTNXlaWE4xYldWVFkyaGxaSFZzWldRZ1BTQm1ZV3h6WlR0Y2JpQWdjM1JoZEdVdVlYZGhhWFJFY21GcGJpQTlJREE3WEc0Z0lITjBjbVZoYlM1bGJXbDBLQ2R5WlhOMWJXVW5LVHRjYmlBZ1pteHZkeWh6ZEhKbFlXMHBPMXh1SUNCcFppQW9jM1JoZEdVdVpteHZkMmx1WnlBbUppQWhjM1JoZEdVdWNtVmhaR2x1WnlrZ2MzUnlaV0Z0TG5KbFlXUW9NQ2s3WEc1OVhHNWNibEpsWVdSaFlteGxMbkJ5YjNSdmRIbHdaUzV3WVhWelpTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdaR1ZpZFdjb0oyTmhiR3dnY0dGMWMyVWdabXh2ZDJsdVp6MGxhaWNzSUhSb2FYTXVYM0psWVdSaFlteGxVM1JoZEdVdVpteHZkMmx1WnlrN1hHNGdJR2xtSUNobVlXeHpaU0FoUFQwZ2RHaHBjeTVmY21WaFpHRmliR1ZUZEdGMFpTNW1iRzkzYVc1bktTQjdYRzRnSUNBZ1pHVmlkV2NvSjNCaGRYTmxKeWs3WEc0Z0lDQWdkR2hwY3k1ZmNtVmhaR0ZpYkdWVGRHRjBaUzVtYkc5M2FXNW5JRDBnWm1Gc2MyVTdYRzRnSUNBZ2RHaHBjeTVsYldsMEtDZHdZWFZ6WlNjcE8xeHVJQ0I5WEc0Z0lISmxkSFZ5YmlCMGFHbHpPMXh1ZlR0Y2JseHVablZ1WTNScGIyNGdabXh2ZHloemRISmxZVzBwSUh0Y2JpQWdkbUZ5SUhOMFlYUmxJRDBnYzNSeVpXRnRMbDl5WldGa1lXSnNaVk4wWVhSbE8xeHVJQ0JrWldKMVp5Z25abXh2ZHljc0lITjBZWFJsTG1ac2IzZHBibWNwTzF4dUlDQjNhR2xzWlNBb2MzUmhkR1V1Wm14dmQybHVaeUFtSmlCemRISmxZVzB1Y21WaFpDZ3BJQ0U5UFNCdWRXeHNLU0I3ZlZ4dWZWeHVYRzR2THlCM2NtRndJR0Z1SUc5c1pDMXpkSGxzWlNCemRISmxZVzBnWVhNZ2RHaGxJR0Z6ZVc1aklHUmhkR0VnYzI5MWNtTmxMbHh1THk4Z1ZHaHBjeUJwY3lBcWJtOTBLaUJ3WVhKMElHOW1JSFJvWlNCeVpXRmtZV0pzWlNCemRISmxZVzBnYVc1MFpYSm1ZV05sTGx4dUx5OGdTWFFnYVhNZ1lXNGdkV2RzZVNCMWJtWnZjblIxYm1GMFpTQnRaWE56SUc5bUlHaHBjM1J2Y25rdVhHNVNaV0ZrWVdKc1pTNXdjbTkwYjNSNWNHVXVkM0poY0NBOUlHWjFibU4wYVc5dUlDaHpkSEpsWVcwcElIdGNiaUFnZG1GeUlITjBZWFJsSUQwZ2RHaHBjeTVmY21WaFpHRmliR1ZUZEdGMFpUdGNiaUFnZG1GeUlIQmhkWE5sWkNBOUlHWmhiSE5sTzF4dVhHNGdJSFpoY2lCelpXeG1JRDBnZEdocGN6dGNiaUFnYzNSeVpXRnRMbTl1S0NkbGJtUW5MQ0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnWkdWaWRXY29KM2R5WVhCd1pXUWdaVzVrSnlrN1hHNGdJQ0FnYVdZZ0tITjBZWFJsTG1SbFkyOWtaWElnSmlZZ0lYTjBZWFJsTG1WdVpHVmtLU0I3WEc0Z0lDQWdJQ0IyWVhJZ1kyaDFibXNnUFNCemRHRjBaUzVrWldOdlpHVnlMbVZ1WkNncE8xeHVJQ0FnSUNBZ2FXWWdLR05vZFc1cklDWW1JR05vZFc1ckxteGxibWQwYUNrZ2MyVnNaaTV3ZFhOb0tHTm9kVzVyS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6Wld4bUxuQjFjMmdvYm5Wc2JDazdYRzRnSUgwcE8xeHVYRzRnSUhOMGNtVmhiUzV2YmlnblpHRjBZU2NzSUdaMWJtTjBhVzl1SUNoamFIVnVheWtnZTF4dUlDQWdJR1JsWW5WbktDZDNjbUZ3Y0dWa0lHUmhkR0VuS1R0Y2JpQWdJQ0JwWmlBb2MzUmhkR1V1WkdWamIyUmxjaWtnWTJoMWJtc2dQU0J6ZEdGMFpTNWtaV052WkdWeUxuZHlhWFJsS0dOb2RXNXJLVHRjYmx4dUlDQWdJQzh2SUdSdmJpZDBJSE5yYVhBZ2IzWmxjaUJtWVd4emVTQjJZV3gxWlhNZ2FXNGdiMkpxWldOMFRXOWtaVnh1SUNBZ0lHbG1JQ2h6ZEdGMFpTNXZZbXBsWTNSTmIyUmxJQ1ltSUNoamFIVnVheUE5UFQwZ2JuVnNiQ0I4ZkNCamFIVnVheUE5UFQwZ2RXNWtaV1pwYm1Wa0tTa2djbVYwZFhKdU8yVnNjMlVnYVdZZ0tDRnpkR0YwWlM1dlltcGxZM1JOYjJSbElDWW1JQ2doWTJoMWJtc2dmSHdnSVdOb2RXNXJMbXhsYm1kMGFDa3BJSEpsZEhWeWJqdGNibHh1SUNBZ0lIWmhjaUJ5WlhRZ1BTQnpaV3htTG5CMWMyZ29ZMmgxYm1zcE8xeHVJQ0FnSUdsbUlDZ2hjbVYwS1NCN1hHNGdJQ0FnSUNCd1lYVnpaV1FnUFNCMGNuVmxPMXh1SUNBZ0lDQWdjM1J5WldGdExuQmhkWE5sS0NrN1hHNGdJQ0FnZlZ4dUlDQjlLVHRjYmx4dUlDQXZMeUJ3Y205NGVTQmhiR3dnZEdobElHOTBhR1Z5SUcxbGRHaHZaSE11WEc0Z0lDOHZJR2x0Y0c5eWRHRnVkQ0IzYUdWdUlIZHlZWEJ3YVc1bklHWnBiSFJsY25NZ1lXNWtJR1IxY0d4bGVHVnpMbHh1SUNCbWIzSWdLSFpoY2lCcElHbHVJSE4wY21WaGJTa2dlMXh1SUNBZ0lHbG1JQ2gwYUdselcybGRJRDA5UFNCMWJtUmxabWx1WldRZ0ppWWdkSGx3Wlc5bUlITjBjbVZoYlZ0cFhTQTlQVDBnSjJaMWJtTjBhVzl1SnlrZ2UxeHVJQ0FnSUNBZ2RHaHBjMXRwWFNBOUlHWjFibU4wYVc5dUlDaHRaWFJvYjJRcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYzNSeVpXRnRXMjFsZEdodlpGMHVZWEJ3Ykhrb2MzUnlaV0Z0TENCaGNtZDFiV1Z1ZEhNcE8xeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lDQWdmU2hwS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNBdkx5QndjbTk0ZVNCalpYSjBZV2x1SUdsdGNHOXlkR0Z1ZENCbGRtVnVkSE11WEc0Z0lIWmhjaUJsZG1WdWRITWdQU0JiSjJWeWNtOXlKeXdnSjJOc2IzTmxKeXdnSjJSbGMzUnliM2tuTENBbmNHRjFjMlVuTENBbmNtVnpkVzFsSjEwN1hHNGdJR1p2Y2tWaFkyZ29aWFpsYm5SekxDQm1kVzVqZEdsdmJpQW9aWFlwSUh0Y2JpQWdJQ0J6ZEhKbFlXMHViMjRvWlhZc0lITmxiR1l1WlcxcGRDNWlhVzVrS0hObGJHWXNJR1YyS1NrN1hHNGdJSDBwTzF4dVhHNGdJQzh2SUhkb1pXNGdkMlVnZEhKNUlIUnZJR052Ym5OMWJXVWdjMjl0WlNCdGIzSmxJR0o1ZEdWekxDQnphVzF3YkhrZ2RXNXdZWFZ6WlNCMGFHVmNiaUFnTHk4Z2RXNWtaWEpzZVdsdVp5QnpkSEpsWVcwdVhHNGdJSE5sYkdZdVgzSmxZV1FnUFNCbWRXNWpkR2x2YmlBb2Jpa2dlMXh1SUNBZ0lHUmxZblZuS0NkM2NtRndjR1ZrSUY5eVpXRmtKeXdnYmlrN1hHNGdJQ0FnYVdZZ0tIQmhkWE5sWkNrZ2UxeHVJQ0FnSUNBZ2NHRjFjMlZrSUQwZ1ptRnNjMlU3WEc0Z0lDQWdJQ0J6ZEhKbFlXMHVjbVZ6ZFcxbEtDazdYRzRnSUNBZ2ZWeHVJQ0I5TzF4dVhHNGdJSEpsZEhWeWJpQnpaV3htTzF4dWZUdGNibHh1THk4Z1pYaHdiM05sWkNCbWIzSWdkR1Z6ZEdsdVp5QndkWEp3YjNObGN5QnZibXg1TGx4dVVtVmhaR0ZpYkdVdVgyWnliMjFNYVhOMElEMGdabkp2YlV4cGMzUTdYRzVjYmk4dklGQnNkV05ySUc5bVppQnVJR0o1ZEdWeklHWnliMjBnWVc0Z1lYSnlZWGtnYjJZZ1luVm1abVZ5Y3k1Y2JpOHZJRXhsYm1kMGFDQnBjeUIwYUdVZ1kyOXRZbWx1WldRZ2JHVnVaM1JvY3lCdlppQmhiR3dnZEdobElHSjFabVpsY25NZ2FXNGdkR2hsSUd4cGMzUXVYRzR2THlCVWFHbHpJR1oxYm1OMGFXOXVJR2x6SUdSbGMybG5ibVZrSUhSdklHSmxJR2x1YkdsdVlXSnNaU3dnYzI4Z2NHeGxZWE5sSUhSaGEyVWdZMkZ5WlNCM2FHVnVJRzFoYTJsdVoxeHVMeThnWTJoaGJtZGxjeUIwYnlCMGFHVWdablZ1WTNScGIyNGdZbTlrZVM1Y2JtWjFibU4wYVc5dUlHWnliMjFNYVhOMEtHNHNJSE4wWVhSbEtTQjdYRzRnSUM4dklHNXZkR2hwYm1jZ1luVm1abVZ5WldSY2JpQWdhV1lnS0hOMFlYUmxMbXhsYm1kMGFDQTlQVDBnTUNrZ2NtVjBkWEp1SUc1MWJHdzdYRzVjYmlBZ2RtRnlJSEpsZER0Y2JpQWdhV1lnS0hOMFlYUmxMbTlpYW1WamRFMXZaR1VwSUhKbGRDQTlJSE4wWVhSbExtSjFabVpsY2k1emFHbG1kQ2dwTzJWc2MyVWdhV1lnS0NGdUlIeDhJRzRnUGowZ2MzUmhkR1V1YkdWdVozUm9LU0I3WEc0Z0lDQWdMeThnY21WaFpDQnBkQ0JoYkd3c0lIUnlkVzVqWVhSbElIUm9aU0JzYVhOMFhHNGdJQ0FnYVdZZ0tITjBZWFJsTG1SbFkyOWtaWElwSUhKbGRDQTlJSE4wWVhSbExtSjFabVpsY2k1cWIybHVLQ2NuS1R0bGJITmxJR2xtSUNoemRHRjBaUzVpZFdabVpYSXViR1Z1WjNSb0lEMDlQU0F4S1NCeVpYUWdQU0J6ZEdGMFpTNWlkV1ptWlhJdWFHVmhaQzVrWVhSaE8yVnNjMlVnY21WMElEMGdjM1JoZEdVdVluVm1abVZ5TG1OdmJtTmhkQ2h6ZEdGMFpTNXNaVzVuZEdncE8xeHVJQ0FnSUhOMFlYUmxMbUoxWm1abGNpNWpiR1ZoY2lncE8xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDOHZJSEpsWVdRZ2NHRnlkQ0J2WmlCc2FYTjBYRzRnSUNBZ2NtVjBJRDBnWm5KdmJVeHBjM1JRWVhKMGFXRnNLRzRzSUhOMFlYUmxMbUoxWm1abGNpd2djM1JoZEdVdVpHVmpiMlJsY2lrN1hHNGdJSDFjYmx4dUlDQnlaWFIxY200Z2NtVjBPMXh1ZlZ4dVhHNHZMeUJGZUhSeVlXTjBjeUJ2Ym14NUlHVnViM1ZuYUNCaWRXWm1aWEpsWkNCa1lYUmhJSFJ2SUhOaGRHbHpabmtnZEdobElHRnRiM1Z1ZENCeVpYRjFaWE4wWldRdVhHNHZMeUJVYUdseklHWjFibU4wYVc5dUlHbHpJR1JsYzJsbmJtVmtJSFJ2SUdKbElHbHViR2x1WVdKc1pTd2djMjhnY0d4bFlYTmxJSFJoYTJVZ1kyRnlaU0IzYUdWdUlHMWhhMmx1WjF4dUx5OGdZMmhoYm1kbGN5QjBieUIwYUdVZ1puVnVZM1JwYjI0Z1ltOWtlUzVjYm1aMWJtTjBhVzl1SUdaeWIyMU1hWE4wVUdGeWRHbGhiQ2h1TENCc2FYTjBMQ0JvWVhOVGRISnBibWR6S1NCN1hHNGdJSFpoY2lCeVpYUTdYRzRnSUdsbUlDaHVJRHdnYkdsemRDNW9aV0ZrTG1SaGRHRXViR1Z1WjNSb0tTQjdYRzRnSUNBZ0x5OGdjMnhwWTJVZ2FYTWdkR2hsSUhOaGJXVWdabTl5SUdKMVptWmxjbk1nWVc1a0lITjBjbWx1WjNOY2JpQWdJQ0J5WlhRZ1BTQnNhWE4wTG1obFlXUXVaR0YwWVM1emJHbGpaU2d3TENCdUtUdGNiaUFnSUNCc2FYTjBMbWhsWVdRdVpHRjBZU0E5SUd4cGMzUXVhR1ZoWkM1a1lYUmhMbk5zYVdObEtHNHBPMXh1SUNCOUlHVnNjMlVnYVdZZ0tHNGdQVDA5SUd4cGMzUXVhR1ZoWkM1a1lYUmhMbXhsYm1kMGFDa2dlMXh1SUNBZ0lDOHZJR1pwY25OMElHTm9kVzVySUdseklHRWdjR1Z5Wm1WamRDQnRZWFJqYUZ4dUlDQWdJSEpsZENBOUlHeHBjM1F1YzJocFpuUW9LVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0F2THlCeVpYTjFiSFFnYzNCaGJuTWdiVzl5WlNCMGFHRnVJRzl1WlNCaWRXWm1aWEpjYmlBZ0lDQnlaWFFnUFNCb1lYTlRkSEpwYm1keklEOGdZMjl3ZVVaeWIyMUNkV1ptWlhKVGRISnBibWNvYml3Z2JHbHpkQ2tnT2lCamIzQjVSbkp2YlVKMVptWmxjaWh1TENCc2FYTjBLVHRjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdjbVYwTzF4dWZWeHVYRzR2THlCRGIzQnBaWE1nWVNCemNHVmphV1pwWldRZ1lXMXZkVzUwSUc5bUlHTm9ZWEpoWTNSbGNuTWdabkp2YlNCMGFHVWdiR2x6ZENCdlppQmlkV1ptWlhKbFpDQmtZWFJoWEc0dkx5QmphSFZ1YTNNdVhHNHZMeUJVYUdseklHWjFibU4wYVc5dUlHbHpJR1JsYzJsbmJtVmtJSFJ2SUdKbElHbHViR2x1WVdKc1pTd2djMjhnY0d4bFlYTmxJSFJoYTJVZ1kyRnlaU0IzYUdWdUlHMWhhMmx1WjF4dUx5OGdZMmhoYm1kbGN5QjBieUIwYUdVZ1puVnVZM1JwYjI0Z1ltOWtlUzVjYm1aMWJtTjBhVzl1SUdOdmNIbEdjbTl0UW5WbVptVnlVM1J5YVc1bktHNHNJR3hwYzNRcElIdGNiaUFnZG1GeUlIQWdQU0JzYVhOMExtaGxZV1E3WEc0Z0lIWmhjaUJqSUQwZ01UdGNiaUFnZG1GeUlISmxkQ0E5SUhBdVpHRjBZVHRjYmlBZ2JpQXRQU0J5WlhRdWJHVnVaM1JvTzF4dUlDQjNhR2xzWlNBb2NDQTlJSEF1Ym1WNGRDa2dlMXh1SUNBZ0lIWmhjaUJ6ZEhJZ1BTQndMbVJoZEdFN1hHNGdJQ0FnZG1GeUlHNWlJRDBnYmlBK0lITjBjaTVzWlc1bmRHZ2dQeUJ6ZEhJdWJHVnVaM1JvSURvZ2JqdGNiaUFnSUNCcFppQW9ibUlnUFQwOUlITjBjaTVzWlc1bmRHZ3BJSEpsZENBclBTQnpkSEk3Wld4elpTQnlaWFFnS3owZ2MzUnlMbk5zYVdObEtEQXNJRzRwTzF4dUlDQWdJRzRnTFQwZ2JtSTdYRzRnSUNBZ2FXWWdLRzRnUFQwOUlEQXBJSHRjYmlBZ0lDQWdJR2xtSUNodVlpQTlQVDBnYzNSeUxteGxibWQwYUNrZ2UxeHVJQ0FnSUNBZ0lDQXJLMk03WEc0Z0lDQWdJQ0FnSUdsbUlDaHdMbTVsZUhRcElHeHBjM1F1YUdWaFpDQTlJSEF1Ym1WNGREdGxiSE5sSUd4cGMzUXVhR1ZoWkNBOUlHeHBjM1F1ZEdGcGJDQTlJRzUxYkd3N1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCc2FYTjBMbWhsWVdRZ1BTQndPMXh1SUNBZ0lDQWdJQ0J3TG1SaGRHRWdQU0J6ZEhJdWMyeHBZMlVvYm1JcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdmVnh1SUNBZ0lDc3JZenRjYmlBZ2ZWeHVJQ0JzYVhOMExteGxibWQwYUNBdFBTQmpPMXh1SUNCeVpYUjFjbTRnY21WME8xeHVmVnh1WEc0dkx5QkRiM0JwWlhNZ1lTQnpjR1ZqYVdacFpXUWdZVzF2ZFc1MElHOW1JR0o1ZEdWeklHWnliMjBnZEdobElHeHBjM1FnYjJZZ1luVm1abVZ5WldRZ1pHRjBZU0JqYUhWdWEzTXVYRzR2THlCVWFHbHpJR1oxYm1OMGFXOXVJR2x6SUdSbGMybG5ibVZrSUhSdklHSmxJR2x1YkdsdVlXSnNaU3dnYzI4Z2NHeGxZWE5sSUhSaGEyVWdZMkZ5WlNCM2FHVnVJRzFoYTJsdVoxeHVMeThnWTJoaGJtZGxjeUIwYnlCMGFHVWdablZ1WTNScGIyNGdZbTlrZVM1Y2JtWjFibU4wYVc5dUlHTnZjSGxHY205dFFuVm1abVZ5S0c0c0lHeHBjM1FwSUh0Y2JpQWdkbUZ5SUhKbGRDQTlJR0oxWm1abGNsTm9hVzB1WVd4c2IyTlZibk5oWm1Vb2JpazdYRzRnSUhaaGNpQndJRDBnYkdsemRDNW9aV0ZrTzF4dUlDQjJZWElnWXlBOUlERTdYRzRnSUhBdVpHRjBZUzVqYjNCNUtISmxkQ2s3WEc0Z0lHNGdMVDBnY0M1a1lYUmhMbXhsYm1kMGFEdGNiaUFnZDJocGJHVWdLSEFnUFNCd0xtNWxlSFFwSUh0Y2JpQWdJQ0IyWVhJZ1luVm1JRDBnY0M1a1lYUmhPMXh1SUNBZ0lIWmhjaUJ1WWlBOUlHNGdQaUJpZFdZdWJHVnVaM1JvSUQ4Z1luVm1MbXhsYm1kMGFDQTZJRzQ3WEc0Z0lDQWdZblZtTG1OdmNIa29jbVYwTENCeVpYUXViR1Z1WjNSb0lDMGdiaXdnTUN3Z2JtSXBPMXh1SUNBZ0lHNGdMVDBnYm1JN1hHNGdJQ0FnYVdZZ0tHNGdQVDA5SURBcElIdGNiaUFnSUNBZ0lHbG1JQ2h1WWlBOVBUMGdZblZtTG14bGJtZDBhQ2tnZTF4dUlDQWdJQ0FnSUNBcksyTTdYRzRnSUNBZ0lDQWdJR2xtSUNod0xtNWxlSFFwSUd4cGMzUXVhR1ZoWkNBOUlIQXVibVY0ZER0bGJITmxJR3hwYzNRdWFHVmhaQ0E5SUd4cGMzUXVkR0ZwYkNBOUlHNTFiR3c3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0JzYVhOMExtaGxZV1FnUFNCd08xeHVJQ0FnSUNBZ0lDQndMbVJoZEdFZ1BTQmlkV1l1YzJ4cFkyVW9ibUlwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ2ZWeHVJQ0FnSUNzcll6dGNiaUFnZlZ4dUlDQnNhWE4wTG14bGJtZDBhQ0F0UFNCak8xeHVJQ0J5WlhSMWNtNGdjbVYwTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJsYm1SU1pXRmtZV0pzWlNoemRISmxZVzBwSUh0Y2JpQWdkbUZ5SUhOMFlYUmxJRDBnYzNSeVpXRnRMbDl5WldGa1lXSnNaVk4wWVhSbE8xeHVYRzRnSUM4dklFbG1JSGRsSUdkbGRDQm9aWEpsSUdKbFptOXlaU0JqYjI1emRXMXBibWNnWVd4c0lIUm9aU0JpZVhSbGN5d2dkR2hsYmlCMGFHRjBJR2x6SUdGY2JpQWdMeThnWW5WbklHbHVJRzV2WkdVdUlDQlRhRzkxYkdRZ2JtVjJaWElnYUdGd2NHVnVMbHh1SUNCcFppQW9jM1JoZEdVdWJHVnVaM1JvSUQ0Z01Da2dkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZGNJbVZ1WkZKbFlXUmhZbXhsS0NsY0lpQmpZV3hzWldRZ2IyNGdibTl1TFdWdGNIUjVJSE4wY21WaGJTY3BPMXh1WEc0Z0lHbG1JQ2doYzNSaGRHVXVaVzVrUlcxcGRIUmxaQ2tnZTF4dUlDQWdJSE4wWVhSbExtVnVaR1ZrSUQwZ2RISjFaVHRjYmlBZ0lDQndjbTlqWlhOelRtVjRkRlJwWTJzb1pXNWtVbVZoWkdGaWJHVk9WQ3dnYzNSaGRHVXNJSE4wY21WaGJTazdYRzRnSUgxY2JuMWNibHh1Wm5WdVkzUnBiMjRnWlc1a1VtVmhaR0ZpYkdWT1ZDaHpkR0YwWlN3Z2MzUnlaV0Z0S1NCN1hHNGdJQzh2SUVOb1pXTnJJSFJvWVhRZ2QyVWdaR2xrYmlkMElHZGxkQ0J2Ym1VZ2JHRnpkQ0IxYm5Ob2FXWjBMbHh1SUNCcFppQW9JWE4wWVhSbExtVnVaRVZ0YVhSMFpXUWdKaVlnYzNSaGRHVXViR1Z1WjNSb0lEMDlQU0F3S1NCN1hHNGdJQ0FnYzNSaGRHVXVaVzVrUlcxcGRIUmxaQ0E5SUhSeWRXVTdYRzRnSUNBZ2MzUnlaV0Z0TG5KbFlXUmhZbXhsSUQwZ1ptRnNjMlU3WEc0Z0lDQWdjM1J5WldGdExtVnRhWFFvSjJWdVpDY3BPMXh1SUNCOVhHNTlYRzVjYm1aMWJtTjBhVzl1SUdadmNrVmhZMmdvZUhNc0lHWXBJSHRjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREFzSUd3Z1BTQjRjeTVzWlc1bmRHZzdJR2tnUENCc095QnBLeXNwSUh0Y2JpQWdJQ0JtS0hoelcybGRMQ0JwS1R0Y2JpQWdmVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnBibVJsZUU5bUtIaHpMQ0I0S1NCN1hHNGdJR1p2Y2lBb2RtRnlJR2tnUFNBd0xDQnNJRDBnZUhNdWJHVnVaM1JvT3lCcElEd2diRHNnYVNzcktTQjdYRzRnSUNBZ2FXWWdLSGh6VzJsZElEMDlQU0I0S1NCeVpYUjFjbTRnYVR0Y2JpQWdmVnh1SUNCeVpYUjFjbTRnTFRFN1hHNTlJbDE5IiwiLy8gYSB0cmFuc2Zvcm0gc3RyZWFtIGlzIGEgcmVhZGFibGUvd3JpdGFibGUgc3RyZWFtIHdoZXJlIHlvdSBkb1xuLy8gc29tZXRoaW5nIHdpdGggdGhlIGRhdGEuICBTb21ldGltZXMgaXQncyBjYWxsZWQgYSBcImZpbHRlclwiLFxuLy8gYnV0IHRoYXQncyBub3QgYSBncmVhdCBuYW1lIGZvciBpdCwgc2luY2UgdGhhdCBpbXBsaWVzIGEgdGhpbmcgd2hlcmVcbi8vIHNvbWUgYml0cyBwYXNzIHRocm91Z2gsIGFuZCBvdGhlcnMgYXJlIHNpbXBseSBpZ25vcmVkLiAgKFRoYXQgd291bGRcbi8vIGJlIGEgdmFsaWQgZXhhbXBsZSBvZiBhIHRyYW5zZm9ybSwgb2YgY291cnNlLilcbi8vXG4vLyBXaGlsZSB0aGUgb3V0cHV0IGlzIGNhdXNhbGx5IHJlbGF0ZWQgdG8gdGhlIGlucHV0LCBpdCdzIG5vdCBhXG4vLyBuZWNlc3NhcmlseSBzeW1tZXRyaWMgb3Igc3luY2hyb25vdXMgdHJhbnNmb3JtYXRpb24uICBGb3IgZXhhbXBsZSxcbi8vIGEgemxpYiBzdHJlYW0gbWlnaHQgdGFrZSBtdWx0aXBsZSBwbGFpbi10ZXh0IHdyaXRlcygpLCBhbmQgdGhlblxuLy8gZW1pdCBhIHNpbmdsZSBjb21wcmVzc2VkIGNodW5rIHNvbWUgdGltZSBpbiB0aGUgZnV0dXJlLlxuLy9cbi8vIEhlcmUncyBob3cgdGhpcyB3b3Jrczpcbi8vXG4vLyBUaGUgVHJhbnNmb3JtIHN0cmVhbSBoYXMgYWxsIHRoZSBhc3BlY3RzIG9mIHRoZSByZWFkYWJsZSBhbmQgd3JpdGFibGVcbi8vIHN0cmVhbSBjbGFzc2VzLiAgV2hlbiB5b3Ugd3JpdGUoY2h1bmspLCB0aGF0IGNhbGxzIF93cml0ZShjaHVuayxjYilcbi8vIGludGVybmFsbHksIGFuZCByZXR1cm5zIGZhbHNlIGlmIHRoZXJlJ3MgYSBsb3Qgb2YgcGVuZGluZyB3cml0ZXNcbi8vIGJ1ZmZlcmVkIHVwLiAgV2hlbiB5b3UgY2FsbCByZWFkKCksIHRoYXQgY2FsbHMgX3JlYWQobikgdW50aWxcbi8vIHRoZXJlJ3MgZW5vdWdoIHBlbmRpbmcgcmVhZGFibGUgZGF0YSBidWZmZXJlZCB1cC5cbi8vXG4vLyBJbiBhIHRyYW5zZm9ybSBzdHJlYW0sIHRoZSB3cml0dGVuIGRhdGEgaXMgcGxhY2VkIGluIGEgYnVmZmVyLiAgV2hlblxuLy8gX3JlYWQobikgaXMgY2FsbGVkLCBpdCB0cmFuc2Zvcm1zIHRoZSBxdWV1ZWQgdXAgZGF0YSwgY2FsbGluZyB0aGVcbi8vIGJ1ZmZlcmVkIF93cml0ZSBjYidzIGFzIGl0IGNvbnN1bWVzIGNodW5rcy4gIElmIGNvbnN1bWluZyBhIHNpbmdsZVxuLy8gd3JpdHRlbiBjaHVuayB3b3VsZCByZXN1bHQgaW4gbXVsdGlwbGUgb3V0cHV0IGNodW5rcywgdGhlbiB0aGUgZmlyc3Rcbi8vIG91dHB1dHRlZCBiaXQgY2FsbHMgdGhlIHJlYWRjYiwgYW5kIHN1YnNlcXVlbnQgY2h1bmtzIGp1c3QgZ28gaW50b1xuLy8gdGhlIHJlYWQgYnVmZmVyLCBhbmQgd2lsbCBjYXVzZSBpdCB0byBlbWl0ICdyZWFkYWJsZScgaWYgbmVjZXNzYXJ5LlxuLy9cbi8vIFRoaXMgd2F5LCBiYWNrLXByZXNzdXJlIGlzIGFjdHVhbGx5IGRldGVybWluZWQgYnkgdGhlIHJlYWRpbmcgc2lkZSxcbi8vIHNpbmNlIF9yZWFkIGhhcyB0byBiZSBjYWxsZWQgdG8gc3RhcnQgcHJvY2Vzc2luZyBhIG5ldyBjaHVuay4gIEhvd2V2ZXIsXG4vLyBhIHBhdGhvbG9naWNhbCBpbmZsYXRlIHR5cGUgb2YgdHJhbnNmb3JtIGNhbiBjYXVzZSBleGNlc3NpdmUgYnVmZmVyaW5nXG4vLyBoZXJlLiAgRm9yIGV4YW1wbGUsIGltYWdpbmUgYSBzdHJlYW0gd2hlcmUgZXZlcnkgYnl0ZSBvZiBpbnB1dCBpc1xuLy8gaW50ZXJwcmV0ZWQgYXMgYW4gaW50ZWdlciBmcm9tIDAtMjU1LCBhbmQgdGhlbiByZXN1bHRzIGluIHRoYXQgbWFueVxuLy8gYnl0ZXMgb2Ygb3V0cHV0LiAgV3JpdGluZyB0aGUgNCBieXRlcyB7ZmYsZmYsZmYsZmZ9IHdvdWxkIHJlc3VsdCBpblxuLy8gMWtiIG9mIGRhdGEgYmVpbmcgb3V0cHV0LiAgSW4gdGhpcyBjYXNlLCB5b3UgY291bGQgd3JpdGUgYSB2ZXJ5IHNtYWxsXG4vLyBhbW91bnQgb2YgaW5wdXQsIGFuZCBlbmQgdXAgd2l0aCBhIHZlcnkgbGFyZ2UgYW1vdW50IG9mIG91dHB1dC4gIEluXG4vLyBzdWNoIGEgcGF0aG9sb2dpY2FsIGluZmxhdGluZyBtZWNoYW5pc20sIHRoZXJlJ2QgYmUgbm8gd2F5IHRvIHRlbGxcbi8vIHRoZSBzeXN0ZW0gdG8gc3RvcCBkb2luZyB0aGUgdHJhbnNmb3JtLiAgQSBzaW5nbGUgNE1CIHdyaXRlIGNvdWxkXG4vLyBjYXVzZSB0aGUgc3lzdGVtIHRvIHJ1biBvdXQgb2YgbWVtb3J5LlxuLy9cbi8vIEhvd2V2ZXIsIGV2ZW4gaW4gc3VjaCBhIHBhdGhvbG9naWNhbCBjYXNlLCBvbmx5IGEgc2luZ2xlIHdyaXR0ZW4gY2h1bmtcbi8vIHdvdWxkIGJlIGNvbnN1bWVkLCBhbmQgdGhlbiB0aGUgcmVzdCB3b3VsZCB3YWl0ICh1bi10cmFuc2Zvcm1lZCkgdW50aWxcbi8vIHRoZSByZXN1bHRzIG9mIHRoZSBwcmV2aW91cyB0cmFuc2Zvcm1lZCBjaHVuayB3ZXJlIGNvbnN1bWVkLlxuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNmb3JtO1xuXG52YXIgRHVwbGV4ID0gcmVxdWlyZSgnLi9fc3RyZWFtX2R1cGxleCcpO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIHV0aWwgPSByZXF1aXJlKCdjb3JlLXV0aWwtaXMnKTtcbnV0aWwuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbnV0aWwuaW5oZXJpdHMoVHJhbnNmb3JtLCBEdXBsZXgpO1xuXG5mdW5jdGlvbiBUcmFuc2Zvcm1TdGF0ZShzdHJlYW0pIHtcbiAgdGhpcy5hZnRlclRyYW5zZm9ybSA9IGZ1bmN0aW9uIChlciwgZGF0YSkge1xuICAgIHJldHVybiBhZnRlclRyYW5zZm9ybShzdHJlYW0sIGVyLCBkYXRhKTtcbiAgfTtcblxuICB0aGlzLm5lZWRUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgdGhpcy50cmFuc2Zvcm1pbmcgPSBmYWxzZTtcbiAgdGhpcy53cml0ZWNiID0gbnVsbDtcbiAgdGhpcy53cml0ZWNodW5rID0gbnVsbDtcbiAgdGhpcy53cml0ZWVuY29kaW5nID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gYWZ0ZXJUcmFuc2Zvcm0oc3RyZWFtLCBlciwgZGF0YSkge1xuICB2YXIgdHMgPSBzdHJlYW0uX3RyYW5zZm9ybVN0YXRlO1xuICB0cy50cmFuc2Zvcm1pbmcgPSBmYWxzZTtcblxuICB2YXIgY2IgPSB0cy53cml0ZWNiO1xuXG4gIGlmICghY2IpIHJldHVybiBzdHJlYW0uZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoJ25vIHdyaXRlY2IgaW4gVHJhbnNmb3JtIGNsYXNzJykpO1xuXG4gIHRzLndyaXRlY2h1bmsgPSBudWxsO1xuICB0cy53cml0ZWNiID0gbnVsbDtcblxuICBpZiAoZGF0YSAhPT0gbnVsbCAmJiBkYXRhICE9PSB1bmRlZmluZWQpIHN0cmVhbS5wdXNoKGRhdGEpO1xuXG4gIGNiKGVyKTtcblxuICB2YXIgcnMgPSBzdHJlYW0uX3JlYWRhYmxlU3RhdGU7XG4gIHJzLnJlYWRpbmcgPSBmYWxzZTtcbiAgaWYgKHJzLm5lZWRSZWFkYWJsZSB8fCBycy5sZW5ndGggPCBycy5oaWdoV2F0ZXJNYXJrKSB7XG4gICAgc3RyZWFtLl9yZWFkKHJzLmhpZ2hXYXRlck1hcmspO1xuICB9XG59XG5cbmZ1bmN0aW9uIFRyYW5zZm9ybShvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUcmFuc2Zvcm0pKSByZXR1cm4gbmV3IFRyYW5zZm9ybShvcHRpb25zKTtcblxuICBEdXBsZXguY2FsbCh0aGlzLCBvcHRpb25zKTtcblxuICB0aGlzLl90cmFuc2Zvcm1TdGF0ZSA9IG5ldyBUcmFuc2Zvcm1TdGF0ZSh0aGlzKTtcblxuICB2YXIgc3RyZWFtID0gdGhpcztcblxuICAvLyBzdGFydCBvdXQgYXNraW5nIGZvciBhIHJlYWRhYmxlIGV2ZW50IG9uY2UgZGF0YSBpcyB0cmFuc2Zvcm1lZC5cbiAgdGhpcy5fcmVhZGFibGVTdGF0ZS5uZWVkUmVhZGFibGUgPSB0cnVlO1xuXG4gIC8vIHdlIGhhdmUgaW1wbGVtZW50ZWQgdGhlIF9yZWFkIG1ldGhvZCwgYW5kIGRvbmUgdGhlIG90aGVyIHRoaW5nc1xuICAvLyB0aGF0IFJlYWRhYmxlIHdhbnRzIGJlZm9yZSB0aGUgZmlyc3QgX3JlYWQgY2FsbCwgc28gdW5zZXQgdGhlXG4gIC8vIHN5bmMgZ3VhcmQgZmxhZy5cbiAgdGhpcy5fcmVhZGFibGVTdGF0ZS5zeW5jID0gZmFsc2U7XG5cbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nKSB0aGlzLl90cmFuc2Zvcm0gPSBvcHRpb25zLnRyYW5zZm9ybTtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5mbHVzaCA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5fZmx1c2ggPSBvcHRpb25zLmZsdXNoO1xuICB9XG5cbiAgLy8gV2hlbiB0aGUgd3JpdGFibGUgc2lkZSBmaW5pc2hlcywgdGhlbiBmbHVzaCBvdXQgYW55dGhpbmcgcmVtYWluaW5nLlxuICB0aGlzLm9uY2UoJ3ByZWZpbmlzaCcsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuX2ZsdXNoID09PSAnZnVuY3Rpb24nKSB0aGlzLl9mbHVzaChmdW5jdGlvbiAoZXIsIGRhdGEpIHtcbiAgICAgIGRvbmUoc3RyZWFtLCBlciwgZGF0YSk7XG4gICAgfSk7ZWxzZSBkb25lKHN0cmVhbSk7XG4gIH0pO1xufVxuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nKSB7XG4gIHRoaXMuX3RyYW5zZm9ybVN0YXRlLm5lZWRUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgcmV0dXJuIER1cGxleC5wcm90b3R5cGUucHVzaC5jYWxsKHRoaXMsIGNodW5rLCBlbmNvZGluZyk7XG59O1xuXG4vLyBUaGlzIGlzIHRoZSBwYXJ0IHdoZXJlIHlvdSBkbyBzdHVmZiFcbi8vIG92ZXJyaWRlIHRoaXMgZnVuY3Rpb24gaW4gaW1wbGVtZW50YXRpb24gY2xhc3Nlcy5cbi8vICdjaHVuaycgaXMgYW4gaW5wdXQgY2h1bmsuXG4vL1xuLy8gQ2FsbCBgcHVzaChuZXdDaHVuaylgIHRvIHBhc3MgYWxvbmcgdHJhbnNmb3JtZWQgb3V0cHV0XG4vLyB0byB0aGUgcmVhZGFibGUgc2lkZS4gIFlvdSBtYXkgY2FsbCAncHVzaCcgemVybyBvciBtb3JlIHRpbWVzLlxuLy9cbi8vIENhbGwgYGNiKGVycilgIHdoZW4geW91IGFyZSBkb25lIHdpdGggdGhpcyBjaHVuay4gIElmIHlvdSBwYXNzXG4vLyBhbiBlcnJvciwgdGhlbiB0aGF0J2xsIHB1dCB0aGUgaHVydCBvbiB0aGUgd2hvbGUgb3BlcmF0aW9uLiAgSWYgeW91XG4vLyBuZXZlciBjYWxsIGNiKCksIHRoZW4geW91J2xsIG5ldmVyIGdldCBhbm90aGVyIGNodW5rLlxuVHJhbnNmb3JtLnByb3RvdHlwZS5fdHJhbnNmb3JtID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdfdHJhbnNmb3JtKCkgaXMgbm90IGltcGxlbWVudGVkJyk7XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLl93cml0ZSA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIHZhciB0cyA9IHRoaXMuX3RyYW5zZm9ybVN0YXRlO1xuICB0cy53cml0ZWNiID0gY2I7XG4gIHRzLndyaXRlY2h1bmsgPSBjaHVuaztcbiAgdHMud3JpdGVlbmNvZGluZyA9IGVuY29kaW5nO1xuICBpZiAoIXRzLnRyYW5zZm9ybWluZykge1xuICAgIHZhciBycyA9IHRoaXMuX3JlYWRhYmxlU3RhdGU7XG4gICAgaWYgKHRzLm5lZWRUcmFuc2Zvcm0gfHwgcnMubmVlZFJlYWRhYmxlIHx8IHJzLmxlbmd0aCA8IHJzLmhpZ2hXYXRlck1hcmspIHRoaXMuX3JlYWQocnMuaGlnaFdhdGVyTWFyayk7XG4gIH1cbn07XG5cbi8vIERvZXNuJ3QgbWF0dGVyIHdoYXQgdGhlIGFyZ3MgYXJlIGhlcmUuXG4vLyBfdHJhbnNmb3JtIGRvZXMgYWxsIHRoZSB3b3JrLlxuLy8gVGhhdCB3ZSBnb3QgaGVyZSBtZWFucyB0aGF0IHRoZSByZWFkYWJsZSBzaWRlIHdhbnRzIG1vcmUgZGF0YS5cblRyYW5zZm9ybS5wcm90b3R5cGUuX3JlYWQgPSBmdW5jdGlvbiAobikge1xuICB2YXIgdHMgPSB0aGlzLl90cmFuc2Zvcm1TdGF0ZTtcblxuICBpZiAodHMud3JpdGVjaHVuayAhPT0gbnVsbCAmJiB0cy53cml0ZWNiICYmICF0cy50cmFuc2Zvcm1pbmcpIHtcbiAgICB0cy50cmFuc2Zvcm1pbmcgPSB0cnVlO1xuICAgIHRoaXMuX3RyYW5zZm9ybSh0cy53cml0ZWNodW5rLCB0cy53cml0ZWVuY29kaW5nLCB0cy5hZnRlclRyYW5zZm9ybSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gbWFyayB0aGF0IHdlIG5lZWQgYSB0cmFuc2Zvcm0sIHNvIHRoYXQgYW55IGRhdGEgdGhhdCBjb21lcyBpblxuICAgIC8vIHdpbGwgZ2V0IHByb2Nlc3NlZCwgbm93IHRoYXQgd2UndmUgYXNrZWQgZm9yIGl0LlxuICAgIHRzLm5lZWRUcmFuc2Zvcm0gPSB0cnVlO1xuICB9XG59O1xuXG5mdW5jdGlvbiBkb25lKHN0cmVhbSwgZXIsIGRhdGEpIHtcbiAgaWYgKGVyKSByZXR1cm4gc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXIpO1xuXG4gIGlmIChkYXRhICE9PSBudWxsICYmIGRhdGEgIT09IHVuZGVmaW5lZCkgc3RyZWFtLnB1c2goZGF0YSk7XG5cbiAgLy8gaWYgdGhlcmUncyBub3RoaW5nIGluIHRoZSB3cml0ZSBidWZmZXIsIHRoZW4gdGhhdCBtZWFuc1xuICAvLyB0aGF0IG5vdGhpbmcgbW9yZSB3aWxsIGV2ZXIgYmUgcHJvdmlkZWRcbiAgdmFyIHdzID0gc3RyZWFtLl93cml0YWJsZVN0YXRlO1xuICB2YXIgdHMgPSBzdHJlYW0uX3RyYW5zZm9ybVN0YXRlO1xuXG4gIGlmICh3cy5sZW5ndGgpIHRocm93IG5ldyBFcnJvcignQ2FsbGluZyB0cmFuc2Zvcm0gZG9uZSB3aGVuIHdzLmxlbmd0aCAhPSAwJyk7XG5cbiAgaWYgKHRzLnRyYW5zZm9ybWluZykgdGhyb3cgbmV3IEVycm9yKCdDYWxsaW5nIHRyYW5zZm9ybSBkb25lIHdoZW4gc3RpbGwgdHJhbnNmb3JtaW5nJyk7XG5cbiAgcmV0dXJuIHN0cmVhbS5wdXNoKG51bGwpO1xufSIsIihmdW5jdGlvbiAocHJvY2Vzcyl7XG4vLyBBIGJpdCBzaW1wbGVyIHRoYW4gcmVhZGFibGUgc3RyZWFtcy5cbi8vIEltcGxlbWVudCBhbiBhc3luYyAuX3dyaXRlKGNodW5rLCBlbmNvZGluZywgY2IpLCBhbmQgaXQnbGwgaGFuZGxlIGFsbFxuLy8gdGhlIGRyYWluIGV2ZW50IGVtaXNzaW9uIGFuZCBidWZmZXJpbmcuXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBXcml0YWJsZTtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBwcm9jZXNzTmV4dFRpY2sgPSByZXF1aXJlKCdwcm9jZXNzLW5leHRpY2stYXJncycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgYXN5bmNXcml0ZSA9ICFwcm9jZXNzLmJyb3dzZXIgJiYgWyd2MC4xMCcsICd2MC45LiddLmluZGV4T2YocHJvY2Vzcy52ZXJzaW9uLnNsaWNlKDAsIDUpKSA+IC0xID8gc2V0SW1tZWRpYXRlIDogcHJvY2Vzc05leHRUaWNrO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgRHVwbGV4O1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbldyaXRhYmxlLldyaXRhYmxlU3RhdGUgPSBXcml0YWJsZVN0YXRlO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIHV0aWwgPSByZXF1aXJlKCdjb3JlLXV0aWwtaXMnKTtcbnV0aWwuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgaW50ZXJuYWxVdGlsID0ge1xuICBkZXByZWNhdGU6IHJlcXVpcmUoJ3V0aWwtZGVwcmVjYXRlJylcbn07XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBTdHJlYW07XG4oZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIFN0cmVhbSA9IHJlcXVpcmUoJ3N0JyArICdyZWFtJyk7XG4gIH0gY2F0Y2ggKF8pIHt9IGZpbmFsbHkge1xuICAgIGlmICghU3RyZWFtKSBTdHJlYW0gPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG4gIH1cbn0pKCk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpLkJ1ZmZlcjtcbi8qPHJlcGxhY2VtZW50PiovXG52YXIgYnVmZmVyU2hpbSA9IHJlcXVpcmUoJ2J1ZmZlci1zaGltcycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbnV0aWwuaW5oZXJpdHMoV3JpdGFibGUsIFN0cmVhbSk7XG5cbmZ1bmN0aW9uIG5vcCgpIHt9XG5cbmZ1bmN0aW9uIFdyaXRlUmVxKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgdGhpcy5jaHVuayA9IGNodW5rO1xuICB0aGlzLmVuY29kaW5nID0gZW5jb2Rpbmc7XG4gIHRoaXMuY2FsbGJhY2sgPSBjYjtcbiAgdGhpcy5uZXh0ID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gV3JpdGFibGVTdGF0ZShvcHRpb25zLCBzdHJlYW0pIHtcbiAgRHVwbGV4ID0gRHVwbGV4IHx8IHJlcXVpcmUoJy4vX3N0cmVhbV9kdXBsZXgnKTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAvLyBvYmplY3Qgc3RyZWFtIGZsYWcgdG8gaW5kaWNhdGUgd2hldGhlciBvciBub3QgdGhpcyBzdHJlYW1cbiAgLy8gY29udGFpbnMgYnVmZmVycyBvciBvYmplY3RzLlxuICB0aGlzLm9iamVjdE1vZGUgPSAhIW9wdGlvbnMub2JqZWN0TW9kZTtcblxuICBpZiAoc3RyZWFtIGluc3RhbmNlb2YgRHVwbGV4KSB0aGlzLm9iamVjdE1vZGUgPSB0aGlzLm9iamVjdE1vZGUgfHwgISFvcHRpb25zLndyaXRhYmxlT2JqZWN0TW9kZTtcblxuICAvLyB0aGUgcG9pbnQgYXQgd2hpY2ggd3JpdGUoKSBzdGFydHMgcmV0dXJuaW5nIGZhbHNlXG4gIC8vIE5vdGU6IDAgaXMgYSB2YWxpZCB2YWx1ZSwgbWVhbnMgdGhhdCB3ZSBhbHdheXMgcmV0dXJuIGZhbHNlIGlmXG4gIC8vIHRoZSBlbnRpcmUgYnVmZmVyIGlzIG5vdCBmbHVzaGVkIGltbWVkaWF0ZWx5IG9uIHdyaXRlKClcbiAgdmFyIGh3bSA9IG9wdGlvbnMuaGlnaFdhdGVyTWFyaztcbiAgdmFyIGRlZmF1bHRId20gPSB0aGlzLm9iamVjdE1vZGUgPyAxNiA6IDE2ICogMTAyNDtcbiAgdGhpcy5oaWdoV2F0ZXJNYXJrID0gaHdtIHx8IGh3bSA9PT0gMCA/IGh3bSA6IGRlZmF1bHRId207XG5cbiAgLy8gY2FzdCB0byBpbnRzLlxuICB0aGlzLmhpZ2hXYXRlck1hcmsgPSB+fnRoaXMuaGlnaFdhdGVyTWFyaztcblxuICAvLyBkcmFpbiBldmVudCBmbGFnLlxuICB0aGlzLm5lZWREcmFpbiA9IGZhbHNlO1xuICAvLyBhdCB0aGUgc3RhcnQgb2YgY2FsbGluZyBlbmQoKVxuICB0aGlzLmVuZGluZyA9IGZhbHNlO1xuICAvLyB3aGVuIGVuZCgpIGhhcyBiZWVuIGNhbGxlZCwgYW5kIHJldHVybmVkXG4gIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgLy8gd2hlbiAnZmluaXNoJyBpcyBlbWl0dGVkXG4gIHRoaXMuZmluaXNoZWQgPSBmYWxzZTtcblxuICAvLyBzaG91bGQgd2UgZGVjb2RlIHN0cmluZ3MgaW50byBidWZmZXJzIGJlZm9yZSBwYXNzaW5nIHRvIF93cml0ZT9cbiAgLy8gdGhpcyBpcyBoZXJlIHNvIHRoYXQgc29tZSBub2RlLWNvcmUgc3RyZWFtcyBjYW4gb3B0aW1pemUgc3RyaW5nXG4gIC8vIGhhbmRsaW5nIGF0IGEgbG93ZXIgbGV2ZWwuXG4gIHZhciBub0RlY29kZSA9IG9wdGlvbnMuZGVjb2RlU3RyaW5ncyA9PT0gZmFsc2U7XG4gIHRoaXMuZGVjb2RlU3RyaW5ncyA9ICFub0RlY29kZTtcblxuICAvLyBDcnlwdG8gaXMga2luZCBvZiBvbGQgYW5kIGNydXN0eS4gIEhpc3RvcmljYWxseSwgaXRzIGRlZmF1bHQgc3RyaW5nXG4gIC8vIGVuY29kaW5nIGlzICdiaW5hcnknIHNvIHdlIGhhdmUgdG8gbWFrZSB0aGlzIGNvbmZpZ3VyYWJsZS5cbiAgLy8gRXZlcnl0aGluZyBlbHNlIGluIHRoZSB1bml2ZXJzZSB1c2VzICd1dGY4JywgdGhvdWdoLlxuICB0aGlzLmRlZmF1bHRFbmNvZGluZyA9IG9wdGlvbnMuZGVmYXVsdEVuY29kaW5nIHx8ICd1dGY4JztcblxuICAvLyBub3QgYW4gYWN0dWFsIGJ1ZmZlciB3ZSBrZWVwIHRyYWNrIG9mLCBidXQgYSBtZWFzdXJlbWVudFxuICAvLyBvZiBob3cgbXVjaCB3ZSdyZSB3YWl0aW5nIHRvIGdldCBwdXNoZWQgdG8gc29tZSB1bmRlcmx5aW5nXG4gIC8vIHNvY2tldCBvciBmaWxlLlxuICB0aGlzLmxlbmd0aCA9IDA7XG5cbiAgLy8gYSBmbGFnIHRvIHNlZSB3aGVuIHdlJ3JlIGluIHRoZSBtaWRkbGUgb2YgYSB3cml0ZS5cbiAgdGhpcy53cml0aW5nID0gZmFsc2U7XG5cbiAgLy8gd2hlbiB0cnVlIGFsbCB3cml0ZXMgd2lsbCBiZSBidWZmZXJlZCB1bnRpbCAudW5jb3JrKCkgY2FsbFxuICB0aGlzLmNvcmtlZCA9IDA7XG5cbiAgLy8gYSBmbGFnIHRvIGJlIGFibGUgdG8gdGVsbCBpZiB0aGUgb253cml0ZSBjYiBpcyBjYWxsZWQgaW1tZWRpYXRlbHksXG4gIC8vIG9yIG9uIGEgbGF0ZXIgdGljay4gIFdlIHNldCB0aGlzIHRvIHRydWUgYXQgZmlyc3QsIGJlY2F1c2UgYW55XG4gIC8vIGFjdGlvbnMgdGhhdCBzaG91bGRuJ3QgaGFwcGVuIHVudGlsIFwibGF0ZXJcIiBzaG91bGQgZ2VuZXJhbGx5IGFsc29cbiAgLy8gbm90IGhhcHBlbiBiZWZvcmUgdGhlIGZpcnN0IHdyaXRlIGNhbGwuXG4gIHRoaXMuc3luYyA9IHRydWU7XG5cbiAgLy8gYSBmbGFnIHRvIGtub3cgaWYgd2UncmUgcHJvY2Vzc2luZyBwcmV2aW91c2x5IGJ1ZmZlcmVkIGl0ZW1zLCB3aGljaFxuICAvLyBtYXkgY2FsbCB0aGUgX3dyaXRlKCkgY2FsbGJhY2sgaW4gdGhlIHNhbWUgdGljaywgc28gdGhhdCB3ZSBkb24ndFxuICAvLyBlbmQgdXAgaW4gYW4gb3ZlcmxhcHBlZCBvbndyaXRlIHNpdHVhdGlvbi5cbiAgdGhpcy5idWZmZXJQcm9jZXNzaW5nID0gZmFsc2U7XG5cbiAgLy8gdGhlIGNhbGxiYWNrIHRoYXQncyBwYXNzZWQgdG8gX3dyaXRlKGNodW5rLGNiKVxuICB0aGlzLm9ud3JpdGUgPSBmdW5jdGlvbiAoZXIpIHtcbiAgICBvbndyaXRlKHN0cmVhbSwgZXIpO1xuICB9O1xuXG4gIC8vIHRoZSBjYWxsYmFjayB0aGF0IHRoZSB1c2VyIHN1cHBsaWVzIHRvIHdyaXRlKGNodW5rLGVuY29kaW5nLGNiKVxuICB0aGlzLndyaXRlY2IgPSBudWxsO1xuXG4gIC8vIHRoZSBhbW91bnQgdGhhdCBpcyBiZWluZyB3cml0dGVuIHdoZW4gX3dyaXRlIGlzIGNhbGxlZC5cbiAgdGhpcy53cml0ZWxlbiA9IDA7XG5cbiAgdGhpcy5idWZmZXJlZFJlcXVlc3QgPSBudWxsO1xuICB0aGlzLmxhc3RCdWZmZXJlZFJlcXVlc3QgPSBudWxsO1xuXG4gIC8vIG51bWJlciBvZiBwZW5kaW5nIHVzZXItc3VwcGxpZWQgd3JpdGUgY2FsbGJhY2tzXG4gIC8vIHRoaXMgbXVzdCBiZSAwIGJlZm9yZSAnZmluaXNoJyBjYW4gYmUgZW1pdHRlZFxuICB0aGlzLnBlbmRpbmdjYiA9IDA7XG5cbiAgLy8gZW1pdCBwcmVmaW5pc2ggaWYgdGhlIG9ubHkgdGhpbmcgd2UncmUgd2FpdGluZyBmb3IgaXMgX3dyaXRlIGNic1xuICAvLyBUaGlzIGlzIHJlbGV2YW50IGZvciBzeW5jaHJvbm91cyBUcmFuc2Zvcm0gc3RyZWFtc1xuICB0aGlzLnByZWZpbmlzaGVkID0gZmFsc2U7XG5cbiAgLy8gVHJ1ZSBpZiB0aGUgZXJyb3Igd2FzIGFscmVhZHkgZW1pdHRlZCBhbmQgc2hvdWxkIG5vdCBiZSB0aHJvd24gYWdhaW5cbiAgdGhpcy5lcnJvckVtaXR0ZWQgPSBmYWxzZTtcblxuICAvLyBjb3VudCBidWZmZXJlZCByZXF1ZXN0c1xuICB0aGlzLmJ1ZmZlcmVkUmVxdWVzdENvdW50ID0gMDtcblxuICAvLyBhbGxvY2F0ZSB0aGUgZmlyc3QgQ29ya2VkUmVxdWVzdCwgdGhlcmUgaXMgYWx3YXlzXG4gIC8vIG9uZSBhbGxvY2F0ZWQgYW5kIGZyZWUgdG8gdXNlLCBhbmQgd2UgbWFpbnRhaW4gYXQgbW9zdCB0d29cbiAgdGhpcy5jb3JrZWRSZXF1ZXN0c0ZyZWUgPSBuZXcgQ29ya2VkUmVxdWVzdCh0aGlzKTtcbn1cblxuV3JpdGFibGVTdGF0ZS5wcm90b3R5cGUuZ2V0QnVmZmVyID0gZnVuY3Rpb24gZ2V0QnVmZmVyKCkge1xuICB2YXIgY3VycmVudCA9IHRoaXMuYnVmZmVyZWRSZXF1ZXN0O1xuICB2YXIgb3V0ID0gW107XG4gIHdoaWxlIChjdXJyZW50KSB7XG4gICAgb3V0LnB1c2goY3VycmVudCk7XG4gICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgfVxuICByZXR1cm4gb3V0O1xufTtcblxuKGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV3JpdGFibGVTdGF0ZS5wcm90b3R5cGUsICdidWZmZXInLCB7XG4gICAgICBnZXQ6IGludGVybmFsVXRpbC5kZXByZWNhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRCdWZmZXIoKTtcbiAgICAgIH0sICdfd3JpdGFibGVTdGF0ZS5idWZmZXIgaXMgZGVwcmVjYXRlZC4gVXNlIF93cml0YWJsZVN0YXRlLmdldEJ1ZmZlciAnICsgJ2luc3RlYWQuJylcbiAgICB9KTtcbiAgfSBjYXRjaCAoXykge31cbn0pKCk7XG5cbi8vIFRlc3QgX3dyaXRhYmxlU3RhdGUgZm9yIGluaGVyaXRhbmNlIHRvIGFjY291bnQgZm9yIER1cGxleCBzdHJlYW1zLFxuLy8gd2hvc2UgcHJvdG90eXBlIGNoYWluIG9ubHkgcG9pbnRzIHRvIFJlYWRhYmxlLlxudmFyIHJlYWxIYXNJbnN0YW5jZTtcbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5oYXNJbnN0YW5jZSAmJiB0eXBlb2YgRnVuY3Rpb24ucHJvdG90eXBlW1N5bWJvbC5oYXNJbnN0YW5jZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgcmVhbEhhc0luc3RhbmNlID0gRnVuY3Rpb24ucHJvdG90eXBlW1N5bWJvbC5oYXNJbnN0YW5jZV07XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcml0YWJsZSwgU3ltYm9sLmhhc0luc3RhbmNlLCB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgIGlmIChyZWFsSGFzSW5zdGFuY2UuY2FsbCh0aGlzLCBvYmplY3QpKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgcmV0dXJuIG9iamVjdCAmJiBvYmplY3QuX3dyaXRhYmxlU3RhdGUgaW5zdGFuY2VvZiBXcml0YWJsZVN0YXRlO1xuICAgIH1cbiAgfSk7XG59IGVsc2Uge1xuICByZWFsSGFzSW5zdGFuY2UgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCBpbnN0YW5jZW9mIHRoaXM7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFdyaXRhYmxlKG9wdGlvbnMpIHtcbiAgRHVwbGV4ID0gRHVwbGV4IHx8IHJlcXVpcmUoJy4vX3N0cmVhbV9kdXBsZXgnKTtcblxuICAvLyBXcml0YWJsZSBjdG9yIGlzIGFwcGxpZWQgdG8gRHVwbGV4ZXMsIHRvby5cbiAgLy8gYHJlYWxIYXNJbnN0YW5jZWAgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgdXNpbmcgcGxhaW4gYGluc3RhbmNlb2ZgXG4gIC8vIHdvdWxkIHJldHVybiBmYWxzZSwgYXMgbm8gYF93cml0YWJsZVN0YXRlYCBwcm9wZXJ0eSBpcyBhdHRhY2hlZC5cblxuICAvLyBUcnlpbmcgdG8gdXNlIHRoZSBjdXN0b20gYGluc3RhbmNlb2ZgIGZvciBXcml0YWJsZSBoZXJlIHdpbGwgYWxzbyBicmVhayB0aGVcbiAgLy8gTm9kZS5qcyBMYXp5VHJhbnNmb3JtIGltcGxlbWVudGF0aW9uLCB3aGljaCBoYXMgYSBub24tdHJpdmlhbCBnZXR0ZXIgZm9yXG4gIC8vIGBfd3JpdGFibGVTdGF0ZWAgdGhhdCB3b3VsZCBsZWFkIHRvIGluZmluaXRlIHJlY3Vyc2lvbi5cbiAgaWYgKCFyZWFsSGFzSW5zdGFuY2UuY2FsbChXcml0YWJsZSwgdGhpcykgJiYgISh0aGlzIGluc3RhbmNlb2YgRHVwbGV4KSkge1xuICAgIHJldHVybiBuZXcgV3JpdGFibGUob3B0aW9ucyk7XG4gIH1cblxuICB0aGlzLl93cml0YWJsZVN0YXRlID0gbmV3IFdyaXRhYmxlU3RhdGUob3B0aW9ucywgdGhpcyk7XG5cbiAgLy8gbGVnYWN5LlxuICB0aGlzLndyaXRhYmxlID0gdHJ1ZTtcblxuICBpZiAob3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy53cml0ZSA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5fd3JpdGUgPSBvcHRpb25zLndyaXRlO1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLndyaXRldiA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5fd3JpdGV2ID0gb3B0aW9ucy53cml0ZXY7XG4gIH1cblxuICBTdHJlYW0uY2FsbCh0aGlzKTtcbn1cblxuLy8gT3RoZXJ3aXNlIHBlb3BsZSBjYW4gcGlwZSBXcml0YWJsZSBzdHJlYW1zLCB3aGljaCBpcyBqdXN0IHdyb25nLlxuV3JpdGFibGUucHJvdG90eXBlLnBpcGUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoJ0Nhbm5vdCBwaXBlLCBub3QgcmVhZGFibGUnKSk7XG59O1xuXG5mdW5jdGlvbiB3cml0ZUFmdGVyRW5kKHN0cmVhbSwgY2IpIHtcbiAgdmFyIGVyID0gbmV3IEVycm9yKCd3cml0ZSBhZnRlciBlbmQnKTtcbiAgLy8gVE9ETzogZGVmZXIgZXJyb3IgZXZlbnRzIGNvbnNpc3RlbnRseSBldmVyeXdoZXJlLCBub3QganVzdCB0aGUgY2JcbiAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXIpO1xuICBwcm9jZXNzTmV4dFRpY2soY2IsIGVyKTtcbn1cblxuLy8gQ2hlY2tzIHRoYXQgYSB1c2VyLXN1cHBsaWVkIGNodW5rIGlzIHZhbGlkLCBlc3BlY2lhbGx5IGZvciB0aGUgcGFydGljdWxhclxuLy8gbW9kZSB0aGUgc3RyZWFtIGlzIGluLiBDdXJyZW50bHkgdGhpcyBtZWFucyB0aGF0IGBudWxsYCBpcyBuZXZlciBhY2NlcHRlZFxuLy8gYW5kIHVuZGVmaW5lZC9ub24tc3RyaW5nIHZhbHVlcyBhcmUgb25seSBhbGxvd2VkIGluIG9iamVjdCBtb2RlLlxuZnVuY3Rpb24gdmFsaWRDaHVuayhzdHJlYW0sIHN0YXRlLCBjaHVuaywgY2IpIHtcbiAgdmFyIHZhbGlkID0gdHJ1ZTtcbiAgdmFyIGVyID0gZmFsc2U7XG5cbiAgaWYgKGNodW5rID09PSBudWxsKSB7XG4gICAgZXIgPSBuZXcgVHlwZUVycm9yKCdNYXkgbm90IHdyaXRlIG51bGwgdmFsdWVzIHRvIHN0cmVhbScpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBjaHVuayAhPT0gJ3N0cmluZycgJiYgY2h1bmsgIT09IHVuZGVmaW5lZCAmJiAhc3RhdGUub2JqZWN0TW9kZSkge1xuICAgIGVyID0gbmV3IFR5cGVFcnJvcignSW52YWxpZCBub24tc3RyaW5nL2J1ZmZlciBjaHVuaycpO1xuICB9XG4gIGlmIChlcikge1xuICAgIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVyKTtcbiAgICBwcm9jZXNzTmV4dFRpY2soY2IsIGVyKTtcbiAgICB2YWxpZCA9IGZhbHNlO1xuICB9XG4gIHJldHVybiB2YWxpZDtcbn1cblxuV3JpdGFibGUucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fd3JpdGFibGVTdGF0ZTtcbiAgdmFyIHJldCA9IGZhbHNlO1xuICB2YXIgaXNCdWYgPSBCdWZmZXIuaXNCdWZmZXIoY2h1bmspO1xuXG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYiA9IGVuY29kaW5nO1xuICAgIGVuY29kaW5nID0gbnVsbDtcbiAgfVxuXG4gIGlmIChpc0J1ZikgZW5jb2RpbmcgPSAnYnVmZmVyJztlbHNlIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gc3RhdGUuZGVmYXVsdEVuY29kaW5nO1xuXG4gIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIGNiID0gbm9wO1xuXG4gIGlmIChzdGF0ZS5lbmRlZCkgd3JpdGVBZnRlckVuZCh0aGlzLCBjYik7ZWxzZSBpZiAoaXNCdWYgfHwgdmFsaWRDaHVuayh0aGlzLCBzdGF0ZSwgY2h1bmssIGNiKSkge1xuICAgIHN0YXRlLnBlbmRpbmdjYisrO1xuICAgIHJldCA9IHdyaXRlT3JCdWZmZXIodGhpcywgc3RhdGUsIGlzQnVmLCBjaHVuaywgZW5jb2RpbmcsIGNiKTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59O1xuXG5Xcml0YWJsZS5wcm90b3R5cGUuY29yayA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fd3JpdGFibGVTdGF0ZTtcblxuICBzdGF0ZS5jb3JrZWQrKztcbn07XG5cbldyaXRhYmxlLnByb3RvdHlwZS51bmNvcmsgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdGF0ZSA9IHRoaXMuX3dyaXRhYmxlU3RhdGU7XG5cbiAgaWYgKHN0YXRlLmNvcmtlZCkge1xuICAgIHN0YXRlLmNvcmtlZC0tO1xuXG4gICAgaWYgKCFzdGF0ZS53cml0aW5nICYmICFzdGF0ZS5jb3JrZWQgJiYgIXN0YXRlLmZpbmlzaGVkICYmICFzdGF0ZS5idWZmZXJQcm9jZXNzaW5nICYmIHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdCkgY2xlYXJCdWZmZXIodGhpcywgc3RhdGUpO1xuICB9XG59O1xuXG5Xcml0YWJsZS5wcm90b3R5cGUuc2V0RGVmYXVsdEVuY29kaW5nID0gZnVuY3Rpb24gc2V0RGVmYXVsdEVuY29kaW5nKGVuY29kaW5nKSB7XG4gIC8vIG5vZGU6OlBhcnNlRW5jb2RpbmcoKSByZXF1aXJlcyBsb3dlciBjYXNlLlxuICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJykgZW5jb2RpbmcgPSBlbmNvZGluZy50b0xvd2VyQ2FzZSgpO1xuICBpZiAoIShbJ2hleCcsICd1dGY4JywgJ3V0Zi04JywgJ2FzY2lpJywgJ2JpbmFyeScsICdiYXNlNjQnLCAndWNzMicsICd1Y3MtMicsICd1dGYxNmxlJywgJ3V0Zi0xNmxlJywgJ3JhdyddLmluZGV4T2YoKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKCkpID4gLTEpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpO1xuICB0aGlzLl93cml0YWJsZVN0YXRlLmRlZmF1bHRFbmNvZGluZyA9IGVuY29kaW5nO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIGRlY29kZUNodW5rKHN0YXRlLCBjaHVuaywgZW5jb2RpbmcpIHtcbiAgaWYgKCFzdGF0ZS5vYmplY3RNb2RlICYmIHN0YXRlLmRlY29kZVN0cmluZ3MgIT09IGZhbHNlICYmIHR5cGVvZiBjaHVuayA9PT0gJ3N0cmluZycpIHtcbiAgICBjaHVuayA9IGJ1ZmZlclNoaW0uZnJvbShjaHVuaywgZW5jb2RpbmcpO1xuICB9XG4gIHJldHVybiBjaHVuaztcbn1cblxuLy8gaWYgd2UncmUgYWxyZWFkeSB3cml0aW5nIHNvbWV0aGluZywgdGhlbiBqdXN0IHB1dCB0aGlzXG4vLyBpbiB0aGUgcXVldWUsIGFuZCB3YWl0IG91ciB0dXJuLiAgT3RoZXJ3aXNlLCBjYWxsIF93cml0ZVxuLy8gSWYgd2UgcmV0dXJuIGZhbHNlLCB0aGVuIHdlIG5lZWQgYSBkcmFpbiBldmVudCwgc28gc2V0IHRoYXQgZmxhZy5cbmZ1bmN0aW9uIHdyaXRlT3JCdWZmZXIoc3RyZWFtLCBzdGF0ZSwgaXNCdWYsIGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgaWYgKCFpc0J1Zikge1xuICAgIGNodW5rID0gZGVjb2RlQ2h1bmsoc3RhdGUsIGNodW5rLCBlbmNvZGluZyk7XG4gICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihjaHVuaykpIGVuY29kaW5nID0gJ2J1ZmZlcic7XG4gIH1cbiAgdmFyIGxlbiA9IHN0YXRlLm9iamVjdE1vZGUgPyAxIDogY2h1bmsubGVuZ3RoO1xuXG4gIHN0YXRlLmxlbmd0aCArPSBsZW47XG5cbiAgdmFyIHJldCA9IHN0YXRlLmxlbmd0aCA8IHN0YXRlLmhpZ2hXYXRlck1hcms7XG4gIC8vIHdlIG11c3QgZW5zdXJlIHRoYXQgcHJldmlvdXMgbmVlZERyYWluIHdpbGwgbm90IGJlIHJlc2V0IHRvIGZhbHNlLlxuICBpZiAoIXJldCkgc3RhdGUubmVlZERyYWluID0gdHJ1ZTtcblxuICBpZiAoc3RhdGUud3JpdGluZyB8fCBzdGF0ZS5jb3JrZWQpIHtcbiAgICB2YXIgbGFzdCA9IHN0YXRlLmxhc3RCdWZmZXJlZFJlcXVlc3Q7XG4gICAgc3RhdGUubGFzdEJ1ZmZlcmVkUmVxdWVzdCA9IG5ldyBXcml0ZVJlcShjaHVuaywgZW5jb2RpbmcsIGNiKTtcbiAgICBpZiAobGFzdCkge1xuICAgICAgbGFzdC5uZXh0ID0gc3RhdGUubGFzdEJ1ZmZlcmVkUmVxdWVzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0ID0gc3RhdGUubGFzdEJ1ZmZlcmVkUmVxdWVzdDtcbiAgICB9XG4gICAgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0Q291bnQgKz0gMTtcbiAgfSBlbHNlIHtcbiAgICBkb1dyaXRlKHN0cmVhbSwgc3RhdGUsIGZhbHNlLCBsZW4sIGNodW5rLCBlbmNvZGluZywgY2IpO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZG9Xcml0ZShzdHJlYW0sIHN0YXRlLCB3cml0ZXYsIGxlbiwgY2h1bmssIGVuY29kaW5nLCBjYikge1xuICBzdGF0ZS53cml0ZWxlbiA9IGxlbjtcbiAgc3RhdGUud3JpdGVjYiA9IGNiO1xuICBzdGF0ZS53cml0aW5nID0gdHJ1ZTtcbiAgc3RhdGUuc3luYyA9IHRydWU7XG4gIGlmICh3cml0ZXYpIHN0cmVhbS5fd3JpdGV2KGNodW5rLCBzdGF0ZS5vbndyaXRlKTtlbHNlIHN0cmVhbS5fd3JpdGUoY2h1bmssIGVuY29kaW5nLCBzdGF0ZS5vbndyaXRlKTtcbiAgc3RhdGUuc3luYyA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBvbndyaXRlRXJyb3Ioc3RyZWFtLCBzdGF0ZSwgc3luYywgZXIsIGNiKSB7XG4gIC0tc3RhdGUucGVuZGluZ2NiO1xuICBpZiAoc3luYykgcHJvY2Vzc05leHRUaWNrKGNiLCBlcik7ZWxzZSBjYihlcik7XG5cbiAgc3RyZWFtLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZCA9IHRydWU7XG4gIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVyKTtcbn1cblxuZnVuY3Rpb24gb253cml0ZVN0YXRlVXBkYXRlKHN0YXRlKSB7XG4gIHN0YXRlLndyaXRpbmcgPSBmYWxzZTtcbiAgc3RhdGUud3JpdGVjYiA9IG51bGw7XG4gIHN0YXRlLmxlbmd0aCAtPSBzdGF0ZS53cml0ZWxlbjtcbiAgc3RhdGUud3JpdGVsZW4gPSAwO1xufVxuXG5mdW5jdGlvbiBvbndyaXRlKHN0cmVhbSwgZXIpIHtcbiAgdmFyIHN0YXRlID0gc3RyZWFtLl93cml0YWJsZVN0YXRlO1xuICB2YXIgc3luYyA9IHN0YXRlLnN5bmM7XG4gIHZhciBjYiA9IHN0YXRlLndyaXRlY2I7XG5cbiAgb253cml0ZVN0YXRlVXBkYXRlKHN0YXRlKTtcblxuICBpZiAoZXIpIG9ud3JpdGVFcnJvcihzdHJlYW0sIHN0YXRlLCBzeW5jLCBlciwgY2IpO2Vsc2Uge1xuICAgIC8vIENoZWNrIGlmIHdlJ3JlIGFjdHVhbGx5IHJlYWR5IHRvIGZpbmlzaCwgYnV0IGRvbid0IGVtaXQgeWV0XG4gICAgdmFyIGZpbmlzaGVkID0gbmVlZEZpbmlzaChzdGF0ZSk7XG5cbiAgICBpZiAoIWZpbmlzaGVkICYmICFzdGF0ZS5jb3JrZWQgJiYgIXN0YXRlLmJ1ZmZlclByb2Nlc3NpbmcgJiYgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0KSB7XG4gICAgICBjbGVhckJ1ZmZlcihzdHJlYW0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoc3luYykge1xuICAgICAgLyo8cmVwbGFjZW1lbnQ+Ki9cbiAgICAgIGFzeW5jV3JpdGUoYWZ0ZXJXcml0ZSwgc3RyZWFtLCBzdGF0ZSwgZmluaXNoZWQsIGNiKTtcbiAgICAgIC8qPC9yZXBsYWNlbWVudD4qL1xuICAgIH0gZWxzZSB7XG4gICAgICBhZnRlcldyaXRlKHN0cmVhbSwgc3RhdGUsIGZpbmlzaGVkLCBjYik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFmdGVyV3JpdGUoc3RyZWFtLCBzdGF0ZSwgZmluaXNoZWQsIGNiKSB7XG4gIGlmICghZmluaXNoZWQpIG9ud3JpdGVEcmFpbihzdHJlYW0sIHN0YXRlKTtcbiAgc3RhdGUucGVuZGluZ2NiLS07XG4gIGNiKCk7XG4gIGZpbmlzaE1heWJlKHN0cmVhbSwgc3RhdGUpO1xufVxuXG4vLyBNdXN0IGZvcmNlIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBvbiBuZXh0VGljaywgc28gdGhhdCB3ZSBkb24ndFxuLy8gZW1pdCAnZHJhaW4nIGJlZm9yZSB0aGUgd3JpdGUoKSBjb25zdW1lciBnZXRzIHRoZSAnZmFsc2UnIHJldHVyblxuLy8gdmFsdWUsIGFuZCBoYXMgYSBjaGFuY2UgdG8gYXR0YWNoIGEgJ2RyYWluJyBsaXN0ZW5lci5cbmZ1bmN0aW9uIG9ud3JpdGVEcmFpbihzdHJlYW0sIHN0YXRlKSB7XG4gIGlmIChzdGF0ZS5sZW5ndGggPT09IDAgJiYgc3RhdGUubmVlZERyYWluKSB7XG4gICAgc3RhdGUubmVlZERyYWluID0gZmFsc2U7XG4gICAgc3RyZWFtLmVtaXQoJ2RyYWluJyk7XG4gIH1cbn1cblxuLy8gaWYgdGhlcmUncyBzb21ldGhpbmcgaW4gdGhlIGJ1ZmZlciB3YWl0aW5nLCB0aGVuIHByb2Nlc3MgaXRcbmZ1bmN0aW9uIGNsZWFyQnVmZmVyKHN0cmVhbSwgc3RhdGUpIHtcbiAgc3RhdGUuYnVmZmVyUHJvY2Vzc2luZyA9IHRydWU7XG4gIHZhciBlbnRyeSA9IHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdDtcblxuICBpZiAoc3RyZWFtLl93cml0ZXYgJiYgZW50cnkgJiYgZW50cnkubmV4dCkge1xuICAgIC8vIEZhc3QgY2FzZSwgd3JpdGUgZXZlcnl0aGluZyB1c2luZyBfd3JpdGV2KClcbiAgICB2YXIgbCA9IHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdENvdW50O1xuICAgIHZhciBidWZmZXIgPSBuZXcgQXJyYXkobCk7XG4gICAgdmFyIGhvbGRlciA9IHN0YXRlLmNvcmtlZFJlcXVlc3RzRnJlZTtcbiAgICBob2xkZXIuZW50cnkgPSBlbnRyeTtcblxuICAgIHZhciBjb3VudCA9IDA7XG4gICAgd2hpbGUgKGVudHJ5KSB7XG4gICAgICBidWZmZXJbY291bnRdID0gZW50cnk7XG4gICAgICBlbnRyeSA9IGVudHJ5Lm5leHQ7XG4gICAgICBjb3VudCArPSAxO1xuICAgIH1cblxuICAgIGRvV3JpdGUoc3RyZWFtLCBzdGF0ZSwgdHJ1ZSwgc3RhdGUubGVuZ3RoLCBidWZmZXIsICcnLCBob2xkZXIuZmluaXNoKTtcblxuICAgIC8vIGRvV3JpdGUgaXMgYWxtb3N0IGFsd2F5cyBhc3luYywgZGVmZXIgdGhlc2UgdG8gc2F2ZSBhIGJpdCBvZiB0aW1lXG4gICAgLy8gYXMgdGhlIGhvdCBwYXRoIGVuZHMgd2l0aCBkb1dyaXRlXG4gICAgc3RhdGUucGVuZGluZ2NiKys7XG4gICAgc3RhdGUubGFzdEJ1ZmZlcmVkUmVxdWVzdCA9IG51bGw7XG4gICAgaWYgKGhvbGRlci5uZXh0KSB7XG4gICAgICBzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWUgPSBob2xkZXIubmV4dDtcbiAgICAgIGhvbGRlci5uZXh0ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUuY29ya2VkUmVxdWVzdHNGcmVlID0gbmV3IENvcmtlZFJlcXVlc3Qoc3RhdGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBTbG93IGNhc2UsIHdyaXRlIGNodW5rcyBvbmUtYnktb25lXG4gICAgd2hpbGUgKGVudHJ5KSB7XG4gICAgICB2YXIgY2h1bmsgPSBlbnRyeS5jaHVuaztcbiAgICAgIHZhciBlbmNvZGluZyA9IGVudHJ5LmVuY29kaW5nO1xuICAgICAgdmFyIGNiID0gZW50cnkuY2FsbGJhY2s7XG4gICAgICB2YXIgbGVuID0gc3RhdGUub2JqZWN0TW9kZSA/IDEgOiBjaHVuay5sZW5ndGg7XG5cbiAgICAgIGRvV3JpdGUoc3RyZWFtLCBzdGF0ZSwgZmFsc2UsIGxlbiwgY2h1bmssIGVuY29kaW5nLCBjYik7XG4gICAgICBlbnRyeSA9IGVudHJ5Lm5leHQ7XG4gICAgICAvLyBpZiB3ZSBkaWRuJ3QgY2FsbCB0aGUgb253cml0ZSBpbW1lZGlhdGVseSwgdGhlblxuICAgICAgLy8gaXQgbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIHdhaXQgdW50aWwgaXQgZG9lcy5cbiAgICAgIC8vIGFsc28sIHRoYXQgbWVhbnMgdGhhdCB0aGUgY2h1bmsgYW5kIGNiIGFyZSBjdXJyZW50bHlcbiAgICAgIC8vIGJlaW5nIHByb2Nlc3NlZCwgc28gbW92ZSB0aGUgYnVmZmVyIGNvdW50ZXIgcGFzdCB0aGVtLlxuICAgICAgaWYgKHN0YXRlLndyaXRpbmcpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVudHJ5ID09PSBudWxsKSBzdGF0ZS5sYXN0QnVmZmVyZWRSZXF1ZXN0ID0gbnVsbDtcbiAgfVxuXG4gIHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdENvdW50ID0gMDtcbiAgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0ID0gZW50cnk7XG4gIHN0YXRlLmJ1ZmZlclByb2Nlc3NpbmcgPSBmYWxzZTtcbn1cblxuV3JpdGFibGUucHJvdG90eXBlLl93cml0ZSA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIGNiKG5ldyBFcnJvcignX3dyaXRlKCkgaXMgbm90IGltcGxlbWVudGVkJykpO1xufTtcblxuV3JpdGFibGUucHJvdG90eXBlLl93cml0ZXYgPSBudWxsO1xuXG5Xcml0YWJsZS5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fd3JpdGFibGVTdGF0ZTtcblxuICBpZiAodHlwZW9mIGNodW5rID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2IgPSBjaHVuaztcbiAgICBjaHVuayA9IG51bGw7XG4gICAgZW5jb2RpbmcgPSBudWxsO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiID0gZW5jb2Rpbmc7XG4gICAgZW5jb2RpbmcgPSBudWxsO1xuICB9XG5cbiAgaWYgKGNodW5rICE9PSBudWxsICYmIGNodW5rICE9PSB1bmRlZmluZWQpIHRoaXMud3JpdGUoY2h1bmssIGVuY29kaW5nKTtcblxuICAvLyAuZW5kKCkgZnVsbHkgdW5jb3Jrc1xuICBpZiAoc3RhdGUuY29ya2VkKSB7XG4gICAgc3RhdGUuY29ya2VkID0gMTtcbiAgICB0aGlzLnVuY29yaygpO1xuICB9XG5cbiAgLy8gaWdub3JlIHVubmVjZXNzYXJ5IGVuZCgpIGNhbGxzLlxuICBpZiAoIXN0YXRlLmVuZGluZyAmJiAhc3RhdGUuZmluaXNoZWQpIGVuZFdyaXRhYmxlKHRoaXMsIHN0YXRlLCBjYik7XG59O1xuXG5mdW5jdGlvbiBuZWVkRmluaXNoKHN0YXRlKSB7XG4gIHJldHVybiBzdGF0ZS5lbmRpbmcgJiYgc3RhdGUubGVuZ3RoID09PSAwICYmIHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdCA9PT0gbnVsbCAmJiAhc3RhdGUuZmluaXNoZWQgJiYgIXN0YXRlLndyaXRpbmc7XG59XG5cbmZ1bmN0aW9uIHByZWZpbmlzaChzdHJlYW0sIHN0YXRlKSB7XG4gIGlmICghc3RhdGUucHJlZmluaXNoZWQpIHtcbiAgICBzdGF0ZS5wcmVmaW5pc2hlZCA9IHRydWU7XG4gICAgc3RyZWFtLmVtaXQoJ3ByZWZpbmlzaCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmlzaE1heWJlKHN0cmVhbSwgc3RhdGUpIHtcbiAgdmFyIG5lZWQgPSBuZWVkRmluaXNoKHN0YXRlKTtcbiAgaWYgKG5lZWQpIHtcbiAgICBpZiAoc3RhdGUucGVuZGluZ2NiID09PSAwKSB7XG4gICAgICBwcmVmaW5pc2goc3RyZWFtLCBzdGF0ZSk7XG4gICAgICBzdGF0ZS5maW5pc2hlZCA9IHRydWU7XG4gICAgICBzdHJlYW0uZW1pdCgnZmluaXNoJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZWZpbmlzaChzdHJlYW0sIHN0YXRlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG5lZWQ7XG59XG5cbmZ1bmN0aW9uIGVuZFdyaXRhYmxlKHN0cmVhbSwgc3RhdGUsIGNiKSB7XG4gIHN0YXRlLmVuZGluZyA9IHRydWU7XG4gIGZpbmlzaE1heWJlKHN0cmVhbSwgc3RhdGUpO1xuICBpZiAoY2IpIHtcbiAgICBpZiAoc3RhdGUuZmluaXNoZWQpIHByb2Nlc3NOZXh0VGljayhjYik7ZWxzZSBzdHJlYW0ub25jZSgnZmluaXNoJywgY2IpO1xuICB9XG4gIHN0YXRlLmVuZGVkID0gdHJ1ZTtcbiAgc3RyZWFtLndyaXRhYmxlID0gZmFsc2U7XG59XG5cbi8vIEl0IHNlZW1zIGEgbGlua2VkIGxpc3QgYnV0IGl0IGlzIG5vdFxuLy8gdGhlcmUgd2lsbCBiZSBvbmx5IDIgb2YgdGhlc2UgZm9yIGVhY2ggc3RyZWFtXG5mdW5jdGlvbiBDb3JrZWRSZXF1ZXN0KHN0YXRlKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgdGhpcy5lbnRyeSA9IG51bGw7XG4gIHRoaXMuZmluaXNoID0gZnVuY3Rpb24gKGVycikge1xuICAgIHZhciBlbnRyeSA9IF90aGlzLmVudHJ5O1xuICAgIF90aGlzLmVudHJ5ID0gbnVsbDtcbiAgICB3aGlsZSAoZW50cnkpIHtcbiAgICAgIHZhciBjYiA9IGVudHJ5LmNhbGxiYWNrO1xuICAgICAgc3RhdGUucGVuZGluZ2NiLS07XG4gICAgICBjYihlcnIpO1xuICAgICAgZW50cnkgPSBlbnRyeS5uZXh0O1xuICAgIH1cbiAgICBpZiAoc3RhdGUuY29ya2VkUmVxdWVzdHNGcmVlKSB7XG4gICAgICBzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWUubmV4dCA9IF90aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWUgPSBfdGhpcztcbiAgICB9XG4gIH07XG59XG59KS5jYWxsKHRoaXMscmVxdWlyZSgnX3Byb2Nlc3MnKSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTl5WldGa1lXSnNaUzF6ZEhKbFlXMHZiR2xpTDE5emRISmxZVzFmZDNKcGRHRmliR1V1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0QlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFaUxDSm1hV3hsSWpvaVoyVnVaWEpoZEdWa0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTh2SUVFZ1ltbDBJSE5wYlhCc1pYSWdkR2hoYmlCeVpXRmtZV0pzWlNCemRISmxZVzF6TGx4dUx5OGdTVzF3YkdWdFpXNTBJR0Z1SUdGemVXNWpJQzVmZDNKcGRHVW9ZMmgxYm1zc0lHVnVZMjlrYVc1bkxDQmpZaWtzSUdGdVpDQnBkQ2RzYkNCb1lXNWtiR1VnWVd4c1hHNHZMeUIwYUdVZ1pISmhhVzRnWlhabGJuUWdaVzFwYzNOcGIyNGdZVzVrSUdKMVptWmxjbWx1Wnk1Y2JseHVKM1Z6WlNCemRISnBZM1FuTzF4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlGZHlhWFJoWW14bE8xeHVYRzR2S2p4eVpYQnNZV05sYldWdWRENHFMMXh1ZG1GeUlIQnliMk5sYzNOT1pYaDBWR2xqYXlBOUlISmxjWFZwY21Vb0ozQnliMk5sYzNNdGJtVjRkR2xqYXkxaGNtZHpKeWs3WEc0dktqd3ZjbVZ3YkdGalpXMWxiblErS2k5Y2JseHVMeW84Y21Wd2JHRmpaVzFsYm5RK0tpOWNiblpoY2lCaGMzbHVZMWR5YVhSbElEMGdJWEJ5YjJObGMzTXVZbkp2ZDNObGNpQW1KaUJiSjNZd0xqRXdKeXdnSjNZd0xqa3VKMTB1YVc1a1pYaFBaaWh3Y205alpYTnpMblpsY25OcGIyNHVjMnhwWTJVb01Dd2dOU2twSUQ0Z0xURWdQeUJ6WlhSSmJXMWxaR2xoZEdVZ09pQndjbTlqWlhOelRtVjRkRlJwWTJzN1hHNHZLand2Y21Wd2JHRmpaVzFsYm5RK0tpOWNibHh1THlvOGNtVndiR0ZqWlcxbGJuUStLaTljYm5aaGNpQkVkWEJzWlhnN1hHNHZLand2Y21Wd2JHRmpaVzFsYm5RK0tpOWNibHh1VjNKcGRHRmliR1V1VjNKcGRHRmliR1ZUZEdGMFpTQTlJRmR5YVhSaFlteGxVM1JoZEdVN1hHNWNiaThxUEhKbGNHeGhZMlZ0Wlc1MFBpb3ZYRzUyWVhJZ2RYUnBiQ0E5SUhKbGNYVnBjbVVvSjJOdmNtVXRkWFJwYkMxcGN5Y3BPMXh1ZFhScGJDNXBibWhsY21sMGN5QTlJSEpsY1hWcGNtVW9KMmx1YUdWeWFYUnpKeWs3WEc0dktqd3ZjbVZ3YkdGalpXMWxiblErS2k5Y2JseHVMeW84Y21Wd2JHRmpaVzFsYm5RK0tpOWNiblpoY2lCcGJuUmxjbTVoYkZWMGFXd2dQU0I3WEc0Z0lHUmxjSEpsWTJGMFpUb2djbVZ4ZFdseVpTZ25kWFJwYkMxa1pYQnlaV05oZEdVbktWeHVmVHRjYmk4cVBDOXlaWEJzWVdObGJXVnVkRDRxTDF4dVhHNHZLanh5WlhCc1lXTmxiV1Z1ZEQ0cUwxeHVkbUZ5SUZOMGNtVmhiVHRjYmlobWRXNWpkR2x2YmlBb0tTQjdYRzRnSUhSeWVTQjdYRzRnSUNBZ1UzUnlaV0Z0SUQwZ2NtVnhkV2x5WlNnbmMzUW5JQ3NnSjNKbFlXMG5LVHRjYmlBZ2ZTQmpZWFJqYUNBb1h5a2dlMzBnWm1sdVlXeHNlU0I3WEc0Z0lDQWdhV1lnS0NGVGRISmxZVzBwSUZOMGNtVmhiU0E5SUhKbGNYVnBjbVVvSjJWMlpXNTBjeWNwTGtWMlpXNTBSVzFwZEhSbGNqdGNiaUFnZlZ4dWZTa29LVHRjYmk4cVBDOXlaWEJzWVdObGJXVnVkRDRxTDF4dVhHNTJZWElnUW5WbVptVnlJRDBnY21WeGRXbHlaU2duWW5WbVptVnlKeWt1UW5WbVptVnlPMXh1THlvOGNtVndiR0ZqWlcxbGJuUStLaTljYm5aaGNpQmlkV1ptWlhKVGFHbHRJRDBnY21WeGRXbHlaU2duWW5WbVptVnlMWE5vYVcxekp5azdYRzR2S2p3dmNtVndiR0ZqWlcxbGJuUStLaTljYmx4dWRYUnBiQzVwYm1obGNtbDBjeWhYY21sMFlXSnNaU3dnVTNSeVpXRnRLVHRjYmx4dVpuVnVZM1JwYjI0Z2JtOXdLQ2tnZTMxY2JseHVablZ1WTNScGIyNGdWM0pwZEdWU1pYRW9ZMmgxYm1zc0lHVnVZMjlrYVc1bkxDQmpZaWtnZTF4dUlDQjBhR2x6TG1Ob2RXNXJJRDBnWTJoMWJtczdYRzRnSUhSb2FYTXVaVzVqYjJScGJtY2dQU0JsYm1OdlpHbHVaenRjYmlBZ2RHaHBjeTVqWVd4c1ltRmpheUE5SUdOaU8xeHVJQ0IwYUdsekxtNWxlSFFnUFNCdWRXeHNPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQlhjbWwwWVdKc1pWTjBZWFJsS0c5d2RHbHZibk1zSUhOMGNtVmhiU2tnZTF4dUlDQkVkWEJzWlhnZ1BTQkVkWEJzWlhnZ2ZId2djbVZ4ZFdseVpTZ25MaTlmYzNSeVpXRnRYMlIxY0d4bGVDY3BPMXh1WEc0Z0lHOXdkR2x2Ym5NZ1BTQnZjSFJwYjI1eklIeDhJSHQ5TzF4dVhHNGdJQzh2SUc5aWFtVmpkQ0J6ZEhKbFlXMGdabXhoWnlCMGJ5QnBibVJwWTJGMFpTQjNhR1YwYUdWeUlHOXlJRzV2ZENCMGFHbHpJSE4wY21WaGJWeHVJQ0F2THlCamIyNTBZV2x1Y3lCaWRXWm1aWEp6SUc5eUlHOWlhbVZqZEhNdVhHNGdJSFJvYVhNdWIySnFaV04wVFc5a1pTQTlJQ0VoYjNCMGFXOXVjeTV2WW1wbFkzUk5iMlJsTzF4dVhHNGdJR2xtSUNoemRISmxZVzBnYVc1emRHRnVZMlZ2WmlCRWRYQnNaWGdwSUhSb2FYTXViMkpxWldOMFRXOWtaU0E5SUhSb2FYTXViMkpxWldOMFRXOWtaU0I4ZkNBaElXOXdkR2x2Ym5NdWQzSnBkR0ZpYkdWUFltcGxZM1JOYjJSbE8xeHVYRzRnSUM4dklIUm9aU0J3YjJsdWRDQmhkQ0IzYUdsamFDQjNjbWwwWlNncElITjBZWEowY3lCeVpYUjFjbTVwYm1jZ1ptRnNjMlZjYmlBZ0x5OGdUbTkwWlRvZ01DQnBjeUJoSUhaaGJHbGtJSFpoYkhWbExDQnRaV0Z1Y3lCMGFHRjBJSGRsSUdGc2QyRjVjeUJ5WlhSMWNtNGdabUZzYzJVZ2FXWmNiaUFnTHk4Z2RHaGxJR1Z1ZEdseVpTQmlkV1ptWlhJZ2FYTWdibTkwSUdac2RYTm9aV1FnYVcxdFpXUnBZWFJsYkhrZ2IyNGdkM0pwZEdVb0tWeHVJQ0IyWVhJZ2FIZHRJRDBnYjNCMGFXOXVjeTVvYVdkb1YyRjBaWEpOWVhKck8xeHVJQ0IyWVhJZ1pHVm1ZWFZzZEVoM2JTQTlJSFJvYVhNdWIySnFaV04wVFc5a1pTQS9JREUySURvZ01UWWdLaUF4TURJME8xeHVJQ0IwYUdsekxtaHBaMmhYWVhSbGNrMWhjbXNnUFNCb2QyMGdmSHdnYUhkdElEMDlQU0F3SUQ4Z2FIZHRJRG9nWkdWbVlYVnNkRWgzYlR0Y2JseHVJQ0F2THlCallYTjBJSFJ2SUdsdWRITXVYRzRnSUhSb2FYTXVhR2xuYUZkaGRHVnlUV0Z5YXlBOUlINStkR2hwY3k1b2FXZG9WMkYwWlhKTllYSnJPMXh1WEc0Z0lDOHZJR1J5WVdsdUlHVjJaVzUwSUdac1lXY3VYRzRnSUhSb2FYTXVibVZsWkVSeVlXbHVJRDBnWm1Gc2MyVTdYRzRnSUM4dklHRjBJSFJvWlNCemRHRnlkQ0J2WmlCallXeHNhVzVuSUdWdVpDZ3BYRzRnSUhSb2FYTXVaVzVrYVc1bklEMGdabUZzYzJVN1hHNGdJQzh2SUhkb1pXNGdaVzVrS0NrZ2FHRnpJR0psWlc0Z1kyRnNiR1ZrTENCaGJtUWdjbVYwZFhKdVpXUmNiaUFnZEdocGN5NWxibVJsWkNBOUlHWmhiSE5sTzF4dUlDQXZMeUIzYUdWdUlDZG1hVzVwYzJnbklHbHpJR1Z0YVhSMFpXUmNiaUFnZEdocGN5NW1hVzVwYzJobFpDQTlJR1poYkhObE8xeHVYRzRnSUM4dklITm9iM1ZzWkNCM1pTQmtaV052WkdVZ2MzUnlhVzVuY3lCcGJuUnZJR0oxWm1abGNuTWdZbVZtYjNKbElIQmhjM05wYm1jZ2RHOGdYM2R5YVhSbFAxeHVJQ0F2THlCMGFHbHpJR2x6SUdobGNtVWdjMjhnZEdoaGRDQnpiMjFsSUc1dlpHVXRZMjl5WlNCemRISmxZVzF6SUdOaGJpQnZjSFJwYldsNlpTQnpkSEpwYm1kY2JpQWdMeThnYUdGdVpHeHBibWNnWVhRZ1lTQnNiM2RsY2lCc1pYWmxiQzVjYmlBZ2RtRnlJRzV2UkdWamIyUmxJRDBnYjNCMGFXOXVjeTVrWldOdlpHVlRkSEpwYm1keklEMDlQU0JtWVd4elpUdGNiaUFnZEdocGN5NWtaV052WkdWVGRISnBibWR6SUQwZ0lXNXZSR1ZqYjJSbE8xeHVYRzRnSUM4dklFTnllWEIwYnlCcGN5QnJhVzVrSUc5bUlHOXNaQ0JoYm1RZ1kzSjFjM1I1TGlBZ1NHbHpkRzl5YVdOaGJHeDVMQ0JwZEhNZ1pHVm1ZWFZzZENCemRISnBibWRjYmlBZ0x5OGdaVzVqYjJScGJtY2dhWE1nSjJKcGJtRnllU2NnYzI4Z2QyVWdhR0YyWlNCMGJ5QnRZV3RsSUhSb2FYTWdZMjl1Wm1sbmRYSmhZbXhsTGx4dUlDQXZMeUJGZG1WeWVYUm9hVzVuSUdWc2MyVWdhVzRnZEdobElIVnVhWFpsY25ObElIVnpaWE1nSjNWMFpqZ25MQ0IwYUc5MVoyZ3VYRzRnSUhSb2FYTXVaR1ZtWVhWc2RFVnVZMjlrYVc1bklEMGdiM0IwYVc5dWN5NWtaV1poZFd4MFJXNWpiMlJwYm1jZ2ZId2dKM1YwWmpnbk8xeHVYRzRnSUM4dklHNXZkQ0JoYmlCaFkzUjFZV3dnWW5WbVptVnlJSGRsSUd0bFpYQWdkSEpoWTJzZ2IyWXNJR0oxZENCaElHMWxZWE4xY21WdFpXNTBYRzRnSUM4dklHOW1JR2h2ZHlCdGRXTm9JSGRsSjNKbElIZGhhWFJwYm1jZ2RHOGdaMlYwSUhCMWMyaGxaQ0IwYnlCemIyMWxJSFZ1WkdWeWJIbHBibWRjYmlBZ0x5OGdjMjlqYTJWMElHOXlJR1pwYkdVdVhHNGdJSFJvYVhNdWJHVnVaM1JvSUQwZ01EdGNibHh1SUNBdkx5QmhJR1pzWVdjZ2RHOGdjMlZsSUhkb1pXNGdkMlVuY21VZ2FXNGdkR2hsSUcxcFpHUnNaU0J2WmlCaElIZHlhWFJsTGx4dUlDQjBhR2x6TG5keWFYUnBibWNnUFNCbVlXeHpaVHRjYmx4dUlDQXZMeUIzYUdWdUlIUnlkV1VnWVd4c0lIZHlhWFJsY3lCM2FXeHNJR0psSUdKMVptWmxjbVZrSUhWdWRHbHNJQzUxYm1OdmNtc29LU0JqWVd4c1hHNGdJSFJvYVhNdVkyOXlhMlZrSUQwZ01EdGNibHh1SUNBdkx5QmhJR1pzWVdjZ2RHOGdZbVVnWVdKc1pTQjBieUIwWld4c0lHbG1JSFJvWlNCdmJuZHlhWFJsSUdOaUlHbHpJR05oYkd4bFpDQnBiVzFsWkdsaGRHVnNlU3hjYmlBZ0x5OGdiM0lnYjI0Z1lTQnNZWFJsY2lCMGFXTnJMaUFnVjJVZ2MyVjBJSFJvYVhNZ2RHOGdkSEoxWlNCaGRDQm1hWEp6ZEN3Z1ltVmpZWFZ6WlNCaGJubGNiaUFnTHk4Z1lXTjBhVzl1Y3lCMGFHRjBJSE5vYjNWc1pHNG5kQ0JvWVhCd1pXNGdkVzUwYVd3Z1hDSnNZWFJsY2x3aUlITm9iM1ZzWkNCblpXNWxjbUZzYkhrZ1lXeHpiMXh1SUNBdkx5QnViM1FnYUdGd2NHVnVJR0psWm05eVpTQjBhR1VnWm1seWMzUWdkM0pwZEdVZ1kyRnNiQzVjYmlBZ2RHaHBjeTV6ZVc1aklEMGdkSEoxWlR0Y2JseHVJQ0F2THlCaElHWnNZV2NnZEc4Z2EyNXZkeUJwWmlCM1pTZHlaU0J3Y205alpYTnphVzVuSUhCeVpYWnBiM1Z6YkhrZ1luVm1abVZ5WldRZ2FYUmxiWE1zSUhkb2FXTm9YRzRnSUM4dklHMWhlU0JqWVd4c0lIUm9aU0JmZDNKcGRHVW9LU0JqWVd4c1ltRmpheUJwYmlCMGFHVWdjMkZ0WlNCMGFXTnJMQ0J6YnlCMGFHRjBJSGRsSUdSdmJpZDBYRzRnSUM4dklHVnVaQ0IxY0NCcGJpQmhiaUJ2ZG1WeWJHRndjR1ZrSUc5dWQzSnBkR1VnYzJsMGRXRjBhVzl1TGx4dUlDQjBhR2x6TG1KMVptWmxjbEJ5YjJObGMzTnBibWNnUFNCbVlXeHpaVHRjYmx4dUlDQXZMeUIwYUdVZ1kyRnNiR0poWTJzZ2RHaGhkQ2R6SUhCaGMzTmxaQ0IwYnlCZmQzSnBkR1VvWTJoMWJtc3NZMklwWEc0Z0lIUm9hWE11YjI1M2NtbDBaU0E5SUdaMWJtTjBhVzl1SUNobGNpa2dlMXh1SUNBZ0lHOXVkM0pwZEdVb2MzUnlaV0Z0TENCbGNpazdYRzRnSUgwN1hHNWNiaUFnTHk4Z2RHaGxJR05oYkd4aVlXTnJJSFJvWVhRZ2RHaGxJSFZ6WlhJZ2MzVndjR3hwWlhNZ2RHOGdkM0pwZEdVb1kyaDFibXNzWlc1amIyUnBibWNzWTJJcFhHNGdJSFJvYVhNdWQzSnBkR1ZqWWlBOUlHNTFiR3c3WEc1Y2JpQWdMeThnZEdobElHRnRiM1Z1ZENCMGFHRjBJR2x6SUdKbGFXNW5JSGR5YVhSMFpXNGdkMmhsYmlCZmQzSnBkR1VnYVhNZ1kyRnNiR1ZrTGx4dUlDQjBhR2x6TG5keWFYUmxiR1Z1SUQwZ01EdGNibHh1SUNCMGFHbHpMbUoxWm1abGNtVmtVbVZ4ZFdWemRDQTlJRzUxYkd3N1hHNGdJSFJvYVhNdWJHRnpkRUoxWm1abGNtVmtVbVZ4ZFdWemRDQTlJRzUxYkd3N1hHNWNiaUFnTHk4Z2JuVnRZbVZ5SUc5bUlIQmxibVJwYm1jZ2RYTmxjaTF6ZFhCd2JHbGxaQ0IzY21sMFpTQmpZV3hzWW1GamEzTmNiaUFnTHk4Z2RHaHBjeUJ0ZFhOMElHSmxJREFnWW1WbWIzSmxJQ2RtYVc1cGMyZ25JR05oYmlCaVpTQmxiV2wwZEdWa1hHNGdJSFJvYVhNdWNHVnVaR2x1WjJOaUlEMGdNRHRjYmx4dUlDQXZMeUJsYldsMElIQnlaV1pwYm1semFDQnBaaUIwYUdVZ2IyNXNlU0IwYUdsdVp5QjNaU2R5WlNCM1lXbDBhVzVuSUdadmNpQnBjeUJmZDNKcGRHVWdZMkp6WEc0Z0lDOHZJRlJvYVhNZ2FYTWdjbVZzWlhaaGJuUWdabTl5SUhONWJtTm9jbTl1YjNWeklGUnlZVzV6Wm05eWJTQnpkSEpsWVcxelhHNGdJSFJvYVhNdWNISmxabWx1YVhOb1pXUWdQU0JtWVd4elpUdGNibHh1SUNBdkx5QlVjblZsSUdsbUlIUm9aU0JsY25KdmNpQjNZWE1nWVd4eVpXRmtlU0JsYldsMGRHVmtJR0Z1WkNCemFHOTFiR1FnYm05MElHSmxJSFJvY205M2JpQmhaMkZwYmx4dUlDQjBhR2x6TG1WeWNtOXlSVzFwZEhSbFpDQTlJR1poYkhObE8xeHVYRzRnSUM4dklHTnZkVzUwSUdKMVptWmxjbVZrSUhKbGNYVmxjM1J6WEc0Z0lIUm9hWE11WW5WbVptVnlaV1JTWlhGMVpYTjBRMjkxYm5RZ1BTQXdPMXh1WEc0Z0lDOHZJR0ZzYkc5allYUmxJSFJvWlNCbWFYSnpkQ0JEYjNKclpXUlNaWEYxWlhOMExDQjBhR1Z5WlNCcGN5QmhiSGRoZVhOY2JpQWdMeThnYjI1bElHRnNiRzlqWVhSbFpDQmhibVFnWm5KbFpTQjBieUIxYzJVc0lHRnVaQ0IzWlNCdFlXbHVkR0ZwYmlCaGRDQnRiM04wSUhSM2IxeHVJQ0IwYUdsekxtTnZjbXRsWkZKbGNYVmxjM1J6Um5KbFpTQTlJRzVsZHlCRGIzSnJaV1JTWlhGMVpYTjBLSFJvYVhNcE8xeHVmVnh1WEc1WGNtbDBZV0pzWlZOMFlYUmxMbkJ5YjNSdmRIbHdaUzVuWlhSQ2RXWm1aWElnUFNCbWRXNWpkR2x2YmlCblpYUkNkV1ptWlhJb0tTQjdYRzRnSUhaaGNpQmpkWEp5Wlc1MElEMGdkR2hwY3k1aWRXWm1aWEpsWkZKbGNYVmxjM1E3WEc0Z0lIWmhjaUJ2ZFhRZ1BTQmJYVHRjYmlBZ2QyaHBiR1VnS0dOMWNuSmxiblFwSUh0Y2JpQWdJQ0J2ZFhRdWNIVnphQ2hqZFhKeVpXNTBLVHRjYmlBZ0lDQmpkWEp5Wlc1MElEMGdZM1Z5Y21WdWRDNXVaWGgwTzF4dUlDQjlYRzRnSUhKbGRIVnliaUJ2ZFhRN1hHNTlPMXh1WEc0b1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCMGNua2dlMXh1SUNBZ0lFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hYY21sMFlXSnNaVk4wWVhSbExuQnliM1J2ZEhsd1pTd2dKMkoxWm1abGNpY3NJSHRjYmlBZ0lDQWdJR2RsZERvZ2FXNTBaWEp1WVd4VmRHbHNMbVJsY0hKbFkyRjBaU2htZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbWRsZEVKMVptWmxjaWdwTzF4dUlDQWdJQ0FnZlN3Z0oxOTNjbWwwWVdKc1pWTjBZWFJsTG1KMVptWmxjaUJwY3lCa1pYQnlaV05oZEdWa0xpQlZjMlVnWDNkeWFYUmhZbXhsVTNSaGRHVXVaMlYwUW5WbVptVnlJQ2NnS3lBbmFXNXpkR1ZoWkM0bktWeHVJQ0FnSUgwcE8xeHVJQ0I5SUdOaGRHTm9JQ2hmS1NCN2ZWeHVmU2tvS1R0Y2JseHVMeThnVkdWemRDQmZkM0pwZEdGaWJHVlRkR0YwWlNCbWIzSWdhVzVvWlhKcGRHRnVZMlVnZEc4Z1lXTmpiM1Z1ZENCbWIzSWdSSFZ3YkdWNElITjBjbVZoYlhNc1hHNHZMeUIzYUc5elpTQndjbTkwYjNSNWNHVWdZMmhoYVc0Z2IyNXNlU0J3YjJsdWRITWdkRzhnVW1WaFpHRmliR1V1WEc1MllYSWdjbVZoYkVoaGMwbHVjM1JoYm1ObE8xeHVhV1lnS0hSNWNHVnZaaUJUZVcxaWIyd2dQVDA5SUNkbWRXNWpkR2x2YmljZ0ppWWdVM2x0WW05c0xtaGhjMGx1YzNSaGJtTmxJQ1ltSUhSNWNHVnZaaUJHZFc1amRHbHZiaTV3Y205MGIzUjVjR1ZiVTNsdFltOXNMbWhoYzBsdWMzUmhibU5sWFNBOVBUMGdKMloxYm1OMGFXOXVKeWtnZTF4dUlDQnlaV0ZzU0dGelNXNXpkR0Z1WTJVZ1BTQkdkVzVqZEdsdmJpNXdjbTkwYjNSNWNHVmJVM2x0WW05c0xtaGhjMGx1YzNSaGJtTmxYVHRjYmlBZ1QySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLRmR5YVhSaFlteGxMQ0JUZVcxaWIyd3VhR0Z6U1c1emRHRnVZMlVzSUh0Y2JpQWdJQ0IyWVd4MVpUb2dablZ1WTNScGIyNGdLRzlpYW1WamRDa2dlMXh1SUNBZ0lDQWdhV1lnS0hKbFlXeElZWE5KYm5OMFlXNWpaUzVqWVd4c0tIUm9hWE1zSUc5aWFtVmpkQ2twSUhKbGRIVnliaUIwY25WbE8xeHVYRzRnSUNBZ0lDQnlaWFIxY200Z2IySnFaV04wSUNZbUlHOWlhbVZqZEM1ZmQzSnBkR0ZpYkdWVGRHRjBaU0JwYm5OMFlXNWpaVzltSUZkeWFYUmhZbXhsVTNSaGRHVTdYRzRnSUNBZ2ZWeHVJQ0I5S1R0Y2JuMGdaV3h6WlNCN1hHNGdJSEpsWVd4SVlYTkpibk4wWVc1alpTQTlJR1oxYm1OMGFXOXVJQ2h2WW1wbFkzUXBJSHRjYmlBZ0lDQnlaWFIxY200Z2IySnFaV04wSUdsdWMzUmhibU5sYjJZZ2RHaHBjenRjYmlBZ2ZUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z1YzSnBkR0ZpYkdVb2IzQjBhVzl1Y3lrZ2UxeHVJQ0JFZFhCc1pYZ2dQU0JFZFhCc1pYZ2dmSHdnY21WeGRXbHlaU2duTGk5ZmMzUnlaV0Z0WDJSMWNHeGxlQ2NwTzF4dVhHNGdJQzh2SUZkeWFYUmhZbXhsSUdOMGIzSWdhWE1nWVhCd2JHbGxaQ0IwYnlCRWRYQnNaWGhsY3l3Z2RHOXZMbHh1SUNBdkx5QmdjbVZoYkVoaGMwbHVjM1JoYm1ObFlDQnBjeUJ1WldObGMzTmhjbmtnWW1WallYVnpaU0IxYzJsdVp5QndiR0ZwYmlCZ2FXNXpkR0Z1WTJWdlptQmNiaUFnTHk4Z2QyOTFiR1FnY21WMGRYSnVJR1poYkhObExDQmhjeUJ1YnlCZ1gzZHlhWFJoWW14bFUzUmhkR1ZnSUhCeWIzQmxjblI1SUdseklHRjBkR0ZqYUdWa0xseHVYRzRnSUM4dklGUnllV2x1WnlCMGJ5QjFjMlVnZEdobElHTjFjM1J2YlNCZ2FXNXpkR0Z1WTJWdlptQWdabTl5SUZkeWFYUmhZbXhsSUdobGNtVWdkMmxzYkNCaGJITnZJR0p5WldGcklIUm9aVnh1SUNBdkx5Qk9iMlJsTG1weklFeGhlbmxVY21GdWMyWnZjbTBnYVcxd2JHVnRaVzUwWVhScGIyNHNJSGRvYVdOb0lHaGhjeUJoSUc1dmJpMTBjbWwyYVdGc0lHZGxkSFJsY2lCbWIzSmNiaUFnTHk4Z1lGOTNjbWwwWVdKc1pWTjBZWFJsWUNCMGFHRjBJSGR2ZFd4a0lHeGxZV1FnZEc4Z2FXNW1hVzVwZEdVZ2NtVmpkWEp6YVc5dUxseHVJQ0JwWmlBb0lYSmxZV3hJWVhOSmJuTjBZVzVqWlM1allXeHNLRmR5YVhSaFlteGxMQ0IwYUdsektTQW1KaUFoS0hSb2FYTWdhVzV6ZEdGdVkyVnZaaUJFZFhCc1pYZ3BLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHNWxkeUJYY21sMFlXSnNaU2h2Y0hScGIyNXpLVHRjYmlBZ2ZWeHVYRzRnSUhSb2FYTXVYM2R5YVhSaFlteGxVM1JoZEdVZ1BTQnVaWGNnVjNKcGRHRmliR1ZUZEdGMFpTaHZjSFJwYjI1ekxDQjBhR2x6S1R0Y2JseHVJQ0F2THlCc1pXZGhZM2t1WEc0Z0lIUm9hWE11ZDNKcGRHRmliR1VnUFNCMGNuVmxPMXh1WEc0Z0lHbG1JQ2h2Y0hScGIyNXpLU0I3WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJ2Y0hScGIyNXpMbmR5YVhSbElEMDlQU0FuWm5WdVkzUnBiMjRuS1NCMGFHbHpMbDkzY21sMFpTQTlJRzl3ZEdsdmJuTXVkM0pwZEdVN1hHNWNiaUFnSUNCcFppQW9kSGx3Wlc5bUlHOXdkR2x2Ym5NdWQzSnBkR1YySUQwOVBTQW5ablZ1WTNScGIyNG5LU0IwYUdsekxsOTNjbWwwWlhZZ1BTQnZjSFJwYjI1ekxuZHlhWFJsZGp0Y2JpQWdmVnh1WEc0Z0lGTjBjbVZoYlM1allXeHNLSFJvYVhNcE8xeHVmVnh1WEc0dkx5QlBkR2hsY25kcGMyVWdjR1Z2Y0d4bElHTmhiaUJ3YVhCbElGZHlhWFJoWW14bElITjBjbVZoYlhNc0lIZG9hV05vSUdseklHcDFjM1FnZDNKdmJtY3VYRzVYY21sMFlXSnNaUzV3Y205MGIzUjVjR1V1Y0dsd1pTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdkR2hwY3k1bGJXbDBLQ2RsY25KdmNpY3NJRzVsZHlCRmNuSnZjaWduUTJGdWJtOTBJSEJwY0dVc0lHNXZkQ0J5WldGa1lXSnNaU2NwS1R0Y2JuMDdYRzVjYm1aMWJtTjBhVzl1SUhkeWFYUmxRV1owWlhKRmJtUW9jM1J5WldGdExDQmpZaWtnZTF4dUlDQjJZWElnWlhJZ1BTQnVaWGNnUlhKeWIzSW9KM2R5YVhSbElHRm1kR1Z5SUdWdVpDY3BPMXh1SUNBdkx5QlVUMFJQT2lCa1pXWmxjaUJsY25KdmNpQmxkbVZ1ZEhNZ1kyOXVjMmx6ZEdWdWRHeDVJR1YyWlhKNWQyaGxjbVVzSUc1dmRDQnFkWE4wSUhSb1pTQmpZbHh1SUNCemRISmxZVzB1WlcxcGRDZ25aWEp5YjNJbkxDQmxjaWs3WEc0Z0lIQnliMk5sYzNOT1pYaDBWR2xqYXloallpd2daWElwTzF4dWZWeHVYRzR2THlCRGFHVmphM01nZEdoaGRDQmhJSFZ6WlhJdGMzVndjR3hwWldRZ1kyaDFibXNnYVhNZ2RtRnNhV1FzSUdWemNHVmphV0ZzYkhrZ1ptOXlJSFJvWlNCd1lYSjBhV04xYkdGeVhHNHZMeUJ0YjJSbElIUm9aU0J6ZEhKbFlXMGdhWE1nYVc0dUlFTjFjbkpsYm5Sc2VTQjBhR2x6SUcxbFlXNXpJSFJvWVhRZ1lHNTFiR3hnSUdseklHNWxkbVZ5SUdGalkyVndkR1ZrWEc0dkx5QmhibVFnZFc1a1pXWnBibVZrTDI1dmJpMXpkSEpwYm1jZ2RtRnNkV1Z6SUdGeVpTQnZibXg1SUdGc2JHOTNaV1FnYVc0Z2IySnFaV04wSUcxdlpHVXVYRzVtZFc1amRHbHZiaUIyWVd4cFpFTm9kVzVyS0hOMGNtVmhiU3dnYzNSaGRHVXNJR05vZFc1ckxDQmpZaWtnZTF4dUlDQjJZWElnZG1Gc2FXUWdQU0IwY25WbE8xeHVJQ0IyWVhJZ1pYSWdQU0JtWVd4elpUdGNibHh1SUNCcFppQW9ZMmgxYm1zZ1BUMDlJRzUxYkd3cElIdGNiaUFnSUNCbGNpQTlJRzVsZHlCVWVYQmxSWEp5YjNJb0owMWhlU0J1YjNRZ2QzSnBkR1VnYm5Wc2JDQjJZV3gxWlhNZ2RHOGdjM1J5WldGdEp5azdYRzRnSUgwZ1pXeHpaU0JwWmlBb2RIbHdaVzltSUdOb2RXNXJJQ0U5UFNBbmMzUnlhVzVuSnlBbUppQmphSFZ1YXlBaFBUMGdkVzVrWldacGJtVmtJQ1ltSUNGemRHRjBaUzV2WW1wbFkzUk5iMlJsS1NCN1hHNGdJQ0FnWlhJZ1BTQnVaWGNnVkhsd1pVVnljbTl5S0NkSmJuWmhiR2xrSUc1dmJpMXpkSEpwYm1jdlluVm1abVZ5SUdOb2RXNXJKeWs3WEc0Z0lIMWNiaUFnYVdZZ0tHVnlLU0I3WEc0Z0lDQWdjM1J5WldGdExtVnRhWFFvSjJWeWNtOXlKeXdnWlhJcE8xeHVJQ0FnSUhCeWIyTmxjM05PWlhoMFZHbGpheWhqWWl3Z1pYSXBPMXh1SUNBZ0lIWmhiR2xrSUQwZ1ptRnNjMlU3WEc0Z0lIMWNiaUFnY21WMGRYSnVJSFpoYkdsa08xeHVmVnh1WEc1WGNtbDBZV0pzWlM1d2NtOTBiM1I1Y0dVdWQzSnBkR1VnUFNCbWRXNWpkR2x2YmlBb1kyaDFibXNzSUdWdVkyOWthVzVuTENCallpa2dlMXh1SUNCMllYSWdjM1JoZEdVZ1BTQjBhR2x6TGw5M2NtbDBZV0pzWlZOMFlYUmxPMXh1SUNCMllYSWdjbVYwSUQwZ1ptRnNjMlU3WEc0Z0lIWmhjaUJwYzBKMVppQTlJRUoxWm1abGNpNXBjMEoxWm1abGNpaGphSFZ1YXlrN1hHNWNiaUFnYVdZZ0tIUjVjR1Z2WmlCbGJtTnZaR2x1WnlBOVBUMGdKMloxYm1OMGFXOXVKeWtnZTF4dUlDQWdJR05pSUQwZ1pXNWpiMlJwYm1jN1hHNGdJQ0FnWlc1amIyUnBibWNnUFNCdWRXeHNPMXh1SUNCOVhHNWNiaUFnYVdZZ0tHbHpRblZtS1NCbGJtTnZaR2x1WnlBOUlDZGlkV1ptWlhJbk8yVnNjMlVnYVdZZ0tDRmxibU52WkdsdVp5a2daVzVqYjJScGJtY2dQU0J6ZEdGMFpTNWtaV1poZFd4MFJXNWpiMlJwYm1jN1hHNWNiaUFnYVdZZ0tIUjVjR1Z2WmlCallpQWhQVDBnSjJaMWJtTjBhVzl1SnlrZ1kySWdQU0J1YjNBN1hHNWNiaUFnYVdZZ0tITjBZWFJsTG1WdVpHVmtLU0IzY21sMFpVRm1kR1Z5Ulc1a0tIUm9hWE1zSUdOaUtUdGxiSE5sSUdsbUlDaHBjMEoxWmlCOGZDQjJZV3hwWkVOb2RXNXJLSFJvYVhNc0lITjBZWFJsTENCamFIVnVheXdnWTJJcEtTQjdYRzRnSUNBZ2MzUmhkR1V1Y0dWdVpHbHVaMk5pS3lzN1hHNGdJQ0FnY21WMElEMGdkM0pwZEdWUGNrSjFabVpsY2loMGFHbHpMQ0J6ZEdGMFpTd2dhWE5DZFdZc0lHTm9kVzVyTENCbGJtTnZaR2x1Wnl3Z1kySXBPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSEpsZER0Y2JuMDdYRzVjYmxkeWFYUmhZbXhsTG5CeWIzUnZkSGx3WlM1amIzSnJJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0IyWVhJZ2MzUmhkR1VnUFNCMGFHbHpMbDkzY21sMFlXSnNaVk4wWVhSbE8xeHVYRzRnSUhOMFlYUmxMbU52Y210bFpDc3JPMXh1ZlR0Y2JseHVWM0pwZEdGaWJHVXVjSEp2ZEc5MGVYQmxMblZ1WTI5eWF5QTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdkbUZ5SUhOMFlYUmxJRDBnZEdocGN5NWZkM0pwZEdGaWJHVlRkR0YwWlR0Y2JseHVJQ0JwWmlBb2MzUmhkR1V1WTI5eWEyVmtLU0I3WEc0Z0lDQWdjM1JoZEdVdVkyOXlhMlZrTFMwN1hHNWNiaUFnSUNCcFppQW9JWE4wWVhSbExuZHlhWFJwYm1jZ0ppWWdJWE4wWVhSbExtTnZjbXRsWkNBbUppQWhjM1JoZEdVdVptbHVhWE5vWldRZ0ppWWdJWE4wWVhSbExtSjFabVpsY2xCeWIyTmxjM05wYm1jZ0ppWWdjM1JoZEdVdVluVm1abVZ5WldSU1pYRjFaWE4wS1NCamJHVmhja0oxWm1abGNpaDBhR2x6TENCemRHRjBaU2s3WEc0Z0lIMWNibjA3WEc1Y2JsZHlhWFJoWW14bExuQnliM1J2ZEhsd1pTNXpaWFJFWldaaGRXeDBSVzVqYjJScGJtY2dQU0JtZFc1amRHbHZiaUJ6WlhSRVpXWmhkV3gwUlc1amIyUnBibWNvWlc1amIyUnBibWNwSUh0Y2JpQWdMeThnYm05a1pUbzZVR0Z5YzJWRmJtTnZaR2x1WnlncElISmxjWFZwY21WeklHeHZkMlZ5SUdOaGMyVXVYRzRnSUdsbUlDaDBlWEJsYjJZZ1pXNWpiMlJwYm1jZ1BUMDlJQ2R6ZEhKcGJtY25LU0JsYm1OdlpHbHVaeUE5SUdWdVkyOWthVzVuTG5SdlRHOTNaWEpEWVhObEtDazdYRzRnSUdsbUlDZ2hLRnNuYUdWNEp5d2dKM1YwWmpnbkxDQW5kWFJtTFRnbkxDQW5ZWE5qYVdrbkxDQW5ZbWx1WVhKNUp5d2dKMkpoYzJVMk5DY3NJQ2QxWTNNeUp5d2dKM1ZqY3kweUp5d2dKM1YwWmpFMmJHVW5MQ0FuZFhSbUxURTJiR1VuTENBbmNtRjNKMTB1YVc1a1pYaFBaaWdvWlc1amIyUnBibWNnS3lBbkp5a3VkRzlNYjNkbGNrTmhjMlVvS1NrZ1BpQXRNU2twSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0oxVnVhMjV2ZDI0Z1pXNWpiMlJwYm1jNklDY2dLeUJsYm1OdlpHbHVaeWs3WEc0Z0lIUm9hWE11WDNkeWFYUmhZbXhsVTNSaGRHVXVaR1ZtWVhWc2RFVnVZMjlrYVc1bklEMGdaVzVqYjJScGJtYzdYRzRnSUhKbGRIVnliaUIwYUdsek8xeHVmVHRjYmx4dVpuVnVZM1JwYjI0Z1pHVmpiMlJsUTJoMWJtc29jM1JoZEdVc0lHTm9kVzVyTENCbGJtTnZaR2x1WnlrZ2UxeHVJQ0JwWmlBb0lYTjBZWFJsTG05aWFtVmpkRTF2WkdVZ0ppWWdjM1JoZEdVdVpHVmpiMlJsVTNSeWFXNW5jeUFoUFQwZ1ptRnNjMlVnSmlZZ2RIbHdaVzltSUdOb2RXNXJJRDA5UFNBbmMzUnlhVzVuSnlrZ2UxeHVJQ0FnSUdOb2RXNXJJRDBnWW5WbVptVnlVMmhwYlM1bWNtOXRLR05vZFc1ckxDQmxibU52WkdsdVp5azdYRzRnSUgxY2JpQWdjbVYwZFhKdUlHTm9kVzVyTzF4dWZWeHVYRzR2THlCcFppQjNaU2R5WlNCaGJISmxZV1I1SUhkeWFYUnBibWNnYzI5dFpYUm9hVzVuTENCMGFHVnVJR3AxYzNRZ2NIVjBJSFJvYVhOY2JpOHZJR2x1SUhSb1pTQnhkV1YxWlN3Z1lXNWtJSGRoYVhRZ2IzVnlJSFIxY200dUlDQlBkR2hsY25kcGMyVXNJR05oYkd3Z1gzZHlhWFJsWEc0dkx5QkpaaUIzWlNCeVpYUjFjbTRnWm1Gc2MyVXNJSFJvWlc0Z2QyVWdibVZsWkNCaElHUnlZV2x1SUdWMlpXNTBMQ0J6YnlCelpYUWdkR2hoZENCbWJHRm5MbHh1Wm5WdVkzUnBiMjRnZDNKcGRHVlBja0oxWm1abGNpaHpkSEpsWVcwc0lITjBZWFJsTENCcGMwSjFaaXdnWTJoMWJtc3NJR1Z1WTI5a2FXNW5MQ0JqWWlrZ2UxeHVJQ0JwWmlBb0lXbHpRblZtS1NCN1hHNGdJQ0FnWTJoMWJtc2dQU0JrWldOdlpHVkRhSFZ1YXloemRHRjBaU3dnWTJoMWJtc3NJR1Z1WTI5a2FXNW5LVHRjYmlBZ0lDQnBaaUFvUW5WbVptVnlMbWx6UW5WbVptVnlLR05vZFc1cktTa2daVzVqYjJScGJtY2dQU0FuWW5WbVptVnlKenRjYmlBZ2ZWeHVJQ0IyWVhJZ2JHVnVJRDBnYzNSaGRHVXViMkpxWldOMFRXOWtaU0EvSURFZ09pQmphSFZ1YXk1c1pXNW5kR2c3WEc1Y2JpQWdjM1JoZEdVdWJHVnVaM1JvSUNzOUlHeGxianRjYmx4dUlDQjJZWElnY21WMElEMGdjM1JoZEdVdWJHVnVaM1JvSUR3Z2MzUmhkR1V1YUdsbmFGZGhkR1Z5VFdGeWF6dGNiaUFnTHk4Z2QyVWdiWFZ6ZENCbGJuTjFjbVVnZEdoaGRDQndjbVYyYVc5MWN5QnVaV1ZrUkhKaGFXNGdkMmxzYkNCdWIzUWdZbVVnY21WelpYUWdkRzhnWm1Gc2MyVXVYRzRnSUdsbUlDZ2hjbVYwS1NCemRHRjBaUzV1WldWa1JISmhhVzRnUFNCMGNuVmxPMXh1WEc0Z0lHbG1JQ2h6ZEdGMFpTNTNjbWwwYVc1bklIeDhJSE4wWVhSbExtTnZjbXRsWkNrZ2UxeHVJQ0FnSUhaaGNpQnNZWE4wSUQwZ2MzUmhkR1V1YkdGemRFSjFabVpsY21Wa1VtVnhkV1Z6ZER0Y2JpQWdJQ0J6ZEdGMFpTNXNZWE4wUW5WbVptVnlaV1JTWlhGMVpYTjBJRDBnYm1WM0lGZHlhWFJsVW1WeEtHTm9kVzVyTENCbGJtTnZaR2x1Wnl3Z1kySXBPMXh1SUNBZ0lHbG1JQ2hzWVhOMEtTQjdYRzRnSUNBZ0lDQnNZWE4wTG01bGVIUWdQU0J6ZEdGMFpTNXNZWE4wUW5WbVptVnlaV1JTWlhGMVpYTjBPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCemRHRjBaUzVpZFdabVpYSmxaRkpsY1hWbGMzUWdQU0J6ZEdGMFpTNXNZWE4wUW5WbVptVnlaV1JTWlhGMVpYTjBPMXh1SUNBZ0lIMWNiaUFnSUNCemRHRjBaUzVpZFdabVpYSmxaRkpsY1hWbGMzUkRiM1Z1ZENBclBTQXhPMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJR1J2VjNKcGRHVW9jM1J5WldGdExDQnpkR0YwWlN3Z1ptRnNjMlVzSUd4bGJpd2dZMmgxYm1zc0lHVnVZMjlrYVc1bkxDQmpZaWs3WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnY21WME8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCa2IxZHlhWFJsS0hOMGNtVmhiU3dnYzNSaGRHVXNJSGR5YVhSbGRpd2diR1Z1TENCamFIVnVheXdnWlc1amIyUnBibWNzSUdOaUtTQjdYRzRnSUhOMFlYUmxMbmR5YVhSbGJHVnVJRDBnYkdWdU8xeHVJQ0J6ZEdGMFpTNTNjbWwwWldOaUlEMGdZMkk3WEc0Z0lITjBZWFJsTG5keWFYUnBibWNnUFNCMGNuVmxPMXh1SUNCemRHRjBaUzV6ZVc1aklEMGdkSEoxWlR0Y2JpQWdhV1lnS0hkeWFYUmxkaWtnYzNSeVpXRnRMbDkzY21sMFpYWW9ZMmgxYm1zc0lITjBZWFJsTG05dWQzSnBkR1VwTzJWc2MyVWdjM1J5WldGdExsOTNjbWwwWlNoamFIVnVheXdnWlc1amIyUnBibWNzSUhOMFlYUmxMbTl1ZDNKcGRHVXBPMXh1SUNCemRHRjBaUzV6ZVc1aklEMGdabUZzYzJVN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUc5dWQzSnBkR1ZGY25KdmNpaHpkSEpsWVcwc0lITjBZWFJsTENCemVXNWpMQ0JsY2l3Z1kySXBJSHRjYmlBZ0xTMXpkR0YwWlM1d1pXNWthVzVuWTJJN1hHNGdJR2xtSUNoemVXNWpLU0J3Y205alpYTnpUbVY0ZEZScFkyc29ZMklzSUdWeUtUdGxiSE5sSUdOaUtHVnlLVHRjYmx4dUlDQnpkSEpsWVcwdVgzZHlhWFJoWW14bFUzUmhkR1V1WlhKeWIzSkZiV2wwZEdWa0lEMGdkSEoxWlR0Y2JpQWdjM1J5WldGdExtVnRhWFFvSjJWeWNtOXlKeXdnWlhJcE8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCdmJuZHlhWFJsVTNSaGRHVlZjR1JoZEdVb2MzUmhkR1VwSUh0Y2JpQWdjM1JoZEdVdWQzSnBkR2x1WnlBOUlHWmhiSE5sTzF4dUlDQnpkR0YwWlM1M2NtbDBaV05pSUQwZ2JuVnNiRHRjYmlBZ2MzUmhkR1V1YkdWdVozUm9JQzA5SUhOMFlYUmxMbmR5YVhSbGJHVnVPMXh1SUNCemRHRjBaUzUzY21sMFpXeGxiaUE5SURBN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUc5dWQzSnBkR1VvYzNSeVpXRnRMQ0JsY2lrZ2UxeHVJQ0IyWVhJZ2MzUmhkR1VnUFNCemRISmxZVzB1WDNkeWFYUmhZbXhsVTNSaGRHVTdYRzRnSUhaaGNpQnplVzVqSUQwZ2MzUmhkR1V1YzNsdVl6dGNiaUFnZG1GeUlHTmlJRDBnYzNSaGRHVXVkM0pwZEdWallqdGNibHh1SUNCdmJuZHlhWFJsVTNSaGRHVlZjR1JoZEdVb2MzUmhkR1VwTzF4dVhHNGdJR2xtSUNobGNpa2diMjUzY21sMFpVVnljbTl5S0hOMGNtVmhiU3dnYzNSaGRHVXNJSE41Ym1Nc0lHVnlMQ0JqWWlrN1pXeHpaU0I3WEc0Z0lDQWdMeThnUTJobFkyc2dhV1lnZDJVbmNtVWdZV04wZFdGc2JIa2djbVZoWkhrZ2RHOGdabWx1YVhOb0xDQmlkWFFnWkc5dUozUWdaVzFwZENCNVpYUmNiaUFnSUNCMllYSWdabWx1YVhOb1pXUWdQU0J1WldWa1JtbHVhWE5vS0hOMFlYUmxLVHRjYmx4dUlDQWdJR2xtSUNnaFptbHVhWE5vWldRZ0ppWWdJWE4wWVhSbExtTnZjbXRsWkNBbUppQWhjM1JoZEdVdVluVm1abVZ5VUhKdlkyVnpjMmx1WnlBbUppQnpkR0YwWlM1aWRXWm1aWEpsWkZKbGNYVmxjM1FwSUh0Y2JpQWdJQ0FnSUdOc1pXRnlRblZtWm1WeUtITjBjbVZoYlN3Z2MzUmhkR1VwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoemVXNWpLU0I3WEc0Z0lDQWdJQ0F2S2p4eVpYQnNZV05sYldWdWRENHFMMXh1SUNBZ0lDQWdZWE41Ym1OWGNtbDBaU2hoWm5SbGNsZHlhWFJsTENCemRISmxZVzBzSUhOMFlYUmxMQ0JtYVc1cGMyaGxaQ3dnWTJJcE8xeHVJQ0FnSUNBZ0x5bzhMM0psY0d4aFkyVnRaVzUwUGlvdlhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR0ZtZEdWeVYzSnBkR1VvYzNSeVpXRnRMQ0J6ZEdGMFpTd2dabWx1YVhOb1pXUXNJR05pS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z1lXWjBaWEpYY21sMFpTaHpkSEpsWVcwc0lITjBZWFJsTENCbWFXNXBjMmhsWkN3Z1kySXBJSHRjYmlBZ2FXWWdLQ0ZtYVc1cGMyaGxaQ2tnYjI1M2NtbDBaVVJ5WVdsdUtITjBjbVZoYlN3Z2MzUmhkR1VwTzF4dUlDQnpkR0YwWlM1d1pXNWthVzVuWTJJdExUdGNiaUFnWTJJb0tUdGNiaUFnWm1sdWFYTm9UV0Y1WW1Vb2MzUnlaV0Z0TENCemRHRjBaU2s3WEc1OVhHNWNiaTh2SUUxMWMzUWdabTl5WTJVZ1kyRnNiR0poWTJzZ2RHOGdZbVVnWTJGc2JHVmtJRzl1SUc1bGVIUlVhV05yTENCemJ5QjBhR0YwSUhkbElHUnZiaWQwWEc0dkx5QmxiV2wwSUNka2NtRnBiaWNnWW1WbWIzSmxJSFJvWlNCM2NtbDBaU2dwSUdOdmJuTjFiV1Z5SUdkbGRITWdkR2hsSUNkbVlXeHpaU2NnY21WMGRYSnVYRzR2THlCMllXeDFaU3dnWVc1a0lHaGhjeUJoSUdOb1lXNWpaU0IwYnlCaGRIUmhZMmdnWVNBblpISmhhVzRuSUd4cGMzUmxibVZ5TGx4dVpuVnVZM1JwYjI0Z2IyNTNjbWwwWlVSeVlXbHVLSE4wY21WaGJTd2djM1JoZEdVcElIdGNiaUFnYVdZZ0tITjBZWFJsTG14bGJtZDBhQ0E5UFQwZ01DQW1KaUJ6ZEdGMFpTNXVaV1ZrUkhKaGFXNHBJSHRjYmlBZ0lDQnpkR0YwWlM1dVpXVmtSSEpoYVc0Z1BTQm1ZV3h6WlR0Y2JpQWdJQ0J6ZEhKbFlXMHVaVzFwZENnblpISmhhVzRuS1R0Y2JpQWdmVnh1ZlZ4dVhHNHZMeUJwWmlCMGFHVnlaU2R6SUhOdmJXVjBhR2x1WnlCcGJpQjBhR1VnWW5WbVptVnlJSGRoYVhScGJtY3NJSFJvWlc0Z2NISnZZMlZ6Y3lCcGRGeHVablZ1WTNScGIyNGdZMnhsWVhKQ2RXWm1aWElvYzNSeVpXRnRMQ0J6ZEdGMFpTa2dlMXh1SUNCemRHRjBaUzVpZFdabVpYSlFjbTlqWlhOemFXNW5JRDBnZEhKMVpUdGNiaUFnZG1GeUlHVnVkSEo1SUQwZ2MzUmhkR1V1WW5WbVptVnlaV1JTWlhGMVpYTjBPMXh1WEc0Z0lHbG1JQ2h6ZEhKbFlXMHVYM2R5YVhSbGRpQW1KaUJsYm5SeWVTQW1KaUJsYm5SeWVTNXVaWGgwS1NCN1hHNGdJQ0FnTHk4Z1JtRnpkQ0JqWVhObExDQjNjbWwwWlNCbGRtVnllWFJvYVc1bklIVnphVzVuSUY5M2NtbDBaWFlvS1Z4dUlDQWdJSFpoY2lCc0lEMGdjM1JoZEdVdVluVm1abVZ5WldSU1pYRjFaWE4wUTI5MWJuUTdYRzRnSUNBZ2RtRnlJR0oxWm1abGNpQTlJRzVsZHlCQmNuSmhlU2hzS1R0Y2JpQWdJQ0IyWVhJZ2FHOXNaR1Z5SUQwZ2MzUmhkR1V1WTI5eWEyVmtVbVZ4ZFdWemRITkdjbVZsTzF4dUlDQWdJR2h2YkdSbGNpNWxiblJ5ZVNBOUlHVnVkSEo1TzF4dVhHNGdJQ0FnZG1GeUlHTnZkVzUwSUQwZ01EdGNiaUFnSUNCM2FHbHNaU0FvWlc1MGNua3BJSHRjYmlBZ0lDQWdJR0oxWm1abGNsdGpiM1Z1ZEYwZ1BTQmxiblJ5ZVR0Y2JpQWdJQ0FnSUdWdWRISjVJRDBnWlc1MGNua3VibVY0ZER0Y2JpQWdJQ0FnSUdOdmRXNTBJQ3M5SURFN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWkc5WGNtbDBaU2h6ZEhKbFlXMHNJSE4wWVhSbExDQjBjblZsTENCemRHRjBaUzVzWlc1bmRHZ3NJR0oxWm1abGNpd2dKeWNzSUdodmJHUmxjaTVtYVc1cGMyZ3BPMXh1WEc0Z0lDQWdMeThnWkc5WGNtbDBaU0JwY3lCaGJHMXZjM1FnWVd4M1lYbHpJR0Z6ZVc1akxDQmtaV1psY2lCMGFHVnpaU0IwYnlCellYWmxJR0VnWW1sMElHOW1JSFJwYldWY2JpQWdJQ0F2THlCaGN5QjBhR1VnYUc5MElIQmhkR2dnWlc1a2N5QjNhWFJvSUdSdlYzSnBkR1ZjYmlBZ0lDQnpkR0YwWlM1d1pXNWthVzVuWTJJckt6dGNiaUFnSUNCemRHRjBaUzVzWVhOMFFuVm1abVZ5WldSU1pYRjFaWE4wSUQwZ2JuVnNiRHRjYmlBZ0lDQnBaaUFvYUc5c1pHVnlMbTVsZUhRcElIdGNiaUFnSUNBZ0lITjBZWFJsTG1OdmNtdGxaRkpsY1hWbGMzUnpSbkpsWlNBOUlHaHZiR1JsY2k1dVpYaDBPMXh1SUNBZ0lDQWdhRzlzWkdWeUxtNWxlSFFnUFNCdWRXeHNPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCemRHRjBaUzVqYjNKclpXUlNaWEYxWlhOMGMwWnlaV1VnUFNCdVpYY2dRMjl5YTJWa1VtVnhkV1Z6ZENoemRHRjBaU2s3WEc0Z0lDQWdmVnh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJQzh2SUZOc2IzY2dZMkZ6WlN3Z2QzSnBkR1VnWTJoMWJtdHpJRzl1WlMxaWVTMXZibVZjYmlBZ0lDQjNhR2xzWlNBb1pXNTBjbmtwSUh0Y2JpQWdJQ0FnSUhaaGNpQmphSFZ1YXlBOUlHVnVkSEo1TG1Ob2RXNXJPMXh1SUNBZ0lDQWdkbUZ5SUdWdVkyOWthVzVuSUQwZ1pXNTBjbmt1Wlc1amIyUnBibWM3WEc0Z0lDQWdJQ0IyWVhJZ1kySWdQU0JsYm5SeWVTNWpZV3hzWW1GamF6dGNiaUFnSUNBZ0lIWmhjaUJzWlc0Z1BTQnpkR0YwWlM1dlltcGxZM1JOYjJSbElEOGdNU0E2SUdOb2RXNXJMbXhsYm1kMGFEdGNibHh1SUNBZ0lDQWdaRzlYY21sMFpTaHpkSEpsWVcwc0lITjBZWFJsTENCbVlXeHpaU3dnYkdWdUxDQmphSFZ1YXl3Z1pXNWpiMlJwYm1jc0lHTmlLVHRjYmlBZ0lDQWdJR1Z1ZEhKNUlEMGdaVzUwY25rdWJtVjRkRHRjYmlBZ0lDQWdJQzh2SUdsbUlIZGxJR1JwWkc0bmRDQmpZV3hzSUhSb1pTQnZibmR5YVhSbElHbHRiV1ZrYVdGMFpXeDVMQ0IwYUdWdVhHNGdJQ0FnSUNBdkx5QnBkQ0J0WldGdWN5QjBhR0YwSUhkbElHNWxaV1FnZEc4Z2QyRnBkQ0IxYm5ScGJDQnBkQ0JrYjJWekxseHVJQ0FnSUNBZ0x5OGdZV3h6Ynl3Z2RHaGhkQ0J0WldGdWN5QjBhR0YwSUhSb1pTQmphSFZ1YXlCaGJtUWdZMklnWVhKbElHTjFjbkpsYm5Sc2VWeHVJQ0FnSUNBZ0x5OGdZbVZwYm1jZ2NISnZZMlZ6YzJWa0xDQnpieUJ0YjNabElIUm9aU0JpZFdabVpYSWdZMjkxYm5SbGNpQndZWE4wSUhSb1pXMHVYRzRnSUNBZ0lDQnBaaUFvYzNSaGRHVXVkM0pwZEdsdVp5a2dlMXh1SUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9aVzUwY25rZ1BUMDlJRzUxYkd3cElITjBZWFJsTG14aGMzUkNkV1ptWlhKbFpGSmxjWFZsYzNRZ1BTQnVkV3hzTzF4dUlDQjlYRzVjYmlBZ2MzUmhkR1V1WW5WbVptVnlaV1JTWlhGMVpYTjBRMjkxYm5RZ1BTQXdPMXh1SUNCemRHRjBaUzVpZFdabVpYSmxaRkpsY1hWbGMzUWdQU0JsYm5SeWVUdGNiaUFnYzNSaGRHVXVZblZtWm1WeVVISnZZMlZ6YzJsdVp5QTlJR1poYkhObE8xeHVmVnh1WEc1WGNtbDBZV0pzWlM1d2NtOTBiM1I1Y0dVdVgzZHlhWFJsSUQwZ1puVnVZM1JwYjI0Z0tHTm9kVzVyTENCbGJtTnZaR2x1Wnl3Z1kySXBJSHRjYmlBZ1kySW9ibVYzSUVWeWNtOXlLQ2RmZDNKcGRHVW9LU0JwY3lCdWIzUWdhVzF3YkdWdFpXNTBaV1FuS1NrN1hHNTlPMXh1WEc1WGNtbDBZV0pzWlM1d2NtOTBiM1I1Y0dVdVgzZHlhWFJsZGlBOUlHNTFiR3c3WEc1Y2JsZHlhWFJoWW14bExuQnliM1J2ZEhsd1pTNWxibVFnUFNCbWRXNWpkR2x2YmlBb1kyaDFibXNzSUdWdVkyOWthVzVuTENCallpa2dlMXh1SUNCMllYSWdjM1JoZEdVZ1BTQjBhR2x6TGw5M2NtbDBZV0pzWlZOMFlYUmxPMXh1WEc0Z0lHbG1JQ2gwZVhCbGIyWWdZMmgxYm1zZ1BUMDlJQ2RtZFc1amRHbHZiaWNwSUh0Y2JpQWdJQ0JqWWlBOUlHTm9kVzVyTzF4dUlDQWdJR05vZFc1cklEMGdiblZzYkR0Y2JpQWdJQ0JsYm1OdlpHbHVaeUE5SUc1MWJHdzdYRzRnSUgwZ1pXeHpaU0JwWmlBb2RIbHdaVzltSUdWdVkyOWthVzVuSUQwOVBTQW5ablZ1WTNScGIyNG5LU0I3WEc0Z0lDQWdZMklnUFNCbGJtTnZaR2x1Wnp0Y2JpQWdJQ0JsYm1OdlpHbHVaeUE5SUc1MWJHdzdYRzRnSUgxY2JseHVJQ0JwWmlBb1kyaDFibXNnSVQwOUlHNTFiR3dnSmlZZ1kyaDFibXNnSVQwOUlIVnVaR1ZtYVc1bFpDa2dkR2hwY3k1M2NtbDBaU2hqYUhWdWF5d2daVzVqYjJScGJtY3BPMXh1WEc0Z0lDOHZJQzVsYm1Rb0tTQm1kV3hzZVNCMWJtTnZjbXR6WEc0Z0lHbG1JQ2h6ZEdGMFpTNWpiM0pyWldRcElIdGNiaUFnSUNCemRHRjBaUzVqYjNKclpXUWdQU0F4TzF4dUlDQWdJSFJvYVhNdWRXNWpiM0pyS0NrN1hHNGdJSDFjYmx4dUlDQXZMeUJwWjI1dmNtVWdkVzV1WldObGMzTmhjbmtnWlc1a0tDa2dZMkZzYkhNdVhHNGdJR2xtSUNnaGMzUmhkR1V1Wlc1a2FXNW5JQ1ltSUNGemRHRjBaUzVtYVc1cGMyaGxaQ2tnWlc1a1YzSnBkR0ZpYkdVb2RHaHBjeXdnYzNSaGRHVXNJR05pS1R0Y2JuMDdYRzVjYm1aMWJtTjBhVzl1SUc1bFpXUkdhVzVwYzJnb2MzUmhkR1VwSUh0Y2JpQWdjbVYwZFhKdUlITjBZWFJsTG1WdVpHbHVaeUFtSmlCemRHRjBaUzVzWlc1bmRHZ2dQVDA5SURBZ0ppWWdjM1JoZEdVdVluVm1abVZ5WldSU1pYRjFaWE4wSUQwOVBTQnVkV3hzSUNZbUlDRnpkR0YwWlM1bWFXNXBjMmhsWkNBbUppQWhjM1JoZEdVdWQzSnBkR2x1Wnp0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnY0hKbFptbHVhWE5vS0hOMGNtVmhiU3dnYzNSaGRHVXBJSHRjYmlBZ2FXWWdLQ0Z6ZEdGMFpTNXdjbVZtYVc1cGMyaGxaQ2tnZTF4dUlDQWdJSE4wWVhSbExuQnlaV1pwYm1semFHVmtJRDBnZEhKMVpUdGNiaUFnSUNCemRISmxZVzB1WlcxcGRDZ25jSEpsWm1sdWFYTm9KeWs3WEc0Z0lIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z1ptbHVhWE5vVFdGNVltVW9jM1J5WldGdExDQnpkR0YwWlNrZ2UxeHVJQ0IyWVhJZ2JtVmxaQ0E5SUc1bFpXUkdhVzVwYzJnb2MzUmhkR1VwTzF4dUlDQnBaaUFvYm1WbFpDa2dlMXh1SUNBZ0lHbG1JQ2h6ZEdGMFpTNXdaVzVrYVc1blkySWdQVDA5SURBcElIdGNiaUFnSUNBZ0lIQnlaV1pwYm1semFDaHpkSEpsWVcwc0lITjBZWFJsS1R0Y2JpQWdJQ0FnSUhOMFlYUmxMbVpwYm1semFHVmtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lITjBjbVZoYlM1bGJXbDBLQ2RtYVc1cGMyZ25LVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2NISmxabWx1YVhOb0tITjBjbVZoYlN3Z2MzUmhkR1VwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdibVZsWkR0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnWlc1a1YzSnBkR0ZpYkdVb2MzUnlaV0Z0TENCemRHRjBaU3dnWTJJcElIdGNiaUFnYzNSaGRHVXVaVzVrYVc1bklEMGdkSEoxWlR0Y2JpQWdabWx1YVhOb1RXRjVZbVVvYzNSeVpXRnRMQ0J6ZEdGMFpTazdYRzRnSUdsbUlDaGpZaWtnZTF4dUlDQWdJR2xtSUNoemRHRjBaUzVtYVc1cGMyaGxaQ2tnY0hKdlkyVnpjMDVsZUhSVWFXTnJLR05pS1R0bGJITmxJSE4wY21WaGJTNXZibU5sS0NkbWFXNXBjMmduTENCallpazdYRzRnSUgxY2JpQWdjM1JoZEdVdVpXNWtaV1FnUFNCMGNuVmxPMXh1SUNCemRISmxZVzB1ZDNKcGRHRmliR1VnUFNCbVlXeHpaVHRjYm4xY2JseHVMeThnU1hRZ2MyVmxiWE1nWVNCc2FXNXJaV1FnYkdsemRDQmlkWFFnYVhRZ2FYTWdibTkwWEc0dkx5QjBhR1Z5WlNCM2FXeHNJR0psSUc5dWJIa2dNaUJ2WmlCMGFHVnpaU0JtYjNJZ1pXRmphQ0J6ZEhKbFlXMWNibVoxYm1OMGFXOXVJRU52Y210bFpGSmxjWFZsYzNRb2MzUmhkR1VwSUh0Y2JpQWdkbUZ5SUY5MGFHbHpJRDBnZEdocGN6dGNibHh1SUNCMGFHbHpMbTVsZUhRZ1BTQnVkV3hzTzF4dUlDQjBhR2x6TG1WdWRISjVJRDBnYm5Wc2JEdGNiaUFnZEdocGN5NW1hVzVwYzJnZ1BTQm1kVzVqZEdsdmJpQW9aWEp5S1NCN1hHNGdJQ0FnZG1GeUlHVnVkSEo1SUQwZ1gzUm9hWE11Wlc1MGNuazdYRzRnSUNBZ1gzUm9hWE11Wlc1MGNua2dQU0J1ZFd4c08xeHVJQ0FnSUhkb2FXeGxJQ2hsYm5SeWVTa2dlMXh1SUNBZ0lDQWdkbUZ5SUdOaUlEMGdaVzUwY25rdVkyRnNiR0poWTJzN1hHNGdJQ0FnSUNCemRHRjBaUzV3Wlc1a2FXNW5ZMkl0TFR0Y2JpQWdJQ0FnSUdOaUtHVnljaWs3WEc0Z0lDQWdJQ0JsYm5SeWVTQTlJR1Z1ZEhKNUxtNWxlSFE3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2h6ZEdGMFpTNWpiM0pyWldSU1pYRjFaWE4wYzBaeVpXVXBJSHRjYmlBZ0lDQWdJSE4wWVhSbExtTnZjbXRsWkZKbGNYVmxjM1J6Um5KbFpTNXVaWGgwSUQwZ1gzUm9hWE03WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lITjBZWFJsTG1OdmNtdGxaRkpsY1hWbGMzUnpSbkpsWlNBOUlGOTBhR2x6TzF4dUlDQWdJSDFjYmlBZ2ZUdGNibjBpWFgwPSIsIid1c2Ugc3RyaWN0JztcblxudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpLkJ1ZmZlcjtcbi8qPHJlcGxhY2VtZW50PiovXG52YXIgYnVmZmVyU2hpbSA9IHJlcXVpcmUoJ2J1ZmZlci1zaGltcycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbm1vZHVsZS5leHBvcnRzID0gQnVmZmVyTGlzdDtcblxuZnVuY3Rpb24gQnVmZmVyTGlzdCgpIHtcbiAgdGhpcy5oZWFkID0gbnVsbDtcbiAgdGhpcy50YWlsID0gbnVsbDtcbiAgdGhpcy5sZW5ndGggPSAwO1xufVxuXG5CdWZmZXJMaXN0LnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKHYpIHtcbiAgdmFyIGVudHJ5ID0geyBkYXRhOiB2LCBuZXh0OiBudWxsIH07XG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHRoaXMudGFpbC5uZXh0ID0gZW50cnk7ZWxzZSB0aGlzLmhlYWQgPSBlbnRyeTtcbiAgdGhpcy50YWlsID0gZW50cnk7XG4gICsrdGhpcy5sZW5ndGg7XG59O1xuXG5CdWZmZXJMaXN0LnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24gKHYpIHtcbiAgdmFyIGVudHJ5ID0geyBkYXRhOiB2LCBuZXh0OiB0aGlzLmhlYWQgfTtcbiAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB0aGlzLnRhaWwgPSBlbnRyeTtcbiAgdGhpcy5oZWFkID0gZW50cnk7XG4gICsrdGhpcy5sZW5ndGg7XG59O1xuXG5CdWZmZXJMaXN0LnByb3RvdHlwZS5zaGlmdCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gIHZhciByZXQgPSB0aGlzLmhlYWQuZGF0YTtcbiAgaWYgKHRoaXMubGVuZ3RoID09PSAxKSB0aGlzLmhlYWQgPSB0aGlzLnRhaWwgPSBudWxsO2Vsc2UgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gIC0tdGhpcy5sZW5ndGg7XG4gIHJldHVybiByZXQ7XG59O1xuXG5CdWZmZXJMaXN0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5oZWFkID0gdGhpcy50YWlsID0gbnVsbDtcbiAgdGhpcy5sZW5ndGggPSAwO1xufTtcblxuQnVmZmVyTGlzdC5wcm90b3R5cGUuam9pbiA9IGZ1bmN0aW9uIChzKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcnO1xuICB2YXIgcCA9IHRoaXMuaGVhZDtcbiAgdmFyIHJldCA9ICcnICsgcC5kYXRhO1xuICB3aGlsZSAocCA9IHAubmV4dCkge1xuICAgIHJldCArPSBzICsgcC5kYXRhO1xuICB9cmV0dXJuIHJldDtcbn07XG5cbkJ1ZmZlckxpc3QucHJvdG90eXBlLmNvbmNhdCA9IGZ1bmN0aW9uIChuKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGJ1ZmZlclNoaW0uYWxsb2MoMCk7XG4gIGlmICh0aGlzLmxlbmd0aCA9PT0gMSkgcmV0dXJuIHRoaXMuaGVhZC5kYXRhO1xuICB2YXIgcmV0ID0gYnVmZmVyU2hpbS5hbGxvY1Vuc2FmZShuID4+PiAwKTtcbiAgdmFyIHAgPSB0aGlzLmhlYWQ7XG4gIHZhciBpID0gMDtcbiAgd2hpbGUgKHApIHtcbiAgICBwLmRhdGEuY29weShyZXQsIGkpO1xuICAgIGkgKz0gcC5kYXRhLmxlbmd0aDtcbiAgICBwID0gcC5uZXh0O1xuICB9XG4gIHJldHVybiByZXQ7XG59OyIsIihmdW5jdGlvbiAocHJvY2Vzcyl7XG52YXIgU3RyZWFtID0gKGZ1bmN0aW9uICgpe1xuICB0cnkge1xuICAgIHJldHVybiByZXF1aXJlKCdzdCcgKyAncmVhbScpOyAvLyBoYWNrIHRvIGZpeCBhIGNpcmN1bGFyIGRlcGVuZGVuY3kgaXNzdWUgd2hlbiB1c2VkIHdpdGggYnJvd3NlcmlmeVxuICB9IGNhdGNoKF8pe31cbn0oKSk7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9fc3RyZWFtX3JlYWRhYmxlLmpzJyk7XG5leHBvcnRzLlN0cmVhbSA9IFN0cmVhbSB8fCBleHBvcnRzO1xuZXhwb3J0cy5SZWFkYWJsZSA9IGV4cG9ydHM7XG5leHBvcnRzLldyaXRhYmxlID0gcmVxdWlyZSgnLi9saWIvX3N0cmVhbV93cml0YWJsZS5qcycpO1xuZXhwb3J0cy5EdXBsZXggPSByZXF1aXJlKCcuL2xpYi9fc3RyZWFtX2R1cGxleC5qcycpO1xuZXhwb3J0cy5UcmFuc2Zvcm0gPSByZXF1aXJlKCcuL2xpYi9fc3RyZWFtX3RyYW5zZm9ybS5qcycpO1xuZXhwb3J0cy5QYXNzVGhyb3VnaCA9IHJlcXVpcmUoJy4vbGliL19zdHJlYW1fcGFzc3Rocm91Z2guanMnKTtcblxuaWYgKCFwcm9jZXNzLmJyb3dzZXIgJiYgcHJvY2Vzcy5lbnYuUkVBREFCTEVfU1RSRUFNID09PSAnZGlzYWJsZScgJiYgU3RyZWFtKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gU3RyZWFtO1xufVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZSgnX3Byb2Nlc3MnKSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTl5WldGa1lXSnNaUzF6ZEhKbFlXMHZjbVZoWkdGaWJHVXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanRCUVVGQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFaUxDSm1hV3hsSWpvaVoyVnVaWEpoZEdWa0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJblpoY2lCVGRISmxZVzBnUFNBb1puVnVZM1JwYjI0Z0tDbDdYRzRnSUhSeWVTQjdYRzRnSUNBZ2NtVjBkWEp1SUhKbGNYVnBjbVVvSjNOMEp5QXJJQ2R5WldGdEp5azdJQzh2SUdoaFkyc2dkRzhnWm1sNElHRWdZMmx5WTNWc1lYSWdaR1Z3Wlc1a1pXNWplU0JwYzNOMVpTQjNhR1Z1SUhWelpXUWdkMmwwYUNCaWNtOTNjMlZ5YVdaNVhHNGdJSDBnWTJGMFkyZ29YeWw3ZlZ4dWZTZ3BLVHRjYm1WNGNHOXlkSE1nUFNCdGIyUjFiR1V1Wlhod2IzSjBjeUE5SUhKbGNYVnBjbVVvSnk0dmJHbGlMMTl6ZEhKbFlXMWZjbVZoWkdGaWJHVXVhbk1uS1R0Y2JtVjRjRzl5ZEhNdVUzUnlaV0Z0SUQwZ1UzUnlaV0Z0SUh4OElHVjRjRzl5ZEhNN1hHNWxlSEJ2Y25SekxsSmxZV1JoWW14bElEMGdaWGh3YjNKMGN6dGNibVY0Y0c5eWRITXVWM0pwZEdGaWJHVWdQU0J5WlhGMWFYSmxLQ2N1TDJ4cFlpOWZjM1J5WldGdFgzZHlhWFJoWW14bExtcHpKeWs3WEc1bGVIQnZjblJ6TGtSMWNHeGxlQ0E5SUhKbGNYVnBjbVVvSnk0dmJHbGlMMTl6ZEhKbFlXMWZaSFZ3YkdWNExtcHpKeWs3WEc1bGVIQnZjblJ6TGxSeVlXNXpabTl5YlNBOUlISmxjWFZwY21Vb0p5NHZiR2xpTDE5emRISmxZVzFmZEhKaGJuTm1iM0p0TG1wekp5azdYRzVsZUhCdmNuUnpMbEJoYzNOVWFISnZkV2RvSUQwZ2NtVnhkV2x5WlNnbkxpOXNhV0l2WDNOMGNtVmhiVjl3WVhOemRHaHliM1ZuYUM1cWN5Y3BPMXh1WEc1cFppQW9JWEJ5YjJObGMzTXVZbkp2ZDNObGNpQW1KaUJ3Y205alpYTnpMbVZ1ZGk1U1JVRkVRVUpNUlY5VFZGSkZRVTBnUFQwOUlDZGthWE5oWW14bEp5QW1KaUJUZEhKbFlXMHBJSHRjYmlBZ2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCVGRISmxZVzA3WEc1OVhHNGlYWDA9IiwiKGZ1bmN0aW9uIChCdWZmZXIpe1xubW9kdWxlLmV4cG9ydHMgPSBQZWVyXG5cbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ3NpbXBsZS1wZWVyJylcbnZhciBnZXRCcm93c2VyUlRDID0gcmVxdWlyZSgnZ2V0LWJyb3dzZXItcnRjJylcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJylcbnZhciByYW5kb21ieXRlcyA9IHJlcXVpcmUoJ3JhbmRvbWJ5dGVzJylcbnZhciBzdHJlYW0gPSByZXF1aXJlKCdyZWFkYWJsZS1zdHJlYW0nKVxuXG52YXIgTUFYX0JVRkZFUkVEX0FNT1VOVCA9IDY0ICogMTAyNFxuXG5pbmhlcml0cyhQZWVyLCBzdHJlYW0uRHVwbGV4KVxuXG4vKipcbiAqIFdlYlJUQyBwZWVyIGNvbm5lY3Rpb24uIFNhbWUgQVBJIGFzIG5vZGUgY29yZSBgbmV0LlNvY2tldGAsIHBsdXMgYSBmZXcgZXh0cmEgbWV0aG9kcy5cbiAqIER1cGxleCBzdHJlYW0uXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICovXG5mdW5jdGlvbiBQZWVyIChvcHRzKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICBpZiAoIShzZWxmIGluc3RhbmNlb2YgUGVlcikpIHJldHVybiBuZXcgUGVlcihvcHRzKVxuXG4gIHNlbGYuX2lkID0gcmFuZG9tYnl0ZXMoNCkudG9TdHJpbmcoJ2hleCcpLnNsaWNlKDAsIDcpXG4gIHNlbGYuX2RlYnVnKCduZXcgcGVlciAlbycsIG9wdHMpXG5cbiAgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGFsbG93SGFsZk9wZW46IGZhbHNlXG4gIH0sIG9wdHMpXG5cbiAgc3RyZWFtLkR1cGxleC5jYWxsKHNlbGYsIG9wdHMpXG5cbiAgc2VsZi5jaGFubmVsTmFtZSA9IG9wdHMuaW5pdGlhdG9yXG4gICAgPyBvcHRzLmNoYW5uZWxOYW1lIHx8IHJhbmRvbWJ5dGVzKDIwKS50b1N0cmluZygnaGV4JylcbiAgICA6IG51bGxcblxuICAvLyBOZWVkZWQgYnkgX3RyYW5zZm9ybUNvbnN0cmFpbnRzLCBzbyBzZXQgdGhpcyBlYXJseVxuICBzZWxmLl9pc0Nocm9taXVtID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgISF3aW5kb3cud2Via2l0UlRDUGVlckNvbm5lY3Rpb25cblxuICBzZWxmLmluaXRpYXRvciA9IG9wdHMuaW5pdGlhdG9yIHx8IGZhbHNlXG4gIHNlbGYuY2hhbm5lbENvbmZpZyA9IG9wdHMuY2hhbm5lbENvbmZpZyB8fCBQZWVyLmNoYW5uZWxDb25maWdcbiAgc2VsZi5jb25maWcgPSBvcHRzLmNvbmZpZyB8fCBQZWVyLmNvbmZpZ1xuICBzZWxmLmNvbnN0cmFpbnRzID0gc2VsZi5fdHJhbnNmb3JtQ29uc3RyYWludHMob3B0cy5jb25zdHJhaW50cyB8fCBQZWVyLmNvbnN0cmFpbnRzKVxuICBzZWxmLm9mZmVyQ29uc3RyYWludHMgPSBzZWxmLl90cmFuc2Zvcm1Db25zdHJhaW50cyhvcHRzLm9mZmVyQ29uc3RyYWludHMgfHwge30pXG4gIHNlbGYuYW5zd2VyQ29uc3RyYWludHMgPSBzZWxmLl90cmFuc2Zvcm1Db25zdHJhaW50cyhvcHRzLmFuc3dlckNvbnN0cmFpbnRzIHx8IHt9KVxuICBzZWxmLnJlY29ubmVjdFRpbWVyID0gb3B0cy5yZWNvbm5lY3RUaW1lciB8fCBmYWxzZVxuICBzZWxmLnNkcFRyYW5zZm9ybSA9IG9wdHMuc2RwVHJhbnNmb3JtIHx8IGZ1bmN0aW9uIChzZHApIHsgcmV0dXJuIHNkcCB9XG4gIHNlbGYuc3RyZWFtID0gb3B0cy5zdHJlYW0gfHwgZmFsc2VcbiAgc2VsZi50cmlja2xlID0gb3B0cy50cmlja2xlICE9PSB1bmRlZmluZWQgPyBvcHRzLnRyaWNrbGUgOiB0cnVlXG5cbiAgc2VsZi5kZXN0cm95ZWQgPSBmYWxzZVxuICBzZWxmLmNvbm5lY3RlZCA9IGZhbHNlXG5cbiAgc2VsZi5yZW1vdGVBZGRyZXNzID0gdW5kZWZpbmVkXG4gIHNlbGYucmVtb3RlRmFtaWx5ID0gdW5kZWZpbmVkXG4gIHNlbGYucmVtb3RlUG9ydCA9IHVuZGVmaW5lZFxuICBzZWxmLmxvY2FsQWRkcmVzcyA9IHVuZGVmaW5lZFxuICBzZWxmLmxvY2FsUG9ydCA9IHVuZGVmaW5lZFxuXG4gIHNlbGYuX3dydGMgPSAob3B0cy53cnRjICYmIHR5cGVvZiBvcHRzLndydGMgPT09ICdvYmplY3QnKVxuICAgID8gb3B0cy53cnRjXG4gICAgOiBnZXRCcm93c2VyUlRDKClcblxuICBpZiAoIXNlbGYuX3dydGMpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gV2ViUlRDIHN1cHBvcnQ6IFNwZWNpZnkgYG9wdHMud3J0Y2Agb3B0aW9uIGluIHRoaXMgZW52aXJvbm1lbnQnKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIFdlYlJUQyBzdXBwb3J0OiBOb3QgYSBzdXBwb3J0ZWQgYnJvd3NlcicpXG4gICAgfVxuICB9XG5cbiAgc2VsZi5fcGNSZWFkeSA9IGZhbHNlXG4gIHNlbGYuX2NoYW5uZWxSZWFkeSA9IGZhbHNlXG4gIHNlbGYuX2ljZUNvbXBsZXRlID0gZmFsc2UgLy8gaWNlIGNhbmRpZGF0ZSB0cmlja2xlIGRvbmUgKGdvdCBudWxsIGNhbmRpZGF0ZSlcbiAgc2VsZi5fY2hhbm5lbCA9IG51bGxcbiAgc2VsZi5fcGVuZGluZ0NhbmRpZGF0ZXMgPSBbXVxuICBzZWxmLl9wcmV2aW91c1N0cmVhbXMgPSBbXVxuXG4gIHNlbGYuX2NodW5rID0gbnVsbFxuICBzZWxmLl9jYiA9IG51bGxcbiAgc2VsZi5faW50ZXJ2YWwgPSBudWxsXG4gIHNlbGYuX3JlY29ubmVjdFRpbWVvdXQgPSBudWxsXG5cbiAgc2VsZi5fcGMgPSBuZXcgKHNlbGYuX3dydGMuUlRDUGVlckNvbm5lY3Rpb24pKHNlbGYuY29uZmlnLCBzZWxmLmNvbnN0cmFpbnRzKVxuXG4gIC8vIFdlIHByZWZlciBmZWF0dXJlIGRldGVjdGlvbiB3aGVuZXZlciBwb3NzaWJsZSwgYnV0IHNvbWV0aW1lcyB0aGF0J3Mgbm90XG4gIC8vIHBvc3NpYmxlIGZvciBjZXJ0YWluIGltcGxlbWVudGF0aW9ucy5cbiAgc2VsZi5faXNXcnRjID0gQXJyYXkuaXNBcnJheShzZWxmLl9wYy5SVENJY2VDb25uZWN0aW9uU3RhdGVzKVxuICBzZWxmLl9pc1JlYWN0TmF0aXZlV2VicnRjID0gdHlwZW9mIHNlbGYuX3BjLl9wZWVyQ29ubmVjdGlvbklkID09PSAnbnVtYmVyJ1xuXG4gIHNlbGYuX3BjLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIHNlbGYuX29uSWNlQ29ubmVjdGlvblN0YXRlQ2hhbmdlKClcbiAgfVxuICBzZWxmLl9wYy5vbnNpZ25hbGluZ3N0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIHNlbGYuX29uU2lnbmFsaW5nU3RhdGVDaGFuZ2UoKVxuICB9XG4gIHNlbGYuX3BjLm9uaWNlY2FuZGlkYXRlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgc2VsZi5fb25JY2VDYW5kaWRhdGUoZXZlbnQpXG4gIH1cblxuICBpZiAoc2VsZi5pbml0aWF0b3IpIHtcbiAgICB2YXIgY3JlYXRlZE9mZmVyID0gZmFsc2VcbiAgICBzZWxmLl9wYy5vbm5lZ290aWF0aW9ubmVlZGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFjcmVhdGVkT2ZmZXIpIHNlbGYuX2NyZWF0ZU9mZmVyKClcbiAgICAgIGNyZWF0ZWRPZmZlciA9IHRydWVcbiAgICB9XG5cbiAgICBzZWxmLl9zZXR1cERhdGEoe1xuICAgICAgY2hhbm5lbDogc2VsZi5fcGMuY3JlYXRlRGF0YUNoYW5uZWwoc2VsZi5jaGFubmVsTmFtZSwgc2VsZi5jaGFubmVsQ29uZmlnKVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgc2VsZi5fcGMub25kYXRhY2hhbm5lbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgc2VsZi5fc2V0dXBEYXRhKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmICgnYWRkVHJhY2snIGluIHNlbGYuX3BjKSB7XG4gICAgLy8gV2ViUlRDIFNwZWMsIEZpcmVmb3hcbiAgICBpZiAoc2VsZi5zdHJlYW0pIHtcbiAgICAgIHNlbGYuc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goZnVuY3Rpb24gKHRyYWNrKSB7XG4gICAgICAgIHNlbGYuX3BjLmFkZFRyYWNrKHRyYWNrLCBzZWxmLnN0cmVhbSlcbiAgICAgIH0pXG4gICAgfVxuICAgIHNlbGYuX3BjLm9udHJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHNlbGYuX29uVHJhY2soZXZlbnQpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIENocm9tZSwgZXRjLiBUaGlzIGNhbiBiZSByZW1vdmVkIG9uY2UgYWxsIGJyb3dzZXJzIHN1cHBvcnQgYG9udHJhY2tgXG4gICAgaWYgKHNlbGYuc3RyZWFtKSBzZWxmLl9wYy5hZGRTdHJlYW0oc2VsZi5zdHJlYW0pXG4gICAgc2VsZi5fcGMub25hZGRzdHJlYW0gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHNlbGYuX29uQWRkU3RyZWFtKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIC8vIEhBQ0s6IHdydGMgZG9lc24ndCBmaXJlIHRoZSAnbmVnb3Rpb25uZWVkZWQnIGV2ZW50XG4gIGlmIChzZWxmLmluaXRpYXRvciAmJiBzZWxmLl9pc1dydGMpIHtcbiAgICBzZWxmLl9wYy5vbm5lZ290aWF0aW9ubmVlZGVkKClcbiAgfVxuXG4gIHNlbGYuX29uRmluaXNoQm91bmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5fb25GaW5pc2goKVxuICB9XG4gIHNlbGYub25jZSgnZmluaXNoJywgc2VsZi5fb25GaW5pc2hCb3VuZClcbn1cblxuUGVlci5XRUJSVENfU1VQUE9SVCA9ICEhZ2V0QnJvd3NlclJUQygpXG5cbi8qKlxuICogRXhwb3NlIGNvbmZpZywgY29uc3RyYWludHMsIGFuZCBkYXRhIGNoYW5uZWwgY29uZmlnIGZvciBvdmVycmlkaW5nIGFsbCBQZWVyXG4gKiBpbnN0YW5jZXMuIE90aGVyd2lzZSwganVzdCBzZXQgb3B0cy5jb25maWcsIG9wdHMuY29uc3RyYWludHMsIG9yIG9wdHMuY2hhbm5lbENvbmZpZ1xuICogd2hlbiBjb25zdHJ1Y3RpbmcgYSBQZWVyLlxuICovXG5QZWVyLmNvbmZpZyA9IHtcbiAgaWNlU2VydmVyczogW1xuICAgIHtcbiAgICAgIHVybHM6ICdzdHVuOnN0dW4ubC5nb29nbGUuY29tOjE5MzAyJ1xuICAgIH0sXG4gICAge1xuICAgICAgdXJsczogJ3N0dW46Z2xvYmFsLnN0dW4udHdpbGlvLmNvbTozNDc4P3RyYW5zcG9ydD11ZHAnXG4gICAgfVxuICBdXG59XG5QZWVyLmNvbnN0cmFpbnRzID0ge31cblBlZXIuY2hhbm5lbENvbmZpZyA9IHt9XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShQZWVyLnByb3RvdHlwZSwgJ2J1ZmZlclNpemUnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHJldHVybiAoc2VsZi5fY2hhbm5lbCAmJiBzZWxmLl9jaGFubmVsLmJ1ZmZlcmVkQW1vdW50KSB8fCAwXG4gIH1cbn0pXG5cblBlZXIucHJvdG90eXBlLmFkZHJlc3MgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICByZXR1cm4geyBwb3J0OiBzZWxmLmxvY2FsUG9ydCwgZmFtaWx5OiAnSVB2NCcsIGFkZHJlc3M6IHNlbGYubG9jYWxBZGRyZXNzIH1cbn1cblxuUGVlci5wcm90b3R5cGUuc2lnbmFsID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIGlmIChzZWxmLmRlc3Ryb3llZCkgdGhyb3cgbmV3IEVycm9yKCdjYW5ub3Qgc2lnbmFsIGFmdGVyIHBlZXIgaXMgZGVzdHJveWVkJylcbiAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgIHRyeSB7XG4gICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgZGF0YSA9IHt9XG4gICAgfVxuICB9XG4gIHNlbGYuX2RlYnVnKCdzaWduYWwoKScpXG5cbiAgaWYgKGRhdGEuY2FuZGlkYXRlKSB7XG4gICAgaWYgKHNlbGYuX3BjLnJlbW90ZURlc2NyaXB0aW9uKSBzZWxmLl9hZGRJY2VDYW5kaWRhdGUoZGF0YS5jYW5kaWRhdGUpXG4gICAgZWxzZSBzZWxmLl9wZW5kaW5nQ2FuZGlkYXRlcy5wdXNoKGRhdGEuY2FuZGlkYXRlKVxuICB9XG4gIGlmIChkYXRhLnNkcCkge1xuICAgIHNlbGYuX3BjLnNldFJlbW90ZURlc2NyaXB0aW9uKG5ldyAoc2VsZi5fd3J0Yy5SVENTZXNzaW9uRGVzY3JpcHRpb24pKGRhdGEpLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc2VsZi5kZXN0cm95ZWQpIHJldHVyblxuXG4gICAgICBzZWxmLl9wZW5kaW5nQ2FuZGlkYXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChjYW5kaWRhdGUpIHtcbiAgICAgICAgc2VsZi5fYWRkSWNlQ2FuZGlkYXRlKGNhbmRpZGF0ZSlcbiAgICAgIH0pXG4gICAgICBzZWxmLl9wZW5kaW5nQ2FuZGlkYXRlcyA9IFtdXG5cbiAgICAgIGlmIChzZWxmLl9wYy5yZW1vdGVEZXNjcmlwdGlvbi50eXBlID09PSAnb2ZmZXInKSBzZWxmLl9jcmVhdGVBbnN3ZXIoKVxuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHsgc2VsZi5fb25FcnJvcihlcnIpIH0pXG4gIH1cbiAgaWYgKCFkYXRhLnNkcCAmJiAhZGF0YS5jYW5kaWRhdGUpIHtcbiAgICBzZWxmLl9kZXN0cm95KG5ldyBFcnJvcignc2lnbmFsKCkgY2FsbGVkIHdpdGggaW52YWxpZCBzaWduYWwgZGF0YScpKVxuICB9XG59XG5cblBlZXIucHJvdG90eXBlLl9hZGRJY2VDYW5kaWRhdGUgPSBmdW5jdGlvbiAoY2FuZGlkYXRlKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICB0cnkge1xuICAgIHNlbGYuX3BjLmFkZEljZUNhbmRpZGF0ZShcbiAgICAgIG5ldyBzZWxmLl93cnRjLlJUQ0ljZUNhbmRpZGF0ZShjYW5kaWRhdGUpLFxuICAgICAgbm9vcCxcbiAgICAgIGZ1bmN0aW9uIChlcnIpIHsgc2VsZi5fb25FcnJvcihlcnIpIH1cbiAgICApXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHNlbGYuX2Rlc3Ryb3kobmV3IEVycm9yKCdlcnJvciBhZGRpbmcgY2FuZGlkYXRlOiAnICsgZXJyLm1lc3NhZ2UpKVxuICB9XG59XG5cbi8qKlxuICogU2VuZCB0ZXh0L2JpbmFyeSBkYXRhIHRvIHRoZSByZW1vdGUgcGVlci5cbiAqIEBwYXJhbSB7VHlwZWRBcnJheVZpZXd8QXJyYXlCdWZmZXJ8QnVmZmVyfHN0cmluZ3xCbG9ifE9iamVjdH0gY2h1bmtcbiAqL1xuUGVlci5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChjaHVuaykge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICAvLyBIQUNLOiBgd3J0Y2AgbW9kdWxlIGNyYXNoZXMgb24gTm9kZS5qcyBCdWZmZXIsIHNvIGNvbnZlcnQgdG8gVWludDhBcnJheVxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3Mvc2ltcGxlLXBlZXIvaXNzdWVzLzYwXG4gIGlmIChzZWxmLl9pc1dydGMgJiYgQnVmZmVyLmlzQnVmZmVyKGNodW5rKSkge1xuICAgIGNodW5rID0gbmV3IFVpbnQ4QXJyYXkoY2h1bmspXG4gIH1cblxuICBzZWxmLl9jaGFubmVsLnNlbmQoY2h1bmspXG59XG5cblBlZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAob25jbG9zZSkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgc2VsZi5fZGVzdHJveShudWxsLCBvbmNsb3NlKVxufVxuXG5QZWVyLnByb3RvdHlwZS5fZGVzdHJveSA9IGZ1bmN0aW9uIChlcnIsIG9uY2xvc2UpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIGlmIChzZWxmLmRlc3Ryb3llZCkgcmV0dXJuXG4gIGlmIChvbmNsb3NlKSBzZWxmLm9uY2UoJ2Nsb3NlJywgb25jbG9zZSlcblxuICBzZWxmLl9kZWJ1ZygnZGVzdHJveSAoZXJyb3I6ICVzKScsIGVyciAmJiBlcnIubWVzc2FnZSlcblxuICBzZWxmLnJlYWRhYmxlID0gc2VsZi53cml0YWJsZSA9IGZhbHNlXG5cbiAgaWYgKCFzZWxmLl9yZWFkYWJsZVN0YXRlLmVuZGVkKSBzZWxmLnB1c2gobnVsbClcbiAgaWYgKCFzZWxmLl93cml0YWJsZVN0YXRlLmZpbmlzaGVkKSBzZWxmLmVuZCgpXG5cbiAgc2VsZi5kZXN0cm95ZWQgPSB0cnVlXG4gIHNlbGYuY29ubmVjdGVkID0gZmFsc2VcbiAgc2VsZi5fcGNSZWFkeSA9IGZhbHNlXG4gIHNlbGYuX2NoYW5uZWxSZWFkeSA9IGZhbHNlXG4gIHNlbGYuX3ByZXZpb3VzU3RyZWFtcyA9IG51bGxcblxuICBjbGVhckludGVydmFsKHNlbGYuX2ludGVydmFsKVxuICBjbGVhclRpbWVvdXQoc2VsZi5fcmVjb25uZWN0VGltZW91dClcbiAgc2VsZi5faW50ZXJ2YWwgPSBudWxsXG4gIHNlbGYuX3JlY29ubmVjdFRpbWVvdXQgPSBudWxsXG4gIHNlbGYuX2NodW5rID0gbnVsbFxuICBzZWxmLl9jYiA9IG51bGxcblxuICBpZiAoc2VsZi5fb25GaW5pc2hCb3VuZCkgc2VsZi5yZW1vdmVMaXN0ZW5lcignZmluaXNoJywgc2VsZi5fb25GaW5pc2hCb3VuZClcbiAgc2VsZi5fb25GaW5pc2hCb3VuZCA9IG51bGxcblxuICBpZiAoc2VsZi5fcGMpIHtcbiAgICB0cnkge1xuICAgICAgc2VsZi5fcGMuY2xvc2UoKVxuICAgIH0gY2F0Y2ggKGVycikge31cblxuICAgIHNlbGYuX3BjLm9uaWNlY29ubmVjdGlvbnN0YXRlY2hhbmdlID0gbnVsbFxuICAgIHNlbGYuX3BjLm9uc2lnbmFsaW5nc3RhdGVjaGFuZ2UgPSBudWxsXG4gICAgc2VsZi5fcGMub25pY2VjYW5kaWRhdGUgPSBudWxsXG4gICAgaWYgKCdhZGRUcmFjaycgaW4gc2VsZi5fcGMpIHtcbiAgICAgIHNlbGYuX3BjLm9udHJhY2sgPSBudWxsXG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGYuX3BjLm9uYWRkc3RyZWFtID0gbnVsbFxuICAgIH1cbiAgICBzZWxmLl9wYy5vbm5lZ290aWF0aW9ubmVlZGVkID0gbnVsbFxuICAgIHNlbGYuX3BjLm9uZGF0YWNoYW5uZWwgPSBudWxsXG4gIH1cblxuICBpZiAoc2VsZi5fY2hhbm5lbCkge1xuICAgIHRyeSB7XG4gICAgICBzZWxmLl9jaGFubmVsLmNsb3NlKClcbiAgICB9IGNhdGNoIChlcnIpIHt9XG5cbiAgICBzZWxmLl9jaGFubmVsLm9ubWVzc2FnZSA9IG51bGxcbiAgICBzZWxmLl9jaGFubmVsLm9ub3BlbiA9IG51bGxcbiAgICBzZWxmLl9jaGFubmVsLm9uY2xvc2UgPSBudWxsXG4gIH1cbiAgc2VsZi5fcGMgPSBudWxsXG4gIHNlbGYuX2NoYW5uZWwgPSBudWxsXG5cbiAgaWYgKGVycikgc2VsZi5lbWl0KCdlcnJvcicsIGVycilcbiAgc2VsZi5lbWl0KCdjbG9zZScpXG59XG5cblBlZXIucHJvdG90eXBlLl9zZXR1cERhdGEgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHNlbGYuX2NoYW5uZWwgPSBldmVudC5jaGFubmVsXG4gIHNlbGYuX2NoYW5uZWwuYmluYXJ5VHlwZSA9ICdhcnJheWJ1ZmZlcidcblxuICBpZiAodHlwZW9mIHNlbGYuX2NoYW5uZWwuYnVmZmVyZWRBbW91bnRMb3dUaHJlc2hvbGQgPT09ICdudW1iZXInKSB7XG4gICAgc2VsZi5fY2hhbm5lbC5idWZmZXJlZEFtb3VudExvd1RocmVzaG9sZCA9IE1BWF9CVUZGRVJFRF9BTU9VTlRcbiAgfVxuXG4gIHNlbGYuY2hhbm5lbE5hbWUgPSBzZWxmLl9jaGFubmVsLmxhYmVsXG5cbiAgc2VsZi5fY2hhbm5lbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBzZWxmLl9vbkNoYW5uZWxNZXNzYWdlKGV2ZW50KVxuICB9XG4gIHNlbGYuX2NoYW5uZWwub25idWZmZXJlZGFtb3VudGxvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLl9vbkNoYW5uZWxCdWZmZXJlZEFtb3VudExvdygpXG4gIH1cbiAgc2VsZi5fY2hhbm5lbC5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5fb25DaGFubmVsT3BlbigpXG4gIH1cbiAgc2VsZi5fY2hhbm5lbC5vbmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIHNlbGYuX29uQ2hhbm5lbENsb3NlKClcbiAgfVxufVxuXG5QZWVyLnByb3RvdHlwZS5fcmVhZCA9IGZ1bmN0aW9uICgpIHt9XG5cblBlZXIucHJvdG90eXBlLl93cml0ZSA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICBpZiAoc2VsZi5kZXN0cm95ZWQpIHJldHVybiBjYihuZXcgRXJyb3IoJ2Nhbm5vdCB3cml0ZSBhZnRlciBwZWVyIGlzIGRlc3Ryb3llZCcpKVxuXG4gIGlmIChzZWxmLmNvbm5lY3RlZCkge1xuICAgIHRyeSB7XG4gICAgICBzZWxmLnNlbmQoY2h1bmspXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gc2VsZi5fb25FcnJvcihlcnIpXG4gICAgfVxuICAgIGlmIChzZWxmLl9jaGFubmVsLmJ1ZmZlcmVkQW1vdW50ID4gTUFYX0JVRkZFUkVEX0FNT1VOVCkge1xuICAgICAgc2VsZi5fZGVidWcoJ3N0YXJ0IGJhY2twcmVzc3VyZTogYnVmZmVyZWRBbW91bnQgJWQnLCBzZWxmLl9jaGFubmVsLmJ1ZmZlcmVkQW1vdW50KVxuICAgICAgc2VsZi5fY2IgPSBjYlxuICAgIH0gZWxzZSB7XG4gICAgICBjYihudWxsKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzZWxmLl9kZWJ1Zygnd3JpdGUgYmVmb3JlIGNvbm5lY3QnKVxuICAgIHNlbGYuX2NodW5rID0gY2h1bmtcbiAgICBzZWxmLl9jYiA9IGNiXG4gIH1cbn1cblxuLy8gV2hlbiBzdHJlYW0gZmluaXNoZXMgd3JpdGluZywgY2xvc2Ugc29ja2V0LiBIYWxmIG9wZW4gY29ubmVjdGlvbnMgYXJlIG5vdFxuLy8gc3VwcG9ydGVkLlxuUGVlci5wcm90b3R5cGUuX29uRmluaXNoID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgaWYgKHNlbGYuZGVzdHJveWVkKSByZXR1cm5cblxuICBpZiAoc2VsZi5jb25uZWN0ZWQpIHtcbiAgICBkZXN0cm95U29vbigpXG4gIH0gZWxzZSB7XG4gICAgc2VsZi5vbmNlKCdjb25uZWN0JywgZGVzdHJveVNvb24pXG4gIH1cblxuICAvLyBXYWl0IGEgYml0IGJlZm9yZSBkZXN0cm95aW5nIHNvIHRoZSBzb2NrZXQgZmx1c2hlcy5cbiAgLy8gVE9ETzogaXMgdGhlcmUgYSBtb3JlIHJlbGlhYmxlIHdheSB0byBhY2NvbXBsaXNoIHRoaXM/XG4gIGZ1bmN0aW9uIGRlc3Ryb3lTb29uICgpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYuX2Rlc3Ryb3koKVxuICAgIH0sIDEwMClcbiAgfVxufVxuXG5QZWVyLnByb3RvdHlwZS5fY3JlYXRlT2ZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICBpZiAoc2VsZi5kZXN0cm95ZWQpIHJldHVyblxuXG4gIHNlbGYuX3BjLmNyZWF0ZU9mZmVyKGZ1bmN0aW9uIChvZmZlcikge1xuICAgIGlmIChzZWxmLmRlc3Ryb3llZCkgcmV0dXJuXG4gICAgb2ZmZXIuc2RwID0gc2VsZi5zZHBUcmFuc2Zvcm0ob2ZmZXIuc2RwKVxuICAgIHNlbGYuX3BjLnNldExvY2FsRGVzY3JpcHRpb24ob2ZmZXIsIG5vb3AsIGZ1bmN0aW9uIChlcnIpIHsgc2VsZi5fb25FcnJvcihlcnIpIH0pXG4gICAgdmFyIHNlbmRPZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzaWduYWwgPSBzZWxmLl9wYy5sb2NhbERlc2NyaXB0aW9uIHx8IG9mZmVyXG4gICAgICBzZWxmLl9kZWJ1Zygnc2lnbmFsJylcbiAgICAgIHNlbGYuZW1pdCgnc2lnbmFsJywge1xuICAgICAgICB0eXBlOiBzaWduYWwudHlwZSxcbiAgICAgICAgc2RwOiBzaWduYWwuc2RwXG4gICAgICB9KVxuICAgIH1cbiAgICBpZiAoc2VsZi50cmlja2xlIHx8IHNlbGYuX2ljZUNvbXBsZXRlKSBzZW5kT2ZmZXIoKVxuICAgIGVsc2Ugc2VsZi5vbmNlKCdfaWNlQ29tcGxldGUnLCBzZW5kT2ZmZXIpIC8vIHdhaXQgZm9yIGNhbmRpZGF0ZXNcbiAgfSwgZnVuY3Rpb24gKGVycikgeyBzZWxmLl9vbkVycm9yKGVycikgfSwgc2VsZi5vZmZlckNvbnN0cmFpbnRzKVxufVxuXG5QZWVyLnByb3RvdHlwZS5fY3JlYXRlQW5zd2VyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgaWYgKHNlbGYuZGVzdHJveWVkKSByZXR1cm5cblxuICBzZWxmLl9wYy5jcmVhdGVBbnN3ZXIoZnVuY3Rpb24gKGFuc3dlcikge1xuICAgIGlmIChzZWxmLmRlc3Ryb3llZCkgcmV0dXJuXG4gICAgYW5zd2VyLnNkcCA9IHNlbGYuc2RwVHJhbnNmb3JtKGFuc3dlci5zZHApXG4gICAgc2VsZi5fcGMuc2V0TG9jYWxEZXNjcmlwdGlvbihhbnN3ZXIsIG5vb3AsIGZ1bmN0aW9uIChlcnIpIHsgc2VsZi5fb25FcnJvcihlcnIpIH0pXG4gICAgaWYgKHNlbGYudHJpY2tsZSB8fCBzZWxmLl9pY2VDb21wbGV0ZSkgc2VuZEFuc3dlcigpXG4gICAgZWxzZSBzZWxmLm9uY2UoJ19pY2VDb21wbGV0ZScsIHNlbmRBbnN3ZXIpXG5cbiAgICBmdW5jdGlvbiBzZW5kQW5zd2VyICgpIHtcbiAgICAgIHZhciBzaWduYWwgPSBzZWxmLl9wYy5sb2NhbERlc2NyaXB0aW9uIHx8IGFuc3dlclxuICAgICAgc2VsZi5fZGVidWcoJ3NpZ25hbCcpXG4gICAgICBzZWxmLmVtaXQoJ3NpZ25hbCcsIHtcbiAgICAgICAgdHlwZTogc2lnbmFsLnR5cGUsXG4gICAgICAgIHNkcDogc2lnbmFsLnNkcFxuICAgICAgfSlcbiAgICB9XG4gIH0sIGZ1bmN0aW9uIChlcnIpIHsgc2VsZi5fb25FcnJvcihlcnIpIH0sIHNlbGYuYW5zd2VyQ29uc3RyYWludHMpXG59XG5cblBlZXIucHJvdG90eXBlLl9vbkljZUNvbm5lY3Rpb25TdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIGlmIChzZWxmLmRlc3Ryb3llZCkgcmV0dXJuXG4gIHZhciBpY2VHYXRoZXJpbmdTdGF0ZSA9IHNlbGYuX3BjLmljZUdhdGhlcmluZ1N0YXRlXG4gIHZhciBpY2VDb25uZWN0aW9uU3RhdGUgPSBzZWxmLl9wYy5pY2VDb25uZWN0aW9uU3RhdGVcbiAgc2VsZi5fZGVidWcoJ2ljZUNvbm5lY3Rpb25TdGF0ZUNoYW5nZSAlcyAlcycsIGljZUdhdGhlcmluZ1N0YXRlLCBpY2VDb25uZWN0aW9uU3RhdGUpXG4gIHNlbGYuZW1pdCgnaWNlQ29ubmVjdGlvblN0YXRlQ2hhbmdlJywgaWNlR2F0aGVyaW5nU3RhdGUsIGljZUNvbm5lY3Rpb25TdGF0ZSlcbiAgaWYgKGljZUNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2Nvbm5lY3RlZCcgfHwgaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY29tcGxldGVkJykge1xuICAgIGNsZWFyVGltZW91dChzZWxmLl9yZWNvbm5lY3RUaW1lb3V0KVxuICAgIHNlbGYuX3BjUmVhZHkgPSB0cnVlXG4gICAgc2VsZi5fbWF5YmVSZWFkeSgpXG4gIH1cbiAgaWYgKGljZUNvbm5lY3Rpb25TdGF0ZSA9PT0gJ2Rpc2Nvbm5lY3RlZCcpIHtcbiAgICBpZiAoc2VsZi5yZWNvbm5lY3RUaW1lcikge1xuICAgICAgLy8gSWYgdXNlciBoYXMgc2V0IGBvcHQucmVjb25uZWN0VGltZXJgLCBhbGxvdyB0aW1lIGZvciBJQ0UgdG8gYXR0ZW1wdCBhIHJlY29ubmVjdFxuICAgICAgY2xlYXJUaW1lb3V0KHNlbGYuX3JlY29ubmVjdFRpbWVvdXQpXG4gICAgICBzZWxmLl9yZWNvbm5lY3RUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuX2Rlc3Ryb3koKVxuICAgICAgfSwgc2VsZi5yZWNvbm5lY3RUaW1lcilcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5fZGVzdHJveSgpXG4gICAgfVxuICB9XG4gIGlmIChpY2VDb25uZWN0aW9uU3RhdGUgPT09ICdmYWlsZWQnKSB7XG4gICAgc2VsZi5fZGVzdHJveShuZXcgRXJyb3IoJ0ljZSBjb25uZWN0aW9uIGZhaWxlZC4nKSlcbiAgfVxuICBpZiAoaWNlQ29ubmVjdGlvblN0YXRlID09PSAnY2xvc2VkJykge1xuICAgIHNlbGYuX2Rlc3Ryb3koKVxuICB9XG59XG5cblBlZXIucHJvdG90eXBlLmdldFN0YXRzID0gZnVuY3Rpb24gKGNiKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIC8vIFByb21pc2UtYmFzZWQgZ2V0U3RhdHMoKSAoc3RhbmRhcmQpXG4gIGlmIChzZWxmLl9wYy5nZXRTdGF0cy5sZW5ndGggPT09IDApIHtcbiAgICBzZWxmLl9wYy5nZXRTdGF0cygpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgICAgdmFyIHJlcG9ydHMgPSBbXVxuICAgICAgcmVzLmZvckVhY2goZnVuY3Rpb24gKHJlcG9ydCkge1xuICAgICAgICByZXBvcnRzLnB1c2gocmVwb3J0KVxuICAgICAgfSlcbiAgICAgIGNiKG51bGwsIHJlcG9ydHMpXG4gICAgfSwgZnVuY3Rpb24gKGVycikgeyBjYihlcnIpIH0pXG5cbiAgLy8gVHdvLXBhcmFtZXRlciBjYWxsYmFjay1iYXNlZCBnZXRTdGF0cygpIChkZXByZWNhdGVkLCBmb3JtZXIgc3RhbmRhcmQpXG4gIH0gZWxzZSBpZiAoc2VsZi5faXNSZWFjdE5hdGl2ZVdlYnJ0Yykge1xuICAgIHNlbGYuX3BjLmdldFN0YXRzKG51bGwsIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIHZhciByZXBvcnRzID0gW11cbiAgICAgIHJlcy5mb3JFYWNoKGZ1bmN0aW9uIChyZXBvcnQpIHtcbiAgICAgICAgcmVwb3J0cy5wdXNoKHJlcG9ydClcbiAgICAgIH0pXG4gICAgICBjYihudWxsLCByZXBvcnRzKVxuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHsgY2IoZXJyKSB9KVxuXG4gIC8vIFNpbmdsZS1wYXJhbWV0ZXIgY2FsbGJhY2stYmFzZWQgZ2V0U3RhdHMoKSAobm9uLXN0YW5kYXJkKVxuICB9IGVsc2UgaWYgKHNlbGYuX3BjLmdldFN0YXRzLmxlbmd0aCA+IDApIHtcbiAgICBzZWxmLl9wYy5nZXRTdGF0cyhmdW5jdGlvbiAocmVzKSB7XG4gICAgICB2YXIgcmVwb3J0cyA9IFtdXG4gICAgICByZXMucmVzdWx0KCkuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIHZhciByZXBvcnQgPSB7fVxuICAgICAgICByZXN1bHQubmFtZXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgcmVwb3J0W25hbWVdID0gcmVzdWx0LnN0YXQobmFtZSlcbiAgICAgICAgfSlcbiAgICAgICAgcmVwb3J0LmlkID0gcmVzdWx0LmlkXG4gICAgICAgIHJlcG9ydC50eXBlID0gcmVzdWx0LnR5cGVcbiAgICAgICAgcmVwb3J0LnRpbWVzdGFtcCA9IHJlc3VsdC50aW1lc3RhbXBcbiAgICAgICAgcmVwb3J0cy5wdXNoKHJlcG9ydClcbiAgICAgIH0pXG4gICAgICBjYihudWxsLCByZXBvcnRzKVxuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHsgY2IoZXJyKSB9KVxuXG4gIC8vIFVua25vd24gYnJvd3Nlciwgc2tpcCBnZXRTdGF0cygpIHNpbmNlIGl0J3MgYW55b25lJ3MgZ3Vlc3Mgd2hpY2ggc3R5bGUgb2ZcbiAgLy8gZ2V0U3RhdHMoKSB0aGV5IGltcGxlbWVudC5cbiAgfSBlbHNlIHtcbiAgICBjYihudWxsLCBbXSlcbiAgfVxufVxuXG5QZWVyLnByb3RvdHlwZS5fbWF5YmVSZWFkeSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHNlbGYuX2RlYnVnKCdtYXliZVJlYWR5IHBjICVzIGNoYW5uZWwgJXMnLCBzZWxmLl9wY1JlYWR5LCBzZWxmLl9jaGFubmVsUmVhZHkpXG4gIGlmIChzZWxmLmNvbm5lY3RlZCB8fCBzZWxmLl9jb25uZWN0aW5nIHx8ICFzZWxmLl9wY1JlYWR5IHx8ICFzZWxmLl9jaGFubmVsUmVhZHkpIHJldHVyblxuICBzZWxmLl9jb25uZWN0aW5nID0gdHJ1ZVxuXG4gIHNlbGYuZ2V0U3RhdHMoZnVuY3Rpb24gKGVyciwgaXRlbXMpIHtcbiAgICAvLyBUcmVhdCBnZXRTdGF0cyBlcnJvciBhcyBub24tZmF0YWwuIEl0J3Mgbm90IGVzc2VudGlhbC5cbiAgICBpZiAoZXJyKSBpdGVtcyA9IFtdXG5cbiAgICBzZWxmLl9jb25uZWN0aW5nID0gZmFsc2VcbiAgICBzZWxmLmNvbm5lY3RlZCA9IHRydWVcblxuICAgIHZhciByZW1vdGVDYW5kaWRhdGVzID0ge31cbiAgICB2YXIgbG9jYWxDYW5kaWRhdGVzID0ge31cbiAgICB2YXIgY2FuZGlkYXRlUGFpcnMgPSB7fVxuXG4gICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgLy8gVE9ETzogT25jZSBhbGwgYnJvd3NlcnMgc3VwcG9ydCB0aGUgaHlwaGVuYXRlZCBzdGF0cyByZXBvcnQgdHlwZXMsIHJlbW92ZVxuICAgICAgLy8gdGhlIG5vbi1oeXBlbmF0ZWQgb25lc1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3JlbW90ZWNhbmRpZGF0ZScgfHwgaXRlbS50eXBlID09PSAncmVtb3RlLWNhbmRpZGF0ZScpIHtcbiAgICAgICAgcmVtb3RlQ2FuZGlkYXRlc1tpdGVtLmlkXSA9IGl0ZW1cbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdsb2NhbGNhbmRpZGF0ZScgfHwgaXRlbS50eXBlID09PSAnbG9jYWwtY2FuZGlkYXRlJykge1xuICAgICAgICBsb2NhbENhbmRpZGF0ZXNbaXRlbS5pZF0gPSBpdGVtXG4gICAgICB9XG4gICAgICBpZiAoaXRlbS50eXBlID09PSAnY2FuZGlkYXRlcGFpcicgfHwgaXRlbS50eXBlID09PSAnY2FuZGlkYXRlLXBhaXInKSB7XG4gICAgICAgIGNhbmRpZGF0ZVBhaXJzW2l0ZW0uaWRdID0gaXRlbVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAvLyBTcGVjLWNvbXBsaWFudFxuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ3RyYW5zcG9ydCcpIHtcbiAgICAgICAgc2V0U2VsZWN0ZWRDYW5kaWRhdGVQYWlyKGNhbmRpZGF0ZVBhaXJzW2l0ZW0uc2VsZWN0ZWRDYW5kaWRhdGVQYWlySWRdKVxuICAgICAgfVxuXG4gICAgICAvLyBPbGQgaW1wbGVtZW50YXRpb25zXG4gICAgICBpZiAoXG4gICAgICAgIChpdGVtLnR5cGUgPT09ICdnb29nQ2FuZGlkYXRlUGFpcicgJiYgaXRlbS5nb29nQWN0aXZlQ29ubmVjdGlvbiA9PT0gJ3RydWUnKSB8fFxuICAgICAgICAoKGl0ZW0udHlwZSA9PT0gJ2NhbmRpZGF0ZXBhaXInIHx8IGl0ZW0udHlwZSA9PT0gJ2NhbmRpZGF0ZS1wYWlyJykgJiYgaXRlbS5zZWxlY3RlZClcbiAgICAgICkge1xuICAgICAgICBzZXRTZWxlY3RlZENhbmRpZGF0ZVBhaXIoaXRlbSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gc2V0U2VsZWN0ZWRDYW5kaWRhdGVQYWlyIChzZWxlY3RlZENhbmRpZGF0ZVBhaXIpIHtcbiAgICAgIHZhciBsb2NhbCA9IGxvY2FsQ2FuZGlkYXRlc1tzZWxlY3RlZENhbmRpZGF0ZVBhaXIubG9jYWxDYW5kaWRhdGVJZF1cblxuICAgICAgaWYgKGxvY2FsICYmIGxvY2FsLmlwKSB7XG4gICAgICAgIC8vIFNwZWNcbiAgICAgICAgc2VsZi5sb2NhbEFkZHJlc3MgPSBsb2NhbC5pcFxuICAgICAgICBzZWxmLmxvY2FsUG9ydCA9IE51bWJlcihsb2NhbC5wb3J0KVxuICAgICAgfSBlbHNlIGlmIChsb2NhbCAmJiBsb2NhbC5pcEFkZHJlc3MpIHtcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBzZWxmLmxvY2FsQWRkcmVzcyA9IGxvY2FsLmlwQWRkcmVzc1xuICAgICAgICBzZWxmLmxvY2FsUG9ydCA9IE51bWJlcihsb2NhbC5wb3J0TnVtYmVyKVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0ZWRDYW5kaWRhdGVQYWlyLmdvb2dMb2NhbEFkZHJlc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIFRPRE86IHJlbW92ZSB0aGlzIG9uY2UgQ2hyb21lIDU4IGlzIHJlbGVhc2VkXG4gICAgICAgIGxvY2FsID0gc2VsZWN0ZWRDYW5kaWRhdGVQYWlyLmdvb2dMb2NhbEFkZHJlc3Muc3BsaXQoJzonKVxuICAgICAgICBzZWxmLmxvY2FsQWRkcmVzcyA9IGxvY2FsWzBdXG4gICAgICAgIHNlbGYubG9jYWxQb3J0ID0gTnVtYmVyKGxvY2FsWzFdKVxuICAgICAgfVxuXG4gICAgICB2YXIgcmVtb3RlID0gcmVtb3RlQ2FuZGlkYXRlc1tzZWxlY3RlZENhbmRpZGF0ZVBhaXIucmVtb3RlQ2FuZGlkYXRlSWRdXG5cbiAgICAgIGlmIChyZW1vdGUgJiYgcmVtb3RlLmlwKSB7XG4gICAgICAgIC8vIFNwZWNcbiAgICAgICAgc2VsZi5yZW1vdGVBZGRyZXNzID0gcmVtb3RlLmlwXG4gICAgICAgIHNlbGYucmVtb3RlUG9ydCA9IE51bWJlcihyZW1vdGUucG9ydClcbiAgICAgIH0gZWxzZSBpZiAocmVtb3RlICYmIHJlbW90ZS5pcEFkZHJlc3MpIHtcbiAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICBzZWxmLnJlbW90ZUFkZHJlc3MgPSByZW1vdGUuaXBBZGRyZXNzXG4gICAgICAgIHNlbGYucmVtb3RlUG9ydCA9IE51bWJlcihyZW1vdGUucG9ydE51bWJlcilcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGVjdGVkQ2FuZGlkYXRlUGFpci5nb29nUmVtb3RlQWRkcmVzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gVE9ETzogcmVtb3ZlIHRoaXMgb25jZSBDaHJvbWUgNTggaXMgcmVsZWFzZWRcbiAgICAgICAgcmVtb3RlID0gc2VsZWN0ZWRDYW5kaWRhdGVQYWlyLmdvb2dSZW1vdGVBZGRyZXNzLnNwbGl0KCc6JylcbiAgICAgICAgc2VsZi5yZW1vdGVBZGRyZXNzID0gcmVtb3RlWzBdXG4gICAgICAgIHNlbGYucmVtb3RlUG9ydCA9IE51bWJlcihyZW1vdGVbMV0pXG4gICAgICB9XG4gICAgICBzZWxmLnJlbW90ZUZhbWlseSA9ICdJUHY0J1xuXG4gICAgICBzZWxmLl9kZWJ1ZyhcbiAgICAgICAgJ2Nvbm5lY3QgbG9jYWw6ICVzOiVzIHJlbW90ZTogJXM6JXMnLFxuICAgICAgICBzZWxmLmxvY2FsQWRkcmVzcywgc2VsZi5sb2NhbFBvcnQsIHNlbGYucmVtb3RlQWRkcmVzcywgc2VsZi5yZW1vdGVQb3J0XG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHNlbGYuX2NodW5rKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZWxmLnNlbmQoc2VsZi5fY2h1bmspXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIHNlbGYuX29uRXJyb3IoZXJyKVxuICAgICAgfVxuICAgICAgc2VsZi5fY2h1bmsgPSBudWxsXG4gICAgICBzZWxmLl9kZWJ1Zygnc2VudCBjaHVuayBmcm9tIFwid3JpdGUgYmVmb3JlIGNvbm5lY3RcIicpXG5cbiAgICAgIHZhciBjYiA9IHNlbGYuX2NiXG4gICAgICBzZWxmLl9jYiA9IG51bGxcbiAgICAgIGNiKG51bGwpXG4gICAgfVxuXG4gICAgLy8gSWYgYGJ1ZmZlcmVkQW1vdW50TG93VGhyZXNob2xkYCBhbmQgJ29uYnVmZmVyZWRhbW91bnRsb3cnIGFyZSB1bnN1cHBvcnRlZCxcbiAgICAvLyBmYWxsYmFjayB0byB1c2luZyBzZXRJbnRlcnZhbCB0byBpbXBsZW1lbnQgYmFja3ByZXNzdXJlLlxuICAgIGlmICh0eXBlb2Ygc2VsZi5fY2hhbm5lbC5idWZmZXJlZEFtb3VudExvd1RocmVzaG9sZCAhPT0gJ251bWJlcicpIHtcbiAgICAgIHNlbGYuX2ludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkgeyBzZWxmLl9vbkludGVydmFsKCkgfSwgMTUwKVxuICAgICAgaWYgKHNlbGYuX2ludGVydmFsLnVucmVmKSBzZWxmLl9pbnRlcnZhbC51bnJlZigpXG4gICAgfVxuXG4gICAgc2VsZi5fZGVidWcoJ2Nvbm5lY3QnKVxuICAgIHNlbGYuZW1pdCgnY29ubmVjdCcpXG4gIH0pXG59XG5cblBlZXIucHJvdG90eXBlLl9vbkludGVydmFsID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMuX2NiIHx8ICF0aGlzLl9jaGFubmVsIHx8IHRoaXMuX2NoYW5uZWwuYnVmZmVyZWRBbW91bnQgPiBNQVhfQlVGRkVSRURfQU1PVU5UKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgdGhpcy5fb25DaGFubmVsQnVmZmVyZWRBbW91bnRMb3coKVxufVxuXG5QZWVyLnByb3RvdHlwZS5fb25TaWduYWxpbmdTdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIGlmIChzZWxmLmRlc3Ryb3llZCkgcmV0dXJuXG4gIHNlbGYuX2RlYnVnKCdzaWduYWxpbmdTdGF0ZUNoYW5nZSAlcycsIHNlbGYuX3BjLnNpZ25hbGluZ1N0YXRlKVxuICBzZWxmLmVtaXQoJ3NpZ25hbGluZ1N0YXRlQ2hhbmdlJywgc2VsZi5fcGMuc2lnbmFsaW5nU3RhdGUpXG59XG5cblBlZXIucHJvdG90eXBlLl9vbkljZUNhbmRpZGF0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgaWYgKHNlbGYuZGVzdHJveWVkKSByZXR1cm5cbiAgaWYgKGV2ZW50LmNhbmRpZGF0ZSAmJiBzZWxmLnRyaWNrbGUpIHtcbiAgICBzZWxmLmVtaXQoJ3NpZ25hbCcsIHtcbiAgICAgIGNhbmRpZGF0ZToge1xuICAgICAgICBjYW5kaWRhdGU6IGV2ZW50LmNhbmRpZGF0ZS5jYW5kaWRhdGUsXG4gICAgICAgIHNkcE1MaW5lSW5kZXg6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNTGluZUluZGV4LFxuICAgICAgICBzZHBNaWQ6IGV2ZW50LmNhbmRpZGF0ZS5zZHBNaWRcbiAgICAgIH1cbiAgICB9KVxuICB9IGVsc2UgaWYgKCFldmVudC5jYW5kaWRhdGUpIHtcbiAgICBzZWxmLl9pY2VDb21wbGV0ZSA9IHRydWVcbiAgICBzZWxmLmVtaXQoJ19pY2VDb21wbGV0ZScpXG4gIH1cbn1cblxuUGVlci5wcm90b3R5cGUuX29uQ2hhbm5lbE1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIGlmIChzZWxmLmRlc3Ryb3llZCkgcmV0dXJuXG4gIHZhciBkYXRhID0gZXZlbnQuZGF0YVxuICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSBkYXRhID0gbmV3IEJ1ZmZlcihkYXRhKVxuICBzZWxmLnB1c2goZGF0YSlcbn1cblxuUGVlci5wcm90b3R5cGUuX29uQ2hhbm5lbEJ1ZmZlcmVkQW1vdW50TG93ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgaWYgKHNlbGYuZGVzdHJveWVkIHx8ICFzZWxmLl9jYikgcmV0dXJuXG4gIHNlbGYuX2RlYnVnKCdlbmRpbmcgYmFja3ByZXNzdXJlOiBidWZmZXJlZEFtb3VudCAlZCcsIHNlbGYuX2NoYW5uZWwuYnVmZmVyZWRBbW91bnQpXG4gIHZhciBjYiA9IHNlbGYuX2NiXG4gIHNlbGYuX2NiID0gbnVsbFxuICBjYihudWxsKVxufVxuXG5QZWVyLnByb3RvdHlwZS5fb25DaGFubmVsT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIGlmIChzZWxmLmNvbm5lY3RlZCB8fCBzZWxmLmRlc3Ryb3llZCkgcmV0dXJuXG4gIHNlbGYuX2RlYnVnKCdvbiBjaGFubmVsIG9wZW4nKVxuICBzZWxmLl9jaGFubmVsUmVhZHkgPSB0cnVlXG4gIHNlbGYuX21heWJlUmVhZHkoKVxufVxuXG5QZWVyLnByb3RvdHlwZS5fb25DaGFubmVsQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICBpZiAoc2VsZi5kZXN0cm95ZWQpIHJldHVyblxuICBzZWxmLl9kZWJ1Zygnb24gY2hhbm5lbCBjbG9zZScpXG4gIHNlbGYuX2Rlc3Ryb3koKVxufVxuXG5QZWVyLnByb3RvdHlwZS5fb25BZGRTdHJlYW0gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIGlmIChzZWxmLmRlc3Ryb3llZCkgcmV0dXJuXG4gIHNlbGYuX2RlYnVnKCdvbiBhZGQgc3RyZWFtJylcbiAgc2VsZi5lbWl0KCdzdHJlYW0nLCBldmVudC5zdHJlYW0pXG59XG5cblBlZXIucHJvdG90eXBlLl9vblRyYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHZhciBzZWxmID0gdGhpc1xuICBpZiAoc2VsZi5kZXN0cm95ZWQpIHJldHVyblxuICBzZWxmLl9kZWJ1Zygnb24gdHJhY2snKVxuICB2YXIgaWQgPSBldmVudC5zdHJlYW1zWzBdLmlkXG4gIGlmIChzZWxmLl9wcmV2aW91c1N0cmVhbXMuaW5kZXhPZihpZCkgIT09IC0xKSByZXR1cm4gLy8gT25seSBmaXJlIG9uZSAnc3RyZWFtJyBldmVudCwgZXZlbiB0aG91Z2ggdGhlcmUgbWF5IGJlIG11bHRpcGxlIHRyYWNrcyBwZXIgc3RyZWFtXG4gIHNlbGYuX3ByZXZpb3VzU3RyZWFtcy5wdXNoKGlkKVxuICBzZWxmLmVtaXQoJ3N0cmVhbScsIGV2ZW50LnN0cmVhbXNbMF0pXG59XG5cblBlZXIucHJvdG90eXBlLl9vbkVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgaWYgKHNlbGYuZGVzdHJveWVkKSByZXR1cm5cbiAgc2VsZi5fZGVidWcoJ2Vycm9yICVzJywgZXJyLm1lc3NhZ2UgfHwgZXJyKVxuICBzZWxmLl9kZXN0cm95KGVycilcbn1cblxuUGVlci5wcm90b3R5cGUuX2RlYnVnID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgYXJnc1swXSA9ICdbJyArIHNlbGYuX2lkICsgJ10gJyArIGFyZ3NbMF1cbiAgZGVidWcuYXBwbHkobnVsbCwgYXJncylcbn1cblxuLy8gVHJhbnNmb3JtIGNvbnN0cmFpbnRzIG9iamVjdHMgaW50byB0aGUgbmV3IGZvcm1hdCAodW5sZXNzIENocm9taXVtKVxuLy8gVE9ETzogVGhpcyBjYW4gYmUgcmVtb3ZlZCB3aGVuIENocm9taXVtIHN1cHBvcnRzIHRoZSBuZXcgZm9ybWF0XG5QZWVyLnByb3RvdHlwZS5fdHJhbnNmb3JtQ29uc3RyYWludHMgPSBmdW5jdGlvbiAoY29uc3RyYWludHMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgaWYgKE9iamVjdC5rZXlzKGNvbnN0cmFpbnRzKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gY29uc3RyYWludHNcbiAgfVxuXG4gIGlmICgoY29uc3RyYWludHMubWFuZGF0b3J5IHx8IGNvbnN0cmFpbnRzLm9wdGlvbmFsKSAmJiAhc2VsZi5faXNDaHJvbWl1bSkge1xuICAgIC8vIGNvbnZlcnQgdG8gbmV3IGZvcm1hdFxuXG4gICAgLy8gTWVyZ2UgbWFuZGF0b3J5IGFuZCBvcHRpb25hbCBvYmplY3RzLCBwcmlvcml0aXppbmcgbWFuZGF0b3J5XG4gICAgdmFyIG5ld0NvbnN0cmFpbnRzID0gT2JqZWN0LmFzc2lnbih7fSwgY29uc3RyYWludHMub3B0aW9uYWwsIGNvbnN0cmFpbnRzLm1hbmRhdG9yeSlcblxuICAgIC8vIGZpeCBjYXNpbmdcbiAgICBpZiAobmV3Q29uc3RyYWludHMuT2ZmZXJUb1JlY2VpdmVWaWRlbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdDb25zdHJhaW50cy5vZmZlclRvUmVjZWl2ZVZpZGVvID0gbmV3Q29uc3RyYWludHMuT2ZmZXJUb1JlY2VpdmVWaWRlb1xuICAgICAgZGVsZXRlIG5ld0NvbnN0cmFpbnRzWydPZmZlclRvUmVjZWl2ZVZpZGVvJ11cbiAgICB9XG5cbiAgICBpZiAobmV3Q29uc3RyYWludHMuT2ZmZXJUb1JlY2VpdmVBdWRpbyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdDb25zdHJhaW50cy5vZmZlclRvUmVjZWl2ZUF1ZGlvID0gbmV3Q29uc3RyYWludHMuT2ZmZXJUb1JlY2VpdmVBdWRpb1xuICAgICAgZGVsZXRlIG5ld0NvbnN0cmFpbnRzWydPZmZlclRvUmVjZWl2ZUF1ZGlvJ11cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3Q29uc3RyYWludHNcbiAgfSBlbHNlIGlmICghY29uc3RyYWludHMubWFuZGF0b3J5ICYmICFjb25zdHJhaW50cy5vcHRpb25hbCAmJiBzZWxmLl9pc0Nocm9taXVtKSB7XG4gICAgLy8gY29udmVydCB0byBvbGQgZm9ybWF0XG5cbiAgICAvLyBmaXggY2FzaW5nXG4gICAgaWYgKGNvbnN0cmFpbnRzLm9mZmVyVG9SZWNlaXZlVmlkZW8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3RyYWludHMuT2ZmZXJUb1JlY2VpdmVWaWRlbyA9IGNvbnN0cmFpbnRzLm9mZmVyVG9SZWNlaXZlVmlkZW9cbiAgICAgIGRlbGV0ZSBjb25zdHJhaW50c1snb2ZmZXJUb1JlY2VpdmVWaWRlbyddXG4gICAgfVxuXG4gICAgaWYgKGNvbnN0cmFpbnRzLm9mZmVyVG9SZWNlaXZlQXVkaW8gIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3RyYWludHMuT2ZmZXJUb1JlY2VpdmVBdWRpbyA9IGNvbnN0cmFpbnRzLm9mZmVyVG9SZWNlaXZlQXVkaW9cbiAgICAgIGRlbGV0ZSBjb25zdHJhaW50c1snb2ZmZXJUb1JlY2VpdmVBdWRpbyddXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1hbmRhdG9yeTogY29uc3RyYWludHMgLy8gTk9URTogQWxsIGNvbnN0cmFpbnRzIGFyZSB1cGdyYWRlZCB0byBtYW5kYXRvcnlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uc3RyYWludHNcbn1cblxuZnVuY3Rpb24gbm9vcCAoKSB7fVxuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIpXG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldDp1dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5emFXMXdiR1V0Y0dWbGNpOXBibVJsZUM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU8wRkJRVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFaUxDSm1hV3hsSWpvaVoyVnVaWEpoZEdWa0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdVR1ZsY2x4dVhHNTJZWElnWkdWaWRXY2dQU0J5WlhGMWFYSmxLQ2RrWldKMVp5Y3BLQ2R6YVcxd2JHVXRjR1ZsY2ljcFhHNTJZWElnWjJWMFFuSnZkM05sY2xKVVF5QTlJSEpsY1hWcGNtVW9KMmRsZEMxaWNtOTNjMlZ5TFhKMFl5Y3BYRzUyWVhJZ2FXNW9aWEpwZEhNZ1BTQnlaWEYxYVhKbEtDZHBibWhsY21sMGN5Y3BYRzUyWVhJZ2NtRnVaRzl0WW5sMFpYTWdQU0J5WlhGMWFYSmxLQ2R5WVc1a2IyMWllWFJsY3ljcFhHNTJZWElnYzNSeVpXRnRJRDBnY21WeGRXbHlaU2duY21WaFpHRmliR1V0YzNSeVpXRnRKeWxjYmx4dWRtRnlJRTFCV0Y5Q1ZVWkdSVkpGUkY5QlRVOVZUbFFnUFNBMk5DQXFJREV3TWpSY2JseHVhVzVvWlhKcGRITW9VR1ZsY2l3Z2MzUnlaV0Z0TGtSMWNHeGxlQ2xjYmx4dUx5b3FYRzRnS2lCWFpXSlNWRU1nY0dWbGNpQmpiMjV1WldOMGFXOXVMaUJUWVcxbElFRlFTU0JoY3lCdWIyUmxJR052Y21VZ1lHNWxkQzVUYjJOclpYUmdMQ0J3YkhWeklHRWdabVYzSUdWNGRISmhJRzFsZEdodlpITXVYRzRnS2lCRWRYQnNaWGdnYzNSeVpXRnRMbHh1SUNvZ1FIQmhjbUZ0SUh0UFltcGxZM1I5SUc5d2RITmNiaUFxTDF4dVpuVnVZM1JwYjI0Z1VHVmxjaUFvYjNCMGN5a2dlMXh1SUNCMllYSWdjMlZzWmlBOUlIUm9hWE5jYmlBZ2FXWWdLQ0VvYzJWc1ppQnBibk4wWVc1alpXOW1JRkJsWlhJcEtTQnlaWFIxY200Z2JtVjNJRkJsWlhJb2IzQjBjeWxjYmx4dUlDQnpaV3htTGw5cFpDQTlJSEpoYm1SdmJXSjVkR1Z6S0RRcExuUnZVM1J5YVc1bktDZG9aWGduS1M1emJHbGpaU2d3TENBM0tWeHVJQ0J6Wld4bUxsOWtaV0oxWnlnbmJtVjNJSEJsWlhJZ0pXOG5MQ0J2Y0hSektWeHVYRzRnSUc5d2RITWdQU0JQWW1wbFkzUXVZWE56YVdkdUtIdGNiaUFnSUNCaGJHeHZkMGhoYkdaUGNHVnVPaUJtWVd4elpWeHVJQ0I5TENCdmNIUnpLVnh1WEc0Z0lITjBjbVZoYlM1RWRYQnNaWGd1WTJGc2JDaHpaV3htTENCdmNIUnpLVnh1WEc0Z0lITmxiR1l1WTJoaGJtNWxiRTVoYldVZ1BTQnZjSFJ6TG1sdWFYUnBZWFJ2Y2x4dUlDQWdJRDhnYjNCMGN5NWphR0Z1Ym1Wc1RtRnRaU0I4ZkNCeVlXNWtiMjFpZVhSbGN5Z3lNQ2t1ZEc5VGRISnBibWNvSjJobGVDY3BYRzRnSUNBZ09pQnVkV3hzWEc1Y2JpQWdMeThnVG1WbFpHVmtJR0o1SUY5MGNtRnVjMlp2Y20xRGIyNXpkSEpoYVc1MGN5d2djMjhnYzJWMElIUm9hWE1nWldGeWJIbGNiaUFnYzJWc1ppNWZhWE5EYUhKdmJXbDFiU0E5SUhSNWNHVnZaaUIzYVc1a2IzY2dJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JQ0VoZDJsdVpHOTNMbmRsWW10cGRGSlVRMUJsWlhKRGIyNXVaV04wYVc5dVhHNWNiaUFnYzJWc1ppNXBibWwwYVdGMGIzSWdQU0J2Y0hSekxtbHVhWFJwWVhSdmNpQjhmQ0JtWVd4elpWeHVJQ0J6Wld4bUxtTm9ZVzV1Wld4RGIyNW1hV2NnUFNCdmNIUnpMbU5vWVc1dVpXeERiMjVtYVdjZ2ZId2dVR1ZsY2k1amFHRnVibVZzUTI5dVptbG5YRzRnSUhObGJHWXVZMjl1Wm1sbklEMGdiM0IwY3k1amIyNW1hV2NnZkh3Z1VHVmxjaTVqYjI1bWFXZGNiaUFnYzJWc1ppNWpiMjV6ZEhKaGFXNTBjeUE5SUhObGJHWXVYM1J5WVc1elptOXliVU52Ym5OMGNtRnBiblJ6S0c5d2RITXVZMjl1YzNSeVlXbHVkSE1nZkh3Z1VHVmxjaTVqYjI1emRISmhhVzUwY3lsY2JpQWdjMlZzWmk1dlptWmxja052Ym5OMGNtRnBiblJ6SUQwZ2MyVnNaaTVmZEhKaGJuTm1iM0p0UTI5dWMzUnlZV2x1ZEhNb2IzQjBjeTV2Wm1abGNrTnZibk4wY21GcGJuUnpJSHg4SUh0OUtWeHVJQ0J6Wld4bUxtRnVjM2RsY2tOdmJuTjBjbUZwYm5SeklEMGdjMlZzWmk1ZmRISmhibk5tYjNKdFEyOXVjM1J5WVdsdWRITW9iM0IwY3k1aGJuTjNaWEpEYjI1emRISmhhVzUwY3lCOGZDQjdmU2xjYmlBZ2MyVnNaaTV5WldOdmJtNWxZM1JVYVcxbGNpQTlJRzl3ZEhNdWNtVmpiMjV1WldOMFZHbHRaWElnZkh3Z1ptRnNjMlZjYmlBZ2MyVnNaaTV6WkhCVWNtRnVjMlp2Y20wZ1BTQnZjSFJ6TG5Oa2NGUnlZVzV6Wm05eWJTQjhmQ0JtZFc1amRHbHZiaUFvYzJSd0tTQjdJSEpsZEhWeWJpQnpaSEFnZlZ4dUlDQnpaV3htTG5OMGNtVmhiU0E5SUc5d2RITXVjM1J5WldGdElIeDhJR1poYkhObFhHNGdJSE5sYkdZdWRISnBZMnRzWlNBOUlHOXdkSE11ZEhKcFkydHNaU0FoUFQwZ2RXNWtaV1pwYm1Wa0lEOGdiM0IwY3k1MGNtbGphMnhsSURvZ2RISjFaVnh1WEc0Z0lITmxiR1l1WkdWemRISnZlV1ZrSUQwZ1ptRnNjMlZjYmlBZ2MyVnNaaTVqYjI1dVpXTjBaV1FnUFNCbVlXeHpaVnh1WEc0Z0lITmxiR1l1Y21WdGIzUmxRV1JrY21WemN5QTlJSFZ1WkdWbWFXNWxaRnh1SUNCelpXeG1MbkpsYlc5MFpVWmhiV2xzZVNBOUlIVnVaR1ZtYVc1bFpGeHVJQ0J6Wld4bUxuSmxiVzkwWlZCdmNuUWdQU0IxYm1SbFptbHVaV1JjYmlBZ2MyVnNaaTVzYjJOaGJFRmtaSEpsYzNNZ1BTQjFibVJsWm1sdVpXUmNiaUFnYzJWc1ppNXNiMk5oYkZCdmNuUWdQU0IxYm1SbFptbHVaV1JjYmx4dUlDQnpaV3htTGw5M2NuUmpJRDBnS0c5d2RITXVkM0owWXlBbUppQjBlWEJsYjJZZ2IzQjBjeTUzY25SaklEMDlQU0FuYjJKcVpXTjBKeWxjYmlBZ0lDQS9JRzl3ZEhNdWQzSjBZMXh1SUNBZ0lEb2daMlYwUW5KdmQzTmxjbEpVUXlncFhHNWNiaUFnYVdZZ0tDRnpaV3htTGw5M2NuUmpLU0I3WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUIzYVc1a2IzY2dQVDA5SUNkMWJtUmxabWx1WldRbktTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0owNXZJRmRsWWxKVVF5QnpkWEJ3YjNKME9pQlRjR1ZqYVdaNUlHQnZjSFJ6TG5keWRHTmdJRzl3ZEdsdmJpQnBiaUIwYUdseklHVnVkbWx5YjI1dFpXNTBKeWxjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0NkT2J5QlhaV0pTVkVNZ2MzVndjRzl5ZERvZ1RtOTBJR0VnYzNWd2NHOXlkR1ZrSUdKeWIzZHpaWEluS1Z4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhObGJHWXVYM0JqVW1WaFpIa2dQU0JtWVd4elpWeHVJQ0J6Wld4bUxsOWphR0Z1Ym1Wc1VtVmhaSGtnUFNCbVlXeHpaVnh1SUNCelpXeG1MbDlwWTJWRGIyMXdiR1YwWlNBOUlHWmhiSE5sSUM4dklHbGpaU0JqWVc1a2FXUmhkR1VnZEhKcFkydHNaU0JrYjI1bElDaG5iM1FnYm5Wc2JDQmpZVzVrYVdSaGRHVXBYRzRnSUhObGJHWXVYMk5vWVc1dVpXd2dQU0J1ZFd4c1hHNGdJSE5sYkdZdVgzQmxibVJwYm1kRFlXNWthV1JoZEdWeklEMGdXMTFjYmlBZ2MyVnNaaTVmY0hKbGRtbHZkWE5UZEhKbFlXMXpJRDBnVzExY2JseHVJQ0J6Wld4bUxsOWphSFZ1YXlBOUlHNTFiR3hjYmlBZ2MyVnNaaTVmWTJJZ1BTQnVkV3hzWEc0Z0lITmxiR1l1WDJsdWRHVnlkbUZzSUQwZ2JuVnNiRnh1SUNCelpXeG1MbDl5WldOdmJtNWxZM1JVYVcxbGIzVjBJRDBnYm5Wc2JGeHVYRzRnSUhObGJHWXVYM0JqSUQwZ2JtVjNJQ2h6Wld4bUxsOTNjblJqTGxKVVExQmxaWEpEYjI1dVpXTjBhVzl1S1NoelpXeG1MbU52Ym1acFp5d2djMlZzWmk1amIyNXpkSEpoYVc1MGN5bGNibHh1SUNBdkx5QlhaU0J3Y21WbVpYSWdabVZoZEhWeVpTQmtaWFJsWTNScGIyNGdkMmhsYm1WMlpYSWdjRzl6YzJsaWJHVXNJR0oxZENCemIyMWxkR2x0WlhNZ2RHaGhkQ2R6SUc1dmRGeHVJQ0F2THlCd2IzTnphV0pzWlNCbWIzSWdZMlZ5ZEdGcGJpQnBiWEJzWlcxbGJuUmhkR2x2Ym5NdVhHNGdJSE5sYkdZdVgybHpWM0owWXlBOUlFRnljbUY1TG1selFYSnlZWGtvYzJWc1ppNWZjR011VWxSRFNXTmxRMjl1Ym1WamRHbHZibE4wWVhSbGN5bGNiaUFnYzJWc1ppNWZhWE5TWldGamRFNWhkR2wyWlZkbFluSjBZeUE5SUhSNWNHVnZaaUJ6Wld4bUxsOXdZeTVmY0dWbGNrTnZibTVsWTNScGIyNUpaQ0E5UFQwZ0oyNTFiV0psY2lkY2JseHVJQ0J6Wld4bUxsOXdZeTV2Ym1salpXTnZibTVsWTNScGIyNXpkR0YwWldOb1lXNW5aU0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCelpXeG1MbDl2YmtsalpVTnZibTVsWTNScGIyNVRkR0YwWlVOb1lXNW5aU2dwWEc0Z0lIMWNiaUFnYzJWc1ppNWZjR011YjI1emFXZHVZV3hwYm1kemRHRjBaV05vWVc1blpTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0J6Wld4bUxsOXZibE5wWjI1aGJHbHVaMU4wWVhSbFEyaGhibWRsS0NsY2JpQWdmVnh1SUNCelpXeG1MbDl3WXk1dmJtbGpaV05oYm1ScFpHRjBaU0E5SUdaMWJtTjBhVzl1SUNobGRtVnVkQ2tnZTF4dUlDQWdJSE5sYkdZdVgyOXVTV05sUTJGdVpHbGtZWFJsS0dWMlpXNTBLVnh1SUNCOVhHNWNiaUFnYVdZZ0tITmxiR1l1YVc1cGRHbGhkRzl5S1NCN1hHNGdJQ0FnZG1GeUlHTnlaV0YwWldSUFptWmxjaUE5SUdaaGJITmxYRzRnSUNBZ2MyVnNaaTVmY0dNdWIyNXVaV2R2ZEdsaGRHbHZibTVsWldSbFpDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0FnSUdsbUlDZ2hZM0psWVhSbFpFOW1abVZ5S1NCelpXeG1MbDlqY21WaGRHVlBabVpsY2lncFhHNGdJQ0FnSUNCamNtVmhkR1ZrVDJabVpYSWdQU0IwY25WbFhHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzJWc1ppNWZjMlYwZFhCRVlYUmhLSHRjYmlBZ0lDQWdJR05vWVc1dVpXdzZJSE5sYkdZdVgzQmpMbU55WldGMFpVUmhkR0ZEYUdGdWJtVnNLSE5sYkdZdVkyaGhibTVsYkU1aGJXVXNJSE5sYkdZdVkyaGhibTVsYkVOdmJtWnBaeWxjYmlBZ0lDQjlLVnh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJSE5sYkdZdVgzQmpMbTl1WkdGMFlXTm9ZVzV1Wld3Z1BTQm1kVzVqZEdsdmJpQW9aWFpsYm5RcElIdGNiaUFnSUNBZ0lITmxiR1l1WDNObGRIVndSR0YwWVNobGRtVnVkQ2xjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0JwWmlBb0oyRmtaRlJ5WVdOckp5QnBiaUJ6Wld4bUxsOXdZeWtnZTF4dUlDQWdJQzh2SUZkbFlsSlVReUJUY0dWakxDQkdhWEpsWm05NFhHNGdJQ0FnYVdZZ0tITmxiR1l1YzNSeVpXRnRLU0I3WEc0Z0lDQWdJQ0J6Wld4bUxuTjBjbVZoYlM1blpYUlVjbUZqYTNNb0tTNW1iM0pGWVdOb0tHWjFibU4wYVc5dUlDaDBjbUZqYXlrZ2UxeHVJQ0FnSUNBZ0lDQnpaV3htTGw5d1l5NWhaR1JVY21GamF5aDBjbUZqYXl3Z2MyVnNaaTV6ZEhKbFlXMHBYRzRnSUNBZ0lDQjlLVnh1SUNBZ0lIMWNiaUFnSUNCelpXeG1MbDl3WXk1dmJuUnlZV05ySUQwZ1puVnVZM1JwYjI0Z0tHVjJaVzUwS1NCN1hHNGdJQ0FnSUNCelpXeG1MbDl2YmxSeVlXTnJLR1YyWlc1MEtWeHVJQ0FnSUgxY2JpQWdmU0JsYkhObElIdGNiaUFnSUNBdkx5QkRhSEp2YldVc0lHVjBZeTRnVkdocGN5QmpZVzRnWW1VZ2NtVnRiM1psWkNCdmJtTmxJR0ZzYkNCaWNtOTNjMlZ5Y3lCemRYQndiM0owSUdCdmJuUnlZV05yWUZ4dUlDQWdJR2xtSUNoelpXeG1Mbk4wY21WaGJTa2djMlZzWmk1ZmNHTXVZV1JrVTNSeVpXRnRLSE5sYkdZdWMzUnlaV0Z0S1Z4dUlDQWdJSE5sYkdZdVgzQmpMbTl1WVdSa2MzUnlaV0Z0SUQwZ1puVnVZM1JwYjI0Z0tHVjJaVzUwS1NCN1hHNGdJQ0FnSUNCelpXeG1MbDl2YmtGa1pGTjBjbVZoYlNobGRtVnVkQ2xjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0F2THlCSVFVTkxPaUIzY25SaklHUnZaWE51SjNRZ1ptbHlaU0IwYUdVZ0oyNWxaMjkwYVc5dWJtVmxaR1ZrSnlCbGRtVnVkRnh1SUNCcFppQW9jMlZzWmk1cGJtbDBhV0YwYjNJZ0ppWWdjMlZzWmk1ZmFYTlhjblJqS1NCN1hHNGdJQ0FnYzJWc1ppNWZjR011YjI1dVpXZHZkR2xoZEdsdmJtNWxaV1JsWkNncFhHNGdJSDFjYmx4dUlDQnpaV3htTGw5dmJrWnBibWx6YUVKdmRXNWtJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhObGJHWXVYMjl1Um1sdWFYTm9LQ2xjYmlBZ2ZWeHVJQ0J6Wld4bUxtOXVZMlVvSjJacGJtbHphQ2NzSUhObGJHWXVYMjl1Um1sdWFYTm9RbTkxYm1RcFhHNTlYRzVjYmxCbFpYSXVWMFZDVWxSRFgxTlZVRkJQVWxRZ1BTQWhJV2RsZEVKeWIzZHpaWEpTVkVNb0tWeHVYRzR2S2lwY2JpQXFJRVY0Y0c5elpTQmpiMjVtYVdjc0lHTnZibk4wY21GcGJuUnpMQ0JoYm1RZ1pHRjBZU0JqYUdGdWJtVnNJR052Ym1acFp5Qm1iM0lnYjNabGNuSnBaR2x1WnlCaGJHd2dVR1ZsY2x4dUlDb2dhVzV6ZEdGdVkyVnpMaUJQZEdobGNuZHBjMlVzSUdwMWMzUWdjMlYwSUc5d2RITXVZMjl1Wm1sbkxDQnZjSFJ6TG1OdmJuTjBjbUZwYm5SekxDQnZjaUJ2Y0hSekxtTm9ZVzV1Wld4RGIyNW1hV2RjYmlBcUlIZG9aVzRnWTI5dWMzUnlkV04wYVc1bklHRWdVR1ZsY2k1Y2JpQXFMMXh1VUdWbGNpNWpiMjVtYVdjZ1BTQjdYRzRnSUdsalpWTmxjblpsY25NNklGdGNiaUFnSUNCN1hHNGdJQ0FnSUNCMWNteHpPaUFuYzNSMWJqcHpkSFZ1TG13dVoyOXZaMnhsTG1OdmJUb3hPVE13TWlkY2JpQWdJQ0I5TEZ4dUlDQWdJSHRjYmlBZ0lDQWdJSFZ5YkhNNklDZHpkSFZ1T21kc2IySmhiQzV6ZEhWdUxuUjNhV3hwYnk1amIyMDZNelEzT0Q5MGNtRnVjM0J2Y25ROWRXUndKMXh1SUNBZ0lIMWNiaUFnWFZ4dWZWeHVVR1ZsY2k1amIyNXpkSEpoYVc1MGN5QTlJSHQ5WEc1UVpXVnlMbU5vWVc1dVpXeERiMjVtYVdjZ1BTQjdmVnh1WEc1UFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29VR1ZsY2k1d2NtOTBiM1I1Y0dVc0lDZGlkV1ptWlhKVGFYcGxKeXdnZTF4dUlDQm5aWFE2SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCMllYSWdjMlZzWmlBOUlIUm9hWE5jYmlBZ0lDQnlaWFIxY200Z0tITmxiR1l1WDJOb1lXNXVaV3dnSmlZZ2MyVnNaaTVmWTJoaGJtNWxiQzVpZFdabVpYSmxaRUZ0YjNWdWRDa2dmSHdnTUZ4dUlDQjlYRzU5S1Z4dVhHNVFaV1Z5TG5CeWIzUnZkSGx3WlM1aFpHUnlaWE56SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNCMllYSWdjMlZzWmlBOUlIUm9hWE5jYmlBZ2NtVjBkWEp1SUhzZ2NHOXlkRG9nYzJWc1ppNXNiMk5oYkZCdmNuUXNJR1poYldsc2VUb2dKMGxRZGpRbkxDQmhaR1J5WlhOek9pQnpaV3htTG14dlkyRnNRV1JrY21WemN5QjlYRzU5WEc1Y2JsQmxaWEl1Y0hKdmRHOTBlWEJsTG5OcFoyNWhiQ0E5SUdaMWJtTjBhVzl1SUNoa1lYUmhLU0I3WEc0Z0lIWmhjaUJ6Wld4bUlEMGdkR2hwYzF4dUlDQnBaaUFvYzJWc1ppNWtaWE4wY205NVpXUXBJSFJvY205M0lHNWxkeUJGY25KdmNpZ25ZMkZ1Ym05MElITnBaMjVoYkNCaFpuUmxjaUJ3WldWeUlHbHpJR1JsYzNSeWIzbGxaQ2NwWEc0Z0lHbG1JQ2gwZVhCbGIyWWdaR0YwWVNBOVBUMGdKM04wY21sdVp5Y3BJSHRjYmlBZ0lDQjBjbmtnZTF4dUlDQWdJQ0FnWkdGMFlTQTlJRXBUVDA0dWNHRnljMlVvWkdGMFlTbGNiaUFnSUNCOUlHTmhkR05vSUNobGNuSXBJSHRjYmlBZ0lDQWdJR1JoZEdFZ1BTQjdmVnh1SUNBZ0lIMWNiaUFnZlZ4dUlDQnpaV3htTGw5a1pXSjFaeWduYzJsbmJtRnNLQ2tuS1Z4dVhHNGdJR2xtSUNoa1lYUmhMbU5oYm1ScFpHRjBaU2tnZTF4dUlDQWdJR2xtSUNoelpXeG1MbDl3WXk1eVpXMXZkR1ZFWlhOamNtbHdkR2x2YmlrZ2MyVnNaaTVmWVdSa1NXTmxRMkZ1Wkdsa1lYUmxLR1JoZEdFdVkyRnVaR2xrWVhSbEtWeHVJQ0FnSUdWc2MyVWdjMlZzWmk1ZmNHVnVaR2x1WjBOaGJtUnBaR0YwWlhNdWNIVnphQ2hrWVhSaExtTmhibVJwWkdGMFpTbGNiaUFnZlZ4dUlDQnBaaUFvWkdGMFlTNXpaSEFwSUh0Y2JpQWdJQ0J6Wld4bUxsOXdZeTV6WlhSU1pXMXZkR1ZFWlhOamNtbHdkR2x2YmlodVpYY2dLSE5sYkdZdVgzZHlkR011VWxSRFUyVnpjMmx2YmtSbGMyTnlhWEIwYVc5dUtTaGtZWFJoS1N3Z1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdhV1lnS0hObGJHWXVaR1Z6ZEhKdmVXVmtLU0J5WlhSMWNtNWNibHh1SUNBZ0lDQWdjMlZzWmk1ZmNHVnVaR2x1WjBOaGJtUnBaR0YwWlhNdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb1kyRnVaR2xrWVhSbEtTQjdYRzRnSUNBZ0lDQWdJSE5sYkdZdVgyRmtaRWxqWlVOaGJtUnBaR0YwWlNoallXNWthV1JoZEdVcFhHNGdJQ0FnSUNCOUtWeHVJQ0FnSUNBZ2MyVnNaaTVmY0dWdVpHbHVaME5oYm1ScFpHRjBaWE1nUFNCYlhWeHVYRzRnSUNBZ0lDQnBaaUFvYzJWc1ppNWZjR011Y21WdGIzUmxSR1Z6WTNKcGNIUnBiMjR1ZEhsd1pTQTlQVDBnSjI5bVptVnlKeWtnYzJWc1ppNWZZM0psWVhSbFFXNXpkMlZ5S0NsY2JpQWdJQ0I5TENCbWRXNWpkR2x2YmlBb1pYSnlLU0I3SUhObGJHWXVYMjl1UlhKeWIzSW9aWEp5S1NCOUtWeHVJQ0I5WEc0Z0lHbG1JQ2doWkdGMFlTNXpaSEFnSmlZZ0lXUmhkR0V1WTJGdVpHbGtZWFJsS1NCN1hHNGdJQ0FnYzJWc1ppNWZaR1Z6ZEhKdmVTaHVaWGNnUlhKeWIzSW9KM05wWjI1aGJDZ3BJR05oYkd4bFpDQjNhWFJvSUdsdWRtRnNhV1FnYzJsbmJtRnNJR1JoZEdFbktTbGNiaUFnZlZ4dWZWeHVYRzVRWldWeUxuQnliM1J2ZEhsd1pTNWZZV1JrU1dObFEyRnVaR2xrWVhSbElEMGdablZ1WTNScGIyNGdLR05oYm1ScFpHRjBaU2tnZTF4dUlDQjJZWElnYzJWc1ppQTlJSFJvYVhOY2JpQWdkSEo1SUh0Y2JpQWdJQ0J6Wld4bUxsOXdZeTVoWkdSSlkyVkRZVzVrYVdSaGRHVW9YRzRnSUNBZ0lDQnVaWGNnYzJWc1ppNWZkM0owWXk1U1ZFTkpZMlZEWVc1a2FXUmhkR1VvWTJGdVpHbGtZWFJsS1N4Y2JpQWdJQ0FnSUc1dmIzQXNYRzRnSUNBZ0lDQm1kVzVqZEdsdmJpQW9aWEp5S1NCN0lITmxiR1l1WDI5dVJYSnliM0lvWlhKeUtTQjlYRzRnSUNBZ0tWeHVJQ0I5SUdOaGRHTm9JQ2hsY25JcElIdGNiaUFnSUNCelpXeG1MbDlrWlhOMGNtOTVLRzVsZHlCRmNuSnZjaWduWlhKeWIzSWdZV1JrYVc1bklHTmhibVJwWkdGMFpUb2dKeUFySUdWeWNpNXRaWE56WVdkbEtTbGNiaUFnZlZ4dWZWeHVYRzR2S2lwY2JpQXFJRk5sYm1RZ2RHVjRkQzlpYVc1aGNua2daR0YwWVNCMGJ5QjBhR1VnY21WdGIzUmxJSEJsWlhJdVhHNGdLaUJBY0dGeVlXMGdlMVI1Y0dWa1FYSnlZWGxXYVdWM2ZFRnljbUY1UW5WbVptVnlmRUoxWm1abGNueHpkSEpwYm1kOFFteHZZbnhQWW1wbFkzUjlJR05vZFc1clhHNGdLaTljYmxCbFpYSXVjSEp2ZEc5MGVYQmxMbk5sYm1RZ1BTQm1kVzVqZEdsdmJpQW9ZMmgxYm1zcElIdGNiaUFnZG1GeUlITmxiR1lnUFNCMGFHbHpYRzVjYmlBZ0x5OGdTRUZEU3pvZ1lIZHlkR05nSUcxdlpIVnNaU0JqY21GemFHVnpJRzl1SUU1dlpHVXVhbk1nUW5WbVptVnlMQ0J6YnlCamIyNTJaWEowSUhSdklGVnBiblE0UVhKeVlYbGNiaUFnTHk4Z1UyVmxPaUJvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2Wm1WeWIzTnpMM05wYlhCc1pTMXdaV1Z5TDJsemMzVmxjeTgyTUZ4dUlDQnBaaUFvYzJWc1ppNWZhWE5YY25SaklDWW1JRUoxWm1abGNpNXBjMEoxWm1abGNpaGphSFZ1YXlrcElIdGNiaUFnSUNCamFIVnVheUE5SUc1bGR5QlZhVzUwT0VGeWNtRjVLR05vZFc1cktWeHVJQ0I5WEc1Y2JpQWdjMlZzWmk1ZlkyaGhibTVsYkM1elpXNWtLR05vZFc1cktWeHVmVnh1WEc1UVpXVnlMbkJ5YjNSdmRIbHdaUzVrWlhOMGNtOTVJRDBnWm5WdVkzUnBiMjRnS0c5dVkyeHZjMlVwSUh0Y2JpQWdkbUZ5SUhObGJHWWdQU0IwYUdselhHNGdJSE5sYkdZdVgyUmxjM1J5YjNrb2JuVnNiQ3dnYjI1amJHOXpaU2xjYm4xY2JseHVVR1ZsY2k1d2NtOTBiM1I1Y0dVdVgyUmxjM1J5YjNrZ1BTQm1kVzVqZEdsdmJpQW9aWEp5TENCdmJtTnNiM05sS1NCN1hHNGdJSFpoY2lCelpXeG1JRDBnZEdocGMxeHVJQ0JwWmlBb2MyVnNaaTVrWlhOMGNtOTVaV1FwSUhKbGRIVnlibHh1SUNCcFppQW9iMjVqYkc5elpTa2djMlZzWmk1dmJtTmxLQ2RqYkc5elpTY3NJRzl1WTJ4dmMyVXBYRzVjYmlBZ2MyVnNaaTVmWkdWaWRXY29KMlJsYzNSeWIza2dLR1Z5Y205eU9pQWxjeWtuTENCbGNuSWdKaVlnWlhKeUxtMWxjM05oWjJVcFhHNWNiaUFnYzJWc1ppNXlaV0ZrWVdKc1pTQTlJSE5sYkdZdWQzSnBkR0ZpYkdVZ1BTQm1ZV3h6WlZ4dVhHNGdJR2xtSUNnaGMyVnNaaTVmY21WaFpHRmliR1ZUZEdGMFpTNWxibVJsWkNrZ2MyVnNaaTV3ZFhOb0tHNTFiR3dwWEc0Z0lHbG1JQ2doYzJWc1ppNWZkM0pwZEdGaWJHVlRkR0YwWlM1bWFXNXBjMmhsWkNrZ2MyVnNaaTVsYm1Rb0tWeHVYRzRnSUhObGJHWXVaR1Z6ZEhKdmVXVmtJRDBnZEhKMVpWeHVJQ0J6Wld4bUxtTnZibTVsWTNSbFpDQTlJR1poYkhObFhHNGdJSE5sYkdZdVgzQmpVbVZoWkhrZ1BTQm1ZV3h6WlZ4dUlDQnpaV3htTGw5amFHRnVibVZzVW1WaFpIa2dQU0JtWVd4elpWeHVJQ0J6Wld4bUxsOXdjbVYyYVc5MWMxTjBjbVZoYlhNZ1BTQnVkV3hzWEc1Y2JpQWdZMnhsWVhKSmJuUmxjblpoYkNoelpXeG1MbDlwYm5SbGNuWmhiQ2xjYmlBZ1kyeGxZWEpVYVcxbGIzVjBLSE5sYkdZdVgzSmxZMjl1Ym1WamRGUnBiV1Z2ZFhRcFhHNGdJSE5sYkdZdVgybHVkR1Z5ZG1Gc0lEMGdiblZzYkZ4dUlDQnpaV3htTGw5eVpXTnZibTVsWTNSVWFXMWxiM1YwSUQwZ2JuVnNiRnh1SUNCelpXeG1MbDlqYUhWdWF5QTlJRzUxYkd4Y2JpQWdjMlZzWmk1ZlkySWdQU0J1ZFd4c1hHNWNiaUFnYVdZZ0tITmxiR1l1WDI5dVJtbHVhWE5vUW05MWJtUXBJSE5sYkdZdWNtVnRiM1psVEdsemRHVnVaWElvSjJacGJtbHphQ2NzSUhObGJHWXVYMjl1Um1sdWFYTm9RbTkxYm1RcFhHNGdJSE5sYkdZdVgyOXVSbWx1YVhOb1FtOTFibVFnUFNCdWRXeHNYRzVjYmlBZ2FXWWdLSE5sYkdZdVgzQmpLU0I3WEc0Z0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUhObGJHWXVYM0JqTG1Oc2IzTmxLQ2xjYmlBZ0lDQjlJR05oZEdOb0lDaGxjbklwSUh0OVhHNWNiaUFnSUNCelpXeG1MbDl3WXk1dmJtbGpaV052Ym01bFkzUnBiMjV6ZEdGMFpXTm9ZVzVuWlNBOUlHNTFiR3hjYmlBZ0lDQnpaV3htTGw5d1l5NXZibk5wWjI1aGJHbHVaM04wWVhSbFkyaGhibWRsSUQwZ2JuVnNiRnh1SUNBZ0lITmxiR1l1WDNCakxtOXVhV05sWTJGdVpHbGtZWFJsSUQwZ2JuVnNiRnh1SUNBZ0lHbG1JQ2duWVdSa1ZISmhZMnNuSUdsdUlITmxiR1l1WDNCaktTQjdYRzRnSUNBZ0lDQnpaV3htTGw5d1l5NXZiblJ5WVdOcklEMGdiblZzYkZ4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQnpaV3htTGw5d1l5NXZibUZrWkhOMGNtVmhiU0E5SUc1MWJHeGNiaUFnSUNCOVhHNGdJQ0FnYzJWc1ppNWZjR011YjI1dVpXZHZkR2xoZEdsdmJtNWxaV1JsWkNBOUlHNTFiR3hjYmlBZ0lDQnpaV3htTGw5d1l5NXZibVJoZEdGamFHRnVibVZzSUQwZ2JuVnNiRnh1SUNCOVhHNWNiaUFnYVdZZ0tITmxiR1l1WDJOb1lXNXVaV3dwSUh0Y2JpQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ2MyVnNaaTVmWTJoaGJtNWxiQzVqYkc5elpTZ3BYRzRnSUNBZ2ZTQmpZWFJqYUNBb1pYSnlLU0I3ZlZ4dVhHNGdJQ0FnYzJWc1ppNWZZMmhoYm01bGJDNXZibTFsYzNOaFoyVWdQU0J1ZFd4c1hHNGdJQ0FnYzJWc1ppNWZZMmhoYm01bGJDNXZibTl3Wlc0Z1BTQnVkV3hzWEc0Z0lDQWdjMlZzWmk1ZlkyaGhibTVsYkM1dmJtTnNiM05sSUQwZ2JuVnNiRnh1SUNCOVhHNGdJSE5sYkdZdVgzQmpJRDBnYm5Wc2JGeHVJQ0J6Wld4bUxsOWphR0Z1Ym1Wc0lEMGdiblZzYkZ4dVhHNGdJR2xtSUNobGNuSXBJSE5sYkdZdVpXMXBkQ2duWlhKeWIzSW5MQ0JsY25JcFhHNGdJSE5sYkdZdVpXMXBkQ2duWTJ4dmMyVW5LVnh1ZlZ4dVhHNVFaV1Z5TG5CeWIzUnZkSGx3WlM1ZmMyVjBkWEJFWVhSaElEMGdablZ1WTNScGIyNGdLR1YyWlc1MEtTQjdYRzRnSUhaaGNpQnpaV3htSUQwZ2RHaHBjMXh1SUNCelpXeG1MbDlqYUdGdWJtVnNJRDBnWlhabGJuUXVZMmhoYm01bGJGeHVJQ0J6Wld4bUxsOWphR0Z1Ym1Wc0xtSnBibUZ5ZVZSNWNHVWdQU0FuWVhKeVlYbGlkV1ptWlhJblhHNWNiaUFnYVdZZ0tIUjVjR1Z2WmlCelpXeG1MbDlqYUdGdWJtVnNMbUoxWm1abGNtVmtRVzF2ZFc1MFRHOTNWR2h5WlhOb2IyeGtJRDA5UFNBbmJuVnRZbVZ5SnlrZ2UxeHVJQ0FnSUhObGJHWXVYMk5vWVc1dVpXd3VZblZtWm1WeVpXUkJiVzkxYm5STWIzZFVhSEpsYzJodmJHUWdQU0JOUVZoZlFsVkdSa1ZTUlVSZlFVMVBWVTVVWEc0Z0lIMWNibHh1SUNCelpXeG1MbU5vWVc1dVpXeE9ZVzFsSUQwZ2MyVnNaaTVmWTJoaGJtNWxiQzVzWVdKbGJGeHVYRzRnSUhObGJHWXVYMk5vWVc1dVpXd3ViMjV0WlhOellXZGxJRDBnWm5WdVkzUnBiMjRnS0dWMlpXNTBLU0I3WEc0Z0lDQWdjMlZzWmk1ZmIyNURhR0Z1Ym1Wc1RXVnpjMkZuWlNobGRtVnVkQ2xjYmlBZ2ZWeHVJQ0J6Wld4bUxsOWphR0Z1Ym1Wc0xtOXVZblZtWm1WeVpXUmhiVzkxYm5Sc2IzY2dQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnYzJWc1ppNWZiMjVEYUdGdWJtVnNRblZtWm1WeVpXUkJiVzkxYm5STWIzY29LVnh1SUNCOVhHNGdJSE5sYkdZdVgyTm9ZVzV1Wld3dWIyNXZjR1Z1SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lITmxiR1l1WDI5dVEyaGhibTVsYkU5d1pXNG9LVnh1SUNCOVhHNGdJSE5sYkdZdVgyTm9ZVzV1Wld3dWIyNWpiRzl6WlNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQnpaV3htTGw5dmJrTm9ZVzV1Wld4RGJHOXpaU2dwWEc0Z0lIMWNibjFjYmx4dVVHVmxjaTV3Y205MGIzUjVjR1V1WDNKbFlXUWdQU0JtZFc1amRHbHZiaUFvS1NCN2ZWeHVYRzVRWldWeUxuQnliM1J2ZEhsd1pTNWZkM0pwZEdVZ1BTQm1kVzVqZEdsdmJpQW9ZMmgxYm1zc0lHVnVZMjlrYVc1bkxDQmpZaWtnZTF4dUlDQjJZWElnYzJWc1ppQTlJSFJvYVhOY2JpQWdhV1lnS0hObGJHWXVaR1Z6ZEhKdmVXVmtLU0J5WlhSMWNtNGdZMklvYm1WM0lFVnljbTl5S0NkallXNXViM1FnZDNKcGRHVWdZV1owWlhJZ2NHVmxjaUJwY3lCa1pYTjBjbTk1WldRbktTbGNibHh1SUNCcFppQW9jMlZzWmk1amIyNXVaV04wWldRcElIdGNiaUFnSUNCMGNua2dlMXh1SUNBZ0lDQWdjMlZzWmk1elpXNWtLR05vZFc1cktWeHVJQ0FnSUgwZ1kyRjBZMmdnS0dWeWNpa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlITmxiR1l1WDI5dVJYSnliM0lvWlhKeUtWeHVJQ0FnSUgxY2JpQWdJQ0JwWmlBb2MyVnNaaTVmWTJoaGJtNWxiQzVpZFdabVpYSmxaRUZ0YjNWdWRDQStJRTFCV0Y5Q1ZVWkdSVkpGUkY5QlRVOVZUbFFwSUh0Y2JpQWdJQ0FnSUhObGJHWXVYMlJsWW5WbktDZHpkR0Z5ZENCaVlXTnJjSEpsYzNOMWNtVTZJR0oxWm1abGNtVmtRVzF2ZFc1MElDVmtKeXdnYzJWc1ppNWZZMmhoYm01bGJDNWlkV1ptWlhKbFpFRnRiM1Z1ZENsY2JpQWdJQ0FnSUhObGJHWXVYMk5pSUQwZ1kySmNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnWTJJb2JuVnNiQ2xjYmlBZ0lDQjlYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdjMlZzWmk1ZlpHVmlkV2NvSjNkeWFYUmxJR0psWm05eVpTQmpiMjV1WldOMEp5bGNiaUFnSUNCelpXeG1MbDlqYUhWdWF5QTlJR05vZFc1clhHNGdJQ0FnYzJWc1ppNWZZMklnUFNCallseHVJQ0I5WEc1OVhHNWNiaTh2SUZkb1pXNGdjM1J5WldGdElHWnBibWx6YUdWeklIZHlhWFJwYm1jc0lHTnNiM05sSUhOdlkydGxkQzRnU0dGc1ppQnZjR1Z1SUdOdmJtNWxZM1JwYjI1eklHRnlaU0J1YjNSY2JpOHZJSE4xY0hCdmNuUmxaQzVjYmxCbFpYSXVjSEp2ZEc5MGVYQmxMbDl2YmtacGJtbHphQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnZG1GeUlITmxiR1lnUFNCMGFHbHpYRzRnSUdsbUlDaHpaV3htTG1SbGMzUnliM2xsWkNrZ2NtVjBkWEp1WEc1Y2JpQWdhV1lnS0hObGJHWXVZMjl1Ym1WamRHVmtLU0I3WEc0Z0lDQWdaR1Z6ZEhKdmVWTnZiMjRvS1Z4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUhObGJHWXViMjVqWlNnblkyOXVibVZqZENjc0lHUmxjM1J5YjNsVGIyOXVLVnh1SUNCOVhHNWNiaUFnTHk4Z1YyRnBkQ0JoSUdKcGRDQmlaV1p2Y21VZ1pHVnpkSEp2ZVdsdVp5QnpieUIwYUdVZ2MyOWphMlYwSUdac2RYTm9aWE11WEc0Z0lDOHZJRlJQUkU4NklHbHpJSFJvWlhKbElHRWdiVzl5WlNCeVpXeHBZV0pzWlNCM1lYa2dkRzhnWVdOamIyMXdiR2x6YUNCMGFHbHpQMXh1SUNCbWRXNWpkR2x2YmlCa1pYTjBjbTk1VTI5dmJpQW9LU0I3WEc0Z0lDQWdjMlYwVkdsdFpXOTFkQ2htZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNCelpXeG1MbDlrWlhOMGNtOTVLQ2xjYmlBZ0lDQjlMQ0F4TURBcFhHNGdJSDFjYm4xY2JseHVVR1ZsY2k1d2NtOTBiM1I1Y0dVdVgyTnlaV0YwWlU5bVptVnlJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0IyWVhJZ2MyVnNaaUE5SUhSb2FYTmNiaUFnYVdZZ0tITmxiR1l1WkdWemRISnZlV1ZrS1NCeVpYUjFjbTVjYmx4dUlDQnpaV3htTGw5d1l5NWpjbVZoZEdWUFptWmxjaWhtZFc1amRHbHZiaUFvYjJabVpYSXBJSHRjYmlBZ0lDQnBaaUFvYzJWc1ppNWtaWE4wY205NVpXUXBJSEpsZEhWeWJseHVJQ0FnSUc5bVptVnlMbk5rY0NBOUlITmxiR1l1YzJSd1ZISmhibk5tYjNKdEtHOW1abVZ5TG5Oa2NDbGNiaUFnSUNCelpXeG1MbDl3WXk1elpYUk1iMk5oYkVSbGMyTnlhWEIwYVc5dUtHOW1abVZ5TENCdWIyOXdMQ0JtZFc1amRHbHZiaUFvWlhKeUtTQjdJSE5sYkdZdVgyOXVSWEp5YjNJb1pYSnlLU0I5S1Z4dUlDQWdJSFpoY2lCelpXNWtUMlptWlhJZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0IyWVhJZ2MybG5ibUZzSUQwZ2MyVnNaaTVmY0dNdWJHOWpZV3hFWlhOamNtbHdkR2x2YmlCOGZDQnZabVpsY2x4dUlDQWdJQ0FnYzJWc1ppNWZaR1ZpZFdjb0ozTnBaMjVoYkNjcFhHNGdJQ0FnSUNCelpXeG1MbVZ0YVhRb0ozTnBaMjVoYkNjc0lIdGNiaUFnSUNBZ0lDQWdkSGx3WlRvZ2MybG5ibUZzTG5SNWNHVXNYRzRnSUNBZ0lDQWdJSE5rY0RvZ2MybG5ibUZzTG5Oa2NGeHVJQ0FnSUNBZ2ZTbGNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tITmxiR1l1ZEhKcFkydHNaU0I4ZkNCelpXeG1MbDlwWTJWRGIyMXdiR1YwWlNrZ2MyVnVaRTltWm1WeUtDbGNiaUFnSUNCbGJITmxJSE5sYkdZdWIyNWpaU2duWDJsalpVTnZiWEJzWlhSbEp5d2djMlZ1WkU5bVptVnlLU0F2THlCM1lXbDBJR1p2Y2lCallXNWthV1JoZEdWelhHNGdJSDBzSUdaMWJtTjBhVzl1SUNobGNuSXBJSHNnYzJWc1ppNWZiMjVGY25KdmNpaGxjbklwSUgwc0lITmxiR1l1YjJabVpYSkRiMjV6ZEhKaGFXNTBjeWxjYm4xY2JseHVVR1ZsY2k1d2NtOTBiM1I1Y0dVdVgyTnlaV0YwWlVGdWMzZGxjaUE5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnZG1GeUlITmxiR1lnUFNCMGFHbHpYRzRnSUdsbUlDaHpaV3htTG1SbGMzUnliM2xsWkNrZ2NtVjBkWEp1WEc1Y2JpQWdjMlZzWmk1ZmNHTXVZM0psWVhSbFFXNXpkMlZ5S0daMWJtTjBhVzl1SUNoaGJuTjNaWElwSUh0Y2JpQWdJQ0JwWmlBb2MyVnNaaTVrWlhOMGNtOTVaV1FwSUhKbGRIVnlibHh1SUNBZ0lHRnVjM2RsY2k1elpIQWdQU0J6Wld4bUxuTmtjRlJ5WVc1elptOXliU2hoYm5OM1pYSXVjMlJ3S1Z4dUlDQWdJSE5sYkdZdVgzQmpMbk5sZEV4dlkyRnNSR1Z6WTNKcGNIUnBiMjRvWVc1emQyVnlMQ0J1YjI5d0xDQm1kVzVqZEdsdmJpQW9aWEp5S1NCN0lITmxiR1l1WDI5dVJYSnliM0lvWlhKeUtTQjlLVnh1SUNBZ0lHbG1JQ2h6Wld4bUxuUnlhV05yYkdVZ2ZId2djMlZzWmk1ZmFXTmxRMjl0Y0d4bGRHVXBJSE5sYm1SQmJuTjNaWElvS1Z4dUlDQWdJR1ZzYzJVZ2MyVnNaaTV2Ym1ObEtDZGZhV05sUTI5dGNHeGxkR1VuTENCelpXNWtRVzV6ZDJWeUtWeHVYRzRnSUNBZ1puVnVZM1JwYjI0Z2MyVnVaRUZ1YzNkbGNpQW9LU0I3WEc0Z0lDQWdJQ0IyWVhJZ2MybG5ibUZzSUQwZ2MyVnNaaTVmY0dNdWJHOWpZV3hFWlhOamNtbHdkR2x2YmlCOGZDQmhibk4zWlhKY2JpQWdJQ0FnSUhObGJHWXVYMlJsWW5WbktDZHphV2R1WVd3bktWeHVJQ0FnSUNBZ2MyVnNaaTVsYldsMEtDZHphV2R1WVd3bkxDQjdYRzRnSUNBZ0lDQWdJSFI1Y0dVNklITnBaMjVoYkM1MGVYQmxMRnh1SUNBZ0lDQWdJQ0J6WkhBNklITnBaMjVoYkM1elpIQmNiaUFnSUNBZ0lIMHBYRzRnSUNBZ2ZWeHVJQ0I5TENCbWRXNWpkR2x2YmlBb1pYSnlLU0I3SUhObGJHWXVYMjl1UlhKeWIzSW9aWEp5S1NCOUxDQnpaV3htTG1GdWMzZGxja052Ym5OMGNtRnBiblJ6S1Z4dWZWeHVYRzVRWldWeUxuQnliM1J2ZEhsd1pTNWZiMjVKWTJWRGIyNXVaV04wYVc5dVUzUmhkR1ZEYUdGdVoyVWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJSFpoY2lCelpXeG1JRDBnZEdocGMxeHVJQ0JwWmlBb2MyVnNaaTVrWlhOMGNtOTVaV1FwSUhKbGRIVnlibHh1SUNCMllYSWdhV05sUjJGMGFHVnlhVzVuVTNSaGRHVWdQU0J6Wld4bUxsOXdZeTVwWTJWSFlYUm9aWEpwYm1kVGRHRjBaVnh1SUNCMllYSWdhV05sUTI5dWJtVmpkR2x2YmxOMFlYUmxJRDBnYzJWc1ppNWZjR011YVdObFEyOXVibVZqZEdsdmJsTjBZWFJsWEc0Z0lITmxiR1l1WDJSbFluVm5LQ2RwWTJWRGIyNXVaV04wYVc5dVUzUmhkR1ZEYUdGdVoyVWdKWE1nSlhNbkxDQnBZMlZIWVhSb1pYSnBibWRUZEdGMFpTd2dhV05sUTI5dWJtVmpkR2x2YmxOMFlYUmxLVnh1SUNCelpXeG1MbVZ0YVhRb0oybGpaVU52Ym01bFkzUnBiMjVUZEdGMFpVTm9ZVzVuWlNjc0lHbGpaVWRoZEdobGNtbHVaMU4wWVhSbExDQnBZMlZEYjI1dVpXTjBhVzl1VTNSaGRHVXBYRzRnSUdsbUlDaHBZMlZEYjI1dVpXTjBhVzl1VTNSaGRHVWdQVDA5SUNkamIyNXVaV04wWldRbklIeDhJR2xqWlVOdmJtNWxZM1JwYjI1VGRHRjBaU0E5UFQwZ0oyTnZiWEJzWlhSbFpDY3BJSHRjYmlBZ0lDQmpiR1ZoY2xScGJXVnZkWFFvYzJWc1ppNWZjbVZqYjI1dVpXTjBWR2x0Wlc5MWRDbGNiaUFnSUNCelpXeG1MbDl3WTFKbFlXUjVJRDBnZEhKMVpWeHVJQ0FnSUhObGJHWXVYMjFoZVdKbFVtVmhaSGtvS1Z4dUlDQjlYRzRnSUdsbUlDaHBZMlZEYjI1dVpXTjBhVzl1VTNSaGRHVWdQVDA5SUNka2FYTmpiMjV1WldOMFpXUW5LU0I3WEc0Z0lDQWdhV1lnS0hObGJHWXVjbVZqYjI1dVpXTjBWR2x0WlhJcElIdGNiaUFnSUNBZ0lDOHZJRWxtSUhWelpYSWdhR0Z6SUhObGRDQmdiM0IwTG5KbFkyOXVibVZqZEZScGJXVnlZQ3dnWVd4c2IzY2dkR2x0WlNCbWIzSWdTVU5GSUhSdklHRjBkR1Z0Y0hRZ1lTQnlaV052Ym01bFkzUmNiaUFnSUNBZ0lHTnNaV0Z5VkdsdFpXOTFkQ2h6Wld4bUxsOXlaV052Ym01bFkzUlVhVzFsYjNWMEtWeHVJQ0FnSUNBZ2MyVnNaaTVmY21WamIyNXVaV04wVkdsdFpXOTFkQ0E5SUhObGRGUnBiV1Z2ZFhRb1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdJQ0J6Wld4bUxsOWtaWE4wY205NUtDbGNiaUFnSUNBZ0lIMHNJSE5sYkdZdWNtVmpiMjV1WldOMFZHbHRaWElwWEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lITmxiR1l1WDJSbGMzUnliM2tvS1Z4dUlDQWdJSDFjYmlBZ2ZWeHVJQ0JwWmlBb2FXTmxRMjl1Ym1WamRHbHZibE4wWVhSbElEMDlQU0FuWm1GcGJHVmtKeWtnZTF4dUlDQWdJSE5sYkdZdVgyUmxjM1J5YjNrb2JtVjNJRVZ5Y205eUtDZEpZMlVnWTI5dWJtVmpkR2x2YmlCbVlXbHNaV1F1SnlrcFhHNGdJSDFjYmlBZ2FXWWdLR2xqWlVOdmJtNWxZM1JwYjI1VGRHRjBaU0E5UFQwZ0oyTnNiM05sWkNjcElIdGNiaUFnSUNCelpXeG1MbDlrWlhOMGNtOTVLQ2xjYmlBZ2ZWeHVmVnh1WEc1UVpXVnlMbkJ5YjNSdmRIbHdaUzVuWlhSVGRHRjBjeUE5SUdaMWJtTjBhVzl1SUNoallpa2dlMXh1SUNCMllYSWdjMlZzWmlBOUlIUm9hWE5jYmx4dUlDQXZMeUJRY205dGFYTmxMV0poYzJWa0lHZGxkRk4wWVhSektDa2dLSE4wWVc1a1lYSmtLVnh1SUNCcFppQW9jMlZzWmk1ZmNHTXVaMlYwVTNSaGRITXViR1Z1WjNSb0lEMDlQU0F3S1NCN1hHNGdJQ0FnYzJWc1ppNWZjR011WjJWMFUzUmhkSE1vS1M1MGFHVnVLR1oxYm1OMGFXOXVJQ2h5WlhNcElIdGNiaUFnSUNBZ0lIWmhjaUJ5WlhCdmNuUnpJRDBnVzExY2JpQWdJQ0FnSUhKbGN5NW1iM0pGWVdOb0tHWjFibU4wYVc5dUlDaHlaWEJ2Y25RcElIdGNiaUFnSUNBZ0lDQWdjbVZ3YjNKMGN5NXdkWE5vS0hKbGNHOXlkQ2xjYmlBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0JqWWlodWRXeHNMQ0J5WlhCdmNuUnpLVnh1SUNBZ0lIMHNJR1oxYm1OMGFXOXVJQ2hsY25JcElIc2dZMklvWlhKeUtTQjlLVnh1WEc0Z0lDOHZJRlIzYnkxd1lYSmhiV1YwWlhJZ1kyRnNiR0poWTJzdFltRnpaV1FnWjJWMFUzUmhkSE1vS1NBb1pHVndjbVZqWVhSbFpDd2dabTl5YldWeUlITjBZVzVrWVhKa0tWeHVJQ0I5SUdWc2MyVWdhV1lnS0hObGJHWXVYMmx6VW1WaFkzUk9ZWFJwZG1WWFpXSnlkR01wSUh0Y2JpQWdJQ0J6Wld4bUxsOXdZeTVuWlhSVGRHRjBjeWh1ZFd4c0xDQm1kVzVqZEdsdmJpQW9jbVZ6S1NCN1hHNGdJQ0FnSUNCMllYSWdjbVZ3YjNKMGN5QTlJRnRkWEc0Z0lDQWdJQ0J5WlhNdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb2NtVndiM0owS1NCN1hHNGdJQ0FnSUNBZ0lISmxjRzl5ZEhNdWNIVnphQ2h5WlhCdmNuUXBYRzRnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdZMklvYm5Wc2JDd2djbVZ3YjNKMGN5bGNiaUFnSUNCOUxDQm1kVzVqZEdsdmJpQW9aWEp5S1NCN0lHTmlLR1Z5Y2lrZ2ZTbGNibHh1SUNBdkx5QlRhVzVuYkdVdGNHRnlZVzFsZEdWeUlHTmhiR3hpWVdOckxXSmhjMlZrSUdkbGRGTjBZWFJ6S0NrZ0tHNXZiaTF6ZEdGdVpHRnlaQ2xjYmlBZ2ZTQmxiSE5sSUdsbUlDaHpaV3htTGw5d1l5NW5aWFJUZEdGMGN5NXNaVzVuZEdnZ1BpQXdLU0I3WEc0Z0lDQWdjMlZzWmk1ZmNHTXVaMlYwVTNSaGRITW9ablZ1WTNScGIyNGdLSEpsY3lrZ2UxeHVJQ0FnSUNBZ2RtRnlJSEpsY0c5eWRITWdQU0JiWFZ4dUlDQWdJQ0FnY21WekxuSmxjM1ZzZENncExtWnZja1ZoWTJnb1puVnVZM1JwYjI0Z0tISmxjM1ZzZENrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnY21Wd2IzSjBJRDBnZTMxY2JpQWdJQ0FnSUNBZ2NtVnpkV3gwTG01aGJXVnpLQ2t1Wm05eVJXRmphQ2htZFc1amRHbHZiaUFvYm1GdFpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUhKbGNHOXlkRnR1WVcxbFhTQTlJSEpsYzNWc2RDNXpkR0YwS0c1aGJXVXBYRzRnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0FnSUhKbGNHOXlkQzVwWkNBOUlISmxjM1ZzZEM1cFpGeHVJQ0FnSUNBZ0lDQnlaWEJ2Y25RdWRIbHdaU0E5SUhKbGMzVnNkQzUwZVhCbFhHNGdJQ0FnSUNBZ0lISmxjRzl5ZEM1MGFXMWxjM1JoYlhBZ1BTQnlaWE4xYkhRdWRHbHRaWE4wWVcxd1hHNGdJQ0FnSUNBZ0lISmxjRzl5ZEhNdWNIVnphQ2h5WlhCdmNuUXBYRzRnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdZMklvYm5Wc2JDd2djbVZ3YjNKMGN5bGNiaUFnSUNCOUxDQm1kVzVqZEdsdmJpQW9aWEp5S1NCN0lHTmlLR1Z5Y2lrZ2ZTbGNibHh1SUNBdkx5QlZibXR1YjNkdUlHSnliM2R6WlhJc0lITnJhWEFnWjJWMFUzUmhkSE1vS1NCemFXNWpaU0JwZENkeklHRnVlVzl1WlNkeklHZDFaWE56SUhkb2FXTm9JSE4wZVd4bElHOW1YRzRnSUM4dklHZGxkRk4wWVhSektDa2dkR2hsZVNCcGJYQnNaVzFsYm5RdVhHNGdJSDBnWld4elpTQjdYRzRnSUNBZ1kySW9iblZzYkN3Z1cxMHBYRzRnSUgxY2JuMWNibHh1VUdWbGNpNXdjbTkwYjNSNWNHVXVYMjFoZVdKbFVtVmhaSGtnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUhaaGNpQnpaV3htSUQwZ2RHaHBjMXh1SUNCelpXeG1MbDlrWldKMVp5Z25iV0Y1WW1WU1pXRmtlU0J3WXlBbGN5QmphR0Z1Ym1Wc0lDVnpKeXdnYzJWc1ppNWZjR05TWldGa2VTd2djMlZzWmk1ZlkyaGhibTVsYkZKbFlXUjVLVnh1SUNCcFppQW9jMlZzWmk1amIyNXVaV04wWldRZ2ZId2djMlZzWmk1ZlkyOXVibVZqZEdsdVp5QjhmQ0FoYzJWc1ppNWZjR05TWldGa2VTQjhmQ0FoYzJWc1ppNWZZMmhoYm01bGJGSmxZV1I1S1NCeVpYUjFjbTVjYmlBZ2MyVnNaaTVmWTI5dWJtVmpkR2x1WnlBOUlIUnlkV1ZjYmx4dUlDQnpaV3htTG1kbGRGTjBZWFJ6S0daMWJtTjBhVzl1SUNobGNuSXNJR2wwWlcxektTQjdYRzRnSUNBZ0x5OGdWSEpsWVhRZ1oyVjBVM1JoZEhNZ1pYSnliM0lnWVhNZ2JtOXVMV1poZEdGc0xpQkpkQ2R6SUc1dmRDQmxjM05sYm5ScFlXd3VYRzRnSUNBZ2FXWWdLR1Z5Y2lrZ2FYUmxiWE1nUFNCYlhWeHVYRzRnSUNBZ2MyVnNaaTVmWTI5dWJtVmpkR2x1WnlBOUlHWmhiSE5sWEc0Z0lDQWdjMlZzWmk1amIyNXVaV04wWldRZ1BTQjBjblZsWEc1Y2JpQWdJQ0IyWVhJZ2NtVnRiM1JsUTJGdVpHbGtZWFJsY3lBOUlIdDlYRzRnSUNBZ2RtRnlJR3h2WTJGc1EyRnVaR2xrWVhSbGN5QTlJSHQ5WEc0Z0lDQWdkbUZ5SUdOaGJtUnBaR0YwWlZCaGFYSnpJRDBnZTMxY2JseHVJQ0FnSUdsMFpXMXpMbVp2Y2tWaFkyZ29ablZ1WTNScGIyNGdLR2wwWlcwcElIdGNiaUFnSUNBZ0lDOHZJRlJQUkU4NklFOXVZMlVnWVd4c0lHSnliM2R6WlhKeklITjFjSEJ2Y25RZ2RHaGxJR2g1Y0dobGJtRjBaV1FnYzNSaGRITWdjbVZ3YjNKMElIUjVjR1Z6TENCeVpXMXZkbVZjYmlBZ0lDQWdJQzh2SUhSb1pTQnViMjR0YUhsd1pXNWhkR1ZrSUc5dVpYTmNiaUFnSUNBZ0lHbG1JQ2hwZEdWdExuUjVjR1VnUFQwOUlDZHlaVzF2ZEdWallXNWthV1JoZEdVbklIeDhJR2wwWlcwdWRIbHdaU0E5UFQwZ0ozSmxiVzkwWlMxallXNWthV1JoZEdVbktTQjdYRzRnSUNBZ0lDQWdJSEpsYlc5MFpVTmhibVJwWkdGMFpYTmJhWFJsYlM1cFpGMGdQU0JwZEdWdFhHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCcFppQW9hWFJsYlM1MGVYQmxJRDA5UFNBbmJHOWpZV3hqWVc1a2FXUmhkR1VuSUh4OElHbDBaVzB1ZEhsd1pTQTlQVDBnSjJ4dlkyRnNMV05oYm1ScFpHRjBaU2NwSUh0Y2JpQWdJQ0FnSUNBZ2JHOWpZV3hEWVc1a2FXUmhkR1Z6VzJsMFpXMHVhV1JkSUQwZ2FYUmxiVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdhV1lnS0dsMFpXMHVkSGx3WlNBOVBUMGdKMk5oYm1ScFpHRjBaWEJoYVhJbklIeDhJR2wwWlcwdWRIbHdaU0E5UFQwZ0oyTmhibVJwWkdGMFpTMXdZV2x5SnlrZ2UxeHVJQ0FnSUNBZ0lDQmpZVzVrYVdSaGRHVlFZV2x5YzF0cGRHVnRMbWxrWFNBOUlHbDBaVzFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlLVnh1WEc0Z0lDQWdhWFJsYlhNdVptOXlSV0ZqYUNobWRXNWpkR2x2YmlBb2FYUmxiU2tnZTF4dUlDQWdJQ0FnTHk4Z1UzQmxZeTFqYjIxd2JHbGhiblJjYmlBZ0lDQWdJR2xtSUNocGRHVnRMblI1Y0dVZ1BUMDlJQ2QwY21GdWMzQnZjblFuS1NCN1hHNGdJQ0FnSUNBZ0lITmxkRk5sYkdWamRHVmtRMkZ1Wkdsa1lYUmxVR0ZwY2loallXNWthV1JoZEdWUVlXbHljMXRwZEdWdExuTmxiR1ZqZEdWa1EyRnVaR2xrWVhSbFVHRnBja2xrWFNsY2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0x5OGdUMnhrSUdsdGNHeGxiV1Z1ZEdGMGFXOXVjMXh1SUNBZ0lDQWdhV1lnS0Z4dUlDQWdJQ0FnSUNBb2FYUmxiUzUwZVhCbElEMDlQU0FuWjI5dlowTmhibVJwWkdGMFpWQmhhWEluSUNZbUlHbDBaVzB1WjI5dlowRmpkR2wyWlVOdmJtNWxZM1JwYjI0Z1BUMDlJQ2QwY25WbEp5a2dmSHhjYmlBZ0lDQWdJQ0FnS0NocGRHVnRMblI1Y0dVZ1BUMDlJQ2RqWVc1a2FXUmhkR1Z3WVdseUp5QjhmQ0JwZEdWdExuUjVjR1VnUFQwOUlDZGpZVzVrYVdSaGRHVXRjR0ZwY2ljcElDWW1JR2wwWlcwdWMyVnNaV04wWldRcFhHNGdJQ0FnSUNBcElIdGNiaUFnSUNBZ0lDQWdjMlYwVTJWc1pXTjBaV1JEWVc1a2FXUmhkR1ZRWVdseUtHbDBaVzBwWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU2xjYmx4dUlDQWdJR1oxYm1OMGFXOXVJSE5sZEZObGJHVmpkR1ZrUTJGdVpHbGtZWFJsVUdGcGNpQW9jMlZzWldOMFpXUkRZVzVrYVdSaGRHVlFZV2x5S1NCN1hHNGdJQ0FnSUNCMllYSWdiRzlqWVd3Z1BTQnNiMk5oYkVOaGJtUnBaR0YwWlhOYmMyVnNaV04wWldSRFlXNWthV1JoZEdWUVlXbHlMbXh2WTJGc1EyRnVaR2xrWVhSbFNXUmRYRzVjYmlBZ0lDQWdJR2xtSUNoc2IyTmhiQ0FtSmlCc2IyTmhiQzVwY0NrZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJUY0dWalhHNGdJQ0FnSUNBZ0lITmxiR1l1Ykc5allXeEJaR1J5WlhOeklEMGdiRzlqWVd3dWFYQmNiaUFnSUNBZ0lDQWdjMlZzWmk1c2IyTmhiRkJ2Y25RZ1BTQk9kVzFpWlhJb2JHOWpZV3d1Y0c5eWRDbGNiaUFnSUNBZ0lIMGdaV3h6WlNCcFppQW9iRzlqWVd3Z0ppWWdiRzlqWVd3dWFYQkJaR1J5WlhOektTQjdYRzRnSUNBZ0lDQWdJQzh2SUVacGNtVm1iM2hjYmlBZ0lDQWdJQ0FnYzJWc1ppNXNiMk5oYkVGa1pISmxjM01nUFNCc2IyTmhiQzVwY0VGa1pISmxjM05jYmlBZ0lDQWdJQ0FnYzJWc1ppNXNiMk5oYkZCdmNuUWdQU0JPZFcxaVpYSW9iRzlqWVd3dWNHOXlkRTUxYldKbGNpbGNiaUFnSUNBZ0lIMGdaV3h6WlNCcFppQW9kSGx3Wlc5bUlITmxiR1ZqZEdWa1EyRnVaR2xrWVhSbFVHRnBjaTVuYjI5blRHOWpZV3hCWkdSeVpYTnpJRDA5UFNBbmMzUnlhVzVuSnlrZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJVVDBSUE9pQnlaVzF2ZG1VZ2RHaHBjeUJ2Ym1ObElFTm9jbTl0WlNBMU9DQnBjeUJ5Wld4bFlYTmxaRnh1SUNBZ0lDQWdJQ0JzYjJOaGJDQTlJSE5sYkdWamRHVmtRMkZ1Wkdsa1lYUmxVR0ZwY2k1bmIyOW5URzlqWVd4QlpHUnlaWE56TG5Od2JHbDBLQ2M2SnlsY2JpQWdJQ0FnSUNBZ2MyVnNaaTVzYjJOaGJFRmtaSEpsYzNNZ1BTQnNiMk5oYkZzd1hWeHVJQ0FnSUNBZ0lDQnpaV3htTG14dlkyRnNVRzl5ZENBOUlFNTFiV0psY2loc2IyTmhiRnN4WFNsY2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2RtRnlJSEpsYlc5MFpTQTlJSEpsYlc5MFpVTmhibVJwWkdGMFpYTmJjMlZzWldOMFpXUkRZVzVrYVdSaGRHVlFZV2x5TG5KbGJXOTBaVU5oYm1ScFpHRjBaVWxrWFZ4dVhHNGdJQ0FnSUNCcFppQW9jbVZ0YjNSbElDWW1JSEpsYlc5MFpTNXBjQ2tnZTF4dUlDQWdJQ0FnSUNBdkx5QlRjR1ZqWEc0Z0lDQWdJQ0FnSUhObGJHWXVjbVZ0YjNSbFFXUmtjbVZ6Y3lBOUlISmxiVzkwWlM1cGNGeHVJQ0FnSUNBZ0lDQnpaV3htTG5KbGJXOTBaVkJ2Y25RZ1BTQk9kVzFpWlhJb2NtVnRiM1JsTG5CdmNuUXBYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLSEpsYlc5MFpTQW1KaUJ5WlcxdmRHVXVhWEJCWkdSeVpYTnpLU0I3WEc0Z0lDQWdJQ0FnSUM4dklFWnBjbVZtYjNoY2JpQWdJQ0FnSUNBZ2MyVnNaaTV5WlcxdmRHVkJaR1J5WlhOeklEMGdjbVZ0YjNSbExtbHdRV1JrY21WemMxeHVJQ0FnSUNBZ0lDQnpaV3htTG5KbGJXOTBaVkJ2Y25RZ1BTQk9kVzFpWlhJb2NtVnRiM1JsTG5CdmNuUk9kVzFpWlhJcFhHNGdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tIUjVjR1Z2WmlCelpXeGxZM1JsWkVOaGJtUnBaR0YwWlZCaGFYSXVaMjl2WjFKbGJXOTBaVUZrWkhKbGMzTWdQVDA5SUNkemRISnBibWNuS1NCN1hHNGdJQ0FnSUNBZ0lDOHZJRlJQUkU4NklISmxiVzkyWlNCMGFHbHpJRzl1WTJVZ1EyaHliMjFsSURVNElHbHpJSEpsYkdWaGMyVmtYRzRnSUNBZ0lDQWdJSEpsYlc5MFpTQTlJSE5sYkdWamRHVmtRMkZ1Wkdsa1lYUmxVR0ZwY2k1bmIyOW5VbVZ0YjNSbFFXUmtjbVZ6Y3k1emNHeHBkQ2duT2ljcFhHNGdJQ0FnSUNBZ0lITmxiR1l1Y21WdGIzUmxRV1JrY21WemN5QTlJSEpsYlc5MFpWc3dYVnh1SUNBZ0lDQWdJQ0J6Wld4bUxuSmxiVzkwWlZCdmNuUWdQU0JPZFcxaVpYSW9jbVZ0YjNSbFd6RmRLVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdjMlZzWmk1eVpXMXZkR1ZHWVcxcGJIa2dQU0FuU1ZCMk5DZGNibHh1SUNBZ0lDQWdjMlZzWmk1ZlpHVmlkV2NvWEc0Z0lDQWdJQ0FnSUNkamIyNXVaV04wSUd4dlkyRnNPaUFsY3pvbGN5QnlaVzF2ZEdVNklDVnpPaVZ6Snl4Y2JpQWdJQ0FnSUNBZ2MyVnNaaTVzYjJOaGJFRmtaSEpsYzNNc0lITmxiR1l1Ykc5allXeFFiM0owTENCelpXeG1MbkpsYlc5MFpVRmtaSEpsYzNNc0lITmxiR1l1Y21WdGIzUmxVRzl5ZEZ4dUlDQWdJQ0FnS1Z4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoelpXeG1MbDlqYUhWdWF5a2dlMXh1SUNBZ0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ2MyVnNaaTV6Wlc1a0tITmxiR1l1WDJOb2RXNXJLVnh1SUNBZ0lDQWdmU0JqWVhSamFDQW9aWEp5S1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCelpXeG1MbDl2YmtWeWNtOXlLR1Z5Y2lsY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUhObGJHWXVYMk5vZFc1cklEMGdiblZzYkZ4dUlDQWdJQ0FnYzJWc1ppNWZaR1ZpZFdjb0ozTmxiblFnWTJoMWJtc2dabkp2YlNCY0luZHlhWFJsSUdKbFptOXlaU0JqYjI1dVpXTjBYQ0luS1Z4dVhHNGdJQ0FnSUNCMllYSWdZMklnUFNCelpXeG1MbDlqWWx4dUlDQWdJQ0FnYzJWc1ppNWZZMklnUFNCdWRXeHNYRzRnSUNBZ0lDQmpZaWh1ZFd4c0tWeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklFbG1JR0JpZFdabVpYSmxaRUZ0YjNWdWRFeHZkMVJvY21WemFHOXNaR0FnWVc1a0lDZHZibUoxWm1abGNtVmtZVzF2ZFc1MGJHOTNKeUJoY21VZ2RXNXpkWEJ3YjNKMFpXUXNYRzRnSUNBZ0x5OGdabUZzYkdKaFkyc2dkRzhnZFhOcGJtY2djMlYwU1c1MFpYSjJZV3dnZEc4Z2FXMXdiR1Z0Wlc1MElHSmhZMnR3Y21WemMzVnlaUzVjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JSE5sYkdZdVgyTm9ZVzV1Wld3dVluVm1abVZ5WldSQmJXOTFiblJNYjNkVWFISmxjMmh2YkdRZ0lUMDlJQ2R1ZFcxaVpYSW5LU0I3WEc0Z0lDQWdJQ0J6Wld4bUxsOXBiblJsY25aaGJDQTlJSE5sZEVsdWRHVnlkbUZzS0daMWJtTjBhVzl1SUNncElIc2djMlZzWmk1ZmIyNUpiblJsY25aaGJDZ3BJSDBzSURFMU1DbGNiaUFnSUNBZ0lHbG1JQ2h6Wld4bUxsOXBiblJsY25aaGJDNTFibkpsWmlrZ2MyVnNaaTVmYVc1MFpYSjJZV3d1ZFc1eVpXWW9LVnh1SUNBZ0lIMWNibHh1SUNBZ0lITmxiR1l1WDJSbFluVm5LQ2RqYjI1dVpXTjBKeWxjYmlBZ0lDQnpaV3htTG1WdGFYUW9KMk52Ym01bFkzUW5LVnh1SUNCOUtWeHVmVnh1WEc1UVpXVnlMbkJ5YjNSdmRIbHdaUzVmYjI1SmJuUmxjblpoYkNBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ2FXWWdLQ0YwYUdsekxsOWpZaUI4ZkNBaGRHaHBjeTVmWTJoaGJtNWxiQ0I4ZkNCMGFHbHpMbDlqYUdGdWJtVnNMbUoxWm1abGNtVmtRVzF2ZFc1MElENGdUVUZZWDBKVlJrWkZVa1ZFWDBGTlQxVk9WQ2tnZTF4dUlDQWdJSEpsZEhWeWJseHVJQ0I5WEc0Z0lIUm9hWE11WDI5dVEyaGhibTVsYkVKMVptWmxjbVZrUVcxdmRXNTBURzkzS0NsY2JuMWNibHh1VUdWbGNpNXdjbTkwYjNSNWNHVXVYMjl1VTJsbmJtRnNhVzVuVTNSaGRHVkRhR0Z1WjJVZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lIWmhjaUJ6Wld4bUlEMGdkR2hwYzF4dUlDQnBaaUFvYzJWc1ppNWtaWE4wY205NVpXUXBJSEpsZEhWeWJseHVJQ0J6Wld4bUxsOWtaV0oxWnlnbmMybG5ibUZzYVc1blUzUmhkR1ZEYUdGdVoyVWdKWE1uTENCelpXeG1MbDl3WXk1emFXZHVZV3hwYm1kVGRHRjBaU2xjYmlBZ2MyVnNaaTVsYldsMEtDZHphV2R1WVd4cGJtZFRkR0YwWlVOb1lXNW5aU2NzSUhObGJHWXVYM0JqTG5OcFoyNWhiR2x1WjFOMFlYUmxLVnh1ZlZ4dVhHNVFaV1Z5TG5CeWIzUnZkSGx3WlM1ZmIyNUpZMlZEWVc1a2FXUmhkR1VnUFNCbWRXNWpkR2x2YmlBb1pYWmxiblFwSUh0Y2JpQWdkbUZ5SUhObGJHWWdQU0IwYUdselhHNGdJR2xtSUNoelpXeG1MbVJsYzNSeWIzbGxaQ2tnY21WMGRYSnVYRzRnSUdsbUlDaGxkbVZ1ZEM1allXNWthV1JoZEdVZ0ppWWdjMlZzWmk1MGNtbGphMnhsS1NCN1hHNGdJQ0FnYzJWc1ppNWxiV2wwS0NkemFXZHVZV3duTENCN1hHNGdJQ0FnSUNCallXNWthV1JoZEdVNklIdGNiaUFnSUNBZ0lDQWdZMkZ1Wkdsa1lYUmxPaUJsZG1WdWRDNWpZVzVrYVdSaGRHVXVZMkZ1Wkdsa1lYUmxMRnh1SUNBZ0lDQWdJQ0J6WkhCTlRHbHVaVWx1WkdWNE9pQmxkbVZ1ZEM1allXNWthV1JoZEdVdWMyUndUVXhwYm1WSmJtUmxlQ3hjYmlBZ0lDQWdJQ0FnYzJSd1RXbGtPaUJsZG1WdWRDNWpZVzVrYVdSaGRHVXVjMlJ3VFdsa1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlNsY2JpQWdmU0JsYkhObElHbG1JQ2doWlhabGJuUXVZMkZ1Wkdsa1lYUmxLU0I3WEc0Z0lDQWdjMlZzWmk1ZmFXTmxRMjl0Y0d4bGRHVWdQU0IwY25WbFhHNGdJQ0FnYzJWc1ppNWxiV2wwS0NkZmFXTmxRMjl0Y0d4bGRHVW5LVnh1SUNCOVhHNTlYRzVjYmxCbFpYSXVjSEp2ZEc5MGVYQmxMbDl2YmtOb1lXNXVaV3hOWlhOellXZGxJRDBnWm5WdVkzUnBiMjRnS0dWMlpXNTBLU0I3WEc0Z0lIWmhjaUJ6Wld4bUlEMGdkR2hwYzF4dUlDQnBaaUFvYzJWc1ppNWtaWE4wY205NVpXUXBJSEpsZEhWeWJseHVJQ0IyWVhJZ1pHRjBZU0E5SUdWMlpXNTBMbVJoZEdGY2JpQWdhV1lnS0dSaGRHRWdhVzV6ZEdGdVkyVnZaaUJCY25KaGVVSjFabVpsY2lrZ1pHRjBZU0E5SUc1bGR5QkNkV1ptWlhJb1pHRjBZU2xjYmlBZ2MyVnNaaTV3ZFhOb0tHUmhkR0VwWEc1OVhHNWNibEJsWlhJdWNISnZkRzkwZVhCbExsOXZia05vWVc1dVpXeENkV1ptWlhKbFpFRnRiM1Z1ZEV4dmR5QTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdkbUZ5SUhObGJHWWdQU0IwYUdselhHNGdJR2xtSUNoelpXeG1MbVJsYzNSeWIzbGxaQ0I4ZkNBaGMyVnNaaTVmWTJJcElISmxkSFZ5Ymx4dUlDQnpaV3htTGw5a1pXSjFaeWduWlc1a2FXNW5JR0poWTJ0d2NtVnpjM1Z5WlRvZ1luVm1abVZ5WldSQmJXOTFiblFnSldRbkxDQnpaV3htTGw5amFHRnVibVZzTG1KMVptWmxjbVZrUVcxdmRXNTBLVnh1SUNCMllYSWdZMklnUFNCelpXeG1MbDlqWWx4dUlDQnpaV3htTGw5allpQTlJRzUxYkd4Y2JpQWdZMklvYm5Wc2JDbGNibjFjYmx4dVVHVmxjaTV3Y205MGIzUjVjR1V1WDI5dVEyaGhibTVsYkU5d1pXNGdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJSFpoY2lCelpXeG1JRDBnZEdocGMxeHVJQ0JwWmlBb2MyVnNaaTVqYjI1dVpXTjBaV1FnZkh3Z2MyVnNaaTVrWlhOMGNtOTVaV1FwSUhKbGRIVnlibHh1SUNCelpXeG1MbDlrWldKMVp5Z25iMjRnWTJoaGJtNWxiQ0J2Y0dWdUp5bGNiaUFnYzJWc1ppNWZZMmhoYm01bGJGSmxZV1I1SUQwZ2RISjFaVnh1SUNCelpXeG1MbDl0WVhsaVpWSmxZV1I1S0NsY2JuMWNibHh1VUdWbGNpNXdjbTkwYjNSNWNHVXVYMjl1UTJoaGJtNWxiRU5zYjNObElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQjJZWElnYzJWc1ppQTlJSFJvYVhOY2JpQWdhV1lnS0hObGJHWXVaR1Z6ZEhKdmVXVmtLU0J5WlhSMWNtNWNiaUFnYzJWc1ppNWZaR1ZpZFdjb0oyOXVJR05vWVc1dVpXd2dZMnh2YzJVbktWeHVJQ0J6Wld4bUxsOWtaWE4wY205NUtDbGNibjFjYmx4dVVHVmxjaTV3Y205MGIzUjVjR1V1WDI5dVFXUmtVM1J5WldGdElEMGdablZ1WTNScGIyNGdLR1YyWlc1MEtTQjdYRzRnSUhaaGNpQnpaV3htSUQwZ2RHaHBjMXh1SUNCcFppQW9jMlZzWmk1a1pYTjBjbTk1WldRcElISmxkSFZ5Ymx4dUlDQnpaV3htTGw5a1pXSjFaeWduYjI0Z1lXUmtJSE4wY21WaGJTY3BYRzRnSUhObGJHWXVaVzFwZENnbmMzUnlaV0Z0Snl3Z1pYWmxiblF1YzNSeVpXRnRLVnh1ZlZ4dVhHNVFaV1Z5TG5CeWIzUnZkSGx3WlM1ZmIyNVVjbUZqYXlBOUlHWjFibU4wYVc5dUlDaGxkbVZ1ZENrZ2UxeHVJQ0IyWVhJZ2MyVnNaaUE5SUhSb2FYTmNiaUFnYVdZZ0tITmxiR1l1WkdWemRISnZlV1ZrS1NCeVpYUjFjbTVjYmlBZ2MyVnNaaTVmWkdWaWRXY29KMjl1SUhSeVlXTnJKeWxjYmlBZ2RtRnlJR2xrSUQwZ1pYWmxiblF1YzNSeVpXRnRjMXN3WFM1cFpGeHVJQ0JwWmlBb2MyVnNaaTVmY0hKbGRtbHZkWE5UZEhKbFlXMXpMbWx1WkdWNFQyWW9hV1FwSUNFOVBTQXRNU2tnY21WMGRYSnVJQzh2SUU5dWJIa2dabWx5WlNCdmJtVWdKM04wY21WaGJTY2daWFpsYm5Rc0lHVjJaVzRnZEdodmRXZG9JSFJvWlhKbElHMWhlU0JpWlNCdGRXeDBhWEJzWlNCMGNtRmphM01nY0dWeUlITjBjbVZoYlZ4dUlDQnpaV3htTGw5d2NtVjJhVzkxYzFOMGNtVmhiWE11Y0hWemFDaHBaQ2xjYmlBZ2MyVnNaaTVsYldsMEtDZHpkSEpsWVcwbkxDQmxkbVZ1ZEM1emRISmxZVzF6V3pCZEtWeHVmVnh1WEc1UVpXVnlMbkJ5YjNSdmRIbHdaUzVmYjI1RmNuSnZjaUE5SUdaMWJtTjBhVzl1SUNobGNuSXBJSHRjYmlBZ2RtRnlJSE5sYkdZZ1BTQjBhR2x6WEc0Z0lHbG1JQ2h6Wld4bUxtUmxjM1J5YjNsbFpDa2djbVYwZFhKdVhHNGdJSE5sYkdZdVgyUmxZblZuS0NkbGNuSnZjaUFsY3ljc0lHVnljaTV0WlhOellXZGxJSHg4SUdWeWNpbGNiaUFnYzJWc1ppNWZaR1Z6ZEhKdmVTaGxjbklwWEc1OVhHNWNibEJsWlhJdWNISnZkRzkwZVhCbExsOWtaV0oxWnlBOUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ2RtRnlJSE5sYkdZZ1BTQjBhR2x6WEc0Z0lIWmhjaUJoY21keklEMGdXMTB1YzJ4cFkyVXVZMkZzYkNoaGNtZDFiV1Z1ZEhNcFhHNGdJR0Z5WjNOYk1GMGdQU0FuV3ljZ0t5QnpaV3htTGw5cFpDQXJJQ2RkSUNjZ0t5QmhjbWR6V3pCZFhHNGdJR1JsWW5WbkxtRndjR3g1S0c1MWJHd3NJR0Z5WjNNcFhHNTlYRzVjYmk4dklGUnlZVzV6Wm05eWJTQmpiMjV6ZEhKaGFXNTBjeUJ2WW1wbFkzUnpJR2x1ZEc4Z2RHaGxJRzVsZHlCbWIzSnRZWFFnS0hWdWJHVnpjeUJEYUhKdmJXbDFiU2xjYmk4dklGUlBSRTg2SUZSb2FYTWdZMkZ1SUdKbElISmxiVzkyWldRZ2QyaGxiaUJEYUhKdmJXbDFiU0J6ZFhCd2IzSjBjeUIwYUdVZ2JtVjNJR1p2Y20xaGRGeHVVR1ZsY2k1d2NtOTBiM1I1Y0dVdVgzUnlZVzV6Wm05eWJVTnZibk4wY21GcGJuUnpJRDBnWm5WdVkzUnBiMjRnS0dOdmJuTjBjbUZwYm5SektTQjdYRzRnSUhaaGNpQnpaV3htSUQwZ2RHaHBjMXh1WEc0Z0lHbG1JQ2hQWW1wbFkzUXVhMlY1Y3loamIyNXpkSEpoYVc1MGN5a3ViR1Z1WjNSb0lEMDlQU0F3S1NCN1hHNGdJQ0FnY21WMGRYSnVJR052Ym5OMGNtRnBiblJ6WEc0Z0lIMWNibHh1SUNCcFppQW9LR052Ym5OMGNtRnBiblJ6TG0xaGJtUmhkRzl5ZVNCOGZDQmpiMjV6ZEhKaGFXNTBjeTV2Y0hScGIyNWhiQ2tnSmlZZ0lYTmxiR1l1WDJselEyaHliMjFwZFcwcElIdGNiaUFnSUNBdkx5QmpiMjUyWlhKMElIUnZJRzVsZHlCbWIzSnRZWFJjYmx4dUlDQWdJQzh2SUUxbGNtZGxJRzFoYm1SaGRHOXllU0JoYm1RZ2IzQjBhVzl1WVd3Z2IySnFaV04wY3l3Z2NISnBiM0pwZEdsNmFXNW5JRzFoYm1SaGRHOXllVnh1SUNBZ0lIWmhjaUJ1WlhkRGIyNXpkSEpoYVc1MGN5QTlJRTlpYW1WamRDNWhjM05wWjI0b2UzMHNJR052Ym5OMGNtRnBiblJ6TG05d2RHbHZibUZzTENCamIyNXpkSEpoYVc1MGN5NXRZVzVrWVhSdmNua3BYRzVjYmlBZ0lDQXZMeUJtYVhnZ1kyRnphVzVuWEc0Z0lDQWdhV1lnS0c1bGQwTnZibk4wY21GcGJuUnpMazltWm1WeVZHOVNaV05sYVhabFZtbGtaVzhnSVQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdibVYzUTI5dWMzUnlZV2x1ZEhNdWIyWm1aWEpVYjFKbFkyVnBkbVZXYVdSbGJ5QTlJRzVsZDBOdmJuTjBjbUZwYm5SekxrOW1abVZ5Vkc5U1pXTmxhWFpsVm1sa1pXOWNiaUFnSUNBZ0lHUmxiR1YwWlNCdVpYZERiMjV6ZEhKaGFXNTBjMXNuVDJabVpYSlViMUpsWTJWcGRtVldhV1JsYnlkZFhHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tHNWxkME52Ym5OMGNtRnBiblJ6TGs5bVptVnlWRzlTWldObGFYWmxRWFZrYVc4Z0lUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnYm1WM1EyOXVjM1J5WVdsdWRITXViMlptWlhKVWIxSmxZMlZwZG1WQmRXUnBieUE5SUc1bGQwTnZibk4wY21GcGJuUnpMazltWm1WeVZHOVNaV05sYVhabFFYVmthVzljYmlBZ0lDQWdJR1JsYkdWMFpTQnVaWGREYjI1emRISmhhVzUwYzFzblQyWm1aWEpVYjFKbFkyVnBkbVZCZFdScGJ5ZGRYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUc1bGQwTnZibk4wY21GcGJuUnpYRzRnSUgwZ1pXeHpaU0JwWmlBb0lXTnZibk4wY21GcGJuUnpMbTFoYm1SaGRHOXllU0FtSmlBaFkyOXVjM1J5WVdsdWRITXViM0IwYVc5dVlXd2dKaVlnYzJWc1ppNWZhWE5EYUhKdmJXbDFiU2tnZTF4dUlDQWdJQzh2SUdOdmJuWmxjblFnZEc4Z2IyeGtJR1p2Y20xaGRGeHVYRzRnSUNBZ0x5OGdabWw0SUdOaGMybHVaMXh1SUNBZ0lHbG1JQ2hqYjI1emRISmhhVzUwY3k1dlptWmxjbFJ2VW1WalpXbDJaVlpwWkdWdklDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUdOdmJuTjBjbUZwYm5SekxrOW1abVZ5Vkc5U1pXTmxhWFpsVm1sa1pXOGdQU0JqYjI1emRISmhhVzUwY3k1dlptWmxjbFJ2VW1WalpXbDJaVlpwWkdWdlhHNGdJQ0FnSUNCa1pXeGxkR1VnWTI5dWMzUnlZV2x1ZEhOYkoyOW1abVZ5Vkc5U1pXTmxhWFpsVm1sa1pXOG5YVnh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2hqYjI1emRISmhhVzUwY3k1dlptWmxjbFJ2VW1WalpXbDJaVUYxWkdsdklDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUdOdmJuTjBjbUZwYm5SekxrOW1abVZ5Vkc5U1pXTmxhWFpsUVhWa2FXOGdQU0JqYjI1emRISmhhVzUwY3k1dlptWmxjbFJ2VW1WalpXbDJaVUYxWkdsdlhHNGdJQ0FnSUNCa1pXeGxkR1VnWTI5dWMzUnlZV2x1ZEhOYkoyOW1abVZ5Vkc5U1pXTmxhWFpsUVhWa2FXOG5YVnh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNCdFlXNWtZWFJ2Y25rNklHTnZibk4wY21GcGJuUnpJQzh2SUU1UFZFVTZJRUZzYkNCamIyNXpkSEpoYVc1MGN5QmhjbVVnZFhCbmNtRmtaV1FnZEc4Z2JXRnVaR0YwYjNKNVhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUdOdmJuTjBjbUZwYm5SelhHNTlYRzVjYm1aMWJtTjBhVzl1SUc1dmIzQWdLQ2tnZTMxY2JpSmRmUT09IiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBTb3J0ZWRBcnJheVxudmFyIHNlYXJjaCA9IHJlcXVpcmUoJ2JpbmFyeS1zZWFyY2gnKVxuXG5mdW5jdGlvbiBTb3J0ZWRBcnJheShjbXAsIGFycikge1xuICBpZiAodHlwZW9mIGNtcCAhPSAnZnVuY3Rpb24nKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2NvbXBhcmF0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uJylcblxuICB0aGlzLmFyciA9IGFyciB8fCBbXVxuICB0aGlzLmNtcCA9IGNtcFxufVxuXG5Tb3J0ZWRBcnJheS5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICB2YXIgaW5kZXggPSBzZWFyY2godGhpcy5hcnIsIGVsZW1lbnQsIHRoaXMuY21wKVxuICBpZiAoaW5kZXggPCAwKVxuICAgIGluZGV4ID0gfmluZGV4XG5cbiAgdGhpcy5hcnIuc3BsaWNlKGluZGV4LCAwLCBlbGVtZW50KVxufVxuXG5Tb3J0ZWRBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgdmFyIGluZGV4ID0gc2VhcmNoKHRoaXMuYXJyLCBlbGVtZW50LCB0aGlzLmNtcClcbiAgcmV0dXJuIGluZGV4ID49IDBcbiAgICA/IGluZGV4XG4gICAgOiAtMVxufVxuXG5Tb3J0ZWRBcnJheS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICB2YXIgaW5kZXggPSBzZWFyY2godGhpcy5hcnIsIGVsZW1lbnQsIHRoaXMuY21wKVxuICBpZiAoaW5kZXggPCAwKVxuICAgIHJldHVybiBmYWxzZVxuXG4gIHRoaXMuYXJyLnNwbGljZShpbmRleCwgMSlcbiAgcmV0dXJuIHRydWVcbn1cbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJykuQnVmZmVyO1xuXG52YXIgaXNCdWZmZXJFbmNvZGluZyA9IEJ1ZmZlci5pc0VuY29kaW5nXG4gIHx8IGZ1bmN0aW9uKGVuY29kaW5nKSB7XG4gICAgICAgc3dpdGNoIChlbmNvZGluZyAmJiBlbmNvZGluZy50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICBjYXNlICdoZXgnOiBjYXNlICd1dGY4JzogY2FzZSAndXRmLTgnOiBjYXNlICdhc2NpaSc6IGNhc2UgJ2JpbmFyeSc6IGNhc2UgJ2Jhc2U2NCc6IGNhc2UgJ3VjczInOiBjYXNlICd1Y3MtMic6IGNhc2UgJ3V0ZjE2bGUnOiBjYXNlICd1dGYtMTZsZSc6IGNhc2UgJ3Jhdyc6IHJldHVybiB0cnVlO1xuICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGZhbHNlO1xuICAgICAgIH1cbiAgICAgfVxuXG5cbmZ1bmN0aW9uIGFzc2VydEVuY29kaW5nKGVuY29kaW5nKSB7XG4gIGlmIChlbmNvZGluZyAmJiAhaXNCdWZmZXJFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZyk7XG4gIH1cbn1cblxuLy8gU3RyaW5nRGVjb2RlciBwcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIGVmZmljaWVudGx5IHNwbGl0dGluZyBhIHNlcmllcyBvZlxuLy8gYnVmZmVycyBpbnRvIGEgc2VyaWVzIG9mIEpTIHN0cmluZ3Mgd2l0aG91dCBicmVha2luZyBhcGFydCBtdWx0aS1ieXRlXG4vLyBjaGFyYWN0ZXJzLiBDRVNVLTggaXMgaGFuZGxlZCBhcyBwYXJ0IG9mIHRoZSBVVEYtOCBlbmNvZGluZy5cbi8vXG4vLyBAVE9ETyBIYW5kbGluZyBhbGwgZW5jb2RpbmdzIGluc2lkZSBhIHNpbmdsZSBvYmplY3QgbWFrZXMgaXQgdmVyeSBkaWZmaWN1bHRcbi8vIHRvIHJlYXNvbiBhYm91dCB0aGlzIGNvZGUsIHNvIGl0IHNob3VsZCBiZSBzcGxpdCB1cCBpbiB0aGUgZnV0dXJlLlxuLy8gQFRPRE8gVGhlcmUgc2hvdWxkIGJlIGEgdXRmOC1zdHJpY3QgZW5jb2RpbmcgdGhhdCByZWplY3RzIGludmFsaWQgVVRGLTggY29kZVxuLy8gcG9pbnRzIGFzIHVzZWQgYnkgQ0VTVS04LlxudmFyIFN0cmluZ0RlY29kZXIgPSBleHBvcnRzLlN0cmluZ0RlY29kZXIgPSBmdW5jdGlvbihlbmNvZGluZykge1xuICB0aGlzLmVuY29kaW5nID0gKGVuY29kaW5nIHx8ICd1dGY4JykudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bLV9dLywgJycpO1xuICBhc3NlcnRFbmNvZGluZyhlbmNvZGluZyk7XG4gIHN3aXRjaCAodGhpcy5lbmNvZGluZykge1xuICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgLy8gQ0VTVS04IHJlcHJlc2VudHMgZWFjaCBvZiBTdXJyb2dhdGUgUGFpciBieSAzLWJ5dGVzXG4gICAgICB0aGlzLnN1cnJvZ2F0ZVNpemUgPSAzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICAvLyBVVEYtMTYgcmVwcmVzZW50cyBlYWNoIG9mIFN1cnJvZ2F0ZSBQYWlyIGJ5IDItYnl0ZXNcbiAgICAgIHRoaXMuc3Vycm9nYXRlU2l6ZSA9IDI7XG4gICAgICB0aGlzLmRldGVjdEluY29tcGxldGVDaGFyID0gdXRmMTZEZXRlY3RJbmNvbXBsZXRlQ2hhcjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAvLyBCYXNlLTY0IHN0b3JlcyAzIGJ5dGVzIGluIDQgY2hhcnMsIGFuZCBwYWRzIHRoZSByZW1haW5kZXIuXG4gICAgICB0aGlzLnN1cnJvZ2F0ZVNpemUgPSAzO1xuICAgICAgdGhpcy5kZXRlY3RJbmNvbXBsZXRlQ2hhciA9IGJhc2U2NERldGVjdEluY29tcGxldGVDaGFyO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRoaXMud3JpdGUgPSBwYXNzVGhyb3VnaFdyaXRlO1xuICAgICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRW5vdWdoIHNwYWNlIHRvIHN0b3JlIGFsbCBieXRlcyBvZiBhIHNpbmdsZSBjaGFyYWN0ZXIuIFVURi04IG5lZWRzIDRcbiAgLy8gYnl0ZXMsIGJ1dCBDRVNVLTggbWF5IHJlcXVpcmUgdXAgdG8gNiAoMyBieXRlcyBwZXIgc3Vycm9nYXRlKS5cbiAgdGhpcy5jaGFyQnVmZmVyID0gbmV3IEJ1ZmZlcig2KTtcbiAgLy8gTnVtYmVyIG9mIGJ5dGVzIHJlY2VpdmVkIGZvciB0aGUgY3VycmVudCBpbmNvbXBsZXRlIG11bHRpLWJ5dGUgY2hhcmFjdGVyLlxuICB0aGlzLmNoYXJSZWNlaXZlZCA9IDA7XG4gIC8vIE51bWJlciBvZiBieXRlcyBleHBlY3RlZCBmb3IgdGhlIGN1cnJlbnQgaW5jb21wbGV0ZSBtdWx0aS1ieXRlIGNoYXJhY3Rlci5cbiAgdGhpcy5jaGFyTGVuZ3RoID0gMDtcbn07XG5cblxuLy8gd3JpdGUgZGVjb2RlcyB0aGUgZ2l2ZW4gYnVmZmVyIGFuZCByZXR1cm5zIGl0IGFzIEpTIHN0cmluZyB0aGF0IGlzXG4vLyBndWFyYW50ZWVkIHRvIG5vdCBjb250YWluIGFueSBwYXJ0aWFsIG11bHRpLWJ5dGUgY2hhcmFjdGVycy4gQW55IHBhcnRpYWxcbi8vIGNoYXJhY3RlciBmb3VuZCBhdCB0aGUgZW5kIG9mIHRoZSBidWZmZXIgaXMgYnVmZmVyZWQgdXAsIGFuZCB3aWxsIGJlXG4vLyByZXR1cm5lZCB3aGVuIGNhbGxpbmcgd3JpdGUgYWdhaW4gd2l0aCB0aGUgcmVtYWluaW5nIGJ5dGVzLlxuLy9cbi8vIE5vdGU6IENvbnZlcnRpbmcgYSBCdWZmZXIgY29udGFpbmluZyBhbiBvcnBoYW4gc3Vycm9nYXRlIHRvIGEgU3RyaW5nXG4vLyBjdXJyZW50bHkgd29ya3MsIGJ1dCBjb252ZXJ0aW5nIGEgU3RyaW5nIHRvIGEgQnVmZmVyICh2aWEgYG5ldyBCdWZmZXJgLCBvclxuLy8gQnVmZmVyI3dyaXRlKSB3aWxsIHJlcGxhY2UgaW5jb21wbGV0ZSBzdXJyb2dhdGVzIHdpdGggdGhlIHVuaWNvZGVcbi8vIHJlcGxhY2VtZW50IGNoYXJhY3Rlci4gU2VlIGh0dHBzOi8vY29kZXJldmlldy5jaHJvbWl1bS5vcmcvMTIxMTczMDA5LyAuXG5TdHJpbmdEZWNvZGVyLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uKGJ1ZmZlcikge1xuICB2YXIgY2hhclN0ciA9ICcnO1xuICAvLyBpZiBvdXIgbGFzdCB3cml0ZSBlbmRlZCB3aXRoIGFuIGluY29tcGxldGUgbXVsdGlieXRlIGNoYXJhY3RlclxuICB3aGlsZSAodGhpcy5jaGFyTGVuZ3RoKSB7XG4gICAgLy8gZGV0ZXJtaW5lIGhvdyBtYW55IHJlbWFpbmluZyBieXRlcyB0aGlzIGJ1ZmZlciBoYXMgdG8gb2ZmZXIgZm9yIHRoaXMgY2hhclxuICAgIHZhciBhdmFpbGFibGUgPSAoYnVmZmVyLmxlbmd0aCA+PSB0aGlzLmNoYXJMZW5ndGggLSB0aGlzLmNoYXJSZWNlaXZlZCkgP1xuICAgICAgICB0aGlzLmNoYXJMZW5ndGggLSB0aGlzLmNoYXJSZWNlaXZlZCA6XG4gICAgICAgIGJ1ZmZlci5sZW5ndGg7XG5cbiAgICAvLyBhZGQgdGhlIG5ldyBieXRlcyB0byB0aGUgY2hhciBidWZmZXJcbiAgICBidWZmZXIuY29weSh0aGlzLmNoYXJCdWZmZXIsIHRoaXMuY2hhclJlY2VpdmVkLCAwLCBhdmFpbGFibGUpO1xuICAgIHRoaXMuY2hhclJlY2VpdmVkICs9IGF2YWlsYWJsZTtcblxuICAgIGlmICh0aGlzLmNoYXJSZWNlaXZlZCA8IHRoaXMuY2hhckxlbmd0aCkge1xuICAgICAgLy8gc3RpbGwgbm90IGVub3VnaCBjaGFycyBpbiB0aGlzIGJ1ZmZlcj8gd2FpdCBmb3IgbW9yZSAuLi5cbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgYnl0ZXMgYmVsb25naW5nIHRvIHRoZSBjdXJyZW50IGNoYXJhY3RlciBmcm9tIHRoZSBidWZmZXJcbiAgICBidWZmZXIgPSBidWZmZXIuc2xpY2UoYXZhaWxhYmxlLCBidWZmZXIubGVuZ3RoKTtcblxuICAgIC8vIGdldCB0aGUgY2hhcmFjdGVyIHRoYXQgd2FzIHNwbGl0XG4gICAgY2hhclN0ciA9IHRoaXMuY2hhckJ1ZmZlci5zbGljZSgwLCB0aGlzLmNoYXJMZW5ndGgpLnRvU3RyaW5nKHRoaXMuZW5jb2RpbmcpO1xuXG4gICAgLy8gQ0VTVS04OiBsZWFkIHN1cnJvZ2F0ZSAoRDgwMC1EQkZGKSBpcyBhbHNvIHRoZSBpbmNvbXBsZXRlIGNoYXJhY3RlclxuICAgIHZhciBjaGFyQ29kZSA9IGNoYXJTdHIuY2hhckNvZGVBdChjaGFyU3RyLmxlbmd0aCAtIDEpO1xuICAgIGlmIChjaGFyQ29kZSA+PSAweEQ4MDAgJiYgY2hhckNvZGUgPD0gMHhEQkZGKSB7XG4gICAgICB0aGlzLmNoYXJMZW5ndGggKz0gdGhpcy5zdXJyb2dhdGVTaXplO1xuICAgICAgY2hhclN0ciA9ICcnO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHRoaXMuY2hhclJlY2VpdmVkID0gdGhpcy5jaGFyTGVuZ3RoID0gMDtcblxuICAgIC8vIGlmIHRoZXJlIGFyZSBubyBtb3JlIGJ5dGVzIGluIHRoaXMgYnVmZmVyLCBqdXN0IGVtaXQgb3VyIGNoYXJcbiAgICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGNoYXJTdHI7XG4gICAgfVxuICAgIGJyZWFrO1xuICB9XG5cbiAgLy8gZGV0ZXJtaW5lIGFuZCBzZXQgY2hhckxlbmd0aCAvIGNoYXJSZWNlaXZlZFxuICB0aGlzLmRldGVjdEluY29tcGxldGVDaGFyKGJ1ZmZlcik7XG5cbiAgdmFyIGVuZCA9IGJ1ZmZlci5sZW5ndGg7XG4gIGlmICh0aGlzLmNoYXJMZW5ndGgpIHtcbiAgICAvLyBidWZmZXIgdGhlIGluY29tcGxldGUgY2hhcmFjdGVyIGJ5dGVzIHdlIGdvdFxuICAgIGJ1ZmZlci5jb3B5KHRoaXMuY2hhckJ1ZmZlciwgMCwgYnVmZmVyLmxlbmd0aCAtIHRoaXMuY2hhclJlY2VpdmVkLCBlbmQpO1xuICAgIGVuZCAtPSB0aGlzLmNoYXJSZWNlaXZlZDtcbiAgfVxuXG4gIGNoYXJTdHIgKz0gYnVmZmVyLnRvU3RyaW5nKHRoaXMuZW5jb2RpbmcsIDAsIGVuZCk7XG5cbiAgdmFyIGVuZCA9IGNoYXJTdHIubGVuZ3RoIC0gMTtcbiAgdmFyIGNoYXJDb2RlID0gY2hhclN0ci5jaGFyQ29kZUF0KGVuZCk7XG4gIC8vIENFU1UtODogbGVhZCBzdXJyb2dhdGUgKEQ4MDAtREJGRikgaXMgYWxzbyB0aGUgaW5jb21wbGV0ZSBjaGFyYWN0ZXJcbiAgaWYgKGNoYXJDb2RlID49IDB4RDgwMCAmJiBjaGFyQ29kZSA8PSAweERCRkYpIHtcbiAgICB2YXIgc2l6ZSA9IHRoaXMuc3Vycm9nYXRlU2l6ZTtcbiAgICB0aGlzLmNoYXJMZW5ndGggKz0gc2l6ZTtcbiAgICB0aGlzLmNoYXJSZWNlaXZlZCArPSBzaXplO1xuICAgIHRoaXMuY2hhckJ1ZmZlci5jb3B5KHRoaXMuY2hhckJ1ZmZlciwgc2l6ZSwgMCwgc2l6ZSk7XG4gICAgYnVmZmVyLmNvcHkodGhpcy5jaGFyQnVmZmVyLCAwLCAwLCBzaXplKTtcbiAgICByZXR1cm4gY2hhclN0ci5zdWJzdHJpbmcoMCwgZW5kKTtcbiAgfVxuXG4gIC8vIG9yIGp1c3QgZW1pdCB0aGUgY2hhclN0clxuICByZXR1cm4gY2hhclN0cjtcbn07XG5cbi8vIGRldGVjdEluY29tcGxldGVDaGFyIGRldGVybWluZXMgaWYgdGhlcmUgaXMgYW4gaW5jb21wbGV0ZSBVVEYtOCBjaGFyYWN0ZXIgYXRcbi8vIHRoZSBlbmQgb2YgdGhlIGdpdmVuIGJ1ZmZlci4gSWYgc28sIGl0IHNldHMgdGhpcy5jaGFyTGVuZ3RoIHRvIHRoZSBieXRlXG4vLyBsZW5ndGggdGhhdCBjaGFyYWN0ZXIsIGFuZCBzZXRzIHRoaXMuY2hhclJlY2VpdmVkIHRvIHRoZSBudW1iZXIgb2YgYnl0ZXNcbi8vIHRoYXQgYXJlIGF2YWlsYWJsZSBmb3IgdGhpcyBjaGFyYWN0ZXIuXG5TdHJpbmdEZWNvZGVyLnByb3RvdHlwZS5kZXRlY3RJbmNvbXBsZXRlQ2hhciA9IGZ1bmN0aW9uKGJ1ZmZlcikge1xuICAvLyBkZXRlcm1pbmUgaG93IG1hbnkgYnl0ZXMgd2UgaGF2ZSB0byBjaGVjayBhdCB0aGUgZW5kIG9mIHRoaXMgYnVmZmVyXG4gIHZhciBpID0gKGJ1ZmZlci5sZW5ndGggPj0gMykgPyAzIDogYnVmZmVyLmxlbmd0aDtcblxuICAvLyBGaWd1cmUgb3V0IGlmIG9uZSBvZiB0aGUgbGFzdCBpIGJ5dGVzIG9mIG91ciBidWZmZXIgYW5ub3VuY2VzIGFuXG4gIC8vIGluY29tcGxldGUgY2hhci5cbiAgZm9yICg7IGkgPiAwOyBpLS0pIHtcbiAgICB2YXIgYyA9IGJ1ZmZlcltidWZmZXIubGVuZ3RoIC0gaV07XG5cbiAgICAvLyBTZWUgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9VVEYtOCNEZXNjcmlwdGlvblxuXG4gICAgLy8gMTEwWFhYWFhcbiAgICBpZiAoaSA9PSAxICYmIGMgPj4gNSA9PSAweDA2KSB7XG4gICAgICB0aGlzLmNoYXJMZW5ndGggPSAyO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gMTExMFhYWFhcbiAgICBpZiAoaSA8PSAyICYmIGMgPj4gNCA9PSAweDBFKSB7XG4gICAgICB0aGlzLmNoYXJMZW5ndGggPSAzO1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gMTExMTBYWFhcbiAgICBpZiAoaSA8PSAzICYmIGMgPj4gMyA9PSAweDFFKSB7XG4gICAgICB0aGlzLmNoYXJMZW5ndGggPSA0O1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHRoaXMuY2hhclJlY2VpdmVkID0gaTtcbn07XG5cblN0cmluZ0RlY29kZXIucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uKGJ1ZmZlcikge1xuICB2YXIgcmVzID0gJyc7XG4gIGlmIChidWZmZXIgJiYgYnVmZmVyLmxlbmd0aClcbiAgICByZXMgPSB0aGlzLndyaXRlKGJ1ZmZlcik7XG5cbiAgaWYgKHRoaXMuY2hhclJlY2VpdmVkKSB7XG4gICAgdmFyIGNyID0gdGhpcy5jaGFyUmVjZWl2ZWQ7XG4gICAgdmFyIGJ1ZiA9IHRoaXMuY2hhckJ1ZmZlcjtcbiAgICB2YXIgZW5jID0gdGhpcy5lbmNvZGluZztcbiAgICByZXMgKz0gYnVmLnNsaWNlKDAsIGNyKS50b1N0cmluZyhlbmMpO1xuICB9XG5cbiAgcmV0dXJuIHJlcztcbn07XG5cbmZ1bmN0aW9uIHBhc3NUaHJvdWdoV3JpdGUoYnVmZmVyKSB7XG4gIHJldHVybiBidWZmZXIudG9TdHJpbmcodGhpcy5lbmNvZGluZyk7XG59XG5cbmZ1bmN0aW9uIHV0ZjE2RGV0ZWN0SW5jb21wbGV0ZUNoYXIoYnVmZmVyKSB7XG4gIHRoaXMuY2hhclJlY2VpdmVkID0gYnVmZmVyLmxlbmd0aCAlIDI7XG4gIHRoaXMuY2hhckxlbmd0aCA9IHRoaXMuY2hhclJlY2VpdmVkID8gMiA6IDA7XG59XG5cbmZ1bmN0aW9uIGJhc2U2NERldGVjdEluY29tcGxldGVDaGFyKGJ1ZmZlcikge1xuICB0aGlzLmNoYXJSZWNlaXZlZCA9IGJ1ZmZlci5sZW5ndGggJSAzO1xuICB0aGlzLmNoYXJMZW5ndGggPSB0aGlzLmNoYXJSZWNlaXZlZCA/IDMgOiAwO1xufVxuIiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZGVwcmVjYXRlO1xuXG4vKipcbiAqIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4gKiBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuICpcbiAqIElmIGBsb2NhbFN0b3JhZ2Uubm9EZXByZWNhdGlvbiA9IHRydWVgIGlzIHNldCwgdGhlbiBpdCBpcyBhIG5vLW9wLlxuICpcbiAqIElmIGBsb2NhbFN0b3JhZ2UudGhyb3dEZXByZWNhdGlvbiA9IHRydWVgIGlzIHNldCwgdGhlbiBkZXByZWNhdGVkIGZ1bmN0aW9uc1xuICogd2lsbCB0aHJvdyBhbiBFcnJvciB3aGVuIGludm9rZWQuXG4gKlxuICogSWYgYGxvY2FsU3RvcmFnZS50cmFjZURlcHJlY2F0aW9uID0gdHJ1ZWAgaXMgc2V0LCB0aGVuIGRlcHJlY2F0ZWQgZnVuY3Rpb25zXG4gKiB3aWxsIGludm9rZSBgY29uc29sZS50cmFjZSgpYCBpbnN0ZWFkIG9mIGBjb25zb2xlLmVycm9yKClgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gdGhlIGZ1bmN0aW9uIHRvIGRlcHJlY2F0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG1zZyAtIHRoZSBzdHJpbmcgdG8gcHJpbnQgdG8gdGhlIGNvbnNvbGUgd2hlbiBgZm5gIGlzIGludm9rZWRcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gYSBuZXcgXCJkZXByZWNhdGVkXCIgdmVyc2lvbiBvZiBgZm5gXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGRlcHJlY2F0ZSAoZm4sIG1zZykge1xuICBpZiAoY29uZmlnKCdub0RlcHJlY2F0aW9uJykpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChjb25maWcoJ3Rocm93RGVwcmVjYXRpb24nKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgIH0gZWxzZSBpZiAoY29uZmlnKCd0cmFjZURlcHJlY2F0aW9uJykpIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBgbG9jYWxTdG9yYWdlYCBmb3IgYm9vbGVhbiB2YWx1ZXMgZm9yIHRoZSBnaXZlbiBgbmFtZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY29uZmlnIChuYW1lKSB7XG4gIC8vIGFjY2Vzc2luZyBnbG9iYWwubG9jYWxTdG9yYWdlIGNhbiB0cmlnZ2VyIGEgRE9NRXhjZXB0aW9uIGluIHNhbmRib3hlZCBpZnJhbWVzXG4gIHRyeSB7XG4gICAgaWYgKCFnbG9iYWwubG9jYWxTdG9yYWdlKSByZXR1cm4gZmFsc2U7XG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHZhbCA9IGdsb2JhbC5sb2NhbFN0b3JhZ2VbbmFtZV07XG4gIGlmIChudWxsID09IHZhbCkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gU3RyaW5nKHZhbCkudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnO1xufVxuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTkxZEdsc0xXUmxjSEpsWTJGMFpTOWljbTkzYzJWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdRVUZCUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQklpd2labWxzWlNJNkltZGxibVZ5WVhSbFpDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpjYmk4cUtseHVJQ29nVFc5a2RXeGxJR1Y0Y0c5eWRITXVYRzRnS2k5Y2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQmtaWEJ5WldOaGRHVTdYRzVjYmk4cUtseHVJQ29nVFdGeWF5QjBhR0YwSUdFZ2JXVjBhRzlrSUhOb2IzVnNaQ0J1YjNRZ1ltVWdkWE5sWkM1Y2JpQXFJRkpsZEhWeWJuTWdZU0J0YjJScFptbGxaQ0JtZFc1amRHbHZiaUIzYUdsamFDQjNZWEp1Y3lCdmJtTmxJR0o1SUdSbFptRjFiSFF1WEc0Z0tseHVJQ29nU1dZZ1lHeHZZMkZzVTNSdmNtRm5aUzV1YjBSbGNISmxZMkYwYVc5dUlEMGdkSEoxWldBZ2FYTWdjMlYwTENCMGFHVnVJR2wwSUdseklHRWdibTh0YjNBdVhHNGdLbHh1SUNvZ1NXWWdZR3h2WTJGc1UzUnZjbUZuWlM1MGFISnZkMFJsY0hKbFkyRjBhVzl1SUQwZ2RISjFaV0FnYVhNZ2MyVjBMQ0IwYUdWdUlHUmxjSEpsWTJGMFpXUWdablZ1WTNScGIyNXpYRzRnS2lCM2FXeHNJSFJvY205M0lHRnVJRVZ5Y205eUlIZG9aVzRnYVc1MmIydGxaQzVjYmlBcVhHNGdLaUJKWmlCZ2JHOWpZV3hUZEc5eVlXZGxMblJ5WVdObFJHVndjbVZqWVhScGIyNGdQU0IwY25WbFlDQnBjeUJ6WlhRc0lIUm9aVzRnWkdWd2NtVmpZWFJsWkNCbWRXNWpkR2x2Ym5OY2JpQXFJSGRwYkd3Z2FXNTJiMnRsSUdCamIyNXpiMnhsTG5SeVlXTmxLQ2xnSUdsdWMzUmxZV1FnYjJZZ1lHTnZibk52YkdVdVpYSnliM0lvS1dBdVhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0R2RXNWpkR2x2Ym4wZ1ptNGdMU0IwYUdVZ1puVnVZM1JwYjI0Z2RHOGdaR1Z3Y21WallYUmxYRzRnS2lCQWNHRnlZVzBnZTFOMGNtbHVaMzBnYlhObklDMGdkR2hsSUhOMGNtbHVaeUIwYnlCd2NtbHVkQ0IwYnlCMGFHVWdZMjl1YzI5c1pTQjNhR1Z1SUdCbWJtQWdhWE1nYVc1MmIydGxaRnh1SUNvZ1FISmxkSFZ5Ym5NZ2UwWjFibU4wYVc5dWZTQmhJRzVsZHlCY0ltUmxjSEpsWTJGMFpXUmNJaUIyWlhKemFXOXVJRzltSUdCbWJtQmNiaUFxSUVCaGNHa2djSFZpYkdsalhHNGdLaTljYmx4dVpuVnVZM1JwYjI0Z1pHVndjbVZqWVhSbElDaG1iaXdnYlhObktTQjdYRzRnSUdsbUlDaGpiMjVtYVdjb0oyNXZSR1Z3Y21WallYUnBiMjRuS1NrZ2UxeHVJQ0FnSUhKbGRIVnliaUJtYmp0Y2JpQWdmVnh1WEc0Z0lIWmhjaUIzWVhKdVpXUWdQU0JtWVd4elpUdGNiaUFnWm5WdVkzUnBiMjRnWkdWd2NtVmpZWFJsWkNncElIdGNiaUFnSUNCcFppQW9JWGRoY201bFpDa2dlMXh1SUNBZ0lDQWdhV1lnS0dOdmJtWnBaeWduZEdoeWIzZEVaWEJ5WldOaGRHbHZiaWNwS1NCN1hHNGdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lodGMyY3BPMXh1SUNBZ0lDQWdmU0JsYkhObElHbG1JQ2hqYjI1bWFXY29KM1J5WVdObFJHVndjbVZqWVhScGIyNG5LU2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpiMnhsTG5SeVlXTmxLRzF6WnlrN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCamIyNXpiMnhsTG5kaGNtNG9iWE5uS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUhkaGNtNWxaQ0E5SUhSeWRXVTdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJtYmk1aGNIQnNlU2gwYUdsekxDQmhjbWQxYldWdWRITXBPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJR1JsY0hKbFkyRjBaV1E3WEc1OVhHNWNiaThxS2x4dUlDb2dRMmhsWTJ0eklHQnNiMk5oYkZOMGIzSmhaMlZnSUdadmNpQmliMjlzWldGdUlIWmhiSFZsY3lCbWIzSWdkR2hsSUdkcGRtVnVJR0J1WVcxbFlDNWNiaUFxWEc0Z0tpQkFjR0Z5WVcwZ2UxTjBjbWx1WjMwZ2JtRnRaVnh1SUNvZ1FISmxkSFZ5Ym5NZ2UwSnZiMnhsWVc1OVhHNGdLaUJBWVhCcElIQnlhWFpoZEdWY2JpQXFMMXh1WEc1bWRXNWpkR2x2YmlCamIyNW1hV2NnS0c1aGJXVXBJSHRjYmlBZ0x5OGdZV05qWlhOemFXNW5JR2RzYjJKaGJDNXNiMk5oYkZOMGIzSmhaMlVnWTJGdUlIUnlhV2RuWlhJZ1lTQkVUMDFGZUdObGNIUnBiMjRnYVc0Z2MyRnVaR0p2ZUdWa0lHbG1jbUZ0WlhOY2JpQWdkSEo1SUh0Y2JpQWdJQ0JwWmlBb0lXZHNiMkpoYkM1c2IyTmhiRk4wYjNKaFoyVXBJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdmU0JqWVhSamFDQW9YeWtnZTF4dUlDQWdJSEpsZEhWeWJpQm1ZV3h6WlR0Y2JpQWdmVnh1SUNCMllYSWdkbUZzSUQwZ1oyeHZZbUZzTG14dlkyRnNVM1J2Y21GblpWdHVZVzFsWFR0Y2JpQWdhV1lnS0c1MWJHd2dQVDBnZG1Gc0tTQnlaWFIxY200Z1ptRnNjMlU3WEc0Z0lISmxkSFZ5YmlCVGRISnBibWNvZG1Gc0tTNTBiMHh2ZDJWeVEyRnpaU2dwSUQwOVBTQW5kSEoxWlNjN1hHNTlYRzRpWFgwPSIsIi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG52YXIgYnl0ZVRvSGV4ID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9VdWlkKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDA7XG4gIHZhciBidGggPSBieXRlVG9IZXg7XG4gIHJldHVybiAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ5dGVzVG9VdWlkO1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwpe1xuLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIEluIHRoZVxuLy8gYnJvd3NlciB0aGlzIGlzIGEgbGl0dGxlIGNvbXBsaWNhdGVkIGR1ZSB0byB1bmtub3duIHF1YWxpdHkgb2YgTWF0aC5yYW5kb20oKVxuLy8gYW5kIGluY29uc2lzdGVudCBzdXBwb3J0IGZvciB0aGUgYGNyeXB0b2AgQVBJLiAgV2UgZG8gdGhlIGJlc3Qgd2UgY2FuIHZpYVxuLy8gZmVhdHVyZS1kZXRlY3Rpb25cbnZhciBybmc7XG5cbnZhciBjcnlwdG8gPSBnbG9iYWwuY3J5cHRvIHx8IGdsb2JhbC5tc0NyeXB0bzsgLy8gZm9yIElFIDExXG5pZiAoY3J5cHRvICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMpIHtcbiAgLy8gV0hBVFdHIGNyeXB0byBSTkcgLSBodHRwOi8vd2lraS53aGF0d2cub3JnL3dpa2kvQ3J5cHRvXG4gIHZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbiAgcm5nID0gZnVuY3Rpb24gd2hhdHdnUk5HKCkge1xuICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMocm5kczgpO1xuICAgIHJldHVybiBybmRzODtcbiAgfTtcbn1cblxuaWYgKCFybmcpIHtcbiAgLy8gTWF0aC5yYW5kb20oKS1iYXNlZCAoUk5HKVxuICAvL1xuICAvLyBJZiBhbGwgZWxzZSBmYWlscywgdXNlIE1hdGgucmFuZG9tKCkuICBJdCdzIGZhc3QsIGJ1dCBpcyBvZiB1bnNwZWNpZmllZFxuICAvLyBxdWFsaXR5LlxuICB2YXIgIHJuZHMgPSBuZXcgQXJyYXkoMTYpO1xuICBybmcgPSBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgIGlmICgoaSAmIDB4MDMpID09PSAwKSByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuICAgICAgcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gcm5kcztcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBybmc7XG5cbn0pLmNhbGwodGhpcyx0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9KVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ6dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW01dlpHVmZiVzlrZFd4bGN5OTFkV2xrTDJ4cFlpOXlibWN0WW5KdmQzTmxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVpTENKbWFXeGxJam9pWjJWdVpYSmhkR1ZrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHZJRlZ1YVhGMVpTQkpSQ0JqY21WaGRHbHZiaUJ5WlhGMWFYSmxjeUJoSUdocFoyZ2djWFZoYkdsMGVTQnlZVzVrYjIwZ0l5Qm5aVzVsY21GMGIzSXVJQ0JKYmlCMGFHVmNiaTh2SUdKeWIzZHpaWElnZEdocGN5QnBjeUJoSUd4cGRIUnNaU0JqYjIxd2JHbGpZWFJsWkNCa2RXVWdkRzhnZFc1cmJtOTNiaUJ4ZFdGc2FYUjVJRzltSUUxaGRHZ3VjbUZ1Wkc5dEtDbGNiaTh2SUdGdVpDQnBibU52Ym5OcGMzUmxiblFnYzNWd2NHOXlkQ0JtYjNJZ2RHaGxJR0JqY25sd2RHOWdJRUZRU1M0Z0lGZGxJR1J2SUhSb1pTQmlaWE4wSUhkbElHTmhiaUIyYVdGY2JpOHZJR1psWVhSMWNtVXRaR1YwWldOMGFXOXVYRzUyWVhJZ2NtNW5PMXh1WEc1MllYSWdZM0o1Y0hSdklEMGdaMnh2WW1Gc0xtTnllWEIwYnlCOGZDQm5iRzlpWVd3dWJYTkRjbmx3ZEc4N0lDOHZJR1p2Y2lCSlJTQXhNVnh1YVdZZ0tHTnllWEIwYnlBbUppQmpjbmx3ZEc4dVoyVjBVbUZ1Wkc5dFZtRnNkV1Z6S1NCN1hHNGdJQzh2SUZkSVFWUlhSeUJqY25sd2RHOGdVazVISUMwZ2FIUjBjRG92TDNkcGEya3VkMmhoZEhkbkxtOXlaeTkzYVd0cEwwTnllWEIwYjF4dUlDQjJZWElnY201a2N6Z2dQU0J1WlhjZ1ZXbHVkRGhCY25KaGVTZ3hOaWs3WEc0Z0lISnVaeUE5SUdaMWJtTjBhVzl1SUhkb1lYUjNaMUpPUnlncElIdGNiaUFnSUNCamNubHdkRzh1WjJWMFVtRnVaRzl0Vm1Gc2RXVnpLSEp1WkhNNEtUdGNiaUFnSUNCeVpYUjFjbTRnY201a2N6ZzdYRzRnSUgwN1hHNTlYRzVjYm1sbUlDZ2hjbTVuS1NCN1hHNGdJQzh2SUUxaGRHZ3VjbUZ1Wkc5dEtDa3RZbUZ6WldRZ0tGSk9SeWxjYmlBZ0x5OWNiaUFnTHk4Z1NXWWdZV3hzSUdWc2MyVWdabUZwYkhNc0lIVnpaU0JOWVhSb0xuSmhibVJ2YlNncExpQWdTWFFuY3lCbVlYTjBMQ0JpZFhRZ2FYTWdiMllnZFc1emNHVmphV1pwWldSY2JpQWdMeThnY1hWaGJHbDBlUzVjYmlBZ2RtRnlJQ0J5Ym1SeklEMGdibVYzSUVGeWNtRjVLREUyS1R0Y2JpQWdjbTVuSUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ1ptOXlJQ2gyWVhJZ2FTQTlJREFzSUhJN0lHa2dQQ0F4TmpzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JwWmlBb0tHa2dKaUF3ZURBektTQTlQVDBnTUNrZ2NpQTlJRTFoZEdndWNtRnVaRzl0S0NrZ0tpQXdlREV3TURBd01EQXdNRHRjYmlBZ0lDQWdJSEp1WkhOYmFWMGdQU0J5SUQ0K1BpQW9LR2tnSmlBd2VEQXpLU0E4UENBektTQW1JREI0Wm1ZN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSEp1WkhNN1hHNGdJSDA3WEc1OVhHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdjbTVuTzF4dUlsMTkiLCJ2YXIgcm5nID0gcmVxdWlyZSgnLi9saWIvcm5nJyk7XG52YXIgYnl0ZXNUb1V1aWQgPSByZXF1aXJlKCcuL2xpYi9ieXRlc1RvVXVpZCcpO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICB2YXIgaSA9IGJ1ZiAmJiBvZmZzZXQgfHwgMDtcblxuICBpZiAodHlwZW9mKG9wdGlvbnMpID09ICdzdHJpbmcnKSB7XG4gICAgYnVmID0gb3B0aW9ucyA9PSAnYmluYXJ5JyA/IG5ldyBBcnJheSgxNikgOiBudWxsO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDE2OyArK2lpKSB7XG4gICAgICBidWZbaSArIGlpXSA9IHJuZHNbaWldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYgfHwgYnl0ZXNUb1V1aWQocm5kcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdjQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpO1xuY29uc3QgU29ja2V0ID0gcmVxdWlyZSgnc2ltcGxlLXBlZXInKTtcblxuY29uc3QgdXVpZCA9IHJlcXVpcmUoJ3V1aWQvdjQnKTtcbmNvbnN0IFNvcnRlZEFycmF5ID0gcmVxdWlyZSgnLi9leHRlbmRlZC1zb3J0ZWQtYXJyYXkuanMnKTtcbmNvbnN0IE11bHRpU2V0ID0gcmVxdWlyZSgnLi9tdWx0aXNldC5qcycpO1xuY29uc3QgU2ltcGxlUGVlciA9IHJlcXVpcmUoJ3NpbXBsZS1wZWVyJyk7XG5cbi8qKlxuICogTmVpZ2Job3Job29kIHRhYmxlIHByb3ZpZGluZyBlYXN5IGVzdGFibGlzaG1lbnQgYW5kIG1hbmFnZW1lbnQgb2ZcbiAqIGNvbm5lY3Rpb25zXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyB0aGUgb3B0aW9ucyBhdmFpbGFibGUgdG8gdGhlIGNvbm5lY3Rpb25zLCBlLmcuIHRpbWVvdXQgYmVmb3JlXG4gKiBjb25uZWN0aW9uIGFyZSB0cnVlbHkgcmVtb3ZlZCwgV2ViUlRDIG9wdGlvbnNcbiAqL1xuY2xhc3MgTmVpZ2hib3Job29kIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLlBST1RPQ09MID0gJ25laWdoYm9yaG9vZC13cnRjJztcblx0XHQvLyAjMSBzYXZlIG9wdGlvbnNcblx0XHR0aGlzLm9wdGlvbnMgPSB7fTtcblx0XHR0aGlzLm9wdGlvbnMuY29uZmlnID0gb3B0aW9ucyAmJiBvcHRpb25zLndlYnJ0YyB8fCB7fTtcblx0XHR0aGlzLm9wdGlvbnMudHJpY2tsZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy53ZWJydGMgJiYgb3B0aW9ucy53ZWJydGMudHJpY2tsZSB8fCBmYWxzZTtcblx0XHR0aGlzLlRJTUVPVVQgPSBvcHRpb25zICYmIG9wdGlvbnMudGltZW91dCB8fCAyICogNjAgKiAxMDAwOyAvLyAyIG1pbnV0ZXNcblxuXHRcdHRoaXMuZW5jb2RpbmcgPSBvcHRpb25zLmVuY29kaW5nO1xuXHRcdHRoaXMuZGVjb2RpbmcgPSBvcHRpb25zLmRlY29kaW5nO1xuXHRcdHRoaXMuSUQgPSB1dWlkKCk7XG5cdFx0aWYgKHRoaXMub3B0aW9ucy5jb25maWcud3J0Yykge1xuXHRcdFx0dGhpcy5vcHRpb25zLndydGMgPSB0aGlzLm9wdGlvbnMuY29uZmlnLndydGM7XG5cdFx0fVxuXG5cdFx0aWYgKG9wdGlvbnMgJiYgb3B0aW9ucy52ZXJib3NlKSB7XG5cdFx0XHR0aGlzLnZlcmJvc2UgPSBvcHRpb25zLnZlcmJvc2U7XG5cdFx0fVxuXG5cdFx0LyohXG4gICAqIFxcYnJpZWYgY29tcGFyZSB0aGUgaWQgb2YgZW50cmllcyBpbiB0YWJsZXNcbiAgICovXG5cdFx0dGhpcy5Db21wYXJhdG9yID0gKGEsIGIpID0+IHtcblx0XHRcdHZhciBmaXJzdCA9IGEuaWQgfHwgYTtcblx0XHRcdHZhciBzZWNvbmQgPSBiLmlkIHx8IGI7XG5cdFx0XHRpZiAoZmlyc3QgPCBzZWNvbmQpIHtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fTtcblx0XHRcdGlmIChmaXJzdCA+IHNlY29uZCkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9O1xuXHRcdC8vICMyIGluaXRpYWxpemUgdGFibGVzXG5cdFx0dGhpcy5wZW5kaW5nID0gbmV3IFNvcnRlZEFycmF5KHRoaXMuQ29tcGFyYXRvcik7IC8vIG5vdCBmaW5hbGl6ZWQgeWV0XG5cdFx0dGhpcy5saXZpbmcgPSBuZXcgTXVsdGlTZXQodGhpcy5Db21wYXJhdG9yKTsgLy8gbGl2ZSBhbmQgdXNhYmxlXG5cdFx0dGhpcy5keWluZyA9IG5ldyBTb3J0ZWRBcnJheSh0aGlzLkNvbXBhcmF0b3IpOyAvLyBiZWluZyByZW1vdmVcblx0fVxuXG5cdE1SZXNwb25zZSh0aWQsIHBpZCwgb2ZmZXIsIHByb3RvY29sKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRpZDogdGlkLFxuXHRcdFx0cGlkOiBwaWQsXG5cdFx0XHRwcm90b2NvbDogcHJvdG9jb2wsXG5cdFx0XHR0eXBlOiAnTVJlc3BvbnNlJyxcblx0XHRcdG9mZmVyOiBvZmZlclxuXHRcdH07XG5cdH1cblx0TVJlcXVlc3QodGlkLCBwaWQsIG9mZmVyLCBwcm90b2NvbCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0aWQ6IHRpZCxcblx0XHRcdHBpZDogcGlkLFxuXHRcdFx0cHJvdG9jb2w6IHByb3RvY29sLFxuXHRcdFx0dHlwZTogJ01SZXF1ZXN0Jyxcblx0XHRcdG9mZmVyOiBvZmZlclxuXHRcdH07XG5cdH1cblxuXHRsb2coLi4uYXJncykge1xuXHRcdGlmICh0aGlzLnZlcmJvc2UpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdbTkVJR0hCT1JIT09EXSAnLCBhcmdzKTtcblx0XHR9XG5cdH1cblxuXHQvKipcbiAgKiBEaXNjb25uZWN0IG9uZSBvZiB0aGUgYXJjIHdpdGggdGhlIGlkZW50aWZpZXIgaW4gYXJndW1lbnQuIElmXG4gICogaXQgd2FzIHRoZSBsYXN0IGFyYyB3aXRoIHN1Y2ggaWQsIHRoZSBzb2NrZXQgaXMgcmVsb2NhdGVkIHRvIHRoZSBkeWluZ1xuICAqIHRhYmxlLiBUaGUgc29ja2V0IHdpbGwgYmUgZGVzdHJveSBhZnRlciBhIGJpdC4gSWYgdGhlcmUgaXMgbm8gYXJndW1lbnQsXG4gICogZGlzY29ubmVjdCB0aGUgd2hvbGUuXG4gICogQHBhcmFtIHtzdHJpbmd8dW5kZWZpbmVkfSBpZCBJZCBwcm92aWRlZCB0byBqdXN0IGRpc2Nvbm5lY3QgdGhlIGFyYyBvciBpZiB1bmRlZmluZWQgZGlzY29ubmVjdCBhbGwgYXJjc1xuICAqL1xuXHRkaXNjb25uZWN0KGlkKSB7XG5cdFx0bGV0IHJlc3VsdCA9IHRydWU7XG5cdFx0aWYgKCFpZCkge1xuXHRcdFx0Ly8gIzEgZGlzY29ubmVjdCBldmVyeXRoaW5nXG5cdFx0XHR0aGlzLnBlbmRpbmcuYXJyLmZvckVhY2goZSA9PiB7XG5cdFx0XHRcdGUuc29ja2V0ICYmIGUuc29ja2V0LmRlc3Ryb3koKTtcblx0XHRcdH0pO1xuXHRcdFx0d2hpbGUgKHRoaXMubGl2aW5nLm1zLmFyci5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGNvbnN0IGUgPSB0aGlzLmxpdmluZy5tcy5hcnJbMF07XG5cdFx0XHRcdGUuc29ja2V0ICYmIGUuc29ja2V0LmRlc3Ryb3koKTtcblx0XHRcdH1cblx0XHRcdHdoaWxlICh0aGlzLmR5aW5nLmFyci5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGNvbnN0IGUgPSB0aGlzLmR5aW5nLmFyclswXTtcblx0XHRcdFx0ZS5zb2NrZXQgJiYgZS5zb2NrZXQuZGVzdHJveSgpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyAjMiByZW1vdmUgb25lIGFyY1xuXHRcdFx0bGV0IGVudHJ5ID0gdGhpcy5saXZpbmcucmVtb3ZlKGlkKTtcblx0XHRcdGVudHJ5ICYmIHRoaXMuZW1pdCgnZGlzY29ubmVjdCcsIGVudHJ5LmlkKTtcblx0XHRcdGlmIChlbnRyeSAmJiBlbnRyeS5vY2MgPD0gMCkge1xuXHRcdFx0XHRlbnRyeS50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0ZW50cnkuc29ja2V0LmRlc3Ryb3koKTtcblx0XHRcdFx0fSwgdGhpcy5USU1FT1VUKTtcblx0XHRcdFx0dGhpcy5keWluZy5pbnNlcnQoZW50cnkpO1xuXHRcdFx0fVxuXHRcdFx0cmVzdWx0ID0gZW50cnkgJiYgdHJ1ZSB8fCBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8qKlxuICAqIE5ldyBtZXRob2QgdG8gZW5jb2RlIHRoZSBtZXNzYWdlIGFzIHdlIHdhbnRcbiAgKiBAcGFyYW0gIHtvYmplY3R9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gZW5jb2RlXG4gICogQHJldHVybiB7c3RyaW5nfGJpbmFyeX0gRW5jb2RlZCBtZXNzYWdlXG4gICovXG5cdGVuY29kZShtZXNzYWdlKSB7XG5cdFx0cmV0dXJuIHRoaXMuZW5jb2RpbmcobWVzc2FnZSk7XG5cdH1cblxuXHQvKipcbiAgKiBOZXcgbWV0aG9kIHRvIGVuY29kZSB0aGUgbWVzc2FnZSBhcyB3ZSB3YW50XG4gICogQHBhcmFtICB7b2JqZWN0fSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGVuY29kZVxuICAqIEByZXR1cm4ge3N0cmluZ3xiaW5hcnl9IEVuY29kZWQgbWVzc2FnZVxuICAqL1xuXHRkZWNvZGUobWVzc2FnZSkge1xuXHRcdHJldHVybiB0aGlzLmRlY29kaW5nKG1lc3NhZ2UpO1xuXHR9XG5cblx0LyoqXG4gICogU2VuZCBhIG1lc3NhZ2UgdG8gdGhlIHNvY2tldCBpbiBhcmd1bWVudFxuICAqIEBwYXJhbSB7c3RyaW5nfSBpZCB0aGUgaWRlbnRpZmllciBvZiB0aGUgc29ja2V0XG4gICogQHBhcmFtIHtvYmplY3R9IG1lc3NhZ2UgdGhlIG1lc3NhZ2UgdG8gc2VuZFxuICAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIG1lc3NhZ2UgaXMgc2VudCwgZmFsc2Ugb3RoZXJ3aXNlXG4gICovXG5cdHNlbmQoaWQsIG1lc3NhZ2UpIHtcblx0XHQvLyAjMSBjb252ZXJ0IG1lc3NhZ2UgdG8gc3RyaW5nIChUT0RPKSBjaGVjayBpZiB0aGVyZSBpcyBhIGJldHRlciB3YXlcblx0XHRsZXQgbXNnID0gbWVzc2FnZSBpbnN0YW5jZW9mIFN0cmluZyAmJiBtZXNzYWdlIHx8IHRoaXMuZW5jb2RlKG1lc3NhZ2UpO1xuXHRcdC8vICMyIGdldCB0aGUgc29ja2V0IHRvIHVzZVxuXHRcdGxldCBlbnRyeSA9IHRoaXMuZ2V0KGlkKTtcblx0XHRsZXQgc29ja2V0ID0gZW50cnkgJiYgZW50cnkuc29ja2V0O1xuXHRcdC8vICMzIHNlbmRcblx0XHRsZXQgcmVzdWx0ID0gbXNnICYmIHNvY2tldCAmJiBzb2NrZXQuY29ubmVjdGVkICYmIHNvY2tldC5fY2hhbm5lbCAmJiBzb2NrZXQuX2NoYW5uZWwucmVhZHlTdGF0ZSA9PT0gJ29wZW4nO1xuXHRcdC8vIHJlc3VsdCAmJiBzb2NrZXQuc2VuZChtc2cpO1xuXHRcdHRyeSB7XG5cdFx0XHRyZXN1bHQgJiYgc29ja2V0LnNlbmQobXNnKTtcblx0XHRcdC8vIERPTlQgU0VUIFJFU1VMVCBUTyBUUlVFICFcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHR0aGlzLmxvZygnW05FSUdIQk9SSE9PRDpTRU5EOkVSUk9SXSAnLCBuZXcgRXJyb3IoZSkpO1xuXHRcdFx0cmVzdWx0ID0gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHQvKipcbiAqIGNyZWF0ZXMgYSBuZXcgaW5jb21taW5nIG9yIG91dGdvaW5nIGNvbm5lY3Rpb24gZGVwZW5kaW5nIG9uIGFyZ3VtZW50c1xuICogQHBhcmFtIHtjYWxsYmFja30gY2FsbGJhY2tzIHRoZSBjYWxsYmFjayBmdW5jdGlvbiB3aGVuIHRoZSBzdHVuL2ljZSBzZXJ2ZXIgcmV0dXJucyB0aGVcbiAqIG9mZmVyXG4gKiBAcGFyYW0ge29iamVjdH0gbWVzc2FnZSBlbXB0eSBpZiBpdCBtdXN0IGluaXRpYXRlIGEgY29ubmVjdGlvbiwgb3IgdGhlIG1lc3NhZ2UgcmVjZWl2ZWRcbiAqIGlmIGl0IG11c3QgYW5zd2VyIG9yIGZpbmFsaXplIG9uZVxuICogQHBhcmFtIHtzdHJpbmd9IHByb3RvY29sIHRoZSBjb25uZWN0aW9uIGlzIGVzdGFibGlzaGVkIGZvciBhIHNwZWNpZmljIHByb3RvY29sXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBpZCBvZiB0aGUgc29ja2V0XG4gKi9cblx0Y29ubmVjdGlvbihjYWxsYmFja3MsIG1lc3NhZ2UsIHByb3RvY29sKSB7XG5cblx0XHRsZXQgbXNnID0gY2FsbGJhY2tzICYmIGNhbGxiYWNrcy50eXBlICYmIGNhbGxiYWNrcyB8fCBtZXNzYWdlO1xuXHRcdGxldCByZXN1bHQ7XG5cblx0XHRpZiAoIW1zZykge1xuXHRcdFx0cmVzdWx0ID0gdGhpcy5pbml0aWF0ZShjYWxsYmFja3MsIHByb3RvY29sKTtcblx0XHR9IGVsc2UgaWYgKG1zZy50eXBlID09PSAnTVJlcXVlc3QnKSB7XG5cblx0XHRcdGlmIChtZXNzYWdlICYmIG1lc3NhZ2UucGlkICYmIHRoaXMuSUQgIT09IG1lc3NhZ2UucGlkKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHRoaXMuYWNjZXB0KG1zZywgY2FsbGJhY2tzKTtcblx0XHRcdFx0cmVzdWx0ID0gdGhpcy5hbHJlYWR5RXhpc3RzKG1zZywgY2FsbGJhY2tzKSB8fCByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ01SZXNwb25zZScpIHtcblx0XHRcdHJlc3VsdCA9IHRoaXMuZmluYWxpemUobXNnKTtcblx0XHRcdHJlc3VsdCA9IHRoaXMuYWxyZWFkeUV4aXN0cyhtc2cpIHx8IHJlc3VsdDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0ICYmIHJlc3VsdC5pZDtcblx0fVxuXG5cdC8qKlxuICAqIEdldCB0aGUgZW50cnkgY29ycmVzcG9uZGluZyB0byB0aGUgaWQgaW4gYXJndW1lbnQuIFRoZSBlbnRyeSBjb250YWluc1xuICAqIHRoZSBzb2NrZXQuXG4gICogQHBhcmFtIHtzdHJpbmd9IGlkIHRoZSBpZGVudGlmaWVyIG9mIHRoZSBzb2NrZXQgdG8gcmV0cmlldmVcbiAgKiBAcmV0dXJuIHtvYmplY3R9IGFuIGVudHJ5IGZyb20gdGFibGVzLiBJdCBwcmlvcml6ZXMgZW50cmllcyBpbiBsaXZpbmcsIHRoZW4gZHlpbmcsXG4gICogdGhlbiBwZW5kaW5nLlxuICAqL1xuXHRnZXQoaWQpIHtcblx0XHRyZXR1cm4gdGhpcy5saXZpbmcuZ2V0KGlkKSB8fCB0aGlzLmR5aW5nLmdldChpZCkgfHwgdGhpcy5wZW5kaW5nLmdldChpZCk7XG5cdH1cblxuXHQvKipcbiAgKiBDb21tb24gYmVoYXZpb3IgdG8gaW5pdGlhdGluZyBhbmQgYWNjZXB0aW5nIHNvY2tldHNcbiAgKiBAcGFyYW0ge29iamVjdH0gZW50cnkgdGhlIGVudHJ5IGluIHRoZSBuZWlnaGJvcmhvb2QgdGFibGVcbiAgKiBAcmV0dXJuIHt2b2lkfVxuICAqL1xuXHRjb21tb24oZW50cnkpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcyxcblx0XHQgICAgICBzb2NrZXQgPSBlbnRyeS5zb2NrZXQ7XG5cblx0XHRzb2NrZXQub24oJ2RhdGEnLCBtZXNzYWdlID0+IHtcblx0XHRcdG1lc3NhZ2UgPSBzZWxmLmRlY29kZShtZXNzYWdlKTtcblx0XHRcdHNlbGYuZW1pdCgncmVjZWl2ZScsIGVudHJ5LnBpZCwgbWVzc2FnZSk7XG5cdFx0fSk7XG5cdFx0c29ja2V0Lm9uKCdzdHJlYW0nLCBzdHJlYW0gPT4ge1xuXHRcdFx0c2VsZi5lbWl0KCdzdHJlYW0nLCBlbnRyeS5waWQsIHN0cmVhbSk7XG5cdFx0fSk7XG5cblx0XHRzb2NrZXQub24oJ2Vycm9yJywgZXJyID0+IHtcblx0XHRcdHNlbGYuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoZXJyKSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcbiAgKiBpbml0aWF0ZXMgYSBjb25uZWN0aW9uIHdpdGggYW5vdGhlciBwZWVyIC0tIHRoZSBpZCBvZiB3aGljaCBpcyB1bmtub3duXG4gICogQHBhcmFtIHtjYWxsYmFja30gY2FsbGJhY2tzIHRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gc2lnbmFsaW5nIGluZm8gYXJlIHJlY2VpdmVkIGFuZFxuICAqIHdoZW4gdGhlIGNvbm5lY3Rpb24gaXMgcmVhZHkgdG8gYmUgdXNlZFxuICAqIEBwYXJhbSB7c3RyaW5nfSBwcm90b2NvbCBUaGUgcHJvdG9jb2xcbiAgKiBAcmV0dXJuIHtvYmplY3R9IGVudHJ5XG4gICovXG5cdGluaXRpYXRlKGNhbGxiYWNrcywgcHJvdG9jb2wpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRsZXQgb3B0cyA9IHNlbGYub3B0aW9ucztcblx0XHRvcHRzLmluaXRpYXRvciA9IHRydWU7XG5cdFx0bGV0IHNvY2tldCA9IG5ldyBTaW1wbGVQZWVyKG9wdHMpO1xuXHRcdGxldCBlbnRyeSA9IHtcblx0XHRcdGlkOiB1dWlkKCksXG5cdFx0XHRzb2NrZXQ6IHNvY2tldCxcblx0XHRcdHByb3RvY29sOiBwcm90b2NvbCxcblx0XHRcdHN1Y2Nlc3NmdWw6IGZhbHNlLCAvLyBub3QgeWV0XG5cdFx0XHRvbk9mZmVyOiBjYWxsYmFja3MgJiYgY2FsbGJhY2tzLm9uSW5pdGlhdGUsXG5cdFx0XHRvblJlYWR5OiBjYWxsYmFja3MgJiYgY2FsbGJhY2tzLm9uUmVhZHlcblx0XHR9O1xuXG5cdFx0dGhpcy5wZW5kaW5nLmluc2VydChlbnRyeSk7XG5cdFx0c29ja2V0Lm9uKCdzaWduYWwnLCBvZmZlciA9PiB7XG5cdFx0XHRlbnRyeS5vbk9mZmVyICYmIGVudHJ5Lm9uT2ZmZXIoc2VsZi5NUmVxdWVzdChlbnRyeS5pZCwgc2VsZi5JRCwgb2ZmZXIsIHByb3RvY29sKSk7XG5cdFx0fSk7XG5cblx0XHRlbnRyeS50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRsZXQgZSA9IHNlbGYucGVuZGluZy5nZXQoZW50cnkuaWQpO1xuXHRcdFx0aWYgKGUgJiYgIWUuc3VjY2Vzc2Z1bCkge1xuXHRcdFx0XHRzZWxmLmVtaXQoJ2ZhaWwnLCAnW0ZBSUw6SU5JVElBVEVdIGFuIGVycm9yIG9jY3VyZWQgZHVyaW5nIHJlbW92aW5nIHRoZSBlbnRyeScpO1xuXHRcdFx0fVxuXHRcdFx0c2VsZi5wZW5kaW5nLnJlbW92ZShlbnRyeSkgJiYgc29ja2V0LmRlc3Ryb3koKTtcblx0XHR9LCB0aGlzLlRJTUVPVVQpO1xuXHRcdHJldHVybiBlbnRyeTtcblx0fVxuXG5cdC8qKlxuICAqIGFjY2VwdCB0aGUgb2ZmZXIgb2YgYW5vdGhlciBwZWVyXG4gICogQHBhcmFtIHtvYmplY3R9IG1lc3NhZ2UgdGhlIHJlY2VpdmVkIG1lc3NhZ2UgY29udGFpbmluZyBpZCBhbmQgb2ZmZXJcbiAgKiBAcGFyYW0ge2NhbGxiYWNrfSBjYWxsYmFja3MgdGhlIGZ1bmN0aW9uIGNhbGwgYWZ0ZXIgcmVjZWl2aW5nIHRoZSBvZmZlciBhbmRcbiAgKiB3aGVuIHRoZSBjb25uZWN0aW9uIGlzIHJlYWR5XG4gICogQHJldHVybiB7b2JqZWN0fSBFbnRyeVxuICAqL1xuXHRhY2NlcHQobWVzc2FnZSwgY2FsbGJhY2tzKSB7XG5cdFx0Ly8gIzEgaWYgYWxyZWFkeSBleGlzdHMsIHVzZSBpdFxuXG5cblx0XHRsZXQgcHJpb3IgPSB0aGlzLnBlbmRpbmcuZ2V0KG1lc3NhZ2UudGlkKTtcblx0XHRpZiAocHJpb3IpIHtcblx0XHRcdHJldHVybiBwcmlvcjtcblx0XHR9XG5cdFx0Ly8gIzIgb3RoZXJ3aXNlLCBjcmVhdGUgdGhlIHNvY2tldFxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdC8vIGxldCBvcHRzPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5vcHRpb25zKSk7Ly8gcXVpY2sgYnV0IHVnbHkgY29weVxuXHRcdGxldCBvcHRzID0gdGhpcy5vcHRpb25zO1xuXHRcdG9wdHMuaW5pdGlhdG9yID0gZmFsc2U7XG5cdFx0bGV0IHNvY2tldCA9IG5ldyBTaW1wbGVQZWVyKG9wdHMpO1xuXHRcdGxldCBlbnRyeSA9IHtcblx0XHRcdGlkOiBtZXNzYWdlLnRpZCxcblx0XHRcdHBpZDogbWVzc2FnZS5waWQsXG5cdFx0XHRwcm90b2NvbDogbWVzc2FnZS5wcm90b2NvbCxcblx0XHRcdHNvY2tldDogc29ja2V0LFxuXHRcdFx0c3VjY2Vzc2Z1bDogZmFsc2UsXG5cdFx0XHRvbk9mZmVyOiBjYWxsYmFja3MgJiYgY2FsbGJhY2tzLm9uQWNjZXB0LFxuXHRcdFx0b25SZWFkeTogY2FsbGJhY2tzICYmIGNhbGxiYWNrcy5vblJlYWR5XG5cdFx0fTtcblxuXHRcdHRoaXMucGVuZGluZy5pbnNlcnQoZW50cnkpO1xuXHRcdHNvY2tldC5vbignc2lnbmFsJywgZnVuY3Rpb24gKG9mZmVyKSB7XG5cdFx0XHRlbnRyeS5vbk9mZmVyICYmIGVudHJ5Lm9uT2ZmZXIoc2VsZi5NUmVzcG9uc2UoZW50cnkuaWQsIHNlbGYuSUQsIG9mZmVyLCBlbnRyeS5wcm90b2NvbCkpO1xuXHRcdH0pO1xuXHRcdHNvY2tldC5vbignY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHNlbGYuZ2V0KGVudHJ5LnBpZCkgJiYgc29ja2V0LmRlc3Ryb3koKTtcblx0XHRcdHNlbGYucGVuZGluZy5yZW1vdmUoZW50cnkpO1xuXHRcdFx0c2VsZi5saXZpbmcuaW5zZXJ0KHtcblx0XHRcdFx0aWQ6IGVudHJ5LnBpZCxcblx0XHRcdFx0c29ja2V0OiBlbnRyeS5zb2NrZXQsXG5cdFx0XHRcdG9uUmVhZHk6IGVudHJ5Lm9uUmVhZHksXG5cdFx0XHRcdG9uT2ZmZXI6IGVudHJ5Lm9uT2ZmZXJcblx0XHRcdH0pO1xuXG5cdFx0XHRlbnRyeS5vblJlYWR5ICYmIGVudHJ5Lm9uUmVhZHkoZW50cnkucGlkKTtcblx0XHRcdHNlbGYuZW1pdCgncmVhZHknLCBlbnRyeS5waWQpO1xuXHRcdFx0ZW50cnkucHJvdG9jb2wgJiYgc2VsZi5lbWl0KCdyZWFkeS0nICsgZW50cnkucHJvdG9jb2wsIGVudHJ5LnBpZCk7XG5cblx0XHRcdGNsZWFyVGltZW91dChlbnRyeS50aW1lb3V0KTtcblx0XHRcdGVudHJ5LnRpbWVvdXQgPSBudWxsO1xuXHRcdH0pO1xuXHRcdHNvY2tldC5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoc2VsZi5wZW5kaW5nLmNvbnRhaW5zKGVudHJ5LmlkKSkge1xuXHRcdFx0XHQvLyAjQSBwZW5kaW5nOiBlbnRyeSBpcyBrZXB0IHVudGlsIGF1dG9tYXRpYyBkZXN0cnVjdGlvblxuXHRcdFx0XHRlbnRyeS5zb2NrZXQgPSBudWxsO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gI0IgbGl2aW5nIG9yIGR5aW5nOiBjbGVhciB0aGUgdGFibGVzXG5cdFx0XHRcdGVudHJ5LnRpbWVvdXQgJiYgY2xlYXJUaW1lb3V0KGVudHJ5LnRpbWVvdXQpO1xuXHRcdFx0XHRlbnRyeS50aW1lb3V0ID0gbnVsbDtcblx0XHRcdFx0bGV0IGxpdmUgPSBzZWxmLmxpdmluZy5yZW1vdmVBbGwoZW50cnkucGlkKTtcblx0XHRcdFx0aWYgKGxpdmUpIHtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpdmUub2NjOyArK2kpIHtcblx0XHRcdFx0XHRcdHNlbGYuZW1pdCgnZGlzY29ubmVjdCcsIGVudHJ5LnBpZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGYuZHlpbmcucmVtb3ZlKGVudHJ5LnBpZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmNvbW1vbihlbnRyeSk7XG5cblx0XHRlbnRyeS50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgZSA9IHNlbGYucGVuZGluZy5nZXQoZW50cnkuaWQpO1xuXHRcdFx0aWYgKGUgJiYgIWUuc3VjY2Vzc2Z1bCkge1xuXHRcdFx0XHRzZWxmLmVtaXQoJ2ZhaWwnLCAnW0ZBSUw6QUNDRVBUXSBhbiBlcnJvciBvY2N1cmVkIGR1cmluZyByZW1vdmluZyB0aGUgZW50cnknKTtcblx0XHRcdH1cblx0XHRcdHNlbGYucGVuZGluZy5yZW1vdmUoZW50cnkuaWQpICYmIHNvY2tldC5kZXN0cm95KCk7XG5cdFx0fSwgdGhpcy5USU1FT1VUKTtcblx0XHRyZXR1cm4gZW50cnk7XG5cdH1cblxuXHQvKipcbiAqIGZpbmFsaXplIHRoZSBiZWhhdmlvciBvZiBhbiBpbml0aWF0aW5nIHNvY2tldFxuICogQHBhcmFtIHtvYmplY3R9IG1lc3NhZ2UgdGhlIHJlY2VpdmVkIG1lc3NhZ2UgcG9zc2libHkgY29udGFpbmluZyBhbiBhbnN3ZXIgdG8gdGhlXG4gKiBwcm9wb3NlZCBvZmZlclxuICogQHJldHVybiB7b2JqZWN0fSBSZXR1cm4gcHJpb3IgZW50cnlcbiAqL1xuXHRmaW5hbGl6ZShtZXNzYWdlKSB7XG5cdFx0Ly8gIzEgaWYgaXQgZG9lcyBub3QgZXhpc3RzLCBzdG9wOyBvciBpZiBpdCBleGlzdHMgYnV0IGFscmVhZHkgc2V0dXBcblx0XHQvLyByZXR1cm4gaXRcblx0XHRsZXQgcHJpb3IgPSB0aGlzLnBlbmRpbmcuZ2V0KG1lc3NhZ2UudGlkKTtcblx0XHRpZiAoIXByaW9yIHx8IHByaW9yLnBpZCkge1xuXHRcdFx0cmV0dXJuIHByaW9yO1xuXHRcdH1cblx0XHQvLyAjMiBvdGhlcndpc2Ugc2V0IHRoZSBldmVudHMgY29ycmVjdGx5XG5cdFx0cHJpb3IucGlkID0gbWVzc2FnZS5waWQ7XG5cblx0XHRsZXQgZW50cnkgPSB7XG5cdFx0XHRpZDogbWVzc2FnZS5waWQsXG5cdFx0XHRzb2NrZXQ6IHByaW9yLnNvY2tldCxcblx0XHRcdHByb3RvY29sOiBwcmlvci5wcm90b2NvbCxcblx0XHRcdG9uUmVhZHk6IHByaW9yLm9uUmVhZHksXG5cdFx0XHRvbk9mZmVyOiBwcmlvci5vbk9mZmVyXG5cdFx0fTtcblxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGxldCBzb2NrZXQgPSBlbnRyeS5zb2NrZXQ7XG5cdFx0c29ja2V0Lm9uKCdjb25uZWN0JywgZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRzZWxmLmdldChlbnRyeS5pZCkgJiYgc29ja2V0LmRlc3Ryb3koKTtcblx0XHRcdHNlbGYucGVuZGluZy5yZW1vdmUocHJpb3IpO1xuXHRcdFx0c2VsZi5saXZpbmcuaW5zZXJ0KGVudHJ5KTtcblx0XHRcdGVudHJ5Lm9uUmVhZHkgJiYgZW50cnkub25SZWFkeShwcmlvci5waWQpO1xuXHRcdFx0c2VsZi5lbWl0KCdyZWFkeScsIHByaW9yLnBpZCk7XG5cdFx0XHRlbnRyeS5wcm90b2NvbCAmJiBzZWxmLmVtaXQoJ3JlYWR5LScgKyBlbnRyeS5wcm90b2NvbCwgcHJpb3IucGlkKTtcblx0XHRcdGNsZWFyVGltZW91dChwcmlvci50aW1lb3V0KTtcblx0XHR9KTtcblx0XHRzb2NrZXQub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHNlbGYucGVuZGluZy5jb250YWlucyhtZXNzYWdlLnRpZCkpIHtcblx0XHRcdFx0c2VsZi5wZW5kaW5nLmdldChtZXNzYWdlLnRpZCkuc29ja2V0ID0gbnVsbDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHByaW9yLnRpbWVvdXQgJiYgY2xlYXJUaW1lb3V0KHByaW9yLnRpbWVvdXQpO1xuXHRcdFx0XHRwcmlvci50aW1lb3V0ID0gbnVsbDtcblx0XHRcdFx0bGV0IGxpdmUgPSBzZWxmLmxpdmluZy5yZW1vdmVBbGwocHJpb3IucGlkKTtcblx0XHRcdFx0aWYgKGxpdmUpIHtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpdmUub2NjOyArK2kpIHtcblx0XHRcdFx0XHRcdHNlbGYuZW1pdCgnZGlzY29ubmVjdCcsIHByaW9yLnBpZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGYuZHlpbmcucmVtb3ZlKHByaW9yLnBpZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmNvbW1vbihwcmlvcik7XG5cblx0XHRyZXR1cm4gcHJpb3I7XG5cdH1cblxuXHQvKipcbiAqICB0aGUgcGVlciBpZCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgdGFibGVzXG4gKiAgQHBhcmFtIHtvYmplY3R9IG1lc3NhZ2UgVGhlIG1lc3NhZ2VcbiAqICBAcGFyYW0ge2NhbGxiYWNrfSBjYWxsYmFja3MgdGhlIGNhbGxiYWNrc1xuICogIEByZXR1cm4ge29iamVjdH0gYWxyZWF5ZEV4aXN0XG4gKi9cblx0YWxyZWFkeUV4aXN0cyhtZXNzYWdlLCBjYWxsYmFja3MpIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRsZXQgYWxyZWFkeUV4aXN0cyA9IHRoaXMuZ2V0KG1lc3NhZ2UucGlkKTtcblx0XHRpZiAoIWFscmVhZHlFeGlzdHMpIHtcblx0XHRcdC8vICNBIGRvZXMgbm90IGFscmVhZHkgZXhpc3RzIGJ1dCBwZW5kaW5nXG5cdFx0XHRsZXQgZW50cnkgPSB0aGlzLnBlbmRpbmcuZ2V0KG1lc3NhZ2UudGlkKTtcblx0XHRcdGVudHJ5ICYmIGVudHJ5LnNvY2tldCAmJiBtZXNzYWdlLm9mZmVyICYmIGVudHJ5LnNvY2tldC5zaWduYWwobWVzc2FnZS5vZmZlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vICNCIGFscmVhZHkgZXhpc3RzIGFuZCBwZW5kaW5nXG5cdFx0XHRsZXQgdG9SZW1vdmUgPSB0aGlzLnBlbmRpbmcuZ2V0KG1lc3NhZ2UudGlkKTtcblx0XHRcdGlmICh0b1JlbW92ZSAmJiB0b1JlbW92ZS5zb2NrZXQpIHtcblx0XHRcdFx0Ly8gZXhpc3RzIGJ1dCBzb2NrZXQgc3RpbGwgdzhpblxuXHRcdFx0XHRpZiAoIWFscmVhZHlFeGlzdHMudGltZW91dCkge1xuXHRcdFx0XHRcdC8vICMxIGFscmVhZHkgaW4gbGl2aW5nIHNvY2tldCwgYWRkIGFuIG9jY3VycmVuY2Vcblx0XHRcdFx0XHR0aGlzLmxpdmluZy5pbnNlcnQobWVzc2FnZS5waWQpO1xuXHRcdFx0XHRcdHRvUmVtb3ZlLnN1Y2Nlc3NmdWwgPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vICMyIHdhcyBkeWluZywgcmVzdXJlY3QgdGhlIHNvY2tldFxuXHRcdFx0XHRcdHRoaXMuZHlpbmcucmVtb3ZlKGFscmVhZHlFeGlzdHMpO1xuXHRcdFx0XHRcdGNsZWFyVGltZW91dChhbHJlYWR5RXhpc3RzLnRpbWVvdXQpO1xuXHRcdFx0XHRcdGFscmVhZHlFeGlzdHMudGltZW91dCA9IG51bGw7XG5cdFx0XHRcdFx0dGhpcy5saXZpbmcuaW5zZXJ0KGFscmVhZHlFeGlzdHMpO1xuXHRcdFx0XHRcdHRvUmVtb3ZlLnN1Y2Nlc3NmdWwgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRvUmVtb3ZlLnNvY2tldC5kZXN0cm95KCk7XG5cdFx0XHRcdC8vICNDIHN0YW5kYXJkIG9uIGFjY2VwdCBmdW5jdGlvbiBpZiBpdCBleGlzdHMgaW4gYXJnXG5cdFx0XHRcdG1lc3NhZ2Uub2ZmZXIgJiYgY2FsbGJhY2tzICYmIGNhbGxiYWNrcy5vbkFjY2VwdCAmJiBjYWxsYmFja3Mub25BY2NlcHQoc2VsZi5NUmVzcG9uc2UobWVzc2FnZS50aWQsIHRoaXMuSUQsIG51bGwsIG1lc3NhZ2UucHJvdG9jb2wpKTtcblxuXHRcdFx0XHRjYWxsYmFja3MgJiYgY2FsbGJhY2tzLm9uUmVhZHkgJiYgY2FsbGJhY2tzLm9uUmVhZHkoYWxyZWFkeUV4aXN0cy5pZCkgfHwgdG9SZW1vdmUgJiYgdG9SZW1vdmUub25SZWFkeSAmJiB0b1JlbW92ZS5vblJlYWR5KGFscmVhZHlFeGlzdHMuaWQpO1xuXHRcdFx0XHR0aGlzLmVtaXQoJ3JlYWR5JywgYWxyZWFkeUV4aXN0cy5pZCk7XG5cdFx0XHRcdG1lc3NhZ2UucHJvdG9jb2wgJiYgdGhpcy5lbWl0KCdyZWFkeS0nICsgbWVzc2FnZS5wcm90b2NvbCwgYWxyZWFkeUV4aXN0cy5pZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBhbHJlYWR5RXhpc3RzO1xuXHR9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOZWlnaGJvcmhvb2Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTVsYVdkb1ltOXlhRzl2WkM1cWN5SmRMQ0p1WVcxbGN5STZXeUpGZG1WdWRFVnRhWFIwWlhJaUxDSnlaWEYxYVhKbElpd2lVMjlqYTJWMElpd2lkWFZwWkNJc0lsTnZjblJsWkVGeWNtRjVJaXdpVFhWc2RHbFRaWFFpTENKVGFXMXdiR1ZRWldWeUlpd2lUbVZwWjJoaWIzSm9iMjlrSWl3aVkyOXVjM1J5ZFdOMGIzSWlMQ0p2Y0hScGIyNXpJaXdpVUZKUFZFOURUMHdpTENKamIyNW1hV2NpTENKM1pXSnlkR01pTENKMGNtbGphMnhsSWl3aVZFbE5SVTlWVkNJc0luUnBiV1Z2ZFhRaUxDSmxibU52WkdsdVp5SXNJbVJsWTI5a2FXNW5JaXdpU1VRaUxDSjNjblJqSWl3aWRtVnlZbTl6WlNJc0lrTnZiWEJoY21GMGIzSWlMQ0poSWl3aVlpSXNJbVpwY25OMElpd2lhV1FpTENKelpXTnZibVFpTENKd1pXNWthVzVuSWl3aWJHbDJhVzVuSWl3aVpIbHBibWNpTENKTlVtVnpjRzl1YzJVaUxDSjBhV1FpTENKd2FXUWlMQ0p2Wm1abGNpSXNJbkJ5YjNSdlkyOXNJaXdpZEhsd1pTSXNJazFTWlhGMVpYTjBJaXdpYkc5bklpd2lZWEpuY3lJc0ltTnZibk52YkdVaUxDSmthWE5qYjI1dVpXTjBJaXdpY21WemRXeDBJaXdpWVhKeUlpd2labTl5UldGamFDSXNJbVVpTENKemIyTnJaWFFpTENKa1pYTjBjbTk1SWl3aWJYTWlMQ0pzWlc1bmRHZ2lMQ0psYm5SeWVTSXNJbkpsYlc5MlpTSXNJbVZ0YVhRaUxDSnZZMk1pTENKelpYUlVhVzFsYjNWMElpd2lhVzV6WlhKMElpd2laVzVqYjJSbElpd2liV1Z6YzJGblpTSXNJbVJsWTI5a1pTSXNJbk5sYm1RaUxDSnRjMmNpTENKVGRISnBibWNpTENKblpYUWlMQ0pqYjI1dVpXTjBaV1FpTENKZlkyaGhibTVsYkNJc0luSmxZV1I1VTNSaGRHVWlMQ0pGY25KdmNpSXNJbU52Ym01bFkzUnBiMjRpTENKallXeHNZbUZqYTNNaUxDSnBibWwwYVdGMFpTSXNJbUZqWTJWd2RDSXNJbUZzY21WaFpIbEZlR2x6ZEhNaUxDSm1hVzVoYkdsNlpTSXNJbU52YlcxdmJpSXNJbk5sYkdZaUxDSnZiaUlzSW5OMGNtVmhiU0lzSW1WeWNpSXNJbTl3ZEhNaUxDSnBibWwwYVdGMGIzSWlMQ0p6ZFdOalpYTnpablZzSWl3aWIyNVBabVpsY2lJc0ltOXVTVzVwZEdsaGRHVWlMQ0p2YmxKbFlXUjVJaXdpY0hKcGIzSWlMQ0p2YmtGalkyVndkQ0lzSW1Oc1pXRnlWR2x0Wlc5MWRDSXNJbU52Ym5SaGFXNXpJaXdpYkdsMlpTSXNJbkpsYlc5MlpVRnNiQ0lzSW1raUxDSnphV2R1WVd3aUxDSjBiMUpsYlc5MlpTSXNJbTF2WkhWc1pTSXNJbVY0Y0c5eWRITWlYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPenRCUVVWQkxFMUJRVTFCTEdWQlFXVkRMRkZCUVZFc1VVRkJVaXhEUVVGeVFqdEJRVU5CTEUxQlFVMURMRk5CUVZORUxGRkJRVkVzWVVGQlVpeERRVUZtT3p0QlFVVkJMRTFCUVUxRkxFOUJRVTlHTEZGQlFWRXNVMEZCVWl4RFFVRmlPMEZCUTBFc1RVRkJUVWNzWTBGQlkwZ3NVVUZCVVN3MFFrRkJVaXhEUVVGd1FqdEJRVU5CTEUxQlFVMUpMRmRCUVZkS0xGRkJRVkVzWlVGQlVpeERRVUZxUWp0QlFVTkJMRTFCUVUxTExHRkJRV0ZNTEZGQlFWRXNZVUZCVWl4RFFVRnVRanM3UVVGRlFUczdPenM3TzBGQlRVRXNUVUZCVFUwc1dVRkJUaXhUUVVFeVFsQXNXVUZCTTBJc1EwRkJkME03UVVGRGRrTlJMR0ZCUVdGRExFOUJRV0lzUlVGQmMwSTdRVUZEY2tJN08wRkJSVVVzVDBGQlMwTXNVVUZCVEN4SFFVRm5RaXh0UWtGQmFFSTdRVUZEUVR0QlFVTkJMRTlCUVV0RUxFOUJRVXdzUjBGQlpTeEZRVUZtTzBGQlEwRXNUMEZCUzBFc1QwRkJUQ3hEUVVGaFJTeE5RVUZpTEVkQlFYVkNSaXhYUVVGWFFTeFJRVUZSUnl4TlFVRndRaXhKUVVFclFpeEZRVUZ5UkR0QlFVTkJMRTlCUVV0SUxFOUJRVXdzUTBGQllVa3NUMEZCWWl4SFFVRjNRa29zVjBGQlYwRXNVVUZCVVVjc1RVRkJia0lzU1VGRFFVZ3NVVUZCVVVjc1RVRkJVaXhEUVVGbFF5eFBRVVJvUWl4SlFVTTBRaXhMUVVSdVJEdEJRVVZCTEU5QlFVdERMRTlCUVV3c1IwRkJaMEpNTEZkQlFWZEJMRkZCUVZGTkxFOUJRWEJDTEVsQlFXbERMRWxCUVVrc1JVRkJTaXhIUVVGVExFbEJRWHBFTEVOQlZHMUNMRU5CVXpaRE96dEJRVVZzUlN4UFFVRkxReXhSUVVGTUxFZEJRV2RDVUN4UlFVRlJUeXhSUVVGNFFqdEJRVU5CTEU5QlFVdERMRkZCUVV3c1IwRkJaMEpTTEZGQlFWRlJMRkZCUVhoQ08wRkJRMEVzVDBGQlMwTXNSVUZCVEN4SFFVRlZaaXhOUVVGV08wRkJRMEVzVFVGQlJ5eExRVUZMVFN4UFFVRk1MRU5CUVdGRkxFMUJRV0lzUTBGQmIwSlJMRWxCUVhaQ0xFVkJRVFpDTzBGQlF6VkNMRkZCUVV0V0xFOUJRVXdzUTBGQllWVXNTVUZCWWl4SFFVRnZRaXhMUVVGTFZpeFBRVUZNTEVOQlFXRkZMRTFCUVdJc1EwRkJiMEpSTEVsQlFYaERPMEZCUTBFN08wRkJSVVFzVFVGQlIxWXNWMEZCVjBFc1VVRkJVVmNzVDBGQmRFSXNSVUZCSzBJN1FVRkRPVUlzVVVGQlMwRXNUMEZCVEN4SFFVRmxXQ3hSUVVGUlZ5eFBRVUYyUWp0QlFVTkJPenRCUVVWRE96czdRVUZIUVN4UFFVRkxReXhWUVVGTUxFZEJRV3RDTEVOQlFVTkRMRU5CUVVRc1JVRkJTVU1zUTBGQlNpeExRVUZWTzBGQlEzaENMRTlCUVVsRExGRkJRVkZHTEVWQlFVVkhMRVZCUVVZc1NVRkJVVWdzUTBGQmNFSTdRVUZEUVN4UFFVRkpTU3hUUVVGVFNDeEZRVUZGUlN4RlFVRkdMRWxCUVZGR0xFTkJRWEpDTzBGQlEwRXNUMEZCU1VNc1VVRkJVVVVzVFVGQldpeEZRVUZ0UWp0QlFVRkZMRmRCUVU4c1EwRkJReXhEUVVGU08wRkJRVms3UVVGRGFrTXNUMEZCU1VZc1VVRkJVVVVzVFVGQldpeEZRVUZ0UWp0QlFVRkZMRmRCUVZFc1EwRkJVanRCUVVGWk8wRkJRMnBETEZWQlFVOHNRMEZCVUR0QlFVTklMRWRCVGtRN1FVRlBRVHRCUVVOQkxFOUJRVXRETEU5QlFVd3NSMEZCWlN4SlFVRkpka0lzVjBGQlNpeERRVUZuUWl4TFFVRkxhVUlzVlVGQmNrSXNRMEZCWml4RFFXcERiVUlzUTBGcFF6aENPMEZCUTJwRUxFOUJRVXRQTEUxQlFVd3NSMEZCWXl4SlFVRkpka0lzVVVGQlNpeERRVUZoTEV0QlFVdG5RaXhWUVVGc1FpeERRVUZrTEVOQmJFTnRRaXhEUVd0RE1FSTdRVUZETjBNc1QwRkJTMUVzUzBGQlRDeEhRVUZoTEVsQlFVbDZRaXhYUVVGS0xFTkJRV2RDTEV0QlFVdHBRaXhWUVVGeVFpeERRVUZpTEVOQmJrTnRRaXhEUVcxRE5FSTdRVUZEYWtRN08wRkJSVVJUTEZkQlFWZERMRWRCUVZnc1JVRkJaMEpETEVkQlFXaENMRVZCUVhGQ1F5eExRVUZ5UWl4RlFVRTBRa01zVVVGQk5VSXNSVUZCYzBNN1FVRkRja01zVTBGQlR6dEJRVU5PU0N4UlFVRkxRU3hIUVVSRE8wRkJSVTVETEZGQlFVdEJMRWRCUmtNN1FVRkhUa1VzWVVGQlZVRXNVVUZJU2p0QlFVbE9ReXhUUVVGTkxGZEJTa0U3UVVGTFRrWXNWVUZCVDBFN1FVRk1SQ3hIUVVGUU8wRkJUMEU3UVVGRFJFY3NWVUZCVlV3c1IwRkJWaXhGUVVGbFF5eEhRVUZtTEVWQlFXOUNReXhMUVVGd1FpeEZRVUV5UWtNc1VVRkJNMElzUlVGQmNVTTdRVUZEY0VNc1UwRkJUenRCUVVOT1NDeFJRVUZMUVN4SFFVUkRPMEZCUlU1RExGRkJRVXRCTEVkQlJrTTdRVUZIVGtVc1lVRkJWVUVzVVVGSVNqdEJRVWxPUXl4VFFVRk5MRlZCU2tFN1FVRkxUa1lzVlVGQlQwRTdRVUZNUkN4SFFVRlFPMEZCVDBFN08wRkJSVVJKTEV0QlFVc3NSMEZCUjBNc1NVRkJVaXhGUVVGak8wRkJRMklzVFVGQlJ5eExRVUZMYkVJc1QwRkJVaXhGUVVGcFFqdEJRVU5vUW0xQ0xGZEJRVkZHTEVkQlFWSXNRMEZCV1N4cFFrRkJXaXhGUVVFclFrTXNTVUZCTDBJN1FVRkRRVHRCUVVORU96dEJRVVZCT3pzN096czdPMEZCVDBGRkxGbEJRVmxtTEVWQlFWb3NSVUZCWjBJN1FVRkRaQ3hOUVVGSlowSXNVMEZCVXl4SlFVRmlPMEZCUTBFc1RVRkJTU3hEUVVGRGFFSXNSVUZCVEN4RlFVRlRPMEZCUTFBN1FVRkRRU3hSUVVGTFJTeFBRVUZNTEVOQlFXRmxMRWRCUVdJc1EwRkJhVUpETEU5QlFXcENMRU5CUVRCQ1F5eERRVUZFTEVsQlFVODdRVUZETlVKQkxFMUJRVVZETEUxQlFVWXNTVUZCV1VRc1JVRkJSVU1zVFVGQlJpeERRVUZUUXl4UFFVRlVMRVZCUVZvN1FVRkRTQ3hKUVVaRU8wRkJSMEVzVlVGQlR5eExRVUZMYkVJc1RVRkJUQ3hEUVVGWmJVSXNSVUZCV2l4RFFVRmxUQ3hIUVVGbUxFTkJRVzFDVFN4TlFVRnVRaXhIUVVFMFFpeERRVUZ1UXl4RlFVRnpRenRCUVVOc1F5eFZRVUZOU2l4SlFVRkpMRXRCUVV0b1FpeE5RVUZNTEVOQlFWbHRRaXhGUVVGYUxFTkJRV1ZNTEVkQlFXWXNRMEZCYlVJc1EwRkJia0lzUTBGQlZqdEJRVU5CUlN4TlFVRkZReXhOUVVGR0xFbEJRVmxFTEVWQlFVVkRMRTFCUVVZc1EwRkJVME1zVDBGQlZDeEZRVUZhTzBGQlEwZzdRVUZEUkN4VlFVRlBMRXRCUVV0cVFpeExRVUZNTEVOQlFWZGhMRWRCUVZnc1EwRkJaVTBzVFVGQlppeEhRVUYzUWl4RFFVRXZRaXhGUVVGclF6dEJRVU01UWl4VlFVRk5TaXhKUVVGSkxFdEJRVXRtTEV0QlFVd3NRMEZCVjJFc1IwRkJXQ3hEUVVGbExFTkJRV1lzUTBGQlZqdEJRVU5CUlN4TlFVRkZReXhOUVVGR0xFbEJRVmxFTEVWQlFVVkRMRTFCUVVZc1EwRkJVME1zVDBGQlZDeEZRVUZhTzBGQlEwZzdRVUZEUml4SFFXSkVMRTFCWVU4N1FVRkRURHRCUVVOQkxFOUJRVWxITEZGQlFWRXNTMEZCUzNKQ0xFMUJRVXdzUTBGQldYTkNMRTFCUVZvc1EwRkJiVUo2UWl4RlFVRnVRaXhEUVVGYU8wRkJRMEYzUWl4WlFVRlRMRXRCUVV0RkxFbEJRVXdzUTBGQlZTeFpRVUZXTEVWQlFYZENSaXhOUVVGTmVFSXNSVUZCT1VJc1EwRkJWRHRCUVVOQkxFOUJRVWwzUWl4VFFVRlRRU3hOUVVGTlJ5eEhRVUZPTEVsQlFXRXNRMEZCTVVJc1JVRkJOa0k3UVVGRGVrSklMRlZCUVUxc1F5eFBRVUZPTEVkQlFXZENjME1zVjBGQlZ5eFpRVUZaTzBGQlEyNURTaXhYUVVGTlNpeE5RVUZPTEVOQlFXRkRMRTlCUVdJN1FVRkRTQ3hMUVVabExFVkJSV0lzUzBGQlMyaERMRTlCUmxFc1EwRkJhRUk3UVVGSFFTeFRRVUZMWlN4TFFVRk1MRU5CUVZkNVFpeE5RVUZZTEVOQlFXdENUQ3hMUVVGc1FqdEJRVU5JTzBGQlEwUlNMRmxCUVZOUkxGTkJRVk1zU1VGQlZDeEpRVUZwUWl4TFFVRXhRanRCUVVORU8wRkJRMFFzVTBGQlQxSXNUVUZCVUR0QlFVTkVPenRCUVVWR096czdPenRCUVV0Qll5eFJRVUZSUXl4UFFVRlNMRVZCUVdsQ08wRkJRMmhDTEZOQlFVOHNTMEZCUzNoRExGRkJRVXdzUTBGQlkzZERMRTlCUVdRc1EwRkJVRHRCUVVOQk96dEJRVVZFT3pzN096dEJRVXRCUXl4UlFVRlJSQ3hQUVVGU0xFVkJRV2xDTzBGQlEyaENMRk5CUVU4c1MwRkJTM1pETEZGQlFVd3NRMEZCWTNWRExFOUJRV1FzUTBGQlVEdEJRVU5CT3p0QlFVVkVPenM3T3pzN1FVRk5RVVVzVFVGQlRXcERMRVZCUVU0c1JVRkJWU3RDTEU5QlFWWXNSVUZCYlVJN1FVRkRiRUk3UVVGRFFTeE5RVUZKUnl4TlFVRlJTQ3h0UWtGQmJVSkpMRTFCUVhCQ0xFbEJRU3RDU2l4UFFVRm9ReXhKUVVFMFF5eExRVUZMUkN4TlFVRk1MRU5CUVZsRExFOUJRVm9zUTBGQmRFUTdRVUZEUVR0QlFVTkJMRTFCUVVsUUxGRkJRVkVzUzBGQlMxa3NSMEZCVEN4RFFVRlRjRU1zUlVGQlZDeERRVUZhTzBGQlEwRXNUVUZCU1c5Q0xGTkJRVk5KTEZOQlFWTkJMRTFCUVUxS0xFMUJRVFZDTzBGQlEwRTdRVUZEUVN4TlFVRkpTaXhUUVVGVGEwSXNUMEZCVDJRc1RVRkJVQ3hKUVVGcFFrRXNUMEZCVDJsQ0xGTkJRWGhDTEVsQlFYRkRha0lzVDBGQlQydENMRkZCUVRWRExFbEJRWGxFYkVJc1QwRkJUMnRDTEZGQlFWQXNRMEZCWjBKRExGVkJRV2hDTEV0QlFTdENMRTFCUVhKSE8wRkJRMEU3UVVGRFFTeE5RVUZKTzBGQlEwaDJRaXhoUVVGVlNTeFBRVUZQWVN4SlFVRlFMRU5CUVZsRExFZEJRVm9zUTBGQlZqdEJRVU5CTzBGQlEwRXNSMEZJUkN4RFFVZEZMRTlCUVU5bUxFTkJRVkFzUlVGQlZUdEJRVU5ZTEZGQlFVdFFMRWRCUVV3c1EwRkJVeXcwUWtGQlZDeEZRVUYxUXl4SlFVRkpORUlzUzBGQlNpeERRVUZWY2tJc1EwRkJWaXhEUVVGMlF6dEJRVU5CU0N4WlFVRlRMRXRCUVZRN1FVRkRRVHRCUVVORUxGTkJRVTlCTEUxQlFWQTdRVUZEUVRzN1FVRkZSRHM3T3pzN096czdPMEZCVTBGNVFpeFpRVUZaUXl4VFFVRmFMRVZCUVhWQ1dDeFBRVUYyUWl4RlFVRm5RM1JDTEZGQlFXaERMRVZCUVRCRE96dEJRVVY2UXl4TlFVRkplVUlzVFVGQlQxRXNZVUZCWVVFc1ZVRkJWV2hETEVsQlFYWkNMRWxCUVN0Q1owTXNVMEZCYUVNc1NVRkJPRU5ZTEU5QlFYaEVPMEZCUTBFc1RVRkJTV1lzVFVGQlNqczdRVUZGUVN4TlFVRkpMRU5CUVVOclFpeEhRVUZNTEVWQlFWVTdRVUZEVkd4Q0xGbEJRVk1zUzBGQlN6SkNMRkZCUVV3c1EwRkJZMFFzVTBGQlpDeEZRVUY1UW1wRExGRkJRWHBDTEVOQlFWUTdRVUZEUVN4SFFVWkVMRTFCUlU4c1NVRkJTWGxDTEVsQlFVbDRRaXhKUVVGS0xFdEJRVmNzVlVGQlppeEZRVUV5UWpzN1FVRkZha01zVDBGQlIzRkNMRmRCUVZkQkxGRkJRVkY0UWl4SFFVRnVRaXhKUVVFd1FpeExRVUZMWkN4RlFVRk1MRXRCUVZselF5eFJRVUZSZUVJc1IwRkJha1FzUlVGQmMwUTdRVUZEY2tSVExHRkJRVk1zUzBGQlN6UkNMRTFCUVV3c1EwRkJXVllzUjBGQldpeEZRVUZwUWxFc1UwRkJha0lzUTBGQlZEdEJRVU5CTVVJc1lVRkJVeXhMUVVGTE5rSXNZVUZCVEN4RFFVRnRRbGdzUjBGQmJrSXNSVUZCZDBKUkxGTkJRWGhDTEV0QlFYTkRNVUlzVFVGQkwwTTdRVUZEUVR0QlFVVkVMRWRCVUUwc1RVRlBRU3hKUVVGSmEwSXNTVUZCU1hoQ0xFbEJRVW9zUzBGQlZ5eFhRVUZtTEVWQlFUUkNPMEZCUTJ4RFRTeFpRVUZUTEV0QlFVczRRaXhSUVVGTUxFTkJRV05hTEVkQlFXUXNRMEZCVkR0QlFVTkJiRUlzV1VGQlV5eExRVUZMTmtJc1lVRkJUQ3hEUVVGdFFsZ3NSMEZCYmtJc1MwRkJNa0pzUWl4TlFVRndRenRCUVVOQk96dEJRVVZFTEZOQlFVOUJMRlZCUVZWQkxFOUJRVTlvUWl4RlFVRjRRanRCUVVOQk96dEJRVVZCT3pzN096czdPMEZCVDBGdlF5eExRVUZKY0VNc1JVRkJTaXhGUVVGUE8wRkJRMGdzVTBGQlR5eExRVUZMUnl4TlFVRk1MRU5CUVZscFF5eEhRVUZhTEVOQlFXZENjRU1zUlVGQmFFSXNTMEZCZFVJc1MwRkJTMGtzUzBGQlRDeERRVUZYWjBNc1IwRkJXQ3hEUVVGbGNFTXNSVUZCWml4RFFVRjJRaXhKUVVFMlF5eExRVUZMUlN4UFFVRk1MRU5CUVdGclF5eEhRVUZpTEVOQlFXbENjRU1zUlVGQmFrSXNRMEZCY0VRN1FVRkRTRHM3UVVGRlJqczdPenM3UVVGTFFTdERMRkZCUVZGMlFpeExRVUZTTEVWQlFXVTdRVUZEWkN4UlFVRk5kMElzVDBGQlR5eEpRVUZpTzBGQlFVRXNVVUZCYlVJMVFpeFRRVUZUU1N4TlFVRk5TaXhOUVVGc1F6czdRVUZGUVVFc1UwRkJUelpDTEVWQlFWQXNRMEZCVlN4TlFVRldMRVZCUVcxQ2JFSXNUMEZCUkN4SlFVRmhPMEZCUXpsQ1FTeGhRVUZWYVVJc1MwRkJTMmhDTEUxQlFVd3NRMEZCV1VRc1QwRkJXaXhEUVVGV08wRkJRMEZwUWl4UlFVRkxkRUlzU1VGQlRDeERRVUZWTEZOQlFWWXNSVUZCY1VKR0xFMUJRVTFxUWl4SFFVRXpRaXhGUVVGblEzZENMRTlCUVdoRE8wRkJRMEVzUjBGSVJEdEJRVWxCV0N4VFFVRlBOa0lzUlVGQlVDeERRVUZWTEZGQlFWWXNSVUZCY1VKRExFMUJRVVFzU1VGQldUdEJRVU12UWtZc1VVRkJTM1JDTEVsQlFVd3NRMEZCVlN4UlFVRldMRVZCUVc5Q1JpeE5RVUZOYWtJc1IwRkJNVUlzUlVGQkswSXlReXhOUVVFdlFqdEJRVU5CTEVkQlJrUTdPMEZCU1VFNVFpeFRRVUZQTmtJc1JVRkJVQ3hEUVVGVkxFOUJRVllzUlVGQmJVSkZMRTlCUVU4N1FVRkRla0pJTEZGQlFVdDBRaXhKUVVGTUxFTkJRVlVzVDBGQlZpeEZRVUZ0UWl4SlFVRkpZeXhMUVVGS0xFTkJRVlZYTEVkQlFWWXNRMEZCYmtJN1FVRkRRU3hIUVVaRU8wRkJSMEU3TzBGQlJVUTdPenM3T3pzN1FVRlBRVklzVlVGQlZVUXNVMEZCVml4RlFVRnhRbXBETEZGQlFYSkNMRVZCUVN0Q08wRkJRemxDTEZGQlFVMTFReXhQUVVGUExFbEJRV0k3UVVGRFFTeE5RVUZKU1N4UFFVRlBTaXhMUVVGTGFFVXNUMEZCYUVJN1FVRkRRVzlGTEU5QlFVdERMRk5CUVV3c1IwRkJhVUlzU1VGQmFrSTdRVUZEUVN4TlFVRkpha01zVTBGQlV5eEpRVUZKZGtNc1ZVRkJTaXhEUVVGbGRVVXNTVUZCWml4RFFVRmlPMEZCUTBFc1RVRkJTVFZDTEZGQlFWRTdRVUZEV0hoQ0xFOUJRVWwwUWl4TlFVUlBPMEZCUlZnd1F5eFhRVUZSUVN4TlFVWkhPMEZCUjFoWUxHRkJRVlZCTEZGQlNFTTdRVUZKV0RaRExHVkJRVmtzUzBGS1JDeEZRVWxSTzBGQlEyNUNReXhaUVVGVFlpeGhRVUZoUVN4VlFVRlZZeXhWUVV4eVFqdEJRVTFZUXl4WlFVRlRaaXhoUVVGaFFTeFZRVUZWWlR0QlFVNXlRaXhIUVVGYU96dEJRVk5CTEU5QlFVdDJSQ3hQUVVGTUxFTkJRV0V5UWl4TlFVRmlMRU5CUVc5Q1RDeExRVUZ3UWp0QlFVTkJTaXhUUVVGUE5rSXNSVUZCVUN4RFFVRlZMRkZCUVZZc1JVRkJjVUo2UXl4TFFVRkVMRWxCUVZjN1FVRkRPVUpuUWl4VFFVRk5LMElzVDBGQlRpeEpRVUZwUWk5Q0xFMUJRVTByUWl4UFFVRk9MRU5CUVdOUUxFdEJRVXR5UXl4UlFVRk1MRU5CUVdOaExFMUJRVTE0UWl4RlFVRndRaXhGUVVGM1FtZEVMRXRCUVV0MlJDeEZRVUUzUWl4RlFVRnBRMlVzUzBGQmFrTXNSVUZCZDBORExGRkJRWGhETEVOQlFXUXNRMEZCYWtJN1FVRkRRU3hIUVVaRU96dEJRVWxCWlN4UlFVRk5iRU1zVDBGQlRpeEhRVUZuUW5ORExGZEJRVmNzVFVGQlRUdEJRVU5vUXl4UFFVRkpWQ3hKUVVGSk5rSXNTMEZCU3psRExFOUJRVXdzUTBGQllXdERMRWRCUVdJc1EwRkJhVUphTEUxQlFVMTRRaXhGUVVGMlFpeERRVUZTTzBGQlEwRXNUMEZCU1cxQ0xFdEJRVXNzUTBGQlEwRXNSVUZCUlcxRExGVkJRVm9zUlVGQmQwSTdRVUZEZGtKT0xGTkJRVXQwUWl4SlFVRk1MRU5CUVZVc1RVRkJWaXhGUVVGclFpdzBSRUZCYkVJN1FVRkRRVHRCUVVORWMwSXNVVUZCU3psRExFOUJRVXdzUTBGQllYVkNMRTFCUVdJc1EwRkJiMEpFTEV0QlFYQkNMRXRCUVRoQ1NpeFBRVUZQUXl4UFFVRlFMRVZCUVRsQ08wRkJRMEVzUjBGT1pTeEZRVTFpTEV0QlFVdG9ReXhQUVU1UkxFTkJRV2hDTzBGQlQwRXNVMEZCVDIxRExFdEJRVkE3UVVGRFFUczdRVUZIUkRzN096czdPenRCUVU5QmIwSXNVVUZCVVdJc1QwRkJVaXhGUVVGcFFsY3NVMEZCYWtJc1JVRkJORUk3UVVGRE0wSTdPenRCUVVkQkxFMUJRVWxuUWl4UlFVRlJMRXRCUVV0NFJDeFBRVUZNTEVOQlFXRnJReXhIUVVGaUxFTkJRV2xDVEN4UlFVRlJla0lzUjBGQmVrSXNRMEZCV2p0QlFVTkJMRTFCUVVsdlJDeExRVUZLTEVWQlFWYzdRVUZEVml4VlFVRlBRU3hMUVVGUU8wRkJRMEU3UVVGRFJEdEJRVU5CTEZGQlFVMVdMRTlCUVU4c1NVRkJZanRCUVVOQk8wRkJRMEVzVFVGQlNVa3NUMEZCVHl4TFFVRkxjRVVzVDBGQmFFSTdRVUZEUVc5RkxFOUJRVXRETEZOQlFVd3NSMEZCYVVJc1MwRkJha0k3UVVGRFFTeE5RVUZKYWtNc1UwRkJVeXhKUVVGSmRrTXNWVUZCU2l4RFFVRmxkVVVzU1VGQlppeERRVUZpTzBGQlEwRXNUVUZCU1RWQ0xGRkJRVkU3UVVGRFdIaENMRTlCUVVrclFpeFJRVUZSZWtJc1IwRkVSRHRCUVVWWVF5eFJRVUZMZDBJc1VVRkJVWGhDTEVkQlJrWTdRVUZIV0VVc1lVRkJWWE5DTEZGQlFWRjBRaXhSUVVoUU8wRkJTVmhYTEZkQlFWRkJMRTFCU2tjN1FVRkxXR3RETEdWQlFWa3NTMEZNUkR0QlFVMVlReXhaUVVGVFlpeGhRVUZoUVN4VlFVRlZhVUlzVVVGT2NrSTdRVUZQV0VZc1dVRkJVMllzWVVGQllVRXNWVUZCVldVN1FVRlFja0lzUjBGQldqczdRVUZWUVN4UFFVRkxka1FzVDBGQlRDeERRVUZoTWtJc1RVRkJZaXhEUVVGdlFrd3NTMEZCY0VJN1FVRkRRVW9zVTBGQlR6WkNMRVZCUVZBc1EwRkJWU3hSUVVGV0xFVkJRVzlDTEZWQlFWVjZReXhMUVVGV0xFVkJRV2xDTzBGQlEzQkRaMElzVTBGQlRTdENMRTlCUVU0c1NVRkJhVUl2UWl4TlFVRk5LMElzVDBGQlRpeERRVUZqVUN4TFFVRkxNME1zVTBGQlRDeERRVUZsYlVJc1RVRkJUWGhDTEVWQlFYSkNMRVZCUVhsQ1owUXNTMEZCUzNaRUxFVkJRVGxDTEVWQlFXdERaU3hMUVVGc1F5eEZRVUY1UTJkQ0xFMUJRVTFtTEZGQlFTOURMRU5CUVdRc1EwRkJha0k3UVVGRFFTeEhRVVpFTzBGQlIwRlhMRk5CUVU4MlFpeEZRVUZRTEVOQlFWVXNVMEZCVml4RlFVRnhRaXhaUVVGWk8wRkJRMmhEUkN4UlFVRkxXaXhIUVVGTUxFTkJRVk5hTEUxQlFVMXFRaXhIUVVGbUxFdEJRWFZDWVN4UFFVRlBReXhQUVVGUUxFVkJRWFpDTzBGQlEwRXlRaXhSUVVGTE9VTXNUMEZCVEN4RFFVRmhkVUlzVFVGQllpeERRVUZ2UWtRc1MwRkJjRUk3UVVGRFFYZENMRkZCUVVzM1F5eE5RVUZNTEVOQlFWa3dRaXhOUVVGYUxFTkJRVzFDTzBGQlEyeENOMElzVVVGQlNYZENMRTFCUVUxcVFpeEhRVVJSTzBGQlJXeENZU3haUVVGUlNTeE5RVUZOU2l4TlFVWkpPMEZCUjJ4Q2NVTXNZVUZCVTJwRExFMUJRVTFwUXl4UFFVaEhPMEZCU1d4Q1JpeGhRVUZUTDBJc1RVRkJUU3RDTzBGQlNrY3NTVUZCYmtJN08wRkJVVUV2UWl4VFFVRk5hVU1zVDBGQlRpeEpRVUZwUW1wRExFMUJRVTFwUXl4UFFVRk9MRU5CUVdOcVF5eE5RVUZOYWtJc1IwRkJjRUlzUTBGQmFrSTdRVUZEUVhsRExGRkJRVXQwUWl4SlFVRk1MRU5CUVZVc1QwRkJWaXhGUVVGdFFrWXNUVUZCVFdwQ0xFZEJRWHBDTzBGQlEwRnBRaXhUUVVGTlppeFJRVUZPTEVsQlFXdENkVU1zUzBGQlMzUkNMRWxCUVV3c1EwRkJWU3hYUVVGVFJpeE5RVUZOWml4UlFVRjZRaXhGUVVGdFEyVXNUVUZCVFdwQ0xFZEJRWHBETEVOQlFXeENPenRCUVVWQmNVUXNaMEpCUVdGd1F5eE5RVUZOYkVNc1QwRkJia0k3UVVGRFFXdERMRk5CUVUxc1F5eFBRVUZPTEVkQlFXZENMRWxCUVdoQ08wRkJRMEVzUjBGcVFrUTdRVUZyUWtFNFFpeFRRVUZQTmtJc1JVRkJVQ3hEUVVGVkxFOUJRVllzUlVGQmJVSXNXVUZCV1R0QlFVTTVRaXhQUVVGSlJDeExRVUZMT1VNc1QwRkJUQ3hEUVVGaE1rUXNVVUZCWWl4RFFVRnpRbkpETEUxQlFVMTRRaXhGUVVFMVFpeERRVUZLTEVWQlFYRkRPMEZCUTNCRE8wRkJRMEYzUWl4VlFVRk5TaXhOUVVGT0xFZEJRV1VzU1VGQlpqdEJRVU5CTEVsQlNFUXNUVUZIVHp0QlFVTk9PMEZCUTBGSkxGVkJRVTFzUXl4UFFVRk9MRWxCUVdsQ2MwVXNZVUZCWVhCRExFMUJRVTFzUXl4UFFVRnVRaXhEUVVGcVFqdEJRVU5CYTBNc1ZVRkJUV3hETEU5QlFVNHNSMEZCWjBJc1NVRkJhRUk3UVVGRFFTeFJRVUZKZDBVc1QwRkJUMlFzUzBGQlN6ZERMRTFCUVV3c1EwRkJXVFJFTEZOQlFWb3NRMEZCYzBKMlF5eE5RVUZOYWtJc1IwRkJOVUlzUTBGQldEdEJRVU5CTEZGQlFVbDFSQ3hKUVVGS0xFVkJRVlU3UVVGRFZDeFZRVUZMTEVsQlFVbEZMRWxCUVVrc1EwRkJZaXhGUVVGblFrRXNTVUZCU1VZc1MwRkJTMjVETEVkQlFYcENMRVZCUVRoQ0xFVkJRVVZ4UXl4RFFVRm9ReXhGUVVGdFF6dEJRVU5zUTJoQ0xGZEJRVXQwUWl4SlFVRk1MRU5CUVZVc1dVRkJWaXhGUVVGM1FrWXNUVUZCVFdwQ0xFZEJRVGxDTzBGQlEwRTdRVUZEUkR0QlFVTkVlVU1zVTBGQlN6VkRMRXRCUVV3c1EwRkJWM0ZDTEUxQlFWZ3NRMEZCYTBKRUxFMUJRVTFxUWl4SFFVRjRRanRCUVVOQk8wRkJRMFFzUjBGb1FrUTdPMEZCYTBKQkxFOUJRVXQzUXl4TlFVRk1MRU5CUVZsMlFpeExRVUZhT3p0QlFVVkJRU3hSUVVGTmJFTXNUMEZCVGl4SFFVRm5Rbk5ETEZkQlFWY3NXVUZCV1R0QlFVTjBReXhQUVVGSlZDeEpRVUZKTmtJc1MwRkJTemxETEU5QlFVd3NRMEZCWVd0RExFZEJRV0lzUTBGQmFVSmFMRTFCUVUxNFFpeEZRVUYyUWl4RFFVRlNPMEZCUTBFc1QwRkJTVzFDTEV0QlFVc3NRMEZCUTBFc1JVRkJSVzFETEZWQlFWb3NSVUZCZDBJN1FVRkRka0pPTEZOQlFVdDBRaXhKUVVGTUxFTkJRVlVzVFVGQlZpeEZRVUZyUWl3d1JFRkJiRUk3UVVGRFFUdEJRVU5FYzBJc1VVRkJTemxETEU5QlFVd3NRMEZCWVhWQ0xFMUJRV0lzUTBGQmIwSkVMRTFCUVUxNFFpeEZRVUV4UWl4TFFVRnBRMjlDTEU5QlFVOURMRTlCUVZBc1JVRkJha003UVVGRFFTeEhRVTVsTEVWQlRXSXNTMEZCUzJoRExFOUJUbEVzUTBGQmFFSTdRVUZQUVN4VFFVRlBiVU1zUzBGQlVEdEJRVU5CT3p0QlFVZEVPenM3T3pzN1FVRk5RWE5DTEZWQlFWVm1MRTlCUVZZc1JVRkJiVUk3UVVGRGJFSTdRVUZEUVR0QlFVTkJMRTFCUVVreVFpeFJRVUZSTEV0QlFVdDRSQ3hQUVVGTUxFTkJRV0ZyUXl4SFFVRmlMRU5CUVdsQ1RDeFJRVUZSZWtJc1IwRkJla0lzUTBGQldqdEJRVU5CTEUxQlFVa3NRMEZCUTI5RUxFdEJRVVFzU1VGQlZVRXNUVUZCVFc1RUxFZEJRWEJDTEVWQlFYbENPMEZCUTNoQ0xGVkJRVTl0UkN4TFFVRlFPMEZCUTBFN1FVRkRSRHRCUVVOQlFTeFJRVUZOYmtRc1IwRkJUaXhIUVVGWmQwSXNVVUZCVVhoQ0xFZEJRWEJDT3p0QlFVVkJMRTFCUVVscFFpeFJRVUZSTzBGQlExaDRRaXhQUVVGSkswSXNVVUZCVVhoQ0xFZEJSRVE3UVVGRldHRXNWMEZCVVhORExFMUJRVTEwUXl4TlFVWklPMEZCUjFoWUxHRkJRVlZwUkN4TlFVRk5ha1FzVVVGSVREdEJRVWxZWjBRc1dVRkJVME1zVFVGQlRVUXNUMEZLU2p0QlFVdFlSaXhaUVVGVFJ5eE5RVUZOU0R0QlFVeEtMRWRCUVZvN08wRkJVVUVzVVVGQlRWQXNUMEZCVHl4SlFVRmlPMEZCUTBFc1RVRkJTVFZDTEZOQlFWTkpMRTFCUVUxS0xFMUJRVzVDTzBGQlEwRkJMRk5CUVU4MlFpeEZRVUZRTEVOQlFWVXNVMEZCVml4RlFVRnhRaXhaUVVGWk96dEJRVVZvUTBRc1VVRkJTMW9zUjBGQlRDeERRVUZUV2l4TlFVRk5lRUlzUlVGQlppeExRVUZ6UW05Q0xFOUJRVTlETEU5QlFWQXNSVUZCZEVJN1FVRkRRVEpDTEZGQlFVczVReXhQUVVGTUxFTkJRV0YxUWl4TlFVRmlMRU5CUVc5Q2FVTXNTMEZCY0VJN1FVRkRRVllzVVVGQlN6ZERMRTFCUVV3c1EwRkJXVEJDTEUxQlFWb3NRMEZCYlVKTUxFdEJRVzVDTzBGQlEwRkJMRk5CUVUxcFF5eFBRVUZPTEVsQlFXbENha01zVFVGQlRXbERMRTlCUVU0c1EwRkJZME1zVFVGQlRXNUVMRWRCUVhCQ0xFTkJRV3BDTzBGQlEwRjVReXhSUVVGTGRFSXNTVUZCVEN4RFFVRlZMRTlCUVZZc1JVRkJiVUpuUXl4TlFVRk5ia1FzUjBGQmVrSTdRVUZEUVdsQ0xGTkJRVTFtTEZGQlFVNHNTVUZCYTBKMVF5eExRVUZMZEVJc1NVRkJUQ3hEUVVGVkxGZEJRVk5HTEUxQlFVMW1MRkZCUVhwQ0xFVkJRVzFEYVVRc1RVRkJUVzVFTEVkQlFYcERMRU5CUVd4Q08wRkJRMEZ4UkN4blFrRkJZVVlzVFVGQlRYQkZMRTlCUVc1Q08wRkJSVUVzUjBGV1JEdEJRVmRCT0VJc1UwRkJUelpDTEVWQlFWQXNRMEZCVlN4UFFVRldMRVZCUVcxQ0xGbEJRVms3UVVGRE9VSXNUMEZCU1VRc1MwRkJTemxETEU5QlFVd3NRMEZCWVRKRUxGRkJRV0lzUTBGQmMwSTVRaXhSUVVGUmVrSXNSMEZCT1VJc1EwRkJTaXhGUVVGM1F6dEJRVU4yUXpCRExGTkJRVXM1UXl4UFFVRk1MRU5CUVdGclF5eEhRVUZpTEVOQlFXbENUQ3hSUVVGUmVrSXNSMEZCZWtJc1JVRkJPRUpqTEUxQlFUbENMRWRCUVhWRExFbEJRWFpETzBGQlEwRXNTVUZHUkN4TlFVVlBPMEZCUTA1elF5eFZRVUZOY0VVc1QwRkJUaXhKUVVGcFFuTkZMR0ZCUVdGR0xFMUJRVTF3UlN4UFFVRnVRaXhEUVVGcVFqdEJRVU5CYjBVc1ZVRkJUWEJGTEU5QlFVNHNSMEZCWjBJc1NVRkJhRUk3UVVGRFFTeFJRVUZKZDBVc1QwRkJUMlFzUzBGQlN6ZERMRTFCUVV3c1EwRkJXVFJFTEZOQlFWb3NRMEZCYzBKTUxFMUJRVTF1UkN4SFFVRTFRaXhEUVVGWU8wRkJRMEVzVVVGQlNYVkVMRWxCUVVvc1JVRkJWVHRCUVVOVUxGVkJRVXNzU1VGQlNVVXNTVUZCU1N4RFFVRmlMRVZCUVdkQ1FTeEpRVUZKUml4TFFVRkxia01zUjBGQmVrSXNSVUZCT0VJc1JVRkJSWEZETEVOQlFXaERMRVZCUVcxRE8wRkJRMnhEYUVJc1YwRkJTM1JDTEVsQlFVd3NRMEZCVlN4WlFVRldMRVZCUVhkQ1owTXNUVUZCVFc1RUxFZEJRVGxDTzBGQlEwRTdRVUZEUkR0QlFVTkVlVU1zVTBGQlN6VkRMRXRCUVV3c1EwRkJWM0ZDTEUxQlFWZ3NRMEZCYTBKcFF5eE5RVUZOYmtRc1IwRkJlRUk3UVVGRFFUdEJRVU5FTEVkQlpFUTdPMEZCWjBKQkxFOUJRVXQzUXl4TlFVRk1MRU5CUVZsWExFdEJRVm83TzBGQlJVRXNVMEZCVDBFc1MwRkJVRHRCUVVOQk96dEJRVVZFT3pzN096czdRVUZOUVdJc1pVRkJaV1FzVDBGQlppeEZRVUYzUWxjc1UwRkJlRUlzUlVGQmJVTTdRVUZEYkVNc1VVRkJUVTBzVDBGQlR5eEpRVUZpTzBGQlEwRXNUVUZCU1Vnc1owSkJRV2RDTEV0QlFVdFVMRWRCUVV3c1EwRkJVMHdzVVVGQlVYaENMRWRCUVdwQ0xFTkJRWEJDTzBGQlEwRXNUVUZCU3l4RFFVRkRjME1zWVVGQlRpeEZRVUZ4UWp0QlFVTndRanRCUVVOQkxFOUJRVWx5UWl4UlFVRlJMRXRCUVV0MFFpeFBRVUZNTEVOQlFXRnJReXhIUVVGaUxFTkJRV2xDVEN4UlFVRlJla0lzUjBGQmVrSXNRMEZCV2p0QlFVTkJhMElzV1VGQlUwRXNUVUZCVFVvc1RVRkJaaXhKUVVGNVFsY3NVVUZCVVhaQ0xFdEJRV3BETEVsQlFUQkRaMElzVFVGQlRVb3NUVUZCVGl4RFFVRmhOa01zVFVGQllpeERRVUZ2UW14RExGRkJRVkYyUWl4TFFVRTFRaXhEUVVFeFF6dEJRVU5CTEVkQlNrUXNUVUZKVHp0QlFVTk9PMEZCUTBFc1QwRkJTVEJFTEZkQlFWY3NTMEZCUzJoRkxFOUJRVXdzUTBGQllXdERMRWRCUVdJc1EwRkJhVUpNTEZGQlFWRjZRaXhIUVVGNlFpeERRVUZtTzBGQlEwRXNUMEZCU1RSRUxGbEJRVmxCTEZOQlFWTTVReXhOUVVGNlFpeEZRVUZwUXp0QlFVRkZPMEZCUTJ4RExGRkJRVWtzUTBGQlEzbENMR05CUVdOMlJDeFBRVUZ1UWl4RlFVRTBRanRCUVVNelFqdEJRVU5CTEZWQlFVdGhMRTFCUVV3c1EwRkJXVEJDTEUxQlFWb3NRMEZCYlVKRkxGRkJRVkY0UWl4SFFVRXpRanRCUVVOQk1rUXNZMEZCVTFvc1ZVRkJWQ3hIUVVGelFpeEpRVUYwUWp0QlFVTkJMRXRCU2tRc1RVRkpUenRCUVVOT08wRkJRMEVzVlVGQlMyeEVMRXRCUVV3c1EwRkJWM0ZDTEUxQlFWZ3NRMEZCYTBKdlFpeGhRVUZzUWp0QlFVTkJaU3hyUWtGQllXWXNZMEZCWTNaRUxFOUJRVE5DTzBGQlEwRjFSQ3h0UWtGQlkzWkVMRTlCUVdRc1IwRkJkMElzU1VGQmVFSTdRVUZEUVN4VlFVRkxZU3hOUVVGTUxFTkJRVmt3UWl4TlFVRmFMRU5CUVcxQ1owSXNZVUZCYmtJN1FVRkRRWEZDTEdOQlFWTmFMRlZCUVZRc1IwRkJjMElzU1VGQmRFSTdRVUZEUVR0QlFVTkVXU3hoUVVGVE9VTXNUVUZCVkN4RFFVRm5Ra01zVDBGQmFFSTdRVUZEUVR0QlFVTkJWU3haUVVGUmRrSXNTMEZCVWl4SlFVRnBRbXRETEZOQlFXcENMRWxCUVRoQ1FTeFZRVUZWYVVJc1VVRkJlRU1zU1VGQmIwUnFRaXhWUVVGVmFVSXNVVUZCVml4RFFVRnRRbGdzUzBGQlN6TkRMRk5CUVV3c1EwRkJaVEJDTEZGQlFWRjZRaXhIUVVGMlFpeEZRVUUwUWl4TFFVRkxZaXhGUVVGcVF5eEZRVUZ4UXl4SlFVRnlReXhGUVVFeVEzTkRMRkZCUVZGMFFpeFJRVUZ1UkN4RFFVRnVRaXhEUVVGd1JEczdRVUZGUTJsRExHbENRVUZoUVN4VlFVRlZaU3hQUVVGMlFpeEpRVUZyUTJZc1ZVRkJWV1VzVDBGQlZpeERRVUZyUWxvc1kwRkJZemRETEVWQlFXaERMRU5CUVc1RExFbEJRVFJGYTBVc1dVRkJZVUVzVTBGQlUxUXNUMEZCZEVJc1NVRkJhVU5UTEZOQlFWTlVMRTlCUVZRc1EwRkJhVUphTEdOQlFXTTNReXhGUVVFdlFpeERRVUUzUnp0QlFVTkJMRk5CUVVzd1FpeEpRVUZNTEVOQlFWVXNUMEZCVml4RlFVRnRRbTFDTEdOQlFXTTNReXhGUVVGcVF6dEJRVU5CSzBJc1dVRkJVWFJDTEZGQlFWSXNTVUZCYjBJc1MwRkJTMmxDTEVsQlFVd3NRMEZCVlN4WFFVRlRTeXhSUVVGUmRFSXNVVUZCTTBJc1JVRkJjVU52UXl4alFVRmpOME1zUlVGQmJrUXNRMEZCY0VJN1FVRkRRVHRCUVVORU8wRkJRMFFzVTBGQlR6WkRMR0ZCUVZBN1FVRkRRVHM3UVVGNllYTkRPenRCUVRoaGVFTnpRaXhQUVVGUFF5eFBRVUZRTEVkQlFXbENkRVlzV1VGQmFrSWlMQ0ptYVd4bElqb2libVZwWjJoaWIzSm9iMjlrTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lKM1Z6WlNCemRISnBZM1FuTzF4dVhHNWpiMjV6ZENCRmRtVnVkRVZ0YVhSMFpYSWdQU0J5WlhGMWFYSmxLQ2RsZG1WdWRITW5LVHRjYm1OdmJuTjBJRk52WTJ0bGRDQTlJSEpsY1hWcGNtVW9KM05wYlhCc1pTMXdaV1Z5SnlrN1hHNWNibU52Ym5OMElIVjFhV1FnUFNCeVpYRjFhWEpsS0NkMWRXbGtMM1kwSnlrN1hHNWpiMjV6ZENCVGIzSjBaV1JCY25KaGVTQTlJSEpsY1hWcGNtVW9KeTR2WlhoMFpXNWtaV1F0YzI5eWRHVmtMV0Z5Y21GNUxtcHpKeWs3WEc1amIyNXpkQ0JOZFd4MGFWTmxkQ0E5SUhKbGNYVnBjbVVvSnk0dmJYVnNkR2x6WlhRdWFuTW5LVHRjYm1OdmJuTjBJRk5wYlhCc1pWQmxaWElnUFNCeVpYRjFhWEpsS0NkemFXMXdiR1V0Y0dWbGNpY3BPMXh1WEc0dktpcGNiaUFxSUU1bGFXZGlhRzl5YUc5dlpDQjBZV0pzWlNCd2NtOTJhV1JwYm1jZ1pXRnplU0JsYzNSaFlteHBjMmh0Wlc1MElHRnVaQ0J0WVc1aFoyVnRaVzUwSUc5bVhHNGdLaUJqYjI1dVpXTjBhVzl1YzF4dUlDb2dRSEJoY21GdElIdHZZbXBsWTNSOUlHOXdkR2x2Ym5NZ2RHaGxJRzl3ZEdsdmJuTWdZWFpoYVd4aFlteGxJSFJ2SUhSb1pTQmpiMjV1WldOMGFXOXVjeXdnWlM1bkxpQjBhVzFsYjNWMElHSmxabTl5WlZ4dUlDb2dZMjl1Ym1WamRHbHZiaUJoY21VZ2RISjFaV3g1SUhKbGJXOTJaV1FzSUZkbFlsSlVReUJ2Y0hScGIyNXpYRzRnS2k5Y2JtTnNZWE56SUU1bGFXZG9ZbTl5YUc5dlpDQmxlSFJsYm1SeklFVjJaVzUwUlcxcGRIUmxjaUI3WEc1Y2RHTnZibk4wY25WamRHOXlJQ2h2Y0hScGIyNXpLU0I3WEc1Y2RGeDBjM1Z3WlhJb0tUdGNibHh1SUNBZ0lIUm9hWE11VUZKUFZFOURUMHdnUFNBbmJtVnBaMmhpYjNKb2IyOWtMWGR5ZEdNbk8xeHVJQ0FnSUM4dklDTXhJSE5oZG1VZ2IzQjBhVzl1YzF4dUlDQWdJSFJvYVhNdWIzQjBhVzl1Y3lBOUlIdDlPMXh1SUNBZ0lIUm9hWE11YjNCMGFXOXVjeTVqYjI1bWFXY2dQU0FvYjNCMGFXOXVjeUFtSmlCdmNIUnBiMjV6TG5kbFluSjBZeWtnZkh3Z2UzMDdYRzRnSUNBZ2RHaHBjeTV2Y0hScGIyNXpMblJ5YVdOcmJHVWdQU0FvYjNCMGFXOXVjeUFtSmlCdmNIUnBiMjV6TG5kbFluSjBZeUFtSmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHOXdkR2x2Ym5NdWQyVmljblJqTG5SeWFXTnJiR1VwSUh4OElHWmhiSE5sTzF4dUlDQWdJSFJvYVhNdVZFbE5SVTlWVkNBOUlDaHZjSFJwYjI1eklDWW1JRzl3ZEdsdmJuTXVkR2x0Wlc5MWRDa2dmSHdnS0RJZ0tpQTJNQ0FxSURFd01EQXBPeUF2THlBeUlHMXBiblYwWlhOY2JseHVYSFJjZEhSb2FYTXVaVzVqYjJScGJtY2dQU0J2Y0hScGIyNXpMbVZ1WTI5a2FXNW5PMXh1WEhSY2RIUm9hWE11WkdWamIyUnBibWNnUFNCdmNIUnBiMjV6TG1SbFkyOWthVzVuTzF4dVhIUmNkSFJvYVhNdVNVUWdQU0IxZFdsa0tDazdYRzVjZEZ4MGFXWW9kR2hwY3k1dmNIUnBiMjV6TG1OdmJtWnBaeTUzY25SaktTQjdYRzVjZEZ4MFhIUjBhR2x6TG05d2RHbHZibk11ZDNKMFl5QTlJSFJvYVhNdWIzQjBhVzl1Y3k1amIyNW1hV2N1ZDNKMFl6dGNibHgwWEhSOVhHNWNibHgwWEhScFppaHZjSFJwYjI1eklDWW1JRzl3ZEdsdmJuTXVkbVZ5WW05elpTa2dlMXh1WEhSY2RGeDBkR2hwY3k1MlpYSmliM05sSUQwZ2IzQjBhVzl1Y3k1MlpYSmliM05sTzF4dVhIUmNkSDFjYmx4dUlDQWdJQzhxSVZ4dUlDQWdJQ0FxSUZ4Y1luSnBaV1lnWTI5dGNHRnlaU0IwYUdVZ2FXUWdiMllnWlc1MGNtbGxjeUJwYmlCMFlXSnNaWE5jYmlBZ0lDQWdLaTljYmlBZ0lDQjBhR2x6TGtOdmJYQmhjbUYwYjNJZ1BTQW9ZU3dnWWlrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1ptbHljM1FnUFNCaExtbGtJSHg4SUdFN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ6WldOdmJtUWdQU0JpTG1sa0lIeDhJR0k3WEc0Z0lDQWdJQ0FnSUdsbUlDaG1hWEp6ZENBOElITmxZMjl1WkNsN0lISmxkSFZ5YmlBdE1Uc2dmVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHWnBjbk4wSUQ0Z2MyVmpiMjVrS1hzZ2NtVjBkWEp1SUNBeE95QjlPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdNRHRjYmlBZ0lDQjlPMXh1SUNBZ0lDOHZJQ015SUdsdWFYUnBZV3hwZW1VZ2RHRmliR1Z6WEc0Z0lDQWdkR2hwY3k1d1pXNWthVzVuSUQwZ2JtVjNJRk52Y25SbFpFRnljbUY1S0hSb2FYTXVRMjl0Y0dGeVlYUnZjaWs3SUM4dklHNXZkQ0JtYVc1aGJHbDZaV1FnZVdWMFhHNGdJQ0FnZEdocGN5NXNhWFpwYm1jZ1BTQnVaWGNnVFhWc2RHbFRaWFFvZEdocGN5NURiMjF3WVhKaGRHOXlLVHNnTHk4Z2JHbDJaU0JoYm1RZ2RYTmhZbXhsWEc0Z0lDQWdkR2hwY3k1a2VXbHVaeUE5SUc1bGR5QlRiM0owWldSQmNuSmhlU2gwYUdsekxrTnZiWEJoY21GMGIzSXBPeUF2THlCaVpXbHVaeUJ5WlcxdmRtVmNibHgwZlZ4dVhHNWNkRTFTWlhOd2IyNXpaU0FvZEdsa0xDQndhV1FzSUc5bVptVnlMQ0J3Y205MGIyTnZiQ2tnZTF4dVhIUmNkSEpsZEhWeWJpQjdYRzVjZEZ4MFhIUjBhV1E2SUhScFpDeGNibHgwWEhSY2RIQnBaRG9nY0dsa0xGeHVYSFJjZEZ4MGNISnZkRzlqYjJ3NklIQnliM1J2WTI5c0xGeHVYSFJjZEZ4MGRIbHdaVG9nSjAxU1pYTndiMjV6WlNjc1hHNWNkRngwWEhSdlptWmxjam9nYjJabVpYSmNibHgwWEhSOU8xeHVYSFI5WEc1Y2RFMVNaWEYxWlhOMElDaDBhV1FzSUhCcFpDd2diMlptWlhJc0lIQnliM1J2WTI5c0tTQjdYRzVjZEZ4MGNtVjBkWEp1SUh0Y2JseDBYSFJjZEhScFpEb2dkR2xrTEZ4dVhIUmNkRngwY0dsa09pQndhV1FzWEc1Y2RGeDBYSFJ3Y205MGIyTnZiRG9nY0hKdmRHOWpiMndzWEc1Y2RGeDBYSFIwZVhCbE9pQW5UVkpsY1hWbGMzUW5MRnh1WEhSY2RGeDBiMlptWlhJNklHOW1abVZ5WEc1Y2RGeDBmVHRjYmx4MGZWeHVYRzVjZEd4dlp5QW9MaTR1WVhKbmN5a2dlMXh1WEhSY2RHbG1LSFJvYVhNdWRtVnlZbTl6WlNrZ2UxeHVYSFJjZEZ4MFkyOXVjMjlzWlM1c2IyY29KMXRPUlVsSFNFSlBVa2hQVDBSZElDY3NJR0Z5WjNNcE8xeHVYSFJjZEgxY2JseDBmVnh1WEc0Z0lDOHFLbHh1SUNBZ0tpQkVhWE5qYjI1dVpXTjBJRzl1WlNCdlppQjBhR1VnWVhKaklIZHBkR2dnZEdobElHbGtaVzUwYVdacFpYSWdhVzRnWVhKbmRXMWxiblF1SUVsbVhHNGdJQ0FxSUdsMElIZGhjeUIwYUdVZ2JHRnpkQ0JoY21NZ2QybDBhQ0J6ZFdOb0lHbGtMQ0IwYUdVZ2MyOWphMlYwSUdseklISmxiRzlqWVhSbFpDQjBieUIwYUdVZ1pIbHBibWRjYmlBZ0lDb2dkR0ZpYkdVdUlGUm9aU0J6YjJOclpYUWdkMmxzYkNCaVpTQmtaWE4wY205NUlHRm1kR1Z5SUdFZ1ltbDBMaUJKWmlCMGFHVnlaU0JwY3lCdWJ5QmhjbWQxYldWdWRDeGNiaUFnSUNvZ1pHbHpZMjl1Ym1WamRDQjBhR1VnZDJodmJHVXVYRzRnSUNBcUlFQndZWEpoYlNCN2MzUnlhVzVuZkhWdVpHVm1hVzVsWkgwZ2FXUWdTV1FnY0hKdmRtbGtaV1FnZEc4Z2FuVnpkQ0JrYVhOamIyNXVaV04wSUhSb1pTQmhjbU1nYjNJZ2FXWWdkVzVrWldacGJtVmtJR1JwYzJOdmJtNWxZM1FnWVd4c0lHRnlZM05jYmlBZ0lDb3ZYRzRnSUdScGMyTnZibTVsWTNRZ0tHbGtLU0I3WEc0Z0lDQWdiR1YwSUhKbGMzVnNkQ0E5SUhSeWRXVTdYRzRnSUNBZ2FXWWdLQ0ZwWkNrZ2UxeHVJQ0FnSUNBZ0x5OGdJekVnWkdselkyOXVibVZqZENCbGRtVnllWFJvYVc1blhHNGdJQ0FnSUNCMGFHbHpMbkJsYm1ScGJtY3VZWEp5TG1admNrVmhZMmdvS0dVcElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNCbExuTnZZMnRsZENBbUppQmxMbk52WTJ0bGRDNWtaWE4wY205NUtDazdYRzRnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJSGRvYVd4bElDaDBhR2x6TG14cGRtbHVaeTV0Y3k1aGNuSXViR1Z1WjNSb0lENGdNQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lHTnZibk4wSUdVZ1BTQjBhR2x6TG14cGRtbHVaeTV0Y3k1aGNuSmJNRjA3WEc0Z0lDQWdJQ0FnSUNBZ1pTNXpiMk5yWlhRZ0ppWWdaUzV6YjJOclpYUXVaR1Z6ZEhKdmVTZ3BPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdkMmhwYkdVZ0tIUm9hWE11WkhscGJtY3VZWEp5TG14bGJtZDBhQ0ErSURBcElIdGNiaUFnSUNBZ0lDQWdJQ0JqYjI1emRDQmxJRDBnZEdocGN5NWtlV2x1Wnk1aGNuSmJNRjA3WEc0Z0lDQWdJQ0FnSUNBZ1pTNXpiMk5yWlhRZ0ppWWdaUzV6YjJOclpYUXVaR1Z6ZEhKdmVTZ3BPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBdkx5QWpNaUJ5WlcxdmRtVWdiMjVsSUdGeVkxeHVJQ0FnSUNBZ2JHVjBJR1Z1ZEhKNUlEMGdkR2hwY3k1c2FYWnBibWN1Y21WdGIzWmxLR2xrS1R0Y2JpQWdJQ0FnSUdWdWRISjVJQ1ltSUhSb2FYTXVaVzFwZENnblpHbHpZMjl1Ym1WamRDY3NJR1Z1ZEhKNUxtbGtLVHRjYmlBZ0lDQWdJR2xtSUNobGJuUnllU0FtSmlCbGJuUnllUzV2WTJNZ1BEMGdNQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lHVnVkSEo1TG5ScGJXVnZkWFFnUFNCelpYUlVhVzFsYjNWMEtHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdaVzUwY25rdWMyOWphMlYwTG1SbGMzUnliM2tvS1R0Y2JpQWdJQ0FnSUNBZ0lDQjlMQ0IwYUdsekxsUkpUVVZQVlZRcE8xeHVJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpIbHBibWN1YVc1elpYSjBLR1Z1ZEhKNUtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lISmxjM1ZzZENBOUlHVnVkSEo1SUNZbUlIUnlkV1VnZkh3Z1ptRnNjMlU3WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCeVpYTjFiSFE3WEc0Z0lIMWNibHh1WEhRdktpcGNibHgwSUNvZ1RtVjNJRzFsZEdodlpDQjBieUJsYm1OdlpHVWdkR2hsSUcxbGMzTmhaMlVnWVhNZ2QyVWdkMkZ1ZEZ4dVhIUWdLaUJBY0dGeVlXMGdJSHR2WW1wbFkzUjlJRzFsYzNOaFoyVWdWR2hsSUcxbGMzTmhaMlVnZEc4Z1pXNWpiMlJsWEc1Y2RDQXFJRUJ5WlhSMWNtNGdlM04wY21sdVozeGlhVzVoY25sOUlFVnVZMjlrWldRZ2JXVnpjMkZuWlZ4dVhIUWdLaTljYmx4MFpXNWpiMlJsSUNodFpYTnpZV2RsS1NCN1hHNWNkRngwY21WMGRYSnVJSFJvYVhNdVpXNWpiMlJwYm1jb2JXVnpjMkZuWlNrN1hHNWNkSDFjYmx4dVhIUXZLaXBjYmx4MElDb2dUbVYzSUcxbGRHaHZaQ0IwYnlCbGJtTnZaR1VnZEdobElHMWxjM05oWjJVZ1lYTWdkMlVnZDJGdWRGeHVYSFFnS2lCQWNHRnlZVzBnSUh0dlltcGxZM1I5SUcxbGMzTmhaMlVnVkdobElHMWxjM05oWjJVZ2RHOGdaVzVqYjJSbFhHNWNkQ0FxSUVCeVpYUjFjbTRnZTNOMGNtbHVaM3hpYVc1aGNubDlJRVZ1WTI5a1pXUWdiV1Z6YzJGblpWeHVYSFFnS2k5Y2JseDBaR1ZqYjJSbElDaHRaWE56WVdkbEtTQjdYRzVjZEZ4MGNtVjBkWEp1SUhSb2FYTXVaR1ZqYjJScGJtY29iV1Z6YzJGblpTazdYRzVjZEgxY2JseHVYSFF2S2lwY2JseDBJQ29nVTJWdVpDQmhJRzFsYzNOaFoyVWdkRzhnZEdobElITnZZMnRsZENCcGJpQmhjbWQxYldWdWRGeHVYSFFnS2lCQWNHRnlZVzBnZTNOMGNtbHVaMzBnYVdRZ2RHaGxJR2xrWlc1MGFXWnBaWElnYjJZZ2RHaGxJSE52WTJ0bGRGeHVYSFFnS2lCQWNHRnlZVzBnZTI5aWFtVmpkSDBnYldWemMyRm5aU0IwYUdVZ2JXVnpjMkZuWlNCMGJ5QnpaVzVrWEc1Y2RDQXFJRUJ5WlhSMWNtNGdlMkp2YjJ4bFlXNTlJSFJ5ZFdVZ2FXWWdkR2hsSUcxbGMzTmhaMlVnYVhNZ2MyVnVkQ3dnWm1Gc2MyVWdiM1JvWlhKM2FYTmxYRzVjZENBcUwxeHVYSFJ6Wlc1a0lDaHBaQ3dnYldWemMyRm5aU2tnZTF4dVhIUmNkQzh2SUNNeElHTnZiblpsY25RZ2JXVnpjMkZuWlNCMGJ5QnpkSEpwYm1jZ0tGUlBSRThwSUdOb1pXTnJJR2xtSUhSb1pYSmxJR2x6SUdFZ1ltVjBkR1Z5SUhkaGVWeHVYSFJjZEd4bGRDQnRjMmNnUFNBb0tHMWxjM05oWjJVZ2FXNXpkR0Z1WTJWdlppQlRkSEpwYm1jcElDWW1JRzFsYzNOaFoyVXBJSHg4SUhSb2FYTXVaVzVqYjJSbEtHMWxjM05oWjJVcE8xeHVYSFJjZEM4dklDTXlJR2RsZENCMGFHVWdjMjlqYTJWMElIUnZJSFZ6WlZ4dVhIUmNkR3hsZENCbGJuUnllU0E5SUhSb2FYTXVaMlYwS0dsa0tUdGNibHgwWEhSc1pYUWdjMjlqYTJWMElEMGdaVzUwY25rZ0ppWWdaVzUwY25rdWMyOWphMlYwTzF4dVhIUmNkQzh2SUNNeklITmxibVJjYmx4MFhIUnNaWFFnY21WemRXeDBJRDBnYlhObklDWW1JSE52WTJ0bGRDQW1KaUJ6YjJOclpYUXVZMjl1Ym1WamRHVmtJQ1ltSUhOdlkydGxkQzVmWTJoaGJtNWxiQ0FtSmlBb2MyOWphMlYwTGw5amFHRnVibVZzTG5KbFlXUjVVM1JoZEdVZ1BUMDlJQ2R2Y0dWdUp5azdYRzVjZEZ4MEx5OGdjbVZ6ZFd4MElDWW1JSE52WTJ0bGRDNXpaVzVrS0cxelp5azdYRzVjZEZ4MGRISjVJSHRjYmx4MFhIUmNkSEpsYzNWc2RDQW1KaUJ6YjJOclpYUXVjMlZ1WkNodGMyY3BPMXh1WEhSY2RGeDBMeThnUkU5T1ZDQlRSVlFnVWtWVFZVeFVJRlJQSUZSU1ZVVWdJVnh1WEhSY2RIMGdZMkYwWTJnZ0tHVXBJSHRjYmx4MFhIUmNkSFJvYVhNdWJHOW5LQ2RiVGtWSlIwaENUMUpJVDA5RU9sTkZUa1E2UlZKU1QxSmRJQ2NzSUc1bGR5QkZjbkp2Y2lobEtTazdYRzVjZEZ4MFhIUnlaWE4xYkhRZ1BTQm1ZV3h6WlR0Y2JseDBYSFI5WEc1Y2RGeDBjbVYwZFhKdUlISmxjM1ZzZER0Y2JseDBmVnh1WEc1Y2RDOHFLbHh1WEhRcUlHTnlaV0YwWlhNZ1lTQnVaWGNnYVc1amIyMXRhVzVuSUc5eUlHOTFkR2R2YVc1bklHTnZibTVsWTNScGIyNGdaR1Z3Wlc1a2FXNW5JRzl1SUdGeVozVnRaVzUwYzF4dVhIUXFJRUJ3WVhKaGJTQjdZMkZzYkdKaFkydDlJR05oYkd4aVlXTnJjeUIwYUdVZ1kyRnNiR0poWTJzZ1puVnVZM1JwYjI0Z2QyaGxiaUIwYUdVZ2MzUjFiaTlwWTJVZ2MyVnlkbVZ5SUhKbGRIVnlibk1nZEdobFhHNWNkQ29nYjJabVpYSmNibHgwS2lCQWNHRnlZVzBnZTI5aWFtVmpkSDBnYldWemMyRm5aU0JsYlhCMGVTQnBaaUJwZENCdGRYTjBJR2x1YVhScFlYUmxJR0VnWTI5dWJtVmpkR2x2Yml3Z2IzSWdkR2hsSUcxbGMzTmhaMlVnY21WalpXbDJaV1JjYmx4MEtpQnBaaUJwZENCdGRYTjBJR0Z1YzNkbGNpQnZjaUJtYVc1aGJHbDZaU0J2Ym1WY2JseDBLaUJBY0dGeVlXMGdlM04wY21sdVozMGdjSEp2ZEc5amIyd2dkR2hsSUdOdmJtNWxZM1JwYjI0Z2FYTWdaWE4wWVdKc2FYTm9aV1FnWm05eUlHRWdjM0JsWTJsbWFXTWdjSEp2ZEc5amIyeGNibHgwS2lCQWNtVjBkWEp1SUh0emRISnBibWQ5SUhSb1pTQnBaQ0J2WmlCMGFHVWdjMjlqYTJWMFhHNWNkQ292WEc1Y2RHTnZibTVsWTNScGIyNGdLR05oYkd4aVlXTnJjeXdnYldWemMyRm5aU3dnY0hKdmRHOWpiMndwSUh0Y2JseHVYSFJjZEd4bGRDQnRjMmNnUFNBb1kyRnNiR0poWTJ0eklDWW1JR05oYkd4aVlXTnJjeTUwZVhCbElDWW1JR05oYkd4aVlXTnJjeWtnZkh3Z2JXVnpjMkZuWlR0Y2JseDBYSFJzWlhRZ2NtVnpkV3gwTzF4dVhHNWNkRngwYVdZZ0tDRnRjMmNwSUh0Y2JseDBYSFJjZEhKbGMzVnNkQ0E5SUhSb2FYTXVhVzVwZEdsaGRHVW9ZMkZzYkdKaFkydHpMQ0J3Y205MGIyTnZiQ2s3WEc1Y2RGeDBmU0JsYkhObElHbG1JQ2h0YzJjdWRIbHdaVDA5UFNkTlVtVnhkV1Z6ZENjcElIdGNibHh1WEhSY2RGeDBhV1lvYldWemMyRm5aU0FtSmlCdFpYTnpZV2RsTG5CcFpDQW1KaUIwYUdsekxrbEVJQ0U5UFNCdFpYTnpZV2RsTG5CcFpDa2dlMXh1WEhSY2RGeDBYSFJ5WlhOMWJIUWdQU0IwYUdsekxtRmpZMlZ3ZENodGMyY3NJR05oYkd4aVlXTnJjeWs3WEc1Y2RGeDBYSFJjZEhKbGMzVnNkQ0E5SUhSb2FYTXVZV3h5WldGa2VVVjRhWE4wY3lodGMyY3NJR05oYkd4aVlXTnJjeWtnZkh3Z2NtVnpkV3gwTzF4dVhIUmNkRngwZlZ4dVhHNWNkRngwZlNCbGJITmxJR2xtSUNodGMyY3VkSGx3WlQwOVBTZE5VbVZ6Y0c5dWMyVW5LU0I3WEc1Y2RGeDBYSFJ5WlhOMWJIUWdQU0IwYUdsekxtWnBibUZzYVhwbEtHMXpaeWs3WEc1Y2RGeDBYSFJ5WlhOMWJIUWdQU0IwYUdsekxtRnNjbVZoWkhsRmVHbHpkSE1vYlhObktTQjhmQ0J5WlhOMWJIUTdYRzVjZEZ4MGZWeHVYRzVjZEZ4MGNtVjBkWEp1SUhKbGMzVnNkQ0FtSmlCeVpYTjFiSFF1YVdRN1hHNWNkSDFjYmx4dUlDQXZLaXBjYmlBZ0lDb2dSMlYwSUhSb1pTQmxiblJ5ZVNCamIzSnlaWE53YjI1a2FXNW5JSFJ2SUhSb1pTQnBaQ0JwYmlCaGNtZDFiV1Z1ZEM0Z1ZHaGxJR1Z1ZEhKNUlHTnZiblJoYVc1elhHNGdJQ0FxSUhSb1pTQnpiMk5yWlhRdVhHNGdJQ0FxSUVCd1lYSmhiU0I3YzNSeWFXNW5mU0JwWkNCMGFHVWdhV1JsYm5ScFptbGxjaUJ2WmlCMGFHVWdjMjlqYTJWMElIUnZJSEpsZEhKcFpYWmxYRzRnSUNBcUlFQnlaWFIxY200Z2UyOWlhbVZqZEgwZ1lXNGdaVzUwY25rZ1puSnZiU0IwWVdKc1pYTXVJRWwwSUhCeWFXOXlhWHBsY3lCbGJuUnlhV1Z6SUdsdUlHeHBkbWx1Wnl3Z2RHaGxiaUJrZVdsdVp5eGNiaUFnSUNvZ2RHaGxiaUJ3Wlc1a2FXNW5MbHh1SUNBZ0tpOWNiaUFnWjJWMEtHbGtLWHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG14cGRtbHVaeTVuWlhRb2FXUXBJSHg4SUhSb2FYTXVaSGxwYm1jdVoyVjBLR2xrS1NCOGZDQjBhR2x6TG5CbGJtUnBibWN1WjJWMEtHbGtLVHRjYmlBZ2ZWeHVYRzVjZEM4cUtseHVYSFFnS2lCRGIyMXRiMjRnWW1Wb1lYWnBiM0lnZEc4Z2FXNXBkR2xoZEdsdVp5QmhibVFnWVdOalpYQjBhVzVuSUhOdlkydGxkSE5jYmx4MElDb2dRSEJoY21GdElIdHZZbXBsWTNSOUlHVnVkSEo1SUhSb1pTQmxiblJ5ZVNCcGJpQjBhR1VnYm1WcFoyaGliM0pvYjI5a0lIUmhZbXhsWEc1Y2RDQXFJRUJ5WlhSMWNtNGdlM1p2YVdSOVhHNWNkQ0FxTDF4dVhIUmpiMjF0YjI0Z0tHVnVkSEo1S1NCN1hHNWNkRngwWTI5dWMzUWdjMlZzWmlBOUlIUm9hWE1zSUhOdlkydGxkQ0E5SUdWdWRISjVMbk52WTJ0bGREdGNibHh1WEhSY2RITnZZMnRsZEM1dmJpZ25aR0YwWVNjc0lDaHRaWE56WVdkbEtTQTlQaUI3WEc1Y2RGeDBYSFJ0WlhOellXZGxJRDBnYzJWc1ppNWtaV052WkdVb2JXVnpjMkZuWlNrN1hHNWNkRngwWEhSelpXeG1MbVZ0YVhRb0ozSmxZMlZwZG1VbkxDQmxiblJ5ZVM1d2FXUXNJRzFsYzNOaFoyVXBPMXh1WEhSY2RIMHBPMXh1WEhSY2RITnZZMnRsZEM1dmJpZ25jM1J5WldGdEp5d2dLSE4wY21WaGJTa2dQVDRnZTF4dVhIUmNkRngwYzJWc1ppNWxiV2wwS0NkemRISmxZVzBuTENCbGJuUnllUzV3YVdRc0lITjBjbVZoYlNrN1hHNWNkRngwZlNrN1hHNWNibHgwWEhSemIyTnJaWFF1YjI0b0oyVnljbTl5Snl3Z1pYSnlJRDArSUh0Y2JseDBYSFJjZEhObGJHWXVaVzFwZENnblpYSnliM0luTENCdVpYY2dSWEp5YjNJb1pYSnlLU2s3WEc1Y2RGeDBmU2s3WEc1Y2RIMWNibHh1WEhRdktpcGNibHgwSUNvZ2FXNXBkR2xoZEdWeklHRWdZMjl1Ym1WamRHbHZiaUIzYVhSb0lHRnViM1JvWlhJZ2NHVmxjaUF0TFNCMGFHVWdhV1FnYjJZZ2QyaHBZMmdnYVhNZ2RXNXJibTkzYmx4dVhIUWdLaUJBY0dGeVlXMGdlMk5oYkd4aVlXTnJmU0JqWVd4c1ltRmphM01nZEdobElHWjFibU4wYVc5dUlIUnZJR05oYkd3Z2QyaGxiaUJ6YVdkdVlXeHBibWNnYVc1bWJ5QmhjbVVnY21WalpXbDJaV1FnWVc1a1hHNWNkQ0FxSUhkb1pXNGdkR2hsSUdOdmJtNWxZM1JwYjI0Z2FYTWdjbVZoWkhrZ2RHOGdZbVVnZFhObFpGeHVYSFFnS2lCQWNHRnlZVzBnZTNOMGNtbHVaMzBnY0hKdmRHOWpiMndnVkdobElIQnliM1J2WTI5c1hHNWNkQ0FxSUVCeVpYUjFjbTRnZTI5aWFtVmpkSDBnWlc1MGNubGNibHgwSUNvdlhHNWNkR2x1YVhScFlYUmxJQ2hqWVd4c1ltRmphM01zSUhCeWIzUnZZMjlzS1NCN1hHNWNkRngwWTI5dWMzUWdjMlZzWmlBOUlIUm9hWE03WEc1Y2RGeDBiR1YwSUc5d2RITWdQU0J6Wld4bUxtOXdkR2x2Ym5NN1hHNWNkRngwYjNCMGN5NXBibWwwYVdGMGIzSWdQU0IwY25WbE8xeHVYSFJjZEd4bGRDQnpiMk5yWlhRZ1BTQnVaWGNnVTJsdGNHeGxVR1ZsY2lodmNIUnpLVHRjYmx4MFhIUnNaWFFnWlc1MGNua2dQU0I3WEc1Y2RGeDBYSFJwWkRvZ2RYVnBaQ2dwTEZ4dVhIUmNkRngwYzI5amEyVjBPaUJ6YjJOclpYUXNYRzVjZEZ4MFhIUndjbTkwYjJOdmJEb2djSEp2ZEc5amIyd3NYRzVjZEZ4MFhIUnpkV05qWlhOelpuVnNPaUJtWVd4elpTd2dMeThnYm05MElIbGxkRnh1WEhSY2RGeDBiMjVQWm1abGNqb2dZMkZzYkdKaFkydHpJQ1ltSUdOaGJHeGlZV05yY3k1dmJrbHVhWFJwWVhSbExGeHVYSFJjZEZ4MGIyNVNaV0ZrZVRvZ1kyRnNiR0poWTJ0eklDWW1JR05oYkd4aVlXTnJjeTV2YmxKbFlXUjVYRzVjZEZ4MGZUdGNibHh1WEhSY2RIUm9hWE11Y0dWdVpHbHVaeTVwYm5ObGNuUW9aVzUwY25rcE8xeHVYSFJjZEhOdlkydGxkQzV2YmlnbmMybG5ibUZzSnl3Z0tHOW1abVZ5S1NBOVBpQjdYRzVjZEZ4MFhIUmxiblJ5ZVM1dmJrOW1abVZ5SUNZbUlHVnVkSEo1TG05dVQyWm1aWElvYzJWc1ppNU5VbVZ4ZFdWemRDaGxiblJ5ZVM1cFpDd2djMlZzWmk1SlJDd2diMlptWlhJc0lIQnliM1J2WTI5c0tTazdYRzVjZEZ4MGZTazdYRzVjYmx4MFhIUmxiblJ5ZVM1MGFXMWxiM1YwSUQwZ2MyVjBWR2x0Wlc5MWRDZ29LU0E5UGlCN1hHNWNkRngwWEhSc1pYUWdaU0E5SUhObGJHWXVjR1Z1WkdsdVp5NW5aWFFvWlc1MGNua3VhV1FwTzF4dVhIUmNkRngwYVdZZ0tHVWdKaVlnSVdVdWMzVmpZMlZ6YzJaMWJDa2dlMXh1WEhSY2RGeDBYSFJ6Wld4bUxtVnRhWFFvSjJaaGFXd25MQ0FuVzBaQlNVdzZTVTVKVkVsQlZFVmRJR0Z1SUdWeWNtOXlJRzlqWTNWeVpXUWdaSFZ5YVc1bklISmxiVzkyYVc1bklIUm9aU0JsYm5SeWVTY3BPMXh1WEhSY2RGeDBmVnh1WEhSY2RGeDBjMlZzWmk1d1pXNWthVzVuTG5KbGJXOTJaU2hsYm5SeWVTa2dKaVlnYzI5amEyVjBMbVJsYzNSeWIza29LVHRjYmx4MFhIUjlMQ0IwYUdsekxsUkpUVVZQVlZRcE8xeHVYSFJjZEhKbGRIVnliaUJsYm5SeWVUdGNibHgwZlZ4dVhHNWNibHgwTHlvcVhHNWNkQ0FxSUdGalkyVndkQ0IwYUdVZ2IyWm1aWElnYjJZZ1lXNXZkR2hsY2lCd1pXVnlYRzVjZENBcUlFQndZWEpoYlNCN2IySnFaV04wZlNCdFpYTnpZV2RsSUhSb1pTQnlaV05sYVhabFpDQnRaWE56WVdkbElHTnZiblJoYVc1cGJtY2dhV1FnWVc1a0lHOW1abVZ5WEc1Y2RDQXFJRUJ3WVhKaGJTQjdZMkZzYkdKaFkydDlJR05oYkd4aVlXTnJjeUIwYUdVZ1puVnVZM1JwYjI0Z1kyRnNiQ0JoWm5SbGNpQnlaV05sYVhacGJtY2dkR2hsSUc5bVptVnlJR0Z1WkZ4dVhIUWdLaUIzYUdWdUlIUm9aU0JqYjI1dVpXTjBhVzl1SUdseklISmxZV1I1WEc1Y2RDQXFJRUJ5WlhSMWNtNGdlMjlpYW1WamRIMGdSVzUwY25sY2JseDBJQ292WEc1Y2RHRmpZMlZ3ZENBb2JXVnpjMkZuWlN3Z1kyRnNiR0poWTJ0ektTQjdYRzVjZEZ4MEx5OGdJekVnYVdZZ1lXeHlaV0ZrZVNCbGVHbHpkSE1zSUhWelpTQnBkRnh1WEc1Y2JseDBYSFJzWlhRZ2NISnBiM0lnUFNCMGFHbHpMbkJsYm1ScGJtY3VaMlYwS0cxbGMzTmhaMlV1ZEdsa0tUdGNibHgwWEhScFppQW9jSEpwYjNJcElIdGNibHgwWEhSY2RISmxkSFZ5YmlCd2NtbHZjanRjYmx4MFhIUjlYRzVjZEZ4MEx5OGdJeklnYjNSb1pYSjNhWE5sTENCamNtVmhkR1VnZEdobElITnZZMnRsZEZ4dVhIUmNkR052Ym5OMElITmxiR1lnUFNCMGFHbHpPMXh1WEhSY2RDOHZJR3hsZENCdmNIUnpQVXBUVDA0dWNHRnljMlVvU2xOUFRpNXpkSEpwYm1kcFpua29kR2hwY3k1dmNIUnBiMjV6S1NrN0x5OGdjWFZwWTJzZ1luVjBJSFZuYkhrZ1kyOXdlVnh1WEhSY2RHeGxkQ0J2Y0hSeklEMGdkR2hwY3k1dmNIUnBiMjV6TzF4dVhIUmNkRzl3ZEhNdWFXNXBkR2xoZEc5eUlEMGdabUZzYzJVN1hHNWNkRngwYkdWMElITnZZMnRsZENBOUlHNWxkeUJUYVcxd2JHVlFaV1Z5S0c5d2RITXBPMXh1WEhSY2RHeGxkQ0JsYm5SeWVTQTlJSHRjYmx4MFhIUmNkR2xrT2lCdFpYTnpZV2RsTG5ScFpDeGNibHgwWEhSY2RIQnBaRG9nYldWemMyRm5aUzV3YVdRc1hHNWNkRngwWEhSd2NtOTBiMk52YkRvZ2JXVnpjMkZuWlM1d2NtOTBiMk52YkN4Y2JseDBYSFJjZEhOdlkydGxkRG9nYzI5amEyVjBMRnh1WEhSY2RGeDBjM1ZqWTJWemMyWjFiRG9nWm1Gc2MyVXNYRzVjZEZ4MFhIUnZiazltWm1WeU9pQmpZV3hzWW1GamEzTWdKaVlnWTJGc2JHSmhZMnR6TG05dVFXTmpaWEIwTEZ4dVhIUmNkRngwYjI1U1pXRmtlVG9nWTJGc2JHSmhZMnR6SUNZbUlHTmhiR3hpWVdOcmN5NXZibEpsWVdSNVhHNWNkRngwZlR0Y2JseHVYSFJjZEhSb2FYTXVjR1Z1WkdsdVp5NXBibk5sY25Rb1pXNTBjbmtwTzF4dVhIUmNkSE52WTJ0bGRDNXZiaWduYzJsbmJtRnNKeXdnWm5WdVkzUnBiMjRnS0c5bVptVnlLU0I3WEc1Y2RGeDBYSFJsYm5SeWVTNXZiazltWm1WeUlDWW1JR1Z1ZEhKNUxtOXVUMlptWlhJb2MyVnNaaTVOVW1WemNHOXVjMlVvWlc1MGNua3VhV1FzSUhObGJHWXVTVVFzSUc5bVptVnlMQ0JsYm5SeWVTNXdjbTkwYjJOdmJDa3BPMXh1WEhSY2RIMHBPMXh1WEhSY2RITnZZMnRsZEM1dmJpZ25ZMjl1Ym1WamRDY3NJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JseDBYSFJjZEhObGJHWXVaMlYwS0dWdWRISjVMbkJwWkNrZ0ppWWdjMjlqYTJWMExtUmxjM1J5YjNrb0tUdGNibHgwWEhSY2RITmxiR1l1Y0dWdVpHbHVaeTV5WlcxdmRtVW9aVzUwY25rcE8xeHVYSFJjZEZ4MGMyVnNaaTVzYVhacGJtY3VhVzV6WlhKMEtIdGNibHgwWEhSY2RGeDBhV1E2SUdWdWRISjVMbkJwWkN4Y2JseDBYSFJjZEZ4MGMyOWphMlYwT2lCbGJuUnllUzV6YjJOclpYUXNYRzVjZEZ4MFhIUmNkRzl1VW1WaFpIazZJR1Z1ZEhKNUxtOXVVbVZoWkhrc1hHNWNkRngwWEhSY2RHOXVUMlptWlhJNklHVnVkSEo1TG05dVQyWm1aWEpjYmx4MFhIUmNkSDBwTzF4dVhHNWNibHgwWEhSY2RHVnVkSEo1TG05dVVtVmhaSGtnSmlZZ1pXNTBjbmt1YjI1U1pXRmtlU2hsYm5SeWVTNXdhV1FwTzF4dVhIUmNkRngwYzJWc1ppNWxiV2wwS0NkeVpXRmtlU2NzSUdWdWRISjVMbkJwWkNrN1hHNWNkRngwWEhSbGJuUnllUzV3Y205MGIyTnZiQ0FtSmlCelpXeG1MbVZ0YVhRb0ozSmxZV1I1TFNjclpXNTBjbmt1Y0hKdmRHOWpiMndzSUdWdWRISjVMbkJwWkNrN1hHNWNibHgwWEhSY2RHTnNaV0Z5VkdsdFpXOTFkQ2hsYm5SeWVTNTBhVzFsYjNWMEtUdGNibHgwWEhSY2RHVnVkSEo1TG5ScGJXVnZkWFFnUFNCdWRXeHNPMXh1WEhSY2RIMHBPMXh1WEhSY2RITnZZMnRsZEM1dmJpZ25ZMnh2YzJVbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RGeDBYSFJwWmlBb2MyVnNaaTV3Wlc1a2FXNW5MbU52Ym5SaGFXNXpLR1Z1ZEhKNUxtbGtLU2tnZTF4dVhIUmNkRngwWEhRdkx5QWpRU0J3Wlc1a2FXNW5PaUJsYm5SeWVTQnBjeUJyWlhCMElIVnVkR2xzSUdGMWRHOXRZWFJwWXlCa1pYTjBjblZqZEdsdmJseHVYSFJjZEZ4MFhIUmxiblJ5ZVM1emIyTnJaWFFnUFNCdWRXeHNPMXh1WEhSY2RGeDBmU0JsYkhObElIdGNibHgwWEhSY2RGeDBMeThnSTBJZ2JHbDJhVzVuSUc5eUlHUjVhVzVuT2lCamJHVmhjaUIwYUdVZ2RHRmliR1Z6WEc1Y2RGeDBYSFJjZEdWdWRISjVMblJwYldWdmRYUWdKaVlnWTJ4bFlYSlVhVzFsYjNWMEtHVnVkSEo1TG5ScGJXVnZkWFFwTzF4dVhIUmNkRngwWEhSbGJuUnllUzUwYVcxbGIzVjBJRDBnYm5Wc2JEdGNibHgwWEhSY2RGeDBiR1YwSUd4cGRtVWdQU0J6Wld4bUxteHBkbWx1Wnk1eVpXMXZkbVZCYkd3b1pXNTBjbmt1Y0dsa0tUdGNibHgwWEhSY2RGeDBhV1lnS0d4cGRtVXBJSHRjYmx4MFhIUmNkRngwWEhSbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHeHBkbVV1YjJOak95QXJLMmtwSUh0Y2JseDBYSFJjZEZ4MFhIUmNkSE5sYkdZdVpXMXBkQ2duWkdselkyOXVibVZqZENjc0lHVnVkSEo1TG5CcFpDazdYRzVjZEZ4MFhIUmNkRngwZlZ4dVhIUmNkRngwWEhSOVhHNWNkRngwWEhSY2RITmxiR1l1WkhscGJtY3VjbVZ0YjNabEtHVnVkSEo1TG5CcFpDazdYRzVjZEZ4MFhIUjlYRzVjZEZ4MGZTazdYRzVjYmx4MFhIUjBhR2x6TG1OdmJXMXZiaWhsYm5SeWVTazdYRzVjYmx4MFhIUmxiblJ5ZVM1MGFXMWxiM1YwSUQwZ2MyVjBWR2x0Wlc5MWRDaG1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RGeDBYSFJzWlhRZ1pTQTlJSE5sYkdZdWNHVnVaR2x1Wnk1blpYUW9aVzUwY25rdWFXUXBPMXh1WEhSY2RGeDBhV1lnS0dVZ0ppWWdJV1V1YzNWalkyVnpjMloxYkNrZ2UxeHVYSFJjZEZ4MFhIUnpaV3htTG1WdGFYUW9KMlpoYVd3bkxDQW5XMFpCU1V3NlFVTkRSVkJVWFNCaGJpQmxjbkp2Y2lCdlkyTjFjbVZrSUdSMWNtbHVaeUJ5WlcxdmRtbHVaeUIwYUdVZ1pXNTBjbmtuS1R0Y2JseDBYSFJjZEgxY2JseDBYSFJjZEhObGJHWXVjR1Z1WkdsdVp5NXlaVzF2ZG1Vb1pXNTBjbmt1YVdRcElDWW1JSE52WTJ0bGRDNWtaWE4wY205NUtDazdYRzVjZEZ4MGZTd2dkR2hwY3k1VVNVMUZUMVZVS1R0Y2JseDBYSFJ5WlhSMWNtNGdaVzUwY25rN1hHNWNkSDFjYmx4dVhHNWNkQzhxS2x4dVhIUXFJR1pwYm1Gc2FYcGxJSFJvWlNCaVpXaGhkbWx2Y2lCdlppQmhiaUJwYm1sMGFXRjBhVzVuSUhOdlkydGxkRnh1WEhRcUlFQndZWEpoYlNCN2IySnFaV04wZlNCdFpYTnpZV2RsSUhSb1pTQnlaV05sYVhabFpDQnRaWE56WVdkbElIQnZjM05wWW14NUlHTnZiblJoYVc1cGJtY2dZVzRnWVc1emQyVnlJSFJ2SUhSb1pWeHVYSFFxSUhCeWIzQnZjMlZrSUc5bVptVnlYRzVjZENvZ1FISmxkSFZ5YmlCN2IySnFaV04wZlNCU1pYUjFjbTRnY0hKcGIzSWdaVzUwY25sY2JseDBLaTljYmx4MFptbHVZV3hwZW1VZ0tHMWxjM05oWjJVcElIdGNibHgwWEhRdkx5QWpNU0JwWmlCcGRDQmtiMlZ6SUc1dmRDQmxlR2x6ZEhNc0lITjBiM0E3SUc5eUlHbG1JR2wwSUdWNGFYTjBjeUJpZFhRZ1lXeHlaV0ZrZVNCelpYUjFjRnh1WEhSY2RDOHZJSEpsZEhWeWJpQnBkRnh1WEhSY2RHeGxkQ0J3Y21sdmNpQTlJSFJvYVhNdWNHVnVaR2x1Wnk1blpYUW9iV1Z6YzJGblpTNTBhV1FwTzF4dVhIUmNkR2xtSUNnaGNISnBiM0lnZkh3Z2NISnBiM0l1Y0dsa0tTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z2NISnBiM0k3WEc1Y2RGeDBmVnh1WEhSY2RDOHZJQ015SUc5MGFHVnlkMmx6WlNCelpYUWdkR2hsSUdWMlpXNTBjeUJqYjNKeVpXTjBiSGxjYmx4MFhIUndjbWx2Y2k1d2FXUWdQU0J0WlhOellXZGxMbkJwWkR0Y2JseHVYSFJjZEd4bGRDQmxiblJ5ZVNBOUlIdGNibHgwWEhSY2RHbGtPaUJ0WlhOellXZGxMbkJwWkN4Y2JseDBYSFJjZEhOdlkydGxkRG9nY0hKcGIzSXVjMjlqYTJWMExGeHVYSFJjZEZ4MGNISnZkRzlqYjJ3NklIQnlhVzl5TG5CeWIzUnZZMjlzTEZ4dVhIUmNkRngwYjI1U1pXRmtlVG9nY0hKcGIzSXViMjVTWldGa2VTeGNibHgwWEhSY2RHOXVUMlptWlhJNklIQnlhVzl5TG05dVQyWm1aWEpjYmx4MFhIUjlPMXh1WEc1Y2RGeDBZMjl1YzNRZ2MyVnNaaUE5SUhSb2FYTTdYRzVjZEZ4MGJHVjBJSE52WTJ0bGRDQTlJR1Z1ZEhKNUxuTnZZMnRsZER0Y2JseDBYSFJ6YjJOclpYUXViMjRvSjJOdmJtNWxZM1FuTENCbWRXNWpkR2x2YmlBb0tTQjdYRzVjYmx4MFhIUmNkSE5sYkdZdVoyVjBLR1Z1ZEhKNUxtbGtLU0FtSmlCemIyTnJaWFF1WkdWemRISnZlU2dwTzF4dVhIUmNkRngwYzJWc1ppNXdaVzVrYVc1bkxuSmxiVzkyWlNod2NtbHZjaWs3WEc1Y2RGeDBYSFJ6Wld4bUxteHBkbWx1Wnk1cGJuTmxjblFvWlc1MGNua3BPMXh1WEhSY2RGeDBaVzUwY25rdWIyNVNaV0ZrZVNBbUppQmxiblJ5ZVM1dmJsSmxZV1I1S0hCeWFXOXlMbkJwWkNrN1hHNWNkRngwWEhSelpXeG1MbVZ0YVhRb0ozSmxZV1I1Snl3Z2NISnBiM0l1Y0dsa0tUdGNibHgwWEhSY2RHVnVkSEo1TG5CeWIzUnZZMjlzSUNZbUlITmxiR1l1WlcxcGRDZ25jbVZoWkhrdEp5dGxiblJ5ZVM1d2NtOTBiMk52YkN3Z2NISnBiM0l1Y0dsa0tUdGNibHgwWEhSY2RHTnNaV0Z5VkdsdFpXOTFkQ2h3Y21sdmNpNTBhVzFsYjNWMEtUdGNibHh1WEhSY2RIMHBPMXh1WEhSY2RITnZZMnRsZEM1dmJpZ25ZMnh2YzJVbkxDQm1kVzVqZEdsdmJpQW9LU0I3WEc1Y2RGeDBYSFJwWmlBb2MyVnNaaTV3Wlc1a2FXNW5MbU52Ym5SaGFXNXpLRzFsYzNOaFoyVXVkR2xrS1NrZ2UxeHVYSFJjZEZ4MFhIUnpaV3htTG5CbGJtUnBibWN1WjJWMEtHMWxjM05oWjJVdWRHbGtLUzV6YjJOclpYUWdQU0J1ZFd4c08xeHVYSFJjZEZ4MGZTQmxiSE5sSUh0Y2JseDBYSFJjZEZ4MGNISnBiM0l1ZEdsdFpXOTFkQ0FtSmlCamJHVmhjbFJwYldWdmRYUW9jSEpwYjNJdWRHbHRaVzkxZENrN1hHNWNkRngwWEhSY2RIQnlhVzl5TG5ScGJXVnZkWFFnUFNCdWRXeHNPMXh1WEhSY2RGeDBYSFJzWlhRZ2JHbDJaU0E5SUhObGJHWXViR2wyYVc1bkxuSmxiVzkyWlVGc2JDaHdjbWx2Y2k1d2FXUXBPMXh1WEhSY2RGeDBYSFJwWmlBb2JHbDJaU2tnZTF4dVhIUmNkRngwWEhSY2RHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2diR2wyWlM1dlkyTTdJQ3NyYVNrZ2UxeHVYSFJjZEZ4MFhIUmNkRngwYzJWc1ppNWxiV2wwS0Nka2FYTmpiMjV1WldOMEp5d2djSEpwYjNJdWNHbGtLVHRjYmx4MFhIUmNkRngwWEhSOVhHNWNkRngwWEhSY2RIMWNibHgwWEhSY2RGeDBjMlZzWmk1a2VXbHVaeTV5WlcxdmRtVW9jSEpwYjNJdWNHbGtLVHRjYmx4MFhIUmNkSDFjYmx4MFhIUjlLVHRjYmx4dVhIUmNkSFJvYVhNdVkyOXRiVzl1S0hCeWFXOXlLVHRjYmx4dVhIUmNkSEpsZEhWeWJpQndjbWx2Y2p0Y2JseDBmVnh1WEc1Y2RDOHFLbHh1WEhRcUlDQjBhR1VnY0dWbGNpQnBaQ0JoYkhKbFlXUjVJR1Y0YVhOMGN5QnBiaUIwYUdVZ2RHRmliR1Z6WEc1Y2RDb2dJRUJ3WVhKaGJTQjdiMkpxWldOMGZTQnRaWE56WVdkbElGUm9aU0J0WlhOellXZGxYRzVjZENvZ0lFQndZWEpoYlNCN1kyRnNiR0poWTJ0OUlHTmhiR3hpWVdOcmN5QjBhR1VnWTJGc2JHSmhZMnR6WEc1Y2RDb2dJRUJ5WlhSMWNtNGdlMjlpYW1WamRIMGdZV3h5WldGNVpFVjRhWE4wWEc1Y2RDb3ZYRzVjZEdGc2NtVmhaSGxGZUdsemRITWdLRzFsYzNOaFoyVXNJR05oYkd4aVlXTnJjeWtnZTF4dVhIUmNkR052Ym5OMElITmxiR1lnUFNCMGFHbHpPMXh1WEhSY2RHeGxkQ0JoYkhKbFlXUjVSWGhwYzNSeklEMGdkR2hwY3k1blpYUW9iV1Z6YzJGblpTNXdhV1FwTzF4dVhIUmNkR2xtSUNBb0lXRnNjbVZoWkhsRmVHbHpkSE1wSUh0Y2JseDBYSFJjZEM4dklDTkJJR1J2WlhNZ2JtOTBJR0ZzY21WaFpIa2daWGhwYzNSeklHSjFkQ0J3Wlc1a2FXNW5YRzVjZEZ4MFhIUnNaWFFnWlc1MGNua2dQU0IwYUdsekxuQmxibVJwYm1jdVoyVjBLRzFsYzNOaFoyVXVkR2xrS1R0Y2JseDBYSFJjZEdWdWRISjVJQ1ltSUdWdWRISjVMbk52WTJ0bGRDQW1KaUJ0WlhOellXZGxMbTltWm1WeUlDWW1JR1Z1ZEhKNUxuTnZZMnRsZEM1emFXZHVZV3dvYldWemMyRm5aUzV2Wm1abGNpazdYRzVjZEZ4MGZTQmxiSE5sSUh0Y2JseDBYSFJjZEM4dklDTkNJR0ZzY21WaFpIa2daWGhwYzNSeklHRnVaQ0J3Wlc1a2FXNW5YRzVjZEZ4MFhIUnNaWFFnZEc5U1pXMXZkbVVnUFNCMGFHbHpMbkJsYm1ScGJtY3VaMlYwS0cxbGMzTmhaMlV1ZEdsa0tUdGNibHgwWEhSY2RHbG1JQ2gwYjFKbGJXOTJaU0FtSmlCMGIxSmxiVzkyWlM1emIyTnJaWFFwSUhzZ0x5OGdaWGhwYzNSeklHSjFkQ0J6YjJOclpYUWdjM1JwYkd3Z2R6aHBibHh1WEhSY2RGeDBYSFJwWmlBb0lXRnNjbVZoWkhsRmVHbHpkSE11ZEdsdFpXOTFkQ2tnZTF4dVhIUmNkRngwWEhSY2RDOHZJQ014SUdGc2NtVmhaSGtnYVc0Z2JHbDJhVzVuSUhOdlkydGxkQ3dnWVdSa0lHRnVJRzlqWTNWeWNtVnVZMlZjYmx4MFhIUmNkRngwWEhSMGFHbHpMbXhwZG1sdVp5NXBibk5sY25Rb2JXVnpjMkZuWlM1d2FXUXBPMXh1WEhSY2RGeDBYSFJjZEhSdlVtVnRiM1psTG5OMVkyTmxjM05tZFd3Z1BTQjBjblZsTzF4dVhIUmNkRngwWEhSOUlHVnNjMlVnZTF4dVhIUmNkRngwWEhSY2RDOHZJQ015SUhkaGN5QmtlV2x1Wnl3Z2NtVnpkWEpsWTNRZ2RHaGxJSE52WTJ0bGRGeHVYSFJjZEZ4MFhIUmNkSFJvYVhNdVpIbHBibWN1Y21WdGIzWmxLR0ZzY21WaFpIbEZlR2x6ZEhNcE8xeHVYSFJjZEZ4MFhIUmNkR05zWldGeVZHbHRaVzkxZENoaGJISmxZV1I1UlhocGMzUnpMblJwYldWdmRYUXBPMXh1WEhSY2RGeDBYSFJjZEdGc2NtVmhaSGxGZUdsemRITXVkR2x0Wlc5MWRDQTlJRzUxYkd3N1hHNWNkRngwWEhSY2RGeDBkR2hwY3k1c2FYWnBibWN1YVc1elpYSjBLR0ZzY21WaFpIbEZlR2x6ZEhNcE8xeHVYSFJjZEZ4MFhIUmNkSFJ2VW1WdGIzWmxMbk4xWTJObGMzTm1kV3dnUFNCMGNuVmxPMXh1WEhSY2RGeDBYSFI5WEc1Y2RGeDBYSFJjZEhSdlVtVnRiM1psTG5OdlkydGxkQzVrWlhOMGNtOTVLQ2s3WEc1Y2RGeDBYSFJjZEM4dklDTkRJSE4wWVc1a1lYSmtJRzl1SUdGalkyVndkQ0JtZFc1amRHbHZiaUJwWmlCcGRDQmxlR2x6ZEhNZ2FXNGdZWEpuWEc1Y2RGeDBYSFJjZEcxbGMzTmhaMlV1YjJabVpYSWdKaVlnWTJGc2JHSmhZMnR6SUNZbUlHTmhiR3hpWVdOcmN5NXZia0ZqWTJWd2RDQW1KaUJqWVd4c1ltRmphM011YjI1QlkyTmxjSFFvYzJWc1ppNU5VbVZ6Y0c5dWMyVW9iV1Z6YzJGblpTNTBhV1FzSUhSb2FYTXVTVVFzWEhSdWRXeHNMRngwYldWemMyRm5aUzV3Y205MGIyTnZiQ2twTzF4dVhHNWNkRngwWEhSY2RDaGpZV3hzWW1GamEzTWdKaVpjZEdOaGJHeGlZV05yY3k1dmJsSmxZV1I1SUNZbUlHTmhiR3hpWVdOcmN5NXZibEpsWVdSNUtHRnNjbVZoWkhsRmVHbHpkSE11YVdRcEtTQjhmRngwS0hSdlVtVnRiM1psSUNZbUlGeDBkRzlTWlcxdmRtVXViMjVTWldGa2VTQW1KbHgwZEc5U1pXMXZkbVV1YjI1U1pXRmtlU2hoYkhKbFlXUjVSWGhwYzNSekxtbGtLU2s3WEc1Y2RGeDBYSFJjZEhSb2FYTXVaVzFwZENnbmNtVmhaSGtuTENCaGJISmxZV1I1UlhocGMzUnpMbWxrS1R0Y2JseDBYSFJjZEZ4MGJXVnpjMkZuWlM1d2NtOTBiMk52YkNBbUppQjBhR2x6TG1WdGFYUW9KM0psWVdSNUxTY3JiV1Z6YzJGblpTNXdjbTkwYjJOdmJDd2dZV3h5WldGa2VVVjRhWE4wY3k1cFpDazdYRzVjZEZ4MFhIUjlYRzVjZEZ4MGZWeHVYSFJjZEhKbGRIVnliaUJoYkhKbFlXUjVSWGhwYzNSek8xeHVYSFI5WEc1Y2JuMWNibHh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUU1bGFXZG9ZbTl5YUc5dlpEdGNiaUpkZlE9PSJdfQ==
