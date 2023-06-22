"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/github",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ \"./components/navbar.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Layout = (param)=>{\n    let { children, title, footer = true, dark = false } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handlerRouteChange = (url)=>{\n            console.log(url);\n            nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();\n        };\n        router.events.on(\"routeChangeStart\", handlerRouteChange);\n        router.events.on(\"routeChangeComplete\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_4___default().done());\n        return ()=>{\n            router.events.off(\"routeChangeStart\", handlerRouteChange);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: dark ? \"bg-dark\" : \"\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Esteban\\\\Desktop\\\\PracticasExp\\\\nextjs-practice-portfolio-master\\\\components\\\\Layout.js\",\n                lineNumber: 27,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"container py-4\",\n                children: [\n                    title,\n                    children\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Esteban\\\\Desktop\\\\PracticasExp\\\\nextjs-practice-portfolio-master\\\\components\\\\Layout.js\",\n                lineNumber: 28,\n                columnNumber: 5\n            }, undefined),\n            footer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-dark text-light text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"caontainer p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"\\xa9 Ryan Ray Portfolio\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Esteban\\\\Desktop\\\\PracticasExp\\\\nextjs-practice-portfolio-master\\\\components\\\\Layout.js\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"2000 - \",\n                                new Date().getFullYear()\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Esteban\\\\Desktop\\\\PracticasExp\\\\nextjs-practice-portfolio-master\\\\components\\\\Layout.js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"All rights Reserved.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Esteban\\\\Desktop\\\\PracticasExp\\\\nextjs-practice-portfolio-master\\\\components\\\\Layout.js\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Esteban\\\\Desktop\\\\PracticasExp\\\\nextjs-practice-portfolio-master\\\\components\\\\Layout.js\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Esteban\\\\Desktop\\\\PracticasExp\\\\nextjs-practice-portfolio-master\\\\components\\\\Layout.js\",\n                lineNumber: 37,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Esteban\\\\Desktop\\\\PracticasExp\\\\nextjs-practice-portfolio-master\\\\components\\\\Layout.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDSDtBQUNTO0FBQ0w7QUFFakMsTUFBTUksU0FBUztRQUFDLEVBQUNDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxTQUFTLElBQUksRUFBRUMsT0FBTyxLQUFLLEVBQUM7O0lBRTFELE1BQU1DLFNBQVNQLHNEQUFTQTtJQUV4QkYsZ0RBQVNBLENBQUM7UUFDTixNQUFNVSxxQkFBc0JDLENBQUFBO1lBQ3hCQyxRQUFRQyxJQUFJRjtZQUNaUixzREFBZVc7UUFDbkI7UUFFQUwsT0FBT00sT0FBT0MsR0FBRyxvQkFBb0JOO1FBRXJDRCxPQUFPTSxPQUFPQyxHQUFHLHVCQUFzQixJQUFNYixxREFBY2M7UUFFM0QsT0FBTztZQUNIUixPQUFPTSxPQUFPRyxJQUFJLG9CQUFvQlI7UUFDMUM7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ1M7UUFBSUMsV0FBV1osT0FBTyxZQUFZOzswQkFDdkMsOERBQUNQLCtDQUFNQTs7Ozs7MEJBQ1AsOERBQUNvQjtnQkFBS0QsV0FBVTs7b0JBR1JkO29CQUVQRDs7Ozs7OztZQUdPRSx3QkFDSSw4REFBQ0E7Z0JBQU9hLFdBQVU7MEJBQ2xCLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNFO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNDOztnQ0FBRTtnQ0FBUSxJQUFJQyxPQUFPQzs7Ozs7OztzQ0FDdEIsOERBQUNGO3NDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF2QjtHQTNDTW5COztRQUVhRixrREFBU0E7OztLQUZ0QkU7QUE4Q04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanM/NTE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL25hdmJhcidcbmltcG9ydCAge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcydcblxuY29uc3QgTGF5b3V0ID0gKHtjaGlsZHJlbiwgdGl0bGUsIGZvb3RlciA9IHRydWUsIGRhcmsgPSBmYWxzZX0pID0+IHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlclJvdXRlQ2hhbmdlID0gIHVybCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cmwpXG4gICAgICAgICAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVyUm91dGVDaGFuZ2UpXG5cbiAgICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVyUm91dGVDaGFuZ2UpXG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkYXJrID8gJ2JnLWRhcmsnIDogJyd9PlxuICAgIDxOYXZiYXIvPlxuICAgIDxtYWluIGNsYXNzTmFtZT0nY29udGFpbmVyIHB5LTQnPlxuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlIFxuICAgICAgICB9XG4gICAge2NoaWxkcmVufVxuICAgIDwvbWFpbj5cbiAgICAgICAge1xuICAgICAgICAgICAgZm9vdGVyICYmKFxuICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPSdiZy1kYXJrIHRleHQtbGlnaHQgdGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FvbnRhaW5lciBwLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPiZjb3B5OyBSeWFuIFJheSBQb3J0Zm9saW88L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cD4yMDAwIC0ge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkFsbCByaWdodHMgUmVzZXJ2ZWQuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgICAgICApICAgXG4gICAgICAgIH1cbiAgICA8L2Rpdj5cbiAgICApXG59XG4gICAgXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiTmF2YmFyIiwidXNlUm91dGVyIiwiTlByb2dyZXNzIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImZvb3RlciIsImRhcmsiLCJyb3V0ZXIiLCJoYW5kbGVyUm91dGVDaGFuZ2UiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwic3RhcnQiLCJldmVudHMiLCJvbiIsImRvbmUiLCJvZmYiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluIiwiaDEiLCJwIiwiRGF0ZSIsImdldEZ1bGxZZWFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n"));

/***/ })

});