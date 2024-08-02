"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[713],{

/***/ 9928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ BadgesBlock)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _utils_icon_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2987);
/* harmony import */ var _utils_badge_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6983);
/* harmony import */ var _styles_scss_blocks_badges_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7275);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement;



function BadgesBlock(_ref) {
  var title = _ref.title,
    copy = _ref.copy,
    list = _ref.list,
    fullContainer = _ref.fullContainer,
    block = _ref.block,
    icon = _ref.icon,
    invertedColor = _ref.invertedColor,
    headerIcon = _ref.headerIcon,
    containerClass = _ref.containerClass;
  return __jsx("div", {
    className: "".concat(_styles_scss_blocks_badges_module_scss__WEBPACK_IMPORTED_MODULE_3__/* ["default"].badgeBlockContainer */ .Ay.badgeBlockContainer, " ").concat(containerClass)
  }, __jsx("span", {
    className: headerIcon
  }, __jsx(_utils_icon_tsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    icon: ['fat', icon]
  })), __jsx("h3", null, title), __jsx(Copy, {
    copy: copy
  }), __jsx(_utils_badge_list__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    list: list,
    block: block,
    invertedColor: invertedColor,
    fullContainer: fullContainer
  }));
}
function Copy(_ref2) {
  var copy = _ref2.copy;
  if (copy) return __jsx("p", null, copy);
}

/***/ }),

/***/ 2713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Career)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./src/components/utils/badge.list.jsx
var badge_list = __webpack_require__(6983);
// EXTERNAL MODULE: ./src/components/structure/section.tsx + 1 modules
var section = __webpack_require__(341);
// EXTERNAL MODULE: ./src/components/structure/container.tsx + 1 modules
var container = __webpack_require__(983);
// EXTERNAL MODULE: ./src/components/blocks/section.title.tsx
var section_title = __webpack_require__(9404);
// EXTERNAL MODULE: ./src/styles/scss/sections/index/career.module.scss
var career_module = __webpack_require__(9391);
;// CONCATENATED MODULE: ./src/components/sections/index/optional/education.tsx

var __jsx = react.createElement;
// Section structure



// Section general blocks


// Career scss

function Education() {
  return __jsx(section/* default */.A, {
    classProp: "".concat(career_module/* default.section */.Ay.section, " borderBottom")
  }, __jsx(container/* default */.A, {
    spacing: ['verticalXXXLrg']
  }, __jsx(section_title/* default */.A, {
    title: "Education",
    preTitle: "Formal",
    subTitle: "I am currently studying computer science at the Velammal college of engineering and technology."
  }), __jsx("section", {
    className: career_module/* default.area */.Ay.area
  }, __jsx("article", {
    className: career_module/* default.company */.Ay.company
  }, __jsx("div", {
    className: career_module/* default.companyContent */.Ay.companyContent
  }, __jsx("span", {
    className: career_module/* default */.Ay.companyHeader
  }, __jsx("h3", null, "Velammal College of Engineering and Technology"), __jsx("h5", null, "Madurai, Tamil Nadu")), __jsx("p", null, "I am currently pursuing my Bachelors degree in Computer Science and Engineering at Velammal College of Engineering and Technology. This four-year program offers a comprehensive curriculum that covers various aspects of computer science and its applications.")), __jsx("div", {
    className: career_module/* default */.Ay.companyAlt
  })))));
}
;// CONCATENATED MODULE: ./src/components/sections/index/optional/career.tsx

var career_jsx = react.createElement;
// Core packages


// Section structure



// Section general blocks


// Career scss


function Career() {
  return career_jsx(section/* default */.A, {
    classProp: "".concat(career_module/* default.section */.Ay.section, " borderBottom")
  }, career_jsx(container/* default */.A, {
    spacing: ['verticalXXXLrg']
  }, career_jsx(section_title/* default */.A, {
    title: "Experience",
    preTitle: "Career",
    subTitle: "I am a Full Stack Developer, currently working in the project development field. My primary goal is to enhance my skills and expand my knowledge to gain valuable experience in complex project development. I am dedicated to continuously improving and staying updated with the latest advancements in the industry."
  }), career_jsx("section", {
    className: career_module/* default.area */.Ay.area
  }, career_jsx("div", {
    className: career_module/* default.position */.Ay.position
  }, career_jsx("div", {
    className: career_module/* default.companyContent */.Ay.companyContent
  }, career_jsx("span", {
    className: career_module/* default */.Ay.companyHeader
  }, career_jsx("h3", null, "Open Source Contributor & Full Stack Developer"), career_jsx("h4", null, "Permanent Full Time \xB7 Present")), career_jsx("p", null, "As a Full Stack Developer, my current focus lies in the field of complex project development. I am committed to continuously enhancing my skills and expanding my knowledge to gain valuable experience in this domain. By actively staying updated with the latest advancements and trends in the industry, I ensure that I am equipped with the necessary tools and techniques to tackle challenging projects. My primary goal is to contribute effectively to the development of sophisticated applications, leveraging my expertise in both front-end and back-end technologies. Through my dedication to continuous improvement, I strive to deliver high-quality solutions that meet the evolving needs of the industry.")), career_jsx("div", {
    className: career_module/* default */.Ay.companyAlt
  }), career_jsx(badge_list/* default */.A, {
    list: fullStack,
    block: "stack",
    fullContainer: "fullContainer",
    color: undefined
  })))), career_jsx(Education, null));
}
var fullStack = [{
  key: 'javascript',
  name: 'JavaScript',
  type: 'devicon'
}, {
  key: 'nodejs',
  name: 'NodeJS',
  type: 'devicon'
}, {
  key: 'react',
  name: 'React',
  type: 'devicon'
}, {
  key: 'nextjs',
  name: 'NextJS',
  type: 'devicon'
}, {
  key: 'php',
  name: 'PHP',
  type: 'devicon'
}, {
  key: 'wordpress',
  name: 'WordPress',
  type: 'devicon'
}, {
  key: 'html5',
  name: 'HTML5',
  type: 'devicon'
}, {
  key: 'css3',
  name: 'CSS3',
  type: 'devicon'
}, {
  key: 'sass',
  name: 'SASS',
  type: 'devicon'
}, {
  key: 'git',
  name: 'Git',
  type: 'devicon'
}, {
  key: 'mysql',
  name: 'MySQL',
  type: 'devicon'
}, {
  key: 'mongodb',
  name: 'MongoDB',
  type: 'devicon'
}, {
  key: 'python',
  name: 'Python',
  type: 'devicon'
}, {
  key: 'java',
  name: 'Java',
  type: 'devicon'
}, {
  key: 'csharp',
  name: 'C#',
  type: 'devicon'
}, {
  key: 'django',
  name: 'Django',
  type: 'devicon'
}, {
  key: 'typescript',
  name: 'TypeScript',
  type: 'devicon'
}, {
  key: 'c',
  name: 'C',
  type: 'devicon'
}, {
  key: 'cpp',
  name: 'C++',
  type: 'devicon'
}, {
  key: 'ajax',
  name: 'ajax',
  type: 'devicon'
}, {
  key: 'jquery',
  name: 'jQuery',
  type: 'devicon'
}, {
  key: 'kotlin',
  name: 'Kotlin',
  type: 'devicon'
}, {
  key: 'vuejs',
  name: 'Vuejs',
  type: 'devicon'
}, {
  key: 'tailwindcss',
  name: 'TailwindCSS',
  type: 'devicon'
}, {
  key: 'bootstrap',
  name: 'Bootstrap',
  type: 'devicon'
}, {
  key: 'npm',
  name: 'NPM',
  type: 'devicon'
}, {
  key: 'yarn',
  name: 'Yarn',
  type: 'devicon'
}, {
  key: "angularjs",
  name: "AngularJS",
  type: "devicon"
}, {
  key: "android",
  name: "Android",
  type: "devicon"
}, {
  key: "firebase",
  name: "Firebase",
  type: "devicon"
}, {
  key: "flask",
  name: "Flask",
  type: "devicon"
}];

/***/ }),

/***/ 6983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Badges)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6365);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9916);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7695);
/* harmony import */ var _icon_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2987);
/* harmony import */ var _styles_scss_blocks_badges_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7275);
/* harmony import */ var _blocks_about_badges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9928);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement;




// Utility components



function Badges(_ref) {
  var list = _ref.list,
    block = _ref.block,
    color = _ref.color,
    fullContainer = _ref.fullContainer;
  var controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .useAnimation */ .s)();
  var _useInView = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__/* .useInView */ .Wx)({
      "threshold": 0.5,
      "triggerOnce": false
    }),
    ref = _useInView.ref,
    inView = _useInView.inView;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);
  var container = {
    hidden: {
      opacity: 1,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.025
      }
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.025,
        staggerChildren: 0.1
      }
    }
  };
  var item = {
    hidden: {
      y: 20,
      opacity: -0.5
    },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.m.ul, {
    className: "".concat(_styles_scss_blocks_badges_module_scss__WEBPACK_IMPORTED_MODULE_2__/* ["default"].list */ .Ay.list, " ").concat(_styles_scss_blocks_badges_module_scss__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay[block], " ").concat(_styles_scss_blocks_badges_module_scss__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay[fullContainer])
    //Animations
    ,
    ref: ref,
    variants: container,
    initial: "hidden",
    animate: controls,
    whileHover: "hover"
  }, list.map(function (_ref2) {
    var key = _ref2.key,
      name = _ref2.name,
      type = _ref2.type;
    return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.m.li, {
      key: name,
      className: "".concat(_styles_scss_blocks_badges_module_scss__WEBPACK_IMPORTED_MODULE_2__/* ["default"].item */ .Ay.item, " ").concat(key)
      //Animations
      ,
      variants: item
    }, __jsx(IconModule, {
      iconKey: key,
      iconType: type,
      color: color
    }), __jsx("span", {
      className: _styles_scss_blocks_badges_module_scss__WEBPACK_IMPORTED_MODULE_2__/* ["default"].title */ .Ay.title
    }, name));
  }));
}
function IconModule(_ref3) {
  var iconKey = _ref3.iconKey,
    iconType = _ref3.iconType,
    color = _ref3.color;
  var colored = 'colored';
  if (color === false) {
    colored = '';
  }
  switch (iconType) {
    case 'far':
    case 'fad':
    case 'fat':
    case 'fas':
      return __jsx(_icon_tsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
        icon: [iconType, iconKey]
      });
    case 'devicon':
      return __jsx("i", {
        className: "devicon-".concat(iconKey, "-plain ").concat(colored)
      });
    default:
      return '';
  }
}

/***/ }),

/***/ 2987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_samir_Documents_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(296);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7107);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6784);
/* harmony import */ var _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5685);
/* harmony import */ var _fortawesome_pro_thin_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9687);
/* harmony import */ var _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9456);
/* harmony import */ var _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8452);
/* harmony import */ var _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9656);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7875);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement;










// Icons
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__/* .library */ .Yv.add(_fortawesome_pro_thin_svg_icons__WEBPACK_IMPORTED_MODULE_3__/* .fat */ .Qtv, _fortawesome_pro_light_svg_icons__WEBPACK_IMPORTED_MODULE_4__/* .fal */ .QFz, _fortawesome_pro_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__/* .fas */ .X7I, _fortawesome_pro_duotone_svg_icons__WEBPACK_IMPORTED_MODULE_6__/* .fad */ .QRH, _fortawesome_pro_regular_svg_icons__WEBPACK_IMPORTED_MODULE_7__/* .far */ .C91, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__/* .fab */ .Cvc);
var Icon = function Icon(_ref) {
  var icon = _ref.icon;
  var _icon = (0,_Users_samir_Documents_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(icon, 2),
    iconType = _icon[0],
    iconKey = _icon[1];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('circle-notch'),
    stateIconKey = _useState[0],
    setIconKey = _useState[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setIconKey(iconKey);
  }, [iconKey]);
  return __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__/* .FontAwesomeIcon */ .g, {
    icon: [iconType, stateIconKey]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);

/***/ }),

/***/ 657:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports badgeBlockContainer, list, item, colored, title, methods, invertedColor, fullContainer */
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.dXLQ4AwS5uab0e3KPwwx:not(:last-of-type){margin-bottom:var(--size-4x)}.obNV2jCBsgXghrpyb_PW{position:relative;z-index:1;display:flex;flex-direction:row;flex-wrap:wrap;gap:var(--size-2-);row-gap:var(--size-2-);font-family:var(--font-accent);font-weight:600;font-size:var(--font-xs);list-style:none}.obNV2jCBsgXghrpyb_PW .ZuYipwZdaeoLnllkG8iB{position:relative;display:flex;flex-direction:row;overflow:hidden;align-items:center;border-radius:9rem;padding:calc(var(--size-3-)*1) calc(var(--size-3-)*2);text-transform:uppercase;color:var(--primary-dim)}.obNV2jCBsgXghrpyb_PW .ZuYipwZdaeoLnllkG8iB i,.obNV2jCBsgXghrpyb_PW .ZuYipwZdaeoLnllkG8iB svg{display:flex;justify-content:center;align-items:center;margin-right:.7rem}.obNV2jCBsgXghrpyb_PW .ZuYipwZdaeoLnllkG8iB i:not(.dK8em9G_7HQ7W5EOC4mL){color:var(--icon-bright)}.obNV2jCBsgXghrpyb_PW .ZuYipwZdaeoLnllkG8iB svg{height:.8rem;padding:.1rem}.obNV2jCBsgXghrpyb_PW .ZuYipwZdaeoLnllkG8iB svg path{fill:var(--icon-bright)}.obNV2jCBsgXghrpyb_PW .ZuYipwZdaeoLnllkG8iB .mJTh68zBOVtSen_gdiT5{flex-grow:1;text-align:center}.obNV2jCBsgXghrpyb_PW .ZuYipwZdaeoLnllkG8iB:before{content:"";position:absolute;top:0;left:0;height:100%;width:100%;z-index:1;border:1px solid var(--primary-dim);border-radius:9rem;opacity:10%}.obNV2jCBsgXghrpyb_PW .ZuYipwZdaeoLnllkG8iB:after{content:"";position:absolute;top:0;left:0;height:100%;width:100%;z-index:-1;background:var(--background-dim2);opacity:100%}.obNV2jCBsgXghrpyb_PW.iPCKf4nHRSNxCaPN3tAu .ZuYipwZdaeoLnllkG8iB{padding:.5rem 1rem;font-size:.9rem;font-weight:600;border-radius:.5rem;width:calc(50% - .25rem);text-transform:capitalize}.obNV2jCBsgXghrpyb_PW.iPCKf4nHRSNxCaPN3tAu .ZuYipwZdaeoLnllkG8iB:before,.obNV2jCBsgXghrpyb_PW.iPCKf4nHRSNxCaPN3tAu .ZuYipwZdaeoLnllkG8iB:after{border-radius:inherit}.obNV2jCBsgXghrpyb_PW.iPCKf4nHRSNxCaPN3tAu .ZuYipwZdaeoLnllkG8iB svg{height:1.4375rem;margin-right:1rem;padding:.1rem}.obNV2jCBsgXghrpyb_PW.iPCKf4nHRSNxCaPN3tAu .ZuYipwZdaeoLnllkG8iB svg path{fill:url(#fa-gradient) var(--icon-bright)}.obNV2jCBsgXghrpyb_PW.ItIudVHYnTJ66uEj8VaI li{background:var(--primary);color:var(--background)}.obNV2jCBsgXghrpyb_PW.ItIudVHYnTJ66uEj8VaI li svg{color:var(--background)}.obNV2jCBsgXghrpyb_PW.ItIudVHYnTJ66uEj8VaI.iPCKf4nHRSNxCaPN3tAu svg{color:var(--background)}.Qe1Srt6LqISjvFJBnoq9{border-top:1px solid var(--primary-dark);background:var(--background-dim);margin-left:calc(var(--padding-left)*-1);margin-right:calc(var(--padding-right)*-1);margin-bottom:calc(var(--padding-bottom)*-1);padding:var(--padding);padding-left:var(--padding-left);padding-top:var(--padding-top, 1rem);padding-right:var(--padding-right);padding-bottom:var(--padding-bottom)}@media screen and (max-width: 767px){.obNV2jCBsgXghrpyb_PW.iPCKf4nHRSNxCaPN3tAu .ZuYipwZdaeoLnllkG8iB{font-size:.75rem;padding:.5rem;letter-spacing:-0.025rem}.obNV2jCBsgXghrpyb_PW.iPCKf4nHRSNxCaPN3tAu .ZuYipwZdaeoLnllkG8iB svg{height:1rem;margin-right:.5rem}}`, ""]);
// Exports
var badgeBlockContainer = (/* unused pure expression or super */ null && (`dXLQ4AwS5uab0e3KPwwx`));
var list = (/* unused pure expression or super */ null && (`obNV2jCBsgXghrpyb_PW`));
var item = (/* unused pure expression or super */ null && (`ZuYipwZdaeoLnllkG8iB`));
var colored = (/* unused pure expression or super */ null && (`dK8em9G_7HQ7W5EOC4mL`));
var title = (/* unused pure expression or super */ null && (`mJTh68zBOVtSen_gdiT5`));
var methods = (/* unused pure expression or super */ null && (`iPCKf4nHRSNxCaPN3tAu`));
var invertedColor = (/* unused pure expression or super */ null && (`ItIudVHYnTJ66uEj8VaI`));
var fullContainer = (/* unused pure expression or super */ null && (`Qe1Srt6LqISjvFJBnoq9`));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5072);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5056);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_badges_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(657);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_badges_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_badges_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_badges_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_badges_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.locals : undefined);


/***/ })

}]);