"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[2]!./src/styles/globals.css":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[2]!./src/styles/globals.css ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\nhtml,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n\\n.footer{\\n  min-height: 200px;\\n  width: 100%;\\n  margin-top: 10px;\\n  padding-top: 10px;\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\\n  border: 1px solid grey;\\n  justify-content: start;\\n}\\n\\n.logo{\\n  margin-left: 4vw;\\n  margin-right: 4vw;\\n  margin-top: 20px;\\n  margin-bottom: 45px;\\n}\\n.divider{\\n  margin-top: 10px;\\n  margin-bottom: 10px;\\n  border-radius: 10px;\\n  height: 5px;\\n  width: 100%;\\n  background-color: grey;\\n}\\n.ratingNo{\\n  margin-bottom: 15px;\\n}\\n.posterImg{\\n  height: 90vh;\\n  width: 30%;\\n  border-radius: 12px 0 0 12px;\\n  align-items: center;\\n  /* margin-left: 35px; */\\n}\\n.pics{\\n  display: flex;\\n  flex-direction: column;\\n  height: 90vh;\\n  width: 70vw;\\n  background-color: rgba(229,229,229, 0.2);\\n  border-radius: 0 12px 12px 0;\\n  padding: 10px;\\n  margin-right: 20px;\\n}\\n.fontColor{\\n  color: white;\\n}\\n.movieTitle{\\n  font-size: 70px;\\n}\\n.tagline{\\n  margin-left: 30px;\\n  margin-bottom: 20px;\\n}\\n.duration{\\n  display: flex;\\n  margin-top: 30px;\\n  margin-left: 30px;\\n}\\n.ml7{\\n  margin-left: 7px;\\n}\\n.mr7{\\n  margin-right: 7px;\\n}\\n.boxi{\\n  background-color: white;\\n  color: black;\\n  border-radius: 5px;\\n  font-weight: 500;\\n}\\n.mt30{\\n  margin-top: 30px;\\n}\\n.goBack{\\n  height: 30px;\\n  width: 80px;\\n  background-color: white;\\n  border-radius: 5px;\\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\\n  align-items: center;\\n  display: flex;\\n  justify-content: center;\\n  margin-top: -92vh;\\n  margin-left: 5px;\\n  cursor: pointer;\\n}\\n.dynamicPage{\\n  min-height: 100vh;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.dpnav{\\n  display: none;\\n}\\n.search-btn{\\n  height: 25%;\\n  width: 90px;\\n  border-radius: 20px;\\n  border: 0px;\\n  margin-left: 15px;\\n  background-color: aqua;\\n  cursor: pointer;\\n}\\n.searchIcon{\\n  display: none;\\n}\\n.searchInput{\\n  height: 25%;\\n  margin-top: 70px;\\n  width: 30vw;\\n  border-radius: 12px;\\n  align-items: center;\\n  padding-left: 20px;\\n}\\n@media screen and (max-width:769px){\\n  .dpnav{\\n    display: block;\\n  }\\n  .dynamicPage{\\n    height: 100%;\\n    width: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n  }\\n  .movieTitle{\\n    font-size: 30px;\\n  }\\n  .goBack{\\n    display: none;\\n  }\\n  .posterImg{\\n    height: 10%;\\n    width: 85%;\\n    border-radius: 12px 12px 12px 12px;\\n    align-items: center;\\n    margin-top: 30px;\\n    margin-bottom: 50px;\\n    justify-content: center;\\n    margin-right: 0px;\\n    margin-left: 0px;\\n  }\\n  .pics{\\n    display: flex;\\n    flex-direction: column;\\n    height: 80%;\\n    width: 95%;\\n    background-color: rgba(229,229,229, 0.2);\\n    border-radius: 12px 12px 12px 12px;\\n    justify-content: center;\\n    margin-bottom: 20px;\\n    margin-right: 0px;\\n    align-items: center;\\n    /* padding: 10px; */\\n    /* margin-right: 20px; */\\n  }\\n  .search-btn{\\n    display: none;\\n  }\\n  .searchIcon{\\n    display: block;\\n  }\\n\\n}\\n/* @media (prefers-color-scheme: dark) {\\n  html {\\n    color-scheme: dark;\\n  }\\n  body {\\n    color: white;\\n    background: #3C4048;\\n  }\\n} */\\n\\n/*my styles*/\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/globals.css\"],\"names\":[],\"mappings\":\";AACA;;EAEE,UAAU;EACV,SAAS;EACT;wEACsE;AACxE;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;;AAGA;EACE,iBAAiB;EACjB,WAAW;EACX,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,uCAAuC;EACvC,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;EACnB,WAAW;EACX,WAAW;EACX,sBAAsB;AACxB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,UAAU;EACV,4BAA4B;EAC5B,mBAAmB;EACnB,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,WAAW;EACX,wCAAwC;EACxC,4BAA4B;EAC5B,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,YAAY;AACd;AACA;EACE,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,kBAAkB;EAClB,uCAAuC;EACvC,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;AACf;AACA;EACE,WAAW;EACX,WAAW;EACX,mBAAmB;EACnB,WAAW;EACX,iBAAiB;EACjB,sBAAsB;EACtB,eAAe;AACjB;AACA;EACE,aAAa;AACf;AACA;EACE,WAAW;EACX,gBAAgB;EAChB,WAAW;EACX,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;AACpB;AACA;EACE;IACE,cAAc;EAChB;EACA;IACE,YAAY;IACZ,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;EACrB;EACA;IACE,eAAe;EACjB;EACA;IACE,aAAa;EACf;EACA;IACE,WAAW;IACX,UAAU;IACV,kCAAkC;IAClC,mBAAmB;IACnB,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,gBAAgB;EAClB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,UAAU;IACV,wCAAwC;IACxC,kCAAkC;IAClC,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;IACnB,mBAAmB;IACnB,wBAAwB;EAC1B;EACA;IACE,aAAa;EACf;EACA;IACE,cAAc;EAChB;;AAEF;AACA;;;;;;;;GAQG;;AAEH,YAAY\",\"sourcesContent\":[\"\\nhtml,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n\\n.footer{\\n  min-height: 200px;\\n  width: 100%;\\n  margin-top: 10px;\\n  padding-top: 10px;\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\\n  border: 1px solid grey;\\n  justify-content: start;\\n}\\n\\n.logo{\\n  margin-left: 4vw;\\n  margin-right: 4vw;\\n  margin-top: 20px;\\n  margin-bottom: 45px;\\n}\\n.divider{\\n  margin-top: 10px;\\n  margin-bottom: 10px;\\n  border-radius: 10px;\\n  height: 5px;\\n  width: 100%;\\n  background-color: grey;\\n}\\n.ratingNo{\\n  margin-bottom: 15px;\\n}\\n.posterImg{\\n  height: 90vh;\\n  width: 30%;\\n  border-radius: 12px 0 0 12px;\\n  align-items: center;\\n  /* margin-left: 35px; */\\n}\\n.pics{\\n  display: flex;\\n  flex-direction: column;\\n  height: 90vh;\\n  width: 70vw;\\n  background-color: rgba(229,229,229, 0.2);\\n  border-radius: 0 12px 12px 0;\\n  padding: 10px;\\n  margin-right: 20px;\\n}\\n.fontColor{\\n  color: white;\\n}\\n.movieTitle{\\n  font-size: 70px;\\n}\\n.tagline{\\n  margin-left: 30px;\\n  margin-bottom: 20px;\\n}\\n.duration{\\n  display: flex;\\n  margin-top: 30px;\\n  margin-left: 30px;\\n}\\n.ml7{\\n  margin-left: 7px;\\n}\\n.mr7{\\n  margin-right: 7px;\\n}\\n.boxi{\\n  background-color: white;\\n  color: black;\\n  border-radius: 5px;\\n  font-weight: 500;\\n}\\n.mt30{\\n  margin-top: 30px;\\n}\\n.goBack{\\n  height: 30px;\\n  width: 80px;\\n  background-color: white;\\n  border-radius: 5px;\\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\\n  align-items: center;\\n  display: flex;\\n  justify-content: center;\\n  margin-top: -92vh;\\n  margin-left: 5px;\\n  cursor: pointer;\\n}\\n.dynamicPage{\\n  min-height: 100vh;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.dpnav{\\n  display: none;\\n}\\n.search-btn{\\n  height: 25%;\\n  width: 90px;\\n  border-radius: 20px;\\n  border: 0px;\\n  margin-left: 15px;\\n  background-color: aqua;\\n  cursor: pointer;\\n}\\n.searchIcon{\\n  display: none;\\n}\\n.searchInput{\\n  height: 25%;\\n  margin-top: 70px;\\n  width: 30vw;\\n  border-radius: 12px;\\n  align-items: center;\\n  padding-left: 20px;\\n}\\n@media screen and (max-width:769px){\\n  .dpnav{\\n    display: block;\\n  }\\n  .dynamicPage{\\n    height: 100%;\\n    width: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n  }\\n  .movieTitle{\\n    font-size: 30px;\\n  }\\n  .goBack{\\n    display: none;\\n  }\\n  .posterImg{\\n    height: 10%;\\n    width: 85%;\\n    border-radius: 12px 12px 12px 12px;\\n    align-items: center;\\n    margin-top: 30px;\\n    margin-bottom: 50px;\\n    justify-content: center;\\n    margin-right: 0px;\\n    margin-left: 0px;\\n  }\\n  .pics{\\n    display: flex;\\n    flex-direction: column;\\n    height: 80%;\\n    width: 95%;\\n    background-color: rgba(229,229,229, 0.2);\\n    border-radius: 12px 12px 12px 12px;\\n    justify-content: center;\\n    margin-bottom: 20px;\\n    margin-right: 0px;\\n    align-items: center;\\n    /* padding: 10px; */\\n    /* margin-right: 20px; */\\n  }\\n  .search-btn{\\n    display: none;\\n  }\\n  .searchIcon{\\n    display: block;\\n  }\\n\\n}\\n/* @media (prefers-color-scheme: dark) {\\n  html {\\n    color-scheme: dark;\\n  }\\n  body {\\n    color: white;\\n    background: #3C4048;\\n  }\\n} */\\n\\n/*my styles*/\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10ub25lT2ZbOF0udXNlWzJdIS4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUMySDtBQUMzSCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EseURBQXlELGVBQWUsY0FBYyx3SkFBd0osR0FBRyxPQUFPLG1CQUFtQiwwQkFBMEIsR0FBRyxPQUFPLGNBQWMsZUFBZSwyQkFBMkIsR0FBRyxjQUFjLHNCQUFzQixnQkFBZ0IscUJBQXFCLHNCQUFzQixrQkFBa0Isd0JBQXdCLDJCQUEyQiw0Q0FBNEMsMkJBQTJCLDJCQUEyQixHQUFHLFVBQVUscUJBQXFCLHNCQUFzQixxQkFBcUIsd0JBQXdCLEdBQUcsV0FBVyxxQkFBcUIsd0JBQXdCLHdCQUF3QixnQkFBZ0IsZ0JBQWdCLDJCQUEyQixHQUFHLFlBQVksd0JBQXdCLEdBQUcsYUFBYSxpQkFBaUIsZUFBZSxpQ0FBaUMsd0JBQXdCLDBCQUEwQixLQUFLLFFBQVEsa0JBQWtCLDJCQUEyQixpQkFBaUIsZ0JBQWdCLDZDQUE2QyxpQ0FBaUMsa0JBQWtCLHVCQUF1QixHQUFHLGFBQWEsaUJBQWlCLEdBQUcsY0FBYyxvQkFBb0IsR0FBRyxXQUFXLHNCQUFzQix3QkFBd0IsR0FBRyxZQUFZLGtCQUFrQixxQkFBcUIsc0JBQXNCLEdBQUcsT0FBTyxxQkFBcUIsR0FBRyxPQUFPLHNCQUFzQixHQUFHLFFBQVEsNEJBQTRCLGlCQUFpQix1QkFBdUIscUJBQXFCLEdBQUcsUUFBUSxxQkFBcUIsR0FBRyxVQUFVLGlCQUFpQixnQkFBZ0Is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QUFvQixLQUFLLGdCQUFnQixxQkFBcUIsS0FBSyxLQUFLLDBDQUEwQyxVQUFVLHlCQUF5QixLQUFLLFVBQVUsbUJBQW1CLDBCQUEwQixLQUFLLElBQUksc0NBQXNDO0FBQ3IwUjtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3M/MjI2OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuaHRtbCxcXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXFxuICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5cXG4uZm9vdGVye1xcbiAgbWluLWhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4ubG9nb3tcXG4gIG1hcmdpbi1sZWZ0OiA0dnc7XFxuICBtYXJnaW4tcmlnaHQ6IDR2dztcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xcbn1cXG4uZGl2aWRlcntcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogNXB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG4ucmF0aW5nTm97XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4ucG9zdGVySW1ne1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgd2lkdGg6IDMwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHggMCAwIDEycHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLyogbWFyZ2luLWxlZnQ6IDM1cHg7ICovXFxufVxcbi5waWNze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDkwdmg7XFxuICB3aWR0aDogNzB2dztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI5LDIyOSwyMjksIDAuMik7XFxuICBib3JkZXItcmFkaXVzOiAwIDEycHggMTJweCAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuLmZvbnRDb2xvcntcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLm1vdmllVGl0bGV7XFxuICBmb250LXNpemU6IDcwcHg7XFxufVxcbi50YWdsaW5le1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uZHVyYXRpb257XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbn1cXG4ubWw3e1xcbiAgbWFyZ2luLWxlZnQ6IDdweDtcXG59XFxuLm1yN3tcXG4gIG1hcmdpbi1yaWdodDogN3B4O1xcbn1cXG4uYm94aXtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLm10MzB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4uZ29CYWNre1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAtOTJ2aDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5keW5hbWljUGFnZXtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZHBuYXZ7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uc2VhcmNoLWJ0bntcXG4gIGhlaWdodDogMjUlO1xcbiAgd2lkdGg6IDkwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiAwcHg7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zZWFyY2hJY29ue1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnNlYXJjaElucHV0e1xcbiAgaGVpZ2h0OiAyNSU7XFxuICBtYXJnaW4tdG9wOiA3MHB4O1xcbiAgd2lkdGg6IDMwdnc7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjlweCl7XFxuICAuZHBuYXZ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgLmR5bmFtaWNQYWdle1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5tb3ZpZVRpdGxle1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICB9XFxuICAuZ29CYWNre1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLnBvc3RlckltZ3tcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAxMnB4IDEycHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcXG4gIH1cXG4gIC5waWNze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDk1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjksMjI5LDIyOSwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDEycHggMTJweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDIwcHg7ICovXFxuICB9XFxuICAuc2VhcmNoLWJ0bntcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5zZWFyY2hJY29ue1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG5cXG59XFxuLyogQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcbiAgaHRtbCB7XFxuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcXG4gIH1cXG4gIGJvZHkge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6ICMzQzQwNDg7XFxuICB9XFxufSAqL1xcblxcbi8qbXkgc3R5bGVzKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7O0VBRUUsVUFBVTtFQUNWLFNBQVM7RUFDVDt3RUFDc0U7QUFDeEU7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7OztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVDQUF1QztFQUN2QyxzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztFQUNYLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGFBQWE7RUFDZjtFQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFVBQVU7SUFDVix3Q0FBd0M7SUFDeEMsa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUY7QUFDQTs7Ozs7Ozs7R0FRRzs7QUFFSCxZQUFZXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbmh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgT3h5Z2VuLFxcbiAgICBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuXFxuLmZvb3RlcntcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuLmxvZ297XFxuICBtYXJnaW4tbGVmdDogNHZ3O1xcbiAgbWFyZ2luLXJpZ2h0OiA0dnc7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcXG59XFxuLmRpdmlkZXJ7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDVweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuLnJhdGluZ05ve1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuLnBvc3RlckltZ3tcXG4gIGhlaWdodDogOTB2aDtcXG4gIHdpZHRoOiAzMCU7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4IDAgMCAxMnB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC8qIG1hcmdpbi1sZWZ0OiAzNXB4OyAqL1xcbn1cXG4ucGljc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgd2lkdGg6IDcwdnc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOSwyMjksMjI5LCAwLjIpO1xcbiAgYm9yZGVyLXJhZGl1czogMCAxMnB4IDEycHggMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcbi5mb250Q29sb3J7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5tb3ZpZVRpdGxle1xcbiAgZm9udC1zaXplOiA3MHB4O1xcbn1cXG4udGFnbGluZXtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmR1cmF0aW9ue1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuLm1sN3tcXG4gIG1hcmdpbi1sZWZ0OiA3cHg7XFxufVxcbi5tcjd7XFxuICBtYXJnaW4tcmlnaHQ6IDdweDtcXG59XFxuLmJveGl7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5tdDMwe1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLmdvQmFja3tcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogLTkydmg7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZHluYW1pY1BhZ2V7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmRwbmF2e1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLnNlYXJjaC1idG57XFxuICBoZWlnaHQ6IDI1JTtcXG4gIHdpZHRoOiA5MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2VhcmNoSWNvbntcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5zZWFyY2hJbnB1dHtcXG4gIGhlaWdodDogMjUlO1xcbiAgbWFyZ2luLXRvcDogNzBweDtcXG4gIHdpZHRoOiAzMHZ3O1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY5cHgpe1xcbiAgLmRwbmF2e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG4gIC5keW5hbWljUGFnZXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAubW92aWVUaXRsZXtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgfVxcbiAgLmdvQmFja3tcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIC5wb3N0ZXJJbWd7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMTJweCAxMnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XFxuICB9XFxuICAucGljc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIHdpZHRoOiA5NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI5LDIyOSwyMjksIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAxMnB4IDEycHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogcGFkZGluZzogMTBweDsgKi9cXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAyMHB4OyAqL1xcbiAgfVxcbiAgLnNlYXJjaC1idG57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuc2VhcmNoSWNvbntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuXFxufVxcbi8qIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXG4gIGh0bWwge1xcbiAgICBjb2xvci1zY2hlbWU6IGRhcms7XFxuICB9XFxuICBib2R5IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiAjM0M0MDQ4O1xcbiAgfVxcbn0gKi9cXG5cXG4vKm15IHN0eWxlcyovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[3].oneOf[8].use[2]!./src/styles/globals.css\n"));

/***/ })

});