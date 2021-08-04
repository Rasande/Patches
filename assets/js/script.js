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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL21vYmlsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy91dGlsaXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy92ZW5kb3IvYW5pbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdmVuZG9yL25vZnJhbWV3b3JrLndheXBvaW50cy5qcyJdLCJuYW1lcyI6WyJBbmltYXRpb25zIiwib2RkRXZlbkFuaW1hdGlvbiIsIm9kZHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJldmVucyIsImZvckVhY2giLCJlbGVtZW50IiwiV2F5cG9pbnQiLCJoYW5kbGVyIiwiYW5pbWUiLCJ0YXJnZXRzIiwib3BhY2l0eSIsInRyYW5zbGF0ZVkiLCJkZWxheSIsImR1cmF0aW9uIiwiZWFzaW5nIiwiZGVzdHJveSIsIm9mZnNldCIsIkZvcm1zIiwidGV4dGFyZWEiLCJzZWxlY3QiLCJjdXN0b21TZWxlY3REcm9wZG93biIsImV2ZW50cyIsImVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNldFRleHRhcmVhSGVpZ2h0IiwidGFyZ2V0Iiwic3R5bGUiLCJoZWlnaHQiLCJVdGlsaXR5IiwidGV4dGFyZWFIZWlnaHQiLCJ2YWx1ZSIsIk1vYmlsZU1lbnUiLCJoZWFkZXIiLCJxdWVyeVNlbGVjdG9yIiwidG9nZ2xlTWVudSIsIm1lbnUiLCJzdWJtZW51QnRuIiwiaXNNZW51T3BlbiIsInRyaWdnZXJNZW51IiwidG9nZ2xlU3ViTWVudSIsImtleVByZXNzIiwid2luZG93IiwiY2hhbmdlSGVhZGVyIiwiY3VycmVudFRhcmdldCIsImdldEF0dHJpYnV0ZSIsInRhcmdldE1lbnUiLCJvdGhlck1lbnVzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJjbG9zZU1lbnUiLCJvcGVuTWVudSIsImlkIiwibWVudUJ0biIsImJvZHlTY3JvbGxMb2NrIiwiYWRkIiwic2V0QXR0cmlidXRlIiwiYm9keVNjcm9sbFVubG9jayIsInJlbW92ZSIsImJ0biIsInBhcmVudE5vZGUiLCJjbGllbnRIZWlnaHQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXR0cmlidXRlIiwib25jZSIsImtleUNvZGUiLCJzY3JvbGxQb3MiLCJzY3JvbGxZIiwiU2VhcmNoIiwic2VhcmNoTW9kYWwiLCJzZWFyY2hCdXR0b24iLCJzZWFyY2hGaWVsZCIsInNlYXJjaE92ZXJsYXkiLCJpc1NlYXJjaE9wZW4iLCJ0b2dnbGVNb2RhbCIsImNsb3NlTW9kYWwiLCJvcGVuTW9kYWwiLCJmb2N1cyIsImJvZHkiLCJwb3NpdGlvbiIsInRvcCIsImJvZHlTdHlsZSIsInNjcm9sbFRvIiwicGFyc2VJbnQiLCJudW1iZXJPZkxpbmVCcmVha3MiLCJtYXRjaCIsImxlbmd0aCIsIm5ld0hlaWdodCIsImNoZWNrIiwiYSIsInRlc3QiLCJzdWJzdHIiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ2ZW5kb3IiLCJvcGVyYSIsInJhc2FuZGVEb21SZWFkeSIsImZuIiwicmVhZHlTdGF0ZSIsIm1vYmlsZU1lbnUiLCJhbmltYXRpb24iLCJzZWFyY2giLCJmb3JtcyIsImRlZmF1bHRJbnN0YW5jZVNldHRpbmdzIiwidXBkYXRlIiwiYmVnaW4iLCJsb29wQmVnaW4iLCJjaGFuZ2VCZWdpbiIsImNoYW5nZSIsImNoYW5nZUNvbXBsZXRlIiwibG9vcENvbXBsZXRlIiwiY29tcGxldGUiLCJsb29wIiwiZGlyZWN0aW9uIiwiYXV0b3BsYXkiLCJ0aW1lbGluZU9mZnNldCIsImRlZmF1bHRUd2VlblNldHRpbmdzIiwiZW5kRGVsYXkiLCJyb3VuZCIsInZhbGlkVHJhbnNmb3JtcyIsImNhY2hlIiwiQ1NTIiwic3ByaW5ncyIsIm1pbk1heCIsInZhbCIsIm1pbiIsIm1heCIsIk1hdGgiLCJzdHJpbmdDb250YWlucyIsInN0ciIsInRleHQiLCJpbmRleE9mIiwiYXBwbHlBcmd1bWVudHMiLCJmdW5jIiwiYXJncyIsImFwcGx5IiwiaXMiLCJhcnIiLCJBcnJheSIsImlzQXJyYXkiLCJvYmoiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJwdGgiLCJoYXNPd25Qcm9wZXJ0eSIsInN2ZyIsIlNWR0VsZW1lbnQiLCJpbnAiLCJIVE1MSW5wdXRFbGVtZW50IiwiZG9tIiwibm9kZVR5cGUiLCJmbmMiLCJ1bmQiLCJuaWwiLCJoZXgiLCJyZ2IiLCJoc2wiLCJjb2wiLCJrZXkiLCJwYXJzZUVhc2luZ1BhcmFtZXRlcnMiLCJzdHJpbmciLCJleGVjIiwic3BsaXQiLCJtYXAiLCJwIiwicGFyc2VGbG9hdCIsInNwcmluZyIsInBhcmFtcyIsIm1hc3MiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwidmVsb2NpdHkiLCJ3MCIsInNxcnQiLCJ6ZXRhIiwid2QiLCJiIiwic29sdmVyIiwidCIsInByb2dyZXNzIiwiZXhwIiwiY29zIiwic2luIiwiZ2V0RHVyYXRpb24iLCJjYWNoZWQiLCJmcmFtZSIsImVsYXBzZWQiLCJyZXN0Iiwic3RlcHMiLCJjZWlsIiwiYmV6aWVyIiwia1NwbGluZVRhYmxlU2l6ZSIsImtTYW1wbGVTdGVwU2l6ZSIsIkEiLCJhQTEiLCJhQTIiLCJCIiwiQyIsImNhbGNCZXppZXIiLCJhVCIsImdldFNsb3BlIiwiYmluYXJ5U3ViZGl2aWRlIiwiYVgiLCJhQSIsImFCIiwibVgxIiwibVgyIiwiY3VycmVudFgiLCJjdXJyZW50VCIsImkiLCJhYnMiLCJuZXd0b25SYXBoc29uSXRlcmF0ZSIsImFHdWVzc1QiLCJjdXJyZW50U2xvcGUiLCJtWTEiLCJtWTIiLCJzYW1wbGVWYWx1ZXMiLCJGbG9hdDMyQXJyYXkiLCJnZXRURm9yWCIsImludGVydmFsU3RhcnQiLCJjdXJyZW50U2FtcGxlIiwibGFzdFNhbXBsZSIsImRpc3QiLCJndWVzc0ZvclQiLCJpbml0aWFsU2xvcGUiLCJ4IiwicGVubmVyIiwiZWFzZXMiLCJsaW5lYXIiLCJmdW5jdGlvbkVhc2luZ3MiLCJTaW5lIiwiUEkiLCJDaXJjIiwiQmFjayIsIkJvdW5jZSIsInBvdzIiLCJwb3ciLCJFbGFzdGljIiwiYW1wbGl0dWRlIiwicGVyaW9kIiwiYXNpbiIsImJhc2VFYXNpbmdzIiwibmFtZSIsImtleXMiLCJlYXNlSW4iLCJwYXJzZUVhc2luZ3MiLCJlYXNlIiwic2VsZWN0U3RyaW5nIiwibm9kZXMiLCJmaWx0ZXJBcnJheSIsImNhbGxiYWNrIiwibGVuIiwidGhpc0FyZyIsImFyZ3VtZW50cyIsInJlc3VsdCIsInB1c2giLCJmbGF0dGVuQXJyYXkiLCJyZWR1Y2UiLCJjb25jYXQiLCJ0b0FycmF5IiwibyIsIk5vZGVMaXN0IiwiSFRNTENvbGxlY3Rpb24iLCJzbGljZSIsImFycmF5Q29udGFpbnMiLCJzb21lIiwiY2xvbmVPYmplY3QiLCJjbG9uZSIsInJlcGxhY2VPYmplY3RQcm9wcyIsIm8xIiwibzIiLCJtZXJnZU9iamVjdHMiLCJyZ2JUb1JnYmEiLCJyZ2JWYWx1ZSIsImhleFRvUmdiYSIsImhleFZhbHVlIiwicmd4IiwicmVwbGFjZSIsIm0iLCJyIiwiZyIsImhzbFRvUmdiYSIsImhzbFZhbHVlIiwiaCIsInMiLCJsIiwiaHVlMnJnYiIsInEiLCJjb2xvclRvUmdiIiwiZ2V0VW5pdCIsImdldFRyYW5zZm9ybVVuaXQiLCJwcm9wTmFtZSIsImdldEZ1bmN0aW9uVmFsdWUiLCJhbmltYXRhYmxlIiwidG90YWwiLCJwcm9wIiwiY29udmVydFB4VG9Vbml0IiwidW5pdCIsInZhbHVlVW5pdCIsImJhc2VsaW5lIiwidGVtcEVsIiwiY3JlYXRlRWxlbWVudCIsInRhZ05hbWUiLCJwYXJlbnRFbCIsImFwcGVuZENoaWxkIiwid2lkdGgiLCJmYWN0b3IiLCJvZmZzZXRXaWR0aCIsInJlbW92ZUNoaWxkIiwiY29udmVydGVkVW5pdCIsImdldENTU1ZhbHVlIiwidXBwZXJjYXNlUHJvcE5hbWUiLCJ0b0xvd2VyQ2FzZSIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZ2V0QW5pbWF0aW9uVHlwZSIsImdldEVsZW1lbnRUcmFuc2Zvcm1zIiwidHJhbnNmb3JtIiwicmVnIiwidHJhbnNmb3JtcyIsIk1hcCIsInNldCIsImdldFRyYW5zZm9ybVZhbHVlIiwiZGVmYXVsdFZhbCIsImdldCIsImxpc3QiLCJnZXRPcmlnaW5hbFRhcmdldFZhbHVlIiwiZ2V0UmVsYXRpdmVWYWx1ZSIsInRvIiwiZnJvbSIsIm9wZXJhdG9yIiwidSIsInkiLCJ2YWxpZGF0ZVZhbHVlIiwib3JpZ2luYWxVbml0IiwidW5pdExlc3MiLCJnZXREaXN0YW5jZSIsInAxIiwicDIiLCJnZXRDaXJjbGVMZW5ndGgiLCJnZXRSZWN0TGVuZ3RoIiwiZ2V0TGluZUxlbmd0aCIsImdldFBvbHlsaW5lTGVuZ3RoIiwicG9pbnRzIiwidG90YWxMZW5ndGgiLCJwcmV2aW91c1BvcyIsIm51bWJlck9mSXRlbXMiLCJjdXJyZW50UG9zIiwiZ2V0SXRlbSIsImdldFBvbHlnb25MZW5ndGgiLCJnZXRUb3RhbExlbmd0aCIsInNldERhc2hvZmZzZXQiLCJwYXRoTGVuZ3RoIiwiZ2V0UGFyZW50U3ZnRWwiLCJnZXRQYXJlbnRTdmciLCJwYXRoRWwiLCJzdmdEYXRhIiwicGFyZW50U3ZnRWwiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwidmlld0JveEF0dHIiLCJ2aWV3Qm94IiwidyIsInZXIiwidkgiLCJnZXRQYXRoIiwicGF0aCIsInBlcmNlbnQiLCJwcm9wZXJ0eSIsImdldFBhdGhQcm9ncmVzcyIsImlzUGF0aFRhcmdldEluc2lkZVNWRyIsInBvaW50IiwiZ2V0UG9pbnRBdExlbmd0aCIsInAwIiwic2NhbGVYIiwic2NhbGVZIiwiYXRhbjIiLCJkZWNvbXBvc2VWYWx1ZSIsIm9yaWdpbmFsIiwibnVtYmVycyIsIk51bWJlciIsInN0cmluZ3MiLCJwYXJzZVRhcmdldHMiLCJ0YXJnZXRzQXJyYXkiLCJpdGVtIiwicG9zIiwic2VsZiIsImdldEFuaW1hdGFibGVzIiwicGFyc2VkIiwibm9ybWFsaXplUHJvcGVydHlUd2VlbnMiLCJ0d2VlblNldHRpbmdzIiwic2V0dGluZ3MiLCJpc0Zyb21UbyIsInByb3BBcnJheSIsInYiLCJrIiwiZmxhdHRlbktleWZyYW1lcyIsImtleWZyYW1lcyIsInByb3BlcnR5TmFtZXMiLCJwcm9wZXJ0aWVzIiwibmV3S2V5IiwiZ2V0UHJvcGVydGllcyIsInR3ZWVucyIsIm5vcm1hbGl6ZVR3ZWVuVmFsdWVzIiwidHdlZW4iLCJub3JtYWxpemVUd2VlbnMiLCJwcmV2aW91c1R3ZWVuIiwidHdlZW5WYWx1ZSIsInRvVW5pdCIsIm9yaWdpbmFsVmFsdWUiLCJwcmV2aW91c1ZhbHVlIiwiZnJvbVVuaXQiLCJzdGFydCIsImVuZCIsImlzUGF0aCIsImlzQ29sb3IiLCJzZXRQcm9ncmVzc1ZhbHVlIiwiY3NzIiwiYXR0cmlidXRlIiwib2JqZWN0IiwibWFudWFsIiwibGFzdCIsInNldFRhcmdldHNWYWx1ZSIsImFuaW1hdGFibGVzIiwiYW5pbVR5cGUiLCJjcmVhdGVBbmltYXRpb24iLCJsYXN0VHdlZW4iLCJ0eXBlIiwiZ2V0QW5pbWF0aW9ucyIsImdldEluc3RhbmNlVGltaW5ncyIsImFuaW1hdGlvbnMiLCJhbmltTGVuZ3RoIiwiZ2V0VGxPZmZzZXQiLCJhbmltIiwidGltaW5ncyIsImluc3RhbmNlSUQiLCJjcmVhdGVOZXdJbnN0YW5jZSIsImluc3RhbmNlU2V0dGluZ3MiLCJjaGlsZHJlbiIsImFjdGl2ZUluc3RhbmNlcyIsImVuZ2luZSIsInJhZiIsInBsYXkiLCJpc0RvY3VtZW50SGlkZGVuIiwic3VzcGVuZFdoZW5Eb2N1bWVudEhpZGRlbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0ZXAiLCJhY3RpdmVJbnN0YW5jZXNMZW5ndGgiLCJhY3RpdmVJbnN0YW5jZSIsInBhdXNlZCIsInRpY2siLCJzcGxpY2UiLCJ1bmRlZmluZWQiLCJoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpbnN0YW5jZSIsIl9vbkRvY3VtZW50VmlzaWJpbGl0eSIsImhpZGRlbiIsInN0YXJ0VGltZSIsImxhc3RUaW1lIiwibm93IiwiY2hpbGRyZW5MZW5ndGgiLCJyZXNvbHZlIiwibWFrZVByb21pc2UiLCJwcm9taXNlIiwiUHJvbWlzZSIsIl9yZXNvbHZlIiwiZmluaXNoZWQiLCJ0b2dnbGVJbnN0YW5jZURpcmVjdGlvbiIsInJldmVyc2VkIiwiY2hpbGQiLCJhZGp1c3RUaW1lIiwidGltZSIsInJlc2V0VGltZSIsImN1cnJlbnRUaW1lIiwic3BlZWQiLCJzZWVrQ2hpbGQiLCJzZWVrIiwic3luY0luc3RhbmNlQ2hpbGRyZW4iLCJyZXZlcnNlUGxheWJhY2siLCJpJDEiLCJzZXRBbmltYXRpb25zUHJvZ3Jlc3MiLCJpbnNUaW1lIiwiYW5pbWF0aW9uc0xlbmd0aCIsInR3ZWVuTGVuZ3RoIiwiZWFzZWQiLCJpc05hTiIsInRvTnVtYmVyc0xlbmd0aCIsIm4iLCJ0b051bWJlciIsImZyb21OdW1iZXIiLCJzdHJpbmdzTGVuZ3RoIiwibiQxIiwiY3VycmVudFZhbHVlIiwic2V0Q2FsbGJhY2siLCJjYiIsInBhc3NUaHJvdWdoIiwiY291bnRJdGVyYXRpb24iLCJyZW1haW5pbmciLCJzZXRJbnN0YW5jZVByb2dyZXNzIiwiZW5naW5lVGltZSIsImluc0R1cmF0aW9uIiwiaW5zRGVsYXkiLCJpbnNFbmREZWxheSIsImJlZ2FuIiwibG9vcEJlZ2FuIiwiY2hhbmdlQmVnYW4iLCJjaGFuZ2VDb21wbGV0ZWQiLCJjb21wbGV0ZWQiLCJyZXNldCIsInBhdXNlIiwicmV2ZXJzZSIsInJlc3RhcnQiLCJyZW1vdmVUYXJnZXRzRnJvbUluc3RhbmNlIiwicmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zIiwiYyIsImNoaWxkQW5pbWF0aW9ucyIsInJlbW92ZVRhcmdldHNGcm9tQWN0aXZlSW5zdGFuY2VzIiwic3RhZ2dlciIsImdyaWQiLCJheGlzIiwiZnJvbUluZGV4IiwiZnJvbUZpcnN0IiwiZnJvbUNlbnRlciIsImZyb21MYXN0IiwiaXNSYW5nZSIsInZhbDEiLCJ2YWwyIiwidmFsdWVzIiwibWF4VmFsdWUiLCJpbmRleCIsImZyb21YIiwiZnJvbVkiLCJmbG9vciIsInRvWCIsInRvWSIsImRpc3RhbmNlWCIsImRpc3RhbmNlWSIsInNwYWNpbmciLCJ0aW1lbGluZSIsInRsIiwiaW5zdGFuY2VQYXJhbXMiLCJ0bEluZGV4IiwiaW5zIiwiaW5zUGFyYW1zIiwidGxEdXJhdGlvbiIsInZlcnNpb24iLCJydW5uaW5nIiwiY29udmVydFB4IiwicmFuZG9tIiwibW9kdWxlIiwiZXhwb3J0cyIsImtleUNvdW50ZXIiLCJhbGxXYXlwb2ludHMiLCJvcHRpb25zIiwiRXJyb3IiLCJBZGFwdGVyIiwiZXh0ZW5kIiwiZGVmYXVsdHMiLCJhZGFwdGVyIiwiaG9yaXpvbnRhbCIsImVuYWJsZWQiLCJ0cmlnZ2VyUG9pbnQiLCJncm91cCIsIkdyb3VwIiwiZmluZE9yQ3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJmaW5kT3JDcmVhdGVCeUVsZW1lbnQiLCJvZmZzZXRBbGlhc2VzIiwicXVldWVUcmlnZ2VyIiwidHJpZ2dlciIsImRpc2FibGUiLCJlbmFibGUiLCJyZWZyZXNoIiwibmV4dCIsInByZXZpb3VzIiwiaW52b2tlQWxsIiwibWV0aG9kIiwiYWxsV2F5cG9pbnRzQXJyYXkiLCJ3YXlwb2ludEtleSIsImRlc3Ryb3lBbGwiLCJkaXNhYmxlQWxsIiwiZW5hYmxlQWxsIiwicmVmcmVzaEFsbCIsInZpZXdwb3J0SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJ2aWV3cG9ydFdpZHRoIiwiY2xpZW50V2lkdGgiLCJhZGFwdGVycyIsImNvbnRpbnVvdXMiLCJvdXRlckhlaWdodCIsImlubmVyV2lkdGgiLCJvdXRlcldpZHRoIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lU2hpbSIsImNvbnRleHRzIiwib2xkV2luZG93TG9hZCIsIm9ubG9hZCIsImRpZFNjcm9sbCIsImRpZFJlc2l6ZSIsIm9sZFNjcm9sbCIsInNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJ3YXlwb2ludHMiLCJ2ZXJ0aWNhbCIsIndheXBvaW50Q29udGV4dEtleSIsIndpbmRvd0NvbnRleHQiLCJjcmVhdGVUaHJvdHRsZWRTY3JvbGxIYW5kbGVyIiwiY3JlYXRlVGhyb3R0bGVkUmVzaXplSGFuZGxlciIsIndheXBvaW50IiwiY2hlY2tFbXB0eSIsImhvcml6b250YWxFbXB0eSIsImlzRW1wdHlPYmplY3QiLCJ2ZXJ0aWNhbEVtcHR5IiwiaXNXaW5kb3ciLCJvZmYiLCJyZXNpemVIYW5kbGVyIiwiaGFuZGxlUmVzaXplIiwib24iLCJzY3JvbGxIYW5kbGVyIiwiaGFuZGxlU2Nyb2xsIiwiaXNUb3VjaCIsInRyaWdnZXJlZEdyb3VwcyIsImF4ZXMiLCJuZXdTY3JvbGwiLCJmb3J3YXJkIiwiYmFja3dhcmQiLCJheGlzS2V5IiwiaXNGb3J3YXJkIiwid2FzQmVmb3JlVHJpZ2dlclBvaW50Iiwibm93QWZ0ZXJUcmlnZ2VyUG9pbnQiLCJjcm9zc2VkRm9yd2FyZCIsImNyb3NzZWRCYWNrd2FyZCIsImdyb3VwS2V5IiwiZmx1c2hUcmlnZ2VycyIsImNvbnRleHRPZmZzZXQiLCJsZWZ0IiwiY29udGV4dFNjcm9sbCIsImNvbnRleHREaW1lbnNpb24iLCJvZmZzZXRQcm9wIiwiYWRqdXN0bWVudCIsIm9sZFRyaWdnZXJQb2ludCIsImVsZW1lbnRPZmZzZXQiLCJmcmVzaFdheXBvaW50IiwiY29udGV4dE1vZGlmaWVyIiwid2FzQmVmb3JlU2Nyb2xsIiwibm93QWZ0ZXJTY3JvbGwiLCJ0cmlnZ2VyZWRCYWNrd2FyZCIsInRyaWdnZXJlZEZvcndhcmQiLCJmaW5kQnlFbGVtZW50IiwiY29udGV4dElkIiwicmVxdWVzdEZuIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYnlUcmlnZ2VyUG9pbnQiLCJieVJldmVyc2VUcmlnZ2VyUG9pbnQiLCJncm91cHMiLCJjbGVhclRyaWdnZXJRdWV1ZXMiLCJ0cmlnZ2VyUXVldWVzIiwidXAiLCJkb3duIiwicmlnaHQiLCJzb3J0IiwiaW5BcnJheSIsImlzTGFzdCIsImZpcnN0IiwiZ2V0V2luZG93IiwiZGVmYXVsdFZpZXciLCJOb0ZyYW1ld29ya0FkYXB0ZXIiLCJoYW5kbGVycyIsImlzV2luIiwiZXZlbnQiLCJyZW1vdmVMaXN0ZW5lcnMiLCJsaXN0ZW5lcnMiLCJsaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldmVudFBhcnRzIiwiZXZlbnRUeXBlIiwibmFtZXNwYWNlIiwibnMiLCJvd25lckRvY3VtZW50Iiwid2luIiwicGFnZVlPZmZzZXQiLCJjbGllbnRUb3AiLCJwYWdlWE9mZnNldCIsImNsaWVudExlZnQiLCJuc0hhbmRsZXJzIiwibnNUeXBlTGlzdCIsImluY2x1ZGVNYXJnaW4iLCJjb21wdXRlZFN0eWxlIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWVyZ2UiLCJhcnJheSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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YUFBbkIsR0FBbUMsVUFBUzNkLEdBQVQsRUFBYztBQUM3QztBQUNBLFNBQUssSUFBSXdHLElBQVQsSUFBaUJ4RyxHQUFqQixFQUFzQjtBQUNsQixhQUFPLEtBQVA7QUFDSDs7QUFDRCxXQUFPLElBQVA7QUFDSCxHQU5EOztBQVFBdkksVUFBUSxDQUFDMmtCLFFBQVQsQ0FBa0IvVSxJQUFsQixDQUF1QjtBQUNuQmIsUUFBSSxFQUFFLGFBRGE7QUFFbkIwVCxXQUFPLEVBQUVpSDtBQUZVLEdBQXZCO0FBSUExcEIsVUFBUSxDQUFDeWlCLE9BQVQsR0FBbUJpSCxrQkFBbkI7QUFDSCxDQTFLQSxHQUFELEMiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IGFuaW1lIGZyb20gJy4uL3ZlbmRvci9hbmltZS5qcydcclxuaW1wb3J0IHdheXBvaW50IGZyb20gJy4uL3ZlbmRvci9ub2ZyYW1ld29yay53YXlwb2ludHMuanMnXHJcbmNsYXNzIEFuaW1hdGlvbnMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub2RkRXZlbkFuaW1hdGlvbigpXHJcbiAgICB9XHJcblxyXG4gICAgb2RkRXZlbkFuaW1hdGlvbigpIHtcclxuICAgICAgICBjb25zdCBvZGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9kZCcpXHJcbiAgICAgICAgY29uc3QgZXZlbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlbicpXHJcblxyXG4gICAgICAgIGV2ZW5zLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICBuZXcgV2F5cG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5lbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFsxMjUsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMTUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnc3ByaW5nKDEsIDgwLCAxMCwgMCknXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBvZGRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICBuZXcgV2F5cG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5lbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFsxMjUsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ3NwcmluZygxLCA4MCwgMTAsIDApJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAnMTAwJScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbnNcclxuIiwiaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4vdXRpbGl0eVwiO1xyXG5cclxuY2xhc3MgRm9ybXMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZXh0YXJlYVwiKTtcclxuICAgIHRoaXMuc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFwiKTtcclxuICAgIHRoaXMuY3VzdG9tU2VsZWN0RHJvcGRvd24oKTtcclxuICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBldmVudHMoKSB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMudGV4dGFyZWEgIT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLnRleHRhcmVhICE9IG51bGwpIHtcclxuICAgICAgdGhpcy50ZXh0YXJlYS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgdGhpcy5zZXRUZXh0YXJlYUhlaWdodChlbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VGV4dGFyZWFIZWlnaHQoZWwpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGVsO1xyXG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IFV0aWxpdHkudGV4dGFyZWFIZWlnaHQodGFyZ2V0LnZhbHVlKSArIFwicHhcIjtcclxuICB9XHJcblxyXG4gIGN1c3RvbVNlbGVjdERyb3Bkb3duKCkge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdCAhPSBcInVuZGVmaW5lZFwiICYmIHRoaXMuc2VsZWN0ICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5zZWxlY3QuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAvLyBtYWtlIGN1c3RvbSBzZWxlY3QgZWxlbWVudCBoZXJlLlxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1zO1xyXG4iLCJpbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi91dGlsaXR5XCJcclxuXHJcbmNsYXNzIE1vYmlsZU1lbnUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXInKVxyXG4gICAgICAgIHRoaXMudG9nZ2xlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZV0nKVxyXG4gICAgICAgIHRoaXMubWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5hbWVdJylcclxuICAgICAgICB0aGlzLnN1Ym1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3VibWVudS1idG4nKVxyXG4gICAgICAgIHRoaXMuaXNNZW51T3BlbiA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ldmVudHMoKVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZU1lbnUuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlck1lbnUoZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc3VibWVudUJ0bi5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVTdWJNZW51KGUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB0aGlzLmtleVByZXNzKGUpKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB0aGlzLmNoYW5nZUhlYWRlcigpKVxyXG4gICAgfVxyXG5cclxuICAgIHRyaWdnZXJNZW51KGUpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScpXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5hbWU9XCInICsgdGFyZ2V0ICsgJ1wiXScpXHJcbiAgICAgICAgY29uc3Qgb3RoZXJNZW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5hbWVdOm5vdChbZGF0YS1uYW1lPVwiJyArIHRhcmdldCArICdcIl0pJylcclxuXHJcbiAgICAgICAgaWYgKCF0YXJnZXRNZW51LmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgIC8vIENsb3NlIG90aGVyIG9wZW4gbWVudXMgZmlyc3RcclxuICAgICAgICAgICAgb3RoZXJNZW51cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNZW51KGVsKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdGhpcy5vcGVuTWVudSh0YXJnZXRNZW51KVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jbG9zZU1lbnUodGFyZ2V0TWVudSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk1lbnUobWVudSkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gbWVudS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpXHJcbiAgICAgICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRvZ2dsZT1cIicgKyBpZCArICdcIl0nKVxyXG5cclxuICAgICAgICBVdGlsaXR5LmJvZHlTY3JvbGxMb2NrKClcclxuXHJcbiAgICAgICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaXMtc2Nyb2xsZWQnKVxyXG5cclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKVxyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJylcclxuICAgICAgICBtZW51QnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJylcclxuXHJcbiAgICAgICAgdGhpcy5pc01lbnVPcGVuID0gdHJ1ZVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZU1lbnUobWVudSkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gbWVudS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpXHJcbiAgICAgICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRvZ2dsZT1cIicgKyBpZCArICdcIl0nKVxyXG5cclxuICAgICAgICBVdGlsaXR5LmJvZHlTY3JvbGxVbmxvY2soKVxyXG5cclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKVxyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJylcclxuICAgICAgICBtZW51QnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXHJcblxyXG4gICAgICAgIHRoaXMuaXNNZW51T3BlbiA9IGZhbHNlXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVN1Yk1lbnUoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IGJ0biA9IGUuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjb25zdCB0YXJnZXRNZW51ID0gYnRuLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLnN1Ym1lbnUnKVxyXG5cclxuICAgICAgICBpZiAoIXRhcmdldE1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKVxyXG4gICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKVxyXG4gICAgICAgICAgICB0YXJnZXRNZW51LmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKTtcclxuICAgICAgICAgICAgdGFyZ2V0TWVudS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcblxyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdGFyZ2V0TWVudS5jbGllbnRIZWlnaHQgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgdGFyZ2V0TWVudS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRNZW51LnN0eWxlLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgICAgICB0YXJnZXRNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldE1lbnUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG9uY2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJylcclxuICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSB0YXJnZXRNZW51LmNsaWVudEhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgIHRhcmdldE1lbnUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldE1lbnUuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG5cclxuICAgICAgICAgICAgdGFyZ2V0TWVudS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldE1lbnUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG9uY2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBrZXlQcmVzcyhlKSB7XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAyNyAmJiB0aGlzLmlzTWVudU9wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5tZW51LmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1lbnUoZWwpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUhlYWRlcigpIHtcclxuICAgICAgICBsZXQgc2Nyb2xsUG9zID0gd2luZG93LnNjcm9sbFlcclxuICAgICAgICBpZiAoc2Nyb2xsUG9zID49IDc1IHx8IHRoaXMuaXNNZW51T3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QuYWRkKCdpcy1zY3JvbGxlZCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2Nyb2xsZWQnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTWVudVxyXG4iLCJjbGFzcyBTZWFyY2gge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXJfX3NlYXJjaCcpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX190b2dnbGUnKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19pbnB1dCcpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXktLXNlYXJjaCcpXHJcbiAgICAgICAgdGhpcy5pc1NlYXJjaE9wZW4gPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuZXZlbnRzKClcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKSB7XHJcbiAgICAgICAgLy8gT3BlbiBzZWFyY2ggbW9kYWxcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnRvZ2dsZU1vZGFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENsb3NlIHNlYXJjaCBtb2RhbFxyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaE92ZXJsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jbG9zZU1vZGFsKCkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB0aGlzLmtleVByZXNzKGUpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVNb2RhbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3Blbk1vZGFsKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk1vZGFsKCkge1xyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaE1vZGFsLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKVxyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaEZpZWxkLnZhbHVlID0gJydcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2VhcmNoRmllbGQuZm9jdXMoKSwgMzAxKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKVxyXG4gICAgICAgIHRoaXMuaXNTZWFyY2hPcGVuID0gdHJ1ZVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZU1vZGFsKCkge1xyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcclxuICAgICAgICB0aGlzLmlzU2VhcmNoT3BlbiA9IGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAga2V5UHJlc3MoZSkge1xyXG4gICAgICAgIGlmIChlLmtleUNvZGUgPT0gMjcgJiYgdGhpcy5pc1NlYXJjaE9wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiIsImNsYXNzIFV0aWxpdHkge1xyXG5cclxuICAgIHN0YXRpYyBib2R5U2Nyb2xsTG9jaygpIHtcclxuICAgICAgICBjb25zdCBzY3JvbGxZID0gd2luZG93LnNjcm9sbFlcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJ1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gLXNjcm9sbFkgKyAncHgnXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBib2R5U2Nyb2xsVW5sb2NrKCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGUudG9wO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSAnJztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9ICcnO1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBwYXJzZUludChib2R5U3R5bGUgfHwgMCkgKiAtMSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHRleHRhcmVhSGVpZ2h0KHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGxldCBudW1iZXJPZkxpbmVCcmVha3MgPSAodmFsdWUubWF0Y2goL1xcbi9nKSB8fCBbXSkubGVuZ3RoO1xyXG4gICAgICAgICAgICAvLyBtaW4taGVpZ2h0ICsgbGluZXMgeCBsaW5lLWhlaWdodCArIHBhZGRpbmcgKyBib3JkZXJcclxuICAgICAgICAgICAgbGV0IG5ld0hlaWdodCA9IDIwICsgbnVtYmVyT2ZMaW5lQnJlYWtzICogMjAgKyAxMCArIDE7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIG1vYmlsZUNoZWNrKCkge1xyXG4gICAgICAgIC8qIGh0dHA6Ly9kZXRlY3Rtb2JpbGVicm93c2Vycy5jb20vICovXHJcbiAgICAgICAgbGV0IGNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgKGZ1bmN0aW9uKGEpe2lmKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaS50ZXN0KGEpfHwvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsNCkpKSBjaGVjayA9IHRydWU7fSkobmF2aWdhdG9yLnVzZXJBZ2VudHx8bmF2aWdhdG9yLnZlbmRvcnx8d2luZG93Lm9wZXJhKTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBjaGVjaztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFV0aWxpdHlcclxuIiwiaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSAnLi9tb2R1bGVzL21vYmlsZU1lbnUnXHJcbmltcG9ydCBBbmltYXRpb25zIGZyb20gJy4vbW9kdWxlcy9hbmltYXRpb24nXHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9tb2R1bGVzL3NlYXJjaCdcclxuaW1wb3J0IEZvcm1zIGZyb20gJy4vbW9kdWxlcy9mb3JtcydcclxuXHJcbi8vIExvYWQgSlMgd2hlbiBET00gaXMgcmVhZHlcclxuZnVuY3Rpb24gcmFzYW5kZURvbVJlYWR5KGZuKSB7XHJcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICAgIHJldHVybiBmbigpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZuLCBmYWxzZSk7XHJcbn1cclxuXHJcbnJhc2FuZGVEb21SZWFkeShmdW5jdGlvbigpIHtcclxuICAgIC8vIEluc3RhbnRpYXRlIGEgbmV3IG9iamVjdCB1c2luZyBtb2R1bGVzIC8gY2xhc3Nlc1xyXG4gICAgY29uc3QgbW9iaWxlTWVudSA9IG5ldyBNb2JpbGVNZW51KClcclxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb25zKClcclxuICAgIGNvbnN0IHNlYXJjaCA9IG5ldyBTZWFyY2goKVxyXG4gICAgY29uc3QgZm9ybXMgPSBuZXcgRm9ybXMoKVxyXG59KTtcclxuIiwiLypcclxuICogYW5pbWUuanMgdjMuMi4xXHJcbiAqIChjKSAyMDIwIEp1bGlhbiBHYXJuaWVyXHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxyXG4gKiBhbmltZWpzLmNvbVxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIERlZmF1bHRzXHJcblxyXG52YXIgZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MgPSB7XHJcbiAgICB1cGRhdGU6IG51bGwsXHJcbiAgICBiZWdpbjogbnVsbCxcclxuICAgIGxvb3BCZWdpbjogbnVsbCxcclxuICAgIGNoYW5nZUJlZ2luOiBudWxsLFxyXG4gICAgY2hhbmdlOiBudWxsLFxyXG4gICAgY2hhbmdlQ29tcGxldGU6IG51bGwsXHJcbiAgICBsb29wQ29tcGxldGU6IG51bGwsXHJcbiAgICBjb21wbGV0ZTogbnVsbCxcclxuICAgIGxvb3A6IDEsXHJcbiAgICBkaXJlY3Rpb246ICdub3JtYWwnLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICB0aW1lbGluZU9mZnNldDogMFxyXG59O1xyXG5cclxudmFyIGRlZmF1bHRUd2VlblNldHRpbmdzID0ge1xyXG4gICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICBkZWxheTogMCxcclxuICAgIGVuZERlbGF5OiAwLFxyXG4gICAgZWFzaW5nOiAnZWFzZU91dEVsYXN0aWMoMSwgLjUpJyxcclxuICAgIHJvdW5kOiAwXHJcbn07XHJcblxyXG52YXIgdmFsaWRUcmFuc2Zvcm1zID0gWyd0cmFuc2xhdGVYJywgJ3RyYW5zbGF0ZVknLCAndHJhbnNsYXRlWicsICdyb3RhdGUnLCAncm90YXRlWCcsICdyb3RhdGVZJywgJ3JvdGF0ZVonLCAnc2NhbGUnLCAnc2NhbGVYJywgJ3NjYWxlWScsICdzY2FsZVonLCAnc2tldycsICdza2V3WCcsICdza2V3WScsICdwZXJzcGVjdGl2ZScsICdtYXRyaXgnLCAnbWF0cml4M2QnXTtcclxuXHJcbi8vIENhY2hpbmdcclxuXHJcbnZhciBjYWNoZSA9IHtcclxuICAgIENTUzoge30sXHJcbiAgICBzcHJpbmdzOiB7fVxyXG59O1xyXG5cclxuLy8gVXRpbHNcclxuXHJcbmZ1bmN0aW9uIG1pbk1heCh2YWwsIG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsLCBtaW4pLCBtYXgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdHJpbmdDb250YWlucyhzdHIsIHRleHQpIHtcclxuICAgIHJldHVybiBzdHIuaW5kZXhPZih0ZXh0KSA+IC0xO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseUFyZ3VtZW50cyhmdW5jLCBhcmdzKSB7XHJcbiAgICByZXR1cm4gZnVuYy5hcHBseShudWxsLCBhcmdzKTtcclxufVxyXG5cclxudmFyIGlzID0ge1xyXG4gICAgYXJyOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYSk7XHJcbiAgICB9LFxyXG4gICAgb2JqOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0cmluZ0NvbnRhaW5zKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKSwgJ09iamVjdCcpO1xyXG4gICAgfSxcclxuICAgIHB0aDogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiBpcy5vYmooYSkgJiYgYS5oYXNPd25Qcm9wZXJ0eSgndG90YWxMZW5ndGgnKTtcclxuICAgIH0sXHJcbiAgICBzdmc6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gYSBpbnN0YW5jZW9mIFNWR0VsZW1lbnQ7XHJcbiAgICB9LFxyXG4gICAgaW5wOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIGEgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgfSxcclxuICAgIGRvbTogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiBhLm5vZGVUeXBlIHx8IGlzLnN2ZyhhKTtcclxuICAgIH0sXHJcbiAgICBzdHI6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIGEgPT09ICdzdHJpbmcnO1xyXG4gICAgfSxcclxuICAgIGZuYzogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgYSA9PT0gJ2Z1bmN0aW9uJztcclxuICAgIH0sXHJcbiAgICB1bmQ6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIGEgPT09ICd1bmRlZmluZWQnO1xyXG4gICAgfSxcclxuICAgIG5pbDogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiBpcy51bmQoYSkgfHwgYSA9PT0gbnVsbDtcclxuICAgIH0sXHJcbiAgICBoZXg6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gLyheI1swLTlBLUZdezZ9JCl8KF4jWzAtOUEtRl17M30kKS9pLnRlc3QoYSk7XHJcbiAgICB9LFxyXG4gICAgcmdiOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIC9ecmdiLy50ZXN0KGEpO1xyXG4gICAgfSxcclxuICAgIGhzbDogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiAvXmhzbC8udGVzdChhKTtcclxuICAgIH0sXHJcbiAgICBjb2w6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gKGlzLmhleChhKSB8fCBpcy5yZ2IoYSkgfHwgaXMuaHNsKGEpKTtcclxuICAgIH0sXHJcbiAgICBrZXk6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gIWRlZmF1bHRJbnN0YW5jZVNldHRpbmdzLmhhc093blByb3BlcnR5KGEpICYmICFkZWZhdWx0VHdlZW5TZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShhKSAmJiBhICE9PSAndGFyZ2V0cycgJiYgYSAhPT0gJ2tleWZyYW1lcyc7XHJcbiAgICB9LFxyXG59O1xyXG5cclxuLy8gRWFzaW5nc1xyXG5cclxuZnVuY3Rpb24gcGFyc2VFYXNpbmdQYXJhbWV0ZXJzKHN0cmluZykge1xyXG4gICAgdmFyIG1hdGNoID0gL1xcKChbXildKylcXCkvLmV4ZWMoc3RyaW5nKTtcclxuICAgIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdLnNwbGl0KCcsJykubWFwKGZ1bmN0aW9uKHApIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChwKTtcclxuICAgIH0pIDogW107XHJcbn1cclxuXHJcbi8vIFNwcmluZyBzb2x2ZXIgaW5zcGlyZWQgYnkgV2Via2l0IENvcHlyaWdodCDCqSAyMDE2IEFwcGxlIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC4gaHR0cHM6Ly93ZWJraXQub3JnL2RlbW9zL3NwcmluZy9zcHJpbmcuanNcclxuXHJcbmZ1bmN0aW9uIHNwcmluZyhzdHJpbmcsIGR1cmF0aW9uKSB7XHJcblxyXG4gICAgdmFyIHBhcmFtcyA9IHBhcnNlRWFzaW5nUGFyYW1ldGVycyhzdHJpbmcpO1xyXG4gICAgdmFyIG1hc3MgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1swXSkgPyAxIDogcGFyYW1zWzBdLCAuMSwgMTAwKTtcclxuICAgIHZhciBzdGlmZm5lc3MgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1sxXSkgPyAxMDAgOiBwYXJhbXNbMV0sIC4xLCAxMDApO1xyXG4gICAgdmFyIGRhbXBpbmcgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1syXSkgPyAxMCA6IHBhcmFtc1syXSwgLjEsIDEwMCk7XHJcbiAgICB2YXIgdmVsb2NpdHkgPSBtaW5NYXgoaXMudW5kKHBhcmFtc1szXSkgPyAwIDogcGFyYW1zWzNdLCAuMSwgMTAwKTtcclxuICAgIHZhciB3MCA9IE1hdGguc3FydChzdGlmZm5lc3MgLyBtYXNzKTtcclxuICAgIHZhciB6ZXRhID0gZGFtcGluZyAvICgyICogTWF0aC5zcXJ0KHN0aWZmbmVzcyAqIG1hc3MpKTtcclxuICAgIHZhciB3ZCA9IHpldGEgPCAxID8gdzAgKiBNYXRoLnNxcnQoMSAtIHpldGEgKiB6ZXRhKSA6IDA7XHJcbiAgICB2YXIgYSA9IDE7XHJcbiAgICB2YXIgYiA9IHpldGEgPCAxID8gKHpldGEgKiB3MCArIC12ZWxvY2l0eSkgLyB3ZCA6IC12ZWxvY2l0eSArIHcwO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNvbHZlcih0KSB7XHJcbiAgICAgICAgdmFyIHByb2dyZXNzID0gZHVyYXRpb24gPyAoZHVyYXRpb24gKiB0KSAvIDEwMDAgOiB0O1xyXG4gICAgICAgIGlmICh6ZXRhIDwgMSkge1xyXG4gICAgICAgICAgICBwcm9ncmVzcyA9IE1hdGguZXhwKC1wcm9ncmVzcyAqIHpldGEgKiB3MCkgKiAoYSAqIE1hdGguY29zKHdkICogcHJvZ3Jlc3MpICsgYiAqIE1hdGguc2luKHdkICogcHJvZ3Jlc3MpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwcm9ncmVzcyA9IChhICsgYiAqIHByb2dyZXNzKSAqIE1hdGguZXhwKC1wcm9ncmVzcyAqIHcwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHQgPT09IDAgfHwgdCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDEgLSBwcm9ncmVzcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXREdXJhdGlvbigpIHtcclxuICAgICAgICB2YXIgY2FjaGVkID0gY2FjaGUuc3ByaW5nc1tzdHJpbmddO1xyXG4gICAgICAgIGlmIChjYWNoZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGZyYW1lID0gMSAvIDY7XHJcbiAgICAgICAgdmFyIGVsYXBzZWQgPSAwO1xyXG4gICAgICAgIHZhciByZXN0ID0gMDtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBlbGFwc2VkICs9IGZyYW1lO1xyXG4gICAgICAgICAgICBpZiAoc29sdmVyKGVsYXBzZWQpID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXN0Kys7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdCA+PSAxNikge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGR1cmF0aW9uID0gZWxhcHNlZCAqIGZyYW1lICogMTAwMDtcclxuICAgICAgICBjYWNoZS5zcHJpbmdzW3N0cmluZ10gPSBkdXJhdGlvbjtcclxuICAgICAgICByZXR1cm4gZHVyYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGR1cmF0aW9uID8gc29sdmVyIDogZ2V0RHVyYXRpb247XHJcblxyXG59XHJcblxyXG4vLyBCYXNpYyBzdGVwcyBlYXNpbmcgaW1wbGVtZW50YXRpb24gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZnIvZG9jcy9XZWIvQ1NTL3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXHJcblxyXG5mdW5jdGlvbiBzdGVwcyhzdGVwcykge1xyXG4gICAgaWYgKHN0ZXBzID09PSB2b2lkIDApIHN0ZXBzID0gMTA7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKChtaW5NYXgodCwgMC4wMDAwMDEsIDEpKSAqIHN0ZXBzKSAqICgxIC8gc3RlcHMpO1xyXG4gICAgfTtcclxufVxyXG5cclxuLy8gQmV6aWVyRWFzaW5nIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZ1xyXG5cclxudmFyIGJlemllciA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgICB2YXIga1NwbGluZVRhYmxlU2l6ZSA9IDExO1xyXG4gICAgdmFyIGtTYW1wbGVTdGVwU2l6ZSA9IDEuMCAvIChrU3BsaW5lVGFibGVTaXplIC0gMS4wKTtcclxuXHJcbiAgICBmdW5jdGlvbiBBKGFBMSwgYUEyKSB7XHJcbiAgICAgICAgcmV0dXJuIDEuMCAtIDMuMCAqIGFBMiArIDMuMCAqIGFBMVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEIoYUExLCBhQTIpIHtcclxuICAgICAgICByZXR1cm4gMy4wICogYUEyIC0gNi4wICogYUExXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQyhhQTEpIHtcclxuICAgICAgICByZXR1cm4gMy4wICogYUExXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsY0JlemllcihhVCwgYUExLCBhQTIpIHtcclxuICAgICAgICByZXR1cm4gKChBKGFBMSwgYUEyKSAqIGFUICsgQihhQTEsIGFBMikpICogYVQgKyBDKGFBMSkpICogYVRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTbG9wZShhVCwgYUExLCBhQTIpIHtcclxuICAgICAgICByZXR1cm4gMy4wICogQShhQTEsIGFBMikgKiBhVCAqIGFUICsgMi4wICogQihhQTEsIGFBMikgKiBhVCArIEMoYUExKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJpbmFyeVN1YmRpdmlkZShhWCwgYUEsIGFCLCBtWDEsIG1YMikge1xyXG4gICAgICAgIHZhciBjdXJyZW50WCwgY3VycmVudFQsIGkgPSAwO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcclxuICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7XHJcbiAgICAgICAgICAgICAgICBhQiA9IGN1cnJlbnRUO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYUEgPSBjdXJyZW50VDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IDAuMDAwMDAwMSAmJiArK2kgPCAxMCk7XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRUO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBhR3Vlc3NULCBtWDEsIG1YMikge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgKytpKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcclxuICAgICAgICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYmV6aWVyKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xyXG5cclxuICAgICAgICBpZiAoISgwIDw9IG1YMSAmJiBtWDEgPD0gMSAmJiAwIDw9IG1YMiAmJiBtWDIgPD0gMSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2FtcGxlVmFsdWVzID0gbmV3IEZsb2F0MzJBcnJheShrU3BsaW5lVGFibGVTaXplKTtcclxuXHJcbiAgICAgICAgaWYgKG1YMSAhPT0gbVkxIHx8IG1YMiAhPT0gbVkyKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga1NwbGluZVRhYmxlU2l6ZTsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0VEZvclgoYVgpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMDtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTYW1wbGUgPSAxO1xyXG4gICAgICAgICAgICB2YXIgbGFzdFNhbXBsZSA9IGtTcGxpbmVUYWJsZVNpemUgLSAxO1xyXG5cclxuICAgICAgICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT09IGxhc3RTYW1wbGUgJiYgc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcclxuICAgICAgICAgICAgICAgIGludGVydmFsU3RhcnQgKz0ga1NhbXBsZVN0ZXBTaXplO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAtLWN1cnJlbnRTYW1wbGU7XHJcblxyXG4gICAgICAgICAgICB2YXIgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XHJcbiAgICAgICAgICAgIHZhciBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIGtTYW1wbGVTdGVwU2l6ZTtcclxuICAgICAgICAgICAgdmFyIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSAwLjAwMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQsIG1YMSwgbVgyKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGd1ZXNzRm9yVDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBrU2FtcGxlU3RlcFNpemUsIG1YMSwgbVgyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbih4KSB7XHJcbiAgICAgICAgICAgIGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHggPT09IDAgfHwgeCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNhbGNCZXppZXIoZ2V0VEZvclgoeCksIG1ZMSwgbVkyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBiZXppZXI7XHJcblxyXG59KSgpO1xyXG5cclxudmFyIHBlbm5lciA9IChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvLyBCYXNlZCBvbiBqUXVlcnkgVUkncyBpbXBsZW1lbmF0aW9uIG9mIGVhc2luZyBlcXVhdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyIChodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nKVxyXG5cclxuICAgIHZhciBlYXNlcyA9IHtcclxuICAgICAgICBsaW5lYXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgZnVuY3Rpb25FYXNpbmdzID0ge1xyXG4gICAgICAgIFNpbmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDEgLSBNYXRoLmNvcyh0ICogTWF0aC5QSSAvIDIpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQ2lyYzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMSAtIE1hdGguc3FydCgxIC0gdCAqIHQpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdCAqIHQgKiAoMyAqIHQgLSAyKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIEJvdW5jZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG93MiwgYiA9IDQ7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAodCA8ICgocG93MiA9IE1hdGgucG93KDIsIC0tYikpIC0gMSkgLyAxMSkge31cclxuICAgICAgICAgICAgICAgIHJldHVybiAxIC8gTWF0aC5wb3coNCwgMyAtIGIpIC0gNy41NjI1ICogTWF0aC5wb3coKHBvdzIgKiAzIC0gMikgLyAyMiAtIHQsIDIpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBFbGFzdGljOiBmdW5jdGlvbihhbXBsaXR1ZGUsIHBlcmlvZCkge1xyXG4gICAgICAgICAgICBpZiAoYW1wbGl0dWRlID09PSB2b2lkIDApIGFtcGxpdHVkZSA9IDE7XHJcbiAgICAgICAgICAgIGlmIChwZXJpb2QgPT09IHZvaWQgMCkgcGVyaW9kID0gLjU7XHJcblxyXG4gICAgICAgICAgICB2YXIgYSA9IG1pbk1heChhbXBsaXR1ZGUsIDEsIDEwKTtcclxuICAgICAgICAgICAgdmFyIHAgPSBtaW5NYXgocGVyaW9kLCAuMSwgMik7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHQgPT09IDAgfHwgdCA9PT0gMSkgPyB0IDpcclxuICAgICAgICAgICAgICAgICAgICAtYSAqIE1hdGgucG93KDIsIDEwICogKHQgLSAxKSkgKiBNYXRoLnNpbigoKCh0IC0gMSkgLSAocCAvIChNYXRoLlBJICogMikgKiBNYXRoLmFzaW4oMSAvIGEpKSkgKiAoTWF0aC5QSSAqIDIpKSAvIHApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFzZUVhc2luZ3MgPSBbJ1F1YWQnLCAnQ3ViaWMnLCAnUXVhcnQnLCAnUXVpbnQnLCAnRXhwbyddO1xyXG5cclxuICAgIGJhc2VFYXNpbmdzLmZvckVhY2goZnVuY3Rpb24obmFtZSwgaSkge1xyXG4gICAgICAgIGZ1bmN0aW9uRWFzaW5nc1tuYW1lXSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KHQsIGkgKyAyKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgT2JqZWN0LmtleXMoZnVuY3Rpb25FYXNpbmdzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgICB2YXIgZWFzZUluID0gZnVuY3Rpb25FYXNpbmdzW25hbWVdO1xyXG4gICAgICAgIGVhc2VzWydlYXNlSW4nICsgbmFtZV0gPSBlYXNlSW47XHJcbiAgICAgICAgZWFzZXNbJ2Vhc2VPdXQnICsgbmFtZV0gPSBmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMSAtIGVhc2VJbihhLCBiKSgxIC0gdCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlYXNlc1snZWFzZUluT3V0JyArIG5hbWVdID0gZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHQgPCAwLjUgPyBlYXNlSW4oYSwgYikodCAqIDIpIC8gMiA6XHJcbiAgICAgICAgICAgICAgICAgICAgMSAtIGVhc2VJbihhLCBiKSh0ICogLTIgKyAyKSAvIDI7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlYXNlc1snZWFzZU91dEluJyArIG5hbWVdID0gZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHQgPCAwLjUgPyAoMSAtIGVhc2VJbihhLCBiKSgxIC0gdCAqIDIpKSAvIDIgOlxyXG4gICAgICAgICAgICAgICAgICAgIChlYXNlSW4oYSwgYikodCAqIDIgLSAxKSArIDEpIC8gMjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGVhc2VzO1xyXG5cclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIHBhcnNlRWFzaW5ncyhlYXNpbmcsIGR1cmF0aW9uKSB7XHJcbiAgICBpZiAoaXMuZm5jKGVhc2luZykpIHtcclxuICAgICAgICByZXR1cm4gZWFzaW5nO1xyXG4gICAgfVxyXG4gICAgdmFyIG5hbWUgPSBlYXNpbmcuc3BsaXQoJygnKVswXTtcclxuICAgIHZhciBlYXNlID0gcGVubmVyW25hbWVdO1xyXG4gICAgdmFyIGFyZ3MgPSBwYXJzZUVhc2luZ1BhcmFtZXRlcnMoZWFzaW5nKTtcclxuICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgIGNhc2UgJ3NwcmluZyc6XHJcbiAgICAgICAgICAgIHJldHVybiBzcHJpbmcoZWFzaW5nLCBkdXJhdGlvbik7XHJcbiAgICAgICAgY2FzZSAnY3ViaWNCZXppZXInOlxyXG4gICAgICAgICAgICByZXR1cm4gYXBwbHlBcmd1bWVudHMoYmV6aWVyLCBhcmdzKTtcclxuICAgICAgICBjYXNlICdzdGVwcyc6XHJcbiAgICAgICAgICAgIHJldHVybiBhcHBseUFyZ3VtZW50cyhzdGVwcywgYXJncyk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIGFwcGx5QXJndW1lbnRzKGVhc2UsIGFyZ3MpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBTdHJpbmdzXHJcblxyXG5mdW5jdGlvbiBzZWxlY3RTdHJpbmcoc3RyKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc3RyKTtcclxuICAgICAgICByZXR1cm4gbm9kZXM7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBcnJheXNcclxuXHJcbmZ1bmN0aW9uIGZpbHRlckFycmF5KGFyciwgY2FsbGJhY2spIHtcclxuICAgIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xyXG4gICAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHMubGVuZ3RoID49IDIgPyBhcmd1bWVudHNbMV0gOiB2b2lkIDA7XHJcbiAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgaW4gYXJyKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWwgPSBhcnJbaV07XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHZhbCwgaSwgYXJyKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZsYXR0ZW5BcnJheShhcnIpIHtcclxuICAgIHJldHVybiBhcnIucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYS5jb25jYXQoaXMuYXJyKGIpID8gZmxhdHRlbkFycmF5KGIpIDogYik7XHJcbiAgICB9LCBbXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvQXJyYXkobykge1xyXG4gICAgaWYgKGlzLmFycihvKSkge1xyXG4gICAgICAgIHJldHVybiBvO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzLnN0cihvKSkge1xyXG4gICAgICAgIG8gPSBzZWxlY3RTdHJpbmcobykgfHwgbztcclxuICAgIH1cclxuICAgIGlmIChvIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgbyBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwobyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW29dO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcnJheUNvbnRhaW5zKGFyciwgdmFsKSB7XHJcbiAgICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiBhID09PSB2YWw7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gT2JqZWN0c1xyXG5cclxuZnVuY3Rpb24gY2xvbmVPYmplY3Qobykge1xyXG4gICAgdmFyIGNsb25lID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIG8pIHtcclxuICAgICAgICBjbG9uZVtwXSA9IG9bcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xvbmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VPYmplY3RQcm9wcyhvMSwgbzIpIHtcclxuICAgIHZhciBvID0gY2xvbmVPYmplY3QobzEpO1xyXG4gICAgZm9yICh2YXIgcCBpbiBvMSkge1xyXG4gICAgICAgIG9bcF0gPSBvMi5oYXNPd25Qcm9wZXJ0eShwKSA/IG8yW3BdIDogbzFbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbztcclxufVxyXG5cclxuZnVuY3Rpb24gbWVyZ2VPYmplY3RzKG8xLCBvMikge1xyXG4gICAgdmFyIG8gPSBjbG9uZU9iamVjdChvMSk7XHJcbiAgICBmb3IgKHZhciBwIGluIG8yKSB7XHJcbiAgICAgICAgb1twXSA9IGlzLnVuZChvMVtwXSkgPyBvMltwXSA6IG8xW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG87XHJcbn1cclxuXHJcbi8vIENvbG9yc1xyXG5cclxuZnVuY3Rpb24gcmdiVG9SZ2JhKHJnYlZhbHVlKSB7XHJcbiAgICB2YXIgcmdiID0gL3JnYlxcKChcXGQrLFxccypbXFxkXSssXFxzKltcXGRdKylcXCkvZy5leGVjKHJnYlZhbHVlKTtcclxuICAgIHJldHVybiByZ2IgPyAoXCJyZ2JhKFwiICsgKHJnYlsxXSkgKyBcIiwxKVwiKSA6IHJnYlZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoZXhUb1JnYmEoaGV4VmFsdWUpIHtcclxuICAgIHZhciByZ3ggPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pO1xyXG4gICAgdmFyIGhleCA9IGhleFZhbHVlLnJlcGxhY2Uocmd4LCBmdW5jdGlvbihtLCByLCBnLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIHIgKyByICsgZyArIGcgKyBiICsgYjtcclxuICAgIH0pO1xyXG4gICAgdmFyIHJnYiA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xyXG4gICAgdmFyIHIgPSBwYXJzZUludChyZ2JbMV0sIDE2KTtcclxuICAgIHZhciBnID0gcGFyc2VJbnQocmdiWzJdLCAxNik7XHJcbiAgICB2YXIgYiA9IHBhcnNlSW50KHJnYlszXSwgMTYpO1xyXG4gICAgcmV0dXJuIChcInJnYmEoXCIgKyByICsgXCIsXCIgKyBnICsgXCIsXCIgKyBiICsgXCIsMSlcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhzbFRvUmdiYShoc2xWYWx1ZSkge1xyXG4gICAgdmFyIGhzbCA9IC9oc2xcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSVcXCkvZy5leGVjKGhzbFZhbHVlKSB8fCAvaHNsYVxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspXFwpL2cuZXhlYyhoc2xWYWx1ZSk7XHJcbiAgICB2YXIgaCA9IHBhcnNlSW50KGhzbFsxXSwgMTApIC8gMzYwO1xyXG4gICAgdmFyIHMgPSBwYXJzZUludChoc2xbMl0sIDEwKSAvIDEwMDtcclxuICAgIHZhciBsID0gcGFyc2VJbnQoaHNsWzNdLCAxMCkgLyAxMDA7XHJcbiAgICB2YXIgYSA9IGhzbFs0XSB8fCAxO1xyXG5cclxuICAgIGZ1bmN0aW9uIGh1ZTJyZ2IocCwgcSwgdCkge1xyXG4gICAgICAgIGlmICh0IDwgMCkge1xyXG4gICAgICAgICAgICB0ICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0ID4gMSkge1xyXG4gICAgICAgICAgICB0IC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0IDwgMSAvIDYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0IDwgMSAvIDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0IDwgMiAvIDMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHAgKyAocSAtIHApICogKDIgLyAzIC0gdCkgKiA2O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuICAgIHZhciByLCBnLCBiO1xyXG4gICAgaWYgKHMgPT0gMCkge1xyXG4gICAgICAgIHIgPSBnID0gYiA9IGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcclxuICAgICAgICB2YXIgcCA9IDIgKiBsIC0gcTtcclxuICAgICAgICByID0gaHVlMnJnYihwLCBxLCBoICsgMSAvIDMpO1xyXG4gICAgICAgIGcgPSBodWUycmdiKHAsIHEsIGgpO1xyXG4gICAgICAgIGIgPSBodWUycmdiKHAsIHEsIGggLSAxIC8gMyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFwicmdiYShcIiArIChyICogMjU1KSArIFwiLFwiICsgKGcgKiAyNTUpICsgXCIsXCIgKyAoYiAqIDI1NSkgKyBcIixcIiArIGEgKyBcIilcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbG9yVG9SZ2IodmFsKSB7XHJcbiAgICBpZiAoaXMucmdiKHZhbCkpIHtcclxuICAgICAgICByZXR1cm4gcmdiVG9SZ2JhKHZhbCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXMuaGV4KHZhbCkpIHtcclxuICAgICAgICByZXR1cm4gaGV4VG9SZ2JhKHZhbCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXMuaHNsKHZhbCkpIHtcclxuICAgICAgICByZXR1cm4gaHNsVG9SZ2JhKHZhbCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFVuaXRzXHJcblxyXG5mdW5jdGlvbiBnZXRVbml0KHZhbCkge1xyXG4gICAgdmFyIHNwbGl0ID0gL1srLV0/XFxkKlxcLj9cXGQrKD86XFwuXFxkKyk/KD86W2VFXVsrLV0/XFxkKyk/KCV8cHh8cHR8ZW18cmVtfGlufGNtfG1tfGV4fGNofHBjfHZ3fHZofHZtaW58dm1heHxkZWd8cmFkfHR1cm4pPyQvLmV4ZWModmFsKTtcclxuICAgIGlmIChzcGxpdCkge1xyXG4gICAgICAgIHJldHVybiBzcGxpdFsxXTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtVW5pdChwcm9wTmFtZSkge1xyXG4gICAgaWYgKHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAndHJhbnNsYXRlJykgfHwgcHJvcE5hbWUgPT09ICdwZXJzcGVjdGl2ZScpIHtcclxuICAgICAgICByZXR1cm4gJ3B4JztcclxuICAgIH1cclxuICAgIGlmIChzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3JvdGF0ZScpIHx8IHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAnc2tldycpKSB7XHJcbiAgICAgICAgcmV0dXJuICdkZWcnO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBWYWx1ZXNcclxuXHJcbmZ1bmN0aW9uIGdldEZ1bmN0aW9uVmFsdWUodmFsLCBhbmltYXRhYmxlKSB7XHJcbiAgICBpZiAoIWlzLmZuYyh2YWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWwoYW5pbWF0YWJsZS50YXJnZXQsIGFuaW1hdGFibGUuaWQsIGFuaW1hdGFibGUudG90YWwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGUoZWwsIHByb3ApIHtcclxuICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUocHJvcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIHtcclxuICAgIHZhciB2YWx1ZVVuaXQgPSBnZXRVbml0KHZhbHVlKTtcclxuICAgIGlmIChhcnJheUNvbnRhaW5zKFt1bml0LCAnZGVnJywgJ3JhZCcsICd0dXJuJ10sIHZhbHVlVW5pdCkpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICB2YXIgY2FjaGVkID0gY2FjaGUuQ1NTW3ZhbHVlICsgdW5pdF07XHJcbiAgICBpZiAoIWlzLnVuZChjYWNoZWQpKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhY2hlZDtcclxuICAgIH1cclxuICAgIHZhciBiYXNlbGluZSA9IDEwMDtcclxuICAgIHZhciB0ZW1wRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsLnRhZ05hbWUpO1xyXG4gICAgdmFyIHBhcmVudEVsID0gKGVsLnBhcmVudE5vZGUgJiYgKGVsLnBhcmVudE5vZGUgIT09IGRvY3VtZW50KSkgPyBlbC5wYXJlbnROb2RlIDogZG9jdW1lbnQuYm9keTtcclxuICAgIHBhcmVudEVsLmFwcGVuZENoaWxkKHRlbXBFbCk7XHJcbiAgICB0ZW1wRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgdGVtcEVsLnN0eWxlLndpZHRoID0gYmFzZWxpbmUgKyB1bml0O1xyXG4gICAgdmFyIGZhY3RvciA9IGJhc2VsaW5lIC8gdGVtcEVsLm9mZnNldFdpZHRoO1xyXG4gICAgcGFyZW50RWwucmVtb3ZlQ2hpbGQodGVtcEVsKTtcclxuICAgIHZhciBjb252ZXJ0ZWRVbml0ID0gZmFjdG9yICogcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICBjYWNoZS5DU1NbdmFsdWUgKyB1bml0XSA9IGNvbnZlcnRlZFVuaXQ7XHJcbiAgICByZXR1cm4gY29udmVydGVkVW5pdDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q1NTVmFsdWUoZWwsIHByb3AsIHVuaXQpIHtcclxuICAgIGlmIChwcm9wIGluIGVsLnN0eWxlKSB7XHJcbiAgICAgICAgdmFyIHVwcGVyY2FzZVByb3BOYW1lID0gcHJvcC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGVsLnN0eWxlW3Byb3BdIHx8IGdldENvbXB1dGVkU3R5bGUoZWwpLmdldFByb3BlcnR5VmFsdWUodXBwZXJjYXNlUHJvcE5hbWUpIHx8ICcwJztcclxuICAgICAgICByZXR1cm4gdW5pdCA/IGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIDogdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFuaW1hdGlvblR5cGUoZWwsIHByb3ApIHtcclxuICAgIGlmIChpcy5kb20oZWwpICYmICFpcy5pbnAoZWwpICYmICghaXMubmlsKGdldEF0dHJpYnV0ZShlbCwgcHJvcCkpIHx8IChpcy5zdmcoZWwpICYmIGVsW3Byb3BdKSkpIHtcclxuICAgICAgICByZXR1cm4gJ2F0dHJpYnV0ZSc7XHJcbiAgICB9XHJcbiAgICBpZiAoaXMuZG9tKGVsKSAmJiBhcnJheUNvbnRhaW5zKHZhbGlkVHJhbnNmb3JtcywgcHJvcCkpIHtcclxuICAgICAgICByZXR1cm4gJ3RyYW5zZm9ybSc7XHJcbiAgICB9XHJcbiAgICBpZiAoaXMuZG9tKGVsKSAmJiAocHJvcCAhPT0gJ3RyYW5zZm9ybScgJiYgZ2V0Q1NTVmFsdWUoZWwsIHByb3ApKSkge1xyXG4gICAgICAgIHJldHVybiAnY3NzJztcclxuICAgIH1cclxuICAgIGlmIChlbFtwcm9wXSAhPSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuICdvYmplY3QnO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFbGVtZW50VHJhbnNmb3JtcyhlbCkge1xyXG4gICAgaWYgKCFpcy5kb20oZWwpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHN0ciA9IGVsLnN0eWxlLnRyYW5zZm9ybSB8fCAnJztcclxuICAgIHZhciByZWcgPSAvKFxcdyspXFwoKFteKV0qKVxcKS9nO1xyXG4gICAgdmFyIHRyYW5zZm9ybXMgPSBuZXcgTWFwKCk7XHJcbiAgICB2YXIgbTtcclxuICAgIHdoaWxlIChtID0gcmVnLmV4ZWMoc3RyKSkge1xyXG4gICAgICAgIHRyYW5zZm9ybXMuc2V0KG1bMV0sIG1bMl0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRyYW5zZm9ybXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRyYW5zZm9ybVZhbHVlKGVsLCBwcm9wTmFtZSwgYW5pbWF0YWJsZSwgdW5pdCkge1xyXG4gICAgdmFyIGRlZmF1bHRWYWwgPSBzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3NjYWxlJykgPyAxIDogMCArIGdldFRyYW5zZm9ybVVuaXQocHJvcE5hbWUpO1xyXG4gICAgdmFyIHZhbHVlID0gZ2V0RWxlbWVudFRyYW5zZm9ybXMoZWwpLmdldChwcm9wTmFtZSkgfHwgZGVmYXVsdFZhbDtcclxuICAgIGlmIChhbmltYXRhYmxlKSB7XHJcbiAgICAgICAgYW5pbWF0YWJsZS50cmFuc2Zvcm1zLmxpc3Quc2V0KHByb3BOYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgYW5pbWF0YWJsZS50cmFuc2Zvcm1zWydsYXN0J10gPSBwcm9wTmFtZTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bml0ID8gY29udmVydFB4VG9Vbml0KGVsLCB2YWx1ZSwgdW5pdCkgOiB2YWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZSh0YXJnZXQsIHByb3BOYW1lLCB1bml0LCBhbmltYXRhYmxlKSB7XHJcbiAgICBzd2l0Y2ggKGdldEFuaW1hdGlvblR5cGUodGFyZ2V0LCBwcm9wTmFtZSkpIHtcclxuICAgICAgICBjYXNlICd0cmFuc2Zvcm0nOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0VHJhbnNmb3JtVmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgYW5pbWF0YWJsZSwgdW5pdCk7XHJcbiAgICAgICAgY2FzZSAnY3NzJzpcclxuICAgICAgICAgICAgcmV0dXJuIGdldENTU1ZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIHVuaXQpO1xyXG4gICAgICAgIGNhc2UgJ2F0dHJpYnV0ZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRBdHRyaWJ1dGUodGFyZ2V0LCBwcm9wTmFtZSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wTmFtZV0gfHwgMDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVsYXRpdmVWYWx1ZSh0bywgZnJvbSkge1xyXG4gICAgdmFyIG9wZXJhdG9yID0gL14oXFwqPXxcXCs9fC09KS8uZXhlYyh0byk7XHJcbiAgICBpZiAoIW9wZXJhdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvO1xyXG4gICAgfVxyXG4gICAgdmFyIHUgPSBnZXRVbml0KHRvKSB8fCAwO1xyXG4gICAgdmFyIHggPSBwYXJzZUZsb2F0KGZyb20pO1xyXG4gICAgdmFyIHkgPSBwYXJzZUZsb2F0KHRvLnJlcGxhY2Uob3BlcmF0b3JbMF0sICcnKSk7XHJcbiAgICBzd2l0Y2ggKG9wZXJhdG9yWzBdWzBdKSB7XHJcbiAgICAgICAgY2FzZSAnKyc6XHJcbiAgICAgICAgICAgIHJldHVybiB4ICsgeSArIHU7XHJcbiAgICAgICAgY2FzZSAnLSc6XHJcbiAgICAgICAgICAgIHJldHVybiB4IC0geSArIHU7XHJcbiAgICAgICAgY2FzZSAnKic6XHJcbiAgICAgICAgICAgIHJldHVybiB4ICogeSArIHU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlVmFsdWUodmFsLCB1bml0KSB7XHJcbiAgICBpZiAoaXMuY29sKHZhbCkpIHtcclxuICAgICAgICByZXR1cm4gY29sb3JUb1JnYih2YWwpO1xyXG4gICAgfVxyXG4gICAgaWYgKC9cXHMvZy50ZXN0KHZhbCkpIHtcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG4gICAgdmFyIG9yaWdpbmFsVW5pdCA9IGdldFVuaXQodmFsKTtcclxuICAgIHZhciB1bml0TGVzcyA9IG9yaWdpbmFsVW5pdCA/IHZhbC5zdWJzdHIoMCwgdmFsLmxlbmd0aCAtIG9yaWdpbmFsVW5pdC5sZW5ndGgpIDogdmFsO1xyXG4gICAgaWYgKHVuaXQpIHtcclxuICAgICAgICByZXR1cm4gdW5pdExlc3MgKyB1bml0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuaXRMZXNzO1xyXG59XHJcblxyXG4vLyBnZXRUb3RhbExlbmd0aCgpIGVxdWl2YWxlbnQgZm9yIGNpcmNsZSwgcmVjdCwgcG9seWxpbmUsIHBvbHlnb24gYW5kIGxpbmUgc2hhcGVzXHJcbi8vIGFkYXB0ZWQgZnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9TZWJMYW1ibGEvM2UwNTUwYzQ5NmMyMzY3MDk3NDRcclxuXHJcbmZ1bmN0aW9uIGdldERpc3RhbmNlKHAxLCBwMikge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDaXJjbGVMZW5ndGgoZWwpIHtcclxuICAgIHJldHVybiBNYXRoLlBJICogMiAqIGdldEF0dHJpYnV0ZShlbCwgJ3InKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVjdExlbmd0aChlbCkge1xyXG4gICAgcmV0dXJuIChnZXRBdHRyaWJ1dGUoZWwsICd3aWR0aCcpICogMikgKyAoZ2V0QXR0cmlidXRlKGVsLCAnaGVpZ2h0JykgKiAyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGluZUxlbmd0aChlbCkge1xyXG4gICAgcmV0dXJuIGdldERpc3RhbmNlKHtcclxuICAgICAgICB4OiBnZXRBdHRyaWJ1dGUoZWwsICd4MScpLFxyXG4gICAgICAgIHk6IGdldEF0dHJpYnV0ZShlbCwgJ3kxJylcclxuICAgIH0sIHtcclxuICAgICAgICB4OiBnZXRBdHRyaWJ1dGUoZWwsICd4MicpLFxyXG4gICAgICAgIHk6IGdldEF0dHJpYnV0ZShlbCwgJ3kyJylcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQb2x5bGluZUxlbmd0aChlbCkge1xyXG4gICAgdmFyIHBvaW50cyA9IGVsLnBvaW50cztcclxuICAgIHZhciB0b3RhbExlbmd0aCA9IDA7XHJcbiAgICB2YXIgcHJldmlvdXNQb3M7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5udW1iZXJPZkl0ZW1zOyBpKyspIHtcclxuICAgICAgICB2YXIgY3VycmVudFBvcyA9IHBvaW50cy5nZXRJdGVtKGkpO1xyXG4gICAgICAgIGlmIChpID4gMCkge1xyXG4gICAgICAgICAgICB0b3RhbExlbmd0aCArPSBnZXREaXN0YW5jZShwcmV2aW91c1BvcywgY3VycmVudFBvcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZXZpb3VzUG9zID0gY3VycmVudFBvcztcclxuICAgIH1cclxuICAgIHJldHVybiB0b3RhbExlbmd0aDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UG9seWdvbkxlbmd0aChlbCkge1xyXG4gICAgdmFyIHBvaW50cyA9IGVsLnBvaW50cztcclxuICAgIHJldHVybiBnZXRQb2x5bGluZUxlbmd0aChlbCkgKyBnZXREaXN0YW5jZShwb2ludHMuZ2V0SXRlbShwb2ludHMubnVtYmVyT2ZJdGVtcyAtIDEpLCBwb2ludHMuZ2V0SXRlbSgwKSk7XHJcbn1cclxuXHJcbi8vIFBhdGggYW5pbWF0aW9uXHJcblxyXG5mdW5jdGlvbiBnZXRUb3RhbExlbmd0aChlbCkge1xyXG4gICAgaWYgKGVsLmdldFRvdGFsTGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsLmdldFRvdGFsTGVuZ3RoKCk7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgIGNhc2UgJ2NpcmNsZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRDaXJjbGVMZW5ndGgoZWwpO1xyXG4gICAgICAgIGNhc2UgJ3JlY3QnOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0UmVjdExlbmd0aChlbCk7XHJcbiAgICAgICAgY2FzZSAnbGluZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRMaW5lTGVuZ3RoKGVsKTtcclxuICAgICAgICBjYXNlICdwb2x5bGluZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRQb2x5bGluZUxlbmd0aChlbCk7XHJcbiAgICAgICAgY2FzZSAncG9seWdvbic6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRQb2x5Z29uTGVuZ3RoKGVsKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RGFzaG9mZnNldChlbCkge1xyXG4gICAgdmFyIHBhdGhMZW5ndGggPSBnZXRUb3RhbExlbmd0aChlbCk7XHJcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBwYXRoTGVuZ3RoKTtcclxuICAgIHJldHVybiBwYXRoTGVuZ3RoO1xyXG59XHJcblxyXG4vLyBNb3Rpb24gcGF0aFxyXG5cclxuZnVuY3Rpb24gZ2V0UGFyZW50U3ZnRWwoZWwpIHtcclxuICAgIHZhciBwYXJlbnRFbCA9IGVsLnBhcmVudE5vZGU7XHJcbiAgICB3aGlsZSAoaXMuc3ZnKHBhcmVudEVsKSkge1xyXG4gICAgICAgIGlmICghaXMuc3ZnKHBhcmVudEVsLnBhcmVudE5vZGUpKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJlbnRFbCA9IHBhcmVudEVsLnBhcmVudE5vZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyZW50RWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhcmVudFN2ZyhwYXRoRWwsIHN2Z0RhdGEpIHtcclxuICAgIHZhciBzdmcgPSBzdmdEYXRhIHx8IHt9O1xyXG4gICAgdmFyIHBhcmVudFN2Z0VsID0gc3ZnLmVsIHx8IGdldFBhcmVudFN2Z0VsKHBhdGhFbCk7XHJcbiAgICB2YXIgcmVjdCA9IHBhcmVudFN2Z0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgdmFyIHZpZXdCb3hBdHRyID0gZ2V0QXR0cmlidXRlKHBhcmVudFN2Z0VsLCAndmlld0JveCcpO1xyXG4gICAgdmFyIHdpZHRoID0gcmVjdC53aWR0aDtcclxuICAgIHZhciBoZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgIHZhciB2aWV3Qm94ID0gc3ZnLnZpZXdCb3ggfHwgKHZpZXdCb3hBdHRyID8gdmlld0JveEF0dHIuc3BsaXQoJyAnKSA6IFswLCAwLCB3aWR0aCwgaGVpZ2h0XSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVsOiBwYXJlbnRTdmdFbCxcclxuICAgICAgICB2aWV3Qm94OiB2aWV3Qm94LFxyXG4gICAgICAgIHg6IHZpZXdCb3hbMF0gLyAxLFxyXG4gICAgICAgIHk6IHZpZXdCb3hbMV0gLyAxLFxyXG4gICAgICAgIHc6IHdpZHRoLFxyXG4gICAgICAgIGg6IGhlaWdodCxcclxuICAgICAgICB2Vzogdmlld0JveFsyXSxcclxuICAgICAgICB2SDogdmlld0JveFszXVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYXRoKHBhdGgsIHBlcmNlbnQpIHtcclxuICAgIHZhciBwYXRoRWwgPSBpcy5zdHIocGF0aCkgPyBzZWxlY3RTdHJpbmcocGF0aClbMF0gOiBwYXRoO1xyXG4gICAgdmFyIHAgPSBwZXJjZW50IHx8IDEwMDtcclxuICAgIHJldHVybiBmdW5jdGlvbihwcm9wZXJ0eSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgZWw6IHBhdGhFbCxcclxuICAgICAgICAgICAgc3ZnOiBnZXRQYXJlbnRTdmcocGF0aEVsKSxcclxuICAgICAgICAgICAgdG90YWxMZW5ndGg6IGdldFRvdGFsTGVuZ3RoKHBhdGhFbCkgKiAocCAvIDEwMClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhdGhQcm9ncmVzcyhwYXRoLCBwcm9ncmVzcywgaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHKSB7XHJcbiAgICBmdW5jdGlvbiBwb2ludChvZmZzZXQpIHtcclxuICAgICAgICBpZiAob2Zmc2V0ID09PSB2b2lkIDApIG9mZnNldCA9IDA7XHJcblxyXG4gICAgICAgIHZhciBsID0gcHJvZ3Jlc3MgKyBvZmZzZXQgPj0gMSA/IHByb2dyZXNzICsgb2Zmc2V0IDogMDtcclxuICAgICAgICByZXR1cm4gcGF0aC5lbC5nZXRQb2ludEF0TGVuZ3RoKGwpO1xyXG4gICAgfVxyXG4gICAgdmFyIHN2ZyA9IGdldFBhcmVudFN2ZyhwYXRoLmVsLCBwYXRoLnN2Zyk7XHJcbiAgICB2YXIgcCA9IHBvaW50KCk7XHJcbiAgICB2YXIgcDAgPSBwb2ludCgtMSk7XHJcbiAgICB2YXIgcDEgPSBwb2ludCgrMSk7XHJcbiAgICB2YXIgc2NhbGVYID0gaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHID8gMSA6IHN2Zy53IC8gc3ZnLnZXO1xyXG4gICAgdmFyIHNjYWxlWSA9IGlzUGF0aFRhcmdldEluc2lkZVNWRyA/IDEgOiBzdmcuaCAvIHN2Zy52SDtcclxuICAgIHN3aXRjaCAocGF0aC5wcm9wZXJ0eSkge1xyXG4gICAgICAgIGNhc2UgJ3gnOlxyXG4gICAgICAgICAgICByZXR1cm4gKHAueCAtIHN2Zy54KSAqIHNjYWxlWDtcclxuICAgICAgICBjYXNlICd5JzpcclxuICAgICAgICAgICAgcmV0dXJuIChwLnkgLSBzdmcueSkgKiBzY2FsZVk7XHJcbiAgICAgICAgY2FzZSAnYW5nbGUnOlxyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5hdGFuMihwMS55IC0gcDAueSwgcDEueCAtIHAwLngpICogMTgwIC8gTWF0aC5QSTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gRGVjb21wb3NlIHZhbHVlXHJcblxyXG5mdW5jdGlvbiBkZWNvbXBvc2VWYWx1ZSh2YWwsIHVuaXQpIHtcclxuICAgIC8vIGNvbnN0IHJneCA9IC8tP1xcZCpcXC4/XFxkKy9nOyAvLyBoYW5kbGVzIGJhc2ljIG51bWJlcnNcclxuICAgIC8vIGNvbnN0IHJneCA9IC9bKy1dP1xcZCsoPzpcXC5cXGQrKT8oPzpbZUVdWystXT9cXGQrKT8vZzsgLy8gaGFuZGxlcyBleHBvbmVudHMgbm90YXRpb25cclxuICAgIHZhciByZ3ggPSAvWystXT9cXGQqXFwuP1xcZCsoPzpcXC5cXGQrKT8oPzpbZUVdWystXT9cXGQrKT8vZzsgLy8gaGFuZGxlcyBleHBvbmVudHMgbm90YXRpb25cclxuICAgIHZhciB2YWx1ZSA9IHZhbGlkYXRlVmFsdWUoKGlzLnB0aCh2YWwpID8gdmFsLnRvdGFsTGVuZ3RoIDogdmFsKSwgdW5pdCkgKyAnJztcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgb3JpZ2luYWw6IHZhbHVlLFxyXG4gICAgICAgIG51bWJlcnM6IHZhbHVlLm1hdGNoKHJneCkgPyB2YWx1ZS5tYXRjaChyZ3gpLm1hcChOdW1iZXIpIDogWzBdLFxyXG4gICAgICAgIHN0cmluZ3M6IChpcy5zdHIodmFsKSB8fCB1bml0KSA/IHZhbHVlLnNwbGl0KHJneCkgOiBbXVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBbmltYXRhYmxlc1xyXG5cclxuZnVuY3Rpb24gcGFyc2VUYXJnZXRzKHRhcmdldHMpIHtcclxuICAgIHZhciB0YXJnZXRzQXJyYXkgPSB0YXJnZXRzID8gKGZsYXR0ZW5BcnJheShpcy5hcnIodGFyZ2V0cykgPyB0YXJnZXRzLm1hcCh0b0FycmF5KSA6IHRvQXJyYXkodGFyZ2V0cykpKSA6IFtdO1xyXG4gICAgcmV0dXJuIGZpbHRlckFycmF5KHRhcmdldHNBcnJheSwgZnVuY3Rpb24oaXRlbSwgcG9zLCBzZWxmKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYuaW5kZXhPZihpdGVtKSA9PT0gcG9zO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFuaW1hdGFibGVzKHRhcmdldHMpIHtcclxuICAgIHZhciBwYXJzZWQgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XHJcbiAgICByZXR1cm4gcGFyc2VkLm1hcChmdW5jdGlvbih0LCBpKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB0LFxyXG4gICAgICAgICAgICBpZDogaSxcclxuICAgICAgICAgICAgdG90YWw6IHBhcnNlZC5sZW5ndGgsXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybXM6IHtcclxuICAgICAgICAgICAgICAgIGxpc3Q6IGdldEVsZW1lbnRUcmFuc2Zvcm1zKHQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIFByb3BlcnRpZXNcclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BlcnR5VHdlZW5zKHByb3AsIHR3ZWVuU2V0dGluZ3MpIHtcclxuICAgIHZhciBzZXR0aW5ncyA9IGNsb25lT2JqZWN0KHR3ZWVuU2V0dGluZ3MpO1xyXG4gICAgLy8gT3ZlcnJpZGUgZHVyYXRpb24gaWYgZWFzaW5nIGlzIGEgc3ByaW5nXHJcbiAgICBpZiAoL15zcHJpbmcvLnRlc3Qoc2V0dGluZ3MuZWFzaW5nKSkge1xyXG4gICAgICAgIHNldHRpbmdzLmR1cmF0aW9uID0gc3ByaW5nKHNldHRpbmdzLmVhc2luZyk7XHJcbiAgICB9XHJcbiAgICBpZiAoaXMuYXJyKHByb3ApKSB7XHJcbiAgICAgICAgdmFyIGwgPSBwcm9wLmxlbmd0aDtcclxuICAgICAgICB2YXIgaXNGcm9tVG8gPSAobCA9PT0gMiAmJiAhaXMub2JqKHByb3BbMF0pKTtcclxuICAgICAgICBpZiAoIWlzRnJvbVRvKSB7XHJcbiAgICAgICAgICAgIC8vIER1cmF0aW9uIGRpdmlkZWQgYnkgdGhlIG51bWJlciBvZiB0d2VlbnNcclxuICAgICAgICAgICAgaWYgKCFpcy5mbmModHdlZW5TZXR0aW5ncy5kdXJhdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzLmR1cmF0aW9uID0gdHdlZW5TZXR0aW5ncy5kdXJhdGlvbiAvIGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBUcmFuc2Zvcm0gW2Zyb20sIHRvXSB2YWx1ZXMgc2hvcnRoYW5kIHRvIGEgdmFsaWQgdHdlZW4gdmFsdWVcclxuICAgICAgICAgICAgcHJvcCA9IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdmFyIHByb3BBcnJheSA9IGlzLmFycihwcm9wKSA/IHByb3AgOiBbcHJvcF07XHJcbiAgICByZXR1cm4gcHJvcEFycmF5Lm1hcChmdW5jdGlvbih2LCBpKSB7XHJcbiAgICAgICAgdmFyIG9iaiA9IChpcy5vYmoodikgJiYgIWlzLnB0aCh2KSkgPyB2IDoge1xyXG4gICAgICAgICAgICB2YWx1ZTogdlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gRGVmYXVsdCBkZWxheSB2YWx1ZSBzaG91bGQgb25seSBiZSBhcHBsaWVkIHRvIHRoZSBmaXJzdCB0d2VlblxyXG4gICAgICAgIGlmIChpcy51bmQob2JqLmRlbGF5KSkge1xyXG4gICAgICAgICAgICBvYmouZGVsYXkgPSAhaSA/IHR3ZWVuU2V0dGluZ3MuZGVsYXkgOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEZWZhdWx0IGVuZERlbGF5IHZhbHVlIHNob3VsZCBvbmx5IGJlIGFwcGxpZWQgdG8gdGhlIGxhc3QgdHdlZW5cclxuICAgICAgICBpZiAoaXMudW5kKG9iai5lbmREZWxheSkpIHtcclxuICAgICAgICAgICAgb2JqLmVuZERlbGF5ID0gaSA9PT0gcHJvcEFycmF5Lmxlbmd0aCAtIDEgPyB0d2VlblNldHRpbmdzLmVuZERlbGF5IDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH0pLm1hcChmdW5jdGlvbihrKSB7XHJcbiAgICAgICAgcmV0dXJuIG1lcmdlT2JqZWN0cyhrLCBzZXR0aW5ncyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGZsYXR0ZW5LZXlmcmFtZXMoa2V5ZnJhbWVzKSB7XHJcbiAgICB2YXIgcHJvcGVydHlOYW1lcyA9IGZpbHRlckFycmF5KGZsYXR0ZW5BcnJheShrZXlmcmFtZXMubWFwKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoa2V5KTtcclxuICAgICAgICB9KSksIGZ1bmN0aW9uKHApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzLmtleShwKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICBpZiAoYS5pbmRleE9mKGIpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgYS5wdXNoKGIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgIHZhciBwcm9wZXJ0aWVzID0ge307XHJcbiAgICB2YXIgbG9vcCA9IGZ1bmN0aW9uKGkpIHtcclxuICAgICAgICB2YXIgcHJvcE5hbWUgPSBwcm9wZXJ0eU5hbWVzW2ldO1xyXG4gICAgICAgIHByb3BlcnRpZXNbcHJvcE5hbWVdID0ga2V5ZnJhbWVzLm1hcChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgdmFyIG5ld0tleSA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIGtleSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzLmtleShwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwID09IHByb3BOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0tleS52YWx1ZSA9IGtleVtwXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0tleVtwXSA9IGtleVtwXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3S2V5O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnR5TmFtZXMubGVuZ3RoOyBpKyspIGxvb3AoaSk7XHJcbiAgICByZXR1cm4gcHJvcGVydGllcztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UHJvcGVydGllcyh0d2VlblNldHRpbmdzLCBwYXJhbXMpIHtcclxuICAgIHZhciBwcm9wZXJ0aWVzID0gW107XHJcbiAgICB2YXIga2V5ZnJhbWVzID0gcGFyYW1zLmtleWZyYW1lcztcclxuICAgIGlmIChrZXlmcmFtZXMpIHtcclxuICAgICAgICBwYXJhbXMgPSBtZXJnZU9iamVjdHMoZmxhdHRlbktleWZyYW1lcyhrZXlmcmFtZXMpLCBwYXJhbXMpO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgcCBpbiBwYXJhbXMpIHtcclxuICAgICAgICBpZiAoaXMua2V5KHApKSB7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBwLFxyXG4gICAgICAgICAgICAgICAgdHdlZW5zOiBub3JtYWxpemVQcm9wZXJ0eVR3ZWVucyhwYXJhbXNbcF0sIHR3ZWVuU2V0dGluZ3MpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xyXG59XHJcblxyXG4vLyBUd2VlbnNcclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVR3ZWVuVmFsdWVzKHR3ZWVuLCBhbmltYXRhYmxlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiB0d2Vlbikge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGdldEZ1bmN0aW9uVmFsdWUodHdlZW5bcF0sIGFuaW1hdGFibGUpO1xyXG4gICAgICAgIGlmIChpcy5hcnIodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUubWFwKGZ1bmN0aW9uKHYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnZXRGdW5jdGlvblZhbHVlKHYsIGFuaW1hdGFibGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZVswXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0W3BdID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICB0LmR1cmF0aW9uID0gcGFyc2VGbG9hdCh0LmR1cmF0aW9uKTtcclxuICAgIHQuZGVsYXkgPSBwYXJzZUZsb2F0KHQuZGVsYXkpO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZVR3ZWVucyhwcm9wLCBhbmltYXRhYmxlKSB7XHJcbiAgICB2YXIgcHJldmlvdXNUd2VlbjtcclxuICAgIHJldHVybiBwcm9wLnR3ZWVucy5tYXAoZnVuY3Rpb24odCkge1xyXG4gICAgICAgIHZhciB0d2VlbiA9IG5vcm1hbGl6ZVR3ZWVuVmFsdWVzKHQsIGFuaW1hdGFibGUpO1xyXG4gICAgICAgIHZhciB0d2VlblZhbHVlID0gdHdlZW4udmFsdWU7XHJcbiAgICAgICAgdmFyIHRvID0gaXMuYXJyKHR3ZWVuVmFsdWUpID8gdHdlZW5WYWx1ZVsxXSA6IHR3ZWVuVmFsdWU7XHJcbiAgICAgICAgdmFyIHRvVW5pdCA9IGdldFVuaXQodG8pO1xyXG4gICAgICAgIHZhciBvcmlnaW5hbFZhbHVlID0gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZShhbmltYXRhYmxlLnRhcmdldCwgcHJvcC5uYW1lLCB0b1VuaXQsIGFuaW1hdGFibGUpO1xyXG4gICAgICAgIHZhciBwcmV2aW91c1ZhbHVlID0gcHJldmlvdXNUd2VlbiA/IHByZXZpb3VzVHdlZW4udG8ub3JpZ2luYWwgOiBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIHZhciBmcm9tID0gaXMuYXJyKHR3ZWVuVmFsdWUpID8gdHdlZW5WYWx1ZVswXSA6IHByZXZpb3VzVmFsdWU7XHJcbiAgICAgICAgdmFyIGZyb21Vbml0ID0gZ2V0VW5pdChmcm9tKSB8fCBnZXRVbml0KG9yaWdpbmFsVmFsdWUpO1xyXG4gICAgICAgIHZhciB1bml0ID0gdG9Vbml0IHx8IGZyb21Vbml0O1xyXG4gICAgICAgIGlmIChpcy51bmQodG8pKSB7XHJcbiAgICAgICAgICAgIHRvID0gcHJldmlvdXNWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHdlZW4uZnJvbSA9IGRlY29tcG9zZVZhbHVlKGZyb20sIHVuaXQpO1xyXG4gICAgICAgIHR3ZWVuLnRvID0gZGVjb21wb3NlVmFsdWUoZ2V0UmVsYXRpdmVWYWx1ZSh0bywgZnJvbSksIHVuaXQpO1xyXG4gICAgICAgIHR3ZWVuLnN0YXJ0ID0gcHJldmlvdXNUd2VlbiA/IHByZXZpb3VzVHdlZW4uZW5kIDogMDtcclxuICAgICAgICB0d2Vlbi5lbmQgPSB0d2Vlbi5zdGFydCArIHR3ZWVuLmRlbGF5ICsgdHdlZW4uZHVyYXRpb24gKyB0d2Vlbi5lbmREZWxheTtcclxuICAgICAgICB0d2Vlbi5lYXNpbmcgPSBwYXJzZUVhc2luZ3ModHdlZW4uZWFzaW5nLCB0d2Vlbi5kdXJhdGlvbik7XHJcbiAgICAgICAgdHdlZW4uaXNQYXRoID0gaXMucHRoKHR3ZWVuVmFsdWUpO1xyXG4gICAgICAgIHR3ZWVuLmlzUGF0aFRhcmdldEluc2lkZVNWRyA9IHR3ZWVuLmlzUGF0aCAmJiBpcy5zdmcoYW5pbWF0YWJsZS50YXJnZXQpO1xyXG4gICAgICAgIHR3ZWVuLmlzQ29sb3IgPSBpcy5jb2wodHdlZW4uZnJvbS5vcmlnaW5hbCk7XHJcbiAgICAgICAgaWYgKHR3ZWVuLmlzQ29sb3IpIHtcclxuICAgICAgICAgICAgdHdlZW4ucm91bmQgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmV2aW91c1R3ZWVuID0gdHdlZW47XHJcbiAgICAgICAgcmV0dXJuIHR3ZWVuO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIFR3ZWVuIHByb2dyZXNzXHJcblxyXG52YXIgc2V0UHJvZ3Jlc3NWYWx1ZSA9IHtcclxuICAgIGNzczogZnVuY3Rpb24odCwgcCwgdikge1xyXG4gICAgICAgIHJldHVybiB0LnN0eWxlW3BdID0gdjtcclxuICAgIH0sXHJcbiAgICBhdHRyaWJ1dGU6IGZ1bmN0aW9uKHQsIHAsIHYpIHtcclxuICAgICAgICByZXR1cm4gdC5zZXRBdHRyaWJ1dGUocCwgdik7XHJcbiAgICB9LFxyXG4gICAgb2JqZWN0OiBmdW5jdGlvbih0LCBwLCB2KSB7XHJcbiAgICAgICAgcmV0dXJuIHRbcF0gPSB2O1xyXG4gICAgfSxcclxuICAgIHRyYW5zZm9ybTogZnVuY3Rpb24odCwgcCwgdiwgdHJhbnNmb3JtcywgbWFudWFsKSB7XHJcbiAgICAgICAgdHJhbnNmb3Jtcy5saXN0LnNldChwLCB2KTtcclxuICAgICAgICBpZiAocCA9PT0gdHJhbnNmb3Jtcy5sYXN0IHx8IG1hbnVhbCkge1xyXG4gICAgICAgICAgICB2YXIgc3RyID0gJyc7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybXMubGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBwcm9wKSB7XHJcbiAgICAgICAgICAgICAgICBzdHIgKz0gcHJvcCArIFwiKFwiICsgdmFsdWUgKyBcIikgXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0LnN0eWxlLnRyYW5zZm9ybSA9IHN0cjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBTZXQgVmFsdWUgaGVscGVyXHJcblxyXG5mdW5jdGlvbiBzZXRUYXJnZXRzVmFsdWUodGFyZ2V0cywgcHJvcGVydGllcykge1xyXG4gICAgdmFyIGFuaW1hdGFibGVzID0gZ2V0QW5pbWF0YWJsZXModGFyZ2V0cyk7XHJcbiAgICBhbmltYXRhYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGFuaW1hdGFibGUpIHtcclxuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGdldEZ1bmN0aW9uVmFsdWUocHJvcGVydGllc1twcm9wZXJ0eV0sIGFuaW1hdGFibGUpO1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gYW5pbWF0YWJsZS50YXJnZXQ7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZVVuaXQgPSBnZXRVbml0KHZhbHVlKTtcclxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsVmFsdWUgPSBnZXRPcmlnaW5hbFRhcmdldFZhbHVlKHRhcmdldCwgcHJvcGVydHksIHZhbHVlVW5pdCwgYW5pbWF0YWJsZSk7XHJcbiAgICAgICAgICAgIHZhciB1bml0ID0gdmFsdWVVbml0IHx8IGdldFVuaXQob3JpZ2luYWxWYWx1ZSk7XHJcbiAgICAgICAgICAgIHZhciB0byA9IGdldFJlbGF0aXZlVmFsdWUodmFsaWRhdGVWYWx1ZSh2YWx1ZSwgdW5pdCksIG9yaWdpbmFsVmFsdWUpO1xyXG4gICAgICAgICAgICB2YXIgYW5pbVR5cGUgPSBnZXRBbmltYXRpb25UeXBlKHRhcmdldCwgcHJvcGVydHkpO1xyXG4gICAgICAgICAgICBzZXRQcm9ncmVzc1ZhbHVlW2FuaW1UeXBlXSh0YXJnZXQsIHByb3BlcnR5LCB0bywgYW5pbWF0YWJsZS50cmFuc2Zvcm1zLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gQW5pbWF0aW9uc1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQW5pbWF0aW9uKGFuaW1hdGFibGUsIHByb3ApIHtcclxuICAgIHZhciBhbmltVHlwZSA9IGdldEFuaW1hdGlvblR5cGUoYW5pbWF0YWJsZS50YXJnZXQsIHByb3AubmFtZSk7XHJcbiAgICBpZiAoYW5pbVR5cGUpIHtcclxuICAgICAgICB2YXIgdHdlZW5zID0gbm9ybWFsaXplVHdlZW5zKHByb3AsIGFuaW1hdGFibGUpO1xyXG4gICAgICAgIHZhciBsYXN0VHdlZW4gPSB0d2VlbnNbdHdlZW5zLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHR5cGU6IGFuaW1UeXBlLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eTogcHJvcC5uYW1lLFxyXG4gICAgICAgICAgICBhbmltYXRhYmxlOiBhbmltYXRhYmxlLFxyXG4gICAgICAgICAgICB0d2VlbnM6IHR3ZWVucyxcclxuICAgICAgICAgICAgZHVyYXRpb246IGxhc3RUd2Vlbi5lbmQsXHJcbiAgICAgICAgICAgIGRlbGF5OiB0d2VlbnNbMF0uZGVsYXksXHJcbiAgICAgICAgICAgIGVuZERlbGF5OiBsYXN0VHdlZW4uZW5kRGVsYXlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFuaW1hdGlvbnMoYW5pbWF0YWJsZXMsIHByb3BlcnRpZXMpIHtcclxuICAgIHJldHVybiBmaWx0ZXJBcnJheShmbGF0dGVuQXJyYXkoYW5pbWF0YWJsZXMubWFwKGZ1bmN0aW9uKGFuaW1hdGFibGUpIHtcclxuICAgICAgICByZXR1cm4gcHJvcGVydGllcy5tYXAoZnVuY3Rpb24ocHJvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlQW5pbWF0aW9uKGFuaW1hdGFibGUsIHByb3ApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSkpLCBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuICFpcy51bmQoYSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gQ3JlYXRlIEluc3RhbmNlXHJcblxyXG5mdW5jdGlvbiBnZXRJbnN0YW5jZVRpbWluZ3MoYW5pbWF0aW9ucywgdHdlZW5TZXR0aW5ncykge1xyXG4gICAgdmFyIGFuaW1MZW5ndGggPSBhbmltYXRpb25zLmxlbmd0aDtcclxuICAgIHZhciBnZXRUbE9mZnNldCA9IGZ1bmN0aW9uKGFuaW0pIHtcclxuICAgICAgICByZXR1cm4gYW5pbS50aW1lbGluZU9mZnNldCA/IGFuaW0udGltZWxpbmVPZmZzZXQgOiAwO1xyXG4gICAgfTtcclxuICAgIHZhciB0aW1pbmdzID0ge307XHJcbiAgICB0aW1pbmdzLmR1cmF0aW9uID0gYW5pbUxlbmd0aCA/IE1hdGgubWF4LmFwcGx5KE1hdGgsIGFuaW1hdGlvbnMubWFwKGZ1bmN0aW9uKGFuaW0pIHtcclxuICAgICAgICByZXR1cm4gZ2V0VGxPZmZzZXQoYW5pbSkgKyBhbmltLmR1cmF0aW9uO1xyXG4gICAgfSkpIDogdHdlZW5TZXR0aW5ncy5kdXJhdGlvbjtcclxuICAgIHRpbWluZ3MuZGVsYXkgPSBhbmltTGVuZ3RoID8gTWF0aC5taW4uYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24oYW5pbSkge1xyXG4gICAgICAgIHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZGVsYXk7XHJcbiAgICB9KSkgOiB0d2VlblNldHRpbmdzLmRlbGF5O1xyXG4gICAgdGltaW5ncy5lbmREZWxheSA9IGFuaW1MZW5ndGggPyB0aW1pbmdzLmR1cmF0aW9uIC0gTWF0aC5tYXguYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24oYW5pbSkge1xyXG4gICAgICAgIHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZHVyYXRpb24gLSBhbmltLmVuZERlbGF5O1xyXG4gICAgfSkpIDogdHdlZW5TZXR0aW5ncy5lbmREZWxheTtcclxuICAgIHJldHVybiB0aW1pbmdzO1xyXG59XHJcblxyXG52YXIgaW5zdGFuY2VJRCA9IDA7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOZXdJbnN0YW5jZShwYXJhbXMpIHtcclxuICAgIHZhciBpbnN0YW5jZVNldHRpbmdzID0gcmVwbGFjZU9iamVjdFByb3BzKGRlZmF1bHRJbnN0YW5jZVNldHRpbmdzLCBwYXJhbXMpO1xyXG4gICAgdmFyIHR3ZWVuU2V0dGluZ3MgPSByZXBsYWNlT2JqZWN0UHJvcHMoZGVmYXVsdFR3ZWVuU2V0dGluZ3MsIHBhcmFtcyk7XHJcbiAgICB2YXIgcHJvcGVydGllcyA9IGdldFByb3BlcnRpZXModHdlZW5TZXR0aW5ncywgcGFyYW1zKTtcclxuICAgIHZhciBhbmltYXRhYmxlcyA9IGdldEFuaW1hdGFibGVzKHBhcmFtcy50YXJnZXRzKTtcclxuICAgIHZhciBhbmltYXRpb25zID0gZ2V0QW5pbWF0aW9ucyhhbmltYXRhYmxlcywgcHJvcGVydGllcyk7XHJcbiAgICB2YXIgdGltaW5ncyA9IGdldEluc3RhbmNlVGltaW5ncyhhbmltYXRpb25zLCB0d2VlblNldHRpbmdzKTtcclxuICAgIHZhciBpZCA9IGluc3RhbmNlSUQ7XHJcbiAgICBpbnN0YW5jZUlEKys7XHJcbiAgICByZXR1cm4gbWVyZ2VPYmplY3RzKGluc3RhbmNlU2V0dGluZ3MsIHtcclxuICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIGFuaW1hdGFibGVzOiBhbmltYXRhYmxlcyxcclxuICAgICAgICBhbmltYXRpb25zOiBhbmltYXRpb25zLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aW1pbmdzLmR1cmF0aW9uLFxyXG4gICAgICAgIGRlbGF5OiB0aW1pbmdzLmRlbGF5LFxyXG4gICAgICAgIGVuZERlbGF5OiB0aW1pbmdzLmVuZERlbGF5XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gQ29yZVxyXG5cclxudmFyIGFjdGl2ZUluc3RhbmNlcyA9IFtdO1xyXG5cclxudmFyIGVuZ2luZSA9IChmdW5jdGlvbigpIHtcclxuICAgIHZhciByYWY7XHJcblxyXG4gICAgZnVuY3Rpb24gcGxheSgpIHtcclxuICAgICAgICBpZiAoIXJhZiAmJiAoIWlzRG9jdW1lbnRIaWRkZW4oKSB8fCAhYW5pbWUuc3VzcGVuZFdoZW5Eb2N1bWVudEhpZGRlbikgJiYgYWN0aXZlSW5zdGFuY2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdGVwKHQpIHtcclxuICAgICAgICAvLyBtZW1vIG9uIGFsZ29yaXRobSBpc3N1ZTpcclxuICAgICAgICAvLyBkYW5nZXJvdXMgaXRlcmF0aW9uIG92ZXIgbXV0YWJsZSBgYWN0aXZlSW5zdGFuY2VzYFxyXG4gICAgICAgIC8vICh0aGF0IGNvbGxlY3Rpb24gbWF5IGJlIHVwZGF0ZWQgZnJvbSB3aXRoaW4gY2FsbGJhY2tzIG9mIGB0aWNrYC1lZCBhbmltYXRpb24gaW5zdGFuY2VzKVxyXG4gICAgICAgIHZhciBhY3RpdmVJbnN0YW5jZXNMZW5ndGggPSBhY3RpdmVJbnN0YW5jZXMubGVuZ3RoO1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICB3aGlsZSAoaSA8IGFjdGl2ZUluc3RhbmNlc0xlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgYWN0aXZlSW5zdGFuY2UgPSBhY3RpdmVJbnN0YW5jZXNbaV07XHJcbiAgICAgICAgICAgIGlmICghYWN0aXZlSW5zdGFuY2UucGF1c2VkKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbnN0YW5jZS50aWNrKHQpO1xyXG4gICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5zdGFuY2VzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUluc3RhbmNlc0xlbmd0aC0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJhZiA9IGkgPiAwID8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UoKSB7XHJcbiAgICAgICAgaWYgKCFhbmltZS5zdXNwZW5kV2hlbkRvY3VtZW50SGlkZGVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpc0RvY3VtZW50SGlkZGVuKCkpIHtcclxuICAgICAgICAgICAgLy8gc3VzcGVuZCB0aWNrc1xyXG4gICAgICAgICAgICByYWYgPSBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO1xyXG4gICAgICAgIH0gZWxzZSB7IC8vIGlzIGJhY2sgdG8gYWN0aXZlIHRhYlxyXG4gICAgICAgICAgICAvLyBmaXJzdCBhZGp1c3QgYW5pbWF0aW9ucyB0byBjb25zaWRlciB0aGUgdGltZSB0aGF0IHRpY2tzIHdlcmUgc3VzcGVuZGVkXHJcbiAgICAgICAgICAgIGFjdGl2ZUluc3RhbmNlcy5mb3JFYWNoKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2UuX29uRG9jdW1lbnRWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGVuZ2luZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwbGF5O1xyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gaXNEb2N1bWVudEhpZGRlbigpIHtcclxuICAgIHJldHVybiAhIWRvY3VtZW50ICYmIGRvY3VtZW50LmhpZGRlbjtcclxufVxyXG5cclxuLy8gUHVibGljIEluc3RhbmNlXHJcblxyXG5mdW5jdGlvbiBhbmltZShwYXJhbXMpIHtcclxuICAgIGlmIChwYXJhbXMgPT09IHZvaWQgMCkgcGFyYW1zID0ge307XHJcblxyXG5cclxuICAgIHZhciBzdGFydFRpbWUgPSAwLFxyXG4gICAgICAgIGxhc3RUaW1lID0gMCxcclxuICAgICAgICBub3cgPSAwO1xyXG4gICAgdmFyIGNoaWxkcmVuLCBjaGlsZHJlbkxlbmd0aCA9IDA7XHJcbiAgICB2YXIgcmVzb2x2ZSA9IG51bGw7XHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZVByb21pc2UoaW5zdGFuY2UpIHtcclxuICAgICAgICB2YXIgcHJvbWlzZSA9IHdpbmRvdy5Qcm9taXNlICYmIG5ldyBQcm9taXNlKGZ1bmN0aW9uKF9yZXNvbHZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlID0gX3Jlc29sdmU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW5zdGFuY2UuZmluaXNoZWQgPSBwcm9taXNlO1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBpbnN0YW5jZSA9IGNyZWF0ZU5ld0luc3RhbmNlKHBhcmFtcyk7XHJcbiAgICB2YXIgcHJvbWlzZSA9IG1ha2VQcm9taXNlKGluc3RhbmNlKTtcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVJbnN0YW5jZURpcmVjdGlvbigpIHtcclxuICAgICAgICB2YXIgZGlyZWN0aW9uID0gaW5zdGFuY2UuZGlyZWN0aW9uO1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gIT09ICdhbHRlcm5hdGUnKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLmRpcmVjdGlvbiA9IGRpcmVjdGlvbiAhPT0gJ25vcm1hbCcgPyAnbm9ybWFsJyA6ICdyZXZlcnNlJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5zdGFuY2UucmV2ZXJzZWQgPSAhaW5zdGFuY2UucmV2ZXJzZWQ7XHJcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlsZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2hpbGQucmV2ZXJzZWQgPSBpbnN0YW5jZS5yZXZlcnNlZDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGp1c3RUaW1lKHRpbWUpIHtcclxuICAgICAgICByZXR1cm4gaW5zdGFuY2UucmV2ZXJzZWQgPyBpbnN0YW5jZS5kdXJhdGlvbiAtIHRpbWUgOiB0aW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0VGltZSgpIHtcclxuICAgICAgICBzdGFydFRpbWUgPSAwO1xyXG4gICAgICAgIGxhc3RUaW1lID0gYWRqdXN0VGltZShpbnN0YW5jZS5jdXJyZW50VGltZSkgKiAoMSAvIGFuaW1lLnNwZWVkKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWVrQ2hpbGQodGltZSwgY2hpbGQpIHtcclxuICAgICAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQuc2Vlayh0aW1lIC0gY2hpbGQudGltZWxpbmVPZmZzZXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzeW5jSW5zdGFuY2VDaGlsZHJlbih0aW1lKSB7XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZS5yZXZlcnNlUGxheWJhY2spIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzZWVrQ2hpbGQodGltZSwgY2hpbGRyZW5baV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSQxID0gY2hpbGRyZW5MZW5ndGg7IGkkMS0tOykge1xyXG4gICAgICAgICAgICAgICAgc2Vla0NoaWxkKHRpbWUsIGNoaWxkcmVuW2kkMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNUaW1lKSB7XHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgIHZhciBhbmltYXRpb25zID0gaW5zdGFuY2UuYW5pbWF0aW9ucztcclxuICAgICAgICB2YXIgYW5pbWF0aW9uc0xlbmd0aCA9IGFuaW1hdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChpIDwgYW5pbWF0aW9uc0xlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgYW5pbSA9IGFuaW1hdGlvbnNbaV07XHJcbiAgICAgICAgICAgIHZhciBhbmltYXRhYmxlID0gYW5pbS5hbmltYXRhYmxlO1xyXG4gICAgICAgICAgICB2YXIgdHdlZW5zID0gYW5pbS50d2VlbnM7XHJcbiAgICAgICAgICAgIHZhciB0d2Vlbkxlbmd0aCA9IHR3ZWVucy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB2YXIgdHdlZW4gPSB0d2VlbnNbdHdlZW5MZW5ndGhdO1xyXG4gICAgICAgICAgICAvLyBPbmx5IGNoZWNrIGZvciBrZXlmcmFtZXMgaWYgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSB0d2VlblxyXG4gICAgICAgICAgICBpZiAodHdlZW5MZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHR3ZWVuID0gZmlsdGVyQXJyYXkodHdlZW5zLCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChpbnNUaW1lIDwgdC5lbmQpO1xyXG4gICAgICAgICAgICAgICAgfSlbMF0gfHwgdHdlZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGVsYXBzZWQgPSBtaW5NYXgoaW5zVGltZSAtIHR3ZWVuLnN0YXJ0IC0gdHdlZW4uZGVsYXksIDAsIHR3ZWVuLmR1cmF0aW9uKSAvIHR3ZWVuLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICB2YXIgZWFzZWQgPSBpc05hTihlbGFwc2VkKSA/IDEgOiB0d2Vlbi5lYXNpbmcoZWxhcHNlZCk7XHJcbiAgICAgICAgICAgIHZhciBzdHJpbmdzID0gdHdlZW4udG8uc3RyaW5ncztcclxuICAgICAgICAgICAgdmFyIHJvdW5kID0gdHdlZW4ucm91bmQ7XHJcbiAgICAgICAgICAgIHZhciBudW1iZXJzID0gW107XHJcbiAgICAgICAgICAgIHZhciB0b051bWJlcnNMZW5ndGggPSB0d2Vlbi50by5udW1iZXJzLmxlbmd0aDtcclxuICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gKHZvaWQgMCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgdG9OdW1iZXJzTGVuZ3RoOyBuKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9ICh2b2lkIDApO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvTnVtYmVyID0gdHdlZW4udG8ubnVtYmVyc1tuXTtcclxuICAgICAgICAgICAgICAgIHZhciBmcm9tTnVtYmVyID0gdHdlZW4uZnJvbS5udW1iZXJzW25dIHx8IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXR3ZWVuLmlzUGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZnJvbU51bWJlciArIChlYXNlZCAqICh0b051bWJlciAtIGZyb21OdW1iZXIpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBnZXRQYXRoUHJvZ3Jlc3ModHdlZW4udmFsdWUsIGVhc2VkICogdG9OdW1iZXIsIHR3ZWVuLmlzUGF0aFRhcmdldEluc2lkZVNWRyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocm91bmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0d2Vlbi5pc0NvbG9yICYmIG4gPiAyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgKiByb3VuZCkgLyByb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBudW1iZXJzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE1hbnVhbCBBcnJheS5yZWR1Y2UgZm9yIGJldHRlciBwZXJmb3JtYW5jZXNcclxuICAgICAgICAgICAgdmFyIHN0cmluZ3NMZW5ndGggPSBzdHJpbmdzLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKCFzdHJpbmdzTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IG51bWJlcnNbMF07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IHN0cmluZ3NbMF07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBzID0gMDsgcyA8IHN0cmluZ3NMZW5ndGg7IHMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gc3RyaW5nc1tzXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYiA9IHN0cmluZ3NbcyArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuJDEgPSBudW1iZXJzW3NdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4obiQxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzICs9IG4kMSArICcgJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzICs9IG4kMSArIGI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0UHJvZ3Jlc3NWYWx1ZVthbmltLnR5cGVdKGFuaW1hdGFibGUudGFyZ2V0LCBhbmltLnByb3BlcnR5LCBwcm9ncmVzcywgYW5pbWF0YWJsZS50cmFuc2Zvcm1zKTtcclxuICAgICAgICAgICAgYW5pbS5jdXJyZW50VmFsdWUgPSBwcm9ncmVzcztcclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDYWxsYmFjayhjYikge1xyXG4gICAgICAgIGlmIChpbnN0YW5jZVtjYl0gJiYgIWluc3RhbmNlLnBhc3NUaHJvdWdoKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlW2NiXShpbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvdW50SXRlcmF0aW9uKCkge1xyXG4gICAgICAgIGlmIChpbnN0YW5jZS5yZW1haW5pbmcgJiYgaW5zdGFuY2UucmVtYWluaW5nICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLnJlbWFpbmluZy0tO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRJbnN0YW5jZVByb2dyZXNzKGVuZ2luZVRpbWUpIHtcclxuICAgICAgICB2YXIgaW5zRHVyYXRpb24gPSBpbnN0YW5jZS5kdXJhdGlvbjtcclxuICAgICAgICB2YXIgaW5zRGVsYXkgPSBpbnN0YW5jZS5kZWxheTtcclxuICAgICAgICB2YXIgaW5zRW5kRGVsYXkgPSBpbnNEdXJhdGlvbiAtIGluc3RhbmNlLmVuZERlbGF5O1xyXG4gICAgICAgIHZhciBpbnNUaW1lID0gYWRqdXN0VGltZShlbmdpbmVUaW1lKTtcclxuICAgICAgICBpbnN0YW5jZS5wcm9ncmVzcyA9IG1pbk1heCgoaW5zVGltZSAvIGluc0R1cmF0aW9uKSAqIDEwMCwgMCwgMTAwKTtcclxuICAgICAgICBpbnN0YW5jZS5yZXZlcnNlUGxheWJhY2sgPSBpbnNUaW1lIDwgaW5zdGFuY2UuY3VycmVudFRpbWU7XHJcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIHN5bmNJbnN0YW5jZUNoaWxkcmVuKGluc1RpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWluc3RhbmNlLmJlZ2FuICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lID4gMCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5iZWdhbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHNldENhbGxiYWNrKCdiZWdpbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWluc3RhbmNlLmxvb3BCZWdhbiAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSA+IDApIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UubG9vcEJlZ2FuID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2V0Q2FsbGJhY2soJ2xvb3BCZWdpbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5zVGltZSA8PSBpbnNEZWxheSAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSAhPT0gMCkge1xyXG4gICAgICAgICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgoaW5zVGltZSA+PSBpbnNFbmREZWxheSAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSAhPT0gaW5zRHVyYXRpb24pIHx8ICFpbnNEdXJhdGlvbikge1xyXG4gICAgICAgICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zRHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5zVGltZSA+IGluc0RlbGF5ICYmIGluc1RpbWUgPCBpbnNFbmREZWxheSkge1xyXG4gICAgICAgICAgICBpZiAoIWluc3RhbmNlLmNoYW5nZUJlZ2FuKSB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5jaGFuZ2VDb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2VCZWdpbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc1RpbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5jaGFuZ2VCZWdhbikge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuY2hhbmdlQ29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzZXRDYWxsYmFjaygnY2hhbmdlQ29tcGxldGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbnN0YW5jZS5jdXJyZW50VGltZSA9IG1pbk1heChpbnNUaW1lLCAwLCBpbnNEdXJhdGlvbik7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLmJlZ2FuKSB7XHJcbiAgICAgICAgICAgIHNldENhbGxiYWNrKCd1cGRhdGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVuZ2luZVRpbWUgPj0gaW5zRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgbGFzdFRpbWUgPSAwO1xyXG4gICAgICAgICAgICBjb3VudEl0ZXJhdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoIWluc3RhbmNlLnJlbWFpbmluZykge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UucGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmICghaW5zdGFuY2UuY29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UuY29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYWxsYmFjaygnbG9vcENvbXBsZXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2FsbGJhY2soJ2NvbXBsZXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnN0YW5jZS5wYXNzVGhyb3VnaCAmJiAnUHJvbWlzZScgaW4gd2luZG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZSA9IG1ha2VQcm9taXNlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWUgPSBub3c7XHJcbiAgICAgICAgICAgICAgICBzZXRDYWxsYmFjaygnbG9vcENvbXBsZXRlJyk7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5sb29wQmVnYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZS5kaXJlY3Rpb24gPT09ICdhbHRlcm5hdGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnN0YW5jZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBpbnN0YW5jZS5kaXJlY3Rpb247XHJcbiAgICAgICAgaW5zdGFuY2UucGFzc1Rocm91Z2ggPSBmYWxzZTtcclxuICAgICAgICBpbnN0YW5jZS5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgaW5zdGFuY2UucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgIGluc3RhbmNlLnBhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgaW5zdGFuY2UuYmVnYW4gPSBmYWxzZTtcclxuICAgICAgICBpbnN0YW5jZS5sb29wQmVnYW4gPSBmYWxzZTtcclxuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IGZhbHNlO1xyXG4gICAgICAgIGluc3RhbmNlLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGluc3RhbmNlLnJldmVyc2VQbGF5YmFjayA9IGZhbHNlO1xyXG4gICAgICAgIGluc3RhbmNlLnJldmVyc2VkID0gZGlyZWN0aW9uID09PSAncmV2ZXJzZSc7XHJcbiAgICAgICAgaW5zdGFuY2UucmVtYWluaW5nID0gaW5zdGFuY2UubG9vcDtcclxuICAgICAgICBjaGlsZHJlbiA9IGluc3RhbmNlLmNoaWxkcmVuO1xyXG4gICAgICAgIGNoaWxkcmVuTGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBjaGlsZHJlbkxlbmd0aDsgaS0tOykge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5jaGlsZHJlbltpXS5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5zdGFuY2UucmV2ZXJzZWQgJiYgaW5zdGFuY2UubG9vcCAhPT0gdHJ1ZSB8fCAoZGlyZWN0aW9uID09PSAnYWx0ZXJuYXRlJyAmJiBpbnN0YW5jZS5sb29wID09PSAxKSkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5yZW1haW5pbmcrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc3RhbmNlLnJldmVyc2VkID8gaW5zdGFuY2UuZHVyYXRpb24gOiAwKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gaW50ZXJuYWwgbWV0aG9kIChmb3IgZW5naW5lKSB0byBhZGp1c3QgYW5pbWF0aW9uIHRpbWluZ3MgYmVmb3JlIHJlc3RvcmluZyBlbmdpbmUgdGlja3MgKHJBRilcclxuICAgIGluc3RhbmNlLl9vbkRvY3VtZW50VmlzaWJpbGl0eSA9IHJlc2V0VGltZTtcclxuXHJcbiAgICAvLyBTZXQgVmFsdWUgaGVscGVyXHJcblxyXG4gICAgaW5zdGFuY2Uuc2V0ID0gZnVuY3Rpb24odGFyZ2V0cywgcHJvcGVydGllcykge1xyXG4gICAgICAgIHNldFRhcmdldHNWYWx1ZSh0YXJnZXRzLCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9O1xyXG5cclxuICAgIGluc3RhbmNlLnRpY2sgPSBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgbm93ID0gdDtcclxuICAgICAgICBpZiAoIXN0YXJ0VGltZSkge1xyXG4gICAgICAgICAgICBzdGFydFRpbWUgPSBub3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEluc3RhbmNlUHJvZ3Jlc3MoKG5vdyArIChsYXN0VGltZSAtIHN0YXJ0VGltZSkpICogYW5pbWUuc3BlZWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnN0YW5jZS5zZWVrID0gZnVuY3Rpb24odGltZSkge1xyXG4gICAgICAgIHNldEluc3RhbmNlUHJvZ3Jlc3MoYWRqdXN0VGltZSh0aW1lKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGluc3RhbmNlLnBhdXNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaW5zdGFuY2UucGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICByZXNldFRpbWUoKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zdGFuY2UucGxheSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghaW5zdGFuY2UucGF1c2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLmNvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5yZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnN0YW5jZS5wYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICBhY3RpdmVJbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XHJcbiAgICAgICAgcmVzZXRUaW1lKCk7XHJcbiAgICAgICAgZW5naW5lKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGluc3RhbmNlLnJldmVyc2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0b2dnbGVJbnN0YW5jZURpcmVjdGlvbigpO1xyXG4gICAgICAgIGluc3RhbmNlLmNvbXBsZXRlZCA9IGluc3RhbmNlLnJldmVyc2VkID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIHJlc2V0VGltZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnN0YW5jZS5yZXN0YXJ0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaW5zdGFuY2UucmVzZXQoKTtcclxuICAgICAgICBpbnN0YW5jZS5wbGF5KCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGluc3RhbmNlLnJlbW92ZSA9IGZ1bmN0aW9uKHRhcmdldHMpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0c0FycmF5ID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xyXG4gICAgICAgIHJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UodGFyZ2V0c0FycmF5LCBpbnN0YW5jZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGluc3RhbmNlLnJlc2V0KCk7XHJcblxyXG4gICAgaWYgKGluc3RhbmNlLmF1dG9wbGF5KSB7XHJcbiAgICAgICAgaW5zdGFuY2UucGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbnN0YW5jZTtcclxuXHJcbn1cclxuXHJcbi8vIFJlbW92ZSB0YXJnZXRzIGZyb20gYW5pbWF0aW9uXHJcblxyXG5mdW5jdGlvbiByZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnModGFyZ2V0c0FycmF5LCBhbmltYXRpb25zKSB7XHJcbiAgICBmb3IgKHZhciBhID0gYW5pbWF0aW9ucy5sZW5ndGg7IGEtLTspIHtcclxuICAgICAgICBpZiAoYXJyYXlDb250YWlucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnNbYV0uYW5pbWF0YWJsZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbnMuc3BsaWNlKGEsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0c0Zyb21JbnN0YW5jZSh0YXJnZXRzQXJyYXksIGluc3RhbmNlKSB7XHJcbiAgICB2YXIgYW5pbWF0aW9ucyA9IGluc3RhbmNlLmFuaW1hdGlvbnM7XHJcbiAgICB2YXIgY2hpbGRyZW4gPSBpbnN0YW5jZS5jaGlsZHJlbjtcclxuICAgIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnMpO1xyXG4gICAgZm9yICh2YXIgYyA9IGNoaWxkcmVuLmxlbmd0aDsgYy0tOykge1xyXG4gICAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2NdO1xyXG4gICAgICAgIHZhciBjaGlsZEFuaW1hdGlvbnMgPSBjaGlsZC5hbmltYXRpb25zO1xyXG4gICAgICAgIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGNoaWxkQW5pbWF0aW9ucyk7XHJcbiAgICAgICAgaWYgKCFjaGlsZEFuaW1hdGlvbnMubGVuZ3RoICYmICFjaGlsZC5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2hpbGRyZW4uc3BsaWNlKGMsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghYW5pbWF0aW9ucy5sZW5ndGggJiYgIWNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgIGluc3RhbmNlLnBhdXNlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRhcmdldHNGcm9tQWN0aXZlSW5zdGFuY2VzKHRhcmdldHMpIHtcclxuICAgIHZhciB0YXJnZXRzQXJyYXkgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XHJcbiAgICBmb3IgKHZhciBpID0gYWN0aXZlSW5zdGFuY2VzLmxlbmd0aDsgaS0tOykge1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlc1tpXTtcclxuICAgICAgICByZW1vdmVUYXJnZXRzRnJvbUluc3RhbmNlKHRhcmdldHNBcnJheSwgaW5zdGFuY2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBTdGFnZ2VyIGhlbHBlcnNcclxuXHJcbmZ1bmN0aW9uIHN0YWdnZXIodmFsLCBwYXJhbXMpIHtcclxuICAgIGlmIChwYXJhbXMgPT09IHZvaWQgMCkgcGFyYW1zID0ge307XHJcblxyXG4gICAgdmFyIGRpcmVjdGlvbiA9IHBhcmFtcy5kaXJlY3Rpb24gfHwgJ25vcm1hbCc7XHJcbiAgICB2YXIgZWFzaW5nID0gcGFyYW1zLmVhc2luZyA/IHBhcnNlRWFzaW5ncyhwYXJhbXMuZWFzaW5nKSA6IG51bGw7XHJcbiAgICB2YXIgZ3JpZCA9IHBhcmFtcy5ncmlkO1xyXG4gICAgdmFyIGF4aXMgPSBwYXJhbXMuYXhpcztcclxuICAgIHZhciBmcm9tSW5kZXggPSBwYXJhbXMuZnJvbSB8fCAwO1xyXG4gICAgdmFyIGZyb21GaXJzdCA9IGZyb21JbmRleCA9PT0gJ2ZpcnN0JztcclxuICAgIHZhciBmcm9tQ2VudGVyID0gZnJvbUluZGV4ID09PSAnY2VudGVyJztcclxuICAgIHZhciBmcm9tTGFzdCA9IGZyb21JbmRleCA9PT0gJ2xhc3QnO1xyXG4gICAgdmFyIGlzUmFuZ2UgPSBpcy5hcnIodmFsKTtcclxuICAgIHZhciB2YWwxID0gaXNSYW5nZSA/IHBhcnNlRmxvYXQodmFsWzBdKSA6IHBhcnNlRmxvYXQodmFsKTtcclxuICAgIHZhciB2YWwyID0gaXNSYW5nZSA/IHBhcnNlRmxvYXQodmFsWzFdKSA6IDA7XHJcbiAgICB2YXIgdW5pdCA9IGdldFVuaXQoaXNSYW5nZSA/IHZhbFsxXSA6IHZhbCkgfHwgMDtcclxuICAgIHZhciBzdGFydCA9IHBhcmFtcy5zdGFydCB8fCAwICsgKGlzUmFuZ2UgPyB2YWwxIDogMCk7XHJcbiAgICB2YXIgdmFsdWVzID0gW107XHJcbiAgICB2YXIgbWF4VmFsdWUgPSAwO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsLCBpLCB0KSB7XHJcbiAgICAgICAgaWYgKGZyb21GaXJzdCkge1xyXG4gICAgICAgICAgICBmcm9tSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZnJvbUNlbnRlcikge1xyXG4gICAgICAgICAgICBmcm9tSW5kZXggPSAodCAtIDEpIC8gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZyb21MYXN0KSB7XHJcbiAgICAgICAgICAgIGZyb21JbmRleCA9IHQgLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHQ7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghZ3JpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKE1hdGguYWJzKGZyb21JbmRleCAtIGluZGV4KSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmcm9tWCA9ICFmcm9tQ2VudGVyID8gZnJvbUluZGV4ICUgZ3JpZFswXSA6IChncmlkWzBdIC0gMSkgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmcm9tWSA9ICFmcm9tQ2VudGVyID8gTWF0aC5mbG9vcihmcm9tSW5kZXggLyBncmlkWzBdKSA6IChncmlkWzFdIC0gMSkgLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b1ggPSBpbmRleCAlIGdyaWRbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvWSA9IE1hdGguZmxvb3IoaW5kZXggLyBncmlkWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VYID0gZnJvbVggLSB0b1g7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlWSA9IGZyb21ZIC0gdG9ZO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IE1hdGguc3FydChkaXN0YW5jZVggKiBkaXN0YW5jZVggKyBkaXN0YW5jZVkgKiBkaXN0YW5jZVkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChheGlzID09PSAneCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAtZGlzdGFuY2VYO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3knKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gLWRpc3RhbmNlWTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgPSBNYXRoLm1heC5hcHBseShNYXRoLCB2YWx1ZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlYXNpbmcpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24odmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVhc2luZyh2YWwgLyBtYXhWYWx1ZSkgKiBtYXhWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdyZXZlcnNlJykge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbih2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXhpcyA/ICh2YWwgPCAwKSA/IHZhbCAqIC0xIDogLXZhbCA6IE1hdGguYWJzKG1heFZhbHVlIC0gdmFsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzcGFjaW5nID0gaXNSYW5nZSA/ICh2YWwyIC0gdmFsMSkgLyBtYXhWYWx1ZSA6IHZhbDE7XHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0ICsgKHNwYWNpbmcgKiAoTWF0aC5yb3VuZCh2YWx1ZXNbaV0gKiAxMDApIC8gMTAwKSkgKyB1bml0O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBUaW1lbGluZVxyXG5cclxuZnVuY3Rpb24gdGltZWxpbmUocGFyYW1zKSB7XHJcbiAgICBpZiAocGFyYW1zID09PSB2b2lkIDApIHBhcmFtcyA9IHt9O1xyXG5cclxuICAgIHZhciB0bCA9IGFuaW1lKHBhcmFtcyk7XHJcbiAgICB0bC5kdXJhdGlvbiA9IDA7XHJcbiAgICB0bC5hZGQgPSBmdW5jdGlvbihpbnN0YW5jZVBhcmFtcywgdGltZWxpbmVPZmZzZXQpIHtcclxuICAgICAgICB2YXIgdGxJbmRleCA9IGFjdGl2ZUluc3RhbmNlcy5pbmRleE9mKHRsKTtcclxuICAgICAgICB2YXIgY2hpbGRyZW4gPSB0bC5jaGlsZHJlbjtcclxuICAgICAgICBpZiAodGxJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZUluc3RhbmNlcy5zcGxpY2UodGxJbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBwYXNzVGhyb3VnaChpbnMpIHtcclxuICAgICAgICAgICAgaW5zLnBhc3NUaHJvdWdoID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBwYXNzVGhyb3VnaChjaGlsZHJlbltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpbnNQYXJhbXMgPSBtZXJnZU9iamVjdHMoaW5zdGFuY2VQYXJhbXMsIHJlcGxhY2VPYmplY3RQcm9wcyhkZWZhdWx0VHdlZW5TZXR0aW5ncywgcGFyYW1zKSk7XHJcbiAgICAgICAgaW5zUGFyYW1zLnRhcmdldHMgPSBpbnNQYXJhbXMudGFyZ2V0cyB8fCBwYXJhbXMudGFyZ2V0cztcclxuICAgICAgICB2YXIgdGxEdXJhdGlvbiA9IHRsLmR1cmF0aW9uO1xyXG4gICAgICAgIGluc1BhcmFtcy5hdXRvcGxheSA9IGZhbHNlO1xyXG4gICAgICAgIGluc1BhcmFtcy5kaXJlY3Rpb24gPSB0bC5kaXJlY3Rpb247XHJcbiAgICAgICAgaW5zUGFyYW1zLnRpbWVsaW5lT2Zmc2V0ID0gaXMudW5kKHRpbWVsaW5lT2Zmc2V0KSA/IHRsRHVyYXRpb24gOiBnZXRSZWxhdGl2ZVZhbHVlKHRpbWVsaW5lT2Zmc2V0LCB0bER1cmF0aW9uKTtcclxuICAgICAgICBwYXNzVGhyb3VnaCh0bCk7XHJcbiAgICAgICAgdGwuc2VlayhpbnNQYXJhbXMudGltZWxpbmVPZmZzZXQpO1xyXG4gICAgICAgIHZhciBpbnMgPSBhbmltZShpbnNQYXJhbXMpO1xyXG4gICAgICAgIHBhc3NUaHJvdWdoKGlucyk7XHJcbiAgICAgICAgY2hpbGRyZW4ucHVzaChpbnMpO1xyXG4gICAgICAgIHZhciB0aW1pbmdzID0gZ2V0SW5zdGFuY2VUaW1pbmdzKGNoaWxkcmVuLCBwYXJhbXMpO1xyXG4gICAgICAgIHRsLmRlbGF5ID0gdGltaW5ncy5kZWxheTtcclxuICAgICAgICB0bC5lbmREZWxheSA9IHRpbWluZ3MuZW5kRGVsYXk7XHJcbiAgICAgICAgdGwuZHVyYXRpb24gPSB0aW1pbmdzLmR1cmF0aW9uO1xyXG4gICAgICAgIHRsLnNlZWsoMCk7XHJcbiAgICAgICAgdGwucmVzZXQoKTtcclxuICAgICAgICBpZiAodGwuYXV0b3BsYXkpIHtcclxuICAgICAgICAgICAgdGwucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGw7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRsO1xyXG59XHJcblxyXG5hbmltZS52ZXJzaW9uID0gJzMuMi4xJztcclxuYW5pbWUuc3BlZWQgPSAxO1xyXG4vLyBUT0RPOiNyZXZpZXc6IG5hbWluZywgZG9jdW1lbnRhdGlvblxyXG5hbmltZS5zdXNwZW5kV2hlbkRvY3VtZW50SGlkZGVuID0gdHJ1ZTtcclxuYW5pbWUucnVubmluZyA9IGFjdGl2ZUluc3RhbmNlcztcclxuYW5pbWUucmVtb3ZlID0gcmVtb3ZlVGFyZ2V0c0Zyb21BY3RpdmVJbnN0YW5jZXM7XHJcbmFuaW1lLmdldCA9IGdldE9yaWdpbmFsVGFyZ2V0VmFsdWU7XHJcbmFuaW1lLnNldCA9IHNldFRhcmdldHNWYWx1ZTtcclxuYW5pbWUuY29udmVydFB4ID0gY29udmVydFB4VG9Vbml0O1xyXG5hbmltZS5wYXRoID0gZ2V0UGF0aDtcclxuYW5pbWUuc2V0RGFzaG9mZnNldCA9IHNldERhc2hvZmZzZXQ7XHJcbmFuaW1lLnN0YWdnZXIgPSBzdGFnZ2VyO1xyXG5hbmltZS50aW1lbGluZSA9IHRpbWVsaW5lO1xyXG5hbmltZS5lYXNpbmcgPSBwYXJzZUVhc2luZ3M7XHJcbmFuaW1lLnBlbm5lciA9IHBlbm5lcjtcclxuYW5pbWUucmFuZG9tID0gZnVuY3Rpb24obWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhbmltZTtcclxuIiwiLyohXHJcbldheXBvaW50cyAtIDQuMC4xXHJcbkNvcHlyaWdodCDCqSAyMDExLTIwMTYgQ2FsZWIgVHJvdWdodG9uXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cclxuaHR0cHM6Ly9naXRodWIuY29tL2ltYWtld2VidGhpbmdzL3dheXBvaW50cy9ibG9iL21hc3Rlci9saWNlbnNlcy50eHRcclxuKi9cclxuKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnXHJcblxyXG4gICAgdmFyIGtleUNvdW50ZXIgPSAwXHJcbiAgICB2YXIgYWxsV2F5cG9pbnRzID0ge31cclxuXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvd2F5cG9pbnQgKi9cclxuICAgIGZ1bmN0aW9uIFdheXBvaW50KG9wdGlvbnMpIHtcclxuICAgICAgICBpZiAoIW9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBvcHRpb25zIHBhc3NlZCB0byBXYXlwb2ludCBjb25zdHJ1Y3RvcicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb3B0aW9ucy5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZWxlbWVudCBvcHRpb24gcGFzc2VkIHRvIFdheXBvaW50IGNvbnN0cnVjdG9yJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvcHRpb25zLmhhbmRsZXIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBoYW5kbGVyIG9wdGlvbiBwYXNzZWQgdG8gV2F5cG9pbnQgY29uc3RydWN0b3InKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5rZXkgPSAnd2F5cG9pbnQtJyArIGtleUNvdW50ZXJcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBXYXlwb2ludC5BZGFwdGVyLmV4dGVuZCh7fSwgV2F5cG9pbnQuZGVmYXVsdHMsIG9wdGlvbnMpXHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5vcHRpb25zLmVsZW1lbnRcclxuICAgICAgICB0aGlzLmFkYXB0ZXIgPSBuZXcgV2F5cG9pbnQuQWRhcHRlcih0aGlzLmVsZW1lbnQpXHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IG9wdGlvbnMuaGFuZGxlclxyXG4gICAgICAgIHRoaXMuYXhpcyA9IHRoaXMub3B0aW9ucy5ob3Jpem9udGFsID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJ1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRoaXMub3B0aW9ucy5lbmFibGVkXHJcbiAgICAgICAgdGhpcy50cmlnZ2VyUG9pbnQgPSBudWxsXHJcbiAgICAgICAgdGhpcy5ncm91cCA9IFdheXBvaW50Lkdyb3VwLmZpbmRPckNyZWF0ZSh7XHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMub3B0aW9ucy5ncm91cCxcclxuICAgICAgICAgICAgYXhpczogdGhpcy5heGlzXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBXYXlwb2ludC5Db250ZXh0LmZpbmRPckNyZWF0ZUJ5RWxlbWVudCh0aGlzLm9wdGlvbnMuY29udGV4dClcclxuXHJcbiAgICAgICAgaWYgKFdheXBvaW50Lm9mZnNldEFsaWFzZXNbdGhpcy5vcHRpb25zLm9mZnNldF0pIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9mZnNldCA9IFdheXBvaW50Lm9mZnNldEFsaWFzZXNbdGhpcy5vcHRpb25zLm9mZnNldF1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ncm91cC5hZGQodGhpcylcclxuICAgICAgICB0aGlzLmNvbnRleHQuYWRkKHRoaXMpXHJcbiAgICAgICAgYWxsV2F5cG9pbnRzW3RoaXMua2V5XSA9IHRoaXNcclxuICAgICAgICBrZXlDb3VudGVyICs9IDFcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBXYXlwb2ludC5wcm90b3R5cGUucXVldWVUcmlnZ2VyID0gZnVuY3Rpb24oZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cC5xdWV1ZVRyaWdnZXIodGhpcywgZGlyZWN0aW9uKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIFdheXBvaW50LnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3MpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2Rlc3Ryb3kgKi9cclxuICAgIFdheXBvaW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnJlbW92ZSh0aGlzKVxyXG4gICAgICAgIHRoaXMuZ3JvdXAucmVtb3ZlKHRoaXMpXHJcbiAgICAgICAgZGVsZXRlIGFsbFdheXBvaW50c1t0aGlzLmtleV1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9kaXNhYmxlICovXHJcbiAgICBXYXlwb2ludC5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9lbmFibGUgKi9cclxuICAgIFdheXBvaW50LnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQucmVmcmVzaCgpXHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvbmV4dCAqL1xyXG4gICAgV2F5cG9pbnQucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ncm91cC5uZXh0KHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvcHJldmlvdXMgKi9cclxuICAgIFdheXBvaW50LnByb3RvdHlwZS5wcmV2aW91cyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdyb3VwLnByZXZpb3VzKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgV2F5cG9pbnQuaW52b2tlQWxsID0gZnVuY3Rpb24obWV0aG9kKSB7XHJcbiAgICAgICAgdmFyIGFsbFdheXBvaW50c0FycmF5ID0gW11cclxuICAgICAgICBmb3IgKHZhciB3YXlwb2ludEtleSBpbiBhbGxXYXlwb2ludHMpIHtcclxuICAgICAgICAgICAgYWxsV2F5cG9pbnRzQXJyYXkucHVzaChhbGxXYXlwb2ludHNbd2F5cG9pbnRLZXldKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgZW5kID0gYWxsV2F5cG9pbnRzQXJyYXkubGVuZ3RoOyBpIDwgZW5kOyBpKyspIHtcclxuICAgICAgICAgICAgYWxsV2F5cG9pbnRzQXJyYXlbaV1bbWV0aG9kXSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2Rlc3Ryb3ktYWxsICovXHJcbiAgICBXYXlwb2ludC5kZXN0cm95QWxsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgV2F5cG9pbnQuaW52b2tlQWxsKCdkZXN0cm95JylcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9kaXNhYmxlLWFsbCAqL1xyXG4gICAgV2F5cG9pbnQuZGlzYWJsZUFsbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFdheXBvaW50Lmludm9rZUFsbCgnZGlzYWJsZScpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvZW5hYmxlLWFsbCAqL1xyXG4gICAgV2F5cG9pbnQuZW5hYmxlQWxsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgV2F5cG9pbnQuQ29udGV4dC5yZWZyZXNoQWxsKClcclxuICAgICAgICBmb3IgKHZhciB3YXlwb2ludEtleSBpbiBhbGxXYXlwb2ludHMpIHtcclxuICAgICAgICAgICAgYWxsV2F5cG9pbnRzW3dheXBvaW50S2V5XS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL3JlZnJlc2gtYWxsICovXHJcbiAgICBXYXlwb2ludC5yZWZyZXNoQWxsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgV2F5cG9pbnQuQ29udGV4dC5yZWZyZXNoQWxsKClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS92aWV3cG9ydC1oZWlnaHQgKi9cclxuICAgIFdheXBvaW50LnZpZXdwb3J0SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvdmlld3BvcnQtd2lkdGggKi9cclxuICAgIFdheXBvaW50LnZpZXdwb3J0V2lkdGggPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXHJcbiAgICB9XHJcblxyXG4gICAgV2F5cG9pbnQuYWRhcHRlcnMgPSBbXVxyXG5cclxuICAgIFdheXBvaW50LmRlZmF1bHRzID0ge1xyXG4gICAgICAgIGNvbnRleHQ6IHdpbmRvdyxcclxuICAgICAgICBjb250aW51b3VzOiB0cnVlLFxyXG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICAgICAgZ3JvdXA6ICdkZWZhdWx0JyxcclxuICAgICAgICBob3Jpem9udGFsOiBmYWxzZSxcclxuICAgICAgICBvZmZzZXQ6IDBcclxuICAgIH1cclxuXHJcbiAgICBXYXlwb2ludC5vZmZzZXRBbGlhc2VzID0ge1xyXG4gICAgICAgICdib3R0b20taW4tdmlldyc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmlubmVySGVpZ2h0KCkgLSB0aGlzLmFkYXB0ZXIub3V0ZXJIZWlnaHQoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3JpZ2h0LWluLXZpZXcnOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5pbm5lcldpZHRoKCkgLSB0aGlzLmFkYXB0ZXIub3V0ZXJXaWR0aCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5XYXlwb2ludCA9IFdheXBvaW50XHJcbn0oKSk7XHJcbihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0J1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZVNoaW0oY2FsbGJhY2spIHtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBrZXlDb3VudGVyID0gMFxyXG4gICAgdmFyIGNvbnRleHRzID0ge31cclxuICAgIHZhciBXYXlwb2ludCA9IHdpbmRvdy5XYXlwb2ludFxyXG4gICAgdmFyIG9sZFdpbmRvd0xvYWQgPSB3aW5kb3cub25sb2FkXHJcblxyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2NvbnRleHQgKi9cclxuICAgIGZ1bmN0aW9uIENvbnRleHQoZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcclxuICAgICAgICB0aGlzLkFkYXB0ZXIgPSBXYXlwb2ludC5BZGFwdGVyXHJcbiAgICAgICAgdGhpcy5hZGFwdGVyID0gbmV3IHRoaXMuQWRhcHRlcihlbGVtZW50KVxyXG4gICAgICAgIHRoaXMua2V5ID0gJ3dheXBvaW50LWNvbnRleHQtJyArIGtleUNvdW50ZXJcclxuICAgICAgICB0aGlzLmRpZFNjcm9sbCA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5kaWRSZXNpemUgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMub2xkU2Nyb2xsID0ge1xyXG4gICAgICAgICAgICB4OiB0aGlzLmFkYXB0ZXIuc2Nyb2xsTGVmdCgpLFxyXG4gICAgICAgICAgICB5OiB0aGlzLmFkYXB0ZXIuc2Nyb2xsVG9wKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53YXlwb2ludHMgPSB7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsOiB7fSxcclxuICAgICAgICAgICAgaG9yaXpvbnRhbDoge31cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsZW1lbnQud2F5cG9pbnRDb250ZXh0S2V5ID0gdGhpcy5rZXlcclxuICAgICAgICBjb250ZXh0c1tlbGVtZW50LndheXBvaW50Q29udGV4dEtleV0gPSB0aGlzXHJcbiAgICAgICAga2V5Q291bnRlciArPSAxXHJcbiAgICAgICAgaWYgKCFXYXlwb2ludC53aW5kb3dDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIFdheXBvaW50LndpbmRvd0NvbnRleHQgPSB0cnVlXHJcbiAgICAgICAgICAgIFdheXBvaW50LndpbmRvd0NvbnRleHQgPSBuZXcgQ29udGV4dCh3aW5kb3cpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZVRocm90dGxlZFNjcm9sbEhhbmRsZXIoKVxyXG4gICAgICAgIHRoaXMuY3JlYXRlVGhyb3R0bGVkUmVzaXplSGFuZGxlcigpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24od2F5cG9pbnQpIHtcclxuICAgICAgICB2YXIgYXhpcyA9IHdheXBvaW50Lm9wdGlvbnMuaG9yaXpvbnRhbCA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCdcclxuICAgICAgICB0aGlzLndheXBvaW50c1theGlzXVt3YXlwb2ludC5rZXldID0gd2F5cG9pbnRcclxuICAgICAgICB0aGlzLnJlZnJlc2goKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmNoZWNrRW1wdHkgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgaG9yaXpvbnRhbEVtcHR5ID0gdGhpcy5BZGFwdGVyLmlzRW1wdHlPYmplY3QodGhpcy53YXlwb2ludHMuaG9yaXpvbnRhbClcclxuICAgICAgICB2YXIgdmVydGljYWxFbXB0eSA9IHRoaXMuQWRhcHRlci5pc0VtcHR5T2JqZWN0KHRoaXMud2F5cG9pbnRzLnZlcnRpY2FsKVxyXG4gICAgICAgIHZhciBpc1dpbmRvdyA9IHRoaXMuZWxlbWVudCA9PSB0aGlzLmVsZW1lbnQud2luZG93XHJcbiAgICAgICAgaWYgKGhvcml6b250YWxFbXB0eSAmJiB2ZXJ0aWNhbEVtcHR5ICYmICFpc1dpbmRvdykge1xyXG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIub2ZmKCcud2F5cG9pbnRzJylcclxuICAgICAgICAgICAgZGVsZXRlIGNvbnRleHRzW3RoaXMua2V5XVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5jcmVhdGVUaHJvdHRsZWRSZXNpemVIYW5kbGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHJlc2l6ZUhhbmRsZXIoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuaGFuZGxlUmVzaXplKClcclxuICAgICAgICAgICAgc2VsZi5kaWRSZXNpemUgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hZGFwdGVyLm9uKCdyZXNpemUud2F5cG9pbnRzJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghc2VsZi5kaWRSZXNpemUpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZGlkUmVzaXplID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgV2F5cG9pbnQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlc2l6ZUhhbmRsZXIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmNyZWF0ZVRocm90dGxlZFNjcm9sbEhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2Nyb2xsSGFuZGxlcigpIHtcclxuICAgICAgICAgICAgc2VsZi5oYW5kbGVTY3JvbGwoKVxyXG4gICAgICAgICAgICBzZWxmLmRpZFNjcm9sbCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFkYXB0ZXIub24oJ3Njcm9sbC53YXlwb2ludHMnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCFzZWxmLmRpZFNjcm9sbCB8fCBXYXlwb2ludC5pc1RvdWNoKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRpZFNjcm9sbCA9IHRydWVcclxuICAgICAgICAgICAgICAgIFdheXBvaW50LnJlcXVlc3RBbmltYXRpb25GcmFtZShzY3JvbGxIYW5kbGVyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5oYW5kbGVSZXNpemUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBXYXlwb2ludC5Db250ZXh0LnJlZnJlc2hBbGwoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmhhbmRsZVNjcm9sbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB0cmlnZ2VyZWRHcm91cHMgPSB7fVxyXG4gICAgICAgIHZhciBheGVzID0ge1xyXG4gICAgICAgICAgICBob3Jpem9udGFsOiB7XHJcbiAgICAgICAgICAgICAgICBuZXdTY3JvbGw6IHRoaXMuYWRhcHRlci5zY3JvbGxMZWZ0KCksXHJcbiAgICAgICAgICAgICAgICBvbGRTY3JvbGw6IHRoaXMub2xkU2Nyb2xsLngsXHJcbiAgICAgICAgICAgICAgICBmb3J3YXJkOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgYmFja3dhcmQ6ICdsZWZ0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbDoge1xyXG4gICAgICAgICAgICAgICAgbmV3U2Nyb2xsOiB0aGlzLmFkYXB0ZXIuc2Nyb2xsVG9wKCksXHJcbiAgICAgICAgICAgICAgICBvbGRTY3JvbGw6IHRoaXMub2xkU2Nyb2xsLnksXHJcbiAgICAgICAgICAgICAgICBmb3J3YXJkOiAnZG93bicsXHJcbiAgICAgICAgICAgICAgICBiYWNrd2FyZDogJ3VwJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBheGlzS2V5IGluIGF4ZXMpIHtcclxuICAgICAgICAgICAgdmFyIGF4aXMgPSBheGVzW2F4aXNLZXldXHJcbiAgICAgICAgICAgIHZhciBpc0ZvcndhcmQgPSBheGlzLm5ld1Njcm9sbCA+IGF4aXMub2xkU2Nyb2xsXHJcbiAgICAgICAgICAgIHZhciBkaXJlY3Rpb24gPSBpc0ZvcndhcmQgPyBheGlzLmZvcndhcmQgOiBheGlzLmJhY2t3YXJkXHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciB3YXlwb2ludEtleSBpbiB0aGlzLndheXBvaW50c1theGlzS2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdheXBvaW50ID0gdGhpcy53YXlwb2ludHNbYXhpc0tleV1bd2F5cG9pbnRLZXldXHJcbiAgICAgICAgICAgICAgICBpZiAod2F5cG9pbnQudHJpZ2dlclBvaW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciB3YXNCZWZvcmVUcmlnZ2VyUG9pbnQgPSBheGlzLm9sZFNjcm9sbCA8IHdheXBvaW50LnRyaWdnZXJQb2ludFxyXG4gICAgICAgICAgICAgICAgdmFyIG5vd0FmdGVyVHJpZ2dlclBvaW50ID0gYXhpcy5uZXdTY3JvbGwgPj0gd2F5cG9pbnQudHJpZ2dlclBvaW50XHJcbiAgICAgICAgICAgICAgICB2YXIgY3Jvc3NlZEZvcndhcmQgPSB3YXNCZWZvcmVUcmlnZ2VyUG9pbnQgJiYgbm93QWZ0ZXJUcmlnZ2VyUG9pbnRcclxuICAgICAgICAgICAgICAgIHZhciBjcm9zc2VkQmFja3dhcmQgPSAhd2FzQmVmb3JlVHJpZ2dlclBvaW50ICYmICFub3dBZnRlclRyaWdnZXJQb2ludFxyXG4gICAgICAgICAgICAgICAgaWYgKGNyb3NzZWRGb3J3YXJkIHx8IGNyb3NzZWRCYWNrd2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdheXBvaW50LnF1ZXVlVHJpZ2dlcihkaXJlY3Rpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcmVkR3JvdXBzW3dheXBvaW50Lmdyb3VwLmlkXSA9IHdheXBvaW50Lmdyb3VwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGdyb3VwS2V5IGluIHRyaWdnZXJlZEdyb3Vwcykge1xyXG4gICAgICAgICAgICB0cmlnZ2VyZWRHcm91cHNbZ3JvdXBLZXldLmZsdXNoVHJpZ2dlcnMoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5vbGRTY3JvbGwgPSB7XHJcbiAgICAgICAgICAgIHg6IGF4ZXMuaG9yaXpvbnRhbC5uZXdTY3JvbGwsXHJcbiAgICAgICAgICAgIHk6IGF4ZXMudmVydGljYWwubmV3U2Nyb2xsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmlubmVySGVpZ2h0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLyplc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50ID09IHRoaXMuZWxlbWVudC53aW5kb3cpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFdheXBvaW50LnZpZXdwb3J0SGVpZ2h0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgLyplc2xpbnQtZW5hYmxlIGVxZXFlcSAqL1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuaW5uZXJIZWlnaHQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKHdheXBvaW50KSB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMud2F5cG9pbnRzW3dheXBvaW50LmF4aXNdW3dheXBvaW50LmtleV1cclxuICAgICAgICB0aGlzLmNoZWNrRW1wdHkoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmlubmVyV2lkdGggPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvKmVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgPT0gdGhpcy5lbGVtZW50LndpbmRvdykge1xyXG4gICAgICAgICAgICByZXR1cm4gV2F5cG9pbnQudmlld3BvcnRXaWR0aCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qZXNsaW50LWVuYWJsZSBlcWVxZXEgKi9cclxuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmlubmVyV2lkdGgoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2NvbnRleHQtZGVzdHJveSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBhbGxXYXlwb2ludHMgPSBbXVxyXG4gICAgICAgIGZvciAodmFyIGF4aXMgaW4gdGhpcy53YXlwb2ludHMpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgd2F5cG9pbnRLZXkgaW4gdGhpcy53YXlwb2ludHNbYXhpc10pIHtcclxuICAgICAgICAgICAgICAgIGFsbFdheXBvaW50cy5wdXNoKHRoaXMud2F5cG9pbnRzW2F4aXNdW3dheXBvaW50S2V5XSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgZW5kID0gYWxsV2F5cG9pbnRzLmxlbmd0aDsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFsbFdheXBvaW50c1tpXS5kZXN0cm95KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvY29udGV4dC1yZWZyZXNoICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLyplc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cclxuICAgICAgICB2YXIgaXNXaW5kb3cgPSB0aGlzLmVsZW1lbnQgPT0gdGhpcy5lbGVtZW50LndpbmRvd1xyXG4gICAgICAgIC8qZXNsaW50LWVuYWJsZSBlcWVxZXEgKi9cclxuICAgICAgICB2YXIgY29udGV4dE9mZnNldCA9IGlzV2luZG93ID8gdW5kZWZpbmVkIDogdGhpcy5hZGFwdGVyLm9mZnNldCgpXHJcbiAgICAgICAgdmFyIHRyaWdnZXJlZEdyb3VwcyA9IHt9XHJcbiAgICAgICAgdmFyIGF4ZXNcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTY3JvbGwoKVxyXG4gICAgICAgIGF4ZXMgPSB7XHJcbiAgICAgICAgICAgIGhvcml6b250YWw6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRPZmZzZXQ6IGlzV2luZG93ID8gMCA6IGNvbnRleHRPZmZzZXQubGVmdCxcclxuICAgICAgICAgICAgICAgIGNvbnRleHRTY3JvbGw6IGlzV2luZG93ID8gMCA6IHRoaXMub2xkU2Nyb2xsLngsXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0RGltZW5zaW9uOiB0aGlzLmlubmVyV2lkdGgoKSxcclxuICAgICAgICAgICAgICAgIG9sZFNjcm9sbDogdGhpcy5vbGRTY3JvbGwueCxcclxuICAgICAgICAgICAgICAgIGZvcndhcmQ6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrd2FyZDogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0UHJvcDogJ2xlZnQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHZlcnRpY2FsOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0T2Zmc2V0OiBpc1dpbmRvdyA/IDAgOiBjb250ZXh0T2Zmc2V0LnRvcCxcclxuICAgICAgICAgICAgICAgIGNvbnRleHRTY3JvbGw6IGlzV2luZG93ID8gMCA6IHRoaXMub2xkU2Nyb2xsLnksXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0RGltZW5zaW9uOiB0aGlzLmlubmVySGVpZ2h0KCksXHJcbiAgICAgICAgICAgICAgICBvbGRTY3JvbGw6IHRoaXMub2xkU2Nyb2xsLnksXHJcbiAgICAgICAgICAgICAgICBmb3J3YXJkOiAnZG93bicsXHJcbiAgICAgICAgICAgICAgICBiYWNrd2FyZDogJ3VwJyxcclxuICAgICAgICAgICAgICAgIG9mZnNldFByb3A6ICd0b3AnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGF4aXNLZXkgaW4gYXhlcykge1xyXG4gICAgICAgICAgICB2YXIgYXhpcyA9IGF4ZXNbYXhpc0tleV1cclxuICAgICAgICAgICAgZm9yICh2YXIgd2F5cG9pbnRLZXkgaW4gdGhpcy53YXlwb2ludHNbYXhpc0tleV0pIHtcclxuICAgICAgICAgICAgICAgIHZhciB3YXlwb2ludCA9IHRoaXMud2F5cG9pbnRzW2F4aXNLZXldW3dheXBvaW50S2V5XVxyXG4gICAgICAgICAgICAgICAgdmFyIGFkanVzdG1lbnQgPSB3YXlwb2ludC5vcHRpb25zLm9mZnNldFxyXG4gICAgICAgICAgICAgICAgdmFyIG9sZFRyaWdnZXJQb2ludCA9IHdheXBvaW50LnRyaWdnZXJQb2ludFxyXG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRPZmZzZXQgPSAwXHJcbiAgICAgICAgICAgICAgICB2YXIgZnJlc2hXYXlwb2ludCA9IG9sZFRyaWdnZXJQb2ludCA9PSBudWxsXHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGV4dE1vZGlmaWVyLCB3YXNCZWZvcmVTY3JvbGwsIG5vd0FmdGVyU2Nyb2xsXHJcbiAgICAgICAgICAgICAgICB2YXIgdHJpZ2dlcmVkQmFja3dhcmQsIHRyaWdnZXJlZEZvcndhcmRcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAod2F5cG9pbnQuZWxlbWVudCAhPT0gd2F5cG9pbnQuZWxlbWVudC53aW5kb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50T2Zmc2V0ID0gd2F5cG9pbnQuYWRhcHRlci5vZmZzZXQoKVtheGlzLm9mZnNldFByb3BdXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhZGp1c3RtZW50ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRqdXN0bWVudCA9IGFkanVzdG1lbnQuYXBwbHkod2F5cG9pbnQpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhZGp1c3RtZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkanVzdG1lbnQgPSBwYXJzZUZsb2F0KGFkanVzdG1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdheXBvaW50Lm9wdGlvbnMub2Zmc2V0LmluZGV4T2YoJyUnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkanVzdG1lbnQgPSBNYXRoLmNlaWwoYXhpcy5jb250ZXh0RGltZW5zaW9uICogYWRqdXN0bWVudCAvIDEwMClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29udGV4dE1vZGlmaWVyID0gYXhpcy5jb250ZXh0U2Nyb2xsIC0gYXhpcy5jb250ZXh0T2Zmc2V0XHJcbiAgICAgICAgICAgICAgICB3YXlwb2ludC50cmlnZ2VyUG9pbnQgPSBNYXRoLmZsb29yKGVsZW1lbnRPZmZzZXQgKyBjb250ZXh0TW9kaWZpZXIgLSBhZGp1c3RtZW50KVxyXG4gICAgICAgICAgICAgICAgd2FzQmVmb3JlU2Nyb2xsID0gb2xkVHJpZ2dlclBvaW50IDwgYXhpcy5vbGRTY3JvbGxcclxuICAgICAgICAgICAgICAgIG5vd0FmdGVyU2Nyb2xsID0gd2F5cG9pbnQudHJpZ2dlclBvaW50ID49IGF4aXMub2xkU2Nyb2xsXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyZWRCYWNrd2FyZCA9IHdhc0JlZm9yZVNjcm9sbCAmJiBub3dBZnRlclNjcm9sbFxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcmVkRm9yd2FyZCA9ICF3YXNCZWZvcmVTY3JvbGwgJiYgIW5vd0FmdGVyU2Nyb2xsXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFmcmVzaFdheXBvaW50ICYmIHRyaWdnZXJlZEJhY2t3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2F5cG9pbnQucXVldWVUcmlnZ2VyKGF4aXMuYmFja3dhcmQpXHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcmVkR3JvdXBzW3dheXBvaW50Lmdyb3VwLmlkXSA9IHdheXBvaW50Lmdyb3VwXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFmcmVzaFdheXBvaW50ICYmIHRyaWdnZXJlZEZvcndhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB3YXlwb2ludC5xdWV1ZVRyaWdnZXIoYXhpcy5mb3J3YXJkKVxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJlZEdyb3Vwc1t3YXlwb2ludC5ncm91cC5pZF0gPSB3YXlwb2ludC5ncm91cFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmcmVzaFdheXBvaW50ICYmIGF4aXMub2xkU2Nyb2xsID49IHdheXBvaW50LnRyaWdnZXJQb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdheXBvaW50LnF1ZXVlVHJpZ2dlcihheGlzLmZvcndhcmQpXHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcmVkR3JvdXBzW3dheXBvaW50Lmdyb3VwLmlkXSA9IHdheXBvaW50Lmdyb3VwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFdheXBvaW50LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgZ3JvdXBLZXkgaW4gdHJpZ2dlcmVkR3JvdXBzKSB7XHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyZWRHcm91cHNbZ3JvdXBLZXldLmZsdXNoVHJpZ2dlcnMoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LmZpbmRPckNyZWF0ZUJ5RWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gQ29udGV4dC5maW5kQnlFbGVtZW50KGVsZW1lbnQpIHx8IG5ldyBDb250ZXh0KGVsZW1lbnQpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5yZWZyZXNoQWxsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZm9yICh2YXIgY29udGV4dElkIGluIGNvbnRleHRzKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHRzW2NvbnRleHRJZF0ucmVmcmVzaCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2NvbnRleHQtZmluZC1ieS1lbGVtZW50ICovXHJcbiAgICBDb250ZXh0LmZpbmRCeUVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRleHRzW2VsZW1lbnQud2F5cG9pbnRDb250ZXh0S2V5XVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAob2xkV2luZG93TG9hZCkge1xyXG4gICAgICAgICAgICBvbGRXaW5kb3dMb2FkKClcclxuICAgICAgICB9XHJcbiAgICAgICAgQ29udGV4dC5yZWZyZXNoQWxsKClcclxuICAgIH1cclxuXHJcblxyXG4gICAgV2F5cG9pbnQucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgcmVxdWVzdEZuID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lU2hpbVxyXG4gICAgICAgIHJlcXVlc3RGbi5jYWxsKHdpbmRvdywgY2FsbGJhY2spXHJcbiAgICB9XHJcbiAgICBXYXlwb2ludC5Db250ZXh0ID0gQ29udGV4dFxyXG59KCkpO1xyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCdcclxuXHJcbiAgICBmdW5jdGlvbiBieVRyaWdnZXJQb2ludChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGEudHJpZ2dlclBvaW50IC0gYi50cmlnZ2VyUG9pbnRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBieVJldmVyc2VUcmlnZ2VyUG9pbnQoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBiLnRyaWdnZXJQb2ludCAtIGEudHJpZ2dlclBvaW50XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdyb3VwcyA9IHtcclxuICAgICAgICB2ZXJ0aWNhbDoge30sXHJcbiAgICAgICAgaG9yaXpvbnRhbDoge31cclxuICAgIH1cclxuICAgIHZhciBXYXlwb2ludCA9IHdpbmRvdy5XYXlwb2ludFxyXG5cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9ncm91cCAqL1xyXG4gICAgZnVuY3Rpb24gR3JvdXAob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZVxyXG4gICAgICAgIHRoaXMuYXhpcyA9IG9wdGlvbnMuYXhpc1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLm5hbWUgKyAnLScgKyB0aGlzLmF4aXNcclxuICAgICAgICB0aGlzLndheXBvaW50cyA9IFtdXHJcbiAgICAgICAgdGhpcy5jbGVhclRyaWdnZXJRdWV1ZXMoKVxyXG4gICAgICAgIGdyb3Vwc1t0aGlzLmF4aXNdW3RoaXMubmFtZV0gPSB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHdheXBvaW50KSB7XHJcbiAgICAgICAgdGhpcy53YXlwb2ludHMucHVzaCh3YXlwb2ludClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBHcm91cC5wcm90b3R5cGUuY2xlYXJUcmlnZ2VyUXVldWVzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyUXVldWVzID0ge1xyXG4gICAgICAgICAgICB1cDogW10sXHJcbiAgICAgICAgICAgIGRvd246IFtdLFxyXG4gICAgICAgICAgICBsZWZ0OiBbXSxcclxuICAgICAgICAgICAgcmlnaHQ6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIEdyb3VwLnByb3RvdHlwZS5mbHVzaFRyaWdnZXJzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZm9yICh2YXIgZGlyZWN0aW9uIGluIHRoaXMudHJpZ2dlclF1ZXVlcykge1xyXG4gICAgICAgICAgICB2YXIgd2F5cG9pbnRzID0gdGhpcy50cmlnZ2VyUXVldWVzW2RpcmVjdGlvbl1cclxuICAgICAgICAgICAgdmFyIHJldmVyc2UgPSBkaXJlY3Rpb24gPT09ICd1cCcgfHwgZGlyZWN0aW9uID09PSAnbGVmdCdcclxuICAgICAgICAgICAgd2F5cG9pbnRzLnNvcnQocmV2ZXJzZSA/IGJ5UmV2ZXJzZVRyaWdnZXJQb2ludCA6IGJ5VHJpZ2dlclBvaW50KVxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgZW5kID0gd2F5cG9pbnRzLmxlbmd0aDsgaSA8IGVuZDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2F5cG9pbnQgPSB3YXlwb2ludHNbaV1cclxuICAgICAgICAgICAgICAgIGlmICh3YXlwb2ludC5vcHRpb25zLmNvbnRpbnVvdXMgfHwgaSA9PT0gd2F5cG9pbnRzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB3YXlwb2ludC50cmlnZ2VyKFtkaXJlY3Rpb25dKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xlYXJUcmlnZ2VyUXVldWVzKClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBHcm91cC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKHdheXBvaW50KSB7XHJcbiAgICAgICAgdGhpcy53YXlwb2ludHMuc29ydChieVRyaWdnZXJQb2ludClcclxuICAgICAgICB2YXIgaW5kZXggPSBXYXlwb2ludC5BZGFwdGVyLmluQXJyYXkod2F5cG9pbnQsIHRoaXMud2F5cG9pbnRzKVxyXG4gICAgICAgIHZhciBpc0xhc3QgPSBpbmRleCA9PT0gdGhpcy53YXlwb2ludHMubGVuZ3RoIC0gMVxyXG4gICAgICAgIHJldHVybiBpc0xhc3QgPyBudWxsIDogdGhpcy53YXlwb2ludHNbaW5kZXggKyAxXVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIEdyb3VwLnByb3RvdHlwZS5wcmV2aW91cyA9IGZ1bmN0aW9uKHdheXBvaW50KSB7XHJcbiAgICAgICAgdGhpcy53YXlwb2ludHMuc29ydChieVRyaWdnZXJQb2ludClcclxuICAgICAgICB2YXIgaW5kZXggPSBXYXlwb2ludC5BZGFwdGVyLmluQXJyYXkod2F5cG9pbnQsIHRoaXMud2F5cG9pbnRzKVxyXG4gICAgICAgIHJldHVybiBpbmRleCA/IHRoaXMud2F5cG9pbnRzW2luZGV4IC0gMV0gOiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLnF1ZXVlVHJpZ2dlciA9IGZ1bmN0aW9uKHdheXBvaW50LCBkaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXJRdWV1ZXNbZGlyZWN0aW9uXS5wdXNoKHdheXBvaW50KVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIEdyb3VwLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbih3YXlwb2ludCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IFdheXBvaW50LkFkYXB0ZXIuaW5BcnJheSh3YXlwb2ludCwgdGhpcy53YXlwb2ludHMpXHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy53YXlwb2ludHMuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9maXJzdCAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLmZpcnN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2F5cG9pbnRzWzBdXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvbGFzdCAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLmxhc3QgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YXlwb2ludHNbdGhpcy53YXlwb2ludHMubGVuZ3RoIC0gMV1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBHcm91cC5maW5kT3JDcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIGdyb3Vwc1tvcHRpb25zLmF4aXNdW29wdGlvbnMubmFtZV0gfHwgbmV3IEdyb3VwKG9wdGlvbnMpXHJcbiAgICB9XHJcblxyXG4gICAgV2F5cG9pbnQuR3JvdXAgPSBHcm91cFxyXG59KCkpO1xyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCdcclxuXHJcbiAgICB2YXIgV2F5cG9pbnQgPSB3aW5kb3cuV2F5cG9pbnRcclxuXHJcbiAgICBmdW5jdGlvbiBpc1dpbmRvdyhlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgPT09IGVsZW1lbnQud2luZG93XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0V2luZG93KGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoaXNXaW5kb3coZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuZGVmYXVsdFZpZXdcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBOb0ZyYW1ld29ya0FkYXB0ZXIoZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcclxuICAgICAgICB0aGlzLmhhbmRsZXJzID0ge31cclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLmlubmVySGVpZ2h0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGlzV2luID0gaXNXaW5kb3codGhpcy5lbGVtZW50KVxyXG4gICAgICAgIHJldHVybiBpc1dpbiA/IHRoaXMuZWxlbWVudC5pbm5lckhlaWdodCA6IHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHRcclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLmlubmVyV2lkdGggPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgaXNXaW4gPSBpc1dpbmRvdyh0aGlzLmVsZW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIGlzV2luID8gdGhpcy5lbGVtZW50LmlubmVyV2lkdGggOiB0aGlzLmVsZW1lbnQuY2xpZW50V2lkdGhcclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKGVsZW1lbnQsIGxpc3RlbmVycywgaGFuZGxlcikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgZW5kID0gbGlzdGVuZXJzLmxlbmd0aCAtIDE7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldXHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhbmRsZXIgfHwgaGFuZGxlciA9PT0gbGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobGlzdGVuZXIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBldmVudFBhcnRzID0gZXZlbnQuc3BsaXQoJy4nKVxyXG4gICAgICAgIHZhciBldmVudFR5cGUgPSBldmVudFBhcnRzWzBdXHJcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9IGV2ZW50UGFydHNbMV1cclxuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudFxyXG5cclxuICAgICAgICBpZiAobmFtZXNwYWNlICYmIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXSAmJiBldmVudFR5cGUpIHtcclxuICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXJzKGVsZW1lbnQsIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXVtldmVudFR5cGVdLCBoYW5kbGVyKVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV1bZXZlbnRUeXBlXSA9IFtdXHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgbnMgaW4gdGhpcy5oYW5kbGVycykge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXJzKGVsZW1lbnQsIHRoaXMuaGFuZGxlcnNbbnNdW2V2ZW50VHlwZV0gfHwgW10sIGhhbmRsZXIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXJzW25zXVtldmVudFR5cGVdID0gW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZXNwYWNlICYmIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB0eXBlIGluIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXSkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlTGlzdGVuZXJzKGVsZW1lbnQsIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXVt0eXBlXSwgaGFuZGxlcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV0gPSB7fVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBBZGFwdGVkIGZyb20galF1ZXJ5IDEueCBvZmZzZXQoKSAqL1xyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5vZmZzZXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XHJcbiAgICAgICAgdmFyIHdpbiA9IGdldFdpbmRvdyh0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudClcclxuICAgICAgICB2YXIgcmVjdCA9IHtcclxuICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICBsZWZ0OiAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xyXG4gICAgICAgICAgICByZWN0ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b3A6IHJlY3QudG9wICsgd2luLnBhZ2VZT2Zmc2V0IC0gZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCxcclxuICAgICAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0IC0gZG9jdW1lbnRFbGVtZW50LmNsaWVudExlZnRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdmFyIGV2ZW50UGFydHMgPSBldmVudC5zcGxpdCgnLicpXHJcbiAgICAgICAgdmFyIGV2ZW50VHlwZSA9IGV2ZW50UGFydHNbMF1cclxuICAgICAgICB2YXIgbmFtZXNwYWNlID0gZXZlbnRQYXJ0c1sxXSB8fCAnX19kZWZhdWx0J1xyXG4gICAgICAgIHZhciBuc0hhbmRsZXJzID0gdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdID0gdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdIHx8IHt9XHJcbiAgICAgICAgdmFyIG5zVHlwZUxpc3QgPSBuc0hhbmRsZXJzW2V2ZW50VHlwZV0gPSBuc0hhbmRsZXJzW2V2ZW50VHlwZV0gfHwgW11cclxuXHJcbiAgICAgICAgbnNUeXBlTGlzdC5wdXNoKGhhbmRsZXIpXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyKVxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUub3V0ZXJIZWlnaHQgPSBmdW5jdGlvbihpbmNsdWRlTWFyZ2luKSB7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuaW5uZXJIZWlnaHQoKVxyXG4gICAgICAgIHZhciBjb21wdXRlZFN0eWxlXHJcblxyXG4gICAgICAgIGlmIChpbmNsdWRlTWFyZ2luICYmICFpc1dpbmRvdyh0aGlzLmVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpXHJcbiAgICAgICAgICAgIGhlaWdodCArPSBwYXJzZUludChjb21wdXRlZFN0eWxlLm1hcmdpblRvcCwgMTApXHJcbiAgICAgICAgICAgIGhlaWdodCArPSBwYXJzZUludChjb21wdXRlZFN0eWxlLm1hcmdpbkJvdHRvbSwgMTApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaGVpZ2h0XHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5vdXRlcldpZHRoID0gZnVuY3Rpb24oaW5jbHVkZU1hcmdpbikge1xyXG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMuaW5uZXJXaWR0aCgpXHJcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGVcclxuXHJcbiAgICAgICAgaWYgKGluY2x1ZGVNYXJnaW4gJiYgIWlzV2luZG93KHRoaXMuZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClcclxuICAgICAgICAgICAgd2lkdGggKz0gcGFyc2VJbnQoY29tcHV0ZWRTdHlsZS5tYXJnaW5MZWZ0LCAxMClcclxuICAgICAgICAgICAgd2lkdGggKz0gcGFyc2VJbnQoY29tcHV0ZWRTdHlsZS5tYXJnaW5SaWdodCwgMTApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gd2lkdGhcclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLnNjcm9sbExlZnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgd2luID0gZ2V0V2luZG93KHRoaXMuZWxlbWVudClcclxuICAgICAgICByZXR1cm4gd2luID8gd2luLnBhZ2VYT2Zmc2V0IDogdGhpcy5lbGVtZW50LnNjcm9sbExlZnRcclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLnNjcm9sbFRvcCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB3aW4gPSBnZXRXaW5kb3codGhpcy5lbGVtZW50KVxyXG4gICAgICAgIHJldHVybiB3aW4gPyB3aW4ucGFnZVlPZmZzZXQgOiB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wXHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLmV4dGVuZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBtZXJnZSh0YXJnZXQsIG9iaikge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBvYmpba2V5XVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDEsIGVuZCA9IGFyZ3MubGVuZ3RoOyBpIDwgZW5kOyBpKyspIHtcclxuICAgICAgICAgICAgbWVyZ2UoYXJnc1swXSwgYXJnc1tpXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyZ3NbMF1cclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIuaW5BcnJheSA9IGZ1bmN0aW9uKGVsZW1lbnQsIGFycmF5LCBpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5ID09IG51bGwgPyAtMSA6IGFycmF5LmluZGV4T2YoZWxlbWVudCwgaSlcclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIuaXNFbXB0eU9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIC8qIGVzbGludCBuby11bnVzZWQtdmFyczogMCAqL1xyXG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIFdheXBvaW50LmFkYXB0ZXJzLnB1c2goe1xyXG4gICAgICAgIG5hbWU6ICdub2ZyYW1ld29yaycsXHJcbiAgICAgICAgQWRhcHRlcjogTm9GcmFtZXdvcmtBZGFwdGVyXHJcbiAgICB9KVxyXG4gICAgV2F5cG9pbnQuQWRhcHRlciA9IE5vRnJhbWV3b3JrQWRhcHRlclxyXG59KCkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9