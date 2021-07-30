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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/modules/animation.js":
/*!******************************************!*\
  !*** ./src/scripts/modules/animation.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_anime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendor/anime.js */ "./src/scripts/vendor/anime.js");
/* harmony import */ var _vendor_anime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_anime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_noframework_waypoints_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vendor/noframework.waypoints.js */ "./src/scripts/vendor/noframework.waypoints.js");
/* harmony import */ var _vendor_noframework_waypoints_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_noframework_waypoints_js__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Animations = /*#__PURE__*/function () {
  function Animations() {
    _classCallCheck(this, Animations);

    this.oddEvenAnimation();
  }

  _createClass(Animations, [{
    key: "oddEvenAnimation",
    value: function oddEvenAnimation() {
      var odds = document.querySelectorAll('.odd');
      var evens = document.querySelectorAll('.even');
      evens.forEach(function (element) {
        new Waypoint({
          element: element,
          handler: function handler() {
            _vendor_anime_js__WEBPACK_IMPORTED_MODULE_0___default()({
              targets: this.element,
              opacity: [0, 1],
              translateY: [125, 0],
              delay: 150,
              duration: 2000,
              easing: 'spring(1, 80, 10, 0)'
            });
            this.destroy();
          },
          offset: '100%'
        });
      });
      odds.forEach(function (element) {
        new Waypoint({
          element: element,
          handler: function handler() {
            _vendor_anime_js__WEBPACK_IMPORTED_MODULE_0___default()({
              targets: this.element,
              opacity: [0, 1],
              translateY: [125, 0],
              delay: 0,
              duration: 2000,
              easing: 'spring(1, 80, 10, 0)'
            });
            this.destroy();
          },
          offset: '100%'
        });
      });
    }
  }]);

  return Animations;
}();

/* harmony default export */ __webpack_exports__["default"] = (Animations);

/***/ }),

/***/ "./src/scripts/modules/forms.js":
/*!**************************************!*\
  !*** ./src/scripts/modules/forms.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/scripts/modules/utility.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Forms = /*#__PURE__*/function () {
  function Forms() {
    _classCallCheck(this, Forms);

    this.textarea = document.querySelector('textarea');
    this.events();
  }

  _createClass(Forms, [{
    key: "events",
    value: function events() {
      var _this = this;

      if (typeof this.textarea != 'undefined' && this.textarea != null) {
        this.textarea.addEventListener('keyup', function () {
          return _this.setTextareaHeight();
        });
      }
    }
  }, {
    key: "setTextareaHeight",
    value: function setTextareaHeight() {
      this.textarea.style.height = _utility__WEBPACK_IMPORTED_MODULE_0__["default"].textareaHeight(this.textarea.value) + "px";
      console.log('yo');
    }
  }]);

  return Forms;
}();

/* harmony default export */ __webpack_exports__["default"] = (Forms);

/***/ }),

/***/ "./src/scripts/modules/mobileMenu.js":
/*!*******************************************!*\
  !*** ./src/scripts/modules/mobileMenu.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/scripts/modules/utility.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var MobileMenu = /*#__PURE__*/function () {
  function MobileMenu() {
    _classCallCheck(this, MobileMenu);

    this.header = document.querySelector('.site-header');
    this.toggleMenu = document.querySelectorAll('[data-toggle]');
    this.menu = document.querySelectorAll('[data-name]');
    this.submenuBtn = document.querySelectorAll('.submenu-btn');
    this.isMenuOpen = false;
    this.events();
  }

  _createClass(MobileMenu, [{
    key: "events",
    value: function events() {
      var _this = this;

      this.toggleMenu.forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();

          _this.triggerMenu(e);
        });
      });
      this.submenuBtn.forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();

          _this.toggleSubMenu(e);
        });
      });
      document.addEventListener('keydown', function (e) {
        return _this.keyPress(e);
      });
      window.addEventListener('scroll', function () {
        return _this.changeHeader();
      });
    }
  }, {
    key: "triggerMenu",
    value: function triggerMenu(e) {
      var _this2 = this;

      var target = e.currentTarget.getAttribute('data-toggle');
      var targetMenu = document.querySelector('[data-name="' + target + '"]');
      var otherMenus = document.querySelectorAll('[data-name]:not([data-name="' + target + '"])');

      if (!targetMenu.classList.contains('is-open')) {
        // Close other open menus first
        otherMenus.forEach(function (el) {
          if (el.classList.contains('is-open')) {
            _this2.closeMenu(el);
          }
        });
        this.openMenu(targetMenu);
      } else {
        this.closeMenu(targetMenu);
      }
    }
  }, {
    key: "openMenu",
    value: function openMenu(menu) {
      var id = menu.getAttribute('data-name');
      var menuBtn = document.querySelector('[data-toggle="' + id + '"]');
      _utility__WEBPACK_IMPORTED_MODULE_0__["default"].bodyScrollLock();
      this.header.classList.add('is-scrolled');
      menu.classList.add('is-open');
      menuBtn.classList.add('is-active');
      menuBtn.setAttribute('aria-expanded', 'true');
      this.isMenuOpen = true;
    }
  }, {
    key: "closeMenu",
    value: function closeMenu(menu) {
      var id = menu.getAttribute('data-name');
      var menuBtn = document.querySelector('[data-toggle="' + id + '"]');
      _utility__WEBPACK_IMPORTED_MODULE_0__["default"].bodyScrollUnlock();
      menu.classList.remove('is-open');
      menuBtn.classList.remove('is-active');
      menuBtn.setAttribute('aria-expanded', 'false');
      this.isMenuOpen = false;
    }
  }, {
    key: "toggleSubMenu",
    value: function toggleSubMenu(e) {
      e.preventDefault();
      var btn = e.currentTarget;
      var targetMenu = btn.parentNode.querySelector('.submenu');

      if (!targetMenu.classList.contains('is-open')) {
        btn.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        targetMenu.classList.add('is-open');
        targetMenu.style.height = 'auto';
        var height = targetMenu.clientHeight + 'px';
        targetMenu.style.height = '0px';
        setTimeout(function () {
          targetMenu.style.height = height;
        }, 0);
        targetMenu.addEventListener('transitionend', function () {
          targetMenu.removeAttribute('style');
        }, {
          once: true
        });
      } else {
        btn.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');

        var _height = targetMenu.clientHeight + 'px';

        targetMenu.style.height = _height;
        setTimeout(function () {
          targetMenu.style.height = '0px';
        }, 0);
        targetMenu.addEventListener('transitionend', function () {
          targetMenu.classList.remove('is-open');
          targetMenu.removeAttribute('style');
        }, {
          once: true
        });
      }
    }
  }, {
    key: "keyPress",
    value: function keyPress(e) {
      var _this3 = this;

      if (e.keyCode == 27 && this.isMenuOpen) {
        this.menu.forEach(function (el) {
          if (el.classList.contains('is-open')) {
            _this3.closeMenu(el);
          }
        });
      }
    }
  }, {
    key: "changeHeader",
    value: function changeHeader() {
      var scrollPos = window.scrollY;

      if (scrollPos >= 75 || this.isMenuOpen) {
        this.header.classList.add('is-scrolled');
      } else {
        this.header.classList.remove('is-scrolled');
      }
    }
  }]);

  return MobileMenu;
}();

/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

/***/ }),

/***/ "./src/scripts/modules/search.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/search.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Search = /*#__PURE__*/function () {
  function Search() {
    _classCallCheck(this, Search);

    this.searchModal = document.querySelector('.site-header__search');
    this.searchButton = document.querySelector('.search__toggle');
    this.searchField = document.querySelector('.search__input');
    this.searchOverlay = document.querySelector('.overlay--search');
    this.isSearchOpen = false;
    this.events();
  }

  _createClass(Search, [{
    key: "events",
    value: function events() {
      var _this = this;

      // Open search modal
      if (this.searchButton) {
        this.searchButton.addEventListener('click', function () {
          return _this.toggleModal();
        });
      } // Close search modal


      if (this.searchOverlay) {
        this.searchOverlay.addEventListener('click', function () {
          return _this.closeModal();
        });
      }

      document.addEventListener('keydown', function (e) {
        return _this.keyPress(e);
      });
    }
  }, {
    key: "toggleModal",
    value: function toggleModal() {
      if (this.searchModal.classList.contains('is-open')) {
        this.closeModal();
      } else {
        this.openModal();
      }
    }
  }, {
    key: "openModal",
    value: function openModal() {
      var _this2 = this;

      this.searchModal.classList.add('is-open');
      this.searchField.value = '';
      setTimeout(function () {
        return _this2.searchField.focus();
      }, 301);
      this.searchButton.classList.add('is-active');
      this.searchButton.setAttribute('aria-expanded', 'true');
      this.isSearchOpen = true;
      return false;
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.searchModal.classList.remove('is-open');
      this.searchButton.classList.remove('is-active');
      this.searchButton.setAttribute('aria-expanded', 'false');
      this.isSearchOpen = false;
    }
  }, {
    key: "keyPress",
    value: function keyPress(e) {
      if (e.keyCode == 27 && this.isSearchOpen) {
        this.closeModal();
      }
    }
  }]);

  return Search;
}();

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/scripts/modules/utility.js":
/*!****************************************!*\
  !*** ./src/scripts/modules/utility.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Utility = /*#__PURE__*/function () {
  function Utility() {
    _classCallCheck(this, Utility);
  }

  _createClass(Utility, null, [{
    key: "bodyScrollLock",
    value: function bodyScrollLock() {
      var scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = -scrollY + 'px';
    }
  }, {
    key: "bodyScrollUnlock",
    value: function bodyScrollUnlock() {
      var bodyStyle = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(bodyStyle || 0) * -1);
    }
  }, {
    key: "textareaHeight",
    value: function textareaHeight(value) {
      var numberOfLineBreaks = (value.match(/\n/g) || []).length; // min-height + lines x line-height + padding + border

      var newHeight = 20 + numberOfLineBreaks * 20 + 10 + 1;
      return newHeight;
    }
  }, {
    key: "mobileCheck",
    value: function mobileCheck() {
      /* http://detectmobilebrowsers.com/ */
      var check = false;

      (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);

      return check;
    }
  }]);

  return Utility;
}();

/* harmony default export */ __webpack_exports__["default"] = (Utility);

/***/ }),

/***/ "./src/scripts/script.js":
/*!*******************************!*\
  !*** ./src/scripts/script.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_mobileMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mobileMenu */ "./src/scripts/modules/mobileMenu.js");
/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animation */ "./src/scripts/modules/animation.js");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ "./src/scripts/modules/search.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ "./src/scripts/modules/forms.js");



 // Load JS when DOM is ready

function rasandeDomReady(fn) {
  if (typeof fn !== 'function') {
    return;
  }

  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    return fn();
  }

  document.addEventListener('DOMContentLoaded', fn, false);
}

rasandeDomReady(function () {
  // Instantiate a new object using modules / classes
  var mobileMenu = new _modules_mobileMenu__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var animation = new _modules_animation__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var search = new _modules_search__WEBPACK_IMPORTED_MODULE_2__["default"]();
  var forms = new _modules_forms__WEBPACK_IMPORTED_MODULE_3__["default"]();
});

/***/ }),

/***/ "./src/scripts/vendor/anime.js":
/*!*************************************!*\
  !*** ./src/scripts/vendor/anime.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * anime.js v3.2.1
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */
 // Defaults

var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: 'normal',
  autoplay: true,
  timelineOffset: 0
};
var defaultTweenSettings = {
  duration: 1000,
  delay: 0,
  endDelay: 0,
  easing: 'easeOutElastic(1, .5)',
  round: 0
};
var validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective', 'matrix', 'matrix3d']; // Caching

var cache = {
  CSS: {},
  springs: {}
}; // Utils

function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

function applyArguments(func, args) {
  return func.apply(null, args);
}

var is = {
  arr: function arr(a) {
    return Array.isArray(a);
  },
  obj: function obj(a) {
    return stringContains(Object.prototype.toString.call(a), 'Object');
  },
  pth: function pth(a) {
    return is.obj(a) && a.hasOwnProperty('totalLength');
  },
  svg: function svg(a) {
    return a instanceof SVGElement;
  },
  inp: function inp(a) {
    return a instanceof HTMLInputElement;
  },
  dom: function dom(a) {
    return a.nodeType || is.svg(a);
  },
  str: function str(a) {
    return typeof a === 'string';
  },
  fnc: function fnc(a) {
    return typeof a === 'function';
  },
  und: function und(a) {
    return typeof a === 'undefined';
  },
  nil: function nil(a) {
    return is.und(a) || a === null;
  },
  hex: function hex(a) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
  },
  rgb: function rgb(a) {
    return /^rgb/.test(a);
  },
  hsl: function hsl(a) {
    return /^hsl/.test(a);
  },
  col: function col(a) {
    return is.hex(a) || is.rgb(a) || is.hsl(a);
  },
  key: function key(a) {
    return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes';
  }
}; // Easings

function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(',').map(function (p) {
    return parseFloat(p);
  }) : [];
} // Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js


function spring(string, duration) {
  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], .1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], .1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], .1, 100);
  var velocity = minMax(is.und(params[3]) ? 0 : params[3], .1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;

  function solver(t) {
    var progress = duration ? duration * t / 1000 : t;

    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }

    if (t === 0 || t === 1) {
      return t;
    }

    return 1 - progress;
  }

  function getDuration() {
    var cached = cache.springs[string];

    if (cached) {
      return cached;
    }

    var frame = 1 / 6;
    var elapsed = 0;
    var rest = 0;

    while (true) {
      elapsed += frame;

      if (solver(elapsed) === 1) {
        rest++;

        if (rest >= 16) {
          break;
        }
      } else {
        rest = 0;
      }
    }

    var duration = elapsed * frame * 1000;
    cache.springs[string] = duration;
    return duration;
  }

  return duration ? solver : getDuration;
} // Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function


function steps(steps) {
  if (steps === void 0) steps = 10;
  return function (t) {
    return Math.ceil(minMax(t, 0.000001, 1) * steps) * (1 / steps);
  };
} // BezierEasing https://github.com/gre/bezier-easing


var bezier = function () {
  var kSplineTableSize = 11;
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

  function A(aA1, aA2) {
    return 1.0 - 3.0 * aA2 + 3.0 * aA1;
  }

  function B(aA1, aA2) {
    return 3.0 * aA2 - 6.0 * aA1;
  }

  function C(aA1) {
    return 3.0 * aA1;
  }

  function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
  }

  function getSlope(aT, aA1, aA2) {
    return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
  }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX,
        currentT,
        i = 0;

    do {
      currentT = aA + (aB - aA) / 2.0;
      currentX = calcBezier(currentT, mX1, mX2) - aX;

      if (currentX > 0.0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > 0.0000001 && ++i < 10);

    return currentT;
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < 4; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);

      if (currentSlope === 0.0) {
        return aGuessT;
      }

      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }

    return aGuessT;
  }

  function bezier(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
      return;
    }

    var sampleValues = new Float32Array(kSplineTableSize);

    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }

    function getTForX(aX) {
      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;

      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }

      --currentSample;
      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);

      if (initialSlope >= 0.001) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }
    }

    return function (x) {
      if (mX1 === mY1 && mX2 === mY2) {
        return x;
      }

      if (x === 0 || x === 1) {
        return x;
      }

      return calcBezier(getTForX(x), mY1, mY2);
    };
  }

  return bezier;
}();

var penner = function () {
  // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)
  var eases = {
    linear: function linear() {
      return function (t) {
        return t;
      };
    }
  };
  var functionEasings = {
    Sine: function Sine() {
      return function (t) {
        return 1 - Math.cos(t * Math.PI / 2);
      };
    },
    Circ: function Circ() {
      return function (t) {
        return 1 - Math.sqrt(1 - t * t);
      };
    },
    Back: function Back() {
      return function (t) {
        return t * t * (3 * t - 2);
      };
    },
    Bounce: function Bounce() {
      return function (t) {
        var pow2,
            b = 4;

        while (t < ((pow2 = Math.pow(2, --b)) - 1) / 11) {}

        return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t, 2);
      };
    },
    Elastic: function Elastic(amplitude, period) {
      if (amplitude === void 0) amplitude = 1;
      if (period === void 0) period = .5;
      var a = minMax(amplitude, 1, 10);
      var p = minMax(period, .1, 2);
      return function (t) {
        return t === 0 || t === 1 ? t : -a * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - p / (Math.PI * 2) * Math.asin(1 / a)) * (Math.PI * 2) / p);
      };
    }
  };
  var baseEasings = ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'];
  baseEasings.forEach(function (name, i) {
    functionEasings[name] = function () {
      return function (t) {
        return Math.pow(t, i + 2);
      };
    };
  });
  Object.keys(functionEasings).forEach(function (name) {
    var easeIn = functionEasings[name];
    eases['easeIn' + name] = easeIn;

    eases['easeOut' + name] = function (a, b) {
      return function (t) {
        return 1 - easeIn(a, b)(1 - t);
      };
    };

    eases['easeInOut' + name] = function (a, b) {
      return function (t) {
        return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 1 - easeIn(a, b)(t * -2 + 2) / 2;
      };
    };

    eases['easeOutIn' + name] = function (a, b) {
      return function (t) {
        return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : (easeIn(a, b)(t * 2 - 1) + 1) / 2;
      };
    };
  });
  return eases;
}();

function parseEasings(easing, duration) {
  if (is.fnc(easing)) {
    return easing;
  }

  var name = easing.split('(')[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);

  switch (name) {
    case 'spring':
      return spring(easing, duration);

    case 'cubicBezier':
      return applyArguments(bezier, args);

    case 'steps':
      return applyArguments(steps, args);

    default:
      return applyArguments(ease, args);
  }
} // Strings


function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch (e) {
    return;
  }
} // Arrays


function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];

  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];

      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }

  return result;
}

function flattenArray(arr) {
  return arr.reduce(function (a, b) {
    return a.concat(is.arr(b) ? flattenArray(b) : b);
  }, []);
}

function toArray(o) {
  if (is.arr(o)) {
    return o;
  }

  if (is.str(o)) {
    o = selectString(o) || o;
  }

  if (o instanceof NodeList || o instanceof HTMLCollection) {
    return [].slice.call(o);
  }

  return [o];
}

function arrayContains(arr, val) {
  return arr.some(function (a) {
    return a === val;
  });
} // Objects


function cloneObject(o) {
  var clone = {};

  for (var p in o) {
    clone[p] = o[p];
  }

  return clone;
}

function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o1) {
    o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
  }

  return o;
}

function mergeObjects(o1, o2) {
  var o = cloneObject(o1);

  for (var p in o2) {
    o[p] = is.und(o1[p]) ? o2[p] : o1[p];
  }

  return o;
} // Colors


function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}

function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return "rgba(" + r + "," + g + "," + b + ",1)";
}

function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;

  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }

    if (t > 1) {
      t -= 1;
    }

    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }

    if (t < 1 / 2) {
      return q;
    }

    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }

    return p;
  }

  var r, g, b;

  if (s == 0) {
    r = g = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
}

function colorToRgb(val) {
  if (is.rgb(val)) {
    return rgbToRgba(val);
  }

  if (is.hex(val)) {
    return hexToRgba(val);
  }

  if (is.hsl(val)) {
    return hslToRgba(val);
  }
} // Units


function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);

  if (split) {
    return split[1];
  }
}

function getTransformUnit(propName) {
  if (stringContains(propName, 'translate') || propName === 'perspective') {
    return 'px';
  }

  if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) {
    return 'deg';
  }
} // Values


function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) {
    return val;
  }

  return val(animatable.target, animatable.id, animatable.total);
}

function getAttribute(el, prop) {
  return el.getAttribute(prop);
}

function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);

  if (arrayContains([unit, 'deg', 'rad', 'turn'], valueUnit)) {
    return value;
  }

  var cached = cache.CSS[value + unit];

  if (!is.und(cached)) {
    return cached;
  }

  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = 'absolute';
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}

function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}

function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || is.svg(el) && el[prop])) {
    return 'attribute';
  }

  if (is.dom(el) && arrayContains(validTransforms, prop)) {
    return 'transform';
  }

  if (is.dom(el) && prop !== 'transform' && getCSSValue(el, prop)) {
    return 'css';
  }

  if (el[prop] != null) {
    return 'object';
  }
}

function getElementTransforms(el) {
  if (!is.dom(el)) {
    return;
  }

  var str = el.style.transform || '';
  var reg = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m;

  while (m = reg.exec(str)) {
    transforms.set(m[1], m[2]);
  }

  return transforms;
}

function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;

  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms['last'] = propName;
  }

  return unit ? convertPxToUnit(el, value, unit) : value;
}

function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case 'transform':
      return getTransformValue(target, propName, animatable, unit);

    case 'css':
      return getCSSValue(target, propName, unit);

    case 'attribute':
      return getAttribute(target, propName);

    default:
      return target[propName] || 0;
  }
}

function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);

  if (!operator) {
    return to;
  }

  var u = getUnit(to) || 0;
  var x = parseFloat(from);
  var y = parseFloat(to.replace(operator[0], ''));

  switch (operator[0][0]) {
    case '+':
      return x + y + u;

    case '-':
      return x - y + u;

    case '*':
      return x * y + u;
  }
}

function validateValue(val, unit) {
  if (is.col(val)) {
    return colorToRgb(val);
  }

  if (/\s/g.test(val)) {
    return val;
  }

  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;

  if (unit) {
    return unitLess + unit;
  }

  return unitLess;
} // getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744


function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}

function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, 'r');
}

function getRectLength(el) {
  return getAttribute(el, 'width') * 2 + getAttribute(el, 'height') * 2;
}

function getLineLength(el) {
  return getDistance({
    x: getAttribute(el, 'x1'),
    y: getAttribute(el, 'y1')
  }, {
    x: getAttribute(el, 'x2'),
    y: getAttribute(el, 'y2')
  });
}

function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;

  for (var i = 0; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);

    if (i > 0) {
      totalLength += getDistance(previousPos, currentPos);
    }

    previousPos = currentPos;
  }

  return totalLength;
}

function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
} // Path animation


function getTotalLength(el) {
  if (el.getTotalLength) {
    return el.getTotalLength();
  }

  switch (el.tagName.toLowerCase()) {
    case 'circle':
      return getCircleLength(el);

    case 'rect':
      return getRectLength(el);

    case 'line':
      return getLineLength(el);

    case 'polyline':
      return getPolylineLength(el);

    case 'polygon':
      return getPolygonLength(el);
  }
}

function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute('stroke-dasharray', pathLength);
  return pathLength;
} // Motion path


function getParentSvgEl(el) {
  var parentEl = el.parentNode;

  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) {
      break;
    }

    parentEl = parentEl.parentNode;
  }

  return parentEl;
}

function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox: viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width,
    h: height,
    vW: viewBox[2],
    vH: viewBox[3]
  };
}

function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p = percent || 100;
  return function (property) {
    return {
      property: property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    };
  };
}

function getPathProgress(path, progress, isPathTargetInsideSVG) {
  function point(offset) {
    if (offset === void 0) offset = 0;
    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }

  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(+1);
  var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
  var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;

  switch (path.property) {
    case 'x':
      return (p.x - svg.x) * scaleX;

    case 'y':
      return (p.y - svg.y) * scaleY;

    case 'angle':
      return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
} // Decompose value


function decomposeValue(val, unit) {
  // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
  // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation

  var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + '';
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: is.str(val) || unit ? value.split(rgx) : []
  };
} // Animatables


function parseTargets(targets) {
  var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
  return filterArray(targetsArray, function (item, pos, self) {
    return self.indexOf(item) === pos;
  });
}

function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function (t, i) {
    return {
      target: t,
      id: i,
      total: parsed.length,
      transforms: {
        list: getElementTransforms(t)
      }
    };
  });
} // Properties


function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings); // Override duration if easing is a spring

  if (/^spring/.test(settings.easing)) {
    settings.duration = spring(settings.easing);
  }

  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = l === 2 && !is.obj(prop[0]);

    if (!isFromTo) {
      // Duration divided by the number of tweens
      if (!is.fnc(tweenSettings.duration)) {
        settings.duration = tweenSettings.duration / l;
      }
    } else {
      // Transform [from, to] values shorthand to a valid tween value
      prop = {
        value: prop
      };
    }
  }

  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function (v, i) {
    var obj = is.obj(v) && !is.pth(v) ? v : {
      value: v
    }; // Default delay value should only be applied to the first tween

    if (is.und(obj.delay)) {
      obj.delay = !i ? tweenSettings.delay : 0;
    } // Default endDelay value should only be applied to the last tween


    if (is.und(obj.endDelay)) {
      obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0;
    }

    return obj;
  }).map(function (k) {
    return mergeObjects(k, settings);
  });
}

function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function (key) {
    return Object.keys(key);
  })), function (p) {
    return is.key(p);
  }).reduce(function (a, b) {
    if (a.indexOf(b) < 0) {
      a.push(b);
    }

    return a;
  }, []);
  var properties = {};

  var loop = function loop(i) {
    var propName = propertyNames[i];
    properties[propName] = keyframes.map(function (key) {
      var newKey = {};

      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) {
            newKey.value = key[p];
          }
        } else {
          newKey[p] = key[p];
        }
      }

      return newKey;
    });
  };

  for (var i = 0; i < propertyNames.length; i++) {
    loop(i);
  }

  return properties;
}

function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;

  if (keyframes) {
    params = mergeObjects(flattenKeyframes(keyframes), params);
  }

  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }

  return properties;
} // Tweens


function normalizeTweenValues(tween, animatable) {
  var t = {};

  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);

    if (is.arr(value)) {
      value = value.map(function (v) {
        return getFunctionValue(v, animatable);
      });

      if (value.length === 1) {
        value = value[0];
      }
    }

    t[p] = value;
  }

  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}

function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function (t) {
    var tween = normalizeTweenValues(t, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;

    if (is.und(to)) {
      to = previousValue;
    }

    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
    tween.isColor = is.col(tween.from.original);

    if (tween.isColor) {
      tween.round = 1;
    }

    previousTween = tween;
    return tween;
  });
} // Tween progress


var setProgressValue = {
  css: function css(t, p, v) {
    return t.style[p] = v;
  },
  attribute: function attribute(t, p, v) {
    return t.setAttribute(p, v);
  },
  object: function object(t, p, v) {
    return t[p] = v;
  },
  transform: function transform(t, p, v, transforms, manual) {
    transforms.list.set(p, v);

    if (p === transforms.last || manual) {
      var str = '';
      transforms.list.forEach(function (value, prop) {
        str += prop + "(" + value + ") ";
      });
      t.style.transform = str;
    }
  }
}; // Set Value helper

function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function (animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
} // Animations


function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);

  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable: animatable,
      tweens: tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    };
  }
}

function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function (animatable) {
    return properties.map(function (prop) {
      return createAnimation(animatable, prop);
    });
  })), function (a) {
    return !is.und(a);
  });
} // Create Instance


function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;

  var getTlOffset = function getTlOffset(anim) {
    return anim.timelineOffset ? anim.timelineOffset : 0;
  };

  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.duration;
  })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.delay;
  })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function (anim) {
    return getTlOffset(anim) + anim.duration - anim.endDelay;
  })) : tweenSettings.endDelay;
  return timings;
}

var instanceID = 0;

function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id: id,
    children: [],
    animatables: animatables,
    animations: animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
} // Core


var activeInstances = [];

var engine = function () {
  var raf;

  function play() {
    if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) {
      raf = requestAnimationFrame(step);
    }
  }

  function step(t) {
    // memo on algorithm issue:
    // dangerous iteration over mutable `activeInstances`
    // (that collection may be updated from within callbacks of `tick`-ed animation instances)
    var activeInstancesLength = activeInstances.length;
    var i = 0;

    while (i < activeInstancesLength) {
      var activeInstance = activeInstances[i];

      if (!activeInstance.paused) {
        activeInstance.tick(t);
        i++;
      } else {
        activeInstances.splice(i, 1);
        activeInstancesLength--;
      }
    }

    raf = i > 0 ? requestAnimationFrame(step) : undefined;
  }

  function handleVisibilityChange() {
    if (!anime.suspendWhenDocumentHidden) {
      return;
    }

    if (isDocumentHidden()) {
      // suspend ticks
      raf = cancelAnimationFrame(raf);
    } else {
      // is back to active tab
      // first adjust animations to consider the time that ticks were suspended
      activeInstances.forEach(function (instance) {
        return instance._onDocumentVisibility();
      });
      engine();
    }
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', handleVisibilityChange);
  }

  return play;
}();

function isDocumentHidden() {
  return !!document && document.hidden;
} // Public Instance


function anime(params) {
  if (params === void 0) params = {};
  var startTime = 0,
      lastTime = 0,
      now = 0;
  var children,
      childrenLength = 0;
  var resolve = null;

  function makePromise(instance) {
    var promise = window.Promise && new Promise(function (_resolve) {
      return resolve = _resolve;
    });
    instance.finished = promise;
    return promise;
  }

  var instance = createNewInstance(params);
  var promise = makePromise(instance);

  function toggleInstanceDirection() {
    var direction = instance.direction;

    if (direction !== 'alternate') {
      instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
    }

    instance.reversed = !instance.reversed;
    children.forEach(function (child) {
      return child.reversed = instance.reversed;
    });
  }

  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }

  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }

  function seekChild(time, child) {
    if (child) {
      child.seek(time - child.timelineOffset);
    }
  }

  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i = 0; i < childrenLength; i++) {
        seekChild(time, children[i]);
      }
    } else {
      for (var i$1 = childrenLength; i$1--;) {
        seekChild(time, children[i$1]);
      }
    }
  }

  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;

    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength]; // Only check for keyframes if there is more than one tween

      if (tweenLength) {
        tween = filterArray(tweens, function (t) {
          return insTime < t.end;
        })[0] || tween;
      }

      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = void 0;

      for (var n = 0; n < toNumbersLength; n++) {
        var value = void 0;
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;

        if (!tween.isPath) {
          value = fromNumber + eased * (toNumber - fromNumber);
        } else {
          value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
        }

        if (round) {
          if (!(tween.isColor && n > 2)) {
            value = Math.round(value * round) / round;
          }
        }

        numbers.push(value);
      } // Manual Array.reduce for better performances


      var stringsLength = strings.length;

      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];

        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];

          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + ' ';
            } else {
              progress += n$1 + b;
            }
          }
        }
      }

      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
    }
  }

  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) {
      instance[cb](instance);
    }
  }

  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }

  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax(insTime / insDuration * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;

    if (children) {
      syncInstanceChildren(insTime);
    }

    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback('begin');
    }

    if (!instance.loopBegan && instance.currentTime > 0) {
      instance.loopBegan = true;
      setCallback('loopBegin');
    }

    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }

    if (insTime >= insEndDelay && instance.currentTime !== insDuration || !insDuration) {
      setAnimationsProgress(insDuration);
    }

    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback('changeBegin');
      }

      setCallback('change');
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback('changeComplete');
      }
    }

    instance.currentTime = minMax(insTime, 0, insDuration);

    if (instance.began) {
      setCallback('update');
    }

    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();

      if (!instance.remaining) {
        instance.paused = true;

        if (!instance.completed) {
          instance.completed = true;
          setCallback('loopComplete');
          setCallback('complete');

          if (!instance.passThrough && 'Promise' in window) {
            resolve();
            promise = makePromise(instance);
          }
        }
      } else {
        startTime = now;
        setCallback('loopComplete');
        instance.loopBegan = false;

        if (instance.direction === 'alternate') {
          toggleInstanceDirection();
        }
      }
    }
  }

  instance.reset = function () {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.loopBegan = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === 'reverse';
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;

    for (var i = childrenLength; i--;) {
      instance.children[i].reset();
    }

    if (instance.reversed && instance.loop !== true || direction === 'alternate' && instance.loop === 1) {
      instance.remaining++;
    }

    setAnimationsProgress(instance.reversed ? instance.duration : 0);
  }; // internal method (for engine) to adjust animation timings before restoring engine ticks (rAF)


  instance._onDocumentVisibility = resetTime; // Set Value helper

  instance.set = function (targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };

  instance.tick = function (t) {
    now = t;

    if (!startTime) {
      startTime = now;
    }

    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };

  instance.seek = function (time) {
    setInstanceProgress(adjustTime(time));
  };

  instance.pause = function () {
    instance.paused = true;
    resetTime();
  };

  instance.play = function () {
    if (!instance.paused) {
      return;
    }

    if (instance.completed) {
      instance.reset();
    }

    instance.paused = false;
    activeInstances.push(instance);
    resetTime();
    engine();
  };

  instance.reverse = function () {
    toggleInstanceDirection();
    instance.completed = instance.reversed ? false : true;
    resetTime();
  };

  instance.restart = function () {
    instance.reset();
    instance.play();
  };

  instance.remove = function (targets) {
    var targetsArray = parseTargets(targets);
    removeTargetsFromInstance(targetsArray, instance);
  };

  instance.reset();

  if (instance.autoplay) {
    instance.play();
  }

  return instance;
} // Remove targets from animation


function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a = animations.length; a--;) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}

function removeTargetsFromInstance(targetsArray, instance) {
  var animations = instance.animations;
  var children = instance.children;
  removeTargetsFromAnimations(targetsArray, animations);

  for (var c = children.length; c--;) {
    var child = children[c];
    var childAnimations = child.animations;
    removeTargetsFromAnimations(targetsArray, childAnimations);

    if (!childAnimations.length && !child.children.length) {
      children.splice(c, 1);
    }
  }

  if (!animations.length && !children.length) {
    instance.pause();
  }
}

function removeTargetsFromActiveInstances(targets) {
  var targetsArray = parseTargets(targets);

  for (var i = activeInstances.length; i--;) {
    var instance = activeInstances[i];
    removeTargetsFromInstance(targetsArray, instance);
  }
} // Stagger helpers


function stagger(val, params) {
  if (params === void 0) params = {};
  var direction = params.direction || 'normal';
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === 'first';
  var fromCenter = fromIndex === 'center';
  var fromLast = fromIndex === 'last';
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function (el, i, t) {
    if (fromFirst) {
      fromIndex = 0;
    }

    if (fromCenter) {
      fromIndex = (t - 1) / 2;
    }

    if (fromLast) {
      fromIndex = t - 1;
    }

    if (!values.length) {
      for (var index = 0; index < t; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
          var fromY = !fromCenter ? Math.floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
          var toX = index % grid[0];
          var toY = Math.floor(index / grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

          if (axis === 'x') {
            value = -distanceX;
          }

          if (axis === 'y') {
            value = -distanceY;
          }

          values.push(value);
        }

        maxValue = Math.max.apply(Math, values);
      }

      if (easing) {
        values = values.map(function (val) {
          return easing(val / maxValue) * maxValue;
        });
      }

      if (direction === 'reverse') {
        values = values.map(function (val) {
          return axis ? val < 0 ? val * -1 : -val : Math.abs(maxValue - val);
        });
      }
    }

    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + spacing * (Math.round(values[i] * 100) / 100) + unit;
  };
} // Timeline


function timeline(params) {
  if (params === void 0) params = {};
  var tl = anime(params);
  tl.duration = 0;

  tl.add = function (instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;

    if (tlIndex > -1) {
      activeInstances.splice(tlIndex, 1);
    }

    function passThrough(ins) {
      ins.passThrough = true;
    }

    for (var i = 0; i < children.length; i++) {
      passThrough(children[i]);
    }

    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();

    if (tl.autoplay) {
      tl.play();
    }

    return tl;
  };

  return tl;
}

anime.version = '3.2.1';
anime.speed = 1; // TODO:#review: naming, documentation

anime.suspendWhenDocumentHidden = true;
anime.running = activeInstances;
anime.remove = removeTargetsFromActiveInstances;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;

anime.random = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = anime;

/***/ }),

/***/ "./src/scripts/vendor/noframework.waypoints.js":
/*!*****************************************************!*\
  !*** ./src/scripts/vendor/noframework.waypoints.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
(function () {
  'use strict';

  var keyCounter = 0;
  var allWaypoints = {};
  /* http://imakewebthings.com/waypoints/api/waypoint */

  function Waypoint(options) {
    if (!options) {
      throw new Error('No options passed to Waypoint constructor');
    }

    if (!options.element) {
      throw new Error('No element option passed to Waypoint constructor');
    }

    if (!options.handler) {
      throw new Error('No handler option passed to Waypoint constructor');
    }

    this.key = 'waypoint-' + keyCounter;
    this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options);
    this.element = this.options.element;
    this.adapter = new Waypoint.Adapter(this.element);
    this.callback = options.handler;
    this.axis = this.options.horizontal ? 'horizontal' : 'vertical';
    this.enabled = this.options.enabled;
    this.triggerPoint = null;
    this.group = Waypoint.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    });
    this.context = Waypoint.Context.findOrCreateByElement(this.options.context);

    if (Waypoint.offsetAliases[this.options.offset]) {
      this.options.offset = Waypoint.offsetAliases[this.options.offset];
    }

    this.group.add(this);
    this.context.add(this);
    allWaypoints[this.key] = this;
    keyCounter += 1;
  }
  /* Private */


  Waypoint.prototype.queueTrigger = function (direction) {
    this.group.queueTrigger(this, direction);
  };
  /* Private */


  Waypoint.prototype.trigger = function (args) {
    if (!this.enabled) {
      return;
    }

    if (this.callback) {
      this.callback.apply(this, args);
    }
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/destroy */


  Waypoint.prototype.destroy = function () {
    this.context.remove(this);
    this.group.remove(this);
    delete allWaypoints[this.key];
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/disable */


  Waypoint.prototype.disable = function () {
    this.enabled = false;
    return this;
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/enable */


  Waypoint.prototype.enable = function () {
    this.context.refresh();
    this.enabled = true;
    return this;
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/next */


  Waypoint.prototype.next = function () {
    return this.group.next(this);
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/previous */


  Waypoint.prototype.previous = function () {
    return this.group.previous(this);
  };
  /* Private */


  Waypoint.invokeAll = function (method) {
    var allWaypointsArray = [];

    for (var waypointKey in allWaypoints) {
      allWaypointsArray.push(allWaypoints[waypointKey]);
    }

    for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
      allWaypointsArray[i][method]();
    }
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/destroy-all */


  Waypoint.destroyAll = function () {
    Waypoint.invokeAll('destroy');
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/disable-all */


  Waypoint.disableAll = function () {
    Waypoint.invokeAll('disable');
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/enable-all */


  Waypoint.enableAll = function () {
    Waypoint.Context.refreshAll();

    for (var waypointKey in allWaypoints) {
      allWaypoints[waypointKey].enabled = true;
    }

    return this;
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/refresh-all */


  Waypoint.refreshAll = function () {
    Waypoint.Context.refreshAll();
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/viewport-height */


  Waypoint.viewportHeight = function () {
    return window.innerHeight || document.documentElement.clientHeight;
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/viewport-width */


  Waypoint.viewportWidth = function () {
    return document.documentElement.clientWidth;
  };

  Waypoint.adapters = [];
  Waypoint.defaults = {
    context: window,
    continuous: true,
    enabled: true,
    group: 'default',
    horizontal: false,
    offset: 0
  };
  Waypoint.offsetAliases = {
    'bottom-in-view': function bottomInView() {
      return this.context.innerHeight() - this.adapter.outerHeight();
    },
    'right-in-view': function rightInView() {
      return this.context.innerWidth() - this.adapter.outerWidth();
    }
  };
  window.Waypoint = Waypoint;
})();

(function () {
  'use strict';

  function requestAnimationFrameShim(callback) {
    window.setTimeout(callback, 1000 / 60);
  }

  var keyCounter = 0;
  var contexts = {};
  var Waypoint = window.Waypoint;
  var oldWindowLoad = window.onload;
  /* http://imakewebthings.com/waypoints/api/context */

  function Context(element) {
    this.element = element;
    this.Adapter = Waypoint.Adapter;
    this.adapter = new this.Adapter(element);
    this.key = 'waypoint-context-' + keyCounter;
    this.didScroll = false;
    this.didResize = false;
    this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    };
    this.waypoints = {
      vertical: {},
      horizontal: {}
    };
    element.waypointContextKey = this.key;
    contexts[element.waypointContextKey] = this;
    keyCounter += 1;

    if (!Waypoint.windowContext) {
      Waypoint.windowContext = true;
      Waypoint.windowContext = new Context(window);
    }

    this.createThrottledScrollHandler();
    this.createThrottledResizeHandler();
  }
  /* Private */


  Context.prototype.add = function (waypoint) {
    var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical';
    this.waypoints[axis][waypoint.key] = waypoint;
    this.refresh();
  };
  /* Private */


  Context.prototype.checkEmpty = function () {
    var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal);
    var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical);
    var isWindow = this.element == this.element.window;

    if (horizontalEmpty && verticalEmpty && !isWindow) {
      this.adapter.off('.waypoints');
      delete contexts[this.key];
    }
  };
  /* Private */


  Context.prototype.createThrottledResizeHandler = function () {
    var self = this;

    function resizeHandler() {
      self.handleResize();
      self.didResize = false;
    }

    this.adapter.on('resize.waypoints', function () {
      if (!self.didResize) {
        self.didResize = true;
        Waypoint.requestAnimationFrame(resizeHandler);
      }
    });
  };
  /* Private */


  Context.prototype.createThrottledScrollHandler = function () {
    var self = this;

    function scrollHandler() {
      self.handleScroll();
      self.didScroll = false;
    }

    this.adapter.on('scroll.waypoints', function () {
      if (!self.didScroll || Waypoint.isTouch) {
        self.didScroll = true;
        Waypoint.requestAnimationFrame(scrollHandler);
      }
    });
  };
  /* Private */


  Context.prototype.handleResize = function () {
    Waypoint.Context.refreshAll();
  };
  /* Private */


  Context.prototype.handleScroll = function () {
    var triggeredGroups = {};
    var axes = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left'
      },
      vertical: {
        newScroll: this.adapter.scrollTop(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up'
      }
    };

    for (var axisKey in axes) {
      var axis = axes[axisKey];
      var isForward = axis.newScroll > axis.oldScroll;
      var direction = isForward ? axis.forward : axis.backward;

      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey];

        if (waypoint.triggerPoint === null) {
          continue;
        }

        var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint;
        var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint;
        var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint;
        var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint;

        if (crossedForward || crossedBackward) {
          waypoint.queueTrigger(direction);
          triggeredGroups[waypoint.group.id] = waypoint.group;
        }
      }
    }

    for (var groupKey in triggeredGroups) {
      triggeredGroups[groupKey].flushTriggers();
    }

    this.oldScroll = {
      x: axes.horizontal.newScroll,
      y: axes.vertical.newScroll
    };
  };
  /* Private */


  Context.prototype.innerHeight = function () {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportHeight();
    }
    /*eslint-enable eqeqeq */


    return this.adapter.innerHeight();
  };
  /* Private */


  Context.prototype.remove = function (waypoint) {
    delete this.waypoints[waypoint.axis][waypoint.key];
    this.checkEmpty();
  };
  /* Private */


  Context.prototype.innerWidth = function () {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportWidth();
    }
    /*eslint-enable eqeqeq */


    return this.adapter.innerWidth();
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/context-destroy */


  Context.prototype.destroy = function () {
    var allWaypoints = [];

    for (var axis in this.waypoints) {
      for (var waypointKey in this.waypoints[axis]) {
        allWaypoints.push(this.waypoints[axis][waypointKey]);
      }
    }

    for (var i = 0, end = allWaypoints.length; i < end; i++) {
      allWaypoints[i].destroy();
    }
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/context-refresh */


  Context.prototype.refresh = function () {
    /*eslint-disable eqeqeq */
    var isWindow = this.element == this.element.window;
    /*eslint-enable eqeqeq */

    var contextOffset = isWindow ? undefined : this.adapter.offset();
    var triggeredGroups = {};
    var axes;
    this.handleScroll();
    axes = {
      horizontal: {
        contextOffset: isWindow ? 0 : contextOffset.left,
        contextScroll: isWindow ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left',
        offsetProp: 'left'
      },
      vertical: {
        contextOffset: isWindow ? 0 : contextOffset.top,
        contextScroll: isWindow ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up',
        offsetProp: 'top'
      }
    };

    for (var axisKey in axes) {
      var axis = axes[axisKey];

      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey];
        var adjustment = waypoint.options.offset;
        var oldTriggerPoint = waypoint.triggerPoint;
        var elementOffset = 0;
        var freshWaypoint = oldTriggerPoint == null;
        var contextModifier, wasBeforeScroll, nowAfterScroll;
        var triggeredBackward, triggeredForward;

        if (waypoint.element !== waypoint.element.window) {
          elementOffset = waypoint.adapter.offset()[axis.offsetProp];
        }

        if (typeof adjustment === 'function') {
          adjustment = adjustment.apply(waypoint);
        } else if (typeof adjustment === 'string') {
          adjustment = parseFloat(adjustment);

          if (waypoint.options.offset.indexOf('%') > -1) {
            adjustment = Math.ceil(axis.contextDimension * adjustment / 100);
          }
        }

        contextModifier = axis.contextScroll - axis.contextOffset;
        waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment);
        wasBeforeScroll = oldTriggerPoint < axis.oldScroll;
        nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll;
        triggeredBackward = wasBeforeScroll && nowAfterScroll;
        triggeredForward = !wasBeforeScroll && !nowAfterScroll;

        if (!freshWaypoint && triggeredBackward) {
          waypoint.queueTrigger(axis.backward);
          triggeredGroups[waypoint.group.id] = waypoint.group;
        } else if (!freshWaypoint && triggeredForward) {
          waypoint.queueTrigger(axis.forward);
          triggeredGroups[waypoint.group.id] = waypoint.group;
        } else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
          waypoint.queueTrigger(axis.forward);
          triggeredGroups[waypoint.group.id] = waypoint.group;
        }
      }
    }

    Waypoint.requestAnimationFrame(function () {
      for (var groupKey in triggeredGroups) {
        triggeredGroups[groupKey].flushTriggers();
      }
    });
    return this;
  };
  /* Private */


  Context.findOrCreateByElement = function (element) {
    return Context.findByElement(element) || new Context(element);
  };
  /* Private */


  Context.refreshAll = function () {
    for (var contextId in contexts) {
      contexts[contextId].refresh();
    }
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/context-find-by-element */


  Context.findByElement = function (element) {
    return contexts[element.waypointContextKey];
  };

  window.onload = function () {
    if (oldWindowLoad) {
      oldWindowLoad();
    }

    Context.refreshAll();
  };

  Waypoint.requestAnimationFrame = function (callback) {
    var requestFn = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || requestAnimationFrameShim;
    requestFn.call(window, callback);
  };

  Waypoint.Context = Context;
})();

(function () {
  'use strict';

  function byTriggerPoint(a, b) {
    return a.triggerPoint - b.triggerPoint;
  }

  function byReverseTriggerPoint(a, b) {
    return b.triggerPoint - a.triggerPoint;
  }

  var groups = {
    vertical: {},
    horizontal: {}
  };
  var Waypoint = window.Waypoint;
  /* http://imakewebthings.com/waypoints/api/group */

  function Group(options) {
    this.name = options.name;
    this.axis = options.axis;
    this.id = this.name + '-' + this.axis;
    this.waypoints = [];
    this.clearTriggerQueues();
    groups[this.axis][this.name] = this;
  }
  /* Private */


  Group.prototype.add = function (waypoint) {
    this.waypoints.push(waypoint);
  };
  /* Private */


  Group.prototype.clearTriggerQueues = function () {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    };
  };
  /* Private */


  Group.prototype.flushTriggers = function () {
    for (var direction in this.triggerQueues) {
      var waypoints = this.triggerQueues[direction];
      var reverse = direction === 'up' || direction === 'left';
      waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint);

      for (var i = 0, end = waypoints.length; i < end; i += 1) {
        var waypoint = waypoints[i];

        if (waypoint.options.continuous || i === waypoints.length - 1) {
          waypoint.trigger([direction]);
        }
      }
    }

    this.clearTriggerQueues();
  };
  /* Private */


  Group.prototype.next = function (waypoint) {
    this.waypoints.sort(byTriggerPoint);
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
    var isLast = index === this.waypoints.length - 1;
    return isLast ? null : this.waypoints[index + 1];
  };
  /* Private */


  Group.prototype.previous = function (waypoint) {
    this.waypoints.sort(byTriggerPoint);
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
    return index ? this.waypoints[index - 1] : null;
  };
  /* Private */


  Group.prototype.queueTrigger = function (waypoint, direction) {
    this.triggerQueues[direction].push(waypoint);
  };
  /* Private */


  Group.prototype.remove = function (waypoint) {
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);

    if (index > -1) {
      this.waypoints.splice(index, 1);
    }
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/first */


  Group.prototype.first = function () {
    return this.waypoints[0];
  };
  /* Public */

  /* http://imakewebthings.com/waypoints/api/last */


  Group.prototype.last = function () {
    return this.waypoints[this.waypoints.length - 1];
  };
  /* Private */


  Group.findOrCreate = function (options) {
    return groups[options.axis][options.name] || new Group(options);
  };

  Waypoint.Group = Group;
})();

(function () {
  'use strict';

  var Waypoint = window.Waypoint;

  function isWindow(element) {
    return element === element.window;
  }

  function getWindow(element) {
    if (isWindow(element)) {
      return element;
    }

    return element.defaultView;
  }

  function NoFrameworkAdapter(element) {
    this.element = element;
    this.handlers = {};
  }

  NoFrameworkAdapter.prototype.innerHeight = function () {
    var isWin = isWindow(this.element);
    return isWin ? this.element.innerHeight : this.element.clientHeight;
  };

  NoFrameworkAdapter.prototype.innerWidth = function () {
    var isWin = isWindow(this.element);
    return isWin ? this.element.innerWidth : this.element.clientWidth;
  };

  NoFrameworkAdapter.prototype.off = function (event, handler) {
    function removeListeners(element, listeners, handler) {
      for (var i = 0, end = listeners.length - 1; i < end; i++) {
        var listener = listeners[i];

        if (!handler || handler === listener) {
          element.removeEventListener(listener);
        }
      }
    }

    var eventParts = event.split('.');
    var eventType = eventParts[0];
    var namespace = eventParts[1];
    var element = this.element;

    if (namespace && this.handlers[namespace] && eventType) {
      removeListeners(element, this.handlers[namespace][eventType], handler);
      this.handlers[namespace][eventType] = [];
    } else if (eventType) {
      for (var ns in this.handlers) {
        removeListeners(element, this.handlers[ns][eventType] || [], handler);
        this.handlers[ns][eventType] = [];
      }
    } else if (namespace && this.handlers[namespace]) {
      for (var type in this.handlers[namespace]) {
        removeListeners(element, this.handlers[namespace][type], handler);
      }

      this.handlers[namespace] = {};
    }
  };
  /* Adapted from jQuery 1.x offset() */


  NoFrameworkAdapter.prototype.offset = function () {
    if (!this.element.ownerDocument) {
      return null;
    }

    var documentElement = this.element.ownerDocument.documentElement;
    var win = getWindow(this.element.ownerDocument);
    var rect = {
      top: 0,
      left: 0
    };

    if (this.element.getBoundingClientRect) {
      rect = this.element.getBoundingClientRect();
    }

    return {
      top: rect.top + win.pageYOffset - documentElement.clientTop,
      left: rect.left + win.pageXOffset - documentElement.clientLeft
    };
  };

  NoFrameworkAdapter.prototype.on = function (event, handler) {
    var eventParts = event.split('.');
    var eventType = eventParts[0];
    var namespace = eventParts[1] || '__default';
    var nsHandlers = this.handlers[namespace] = this.handlers[namespace] || {};
    var nsTypeList = nsHandlers[eventType] = nsHandlers[eventType] || [];
    nsTypeList.push(handler);
    this.element.addEventListener(eventType, handler);
  };

  NoFrameworkAdapter.prototype.outerHeight = function (includeMargin) {
    var height = this.innerHeight();
    var computedStyle;

    if (includeMargin && !isWindow(this.element)) {
      computedStyle = window.getComputedStyle(this.element);
      height += parseInt(computedStyle.marginTop, 10);
      height += parseInt(computedStyle.marginBottom, 10);
    }

    return height;
  };

  NoFrameworkAdapter.prototype.outerWidth = function (includeMargin) {
    var width = this.innerWidth();
    var computedStyle;

    if (includeMargin && !isWindow(this.element)) {
      computedStyle = window.getComputedStyle(this.element);
      width += parseInt(computedStyle.marginLeft, 10);
      width += parseInt(computedStyle.marginRight, 10);
    }

    return width;
  };

  NoFrameworkAdapter.prototype.scrollLeft = function () {
    var win = getWindow(this.element);
    return win ? win.pageXOffset : this.element.scrollLeft;
  };

  NoFrameworkAdapter.prototype.scrollTop = function () {
    var win = getWindow(this.element);
    return win ? win.pageYOffset : this.element.scrollTop;
  };

  NoFrameworkAdapter.extend = function () {
    var args = Array.prototype.slice.call(arguments);

    function merge(target, obj) {
      if (_typeof(target) === 'object' && _typeof(obj) === 'object') {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            target[key] = obj[key];
          }
        }
      }

      return target;
    }

    for (var i = 1, end = args.length; i < end; i++) {
      merge(args[0], args[i]);
    }

    return args[0];
  };

  NoFrameworkAdapter.inArray = function (element, array, i) {
    return array == null ? -1 : array.indexOf(element, i);
  };

  NoFrameworkAdapter.isEmptyObject = function (obj) {
    /* eslint no-unused-vars: 0 */
    for (var name in obj) {
      return false;
    }

    return true;
  };

  Waypoint.adapters.push({
    name: 'noframework',
    Adapter: NoFrameworkAdapter
  });
  Waypoint.Adapter = NoFrameworkAdapter;
})();

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./src/scripts/script.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\patches\wp-content\themes\patches\src\scripts\script.js */"./src/scripts/script.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL21vYmlsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy91dGlsaXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy92ZW5kb3IvYW5pbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdmVuZG9yL25vZnJhbWV3b3JrLndheXBvaW50cy5qcyJdLCJuYW1lcyI6WyJBbmltYXRpb25zIiwib2RkRXZlbkFuaW1hdGlvbiIsIm9kZHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJldmVucyIsImZvckVhY2giLCJlbGVtZW50IiwiV2F5cG9pbnQiLCJoYW5kbGVyIiwiYW5pbWUiLCJ0YXJnZXRzIiwib3BhY2l0eSIsInRyYW5zbGF0ZVkiLCJkZWxheSIsImR1cmF0aW9uIiwiZWFzaW5nIiwiZGVzdHJveSIsIm9mZnNldCIsIkZvcm1zIiwidGV4dGFyZWEiLCJxdWVyeVNlbGVjdG9yIiwiZXZlbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRleHRhcmVhSGVpZ2h0Iiwic3R5bGUiLCJoZWlnaHQiLCJVdGlsaXR5IiwidGV4dGFyZWFIZWlnaHQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJNb2JpbGVNZW51IiwiaGVhZGVyIiwidG9nZ2xlTWVudSIsIm1lbnUiLCJzdWJtZW51QnRuIiwiaXNNZW51T3BlbiIsImVsIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJpZ2dlck1lbnUiLCJ0b2dnbGVTdWJNZW51Iiwia2V5UHJlc3MiLCJ3aW5kb3ciLCJjaGFuZ2VIZWFkZXIiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwidGFyZ2V0TWVudSIsIm90aGVyTWVudXMiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImNsb3NlTWVudSIsIm9wZW5NZW51IiwiaWQiLCJtZW51QnRuIiwiYm9keVNjcm9sbExvY2siLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJib2R5U2Nyb2xsVW5sb2NrIiwicmVtb3ZlIiwiYnRuIiwicGFyZW50Tm9kZSIsImNsaWVudEhlaWdodCIsInNldFRpbWVvdXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJvbmNlIiwia2V5Q29kZSIsInNjcm9sbFBvcyIsInNjcm9sbFkiLCJTZWFyY2giLCJzZWFyY2hNb2RhbCIsInNlYXJjaEJ1dHRvbiIsInNlYXJjaEZpZWxkIiwic2VhcmNoT3ZlcmxheSIsImlzU2VhcmNoT3BlbiIsInRvZ2dsZU1vZGFsIiwiY2xvc2VNb2RhbCIsIm9wZW5Nb2RhbCIsImZvY3VzIiwiYm9keSIsInBvc2l0aW9uIiwidG9wIiwiYm9keVN0eWxlIiwic2Nyb2xsVG8iLCJwYXJzZUludCIsIm51bWJlck9mTGluZUJyZWFrcyIsIm1hdGNoIiwibGVuZ3RoIiwibmV3SGVpZ2h0IiwiY2hlY2siLCJhIiwidGVzdCIsInN1YnN0ciIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInZlbmRvciIsIm9wZXJhIiwicmFzYW5kZURvbVJlYWR5IiwiZm4iLCJyZWFkeVN0YXRlIiwibW9iaWxlTWVudSIsImFuaW1hdGlvbiIsInNlYXJjaCIsImZvcm1zIiwiZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MiLCJ1cGRhdGUiLCJiZWdpbiIsImxvb3BCZWdpbiIsImNoYW5nZUJlZ2luIiwiY2hhbmdlIiwiY2hhbmdlQ29tcGxldGUiLCJsb29wQ29tcGxldGUiLCJjb21wbGV0ZSIsImxvb3AiLCJkaXJlY3Rpb24iLCJhdXRvcGxheSIsInRpbWVsaW5lT2Zmc2V0IiwiZGVmYXVsdFR3ZWVuU2V0dGluZ3MiLCJlbmREZWxheSIsInJvdW5kIiwidmFsaWRUcmFuc2Zvcm1zIiwiY2FjaGUiLCJDU1MiLCJzcHJpbmdzIiwibWluTWF4IiwidmFsIiwibWluIiwibWF4IiwiTWF0aCIsInN0cmluZ0NvbnRhaW5zIiwic3RyIiwidGV4dCIsImluZGV4T2YiLCJhcHBseUFyZ3VtZW50cyIsImZ1bmMiLCJhcmdzIiwiYXBwbHkiLCJpcyIsImFyciIsIkFycmF5IiwiaXNBcnJheSIsIm9iaiIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInB0aCIsImhhc093blByb3BlcnR5Iiwic3ZnIiwiU1ZHRWxlbWVudCIsImlucCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJkb20iLCJub2RlVHlwZSIsImZuYyIsInVuZCIsIm5pbCIsImhleCIsInJnYiIsImhzbCIsImNvbCIsImtleSIsInBhcnNlRWFzaW5nUGFyYW1ldGVycyIsInN0cmluZyIsImV4ZWMiLCJzcGxpdCIsIm1hcCIsInAiLCJwYXJzZUZsb2F0Iiwic3ByaW5nIiwicGFyYW1zIiwibWFzcyIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJ2ZWxvY2l0eSIsIncwIiwic3FydCIsInpldGEiLCJ3ZCIsImIiLCJzb2x2ZXIiLCJ0IiwicHJvZ3Jlc3MiLCJleHAiLCJjb3MiLCJzaW4iLCJnZXREdXJhdGlvbiIsImNhY2hlZCIsImZyYW1lIiwiZWxhcHNlZCIsInJlc3QiLCJzdGVwcyIsImNlaWwiLCJiZXppZXIiLCJrU3BsaW5lVGFibGVTaXplIiwia1NhbXBsZVN0ZXBTaXplIiwiQSIsImFBMSIsImFBMiIsIkIiLCJDIiwiY2FsY0JlemllciIsImFUIiwiZ2V0U2xvcGUiLCJiaW5hcnlTdWJkaXZpZGUiLCJhWCIsImFBIiwiYUIiLCJtWDEiLCJtWDIiLCJjdXJyZW50WCIsImN1cnJlbnRUIiwiaSIsImFicyIsIm5ld3RvblJhcGhzb25JdGVyYXRlIiwiYUd1ZXNzVCIsImN1cnJlbnRTbG9wZSIsIm1ZMSIsIm1ZMiIsInNhbXBsZVZhbHVlcyIsIkZsb2F0MzJBcnJheSIsImdldFRGb3JYIiwiaW50ZXJ2YWxTdGFydCIsImN1cnJlbnRTYW1wbGUiLCJsYXN0U2FtcGxlIiwiZGlzdCIsImd1ZXNzRm9yVCIsImluaXRpYWxTbG9wZSIsIngiLCJwZW5uZXIiLCJlYXNlcyIsImxpbmVhciIsImZ1bmN0aW9uRWFzaW5ncyIsIlNpbmUiLCJQSSIsIkNpcmMiLCJCYWNrIiwiQm91bmNlIiwicG93MiIsInBvdyIsIkVsYXN0aWMiLCJhbXBsaXR1ZGUiLCJwZXJpb2QiLCJhc2luIiwiYmFzZUVhc2luZ3MiLCJuYW1lIiwia2V5cyIsImVhc2VJbiIsInBhcnNlRWFzaW5ncyIsImVhc2UiLCJzZWxlY3RTdHJpbmciLCJub2RlcyIsImZpbHRlckFycmF5IiwiY2FsbGJhY2siLCJsZW4iLCJ0aGlzQXJnIiwiYXJndW1lbnRzIiwicmVzdWx0IiwicHVzaCIsImZsYXR0ZW5BcnJheSIsInJlZHVjZSIsImNvbmNhdCIsInRvQXJyYXkiLCJvIiwiTm9kZUxpc3QiLCJIVE1MQ29sbGVjdGlvbiIsInNsaWNlIiwiYXJyYXlDb250YWlucyIsInNvbWUiLCJjbG9uZU9iamVjdCIsImNsb25lIiwicmVwbGFjZU9iamVjdFByb3BzIiwibzEiLCJvMiIsIm1lcmdlT2JqZWN0cyIsInJnYlRvUmdiYSIsInJnYlZhbHVlIiwiaGV4VG9SZ2JhIiwiaGV4VmFsdWUiLCJyZ3giLCJyZXBsYWNlIiwibSIsInIiLCJnIiwiaHNsVG9SZ2JhIiwiaHNsVmFsdWUiLCJoIiwicyIsImwiLCJodWUycmdiIiwicSIsImNvbG9yVG9SZ2IiLCJnZXRVbml0IiwiZ2V0VHJhbnNmb3JtVW5pdCIsInByb3BOYW1lIiwiZ2V0RnVuY3Rpb25WYWx1ZSIsImFuaW1hdGFibGUiLCJ0b3RhbCIsInByb3AiLCJjb252ZXJ0UHhUb1VuaXQiLCJ1bml0IiwidmFsdWVVbml0IiwiYmFzZWxpbmUiLCJ0ZW1wRWwiLCJjcmVhdGVFbGVtZW50IiwidGFnTmFtZSIsInBhcmVudEVsIiwiYXBwZW5kQ2hpbGQiLCJ3aWR0aCIsImZhY3RvciIsIm9mZnNldFdpZHRoIiwicmVtb3ZlQ2hpbGQiLCJjb252ZXJ0ZWRVbml0IiwiZ2V0Q1NTVmFsdWUiLCJ1cHBlcmNhc2VQcm9wTmFtZSIsInRvTG93ZXJDYXNlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJnZXRBbmltYXRpb25UeXBlIiwiZ2V0RWxlbWVudFRyYW5zZm9ybXMiLCJ0cmFuc2Zvcm0iLCJyZWciLCJ0cmFuc2Zvcm1zIiwiTWFwIiwic2V0IiwiZ2V0VHJhbnNmb3JtVmFsdWUiLCJkZWZhdWx0VmFsIiwiZ2V0IiwibGlzdCIsImdldE9yaWdpbmFsVGFyZ2V0VmFsdWUiLCJnZXRSZWxhdGl2ZVZhbHVlIiwidG8iLCJmcm9tIiwib3BlcmF0b3IiLCJ1IiwieSIsInZhbGlkYXRlVmFsdWUiLCJvcmlnaW5hbFVuaXQiLCJ1bml0TGVzcyIsImdldERpc3RhbmNlIiwicDEiLCJwMiIsImdldENpcmNsZUxlbmd0aCIsImdldFJlY3RMZW5ndGgiLCJnZXRMaW5lTGVuZ3RoIiwiZ2V0UG9seWxpbmVMZW5ndGgiLCJwb2ludHMiLCJ0b3RhbExlbmd0aCIsInByZXZpb3VzUG9zIiwibnVtYmVyT2ZJdGVtcyIsImN1cnJlbnRQb3MiLCJnZXRJdGVtIiwiZ2V0UG9seWdvbkxlbmd0aCIsImdldFRvdGFsTGVuZ3RoIiwic2V0RGFzaG9mZnNldCIsInBhdGhMZW5ndGgiLCJnZXRQYXJlbnRTdmdFbCIsImdldFBhcmVudFN2ZyIsInBhdGhFbCIsInN2Z0RhdGEiLCJwYXJlbnRTdmdFbCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ2aWV3Qm94QXR0ciIsInZpZXdCb3giLCJ3IiwidlciLCJ2SCIsImdldFBhdGgiLCJwYXRoIiwicGVyY2VudCIsInByb3BlcnR5IiwiZ2V0UGF0aFByb2dyZXNzIiwiaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHIiwicG9pbnQiLCJnZXRQb2ludEF0TGVuZ3RoIiwicDAiLCJzY2FsZVgiLCJzY2FsZVkiLCJhdGFuMiIsImRlY29tcG9zZVZhbHVlIiwib3JpZ2luYWwiLCJudW1iZXJzIiwiTnVtYmVyIiwic3RyaW5ncyIsInBhcnNlVGFyZ2V0cyIsInRhcmdldHNBcnJheSIsIml0ZW0iLCJwb3MiLCJzZWxmIiwiZ2V0QW5pbWF0YWJsZXMiLCJwYXJzZWQiLCJub3JtYWxpemVQcm9wZXJ0eVR3ZWVucyIsInR3ZWVuU2V0dGluZ3MiLCJzZXR0aW5ncyIsImlzRnJvbVRvIiwicHJvcEFycmF5IiwidiIsImsiLCJmbGF0dGVuS2V5ZnJhbWVzIiwia2V5ZnJhbWVzIiwicHJvcGVydHlOYW1lcyIsInByb3BlcnRpZXMiLCJuZXdLZXkiLCJnZXRQcm9wZXJ0aWVzIiwidHdlZW5zIiwibm9ybWFsaXplVHdlZW5WYWx1ZXMiLCJ0d2VlbiIsIm5vcm1hbGl6ZVR3ZWVucyIsInByZXZpb3VzVHdlZW4iLCJ0d2VlblZhbHVlIiwidG9Vbml0Iiwib3JpZ2luYWxWYWx1ZSIsInByZXZpb3VzVmFsdWUiLCJmcm9tVW5pdCIsInN0YXJ0IiwiZW5kIiwiaXNQYXRoIiwiaXNDb2xvciIsInNldFByb2dyZXNzVmFsdWUiLCJjc3MiLCJhdHRyaWJ1dGUiLCJvYmplY3QiLCJtYW51YWwiLCJsYXN0Iiwic2V0VGFyZ2V0c1ZhbHVlIiwiYW5pbWF0YWJsZXMiLCJhbmltVHlwZSIsImNyZWF0ZUFuaW1hdGlvbiIsImxhc3RUd2VlbiIsInR5cGUiLCJnZXRBbmltYXRpb25zIiwiZ2V0SW5zdGFuY2VUaW1pbmdzIiwiYW5pbWF0aW9ucyIsImFuaW1MZW5ndGgiLCJnZXRUbE9mZnNldCIsImFuaW0iLCJ0aW1pbmdzIiwiaW5zdGFuY2VJRCIsImNyZWF0ZU5ld0luc3RhbmNlIiwiaW5zdGFuY2VTZXR0aW5ncyIsImNoaWxkcmVuIiwiYWN0aXZlSW5zdGFuY2VzIiwiZW5naW5lIiwicmFmIiwicGxheSIsImlzRG9jdW1lbnRIaWRkZW4iLCJzdXNwZW5kV2hlbkRvY3VtZW50SGlkZGVuIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3RlcCIsImFjdGl2ZUluc3RhbmNlc0xlbmd0aCIsImFjdGl2ZUluc3RhbmNlIiwicGF1c2VkIiwidGljayIsInNwbGljZSIsInVuZGVmaW5lZCIsImhhbmRsZVZpc2liaWxpdHlDaGFuZ2UiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImluc3RhbmNlIiwiX29uRG9jdW1lbnRWaXNpYmlsaXR5IiwiaGlkZGVuIiwic3RhcnRUaW1lIiwibGFzdFRpbWUiLCJub3ciLCJjaGlsZHJlbkxlbmd0aCIsInJlc29sdmUiLCJtYWtlUHJvbWlzZSIsInByb21pc2UiLCJQcm9taXNlIiwiX3Jlc29sdmUiLCJmaW5pc2hlZCIsInRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uIiwicmV2ZXJzZWQiLCJjaGlsZCIsImFkanVzdFRpbWUiLCJ0aW1lIiwicmVzZXRUaW1lIiwiY3VycmVudFRpbWUiLCJzcGVlZCIsInNlZWtDaGlsZCIsInNlZWsiLCJzeW5jSW5zdGFuY2VDaGlsZHJlbiIsInJldmVyc2VQbGF5YmFjayIsImkkMSIsInNldEFuaW1hdGlvbnNQcm9ncmVzcyIsImluc1RpbWUiLCJhbmltYXRpb25zTGVuZ3RoIiwidHdlZW5MZW5ndGgiLCJlYXNlZCIsImlzTmFOIiwidG9OdW1iZXJzTGVuZ3RoIiwibiIsInRvTnVtYmVyIiwiZnJvbU51bWJlciIsInN0cmluZ3NMZW5ndGgiLCJuJDEiLCJjdXJyZW50VmFsdWUiLCJzZXRDYWxsYmFjayIsImNiIiwicGFzc1Rocm91Z2giLCJjb3VudEl0ZXJhdGlvbiIsInJlbWFpbmluZyIsInNldEluc3RhbmNlUHJvZ3Jlc3MiLCJlbmdpbmVUaW1lIiwiaW5zRHVyYXRpb24iLCJpbnNEZWxheSIsImluc0VuZERlbGF5IiwiYmVnYW4iLCJsb29wQmVnYW4iLCJjaGFuZ2VCZWdhbiIsImNoYW5nZUNvbXBsZXRlZCIsImNvbXBsZXRlZCIsInJlc2V0IiwicGF1c2UiLCJyZXZlcnNlIiwicmVzdGFydCIsInJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UiLCJyZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnMiLCJjIiwiY2hpbGRBbmltYXRpb25zIiwicmVtb3ZlVGFyZ2V0c0Zyb21BY3RpdmVJbnN0YW5jZXMiLCJzdGFnZ2VyIiwiZ3JpZCIsImF4aXMiLCJmcm9tSW5kZXgiLCJmcm9tRmlyc3QiLCJmcm9tQ2VudGVyIiwiZnJvbUxhc3QiLCJpc1JhbmdlIiwidmFsMSIsInZhbDIiLCJ2YWx1ZXMiLCJtYXhWYWx1ZSIsImluZGV4IiwiZnJvbVgiLCJmcm9tWSIsImZsb29yIiwidG9YIiwidG9ZIiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwic3BhY2luZyIsInRpbWVsaW5lIiwidGwiLCJpbnN0YW5jZVBhcmFtcyIsInRsSW5kZXgiLCJpbnMiLCJpbnNQYXJhbXMiLCJ0bER1cmF0aW9uIiwidmVyc2lvbiIsInJ1bm5pbmciLCJjb252ZXJ0UHgiLCJyYW5kb20iLCJtb2R1bGUiLCJleHBvcnRzIiwia2V5Q291bnRlciIsImFsbFdheXBvaW50cyIsIm9wdGlvbnMiLCJFcnJvciIsIkFkYXB0ZXIiLCJleHRlbmQiLCJkZWZhdWx0cyIsImFkYXB0ZXIiLCJob3Jpem9udGFsIiwiZW5hYmxlZCIsInRyaWdnZXJQb2ludCIsImdyb3VwIiwiR3JvdXAiLCJmaW5kT3JDcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsImZpbmRPckNyZWF0ZUJ5RWxlbWVudCIsIm9mZnNldEFsaWFzZXMiLCJxdWV1ZVRyaWdnZXIiLCJ0cmlnZ2VyIiwiZGlzYWJsZSIsImVuYWJsZSIsInJlZnJlc2giLCJuZXh0IiwicHJldmlvdXMiLCJpbnZva2VBbGwiLCJtZXRob2QiLCJhbGxXYXlwb2ludHNBcnJheSIsIndheXBvaW50S2V5IiwiZGVzdHJveUFsbCIsImRpc2FibGVBbGwiLCJlbmFibGVBbGwiLCJyZWZyZXNoQWxsIiwidmlld3BvcnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsInZpZXdwb3J0V2lkdGgiLCJjbGllbnRXaWR0aCIsImFkYXB0ZXJzIiwiY29udGludW91cyIsIm91dGVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsIm91dGVyV2lkdGgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVTaGltIiwiY29udGV4dHMiLCJvbGRXaW5kb3dMb2FkIiwib25sb2FkIiwiZGlkU2Nyb2xsIiwiZGlkUmVzaXplIiwib2xkU2Nyb2xsIiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsIndheXBvaW50cyIsInZlcnRpY2FsIiwid2F5cG9pbnRDb250ZXh0S2V5Iiwid2luZG93Q29udGV4dCIsImNyZWF0ZVRocm90dGxlZFNjcm9sbEhhbmRsZXIiLCJjcmVhdGVUaHJvdHRsZWRSZXNpemVIYW5kbGVyIiwid2F5cG9pbnQiLCJjaGVja0VtcHR5IiwiaG9yaXpvbnRhbEVtcHR5IiwiaXNFbXB0eU9iamVjdCIsInZlcnRpY2FsRW1wdHkiLCJpc1dpbmRvdyIsIm9mZiIsInJlc2l6ZUhhbmRsZXIiLCJoYW5kbGVSZXNpemUiLCJvbiIsInNjcm9sbEhhbmRsZXIiLCJoYW5kbGVTY3JvbGwiLCJpc1RvdWNoIiwidHJpZ2dlcmVkR3JvdXBzIiwiYXhlcyIsIm5ld1Njcm9sbCIsImZvcndhcmQiLCJiYWNrd2FyZCIsImF4aXNLZXkiLCJpc0ZvcndhcmQiLCJ3YXNCZWZvcmVUcmlnZ2VyUG9pbnQiLCJub3dBZnRlclRyaWdnZXJQb2ludCIsImNyb3NzZWRGb3J3YXJkIiwiY3Jvc3NlZEJhY2t3YXJkIiwiZ3JvdXBLZXkiLCJmbHVzaFRyaWdnZXJzIiwiY29udGV4dE9mZnNldCIsImxlZnQiLCJjb250ZXh0U2Nyb2xsIiwiY29udGV4dERpbWVuc2lvbiIsIm9mZnNldFByb3AiLCJhZGp1c3RtZW50Iiwib2xkVHJpZ2dlclBvaW50IiwiZWxlbWVudE9mZnNldCIsImZyZXNoV2F5cG9pbnQiLCJjb250ZXh0TW9kaWZpZXIiLCJ3YXNCZWZvcmVTY3JvbGwiLCJub3dBZnRlclNjcm9sbCIsInRyaWdnZXJlZEJhY2t3YXJkIiwidHJpZ2dlcmVkRm9yd2FyZCIsImZpbmRCeUVsZW1lbnQiLCJjb250ZXh0SWQiLCJyZXF1ZXN0Rm4iLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJieVRyaWdnZXJQb2ludCIsImJ5UmV2ZXJzZVRyaWdnZXJQb2ludCIsImdyb3VwcyIsImNsZWFyVHJpZ2dlclF1ZXVlcyIsInRyaWdnZXJRdWV1ZXMiLCJ1cCIsImRvd24iLCJyaWdodCIsInNvcnQiLCJpbkFycmF5IiwiaXNMYXN0IiwiZmlyc3QiLCJnZXRXaW5kb3ciLCJkZWZhdWx0VmlldyIsIk5vRnJhbWV3b3JrQWRhcHRlciIsImhhbmRsZXJzIiwiaXNXaW4iLCJldmVudCIsInJlbW92ZUxpc3RlbmVycyIsImxpc3RlbmVycyIsImxpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50UGFydHMiLCJldmVudFR5cGUiLCJuYW1lc3BhY2UiLCJucyIsIm93bmVyRG9jdW1lbnQiLCJ3aW4iLCJwYWdlWU9mZnNldCIsImNsaWVudFRvcCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50TGVmdCIsIm5zSGFuZGxlcnMiLCJuc1R5cGVMaXN0IiwiaW5jbHVkZU1hcmdpbiIsImNvbXB1dGVkU3R5bGUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJtZXJnZSIsImFycmF5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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TixHQUFjcEIsR0FBRyxDQUFDb0IsR0FBRCxDQUFqQjtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxhQUFPckgsTUFBUDtBQUNIOztBQUVELFNBQUssSUFBSXdLLENBQUMsR0FBRyxDQUFSLEVBQVc0TSxHQUFHLEdBQUd6UixJQUFJLENBQUNoRCxNQUEzQixFQUFtQzZILENBQUMsR0FBRzRNLEdBQXZDLEVBQTRDNU0sQ0FBQyxFQUE3QyxFQUFpRDtBQUM3Q3NlLFdBQUssQ0FBQ25qQixJQUFJLENBQUMsQ0FBRCxDQUFMLEVBQVVBLElBQUksQ0FBQzZFLENBQUQsQ0FBZCxDQUFMO0FBQ0g7O0FBQ0QsV0FBTzdFLElBQUksQ0FBQyxDQUFELENBQVg7QUFDSCxHQW5CRDs7QUFxQkF5aEIsb0JBQWtCLENBQUNMLE9BQW5CLEdBQTZCLFVBQVN0cEIsT0FBVCxFQUFrQnNyQixLQUFsQixFQUF5QnZlLENBQXpCLEVBQTRCO0FBQ3JELFdBQU91ZSxLQUFLLElBQUksSUFBVCxHQUFnQixDQUFDLENBQWpCLEdBQXFCQSxLQUFLLENBQUN2akIsT0FBTixDQUFjL0gsT0FBZCxFQUF1QitNLENBQXZCLENBQTVCO0FBQ0gsR0FGRDs7QUFJQTRjLG9CQUFrQixDQUFDeEQsYUFBbkIsR0FBbUMsVUFBUzNkLEdBQVQsRUFBYztBQUM3QztBQUNBLFNBQUssSUFBSXdHLElBQVQsSUFBaUJ4RyxHQUFqQixFQUFzQjtBQUNsQixhQUFPLEtBQVA7QUFDSDs7QUFDRCxXQUFPLElBQVA7QUFDSCxHQU5EOztBQVFBdkksVUFBUSxDQUFDMmtCLFFBQVQsQ0FBa0IvVSxJQUFsQixDQUF1QjtBQUNuQmIsUUFBSSxFQUFFLGFBRGE7QUFFbkIwVCxXQUFPLEVBQUVpSDtBQUZVLEdBQXZCO0FBSUExcEIsVUFBUSxDQUFDeWlCLE9BQVQsR0FBbUJpSCxrQkFBbkI7QUFDSCxDQTFLQSxHQUFELEMiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGFuaW1lIGZyb20gJy4uL3ZlbmRvci9hbmltZS5qcydcclxuaW1wb3J0IHdheXBvaW50IGZyb20gJy4uL3ZlbmRvci9ub2ZyYW1ld29yay53YXlwb2ludHMuanMnXHJcbmNsYXNzIEFuaW1hdGlvbnMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub2RkRXZlbkFuaW1hdGlvbigpXHJcbiAgICB9XHJcblxyXG4gICAgb2RkRXZlbkFuaW1hdGlvbigpIHtcclxuICAgICAgICBjb25zdCBvZGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9kZCcpXHJcbiAgICAgICAgY29uc3QgZXZlbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlbicpXHJcblxyXG4gICAgICAgIGV2ZW5zLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICBuZXcgV2F5cG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5lbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFsxMjUsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMTUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnc3ByaW5nKDEsIDgwLCAxMCwgMCknXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBvZGRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICBuZXcgV2F5cG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5lbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFsxMjUsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ3NwcmluZygxLCA4MCwgMTAsIDApJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAnMTAwJScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbnNcclxuIiwiaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4vdXRpbGl0eVwiXHJcblxyXG5jbGFzcyBGb3JtcyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJylcclxuICAgICAgICB0aGlzLmV2ZW50cygpXHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHR5cGVvZih0aGlzLnRleHRhcmVhKSAhPSAndW5kZWZpbmVkJyAmJiB0aGlzLnRleHRhcmVhICE9IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4gdGhpcy5zZXRUZXh0YXJlYUhlaWdodCgpKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGV4dGFyZWFIZWlnaHQoKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSBVdGlsaXR5LnRleHRhcmVhSGVpZ2h0KHRoaXMudGV4dGFyZWEudmFsdWUpICsgXCJweFwiXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3lvJylcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1zXHJcbiIsImltcG9ydCBVdGlsaXR5IGZyb20gXCIuL3V0aWxpdHlcIlxyXG5cclxuY2xhc3MgTW9iaWxlTWVudSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpXHJcbiAgICAgICAgdGhpcy50b2dnbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9nZ2xlXScpXHJcbiAgICAgICAgdGhpcy5tZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmFtZV0nKVxyXG4gICAgICAgIHRoaXMuc3VibWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWJtZW51LWJ0bicpXHJcbiAgICAgICAgdGhpcy5pc01lbnVPcGVuID0gZmFsc2VcclxuICAgICAgICB0aGlzLmV2ZW50cygpXHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlTWVudS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyTWVudShlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zdWJtZW51QnRuLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVN1Yk1lbnUoZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHRoaXMua2V5UHJlc3MoZSkpXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHRoaXMuY2hhbmdlSGVhZGVyKCkpXHJcbiAgICB9XHJcblxyXG4gICAgdHJpZ2dlck1lbnUoZSkge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJylcclxuICAgICAgICBjb25zdCB0YXJnZXRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbmFtZT1cIicgKyB0YXJnZXQgKyAnXCJdJylcclxuICAgICAgICBjb25zdCBvdGhlck1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmFtZV06bm90KFtkYXRhLW5hbWU9XCInICsgdGFyZ2V0ICsgJ1wiXSknKVxyXG5cclxuICAgICAgICBpZiAoIXRhcmdldE1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgLy8gQ2xvc2Ugb3RoZXIgb3BlbiBtZW51cyBmaXJzdFxyXG4gICAgICAgICAgICBvdGhlck1lbnVzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1lbnUoZWwpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLm9wZW5NZW51KHRhcmdldE1lbnUpXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTWVudSh0YXJnZXRNZW51KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcGVuTWVudShtZW51KSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBtZW51LmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJylcclxuICAgICAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdG9nZ2xlPVwiJyArIGlkICsgJ1wiXScpXHJcblxyXG4gICAgICAgIFV0aWxpdHkuYm9keVNjcm9sbExvY2soKVxyXG5cclxuICAgICAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QuYWRkKCdpcy1zY3JvbGxlZCcpXHJcblxyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpXHJcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgIG1lbnVCdG4uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKVxyXG5cclxuICAgICAgICB0aGlzLmlzTWVudU9wZW4gPSB0cnVlXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTWVudShtZW51KSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBtZW51LmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJylcclxuICAgICAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdG9nZ2xlPVwiJyArIGlkICsgJ1wiXScpXHJcblxyXG4gICAgICAgIFV0aWxpdHkuYm9keVNjcm9sbFVubG9jaygpXHJcblxyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpXHJcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgIG1lbnVCdG4uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcclxuXHJcbiAgICAgICAgdGhpcy5pc01lbnVPcGVuID0gZmFsc2VcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlU3ViTWVudShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc3QgYnRuID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IHRhcmdldE1lbnUgPSBidG4ucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuc3VibWVudScpXHJcblxyXG4gICAgICAgIGlmICghdGFyZ2V0TWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpXHJcbiAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpXHJcbiAgICAgICAgICAgIHRhcmdldE1lbnUuY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpO1xyXG4gICAgICAgICAgICB0YXJnZXRNZW51LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuXHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSB0YXJnZXRNZW51LmNsaWVudEhlaWdodCArICdweCc7XHJcblxyXG4gICAgICAgICAgICB0YXJnZXRNZW51LnN0eWxlLmhlaWdodCA9ICcwcHgnO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldE1lbnUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgICAgIHRhcmdldE1lbnUuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TWVudS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgb25jZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKVxyXG4gICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcclxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IHRhcmdldE1lbnUuY2xpZW50SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgdGFyZ2V0TWVudS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TWVudS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcclxuICAgICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgICAgICB0YXJnZXRNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldE1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TWVudS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgb25jZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGtleVByZXNzKGUpIHtcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09IDI3ICYmIHRoaXMuaXNNZW51T3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLm1lbnUuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTWVudShlbClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlSGVhZGVyKCkge1xyXG4gICAgICAgIGxldCBzY3JvbGxQb3MgPSB3aW5kb3cuc2Nyb2xsWVxyXG4gICAgICAgIGlmIChzY3JvbGxQb3MgPj0gNzUgfHwgdGhpcy5pc01lbnVPcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2lzLXNjcm9sbGVkJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zY3JvbGxlZCcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVNZW51XHJcbiIsImNsYXNzIFNlYXJjaCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcl9fc2VhcmNoJylcclxuICAgICAgICB0aGlzLnNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX3RvZ2dsZScpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2lucHV0JylcclxuICAgICAgICB0aGlzLnNlYXJjaE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheS0tc2VhcmNoJylcclxuICAgICAgICB0aGlzLmlzU2VhcmNoT3BlbiA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ldmVudHMoKVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpIHtcclxuICAgICAgICAvLyBPcGVuIHNlYXJjaCBtb2RhbFxyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaEJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMudG9nZ2xlTW9kYWwoKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ2xvc2Ugc2VhcmNoIG1vZGFsXHJcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoT3ZlcmxheSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaE92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmNsb3NlTW9kYWwoKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHRoaXMua2V5UHJlc3MoZSkpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZU1vZGFsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaE1vZGFsLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuTW9kYWwoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcGVuTW9kYWwoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2VhcmNoTW9kYWwuY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpXHJcblxyXG4gICAgICAgIHRoaXMuc2VhcmNoRmllbGQudmFsdWUgPSAnJ1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZWFyY2hGaWVsZC5mb2N1cygpLCAzMDEpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJylcclxuICAgICAgICB0aGlzLnNlYXJjaEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpXHJcbiAgICAgICAgdGhpcy5pc1NlYXJjaE9wZW4gPSB0cnVlXHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTW9kYWwoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2VhcmNoTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJylcclxuICAgICAgICB0aGlzLnNlYXJjaEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxyXG4gICAgICAgIHRoaXMuaXNTZWFyY2hPcGVuID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBrZXlQcmVzcyhlKSB7XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAyNyAmJiB0aGlzLmlzU2VhcmNoT3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcclxuIiwiY2xhc3MgVXRpbGl0eSB7XHJcblxyXG4gICAgc3RhdGljIGJvZHlTY3JvbGxMb2NrKCkge1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSAtc2Nyb2xsWSArICdweCdcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGJvZHlTY3JvbGxVbmxvY2soKSB7XHJcbiAgICAgICAgY29uc3QgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZS50b3A7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9ICcnO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gJyc7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHBhcnNlSW50KGJvZHlTdHlsZSB8fCAwKSAqIC0xKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdGV4dGFyZWFIZWlnaHQodmFsdWUpIHtcclxuICAgICAgICAgICAgbGV0IG51bWJlck9mTGluZUJyZWFrcyA9ICh2YWx1ZS5tYXRjaCgvXFxuL2cpIHx8IFtdKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIC8vIG1pbi1oZWlnaHQgKyBsaW5lcyB4IGxpbmUtaGVpZ2h0ICsgcGFkZGluZyArIGJvcmRlclxyXG4gICAgICAgICAgICBsZXQgbmV3SGVpZ2h0ID0gMjAgKyBudW1iZXJPZkxpbmVCcmVha3MgKiAyMCArIDEwICsgMTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld0hlaWdodDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIG1vYmlsZUNoZWNrKCkge1xyXG4gICAgICAgIC8qIGh0dHA6Ly9kZXRlY3Rtb2JpbGVicm93c2Vycy5jb20vICovXHJcbiAgICAgICAgbGV0IGNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgKGZ1bmN0aW9uKGEpe2lmKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaS50ZXN0KGEpfHwvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsNCkpKSBjaGVjayA9IHRydWU7fSkobmF2aWdhdG9yLnVzZXJBZ2VudHx8bmF2aWdhdG9yLnZlbmRvcnx8d2luZG93Lm9wZXJhKTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBjaGVjaztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFV0aWxpdHlcclxuIiwiaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSAnLi9tb2R1bGVzL21vYmlsZU1lbnUnXHJcbmltcG9ydCBBbmltYXRpb25zIGZyb20gJy4vbW9kdWxlcy9hbmltYXRpb24nXHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9tb2R1bGVzL3NlYXJjaCdcclxuaW1wb3J0IEZvcm1zIGZyb20gJy4vbW9kdWxlcy9mb3JtcydcclxuXHJcbi8vIExvYWQgSlMgd2hlbiBET00gaXMgcmVhZHlcclxuZnVuY3Rpb24gcmFzYW5kZURvbVJlYWR5KGZuKSB7XHJcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICAgIHJldHVybiBmbigpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuLCBmYWxzZSk7XHJcbn1cclxuXHJcbnJhc2FuZGVEb21SZWFkeShmdW5jdGlvbigpIHtcclxuICAgIC8vIEluc3RhbnRpYXRlIGEgbmV3IG9iamVjdCB1c2luZyBtb2R1bGVzIC8gY2xhc3Nlc1xyXG4gICAgY29uc3QgbW9iaWxlTWVudSA9IG5ldyBNb2JpbGVNZW51KClcclxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb25zKClcclxuICAgIGNvbnN0IHNlYXJjaCA9IG5ldyBTZWFyY2goKVxyXG4gICAgY29uc3QgZm9ybXMgPSBuZXcgRm9ybXMoKVxyXG59KTtcclxuIiwiLypcclxuICogYW5pbWUuanMgdjMuMi4xXHJcbiAqIChjKSAyMDIwIEp1bGlhbiBHYXJuaWVyXHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxyXG4gKiBhbmltZWpzLmNvbVxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIERlZmF1bHRzXHJcblxyXG52YXIgZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MgPSB7XHJcbiAgICB1cGRhdGU6IG51bGwsXHJcbiAgICBiZWdpbjogbnVsbCxcclxuICAgIGxvb3BCZWdpbjogbnVsbCxcclxuICAgIGNoYW5nZUJlZ2luOiBudWxsLFxyXG4gICAgY2hhbmdlOiBudWxsLFxyXG4gICAgY2hhbmdlQ29tcGxldGU6IG51bGwsXHJcbiAgICBsb29wQ29tcGxldGU6IG51bGwsXHJcbiAgICBjb21wbGV0ZTogbnVsbCxcclxuICAgIGxvb3A6IDEsXHJcbiAgICBkaXJlY3Rpb246ICdub3JtYWwnLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICB0aW1lbGluZU9mZnNldDogMFxyXG59O1xyXG5cclxudmFyIGRlZmF1bHRUd2VlblNldHRpbmdzID0ge1xyXG4gICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICBkZWxheTogMCxcclxuICAgIGVuZERlbGF5OiAwLFxyXG4gICAgZWFzaW5nOiAnZWFzZU91dEVsYXN0aWMoMSwgLjUpJyxcclxuICAgIHJvdW5kOiAwXHJcbn07XHJcblxyXG52YXIgdmFsaWRUcmFuc2Zvcm1zID0gWyd0cmFuc2xhdGVYJywgJ3RyYW5zbGF0ZVknLCAndHJhbnNsYXRlWicsICdyb3RhdGUnLCAncm90YXRlWCcsICdyb3RhdGVZJywgJ3JvdGF0ZVonLCAnc2NhbGUnLCAnc2NhbGVYJywgJ3NjYWxlWScsICdzY2FsZVonLCAnc2tldycsICdza2V3WCcsICdza2V3WScsICdwZXJzcGVjdGl2ZScsICdtYXRyaXgnLCAnbWF0cml4M2QnXTtcclxuXHJcbi8vIENhY2hpbmdcclxuXHJcbnZhciBjYWNoZSA9IHtcclxuICAgIENTUzoge30sXHJcbiAgICBzcHJpbmdzOiB7fVxyXG59O1xyXG5cclxuLy8gVXRpbHNcclxuXHJcbmZ1bmN0aW9uIG1pbk1heCh2YWwsIG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsLCBtaW4pLCBtYXgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdHJpbmdDb250YWlucyhzdHIsIHRleHQpIHtcclxuICAgIHJldHVybiBzdHIuaW5kZXhPZih0ZXh0KSA+IC0xO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUFyZ3VtZW50cyhmdW5jLCBhcmdzKSB7XHJcbiAgICByZXR1cm4gZnVuYy5hcHBseShudWxsLCBhcmdzKTtcclxufVxyXG5cclxudmFyIGlzID0ge1xyXG4gICAgYXJyOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSk7XHJcbiAgICB9LFxyXG4gICAgb2JqOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0cmluZ0NvbnRhaW5zKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSwgJ09iamVjdCcpO1xyXG4gICAgfSxcclxuICAgIHB0aDogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiBpcy5vYmooYSkgJiYgYS5oYXNPd25Qcm9wZXJ0eSgndG90YWxMZW5ndGgnKTtcclxuICAgIH0sXHJcbiAgICBzdmc6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gYSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQ7XHJcbiAgICB9LFxyXG4gICAgaW5wOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIGEgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgfSxcclxuICAgIGRvbTogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiBhLm5vZGVUeXBlIHx8IGlzLnN2ZyhhKTtcclxuICAgIH0sXHJcbiAgICBzdHI6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIGEgPT09ICdzdHJpbmcnO1xyXG4gICAgfSxcclxuICAgIGZuYzogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJztcclxuICAgIH0sXHJcbiAgICB1bmQ6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnO1xyXG4gICAgfSxcclxuICAgIG5pbDogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiBpcy51bmQoYSkgfHwgYSA9PT0gbnVsbDtcclxuICAgIH0sXHJcbiAgICBoZXg6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gLyheI1swLTlBLUZdezZ9JCl8KF4jWzAtOUEtRl17M30kKS9pLnRlc3QoYSk7XHJcbiAgICB9LFxyXG4gICAgcmdiOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIC9ecmdiLy50ZXN0KGEpO1xyXG4gICAgfSxcclxuICAgIGhzbDogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiAvXmhzbC8udGVzdChhKTtcclxuICAgIH0sXHJcbiAgICBjb2w6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gKGlzLmhleChhKSB8fCBpcy5yZ2IoYSkgfHwgaXMuaHNsKGEpKTtcclxuICAgIH0sXHJcbiAgICBrZXk6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gIWRlZmF1bHRJbnN0YW5jZVNldHRpbmdzLmhhc093blByb3BlcnR5KGEpICYmICFkZWZhdWx0VHdlZW5TZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShhKSAmJiBhICE9PSAndGFyZ2V0cycgJiYgYSAhPT0gJ2tleWZyYW1lcyc7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuLy8gRWFzaW5nc1xyXG5cclxuZnVuY3Rpb24gcGFyc2VFYXNpbmdQYXJhbWV0ZXJzKHN0cmluZykge1xyXG4gICAgdmFyIG1hdGNoID0gL1xcKChbXildKylcXCkvLmV4ZWMoc3RyaW5nKTtcclxuICAgIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uKHApIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChwKTtcclxuICAgIH0pIDogW107XHJcbn1cclxuXHJcbi8vIFNwcmluZyBzb2x2ZXIgaW5zcGlyZWQgYnkgV2Via2l0IENvcHlyaWdodCDCqSAyMDE2IEFwcGxlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gaHR0cHM6Ly93ZWJraXQub3JnL2RlbW9zL3NwcmluZy9zcHJpbmcuanNcclxuXHJcbmZ1bmN0aW9uIHNwcmluZyhzdHJpbmcsIGR1cmF0aW9uKSB7XHJcblxyXG4gICAgdmFyIHBhcmFtcyA9IHBhcnNlRWFzaW5nUGFyYW1ldGVycyhzdHJpbmcpO1xyXG4gICAgdmFyIG1hc3MgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1swXSkgPyAxIDogcGFyYW1zWzBdLCAuMSwgMTAwKTtcclxuICAgIHZhciBzdGlmZm5lc3MgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1sxXSkgPyAxMDAgOiBwYXJhbXNbMV0sIC4xLCAxMDApO1xyXG4gICAgdmFyIGRhbXBpbmcgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1syXSkgPyAxMCA6IHBhcmFtc1syXSwgLjEsIDEwMCk7XHJcbiAgICB2YXIgdmVsb2NpdHkgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1szXSkgPyAwIDogcGFyYW1zWzNdLCAuMSwgMTAwKTtcclxuICAgIHZhciB3MCA9IE1hdGguc3FydChzdGlmZm5lc3MgLyBtYXNzKTtcclxuICAgIHZhciB6ZXRhID0gZGFtcGluZyAvICgyICogTWF0aC5zcXJ0KHN0aWZmbmVzcyAqIG1hc3MpKTtcclxuICAgIHZhciB3ZCA9IHpldGEgPCAxID8gdzAgKiBNYXRoLnNxcnQoMSAtIHpldGEgKiB6ZXRhKSA6IDA7XHJcbiAgICB2YXIgYSA9IDE7XHJcbiAgICB2YXIgYiA9IHpldGEgPCAxID8gKHpldGEgKiB3MCArIC12ZWxvY2l0eSkgLyB3ZCA6IC12ZWxvY2l0eSArIHcwO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNvbHZlcih0KSB7XHJcbiAgICAgICAgdmFyIHByb2dyZXNzID0gZHVyYXRpb24gPyAoZHVyYXRpb24gKiB0KSAvIDEwMDAgOiB0O1xyXG4gICAgICAgIGlmICh6ZXRhIDwgMSkge1xyXG4gICAgICAgICAgICBwcm9ncmVzcyA9IE1hdGguZXhwKC1wcm9ncmVzcyAqIHpldGEgKiB3MCkgKiAoYSAqIE1hdGguY29zKHdkICogcHJvZ3Jlc3MpICsgYiAqIE1hdGguc2luKHdkICogcHJvZ3Jlc3MpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwcm9ncmVzcyA9IChhICsgYiAqIHByb2dyZXNzKSAqIE1hdGguZXhwKC1wcm9ncmVzcyAqIHcwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHQgPT09IDAgfHwgdCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDEgLSBwcm9ncmVzcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREdXJhdGlvbigpIHtcclxuICAgICAgICB2YXIgY2FjaGVkID0gY2FjaGUuc3ByaW5nc1tzdHJpbmddO1xyXG4gICAgICAgIGlmIChjYWNoZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGZyYW1lID0gMSAvIDY7XHJcbiAgICAgICAgdmFyIGVsYXBzZWQgPSAwO1xyXG4gICAgICAgIHZhciByZXN0ID0gMDtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBlbGFwc2VkICs9IGZyYW1lO1xyXG4gICAgICAgICAgICBpZiAoc29sdmVyKGVsYXBzZWQpID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXN0Kys7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdCA+PSAxNikge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gZWxhcHNlZCAqIGZyYW1lICogMTAwMDtcclxuICAgICAgICBjYWNoZS5zcHJpbmdzW3N0cmluZ10gPSBkdXJhdGlvbjtcclxuICAgICAgICByZXR1cm4gZHVyYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGR1cmF0aW9uID8gc29sdmVyIDogZ2V0RHVyYXRpb247XHJcblxyXG59XHJcblxyXG4vLyBCYXNpYyBzdGVwcyBlYXNpbmcgaW1wbGVtZW50YXRpb24gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZnIvZG9jcy9XZWIvQ1NTL3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXHJcblxyXG5mdW5jdGlvbiBzdGVwcyhzdGVwcykge1xyXG4gICAgaWYgKHN0ZXBzID09PSB2b2lkIDApIHN0ZXBzID0gMTA7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKChtaW5NYXgodCwgMC4wMDAwMDEsIDEpKSAqIHN0ZXBzKSAqICgxIC8gc3RlcHMpO1xyXG4gICAgfTtcclxufVxyXG5cclxuLy8gQmV6aWVyRWFzaW5nIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZ1xyXG5cclxudmFyIGJlemllciA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgICB2YXIga1NwbGluZVRhYmxlU2l6ZSA9IDExO1xyXG4gICAgdmFyIGtTYW1wbGVTdGVwU2l6ZSA9IDEuMCAvIChrU3BsaW5lVGFibGVTaXplIC0gMS4wKTtcclxuXHJcbiAgICBmdW5jdGlvbiBBKGFBMSwgYUEyKSB7XHJcbiAgICAgICAgcmV0dXJuIDEuMCAtIDMuMCAqIGFBMiArIDMuMCAqIGFBMVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEIoYUExLCBhQTIpIHtcclxuICAgICAgICByZXR1cm4gMy4wICogYUEyIC0gNi4wICogYUExXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQyhhQTEpIHtcclxuICAgICAgICByZXR1cm4gMy4wICogYUExXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY0JlemllcihhVCwgYUExLCBhQTIpIHtcclxuICAgICAgICByZXR1cm4gKChBKGFBMSwgYUEyKSAqIGFUICsgQihhQTEsIGFBMikpICogYVQgKyBDKGFBMSkpICogYVRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTbG9wZShhVCwgYUExLCBhQTIpIHtcclxuICAgICAgICByZXR1cm4gMy4wICogQShhQTEsIGFBMikgKiBhVCAqIGFUICsgMi4wICogQihhQTEsIGFBMikgKiBhVCArIEMoYUExKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJpbmFyeVN1YmRpdmlkZShhWCwgYUEsIGFCLCBtWDEsIG1YMikge1xyXG4gICAgICAgIHZhciBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcclxuICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7XHJcbiAgICAgICAgICAgICAgICBhQiA9IGN1cnJlbnRUO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYUEgPSBjdXJyZW50VDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IDAuMDAwMDAwMSAmJiArK2kgPCAxMCk7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRUO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBhR3Vlc3NULCBtWDEsIG1YMikge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgKytpKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcclxuICAgICAgICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYmV6aWVyKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xyXG5cclxuICAgICAgICBpZiAoISgwIDw9IG1YMSAmJiBtWDEgPD0gMSAmJiAwIDw9IG1YMiAmJiBtWDIgPD0gMSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2FtcGxlVmFsdWVzID0gbmV3IEZsb2F0MzJBcnJheShrU3BsaW5lVGFibGVTaXplKTtcclxuXHJcbiAgICAgICAgaWYgKG1YMSAhPT0gbVkxIHx8IG1YMiAhPT0gbVkyKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga1NwbGluZVRhYmxlU2l6ZTsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0VEZvclgoYVgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMDtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTYW1wbGUgPSAxO1xyXG4gICAgICAgICAgICB2YXIgbGFzdFNhbXBsZSA9IGtTcGxpbmVUYWJsZVNpemUgLSAxO1xyXG5cclxuICAgICAgICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT09IGxhc3RTYW1wbGUgJiYgc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcclxuICAgICAgICAgICAgICAgIGludGVydmFsU3RhcnQgKz0ga1NhbXBsZVN0ZXBTaXplO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAtLWN1cnJlbnRTYW1wbGU7XHJcblxyXG4gICAgICAgICAgICB2YXIgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XHJcbiAgICAgICAgICAgIHZhciBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIGtTYW1wbGVTdGVwU2l6ZTtcclxuICAgICAgICAgICAgdmFyIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSAwLjAwMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQsIG1YMSwgbVgyKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGd1ZXNzRm9yVDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbih4KSB7XHJcbiAgICAgICAgICAgIGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHggPT09IDAgfHwgeCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNhbGNCZXppZXIoZ2V0VEZvclgoeCksIG1ZMSwgbVkyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBiZXppZXI7XHJcblxyXG59KSgpO1xyXG5cclxudmFyIHBlbm5lciA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvLyBCYXNlZCBvbiBqUXVlcnkgVUkncyBpbXBsZW1lbmF0aW9uIG9mIGVhc2luZyBlcXVhdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyIChodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nKVxyXG5cclxuICAgIHZhciBlYXNlcyA9IHtcclxuICAgICAgICBsaW5lYXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgZnVuY3Rpb25FYXNpbmdzID0ge1xyXG4gICAgICAgIFNpbmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDEgLSBNYXRoLmNvcyh0ICogTWF0aC5QSSAvIDIpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQ2lyYzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMSAtIE1hdGguc3FydCgxIC0gdCAqIHQpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdCAqIHQgKiAoMyAqIHQgLSAyKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIEJvdW5jZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG93MiwgYiA9IDQ7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAodCA8ICgocG93MiA9IE1hdGgucG93KDIsIC0tYikpIC0gMSkgLyAxMSkge31cclxuICAgICAgICAgICAgICAgIHJldHVybiAxIC8gTWF0aC5wb3coNCwgMyAtIGIpIC0gNy41NjI1ICogTWF0aC5wb3coKHBvdzIgKiAzIC0gMikgLyAyMiAtIHQsIDIpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBFbGFzdGljOiBmdW5jdGlvbihhbXBsaXR1ZGUsIHBlcmlvZCkge1xyXG4gICAgICAgICAgICBpZiAoYW1wbGl0dWRlID09PSB2b2lkIDApIGFtcGxpdHVkZSA9IDE7XHJcbiAgICAgICAgICAgIGlmIChwZXJpb2QgPT09IHZvaWQgMCkgcGVyaW9kID0gLjU7XHJcblxyXG4gICAgICAgICAgICB2YXIgYSA9IG1pbk1heChhbXBsaXR1ZGUsIDEsIDEwKTtcclxuICAgICAgICAgICAgdmFyIHAgPSBtaW5NYXgocGVyaW9kLCAuMSwgMik7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHQgPT09IDAgfHwgdCA9PT0gMSkgPyB0IDpcclxuICAgICAgICAgICAgICAgICAgICAtYSAqIE1hdGgucG93KDIsIDEwICogKHQgLSAxKSkgKiBNYXRoLnNpbigoKCh0IC0gMSkgLSAocCAvIChNYXRoLlBJICogMikgKiBNYXRoLmFzaW4oMSAvIGEpKSkgKiAoTWF0aC5QSSAqIDIpKSAvIHApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFzZUVhc2luZ3MgPSBbJ1F1YWQnLCAnQ3ViaWMnLCAnUXVhcnQnLCAnUXVpbnQnLCAnRXhwbyddO1xyXG5cclxuICAgIGJhc2VFYXNpbmdzLmZvckVhY2goZnVuY3Rpb24obmFtZSwgaSkge1xyXG4gICAgICAgIGZ1bmN0aW9uRWFzaW5nc1tuYW1lXSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KHQsIGkgKyAyKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgT2JqZWN0LmtleXMoZnVuY3Rpb25FYXNpbmdzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgICB2YXIgZWFzZUluID0gZnVuY3Rpb25FYXNpbmdzW25hbWVdO1xyXG4gICAgICAgIGVhc2VzWydlYXNlSW4nICsgbmFtZV0gPSBlYXNlSW47XHJcbiAgICAgICAgZWFzZXNbJ2Vhc2VPdXQnICsgbmFtZV0gPSBmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMSAtIGVhc2VJbihhLCBiKSgxIC0gdCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlYXNlc1snZWFzZUluT3V0JyArIG5hbWVdID0gZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHQgPCAwLjUgPyBlYXNlSW4oYSwgYikodCAqIDIpIC8gMiA6XHJcbiAgICAgICAgICAgICAgICAgICAgMSAtIGVhc2VJbihhLCBiKSh0ICogLTIgKyAyKSAvIDI7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlYXNlc1snZWFzZU91dEluJyArIG5hbWVdID0gZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHQgPCAwLjUgPyAoMSAtIGVhc2VJbihhLCBiKSgxIC0gdCAqIDIpKSAvIDIgOlxyXG4gICAgICAgICAgICAgICAgICAgIChlYXNlSW4oYSwgYikodCAqIDIgLSAxKSArIDEpIC8gMjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGVhc2VzO1xyXG5cclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIHBhcnNlRWFzaW5ncyhlYXNpbmcsIGR1cmF0aW9uKSB7XHJcbiAgICBpZiAoaXMuZm5jKGVhc2luZykpIHtcclxuICAgICAgICByZXR1cm4gZWFzaW5nO1xyXG4gICAgfVxyXG4gICAgdmFyIG5hbWUgPSBlYXNpbmcuc3BsaXQoJygnKVswXTtcclxuICAgIHZhciBlYXNlID0gcGVubmVyW25hbWVdO1xyXG4gICAgdmFyIGFyZ3MgPSBwYXJzZUVhc2luZ1BhcmFtZXRlcnMoZWFzaW5nKTtcclxuICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgIGNhc2UgJ3NwcmluZyc6XHJcbiAgICAgICAgICAgIHJldHVybiBzcHJpbmcoZWFzaW5nLCBkdXJhdGlvbik7XHJcbiAgICAgICAgY2FzZSAnY3ViaWNCZXppZXInOlxyXG4gICAgICAgICAgICByZXR1cm4gYXBwbHlBcmd1bWVudHMoYmV6aWVyLCBhcmdzKTtcclxuICAgICAgICBjYXNlICdzdGVwcyc6XHJcbiAgICAgICAgICAgIHJldHVybiBhcHBseUFyZ3VtZW50cyhzdGVwcywgYXJncyk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIGFwcGx5QXJndW1lbnRzKGVhc2UsIGFyZ3MpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBTdHJpbmdzXHJcblxyXG5mdW5jdGlvbiBzZWxlY3RTdHJpbmcoc3RyKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc3RyKTtcclxuICAgICAgICByZXR1cm4gbm9kZXM7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBcnJheXNcclxuXHJcbmZ1bmN0aW9uIGZpbHRlckFycmF5KGFyciwgY2FsbGJhY2spIHtcclxuICAgIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xyXG4gICAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHMubGVuZ3RoID49IDIgPyBhcmd1bWVudHNbMV0gOiB2b2lkIDA7XHJcbiAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgaW4gYXJyKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWwgPSBhcnJbaV07XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHZhbCwgaSwgYXJyKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZsYXR0ZW5BcnJheShhcnIpIHtcclxuICAgIHJldHVybiBhcnIucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYS5jb25jYXQoaXMuYXJyKGIpID8gZmxhdHRlbkFycmF5KGIpIDogYik7XHJcbiAgICB9LCBbXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvQXJyYXkobykge1xyXG4gICAgaWYgKGlzLmFycihvKSkge1xyXG4gICAgICAgIHJldHVybiBvO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzLnN0cihvKSkge1xyXG4gICAgICAgIG8gPSBzZWxlY3RTdHJpbmcobykgfHwgbztcclxuICAgIH1cclxuICAgIGlmIChvIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgbyBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwobyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW29dO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcnJheUNvbnRhaW5zKGFyciwgdmFsKSB7XHJcbiAgICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiBhID09PSB2YWw7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gT2JqZWN0c1xyXG5cclxuZnVuY3Rpb24gY2xvbmVPYmplY3Qobykge1xyXG4gICAgdmFyIGNsb25lID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIG8pIHtcclxuICAgICAgICBjbG9uZVtwXSA9IG9bcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xvbmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VPYmplY3RQcm9wcyhvMSwgbzIpIHtcclxuICAgIHZhciBvID0gY2xvbmVPYmplY3QobzEpO1xyXG4gICAgZm9yICh2YXIgcCBpbiBvMSkge1xyXG4gICAgICAgIG9bcF0gPSBvMi5oYXNPd25Qcm9wZXJ0eShwKSA/IG8yW3BdIDogbzFbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbztcclxufVxyXG5cclxuZnVuY3Rpb24gbWVyZ2VPYmplY3RzKG8xLCBvMikge1xyXG4gICAgdmFyIG8gPSBjbG9uZU9iamVjdChvMSk7XHJcbiAgICBmb3IgKHZhciBwIGluIG8yKSB7XHJcbiAgICAgICAgb1twXSA9IGlzLnVuZChvMVtwXSkgPyBvMltwXSA6IG8xW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG87XHJcbn1cclxuXHJcbi8vIENvbG9yc1xyXG5cclxuZnVuY3Rpb24gcmdiVG9SZ2JhKHJnYlZhbHVlKSB7XHJcbiAgICB2YXIgcmdiID0gL3JnYlxcKChcXGQrLFxccypbXFxkXSssXFxzKltcXGRdKylcXCkvZy5leGVjKHJnYlZhbHVlKTtcclxuICAgIHJldHVybiByZ2IgPyAoXCJyZ2JhKFwiICsgKHJnYlsxXSkgKyBcIiwxKVwiKSA6IHJnYlZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoZXhUb1JnYmEoaGV4VmFsdWUpIHtcclxuICAgIHZhciByZ3ggPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xyXG4gICAgdmFyIGhleCA9IGhleFZhbHVlLnJlcGxhY2Uocmd4LCBmdW5jdGlvbihtLCByLCBnLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIHIgKyByICsgZyArIGcgKyBiICsgYjtcclxuICAgIH0pO1xyXG4gICAgdmFyIHJnYiA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xyXG4gICAgdmFyIHIgPSBwYXJzZUludChyZ2JbMV0sIDE2KTtcclxuICAgIHZhciBnID0gcGFyc2VJbnQocmdiWzJdLCAxNik7XHJcbiAgICB2YXIgYiA9IHBhcnNlSW50KHJnYlszXSwgMTYpO1xyXG4gICAgcmV0dXJuIChcInJnYmEoXCIgKyByICsgXCIsXCIgKyBnICsgXCIsXCIgKyBiICsgXCIsMSlcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhzbFRvUmdiYShoc2xWYWx1ZSkge1xyXG4gICAgdmFyIGhzbCA9IC9oc2xcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSVcXCkvZy5leGVjKGhzbFZhbHVlKSB8fCAvaHNsYVxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspXFwpL2cuZXhlYyhoc2xWYWx1ZSk7XHJcbiAgICB2YXIgaCA9IHBhcnNlSW50KGhzbFsxXSwgMTApIC8gMzYwO1xyXG4gICAgdmFyIHMgPSBwYXJzZUludChoc2xbMl0sIDEwKSAvIDEwMDtcclxuICAgIHZhciBsID0gcGFyc2VJbnQoaHNsWzNdLCAxMCkgLyAxMDA7XHJcbiAgICB2YXIgYSA9IGhzbFs0XSB8fCAxO1xyXG5cclxuICAgIGZ1bmN0aW9uIGh1ZTJyZ2IocCwgcSwgdCkge1xyXG4gICAgICAgIGlmICh0IDwgMCkge1xyXG4gICAgICAgICAgICB0ICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0ID4gMSkge1xyXG4gICAgICAgICAgICB0IC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0IDwgMSAvIDYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0IDwgMSAvIDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0IDwgMiAvIDMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHAgKyAocSAtIHApICogKDIgLyAzIC0gdCkgKiA2O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuICAgIHZhciByLCBnLCBiO1xyXG4gICAgaWYgKHMgPT0gMCkge1xyXG4gICAgICAgIHIgPSBnID0gYiA9IGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcclxuICAgICAgICB2YXIgcCA9IDIgKiBsIC0gcTtcclxuICAgICAgICByID0gaHVlMnJnYihwLCBxLCBoICsgMSAvIDMpO1xyXG4gICAgICAgIGcgPSBodWUycmdiKHAsIHEsIGgpO1xyXG4gICAgICAgIGIgPSBodWUycmdiKHAsIHEsIGggLSAxIC8gMyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFwicmdiYShcIiArIChyICogMjU1KSArIFwiLFwiICsgKGcgKiAyNTUpICsgXCIsXCIgKyAoYiAqIDI1NSkgKyBcIixcIiArIGEgKyBcIilcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbG9yVG9SZ2IodmFsKSB7XHJcbiAgICBpZiAoaXMucmdiKHZhbCkpIHtcclxuICAgICAgICByZXR1cm4gcmdiVG9SZ2JhKHZhbCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXMuaGV4KHZhbCkpIHtcclxuICAgICAgICByZXR1cm4gaGV4VG9SZ2JhKHZhbCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXMuaHNsKHZhbCkpIHtcclxuICAgICAgICByZXR1cm4gaHNsVG9SZ2JhKHZhbCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFVuaXRzXHJcblxyXG5mdW5jdGlvbiBnZXRVbml0KHZhbCkge1xyXG4gICAgdmFyIHNwbGl0ID0gL1srLV0/XFxkKlxcLj9cXGQrKD86XFwuXFxkKyk/KD86W2VFXVsrLV0/XFxkKyk/KCV8cHh8cHR8ZW18cmVtfGlufGNtfG1tfGV4fGNofHBjfHZ3fHZofHZtaW58dm1heHxkZWd8cmFkfHR1cm4pPyQvLmV4ZWModmFsKTtcclxuICAgIGlmIChzcGxpdCkge1xyXG4gICAgICAgIHJldHVybiBzcGxpdFsxXTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtVW5pdChwcm9wTmFtZSkge1xyXG4gICAgaWYgKHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAndHJhbnNsYXRlJykgfHwgcHJvcE5hbWUgPT09ICdwZXJzcGVjdGl2ZScpIHtcclxuICAgICAgICByZXR1cm4gJ3B4JztcclxuICAgIH1cclxuICAgIGlmIChzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3JvdGF0ZScpIHx8IHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAnc2tldycpKSB7XHJcbiAgICAgICAgcmV0dXJuICdkZWcnO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBWYWx1ZXNcclxuXHJcbmZ1bmN0aW9uIGdldEZ1bmN0aW9uVmFsdWUodmFsLCBhbmltYXRhYmxlKSB7XHJcbiAgICBpZiAoIWlzLmZuYyh2YWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWwoYW5pbWF0YWJsZS50YXJnZXQsIGFuaW1hdGFibGUuaWQsIGFuaW1hdGFibGUudG90YWwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUoZWwsIHByb3ApIHtcclxuICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUocHJvcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIHtcclxuICAgIHZhciB2YWx1ZVVuaXQgPSBnZXRVbml0KHZhbHVlKTtcclxuICAgIGlmIChhcnJheUNvbnRhaW5zKFt1bml0LCAnZGVnJywgJ3JhZCcsICd0dXJuJ10sIHZhbHVlVW5pdCkpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICB2YXIgY2FjaGVkID0gY2FjaGUuQ1NTW3ZhbHVlICsgdW5pdF07XHJcbiAgICBpZiAoIWlzLnVuZChjYWNoZWQpKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhY2hlZDtcclxuICAgIH1cclxuICAgIHZhciBiYXNlbGluZSA9IDEwMDtcclxuICAgIHZhciB0ZW1wRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsLnRhZ05hbWUpO1xyXG4gICAgdmFyIHBhcmVudEVsID0gKGVsLnBhcmVudE5vZGUgJiYgKGVsLnBhcmVudE5vZGUgIT09IGRvY3VtZW50KSkgPyBlbC5wYXJlbnROb2RlIDogZG9jdW1lbnQuYm9keTtcclxuICAgIHBhcmVudEVsLmFwcGVuZENoaWxkKHRlbXBFbCk7XHJcbiAgICB0ZW1wRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgdGVtcEVsLnN0eWxlLndpZHRoID0gYmFzZWxpbmUgKyB1bml0O1xyXG4gICAgdmFyIGZhY3RvciA9IGJhc2VsaW5lIC8gdGVtcEVsLm9mZnNldFdpZHRoO1xyXG4gICAgcGFyZW50RWwucmVtb3ZlQ2hpbGQodGVtcEVsKTtcclxuICAgIHZhciBjb252ZXJ0ZWRVbml0ID0gZmFjdG9yICogcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICBjYWNoZS5DU1NbdmFsdWUgKyB1bml0XSA9IGNvbnZlcnRlZFVuaXQ7XHJcbiAgICByZXR1cm4gY29udmVydGVkVW5pdDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q1NTVmFsdWUoZWwsIHByb3AsIHVuaXQpIHtcclxuICAgIGlmIChwcm9wIGluIGVsLnN0eWxlKSB7XHJcbiAgICAgICAgdmFyIHVwcGVyY2FzZVByb3BOYW1lID0gcHJvcC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGVsLnN0eWxlW3Byb3BdIHx8IGdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUodXBwZXJjYXNlUHJvcE5hbWUpIHx8ICcwJztcclxuICAgICAgICByZXR1cm4gdW5pdCA/IGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIDogdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFuaW1hdGlvblR5cGUoZWwsIHByb3ApIHtcclxuICAgIGlmIChpcy5kb20oZWwpICYmICFpcy5pbnAoZWwpICYmICghaXMubmlsKGdldEF0dHJpYnV0ZShlbCwgcHJvcCkpIHx8IChpcy5zdmcoZWwpICYmIGVsW3Byb3BdKSkpIHtcclxuICAgICAgICByZXR1cm4gJ2F0dHJpYnV0ZSc7XHJcbiAgICB9XHJcbiAgICBpZiAoaXMuZG9tKGVsKSAmJiBhcnJheUNvbnRhaW5zKHZhbGlkVHJhbnNmb3JtcywgcHJvcCkpIHtcclxuICAgICAgICByZXR1cm4gJ3RyYW5zZm9ybSc7XHJcbiAgICB9XHJcbiAgICBpZiAoaXMuZG9tKGVsKSAmJiAocHJvcCAhPT0gJ3RyYW5zZm9ybScgJiYgZ2V0Q1NTVmFsdWUoZWwsIHByb3ApKSkge1xyXG4gICAgICAgIHJldHVybiAnY3NzJztcclxuICAgIH1cclxuICAgIGlmIChlbFtwcm9wXSAhPSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuICdvYmplY3QnO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFbGVtZW50VHJhbnNmb3JtcyhlbCkge1xyXG4gICAgaWYgKCFpcy5kb20oZWwpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHN0ciA9IGVsLnN0eWxlLnRyYW5zZm9ybSB8fCAnJztcclxuICAgIHZhciByZWcgPSAvKFxcdyspXFwoKFteKV0qKVxcKS9nO1xyXG4gICAgdmFyIHRyYW5zZm9ybXMgPSBuZXcgTWFwKCk7XHJcbiAgICB2YXIgbTtcclxuICAgIHdoaWxlIChtID0gcmVnLmV4ZWMoc3RyKSkge1xyXG4gICAgICAgIHRyYW5zZm9ybXMuc2V0KG1bMV0sIG1bMl0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRyYW5zZm9ybXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRyYW5zZm9ybVZhbHVlKGVsLCBwcm9wTmFtZSwgYW5pbWF0YWJsZSwgdW5pdCkge1xyXG4gICAgdmFyIGRlZmF1bHRWYWwgPSBzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3NjYWxlJykgPyAxIDogMCArIGdldFRyYW5zZm9ybVVuaXQocHJvcE5hbWUpO1xyXG4gICAgdmFyIHZhbHVlID0gZ2V0RWxlbWVudFRyYW5zZm9ybXMoZWwpLmdldChwcm9wTmFtZSkgfHwgZGVmYXVsdFZhbDtcclxuICAgIGlmIChhbmltYXRhYmxlKSB7XHJcbiAgICAgICAgYW5pbWF0YWJsZS50cmFuc2Zvcm1zLmxpc3Quc2V0KHByb3BOYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgYW5pbWF0YWJsZS50cmFuc2Zvcm1zWydsYXN0J10gPSBwcm9wTmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bml0ID8gY29udmVydFB4VG9Vbml0KGVsLCB2YWx1ZSwgdW5pdCkgOiB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZSh0YXJnZXQsIHByb3BOYW1lLCB1bml0LCBhbmltYXRhYmxlKSB7XHJcbiAgICBzd2l0Y2ggKGdldEFuaW1hdGlvblR5cGUodGFyZ2V0LCBwcm9wTmFtZSkpIHtcclxuICAgICAgICBjYXNlICd0cmFuc2Zvcm0nOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0VHJhbnNmb3JtVmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgYW5pbWF0YWJsZSwgdW5pdCk7XHJcbiAgICAgICAgY2FzZSAnY3NzJzpcclxuICAgICAgICAgICAgcmV0dXJuIGdldENTU1ZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIHVuaXQpO1xyXG4gICAgICAgIGNhc2UgJ2F0dHJpYnV0ZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRBdHRyaWJ1dGUodGFyZ2V0LCBwcm9wTmFtZSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wTmFtZV0gfHwgMDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVsYXRpdmVWYWx1ZSh0bywgZnJvbSkge1xyXG4gICAgdmFyIG9wZXJhdG9yID0gL14oXFwqPXxcXCs9fC09KS8uZXhlYyh0byk7XHJcbiAgICBpZiAoIW9wZXJhdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvO1xyXG4gICAgfVxyXG4gICAgdmFyIHUgPSBnZXRVbml0KHRvKSB8fCAwO1xyXG4gICAgdmFyIHggPSBwYXJzZUZsb2F0KGZyb20pO1xyXG4gICAgdmFyIHkgPSBwYXJzZUZsb2F0KHRvLnJlcGxhY2Uob3BlcmF0b3JbMF0sICcnKSk7XHJcbiAgICBzd2l0Y2ggKG9wZXJhdG9yWzBdWzBdKSB7XHJcbiAgICAgICAgY2FzZSAnKyc6XHJcbiAgICAgICAgICAgIHJldHVybiB4ICsgeSArIHU7XHJcbiAgICAgICAgY2FzZSAnLSc6XHJcbiAgICAgICAgICAgIHJldHVybiB4IC0geSArIHU7XHJcbiAgICAgICAgY2FzZSAnKic6XHJcbiAgICAgICAgICAgIHJldHVybiB4ICogeSArIHU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlVmFsdWUodmFsLCB1bml0KSB7XHJcbiAgICBpZiAoaXMuY29sKHZhbCkpIHtcclxuICAgICAgICByZXR1cm4gY29sb3JUb1JnYih2YWwpO1xyXG4gICAgfVxyXG4gICAgaWYgKC9cXHMvZy50ZXN0KHZhbCkpIHtcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG4gICAgdmFyIG9yaWdpbmFsVW5pdCA9IGdldFVuaXQodmFsKTtcclxuICAgIHZhciB1bml0TGVzcyA9IG9yaWdpbmFsVW5pdCA/IHZhbC5zdWJzdHIoMCwgdmFsLmxlbmd0aCAtIG9yaWdpbmFsVW5pdC5sZW5ndGgpIDogdmFsO1xyXG4gICAgaWYgKHVuaXQpIHtcclxuICAgICAgICByZXR1cm4gdW5pdExlc3MgKyB1bml0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuaXRMZXNzO1xyXG59XHJcblxyXG4vLyBnZXRUb3RhbExlbmd0aCgpIGVxdWl2YWxlbnQgZm9yIGNpcmNsZSwgcmVjdCwgcG9seWxpbmUsIHBvbHlnb24gYW5kIGxpbmUgc2hhcGVzXHJcbi8vIGFkYXB0ZWQgZnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9TZWJMYW1ibGEvM2UwNTUwYzQ5NmMyMzY3MDk3NDRcclxuXHJcbmZ1bmN0aW9uIGdldERpc3RhbmNlKHAxLCBwMikge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDaXJjbGVMZW5ndGgoZWwpIHtcclxuICAgIHJldHVybiBNYXRoLlBJICogMiAqIGdldEF0dHJpYnV0ZShlbCwgJ3InKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVjdExlbmd0aChlbCkge1xyXG4gICAgcmV0dXJuIChnZXRBdHRyaWJ1dGUoZWwsICd3aWR0aCcpICogMikgKyAoZ2V0QXR0cmlidXRlKGVsLCAnaGVpZ2h0JykgKiAyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGluZUxlbmd0aChlbCkge1xyXG4gICAgcmV0dXJuIGdldERpc3RhbmNlKHtcclxuICAgICAgICB4OiBnZXRBdHRyaWJ1dGUoZWwsICd4MScpLFxyXG4gICAgICAgIHk6IGdldEF0dHJpYnV0ZShlbCwgJ3kxJylcclxuICAgIH0sIHtcclxuICAgICAgICB4OiBnZXRBdHRyaWJ1dGUoZWwsICd4MicpLFxyXG4gICAgICAgIHk6IGdldEF0dHJpYnV0ZShlbCwgJ3kyJylcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQb2x5bGluZUxlbmd0aChlbCkge1xyXG4gICAgdmFyIHBvaW50cyA9IGVsLnBvaW50cztcclxuICAgIHZhciB0b3RhbExlbmd0aCA9IDA7XHJcbiAgICB2YXIgcHJldmlvdXNQb3M7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5udW1iZXJPZkl0ZW1zOyBpKyspIHtcclxuICAgICAgICB2YXIgY3VycmVudFBvcyA9IHBvaW50cy5nZXRJdGVtKGkpO1xyXG4gICAgICAgIGlmIChpID4gMCkge1xyXG4gICAgICAgICAgICB0b3RhbExlbmd0aCArPSBnZXREaXN0YW5jZShwcmV2aW91c1BvcywgY3VycmVudFBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZXZpb3VzUG9zID0gY3VycmVudFBvcztcclxuICAgIH1cclxuICAgIHJldHVybiB0b3RhbExlbmd0aDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UG9seWdvbkxlbmd0aChlbCkge1xyXG4gICAgdmFyIHBvaW50cyA9IGVsLnBvaW50cztcclxuICAgIHJldHVybiBnZXRQb2x5bGluZUxlbmd0aChlbCkgKyBnZXREaXN0YW5jZShwb2ludHMuZ2V0SXRlbShwb2ludHMubnVtYmVyT2ZJdGVtcyAtIDEpLCBwb2ludHMuZ2V0SXRlbSgwKSk7XHJcbn1cclxuXHJcbi8vIFBhdGggYW5pbWF0aW9uXHJcblxyXG5mdW5jdGlvbiBnZXRUb3RhbExlbmd0aChlbCkge1xyXG4gICAgaWYgKGVsLmdldFRvdGFsTGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsLmdldFRvdGFsTGVuZ3RoKCk7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgIGNhc2UgJ2NpcmNsZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRDaXJjbGVMZW5ndGgoZWwpO1xyXG4gICAgICAgIGNhc2UgJ3JlY3QnOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0UmVjdExlbmd0aChlbCk7XHJcbiAgICAgICAgY2FzZSAnbGluZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRMaW5lTGVuZ3RoKGVsKTtcclxuICAgICAgICBjYXNlICdwb2x5bGluZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRQb2x5bGluZUxlbmd0aChlbCk7XHJcbiAgICAgICAgY2FzZSAncG9seWdvbic6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRQb2x5Z29uTGVuZ3RoKGVsKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RGFzaG9mZnNldChlbCkge1xyXG4gICAgdmFyIHBhdGhMZW5ndGggPSBnZXRUb3RhbExlbmd0aChlbCk7XHJcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBwYXRoTGVuZ3RoKTtcclxuICAgIHJldHVybiBwYXRoTGVuZ3RoO1xyXG59XHJcblxyXG4vLyBNb3Rpb24gcGF0aFxyXG5cclxuZnVuY3Rpb24gZ2V0UGFyZW50U3ZnRWwoZWwpIHtcclxuICAgIHZhciBwYXJlbnRFbCA9IGVsLnBhcmVudE5vZGU7XHJcbiAgICB3aGlsZSAoaXMuc3ZnKHBhcmVudEVsKSkge1xyXG4gICAgICAgIGlmICghaXMuc3ZnKHBhcmVudEVsLnBhcmVudE5vZGUpKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJlbnRFbCA9IHBhcmVudEVsLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyZW50RWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhcmVudFN2ZyhwYXRoRWwsIHN2Z0RhdGEpIHtcclxuICAgIHZhciBzdmcgPSBzdmdEYXRhIHx8IHt9O1xyXG4gICAgdmFyIHBhcmVudFN2Z0VsID0gc3ZnLmVsIHx8IGdldFBhcmVudFN2Z0VsKHBhdGhFbCk7XHJcbiAgICB2YXIgcmVjdCA9IHBhcmVudFN2Z0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgdmFyIHZpZXdCb3hBdHRyID0gZ2V0QXR0cmlidXRlKHBhcmVudFN2Z0VsLCAndmlld0JveCcpO1xyXG4gICAgdmFyIHdpZHRoID0gcmVjdC53aWR0aDtcclxuICAgIHZhciBoZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgIHZhciB2aWV3Qm94ID0gc3ZnLnZpZXdCb3ggfHwgKHZpZXdCb3hBdHRyID8gdmlld0JveEF0dHIuc3BsaXQoJyAnKSA6IFswLCAwLCB3aWR0aCwgaGVpZ2h0XSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVsOiBwYXJlbnRTdmdFbCxcclxuICAgICAgICB2aWV3Qm94OiB2aWV3Qm94LFxyXG4gICAgICAgIHg6IHZpZXdCb3hbMF0gLyAxLFxyXG4gICAgICAgIHk6IHZpZXdCb3hbMV0gLyAxLFxyXG4gICAgICAgIHc6IHdpZHRoLFxyXG4gICAgICAgIGg6IGhlaWdodCxcclxuICAgICAgICB2Vzogdmlld0JveFsyXSxcclxuICAgICAgICB2SDogdmlld0JveFszXVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYXRoKHBhdGgsIHBlcmNlbnQpIHtcclxuICAgIHZhciBwYXRoRWwgPSBpcy5zdHIocGF0aCkgPyBzZWxlY3RTdHJpbmcocGF0aClbMF0gOiBwYXRoO1xyXG4gICAgdmFyIHAgPSBwZXJjZW50IHx8IDEwMDtcclxuICAgIHJldHVybiBmdW5jdGlvbihwcm9wZXJ0eSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgZWw6IHBhdGhFbCxcclxuICAgICAgICAgICAgc3ZnOiBnZXRQYXJlbnRTdmcocGF0aEVsKSxcclxuICAgICAgICAgICAgdG90YWxMZW5ndGg6IGdldFRvdGFsTGVuZ3RoKHBhdGhFbCkgKiAocCAvIDEwMClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhdGhQcm9ncmVzcyhwYXRoLCBwcm9ncmVzcywgaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHKSB7XHJcbiAgICBmdW5jdGlvbiBwb2ludChvZmZzZXQpIHtcclxuICAgICAgICBpZiAob2Zmc2V0ID09PSB2b2lkIDApIG9mZnNldCA9IDA7XHJcblxyXG4gICAgICAgIHZhciBsID0gcHJvZ3Jlc3MgKyBvZmZzZXQgPj0gMSA/IHByb2dyZXNzICsgb2Zmc2V0IDogMDtcclxuICAgICAgICByZXR1cm4gcGF0aC5lbC5nZXRQb2ludEF0TGVuZ3RoKGwpO1xyXG4gICAgfVxyXG4gICAgdmFyIHN2ZyA9IGdldFBhcmVudFN2ZyhwYXRoLmVsLCBwYXRoLnN2Zyk7XHJcbiAgICB2YXIgcCA9IHBvaW50KCk7XHJcbiAgICB2YXIgcDAgPSBwb2ludCgtMSk7XHJcbiAgICB2YXIgcDEgPSBwb2ludCgrMSk7XHJcbiAgICB2YXIgc2NhbGVYID0gaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHID8gMSA6IHN2Zy53IC8gc3ZnLnZXO1xyXG4gICAgdmFyIHNjYWxlWSA9IGlzUGF0aFRhcmdldEluc2lkZVNWRyA/IDEgOiBzdmcuaCAvIHN2Zy52SDtcclxuICAgIHN3aXRjaCAocGF0aC5wcm9wZXJ0eSkge1xyXG4gICAgICAgIGNhc2UgJ3gnOlxyXG4gICAgICAgICAgICByZXR1cm4gKHAueCAtIHN2Zy54KSAqIHNjYWxlWDtcclxuICAgICAgICBjYXNlICd5JzpcclxuICAgICAgICAgICAgcmV0dXJuIChwLnkgLSBzdmcueSkgKiBzY2FsZVk7XHJcbiAgICAgICAgY2FzZSAnYW5nbGUnOlxyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihwMS55IC0gcDAueSwgcDEueCAtIHAwLngpICogMTgwIC8gTWF0aC5QSTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gRGVjb21wb3NlIHZhbHVlXHJcblxyXG5mdW5jdGlvbiBkZWNvbXBvc2VWYWx1ZSh2YWwsIHVuaXQpIHtcclxuICAgIC8vIGNvbnN0IHJneCA9IC8tP1xcZCpcXC4/XFxkKy9nOyAvLyBoYW5kbGVzIGJhc2ljIG51bWJlcnNcclxuICAgIC8vIGNvbnN0IHJneCA9IC9bKy1dP1xcZCsoPzpcXC5cXGQrKT8oPzpbZUVdWystXT9cXGQrKT8vZzsgLy8gaGFuZGxlcyBleHBvbmVudHMgbm90YXRpb25cclxuICAgIHZhciByZ3ggPSAvWystXT9cXGQqXFwuP1xcZCsoPzpcXC5cXGQrKT8oPzpbZUVdWystXT9cXGQrKT8vZzsgLy8gaGFuZGxlcyBleHBvbmVudHMgbm90YXRpb25cclxuICAgIHZhciB2YWx1ZSA9IHZhbGlkYXRlVmFsdWUoKGlzLnB0aCh2YWwpID8gdmFsLnRvdGFsTGVuZ3RoIDogdmFsKSwgdW5pdCkgKyAnJztcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgb3JpZ2luYWw6IHZhbHVlLFxyXG4gICAgICAgIG51bWJlcnM6IHZhbHVlLm1hdGNoKHJneCkgPyB2YWx1ZS5tYXRjaChyZ3gpLm1hcChOdW1iZXIpIDogWzBdLFxyXG4gICAgICAgIHN0cmluZ3M6IChpcy5zdHIodmFsKSB8fCB1bml0KSA/IHZhbHVlLnNwbGl0KHJneCkgOiBbXVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBbmltYXRhYmxlc1xyXG5cclxuZnVuY3Rpb24gcGFyc2VUYXJnZXRzKHRhcmdldHMpIHtcclxuICAgIHZhciB0YXJnZXRzQXJyYXkgPSB0YXJnZXRzID8gKGZsYXR0ZW5BcnJheShpcy5hcnIodGFyZ2V0cykgPyB0YXJnZXRzLm1hcCh0b0FycmF5KSA6IHRvQXJyYXkodGFyZ2V0cykpKSA6IFtdO1xyXG4gICAgcmV0dXJuIGZpbHRlckFycmF5KHRhcmdldHNBcnJheSwgZnVuY3Rpb24oaXRlbSwgcG9zLCBzZWxmKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYuaW5kZXhPZihpdGVtKSA9PT0gcG9zO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFuaW1hdGFibGVzKHRhcmdldHMpIHtcclxuICAgIHZhciBwYXJzZWQgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XHJcbiAgICByZXR1cm4gcGFyc2VkLm1hcChmdW5jdGlvbih0LCBpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB0LFxyXG4gICAgICAgICAgICBpZDogaSxcclxuICAgICAgICAgICAgdG90YWw6IHBhcnNlZC5sZW5ndGgsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybXM6IHtcclxuICAgICAgICAgICAgICAgIGxpc3Q6IGdldEVsZW1lbnRUcmFuc2Zvcm1zKHQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIFByb3BlcnRpZXNcclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BlcnR5VHdlZW5zKHByb3AsIHR3ZWVuU2V0dGluZ3MpIHtcclxuICAgIHZhciBzZXR0aW5ncyA9IGNsb25lT2JqZWN0KHR3ZWVuU2V0dGluZ3MpO1xyXG4gICAgLy8gT3ZlcnJpZGUgZHVyYXRpb24gaWYgZWFzaW5nIGlzIGEgc3ByaW5nXHJcbiAgICBpZiAoL15zcHJpbmcvLnRlc3Qoc2V0dGluZ3MuZWFzaW5nKSkge1xyXG4gICAgICAgIHNldHRpbmdzLmR1cmF0aW9uID0gc3ByaW5nKHNldHRpbmdzLmVhc2luZyk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXMuYXJyKHByb3ApKSB7XHJcbiAgICAgICAgdmFyIGwgPSBwcm9wLmxlbmd0aDtcclxuICAgICAgICB2YXIgaXNGcm9tVG8gPSAobCA9PT0gMiAmJiAhaXMub2JqKHByb3BbMF0pKTtcclxuICAgICAgICBpZiAoIWlzRnJvbVRvKSB7XHJcbiAgICAgICAgICAgIC8vIER1cmF0aW9uIGRpdmlkZWQgYnkgdGhlIG51bWJlciBvZiB0d2VlbnNcclxuICAgICAgICAgICAgaWYgKCFpcy5mbmModHdlZW5TZXR0aW5ncy5kdXJhdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzLmR1cmF0aW9uID0gdHdlZW5TZXR0aW5ncy5kdXJhdGlvbiAvIGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBUcmFuc2Zvcm0gW2Zyb20sIHRvXSB2YWx1ZXMgc2hvcnRoYW5kIHRvIGEgdmFsaWQgdHdlZW4gdmFsdWVcclxuICAgICAgICAgICAgcHJvcCA9IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIHByb3BBcnJheSA9IGlzLmFycihwcm9wKSA/IHByb3AgOiBbcHJvcF07XHJcbiAgICByZXR1cm4gcHJvcEFycmF5Lm1hcChmdW5jdGlvbih2LCBpKSB7XHJcbiAgICAgICAgdmFyIG9iaiA9IChpcy5vYmoodikgJiYgIWlzLnB0aCh2KSkgPyB2IDoge1xyXG4gICAgICAgICAgICB2YWx1ZTogdlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gRGVmYXVsdCBkZWxheSB2YWx1ZSBzaG91bGQgb25seSBiZSBhcHBsaWVkIHRvIHRoZSBmaXJzdCB0d2VlblxyXG4gICAgICAgIGlmIChpcy51bmQob2JqLmRlbGF5KSkge1xyXG4gICAgICAgICAgICBvYmouZGVsYXkgPSAhaSA/IHR3ZWVuU2V0dGluZ3MuZGVsYXkgOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEZWZhdWx0IGVuZERlbGF5IHZhbHVlIHNob3VsZCBvbmx5IGJlIGFwcGxpZWQgdG8gdGhlIGxhc3QgdHdlZW5cclxuICAgICAgICBpZiAoaXMudW5kKG9iai5lbmREZWxheSkpIHtcclxuICAgICAgICAgICAgb2JqLmVuZERlbGF5ID0gaSA9PT0gcHJvcEFycmF5Lmxlbmd0aCAtIDEgPyB0d2VlblNldHRpbmdzLmVuZERlbGF5IDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH0pLm1hcChmdW5jdGlvbihrKSB7XHJcbiAgICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0cyhrLCBzZXR0aW5ncyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGZsYXR0ZW5LZXlmcmFtZXMoa2V5ZnJhbWVzKSB7XHJcbiAgICB2YXIgcHJvcGVydHlOYW1lcyA9IGZpbHRlckFycmF5KGZsYXR0ZW5BcnJheShrZXlmcmFtZXMubWFwKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoa2V5KTtcclxuICAgICAgICB9KSksIGZ1bmN0aW9uKHApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzLmtleShwKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICBpZiAoYS5pbmRleE9mKGIpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgYS5wdXNoKGIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgIHZhciBwcm9wZXJ0aWVzID0ge307XHJcbiAgICB2YXIgbG9vcCA9IGZ1bmN0aW9uKGkpIHtcclxuICAgICAgICB2YXIgcHJvcE5hbWUgPSBwcm9wZXJ0eU5hbWVzW2ldO1xyXG4gICAgICAgIHByb3BlcnRpZXNbcHJvcE5hbWVdID0ga2V5ZnJhbWVzLm1hcChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgdmFyIG5ld0tleSA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIGtleSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzLmtleShwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwID09IHByb3BOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0tleS52YWx1ZSA9IGtleVtwXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0tleVtwXSA9IGtleVtwXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3S2V5O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnR5TmFtZXMubGVuZ3RoOyBpKyspIGxvb3AoaSk7XHJcbiAgICByZXR1cm4gcHJvcGVydGllcztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UHJvcGVydGllcyh0d2VlblNldHRpbmdzLCBwYXJhbXMpIHtcclxuICAgIHZhciBwcm9wZXJ0aWVzID0gW107XHJcbiAgICB2YXIga2V5ZnJhbWVzID0gcGFyYW1zLmtleWZyYW1lcztcclxuICAgIGlmIChrZXlmcmFtZXMpIHtcclxuICAgICAgICBwYXJhbXMgPSBtZXJnZU9iamVjdHMoZmxhdHRlbktleWZyYW1lcyhrZXlmcmFtZXMpLCBwYXJhbXMpO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgcCBpbiBwYXJhbXMpIHtcclxuICAgICAgICBpZiAoaXMua2V5KHApKSB7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBwLFxyXG4gICAgICAgICAgICAgICAgdHdlZW5zOiBub3JtYWxpemVQcm9wZXJ0eVR3ZWVucyhwYXJhbXNbcF0sIHR3ZWVuU2V0dGluZ3MpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xyXG59XHJcblxyXG4vLyBUd2VlbnNcclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVR3ZWVuVmFsdWVzKHR3ZWVuLCBhbmltYXRhYmxlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiB0d2Vlbikge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGdldEZ1bmN0aW9uVmFsdWUodHdlZW5bcF0sIGFuaW1hdGFibGUpO1xyXG4gICAgICAgIGlmIChpcy5hcnIodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUubWFwKGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRGdW5jdGlvblZhbHVlKHYsIGFuaW1hdGFibGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZVswXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0W3BdID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICB0LmR1cmF0aW9uID0gcGFyc2VGbG9hdCh0LmR1cmF0aW9uKTtcclxuICAgIHQuZGVsYXkgPSBwYXJzZUZsb2F0KHQuZGVsYXkpO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVR3ZWVucyhwcm9wLCBhbmltYXRhYmxlKSB7XHJcbiAgICB2YXIgcHJldmlvdXNUd2VlbjtcclxuICAgIHJldHVybiBwcm9wLnR3ZWVucy5tYXAoZnVuY3Rpb24odCkge1xyXG4gICAgICAgIHZhciB0d2VlbiA9IG5vcm1hbGl6ZVR3ZWVuVmFsdWVzKHQsIGFuaW1hdGFibGUpO1xyXG4gICAgICAgIHZhciB0d2VlblZhbHVlID0gdHdlZW4udmFsdWU7XHJcbiAgICAgICAgdmFyIHRvID0gaXMuYXJyKHR3ZWVuVmFsdWUpID8gdHdlZW5WYWx1ZVsxXSA6IHR3ZWVuVmFsdWU7XHJcbiAgICAgICAgdmFyIHRvVW5pdCA9IGdldFVuaXQodG8pO1xyXG4gICAgICAgIHZhciBvcmlnaW5hbFZhbHVlID0gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZShhbmltYXRhYmxlLnRhcmdldCwgcHJvcC5uYW1lLCB0b1VuaXQsIGFuaW1hdGFibGUpO1xyXG4gICAgICAgIHZhciBwcmV2aW91c1ZhbHVlID0gcHJldmlvdXNUd2VlbiA/IHByZXZpb3VzVHdlZW4udG8ub3JpZ2luYWwgOiBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIHZhciBmcm9tID0gaXMuYXJyKHR3ZWVuVmFsdWUpID8gdHdlZW5WYWx1ZVswXSA6IHByZXZpb3VzVmFsdWU7XHJcbiAgICAgICAgdmFyIGZyb21Vbml0ID0gZ2V0VW5pdChmcm9tKSB8fCBnZXRVbml0KG9yaWdpbmFsVmFsdWUpO1xyXG4gICAgICAgIHZhciB1bml0ID0gdG9Vbml0IHx8IGZyb21Vbml0O1xyXG4gICAgICAgIGlmIChpcy51bmQodG8pKSB7XHJcbiAgICAgICAgICAgIHRvID0gcHJldmlvdXNWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHdlZW4uZnJvbSA9IGRlY29tcG9zZVZhbHVlKGZyb20sIHVuaXQpO1xyXG4gICAgICAgIHR3ZWVuLnRvID0gZGVjb21wb3NlVmFsdWUoZ2V0UmVsYXRpdmVWYWx1ZSh0bywgZnJvbSksIHVuaXQpO1xyXG4gICAgICAgIHR3ZWVuLnN0YXJ0ID0gcHJldmlvdXNUd2VlbiA/IHByZXZpb3VzVHdlZW4uZW5kIDogMDtcclxuICAgICAgICB0d2Vlbi5lbmQgPSB0d2Vlbi5zdGFydCArIHR3ZWVuLmRlbGF5ICsgdHdlZW4uZHVyYXRpb24gKyB0d2Vlbi5lbmREZWxheTtcclxuICAgICAgICB0d2Vlbi5lYXNpbmcgPSBwYXJzZUVhc2luZ3ModHdlZW4uZWFzaW5nLCB0d2Vlbi5kdXJhdGlvbik7XHJcbiAgICAgICAgdHdlZW4uaXNQYXRoID0gaXMucHRoKHR3ZWVuVmFsdWUpO1xyXG4gICAgICAgIHR3ZWVuLmlzUGF0aFRhcmdldEluc2lkZVNWRyA9IHR3ZWVuLmlzUGF0aCAmJiBpcy5zdmcoYW5pbWF0YWJsZS50YXJnZXQpO1xyXG4gICAgICAgIHR3ZWVuLmlzQ29sb3IgPSBpcy5jb2wodHdlZW4uZnJvbS5vcmlnaW5hbCk7XHJcbiAgICAgICAgaWYgKHR3ZWVuLmlzQ29sb3IpIHtcclxuICAgICAgICAgICAgdHdlZW4ucm91bmQgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmV2aW91c1R3ZWVuID0gdHdlZW47XHJcbiAgICAgICAgcmV0dXJuIHR3ZWVuO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIFR3ZWVuIHByb2dyZXNzXHJcblxyXG52YXIgc2V0UHJvZ3Jlc3NWYWx1ZSA9IHtcclxuICAgIGNzczogZnVuY3Rpb24odCwgcCwgdikge1xyXG4gICAgICAgIHJldHVybiB0LnN0eWxlW3BdID0gdjtcclxuICAgIH0sXHJcbiAgICBhdHRyaWJ1dGU6IGZ1bmN0aW9uKHQsIHAsIHYpIHtcclxuICAgICAgICByZXR1cm4gdC5zZXRBdHRyaWJ1dGUocCwgdik7XHJcbiAgICB9LFxyXG4gICAgb2JqZWN0OiBmdW5jdGlvbih0LCBwLCB2KSB7XHJcbiAgICAgICAgcmV0dXJuIHRbcF0gPSB2O1xyXG4gICAgfSxcclxuICAgIHRyYW5zZm9ybTogZnVuY3Rpb24odCwgcCwgdiwgdHJhbnNmb3JtcywgbWFudWFsKSB7XHJcbiAgICAgICAgdHJhbnNmb3Jtcy5saXN0LnNldChwLCB2KTtcclxuICAgICAgICBpZiAocCA9PT0gdHJhbnNmb3Jtcy5sYXN0IHx8IG1hbnVhbCkge1xyXG4gICAgICAgICAgICB2YXIgc3RyID0gJyc7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybXMubGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBwcm9wKSB7XHJcbiAgICAgICAgICAgICAgICBzdHIgKz0gcHJvcCArIFwiKFwiICsgdmFsdWUgKyBcIikgXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0LnN0eWxlLnRyYW5zZm9ybSA9IHN0cjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBTZXQgVmFsdWUgaGVscGVyXHJcblxyXG5mdW5jdGlvbiBzZXRUYXJnZXRzVmFsdWUodGFyZ2V0cywgcHJvcGVydGllcykge1xyXG4gICAgdmFyIGFuaW1hdGFibGVzID0gZ2V0QW5pbWF0YWJsZXModGFyZ2V0cyk7XHJcbiAgICBhbmltYXRhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGFuaW1hdGFibGUpIHtcclxuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGdldEZ1bmN0aW9uVmFsdWUocHJvcGVydGllc1twcm9wZXJ0eV0sIGFuaW1hdGFibGUpO1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gYW5pbWF0YWJsZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZVVuaXQgPSBnZXRVbml0KHZhbHVlKTtcclxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsVmFsdWUgPSBnZXRPcmlnaW5hbFRhcmdldFZhbHVlKHRhcmdldCwgcHJvcGVydHksIHZhbHVlVW5pdCwgYW5pbWF0YWJsZSk7XHJcbiAgICAgICAgICAgIHZhciB1bml0ID0gdmFsdWVVbml0IHx8IGdldFVuaXQob3JpZ2luYWxWYWx1ZSk7XHJcbiAgICAgICAgICAgIHZhciB0byA9IGdldFJlbGF0aXZlVmFsdWUodmFsaWRhdGVWYWx1ZSh2YWx1ZSwgdW5pdCksIG9yaWdpbmFsVmFsdWUpO1xyXG4gICAgICAgICAgICB2YXIgYW5pbVR5cGUgPSBnZXRBbmltYXRpb25UeXBlKHRhcmdldCwgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICBzZXRQcm9ncmVzc1ZhbHVlW2FuaW1UeXBlXSh0YXJnZXQsIHByb3BlcnR5LCB0bywgYW5pbWF0YWJsZS50cmFuc2Zvcm1zLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gQW5pbWF0aW9uc1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQW5pbWF0aW9uKGFuaW1hdGFibGUsIHByb3ApIHtcclxuICAgIHZhciBhbmltVHlwZSA9IGdldEFuaW1hdGlvblR5cGUoYW5pbWF0YWJsZS50YXJnZXQsIHByb3AubmFtZSk7XHJcbiAgICBpZiAoYW5pbVR5cGUpIHtcclxuICAgICAgICB2YXIgdHdlZW5zID0gbm9ybWFsaXplVHdlZW5zKHByb3AsIGFuaW1hdGFibGUpO1xyXG4gICAgICAgIHZhciBsYXN0VHdlZW4gPSB0d2VlbnNbdHdlZW5zLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IGFuaW1UeXBlLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eTogcHJvcC5uYW1lLFxyXG4gICAgICAgICAgICBhbmltYXRhYmxlOiBhbmltYXRhYmxlLFxyXG4gICAgICAgICAgICB0d2VlbnM6IHR3ZWVucyxcclxuICAgICAgICAgICAgZHVyYXRpb246IGxhc3RUd2Vlbi5lbmQsXHJcbiAgICAgICAgICAgIGRlbGF5OiB0d2VlbnNbMF0uZGVsYXksXHJcbiAgICAgICAgICAgIGVuZERlbGF5OiBsYXN0VHdlZW4uZW5kRGVsYXlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFuaW1hdGlvbnMoYW5pbWF0YWJsZXMsIHByb3BlcnRpZXMpIHtcclxuICAgIHJldHVybiBmaWx0ZXJBcnJheShmbGF0dGVuQXJyYXkoYW5pbWF0YWJsZXMubWFwKGZ1bmN0aW9uKGFuaW1hdGFibGUpIHtcclxuICAgICAgICByZXR1cm4gcHJvcGVydGllcy5tYXAoZnVuY3Rpb24ocHJvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQW5pbWF0aW9uKGFuaW1hdGFibGUsIHByb3ApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSkpLCBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuICFpcy51bmQoYSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gQ3JlYXRlIEluc3RhbmNlXHJcblxyXG5mdW5jdGlvbiBnZXRJbnN0YW5jZVRpbWluZ3MoYW5pbWF0aW9ucywgdHdlZW5TZXR0aW5ncykge1xyXG4gICAgdmFyIGFuaW1MZW5ndGggPSBhbmltYXRpb25zLmxlbmd0aDtcclxuICAgIHZhciBnZXRUbE9mZnNldCA9IGZ1bmN0aW9uKGFuaW0pIHtcclxuICAgICAgICByZXR1cm4gYW5pbS50aW1lbGluZU9mZnNldCA/IGFuaW0udGltZWxpbmVPZmZzZXQgOiAwO1xyXG4gICAgfTtcclxuICAgIHZhciB0aW1pbmdzID0ge307XHJcbiAgICB0aW1pbmdzLmR1cmF0aW9uID0gYW5pbUxlbmd0aCA/IE1hdGgubWF4LmFwcGx5KE1hdGgsIGFuaW1hdGlvbnMubWFwKGZ1bmN0aW9uKGFuaW0pIHtcclxuICAgICAgICByZXR1cm4gZ2V0VGxPZmZzZXQoYW5pbSkgKyBhbmltLmR1cmF0aW9uO1xyXG4gICAgfSkpIDogdHdlZW5TZXR0aW5ncy5kdXJhdGlvbjtcclxuICAgIHRpbWluZ3MuZGVsYXkgPSBhbmltTGVuZ3RoID8gTWF0aC5taW4uYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24oYW5pbSkge1xyXG4gICAgICAgIHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZGVsYXk7XHJcbiAgICB9KSkgOiB0d2VlblNldHRpbmdzLmRlbGF5O1xyXG4gICAgdGltaW5ncy5lbmREZWxheSA9IGFuaW1MZW5ndGggPyB0aW1pbmdzLmR1cmF0aW9uIC0gTWF0aC5tYXguYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24oYW5pbSkge1xyXG4gICAgICAgIHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZHVyYXRpb24gLSBhbmltLmVuZERlbGF5O1xyXG4gICAgfSkpIDogdHdlZW5TZXR0aW5ncy5lbmREZWxheTtcclxuICAgIHJldHVybiB0aW1pbmdzO1xyXG59XHJcblxyXG52YXIgaW5zdGFuY2VJRCA9IDA7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOZXdJbnN0YW5jZShwYXJhbXMpIHtcclxuICAgIHZhciBpbnN0YW5jZVNldHRpbmdzID0gcmVwbGFjZU9iamVjdFByb3BzKGRlZmF1bHRJbnN0YW5jZVNldHRpbmdzLCBwYXJhbXMpO1xyXG4gICAgdmFyIHR3ZWVuU2V0dGluZ3MgPSByZXBsYWNlT2JqZWN0UHJvcHMoZGVmYXVsdFR3ZWVuU2V0dGluZ3MsIHBhcmFtcyk7XHJcbiAgICB2YXIgcHJvcGVydGllcyA9IGdldFByb3BlcnRpZXModHdlZW5TZXR0aW5ncywgcGFyYW1zKTtcclxuICAgIHZhciBhbmltYXRhYmxlcyA9IGdldEFuaW1hdGFibGVzKHBhcmFtcy50YXJnZXRzKTtcclxuICAgIHZhciBhbmltYXRpb25zID0gZ2V0QW5pbWF0aW9ucyhhbmltYXRhYmxlcywgcHJvcGVydGllcyk7XHJcbiAgICB2YXIgdGltaW5ncyA9IGdldEluc3RhbmNlVGltaW5ncyhhbmltYXRpb25zLCB0d2VlblNldHRpbmdzKTtcclxuICAgIHZhciBpZCA9IGluc3RhbmNlSUQ7XHJcbiAgICBpbnN0YW5jZUlEKys7XHJcbiAgICByZXR1cm4gbWVyZ2VPYmplY3RzKGluc3RhbmNlU2V0dGluZ3MsIHtcclxuICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIGFuaW1hdGFibGVzOiBhbmltYXRhYmxlcyxcclxuICAgICAgICBhbmltYXRpb25zOiBhbmltYXRpb25zLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aW1pbmdzLmR1cmF0aW9uLFxyXG4gICAgICAgIGRlbGF5OiB0aW1pbmdzLmRlbGF5LFxyXG4gICAgICAgIGVuZERlbGF5OiB0aW1pbmdzLmVuZERlbGF5XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gQ29yZVxyXG5cclxudmFyIGFjdGl2ZUluc3RhbmNlcyA9IFtdO1xyXG5cclxudmFyIGVuZ2luZSA9IChmdW5jdGlvbigpIHtcclxuICAgIHZhciByYWY7XHJcblxyXG4gICAgZnVuY3Rpb24gcGxheSgpIHtcclxuICAgICAgICBpZiAoIXJhZiAmJiAoIWlzRG9jdW1lbnRIaWRkZW4oKSB8fCAhYW5pbWUuc3VzcGVuZFdoZW5Eb2N1bWVudEhpZGRlbikgJiYgYWN0aXZlSW5zdGFuY2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdGVwKHQpIHtcclxuICAgICAgICAvLyBtZW1vIG9uIGFsZ29yaXRobSBpc3N1ZTpcclxuICAgICAgICAvLyBkYW5nZXJvdXMgaXRlcmF0aW9uIG92ZXIgbXV0YWJsZSBgYWN0aXZlSW5zdGFuY2VzYFxyXG4gICAgICAgIC8vICh0aGF0IGNvbGxlY3Rpb24gbWF5IGJlIHVwZGF0ZWQgZnJvbSB3aXRoaW4gY2FsbGJhY2tzIG9mIGB0aWNrYC1lZCBhbmltYXRpb24gaW5zdGFuY2VzKVxyXG4gICAgICAgIHZhciBhY3RpdmVJbnN0YW5jZXNMZW5ndGggPSBhY3RpdmVJbnN0YW5jZXMubGVuZ3RoO1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICB3aGlsZSAoaSA8IGFjdGl2ZUluc3RhbmNlc0xlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgYWN0aXZlSW5zdGFuY2UgPSBhY3RpdmVJbnN0YW5jZXNbaV07XHJcbiAgICAgICAgICAgIGlmICghYWN0aXZlSW5zdGFuY2UucGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbnN0YW5jZS50aWNrKHQpO1xyXG4gICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5zdGFuY2VzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUluc3RhbmNlc0xlbmd0aC0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJhZiA9IGkgPiAwID8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoKSB7XHJcbiAgICAgICAgaWYgKCFhbmltZS5zdXNwZW5kV2hlbkRvY3VtZW50SGlkZGVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0RvY3VtZW50SGlkZGVuKCkpIHtcclxuICAgICAgICAgICAgLy8gc3VzcGVuZCB0aWNrc1xyXG4gICAgICAgICAgICByYWYgPSBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xyXG4gICAgICAgIH0gZWxzZSB7IC8vIGlzIGJhY2sgdG8gYWN0aXZlIHRhYlxyXG4gICAgICAgICAgICAvLyBmaXJzdCBhZGp1c3QgYW5pbWF0aW9ucyB0byBjb25zaWRlciB0aGUgdGltZSB0aGF0IHRpY2tzIHdlcmUgc3VzcGVuZGVkXHJcbiAgICAgICAgICAgIGFjdGl2ZUluc3RhbmNlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2UuX29uRG9jdW1lbnRWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGVuZ2luZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwbGF5O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gaXNEb2N1bWVudEhpZGRlbigpIHtcclxuICAgIHJldHVybiAhIWRvY3VtZW50ICYmIGRvY3VtZW50LmhpZGRlbjtcclxufVxyXG5cclxuLy8gUHVibGljIEluc3RhbmNlXHJcblxyXG5mdW5jdGlvbiBhbmltZShwYXJhbXMpIHtcclxuICAgIGlmIChwYXJhbXMgPT09IHZvaWQgMCkgcGFyYW1zID0ge307XHJcblxyXG5cclxuICAgIHZhciBzdGFydFRpbWUgPSAwLFxyXG4gICAgICAgIGxhc3RUaW1lID0gMCxcclxuICAgICAgICBub3cgPSAwO1xyXG4gICAgdmFyIGNoaWxkcmVuLCBjaGlsZHJlbkxlbmd0aCA9IDA7XHJcbiAgICB2YXIgcmVzb2x2ZSA9IG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZVByb21pc2UoaW5zdGFuY2UpIHtcclxuICAgICAgICB2YXIgcHJvbWlzZSA9IHdpbmRvdy5Qcm9taXNlICYmIG5ldyBQcm9taXNlKGZ1bmN0aW9uKF9yZXNvbHZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlID0gX3Jlc29sdmU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW5zdGFuY2UuZmluaXNoZWQgPSBwcm9taXNlO1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpbnN0YW5jZSA9IGNyZWF0ZU5ld0luc3RhbmNlKHBhcmFtcyk7XHJcbiAgICB2YXIgcHJvbWlzZSA9IG1ha2VQcm9taXNlKGluc3RhbmNlKTtcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVJbnN0YW5jZURpcmVjdGlvbigpIHtcclxuICAgICAgICB2YXIgZGlyZWN0aW9uID0gaW5zdGFuY2UuZGlyZWN0aW9uO1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gIT09ICdhbHRlcm5hdGUnKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbiAhPT0gJ25vcm1hbCcgPyAnbm9ybWFsJyA6ICdyZXZlcnNlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5zdGFuY2UucmV2ZXJzZWQgPSAhaW5zdGFuY2UucmV2ZXJzZWQ7XHJcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2hpbGQucmV2ZXJzZWQgPSBpbnN0YW5jZS5yZXZlcnNlZDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGp1c3RUaW1lKHRpbWUpIHtcclxuICAgICAgICByZXR1cm4gaW5zdGFuY2UucmV2ZXJzZWQgPyBpbnN0YW5jZS5kdXJhdGlvbiAtIHRpbWUgOiB0aW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0VGltZSgpIHtcclxuICAgICAgICBzdGFydFRpbWUgPSAwO1xyXG4gICAgICAgIGxhc3RUaW1lID0gYWRqdXN0VGltZShpbnN0YW5jZS5jdXJyZW50VGltZSkgKiAoMSAvIGFuaW1lLnNwZWVkKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWVrQ2hpbGQodGltZSwgY2hpbGQpIHtcclxuICAgICAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQuc2Vlayh0aW1lIC0gY2hpbGQudGltZWxpbmVPZmZzZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzeW5jSW5zdGFuY2VDaGlsZHJlbih0aW1lKSB7XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZS5yZXZlcnNlUGxheWJhY2spIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzZWVrQ2hpbGQodGltZSwgY2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSQxID0gY2hpbGRyZW5MZW5ndGg7IGkkMS0tOykge1xyXG4gICAgICAgICAgICAgICAgc2Vla0NoaWxkKHRpbWUsIGNoaWxkcmVuW2kkMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNUaW1lKSB7XHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgIHZhciBhbmltYXRpb25zID0gaW5zdGFuY2UuYW5pbWF0aW9ucztcclxuICAgICAgICB2YXIgYW5pbWF0aW9uc0xlbmd0aCA9IGFuaW1hdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChpIDwgYW5pbWF0aW9uc0xlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgYW5pbSA9IGFuaW1hdGlvbnNbaV07XHJcbiAgICAgICAgICAgIHZhciBhbmltYXRhYmxlID0gYW5pbS5hbmltYXRhYmxlO1xyXG4gICAgICAgICAgICB2YXIgdHdlZW5zID0gYW5pbS50d2VlbnM7XHJcbiAgICAgICAgICAgIHZhciB0d2Vlbkxlbmd0aCA9IHR3ZWVucy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB2YXIgdHdlZW4gPSB0d2VlbnNbdHdlZW5MZW5ndGhdO1xyXG4gICAgICAgICAgICAvLyBPbmx5IGNoZWNrIGZvciBrZXlmcmFtZXMgaWYgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSB0d2VlblxyXG4gICAgICAgICAgICBpZiAodHdlZW5MZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHR3ZWVuID0gZmlsdGVyQXJyYXkodHdlZW5zLCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChpbnNUaW1lIDwgdC5lbmQpO1xyXG4gICAgICAgICAgICAgICAgfSlbMF0gfHwgdHdlZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGVsYXBzZWQgPSBtaW5NYXgoaW5zVGltZSAtIHR3ZWVuLnN0YXJ0IC0gdHdlZW4uZGVsYXksIDAsIHR3ZWVuLmR1cmF0aW9uKSAvIHR3ZWVuLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICB2YXIgZWFzZWQgPSBpc05hTihlbGFwc2VkKSA/IDEgOiB0d2Vlbi5lYXNpbmcoZWxhcHNlZCk7XHJcbiAgICAgICAgICAgIHZhciBzdHJpbmdzID0gdHdlZW4udG8uc3RyaW5ncztcclxuICAgICAgICAgICAgdmFyIHJvdW5kID0gdHdlZW4ucm91bmQ7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJzID0gW107XHJcbiAgICAgICAgICAgIHZhciB0b051bWJlcnNMZW5ndGggPSB0d2Vlbi50by5udW1iZXJzLmxlbmd0aDtcclxuICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gKHZvaWQgMCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdG9OdW1iZXJzTGVuZ3RoOyBuKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9ICh2b2lkIDApO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvTnVtYmVyID0gdHdlZW4udG8ubnVtYmVyc1tuXTtcclxuICAgICAgICAgICAgICAgIHZhciBmcm9tTnVtYmVyID0gdHdlZW4uZnJvbS5udW1iZXJzW25dIHx8IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXR3ZWVuLmlzUGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZnJvbU51bWJlciArIChlYXNlZCAqICh0b051bWJlciAtIGZyb21OdW1iZXIpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBnZXRQYXRoUHJvZ3Jlc3ModHdlZW4udmFsdWUsIGVhc2VkICogdG9OdW1iZXIsIHR3ZWVuLmlzUGF0aFRhcmdldEluc2lkZVNWRyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0d2Vlbi5pc0NvbG9yICYmIG4gPiAyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgKiByb3VuZCkgLyByb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBudW1iZXJzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE1hbnVhbCBBcnJheS5yZWR1Y2UgZm9yIGJldHRlciBwZXJmb3JtYW5jZXNcclxuICAgICAgICAgICAgdmFyIHN0cmluZ3NMZW5ndGggPSBzdHJpbmdzLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKCFzdHJpbmdzTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IG51bWJlcnNbMF07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IHN0cmluZ3NbMF07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IHN0cmluZ3NMZW5ndGg7IHMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gc3RyaW5nc1tzXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYiA9IHN0cmluZ3NbcyArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuJDEgPSBudW1iZXJzW3NdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4obiQxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzICs9IG4kMSArICcgJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzICs9IG4kMSArIGI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0UHJvZ3Jlc3NWYWx1ZVthbmltLnR5cGVdKGFuaW1hdGFibGUudGFyZ2V0LCBhbmltLnByb3BlcnR5LCBwcm9ncmVzcywgYW5pbWF0YWJsZS50cmFuc2Zvcm1zKTtcclxuICAgICAgICAgICAgYW5pbS5jdXJyZW50VmFsdWUgPSBwcm9ncmVzcztcclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDYWxsYmFjayhjYikge1xyXG4gICAgICAgIGlmIChpbnN0YW5jZVtjYl0gJiYgIWluc3RhbmNlLnBhc3NUaHJvdWdoKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlW2NiXShpbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvdW50SXRlcmF0aW9uKCkge1xyXG4gICAgICAgIGlmIChpbnN0YW5jZS5yZW1haW5pbmcgJiYgaW5zdGFuY2UucmVtYWluaW5nICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLnJlbWFpbmluZy0tO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRJbnN0YW5jZVByb2dyZXNzKGVuZ2luZVRpbWUpIHtcclxuICAgICAgICB2YXIgaW5zRHVyYXRpb24gPSBpbnN0YW5jZS5kdXJhdGlvbjtcclxuICAgICAgICB2YXIgaW5zRGVsYXkgPSBpbnN0YW5jZS5kZWxheTtcclxuICAgICAgICB2YXIgaW5zRW5kRGVsYXkgPSBpbnNEdXJhdGlvbiAtIGluc3RhbmNlLmVuZERlbGF5O1xyXG4gICAgICAgIHZhciBpbnNUaW1lID0gYWRqdXN0VGltZShlbmdpbmVUaW1lKTtcclxuICAgICAgICBpbnN0YW5jZS5wcm9ncmVzcyA9IG1pbk1heCgoaW5zVGltZSAvIGluc0R1cmF0aW9uKSAqIDEwMCwgMCwgMTAwKTtcclxuICAgICAgICBpbnN0YW5jZS5yZXZlcnNlUGxheWJhY2sgPSBpbnNUaW1lIDwgaW5zdGFuY2UuY3VycmVudFRpbWU7XHJcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIHN5bmNJbnN0YW5jZUNoaWxkcmVuKGluc1RpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWluc3RhbmNlLmJlZ2FuICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lID4gMCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5iZWdhbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHNldENhbGxiYWNrKCdiZWdpbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWluc3RhbmNlLmxvb3BCZWdhbiAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSA+IDApIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UubG9vcEJlZ2FuID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2V0Q2FsbGJhY2soJ2xvb3BCZWdpbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5zVGltZSA8PSBpbnNEZWxheSAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSAhPT0gMCkge1xyXG4gICAgICAgICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoaW5zVGltZSA+PSBpbnNFbmREZWxheSAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSAhPT0gaW5zRHVyYXRpb24pIHx8ICFpbnNEdXJhdGlvbikge1xyXG4gICAgICAgICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zRHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5zVGltZSA+IGluc0RlbGF5ICYmIGluc1RpbWUgPCBpbnNFbmREZWxheSkge1xyXG4gICAgICAgICAgICBpZiAoIWluc3RhbmNlLmNoYW5nZUJlZ2FuKSB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5jaGFuZ2VDb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2VCZWdpbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc1RpbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5jaGFuZ2VCZWdhbikge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuY2hhbmdlQ29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzZXRDYWxsYmFjaygnY2hhbmdlQ29tcGxldGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbnN0YW5jZS5jdXJyZW50VGltZSA9IG1pbk1heChpbnNUaW1lLCAwLCBpbnNEdXJhdGlvbik7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLmJlZ2FuKSB7XHJcbiAgICAgICAgICAgIHNldENhbGxiYWNrKCd1cGRhdGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVuZ2luZVRpbWUgPj0gaW5zRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgbGFzdFRpbWUgPSAwO1xyXG4gICAgICAgICAgICBjb3VudEl0ZXJhdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoIWluc3RhbmNlLnJlbWFpbmluZykge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UucGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmICghaW5zdGFuY2UuY29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuY29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYWxsYmFjaygnbG9vcENvbXBsZXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2FsbGJhY2soJ2NvbXBsZXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnN0YW5jZS5wYXNzVGhyb3VnaCAmJiAnUHJvbWlzZScgaW4gd2luZG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IG1ha2VQcm9taXNlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWUgPSBub3c7XHJcbiAgICAgICAgICAgICAgICBzZXRDYWxsYmFjaygnbG9vcENvbXBsZXRlJyk7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5sb29wQmVnYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZS5kaXJlY3Rpb24gPT09ICdhbHRlcm5hdGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnN0YW5jZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBpbnN0YW5jZS5kaXJlY3Rpb247XHJcbiAgICAgICAgaW5zdGFuY2UucGFzc1Rocm91Z2ggPSBmYWxzZTtcclxuICAgICAgICBpbnN0YW5jZS5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgaW5zdGFuY2UucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIGluc3RhbmNlLnBhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgaW5zdGFuY2UuYmVnYW4gPSBmYWxzZTtcclxuICAgICAgICBpbnN0YW5jZS5sb29wQmVnYW4gPSBmYWxzZTtcclxuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IGZhbHNlO1xyXG4gICAgICAgIGluc3RhbmNlLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGluc3RhbmNlLnJldmVyc2VQbGF5YmFjayA9IGZhbHNlO1xyXG4gICAgICAgIGluc3RhbmNlLnJldmVyc2VkID0gZGlyZWN0aW9uID09PSAncmV2ZXJzZSc7XHJcbiAgICAgICAgaW5zdGFuY2UucmVtYWluaW5nID0gaW5zdGFuY2UubG9vcDtcclxuICAgICAgICBjaGlsZHJlbiA9IGluc3RhbmNlLmNoaWxkcmVuO1xyXG4gICAgICAgIGNoaWxkcmVuTGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBjaGlsZHJlbkxlbmd0aDsgaS0tOykge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5jaGlsZHJlbltpXS5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5zdGFuY2UucmV2ZXJzZWQgJiYgaW5zdGFuY2UubG9vcCAhPT0gdHJ1ZSB8fCAoZGlyZWN0aW9uID09PSAnYWx0ZXJuYXRlJyAmJiBpbnN0YW5jZS5sb29wID09PSAxKSkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5yZW1haW5pbmcrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc3RhbmNlLnJldmVyc2VkID8gaW5zdGFuY2UuZHVyYXRpb24gOiAwKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gaW50ZXJuYWwgbWV0aG9kIChmb3IgZW5naW5lKSB0byBhZGp1c3QgYW5pbWF0aW9uIHRpbWluZ3MgYmVmb3JlIHJlc3RvcmluZyBlbmdpbmUgdGlja3MgKHJBRilcclxuICAgIGluc3RhbmNlLl9vbkRvY3VtZW50VmlzaWJpbGl0eSA9IHJlc2V0VGltZTtcclxuXHJcbiAgICAvLyBTZXQgVmFsdWUgaGVscGVyXHJcblxyXG4gICAgaW5zdGFuY2Uuc2V0ID0gZnVuY3Rpb24odGFyZ2V0cywgcHJvcGVydGllcykge1xyXG4gICAgICAgIHNldFRhcmdldHNWYWx1ZSh0YXJnZXRzLCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9O1xyXG5cclxuICAgIGluc3RhbmNlLnRpY2sgPSBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgbm93ID0gdDtcclxuICAgICAgICBpZiAoIXN0YXJ0VGltZSkge1xyXG4gICAgICAgICAgICBzdGFydFRpbWUgPSBub3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEluc3RhbmNlUHJvZ3Jlc3MoKG5vdyArIChsYXN0VGltZSAtIHN0YXJ0VGltZSkpICogYW5pbWUuc3BlZWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnN0YW5jZS5zZWVrID0gZnVuY3Rpb24odGltZSkge1xyXG4gICAgICAgIHNldEluc3RhbmNlUHJvZ3Jlc3MoYWRqdXN0VGltZSh0aW1lKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGluc3RhbmNlLnBhdXNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaW5zdGFuY2UucGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICByZXNldFRpbWUoKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zdGFuY2UucGxheSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghaW5zdGFuY2UucGF1c2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLmNvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnN0YW5jZS5wYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICBhY3RpdmVJbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XHJcbiAgICAgICAgcmVzZXRUaW1lKCk7XHJcbiAgICAgICAgZW5naW5lKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGluc3RhbmNlLnJldmVyc2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0b2dnbGVJbnN0YW5jZURpcmVjdGlvbigpO1xyXG4gICAgICAgIGluc3RhbmNlLmNvbXBsZXRlZCA9IGluc3RhbmNlLnJldmVyc2VkID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIHJlc2V0VGltZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnN0YW5jZS5yZXN0YXJ0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaW5zdGFuY2UucmVzZXQoKTtcclxuICAgICAgICBpbnN0YW5jZS5wbGF5KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGluc3RhbmNlLnJlbW92ZSA9IGZ1bmN0aW9uKHRhcmdldHMpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0c0FycmF5ID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xyXG4gICAgICAgIHJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UodGFyZ2V0c0FycmF5LCBpbnN0YW5jZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGluc3RhbmNlLnJlc2V0KCk7XHJcblxyXG4gICAgaWYgKGluc3RhbmNlLmF1dG9wbGF5KSB7XHJcbiAgICAgICAgaW5zdGFuY2UucGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbnN0YW5jZTtcclxuXHJcbn1cclxuXHJcbi8vIFJlbW92ZSB0YXJnZXRzIGZyb20gYW5pbWF0aW9uXHJcblxyXG5mdW5jdGlvbiByZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnModGFyZ2V0c0FycmF5LCBhbmltYXRpb25zKSB7XHJcbiAgICBmb3IgKHZhciBhID0gYW5pbWF0aW9ucy5sZW5ndGg7IGEtLTspIHtcclxuICAgICAgICBpZiAoYXJyYXlDb250YWlucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnNbYV0uYW5pbWF0YWJsZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbnMuc3BsaWNlKGEsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0c0Zyb21JbnN0YW5jZSh0YXJnZXRzQXJyYXksIGluc3RhbmNlKSB7XHJcbiAgICB2YXIgYW5pbWF0aW9ucyA9IGluc3RhbmNlLmFuaW1hdGlvbnM7XHJcbiAgICB2YXIgY2hpbGRyZW4gPSBpbnN0YW5jZS5jaGlsZHJlbjtcclxuICAgIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnMpO1xyXG4gICAgZm9yICh2YXIgYyA9IGNoaWxkcmVuLmxlbmd0aDsgYy0tOykge1xyXG4gICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2NdO1xyXG4gICAgICAgIHZhciBjaGlsZEFuaW1hdGlvbnMgPSBjaGlsZC5hbmltYXRpb25zO1xyXG4gICAgICAgIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGNoaWxkQW5pbWF0aW9ucyk7XHJcbiAgICAgICAgaWYgKCFjaGlsZEFuaW1hdGlvbnMubGVuZ3RoICYmICFjaGlsZC5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2hpbGRyZW4uc3BsaWNlKGMsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghYW5pbWF0aW9ucy5sZW5ndGggJiYgIWNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIGluc3RhbmNlLnBhdXNlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRhcmdldHNGcm9tQWN0aXZlSW5zdGFuY2VzKHRhcmdldHMpIHtcclxuICAgIHZhciB0YXJnZXRzQXJyYXkgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XHJcbiAgICBmb3IgKHZhciBpID0gYWN0aXZlSW5zdGFuY2VzLmxlbmd0aDsgaS0tOykge1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlc1tpXTtcclxuICAgICAgICByZW1vdmVUYXJnZXRzRnJvbUluc3RhbmNlKHRhcmdldHNBcnJheSwgaW5zdGFuY2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBTdGFnZ2VyIGhlbHBlcnNcclxuXHJcbmZ1bmN0aW9uIHN0YWdnZXIodmFsLCBwYXJhbXMpIHtcclxuICAgIGlmIChwYXJhbXMgPT09IHZvaWQgMCkgcGFyYW1zID0ge307XHJcblxyXG4gICAgdmFyIGRpcmVjdGlvbiA9IHBhcmFtcy5kaXJlY3Rpb24gfHwgJ25vcm1hbCc7XHJcbiAgICB2YXIgZWFzaW5nID0gcGFyYW1zLmVhc2luZyA/IHBhcnNlRWFzaW5ncyhwYXJhbXMuZWFzaW5nKSA6IG51bGw7XHJcbiAgICB2YXIgZ3JpZCA9IHBhcmFtcy5ncmlkO1xyXG4gICAgdmFyIGF4aXMgPSBwYXJhbXMuYXhpcztcclxuICAgIHZhciBmcm9tSW5kZXggPSBwYXJhbXMuZnJvbSB8fCAwO1xyXG4gICAgdmFyIGZyb21GaXJzdCA9IGZyb21JbmRleCA9PT0gJ2ZpcnN0JztcclxuICAgIHZhciBmcm9tQ2VudGVyID0gZnJvbUluZGV4ID09PSAnY2VudGVyJztcclxuICAgIHZhciBmcm9tTGFzdCA9IGZyb21JbmRleCA9PT0gJ2xhc3QnO1xyXG4gICAgdmFyIGlzUmFuZ2UgPSBpcy5hcnIodmFsKTtcclxuICAgIHZhciB2YWwxID0gaXNSYW5nZSA/IHBhcnNlRmxvYXQodmFsWzBdKSA6IHBhcnNlRmxvYXQodmFsKTtcclxuICAgIHZhciB2YWwyID0gaXNSYW5nZSA/IHBhcnNlRmxvYXQodmFsWzFdKSA6IDA7XHJcbiAgICB2YXIgdW5pdCA9IGdldFVuaXQoaXNSYW5nZSA/IHZhbFsxXSA6IHZhbCkgfHwgMDtcclxuICAgIHZhciBzdGFydCA9IHBhcmFtcy5zdGFydCB8fCAwICsgKGlzUmFuZ2UgPyB2YWwxIDogMCk7XHJcbiAgICB2YXIgdmFsdWVzID0gW107XHJcbiAgICB2YXIgbWF4VmFsdWUgPSAwO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsLCBpLCB0KSB7XHJcbiAgICAgICAgaWYgKGZyb21GaXJzdCkge1xyXG4gICAgICAgICAgICBmcm9tSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZnJvbUNlbnRlcikge1xyXG4gICAgICAgICAgICBmcm9tSW5kZXggPSAodCAtIDEpIC8gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZyb21MYXN0KSB7XHJcbiAgICAgICAgICAgIGZyb21JbmRleCA9IHQgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHQ7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghZ3JpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKE1hdGguYWJzKGZyb21JbmRleCAtIGluZGV4KSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmcm9tWCA9ICFmcm9tQ2VudGVyID8gZnJvbUluZGV4ICUgZ3JpZFswXSA6IChncmlkWzBdIC0gMSkgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmcm9tWSA9ICFmcm9tQ2VudGVyID8gTWF0aC5mbG9vcihmcm9tSW5kZXggLyBncmlkWzBdKSA6IChncmlkWzFdIC0gMSkgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b1ggPSBpbmRleCAlIGdyaWRbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvWSA9IE1hdGguZmxvb3IoaW5kZXggLyBncmlkWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VYID0gZnJvbVggLSB0b1g7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlWSA9IGZyb21ZIC0gdG9ZO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IE1hdGguc3FydChkaXN0YW5jZVggKiBkaXN0YW5jZVggKyBkaXN0YW5jZVkgKiBkaXN0YW5jZVkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChheGlzID09PSAneCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAtZGlzdGFuY2VYO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3knKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gLWRpc3RhbmNlWTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgPSBNYXRoLm1heC5hcHBseShNYXRoLCB2YWx1ZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlYXNpbmcpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24odmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVhc2luZyh2YWwgLyBtYXhWYWx1ZSkgKiBtYXhWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdyZXZlcnNlJykge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbih2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXhpcyA/ICh2YWwgPCAwKSA/IHZhbCAqIC0xIDogLXZhbCA6IE1hdGguYWJzKG1heFZhbHVlIC0gdmFsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzcGFjaW5nID0gaXNSYW5nZSA/ICh2YWwyIC0gdmFsMSkgLyBtYXhWYWx1ZSA6IHZhbDE7XHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0ICsgKHNwYWNpbmcgKiAoTWF0aC5yb3VuZCh2YWx1ZXNbaV0gKiAxMDApIC8gMTAwKSkgKyB1bml0O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBUaW1lbGluZVxyXG5cclxuZnVuY3Rpb24gdGltZWxpbmUocGFyYW1zKSB7XHJcbiAgICBpZiAocGFyYW1zID09PSB2b2lkIDApIHBhcmFtcyA9IHt9O1xyXG5cclxuICAgIHZhciB0bCA9IGFuaW1lKHBhcmFtcyk7XHJcbiAgICB0bC5kdXJhdGlvbiA9IDA7XHJcbiAgICB0bC5hZGQgPSBmdW5jdGlvbihpbnN0YW5jZVBhcmFtcywgdGltZWxpbmVPZmZzZXQpIHtcclxuICAgICAgICB2YXIgdGxJbmRleCA9IGFjdGl2ZUluc3RhbmNlcy5pbmRleE9mKHRsKTtcclxuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0bC5jaGlsZHJlbjtcclxuICAgICAgICBpZiAodGxJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZUluc3RhbmNlcy5zcGxpY2UodGxJbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwYXNzVGhyb3VnaChpbnMpIHtcclxuICAgICAgICAgICAgaW5zLnBhc3NUaHJvdWdoID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBwYXNzVGhyb3VnaChjaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpbnNQYXJhbXMgPSBtZXJnZU9iamVjdHMoaW5zdGFuY2VQYXJhbXMsIHJlcGxhY2VPYmplY3RQcm9wcyhkZWZhdWx0VHdlZW5TZXR0aW5ncywgcGFyYW1zKSk7XHJcbiAgICAgICAgaW5zUGFyYW1zLnRhcmdldHMgPSBpbnNQYXJhbXMudGFyZ2V0cyB8fCBwYXJhbXMudGFyZ2V0cztcclxuICAgICAgICB2YXIgdGxEdXJhdGlvbiA9IHRsLmR1cmF0aW9uO1xyXG4gICAgICAgIGluc1BhcmFtcy5hdXRvcGxheSA9IGZhbHNlO1xyXG4gICAgICAgIGluc1BhcmFtcy5kaXJlY3Rpb24gPSB0bC5kaXJlY3Rpb247XHJcbiAgICAgICAgaW5zUGFyYW1zLnRpbWVsaW5lT2Zmc2V0ID0gaXMudW5kKHRpbWVsaW5lT2Zmc2V0KSA/IHRsRHVyYXRpb24gOiBnZXRSZWxhdGl2ZVZhbHVlKHRpbWVsaW5lT2Zmc2V0LCB0bER1cmF0aW9uKTtcclxuICAgICAgICBwYXNzVGhyb3VnaCh0bCk7XHJcbiAgICAgICAgdGwuc2VlayhpbnNQYXJhbXMudGltZWxpbmVPZmZzZXQpO1xyXG4gICAgICAgIHZhciBpbnMgPSBhbmltZShpbnNQYXJhbXMpO1xyXG4gICAgICAgIHBhc3NUaHJvdWdoKGlucyk7XHJcbiAgICAgICAgY2hpbGRyZW4ucHVzaChpbnMpO1xyXG4gICAgICAgIHZhciB0aW1pbmdzID0gZ2V0SW5zdGFuY2VUaW1pbmdzKGNoaWxkcmVuLCBwYXJhbXMpO1xyXG4gICAgICAgIHRsLmRlbGF5ID0gdGltaW5ncy5kZWxheTtcclxuICAgICAgICB0bC5lbmREZWxheSA9IHRpbWluZ3MuZW5kRGVsYXk7XHJcbiAgICAgICAgdGwuZHVyYXRpb24gPSB0aW1pbmdzLmR1cmF0aW9uO1xyXG4gICAgICAgIHRsLnNlZWsoMCk7XHJcbiAgICAgICAgdGwucmVzZXQoKTtcclxuICAgICAgICBpZiAodGwuYXV0b3BsYXkpIHtcclxuICAgICAgICAgICAgdGwucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGw7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRsO1xyXG59XHJcblxyXG5hbmltZS52ZXJzaW9uID0gJzMuMi4xJztcclxuYW5pbWUuc3BlZWQgPSAxO1xyXG4vLyBUT0RPOiNyZXZpZXc6IG5hbWluZywgZG9jdW1lbnRhdGlvblxyXG5hbmltZS5zdXNwZW5kV2hlbkRvY3VtZW50SGlkZGVuID0gdHJ1ZTtcclxuYW5pbWUucnVubmluZyA9IGFjdGl2ZUluc3RhbmNlcztcclxuYW5pbWUucmVtb3ZlID0gcmVtb3ZlVGFyZ2V0c0Zyb21BY3RpdmVJbnN0YW5jZXM7XHJcbmFuaW1lLmdldCA9IGdldE9yaWdpbmFsVGFyZ2V0VmFsdWU7XHJcbmFuaW1lLnNldCA9IHNldFRhcmdldHNWYWx1ZTtcclxuYW5pbWUuY29udmVydFB4ID0gY29udmVydFB4VG9Vbml0O1xyXG5hbmltZS5wYXRoID0gZ2V0UGF0aDtcclxuYW5pbWUuc2V0RGFzaG9mZnNldCA9IHNldERhc2hvZmZzZXQ7XHJcbmFuaW1lLnN0YWdnZXIgPSBzdGFnZ2VyO1xyXG5hbmltZS50aW1lbGluZSA9IHRpbWVsaW5lO1xyXG5hbmltZS5lYXNpbmcgPSBwYXJzZUVhc2luZ3M7XHJcbmFuaW1lLnBlbm5lciA9IHBlbm5lcjtcclxuYW5pbWUucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhbmltZTtcclxuIiwiLyohXHJcbldheXBvaW50cyAtIDQuMC4xXHJcbkNvcHlyaWdodCDCqSAyMDExLTIwMTYgQ2FsZWIgVHJvdWdodG9uXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuaHR0cHM6Ly9naXRodWIuY29tL2ltYWtld2VidGhpbmdzL3dheXBvaW50cy9ibG9iL21hc3Rlci9saWNlbnNlcy50eHRcclxuKi9cclxuKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnXHJcblxyXG4gICAgdmFyIGtleUNvdW50ZXIgPSAwXHJcbiAgICB2YXIgYWxsV2F5cG9pbnRzID0ge31cclxuXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvd2F5cG9pbnQgKi9cclxuICAgIGZ1bmN0aW9uIFdheXBvaW50KG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoIW9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBvcHRpb25zIHBhc3NlZCB0byBXYXlwb2ludCBjb25zdHJ1Y3RvcicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb3B0aW9ucy5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZWxlbWVudCBvcHRpb24gcGFzc2VkIHRvIFdheXBvaW50IGNvbnN0cnVjdG9yJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvcHRpb25zLmhhbmRsZXIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBoYW5kbGVyIG9wdGlvbiBwYXNzZWQgdG8gV2F5cG9pbnQgY29uc3RydWN0b3InKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5rZXkgPSAnd2F5cG9pbnQtJyArIGtleUNvdW50ZXJcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBXYXlwb2ludC5BZGFwdGVyLmV4dGVuZCh7fSwgV2F5cG9pbnQuZGVmYXVsdHMsIG9wdGlvbnMpXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5vcHRpb25zLmVsZW1lbnRcclxuICAgICAgICB0aGlzLmFkYXB0ZXIgPSBuZXcgV2F5cG9pbnQuQWRhcHRlcih0aGlzLmVsZW1lbnQpXHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IG9wdGlvbnMuaGFuZGxlclxyXG4gICAgICAgIHRoaXMuYXhpcyA9IHRoaXMub3B0aW9ucy5ob3Jpem9udGFsID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJ1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRoaXMub3B0aW9ucy5lbmFibGVkXHJcbiAgICAgICAgdGhpcy50cmlnZ2VyUG9pbnQgPSBudWxsXHJcbiAgICAgICAgdGhpcy5ncm91cCA9IFdheXBvaW50Lkdyb3VwLmZpbmRPckNyZWF0ZSh7XHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMub3B0aW9ucy5ncm91cCxcclxuICAgICAgICAgICAgYXhpczogdGhpcy5heGlzXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBXYXlwb2ludC5Db250ZXh0LmZpbmRPckNyZWF0ZUJ5RWxlbWVudCh0aGlzLm9wdGlvbnMuY29udGV4dClcclxuXHJcbiAgICAgICAgaWYgKFdheXBvaW50Lm9mZnNldEFsaWFzZXNbdGhpcy5vcHRpb25zLm9mZnNldF0pIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9mZnNldCA9IFdheXBvaW50Lm9mZnNldEFsaWFzZXNbdGhpcy5vcHRpb25zLm9mZnNldF1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ncm91cC5hZGQodGhpcylcclxuICAgICAgICB0aGlzLmNvbnRleHQuYWRkKHRoaXMpXHJcbiAgICAgICAgYWxsV2F5cG9pbnRzW3RoaXMua2V5XSA9IHRoaXNcclxuICAgICAgICBrZXlDb3VudGVyICs9IDFcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBXYXlwb2ludC5wcm90b3R5cGUucXVldWVUcmlnZ2VyID0gZnVuY3Rpb24oZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cC5xdWV1ZVRyaWdnZXIodGhpcywgZGlyZWN0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIFdheXBvaW50LnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3MpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2Rlc3Ryb3kgKi9cclxuICAgIFdheXBvaW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnJlbW92ZSh0aGlzKVxyXG4gICAgICAgIHRoaXMuZ3JvdXAucmVtb3ZlKHRoaXMpXHJcbiAgICAgICAgZGVsZXRlIGFsbFdheXBvaW50c1t0aGlzLmtleV1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9kaXNhYmxlICovXHJcbiAgICBXYXlwb2ludC5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9lbmFibGUgKi9cclxuICAgIFdheXBvaW50LnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQucmVmcmVzaCgpXHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvbmV4dCAqL1xyXG4gICAgV2F5cG9pbnQucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ncm91cC5uZXh0KHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvcHJldmlvdXMgKi9cclxuICAgIFdheXBvaW50LnByb3RvdHlwZS5wcmV2aW91cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdyb3VwLnByZXZpb3VzKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgV2F5cG9pbnQuaW52b2tlQWxsID0gZnVuY3Rpb24obWV0aG9kKSB7XHJcbiAgICAgICAgdmFyIGFsbFdheXBvaW50c0FycmF5ID0gW11cclxuICAgICAgICBmb3IgKHZhciB3YXlwb2ludEtleSBpbiBhbGxXYXlwb2ludHMpIHtcclxuICAgICAgICAgICAgYWxsV2F5cG9pbnRzQXJyYXkucHVzaChhbGxXYXlwb2ludHNbd2F5cG9pbnRLZXldKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgZW5kID0gYWxsV2F5cG9pbnRzQXJyYXkubGVuZ3RoOyBpIDwgZW5kOyBpKyspIHtcclxuICAgICAgICAgICAgYWxsV2F5cG9pbnRzQXJyYXlbaV1bbWV0aG9kXSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2Rlc3Ryb3ktYWxsICovXHJcbiAgICBXYXlwb2ludC5kZXN0cm95QWxsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgV2F5cG9pbnQuaW52b2tlQWxsKCdkZXN0cm95JylcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9kaXNhYmxlLWFsbCAqL1xyXG4gICAgV2F5cG9pbnQuZGlzYWJsZUFsbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFdheXBvaW50Lmludm9rZUFsbCgnZGlzYWJsZScpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvZW5hYmxlLWFsbCAqL1xyXG4gICAgV2F5cG9pbnQuZW5hYmxlQWxsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgV2F5cG9pbnQuQ29udGV4dC5yZWZyZXNoQWxsKClcclxuICAgICAgICBmb3IgKHZhciB3YXlwb2ludEtleSBpbiBhbGxXYXlwb2ludHMpIHtcclxuICAgICAgICAgICAgYWxsV2F5cG9pbnRzW3dheXBvaW50S2V5XS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL3JlZnJlc2gtYWxsICovXHJcbiAgICBXYXlwb2ludC5yZWZyZXNoQWxsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgV2F5cG9pbnQuQ29udGV4dC5yZWZyZXNoQWxsKClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS92aWV3cG9ydC1oZWlnaHQgKi9cclxuICAgIFdheXBvaW50LnZpZXdwb3J0SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvdmlld3BvcnQtd2lkdGggKi9cclxuICAgIFdheXBvaW50LnZpZXdwb3J0V2lkdGggPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXHJcbiAgICB9XHJcblxyXG4gICAgV2F5cG9pbnQuYWRhcHRlcnMgPSBbXVxyXG5cclxuICAgIFdheXBvaW50LmRlZmF1bHRzID0ge1xyXG4gICAgICAgIGNvbnRleHQ6IHdpbmRvdyxcclxuICAgICAgICBjb250aW51b3VzOiB0cnVlLFxyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgZ3JvdXA6ICdkZWZhdWx0JyxcclxuICAgICAgICBob3Jpem9udGFsOiBmYWxzZSxcclxuICAgICAgICBvZmZzZXQ6IDBcclxuICAgIH1cclxuXHJcbiAgICBXYXlwb2ludC5vZmZzZXRBbGlhc2VzID0ge1xyXG4gICAgICAgICdib3R0b20taW4tdmlldyc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmlubmVySGVpZ2h0KCkgLSB0aGlzLmFkYXB0ZXIub3V0ZXJIZWlnaHQoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3JpZ2h0LWluLXZpZXcnOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5pbm5lcldpZHRoKCkgLSB0aGlzLmFkYXB0ZXIub3V0ZXJXaWR0aCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5XYXlwb2ludCA9IFdheXBvaW50XHJcbn0oKSk7XHJcbihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0J1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZVNoaW0oY2FsbGJhY2spIHtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBrZXlDb3VudGVyID0gMFxyXG4gICAgdmFyIGNvbnRleHRzID0ge31cclxuICAgIHZhciBXYXlwb2ludCA9IHdpbmRvdy5XYXlwb2ludFxyXG4gICAgdmFyIG9sZFdpbmRvd0xvYWQgPSB3aW5kb3cub25sb2FkXHJcblxyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2NvbnRleHQgKi9cclxuICAgIGZ1bmN0aW9uIENvbnRleHQoZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcclxuICAgICAgICB0aGlzLkFkYXB0ZXIgPSBXYXlwb2ludC5BZGFwdGVyXHJcbiAgICAgICAgdGhpcy5hZGFwdGVyID0gbmV3IHRoaXMuQWRhcHRlcihlbGVtZW50KVxyXG4gICAgICAgIHRoaXMua2V5ID0gJ3dheXBvaW50LWNvbnRleHQtJyArIGtleUNvdW50ZXJcclxuICAgICAgICB0aGlzLmRpZFNjcm9sbCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5kaWRSZXNpemUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMub2xkU2Nyb2xsID0ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLmFkYXB0ZXIuc2Nyb2xsTGVmdCgpLFxyXG4gICAgICAgICAgICB5OiB0aGlzLmFkYXB0ZXIuc2Nyb2xsVG9wKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53YXlwb2ludHMgPSB7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsOiB7fSxcclxuICAgICAgICAgICAgaG9yaXpvbnRhbDoge31cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsZW1lbnQud2F5cG9pbnRDb250ZXh0S2V5ID0gdGhpcy5rZXlcclxuICAgICAgICBjb250ZXh0c1tlbGVtZW50LndheXBvaW50Q29udGV4dEtleV0gPSB0aGlzXHJcbiAgICAgICAga2V5Q291bnRlciArPSAxXHJcbiAgICAgICAgaWYgKCFXYXlwb2ludC53aW5kb3dDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFdheXBvaW50LndpbmRvd0NvbnRleHQgPSB0cnVlXHJcbiAgICAgICAgICAgIFdheXBvaW50LndpbmRvd0NvbnRleHQgPSBuZXcgQ29udGV4dCh3aW5kb3cpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZVRocm90dGxlZFNjcm9sbEhhbmRsZXIoKVxyXG4gICAgICAgIHRoaXMuY3JlYXRlVGhyb3R0bGVkUmVzaXplSGFuZGxlcigpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24od2F5cG9pbnQpIHtcclxuICAgICAgICB2YXIgYXhpcyA9IHdheXBvaW50Lm9wdGlvbnMuaG9yaXpvbnRhbCA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCdcclxuICAgICAgICB0aGlzLndheXBvaW50c1theGlzXVt3YXlwb2ludC5rZXldID0gd2F5cG9pbnRcclxuICAgICAgICB0aGlzLnJlZnJlc2goKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmNoZWNrRW1wdHkgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgaG9yaXpvbnRhbEVtcHR5ID0gdGhpcy5BZGFwdGVyLmlzRW1wdHlPYmplY3QodGhpcy53YXlwb2ludHMuaG9yaXpvbnRhbClcclxuICAgICAgICB2YXIgdmVydGljYWxFbXB0eSA9IHRoaXMuQWRhcHRlci5pc0VtcHR5T2JqZWN0KHRoaXMud2F5cG9pbnRzLnZlcnRpY2FsKVxyXG4gICAgICAgIHZhciBpc1dpbmRvdyA9IHRoaXMuZWxlbWVudCA9PSB0aGlzLmVsZW1lbnQud2luZG93XHJcbiAgICAgICAgaWYgKGhvcml6b250YWxFbXB0eSAmJiB2ZXJ0aWNhbEVtcHR5ICYmICFpc1dpbmRvdykge1xyXG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIub2ZmKCcud2F5cG9pbnRzJylcclxuICAgICAgICAgICAgZGVsZXRlIGNvbnRleHRzW3RoaXMua2V5XVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5jcmVhdGVUaHJvdHRsZWRSZXNpemVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlc2l6ZUhhbmRsZXIoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuaGFuZGxlUmVzaXplKClcclxuICAgICAgICAgICAgc2VsZi5kaWRSZXNpemUgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hZGFwdGVyLm9uKCdyZXNpemUud2F5cG9pbnRzJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghc2VsZi5kaWRSZXNpemUpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZGlkUmVzaXplID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgV2F5cG9pbnQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlc2l6ZUhhbmRsZXIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmNyZWF0ZVRocm90dGxlZFNjcm9sbEhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsSGFuZGxlcigpIHtcclxuICAgICAgICAgICAgc2VsZi5oYW5kbGVTY3JvbGwoKVxyXG4gICAgICAgICAgICBzZWxmLmRpZFNjcm9sbCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFkYXB0ZXIub24oJ3Njcm9sbC53YXlwb2ludHMnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCFzZWxmLmRpZFNjcm9sbCB8fCBXYXlwb2ludC5pc1RvdWNoKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRpZFNjcm9sbCA9IHRydWVcclxuICAgICAgICAgICAgICAgIFdheXBvaW50LnJlcXVlc3RBbmltYXRpb25GcmFtZShzY3JvbGxIYW5kbGVyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5oYW5kbGVSZXNpemUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBXYXlwb2ludC5Db250ZXh0LnJlZnJlc2hBbGwoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmhhbmRsZVNjcm9sbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB0cmlnZ2VyZWRHcm91cHMgPSB7fVxyXG4gICAgICAgIHZhciBheGVzID0ge1xyXG4gICAgICAgICAgICBob3Jpem9udGFsOiB7XHJcbiAgICAgICAgICAgICAgICBuZXdTY3JvbGw6IHRoaXMuYWRhcHRlci5zY3JvbGxMZWZ0KCksXHJcbiAgICAgICAgICAgICAgICBvbGRTY3JvbGw6IHRoaXMub2xkU2Nyb2xsLngsXHJcbiAgICAgICAgICAgICAgICBmb3J3YXJkOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgYmFja3dhcmQ6ICdsZWZ0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbDoge1xyXG4gICAgICAgICAgICAgICAgbmV3U2Nyb2xsOiB0aGlzLmFkYXB0ZXIuc2Nyb2xsVG9wKCksXHJcbiAgICAgICAgICAgICAgICBvbGRTY3JvbGw6IHRoaXMub2xkU2Nyb2xsLnksXHJcbiAgICAgICAgICAgICAgICBmb3J3YXJkOiAnZG93bicsXHJcbiAgICAgICAgICAgICAgICBiYWNrd2FyZDogJ3VwJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBheGlzS2V5IGluIGF4ZXMpIHtcclxuICAgICAgICAgICAgdmFyIGF4aXMgPSBheGVzW2F4aXNLZXldXHJcbiAgICAgICAgICAgIHZhciBpc0ZvcndhcmQgPSBheGlzLm5ld1Njcm9sbCA+IGF4aXMub2xkU2Nyb2xsXHJcbiAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBpc0ZvcndhcmQgPyBheGlzLmZvcndhcmQgOiBheGlzLmJhY2t3YXJkXHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciB3YXlwb2ludEtleSBpbiB0aGlzLndheXBvaW50c1theGlzS2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdheXBvaW50ID0gdGhpcy53YXlwb2ludHNbYXhpc0tleV1bd2F5cG9pbnRLZXldXHJcbiAgICAgICAgICAgICAgICBpZiAod2F5cG9pbnQudHJpZ2dlclBvaW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB3YXNCZWZvcmVUcmlnZ2VyUG9pbnQgPSBheGlzLm9sZFNjcm9sbCA8IHdheXBvaW50LnRyaWdnZXJQb2ludFxyXG4gICAgICAgICAgICAgICAgdmFyIG5vd0FmdGVyVHJpZ2dlclBvaW50ID0gYXhpcy5uZXdTY3JvbGwgPj0gd2F5cG9pbnQudHJpZ2dlclBvaW50XHJcbiAgICAgICAgICAgICAgICB2YXIgY3Jvc3NlZEZvcndhcmQgPSB3YXNCZWZvcmVUcmlnZ2VyUG9pbnQgJiYgbm93QWZ0ZXJUcmlnZ2VyUG9pbnRcclxuICAgICAgICAgICAgICAgIHZhciBjcm9zc2VkQmFja3dhcmQgPSAhd2FzQmVmb3JlVHJpZ2dlclBvaW50ICYmICFub3dBZnRlclRyaWdnZXJQb2ludFxyXG4gICAgICAgICAgICAgICAgaWYgKGNyb3NzZWRGb3J3YXJkIHx8IGNyb3NzZWRCYWNrd2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdheXBvaW50LnF1ZXVlVHJpZ2dlcihkaXJlY3Rpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcmVkR3JvdXBzW3dheXBvaW50Lmdyb3VwLmlkXSA9IHdheXBvaW50Lmdyb3VwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGdyb3VwS2V5IGluIHRyaWdnZXJlZEdyb3Vwcykge1xyXG4gICAgICAgICAgICB0cmlnZ2VyZWRHcm91cHNbZ3JvdXBLZXldLmZsdXNoVHJpZ2dlcnMoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vbGRTY3JvbGwgPSB7XHJcbiAgICAgICAgICAgIHg6IGF4ZXMuaG9yaXpvbnRhbC5uZXdTY3JvbGwsXHJcbiAgICAgICAgICAgIHk6IGF4ZXMudmVydGljYWwubmV3U2Nyb2xsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmlubmVySGVpZ2h0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLyplc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50ID09IHRoaXMuZWxlbWVudC53aW5kb3cpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFdheXBvaW50LnZpZXdwb3J0SGVpZ2h0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgLyplc2xpbnQtZW5hYmxlIGVxZXFlcSAqL1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuaW5uZXJIZWlnaHQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKHdheXBvaW50KSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMud2F5cG9pbnRzW3dheXBvaW50LmF4aXNdW3dheXBvaW50LmtleV1cclxuICAgICAgICB0aGlzLmNoZWNrRW1wdHkoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmlubmVyV2lkdGggPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvKmVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgPT0gdGhpcy5lbGVtZW50LndpbmRvdykge1xyXG4gICAgICAgICAgICByZXR1cm4gV2F5cG9pbnQudmlld3BvcnRXaWR0aCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qZXNsaW50LWVuYWJsZSBlcWVxZXEgKi9cclxuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmlubmVyV2lkdGgoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2NvbnRleHQtZGVzdHJveSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBhbGxXYXlwb2ludHMgPSBbXVxyXG4gICAgICAgIGZvciAodmFyIGF4aXMgaW4gdGhpcy53YXlwb2ludHMpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgd2F5cG9pbnRLZXkgaW4gdGhpcy53YXlwb2ludHNbYXhpc10pIHtcclxuICAgICAgICAgICAgICAgIGFsbFdheXBvaW50cy5wdXNoKHRoaXMud2F5cG9pbnRzW2F4aXNdW3dheXBvaW50S2V5XSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgZW5kID0gYWxsV2F5cG9pbnRzLmxlbmd0aDsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFsbFdheXBvaW50c1tpXS5kZXN0cm95KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvY29udGV4dC1yZWZyZXNoICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLyplc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cclxuICAgICAgICB2YXIgaXNXaW5kb3cgPSB0aGlzLmVsZW1lbnQgPT0gdGhpcy5lbGVtZW50LndpbmRvd1xyXG4gICAgICAgIC8qZXNsaW50LWVuYWJsZSBlcWVxZXEgKi9cclxuICAgICAgICB2YXIgY29udGV4dE9mZnNldCA9IGlzV2luZG93ID8gdW5kZWZpbmVkIDogdGhpcy5hZGFwdGVyLm9mZnNldCgpXHJcbiAgICAgICAgdmFyIHRyaWdnZXJlZEdyb3VwcyA9IHt9XHJcbiAgICAgICAgdmFyIGF4ZXNcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwoKVxyXG4gICAgICAgIGF4ZXMgPSB7XHJcbiAgICAgICAgICAgIGhvcml6b250YWw6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRPZmZzZXQ6IGlzV2luZG93ID8gMCA6IGNvbnRleHRPZmZzZXQubGVmdCxcclxuICAgICAgICAgICAgICAgIGNvbnRleHRTY3JvbGw6IGlzV2luZG93ID8gMCA6IHRoaXMub2xkU2Nyb2xsLngsXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0RGltZW5zaW9uOiB0aGlzLmlubmVyV2lkdGgoKSxcclxuICAgICAgICAgICAgICAgIG9sZFNjcm9sbDogdGhpcy5vbGRTY3JvbGwueCxcclxuICAgICAgICAgICAgICAgIGZvcndhcmQ6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrd2FyZDogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0UHJvcDogJ2xlZnQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHZlcnRpY2FsOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0T2Zmc2V0OiBpc1dpbmRvdyA/IDAgOiBjb250ZXh0T2Zmc2V0LnRvcCxcclxuICAgICAgICAgICAgICAgIGNvbnRleHRTY3JvbGw6IGlzV2luZG93ID8gMCA6IHRoaXMub2xkU2Nyb2xsLnksXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0RGltZW5zaW9uOiB0aGlzLmlubmVySGVpZ2h0KCksXHJcbiAgICAgICAgICAgICAgICBvbGRTY3JvbGw6IHRoaXMub2xkU2Nyb2xsLnksXHJcbiAgICAgICAgICAgICAgICBmb3J3YXJkOiAnZG93bicsXHJcbiAgICAgICAgICAgICAgICBiYWNrd2FyZDogJ3VwJyxcclxuICAgICAgICAgICAgICAgIG9mZnNldFByb3A6ICd0b3AnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGF4aXNLZXkgaW4gYXhlcykge1xyXG4gICAgICAgICAgICB2YXIgYXhpcyA9IGF4ZXNbYXhpc0tleV1cclxuICAgICAgICAgICAgZm9yICh2YXIgd2F5cG9pbnRLZXkgaW4gdGhpcy53YXlwb2ludHNbYXhpc0tleV0pIHtcclxuICAgICAgICAgICAgICAgIHZhciB3YXlwb2ludCA9IHRoaXMud2F5cG9pbnRzW2F4aXNLZXldW3dheXBvaW50S2V5XVxyXG4gICAgICAgICAgICAgICAgdmFyIGFkanVzdG1lbnQgPSB3YXlwb2ludC5vcHRpb25zLm9mZnNldFxyXG4gICAgICAgICAgICAgICAgdmFyIG9sZFRyaWdnZXJQb2ludCA9IHdheXBvaW50LnRyaWdnZXJQb2ludFxyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRPZmZzZXQgPSAwXHJcbiAgICAgICAgICAgICAgICB2YXIgZnJlc2hXYXlwb2ludCA9IG9sZFRyaWdnZXJQb2ludCA9PSBudWxsXHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGV4dE1vZGlmaWVyLCB3YXNCZWZvcmVTY3JvbGwsIG5vd0FmdGVyU2Nyb2xsXHJcbiAgICAgICAgICAgICAgICB2YXIgdHJpZ2dlcmVkQmFja3dhcmQsIHRyaWdnZXJlZEZvcndhcmRcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAod2F5cG9pbnQuZWxlbWVudCAhPT0gd2F5cG9pbnQuZWxlbWVudC53aW5kb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50T2Zmc2V0ID0gd2F5cG9pbnQuYWRhcHRlci5vZmZzZXQoKVtheGlzLm9mZnNldFByb3BdXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhZGp1c3RtZW50ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRqdXN0bWVudCA9IGFkanVzdG1lbnQuYXBwbHkod2F5cG9pbnQpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhZGp1c3RtZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkanVzdG1lbnQgPSBwYXJzZUZsb2F0KGFkanVzdG1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdheXBvaW50Lm9wdGlvbnMub2Zmc2V0LmluZGV4T2YoJyUnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkanVzdG1lbnQgPSBNYXRoLmNlaWwoYXhpcy5jb250ZXh0RGltZW5zaW9uICogYWRqdXN0bWVudCAvIDEwMClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGV4dE1vZGlmaWVyID0gYXhpcy5jb250ZXh0U2Nyb2xsIC0gYXhpcy5jb250ZXh0T2Zmc2V0XHJcbiAgICAgICAgICAgICAgICB3YXlwb2ludC50cmlnZ2VyUG9pbnQgPSBNYXRoLmZsb29yKGVsZW1lbnRPZmZzZXQgKyBjb250ZXh0TW9kaWZpZXIgLSBhZGp1c3RtZW50KVxyXG4gICAgICAgICAgICAgICAgd2FzQmVmb3JlU2Nyb2xsID0gb2xkVHJpZ2dlclBvaW50IDwgYXhpcy5vbGRTY3JvbGxcclxuICAgICAgICAgICAgICAgIG5vd0FmdGVyU2Nyb2xsID0gd2F5cG9pbnQudHJpZ2dlclBvaW50ID49IGF4aXMub2xkU2Nyb2xsXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyZWRCYWNrd2FyZCA9IHdhc0JlZm9yZVNjcm9sbCAmJiBub3dBZnRlclNjcm9sbFxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcmVkRm9yd2FyZCA9ICF3YXNCZWZvcmVTY3JvbGwgJiYgIW5vd0FmdGVyU2Nyb2xsXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFmcmVzaFdheXBvaW50ICYmIHRyaWdnZXJlZEJhY2t3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2F5cG9pbnQucXVldWVUcmlnZ2VyKGF4aXMuYmFja3dhcmQpXHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcmVkR3JvdXBzW3dheXBvaW50Lmdyb3VwLmlkXSA9IHdheXBvaW50Lmdyb3VwXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFmcmVzaFdheXBvaW50ICYmIHRyaWdnZXJlZEZvcndhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB3YXlwb2ludC5xdWV1ZVRyaWdnZXIoYXhpcy5mb3J3YXJkKVxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJlZEdyb3Vwc1t3YXlwb2ludC5ncm91cC5pZF0gPSB3YXlwb2ludC5ncm91cFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmcmVzaFdheXBvaW50ICYmIGF4aXMub2xkU2Nyb2xsID49IHdheXBvaW50LnRyaWdnZXJQb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdheXBvaW50LnF1ZXVlVHJpZ2dlcihheGlzLmZvcndhcmQpXHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcmVkR3JvdXBzW3dheXBvaW50Lmdyb3VwLmlkXSA9IHdheXBvaW50Lmdyb3VwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFdheXBvaW50LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgZ3JvdXBLZXkgaW4gdHJpZ2dlcmVkR3JvdXBzKSB7XHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyZWRHcm91cHNbZ3JvdXBLZXldLmZsdXNoVHJpZ2dlcnMoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LmZpbmRPckNyZWF0ZUJ5RWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gQ29udGV4dC5maW5kQnlFbGVtZW50KGVsZW1lbnQpIHx8IG5ldyBDb250ZXh0KGVsZW1lbnQpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5yZWZyZXNoQWxsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZm9yICh2YXIgY29udGV4dElkIGluIGNvbnRleHRzKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHRzW2NvbnRleHRJZF0ucmVmcmVzaCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2NvbnRleHQtZmluZC1ieS1lbGVtZW50ICovXHJcbiAgICBDb250ZXh0LmZpbmRCeUVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHRzW2VsZW1lbnQud2F5cG9pbnRDb250ZXh0S2V5XVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAob2xkV2luZG93TG9hZCkge1xyXG4gICAgICAgICAgICBvbGRXaW5kb3dMb2FkKClcclxuICAgICAgICB9XHJcbiAgICAgICAgQ29udGV4dC5yZWZyZXNoQWxsKClcclxuICAgIH1cclxuXHJcblxyXG4gICAgV2F5cG9pbnQucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgcmVxdWVzdEZuID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lU2hpbVxyXG4gICAgICAgIHJlcXVlc3RGbi5jYWxsKHdpbmRvdywgY2FsbGJhY2spXHJcbiAgICB9XHJcbiAgICBXYXlwb2ludC5Db250ZXh0ID0gQ29udGV4dFxyXG59KCkpO1xyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCdcclxuXHJcbiAgICBmdW5jdGlvbiBieVRyaWdnZXJQb2ludChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGEudHJpZ2dlclBvaW50IC0gYi50cmlnZ2VyUG9pbnRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBieVJldmVyc2VUcmlnZ2VyUG9pbnQoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBiLnRyaWdnZXJQb2ludCAtIGEudHJpZ2dlclBvaW50XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdyb3VwcyA9IHtcclxuICAgICAgICB2ZXJ0aWNhbDoge30sXHJcbiAgICAgICAgaG9yaXpvbnRhbDoge31cclxuICAgIH1cclxuICAgIHZhciBXYXlwb2ludCA9IHdpbmRvdy5XYXlwb2ludFxyXG5cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9ncm91cCAqL1xyXG4gICAgZnVuY3Rpb24gR3JvdXAob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZVxyXG4gICAgICAgIHRoaXMuYXhpcyA9IG9wdGlvbnMuYXhpc1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLm5hbWUgKyAnLScgKyB0aGlzLmF4aXNcclxuICAgICAgICB0aGlzLndheXBvaW50cyA9IFtdXHJcbiAgICAgICAgdGhpcy5jbGVhclRyaWdnZXJRdWV1ZXMoKVxyXG4gICAgICAgIGdyb3Vwc1t0aGlzLmF4aXNdW3RoaXMubmFtZV0gPSB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHdheXBvaW50KSB7XHJcbiAgICAgICAgdGhpcy53YXlwb2ludHMucHVzaCh3YXlwb2ludClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBHcm91cC5wcm90b3R5cGUuY2xlYXJUcmlnZ2VyUXVldWVzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyUXVldWVzID0ge1xyXG4gICAgICAgICAgICB1cDogW10sXHJcbiAgICAgICAgICAgIGRvd246IFtdLFxyXG4gICAgICAgICAgICBsZWZ0OiBbXSxcclxuICAgICAgICAgICAgcmlnaHQ6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIEdyb3VwLnByb3RvdHlwZS5mbHVzaFRyaWdnZXJzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZm9yICh2YXIgZGlyZWN0aW9uIGluIHRoaXMudHJpZ2dlclF1ZXVlcykge1xyXG4gICAgICAgICAgICB2YXIgd2F5cG9pbnRzID0gdGhpcy50cmlnZ2VyUXVldWVzW2RpcmVjdGlvbl1cclxuICAgICAgICAgICAgdmFyIHJldmVyc2UgPSBkaXJlY3Rpb24gPT09ICd1cCcgfHwgZGlyZWN0aW9uID09PSAnbGVmdCdcclxuICAgICAgICAgICAgd2F5cG9pbnRzLnNvcnQocmV2ZXJzZSA/IGJ5UmV2ZXJzZVRyaWdnZXJQb2ludCA6IGJ5VHJpZ2dlclBvaW50KVxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgZW5kID0gd2F5cG9pbnRzLmxlbmd0aDsgaSA8IGVuZDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2F5cG9pbnQgPSB3YXlwb2ludHNbaV1cclxuICAgICAgICAgICAgICAgIGlmICh3YXlwb2ludC5vcHRpb25zLmNvbnRpbnVvdXMgfHwgaSA9PT0gd2F5cG9pbnRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB3YXlwb2ludC50cmlnZ2VyKFtkaXJlY3Rpb25dKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xlYXJUcmlnZ2VyUXVldWVzKClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBHcm91cC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKHdheXBvaW50KSB7XHJcbiAgICAgICAgdGhpcy53YXlwb2ludHMuc29ydChieVRyaWdnZXJQb2ludClcclxuICAgICAgICB2YXIgaW5kZXggPSBXYXlwb2ludC5BZGFwdGVyLmluQXJyYXkod2F5cG9pbnQsIHRoaXMud2F5cG9pbnRzKVxyXG4gICAgICAgIHZhciBpc0xhc3QgPSBpbmRleCA9PT0gdGhpcy53YXlwb2ludHMubGVuZ3RoIC0gMVxyXG4gICAgICAgIHJldHVybiBpc0xhc3QgPyBudWxsIDogdGhpcy53YXlwb2ludHNbaW5kZXggKyAxXVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIEdyb3VwLnByb3RvdHlwZS5wcmV2aW91cyA9IGZ1bmN0aW9uKHdheXBvaW50KSB7XHJcbiAgICAgICAgdGhpcy53YXlwb2ludHMuc29ydChieVRyaWdnZXJQb2ludClcclxuICAgICAgICB2YXIgaW5kZXggPSBXYXlwb2ludC5BZGFwdGVyLmluQXJyYXkod2F5cG9pbnQsIHRoaXMud2F5cG9pbnRzKVxyXG4gICAgICAgIHJldHVybiBpbmRleCA/IHRoaXMud2F5cG9pbnRzW2luZGV4IC0gMV0gOiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLnF1ZXVlVHJpZ2dlciA9IGZ1bmN0aW9uKHdheXBvaW50LCBkaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXJRdWV1ZXNbZGlyZWN0aW9uXS5wdXNoKHdheXBvaW50KVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIEdyb3VwLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbih3YXlwb2ludCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IFdheXBvaW50LkFkYXB0ZXIuaW5BcnJheSh3YXlwb2ludCwgdGhpcy53YXlwb2ludHMpXHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy53YXlwb2ludHMuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9maXJzdCAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2F5cG9pbnRzWzBdXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvbGFzdCAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YXlwb2ludHNbdGhpcy53YXlwb2ludHMubGVuZ3RoIC0gMV1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBHcm91cC5maW5kT3JDcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIGdyb3Vwc1tvcHRpb25zLmF4aXNdW29wdGlvbnMubmFtZV0gfHwgbmV3IEdyb3VwKG9wdGlvbnMpXHJcbiAgICB9XHJcblxyXG4gICAgV2F5cG9pbnQuR3JvdXAgPSBHcm91cFxyXG59KCkpO1xyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCdcclxuXHJcbiAgICB2YXIgV2F5cG9pbnQgPSB3aW5kb3cuV2F5cG9pbnRcclxuXHJcbiAgICBmdW5jdGlvbiBpc1dpbmRvdyhlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgPT09IGVsZW1lbnQud2luZG93XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0V2luZG93KGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoaXNXaW5kb3coZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZGVmYXVsdFZpZXdcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBOb0ZyYW1ld29ya0FkYXB0ZXIoZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcclxuICAgICAgICB0aGlzLmhhbmRsZXJzID0ge31cclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLmlubmVySGVpZ2h0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGlzV2luID0gaXNXaW5kb3codGhpcy5lbGVtZW50KVxyXG4gICAgICAgIHJldHVybiBpc1dpbiA/IHRoaXMuZWxlbWVudC5pbm5lckhlaWdodCA6IHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHRcclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLmlubmVyV2lkdGggPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgaXNXaW4gPSBpc1dpbmRvdyh0aGlzLmVsZW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIGlzV2luID8gdGhpcy5lbGVtZW50LmlubmVyV2lkdGggOiB0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGhcclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKGVsZW1lbnQsIGxpc3RlbmVycywgaGFuZGxlcikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgZW5kID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldXHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhbmRsZXIgfHwgaGFuZGxlciA9PT0gbGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobGlzdGVuZXIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBldmVudFBhcnRzID0gZXZlbnQuc3BsaXQoJy4nKVxyXG4gICAgICAgIHZhciBldmVudFR5cGUgPSBldmVudFBhcnRzWzBdXHJcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9IGV2ZW50UGFydHNbMV1cclxuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudFxyXG5cclxuICAgICAgICBpZiAobmFtZXNwYWNlICYmIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXSAmJiBldmVudFR5cGUpIHtcclxuICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXJzKGVsZW1lbnQsIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXVtldmVudFR5cGVdLCBoYW5kbGVyKVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV1bZXZlbnRUeXBlXSA9IFtdXHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgbnMgaW4gdGhpcy5oYW5kbGVycykge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXJzKGVsZW1lbnQsIHRoaXMuaGFuZGxlcnNbbnNdW2V2ZW50VHlwZV0gfHwgW10sIGhhbmRsZXIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXJzW25zXVtldmVudFR5cGVdID0gW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZXNwYWNlICYmIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB0eXBlIGluIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXSkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXJzKGVsZW1lbnQsIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXVt0eXBlXSwgaGFuZGxlcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV0gPSB7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBBZGFwdGVkIGZyb20galF1ZXJ5IDEueCBvZmZzZXQoKSAqL1xyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5vZmZzZXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XHJcbiAgICAgICAgdmFyIHdpbiA9IGdldFdpbmRvdyh0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudClcclxuICAgICAgICB2YXIgcmVjdCA9IHtcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBsZWZ0OiAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xyXG4gICAgICAgICAgICByZWN0ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b3A6IHJlY3QudG9wICsgd2luLnBhZ2VZT2Zmc2V0IC0gZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCxcclxuICAgICAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0IC0gZG9jdW1lbnRFbGVtZW50LmNsaWVudExlZnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdmFyIGV2ZW50UGFydHMgPSBldmVudC5zcGxpdCgnLicpXHJcbiAgICAgICAgdmFyIGV2ZW50VHlwZSA9IGV2ZW50UGFydHNbMF1cclxuICAgICAgICB2YXIgbmFtZXNwYWNlID0gZXZlbnRQYXJ0c1sxXSB8fCAnX19kZWZhdWx0J1xyXG4gICAgICAgIHZhciBuc0hhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdID0gdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdIHx8IHt9XHJcbiAgICAgICAgdmFyIG5zVHlwZUxpc3QgPSBuc0hhbmRsZXJzW2V2ZW50VHlwZV0gPSBuc0hhbmRsZXJzW2V2ZW50VHlwZV0gfHwgW11cclxuXHJcbiAgICAgICAgbnNUeXBlTGlzdC5wdXNoKGhhbmRsZXIpXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyKVxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUub3V0ZXJIZWlnaHQgPSBmdW5jdGlvbihpbmNsdWRlTWFyZ2luKSB7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuaW5uZXJIZWlnaHQoKVxyXG4gICAgICAgIHZhciBjb21wdXRlZFN0eWxlXHJcblxyXG4gICAgICAgIGlmIChpbmNsdWRlTWFyZ2luICYmICFpc1dpbmRvdyh0aGlzLmVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpXHJcbiAgICAgICAgICAgIGhlaWdodCArPSBwYXJzZUludChjb21wdXRlZFN0eWxlLm1hcmdpblRvcCwgMTApXHJcbiAgICAgICAgICAgIGhlaWdodCArPSBwYXJzZUludChjb21wdXRlZFN0eWxlLm1hcmdpbkJvdHRvbSwgMTApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaGVpZ2h0XHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5vdXRlcldpZHRoID0gZnVuY3Rpb24oaW5jbHVkZU1hcmdpbikge1xyXG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMuaW5uZXJXaWR0aCgpXHJcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGVcclxuXHJcbiAgICAgICAgaWYgKGluY2x1ZGVNYXJnaW4gJiYgIWlzV2luZG93KHRoaXMuZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClcclxuICAgICAgICAgICAgd2lkdGggKz0gcGFyc2VJbnQoY29tcHV0ZWRTdHlsZS5tYXJnaW5MZWZ0LCAxMClcclxuICAgICAgICAgICAgd2lkdGggKz0gcGFyc2VJbnQoY29tcHV0ZWRTdHlsZS5tYXJnaW5SaWdodCwgMTApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gd2lkdGhcclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLnNjcm9sbExlZnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgd2luID0gZ2V0V2luZG93KHRoaXMuZWxlbWVudClcclxuICAgICAgICByZXR1cm4gd2luID8gd2luLnBhZ2VYT2Zmc2V0IDogdGhpcy5lbGVtZW50LnNjcm9sbExlZnRcclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLnNjcm9sbFRvcCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB3aW4gPSBnZXRXaW5kb3codGhpcy5lbGVtZW50KVxyXG4gICAgICAgIHJldHVybiB3aW4gPyB3aW4ucGFnZVlPZmZzZXQgOiB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wXHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLmV4dGVuZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBtZXJnZSh0YXJnZXQsIG9iaikge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBvYmpba2V5XVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDEsIGVuZCA9IGFyZ3MubGVuZ3RoOyBpIDwgZW5kOyBpKyspIHtcclxuICAgICAgICAgICAgbWVyZ2UoYXJnc1swXSwgYXJnc1tpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyZ3NbMF1cclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIuaW5BcnJheSA9IGZ1bmN0aW9uKGVsZW1lbnQsIGFycmF5LCBpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5ID09IG51bGwgPyAtMSA6IGFycmF5LmluZGV4T2YoZWxlbWVudCwgaSlcclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIuaXNFbXB0eU9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIC8qIGVzbGludCBuby11bnVzZWQtdmFyczogMCAqL1xyXG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIFdheXBvaW50LmFkYXB0ZXJzLnB1c2goe1xyXG4gICAgICAgIG5hbWU6ICdub2ZyYW1ld29yaycsXHJcbiAgICAgICAgQWRhcHRlcjogTm9GcmFtZXdvcmtBZGFwdGVyXHJcbiAgICB9KVxyXG4gICAgV2F5cG9pbnQuQWRhcHRlciA9IE5vRnJhbWV3b3JrQWRhcHRlclxyXG59KCkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9