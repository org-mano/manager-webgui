(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":16}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":17}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":18}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":19}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":20}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":21}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":22}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":23}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":24}],10:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],11:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":4}],12:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _assign = require("../core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
},{"../core-js/object/assign":2}],13:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("../core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
},{"../core-js/object/create":3,"../core-js/object/set-prototype-of":6,"../helpers/typeof":15}],14:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
},{"../helpers/typeof":15}],15:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":8,"../core-js/symbol/iterator":9}],16:[function(require,module,exports){
var core  = require('../../modules/_core')
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};
},{"../../modules/_core":32}],17:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":32,"../../modules/es6.object.assign":98}],18:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};
},{"../../modules/_core":32,"../../modules/es6.object.create":99}],19:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":32,"../../modules/es6.object.define-property":100}],20:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;
},{"../../modules/_core":32,"../../modules/es6.object.get-prototype-of":101}],21:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;
},{"../../modules/_core":32,"../../modules/es6.object.set-prototype-of":102}],22:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/_core').Promise;
},{"../modules/_core":32,"../modules/es6.object.to-string":103,"../modules/es6.promise":104,"../modules/es6.string.iterator":105,"../modules/web.dom.iterable":109}],23:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":32,"../../modules/es6.object.to-string":103,"../../modules/es6.symbol":106,"../../modules/es7.symbol.async-iterator":107,"../../modules/es7.symbol.observable":108}],24:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":94,"../../modules/es6.string.iterator":105,"../../modules/web.dom.iterable":109}],25:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],26:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],27:[function(require,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],28:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":51}],29:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":86,"./_to-iobject":88,"./_to-length":89}],30:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof')
  , TAG = require('./_wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./_cof":31,"./_wks":95}],31:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],32:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],33:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":25}],34:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],35:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":40}],36:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":42,"./_is-object":51}],37:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],38:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys')
  , gOPS    = require('./_object-gops')
  , pIE     = require('./_object-pie');
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
},{"./_object-gops":69,"./_object-keys":72,"./_object-pie":73}],39:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":32,"./_ctx":33,"./_global":42,"./_hide":44}],40:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],41:[function(require,module,exports){
var ctx         = require('./_ctx')
  , call        = require('./_iter-call')
  , isArrayIter = require('./_is-array-iter')
  , anObject    = require('./_an-object')
  , toLength    = require('./_to-length')
  , getIterFn   = require('./core.get-iterator-method')
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
},{"./_an-object":28,"./_ctx":33,"./_is-array-iter":49,"./_iter-call":52,"./_to-length":89,"./core.get-iterator-method":96}],42:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],43:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],44:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":35,"./_object-dp":64,"./_property-desc":75}],45:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":42}],46:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":35,"./_dom-create":36,"./_fails":40}],47:[function(require,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
},{}],48:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":31}],49:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":57,"./_wks":95}],50:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":31}],51:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],52:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./_an-object":28}],53:[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":44,"./_object-create":63,"./_property-desc":75,"./_set-to-string-tag":80,"./_wks":95}],54:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":39,"./_has":43,"./_hide":44,"./_iter-create":53,"./_iterators":57,"./_library":59,"./_object-gpo":70,"./_redefine":77,"./_set-to-string-tag":80,"./_wks":95}],55:[function(require,module,exports){
var ITERATOR     = require('./_wks')('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./_wks":95}],56:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],57:[function(require,module,exports){
module.exports = {};
},{}],58:[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./_object-keys":72,"./_to-iobject":88}],59:[function(require,module,exports){
module.exports = true;
},{}],60:[function(require,module,exports){
var META     = require('./_uid')('meta')
  , isObject = require('./_is-object')
  , has      = require('./_has')
  , setDesc  = require('./_object-dp').f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require('./_fails')(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
},{"./_fails":40,"./_has":43,"./_is-object":51,"./_object-dp":64,"./_uid":92}],61:[function(require,module,exports){
var global    = require('./_global')
  , macrotask = require('./_task').set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = require('./_cof')(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};
},{"./_cof":31,"./_global":42,"./_task":85}],62:[function(require,module,exports){
'use strict';
// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = require('./_object-keys')
  , gOPS     = require('./_object-gops')
  , pIE      = require('./_object-pie')
  , toObject = require('./_to-object')
  , IObject  = require('./_iobject')
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || require('./_fails')(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;
},{"./_fails":40,"./_iobject":48,"./_object-gops":69,"./_object-keys":72,"./_object-pie":73,"./_to-object":90}],63:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":28,"./_dom-create":36,"./_enum-bug-keys":37,"./_html":45,"./_object-dps":65,"./_shared-key":81}],64:[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":28,"./_descriptors":35,"./_ie8-dom-define":46,"./_to-primitive":91}],65:[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":28,"./_descriptors":35,"./_object-dp":64,"./_object-keys":72}],66:[function(require,module,exports){
var pIE            = require('./_object-pie')
  , createDesc     = require('./_property-desc')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , has            = require('./_has')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"./_descriptors":35,"./_has":43,"./_ie8-dom-define":46,"./_object-pie":73,"./_property-desc":75,"./_to-iobject":88,"./_to-primitive":91}],67:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject')
  , gOPN      = require('./_object-gopn').f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":68,"./_to-iobject":88}],68:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":37,"./_object-keys-internal":71}],69:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],70:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":43,"./_shared-key":81,"./_to-object":90}],71:[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":29,"./_has":43,"./_shared-key":81,"./_to-iobject":88}],72:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":37,"./_object-keys-internal":71}],73:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],74:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export')
  , core    = require('./_core')
  , fails   = require('./_fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./_core":32,"./_export":39,"./_fails":40}],75:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],76:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
},{"./_hide":44}],77:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":44}],78:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object')
  , anObject = require('./_an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./_an-object":28,"./_ctx":33,"./_is-object":51,"./_object-gopd":66}],79:[function(require,module,exports){
'use strict';
var global      = require('./_global')
  , core        = require('./_core')
  , dP          = require('./_object-dp')
  , DESCRIPTORS = require('./_descriptors')
  , SPECIES     = require('./_wks')('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./_core":32,"./_descriptors":35,"./_global":42,"./_object-dp":64,"./_wks":95}],80:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":43,"./_object-dp":64,"./_wks":95}],81:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":82,"./_uid":92}],82:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":42}],83:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./_an-object')
  , aFunction = require('./_a-function')
  , SPECIES   = require('./_wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./_a-function":25,"./_an-object":28,"./_wks":95}],84:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":34,"./_to-integer":87}],85:[function(require,module,exports){
var ctx                = require('./_ctx')
  , invoke             = require('./_invoke')
  , html               = require('./_html')
  , cel                = require('./_dom-create')
  , global             = require('./_global')
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(require('./_cof')(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./_cof":31,"./_ctx":33,"./_dom-create":36,"./_global":42,"./_html":45,"./_invoke":47}],86:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":87}],87:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],88:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":34,"./_iobject":48}],89:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":87}],90:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":34}],91:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":51}],92:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],93:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":32,"./_global":42,"./_library":59,"./_object-dp":64,"./_wks-ext":94}],94:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":95}],95:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":42,"./_shared":82,"./_uid":92}],96:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":30,"./_core":32,"./_iterators":57,"./_wks":95}],97:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":26,"./_iter-define":54,"./_iter-step":56,"./_iterators":57,"./_to-iobject":88}],98:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":39,"./_object-assign":62}],99:[function(require,module,exports){
var $export = require('./_export')
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: require('./_object-create')});
},{"./_export":39,"./_object-create":63}],100:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":35,"./_export":39,"./_object-dp":64}],101:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = require('./_to-object')
  , $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./_object-gpo":70,"./_object-sap":74,"./_to-object":90}],102:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', {setPrototypeOf: require('./_set-proto').set});
},{"./_export":39,"./_set-proto":78}],103:[function(require,module,exports){

},{}],104:[function(require,module,exports){
'use strict';
var LIBRARY            = require('./_library')
  , global             = require('./_global')
  , ctx                = require('./_ctx')
  , classof            = require('./_classof')
  , $export            = require('./_export')
  , isObject           = require('./_is-object')
  , aFunction          = require('./_a-function')
  , anInstance         = require('./_an-instance')
  , forOf              = require('./_for-of')
  , speciesConstructor = require('./_species-constructor')
  , task               = require('./_task').set
  , microtask          = require('./_microtask')()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[require('./_wks')('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require('./_redefine-all')($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
require('./_set-to-string-tag')($Promise, PROMISE);
require('./_set-species')(PROMISE);
Wrapper = require('./_core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && require('./_iter-detect')(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});
},{"./_a-function":25,"./_an-instance":27,"./_classof":30,"./_core":32,"./_ctx":33,"./_export":39,"./_for-of":41,"./_global":42,"./_is-object":51,"./_iter-detect":55,"./_library":59,"./_microtask":61,"./_redefine-all":76,"./_set-species":79,"./_set-to-string-tag":80,"./_species-constructor":83,"./_task":85,"./_wks":95}],105:[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":54,"./_string-at":84}],106:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global         = require('./_global')
  , has            = require('./_has')
  , DESCRIPTORS    = require('./_descriptors')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , META           = require('./_meta').KEY
  , $fails         = require('./_fails')
  , shared         = require('./_shared')
  , setToStringTag = require('./_set-to-string-tag')
  , uid            = require('./_uid')
  , wks            = require('./_wks')
  , wksExt         = require('./_wks-ext')
  , wksDefine      = require('./_wks-define')
  , keyOf          = require('./_keyof')
  , enumKeys       = require('./_enum-keys')
  , isArray        = require('./_is-array')
  , anObject       = require('./_an-object')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , createDesc     = require('./_property-desc')
  , _create        = require('./_object-create')
  , gOPNExt        = require('./_object-gopn-ext')
  , $GOPD          = require('./_object-gopd')
  , $DP            = require('./_object-dp')
  , $keys          = require('./_object-keys')
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f  = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./_library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_an-object":28,"./_descriptors":35,"./_enum-keys":38,"./_export":39,"./_fails":40,"./_global":42,"./_has":43,"./_hide":44,"./_is-array":50,"./_keyof":58,"./_library":59,"./_meta":60,"./_object-create":63,"./_object-dp":64,"./_object-gopd":66,"./_object-gopn":68,"./_object-gopn-ext":67,"./_object-gops":69,"./_object-keys":72,"./_object-pie":73,"./_property-desc":75,"./_redefine":77,"./_set-to-string-tag":80,"./_shared":82,"./_to-iobject":88,"./_to-primitive":91,"./_uid":92,"./_wks":95,"./_wks-define":93,"./_wks-ext":94}],107:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":93}],108:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":93}],109:[function(require,module,exports){
require('./es6.array.iterator');
var global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , TO_STRING_TAG = require('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":42,"./_hide":44,"./_iterators":57,"./_wks":95,"./es6.array.iterator":97}],110:[function(require,module,exports){
'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by kinneretzin on 29/11/2016.
 */

var BlueprintActions = function () {
    function BlueprintActions(toolbox) {
        (0, _classCallCheck3.default)(this, BlueprintActions);

        this.toolbox = toolbox;
    }

    (0, _createClass3.default)(BlueprintActions, [{
        key: 'doGetFullBlueprintData',
        value: function doGetFullBlueprintData(blueprint) {
            return this.toolbox.getManager().doGet('/blueprints/' + blueprint.id);
        }
    }, {
        key: 'doDelete',
        value: function doDelete(blueprint) {
            var _this = this;

            return this.toolbox.getManager().doDelete('/blueprints/' + blueprint.id).then(function () {
                return _this.doDeleteImage(blueprint.id);
            });
        }
    }, {
        key: 'doDeploy',
        value: function doDeploy(blueprint, deploymentId, inputs) {
            return this.toolbox.getManager().doPut('/deployments/' + deploymentId, null, {
                'blueprint_id': blueprint.id,
                inputs: inputs
            });
        }
    }, {
        key: 'doUpload',
        value: function doUpload(blueprintName, blueprintFileName, blueprintUrl, file, imageUrl, image) {
            var _this2 = this;

            var params = {};
            var YAML_EXTENSION = '.yaml';

            if (!_.isEmpty(blueprintFileName)) {
                params['application_file_name'] = _.endsWith(blueprintFileName, YAML_EXTENSION) ? blueprintFileName : blueprintFileName + YAML_EXTENSION;
            }
            if (!_.isEmpty(blueprintUrl)) {
                params['blueprint_archive_url'] = blueprintUrl;
            }

            var promise;
            if (file) {
                promise = this.toolbox.getManager().doUpload('/blueprints/' + blueprintName, params, file);
            } else {
                promise = this.toolbox.getManager().doPut('/blueprints/' + blueprintName, params);
            }

            return promise.then(function () {
                return _this2.doUploadImage(blueprintName, imageUrl, image);
            });
        }
    }, {
        key: 'doUploadImage',
        value: function doUploadImage(blueprintId, imageUrl, image) {
            if (_.isEmpty(imageUrl) && !image) {
                return _promise2.default.resolve();
            }

            var params = { imageUrl: imageUrl };
            if (image) {
                return this.toolbox.getExternal().doUpload('/ba/image/' + blueprintId, params, image, "post");
            } else {
                return this.toolbox.getExternal().doPost('/ba/image/' + blueprintId, params);
            }
        }
    }, {
        key: 'doDeleteImage',
        value: function doDeleteImage(blueprintId) {
            return this.toolbox.getExternal().doDelete('/ba/image/' + blueprintId);
        }
    }]);
    return BlueprintActions;
}();

Stage.defineCommon({
    name: 'BlueprintActions',
    common: BlueprintActions
});

},{"babel-runtime/core-js/promise":7,"babel-runtime/helpers/classCallCheck":10,"babel-runtime/helpers/createClass":11}],111:[function(require,module,exports){
'use strict';

/**
 * Created by kinneretzin on 02/03/2017.
 */

var consts = {
    A: 'a',
    B: 'b',
    C: 'c',
    ABC: "AAA"
};

Stage.defineCommon({
    name: 'someConsts',
    common: consts
});

},{}],112:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _stringify2 = require('babel-runtime/core-js/json/stringify');

var _stringify3 = _interopRequireDefault(_stringify2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by kinneretzin on 05/10/2016.
 */

var PropTypes = React.PropTypes;

var DeployBlueprintModal = function (_React$Component) {
    (0, _inherits3.default)(DeployBlueprintModal, _React$Component);

    function DeployBlueprintModal(props, context) {
        (0, _classCallCheck3.default)(this, DeployBlueprintModal);

        var _this = (0, _possibleConstructorReturn3.default)(this, (DeployBlueprintModal.__proto__ || (0, _getPrototypeOf2.default)(DeployBlueprintModal)).call(this, props, context));

        _this.state = DeployBlueprintModal.initialState;
        return _this;
    }

    (0, _createClass3.default)(DeployBlueprintModal, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (!this.props.open && nextProps.open) {
                var deploymentInputs = {};

                _.forEach(nextProps.blueprint.plan.inputs, function (inputObj, inputName) {
                    return deploymentInputs[inputName] = '';
                });
                this.setState((0, _extends3.default)({}, DeployBlueprintModal.initialState, { deploymentInputs: deploymentInputs }));
            }
        }
    }, {
        key: 'onApprove',
        value: function onApprove() {
            this._submitDeploy();
            return false;
        }
    }, {
        key: 'onCancel',
        value: function onCancel() {
            this.props.onHide();
            return true;
        }
    }, {
        key: '_submitDeploy',
        value: function _submitDeploy() {
            var _this2 = this;

            var errors = {};
            var EMPTY_STRING = '""';

            if (!this.props.blueprint) {
                errors["error"] = "Blueprint not selected";
            }

            if (_.isEmpty(this.state.deploymentName)) {
                errors["deploymentName"] = "Please provide deployment name";
            }

            var deploymentInputs = {};
            _.forEach(this.props.blueprint.plan.inputs, function (inputObj, inputName) {
                var inputValue = _this2.state.deploymentInputs[inputName];
                if (_.isEmpty(inputValue)) {
                    if (_.isNil(inputObj.default)) {
                        errors[inputName] = 'Please provide ' + inputName;
                    }
                } else if (inputValue === EMPTY_STRING) {
                    deploymentInputs[inputName] = '';
                } else {
                    deploymentInputs[inputName] = inputValue;
                }
            });

            if (!_.isEmpty(errors)) {
                this.setState({ errors: errors });
                return false;
            }

            // Disable the form
            this.setState({ loading: true });

            var actions = new Stage.Common.BlueprintActions(this.props.toolbox);
            actions.doDeploy(this.props.blueprint, this.state.deploymentName, deploymentInputs).then(function () /*deployment*/{
                _this2.setState({ loading: false });
                _this2.props.toolbox.getEventBus().trigger('deployments:refresh');
                _this2.props.onHide();
            }).catch(function (err) {
                _this2.setState({ loading: false, errors: { error: err.message } });
            });
        }
    }, {
        key: '_handleInputChange',
        value: function _handleInputChange(proxy, field) {
            var fieldNameValue = Stage.Basic.Form.fieldNameValue(field);
            if (field.className === DeployBlueprintModal.DEPLOYMENT_INPUT_CLASSNAME) {
                this.setState({ deploymentInputs: (0, _extends3.default)({}, this.state.deploymentInputs, fieldNameValue) });
            } else {
                this.setState(fieldNameValue);
            }
        }
    }, {
        key: '_stringify',
        value: function _stringify(object) {
            if (_.isObject(object) || _.isArray(object) || _.isBoolean(object)) {
                return (0, _stringify3.default)(object);
            } else {
                return String(object || '');
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _Stage$Basic = Stage.Basic,
                Modal = _Stage$Basic.Modal,
                Icon = _Stage$Basic.Icon,
                Form = _Stage$Basic.Form,
                Message = _Stage$Basic.Message,
                Popup = _Stage$Basic.Popup,
                Header = _Stage$Basic.Header,
                ApproveButton = _Stage$Basic.ApproveButton,
                CancelButton = _Stage$Basic.CancelButton;


            var blueprint = (0, _assign2.default)({}, { id: '', plan: { inputs: {} } }, this.props.blueprint);
            var deploymentInputs = _.sortBy(_.map(blueprint.plan.inputs, function (input, name) {
                return (0, _extends3.default)({ 'name': name }, input);
            }), [function (input) {
                return !_.isNil(input.default);
            }, 'name']);

            return React.createElement(
                Modal,
                { open: this.props.open },
                React.createElement(
                    Modal.Header,
                    null,
                    React.createElement(Icon, { name: 'rocket' }),
                    ' Deploy blueprint ',
                    blueprint.id
                ),
                React.createElement(
                    Modal.Content,
                    null,
                    React.createElement(
                        Form,
                        { loading: this.state.loading, errors: this.state.errors },
                        React.createElement(
                            Form.Field,
                            { error: this.state.errors.deploymentName },
                            React.createElement(Form.Input, { name: 'deploymentName', placeholder: 'Deployment name',
                                value: this.state.deploymentName, onChange: this._handleInputChange.bind(this) })
                        ),
                        blueprint.id && React.createElement(
                            Form.Divider,
                            null,
                            React.createElement(
                                Header,
                                { size: 'tiny' },
                                'Deployment inputs',
                                React.createElement(
                                    Header.Subheader,
                                    null,
                                    'Use "" for an empty string'
                                )
                            )
                        ),
                        blueprint.id && _.isEmpty(deploymentInputs) && React.createElement(Message, { content: 'No inputs available for the blueprint' }),
                        _.map(deploymentInputs, function (input) {
                            var formInput = function formInput() {
                                return React.createElement(Form.Input, { name: input.name, placeholder: input.description,
                                    value: _this3.state.deploymentInputs[input.name],
                                    onChange: _this3._handleInputChange.bind(_this3),
                                    className: DeployBlueprintModal.DEPLOYMENT_INPUT_CLASSNAME });
                            };
                            return React.createElement(
                                Form.Field,
                                { key: input.name, error: _this3.state.errors[input.name] },
                                React.createElement(
                                    'label',
                                    null,
                                    input.name,
                                    '\xA0',
                                    _.isNil(input.default) ? React.createElement(Icon, { name: 'asterisk', color: 'red', size: 'tiny', className: 'superscripted' }) : null
                                ),
                                !_.isNil(input.default) ? React.createElement(Popup, { trigger: formInput(), header: 'Default value',
                                    content: _this3._stringify(input.default),
                                    position: 'top right', wide: true }) : formInput()
                            );
                        })
                    )
                ),
                React.createElement(
                    Modal.Actions,
                    null,
                    React.createElement(CancelButton, { onClick: this.onCancel.bind(this), disabled: this.state.loading }),
                    React.createElement(ApproveButton, { onClick: this.onApprove.bind(this), disabled: this.state.loading, content: 'Deploy', icon: 'rocket', color: 'green' })
                )
            );
        }
    }]);
    return DeployBlueprintModal;
}(React.Component);

DeployBlueprintModal.DEPLOYMENT_INPUT_CLASSNAME = 'deploymentInput';
DeployBlueprintModal.initialState = {
    loading: false,
    errors: {},
    deploymentName: '',
    deploymentInputs: []
};
DeployBlueprintModal.propTypes = {
    toolbox: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    blueprint: PropTypes.object.isRequired,
    onHide: PropTypes.func
};
DeployBlueprintModal.defaultProps = {
    onHide: function onHide() {}
};
exports.default = DeployBlueprintModal;
;

Stage.defineCommon({
    name: 'DeployBlueprintModal',
    common: DeployBlueprintModal
});

},{"babel-runtime/core-js/json/stringify":1,"babel-runtime/core-js/object/assign":2,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":10,"babel-runtime/helpers/createClass":11,"babel-runtime/helpers/extends":12,"babel-runtime/helpers/inherits":13,"babel-runtime/helpers/possibleConstructorReturn":14}],113:[function(require,module,exports){
'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by kinneretzin on 19/10/2016.
 */

var DeploymentActions = function () {
    function DeploymentActions(toolbox) {
        (0, _classCallCheck3.default)(this, DeploymentActions);

        this.toolbox = toolbox;
    }

    (0, _createClass3.default)(DeploymentActions, [{
        key: 'doGet',
        value: function doGet(deployment) {
            return this.toolbox.getManager().doGet('/deployments/' + deployment.id);
        }
    }, {
        key: 'doDelete',
        value: function doDelete(deployment) {
            return this.toolbox.getManager().doDelete('/deployments/' + deployment.id);
        }
    }, {
        key: 'doForceDelete',
        value: function doForceDelete(deployment) {
            return this.toolbox.getManager().doDelete('/deployments/' + deployment.id, { ignore_live_nodes: 'true' });
        }
    }, {
        key: 'doCancel',
        value: function doCancel(execution, action) {
            return this.toolbox.getManager().doPost('/executions/' + execution.id, null, {
                'deployment_id': execution.deployment_id,
                'action': action
            });
        }
    }, {
        key: 'doExecute',
        value: function doExecute(deployment, workflow, params) {
            return this.toolbox.getManager().doPost('/executions', null, {
                'deployment_id': deployment.id,
                'workflow_id': workflow.name,
                parameters: params
            });
        }
    }, {
        key: 'doUpdate',
        value: function doUpdate(deploymentName, applicationFileName, blueprintArchiveUrl, defaultWorkflow, installWorkflow, uninstallWorkflow, workflowId, blueprintArchive, inputs) {
            var params = {};
            if (!_.isEmpty(applicationFileName)) {
                params['application_file_name'] = applicationFileName + ".yaml";
            }
            if (!_.isEmpty(blueprintArchiveUrl)) {
                params['blueprint_archive_url'] = blueprintArchiveUrl;
            }
            if (defaultWorkflow) {
                params['skip_install'] = !installWorkflow;
                params['skip_uninstall'] = !uninstallWorkflow;
            } else {
                params['workflow_id'] = workflowId;
            }

            if (blueprintArchive || inputs) {
                var files = {};
                if (blueprintArchive) {
                    files['blueprint_archive'] = blueprintArchive;
                }
                if (inputs) {
                    files['inputs'] = inputs;
                }

                return this.toolbox.getManager().doUpload('/deployment-updates/' + deploymentName + '/update/initiate', params, files, 'post');
            } else {
                return this.toolbox.getManager().doPost('/deployment-updates/' + deploymentName + '/update/initiate', params);
            }
        }
    }]);
    return DeploymentActions;
}();

Stage.defineCommon({
    name: 'DeploymentActions',
    common: DeploymentActions
});

},{"babel-runtime/helpers/classCallCheck":10,"babel-runtime/helpers/createClass":11}],114:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by kinneretzin on 19/10/2016.
 */

var PropTypes = React.PropTypes;

var ExecuteDeploymentModal = function (_React$Component) {
    (0, _inherits3.default)(ExecuteDeploymentModal, _React$Component);

    function ExecuteDeploymentModal(props, context) {
        (0, _classCallCheck3.default)(this, ExecuteDeploymentModal);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ExecuteDeploymentModal.__proto__ || (0, _getPrototypeOf2.default)(ExecuteDeploymentModal)).call(this, props, context));

        _this.state = ExecuteDeploymentModal.initialState(props);
        return _this;
    }

    (0, _createClass3.default)(ExecuteDeploymentModal, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (!this.props.open && nextProps.open) {
                this.setState(ExecuteDeploymentModal.initialState(this.props));
            }
        }
    }, {
        key: 'onApprove',
        value: function onApprove() {
            this._submitExecute();
            return false;
        }
    }, {
        key: 'onCancel',
        value: function onCancel() {
            this.props.onHide();
            return true;
        }
    }, {
        key: '_submitExecute',
        value: function _submitExecute() {
            var _this2 = this;

            if (!this.props.deployment || !this.props.workflow) {
                this.setState({ errors: { error: 'Missing workflow or deployment' } });
                return false;
            }

            this.setState({ loading: true });

            var actions = new Stage.Common.DeploymentActions(this.props.toolbox);
            actions.doExecute(this.props.deployment, this.props.workflow, this.state.params).then(function () {
                _this2.setState({ loading: false });
                _this2.props.onHide();
                _this2.props.toolbox.getEventBus().trigger('executions:refresh');
            }).catch(function (err) {
                _this2.setState({ loading: false, errors: { error: err.message } });
            });
        }
    }, {
        key: 'handleInputChange',
        value: function handleInputChange(event, field) {
            this.setState({ params: (0, _extends3.default)({}, this.state.params, Stage.Basic.Form.fieldNameValue(field)) });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _Stage$Basic = Stage.Basic,
                Modal = _Stage$Basic.Modal,
                Icon = _Stage$Basic.Icon,
                Form = _Stage$Basic.Form,
                Message = _Stage$Basic.Message,
                Input = _Stage$Basic.Input,
                ApproveButton = _Stage$Basic.ApproveButton,
                CancelButton = _Stage$Basic.CancelButton;


            var workflow = (0, _assign2.default)({}, { name: "", parameters: [] }, this.props.workflow);

            return React.createElement(
                Modal,
                { open: this.props.open },
                React.createElement(
                    Modal.Header,
                    null,
                    React.createElement(Icon, { name: 'road' }),
                    ' Execute workflow ',
                    workflow.name
                ),
                React.createElement(
                    Modal.Content,
                    null,
                    React.createElement(
                        Form,
                        { loading: this.state.loading, errors: this.state.errors },
                        _.isEmpty(workflow.parameters) && React.createElement(Message, { content: 'No parameters available for the execution' }),
                        _.map(workflow.parameters, function (parameter, name) {
                            return React.createElement(
                                Form.Field,
                                { key: name },
                                React.createElement(
                                    'label',
                                    { title: parameter.description || name },
                                    name
                                ),
                                React.createElement(Input, { name: name, value: _this3.state.params[name], onChange: _this3.handleInputChange.bind(_this3) })
                            );
                        })
                    )
                ),
                React.createElement(
                    Modal.Actions,
                    null,
                    React.createElement(CancelButton, { onClick: this.onCancel.bind(this), disabled: this.state.loading }),
                    React.createElement(ApproveButton, { onClick: this.onApprove.bind(this), disabled: this.state.loading, content: 'Execute', icon: 'rocket', color: 'green' })
                )
            );
        }
    }]);
    return ExecuteDeploymentModal;
}(React.Component);

ExecuteDeploymentModal.initialState = function (props) {

    var params = {};
    _.each(props.workflow.parameters, function (param, name) {
        params[name] = Stage.Common.JsonUtils.stringify(param.default);
    });

    return {
        errors: {},
        loading: false,
        params: params
    };
};

ExecuteDeploymentModal.propTypes = {
    toolbox: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    deployment: PropTypes.object.isRequired,
    workflow: PropTypes.object.isRequired,
    onHide: PropTypes.func.isRequired
};
exports.default = ExecuteDeploymentModal;
;

Stage.defineCommon({
    name: 'ExecuteDeploymentModal',
    common: ExecuteDeploymentModal
});

},{"babel-runtime/core-js/object/assign":2,"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":10,"babel-runtime/helpers/createClass":11,"babel-runtime/helpers/extends":12,"babel-runtime/helpers/inherits":13,"babel-runtime/helpers/possibleConstructorReturn":14}],115:[function(require,module,exports){
'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by jakubniezgoda on 27/01/2017.
 */

var ExecutionActions = function () {
    function ExecutionActions(toolbox) {
        (0, _classCallCheck3.default)(this, ExecutionActions);

        this.toolbox = toolbox;
    }

    (0, _createClass3.default)(ExecutionActions, [{
        key: 'doCancel',
        value: function doCancel(execution, action) {
            return this.toolbox.getManager().doPost('/executions/' + execution.id, null, {
                'deployment_id': execution.deployment_id,
                'action': action
            });
        }
    }]);
    return ExecutionActions;
}();

Stage.defineCommon({
    name: 'ExecutionActions',
    common: ExecutionActions
});

},{"babel-runtime/helpers/classCallCheck":10,"babel-runtime/helpers/createClass":11}],116:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by jakubniezgoda on 27/01/2017.
 */

var PropTypes = React.PropTypes;

var ExecutionStatus = function (_React$Component) {
    (0, _inherits3.default)(ExecutionStatus, _React$Component);

    function ExecutionStatus(props, context) {
        (0, _classCallCheck3.default)(this, ExecutionStatus);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ExecutionStatus.__proto__ || (0, _getPrototypeOf2.default)(ExecutionStatus)).call(this, props, context));

        _this.state = {
            cancelClicked: false
        };
        return _this;
    }

    (0, _createClass3.default)(ExecutionStatus, [{
        key: '_actionClick',
        value: function _actionClick(event, _ref) {
            var name = _ref.name;

            this.setState({ cancelClicked: true });
            this.props.onCancelExecution(this.props.item, name);
        }
    }, {
        key: 'render',
        value: function render() {
            var _Stage$Basic = Stage.Basic,
                PopupMenu = _Stage$Basic.PopupMenu,
                Menu = _Stage$Basic.Menu,
                Label = _Stage$Basic.Label,
                Icon = _Stage$Basic.Icon;
            var ExecutionUtils = Stage.Common.ExecutionUtils;


            var execution = this.props.item;

            if (ExecutionUtils.isActiveExecution(execution)) {
                var activeExecutionStatus = execution.status;
                var cancelClicked = this.state.cancelClicked;

                return React.createElement(
                    Label,
                    null,
                    React.createElement(Icon, { name: 'spinner', loading: true }),
                    activeExecutionStatus,
                    React.createElement(
                        PopupMenu,
                        { disabled: cancelClicked, icon: 'delete' },
                        React.createElement(
                            Menu,
                            { pointing: true, vertical: true },
                            React.createElement(Menu.Item, { content: 'Cancel', name: ExecutionUtils.CANCEL_ACTION,
                                onClick: this._actionClick.bind(this) }),
                            React.createElement(Menu.Item, { content: 'Force Cancel', name: ExecutionUtils.FORCE_CANCEL_ACTION,
                                onClick: this._actionClick.bind(this) })
                        )
                    )
                );
            } else {
                var inactiveExecutionStatus = this.props.showInactiveAsLink ? React.createElement(
                    'a',
                    { href: 'javascript:void(0)' },
                    execution.status
                ) : execution.status;
                return React.createElement(
                    Label,
                    null,
                    inactiveExecutionStatus
                );
            }
        }
    }]);
    return ExecutionStatus;
}(React.Component);

ExecutionStatus.propTypes = {
    item: PropTypes.object.isRequired,
    onCancelExecution: PropTypes.func.isRequired,
    showInactiveAsLink: PropTypes.bool
};
exports.default = ExecutionStatus;


Stage.defineCommon({
    name: 'ExecutionStatus',
    common: ExecutionStatus
});

},{"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":10,"babel-runtime/helpers/createClass":11,"babel-runtime/helpers/inherits":13,"babel-runtime/helpers/possibleConstructorReturn":14}],117:[function(require,module,exports){
'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by jakubniezgoda on 31/01/2017.
 */

var ExecutionUtils = function () {
    function ExecutionUtils() {
        (0, _classCallCheck3.default)(this, ExecutionUtils);
    }

    (0, _createClass3.default)(ExecutionUtils, null, [{
        key: 'isActiveExecution',
        value: function isActiveExecution(execution) {
            var EXECUTION_STATES = ['terminated', 'failed', 'cancelled', 'pending', 'started', 'cancelling', 'force_cancelling'];
            var END_EXECUTION_STATES = ['terminated', 'failed', 'cancelled'];
            var ACTIVE_EXECUTION_STATES = _.difference(EXECUTION_STATES, END_EXECUTION_STATES);

            return _.includes(ACTIVE_EXECUTION_STATES, execution.status);
        }
    }]);
    return ExecutionUtils;
}();

ExecutionUtils.CANCEL_ACTION = 'cancel';
ExecutionUtils.FORCE_CANCEL_ACTION = 'force-cancel';
;

Stage.defineCommon({
    name: 'ExecutionUtils',
    common: ExecutionUtils
});

},{"babel-runtime/helpers/classCallCheck":10,"babel-runtime/helpers/createClass":11}],118:[function(require,module,exports){
'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by jakubniezgoda on 16/03/2017.
 */

var InfluxActions = function () {
    function InfluxActions(toolbox) {
        (0, _classCallCheck3.default)(this, InfluxActions);

        this.toolbox = toolbox;
        this.managerIp = toolbox.getManager().getIp();
    }

    (0, _createClass3.default)(InfluxActions, [{
        key: 'doGetMetric',
        value: function doGetMetric(deploymentId, metric, from, to, timeGroup) {
            var params = {};
            if (!_.isEmpty(from)) {
                params.from = from;
            }
            if (!_.isEmpty(to)) {
                params.to = to;
            }
            if (!_.isEmpty(timeGroup)) {
                params.timeGroup = timeGroup;
            }

            return this.toolbox.getExternal().doGet('/monitor/byMetric/' + this.managerIp + '/' + deploymentId + '/' + metric, params);
        }
    }, {
        key: 'doGetMetrics',
        value: function doGetMetrics(deploymentId) {
            return this.toolbox.getExternal().doGet('/monitor/metrics/' + this.managerIp + '/' + deploymentId);
        }
    }, {
        key: 'doRunQuery',
        value: function doRunQuery(query) {
            return this.toolbox.getExternal().doGet('/monitor/query/' + this.managerIp, { q: query });
        }
    }]);
    return InfluxActions;
}();

Stage.defineCommon({
    name: 'InfluxActions',
    common: InfluxActions
});

},{"babel-runtime/helpers/classCallCheck":10,"babel-runtime/helpers/createClass":11}],119:[function(require,module,exports){
'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by jakubniezgoda on 03/03/2017.
 */

var JsonUtils = function () {
    function JsonUtils() {
        (0, _classCallCheck3.default)(this, JsonUtils);
    }

    (0, _createClass3.default)(JsonUtils, null, [{
        key: 'stringify',
        value: function stringify(value) {
            var indented = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (_.isEmpty(value)) {
                return "";
            }

            var stringifiedValue = value;
            try {
                stringifiedValue = (0, _stringify2.default)(value, null, indented ? 2 : 0);
            } catch (e) {
                console.error('Cannot parse value \'' + value + '\'. ', e);
            }

            return _.trim(stringifiedValue, '"');
        }
    }]);
    return JsonUtils;
}();

Stage.defineCommon({
    name: 'JsonUtils',
    common: JsonUtils
});

},{"babel-runtime/core-js/json/stringify":1,"babel-runtime/helpers/classCallCheck":10,"babel-runtime/helpers/createClass":11}],120:[function(require,module,exports){
'use strict';

/**
 * Created by kinneretzin on 02/03/2017.
 */

var TimeConsts = {
    MAX_TIME_RESOLUTION_VALUE: 1000,
    MIN_TIME_RESOLUTION_VALUE: 1,
    TIME_RESOLUTION_UNITS: [{ name: 'microseconds', text: 'microseconds', value: 'u' }, { name: 'milliseconds', text: 'milliseconds', value: 'ms' }, { name: 'seconds', text: 'seconds', value: 's' }, { name: 'minutes', text: 'minutes', value: 'm' }, { name: 'hours', text: 'hours', value: 'h' }, { name: 'days', text: 'days', value: 'd' }, { name: 'weeks', text: 'weeks', value: 'w' }]
};

Stage.defineCommon({
    name: 'TimeConsts',
    common: TimeConsts
});

},{}],121:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by pposel on 18/01/2017.
 */

var PropTypes = React.PropTypes;

var DEFAULT_WORKFLOW = "default";
var CUSTOM_WORKFLOW = "custom";

var UpdateDeploymentModal = function (_React$Component) {
    (0, _inherits3.default)(UpdateDeploymentModal, _React$Component);

    function UpdateDeploymentModal(props, context) {
        (0, _classCallCheck3.default)(this, UpdateDeploymentModal);

        var _this = (0, _possibleConstructorReturn3.default)(this, (UpdateDeploymentModal.__proto__ || (0, _getPrototypeOf2.default)(UpdateDeploymentModal)).call(this, props, context));

        _this.state = UpdateDeploymentModal.initialState;
        return _this;
    }

    (0, _createClass3.default)(UpdateDeploymentModal, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            if (!this.props.open && nextProps.open) {
                this.refs.blueprintFile && this.refs.blueprintFile.reset();
                this.refs.inputsFile && this.refs.inputsFile.reset();
                this.setState(UpdateDeploymentModal.initialState);
            }
        }
    }, {
        key: "onApprove",
        value: function onApprove() {
            this._submitUpdate();
            return false;
        }
    }, {
        key: "onCancel",
        value: function onCancel() {
            this.props.onHide();
            return true;
        }
    }, {
        key: "_submitUpdate",
        value: function _submitUpdate() {
            var _this2 = this;

            var blueprintFile = this.refs.blueprintFile.file();
            var inputsFile = this.refs.inputsFile.file();

            var errors = {};
            if (_.isEmpty(this.state.blueprintUrl) && !blueprintFile) {
                errors["blueprintUrl"] = "Please select blueprint file or url";
            }

            if (!_.isEmpty(this.state.blueprintUrl) && blueprintFile) {
                errors["blueprintUrl"] = "Either blueprint file or url must be selected, not both";
            }

            if (this.state.runWorkflow === CUSTOM_WORKFLOW && _.isEmpty(this.state.workflowId)) {
                errors["workflowId"] = "Please provide workflow id";
            }

            if (!_.isEmpty(errors)) {
                this.setState({ errors: errors });
                return false;
            }

            // Disable the form
            this.setState({ loading: true });

            var actions = new Stage.Common.DeploymentActions(this.props.toolbox);
            actions.doUpdate(this.props.deployment.id, this.state.applicationFileName, this.state.blueprintUrl, this.state.runWorkflow === DEFAULT_WORKFLOW, this.state.installWorkflow, this.state.uninstallWorkflow, this.state.workflowId, blueprintFile, inputsFile).then(function () {
                _this2.setState({ loading: false });
                _this2.props.toolbox.refresh();
                _this2.props.onHide();
            }).catch(function (err) {
                _this2.setState({ errors: { error: err.message }, loading: false });
            });
        }
    }, {
        key: "_handleInputChange",
        value: function _handleInputChange(proxy, field) {
            this.setState(Stage.Basic.Form.fieldNameValue(field));
        }
    }, {
        key: "render",
        value: function render() {
            var _Stage$Basic = Stage.Basic,
                Modal = _Stage$Basic.Modal,
                Icon = _Stage$Basic.Icon,
                Form = _Stage$Basic.Form,
                ApproveButton = _Stage$Basic.ApproveButton,
                CancelButton = _Stage$Basic.CancelButton;


            return React.createElement(
                Modal,
                { open: this.props.open },
                React.createElement(
                    Modal.Header,
                    null,
                    React.createElement(Icon, { name: "edit" }),
                    " Update deployment ",
                    this.props.deployment.id
                ),
                React.createElement(
                    Modal.Content,
                    null,
                    React.createElement(
                        Form,
                        { loading: this.state.loading, errors: this.state.errors },
                        React.createElement(
                            Form.Group,
                            null,
                            React.createElement(
                                Form.Field,
                                { width: "9", error: this.state.errors.blueprintUrl },
                                React.createElement(Form.Input, { label: "URL", placeholder: "Enter new blueprint url", name: "blueprintUrl",
                                    value: this.state.blueprintUrl, onChange: this._handleInputChange.bind(this) })
                            ),
                            React.createElement(
                                Form.Field,
                                { width: "1", style: { position: 'relative' } },
                                React.createElement(
                                    "div",
                                    { className: "ui vertical divider" },
                                    "Or"
                                )
                            ),
                            React.createElement(
                                Form.Field,
                                { width: "8", error: this.state.errors.blueprintUrl },
                                React.createElement(Form.File, { placeholder: "Select new blueprint file", name: "blueprintFile", ref: "blueprintFile" })
                            )
                        ),
                        React.createElement(
                            Form.Field,
                            null,
                            React.createElement(Form.File, { placeholder: "Select inputs file", name: "inputsFile", ref: "inputsFile" })
                        ),
                        React.createElement(
                            Form.Field,
                            null,
                            React.createElement(Form.Input, { name: "applicationFileName", placeholder: "Blueprint filename e.g. blueprint",
                                value: this.state.applicationFileName, onChange: this._handleInputChange.bind(this) })
                        ),
                        React.createElement(
                            Form.Divider,
                            null,
                            React.createElement(Form.Radio, { label: "Run default workflow", name: "runWorkflow", checked: this.state.runWorkflow === DEFAULT_WORKFLOW,
                                onChange: this._handleInputChange.bind(this), value: DEFAULT_WORKFLOW })
                        ),
                        React.createElement(
                            Form.Field,
                            null,
                            React.createElement(Form.Checkbox, { label: "Run install workflow on added nodes",
                                name: "installWorkflow", disabled: this.state.runWorkflow !== DEFAULT_WORKFLOW,
                                checked: this.state.installWorkflow, onChange: this._handleInputChange.bind(this) })
                        ),
                        React.createElement(
                            Form.Field,
                            null,
                            React.createElement(Form.Checkbox, { label: "Run uninstall workflow on removed nodes",
                                name: "uninstallWorkflow", disabled: this.state.runWorkflow !== DEFAULT_WORKFLOW,
                                checked: this.state.uninstallWorkflow, onChange: this._handleInputChange.bind(this) })
                        ),
                        React.createElement(
                            Form.Divider,
                            null,
                            React.createElement(Form.Radio, { label: "Run custom workflow", name: "runWorkflow", checked: this.state.runWorkflow === CUSTOM_WORKFLOW,
                                onChange: this._handleInputChange.bind(this), value: CUSTOM_WORKFLOW })
                        ),
                        React.createElement(
                            Form.Field,
                            { error: this.state.errors.workflowId },
                            React.createElement(Form.Input, { name: "workflowId", placeholder: "Workflow ID", disabled: this.state.runWorkflow !== CUSTOM_WORKFLOW,
                                value: this.state.workflowId, onChange: this._handleInputChange.bind(this) })
                        )
                    )
                ),
                React.createElement(
                    Modal.Actions,
                    null,
                    React.createElement(CancelButton, { onClick: this.onCancel.bind(this), disabled: this.state.loading }),
                    React.createElement(ApproveButton, { onClick: this.onApprove.bind(this), disabled: this.state.loading, content: "Update", icon: "edit", color: "green" })
                )
            );
        }
    }]);
    return UpdateDeploymentModal;
}(React.Component);

UpdateDeploymentModal.initialState = {
    loading: false,
    runWorkflow: DEFAULT_WORKFLOW,
    installWorkflow: true,
    uninstallWorkflow: true,
    applicationFileName: "",
    blueprintUrl: "",
    workflowId: "",
    errors: {}
};
UpdateDeploymentModal.propTypes = {
    toolbox: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    deployment: PropTypes.object.isRequired,
    onHide: PropTypes.func.isRequired
};
exports.default = UpdateDeploymentModal;
;

Stage.defineCommon({
    name: 'UpdateDeploymentModal',
    common: UpdateDeploymentModal
});

},{"babel-runtime/core-js/object/get-prototype-of":5,"babel-runtime/helpers/classCallCheck":10,"babel-runtime/helpers/createClass":11,"babel-runtime/helpers/inherits":13,"babel-runtime/helpers/possibleConstructorReturn":14}]},{},[110,111,112,113,114,115,116,117,118,119,120,121])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2pzb24vc3RyaW5naWZ5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3Byb21pc2UuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2UuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FuLWluc3RhbmNlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZm9yLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hhcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faWU4LWRvbS1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ludm9rZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLXN0ZXAuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fa2V5b2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21ldGEuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX21pY3JvdGFzay5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUtYWxsLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190YXNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzIiwid2lkZ2V0cy9jb21tb24vc3JjL0JsdWVwcmludEFjdGlvbnMuanMiLCJ3aWRnZXRzL2NvbW1vbi9zcmMvQ29tbW9uQ29uc3RzLmpzIiwid2lkZ2V0cy9jb21tb24vc3JjL0RlcGxveUJsdWVwcmludE1vZGFsLmpzIiwid2lkZ2V0cy9jb21tb24vc3JjL0RlcGxveW1lbnRBY3Rpb25zLmpzIiwid2lkZ2V0cy9jb21tb24vc3JjL0V4ZWN1dGVEZXBsb3ltZW50TW9kYWwuanMiLCJ3aWRnZXRzL2NvbW1vbi9zcmMvRXhlY3V0aW9uQWN0aW9ucy5qcyIsIndpZGdldHMvY29tbW9uL3NyYy9FeGVjdXRpb25TdGF0dXMuanMiLCJ3aWRnZXRzL2NvbW1vbi9zcmMvRXhlY3V0aW9uVXRpbHMuanMiLCJ3aWRnZXRzL2NvbW1vbi9zcmMvSW5mbHV4QWN0aW9ucy5qcyIsIndpZGdldHMvY29tbW9uL3NyYy9Kc29uVXRpbHMuanMiLCJ3aWRnZXRzL2NvbW1vbi9zcmMvVGltZUNvbnN0cy5qcyIsIndpZGdldHMvY29tbW9uL3NyYy9VcGRhdGVEZXBsb3ltZW50TW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBOztBQ0FBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTs7QUNGQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7O0FDRkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMU9BOztBQ0FBOztBQ0FB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QUZKO0FBNURKLGFBREo7QUFtRUg7OztFQWhLOEMsTUFBTSxTOztBQUFwQyxxQixDQVFWLFksR0FBZTtBQUNsQixhQUFTLEtBRFM7QUFFbEIsaUJBQWEsZ0JBRks7QUFHbEIscUJBQWlCLElBSEM7QUFJbEIsdUJBQW1CLElBSkQ7QUFLbEIseUJBQXFCLEVBTEg7QUFNbEIsa0JBQWMsRUFOSTtBQU9sQixnQkFBWSxFQVBNO0FBUWxCLFlBQVE7QUFSVSxDO0FBUkwscUIsQ0FtQlYsUyxHQUFZO0FBQ2YsYUFBUyxVQUFVLE1BQVYsQ0FBaUIsVUFEWDtBQUVmLFVBQU0sVUFBVSxJQUFWLENBQWUsVUFGTjtBQUdmLGdCQUFZLFVBQVUsTUFBVixDQUFpQixVQUhkO0FBSWYsWUFBUSxVQUFVLElBQVYsQ0FBZTtBQUpSLEM7a0JBbkJGLHFCO0FBaUtwQjs7QUFFRCxNQUFNLFlBQU4sQ0FBbUI7QUFDZixVQUFNLHVCQURTO0FBRWYsWUFBUTtBQUZPLENBQW5CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKTtcblxudmFyIF9hc3NpZ24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNzaWduKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX2Fzc2lnbjIuZGVmYXVsdCB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9zZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY3JlYXRlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKTtcblxudmFyIF9jcmVhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlKTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoc3VwZXJDbGFzcykpKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9ICgwLCBfY3JlYXRlMi5kZWZhdWx0KShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0ID8gKDAsIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTsiLCJ2YXIgY29yZSAgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJylcbiAgLCAkSlNPTiA9IGNvcmUuSlNPTiB8fCAoY29yZS5KU09OID0ge3N0cmluZ2lmeTogSlNPTi5zdHJpbmdpZnl9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICByZXR1cm4gJEpTT04uc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmd1bWVudHMpO1xufTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuYXNzaWduOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUnKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlKFAsIEQpe1xuICByZXR1cm4gJE9iamVjdC5jcmVhdGUoUCwgRCk7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5TeW1ib2w7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fd2tzLWV4dCcpLmYoJ2l0ZXJhdG9yJyk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59OyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTsiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTsiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59OyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpOyIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHJlc3VsdCAgICAgPSBnZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gcElFLmZcbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59OyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTsiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTsiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59OyIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCJ2YXIgZ2V0S2V5cyAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlOyIsInZhciBNRVRBICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHNldERlc2MgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJylcbiAgLCBwSUUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsICRhc3NpZ24gID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCBhTGVuICA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZlxuICAgICwgaXNFbnVtICAgICA9IHBJRS5mO1xuICB3aGlsZShhTGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9IHJldHVybiBUO1xufSA6ICRhc3NpZ247IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTsiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59OyIsInZhciBwSUUgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIGdPUEQgICAgICAgICAgID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCl7XG4gIE8gPSB0b0lPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZihoYXMoTywgUCkpcmV0dXJuIGNyZWF0ZURlc2MoIXBJRS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTsiLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgZ09QTiAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mXG4gICwgdG9TdHJpbmcgID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbihpdCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuIiwiLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxudmFyICRrZXlzICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGhpZGRlbktleXMpO1xufTsiLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzOyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59OyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59OyIsImV4cG9ydHMuZiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlOyIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59OyIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYyl7XG4gICAgaWYoc2FmZSAmJiB0YXJnZXRba2V5XSl0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpOyIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uKE8sIHByb3RvKXtcbiAgYW5PYmplY3QoTyk7XG4gIGlmKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24odGVzdCwgYnVnZ3ksIHNldCl7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaChlKXsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pe1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTsiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTsiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTsiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59OyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTsiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59OyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTsiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTsiLCJ2YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpZGVmaW5lUHJvcGVydHkoJFN5bWJvbCwgbmFtZSwge3ZhbHVlOiB3a3NFeHQuZihuYW1lKX0pO1xufTsiLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTsiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpOyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vX29iamVjdC1hc3NpZ24nKX0pOyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jylcbi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7Y3JlYXRlOiByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyl9KTsiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7ZGVmaW5lUHJvcGVydHk6IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZ9KTsiLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCl7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7IiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi9fc2V0LXByb3RvJykuc2V0fSk7IiwiIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjbGFzc29mICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgdGFzayAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIG1pY3JvdGFzayAgICAgICAgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcbiAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcbiAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcbiAgaWYocHJvbWlzZS5fbilyZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spe1xuICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2NcbiAgICAsIGkgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYoaXNOb2RlKXtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG4gICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVzICAgID0gW11cbiAgICAgICAgLCBpbmRleCAgICAgPSAwXG4gICAgICAgICwgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTsiLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgTUVUQSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuS0VZXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCB3a3NEZWZpbmUgICAgICA9IHJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fa2V5b2YnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBfY3JlYXRlICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGdPUE5FeHQgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4tZXh0JylcbiAgLCAkR09QRCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJylcbiAgLCAkRFAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgJGtleXMgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QRCAgICAgICAgICAgPSAkR09QRC5mXG4gICwgZFAgICAgICAgICAgICAgPSAkRFAuZlxuICAsIGdPUE4gICAgICAgICAgID0gZ09QTkV4dC5mXG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgUFJPVE9UWVBFICAgICAgPSAncHJvdG90eXBlJ1xuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBUT19QUklNSVRJVkUgICA9IHdrcygndG9QcmltaXRpdmUnKVxuICAsIGlzRW51bSAgICAgICAgID0ge30ucHJvcGVydHlJc0VudW1lcmFibGVcbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgT1BTeW1ib2xzICAgICAgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKVxuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0W1BST1RPVFlQRV1cbiAgLCBVU0VfTkFUSVZFICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBRT2JqZWN0ICAgICAgICA9IGdsb2JhbC5RT2JqZWN0O1xuLy8gRG9uJ3QgdXNlIHNldHRlcnMgaW4gUXQgU2NyaXB0LCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMTczXG52YXIgc2V0dGVyID0gIVFPYmplY3QgfHwgIVFPYmplY3RbUFJPVE9UWVBFXSB8fCAhUU9iamVjdFtQUk9UT1RZUEVdLmZpbmRDaGlsZDtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gZFAodGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBkUChpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylkUChPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IGRQO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8pJGRlZmluZVByb3BlcnR5KE9QU3ltYm9scywga2V5LCBEKTtcbiAgYW5PYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBhbk9iamVjdChEKTtcbiAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlkUChpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gZFAoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSkpO1xuICBpZih0aGlzID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgaXQgID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybjtcbiAgdmFyIEQgPSBnT1BEKGl0LCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnT1BOKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4gJiYga2V5ICE9IE1FVEEpcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIElTX09QICA9IGl0ID09PSBPYmplY3RQcm90b1xuICAgICwgbmFtZXMgID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKXtcbiAgICBpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYgKElTX09QID8gaGFzKE9iamVjdFByb3RvLCBrZXkpIDogdHJ1ZSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighVVNFX05BVElWRSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZih0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvciEnKTtcbiAgICB2YXIgdGFnID0gdWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTtcbiAgICB2YXIgJHNldCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKHRoaXMgPT09IE9iamVjdFByb3RvKSRzZXQuY2FsbChPUFN5bWJvbHMsIHZhbHVlKTtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfTtcbiAgICBpZihERVNDUklQVE9SUyAmJiBzZXR0ZXIpc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7Y29uZmlndXJhYmxlOiB0cnVlLCBzZXQ6ICRzZXR9KTtcbiAgICByZXR1cm4gd3JhcCh0YWcpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sW1BST1RPVFlQRV0sICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiAgID0gJGRlZmluZVByb3BlcnR5O1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmYgPSBnT1BORXh0LmYgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmYgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuL19saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG5cbiAgd2tzRXh0LmYgPSBmdW5jdGlvbihuYW1lKXtcbiAgICByZXR1cm4gd3JhcCh3a3MobmFtZSkpO1xuICB9XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuZm9yKHZhciBzeW1ib2xzID0gKFxuICAvLyAxOS40LjIuMiwgMTkuNC4yLjMsIDE5LjQuMi40LCAxOS40LjIuNiwgMTkuNC4yLjgsIDE5LjQuMi45LCAxOS40LjIuMTAsIDE5LjQuMi4xMSwgMTkuNC4yLjEyLCAxOS40LjIuMTMsIDE5LjQuMi4xNFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLHNwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3Moc3ltYm9sc1tpKytdKTtcblxuZm9yKHZhciBzeW1ib2xzID0gJGtleXMod2tzLnN0b3JlKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrc0RlZmluZShzeW1ib2xzW2krK10pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnU3ltYm9sJywge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIGlmKGlzU3ltYm9sKGtleSkpcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICAgIHRocm93IFR5cGVFcnJvcihrZXkgKyAnIGlzIG5vdCBhIHN5bWJvbCEnKTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pKSwgJ0pTT04nLCB7XG4gIHN0cmluZ2lmeTogZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgICB2YXIgYXJncyA9IFtpdF1cbiAgICAgICwgaSAgICA9IDFcbiAgICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTsiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ2FzeW5jSXRlcmF0b3InKTsiLCJyZXF1aXJlKCcuL193a3MtZGVmaW5lJykoJ29ic2VydmFibGUnKTsiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGtpbm5lcmV0emluIG9uIDI5LzExLzIwMTYuXG4gKi9cblxuY2xhc3MgQmx1ZXByaW50QWN0aW9ucyB7XG4gICAgY29uc3RydWN0b3IodG9vbGJveCkge1xuICAgICAgICB0aGlzLnRvb2xib3ggPSB0b29sYm94O1xuICAgIH1cblxuICAgIGRvR2V0RnVsbEJsdWVwcmludERhdGEoYmx1ZXByaW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvb2xib3guZ2V0TWFuYWdlcigpLmRvR2V0KGAvYmx1ZXByaW50cy8ke2JsdWVwcmludC5pZH1gKTtcbiAgICB9XG5cbiAgICBkb0RlbGV0ZShibHVlcHJpbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9vbGJveC5nZXRNYW5hZ2VyKCkuZG9EZWxldGUoYC9ibHVlcHJpbnRzLyR7Ymx1ZXByaW50LmlkfWApXG4gICAgICAgICAgICAudGhlbigoKT0+dGhpcy5kb0RlbGV0ZUltYWdlKGJsdWVwcmludC5pZCkpO1xuICAgIH1cblxuICAgIGRvRGVwbG95KGJsdWVwcmludCwgZGVwbG95bWVudElkLCBpbnB1dHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9vbGJveC5nZXRNYW5hZ2VyKCkuZG9QdXQoYC9kZXBsb3ltZW50cy8ke2RlcGxveW1lbnRJZH1gLG51bGwse1xuICAgICAgICAgICAgJ2JsdWVwcmludF9pZCc6IGJsdWVwcmludC5pZCxcbiAgICAgICAgICAgIGlucHV0c1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkb1VwbG9hZChibHVlcHJpbnROYW1lLCBibHVlcHJpbnRGaWxlTmFtZSwgYmx1ZXByaW50VXJsLCBmaWxlLCBpbWFnZVVybCwgaW1hZ2UpIHtcbiAgICAgICAgdmFyIHBhcmFtcyA9IHt9O1xuICAgICAgICBjb25zdCBZQU1MX0VYVEVOU0lPTiA9ICcueWFtbCc7XG5cbiAgICAgICAgaWYgKCFfLmlzRW1wdHkoYmx1ZXByaW50RmlsZU5hbWUpKSB7XG4gICAgICAgICAgICBwYXJhbXNbJ2FwcGxpY2F0aW9uX2ZpbGVfbmFtZSddID0gXy5lbmRzV2l0aChibHVlcHJpbnRGaWxlTmFtZSwgWUFNTF9FWFRFTlNJT04pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBibHVlcHJpbnRGaWxlTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYmx1ZXByaW50RmlsZU5hbWUgKyBZQU1MX0VYVEVOU0lPTjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIV8uaXNFbXB0eShibHVlcHJpbnRVcmwpKSB7XG4gICAgICAgICAgICBwYXJhbXNbJ2JsdWVwcmludF9hcmNoaXZlX3VybCddID0gYmx1ZXByaW50VXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHByb21pc2U7XG4gICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICBwcm9taXNlID0gdGhpcy50b29sYm94LmdldE1hbmFnZXIoKS5kb1VwbG9hZChgL2JsdWVwcmludHMvJHtibHVlcHJpbnROYW1lfWAsIHBhcmFtcywgZmlsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlID0gdGhpcy50b29sYm94LmdldE1hbmFnZXIoKS5kb1B1dChgL2JsdWVwcmludHMvJHtibHVlcHJpbnROYW1lfWAsIHBhcmFtcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKCgpPT4gdGhpcy5kb1VwbG9hZEltYWdlKGJsdWVwcmludE5hbWUsIGltYWdlVXJsLCBpbWFnZSkpO1xuICAgIH1cblxuICAgIGRvVXBsb2FkSW1hZ2UoYmx1ZXByaW50SWQsIGltYWdlVXJsLCBpbWFnZSkge1xuICAgICAgICBpZiAoXy5pc0VtcHR5KGltYWdlVXJsKSAmJiAhaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwYXJhbXMgPSB7aW1hZ2VVcmx9O1xuICAgICAgICBpZiAoaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRvb2xib3guZ2V0RXh0ZXJuYWwoKS5kb1VwbG9hZChgL2JhL2ltYWdlLyR7Ymx1ZXByaW50SWR9YCwgcGFyYW1zLCBpbWFnZSwgXCJwb3N0XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9vbGJveC5nZXRFeHRlcm5hbCgpLmRvUG9zdChgL2JhL2ltYWdlLyR7Ymx1ZXByaW50SWR9YCwgcGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRvRGVsZXRlSW1hZ2UoYmx1ZXByaW50SWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9vbGJveC5nZXRFeHRlcm5hbCgpLmRvRGVsZXRlKGAvYmEvaW1hZ2UvJHtibHVlcHJpbnRJZH1gKTtcbiAgICB9XG5cbn1cblxuU3RhZ2UuZGVmaW5lQ29tbW9uKHtcbiAgICBuYW1lOiAnQmx1ZXByaW50QWN0aW9ucycsXG4gICAgY29tbW9uOiBCbHVlcHJpbnRBY3Rpb25zXG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkga2lubmVyZXR6aW4gb24gMDIvMDMvMjAxNy5cbiAqL1xuXG52YXIgY29uc3RzID0ge1xuICAgIEE6ICdhJyxcbiAgICBCOiAnYicsXG4gICAgQzogJ2MnLFxuICAgIEFCQzogXCJBQUFcIlxufTtcblxuU3RhZ2UuZGVmaW5lQ29tbW9uKHtcbiAgICBuYW1lOiAnc29tZUNvbnN0cycsXG4gICAgY29tbW9uOiBjb25zdHNcbn0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSBraW5uZXJldHppbiBvbiAwNS8xMC8yMDE2LlxuICovXG5cbmxldCBQcm9wVHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlcGxveUJsdWVwcmludE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IERlcGxveUJsdWVwcmludE1vZGFsLmluaXRpYWxTdGF0ZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgREVQTE9ZTUVOVF9JTlBVVF9DTEFTU05BTUUgPSAnZGVwbG95bWVudElucHV0JztcblxuICAgIHN0YXRpYyBpbml0aWFsU3RhdGUgPSB7XG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHt9LFxuICAgICAgICBkZXBsb3ltZW50TmFtZTogJycsXG4gICAgICAgIGRlcGxveW1lbnRJbnB1dHM6IFtdXG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgdG9vbGJveDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgICBvcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgICBibHVlcHJpbnQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgb25IaWRlOiBQcm9wVHlwZXMuZnVuY1xuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBvbkhpZGU6ICgpPT57fVxuICAgIH07XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMub3BlbiAmJiBuZXh0UHJvcHMub3Blbikge1xuICAgICAgICAgICAgbGV0IGRlcGxveW1lbnRJbnB1dHMgPSB7fTtcblxuICAgICAgICAgICAgXy5mb3JFYWNoKG5leHRQcm9wcy5ibHVlcHJpbnQucGxhbi5pbnB1dHMsXG4gICAgICAgICAgICAgICAgICAgICAgKGlucHV0T2JqLCBpbnB1dE5hbWUpID0+IGRlcGxveW1lbnRJbnB1dHNbaW5wdXROYW1lXSA9ICcnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLkRlcGxveUJsdWVwcmludE1vZGFsLmluaXRpYWxTdGF0ZSwgZGVwbG95bWVudElucHV0c30pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BcHByb3ZlICgpIHtcbiAgICAgICAgdGhpcy5fc3VibWl0RGVwbG95KCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkNhbmNlbCAoKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25IaWRlKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIF9zdWJtaXREZXBsb3koKSB7XG4gICAgICAgIGxldCBlcnJvcnMgPSB7fTtcbiAgICAgICAgY29uc3QgRU1QVFlfU1RSSU5HID0gJ1wiXCInO1xuXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5ibHVlcHJpbnQpIHtcbiAgICAgICAgICAgIGVycm9yc1tcImVycm9yXCJdID0gXCJCbHVlcHJpbnQgbm90IHNlbGVjdGVkXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5pc0VtcHR5KHRoaXMuc3RhdGUuZGVwbG95bWVudE5hbWUpKSB7XG4gICAgICAgICAgICBlcnJvcnNbXCJkZXBsb3ltZW50TmFtZVwiXT1cIlBsZWFzZSBwcm92aWRlIGRlcGxveW1lbnQgbmFtZVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRlcGxveW1lbnRJbnB1dHMgPSB7fTtcbiAgICAgICAgXy5mb3JFYWNoKHRoaXMucHJvcHMuYmx1ZXByaW50LnBsYW4uaW5wdXRzLCAoaW5wdXRPYmosIGlucHV0TmFtZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGlucHV0VmFsdWUgPSB0aGlzLnN0YXRlLmRlcGxveW1lbnRJbnB1dHNbaW5wdXROYW1lXTtcbiAgICAgICAgICAgIGlmIChfLmlzRW1wdHkoaW5wdXRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5pc05pbChpbnB1dE9iai5kZWZhdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcnNbaW5wdXROYW1lXSA9IGBQbGVhc2UgcHJvdmlkZSAke2lucHV0TmFtZX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXRWYWx1ZSA9PT0gRU1QVFlfU1RSSU5HKSB7XG4gICAgICAgICAgICAgICAgZGVwbG95bWVudElucHV0c1tpbnB1dE5hbWVdID0gJyc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlcGxveW1lbnRJbnB1dHNbaW5wdXROYW1lXSA9IGlucHV0VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghXy5pc0VtcHR5KGVycm9ycykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGlzYWJsZSB0aGUgZm9ybVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlfSk7XG5cbiAgICAgICAgdmFyIGFjdGlvbnMgPSBuZXcgU3RhZ2UuQ29tbW9uLkJsdWVwcmludEFjdGlvbnModGhpcy5wcm9wcy50b29sYm94KTtcbiAgICAgICAgYWN0aW9ucy5kb0RlcGxveSh0aGlzLnByb3BzLmJsdWVwcmludCwgdGhpcy5zdGF0ZS5kZXBsb3ltZW50TmFtZSwgZGVwbG95bWVudElucHV0cylcbiAgICAgICAgICAgIC50aGVuKCgvKmRlcGxveW1lbnQqLyk9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnRvb2xib3guZ2V0RXZlbnRCdXMoKS50cmlnZ2VyKCdkZXBsb3ltZW50czpyZWZyZXNoJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkhpZGUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZSwgZXJyb3JzOiB7ZXJyb3I6IGVyci5tZXNzYWdlfX0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2hhbmRsZUlucHV0Q2hhbmdlKHByb3h5LCBmaWVsZCkge1xuICAgICAgICBsZXQgZmllbGROYW1lVmFsdWUgPSBTdGFnZS5CYXNpYy5Gb3JtLmZpZWxkTmFtZVZhbHVlKGZpZWxkKTtcbiAgICAgICAgaWYgKGZpZWxkLmNsYXNzTmFtZSA9PT0gRGVwbG95Qmx1ZXByaW50TW9kYWwuREVQTE9ZTUVOVF9JTlBVVF9DTEFTU05BTUUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RlcGxveW1lbnRJbnB1dHM6IHsuLi50aGlzLnN0YXRlLmRlcGxveW1lbnRJbnB1dHMsIC4uLmZpZWxkTmFtZVZhbHVlfX0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShmaWVsZE5hbWVWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfc3RyaW5naWZ5KG9iamVjdCkge1xuICAgICAgICBpZiAoXy5pc09iamVjdChvYmplY3QpIHx8IF8uaXNBcnJheShvYmplY3QpIHx8IF8uaXNCb29sZWFuKG9iamVjdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmplY3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhvYmplY3QgfHwgJycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIge01vZGFsLCBJY29uLCBGb3JtLCBNZXNzYWdlLCBQb3B1cCwgSGVhZGVyLCBBcHByb3ZlQnV0dG9uLCBDYW5jZWxCdXR0b259ID0gU3RhZ2UuQmFzaWM7XG5cbiAgICAgICAgbGV0IGJsdWVwcmludCA9IE9iamVjdC5hc3NpZ24oe30se2lkOiAnJywgcGxhbjoge2lucHV0czoge319fSwgdGhpcy5wcm9wcy5ibHVlcHJpbnQpO1xuICAgICAgICBsZXQgZGVwbG95bWVudElucHV0cyA9IF8uc29ydEJ5KF8ubWFwKGJsdWVwcmludC5wbGFuLmlucHV0cywgKGlucHV0LCBuYW1lKSA9PiAoeyduYW1lJzogbmFtZSwgLi4uaW5wdXR9KSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhpbnB1dCA9PiAhXy5pc05pbChpbnB1dC5kZWZhdWx0KSksICduYW1lJ10pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TW9kYWwgb3Blbj17dGhpcy5wcm9wcy5vcGVufT5cbiAgICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwicm9ja2V0XCIvPiBEZXBsb3kgYmx1ZXByaW50IHtibHVlcHJpbnQuaWR9XG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG5cbiAgICAgICAgICAgICAgICA8TW9kYWwuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSBlcnJvcnM9e3RoaXMuc3RhdGUuZXJyb3JzfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLmRlcGxveW1lbnROYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCBuYW1lPSdkZXBsb3ltZW50TmFtZScgcGxhY2Vob2xkZXI9XCJEZXBsb3ltZW50IG5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRlcGxveW1lbnROYW1lfSBvbkNoYW5nZT17dGhpcy5faGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmx1ZXByaW50LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5EaXZpZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIHNpemU9XCJ0aW55XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXBsb3ltZW50IGlucHV0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlci5TdWJoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlIFwiXCIgZm9yIGFuIGVtcHR5IHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXIuU3ViaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRGl2aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsdWVwcmludC5pZCAmJiBfLmlzRW1wdHkoZGVwbG95bWVudElucHV0cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIGNvbnRlbnQ9XCJObyBpbnB1dHMgYXZhaWxhYmxlIGZvciB0aGUgYmx1ZXByaW50XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ubWFwKGRlcGxveW1lbnRJbnB1dHMsIChpbnB1dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybUlucHV0ID0gKCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IG5hbWU9e2lucHV0Lm5hbWV9IHBsYWNlaG9sZGVyPXtpbnB1dC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRlcGxveW1lbnRJbnB1dHNbaW5wdXQubmFtZV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5faGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17RGVwbG95Qmx1ZXByaW50TW9kYWwuREVQTE9ZTUVOVF9JTlBVVF9DTEFTU05BTUV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBrZXk9e2lucHV0Lm5hbWV9IGVycm9yPXt0aGlzLnN0YXRlLmVycm9yc1tpbnB1dC5uYW1lXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5wdXQubmFtZX0mbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5pc05pbChpbnB1dC5kZWZhdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8SWNvbiBuYW1lPSdhc3RlcmlzaycgY29sb3I9J3JlZCcgc2l6ZT0ndGlueScgY2xhc3NOYW1lPSdzdXBlcnNjcmlwdGVkJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV8uaXNOaWwoaW5wdXQuZGVmYXVsdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyA8UG9wdXAgdHJpZ2dlcj17Zm9ybUlucHV0KCl9IGhlYWRlcj1cIkRlZmF1bHQgdmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXt0aGlzLl9zdHJpbmdpZnkoaW5wdXQuZGVmYXVsdCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPSd0b3AgcmlnaHQnIHdpZGUgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmb3JtSW5wdXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxuXG4gICAgICAgICAgICAgICAgPE1vZGFsLkFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDxDYW5jZWxCdXR0b24gb25DbGljaz17dGhpcy5vbkNhbmNlbC5iaW5kKHRoaXMpfSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5sb2FkaW5nfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QXBwcm92ZUJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQXBwcm92ZS5iaW5kKHRoaXMpfSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5sb2FkaW5nfSBjb250ZW50PVwiRGVwbG95XCIgaWNvbj1cInJvY2tldFwiIGNvbG9yPVwiZ3JlZW5cIi8+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5BY3Rpb25zPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5TdGFnZS5kZWZpbmVDb21tb24oe1xuICAgIG5hbWU6ICdEZXBsb3lCbHVlcHJpbnRNb2RhbCcsXG4gICAgY29tbW9uOiBEZXBsb3lCbHVlcHJpbnRNb2RhbFxufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGtpbm5lcmV0emluIG9uIDE5LzEwLzIwMTYuXG4gKi9cblxuY2xhc3MgRGVwbG95bWVudEFjdGlvbnMge1xuICAgIGNvbnN0cnVjdG9yKHRvb2xib3gpIHtcbiAgICAgICAgdGhpcy50b29sYm94ID0gdG9vbGJveDtcbiAgICB9XG5cbiAgICBkb0dldChkZXBsb3ltZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvb2xib3guZ2V0TWFuYWdlcigpLmRvR2V0KGAvZGVwbG95bWVudHMvJHtkZXBsb3ltZW50LmlkfWApO1xuICAgIH1cblxuICAgIGRvRGVsZXRlKGRlcGxveW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9vbGJveC5nZXRNYW5hZ2VyKCkuZG9EZWxldGUoYC9kZXBsb3ltZW50cy8ke2RlcGxveW1lbnQuaWR9YCk7XG4gICAgfVxuXG4gICAgZG9Gb3JjZURlbGV0ZShkZXBsb3ltZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvb2xib3guZ2V0TWFuYWdlcigpLmRvRGVsZXRlKGAvZGVwbG95bWVudHMvJHtkZXBsb3ltZW50LmlkfWAsIHtpZ25vcmVfbGl2ZV9ub2RlczogJ3RydWUnfSk7XG4gICAgfVxuXG4gICAgZG9DYW5jZWwoZXhlY3V0aW9uLGFjdGlvbikge1xuICAgICAgICByZXR1cm4gdGhpcy50b29sYm94LmdldE1hbmFnZXIoKS5kb1Bvc3QoYC9leGVjdXRpb25zLyR7ZXhlY3V0aW9uLmlkfWAsIG51bGwsIHtcbiAgICAgICAgICAgICdkZXBsb3ltZW50X2lkJzogZXhlY3V0aW9uLmRlcGxveW1lbnRfaWQsXG4gICAgICAgICAgICAnYWN0aW9uJzogYWN0aW9uXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRvRXhlY3V0ZShkZXBsb3ltZW50LHdvcmtmbG93LHBhcmFtcykge1xuICAgICAgICByZXR1cm4gdGhpcy50b29sYm94LmdldE1hbmFnZXIoKS5kb1Bvc3QoJy9leGVjdXRpb25zJyxudWxsLHtcbiAgICAgICAgICAgICdkZXBsb3ltZW50X2lkJzogZGVwbG95bWVudC5pZCxcbiAgICAgICAgICAgICd3b3JrZmxvd19pZCcgOiB3b3JrZmxvdy5uYW1lLFxuICAgICAgICAgICAgcGFyYW1ldGVyczogcGFyYW1zXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRvVXBkYXRlKGRlcGxveW1lbnROYW1lLCBhcHBsaWNhdGlvbkZpbGVOYW1lLCBibHVlcHJpbnRBcmNoaXZlVXJsLCBkZWZhdWx0V29ya2Zsb3csXG4gICAgICAgICAgICAgaW5zdGFsbFdvcmtmbG93LCB1bmluc3RhbGxXb3JrZmxvdywgd29ya2Zsb3dJZCwgYmx1ZXByaW50QXJjaGl2ZSwgaW5wdXRzKSB7XG4gICAgICAgIHZhciBwYXJhbXMgPSB7fTtcbiAgICAgICAgaWYgKCFfLmlzRW1wdHkoYXBwbGljYXRpb25GaWxlTmFtZSkpIHtcbiAgICAgICAgICAgIHBhcmFtc1snYXBwbGljYXRpb25fZmlsZV9uYW1lJ10gPSBhcHBsaWNhdGlvbkZpbGVOYW1lICsgXCIueWFtbFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghXy5pc0VtcHR5KGJsdWVwcmludEFyY2hpdmVVcmwpKSB7XG4gICAgICAgICAgICBwYXJhbXNbJ2JsdWVwcmludF9hcmNoaXZlX3VybCddID0gYmx1ZXByaW50QXJjaGl2ZVVybDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmYXVsdFdvcmtmbG93KSB7XG4gICAgICAgICAgICBwYXJhbXNbJ3NraXBfaW5zdGFsbCddID0gIWluc3RhbGxXb3JrZmxvdztcbiAgICAgICAgICAgIHBhcmFtc1snc2tpcF91bmluc3RhbGwnXSA9ICF1bmluc3RhbGxXb3JrZmxvdztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmFtc1snd29ya2Zsb3dfaWQnXSA9IHdvcmtmbG93SWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmx1ZXByaW50QXJjaGl2ZSB8fCBpbnB1dHMpIHtcbiAgICAgICAgICAgIHZhciBmaWxlcyA9IHt9O1xuICAgICAgICAgICAgaWYgKGJsdWVwcmludEFyY2hpdmUpIHtcbiAgICAgICAgICAgICAgICBmaWxlc1snYmx1ZXByaW50X2FyY2hpdmUnXSA9IGJsdWVwcmludEFyY2hpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5wdXRzKSB7XG4gICAgICAgICAgICAgICAgZmlsZXNbJ2lucHV0cyddID0gaW5wdXRzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b29sYm94LmdldE1hbmFnZXIoKS5kb1VwbG9hZChgL2RlcGxveW1lbnQtdXBkYXRlcy8ke2RlcGxveW1lbnROYW1lfS91cGRhdGUvaW5pdGlhdGVgLCBwYXJhbXMsIGZpbGVzLCAncG9zdCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9vbGJveC5nZXRNYW5hZ2VyKCkuZG9Qb3N0KGAvZGVwbG95bWVudC11cGRhdGVzLyR7ZGVwbG95bWVudE5hbWV9L3VwZGF0ZS9pbml0aWF0ZWAsIHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuU3RhZ2UuZGVmaW5lQ29tbW9uKHtcbiAgICBuYW1lOiAnRGVwbG95bWVudEFjdGlvbnMnLFxuICAgIGNvbW1vbjogRGVwbG95bWVudEFjdGlvbnNcbn0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSBraW5uZXJldHppbiBvbiAxOS8xMC8yMDE2LlxuICovXG5cbmxldCBQcm9wVHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4ZWN1dGVEZXBsb3ltZW50TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMsY29udGV4dCkge1xuICAgICAgICBzdXBlcihwcm9wcyxjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gRXhlY3V0ZURlcGxveW1lbnRNb2RhbC5pbml0aWFsU3RhdGUocHJvcHMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbml0aWFsU3RhdGUgPSAocHJvcHMpID0+IHtcblxuICAgICAgICB2YXIgcGFyYW1zID0ge307XG4gICAgICAgIF8uZWFjaChwcm9wcy53b3JrZmxvdy5wYXJhbWV0ZXJzLChwYXJhbSwgbmFtZSk9PntcbiAgICAgICAgICAgIHBhcmFtc1tuYW1lXSA9IFN0YWdlLkNvbW1vbi5Kc29uVXRpbHMuc3RyaW5naWZ5KHBhcmFtLmRlZmF1bHQpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlcnJvcnM6IHt9LFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBwYXJhbXNcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHRvb2xib3g6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgICAgZGVwbG95bWVudDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgICB3b3JrZmxvdzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgICBvbkhpZGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLm9wZW4gJiYgbmV4dFByb3BzLm9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoRXhlY3V0ZURlcGxveW1lbnRNb2RhbC5pbml0aWFsU3RhdGUodGhpcy5wcm9wcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BcHByb3ZlICgpIHtcbiAgICAgICAgdGhpcy5fc3VibWl0RXhlY3V0ZSgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgb25DYW5jZWwgKCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBfc3VibWl0RXhlY3V0ZSAoKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5kZXBsb3ltZW50IHx8ICF0aGlzLnByb3BzLndvcmtmbG93KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnM6IHtlcnJvcjogJ01pc3Npbmcgd29ya2Zsb3cgb3IgZGVwbG95bWVudCd9fSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiB0cnVlfSk7XG5cbiAgICAgICAgdmFyIGFjdGlvbnMgPSBuZXcgU3RhZ2UuQ29tbW9uLkRlcGxveW1lbnRBY3Rpb25zKHRoaXMucHJvcHMudG9vbGJveCk7XG4gICAgICAgIGFjdGlvbnMuZG9FeGVjdXRlKHRoaXMucHJvcHMuZGVwbG95bWVudCwgdGhpcy5wcm9wcy53b3JrZmxvdywgdGhpcy5zdGF0ZS5wYXJhbXMpLnRoZW4oKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlfSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy50b29sYm94LmdldEV2ZW50QnVzKCkudHJpZ2dlcignZXhlY3V0aW9uczpyZWZyZXNoJyk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZSwgZXJyb3JzOiB7ZXJyb3I6IGVyci5tZXNzYWdlfX0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50LCBmaWVsZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtwYXJhbXM6IHsuLi50aGlzLnN0YXRlLnBhcmFtcywgLi4uU3RhZ2UuQmFzaWMuRm9ybS5maWVsZE5hbWVWYWx1ZShmaWVsZCl9fSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIge01vZGFsLCBJY29uLCBGb3JtLCBNZXNzYWdlLCBJbnB1dCwgQXBwcm92ZUJ1dHRvbiwgQ2FuY2VsQnV0dG9ufSA9IFN0YWdlLkJhc2ljO1xuXG4gICAgICAgIHZhciB3b3JrZmxvdyA9IE9iamVjdC5hc3NpZ24oe30se25hbWU6XCJcIiwgcGFyYW1ldGVyczpbXX0sIHRoaXMucHJvcHMud29ya2Zsb3cpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TW9kYWwgb3Blbj17dGhpcy5wcm9wcy5vcGVufT5cbiAgICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwicm9hZFwiLz4gRXhlY3V0ZSB3b3JrZmxvdyB7d29ya2Zsb3cubmFtZX1cbiAgICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cblxuICAgICAgICAgICAgICAgIDxNb2RhbC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IGVycm9ycz17dGhpcy5zdGF0ZS5lcnJvcnN9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uaXNFbXB0eSh3b3JrZmxvdy5wYXJhbWV0ZXJzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UgY29udGVudD1cIk5vIHBhcmFtZXRlcnMgYXZhaWxhYmxlIGZvciB0aGUgZXhlY3V0aW9uXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5tYXAod29ya2Zsb3cucGFyYW1ldGVycywocGFyYW1ldGVyLG5hbWUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBrZXk9e25hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCB0aXRsZT17cGFyYW1ldGVyLmRlc2NyaXB0aW9uIHx8IG5hbWUgfT57bmFtZX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBuYW1lPXtuYW1lfSB2YWx1ZT17dGhpcy5zdGF0ZS5wYXJhbXNbbmFtZV19IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxuXG4gICAgICAgICAgICAgICAgPE1vZGFsLkFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDxDYW5jZWxCdXR0b24gb25DbGljaz17dGhpcy5vbkNhbmNlbC5iaW5kKHRoaXMpfSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5sb2FkaW5nfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QXBwcm92ZUJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQXBwcm92ZS5iaW5kKHRoaXMpfSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5sb2FkaW5nfSBjb250ZW50PVwiRXhlY3V0ZVwiIGljb249XCJyb2NrZXRcIiBjb2xvcj1cImdyZWVuXCIvPlxuICAgICAgICAgICAgICAgIDwvTW9kYWwuQWN0aW9ucz5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuU3RhZ2UuZGVmaW5lQ29tbW9uKHtcbiAgICBuYW1lOiAnRXhlY3V0ZURlcGxveW1lbnRNb2RhbCcsXG4gICAgY29tbW9uOiBFeGVjdXRlRGVwbG95bWVudE1vZGFsXG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgamFrdWJuaWV6Z29kYSBvbiAyNy8wMS8yMDE3LlxuICovXG5cbmNsYXNzIEV4ZWN1dGlvbkFjdGlvbnMge1xuICAgIGNvbnN0cnVjdG9yKHRvb2xib3gpIHtcbiAgICAgICAgdGhpcy50b29sYm94ID0gdG9vbGJveDtcbiAgICB9XG5cbiAgICBkb0NhbmNlbChleGVjdXRpb24sYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvb2xib3guZ2V0TWFuYWdlcigpLmRvUG9zdChgL2V4ZWN1dGlvbnMvJHtleGVjdXRpb24uaWR9YCwgbnVsbCwge1xuICAgICAgICAgICAgJ2RlcGxveW1lbnRfaWQnOiBleGVjdXRpb24uZGVwbG95bWVudF9pZCxcbiAgICAgICAgICAgICdhY3Rpb24nOiBhY3Rpb25cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5TdGFnZS5kZWZpbmVDb21tb24oe1xuICAgIG5hbWU6ICdFeGVjdXRpb25BY3Rpb25zJyxcbiAgICBjb21tb246IEV4ZWN1dGlvbkFjdGlvbnNcbn0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSBqYWt1Ym5pZXpnb2RhIG9uIDI3LzAxLzIwMTcuXG4gKi9cblxubGV0IFByb3BUeXBlcyA9IFJlYWN0LlByb3BUeXBlcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhlY3V0aW9uU3RhdHVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNhbmNlbENsaWNrZWQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBpdGVtOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICAgIG9uQ2FuY2VsRXhlY3V0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgICAgICBzaG93SW5hY3RpdmVBc0xpbms6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIF9hY3Rpb25DbGljayhldmVudCwge25hbWV9KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NhbmNlbENsaWNrZWQ6IHRydWV9KTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNhbmNlbEV4ZWN1dGlvbih0aGlzLnByb3BzLml0ZW0sIG5hbWUpO1xuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGxldCB7UG9wdXBNZW51LCBNZW51LCBMYWJlbCwgSWNvbn0gPSBTdGFnZS5CYXNpYztcbiAgICAgICAgbGV0IHtFeGVjdXRpb25VdGlsc30gPSBTdGFnZS5Db21tb247XG5cbiAgICAgICAgbGV0IGV4ZWN1dGlvbiA9IHRoaXMucHJvcHMuaXRlbTtcblxuICAgICAgICBpZiAoRXhlY3V0aW9uVXRpbHMuaXNBY3RpdmVFeGVjdXRpb24oZXhlY3V0aW9uKSkge1xuICAgICAgICAgICAgbGV0IGFjdGl2ZUV4ZWN1dGlvblN0YXR1cyA9IGV4ZWN1dGlvbi5zdGF0dXM7XG4gICAgICAgICAgICBsZXQgY2FuY2VsQ2xpY2tlZCA9IHRoaXMuc3RhdGUuY2FuY2VsQ2xpY2tlZDtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJzcGlubmVyXCIgbG9hZGluZyAvPlxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZlRXhlY3V0aW9uU3RhdHVzfVxuICAgICAgICAgICAgICAgICAgICA8UG9wdXBNZW51IGRpc2FibGVkPXtjYW5jZWxDbGlja2VkfSBpY29uPSdkZWxldGUnID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51IHBvaW50aW5nIHZlcnRpY2FsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gY29udGVudD0nQ2FuY2VsJyBuYW1lPXtFeGVjdXRpb25VdGlscy5DQU5DRUxfQUNUSU9OfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fYWN0aW9uQ2xpY2suYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gY29udGVudD0nRm9yY2UgQ2FuY2VsJyBuYW1lPXtFeGVjdXRpb25VdGlscy5GT1JDRV9DQU5DRUxfQUNUSU9OfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5fYWN0aW9uQ2xpY2suYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgICAgICAgICAgICA8L1BvcHVwTWVudT5cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGluYWN0aXZlRXhlY3V0aW9uU3RhdHVzXG4gICAgICAgICAgICAgICAgPSB0aGlzLnByb3BzLnNob3dJbmFjdGl2ZUFzTGluayA/ICg8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+e2V4ZWN1dGlvbi5zdGF0dXN9PC9hPikgOiBleGVjdXRpb24uc3RhdHVzO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TGFiZWw+e2luYWN0aXZlRXhlY3V0aW9uU3RhdHVzfTwvTGFiZWw+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG59XG5cblN0YWdlLmRlZmluZUNvbW1vbih7XG4gICAgbmFtZTogJ0V4ZWN1dGlvblN0YXR1cycsXG4gICAgY29tbW9uOiBFeGVjdXRpb25TdGF0dXNcbn0pOyIsIi8qKlxuICogQ3JlYXRlZCBieSBqYWt1Ym5pZXpnb2RhIG9uIDMxLzAxLzIwMTcuXG4gKi9cblxuY2xhc3MgRXhlY3V0aW9uVXRpbHMge1xuICAgIHN0YXRpYyBDQU5DRUxfQUNUSU9OID0gJ2NhbmNlbCc7XG4gICAgc3RhdGljIEZPUkNFX0NBTkNFTF9BQ1RJT04gPSAnZm9yY2UtY2FuY2VsJztcblxuICAgIHN0YXRpYyBpc0FjdGl2ZUV4ZWN1dGlvbihleGVjdXRpb24pIHtcbiAgICAgICAgY29uc3QgRVhFQ1VUSU9OX1NUQVRFUyA9IFsgJ3Rlcm1pbmF0ZWQnLCAnZmFpbGVkJywgJ2NhbmNlbGxlZCcsICdwZW5kaW5nJywgJ3N0YXJ0ZWQnLCAnY2FuY2VsbGluZycsICdmb3JjZV9jYW5jZWxsaW5nJyBdO1xuICAgICAgICBjb25zdCBFTkRfRVhFQ1VUSU9OX1NUQVRFUyA9IFsgJ3Rlcm1pbmF0ZWQnLCAnZmFpbGVkJywgJ2NhbmNlbGxlZCcgXTtcbiAgICAgICAgY29uc3QgQUNUSVZFX0VYRUNVVElPTl9TVEFURVMgPSBfLmRpZmZlcmVuY2UoRVhFQ1VUSU9OX1NUQVRFUywgRU5EX0VYRUNVVElPTl9TVEFURVMpO1xuXG4gICAgICAgIHJldHVybiBfLmluY2x1ZGVzKEFDVElWRV9FWEVDVVRJT05fU1RBVEVTLCBleGVjdXRpb24uc3RhdHVzKTtcbiAgICB9XG59O1xuXG5TdGFnZS5kZWZpbmVDb21tb24oe1xuICAgIG5hbWU6ICdFeGVjdXRpb25VdGlscycsXG4gICAgY29tbW9uOiBFeGVjdXRpb25VdGlsc1xufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpha3VibmllemdvZGEgb24gMTYvMDMvMjAxNy5cbiAqL1xuXG5jbGFzcyBJbmZsdXhBY3Rpb25zIHtcbiAgICBjb25zdHJ1Y3Rvcih0b29sYm94KSB7XG4gICAgICAgIHRoaXMudG9vbGJveCA9IHRvb2xib3g7XG4gICAgICAgIHRoaXMubWFuYWdlcklwID0gdG9vbGJveC5nZXRNYW5hZ2VyKCkuZ2V0SXAoKTtcbiAgICB9XG5cbiAgICBkb0dldE1ldHJpYyhkZXBsb3ltZW50SWQsIG1ldHJpYywgZnJvbSwgdG8sIHRpbWVHcm91cCkge1xuICAgICAgICBsZXQgcGFyYW1zID0ge307XG4gICAgICAgIGlmICghXy5pc0VtcHR5KGZyb20pKSB7XG4gICAgICAgICAgICBwYXJhbXMuZnJvbSA9IGZyb207XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFfLmlzRW1wdHkodG8pKSB7XG4gICAgICAgICAgICBwYXJhbXMudG8gPSB0bztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIV8uaXNFbXB0eSh0aW1lR3JvdXApKSB7XG4gICAgICAgICAgICBwYXJhbXMudGltZUdyb3VwID0gdGltZUdyb3VwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudG9vbGJveC5nZXRFeHRlcm5hbCgpLmRvR2V0KGAvbW9uaXRvci9ieU1ldHJpYy8ke3RoaXMubWFuYWdlcklwfS8ke2RlcGxveW1lbnRJZH0vJHttZXRyaWN9YCwgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBkb0dldE1ldHJpY3MoZGVwbG95bWVudElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvb2xib3guZ2V0RXh0ZXJuYWwoKS5kb0dldChgL21vbml0b3IvbWV0cmljcy8ke3RoaXMubWFuYWdlcklwfS8ke2RlcGxveW1lbnRJZH1gKTtcbiAgICB9XG5cbiAgICBkb1J1blF1ZXJ5KHF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvb2xib3guZ2V0RXh0ZXJuYWwoKS5kb0dldChgL21vbml0b3IvcXVlcnkvJHt0aGlzLm1hbmFnZXJJcH1gLCB7cTogcXVlcnl9KTtcbiAgICB9XG59XG5cblN0YWdlLmRlZmluZUNvbW1vbih7XG4gICAgbmFtZTogJ0luZmx1eEFjdGlvbnMnLFxuICAgIGNvbW1vbjogSW5mbHV4QWN0aW9uc1xufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpha3VibmllemdvZGEgb24gMDMvMDMvMjAxNy5cbiAqL1xuXG5jbGFzcyBKc29uVXRpbHMge1xuICAgIHN0YXRpYyBzdHJpbmdpZnkodmFsdWUsIGluZGVudGVkID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKF8uaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHN0cmluZ2lmaWVkVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN0cmluZ2lmaWVkVmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSwgbnVsbCwgaW5kZW50ZWQgPyAyIDogMCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYENhbm5vdCBwYXJzZSB2YWx1ZSAnJHt2YWx1ZX0nLiBgLCBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfLnRyaW0oc3RyaW5naWZpZWRWYWx1ZSwgJ1wiJyk7XG4gICAgfVxufVxuXG5TdGFnZS5kZWZpbmVDb21tb24oe1xuICAgIG5hbWU6ICdKc29uVXRpbHMnLFxuICAgIGNvbW1vbjogSnNvblV0aWxzXG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkga2lubmVyZXR6aW4gb24gMDIvMDMvMjAxNy5cbiAqL1xuXG52YXIgVGltZUNvbnN0cyA9IHtcbiAgICBNQVhfVElNRV9SRVNPTFVUSU9OX1ZBTFVFOiAxMDAwLFxuICAgIE1JTl9USU1FX1JFU09MVVRJT05fVkFMVUU6IDEsXG4gICAgVElNRV9SRVNPTFVUSU9OX1VOSVRTOiBbXG4gICAgICAgIHtuYW1lOiAnbWljcm9zZWNvbmRzJywgdGV4dDogJ21pY3Jvc2Vjb25kcycsIHZhbHVlOiAndSd9LFxuICAgICAgICB7bmFtZTogJ21pbGxpc2Vjb25kcycsIHRleHQ6ICdtaWxsaXNlY29uZHMnLCB2YWx1ZTogJ21zJ30sXG4gICAgICAgIHtuYW1lOiAnc2Vjb25kcycsIHRleHQ6ICdzZWNvbmRzJywgdmFsdWU6ICdzJ30sXG4gICAgICAgIHtuYW1lOiAnbWludXRlcycsIHRleHQ6ICdtaW51dGVzJywgdmFsdWU6ICdtJ30sXG4gICAgICAgIHtuYW1lOiAnaG91cnMnLCB0ZXh0OiAnaG91cnMnLCB2YWx1ZTogJ2gnfSxcbiAgICAgICAge25hbWU6ICdkYXlzJywgdGV4dDogJ2RheXMnLCB2YWx1ZTogJ2QnfSxcbiAgICAgICAge25hbWU6ICd3ZWVrcycsIHRleHQ6ICd3ZWVrcycsIHZhbHVlOiAndyd9XG4gICAgXVxufTtcblxuU3RhZ2UuZGVmaW5lQ29tbW9uKHtcbiAgICBuYW1lOiAnVGltZUNvbnN0cycsXG4gICAgY29tbW9uOiBUaW1lQ29uc3RzXG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgcHBvc2VsIG9uIDE4LzAxLzIwMTcuXG4gKi9cblxubGV0IFByb3BUeXBlcyA9IFJlYWN0LlByb3BUeXBlcztcblxuY29uc3QgREVGQVVMVF9XT1JLRkxPVyA9IFwiZGVmYXVsdFwiO1xuY29uc3QgQ1VTVE9NX1dPUktGTE9XID0gXCJjdXN0b21cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBkYXRlRGVwbG95bWVudE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFVwZGF0ZURlcGxveW1lbnRNb2RhbC5pbml0aWFsU3RhdGU7XG4gICAgfVxuXG4gICAgc3RhdGljIGluaXRpYWxTdGF0ZSA9IHtcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIHJ1bldvcmtmbG93OiBERUZBVUxUX1dPUktGTE9XLFxuICAgICAgICBpbnN0YWxsV29ya2Zsb3c6IHRydWUsXG4gICAgICAgIHVuaW5zdGFsbFdvcmtmbG93OiB0cnVlLFxuICAgICAgICBhcHBsaWNhdGlvbkZpbGVOYW1lOiBcIlwiLFxuICAgICAgICBibHVlcHJpbnRVcmw6IFwiXCIsXG4gICAgICAgIHdvcmtmbG93SWQ6IFwiXCIsXG4gICAgICAgIGVycm9yczoge31cbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB0b29sYm94OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICAgIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgICAgIGRlcGxveW1lbnQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgb25IaWRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGlmICghdGhpcy5wcm9wcy5vcGVuICYmIG5leHRQcm9wcy5vcGVuKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnMuYmx1ZXByaW50RmlsZSAmJiB0aGlzLnJlZnMuYmx1ZXByaW50RmlsZS5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5yZWZzLmlucHV0c0ZpbGUgJiYgdGhpcy5yZWZzLmlucHV0c0ZpbGUucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoVXBkYXRlRGVwbG95bWVudE1vZGFsLmluaXRpYWxTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFwcHJvdmUgKCkge1xuICAgICAgICB0aGlzLl9zdWJtaXRVcGRhdGUoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIG9uQ2FuY2VsICgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkhpZGUoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgX3N1Ym1pdFVwZGF0ZSgpIHtcbiAgICAgICAgbGV0IGJsdWVwcmludEZpbGUgPSB0aGlzLnJlZnMuYmx1ZXByaW50RmlsZS5maWxlKCk7XG4gICAgICAgIGxldCBpbnB1dHNGaWxlID0gdGhpcy5yZWZzLmlucHV0c0ZpbGUuZmlsZSgpO1xuXG4gICAgICAgIGxldCBlcnJvcnMgPSB7fTtcbiAgICAgICAgaWYgKF8uaXNFbXB0eSh0aGlzLnN0YXRlLmJsdWVwcmludFVybCkgJiYgIWJsdWVwcmludEZpbGUpIHtcbiAgICAgICAgICAgIGVycm9yc1tcImJsdWVwcmludFVybFwiXT1cIlBsZWFzZSBzZWxlY3QgYmx1ZXByaW50IGZpbGUgb3IgdXJsXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIV8uaXNFbXB0eSh0aGlzLnN0YXRlLmJsdWVwcmludFVybCkgJiYgYmx1ZXByaW50RmlsZSkge1xuICAgICAgICAgICAgZXJyb3JzW1wiYmx1ZXByaW50VXJsXCJdPVwiRWl0aGVyIGJsdWVwcmludCBmaWxlIG9yIHVybCBtdXN0IGJlIHNlbGVjdGVkLCBub3QgYm90aFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucnVuV29ya2Zsb3cgPT09IENVU1RPTV9XT1JLRkxPVyAmJiBfLmlzRW1wdHkodGhpcy5zdGF0ZS53b3JrZmxvd0lkKSkge1xuICAgICAgICAgICAgZXJyb3JzW1wid29ya2Zsb3dJZFwiXT1cIlBsZWFzZSBwcm92aWRlIHdvcmtmbG93IGlkXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIV8uaXNFbXB0eShlcnJvcnMpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgICAvLyBEaXNhYmxlIHRoZSBmb3JtXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWV9KTtcblxuICAgICAgICB2YXIgYWN0aW9ucyA9IG5ldyBTdGFnZS5Db21tb24uRGVwbG95bWVudEFjdGlvbnModGhpcy5wcm9wcy50b29sYm94KTtcbiAgICAgICAgYWN0aW9ucy5kb1VwZGF0ZSh0aGlzLnByb3BzLmRlcGxveW1lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hcHBsaWNhdGlvbkZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYmx1ZXByaW50VXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucnVuV29ya2Zsb3cgPT09IERFRkFVTFRfV09SS0ZMT1csXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbnN0YWxsV29ya2Zsb3csXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS51bmluc3RhbGxXb3JrZmxvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLndvcmtmbG93SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgYmx1ZXByaW50RmlsZSwgaW5wdXRzRmlsZSkudGhlbigoKT0+e1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9vbGJveC5yZWZyZXNoKCk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzOiB7ZXJyb3I6IGVyci5tZXNzYWdlfSwgbG9hZGluZzogZmFsc2V9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2hhbmRsZUlucHV0Q2hhbmdlKHByb3h5LCBmaWVsZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFN0YWdlLkJhc2ljLkZvcm0uZmllbGROYW1lVmFsdWUoZmllbGQpKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciB7TW9kYWwsIEljb24sIEZvcm0sIEFwcHJvdmVCdXR0b24sIENhbmNlbEJ1dHRvbn0gPSBTdGFnZS5CYXNpYztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vZGFsIG9wZW49e3RoaXMucHJvcHMub3Blbn0+XG4gICAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImVkaXRcIi8+IFVwZGF0ZSBkZXBsb3ltZW50IHt0aGlzLnByb3BzLmRlcGxveW1lbnQuaWR9XG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG5cbiAgICAgICAgICAgICAgICA8TW9kYWwuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSBlcnJvcnM9e3RoaXMuc3RhdGUuZXJyb3JzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIHdpZHRoPVwiOVwiIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5ibHVlcHJpbnRVcmx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIlVSTFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmV3IGJsdWVwcmludCB1cmxcIiBuYW1lPVwiYmx1ZXByaW50VXJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmx1ZXByaW50VXJsfSBvbkNoYW5nZT17dGhpcy5faGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCB3aWR0aD1cIjFcIiBzdHlsZT17e3Bvc2l0aW9uOidyZWxhdGl2ZSd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSB2ZXJ0aWNhbCBkaXZpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgd2lkdGg9XCI4XCIgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLmJsdWVwcmludFVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpbGUgcGxhY2Vob2xkZXI9XCJTZWxlY3QgbmV3IGJsdWVwcmludCBmaWxlXCIgbmFtZT1cImJsdWVwcmludEZpbGVcIiByZWY9XCJibHVlcHJpbnRGaWxlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmlsZSBwbGFjZWhvbGRlcj1cIlNlbGVjdCBpbnB1dHMgZmlsZVwiIG5hbWU9XCJpbnB1dHNGaWxlXCIgcmVmPVwiaW5wdXRzRmlsZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgbmFtZT0nYXBwbGljYXRpb25GaWxlTmFtZScgcGxhY2Vob2xkZXI9XCJCbHVlcHJpbnQgZmlsZW5hbWUgZS5nLiBibHVlcHJpbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFwcGxpY2F0aW9uRmlsZU5hbWV9IG9uQ2hhbmdlPXt0aGlzLl9oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkRpdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uUmFkaW8gbGFiZWw9XCJSdW4gZGVmYXVsdCB3b3JrZmxvd1wiIG5hbWU9XCJydW5Xb3JrZmxvd1wiIGNoZWNrZWQ9e3RoaXMuc3RhdGUucnVuV29ya2Zsb3cgPT09IERFRkFVTFRfV09SS0ZMT1d9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX2hhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9IHZhbHVlPXtERUZBVUxUX1dPUktGTE9XfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRGl2aWRlcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ2hlY2tib3ggbGFiZWw9XCJSdW4gaW5zdGFsbCB3b3JrZmxvdyBvbiBhZGRlZCBub2Rlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImluc3RhbGxXb3JrZmxvd1wiIGRpc2FibGVkPXt0aGlzLnN0YXRlLnJ1bldvcmtmbG93ICE9PSBERUZBVUxUX1dPUktGTE9XfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuaW5zdGFsbFdvcmtmbG93fSBvbkNoYW5nZT17dGhpcy5faGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5DaGVja2JveCBsYWJlbD1cIlJ1biB1bmluc3RhbGwgd29ya2Zsb3cgb24gcmVtb3ZlZCBub2Rlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVuaW5zdGFsbFdvcmtmbG93XCIgZGlzYWJsZWQ9e3RoaXMuc3RhdGUucnVuV29ya2Zsb3cgIT09IERFRkFVTFRfV09SS0ZMT1d9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS51bmluc3RhbGxXb3JrZmxvd30gb25DaGFuZ2U9e3RoaXMuX2hhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRGl2aWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5SYWRpbyBsYWJlbD1cIlJ1biBjdXN0b20gd29ya2Zsb3dcIiBuYW1lPVwicnVuV29ya2Zsb3dcIiBjaGVja2VkPXt0aGlzLnN0YXRlLnJ1bldvcmtmbG93ID09PSBDVVNUT01fV09SS0ZMT1d9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX2hhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9IHZhbHVlPXtDVVNUT01fV09SS0ZMT1d9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5EaXZpZGVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMud29ya2Zsb3dJZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgbmFtZT0nd29ya2Zsb3dJZCcgcGxhY2Vob2xkZXI9XCJXb3JrZmxvdyBJRFwiIGRpc2FibGVkPXt0aGlzLnN0YXRlLnJ1bldvcmtmbG93ICE9PSBDVVNUT01fV09SS0ZMT1d9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUud29ya2Zsb3dJZH0gb25DaGFuZ2U9e3RoaXMuX2hhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgIDwvTW9kYWwuQ29udGVudD5cblxuICAgICAgICAgICAgICAgIDxNb2RhbC5BY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICA8Q2FuY2VsQnV0dG9uIG9uQ2xpY2s9e3RoaXMub25DYW5jZWwuYmluZCh0aGlzKX0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZ30gLz5cbiAgICAgICAgICAgICAgICAgICAgPEFwcHJvdmVCdXR0b24gb25DbGljaz17dGhpcy5vbkFwcHJvdmUuYmluZCh0aGlzKX0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZ30gY29udGVudD1cIlVwZGF0ZVwiIGljb249XCJlZGl0XCIgY29sb3I9XCJncmVlblwiIC8+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5BY3Rpb25zPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5TdGFnZS5kZWZpbmVDb21tb24oe1xuICAgIG5hbWU6ICdVcGRhdGVEZXBsb3ltZW50TW9kYWwnLFxuICAgIGNvbW1vbjogVXBkYXRlRGVwbG95bWVudE1vZGFsXG59KTtcbiJdfQ==
