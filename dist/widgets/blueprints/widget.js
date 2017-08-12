(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":14}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":15}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":16}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":17}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":18}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":19}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":20}],8:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],9:[function(require,module,exports){
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
},{"../core-js/object/define-property":3}],10:[function(require,module,exports){
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
},{"../core-js/object/assign":1}],11:[function(require,module,exports){
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
},{"../core-js/object/create":2,"../core-js/object/set-prototype-of":5,"../helpers/typeof":13}],12:[function(require,module,exports){
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
},{"../helpers/typeof":13}],13:[function(require,module,exports){
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
},{"../core-js/symbol":6,"../core-js/symbol/iterator":7}],14:[function(require,module,exports){
require('../../modules/es6.object.assign');
module.exports = require('../../modules/_core').Object.assign;
},{"../../modules/_core":26,"../../modules/es6.object.assign":81}],15:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};
},{"../../modules/_core":26,"../../modules/es6.object.create":82}],16:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":26,"../../modules/es6.object.define-property":83}],17:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;
},{"../../modules/_core":26,"../../modules/es6.object.get-prototype-of":84}],18:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;
},{"../../modules/_core":26,"../../modules/es6.object.set-prototype-of":85}],19:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":26,"../../modules/es6.object.to-string":86,"../../modules/es6.symbol":88,"../../modules/es7.symbol.async-iterator":89,"../../modules/es7.symbol.observable":90}],20:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":78,"../../modules/es6.string.iterator":87,"../../modules/web.dom.iterable":91}],21:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],22:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],23:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":42}],24:[function(require,module,exports){
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
},{"./_to-index":70,"./_to-iobject":72,"./_to-length":73}],25:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],26:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],27:[function(require,module,exports){
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
},{"./_a-function":21}],28:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],29:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":34}],30:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":35,"./_is-object":42}],31:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],32:[function(require,module,exports){
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
},{"./_object-gops":57,"./_object-keys":60,"./_object-pie":61}],33:[function(require,module,exports){
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
},{"./_core":26,"./_ctx":27,"./_global":35,"./_hide":37}],34:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],35:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],36:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],37:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":29,"./_object-dp":52,"./_property-desc":63}],38:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":35}],39:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":29,"./_dom-create":30,"./_fails":34}],40:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":25}],41:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":25}],42:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],43:[function(require,module,exports){
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
},{"./_hide":37,"./_object-create":51,"./_property-desc":63,"./_set-to-string-tag":66,"./_wks":79}],44:[function(require,module,exports){
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
},{"./_export":33,"./_has":36,"./_hide":37,"./_iter-create":43,"./_iterators":46,"./_library":48,"./_object-gpo":58,"./_redefine":64,"./_set-to-string-tag":66,"./_wks":79}],45:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],46:[function(require,module,exports){
module.exports = {};
},{}],47:[function(require,module,exports){
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
},{"./_object-keys":60,"./_to-iobject":72}],48:[function(require,module,exports){
module.exports = true;
},{}],49:[function(require,module,exports){
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
},{"./_fails":34,"./_has":36,"./_is-object":42,"./_object-dp":52,"./_uid":76}],50:[function(require,module,exports){
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
},{"./_fails":34,"./_iobject":40,"./_object-gops":57,"./_object-keys":60,"./_object-pie":61,"./_to-object":74}],51:[function(require,module,exports){
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

},{"./_an-object":23,"./_dom-create":30,"./_enum-bug-keys":31,"./_html":38,"./_object-dps":53,"./_shared-key":67}],52:[function(require,module,exports){
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
},{"./_an-object":23,"./_descriptors":29,"./_ie8-dom-define":39,"./_to-primitive":75}],53:[function(require,module,exports){
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
},{"./_an-object":23,"./_descriptors":29,"./_object-dp":52,"./_object-keys":60}],54:[function(require,module,exports){
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
},{"./_descriptors":29,"./_has":36,"./_ie8-dom-define":39,"./_object-pie":61,"./_property-desc":63,"./_to-iobject":72,"./_to-primitive":75}],55:[function(require,module,exports){
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

},{"./_object-gopn":56,"./_to-iobject":72}],56:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":31,"./_object-keys-internal":59}],57:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],58:[function(require,module,exports){
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
},{"./_has":36,"./_shared-key":67,"./_to-object":74}],59:[function(require,module,exports){
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
},{"./_array-includes":24,"./_has":36,"./_shared-key":67,"./_to-iobject":72}],60:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":31,"./_object-keys-internal":59}],61:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],62:[function(require,module,exports){
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
},{"./_core":26,"./_export":33,"./_fails":34}],63:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],64:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":37}],65:[function(require,module,exports){
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
},{"./_an-object":23,"./_ctx":27,"./_is-object":42,"./_object-gopd":54}],66:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":36,"./_object-dp":52,"./_wks":79}],67:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":68,"./_uid":76}],68:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":35}],69:[function(require,module,exports){
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
},{"./_defined":28,"./_to-integer":71}],70:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":71}],71:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],72:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":28,"./_iobject":40}],73:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":71}],74:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":28}],75:[function(require,module,exports){
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
},{"./_is-object":42}],76:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],77:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":26,"./_global":35,"./_library":48,"./_object-dp":52,"./_wks-ext":78}],78:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":79}],79:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":35,"./_shared":68,"./_uid":76}],80:[function(require,module,exports){
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
},{"./_add-to-unscopables":22,"./_iter-define":44,"./_iter-step":45,"./_iterators":46,"./_to-iobject":72}],81:[function(require,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = require('./_export');

$export($export.S + $export.F, 'Object', {assign: require('./_object-assign')});
},{"./_export":33,"./_object-assign":50}],82:[function(require,module,exports){
var $export = require('./_export')
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: require('./_object-create')});
},{"./_export":33,"./_object-create":51}],83:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":29,"./_export":33,"./_object-dp":52}],84:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = require('./_to-object')
  , $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./_object-gpo":58,"./_object-sap":62,"./_to-object":74}],85:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', {setPrototypeOf: require('./_set-proto').set});
},{"./_export":33,"./_set-proto":65}],86:[function(require,module,exports){

},{}],87:[function(require,module,exports){
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
},{"./_iter-define":44,"./_string-at":69}],88:[function(require,module,exports){
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
},{"./_an-object":23,"./_descriptors":29,"./_enum-keys":32,"./_export":33,"./_fails":34,"./_global":35,"./_has":36,"./_hide":37,"./_is-array":41,"./_keyof":47,"./_library":48,"./_meta":49,"./_object-create":51,"./_object-dp":52,"./_object-gopd":54,"./_object-gopn":56,"./_object-gopn-ext":55,"./_object-gops":57,"./_object-keys":60,"./_object-pie":61,"./_property-desc":63,"./_redefine":64,"./_set-to-string-tag":66,"./_shared":68,"./_to-iobject":72,"./_to-primitive":75,"./_uid":76,"./_wks":79,"./_wks-define":77,"./_wks-ext":78}],89:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":77}],90:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":77}],91:[function(require,module,exports){
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
},{"./_global":35,"./_hide":37,"./_iterators":46,"./_wks":79,"./es6.array.iterator":80}],92:[function(require,module,exports){
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

var _UploadBlueprintModal = require("./UploadBlueprintModal");

var _UploadBlueprintModal2 = _interopRequireDefault(_UploadBlueprintModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PropTypes = React.PropTypes; /**
                                  * Created by kinneretzin on 08/01/2017.
                                  */

var BlueprintsCatalog = function (_React$Component) {
    (0, _inherits3.default)(BlueprintsCatalog, _React$Component);

    function BlueprintsCatalog() {
        (0, _classCallCheck3.default)(this, BlueprintsCatalog);
        return (0, _possibleConstructorReturn3.default)(this, (BlueprintsCatalog.__proto__ || (0, _getPrototypeOf2.default)(BlueprintsCatalog)).apply(this, arguments));
    }

    (0, _createClass3.default)(BlueprintsCatalog, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var _Stage$Basic = Stage.Basic,
                DataSegment = _Stage$Basic.DataSegment,
                Grid = _Stage$Basic.Grid,
                Image = _Stage$Basic.Image,
                Button = _Stage$Basic.Button,
                Label = _Stage$Basic.Label;


            var index = 0;
            var blueprintsItems = this.props.data.items.map(function (item) {
                return React.createElement(
                    Grid.Column,
                    { key: item.id },
                    React.createElement(
                        DataSegment.Item,
                        { selected: item.isSelected, className: "fullHeight",
                            onClick: function onClick(event) {
                                event.stopPropagation();_this2.props.onSelectBlueprint(item);
                            } },
                        React.createElement(
                            Grid,
                            null,
                            React.createElement(
                                Grid.Row,
                                { className: "bottomDivider" },
                                React.createElement(
                                    Grid.Column,
                                    { width: "4" },
                                    React.createElement(Image, { src: "/ba/image/" + item.id, centered: true })
                                ),
                                React.createElement(
                                    Grid.Column,
                                    { width: "12" },
                                    React.createElement(
                                        "h3",
                                        { className: "ui icon header verticalCenter" },
                                        React.createElement(
                                            "a",
                                            { className: "underline", href: "javascript:void(0)" },
                                            item.id
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                Grid.Row,
                                { className: "noPadded" },
                                React.createElement(
                                    Grid.Column,
                                    { width: "7" },
                                    React.createElement(
                                        "h5",
                                        { className: "ui icon header" },
                                        "Created"
                                    )
                                ),
                                React.createElement(
                                    Grid.Column,
                                    { width: "9" },
                                    item.created_at
                                )
                            ),
                            React.createElement(
                                Grid.Row,
                                { className: "noPadded" },
                                React.createElement(
                                    Grid.Column,
                                    { width: "7" },
                                    React.createElement(
                                        "h5",
                                        { className: "ui icon header" },
                                        "Updated"
                                    )
                                ),
                                React.createElement(
                                    Grid.Column,
                                    { width: "9" },
                                    item.updated_at
                                )
                            ),
                            React.createElement(
                                Grid.Row,
                                { className: "noPadded" },
                                React.createElement(
                                    Grid.Column,
                                    { width: "7" },
                                    React.createElement(
                                        "h5",
                                        { className: "ui icon header" },
                                        "Creator"
                                    )
                                ),
                                React.createElement(
                                    Grid.Column,
                                    { width: "9" },
                                    item.created_by
                                )
                            ),
                            React.createElement(
                                Grid.Row,
                                { className: "noPadded" },
                                React.createElement(
                                    Grid.Column,
                                    { width: "7" },
                                    React.createElement(
                                        "h5",
                                        { className: "ui icon header" },
                                        "# Deployments"
                                    )
                                ),
                                React.createElement(
                                    Grid.Column,
                                    { width: "9" },
                                    React.createElement(
                                        Label,
                                        { color: "green", horizontal: true },
                                        item.depCount
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            Grid.Column,
                            { width: "16" },
                            React.createElement("div", { style: { height: "50px" } })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "actionButtons" },
                        React.createElement(Button, { icon: "trash", content: "Delete", className: "icon", basic: true,
                            onClick: function onClick(event) {
                                event.stopPropagation();_this2.props.onDeleteBlueprint(item);
                            } }),
                        React.createElement(Button, { icon: "rocket", content: "Deploy", className: "labeled icon",
                            onClick: function onClick(event) {
                                event.stopPropagation();_this2.props.onCreateDeployment(item);
                            } })
                    )
                );
            });

            var blueprintsRows = [];
            var row = [];
            _.each(blueprintsItems, function (blueprintItem, index) {
                row.push(blueprintItem);
                if ((index + 1) % 3 === 0) {
                    blueprintsRows.push(React.createElement(
                        "div",
                        { key: blueprintsRows.length + 1, className: "three column row" },
                        row
                    ));
                    row = [];
                }
            });
            if (row.length > 0) {
                blueprintsRows.push(React.createElement(
                    "div",
                    { key: blueprintsRows.length + 1, className: "three column row" },
                    row
                ));
            }

            return React.createElement(
                "div",
                null,
                React.createElement(
                    DataSegment,
                    { totalSize: this.props.data.total,
                        pageSize: this.props.widget.configuration.pageSize,
                        fetchData: this.props.fetchData, className: "blueprintCatalog" },
                    React.createElement(
                        DataSegment.Action,
                        null,
                        React.createElement(_UploadBlueprintModal2.default, { widget: this.props.widget, data: this.props.data, toolbox: this.props.toolbox })
                    ),
                    React.createElement(
                        Grid,
                        null,
                        blueprintsRows
                    )
                )
            );
        }
    }]);
    return BlueprintsCatalog;
}(React.Component);

BlueprintsCatalog.propTypes = {
    data: PropTypes.object.isRequired,
    widget: PropTypes.object.isRequired,
    toolbox: PropTypes.object.isRequired,
    fetchData: PropTypes.func,
    onSelectBlueprint: PropTypes.func,
    onDeleteBlueprint: PropTypes.func,
    onCreateDeployment: PropTypes.func

};
BlueprintsCatalog.defaultProps = {
    fetchData: function fetchData() {},
    onSelectBlueprint: function onSelectBlueprint() {},
    onDeleteBlueprint: function onDeleteBlueprint() {},
    onCreateDeployment: function onCreateDeployment() {}
};
exports.default = BlueprintsCatalog;

},{"./UploadBlueprintModal":95,"babel-runtime/core-js/object/get-prototype-of":4,"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9,"babel-runtime/helpers/inherits":11,"babel-runtime/helpers/possibleConstructorReturn":12}],93:[function(require,module,exports){
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

var _BlueprintsTable = require('./BlueprintsTable');

var _BlueprintsTable2 = _interopRequireDefault(_BlueprintsTable);

var _BlueprintsCatalog = require('./BlueprintsCatalog');

var _BlueprintsCatalog2 = _interopRequireDefault(_BlueprintsCatalog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by kinneretzin on 02/10/2016.
 */

var BlueprintList = function (_React$Component) {
    (0, _inherits3.default)(BlueprintList, _React$Component);

    function BlueprintList(props, context) {
        (0, _classCallCheck3.default)(this, BlueprintList);

        var _this = (0, _possibleConstructorReturn3.default)(this, (BlueprintList.__proto__ || (0, _getPrototypeOf2.default)(BlueprintList)).call(this, props, context));

        _this.state = {
            showDeploymentModal: false,
            blueprint: {},
            confirmDelete: false,
            error: null
        };
        return _this;
    }

    (0, _createClass3.default)(BlueprintList, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return this.props.widget !== nextProps.widget || this.state != nextState || !_.isEqual(this.props.data, nextProps.data);
        }
    }, {
        key: '_selectBlueprint',
        value: function _selectBlueprint(item) {
            if (this.props.widget.configuration.clickToDrillDown) {
                this.props.toolbox.drillDown(this.props.widget, 'blueprint', { blueprintId: item.id }, item.id);
            } else {
                var oldSelectedBlueprintId = this.props.toolbox.getContext().getValue('blueprintId');
                this.props.toolbox.getContext().setValue('blueprintId', item.id === oldSelectedBlueprintId ? null : item.id);
            }
        }
    }, {
        key: '_createDeployment',
        value: function _createDeployment(item) {
            var _this2 = this;

            // Get the full blueprint data (including plan for inputs)
            var actions = new Stage.Common.BlueprintActions(this.props.toolbox);
            actions.doGetFullBlueprintData(item).then(function (blueprint) {
                _this2.setState({ error: null, blueprint: blueprint, showDeploymentModal: true });
            }).catch(function (err) {
                _this2.setState({ error: err.message });
            });
        }
    }, {
        key: '_deleteBlueprintConfirm',
        value: function _deleteBlueprintConfirm(item) {
            this.setState({
                confirmDelete: true,
                item: item
            });
        }
    }, {
        key: '_deleteBlueprint',
        value: function _deleteBlueprint() {
            var _this3 = this;

            if (!this.state.item) {
                this.setState({ error: 'Something went wrong, no blueprint was selected for delete' });
                return;
            }

            var actions = new Stage.Common.BlueprintActions(this.props.toolbox);
            this.setState({ confirmDelete: false });
            actions.doDelete(this.state.item).then(function () {
                _this3.props.toolbox.getEventBus().trigger('blueprints:refresh');
            }).catch(function (err) {
                _this3.setState({ error: err.message });
            });
        }
    }, {
        key: '_refreshData',
        value: function _refreshData() {
            this.props.toolbox.refresh();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.toolbox.getEventBus().on('blueprints:refresh', this._refreshData, this);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.toolbox.getEventBus().off('blueprints:refresh', this._refreshData);
        }
    }, {
        key: '_hideDeploymentModal',
        value: function _hideDeploymentModal() {
            this.setState({ showDeploymentModal: false });
        }
    }, {
        key: 'fetchGridData',
        value: function fetchGridData(fetchParams) {
            this.props.toolbox.refresh(fetchParams);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _Stage$Basic = Stage.Basic,
                ErrorMessage = _Stage$Basic.ErrorMessage,
                Confirm = _Stage$Basic.Confirm;

            var DeployModal = Stage.Common.DeployBlueprintModal;

            var shouldShowTable = this.props.widget.configuration['displayStyle'] === 'table';

            return React.createElement(
                'div',
                null,
                React.createElement(ErrorMessage, { error: this.state.error }),
                shouldShowTable ? React.createElement(_BlueprintsTable2.default, {
                    widget: this.props.widget, data: this.props.data, toolbox: this.props.toolbox,
                    fetchGridData: this.fetchGridData.bind(this),
                    onSelectBlueprint: this._selectBlueprint.bind(this),
                    onDeleteBlueprint: this._deleteBlueprintConfirm.bind(this),
                    onCreateDeployment: this._createDeployment.bind(this)
                }) : React.createElement(_BlueprintsCatalog2.default, {
                    widget: this.props.widget, data: this.props.data, toolbox: this.props.toolbox,
                    fetchData: this.fetchGridData.bind(this),
                    onSelectBlueprint: this._selectBlueprint.bind(this),
                    onDeleteBlueprint: this._deleteBlueprintConfirm.bind(this),
                    onCreateDeployment: this._createDeployment.bind(this)
                }),
                React.createElement(Confirm, { content: 'Are you sure you want to remove this blueprint?',
                    open: this.state.confirmDelete,
                    onConfirm: this._deleteBlueprint.bind(this),
                    onCancel: function onCancel() {
                        return _this4.setState({ confirmDelete: false });
                    } }),
                React.createElement(DeployModal, { open: this.state.showDeploymentModal,
                    blueprint: this.state.blueprint,
                    onHide: this._hideDeploymentModal.bind(this),
                    toolbox: this.props.toolbox })
            );
        }
    }]);
    return BlueprintList;
}(React.Component);

exports.default = BlueprintList;
;

},{"./BlueprintsCatalog":92,"./BlueprintsTable":94,"babel-runtime/core-js/object/get-prototype-of":4,"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9,"babel-runtime/helpers/inherits":11,"babel-runtime/helpers/possibleConstructorReturn":12}],94:[function(require,module,exports){
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

var _UploadBlueprintModal = require("./UploadBlueprintModal");

var _UploadBlueprintModal2 = _interopRequireDefault(_UploadBlueprintModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PropTypes = React.PropTypes; /**
                                  * Created by kinneretzin on 08/01/2017.
                                  */

var BlueprintsTable = function (_React$Component) {
    (0, _inherits3.default)(BlueprintsTable, _React$Component);

    function BlueprintsTable() {
        (0, _classCallCheck3.default)(this, BlueprintsTable);
        return (0, _possibleConstructorReturn3.default)(this, (BlueprintsTable.__proto__ || (0, _getPrototypeOf2.default)(BlueprintsTable)).apply(this, arguments));
    }

    (0, _createClass3.default)(BlueprintsTable, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var _Stage$Basic = Stage.Basic,
                DataTable = _Stage$Basic.DataTable,
                Image = _Stage$Basic.Image;


            return React.createElement(
                DataTable,
                { fetchData: this.props.fetchGridData,
                    totalSize: this.props.data.total,
                    pageSize: this.props.widget.configuration.pageSize,
                    sortColumn: this.props.widget.configuration.sortColumn,
                    sortAscending: this.props.widget.configuration.sortAscending,
                    selectable: true,
                    className: "blueprintsTable" },
                React.createElement(DataTable.Column, { label: "Name", name: "id", width: "30%" }),
                React.createElement(DataTable.Column, { label: "Created", name: "created_at", width: "15%" }),
                React.createElement(DataTable.Column, { label: "Updated", name: "updated_at", width: "15%" }),
                React.createElement(DataTable.Column, { label: "Creator", name: "created_by", width: "15%" }),
                React.createElement(DataTable.Column, { label: "# Deployments", width: "15%" }),
                React.createElement(DataTable.Column, { width: "10%" }),
                this.props.data.items.map(function (item) {
                    return React.createElement(
                        DataTable.Row,
                        { key: item.id, selected: item.isSelected, onClick: function onClick() {
                                return _this2.props.onSelectBlueprint(item);
                            } },
                        React.createElement(
                            DataTable.Data,
                            null,
                            React.createElement(Image, { src: "/ba/image/" + item.id, width: "30px", height: "auto", inline: true }),
                            " ",
                            React.createElement(
                                "a",
                                { className: "blueprintName", href: "javascript:void(0)" },
                                item.id
                            )
                        ),
                        React.createElement(
                            DataTable.Data,
                            null,
                            item.created_at
                        ),
                        React.createElement(
                            DataTable.Data,
                            null,
                            item.updated_at
                        ),
                        React.createElement(
                            DataTable.Data,
                            null,
                            item.created_by
                        ),
                        React.createElement(
                            DataTable.Data,
                            null,
                            React.createElement(
                                "div",
                                { className: "ui green horizontal label" },
                                item.depCount
                            )
                        ),
                        React.createElement(
                            DataTable.Data,
                            { className: "center aligned rowActions" },
                            React.createElement("i", { className: "rocket icon link bordered", title: "Create deployment", onClick: function onClick(event) {
                                    event.stopPropagation();_this2.props.onCreateDeployment(item);
                                } }),
                            React.createElement("i", { className: "trash icon link bordered", title: "Delete blueprint", onClick: function onClick(event) {
                                    event.stopPropagation();_this2.props.onDeleteBlueprint(item);
                                } })
                        )
                    );
                }),
                React.createElement(
                    DataTable.Action,
                    null,
                    React.createElement(_UploadBlueprintModal2.default, { widget: this.props.widget, data: this.props.data, toolbox: this.props.toolbox })
                )
            );
        }
    }]);
    return BlueprintsTable;
}(React.Component);

BlueprintsTable.propTypes = {
    data: PropTypes.object.isRequired,
    widget: PropTypes.object.isRequired,
    toolbox: PropTypes.object.isRequired,
    fetchGridData: PropTypes.func,
    onSelectBlueprint: PropTypes.func,
    onDeleteBlueprint: PropTypes.func,
    onCreateDeployment: PropTypes.func

};
BlueprintsTable.defaultProps = {
    fetchGridData: function fetchGridData() {},
    onSelectBlueprint: function onSelectBlueprint() {},
    onDeleteBlueprint: function onDeleteBlueprint() {},
    onCreateDeployment: function onCreateDeployment() {}
};
exports.default = BlueprintsTable;

},{"./UploadBlueprintModal":95,"babel-runtime/core-js/object/get-prototype-of":4,"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9,"babel-runtime/helpers/inherits":11,"babel-runtime/helpers/possibleConstructorReturn":12}],95:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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
 * Created by kinneretzin on 05/10/2016.
 */

var UploadModal = function (_React$Component) {
    (0, _inherits3.default)(UploadModal, _React$Component);

    function UploadModal(props, context) {
        (0, _classCallCheck3.default)(this, UploadModal);

        var _this = (0, _possibleConstructorReturn3.default)(this, (UploadModal.__proto__ || (0, _getPrototypeOf2.default)(UploadModal)).call(this, props, context));

        _this.state = (0, _extends3.default)({}, UploadModal.initialState, { open: false });
        return _this;
    }

    (0, _createClass3.default)(UploadModal, [{
        key: "onApprove",
        value: function onApprove() {
            this._submitUpload();
            return false;
        }
    }, {
        key: "onCancel",
        value: function onCancel() {
            this.setState({ open: false });
            return true;
        }
    }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate(prevProps, prevState) {
            if (!prevState.open && this.state.open) {
                this.refs.blueprintFile && this.refs.blueprintFile.reset();
                this.refs.imageFile && this.refs.imageFile.reset();
                this.setState(UploadModal.initialState);
            }
        }
    }, {
        key: "_submitUpload",
        value: function _submitUpload() {
            var _this2 = this;

            var blueprintFile = this.refs.blueprintFile.file();

            var errors = {};

            if (_.isEmpty(this.state.blueprintUrl) && !blueprintFile) {
                errors["blueprintUrl"] = "Please select blueprint file or url";
            }

            if (!_.isEmpty(this.state.blueprintUrl) && blueprintFile) {
                errors["blueprintUrl"] = "Either blueprint file or url must be selected, not both";
            }

            if (_.isEmpty(this.state.blueprintName)) {
                errors["blueprintName"] = "Please provide blueprint name";
            }

            if (!_.isEmpty(errors)) {
                this.setState({ errors: errors });
                return false;
            }

            // Disable the form
            this.setState({ loading: true });

            var actions = new Stage.Common.BlueprintActions(this.props.toolbox);
            actions.doUpload(this.state.blueprintName, this.state.blueprintFileName, this.state.blueprintUrl, blueprintFile, this.state.imageUrl, this.refs.imageFile.file()).then(function () {
                _this2.setState({ loading: false, open: false });
                _this2.props.toolbox.refresh();
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
            var _this3 = this;

            var _Stage$Basic = Stage.Basic,
                Modal = _Stage$Basic.Modal,
                Button = _Stage$Basic.Button,
                Icon = _Stage$Basic.Icon,
                Form = _Stage$Basic.Form,
                ApproveButton = _Stage$Basic.ApproveButton,
                CancelButton = _Stage$Basic.CancelButton;

            var uploadButton = React.createElement(Button, { content: "Upload", icon: "upload", labelPosition: "left" });

            return React.createElement(
                "div",
                null,
                React.createElement(
                    Modal,
                    { trigger: uploadButton, open: this.state.open, onOpen: function onOpen() {
                            return _this3.setState({ open: true });
                        }, onClose: function onClose() {
                            return _this3.setState({ open: false });
                        } },
                    React.createElement(
                        Modal.Header,
                        null,
                        React.createElement(Icon, { name: "upload" }),
                        " Upload blueprint"
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
                                    React.createElement(Form.Input, { label: "URL", placeholder: "Enter blueprint url", name: "blueprintUrl",
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
                                    React.createElement(Form.File, { placeholder: "Select blueprint file", name: "blueprintFile", ref: "blueprintFile" })
                                )
                            ),
                            React.createElement(
                                Form.Field,
                                { error: this.state.errors.blueprintName },
                                React.createElement(Form.Input, { name: "blueprintName", placeholder: "Blueprint name",
                                    value: this.state.blueprintName, onChange: this._handleInputChange.bind(this) })
                            ),
                            React.createElement(
                                Form.Field,
                                null,
                                React.createElement(Form.Input, { name: "blueprintFileName", placeholder: "Blueprint filename e.g. blueprint",
                                    value: this.state.blueprintFileName, onChange: this._handleInputChange.bind(this) })
                            ),
                            React.createElement(
                                Form.Group,
                                null,
                                React.createElement(
                                    Form.Field,
                                    { width: "9", error: this.state.errors.imageUrl },
                                    React.createElement(Form.Input, { label: "URL", placeholder: "Enter image url", name: "imageUrl",
                                        value: this.state.imageUrl, onChange: this._handleInputChange.bind(this) })
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
                                    { width: "8", error: this.state.errors.imageUrl },
                                    React.createElement(Form.File, { placeholder: "Select image file", name: "imageFile", ref: "imageFile" })
                                )
                            )
                        )
                    ),
                    React.createElement(
                        Modal.Actions,
                        null,
                        React.createElement(CancelButton, { onClick: this.onCancel.bind(this), disabled: this.state.loading }),
                        React.createElement(ApproveButton, { onClick: this.onApprove.bind(this), disabled: this.state.loading, content: "Upload", icon: "upload", color: "green" })
                    )
                )
            );
        }
    }]);
    return UploadModal;
}(React.Component);

UploadModal.initialState = {
    loading: false,
    blueprintUrl: "",
    blueprintName: "",
    blueprintFileName: "",
    imageUrl: "",
    errors: {}
};
exports.default = UploadModal;
;

},{"babel-runtime/core-js/object/get-prototype-of":4,"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9,"babel-runtime/helpers/extends":10,"babel-runtime/helpers/inherits":11,"babel-runtime/helpers/possibleConstructorReturn":12}],96:[function(require,module,exports){
"use strict";

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _BlueprintsList = require("./BlueprintsList");

var _BlueprintsList2 = _interopRequireDefault(_BlueprintsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Stage.defineWidget({
    id: "blueprints",
    name: "Blueprints",
    description: 'Shows blueprint list',
    initialWidth: 8,
    initialHeight: 20,
    color: "blue",
    hasStyle: true,
    isReact: true,
    initialConfiguration: [Stage.GenericConfig.POLLING_TIME_CONFIG(2), Stage.GenericConfig.PAGE_SIZE_CONFIG(), { id: "clickToDrillDown", name: "Should click to drilldown", default: true, type: Stage.Basic.GenericField.BOOLEAN_TYPE }, { id: "displayStyle", name: "Display style", items: [{ name: 'Table', value: 'table' }, { name: 'Catalog', value: 'catalog' }],
        default: "table", type: Stage.Basic.GenericField.LIST_TYPE }, Stage.GenericConfig.SORT_COLUMN_CONFIG('created_at'), Stage.GenericConfig.SORT_ASCENDING_CONFIG(false)],

    fetchData: function fetchData(widget, toolbox, params) {
        var result = {};
        return toolbox.getManager().doGet('/blueprints?_include=id,updated_at,created_at,description,created_by', params).then(function (data) {
            result.blueprints = data;
            var blueprintIds = data.items.map(function (item) {
                return item.id;
            });

            return toolbox.getManager().doGetFull("/deployments?_include=id,blueprint_id", { blueprint_id: blueprintIds });
        }).then(function (data) {
            result.deployments = data;
            return result;
        });
    },
    _processData: function _processData(data, toolbox) {
        var blueprintsData = data.blueprints;
        var deploymentData = data.deployments;

        var depCount = _.countBy(deploymentData.items, 'blueprint_id');
        // Count deployments
        _.each(blueprintsData.items, function (blueprint) {
            blueprint.depCount = depCount[blueprint.id] || 0;
        });

        var selectedBlueprint = toolbox.getContext().getValue('blueprintId');
        var formattedData = (0, _assign2.default)({}, blueprintsData, {
            items: _.map(blueprintsData.items, function (item) {
                return (0, _assign2.default)({}, item, {
                    created_at: Stage.Utils.formatTimestamp(item.created_at),
                    updated_at: Stage.Utils.formatTimestamp(item.updated_at),
                    isSelected: selectedBlueprint === item.id
                });
            }),
            total: _.get(blueprintsData, "metadata.pagination.total", 0)
        });

        return formattedData;
    },


    render: function render(widget, data, error, toolbox) {

        if (_.isEmpty(data)) {
            return React.createElement(Stage.Basic.Loading, null);
        }

        var formattedData = this._processData(data, toolbox);
        return React.createElement(
            "div",
            null,
            React.createElement(_BlueprintsList2.default, { widget: widget, data: formattedData, toolbox: toolbox })
        );
    }
}); /**
     * Created by kinneretzin on 07/09/2016.
     */

},{"./BlueprintsList":93,"babel-runtime/core-js/object/assign":1}]},{},[92,93,94,95,96])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wvaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWluY2x1ZGVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvcmUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZGVzY3JpcHRvcnMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2VudW0ta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mYWlscy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZ2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2hpZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2h0bWwuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19rZXlvZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbGlicmFyeS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fbWV0YS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHBzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wZC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcG4tZXh0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdvcHMuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1ncG8uanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLWludGVybmFsLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXBpZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LXNhcC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcHJvcGVydHktZGVzYy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fcmVkZWZpbmUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1wcm90by5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zeW1ib2wuYXN5bmMtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5vYnNlcnZhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJ3aWRnZXRzL2JsdWVwcmludHMvc3JjL0JsdWVwcmludHNDYXRhbG9nLmpzIiwid2lkZ2V0cy9ibHVlcHJpbnRzL3NyYy9CbHVlcHJpbnRzTGlzdC5qcyIsIndpZGdldHMvYmx1ZXByaW50cy9zcmMvQmx1ZXByaW50c1RhYmxlLmpzIiwid2lkZ2V0cy9ibHVlcHJpbnRzL3NyYy9VcGxvYWRCbHVlcHJpbnRNb2RhbC5qcyIsIndpZGdldHMvYmx1ZXByaW50cy9zcmMvd2lkZ2V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBOztBQ0FBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7O0FDRkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTs7QUNGQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxT0E7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTs7Ozs7O0FBRUEsSUFBSSxZQUFZLE1BQU0sU0FBdEIsQyxDQVBBOzs7O0lBU3FCLGlCOzs7Ozs7Ozs7O2lDQW1CVDtBQUFBOztBQUFBLCtCQUM0QyxNQUFNLEtBRGxEO0FBQUEsZ0JB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QU5BIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2xcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc3ltYm9sL2l0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7XG5cbnZhciBfYXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Fzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9hc3NpZ24yLmRlZmF1bHQgfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3NldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L3NldC1wcm90b3R5cGUtb2ZcIik7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NyZWF0ZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9jcmVhdGVcIik7XG5cbnZhciBfY3JlYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZSk7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyAodHlwZW9mIHN1cGVyQ2xhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKHN1cGVyQ2xhc3MpKSk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSAoMCwgX2NyZWF0ZTIuZGVmYXVsdCkoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCA/ICgwLCBfc2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAoKHR5cGVvZiBjYWxsID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6ICgwLCBfdHlwZW9mMy5kZWZhdWx0KShjYWxsKSkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaXRlcmF0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9zeW1ib2wvaXRlcmF0b3JcIik7XG5cbnZhciBfaXRlcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXRlcmF0b3IpO1xuXG52YXIgX3N5bWJvbCA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbFwiKTtcblxudmFyIF9zeW1ib2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ltYm9sKTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBfaXRlcmF0b3IyLmRlZmF1bHQgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBfc3ltYm9sMi5kZWZhdWx0ICYmIG9iaiAhPT0gX3N5bWJvbDIuZGVmYXVsdC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBfdHlwZW9mKF9pdGVyYXRvcjIuZGVmYXVsdCkgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqKTtcbn07IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlJyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKXtcbiAgcmV0dXJuICRPYmplY3QuY3JlYXRlKFAsIEQpO1xufTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LnNldFByb3RvdHlwZU9mOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLmFzeW5jLWl0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNy5zeW1ib2wub2JzZXJ2YWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuU3ltYm9sOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTsiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTsiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59OyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpOyIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCBnT1BTICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKVxuICAsIHBJRSAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHJlc3VsdCAgICAgPSBnZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gcElFLmZcbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlyZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59OyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59OyIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge307IiwidmFyIGdldEtleXMgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGtleXMgICA9IGdldEtleXMoTylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKGxlbmd0aCA+IGluZGV4KWlmKE9ba2V5ID0ga2V5c1tpbmRleCsrXV0gPT09IGVsKXJldHVybiBrZXk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTsiLCJ2YXIgTUVUQSAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBzZXREZXNjICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTsiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpXG4gICwgZ09QUyAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpXG4gICwgcElFICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCAkYXNzaWduICA9IE9iamVjdC5hc3NpZ247XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSAhJGFzc2lnbiB8fCByZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgYUxlbiAgPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldFN5bWJvbHMgPSBnT1BTLmZcbiAgICAsIGlzRW51bSAgICAgPSBwSUUuZjtcbiAgd2hpbGUoYUxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduOyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07IiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTsiLCJ2YXIgcElFICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCBnT1BEICAgICAgICAgICA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApe1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07IiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGdPUE4gICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuJykuZlxuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnT1BOKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICByZXR1cm4gd2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScgPyBnZXRXaW5kb3dOYW1lcyhpdCkgOiBnT1BOKHRvSU9iamVjdChpdCkpO1xufTtcbiIsIi8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnZhciAka2V5cyAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07IiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9sczsiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59OyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTsiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTsiLCJleHBvcnRzLmYgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTsiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBjb3JlICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTsiLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbihPLCBwcm90byl7XG4gIGFuT2JqZWN0KE8pO1xuICBpZighaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKXRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uKHRlc3QsIGJ1Z2d5LCBzZXQpe1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi9fY3R4JykoRnVuY3Rpb24uY2FsbCwgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2goZSl7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKXtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZihidWdneSlPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07IiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59OyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59OyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTsiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07IiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTsiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07IiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07IiwidmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgd2tzRXh0ICAgICAgICAgPSByZXF1aXJlKCcuL193a3MtZXh0JylcbiAgLCBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICB2YXIgJFN5bWJvbCA9IGNvcmUuU3ltYm9sIHx8IChjb3JlLlN5bWJvbCA9IExJQlJBUlkgPyB7fSA6IGdsb2JhbC5TeW1ib2wgfHwge30pO1xuICBpZihuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKWRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHt2YWx1ZTogd2tzRXh0LmYobmFtZSl9KTtcbn07IiwiZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fd2tzJyk7IiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTsiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJyl9KTsiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge2NyZWF0ZTogcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpfSk7IiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0Jywge2RlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mfSk7IiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpe1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pOyIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vX3NldC1wcm90bycpLnNldH0pOyIsIiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7IiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIE1FVEEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWVxuICAsICRmYWlscyAgICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIHNoYXJlZCAgICAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCB1aWQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgd2tzICAgICAgICAgICAgPSByZXF1aXJlKCcuL193a3MnKVxuICAsIHdrc0V4dCAgICAgICAgID0gcmVxdWlyZSgnLi9fd2tzLWV4dCcpXG4gICwgd2tzRGVmaW5lICAgICAgPSByZXF1aXJlKCcuL193a3MtZGVmaW5lJylcbiAgLCBrZXlPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2tleW9mJylcbiAgLCBlbnVtS2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX2VudW0ta2V5cycpXG4gICwgaXNBcnJheSAgICAgICAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgX2NyZWF0ZSAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBnT1BORXh0ICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpXG4gICwgJEdPUEQgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpXG4gICwgJERQICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsICRrZXlzICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKVxuICAsIGdPUEQgICAgICAgICAgID0gJEdPUEQuZlxuICAsIGRQICAgICAgICAgICAgID0gJERQLmZcbiAgLCBnT1BOICAgICAgICAgICA9IGdPUE5FeHQuZlxuICAsICRTeW1ib2wgICAgICAgID0gZ2xvYmFsLlN5bWJvbFxuICAsICRKU09OICAgICAgICAgID0gZ2xvYmFsLkpTT05cbiAgLCBfc3RyaW5naWZ5ICAgICA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeVxuICAsIFBST1RPVFlQRSAgICAgID0gJ3Byb3RvdHlwZSdcbiAgLCBISURERU4gICAgICAgICA9IHdrcygnX2hpZGRlbicpXG4gICwgVE9fUFJJTUlUSVZFICAgPSB3a3MoJ3RvUHJpbWl0aXZlJylcbiAgLCBpc0VudW0gICAgICAgICA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlXG4gICwgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpXG4gICwgQWxsU3ltYm9scyAgICAgPSBzaGFyZWQoJ3N5bWJvbHMnKVxuICAsIE9QU3ltYm9scyAgICAgID0gc2hhcmVkKCdvcC1zeW1ib2xzJylcbiAgLCBPYmplY3RQcm90byAgICA9IE9iamVjdFtQUk9UT1RZUEVdXG4gICwgVVNFX05BVElWRSAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgUU9iamVjdCAgICAgICAgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIF9jcmVhdGUoZFAoe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIGRQKHRoaXMsICdhJywge3ZhbHVlOiA3fSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbihpdCwga2V5LCBEKXtcbiAgdmFyIHByb3RvRGVzYyA9IGdPUEQoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmKHByb3RvRGVzYylkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgZFAoaXQsIGtleSwgRCk7XG4gIGlmKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbih0YWcpe1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sW1BST1RPVFlQRV0pO1xuICBzeW0uX2sgPSB0YWc7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBVU0VfTkFUSVZFICYmIHR5cGVvZiAkU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnID8gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKXtcbiAgaWYoaXQgPT09IE9iamVjdFByb3RvKSRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmKGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSlpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHtlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKX0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIGRQKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSlcbiAgICAsIGkgICAgPSAwXG4gICAgLCBsID0ga2V5cy5sZW5ndGhcbiAgICAsIGtleTtcbiAgd2hpbGUobCA+IGkpJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCl7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KXtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYodGhpcyA9PT0gT2JqZWN0UHJvdG8gJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIWhhcyhPUFN5bWJvbHMsIGtleSkpcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIGl0ICA9IHRvSU9iamVjdChpdCk7XG4gIGtleSA9IHRvUHJpbWl0aXZlKGtleSwgdHJ1ZSk7XG4gIGlmKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSlyZXR1cm47XG4gIHZhciBEID0gZ09QRChpdCwga2V5KTtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKUQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ09QTih0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOICYmIGtleSAhPSBNRVRBKXJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCl7XG4gIHZhciBJU19PUCAgPSBpdCA9PT0gT2JqZWN0UHJvdG9cbiAgICAsIG5hbWVzICA9IGdPUE4oSVNfT1AgPyBPUFN5bWJvbHMgOiB0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSl7XG4gICAgaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYoIVVTRV9OQVRJVkUpe1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCl7XG4gICAgaWYodGhpcyBpbnN0YW5jZW9mICRTeW1ib2wpdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZih0aGlzID09PSBPYmplY3RQcm90bykkc2V0LmNhbGwoT1BTeW1ib2xzLCB2YWx1ZSk7XG4gICAgICBpZihoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKXRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYoREVTQ1JJUFRPUlMgJiYgc2V0dGVyKXNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0fSk7XG4gICAgcmV0dXJuIHdyYXAodGFnKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbFtQUk9UT1RZUEVdLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICAkR09QRC5mID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJERQLmYgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mICA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKXtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxuXG4gIHdrc0V4dC5mID0gZnVuY3Rpb24obmFtZSl7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfVxufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7U3ltYm9sOiAkU3ltYm9sfSk7XG5cbmZvcih2YXIgc3ltYm9scyA9IChcbiAgLy8gMTkuNC4yLjIsIDE5LjQuMi4zLCAxOS40LjIuNCwgMTkuNC4yLjYsIDE5LjQuMi44LCAxOS40LjIuOSwgMTkuNC4yLjEwLCAxOS40LjIuMTEsIDE5LjQuMi4xMiwgMTkuNC4yLjEzLCAxOS40LjIuMTRcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCxzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBpID0gMDsgc3ltYm9scy5sZW5ndGggPiBpOyApd2tzKHN5bWJvbHNbaSsrXSk7XG5cbmZvcih2YXIgc3ltYm9scyA9ICRrZXlzKHdrcy5zdG9yZSksIGkgPSAwOyBzeW1ib2xzLmxlbmd0aCA+IGk7ICl3a3NEZWZpbmUoc3ltYm9sc1tpKytdKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ1N5bWJvbCcsIHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KXtcbiAgICBpZihpc1N5bWJvbChrZXkpKXJldHVybiBrZXlPZihTeW1ib2xSZWdpc3RyeSwga2V5KTtcbiAgICB0aHJvdyBUeXBlRXJyb3Ioa2V5ICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24oKXsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8ICRmYWlscyhmdW5jdGlvbigpe1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7YTogU30pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7XG4gICAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgdmFyIGFyZ3MgPSBbaXRdXG4gICAgICAsIGkgICAgPSAxXG4gICAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICByZXBsYWNlciA9IGFyZ3NbMV07XG4gICAgaWYodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgaWYoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSlyZXBsYWNlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZighaXNTeW1ib2wodmFsdWUpKXJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG4gIH1cbn0pO1xuXG4vLyAxOS40LjMuNCBTeW1ib2wucHJvdG90eXBlW0BAdG9QcmltaXRpdmVdKGhpbnQpXG4kU3ltYm9sW1BST1RPVFlQRV1bVE9fUFJJTUlUSVZFXSB8fCByZXF1aXJlKCcuL19oaWRlJykoJFN5bWJvbFtQUk9UT1RZUEVdLCBUT19QUklNSVRJVkUsICRTeW1ib2xbUFJPVE9UWVBFXS52YWx1ZU9mKTtcbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdhc3luY0l0ZXJhdG9yJyk7IiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufSIsIi8qKlxuICogQ3JlYXRlZCBieSBraW5uZXJldHppbiBvbiAwOC8wMS8yMDE3LlxuICovXG5cblxuaW1wb3J0IFVwbG9hZE1vZGFsIGZyb20gJy4vVXBsb2FkQmx1ZXByaW50TW9kYWwnO1xuXG5sZXQgUHJvcFR5cGVzID0gUmVhY3QuUHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbHVlcHJpbnRzQ2F0YWxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICAgIHdpZGdldDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgICB0b29sYm94OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICAgIGZldGNoRGF0YTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG9uU2VsZWN0Qmx1ZXByaW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb25EZWxldGVCbHVlcHJpbnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBvbkNyZWF0ZURlcGxveW1lbnQ6IFByb3BUeXBlcy5mdW5jXG5cbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZmV0Y2hEYXRhOiAoKT0+e30sXG4gICAgICAgIG9uU2VsZWN0Qmx1ZXByaW50OiAoKT0+e30sXG4gICAgICAgIG9uRGVsZXRlQmx1ZXByaW50OiAoKT0+e30sXG4gICAgICAgIG9uQ3JlYXRlRGVwbG95bWVudDogKCk9Pnt9XG4gICAgfTtcblxuICAgIHJlbmRlcigpe1xuICAgICAgICB2YXIge0RhdGFTZWdtZW50LCBHcmlkLCBJbWFnZSwgQnV0dG9uLCBMYWJlbH0gPSBTdGFnZS5CYXNpYztcblxuICAgICAgICB2YXIgaW5kZXg9MDtcbiAgICAgICAgdmFyIGJsdWVwcmludHNJdGVtcyA9XG4gICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIGtleT17aXRlbS5pZH0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRhU2VnbWVudC5JdGVtIHNlbGVjdGVkPXtpdGVtLmlzU2VsZWN0ZWR9IGNsYXNzTmFtZT1cImZ1bGxIZWlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KT0+e2V2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB0aGlzLnByb3BzLm9uU2VsZWN0Qmx1ZXByaW50KGl0ZW0pfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLlJvdyBjbGFzc05hbWU9XCJib3R0b21EaXZpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9XCI0XCI+PEltYWdlIHNyYz17YC9iYS9pbWFnZS8ke2l0ZW0uaWR9YH0gY2VudGVyZWQ9e3RydWV9Lz48L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPVwiMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidWkgaWNvbiBoZWFkZXIgdmVydGljYWxDZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCIgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPntpdGVtLmlkfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3cgY2xhc3NOYW1lPVwibm9QYWRkZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD1cIjdcIj48aDUgY2xhc3NOYW1lPVwidWkgaWNvbiBoZWFkZXJcIj5DcmVhdGVkPC9oNT48L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPVwiOVwiPntpdGVtLmNyZWF0ZWRfYXR9PC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3cgY2xhc3NOYW1lPVwibm9QYWRkZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD1cIjdcIj48aDUgY2xhc3NOYW1lPVwidWkgaWNvbiBoZWFkZXJcIj5VcGRhdGVkPC9oNT48L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPVwiOVwiPntpdGVtLnVwZGF0ZWRfYXR9PC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Sb3cgY2xhc3NOYW1lPVwibm9QYWRkZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD1cIjdcIj48aDUgY2xhc3NOYW1lPVwidWkgaWNvbiBoZWFkZXJcIj5DcmVhdG9yPC9oNT48L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPVwiOVwiPntpdGVtLmNyZWF0ZWRfYnl9PC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuUm93IGNsYXNzTmFtZT1cIm5vUGFkZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9XCI3XCI+PGg1IGNsYXNzTmFtZT1cInVpIGljb24gaGVhZGVyXCI+IyBEZXBsb3ltZW50czwvaDU+PC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD1cIjlcIj48TGFiZWwgY29sb3I9XCJncmVlblwiIGhvcml6b250YWw+e2l0ZW0uZGVwQ291bnR9PC9MYWJlbD48L0dyaWQuQ29sdW1uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQuUm93PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPVwiMTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDpcIjUwcHhcIn19PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0RhdGFTZWdtZW50Lkl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uQnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaWNvbj1cInRyYXNoXCIgY29udGVudD1cIkRlbGV0ZVwiIGNsYXNzTmFtZT1cImljb25cIiBiYXNpY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KT0+e2V2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyB0aGlzLnByb3BzLm9uRGVsZXRlQmx1ZXByaW50KGl0ZW0pfX0vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpY29uPVwicm9ja2V0XCIgY29udGVudD1cIkRlcGxveVwiIGNsYXNzTmFtZT1cImxhYmVsZWQgaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpPT57ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IHRoaXMucHJvcHMub25DcmVhdGVEZXBsb3ltZW50KGl0ZW0pfX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGJsdWVwcmludHNSb3dzID0gW107XG4gICAgICAgIHZhciByb3cgPSBbXTtcbiAgICAgICAgXy5lYWNoKGJsdWVwcmludHNJdGVtcywoYmx1ZXByaW50SXRlbSxpbmRleCk9PntcbiAgICAgICAgICAgIHJvdy5wdXNoKGJsdWVwcmludEl0ZW0pO1xuICAgICAgICAgICAgaWYgKChpbmRleCsxKSAlIDMgPT09IDApIHtcbiAgICAgICAgICAgICAgICBibHVlcHJpbnRzUm93cy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Ymx1ZXByaW50c1Jvd3MubGVuZ3RoKzF9IGNsYXNzTmFtZT0ndGhyZWUgY29sdW1uIHJvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cm93fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJvdyA9W107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocm93Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGJsdWVwcmludHNSb3dzLnB1c2goXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2JsdWVwcmludHNSb3dzLmxlbmd0aCsxfSBjbGFzc05hbWU9J3RocmVlIGNvbHVtbiByb3cnPlxuICAgICAgICAgICAgICAgICAgICB7cm93fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPERhdGFTZWdtZW50IHRvdGFsU2l6ZT17dGhpcy5wcm9wcy5kYXRhLnRvdGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXt0aGlzLnByb3BzLndpZGdldC5jb25maWd1cmF0aW9uLnBhZ2VTaXplfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoRGF0YT17dGhpcy5wcm9wcy5mZXRjaERhdGF9IGNsYXNzTmFtZT1cImJsdWVwcmludENhdGFsb2dcIj5cblxuICAgICAgICAgICAgICAgICAgICA8RGF0YVNlZ21lbnQuQWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFVwbG9hZE1vZGFsIHdpZGdldD17dGhpcy5wcm9wcy53aWRnZXR9IGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gdG9vbGJveD17dGhpcy5wcm9wcy50b29sYm94fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvRGF0YVNlZ21lbnQuQWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgICAgICAgICAgICAge2JsdWVwcmludHNSb3dzfVxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICAgICAgICA8L0RhdGFTZWdtZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGtpbm5lcmV0emluIG9uIDAyLzEwLzIwMTYuXG4gKi9cblxuaW1wb3J0IEJsdWVwcmludHNUYWJsZSBmcm9tICcuL0JsdWVwcmludHNUYWJsZSc7XG5pbXBvcnQgQmx1ZXByaW50c0NhdGFsb2cgZnJvbSAnLi9CbHVlcHJpbnRzQ2F0YWxvZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsdWVwcmludExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMsY29udGV4dCkge1xuICAgICAgICBzdXBlcihwcm9wcyxjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2hvd0RlcGxveW1lbnRNb2RhbDogZmFsc2UsXG4gICAgICAgICAgICBibHVlcHJpbnQ6IHt9LFxuICAgICAgICAgICAgY29uZmlybURlbGV0ZTpmYWxzZSxcbiAgICAgICAgICAgIGVycm9yOiBudWxsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMud2lkZ2V0ICE9PSBuZXh0UHJvcHMud2lkZ2V0XG4gICAgICAgICAgICB8fCB0aGlzLnN0YXRlICE9IG5leHRTdGF0ZVxuICAgICAgICAgICAgfHwgIV8uaXNFcXVhbCh0aGlzLnByb3BzLmRhdGEsIG5leHRQcm9wcy5kYXRhKTtcbiAgICB9XG5cbiAgICBfc2VsZWN0Qmx1ZXByaW50IChpdGVtKXtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMud2lkZ2V0LmNvbmZpZ3VyYXRpb24uY2xpY2tUb0RyaWxsRG93bikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy50b29sYm94LmRyaWxsRG93bih0aGlzLnByb3BzLndpZGdldCwnYmx1ZXByaW50Jyx7Ymx1ZXByaW50SWQ6IGl0ZW0uaWR9LCBpdGVtLmlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBvbGRTZWxlY3RlZEJsdWVwcmludElkID0gdGhpcy5wcm9wcy50b29sYm94LmdldENvbnRleHQoKS5nZXRWYWx1ZSgnYmx1ZXByaW50SWQnKTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudG9vbGJveC5nZXRDb250ZXh0KCkuc2V0VmFsdWUoJ2JsdWVwcmludElkJyxpdGVtLmlkID09PSBvbGRTZWxlY3RlZEJsdWVwcmludElkID8gbnVsbCA6IGl0ZW0uaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2NyZWF0ZURlcGxveW1lbnQoaXRlbSl7XG4gICAgICAgIC8vIEdldCB0aGUgZnVsbCBibHVlcHJpbnQgZGF0YSAoaW5jbHVkaW5nIHBsYW4gZm9yIGlucHV0cylcbiAgICAgICAgdmFyIGFjdGlvbnMgPSBuZXcgU3RhZ2UuQ29tbW9uLkJsdWVwcmludEFjdGlvbnModGhpcy5wcm9wcy50b29sYm94KTtcbiAgICAgICAgYWN0aW9ucy5kb0dldEZ1bGxCbHVlcHJpbnREYXRhKGl0ZW0pLnRoZW4oKGJsdWVwcmludCk9PntcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yOiBudWxsLCBibHVlcHJpbnQsIHNob3dEZXBsb3ltZW50TW9kYWw6IHRydWV9KTtcbiAgICAgICAgfSkuY2F0Y2goKGVycik9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcjogZXJyLm1lc3NhZ2V9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2RlbGV0ZUJsdWVwcmludENvbmZpcm0oaXRlbSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29uZmlybURlbGV0ZSA6IHRydWUsXG4gICAgICAgICAgICBpdGVtOiBpdGVtXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9kZWxldGVCbHVlcHJpbnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pdGVtKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcjogJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBubyBibHVlcHJpbnQgd2FzIHNlbGVjdGVkIGZvciBkZWxldGUnfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYWN0aW9ucyA9IG5ldyBTdGFnZS5Db21tb24uQmx1ZXByaW50QWN0aW9ucyh0aGlzLnByb3BzLnRvb2xib3gpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb25maXJtRGVsZXRlOiBmYWxzZX0pO1xuICAgICAgICBhY3Rpb25zLmRvRGVsZXRlKHRoaXMuc3RhdGUuaXRlbSlcbiAgICAgICAgICAgIC50aGVuKCgpPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMudG9vbGJveC5nZXRFdmVudEJ1cygpLnRyaWdnZXIoJ2JsdWVwcmludHM6cmVmcmVzaCcpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yOiBlcnIubWVzc2FnZX0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX3JlZnJlc2hEYXRhKCkge1xuICAgICAgICB0aGlzLnByb3BzLnRvb2xib3gucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLnRvb2xib3guZ2V0RXZlbnRCdXMoKS5vbignYmx1ZXByaW50czpyZWZyZXNoJyx0aGlzLl9yZWZyZXNoRGF0YSx0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy50b29sYm94LmdldEV2ZW50QnVzKCkub2ZmKCdibHVlcHJpbnRzOnJlZnJlc2gnLHRoaXMuX3JlZnJlc2hEYXRhKTtcbiAgICB9XG5cbiAgICBfaGlkZURlcGxveW1lbnRNb2RhbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0RlcGxveW1lbnRNb2RhbDogZmFsc2V9KTtcbiAgICB9XG5cbiAgICBmZXRjaEdyaWREYXRhKGZldGNoUGFyYW1zKSB7XG4gICAgICAgIHRoaXMucHJvcHMudG9vbGJveC5yZWZyZXNoKGZldGNoUGFyYW1zKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7RXJyb3JNZXNzYWdlLCBDb25maXJtfSA9IFN0YWdlLkJhc2ljO1xuICAgICAgICBsZXQgRGVwbG95TW9kYWwgPSBTdGFnZS5Db21tb24uRGVwbG95Qmx1ZXByaW50TW9kYWw7XG5cbiAgICAgICAgdmFyIHNob3VsZFNob3dUYWJsZSA9IHRoaXMucHJvcHMud2lkZ2V0LmNvbmZpZ3VyYXRpb25bJ2Rpc3BsYXlTdHlsZSddID09PSAndGFibGUnO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2UgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3J9Lz5cblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkU2hvd1RhYmxlID9cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCbHVlcHJpbnRzVGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQ9e3RoaXMucHJvcHMud2lkZ2V0fSBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IHRvb2xib3g9e3RoaXMucHJvcHMudG9vbGJveH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZXRjaEdyaWREYXRhPXt0aGlzLmZldGNoR3JpZERhdGEuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdEJsdWVwcmludD17dGhpcy5fc2VsZWN0Qmx1ZXByaW50LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGVCbHVlcHJpbnQ9e3RoaXMuX2RlbGV0ZUJsdWVwcmludENvbmZpcm0uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNyZWF0ZURlcGxveW1lbnQ9e3RoaXMuX2NyZWF0ZURlcGxveW1lbnQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJsdWVwcmludHNDYXRhbG9nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0PXt0aGlzLnByb3BzLndpZGdldH0gZGF0YT17dGhpcy5wcm9wcy5kYXRhfSB0b29sYm94PXt0aGlzLnByb3BzLnRvb2xib3h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hEYXRhPXt0aGlzLmZldGNoR3JpZERhdGEuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdEJsdWVwcmludD17dGhpcy5fc2VsZWN0Qmx1ZXByaW50LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGVCbHVlcHJpbnQ9e3RoaXMuX2RlbGV0ZUJsdWVwcmludENvbmZpcm0uYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNyZWF0ZURlcGxveW1lbnQ9e3RoaXMuX2NyZWF0ZURlcGxveW1lbnQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPENvbmZpcm0gY29udGVudD0nQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGlzIGJsdWVwcmludD8nXG4gICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5jb25maXJtRGVsZXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29uZmlybT17dGhpcy5fZGVsZXRlQmx1ZXByaW50LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9eygpPT50aGlzLnNldFN0YXRlKHtjb25maXJtRGVsZXRlIDogZmFsc2V9KX0gLz5cblxuICAgICAgICAgICAgICAgIDxEZXBsb3lNb2RhbCBvcGVuPXt0aGlzLnN0YXRlLnNob3dEZXBsb3ltZW50TW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsdWVwcmludD17dGhpcy5zdGF0ZS5ibHVlcHJpbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSGlkZT17dGhpcy5faGlkZURlcGxveW1lbnRNb2RhbC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sYm94PXt0aGlzLnByb3BzLnRvb2xib3h9Lz5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGtpbm5lcmV0emluIG9uIDA4LzAxLzIwMTcuXG4gKi9cblxuaW1wb3J0IFVwbG9hZE1vZGFsIGZyb20gJy4vVXBsb2FkQmx1ZXByaW50TW9kYWwnO1xuXG5sZXQgUHJvcFR5cGVzID0gUmVhY3QuUHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCbHVlcHJpbnRzVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgZGF0YTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgICB3aWRnZXQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgICAgdG9vbGJveDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgICBmZXRjaEdyaWREYXRhOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb25TZWxlY3RCbHVlcHJpbnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBvbkRlbGV0ZUJsdWVwcmludDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG9uQ3JlYXRlRGVwbG95bWVudDogUHJvcFR5cGVzLmZ1bmNcblxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBmZXRjaEdyaWREYXRhOiAoKT0+e30sXG4gICAgICAgIG9uU2VsZWN0Qmx1ZXByaW50OiAoKT0+e30sXG4gICAgICAgIG9uRGVsZXRlQmx1ZXByaW50OiAoKT0+e30sXG4gICAgICAgIG9uQ3JlYXRlRGVwbG95bWVudDogKCk9Pnt9XG4gICAgfTtcblxuICAgIHJlbmRlcigpe1xuICAgICAgICB2YXIge0RhdGFUYWJsZSwgSW1hZ2V9ID0gU3RhZ2UuQmFzaWM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxEYXRhVGFibGUgZmV0Y2hEYXRhPXt0aGlzLnByb3BzLmZldGNoR3JpZERhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgIHRvdGFsU2l6ZT17dGhpcy5wcm9wcy5kYXRhLnRvdGFsfVxuICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZT17dGhpcy5wcm9wcy53aWRnZXQuY29uZmlndXJhdGlvbi5wYWdlU2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgc29ydENvbHVtbj17dGhpcy5wcm9wcy53aWRnZXQuY29uZmlndXJhdGlvbi5zb3J0Q29sdW1ufVxuICAgICAgICAgICAgICAgICAgICAgICBzb3J0QXNjZW5kaW5nPXt0aGlzLnByb3BzLndpZGdldC5jb25maWd1cmF0aW9uLnNvcnRBc2NlbmRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGFibGU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsdWVwcmludHNUYWJsZVwiPlxuXG4gICAgICAgICAgICAgICAgPERhdGFUYWJsZS5Db2x1bW4gbGFiZWw9XCJOYW1lXCIgbmFtZT1cImlkXCIgd2lkdGg9XCIzMCVcIi8+XG4gICAgICAgICAgICAgICAgPERhdGFUYWJsZS5Db2x1bW4gbGFiZWw9XCJDcmVhdGVkXCIgbmFtZT1cImNyZWF0ZWRfYXRcIiB3aWR0aD1cIjE1JVwiLz5cbiAgICAgICAgICAgICAgICA8RGF0YVRhYmxlLkNvbHVtbiBsYWJlbD1cIlVwZGF0ZWRcIiBuYW1lPVwidXBkYXRlZF9hdFwiIHdpZHRoPVwiMTUlXCIvPlxuICAgICAgICAgICAgICAgIDxEYXRhVGFibGUuQ29sdW1uIGxhYmVsPVwiQ3JlYXRvclwiIG5hbWU9J2NyZWF0ZWRfYnknIHdpZHRoPVwiMTUlXCIvPlxuICAgICAgICAgICAgICAgIDxEYXRhVGFibGUuQ29sdW1uIGxhYmVsPVwiIyBEZXBsb3ltZW50c1wiIHdpZHRoPVwiMTUlXCIvPlxuICAgICAgICAgICAgICAgIDxEYXRhVGFibGUuQ29sdW1uIHdpZHRoPVwiMTAlXCIvPlxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEuaXRlbXMubWFwKChpdGVtKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0YVRhYmxlLlJvdyBrZXk9e2l0ZW0uaWR9IHNlbGVjdGVkPXtpdGVtLmlzU2VsZWN0ZWR9IG9uQ2xpY2s9eygpPT50aGlzLnByb3BzLm9uU2VsZWN0Qmx1ZXByaW50KGl0ZW0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFUYWJsZS5EYXRhPjxJbWFnZSBzcmM9e2AvYmEvaW1hZ2UvJHtpdGVtLmlkfWB9IHdpZHRoPVwiMzBweFwiIGhlaWdodD1cImF1dG9cIiBpbmxpbmUvPiA8YSBjbGFzc05hbWU9J2JsdWVwcmludE5hbWUnIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj57aXRlbS5pZH08L2E+PC9EYXRhVGFibGUuRGF0YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFUYWJsZS5EYXRhPntpdGVtLmNyZWF0ZWRfYXR9PC9EYXRhVGFibGUuRGF0YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFUYWJsZS5EYXRhPntpdGVtLnVwZGF0ZWRfYXR9PC9EYXRhVGFibGUuRGF0YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFUYWJsZS5EYXRhPntpdGVtLmNyZWF0ZWRfYnl9PC9EYXRhVGFibGUuRGF0YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFUYWJsZS5EYXRhPjxkaXYgY2xhc3NOYW1lPVwidWkgZ3JlZW4gaG9yaXpvbnRhbCBsYWJlbFwiPntpdGVtLmRlcENvdW50fTwvZGl2PjwvRGF0YVRhYmxlLkRhdGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRhVGFibGUuRGF0YSBjbGFzc05hbWU9XCJjZW50ZXIgYWxpZ25lZCByb3dBY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJyb2NrZXQgaWNvbiBsaW5rIGJvcmRlcmVkXCIgdGl0bGU9XCJDcmVhdGUgZGVwbG95bWVudFwiIG9uQ2xpY2s9eyhldmVudCk9PntldmVudC5zdG9wUHJvcGFnYXRpb24oKTt0aGlzLnByb3BzLm9uQ3JlYXRlRGVwbG95bWVudChpdGVtKX19PjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRyYXNoIGljb24gbGluayBib3JkZXJlZFwiIHRpdGxlPVwiRGVsZXRlIGJsdWVwcmludFwiIG9uQ2xpY2s9eyhldmVudCk9PntldmVudC5zdG9wUHJvcGFnYXRpb24oKTt0aGlzLnByb3BzLm9uRGVsZXRlQmx1ZXByaW50KGl0ZW0pfX0+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RhdGFUYWJsZS5EYXRhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGF0YVRhYmxlLlJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPERhdGFUYWJsZS5BY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxVcGxvYWRNb2RhbCB3aWRnZXQ9e3RoaXMucHJvcHMud2lkZ2V0fSBkYXRhPXt0aGlzLnByb3BzLmRhdGF9IHRvb2xib3g9e3RoaXMucHJvcHMudG9vbGJveH0vPlxuICAgICAgICAgICAgICAgIDwvRGF0YVRhYmxlLkFjdGlvbj5cblxuICAgICAgICAgICAgPC9EYXRhVGFibGU+XG5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGtpbm5lcmV0emluIG9uIDA1LzEwLzIwMTYuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBsb2FkTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMsY29udGV4dCkge1xuICAgICAgICBzdXBlcihwcm9wcyxjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gey4uLlVwbG9hZE1vZGFsLmluaXRpYWxTdGF0ZSwgb3BlbjogZmFsc2V9XG4gICAgfVxuXG4gICAgc3RhdGljIGluaXRpYWxTdGF0ZSA9IHtcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgIGJsdWVwcmludFVybDogXCJcIixcbiAgICAgICAgYmx1ZXByaW50TmFtZTogXCJcIixcbiAgICAgICAgYmx1ZXByaW50RmlsZU5hbWU6IFwiXCIsXG4gICAgICAgIGltYWdlVXJsOiBcIlwiLFxuICAgICAgICBlcnJvcnM6IHt9XG4gICAgfVxuXG4gICAgb25BcHByb3ZlICgpIHtcbiAgICAgICAgdGhpcy5fc3VibWl0VXBsb2FkKCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBvbkNhbmNlbCAoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgICAgaWYgKCFwcmV2U3RhdGUub3BlbiAmJiB0aGlzLnN0YXRlLm9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMucmVmcy5ibHVlcHJpbnRGaWxlICYmIHRoaXMucmVmcy5ibHVlcHJpbnRGaWxlLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLnJlZnMuaW1hZ2VGaWxlICYmIHRoaXMucmVmcy5pbWFnZUZpbGUucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoVXBsb2FkTW9kYWwuaW5pdGlhbFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9zdWJtaXRVcGxvYWQoKSB7XG4gICAgICAgIGxldCBibHVlcHJpbnRGaWxlID0gdGhpcy5yZWZzLmJsdWVwcmludEZpbGUuZmlsZSgpO1xuXG4gICAgICAgIGxldCBlcnJvcnMgPSB7fTtcblxuICAgICAgICBpZiAoXy5pc0VtcHR5KHRoaXMuc3RhdGUuYmx1ZXByaW50VXJsKSAmJiAhYmx1ZXByaW50RmlsZSkge1xuICAgICAgICAgICAgZXJyb3JzW1wiYmx1ZXByaW50VXJsXCJdPVwiUGxlYXNlIHNlbGVjdCBibHVlcHJpbnQgZmlsZSBvciB1cmxcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghXy5pc0VtcHR5KHRoaXMuc3RhdGUuYmx1ZXByaW50VXJsKSAmJiBibHVlcHJpbnRGaWxlKSB7XG4gICAgICAgICAgICBlcnJvcnNbXCJibHVlcHJpbnRVcmxcIl09XCJFaXRoZXIgYmx1ZXByaW50IGZpbGUgb3IgdXJsIG11c3QgYmUgc2VsZWN0ZWQsIG5vdCBib3RoXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5pc0VtcHR5KHRoaXMuc3RhdGUuYmx1ZXByaW50TmFtZSkpIHtcbiAgICAgICAgICAgIGVycm9yc1tcImJsdWVwcmludE5hbWVcIl09XCJQbGVhc2UgcHJvdmlkZSBibHVlcHJpbnQgbmFtZVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFfLmlzRW1wdHkoZXJyb3JzKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEaXNhYmxlIHRoZSBmb3JtXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IHRydWV9KTtcblxuICAgICAgICB2YXIgYWN0aW9ucyA9IG5ldyBTdGFnZS5Db21tb24uQmx1ZXByaW50QWN0aW9ucyh0aGlzLnByb3BzLnRvb2xib3gpO1xuICAgICAgICBhY3Rpb25zLmRvVXBsb2FkKHRoaXMuc3RhdGUuYmx1ZXByaW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmJsdWVwcmludEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYmx1ZXByaW50VXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGJsdWVwcmludEZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbWFnZVVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnMuaW1hZ2VGaWxlLmZpbGUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2UsIG9wZW46IGZhbHNlfSk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnRvb2xib3gucmVmcmVzaCgpO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzOiB7ZXJyb3I6IGVyci5tZXNzYWdlfSwgbG9hZGluZzogZmFsc2V9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2hhbmRsZUlucHV0Q2hhbmdlKHByb3h5LCBmaWVsZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFN0YWdlLkJhc2ljLkZvcm0uZmllbGROYW1lVmFsdWUoZmllbGQpKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciB7TW9kYWwsIEJ1dHRvbiwgSWNvbiwgRm9ybSwgQXBwcm92ZUJ1dHRvbiwgQ2FuY2VsQnV0dG9ufSA9IFN0YWdlLkJhc2ljO1xuICAgICAgICBjb25zdCB1cGxvYWRCdXR0b24gPSA8QnV0dG9uIGNvbnRlbnQ9J1VwbG9hZCcgaWNvbj0ndXBsb2FkJyBsYWJlbFBvc2l0aW9uPSdsZWZ0JyAvPjtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TW9kYWwgdHJpZ2dlcj17dXBsb2FkQnV0dG9ufSBvcGVuPXt0aGlzLnN0YXRlLm9wZW59IG9uT3Blbj17KCk9PnRoaXMuc2V0U3RhdGUoe29wZW46dHJ1ZX0pfSBvbkNsb3NlPXsoKT0+dGhpcy5zZXRTdGF0ZSh7b3BlbjpmYWxzZX0pfT5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJ1cGxvYWRcIi8+IFVwbG9hZCBibHVlcHJpbnRcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IGVycm9ycz17dGhpcy5zdGF0ZS5lcnJvcnN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZCB3aWR0aD1cIjlcIiBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMuYmx1ZXByaW50VXJsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLklucHV0IGxhYmVsPVwiVVJMXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBibHVlcHJpbnQgdXJsXCIgbmFtZT1cImJsdWVwcmludFVybFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5ibHVlcHJpbnRVcmx9IG9uQ2hhbmdlPXt0aGlzLl9oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgd2lkdGg9XCIxXCIgc3R5bGU9e3twb3NpdGlvbjoncmVsYXRpdmUnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIHZlcnRpY2FsIGRpdmlkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgd2lkdGg9XCI4XCIgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLmJsdWVwcmludFVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWxlIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGJsdWVwcmludCBmaWxlXCIgbmFtZT1cImJsdWVwcmludEZpbGVcIiByZWY9XCJibHVlcHJpbnRGaWxlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLmJsdWVwcmludE5hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCBuYW1lPSdibHVlcHJpbnROYW1lJyBwbGFjZWhvbGRlcj1cIkJsdWVwcmludCBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmx1ZXByaW50TmFtZX0gb25DaGFuZ2U9e3RoaXMuX2hhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgbmFtZT0nYmx1ZXByaW50RmlsZU5hbWUnIHBsYWNlaG9sZGVyPVwiQmx1ZXByaW50IGZpbGVuYW1lIGUuZy4gYmx1ZXByaW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYmx1ZXByaW50RmlsZU5hbWV9IG9uQ2hhbmdlPXt0aGlzLl9oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIHdpZHRoPVwiOVwiIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5pbWFnZVVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dCBsYWJlbD1cIlVSTFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgaW1hZ2UgdXJsXCIgbmFtZT1cImltYWdlVXJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmltYWdlVXJsfSBvbkNoYW5nZT17dGhpcy5faGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIHdpZHRoPVwiMVwiIHN0eWxlPXt7cG9zaXRpb246J3JlbGF0aXZlJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSB2ZXJ0aWNhbCBkaXZpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkIHdpZHRoPVwiOFwiIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5pbWFnZVVybH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWxlIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGltYWdlIGZpbGVcIiBuYW1lPVwiaW1hZ2VGaWxlXCIgcmVmPVwiaW1hZ2VGaWxlXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L01vZGFsLkNvbnRlbnQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsLkFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FuY2VsQnV0dG9uIG9uQ2xpY2s9e3RoaXMub25DYW5jZWwuYmluZCh0aGlzKX0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBcHByb3ZlQnV0dG9uIG9uQ2xpY2s9e3RoaXMub25BcHByb3ZlLmJpbmQodGhpcyl9IGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmd9IGNvbnRlbnQ9XCJVcGxvYWRcIiBpY29uPVwidXBsb2FkXCIgY29sb3I9XCJncmVlblwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbC5BY3Rpb25zPlxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGtpbm5lcmV0emluIG9uIDA3LzA5LzIwMTYuXG4gKi9cblxuaW1wb3J0IEJsdWVwcmludHNMaXN0IGZyb20gJy4vQmx1ZXByaW50c0xpc3QnO1xuXG5TdGFnZS5kZWZpbmVXaWRnZXQoe1xuICAgIGlkOiBcImJsdWVwcmludHNcIixcbiAgICBuYW1lOiBcIkJsdWVwcmludHNcIixcbiAgICBkZXNjcmlwdGlvbjogJ1Nob3dzIGJsdWVwcmludCBsaXN0JyxcbiAgICBpbml0aWFsV2lkdGg6IDgsXG4gICAgaW5pdGlhbEhlaWdodDogMjAsXG4gICAgY29sb3IgOiBcImJsdWVcIixcbiAgICBoYXNTdHlsZTogdHJ1ZSxcbiAgICBpc1JlYWN0OiB0cnVlLFxuICAgIGluaXRpYWxDb25maWd1cmF0aW9uOiBbXG4gICAgICAgIFN0YWdlLkdlbmVyaWNDb25maWcuUE9MTElOR19USU1FX0NPTkZJRygyKSxcbiAgICAgICAgU3RhZ2UuR2VuZXJpY0NvbmZpZy5QQUdFX1NJWkVfQ09ORklHKCksXG4gICAgICAgIHtpZDogXCJjbGlja1RvRHJpbGxEb3duXCIsIG5hbWU6IFwiU2hvdWxkIGNsaWNrIHRvIGRyaWxsZG93blwiLCBkZWZhdWx0OiB0cnVlLCB0eXBlOiBTdGFnZS5CYXNpYy5HZW5lcmljRmllbGQuQk9PTEVBTl9UWVBFfSxcbiAgICAgICAge2lkOiBcImRpc3BsYXlTdHlsZVwiLG5hbWU6IFwiRGlzcGxheSBzdHlsZVwiLCBpdGVtczogW3tuYW1lOidUYWJsZScsIHZhbHVlOid0YWJsZSd9LCB7bmFtZTonQ2F0YWxvZycsIHZhbHVlOidjYXRhbG9nJ31dLFxuICAgICAgICAgICAgZGVmYXVsdDogXCJ0YWJsZVwiLCB0eXBlOiBTdGFnZS5CYXNpYy5HZW5lcmljRmllbGQuTElTVF9UWVBFfSxcbiAgICAgICAgU3RhZ2UuR2VuZXJpY0NvbmZpZy5TT1JUX0NPTFVNTl9DT05GSUcoJ2NyZWF0ZWRfYXQnKSxcbiAgICAgICAgU3RhZ2UuR2VuZXJpY0NvbmZpZy5TT1JUX0FTQ0VORElOR19DT05GSUcoZmFsc2UpXG4gICAgXSxcblxuICAgIGZldGNoRGF0YSh3aWRnZXQsdG9vbGJveCxwYXJhbXMpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICByZXR1cm4gdG9vbGJveC5nZXRNYW5hZ2VyKCkuZG9HZXQoJy9ibHVlcHJpbnRzP19pbmNsdWRlPWlkLHVwZGF0ZWRfYXQsY3JlYXRlZF9hdCxkZXNjcmlwdGlvbixjcmVhdGVkX2J5JyxwYXJhbXMpXG4gICAgICAgICAgICAudGhlbihkYXRhPT57XG4gICAgICAgICAgICAgICAgcmVzdWx0LmJsdWVwcmludHMgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHZhciBibHVlcHJpbnRJZHMgPSBkYXRhLml0ZW1zLm1hcChpdGVtPT5pdGVtLmlkKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0b29sYm94LmdldE1hbmFnZXIoKS5kb0dldEZ1bGwoYC9kZXBsb3ltZW50cz9faW5jbHVkZT1pZCxibHVlcHJpbnRfaWRgLHtibHVlcHJpbnRfaWQ6IGJsdWVwcmludElkc30pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKGRhdGE9PntcbiAgICAgICAgICAgICAgICByZXN1bHQuZGVwbG95bWVudHMgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgX3Byb2Nlc3NEYXRhKGRhdGEsdG9vbGJveCkge1xuICAgICAgICB2YXIgYmx1ZXByaW50c0RhdGEgPSBkYXRhLmJsdWVwcmludHM7XG4gICAgICAgIHZhciBkZXBsb3ltZW50RGF0YSA9IGRhdGEuZGVwbG95bWVudHM7XG5cbiAgICAgIHZhciBkZXBDb3VudCA9IF8uY291bnRCeShkZXBsb3ltZW50RGF0YS5pdGVtcywnYmx1ZXByaW50X2lkJyk7XG4gICAgICAgIC8vIENvdW50IGRlcGxveW1lbnRzXG4gICAgICAgIF8uZWFjaChibHVlcHJpbnRzRGF0YS5pdGVtcywoYmx1ZXByaW50KT0+e1xuICAgICAgICAgICAgYmx1ZXByaW50LmRlcENvdW50ID0gZGVwQ291bnRbYmx1ZXByaW50LmlkXSB8fCAwO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgc2VsZWN0ZWRCbHVlcHJpbnQgPSB0b29sYm94LmdldENvbnRleHQoKS5nZXRWYWx1ZSgnYmx1ZXByaW50SWQnKTtcbiAgICAgICAgdmFyIGZvcm1hdHRlZERhdGEgPSBPYmplY3QuYXNzaWduKHt9LGJsdWVwcmludHNEYXRhLHtcbiAgICAgICAgICAgIGl0ZW1zOiBfLm1hcCAoYmx1ZXByaW50c0RhdGEuaXRlbXMsKGl0ZW0pPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30saXRlbSx7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IFN0YWdlLlV0aWxzLmZvcm1hdFRpbWVzdGFtcChpdGVtLmNyZWF0ZWRfYXQpLFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkX2F0OiBTdGFnZS5VdGlscy5mb3JtYXRUaW1lc3RhbXAoaXRlbS51cGRhdGVkX2F0KSxcbiAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZDogc2VsZWN0ZWRCbHVlcHJpbnQgPT09IGl0ZW0uaWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0b3RhbDogXy5nZXQoYmx1ZXByaW50c0RhdGEsIFwibWV0YWRhdGEucGFnaW5hdGlvbi50b3RhbFwiLCAwKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZm9ybWF0dGVkRGF0YTtcbiAgICB9LFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbih3aWRnZXQsZGF0YSxlcnJvcix0b29sYm94KSB7XG5cbiAgICAgICAgaWYgKF8uaXNFbXB0eShkYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuIDxTdGFnZS5CYXNpYy5Mb2FkaW5nLz47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZm9ybWF0dGVkRGF0YSA9IHRoaXMuX3Byb2Nlc3NEYXRhKGRhdGEsdG9vbGJveCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxCbHVlcHJpbnRzTGlzdCB3aWRnZXQ9e3dpZGdldH0gZGF0YT17Zm9ybWF0dGVkRGF0YX0gdG9vbGJveD17dG9vbGJveH0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSk7Il19
