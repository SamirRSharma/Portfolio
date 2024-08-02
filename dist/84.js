"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[84],{

/***/ 2084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ qna)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(5458);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./src/components/structure/section.tsx + 1 modules
var section = __webpack_require__(341);
// EXTERNAL MODULE: ./src/components/structure/container.tsx + 1 modules
var container = __webpack_require__(983);
// EXTERNAL MODULE: ./src/components/blocks/section.title.tsx
var section_title = __webpack_require__(9404);
// EXTERNAL MODULE: ./src/styles/scss/sections/index/career.module.scss
var career_module = __webpack_require__(9391);
;// CONCATENATED MODULE: ./src/content/index/qna.json
const qna_namespaceObject = /*#__PURE__*/JSON.parse('[{"question":"Where are you currently studying?","answer":"I am currently studying computer science at the Velammal College of Engineering and Technology.","isOpen":false},{"question":"Have you worked on any projects?","answer":"Yes, in addition to my personal projects and hobbies, I have worked on several projects, both individually and in teams. These projects have allowed me to apply theoretical knowledge to real-world scenarios, honing my practical skills in software development, web technologies, and computer networks.","isOpen":false},{"question":"What extracurricular activities have you participated in?","answer":"I have actively participated in extracurricular activities and technical events on campus, which have provided me with opportunities to expand my knowledge, network with fellow students, and enhance my leadership and communication skills.","isOpen":false},{"question":"Can we recruit you?","answer":"Yes, I am currently looking for jobs and I have also done several projects as a hobby.","isOpen":false},{"question":"How do you stay updated with the latest developments in your field?","answer":"I believe in continuous learning and staying updated with the latest trends. I regularly read tech blogs, follow industry experts on social media, and participate in online courses and workshops to enhance my knowledge and skills. I am also actively involved in developing new projects that allow me to apply and expand my expertise.","isOpen":false}]');
;// CONCATENATED MODULE: ./src/components/sections/index/qna.tsx

var __jsx = react.createElement;






var QnA = function QnA() {
  var _useState = (0,react.useState)(qna_namespaceObject),
    qnas = _useState[0],
    setQnas = _useState[1];
  var toggleAnswer = function toggleAnswer(index) {
    setQnas(function (prevState) {
      var updatedQnas = (0,toConsumableArray/* default */.A)(prevState);
      updatedQnas[index].isOpen = !updatedQnas[index].isOpen;
      return updatedQnas;
    });
  };
  return __jsx(section/* default */.A, {
    classProp: "".concat(career_module/* default.section */.Ay.section, " borderBottom")
  }, __jsx(container/* default */.A, {
    spacing: ['verticalXXXLrg']
  }, __jsx(section_title/* default */.A, {
    title: "Q & A",
    preTitle: "",
    subTitle: "Get your Questions answered."
  }), __jsx("div", {
    className: career_module/* default.area */.Ay.area
  }, qnas.map(function (qna, index) {
    return __jsx("div", {
      key: index,
      className: career_module/* default.company */.Ay.company
    }, __jsx("div", {
      className: career_module/* default.companyContent */.Ay.companyContent,
      style: {
        cursor: 'pointer',
        fontWeight: 'bold'
      },
      onClick: function onClick() {
        return toggleAnswer(index);
      }
    }, qna.question), qna.isOpen && __jsx("div", {
      className: career_module/* default.companyContent */.Ay.companyContent
    }, qna.answer));
  }))));
};
/* harmony default export */ const qna = (QnA);

/***/ })

}]);