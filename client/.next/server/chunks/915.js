exports.id = 915;
exports.ids = [915];
exports.modules = {

/***/ 4884:
/***/ ((module) => {

// Exports
module.exports = {
	"errorHinoArticle": "COMPReadingContentBibleNotFound_errorHinoArticle__1jlym",
	"slidein": "COMPReadingContentBibleNotFound_slidein__vk_oD",
	"divImage": "COMPReadingContentBibleNotFound_divImage__C9IYY",
	"message": "COMPReadingContentBibleNotFound_message__o3kEP"
};


/***/ }),

/***/ 8915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_bible_COMPReadingContentBibleNotFound_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4884);
/* harmony import */ var _styles_bible_COMPReadingContentBibleNotFound_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_bible_COMPReadingContentBibleNotFound_module_css__WEBPACK_IMPORTED_MODULE_3__);




function ContentBibleNotFound({ value  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
            className: (_styles_bible_COMPReadingContentBibleNotFound_module_css__WEBPACK_IMPORTED_MODULE_3___default().errorHinoArticle),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_bible_COMPReadingContentBibleNotFound_module_css__WEBPACK_IMPORTED_MODULE_3___default().divImage),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: "/images/readingBible/notFound.svg",
                        alt: "nao encontrado",
                        className: (_styles_bible_COMPReadingContentBibleNotFound_module_css__WEBPACK_IMPORTED_MODULE_3___default().imageErro),
                        fill: true,
                        priority: true
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_bible_COMPReadingContentBibleNotFound_module_css__WEBPACK_IMPORTED_MODULE_3___default().message),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            "Conte\xfado solicitado n\xe3o encontrado.",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                children: [
                                    " - ",
                                    value,
                                    " - "
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(ContentBibleNotFound));


/***/ })

};
;