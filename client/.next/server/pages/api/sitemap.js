"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/sitemap";
exports.ids = ["pages/api/sitemap"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./src/pages/api/sitemap.ts":
/*!**********************************!*\
  !*** ./src/pages/api/sitemap.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SiteMap)\n/* harmony export */ });\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nfunction SiteMap(req, res) {\n    const filePath = \"./public/siteMapFonteDeVida.xml\";\n    const fileContents = fs.readFileSync(filePath);\n    res.setHeader(\"Content-Type\", \"application.xml\");\n    res.setHeader(\"Content-Disposition\", \"attachment; siteMapFonteDeVida.xml\");\n    res.status(200).send(fileContents);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3NpdGVtYXAudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU1BLEtBQUtDLG1CQUFPQSxDQUFDO0FBRUosU0FBU0MsUUFBUUMsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUN2RSxNQUFNQyxXQUFXO0lBQ2pCLE1BQU1DLGVBQWVOLEdBQUdPLFlBQVksQ0FBQ0Y7SUFDckNELElBQUlJLFNBQVMsQ0FBQyxnQkFBZ0I7SUFDOUJKLElBQUlJLFNBQVMsQ0FBQyx1QkFBdUI7SUFDckNKLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNKO0FBQ3pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWJsaWEvLi9zcmMvcGFnZXMvYXBpL3NpdGVtYXAudHM/ZTlmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpdGVNYXAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9ICcuL3B1YmxpYy9zaXRlTWFwRm9udGVEZVZpZGEueG1sJztcbiAgICBjb25zdCBmaWxlQ29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMoZmlsZVBhdGgpO1xuICAgIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi54bWwnKTtcbiAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LURpc3Bvc2l0aW9uJywgJ2F0dGFjaG1lbnQ7IHNpdGVNYXBGb250ZURlVmlkYS54bWwnKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChmaWxlQ29udGVudHMpXG59XG5cbiJdLCJuYW1lcyI6WyJmcyIsInJlcXVpcmUiLCJTaXRlTWFwIiwicmVxIiwicmVzIiwiZmlsZVBhdGgiLCJmaWxlQ29udGVudHMiLCJyZWFkRmlsZVN5bmMiLCJzZXRIZWFkZXIiLCJzdGF0dXMiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/sitemap.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/sitemap.ts"));
module.exports = __webpack_exports__;

})();