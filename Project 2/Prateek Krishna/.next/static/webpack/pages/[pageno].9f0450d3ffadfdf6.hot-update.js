"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[pageno]",{

/***/ "./src/pages/[pageno].js":
/*!*******************************!*\
  !*** ./src/pages/[pageno].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction More(props) {\n    var ref, ref1;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const movieid = router.query.pageno;\n    var [movie, setMovie] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    var [backdrop, setBack] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function newMovie() {\n        try {\n            const searchRes = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://api.themoviedb.org/3/movie/\".concat(movieid, \"?api_key=34a470327cec0df094785c27a8b66230\"));\n            setMovie(searchRes.data);\n            setBack(searchRes.data.backdrop_path);\n            console.log(genres);\n        } catch (error) {\n            console.log(error.searchRes);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        newMovie();\n    }, []);\n    console.log(movie);\n    var hrs = Math.floor(movie.runtime / 60);\n    var mins = movie.runtime % 60;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                height: \"100vh\",\n                width: \"100vw\",\n                display: \"flex\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                backgroundImage: \"linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(\".concat(\"https://image.tmdb.org/t/p/original/\".concat(backdrop), \")\")\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: movie.title\n                        }, void 0, false, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"Generated by create next app\"\n                        }, void 0, false, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"/favicon.ico\"\n                        }, void 0, false, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"goBack\",\n                    onClick: ()=>router.back(),\n                    children: \"←Back\"\n                }, void 0, false, {\n                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    alt: \"poster\",\n                    src: \"https://image.tmdb.org/t/p/original\".concat(movie.poster_path),\n                    className: \"posterImg\"\n                }, void 0, false, {\n                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pics\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"fontColor movieTitle\",\n                            children: movie.title\n                        }, void 0, false, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 48,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"fontColor tagline\",\n                            children: movie.tagline\n                        }, void 0, false, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 49,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    alt: \"clock\",\n                                    src: \"/duration.png\",\n                                    height: 20,\n                                    width: 20\n                                }, void 0, false, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"fontColor ml7\",\n                                    children: [\n                                        \"Duration : \",\n                                        hrs,\n                                        \"h \",\n                                        mins,\n                                        \"m\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    alt: \"clock\",\n                                    src: \"/popularity.png\",\n                                    height: 30,\n                                    width: 30\n                                }, void 0, false, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 55,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"fontColor ml7\",\n                                    children: [\n                                        \"popularity : \",\n                                        movie.popularity\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 56,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 54,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    alt: \"clock\",\n                                    src: \"/imdb.png\",\n                                    height: 20,\n                                    width: 40\n                                }, void 0, false, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 59,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"fontColor ml7\",\n                                    children: movie.vote_average\n                                }, void 0, false, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    alt: \"clock\",\n                                    src: \"/genre.png\",\n                                    height: 20,\n                                    width: 30\n                                }, void 0, false, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 63,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"fontColor ml7\",\n                                    children: [\n                                        \"genre: \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"boxi mr7\",\n                                            children: (ref = movie.genres) === null || ref === void 0 ? void 0 : ref[0].name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                            lineNumber: 64,\n                                            columnNumber: 53\n                                        }, this),\n                                        \"  \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"boxi\",\n                                            children: (ref1 = movie.genres) === null || ref1 === void 0 ? void 0 : ref1[1].name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                            lineNumber: 64,\n                                            columnNumber: 113\n                                        }, this),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 64,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 62,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    alt: \"clock\",\n                                    src: \"/date.png\",\n                                    height: 30,\n                                    width: 30\n                                }, void 0, false, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 67,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"fontColor ml7\",\n                                    style: {\n                                        marginTop: \"5px\"\n                                    },\n                                    children: [\n                                        \"Release Date: \",\n                                        movie.release_date\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 68,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 66,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"fontColor ml7\",\n                                children: movie.overview\n                            }, void 0, false, {\n                                fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                lineNumber: 72,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 70,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(More, \"kYcBq9o5oydQYEql7KH90CHzoxQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = More;\n/* harmony default export */ __webpack_exports__[\"default\"] = (More);\nvar _c;\n$RefreshReg$(_c, \"More\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkQsOERBQUN6Qjs0QkFBSWUsV0FBVTs7OENBQ2IsOERBQUN4QyxtREFBS0E7b0NBQUM0QyxLQUFJO29DQUFRQyxLQUFJO29DQUFhbEIsUUFBUTtvQ0FBSUMsT0FBTzs7Ozs7OzhDQUN2RCw4REFBQ21CO29DQUFFUCxXQUFVOzt3Q0FBZ0I7c0RBQU8sOERBQUNXOzRDQUFLWCxXQUFVO3NEQUFZckMsQ0FBQUEsTUFBQUEsTUFBTWUsTUFBTSxjQUFaZixpQkFBQUEsS0FBQUEsSUFBQUEsR0FBYyxDQUFDLEVBQUUsQ0FBQ2dDLElBQUk7Ozs7Ozt3Q0FBUTtzREFBRSw4REFBQ2dCOzRDQUFLWCxXQUFVO3NEQUFRckMsQ0FBQUEsT0FBQUEsTUFBTWUsTUFBTSxjQUFaZixrQkFBQUEsS0FBQUEsSUFBQUEsSUFBYyxDQUFDLEVBQUUsQ0FBQ2dDLElBQUk7Ozs7Ozt3Q0FBUTs7Ozs7Ozs7Ozs7OztzQ0FFeEosOERBQUNWOzRCQUFJZSxXQUFVOzs4Q0FDYiw4REFBQ3hDLG1EQUFLQTtvQ0FBQzRDLEtBQUk7b0NBQVFDLEtBQUk7b0NBQVlsQixRQUFRO29DQUFJQyxPQUFPOzs7Ozs7OENBQ3RELDhEQUFDbUI7b0NBQUVQLFdBQVU7b0NBQWdCZCxPQUFPO3dDQUFDMEIsV0FBVztvQ0FBSzs7d0NBQUc7d0NBQWVqRCxNQUFNa0QsWUFBWTs7Ozs7Ozs7Ozs7OztzQ0FFM0YsOERBQUM1Qjs0QkFBSWUsV0FBVTtzQ0FFYiw0RUFBQ087Z0NBQUVQLFdBQVU7MENBQWtCckMsTUFBTW1ELFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU03RDtHQXZFU3JEOztRQUVVSCxrREFBU0E7OztLQUZuQkc7QUF5RVQsK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL1twYWdlbm9dLmpzPzcyYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHtSZWFjdCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5mdW5jdGlvbiBNb3JlKHByb3BzKSB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBtb3ZpZWlkID0gcm91dGVyLnF1ZXJ5LnBhZ2VubztcblxuICAgIHZhciBbbW92aWUsIHNldE1vdmllXSA9IHVzZVN0YXRlKHt9KTtcbiAgICB2YXIgW2JhY2tkcm9wLCBzZXRCYWNrXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gbmV3TW92aWUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3Qgc2VhcmNoUmVzID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvJHttb3ZpZWlkfT9hcGlfa2V5PTM0YTQ3MDMyN2NlYzBkZjA5NDc4NWMyN2E4YjY2MjMwYFxuICAgICAgICAgICAgXG4gICAgICAgICAgKTtcbiAgICAgICAgICBzZXRNb3ZpZShzZWFyY2hSZXMuZGF0YSk7XG4gICAgICAgICAgc2V0QmFjayhzZWFyY2hSZXMuZGF0YS5iYWNrZHJvcF9wYXRoKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhnZW5yZXMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnNlYXJjaFJlcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBuZXdNb3ZpZSgpO1xuICAgICAgfSwgW10pO1xuICAgICAgY29uc29sZS5sb2cobW92aWUpO1xuXG4gICAgICB2YXIgaHJzID0gTWF0aC5mbG9vcihtb3ZpZS5ydW50aW1lLzYwKTtcbiAgICAgIHZhciBtaW5zID0gbW92aWUucnVudGltZSU2MDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogPE5hdmJhciAvPiAqL31cbiAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IFwiMTAwdmhcIiwgd2lkdGg6IFwiMTAwdndcIiwgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQoIHJnYmEoMCwgMCwgMCwgMC44KSwgcmdiYSgwLCAwLCAwLCAwLjgpKSwgdXJsKCR7YGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsLyR7YmFja2Ryb3B9YH0pYH19PlxuICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT57bW92aWUudGl0bGV9PC90aXRsZT5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ29CYWNrXCIgb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0gPuKGkEJhY2s8L2Rpdj5cbiAgICAgICAgPGltZyBhbHQ9XCJwb3N0ZXJcIiBzcmM9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbCR7bW92aWUucG9zdGVyX3BhdGh9YH0gY2xhc3NOYW1lID0gXCJwb3N0ZXJJbWdcIj48L2ltZz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpY3NcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udENvbG9yIG1vdmllVGl0bGVcIj57bW92aWUudGl0bGV9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250Q29sb3IgdGFnbGluZVwiPnttb3ZpZS50YWdsaW5lfTwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXJhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBhbHQ9XCJjbG9ja1wiIHNyYz1cIi9kdXJhdGlvbi5wbmdcIiBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9Lz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250Q29sb3IgbWw3XCI+RHVyYXRpb24gOiB7aHJzfWgge21pbnN9bTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVyYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiY2xvY2tcIiBzcmM9XCIvcG9wdWxhcml0eS5wbmdcIiBoZWlnaHQ9ezMwfSB3aWR0aD17MzB9Lz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250Q29sb3IgbWw3XCI+cG9wdWxhcml0eSA6IHsobW92aWUucG9wdWxhcml0eSl9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXJhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBhbHQ9XCJjbG9ja1wiIHNyYz1cIi9pbWRiLnBuZ1wiIGhlaWdodD17MjB9IHdpZHRoPXs0MH0vPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRDb2xvciBtbDdcIj57KG1vdmllLnZvdGVfYXZlcmFnZSl9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXJhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBhbHQ9XCJjbG9ja1wiIHNyYz1cIi9nZW5yZS5wbmdcIiBoZWlnaHQ9ezIwfSB3aWR0aD17MzB9Lz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250Q29sb3IgbWw3XCI+Z2VucmU6IDxzcGFuIGNsYXNzTmFtZT1cImJveGkgbXI3XCI+e21vdmllLmdlbnJlcz8uWzBdLm5hbWV9PC9zcGFuPiAgPHNwYW4gY2xhc3NOYW1lPVwiYm94aVwiPnttb3ZpZS5nZW5yZXM/LlsxXS5uYW1lfTwvc3Bhbj4gPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXJhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBhbHQ9XCJjbG9ja1wiIHNyYz1cIi9kYXRlLnBuZ1wiIGhlaWdodD17MzB9IHdpZHRoPXszMH0vPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRDb2xvciBtbDdcIiBzdHlsZT17e21hcmdpblRvcDogXCI1cHhcIn19PlJlbGVhc2UgRGF0ZToge21vdmllLnJlbGVhc2VfZGF0ZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cmF0aW9uXCI+XG4gICAgICAgICAgICAgICAgey8qIDxJbWFnZSBhbHQ9XCJjbG9ja1wiIHNyYz1cIi9hYm91dC5wbmdcIiBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9Lz4gKi99XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udENvbG9yIG1sN1wiPnsobW92aWUub3ZlcnZpZXcpfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3JlIl0sIm5hbWVzIjpbImF4aW9zIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkhlYWQiLCJJbWFnZSIsIk1vcmUiLCJwcm9wcyIsIm1vdmllIiwicm91dGVyIiwibW92aWVpZCIsInF1ZXJ5IiwicGFnZW5vIiwic2V0TW92aWUiLCJiYWNrZHJvcCIsInNldEJhY2siLCJuZXdNb3ZpZSIsInNlYXJjaFJlcyIsImdldCIsImRhdGEiLCJiYWNrZHJvcF9wYXRoIiwiY29uc29sZSIsImxvZyIsImdlbnJlcyIsImVycm9yIiwiaHJzIiwiTWF0aCIsImZsb29yIiwicnVudGltZSIsIm1pbnMiLCJkaXYiLCJzdHlsZSIsImhlaWdodCIsIndpZHRoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRJbWFnZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiYmFjayIsImltZyIsImFsdCIsInNyYyIsInBvc3Rlcl9wYXRoIiwicCIsInRhZ2xpbmUiLCJwb3B1bGFyaXR5Iiwidm90ZV9hdmVyYWdlIiwic3BhbiIsIm1hcmdpblRvcCIsInJlbGVhc2VfZGF0ZSIsIm92ZXJ2aWV3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[pageno].js\n"));

/***/ })

});