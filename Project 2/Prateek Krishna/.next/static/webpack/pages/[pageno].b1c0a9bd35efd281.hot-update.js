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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction More(props) {\n    var ref, ref1, ref2, ref3;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const movieid = router.query.pageno;\n    var [movie, setMovie] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    var [backdrop, setBack] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function newMovie() {\n        try {\n            const searchRes = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://api.themoviedb.org/3/movie/\".concat(movieid, \"?api_key=34a470327cec0df094785c27a8b66230\"));\n            setMovie(searchRes.data);\n            setBack(searchRes.data.backdrop_path);\n            console.log(genres);\n        } catch (error) {\n            console.log(error.searchRes);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        newMovie();\n    }, []);\n    console.log(movie);\n    var hrs = Math.floor(movie.runtime / 60);\n    var mins = movie.runtime % 60;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"dynamicPage\",\n            style: {\n                backgroundImage: \"linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(\".concat(\"https://image.tmdb.org/t/p/original/\".concat(backdrop), \")\")\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: movie.title\n                        }, void 0, false, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"Generated by create next app\"\n                        }, void 0, false, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"/favicon.ico\"\n                        }, void 0, false, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"goBack\",\n                    onClick: ()=>router.back(),\n                    children: \"←Back\"\n                }, void 0, false, {\n                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    alt: \"poster\",\n                    src: \"https://image.tmdb.org/t/p/original\".concat(movie.poster_path),\n                    className: \"posterImg\"\n                }, void 0, false, {\n                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pics\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"fontColor movieTitle\",\n                            children: movie.title\n                        }, void 0, false, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 48,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"fontColor tagline\",\n                            children: movie.tagline\n                        }, void 0, false, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 49,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    alt: \"clock\",\n                                    src: \"/duration.png\",\n                                    height: 20,\n                                    width: 20\n                                }, void 0, false, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"fontColor ml7\",\n                                    children: [\n                                        \"Duration : \",\n                                        hrs,\n                                        \"h \",\n                                        mins,\n                                        \"m\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    alt: \"clock\",\n                                    src: \"/popularity.png\",\n                                    height: 30,\n                                    width: 30\n                                }, void 0, false, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 55,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"fontColor ml7\",\n                                    children: [\n                                        \"popularity : \",\n                                        movie.popularity\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 56,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 54,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    alt: \"clock\",\n                                    src: \"/imdb.png\",\n                                    height: 20,\n                                    width: 40\n                                }, void 0, false, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 59,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"fontColor ml7\",\n                                    children: movie.vote_average\n                                }, void 0, false, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    alt: \"clock\",\n                                    src: \"/genre.png\",\n                                    height: 20,\n                                    width: 30\n                                }, void 0, false, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 63,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"fontColor ml7\",\n                                    children: [\n                                        \"genre: \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"boxi mr7\",\n                                            children: (ref = movie.genres) === null || ref === void 0 ? void 0 : (ref1 = ref[0]) === null || ref1 === void 0 ? void 0 : ref1.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                            lineNumber: 64,\n                                            columnNumber: 53\n                                        }, this),\n                                        \"  \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"boxi\",\n                                            children: (ref2 = movie.genres) === null || ref2 === void 0 ? void 0 : (ref3 = ref2[1]) === null || ref3 === void 0 ? void 0 : ref3.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                            lineNumber: 64,\n                                            columnNumber: 114\n                                        }, this),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 64,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 62,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    alt: \"clock\",\n                                    src: \"/date.png\",\n                                    height: 30,\n                                    width: 30\n                                }, void 0, false, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 67,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"fontColor ml7\",\n                                    style: {\n                                        marginTop: \"5px\"\n                                    },\n                                    children: [\n                                        \"Release Date: \",\n                                        movie.release_date\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 68,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 66,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"fontColor ml7\",\n                                children: movie.overview\n                            }, void 0, false, {\n                                fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                lineNumber: 72,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 70,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(More, \"kYcBq9o5oydQYEql7KH90CHzoxQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = More;\n/* harmony default export */ __webpack_exports__[\"default\"] = (More);\nvar _c;\n$RefreshReg$(_c, \"More\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUk7b0NBQVFDLEtBQUk7b0NBQWFJLFFBQVE7b0NBQUlDLE9BQU87Ozs7Ozs4Q0FDdkQsOERBQUNIO29DQUFFaEIsV0FBVTs7d0NBQWdCO3NEQUFPLDhEQUFDc0I7NENBQUt0QixXQUFVO3NEQUFZdkIsQ0FBQUEsTUFBQUEsTUFBTWUsTUFBTSxjQUFaZixpQkFBQUEsS0FBQUEsSUFBQUEsUUFBQUEsR0FBYyxDQUFDLEVBQUUsZ0NBQWpCQSxLQUFBQSxTQUFtQjRCLElBQUY7Ozs7Ozt3Q0FBYztzREFBRSw4REFBQ2lCOzRDQUFLdEIsV0FBVTtzREFBUXZCLENBQUFBLE9BQUFBLE1BQU1lLE1BQU0sY0FBWmYsa0JBQUFBLEtBQUFBLElBQUFBLFFBQUFBLElBQWMsQ0FBQyxFQUFFLGdDQUFqQkEsS0FBQUEsU0FBbUI0QixJQUFGOzs7Ozs7d0NBQWM7Ozs7Ozs7Ozs7Ozs7c0NBRTFKLDhEQUFDTjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUMxQixtREFBS0E7b0NBQUN1QyxLQUFJO29DQUFRQyxLQUFJO29DQUFZSSxRQUFRO29DQUFJQyxPQUFPOzs7Ozs7OENBQ3RELDhEQUFDSDtvQ0FBRWhCLFdBQVU7b0NBQWdCQyxPQUFPO3dDQUFDc0IsV0FBVztvQ0FBSzs7d0NBQUc7d0NBQWU5QyxNQUFNK0MsWUFBWTs7Ozs7Ozs7Ozs7OztzQ0FFM0YsOERBQUN6Qjs0QkFBSUMsV0FBVTtzQ0FFYiw0RUFBQ2dCO2dDQUFFaEIsV0FBVTswQ0FBa0J2QixNQUFNZ0QsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdEO0dBdkVTbEQ7O1FBRVVILGtEQUFTQTs7O0tBRm5CRztBQXlFVCwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvW3BhZ2Vub10uanM/NzJhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge1JlYWN0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmZ1bmN0aW9uIE1vcmUocHJvcHMpIHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IG1vdmllaWQgPSByb3V0ZXIucXVlcnkucGFnZW5vO1xuXG4gICAgdmFyIFttb3ZpZSwgc2V0TW92aWVdID0gdXNlU3RhdGUoe30pO1xuICAgIHZhciBbYmFja2Ryb3AsIHNldEJhY2tdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBuZXdNb3ZpZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBzZWFyY2hSZXMgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgICAgICBgaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS8ke21vdmllaWR9P2FwaV9rZXk9MzRhNDcwMzI3Y2VjMGRmMDk0Nzg1YzI3YThiNjYyMzBgXG4gICAgICAgICAgICBcbiAgICAgICAgICApO1xuICAgICAgICAgIHNldE1vdmllKHNlYXJjaFJlcy5kYXRhKTtcbiAgICAgICAgICBzZXRCYWNrKHNlYXJjaFJlcy5kYXRhLmJhY2tkcm9wX3BhdGgpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGdlbnJlcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3Iuc2VhcmNoUmVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIG5ld01vdmllKCk7XG4gICAgICB9LCBbXSk7XG4gICAgICBjb25zb2xlLmxvZyhtb3ZpZSk7XG5cbiAgICAgIHZhciBocnMgPSBNYXRoLmZsb29yKG1vdmllLnJ1bnRpbWUvNjApO1xuICAgICAgdmFyIG1pbnMgPSBtb3ZpZS5ydW50aW1lJTYwO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiA8TmF2YmFyIC8+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkeW5hbWljUGFnZVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KCByZ2JhKDAsIDAsIDAsIDAuOCksIHJnYmEoMCwgMCwgMCwgMC44KSksIHVybCgke2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC8ke2JhY2tkcm9wfWB9KWB9fT5cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+e21vdmllLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvQmFja1wiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9ID7ihpBCYWNrPC9kaXY+XG4gICAgICAgIDxpbWcgYWx0PVwicG9zdGVyXCIgc3JjPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3Avb3JpZ2luYWwke21vdmllLnBvc3Rlcl9wYXRofWB9IGNsYXNzTmFtZSA9IFwicG9zdGVySW1nXCI+PC9pbWc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWNzXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRDb2xvciBtb3ZpZVRpdGxlXCI+e21vdmllLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udENvbG9yIHRhZ2xpbmVcIj57bW92aWUudGFnbGluZX08L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVyYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiY2xvY2tcIiBzcmM9XCIvZHVyYXRpb24ucG5nXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezIwfS8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udENvbG9yIG1sN1wiPkR1cmF0aW9uIDoge2hyc31oIHttaW5zfW08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cmF0aW9uXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIGFsdD1cImNsb2NrXCIgc3JjPVwiL3BvcHVsYXJpdHkucG5nXCIgaGVpZ2h0PXszMH0gd2lkdGg9ezMwfS8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udENvbG9yIG1sN1wiPnBvcHVsYXJpdHkgOiB7KG1vdmllLnBvcHVsYXJpdHkpfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVyYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiY2xvY2tcIiBzcmM9XCIvaW1kYi5wbmdcIiBoZWlnaHQ9ezIwfSB3aWR0aD17NDB9Lz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250Q29sb3IgbWw3XCI+eyhtb3ZpZS52b3RlX2F2ZXJhZ2UpfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVyYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiY2xvY2tcIiBzcmM9XCIvZ2VucmUucG5nXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezMwfS8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udENvbG9yIG1sN1wiPmdlbnJlOiA8c3BhbiBjbGFzc05hbWU9XCJib3hpIG1yN1wiPnttb3ZpZS5nZW5yZXM/LlswXT8ubmFtZX08L3NwYW4+ICA8c3BhbiBjbGFzc05hbWU9XCJib3hpXCI+e21vdmllLmdlbnJlcz8uWzFdPy5uYW1lfTwvc3Bhbj4gPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXJhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBhbHQ9XCJjbG9ja1wiIHNyYz1cIi9kYXRlLnBuZ1wiIGhlaWdodD17MzB9IHdpZHRoPXszMH0vPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRDb2xvciBtbDdcIiBzdHlsZT17e21hcmdpblRvcDogXCI1cHhcIn19PlJlbGVhc2UgRGF0ZToge21vdmllLnJlbGVhc2VfZGF0ZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cmF0aW9uXCI+XG4gICAgICAgICAgICAgICAgey8qIDxJbWFnZSBhbHQ9XCJjbG9ja1wiIHNyYz1cIi9hYm91dC5wbmdcIiBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9Lz4gKi99XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udENvbG9yIG1sN1wiPnsobW92aWUub3ZlcnZpZXcpfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb3JlIl0sIm5hbWVzIjpbImF4aW9zIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkhlYWQiLCJJbWFnZSIsIk1vcmUiLCJwcm9wcyIsIm1vdmllIiwicm91dGVyIiwibW92aWVpZCIsInF1ZXJ5IiwicGFnZW5vIiwic2V0TW92aWUiLCJiYWNrZHJvcCIsInNldEJhY2siLCJuZXdNb3ZpZSIsInNlYXJjaFJlcyIsImdldCIsImRhdGEiLCJiYWNrZHJvcF9wYXRoIiwiY29uc29sZSIsImxvZyIsImdlbnJlcyIsImVycm9yIiwiaHJzIiwiTWF0aCIsImZsb29yIiwicnVudGltZSIsIm1pbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJvbkNsaWNrIiwiYmFjayIsImltZyIsImFsdCIsInNyYyIsInBvc3Rlcl9wYXRoIiwicCIsInRhZ2xpbmUiLCJoZWlnaHQiLCJ3aWR0aCIsInBvcHVsYXJpdHkiLCJ2b3RlX2F2ZXJhZ2UiLCJzcGFuIiwibWFyZ2luVG9wIiwicmVsZWFzZV9kYXRlIiwib3ZlcnZpZXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/[pageno].js\n"));

/***/ })

});