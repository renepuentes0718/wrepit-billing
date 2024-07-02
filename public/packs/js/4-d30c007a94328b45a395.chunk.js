(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./app/javascript/components/authentication/Register.tsx":
/*!***************************************************************!*\
  !*** ./app/javascript/components/authentication/Register.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Register; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _shared_AuthWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/AuthWrapper */ "./app/javascript/components/shared/AuthWrapper.tsx");
/* harmony import */ var _forms_RegisterForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forms/RegisterForm */ "./app/javascript/components/forms/RegisterForm.tsx");
var _jsxFileName = "/Users/admin/Desktop/project-ges/app/javascript/components/authentication/Register.tsx";





function Register() {
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
  }, "Sign up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/login",
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
  }, "Already have an account?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    xs: 12,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_forms_RegisterForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./app/javascript/components/forms/RegisterForm.tsx":
/*!**********************************************************!*\
  !*** ./app/javascript/components/forms/RegisterForm.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthRegister; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _ant_design_icons_EyeOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons/EyeOutlined */ "./node_modules/@ant-design/icons/EyeOutlined.js");
/* harmony import */ var _ant_design_icons_EyeOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_EyeOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons_EyeInvisibleOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons/EyeInvisibleOutlined */ "./node_modules/@ant-design/icons/EyeInvisibleOutlined.js");
/* harmony import */ var _ant_design_icons_EyeInvisibleOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_EyeInvisibleOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _utils_passwordStrength__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/passwordStrength */ "./app/javascript/components/utils/passwordStrength.ts");
var _jsxFileName = "/Users/admin/Desktop/project-ges/app/javascript/components/forms/RegisterForm.tsx";
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
    var temp = Object(_utils_passwordStrength__WEBPACK_IMPORTED_MODULE_7__["strengthIndicator"])(value);
    // setLevel(strengthColor(temp))
  };
  var handleSubmit = function handleSubmit(event) {};
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    changePassword('');
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    onSubmit: handleSubmit,
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      submit: null
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
      firstname: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().max(255).required('First Name is required'),
      lastname: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().max(255).required('Last Name is required'),
      email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().email('Must be a valid email').max(255).required('Email is required'),
      password: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().max(255).required('Password is required')
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
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
        lineNumber: 63,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      container: true,
      spacing: 3,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      item: true,
      xs: 12,
      md: 6,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["Stack"], {
      spacing: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["InputLabel"], {
      htmlFor: "firstname",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 19
      }
    }, "First Name*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["OutlinedInput"], {
      id: "firstname",
      type: "firstname",
      value: values.firstname,
      name: "firstname",
      onBlur: handleBlur,
      onChange: handleChange,
      placeholder: "Addo",
      fullWidth: true,
      error: Boolean(touched.firstname && errors.firstname),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 19
      }
    })), touched.firstname && errors.firstname && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["FormHelperText"], {
      error: true,
      id: "helper-text-firstname-signup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 19
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      item: true,
      xs: 12,
      md: 6,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["Stack"], {
      spacing: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["InputLabel"], {
      htmlFor: "lastname",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 19
      }
    }, "Last Name*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["OutlinedInput"], {
      fullWidth: true,
      error: Boolean(touched.lastname && errors.lastname),
      id: "lastname",
      type: "lastname",
      value: values.lastname,
      name: "lastname",
      onBlur: handleBlur,
      onChange: handleChange,
      placeholder: "Forison",
      inputProps: {},
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 19
      }
    })), touched.lastname && errors.lastname && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["FormHelperText"], {
      error: true,
      id: "helper-text-lastname-signup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 19
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      item: true,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["Stack"], {
      spacing: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["InputLabel"], {
      htmlFor: "email",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 19
      }
    }, "Email Address*"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["OutlinedInput"], {
      fullWidth: true,
      error: Boolean(touched.email && errors.email),
      id: "email",
      type: "email",
      value: values.email,
      name: "email",
      onBlur: handleBlur,
      onChange: handleChange,
      placeholder: "addo@yahoo.com",
      inputProps: {},
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 19
      }
    })), touched.email && errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["FormHelperText"], {
      error: true,
      id: "helper-text-email-signup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 19
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      item: true,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["Stack"], {
      spacing: 1,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["InputLabel"], {
      htmlFor: "password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 19
      }
    }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["OutlinedInput"], {
      fullWidth: true,
      error: Boolean(touched.password && errors.password),
      id: "password",
      type: showPassword ? 'text' : 'password',
      value: values.password,
      name: "password",
      onBlur: handleBlur,
      onChange: function onChange(e) {
        handleChange(e);
        changePassword(e.target.value);
      },
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["InputAdornment"], {
        position: "end",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
        "aria-label": "toggle password visibility",
        onClick: handleClickShowPassword,
        onMouseDown: handleMouseDownPassword,
        edge: "end",
        color: "secondary",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 25
        }
      }, showPassword ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ant_design_icons_EyeOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 43
        }
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ant_design_icons_EyeInvisibleOutlined__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 61
        }
      }))),
      placeholder: "******",
      inputProps: {},
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 19
      }
    })), touched.password && errors.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["FormHelperText"], {
      error: true,
      id: "helper-text-password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 19
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["FormControl"], {
      fullWidth: true,
      sx: {
        mt: 2
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      container: true,
      spacing: 2,
      alignItems: "center",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      item: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      item: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      variant: "subtitle1",
      fontSize: "0.75rem",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 23
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      item: true,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      variant: "body2",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 17
      }
    }, "By Signing up, you agree to our ", '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["Link"], {
      variant: "subtitle2",
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
      to: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 19
      }
    }, "Terms of Service"), ' ', " and ", '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["Link"], {
      variant: "subtitle2",
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"],
      to: "#",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 19
      }
    }, "Privacy Policy"))), errors.submit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      item: true,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["FormHelperText"], {
      error: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 19
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      item: true,
      xs: 12,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_material__WEBPACK_IMPORTED_MODULE_6__["Button"], {
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
        lineNumber: 200,
        columnNumber: 17
      }
    }, "Create Account"))));
  }));
}

/***/ }),

/***/ "./app/javascript/components/utils/passwordStrength.ts":
/*!*************************************************************!*\
  !*** ./app/javascript/components/utils/passwordStrength.ts ***!
  \*************************************************************/
/*! exports provided: strengthColor, strengthIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strengthColor", function() { return strengthColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strengthIndicator", function() { return strengthIndicator; });
/**
 * Password validator for login pages
 */

// has number
var hasNumber = function hasNumber(character) {
  return new RegExp(/[0-9]/).test(character);
};

// has mix of small and capitals
var hasMixed = function hasMixed(character) {
  return new RegExp(/[a-z]/).test(character) && new RegExp(/[A-Z]/).test(character);
};

// has special chars
var hasSpecial = function hasSpecial(character) {
  return new RegExp(/[!#@$%^&*)(+=._-]/).test(character);
};

// set color based on password strength
var strengthColor = function strengthColor(count) {
  if (count < 2) return {
    label: 'Poor',
    color: 'error.main'
  };
  if (count < 3) return {
    label: 'Weak',
    color: 'warning.main'
  };
  if (count < 4) return {
    label: 'Normal',
    color: 'warning.dark'
  };
  if (count < 5) return {
    label: 'Good',
    color: 'success.main'
  };
  if (count < 6) return {
    label: 'Strong',
    color: 'success.dark'
  };
  return {
    label: 'Poor',
    color: 'error.main'
  };
};

// password strength indicator
var strengthIndicator = function strengthIndicator(character) {
  var strengths = 0;
  if (character.length > 5) strengths += 1;
  if (character.length > 7) strengths += 1;
  if (hasNumber(character)) strengths += 1;
  if (hasSpecial(character)) strengths += 1;
  if (hasMixed(character)) strengths += 1;
  return strengths;
};

/***/ })

}]);
//# sourceMappingURL=4-d30c007a94328b45a395.chunk.js.map