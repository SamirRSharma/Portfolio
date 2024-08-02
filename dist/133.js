"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[133],{

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

/***/ 9165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ CopyBlock)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _utils_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2987);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement;
// Util packages


// Define the props for the CopyBlock component

// This will return the copy block component
function CopyBlock(_ref) {
  var containerClass = _ref.containerClass,
    iconClass = _ref.iconClass,
    icon = _ref.icon,
    title = _ref.title,
    copy = _ref.copy;
  // Return the copy block component
  return __jsx("div", {
    className: containerClass
  }, __jsx("span", {
    className: iconClass
  }, __jsx(_utils_icon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
    icon: icon
  })), __jsx("h3", null, title), __jsx("p", null, copy));
}

/***/ }),

/***/ 9133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9965);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _structure_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(341);
/* harmony import */ var _structure_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(983);
/* harmony import */ var _blocks_section_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9404);
/* harmony import */ var _blocks_about_badges__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9928);
/* harmony import */ var _blocks_about_copy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9165);
/* harmony import */ var _styles_scss_sections_index_about_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7104);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__.createElement;
// Core packages


// Imports







function Home() {
  return __jsx(_structure_section__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
    classProp: _styles_scss_sections_index_about_module_scss__WEBPACK_IMPORTED_MODULE_7__/* ["default"].section */ .Ay.section
  }, __jsx(_structure_container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    spacing: ['verticalXXXLrg']
  }, __jsx(_blocks_section_title__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    title: "About Me",
    preTitle: "Synopsis",
    subTitle: "From an early age, my passion for creating new things has been a driving force. Immersed in the world of design and coding, I honed my skills and explored innovative solutions. This love for creation has shaped my career, fueling my desire to bring impactful and visually stunning projects to life. With meticulous attention to detail and a keen eye for aesthetics, I strive to craft exceptional and memorable experiences."
  }), __jsx("section", {
    className: _styles_scss_sections_index_about_module_scss__WEBPACK_IMPORTED_MODULE_7__/* ["default"].content */ .Ay.content
  }, __jsx("div", {
    className: _styles_scss_sections_index_about_module_scss__WEBPACK_IMPORTED_MODULE_7__/* ["default"].image */ .Ay.image
  }, __jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
    src: "https://avatars.githubusercontent.com/u/75434191?v=4",
    width: 600,
    height: 800,
    alt: "Muhammad Fiaz",
    loading: "eager"
  })), __jsx("div", {
    className: _styles_scss_sections_index_about_module_scss__WEBPACK_IMPORTED_MODULE_7__/* ["default"].copy */ .Ay.copy
  }, __jsx(_blocks_about_copy__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    title: "Softskills",
    containerClass: _styles_scss_sections_index_about_module_scss__WEBPACK_IMPORTED_MODULE_7__/* ["default"].container */ .Ay.container,
    iconClass: _styles_scss_sections_index_about_module_scss__WEBPACK_IMPORTED_MODULE_7__/* ["default"].icon */ .Ay.icon,
    icon: ['fas', 'user'],
    copy: "With a solid background in design and technical expertise, I am a skilled developer who excels in delivering high-quality solutions. Alongside my proficiency in coding, I possess strong leadership, time management, and multitasking skills, which I have honed through managing complex development projects. As a dedicated individual, I constantly seek opportunities to expand my knowledge and stay updated with the latest industry trends. With a passion for creating innovative and efficient applications, I am committed to bringing value and success to every development endeavor."
  }), __jsx(_blocks_about_copy__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    title: "Development and Projects",
    containerClass: _styles_scss_sections_index_about_module_scss__WEBPACK_IMPORTED_MODULE_7__/* ["default"].container */ .Ay.container,
    iconClass: _styles_scss_sections_index_about_module_scss__WEBPACK_IMPORTED_MODULE_7__/* ["default"].icon */ .Ay.icon,
    icon: ['fas', 'code'],
    copy: "Development and project execution are my passion. I thrive on the challenges of bringing ideas to life through coding and turning concepts into functional, robust solutions. With meticulous planning, efficient workflows, and a keen eye for detail, I ensure successful project delivery, meeting objectives and exceeding expectations."
  }))), __jsx("section", {
    className: _styles_scss_sections_index_about_module_scss__WEBPACK_IMPORTED_MODULE_7__/* ["default"].content */ .Ay.content
  }, __jsx("div", {
    className: _styles_scss_sections_index_about_module_scss__WEBPACK_IMPORTED_MODULE_7__/* ["default"].copy */ .Ay.copy
  }, __jsx(_blocks_about_copy__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    title: "Security and Privacy",
    containerClass: _styles_scss_sections_index_about_module_scss__WEBPACK_IMPORTED_MODULE_7__/* ["default"].container */ .Ay.container,
    iconClass: _styles_scss_sections_index_about_module_scss__WEBPACK_IMPORTED_MODULE_7__/* ["default"].icon */ .Ay.icon,
    icon: ['fas', 'shield-alt'],
    copy: "Security and privacy are paramount in my approach to development. I prioritize the protection of sensitive data and implement robust security measures. By adhering to industry best practices and staying updated on emerging threats, I ensure that users' information is safeguarded. Trust and confidentiality are the cornerstones of my work, fostering secure and private experiences for all."
  }), __jsx(_blocks_about_copy__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    title: "Constant Learning and Improvements",
    containerClass: _styles_scss_sections_index_about_module_scss__WEBPACK_IMPORTED_MODULE_7__/* ["default"].container */ .Ay.container,
    iconClass: _styles_scss_sections_index_about_module_scss__WEBPACK_IMPORTED_MODULE_7__/* ["default"].icon */ .Ay.icon,
    icon: ['fas', 'book'],
    copy: "I have an insatiable thirst for knowledge and a passion for continuous learning and development. Keeping up with the latest industry trends and emerging technologies allows me to stay ahead of the curve. By actively seeking new challenges and expanding my skill set, I constantly push the boundaries of my abilities, ensuring that I deliver cutting-edge solutions and provide valuable insights to clients."
  }), __jsx(_blocks_about_badges__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    title: "Research and planning",
    containerClass: _styles_scss_sections_index_about_module_scss__WEBPACK_IMPORTED_MODULE_7__/* ["default"].container */ .Ay.container,
    list: methods,
    fullContainer: "fullContainer",
    block: "methods",
    icon: "fingerprint",
    copy: "One of the most exhilarating aspects of my creative process is conducting in-depth research and meticulous planning for development projects. From Design Systems to Brand Strategy, I relish the opportunity to explore various touchpoints of user experience. Constantly seeking to expand my knowledge and skills, I immerse myself in research to stay ahead of industry trends. By strategically planning and executing projects, I aim to create exceptional digital experiences that exceed expectations and deliver measurable results."
    //invertedColor="invertedColor"
    ,
    headerIcon: "".concat(_styles_scss_sections_index_about_module_scss__WEBPACK_IMPORTED_MODULE_7__/* ["default"].icon */ .Ay.icon),
    invertedColor: undefined
  })))));
}
var methods = [{
  key: 'machinelearning',
  name: 'Machine Learning',
  type: 'fad',
  icon: 'devicon'
}, {
  key: 'artificialintelligence',
  name: 'Artificial Intelligence',
  type: 'fad',
  icon: 'devicon'
}, {
  key: 'deeplearning',
  name: 'Deep Learning',
  type: 'fad',
  icon: 'devicon'
}, {
  key: 'neuralnetworks',
  name: 'Neural Networks',
  type: 'fad',
  icon: 'devicon'
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

/***/ 6019:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports section, content, container, copy, icon, image, technicalSvg, inlineContainer, label, themelabel, emailContainer, email, defaultTheme, emailInput, editButton */
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ma3snE40cGiEe1ITkGe7 .JC5TbG_T0qD6EFUjmQ4H{position:relative;display:flex;flex-direction:row;gap:1rem}.ma3snE40cGiEe1ITkGe7 .JC5TbG_T0qD6EFUjmQ4H>div{padding:0}.ma3snE40cGiEe1ITkGe7 .JC5TbG_T0qD6EFUjmQ4H h3{position:relative;color:var(--primary-bright)}.ma3snE40cGiEe1ITkGe7 .JC5TbG_T0qD6EFUjmQ4H .SGv8k8BojHF_rRDacQLz{display:flex;flex-direction:column;gap:var(--size-1x);border:1px solid var(--primary-dark);border-radius:2rem;background:var(--background-dim2);box-shadow:0 0 30px var(--background);overflow:hidden;padding:var(--padding);--padding: 2rem;--padding-left: var(--padding);--padding-top: var(--padding);--padding-right: var(--padding);--padding-bottom: var(--padding)}.ma3snE40cGiEe1ITkGe7 .JC5TbG_T0qD6EFUjmQ4H .SGv8k8BojHF_rRDacQLz:not(:last-of-type){margin-bottom:var(--size-1x)}.ma3snE40cGiEe1ITkGe7 .JC5TbG_T0qD6EFUjmQ4H .tQ17m05xiHQmGBoOwQ8L{flex-basis:calc(60% + 1px);flex-grow:1;flex-shrink:1}.ma3snE40cGiEe1ITkGe7 .JC5TbG_T0qD6EFUjmQ4H .i5iwPJgZziEWf8w3B3fA{padding:.5rem;display:flex;align-items:center;background:var(--primary-dark);width:fit-content;border-radius:.5rem;aspect-ratio:1}.ma3snE40cGiEe1ITkGe7 .JC5TbG_T0qD6EFUjmQ4H .i5iwPJgZziEWf8w3B3fA svg{height:1.6rem;color:var(--primary)}.ma3snE40cGiEe1ITkGe7 .JC5TbG_T0qD6EFUjmQ4H .i5iwPJgZziEWf8w3B3fA svg path{fill:url(#fa-gradient) #fff}.ma3snE40cGiEe1ITkGe7 .JC5TbG_T0qD6EFUjmQ4H .pp5qrpAe8RHFK9_lDVQr{flex-basis:50%;flex-grow:1;flex-shrink:1;position:relative;z-index:-10}.ma3snE40cGiEe1ITkGe7 .JC5TbG_T0qD6EFUjmQ4H .pp5qrpAe8RHFK9_lDVQr img{height:100%;width:100%;aspect-ratio:3/4;object-fit:cover;border-radius:2rem}.ma3snE40cGiEe1ITkGe7 .JC5TbG_T0qD6EFUjmQ4H .pp5qrpAe8RHFK9_lDVQr.hOSsUYGG1oU8PXVN3ZA6>span{position:relative !important;overflow:visible !important;height:100% !important;z-index:-1}.ma3snE40cGiEe1ITkGe7 .JC5TbG_T0qD6EFUjmQ4H .pp5qrpAe8RHFK9_lDVQr.hOSsUYGG1oU8PXVN3ZA6 img{overflow:visible;filter:brightness(100%)}@media screen and (max-width: 767px){.ma3snE40cGiEe1ITkGe7 .JC5TbG_T0qD6EFUjmQ4H{flex-direction:column}.ma3snE40cGiEe1ITkGe7 .JC5TbG_T0qD6EFUjmQ4H>div{flex-basis:100% !important}.ma3snE40cGiEe1ITkGe7 .JC5TbG_T0qD6EFUjmQ4H .SGv8k8BojHF_rRDacQLz{padding:2rem 1.25rem}.ma3snE40cGiEe1ITkGe7 .JC5TbG_T0qD6EFUjmQ4H .pp5qrpAe8RHFK9_lDVQr{padding:1rem}.ma3snE40cGiEe1ITkGe7 .JC5TbG_T0qD6EFUjmQ4H .pp5qrpAe8RHFK9_lDVQr.hOSsUYGG1oU8PXVN3ZA6{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:140%;z-index:-1}.ma3snE40cGiEe1ITkGe7 .JC5TbG_T0qD6EFUjmQ4H .tQ17m05xiHQmGBoOwQ8L{padding:0}}.TuDFrJp1descaWiDAuvH{display:flex;flex-direction:column;margin-bottom:1rem}.O1k7BhR8PSo7YOY1zrIS{font-weight:bold;margin-right:.5rem;margin-top:5px}.XiovlkWhvcJTmvWhEK2X{margin-top:5px}.lvDP2HaJvaDnIxG8P5ww{display:flex;flex-direction:row;align-items:center}.QItxpcEM9Hd6Iv8KAFe6{padding:.2rem .5rem;border:2px solid rgba(0,0,0,0);border-radius:4px;margin-left:.5rem}.xM2JfdsJVKad23JBI1EL{align-items:center}.zRamUSfblbJ8stORvHfj{padding:.2rem .5rem;border:2px solid #007bff;border-radius:4px;margin-left:.5rem}.N4gEgSvTDOxHQsw6tNEL{cursor:pointer;padding:.2rem .5rem;border:none;background-color:#007bff;color:#fff;border-radius:4px;margin-left:.5rem}@media screen and (max-width: 768px){.TuDFrJp1descaWiDAuvH{flex-direction:column;align-items:flex-start}}`, ""]);
// Exports
var section = (/* unused pure expression or super */ null && (`ma3snE40cGiEe1ITkGe7`));
var content = (/* unused pure expression or super */ null && (`JC5TbG_T0qD6EFUjmQ4H`));
var container = (/* unused pure expression or super */ null && (`SGv8k8BojHF_rRDacQLz`));
var copy = (/* unused pure expression or super */ null && (`tQ17m05xiHQmGBoOwQ8L`));
var icon = (/* unused pure expression or super */ null && (`i5iwPJgZziEWf8w3B3fA`));
var image = (/* unused pure expression or super */ null && (`pp5qrpAe8RHFK9_lDVQr`));
var technicalSvg = (/* unused pure expression or super */ null && (`hOSsUYGG1oU8PXVN3ZA6`));
var inlineContainer = (/* unused pure expression or super */ null && (`TuDFrJp1descaWiDAuvH`));
var label = (/* unused pure expression or super */ null && (`O1k7BhR8PSo7YOY1zrIS`));
var themelabel = (/* unused pure expression or super */ null && (`XiovlkWhvcJTmvWhEK2X`));
var emailContainer = (/* unused pure expression or super */ null && (`lvDP2HaJvaDnIxG8P5ww`));
var email = (/* unused pure expression or super */ null && (`QItxpcEM9Hd6Iv8KAFe6`));
var defaultTheme = (/* unused pure expression or super */ null && (`xM2JfdsJVKad23JBI1EL`));
var emailInput = (/* unused pure expression or super */ null && (`zRamUSfblbJ8stORvHfj`));
var editButton = (/* unused pure expression or super */ null && (`N4gEgSvTDOxHQsw6tNEL`));
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


/***/ }),

/***/ 7104:
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6019);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_about_module_scss__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Ay.locals : undefined);


/***/ })

}]);