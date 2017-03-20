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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5laWdoYm9yaG9vZC5qcyJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJyZXF1aXJlIiwiU29ja2V0IiwidXVpZCIsIlNvcnRlZEFycmF5IiwiTXVsdGlTZXQiLCJTaW1wbGVQZWVyIiwiTmVpZ2hib3Job29kIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwiUFJPVE9DT0wiLCJjb25maWciLCJ3ZWJydGMiLCJ0cmlja2xlIiwiVElNRU9VVCIsInRpbWVvdXQiLCJlbmNvZGluZyIsImRlY29kaW5nIiwiSUQiLCJ3cnRjIiwidmVyYm9zZSIsIkNvbXBhcmF0b3IiLCJhIiwiYiIsImZpcnN0IiwiaWQiLCJzZWNvbmQiLCJwZW5kaW5nIiwibGl2aW5nIiwiZHlpbmciLCJNUmVzcG9uc2UiLCJ0aWQiLCJwaWQiLCJvZmZlciIsInByb3RvY29sIiwidHlwZSIsIk1SZXF1ZXN0IiwibG9nIiwiYXJncyIsImNvbnNvbGUiLCJkaXNjb25uZWN0IiwicmVzdWx0IiwiYXJyIiwiZm9yRWFjaCIsImUiLCJzb2NrZXQiLCJkZXN0cm95IiwibXMiLCJsZW5ndGgiLCJlbnRyeSIsInJlbW92ZSIsImVtaXQiLCJvY2MiLCJzZXRUaW1lb3V0IiwiaW5zZXJ0IiwiZW5jb2RlIiwibWVzc2FnZSIsImRlY29kZSIsInNlbmQiLCJtc2ciLCJTdHJpbmciLCJnZXQiLCJjb25uZWN0ZWQiLCJfY2hhbm5lbCIsInJlYWR5U3RhdGUiLCJFcnJvciIsImNvbm5lY3Rpb24iLCJjYWxsYmFja3MiLCJpbml0aWF0ZSIsImFjY2VwdCIsImFscmVhZHlFeGlzdHMiLCJmaW5hbGl6ZSIsImNvbW1vbiIsInNlbGYiLCJvbiIsInN0cmVhbSIsImVyciIsIm9wdHMiLCJpbml0aWF0b3IiLCJzdWNjZXNzZnVsIiwib25PZmZlciIsIm9uSW5pdGlhdGUiLCJvblJlYWR5IiwicHJpb3IiLCJvbkFjY2VwdCIsImNsZWFyVGltZW91dCIsImNvbnRhaW5zIiwibGl2ZSIsInJlbW92ZUFsbCIsImkiLCJzaWdu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O1xuXG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcbmNvbnN0IFNvY2tldCA9IHJlcXVpcmUoJ3NpbXBsZS1wZWVyJyk7XG5cbmNvbnN0IHV1aWQgPSByZXF1aXJlKCd1dWlkL3Y0Jyk7XG5jb25zdCBTb3J0ZWRBcnJheSA9IHJlcXVpcmUoJy4vZXh0ZW5kZWQtc29ydGVkLWFycmF5LmpzJyk7XG5jb25zdCBNdWx0aVNldCA9IHJlcXVpcmUoJy4vbXVsdGlzZXQuanMnKTtcbmNvbnN0IFNpbXBsZVBlZXIgPSByZXF1aXJlKCdzaW1wbGUtcGVlcicpO1xuXG4vKipcbiAqIE5laWdiaG9yaG9vZCB0YWJsZSBwcm92aWRpbmcgZWFzeSBlc3RhYmxpc2htZW50IGFuZCBtYW5hZ2VtZW50IG9mXG4gKiBjb25uZWN0aW9uc1xuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgdGhlIG9wdGlvbnMgYXZhaWxhYmxlIHRvIHRoZSBjb25uZWN0aW9ucywgZS5nLiB0aW1lb3V0IGJlZm9yZVxuICogY29ubmVjdGlvbiBhcmUgdHJ1ZWx5IHJlbW92ZWQsIFdlYlJUQyBvcHRpb25zXG4gKi9cbmNsYXNzIE5laWdoYm9yaG9vZCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG5cdGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG5cdFx0c3VwZXIoKTtcblxuICAgIHRoaXMuUFJPVE9DT0wgPSAnbmVpZ2hib3Job29kLXdydGMnO1xuICAgIC8vICMxIHNhdmUgb3B0aW9uc1xuICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgIHRoaXMub3B0aW9ucy5jb25maWcgPSAob3B0aW9ucyAmJiBvcHRpb25zLndlYnJ0YykgfHwge307XG4gICAgdGhpcy5vcHRpb25zLnRyaWNrbGUgPSAob3B0aW9ucyAmJiBvcHRpb25zLndlYnJ0YyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMud2VicnRjLnRyaWNrbGUpIHx8IGZhbHNlO1xuICAgIHRoaXMuVElNRU9VVCA9IChvcHRpb25zICYmIG9wdGlvbnMudGltZW91dCkgfHwgKDIgKiA2MCAqIDEwMDApOyAvLyAyIG1pbnV0ZXNcblxuXHRcdHRoaXMuZW5jb2RpbmcgPSBvcHRpb25zLmVuY29kaW5nO1xuXHRcdHRoaXMuZGVjb2RpbmcgPSBvcHRpb25zLmRlY29kaW5nO1xuXHRcdHRoaXMuSUQgPSB1dWlkKCk7XG5cdFx0aWYodGhpcy5vcHRpb25zLmNvbmZpZy53cnRjKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMud3J0YyA9IHRoaXMub3B0aW9ucy5jb25maWcud3J0Yztcblx0XHR9XG5cblx0XHRpZihvcHRpb25zICYmIG9wdGlvbnMudmVyYm9zZSkge1xuXHRcdFx0dGhpcy52ZXJib3NlID0gb3B0aW9ucy52ZXJib3NlO1xuXHRcdH1cblxuICAgIC8qIVxuICAgICAqIFxcYnJpZWYgY29tcGFyZSB0aGUgaWQgb2YgZW50cmllcyBpbiB0YWJsZXNcbiAgICAgKi9cbiAgICB0aGlzLkNvbXBhcmF0b3IgPSAoYSwgYikgPT4ge1xuICAgICAgICB2YXIgZmlyc3QgPSBhLmlkIHx8IGE7XG4gICAgICAgIHZhciBzZWNvbmQgPSBiLmlkIHx8IGI7XG4gICAgICAgIGlmIChmaXJzdCA8IHNlY29uZCl7IHJldHVybiAtMTsgfTtcbiAgICAgICAgaWYgKGZpcnN0ID4gc2Vjb25kKXsgcmV0dXJuICAxOyB9O1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9O1xuICAgIC8vICMyIGluaXRpYWxpemUgdGFibGVzXG4gICAgdGhpcy5wZW5kaW5nID0gbmV3IFNvcnRlZEFycmF5KHRoaXMuQ29tcGFyYXRvcik7IC8vIG5vdCBmaW5hbGl6ZWQgeWV0XG4gICAgdGhpcy5saXZpbmcgPSBuZXcgTXVsdGlTZXQodGhpcy5Db21wYXJhdG9yKTsgLy8gbGl2ZSBhbmQgdXNhYmxlXG4gICAgdGhpcy5keWluZyA9IG5ldyBTb3J0ZWRBcnJheSh0aGlzLkNvbXBhcmF0b3IpOyAvLyBiZWluZyByZW1vdmVcblx0fVxuXG5cdE1SZXNwb25zZSAodGlkLCBwaWQsIG9mZmVyLCBwcm90b2NvbCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHR0aWQ6IHRpZCxcblx0XHRcdHBpZDogcGlkLFxuXHRcdFx0cHJvdG9jb2w6IHByb3RvY29sLFxuXHRcdFx0dHlwZTogJ01SZXNwb25zZScsXG5cdFx0XHRvZmZlcjogb2ZmZXJcblx0XHR9O1xuXHR9XG5cdE1SZXF1ZXN0ICh0aWQsIHBpZCwgb2ZmZXIsIHByb3RvY29sKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRpZDogdGlkLFxuXHRcdFx0cGlkOiBwaWQsXG5cdFx0XHRwcm90b2NvbDogcHJvdG9jb2wsXG5cdFx0XHR0eXBlOiAnTVJlcXVlc3QnLFxuXHRcdFx0b2ZmZXI6IG9mZmVyXG5cdFx0fTtcblx0fVxuXG5cdGxvZyAoLi4uYXJncykge1xuXHRcdGlmKHRoaXMudmVyYm9zZSkge1xuXHRcdFx0Y29uc29sZS5sb2coJ1tORUlHSEJPUkhPT0RdICcsIGFyZ3MpO1xuXHRcdH1cblx0fVxuXG4gIC8qKlxuICAgKiBEaXNjb25uZWN0IG9uZSBvZiB0aGUgYXJjIHdpdGggdGhlIGlkZW50aWZpZXIgaW4gYXJndW1lbnQuIElmXG4gICAqIGl0IHdhcyB0aGUgbGFzdCBhcmMgd2l0aCBzdWNoIGlkLCB0aGUgc29ja2V0IGlzIHJlbG9jYXRlZCB0byB0aGUgZHlpbmdcbiAgICogdGFibGUuIFRoZSBzb2NrZXQgd2lsbCBiZSBkZXN0cm95IGFmdGVyIGEgYml0LiBJZiB0aGVyZSBpcyBubyBhcmd1bWVudCxcbiAgICogZGlzY29ubmVjdCB0aGUgd2hvbGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfHVuZGVmaW5lZH0gaWQgSWQgcHJvdmlkZWQgdG8ganVzdCBkaXNjb25uZWN0IHRoZSBhcmMgb3IgaWYgdW5kZWZpbmVkIGRpc2Nvbm5lY3QgYWxsIGFyY3NcbiAgICovXG4gIGRpc2Nvbm5lY3QgKGlkKSB7XG4gICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgaWYgKCFpZCkge1xuICAgICAgLy8gIzEgZGlzY29ubmVjdCBldmVyeXRoaW5nXG4gICAgICB0aGlzLnBlbmRpbmcuYXJyLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICBlLnNvY2tldCAmJiBlLnNvY2tldC5kZXN0cm95KCk7XG4gICAgICB9KTtcbiAgICAgIHdoaWxlICh0aGlzLmxpdmluZy5tcy5hcnIubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IGUgPSB0aGlzLmxpdmluZy5tcy5hcnJbMF07XG4gICAgICAgICAgZS5zb2NrZXQgJiYgZS5zb2NrZXQuZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgd2hpbGUgKHRoaXMuZHlpbmcuYXJyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBlID0gdGhpcy5keWluZy5hcnJbMF07XG4gICAgICAgICAgZS5zb2NrZXQgJiYgZS5zb2NrZXQuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyAjMiByZW1vdmUgb25lIGFyY1xuICAgICAgbGV0IGVudHJ5ID0gdGhpcy5saXZpbmcucmVtb3ZlKGlkKTtcbiAgICAgIGVudHJ5ICYmIHRoaXMuZW1pdCgnZGlzY29ubmVjdCcsIGVudHJ5LmlkKTtcbiAgICAgIGlmIChlbnRyeSAmJiBlbnRyeS5vY2MgPD0gMCkge1xuICAgICAgICAgIGVudHJ5LnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgZW50cnkuc29ja2V0LmRlc3Ryb3koKTtcbiAgICAgICAgICB9LCB0aGlzLlRJTUVPVVQpO1xuICAgICAgICAgIHRoaXMuZHlpbmcuaW5zZXJ0KGVudHJ5KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGVudHJ5ICYmIHRydWUgfHwgZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuXHQvKipcblx0ICogTmV3IG1ldGhvZCB0byBlbmNvZGUgdGhlIG1lc3NhZ2UgYXMgd2Ugd2FudFxuXHQgKiBAcGFyYW0gIHtvYmplY3R9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gZW5jb2RlXG5cdCAqIEByZXR1cm4ge3N0cmluZ3xiaW5hcnl9IEVuY29kZWQgbWVzc2FnZVxuXHQgKi9cblx0ZW5jb2RlIChtZXNzYWdlKSB7XG5cdFx0cmV0dXJuIHRoaXMuZW5jb2RpbmcobWVzc2FnZSk7XG5cdH1cblxuXHQvKipcblx0ICogTmV3IG1ldGhvZCB0byBlbmNvZGUgdGhlIG1lc3NhZ2UgYXMgd2Ugd2FudFxuXHQgKiBAcGFyYW0gIHtvYmplY3R9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gZW5jb2RlXG5cdCAqIEByZXR1cm4ge3N0cmluZ3xiaW5hcnl9IEVuY29kZWQgbWVzc2FnZVxuXHQgKi9cblx0ZGVjb2RlIChtZXNzYWdlKSB7XG5cdFx0cmV0dXJuIHRoaXMuZGVjb2RpbmcobWVzc2FnZSk7XG5cdH1cblxuXHQvKipcblx0ICogU2VuZCBhIG1lc3NhZ2UgdG8gdGhlIHNvY2tldCBpbiBhcmd1bWVudFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gaWQgdGhlIGlkZW50aWZpZXIgb2YgdGhlIHNvY2tldFxuXHQgKiBAcGFyYW0ge29iamVjdH0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0byBzZW5kXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIG1lc3NhZ2UgaXMgc2VudCwgZmFsc2Ugb3RoZXJ3aXNlXG5cdCAqL1xuXHRzZW5kIChpZCwgbWVzc2FnZSkge1xuXHRcdC8vICMxIGNvbnZlcnQgbWVzc2FnZSB0byBzdHJpbmcgKFRPRE8pIGNoZWNrIGlmIHRoZXJlIGlzIGEgYmV0dGVyIHdheVxuXHRcdGxldCBtc2cgPSAoKG1lc3NhZ2UgaW5zdGFuY2VvZiBTdHJpbmcpICYmIG1lc3NhZ2UpIHx8IHRoaXMuZW5jb2RlKG1lc3NhZ2UpO1xuXHRcdC8vICMyIGdldCB0aGUgc29ja2V0IHRvIHVzZVxuXHRcdGxldCBlbnRyeSA9IHRoaXMuZ2V0KGlkKTtcblx0XHRsZXQgc29ja2V0ID0gZW50cnkgJiYgZW50cnkuc29ja2V0O1xuXHRcdC8vICMzIHNlbmRcblx0XHRsZXQgcmVzdWx0ID0gbXNnICYmIHNvY2tldCAmJiBzb2NrZXQuY29ubmVjdGVkICYmIHNvY2tldC5fY2hhbm5lbCAmJiAoc29ja2V0Ll9jaGFubmVsLnJlYWR5U3RhdGUgPT09ICdvcGVuJyk7XG5cdFx0Ly8gcmVzdWx0ICYmIHNvY2tldC5zZW5kKG1zZyk7XG5cdFx0dHJ5IHtcblx0XHRcdHJlc3VsdCAmJiBzb2NrZXQuc2VuZChtc2cpO1xuXHRcdFx0Ly8gRE9OVCBTRVQgUkVTVUxUIFRPIFRSVUUgIVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdHRoaXMubG9nKCdbTkVJR0hCT1JIT09EOlNFTkQ6RVJST1JdICcsIG5ldyBFcnJvcihlKSk7XG5cdFx0XHRyZXN1bHQgPSBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8qKlxuXHQqIGNyZWF0ZXMgYSBuZXcgaW5jb21taW5nIG9yIG91dGdvaW5nIGNvbm5lY3Rpb24gZGVwZW5kaW5nIG9uIGFyZ3VtZW50c1xuXHQqIEBwYXJhbSB7Y2FsbGJhY2t9IGNhbGxiYWNrcyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gd2hlbiB0aGUgc3R1bi9pY2Ugc2VydmVyIHJldHVybnMgdGhlXG5cdCogb2ZmZXJcblx0KiBAcGFyYW0ge29iamVjdH0gbWVzc2FnZSBlbXB0eSBpZiBpdCBtdXN0IGluaXRpYXRlIGEgY29ubmVjdGlvbiwgb3IgdGhlIG1lc3NhZ2UgcmVjZWl2ZWRcblx0KiBpZiBpdCBtdXN0IGFuc3dlciBvciBmaW5hbGl6ZSBvbmVcblx0KiBAcGFyYW0ge3N0cmluZ30gcHJvdG9jb2wgdGhlIGNvbm5lY3Rpb24gaXMgZXN0YWJsaXNoZWQgZm9yIGEgc3BlY2lmaWMgcHJvdG9jb2xcblx0KiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBpZCBvZiB0aGUgc29ja2V0XG5cdCovXG5cdGNvbm5lY3Rpb24gKGNhbGxiYWNrcywgbWVzc2FnZSwgcHJvdG9jb2wpIHtcblxuXHRcdGxldCBtc2cgPSAoY2FsbGJhY2tzICYmIGNhbGxiYWNrcy50eXBlICYmIGNhbGxiYWNrcykgfHwgbWVzc2FnZTtcblx0XHRsZXQgcmVzdWx0O1xuXG5cdFx0aWYgKCFtc2cpIHtcblx0XHRcdHJlc3VsdCA9IHRoaXMuaW5pdGlhdGUoY2FsbGJhY2tzLCBwcm90b2NvbCk7XG5cdFx0fSBlbHNlIGlmIChtc2cudHlwZT09PSdNUmVxdWVzdCcpIHtcblxuXHRcdFx0aWYobWVzc2FnZSAmJiBtZXNzYWdlLnBpZCAmJiB0aGlzLklEICE9PSBtZXNzYWdlLnBpZCkge1xuXHRcdFx0XHRyZXN1bHQgPSB0aGlzLmFjY2VwdChtc2csIGNhbGxiYWNrcyk7XG5cdFx0XHRcdHJlc3VsdCA9IHRoaXMuYWxyZWFkeUV4aXN0cyhtc2csIGNhbGxiYWNrcykgfHwgcmVzdWx0O1xuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIGlmIChtc2cudHlwZT09PSdNUmVzcG9uc2UnKSB7XG5cdFx0XHRyZXN1bHQgPSB0aGlzLmZpbmFsaXplKG1zZyk7XG5cdFx0XHRyZXN1bHQgPSB0aGlzLmFscmVhZHlFeGlzdHMobXNnKSB8fCByZXN1bHQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdCAmJiByZXN1bHQuaWQ7XG5cdH1cblxuICAvKipcbiAgICogR2V0IHRoZSBlbnRyeSBjb3JyZXNwb25kaW5nIHRvIHRoZSBpZCBpbiBhcmd1bWVudC4gVGhlIGVudHJ5IGNvbnRhaW5zXG4gICAqIHRoZSBzb2NrZXQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCB0aGUgaWRlbnRpZmllciBvZiB0aGUgc29ja2V0IHRvIHJldHJpZXZlXG4gICAqIEByZXR1cm4ge29iamVjdH0gYW4gZW50cnkgZnJvbSB0YWJsZXMuIEl0IHByaW9yaXplcyBlbnRyaWVzIGluIGxpdmluZywgdGhlbiBkeWluZyxcbiAgICogdGhlbiBwZW5kaW5nLlxuICAgKi9cbiAgZ2V0KGlkKXtcbiAgICAgIHJldHVybiB0aGlzLmxpdmluZy5nZXQoaWQpIHx8IHRoaXMuZHlpbmcuZ2V0KGlkKSB8fCB0aGlzLnBlbmRpbmcuZ2V0KGlkKTtcbiAgfVxuXG5cdC8qKlxuXHQgKiBDb21tb24gYmVoYXZpb3IgdG8gaW5pdGlhdGluZyBhbmQgYWNjZXB0aW5nIHNvY2tldHNcblx0ICogQHBhcmFtIHtvYmplY3R9IGVudHJ5IHRoZSBlbnRyeSBpbiB0aGUgbmVpZ2hib3Job29kIHRhYmxlXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRjb21tb24gKGVudHJ5KSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXMsIHNvY2tldCA9IGVudHJ5LnNvY2tldDtcblxuXHRcdHNvY2tldC5vbignZGF0YScsIChtZXNzYWdlKSA9PiB7XG5cdFx0XHRtZXNzYWdlID0gc2VsZi5kZWNvZGUobWVzc2FnZSk7XG5cdFx0XHRzZWxmLmVtaXQoJ3JlY2VpdmUnLCBlbnRyeS5waWQsIG1lc3NhZ2UpO1xuXHRcdH0pO1xuXHRcdHNvY2tldC5vbignc3RyZWFtJywgKHN0cmVhbSkgPT4ge1xuXHRcdFx0c2VsZi5lbWl0KCdzdHJlYW0nLCBlbnRyeS5waWQsIHN0cmVhbSk7XG5cdFx0fSk7XG5cblx0XHRzb2NrZXQub24oJ2Vycm9yJywgZXJyID0+IHtcblx0XHRcdHNlbGYuZW1pdCgnZXJyb3InLCBuZXcgRXJyb3IoZXJyKSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogaW5pdGlhdGVzIGEgY29ubmVjdGlvbiB3aXRoIGFub3RoZXIgcGVlciAtLSB0aGUgaWQgb2Ygd2hpY2ggaXMgdW5rbm93blxuXHQgKiBAcGFyYW0ge2NhbGxiYWNrfSBjYWxsYmFja3MgdGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBzaWduYWxpbmcgaW5mbyBhcmUgcmVjZWl2ZWQgYW5kXG5cdCAqIHdoZW4gdGhlIGNvbm5lY3Rpb24gaXMgcmVhZHkgdG8gYmUgdXNlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcHJvdG9jb2wgVGhlIHByb3RvY29sXG5cdCAqIEByZXR1cm4ge29iamVjdH0gZW50cnlcblx0ICovXG5cdGluaXRpYXRlIChjYWxsYmFja3MsIHByb3RvY29sKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0bGV0IG9wdHMgPSBzZWxmLm9wdGlvbnM7XG5cdFx0b3B0cy5pbml0aWF0b3IgPSB0cnVlO1xuXHRcdGxldCBzb2NrZXQgPSBuZXcgU2ltcGxlUGVlcihvcHRzKTtcblx0XHRsZXQgZW50cnkgPSB7XG5cdFx0XHRpZDogdXVpZCgpLFxuXHRcdFx0c29ja2V0OiBzb2NrZXQsXG5cdFx0XHRwcm90b2NvbDogcHJvdG9jb2wsXG5cdFx0XHRzdWNjZXNzZnVsOiBmYWxzZSwgLy8gbm90IHlldFxuXHRcdFx0b25PZmZlcjogY2FsbGJhY2tzICYmIGNhbGxiYWNrcy5vbkluaXRpYXRlLFxuXHRcdFx0b25SZWFkeTogY2FsbGJhY2tzICYmIGNhbGxiYWNrcy5vblJlYWR5XG5cdFx0fTtcblxuXHRcdHRoaXMucGVuZGluZy5pbnNlcnQoZW50cnkpO1xuXHRcdHNvY2tldC5vbignc2lnbmFsJywgKG9mZmVyKSA9PiB7XG5cdFx0XHRlbnRyeS5vbk9mZmVyICYmIGVudHJ5Lm9uT2ZmZXIoc2VsZi5NUmVxdWVzdChlbnRyeS5pZCwgc2VsZi5JRCwgb2ZmZXIsIHByb3RvY29sKSk7XG5cdFx0fSk7XG5cblx0XHRlbnRyeS50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRsZXQgZSA9IHNlbGYucGVuZGluZy5nZXQoZW50cnkuaWQpO1xuXHRcdFx0aWYgKGUgJiYgIWUuc3VjY2Vzc2Z1bCkge1xuXHRcdFx0XHRzZWxmLmVtaXQoJ2ZhaWwnLCAnW0ZBSUw6SU5JVElBVEVdIGFuIGVycm9yIG9jY3VyZWQgZHVyaW5nIHJlbW92aW5nIHRoZSBlbnRyeScpO1xuXHRcdFx0fVxuXHRcdFx0c2VsZi5wZW5kaW5nLnJlbW92ZShlbnRyeSkgJiYgc29ja2V0LmRlc3Ryb3koKTtcblx0XHR9LCB0aGlzLlRJTUVPVVQpO1xuXHRcdHJldHVybiBlbnRyeTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIGFjY2VwdCB0aGUgb2ZmZXIgb2YgYW5vdGhlciBwZWVyXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBtZXNzYWdlIHRoZSByZWNlaXZlZCBtZXNzYWdlIGNvbnRhaW5pbmcgaWQgYW5kIG9mZmVyXG5cdCAqIEBwYXJhbSB7Y2FsbGJhY2t9IGNhbGxiYWNrcyB0aGUgZnVuY3Rpb24gY2FsbCBhZnRlciByZWNlaXZpbmcgdGhlIG9mZmVyIGFuZFxuXHQgKiB3aGVuIHRoZSBjb25uZWN0aW9uIGlzIHJlYWR5XG5cdCAqIEByZXR1cm4ge29iamVjdH0gRW50cnlcblx0ICovXG5cdGFjY2VwdCAobWVzc2FnZSwgY2FsbGJhY2tzKSB7XG5cdFx0Ly8gIzEgaWYgYWxyZWFkeSBleGlzdHMsIHVzZSBpdFxuXG5cblx0XHRsZXQgcHJpb3IgPSB0aGlzLnBlbmRpbmcuZ2V0KG1lc3NhZ2UudGlkKTtcblx0XHRpZiAocHJpb3IpIHtcblx0XHRcdHJldHVybiBwcmlvcjtcblx0XHR9XG5cdFx0Ly8gIzIgb3RoZXJ3aXNlLCBjcmVhdGUgdGhlIHNvY2tldFxuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdC8vIGxldCBvcHRzPUpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5vcHRpb25zKSk7Ly8gcXVpY2sgYnV0IHVnbHkgY29weVxuXHRcdGxldCBvcHRzID0gdGhpcy5vcHRpb25zO1xuXHRcdG9wdHMuaW5pdGlhdG9yID0gZmFsc2U7XG5cdFx0bGV0IHNvY2tldCA9IG5ldyBTaW1wbGVQZWVyKG9wdHMpO1xuXHRcdGxldCBlbnRyeSA9IHtcblx0XHRcdGlkOiBtZXNzYWdlLnRpZCxcblx0XHRcdHBpZDogbWVzc2FnZS5waWQsXG5cdFx0XHRwcm90b2NvbDogbWVzc2FnZS5wcm90b2NvbCxcblx0XHRcdHNvY2tldDogc29ja2V0LFxuXHRcdFx0c3VjY2Vzc2Z1bDogZmFsc2UsXG5cdFx0XHRvbk9mZmVyOiBjYWxsYmFja3MgJiYgY2FsbGJhY2tzLm9uQWNjZXB0LFxuXHRcdFx0b25SZWFkeTogY2FsbGJhY2tzICYmIGNhbGxiYWNrcy5vblJlYWR5XG5cdFx0fTtcblxuXHRcdHRoaXMucGVuZGluZy5pbnNlcnQoZW50cnkpO1xuXHRcdHNvY2tldC5vbignc2lnbmFsJywgZnVuY3Rpb24gKG9mZmVyKSB7XG5cdFx0XHRlbnRyeS5vbk9mZmVyICYmIGVudHJ5Lm9uT2ZmZXIoc2VsZi5NUmVzcG9uc2UoZW50cnkuaWQsIHNlbGYuSUQsIG9mZmVyLCBlbnRyeS5wcm90b2NvbCkpO1xuXHRcdH0pO1xuXHRcdHNvY2tldC5vbignY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHNlbGYuZ2V0KGVudHJ5LnBpZCkgJiYgc29ja2V0LmRlc3Ryb3koKTtcblx0XHRcdHNlbGYucGVuZGluZy5yZW1vdmUoZW50cnkpO1xuXHRcdFx0c2VsZi5saXZpbmcuaW5zZXJ0KHtcblx0XHRcdFx0aWQ6IGVudHJ5LnBpZCxcblx0XHRcdFx0c29ja2V0OiBlbnRyeS5zb2NrZXQsXG5cdFx0XHRcdG9uUmVhZHk6IGVudHJ5Lm9uUmVhZHksXG5cdFx0XHRcdG9uT2ZmZXI6IGVudHJ5Lm9uT2ZmZXJcblx0XHRcdH0pO1xuXG5cblx0XHRcdGVudHJ5Lm9uUmVhZHkgJiYgZW50cnkub25SZWFkeShlbnRyeS5waWQpO1xuXHRcdFx0c2VsZi5lbWl0KCdyZWFkeScsIGVudHJ5LnBpZCk7XG5cdFx0XHRlbnRyeS5wcm90b2NvbCAmJiBzZWxmLmVtaXQoJ3JlYWR5LScrZW50cnkucHJvdG9jb2wsIGVudHJ5LnBpZCk7XG5cblx0XHRcdGNsZWFyVGltZW91dChlbnRyeS50aW1lb3V0KTtcblx0XHRcdGVudHJ5LnRpbWVvdXQgPSBudWxsO1xuXHRcdH0pO1xuXHRcdHNvY2tldC5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoc2VsZi5wZW5kaW5nLmNvbnRhaW5zKGVudHJ5LmlkKSkge1xuXHRcdFx0XHQvLyAjQSBwZW5kaW5nOiBlbnRyeSBpcyBrZXB0IHVudGlsIGF1dG9tYXRpYyBkZXN0cnVjdGlvblxuXHRcdFx0XHRlbnRyeS5zb2NrZXQgPSBudWxsO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gI0IgbGl2aW5nIG9yIGR5aW5nOiBjbGVhciB0aGUgdGFibGVzXG5cdFx0XHRcdGVudHJ5LnRpbWVvdXQgJiYgY2xlYXJUaW1lb3V0KGVudHJ5LnRpbWVvdXQpO1xuXHRcdFx0XHRlbnRyeS50aW1lb3V0ID0gbnVsbDtcblx0XHRcdFx0bGV0IGxpdmUgPSBzZWxmLmxpdmluZy5yZW1vdmVBbGwoZW50cnkucGlkKTtcblx0XHRcdFx0aWYgKGxpdmUpIHtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpdmUub2NjOyArK2kpIHtcblx0XHRcdFx0XHRcdHNlbGYuZW1pdCgnZGlzY29ubmVjdCcsIGVudHJ5LnBpZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGYuZHlpbmcucmVtb3ZlKGVudHJ5LnBpZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHR0aGlzLmNvbW1vbihlbnRyeSk7XG5cblx0XHRlbnRyeS50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRsZXQgZSA9IHNlbGYucGVuZGluZy5nZXQoZW50cnkuaWQpO1xuXHRcdFx0aWYgKGUgJiYgIWUuc3VjY2Vzc2Z1bCkge1xuXHRcdFx0XHRzZWxmLmVtaXQoJ2ZhaWwnLCAnW0ZBSUw6QUNDRVBUXSBhbiBlcnJvciBvY2N1cmVkIGR1cmluZyByZW1vdmluZyB0aGUgZW50cnknKTtcblx0XHRcdH1cblx0XHRcdHNlbGYucGVuZGluZy5yZW1vdmUoZW50cnkuaWQpICYmIHNvY2tldC5kZXN0cm95KCk7XG5cdFx0fSwgdGhpcy5USU1FT1VUKTtcblx0XHRyZXR1cm4gZW50cnk7XG5cdH1cblxuXG5cdC8qKlxuXHQqIGZpbmFsaXplIHRoZSBiZWhhdmlvciBvZiBhbiBpbml0aWF0aW5nIHNvY2tldFxuXHQqIEBwYXJhbSB7b2JqZWN0fSBtZXNzYWdlIHRoZSByZWNlaXZlZCBtZXNzYWdlIHBvc3NpYmx5IGNvbnRhaW5pbmcgYW4gYW5zd2VyIHRvIHRoZVxuXHQqIHByb3Bvc2VkIG9mZmVyXG5cdCogQHJldHVybiB7b2JqZWN0fSBSZXR1cm4gcHJpb3IgZW50cnlcblx0Ki9cblx0ZmluYWxpemUgKG1lc3NhZ2UpIHtcblx0XHQvLyAjMSBpZiBpdCBkb2VzIG5vdCBleGlzdHMsIHN0b3A7IG9yIGlmIGl0IGV4aXN0cyBidXQgYWxyZWFkeSBzZXR1cFxuXHRcdC8vIHJldHVybiBpdFxuXHRcdGxldCBwcmlvciA9IHRoaXMucGVuZGluZy5nZXQobWVzc2FnZS50aWQpO1xuXHRcdGlmICghcHJpb3IgfHwgcHJpb3IucGlkKSB7XG5cdFx0XHRyZXR1cm4gcHJpb3I7XG5cdFx0fVxuXHRcdC8vICMyIG90aGVyd2lzZSBzZXQgdGhlIGV2ZW50cyBjb3JyZWN0bHlcblx0XHRwcmlvci5waWQgPSBtZXNzYWdlLnBpZDtcblxuXHRcdGxldCBlbnRyeSA9IHtcblx0XHRcdGlkOiBtZXNzYWdlLnBpZCxcblx0XHRcdHNvY2tldDogcHJpb3Iuc29ja2V0LFxuXHRcdFx0cHJvdG9jb2w6IHByaW9yLnByb3RvY29sLFxuXHRcdFx0b25SZWFkeTogcHJpb3Iub25SZWFkeSxcblx0XHRcdG9uT2ZmZXI6IHByaW9yLm9uT2ZmZXJcblx0XHR9O1xuXG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0bGV0IHNvY2tldCA9IGVudHJ5LnNvY2tldDtcblx0XHRzb2NrZXQub24oJ2Nvbm5lY3QnLCBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdHNlbGYuZ2V0KGVudHJ5LmlkKSAmJiBzb2NrZXQuZGVzdHJveSgpO1xuXHRcdFx0c2VsZi5wZW5kaW5nLnJlbW92ZShwcmlvcik7XG5cdFx0XHRzZWxmLmxpdmluZy5pbnNlcnQoZW50cnkpO1xuXHRcdFx0ZW50cnkub25SZWFkeSAmJiBlbnRyeS5vblJlYWR5KHByaW9yLnBpZCk7XG5cdFx0XHRzZWxmLmVtaXQoJ3JlYWR5JywgcHJpb3IucGlkKTtcblx0XHRcdGVudHJ5LnByb3RvY29sICYmIHNlbGYuZW1pdCgncmVhZHktJytlbnRyeS5wcm90b2NvbCwgcHJpb3IucGlkKTtcblx0XHRcdGNsZWFyVGltZW91dChwcmlvci50aW1lb3V0KTtcblxuXHRcdH0pO1xuXHRcdHNvY2tldC5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoc2VsZi5wZW5kaW5nLmNvbnRhaW5zKG1lc3NhZ2UudGlkKSkge1xuXHRcdFx0XHRzZWxmLnBlbmRpbmcuZ2V0KG1lc3NhZ2UudGlkKS5zb2NrZXQgPSBudWxsO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHJpb3IudGltZW91dCAmJiBjbGVhclRpbWVvdXQocHJpb3IudGltZW91dCk7XG5cdFx0XHRcdHByaW9yLnRpbWVvdXQgPSBudWxsO1xuXHRcdFx0XHRsZXQgbGl2ZSA9IHNlbGYubGl2aW5nLnJlbW92ZUFsbChwcmlvci5waWQpO1xuXHRcdFx0XHRpZiAobGl2ZSkge1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGl2ZS5vY2M7ICsraSkge1xuXHRcdFx0XHRcdFx0c2VsZi5lbWl0KCdkaXNjb25uZWN0JywgcHJpb3IucGlkKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0c2VsZi5keWluZy5yZW1vdmUocHJpb3IucGlkKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHRoaXMuY29tbW9uKHByaW9yKTtcblxuXHRcdHJldHVybiBwcmlvcjtcblx0fVxuXG5cdC8qKlxuXHQqICB0aGUgcGVlciBpZCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgdGFibGVzXG5cdCogIEBwYXJhbSB7b2JqZWN0fSBtZXNzYWdlIFRoZSBtZXNzYWdlXG5cdCogIEBwYXJhbSB7Y2FsbGJhY2t9IGNhbGxiYWNrcyB0aGUgY2FsbGJhY2tzXG5cdCogIEByZXR1cm4ge29iamVjdH0gYWxyZWF5ZEV4aXN0XG5cdCovXG5cdGFscmVhZHlFeGlzdHMgKG1lc3NhZ2UsIGNhbGxiYWNrcykge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdGxldCBhbHJlYWR5RXhpc3RzID0gdGhpcy5nZXQobWVzc2FnZS5waWQpO1xuXHRcdGlmICAoIWFscmVhZHlFeGlzdHMpIHtcblx0XHRcdC8vICNBIGRvZXMgbm90IGFscmVhZHkgZXhpc3RzIGJ1dCBwZW5kaW5nXG5cdFx0XHRsZXQgZW50cnkgPSB0aGlzLnBlbmRpbmcuZ2V0KG1lc3NhZ2UudGlkKTtcblx0XHRcdGVudHJ5ICYmIGVudHJ5LnNvY2tldCAmJiBtZXNzYWdlLm9mZmVyICYmIGVudHJ5LnNvY2tldC5zaWduYWwobWVzc2FnZS5vZmZlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vICNCIGFscmVhZHkgZXhpc3RzIGFuZCBwZW5kaW5nXG5cdFx0XHRsZXQgdG9SZW1vdmUgPSB0aGlzLnBlbmRpbmcuZ2V0KG1lc3NhZ2UudGlkKTtcblx0XHRcdGlmICh0b1JlbW92ZSAmJiB0b1JlbW92ZS5zb2NrZXQpIHsgLy8gZXhpc3RzIGJ1dCBzb2NrZXQgc3RpbGwgdzhpblxuXHRcdFx0XHRpZiAoIWFscmVhZHlFeGlzdHMudGltZW91dCkge1xuXHRcdFx0XHRcdC8vICMxIGFscmVhZHkgaW4gbGl2aW5nIHNvY2tldCwgYWRkIGFuIG9jY3VycmVuY2Vcblx0XHRcdFx0XHR0aGlzLmxpdmluZy5pbnNlcnQobWVzc2FnZS5waWQpO1xuXHRcdFx0XHRcdHRvUmVtb3ZlLnN1Y2Nlc3NmdWwgPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vICMyIHdhcyBkeWluZywgcmVzdXJlY3QgdGhlIHNvY2tldFxuXHRcdFx0XHRcdHRoaXMuZHlpbmcucmVtb3ZlKGFscmVhZHlFeGlzdHMpO1xuXHRcdFx0XHRcdGNsZWFyVGltZW91dChhbHJlYWR5RXhpc3RzLnRpbWVvdXQpO1xuXHRcdFx0XHRcdGFscmVhZHlFeGlzdHMudGltZW91dCA9IG51bGw7XG5cdFx0XHRcdFx0dGhpcy5saXZpbmcuaW5zZXJ0KGFscmVhZHlFeGlzdHMpO1xuXHRcdFx0XHRcdHRvUmVtb3ZlLnN1Y2Nlc3NmdWwgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRvUmVtb3ZlLnNvY2tldC5kZXN0cm95KCk7XG5cdFx0XHRcdC8vICNDIHN0YW5kYXJkIG9uIGFjY2VwdCBmdW5jdGlvbiBpZiBpdCBleGlzdHMgaW4gYXJnXG5cdFx0XHRcdG1lc3NhZ2Uub2ZmZXIgJiYgY2FsbGJhY2tzICYmIGNhbGxiYWNrcy5vbkFjY2VwdCAmJiBjYWxsYmFja3Mub25BY2NlcHQoc2VsZi5NUmVzcG9uc2UobWVzc2FnZS50aWQsIHRoaXMuSUQsXHRudWxsLFx0bWVzc2FnZS5wcm90b2NvbCkpO1xuXG5cdFx0XHRcdChjYWxsYmFja3MgJiZcdGNhbGxiYWNrcy5vblJlYWR5ICYmIGNhbGxiYWNrcy5vblJlYWR5KGFscmVhZHlFeGlzdHMuaWQpKSB8fFx0KHRvUmVtb3ZlICYmIFx0dG9SZW1vdmUub25SZWFkeSAmJlx0dG9SZW1vdmUub25SZWFkeShhbHJlYWR5RXhpc3RzLmlkKSk7XG5cdFx0XHRcdHRoaXMuZW1pdCgncmVhZHknLCBhbHJlYWR5RXhpc3RzLmlkKTtcblx0XHRcdFx0bWVzc2FnZS5wcm90b2NvbCAmJiB0aGlzLmVtaXQoJ3JlYWR5LScrbWVzc2FnZS5wcm90b2NvbCwgYWxyZWFkeUV4aXN0cy5pZCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBhbHJlYWR5RXhpc3RzO1xuXHR9XG5cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IE5laWdoYm9yaG9vZDtcbiJdfQ==
},{"./extended-sorted-array.js":1,"./multiset.js":2,"events":11,"simple-peer":29,"uuid/v4":35}]},{},[]);
