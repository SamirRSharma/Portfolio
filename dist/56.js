"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[56],{

/***/ 8056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Hero)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react-type-animation/dist/esm/index.es.js
var index_es = __webpack_require__(9519);
// EXTERNAL MODULE: ./src/components/structure/section.tsx + 1 modules
var section = __webpack_require__(341);
// EXTERNAL MODULE: ./src/components/structure/container.tsx + 1 modules
var container = __webpack_require__(983);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(9965);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/utils/spacing.tsx + 1 modules
var spacing = __webpack_require__(1261);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/sections/index/hero.module.scss
var hero_module = __webpack_require__(7908);
;// CONCATENATED MODULE: ./src/styles/scss/sections/index/hero.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(hero_module/* default */.Ay, options);




       /* harmony default export */ const index_hero_module = (hero_module/* default */.Ay && hero_module/* default */.Ay.locals ? hero_module/* default */.Ay.locals : undefined);

;// CONCATENATED MODULE: ./src/components/blocks/hero.bg/section-bg-color.tsx

var __jsx = react.createElement;

function sectionBgColor() {
  return __jsx("div", {
    className: "".concat(index_hero_module.heroBackground)
  }, __jsx("div", {
    className: "".concat(index_hero_module.barContainer, " noEvents")
  }, __jsx("div", {
    className: "".concat(index_hero_module.barGradient)
  })), __jsx("div", {
    className: "".concat(index_hero_module.radialContainer, " noEvents")
  }, __jsx("div", {
    className: "".concat(index_hero_module.radialGradient)
  })));
}
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/blocks/button.module.scss
var button_module = __webpack_require__(9321);
;// CONCATENATED MODULE: ./src/styles/scss/blocks/button.module.scss

      
      
      
      
      
      
      
      
      

var button_module_options = {};

button_module_options.styleTagTransform = (styleTagTransform_default());
button_module_options.setAttributes = (setAttributesWithoutAttributes_default());
button_module_options.insert = insertBySelector_default().bind(null, "head");
button_module_options.domAPI = (styleDomAPI_default());
button_module_options.insertStyleElement = (insertStyleElement_default());

var button_module_update = injectStylesIntoStyleTag_default()(button_module/* default */.Ay, button_module_options);




       /* harmony default export */ const blocks_button_module = (button_module/* default */.Ay && button_module/* default */.Ay.locals ? button_module/* default */.Ay.locals : undefined);

;// CONCATENATED MODULE: ./src/content/index/hero.json
const hero_namespaceObject = /*#__PURE__*/JSON.parse('{"Lv":{"ni":"const myName = () =>","_N":"Hey there!, my name is","eY":60,"AM":80,"iE":"h2","yB":1000,"Th":3000,"lX":12000},"wx":{"U":"Muhammad Fiaz.","d":"Passionate Full Stack Developer."},"FY":"From an early age, my fascination with programming and computers ignited a lifelong passion. Constantly learning and developing, I strive to make a profound impact through innovative solutions and visionary ideas, shaping the future with my unwavering commitment to technological advancement. ","Uo":{"z":{"DD":"Hire Me"},"R":{"DD":"LinkedIn"}}}');
;// CONCATENATED MODULE: ./src/components/sections/index/hero.jsx
var hero_jsx = react.createElement;










function Hero() {
  var _useState = (0,react.useState)('Initializing'),
    setTypingStatus = _useState[1];
  var _useState2 = (0,react.useState)(false),
    isHiremeTooltipVisible = _useState2[0],
    setIsHiremeTooltipVisible = _useState2[1];
  var _useState3 = (0,react.useState)(false),
    isYescatTooltipVisible = _useState3[0],
    setIsYescatTooltipVisible = _useState3[1];
  return hero_jsx(section/* default */.A, {
    classProp: "".concat(index_hero_module.section)
  }, hero_jsx(container/* default */.A, {
    spacing: 'VerticalXXXL'
  }, hero_jsx(index_es/* TypeAnimation */.d, {
    className: "".concat(index_hero_module.preHeader),
    sequence: [hero_namespaceObject.Lv.yB, function () {
      setTypingStatus('typing');
    }, hero_namespaceObject.Lv.ni, function () {
      setTypingStatus('typed');
    }, hero_namespaceObject.Lv.Th, function () {
      setTypingStatus('deleting');
    }, hero_namespaceObject.Lv._N, function () {
      setTypingStatus('deleted');
    }, hero_namespaceObject.Lv.lX],
    speed: hero_namespaceObject.Lv.eY,
    deletionSpeed: hero_namespaceObject.Lv.AM,
    wrapper: hero_namespaceObject.Lv.iE,
    repeat: Infinity
  }), hero_jsx("section", null, hero_jsx("h1", {
    className: index_hero_module.header
  }, hero_namespaceObject.wx.U), hero_jsx("h1", {
    className: "".concat(index_hero_module.header, " ").concat(index_hero_module.primaryDim)
  }, hero_namespaceObject.wx.d)), hero_jsx("section", null, hero_jsx("p", {
    className: "".concat(index_hero_module.primaryBright, " subtitle ").concat((0,spacing/* default */.A)(['verticalLrg']))
  }, hero_namespaceObject.FY)), hero_jsx("section", {
    style: {
      position: 'relative'
    }
  }, hero_jsx("button", {
    className: "button ".concat(blocks_button_module.primary),
    onClick: function onClick() {
      return window.location = 'mailto:contact@muhammadfiaz.com';
    },
    onMouseEnter: function onMouseEnter() {
      return setIsHiremeTooltipVisible(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHiremeTooltipVisible(false);
    }
  }, hero_namespaceObject.Uo.z.DD), isHiremeTooltipVisible && hero_jsx("div", {
    className: "".concat(index_hero_module.tooltipContent, " ").concat(index_hero_module.hireme_tooltip)
  }, hero_jsx((image_default()), {
    src: "/gif/hireme.gif",
    width: 100,
    height: 100,
    alt: "Yescat GIF"
  })), hero_jsx("button", {
    className: "button ".concat(blocks_button_module.secondary, " leaveSite"),
    onClick: function onClick() {
      return window.open('https://www.linkedin.com/in/muhammad-fiaz-', '_blank');
    },
    onMouseEnter: function onMouseEnter() {
      return setIsYescatTooltipVisible(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsYescatTooltipVisible(false);
    }
  }, hero_namespaceObject.Uo.R.DD), isYescatTooltipVisible && hero_jsx("div", {
    className: "".concat(index_hero_module.tooltipContent, " ").concat(index_hero_module.yescat_tooltip)
  }, hero_jsx((image_default()), {
    src: "/gif/yes.gif",
    width: 100,
    height: 100,
    alt: "GIF"
  })))), hero_jsx(sectionBgColor, {
    theme: "bg-color-1"
  }));
}

/***/ }),

/***/ 9321:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports primary, secondary */
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `button.Em0p4djvQcZFhXlBXoB2{background-color:var(--secondary);color:var(--background)}button.Em0p4djvQcZFhXlBXoB2:hover{background-color:var(--secondary-bright)}button.b2ww3fmM2R6soHmtfRIo{background-color:rgba(0,0,0,0);border:1px solid var(--primary-dark);color:var(--primary)}button.b2ww3fmM2R6soHmtfRIo:hover{color:var(--primary-bright);background-color:var(--primary-dark)}`, ""]);
// Exports
var primary = (/* unused pure expression or super */ null && (`Em0p4djvQcZFhXlBXoB2`));
var secondary = (/* unused pure expression or super */ null && (`b2ww3fmM2R6soHmtfRIo`));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7908:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports section, container, preHeader, tooltipContent, hireme_tooltip, yescat_tooltip, header, subheader, primaryDim, primaryBright, tempBright, gitBadges, heroBackground, radialContainer, radialGradient, fogWaveLR, fogWaveTB, fogPulse, fogRotate, starsFloating */
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ah4PBBEPkduIrT5o_Oum{border-bottom:1px solid var(--primary-dark);max-height:1440px;height:100vh;width:100%;justify-content:center}.ah4PBBEPkduIrT5o_Oum>.kpU0VM3DTb3REFc6qX12{height:fit-content}.ah4PBBEPkduIrT5o_Oum .u401y_ZbjJsHt6il4pko{color:var(--secondary);font-family:var(--font-accent);font-size:1.2rem;font-weight:400;margin:1rem 0}.ah4PBBEPkduIrT5o_Oum .T30xIg39I9i0CN3hVK54{position:absolute;top:-110px;transform:translateX(-50%);padding:10px;border-radius:5px;box-shadow:0 2px 4px rgba(0,0,0,.1);z-index:100;display:flex;flex-direction:column;align-items:center;overflow:hidden}.ah4PBBEPkduIrT5o_Oum .T30xIg39I9i0CN3hVK54 img{max-width:100%;height:auto;background:rgba(0,0,0,0)}.ah4PBBEPkduIrT5o_Oum .B549UdnBsAP_ZlyANs1Q{left:8%}.ah4PBBEPkduIrT5o_Oum .E9WZJ8rFnjIKTa9hqwyr{left:25%}.ah4PBBEPkduIrT5o_Oum .fgU9oiXxfq00inn4Zo6x{color:var(--primary-bright);font-family:var(--font-sans);font-size:5rem;margin:0}.ah4PBBEPkduIrT5o_Oum .xGFm5tUm5EwtgKkhNnKu{color:var(--primary-bright);font-family:var(--font-sans);font-size:4rem;margin:0}.ah4PBBEPkduIrT5o_Oum .bENspuHUCYSV9OihmVip{color:var(--primary-bright)}.ah4PBBEPkduIrT5o_Oum .T8o9UfNjoLmtbgbzzXGq{color:var(--primary-bright)}.ah4PBBEPkduIrT5o_Oum .SqqBbVs7Lw8CwTFYu6MU{font-size:.875rem;width:60%}.ah4PBBEPkduIrT5o_Oum .aYDH0FIKVgIndA7viDXU{position:relative;display:flex;gap:.5rem;flex-wrap:wrap;height:1rem}.ah4PBBEPkduIrT5o_Oum .aYDH0FIKVgIndA7viDXU img{height:16px;width:fit-content;border-radius:.25rem}@media screen and (max-width: 767px){.ah4PBBEPkduIrT5o_Oum .u401y_ZbjJsHt6il4pko{font-size:1rem}.ah4PBBEPkduIrT5o_Oum .fgU9oiXxfq00inn4Zo6x{font-size:2rem}.ah4PBBEPkduIrT5o_Oum .xGFm5tUm5EwtgKkhNnKu{font-size:2rem}.ah4PBBEPkduIrT5o_Oum .SqqBbVs7Lw8CwTFYu6MU{width:100%;padding-right:1rem}.ah4PBBEPkduIrT5o_Oum button{font-size:.875rem;padding:.75rem 2rem}}.K8jIRdEf_kxzudq9ixcd{--hero-gradient-bg-1: var(--neon-1-1);--hero-gradient-bg-2: var(--neon-1-2);--hero-gradient-bg-3: var(--neon-2-1);--hero-gradient-bg-4: var(--neon-2-2);position:absolute;pointer-events:none;top:0;right:0;bottom:0;left:0}.K8jIRdEf_kxzudq9ixcd .tLkgFTS1NNaQdBw4HIE9{position:absolute;width:100%;height:100%}.K8jIRdEf_kxzudq9ixcd .tLkgFTS1NNaQdBw4HIE9 .Brp2vzIz5hiNh4B4dgkJ{position:absolute;width:100%;left:unset;aspect-ratio:1/1;height:unset;bottom:-60%;filter:blur(100px);transform:translateZ(0);opacity:20%;background:radial-gradient(ellipse at center, var(--hero-gradient-bg-1) 0%, var(--hero-gradient-bg-2) 25%, var(--hero-gradient-bg-3) 50%, var(--hero-gradient-bg-4) 100%);z-index:-1;animation:vJV10jy094FI_MdXDjNO 10s linear infinite,JmcHYtrWep17KBpOMEho 15s linear infinite,nvaqTg6IKp0tvXS3yLEw 8s ease-in-out infinite,XNqvT_GivNRIiv3XRb_Y 20s linear infinite,RjmAY7hSAnuIbJB14XHW 20s linear infinite}@keyframes vJV10jy094FI_MdXDjNO{0%,100%{transform:translateY(0) translateX(0) scaleY(1);opacity:0}50%{transform:translateY(0) translateX(100%) scaleY(2);opacity:1}}@keyframes JmcHYtrWep17KBpOMEho{0%,100%{transform:translateY(0) translateX(0) scaleY(1);opacity:0}25%{transform:translateY(-100%) translateX(0) scaleY(2);opacity:1}50%{transform:translateY(100%) translateX(0) scaleY(2);opacity:1}75%{transform:translateY(0) translateX(0) scaleY(1);opacity:0}}@keyframes nvaqTg6IKp0tvXS3yLEw{0%,100%{transform:scale(1);opacity:0}50%{transform:scale(1.5);opacity:1}}@keyframes XNqvT_GivNRIiv3XRb_Y{0%,100%{transform:rotate(0deg)}50%{transform:rotate(180deg)}}@keyframes RjmAY7hSAnuIbJB14XHW{0%,100%{transform:translateY(0) translateX(0)}25%{transform:translateY(-50vh) translateX(50vw)}50%{transform:translateY(0) translateX(100vw)}75%{transform:translateY(50vh) translateX(50vw)}}@media(max-width: 768px){.K8jIRdEf_kxzudq9ixcd .tLkgFTS1NNaQdBw4HIE9 .Brp2vzIz5hiNh4B4dgkJ{bottom:-30%}}`, ""]);
// Exports
var section = (/* unused pure expression or super */ null && (`ah4PBBEPkduIrT5o_Oum`));
var container = (/* unused pure expression or super */ null && (`kpU0VM3DTb3REFc6qX12`));
var preHeader = (/* unused pure expression or super */ null && (`u401y_ZbjJsHt6il4pko`));
var tooltipContent = (/* unused pure expression or super */ null && (`T30xIg39I9i0CN3hVK54`));
var hireme_tooltip = (/* unused pure expression or super */ null && (`B549UdnBsAP_ZlyANs1Q`));
var yescat_tooltip = (/* unused pure expression or super */ null && (`E9WZJ8rFnjIKTa9hqwyr`));
var header = (/* unused pure expression or super */ null && (`fgU9oiXxfq00inn4Zo6x`));
var subheader = (/* unused pure expression or super */ null && (`xGFm5tUm5EwtgKkhNnKu`));
var primaryDim = (/* unused pure expression or super */ null && (`bENspuHUCYSV9OihmVip`));
var primaryBright = (/* unused pure expression or super */ null && (`T8o9UfNjoLmtbgbzzXGq`));
var tempBright = (/* unused pure expression or super */ null && (`SqqBbVs7Lw8CwTFYu6MU`));
var gitBadges = (/* unused pure expression or super */ null && (`aYDH0FIKVgIndA7viDXU`));
var heroBackground = (/* unused pure expression or super */ null && (`K8jIRdEf_kxzudq9ixcd`));
var radialContainer = (/* unused pure expression or super */ null && (`tLkgFTS1NNaQdBw4HIE9`));
var radialGradient = (/* unused pure expression or super */ null && (`Brp2vzIz5hiNh4B4dgkJ`));
var fogWaveLR = (/* unused pure expression or super */ null && (`vJV10jy094FI_MdXDjNO`));
var fogWaveTB = (/* unused pure expression or super */ null && (`JmcHYtrWep17KBpOMEho`));
var fogPulse = (/* unused pure expression or super */ null && (`nvaqTg6IKp0tvXS3yLEw`));
var fogRotate = (/* unused pure expression or super */ null && (`XNqvT_GivNRIiv3XRb_Y`));
var starsFloating = (/* unused pure expression or super */ null && (`RjmAY7hSAnuIbJB14XHW`));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);