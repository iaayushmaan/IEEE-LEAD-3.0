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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/navbar */ \"./src/components/navbar.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction More(props) {\n    var ref, ref1;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const movieid = router.query.pageno;\n    var [movie, setMovie] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    var [backdrop, setBack] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function newMovie() {\n        try {\n            const searchRes = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://api.themoviedb.org/3/movie/\".concat(movieid, \"?api_key=34a470327cec0df094785c27a8b66230\"));\n            setMovie(searchRes.data);\n            setBack(searchRes.data.backdrop_path);\n            console.log(genres);\n        } catch (error) {\n            console.log(error.searchRes);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        newMovie();\n    }, []);\n    console.log(movie);\n    var hrs = Math.floor(movie.runtime / 60);\n    var mins = movie.runtime % 60;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                height: \"100vh\",\n                width: \"100vw\",\n                display: \"flex\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                backgroundImage: \"linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(\".concat(\"https://image.tmdb.org/t/p/original/\".concat(backdrop), \")\")\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: movie.title\n                        }, void 0, false, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"Generated by create next app\"\n                        }, void 0, false, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"/favicon.ico\"\n                        }, void 0, false, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"goBack\",\n                    children: \"Back\"\n                }, void 0, false, {\n                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    alt: \"poster\",\n                    src: \"https://image.tmdb.org/t/p/original\".concat(movie.poster_path),\n                    className: \"posterImg\"\n                }, void 0, false, {\n                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pics\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"fontColor movieTitle\",\n                            children: movie.title\n                        }, void 0, false, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 49,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"fontColor tagline\",\n                            children: movie.tagline\n                        }, void 0, false, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    alt: \"clock\",\n                                    src: \"/duration.png\",\n                                    height: 20,\n                                    width: 20\n                                }, void 0, false, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"fontColor ml7\",\n                                    children: [\n                                        \"Duration : \",\n                                        hrs,\n                                        \"h \",\n                                        mins,\n                                        \"m\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 53,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 51,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    alt: \"clock\",\n                                    src: \"/popularity.png\",\n                                    height: 30,\n                                    width: 30\n                                }, void 0, false, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 56,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"fontColor ml7\",\n                                    children: [\n                                        \"popularity : \",\n                                        movie.popularity\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 57,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 55,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    alt: \"clock\",\n                                    src: \"/imdb.png\",\n                                    height: 20,\n                                    width: 40\n                                }, void 0, false, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"fontColor ml7\",\n                                    children: movie.vote_average\n                                }, void 0, false, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 59,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    alt: \"clock\",\n                                    src: \"/genre.png\",\n                                    height: 20,\n                                    width: 30\n                                }, void 0, false, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 64,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"fontColor ml7\",\n                                    children: [\n                                        \"genre: \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"boxi mr7\",\n                                            children: (ref = movie.genres) === null || ref === void 0 ? void 0 : ref[0].name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                            lineNumber: 65,\n                                            columnNumber: 53\n                                        }, this),\n                                        \"  \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"boxi\",\n                                            children: (ref1 = movie.genres) === null || ref1 === void 0 ? void 0 : ref1[1].name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                            lineNumber: 65,\n                                            columnNumber: 113\n                                        }, this),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 65,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 63,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    alt: \"clock\",\n                                    src: \"/date.png\",\n                                    height: 30,\n                                    width: 30\n                                }, void 0, false, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 68,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"fontColor ml7\",\n                                    style: {\n                                        marginTop: \"5px\"\n                                    },\n                                    children: [\n                                        \"Release Date: \",\n                                        movie.release_date\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 69,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 67,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"fontColor ml7\",\n                                children: movie.overview\n                            }, void 0, false, {\n                                fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                lineNumber: 73,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 71,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(More, \"kYcBq9o5oydQYEql7KH90CHzoxQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = More;\n/* harmony default export */ __webpack_exports__[\"default\"] = (More);\nvar _c;\n$RefreshReg$(_c, \"More\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OENBQ2IsOERBQUN6QyxtREFBS0E7b0NBQUMyQyxLQUFJO29DQUFRQyxLQUFJO29DQUFhaEIsUUFBUTtvQ0FBSUMsT0FBTzs7Ozs7OzhDQUN2RCw4REFBQ2lCO29DQUFFTCxXQUFVOzt3Q0FBZ0I7c0RBQU8sOERBQUNTOzRDQUFLVCxXQUFVO3NEQUFZckMsQ0FBQUEsTUFBQUEsTUFBTWUsTUFBTSxjQUFaZixpQkFBQUEsS0FBQUEsSUFBQUEsR0FBYyxDQUFDLEVBQUUsQ0FBQ2dDLElBQUk7Ozs7Ozt3Q0FBUTtzREFBRSw4REFBQ2M7NENBQUtULFdBQVU7c0RBQVFyQyxDQUFBQSxPQUFBQSxNQUFNZSxNQUFNLGNBQVpmLGtCQUFBQSxLQUFBQSxJQUFBQSxJQUFjLENBQUMsRUFBRSxDQUFDZ0MsSUFBSTs7Ozs7O3dDQUFROzs7Ozs7Ozs7Ozs7O3NDQUV4Siw4REFBQ1Y7NEJBQUllLFdBQVU7OzhDQUNiLDhEQUFDekMsbURBQUtBO29DQUFDMkMsS0FBSTtvQ0FBUUMsS0FBSTtvQ0FBWWhCLFFBQVE7b0NBQUlDLE9BQU87Ozs7Ozs4Q0FDdEQsOERBQUNpQjtvQ0FBRUwsV0FBVTtvQ0FBZ0JkLE9BQU87d0NBQUN3QixXQUFXO29DQUFLOzt3Q0FBRzt3Q0FBZS9DLE1BQU1nRCxZQUFZOzs7Ozs7Ozs7Ozs7O3NDQUUzRiw4REFBQzFCOzRCQUFJZSxXQUFVO3NDQUViLDRFQUFDSztnQ0FBRUwsV0FBVTswQ0FBa0JyQyxNQUFNaUQsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdEO0dBdkVTbkQ7O1FBRVVKLGtEQUFTQTs7O0tBRm5CSTtBQXlFVCwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvW3BhZ2Vub10uanM/NzJhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge1JlYWN0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2YmFyXCI7XG5cbmZ1bmN0aW9uIE1vcmUocHJvcHMpIHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IG1vdmllaWQgPSByb3V0ZXIucXVlcnkucGFnZW5vO1xuXG4gICAgdmFyIFttb3ZpZSwgc2V0TW92aWVdID0gdXNlU3RhdGUoe30pO1xuICAgIHZhciBbYmFja2Ryb3AsIHNldEJhY2tdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBuZXdNb3ZpZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBzZWFyY2hSZXMgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICAgICBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS8ke21vdmllaWR9P2FwaV9rZXk9MzRhNDcwMzI3Y2VjMGRmMDk0Nzg1YzI3YThiNjYyMzBgXG4gICAgICAgICAgICBcbiAgICAgICAgICApO1xuICAgICAgICAgIHNldE1vdmllKHNlYXJjaFJlcy5kYXRhKTtcbiAgICAgICAgICBzZXRCYWNrKHNlYXJjaFJlcy5kYXRhLmJhY2tkcm9wX3BhdGgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGdlbnJlcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3Iuc2VhcmNoUmVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIG5ld01vdmllKCk7XG4gICAgICB9LCBbXSk7XG4gICAgICBjb25zb2xlLmxvZyhtb3ZpZSk7XG5cbiAgICAgIHZhciBocnMgPSBNYXRoLmZsb29yKG1vdmllLnJ1bnRpbWUvNjApO1xuICAgICAgdmFyIG1pbnMgPSBtb3ZpZS5ydW50aW1lJTYwO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiA8TmF2YmFyIC8+ICovfVxuICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogXCIxMDB2aFwiLCB3aWR0aDogXCIxMDB2d1wiLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGJhY2tncm91bmRJbWFnZTogYGxpbmVhci1ncmFkaWVudCggcmdiYSgwLCAwLCAwLCAwLjgpLCByZ2JhKDAsIDAsIDAsIDAuOCkpLCB1cmwoJHtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3Avb3JpZ2luYWwvJHtiYWNrZHJvcH1gfSlgfX0+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPnttb3ZpZS50aXRsZX08L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb0JhY2tcIj5CYWNrPC9kaXY+XG4gICAgICAgIDxpbWcgYWx0PVwicG9zdGVyXCIgc3JjPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3Avb3JpZ2luYWwke21vdmllLnBvc3Rlcl9wYXRofWB9IGNsYXNzTmFtZSA9IFwicG9zdGVySW1nXCI+PC9pbWc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWNzXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRDb2xvciBtb3ZpZVRpdGxlXCI+e21vdmllLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udENvbG9yIHRhZ2xpbmVcIj57bW92aWUudGFnbGluZX08L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVyYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiY2xvY2tcIiBzcmM9XCIvZHVyYXRpb24ucG5nXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfS8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udENvbG9yIG1sN1wiPkR1cmF0aW9uIDoge2hyc31oIHttaW5zfW08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cmF0aW9uXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIGFsdD1cImNsb2NrXCIgc3JjPVwiL3BvcHVsYXJpdHkucG5nXCIgaGVpZ2h0PXszMH0gd2lkdGg9ezMwfS8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udENvbG9yIG1sN1wiPnBvcHVsYXJpdHkgOiB7KG1vdmllLnBvcHVsYXJpdHkpfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVyYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiY2xvY2tcIiBzcmM9XCIvaW1kYi5wbmdcIiBoZWlnaHQ9ezIwfSB3aWR0aD17NDB9Lz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250Q29sb3IgbWw3XCI+eyhtb3ZpZS52b3RlX2F2ZXJhZ2UpfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVyYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiY2xvY2tcIiBzcmM9XCIvZ2VucmUucG5nXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezMwfS8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udENvbG9yIG1sN1wiPmdlbnJlOiA8c3BhbiBjbGFzc05hbWU9XCJib3hpIG1yN1wiPnttb3ZpZS5nZW5yZXM/LlswXS5uYW1lfTwvc3Bhbj4gIDxzcGFuIGNsYXNzTmFtZT1cImJveGlcIj57bW92aWUuZ2VucmVzPy5bMV0ubmFtZX08L3NwYW4+IDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVyYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiY2xvY2tcIiBzcmM9XCIvZGF0ZS5wbmdcIiBoZWlnaHQ9ezMwfSB3aWR0aD17MzB9Lz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250Q29sb3IgbWw3XCIgc3R5bGU9e3ttYXJnaW5Ub3A6IFwiNXB4XCJ9fT5SZWxlYXNlIERhdGU6IHttb3ZpZS5yZWxlYXNlX2RhdGV9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXJhdGlvblwiPlxuICAgICAgICAgICAgICAgIHsvKiA8SW1hZ2UgYWx0PVwiY2xvY2tcIiBzcmM9XCIvYWJvdXQucG5nXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfS8+ICovfVxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRDb2xvciBtbDdcIj57KG1vdmllLm92ZXJ2aWV3KX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9yZSJdLCJuYW1lcyI6WyJheGlvcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJIZWFkIiwiSW1hZ2UiLCJOYXZiYXIiLCJNb3JlIiwicHJvcHMiLCJtb3ZpZSIsInJvdXRlciIsIm1vdmllaWQiLCJxdWVyeSIsInBhZ2VubyIsInNldE1vdmllIiwiYmFja2Ryb3AiLCJzZXRCYWNrIiwibmV3TW92aWUiLCJzZWFyY2hSZXMiLCJnZXQiLCJkYXRhIiwiYmFja2Ryb3BfcGF0aCIsImNvbnNvbGUiLCJsb2ciLCJnZW5yZXMiLCJlcnJvciIsImhycyIsIk1hdGgiLCJmbG9vciIsInJ1bnRpbWUiLCJtaW5zIiwiZGl2Iiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiY2xhc3NOYW1lIiwiaW1nIiwiYWx0Iiwic3JjIiwicG9zdGVyX3BhdGgiLCJwIiwidGFnbGluZSIsInBvcHVsYXJpdHkiLCJ2b3RlX2F2ZXJhZ2UiLCJzcGFuIiwibWFyZ2luVG9wIiwicmVsZWFzZV9kYXRlIiwib3ZlcnZpZXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/[pageno].js\n"));

/***/ })

});