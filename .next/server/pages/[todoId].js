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
exports.id = "pages/[todoId]";
exports.ids = ["pages/[todoId]"];
exports.modules = {

/***/ "./src/pages/[todoId]/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/[todoId]/index.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\nconst GetATodo = ()=>{};\nconst getStaticPaths = ()=>{\n    return {\n        fallback: true,\n        paths: [\n            {\n                params: {\n                    todoId: \"1\"\n                }\n            }\n        ]\n    };\n};\nconst getStaticProps = (context)=>{\n    const todoId = context.params.todoId;\n    return {\n        props: {\n            data: {\n                id: todoId,\n                title: \"title\",\n                text: \"text\"\n            }\n        }\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetATodo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW3RvZG9JZF0vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU1BLFdBQVcsSUFBTSxDQUFDO0FBRWpCLE1BQU1DLGlCQUFpQixJQUFNO0lBQ2xDLE9BQU87UUFDTEMsVUFBVSxJQUFJO1FBQ2RDLE9BQU87WUFDTDtnQkFDRUMsUUFBUTtvQkFDTkMsUUFBUTtnQkFDVjtZQUNGO1NBQ0Q7SUFDSDtBQUNGLEVBQUU7QUFFSyxNQUFNQyxpQkFBaUIsQ0FBQ0MsVUFBWTtJQUN6QyxNQUFNRixTQUFTRSxRQUFRSCxNQUFNLENBQUNDLE1BQU07SUFFcEMsT0FBTztRQUNMRyxPQUFPO1lBQ0xDLE1BQU07Z0JBQ0pDLElBQUlMO2dCQUNKTSxPQUFPO2dCQUNQQyxNQUFNO1lBQ1I7UUFDRjtJQUNGO0FBQ0YsRUFBRTtBQUVGLGlFQUFlWixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmUtdG9kby8uL3NyYy9wYWdlcy9bdG9kb0lkXS9pbmRleC50c3g/ZmY4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHZXRBVG9kbyA9ICgpID0+IHt9O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgZmFsbGJhY2s6IHRydWUsXG4gICAgcGF0aHM6IFtcbiAgICAgIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdG9kb0lkOiBcIjFcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHRvZG9JZCA9IGNvbnRleHQucGFyYW1zLnRvZG9JZDtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlkOiB0b2RvSWQsXG4gICAgICAgIHRpdGxlOiBcInRpdGxlXCIsXG4gICAgICAgIHRleHQ6IFwidGV4dFwiLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2V0QVRvZG87XG4iXSwibmFtZXMiOlsiR2V0QVRvZG8iLCJnZXRTdGF0aWNQYXRocyIsImZhbGxiYWNrIiwicGF0aHMiLCJwYXJhbXMiLCJ0b2RvSWQiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwcm9wcyIsImRhdGEiLCJpZCIsInRpdGxlIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/[todoId]/index.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/[todoId]/index.tsx"));
module.exports = __webpack_exports__;

})();