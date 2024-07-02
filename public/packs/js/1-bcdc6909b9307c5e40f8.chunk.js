(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./app/javascript/components/shared/AuthCard.tsx":
/*!*******************************************************!*\
  !*** ./app/javascript/components/shared/AuthCard.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/index.js");
/* harmony import */ var _MainCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainCard */ "./app/javascript/components/shared/MainCard.tsx");
var _excluded = ["children"];
var _jsxFileName = "/Users/admin/Desktop/project-ges/app/javascript/components/shared/AuthCard.tsx";
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }



function AuthCard(_ref) {
  var children = _ref.children,
    other = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainCard__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
    sx: {
      maxWidth: {
        xs: 400,
        lg: 475
      },
      margin: {
        xs: 2.5,
        md: 3
      },
      '& > *': {
        flexGrow: 1,
        flexBasis: '50%'
      }
    },
    content: false
  }, other, {
    border: false,
    boxShadow: true,
    shadow: function shadow(theme) {
      return theme.customShadows.z1;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      p: {
        xs: 2,
        sm: 3,
        md: 4,
        xl: 5
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, children));
}

/***/ }),

/***/ "./app/javascript/components/shared/AuthWrapper.tsx":
/*!**********************************************************!*\
  !*** ./app/javascript/components/shared/AuthWrapper.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./app/javascript/components/shared/Footer.tsx");
/* harmony import */ var _AuthCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthCard */ "./app/javascript/components/shared/AuthCard.tsx");
!(function webpackMissingModule() { var e = new Error("Cannot find module '../images/AuthBackground'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var _jsxFileName = "/Users/admin/Desktop/project-ges/app/javascript/components/shared/AuthWrapper.tsx";





function AuthWrapper(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      minHeight: '100vh'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module '../images/AuthBackground'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    direction: "column",
    justifyContent: "flex-end",
    sx: {
      minHeight: '100vh'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sx: {
      ml: 3,
      mt: 3
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    container: true,
    justifyContent: "center",
    alignItems: "center",
    sx: {
      minHeight: {
        xs: 'calc(100vh - 210px)',
        sm: 'calc(100vh - 134px)',
        md: 'calc(100vh - 112px)'
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AuthCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, children)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    sx: {
      m: 3,
      mt: 1
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./app/javascript/components/shared/Footer.tsx":
/*!*****************************************************!*\
  !*** ./app/javascript/components/shared/Footer.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthFooter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
var _jsxFileName = "/Users/admin/Desktop/project-ges/app/javascript/components/shared/Footer.tsx";


function AuthFooter() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    direction: {
      xs: 'column',
      sm: 'row'
    },
    justifyContent: {
      xs: 'center',
      sm: 'space-between'
    },
    spacing: 2,
    textAlign: {
      xs: 'center',
      sm: 'inherit'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "subtitle2",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "This site is protected by", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_1__["Link"],
    variant: "subtitle2",
    href: "#mantis-privacy",
    target: "_blank",
    underline: "hover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "Privacy Policy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    direction: {
      xs: 'column',
      sm: 'row'
    },
    spacing: {
      xs: 1,
      sm: 3
    },
    textAlign: {
      xs: 'center',
      sm: 'inherit'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "subtitle2",
    color: "secondary",
    component: _mui_material__WEBPACK_IMPORTED_MODULE_1__["Link"],
    href: "https://codedthemes.com",
    target: "_blank",
    underline: "hover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, "Terms and Conditions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "subtitle2",
    color: "secondary",
    component: _mui_material__WEBPACK_IMPORTED_MODULE_1__["Link"],
    href: "https://codedthemes.com",
    target: "_blank",
    underline: "hover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "Privacy Policy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "subtitle2",
    color: "secondary",
    component: _mui_material__WEBPACK_IMPORTED_MODULE_1__["Link"],
    href: "https://codedthemes.com",
    target: "_blank",
    underline: "hover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "CA Privacy Notice"))));
}

/***/ }),

/***/ "./app/javascript/components/shared/MainCard.tsx":
/*!*******************************************************!*\
  !*** ./app/javascript/components/shared/MainCard.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
var _excluded = ["border", "boxShadow", "children", "content", "contentSX", "darkTitle", "elevation", "secondary", "shadow", "sx", "title"];
var _jsxFileName = "/Users/admin/Desktop/project-ges/app/javascript/components/shared/MainCard.tsx";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } } return target; }




// header style
var headerSX = {
  p: 2.5,
  '& .MuiCardHeader-action': {
    m: '0px auto',
    alignSelf: 'center'
  }
};
// TODO: Should refactored to suitable types 

function MainCard(_ref // ref
) {
  var _ref$border = _ref.border,
    border = _ref$border === void 0 ? true : _ref$border,
    boxShadow = _ref.boxShadow,
    children = _ref.children,
    _ref$content = _ref.content,
    content = _ref$content === void 0 ? true : _ref$content,
    _ref$contentSX = _ref.contentSX,
    contentSX = _ref$contentSX === void 0 ? {} : _ref$contentSX,
    darkTitle = _ref.darkTitle,
    _ref$elevation = _ref.elevation,
    elevation = _ref$elevation === void 0 ? 0 : _ref$elevation,
    secondary = _ref.secondary,
    shadow = _ref.shadow,
    _ref$sx = _ref.sx,
    sx = _ref$sx === void 0 ? {} : _ref$sx,
    title = _ref.title,
    others = _objectWithoutProperties(_ref, _excluded);
  var theme = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  boxShadow = theme.palette.mode === 'dark' ? boxShadow || true : boxShadow;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Card"], Object.assign({
    elevation: elevation
    // ref={ref}
  }, others, {
    sx: _objectSpread({
      border: border ? '1px solid' : 'none',
      borderRadius: 2,
      // borderColor: theme.palette.mode === 'dark' ? theme.palette.divider : theme.palette.grey.A800,
      // boxShadow: boxShadow && (!border || theme.palette.mode === 'dark') ? shadow || theme.customShadows.z1 : 'inherit',
      ':hover': {
        // boxShadow: boxShadow ? shadow || theme.customShadows.z1 : 'inherit'
      },
      '& pre': {
        m: 0,
        p: '16px !important',
        fontFamily: theme.typography.fontFamily,
        fontSize: '0.75rem'
      }
    }, sx),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }), !darkTitle && title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
    sx: headerSX,
    titleTypographyProps: {
      variant: 'subtitle1'
    },
    title: title,
    action: secondary,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 31
    }
  }), darkTitle && title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
    sx: headerSX,
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      variant: "h3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 63
      }
    }, title),
    action: secondary,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 30
    }
  }), content && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
    sx: contentSX,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  }, children), !content && children);
}
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(MainCard));

/***/ })

}]);
//# sourceMappingURL=1-bcdc6909b9307c5e40f8.chunk.js.map