(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/@ant-design/colors/es/generate.js":
/*!********************************************************!*\
  !*** ./node_modules/@ant-design/colors/es/generate.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return generate; });
/* harmony import */ var _ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ctrl/tinycolor */ "./node_modules/@ctrl/tinycolor/dist/module/public_api.js");

var hueStep = 2; // 色相阶梯
var saturationStep = 0.16; // 饱和度阶梯，浅色部分
var saturationStep2 = 0.05; // 饱和度阶梯，深色部分
var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分
var brightnessStep2 = 0.15; // 亮度阶梯，深色部分
var lightColorCount = 5; // 浅色数量，主色上
var darkColorCount = 4; // 深色数量，主色下
// 暗色主题颜色映射关系表
var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
// Wrapper function ported from TinyColor.prototype.toHsv
// Keep it here because of `hsv.h * 360`
function toHsv(_ref) {
  var r = _ref.r,
    g = _ref.g,
    b = _ref.b;
  var hsv = Object(_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__["rgbToHsv"])(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
}

// Wrapper function ported from TinyColor.prototype.toHexString
// Keep it here because of the prefix `#`
function toHex(_ref2) {
  var r = _ref2.r,
    g = _ref2.g,
    b = _ref2.b;
  return "#".concat(Object(_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"])(r, g, b, false));
}

// Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.
function mix(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}
function getHue(hsv, i, light) {
  var hue;
  // 根据色相不同，色相转向不同
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i, light) {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  var saturation;
  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  }
  // 边界值修正
  if (saturation > 1) {
    saturation = 1;
  }
  // 第一格的 s 限制在 0.06-0.1 之间
  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}
function getValue(hsv, i, light) {
  var value;
  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}
function generate(color) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var patterns = [];
  var pColor = Object(_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__["inputToRGB"])(color);
  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(Object(_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__["inputToRGB"])({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }));
    patterns.push(colorString);
  }
  patterns.push(toHex(pColor));
  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);
    var _colorString = toHex(Object(_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__["inputToRGB"])({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }));
    patterns.push(_colorString);
  }

  // dark theme patterns
  if (opts.theme === 'dark') {
    return darkColorMap.map(function (_ref3) {
      var index = _ref3.index,
        opacity = _ref3.opacity;
      var darkColorString = toHex(mix(Object(_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__["inputToRGB"])(opts.backgroundColor || '#141414'), Object(_ctrl_tinycolor__WEBPACK_IMPORTED_MODULE_0__["inputToRGB"])(patterns[index]), opacity * 100));
      return darkColorString;
    });
  }
  return patterns;
}

/***/ }),

/***/ "./node_modules/@ant-design/colors/es/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@ant-design/colors/es/index.js ***!
  \*****************************************************/
/*! exports provided: generate, presetPalettes, presetDarkPalettes, presetPrimaryColors, red, volcano, orange, gold, yellow, lime, green, cyan, blue, geekblue, purple, magenta, grey, gray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "presetPalettes", function() { return presetPalettes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "presetDarkPalettes", function() { return presetDarkPalettes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "presetPrimaryColors", function() { return presetPrimaryColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "red", function() { return red; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "volcano", function() { return volcano; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orange", function() { return orange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gold", function() { return gold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yellow", function() { return yellow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lime", function() { return lime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "green", function() { return green; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cyan", function() { return cyan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blue", function() { return blue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geekblue", function() { return geekblue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purple", function() { return purple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magenta", function() { return magenta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grey", function() { return grey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return gray; });
/* harmony import */ var _generate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generate */ "./node_modules/@ant-design/colors/es/generate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return _generate__WEBPACK_IMPORTED_MODULE_0__["default"]; });


var presetPrimaryColors = {
  red: '#F5222D',
  volcano: '#FA541C',
  orange: '#FA8C16',
  gold: '#FAAD14',
  yellow: '#FADB14',
  lime: '#A0D911',
  green: '#52C41A',
  cyan: '#13C2C2',
  blue: '#1677FF',
  geekblue: '#2F54EB',
  purple: '#722ED1',
  magenta: '#EB2F96',
  grey: '#666666'
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function (key) {
  presetPalettes[key] = Object(_generate__WEBPACK_IMPORTED_MODULE_0__["default"])(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5];

  // dark presetPalettes
  presetDarkPalettes[key] = Object(_generate__WEBPACK_IMPORTED_MODULE_0__["default"])(presetPrimaryColors[key], {
    theme: 'dark',
    backgroundColor: '#141414'
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
var red = presetPalettes.red;
var volcano = presetPalettes.volcano;
var gold = presetPalettes.gold;
var orange = presetPalettes.orange;
var yellow = presetPalettes.yellow;
var lime = presetPalettes.lime;
var green = presetPalettes.green;
var cyan = presetPalettes.cyan;
var blue = presetPalettes.blue;
var geekblue = presetPalettes.geekblue;
var purple = presetPalettes.purple;
var magenta = presetPalettes.magenta;
var grey = presetPalettes.grey;
var gray = presetPalettes.grey;


/***/ }),

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/EyeInvisibleOutlined.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/EyeInvisibleOutlined.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", {
  value: true
});
var EyeInvisibleOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"
      }
    }, {
      "tag": "path",
      "attrs": {
        "d": "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"
      }
    }]
  },
  "name": "eye-invisible",
  "theme": "outlined"
};
exports.default = EyeInvisibleOutlined;

/***/ }),

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/EyeOutlined.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ant-design/icons-svg/lib/asn/EyeOutlined.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// This icon file is generated automatically.
Object.defineProperty(exports, "__esModule", {
  value: true
});
var EyeOutlined = {
  "icon": {
    "tag": "svg",
    "attrs": {
      "viewBox": "64 64 896 896",
      "focusable": "false"
    },
    "children": [{
      "tag": "path",
      "attrs": {
        "d": "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"
      }
    }]
  },
  "name": "eye",
  "theme": "outlined"
};
exports.default = EyeOutlined;

/***/ }),

/***/ "./node_modules/@ant-design/icons/EyeInvisibleOutlined.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ant-design/icons/EyeInvisibleOutlined.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const _EyeInvisibleOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/EyeInvisibleOutlined */ "./node_modules/@ant-design/icons/lib/icons/EyeInvisibleOutlined.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}
const _default = _EyeInvisibleOutlined;
exports.default = _default;
module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/EyeOutlined.js":
/*!*******************************************************!*\
  !*** ./node_modules/@ant-design/icons/EyeOutlined.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const _EyeOutlined = _interopRequireDefault(__webpack_require__(/*! ./lib/icons/EyeOutlined */ "./node_modules/@ant-design/icons/lib/icons/EyeOutlined.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}
const _default = _EyeOutlined;
exports.default = _default;
module.exports = _default;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/components/AntdIcon.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

'use client';
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _default;
  }
});
var _react = /*#__PURE__*/_interop_require_wildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _classnames = /*#__PURE__*/_interop_require_default(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));
var _colors = __webpack_require__(/*! @ant-design/colors */ "./node_modules/@ant-design/colors/es/index.js");
var _Context = /*#__PURE__*/_interop_require_default(__webpack_require__(/*! ./Context */ "./node_modules/@ant-design/icons/lib/components/Context.js"));
var _IconBase = /*#__PURE__*/_interop_require_default(__webpack_require__(/*! ./IconBase */ "./node_modules/@ant-design/icons/lib/components/IconBase.js"));
var _twoTonePrimaryColor = __webpack_require__(/*! ./twoTonePrimaryColor */ "./node_modules/@ant-design/icons/lib/components/twoTonePrimaryColor.js");
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/@ant-design/icons/lib/utils.js");
function _array_like_to_array(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _array_with_holes(arr) {
  if (Array.isArray(arr)) return arr;
}
function _define_property(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _interop_require_default(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {
    __proto__: null
  };
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _iterable_to_array_limit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _non_iterable_rest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function (key) {
      _define_property(target, key, source[key]);
    });
  }
  return target;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _object_spread_props(target, source) {
  source = source != null ? source : {};
  if (Object.getOwnPropertyDescriptors) {
    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
  } else {
    ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _object_without_properties(source, excluded) {
  if (source == null) return {};
  var target = _object_without_properties_loose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _object_without_properties_loose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _sliced_to_array(arr, i) {
  return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _array_like_to_array(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
// Initial setting
// should move it to antd main repo?
(0, _twoTonePrimaryColor.setTwoToneColor)(_colors.blue.primary);
var Icon = /*#__PURE__*/_react.forwardRef(function (props, ref) {
  var
    // affect outter <i>...</i>
    className = props.className,
    // affect inner <svg>...</svg>
    icon = props.icon,
    spin = props.spin,
    rotate = props.rotate,
    tabIndex = props.tabIndex,
    onClick = props.onClick,
    // other
    twoToneColor = props.twoToneColor,
    restProps = _object_without_properties(props, ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"]);
  var _React_useContext = _react.useContext(_Context.default),
    _React_useContext_prefixCls = _React_useContext.prefixCls,
    prefixCls = _React_useContext_prefixCls === void 0 ? 'anticon' : _React_useContext_prefixCls,
    rootClassName = _React_useContext.rootClassName;
  var _obj;
  var classString = (0, _classnames.default)(rootClassName, prefixCls, (_obj = {}, _define_property(_obj, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), _define_property(_obj, "".concat(prefixCls, "-spin"), !!spin || icon.name === 'loading'), _obj), className);
  var iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;
  var _normalizeTwoToneColors = _sliced_to_array((0, _utils.normalizeTwoToneColors)(twoToneColor), 2),
    primaryColor = _normalizeTwoToneColors[0],
    secondaryColor = _normalizeTwoToneColors[1];
  return /*#__PURE__*/_react.createElement("span", _object_spread_props(_object_spread({
    role: "img",
    "aria-label": icon.name
  }, restProps), {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), /*#__PURE__*/_react.createElement(_IconBase.default, {
    icon: icon,
    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = _twoTonePrimaryColor.getTwoToneColor;
Icon.setTwoToneColor = _twoTonePrimaryColor.setTwoToneColor;
var _default = Icon;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/components/Context.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/components/Context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _default;
  }
});
var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var IconContext = /*#__PURE__*/(0, _react.createContext)({});
var _default = IconContext;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/components/IconBase.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/components/IconBase.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _default;
  }
});
var _react = /*#__PURE__*/_interop_require_wildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/@ant-design/icons/lib/utils.js");
function _define_property(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {
    __proto__: null
  };
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _object_spread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function (key) {
      _define_property(target, key, source[key]);
    });
  }
  return target;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _object_spread_props(target, source) {
  source = source != null ? source : {};
  if (Object.getOwnPropertyDescriptors) {
    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
  } else {
    ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _object_without_properties(source, excluded) {
  if (source == null) return {};
  var target = _object_without_properties_loose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _object_without_properties_loose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false
};
function setTwoToneColors(param) {
  var primaryColor = param.primaryColor,
    secondaryColor = param.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || (0, _utils.getSecondaryColor)(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
  return _object_spread({}, twoToneColorPalette);
}
var IconBase = function (props) {
  var icon = props.icon,
    className = props.className,
    onClick = props.onClick,
    style = props.style,
    primaryColor = props.primaryColor,
    secondaryColor = props.secondaryColor,
    restProps = _object_without_properties(props, ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"]);
  var svgRef = _react.useRef();
  var colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || (0, _utils.getSecondaryColor)(primaryColor)
    };
  }
  (0, _utils.useInsertStyles)(svgRef);
  (0, _utils.warning)((0, _utils.isIconDefinition)(icon), "icon should be icon definiton, but got ".concat(icon));
  if (!(0, _utils.isIconDefinition)(icon)) {
    return null;
  }
  var target = icon;
  if (target && typeof target.icon === 'function') {
    target = _object_spread_props(_object_spread({}, target), {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }
  return (0, _utils.generate)(target.icon, "svg-".concat(target.name), _object_spread_props(_object_spread({
    className: className,
    onClick: onClick,
    style: style,
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true'
  }, restProps), {
    ref: svgRef
  }));
};
IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
var _default = IconBase;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/components/twoTonePrimaryColor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/components/twoTonePrimaryColor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function _export(target, all) {
  for (var name in all) Object.defineProperty(target, name, {
    enumerable: true,
    get: all[name]
  });
}
_export(exports, {
  getTwoToneColor: function () {
    return getTwoToneColor;
  },
  setTwoToneColor: function () {
    return setTwoToneColor;
  }
});
var _IconBase = /*#__PURE__*/_interop_require_default(__webpack_require__(/*! ./IconBase */ "./node_modules/@ant-design/icons/lib/components/IconBase.js"));
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/@ant-design/icons/lib/utils.js");
function _array_like_to_array(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _array_with_holes(arr) {
  if (Array.isArray(arr)) return arr;
}
function _interop_require_default(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _iterable_to_array_limit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _non_iterable_rest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
  return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _array_like_to_array(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColors = _sliced_to_array((0, _utils.normalizeTwoToneColors)(twoToneColor), 2),
    primaryColor = _normalizeTwoToneColors[0],
    secondaryColor = _normalizeTwoToneColors[1];
  return _IconBase.default.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  });
}
function getTwoToneColor() {
  var colors = _IconBase.default.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/EyeInvisibleOutlined.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/EyeInvisibleOutlined.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _default;
  }
});
var _react = /*#__PURE__*/_interop_require_wildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _EyeInvisibleOutlined = /*#__PURE__*/_interop_require_default(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/EyeInvisibleOutlined */ "./node_modules/@ant-design/icons-svg/lib/asn/EyeInvisibleOutlined.js"));
var _AntdIcon = /*#__PURE__*/_interop_require_default(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));
function _define_property(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _interop_require_default(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {
    __proto__: null
  };
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _object_spread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function (key) {
      _define_property(target, key, source[key]);
    });
  }
  return target;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _object_spread_props(target, source) {
  source = source != null ? source : {};
  if (Object.getOwnPropertyDescriptors) {
    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
  } else {
    ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var EyeInvisibleOutlined = function (props, ref) {
  return /*#__PURE__*/_react.createElement(_AntdIcon.default, _object_spread_props(_object_spread({}, props), {
    ref: ref,
    icon: _EyeInvisibleOutlined.default
  }));
};
/**![eye-invisible](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTk0Mi4yIDQ4Ni4yUTg4OS40NyAzNzUuMTEgODE2LjcgMzA1bC01MC44OCA1MC44OEM4MDcuMzEgMzk1LjUzIDg0My40NSA0NDcuNCA4NzQuNyA1MTIgNzkxLjUgNjg0LjIgNjczLjQgNzY2IDUxMiA3NjZxLTcyLjY3IDAtMTMzLjg3LTIyLjM4TDMyMyA3OTguNzVRNDA4IDgzOCA1MTIgODM4cTI4OC4zIDAgNDMwLjItMzAwLjNhNjAuMjkgNjAuMjkgMCAwMDAtNTEuNXptLTYzLjU3LTMyMC42NEw4MzYgMTIyLjg4YTggOCAwIDAwLTExLjMyIDBMNzE1LjMxIDIzMi4yUTYyNC44NiAxODYgNTEyIDE4NnEtMjg4LjMgMC00MzAuMiAzMDAuM2E2MC4zIDYwLjMgMCAwMDAgNTEuNXE1Ni42OSAxMTkuNCAxMzYuNSAxOTEuNDFMMTEyLjQ4IDgzNWE4IDggMCAwMDAgMTEuMzFMMTU1LjE3IDg4OWE4IDggMCAwMDExLjMxIDBsNzEyLjE1LTcxMi4xMmE4IDggMCAwMDAtMTEuMzJ6TTE0OS4zIDUxMkMyMzIuNiAzMzkuOCAzNTAuNyAyNTggNTEyIDI1OGM1NC41NCAwIDEwNC4xMyA5LjM2IDE0OS4xMiAyOC4zOWwtNzAuMyA3MC4zYTE3NiAxNzYgMCAwMC0yMzguMTMgMjM4LjEzbC04My40MiA4My40MkMyMjMuMSA2MzcuNDkgMTgzLjMgNTgyLjI4IDE0OS4zIDUxMnptMjQ2LjcgMGExMTIuMTEgMTEyLjExIDAgMDExNDYuMi0xMDYuNjlMNDAxLjMxIDU0Ni4yQTExMiAxMTIgMCAwMTM5NiA1MTJ6IiAvPjxwYXRoIGQ9Ik01MDggNjI0Yy0zLjQ2IDAtNi44Ny0uMTYtMTAuMjUtLjQ3bC01Mi44MiA1Mi44MmExNzYuMDkgMTc2LjA5IDAgMDAyMjcuNDItMjI3LjQybC01Mi44MiA1Mi44MmMuMzEgMy4zOC40NyA2Ljc5LjQ3IDEwLjI1YTExMS45NCAxMTEuOTQgMCAwMS0xMTIgMTEyeiIgLz48L3N2Zz4=) */
var RefIcon = /*#__PURE__*/_react.forwardRef(EyeInvisibleOutlined);
if (true) {
  RefIcon.displayName = 'EyeInvisibleOutlined';
}
var _default = RefIcon;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/icons/EyeOutlined.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/icons/EyeOutlined.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function () {
    return _default;
  }
});
var _react = /*#__PURE__*/_interop_require_wildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _EyeOutlined = /*#__PURE__*/_interop_require_default(__webpack_require__(/*! @ant-design/icons-svg/lib/asn/EyeOutlined */ "./node_modules/@ant-design/icons-svg/lib/asn/EyeOutlined.js"));
var _AntdIcon = /*#__PURE__*/_interop_require_default(__webpack_require__(/*! ../components/AntdIcon */ "./node_modules/@ant-design/icons/lib/components/AntdIcon.js"));
function _define_property(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _interop_require_default(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {
    __proto__: null
  };
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _object_spread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function (key) {
      _define_property(target, key, source[key]);
    });
  }
  return target;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _object_spread_props(target, source) {
  source = source != null ? source : {};
  if (Object.getOwnPropertyDescriptors) {
    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
  } else {
    ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
var EyeOutlined = function (props, ref) {
  return /*#__PURE__*/_react.createElement(_AntdIcon.default, _object_spread_props(_object_spread({}, props), {
    ref: ref,
    icon: _EyeOutlined.default
  }));
};
/**![eye](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNjYWNhY2EiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiIGZvY3VzYWJsZT0iZmFsc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTk0Mi4yIDQ4Ni4yQzg0Ny40IDI4Ni41IDcwNC4xIDE4NiA1MTIgMTg2Yy0xOTIuMiAwLTMzNS40IDEwMC41LTQzMC4yIDMwMC4zYTYwLjMgNjAuMyAwIDAwMCA1MS41QzE3Ni42IDczNy41IDMxOS45IDgzOCA1MTIgODM4YzE5Mi4yIDAgMzM1LjQtMTAwLjUgNDMwLjItMzAwLjMgNy43LTE2LjIgNy43LTM1IDAtNTEuNXpNNTEyIDc2NmMtMTYxLjMgMC0yNzkuNC04MS44LTM2Mi43LTI1NEMyMzIuNiAzMzkuOCAzNTAuNyAyNTggNTEyIDI1OGMxNjEuMyAwIDI3OS40IDgxLjggMzYyLjcgMjU0Qzc5MS41IDY4NC4yIDY3My40IDc2NiA1MTIgNzY2em0tNC00MzBjLTk3LjIgMC0xNzYgNzguOC0xNzYgMTc2czc4LjggMTc2IDE3NiAxNzYgMTc2LTc4LjggMTc2LTE3Ni03OC44LTE3Ni0xNzYtMTc2em0wIDI4OGMtNjEuOSAwLTExMi01MC4xLTExMi0xMTJzNTAuMS0xMTIgMTEyLTExMiAxMTIgNTAuMSAxMTIgMTEyLTUwLjEgMTEyLTExMiAxMTJ6IiAvPjwvc3ZnPg==) */
var RefIcon = /*#__PURE__*/_react.forwardRef(EyeOutlined);
if (true) {
  RefIcon.displayName = 'EyeOutlined';
}
var _default = RefIcon;

/***/ }),

/***/ "./node_modules/@ant-design/icons/lib/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/@ant-design/icons/lib/utils.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function _export(target, all) {
  for (var name in all) Object.defineProperty(target, name, {
    enumerable: true,
    get: all[name]
  });
}
_export(exports, {
  generate: function () {
    return generate;
  },
  getSecondaryColor: function () {
    return getSecondaryColor;
  },
  iconStyles: function () {
    return iconStyles;
  },
  isIconDefinition: function () {
    return isIconDefinition;
  },
  normalizeAttrs: function () {
    return normalizeAttrs;
  },
  normalizeTwoToneColors: function () {
    return normalizeTwoToneColors;
  },
  svgBaseProps: function () {
    return svgBaseProps;
  },
  useInsertStyles: function () {
    return useInsertStyles;
  },
  warning: function () {
    return warning;
  }
});
var _colors = __webpack_require__(/*! @ant-design/colors */ "./node_modules/@ant-design/colors/es/index.js");
var _dynamicCSS = __webpack_require__(/*! rc-util/lib/Dom/dynamicCSS */ "./node_modules/rc-util/lib/Dom/dynamicCSS.js");
var _shadow = __webpack_require__(/*! rc-util/lib/Dom/shadow */ "./node_modules/rc-util/lib/Dom/shadow.js");
var _warning = /*#__PURE__*/_interop_require_default(__webpack_require__(/*! rc-util/lib/warning */ "./node_modules/rc-util/lib/warning.js"));
var _react = /*#__PURE__*/_interop_require_wildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var _Context = /*#__PURE__*/_interop_require_default(__webpack_require__(/*! ./components/Context */ "./node_modules/@ant-design/icons/lib/components/Context.js"));
function _define_property(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _interop_require_default(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {
    __proto__: null
  };
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _object_spread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function (key) {
      _define_property(target, key, source[key]);
    });
  }
  return target;
}
function camelCase(input) {
  return input.replace(/-(.)/g, function (match, g) {
    return g.toUpperCase();
  });
}
function warning(valid, message) {
  (0, _warning.default)(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return typeof target === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (typeof target.icon === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];
    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;
      default:
        delete acc[key];
        acc[camelCase(key)] = val;
    }
    return acc;
  }, {});
}
function generate(node, key, rootProps) {
  if (!rootProps) {
    return _react.default.createElement(node.tag, _object_spread({
      key: key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function (child, index) {
      return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }
  return _react.default.createElement(node.tag, _object_spread({
    key: key
  }, normalizeAttrs(node.attrs), rootProps), (node.children || []).map(function (child, index) {
    return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return (0, _colors.generate)(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
var svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false'
};
var iconStyles = "\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function (eleRef) {
  var _useContext = (0, _react.useContext)(_Context.default),
    csp = _useContext.csp,
    prefixCls = _useContext.prefixCls;
  var mergedStyleStr = iconStyles;
  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
  }
  (0, _react.useEffect)(function () {
    var ele = eleRef.current;
    var shadowRoot = (0, _shadow.getShadowRoot)(ele);
    (0, _dynamicCSS.updateCSS)(mergedStyleStr, '@ant-design-icons', {
      prepend: true,
      csp: csp,
      attachTo: shadowRoot
    });
  }, []);
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread2.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread2.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/toPrimitive.js");
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/conversion.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/conversion.js ***!
  \****************************************************************/
/*! exports provided: rgbToRgb, rgbToHsl, hslToRgb, rgbToHsv, hsvToRgb, rgbToHex, rgbaToHex, rgbaToArgbHex, convertDecimalToHex, convertHexToDecimal, parseIntFromHex, numberInputToObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToRgb", function() { return rgbToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHsl", function() { return rgbToHsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslToRgb", function() { return hslToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHsv", function() { return rgbToHsv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvToRgb", function() { return hsvToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return rgbToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbaToHex", function() { return rgbaToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbaToArgbHex", function() { return rgbaToArgbHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDecimalToHex", function() { return convertDecimalToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertHexToDecimal", function() { return convertHexToDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseIntFromHex", function() { return parseIntFromHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberInputToObject", function() { return numberInputToObject; });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./node_modules/@ctrl/tinycolor/dist/module/util.js");

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
  return {
    r: Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["bound01"])(r, 255) * 255,
    g: Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["bound01"])(g, 255) * 255,
    b: Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["bound01"])(b, 255) * 255
  };
}
/**
 * Converts an RGB color value to HSL.
 * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
 * *Returns:* { h, s, l } in [0,1]
 */
function rgbToHsl(r, g, b) {
  r = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["bound01"])(r, 255);
  g = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["bound01"])(g, 255);
  b = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["bound01"])(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = 0;
  var s = 0;
  var l = (max + min) / 2;
  if (max === min) {
    s = 0;
    h = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }
  return {
    h: h,
    s: s,
    l: l
  };
}
function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * (6 * t);
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
  var r;
  var g;
  var b;
  h = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["bound01"])(h, 360);
  s = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["bound01"])(s, 100);
  l = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["bound01"])(l, 100);
  if (s === 0) {
    // achromatic
    g = l;
    b = l;
    r = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return {
    r: r * 255,
    g: g * 255,
    b: b * 255
  };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
  r = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["bound01"])(r, 255);
  g = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["bound01"])(g, 255);
  b = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["bound01"])(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = 0;
  var v = max;
  var d = max - min;
  var s = max === 0 ? 0 : d / max;
  if (max === min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }
  return {
    h: h,
    s: s,
    v: v
  };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
  h = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["bound01"])(h, 360) * 6;
  s = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["bound01"])(s, 100);
  v = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["bound01"])(v, 100);
  var i = Math.floor(h);
  var f = h - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v, q, p, p, t, v][mod];
  var g = [t, v, v, q, p, p][mod];
  var b = [p, p, t, v, v, q][mod];
  return {
    r: r * 255,
    g: g * 255,
    b: b * 255
  };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
  var hex = [Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(r).toString(16)), Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(g).toString(16)), Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(b).toString(16))];
  // Return a 3 character hex if possible
  if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join('');
}
/**
 * Converts an RGBA color plus alpha transparency to hex
 *
 * Assumes r, g, b are contained in the set [0, 255] and
 * a in [0, 1]. Returns a 4 or 8 character rgba hex
 */
// eslint-disable-next-line max-params
function rgbaToHex(r, g, b, a, allow4Char) {
  var hex = [Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(r).toString(16)), Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(g).toString(16)), Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(b).toString(16)), Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["pad2"])(convertDecimalToHex(a))];
  // Return a 4 character hex if possible
  if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join('');
}
/**
 * Converts an RGBA color to an ARGB Hex8 string
 * Rarely used, but required for "toFilter()"
 */
function rgbaToArgbHex(r, g, b, a) {
  var hex = [Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["pad2"])(convertDecimalToHex(a)), Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(r).toString(16)), Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(g).toString(16)), Object(_util_js__WEBPACK_IMPORTED_MODULE_0__["pad2"])(Math.round(b).toString(16))];
  return hex.join('');
}
/** Converts a decimal to a hex value */
function convertDecimalToHex(d) {
  return Math.round(parseFloat(d) * 255).toString(16);
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function numberInputToObject(color) {
  return {
    r: color >> 16,
    g: (color & 0xff00) >> 8,
    b: color & 0xff
  };
}

/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js ***!
  \*********************************************************************/
/*! exports provided: names */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "names", function() { return names; });
// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
var names = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32'
};

/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/format-input.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/format-input.js ***!
  \******************************************************************/
/*! exports provided: inputToRGB, stringInputToObject, isValidCSSUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputToRGB", function() { return inputToRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringInputToObject", function() { return stringInputToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidCSSUnit", function() { return isValidCSSUnit; });
/* harmony import */ var _conversion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion.js */ "./node_modules/@ctrl/tinycolor/dist/module/conversion.js");
/* harmony import */ var _css_color_names_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-color-names.js */ "./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.js */ "./node_modules/@ctrl/tinycolor/dist/module/util.js");
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */



/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
  var rgb = {
    r: 0,
    g: 0,
    b: 0
  };
  var a = 1;
  var s = null;
  var v = null;
  var l = null;
  var ok = false;
  var format = false;
  if (typeof color === 'string') {
    color = stringInputToObject(color);
  }
  if (typeof color === 'object') {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["rgbToRgb"])(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s = Object(_util_js__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.s);
      v = Object(_util_js__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.v);
      rgb = Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["hsvToRgb"])(color.h, s, v);
      ok = true;
      format = 'hsv';
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s = Object(_util_js__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.s);
      l = Object(_util_js__WEBPACK_IMPORTED_MODULE_2__["convertToPercentage"])(color.l);
      rgb = Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["hslToRgb"])(color.h, s, l);
      ok = true;
      format = 'hsl';
    }
    if (Object.prototype.hasOwnProperty.call(color, 'a')) {
      a = color.a;
    }
  }
  a = Object(_util_js__WEBPACK_IMPORTED_MODULE_2__["boundAlpha"])(a);
  return {
    ok: ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a
  };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
  rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
  hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
  hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
  hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
  hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (_css_color_names_js__WEBPACK_IMPORTED_MODULE_1__["names"][color]) {
    color = _css_color_names_js__WEBPACK_IMPORTED_MODULE_1__["names"][color];
    named = true;
  } else if (color === 'transparent') {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: 'name'
    };
  }
  // Try to match string input using regular expressions.
  // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
  // Just return an object and let the conversion functions handle that.
  // This way the result will be the same whether the tinycolor is initialized with string or object.
  var match = matchers.rgb.exec(color);
  if (match) {
    return {
      r: match[1],
      g: match[2],
      b: match[3]
    };
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return {
      r: match[1],
      g: match[2],
      b: match[3],
      a: match[4]
    };
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return {
      h: match[1],
      s: match[2],
      l: match[3]
    };
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return {
      h: match[1],
      s: match[2],
      l: match[3],
      a: match[4]
    };
  }
  match = matchers.hsv.exec(color);
  if (match) {
    return {
      h: match[1],
      s: match[2],
      v: match[3]
    };
  }
  match = matchers.hsva.exec(color);
  if (match) {
    return {
      h: match[1],
      s: match[2],
      v: match[3],
      a: match[4]
    };
  }
  match = matchers.hex8.exec(color);
  if (match) {
    return {
      r: Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1]),
      g: Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2]),
      b: Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3]),
      a: Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["convertHexToDecimal"])(match[4]),
      format: named ? 'name' : 'hex8'
    };
  }
  match = matchers.hex6.exec(color);
  if (match) {
    return {
      r: Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1]),
      g: Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2]),
      b: Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3]),
      format: named ? 'name' : 'hex'
    };
  }
  match = matchers.hex4.exec(color);
  if (match) {
    return {
      r: Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1] + match[1]),
      g: Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2] + match[2]),
      b: Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3] + match[3]),
      a: Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["convertHexToDecimal"])(match[4] + match[4]),
      format: named ? 'name' : 'hex8'
    };
  }
  match = matchers.hex3.exec(color);
  if (match) {
    return {
      r: Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[1] + match[1]),
      g: Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[2] + match[2]),
      b: Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["parseIntFromHex"])(match[3] + match[3]),
      format: named ? 'name' : 'hex'
    };
  }
  return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/from-ratio.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/from-ratio.js ***!
  \****************************************************************/
/*! exports provided: fromRatio, legacyRandom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRatio", function() { return fromRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legacyRandom", function() { return legacyRandom; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@ctrl/tinycolor/dist/module/index.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ "./node_modules/@ctrl/tinycolor/dist/module/util.js");


/**
 * If input is an object, force 1 into "1.0" to handle ratios properly
 * String input requires "1.0" as input, so 1 will be treated as 1
 */
function fromRatio(ratio, opts) {
  var newColor = {
    r: Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["convertToPercentage"])(ratio.r),
    g: Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["convertToPercentage"])(ratio.g),
    b: Object(_util_js__WEBPACK_IMPORTED_MODULE_1__["convertToPercentage"])(ratio.b)
  };
  if (ratio.a !== undefined) {
    newColor.a = Number(ratio.a);
  }
  return new _index_js__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](newColor, opts);
}
/** old random function */
function legacyRandom() {
  return new _index_js__WEBPACK_IMPORTED_MODULE_0__["TinyColor"]({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
}

/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/index.js ***!
  \***********************************************************/
/*! exports provided: TinyColor, tinycolor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TinyColor", function() { return TinyColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tinycolor", function() { return tinycolor; });
/* harmony import */ var _conversion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion.js */ "./node_modules/@ctrl/tinycolor/dist/module/conversion.js");
/* harmony import */ var _css_color_names_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-color-names.js */ "./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js");
/* harmony import */ var _format_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./format-input */ "./node_modules/@ctrl/tinycolor/dist/module/format-input.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util.js */ "./node_modules/@ctrl/tinycolor/dist/module/util.js");




var TinyColor = /** @class */function () {
  function TinyColor(color, opts) {
    if (color === void 0) {
      color = '';
    }
    if (opts === void 0) {
      opts = {};
    }
    var _a;
    // If input is already a tinycolor, return itself
    if (color instanceof TinyColor) {
      // eslint-disable-next-line no-constructor-return
      return color;
    }
    if (typeof color === 'number') {
      color = Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["numberInputToObject"])(color);
    }
    this.originalInput = color;
    var rgb = Object(_format_input__WEBPACK_IMPORTED_MODULE_2__["inputToRGB"])(color);
    this.originalInput = color;
    this.r = rgb.r;
    this.g = rgb.g;
    this.b = rgb.b;
    this.a = rgb.a;
    this.roundA = Math.round(100 * this.a) / 100;
    this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
    this.gradientType = opts.gradientType;
    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this.r < 1) {
      this.r = Math.round(this.r);
    }
    if (this.g < 1) {
      this.g = Math.round(this.g);
    }
    if (this.b < 1) {
      this.b = Math.round(this.b);
    }
    this.isValid = rgb.ok;
  }
  TinyColor.prototype.isDark = function () {
    return this.getBrightness() < 128;
  };
  TinyColor.prototype.isLight = function () {
    return !this.isDark();
  };
  /**
   * Returns the perceived brightness of the color, from 0-255.
   */
  TinyColor.prototype.getBrightness = function () {
    // http://www.w3.org/TR/AERT#color-contrast
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  };
  /**
   * Returns the perceived luminance of a color, from 0-1.
   */
  TinyColor.prototype.getLuminance = function () {
    // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
    var rgb = this.toRgb();
    var R;
    var G;
    var B;
    var RsRGB = rgb.r / 255;
    var GsRGB = rgb.g / 255;
    var BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) {
      R = RsRGB / 12.92;
    } else {
      // eslint-disable-next-line prefer-exponentiation-operator
      R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    }
    if (GsRGB <= 0.03928) {
      G = GsRGB / 12.92;
    } else {
      // eslint-disable-next-line prefer-exponentiation-operator
      G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    }
    if (BsRGB <= 0.03928) {
      B = BsRGB / 12.92;
    } else {
      // eslint-disable-next-line prefer-exponentiation-operator
      B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    }
    return 0.2126 * R + 0.7152 * G + 0.0722 * B;
  };
  /**
   * Returns the alpha value of a color, from 0-1.
   */
  TinyColor.prototype.getAlpha = function () {
    return this.a;
  };
  /**
   * Sets the alpha value on the current color.
   *
   * @param alpha - The new alpha value. The accepted range is 0-1.
   */
  TinyColor.prototype.setAlpha = function (alpha) {
    this.a = Object(_util_js__WEBPACK_IMPORTED_MODULE_3__["boundAlpha"])(alpha);
    this.roundA = Math.round(100 * this.a) / 100;
    return this;
  };
  /**
   * Returns whether the color is monochrome.
   */
  TinyColor.prototype.isMonochrome = function () {
    var s = this.toHsl().s;
    return s === 0;
  };
  /**
   * Returns the object as a HSVA object.
   */
  TinyColor.prototype.toHsv = function () {
    var hsv = Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["rgbToHsv"])(this.r, this.g, this.b);
    return {
      h: hsv.h * 360,
      s: hsv.s,
      v: hsv.v,
      a: this.a
    };
  };
  /**
   * Returns the hsva values interpolated into a string with the following format:
   * "hsva(xxx, xxx, xxx, xx)".
   */
  TinyColor.prototype.toHsvString = function () {
    var hsv = Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["rgbToHsv"])(this.r, this.g, this.b);
    var h = Math.round(hsv.h * 360);
    var s = Math.round(hsv.s * 100);
    var v = Math.round(hsv.v * 100);
    return this.a === 1 ? "hsv(".concat(h, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
  };
  /**
   * Returns the object as a HSLA object.
   */
  TinyColor.prototype.toHsl = function () {
    var hsl = Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["rgbToHsl"])(this.r, this.g, this.b);
    return {
      h: hsl.h * 360,
      s: hsl.s,
      l: hsl.l,
      a: this.a
    };
  };
  /**
   * Returns the hsla values interpolated into a string with the following format:
   * "hsla(xxx, xxx, xxx, xx)".
   */
  TinyColor.prototype.toHslString = function () {
    var hsl = Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["rgbToHsl"])(this.r, this.g, this.b);
    var h = Math.round(hsl.h * 360);
    var s = Math.round(hsl.s * 100);
    var l = Math.round(hsl.l * 100);
    return this.a === 1 ? "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
  };
  /**
   * Returns the hex value of the color.
   * @param allow3Char will shorten hex value to 3 char if possible
   */
  TinyColor.prototype.toHex = function (allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"])(this.r, this.g, this.b, allow3Char);
  };
  /**
   * Returns the hex value of the color -with a # prefixed.
   * @param allow3Char will shorten hex value to 3 char if possible
   */
  TinyColor.prototype.toHexString = function (allow3Char) {
    if (allow3Char === void 0) {
      allow3Char = false;
    }
    return '#' + this.toHex(allow3Char);
  };
  /**
   * Returns the hex 8 value of the color.
   * @param allow4Char will shorten hex value to 4 char if possible
   */
  TinyColor.prototype.toHex8 = function (allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["rgbaToHex"])(this.r, this.g, this.b, this.a, allow4Char);
  };
  /**
   * Returns the hex 8 value of the color -with a # prefixed.
   * @param allow4Char will shorten hex value to 4 char if possible
   */
  TinyColor.prototype.toHex8String = function (allow4Char) {
    if (allow4Char === void 0) {
      allow4Char = false;
    }
    return '#' + this.toHex8(allow4Char);
  };
  /**
   * Returns the shorter hex value of the color depends on its alpha -with a # prefixed.
   * @param allowShortChar will shorten hex value to 3 or 4 char if possible
   */
  TinyColor.prototype.toHexShortString = function (allowShortChar) {
    if (allowShortChar === void 0) {
      allowShortChar = false;
    }
    return this.a === 1 ? this.toHexString(allowShortChar) : this.toHex8String(allowShortChar);
  };
  /**
   * Returns the object as a RGBA object.
   */
  TinyColor.prototype.toRgb = function () {
    return {
      r: Math.round(this.r),
      g: Math.round(this.g),
      b: Math.round(this.b),
      a: this.a
    };
  };
  /**
   * Returns the RGBA values interpolated into a string with the following format:
   * "RGBA(xxx, xxx, xxx, xx)".
   */
  TinyColor.prototype.toRgbString = function () {
    var r = Math.round(this.r);
    var g = Math.round(this.g);
    var b = Math.round(this.b);
    return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
  };
  /**
   * Returns the object as a RGBA object.
   */
  TinyColor.prototype.toPercentageRgb = function () {
    var fmt = function (x) {
      return "".concat(Math.round(Object(_util_js__WEBPACK_IMPORTED_MODULE_3__["bound01"])(x, 255) * 100), "%");
    };
    return {
      r: fmt(this.r),
      g: fmt(this.g),
      b: fmt(this.b),
      a: this.a
    };
  };
  /**
   * Returns the RGBA relative values interpolated into a string
   */
  TinyColor.prototype.toPercentageRgbString = function () {
    var rnd = function (x) {
      return Math.round(Object(_util_js__WEBPACK_IMPORTED_MODULE_3__["bound01"])(x, 255) * 100);
    };
    return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
  };
  /**
   * The 'real' name of the color -if there is one.
   */
  TinyColor.prototype.toName = function () {
    if (this.a === 0) {
      return 'transparent';
    }
    if (this.a < 1) {
      return false;
    }
    var hex = '#' + Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"])(this.r, this.g, this.b, false);
    for (var _i = 0, _a = Object.entries(_css_color_names_js__WEBPACK_IMPORTED_MODULE_1__["names"]); _i < _a.length; _i++) {
      var _b = _a[_i],
        key = _b[0],
        value = _b[1];
      if (hex === value) {
        return key;
      }
    }
    return false;
  };
  TinyColor.prototype.toString = function (format) {
    var formatSet = Boolean(format);
    format = format !== null && format !== void 0 ? format : this.format;
    var formattedString = false;
    var hasAlpha = this.a < 1 && this.a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');
    if (needsAlphaFormat) {
      // Special case for "transparent", all other non-alpha formats
      // will return rgba when there is transparency.
      if (format === 'name' && this.a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format === 'rgb') {
      formattedString = this.toRgbString();
    }
    if (format === 'prgb') {
      formattedString = this.toPercentageRgbString();
    }
    if (format === 'hex' || format === 'hex6') {
      formattedString = this.toHexString();
    }
    if (format === 'hex3') {
      formattedString = this.toHexString(true);
    }
    if (format === 'hex4') {
      formattedString = this.toHex8String(true);
    }
    if (format === 'hex8') {
      formattedString = this.toHex8String();
    }
    if (format === 'name') {
      formattedString = this.toName();
    }
    if (format === 'hsl') {
      formattedString = this.toHslString();
    }
    if (format === 'hsv') {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  };
  TinyColor.prototype.toNumber = function () {
    return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
  };
  TinyColor.prototype.clone = function () {
    return new TinyColor(this.toString());
  };
  /**
   * Lighten the color a given amount. Providing 100 will always return white.
   * @param amount - valid between 1-100
   */
  TinyColor.prototype.lighten = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l += amount / 100;
    hsl.l = Object(_util_js__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.l);
    return new TinyColor(hsl);
  };
  /**
   * Brighten the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */
  TinyColor.prototype.brighten = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var rgb = this.toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return new TinyColor(rgb);
  };
  /**
   * Darken the color a given amount, from 0 to 100.
   * Providing 100 will always return black.
   * @param amount - valid between 1-100
   */
  TinyColor.prototype.darken = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.l -= amount / 100;
    hsl.l = Object(_util_js__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.l);
    return new TinyColor(hsl);
  };
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   * @param amount - valid between 1-100
   */
  TinyColor.prototype.tint = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix('white', amount);
  };
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   * @param amount - valid between 1-100
   */
  TinyColor.prototype.shade = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    return this.mix('black', amount);
  };
  /**
   * Desaturate the color a given amount, from 0 to 100.
   * Providing 100 will is the same as calling greyscale
   * @param amount - valid between 1-100
   */
  TinyColor.prototype.desaturate = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s -= amount / 100;
    hsl.s = Object(_util_js__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.s);
    return new TinyColor(hsl);
  };
  /**
   * Saturate the color a given amount, from 0 to 100.
   * @param amount - valid between 1-100
   */
  TinyColor.prototype.saturate = function (amount) {
    if (amount === void 0) {
      amount = 10;
    }
    var hsl = this.toHsl();
    hsl.s += amount / 100;
    hsl.s = Object(_util_js__WEBPACK_IMPORTED_MODULE_3__["clamp01"])(hsl.s);
    return new TinyColor(hsl);
  };
  /**
   * Completely desaturates a color into greyscale.
   * Same as calling `desaturate(100)`
   */
  TinyColor.prototype.greyscale = function () {
    return this.desaturate(100);
  };
  /**
   * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
   * Values outside of this range will be wrapped into this range.
   */
  TinyColor.prototype.spin = function (amount) {
    var hsl = this.toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return new TinyColor(hsl);
  };
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  TinyColor.prototype.mix = function (color, amount) {
    if (amount === void 0) {
      amount = 50;
    }
    var rgb1 = this.toRgb();
    var rgb2 = new TinyColor(color).toRgb();
    var p = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b,
      a: (rgb2.a - rgb1.a) * p + rgb1.a
    };
    return new TinyColor(rgba);
  };
  TinyColor.prototype.analogous = function (results, slices) {
    if (results === void 0) {
      results = 6;
    }
    if (slices === void 0) {
      slices = 30;
    }
    var hsl = this.toHsl();
    var part = 360 / slices;
    var ret = [this];
    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(new TinyColor(hsl));
    }
    return ret;
  };
  /**
   * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
   */
  TinyColor.prototype.complement = function () {
    var hsl = this.toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return new TinyColor(hsl);
  };
  TinyColor.prototype.monochromatic = function (results) {
    if (results === void 0) {
      results = 6;
    }
    var hsv = this.toHsv();
    var h = hsv.h;
    var s = hsv.s;
    var v = hsv.v;
    var res = [];
    var modification = 1 / results;
    while (results--) {
      res.push(new TinyColor({
        h: h,
        s: s,
        v: v
      }));
      v = (v + modification) % 1;
    }
    return res;
  };
  TinyColor.prototype.splitcomplement = function () {
    var hsl = this.toHsl();
    var h = hsl.h;
    return [this, new TinyColor({
      h: (h + 72) % 360,
      s: hsl.s,
      l: hsl.l
    }), new TinyColor({
      h: (h + 216) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  };
  /**
   * Compute how the color would appear on a background
   */
  TinyColor.prototype.onBackground = function (background) {
    var fg = this.toRgb();
    var bg = new TinyColor(background).toRgb();
    var alpha = fg.a + bg.a * (1 - fg.a);
    return new TinyColor({
      r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
      g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
      b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
      a: alpha
    });
  };
  /**
   * Alias for `polyad(3)`
   */
  TinyColor.prototype.triad = function () {
    return this.polyad(3);
  };
  /**
   * Alias for `polyad(4)`
   */
  TinyColor.prototype.tetrad = function () {
    return this.polyad(4);
  };
  /**
   * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
   * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
   */
  TinyColor.prototype.polyad = function (n) {
    var hsl = this.toHsl();
    var h = hsl.h;
    var result = [this];
    var increment = 360 / n;
    for (var i = 1; i < n; i++) {
      result.push(new TinyColor({
        h: (h + i * increment) % 360,
        s: hsl.s,
        l: hsl.l
      }));
    }
    return result;
  };
  /**
   * compare color vs current color
   */
  TinyColor.prototype.equals = function (color) {
    return this.toRgbString() === new TinyColor(color).toRgbString();
  };
  return TinyColor;
}();

// kept for backwards compatability with v1
function tinycolor(color, opts) {
  if (color === void 0) {
    color = '';
  }
  if (opts === void 0) {
    opts = {};
  }
  return new TinyColor(color, opts);
}

/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/interfaces.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/interfaces.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/public_api.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/public_api.js ***!
  \****************************************************************/
/*! exports provided: TinyColor, tinycolor, names, readability, isReadable, mostReadable, toMsFilter, fromRatio, legacyRandom, inputToRGB, stringInputToObject, isValidCSSUnit, random, bounds, rgbToRgb, rgbToHsl, hslToRgb, rgbToHsv, hsvToRgb, rgbToHex, rgbaToHex, rgbaToArgbHex, convertDecimalToHex, convertHexToDecimal, parseIntFromHex, numberInputToObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@ctrl/tinycolor/dist/module/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TinyColor", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["TinyColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tinycolor", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["tinycolor"]; });

/* harmony import */ var _css_color_names_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css-color-names.js */ "./node_modules/@ctrl/tinycolor/dist/module/css-color-names.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "names", function() { return _css_color_names_js__WEBPACK_IMPORTED_MODULE_1__["names"]; });

/* harmony import */ var _readability_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./readability.js */ "./node_modules/@ctrl/tinycolor/dist/module/readability.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readability", function() { return _readability_js__WEBPACK_IMPORTED_MODULE_2__["readability"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReadable", function() { return _readability_js__WEBPACK_IMPORTED_MODULE_2__["isReadable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mostReadable", function() { return _readability_js__WEBPACK_IMPORTED_MODULE_2__["mostReadable"]; });

/* harmony import */ var _to_ms_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./to-ms-filter.js */ "./node_modules/@ctrl/tinycolor/dist/module/to-ms-filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toMsFilter", function() { return _to_ms_filter_js__WEBPACK_IMPORTED_MODULE_3__["toMsFilter"]; });

/* harmony import */ var _from_ratio_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./from-ratio.js */ "./node_modules/@ctrl/tinycolor/dist/module/from-ratio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromRatio", function() { return _from_ratio_js__WEBPACK_IMPORTED_MODULE_4__["fromRatio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "legacyRandom", function() { return _from_ratio_js__WEBPACK_IMPORTED_MODULE_4__["legacyRandom"]; });

/* harmony import */ var _format_input_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./format-input.js */ "./node_modules/@ctrl/tinycolor/dist/module/format-input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inputToRGB", function() { return _format_input_js__WEBPACK_IMPORTED_MODULE_5__["inputToRGB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringInputToObject", function() { return _format_input_js__WEBPACK_IMPORTED_MODULE_5__["stringInputToObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidCSSUnit", function() { return _format_input_js__WEBPACK_IMPORTED_MODULE_5__["isValidCSSUnit"]; });

/* harmony import */ var _random_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./random.js */ "./node_modules/@ctrl/tinycolor/dist/module/random.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "random", function() { return _random_js__WEBPACK_IMPORTED_MODULE_6__["random"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bounds", function() { return _random_js__WEBPACK_IMPORTED_MODULE_6__["bounds"]; });

/* harmony import */ var _interfaces_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interfaces.js */ "./node_modules/@ctrl/tinycolor/dist/module/interfaces.js");
/* empty/unused harmony star reexport *//* harmony import */ var _conversion_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./conversion.js */ "./node_modules/@ctrl/tinycolor/dist/module/conversion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgbToRgb", function() { return _conversion_js__WEBPACK_IMPORTED_MODULE_8__["rgbToRgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgbToHsl", function() { return _conversion_js__WEBPACK_IMPORTED_MODULE_8__["rgbToHsl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hslToRgb", function() { return _conversion_js__WEBPACK_IMPORTED_MODULE_8__["hslToRgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgbToHsv", function() { return _conversion_js__WEBPACK_IMPORTED_MODULE_8__["rgbToHsv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsvToRgb", function() { return _conversion_js__WEBPACK_IMPORTED_MODULE_8__["hsvToRgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return _conversion_js__WEBPACK_IMPORTED_MODULE_8__["rgbToHex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgbaToHex", function() { return _conversion_js__WEBPACK_IMPORTED_MODULE_8__["rgbaToHex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgbaToArgbHex", function() { return _conversion_js__WEBPACK_IMPORTED_MODULE_8__["rgbaToArgbHex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertDecimalToHex", function() { return _conversion_js__WEBPACK_IMPORTED_MODULE_8__["convertDecimalToHex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertHexToDecimal", function() { return _conversion_js__WEBPACK_IMPORTED_MODULE_8__["convertHexToDecimal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseIntFromHex", function() { return _conversion_js__WEBPACK_IMPORTED_MODULE_8__["parseIntFromHex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "numberInputToObject", function() { return _conversion_js__WEBPACK_IMPORTED_MODULE_8__["numberInputToObject"]; });











// kept for backwards compatability with v1
/* harmony default export */ __webpack_exports__["default"] = (_index_js__WEBPACK_IMPORTED_MODULE_0__["tinycolor"]);

/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/random.js":
/*!************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/random.js ***!
  \************************************************************/
/*! exports provided: random, bounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "random", function() { return random; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounds", function() { return bounds; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@ctrl/tinycolor/dist/module/index.js");
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
// randomColor by David Merfield under the CC0 license
// https://github.com/davidmerfield/randomColor/

function random(options) {
  if (options === void 0) {
    options = {};
  }
  // Check if we need to generate multiple colors
  if (options.count !== undefined && options.count !== null) {
    var totalColors = options.count;
    var colors = [];
    options.count = undefined;
    while (totalColors > colors.length) {
      // Since we're generating multiple colors,
      // incremement the seed. Otherwise we'd just
      // generate the same color each time...
      options.count = null;
      if (options.seed) {
        options.seed += 1;
      }
      colors.push(random(options));
    }
    options.count = totalColors;
    return colors;
  }
  // First we pick a hue (H)
  var h = pickHue(options.hue, options.seed);
  // Then use H to determine saturation (S)
  var s = pickSaturation(h, options);
  // Then use S and H to determine brightness (B).
  var v = pickBrightness(h, s, options);
  var res = {
    h: h,
    s: s,
    v: v
  };
  if (options.alpha !== undefined) {
    res.a = options.alpha;
  }
  // Then we return the HSB color in the desired format
  return new _index_js__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](res);
}
function pickHue(hue, seed) {
  var hueRange = getHueRange(hue);
  var res = randomWithin(hueRange, seed);
  // Instead of storing red as two seperate ranges,
  // we group them, using negative numbers
  if (res < 0) {
    res = 360 + res;
  }
  return res;
}
function pickSaturation(hue, options) {
  if (options.hue === 'monochrome') {
    return 0;
  }
  if (options.luminosity === 'random') {
    return randomWithin([0, 100], options.seed);
  }
  var saturationRange = getColorInfo(hue).saturationRange;
  var sMin = saturationRange[0];
  var sMax = saturationRange[1];
  switch (options.luminosity) {
    case 'bright':
      sMin = 55;
      break;
    case 'dark':
      sMin = sMax - 10;
      break;
    case 'light':
      sMax = 55;
      break;
    default:
      break;
  }
  return randomWithin([sMin, sMax], options.seed);
}
function pickBrightness(H, S, options) {
  var bMin = getMinimumBrightness(H, S);
  var bMax = 100;
  switch (options.luminosity) {
    case 'dark':
      bMax = bMin + 20;
      break;
    case 'light':
      bMin = (bMax + bMin) / 2;
      break;
    case 'random':
      bMin = 0;
      bMax = 100;
      break;
    default:
      break;
  }
  return randomWithin([bMin, bMax], options.seed);
}
function getMinimumBrightness(H, S) {
  var lowerBounds = getColorInfo(H).lowerBounds;
  for (var i = 0; i < lowerBounds.length - 1; i++) {
    var s1 = lowerBounds[i][0];
    var v1 = lowerBounds[i][1];
    var s2 = lowerBounds[i + 1][0];
    var v2 = lowerBounds[i + 1][1];
    if (S >= s1 && S <= s2) {
      var m = (v2 - v1) / (s2 - s1);
      var b = v1 - m * s1;
      return m * S + b;
    }
  }
  return 0;
}
function getHueRange(colorInput) {
  var num = parseInt(colorInput, 10);
  if (!Number.isNaN(num) && num < 360 && num > 0) {
    return [num, num];
  }
  if (typeof colorInput === 'string') {
    var namedColor = bounds.find(function (n) {
      return n.name === colorInput;
    });
    if (namedColor) {
      var color = defineColor(namedColor);
      if (color.hueRange) {
        return color.hueRange;
      }
    }
    var parsed = new _index_js__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](colorInput);
    if (parsed.isValid) {
      var hue = parsed.toHsv().h;
      return [hue, hue];
    }
  }
  return [0, 360];
}
function getColorInfo(hue) {
  // Maps red colors to make picking hue easier
  if (hue >= 334 && hue <= 360) {
    hue -= 360;
  }
  for (var _i = 0, bounds_1 = bounds; _i < bounds_1.length; _i++) {
    var bound = bounds_1[_i];
    var color = defineColor(bound);
    if (color.hueRange && hue >= color.hueRange[0] && hue <= color.hueRange[1]) {
      return color;
    }
  }
  throw Error('Color not found');
}
function randomWithin(range, seed) {
  if (seed === undefined) {
    return Math.floor(range[0] + Math.random() * (range[1] + 1 - range[0]));
  }
  // Seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
  var max = range[1] || 1;
  var min = range[0] || 0;
  seed = (seed * 9301 + 49297) % 233280;
  var rnd = seed / 233280.0;
  return Math.floor(min + rnd * (max - min));
}
function defineColor(bound) {
  var sMin = bound.lowerBounds[0][0];
  var sMax = bound.lowerBounds[bound.lowerBounds.length - 1][0];
  var bMin = bound.lowerBounds[bound.lowerBounds.length - 1][1];
  var bMax = bound.lowerBounds[0][1];
  return {
    name: bound.name,
    hueRange: bound.hueRange,
    lowerBounds: bound.lowerBounds,
    saturationRange: [sMin, sMax],
    brightnessRange: [bMin, bMax]
  };
}
/**
 * @hidden
 */
var bounds = [{
  name: 'monochrome',
  hueRange: null,
  lowerBounds: [[0, 0], [100, 0]]
}, {
  name: 'red',
  hueRange: [-26, 18],
  lowerBounds: [[20, 100], [30, 92], [40, 89], [50, 85], [60, 78], [70, 70], [80, 60], [90, 55], [100, 50]]
}, {
  name: 'orange',
  hueRange: [19, 46],
  lowerBounds: [[20, 100], [30, 93], [40, 88], [50, 86], [60, 85], [70, 70], [100, 70]]
}, {
  name: 'yellow',
  hueRange: [47, 62],
  lowerBounds: [[25, 100], [40, 94], [50, 89], [60, 86], [70, 84], [80, 82], [90, 80], [100, 75]]
}, {
  name: 'green',
  hueRange: [63, 178],
  lowerBounds: [[30, 100], [40, 90], [50, 85], [60, 81], [70, 74], [80, 64], [90, 50], [100, 40]]
}, {
  name: 'blue',
  hueRange: [179, 257],
  lowerBounds: [[20, 100], [30, 86], [40, 80], [50, 74], [60, 60], [70, 52], [80, 44], [90, 39], [100, 35]]
}, {
  name: 'purple',
  hueRange: [258, 282],
  lowerBounds: [[20, 100], [30, 87], [40, 79], [50, 70], [60, 65], [70, 59], [80, 52], [90, 45], [100, 42]]
}, {
  name: 'pink',
  hueRange: [283, 334],
  lowerBounds: [[20, 100], [30, 90], [40, 86], [60, 84], [80, 80], [90, 75], [100, 73]]
}];

/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/readability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/readability.js ***!
  \*****************************************************************/
/*! exports provided: readability, isReadable, mostReadable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readability", function() { return readability; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReadable", function() { return isReadable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mostReadable", function() { return mostReadable; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@ctrl/tinycolor/dist/module/index.js");

// Readability Functions
// ---------------------
// <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)
/**
 * AKA `contrast`
 *
 * Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
 */
function readability(color1, color2) {
  var c1 = new _index_js__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color1);
  var c2 = new _index_js__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color2);
  return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
}
/**
 * Ensure that foreground and background color combinations meet WCAG2 guidelines.
 * The third argument is an object.
 *      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
 *      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
 * If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.
 *
 * Example
 * ```ts
 * new TinyColor().isReadable('#000', '#111') => false
 * new TinyColor().isReadable('#000', '#111', { level: 'AA', size: 'large' }) => false
 * ```
 */
function isReadable(color1, color2, wcag2) {
  var _a, _b;
  if (wcag2 === void 0) {
    wcag2 = {
      level: 'AA',
      size: 'small'
    };
  }
  var readabilityLevel = readability(color1, color2);
  switch (((_a = wcag2.level) !== null && _a !== void 0 ? _a : 'AA') + ((_b = wcag2.size) !== null && _b !== void 0 ? _b : 'small')) {
    case 'AAsmall':
    case 'AAAlarge':
      return readabilityLevel >= 4.5;
    case 'AAlarge':
      return readabilityLevel >= 3;
    case 'AAAsmall':
      return readabilityLevel >= 7;
    default:
      return false;
  }
}
/**
 * Given a base color and a list of possible foreground or background
 * colors for that base, returns the most readable color.
 * Optionally returns Black or White if the most readable color is unreadable.
 *
 * @param baseColor - the base color.
 * @param colorList - array of colors to pick the most readable one from.
 * @param args - and object with extra arguments
 *
 * Example
 * ```ts
 * new TinyColor().mostReadable('#123', ['#124", "#125'], { includeFallbackColors: false }).toHexString(); // "#112255"
 * new TinyColor().mostReadable('#123', ['#124", "#125'],{ includeFallbackColors: true }).toHexString();  // "#ffffff"
 * new TinyColor().mostReadable('#a8015a', ["#faf3f3"], { includeFallbackColors:true, level: 'AAA', size: 'large' }).toHexString(); // "#faf3f3"
 * new TinyColor().mostReadable('#a8015a', ["#faf3f3"], { includeFallbackColors:true, level: 'AAA', size: 'small' }).toHexString(); // "#ffffff"
 * ```
 */
function mostReadable(baseColor, colorList, args) {
  if (args === void 0) {
    args = {
      includeFallbackColors: false,
      level: 'AA',
      size: 'small'
    };
  }
  var bestColor = null;
  var bestScore = 0;
  var includeFallbackColors = args.includeFallbackColors,
    level = args.level,
    size = args.size;
  for (var _i = 0, colorList_1 = colorList; _i < colorList_1.length; _i++) {
    var color = colorList_1[_i];
    var score = readability(baseColor, color);
    if (score > bestScore) {
      bestScore = score;
      bestColor = new _index_js__WEBPACK_IMPORTED_MODULE_0__["TinyColor"](color);
    }
  }
  if (isReadable(baseColor, bestColor, {
    level: level,
    size: size
  }) || !includeFallbackColors) {
    return bestColor;
  }
  args.includeFallbackColors = false;
  return mostReadable(baseColor, ['#fff', '#000'], args);
}

/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/to-ms-filter.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/to-ms-filter.js ***!
  \******************************************************************/
/*! exports provided: toMsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMsFilter", function() { return toMsFilter; });
/* harmony import */ var _conversion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conversion.js */ "./node_modules/@ctrl/tinycolor/dist/module/conversion.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/@ctrl/tinycolor/dist/module/index.js");


/**
 * Returns the color represented as a Microsoft filter for use in old versions of IE.
 */
function toMsFilter(firstColor, secondColor) {
  var color = new _index_js__WEBPACK_IMPORTED_MODULE_1__["TinyColor"](firstColor);
  var hex8String = '#' + Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["rgbaToArgbHex"])(color.r, color.g, color.b, color.a);
  var secondHex8String = hex8String;
  var gradientType = color.gradientType ? 'GradientType = 1, ' : '';
  if (secondColor) {
    var s = new _index_js__WEBPACK_IMPORTED_MODULE_1__["TinyColor"](secondColor);
    secondHex8String = '#' + Object(_conversion_js__WEBPACK_IMPORTED_MODULE_0__["rgbaToArgbHex"])(s.r, s.g, s.b, s.a);
  }
  return "progid:DXImageTransform.Microsoft.gradient(".concat(gradientType, "startColorstr=").concat(hex8String, ",endColorstr=").concat(secondHex8String, ")");
}

/***/ }),

/***/ "./node_modules/@ctrl/tinycolor/dist/module/util.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ctrl/tinycolor/dist/module/util.js ***!
  \**********************************************************/
/*! exports provided: bound01, clamp01, isOnePointZero, isPercentage, boundAlpha, convertToPercentage, pad2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bound01", function() { return bound01; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp01", function() { return clamp01; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnePointZero", function() { return isOnePointZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPercentage", function() { return isPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundAlpha", function() { return boundAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToPercentage", function() { return convertToPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad2", function() { return pad2; });
/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
  if (isOnePointZero(n)) {
    n = '100%';
  }
  var isPercent = isPercentage(n);
  n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
  // Automatically convert percentage into number
  if (isPercent) {
    n = parseInt(String(n * max), 10) / 100;
  }
  // Handle floating point rounding errors
  if (Math.abs(n - max) < 0.000001) {
    return 1;
  }
  // Convert into [0, 1] range if it isn't already
  if (max === 360) {
    // If n is a hue given in degrees,
    // wrap around out-of-range values into [0, 360] range
    // then convert into [0, 1].
    n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
  } else {
    // If n not a hue given in degrees
    // Convert into [0, 1] range if it isn't already.
    n = n % max / parseFloat(String(max));
  }
  return n;
}
/**
 * Force a number between 0 and 1
 * @hidden
 */
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
  return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
  return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
  if (n <= 1) {
    return "".concat(Number(n) * 100, "%");
  }
  return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function pad2(c) {
  return c.length === 1 ? '0' + c : String(c);
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;
  function classNames() {
    var classes = '';
    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (arg) {
        classes = appendClass(classes, parseValue(arg));
      }
    }
    return classes;
  }
  function parseValue(arg) {
    if (typeof arg === 'string' || typeof arg === 'number') {
      return arg;
    }
    if (typeof arg !== 'object') {
      return '';
    }
    if (Array.isArray(arg)) {
      return classNames.apply(null, arg);
    }
    if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
      return arg.toString();
    }
    var classes = '';
    for (var key in arg) {
      if (hasOwn.call(arg, key) && arg[key]) {
        classes = appendClass(classes, key);
      }
    }
    return classes;
  }
  function appendClass(value, newClass) {
    if (!newClass) {
      return value;
    }
    if (value) {
      return value + ' ' + newClass;
    }
    return value + newClass;
  }
  if ( true && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if (true) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})();

/***/ }),

/***/ "./node_modules/rc-util/lib/Dom/canUseDom.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-util/lib/Dom/canUseDom.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = canUseDom;
function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

/***/ }),

/***/ "./node_modules/rc-util/lib/Dom/contains.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-util/lib/Dom/contains.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contains;
function contains(root, n) {
  if (!root) {
    return false;
  }

  // Use native if support
  if (root.contains) {
    return root.contains(n);
  }

  // `document.contains` not support with IE11
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

/***/ }),

/***/ "./node_modules/rc-util/lib/Dom/dynamicCSS.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-util/lib/Dom/dynamicCSS.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearContainerCache = clearContainerCache;
exports.injectCSS = injectCSS;
exports.removeCSS = removeCSS;
exports.updateCSS = updateCSS;
var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "./node_modules/@babel/runtime/helpers/objectSpread2.js"));
var _canUseDom = _interopRequireDefault(__webpack_require__(/*! ./canUseDom */ "./node_modules/rc-util/lib/Dom/canUseDom.js"));
var _contains = _interopRequireDefault(__webpack_require__(/*! ./contains */ "./node_modules/rc-util/lib/Dom/contains.js"));
var APPEND_ORDER = 'data-rc-order';
var APPEND_PRIORITY = 'data-rc-priority';
var MARK_KEY = "rc-util-key";
var containerCache = new Map();
function getMark() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    mark = _ref.mark;
  if (mark) {
    return mark.startsWith('data-') ? mark : "data-".concat(mark);
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  var head = document.querySelector('head');
  return head || document.body;
}
function getOrder(prepend) {
  if (prepend === 'queue') {
    return 'prependQueue';
  }
  return prepend ? 'prepend' : 'append';
}

/**
 * Find style which inject by rc-util
 */
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter(function (node) {
    return node.tagName === 'STYLE';
  });
}
function injectCSS(css) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!(0, _canUseDom.default)()) {
    return null;
  }
  var csp = option.csp,
    prepend = option.prepend,
    _option$priority = option.priority,
    priority = _option$priority === void 0 ? 0 : _option$priority;
  var mergedOrder = getOrder(prepend);
  var isPrependQueue = mergedOrder === 'prependQueue';
  var styleNode = document.createElement('style');
  styleNode.setAttribute(APPEND_ORDER, mergedOrder);
  if (isPrependQueue && priority) {
    styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
  }
  if (csp !== null && csp !== void 0 && csp.nonce) {
    styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
  }
  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;
  if (prepend) {
    // If is queue `prepend`, it will prepend first style and then append rest style
    if (isPrependQueue) {
      var existStyle = (option.styles || findStyles(container)).filter(function (node) {
        // Ignore style which not injected by rc-util with prepend
        if (!['prepend', 'prependQueue'].includes(node.getAttribute(APPEND_ORDER))) {
          return false;
        }

        // Ignore style which priority less then new style
        var nodePriority = Number(node.getAttribute(APPEND_PRIORITY) || 0);
        return priority >= nodePriority;
      });
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }

    // Use `insertBefore` as `prepend`
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var container = getContainer(option);
  return (option.styles || findStyles(container)).find(function (node) {
    return node.getAttribute(getMark(option)) === key;
  });
}
function removeCSS(key) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var existNode = findExistNode(key, option);
  if (existNode) {
    var container = getContainer(option);
    container.removeChild(existNode);
  }
}

/**
 * qiankun will inject `appendChild` to insert into other
 */
function syncRealContainer(container, option) {
  var cachedRealContainer = containerCache.get(container);

  // Find real container when not cached or cached container removed
  if (!cachedRealContainer || !(0, _contains.default)(document, cachedRealContainer)) {
    var placeholderStyle = injectCSS('', option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}

/**
 * manually clear container cache to avoid global cache in unit testes
 */
function clearContainerCache() {
  containerCache.clear();
}
function updateCSS(css, key) {
  var originOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var container = getContainer(originOption);
  var styles = findStyles(container);
  var option = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, originOption), {}, {
    styles: styles
  });

  // Sync real parent
  syncRealContainer(container, option);
  var existNode = findExistNode(key, option);
  if (existNode) {
    var _option$csp, _option$csp2;
    if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
      var _option$csp3;
      existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  var newNode = injectCSS(css, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}

/***/ }),

/***/ "./node_modules/rc-util/lib/Dom/shadow.js":
/*!************************************************!*\
  !*** ./node_modules/rc-util/lib/Dom/shadow.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getShadowRoot = getShadowRoot;
exports.inShadow = inShadow;
function getRoot(ele) {
  var _ele$getRootNode;
  return ele === null || ele === void 0 || (_ele$getRootNode = ele.getRootNode) === null || _ele$getRootNode === void 0 ? void 0 : _ele$getRootNode.call(ele);
}

/**
 * Check if is in shadowRoot
 */
function inShadow(ele) {
  return getRoot(ele) instanceof ShadowRoot;
}

/**
 * Return shadowRoot if possible
 */
function getShadowRoot(ele) {
  return inShadow(ele) ? getRoot(ele) : null;
}

/***/ }),

/***/ "./node_modules/rc-util/lib/warning.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-util/lib/warning.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.call = call;
exports.default = void 0;
exports.note = note;
exports.noteOnce = noteOnce;
exports.preMessage = void 0;
exports.resetWarned = resetWarned;
exports.warning = warning;
exports.warningOnce = warningOnce;
/* eslint-disable no-console */
var warned = {};
var preWarningFns = [];

/**
 * Pre warning enable you to parse content before console.error.
 * Modify to null will prevent warning.
 */
var preMessage = exports.preMessage = function preMessage(fn) {
  preWarningFns.push(fn);
};

/**
 * Warning if condition not match.
 * @param valid Condition
 * @param message Warning message
 * @example
 * ```js
 * warning(false, 'some error'); // print some error
 * warning(true, 'some error'); // print nothing
 * warning(1 === 2, 'some error'); // print some error
 * ```
 */
function warning(valid, message) {
  if ( true && !valid && console !== undefined) {
    var finalMessage = preWarningFns.reduce(function (msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : '', 'warning');
    }, message);
    if (finalMessage) {
      console.error("Warning: ".concat(finalMessage));
    }
  }
}

/** @see Similar to {@link warning} */
function note(valid, message) {
  if ( true && !valid && console !== undefined) {
    var finalMessage = preWarningFns.reduce(function (msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : '', 'note');
    }, message);
    if (finalMessage) {
      console.warn("Note: ".concat(finalMessage));
    }
  }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}

/** @see Same as {@link warning}, but only warn once for the same message */
function warningOnce(valid, message) {
  call(warning, valid, message);
}

/** @see Same as {@link warning}, but only warn once for the same message */
function noteOnce(valid, message) {
  call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
var _default = exports.default = warningOnce;

/***/ })

}]);
//# sourceMappingURL=2-a7766e5adf568ad9ca88.chunk.js.map