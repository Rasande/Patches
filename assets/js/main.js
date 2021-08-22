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
/* harmony import */ var _modules_modalMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modalMenu */ "./src/scripts/modules/modalMenu.js");
/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animation */ "./src/scripts/modules/animation.js");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ "./src/scripts/modules/search.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ "./src/scripts/modules/forms.js");




var modalMenu = new _modules_modalMenu__WEBPACK_IMPORTED_MODULE_0__["default"]();
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

/***/ "./src/scripts/modules/modalMenu.js":
/*!******************************************!*\
  !*** ./src/scripts/modules/modalMenu.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/scripts/modules/utility.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ModalMenu = /*#__PURE__*/function () {
  function ModalMenu() {
    _classCallCheck(this, ModalMenu);

    this.header = document.querySelector('.site-header');
    this.toggleMenu = document.querySelectorAll('[data-toggle]');
    this.menu = document.querySelectorAll('[data-name]');
    this.submenuBtn = document.querySelectorAll('.submenu-btn');
    this.isMenuOpen = false;
    this.events();
    this.mainPadding();
  }

  _createClass(ModalMenu, [{
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
      window.addEventListener('resize', function () {
        return _this.mainPadding();
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
  }, {
    key: "mainPadding",
    value: function mainPadding() {
      var main = document.querySelector('.site-main');
      var header = document.querySelector('.site-header');
      var headerHeight = header.offsetHeight;
      main.style.paddingTop = headerHeight + 'px';
    }
  }]);

  return ModalMenu;
}();

/* harmony default export */ __webpack_exports__["default"] = (ModalMenu);

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

    this.searchModal = document.querySelector('.modal-search');
    this.searchButton = document.querySelector('.modal-search-toggle');
    this.searchField = document.querySelector('.modal-search-input');
    this.searchOverlay = document.querySelector('.modal-search-overlay');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL2Zvcm1zLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZHVsZXMvbW9kYWxNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZHVsZXMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZHVsZXMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy92ZW5kb3IvYW5pbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdmVuZG9yL25vZnJhbWV3b3JrLndheXBvaW50cy5qcyJdLCJuYW1lcyI6WyJtb2RhbE1lbnUiLCJNb2RhbE1lbnUiLCJhbmltYXRpb24iLCJBbmltYXRpb25zIiwic2VhcmNoIiwiU2VhcmNoIiwiZm9ybXMiLCJGb3JtcyIsIm9kZEV2ZW5BbmltYXRpb24iLCJvZGRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXZlbnMiLCJmb3JFYWNoIiwiZWxlbWVudCIsIldheXBvaW50IiwiaGFuZGxlciIsImFuaW1lIiwidGFyZ2V0cyIsIm9wYWNpdHkiLCJ0cmFuc2xhdGVZIiwiZGVsYXkiLCJkdXJhdGlvbiIsImVhc2luZyIsImRlc3Ryb3kiLCJvZmZzZXQiLCJ0ZXh0YXJlYSIsInNlbGVjdCIsImN1c3RvbVNlbGVjdERyb3Bkb3duIiwiZXZlbnRzIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0VGV4dGFyZWFIZWlnaHQiLCJ0YXJnZXQiLCJzdHlsZSIsImhlaWdodCIsIlV0aWxpdHkiLCJ0ZXh0YXJlYUhlaWdodCIsInZhbHVlIiwiaGVhZGVyIiwicXVlcnlTZWxlY3RvciIsInRvZ2dsZU1lbnUiLCJtZW51Iiwic3VibWVudUJ0biIsImlzTWVudU9wZW4iLCJtYWluUGFkZGluZyIsInRyaWdnZXJNZW51IiwidG9nZ2xlU3ViTWVudSIsImtleVByZXNzIiwid2luZG93IiwiY2hhbmdlSGVhZGVyIiwiY3VycmVudFRhcmdldCIsImdldEF0dHJpYnV0ZSIsInRhcmdldE1lbnUiLCJvdGhlck1lbnVzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJjbG9zZU1lbnUiLCJvcGVuTWVudSIsImlkIiwibWVudUJ0biIsImJvZHlTY3JvbGxMb2NrIiwiYWRkIiwic2V0QXR0cmlidXRlIiwiYm9keVNjcm9sbFVubG9jayIsInJlbW92ZSIsImJ0biIsInBhcmVudE5vZGUiLCJjbGllbnRIZWlnaHQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXR0cmlidXRlIiwib25jZSIsImtleUNvZGUiLCJzY3JvbGxQb3MiLCJzY3JvbGxZIiwibWFpbiIsImhlYWRlckhlaWdodCIsIm9mZnNldEhlaWdodCIsInBhZGRpbmdUb3AiLCJzZWFyY2hNb2RhbCIsInNlYXJjaEJ1dHRvbiIsInNlYXJjaEZpZWxkIiwic2VhcmNoT3ZlcmxheSIsImlzU2VhcmNoT3BlbiIsInRvZ2dsZU1vZGFsIiwiY2xvc2VNb2RhbCIsIm9wZW5Nb2RhbCIsImZvY3VzIiwiYm9keSIsInBvc2l0aW9uIiwidG9wIiwiYm9keVN0eWxlIiwic2Nyb2xsVG8iLCJwYXJzZUludCIsIm51bWJlck9mTGluZUJyZWFrcyIsIm1hdGNoIiwibGVuZ3RoIiwibmV3SGVpZ2h0IiwiY2hlY2siLCJhIiwidGVzdCIsInN1YnN0ciIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInZlbmRvciIsIm9wZXJhIiwiZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MiLCJ1cGRhdGUiLCJiZWdpbiIsImxvb3BCZWdpbiIsImNoYW5nZUJlZ2luIiwiY2hhbmdlIiwiY2hhbmdlQ29tcGxldGUiLCJsb29wQ29tcGxldGUiLCJjb21wbGV0ZSIsImxvb3AiLCJkaXJlY3Rpb24iLCJhdXRvcGxheSIsInRpbWVsaW5lT2Zmc2V0IiwiZGVmYXVsdFR3ZWVuU2V0dGluZ3MiLCJlbmREZWxheSIsInJvdW5kIiwidmFsaWRUcmFuc2Zvcm1zIiwiY2FjaGUiLCJDU1MiLCJzcHJpbmdzIiwibWluTWF4IiwidmFsIiwibWluIiwibWF4IiwiTWF0aCIsInN0cmluZ0NvbnRhaW5zIiwic3RyIiwidGV4dCIsImluZGV4T2YiLCJhcHBseUFyZ3VtZW50cyIsImZ1bmMiLCJhcmdzIiwiYXBwbHkiLCJpcyIsImFyciIsIkFycmF5IiwiaXNBcnJheSIsIm9iaiIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInB0aCIsImhhc093blByb3BlcnR5Iiwic3ZnIiwiU1ZHRWxlbWVudCIsImlucCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJkb20iLCJub2RlVHlwZSIsImZuYyIsInVuZCIsIm5pbCIsImhleCIsInJnYiIsImhzbCIsImNvbCIsImtleSIsInBhcnNlRWFzaW5nUGFyYW1ldGVycyIsInN0cmluZyIsImV4ZWMiLCJzcGxpdCIsIm1hcCIsInAiLCJwYXJzZUZsb2F0Iiwic3ByaW5nIiwicGFyYW1zIiwibWFzcyIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJ2ZWxvY2l0eSIsIncwIiwic3FydCIsInpldGEiLCJ3ZCIsImIiLCJzb2x2ZXIiLCJ0IiwicHJvZ3Jlc3MiLCJleHAiLCJjb3MiLCJzaW4iLCJnZXREdXJhdGlvbiIsImNhY2hlZCIsImZyYW1lIiwiZWxhcHNlZCIsInJlc3QiLCJzdGVwcyIsImNlaWwiLCJiZXppZXIiLCJrU3BsaW5lVGFibGVTaXplIiwia1NhbXBsZVN0ZXBTaXplIiwiQSIsImFBMSIsImFBMiIsIkIiLCJDIiwiY2FsY0JlemllciIsImFUIiwiZ2V0U2xvcGUiLCJiaW5hcnlTdWJkaXZpZGUiLCJhWCIsImFBIiwiYUIiLCJtWDEiLCJtWDIiLCJjdXJyZW50WCIsImN1cnJlbnRUIiwiaSIsImFicyIsIm5ld3RvblJhcGhzb25JdGVyYXRlIiwiYUd1ZXNzVCIsImN1cnJlbnRTbG9wZSIsIm1ZMSIsIm1ZMiIsInNhbXBsZVZhbHVlcyIsIkZsb2F0MzJBcnJheSIsImdldFRGb3JYIiwiaW50ZXJ2YWxTdGFydCIsImN1cnJlbnRTYW1wbGUiLCJsYXN0U2FtcGxlIiwiZGlzdCIsImd1ZXNzRm9yVCIsImluaXRpYWxTbG9wZSIsIngiLCJwZW5uZXIiLCJlYXNlcyIsImxpbmVhciIsImZ1bmN0aW9uRWFzaW5ncyIsIlNpbmUiLCJQSSIsIkNpcmMiLCJCYWNrIiwiQm91bmNlIiwicG93MiIsInBvdyIsIkVsYXN0aWMiLCJhbXBsaXR1ZGUiLCJwZXJpb2QiLCJhc2luIiwiYmFzZUVhc2luZ3MiLCJuYW1lIiwia2V5cyIsImVhc2VJbiIsInBhcnNlRWFzaW5ncyIsImVhc2UiLCJzZWxlY3RTdHJpbmciLCJub2RlcyIsImZpbHRlckFycmF5IiwiY2FsbGJhY2siLCJsZW4iLCJ0aGlzQXJnIiwiYXJndW1lbnRzIiwicmVzdWx0IiwicHVzaCIsImZsYXR0ZW5BcnJheSIsInJlZHVjZSIsImNvbmNhdCIsInRvQXJyYXkiLCJvIiwiTm9kZUxpc3QiLCJIVE1MQ29sbGVjdGlvbiIsInNsaWNlIiwiYXJyYXlDb250YWlucyIsInNvbWUiLCJjbG9uZU9iamVjdCIsImNsb25lIiwicmVwbGFjZU9iamVjdFByb3BzIiwibzEiLCJvMiIsIm1lcmdlT2JqZWN0cyIsInJnYlRvUmdiYSIsInJnYlZhbHVlIiwiaGV4VG9SZ2JhIiwiaGV4VmFsdWUiLCJyZ3giLCJyZXBsYWNlIiwibSIsInIiLCJnIiwiaHNsVG9SZ2JhIiwiaHNsVmFsdWUiLCJoIiwicyIsImwiLCJodWUycmdiIiwicSIsImNvbG9yVG9SZ2IiLCJnZXRVbml0IiwiZ2V0VHJhbnNmb3JtVW5pdCIsInByb3BOYW1lIiwiZ2V0RnVuY3Rpb25WYWx1ZSIsImFuaW1hdGFibGUiLCJ0b3RhbCIsInByb3AiLCJjb252ZXJ0UHhUb1VuaXQiLCJ1bml0IiwidmFsdWVVbml0IiwiYmFzZWxpbmUiLCJ0ZW1wRWwiLCJjcmVhdGVFbGVtZW50IiwidGFnTmFtZSIsInBhcmVudEVsIiwiYXBwZW5kQ2hpbGQiLCJ3aWR0aCIsImZhY3RvciIsIm9mZnNldFdpZHRoIiwicmVtb3ZlQ2hpbGQiLCJjb252ZXJ0ZWRVbml0IiwiZ2V0Q1NTVmFsdWUiLCJ1cHBlcmNhc2VQcm9wTmFtZSIsInRvTG93ZXJDYXNlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJnZXRBbmltYXRpb25UeXBlIiwiZ2V0RWxlbWVudFRyYW5zZm9ybXMiLCJ0cmFuc2Zvcm0iLCJyZWciLCJ0cmFuc2Zvcm1zIiwiTWFwIiwic2V0IiwiZ2V0VHJhbnNmb3JtVmFsdWUiLCJkZWZhdWx0VmFsIiwiZ2V0IiwibGlzdCIsImdldE9yaWdpbmFsVGFyZ2V0VmFsdWUiLCJnZXRSZWxhdGl2ZVZhbHVlIiwidG8iLCJmcm9tIiwib3BlcmF0b3IiLCJ1IiwieSIsInZhbGlkYXRlVmFsdWUiLCJvcmlnaW5hbFVuaXQiLCJ1bml0TGVzcyIsImdldERpc3RhbmNlIiwicDEiLCJwMiIsImdldENpcmNsZUxlbmd0aCIsImdldFJlY3RMZW5ndGgiLCJnZXRMaW5lTGVuZ3RoIiwiZ2V0UG9seWxpbmVMZW5ndGgiLCJwb2ludHMiLCJ0b3RhbExlbmd0aCIsInByZXZpb3VzUG9zIiwibnVtYmVyT2ZJdGVtcyIsImN1cnJlbnRQb3MiLCJnZXRJdGVtIiwiZ2V0UG9seWdvbkxlbmd0aCIsImdldFRvdGFsTGVuZ3RoIiwic2V0RGFzaG9mZnNldCIsInBhdGhMZW5ndGgiLCJnZXRQYXJlbnRTdmdFbCIsImdldFBhcmVudFN2ZyIsInBhdGhFbCIsInN2Z0RhdGEiLCJwYXJlbnRTdmdFbCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ2aWV3Qm94QXR0ciIsInZpZXdCb3giLCJ3IiwidlciLCJ2SCIsImdldFBhdGgiLCJwYXRoIiwicGVyY2VudCIsInByb3BlcnR5IiwiZ2V0UGF0aFByb2dyZXNzIiwiaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHIiwicG9pbnQiLCJnZXRQb2ludEF0TGVuZ3RoIiwicDAiLCJzY2FsZVgiLCJzY2FsZVkiLCJhdGFuMiIsImRlY29tcG9zZVZhbHVlIiwib3JpZ2luYWwiLCJudW1iZXJzIiwiTnVtYmVyIiwic3RyaW5ncyIsInBhcnNlVGFyZ2V0cyIsInRhcmdldHNBcnJheSIsIml0ZW0iLCJwb3MiLCJzZWxmIiwiZ2V0QW5pbWF0YWJsZXMiLCJwYXJzZWQiLCJub3JtYWxpemVQcm9wZXJ0eVR3ZWVucyIsInR3ZWVuU2V0dGluZ3MiLCJzZXR0aW5ncyIsImlzRnJvbVRvIiwicHJvcEFycmF5IiwidiIsImsiLCJmbGF0dGVuS2V5ZnJhbWVzIiwia2V5ZnJhbWVzIiwicHJvcGVydHlOYW1lcyIsInByb3BlcnRpZXMiLCJuZXdLZXkiLCJnZXRQcm9wZXJ0aWVzIiwidHdlZW5zIiwibm9ybWFsaXplVHdlZW5WYWx1ZXMiLCJ0d2VlbiIsIm5vcm1hbGl6ZVR3ZWVucyIsInByZXZpb3VzVHdlZW4iLCJ0d2VlblZhbHVlIiwidG9Vbml0Iiwib3JpZ2luYWxWYWx1ZSIsInByZXZpb3VzVmFsdWUiLCJmcm9tVW5pdCIsInN0YXJ0IiwiZW5kIiwiaXNQYXRoIiwiaXNDb2xvciIsInNldFByb2dyZXNzVmFsdWUiLCJjc3MiLCJhdHRyaWJ1dGUiLCJvYmplY3QiLCJtYW51YWwiLCJsYXN0Iiwic2V0VGFyZ2V0c1ZhbHVlIiwiYW5pbWF0YWJsZXMiLCJhbmltVHlwZSIsImNyZWF0ZUFuaW1hdGlvbiIsImxhc3RUd2VlbiIsInR5cGUiLCJnZXRBbmltYXRpb25zIiwiZ2V0SW5zdGFuY2VUaW1pbmdzIiwiYW5pbWF0aW9ucyIsImFuaW1MZW5ndGgiLCJnZXRUbE9mZnNldCIsImFuaW0iLCJ0aW1pbmdzIiwiaW5zdGFuY2VJRCIsImNyZWF0ZU5ld0luc3RhbmNlIiwiaW5zdGFuY2VTZXR0aW5ncyIsImNoaWxkcmVuIiwiYWN0aXZlSW5zdGFuY2VzIiwiZW5naW5lIiwicmFmIiwicGxheSIsImlzRG9jdW1lbnRIaWRkZW4iLCJzdXNwZW5kV2hlbkRvY3VtZW50SGlkZGVuIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3RlcCIsImFjdGl2ZUluc3RhbmNlc0xlbmd0aCIsImFjdGl2ZUluc3RhbmNlIiwicGF1c2VkIiwidGljayIsInNwbGljZSIsInVuZGVmaW5lZCIsImhhbmRsZVZpc2liaWxpdHlDaGFuZ2UiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImluc3RhbmNlIiwiX29uRG9jdW1lbnRWaXNpYmlsaXR5IiwiaGlkZGVuIiwic3RhcnRUaW1lIiwibGFzdFRpbWUiLCJub3ciLCJjaGlsZHJlbkxlbmd0aCIsInJlc29sdmUiLCJtYWtlUHJvbWlzZSIsInByb21pc2UiLCJQcm9taXNlIiwiX3Jlc29sdmUiLCJmaW5pc2hlZCIsInRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uIiwicmV2ZXJzZWQiLCJjaGlsZCIsImFkanVzdFRpbWUiLCJ0aW1lIiwicmVzZXRUaW1lIiwiY3VycmVudFRpbWUiLCJzcGVlZCIsInNlZWtDaGlsZCIsInNlZWsiLCJzeW5jSW5zdGFuY2VDaGlsZHJlbiIsInJldmVyc2VQbGF5YmFjayIsImkkMSIsInNldEFuaW1hdGlvbnNQcm9ncmVzcyIsImluc1RpbWUiLCJhbmltYXRpb25zTGVuZ3RoIiwidHdlZW5MZW5ndGgiLCJlYXNlZCIsImlzTmFOIiwidG9OdW1iZXJzTGVuZ3RoIiwibiIsInRvTnVtYmVyIiwiZnJvbU51bWJlciIsInN0cmluZ3NMZW5ndGgiLCJuJDEiLCJjdXJyZW50VmFsdWUiLCJzZXRDYWxsYmFjayIsImNiIiwicGFzc1Rocm91Z2giLCJjb3VudEl0ZXJhdGlvbiIsInJlbWFpbmluZyIsInNldEluc3RhbmNlUHJvZ3Jlc3MiLCJlbmdpbmVUaW1lIiwiaW5zRHVyYXRpb24iLCJpbnNEZWxheSIsImluc0VuZERlbGF5IiwiYmVnYW4iLCJsb29wQmVnYW4iLCJjaGFuZ2VCZWdhbiIsImNoYW5nZUNvbXBsZXRlZCIsImNvbXBsZXRlZCIsInJlc2V0IiwicGF1c2UiLCJyZXZlcnNlIiwicmVzdGFydCIsInJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UiLCJyZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnMiLCJjIiwiY2hpbGRBbmltYXRpb25zIiwicmVtb3ZlVGFyZ2V0c0Zyb21BY3RpdmVJbnN0YW5jZXMiLCJzdGFnZ2VyIiwiZ3JpZCIsImF4aXMiLCJmcm9tSW5kZXgiLCJmcm9tRmlyc3QiLCJmcm9tQ2VudGVyIiwiZnJvbUxhc3QiLCJpc1JhbmdlIiwidmFsMSIsInZhbDIiLCJ2YWx1ZXMiLCJtYXhWYWx1ZSIsImluZGV4IiwiZnJvbVgiLCJmcm9tWSIsImZsb29yIiwidG9YIiwidG9ZIiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwic3BhY2luZyIsInRpbWVsaW5lIiwidGwiLCJpbnN0YW5jZVBhcmFtcyIsInRsSW5kZXgiLCJpbnMiLCJpbnNQYXJhbXMiLCJ0bER1cmF0aW9uIiwidmVyc2lvbiIsInJ1bm5pbmciLCJjb252ZXJ0UHgiLCJyYW5kb20iLCJtb2R1bGUiLCJleHBvcnRzIiwia2V5Q291bnRlciIsImFsbFdheXBvaW50cyIsIm9wdGlvbnMiLCJFcnJvciIsIkFkYXB0ZXIiLCJleHRlbmQiLCJkZWZhdWx0cyIsImFkYXB0ZXIiLCJob3Jpem9udGFsIiwiZW5hYmxlZCIsInRyaWdnZXJQb2ludCIsImdyb3VwIiwiR3JvdXAiLCJmaW5kT3JDcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsImZpbmRPckNyZWF0ZUJ5RWxlbWVudCIsIm9mZnNldEFsaWFzZXMiLCJxdWV1ZVRyaWdnZXIiLCJ0cmlnZ2VyIiwiZGlzYWJsZSIsImVuYWJsZSIsInJlZnJlc2giLCJuZXh0IiwicHJldmlvdXMiLCJpbnZva2VBbGwiLCJtZXRob2QiLCJhbGxXYXlwb2ludHNBcnJheSIsIndheXBvaW50S2V5IiwiZGVzdHJveUFsbCIsImRpc2FibGVBbGwiLCJlbmFibGVBbGwiLCJyZWZyZXNoQWxsIiwidmlld3BvcnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsInZpZXdwb3J0V2lkdGgiLCJjbGllbnRXaWR0aCIsImFkYXB0ZXJzIiwiY29udGludW91cyIsIm91dGVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsIm91dGVyV2lkdGgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVTaGltIiwiY29udGV4dHMiLCJvbGRXaW5kb3dMb2FkIiwib25sb2FkIiwiZGlkU2Nyb2xsIiwiZGlkUmVzaXplIiwib2xkU2Nyb2xsIiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsIndheXBvaW50cyIsInZlcnRpY2FsIiwid2F5cG9pbnRDb250ZXh0S2V5Iiwid2luZG93Q29udGV4dCIsImNyZWF0ZVRocm90dGxlZFNjcm9sbEhhbmRsZXIiLCJjcmVhdGVUaHJvdHRsZWRSZXNpemVIYW5kbGVyIiwid2F5cG9pbnQiLCJjaGVja0VtcHR5IiwiaG9yaXpvbnRhbEVtcHR5IiwiaXNFbXB0eU9iamVjdCIsInZlcnRpY2FsRW1wdHkiLCJpc1dpbmRvdyIsIm9mZiIsInJlc2l6ZUhhbmRsZXIiLCJoYW5kbGVSZXNpemUiLCJvbiIsInNjcm9sbEhhbmRsZXIiLCJoYW5kbGVTY3JvbGwiLCJpc1RvdWNoIiwidHJpZ2dlcmVkR3JvdXBzIiwiYXhlcyIsIm5ld1Njcm9sbCIsImZvcndhcmQiLCJiYWNrd2FyZCIsImF4aXNLZXkiLCJpc0ZvcndhcmQiLCJ3YXNCZWZvcmVUcmlnZ2VyUG9pbnQiLCJub3dBZnRlclRyaWdnZXJQb2ludCIsImNyb3NzZWRGb3J3YXJkIiwiY3Jvc3NlZEJhY2t3YXJkIiwiZ3JvdXBLZXkiLCJmbHVzaFRyaWdnZXJzIiwiY29udGV4dE9mZnNldCIsImxlZnQiLCJjb250ZXh0U2Nyb2xsIiwiY29udGV4dERpbWVuc2lvbiIsIm9mZnNldFByb3AiLCJhZGp1c3RtZW50Iiwib2xkVHJpZ2dlclBvaW50IiwiZWxlbWVudE9mZnNldCIsImZyZXNoV2F5cG9pbnQiLCJjb250ZXh0TW9kaWZpZXIiLCJ3YXNCZWZvcmVTY3JvbGwiLCJub3dBZnRlclNjcm9sbCIsInRyaWdnZXJlZEJhY2t3YXJkIiwidHJpZ2dlcmVkRm9yd2FyZCIsImZpbmRCeUVsZW1lbnQiLCJjb250ZXh0SWQiLCJyZXF1ZXN0Rm4iLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJieVRyaWdnZXJQb2ludCIsImJ5UmV2ZXJzZVRyaWdnZXJQb2ludCIsImdyb3VwcyIsImNsZWFyVHJpZ2dlclF1ZXVlcyIsInRyaWdnZXJRdWV1ZXMiLCJ1cCIsImRvd24iLCJyaWdodCIsInNvcnQiLCJpbkFycmF5IiwiaXNMYXN0IiwiZmlyc3QiLCJnZXRXaW5kb3ciLCJkZWZhdWx0VmlldyIsIk5vRnJhbWV3b3JrQWRhcHRlciIsImhhbmRsZXJzIiwiaXNXaW4iLCJldmVudCIsInJlbW92ZUxpc3RlbmVycyIsImxpc3RlbmVycyIsImxpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50UGFydHMiLCJldmVudFR5cGUiLCJuYW1lc3BhY2UiLCJucyIsIm93bmVyRG9jdW1lbnQiLCJ3aW4iLCJwYWdlWU9mZnNldCIsImNsaWVudFRvcCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50TGVmdCIsIm5zSGFuZGxlcnMiLCJuc1R5cGVMaXN0IiwiaW5jbHVkZU1hcmdpbiIsImNvbXB1dGVkU3R5bGUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJtZXJnZSIsImFycmF5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNB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NUI7QUFDSCxHQUZEOztBQUlBNGMsb0JBQWtCLENBQUN4RCxhQUFuQixHQUFtQyxVQUFTM2QsR0FBVCxFQUFjO0FBQzdDO0FBQ0EsU0FBSyxJQUFJd0csSUFBVCxJQUFpQnhHLEdBQWpCLEVBQXNCO0FBQ2xCLGFBQU8sS0FBUDtBQUNIOztBQUNELFdBQU8sSUFBUDtBQUNILEdBTkQ7O0FBUUFsSSxVQUFRLENBQUNza0IsUUFBVCxDQUFrQi9VLElBQWxCLENBQXVCO0FBQ25CYixRQUFJLEVBQUUsYUFEYTtBQUVuQjBULFdBQU8sRUFBRWlIO0FBRlUsR0FBdkI7QUFJQXJwQixVQUFRLENBQUNvaUIsT0FBVCxHQUFtQmlILGtCQUFuQjtBQUNILENBMUtBLEdBQUQsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IE1vZGFsTWVudSBmcm9tIFwiLi9tb2R1bGVzL21vZGFsTWVudVwiO1xyXG5pbXBvcnQgQW5pbWF0aW9ucyBmcm9tIFwiLi9tb2R1bGVzL2FuaW1hdGlvblwiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL21vZHVsZXMvc2VhcmNoXCI7XHJcbmltcG9ydCBGb3JtcyBmcm9tIFwiLi9tb2R1bGVzL2Zvcm1zXCI7XHJcblxyXG5jb25zdCBtb2RhbE1lbnUgPSBuZXcgTW9kYWxNZW51KCk7XHJcbmNvbnN0IGFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb25zKCk7XHJcbmNvbnN0IHNlYXJjaCA9IG5ldyBTZWFyY2goKTtcclxuY29uc3QgZm9ybXMgPSBuZXcgRm9ybXMoKTtcclxuIiwiaW1wb3J0IGFuaW1lIGZyb20gJy4uL3ZlbmRvci9hbmltZS5qcydcclxuaW1wb3J0IHdheXBvaW50IGZyb20gJy4uL3ZlbmRvci9ub2ZyYW1ld29yay53YXlwb2ludHMuanMnXHJcbmNsYXNzIEFuaW1hdGlvbnMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub2RkRXZlbkFuaW1hdGlvbigpXHJcbiAgICB9XHJcblxyXG4gICAgb2RkRXZlbkFuaW1hdGlvbigpIHtcclxuICAgICAgICBjb25zdCBvZGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9kZCcpXHJcbiAgICAgICAgY29uc3QgZXZlbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlbicpXHJcblxyXG4gICAgICAgIGV2ZW5zLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICBuZXcgV2F5cG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5lbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFsxMjUsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMTUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnc3ByaW5nKDEsIDgwLCAxMCwgMCknXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBvZGRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICBuZXcgV2F5cG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5lbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFsxMjUsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ3NwcmluZygxLCA4MCwgMTAsIDApJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAnMTAwJScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbnNcclxuIiwiaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4vdXRpbGl0eVwiO1xyXG5cclxuY2xhc3MgRm9ybXMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0ZXh0YXJlYVwiKTtcclxuICAgIHRoaXMuc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlbGVjdFwiKTtcclxuICAgIHRoaXMuY3VzdG9tU2VsZWN0RHJvcGRvd24oKTtcclxuICAgIHRoaXMuZXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBldmVudHMoKSB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMudGV4dGFyZWEgIT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLnRleHRhcmVhICE9IG51bGwpIHtcclxuICAgICAgdGhpcy50ZXh0YXJlYS5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgdGhpcy5zZXRUZXh0YXJlYUhlaWdodChlbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VGV4dGFyZWFIZWlnaHQoZWwpIHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGVsO1xyXG4gICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IFV0aWxpdHkudGV4dGFyZWFIZWlnaHQodGFyZ2V0LnZhbHVlKSArIFwicHhcIjtcclxuICB9XHJcblxyXG4gIGN1c3RvbVNlbGVjdERyb3Bkb3duKCkge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdCAhPSBcInVuZGVmaW5lZFwiICYmIHRoaXMuc2VsZWN0ICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5zZWxlY3QuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAvLyBtYWtlIGN1c3RvbSBzZWxlY3QgZWxlbWVudCBoZXJlLlxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1zO1xyXG4iLCJpbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi91dGlsaXR5XCJcclxuXHJcbmNsYXNzIE1vZGFsTWVudSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaXRlLWhlYWRlcicpXHJcbiAgICAgICAgdGhpcy50b2dnbGVNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9nZ2xlXScpXHJcbiAgICAgICAgdGhpcy5tZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmFtZV0nKVxyXG4gICAgICAgIHRoaXMuc3VibWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWJtZW51LWJ0bicpXHJcbiAgICAgICAgdGhpcy5pc01lbnVPcGVuID0gZmFsc2VcclxuICAgICAgICB0aGlzLmV2ZW50cygpXHJcbiAgICAgICAgdGhpcy5tYWluUGFkZGluZygpXHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlTWVudS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyTWVudShlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zdWJtZW51QnRuLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVN1Yk1lbnUoZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHRoaXMua2V5UHJlc3MoZSkpXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHRoaXMuY2hhbmdlSGVhZGVyKCkpXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+dGhpcy5tYWluUGFkZGluZygpKVxyXG4gICAgfVxyXG5cclxuICAgIHRyaWdnZXJNZW51KGUpIHtcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScpXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0TWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5hbWU9XCInICsgdGFyZ2V0ICsgJ1wiXScpXHJcbiAgICAgICAgY29uc3Qgb3RoZXJNZW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5hbWVdOm5vdChbZGF0YS1uYW1lPVwiJyArIHRhcmdldCArICdcIl0pJylcclxuXHJcbiAgICAgICAgaWYgKCF0YXJnZXRNZW51LmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgIC8vIENsb3NlIG90aGVyIG9wZW4gbWVudXMgZmlyc3RcclxuICAgICAgICAgICAgb3RoZXJNZW51cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNZW51KGVsKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdGhpcy5vcGVuTWVudSh0YXJnZXRNZW51KVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jbG9zZU1lbnUodGFyZ2V0TWVudSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk1lbnUobWVudSkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gbWVudS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpXHJcbiAgICAgICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRvZ2dsZT1cIicgKyBpZCArICdcIl0nKVxyXG5cclxuICAgICAgICBVdGlsaXR5LmJvZHlTY3JvbGxMb2NrKClcclxuXHJcbiAgICAgICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaXMtc2Nyb2xsZWQnKVxyXG5cclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKVxyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJylcclxuICAgICAgICBtZW51QnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJylcclxuXHJcbiAgICAgICAgdGhpcy5pc01lbnVPcGVuID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTWVudShtZW51KSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBtZW51LmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJylcclxuICAgICAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdG9nZ2xlPVwiJyArIGlkICsgJ1wiXScpXHJcblxyXG4gICAgICAgIFV0aWxpdHkuYm9keVNjcm9sbFVubG9jaygpXHJcblxyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpXHJcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgIG1lbnVCdG4uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcclxuXHJcbiAgICAgICAgdGhpcy5pc01lbnVPcGVuID0gZmFsc2VcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlU3ViTWVudShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgY29uc3QgYnRuID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIGNvbnN0IHRhcmdldE1lbnUgPSBidG4ucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcuc3VibWVudScpXHJcblxyXG4gICAgICAgIGlmICghdGFyZ2V0TWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpXHJcbiAgICAgICAgICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpXHJcbiAgICAgICAgICAgIHRhcmdldE1lbnUuY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpO1xyXG4gICAgICAgICAgICB0YXJnZXRNZW51LnN0eWxlLmhlaWdodCA9ICdhdXRvJztcclxuXHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSB0YXJnZXRNZW51LmNsaWVudEhlaWdodCArICdweCc7XHJcblxyXG4gICAgICAgICAgICB0YXJnZXRNZW51LnN0eWxlLmhlaWdodCA9ICcwcHgnO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldE1lbnUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgICAgIHRhcmdldE1lbnUuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TWVudS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgb25jZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKVxyXG4gICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcclxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IHRhcmdldE1lbnUuY2xpZW50SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgdGFyZ2V0TWVudS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TWVudS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcclxuICAgICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgICAgICB0YXJnZXRNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldE1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TWVudS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgb25jZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGtleVByZXNzKGUpIHtcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09IDI3ICYmIHRoaXMuaXNNZW51T3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLm1lbnUuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTWVudShlbClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlSGVhZGVyKCkge1xyXG4gICAgICAgIGxldCBzY3JvbGxQb3MgPSB3aW5kb3cuc2Nyb2xsWVxyXG4gICAgICAgIGlmIChzY3JvbGxQb3MgPj0gNzUgfHwgdGhpcy5pc01lbnVPcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2lzLXNjcm9sbGVkJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zY3JvbGxlZCcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1haW5QYWRkaW5nKCkge1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1tYWluJylcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXInKVxyXG4gICAgICAgIGNvbnN0IGhlYWRlckhlaWdodCA9IGhlYWRlci5vZmZzZXRIZWlnaHRcclxuXHJcbiAgICAgICAgbWFpbi5zdHlsZS5wYWRkaW5nVG9wID0gaGVhZGVySGVpZ2h0ICsgJ3B4JztcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxNZW51XHJcbiIsImNsYXNzIFNlYXJjaCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1zZWFyY2gnKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXNlYXJjaC10b2dnbGUnKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtc2VhcmNoLWlucHV0JylcclxuICAgICAgICB0aGlzLnNlYXJjaE92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtc2VhcmNoLW92ZXJsYXknKVxyXG4gICAgICAgIHRoaXMuaXNTZWFyY2hPcGVuID0gZmFsc2VcclxuICAgICAgICB0aGlzLmV2ZW50cygpXHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzKCkge1xyXG4gICAgICAgIC8vIE9wZW4gc2VhcmNoIG1vZGFsXHJcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy50b2dnbGVNb2RhbCgpKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDbG9zZSBzZWFyY2ggbW9kYWxcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hPdmVybGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY2xvc2VNb2RhbCgpKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5rZXlQcmVzcyhlKSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTW9kYWwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZU1vZGFsKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5Nb2RhbCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Nb2RhbCgpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaE1vZGFsLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoRmllbGQudmFsdWUgPSAnJ1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZWFyY2hGaWVsZC5mb2N1cygpLCAzMDEpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJylcclxuICAgICAgICB0aGlzLnNlYXJjaEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpXHJcbiAgICAgICAgdGhpcy5pc1NlYXJjaE9wZW4gPSB0cnVlXHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTW9kYWwoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2VhcmNoTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJylcclxuICAgICAgICB0aGlzLnNlYXJjaEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxyXG4gICAgICAgIHRoaXMuaXNTZWFyY2hPcGVuID0gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBrZXlQcmVzcyhlKSB7XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAyNyAmJiB0aGlzLmlzU2VhcmNoT3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcclxuIiwiY2xhc3MgVXRpbGl0eSB7XHJcblxyXG4gICAgc3RhdGljIGJvZHlTY3JvbGxMb2NrKCkge1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbFkgPSB3aW5kb3cuc2Nyb2xsWVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSAtc2Nyb2xsWSArICdweCdcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGJvZHlTY3JvbGxVbmxvY2soKSB7XHJcbiAgICAgICAgY29uc3QgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZS50b3A7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9ICcnO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gJyc7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHBhcnNlSW50KGJvZHlTdHlsZSB8fCAwKSAqIC0xKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgdGV4dGFyZWFIZWlnaHQodmFsdWUpIHtcclxuICAgICAgICAgICAgbGV0IG51bWJlck9mTGluZUJyZWFrcyA9ICh2YWx1ZS5tYXRjaCgvXFxuL2cpIHx8IFtdKS5sZW5ndGg7XHJcbiAgICAgICAgICAgIC8vIG1pbi1oZWlnaHQgKyBsaW5lcyB4IGxpbmUtaGVpZ2h0ICsgcGFkZGluZyArIGJvcmRlclxyXG4gICAgICAgICAgICBsZXQgbmV3SGVpZ2h0ID0gMjAgKyBudW1iZXJPZkxpbmVCcmVha3MgKiAyMCArIDEwICsgMTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ld0hlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbW9iaWxlQ2hlY2soKSB7XHJcbiAgICAgICAgLyogaHR0cDovL2RldGVjdG1vYmlsZWJyb3dzZXJzLmNvbS8gKi9cclxuICAgICAgICBsZXQgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAoZnVuY3Rpb24oYSl7aWYoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWlub3xhbmRyb2lkfGlwYWR8cGxheWJvb2t8c2lsay9pLnRlc3QoYSl8fC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoYS5zdWJzdHIoMCw0KSkpIGNoZWNrID0gdHJ1ZTt9KShuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHx3aW5kb3cub3BlcmEpO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGNoZWNrO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXRpbGl0eVxyXG4iLCIvKlxyXG4gKiBhbmltZS5qcyB2My4yLjFcclxuICogKGMpIDIwMjAgSnVsaWFuIEdhcm5pZXJcclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXHJcbiAqIGFuaW1lanMuY29tXHJcbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gRGVmYXVsdHNcclxuXHJcbnZhciBkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncyA9IHtcclxuICAgIHVwZGF0ZTogbnVsbCxcclxuICAgIGJlZ2luOiBudWxsLFxyXG4gICAgbG9vcEJlZ2luOiBudWxsLFxyXG4gICAgY2hhbmdlQmVnaW46IG51bGwsXHJcbiAgICBjaGFuZ2U6IG51bGwsXHJcbiAgICBjaGFuZ2VDb21wbGV0ZTogbnVsbCxcclxuICAgIGxvb3BDb21wbGV0ZTogbnVsbCxcclxuICAgIGNvbXBsZXRlOiBudWxsLFxyXG4gICAgbG9vcDogMSxcclxuICAgIGRpcmVjdGlvbjogJ25vcm1hbCcsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIHRpbWVsaW5lT2Zmc2V0OiAwXHJcbn07XHJcblxyXG52YXIgZGVmYXVsdFR3ZWVuU2V0dGluZ3MgPSB7XHJcbiAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgIGRlbGF5OiAwLFxyXG4gICAgZW5kRGVsYXk6IDAsXHJcbiAgICBlYXNpbmc6ICdlYXNlT3V0RWxhc3RpYygxLCAuNSknLFxyXG4gICAgcm91bmQ6IDBcclxufTtcclxuXHJcbnZhciB2YWxpZFRyYW5zZm9ybXMgPSBbJ3RyYW5zbGF0ZVgnLCAndHJhbnNsYXRlWScsICd0cmFuc2xhdGVaJywgJ3JvdGF0ZScsICdyb3RhdGVYJywgJ3JvdGF0ZVknLCAncm90YXRlWicsICdzY2FsZScsICdzY2FsZVgnLCAnc2NhbGVZJywgJ3NjYWxlWicsICdza2V3JywgJ3NrZXdYJywgJ3NrZXdZJywgJ3BlcnNwZWN0aXZlJywgJ21hdHJpeCcsICdtYXRyaXgzZCddO1xyXG5cclxuLy8gQ2FjaGluZ1xyXG5cclxudmFyIGNhY2hlID0ge1xyXG4gICAgQ1NTOiB7fSxcclxuICAgIHNwcmluZ3M6IHt9XHJcbn07XHJcblxyXG4vLyBVdGlsc1xyXG5cclxuZnVuY3Rpb24gbWluTWF4KHZhbCwgbWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWwsIG1pbiksIG1heCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0cmluZ0NvbnRhaW5zKHN0ciwgdGV4dCkge1xyXG4gICAgcmV0dXJuIHN0ci5pbmRleE9mKHRleHQpID4gLTE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5QXJndW1lbnRzKGZ1bmMsIGFyZ3MpIHtcclxuICAgIHJldHVybiBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpO1xyXG59XHJcblxyXG52YXIgaXMgPSB7XHJcbiAgICBhcnI6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhKTtcclxuICAgIH0sXHJcbiAgICBvYmo6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gc3RyaW5nQ29udGFpbnMoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpLCAnT2JqZWN0Jyk7XHJcbiAgICB9LFxyXG4gICAgcHRoOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzLm9iaihhKSAmJiBhLmhhc093blByb3BlcnR5KCd0b3RhbExlbmd0aCcpO1xyXG4gICAgfSxcclxuICAgIHN2ZzogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiBhIGluc3RhbmNlb2YgU1ZHRWxlbWVudDtcclxuICAgIH0sXHJcbiAgICBpbnA6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gYSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICB9LFxyXG4gICAgZG9tOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIGEubm9kZVR5cGUgfHwgaXMuc3ZnKGEpO1xyXG4gICAgfSxcclxuICAgIHN0cjogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgYSA9PT0gJ3N0cmluZyc7XHJcbiAgICB9LFxyXG4gICAgZm5jOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhID09PSAnZnVuY3Rpb24nO1xyXG4gICAgfSxcclxuICAgIHVuZDogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgYSA9PT0gJ3VuZGVmaW5lZCc7XHJcbiAgICB9LFxyXG4gICAgbmlsOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzLnVuZChhKSB8fCBhID09PSBudWxsO1xyXG4gICAgfSxcclxuICAgIGhleDogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiAvKF4jWzAtOUEtRl17Nn0kKXwoXiNbMC05QS1GXXszfSQpL2kudGVzdChhKTtcclxuICAgIH0sXHJcbiAgICByZ2I6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gL15yZ2IvLnRlc3QoYSk7XHJcbiAgICB9LFxyXG4gICAgaHNsOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIC9eaHNsLy50ZXN0KGEpO1xyXG4gICAgfSxcclxuICAgIGNvbDogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiAoaXMuaGV4KGEpIHx8IGlzLnJnYihhKSB8fCBpcy5oc2woYSkpO1xyXG4gICAgfSxcclxuICAgIGtleTogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiAhZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYSkgJiYgIWRlZmF1bHRUd2VlblNldHRpbmdzLmhhc093blByb3BlcnR5KGEpICYmIGEgIT09ICd0YXJnZXRzJyAmJiBhICE9PSAna2V5ZnJhbWVzJztcclxuICAgIH0sXHJcbn07XHJcblxyXG4vLyBFYXNpbmdzXHJcblxyXG5mdW5jdGlvbiBwYXJzZUVhc2luZ1BhcmFtZXRlcnMoc3RyaW5nKSB7XHJcbiAgICB2YXIgbWF0Y2ggPSAvXFwoKFteKV0rKVxcKS8uZXhlYyhzdHJpbmcpO1xyXG4gICAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0uc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24ocCkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHApO1xyXG4gICAgfSkgOiBbXTtcclxufVxyXG5cclxuLy8gU3ByaW5nIHNvbHZlciBpbnNwaXJlZCBieSBXZWJraXQgQ29weXJpZ2h0IMKpIDIwMTYgQXBwbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBodHRwczovL3dlYmtpdC5vcmcvZGVtb3Mvc3ByaW5nL3NwcmluZy5qc1xyXG5cclxuZnVuY3Rpb24gc3ByaW5nKHN0cmluZywgZHVyYXRpb24pIHtcclxuXHJcbiAgICB2YXIgcGFyYW1zID0gcGFyc2VFYXNpbmdQYXJhbWV0ZXJzKHN0cmluZyk7XHJcbiAgICB2YXIgbWFzcyA9IG1pbk1heChpcy51bmQocGFyYW1zWzBdKSA/IDEgOiBwYXJhbXNbMF0sIC4xLCAxMDApO1xyXG4gICAgdmFyIHN0aWZmbmVzcyA9IG1pbk1heChpcy51bmQocGFyYW1zWzFdKSA/IDEwMCA6IHBhcmFtc1sxXSwgLjEsIDEwMCk7XHJcbiAgICB2YXIgZGFtcGluZyA9IG1pbk1heChpcy51bmQocGFyYW1zWzJdKSA/IDEwIDogcGFyYW1zWzJdLCAuMSwgMTAwKTtcclxuICAgIHZhciB2ZWxvY2l0eSA9IG1pbk1heChpcy51bmQocGFyYW1zWzNdKSA/IDAgOiBwYXJhbXNbM10sIC4xLCAxMDApO1xyXG4gICAgdmFyIHcwID0gTWF0aC5zcXJ0KHN0aWZmbmVzcyAvIG1hc3MpO1xyXG4gICAgdmFyIHpldGEgPSBkYW1waW5nIC8gKDIgKiBNYXRoLnNxcnQoc3RpZmZuZXNzICogbWFzcykpO1xyXG4gICAgdmFyIHdkID0gemV0YSA8IDEgPyB3MCAqIE1hdGguc3FydCgxIC0gemV0YSAqIHpldGEpIDogMDtcclxuICAgIHZhciBhID0gMTtcclxuICAgIHZhciBiID0gemV0YSA8IDEgPyAoemV0YSAqIHcwICsgLXZlbG9jaXR5KSAvIHdkIDogLXZlbG9jaXR5ICsgdzA7XHJcblxyXG4gICAgZnVuY3Rpb24gc29sdmVyKHQpIHtcclxuICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBkdXJhdGlvbiA/IChkdXJhdGlvbiAqIHQpIC8gMTAwMCA6IHQ7XHJcbiAgICAgICAgaWYgKHpldGEgPCAxKSB7XHJcbiAgICAgICAgICAgIHByb2dyZXNzID0gTWF0aC5leHAoLXByb2dyZXNzICogemV0YSAqIHcwKSAqIChhICogTWF0aC5jb3Mod2QgKiBwcm9ncmVzcykgKyBiICogTWF0aC5zaW4od2QgKiBwcm9ncmVzcykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHByb2dyZXNzID0gKGEgKyBiICogcHJvZ3Jlc3MpICogTWF0aC5leHAoLXByb2dyZXNzICogdzApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodCA9PT0gMCB8fCB0ID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMSAtIHByb2dyZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldER1cmF0aW9uKCkge1xyXG4gICAgICAgIHZhciBjYWNoZWQgPSBjYWNoZS5zcHJpbmdzW3N0cmluZ107XHJcbiAgICAgICAgaWYgKGNhY2hlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZnJhbWUgPSAxIC8gNjtcclxuICAgICAgICB2YXIgZWxhcHNlZCA9IDA7XHJcbiAgICAgICAgdmFyIHJlc3QgPSAwO1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGVsYXBzZWQgKz0gZnJhbWU7XHJcbiAgICAgICAgICAgIGlmIChzb2x2ZXIoZWxhcHNlZCkgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJlc3QrKztcclxuICAgICAgICAgICAgICAgIGlmIChyZXN0ID49IDE2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN0ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZHVyYXRpb24gPSBlbGFwc2VkICogZnJhbWUgKiAxMDAwO1xyXG4gICAgICAgIGNhY2hlLnNwcmluZ3Nbc3RyaW5nXSA9IGR1cmF0aW9uO1xyXG4gICAgICAgIHJldHVybiBkdXJhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZHVyYXRpb24gPyBzb2x2ZXIgOiBnZXREdXJhdGlvbjtcclxuXHJcbn1cclxuXHJcbi8vIEJhc2ljIHN0ZXBzIGVhc2luZyBpbXBsZW1lbnRhdGlvbiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9mci9kb2NzL1dlYi9DU1MvdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cclxuXHJcbmZ1bmN0aW9uIHN0ZXBzKHN0ZXBzKSB7XHJcbiAgICBpZiAoc3RlcHMgPT09IHZvaWQgMCkgc3RlcHMgPSAxMDtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoKG1pbk1heCh0LCAwLjAwMDAwMSwgMSkpICogc3RlcHMpICogKDEgLyBzdGVwcyk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBCZXppZXJFYXNpbmcgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nXHJcblxyXG52YXIgYmV6aWVyID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHZhciBrU3BsaW5lVGFibGVTaXplID0gMTE7XHJcbiAgICB2YXIga1NhbXBsZVN0ZXBTaXplID0gMS4wIC8gKGtTcGxpbmVUYWJsZVNpemUgLSAxLjApO1xyXG5cclxuICAgIGZ1bmN0aW9uIEEoYUExLCBhQTIpIHtcclxuICAgICAgICByZXR1cm4gMS4wIC0gMy4wICogYUEyICsgMy4wICogYUExXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQihhQTEsIGFBMikge1xyXG4gICAgICAgIHJldHVybiAzLjAgKiBhQTIgLSA2LjAgKiBhQTFcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBDKGFBMSkge1xyXG4gICAgICAgIHJldHVybiAzLjAgKiBhQTFcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjQmV6aWVyKGFULCBhQTEsIGFBMikge1xyXG4gICAgICAgIHJldHVybiAoKEEoYUExLCBhQTIpICogYVQgKyBCKGFBMSwgYUEyKSkgKiBhVCArIEMoYUExKSkgKiBhVFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNsb3BlKGFULCBhQTEsIGFBMikge1xyXG4gICAgICAgIHJldHVybiAzLjAgKiBBKGFBMSwgYUEyKSAqIGFUICogYVQgKyAyLjAgKiBCKGFBMSwgYUEyKSAqIGFUICsgQyhhQTEpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYmluYXJ5U3ViZGl2aWRlKGFYLCBhQSwgYUIsIG1YMSwgbVgyKSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRYLCBjdXJyZW50VCwgaSA9IDA7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xyXG4gICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcclxuICAgICAgICAgICAgICAgIGFCID0gY3VycmVudFQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhQSA9IGN1cnJlbnRUO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gMC4wMDAwMDAxICYmICsraSA8IDEwKTtcclxuICAgICAgICByZXR1cm4gY3VycmVudFQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGFHdWVzc1QsIG1YMSwgbVgyKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyArK2kpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYUd1ZXNzVDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xyXG4gICAgICAgICAgICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYUd1ZXNzVDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBiZXppZXIobVgxLCBtWTEsIG1YMiwgbVkyKSB7XHJcblxyXG4gICAgICAgIGlmICghKDAgPD0gbVgxICYmIG1YMSA8PSAxICYmIDAgPD0gbVgyICYmIG1YMiA8PSAxKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzYW1wbGVWYWx1ZXMgPSBuZXcgRmxvYXQzMkFycmF5KGtTcGxpbmVUYWJsZVNpemUpO1xyXG5cclxuICAgICAgICBpZiAobVgxICE9PSBtWTEgfHwgbVgyICE9PSBtWTIpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrU3BsaW5lVGFibGVTaXplOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRURm9yWChhWCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGludGVydmFsU3RhcnQgPSAwO1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFNhbXBsZSA9IDE7XHJcbiAgICAgICAgICAgIHZhciBsYXN0U2FtcGxlID0ga1NwbGluZVRhYmxlU2l6ZSAtIDE7XHJcblxyXG4gICAgICAgICAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxTdGFydCArPSBrU2FtcGxlU3RlcFNpemU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC0tY3VycmVudFNhbXBsZTtcclxuXHJcbiAgICAgICAgICAgIHZhciBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcclxuICAgICAgICAgICAgdmFyIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICoga1NhbXBsZVN0ZXBTaXplO1xyXG4gICAgICAgICAgICB2YXIgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5pdGlhbFNsb3BlID49IDAuMDAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHgpIHtcclxuICAgICAgICAgICAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoeCA9PT0gMCB8fCB4ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY2FsY0JlemllcihnZXRURm9yWCh4KSwgbVkxLCBtWTIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJlemllcjtcclxuXHJcbn0pKCk7XHJcblxyXG52YXIgcGVubmVyID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8vIEJhc2VkIG9uIGpRdWVyeSBVSSdzIGltcGxlbWVuYXRpb24gb2YgZWFzaW5nIGVxdWF0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXIgKGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcpXHJcblxyXG4gICAgdmFyIGVhc2VzID0ge1xyXG4gICAgICAgIGxpbmVhcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBmdW5jdGlvbkVhc2luZ3MgPSB7XHJcbiAgICAgICAgU2luZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMSAtIE1hdGguY29zKHQgKiBNYXRoLlBJIC8gMik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBDaXJjOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSB0ICogdCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBCYWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0ICogdCAqICgzICogdCAtIDIpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQm91bmNlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwb3cyLCBiID0gNDtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh0IDwgKChwb3cyID0gTWF0aC5wb3coMiwgLS1iKSkgLSAxKSAvIDExKSB7fVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDEgLyBNYXRoLnBvdyg0LCAzIC0gYikgLSA3LjU2MjUgKiBNYXRoLnBvdygocG93MiAqIDMgLSAyKSAvIDIyIC0gdCwgMilcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIEVsYXN0aWM6IGZ1bmN0aW9uKGFtcGxpdHVkZSwgcGVyaW9kKSB7XHJcbiAgICAgICAgICAgIGlmIChhbXBsaXR1ZGUgPT09IHZvaWQgMCkgYW1wbGl0dWRlID0gMTtcclxuICAgICAgICAgICAgaWYgKHBlcmlvZCA9PT0gdm9pZCAwKSBwZXJpb2QgPSAuNTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhID0gbWluTWF4KGFtcGxpdHVkZSwgMSwgMTApO1xyXG4gICAgICAgICAgICB2YXIgcCA9IG1pbk1heChwZXJpb2QsIC4xLCAyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodCA9PT0gMCB8fCB0ID09PSAxKSA/IHQgOlxyXG4gICAgICAgICAgICAgICAgICAgIC1hICogTWF0aC5wb3coMiwgMTAgKiAodCAtIDEpKSAqIE1hdGguc2luKCgoKHQgLSAxKSAtIChwIC8gKE1hdGguUEkgKiAyKSAqIE1hdGguYXNpbigxIC8gYSkpKSAqIChNYXRoLlBJICogMikpIC8gcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYXNlRWFzaW5ncyA9IFsnUXVhZCcsICdDdWJpYycsICdRdWFydCcsICdRdWludCcsICdFeHBvJ107XHJcblxyXG4gICAgYmFzZUVhc2luZ3MuZm9yRWFjaChmdW5jdGlvbihuYW1lLCBpKSB7XHJcbiAgICAgICAgZnVuY3Rpb25FYXNpbmdzW25hbWVdID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5wb3codCwgaSArIDIpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhmdW5jdGlvbkVhc2luZ3MpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICAgIHZhciBlYXNlSW4gPSBmdW5jdGlvbkVhc2luZ3NbbmFtZV07XHJcbiAgICAgICAgZWFzZXNbJ2Vhc2VJbicgKyBuYW1lXSA9IGVhc2VJbjtcclxuICAgICAgICBlYXNlc1snZWFzZU91dCcgKyBuYW1lXSA9IGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxIC0gZWFzZUluKGEsIGIpKDEgLSB0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGVhc2VzWydlYXNlSW5PdXQnICsgbmFtZV0gPSBmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdCA8IDAuNSA/IGVhc2VJbihhLCBiKSh0ICogMikgLyAyIDpcclxuICAgICAgICAgICAgICAgICAgICAxIC0gZWFzZUluKGEsIGIpKHQgKiAtMiArIDIpIC8gMjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGVhc2VzWydlYXNlT3V0SW4nICsgbmFtZV0gPSBmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdCA8IDAuNSA/ICgxIC0gZWFzZUluKGEsIGIpKDEgLSB0ICogMikpIC8gMiA6XHJcbiAgICAgICAgICAgICAgICAgICAgKGVhc2VJbihhLCBiKSh0ICogMiAtIDEpICsgMSkgLyAyO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZWFzZXM7XHJcblxyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gcGFyc2VFYXNpbmdzKGVhc2luZywgZHVyYXRpb24pIHtcclxuICAgIGlmIChpcy5mbmMoZWFzaW5nKSkge1xyXG4gICAgICAgIHJldHVybiBlYXNpbmc7XHJcbiAgICB9XHJcbiAgICB2YXIgbmFtZSA9IGVhc2luZy5zcGxpdCgnKCcpWzBdO1xyXG4gICAgdmFyIGVhc2UgPSBwZW5uZXJbbmFtZV07XHJcbiAgICB2YXIgYXJncyA9IHBhcnNlRWFzaW5nUGFyYW1ldGVycyhlYXNpbmcpO1xyXG4gICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgY2FzZSAnc3ByaW5nJzpcclxuICAgICAgICAgICAgcmV0dXJuIHNwcmluZyhlYXNpbmcsIGR1cmF0aW9uKTtcclxuICAgICAgICBjYXNlICdjdWJpY0Jlemllcic6XHJcbiAgICAgICAgICAgIHJldHVybiBhcHBseUFyZ3VtZW50cyhiZXppZXIsIGFyZ3MpO1xyXG4gICAgICAgIGNhc2UgJ3N0ZXBzJzpcclxuICAgICAgICAgICAgcmV0dXJuIGFwcGx5QXJndW1lbnRzKHN0ZXBzLCBhcmdzKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gYXBwbHlBcmd1bWVudHMoZWFzZSwgYXJncyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFN0cmluZ3NcclxuXHJcbmZ1bmN0aW9uIHNlbGVjdFN0cmluZyhzdHIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzdHIpO1xyXG4gICAgICAgIHJldHVybiBub2RlcztcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEFycmF5c1xyXG5cclxuZnVuY3Rpb24gZmlsdGVyQXJyYXkoYXJyLCBjYWxsYmFjaykge1xyXG4gICAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XHJcbiAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPj0gMiA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgMDtcclxuICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBpZiAoaSBpbiBhcnIpIHtcclxuICAgICAgICAgICAgdmFyIHZhbCA9IGFycltpXTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsLCBpLCBhcnIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gZmxhdHRlbkFycmF5KGFycikge1xyXG4gICAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgIHJldHVybiBhLmNvbmNhdChpcy5hcnIoYikgPyBmbGF0dGVuQXJyYXkoYikgOiBiKTtcclxuICAgIH0sIFtdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9BcnJheShvKSB7XHJcbiAgICBpZiAoaXMuYXJyKG8pKSB7XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICB9XHJcbiAgICBpZiAoaXMuc3RyKG8pKSB7XHJcbiAgICAgICAgbyA9IHNlbGVjdFN0cmluZyhvKSB8fCBvO1xyXG4gICAgfVxyXG4gICAgaWYgKG8gaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBvIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gW10uc2xpY2UuY2FsbChvKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbb107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFycmF5Q29udGFpbnMoYXJyLCB2YWwpIHtcclxuICAgIHJldHVybiBhcnIuc29tZShmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIGEgPT09IHZhbDtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBPYmplY3RzXHJcblxyXG5mdW5jdGlvbiBjbG9uZU9iamVjdChvKSB7XHJcbiAgICB2YXIgY2xvbmUgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gbykge1xyXG4gICAgICAgIGNsb25lW3BdID0gb1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiBjbG9uZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVwbGFjZU9iamVjdFByb3BzKG8xLCBvMikge1xyXG4gICAgdmFyIG8gPSBjbG9uZU9iamVjdChvMSk7XHJcbiAgICBmb3IgKHZhciBwIGluIG8xKSB7XHJcbiAgICAgICAgb1twXSA9IG8yLmhhc093blByb3BlcnR5KHApID8gbzJbcF0gOiBvMVtwXTtcclxuICAgIH1cclxuICAgIHJldHVybiBvO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtZXJnZU9iamVjdHMobzEsIG8yKSB7XHJcbiAgICB2YXIgbyA9IGNsb25lT2JqZWN0KG8xKTtcclxuICAgIGZvciAodmFyIHAgaW4gbzIpIHtcclxuICAgICAgICBvW3BdID0gaXMudW5kKG8xW3BdKSA/IG8yW3BdIDogbzFbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbztcclxufVxyXG5cclxuLy8gQ29sb3JzXHJcblxyXG5mdW5jdGlvbiByZ2JUb1JnYmEocmdiVmFsdWUpIHtcclxuICAgIHZhciByZ2IgPSAvcmdiXFwoKFxcZCssXFxzKltcXGRdKyxcXHMqW1xcZF0rKVxcKS9nLmV4ZWMocmdiVmFsdWUpO1xyXG4gICAgcmV0dXJuIHJnYiA/IChcInJnYmEoXCIgKyAocmdiWzFdKSArIFwiLDEpXCIpIDogcmdiVmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhleFRvUmdiYShoZXhWYWx1ZSkge1xyXG4gICAgdmFyIHJneCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7XHJcbiAgICB2YXIgaGV4ID0gaGV4VmFsdWUucmVwbGFjZShyZ3gsIGZ1bmN0aW9uKG0sIHIsIGcsIGIpIHtcclxuICAgICAgICByZXR1cm4gciArIHIgKyBnICsgZyArIGIgKyBiO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgcmdiID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XHJcbiAgICB2YXIgciA9IHBhcnNlSW50KHJnYlsxXSwgMTYpO1xyXG4gICAgdmFyIGcgPSBwYXJzZUludChyZ2JbMl0sIDE2KTtcclxuICAgIHZhciBiID0gcGFyc2VJbnQocmdiWzNdLCAxNik7XHJcbiAgICByZXR1cm4gKFwicmdiYShcIiArIHIgKyBcIixcIiArIGcgKyBcIixcIiArIGIgKyBcIiwxKVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaHNsVG9SZ2JhKGhzbFZhbHVlKSB7XHJcbiAgICB2YXIgaHNsID0gL2hzbFxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJVxcKS9nLmV4ZWMoaHNsVmFsdWUpIHx8IC9oc2xhXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKylcXCkvZy5leGVjKGhzbFZhbHVlKTtcclxuICAgIHZhciBoID0gcGFyc2VJbnQoaHNsWzFdLCAxMCkgLyAzNjA7XHJcbiAgICB2YXIgcyA9IHBhcnNlSW50KGhzbFsyXSwgMTApIC8gMTAwO1xyXG4gICAgdmFyIGwgPSBwYXJzZUludChoc2xbM10sIDEwKSAvIDEwMDtcclxuICAgIHZhciBhID0gaHNsWzRdIHx8IDE7XHJcblxyXG4gICAgZnVuY3Rpb24gaHVlMnJnYihwLCBxLCB0KSB7XHJcbiAgICAgICAgaWYgKHQgPCAwKSB7XHJcbiAgICAgICAgICAgIHQgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHQgPiAxKSB7XHJcbiAgICAgICAgICAgIHQgLT0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHQgPCAxIC8gNikge1xyXG4gICAgICAgICAgICByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHQgPCAxIC8gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gcTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHQgPCAyIC8gMykge1xyXG4gICAgICAgICAgICByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgdmFyIHIsIGcsIGI7XHJcbiAgICBpZiAocyA9PSAwKSB7XHJcbiAgICAgICAgciA9IGcgPSBiID0gbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xyXG4gICAgICAgIHZhciBwID0gMiAqIGwgLSBxO1xyXG4gICAgICAgIHIgPSBodWUycmdiKHAsIHEsIGggKyAxIC8gMyk7XHJcbiAgICAgICAgZyA9IGh1ZTJyZ2IocCwgcSwgaCk7XHJcbiAgICAgICAgYiA9IGh1ZTJyZ2IocCwgcSwgaCAtIDEgLyAzKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXCJyZ2JhKFwiICsgKHIgKiAyNTUpICsgXCIsXCIgKyAoZyAqIDI1NSkgKyBcIixcIiArIChiICogMjU1KSArIFwiLFwiICsgYSArIFwiKVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29sb3JUb1JnYih2YWwpIHtcclxuICAgIGlmIChpcy5yZ2IodmFsKSkge1xyXG4gICAgICAgIHJldHVybiByZ2JUb1JnYmEodmFsKTtcclxuICAgIH1cclxuICAgIGlmIChpcy5oZXgodmFsKSkge1xyXG4gICAgICAgIHJldHVybiBoZXhUb1JnYmEodmFsKTtcclxuICAgIH1cclxuICAgIGlmIChpcy5oc2wodmFsKSkge1xyXG4gICAgICAgIHJldHVybiBoc2xUb1JnYmEodmFsKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gVW5pdHNcclxuXHJcbmZ1bmN0aW9uIGdldFVuaXQodmFsKSB7XHJcbiAgICB2YXIgc3BsaXQgPSAvWystXT9cXGQqXFwuP1xcZCsoPzpcXC5cXGQrKT8oPzpbZUVdWystXT9cXGQrKT8oJXxweHxwdHxlbXxyZW18aW58Y218bW18ZXh8Y2h8cGN8dnd8dmh8dm1pbnx2bWF4fGRlZ3xyYWR8dHVybik/JC8uZXhlYyh2YWwpO1xyXG4gICAgaWYgKHNwbGl0KSB7XHJcbiAgICAgICAgcmV0dXJuIHNwbGl0WzFdO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUcmFuc2Zvcm1Vbml0KHByb3BOYW1lKSB7XHJcbiAgICBpZiAoc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICd0cmFuc2xhdGUnKSB8fCBwcm9wTmFtZSA9PT0gJ3BlcnNwZWN0aXZlJykge1xyXG4gICAgICAgIHJldHVybiAncHgnO1xyXG4gICAgfVxyXG4gICAgaWYgKHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAncm90YXRlJykgfHwgc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICdza2V3JykpIHtcclxuICAgICAgICByZXR1cm4gJ2RlZyc7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFZhbHVlc1xyXG5cclxuZnVuY3Rpb24gZ2V0RnVuY3Rpb25WYWx1ZSh2YWwsIGFuaW1hdGFibGUpIHtcclxuICAgIGlmICghaXMuZm5jKHZhbCkpIHtcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbChhbmltYXRhYmxlLnRhcmdldCwgYW5pbWF0YWJsZS5pZCwgYW5pbWF0YWJsZS50b3RhbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShlbCwgcHJvcCkge1xyXG4gICAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZShwcm9wKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFB4VG9Vbml0KGVsLCB2YWx1ZSwgdW5pdCkge1xyXG4gICAgdmFyIHZhbHVlVW5pdCA9IGdldFVuaXQodmFsdWUpO1xyXG4gICAgaWYgKGFycmF5Q29udGFpbnMoW3VuaXQsICdkZWcnLCAncmFkJywgJ3R1cm4nXSwgdmFsdWVVbml0KSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIHZhciBjYWNoZWQgPSBjYWNoZS5DU1NbdmFsdWUgKyB1bml0XTtcclxuICAgIGlmICghaXMudW5kKGNhY2hlZCkpIHtcclxuICAgICAgICByZXR1cm4gY2FjaGVkO1xyXG4gICAgfVxyXG4gICAgdmFyIGJhc2VsaW5lID0gMTAwO1xyXG4gICAgdmFyIHRlbXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwudGFnTmFtZSk7XHJcbiAgICB2YXIgcGFyZW50RWwgPSAoZWwucGFyZW50Tm9kZSAmJiAoZWwucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQpKSA/IGVsLnBhcmVudE5vZGUgOiBkb2N1bWVudC5ib2R5O1xyXG4gICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQodGVtcEVsKTtcclxuICAgIHRlbXBFbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICB0ZW1wRWwuc3R5bGUud2lkdGggPSBiYXNlbGluZSArIHVuaXQ7XHJcbiAgICB2YXIgZmFjdG9yID0gYmFzZWxpbmUgLyB0ZW1wRWwub2Zmc2V0V2lkdGg7XHJcbiAgICBwYXJlbnRFbC5yZW1vdmVDaGlsZCh0ZW1wRWwpO1xyXG4gICAgdmFyIGNvbnZlcnRlZFVuaXQgPSBmYWN0b3IgKiBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIGNhY2hlLkNTU1t2YWx1ZSArIHVuaXRdID0gY29udmVydGVkVW5pdDtcclxuICAgIHJldHVybiBjb252ZXJ0ZWRVbml0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDU1NWYWx1ZShlbCwgcHJvcCwgdW5pdCkge1xyXG4gICAgaWYgKHByb3AgaW4gZWwuc3R5bGUpIHtcclxuICAgICAgICB2YXIgdXBwZXJjYXNlUHJvcE5hbWUgPSBwcm9wLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gZWwuc3R5bGVbcHJvcF0gfHwgZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZSh1cHBlcmNhc2VQcm9wTmFtZSkgfHwgJzAnO1xyXG4gICAgICAgIHJldHVybiB1bml0ID8gY29udmVydFB4VG9Vbml0KGVsLCB2YWx1ZSwgdW5pdCkgOiB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uVHlwZShlbCwgcHJvcCkge1xyXG4gICAgaWYgKGlzLmRvbShlbCkgJiYgIWlzLmlucChlbCkgJiYgKCFpcy5uaWwoZ2V0QXR0cmlidXRlKGVsLCBwcm9wKSkgfHwgKGlzLnN2ZyhlbCkgJiYgZWxbcHJvcF0pKSkge1xyXG4gICAgICAgIHJldHVybiAnYXR0cmlidXRlJztcclxuICAgIH1cclxuICAgIGlmIChpcy5kb20oZWwpICYmIGFycmF5Q29udGFpbnModmFsaWRUcmFuc2Zvcm1zLCBwcm9wKSkge1xyXG4gICAgICAgIHJldHVybiAndHJhbnNmb3JtJztcclxuICAgIH1cclxuICAgIGlmIChpcy5kb20oZWwpICYmIChwcm9wICE9PSAndHJhbnNmb3JtJyAmJiBnZXRDU1NWYWx1ZShlbCwgcHJvcCkpKSB7XHJcbiAgICAgICAgcmV0dXJuICdjc3MnO1xyXG4gICAgfVxyXG4gICAgaWYgKGVsW3Byb3BdICE9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gJ29iamVjdCc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEVsZW1lbnRUcmFuc2Zvcm1zKGVsKSB7XHJcbiAgICBpZiAoIWlzLmRvbShlbCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgc3RyID0gZWwuc3R5bGUudHJhbnNmb3JtIHx8ICcnO1xyXG4gICAgdmFyIHJlZyA9IC8oXFx3KylcXCgoW14pXSopXFwpL2c7XHJcbiAgICB2YXIgdHJhbnNmb3JtcyA9IG5ldyBNYXAoKTtcclxuICAgIHZhciBtO1xyXG4gICAgd2hpbGUgKG0gPSByZWcuZXhlYyhzdHIpKSB7XHJcbiAgICAgICAgdHJhbnNmb3Jtcy5zZXQobVsxXSwgbVsyXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJhbnNmb3JtcztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtVmFsdWUoZWwsIHByb3BOYW1lLCBhbmltYXRhYmxlLCB1bml0KSB7XHJcbiAgICB2YXIgZGVmYXVsdFZhbCA9IHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAnc2NhbGUnKSA/IDEgOiAwICsgZ2V0VHJhbnNmb3JtVW5pdChwcm9wTmFtZSk7XHJcbiAgICB2YXIgdmFsdWUgPSBnZXRFbGVtZW50VHJhbnNmb3JtcyhlbCkuZ2V0KHByb3BOYW1lKSB8fCBkZWZhdWx0VmFsO1xyXG4gICAgaWYgKGFuaW1hdGFibGUpIHtcclxuICAgICAgICBhbmltYXRhYmxlLnRyYW5zZm9ybXMubGlzdC5zZXQocHJvcE5hbWUsIHZhbHVlKTtcclxuICAgICAgICBhbmltYXRhYmxlLnRyYW5zZm9ybXNbJ2xhc3QnXSA9IHByb3BOYW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuaXQgPyBjb252ZXJ0UHhUb1VuaXQoZWwsIHZhbHVlLCB1bml0KSA6IHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPcmlnaW5hbFRhcmdldFZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIHVuaXQsIGFuaW1hdGFibGUpIHtcclxuICAgIHN3aXRjaCAoZ2V0QW5pbWF0aW9uVHlwZSh0YXJnZXQsIHByb3BOYW1lKSkge1xyXG4gICAgICAgIGNhc2UgJ3RyYW5zZm9ybSc6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRUcmFuc2Zvcm1WYWx1ZSh0YXJnZXQsIHByb3BOYW1lLCBhbmltYXRhYmxlLCB1bml0KTtcclxuICAgICAgICBjYXNlICdjc3MnOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0Q1NTVmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgdW5pdCk7XHJcbiAgICAgICAgY2FzZSAnYXR0cmlidXRlJzpcclxuICAgICAgICAgICAgcmV0dXJuIGdldEF0dHJpYnV0ZSh0YXJnZXQsIHByb3BOYW1lKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BOYW1lXSB8fCAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZWxhdGl2ZVZhbHVlKHRvLCBmcm9tKSB7XHJcbiAgICB2YXIgb3BlcmF0b3IgPSAvXihcXCo9fFxcKz18LT0pLy5leGVjKHRvKTtcclxuICAgIGlmICghb3BlcmF0b3IpIHtcclxuICAgICAgICByZXR1cm4gdG87XHJcbiAgICB9XHJcbiAgICB2YXIgdSA9IGdldFVuaXQodG8pIHx8IDA7XHJcbiAgICB2YXIgeCA9IHBhcnNlRmxvYXQoZnJvbSk7XHJcbiAgICB2YXIgeSA9IHBhcnNlRmxvYXQodG8ucmVwbGFjZShvcGVyYXRvclswXSwgJycpKTtcclxuICAgIHN3aXRjaCAob3BlcmF0b3JbMF1bMF0pIHtcclxuICAgICAgICBjYXNlICcrJzpcclxuICAgICAgICAgICAgcmV0dXJuIHggKyB5ICsgdTtcclxuICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgICAgcmV0dXJuIHggLSB5ICsgdTtcclxuICAgICAgICBjYXNlICcqJzpcclxuICAgICAgICAgICAgcmV0dXJuIHggKiB5ICsgdTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVWYWx1ZSh2YWwsIHVuaXQpIHtcclxuICAgIGlmIChpcy5jb2wodmFsKSkge1xyXG4gICAgICAgIHJldHVybiBjb2xvclRvUmdiKHZhbCk7XHJcbiAgICB9XHJcbiAgICBpZiAoL1xccy9nLnRlc3QodmFsKSkge1xyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcbiAgICB2YXIgb3JpZ2luYWxVbml0ID0gZ2V0VW5pdCh2YWwpO1xyXG4gICAgdmFyIHVuaXRMZXNzID0gb3JpZ2luYWxVbml0ID8gdmFsLnN1YnN0cigwLCB2YWwubGVuZ3RoIC0gb3JpZ2luYWxVbml0Lmxlbmd0aCkgOiB2YWw7XHJcbiAgICBpZiAodW5pdCkge1xyXG4gICAgICAgIHJldHVybiB1bml0TGVzcyArIHVuaXQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5pdExlc3M7XHJcbn1cclxuXHJcbi8vIGdldFRvdGFsTGVuZ3RoKCkgZXF1aXZhbGVudCBmb3IgY2lyY2xlLCByZWN0LCBwb2x5bGluZSwgcG9seWdvbiBhbmQgbGluZSBzaGFwZXNcclxuLy8gYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL1NlYkxhbWJsYS8zZTA1NTBjNDk2YzIzNjcwOTc0NFxyXG5cclxuZnVuY3Rpb24gZ2V0RGlzdGFuY2UocDEsIHAyKSB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHAyLnggLSBwMS54LCAyKSArIE1hdGgucG93KHAyLnkgLSBwMS55LCAyKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENpcmNsZUxlbmd0aChlbCkge1xyXG4gICAgcmV0dXJuIE1hdGguUEkgKiAyICogZ2V0QXR0cmlidXRlKGVsLCAncicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZWN0TGVuZ3RoKGVsKSB7XHJcbiAgICByZXR1cm4gKGdldEF0dHJpYnV0ZShlbCwgJ3dpZHRoJykgKiAyKSArIChnZXRBdHRyaWJ1dGUoZWwsICdoZWlnaHQnKSAqIDIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMaW5lTGVuZ3RoKGVsKSB7XHJcbiAgICByZXR1cm4gZ2V0RGlzdGFuY2Uoe1xyXG4gICAgICAgIHg6IGdldEF0dHJpYnV0ZShlbCwgJ3gxJyksXHJcbiAgICAgICAgeTogZ2V0QXR0cmlidXRlKGVsLCAneTEnKVxyXG4gICAgfSwge1xyXG4gICAgICAgIHg6IGdldEF0dHJpYnV0ZShlbCwgJ3gyJyksXHJcbiAgICAgICAgeTogZ2V0QXR0cmlidXRlKGVsLCAneTInKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBvbHlsaW5lTGVuZ3RoKGVsKSB7XHJcbiAgICB2YXIgcG9pbnRzID0gZWwucG9pbnRzO1xyXG4gICAgdmFyIHRvdGFsTGVuZ3RoID0gMDtcclxuICAgIHZhciBwcmV2aW91c1BvcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLm51bWJlck9mSXRlbXM7IGkrKykge1xyXG4gICAgICAgIHZhciBjdXJyZW50UG9zID0gcG9pbnRzLmdldEl0ZW0oaSk7XHJcbiAgICAgICAgaWYgKGkgPiAwKSB7XHJcbiAgICAgICAgICAgIHRvdGFsTGVuZ3RoICs9IGdldERpc3RhbmNlKHByZXZpb3VzUG9zLCBjdXJyZW50UG9zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJldmlvdXNQb3MgPSBjdXJyZW50UG9zO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvdGFsTGVuZ3RoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQb2x5Z29uTGVuZ3RoKGVsKSB7XHJcbiAgICB2YXIgcG9pbnRzID0gZWwucG9pbnRzO1xyXG4gICAgcmV0dXJuIGdldFBvbHlsaW5lTGVuZ3RoKGVsKSArIGdldERpc3RhbmNlKHBvaW50cy5nZXRJdGVtKHBvaW50cy5udW1iZXJPZkl0ZW1zIC0gMSksIHBvaW50cy5nZXRJdGVtKDApKTtcclxufVxyXG5cclxuLy8gUGF0aCBhbmltYXRpb25cclxuXHJcbmZ1bmN0aW9uIGdldFRvdGFsTGVuZ3RoKGVsKSB7XHJcbiAgICBpZiAoZWwuZ2V0VG90YWxMZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gZWwuZ2V0VG90YWxMZW5ndGgoKTtcclxuICAgIH1cclxuICAgIHN3aXRjaCAoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgY2FzZSAnY2lyY2xlJzpcclxuICAgICAgICAgICAgcmV0dXJuIGdldENpcmNsZUxlbmd0aChlbCk7XHJcbiAgICAgICAgY2FzZSAncmVjdCc6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRSZWN0TGVuZ3RoKGVsKTtcclxuICAgICAgICBjYXNlICdsaW5lJzpcclxuICAgICAgICAgICAgcmV0dXJuIGdldExpbmVMZW5ndGgoZWwpO1xyXG4gICAgICAgIGNhc2UgJ3BvbHlsaW5lJzpcclxuICAgICAgICAgICAgcmV0dXJuIGdldFBvbHlsaW5lTGVuZ3RoKGVsKTtcclxuICAgICAgICBjYXNlICdwb2x5Z29uJzpcclxuICAgICAgICAgICAgcmV0dXJuIGdldFBvbHlnb25MZW5ndGgoZWwpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREYXNob2Zmc2V0KGVsKSB7XHJcbiAgICB2YXIgcGF0aExlbmd0aCA9IGdldFRvdGFsTGVuZ3RoKGVsKTtcclxuICAgIGVsLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIHBhdGhMZW5ndGgpO1xyXG4gICAgcmV0dXJuIHBhdGhMZW5ndGg7XHJcbn1cclxuXHJcbi8vIE1vdGlvbiBwYXRoXHJcblxyXG5mdW5jdGlvbiBnZXRQYXJlbnRTdmdFbChlbCkge1xyXG4gICAgdmFyIHBhcmVudEVsID0gZWwucGFyZW50Tm9kZTtcclxuICAgIHdoaWxlIChpcy5zdmcocGFyZW50RWwpKSB7XHJcbiAgICAgICAgaWYgKCFpcy5zdmcocGFyZW50RWwucGFyZW50Tm9kZSkpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmVudEVsID0gcGFyZW50RWwucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJlbnRFbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGFyZW50U3ZnKHBhdGhFbCwgc3ZnRGF0YSkge1xyXG4gICAgdmFyIHN2ZyA9IHN2Z0RhdGEgfHwge307XHJcbiAgICB2YXIgcGFyZW50U3ZnRWwgPSBzdmcuZWwgfHwgZ2V0UGFyZW50U3ZnRWwocGF0aEVsKTtcclxuICAgIHZhciByZWN0ID0gcGFyZW50U3ZnRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICB2YXIgdmlld0JveEF0dHIgPSBnZXRBdHRyaWJ1dGUocGFyZW50U3ZnRWwsICd2aWV3Qm94Jyk7XHJcbiAgICB2YXIgd2lkdGggPSByZWN0LndpZHRoO1xyXG4gICAgdmFyIGhlaWdodCA9IHJlY3QuaGVpZ2h0O1xyXG4gICAgdmFyIHZpZXdCb3ggPSBzdmcudmlld0JveCB8fCAodmlld0JveEF0dHIgPyB2aWV3Qm94QXR0ci5zcGxpdCgnICcpIDogWzAsIDAsIHdpZHRoLCBoZWlnaHRdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZWw6IHBhcmVudFN2Z0VsLFxyXG4gICAgICAgIHZpZXdCb3g6IHZpZXdCb3gsXHJcbiAgICAgICAgeDogdmlld0JveFswXSAvIDEsXHJcbiAgICAgICAgeTogdmlld0JveFsxXSAvIDEsXHJcbiAgICAgICAgdzogd2lkdGgsXHJcbiAgICAgICAgaDogaGVpZ2h0LFxyXG4gICAgICAgIHZXOiB2aWV3Qm94WzJdLFxyXG4gICAgICAgIHZIOiB2aWV3Qm94WzNdXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhdGgocGF0aCwgcGVyY2VudCkge1xyXG4gICAgdmFyIHBhdGhFbCA9IGlzLnN0cihwYXRoKSA/IHNlbGVjdFN0cmluZyhwYXRoKVswXSA6IHBhdGg7XHJcbiAgICB2YXIgcCA9IHBlcmNlbnQgfHwgMTAwO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHByb3BlcnR5KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICBlbDogcGF0aEVsLFxyXG4gICAgICAgICAgICBzdmc6IGdldFBhcmVudFN2ZyhwYXRoRWwpLFxyXG4gICAgICAgICAgICB0b3RhbExlbmd0aDogZ2V0VG90YWxMZW5ndGgocGF0aEVsKSAqIChwIC8gMTAwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGF0aFByb2dyZXNzKHBhdGgsIHByb2dyZXNzLCBpc1BhdGhUYXJnZXRJbnNpZGVTVkcpIHtcclxuICAgIGZ1bmN0aW9uIHBvaW50KG9mZnNldCkge1xyXG4gICAgICAgIGlmIChvZmZzZXQgPT09IHZvaWQgMCkgb2Zmc2V0ID0gMDtcclxuXHJcbiAgICAgICAgdmFyIGwgPSBwcm9ncmVzcyArIG9mZnNldCA+PSAxID8gcHJvZ3Jlc3MgKyBvZmZzZXQgOiAwO1xyXG4gICAgICAgIHJldHVybiBwYXRoLmVsLmdldFBvaW50QXRMZW5ndGgobCk7XHJcbiAgICB9XHJcbiAgICB2YXIgc3ZnID0gZ2V0UGFyZW50U3ZnKHBhdGguZWwsIHBhdGguc3ZnKTtcclxuICAgIHZhciBwID0gcG9pbnQoKTtcclxuICAgIHZhciBwMCA9IHBvaW50KC0xKTtcclxuICAgIHZhciBwMSA9IHBvaW50KCsxKTtcclxuICAgIHZhciBzY2FsZVggPSBpc1BhdGhUYXJnZXRJbnNpZGVTVkcgPyAxIDogc3ZnLncgLyBzdmcudlc7XHJcbiAgICB2YXIgc2NhbGVZID0gaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHID8gMSA6IHN2Zy5oIC8gc3ZnLnZIO1xyXG4gICAgc3dpdGNoIChwYXRoLnByb3BlcnR5KSB7XHJcbiAgICAgICAgY2FzZSAneCc6XHJcbiAgICAgICAgICAgIHJldHVybiAocC54IC0gc3ZnLngpICogc2NhbGVYO1xyXG4gICAgICAgIGNhc2UgJ3knOlxyXG4gICAgICAgICAgICByZXR1cm4gKHAueSAtIHN2Zy55KSAqIHNjYWxlWTtcclxuICAgICAgICBjYXNlICdhbmdsZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHAxLnkgLSBwMC55LCBwMS54IC0gcDAueCkgKiAxODAgLyBNYXRoLlBJO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBEZWNvbXBvc2UgdmFsdWVcclxuXHJcbmZ1bmN0aW9uIGRlY29tcG9zZVZhbHVlKHZhbCwgdW5pdCkge1xyXG4gICAgLy8gY29uc3Qgcmd4ID0gLy0/XFxkKlxcLj9cXGQrL2c7IC8vIGhhbmRsZXMgYmFzaWMgbnVtYmVyc1xyXG4gICAgLy8gY29uc3Qgcmd4ID0gL1srLV0/XFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPy9nOyAvLyBoYW5kbGVzIGV4cG9uZW50cyBub3RhdGlvblxyXG4gICAgdmFyIHJneCA9IC9bKy1dP1xcZCpcXC4/XFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPy9nOyAvLyBoYW5kbGVzIGV4cG9uZW50cyBub3RhdGlvblxyXG4gICAgdmFyIHZhbHVlID0gdmFsaWRhdGVWYWx1ZSgoaXMucHRoKHZhbCkgPyB2YWwudG90YWxMZW5ndGggOiB2YWwpLCB1bml0KSArICcnO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBvcmlnaW5hbDogdmFsdWUsXHJcbiAgICAgICAgbnVtYmVyczogdmFsdWUubWF0Y2gocmd4KSA/IHZhbHVlLm1hdGNoKHJneCkubWFwKE51bWJlcikgOiBbMF0sXHJcbiAgICAgICAgc3RyaW5nczogKGlzLnN0cih2YWwpIHx8IHVuaXQpID8gdmFsdWUuc3BsaXQocmd4KSA6IFtdXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEFuaW1hdGFibGVzXHJcblxyXG5mdW5jdGlvbiBwYXJzZVRhcmdldHModGFyZ2V0cykge1xyXG4gICAgdmFyIHRhcmdldHNBcnJheSA9IHRhcmdldHMgPyAoZmxhdHRlbkFycmF5KGlzLmFycih0YXJnZXRzKSA/IHRhcmdldHMubWFwKHRvQXJyYXkpIDogdG9BcnJheSh0YXJnZXRzKSkpIDogW107XHJcbiAgICByZXR1cm4gZmlsdGVyQXJyYXkodGFyZ2V0c0FycmF5LCBmdW5jdGlvbihpdGVtLCBwb3MsIHNlbGYpIHtcclxuICAgICAgICByZXR1cm4gc2VsZi5pbmRleE9mKGl0ZW0pID09PSBwb3M7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QW5pbWF0YWJsZXModGFyZ2V0cykge1xyXG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlVGFyZ2V0cyh0YXJnZXRzKTtcclxuICAgIHJldHVybiBwYXJzZWQubWFwKGZ1bmN0aW9uKHQsIGkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHQsXHJcbiAgICAgICAgICAgIGlkOiBpLFxyXG4gICAgICAgICAgICB0b3RhbDogcGFyc2VkLmxlbmd0aCxcclxuICAgICAgICAgICAgdHJhbnNmb3Jtczoge1xyXG4gICAgICAgICAgICAgICAgbGlzdDogZ2V0RWxlbWVudFRyYW5zZm9ybXModClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gUHJvcGVydGllc1xyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplUHJvcGVydHlUd2VlbnMocHJvcCwgdHdlZW5TZXR0aW5ncykge1xyXG4gICAgdmFyIHNldHRpbmdzID0gY2xvbmVPYmplY3QodHdlZW5TZXR0aW5ncyk7XHJcbiAgICAvLyBPdmVycmlkZSBkdXJhdGlvbiBpZiBlYXNpbmcgaXMgYSBzcHJpbmdcclxuICAgIGlmICgvXnNwcmluZy8udGVzdChzZXR0aW5ncy5lYXNpbmcpKSB7XHJcbiAgICAgICAgc2V0dGluZ3MuZHVyYXRpb24gPSBzcHJpbmcoc2V0dGluZ3MuZWFzaW5nKTtcclxuICAgIH1cclxuICAgIGlmIChpcy5hcnIocHJvcCkpIHtcclxuICAgICAgICB2YXIgbCA9IHByb3AubGVuZ3RoO1xyXG4gICAgICAgIHZhciBpc0Zyb21UbyA9IChsID09PSAyICYmICFpcy5vYmoocHJvcFswXSkpO1xyXG4gICAgICAgIGlmICghaXNGcm9tVG8pIHtcclxuICAgICAgICAgICAgLy8gRHVyYXRpb24gZGl2aWRlZCBieSB0aGUgbnVtYmVyIG9mIHR3ZWVuc1xyXG4gICAgICAgICAgICBpZiAoIWlzLmZuYyh0d2VlblNldHRpbmdzLmR1cmF0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3MuZHVyYXRpb24gPSB0d2VlblNldHRpbmdzLmR1cmF0aW9uIC8gbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFRyYW5zZm9ybSBbZnJvbSwgdG9dIHZhbHVlcyBzaG9ydGhhbmQgdG8gYSB2YWxpZCB0d2VlbiB2YWx1ZVxyXG4gICAgICAgICAgICBwcm9wID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb3BcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgcHJvcEFycmF5ID0gaXMuYXJyKHByb3ApID8gcHJvcCA6IFtwcm9wXTtcclxuICAgIHJldHVybiBwcm9wQXJyYXkubWFwKGZ1bmN0aW9uKHYsIGkpIHtcclxuICAgICAgICB2YXIgb2JqID0gKGlzLm9iaih2KSAmJiAhaXMucHRoKHYpKSA/IHYgOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiB2XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBEZWZhdWx0IGRlbGF5IHZhbHVlIHNob3VsZCBvbmx5IGJlIGFwcGxpZWQgdG8gdGhlIGZpcnN0IHR3ZWVuXHJcbiAgICAgICAgaWYgKGlzLnVuZChvYmouZGVsYXkpKSB7XHJcbiAgICAgICAgICAgIG9iai5kZWxheSA9ICFpID8gdHdlZW5TZXR0aW5ncy5kZWxheSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERlZmF1bHQgZW5kRGVsYXkgdmFsdWUgc2hvdWxkIG9ubHkgYmUgYXBwbGllZCB0byB0aGUgbGFzdCB0d2VlblxyXG4gICAgICAgIGlmIChpcy51bmQob2JqLmVuZERlbGF5KSkge1xyXG4gICAgICAgICAgICBvYmouZW5kRGVsYXkgPSBpID09PSBwcm9wQXJyYXkubGVuZ3RoIC0gMSA/IHR3ZWVuU2V0dGluZ3MuZW5kRGVsYXkgOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfSkubWFwKGZ1bmN0aW9uKGspIHtcclxuICAgICAgICByZXR1cm4gbWVyZ2VPYmplY3RzKGssIHNldHRpbmdzKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZmxhdHRlbktleWZyYW1lcyhrZXlmcmFtZXMpIHtcclxuICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gZmlsdGVyQXJyYXkoZmxhdHRlbkFycmF5KGtleWZyYW1lcy5tYXAoZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhrZXkpO1xyXG4gICAgICAgIH0pKSwgZnVuY3Rpb24ocCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXMua2V5KHApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIGlmIChhLmluZGV4T2YoYikgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBhLnB1c2goYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgfSwgW10pO1xyXG4gICAgdmFyIHByb3BlcnRpZXMgPSB7fTtcclxuICAgIHZhciBsb29wID0gZnVuY3Rpb24oaSkge1xyXG4gICAgICAgIHZhciBwcm9wTmFtZSA9IHByb3BlcnR5TmFtZXNbaV07XHJcbiAgICAgICAgcHJvcGVydGllc1twcm9wTmFtZV0gPSBrZXlmcmFtZXMubWFwKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICB2YXIgbmV3S2V5ID0ge307XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXMua2V5KHApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAgPT0gcHJvcE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3S2V5LnZhbHVlID0ga2V5W3BdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3S2V5W3BdID0ga2V5W3BdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdLZXk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydHlOYW1lcy5sZW5ndGg7IGkrKykgbG9vcChpKTtcclxuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKHR3ZWVuU2V0dGluZ3MsIHBhcmFtcykge1xyXG4gICAgdmFyIHByb3BlcnRpZXMgPSBbXTtcclxuICAgIHZhciBrZXlmcmFtZXMgPSBwYXJhbXMua2V5ZnJhbWVzO1xyXG4gICAgaWYgKGtleWZyYW1lcykge1xyXG4gICAgICAgIHBhcmFtcyA9IG1lcmdlT2JqZWN0cyhmbGF0dGVuS2V5ZnJhbWVzKGtleWZyYW1lcyksIHBhcmFtcyk7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBwIGluIHBhcmFtcykge1xyXG4gICAgICAgIGlmIChpcy5rZXkocCkpIHtcclxuICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHAsXHJcbiAgICAgICAgICAgICAgICB0d2VlbnM6IG5vcm1hbGl6ZVByb3BlcnR5VHdlZW5zKHBhcmFtc1twXSwgdHdlZW5TZXR0aW5ncylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb3BlcnRpZXM7XHJcbn1cclxuXHJcbi8vIFR3ZWVuc1xyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplVHdlZW5WYWx1ZXModHdlZW4sIGFuaW1hdGFibGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHR3ZWVuKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gZ2V0RnVuY3Rpb25WYWx1ZSh0d2VlbltwXSwgYW5pbWF0YWJsZSk7XHJcbiAgICAgICAgaWYgKGlzLmFycih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5tYXAoZnVuY3Rpb24odikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEZ1bmN0aW9uVmFsdWUodiwgYW5pbWF0YWJsZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRbcF0gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHQuZHVyYXRpb24gPSBwYXJzZUZsb2F0KHQuZHVyYXRpb24pO1xyXG4gICAgdC5kZWxheSA9IHBhcnNlRmxvYXQodC5kZWxheSk7XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplVHdlZW5zKHByb3AsIGFuaW1hdGFibGUpIHtcclxuICAgIHZhciBwcmV2aW91c1R3ZWVuO1xyXG4gICAgcmV0dXJuIHByb3AudHdlZW5zLm1hcChmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgdmFyIHR3ZWVuID0gbm9ybWFsaXplVHdlZW5WYWx1ZXModCwgYW5pbWF0YWJsZSk7XHJcbiAgICAgICAgdmFyIHR3ZWVuVmFsdWUgPSB0d2Vlbi52YWx1ZTtcclxuICAgICAgICB2YXIgdG8gPSBpcy5hcnIodHdlZW5WYWx1ZSkgPyB0d2VlblZhbHVlWzFdIDogdHdlZW5WYWx1ZTtcclxuICAgICAgICB2YXIgdG9Vbml0ID0gZ2V0VW5pdCh0byk7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsVmFsdWUgPSBnZXRPcmlnaW5hbFRhcmdldFZhbHVlKGFuaW1hdGFibGUudGFyZ2V0LCBwcm9wLm5hbWUsIHRvVW5pdCwgYW5pbWF0YWJsZSk7XHJcbiAgICAgICAgdmFyIHByZXZpb3VzVmFsdWUgPSBwcmV2aW91c1R3ZWVuID8gcHJldmlvdXNUd2Vlbi50by5vcmlnaW5hbCA6IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgdmFyIGZyb20gPSBpcy5hcnIodHdlZW5WYWx1ZSkgPyB0d2VlblZhbHVlWzBdIDogcHJldmlvdXNWYWx1ZTtcclxuICAgICAgICB2YXIgZnJvbVVuaXQgPSBnZXRVbml0KGZyb20pIHx8IGdldFVuaXQob3JpZ2luYWxWYWx1ZSk7XHJcbiAgICAgICAgdmFyIHVuaXQgPSB0b1VuaXQgfHwgZnJvbVVuaXQ7XHJcbiAgICAgICAgaWYgKGlzLnVuZCh0bykpIHtcclxuICAgICAgICAgICAgdG8gPSBwcmV2aW91c1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0d2Vlbi5mcm9tID0gZGVjb21wb3NlVmFsdWUoZnJvbSwgdW5pdCk7XHJcbiAgICAgICAgdHdlZW4udG8gPSBkZWNvbXBvc2VWYWx1ZShnZXRSZWxhdGl2ZVZhbHVlKHRvLCBmcm9tKSwgdW5pdCk7XHJcbiAgICAgICAgdHdlZW4uc3RhcnQgPSBwcmV2aW91c1R3ZWVuID8gcHJldmlvdXNUd2Vlbi5lbmQgOiAwO1xyXG4gICAgICAgIHR3ZWVuLmVuZCA9IHR3ZWVuLnN0YXJ0ICsgdHdlZW4uZGVsYXkgKyB0d2Vlbi5kdXJhdGlvbiArIHR3ZWVuLmVuZERlbGF5O1xyXG4gICAgICAgIHR3ZWVuLmVhc2luZyA9IHBhcnNlRWFzaW5ncyh0d2Vlbi5lYXNpbmcsIHR3ZWVuLmR1cmF0aW9uKTtcclxuICAgICAgICB0d2Vlbi5pc1BhdGggPSBpcy5wdGgodHdlZW5WYWx1ZSk7XHJcbiAgICAgICAgdHdlZW4uaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHID0gdHdlZW4uaXNQYXRoICYmIGlzLnN2ZyhhbmltYXRhYmxlLnRhcmdldCk7XHJcbiAgICAgICAgdHdlZW4uaXNDb2xvciA9IGlzLmNvbCh0d2Vlbi5mcm9tLm9yaWdpbmFsKTtcclxuICAgICAgICBpZiAodHdlZW4uaXNDb2xvcikge1xyXG4gICAgICAgICAgICB0d2Vlbi5yb3VuZCA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZXZpb3VzVHdlZW4gPSB0d2VlbjtcclxuICAgICAgICByZXR1cm4gdHdlZW47XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gVHdlZW4gcHJvZ3Jlc3NcclxuXHJcbnZhciBzZXRQcm9ncmVzc1ZhbHVlID0ge1xyXG4gICAgY3NzOiBmdW5jdGlvbih0LCBwLCB2KSB7XHJcbiAgICAgICAgcmV0dXJuIHQuc3R5bGVbcF0gPSB2O1xyXG4gICAgfSxcclxuICAgIGF0dHJpYnV0ZTogZnVuY3Rpb24odCwgcCwgdikge1xyXG4gICAgICAgIHJldHVybiB0LnNldEF0dHJpYnV0ZShwLCB2KTtcclxuICAgIH0sXHJcbiAgICBvYmplY3Q6IGZ1bmN0aW9uKHQsIHAsIHYpIHtcclxuICAgICAgICByZXR1cm4gdFtwXSA9IHY7XHJcbiAgICB9LFxyXG4gICAgdHJhbnNmb3JtOiBmdW5jdGlvbih0LCBwLCB2LCB0cmFuc2Zvcm1zLCBtYW51YWwpIHtcclxuICAgICAgICB0cmFuc2Zvcm1zLmxpc3Quc2V0KHAsIHYpO1xyXG4gICAgICAgIGlmIChwID09PSB0cmFuc2Zvcm1zLmxhc3QgfHwgbWFudWFsKSB7XHJcbiAgICAgICAgICAgIHZhciBzdHIgPSAnJztcclxuICAgICAgICAgICAgdHJhbnNmb3Jtcy5saXN0LmZvckVhY2goZnVuY3Rpb24odmFsdWUsIHByb3ApIHtcclxuICAgICAgICAgICAgICAgIHN0ciArPSBwcm9wICsgXCIoXCIgKyB2YWx1ZSArIFwiKSBcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHQuc3R5bGUudHJhbnNmb3JtID0gc3RyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbi8vIFNldCBWYWx1ZSBoZWxwZXJcclxuXHJcbmZ1bmN0aW9uIHNldFRhcmdldHNWYWx1ZSh0YXJnZXRzLCBwcm9wZXJ0aWVzKSB7XHJcbiAgICB2YXIgYW5pbWF0YWJsZXMgPSBnZXRBbmltYXRhYmxlcyh0YXJnZXRzKTtcclxuICAgIGFuaW1hdGFibGVzLmZvckVhY2goZnVuY3Rpb24oYW5pbWF0YWJsZSkge1xyXG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZ2V0RnVuY3Rpb25WYWx1ZShwcm9wZXJ0aWVzW3Byb3BlcnR5XSwgYW5pbWF0YWJsZSk7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBhbmltYXRhYmxlLnRhcmdldDtcclxuICAgICAgICAgICAgdmFyIHZhbHVlVW5pdCA9IGdldFVuaXQodmFsdWUpO1xyXG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWVVbml0LCBhbmltYXRhYmxlKTtcclxuICAgICAgICAgICAgdmFyIHVuaXQgPSB2YWx1ZVVuaXQgfHwgZ2V0VW5pdChvcmlnaW5hbFZhbHVlKTtcclxuICAgICAgICAgICAgdmFyIHRvID0gZ2V0UmVsYXRpdmVWYWx1ZSh2YWxpZGF0ZVZhbHVlKHZhbHVlLCB1bml0KSwgb3JpZ2luYWxWYWx1ZSk7XHJcbiAgICAgICAgICAgIHZhciBhbmltVHlwZSA9IGdldEFuaW1hdGlvblR5cGUodGFyZ2V0LCBwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgIHNldFByb2dyZXNzVmFsdWVbYW5pbVR5cGVdKHRhcmdldCwgcHJvcGVydHksIHRvLCBhbmltYXRhYmxlLnRyYW5zZm9ybXMsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBBbmltYXRpb25zXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBbmltYXRpb24oYW5pbWF0YWJsZSwgcHJvcCkge1xyXG4gICAgdmFyIGFuaW1UeXBlID0gZ2V0QW5pbWF0aW9uVHlwZShhbmltYXRhYmxlLnRhcmdldCwgcHJvcC5uYW1lKTtcclxuICAgIGlmIChhbmltVHlwZSkge1xyXG4gICAgICAgIHZhciB0d2VlbnMgPSBub3JtYWxpemVUd2VlbnMocHJvcCwgYW5pbWF0YWJsZSk7XHJcbiAgICAgICAgdmFyIGxhc3RUd2VlbiA9IHR3ZWVuc1t0d2VlbnMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogYW5pbVR5cGUsXHJcbiAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wLm5hbWUsXHJcbiAgICAgICAgICAgIGFuaW1hdGFibGU6IGFuaW1hdGFibGUsXHJcbiAgICAgICAgICAgIHR3ZWVuczogdHdlZW5zLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogbGFzdFR3ZWVuLmVuZCxcclxuICAgICAgICAgICAgZGVsYXk6IHR3ZWVuc1swXS5kZWxheSxcclxuICAgICAgICAgICAgZW5kRGVsYXk6IGxhc3RUd2Vlbi5lbmREZWxheVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QW5pbWF0aW9ucyhhbmltYXRhYmxlcywgcHJvcGVydGllcykge1xyXG4gICAgcmV0dXJuIGZpbHRlckFycmF5KGZsYXR0ZW5BcnJheShhbmltYXRhYmxlcy5tYXAoZnVuY3Rpb24oYW5pbWF0YWJsZSkge1xyXG4gICAgICAgIHJldHVybiBwcm9wZXJ0aWVzLm1hcChmdW5jdGlvbihwcm9wKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVBbmltYXRpb24oYW5pbWF0YWJsZSwgcHJvcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KSksIGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gIWlzLnVuZChhKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBDcmVhdGUgSW5zdGFuY2VcclxuXHJcbmZ1bmN0aW9uIGdldEluc3RhbmNlVGltaW5ncyhhbmltYXRpb25zLCB0d2VlblNldHRpbmdzKSB7XHJcbiAgICB2YXIgYW5pbUxlbmd0aCA9IGFuaW1hdGlvbnMubGVuZ3RoO1xyXG4gICAgdmFyIGdldFRsT2Zmc2V0ID0gZnVuY3Rpb24oYW5pbSkge1xyXG4gICAgICAgIHJldHVybiBhbmltLnRpbWVsaW5lT2Zmc2V0ID8gYW5pbS50aW1lbGluZU9mZnNldCA6IDA7XHJcbiAgICB9O1xyXG4gICAgdmFyIHRpbWluZ3MgPSB7fTtcclxuICAgIHRpbWluZ3MuZHVyYXRpb24gPSBhbmltTGVuZ3RoID8gTWF0aC5tYXguYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24oYW5pbSkge1xyXG4gICAgICAgIHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZHVyYXRpb247XHJcbiAgICB9KSkgOiB0d2VlblNldHRpbmdzLmR1cmF0aW9uO1xyXG4gICAgdGltaW5ncy5kZWxheSA9IGFuaW1MZW5ndGggPyBNYXRoLm1pbi5hcHBseShNYXRoLCBhbmltYXRpb25zLm1hcChmdW5jdGlvbihhbmltKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFRsT2Zmc2V0KGFuaW0pICsgYW5pbS5kZWxheTtcclxuICAgIH0pKSA6IHR3ZWVuU2V0dGluZ3MuZGVsYXk7XHJcbiAgICB0aW1pbmdzLmVuZERlbGF5ID0gYW5pbUxlbmd0aCA/IHRpbWluZ3MuZHVyYXRpb24gLSBNYXRoLm1heC5hcHBseShNYXRoLCBhbmltYXRpb25zLm1hcChmdW5jdGlvbihhbmltKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFRsT2Zmc2V0KGFuaW0pICsgYW5pbS5kdXJhdGlvbiAtIGFuaW0uZW5kRGVsYXk7XHJcbiAgICB9KSkgOiB0d2VlblNldHRpbmdzLmVuZERlbGF5O1xyXG4gICAgcmV0dXJuIHRpbWluZ3M7XHJcbn1cclxuXHJcbnZhciBpbnN0YW5jZUlEID0gMDtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld0luc3RhbmNlKHBhcmFtcykge1xyXG4gICAgdmFyIGluc3RhbmNlU2V0dGluZ3MgPSByZXBsYWNlT2JqZWN0UHJvcHMoZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MsIHBhcmFtcyk7XHJcbiAgICB2YXIgdHdlZW5TZXR0aW5ncyA9IHJlcGxhY2VPYmplY3RQcm9wcyhkZWZhdWx0VHdlZW5TZXR0aW5ncywgcGFyYW1zKTtcclxuICAgIHZhciBwcm9wZXJ0aWVzID0gZ2V0UHJvcGVydGllcyh0d2VlblNldHRpbmdzLCBwYXJhbXMpO1xyXG4gICAgdmFyIGFuaW1hdGFibGVzID0gZ2V0QW5pbWF0YWJsZXMocGFyYW1zLnRhcmdldHMpO1xyXG4gICAgdmFyIGFuaW1hdGlvbnMgPSBnZXRBbmltYXRpb25zKGFuaW1hdGFibGVzLCBwcm9wZXJ0aWVzKTtcclxuICAgIHZhciB0aW1pbmdzID0gZ2V0SW5zdGFuY2VUaW1pbmdzKGFuaW1hdGlvbnMsIHR3ZWVuU2V0dGluZ3MpO1xyXG4gICAgdmFyIGlkID0gaW5zdGFuY2VJRDtcclxuICAgIGluc3RhbmNlSUQrKztcclxuICAgIHJldHVybiBtZXJnZU9iamVjdHMoaW5zdGFuY2VTZXR0aW5ncywge1xyXG4gICAgICAgIGlkOiBpZCxcclxuICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgYW5pbWF0YWJsZXM6IGFuaW1hdGFibGVzLFxyXG4gICAgICAgIGFuaW1hdGlvbnM6IGFuaW1hdGlvbnMsXHJcbiAgICAgICAgZHVyYXRpb246IHRpbWluZ3MuZHVyYXRpb24sXHJcbiAgICAgICAgZGVsYXk6IHRpbWluZ3MuZGVsYXksXHJcbiAgICAgICAgZW5kRGVsYXk6IHRpbWluZ3MuZW5kRGVsYXlcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBDb3JlXHJcblxyXG52YXIgYWN0aXZlSW5zdGFuY2VzID0gW107XHJcblxyXG52YXIgZW5naW5lID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHJhZjtcclxuXHJcbiAgICBmdW5jdGlvbiBwbGF5KCkge1xyXG4gICAgICAgIGlmICghcmFmICYmICghaXNEb2N1bWVudEhpZGRlbigpIHx8ICFhbmltZS5zdXNwZW5kV2hlbkRvY3VtZW50SGlkZGVuKSAmJiBhY3RpdmVJbnN0YW5jZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0ZXAodCkge1xyXG4gICAgICAgIC8vIG1lbW8gb24gYWxnb3JpdGhtIGlzc3VlOlxyXG4gICAgICAgIC8vIGRhbmdlcm91cyBpdGVyYXRpb24gb3ZlciBtdXRhYmxlIGBhY3RpdmVJbnN0YW5jZXNgXHJcbiAgICAgICAgLy8gKHRoYXQgY29sbGVjdGlvbiBtYXkgYmUgdXBkYXRlZCBmcm9tIHdpdGhpbiBjYWxsYmFja3Mgb2YgYHRpY2tgLWVkIGFuaW1hdGlvbiBpbnN0YW5jZXMpXHJcbiAgICAgICAgdmFyIGFjdGl2ZUluc3RhbmNlc0xlbmd0aCA9IGFjdGl2ZUluc3RhbmNlcy5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgIHdoaWxlIChpIDwgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBhY3RpdmVJbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlc1tpXTtcclxuICAgICAgICAgICAgaWYgKCFhY3RpdmVJbnN0YW5jZS5wYXVzZWQpIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUluc3RhbmNlLnRpY2sodCk7XHJcbiAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbnN0YW5jZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmFmID0gaSA+IDAgPyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSgpIHtcclxuICAgICAgICBpZiAoIWFuaW1lLnN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzRG9jdW1lbnRIaWRkZW4oKSkge1xyXG4gICAgICAgICAgICAvLyBzdXNwZW5kIHRpY2tzXHJcbiAgICAgICAgICAgIHJhZiA9IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZik7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8gaXMgYmFjayB0byBhY3RpdmUgdGFiXHJcbiAgICAgICAgICAgIC8vIGZpcnN0IGFkanVzdCBhbmltYXRpb25zIHRvIGNvbnNpZGVyIHRoZSB0aW1lIHRoYXQgdGlja3Mgd2VyZSBzdXNwZW5kZWRcclxuICAgICAgICAgICAgYWN0aXZlSW5zdGFuY2VzLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihpbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5fb25Eb2N1bWVudFZpc2liaWxpdHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZW5naW5lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBsYXk7XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBpc0RvY3VtZW50SGlkZGVuKCkge1xyXG4gICAgcmV0dXJuICEhZG9jdW1lbnQgJiYgZG9jdW1lbnQuaGlkZGVuO1xyXG59XHJcblxyXG4vLyBQdWJsaWMgSW5zdGFuY2VcclxuXHJcbmZ1bmN0aW9uIGFuaW1lKHBhcmFtcykge1xyXG4gICAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSBwYXJhbXMgPSB7fTtcclxuXHJcblxyXG4gICAgdmFyIHN0YXJ0VGltZSA9IDAsXHJcbiAgICAgICAgbGFzdFRpbWUgPSAwLFxyXG4gICAgICAgIG5vdyA9IDA7XHJcbiAgICB2YXIgY2hpbGRyZW4sIGNoaWxkcmVuTGVuZ3RoID0gMDtcclxuICAgIHZhciByZXNvbHZlID0gbnVsbDtcclxuXHJcbiAgICBmdW5jdGlvbiBtYWtlUHJvbWlzZShpbnN0YW5jZSkge1xyXG4gICAgICAgIHZhciBwcm9taXNlID0gd2luZG93LlByb21pc2UgJiYgbmV3IFByb21pc2UoZnVuY3Rpb24oX3Jlc29sdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUgPSBfcmVzb2x2ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpbnN0YW5jZS5maW5pc2hlZCA9IHByb21pc2U7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGluc3RhbmNlID0gY3JlYXRlTmV3SW5zdGFuY2UocGFyYW1zKTtcclxuICAgIHZhciBwcm9taXNlID0gbWFrZVByb21pc2UoaW5zdGFuY2UpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uKCkge1xyXG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBpbnN0YW5jZS5kaXJlY3Rpb247XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiAhPT0gJ2FsdGVybmF0ZScpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UuZGlyZWN0aW9uID0gZGlyZWN0aW9uICE9PSAnbm9ybWFsJyA/ICdub3JtYWwnIDogJ3JldmVyc2UnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnN0YW5jZS5yZXZlcnNlZCA9ICFpbnN0YW5jZS5yZXZlcnNlZDtcclxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGlsZC5yZXZlcnNlZCA9IGluc3RhbmNlLnJldmVyc2VkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkanVzdFRpbWUodGltZSkge1xyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5yZXZlcnNlZCA/IGluc3RhbmNlLmR1cmF0aW9uIC0gdGltZSA6IHRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRUaW1lKCkge1xyXG4gICAgICAgIHN0YXJ0VGltZSA9IDA7XHJcbiAgICAgICAgbGFzdFRpbWUgPSBhZGp1c3RUaW1lKGluc3RhbmNlLmN1cnJlbnRUaW1lKSAqICgxIC8gYW5pbWUuc3BlZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlZWtDaGlsZCh0aW1lLCBjaGlsZCkge1xyXG4gICAgICAgIGlmIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5zZWVrKHRpbWUgLSBjaGlsZC50aW1lbGluZU9mZnNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN5bmNJbnN0YW5jZUNoaWxkcmVuKHRpbWUpIHtcclxuICAgICAgICBpZiAoIWluc3RhbmNlLnJldmVyc2VQbGF5YmFjaykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHNlZWtDaGlsZCh0aW1lLCBjaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpJDEgPSBjaGlsZHJlbkxlbmd0aDsgaSQxLS07KSB7XHJcbiAgICAgICAgICAgICAgICBzZWVrQ2hpbGQodGltZSwgY2hpbGRyZW5baSQxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc1RpbWUpIHtcclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgdmFyIGFuaW1hdGlvbnMgPSBpbnN0YW5jZS5hbmltYXRpb25zO1xyXG4gICAgICAgIHZhciBhbmltYXRpb25zTGVuZ3RoID0gYW5pbWF0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKGkgPCBhbmltYXRpb25zTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBhbmltID0gYW5pbWF0aW9uc1tpXTtcclxuICAgICAgICAgICAgdmFyIGFuaW1hdGFibGUgPSBhbmltLmFuaW1hdGFibGU7XHJcbiAgICAgICAgICAgIHZhciB0d2VlbnMgPSBhbmltLnR3ZWVucztcclxuICAgICAgICAgICAgdmFyIHR3ZWVuTGVuZ3RoID0gdHdlZW5zLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIHZhciB0d2VlbiA9IHR3ZWVuc1t0d2Vlbkxlbmd0aF07XHJcbiAgICAgICAgICAgIC8vIE9ubHkgY2hlY2sgZm9yIGtleWZyYW1lcyBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIHR3ZWVuXHJcbiAgICAgICAgICAgIGlmICh0d2Vlbkxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdHdlZW4gPSBmaWx0ZXJBcnJheSh0d2VlbnMsIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGluc1RpbWUgPCB0LmVuZCk7XHJcbiAgICAgICAgICAgICAgICB9KVswXSB8fCB0d2VlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZWxhcHNlZCA9IG1pbk1heChpbnNUaW1lIC0gdHdlZW4uc3RhcnQgLSB0d2Vlbi5kZWxheSwgMCwgdHdlZW4uZHVyYXRpb24pIC8gdHdlZW4uZHVyYXRpb247XHJcbiAgICAgICAgICAgIHZhciBlYXNlZCA9IGlzTmFOKGVsYXBzZWQpID8gMSA6IHR3ZWVuLmVhc2luZyhlbGFwc2VkKTtcclxuICAgICAgICAgICAgdmFyIHN0cmluZ3MgPSB0d2Vlbi50by5zdHJpbmdzO1xyXG4gICAgICAgICAgICB2YXIgcm91bmQgPSB0d2Vlbi5yb3VuZDtcclxuICAgICAgICAgICAgdmFyIG51bWJlcnMgPSBbXTtcclxuICAgICAgICAgICAgdmFyIHRvTnVtYmVyc0xlbmd0aCA9IHR3ZWVuLnRvLm51bWJlcnMubGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAodm9pZCAwKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0b051bWJlcnNMZW5ndGg7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gKHZvaWQgMCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9OdW1iZXIgPSB0d2Vlbi50by5udW1iZXJzW25dO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZyb21OdW1iZXIgPSB0d2Vlbi5mcm9tLm51bWJlcnNbbl0gfHwgMDtcclxuICAgICAgICAgICAgICAgIGlmICghdHdlZW4uaXNQYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBmcm9tTnVtYmVyICsgKGVhc2VkICogKHRvTnVtYmVyIC0gZnJvbU51bWJlcikpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGdldFBhdGhQcm9ncmVzcyh0d2Vlbi52YWx1ZSwgZWFzZWQgKiB0b051bWJlciwgdHdlZW4uaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHR3ZWVuLmlzQ29sb3IgJiYgbiA+IDIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAqIHJvdW5kKSAvIHJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG51bWJlcnMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gTWFudWFsIEFycmF5LnJlZHVjZSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlc1xyXG4gICAgICAgICAgICB2YXIgc3RyaW5nc0xlbmd0aCA9IHN0cmluZ3MubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAoIXN0cmluZ3NMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gbnVtYmVyc1swXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gc3RyaW5nc1swXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgc3RyaW5nc0xlbmd0aDsgcysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBzdHJpbmdzW3NdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiID0gc3RyaW5nc1tzICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4kMSA9IG51bWJlcnNbc107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihuJDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gbiQxICsgJyAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gbiQxICsgYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRQcm9ncmVzc1ZhbHVlW2FuaW0udHlwZV0oYW5pbWF0YWJsZS50YXJnZXQsIGFuaW0ucHJvcGVydHksIHByb2dyZXNzLCBhbmltYXRhYmxlLnRyYW5zZm9ybXMpO1xyXG4gICAgICAgICAgICBhbmltLmN1cnJlbnRWYWx1ZSA9IHByb2dyZXNzO1xyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENhbGxiYWNrKGNiKSB7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlW2NiXSAmJiAhaW5zdGFuY2UucGFzc1Rocm91Z2gpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2VbY2JdKGluc3RhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY291bnRJdGVyYXRpb24oKSB7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLnJlbWFpbmluZyAmJiBpbnN0YW5jZS5yZW1haW5pbmcgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UucmVtYWluaW5nLS07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEluc3RhbmNlUHJvZ3Jlc3MoZW5naW5lVGltZSkge1xyXG4gICAgICAgIHZhciBpbnNEdXJhdGlvbiA9IGluc3RhbmNlLmR1cmF0aW9uO1xyXG4gICAgICAgIHZhciBpbnNEZWxheSA9IGluc3RhbmNlLmRlbGF5O1xyXG4gICAgICAgIHZhciBpbnNFbmREZWxheSA9IGluc0R1cmF0aW9uIC0gaW5zdGFuY2UuZW5kRGVsYXk7XHJcbiAgICAgICAgdmFyIGluc1RpbWUgPSBhZGp1c3RUaW1lKGVuZ2luZVRpbWUpO1xyXG4gICAgICAgIGluc3RhbmNlLnByb2dyZXNzID0gbWluTWF4KChpbnNUaW1lIC8gaW5zRHVyYXRpb24pICogMTAwLCAwLCAxMDApO1xyXG4gICAgICAgIGluc3RhbmNlLnJldmVyc2VQbGF5YmFjayA9IGluc1RpbWUgPCBpbnN0YW5jZS5jdXJyZW50VGltZTtcclxuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgc3luY0luc3RhbmNlQ2hpbGRyZW4oaW5zVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaW5zdGFuY2UuYmVnYW4gJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLmJlZ2FuID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2V0Q2FsbGJhY2soJ2JlZ2luJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaW5zdGFuY2UubG9vcEJlZ2FuICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lID4gMCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5sb29wQmVnYW4gPSB0cnVlO1xyXG4gICAgICAgICAgICBzZXRDYWxsYmFjaygnbG9vcEJlZ2luJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbnNUaW1lIDw9IGluc0RlbGF5ICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcygwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChpbnNUaW1lID49IGluc0VuZERlbGF5ICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lICE9PSBpbnNEdXJhdGlvbikgfHwgIWluc0R1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNEdXJhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbnNUaW1lID4gaW5zRGVsYXkgJiYgaW5zVGltZSA8IGluc0VuZERlbGF5KSB7XHJcbiAgICAgICAgICAgIGlmICghaW5zdGFuY2UuY2hhbmdlQmVnYW4pIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2V0Q2FsbGJhY2soJ2NoYW5nZUJlZ2luJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0Q2FsbGJhY2soJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zVGltZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGluc3RhbmNlLmNoYW5nZUJlZ2FuKSB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5jaGFuZ2VDb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuY2hhbmdlQmVnYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2VDb21wbGV0ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluc3RhbmNlLmN1cnJlbnRUaW1lID0gbWluTWF4KGluc1RpbWUsIDAsIGluc0R1cmF0aW9uKTtcclxuICAgICAgICBpZiAoaW5zdGFuY2UuYmVnYW4pIHtcclxuICAgICAgICAgICAgc2V0Q2FsbGJhY2soJ3VwZGF0ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZW5naW5lVGltZSA+PSBpbnNEdXJhdGlvbikge1xyXG4gICAgICAgICAgICBsYXN0VGltZSA9IDA7XHJcbiAgICAgICAgICAgIGNvdW50SXRlcmF0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICghaW5zdGFuY2UucmVtYWluaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpbnN0YW5jZS5jb21wbGV0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENhbGxiYWNrKCdsb29wQ29tcGxldGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYWxsYmFjaygnY29tcGxldGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWluc3RhbmNlLnBhc3NUaHJvdWdoICYmICdQcm9taXNlJyBpbiB3aW5kb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gbWFrZVByb21pc2UoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZSA9IG5vdztcclxuICAgICAgICAgICAgICAgIHNldENhbGxiYWNrKCdsb29wQ29tcGxldGUnKTtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmxvb3BCZWdhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlLmRpcmVjdGlvbiA9PT0gJ2FsdGVybmF0ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVJbnN0YW5jZURpcmVjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluc3RhbmNlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGluc3RhbmNlLmRpcmVjdGlvbjtcclxuICAgICAgICBpbnN0YW5jZS5wYXNzVGhyb3VnaCA9IGZhbHNlO1xyXG4gICAgICAgIGluc3RhbmNlLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICBpbnN0YW5jZS5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgaW5zdGFuY2UucGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICBpbnN0YW5jZS5iZWdhbiA9IGZhbHNlO1xyXG4gICAgICAgIGluc3RhbmNlLmxvb3BCZWdhbiA9IGZhbHNlO1xyXG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gZmFsc2U7XHJcbiAgICAgICAgaW5zdGFuY2UuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgaW5zdGFuY2UuY2hhbmdlQ29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgaW5zdGFuY2UucmV2ZXJzZVBsYXliYWNrID0gZmFsc2U7XHJcbiAgICAgICAgaW5zdGFuY2UucmV2ZXJzZWQgPSBkaXJlY3Rpb24gPT09ICdyZXZlcnNlJztcclxuICAgICAgICBpbnN0YW5jZS5yZW1haW5pbmcgPSBpbnN0YW5jZS5sb29wO1xyXG4gICAgICAgIGNoaWxkcmVuID0gaW5zdGFuY2UuY2hpbGRyZW47XHJcbiAgICAgICAgY2hpbGRyZW5MZW5ndGggPSBjaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGNoaWxkcmVuTGVuZ3RoOyBpLS07KSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLmNoaWxkcmVuW2ldLnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbnN0YW5jZS5yZXZlcnNlZCAmJiBpbnN0YW5jZS5sb29wICE9PSB0cnVlIHx8IChkaXJlY3Rpb24gPT09ICdhbHRlcm5hdGUnICYmIGluc3RhbmNlLmxvb3AgPT09IDEpKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLnJlbWFpbmluZysrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zdGFuY2UucmV2ZXJzZWQgPyBpbnN0YW5jZS5kdXJhdGlvbiA6IDApO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBpbnRlcm5hbCBtZXRob2QgKGZvciBlbmdpbmUpIHRvIGFkanVzdCBhbmltYXRpb24gdGltaW5ncyBiZWZvcmUgcmVzdG9yaW5nIGVuZ2luZSB0aWNrcyAockFGKVxyXG4gICAgaW5zdGFuY2UuX29uRG9jdW1lbnRWaXNpYmlsaXR5ID0gcmVzZXRUaW1lO1xyXG5cclxuICAgIC8vIFNldCBWYWx1ZSBoZWxwZXJcclxuXHJcbiAgICBpbnN0YW5jZS5zZXQgPSBmdW5jdGlvbih0YXJnZXRzLCBwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgc2V0VGFyZ2V0c1ZhbHVlKHRhcmdldHMsIHByb3BlcnRpZXMpO1xyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zdGFuY2UudGljayA9IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBub3cgPSB0O1xyXG4gICAgICAgIGlmICghc3RhcnRUaW1lKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0VGltZSA9IG5vdztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SW5zdGFuY2VQcm9ncmVzcygobm93ICsgKGxhc3RUaW1lIC0gc3RhcnRUaW1lKSkgKiBhbmltZS5zcGVlZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGluc3RhbmNlLnNlZWsgPSBmdW5jdGlvbih0aW1lKSB7XHJcbiAgICAgICAgc2V0SW5zdGFuY2VQcm9ncmVzcyhhZGp1c3RUaW1lKHRpbWUpKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zdGFuY2UucGF1c2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgIHJlc2V0VGltZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnN0YW5jZS5wbGF5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZS5wYXVzZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5zdGFuY2UuY29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluc3RhbmNlLnBhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIGFjdGl2ZUluc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtcclxuICAgICAgICByZXNldFRpbWUoKTtcclxuICAgICAgICBlbmdpbmUoKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zdGFuY2UucmV2ZXJzZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgaW5zdGFuY2UuY29tcGxldGVkID0gaW5zdGFuY2UucmV2ZXJzZWQgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgcmVzZXRUaW1lKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGluc3RhbmNlLnJlc3RhcnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpbnN0YW5jZS5yZXNldCgpO1xyXG4gICAgICAgIGluc3RhbmNlLnBsYXkoKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zdGFuY2UucmVtb3ZlID0gZnVuY3Rpb24odGFyZ2V0cykge1xyXG4gICAgICAgIHZhciB0YXJnZXRzQXJyYXkgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XHJcbiAgICAgICAgcmVtb3ZlVGFyZ2V0c0Zyb21JbnN0YW5jZSh0YXJnZXRzQXJyYXksIGluc3RhbmNlKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zdGFuY2UucmVzZXQoKTtcclxuXHJcbiAgICBpZiAoaW5zdGFuY2UuYXV0b3BsYXkpIHtcclxuICAgICAgICBpbnN0YW5jZS5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluc3RhbmNlO1xyXG5cclxufVxyXG5cclxuLy8gUmVtb3ZlIHRhcmdldHMgZnJvbSBhbmltYXRpb25cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnMpIHtcclxuICAgIGZvciAodmFyIGEgPSBhbmltYXRpb25zLmxlbmd0aDsgYS0tOykge1xyXG4gICAgICAgIGlmIChhcnJheUNvbnRhaW5zKHRhcmdldHNBcnJheSwgYW5pbWF0aW9uc1thXS5hbmltYXRhYmxlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9ucy5zcGxpY2UoYSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVUYXJnZXRzRnJvbUluc3RhbmNlKHRhcmdldHNBcnJheSwgaW5zdGFuY2UpIHtcclxuICAgIHZhciBhbmltYXRpb25zID0gaW5zdGFuY2UuYW5pbWF0aW9ucztcclxuICAgIHZhciBjaGlsZHJlbiA9IGluc3RhbmNlLmNoaWxkcmVuO1xyXG4gICAgcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgYW5pbWF0aW9ucyk7XHJcbiAgICBmb3IgKHZhciBjID0gY2hpbGRyZW4ubGVuZ3RoOyBjLS07KSB7XHJcbiAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5bY107XHJcbiAgICAgICAgdmFyIGNoaWxkQW5pbWF0aW9ucyA9IGNoaWxkLmFuaW1hdGlvbnM7XHJcbiAgICAgICAgcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgY2hpbGRBbmltYXRpb25zKTtcclxuICAgICAgICBpZiAoIWNoaWxkQW5pbWF0aW9ucy5sZW5ndGggJiYgIWNoaWxkLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjaGlsZHJlbi5zcGxpY2UoYywgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFhbmltYXRpb25zLmxlbmd0aCAmJiAhY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgaW5zdGFuY2UucGF1c2UoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0c0Zyb21BY3RpdmVJbnN0YW5jZXModGFyZ2V0cykge1xyXG4gICAgdmFyIHRhcmdldHNBcnJheSA9IHBhcnNlVGFyZ2V0cyh0YXJnZXRzKTtcclxuICAgIGZvciAodmFyIGkgPSBhY3RpdmVJbnN0YW5jZXMubGVuZ3RoOyBpLS07KSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gYWN0aXZlSW5zdGFuY2VzW2ldO1xyXG4gICAgICAgIHJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UodGFyZ2V0c0FycmF5LCBpbnN0YW5jZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFN0YWdnZXIgaGVscGVyc1xyXG5cclxuZnVuY3Rpb24gc3RhZ2dlcih2YWwsIHBhcmFtcykge1xyXG4gICAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSBwYXJhbXMgPSB7fTtcclxuXHJcbiAgICB2YXIgZGlyZWN0aW9uID0gcGFyYW1zLmRpcmVjdGlvbiB8fCAnbm9ybWFsJztcclxuICAgIHZhciBlYXNpbmcgPSBwYXJhbXMuZWFzaW5nID8gcGFyc2VFYXNpbmdzKHBhcmFtcy5lYXNpbmcpIDogbnVsbDtcclxuICAgIHZhciBncmlkID0gcGFyYW1zLmdyaWQ7XHJcbiAgICB2YXIgYXhpcyA9IHBhcmFtcy5heGlzO1xyXG4gICAgdmFyIGZyb21JbmRleCA9IHBhcmFtcy5mcm9tIHx8IDA7XHJcbiAgICB2YXIgZnJvbUZpcnN0ID0gZnJvbUluZGV4ID09PSAnZmlyc3QnO1xyXG4gICAgdmFyIGZyb21DZW50ZXIgPSBmcm9tSW5kZXggPT09ICdjZW50ZXInO1xyXG4gICAgdmFyIGZyb21MYXN0ID0gZnJvbUluZGV4ID09PSAnbGFzdCc7XHJcbiAgICB2YXIgaXNSYW5nZSA9IGlzLmFycih2YWwpO1xyXG4gICAgdmFyIHZhbDEgPSBpc1JhbmdlID8gcGFyc2VGbG9hdCh2YWxbMF0pIDogcGFyc2VGbG9hdCh2YWwpO1xyXG4gICAgdmFyIHZhbDIgPSBpc1JhbmdlID8gcGFyc2VGbG9hdCh2YWxbMV0pIDogMDtcclxuICAgIHZhciB1bml0ID0gZ2V0VW5pdChpc1JhbmdlID8gdmFsWzFdIDogdmFsKSB8fCAwO1xyXG4gICAgdmFyIHN0YXJ0ID0gcGFyYW1zLnN0YXJ0IHx8IDAgKyAoaXNSYW5nZSA/IHZhbDEgOiAwKTtcclxuICAgIHZhciB2YWx1ZXMgPSBbXTtcclxuICAgIHZhciBtYXhWYWx1ZSA9IDA7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oZWwsIGksIHQpIHtcclxuICAgICAgICBpZiAoZnJvbUZpcnN0KSB7XHJcbiAgICAgICAgICAgIGZyb21JbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmcm9tQ2VudGVyKSB7XHJcbiAgICAgICAgICAgIGZyb21JbmRleCA9ICh0IC0gMSkgLyAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZnJvbUxhc3QpIHtcclxuICAgICAgICAgICAgZnJvbUluZGV4ID0gdCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFncmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goTWF0aC5hYnMoZnJvbUluZGV4IC0gaW5kZXgpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZyb21YID0gIWZyb21DZW50ZXIgPyBmcm9tSW5kZXggJSBncmlkWzBdIDogKGdyaWRbMF0gLSAxKSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZyb21ZID0gIWZyb21DZW50ZXIgPyBNYXRoLmZsb29yKGZyb21JbmRleCAvIGdyaWRbMF0pIDogKGdyaWRbMV0gLSAxKSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvWCA9IGluZGV4ICUgZ3JpZFswXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG9ZID0gTWF0aC5mbG9vcihpbmRleCAvIGdyaWRbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZVggPSBmcm9tWCAtIHRvWDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VZID0gZnJvbVkgLSB0b1k7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gTWF0aC5zcXJ0KGRpc3RhbmNlWCAqIGRpc3RhbmNlWCArIGRpc3RhbmNlWSAqIGRpc3RhbmNlWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF4aXMgPT09ICd4Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IC1kaXN0YW5jZVg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChheGlzID09PSAneScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAtZGlzdGFuY2VZO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIHZhbHVlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVhc2luZykge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbih2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWFzaW5nKHZhbCAvIG1heFZhbHVlKSAqIG1heFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JldmVyc2UnKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBheGlzID8gKHZhbCA8IDApID8gdmFsICogLTEgOiAtdmFsIDogTWF0aC5hYnMobWF4VmFsdWUgLSB2YWwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNwYWNpbmcgPSBpc1JhbmdlID8gKHZhbDIgLSB2YWwxKSAvIG1heFZhbHVlIDogdmFsMTtcclxuICAgICAgICByZXR1cm4gc3RhcnQgKyAoc3BhY2luZyAqIChNYXRoLnJvdW5kKHZhbHVlc1tpXSAqIDEwMCkgLyAxMDApKSArIHVuaXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFRpbWVsaW5lXHJcblxyXG5mdW5jdGlvbiB0aW1lbGluZShwYXJhbXMpIHtcclxuICAgIGlmIChwYXJhbXMgPT09IHZvaWQgMCkgcGFyYW1zID0ge307XHJcblxyXG4gICAgdmFyIHRsID0gYW5pbWUocGFyYW1zKTtcclxuICAgIHRsLmR1cmF0aW9uID0gMDtcclxuICAgIHRsLmFkZCA9IGZ1bmN0aW9uKGluc3RhbmNlUGFyYW1zLCB0aW1lbGluZU9mZnNldCkge1xyXG4gICAgICAgIHZhciB0bEluZGV4ID0gYWN0aXZlSW5zdGFuY2VzLmluZGV4T2YodGwpO1xyXG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRsLmNoaWxkcmVuO1xyXG4gICAgICAgIGlmICh0bEluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgYWN0aXZlSW5zdGFuY2VzLnNwbGljZSh0bEluZGV4LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHBhc3NUaHJvdWdoKGlucykge1xyXG4gICAgICAgICAgICBpbnMucGFzc1Rocm91Z2ggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBhc3NUaHJvdWdoKGNoaWxkcmVuW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGluc1BhcmFtcyA9IG1lcmdlT2JqZWN0cyhpbnN0YW5jZVBhcmFtcywgcmVwbGFjZU9iamVjdFByb3BzKGRlZmF1bHRUd2VlblNldHRpbmdzLCBwYXJhbXMpKTtcclxuICAgICAgICBpbnNQYXJhbXMudGFyZ2V0cyA9IGluc1BhcmFtcy50YXJnZXRzIHx8IHBhcmFtcy50YXJnZXRzO1xyXG4gICAgICAgIHZhciB0bER1cmF0aW9uID0gdGwuZHVyYXRpb247XHJcbiAgICAgICAgaW5zUGFyYW1zLmF1dG9wbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgaW5zUGFyYW1zLmRpcmVjdGlvbiA9IHRsLmRpcmVjdGlvbjtcclxuICAgICAgICBpbnNQYXJhbXMudGltZWxpbmVPZmZzZXQgPSBpcy51bmQodGltZWxpbmVPZmZzZXQpID8gdGxEdXJhdGlvbiA6IGdldFJlbGF0aXZlVmFsdWUodGltZWxpbmVPZmZzZXQsIHRsRHVyYXRpb24pO1xyXG4gICAgICAgIHBhc3NUaHJvdWdoKHRsKTtcclxuICAgICAgICB0bC5zZWVrKGluc1BhcmFtcy50aW1lbGluZU9mZnNldCk7XHJcbiAgICAgICAgdmFyIGlucyA9IGFuaW1lKGluc1BhcmFtcyk7XHJcbiAgICAgICAgcGFzc1Rocm91Z2goaW5zKTtcclxuICAgICAgICBjaGlsZHJlbi5wdXNoKGlucyk7XHJcbiAgICAgICAgdmFyIHRpbWluZ3MgPSBnZXRJbnN0YW5jZVRpbWluZ3MoY2hpbGRyZW4sIHBhcmFtcyk7XHJcbiAgICAgICAgdGwuZGVsYXkgPSB0aW1pbmdzLmRlbGF5O1xyXG4gICAgICAgIHRsLmVuZERlbGF5ID0gdGltaW5ncy5lbmREZWxheTtcclxuICAgICAgICB0bC5kdXJhdGlvbiA9IHRpbWluZ3MuZHVyYXRpb247XHJcbiAgICAgICAgdGwuc2VlaygwKTtcclxuICAgICAgICB0bC5yZXNldCgpO1xyXG4gICAgICAgIGlmICh0bC5hdXRvcGxheSkge1xyXG4gICAgICAgICAgICB0bC5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0bDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGw7XHJcbn1cclxuXHJcbmFuaW1lLnZlcnNpb24gPSAnMy4yLjEnO1xyXG5hbmltZS5zcGVlZCA9IDE7XHJcbi8vIFRPRE86I3JldmlldzogbmFtaW5nLCBkb2N1bWVudGF0aW9uXHJcbmFuaW1lLnN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4gPSB0cnVlO1xyXG5hbmltZS5ydW5uaW5nID0gYWN0aXZlSW5zdGFuY2VzO1xyXG5hbmltZS5yZW1vdmUgPSByZW1vdmVUYXJnZXRzRnJvbUFjdGl2ZUluc3RhbmNlcztcclxuYW5pbWUuZ2V0ID0gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZTtcclxuYW5pbWUuc2V0ID0gc2V0VGFyZ2V0c1ZhbHVlO1xyXG5hbmltZS5jb252ZXJ0UHggPSBjb252ZXJ0UHhUb1VuaXQ7XHJcbmFuaW1lLnBhdGggPSBnZXRQYXRoO1xyXG5hbmltZS5zZXREYXNob2Zmc2V0ID0gc2V0RGFzaG9mZnNldDtcclxuYW5pbWUuc3RhZ2dlciA9IHN0YWdnZXI7XHJcbmFuaW1lLnRpbWVsaW5lID0gdGltZWxpbmU7XHJcbmFuaW1lLmVhc2luZyA9IHBhcnNlRWFzaW5ncztcclxuYW5pbWUucGVubmVyID0gcGVubmVyO1xyXG5hbmltZS5yYW5kb20gPSBmdW5jdGlvbihtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFuaW1lO1xyXG4iLCIvKiFcclxuV2F5cG9pbnRzIC0gNC4wLjFcclxuQ29weXJpZ2h0IMKpIDIwMTEtMjAxNiBDYWxlYiBUcm91Z2h0b25cclxuTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG5odHRwczovL2dpdGh1Yi5jb20vaW1ha2V3ZWJ0aGluZ3Mvd2F5cG9pbnRzL2Jsb2IvbWFzdGVyL2xpY2Vuc2VzLnR4dFxyXG4qL1xyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCdcclxuXHJcbiAgICB2YXIga2V5Q291bnRlciA9IDBcclxuICAgIHZhciBhbGxXYXlwb2ludHMgPSB7fVxyXG5cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS93YXlwb2ludCAqL1xyXG4gICAgZnVuY3Rpb24gV2F5cG9pbnQob3B0aW9ucykge1xyXG4gICAgICAgIGlmICghb3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG9wdGlvbnMgcGFzc2VkIHRvIFdheXBvaW50IGNvbnN0cnVjdG9yJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvcHRpb25zLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBlbGVtZW50IG9wdGlvbiBwYXNzZWQgdG8gV2F5cG9pbnQgY29uc3RydWN0b3InKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9wdGlvbnMuaGFuZGxlcikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGhhbmRsZXIgb3B0aW9uIHBhc3NlZCB0byBXYXlwb2ludCBjb25zdHJ1Y3RvcicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmtleSA9ICd3YXlwb2ludC0nICsga2V5Q291bnRlclxyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IFdheXBvaW50LkFkYXB0ZXIuZXh0ZW5kKHt9LCBXYXlwb2ludC5kZWZhdWx0cywgb3B0aW9ucylcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLm9wdGlvbnMuZWxlbWVudFxyXG4gICAgICAgIHRoaXMuYWRhcHRlciA9IG5ldyBXYXlwb2ludC5BZGFwdGVyKHRoaXMuZWxlbWVudClcclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gb3B0aW9ucy5oYW5kbGVyXHJcbiAgICAgICAgdGhpcy5heGlzID0gdGhpcy5vcHRpb25zLmhvcml6b250YWwgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnXHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdGhpcy5vcHRpb25zLmVuYWJsZWRcclxuICAgICAgICB0aGlzLnRyaWdnZXJQb2ludCA9IG51bGxcclxuICAgICAgICB0aGlzLmdyb3VwID0gV2F5cG9pbnQuR3JvdXAuZmluZE9yQ3JlYXRlKHtcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5vcHRpb25zLmdyb3VwLFxyXG4gICAgICAgICAgICBheGlzOiB0aGlzLmF4aXNcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IFdheXBvaW50LkNvbnRleHQuZmluZE9yQ3JlYXRlQnlFbGVtZW50KHRoaXMub3B0aW9ucy5jb250ZXh0KVxyXG5cclxuICAgICAgICBpZiAoV2F5cG9pbnQub2Zmc2V0QWxpYXNlc1t0aGlzLm9wdGlvbnMub2Zmc2V0XSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMub2Zmc2V0ID0gV2F5cG9pbnQub2Zmc2V0QWxpYXNlc1t0aGlzLm9wdGlvbnMub2Zmc2V0XVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdyb3VwLmFkZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuY29udGV4dC5hZGQodGhpcylcclxuICAgICAgICBhbGxXYXlwb2ludHNbdGhpcy5rZXldID0gdGhpc1xyXG4gICAgICAgIGtleUNvdW50ZXIgKz0gMVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIFdheXBvaW50LnByb3RvdHlwZS5xdWV1ZVRyaWdnZXIgPSBmdW5jdGlvbihkaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmdyb3VwLnF1ZXVlVHJpZ2dlcih0aGlzLCBkaXJlY3Rpb24pXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgV2F5cG9pbnQucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2suYXBwbHkodGhpcywgYXJncylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvZGVzdHJveSAqL1xyXG4gICAgV2F5cG9pbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQucmVtb3ZlKHRoaXMpXHJcbiAgICAgICAgdGhpcy5ncm91cC5yZW1vdmUodGhpcylcclxuICAgICAgICBkZWxldGUgYWxsV2F5cG9pbnRzW3RoaXMua2V5XVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2Rpc2FibGUgKi9cclxuICAgIFdheXBvaW50LnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2VuYWJsZSAqL1xyXG4gICAgV2F5cG9pbnQucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5yZWZyZXNoKClcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9uZXh0ICovXHJcbiAgICBXYXlwb2ludC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdyb3VwLm5leHQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9wcmV2aW91cyAqL1xyXG4gICAgV2F5cG9pbnQucHJvdG90eXBlLnByZXZpb3VzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXAucHJldmlvdXModGhpcylcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBXYXlwb2ludC5pbnZva2VBbGwgPSBmdW5jdGlvbihtZXRob2QpIHtcclxuICAgICAgICB2YXIgYWxsV2F5cG9pbnRzQXJyYXkgPSBbXVxyXG4gICAgICAgIGZvciAodmFyIHdheXBvaW50S2V5IGluIGFsbFdheXBvaW50cykge1xyXG4gICAgICAgICAgICBhbGxXYXlwb2ludHNBcnJheS5wdXNoKGFsbFdheXBvaW50c1t3YXlwb2ludEtleV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBlbmQgPSBhbGxXYXlwb2ludHNBcnJheS5sZW5ndGg7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICAgICAgICBhbGxXYXlwb2ludHNBcnJheVtpXVttZXRob2RdKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvZGVzdHJveS1hbGwgKi9cclxuICAgIFdheXBvaW50LmRlc3Ryb3lBbGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBXYXlwb2ludC5pbnZva2VBbGwoJ2Rlc3Ryb3knKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2Rpc2FibGUtYWxsICovXHJcbiAgICBXYXlwb2ludC5kaXNhYmxlQWxsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgV2F5cG9pbnQuaW52b2tlQWxsKCdkaXNhYmxlJylcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9lbmFibGUtYWxsICovXHJcbiAgICBXYXlwb2ludC5lbmFibGVBbGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBXYXlwb2ludC5Db250ZXh0LnJlZnJlc2hBbGwoKVxyXG4gICAgICAgIGZvciAodmFyIHdheXBvaW50S2V5IGluIGFsbFdheXBvaW50cykge1xyXG4gICAgICAgICAgICBhbGxXYXlwb2ludHNbd2F5cG9pbnRLZXldLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvcmVmcmVzaC1hbGwgKi9cclxuICAgIFdheXBvaW50LnJlZnJlc2hBbGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBXYXlwb2ludC5Db250ZXh0LnJlZnJlc2hBbGwoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL3ZpZXdwb3J0LWhlaWdodCAqL1xyXG4gICAgV2F5cG9pbnQudmlld3BvcnRIZWlnaHQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS92aWV3cG9ydC13aWR0aCAqL1xyXG4gICAgV2F5cG9pbnQudmlld3BvcnRXaWR0aCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcclxuICAgIH1cclxuXHJcbiAgICBXYXlwb2ludC5hZGFwdGVycyA9IFtdXHJcblxyXG4gICAgV2F5cG9pbnQuZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgY29udGV4dDogd2luZG93LFxyXG4gICAgICAgIGNvbnRpbnVvdXM6IHRydWUsXHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBncm91cDogJ2RlZmF1bHQnLFxyXG4gICAgICAgIGhvcml6b250YWw6IGZhbHNlLFxyXG4gICAgICAgIG9mZnNldDogMFxyXG4gICAgfVxyXG5cclxuICAgIFdheXBvaW50Lm9mZnNldEFsaWFzZXMgPSB7XHJcbiAgICAgICAgJ2JvdHRvbS1pbi12aWV3JzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuaW5uZXJIZWlnaHQoKSAtIHRoaXMuYWRhcHRlci5vdXRlckhlaWdodCgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAncmlnaHQtaW4tdmlldyc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmlubmVyV2lkdGgoKSAtIHRoaXMuYWRhcHRlci5vdXRlcldpZHRoKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LldheXBvaW50ID0gV2F5cG9pbnRcclxufSgpKTtcclxuKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnXHJcblxyXG4gICAgZnVuY3Rpb24gcmVxdWVzdEFuaW1hdGlvbkZyYW1lU2hpbShjYWxsYmFjaykge1xyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGtleUNvdW50ZXIgPSAwXHJcbiAgICB2YXIgY29udGV4dHMgPSB7fVxyXG4gICAgdmFyIFdheXBvaW50ID0gd2luZG93LldheXBvaW50XHJcbiAgICB2YXIgb2xkV2luZG93TG9hZCA9IHdpbmRvdy5vbmxvYWRcclxuXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvY29udGV4dCAqL1xyXG4gICAgZnVuY3Rpb24gQ29udGV4dChlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxyXG4gICAgICAgIHRoaXMuQWRhcHRlciA9IFdheXBvaW50LkFkYXB0ZXJcclxuICAgICAgICB0aGlzLmFkYXB0ZXIgPSBuZXcgdGhpcy5BZGFwdGVyKGVsZW1lbnQpXHJcbiAgICAgICAgdGhpcy5rZXkgPSAnd2F5cG9pbnQtY29udGV4dC0nICsga2V5Q291bnRlclxyXG4gICAgICAgIHRoaXMuZGlkU2Nyb2xsID0gZmFsc2VcclxuICAgICAgICB0aGlzLmRpZFJlc2l6ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5vbGRTY3JvbGwgPSB7XHJcbiAgICAgICAgICAgIHg6IHRoaXMuYWRhcHRlci5zY3JvbGxMZWZ0KCksXHJcbiAgICAgICAgICAgIHk6IHRoaXMuYWRhcHRlci5zY3JvbGxUb3AoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndheXBvaW50cyA9IHtcclxuICAgICAgICAgICAgdmVydGljYWw6IHt9LFxyXG4gICAgICAgICAgICBob3Jpem9udGFsOiB7fVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxlbWVudC53YXlwb2ludENvbnRleHRLZXkgPSB0aGlzLmtleVxyXG4gICAgICAgIGNvbnRleHRzW2VsZW1lbnQud2F5cG9pbnRDb250ZXh0S2V5XSA9IHRoaXNcclxuICAgICAgICBrZXlDb3VudGVyICs9IDFcclxuICAgICAgICBpZiAoIVdheXBvaW50LndpbmRvd0NvbnRleHQpIHtcclxuICAgICAgICAgICAgV2F5cG9pbnQud2luZG93Q29udGV4dCA9IHRydWVcclxuICAgICAgICAgICAgV2F5cG9pbnQud2luZG93Q29udGV4dCA9IG5ldyBDb250ZXh0KHdpbmRvdylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlVGhyb3R0bGVkU2Nyb2xsSGFuZGxlcigpXHJcbiAgICAgICAgdGhpcy5jcmVhdGVUaHJvdHRsZWRSZXNpemVIYW5kbGVyKClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbih3YXlwb2ludCkge1xyXG4gICAgICAgIHZhciBheGlzID0gd2F5cG9pbnQub3B0aW9ucy5ob3Jpem9udGFsID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJ1xyXG4gICAgICAgIHRoaXMud2F5cG9pbnRzW2F4aXNdW3dheXBvaW50LmtleV0gPSB3YXlwb2ludFxyXG4gICAgICAgIHRoaXMucmVmcmVzaCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuY2hlY2tFbXB0eSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBob3Jpem9udGFsRW1wdHkgPSB0aGlzLkFkYXB0ZXIuaXNFbXB0eU9iamVjdCh0aGlzLndheXBvaW50cy5ob3Jpem9udGFsKVxyXG4gICAgICAgIHZhciB2ZXJ0aWNhbEVtcHR5ID0gdGhpcy5BZGFwdGVyLmlzRW1wdHlPYmplY3QodGhpcy53YXlwb2ludHMudmVydGljYWwpXHJcbiAgICAgICAgdmFyIGlzV2luZG93ID0gdGhpcy5lbGVtZW50ID09IHRoaXMuZWxlbWVudC53aW5kb3dcclxuICAgICAgICBpZiAoaG9yaXpvbnRhbEVtcHR5ICYmIHZlcnRpY2FsRW1wdHkgJiYgIWlzV2luZG93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5vZmYoJy53YXlwb2ludHMnKVxyXG4gICAgICAgICAgICBkZWxldGUgY29udGV4dHNbdGhpcy5rZXldXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmNyZWF0ZVRocm90dGxlZFJlc2l6ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVzaXplSGFuZGxlcigpIHtcclxuICAgICAgICAgICAgc2VsZi5oYW5kbGVSZXNpemUoKVxyXG4gICAgICAgICAgICBzZWxmLmRpZFJlc2l6ZSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFkYXB0ZXIub24oJ3Jlc2l6ZS53YXlwb2ludHMnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCFzZWxmLmRpZFJlc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kaWRSZXNpemUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBXYXlwb2ludC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzaXplSGFuZGxlcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlVGhyb3R0bGVkU2Nyb2xsSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpc1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzY3JvbGxIYW5kbGVyKCkge1xyXG4gICAgICAgICAgICBzZWxmLmhhbmRsZVNjcm9sbCgpXHJcbiAgICAgICAgICAgIHNlbGYuZGlkU2Nyb2xsID0gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWRhcHRlci5vbignc2Nyb2xsLndheXBvaW50cycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGYuZGlkU2Nyb2xsIHx8IFdheXBvaW50LmlzVG91Y2gpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZGlkU2Nyb2xsID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgV2F5cG9pbnQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjcm9sbEhhbmRsZXIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmhhbmRsZVJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFdheXBvaW50LkNvbnRleHQucmVmcmVzaEFsbCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuaGFuZGxlU2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHRyaWdnZXJlZEdyb3VwcyA9IHt9XHJcbiAgICAgICAgdmFyIGF4ZXMgPSB7XHJcbiAgICAgICAgICAgIGhvcml6b250YWw6IHtcclxuICAgICAgICAgICAgICAgIG5ld1Njcm9sbDogdGhpcy5hZGFwdGVyLnNjcm9sbExlZnQoKSxcclxuICAgICAgICAgICAgICAgIG9sZFNjcm9sbDogdGhpcy5vbGRTY3JvbGwueCxcclxuICAgICAgICAgICAgICAgIGZvcndhcmQ6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrd2FyZDogJ2xlZnQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHZlcnRpY2FsOiB7XHJcbiAgICAgICAgICAgICAgICBuZXdTY3JvbGw6IHRoaXMuYWRhcHRlci5zY3JvbGxUb3AoKSxcclxuICAgICAgICAgICAgICAgIG9sZFNjcm9sbDogdGhpcy5vbGRTY3JvbGwueSxcclxuICAgICAgICAgICAgICAgIGZvcndhcmQ6ICdkb3duJyxcclxuICAgICAgICAgICAgICAgIGJhY2t3YXJkOiAndXAnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGF4aXNLZXkgaW4gYXhlcykge1xyXG4gICAgICAgICAgICB2YXIgYXhpcyA9IGF4ZXNbYXhpc0tleV1cclxuICAgICAgICAgICAgdmFyIGlzRm9yd2FyZCA9IGF4aXMubmV3U2Nyb2xsID4gYXhpcy5vbGRTY3JvbGxcclxuICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGlzRm9yd2FyZCA/IGF4aXMuZm9yd2FyZCA6IGF4aXMuYmFja3dhcmRcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIHdheXBvaW50S2V5IGluIHRoaXMud2F5cG9pbnRzW2F4aXNLZXldKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2F5cG9pbnQgPSB0aGlzLndheXBvaW50c1theGlzS2V5XVt3YXlwb2ludEtleV1cclxuICAgICAgICAgICAgICAgIGlmICh3YXlwb2ludC50cmlnZ2VyUG9pbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHdhc0JlZm9yZVRyaWdnZXJQb2ludCA9IGF4aXMub2xkU2Nyb2xsIDwgd2F5cG9pbnQudHJpZ2dlclBvaW50XHJcbiAgICAgICAgICAgICAgICB2YXIgbm93QWZ0ZXJUcmlnZ2VyUG9pbnQgPSBheGlzLm5ld1Njcm9sbCA+PSB3YXlwb2ludC50cmlnZ2VyUG9pbnRcclxuICAgICAgICAgICAgICAgIHZhciBjcm9zc2VkRm9yd2FyZCA9IHdhc0JlZm9yZVRyaWdnZXJQb2ludCAmJiBub3dBZnRlclRyaWdnZXJQb2ludFxyXG4gICAgICAgICAgICAgICAgdmFyIGNyb3NzZWRCYWNrd2FyZCA9ICF3YXNCZWZvcmVUcmlnZ2VyUG9pbnQgJiYgIW5vd0FmdGVyVHJpZ2dlclBvaW50XHJcbiAgICAgICAgICAgICAgICBpZiAoY3Jvc3NlZEZvcndhcmQgfHwgY3Jvc3NlZEJhY2t3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2F5cG9pbnQucXVldWVUcmlnZ2VyKGRpcmVjdGlvbilcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyZWRHcm91cHNbd2F5cG9pbnQuZ3JvdXAuaWRdID0gd2F5cG9pbnQuZ3JvdXBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgZ3JvdXBLZXkgaW4gdHJpZ2dlcmVkR3JvdXBzKSB7XHJcbiAgICAgICAgICAgIHRyaWdnZXJlZEdyb3Vwc1tncm91cEtleV0uZmx1c2hUcmlnZ2VycygpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9sZFNjcm9sbCA9IHtcclxuICAgICAgICAgICAgeDogYXhlcy5ob3Jpem9udGFsLm5ld1Njcm9sbCxcclxuICAgICAgICAgICAgeTogYXhlcy52ZXJ0aWNhbC5uZXdTY3JvbGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuaW5uZXJIZWlnaHQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvKmVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgPT0gdGhpcy5lbGVtZW50LndpbmRvdykge1xyXG4gICAgICAgICAgICByZXR1cm4gV2F5cG9pbnQudmlld3BvcnRIZWlnaHQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKmVzbGludC1lbmFibGUgZXFlcWVxICovXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5pbm5lckhlaWdodCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24od2F5cG9pbnQpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy53YXlwb2ludHNbd2F5cG9pbnQuYXhpc11bd2F5cG9pbnQua2V5XVxyXG4gICAgICAgIHRoaXMuY2hlY2tFbXB0eSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuaW5uZXJXaWR0aCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8qZXNsaW50LWRpc2FibGUgZXFlcWVxICovXHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCA9PSB0aGlzLmVsZW1lbnQud2luZG93KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBXYXlwb2ludC52aWV3cG9ydFdpZHRoKClcclxuICAgICAgICB9XHJcbiAgICAgICAgLyplc2xpbnQtZW5hYmxlIGVxZXFlcSAqL1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuaW5uZXJXaWR0aCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvY29udGV4dC1kZXN0cm95ICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGFsbFdheXBvaW50cyA9IFtdXHJcbiAgICAgICAgZm9yICh2YXIgYXhpcyBpbiB0aGlzLndheXBvaW50cykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB3YXlwb2ludEtleSBpbiB0aGlzLndheXBvaW50c1theGlzXSkge1xyXG4gICAgICAgICAgICAgICAgYWxsV2F5cG9pbnRzLnB1c2godGhpcy53YXlwb2ludHNbYXhpc11bd2F5cG9pbnRLZXldKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBlbmQgPSBhbGxXYXlwb2ludHMubGVuZ3RoOyBpIDwgZW5kOyBpKyspIHtcclxuICAgICAgICAgICAgYWxsV2F5cG9pbnRzW2ldLmRlc3Ryb3koKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9jb250ZXh0LXJlZnJlc2ggKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvKmVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xyXG4gICAgICAgIHZhciBpc1dpbmRvdyA9IHRoaXMuZWxlbWVudCA9PSB0aGlzLmVsZW1lbnQud2luZG93XHJcbiAgICAgICAgLyplc2xpbnQtZW5hYmxlIGVxZXFlcSAqL1xyXG4gICAgICAgIHZhciBjb250ZXh0T2Zmc2V0ID0gaXNXaW5kb3cgPyB1bmRlZmluZWQgOiB0aGlzLmFkYXB0ZXIub2Zmc2V0KClcclxuICAgICAgICB2YXIgdHJpZ2dlcmVkR3JvdXBzID0ge31cclxuICAgICAgICB2YXIgYXhlc1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbCgpXHJcbiAgICAgICAgYXhlcyA9IHtcclxuICAgICAgICAgICAgaG9yaXpvbnRhbDoge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dE9mZnNldDogaXNXaW5kb3cgPyAwIDogY29udGV4dE9mZnNldC5sZWZ0LFxyXG4gICAgICAgICAgICAgICAgY29udGV4dFNjcm9sbDogaXNXaW5kb3cgPyAwIDogdGhpcy5vbGRTY3JvbGwueCxcclxuICAgICAgICAgICAgICAgIGNvbnRleHREaW1lbnNpb246IHRoaXMuaW5uZXJXaWR0aCgpLFxyXG4gICAgICAgICAgICAgICAgb2xkU2Nyb2xsOiB0aGlzLm9sZFNjcm9sbC54LFxyXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgIGJhY2t3YXJkOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRQcm9wOiAnbGVmdCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdmVydGljYWw6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRPZmZzZXQ6IGlzV2luZG93ID8gMCA6IGNvbnRleHRPZmZzZXQudG9wLFxyXG4gICAgICAgICAgICAgICAgY29udGV4dFNjcm9sbDogaXNXaW5kb3cgPyAwIDogdGhpcy5vbGRTY3JvbGwueSxcclxuICAgICAgICAgICAgICAgIGNvbnRleHREaW1lbnNpb246IHRoaXMuaW5uZXJIZWlnaHQoKSxcclxuICAgICAgICAgICAgICAgIG9sZFNjcm9sbDogdGhpcy5vbGRTY3JvbGwueSxcclxuICAgICAgICAgICAgICAgIGZvcndhcmQ6ICdkb3duJyxcclxuICAgICAgICAgICAgICAgIGJhY2t3YXJkOiAndXAnLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0UHJvcDogJ3RvcCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgYXhpc0tleSBpbiBheGVzKSB7XHJcbiAgICAgICAgICAgIHZhciBheGlzID0gYXhlc1theGlzS2V5XVxyXG4gICAgICAgICAgICBmb3IgKHZhciB3YXlwb2ludEtleSBpbiB0aGlzLndheXBvaW50c1theGlzS2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdheXBvaW50ID0gdGhpcy53YXlwb2ludHNbYXhpc0tleV1bd2F5cG9pbnRLZXldXHJcbiAgICAgICAgICAgICAgICB2YXIgYWRqdXN0bWVudCA9IHdheXBvaW50Lm9wdGlvbnMub2Zmc2V0XHJcbiAgICAgICAgICAgICAgICB2YXIgb2xkVHJpZ2dlclBvaW50ID0gd2F5cG9pbnQudHJpZ2dlclBvaW50XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudE9mZnNldCA9IDBcclxuICAgICAgICAgICAgICAgIHZhciBmcmVzaFdheXBvaW50ID0gb2xkVHJpZ2dlclBvaW50ID09IG51bGxcclxuICAgICAgICAgICAgICAgIHZhciBjb250ZXh0TW9kaWZpZXIsIHdhc0JlZm9yZVNjcm9sbCwgbm93QWZ0ZXJTY3JvbGxcclxuICAgICAgICAgICAgICAgIHZhciB0cmlnZ2VyZWRCYWNrd2FyZCwgdHJpZ2dlcmVkRm9yd2FyZFxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh3YXlwb2ludC5lbGVtZW50ICE9PSB3YXlwb2ludC5lbGVtZW50LndpbmRvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPZmZzZXQgPSB3YXlwb2ludC5hZGFwdGVyLm9mZnNldCgpW2F4aXMub2Zmc2V0UHJvcF1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFkanVzdG1lbnQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGp1c3RtZW50ID0gYWRqdXN0bWVudC5hcHBseSh3YXlwb2ludClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFkanVzdG1lbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRqdXN0bWVudCA9IHBhcnNlRmxvYXQoYWRqdXN0bWVudClcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2F5cG9pbnQub3B0aW9ucy5vZmZzZXQuaW5kZXhPZignJScpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRqdXN0bWVudCA9IE1hdGguY2VpbChheGlzLmNvbnRleHREaW1lbnNpb24gKiBhZGp1c3RtZW50IC8gMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0TW9kaWZpZXIgPSBheGlzLmNvbnRleHRTY3JvbGwgLSBheGlzLmNvbnRleHRPZmZzZXRcclxuICAgICAgICAgICAgICAgIHdheXBvaW50LnRyaWdnZXJQb2ludCA9IE1hdGguZmxvb3IoZWxlbWVudE9mZnNldCArIGNvbnRleHRNb2RpZmllciAtIGFkanVzdG1lbnQpXHJcbiAgICAgICAgICAgICAgICB3YXNCZWZvcmVTY3JvbGwgPSBvbGRUcmlnZ2VyUG9pbnQgPCBheGlzLm9sZFNjcm9sbFxyXG4gICAgICAgICAgICAgICAgbm93QWZ0ZXJTY3JvbGwgPSB3YXlwb2ludC50cmlnZ2VyUG9pbnQgPj0gYXhpcy5vbGRTY3JvbGxcclxuICAgICAgICAgICAgICAgIHRyaWdnZXJlZEJhY2t3YXJkID0gd2FzQmVmb3JlU2Nyb2xsICYmIG5vd0FmdGVyU2Nyb2xsXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyZWRGb3J3YXJkID0gIXdhc0JlZm9yZVNjcm9sbCAmJiAhbm93QWZ0ZXJTY3JvbGxcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWZyZXNoV2F5cG9pbnQgJiYgdHJpZ2dlcmVkQmFja3dhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB3YXlwb2ludC5xdWV1ZVRyaWdnZXIoYXhpcy5iYWNrd2FyZClcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyZWRHcm91cHNbd2F5cG9pbnQuZ3JvdXAuaWRdID0gd2F5cG9pbnQuZ3JvdXBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWZyZXNoV2F5cG9pbnQgJiYgdHJpZ2dlcmVkRm9yd2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdheXBvaW50LnF1ZXVlVHJpZ2dlcihheGlzLmZvcndhcmQpXHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcmVkR3JvdXBzW3dheXBvaW50Lmdyb3VwLmlkXSA9IHdheXBvaW50Lmdyb3VwXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZyZXNoV2F5cG9pbnQgJiYgYXhpcy5vbGRTY3JvbGwgPj0gd2F5cG9pbnQudHJpZ2dlclBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2F5cG9pbnQucXVldWVUcmlnZ2VyKGF4aXMuZm9yd2FyZClcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyZWRHcm91cHNbd2F5cG9pbnQuZ3JvdXAuaWRdID0gd2F5cG9pbnQuZ3JvdXBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgV2F5cG9pbnQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBncm91cEtleSBpbiB0cmlnZ2VyZWRHcm91cHMpIHtcclxuICAgICAgICAgICAgICAgIHRyaWdnZXJlZEdyb3Vwc1tncm91cEtleV0uZmx1c2hUcmlnZ2VycygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQuZmluZE9yQ3JlYXRlQnlFbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBDb250ZXh0LmZpbmRCeUVsZW1lbnQoZWxlbWVudCkgfHwgbmV3IENvbnRleHQoZWxlbWVudClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LnJlZnJlc2hBbGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBmb3IgKHZhciBjb250ZXh0SWQgaW4gY29udGV4dHMpIHtcclxuICAgICAgICAgICAgY29udGV4dHNbY29udGV4dElkXS5yZWZyZXNoKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvY29udGV4dC1maW5kLWJ5LWVsZW1lbnQgKi9cclxuICAgIENvbnRleHQuZmluZEJ5RWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gY29udGV4dHNbZWxlbWVudC53YXlwb2ludENvbnRleHRLZXldXHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChvbGRXaW5kb3dMb2FkKSB7XHJcbiAgICAgICAgICAgIG9sZFdpbmRvd0xvYWQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBDb250ZXh0LnJlZnJlc2hBbGwoKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBXYXlwb2ludC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciByZXF1ZXN0Rm4gPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWVTaGltXHJcbiAgICAgICAgcmVxdWVzdEZuLmNhbGwod2luZG93LCBjYWxsYmFjaylcclxuICAgIH1cclxuICAgIFdheXBvaW50LkNvbnRleHQgPSBDb250ZXh0XHJcbn0oKSk7XHJcbihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0J1xyXG5cclxuICAgIGZ1bmN0aW9uIGJ5VHJpZ2dlclBvaW50KGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYS50cmlnZ2VyUG9pbnQgLSBiLnRyaWdnZXJQb2ludFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJ5UmV2ZXJzZVRyaWdnZXJQb2ludChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGIudHJpZ2dlclBvaW50IC0gYS50cmlnZ2VyUG9pbnRcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ3JvdXBzID0ge1xyXG4gICAgICAgIHZlcnRpY2FsOiB7fSxcclxuICAgICAgICBob3Jpem9udGFsOiB7fVxyXG4gICAgfVxyXG4gICAgdmFyIFdheXBvaW50ID0gd2luZG93LldheXBvaW50XHJcblxyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2dyb3VwICovXHJcbiAgICBmdW5jdGlvbiBHcm91cChvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lXHJcbiAgICAgICAgdGhpcy5heGlzID0gb3B0aW9ucy5heGlzXHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMubmFtZSArICctJyArIHRoaXMuYXhpc1xyXG4gICAgICAgIHRoaXMud2F5cG9pbnRzID0gW11cclxuICAgICAgICB0aGlzLmNsZWFyVHJpZ2dlclF1ZXVlcygpXHJcbiAgICAgICAgZ3JvdXBzW3RoaXMuYXhpc11bdGhpcy5uYW1lXSA9IHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBHcm91cC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24od2F5cG9pbnQpIHtcclxuICAgICAgICB0aGlzLndheXBvaW50cy5wdXNoKHdheXBvaW50KVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIEdyb3VwLnByb3RvdHlwZS5jbGVhclRyaWdnZXJRdWV1ZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXJRdWV1ZXMgPSB7XHJcbiAgICAgICAgICAgIHVwOiBbXSxcclxuICAgICAgICAgICAgZG93bjogW10sXHJcbiAgICAgICAgICAgIGxlZnQ6IFtdLFxyXG4gICAgICAgICAgICByaWdodDogW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLmZsdXNoVHJpZ2dlcnMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBmb3IgKHZhciBkaXJlY3Rpb24gaW4gdGhpcy50cmlnZ2VyUXVldWVzKSB7XHJcbiAgICAgICAgICAgIHZhciB3YXlwb2ludHMgPSB0aGlzLnRyaWdnZXJRdWV1ZXNbZGlyZWN0aW9uXVxyXG4gICAgICAgICAgICB2YXIgcmV2ZXJzZSA9IGRpcmVjdGlvbiA9PT0gJ3VwJyB8fCBkaXJlY3Rpb24gPT09ICdsZWZ0J1xyXG4gICAgICAgICAgICB3YXlwb2ludHMuc29ydChyZXZlcnNlID8gYnlSZXZlcnNlVHJpZ2dlclBvaW50IDogYnlUcmlnZ2VyUG9pbnQpXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBlbmQgPSB3YXlwb2ludHMubGVuZ3RoOyBpIDwgZW5kOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIHZhciB3YXlwb2ludCA9IHdheXBvaW50c1tpXVxyXG4gICAgICAgICAgICAgICAgaWYgKHdheXBvaW50Lm9wdGlvbnMuY29udGludW91cyB8fCBpID09PSB3YXlwb2ludHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdheXBvaW50LnRyaWdnZXIoW2RpcmVjdGlvbl0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbGVhclRyaWdnZXJRdWV1ZXMoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIEdyb3VwLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24od2F5cG9pbnQpIHtcclxuICAgICAgICB0aGlzLndheXBvaW50cy5zb3J0KGJ5VHJpZ2dlclBvaW50KVxyXG4gICAgICAgIHZhciBpbmRleCA9IFdheXBvaW50LkFkYXB0ZXIuaW5BcnJheSh3YXlwb2ludCwgdGhpcy53YXlwb2ludHMpXHJcbiAgICAgICAgdmFyIGlzTGFzdCA9IGluZGV4ID09PSB0aGlzLndheXBvaW50cy5sZW5ndGggLSAxXHJcbiAgICAgICAgcmV0dXJuIGlzTGFzdCA/IG51bGwgOiB0aGlzLndheXBvaW50c1tpbmRleCArIDFdXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLnByZXZpb3VzID0gZnVuY3Rpb24od2F5cG9pbnQpIHtcclxuICAgICAgICB0aGlzLndheXBvaW50cy5zb3J0KGJ5VHJpZ2dlclBvaW50KVxyXG4gICAgICAgIHZhciBpbmRleCA9IFdheXBvaW50LkFkYXB0ZXIuaW5BcnJheSh3YXlwb2ludCwgdGhpcy53YXlwb2ludHMpXHJcbiAgICAgICAgcmV0dXJuIGluZGV4ID8gdGhpcy53YXlwb2ludHNbaW5kZXggLSAxXSA6IG51bGxcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBHcm91cC5wcm90b3R5cGUucXVldWVUcmlnZ2VyID0gZnVuY3Rpb24od2F5cG9pbnQsIGRpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlclF1ZXVlc1tkaXJlY3Rpb25dLnB1c2god2F5cG9pbnQpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKHdheXBvaW50KSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gV2F5cG9pbnQuQWRhcHRlci5pbkFycmF5KHdheXBvaW50LCB0aGlzLndheXBvaW50cylcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLndheXBvaW50cy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2ZpcnN0ICovXHJcbiAgICBHcm91cC5wcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YXlwb2ludHNbMF1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9sYXN0ICovXHJcbiAgICBHcm91cC5wcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndheXBvaW50c1t0aGlzLndheXBvaW50cy5sZW5ndGggLSAxXVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIEdyb3VwLmZpbmRPckNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gZ3JvdXBzW29wdGlvbnMuYXhpc11bb3B0aW9ucy5uYW1lXSB8fCBuZXcgR3JvdXAob3B0aW9ucylcclxuICAgIH1cclxuXHJcbiAgICBXYXlwb2ludC5Hcm91cCA9IEdyb3VwXHJcbn0oKSk7XHJcbihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0J1xyXG5cclxuICAgIHZhciBXYXlwb2ludCA9IHdpbmRvdy5XYXlwb2ludFxyXG5cclxuICAgIGZ1bmN0aW9uIGlzV2luZG93KGVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudCA9PT0gZWxlbWVudC53aW5kb3dcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRXaW5kb3coZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChpc1dpbmRvdyhlbGVtZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbWVudC5kZWZhdWx0Vmlld1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIE5vRnJhbWV3b3JrQWRhcHRlcihlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSB7fVxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUuaW5uZXJIZWlnaHQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgaXNXaW4gPSBpc1dpbmRvdyh0aGlzLmVsZW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIGlzV2luID8gdGhpcy5lbGVtZW50LmlubmVySGVpZ2h0IDogdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodFxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUuaW5uZXJXaWR0aCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBpc1dpbiA9IGlzV2luZG93KHRoaXMuZWxlbWVudClcclxuICAgICAgICByZXR1cm4gaXNXaW4gPyB0aGlzLmVsZW1lbnQuaW5uZXJXaWR0aCA6IHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aFxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgICAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoZWxlbWVudCwgbGlzdGVuZXJzLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBlbmQgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV1cclxuICAgICAgICAgICAgICAgIGlmICghaGFuZGxlciB8fCBoYW5kbGVyID09PSBsaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsaXN0ZW5lcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGV2ZW50UGFydHMgPSBldmVudC5zcGxpdCgnLicpXHJcbiAgICAgICAgdmFyIGV2ZW50VHlwZSA9IGV2ZW50UGFydHNbMF1cclxuICAgICAgICB2YXIgbmFtZXNwYWNlID0gZXZlbnRQYXJ0c1sxXVxyXG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50XHJcblxyXG4gICAgICAgIGlmIChuYW1lc3BhY2UgJiYgdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdICYmIGV2ZW50VHlwZSkge1xyXG4gICAgICAgICAgICByZW1vdmVMaXN0ZW5lcnMoZWxlbWVudCwgdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdW2V2ZW50VHlwZV0sIGhhbmRsZXIpXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXVtldmVudFR5cGVdID0gW11cclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50VHlwZSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBucyBpbiB0aGlzLmhhbmRsZXJzKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lcnMoZWxlbWVudCwgdGhpcy5oYW5kbGVyc1tuc11bZXZlbnRUeXBlXSB8fCBbXSwgaGFuZGxlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlcnNbbnNdW2V2ZW50VHlwZV0gPSBbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lc3BhY2UgJiYgdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHR5cGUgaW4gdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lcnMoZWxlbWVudCwgdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdW3R5cGVdLCBoYW5kbGVyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXSA9IHt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIEFkYXB0ZWQgZnJvbSBqUXVlcnkgMS54IG9mZnNldCgpICovXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLm9mZnNldCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcclxuICAgICAgICB2YXIgd2luID0gZ2V0V2luZG93KHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50KVxyXG4gICAgICAgIHZhciByZWN0ID0ge1xyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XHJcbiAgICAgICAgICAgIHJlY3QgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRvcDogcmVjdC50b3AgKyB3aW4ucGFnZVlPZmZzZXQgLSBkb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wLFxyXG4gICAgICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQgLSBkb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgICAgICB2YXIgZXZlbnRQYXJ0cyA9IGV2ZW50LnNwbGl0KCcuJylcclxuICAgICAgICB2YXIgZXZlbnRUeXBlID0gZXZlbnRQYXJ0c1swXVxyXG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSBldmVudFBhcnRzWzFdIHx8ICdfX2RlZmF1bHQnXHJcbiAgICAgICAgdmFyIG5zSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV0gPSB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV0gfHwge31cclxuICAgICAgICB2YXIgbnNUeXBlTGlzdCA9IG5zSGFuZGxlcnNbZXZlbnRUeXBlXSA9IG5zSGFuZGxlcnNbZXZlbnRUeXBlXSB8fCBbXVxyXG5cclxuICAgICAgICBuc1R5cGVMaXN0LnB1c2goaGFuZGxlcilcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIpXHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5vdXRlckhlaWdodCA9IGZ1bmN0aW9uKGluY2x1ZGVNYXJnaW4pIHtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5pbm5lckhlaWdodCgpXHJcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGVcclxuXHJcbiAgICAgICAgaWYgKGluY2x1ZGVNYXJnaW4gJiYgIWlzV2luZG93KHRoaXMuZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClcclxuICAgICAgICAgICAgaGVpZ2h0ICs9IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUubWFyZ2luVG9wLCAxMClcclxuICAgICAgICAgICAgaGVpZ2h0ICs9IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUubWFyZ2luQm90dG9tLCAxMClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBoZWlnaHRcclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLm91dGVyV2lkdGggPSBmdW5jdGlvbihpbmNsdWRlTWFyZ2luKSB7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5pbm5lcldpZHRoKClcclxuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZVxyXG5cclxuICAgICAgICBpZiAoaW5jbHVkZU1hcmdpbiAmJiAhaXNXaW5kb3codGhpcy5lbGVtZW50KSkge1xyXG4gICAgICAgICAgICBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVxyXG4gICAgICAgICAgICB3aWR0aCArPSBwYXJzZUludChjb21wdXRlZFN0eWxlLm1hcmdpbkxlZnQsIDEwKVxyXG4gICAgICAgICAgICB3aWR0aCArPSBwYXJzZUludChjb21wdXRlZFN0eWxlLm1hcmdpblJpZ2h0LCAxMClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB3aWR0aFxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUuc2Nyb2xsTGVmdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB3aW4gPSBnZXRXaW5kb3codGhpcy5lbGVtZW50KVxyXG4gICAgICAgIHJldHVybiB3aW4gPyB3aW4ucGFnZVhPZmZzZXQgOiB0aGlzLmVsZW1lbnQuc2Nyb2xsTGVmdFxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUuc2Nyb2xsVG9wID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHdpbiA9IGdldFdpbmRvdyh0aGlzLmVsZW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIHdpbiA/IHdpbi5wYWdlWU9mZnNldCA6IHRoaXMuZWxlbWVudC5zY3JvbGxUb3BcclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIuZXh0ZW5kID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1lcmdlKHRhcmdldCwgb2JqKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IG9ialtrZXldXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMSwgZW5kID0gYXJncy5sZW5ndGg7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICAgICAgICBtZXJnZShhcmdzWzBdLCBhcmdzW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJnc1swXVxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5pbkFycmF5ID0gZnVuY3Rpb24oZWxlbWVudCwgYXJyYXksIGkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkgPT0gbnVsbCA/IC0xIDogYXJyYXkuaW5kZXhPZihlbGVtZW50LCBpKVxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5pc0VtcHR5T2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiAwICovXHJcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBvYmopIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgV2F5cG9pbnQuYWRhcHRlcnMucHVzaCh7XHJcbiAgICAgICAgbmFtZTogJ25vZnJhbWV3b3JrJyxcclxuICAgICAgICBBZGFwdGVyOiBOb0ZyYW1ld29ya0FkYXB0ZXJcclxuICAgIH0pXHJcbiAgICBXYXlwb2ludC5BZGFwdGVyID0gTm9GcmFtZXdvcmtBZGFwdGVyXHJcbn0oKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=