(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":15}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":16}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":17}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":18}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":19}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":20}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":21}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":22}],9:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],10:[function(require,module,exports){
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
},{"../core-js/object/define-property":3}],11:[function(require,module,exports){
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
},{"../core-js/object/assign":1}],12:[function(require,module,exports){
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
},{"../core-js/object/create":2,"../core-js/object/set-prototype-of":5,"../helpers/typeof":14}],13:[function(require,module,exports){
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
},{"../helpers/typeof":14}],14:[function(require,module,exports){
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
},{"../core-js/symbol":7,"../core-js/symbol/iterator":8}],15:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":30,"../../modules/es6.object.assign":96}],16:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};
},{"../../modules/_core":30,"../../modules/es6.object.create":97}],17:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":30,"../../modules/es6.object.define-property":98}],18:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;
},{"../../modules/_core":30,"../../modules/es6.object.get-prototype-of":99}],19:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;
},{"../../modules/_core":30,"../../modules/es6.object.set-prototype-of":100}],20:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.promise');
module.exports = require('../modules/_core').Promise;
},{"../modules/_core":30,"../modules/es6.object.to-string":101,"../modules/es6.promise":102,"../modules/es6.string.iterator":103,"../modules/web.dom.iterable":107}],21:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":30,"../../modules/es6.object.to-string":101,"../../modules/es6.symbol":104,"../../modules/es7.symbol.async-iterator":105,"../../modules/es7.symbol.observable":106}],22:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":92,"../../modules/es6.string.iterator":103,"../../modules/web.dom.iterable":107}],23:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],24:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],25:[function(require,module,exports){
module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};
},{}],26:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":49}],27:[function(require,module,exports){
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
},{"./_to-index":84,"./_to-iobject":86,"./_to-length":87}],28:[function(require,module,exports){
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
},{"./_cof":29,"./_wks":93}],29:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],30:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],31:[function(require,module,exports){
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
},{"./_a-function":23}],32:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],33:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":38}],34:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":40,"./_is-object":49}],35:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],36:[function(require,module,exports){
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
},{"./_object-gops":67,"./_object-keys":70,"./_object-pie":71}],37:[function(require,module,exports){
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
},{"./_core":30,"./_ctx":31,"./_global":40,"./_hide":42}],38:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],39:[function(require,module,exports){
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
},{"./_an-object":26,"./_ctx":31,"./_is-array-iter":47,"./_iter-call":50,"./_to-length":87,"./core.get-iterator-method":94}],40:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],41:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],42:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":33,"./_object-dp":62,"./_property-desc":73}],43:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":40}],44:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":33,"./_dom-create":34,"./_fails":38}],45:[function(require,module,exports){
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
},{}],46:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":29}],47:[function(require,module,exports){
// check on default Array iterator
var Iterators  = require('./_iterators')
  , ITERATOR   = require('./_wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./_iterators":55,"./_wks":93}],48:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":29}],49:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],50:[function(require,module,exports){
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
},{"./_an-object":26}],51:[function(require,module,exports){
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
},{"./_hide":42,"./_object-create":61,"./_property-desc":73,"./_set-to-string-tag":78,"./_wks":93}],52:[function(require,module,exports){
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
},{"./_export":37,"./_has":41,"./_hide":42,"./_iter-create":51,"./_iterators":55,"./_library":57,"./_object-gpo":68,"./_redefine":75,"./_set-to-string-tag":78,"./_wks":93}],53:[function(require,module,exports){
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
},{"./_wks":93}],54:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],55:[function(require,module,exports){
module.exports = {};
},{}],56:[function(require,module,exports){
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
},{"./_object-keys":70,"./_to-iobject":86}],57:[function(require,module,exports){
module.exports = true;
},{}],58:[function(require,module,exports){
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
},{"./_fails":38,"./_has":41,"./_is-object":49,"./_object-dp":62,"./_uid":90}],59:[function(require,module,exports){
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
},{"./_cof":29,"./_global":40,"./_task":83}],60:[function(require,module,exports){
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
},{"./_fails":38,"./_iobject":46,"./_object-gops":67,"./_object-keys":70,"./_object-pie":71,"./_to-object":88}],61:[function(require,module,exports){
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

},{"./_an-object":26,"./_dom-create":34,"./_enum-bug-keys":35,"./_html":43,"./_object-dps":63,"./_shared-key":79}],62:[function(require,module,exports){
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
},{"./_an-object":26,"./_descriptors":33,"./_ie8-dom-define":44,"./_to-primitive":89}],63:[function(require,module,exports){
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
},{"./_an-object":26,"./_descriptors":33,"./_object-dp":62,"./_object-keys":70}],64:[function(require,module,exports){
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
},{"./_descriptors":33,"./_has":41,"./_ie8-dom-define":44,"./_object-pie":71,"./_property-desc":73,"./_to-iobject":86,"./_to-primitive":89}],65:[function(require,module,exports){
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

},{"./_object-gopn":66,"./_to-iobject":86}],66:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":35,"./_object-keys-internal":69}],67:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],68:[function(require,module,exports){
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
},{"./_has":41,"./_shared-key":79,"./_to-object":88}],69:[function(require,module,exports){
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
},{"./_array-includes":27,"./_has":41,"./_shared-key":79,"./_to-iobject":86}],70:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":35,"./_object-keys-internal":69}],71:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],72:[function(require,module,exports){
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
},{"./_core":30,"./_export":37,"./_fails":38}],73:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],74:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};
},{"./_hide":42}],75:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":42}],76:[function(require,module,exports){
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
},{"./_an-object":26,"./_ctx":31,"./_is-object":49,"./_object-gopd":64}],77:[function(require,module,exports){
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
},{"./_core":30,"./_descriptors":33,"./_global":40,"./_object-dp":62,"./_wks":93}],78:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":41,"./_object-dp":62,"./_wks":93}],79:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":80,"./_uid":90}],80:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":40}],81:[function(require,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = require('./_an-object')
  , aFunction = require('./_a-function')
  , SPECIES   = require('./_wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./_a-function":23,"./_an-object":26,"./_wks":93}],82:[function(require,module,exports){
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
},{"./_defined":32,"./_to-integer":85}],83:[function(require,module,exports){
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
},{"./_cof":29,"./_ctx":31,"./_dom-create":34,"./_global":40,"./_html":43,"./_invoke":45}],84:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":85}],85:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],86:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":32,"./_iobject":46}],87:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":85}],88:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":32}],89:[function(require,module,exports){
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
},{"./_is-object":49}],90:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],91:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":30,"./_global":40,"./_library":57,"./_object-dp":62,"./_wks-ext":92}],92:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":93}],93:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":40,"./_shared":80,"./_uid":90}],94:[function(require,module,exports){
var classof   = require('./_classof')
  , ITERATOR  = require('./_wks')('iterator')
  , Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./_classof":28,"./_core":30,"./_iterators":55,"./_wks":93}],95:[function(require,module,exports){
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
},{"./_add-to-unscopables":24,"./_iter-define":52,"./_iter-step":54,"./_iterators":55,"./_to-iobject":86}],96:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":37,"./_object-assign":60}],97:[function(require,module,exports){
var $export = require('./_export')
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: require('./_object-create')});
},{"./_export":37,"./_object-create":61}],98:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":33,"./_export":37,"./_object-dp":62}],99:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = require('./_to-object')
  , $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./_object-gpo":68,"./_object-sap":72,"./_to-object":88}],100:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', {setPrototypeOf: require('./_set-proto').set});
},{"./_export":37,"./_set-proto":76}],101:[function(require,module,exports){

},{}],102:[function(require,module,exports){
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
},{"./_a-function":23,"./_an-instance":25,"./_classof":28,"./_core":30,"./_ctx":31,"./_export":37,"./_for-of":39,"./_global":40,"./_is-object":49,"./_iter-detect":53,"./_library":57,"./_microtask":59,"./_redefine-all":74,"./_set-species":77,"./_set-to-string-tag":78,"./_species-constructor":81,"./_task":83,"./_wks":93}],103:[function(require,module,exports){
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
},{"./_iter-define":52,"./_string-at":82}],104:[function(require,module,exports){
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
},{"./_an-object":26,"./_descriptors":33,"./_enum-keys":36,"./_export":37,"./_fails":38,"./_global":40,"./_has":41,"./_hide":42,"./_is-array":48,"./_keyof":56,"./_library":57,"./_meta":58,"./_object-create":61,"./_object-dp":62,"./_object-gopd":64,"./_object-gopn":66,"./_object-gopn-ext":65,"./_object-gops":67,"./_object-keys":70,"./_object-pie":71,"./_property-desc":73,"./_redefine":75,"./_set-to-string-tag":78,"./_shared":80,"./_to-iobject":86,"./_to-primitive":89,"./_uid":90,"./_wks":93,"./_wks-define":91,"./_wks-ext":92}],105:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":91}],106:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":91}],107:[function(require,module,exports){
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
},{"./_global":40,"./_hide":42,"./_iterators":55,"./_wks":93,"./es6.array.iterator":95}],108:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateModal = function (_React$Component) {
    (0, _inherits3.default)(CreateModal, _React$Component);

    function CreateModal(props, context) {
        (0, _classCallCheck3.default)(this, CreateModal);

        var _this = (0, _possibleConstructorReturn3.default)(this, (CreateModal.__proto__ || (0, _getPrototypeOf2.default)(CreateModal)).call(this, props, context));

        _this.state = (0, _extends3.default)({}, CreateModal.initialState, { open: false });
        return _this;
    }

    (0, _createClass3.default)(CreateModal, [{
        key: 'onApprove',
        value: function onApprove() {
            this._createTenant();
            return false;
        }
    }, {
        key: 'onCancel',
        value: function onCancel() {
            this.setState({ open: false });
            return true;
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(prevProps, prevState) {
            if (this.state.open && prevState.open != this.state.open) {
                this.setState(CreateModal.initialState);
            }
        }
    }, {
        key: '_createTenant',
        value: function _createTenant() {
            var _this2 = this;

            var errors = {};

            if (_.isEmpty(this.state.tenantName)) {
                errors['tenantName'] = 'Please provide tenant name';
            }

            if (!_.isEmpty(errors)) {
                this.setState({ errors: errors });
                return false;
            }

            // Disable the form
            this.setState({ loading: true });

            var actions = new _actions2.default(this.props.toolbox);
            actions.doCreate(this.state.tenantName).then(function (tenant) {
                _this2.setState({ loading: false, open: false });
                _this2.props.toolbox.refresh();
            }).catch(function (err) {
                _this2.setState({ errors: { error: err.message }, loading: false });
            });
        }
    }, {
        key: '_handleInputChange',
        value: function _handleInputChange(proxy, field) {
            this.setState(Stage.Basic.Form.fieldNameValue(field));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _Stage$Basic = Stage.Basic,
                Modal = _Stage$Basic.Modal,
                Button = _Stage$Basic.Button,
                Icon = _Stage$Basic.Icon,
                Form = _Stage$Basic.Form,
                ApproveButton = _Stage$Basic.ApproveButton,
                CancelButton = _Stage$Basic.CancelButton;

            var addButton = React.createElement(Button, { content: 'Add', icon: 'add user', labelPosition: 'left' });

            return React.createElement(
                Modal,
                { trigger: addButton, open: this.state.open, onOpen: function onOpen() {
                        return _this3.setState({ open: true });
                    }, onClose: function onClose() {
                        return _this3.setState({ open: false });
                    } },
                React.createElement(
                    Modal.Header,
                    null,
                    React.createElement(Icon, { name: 'add user' }),
                    ' Add tenant'
                ),
                React.createElement(
                    Modal.Content,
                    null,
                    React.createElement(
                        Form,
                        { loading: this.state.loading, errors: this.state.errors },
                        React.createElement(
                            Form.Field,
                            { error: this.state.errors.tenantName },
                            React.createElement(Form.Input, { name: 'tenantName', placeholder: 'Tenant name',
                                value: this.state.tenantName, onChange: this._handleInputChange.bind(this) })
                        )
                    )
                ),
                React.createElement(
                    Modal.Actions,
                    null,
                    React.createElement(CancelButton, { onClick: this.onCancel.bind(this), disabled: this.state.loading }),
                    React.createElement(ApproveButton, { onClick: this.onApprove.bind(this), disabled: this.state.loading, content: 'Add', icon: 'add user', color: 'green' })
                )
            );
        }
    }]);
    return CreateModal;
}(React.Component); /**
                     * Created by jakubniezgoda on 01/02/2017.
                     */

CreateModal.initialState = {
    loading: false,
    tenantName: '',
    errors: {}
};
exports.default = CreateModal;
;

},{"./actions":114,"babel-runtime/core-js/object/get-prototype-of":4,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/extends":11,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13}],109:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PropTypes = React.PropTypes; /**
                                  * Created by jakubniezgoda on 01/02/2017.
                                  */

var GroupsModal = function (_React$Component) {
    (0, _inherits3.default)(GroupsModal, _React$Component);

    function GroupsModal(props, context) {
        (0, _classCallCheck3.default)(this, GroupsModal);

        var _this = (0, _possibleConstructorReturn3.default)(this, (GroupsModal.__proto__ || (0, _getPrototypeOf2.default)(GroupsModal)).call(this, props, context));

        _this.state = (0, _extends3.default)({}, GroupsModal.initialState);
        return _this;
    }

    (0, _createClass3.default)(GroupsModal, [{
        key: 'onApprove',
        value: function onApprove() {
            this._updateTenant();
            return false;
        }
    }, {
        key: 'onCancel',
        value: function onCancel() {
            this.props.onHide();
            return true;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (!this.props.open && nextProps.open) {
                this.setState((0, _extends3.default)({}, GroupsModal.initialState, {
                    userGroups: nextProps.tenant.groups
                }));
            }
        }
    }, {
        key: '_updateTenant',
        value: function _updateTenant() {
            var _this2 = this;

            var errors = {};

            // Disable the form
            this.setState({ loading: true });

            var userGroupsToAdd = _.difference(this.state.userGroups, this.props.tenant.groups);
            var userGroupsToRemove = _.difference(this.props.tenant.groups, this.state.userGroups);

            var actions = new _actions2.default(this.props.toolbox);
            actions.doHandleUserGroups(this.props.tenant.name, userGroupsToAdd, userGroupsToRemove).then(function () {
                _this2.setState({ loading: false });
                _this2.props.toolbox.refresh();
                _this2.props.onHide();
            }).catch(function (err) {
                _this2.setState({ errors: { error: err.message }, loading: false });
            });
        }
    }, {
        key: '_handleInputChange',
        value: function _handleInputChange(proxy, field) {
            this.setState(Stage.Basic.Form.fieldNameValue(field));
        }
    }, {
        key: 'render',
        value: function render() {
            var _Stage$Basic = Stage.Basic,
                Modal = _Stage$Basic.Modal,
                Icon = _Stage$Basic.Icon,
                Form = _Stage$Basic.Form,
                CancelButton = _Stage$Basic.CancelButton,
                ApproveButton = _Stage$Basic.ApproveButton;


            var tenant = this.props.tenant;
            var userGroups = _.map(this.props.userGroups.items, function (userGroup) {
                return { text: userGroup.name, value: userGroup.name, key: userGroup.name };
            });

            return React.createElement(
                Modal,
                { open: this.props.open },
                React.createElement(
                    Modal.Header,
                    null,
                    React.createElement(Icon, { name: 'users' }),
                    ' Modify user groups for ',
                    tenant.name
                ),
                React.createElement(
                    Modal.Content,
                    null,
                    React.createElement(
                        Form,
                        { loading: this.state.loading, errors: this.state.errors },
                        React.createElement(
                            Form.Field,
                            null,
                            React.createElement(Form.Dropdown, { placeholder: 'Groups', multiple: true, selection: true, options: userGroups, name: 'userGroups',
                                value: this.state.userGroups, onChange: this._handleInputChange.bind(this) })
                        )
                    )
                ),
                React.createElement(
                    Modal.Actions,
                    null,
                    React.createElement(CancelButton, { onClick: this.onCancel.bind(this), disabled: this.state.loading }),
                    React.createElement(ApproveButton, { onClick: this.onApprove.bind(this), disabled: this.state.loading, icon: 'users', color: 'green' })
                )
            );
        }
    }]);
    return GroupsModal;
}(React.Component);

GroupsModal.initialState = {
    userGroups: [],
    loading: false,
    errors: {}
};
GroupsModal.propTypes = {
    tenant: PropTypes.object.isRequired,
    userGroups: PropTypes.object.isRequired,
    toolbox: PropTypes.object.isRequired,
    onHide: PropTypes.func
};
GroupsModal.defaultProps = {
    onHide: function onHide() {}
};
exports.default = GroupsModal;
;

},{"./actions":114,"babel-runtime/core-js/object/get-prototype-of":4,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/extends":11,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13}],110:[function(require,module,exports){
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
 * Created by jakubniezgoda on 01/02/2017.
 */

var PropTypes = React.PropTypes;

var MenuAction = function (_React$Component) {
    (0, _inherits3.default)(MenuAction, _React$Component);

    function MenuAction() {
        (0, _classCallCheck3.default)(this, MenuAction);
        return (0, _possibleConstructorReturn3.default)(this, (MenuAction.__proto__ || (0, _getPrototypeOf2.default)(MenuAction)).apply(this, arguments));
    }

    (0, _createClass3.default)(MenuAction, [{
        key: '_onDropdownChange',
        value: function _onDropdownChange(event, _ref) {
            var name = _ref.name;

            this.props.onSelectAction(name, this.props.tenant);
        }
    }, {
        key: 'render',
        value: function render() {
            var _Stage$Basic = Stage.Basic,
                PopupMenu = _Stage$Basic.PopupMenu,
                Menu = _Stage$Basic.Menu;


            return React.createElement(
                PopupMenu,
                null,
                React.createElement(
                    Menu,
                    { pointing: true, vertical: true },
                    React.createElement(Menu.Item, { icon: 'user', content: 'Edit users', name: MenuAction.EDIT_USERS_ACTION,
                        onClick: this._onDropdownChange.bind(this) }),
                    React.createElement(Menu.Item, { icon: 'users', content: 'Edit user groups', name: MenuAction.EDIT_USER_GROUPS_ACTION,
                        onClick: this._onDropdownChange.bind(this) }),
                    React.createElement(Menu.Item, { icon: 'trash', content: 'Delete', name: MenuAction.DELETE_TENANT_ACTION,
                        onClick: this._onDropdownChange.bind(this) })
                )
            );
        }
    }]);
    return MenuAction;
}(React.Component);

MenuAction.EDIT_USERS_ACTION = 'users';
MenuAction.EDIT_USER_GROUPS_ACTION = 'user-groups';
MenuAction.DELETE_TENANT_ACTION = 'delete';
MenuAction.propTypes = {
    tenant: PropTypes.object.isRequired,
    onSelectAction: PropTypes.func.isRequired
};
exports.default = MenuAction;

},{"babel-runtime/core-js/object/get-prototype-of":4,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13}],111:[function(require,module,exports){
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

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PropTypes = React.PropTypes; /**
                                  * Created by jakubniezgoda on 02/02/2017.
                                  */

var TenantDetails = function (_React$Component) {
    (0, _inherits3.default)(TenantDetails, _React$Component);

    function TenantDetails(props, context) {
        (0, _classCallCheck3.default)(this, TenantDetails);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TenantDetails.__proto__ || (0, _getPrototypeOf2.default)(TenantDetails)).call(this, props, context));

        _this.state = {
            processing: false,
            processItem: ''
        };
        return _this;
    }

    (0, _createClass3.default)(TenantDetails, [{
        key: '_removeUser',
        value: function _removeUser(username) {
            var _this2 = this;

            this.setState({ processItem: username, processing: true });

            var actions = new _actions2.default(this.props.toolbox);
            actions.doRemoveUser(this.props.tenant.name, username).then(function () {
                _this2.props.toolbox.refresh();
                _this2.props.toolbox.getEventBus().trigger('tenants:refresh');
                _this2.setState({ processItem: '', processing: false });
            }).catch(function (err) {
                _this2.props.onError(err.message);
                _this2.setState({ processItem: '', processing: false });
            });
        }
    }, {
        key: '_removeUserGroup',
        value: function _removeUserGroup(group) {
            var _this3 = this;

            this.setState({ processItem: group, processing: true });

            var actions = new _actions2.default(this.props.toolbox);
            actions.doRemoveUserGroup(this.props.tenant.name, group).then(function () {
                _this3.props.toolbox.refresh();
                _this3.props.toolbox.getEventBus().trigger('tenants:refresh');
                _this3.setState({ processItem: '', processing: false });
            }).catch(function (err) {
                _this3.props.onError(err.message);
                _this3.setState({ processItem: '', processing: false });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _Stage$Basic = Stage.Basic,
                Segment = _Stage$Basic.Segment,
                List = _Stage$Basic.List,
                Icon = _Stage$Basic.Icon,
                Message = _Stage$Basic.Message,
                Divider = _Stage$Basic.Divider;

            var tenant = this.props.tenant;

            return React.createElement(
                Segment.Group,
                { horizontal: true },
                React.createElement(
                    Segment,
                    null,
                    React.createElement(Icon, { name: 'users' }),
                    ' Groups',
                    !_.isEmpty(tenant.groups) && React.createElement(
                        'div',
                        null,
                        React.createElement(Divider, null),
                        React.createElement(
                            List,
                            { divided: true, verticalAlign: 'middle', className: 'light' },
                            tenant.groups.map(function (group) {
                                var processing = _this4.state.processing && _this4.state.processItem === group;

                                return React.createElement(
                                    List.Item,
                                    { key: group },
                                    group,
                                    React.createElement(Icon, { size: 'small', link: true, name: processing ? 'notched circle' : 'remove', loading: processing,
                                        className: 'right floated', onClick: _this4._removeUserGroup.bind(_this4, group) })
                                );
                            })
                        )
                    ),
                    _.isEmpty(tenant.groups) && React.createElement(Message, { content: 'No groups available' })
                ),
                React.createElement(
                    Segment,
                    null,
                    React.createElement(Icon, { name: 'user' }),
                    ' Users',
                    !_.isEmpty(tenant.users) && React.createElement(
                        'div',
                        null,
                        React.createElement(Divider, null),
                        React.createElement(
                            List,
                            { divided: true, verticalAlign: 'middle', className: 'light' },
                            tenant.users.map(function (user) {
                                var processing = _this4.state.processing && _this4.state.processItem === user;

                                return React.createElement(
                                    List.Item,
                                    { key: user },
                                    user,
                                    React.createElement(Icon, { size: 'small', link: true, name: processing ? 'notched circle' : 'remove', loading: processing,
                                        className: 'right floated', onClick: _this4._removeUser.bind(_this4, user) })
                                );
                            })
                        )
                    ),
                    _.isEmpty(tenant.users) && React.createElement(Message, { content: 'No users available' })
                )
            );
        }
    }]);
    return TenantDetails;
}(React.Component);

TenantDetails.propTypes = {
    toolbox: PropTypes.object.isRequired,
    tenant: PropTypes.object.isRequired,
    onError: PropTypes.func
};
exports.default = TenantDetails;
;

},{"./actions":114,"babel-runtime/core-js/object/get-prototype-of":4,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13}],112:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _CreateModal = require('./CreateModal');

var _CreateModal2 = _interopRequireDefault(_CreateModal);

var _UsersModal = require('./UsersModal');

var _UsersModal2 = _interopRequireDefault(_UsersModal);

var _GroupsModal = require('./GroupsModal');

var _GroupsModal2 = _interopRequireDefault(_GroupsModal);

var _MenuAction = require('./MenuAction');

var _MenuAction2 = _interopRequireDefault(_MenuAction);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _TenantDetails = require('./TenantDetails');

var _TenantDetails2 = _interopRequireDefault(_TenantDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by kinneretzin on 30/01/2017.
 */

var TenantsTable = function (_React$Component) {
    (0, _inherits3.default)(TenantsTable, _React$Component);

    function TenantsTable(props, context) {
        (0, _classCallCheck3.default)(this, TenantsTable);

        var _this = (0, _possibleConstructorReturn3.default)(this, (TenantsTable.__proto__ || (0, _getPrototypeOf2.default)(TenantsTable)).call(this, props, context));

        _this.state = {
            error: null,
            showModal: false,
            modalType: '',
            tenant: {},
            users: {},
            userGroups: {}
        };
        return _this;
    }

    (0, _createClass3.default)(TenantsTable, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return this.props.widget !== nextProps.widget || this.state != nextState || !_.isEqual(this.props.data, nextProps.data);
        }
    }, {
        key: '_refreshData',
        value: function _refreshData() {
            this.setState({ error: null });
            this.props.toolbox.refresh();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.toolbox.getEventBus().on('tenants:refresh', this._refreshData, this);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.toolbox.getEventBus().off('tenants:refresh', this._refreshData);
        }
    }, {
        key: 'fetchGridData',
        value: function fetchGridData(fetchParams) {
            this.props.toolbox.refresh(fetchParams);
        }
    }, {
        key: '_selectTenant',
        value: function _selectTenant(tenantName) {
            var selectedTenantName = this.props.toolbox.getContext().getValue('tenantName');
            this.props.toolbox.getContext().setValue('tenantName', tenantName === selectedTenantName ? null : tenantName);
        }
    }, {
        key: '_deleteTenant',
        value: function _deleteTenant() {
            var _this2 = this;

            var tenantName = this.state.tenant.name;
            var actions = new _actions2.default(this.props.toolbox);
            var HIDE_DELETE_MODAL_STATE = { modalType: _MenuAction2.default.DELETE_TENANT_ACTION, showModal: false };

            actions.doDelete(tenantName).then(function (tenant) {
                _this2.setState((0, _extends3.default)({}, HIDE_DELETE_MODAL_STATE, { error: null }));
                _this2.props.toolbox.getEventBus().trigger('tenants:refresh');
            }).catch(function (err) {
                _this2.setState((0, _extends3.default)({}, HIDE_DELETE_MODAL_STATE, { error: err.message }));
            });
        }
    }, {
        key: '_getAvailableUsers',
        value: function _getAvailableUsers(value, tenant) {
            var _this3 = this;

            this.props.toolbox.loading(true);

            var actions = new _actions2.default(this.props.toolbox);
            actions.doGetUsers().then(function (users) {
                _this3.setState({ tenant: tenant, users: users, modalType: value, showModal: true });
                _this3.props.toolbox.loading(false);
            }).catch(function (err) {
                _this3.setState({ error: err.message });
                _this3.props.toolbox.loading(false);
            });
        }
    }, {
        key: '_getAvailableUserGroups',
        value: function _getAvailableUserGroups(value, tenant) {
            var _this4 = this;

            this.props.toolbox.loading(true);

            var actions = new _actions2.default(this.props.toolbox);
            actions.doGetUserGroups().then(function (userGroups) {
                _this4.setState({ tenant: tenant, userGroups: userGroups, modalType: value, showModal: true });
                _this4.props.toolbox.loading(false);
            }).catch(function (err) {
                _this4.setState({ error: err.message });
                _this4.props.toolbox.loading(false);
            });
        }
    }, {
        key: '_selectAction',
        value: function _selectAction(value, tenant) {
            if (value === _MenuAction2.default.EDIT_USERS_ACTION) {
                this._getAvailableUsers(value, tenant);
            } else if (value === _MenuAction2.default.EDIT_USER_GROUPS_ACTION) {
                this._getAvailableUserGroups(value, tenant);
            } else if (value === _MenuAction2.default.DELETE_TENANT_ACTION) {
                this.setState({ tenant: tenant, modalType: value, showModal: true });
            } else {
                this.setState({ error: 'Internal error: Unknown action (\'' + value + '\') cannot be handled.' });
            }
        }
    }, {
        key: '_hideModal',
        value: function _hideModal() {
            this.setState({ showModal: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var _Stage$Basic = Stage.Basic,
                ErrorMessage = _Stage$Basic.ErrorMessage,
                DataTable = _Stage$Basic.DataTable,
                Label = _Stage$Basic.Label;

            var DeleteModal = Stage.Basic.Confirm;
            var data = this.props.data;

            return React.createElement(
                'div',
                null,
                React.createElement(ErrorMessage, { error: this.state.error }),
                React.createElement(
                    DataTable,
                    { fetchData: this.fetchGridData.bind(this),
                        totalSize: data.total,
                        pageSize: this.props.widget.configuration.pageSize,
                        sortColumn: this.props.widget.configuration.sortColumn,
                        sortAscending: this.props.widget.configuration.sortAscending,
                        className: 'tenantsTable' },
                    React.createElement(DataTable.Column, { label: 'Name', name: 'name', width: '30%' }),
                    React.createElement(DataTable.Column, { label: '# Groups', width: '30%' }),
                    React.createElement(DataTable.Column, { label: '# Users', width: '30%' }),
                    React.createElement(DataTable.Column, { width: '10%' }),
                    data.items.map(function (tenant) {
                        return React.createElement(
                            DataTable.RowExpandable,
                            { key: tenant.name, expanded: tenant.isSelected },
                            React.createElement(
                                DataTable.Row,
                                { key: tenant.name, selected: tenant.isSelected, onClick: _this5._selectTenant.bind(_this5, tenant.name) },
                                React.createElement(
                                    DataTable.Data,
                                    null,
                                    tenant.name
                                ),
                                React.createElement(
                                    DataTable.Data,
                                    null,
                                    React.createElement(
                                        Label,
                                        { className: 'green', horizontal: true },
                                        tenant.groups.length
                                    )
                                ),
                                React.createElement(
                                    DataTable.Data,
                                    null,
                                    React.createElement(
                                        Label,
                                        { className: 'blue', horizontal: true },
                                        tenant.users.length
                                    )
                                ),
                                React.createElement(
                                    DataTable.Data,
                                    { className: 'center aligned rowActions' },
                                    React.createElement(_MenuAction2.default, { tenant: tenant, onSelectAction: _this5._selectAction.bind(_this5) })
                                )
                            ),
                            React.createElement(
                                DataTable.DataExpandable,
                                null,
                                React.createElement(_TenantDetails2.default, { tenant: tenant, toolbox: _this5.props.toolbox, onError: function onError(err) {
                                        return _this5.setState({ error: err });
                                    } })
                            )
                        );
                    }),
                    React.createElement(
                        DataTable.Action,
                        null,
                        React.createElement(_CreateModal2.default, { widget: this.props.widget, data: this.props.data, toolbox: this.props.toolbox })
                    )
                ),
                React.createElement(DeleteModal, { content: 'Are you sure you want to delete tenant \'' + this.state.tenant.name + '\'?',
                    open: this.state.modalType === _MenuAction2.default.DELETE_TENANT_ACTION && this.state.showModal,
                    onConfirm: this._deleteTenant.bind(this),
                    onCancel: this._hideModal.bind(this) }),
                React.createElement(_UsersModal2.default, { widget: this.props.widget, toolbox: this.props.toolbox,
                    open: this.state.modalType === _MenuAction2.default.EDIT_USERS_ACTION && this.state.showModal,
                    onHide: this._hideModal.bind(this),
                    tenant: this.state.tenant, users: this.state.users }),
                React.createElement(_GroupsModal2.default, { widget: this.props.widget, toolbox: this.props.toolbox,
                    open: this.state.modalType === _MenuAction2.default.EDIT_USER_GROUPS_ACTION && this.state.showModal,
                    onHide: this._hideModal.bind(this),
                    tenant: this.state.tenant, userGroups: this.state.userGroups })
            );
        }
    }]);
    return TenantsTable;
}(React.Component);

exports.default = TenantsTable;

},{"./CreateModal":108,"./GroupsModal":109,"./MenuAction":110,"./TenantDetails":111,"./UsersModal":113,"./actions":114,"babel-runtime/core-js/object/get-prototype-of":4,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/extends":11,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13}],113:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PropTypes = React.PropTypes; /**
                                  * Created by jakubniezgoda on 01/02/2017.
                                  */

var UsersModal = function (_React$Component) {
    (0, _inherits3.default)(UsersModal, _React$Component);

    function UsersModal(props, context) {
        (0, _classCallCheck3.default)(this, UsersModal);

        var _this = (0, _possibleConstructorReturn3.default)(this, (UsersModal.__proto__ || (0, _getPrototypeOf2.default)(UsersModal)).call(this, props, context));

        _this.state = (0, _extends3.default)({}, UsersModal.initialState);
        return _this;
    }

    (0, _createClass3.default)(UsersModal, [{
        key: 'onApprove',
        value: function onApprove() {
            this._updateTenant();
            return false;
        }
    }, {
        key: 'onCancel',
        value: function onCancel() {
            this.props.onHide();
            return true;
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (!this.props.open && nextProps.open) {
                this.setState((0, _extends3.default)({}, UsersModal.initialState, {
                    users: nextProps.tenant.users
                }));
            }
        }
    }, {
        key: '_updateTenant',
        value: function _updateTenant() {
            var _this2 = this;

            var errors = {};

            // Disable the form
            this.setState({ loading: true });

            var usersToAdd = _.difference(this.state.users, this.props.tenant.users);
            var usersToRemove = _.difference(this.props.tenant.users, this.state.users);

            var actions = new _actions2.default(this.props.toolbox);
            actions.doHandleUsers(this.props.tenant.name, usersToAdd, usersToRemove).then(function () {
                _this2.setState({ loading: false });
                _this2.props.toolbox.refresh();
                _this2.props.onHide();
            }).catch(function (err) {
                _this2.setState({ errors: { error: err.message }, loading: false });
            });
        }
    }, {
        key: '_handleInputChange',
        value: function _handleInputChange(proxy, field) {
            this.setState(Stage.Basic.Form.fieldNameValue(field));
        }
    }, {
        key: 'render',
        value: function render() {
            var _Stage$Basic = Stage.Basic,
                Modal = _Stage$Basic.Modal,
                Icon = _Stage$Basic.Icon,
                Form = _Stage$Basic.Form,
                ApproveButton = _Stage$Basic.ApproveButton,
                CancelButton = _Stage$Basic.CancelButton;


            var tenant = this.props.tenant;
            var users = _.map(this.props.users.items, function (user) {
                return { text: user.username, value: user.username, key: user.username };
            });

            return React.createElement(
                Modal,
                { open: this.props.open },
                React.createElement(
                    Modal.Header,
                    null,
                    React.createElement(Icon, { name: 'user' }),
                    ' Modify users for tenant ',
                    tenant.name
                ),
                React.createElement(
                    Modal.Content,
                    null,
                    React.createElement(
                        Form,
                        { loading: this.state.loading, errors: this.state.errors },
                        React.createElement(
                            Form.Field,
                            null,
                            React.createElement(Form.Dropdown, { placeholder: 'Users', multiple: true, selection: true, options: users, name: 'users',
                                value: this.state.users, onChange: this._handleInputChange.bind(this) })
                        )
                    )
                ),
                React.createElement(
                    Modal.Actions,
                    null,
                    React.createElement(CancelButton, { onClick: this.onCancel.bind(this), disabled: this.state.loading }),
                    React.createElement(ApproveButton, { onClick: this.onApprove.bind(this), disabled: this.state.loading, content: 'Save', icon: 'user', color: 'green' })
                )
            );
        }
    }]);
    return UsersModal;
}(React.Component);

UsersModal.initialState = {
    users: [],
    loading: false,
    errors: {}
};
UsersModal.propTypes = {
    tenant: PropTypes.object.isRequired,
    users: PropTypes.object.isRequired,
    toolbox: PropTypes.object.isRequired,
    onHide: PropTypes.func
};
UsersModal.defaultProps = {
    onHide: function onHide() {}
};
exports.default = UsersModal;
;

},{"./actions":114,"babel-runtime/core-js/object/get-prototype-of":4,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10,"babel-runtime/helpers/extends":11,"babel-runtime/helpers/inherits":12,"babel-runtime/helpers/possibleConstructorReturn":13}],114:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by jakubniezgoda on 31/01/2017.
 */

var _class = function () {
    function _class(toolbox) {
        (0, _classCallCheck3.default)(this, _class);

        this.toolbox = toolbox;
    }

    (0, _createClass3.default)(_class, [{
        key: 'doDelete',
        value: function doDelete(tenantName) {
            return this.toolbox.getManager().doDelete('/tenants/' + tenantName);
        }
    }, {
        key: 'doCreate',
        value: function doCreate(tenantName) {
            return this.toolbox.getManager().doPost('/tenants/' + tenantName);
        }
    }, {
        key: 'doAddUser',
        value: function doAddUser(tenantName, username) {
            return this.toolbox.getManager().doPut('/tenants/users', null, {
                'username': username,
                'tenant_name': tenantName
            });
        }
    }, {
        key: 'doRemoveUser',
        value: function doRemoveUser(tenantName, username) {
            return this.toolbox.getManager().doDelete('/tenants/users', null, {
                'username': username,
                'tenant_name': tenantName
            });
        }
    }, {
        key: 'doHandleUsers',
        value: function doHandleUsers(tenantName, usersToAdd, usersToDelete) {
            var _this = this;

            var addActions = _.map(usersToAdd, function (username) {
                return _this.doAddUser(tenantName, username);
            });
            var deleteActions = _.map(usersToDelete, function (username) {
                return _this.doRemoveUser(tenantName, username);
            });

            return _promise2.default.all(_.concat(addActions, deleteActions));
        }
    }, {
        key: 'doAddUserGroup',
        value: function doAddUserGroup(tenantName, userGroup) {
            return this.toolbox.getManager().doPut('/tenants/user-groups', null, {
                'group_name': userGroup,
                'tenant_name': tenantName
            });
        }
    }, {
        key: 'doRemoveUserGroup',
        value: function doRemoveUserGroup(tenantName, userGroup) {
            return this.toolbox.getManager().doDelete('/tenants/user-groups', null, {
                'group_name': userGroup,
                'tenant_name': tenantName
            });
        }
    }, {
        key: 'doHandleUserGroups',
        value: function doHandleUserGroups(tenantName, groupsToAdd, groupsToDelete) {
            var _this2 = this;

            var addActions = _.map(groupsToAdd, function (userGroup) {
                return _this2.doAddUserGroup(tenantName, userGroup);
            });
            var deleteActions = _.map(groupsToDelete, function (userGroup) {
                return _this2.doRemoveUserGroup(tenantName, userGroup);
            });

            return _promise2.default.all(_.concat(addActions, deleteActions));
        }
    }, {
        key: 'doGetUserGroups',
        value: function doGetUserGroups() {
            return this.toolbox.getManager().doGet('/user-groups?_include=name');
        }
    }, {
        key: 'doGetUsers',
        value: function doGetUsers() {
            return this.toolbox.getManager().doGet('/users?_include=username');
        }
    }]);
    return _class;
}();

exports.default = _class;

},{"babel-runtime/core-js/promise":6,"babel-runtime/helpers/classCallCheck":9,"babel-runtime/helpers/createClass":10}],115:[function(require,module,exports){
'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _TenantsTable = require('./TenantsTable');

var _TenantsTable2 = _interopRequireDefault(_TenantsTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Stage.defineWidget({
    id: 'tenants',
    name: 'Tenants management',
    description: 'This widget shows a list of available tenants, and allow managing them',
    initialWidth: 5,
    initialHeight: 16,
    color: 'green',
    fetchUrl: '[manager]/tenants?_get_data=true[params]',
    isReact: true,
    isAdmin: true,
    initialConfiguration: [Stage.GenericConfig.POLLING_TIME_CONFIG(30), Stage.GenericConfig.PAGE_SIZE_CONFIG(), Stage.GenericConfig.SORT_COLUMN_CONFIG('name'), Stage.GenericConfig.SORT_ASCENDING_CONFIG(true)],

    render: function render(widget, data, error, toolbox) {
        if (_.isEmpty(data)) {
            return React.createElement(Stage.Basic.Loading, null);
        }

        var selectedTenant = toolbox.getContext().getValue('tenantName');

        var formattedData = data;
        formattedData = (0, _assign2.default)({}, formattedData, {
            items: _.map(formattedData.items, function (item) {
                return (0, _assign2.default)({}, item, {
                    groups: item.groups,
                    users: item.users,
                    isSelected: item.name === selectedTenant
                });
            }),
            total: _.get(data, 'metadata.pagination.total', 0)
        });

        return React.createElement(_TenantsTable2.default, { widget: widget, data: formattedData, toolbox: toolbox });
    }
}); /**
     * Created by kinneretzin on 30/01/2017.
     */

},{"./TenantsTable":112,"babel-runtime/core-js/object/assign":1}]},{},[114,108,109,110,111,112,113,115])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb3JlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jdHguanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Rlc2NyaXB0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWtleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2V4cG9ydC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2Zvci1vZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pbnZva2UuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lvYmplY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyYXRvcnMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2tleW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19taWNyb3Rhc2suanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcGQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLWV4dC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1waWUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1zYXAuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXNwZWNpZXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC10by1zdHJpbmctdGFnLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NwZWNpZXMtY29uc3RydWN0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdGFzay5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW5kZXguanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWlvYmplY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWxlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1wcmltaXRpdmUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3VpZC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLWV4dC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndpZGdldHMvdGVuYW50cy9zcmMvQ3JlYXRlTW9kYWwuanMiLCJ3aWRnZXRzL3RlbmFudHMvc3JjL0dyb3Vwc01vZGFsLmpzIiwid2lkZ2V0cy90ZW5hbnRzL3NyYy9NZW51QWN0aW9uLmpzIiwid2lkZ2V0cy90ZW5hbnRzL3NyYy9UZW5hbnREZXRhaWxzLmpzIiwid2lkZ2V0cy90ZW5hbnRzL3NyYy9UZW5hbnRzVGFibGUuanMiLCJ3aWRnZXRzL3RlbmFudHMvc3JjL1VzZXJzTW9kYWwuanMiLCJ3aWRnZXRzL3RlbmFudHMvc3JjL2FjdGlvbnMuanMiLCJ3aWRnZXRzL3RlbmFudHMvc3JjL3dpZGdldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBOztBQ0RBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBOztBQ0FBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTs7QUNGQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7O0FDRkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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RixDQUFNLElBQU4sRUFBWSwyQkFBWixFQUF5QyxDQUF6QztBQVJxQyxTQUFqQyxDQUFoQjs7QUFXQSxlQUNJLDhDQUFjLFFBQVEsTUFBdEIsRUFBOEIsTUFBTSxhQUFwQyxFQUFtRCxTQUFTLE9BQTVELEdBREo7QUFJSDtBQXhDYyxDQUFuQixFLENBTkEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvYXNzaWduXCIpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfYXNzaWduMi5kZWZhdWx0IHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpO1xuXG52YXIgX3NldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NldFByb3RvdHlwZU9mKTtcblxudmFyIF9jcmVhdGUgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvY3JlYXRlXCIpO1xuXG52YXIgX2NyZWF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGUpO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgKHR5cGVvZiBzdXBlckNsYXNzID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShzdXBlckNsYXNzKSkpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gKDAsIF9jcmVhdGUyLmRlZmF1bHQpKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQgPyAoMCwgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0KShzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKCh0eXBlb2YgY2FsbCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoY2FsbCkpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2l0ZXJhdG9yID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sL2l0ZXJhdG9yXCIpO1xuXG52YXIgX2l0ZXJhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2l0ZXJhdG9yKTtcblxudmFyIF9zeW1ib2wgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2xcIik7XG5cbnZhciBfc3ltYm9sMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N5bWJvbCk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgX2l0ZXJhdG9yMi5kZWZhdWx0ID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgX3R5cGVvZihfaXRlcmF0b3IyLmRlZmF1bHQpID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iaiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iaik7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5hc3NpZ247IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmNyZWF0ZScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCl7XG4gIHJldHVybiAkT2JqZWN0LmNyZWF0ZShQLCBEKTtcbn07IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZ2V0UHJvdG90eXBlT2Y7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5zZXRQcm90b3R5cGVPZjsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL193a3MtZXh0JykuZignaXRlcmF0b3InKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59OyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59OyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7IiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgcmVzdWx0ICAgICA9IGdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSBwSUUuZlxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59OyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59OyIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07IiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07IiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59OyIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHt9OyIsInZhciBnZXRLZXlzICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSBnZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7IiwidmFyIE1FVEEgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKVxuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBoYXMgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgc2V0RGVzYyAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaWQgICAgICAgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24oaXQpe1xuICBzZXREZXNjKGl0LCBNRVRBLCB7dmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9fSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKXNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiAgICAgIE1FVEEsXG4gIE5FRUQ6ICAgICBmYWxzZSxcbiAgZmFzdEtleTogIGZhc3RLZXksXG4gIGdldFdlYWs6ICBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuICAsIGlzTm9kZSAgICA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZShoZWFkKXtcbiAgICAgIGZuICAgPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICBpZihoZWFkKW5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmKGlzTm9kZSl7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYoT2JzZXJ2ZXIpe1xuICAgIHZhciB0b2dnbGUgPSB0cnVlXG4gICAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGZuKXtcbiAgICB2YXIgdGFzayA9IHtmbjogZm4sIG5leHQ6IHVuZGVmaW5lZH07XG4gICAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmKCFoZWFkKXtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUFMgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgJGFzc2lnbiAgPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsIGFMZW4gID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRTeW1ib2xzID0gZ09QUy5mXG4gICAgLCBpc0VudW0gICAgID0gcElFLmY7XG4gIHdoaWxlKGFMZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoYXJndW1lbnRzW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjsiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59OyIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07IiwidmFyIHBJRSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgZ09QRCAgICAgICAgICAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZ09QRCA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKXtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBnT1BEKE8sIFApO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59OyIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBnT1BOICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbicpLmZcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pe1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59OyIsImV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7IiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTsiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07IiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7IiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgY29yZSAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07IiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXtcbiAgICBpZihzYWZlICYmIHRhcmdldFtrZXldKXRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7IiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24oTywgcHJvdG8pe1xuICBhbk9iamVjdChPKTtcbiAgaWYoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCl0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbih0ZXN0LCBidWdneSwgc2V0KXtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vX2N0eCcpKEZ1bmN0aW9uLmNhbGwsIHJlcXVpcmUoJy4vX29iamVjdC1nb3BkJykuZihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoKGUpeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90byl7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYoYnVnZ3kpTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgU1BFQ0lFUyAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59OyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTsiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07IiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsInZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYobmFtZS5jaGFyQXQoMCkgIT0gJ18nICYmICEobmFtZSBpbiAkU3ltYm9sKSlkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7dmFsdWU6IHdrc0V4dC5mKG5hbWUpfSk7XG59OyIsImV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX3drcycpOyIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlOyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7IiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpfSk7IiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtjcmVhdGU6IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKX0pOyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG4vLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSwgJ09iamVjdCcsIHtkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZn0pOyIsIi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgJGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KXtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTsiLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge3NldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXR9KTsiLCIiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNsYXNzb2YgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbkluc3RhbmNlICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCB0YXNrICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgbWljcm90YXNrICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuICBpZihwcm9taXNlLl9uKXJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvayl7XG4gICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuICAgICwgaSAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZihpc05vZGUpe1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcbiAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuICAgICAgICAsIGluZGV4ICAgICA9IDBcbiAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG4gICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTsiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pOyIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBNRVRBICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5LRVlcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJylcbiAgLCB3a3NFeHQgICAgICAgICA9IHJlcXVpcmUoJy4vX3drcy1leHQnKVxuICAsIHdrc0RlZmluZSAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuL19rZXlvZicpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuL19lbnVtLWtleXMnKVxuICAsIGlzQXJyYXkgICAgICAgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIF9jcmVhdGUgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZ09QTkV4dCAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wbi1leHQnKVxuICAsICRHT1BEICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKVxuICAsICREUCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCAka2V5cyAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BEICAgICAgICAgICA9ICRHT1BELmZcbiAgLCBkUCAgICAgICAgICAgICA9ICREUC5mXG4gICwgZ09QTiAgICAgICAgICAgPSBnT1BORXh0LmZcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBQUk9UT1RZUEUgICAgICA9ICdwcm90b3R5cGUnXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIFRPX1BSSU1JVElWRSAgID0gd2tzKCd0b1ByaW1pdGl2ZScpXG4gICwgaXNFbnVtICAgICAgICAgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCBPUFN5bWJvbHMgICAgICA9IHNoYXJlZCgnb3Atc3ltYm9scycpXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3RbUFJPVE9UWVBFXVxuICAsIFVTRV9OQVRJVkUgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIFFPYmplY3QgICAgICAgID0gZ2xvYmFsLlFPYmplY3Q7XG4vLyBEb24ndCB1c2Ugc2V0dGVycyBpbiBRdCBTY3JpcHQsIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8xNzNcbnZhciBzZXR0ZXIgPSAhUU9iamVjdCB8fCAhUU9iamVjdFtQUk9UT1RZUEVdIHx8ICFRT2JqZWN0W1BST1RPVFlQRV0uZmluZENoaWxkO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKGRQKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBkUCh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnT1BEKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKWRQKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogZFA7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbFtQUk9UT1RZUEVdKTtcbiAgc3ltLl9rID0gdGFnO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gVVNFX05BVElWRSAmJiB0eXBlb2YgJFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJyA/IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90bykkZGVmaW5lUHJvcGVydHkoT1BTeW1ib2xzLCBrZXksIEQpO1xuICBhbk9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEQpO1xuICBpZihoYXMoQWxsU3ltYm9scywga2V5KSl7XG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XG4gICAgICBpZighaGFzKGl0LCBISURERU4pKWRQKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKSk7XG4gIGlmKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKXJldHVybiBmYWxzZTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XSA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICBpdCAgPSB0b0lPYmplY3QoaXQpO1xuICBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpO1xuICBpZihpdCA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdPUE4odG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgSVNfT1AgID0gaXQgPT09IE9iamVjdFByb3RvXG4gICAgLCBuYW1lcyAgPSBnT1BOKElTX09QID8gT1BTeW1ib2xzIDogdG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpe1xuICAgIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiAoSVNfT1AgPyBoYXMoT2JqZWN0UHJvdG8sIGtleSkgOiB0cnVlKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCFVU0VfTkFUSVZFKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKHRoaXMgaW5zdGFuY2VvZiAkU3ltYm9sKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yIScpO1xuICAgIHZhciB0YWcgPSB1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpO1xuICAgIHZhciAkc2V0ID0gZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8pJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9O1xuICAgIGlmKERFU0NSSVBUT1JTICYmIHNldHRlcilzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtjb25maWd1cmFibGU6IHRydWUsIHNldDogJHNldH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgJEdPUEQuZiA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICREUC5mICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICByZXF1aXJlKCcuL19vYmplY3QtcGllJykuZiAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJykuZiA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vX2xpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uKG5hbWUpe1xuICAgIHJldHVybiB3cmFwKHdrcyhuYW1lKSk7XG4gIH1cbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1N5bWJvbDogJFN5bWJvbH0pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaSA9IDA7IHN5bWJvbHMubGVuZ3RoID4gaTsgKXdrcyhzeW1ib2xzW2krK10pO1xuXG5mb3IodmFyIHN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzRGVmaW5lKHN5bWJvbHNbaSsrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgaWYoaXNTeW1ib2woa2V5KSlyZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gICAgdGhyb3cgVHlwZUVycm9yKGtleSArICcgaXMgbm90IGEgc3ltYm9sIScpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSkpLCAnSlNPTicsIHtcbiAgc3RyaW5naWZ5OiBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICAgIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICAgIHZhciBhcmdzID0gW2l0XVxuICAgICAgLCBpICAgID0gMVxuICAgICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICAgIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgcmVxdWlyZSgnLi9faGlkZScpKCRTeW1ib2xbUFJPVE9UWVBFXSwgVE9fUFJJTUlUSVZFLCAkU3ltYm9sW1BST1RPVFlQRV0udmFsdWVPZik7XG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpOyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpOyIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnb2JzZXJ2YWJsZScpOyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn0iLCIvKipcbiAqIENyZWF0ZWQgYnkgamFrdWJuaWV6Z29kYSBvbiAwMS8wMi8yMDE3LlxuICovXG5cbmltcG9ydCBBY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZU1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsuLi5DcmVhdGVNb2RhbC5pbml0aWFsU3RhdGUsIG9wZW46IGZhbHNlfVxuICAgIH1cblxuICAgIHN0YXRpYyBpbml0aWFsU3RhdGUgPSB7XG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICB0ZW5hbnROYW1lOiAnJyxcbiAgICAgICAgZXJyb3JzOiB7fVxuICAgIH1cblxuICAgIG9uQXBwcm92ZSAoKSB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZVRlbmFudCgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgb25DYW5jZWwgKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLm9wZW4gJiYgcHJldlN0YXRlLm9wZW4gIT0gdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKENyZWF0ZU1vZGFsLmluaXRpYWxTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY3JlYXRlVGVuYW50KCkge1xuICAgICAgICBsZXQgZXJyb3JzID0ge307XG5cbiAgICAgICAgaWYgKF8uaXNFbXB0eSh0aGlzLnN0YXRlLnRlbmFudE5hbWUpKSB7XG4gICAgICAgICAgICBlcnJvcnNbJ3RlbmFudE5hbWUnXSA9ICdQbGVhc2UgcHJvdmlkZSB0ZW5hbnQgbmFtZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIV8uaXNFbXB0eShlcnJvcnMpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERpc2FibGUgdGhlIGZvcm1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogdHJ1ZX0pO1xuXG4gICAgICAgIGxldCBhY3Rpb25zID0gbmV3IEFjdGlvbnModGhpcy5wcm9wcy50b29sYm94KTtcbiAgICAgICAgYWN0aW9ucy5kb0NyZWF0ZSh0aGlzLnN0YXRlLnRlbmFudE5hbWUpLnRoZW4oKHRlbmFudCk9PntcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlLCBvcGVuOiBmYWxzZX0pO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy50b29sYm94LnJlZnJlc2goKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnM6IHtlcnJvcjogZXJyLm1lc3NhZ2V9LCBsb2FkaW5nOiBmYWxzZX0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfaGFuZGxlSW5wdXRDaGFuZ2UocHJveHksIGZpZWxkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoU3RhZ2UuQmFzaWMuRm9ybS5maWVsZE5hbWVWYWx1ZShmaWVsZCkpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHtNb2RhbCwgQnV0dG9uLCBJY29uLCBGb3JtLCBBcHByb3ZlQnV0dG9uLCBDYW5jZWxCdXR0b259ID0gU3RhZ2UuQmFzaWM7XG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IDxCdXR0b24gY29udGVudD0nQWRkJyBpY29uPSdhZGQgdXNlcicgbGFiZWxQb3NpdGlvbj0nbGVmdCcgLz47XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNb2RhbCB0cmlnZ2VyPXthZGRCdXR0b259IG9wZW49e3RoaXMuc3RhdGUub3Blbn0gb25PcGVuPXsoKT0+dGhpcy5zZXRTdGF0ZSh7b3Blbjp0cnVlfSl9IG9uQ2xvc2U9eygpPT50aGlzLnNldFN0YXRlKHtvcGVuOmZhbHNlfSl9PlxuICAgICAgICAgICAgICAgIDxNb2RhbC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9J2FkZCB1c2VyJy8+IEFkZCB0ZW5hbnRcbiAgICAgICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cblxuICAgICAgICAgICAgICAgIDxNb2RhbC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IGVycm9ycz17dGhpcy5zdGF0ZS5lcnJvcnN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnRlbmFudE5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IG5hbWU9J3RlbmFudE5hbWUnIHBsYWNlaG9sZGVyPSdUZW5hbnQgbmFtZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZW5hbnROYW1lfSBvbkNoYW5nZT17dGhpcy5faGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Db250ZW50PlxuXG4gICAgICAgICAgICAgICAgPE1vZGFsLkFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDxDYW5jZWxCdXR0b24gb25DbGljaz17dGhpcy5vbkNhbmNlbC5iaW5kKHRoaXMpfSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5sb2FkaW5nfSAvPlxuICAgICAgICAgICAgICAgICAgICA8QXBwcm92ZUJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQXBwcm92ZS5iaW5kKHRoaXMpfSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5sb2FkaW5nfSBjb250ZW50PVwiQWRkXCIgaWNvbj1cImFkZCB1c2VyXCIgY29sb3I9XCJncmVlblwiLz5cbiAgICAgICAgICAgICAgICA8L01vZGFsLkFjdGlvbnM+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICApO1xuICAgIH1cbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgamFrdWJuaWV6Z29kYSBvbiAwMS8wMi8yMDE3LlxuICovXG5cbmltcG9ydCBBY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XG5cbmxldCBQcm9wVHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3Vwc01vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzLGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIC4uLkdyb3Vwc01vZGFsLmluaXRpYWxTdGF0ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGluaXRpYWxTdGF0ZSA9IHtcbiAgICAgICAgdXNlckdyb3VwczogW10sXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IHt9XG4gICAgfVxuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgdGVuYW50OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICAgIHVzZXJHcm91cHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgdG9vbGJveDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgICBvbkhpZGU6IFByb3BUeXBlcy5mdW5jXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIG9uSGlkZTogKCk9Pnt9XG4gICAgfTtcblxuICAgIG9uQXBwcm92ZSAoKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVRlbmFudCgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgb25DYW5jZWwgKCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMub3BlbiAmJiBuZXh0UHJvcHMub3Blbikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgLi4uR3JvdXBzTW9kYWwuaW5pdGlhbFN0YXRlLFxuICAgICAgICAgICAgICAgIHVzZXJHcm91cHM6IG5leHRQcm9wcy50ZW5hbnQuZ3JvdXBzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF91cGRhdGVUZW5hbnQoKSB7XG4gICAgICAgIGxldCBlcnJvcnMgPSB7fTtcblxuICAgICAgICAvLyBEaXNhYmxlIHRoZSBmb3JtXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWV9KTtcblxuICAgICAgICBsZXQgdXNlckdyb3Vwc1RvQWRkID0gXy5kaWZmZXJlbmNlKHRoaXMuc3RhdGUudXNlckdyb3VwcywgdGhpcy5wcm9wcy50ZW5hbnQuZ3JvdXBzKTtcbiAgICAgICAgbGV0IHVzZXJHcm91cHNUb1JlbW92ZSA9IF8uZGlmZmVyZW5jZSh0aGlzLnByb3BzLnRlbmFudC5ncm91cHMsIHRoaXMuc3RhdGUudXNlckdyb3Vwcyk7XG5cbiAgICAgICAgbGV0IGFjdGlvbnMgPSBuZXcgQWN0aW9ucyh0aGlzLnByb3BzLnRvb2xib3gpO1xuICAgICAgICBhY3Rpb25zLmRvSGFuZGxlVXNlckdyb3Vwcyh0aGlzLnByb3BzLnRlbmFudC5uYW1lLCB1c2VyR3JvdXBzVG9BZGQsIHVzZXJHcm91cHNUb1JlbW92ZSkudGhlbigoKT0+e1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9vbGJveC5yZWZyZXNoKCk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzOiB7ZXJyb3I6IGVyci5tZXNzYWdlfSwgbG9hZGluZzogZmFsc2V9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2hhbmRsZUlucHV0Q2hhbmdlKHByb3h5LCBmaWVsZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFN0YWdlLkJhc2ljLkZvcm0uZmllbGROYW1lVmFsdWUoZmllbGQpKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7TW9kYWwsIEljb24sIEZvcm0sIENhbmNlbEJ1dHRvbiwgQXBwcm92ZUJ1dHRvbn0gPSBTdGFnZS5CYXNpYztcblxuICAgICAgICBsZXQgdGVuYW50ID0gdGhpcy5wcm9wcy50ZW5hbnQ7XG4gICAgICAgIGxldCB1c2VyR3JvdXBzID0gXy5tYXAodGhpcy5wcm9wcy51c2VyR3JvdXBzLml0ZW1zLCAodXNlckdyb3VwKSA9PiB7IHJldHVybiB7dGV4dDogdXNlckdyb3VwLm5hbWUsIHZhbHVlOiB1c2VyR3JvdXAubmFtZSwga2V5OiB1c2VyR3JvdXAubmFtZX0gfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsIG9wZW49e3RoaXMucHJvcHMub3Blbn0gPlxuICAgICAgICAgICAgPE1vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwidXNlcnNcIi8+IE1vZGlmeSB1c2VyIGdyb3VwcyBmb3Ige3RlbmFudC5uYW1lfVxuICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG5cbiAgICAgICAgICAgIDxNb2RhbC5Db250ZW50PlxuICAgICAgICAgICAgICAgIDxGb3JtIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gZXJyb3JzPXt0aGlzLnN0YXRlLmVycm9yc30+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRHJvcGRvd24gcGxhY2Vob2xkZXI9J0dyb3VwcycgbXVsdGlwbGUgc2VsZWN0aW9uIG9wdGlvbnM9e3VzZXJHcm91cHN9IG5hbWU9XCJ1c2VyR3JvdXBzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJHcm91cHN9IG9uQ2hhbmdlPXt0aGlzLl9oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XG5cbiAgICAgICAgICAgIDxNb2RhbC5BY3Rpb25zPlxuICAgICAgICAgICAgICAgIDxDYW5jZWxCdXR0b24gb25DbGljaz17dGhpcy5vbkNhbmNlbC5iaW5kKHRoaXMpfSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5sb2FkaW5nfSAvPlxuICAgICAgICAgICAgICAgIDxBcHByb3ZlQnV0dG9uIG9uQ2xpY2s9e3RoaXMub25BcHByb3ZlLmJpbmQodGhpcyl9IGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmd9IGljb249XCJ1c2Vyc1wiIGNvbG9yPVwiZ3JlZW5cIiAvPlxuICAgICAgICAgICAgPC9Nb2RhbC5BY3Rpb25zPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgICApO1xuICAgIH1cbn07XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgamFrdWJuaWV6Z29kYSBvbiAwMS8wMi8yMDE3LlxuICovXG5cbmxldCBQcm9wVHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnVBY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgc3RhdGljIEVESVRfVVNFUlNfQUNUSU9OID0gJ3VzZXJzJztcbiAgICBzdGF0aWMgRURJVF9VU0VSX0dST1VQU19BQ1RJT04gPSAndXNlci1ncm91cHMnO1xuICAgIHN0YXRpYyBERUxFVEVfVEVOQU5UX0FDVElPTiA9ICdkZWxldGUnO1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgdGVuYW50OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICAgIG9uU2VsZWN0QWN0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gICAgfTtcblxuICAgIF9vbkRyb3Bkb3duQ2hhbmdlKGV2ZW50LCB7bmFtZX0pIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdEFjdGlvbihuYW1lLCB0aGlzLnByb3BzLnRlbmFudCk7XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgbGV0IHtQb3B1cE1lbnUsIE1lbnV9ID0gU3RhZ2UuQmFzaWM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxQb3B1cE1lbnU+XG4gICAgICAgICAgICAgICAgPE1lbnUgcG9pbnRpbmcgdmVydGljYWw+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0gaWNvbj0ndXNlcicgY29udGVudD0nRWRpdCB1c2VycycgbmFtZT17TWVudUFjdGlvbi5FRElUX1VTRVJTX0FDVElPTn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkRyb3Bkb3duQ2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBpY29uPSd1c2VycycgY29udGVudD0nRWRpdCB1c2VyIGdyb3VwcycgbmFtZT17TWVudUFjdGlvbi5FRElUX1VTRVJfR1JPVVBTX0FDVElPTn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vbkRyb3Bkb3duQ2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBpY29uPSd0cmFzaCcgY29udGVudD0nRGVsZXRlJyBuYW1lPXtNZW51QWN0aW9uLkRFTEVURV9URU5BTlRfQUNUSU9OfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX29uRHJvcGRvd25DaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgIDwvUG9wdXBNZW51PlxuICAgICAgICApXG4gICAgfVxufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGpha3VibmllemdvZGEgb24gMDIvMDIvMjAxNy5cbiAqL1xuXG5pbXBvcnQgQWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuXG5sZXQgUHJvcFR5cGVzID0gUmVhY3QuUHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW5hbnREZXRhaWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcHJvY2Vzc2luZzogZmFsc2UsXG4gICAgICAgICAgICBwcm9jZXNzSXRlbTogJydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHRvb2xib3g6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgdGVuYW50OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICAgIG9uRXJyb3I6IFByb3BUeXBlcy5mdW5jXG4gICAgfTtcblxuICAgIF9yZW1vdmVVc2VyKHVzZXJuYW1lKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Byb2Nlc3NJdGVtOiB1c2VybmFtZSwgcHJvY2Vzc2luZzogdHJ1ZX0pO1xuXG4gICAgICAgIHZhciBhY3Rpb25zID0gbmV3IEFjdGlvbnModGhpcy5wcm9wcy50b29sYm94KTtcbiAgICAgICAgYWN0aW9ucy5kb1JlbW92ZVVzZXIodGhpcy5wcm9wcy50ZW5hbnQubmFtZSwgdXNlcm5hbWUpLnRoZW4oKCk9PntcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9vbGJveC5yZWZyZXNoKCk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvb2xib3guZ2V0RXZlbnRCdXMoKS50cmlnZ2VyKCd0ZW5hbnRzOnJlZnJlc2gnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Byb2Nlc3NJdGVtOiAnJywgcHJvY2Vzc2luZzogZmFsc2V9KTtcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25FcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwcm9jZXNzSXRlbTogJycsIHByb2Nlc3Npbmc6IGZhbHNlfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9yZW1vdmVVc2VyR3JvdXAoZ3JvdXApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cHJvY2Vzc0l0ZW06IGdyb3VwLCBwcm9jZXNzaW5nOiB0cnVlfSk7XG5cbiAgICAgICAgdmFyIGFjdGlvbnMgPSBuZXcgQWN0aW9ucyh0aGlzLnByb3BzLnRvb2xib3gpO1xuICAgICAgICBhY3Rpb25zLmRvUmVtb3ZlVXNlckdyb3VwKHRoaXMucHJvcHMudGVuYW50Lm5hbWUsIGdyb3VwKS50aGVuKCgpPT57XG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvb2xib3gucmVmcmVzaCgpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy50b29sYm94LmdldEV2ZW50QnVzKCkudHJpZ2dlcigndGVuYW50czpyZWZyZXNoJyk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtwcm9jZXNzSXRlbTogJycsIHByb2Nlc3Npbmc6IGZhbHNlfSk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uRXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cHJvY2Vzc0l0ZW06ICcnLCBwcm9jZXNzaW5nOiBmYWxzZX0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7U2VnbWVudCwgTGlzdCwgSWNvbiwgTWVzc2FnZSwgRGl2aWRlcn0gPSBTdGFnZS5CYXNpYztcbiAgICAgICAgbGV0IHRlbmFudCA9IHRoaXMucHJvcHMudGVuYW50O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U2VnbWVudC5Hcm91cCBob3Jpem9udGFsPlxuICAgICAgICAgICAgICAgIDxTZWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwidXNlcnNcIi8+IEdyb3Vwc1xuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICFfLmlzRW1wdHkodGVuYW50Lmdyb3VwcylcbiAgICAgICAgICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBkaXZpZGVkIHZlcnRpY2FsQWxpZ249J21pZGRsZScgY2xhc3NOYW1lPVwibGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVuYW50Lmdyb3Vwcy5tYXAoKGdyb3VwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb2Nlc3NpbmcgPSB0aGlzLnN0YXRlLnByb2Nlc3NpbmcgJiYgdGhpcy5zdGF0ZS5wcm9jZXNzSXRlbSA9PT0gZ3JvdXA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtIGtleT17Z3JvdXB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dyb3VwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gc2l6ZT1cInNtYWxsXCIgbGluayBuYW1lPXtwcm9jZXNzaW5nPydub3RjaGVkIGNpcmNsZSc6J3JlbW92ZSd9IGxvYWRpbmc9e3Byb2Nlc3Npbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyaWdodCBmbG9hdGVkXCIgb25DbGljaz17dGhpcy5fcmVtb3ZlVXNlckdyb3VwLmJpbmQodGhpcywgZ3JvdXApfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5pc0VtcHR5KHRlbmFudC5ncm91cHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UgY29udGVudD1cIk5vIGdyb3VwcyBhdmFpbGFibGVcIi8+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XG4gICAgICAgICAgICAgICAgPFNlZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJ1c2VyXCIvPiBVc2Vyc1xuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICFfLmlzRW1wdHkodGVuYW50LnVzZXJzKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0IGRpdmlkZWQgdmVydGljYWxBbGlnbj0nbWlkZGxlJyBjbGFzc05hbWU9XCJsaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW5hbnQudXNlcnMubWFwKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb2Nlc3NpbmcgPSB0aGlzLnN0YXRlLnByb2Nlc3NpbmcgJiYgdGhpcy5zdGF0ZS5wcm9jZXNzSXRlbSA9PT0gdXNlcjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0ga2V5PXt1c2VyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gc2l6ZT1cInNtYWxsXCIgbGluayBuYW1lPXtwcm9jZXNzaW5nPydub3RjaGVkIGNpcmNsZSc6J3JlbW92ZSd9IGxvYWRpbmc9e3Byb2Nlc3Npbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyaWdodCBmbG9hdGVkXCIgb25DbGljaz17dGhpcy5fcmVtb3ZlVXNlci5iaW5kKHRoaXMsIHVzZXIpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5pc0VtcHR5KHRlbmFudC51c2VycylcbiAgICAgICAgICAgICAgICAgICAgICAgICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBjb250ZW50PVwiTm8gdXNlcnMgYXZhaWxhYmxlXCIvPlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxuICAgICAgICAgICAgPC9TZWdtZW50Lkdyb3VwPlxuICAgICAgICApO1xuICAgIH1cbn07IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGtpbm5lcmV0emluIG9uIDMwLzAxLzIwMTcuXG4gKi9cblxuaW1wb3J0IENyZWF0ZU1vZGFsIGZyb20gJy4vQ3JlYXRlTW9kYWwnO1xuaW1wb3J0IFVzZXJzTW9kYWwgZnJvbSAnLi9Vc2Vyc01vZGFsJztcbmltcG9ydCBHcm91cHNNb2RhbCBmcm9tICcuL0dyb3Vwc01vZGFsJztcbmltcG9ydCBNZW51QWN0aW9uIGZyb20gJy4vTWVudUFjdGlvbic7XG5pbXBvcnQgQWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IFRlbmFudERldGFpbHMgZnJvbSAnLi9UZW5hbnREZXRhaWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVuYW50c1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgc2hvd01vZGFsOiBmYWxzZSxcbiAgICAgICAgICAgIG1vZGFsVHlwZTogJycsXG4gICAgICAgICAgICB0ZW5hbnQ6IHt9LFxuICAgICAgICAgICAgdXNlcnM6IHt9LFxuICAgICAgICAgICAgdXNlckdyb3Vwczoge31cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy53aWRnZXQgIT09IG5leHRQcm9wcy53aWRnZXRcbiAgICAgICAgICAgIHx8IHRoaXMuc3RhdGUgIT0gbmV4dFN0YXRlXG4gICAgICAgICAgICB8fCAhXy5pc0VxdWFsKHRoaXMucHJvcHMuZGF0YSwgbmV4dFByb3BzLmRhdGEpO1xuICAgIH1cblxuICAgIF9yZWZyZXNoRGF0YSgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3I6IG51bGx9KTtcbiAgICAgICAgdGhpcy5wcm9wcy50b29sYm94LnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy50b29sYm94LmdldEV2ZW50QnVzKCkub24oJ3RlbmFudHM6cmVmcmVzaCcsIHRoaXMuX3JlZnJlc2hEYXRhLCB0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy50b29sYm94LmdldEV2ZW50QnVzKCkub2ZmKCd0ZW5hbnRzOnJlZnJlc2gnLCB0aGlzLl9yZWZyZXNoRGF0YSk7XG4gICAgfVxuXG4gICAgZmV0Y2hHcmlkRGF0YShmZXRjaFBhcmFtcykge1xuICAgICAgICB0aGlzLnByb3BzLnRvb2xib3gucmVmcmVzaChmZXRjaFBhcmFtcyk7XG4gICAgfVxuXG4gICAgX3NlbGVjdFRlbmFudCh0ZW5hbnROYW1lKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZFRlbmFudE5hbWUgPSB0aGlzLnByb3BzLnRvb2xib3guZ2V0Q29udGV4dCgpLmdldFZhbHVlKCd0ZW5hbnROYW1lJyk7XG4gICAgICAgIHRoaXMucHJvcHMudG9vbGJveC5nZXRDb250ZXh0KCkuc2V0VmFsdWUoJ3RlbmFudE5hbWUnLCB0ZW5hbnROYW1lID09PSBzZWxlY3RlZFRlbmFudE5hbWUgPyBudWxsIDogdGVuYW50TmFtZSk7XG4gICAgfVxuXG4gICAgX2RlbGV0ZVRlbmFudCgpIHtcbiAgICAgICAgbGV0IHRlbmFudE5hbWUgPSB0aGlzLnN0YXRlLnRlbmFudC5uYW1lO1xuICAgICAgICBsZXQgYWN0aW9ucyA9IG5ldyBBY3Rpb25zKHRoaXMucHJvcHMudG9vbGJveCk7XG4gICAgICAgIGNvbnN0IEhJREVfREVMRVRFX01PREFMX1NUQVRFID0ge21vZGFsVHlwZTogTWVudUFjdGlvbi5ERUxFVEVfVEVOQU5UX0FDVElPTiwgc2hvd01vZGFsOiBmYWxzZX07XG5cbiAgICAgICAgYWN0aW9ucy5kb0RlbGV0ZSh0ZW5hbnROYW1lKS50aGVuKCh0ZW5hbnQpPT57XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi5ISURFX0RFTEVURV9NT0RBTF9TVEFURSwgZXJyb3I6IG51bGx9KTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9vbGJveC5nZXRFdmVudEJ1cygpLnRyaWdnZXIoJ3RlbmFudHM6cmVmcmVzaCcpO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLkhJREVfREVMRVRFX01PREFMX1NUQVRFLCBlcnJvcjogZXJyLm1lc3NhZ2V9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2dldEF2YWlsYWJsZVVzZXJzKHZhbHVlLCB0ZW5hbnQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy50b29sYm94LmxvYWRpbmcodHJ1ZSk7XG5cbiAgICAgICAgbGV0IGFjdGlvbnMgPSBuZXcgQWN0aW9ucyh0aGlzLnByb3BzLnRvb2xib3gpO1xuICAgICAgICBhY3Rpb25zLmRvR2V0VXNlcnMoKS50aGVuKCh1c2Vycyk9PntcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3RlbmFudCwgdXNlcnMsIG1vZGFsVHlwZTogdmFsdWUsIHNob3dNb2RhbDogdHJ1ZX0pO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy50b29sYm94LmxvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yOiBlcnIubWVzc2FnZX0pO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy50b29sYm94LmxvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfZ2V0QXZhaWxhYmxlVXNlckdyb3Vwcyh2YWx1ZSwgdGVuYW50KSB7XG4gICAgICAgIHRoaXMucHJvcHMudG9vbGJveC5sb2FkaW5nKHRydWUpO1xuXG4gICAgICAgIGxldCBhY3Rpb25zID0gbmV3IEFjdGlvbnModGhpcy5wcm9wcy50b29sYm94KTtcbiAgICAgICAgYWN0aW9ucy5kb0dldFVzZXJHcm91cHMoKS50aGVuKCh1c2VyR3JvdXBzKT0+e1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dGVuYW50LCB1c2VyR3JvdXBzLCBtb2RhbFR5cGU6IHZhbHVlLCBzaG93TW9kYWw6IHRydWV9KTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9vbGJveC5sb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcjogZXJyLm1lc3NhZ2V9KTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9vbGJveC5sb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3NlbGVjdEFjdGlvbih2YWx1ZSwgdGVuYW50KSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gTWVudUFjdGlvbi5FRElUX1VTRVJTX0FDVElPTikge1xuICAgICAgICAgICAgdGhpcy5fZ2V0QXZhaWxhYmxlVXNlcnModmFsdWUsIHRlbmFudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IE1lbnVBY3Rpb24uRURJVF9VU0VSX0dST1VQU19BQ1RJT04pIHtcbiAgICAgICAgICAgIHRoaXMuX2dldEF2YWlsYWJsZVVzZXJHcm91cHModmFsdWUsIHRlbmFudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IE1lbnVBY3Rpb24uREVMRVRFX1RFTkFOVF9BQ1RJT04pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3RlbmFudCwgbW9kYWxUeXBlOiB2YWx1ZSwgc2hvd01vZGFsOiB0cnVlfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcjogYEludGVybmFsIGVycm9yOiBVbmtub3duIGFjdGlvbiAoJyR7dmFsdWV9JykgY2Fubm90IGJlIGhhbmRsZWQuYH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2hpZGVNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd01vZGFsOiBmYWxzZX0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtFcnJvck1lc3NhZ2UsIERhdGFUYWJsZSwgTGFiZWx9ID0gU3RhZ2UuQmFzaWM7XG4gICAgICAgIGxldCBEZWxldGVNb2RhbCA9IFN0YWdlLkJhc2ljLkNvbmZpcm07XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3J9Lz5cblxuICAgICAgICAgICAgICAgIDxEYXRhVGFibGUgZmV0Y2hEYXRhPXt0aGlzLmZldGNoR3JpZERhdGEuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsU2l6ZT17ZGF0YS50b3RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXt0aGlzLnByb3BzLndpZGdldC5jb25maWd1cmF0aW9uLnBhZ2VTaXplfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydENvbHVtbj17dGhpcy5wcm9wcy53aWRnZXQuY29uZmlndXJhdGlvbi5zb3J0Q29sdW1ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEFzY2VuZGluZz17dGhpcy5wcm9wcy53aWRnZXQuY29uZmlndXJhdGlvbi5zb3J0QXNjZW5kaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGVuYW50c1RhYmxlXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPERhdGFUYWJsZS5Db2x1bW4gbGFiZWw9XCJOYW1lXCIgbmFtZT1cIm5hbWVcIiB3aWR0aD1cIjMwJVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxEYXRhVGFibGUuQ29sdW1uIGxhYmVsPVwiIyBHcm91cHNcIiB3aWR0aD1cIjMwJVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxEYXRhVGFibGUuQ29sdW1uIGxhYmVsPVwiIyBVc2Vyc1wiIHdpZHRoPVwiMzAlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPERhdGFUYWJsZS5Db2x1bW4gd2lkdGg9XCIxMCVcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuaXRlbXMubWFwKCh0ZW5hbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0YVRhYmxlLlJvd0V4cGFuZGFibGUga2V5PXt0ZW5hbnQubmFtZX0gZXhwYW5kZWQ9e3RlbmFudC5pc1NlbGVjdGVkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRhVGFibGUuUm93IGtleT17dGVuYW50Lm5hbWV9IHNlbGVjdGVkPXt0ZW5hbnQuaXNTZWxlY3RlZH0gb25DbGljaz17dGhpcy5fc2VsZWN0VGVuYW50LmJpbmQodGhpcywgdGVuYW50Lm5hbWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0YVRhYmxlLkRhdGE+e3RlbmFudC5uYW1lfTwvRGF0YVRhYmxlLkRhdGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFUYWJsZS5EYXRhPjxMYWJlbCBjbGFzc05hbWU9XCJncmVlblwiIGhvcml6b250YWw+e3RlbmFudC5ncm91cHMubGVuZ3RofTwvTGFiZWw+PC9EYXRhVGFibGUuRGF0YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0YVRhYmxlLkRhdGE+PExhYmVsIGNsYXNzTmFtZT1cImJsdWVcIiBob3Jpem9udGFsPnt0ZW5hbnQudXNlcnMubGVuZ3RofTwvTGFiZWw+PC9EYXRhVGFibGUuRGF0YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0YVRhYmxlLkRhdGEgY2xhc3NOYW1lPVwiY2VudGVyIGFsaWduZWQgcm93QWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUFjdGlvbiB0ZW5hbnQ9e3RlbmFudH0gb25TZWxlY3RBY3Rpb249e3RoaXMuX3NlbGVjdEFjdGlvbi5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGF0YVRhYmxlLkRhdGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RhdGFUYWJsZS5Sb3c+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRhVGFibGUuRGF0YUV4cGFuZGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRlbmFudERldGFpbHMgdGVuYW50PXt0ZW5hbnR9IHRvb2xib3g9e3RoaXMucHJvcHMudG9vbGJveH0gb25FcnJvcj17KGVycik9PnRoaXMuc2V0U3RhdGUoe2Vycm9yOiBlcnJ9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGF0YVRhYmxlLkRhdGFFeHBhbmRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RhdGFUYWJsZS5Sb3dFeHBhbmRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgPERhdGFUYWJsZS5BY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRlTW9kYWwgd2lkZ2V0PXt0aGlzLnByb3BzLndpZGdldH0gZGF0YT17dGhpcy5wcm9wcy5kYXRhfSB0b29sYm94PXt0aGlzLnByb3BzLnRvb2xib3h9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9EYXRhVGFibGUuQWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgPC9EYXRhVGFibGU+XG5cblxuICAgICAgICAgICAgICAgIDxEZWxldGVNb2RhbCBjb250ZW50PXtgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0ZW5hbnQgJyR7dGhpcy5zdGF0ZS50ZW5hbnQubmFtZX0nP2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUubW9kYWxUeXBlID09PSBNZW51QWN0aW9uLkRFTEVURV9URU5BTlRfQUNUSU9OICYmIHRoaXMuc3RhdGUuc2hvd01vZGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbmZpcm09e3RoaXMuX2RlbGV0ZVRlbmFudC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5faGlkZU1vZGFsLmJpbmQodGhpcyl9Lz5cblxuICAgICAgICAgICAgICAgIDxVc2Vyc01vZGFsIHdpZGdldD17dGhpcy5wcm9wcy53aWRnZXR9IHRvb2xib3g9e3RoaXMucHJvcHMudG9vbGJveH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm1vZGFsVHlwZSA9PT0gTWVudUFjdGlvbi5FRElUX1VTRVJTX0FDVElPTiAmJiB0aGlzLnN0YXRlLnNob3dNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkhpZGU9e3RoaXMuX2hpZGVNb2RhbC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbmFudD17dGhpcy5zdGF0ZS50ZW5hbnR9IHVzZXJzPXt0aGlzLnN0YXRlLnVzZXJzfS8+XG5cbiAgICAgICAgICAgICAgICA8R3JvdXBzTW9kYWwgd2lkZ2V0PXt0aGlzLnByb3BzLndpZGdldH0gdG9vbGJveD17dGhpcy5wcm9wcy50b29sYm94fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm1vZGFsVHlwZSA9PT0gTWVudUFjdGlvbi5FRElUX1VTRVJfR1JPVVBTX0FDVElPTiAmJiB0aGlzLnN0YXRlLnNob3dNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25IaWRlPXt0aGlzLl9oaWRlTW9kYWwuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVuYW50PXt0aGlzLnN0YXRlLnRlbmFudH0gdXNlckdyb3Vwcz17dGhpcy5zdGF0ZS51c2VyR3JvdXBzfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgamFrdWJuaWV6Z29kYSBvbiAwMS8wMi8yMDE3LlxuICovXG5cbmltcG9ydCBBY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XG5cbmxldCBQcm9wVHlwZXMgPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJzTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMsY29udGV4dCkge1xuICAgICAgICBzdXBlcihwcm9wcyxjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgLi4uVXNlcnNNb2RhbC5pbml0aWFsU3RhdGVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBpbml0aWFsU3RhdGUgPSB7XG4gICAgICAgIHVzZXJzOiBbXSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yczoge31cbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICB0ZW5hbnQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgdXNlcnM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgdG9vbGJveDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgICBvbkhpZGU6IFByb3BUeXBlcy5mdW5jXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIG9uSGlkZTogKCk9Pnt9XG4gICAgfTtcblxuICAgIG9uQXBwcm92ZSAoKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZVRlbmFudCgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgb25DYW5jZWwgKCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBpZiAoIXRoaXMucHJvcHMub3BlbiAmJiBuZXh0UHJvcHMub3Blbikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgLi4uVXNlcnNNb2RhbC5pbml0aWFsU3RhdGUsXG4gICAgICAgICAgICAgICAgdXNlcnM6IG5leHRQcm9wcy50ZW5hbnQudXNlcnNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3VwZGF0ZVRlbmFudCgpIHtcbiAgICAgICAgbGV0IGVycm9ycyA9IHt9O1xuXG4gICAgICAgIC8vIERpc2FibGUgdGhlIGZvcm1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogdHJ1ZX0pO1xuXG4gICAgICAgIGxldCB1c2Vyc1RvQWRkID0gXy5kaWZmZXJlbmNlKHRoaXMuc3RhdGUudXNlcnMsIHRoaXMucHJvcHMudGVuYW50LnVzZXJzKTtcbiAgICAgICAgbGV0IHVzZXJzVG9SZW1vdmUgPSBfLmRpZmZlcmVuY2UodGhpcy5wcm9wcy50ZW5hbnQudXNlcnMsIHRoaXMuc3RhdGUudXNlcnMpO1xuXG4gICAgICAgIGxldCBhY3Rpb25zID0gbmV3IEFjdGlvbnModGhpcy5wcm9wcy50b29sYm94KTtcbiAgICAgICAgYWN0aW9ucy5kb0hhbmRsZVVzZXJzKHRoaXMucHJvcHMudGVuYW50Lm5hbWUsIHVzZXJzVG9BZGQsIHVzZXJzVG9SZW1vdmUpLnRoZW4oKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlfSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvb2xib3gucmVmcmVzaCgpO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkhpZGUoKTtcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yczoge2Vycm9yOiBlcnIubWVzc2FnZX0sIGxvYWRpbmc6IGZhbHNlfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9oYW5kbGVJbnB1dENoYW5nZShwcm94eSwgZmllbGQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShTdGFnZS5CYXNpYy5Gb3JtLmZpZWxkTmFtZVZhbHVlKGZpZWxkKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge01vZGFsLCBJY29uLCBGb3JtLCBBcHByb3ZlQnV0dG9uLCBDYW5jZWxCdXR0b259ID0gU3RhZ2UuQmFzaWM7XG5cbiAgICAgICAgbGV0IHRlbmFudCA9IHRoaXMucHJvcHMudGVuYW50O1xuICAgICAgICBsZXQgdXNlcnMgPSBfLm1hcCh0aGlzLnByb3BzLnVzZXJzLml0ZW1zLCAodXNlcikgPT4geyByZXR1cm4ge3RleHQ6IHVzZXIudXNlcm5hbWUsIHZhbHVlOiB1c2VyLnVzZXJuYW1lLCBrZXk6IHVzZXIudXNlcm5hbWV9IH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDxNb2RhbCBvcGVuPXt0aGlzLnByb3BzLm9wZW59PlxuICAgICAgICAgICAgPE1vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwidXNlclwiLz4gTW9kaWZ5IHVzZXJzIGZvciB0ZW5hbnQge3RlbmFudC5uYW1lfVxuICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG5cbiAgICAgICAgICAgIDxNb2RhbC5Db250ZW50PlxuICAgICAgICAgICAgICAgIDxGb3JtIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gZXJyb3JzPXt0aGlzLnN0YXRlLmVycm9yc30+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRHJvcGRvd24gcGxhY2Vob2xkZXI9J1VzZXJzJyBtdWx0aXBsZSBzZWxlY3Rpb24gb3B0aW9ucz17dXNlcnN9IG5hbWU9XCJ1c2Vyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS51c2Vyc30gb25DaGFuZ2U9e3RoaXMuX2hhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvTW9kYWwuQ29udGVudD5cblxuICAgICAgICAgICAgPE1vZGFsLkFjdGlvbnM+XG4gICAgICAgICAgICAgICAgPENhbmNlbEJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQ2FuY2VsLmJpbmQodGhpcyl9IGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmd9IC8+XG4gICAgICAgICAgICAgICAgPEFwcHJvdmVCdXR0b24gb25DbGljaz17dGhpcy5vbkFwcHJvdmUuYmluZCh0aGlzKX0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZ30gY29udGVudD1cIlNhdmVcIiBpY29uPVwidXNlclwiIGNvbG9yPVwiZ3JlZW5cIi8+XG4gICAgICAgICAgICA8L01vZGFsLkFjdGlvbnM+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICAgICk7XG4gICAgfVxufTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBqYWt1Ym5pZXpnb2RhIG9uIDMxLzAxLzIwMTcuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKHRvb2xib3gpIHtcbiAgICAgICAgdGhpcy50b29sYm94ID0gdG9vbGJveDtcbiAgICB9XG5cbiAgICBkb0RlbGV0ZSh0ZW5hbnROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvb2xib3guZ2V0TWFuYWdlcigpLmRvRGVsZXRlKGAvdGVuYW50cy8ke3RlbmFudE5hbWV9YCk7XG4gICAgfVxuXG4gICAgZG9DcmVhdGUodGVuYW50TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50b29sYm94LmdldE1hbmFnZXIoKS5kb1Bvc3QoYC90ZW5hbnRzLyR7dGVuYW50TmFtZX1gKTtcbiAgICB9XG5cbiAgICBkb0FkZFVzZXIodGVuYW50TmFtZSwgdXNlcm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9vbGJveC5nZXRNYW5hZ2VyKCkuZG9QdXQoJy90ZW5hbnRzL3VzZXJzJywgbnVsbCwge1xuICAgICAgICAgICAgJ3VzZXJuYW1lJzogdXNlcm5hbWUsXG4gICAgICAgICAgICAndGVuYW50X25hbWUnOiB0ZW5hbnROYW1lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRvUmVtb3ZlVXNlcih0ZW5hbnROYW1lLCB1c2VybmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50b29sYm94LmdldE1hbmFnZXIoKS5kb0RlbGV0ZSgnL3RlbmFudHMvdXNlcnMnLCBudWxsLCB7XG4gICAgICAgICAgICAndXNlcm5hbWUnOiB1c2VybmFtZSxcbiAgICAgICAgICAgICd0ZW5hbnRfbmFtZSc6IHRlbmFudE5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZG9IYW5kbGVVc2Vycyh0ZW5hbnROYW1lLCB1c2Vyc1RvQWRkLCB1c2Vyc1RvRGVsZXRlKSB7XG4gICAgICAgIGxldCBhZGRBY3Rpb25zID0gXy5tYXAodXNlcnNUb0FkZCwgKHVzZXJuYW1lKSA9PiB0aGlzLmRvQWRkVXNlcih0ZW5hbnROYW1lLCB1c2VybmFtZSkpO1xuICAgICAgICBsZXQgZGVsZXRlQWN0aW9ucyA9IF8ubWFwKHVzZXJzVG9EZWxldGUsICh1c2VybmFtZSk9PiB0aGlzLmRvUmVtb3ZlVXNlcih0ZW5hbnROYW1lLCB1c2VybmFtZSkpO1xuXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChfLmNvbmNhdChhZGRBY3Rpb25zLCBkZWxldGVBY3Rpb25zKSk7XG4gICAgfVxuXG4gICAgZG9BZGRVc2VyR3JvdXAodGVuYW50TmFtZSwgdXNlckdyb3VwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvb2xib3guZ2V0TWFuYWdlcigpLmRvUHV0KCcvdGVuYW50cy91c2VyLWdyb3VwcycsIG51bGwsIHtcbiAgICAgICAgICAgICdncm91cF9uYW1lJzogdXNlckdyb3VwLFxuICAgICAgICAgICAgJ3RlbmFudF9uYW1lJzogdGVuYW50TmFtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkb1JlbW92ZVVzZXJHcm91cCh0ZW5hbnROYW1lLCB1c2VyR3JvdXApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9vbGJveC5nZXRNYW5hZ2VyKCkuZG9EZWxldGUoJy90ZW5hbnRzL3VzZXItZ3JvdXBzJyxudWxsLHtcbiAgICAgICAgICAgICdncm91cF9uYW1lJzogdXNlckdyb3VwLFxuICAgICAgICAgICAgJ3RlbmFudF9uYW1lJzogdGVuYW50TmFtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkb0hhbmRsZVVzZXJHcm91cHModGVuYW50TmFtZSwgZ3JvdXBzVG9BZGQsIGdyb3Vwc1RvRGVsZXRlKSB7XG4gICAgICAgIGxldCBhZGRBY3Rpb25zID0gXy5tYXAoZ3JvdXBzVG9BZGQsKHVzZXJHcm91cCkgPT4gdGhpcy5kb0FkZFVzZXJHcm91cCh0ZW5hbnROYW1lLCB1c2VyR3JvdXApKTtcbiAgICAgICAgbGV0IGRlbGV0ZUFjdGlvbnMgPSBfLm1hcChncm91cHNUb0RlbGV0ZSwodXNlckdyb3VwKT0+IHRoaXMuZG9SZW1vdmVVc2VyR3JvdXAodGVuYW50TmFtZSwgdXNlckdyb3VwKSk7XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKF8uY29uY2F0KGFkZEFjdGlvbnMsIGRlbGV0ZUFjdGlvbnMpKTtcbiAgICB9XG5cbiAgICBkb0dldFVzZXJHcm91cHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvb2xib3guZ2V0TWFuYWdlcigpLmRvR2V0KCcvdXNlci1ncm91cHM/X2luY2x1ZGU9bmFtZScpO1xuICAgIH1cblxuICAgIGRvR2V0VXNlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvb2xib3guZ2V0TWFuYWdlcigpLmRvR2V0KCcvdXNlcnM/X2luY2x1ZGU9dXNlcm5hbWUnKTtcbiAgICB9XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGtpbm5lcmV0emluIG9uIDMwLzAxLzIwMTcuXG4gKi9cblxuaW1wb3J0IFRlbmFudHNUYWJsZSBmcm9tICcuL1RlbmFudHNUYWJsZSc7XG5cblN0YWdlLmRlZmluZVdpZGdldCh7XG4gICAgaWQ6ICd0ZW5hbnRzJyxcbiAgICBuYW1lOiAnVGVuYW50cyBtYW5hZ2VtZW50JyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgd2lkZ2V0IHNob3dzIGEgbGlzdCBvZiBhdmFpbGFibGUgdGVuYW50cywgYW5kIGFsbG93IG1hbmFnaW5nIHRoZW0nLFxuICAgIGluaXRpYWxXaWR0aDogNSxcbiAgICBpbml0aWFsSGVpZ2h0OiAxNixcbiAgICBjb2xvcjogJ2dyZWVuJyxcbiAgICBmZXRjaFVybDogJ1ttYW5hZ2VyXS90ZW5hbnRzP19nZXRfZGF0YT10cnVlW3BhcmFtc10nLFxuICAgIGlzUmVhY3Q6IHRydWUsXG4gICAgaXNBZG1pbjogdHJ1ZSxcbiAgICBpbml0aWFsQ29uZmlndXJhdGlvbjogW1xuICAgICAgICBTdGFnZS5HZW5lcmljQ29uZmlnLlBPTExJTkdfVElNRV9DT05GSUcoMzApLFxuICAgICAgICBTdGFnZS5HZW5lcmljQ29uZmlnLlBBR0VfU0laRV9DT05GSUcoKSxcbiAgICAgICAgU3RhZ2UuR2VuZXJpY0NvbmZpZy5TT1JUX0NPTFVNTl9DT05GSUcoJ25hbWUnKSxcbiAgICAgICAgU3RhZ2UuR2VuZXJpY0NvbmZpZy5TT1JUX0FTQ0VORElOR19DT05GSUcodHJ1ZSlcbiAgICBdLFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbih3aWRnZXQsIGRhdGEsIGVycm9yLCB0b29sYm94KSB7XG4gICAgICAgIGlmIChfLmlzRW1wdHkoZGF0YSkpIHtcbiAgICAgICAgICAgIHJldHVybiA8U3RhZ2UuQmFzaWMuTG9hZGluZy8+O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGVjdGVkVGVuYW50ID0gdG9vbGJveC5nZXRDb250ZXh0KCkuZ2V0VmFsdWUoJ3RlbmFudE5hbWUnKTtcblxuICAgICAgICBsZXQgZm9ybWF0dGVkRGF0YSA9IGRhdGE7XG4gICAgICAgIGZvcm1hdHRlZERhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBmb3JtYXR0ZWREYXRhLCB7XG4gICAgICAgICAgICBpdGVtczogXy5tYXAgKGZvcm1hdHRlZERhdGEuaXRlbXMsIChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBzOiBpdGVtLmdyb3VwcyxcbiAgICAgICAgICAgICAgICAgICAgdXNlcnM6IGl0ZW0udXNlcnMsXG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IGl0ZW0ubmFtZSA9PT0gc2VsZWN0ZWRUZW5hbnRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0b3RhbCA6IF8uZ2V0KGRhdGEsICdtZXRhZGF0YS5wYWdpbmF0aW9uLnRvdGFsJywgMClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUZW5hbnRzVGFibGUgd2lkZ2V0PXt3aWRnZXR9IGRhdGE9e2Zvcm1hdHRlZERhdGF9IHRvb2xib3g9e3Rvb2xib3h9Lz5cbiAgICAgICAgKTtcblxuICAgIH1cbn0pO1xuIl19
