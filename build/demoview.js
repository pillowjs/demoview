var demoview =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {
	"name": "demoview",
	"version": "1.0.0",
	"description": "pillow demo preview",
	"repository": {
		"type": "git",
		"url": "https://github.com/pillowjs/demoview.git"
	},
	"keywords": [
		"canvas"
	],
	"main": "./dist/index.js",
	"homepage": "https://pillowjs.github.com/demoview",
	"precommit": [
		"lint"
	],
	"scripts": {
		"lint": "eslint ./src ./examples",
		"doc": "rm -rf ./docs/ && jsdoc -c ./jsdoc.json",
		"build": "webpack && babel src/ --out-dir dist/",
		"server": "startserver -p 8081 -s -m",
		"prepublish": "npm run build"
	},
	"dependencies": {},
	"devDependencies": {
		"babel": "~5.8.23",
		"babel-core": "^5.x",
		"babel-loader": "^5.x",
		"eslint": "^4.0.0",
		"jsdoc": "3.4.0",
		"json-loader": "^0.5.2",
		"jsx-loader": "^0.13.2",
		"mocha": "^3.4.2",
		"node-libs-browser": "^2.0.0",
		"pre-commit": "^1.2.2",
		"should": "*",
		"startserver": "^1.3.7",
		"startserver-webpack": "^1.0.2",
		"uitest": "^1.1.4",
		"webpack": "^2.6.1"
	},
	"startserver": [
		{
			"startserver-webpack": "*"
		}
	],
	"license": "MIT"
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global define */


;(function (root, factory) {
  'use strict';
  if (true) {
    return !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== 'undefined') {
    return factory(exports);
  } else {
    factory(root['demoview'] || (root['demoview'] = {}));
  }
})(undefined, function (exports) {
  var pkg = __webpack_require__(0);
  exports.version = pkg.version;
});

/***/ })
/******/ ]);