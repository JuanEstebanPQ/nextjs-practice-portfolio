"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile */ \"./profile.js\");\n\n\n\nconst PostCard = (param)=>/*#__PURE__*/ {\n    let { post } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-md-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: post.imageURL,\n                        className: \"card-img-top\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Esteban\\\\Desktop\\\\PracticasExp\\\\nextjs-practice-portfolio-master\\\\pages\\\\blog.js\",\n                        lineNumber: 8,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Esteban\\\\Desktop\\\\PracticasExp\\\\nextjs-practice-portfolio-master\\\\pages\\\\blog.js\",\n                    lineNumber: 7,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-body\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Esteban\\\\Desktop\\\\PracticasExp\\\\nextjs-practice-portfolio-master\\\\pages\\\\blog.js\",\n                            lineNumber: 11,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: post.content\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Esteban\\\\Desktop\\\\PracticasExp\\\\nextjs-practice-portfolio-master\\\\pages\\\\blog.js\",\n                            lineNumber: 12,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                            href: \"/post?title=\".concat(post.title),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn btn-light\",\n                                children: \"Read\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Esteban\\\\Desktop\\\\PracticasExp\\\\nextjs-practice-portfolio-master\\\\pages\\\\blog.js\",\n                                lineNumber: 14,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Esteban\\\\Desktop\\\\PracticasExp\\\\nextjs-practice-portfolio-master\\\\pages\\\\blog.js\",\n                            lineNumber: 13,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Esteban\\\\Desktop\\\\PracticasExp\\\\nextjs-practice-portfolio-master\\\\pages\\\\blog.js\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Esteban\\\\Desktop\\\\PracticasExp\\\\nextjs-practice-portfolio-master\\\\pages\\\\blog.js\",\n            lineNumber: 6,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Esteban\\\\Desktop\\\\PracticasExp\\\\nextjs-practice-portfolio-master\\\\pages\\\\blog.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PostCard;\nconst Blog = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        footer: false,\n        title: \"My blog\",\n        dark: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: _profile__WEBPACK_IMPORTED_MODULE_2__.posts.map((post, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PostCard, {\n                    post: post\n                }, i, false, {\n                    fileName: \"C:\\\\Users\\\\Esteban\\\\Desktop\\\\PracticasExp\\\\nextjs-practice-portfolio-master\\\\pages\\\\blog.js\",\n                    lineNumber: 27,\n                    columnNumber: 21\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Esteban\\\\Desktop\\\\PracticasExp\\\\nextjs-practice-portfolio-master\\\\pages\\\\blog.js\",\n            lineNumber: 24,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Esteban\\\\Desktop\\\\PracticasExp\\\\nextjs-practice-portfolio-master\\\\pages\\\\blog.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n_c1 = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c, _c1;\n$RefreshReg$(_c, \"PostCard\");\n$RefreshReg$(_c1, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUNQO0FBRWxDLE1BQU1FLFdBQVc7UUFBQyxFQUFFQyxJQUFJLEVBQUU7V0FDdEIsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ0M7d0JBQUlDLEtBQUtKLEtBQUtLO3dCQUFVSCxXQUFVOzs7Ozs7Ozs7Ozs4QkFFdkMsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0k7c0NBQUlOLEtBQUtPOzs7Ozs7c0NBQ1YsOERBQUNDO3NDQUFHUixLQUFLUzs7Ozs7O3NDQUNULDhEQUFDQzs0QkFBS0MsTUFBTSxlQUEwQixPQUFYWCxLQUFLTztzQ0FDNUIsNEVBQUNLO2dDQUFPVixXQUFVOzBDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk3QztLQWRISDtBQWtCTixNQUFNYyxPQUFPLGtCQUNULDhEQUFDaEIsMERBQU1BO1FBQUNpQixRQUFRO1FBQU9QLE9BQU07UUFBVVEsSUFBSTtrQkFDdkMsNEVBQUNkO1lBQUlDLFdBQVU7c0JBRVBKLDJDQUFLQSxDQUFDa0IsSUFBSSxDQUFDaEIsTUFBTWlCLGtCQUNiLDhEQUFDbEI7b0JBQVNDLE1BQU1BO21CQUFXaUI7Ozs7Ozs7Ozs7Ozs7OztNQUx6Q0o7QUFZTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9nLmpzP2NiYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7IHBvc3RzIH0gZnJvbSAnLi4vcHJvZmlsZSdcblxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvd1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwb3N0LmltYWdlVVJMfSBjbGFzc05hbWU9J2NhcmQtaW1nLXRvcCcgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICA8cD57cG9zdC5jb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwb3N0LnRpdGxlfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGlnaHRcIj5SZWFkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuKVxuXG5cbmNvbnN0IEJsb2cgPSAoKSA9PiAoXG4gICAgPExheW91dCBmb290ZXI9e2ZhbHNlfSB0aXRsZT1cIk15IGJsb2dcIiBkYXJrPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBvc3RzLm1hcCgocG9zdCwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8UG9zdENhcmQgcG9zdD17cG9zdH0ga2V5PXtpfSAvPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nOyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJwb3N0cyIsIlBvc3RDYXJkIiwicG9zdCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImltYWdlVVJMIiwiaDEiLCJ0aXRsZSIsInAiLCJjb250ZW50IiwiTGluayIsImhyZWYiLCJidXR0b24iLCJCbG9nIiwiZm9vdGVyIiwiZGFyayIsIm1hcCIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog.js\n"));

/***/ })

});