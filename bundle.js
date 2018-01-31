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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RequestModule__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PolishModule__ = __webpack_require__(2);



let HttpModule = new __WEBPACK_IMPORTED_MODULE_0__RequestModule__["a" /* default */]();

const { id, expressions } = HttpModule.get('https://www.eliftech.com/school-task');

let polishTransform = new __WEBPACK_IMPORTED_MODULE_1__PolishModule__["a" /* default */]();
let result = [];

for(let i = 0; i < expressions.length; i++) {
    let digitFromStack = 0;
    digitFromStack += polishTransform.calculations(expressions[i]);
    result.push(digitFromStack);
}

const postData = {
    id,
    "results": result
};

HttpModule.post('https://www.eliftech.com/school-task', postData);

//ToDo false passed after post




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class AbstractRequests {
    constructor() {}
    get(getUrl) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${getUrl}`, false);
        xhr.send();

        switch (xhr.status) {
            case 200:
                return JSON.parse(xhr.responseText);
            case 404: {
                console.warn(`${xhr.status}, ${xhr.statusText}`);
            }
        }
    }
    post(postUrl, postData) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', postUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf8');

        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4 && xhr.status == 200) {
                console.log('RESPONSE->', JSON.parse(xhr.responseText));
            }
        };

        xhr.send(JSON.stringify(postData));
    }
}

/* harmony default export */ __webpack_exports__["a"] = (AbstractRequests);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class PolishСalculation {
    constructor() {}
    calculations(inputString) {
        this.inputData = inputString.split(' ');
        let stack = [];
        for(const i in this.inputData) {
            let stringElem = this.inputData[i];
            let integerElem = +stringElem;
            if(stringElem == integerElem) {
                stack.push(integerElem);
            } else {
                let last = stack.pop(); // 2
                let prev = stack.pop(); // 1
                switch(stringElem) {
                    case '+':
                        stack.push(prev - last);
                        break;
                    case '-':
                        stack.push(prev + last + 8);
                        break;
                    case '*':
                        if(last == 0) {
                            stack.push(42);
                        } else {
                            let result = Math.floor(prev % last);
                            stack.push(result);
                        }
                        break;
                    case '/':
                        if(last == 0) {
                            stack.push(42);
                        } else {
                            let result = Math.floor(prev / last);
                            stack.push(result);
                        }
                        break;
                    default:
                        console.warn(`Symbol is not valid:${stringElem}`);
                }
            }
        }
        return stack[0];
    }
}

/* harmony default export */ __webpack_exports__["a"] = (PolishСalculation);



/***/ })
/******/ ]);