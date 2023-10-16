"use strict";
(self["webpackChunksalecertificates"] = self["webpackChunksalecertificates"] || []).push([["src_pages_certificat_CurrentCertificatePage_jsx"],{

/***/ "./src/pages/certificat/CurrentCertificatePage.jsx":
/*!*********************************************************!*\
  !*** ./src/pages/certificat/CurrentCertificatePage.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currentCertificatePage.module.css */ "./src/pages/certificat/currentCertificatePage.module.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Preloader_Preloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Preloader/Preloader */ "./src/components/Preloader/Preloader.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var CurrentCertificatePage = function CurrentCertificatePage() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
    certificateId = _useParams.certificateId;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    certificate = _useState2[0],
    setCertificate = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isByeCertificate = _useState4[0],
    setIsByeCertificate = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    fetch('https://sycret.ru/service/api/api?MethodName=OSGetGoodList&ismob=0&ApiKey=011ba11bdcad4fa396660c2ec447ef14').then(function (res) {
      return res.text();
    }).then(function (data) {
      JSON.parse(data).data.map(function (el) {
        if (el.ID === certificateId) setCertificate(el);
      });
    });
  }, []);
  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({
      mode: 'all'
    }),
    register = _useForm.register,
    errors = _useForm.formState.errors,
    handleSubmit = _useForm.handleSubmit,
    reset = _useForm.reset;
  var buyCertificate = function buyCertificate(data) {
    console.log(JSON.stringify(data));
    fetch('https://sycret.ru/service/api/api?MethodName=OSSale&ApiKey=011ba11bdcad4fa396660c2ec447ef14', {
      method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(function (res) {
      return res.text();
    }).then(function (data) {
      return JSON.parse(data).resultdescription === 'OK' && setIsByeCertificate(true);
    });
    reset();
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: _currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].page,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
      className: _currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].back,
      to: '/',
      children: "\u041D\u0430\u0437\u0430\u0434"
    }), isByeCertificate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: _currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].payment,
      children: "\u041E\u043F\u043B\u0430\u0442\u0430..."
    }), certificate ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      hidden: isByeCertificate,
      className: _currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].wrapper,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
        className: _currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].name,
        children: certificate.NAME
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form", {
        className: _currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].form,
        onSubmit: handleSubmit(buyCertificate),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
          className: _currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].label,
          children: ["\u0424\u0418\u041E*:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", _objectSpread({
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435...",
            className: _currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].inp
          }, register('ClientName', {
            required: true
          })))]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          children: (errors === null || errors === void 0 ? void 0 : errors.ClientName) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: _currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].err,
            children: "\u0418\u043C\u044F \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
          className: _currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].label,
          children: ["\u0422\u0435\u043B\u0435\u0444\u043E\u043D:*", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((react_input_mask__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread({
            alwaysShowMask: false,
            mask: "+7 (999) 999-99-99",
            placeholder: "+7 (999) 999-99-99",
            className: _currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].inp
          }, register('Phone', {
            required: true,
            validate: {
              checkLength: function checkLength(value) {
                var number = "".concat(value).replace(/\D/g, '');
                return number.length === 11;
              }
            }
          })))]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          children: (errors === null || errors === void 0 ? void 0 : errors.Phone) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: _currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].err,
            children: 'Номер должен быть заполнен'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
          className: _currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].label,
          children: ["\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("textarea", _objectSpread({
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435...",
            className: _currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].inp
          }, register('MsgText')))]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("label", {
          className: _currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].label,
          children: ["\u041F\u043E\u0447\u0442\u0430*:", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", _objectSpread({
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435...",
            className: _currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].inp
          }, register('Email', {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Некорректная почта"
            }
          })))]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          children: (errors === null || errors === void 0 ? void 0 : errors.Email) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: _currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].err,
            children: (errors === null || errors === void 0 ? void 0 : errors.Email.message) || 'Почта должна быть заполнена'
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: _currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].btnWrapper,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
            placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435...",
            className: _currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_0__["default"].btn,
            type: "submit",
            value: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043E\u043F\u043B\u0430\u0442\u0435"
          })
        })]
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Preloader_Preloader__WEBPACK_IMPORTED_MODULE_3__.Preloader, {})]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentCertificatePage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/pages/certificat/currentCertificatePage.module.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/pages/certificat/currentCertificatePage.module.css ***!
  \**********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-pages-certificat-currentCertificatePage-module__wrapper {
    background: rgba(0,0,0,0.5);
    padding: 30px;
    border-radius: 20px;
}

.src-pages-certificat-currentCertificatePage-module__page {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 28px;
    color: #fff;
    margin: 0 auto;
}

.src-pages-certificat-currentCertificatePage-module__err {
    color: #ff0000;
}

.src-pages-certificat-currentCertificatePage-module__name {
    margin-bottom: 10px;
}

.src-pages-certificat-currentCertificatePage-module__inp {
    display: block;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 3px 6px;
    width: 400px;
}

label:before {
    margin-bottom: 10px;
    content: '';
    display: block;

}

.src-pages-certificat-currentCertificatePage-module__btnWrapper {
    width: 100%;
    display: flex;
}

.src-pages-certificat-currentCertificatePage-module__btn {
    margin: 10px auto 0;
}

.src-pages-certificat-currentCertificatePage-module__back {
    color: black;
    position: fixed;
    left: 50px;
    top: 50px;
}

.src-pages-certificat-currentCertificatePage-module__payment {
    color: red;
    font-size: 36px;
}

@media screen and (min-width: 780px) and (max-width: 1140px) {
    .src-pages-certificat-currentCertificatePage-module__page {
        font-size: 22px;
        width: 90%;
    }

    .src-pages-certificat-currentCertificatePage-module__wrapper {
        padding: 15px;
        border-radius: 12px;
    }
}

@media screen and (min-width: 340px) and (max-width: 780px) {
    .src-pages-certificat-currentCertificatePage-module__page {
        font-size: 16px;
        width: 100%;
    }

    .src-pages-certificat-currentCertificatePage-module__inp {
        display: block;
        border: 1px solid #fff;
        border-radius: 5px;
        padding: 1px 2px;
        width: 310px;
    }

    .src-pages-certificat-currentCertificatePage-module__wrapper {
        padding: 10px;
    }
}`, "",{"version":3,"sources":["webpack://./src/pages/certificat/currentCertificatePage.module.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,eAAe;IACf,WAAW;IACX,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,cAAc;;AAElB;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,UAAU;IACV,SAAS;AACb;;AAEA;IACI,UAAU;IACV,eAAe;AACnB;;AAEA;IACI;QACI,eAAe;QACf,UAAU;IACd;;IAEA;QACI,aAAa;QACb,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,eAAe;QACf,WAAW;IACf;;IAEA;QACI,cAAc;QACd,sBAAsB;QACtB,kBAAkB;QAClB,gBAAgB;QAChB,YAAY;IAChB;;IAEA;QACI,aAAa;IACjB;AACJ","sourcesContent":[".wrapper {\r\n    background: rgba(0,0,0,0.5);\r\n    padding: 30px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.page {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    font-size: 28px;\r\n    color: #fff;\r\n    margin: 0 auto;\r\n}\r\n\r\n.err {\r\n    color: #ff0000;\r\n}\r\n\r\n.name {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.inp {\r\n    display: block;\r\n    border: 1px solid #fff;\r\n    border-radius: 5px;\r\n    padding: 3px 6px;\r\n    width: 400px;\r\n}\r\n\r\nlabel:before {\r\n    margin-bottom: 10px;\r\n    content: '';\r\n    display: block;\r\n\r\n}\r\n\r\n.btnWrapper {\r\n    width: 100%;\r\n    display: flex;\r\n}\r\n\r\n.btn {\r\n    margin: 10px auto 0;\r\n}\r\n\r\n.back {\r\n    color: black;\r\n    position: fixed;\r\n    left: 50px;\r\n    top: 50px;\r\n}\r\n\r\n.payment {\r\n    color: red;\r\n    font-size: 36px;\r\n}\r\n\r\n@media screen and (min-width: 780px) and (max-width: 1140px) {\r\n    .page {\r\n        font-size: 22px;\r\n        width: 90%;\r\n    }\r\n\r\n    .wrapper {\r\n        padding: 15px;\r\n        border-radius: 12px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 340px) and (max-width: 780px) {\r\n    .page {\r\n        font-size: 16px;\r\n        width: 100%;\r\n    }\r\n\r\n    .inp {\r\n        display: block;\r\n        border: 1px solid #fff;\r\n        border-radius: 5px;\r\n        padding: 1px 2px;\r\n        width: 310px;\r\n    }\r\n\r\n    .wrapper {\r\n        padding: 10px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wrapper": `src-pages-certificat-currentCertificatePage-module__wrapper`,
	"page": `src-pages-certificat-currentCertificatePage-module__page`,
	"err": `src-pages-certificat-currentCertificatePage-module__err`,
	"name": `src-pages-certificat-currentCertificatePage-module__name`,
	"inp": `src-pages-certificat-currentCertificatePage-module__inp`,
	"btnWrapper": `src-pages-certificat-currentCertificatePage-module__btnWrapper`,
	"btn": `src-pages-certificat-currentCertificatePage-module__btn`,
	"back": `src-pages-certificat-currentCertificatePage-module__back`,
	"payment": `src-pages-certificat-currentCertificatePage-module__payment`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/certificat/currentCertificatePage.module.css":
/*!****************************************************************!*\
  !*** ./src/pages/certificat/currentCertificatePage.module.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./currentCertificatePage.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/pages/certificat/currentCertificatePage.module.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_currentCertificatePage_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX2NlcnRpZmljYXRfQ3VycmVudENlcnRpZmljYXRlUGFnZV9qc3guMDYzZTA1LmNodW5rLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ1g7QUFDTztBQUNUO0FBQ0M7QUFDc0I7QUFBQTtBQUFBO0FBQy9ELElBQU1ZLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBc0JBLENBQUEsRUFBUztFQUVqQyxJQUFBQyxVQUFBLEdBQXdCVCwyREFBUyxDQUFDLENBQUM7SUFBNUJVLGFBQWEsR0FBQUQsVUFBQSxDQUFiQyxhQUFhO0VBQ3BCLElBQUFDLFNBQUEsR0FBc0NiLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFjLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTdDRyxXQUFXLEdBQUFGLFVBQUE7SUFBRUcsY0FBYyxHQUFBSCxVQUFBO0VBQ2xDLElBQUFJLFVBQUEsR0FBZ0RsQiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBbUIsVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBeERFLGdCQUFnQixHQUFBRCxVQUFBO0lBQUVFLG1CQUFtQixHQUFBRixVQUFBO0VBRTVDcEIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1p1QixLQUFLLENBQUMsNEdBQTRHLENBQUMsQ0FDOUdDLElBQUksQ0FBQyxVQUFDQyxHQUFHO01BQUEsT0FBS0EsR0FBRyxDQUFDQyxJQUFJLENBQUMsQ0FBQztJQUFBLEVBQUMsQ0FDekJGLElBQUksQ0FBQyxVQUFBRyxJQUFJLEVBQUk7TUFDVkMsSUFBSSxDQUFDQyxLQUFLLENBQUNGLElBQUksQ0FBQyxDQUFDQSxJQUFJLENBQUNHLEdBQUcsQ0FBQyxVQUFDQyxFQUFFLEVBQUs7UUFDOUIsSUFBSUEsRUFBRSxDQUFDQyxFQUFFLEtBQUtuQixhQUFhLEVBQ3ZCSyxjQUFjLENBQUNhLEVBQUUsQ0FBQztNQUMxQixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDVixDQUFD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QiwrQkFBK0IsMkJBQTJCLHlCQUF5QixxQkFBcUIsS0FBSyxzQkFBc0IsNEJBQTRCLG9CQUFvQix1QkFBdUIsU0FBUyxxQkFBcUIsb0JBQW9CLHNCQUFzQixLQUFLLGNBQWMsNEJBQTRCLEtBQUssZUFBZSxxQkFBcUIsd0JBQXdCLG1CQUFtQixrQkFBa0IsS0FBSyxrQkFBa0IsbUJBQW1CLHdCQUF3QixLQUFLLHNFQUFzRSxlQUFlLDRCQUE0Qix1QkFBdUIsU0FBUyxzQkFBc0IsMEJBQTBCLGdDQUFnQyxTQUFTLEtBQUsscUVBQXFFLGVBQWUsNEJBQTRCLHdCQUF3QixTQUFTLGtCQUFrQiwyQkFBMkIsbUNBQW1DLCtCQUErQiw2QkFBNkIseUJBQXlCLFNBQVMsc0JBQXNCLDBCQUEwQixTQUFTLEtBQUssbUJBQW1CO0FBQzkyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1R3ZDLE1BQXFHO0FBQ3JHLE1BQTJGO0FBQzNGLE1BQWtHO0FBQ2xHLE1BQXFIO0FBQ3JILE1BQThHO0FBQzlHLE1BQThHO0FBQzlHLE1BQTZKO0FBQzdKO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0lBQU87Ozs7QUFJdUc7QUFDL0gsT0FBTyxpRUFBZSxzSUFBTyxJQUFJLHNJQUFPLFVBQVUsc0lBQU8sbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zYWxlY2VydGlmaWNhdGVzLy4vc3JjL3BhZ2VzL2NlcnRpZmljYXQvQ3VycmVudENlcnRpZmljYXRlUGFnZS5qc3giLCJ3ZWJwYWNrOi8vc2FsZWNlcnRpZmljYXRlcy8uL3NyYy9wYWdlcy9jZXJ0aWZpY2F0L2N1cnJlbnRDZXJ0aWZpY2F0ZVBhZ2UubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9zYWxlY2VydGlmaWNhdGVzLy4vc3JjL3BhZ2VzL2NlcnRpZmljYXQvY3VycmVudENlcnRpZmljYXRlUGFnZS5tb2R1bGUuY3NzP2FlYTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNscyBmcm9tICcuL2N1cnJlbnRDZXJ0aWZpY2F0ZVBhZ2UubW9kdWxlLmNzcydcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtMaW5rLCB1c2VQYXJhbXN9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7dXNlRm9ybX0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgSW5wdXRNYXNrIGZyb20gJ3JlYWN0LWlucHV0LW1hc2snO1xyXG5pbXBvcnQge1ByZWxvYWRlcn0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJlbG9hZGVyL1ByZWxvYWRlclwiO1xyXG5jb25zdCBDdXJyZW50Q2VydGlmaWNhdGVQYWdlID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHtjZXJ0aWZpY2F0ZUlkfSA9IHVzZVBhcmFtcygpO1xyXG4gICAgY29uc3QgW2NlcnRpZmljYXRlLCBzZXRDZXJ0aWZpY2F0ZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtpc0J5ZUNlcnRpZmljYXRlLCBzZXRJc0J5ZUNlcnRpZmljYXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKCdodHRwczovL3N5Y3JldC5ydS9zZXJ2aWNlL2FwaS9hcGk/TWV0aG9kTmFtZT1PU0dldEdvb2RMaXN0JmlzbW9iPTAmQXBpS2V5PTAxMWJhMTFiZGNhZDRmYTM5NjY2MGMyZWM0NDdlZjE0JylcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLnRleHQoKSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBKU09OLnBhcnNlKGRhdGEpLmRhdGEubWFwKChlbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbC5JRCA9PT0gY2VydGlmaWNhdGVJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2VydGlmaWNhdGUoZWwpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHJlZ2lzdGVyLFxyXG4gICAgICAgIGZvcm1TdGF0ZToge1xyXG4gICAgICAgICAgICBlcnJvcnMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgcmVzZXRcclxuICAgIH0gPSB1c2VGb3JtKHtcclxuICAgICAgICBtb2RlOiAnYWxsJyxcclxuXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGJ1eUNlcnRpZmljYXRlID0gKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuICAgICAgICBmZXRjaCgnaHR0cHM6Ly9zeWNyZXQucnUvc2VydmljZS9hcGkvYXBpP01ldGhvZE5hbWU9T1NTYWxlJkFwaUtleT0wMTFiYTExYmRjYWQ0ZmEzOTY2NjBjMmVjNDQ3ZWYxNCcsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGJvZHk6IGRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gSlNPTi5wYXJzZShkYXRhKS5yZXN1bHRkZXNjcmlwdGlvbiA9PT0gJ09LJyAmJiBzZXRJc0J5ZUNlcnRpZmljYXRlKHRydWUpKVxyXG4gICAgICAgIHJlc2V0KClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHMucGFnZX0+XHJcbiAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17Y2xzLmJhY2t9IHRvPXsnLyd9PtCd0LDQt9Cw0LQ8L0xpbms+XHJcbiAgICAgICAgICAgIHtpc0J5ZUNlcnRpZmljYXRlICYmIDxkaXYgY2xhc3NOYW1lPXtjbHMucGF5bWVudH0+0J7Qv9C70LDRgtCwLi4uPC9kaXY+fVxyXG4gICAgICAgICAgICB7Y2VydGlmaWNhdGVcclxuICAgICAgICAgICAgICAgID8gPGRpdiBoaWRkZW49e2lzQnllQ2VydGlmaWNhdGV9IGNsYXNzTmFtZT17Y2xzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Nscy5uYW1lfT57Y2VydGlmaWNhdGUuTkFNRX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xzLmZvcm19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoYnV5Q2VydGlmaWNhdGUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y2xzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCk0JjQnio6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIHBsYWNlaG9sZGVyPSfQktCy0LXQtNC40YLQtS4uLicgY2xhc3NOYW1lPXtjbHMuaW5wfSB7Li4ucmVnaXN0ZXIoJ0NsaWVudE5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57ZXJyb3JzPy5DbGllbnROYW1lICYmIDxkaXYgY2xhc3NOYW1lPXtjbHMuZXJyfT7QmNC80Y8g0LTQvtC70LbQvdC+INCx0YvRgtGMINC30LDQv9C+0LvQvdC10L3QvjwvZGl2Pn08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2Nscy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQotC10LvQtdGE0L7QvToqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRNYXNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx3YXlzU2hvd01hc2s9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc2s9Jys3ICg5OTkpIDk5OS05OS05OSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nKzcgKDk5OSkgOTk5LTk5LTk5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzLmlucH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoJ1Bob25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrTGVuZ3RoOiAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bWJlciA9IGAke3ZhbHVlfWAucmVwbGFjZSgvXFxEL2csICcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudW1iZXIubGVuZ3RoPT09MTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXRNYXNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PnsoZXJyb3JzPy5QaG9uZSkgJiYgPGRpdiBjbGFzc05hbWU9e2Nscy5lcnJ9Pnsn0J3QvtC80LXRgCDQtNC+0LvQttC10L0g0LHRi9GC0Ywg0LfQsNC/0L7Qu9C90LXQvSd9PC9kaXY+fTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y2xzLmxhYmVsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCh0L7QvtCx0YnQtdC90LjQtTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj0n0JLQstC10LTQuNGC0LUuLi4nIGNsYXNzTmFtZT17Y2xzLmlucH0gey4uLnJlZ2lzdGVyKCdNc2dUZXh0Jyl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2Nscy5sYWJlbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9C+0YfRgtCwKjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj0n0JLQstC10LTQuNGC0LUuLi4nIGNsYXNzTmFtZT17Y2xzLmlucH0gey4uLnJlZ2lzdGVyKCdFbWFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLH0kL2ksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcItCd0LXQutC+0YDRgNC10LrRgtC90LDRjyDQv9C+0YfRgtCwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e2Vycm9ycz8uRW1haWwgJiYgPGRpdiBjbGFzc05hbWU9e2Nscy5lcnJ9PntlcnJvcnM/LkVtYWlsLm1lc3NhZ2UgfHwgJ9Cf0L7Rh9GC0LAg0LTQvtC70LbQvdCwINCx0YvRgtGMINC30LDQv9C+0LvQvdC10L3QsCd9PC9kaXY+fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzLmJ0bldyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPSfQktCy0LXQtNC40YLQtS4uLicgY2xhc3NOYW1lPXtjbHMuYnRufSB0eXBlPSdzdWJtaXQnIHZhbHVlPSfQn9C10YDQtdC50YLQuCDQuiDQvtC/0LvQsNGC0LUnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgOiA8UHJlbG9hZGVyLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1cnJlbnRDZXJ0aWZpY2F0ZVBhZ2U7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtcGFnZXMtY2VydGlmaWNhdC1jdXJyZW50Q2VydGlmaWNhdGVQYWdlLW1vZHVsZV9fd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLnNyYy1wYWdlcy1jZXJ0aWZpY2F0LWN1cnJlbnRDZXJ0aWZpY2F0ZVBhZ2UtbW9kdWxlX19wYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uc3JjLXBhZ2VzLWNlcnRpZmljYXQtY3VycmVudENlcnRpZmljYXRlUGFnZS1tb2R1bGVfX2VyciB7XHJcbiAgICBjb2xvcjogI2ZmMDAwMDtcclxufVxyXG5cclxuLnNyYy1wYWdlcy1jZXJ0aWZpY2F0LWN1cnJlbnRDZXJ0aWZpY2F0ZVBhZ2UtbW9kdWxlX19uYW1lIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5zcmMtcGFnZXMtY2VydGlmaWNhdC1jdXJyZW50Q2VydGlmaWNhdGVQYWdlLW1vZHVsZV9faW5wIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDNweCA2cHg7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbmxhYmVsOmJlZm9yZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbn1cclxuXHJcbi5zcmMtcGFnZXMtY2VydGlmaWNhdC1jdXJyZW50Q2VydGlmaWNhdGVQYWdlLW1vZHVsZV9fYnRuV3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5zcmMtcGFnZXMtY2VydGlmaWNhdC1jdXJyZW50Q2VydGlmaWNhdGVQYWdlLW1vZHVsZV9fYnRuIHtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvIDA7XHJcbn1cclxuXHJcbi5zcmMtcGFnZXMtY2VydGlmaWNhdC1jdXJyZW50Q2VydGlmaWNhdGVQYWdlLW1vZHVsZV9fYmFjayB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiA1MHB4O1xyXG4gICAgdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uc3JjLXBhZ2VzLWNlcnRpZmljYXQtY3VycmVudENlcnRpZmljYXRlUGFnZS1tb2R1bGVfX3BheW1lbnQge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzgwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTQwcHgpIHtcclxuICAgIC5zcmMtcGFnZXMtY2VydGlmaWNhdC1jdXJyZW50Q2VydGlmaWNhdGVQYWdlLW1vZHVsZV9fcGFnZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNyYy1wYWdlcy1jZXJ0aWZpY2F0LWN1cnJlbnRDZXJ0aWZpY2F0ZVBhZ2UtbW9kdWxlX193cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM0MHB4KSBhbmQgKG1heC13aWR0aDogNzgwcHgpIHtcclxuICAgIC5zcmMtcGFnZXMtY2VydGlmaWNhdC1jdXJyZW50Q2VydGlmaWNhdGVQYWdlLW1vZHVsZV9fcGFnZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zcmMtcGFnZXMtY2VydGlmaWNhdC1jdXJyZW50Q2VydGlmaWNhdGVQYWdlLW1vZHVsZV9faW5wIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAxcHggMnB4O1xyXG4gICAgICAgIHdpZHRoOiAzMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3JjLXBhZ2VzLWNlcnRpZmljYXQtY3VycmVudENlcnRpZmljYXRlUGFnZS1tb2R1bGVfX3dyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYWdlcy9jZXJ0aWZpY2F0L2N1cnJlbnRDZXJ0aWZpY2F0ZVBhZ2UubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxjQUFjOztBQUVsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxjQUFjO1FBQ2Qsc0JBQXNCO1FBQ3RCLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud3JhcHBlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2Uge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5lcnIge1xcclxcbiAgICBjb2xvcjogI2ZmMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgcGFkZGluZzogM3B4IDZweDtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbDpiZWZvcmUge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5idG5XcmFwcGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgICBtYXJnaW46IDEwcHggYXV0byAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFjayB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBsZWZ0OiA1MHB4O1xcclxcbiAgICB0b3A6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5wYXltZW50IHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3ODBweCkgYW5kIChtYXgtd2lkdGg6IDExNDBweCkge1xcclxcbiAgICAucGFnZSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgICAgICB3aWR0aDogOTAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC53cmFwcGVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM0MHB4KSBhbmQgKG1heC13aWR0aDogNzgwcHgpIHtcXHJcXG4gICAgLnBhZ2Uge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmlucCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcHggMnB4O1xcclxcbiAgICAgICAgd2lkdGg6IDMxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC53cmFwcGVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwid3JhcHBlclwiOiBgc3JjLXBhZ2VzLWNlcnRpZmljYXQtY3VycmVudENlcnRpZmljYXRlUGFnZS1tb2R1bGVfX3dyYXBwZXJgLFxuXHRcInBhZ2VcIjogYHNyYy1wYWdlcy1jZXJ0aWZpY2F0LWN1cnJlbnRDZXJ0aWZpY2F0ZVBhZ2UtbW9kdWxlX19wYWdlYCxcblx0XCJlcnJcIjogYHNyYy1wYWdlcy1jZXJ0aWZpY2F0LWN1cnJlbnRDZXJ0aWZpY2F0ZVBhZ2UtbW9kdWxlX19lcnJgLFxuXHRcIm5hbWVcIjogYHNyYy1wYWdlcy1jZXJ0aWZpY2F0LWN1cnJlbnRDZXJ0aWZpY2F0ZVBhZ2UtbW9kdWxlX19uYW1lYCxcblx0XCJpbnBcIjogYHNyYy1wYWdlcy1jZXJ0aWZpY2F0LWN1cnJlbnRDZXJ0aWZpY2F0ZVBhZ2UtbW9kdWxlX19pbnBgLFxuXHRcImJ0bldyYXBwZXJcIjogYHNyYy1wYWdlcy1jZXJ0aWZpY2F0LWN1cnJlbnRDZXJ0aWZpY2F0ZVBhZ2UtbW9kdWxlX19idG5XcmFwcGVyYCxcblx0XCJidG5cIjogYHNyYy1wYWdlcy1jZXJ0aWZpY2F0LWN1cnJlbnRDZXJ0aWZpY2F0ZVBhZ2UtbW9kdWxlX19idG5gLFxuXHRcImJhY2tcIjogYHNyYy1wYWdlcy1jZXJ0aWZpY2F0LWN1cnJlbnRDZXJ0aWZpY2F0ZVBhZ2UtbW9kdWxlX19iYWNrYCxcblx0XCJwYXltZW50XCI6IGBzcmMtcGFnZXMtY2VydGlmaWNhdC1jdXJyZW50Q2VydGlmaWNhdGVQYWdlLW1vZHVsZV9fcGF5bWVudGBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vY3VycmVudENlcnRpZmljYXRlUGFnZS5tb2R1bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0udXNlWzFdIS4vY3VycmVudENlcnRpZmljYXRlUGFnZS5tb2R1bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbImNscyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsInVzZVBhcmFtcyIsInVzZUZvcm0iLCJJbnB1dE1hc2siLCJQcmVsb2FkZXIiLCJqc3giLCJfanN4IiwianN4cyIsIl9qc3hzIiwiQ3VycmVudENlcnRpZmljYXRlUGFnZSIsIl91c2VQYXJhbXMiLCJjZXJ0aWZpY2F0ZUlkIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiY2VydGlmaWNhdGUiLCJzZXRDZXJ0aWZpY2F0ZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiaXNCeWVDZXJ0aWZpY2F0ZSIsInNldElzQnllQ2VydGlmaWNhdGUiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsIm1hcCIsImVsIiwiSUQiLCJfdXNlRm9ybSIsIm1vZGUiLCJyZWdpc3RlciIsImVycm9ycyIsImZvcm1TdGF0ZSIsImhhbmRsZVN1Ym1pdCIsInJlc2V0IiwiYnV5Q2VydGlmaWNhdGUiLCJjb25zb2xlIiwibG9nIiwic3RyaW5naWZ5IiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJyZXN1bHRkZXNjcmlwdGlvbiIsImNsYXNzTmFtZSIsInBhZ2UiLCJjaGlsZHJlbiIsImJhY2siLCJ0byIsInBheW1lbnQiLCJoaWRkZW4iLCJ3cmFwcGVyIiwibmFtZSIsIk5BTUUiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsIl9vYmplY3RTcHJlYWQiLCJwbGFjZWhvbGRlciIsImlucCIsInJlcXVpcmVkIiwiQ2xpZW50TmFtZSIsImVyciIsImFsd2F5c1Nob3dNYXNrIiwibWFzayIsInZhbGlkYXRlIiwiY2hlY2tMZW5ndGgiLCJ2YWx1ZSIsIm51bWJlciIsImNvbmNhdCIsInJlcGxhY2UiLCJsZW5ndGgiLCJQaG9uZSIsInBhdHRlcm4iLCJtZXNzYWdlIiwiRW1haWwiLCJidG5XcmFwcGVyIiwiYnRuIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=