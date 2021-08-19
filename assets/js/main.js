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

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_mobileMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mobileMenu */ "./src/scripts/modules/mobileMenu.js");
/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animation */ "./src/scripts/modules/animation.js");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ "./src/scripts/modules/search.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ "./src/scripts/modules/forms.js");




var mobileMenu = new _modules_mobileMenu__WEBPACK_IMPORTED_MODULE_0__["default"]();
var animation = new _modules_animation__WEBPACK_IMPORTED_MODULE_1__["default"]();
var search = new _modules_search__WEBPACK_IMPORTED_MODULE_2__["default"]();
var forms = new _modules_forms__WEBPACK_IMPORTED_MODULE_3__["default"]();

/***/ }),

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

    this.textarea = document.querySelectorAll("textarea");
    this.select = document.querySelectorAll("select");
    this.customSelectDropdown();
    this.events();
  }

  _createClass(Forms, [{
    key: "events",
    value: function events() {
      var _this = this;

      if (typeof this.textarea != "undefined" && this.textarea != null) {
        this.textarea.forEach(function (el) {
          el.addEventListener("keyup", function (e) {
            e.preventDefault();

            _this.setTextareaHeight(el);
          });
        });
      }
    }
  }, {
    key: "setTextareaHeight",
    value: function setTextareaHeight(el) {
      var target = el;
      target.style.height = _utility__WEBPACK_IMPORTED_MODULE_0__["default"].textareaHeight(target.value) + "px";
    }
  }, {
    key: "customSelectDropdown",
    value: function customSelectDropdown() {
      if (typeof this.select != "undefined" && this.select != null) {
        this.select.forEach(function (el) {// make custom select element here.
        });
      }
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
/*!***********************************!*\
  !*** multi ./src/scripts/main.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\patches\wp-content\themes\patches\src\scripts\main.js */"./src/scripts/main.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL2Zvcm1zLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZHVsZXMvbW9iaWxlTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3V0aWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdmVuZG9yL2FuaW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3ZlbmRvci9ub2ZyYW1ld29yay53YXlwb2ludHMuanMiXSwibmFtZXMiOlsibW9iaWxlTWVudSIsIk1vYmlsZU1lbnUiLCJhbmltYXRpb24iLCJBbmltYXRpb25zIiwic2VhcmNoIiwiU2VhcmNoIiwiZm9ybXMiLCJGb3JtcyIsIm9kZEV2ZW5BbmltYXRpb24iLCJvZGRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXZlbnMiLCJmb3JFYWNoIiwiZWxlbWVudCIsIldheXBvaW50IiwiaGFuZGxlciIsImFuaW1lIiwidGFyZ2V0cyIsIm9wYWNpdHkiLCJ0cmFuc2xhdGVZIiwiZGVsYXkiLCJkdXJhdGlvbiIsImVhc2luZyIsImRlc3Ryb3kiLCJvZmZzZXQiLCJ0ZXh0YXJlYSIsInNlbGVjdCIsImN1c3RvbVNlbGVjdERyb3Bkb3duIiwiZXZlbnRzIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0VGV4dGFyZWFIZWlnaHQiLCJ0YXJnZXQiLCJzdHlsZSIsImhlaWdodCIsIlV0aWxpdHkiLCJ0ZXh0YXJlYUhlaWdodCIsInZhbHVlIiwiaGVhZGVyIiwicXVlcnlTZWxlY3RvciIsInRvZ2dsZU1lbnUiLCJtZW51Iiwic3VibWVudUJ0biIsImlzTWVudU9wZW4iLCJ0cmlnZ2VyTWVudSIsInRvZ2dsZVN1Yk1lbnUiLCJrZXlQcmVzcyIsIndpbmRvdyIsImNoYW5nZUhlYWRlciIsImN1cnJlbnRUYXJnZXQiLCJnZXRBdHRyaWJ1dGUiLCJ0YXJnZXRNZW51Iiwib3RoZXJNZW51cyIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiY2xvc2VNZW51Iiwib3Blbk1lbnUiLCJpZCIsIm1lbnVCdG4iLCJib2R5U2Nyb2xsTG9jayIsImFkZCIsInNldEF0dHJpYnV0ZSIsImJvZHlTY3JvbGxVbmxvY2siLCJyZW1vdmUiLCJidG4iLCJwYXJlbnROb2RlIiwiY2xpZW50SGVpZ2h0Iiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsIm9uY2UiLCJrZXlDb2RlIiwic2Nyb2xsUG9zIiwic2Nyb2xsWSIsInNlYXJjaE1vZGFsIiwic2VhcmNoQnV0dG9uIiwic2VhcmNoRmllbGQiLCJzZWFyY2hPdmVybGF5IiwiaXNTZWFyY2hPcGVuIiwidG9nZ2xlTW9kYWwiLCJjbG9zZU1vZGFsIiwib3Blbk1vZGFsIiwiZm9jdXMiLCJib2R5IiwicG9zaXRpb24iLCJ0b3AiLCJib2R5U3R5bGUiLCJzY3JvbGxUbyIsInBhcnNlSW50IiwibnVtYmVyT2ZMaW5lQnJlYWtzIiwibWF0Y2giLCJsZW5ndGgiLCJuZXdIZWlnaHQiLCJjaGVjayIsImEiLCJ0ZXN0Iiwic3Vic3RyIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidmVuZG9yIiwib3BlcmEiLCJkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncyIsInVwZGF0ZSIsImJlZ2luIiwibG9vcEJlZ2luIiwiY2hhbmdlQmVnaW4iLCJjaGFuZ2UiLCJjaGFuZ2VDb21wbGV0ZSIsImxvb3BDb21wbGV0ZSIsImNvbXBsZXRlIiwibG9vcCIsImRpcmVjdGlvbiIsImF1dG9wbGF5IiwidGltZWxpbmVPZmZzZXQiLCJkZWZhdWx0VHdlZW5TZXR0aW5ncyIsImVuZERlbGF5Iiwicm91bmQiLCJ2YWxpZFRyYW5zZm9ybXMiLCJjYWNoZSIsIkNTUyIsInNwcmluZ3MiLCJtaW5NYXgiLCJ2YWwiLCJtaW4iLCJtYXgiLCJNYXRoIiwic3RyaW5nQ29udGFpbnMiLCJzdHIiLCJ0ZXh0IiwiaW5kZXhPZiIsImFwcGx5QXJndW1lbnRzIiwiZnVuYyIsImFyZ3MiLCJhcHBseSIsImlzIiwiYXJyIiwiQXJyYXkiLCJpc0FycmF5Iiwib2JqIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwicHRoIiwiaGFzT3duUHJvcGVydHkiLCJzdmciLCJTVkdFbGVtZW50IiwiaW5wIiwiSFRNTElucHV0RWxlbWVudCIsImRvbSIsIm5vZGVUeXBlIiwiZm5jIiwidW5kIiwibmlsIiwiaGV4IiwicmdiIiwiaHNsIiwiY29sIiwia2V5IiwicGFyc2VFYXNpbmdQYXJhbWV0ZXJzIiwic3RyaW5nIiwiZXhlYyIsInNwbGl0IiwibWFwIiwicCIsInBhcnNlRmxvYXQiLCJzcHJpbmciLCJwYXJhbXMiLCJtYXNzIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsInZlbG9jaXR5IiwidzAiLCJzcXJ0IiwiemV0YSIsIndkIiwiYiIsInNvbHZlciIsInQiLCJwcm9ncmVzcyIsImV4cCIsImNvcyIsInNpbiIsImdldER1cmF0aW9uIiwiY2FjaGVkIiwiZnJhbWUiLCJlbGFwc2VkIiwicmVzdCIsInN0ZXBzIiwiY2VpbCIsImJlemllciIsImtTcGxpbmVUYWJsZVNpemUiLCJrU2FtcGxlU3RlcFNpemUiLCJBIiwiYUExIiwiYUEyIiwiQiIsIkMiLCJjYWxjQmV6aWVyIiwiYVQiLCJnZXRTbG9wZSIsImJpbmFyeVN1YmRpdmlkZSIsImFYIiwiYUEiLCJhQiIsIm1YMSIsIm1YMiIsImN1cnJlbnRYIiwiY3VycmVudFQiLCJpIiwiYWJzIiwibmV3dG9uUmFwaHNvbkl0ZXJhdGUiLCJhR3Vlc3NUIiwiY3VycmVudFNsb3BlIiwibVkxIiwibVkyIiwic2FtcGxlVmFsdWVzIiwiRmxvYXQzMkFycmF5IiwiZ2V0VEZvclgiLCJpbnRlcnZhbFN0YXJ0IiwiY3VycmVudFNhbXBsZSIsImxhc3RTYW1wbGUiLCJkaXN0IiwiZ3Vlc3NGb3JUIiwiaW5pdGlhbFNsb3BlIiwieCIsInBlbm5lciIsImVhc2VzIiwibGluZWFyIiwiZnVuY3Rpb25FYXNpbmdzIiwiU2luZSIsIlBJIiwiQ2lyYyIsIkJhY2siLCJCb3VuY2UiLCJwb3cyIiwicG93IiwiRWxhc3RpYyIsImFtcGxpdHVkZSIsInBlcmlvZCIsImFzaW4iLCJiYXNlRWFzaW5ncyIsIm5hbWUiLCJrZXlzIiwiZWFzZUluIiwicGFyc2VFYXNpbmdzIiwiZWFzZSIsInNlbGVjdFN0cmluZyIsIm5vZGVzIiwiZmlsdGVyQXJyYXkiLCJjYWxsYmFjayIsImxlbiIsInRoaXNBcmciLCJhcmd1bWVudHMiLCJyZXN1bHQiLCJwdXNoIiwiZmxhdHRlbkFycmF5IiwicmVkdWNlIiwiY29uY2F0IiwidG9BcnJheSIsIm8iLCJOb2RlTGlzdCIsIkhUTUxDb2xsZWN0aW9uIiwic2xpY2UiLCJhcnJheUNvbnRhaW5zIiwic29tZSIsImNsb25lT2JqZWN0IiwiY2xvbmUiLCJyZXBsYWNlT2JqZWN0UHJvcHMiLCJvMSIsIm8yIiwibWVyZ2VPYmplY3RzIiwicmdiVG9SZ2JhIiwicmdiVmFsdWUiLCJoZXhUb1JnYmEiLCJoZXhWYWx1ZSIsInJneCIsInJlcGxhY2UiLCJtIiwiciIsImciLCJoc2xUb1JnYmEiLCJoc2xWYWx1ZSIsImgiLCJzIiwibCIsImh1ZTJyZ2IiLCJxIiwiY29sb3JUb1JnYiIsImdldFVuaXQiLCJnZXRUcmFuc2Zvcm1Vbml0IiwicHJvcE5hbWUiLCJnZXRGdW5jdGlvblZhbHVlIiwiYW5pbWF0YWJsZSIsInRvdGFsIiwicHJvcCIsImNvbnZlcnRQeFRvVW5pdCIsInVuaXQiLCJ2YWx1ZVVuaXQiLCJiYXNlbGluZSIsInRlbXBFbCIsImNyZWF0ZUVsZW1lbnQiLCJ0YWdOYW1lIiwicGFyZW50RWwiLCJhcHBlbmRDaGlsZCIsIndpZHRoIiwiZmFjdG9yIiwib2Zmc2V0V2lkdGgiLCJyZW1vdmVDaGlsZCIsImNvbnZlcnRlZFVuaXQiLCJnZXRDU1NWYWx1ZSIsInVwcGVyY2FzZVByb3BOYW1lIiwidG9Mb3dlckNhc2UiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImdldEFuaW1hdGlvblR5cGUiLCJnZXRFbGVtZW50VHJhbnNmb3JtcyIsInRyYW5zZm9ybSIsInJlZyIsInRyYW5zZm9ybXMiLCJNYXAiLCJzZXQiLCJnZXRUcmFuc2Zvcm1WYWx1ZSIsImRlZmF1bHRWYWwiLCJnZXQiLCJsaXN0IiwiZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZSIsImdldFJlbGF0aXZlVmFsdWUiLCJ0byIsImZyb20iLCJvcGVyYXRvciIsInUiLCJ5IiwidmFsaWRhdGVWYWx1ZSIsIm9yaWdpbmFsVW5pdCIsInVuaXRMZXNzIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZ2V0Q2lyY2xlTGVuZ3RoIiwiZ2V0UmVjdExlbmd0aCIsImdldExpbmVMZW5ndGgiLCJnZXRQb2x5bGluZUxlbmd0aCIsInBvaW50cyIsInRvdGFsTGVuZ3RoIiwicHJldmlvdXNQb3MiLCJudW1iZXJPZkl0ZW1zIiwiY3VycmVudFBvcyIsImdldEl0ZW0iLCJnZXRQb2x5Z29uTGVuZ3RoIiwiZ2V0VG90YWxMZW5ndGgiLCJzZXREYXNob2Zmc2V0IiwicGF0aExlbmd0aCIsImdldFBhcmVudFN2Z0VsIiwiZ2V0UGFyZW50U3ZnIiwicGF0aEVsIiwic3ZnRGF0YSIsInBhcmVudFN2Z0VsIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInZpZXdCb3hBdHRyIiwidmlld0JveCIsInciLCJ2VyIsInZIIiwiZ2V0UGF0aCIsInBhdGgiLCJwZXJjZW50IiwicHJvcGVydHkiLCJnZXRQYXRoUHJvZ3Jlc3MiLCJpc1BhdGhUYXJnZXRJbnNpZGVTVkciLCJwb2ludCIsImdldFBvaW50QXRMZW5ndGgiLCJwMCIsInNjYWxlWCIsInNjYWxlWSIsImF0YW4yIiwiZGVjb21wb3NlVmFsdWUiLCJvcmlnaW5hbCIsIm51bWJlcnMiLCJOdW1iZXIiLCJzdHJpbmdzIiwicGFyc2VUYXJnZXRzIiwidGFyZ2V0c0FycmF5IiwiaXRlbSIsInBvcyIsInNlbGYiLCJnZXRBbmltYXRhYmxlcyIsInBhcnNlZCIsIm5vcm1hbGl6ZVByb3BlcnR5VHdlZW5zIiwidHdlZW5TZXR0aW5ncyIsInNldHRpbmdzIiwiaXNGcm9tVG8iLCJwcm9wQXJyYXkiLCJ2IiwiayIsImZsYXR0ZW5LZXlmcmFtZXMiLCJrZXlmcmFtZXMiLCJwcm9wZXJ0eU5hbWVzIiwicHJvcGVydGllcyIsIm5ld0tleSIsImdldFByb3BlcnRpZXMiLCJ0d2VlbnMiLCJub3JtYWxpemVUd2VlblZhbHVlcyIsInR3ZWVuIiwibm9ybWFsaXplVHdlZW5zIiwicHJldmlvdXNUd2VlbiIsInR3ZWVuVmFsdWUiLCJ0b1VuaXQiLCJvcmlnaW5hbFZhbHVlIiwicHJldmlvdXNWYWx1ZSIsImZyb21Vbml0Iiwic3RhcnQiLCJlbmQiLCJpc1BhdGgiLCJpc0NvbG9yIiwic2V0UHJvZ3Jlc3NWYWx1ZSIsImNzcyIsImF0dHJpYnV0ZSIsIm9iamVjdCIsIm1hbnVhbCIsImxhc3QiLCJzZXRUYXJnZXRzVmFsdWUiLCJhbmltYXRhYmxlcyIsImFuaW1UeXBlIiwiY3JlYXRlQW5pbWF0aW9uIiwibGFzdFR3ZWVuIiwidHlwZSIsImdldEFuaW1hdGlvbnMiLCJnZXRJbnN0YW5jZVRpbWluZ3MiLCJhbmltYXRpb25zIiwiYW5pbUxlbmd0aCIsImdldFRsT2Zmc2V0IiwiYW5pbSIsInRpbWluZ3MiLCJpbnN0YW5jZUlEIiwiY3JlYXRlTmV3SW5zdGFuY2UiLCJpbnN0YW5jZVNldHRpbmdzIiwiY2hpbGRyZW4iLCJhY3RpdmVJbnN0YW5jZXMiLCJlbmdpbmUiLCJyYWYiLCJwbGF5IiwiaXNEb2N1bWVudEhpZGRlbiIsInN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdGVwIiwiYWN0aXZlSW5zdGFuY2VzTGVuZ3RoIiwiYWN0aXZlSW5zdGFuY2UiLCJwYXVzZWQiLCJ0aWNrIiwic3BsaWNlIiwidW5kZWZpbmVkIiwiaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaW5zdGFuY2UiLCJfb25Eb2N1bWVudFZpc2liaWxpdHkiLCJoaWRkZW4iLCJzdGFydFRpbWUiLCJsYXN0VGltZSIsIm5vdyIsImNoaWxkcmVuTGVuZ3RoIiwicmVzb2x2ZSIsIm1ha2VQcm9taXNlIiwicHJvbWlzZSIsIlByb21pc2UiLCJfcmVzb2x2ZSIsImZpbmlzaGVkIiwidG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24iLCJyZXZlcnNlZCIsImNoaWxkIiwiYWRqdXN0VGltZSIsInRpbWUiLCJyZXNldFRpbWUiLCJjdXJyZW50VGltZSIsInNwZWVkIiwic2Vla0NoaWxkIiwic2VlayIsInN5bmNJbnN0YW5jZUNoaWxkcmVuIiwicmV2ZXJzZVBsYXliYWNrIiwiaSQxIiwic2V0QW5pbWF0aW9uc1Byb2dyZXNzIiwiaW5zVGltZSIsImFuaW1hdGlvbnNMZW5ndGgiLCJ0d2Vlbkxlbmd0aCIsImVhc2VkIiwiaXNOYU4iLCJ0b051bWJlcnNMZW5ndGgiLCJuIiwidG9OdW1iZXIiLCJmcm9tTnVtYmVyIiwic3RyaW5nc0xlbmd0aCIsIm4kMSIsImN1cnJlbnRWYWx1ZSIsInNldENhbGxiYWNrIiwiY2IiLCJwYXNzVGhyb3VnaCIsImNvdW50SXRlcmF0aW9uIiwicmVtYWluaW5nIiwic2V0SW5zdGFuY2VQcm9ncmVzcyIsImVuZ2luZVRpbWUiLCJpbnNEdXJhdGlvbiIsImluc0RlbGF5IiwiaW5zRW5kRGVsYXkiLCJiZWdhbiIsImxvb3BCZWdhbiIsImNoYW5nZUJlZ2FuIiwiY2hhbmdlQ29tcGxldGVkIiwiY29tcGxldGVkIiwicmVzZXQiLCJwYXVzZSIsInJldmVyc2UiLCJyZXN0YXJ0IiwicmVtb3ZlVGFyZ2V0c0Zyb21JbnN0YW5jZSIsInJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyIsImMiLCJjaGlsZEFuaW1hdGlvbnMiLCJyZW1vdmVUYXJnZXRzRnJvbUFjdGl2ZUluc3RhbmNlcyIsInN0YWdnZXIiLCJncmlkIiwiYXhpcyIsImZyb21JbmRleCIsImZyb21GaXJzdCIsImZyb21DZW50ZXIiLCJmcm9tTGFzdCIsImlzUmFuZ2UiLCJ2YWwxIiwidmFsMiIsInZhbHVlcyIsIm1heFZhbHVlIiwiaW5kZXgiLCJmcm9tWCIsImZyb21ZIiwiZmxvb3IiLCJ0b1giLCJ0b1kiLCJkaXN0YW5jZVgiLCJkaXN0YW5jZVkiLCJzcGFjaW5nIiwidGltZWxpbmUiLCJ0bCIsImluc3RhbmNlUGFyYW1zIiwidGxJbmRleCIsImlucyIsImluc1BhcmFtcyIsInRsRHVyYXRpb24iLCJ2ZXJzaW9uIiwicnVubmluZyIsImNvbnZlcnRQeCIsInJhbmRvbSIsIm1vZHVsZSIsImV4cG9ydHMiLCJrZXlDb3VudGVyIiwiYWxsV2F5cG9pbnRzIiwib3B0aW9ucyIsIkVycm9yIiwiQWRhcHRlciIsImV4dGVuZCIsImRlZmF1bHRzIiwiYWRhcHRlciIsImhvcml6b250YWwiLCJlbmFibGVkIiwidHJpZ2dlclBvaW50IiwiZ3JvdXAiLCJHcm91cCIsImZpbmRPckNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwiZmluZE9yQ3JlYXRlQnlFbGVtZW50Iiwib2Zmc2V0QWxpYXNlcyIsInF1ZXVlVHJpZ2dlciIsInRyaWdnZXIiLCJkaXNhYmxlIiwiZW5hYmxlIiwicmVmcmVzaCIsIm5leHQiLCJwcmV2aW91cyIsImludm9rZUFsbCIsIm1ldGhvZCIsImFsbFdheXBvaW50c0FycmF5Iiwid2F5cG9pbnRLZXkiLCJkZXN0cm95QWxsIiwiZGlzYWJsZUFsbCIsImVuYWJsZUFsbCIsInJlZnJlc2hBbGwiLCJ2aWV3cG9ydEhlaWdodCIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50Iiwidmlld3BvcnRXaWR0aCIsImNsaWVudFdpZHRoIiwiYWRhcHRlcnMiLCJjb250aW51b3VzIiwib3V0ZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwib3V0ZXJXaWR0aCIsInJlcXVlc3RBbmltYXRpb25GcmFtZVNoaW0iLCJjb250ZXh0cyIsIm9sZFdpbmRvd0xvYWQiLCJvbmxvYWQiLCJkaWRTY3JvbGwiLCJkaWRSZXNpemUiLCJvbGRTY3JvbGwiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwid2F5cG9pbnRzIiwidmVydGljYWwiLCJ3YXlwb2ludENvbnRleHRLZXkiLCJ3aW5kb3dDb250ZXh0IiwiY3JlYXRlVGhyb3R0bGVkU2Nyb2xsSGFuZGxlciIsImNyZWF0ZVRocm90dGxlZFJlc2l6ZUhhbmRsZXIiLCJ3YXlwb2ludCIsImNoZWNrRW1wdHkiLCJob3Jpem9udGFsRW1wdHkiLCJpc0VtcHR5T2JqZWN0IiwidmVydGljYWxFbXB0eSIsImlzV2luZG93Iiwib2ZmIiwicmVzaXplSGFuZGxlciIsImhhbmRsZVJlc2l6ZSIsIm9uIiwic2Nyb2xsSGFuZGxlciIsImhhbmRsZVNjcm9sbCIsImlzVG91Y2giLCJ0cmlnZ2VyZWRHcm91cHMiLCJheGVzIiwibmV3U2Nyb2xsIiwiZm9yd2FyZCIsImJhY2t3YXJkIiwiYXhpc0tleSIsImlzRm9yd2FyZCIsIndhc0JlZm9yZVRyaWdnZXJQb2ludCIsIm5vd0FmdGVyVHJpZ2dlclBvaW50IiwiY3Jvc3NlZEZvcndhcmQiLCJjcm9zc2VkQmFja3dhcmQiLCJncm91cEtleSIsImZsdXNoVHJpZ2dlcnMiLCJjb250ZXh0T2Zmc2V0IiwibGVmdCIsImNvbnRleHRTY3JvbGwiLCJjb250ZXh0RGltZW5zaW9uIiwib2Zmc2V0UHJvcCIsImFkanVzdG1lbnQiLCJvbGRUcmlnZ2VyUG9pbnQiLCJlbGVtZW50T2Zmc2V0IiwiZnJlc2hXYXlwb2ludCIsImNvbnRleHRNb2RpZmllciIsIndhc0JlZm9yZVNjcm9sbCIsIm5vd0FmdGVyU2Nyb2xsIiwidHJpZ2dlcmVkQmFja3dhcmQiLCJ0cmlnZ2VyZWRGb3J3YXJkIiwiZmluZEJ5RWxlbWVudCIsImNvbnRleHRJZCIsInJlcXVlc3RGbiIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJ5VHJpZ2dlclBvaW50IiwiYnlSZXZlcnNlVHJpZ2dlclBvaW50IiwiZ3JvdXBzIiwiY2xlYXJUcmlnZ2VyUXVldWVzIiwidHJpZ2dlclF1ZXVlcyIsInVwIiwiZG93biIsInJpZ2h0Iiwic29ydCIsImluQXJyYXkiLCJpc0xhc3QiLCJmaXJzdCIsImdldFdpbmRvdyIsImRlZmF1bHRWaWV3IiwiTm9GcmFtZXdvcmtBZGFwdGVyIiwiaGFuZGxlcnMiLCJpc1dpbiIsImV2ZW50IiwicmVtb3ZlTGlzdGVuZXJzIiwibGlzdGVuZXJzIiwibGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnRQYXJ0cyIsImV2ZW50VHlwZSIsIm5hbWVzcGFjZSIsIm5zIiwib3duZXJEb2N1bWVudCIsIndpbiIsInBhZ2VZT2Zmc2V0IiwiY2xpZW50VG9wIiwicGFnZVhPZmZzZXQiLCJjbGllbnRMZWZ0IiwibnNIYW5kbGVycyIsIm5zVHlwZUxpc3QiLCJpbmNsdWRlTWFyZ2luIiwiY29tcHV0ZWRTdHlsZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIm1lcmdlIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUs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R0FBY3BCLEdBQUcsQ0FBQ29CLEdBQUQsQ0FBakI7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsYUFBTzdILE1BQVA7QUFDSDs7QUFFRCxTQUFLLElBQUlnTCxDQUFDLEdBQUcsQ0FBUixFQUFXNE0sR0FBRyxHQUFHelIsSUFBSSxDQUFDekMsTUFBM0IsRUFBbUNzSCxDQUFDLEdBQUc0TSxHQUF2QyxFQUE0QzVNLENBQUMsRUFBN0MsRUFBaUQ7QUFDN0NzZSxXQUFLLENBQUNuakIsSUFBSSxDQUFDLENBQUQsQ0FBTCxFQUFVQSxJQUFJLENBQUM2RSxDQUFELENBQWQsQ0FBTDtBQUNIOztBQUNELFdBQU83RSxJQUFJLENBQUMsQ0FBRCxDQUFYO0FBQ0gsR0FuQkQ7O0FBcUJBeWhCLG9CQUFrQixDQUFDTCxPQUFuQixHQUE2QixVQUFTNW9CLE9BQVQsRUFBa0I0cUIsS0FBbEIsRUFBeUJ2ZSxDQUF6QixFQUE0QjtBQUNyRCxXQUFPdWUsS0FBSyxJQUFJLElBQVQsR0FBZ0IsQ0FBQyxDQUFqQixHQUFxQkEsS0FBSyxDQUFDdmpCLE9BQU4sQ0FBY3JILE9BQWQsRUFBdUJxTSxDQUF2QixDQUE1QjtBQUNILEdBRkQ7O0FBSUE0YyxvQkFBa0IsQ0FBQ3hELGFBQW5CLEdBQW1DLFVBQVMzZCxHQUFULEVBQWM7QUFDN0M7QUFDQSxTQUFLLElBQUl3RyxJQUFULElBQWlCeEcsR0FBakIsRUFBc0I7QUFDbEIsYUFBTyxLQUFQO0FBQ0g7O0FBQ0QsV0FBTyxJQUFQO0FBQ0gsR0FORDs7QUFRQTdILFVBQVEsQ0FBQ2lrQixRQUFULENBQWtCL1UsSUFBbEIsQ0FBdUI7QUFDbkJiLFFBQUksRUFBRSxhQURhO0FBRW5CMFQsV0FBTyxFQUFFaUg7QUFGVSxHQUF2QjtBQUlBaHBCLFVBQVEsQ0FBQytoQixPQUFULEdBQW1CaUgsa0JBQW5CO0FBQ0gsQ0ExS0EsR0FBRCxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgTW9iaWxlTWVudSBmcm9tIFwiLi9tb2R1bGVzL21vYmlsZU1lbnVcIjtcclxuaW1wb3J0IEFuaW1hdGlvbnMgZnJvbSBcIi4vbW9kdWxlcy9hbmltYXRpb25cIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9tb2R1bGVzL3NlYXJjaFwiO1xyXG5pbXBvcnQgRm9ybXMgZnJvbSBcIi4vbW9kdWxlcy9mb3Jtc1wiO1xyXG5cclxuY29uc3QgbW9iaWxlTWVudSA9IG5ldyBNb2JpbGVNZW51KCk7XHJcbmNvbnN0IGFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb25zKCk7XHJcbmNvbnN0IHNlYXJjaCA9IG5ldyBTZWFyY2goKTtcclxuY29uc3QgZm9ybXMgPSBuZXcgRm9ybXMoKTtcclxuIiwiaW1wb3J0IGFuaW1lIGZyb20gJy4uL3ZlbmRvci9hbmltZS5qcydcclxuaW1wb3J0IHdheXBvaW50IGZyb20gJy4uL3ZlbmRvci9ub2ZyYW1ld29yay53YXlwb2ludHMuanMnXHJcbmNsYXNzIEFuaW1hdGlvbnMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub2RkRXZlbkFuaW1hdGlvbigpXHJcbiAgICB9XHJcblxyXG4gICAgb2RkRXZlbkFuaW1hdGlvbigpIHtcclxuICAgICAgICBjb25zdCBvZGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9kZCcpXHJcbiAgICAgICAgY29uc3QgZXZlbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlbicpXHJcblxyXG4gICAgICAgIGV2ZW5zLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICBuZXcgV2F5cG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5lbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFsxMjUsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMTUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnc3ByaW5nKDEsIDgwLCAxMCwgMCknXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBvZGRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICBuZXcgV2F5cG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5lbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFsxMjUsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ3NwcmluZygxLCA4MCwgMTAsIDApJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAnMTAwJScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbnNcclxuIiwiaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4vdXRpbGl0eVwiO1xyXG5cclxuY2xhc3MgRm9ybXMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZXh0YXJlYVwiKTtcclxuICAgIHRoaXMuc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFwiKTtcclxuICAgIHRoaXMuY3VzdG9tU2VsZWN0RHJvcGRvd24oKTtcclxuICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBldmVudHMoKSB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMudGV4dGFyZWEgIT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLnRleHRhcmVhICE9IG51bGwpIHtcclxuICAgICAgdGhpcy50ZXh0YXJlYS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgdGhpcy5zZXRUZXh0YXJlYUhlaWdodChlbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VGV4dGFyZWFIZWlnaHQoZWwpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGVsO1xyXG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IFV0aWxpdHkudGV4dGFyZWFIZWlnaHQodGFyZ2V0LnZhbHVlKSArIFwicHhcIjtcclxuICB9XHJcblxyXG4gIGN1c3RvbVNlbGVjdERyb3Bkb3duKCkge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdCAhPSBcInVuZGVmaW5lZFwiICYmIHRoaXMuc2VsZWN0ICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5zZWxlY3QuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAvLyBtYWtlIGN1c3RvbSBzZWxlY3QgZWxlbWVudCBoZXJlLlxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1zO1xyXG4iLCJpbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi91dGlsaXR5XCJcclxuXHJcbmNsYXNzIE1vYmlsZU1lbnUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXInKVxyXG4gICAgICAgIHRoaXMudG9nZ2xlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZV0nKVxyXG4gICAgICAgIHRoaXMubWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5hbWVdJylcclxuICAgICAgICB0aGlzLnN1Ym1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3VibWVudS1idG4nKVxyXG4gICAgICAgIHRoaXMuaXNNZW51T3BlbiA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ldmVudHMoKVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZU1lbnUuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlck1lbnUoZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc3VibWVudUJ0bi5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVTdWJNZW51KGUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB0aGlzLmtleVByZXNzKGUpKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB0aGlzLmNoYW5nZUhlYWRlcigpKVxyXG4gICAgfVxyXG5cclxuICAgIHRyaWdnZXJNZW51KGUpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScpXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5hbWU9XCInICsgdGFyZ2V0ICsgJ1wiXScpXHJcbiAgICAgICAgY29uc3Qgb3RoZXJNZW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5hbWVdOm5vdChbZGF0YS1uYW1lPVwiJyArIHRhcmdldCArICdcIl0pJylcclxuXHJcbiAgICAgICAgaWYgKCF0YXJnZXRNZW51LmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgIC8vIENsb3NlIG90aGVyIG9wZW4gbWVudXMgZmlyc3RcclxuICAgICAgICAgICAgb3RoZXJNZW51cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNZW51KGVsKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdGhpcy5vcGVuTWVudSh0YXJnZXRNZW51KVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jbG9zZU1lbnUodGFyZ2V0TWVudSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk1lbnUobWVudSkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gbWVudS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpXHJcbiAgICAgICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRvZ2dsZT1cIicgKyBpZCArICdcIl0nKVxyXG5cclxuICAgICAgICBVdGlsaXR5LmJvZHlTY3JvbGxMb2NrKClcclxuXHJcbiAgICAgICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaXMtc2Nyb2xsZWQnKVxyXG5cclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKVxyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJylcclxuICAgICAgICBtZW51QnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJylcclxuXHJcbiAgICAgICAgdGhpcy5pc01lbnVPcGVuID0gdHJ1ZVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZU1lbnUobWVudSkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gbWVudS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpXHJcbiAgICAgICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRvZ2dsZT1cIicgKyBpZCArICdcIl0nKVxyXG5cclxuICAgICAgICBVdGlsaXR5LmJvZHlTY3JvbGxVbmxvY2soKVxyXG5cclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKVxyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJylcclxuICAgICAgICBtZW51QnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXHJcblxyXG4gICAgICAgIHRoaXMuaXNNZW51T3BlbiA9IGZhbHNlXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVN1Yk1lbnUoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IGJ0biA9IGUuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjb25zdCB0YXJnZXRNZW51ID0gYnRuLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLnN1Ym1lbnUnKVxyXG5cclxuICAgICAgICBpZiAoIXRhcmdldE1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKVxyXG4gICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKVxyXG4gICAgICAgICAgICB0YXJnZXRNZW51LmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKTtcclxuICAgICAgICAgICAgdGFyZ2V0TWVudS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcblxyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdGFyZ2V0TWVudS5jbGllbnRIZWlnaHQgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgdGFyZ2V0TWVudS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRNZW51LnN0eWxlLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgICAgICB0YXJnZXRNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldE1lbnUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG9uY2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJylcclxuICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSB0YXJnZXRNZW51LmNsaWVudEhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgIHRhcmdldE1lbnUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldE1lbnUuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG5cclxuICAgICAgICAgICAgdGFyZ2V0TWVudS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldE1lbnUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG9uY2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBrZXlQcmVzcyhlKSB7XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAyNyAmJiB0aGlzLmlzTWVudU9wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5tZW51LmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1lbnUoZWwpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUhlYWRlcigpIHtcclxuICAgICAgICBsZXQgc2Nyb2xsUG9zID0gd2luZG93LnNjcm9sbFlcclxuICAgICAgICBpZiAoc2Nyb2xsUG9zID49IDc1IHx8IHRoaXMuaXNNZW51T3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QuYWRkKCdpcy1zY3JvbGxlZCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2Nyb2xsZWQnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTWVudVxyXG4iLCJjbGFzcyBTZWFyY2gge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXJfX3NlYXJjaCcpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX190b2dnbGUnKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19pbnB1dCcpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXktLXNlYXJjaCcpXHJcbiAgICAgICAgdGhpcy5pc1NlYXJjaE9wZW4gPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuZXZlbnRzKClcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKSB7XHJcbiAgICAgICAgLy8gT3BlbiBzZWFyY2ggbW9kYWxcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnRvZ2dsZU1vZGFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENsb3NlIHNlYXJjaCBtb2RhbFxyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaE92ZXJsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jbG9zZU1vZGFsKCkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB0aGlzLmtleVByZXNzKGUpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVNb2RhbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3Blbk1vZGFsKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk1vZGFsKCkge1xyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaE1vZGFsLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKVxyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaEZpZWxkLnZhbHVlID0gJydcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2VhcmNoRmllbGQuZm9jdXMoKSwgMzAxKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKVxyXG4gICAgICAgIHRoaXMuaXNTZWFyY2hPcGVuID0gdHJ1ZVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZU1vZGFsKCkge1xyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcclxuICAgICAgICB0aGlzLmlzU2VhcmNoT3BlbiA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAga2V5UHJlc3MoZSkge1xyXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT0gMjcgJiYgdGhpcy5pc1NlYXJjaE9wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiIsImNsYXNzIFV0aWxpdHkge1xyXG5cclxuICAgIHN0YXRpYyBib2R5U2Nyb2xsTG9jaygpIHtcclxuICAgICAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFlcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJ1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gLXNjcm9sbFkgKyAncHgnXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBib2R5U2Nyb2xsVW5sb2NrKCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGUudG9wO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSAnJztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9ICcnO1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBwYXJzZUludChib2R5U3R5bGUgfHwgMCkgKiAtMSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRleHRhcmVhSGVpZ2h0KHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGxldCBudW1iZXJPZkxpbmVCcmVha3MgPSAodmFsdWUubWF0Y2goL1xcbi9nKSB8fCBbXSkubGVuZ3RoO1xyXG4gICAgICAgICAgICAvLyBtaW4taGVpZ2h0ICsgbGluZXMgeCBsaW5lLWhlaWdodCArIHBhZGRpbmcgKyBib3JkZXJcclxuICAgICAgICAgICAgbGV0IG5ld0hlaWdodCA9IDIwICsgbnVtYmVyT2ZMaW5lQnJlYWtzICogMjAgKyAxMCArIDE7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1vYmlsZUNoZWNrKCkge1xyXG4gICAgICAgIC8qIGh0dHA6Ly9kZXRlY3Rtb2JpbGVicm93c2Vycy5jb20vICovXHJcbiAgICAgICAgbGV0IGNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgKGZ1bmN0aW9uKGEpe2lmKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaS50ZXN0KGEpfHwvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsNCkpKSBjaGVjayA9IHRydWU7fSkobmF2aWdhdG9yLnVzZXJBZ2VudHx8bmF2aWdhdG9yLnZlbmRvcnx8d2luZG93Lm9wZXJhKTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBjaGVjaztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFV0aWxpdHlcclxuIiwiLypcclxuICogYW5pbWUuanMgdjMuMi4xXHJcbiAqIChjKSAyMDIwIEp1bGlhbiBHYXJuaWVyXHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxyXG4gKiBhbmltZWpzLmNvbVxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIERlZmF1bHRzXHJcblxyXG52YXIgZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MgPSB7XHJcbiAgICB1cGRhdGU6IG51bGwsXHJcbiAgICBiZWdpbjogbnVsbCxcclxuICAgIGxvb3BCZWdpbjogbnVsbCxcclxuICAgIGNoYW5nZUJlZ2luOiBudWxsLFxyXG4gICAgY2hhbmdlOiBudWxsLFxyXG4gICAgY2hhbmdlQ29tcGxldGU6IG51bGwsXHJcbiAgICBsb29wQ29tcGxldGU6IG51bGwsXHJcbiAgICBjb21wbGV0ZTogbnVsbCxcclxuICAgIGxvb3A6IDEsXHJcbiAgICBkaXJlY3Rpb246ICdub3JtYWwnLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICB0aW1lbGluZU9mZnNldDogMFxyXG59O1xyXG5cclxudmFyIGRlZmF1bHRUd2VlblNldHRpbmdzID0ge1xyXG4gICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICBkZWxheTogMCxcclxuICAgIGVuZERlbGF5OiAwLFxyXG4gICAgZWFzaW5nOiAnZWFzZU91dEVsYXN0aWMoMSwgLjUpJyxcclxuICAgIHJvdW5kOiAwXHJcbn07XHJcblxyXG52YXIgdmFsaWRUcmFuc2Zvcm1zID0gWyd0cmFuc2xhdGVYJywgJ3RyYW5zbGF0ZVknLCAndHJhbnNsYXRlWicsICdyb3RhdGUnLCAncm90YXRlWCcsICdyb3RhdGVZJywgJ3JvdGF0ZVonLCAnc2NhbGUnLCAnc2NhbGVYJywgJ3NjYWxlWScsICdzY2FsZVonLCAnc2tldycsICdza2V3WCcsICdza2V3WScsICdwZXJzcGVjdGl2ZScsICdtYXRyaXgnLCAnbWF0cml4M2QnXTtcclxuXHJcbi8vIENhY2hpbmdcclxuXHJcbnZhciBjYWNoZSA9IHtcclxuICAgIENTUzoge30sXHJcbiAgICBzcHJpbmdzOiB7fVxyXG59O1xyXG5cclxuLy8gVXRpbHNcclxuXHJcbmZ1bmN0aW9uIG1pbk1heCh2YWwsIG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsLCBtaW4pLCBtYXgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdHJpbmdDb250YWlucyhzdHIsIHRleHQpIHtcclxuICAgIHJldHVybiBzdHIuaW5kZXhPZih0ZXh0KSA+IC0xO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUFyZ3VtZW50cyhmdW5jLCBhcmdzKSB7XHJcbiAgICByZXR1cm4gZnVuYy5hcHBseShudWxsLCBhcmdzKTtcclxufVxyXG5cclxudmFyIGlzID0ge1xyXG4gICAgYXJyOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSk7XHJcbiAgICB9LFxyXG4gICAgb2JqOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0cmluZ0NvbnRhaW5zKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSwgJ09iamVjdCcpO1xyXG4gICAgfSxcclxuICAgIHB0aDogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiBpcy5vYmooYSkgJiYgYS5oYXNPd25Qcm9wZXJ0eSgndG90YWxMZW5ndGgnKTtcclxuICAgIH0sXHJcbiAgICBzdmc6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gYSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQ7XHJcbiAgICB9LFxyXG4gICAgaW5wOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIGEgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgfSxcclxuICAgIGRvbTogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiBhLm5vZGVUeXBlIHx8IGlzLnN2ZyhhKTtcclxuICAgIH0sXHJcbiAgICBzdHI6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIGEgPT09ICdzdHJpbmcnO1xyXG4gICAgfSxcclxuICAgIGZuYzogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJztcclxuICAgIH0sXHJcbiAgICB1bmQ6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnO1xyXG4gICAgfSxcclxuICAgIG5pbDogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiBpcy51bmQoYSkgfHwgYSA9PT0gbnVsbDtcclxuICAgIH0sXHJcbiAgICBoZXg6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gLyheI1swLTlBLUZdezZ9JCl8KF4jWzAtOUEtRl17M30kKS9pLnRlc3QoYSk7XHJcbiAgICB9LFxyXG4gICAgcmdiOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIC9ecmdiLy50ZXN0KGEpO1xyXG4gICAgfSxcclxuICAgIGhzbDogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiAvXmhzbC8udGVzdChhKTtcclxuICAgIH0sXHJcbiAgICBjb2w6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gKGlzLmhleChhKSB8fCBpcy5yZ2IoYSkgfHwgaXMuaHNsKGEpKTtcclxuICAgIH0sXHJcbiAgICBrZXk6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gIWRlZmF1bHRJbnN0YW5jZVNldHRpbmdzLmhhc093blByb3BlcnR5KGEpICYmICFkZWZhdWx0VHdlZW5TZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShhKSAmJiBhICE9PSAndGFyZ2V0cycgJiYgYSAhPT0gJ2tleWZyYW1lcyc7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuLy8gRWFzaW5nc1xyXG5cclxuZnVuY3Rpb24gcGFyc2VFYXNpbmdQYXJhbWV0ZXJzKHN0cmluZykge1xyXG4gICAgdmFyIG1hdGNoID0gL1xcKChbXildKylcXCkvLmV4ZWMoc3RyaW5nKTtcclxuICAgIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uKHApIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChwKTtcclxuICAgIH0pIDogW107XHJcbn1cclxuXHJcbi8vIFNwcmluZyBzb2x2ZXIgaW5zcGlyZWQgYnkgV2Via2l0IENvcHlyaWdodCDCqSAyMDE2IEFwcGxlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gaHR0cHM6Ly93ZWJraXQub3JnL2RlbW9zL3NwcmluZy9zcHJpbmcuanNcclxuXHJcbmZ1bmN0aW9uIHNwcmluZyhzdHJpbmcsIGR1cmF0aW9uKSB7XHJcblxyXG4gICAgdmFyIHBhcmFtcyA9IHBhcnNlRWFzaW5nUGFyYW1ldGVycyhzdHJpbmcpO1xyXG4gICAgdmFyIG1hc3MgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1swXSkgPyAxIDogcGFyYW1zWzBdLCAuMSwgMTAwKTtcclxuICAgIHZhciBzdGlmZm5lc3MgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1sxXSkgPyAxMDAgOiBwYXJhbXNbMV0sIC4xLCAxMDApO1xyXG4gICAgdmFyIGRhbXBpbmcgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1syXSkgPyAxMCA6IHBhcmFtc1syXSwgLjEsIDEwMCk7XHJcbiAgICB2YXIgdmVsb2NpdHkgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1szXSkgPyAwIDogcGFyYW1zWzNdLCAuMSwgMTAwKTtcclxuICAgIHZhciB3MCA9IE1hdGguc3FydChzdGlmZm5lc3MgLyBtYXNzKTtcclxuICAgIHZhciB6ZXRhID0gZGFtcGluZyAvICgyICogTWF0aC5zcXJ0KHN0aWZmbmVzcyAqIG1hc3MpKTtcclxuICAgIHZhciB3ZCA9IHpldGEgPCAxID8gdzAgKiBNYXRoLnNxcnQoMSAtIHpldGEgKiB6ZXRhKSA6IDA7XHJcbiAgICB2YXIgYSA9IDE7XHJcbiAgICB2YXIgYiA9IHpldGEgPCAxID8gKHpldGEgKiB3MCArIC12ZWxvY2l0eSkgLyB3ZCA6IC12ZWxvY2l0eSArIHcwO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNvbHZlcih0KSB7XHJcbiAgICAgICAgdmFyIHByb2dyZXNzID0gZHVyYXRpb24gPyAoZHVyYXRpb24gKiB0KSAvIDEwMDAgOiB0O1xyXG4gICAgICAgIGlmICh6ZXRhIDwgMSkge1xyXG4gICAgICAgICAgICBwcm9ncmVzcyA9IE1hdGguZXhwKC1wcm9ncmVzcyAqIHpldGEgKiB3MCkgKiAoYSAqIE1hdGguY29zKHdkICogcHJvZ3Jlc3MpICsgYiAqIE1hdGguc2luKHdkICogcHJvZ3Jlc3MpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwcm9ncmVzcyA9IChhICsgYiAqIHByb2dyZXNzKSAqIE1hdGguZXhwKC1wcm9ncmVzcyAqIHcwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHQgPT09IDAgfHwgdCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDEgLSBwcm9ncmVzcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREdXJhdGlvbigpIHtcclxuICAgICAgICB2YXIgY2FjaGVkID0gY2FjaGUuc3ByaW5nc1tzdHJpbmddO1xyXG4gICAgICAgIGlmIChjYWNoZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGZyYW1lID0gMSAvIDY7XHJcbiAgICAgICAgdmFyIGVsYXBzZWQgPSAwO1xyXG4gICAgICAgIHZhciByZXN0ID0gMDtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBlbGFwc2VkICs9IGZyYW1lO1xyXG4gICAgICAgICAgICBpZiAoc29sdmVyKGVsYXBzZWQpID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXN0Kys7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdCA+PSAxNikge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gZWxhcHNlZCAqIGZyYW1lICogMTAwMDtcclxuICAgICAgICBjYWNoZS5zcHJpbmdzW3N0cmluZ10gPSBkdXJhdGlvbjtcclxuICAgICAgICByZXR1cm4gZHVyYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGR1cmF0aW9uID8gc29sdmVyIDogZ2V0RHVyYXRpb247XHJcblxyXG59XHJcblxyXG4vLyBCYXNpYyBzdGVwcyBlYXNpbmcgaW1wbGVtZW50YXRpb24gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZnIvZG9jcy9XZWIvQ1NTL3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXHJcblxyXG5mdW5jdGlvbiBzdGVwcyhzdGVwcykge1xyXG4gICAgaWYgKHN0ZXBzID09PSB2b2lkIDApIHN0ZXBzID0gMTA7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKChtaW5NYXgodCwgMC4wMDAwMDEsIDEpKSAqIHN0ZXBzKSAqICgxIC8gc3RlcHMpO1xyXG4gICAgfTtcclxufVxyXG5cclxuLy8gQmV6aWVyRWFzaW5nIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZ1xyXG5cclxudmFyIGJlemllciA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgICB2YXIga1NwbGluZVRhYmxlU2l6ZSA9IDExO1xyXG4gICAgdmFyIGtTYW1wbGVTdGVwU2l6ZSA9IDEuMCAvIChrU3BsaW5lVGFibGVTaXplIC0gMS4wKTtcclxuXHJcbiAgICBmdW5jdGlvbiBBKGFBMSwgYUEyKSB7XHJcbiAgICAgICAgcmV0dXJuIDEuMCAtIDMuMCAqIGFBMiArIDMuMCAqIGFBMVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEIoYUExLCBhQTIpIHtcclxuICAgICAgICByZXR1cm4gMy4wICogYUEyIC0gNi4wICogYUExXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQyhhQTEpIHtcclxuICAgICAgICByZXR1cm4gMy4wICogYUExXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY0JlemllcihhVCwgYUExLCBhQTIpIHtcclxuICAgICAgICByZXR1cm4gKChBKGFBMSwgYUEyKSAqIGFUICsgQihhQTEsIGFBMikpICogYVQgKyBDKGFBMSkpICogYVRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTbG9wZShhVCwgYUExLCBhQTIpIHtcclxuICAgICAgICByZXR1cm4gMy4wICogQShhQTEsIGFBMikgKiBhVCAqIGFUICsgMi4wICogQihhQTEsIGFBMikgKiBhVCArIEMoYUExKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJpbmFyeVN1YmRpdmlkZShhWCwgYUEsIGFCLCBtWDEsIG1YMikge1xyXG4gICAgICAgIHZhciBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcclxuICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7XHJcbiAgICAgICAgICAgICAgICBhQiA9IGN1cnJlbnRUO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYUEgPSBjdXJyZW50VDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IDAuMDAwMDAwMSAmJiArK2kgPCAxMCk7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRUO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBhR3Vlc3NULCBtWDEsIG1YMikge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgKytpKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcclxuICAgICAgICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYmV6aWVyKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xyXG5cclxuICAgICAgICBpZiAoISgwIDw9IG1YMSAmJiBtWDEgPD0gMSAmJiAwIDw9IG1YMiAmJiBtWDIgPD0gMSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2FtcGxlVmFsdWVzID0gbmV3IEZsb2F0MzJBcnJheShrU3BsaW5lVGFibGVTaXplKTtcclxuXHJcbiAgICAgICAgaWYgKG1YMSAhPT0gbVkxIHx8IG1YMiAhPT0gbVkyKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga1NwbGluZVRhYmxlU2l6ZTsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0VEZvclgoYVgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMDtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTYW1wbGUgPSAxO1xyXG4gICAgICAgICAgICB2YXIgbGFzdFNhbXBsZSA9IGtTcGxpbmVUYWJsZVNpemUgLSAxO1xyXG5cclxuICAgICAgICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT09IGxhc3RTYW1wbGUgJiYgc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcclxuICAgICAgICAgICAgICAgIGludGVydmFsU3RhcnQgKz0ga1NhbXBsZVN0ZXBTaXplO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAtLWN1cnJlbnRTYW1wbGU7XHJcblxyXG4gICAgICAgICAgICB2YXIgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XHJcbiAgICAgICAgICAgIHZhciBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIGtTYW1wbGVTdGVwU2l6ZTtcclxuICAgICAgICAgICAgdmFyIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSAwLjAwMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQsIG1YMSwgbVgyKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGd1ZXNzRm9yVDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbih4KSB7XHJcbiAgICAgICAgICAgIGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHggPT09IDAgfHwgeCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNhbGNCZXppZXIoZ2V0VEZvclgoeCksIG1ZMSwgbVkyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBiZXppZXI7XHJcblxyXG59KSgpO1xyXG5cclxudmFyIHBlbm5lciA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvLyBCYXNlZCBvbiBqUXVlcnkgVUkncyBpbXBsZW1lbmF0aW9uIG9mIGVhc2luZyBlcXVhdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyIChodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nKVxyXG5cclxuICAgIHZhciBlYXNlcyA9IHtcclxuICAgICAgICBsaW5lYXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgZnVuY3Rpb25FYXNpbmdzID0ge1xyXG4gICAgICAgIFNpbmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDEgLSBNYXRoLmNvcyh0ICogTWF0aC5QSSAvIDIpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQ2lyYzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMSAtIE1hdGguc3FydCgxIC0gdCAqIHQpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdCAqIHQgKiAoMyAqIHQgLSAyKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIEJvdW5jZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG93MiwgYiA9IDQ7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAodCA8ICgocG93MiA9IE1hdGgucG93KDIsIC0tYikpIC0gMSkgLyAxMSkge31cclxuICAgICAgICAgICAgICAgIHJldHVybiAxIC8gTWF0aC5wb3coNCwgMyAtIGIpIC0gNy41NjI1ICogTWF0aC5wb3coKHBvdzIgKiAzIC0gMikgLyAyMiAtIHQsIDIpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBFbGFzdGljOiBmdW5jdGlvbihhbXBsaXR1ZGUsIHBlcmlvZCkge1xyXG4gICAgICAgICAgICBpZiAoYW1wbGl0dWRlID09PSB2b2lkIDApIGFtcGxpdHVkZSA9IDE7XHJcbiAgICAgICAgICAgIGlmIChwZXJpb2QgPT09IHZvaWQgMCkgcGVyaW9kID0gLjU7XHJcblxyXG4gICAgICAgICAgICB2YXIgYSA9IG1pbk1heChhbXBsaXR1ZGUsIDEsIDEwKTtcclxuICAgICAgICAgICAgdmFyIHAgPSBtaW5NYXgocGVyaW9kLCAuMSwgMik7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHQgPT09IDAgfHwgdCA9PT0gMSkgPyB0IDpcclxuICAgICAgICAgICAgICAgICAgICAtYSAqIE1hdGgucG93KDIsIDEwICogKHQgLSAxKSkgKiBNYXRoLnNpbigoKCh0IC0gMSkgLSAocCAvIChNYXRoLlBJICogMikgKiBNYXRoLmFzaW4oMSAvIGEpKSkgKiAoTWF0aC5QSSAqIDIpKSAvIHApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFzZUVhc2luZ3MgPSBbJ1F1YWQnLCAnQ3ViaWMnLCAnUXVhcnQnLCAnUXVpbnQnLCAnRXhwbyddO1xyXG5cclxuICAgIGJhc2VFYXNpbmdzLmZvckVhY2goZnVuY3Rpb24obmFtZSwgaSkge1xyXG4gICAgICAgIGZ1bmN0aW9uRWFzaW5nc1tuYW1lXSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KHQsIGkgKyAyKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgT2JqZWN0LmtleXMoZnVuY3Rpb25FYXNpbmdzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgICB2YXIgZWFzZUluID0gZnVuY3Rpb25FYXNpbmdzW25hbWVdO1xyXG4gICAgICAgIGVhc2VzWydlYXNlSW4nICsgbmFtZV0gPSBlYXNlSW47XHJcbiAgICAgICAgZWFzZXNbJ2Vhc2VPdXQnICsgbmFtZV0gPSBmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMSAtIGVhc2VJbihhLCBiKSgxIC0gdCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlYXNlc1snZWFzZUluT3V0JyArIG5hbWVdID0gZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHQgPCAwLjUgPyBlYXNlSW4oYSwgYikodCAqIDIpIC8gMiA6XHJcbiAgICAgICAgICAgICAgICAgICAgMSAtIGVhc2VJbihhLCBiKSh0ICogLTIgKyAyKSAvIDI7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlYXNlc1snZWFzZU91dEluJyArIG5hbWVdID0gZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHQgPCAwLjUgPyAoMSAtIGVhc2VJbihhLCBiKSgxIC0gdCAqIDIpKSAvIDIgOlxyXG4gICAgICAgICAgICAgICAgICAgIChlYXNlSW4oYSwgYikodCAqIDIgLSAxKSArIDEpIC8gMjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGVhc2VzO1xyXG5cclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIHBhcnNlRWFzaW5ncyhlYXNpbmcsIGR1cmF0aW9uKSB7XHJcbiAgICBpZiAoaXMuZm5jKGVhc2luZykpIHtcclxuICAgICAgICByZXR1cm4gZWFzaW5nO1xyXG4gICAgfVxyXG4gICAgdmFyIG5hbWUgPSBlYXNpbmcuc3BsaXQoJygnKVswXTtcclxuICAgIHZhciBlYXNlID0gcGVubmVyW25hbWVdO1xyXG4gICAgdmFyIGFyZ3MgPSBwYXJzZUVhc2luZ1BhcmFtZXRlcnMoZWFzaW5nKTtcclxuICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgIGNhc2UgJ3NwcmluZyc6XHJcbiAgICAgICAgICAgIHJldHVybiBzcHJpbmcoZWFzaW5nLCBkdXJhdGlvbik7XHJcbiAgICAgICAgY2FzZSAnY3ViaWNCZXppZXInOlxyXG4gICAgICAgICAgICByZXR1cm4gYXBwbHlBcmd1bWVudHMoYmV6aWVyLCBhcmdzKTtcclxuICAgICAgICBjYXNlICdzdGVwcyc6XHJcbiAgICAgICAgICAgIHJldHVybiBhcHBseUFyZ3VtZW50cyhzdGVwcywgYXJncyk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIGFwcGx5QXJndW1lbnRzKGVhc2UsIGFyZ3MpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBTdHJpbmdzXHJcblxyXG5mdW5jdGlvbiBzZWxlY3RTdHJpbmcoc3RyKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc3RyKTtcclxuICAgICAgICByZXR1cm4gbm9kZXM7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBcnJheXNcclxuXHJcbmZ1bmN0aW9uIGZpbHRlckFycmF5KGFyciwgY2FsbGJhY2spIHtcclxuICAgIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xyXG4gICAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHMubGVuZ3RoID49IDIgPyBhcmd1bWVudHNbMV0gOiB2b2lkIDA7XHJcbiAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgaW4gYXJyKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWwgPSBhcnJbaV07XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHZhbCwgaSwgYXJyKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZsYXR0ZW5BcnJheShhcnIpIHtcclxuICAgIHJldHVybiBhcnIucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYS5jb25jYXQoaXMuYXJyKGIpID8gZmxhdHRlbkFycmF5KGIpIDogYik7XHJcbiAgICB9LCBbXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvQXJyYXkobykge1xyXG4gICAgaWYgKGlzLmFycihvKSkge1xyXG4gICAgICAgIHJldHVybiBvO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzLnN0cihvKSkge1xyXG4gICAgICAgIG8gPSBzZWxlY3RTdHJpbmcobykgfHwgbztcclxuICAgIH1cclxuICAgIGlmIChvIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgbyBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwobyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW29dO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcnJheUNvbnRhaW5zKGFyciwgdmFsKSB7XHJcbiAgICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiBhID09PSB2YWw7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gT2JqZWN0c1xyXG5cclxuZnVuY3Rpb24gY2xvbmVPYmplY3Qobykge1xyXG4gICAgdmFyIGNsb25lID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIG8pIHtcclxuICAgICAgICBjbG9uZVtwXSA9IG9bcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xvbmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VPYmplY3RQcm9wcyhvMSwgbzIpIHtcclxuICAgIHZhciBvID0gY2xvbmVPYmplY3QobzEpO1xyXG4gICAgZm9yICh2YXIgcCBpbiBvMSkge1xyXG4gICAgICAgIG9bcF0gPSBvMi5oYXNPd25Qcm9wZXJ0eShwKSA/IG8yW3BdIDogbzFbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbztcclxufVxyXG5cclxuZnVuY3Rpb24gbWVyZ2VPYmplY3RzKG8xLCBvMikge1xyXG4gICAgdmFyIG8gPSBjbG9uZU9iamVjdChvMSk7XHJcbiAgICBmb3IgKHZhciBwIGluIG8yKSB7XHJcbiAgICAgICAgb1twXSA9IGlzLnVuZChvMVtwXSkgPyBvMltwXSA6IG8xW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG87XHJcbn1cclxuXHJcbi8vIENvbG9yc1xyXG5cclxuZnVuY3Rpb24gcmdiVG9SZ2JhKHJnYlZhbHVlKSB7XHJcbiAgICB2YXIgcmdiID0gL3JnYlxcKChcXGQrLFxccypbXFxkXSssXFxzKltcXGRdKylcXCkvZy5leGVjKHJnYlZhbHVlKTtcclxuICAgIHJldHVybiByZ2IgPyAoXCJyZ2JhKFwiICsgKHJnYlsxXSkgKyBcIiwxKVwiKSA6IHJnYlZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoZXhUb1JnYmEoaGV4VmFsdWUpIHtcclxuICAgIHZhciByZ3ggPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xyXG4gICAgdmFyIGhleCA9IGhleFZhbHVlLnJlcGxhY2Uocmd4LCBmdW5jdGlvbihtLCByLCBnLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIHIgKyByICsgZyArIGcgKyBiICsgYjtcclxuICAgIH0pO1xyXG4gICAgdmFyIHJnYiA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xyXG4gICAgdmFyIHIgPSBwYXJzZUludChyZ2JbMV0sIDE2KTtcclxuICAgIHZhciBnID0gcGFyc2VJbnQocmdiWzJdLCAxNik7XHJcbiAgICB2YXIgYiA9IHBhcnNlSW50KHJnYlszXSwgMTYpO1xyXG4gICAgcmV0dXJuIChcInJnYmEoXCIgKyByICsgXCIsXCIgKyBnICsgXCIsXCIgKyBiICsgXCIsMSlcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhzbFRvUmdiYShoc2xWYWx1ZSkge1xyXG4gICAgdmFyIGhzbCA9IC9oc2xcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSVcXCkvZy5leGVjKGhzbFZhbHVlKSB8fCAvaHNsYVxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspXFwpL2cuZXhlYyhoc2xWYWx1ZSk7XHJcbiAgICB2YXIgaCA9IHBhcnNlSW50KGhzbFsxXSwgMTApIC8gMzYwO1xyXG4gICAgdmFyIHMgPSBwYXJzZUludChoc2xbMl0sIDEwKSAvIDEwMDtcclxuICAgIHZhciBsID0gcGFyc2VJbnQoaHNsWzNdLCAxMCkgLyAxMDA7XHJcbiAgICB2YXIgYSA9IGhzbFs0XSB8fCAxO1xyXG5cclxuICAgIGZ1bmN0aW9uIGh1ZTJyZ2IocCwgcSwgdCkge1xyXG4gICAgICAgIGlmICh0IDwgMCkge1xyXG4gICAgICAgICAgICB0ICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0ID4gMSkge1xyXG4gICAgICAgICAgICB0IC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0IDwgMSAvIDYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0IDwgMSAvIDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0IDwgMiAvIDMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHAgKyAocSAtIHApICogKDIgLyAzIC0gdCkgKiA2O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuICAgIHZhciByLCBnLCBiO1xyXG4gICAgaWYgKHMgPT0gMCkge1xyXG4gICAgICAgIHIgPSBnID0gYiA9IGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcclxuICAgICAgICB2YXIgcCA9IDIgKiBsIC0gcTtcclxuICAgICAgICByID0gaHVlMnJnYihwLCBxLCBoICsgMSAvIDMpO1xyXG4gICAgICAgIGcgPSBodWUycmdiKHAsIHEsIGgpO1xyXG4gICAgICAgIGIgPSBodWUycmdiKHAsIHEsIGggLSAxIC8gMyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFwicmdiYShcIiArIChyICogMjU1KSArIFwiLFwiICsgKGcgKiAyNTUpICsgXCIsXCIgKyAoYiAqIDI1NSkgKyBcIixcIiArIGEgKyBcIilcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbG9yVG9SZ2IodmFsKSB7XHJcbiAgICBpZiAoaXMucmdiKHZhbCkpIHtcclxuICAgICAgICByZXR1cm4gcmdiVG9SZ2JhKHZhbCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXMuaGV4KHZhbCkpIHtcclxuICAgICAgICByZXR1cm4gaGV4VG9SZ2JhKHZhbCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXMuaHNsKHZhbCkpIHtcclxuICAgICAgICByZXR1cm4gaHNsVG9SZ2JhKHZhbCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFVuaXRzXHJcblxyXG5mdW5jdGlvbiBnZXRVbml0KHZhbCkge1xyXG4gICAgdmFyIHNwbGl0ID0gL1srLV0/XFxkKlxcLj9cXGQrKD86XFwuXFxkKyk/KD86W2VFXVsrLV0/XFxkKyk/KCV8cHh8cHR8ZW18cmVtfGlufGNtfG1tfGV4fGNofHBjfHZ3fHZofHZtaW58dm1heHxkZWd8cmFkfHR1cm4pPyQvLmV4ZWModmFsKTtcclxuICAgIGlmIChzcGxpdCkge1xyXG4gICAgICAgIHJldHVybiBzcGxpdFsxXTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtVW5pdChwcm9wTmFtZSkge1xyXG4gICAgaWYgKHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAndHJhbnNsYXRlJykgfHwgcHJvcE5hbWUgPT09ICdwZXJzcGVjdGl2ZScpIHtcclxuICAgICAgICByZXR1cm4gJ3B4JztcclxuICAgIH1cclxuICAgIGlmIChzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3JvdGF0ZScpIHx8IHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAnc2tldycpKSB7XHJcbiAgICAgICAgcmV0dXJuICdkZWcnO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBWYWx1ZXNcclxuXHJcbmZ1bmN0aW9uIGdldEZ1bmN0aW9uVmFsdWUodmFsLCBhbmltYXRhYmxlKSB7XHJcbiAgICBpZiAoIWlzLmZuYyh2YWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWwoYW5pbWF0YWJsZS50YXJnZXQsIGFuaW1hdGFibGUuaWQsIGFuaW1hdGFibGUudG90YWwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUoZWwsIHByb3ApIHtcclxuICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUocHJvcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIHtcclxuICAgIHZhciB2YWx1ZVVuaXQgPSBnZXRVbml0KHZhbHVlKTtcclxuICAgIGlmIChhcnJheUNvbnRhaW5zKFt1bml0LCAnZGVnJywgJ3JhZCcsICd0dXJuJ10sIHZhbHVlVW5pdCkpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICB2YXIgY2FjaGVkID0gY2FjaGUuQ1NTW3ZhbHVlICsgdW5pdF07XHJcbiAgICBpZiAoIWlzLnVuZChjYWNoZWQpKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhY2hlZDtcclxuICAgIH1cclxuICAgIHZhciBiYXNlbGluZSA9IDEwMDtcclxuICAgIHZhciB0ZW1wRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsLnRhZ05hbWUpO1xyXG4gICAgdmFyIHBhcmVudEVsID0gKGVsLnBhcmVudE5vZGUgJiYgKGVsLnBhcmVudE5vZGUgIT09IGRvY3VtZW50KSkgPyBlbC5wYXJlbnROb2RlIDogZG9jdW1lbnQuYm9keTtcclxuICAgIHBhcmVudEVsLmFwcGVuZENoaWxkKHRlbXBFbCk7XHJcbiAgICB0ZW1wRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgdGVtcEVsLnN0eWxlLndpZHRoID0gYmFzZWxpbmUgKyB1bml0O1xyXG4gICAgdmFyIGZhY3RvciA9IGJhc2VsaW5lIC8gdGVtcEVsLm9mZnNldFdpZHRoO1xyXG4gICAgcGFyZW50RWwucmVtb3ZlQ2hpbGQodGVtcEVsKTtcclxuICAgIHZhciBjb252ZXJ0ZWRVbml0ID0gZmFjdG9yICogcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICBjYWNoZS5DU1NbdmFsdWUgKyB1bml0XSA9IGNvbnZlcnRlZFVuaXQ7XHJcbiAgICByZXR1cm4gY29udmVydGVkVW5pdDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q1NTVmFsdWUoZWwsIHByb3AsIHVuaXQpIHtcclxuICAgIGlmIChwcm9wIGluIGVsLnN0eWxlKSB7XHJcbiAgICAgICAgdmFyIHVwcGVyY2FzZVByb3BOYW1lID0gcHJvcC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGVsLnN0eWxlW3Byb3BdIHx8IGdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUodXBwZXJjYXNlUHJvcE5hbWUpIHx8ICcwJztcclxuICAgICAgICByZXR1cm4gdW5pdCA/IGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIDogdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFuaW1hdGlvblR5cGUoZWwsIHByb3ApIHtcclxuICAgIGlmIChpcy5kb20oZWwpICYmICFpcy5pbnAoZWwpICYmICghaXMubmlsKGdldEF0dHJpYnV0ZShlbCwgcHJvcCkpIHx8IChpcy5zdmcoZWwpICYmIGVsW3Byb3BdKSkpIHtcclxuICAgICAgICByZXR1cm4gJ2F0dHJpYnV0ZSc7XHJcbiAgICB9XHJcbiAgICBpZiAoaXMuZG9tKGVsKSAmJiBhcnJheUNvbnRhaW5zKHZhbGlkVHJhbnNmb3JtcywgcHJvcCkpIHtcclxuICAgICAgICByZXR1cm4gJ3RyYW5zZm9ybSc7XHJcbiAgICB9XHJcbiAgICBpZiAoaXMuZG9tKGVsKSAmJiAocHJvcCAhPT0gJ3RyYW5zZm9ybScgJiYgZ2V0Q1NTVmFsdWUoZWwsIHByb3ApKSkge1xyXG4gICAgICAgIHJldHVybiAnY3NzJztcclxuICAgIH1cclxuICAgIGlmIChlbFtwcm9wXSAhPSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuICdvYmplY3QnO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFbGVtZW50VHJhbnNmb3JtcyhlbCkge1xyXG4gICAgaWYgKCFpcy5kb20oZWwpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHN0ciA9IGVsLnN0eWxlLnRyYW5zZm9ybSB8fCAnJztcclxuICAgIHZhciByZWcgPSAvKFxcdyspXFwoKFteKV0qKVxcKS9nO1xyXG4gICAgdmFyIHRyYW5zZm9ybXMgPSBuZXcgTWFwKCk7XHJcbiAgICB2YXIgbTtcclxuICAgIHdoaWxlIChtID0gcmVnLmV4ZWMoc3RyKSkge1xyXG4gICAgICAgIHRyYW5zZm9ybXMuc2V0KG1bMV0sIG1bMl0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRyYW5zZm9ybXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRyYW5zZm9ybVZhbHVlKGVsLCBwcm9wTmFtZSwgYW5pbWF0YWJsZSwgdW5pdCkge1xyXG4gICAgdmFyIGRlZmF1bHRWYWwgPSBzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3NjYWxlJykgPyAxIDogMCArIGdldFRyYW5zZm9ybVVuaXQocHJvcE5hbWUpO1xyXG4gICAgdmFyIHZhbHVlID0gZ2V0RWxlbWVudFRyYW5zZm9ybXMoZWwpLmdldChwcm9wTmFtZSkgfHwgZGVmYXVsdFZhbDtcclxuICAgIGlmIChhbmltYXRhYmxlKSB7XHJcbiAgICAgICAgYW5pbWF0YWJsZS50cmFuc2Zvcm1zLmxpc3Quc2V0KHByb3BOYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgYW5pbWF0YWJsZS50cmFuc2Zvcm1zWydsYXN0J10gPSBwcm9wTmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bml0ID8gY29udmVydFB4VG9Vbml0KGVsLCB2YWx1ZSwgdW5pdCkgOiB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZSh0YXJnZXQsIHByb3BOYW1lLCB1bml0LCBhbmltYXRhYmxlKSB7XHJcbiAgICBzd2l0Y2ggKGdldEFuaW1hdGlvblR5cGUodGFyZ2V0LCBwcm9wTmFtZSkpIHtcclxuICAgICAgICBjYXNlICd0cmFuc2Zvcm0nOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0VHJhbnNmb3JtVmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgYW5pbWF0YWJsZSwgdW5pdCk7XHJcbiAgICAgICAgY2FzZSAnY3NzJzpcclxuICAgICAgICAgICAgcmV0dXJuIGdldENTU1ZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIHVuaXQpO1xyXG4gICAgICAgIGNhc2UgJ2F0dHJpYnV0ZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRBdHRyaWJ1dGUodGFyZ2V0LCBwcm9wTmFtZSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wTmFtZV0gfHwgMDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVsYXRpdmVWYWx1ZSh0bywgZnJvbSkge1xyXG4gICAgdmFyIG9wZXJhdG9yID0gL14oXFwqPXxcXCs9fC09KS8uZXhlYyh0byk7XHJcbiAgICBpZiAoIW9wZXJhdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvO1xyXG4gICAgfVxyXG4gICAgdmFyIHUgPSBnZXRVbml0KHRvKSB8fCAwO1xyXG4gICAgdmFyIHggPSBwYXJzZUZsb2F0KGZyb20pO1xyXG4gICAgdmFyIHkgPSBwYXJzZUZsb2F0KHRvLnJlcGxhY2Uob3BlcmF0b3JbMF0sICcnKSk7XHJcbiAgICBzd2l0Y2ggKG9wZXJhdG9yWzBdWzBdKSB7XHJcbiAgICAgICAgY2FzZSAnKyc6XHJcbiAgICAgICAgICAgIHJldHVybiB4ICsgeSArIHU7XHJcbiAgICAgICAgY2FzZSAnLSc6XHJcbiAgICAgICAgICAgIHJldHVybiB4IC0geSArIHU7XHJcbiAgICAgICAgY2FzZSAnKic6XHJcbiAgICAgICAgICAgIHJldHVybiB4ICogeSArIHU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlVmFsdWUodmFsLCB1bml0KSB7XHJcbiAgICBpZiAoaXMuY29sKHZhbCkpIHtcclxuICAgICAgICByZXR1cm4gY29sb3JUb1JnYih2YWwpO1xyXG4gICAgfVxyXG4gICAgaWYgKC9cXHMvZy50ZXN0KHZhbCkpIHtcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG4gICAgdmFyIG9yaWdpbmFsVW5pdCA9IGdldFVuaXQodmFsKTtcclxuICAgIHZhciB1bml0TGVzcyA9IG9yaWdpbmFsVW5pdCA/IHZhbC5zdWJzdHIoMCwgdmFsLmxlbmd0aCAtIG9yaWdpbmFsVW5pdC5sZW5ndGgpIDogdmFsO1xyXG4gICAgaWYgKHVuaXQpIHtcclxuICAgICAgICByZXR1cm4gdW5pdExlc3MgKyB1bml0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuaXRMZXNzO1xyXG59XHJcblxyXG4vLyBnZXRUb3RhbExlbmd0aCgpIGVxdWl2YWxlbnQgZm9yIGNpcmNsZSwgcmVjdCwgcG9seWxpbmUsIHBvbHlnb24gYW5kIGxpbmUgc2hhcGVzXHJcbi8vIGFkYXB0ZWQgZnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9TZWJMYW1ibGEvM2UwNTUwYzQ5NmMyMzY3MDk3NDRcclxuXHJcbmZ1bmN0aW9uIGdldERpc3RhbmNlKHAxLCBwMikge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDaXJjbGVMZW5ndGgoZWwpIHtcclxuICAgIHJldHVybiBNYXRoLlBJICogMiAqIGdldEF0dHJpYnV0ZShlbCwgJ3InKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVjdExlbmd0aChlbCkge1xyXG4gICAgcmV0dXJuIChnZXRBdHRyaWJ1dGUoZWwsICd3aWR0aCcpICogMikgKyAoZ2V0QXR0cmlidXRlKGVsLCAnaGVpZ2h0JykgKiAyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGluZUxlbmd0aChlbCkge1xyXG4gICAgcmV0dXJuIGdldERpc3RhbmNlKHtcclxuICAgICAgICB4OiBnZXRBdHRyaWJ1dGUoZWwsICd4MScpLFxyXG4gICAgICAgIHk6IGdldEF0dHJpYnV0ZShlbCwgJ3kxJylcclxuICAgIH0sIHtcclxuICAgICAgICB4OiBnZXRBdHRyaWJ1dGUoZWwsICd4MicpLFxyXG4gICAgICAgIHk6IGdldEF0dHJpYnV0ZShlbCwgJ3kyJylcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQb2x5bGluZUxlbmd0aChlbCkge1xyXG4gICAgdmFyIHBvaW50cyA9IGVsLnBvaW50cztcclxuICAgIHZhciB0b3RhbExlbmd0aCA9IDA7XHJcbiAgICB2YXIgcHJldmlvdXNQb3M7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5udW1iZXJPZkl0ZW1zOyBpKyspIHtcclxuICAgICAgICB2YXIgY3VycmVudFBvcyA9IHBvaW50cy5nZXRJdGVtKGkpO1xyXG4gICAgICAgIGlmIChpID4gMCkge1xyXG4gICAgICAgICAgICB0b3RhbExlbmd0aCArPSBnZXREaXN0YW5jZShwcmV2aW91c1BvcywgY3VycmVudFBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZXZpb3VzUG9zID0gY3VycmVudFBvcztcclxuICAgIH1cclxuICAgIHJldHVybiB0b3RhbExlbmd0aDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UG9seWdvbkxlbmd0aChlbCkge1xyXG4gICAgdmFyIHBvaW50cyA9IGVsLnBvaW50cztcclxuICAgIHJldHVybiBnZXRQb2x5bGluZUxlbmd0aChlbCkgKyBnZXREaXN0YW5jZShwb2ludHMuZ2V0SXRlbShwb2ludHMubnVtYmVyT2ZJdGVtcyAtIDEpLCBwb2ludHMuZ2V0SXRlbSgwKSk7XHJcbn1cclxuXHJcbi8vIFBhdGggYW5pbWF0aW9uXHJcblxyXG5mdW5jdGlvbiBnZXRUb3RhbExlbmd0aChlbCkge1xyXG4gICAgaWYgKGVsLmdldFRvdGFsTGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsLmdldFRvdGFsTGVuZ3RoKCk7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgIGNhc2UgJ2NpcmNsZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRDaXJjbGVMZW5ndGgoZWwpO1xyXG4gICAgICAgIGNhc2UgJ3JlY3QnOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0UmVjdExlbmd0aChlbCk7XHJcbiAgICAgICAgY2FzZSAnbGluZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRMaW5lTGVuZ3RoKGVsKTtcclxuICAgICAgICBjYXNlICdwb2x5bGluZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRQb2x5bGluZUxlbmd0aChlbCk7XHJcbiAgICAgICAgY2FzZSAncG9seWdvbic6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRQb2x5Z29uTGVuZ3RoKGVsKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RGFzaG9mZnNldChlbCkge1xyXG4gICAgdmFyIHBhdGhMZW5ndGggPSBnZXRUb3RhbExlbmd0aChlbCk7XHJcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBwYXRoTGVuZ3RoKTtcclxuICAgIHJldHVybiBwYXRoTGVuZ3RoO1xyXG59XHJcblxyXG4vLyBNb3Rpb24gcGF0aFxyXG5cclxuZnVuY3Rpb24gZ2V0UGFyZW50U3ZnRWwoZWwpIHtcclxuICAgIHZhciBwYXJlbnRFbCA9IGVsLnBhcmVudE5vZGU7XHJcbiAgICB3aGlsZSAoaXMuc3ZnKHBhcmVudEVsKSkge1xyXG4gICAgICAgIGlmICghaXMuc3ZnKHBhcmVudEVsLnBhcmVudE5vZGUpKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJlbnRFbCA9IHBhcmVudEVsLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyZW50RWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhcmVudFN2ZyhwYXRoRWwsIHN2Z0RhdGEpIHtcclxuICAgIHZhciBzdmcgPSBzdmdEYXRhIHx8IHt9O1xyXG4gICAgdmFyIHBhcmVudFN2Z0VsID0gc3ZnLmVsIHx8IGdldFBhcmVudFN2Z0VsKHBhdGhFbCk7XHJcbiAgICB2YXIgcmVjdCA9IHBhcmVudFN2Z0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgdmFyIHZpZXdCb3hBdHRyID0gZ2V0QXR0cmlidXRlKHBhcmVudFN2Z0VsLCAndmlld0JveCcpO1xyXG4gICAgdmFyIHdpZHRoID0gcmVjdC53aWR0aDtcclxuICAgIHZhciBoZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgIHZhciB2aWV3Qm94ID0gc3ZnLnZpZXdCb3ggfHwgKHZpZXdCb3hBdHRyID8gdmlld0JveEF0dHIuc3BsaXQoJyAnKSA6IFswLCAwLCB3aWR0aCwgaGVpZ2h0XSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVsOiBwYXJlbnRTdmdFbCxcclxuICAgICAgICB2aWV3Qm94OiB2aWV3Qm94LFxyXG4gICAgICAgIHg6IHZpZXdCb3hbMF0gLyAxLFxyXG4gICAgICAgIHk6IHZpZXdCb3hbMV0gLyAxLFxyXG4gICAgICAgIHc6IHdpZHRoLFxyXG4gICAgICAgIGg6IGhlaWdodCxcclxuICAgICAgICB2Vzogdmlld0JveFsyXSxcclxuICAgICAgICB2SDogdmlld0JveFszXVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYXRoKHBhdGgsIHBlcmNlbnQpIHtcclxuICAgIHZhciBwYXRoRWwgPSBpcy5zdHIocGF0aCkgPyBzZWxlY3RTdHJpbmcocGF0aClbMF0gOiBwYXRoO1xyXG4gICAgdmFyIHAgPSBwZXJjZW50IHx8IDEwMDtcclxuICAgIHJldHVybiBmdW5jdGlvbihwcm9wZXJ0eSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgZWw6IHBhdGhFbCxcclxuICAgICAgICAgICAgc3ZnOiBnZXRQYXJlbnRTdmcocGF0aEVsKSxcclxuICAgICAgICAgICAgdG90YWxMZW5ndGg6IGdldFRvdGFsTGVuZ3RoKHBhdGhFbCkgKiAocCAvIDEwMClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhdGhQcm9ncmVzcyhwYXRoLCBwcm9ncmVzcywgaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHKSB7XHJcbiAgICBmdW5jdGlvbiBwb2ludChvZmZzZXQpIHtcclxuICAgICAgICBpZiAob2Zmc2V0ID09PSB2b2lkIDApIG9mZnNldCA9IDA7XHJcblxyXG4gICAgICAgIHZhciBsID0gcHJvZ3Jlc3MgKyBvZmZzZXQgPj0gMSA/IHByb2dyZXNzICsgb2Zmc2V0IDogMDtcclxuICAgICAgICByZXR1cm4gcGF0aC5lbC5nZXRQb2ludEF0TGVuZ3RoKGwpO1xyXG4gICAgfVxyXG4gICAgdmFyIHN2ZyA9IGdldFBhcmVudFN2ZyhwYXRoLmVsLCBwYXRoLnN2Zyk7XHJcbiAgICB2YXIgcCA9IHBvaW50KCk7XHJcbiAgICB2YXIgcDAgPSBwb2ludCgtMSk7XHJcbiAgICB2YXIgcDEgPSBwb2ludCgrMSk7XHJcbiAgICB2YXIgc2NhbGVYID0gaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHID8gMSA6IHN2Zy53IC8gc3ZnLnZXO1xyXG4gICAgdmFyIHNjYWxlWSA9IGlzUGF0aFRhcmdldEluc2lkZVNWRyA/IDEgOiBzdmcuaCAvIHN2Zy52SDtcclxuICAgIHN3aXRjaCAocGF0aC5wcm9wZXJ0eSkge1xyXG4gICAgICAgIGNhc2UgJ3gnOlxyXG4gICAgICAgICAgICByZXR1cm4gKHAueCAtIHN2Zy54KSAqIHNjYWxlWDtcclxuICAgICAgICBjYXNlICd5JzpcclxuICAgICAgICAgICAgcmV0dXJuIChwLnkgLSBzdmcueSkgKiBzY2FsZVk7XHJcbiAgICAgICAgY2FzZSAnYW5nbGUnOlxyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihwMS55IC0gcDAueSwgcDEueCAtIHAwLngpICogMTgwIC8gTWF0aC5QSTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gRGVjb21wb3NlIHZhbHVlXHJcblxyXG5mdW5jdGlvbiBkZWNvbXBvc2VWYWx1ZSh2YWwsIHVuaXQpIHtcclxuICAgIC8vIGNvbnN0IHJneCA9IC8tP1xcZCpcXC4/XFxkKy9nOyAvLyBoYW5kbGVzIGJhc2ljIG51bWJlcnNcclxuICAgIC8vIGNvbnN0IHJneCA9IC9bKy1dP1xcZCsoPzpcXC5cXGQrKT8oPzpbZUVdWystXT9cXGQrKT8vZzsgLy8gaGFuZGxlcyBleHBvbmVudHMgbm90YXRpb25cclxuICAgIHZhciByZ3ggPSAvWystXT9cXGQqXFwuP1xcZCsoPzpcXC5cXGQrKT8oPzpbZUVdWystXT9cXGQrKT8vZzsgLy8gaGFuZGxlcyBleHBvbmVudHMgbm90YXRpb25cclxuICAgIHZhciB2YWx1ZSA9IHZhbGlkYXRlVmFsdWUoKGlzLnB0aCh2YWwpID8gdmFsLnRvdGFsTGVuZ3RoIDogdmFsKSwgdW5pdCkgKyAnJztcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgb3JpZ2luYWw6IHZhbHVlLFxyXG4gICAgICAgIG51bWJlcnM6IHZhbHVlLm1hdGNoKHJneCkgPyB2YWx1ZS5tYXRjaChyZ3gpLm1hcChOdW1iZXIpIDogWzBdLFxyXG4gICAgICAgIHN0cmluZ3M6IChpcy5zdHIodmFsKSB8fCB1bml0KSA/IHZhbHVlLnNwbGl0KHJneCkgOiBbXVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBbmltYXRhYmxlc1xyXG5cclxuZnVuY3Rpb24gcGFyc2VUYXJnZXRzKHRhcmdldHMpIHtcclxuICAgIHZhciB0YXJnZXRzQXJyYXkgPSB0YXJnZXRzID8gKGZsYXR0ZW5BcnJheShpcy5hcnIodGFyZ2V0cykgPyB0YXJnZXRzLm1hcCh0b0FycmF5KSA6IHRvQXJyYXkodGFyZ2V0cykpKSA6IFtdO1xyXG4gICAgcmV0dXJuIGZpbHRlckFycmF5KHRhcmdldHNBcnJheSwgZnVuY3Rpb24oaXRlbSwgcG9zLCBzZWxmKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYuaW5kZXhPZihpdGVtKSA9PT0gcG9zO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFuaW1hdGFibGVzKHRhcmdldHMpIHtcclxuICAgIHZhciBwYXJzZWQgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XHJcbiAgICByZXR1cm4gcGFyc2VkLm1hcChmdW5jdGlvbih0LCBpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB0LFxyXG4gICAgICAgICAgICBpZDogaSxcclxuICAgICAgICAgICAgdG90YWw6IHBhcnNlZC5sZW5ndGgsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybXM6IHtcclxuICAgICAgICAgICAgICAgIGxpc3Q6IGdldEVsZW1lbnRUcmFuc2Zvcm1zKHQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIFByb3BlcnRpZXNcclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BlcnR5VHdlZW5zKHByb3AsIHR3ZWVuU2V0dGluZ3MpIHtcclxuICAgIHZhciBzZXR0aW5ncyA9IGNsb25lT2JqZWN0KHR3ZWVuU2V0dGluZ3MpO1xyXG4gICAgLy8gT3ZlcnJpZGUgZHVyYXRpb24gaWYgZWFzaW5nIGlzIGEgc3ByaW5nXHJcbiAgICBpZiAoL15zcHJpbmcvLnRlc3Qoc2V0dGluZ3MuZWFzaW5nKSkge1xyXG4gICAgICAgIHNldHRpbmdzLmR1cmF0aW9uID0gc3ByaW5nKHNldHRpbmdzLmVhc2luZyk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXMuYXJyKHByb3ApKSB7XHJcbiAgICAgICAgdmFyIGwgPSBwcm9wLmxlbmd0aDtcclxuICAgICAgICB2YXIgaXNGcm9tVG8gPSAobCA9PT0gMiAmJiAhaXMub2JqKHByb3BbMF0pKTtcclxuICAgICAgICBpZiAoIWlzRnJvbVRvKSB7XHJcbiAgICAgICAgICAgIC8vIER1cmF0aW9uIGRpdmlkZWQgYnkgdGhlIG51bWJlciBvZiB0d2VlbnNcclxuICAgICAgICAgICAgaWYgKCFpcy5mbmModHdlZW5TZXR0aW5ncy5kdXJhdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzLmR1cmF0aW9uID0gdHdlZW5TZXR0aW5ncy5kdXJhdGlvbiAvIGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBUcmFuc2Zvcm0gW2Zyb20sIHRvXSB2YWx1ZXMgc2hvcnRoYW5kIHRvIGEgdmFsaWQgdHdlZW4gdmFsdWVcclxuICAgICAgICAgICAgcHJvcCA9IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIHByb3BBcnJheSA9IGlzLmFycihwcm9wKSA/IHByb3AgOiBbcHJvcF07XHJcbiAgICByZXR1cm4gcHJvcEFycmF5Lm1hcChmdW5jdGlvbih2LCBpKSB7XHJcbiAgICAgICAgdmFyIG9iaiA9IChpcy5vYmoodikgJiYgIWlzLnB0aCh2KSkgPyB2IDoge1xyXG4gICAgICAgICAgICB2YWx1ZTogdlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gRGVmYXVsdCBkZWxheSB2YWx1ZSBzaG91bGQgb25seSBiZSBhcHBsaWVkIHRvIHRoZSBmaXJzdCB0d2VlblxyXG4gICAgICAgIGlmIChpcy51bmQob2JqLmRlbGF5KSkge1xyXG4gICAgICAgICAgICBvYmouZGVsYXkgPSAhaSA/IHR3ZWVuU2V0dGluZ3MuZGVsYXkgOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEZWZhdWx0IGVuZERlbGF5IHZhbHVlIHNob3VsZCBvbmx5IGJlIGFwcGxpZWQgdG8gdGhlIGxhc3QgdHdlZW5cclxuICAgICAgICBpZiAoaXMudW5kKG9iai5lbmREZWxheSkpIHtcclxuICAgICAgICAgICAgb2JqLmVuZERlbGF5ID0gaSA9PT0gcHJvcEFycmF5Lmxlbmd0aCAtIDEgPyB0d2VlblNldHRpbmdzLmVuZERlbGF5IDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH0pLm1hcChmdW5jdGlvbihrKSB7XHJcbiAgICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0cyhrLCBzZXR0aW5ncyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGZsYXR0ZW5LZXlmcmFtZXMoa2V5ZnJhbWVzKSB7XHJcbiAgICB2YXIgcHJvcGVydHlOYW1lcyA9IGZpbHRlckFycmF5KGZsYXR0ZW5BcnJheShrZXlmcmFtZXMubWFwKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoa2V5KTtcclxuICAgICAgICB9KSksIGZ1bmN0aW9uKHApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzLmtleShwKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICBpZiAoYS5pbmRleE9mKGIpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgYS5wdXNoKGIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgIHZhciBwcm9wZXJ0aWVzID0ge307XHJcbiAgICB2YXIgbG9vcCA9IGZ1bmN0aW9uKGkpIHtcclxuICAgICAgICB2YXIgcHJvcE5hbWUgPSBwcm9wZXJ0eU5hbWVzW2ldO1xyXG4gICAgICAgIHByb3BlcnRpZXNbcHJvcE5hbWVdID0ga2V5ZnJhbWVzLm1hcChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgdmFyIG5ld0tleSA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIGtleSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzLmtleShwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwID09IHByb3BOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0tleS52YWx1ZSA9IGtleVtwXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0tleVtwXSA9IGtleVtwXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3S2V5O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnR5TmFtZXMubGVuZ3RoOyBpKyspIGxvb3AoaSk7XHJcbiAgICByZXR1cm4gcHJvcGVydGllcztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UHJvcGVydGllcyh0d2VlblNldHRpbmdzLCBwYXJhbXMpIHtcclxuICAgIHZhciBwcm9wZXJ0aWVzID0gW107XHJcbiAgICB2YXIga2V5ZnJhbWVzID0gcGFyYW1zLmtleWZyYW1lcztcclxuICAgIGlmIChrZXlmcmFtZXMpIHtcclxuICAgICAgICBwYXJhbXMgPSBtZXJnZU9iamVjdHMoZmxhdHRlbktleWZyYW1lcyhrZXlmcmFtZXMpLCBwYXJhbXMpO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgcCBpbiBwYXJhbXMpIHtcclxuICAgICAgICBpZiAoaXMua2V5KHApKSB7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBwLFxyXG4gICAgICAgICAgICAgICAgdHdlZW5zOiBub3JtYWxpemVQcm9wZXJ0eVR3ZWVucyhwYXJhbXNbcF0sIHR3ZWVuU2V0dGluZ3MpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xyXG59XHJcblxyXG4vLyBUd2VlbnNcclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVR3ZWVuVmFsdWVzKHR3ZWVuLCBhbmltYXRhYmxlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiB0d2Vlbikge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGdldEZ1bmN0aW9uVmFsdWUodHdlZW5bcF0sIGFuaW1hdGFibGUpO1xyXG4gICAgICAgIGlmIChpcy5hcnIodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUubWFwKGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRGdW5jdGlvblZhbHVlKHYsIGFuaW1hdGFibGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZVswXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0W3BdID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICB0LmR1cmF0aW9uID0gcGFyc2VGbG9hdCh0LmR1cmF0aW9uKTtcclxuICAgIHQuZGVsYXkgPSBwYXJzZUZsb2F0KHQuZGVsYXkpO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVR3ZWVucyhwcm9wLCBhbmltYXRhYmxlKSB7XHJcbiAgICB2YXIgcHJldmlvdXNUd2VlbjtcclxuICAgIHJldHVybiBwcm9wLnR3ZWVucy5tYXAoZnVuY3Rpb24odCkge1xyXG4gICAgICAgIHZhciB0d2VlbiA9IG5vcm1hbGl6ZVR3ZWVuVmFsdWVzKHQsIGFuaW1hdGFibGUpO1xyXG4gICAgICAgIHZhciB0d2VlblZhbHVlID0gdHdlZW4udmFsdWU7XHJcbiAgICAgICAgdmFyIHRvID0gaXMuYXJyKHR3ZWVuVmFsdWUpID8gdHdlZW5WYWx1ZVsxXSA6IHR3ZWVuVmFsdWU7XHJcbiAgICAgICAgdmFyIHRvVW5pdCA9IGdldFVuaXQodG8pO1xyXG4gICAgICAgIHZhciBvcmlnaW5hbFZhbHVlID0gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZShhbmltYXRhYmxlLnRhcmdldCwgcHJvcC5uYW1lLCB0b1VuaXQsIGFuaW1hdGFibGUpO1xyXG4gICAgICAgIHZhciBwcmV2aW91c1ZhbHVlID0gcHJldmlvdXNUd2VlbiA/IHByZXZpb3VzVHdlZW4udG8ub3JpZ2luYWwgOiBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIHZhciBmcm9tID0gaXMuYXJyKHR3ZWVuVmFsdWUpID8gdHdlZW5WYWx1ZVswXSA6IHByZXZpb3VzVmFsdWU7XHJcbiAgICAgICAgdmFyIGZyb21Vbml0ID0gZ2V0VW5pdChmcm9tKSB8fCBnZXRVbml0KG9yaWdpbmFsVmFsdWUpO1xyXG4gICAgICAgIHZhciB1bml0ID0gdG9Vbml0IHx8IGZyb21Vbml0O1xyXG4gICAgICAgIGlmIChpcy51bmQodG8pKSB7XHJcbiAgICAgICAgICAgIHRvID0gcHJldmlvdXNWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHdlZW4uZnJvbSA9IGRlY29tcG9zZVZhbHVlKGZyb20sIHVuaXQpO1xyXG4gICAgICAgIHR3ZWVuLnRvID0gZGVjb21wb3NlVmFsdWUoZ2V0UmVsYXRpdmVWYWx1ZSh0bywgZnJvbSksIHVuaXQpO1xyXG4gICAgICAgIHR3ZWVuLnN0YXJ0ID0gcHJldmlvdXNUd2VlbiA/IHByZXZpb3VzVHdlZW4uZW5kIDogMDtcclxuICAgICAgICB0d2Vlbi5lbmQgPSB0d2Vlbi5zdGFydCArIHR3ZWVuLmRlbGF5ICsgdHdlZW4uZHVyYXRpb24gKyB0d2Vlbi5lbmREZWxheTtcclxuICAgICAgICB0d2Vlbi5lYXNpbmcgPSBwYXJzZUVhc2luZ3ModHdlZW4uZWFzaW5nLCB0d2Vlbi5kdXJhdGlvbik7XHJcbiAgICAgICAgdHdlZW4uaXNQYXRoID0gaXMucHRoKHR3ZWVuVmFsdWUpO1xyXG4gICAgICAgIHR3ZWVuLmlzUGF0aFRhcmdldEluc2lkZVNWRyA9IHR3ZWVuLmlzUGF0aCAmJiBpcy5zdmcoYW5pbWF0YWJsZS50YXJnZXQpO1xyXG4gICAgICAgIHR3ZWVuLmlzQ29sb3IgPSBpcy5jb2wodHdlZW4uZnJvbS5vcmlnaW5hbCk7XHJcbiAgICAgICAgaWYgKHR3ZWVuLmlzQ29sb3IpIHtcclxuICAgICAgICAgICAgdHdlZW4ucm91bmQgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmV2aW91c1R3ZWVuID0gdHdlZW47XHJcbiAgICAgICAgcmV0dXJuIHR3ZWVuO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIFR3ZWVuIHByb2dyZXNzXHJcblxyXG52YXIgc2V0UHJvZ3Jlc3NWYWx1ZSA9IHtcclxuICAgIGNzczogZnVuY3Rpb24odCwgcCwgdikge1xyXG4gICAgICAgIHJldHVybiB0LnN0eWxlW3BdID0gdjtcclxuICAgIH0sXHJcbiAgICBhdHRyaWJ1dGU6IGZ1bmN0aW9uKHQsIHAsIHYpIHtcclxuICAgICAgICByZXR1cm4gdC5zZXRBdHRyaWJ1dGUocCwgdik7XHJcbiAgICB9LFxyXG4gICAgb2JqZWN0OiBmdW5jdGlvbih0LCBwLCB2KSB7XHJcbiAgICAgICAgcmV0dXJuIHRbcF0gPSB2O1xyXG4gICAgfSxcclxuICAgIHRyYW5zZm9ybTogZnVuY3Rpb24odCwgcCwgdiwgdHJhbnNmb3JtcywgbWFudWFsKSB7XHJcbiAgICAgICAgdHJhbnNmb3Jtcy5saXN0LnNldChwLCB2KTtcclxuICAgICAgICBpZiAocCA9PT0gdHJhbnNmb3Jtcy5sYXN0IHx8IG1hbnVhbCkge1xyXG4gICAgICAgICAgICB2YXIgc3RyID0gJyc7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybXMubGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBwcm9wKSB7XHJcbiAgICAgICAgICAgICAgICBzdHIgKz0gcHJvcCArIFwiKFwiICsgdmFsdWUgKyBcIikgXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0LnN0eWxlLnRyYW5zZm9ybSA9IHN0cjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBTZXQgVmFsdWUgaGVscGVyXHJcblxyXG5mdW5jdGlvbiBzZXRUYXJnZXRzVmFsdWUodGFyZ2V0cywgcHJvcGVydGllcykge1xyXG4gICAgdmFyIGFuaW1hdGFibGVzID0gZ2V0QW5pbWF0YWJsZXModGFyZ2V0cyk7XHJcbiAgICBhbmltYXRhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGFuaW1hdGFibGUpIHtcclxuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGdldEZ1bmN0aW9uVmFsdWUocHJvcGVydGllc1twcm9wZXJ0eV0sIGFuaW1hdGFibGUpO1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gYW5pbWF0YWJsZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZVVuaXQgPSBnZXRVbml0KHZhbHVlKTtcclxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsVmFsdWUgPSBnZXRPcmlnaW5hbFRhcmdldFZhbHVlKHRhcmdldCwgcHJvcGVydHksIHZhbHVlVW5pdCwgYW5pbWF0YWJsZSk7XHJcbiAgICAgICAgICAgIHZhciB1bml0ID0gdmFsdWVVbml0IHx8IGdldFVuaXQob3JpZ2luYWxWYWx1ZSk7XHJcbiAgICAgICAgICAgIHZhciB0byA9IGdldFJlbGF0aXZlVmFsdWUodmFsaWRhdGVWYWx1ZSh2YWx1ZSwgdW5pdCksIG9yaWdpbmFsVmFsdWUpO1xyXG4gICAgICAgICAgICB2YXIgYW5pbVR5cGUgPSBnZXRBbmltYXRpb25UeXBlKHRhcmdldCwgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICBzZXRQcm9ncmVzc1ZhbHVlW2FuaW1UeXBlXSh0YXJnZXQsIHByb3BlcnR5LCB0bywgYW5pbWF0YWJsZS50cmFuc2Zvcm1zLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gQW5pbWF0aW9uc1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQW5pbWF0aW9uKGFuaW1hdGFibGUsIHByb3ApIHtcclxuICAgIHZhciBhbmltVHlwZSA9IGdldEFuaW1hdGlvblR5cGUoYW5pbWF0YWJsZS50YXJnZXQsIHByb3AubmFtZSk7XHJcbiAgICBpZiAoYW5pbVR5cGUpIHtcclxuICAgICAgICB2YXIgdHdlZW5zID0gbm9ybWFsaXplVHdlZW5zKHByb3AsIGFuaW1hdGFibGUpO1xyXG4gICAgICAgIHZhciBsYXN0VHdlZW4gPSB0d2VlbnNbdHdlZW5zLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IGFuaW1UeXBlLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eTogcHJvcC5uYW1lLFxyXG4gICAgICAgICAgICBhbmltYXRhYmxlOiBhbmltYXRhYmxlLFxyXG4gICAgICAgICAgICB0d2VlbnM6IHR3ZWVucyxcclxuICAgICAgICAgICAgZHVyYXRpb246IGxhc3RUd2Vlbi5lbmQsXHJcbiAgICAgICAgICAgIGRlbGF5OiB0d2VlbnNbMF0uZGVsYXksXHJcbiAgICAgICAgICAgIGVuZERlbGF5OiBsYXN0VHdlZW4uZW5kRGVsYXlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFuaW1hdGlvbnMoYW5pbWF0YWJsZXMsIHByb3BlcnRpZXMpIHtcclxuICAgIHJldHVybiBmaWx0ZXJBcnJheShmbGF0dGVuQXJyYXkoYW5pbWF0YWJsZXMubWFwKGZ1bmN0aW9uKGFuaW1hdGFibGUpIHtcclxuICAgICAgICByZXR1cm4gcHJvcGVydGllcy5tYXAoZnVuY3Rpb24ocHJvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQW5pbWF0aW9uKGFuaW1hdGFibGUsIHByb3ApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSkpLCBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuICFpcy51bmQoYSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gQ3JlYXRlIEluc3RhbmNlXHJcblxyXG5mdW5jdGlvbiBnZXRJbnN0YW5jZVRpbWluZ3MoYW5pbWF0aW9ucywgdHdlZW5TZXR0aW5ncykge1xyXG4gICAgdmFyIGFuaW1MZW5ndGggPSBhbmltYXRpb25zLmxlbmd0aDtcclxuICAgIHZhciBnZXRUbE9mZnNldCA9IGZ1bmN0aW9uKGFuaW0pIHtcclxuICAgICAgICByZXR1cm4gYW5pbS50aW1lbGluZU9mZnNldCA/IGFuaW0udGltZWxpbmVPZmZzZXQgOiAwO1xyXG4gICAgfTtcclxuICAgIHZhciB0aW1pbmdzID0ge307XHJcbiAgICB0aW1pbmdzLmR1cmF0aW9uID0gYW5pbUxlbmd0aCA/IE1hdGgubWF4LmFwcGx5KE1hdGgsIGFuaW1hdGlvbnMubWFwKGZ1bmN0aW9uKGFuaW0pIHtcclxuICAgICAgICByZXR1cm4gZ2V0VGxPZmZzZXQoYW5pbSkgKyBhbmltLmR1cmF0aW9uO1xyXG4gICAgfSkpIDogdHdlZW5TZXR0aW5ncy5kdXJhdGlvbjtcclxuICAgIHRpbWluZ3MuZGVsYXkgPSBhbmltTGVuZ3RoID8gTWF0aC5taW4uYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24oYW5pbSkge1xyXG4gICAgICAgIHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZGVsYXk7XHJcbiAgICB9KSkgOiB0d2VlblNldHRpbmdzLmRlbGF5O1xyXG4gICAgdGltaW5ncy5lbmREZWxheSA9IGFuaW1MZW5ndGggPyB0aW1pbmdzLmR1cmF0aW9uIC0gTWF0aC5tYXguYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24oYW5pbSkge1xyXG4gICAgICAgIHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZHVyYXRpb24gLSBhbmltLmVuZERlbGF5O1xyXG4gICAgfSkpIDogdHdlZW5TZXR0aW5ncy5lbmREZWxheTtcclxuICAgIHJldHVybiB0aW1pbmdzO1xyXG59XHJcblxyXG52YXIgaW5zdGFuY2VJRCA9IDA7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOZXdJbnN0YW5jZShwYXJhbXMpIHtcclxuICAgIHZhciBpbnN0YW5jZVNldHRpbmdzID0gcmVwbGFjZU9iamVjdFByb3BzKGRlZmF1bHRJbnN0YW5jZVNldHRpbmdzLCBwYXJhbXMpO1xyXG4gICAgdmFyIHR3ZWVuU2V0dGluZ3MgPSByZXBsYWNlT2JqZWN0UHJvcHMoZGVmYXVsdFR3ZWVuU2V0dGluZ3MsIHBhcmFtcyk7XHJcbiAgICB2YXIgcHJvcGVydGllcyA9IGdldFByb3BlcnRpZXModHdlZW5TZXR0aW5ncywgcGFyYW1zKTtcclxuICAgIHZhciBhbmltYXRhYmxlcyA9IGdldEFuaW1hdGFibGVzKHBhcmFtcy50YXJnZXRzKTtcclxuICAgIHZhciBhbmltYXRpb25zID0gZ2V0QW5pbWF0aW9ucyhhbmltYXRhYmxlcywgcHJvcGVydGllcyk7XHJcbiAgICB2YXIgdGltaW5ncyA9IGdldEluc3RhbmNlVGltaW5ncyhhbmltYXRpb25zLCB0d2VlblNldHRpbmdzKTtcclxuICAgIHZhciBpZCA9IGluc3RhbmNlSUQ7XHJcbiAgICBpbnN0YW5jZUlEKys7XHJcbiAgICByZXR1cm4gbWVyZ2VPYmplY3RzKGluc3RhbmNlU2V0dGluZ3MsIHtcclxuICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIGFuaW1hdGFibGVzOiBhbmltYXRhYmxlcyxcclxuICAgICAgICBhbmltYXRpb25zOiBhbmltYXRpb25zLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aW1pbmdzLmR1cmF0aW9uLFxyXG4gICAgICAgIGRlbGF5OiB0aW1pbmdzLmRlbGF5LFxyXG4gICAgICAgIGVuZERlbGF5OiB0aW1pbmdzLmVuZERlbGF5XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gQ29yZVxyXG5cclxudmFyIGFjdGl2ZUluc3RhbmNlcyA9IFtdO1xyXG5cclxudmFyIGVuZ2luZSA9IChmdW5jdGlvbigpIHtcclxuICAgIHZhciByYWY7XHJcblxyXG4gICAgZnVuY3Rpb24gcGxheSgpIHtcclxuICAgICAgICBpZiAoIXJhZiAmJiAoIWlzRG9jdW1lbnRIaWRkZW4oKSB8fCAhYW5pbWUuc3VzcGVuZFdoZW5Eb2N1bWVudEhpZGRlbikgJiYgYWN0aXZlSW5zdGFuY2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdGVwKHQpIHtcclxuICAgICAgICAvLyBtZW1vIG9uIGFsZ29yaXRobSBpc3N1ZTpcclxuICAgICAgICAvLyBkYW5nZXJvdXMgaXRlcmF0aW9uIG92ZXIgbXV0YWJsZSBgYWN0aXZlSW5zdGFuY2VzYFxyXG4gICAgICAgIC8vICh0aGF0IGNvbGxlY3Rpb24gbWF5IGJlIHVwZGF0ZWQgZnJvbSB3aXRoaW4gY2FsbGJhY2tzIG9mIGB0aWNrYC1lZCBhbmltYXRpb24gaW5zdGFuY2VzKVxyXG4gICAgICAgIHZhciBhY3RpdmVJbnN0YW5jZXNMZW5ndGggPSBhY3RpdmVJbnN0YW5jZXMubGVuZ3RoO1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICB3aGlsZSAoaSA8IGFjdGl2ZUluc3RhbmNlc0xlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgYWN0aXZlSW5zdGFuY2UgPSBhY3RpdmVJbnN0YW5jZXNbaV07XHJcbiAgICAgICAgICAgIGlmICghYWN0aXZlSW5zdGFuY2UucGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbnN0YW5jZS50aWNrKHQpO1xyXG4gICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5zdGFuY2VzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUluc3RhbmNlc0xlbmd0aC0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJhZiA9IGkgPiAwID8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoKSB7XHJcbiAgICAgICAgaWYgKCFhbmltZS5zdXNwZW5kV2hlbkRvY3VtZW50SGlkZGVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0RvY3VtZW50SGlkZGVuKCkpIHtcclxuICAgICAgICAgICAgLy8gc3VzcGVuZCB0aWNrc1xyXG4gICAgICAgICAgICByYWYgPSBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xyXG4gICAgICAgIH0gZWxzZSB7IC8vIGlzIGJhY2sgdG8gYWN0aXZlIHRhYlxyXG4gICAgICAgICAgICAvLyBmaXJzdCBhZGp1c3QgYW5pbWF0aW9ucyB0byBjb25zaWRlciB0aGUgdGltZSB0aGF0IHRpY2tzIHdlcmUgc3VzcGVuZGVkXHJcbiAgICAgICAgICAgIGFjdGl2ZUluc3RhbmNlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2UuX29uRG9jdW1lbnRWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGVuZ2luZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwbGF5O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gaXNEb2N1bWVudEhpZGRlbigpIHtcclxuICAgIHJldHVybiAhIWRvY3VtZW50ICYmIGRvY3VtZW50LmhpZGRlbjtcclxufVxyXG5cclxuLy8gUHVibGljIEluc3RhbmNlXHJcblxyXG5mdW5jdGlvbiBhbmltZShwYXJhbXMpIHtcclxuICAgIGlmIChwYXJhbXMgPT09IHZvaWQgMCkgcGFyYW1zID0ge307XHJcblxyXG5cclxuICAgIHZhciBzdGFydFRpbWUgPSAwLFxyXG4gICAgICAgIGxhc3RUaW1lID0gMCxcclxuICAgICAgICBub3cgPSAwO1xyXG4gICAgdmFyIGNoaWxkcmVuLCBjaGlsZHJlbkxlbmd0aCA9IDA7XHJcbiAgICB2YXIgcmVzb2x2ZSA9IG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZVByb21pc2UoaW5zdGFuY2UpIHtcclxuICAgICAgICB2YXIgcHJvbWlzZSA9IHdpbmRvdy5Qcm9taXNlICYmIG5ldyBQcm9taXNlKGZ1bmN0aW9uKF9yZXNvbHZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlID0gX3Jlc29sdmU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW5zdGFuY2UuZmluaXNoZWQgPSBwcm9taXNlO1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpbnN0YW5jZSA9IGNyZWF0ZU5ld0luc3RhbmNlKHBhcmFtcyk7XHJcbiAgICB2YXIgcHJvbWlzZSA9IG1ha2VQcm9taXNlKGluc3RhbmNlKTtcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVJbnN0YW5jZURpcmVjdGlvbigpIHtcclxuICAgICAgICB2YXIgZGlyZWN0aW9uID0gaW5zdGFuY2UuZGlyZWN0aW9uO1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gIT09ICdhbHRlcm5hdGUnKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbiAhPT0gJ25vcm1hbCcgPyAnbm9ybWFsJyA6ICdyZXZlcnNlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5zdGFuY2UucmV2ZXJzZWQgPSAhaW5zdGFuY2UucmV2ZXJzZWQ7XHJcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2hpbGQucmV2ZXJzZWQgPSBpbnN0YW5jZS5yZXZlcnNlZDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGp1c3RUaW1lKHRpbWUpIHtcclxuICAgICAgICByZXR1cm4gaW5zdGFuY2UucmV2ZXJzZWQgPyBpbnN0YW5jZS5kdXJhdGlvbiAtIHRpbWUgOiB0aW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0VGltZSgpIHtcclxuICAgICAgICBzdGFydFRpbWUgPSAwO1xyXG4gICAgICAgIGxhc3RUaW1lID0gYWRqdXN0VGltZShpbnN0YW5jZS5jdXJyZW50VGltZSkgKiAoMSAvIGFuaW1lLnNwZWVkKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWVrQ2hpbGQodGltZSwgY2hpbGQpIHtcclxuICAgICAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQuc2Vlayh0aW1lIC0gY2hpbGQudGltZWxpbmVPZmZzZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzeW5jSW5zdGFuY2VDaGlsZHJlbih0aW1lKSB7XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZS5yZXZlcnNlUGxheWJhY2spIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzZWVrQ2hpbGQodGltZSwgY2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSQxID0gY2hpbGRyZW5MZW5ndGg7IGkkMS0tOykge1xyXG4gICAgICAgICAgICAgICAgc2Vla0NoaWxkKHRpbWUsIGNoaWxkcmVuW2kkMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNUaW1lKSB7XHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgIHZhciBhbmltYXRpb25zID0gaW5zdGFuY2UuYW5pbWF0aW9ucztcclxuICAgICAgICB2YXIgYW5pbWF0aW9uc0xlbmd0aCA9IGFuaW1hdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChpIDwgYW5pbWF0aW9uc0xlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgYW5pbSA9IGFuaW1hdGlvbnNbaV07XHJcbiAgICAgICAgICAgIHZhciBhbmltYXRhYmxlID0gYW5pbS5hbmltYXRhYmxlO1xyXG4gICAgICAgICAgICB2YXIgdHdlZW5zID0gYW5pbS50d2VlbnM7XHJcbiAgICAgICAgICAgIHZhciB0d2Vlbkxlbmd0aCA9IHR3ZWVucy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB2YXIgdHdlZW4gPSB0d2VlbnNbdHdlZW5MZW5ndGhdO1xyXG4gICAgICAgICAgICAvLyBPbmx5IGNoZWNrIGZvciBrZXlmcmFtZXMgaWYgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSB0d2VlblxyXG4gICAgICAgICAgICBpZiAodHdlZW5MZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHR3ZWVuID0gZmlsdGVyQXJyYXkodHdlZW5zLCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChpbnNUaW1lIDwgdC5lbmQpO1xyXG4gICAgICAgICAgICAgICAgfSlbMF0gfHwgdHdlZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGVsYXBzZWQgPSBtaW5NYXgoaW5zVGltZSAtIHR3ZWVuLnN0YXJ0IC0gdHdlZW4uZGVsYXksIDAsIHR3ZWVuLmR1cmF0aW9uKSAvIHR3ZWVuLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICB2YXIgZWFzZWQgPSBpc05hTihlbGFwc2VkKSA/IDEgOiB0d2Vlbi5lYXNpbmcoZWxhcHNlZCk7XHJcbiAgICAgICAgICAgIHZhciBzdHJpbmdzID0gdHdlZW4udG8uc3RyaW5ncztcclxuICAgICAgICAgICAgdmFyIHJvdW5kID0gdHdlZW4ucm91bmQ7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJzID0gW107XHJcbiAgICAgICAgICAgIHZhciB0b051bWJlcnNMZW5ndGggPSB0d2Vlbi50by5udW1iZXJzLmxlbmd0aDtcclxuICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gKHZvaWQgMCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdG9OdW1iZXJzTGVuZ3RoOyBuKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9ICh2b2lkIDApO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvTnVtYmVyID0gdHdlZW4udG8ubnVtYmVyc1tuXTtcclxuICAgICAgICAgICAgICAgIHZhciBmcm9tTnVtYmVyID0gdHdlZW4uZnJvbS5udW1iZXJzW25dIHx8IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXR3ZWVuLmlzUGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZnJvbU51bWJlciArIChlYXNlZCAqICh0b051bWJlciAtIGZyb21OdW1iZXIpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBnZXRQYXRoUHJvZ3Jlc3ModHdlZW4udmFsdWUsIGVhc2VkICogdG9OdW1iZXIsIHR3ZWVuLmlzUGF0aFRhcmdldEluc2lkZVNWRyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0d2Vlbi5pc0NvbG9yICYmIG4gPiAyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgKiByb3VuZCkgLyByb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBudW1iZXJzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE1hbnVhbCBBcnJheS5yZWR1Y2UgZm9yIGJldHRlciBwZXJmb3JtYW5jZXNcclxuICAgICAgICAgICAgdmFyIHN0cmluZ3NMZW5ndGggPSBzdHJpbmdzLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKCFzdHJpbmdzTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IG51bWJlcnNbMF07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IHN0cmluZ3NbMF07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IHN0cmluZ3NMZW5ndGg7IHMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gc3RyaW5nc1tzXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYiA9IHN0cmluZ3NbcyArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuJDEgPSBudW1iZXJzW3NdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4obiQxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzICs9IG4kMSArICcgJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzICs9IG4kMSArIGI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0UHJvZ3Jlc3NWYWx1ZVthbmltLnR5cGVdKGFuaW1hdGFibGUudGFyZ2V0LCBhbmltLnByb3BlcnR5LCBwcm9ncmVzcywgYW5pbWF0YWJsZS50cmFuc2Zvcm1zKTtcclxuICAgICAgICAgICAgYW5pbS5jdXJyZW50VmFsdWUgPSBwcm9ncmVzcztcclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDYWxsYmFjayhjYikge1xyXG4gICAgICAgIGlmIChpbnN0YW5jZVtjYl0gJiYgIWluc3RhbmNlLnBhc3NUaHJvdWdoKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlW2NiXShpbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvdW50SXRlcmF0aW9uKCkge1xyXG4gICAgICAgIGlmIChpbnN0YW5jZS5yZW1haW5pbmcgJiYgaW5zdGFuY2UucmVtYWluaW5nICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLnJlbWFpbmluZy0tO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRJbnN0YW5jZVByb2dyZXNzKGVuZ2luZVRpbWUpIHtcclxuICAgICAgICB2YXIgaW5zRHVyYXRpb24gPSBpbnN0YW5jZS5kdXJhdGlvbjtcclxuICAgICAgICB2YXIgaW5zRGVsYXkgPSBpbnN0YW5jZS5kZWxheTtcclxuICAgICAgICB2YXIgaW5zRW5kRGVsYXkgPSBpbnNEdXJhdGlvbiAtIGluc3RhbmNlLmVuZERlbGF5O1xyXG4gICAgICAgIHZhciBpbnNUaW1lID0gYWRqdXN0VGltZShlbmdpbmVUaW1lKTtcclxuICAgICAgICBpbnN0YW5jZS5wcm9ncmVzcyA9IG1pbk1heCgoaW5zVGltZSAvIGluc0R1cmF0aW9uKSAqIDEwMCwgMCwgMTAwKTtcclxuICAgICAgICBpbnN0YW5jZS5yZXZlcnNlUGxheWJhY2sgPSBpbnNUaW1lIDwgaW5zdGFuY2UuY3VycmVudFRpbWU7XHJcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIHN5bmNJbnN0YW5jZUNoaWxkcmVuKGluc1RpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWluc3RhbmNlLmJlZ2FuICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lID4gMCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5iZWdhbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHNldENhbGxiYWNrKCdiZWdpbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWluc3RhbmNlLmxvb3BCZWdhbiAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSA+IDApIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UubG9vcEJlZ2FuID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2V0Q2FsbGJhY2soJ2xvb3BCZWdpbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5zVGltZSA8PSBpbnNEZWxheSAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSAhPT0gMCkge1xyXG4gICAgICAgICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoaW5zVGltZSA+PSBpbnNFbmREZWxheSAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSAhPT0gaW5zRHVyYXRpb24pIHx8ICFpbnNEdXJhdGlvbikge1xyXG4gICAgICAgICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zRHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5zVGltZSA+IGluc0RlbGF5ICYmIGluc1RpbWUgPCBpbnNFbmREZWxheSkge1xyXG4gICAgICAgICAgICBpZiAoIWluc3RhbmNlLmNoYW5nZUJlZ2FuKSB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5jaGFuZ2VDb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2VCZWdpbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc1RpbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5jaGFuZ2VCZWdhbikge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuY2hhbmdlQ29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzZXRDYWxsYmFjaygnY2hhbmdlQ29tcGxldGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbnN0YW5jZS5jdXJyZW50VGltZSA9IG1pbk1heChpbnNUaW1lLCAwLCBpbnNEdXJhdGlvbik7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLmJlZ2FuKSB7XHJcbiAgICAgICAgICAgIHNldENhbGxiYWNrKCd1cGRhdGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVuZ2luZVRpbWUgPj0gaW5zRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgbGFzdFRpbWUgPSAwO1xyXG4gICAgICAgICAgICBjb3VudEl0ZXJhdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoIWluc3RhbmNlLnJlbWFpbmluZykge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UucGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmICghaW5zdGFuY2UuY29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuY29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYWxsYmFjaygnbG9vcENvbXBsZXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2FsbGJhY2soJ2NvbXBsZXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnN0YW5jZS5wYXNzVGhyb3VnaCAmJiAnUHJvbWlzZScgaW4gd2luZG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IG1ha2VQcm9taXNlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWUgPSBub3c7XHJcbiAgICAgICAgICAgICAgICBzZXRDYWxsYmFjaygnbG9vcENvbXBsZXRlJyk7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5sb29wQmVnYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZS5kaXJlY3Rpb24gPT09ICdhbHRlcm5hdGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnN0YW5jZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBpbnN0YW5jZS5kaXJlY3Rpb247XHJcbiAgICAgICAgaW5zdGFuY2UucGFzc1Rocm91Z2ggPSBmYWxzZTtcclxuICAgICAgICBpbnN0YW5jZS5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgaW5zdGFuY2UucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIGluc3RhbmNlLnBhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgaW5zdGFuY2UuYmVnYW4gPSBmYWxzZTtcclxuICAgICAgICBpbnN0YW5jZS5sb29wQmVnYW4gPSBmYWxzZTtcclxuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IGZhbHNlO1xyXG4gICAgICAgIGluc3RhbmNlLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGluc3RhbmNlLnJldmVyc2VQbGF5YmFjayA9IGZhbHNlO1xyXG4gICAgICAgIGluc3RhbmNlLnJldmVyc2VkID0gZGlyZWN0aW9uID09PSAncmV2ZXJzZSc7XHJcbiAgICAgICAgaW5zdGFuY2UucmVtYWluaW5nID0gaW5zdGFuY2UubG9vcDtcclxuICAgICAgICBjaGlsZHJlbiA9IGluc3RhbmNlLmNoaWxkcmVuO1xyXG4gICAgICAgIGNoaWxkcmVuTGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBjaGlsZHJlbkxlbmd0aDsgaS0tOykge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5jaGlsZHJlbltpXS5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5zdGFuY2UucmV2ZXJzZWQgJiYgaW5zdGFuY2UubG9vcCAhPT0gdHJ1ZSB8fCAoZGlyZWN0aW9uID09PSAnYWx0ZXJuYXRlJyAmJiBpbnN0YW5jZS5sb29wID09PSAxKSkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5yZW1haW5pbmcrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc3RhbmNlLnJldmVyc2VkID8gaW5zdGFuY2UuZHVyYXRpb24gOiAwKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gaW50ZXJuYWwgbWV0aG9kIChmb3IgZW5naW5lKSB0byBhZGp1c3QgYW5pbWF0aW9uIHRpbWluZ3MgYmVmb3JlIHJlc3RvcmluZyBlbmdpbmUgdGlja3MgKHJBRilcclxuICAgIGluc3RhbmNlLl9vbkRvY3VtZW50VmlzaWJpbGl0eSA9IHJlc2V0VGltZTtcclxuXHJcbiAgICAvLyBTZXQgVmFsdWUgaGVscGVyXHJcblxyXG4gICAgaW5zdGFuY2Uuc2V0ID0gZnVuY3Rpb24odGFyZ2V0cywgcHJvcGVydGllcykge1xyXG4gICAgICAgIHNldFRhcmdldHNWYWx1ZSh0YXJnZXRzLCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9O1xyXG5cclxuICAgIGluc3RhbmNlLnRpY2sgPSBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgbm93ID0gdDtcclxuICAgICAgICBpZiAoIXN0YXJ0VGltZSkge1xyXG4gICAgICAgICAgICBzdGFydFRpbWUgPSBub3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEluc3RhbmNlUHJvZ3Jlc3MoKG5vdyArIChsYXN0VGltZSAtIHN0YXJ0VGltZSkpICogYW5pbWUuc3BlZWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnN0YW5jZS5zZWVrID0gZnVuY3Rpb24odGltZSkge1xyXG4gICAgICAgIHNldEluc3RhbmNlUHJvZ3Jlc3MoYWRqdXN0VGltZSh0aW1lKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGluc3RhbmNlLnBhdXNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaW5zdGFuY2UucGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICByZXNldFRpbWUoKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zdGFuY2UucGxheSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghaW5zdGFuY2UucGF1c2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLmNvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnN0YW5jZS5wYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICBhY3RpdmVJbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XHJcbiAgICAgICAgcmVzZXRUaW1lKCk7XHJcbiAgICAgICAgZW5naW5lKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGluc3RhbmNlLnJldmVyc2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0b2dnbGVJbnN0YW5jZURpcmVjdGlvbigpO1xyXG4gICAgICAgIGluc3RhbmNlLmNvbXBsZXRlZCA9IGluc3RhbmNlLnJldmVyc2VkID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIHJlc2V0VGltZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnN0YW5jZS5yZXN0YXJ0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaW5zdGFuY2UucmVzZXQoKTtcclxuICAgICAgICBpbnN0YW5jZS5wbGF5KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGluc3RhbmNlLnJlbW92ZSA9IGZ1bmN0aW9uKHRhcmdldHMpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0c0FycmF5ID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xyXG4gICAgICAgIHJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UodGFyZ2V0c0FycmF5LCBpbnN0YW5jZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGluc3RhbmNlLnJlc2V0KCk7XHJcblxyXG4gICAgaWYgKGluc3RhbmNlLmF1dG9wbGF5KSB7XHJcbiAgICAgICAgaW5zdGFuY2UucGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbnN0YW5jZTtcclxuXHJcbn1cclxuXHJcbi8vIFJlbW92ZSB0YXJnZXRzIGZyb20gYW5pbWF0aW9uXHJcblxyXG5mdW5jdGlvbiByZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnModGFyZ2V0c0FycmF5LCBhbmltYXRpb25zKSB7XHJcbiAgICBmb3IgKHZhciBhID0gYW5pbWF0aW9ucy5sZW5ndGg7IGEtLTspIHtcclxuICAgICAgICBpZiAoYXJyYXlDb250YWlucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnNbYV0uYW5pbWF0YWJsZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbnMuc3BsaWNlKGEsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0c0Zyb21JbnN0YW5jZSh0YXJnZXRzQXJyYXksIGluc3RhbmNlKSB7XHJcbiAgICB2YXIgYW5pbWF0aW9ucyA9IGluc3RhbmNlLmFuaW1hdGlvbnM7XHJcbiAgICB2YXIgY2hpbGRyZW4gPSBpbnN0YW5jZS5jaGlsZHJlbjtcclxuICAgIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnMpO1xyXG4gICAgZm9yICh2YXIgYyA9IGNoaWxkcmVuLmxlbmd0aDsgYy0tOykge1xyXG4gICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2NdO1xyXG4gICAgICAgIHZhciBjaGlsZEFuaW1hdGlvbnMgPSBjaGlsZC5hbmltYXRpb25zO1xyXG4gICAgICAgIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGNoaWxkQW5pbWF0aW9ucyk7XHJcbiAgICAgICAgaWYgKCFjaGlsZEFuaW1hdGlvbnMubGVuZ3RoICYmICFjaGlsZC5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2hpbGRyZW4uc3BsaWNlKGMsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghYW5pbWF0aW9ucy5sZW5ndGggJiYgIWNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIGluc3RhbmNlLnBhdXNlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRhcmdldHNGcm9tQWN0aXZlSW5zdGFuY2VzKHRhcmdldHMpIHtcclxuICAgIHZhciB0YXJnZXRzQXJyYXkgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XHJcbiAgICBmb3IgKHZhciBpID0gYWN0aXZlSW5zdGFuY2VzLmxlbmd0aDsgaS0tOykge1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlc1tpXTtcclxuICAgICAgICByZW1vdmVUYXJnZXRzRnJvbUluc3RhbmNlKHRhcmdldHNBcnJheSwgaW5zdGFuY2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBTdGFnZ2VyIGhlbHBlcnNcclxuXHJcbmZ1bmN0aW9uIHN0YWdnZXIodmFsLCBwYXJhbXMpIHtcclxuICAgIGlmIChwYXJhbXMgPT09IHZvaWQgMCkgcGFyYW1zID0ge307XHJcblxyXG4gICAgdmFyIGRpcmVjdGlvbiA9IHBhcmFtcy5kaXJlY3Rpb24gfHwgJ25vcm1hbCc7XHJcbiAgICB2YXIgZWFzaW5nID0gcGFyYW1zLmVhc2luZyA/IHBhcnNlRWFzaW5ncyhwYXJhbXMuZWFzaW5nKSA6IG51bGw7XHJcbiAgICB2YXIgZ3JpZCA9IHBhcmFtcy5ncmlkO1xyXG4gICAgdmFyIGF4aXMgPSBwYXJhbXMuYXhpcztcclxuICAgIHZhciBmcm9tSW5kZXggPSBwYXJhbXMuZnJvbSB8fCAwO1xyXG4gICAgdmFyIGZyb21GaXJzdCA9IGZyb21JbmRleCA9PT0gJ2ZpcnN0JztcclxuICAgIHZhciBmcm9tQ2VudGVyID0gZnJvbUluZGV4ID09PSAnY2VudGVyJztcclxuICAgIHZhciBmcm9tTGFzdCA9IGZyb21JbmRleCA9PT0gJ2xhc3QnO1xyXG4gICAgdmFyIGlzUmFuZ2UgPSBpcy5hcnIodmFsKTtcclxuICAgIHZhciB2YWwxID0gaXNSYW5nZSA/IHBhcnNlRmxvYXQodmFsWzBdKSA6IHBhcnNlRmxvYXQodmFsKTtcclxuICAgIHZhciB2YWwyID0gaXNSYW5nZSA/IHBhcnNlRmxvYXQodmFsWzFdKSA6IDA7XHJcbiAgICB2YXIgdW5pdCA9IGdldFVuaXQoaXNSYW5nZSA/IHZhbFsxXSA6IHZhbCkgfHwgMDtcclxuICAgIHZhciBzdGFydCA9IHBhcmFtcy5zdGFydCB8fCAwICsgKGlzUmFuZ2UgPyB2YWwxIDogMCk7XHJcbiAgICB2YXIgdmFsdWVzID0gW107XHJcbiAgICB2YXIgbWF4VmFsdWUgPSAwO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsLCBpLCB0KSB7XHJcbiAgICAgICAgaWYgKGZyb21GaXJzdCkge1xyXG4gICAgICAgICAgICBmcm9tSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZnJvbUNlbnRlcikge1xyXG4gICAgICAgICAgICBmcm9tSW5kZXggPSAodCAtIDEpIC8gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZyb21MYXN0KSB7XHJcbiAgICAgICAgICAgIGZyb21JbmRleCA9IHQgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHQ7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghZ3JpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKE1hdGguYWJzKGZyb21JbmRleCAtIGluZGV4KSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmcm9tWCA9ICFmcm9tQ2VudGVyID8gZnJvbUluZGV4ICUgZ3JpZFswXSA6IChncmlkWzBdIC0gMSkgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmcm9tWSA9ICFmcm9tQ2VudGVyID8gTWF0aC5mbG9vcihmcm9tSW5kZXggLyBncmlkWzBdKSA6IChncmlkWzFdIC0gMSkgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b1ggPSBpbmRleCAlIGdyaWRbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvWSA9IE1hdGguZmxvb3IoaW5kZXggLyBncmlkWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VYID0gZnJvbVggLSB0b1g7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlWSA9IGZyb21ZIC0gdG9ZO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IE1hdGguc3FydChkaXN0YW5jZVggKiBkaXN0YW5jZVggKyBkaXN0YW5jZVkgKiBkaXN0YW5jZVkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChheGlzID09PSAneCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAtZGlzdGFuY2VYO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3knKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gLWRpc3RhbmNlWTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgPSBNYXRoLm1heC5hcHBseShNYXRoLCB2YWx1ZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlYXNpbmcpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24odmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVhc2luZyh2YWwgLyBtYXhWYWx1ZSkgKiBtYXhWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdyZXZlcnNlJykge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbih2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXhpcyA/ICh2YWwgPCAwKSA/IHZhbCAqIC0xIDogLXZhbCA6IE1hdGguYWJzKG1heFZhbHVlIC0gdmFsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzcGFjaW5nID0gaXNSYW5nZSA/ICh2YWwyIC0gdmFsMSkgLyBtYXhWYWx1ZSA6IHZhbDE7XHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0ICsgKHNwYWNpbmcgKiAoTWF0aC5yb3VuZCh2YWx1ZXNbaV0gKiAxMDApIC8gMTAwKSkgKyB1bml0O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBUaW1lbGluZVxyXG5cclxuZnVuY3Rpb24gdGltZWxpbmUocGFyYW1zKSB7XHJcbiAgICBpZiAocGFyYW1zID09PSB2b2lkIDApIHBhcmFtcyA9IHt9O1xyXG5cclxuICAgIHZhciB0bCA9IGFuaW1lKHBhcmFtcyk7XHJcbiAgICB0bC5kdXJhdGlvbiA9IDA7XHJcbiAgICB0bC5hZGQgPSBmdW5jdGlvbihpbnN0YW5jZVBhcmFtcywgdGltZWxpbmVPZmZzZXQpIHtcclxuICAgICAgICB2YXIgdGxJbmRleCA9IGFjdGl2ZUluc3RhbmNlcy5pbmRleE9mKHRsKTtcclxuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0bC5jaGlsZHJlbjtcclxuICAgICAgICBpZiAodGxJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZUluc3RhbmNlcy5zcGxpY2UodGxJbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwYXNzVGhyb3VnaChpbnMpIHtcclxuICAgICAgICAgICAgaW5zLnBhc3NUaHJvdWdoID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBwYXNzVGhyb3VnaChjaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpbnNQYXJhbXMgPSBtZXJnZU9iamVjdHMoaW5zdGFuY2VQYXJhbXMsIHJlcGxhY2VPYmplY3RQcm9wcyhkZWZhdWx0VHdlZW5TZXR0aW5ncywgcGFyYW1zKSk7XHJcbiAgICAgICAgaW5zUGFyYW1zLnRhcmdldHMgPSBpbnNQYXJhbXMudGFyZ2V0cyB8fCBwYXJhbXMudGFyZ2V0cztcclxuICAgICAgICB2YXIgdGxEdXJhdGlvbiA9IHRsLmR1cmF0aW9uO1xyXG4gICAgICAgIGluc1BhcmFtcy5hdXRvcGxheSA9IGZhbHNlO1xyXG4gICAgICAgIGluc1BhcmFtcy5kaXJlY3Rpb24gPSB0bC5kaXJlY3Rpb247XHJcbiAgICAgICAgaW5zUGFyYW1zLnRpbWVsaW5lT2Zmc2V0ID0gaXMudW5kKHRpbWVsaW5lT2Zmc2V0KSA/IHRsRHVyYXRpb24gOiBnZXRSZWxhdGl2ZVZhbHVlKHRpbWVsaW5lT2Zmc2V0LCB0bER1cmF0aW9uKTtcclxuICAgICAgICBwYXNzVGhyb3VnaCh0bCk7XHJcbiAgICAgICAgdGwuc2VlayhpbnNQYXJhbXMudGltZWxpbmVPZmZzZXQpO1xyXG4gICAgICAgIHZhciBpbnMgPSBhbmltZShpbnNQYXJhbXMpO1xyXG4gICAgICAgIHBhc3NUaHJvdWdoKGlucyk7XHJcbiAgICAgICAgY2hpbGRyZW4ucHVzaChpbnMpO1xyXG4gICAgICAgIHZhciB0aW1pbmdzID0gZ2V0SW5zdGFuY2VUaW1pbmdzKGNoaWxkcmVuLCBwYXJhbXMpO1xyXG4gICAgICAgIHRsLmRlbGF5ID0gdGltaW5ncy5kZWxheTtcclxuICAgICAgICB0bC5lbmREZWxheSA9IHRpbWluZ3MuZW5kRGVsYXk7XHJcbiAgICAgICAgdGwuZHVyYXRpb24gPSB0aW1pbmdzLmR1cmF0aW9uO1xyXG4gICAgICAgIHRsLnNlZWsoMCk7XHJcbiAgICAgICAgdGwucmVzZXQoKTtcclxuICAgICAgICBpZiAodGwuYXV0b3BsYXkpIHtcclxuICAgICAgICAgICAgdGwucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGw7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRsO1xyXG59XHJcblxyXG5hbmltZS52ZXJzaW9uID0gJzMuMi4xJztcclxuYW5pbWUuc3BlZWQgPSAxO1xyXG4vLyBUT0RPOiNyZXZpZXc6IG5hbWluZywgZG9jdW1lbnRhdGlvblxyXG5hbmltZS5zdXNwZW5kV2hlbkRvY3VtZW50SGlkZGVuID0gdHJ1ZTtcclxuYW5pbWUucnVubmluZyA9IGFjdGl2ZUluc3RhbmNlcztcclxuYW5pbWUucmVtb3ZlID0gcmVtb3ZlVGFyZ2V0c0Zyb21BY3RpdmVJbnN0YW5jZXM7XHJcbmFuaW1lLmdldCA9IGdldE9yaWdpbmFsVGFyZ2V0VmFsdWU7XHJcbmFuaW1lLnNldCA9IHNldFRhcmdldHNWYWx1ZTtcclxuYW5pbWUuY29udmVydFB4ID0gY29udmVydFB4VG9Vbml0O1xyXG5hbmltZS5wYXRoID0gZ2V0UGF0aDtcclxuYW5pbWUuc2V0RGFzaG9mZnNldCA9IHNldERhc2hvZmZzZXQ7XHJcbmFuaW1lLnN0YWdnZXIgPSBzdGFnZ2VyO1xyXG5hbmltZS50aW1lbGluZSA9IHRpbWVsaW5lO1xyXG5hbmltZS5lYXNpbmcgPSBwYXJzZUVhc2luZ3M7XHJcbmFuaW1lLnBlbm5lciA9IHBlbm5lcjtcclxuYW5pbWUucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhbmltZTtcclxuIiwiLyohXHJcbldheXBvaW50cyAtIDQuMC4xXHJcbkNvcHlyaWdodCDCqSAyMDExLTIwMTYgQ2FsZWIgVHJvdWdodG9uXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuaHR0cHM6Ly9naXRodWIuY29tL2ltYWtld2VidGhpbmdzL3dheXBvaW50cy9ibG9iL21hc3Rlci9saWNlbnNlcy50eHRcclxuKi9cclxuKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnXHJcblxyXG4gICAgdmFyIGtleUNvdW50ZXIgPSAwXHJcbiAgICB2YXIgYWxsV2F5cG9pbnRzID0ge31cclxuXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvd2F5cG9pbnQgKi9cclxuICAgIGZ1bmN0aW9uIFdheXBvaW50KG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoIW9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBvcHRpb25zIHBhc3NlZCB0byBXYXlwb2ludCBjb25zdHJ1Y3RvcicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb3B0aW9ucy5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZWxlbWVudCBvcHRpb24gcGFzc2VkIHRvIFdheXBvaW50IGNvbnN0cnVjdG9yJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvcHRpb25zLmhhbmRsZXIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBoYW5kbGVyIG9wdGlvbiBwYXNzZWQgdG8gV2F5cG9pbnQgY29uc3RydWN0b3InKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5rZXkgPSAnd2F5cG9pbnQtJyArIGtleUNvdW50ZXJcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBXYXlwb2ludC5BZGFwdGVyLmV4dGVuZCh7fSwgV2F5cG9pbnQuZGVmYXVsdHMsIG9wdGlvbnMpXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5vcHRpb25zLmVsZW1lbnRcclxuICAgICAgICB0aGlzLmFkYXB0ZXIgPSBuZXcgV2F5cG9pbnQuQWRhcHRlcih0aGlzLmVsZW1lbnQpXHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IG9wdGlvbnMuaGFuZGxlclxyXG4gICAgICAgIHRoaXMuYXhpcyA9IHRoaXMub3B0aW9ucy5ob3Jpem9udGFsID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJ1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRoaXMub3B0aW9ucy5lbmFibGVkXHJcbiAgICAgICAgdGhpcy50cmlnZ2VyUG9pbnQgPSBudWxsXHJcbiAgICAgICAgdGhpcy5ncm91cCA9IFdheXBvaW50Lkdyb3VwLmZpbmRPckNyZWF0ZSh7XHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMub3B0aW9ucy5ncm91cCxcclxuICAgICAgICAgICAgYXhpczogdGhpcy5heGlzXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBXYXlwb2ludC5Db250ZXh0LmZpbmRPckNyZWF0ZUJ5RWxlbWVudCh0aGlzLm9wdGlvbnMuY29udGV4dClcclxuXHJcbiAgICAgICAgaWYgKFdheXBvaW50Lm9mZnNldEFsaWFzZXNbdGhpcy5vcHRpb25zLm9mZnNldF0pIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9mZnNldCA9IFdheXBvaW50Lm9mZnNldEFsaWFzZXNbdGhpcy5vcHRpb25zLm9mZnNldF1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ncm91cC5hZGQodGhpcylcclxuICAgICAgICB0aGlzLmNvbnRleHQuYWRkKHRoaXMpXHJcbiAgICAgICAgYWxsV2F5cG9pbnRzW3RoaXMua2V5XSA9IHRoaXNcclxuICAgICAgICBrZXlDb3VudGVyICs9IDFcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBXYXlwb2ludC5wcm90b3R5cGUucXVldWVUcmlnZ2VyID0gZnVuY3Rpb24oZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cC5xdWV1ZVRyaWdnZXIodGhpcywgZGlyZWN0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIFdheXBvaW50LnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3MpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2Rlc3Ryb3kgKi9cclxuICAgIFdheXBvaW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnJlbW92ZSh0aGlzKVxyXG4gICAgICAgIHRoaXMuZ3JvdXAucmVtb3ZlKHRoaXMpXHJcbiAgICAgICAgZGVsZXRlIGFsbFdheXBvaW50c1t0aGlzLmtleV1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9kaXNhYmxlICovXHJcbiAgICBXYXlwb2ludC5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9lbmFibGUgKi9cclxuICAgIFdheXBvaW50LnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQucmVmcmVzaCgpXHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvbmV4dCAqL1xyXG4gICAgV2F5cG9pbnQucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ncm91cC5uZXh0KHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvcHJldmlvdXMgKi9cclxuICAgIFdheXBvaW50LnByb3RvdHlwZS5wcmV2aW91cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdyb3VwLnByZXZpb3VzKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgV2F5cG9pbnQuaW52b2tlQWxsID0gZnVuY3Rpb24obWV0aG9kKSB7XHJcbiAgICAgICAgdmFyIGFsbFdheXBvaW50c0FycmF5ID0gW11cclxuICAgICAgICBmb3IgKHZhciB3YXlwb2ludEtleSBpbiBhbGxXYXlwb2ludHMpIHtcclxuICAgICAgICAgICAgYWxsV2F5cG9pbnRzQXJyYXkucHVzaChhbGxXYXlwb2ludHNbd2F5cG9pbnRLZXldKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgZW5kID0gYWxsV2F5cG9pbnRzQXJyYXkubGVuZ3RoOyBpIDwgZW5kOyBpKyspIHtcclxuICAgICAgICAgICAgYWxsV2F5cG9pbnRzQXJyYXlbaV1bbWV0aG9kXSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2Rlc3Ryb3ktYWxsICovXHJcbiAgICBXYXlwb2ludC5kZXN0cm95QWxsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgV2F5cG9pbnQuaW52b2tlQWxsKCdkZXN0cm95JylcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9kaXNhYmxlLWFsbCAqL1xyXG4gICAgV2F5cG9pbnQuZGlzYWJsZUFsbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFdheXBvaW50Lmludm9rZUFsbCgnZGlzYWJsZScpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvZW5hYmxlLWFsbCAqL1xyXG4gICAgV2F5cG9pbnQuZW5hYmxlQWxsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgV2F5cG9pbnQuQ29udGV4dC5yZWZyZXNoQWxsKClcclxuICAgICAgICBmb3IgKHZhciB3YXlwb2ludEtleSBpbiBhbGxXYXlwb2ludHMpIHtcclxuICAgICAgICAgICAgYWxsV2F5cG9pbnRzW3dheXBvaW50S2V5XS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL3JlZnJlc2gtYWxsICovXHJcbiAgICBXYXlwb2ludC5yZWZyZXNoQWxsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgV2F5cG9pbnQuQ29udGV4dC5yZWZyZXNoQWxsKClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS92aWV3cG9ydC1oZWlnaHQgKi9cclxuICAgIFdheXBvaW50LnZpZXdwb3J0SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvdmlld3BvcnQtd2lkdGggKi9cclxuICAgIFdheXBvaW50LnZpZXdwb3J0V2lkdGggPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXHJcbiAgICB9XHJcblxyXG4gICAgV2F5cG9pbnQuYWRhcHRlcnMgPSBbXVxyXG5cclxuICAgIFdheXBvaW50LmRlZmF1bHRzID0ge1xyXG4gICAgICAgIGNvbnRleHQ6IHdpbmRvdyxcclxuICAgICAgICBjb250aW51b3VzOiB0cnVlLFxyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgZ3JvdXA6ICdkZWZhdWx0JyxcclxuICAgICAgICBob3Jpem9udGFsOiBmYWxzZSxcclxuICAgICAgICBvZmZzZXQ6IDBcclxuICAgIH1cclxuXHJcbiAgICBXYXlwb2ludC5vZmZzZXRBbGlhc2VzID0ge1xyXG4gICAgICAgICdib3R0b20taW4tdmlldyc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmlubmVySGVpZ2h0KCkgLSB0aGlzLmFkYXB0ZXIub3V0ZXJIZWlnaHQoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3JpZ2h0LWluLXZpZXcnOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5pbm5lcldpZHRoKCkgLSB0aGlzLmFkYXB0ZXIub3V0ZXJXaWR0aCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5XYXlwb2ludCA9IFdheXBvaW50XHJcbn0oKSk7XHJcbihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0J1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZVNoaW0oY2FsbGJhY2spIHtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBrZXlDb3VudGVyID0gMFxyXG4gICAgdmFyIGNvbnRleHRzID0ge31cclxuICAgIHZhciBXYXlwb2ludCA9IHdpbmRvdy5XYXlwb2ludFxyXG4gICAgdmFyIG9sZFdpbmRvd0xvYWQgPSB3aW5kb3cub25sb2FkXHJcblxyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2NvbnRleHQgKi9cclxuICAgIGZ1bmN0aW9uIENvbnRleHQoZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcclxuICAgICAgICB0aGlzLkFkYXB0ZXIgPSBXYXlwb2ludC5BZGFwdGVyXHJcbiAgICAgICAgdGhpcy5hZGFwdGVyID0gbmV3IHRoaXMuQWRhcHRlcihlbGVtZW50KVxyXG4gICAgICAgIHRoaXMua2V5ID0gJ3dheXBvaW50LWNvbnRleHQtJyArIGtleUNvdW50ZXJcclxuICAgICAgICB0aGlzLmRpZFNjcm9sbCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5kaWRSZXNpemUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMub2xkU2Nyb2xsID0ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLmFkYXB0ZXIuc2Nyb2xsTGVmdCgpLFxyXG4gICAgICAgICAgICB5OiB0aGlzLmFkYXB0ZXIuc2Nyb2xsVG9wKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53YXlwb2ludHMgPSB7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsOiB7fSxcclxuICAgICAgICAgICAgaG9yaXpvbnRhbDoge31cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsZW1lbnQud2F5cG9pbnRDb250ZXh0S2V5ID0gdGhpcy5rZXlcclxuICAgICAgICBjb250ZXh0c1tlbGVtZW50LndheXBvaW50Q29udGV4dEtleV0gPSB0aGlzXHJcbiAgICAgICAga2V5Q291bnRlciArPSAxXHJcbiAgICAgICAgaWYgKCFXYXlwb2ludC53aW5kb3dDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFdheXBvaW50LndpbmRvd0NvbnRleHQgPSB0cnVlXHJcbiAgICAgICAgICAgIFdheXBvaW50LndpbmRvd0NvbnRleHQgPSBuZXcgQ29udGV4dCh3aW5kb3cpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZVRocm90dGxlZFNjcm9sbEhhbmRsZXIoKVxyXG4gICAgICAgIHRoaXMuY3JlYXRlVGhyb3R0bGVkUmVzaXplSGFuZGxlcigpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24od2F5cG9pbnQpIHtcclxuICAgICAgICB2YXIgYXhpcyA9IHdheXBvaW50Lm9wdGlvbnMuaG9yaXpvbnRhbCA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCdcclxuICAgICAgICB0aGlzLndheXBvaW50c1theGlzXVt3YXlwb2ludC5rZXldID0gd2F5cG9pbnRcclxuICAgICAgICB0aGlzLnJlZnJlc2goKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmNoZWNrRW1wdHkgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgaG9yaXpvbnRhbEVtcHR5ID0gdGhpcy5BZGFwdGVyLmlzRW1wdHlPYmplY3QodGhpcy53YXlwb2ludHMuaG9yaXpvbnRhbClcclxuICAgICAgICB2YXIgdmVydGljYWxFbXB0eSA9IHRoaXMuQWRhcHRlci5pc0VtcHR5T2JqZWN0KHRoaXMud2F5cG9pbnRzLnZlcnRpY2FsKVxyXG4gICAgICAgIHZhciBpc1dpbmRvdyA9IHRoaXMuZWxlbWVudCA9PSB0aGlzLmVsZW1lbnQud2luZG93XHJcbiAgICAgICAgaWYgKGhvcml6b250YWxFbXB0eSAmJiB2ZXJ0aWNhbEVtcHR5ICYmICFpc1dpbmRvdykge1xyXG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIub2ZmKCcud2F5cG9pbnRzJylcclxuICAgICAgICAgICAgZGVsZXRlIGNvbnRleHRzW3RoaXMua2V5XVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5jcmVhdGVUaHJvdHRsZWRSZXNpemVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlc2l6ZUhhbmRsZXIoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuaGFuZGxlUmVzaXplKClcclxuICAgICAgICAgICAgc2VsZi5kaWRSZXNpemUgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hZGFwdGVyLm9uKCdyZXNpemUud2F5cG9pbnRzJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghc2VsZi5kaWRSZXNpemUpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZGlkUmVzaXplID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgV2F5cG9pbnQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlc2l6ZUhhbmRsZXIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmNyZWF0ZVRocm90dGxlZFNjcm9sbEhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsSGFuZGxlcigpIHtcclxuICAgICAgICAgICAgc2VsZi5oYW5kbGVTY3JvbGwoKVxyXG4gICAgICAgICAgICBzZWxmLmRpZFNjcm9sbCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFkYXB0ZXIub24oJ3Njcm9sbC53YXlwb2ludHMnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCFzZWxmLmRpZFNjcm9sbCB8fCBXYXlwb2ludC5pc1RvdWNoKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRpZFNjcm9sbCA9IHRydWVcclxuICAgICAgICAgICAgICAgIFdheXBvaW50LnJlcXVlc3RBbmltYXRpb25GcmFtZShzY3JvbGxIYW5kbGVyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5oYW5kbGVSZXNpemUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBXYXlwb2ludC5Db250ZXh0LnJlZnJlc2hBbGwoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmhhbmRsZVNjcm9sbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB0cmlnZ2VyZWRHcm91cHMgPSB7fVxyXG4gICAgICAgIHZhciBheGVzID0ge1xyXG4gICAgICAgICAgICBob3Jpem9udGFsOiB7XHJcbiAgICAgICAgICAgICAgICBuZXdTY3JvbGw6IHRoaXMuYWRhcHRlci5zY3JvbGxMZWZ0KCksXHJcbiAgICAgICAgICAgICAgICBvbGRTY3JvbGw6IHRoaXMub2xkU2Nyb2xsLngsXHJcbiAgICAgICAgICAgICAgICBmb3J3YXJkOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgYmFja3dhcmQ6ICdsZWZ0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbDoge1xyXG4gICAgICAgICAgICAgICAgbmV3U2Nyb2xsOiB0aGlzLmFkYXB0ZXIuc2Nyb2xsVG9wKCksXHJcbiAgICAgICAgICAgICAgICBvbGRTY3JvbGw6IHRoaXMub2xkU2Nyb2xsLnksXHJcbiAgICAgICAgICAgICAgICBmb3J3YXJkOiAnZG93bicsXHJcbiAgICAgICAgICAgICAgICBiYWNrd2FyZDogJ3VwJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBheGlzS2V5IGluIGF4ZXMpIHtcclxuICAgICAgICAgICAgdmFyIGF4aXMgPSBheGVzW2F4aXNLZXldXHJcbiAgICAgICAgICAgIHZhciBpc0ZvcndhcmQgPSBheGlzLm5ld1Njcm9sbCA+IGF4aXMub2xkU2Nyb2xsXHJcbiAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBpc0ZvcndhcmQgPyBheGlzLmZvcndhcmQgOiBheGlzLmJhY2t3YXJkXHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciB3YXlwb2ludEtleSBpbiB0aGlzLndheXBvaW50c1theGlzS2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdheXBvaW50ID0gdGhpcy53YXlwb2ludHNbYXhpc0tleV1bd2F5cG9pbnRLZXldXHJcbiAgICAgICAgICAgICAgICBpZiAod2F5cG9pbnQudHJpZ2dlclBvaW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB3YXNCZWZvcmVUcmlnZ2VyUG9pbnQgPSBheGlzLm9sZFNjcm9sbCA8IHdheXBvaW50LnRyaWdnZXJQb2ludFxyXG4gICAgICAgICAgICAgICAgdmFyIG5vd0FmdGVyVHJpZ2dlclBvaW50ID0gYXhpcy5uZXdTY3JvbGwgPj0gd2F5cG9pbnQudHJpZ2dlclBvaW50XHJcbiAgICAgICAgICAgICAgICB2YXIgY3Jvc3NlZEZvcndhcmQgPSB3YXNCZWZvcmVUcmlnZ2VyUG9pbnQgJiYgbm93QWZ0ZXJUcmlnZ2VyUG9pbnRcclxuICAgICAgICAgICAgICAgIHZhciBjcm9zc2VkQmFja3dhcmQgPSAhd2FzQmVmb3JlVHJpZ2dlclBvaW50ICYmICFub3dBZnRlclRyaWdnZXJQb2ludFxyXG4gICAgICAgICAgICAgICAgaWYgKGNyb3NzZWRGb3J3YXJkIHx8IGNyb3NzZWRCYWNrd2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdheXBvaW50LnF1ZXVlVHJpZ2dlcihkaXJlY3Rpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcmVkR3JvdXBzW3dheXBvaW50Lmdyb3VwLmlkXSA9IHdheXBvaW50Lmdyb3VwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGdyb3VwS2V5IGluIHRyaWdnZXJlZEdyb3Vwcykge1xyXG4gICAgICAgICAgICB0cmlnZ2VyZWRHcm91cHNbZ3JvdXBLZXldLmZsdXNoVHJpZ2dlcnMoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vbGRTY3JvbGwgPSB7XHJcbiAgICAgICAgICAgIHg6IGF4ZXMuaG9yaXpvbnRhbC5uZXdTY3JvbGwsXHJcbiAgICAgICAgICAgIHk6IGF4ZXMudmVydGljYWwubmV3U2Nyb2xsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmlubmVySGVpZ2h0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLyplc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50ID09IHRoaXMuZWxlbWVudC53aW5kb3cpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFdheXBvaW50LnZpZXdwb3J0SGVpZ2h0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgLyplc2xpbnQtZW5hYmxlIGVxZXFlcSAqL1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuaW5uZXJIZWlnaHQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKHdheXBvaW50KSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMud2F5cG9pbnRzW3dheXBvaW50LmF4aXNdW3dheXBvaW50LmtleV1cclxuICAgICAgICB0aGlzLmNoZWNrRW1wdHkoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmlubmVyV2lkdGggPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvKmVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgPT0gdGhpcy5lbGVtZW50LndpbmRvdykge1xyXG4gICAgICAgICAgICByZXR1cm4gV2F5cG9pbnQudmlld3BvcnRXaWR0aCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qZXNsaW50LWVuYWJsZSBlcWVxZXEgKi9cclxuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmlubmVyV2lkdGgoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2NvbnRleHQtZGVzdHJveSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBhbGxXYXlwb2ludHMgPSBbXVxyXG4gICAgICAgIGZvciAodmFyIGF4aXMgaW4gdGhpcy53YXlwb2ludHMpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgd2F5cG9pbnRLZXkgaW4gdGhpcy53YXlwb2ludHNbYXhpc10pIHtcclxuICAgICAgICAgICAgICAgIGFsbFdheXBvaW50cy5wdXNoKHRoaXMud2F5cG9pbnRzW2F4aXNdW3dheXBvaW50S2V5XSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgZW5kID0gYWxsV2F5cG9pbnRzLmxlbmd0aDsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFsbFdheXBvaW50c1tpXS5kZXN0cm95KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvY29udGV4dC1yZWZyZXNoICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLyplc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cclxuICAgICAgICB2YXIgaXNXaW5kb3cgPSB0aGlzLmVsZW1lbnQgPT0gdGhpcy5lbGVtZW50LndpbmRvd1xyXG4gICAgICAgIC8qZXNsaW50LWVuYWJsZSBlcWVxZXEgKi9cclxuICAgICAgICB2YXIgY29udGV4dE9mZnNldCA9IGlzV2luZG93ID8gdW5kZWZpbmVkIDogdGhpcy5hZGFwdGVyLm9mZnNldCgpXHJcbiAgICAgICAgdmFyIHRyaWdnZXJlZEdyb3VwcyA9IHt9XHJcbiAgICAgICAgdmFyIGF4ZXNcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwoKVxyXG4gICAgICAgIGF4ZXMgPSB7XHJcbiAgICAgICAgICAgIGhvcml6b250YWw6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRPZmZzZXQ6IGlzV2luZG93ID8gMCA6IGNvbnRleHRPZmZzZXQubGVmdCxcclxuICAgICAgICAgICAgICAgIGNvbnRleHRTY3JvbGw6IGlzV2luZG93ID8gMCA6IHRoaXMub2xkU2Nyb2xsLngsXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0RGltZW5zaW9uOiB0aGlzLmlubmVyV2lkdGgoKSxcclxuICAgICAgICAgICAgICAgIG9sZFNjcm9sbDogdGhpcy5vbGRTY3JvbGwueCxcclxuICAgICAgICAgICAgICAgIGZvcndhcmQ6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrd2FyZDogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0UHJvcDogJ2xlZnQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHZlcnRpY2FsOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0T2Zmc2V0OiBpc1dpbmRvdyA/IDAgOiBjb250ZXh0T2Zmc2V0LnRvcCxcclxuICAgICAgICAgICAgICAgIGNvbnRleHRTY3JvbGw6IGlzV2luZG93ID8gMCA6IHRoaXMub2xkU2Nyb2xsLnksXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0RGltZW5zaW9uOiB0aGlzLmlubmVySGVpZ2h0KCksXHJcbiAgICAgICAgICAgICAgICBvbGRTY3JvbGw6IHRoaXMub2xkU2Nyb2xsLnksXHJcbiAgICAgICAgICAgICAgICBmb3J3YXJkOiAnZG93bicsXHJcbiAgICAgICAgICAgICAgICBiYWNrd2FyZDogJ3VwJyxcclxuICAgICAgICAgICAgICAgIG9mZnNldFByb3A6ICd0b3AnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGF4aXNLZXkgaW4gYXhlcykge1xyXG4gICAgICAgICAgICB2YXIgYXhpcyA9IGF4ZXNbYXhpc0tleV1cclxuICAgICAgICAgICAgZm9yICh2YXIgd2F5cG9pbnRLZXkgaW4gdGhpcy53YXlwb2ludHNbYXhpc0tleV0pIHtcclxuICAgICAgICAgICAgICAgIHZhciB3YXlwb2ludCA9IHRoaXMud2F5cG9pbnRzW2F4aXNLZXldW3dheXBvaW50S2V5XVxyXG4gICAgICAgICAgICAgICAgdmFyIGFkanVzdG1lbnQgPSB3YXlwb2ludC5vcHRpb25zLm9mZnNldFxyXG4gICAgICAgICAgICAgICAgdmFyIG9sZFRyaWdnZXJQb2ludCA9IHdheXBvaW50LnRyaWdnZXJQb2ludFxyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRPZmZzZXQgPSAwXHJcbiAgICAgICAgICAgICAgICB2YXIgZnJlc2hXYXlwb2ludCA9IG9sZFRyaWdnZXJQb2ludCA9PSBudWxsXHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGV4dE1vZGlmaWVyLCB3YXNCZWZvcmVTY3JvbGwsIG5vd0FmdGVyU2Nyb2xsXHJcbiAgICAgICAgICAgICAgICB2YXIgdHJpZ2dlcmVkQmFja3dhcmQsIHRyaWdnZXJlZEZvcndhcmRcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAod2F5cG9pbnQuZWxlbWVudCAhPT0gd2F5cG9pbnQuZWxlbWVudC53aW5kb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50T2Zmc2V0ID0gd2F5cG9pbnQuYWRhcHRlci5vZmZzZXQoKVtheGlzLm9mZnNldFByb3BdXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhZGp1c3RtZW50ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRqdXN0bWVudCA9IGFkanVzdG1lbnQuYXBwbHkod2F5cG9pbnQpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhZGp1c3RtZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkanVzdG1lbnQgPSBwYXJzZUZsb2F0KGFkanVzdG1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdheXBvaW50Lm9wdGlvbnMub2Zmc2V0LmluZGV4T2YoJyUnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkanVzdG1lbnQgPSBNYXRoLmNlaWwoYXhpcy5jb250ZXh0RGltZW5zaW9uICogYWRqdXN0bWVudCAvIDEwMClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGV4dE1vZGlmaWVyID0gYXhpcy5jb250ZXh0U2Nyb2xsIC0gYXhpcy5jb250ZXh0T2Zmc2V0XHJcbiAgICAgICAgICAgICAgICB3YXlwb2ludC50cmlnZ2VyUG9pbnQgPSBNYXRoLmZsb29yKGVsZW1lbnRPZmZzZXQgKyBjb250ZXh0TW9kaWZpZXIgLSBhZGp1c3RtZW50KVxyXG4gICAgICAgICAgICAgICAgd2FzQmVmb3JlU2Nyb2xsID0gb2xkVHJpZ2dlclBvaW50IDwgYXhpcy5vbGRTY3JvbGxcclxuICAgICAgICAgICAgICAgIG5vd0FmdGVyU2Nyb2xsID0gd2F5cG9pbnQudHJpZ2dlclBvaW50ID49IGF4aXMub2xkU2Nyb2xsXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyZWRCYWNrd2FyZCA9IHdhc0JlZm9yZVNjcm9sbCAmJiBub3dBZnRlclNjcm9sbFxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcmVkRm9yd2FyZCA9ICF3YXNCZWZvcmVTY3JvbGwgJiYgIW5vd0FmdGVyU2Nyb2xsXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFmcmVzaFdheXBvaW50ICYmIHRyaWdnZXJlZEJhY2t3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2F5cG9pbnQucXVldWVUcmlnZ2VyKGF4aXMuYmFja3dhcmQpXHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcmVkR3JvdXBzW3dheXBvaW50Lmdyb3VwLmlkXSA9IHdheXBvaW50Lmdyb3VwXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFmcmVzaFdheXBvaW50ICYmIHRyaWdnZXJlZEZvcndhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB3YXlwb2ludC5xdWV1ZVRyaWdnZXIoYXhpcy5mb3J3YXJkKVxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJlZEdyb3Vwc1t3YXlwb2ludC5ncm91cC5pZF0gPSB3YXlwb2ludC5ncm91cFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmcmVzaFdheXBvaW50ICYmIGF4aXMub2xkU2Nyb2xsID49IHdheXBvaW50LnRyaWdnZXJQb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdheXBvaW50LnF1ZXVlVHJpZ2dlcihheGlzLmZvcndhcmQpXHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcmVkR3JvdXBzW3dheXBvaW50Lmdyb3VwLmlkXSA9IHdheXBvaW50Lmdyb3VwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFdheXBvaW50LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgZ3JvdXBLZXkgaW4gdHJpZ2dlcmVkR3JvdXBzKSB7XHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyZWRHcm91cHNbZ3JvdXBLZXldLmZsdXNoVHJpZ2dlcnMoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LmZpbmRPckNyZWF0ZUJ5RWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gQ29udGV4dC5maW5kQnlFbGVtZW50KGVsZW1lbnQpIHx8IG5ldyBDb250ZXh0KGVsZW1lbnQpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5yZWZyZXNoQWxsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZm9yICh2YXIgY29udGV4dElkIGluIGNvbnRleHRzKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHRzW2NvbnRleHRJZF0ucmVmcmVzaCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2NvbnRleHQtZmluZC1ieS1lbGVtZW50ICovXHJcbiAgICBDb250ZXh0LmZpbmRCeUVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHRzW2VsZW1lbnQud2F5cG9pbnRDb250ZXh0S2V5XVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAob2xkV2luZG93TG9hZCkge1xyXG4gICAgICAgICAgICBvbGRXaW5kb3dMb2FkKClcclxuICAgICAgICB9XHJcbiAgICAgICAgQ29udGV4dC5yZWZyZXNoQWxsKClcclxuICAgIH1cclxuXHJcblxyXG4gICAgV2F5cG9pbnQucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgcmVxdWVzdEZuID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lU2hpbVxyXG4gICAgICAgIHJlcXVlc3RGbi5jYWxsKHdpbmRvdywgY2FsbGJhY2spXHJcbiAgICB9XHJcbiAgICBXYXlwb2ludC5Db250ZXh0ID0gQ29udGV4dFxyXG59KCkpO1xyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCdcclxuXHJcbiAgICBmdW5jdGlvbiBieVRyaWdnZXJQb2ludChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGEudHJpZ2dlclBvaW50IC0gYi50cmlnZ2VyUG9pbnRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBieVJldmVyc2VUcmlnZ2VyUG9pbnQoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBiLnRyaWdnZXJQb2ludCAtIGEudHJpZ2dlclBvaW50XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdyb3VwcyA9IHtcclxuICAgICAgICB2ZXJ0aWNhbDoge30sXHJcbiAgICAgICAgaG9yaXpvbnRhbDoge31cclxuICAgIH1cclxuICAgIHZhciBXYXlwb2ludCA9IHdpbmRvdy5XYXlwb2ludFxyXG5cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9ncm91cCAqL1xyXG4gICAgZnVuY3Rpb24gR3JvdXAob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZVxyXG4gICAgICAgIHRoaXMuYXhpcyA9IG9wdGlvbnMuYXhpc1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLm5hbWUgKyAnLScgKyB0aGlzLmF4aXNcclxuICAgICAgICB0aGlzLndheXBvaW50cyA9IFtdXHJcbiAgICAgICAgdGhpcy5jbGVhclRyaWdnZXJRdWV1ZXMoKVxyXG4gICAgICAgIGdyb3Vwc1t0aGlzLmF4aXNdW3RoaXMubmFtZV0gPSB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHdheXBvaW50KSB7XHJcbiAgICAgICAgdGhpcy53YXlwb2ludHMucHVzaCh3YXlwb2ludClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBHcm91cC5wcm90b3R5cGUuY2xlYXJUcmlnZ2VyUXVldWVzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyUXVldWVzID0ge1xyXG4gICAgICAgICAgICB1cDogW10sXHJcbiAgICAgICAgICAgIGRvd246IFtdLFxyXG4gICAgICAgICAgICBsZWZ0OiBbXSxcclxuICAgICAgICAgICAgcmlnaHQ6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIEdyb3VwLnByb3RvdHlwZS5mbHVzaFRyaWdnZXJzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZm9yICh2YXIgZGlyZWN0aW9uIGluIHRoaXMudHJpZ2dlclF1ZXVlcykge1xyXG4gICAgICAgICAgICB2YXIgd2F5cG9pbnRzID0gdGhpcy50cmlnZ2VyUXVldWVzW2RpcmVjdGlvbl1cclxuICAgICAgICAgICAgdmFyIHJldmVyc2UgPSBkaXJlY3Rpb24gPT09ICd1cCcgfHwgZGlyZWN0aW9uID09PSAnbGVmdCdcclxuICAgICAgICAgICAgd2F5cG9pbnRzLnNvcnQocmV2ZXJzZSA/IGJ5UmV2ZXJzZVRyaWdnZXJQb2ludCA6IGJ5VHJpZ2dlclBvaW50KVxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgZW5kID0gd2F5cG9pbnRzLmxlbmd0aDsgaSA8IGVuZDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2F5cG9pbnQgPSB3YXlwb2ludHNbaV1cclxuICAgICAgICAgICAgICAgIGlmICh3YXlwb2ludC5vcHRpb25zLmNvbnRpbnVvdXMgfHwgaSA9PT0gd2F5cG9pbnRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB3YXlwb2ludC50cmlnZ2VyKFtkaXJlY3Rpb25dKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xlYXJUcmlnZ2VyUXVldWVzKClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBHcm91cC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKHdheXBvaW50KSB7XHJcbiAgICAgICAgdGhpcy53YXlwb2ludHMuc29ydChieVRyaWdnZXJQb2ludClcclxuICAgICAgICB2YXIgaW5kZXggPSBXYXlwb2ludC5BZGFwdGVyLmluQXJyYXkod2F5cG9pbnQsIHRoaXMud2F5cG9pbnRzKVxyXG4gICAgICAgIHZhciBpc0xhc3QgPSBpbmRleCA9PT0gdGhpcy53YXlwb2ludHMubGVuZ3RoIC0gMVxyXG4gICAgICAgIHJldHVybiBpc0xhc3QgPyBudWxsIDogdGhpcy53YXlwb2ludHNbaW5kZXggKyAxXVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIEdyb3VwLnByb3RvdHlwZS5wcmV2aW91cyA9IGZ1bmN0aW9uKHdheXBvaW50KSB7XHJcbiAgICAgICAgdGhpcy53YXlwb2ludHMuc29ydChieVRyaWdnZXJQb2ludClcclxuICAgICAgICB2YXIgaW5kZXggPSBXYXlwb2ludC5BZGFwdGVyLmluQXJyYXkod2F5cG9pbnQsIHRoaXMud2F5cG9pbnRzKVxyXG4gICAgICAgIHJldHVybiBpbmRleCA/IHRoaXMud2F5cG9pbnRzW2luZGV4IC0gMV0gOiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLnF1ZXVlVHJpZ2dlciA9IGZ1bmN0aW9uKHdheXBvaW50LCBkaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXJRdWV1ZXNbZGlyZWN0aW9uXS5wdXNoKHdheXBvaW50KVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIEdyb3VwLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbih3YXlwb2ludCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IFdheXBvaW50LkFkYXB0ZXIuaW5BcnJheSh3YXlwb2ludCwgdGhpcy53YXlwb2ludHMpXHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy53YXlwb2ludHMuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9maXJzdCAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2F5cG9pbnRzWzBdXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvbGFzdCAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YXlwb2ludHNbdGhpcy53YXlwb2ludHMubGVuZ3RoIC0gMV1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBHcm91cC5maW5kT3JDcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIGdyb3Vwc1tvcHRpb25zLmF4aXNdW29wdGlvbnMubmFtZV0gfHwgbmV3IEdyb3VwKG9wdGlvbnMpXHJcbiAgICB9XHJcblxyXG4gICAgV2F5cG9pbnQuR3JvdXAgPSBHcm91cFxyXG59KCkpO1xyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCdcclxuXHJcbiAgICB2YXIgV2F5cG9pbnQgPSB3aW5kb3cuV2F5cG9pbnRcclxuXHJcbiAgICBmdW5jdGlvbiBpc1dpbmRvdyhlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgPT09IGVsZW1lbnQud2luZG93XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0V2luZG93KGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoaXNXaW5kb3coZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZGVmYXVsdFZpZXdcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBOb0ZyYW1ld29ya0FkYXB0ZXIoZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcclxuICAgICAgICB0aGlzLmhhbmRsZXJzID0ge31cclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLmlubmVySGVpZ2h0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGlzV2luID0gaXNXaW5kb3codGhpcy5lbGVtZW50KVxyXG4gICAgICAgIHJldHVybiBpc1dpbiA/IHRoaXMuZWxlbWVudC5pbm5lckhlaWdodCA6IHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHRcclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLmlubmVyV2lkdGggPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgaXNXaW4gPSBpc1dpbmRvdyh0aGlzLmVsZW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIGlzV2luID8gdGhpcy5lbGVtZW50LmlubmVyV2lkdGggOiB0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGhcclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKGVsZW1lbnQsIGxpc3RlbmVycywgaGFuZGxlcikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgZW5kID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldXHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhbmRsZXIgfHwgaGFuZGxlciA9PT0gbGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobGlzdGVuZXIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBldmVudFBhcnRzID0gZXZlbnQuc3BsaXQoJy4nKVxyXG4gICAgICAgIHZhciBldmVudFR5cGUgPSBldmVudFBhcnRzWzBdXHJcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9IGV2ZW50UGFydHNbMV1cclxuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudFxyXG5cclxuICAgICAgICBpZiAobmFtZXNwYWNlICYmIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXSAmJiBldmVudFR5cGUpIHtcclxuICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXJzKGVsZW1lbnQsIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXVtldmVudFR5cGVdLCBoYW5kbGVyKVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV1bZXZlbnRUeXBlXSA9IFtdXHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgbnMgaW4gdGhpcy5oYW5kbGVycykge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXJzKGVsZW1lbnQsIHRoaXMuaGFuZGxlcnNbbnNdW2V2ZW50VHlwZV0gfHwgW10sIGhhbmRsZXIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXJzW25zXVtldmVudFR5cGVdID0gW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZXNwYWNlICYmIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB0eXBlIGluIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXSkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXJzKGVsZW1lbnQsIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXVt0eXBlXSwgaGFuZGxlcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV0gPSB7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBBZGFwdGVkIGZyb20galF1ZXJ5IDEueCBvZmZzZXQoKSAqL1xyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5vZmZzZXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XHJcbiAgICAgICAgdmFyIHdpbiA9IGdldFdpbmRvdyh0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudClcclxuICAgICAgICB2YXIgcmVjdCA9IHtcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBsZWZ0OiAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xyXG4gICAgICAgICAgICByZWN0ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b3A6IHJlY3QudG9wICsgd2luLnBhZ2VZT2Zmc2V0IC0gZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCxcclxuICAgICAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0IC0gZG9jdW1lbnRFbGVtZW50LmNsaWVudExlZnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdmFyIGV2ZW50UGFydHMgPSBldmVudC5zcGxpdCgnLicpXHJcbiAgICAgICAgdmFyIGV2ZW50VHlwZSA9IGV2ZW50UGFydHNbMF1cclxuICAgICAgICB2YXIgbmFtZXNwYWNlID0gZXZlbnRQYXJ0c1sxXSB8fCAnX19kZWZhdWx0J1xyXG4gICAgICAgIHZhciBuc0hhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdID0gdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdIHx8IHt9XHJcbiAgICAgICAgdmFyIG5zVHlwZUxpc3QgPSBuc0hhbmRsZXJzW2V2ZW50VHlwZV0gPSBuc0hhbmRsZXJzW2V2ZW50VHlwZV0gfHwgW11cclxuXHJcbiAgICAgICAgbnNUeXBlTGlzdC5wdXNoKGhhbmRsZXIpXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyKVxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUub3V0ZXJIZWlnaHQgPSBmdW5jdGlvbihpbmNsdWRlTWFyZ2luKSB7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuaW5uZXJIZWlnaHQoKVxyXG4gICAgICAgIHZhciBjb21wdXRlZFN0eWxlXHJcblxyXG4gICAgICAgIGlmIChpbmNsdWRlTWFyZ2luICYmICFpc1dpbmRvdyh0aGlzLmVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpXHJcbiAgICAgICAgICAgIGhlaWdodCArPSBwYXJzZUludChjb21wdXRlZFN0eWxlLm1hcmdpblRvcCwgMTApXHJcbiAgICAgICAgICAgIGhlaWdodCArPSBwYXJzZUludChjb21wdXRlZFN0eWxlLm1hcmdpbkJvdHRvbSwgMTApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaGVpZ2h0XHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5vdXRlcldpZHRoID0gZnVuY3Rpb24oaW5jbHVkZU1hcmdpbikge1xyXG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMuaW5uZXJXaWR0aCgpXHJcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGVcclxuXHJcbiAgICAgICAgaWYgKGluY2x1ZGVNYXJnaW4gJiYgIWlzV2luZG93KHRoaXMuZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClcclxuICAgICAgICAgICAgd2lkdGggKz0gcGFyc2VJbnQoY29tcHV0ZWRTdHlsZS5tYXJnaW5MZWZ0LCAxMClcclxuICAgICAgICAgICAgd2lkdGggKz0gcGFyc2VJbnQoY29tcHV0ZWRTdHlsZS5tYXJnaW5SaWdodCwgMTApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gd2lkdGhcclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLnNjcm9sbExlZnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgd2luID0gZ2V0V2luZG93KHRoaXMuZWxlbWVudClcclxuICAgICAgICByZXR1cm4gd2luID8gd2luLnBhZ2VYT2Zmc2V0IDogdGhpcy5lbGVtZW50LnNjcm9sbExlZnRcclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLnNjcm9sbFRvcCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB3aW4gPSBnZXRXaW5kb3codGhpcy5lbGVtZW50KVxyXG4gICAgICAgIHJldHVybiB3aW4gPyB3aW4ucGFnZVlPZmZzZXQgOiB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wXHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLmV4dGVuZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBtZXJnZSh0YXJnZXQsIG9iaikge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBvYmpba2V5XVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDEsIGVuZCA9IGFyZ3MubGVuZ3RoOyBpIDwgZW5kOyBpKyspIHtcclxuICAgICAgICAgICAgbWVyZ2UoYXJnc1swXSwgYXJnc1tpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyZ3NbMF1cclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIuaW5BcnJheSA9IGZ1bmN0aW9uKGVsZW1lbnQsIGFycmF5LCBpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5ID09IG51bGwgPyAtMSA6IGFycmF5LmluZGV4T2YoZWxlbWVudCwgaSlcclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIuaXNFbXB0eU9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIC8qIGVzbGludCBuby11bnVzZWQtdmFyczogMCAqL1xyXG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIFdheXBvaW50LmFkYXB0ZXJzLnB1c2goe1xyXG4gICAgICAgIG5hbWU6ICdub2ZyYW1ld29yaycsXHJcbiAgICAgICAgQWRhcHRlcjogTm9GcmFtZXdvcmtBZGFwdGVyXHJcbiAgICB9KVxyXG4gICAgV2F5cG9pbnQuQWRhcHRlciA9IE5vRnJhbWV3b3JrQWRhcHRlclxyXG59KCkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9