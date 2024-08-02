"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[992],{

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

/***/ 2992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ FeaturedProjects)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(9965);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs + 82 modules
var use_animation = __webpack_require__(6365);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion-minimal.mjs + 49 modules
var motion_minimal = __webpack_require__(9916);
// EXTERNAL MODULE: ./node_modules/react-intersection-observer/index.mjs
var react_intersection_observer = __webpack_require__(7695);
// EXTERNAL MODULE: ./src/components/utils/badge.list.jsx
var badge_list = __webpack_require__(6983);
// EXTERNAL MODULE: ./src/components/utils/icon.tsx
var icon = __webpack_require__(2987);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/scss/sections/projects/featured.module.scss
var featured_module = __webpack_require__(3534);
;// CONCATENATED MODULE: ./src/styles/scss/sections/projects/featured.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(featured_module/* default */.Ay, options);




       /* harmony default export */ const projects_featured_module = (featured_module/* default */.Ay && featured_module/* default */.Ay.locals ? featured_module/* default */.Ay.locals : undefined);

;// CONCATENATED MODULE: ./src/components/blocks/projects/featured.jsx

var __jsx = react.createElement;







function FeaturedProject(_ref, index) {
  var content = _ref.content;
  var project = content.project,
    url = content.url,
    repo = content.repo,
    descriptionTitle = content.descriptionTitle,
    description = content.description,
    stack = content.stack,
    imageOptions = content.imageOptions,
    images = content.images;
  var controls = (0,use_animation/* useAnimation */.s)();
  var _useInView = (0,react_intersection_observer/* useInView */.Wx)({
      "threshold": 0.25,
      "triggerOnce": false
    }),
    ref = _useInView.ref,
    inView = _useInView.inView;
  (0,react.useEffect)(function () {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return __jsx(motion_minimal.m.section, {
    key: index,
    className: projects_featured_module.project
    //framer-motion
    ,
    ref: ref,
    variants: container,
    initial: ["rest", "hidden"],
    whileHover: "hover",
    animate: controls
  }, __jsx("div", {
    className: projects_featured_module.details
  }, __jsx("div", {
    className: projects_featured_module.projectHeader
  }, __jsx("div", {
    className: projects_featured_module.header
  }, __jsx("h3", {
    className: "highlight"
  }, project), __jsx("span", {
    className: projects_featured_module.privateOr
  }, __jsx("i", {
    className: "devicon-github-plain"
  }), repo)), __jsx("div", {
    className: projects_featured_module.description
  }, __jsx("p", null, __jsx("strong", null, descriptionTitle), " ", description)), __jsx("div", {
    className: projects_featured_module.stackContainer
  }, __jsx(badge_list/* default */.A, {
    list: stack,
    block: "stack",
    fullContainer: false,
    color: false
  })), __jsx(motion_minimal.m.div, {
    variants: '',
    className: projects_featured_module.viewProject
  }, __jsx(icon/* default */.A, {
    icon: ['fad', 'arrow-right-to-bracket']
  })))), __jsx("div", {
    className: projects_featured_module.imageContainer
  }, __jsx("span", {
    className: "".concat(projects_featured_module.imageAnimationContainer)
  }, images.map(function (_ref2, index) {
    var key = _ref2.key,
      url = _ref2.url,
      hover = _ref2.hover,
      h = _ref2.h,
      w = _ref2.w;
    hover = hover === 'left' ? hoverLeft : hoverRight;
    return __jsx(motion_minimal.m.div, {
      key: "".concat(index, "-").concat(key),
      variants: item
    }, __jsx(motion_minimal.m.div, {
      variants: hover
    }, __jsx((image_default()), {
      src: url,
      alt: "x",
      height: h,
      width: w,
      loading: "eager"
    })));
  }))));
}
var container = {
  hidden: {
    transition: {
      delayChildren: 0.125,
      staggerChildren: 0.0625
    }
  },
  visible: {
    transition: {
      delayChildren: 0.125,
      staggerChildren: 0.25
    }
  },
  rest: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0
    }
  },
  hover: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0
    }
  }
};
var item = {
  hidden: {
    y: 75,
    opacity: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: .35
    }
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: .5
    }
  }
};
var hoverLeft = {
  rest: {
    x: 0
  },
  hover: {
    x: -20
  }
};
var hoverRight = {
  rest: {
    x: 0
  },
  hover: {
    x: 20
  }
};
// EXTERNAL MODULE: ./src/components/structure/section.tsx + 1 modules
var section = __webpack_require__(341);
// EXTERNAL MODULE: ./src/components/structure/container.tsx + 1 modules
var structure_container = __webpack_require__(983);
// EXTERNAL MODULE: ./src/components/blocks/section.title.tsx
var section_title = __webpack_require__(9404);
;// CONCATENATED MODULE: ./src/content/projects/featured.json
const projects_featured_namespaceObject = /*#__PURE__*/JSON.parse('[{"project":"Logly","url":"https://github.com/samirrsharma/final-object-detection","repo":"Public","descriptionTitle":"logly is a log management package","description":"that aims to provide various log management features such as auto logging and customize the log with color and tags and disable specific log levels ease and more","imageOptions":[],"images":[{"key":"mock-stack","hover":"right","h":"300","w":"300","url":"/img/logly.png"}],"stack":[{"key":"python","name":"Python","type":"devicon"}]},{"project":"samirsharma.ca","url":"https://github.com/samirrsharma/portfolio","repo":"Public","descriptionTitle":"An open-source portfolio website","description":"built on Next.js and React. A fast and responsive single page application.","imageOptions":[{"key":"size","value":"large"}],"images":[{"key":"portfolio","hover":"left","h":"550","w":"330","url":"/img/img-mock.png"}],"stack":[{"key":"nextjs","name":"Next.js","type":"devicon"},{"key":"react","name":"React","type":"devicon"},{"key":"nodejs","name":"Node.js","type":"devicon"},{"key":"javascript","name":"JavaScript","type":"devicon"},{"key":"typescript","name":"Typescript","type":"devicon"},{"key":"html5","name":"HTML5","type":"devicon"},{"key":"css3","name":"CSS3","type":"devicon"},{"key":"sass","name":"SCSS","type":"devicon"},{"key":"git","name":"Git(Hub)","type":"devicon"},{"key":"python","name":"Python","type":"devicon"},{"key":"django","name":"Django","type":"devicon"}]}]');
;// CONCATENATED MODULE: ./src/components/sections/projects/featured.jsx

var featured_jsx = react.createElement;


// Section structure





{/* Featured Projects */}
function FeaturedProjects() {
  return featured_jsx(section/* default */.A, {
    classProp: projects_featured_module.hasBg
  }, featured_jsx(structure_container/* default */.A, {
    spacing: 'verticalXXXXLrg'
  }, featured_jsx(section_title/* default */.A, {
    title: "Featured Projects",
    preTitle: "UX and Full Stack",
    subTitle: "Focused on the experience, driven by the engineering."
  }), "     ", projects_featured_namespaceObject.map(function (data, index) {
    return featured_jsx(FeaturedProject, {
      content: data,
      index: index,
      key: index
    });
  })), featured_jsx("div", {
    className: projects_featured_module.bgContainer
  }, featured_jsx("span", {
    className: projects_featured_module.orbitalBg
  }, featured_jsx("span", {
    className: "".concat(projects_featured_module.bgSection)
  }, featured_jsx("span", {
    className: "".concat(projects_featured_module.bgInner, " ").concat(projects_featured_module.heroLeft, " ").concat(projects_featured_module.heroOrbital)
  })), featured_jsx("span", {
    className: "".concat(projects_featured_module.bgSection)
  }, featured_jsx("span", {
    className: "".concat(projects_featured_module.bgInner, " ").concat(projects_featured_module.heroCenter)
  })), featured_jsx("span", {
    className: "".concat(projects_featured_module.bgSection)
  }, featured_jsx("span", {
    className: "".concat(projects_featured_module.bgInner, " ").concat(projects_featured_module.heroRight, " ").concat(projects_featured_module.heroOrbital)
  }))), featured_jsx("span", {
    className: projects_featured_module.afterGlowBg
  })));
}

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

/***/ 3534:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports hasBg, project, viewProject, projectHeader, header, privateOr, details, imageContainer, imageAnimationContainer, bgContainer, afterGlowBg, orbitalBg, rotationFore, bgSection, bgInner, heroOrbital, heroLeft, heroCenter, heroRight, stackContainer */
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.wRzJ99V9fiKV4k1InHGI{border-bottom:1px solid var(--primary-dark)}.CqQ44jz6pVJuz14IHq4i{display:flex;flex-direction:row;flex-wrap:nowrap;user-select:none;border-radius:2rem;background-color:var(--background-dim2);border:1px solid var(--primary-dark)}.CqQ44jz6pVJuz14IHq4i .iy8E1nwHr99CBJfYdpLM svg{transition:all,cubic-bezier(0.4, 0, 0.2, 1),300ms}.CqQ44jz6pVJuz14IHq4i:nth-of-type(2n){flex-direction:row-reverse}.CqQ44jz6pVJuz14IHq4i:hover{cursor:pointer}.CqQ44jz6pVJuz14IHq4i:hover .iy8E1nwHr99CBJfYdpLM svg{transition:all,cubic-bezier(0.4, 0, 0.2, 1),300ms;color:var(--neon-1-1)}.rY21QSoibGu5mAdRYfI8{display:flex;flex-direction:column;gap:var(--size-3x)}.rY21QSoibGu5mAdRYfI8 p{font-size:1.75rem;line-height:1.2}.rY21QSoibGu5mAdRYfI8 p strong{color:var(--primary-bright)}.rY21QSoibGu5mAdRYfI8 .iy8E1nwHr99CBJfYdpLM svg{height:1.5rem;color:var(--primary)}.rY21QSoibGu5mAdRYfI8 .AX3gFL4mBI7XiYyaSrWD{display:flex;flex-direction:row;align-items:center;gap:2rem}.rY21QSoibGu5mAdRYfI8 .AX3gFL4mBI7XiYyaSrWD a{flex-grow:0;flex-shrink:1}.rY21QSoibGu5mAdRYfI8 .AX3gFL4mBI7XiYyaSrWD .y4hZoUeLRO0sAjf0ckl1{flex-grow:0;flex-shrink:1;height:fit-content}.L6Q_lh_e866dw0upHFPR{display:flex;flex-direction:column;flex-grow:0;flex-shrink:1;gap:var(--size-3x);overflow:hidden;padding:2rem}.L6Q_lh_e866dw0upHFPR h3{position:relative}.L6Q_lh_e866dw0upHFPR h4{margin-bottom:var(--size-1x)}.L6Q_lh_e866dw0upHFPR ul{z-index:2}.L6Q_lh_e866dw0upHFPR img{display:none}.s9BzGvu8mf1Z4OUxR9bl{z-index:3;position:relative;display:block;width:50%;border-radius:1rem;flex-grow:1;flex-shrink:0}.s9BzGvu8mf1Z4OUxR9bl ._SANZQbvFLvPm7q1L6Cl{position:absolute;overflow:hidden;border-radius:2rem;height:calc(100% - 6rem);width:calc(100% + 1rem);right:0;bottom:0}.s9BzGvu8mf1Z4OUxR9bl ._SANZQbvFLvPm7q1L6Cl>div>div>span{position:absolute !important;right:4rem}.s9BzGvu8mf1Z4OUxR9bl ._SANZQbvFLvPm7q1L6Cl>div>div>span img{width:444.8px !important}.y4hZoUeLRO0sAjf0ckl1{display:flex;flex-direction:row;gap:.35rem;align-items:center;max-width:fit-content;font-size:.7rem;font-weight:400;font-family:var(--font-accent);color:var(--primary-dim);padding:.125rem .5rem;border-radius:99rem;border:1px solid var(--primary-dark);background:var(--primary-dark)}.SU6n05XFFcXYr2bfe2mZ{--opacity: 10%;position:absolute;top:50%;transform:translateY(-50%);z-index:-2;width:100%;height:500px}.SU6n05XFFcXYr2bfe2mZ .woDzAeZml2de9SGgXdiy{position:absolute;z-index:-2;top:-50%;right:0px;height:1000px;width:500px;transform:translateX(50%);filter:blur(200px);opacity:var(--opacity);background:linear-gradient(180deg, var(--neon-1-1) 0%, var(--neon-1-2) 100%)}.SU6n05XFFcXYr2bfe2mZ .DnojBwrSL3ka5GicwuIp{--left: linear-gradient(180deg, var(--neon-2-1) 0%, var(--neon-2-2) 100% );--center: linear-gradient(180deg, var(--neon-1-1) 0%, var(--neon-1-2) 100% );--right: linear-gradient(180deg, var(--neon-2-2) 0%, var(--neon-1-1) 100% );position:absolute;z-index:-1;width:100%;left:-50%;display:flex;flex-direction:row;justify-content:space-between;gap:2rem;height:500px;filter:blur(200px);animation:EmIpaQ7UZK7u9plgba1C 240s linear infinite;transform-origin:center center}.SU6n05XFFcXYr2bfe2mZ .DnojBwrSL3ka5GicwuIp .p65CgPcW0V1Hp6YMgvIe{position:relative;width:calc(33.3333333333% - 2rem);aspect-ratio:1;height:100%}.SU6n05XFFcXYr2bfe2mZ .DnojBwrSL3ka5GicwuIp .LYRWjSSmCBWxvM0bTOdJ{height:100%;width:100%;display:block;border-radius:99rem}.SU6n05XFFcXYr2bfe2mZ .DnojBwrSL3ka5GicwuIp .DcUg73YDsm0Wvoyddp_u{height:200%;top:50%;transform:translateY(-50%)}.SU6n05XFFcXYr2bfe2mZ .DnojBwrSL3ka5GicwuIp .pOGouOCEFFQbIObgzxys{position:absolute;left:-50%;background:var(--left);opacity:calc(var(--opacity) + 15%)}.SU6n05XFFcXYr2bfe2mZ .DnojBwrSL3ka5GicwuIp .V4UgjPj65oOKe9LHnIWY{background:var(--center);opacity:var(--opacity)}.SU6n05XFFcXYr2bfe2mZ .DnojBwrSL3ka5GicwuIp .M74H6_4NX8iWEu1fGRQH{position:absolute;right:-50%;background:var(--right);opacity:calc(var(--opacity) + 15%)}@keyframes EmIpaQ7UZK7u9plgba1C{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@media screen and (max-width: 767px){.CqQ44jz6pVJuz14IHq4i:nth-of-type(n){flex-direction:column}.CqQ44jz6pVJuz14IHq4i:nth-of-type(n):hover .L6Q_lh_e866dw0upHFPR{border-color:var(--primary-dim2)}.CqQ44jz6pVJuz14IHq4i:nth-of-type(n) .L6Q_lh_e866dw0upHFPR{border-radius:1rem;padding:var(--size-2x)}.CqQ44jz6pVJuz14IHq4i:nth-of-type(n) .MnInv8lYyxoqifUdUlip{--padding-top: 1.5rem}.CqQ44jz6pVJuz14IHq4i:nth-of-type(n) .MnInv8lYyxoqifUdUlip h4{text-align:center;display:none}.CqQ44jz6pVJuz14IHq4i:nth-of-type(n) .MnInv8lYyxoqifUdUlip ul{font-size:.6rem}.CqQ44jz6pVJuz14IHq4i:nth-of-type(n) .s9BzGvu8mf1Z4OUxR9bl{height:100px;width:100%}.CqQ44jz6pVJuz14IHq4i:nth-of-type(n) ._SANZQbvFLvPm7q1L6Cl{height:calc(100% + 6rem);width:100%}.CqQ44jz6pVJuz14IHq4i:nth-of-type(n) ._SANZQbvFLvPm7q1L6Cl>div>div>span img{width:278px !important}.CqQ44jz6pVJuz14IHq4i:nth-of-type(2n+1) ._SANZQbvFLvPm7q1L6Cl>div>div>span{right:2rem}.CqQ44jz6pVJuz14IHq4i:nth-of-type(2n) ._SANZQbvFLvPm7q1L6Cl>div>div>span{right:0rem}.SU6n05XFFcXYr2bfe2mZ .DnojBwrSL3ka5GicwuIp{width:unset;height:100%}}`, ""]);
// Exports
var hasBg = (/* unused pure expression or super */ null && (`wRzJ99V9fiKV4k1InHGI`));
var project = (/* unused pure expression or super */ null && (`CqQ44jz6pVJuz14IHq4i`));
var viewProject = (/* unused pure expression or super */ null && (`iy8E1nwHr99CBJfYdpLM`));
var projectHeader = (/* unused pure expression or super */ null && (`rY21QSoibGu5mAdRYfI8`));
var header = (/* unused pure expression or super */ null && (`AX3gFL4mBI7XiYyaSrWD`));
var privateOr = (/* unused pure expression or super */ null && (`y4hZoUeLRO0sAjf0ckl1`));
var details = (/* unused pure expression or super */ null && (`L6Q_lh_e866dw0upHFPR`));
var imageContainer = (/* unused pure expression or super */ null && (`s9BzGvu8mf1Z4OUxR9bl`));
var imageAnimationContainer = (/* unused pure expression or super */ null && (`_SANZQbvFLvPm7q1L6Cl`));
var bgContainer = (/* unused pure expression or super */ null && (`SU6n05XFFcXYr2bfe2mZ`));
var afterGlowBg = (/* unused pure expression or super */ null && (`woDzAeZml2de9SGgXdiy`));
var orbitalBg = (/* unused pure expression or super */ null && (`DnojBwrSL3ka5GicwuIp`));
var rotationFore = (/* unused pure expression or super */ null && (`EmIpaQ7UZK7u9plgba1C`));
var bgSection = (/* unused pure expression or super */ null && (`p65CgPcW0V1Hp6YMgvIe`));
var bgInner = (/* unused pure expression or super */ null && (`LYRWjSSmCBWxvM0bTOdJ`));
var heroOrbital = (/* unused pure expression or super */ null && (`DcUg73YDsm0Wvoyddp_u`));
var heroLeft = (/* unused pure expression or super */ null && (`pOGouOCEFFQbIObgzxys`));
var heroCenter = (/* unused pure expression or super */ null && (`V4UgjPj65oOKe9LHnIWY`));
var heroRight = (/* unused pure expression or super */ null && (`M74H6_4NX8iWEu1fGRQH`));
var stackContainer = (/* unused pure expression or super */ null && (`MnInv8lYyxoqifUdUlip`));
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