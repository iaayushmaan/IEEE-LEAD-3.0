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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/navbar */ \"./src/components/navbar.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction More(props) {\n    var ref, ref1, ref2, ref3;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const movieid = router.query.pageno;\n    var [movie, setMovie] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    var [backdrop, setBack] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function newMovie() {\n        try {\n            const searchRes = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://api.themoviedb.org/3/movie/\".concat(movieid, \"?api_key=34a470327cec0df094785c27a8b66230\"));\n            setMovie(searchRes.data);\n            setBack(searchRes.data.backdrop_path);\n            console.log(genres);\n        } catch (error) {\n            console.log(error.searchRes);\n        }\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        newMovie();\n    }, []);\n    console.log(movie);\n    var hrs = Math.floor(movie.runtime / 60);\n    var mins = movie.runtime % 60;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                height: \"100vh\",\n                width: \"100vw\",\n                display: \"flex\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                backgroundImage: \"linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(\".concat(\"https://image.tmdb.org/t/p/original/\".concat(backdrop), \")\")\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: movie.title\n                        }, void 0, false, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"Generated by create next app\"\n                        }, void 0, false, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"icon\",\n                            href: \"/favicon.ico\"\n                        }, void 0, false, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    alt: \"poster\",\n                    src: \"https://image.tmdb.org/t/p/original\".concat(movie.poster_path),\n                    className: \"posterImg\"\n                }, void 0, false, {\n                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"pics\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"fontColor movieTitle\",\n                            children: movie.title\n                        }, void 0, false, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 48,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"fontColor tagline\",\n                            children: movie.tagline\n                        }, void 0, false, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 49,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    alt: \"clock\",\n                                    src: \"/duration.png\",\n                                    height: 20,\n                                    width: 20\n                                }, void 0, false, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 51,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"fontColor ml7\",\n                                    children: [\n                                        \"Duration : \",\n                                        hrs,\n                                        \"h \",\n                                        mins,\n                                        \"m\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 52,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    alt: \"clock\",\n                                    src: \"/popularity.png\",\n                                    height: 30,\n                                    width: 30\n                                }, void 0, false, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 55,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"fontColor ml7\",\n                                    children: [\n                                        \"popularity : \",\n                                        movie.popularity\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 56,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 54,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    alt: \"clock\",\n                                    src: \"/imdb.png\",\n                                    height: 20,\n                                    width: 40\n                                }, void 0, false, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 59,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"fontColor ml7\",\n                                    children: movie.vote_average\n                                }, void 0, false, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 58,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    alt: \"clock\",\n                                    src: \"/genre.png\",\n                                    height: 20,\n                                    width: 30\n                                }, void 0, false, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 63,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"fontColor ml7\",\n                                    children: [\n                                        \"genre: \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"boxi mr7\",\n                                            children: (ref = movie.genres) === null || ref === void 0 ? void 0 : ref[0].name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                            lineNumber: 64,\n                                            columnNumber: 53\n                                        }, this),\n                                        \"  \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"boxi\",\n                                            children: (ref1 = movie.genres) === null || ref1 === void 0 ? void 0 : ref1[1].name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                            lineNumber: 64,\n                                            columnNumber: 113\n                                        }, this),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 64,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 62,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"fontColor ml7\",\n                                children: movie.overview\n                            }, void 0, false, {\n                                fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                lineNumber: 68,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 66,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"duration\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    alt: \"clock\",\n                                    src: \"/date.png\",\n                                    height: 30,\n                                    width: 30\n                                }, void 0, false, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 71,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"fontColor ml7\",\n                                    style: {\n                                        marginTop\n                                    },\n                                    children: [\n                                        \"Release Date: \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"boxi mr7\",\n                                            children: (ref2 = movie.genres) === null || ref2 === void 0 ? void 0 : ref2[0].name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                            lineNumber: 72,\n                                            columnNumber: 80\n                                        }, this),\n                                        \"  \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"boxi\",\n                                            children: (ref3 = movie.genres) === null || ref3 === void 0 ? void 0 : ref3[1].name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                            lineNumber: 72,\n                                            columnNumber: 140\n                                        }, this),\n                                        \" \"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                                    lineNumber: 72,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                            lineNumber: 70,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/prateek/WebDev/next/onlymovies/src/pages/[pageno].js\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(More, \"kYcBq9o5oydQYEql7KH90CHzoxQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = More;\n/* harmony default export */ __webpack_exports__[\"default\"] = (More);\nvar _c;\n$RefreshReg$(_c, \"More\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9bcGFnZW5vXS5qcz83MmEzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7UmVhY3QsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcblxuZnVuY3Rpb24gTW9yZShwcm9wcykge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgbW92aWVpZCA9IHJvdXRlci5xdWVyeS5wYWdlbm87XG5cbiAgICB2YXIgW21vdmllLCBzZXRNb3ZpZV0gPSB1c2VTdGF0ZSh7fSk7XG4gICAgdmFyIFtiYWNrZHJvcCwgc2V0QmFja10gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGFzeW5jIGZ1bmN0aW9uIG5ld01vdmllKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHNlYXJjaFJlcyA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgICAgIGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllLyR7bW92aWVpZH0/YXBpX2tleT0zNGE0NzAzMjdjZWMwZGYwOTQ3ODVjMjdhOGI2NjIzMGBcbiAgICAgICAgICAgIFxuICAgICAgICAgICk7XG4gICAgICAgICAgc2V0TW92aWUoc2VhcmNoUmVzLmRhdGEpO1xuICAgICAgICAgIHNldEJhY2soc2VhcmNoUmVzLmRhdGEuYmFja2Ryb3BfcGF0aCk7XG4gICAgICAgICAgY29uc29sZS5sb2coZ2VucmVzKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5zZWFyY2hSZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgbmV3TW92aWUoKTtcbiAgICAgIH0sIFtdKTtcbiAgICAgIGNvbnNvbGUubG9nKG1vdmllKTtcblxuICAgICAgdmFyIGhycyA9IE1hdGguZmxvb3IobW92aWUucnVudGltZS82MCk7XG4gICAgICB2YXIgbWlucyA9IG1vdmllLnJ1bnRpbWUlNjA7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIDxOYXZiYXIgLz4gKi99XG4gICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiBcIjEwMHZoXCIsIHdpZHRoOiBcIjEwMHZ3XCIsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgYmFja2dyb3VuZEltYWdlOiBgbGluZWFyLWdyYWRpZW50KCByZ2JhKDAsIDAsIDAsIDAuOCksIHJnYmEoMCwgMCwgMCwgMC44KSksIHVybCgke2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC8ke2JhY2tkcm9wfWB9KWB9fT5cbiAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+e21vdmllLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8aW1nIGFsdD1cInBvc3RlclwiIHNyYz17YGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsJHttb3ZpZS5wb3N0ZXJfcGF0aH1gfSBjbGFzc05hbWUgPSBcInBvc3RlckltZ1wiPjwvaW1nPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGljc1wiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250Q29sb3IgbW92aWVUaXRsZVwiPnttb3ZpZS50aXRsZX08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRDb2xvciB0YWdsaW5lXCI+e21vdmllLnRhZ2xpbmV9PC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cmF0aW9uXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIGFsdD1cImNsb2NrXCIgc3JjPVwiL2R1cmF0aW9uLnBuZ1wiIGhlaWdodD17MjB9IHdpZHRoPXsyMH0vPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRDb2xvciBtbDdcIj5EdXJhdGlvbiA6IHtocnN9aCB7bWluc31tPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdXJhdGlvblwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBhbHQ9XCJjbG9ja1wiIHNyYz1cIi9wb3B1bGFyaXR5LnBuZ1wiIGhlaWdodD17MzB9IHdpZHRoPXszMH0vPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRDb2xvciBtbDdcIj5wb3B1bGFyaXR5IDogeyhtb3ZpZS5wb3B1bGFyaXR5KX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cmF0aW9uXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIGFsdD1cImNsb2NrXCIgc3JjPVwiL2ltZGIucG5nXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezQwfS8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udENvbG9yIG1sN1wiPnsobW92aWUudm90ZV9hdmVyYWdlKX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cmF0aW9uXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIGFsdD1cImNsb2NrXCIgc3JjPVwiL2dlbnJlLnBuZ1wiIGhlaWdodD17MjB9IHdpZHRoPXszMH0vPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRDb2xvciBtbDdcIj5nZW5yZTogPHNwYW4gY2xhc3NOYW1lPVwiYm94aSBtcjdcIj57bW92aWUuZ2VucmVzPy5bMF0ubmFtZX08L3NwYW4+ICA8c3BhbiBjbGFzc05hbWU9XCJib3hpXCI+e21vdmllLmdlbnJlcz8uWzFdLm5hbWV9PC9zcGFuPiA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR1cmF0aW9uXCI+XG4gICAgICAgICAgICAgICAgey8qIDxJbWFnZSBhbHQ9XCJjbG9ja1wiIHNyYz1cIi9hYm91dC5wbmdcIiBoZWlnaHQ9ezIwfSB3aWR0aD17MjB9Lz4gKi99XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udENvbG9yIG1sN1wiPnsobW92aWUub3ZlcnZpZXcpfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHVyYXRpb25cIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2UgYWx0PVwiY2xvY2tcIiBzcmM9XCIvZGF0ZS5wbmdcIiBoZWlnaHQ9ezMwfSB3aWR0aD17MzB9Lz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250Q29sb3IgbWw3XCIgc3R5bGU9e3ttYXJnaW5Ub3B9fT5SZWxlYXNlIERhdGU6IDxzcGFuIGNsYXNzTmFtZT1cImJveGkgbXI3XCI+e21vdmllLmdlbnJlcz8uWzBdLm5hbWV9PC9zcGFuPiAgPHNwYW4gY2xhc3NOYW1lPVwiYm94aVwiPnttb3ZpZS5nZW5yZXM/LlsxXS5uYW1lfTwvc3Bhbj4gPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vcmUiXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiSGVhZCIsIkltYWdlIiwiTmF2YmFyIiwiTW9yZSIsInByb3BzIiwibW92aWUiLCJyb3V0ZXIiLCJtb3ZpZWlkIiwicXVlcnkiLCJwYWdlbm8iLCJzZXRNb3ZpZSIsImJhY2tkcm9wIiwic2V0QmFjayIsIm5ld01vdmllIiwic2VhcmNoUmVzIiwiZ2V0IiwiZGF0YSIsImJhY2tkcm9wX3BhdGgiLCJjb25zb2xlIiwibG9nIiwiZ2VucmVzIiwiZXJyb3IiLCJocnMiLCJNYXRoIiwiZmxvb3IiLCJydW50aW1lIiwibWlucyIsImRpdiIsInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYmFja2dyb3VuZEltYWdlIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImltZyIsImFsdCIsInNyYyIsInBvc3Rlcl9wYXRoIiwiY2xhc3NOYW1lIiwicCIsInRhZ2xpbmUiLCJwb3B1bGFyaXR5Iiwidm90ZV9hdmVyYWdlIiwic3BhbiIsIm92ZXJ2aWV3IiwibWFyZ2luVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[pageno].js\n"));

/***/ })

});