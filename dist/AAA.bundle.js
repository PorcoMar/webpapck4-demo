/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./script/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/a.css":
/*!**********************!*\
  !*** ./assets/a.css ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./assets/a.css?");

/***/ }),

/***/ "./assets/index.less":
/*!***************************!*\
  !*** ./assets/index.less ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./assets/index.less?");

/***/ }),

/***/ "./script/a.js":
/*!*********************!*\
  !*** ./script/a.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_a_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/a.css */ \"./assets/a.css\");\n/* harmony import */ var _c__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./c */ \"./script/c.js\");\n\n\nvar a = {\n  init: function init() {\n    console.log('AAA-');\n    return 'AAA-';\n  },\n  cinit: function cinit() {\n    return _c__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (a);\n\n//# sourceURL=webpack:///./script/a.js?");

/***/ }),

/***/ "./script/c.js":
/*!*********************!*\
  !*** ./script/c.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar c = {\n  init: function init() {\n    console.log('CCC-');\n    return 'CCC-';\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (c);\n\n//# sourceURL=webpack:///./script/c.js?");

/***/ }),

/***/ "./script/index.js":
/*!*************************!*\
  !*** ./script/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.js */ \"./script/a.js\");\n/* harmony import */ var _c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./c.js */ \"./script/c.js\");\n/* harmony import */ var _assets_index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/index.less */ \"./assets/index.less\");\n\n\n\n\nvar AAA = function AAA() {\n  // document.write('index entry')\n  // document.write(ajs.init())\n  // document.write(ajs.cinit())\n  // document.write(cjs.init())\n  var div = document.createElement('div');\n  div.innerText = 'index entry | ' + _a_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init() + _a_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cinit() + _c_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init();\n  document.getElementById('box').after(div);\n};\n\nAAA();\nvar videoContext = document.createElement('video');\nvideoContext.src = 'https://appfiles.beta.jojoread.tinman.cn/resource-file/content/v0/10009/subject_res/video/live_title_01.mp4';\nvideoContext.className = 'videoCs';\nvideoContext.autoplay = true;\ndocument.getElementById('box').before(videoContext);\n\n//# sourceURL=webpack:///./script/index.js?");

/***/ })

/******/ });