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
exports.id = "pages/new-todo";
exports.ids = ["pages/new-todo"];
exports.modules = {

/***/ "./src/components/NewTodo/NewTodo.tsx":
/*!********************************************!*\
  !*** ./src/components/NewTodo/NewTodo.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst NewTodo = (props)=>{\n    const titleRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const textRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const submitHandler = (event)=>{\n        event.preventDefault();\n        const enteredTitle = titleRef.current.value;\n        const enteredText = textRef.current.value;\n        const todoData = {\n            title: enteredTitle,\n            text: enteredText\n        };\n        props.onAddTodo(todoData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: submitHandler,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                inputRef: titleRef,\n                fullWidth: true,\n                id: \"filled-basic\",\n                label: \"Title\",\n                variant: \"filled\",\n                type: \"text\"\n            }, void 0, false, {\n                fileName: \"/Users/nickshaut/Documents/todo-nestjs/fe-todo/src/components/NewTodo/NewTodo.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                inputRef: textRef,\n                fullWidth: true,\n                id: \"filled-basic\",\n                label: \"Text\",\n                variant: \"filled\",\n                type: \"text\"\n            }, void 0, false, {\n                fileName: \"/Users/nickshaut/Documents/todo-nestjs/fe-todo/src/components/NewTodo/NewTodo.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                type: \"submit\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/nickshaut/Documents/todo-nestjs/fe-todo/src/components/NewTodo/NewTodo.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nickshaut/Documents/todo-nestjs/fe-todo/src/components/NewTodo/NewTodo.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTodo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OZXdUb2RvL05ld1RvZG8udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFrRDtBQUNuQjtBQUUvQixNQUFNRyxVQUFVLENBQUNDLFFBQVU7SUFDekIsTUFBTUMsV0FBV0gsNkNBQU1BLENBQW1CLElBQUk7SUFDOUMsTUFBTUksVUFBVUosNkNBQU1BLENBQW1CLElBQUk7SUFFN0MsTUFBTUssZ0JBQWdCLENBQUNDLFFBQVU7UUFDL0JBLE1BQU1DLGNBQWM7UUFFcEIsTUFBTUMsZUFBZUwsU0FBU00sT0FBTyxDQUFDQyxLQUFLO1FBQzNDLE1BQU1DLGNBQWNQLFFBQVFLLE9BQU8sQ0FBRUMsS0FBSztRQUUxQyxNQUFNRSxXQUFXO1lBQ2ZDLE9BQU9MO1lBQ1BNLE1BQU1IO1FBQ1I7UUFFQVQsTUFBTWEsU0FBUyxDQUFDSDtJQUNsQjtJQUVBLHFCQUNFLDhEQUFDSTtRQUFLQyxVQUFVWjs7MEJBQ2QsOERBQUNOLG9EQUFTQTtnQkFDUm1CLFVBQVVmO2dCQUNWZ0IsU0FBUztnQkFDVEMsSUFBRztnQkFDSEMsT0FBTTtnQkFDTkMsU0FBUTtnQkFDUkMsTUFBSzs7Ozs7OzBCQUVQLDhEQUFDeEIsb0RBQVNBO2dCQUNSbUIsVUFBVWQ7Z0JBQ1ZlLFNBQVM7Z0JBQ1RDLElBQUc7Z0JBQ0hDLE9BQU07Z0JBQ05DLFNBQVE7Z0JBQ1JDLE1BQUs7Ozs7OzswQkFFUCw4REFBQ3pCLGlEQUFNQTtnQkFBQ3lCLE1BQUs7MEJBQVM7Ozs7Ozs7Ozs7OztBQUc1QjtBQUVBLGlFQUFldEIsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZlLXRvZG8vLi9zcmMvY29tcG9uZW50cy9OZXdUb2RvL05ld1RvZG8udHN4P2RmMDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBUZXh0RmllbGQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IE5ld1RvZG8gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgdGl0bGVSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHRleHRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBlbnRlcmVkVGl0bGUgPSB0aXRsZVJlZi5jdXJyZW50LnZhbHVlO1xuICAgIGNvbnN0IGVudGVyZWRUZXh0ID0gdGV4dFJlZi5jdXJyZW50IS52YWx1ZTtcblxuICAgIGNvbnN0IHRvZG9EYXRhID0ge1xuICAgICAgdGl0bGU6IGVudGVyZWRUaXRsZSxcbiAgICAgIHRleHQ6IGVudGVyZWRUZXh0LFxuICAgIH07XG5cbiAgICBwcm9wcy5vbkFkZFRvZG8odG9kb0RhdGEpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgPFRleHRGaWVsZFxuICAgICAgICBpbnB1dFJlZj17dGl0bGVSZWZ9XG4gICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICBpZD1cImZpbGxlZC1iYXNpY1wiXG4gICAgICAgIGxhYmVsPVwiVGl0bGVcIlxuICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgLz5cbiAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgaW5wdXRSZWY9e3RleHRSZWZ9XG4gICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICBpZD1cImZpbGxlZC1iYXNpY1wiXG4gICAgICAgIGxhYmVsPVwiVGV4dFwiXG4gICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAvPlxuICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9CdXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3VG9kbztcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJUZXh0RmllbGQiLCJ1c2VSZWYiLCJOZXdUb2RvIiwicHJvcHMiLCJ0aXRsZVJlZiIsInRleHRSZWYiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyZWRUaXRsZSIsImN1cnJlbnQiLCJ2YWx1ZSIsImVudGVyZWRUZXh0IiwidG9kb0RhdGEiLCJ0aXRsZSIsInRleHQiLCJvbkFkZFRvZG8iLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dFJlZiIsImZ1bGxXaWR0aCIsImlkIiwibGFiZWwiLCJ2YXJpYW50IiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NewTodo/NewTodo.tsx\n");

/***/ }),

/***/ "./src/pages/new-todo/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/new-todo/index.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NewTodo_NewTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/NewTodo/NewTodo */ \"./src/components/NewTodo/NewTodo.tsx\");\n\n\nconst NewTodoPage = ()=>{\n    const addTodoHandler = async (todoData)=>{\n        const response = await fetch(\"http://localhost:3000/todos\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(todoData)\n        });\n        return response;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewTodo_NewTodo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        onAddTodo: addTodoHandler\n    }, void 0, false, {\n        fileName: \"/Users/nickshaut/Documents/todo-nestjs/fe-todo/src/pages/new-todo/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTodoPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbmV3LXRvZG8vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUF1RDtBQUV2RCxNQUFNQyxjQUFjLElBQU07SUFDeEIsTUFBTUMsaUJBQWlCLE9BQU9DLFdBQWE7UUFDekMsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLCtCQUErQjtZQUMxREMsUUFBUTtZQUNSQyxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtZQUM5Q0MsTUFBTUMsS0FBS0MsU0FBUyxDQUFDUDtRQUN2QjtRQUNBLE9BQU9DO0lBQ1Q7SUFFQSxxQkFBTyw4REFBQ0osbUVBQU9BO1FBQUNXLFdBQVdUOzs7Ozs7QUFDN0I7QUFFQSxpRUFBZUQsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZlLXRvZG8vLi9zcmMvcGFnZXMvbmV3LXRvZG8vaW5kZXgudHN4PzJmYTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5ld1RvZG8gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTmV3VG9kby9OZXdUb2RvXCI7XG5cbmNvbnN0IE5ld1RvZG9QYWdlID0gKCkgPT4ge1xuICBjb25zdCBhZGRUb2RvSGFuZGxlciA9IGFzeW5jICh0b2RvRGF0YSkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9kb3NcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRvZG9EYXRhKSxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH07XG5cbiAgcmV0dXJuIDxOZXdUb2RvIG9uQWRkVG9kbz17YWRkVG9kb0hhbmRsZXJ9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3VG9kb1BhZ2U7XG4iXSwibmFtZXMiOlsiTmV3VG9kbyIsIk5ld1RvZG9QYWdlIiwiYWRkVG9kb0hhbmRsZXIiLCJ0b2RvRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvbkFkZFRvZG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/new-todo/index.tsx\n");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/new-todo/index.tsx"));
module.exports = __webpack_exports__;

})();