"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/UI/TodoTable.tsx":
/*!*****************************************!*\
  !*** ./src/components/UI/TodoTable.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n\n\nvar _this = undefined;\n\n\nvar TodoTable = function(param) {\n    var todos = param.todos;\n    var onRemoveTodo = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(function(id) {\n            var response;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            fetch(\"http://localhost:3000/todos/\".concat(id), {\n                                method: \"DELETE\"\n                            })\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        return [\n                            2,\n                            response\n                        ];\n                }\n            });\n        });\n        return function onRemoveTodo(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableContainer, {\n        component: _mui_material__WEBPACK_IMPORTED_MODULE_3__.Paper,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Table, {\n            sx: {\n                minWidth: 650\n            },\n            \"aria-label\": \"simple table\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableHead, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableRow, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                children: \"Todo ID\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nickshaut/Documents/todo-nestjs/fe-todo/src/components/UI/TodoTable.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                align: \"right\",\n                                children: \"Title\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nickshaut/Documents/todo-nestjs/fe-todo/src/components/UI/TodoTable.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                align: \"right\",\n                                children: \"Text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nickshaut/Documents/todo-nestjs/fe-todo/src/components/UI/TodoTable.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                align: \"right\",\n                                children: \"Created\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nickshaut/Documents/todo-nestjs/fe-todo/src/components/UI/TodoTable.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                align: \"right\",\n                                children: \"Updated\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nickshaut/Documents/todo-nestjs/fe-todo/src/components/UI/TodoTable.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nickshaut/Documents/todo-nestjs/fe-todo/src/components/UI/TodoTable.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/nickshaut/Documents/todo-nestjs/fe-todo/src/components/UI/TodoTable.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableBody, {\n                    children: todos.map(function(todo) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableRow, {\n                            sx: {\n                                \"&:last-child td, &:last-child th\": {\n                                    border: 0\n                                }\n                            },\n                            onClick: function() {\n                                return onRemoveTodo(todo.id);\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                    component: \"th\",\n                                    scope: \"row\",\n                                    children: todo.id\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickshaut/Documents/todo-nestjs/fe-todo/src/components/UI/TodoTable.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                    align: \"right\",\n                                    children: todo.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickshaut/Documents/todo-nestjs/fe-todo/src/components/UI/TodoTable.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                    align: \"right\",\n                                    children: todo.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickshaut/Documents/todo-nestjs/fe-todo/src/components/UI/TodoTable.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                    align: \"right\",\n                                    children: todo.createdAt\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickshaut/Documents/todo-nestjs/fe-todo/src/components/UI/TodoTable.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.TableCell, {\n                                    align: \"right\",\n                                    children: todo.updatedAt\n                                }, void 0, false, {\n                                    fileName: \"/Users/nickshaut/Documents/todo-nestjs/fe-todo/src/components/UI/TodoTable.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, todo.id, true, {\n                            fileName: \"/Users/nickshaut/Documents/todo-nestjs/fe-todo/src/components/UI/TodoTable.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/nickshaut/Documents/todo-nestjs/fe-todo/src/components/UI/TodoTable.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/nickshaut/Documents/todo-nestjs/fe-todo/src/components/UI/TodoTable.tsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/nickshaut/Documents/todo-nestjs/fe-todo/src/components/UI/TodoTable.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_c = TodoTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoTable);\nvar _c;\n$RefreshReg$(_c, \"TodoTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VSS9Ub2RvVGFibGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBUXVCO0FBV3ZCLElBQU1PLFlBQTZCLGdCQUFlO1FBQVpDLGNBQUFBO0lBQ3BDLElBQU1DO21CQUFlLDZGQUFPQyxJQUFlO2dCQUNuQ0M7Ozs7d0JBQVc7OzRCQUFNQyxNQUFNLCtCQUFrQyxPQUFIRixLQUFNO2dDQUNoRUcsUUFBUTs0QkFDVjs7O3dCQUZNRixXQUFXO3dCQUlqQjs7NEJBQU9BOzs7O1FBQ1Q7d0JBTk1GLGFBQXNCQzs7OztJQVE1QixxQkFDRSw4REFBQ1QseURBQWNBO1FBQUNhLFdBQVdSLGdEQUFLQTtrQkFDOUIsNEVBQUNOLGdEQUFLQTtZQUFDZSxJQUFJO2dCQUFFQyxVQUFVO1lBQUk7WUFBR0MsY0FBVzs7OEJBQ3ZDLDhEQUFDZixvREFBU0E7OEJBQ1IsNEVBQUNDLG1EQUFRQTs7MENBQ1AsOERBQUNDLG9EQUFTQTswQ0FBQzs7Ozs7OzBDQUNYLDhEQUFDQSxvREFBU0E7Z0NBQUNjLE9BQU07MENBQVE7Ozs7OzswQ0FDekIsOERBQUNkLG9EQUFTQTtnQ0FBQ2MsT0FBTTswQ0FBUTs7Ozs7OzBDQUN6Qiw4REFBQ2Qsb0RBQVNBO2dDQUFDYyxPQUFNOzBDQUFROzs7Ozs7MENBQ3pCLDhEQUFDZCxvREFBU0E7Z0NBQUNjLE9BQU07MENBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUc3Qiw4REFBQ2Isb0RBQVNBOzhCQUNQRyxNQUFNVyxHQUFHLENBQUMsU0FBQ0M7NkNBQ1YsOERBQUNqQixtREFBUUE7NEJBRVBZLElBQUk7Z0NBQUUsb0NBQW9DO29DQUFFTSxRQUFRO2dDQUFFOzRCQUFFOzRCQUN4REMsU0FBUzt1Q0FBTWIsYUFBYVcsS0FBS1YsRUFBRTs7OzhDQUVuQyw4REFBQ04sb0RBQVNBO29DQUFDVSxXQUFVO29DQUFLUyxPQUFNOzhDQUM3QkgsS0FBS1YsRUFBRTs7Ozs7OzhDQUVWLDhEQUFDTixvREFBU0E7b0NBQUNjLE9BQU07OENBQVNFLEtBQUtJLEtBQUs7Ozs7Ozs4Q0FDcEMsOERBQUNwQixvREFBU0E7b0NBQUNjLE9BQU07OENBQVNFLEtBQUtLLElBQUk7Ozs7Ozs4Q0FDbkMsOERBQUNyQixvREFBU0E7b0NBQUNjLE9BQU07OENBQVNFLEtBQUtNLFNBQVM7Ozs7Ozs4Q0FDeEMsOERBQUN0QixvREFBU0E7b0NBQUNjLE9BQU07OENBQVNFLEtBQUtPLFNBQVM7Ozs7Ozs7MkJBVm5DUCxLQUFLVixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUIxQjtLQXpDTUg7QUEyQ04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVUkvVG9kb1RhYmxlLnRzeD8zYjhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFRhYmxlLFxuICBUYWJsZUNvbnRhaW5lcixcbiAgVGFibGVIZWFkLFxuICBUYWJsZVJvdyxcbiAgVGFibGVDZWxsLFxuICBUYWJsZUJvZHksXG4gIFBhcGVyLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIi4uLy4uL21vZGVscy90b2RvXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xufVxuXG5jb25zdCBUb2RvVGFibGU6IHsgdG9kb3M6IFRvZG8gfSA9ICh7IHRvZG9zIH0pID0+IHtcbiAgY29uc3Qgb25SZW1vdmVUb2RvID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9kb3MvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGVDb250YWluZXIgY29tcG9uZW50PXtQYXBlcn0+XG4gICAgICA8VGFibGUgc3g9e3sgbWluV2lkdGg6IDY1MCB9fSBhcmlhLWxhYmVsPVwic2ltcGxlIHRhYmxlXCI+XG4gICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgPFRhYmxlQ2VsbD5Ub2RvIElEPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwicmlnaHRcIj5UaXRsZTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+VGV4dDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+Q3JlYXRlZDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+VXBkYXRlZDwvVGFibGVDZWxsPlxuICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICA8VGFibGVCb2R5PlxuICAgICAgICAgIHt0b2Rvcy5tYXAoKHRvZG86IFRvZG8pID0+IChcbiAgICAgICAgICAgIDxUYWJsZVJvd1xuICAgICAgICAgICAgICBrZXk9e3RvZG8uaWR9XG4gICAgICAgICAgICAgIHN4PXt7IFwiJjpsYXN0LWNoaWxkIHRkLCAmOmxhc3QtY2hpbGQgdGhcIjogeyBib3JkZXI6IDAgfSB9fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblJlbW92ZVRvZG8odG9kby5pZCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIHt0b2RvLmlkfVxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3RvZG8udGl0bGV9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPnt0b2RvLnRleHR9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJyaWdodFwiPnt0b2RvLmNyZWF0ZWRBdH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cInJpZ2h0XCI+e3RvZG8udXBkYXRlZEF0fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgIDwvVGFibGVDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvVGFibGU7XG4iXSwibmFtZXMiOlsiVGFibGUiLCJUYWJsZUNvbnRhaW5lciIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiVGFibGVDZWxsIiwiVGFibGVCb2R5IiwiUGFwZXIiLCJUb2RvVGFibGUiLCJ0b2RvcyIsIm9uUmVtb3ZlVG9kbyIsImlkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImNvbXBvbmVudCIsInN4IiwibWluV2lkdGgiLCJhcmlhLWxhYmVsIiwiYWxpZ24iLCJtYXAiLCJ0b2RvIiwiYm9yZGVyIiwib25DbGljayIsInNjb3BlIiwidGl0bGUiLCJ0ZXh0IiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/UI/TodoTable.tsx\n"));

/***/ })

});