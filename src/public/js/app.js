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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /var/www/resources/js/app.js: Unexpected token (34:0)\n\n\u001b[0m \u001b[90m 32 | \u001b[39m    el\u001b[33m:\u001b[39m \u001b[32m'#app'\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 33 | \u001b[39m  })()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 34 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n    at Parser._raise (/var/www/node_modules/@babel/parser/lib/index.js:746:17)\n    at Parser.raiseWithData (/var/www/node_modules/@babel/parser/lib/index.js:739:17)\n    at Parser.raise (/var/www/node_modules/@babel/parser/lib/index.js:733:17)\n    at Parser.unexpected (/var/www/node_modules/@babel/parser/lib/index.js:8807:16)\n    at Parser.parseExprAtom (/var/www/node_modules/@babel/parser/lib/index.js:10130:20)\n    at Parser.parseExprSubscripts (/var/www/node_modules/@babel/parser/lib/index.js:9656:23)\n    at Parser.parseMaybeUnary (/var/www/node_modules/@babel/parser/lib/index.js:9636:21)\n    at Parser.parseExprOps (/var/www/node_modules/@babel/parser/lib/index.js:9506:23)\n    at Parser.parseMaybeConditional (/var/www/node_modules/@babel/parser/lib/index.js:9479:23)\n    at Parser.parseMaybeAssign (/var/www/node_modules/@babel/parser/lib/index.js:9434:21)\n    at Parser.parseExpression (/var/www/node_modules/@babel/parser/lib/index.js:9386:23)\n    at Parser.parseStatementContent (/var/www/node_modules/@babel/parser/lib/index.js:11285:23)\n    at Parser.parseStatement (/var/www/node_modules/@babel/parser/lib/index.js:11156:17)\n    at Parser.parseBlockOrModuleBlockBody (/var/www/node_modules/@babel/parser/lib/index.js:11731:25)\n    at Parser.parseBlockBody (/var/www/node_modules/@babel/parser/lib/index.js:11717:10)\n    at Parser.parseBlock (/var/www/node_modules/@babel/parser/lib/index.js:11701:10)\n    at Parser.parseFunctionBody (/var/www/node_modules/@babel/parser/lib/index.js:10708:24)\n    at Parser.parseFunctionBodyAndFinish (/var/www/node_modules/@babel/parser/lib/index.js:10691:10)\n    at /var/www/node_modules/@babel/parser/lib/index.js:11871:12\n    at Parser.withTopicForbiddingContext (/var/www/node_modules/@babel/parser/lib/index.js:11031:14)\n    at Parser.parseFunction (/var/www/node_modules/@babel/parser/lib/index.js:11870:10)\n    at Parser.parseFunctionExpression (/var/www/node_modules/@babel/parser/lib/index.js:10171:17)\n    at Parser.parseExprAtom (/var/www/node_modules/@babel/parser/lib/index.js:10061:21)\n    at Parser.parseExprSubscripts (/var/www/node_modules/@babel/parser/lib/index.js:9656:23)\n    at Parser.parseMaybeUnary (/var/www/node_modules/@babel/parser/lib/index.js:9636:21)\n    at Parser.parseExprOps (/var/www/node_modules/@babel/parser/lib/index.js:9506:23)\n    at Parser.parseMaybeConditional (/var/www/node_modules/@babel/parser/lib/index.js:9479:23)\n    at Parser.parseMaybeAssign (/var/www/node_modules/@babel/parser/lib/index.js:9434:21)\n    at Parser.parseParenAndDistinguishExpression (/var/www/node_modules/@babel/parser/lib/index.js:10267:28)\n    at Parser.parseExprAtom (/var/www/node_modules/@babel/parser/lib/index.js:10007:21)\n    at Parser.parseExprSubscripts (/var/www/node_modules/@babel/parser/lib/index.js:9656:23)\n    at Parser.parseMaybeUnary (/var/www/node_modules/@babel/parser/lib/index.js:9636:21)\n    at Parser.parseExprOps (/var/www/node_modules/@babel/parser/lib/index.js:9506:23)\n    at Parser.parseMaybeConditional (/var/www/node_modules/@babel/parser/lib/index.js:9479:23)\n    at Parser.parseMaybeAssign (/var/www/node_modules/@babel/parser/lib/index.js:9434:21)\n    at Parser.parseExpression (/var/www/node_modules/@babel/parser/lib/index.js:9386:23)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /var/www/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });