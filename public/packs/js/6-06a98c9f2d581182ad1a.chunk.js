(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./app/javascript/components/authentication/ForgotPassword.tsx":
/*!*********************************************************************!*\
  !*** ./app/javascript/components/authentication/ForgotPassword.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _shared_AuthWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/AuthWrapper */ "./app/javascript/components/shared/AuthWrapper.tsx");
/* harmony import */ var _forms_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forms/ForgotPasswordForm */ "./app/javascript/components/forms/ForgotPasswordForm.tsx");
var _jsxFileName = "/Users/admin/Desktop/project-ges/app/javascript/components/authentication/ForgotPassword.tsx";





function Login() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_AuthWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    spacing: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Stack"], {
    direction: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    sx: {
      mb: {
        xs: -0.5,
        sm: 0.5
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "Forgot Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/register",
    variant: "body1",
    sx: {
      textDecoration: 'none'
    },
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "Don't have an account?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms_ForgotPasswordForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./app/javascript/components/forms/ForgotPasswordForm.tsx":
/*!****************************************************************!*\
  !*** ./app/javascript/components/forms/ForgotPasswordForm.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ForgotPasswordForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
var _jsxFileName = "/Users/admin/Desktop/project-ges/app/javascript/components/forms/ForgotPasswordForm.tsx";
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function ForgotPasswordForm(_ref) {
  var _this = this;
  var _ref$isDemo = _ref.isDemo,
    isDemo = _ref$isDemo === void 0 ? false : _ref$isDemo;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    checked = _React$useState2[0],
    setChecked = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    showPassword = _React$useState4[0],
    setShowPassword = _React$useState4[1];
  var handleClickShowPassword = function handleClickShowPassword() {
    setShowPassword(!showPassword);
  };
  var handleMouseDownPassword = function handleMouseDownPassword(event) {
    event.preventDefault();
  };
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    onSubmit: handleSubmit,
    initialValues: {
      email: '',
      submit: null
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_1__["object"]().shape({
      email: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().email('Must be a valid email').max(255).required('Email is required')
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, function (_ref2) {
    var errors = _ref2.errors,
      handleBlur = _ref2.handleBlur,
      handleChange = _ref2.handleChange,
      handleSubmit = _ref2.handleSubmit,
      isSubmitting = _ref2.isSubmitting,
      touched = _ref2.touched,
      values = _ref2.values;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
      noValidate: true,
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      container: true,
      spacing: 3,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_3__["Stack"], {
      spacing: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_3__["TextField"], {
      id: "email",
      label: "Email",
      type: "email",
      value: values.email,
      name: "email",
      onChange: handleChange,
      fullWidth: true,
      error: Boolean(touched.email && errors.email),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 19
      }
    })), touched.email && errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_3__["FormHelperText"], {
      error: true,
      id: "standard-weight-helper-text-email-login",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 19
      }
    })), errors.submit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_3__["FormHelperText"], {
      error: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 19
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
      item: true,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      disableElevation: true,
      disabled: isSubmitting,
      fullWidth: true,
      size: "large",
      type: "submit",
      variant: "contained",
      color: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }
    }, "Request Password change"))));
  }));
}

/***/ })

}]);
//# sourceMappingURL=6-06a98c9f2d581182ad1a.chunk.js.map