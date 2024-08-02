"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[495],{

/***/ 8495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ColorOverrides)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(5072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(7659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(5056);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(1113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/utils/page.colors.module.scss
var page_colors_module = __webpack_require__(8795);
;// CONCATENATED MODULE: ./src/styles/scss/utils/page.colors.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(page_colors_module/* default */.A, options);




       /* harmony default export */ const utils_page_colors_module = (page_colors_module/* default */.A && page_colors_module/* default */.A.locals ? page_colors_module/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/components/utils/page.colors.jsx

var __jsx = react.createElement;

{/* Page Colors */}
function ColorOverrides(_ref) {
  var colors = _ref.colors;
  return __jsx(react.Fragment, null, __jsx("data", {
    id: "page-specific-colors",
    className: utils_page_colors_module.colors
  }, __jsx(Dark, {
    colors: colors.dark
  }), __jsx(Unicorn, {
    colors: colors.unicorn
  }), __jsx(Light, {
    colors: colors.light
  }), __jsx("svg", {
    "aria-hidden": "true",
    focusable: "false"
  }, __jsx("linearGradient", {
    id: "fa-gradient",
    x1: "0%",
    y1: "0%",
    x2: "175%",
    y2: "175%"
  }, __jsx("stop", {
    offset: "0%",
    stopColor: "var(--neon-1-2)"
  }), __jsx("stop", {
    offset: "100%",
    stopColor: "var(--neon-1-1)"
  })))));
}
function Dark(_ref2) {
  var colors = _ref2.colors;
  // dark theme settings
  var children = Object.keys(colors).length;
  if (children !== 0) {
    return __jsx("style", null, "\n\t\t\t\t:root[data-theme=dark] {\n\t\t\t\t\t--mesh-color-1: ".concat(colors.secondaryDark, ";\n\t\t\t\t\t--mesh-color-2: ").concat(colors.secondaryLight, ";\n\t\t\t\t\t--mesh-color-3: ").concat(colors.primaryDark, ";\n\t\t\t\t\t--mesh-color-4: ").concat(colors.primaryLight, ";\n\t\t\t\t}\n\t\t\t\t"));
  }
}
function Unicorn(_ref3) {
  var colors = _ref3.colors;
  // unicorn theme settings
  var children = Object.keys(colors).length;
  if (children !== 0) {
    return __jsx("style", null, "\n\t\t\t\t:root[data-theme=unicorn] {\n\t\t\t\t\t--mesh-color-1: ".concat(colors.secondaryDark, ";\n\t\t\t\t\t--mesh-color-2: ").concat(colors.secondaryLight, ";\n\t\t\t\t\t--mesh-color-3: ").concat(colors.primaryDark, ";\n\t\t\t\t\t--mesh-color-4: ").concat(colors.primaryLight, ";\n\t\t\t\t}\n\t\t\t\t"));
  }
}
function Light(_ref4) {
  var colors = _ref4.colors;
  // light theme settings
  var children = Object.keys(colors).length;
  if (children !== 0) {
    return __jsx("style", null, "\n\t\t\t\t:root[data-theme=light] {\n\t\t\t\t\t--mesh-color-1: ".concat(colors.secondaryDark, ";\n\t\t\t\t\t--mesh-color-2: ").concat(colors.secondaryLight, ";\n\t\t\t\t\t--mesh-color-3: ").concat(colors.primaryDark, ";\n\t\t\t\t\t--mesh-color-4: ").concat(colors.primaryLight, ";\n\t\t\t\t}\n\t\t\t\t"));
  }
}

/***/ }),

/***/ 8795:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export colors */
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.X3UQNC5KJLjd8tgMFcHK{display:block;height:0;max-height:0;overflow:hidden}`, ""]);
// Exports
var colors = (/* unused pure expression or super */ null && (`X3UQNC5KJLjd8tgMFcHK`));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);