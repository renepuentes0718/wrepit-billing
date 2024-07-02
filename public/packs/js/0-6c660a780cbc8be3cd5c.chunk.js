(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./app/javascript/components/authentication/ResetPassword.tsx":
/*!********************************************************************!*\
  !*** ./app/javascript/components/authentication/ResetPassword.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _shared_AuthWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/AuthWrapper */ "./app/javascript/components/shared/AuthWrapper.tsx");
/* harmony import */ var _forms_ResetPasswordForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forms/ResetPasswordForm */ "./app/javascript/components/forms/ResetPasswordForm.tsx");
var _jsxFileName = "/Users/admin/Desktop/project-ges/app/javascript/components/authentication/ResetPassword.tsx";




function Login() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_AuthWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
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
      lineNumber: 11,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "Reset Password"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms_ResetPasswordForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./app/javascript/components/forms/ResetPasswordForm.tsx":
/*!***************************************************************!*\
  !*** ./app/javascript/components/forms/ResetPasswordForm.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthRegister; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _ant_design_icons_EyeOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons/EyeOutlined */ "./node_modules/@ant-design/icons/EyeOutlined.js");
/* harmony import */ var _ant_design_icons_EyeOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_EyeOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons_EyeInvisibleOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons/EyeInvisibleOutlined */ "./node_modules/@ant-design/icons/EyeInvisibleOutlined.js");
/* harmony import */ var _ant_design_icons_EyeInvisibleOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_EyeInvisibleOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _utils_passwordStrength__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/passwordStrength */ "./app/javascript/components/utils/passwordStrength.ts");
var _jsxFileName = "/Users/admin/Desktop/project-ges/app/javascript/components/forms/ResetPasswordForm.tsx";
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function AuthRegister() {
  var _this = this;
  // const [level, setLevel] = useState()
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    showPassword = _React$useState2[0],
    setShowPassword = _React$useState2[1];
  var handleClickShowPassword = function handleClickShowPassword() {
    setShowPassword(!showPassword);
  };
  var handleMouseDownPassword = function handleMouseDownPassword(event) {
    event.preventDefault();
  };
  var changePassword = function changePassword(value) {
    var temp = Object(_utils_passwordStrength__WEBPACK_IMPORTED_MODULE_6__["strengthIndicator"])(value);
    // setLevel(strengthColor(temp))
  };
  var handleSubmit = function handleSubmit(event) {};
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    changePassword('');
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    onSubmit: handleSubmit,
    initialValues: {
      password: '',
      submit: null
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_1__["object"]().shape({
      password: yup__WEBPACK_IMPORTED_MODULE_1__["string"]().max(255).required('Password is required')
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, function (_ref) {
    var errors = _ref.errors,
      handleBlur = _ref.handleBlur,
      handleChange = _ref.handleChange,
      handleSubmit = _ref.handleSubmit,
      isSubmitting = _ref.isSubmitting,
      touched = _ref.touched,
      values = _ref.values;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("form", {
      noValidate: true,
      onSubmit: handleSubmit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      container: true,
      spacing: 3,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      item: true,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_5__["Stack"], {
      spacing: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_5__["InputLabel"], {
      htmlFor: "password-signup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_5__["OutlinedInput"], {
      fullWidth: true,
      error: Boolean(touched.password && errors.password),
      id: "password-signup",
      type: showPassword ? 'text' : 'password',
      value: values.password,
      name: "password",
      onBlur: handleBlur,
      onChange: function onChange(e) {
        handleChange(e);
        changePassword(e.target.value);
      },
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_5__["InputAdornment"], {
        position: "end",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
        "aria-label": "toggle password visibility",
        onClick: handleClickShowPassword,
        onMouseDown: handleMouseDownPassword,
        edge: "end",
        color: "secondary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 23
        }
      }, showPassword ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ant_design_icons_EyeOutlined__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 41
        }
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ant_design_icons_EyeInvisibleOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 59
        }
      }))),
      placeholder: "******",
      inputProps: {},
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    })), touched.password && errors.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_5__["FormHelperText"], {
      error: true,
      id: "helper-text-password-signup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
      fullWidth: true,
      sx: {
        mt: 2
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      container: true,
      spacing: 2,
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      item: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 19
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      item: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
      variant: "subtitle1",
      fontSize: "0.75rem",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 21
      }
    }))))), errors.submit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      item: true,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_5__["FormHelperText"], {
      error: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      item: true,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_5__["Button"], {
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
        lineNumber: 116,
        columnNumber: 15
      }
    }, "Reset Password"))));
  });
}

/***/ })

}]);
//# sourceMappingURL=0-6c660a780cbc8be3cd5c.chunk.js.map