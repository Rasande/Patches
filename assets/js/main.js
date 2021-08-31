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
      var main = document.querySelector('#site-content');
      var header = document.querySelector('.site-header.is-fixed');

      if (header) {
        var headerHeight = header.offsetHeight;
        main.style.paddingTop = headerHeight + 'px';
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL2FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2R1bGVzL2Zvcm1zLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZHVsZXMvbW9kYWxNZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZHVsZXMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZHVsZXMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy92ZW5kb3IvYW5pbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdmVuZG9yL25vZnJhbWV3b3JrLndheXBvaW50cy5qcyJdLCJuYW1lcyI6WyJtb2RhbE1lbnUiLCJNb2RhbE1lbnUiLCJhbmltYXRpb24iLCJBbmltYXRpb25zIiwic2VhcmNoIiwiU2VhcmNoIiwiZm9ybXMiLCJGb3JtcyIsIm9kZEV2ZW5BbmltYXRpb24iLCJvZGRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZXZlbnMiLCJmb3JFYWNoIiwiZWxlbWVudCIsIldheXBvaW50IiwiaGFuZGxlciIsImFuaW1lIiwidGFyZ2V0cyIsIm9wYWNpdHkiLCJ0cmFuc2xhdGVZIiwiZGVsYXkiLCJkdXJhdGlvbiIsImVhc2luZyIsImRlc3Ryb3kiLCJvZmZzZXQiLCJ0ZXh0YXJlYSIsInNlbGVjdCIsImN1c3RvbVNlbGVjdERyb3Bkb3duIiwiZXZlbnRzIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0VGV4dGFyZWFIZWlnaHQiLCJ0YXJnZXQiLCJzdHlsZSIsImhlaWdodCIsIlV0aWxpdHkiLCJ0ZXh0YXJlYUhlaWdodCIsInZhbHVlIiwiaGVhZGVyIiwicXVlcnlTZWxlY3RvciIsInRvZ2dsZU1lbnUiLCJtZW51Iiwic3VibWVudUJ0biIsImlzTWVudU9wZW4iLCJtYWluUGFkZGluZyIsInRyaWdnZXJNZW51IiwidG9nZ2xlU3ViTWVudSIsImtleVByZXNzIiwid2luZG93IiwiY2hhbmdlSGVhZGVyIiwiY3VycmVudFRhcmdldCIsImdldEF0dHJpYnV0ZSIsInRhcmdldE1lbnUiLCJvdGhlck1lbnVzIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJjbG9zZU1lbnUiLCJvcGVuTWVudSIsImlkIiwibWVudUJ0biIsImJvZHlTY3JvbGxMb2NrIiwiYWRkIiwic2V0QXR0cmlidXRlIiwiYm9keVNjcm9sbFVubG9jayIsInJlbW92ZSIsImJ0biIsInBhcmVudE5vZGUiLCJjbGllbnRIZWlnaHQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXR0cmlidXRlIiwib25jZSIsImtleUNvZGUiLCJzY3JvbGxQb3MiLCJzY3JvbGxZIiwibWFpbiIsImhlYWRlckhlaWdodCIsIm9mZnNldEhlaWdodCIsInBhZGRpbmdUb3AiLCJzZWFyY2hNb2RhbCIsInNlYXJjaEJ1dHRvbiIsInNlYXJjaEZpZWxkIiwic2VhcmNoT3ZlcmxheSIsImlzU2VhcmNoT3BlbiIsInRvZ2dsZU1vZGFsIiwiY2xvc2VNb2RhbCIsIm9wZW5Nb2RhbCIsImZvY3VzIiwiYm9keSIsInBvc2l0aW9uIiwidG9wIiwiYm9keVN0eWxlIiwic2Nyb2xsVG8iLCJwYXJzZUludCIsIm51bWJlck9mTGluZUJyZWFrcyIsIm1hdGNoIiwibGVuZ3RoIiwibmV3SGVpZ2h0IiwiY2hlY2siLCJhIiwidGVzdCIsInN1YnN0ciIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInZlbmRvciIsIm9wZXJhIiwiZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MiLCJ1cGRhdGUiLCJiZWdpbiIsImxvb3BCZWdpbiIsImNoYW5nZUJlZ2luIiwiY2hhbmdlIiwiY2hhbmdlQ29tcGxldGUiLCJsb29wQ29tcGxldGUiLCJjb21wbGV0ZSIsImxvb3AiLCJkaXJlY3Rpb24iLCJhdXRvcGxheSIsInRpbWVsaW5lT2Zmc2V0IiwiZGVmYXVsdFR3ZWVuU2V0dGluZ3MiLCJlbmREZWxheSIsInJvdW5kIiwidmFsaWRUcmFuc2Zvcm1zIiwiY2FjaGUiLCJDU1MiLCJzcHJpbmdzIiwibWluTWF4IiwidmFsIiwibWluIiwibWF4IiwiTWF0aCIsInN0cmluZ0NvbnRhaW5zIiwic3RyIiwidGV4dCIsImluZGV4T2YiLCJhcHBseUFyZ3VtZW50cyIsImZ1bmMiLCJhcmdzIiwiYXBwbHkiLCJpcyIsImFyciIsIkFycmF5IiwiaXNBcnJheSIsIm9iaiIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInB0aCIsImhhc093blByb3BlcnR5Iiwic3ZnIiwiU1ZHRWxlbWVudCIsImlucCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJkb20iLCJub2RlVHlwZSIsImZuYyIsInVuZCIsIm5pbCIsImhleCIsInJnYiIsImhzbCIsImNvbCIsImtleSIsInBhcnNlRWFzaW5nUGFyYW1ldGVycyIsInN0cmluZyIsImV4ZWMiLCJzcGxpdCIsIm1hcCIsInAiLCJwYXJzZUZsb2F0Iiwic3ByaW5nIiwicGFyYW1zIiwibWFzcyIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJ2ZWxvY2l0eSIsIncwIiwic3FydCIsInpldGEiLCJ3ZCIsImIiLCJzb2x2ZXIiLCJ0IiwicHJvZ3Jlc3MiLCJleHAiLCJjb3MiLCJzaW4iLCJnZXREdXJhdGlvbiIsImNhY2hlZCIsImZyYW1lIiwiZWxhcHNlZCIsInJlc3QiLCJzdGVwcyIsImNlaWwiLCJiZXppZXIiLCJrU3BsaW5lVGFibGVTaXplIiwia1NhbXBsZVN0ZXBTaXplIiwiQSIsImFBMSIsImFBMiIsIkIiLCJDIiwiY2FsY0JlemllciIsImFUIiwiZ2V0U2xvcGUiLCJiaW5hcnlTdWJkaXZpZGUiLCJhWCIsImFBIiwiYUIiLCJtWDEiLCJtWDIiLCJjdXJyZW50WCIsImN1cnJlbnRUIiwiaSIsImFicyIsIm5ld3RvblJhcGhzb25JdGVyYXRlIiwiYUd1ZXNzVCIsImN1cnJlbnRTbG9wZSIsIm1ZMSIsIm1ZMiIsInNhbXBsZVZhbHVlcyIsIkZsb2F0MzJBcnJheSIsImdldFRGb3JYIiwiaW50ZXJ2YWxTdGFydCIsImN1cnJlbnRTYW1wbGUiLCJsYXN0U2FtcGxlIiwiZGlzdCIsImd1ZXNzRm9yVCIsImluaXRpYWxTbG9wZSIsIngiLCJwZW5uZXIiLCJlYXNlcyIsImxpbmVhciIsImZ1bmN0aW9uRWFzaW5ncyIsIlNpbmUiLCJQSSIsIkNpcmMiLCJCYWNrIiwiQm91bmNlIiwicG93MiIsInBvdyIsIkVsYXN0aWMiLCJhbXBsaXR1ZGUiLCJwZXJpb2QiLCJhc2luIiwiYmFzZUVhc2luZ3MiLCJuYW1lIiwia2V5cyIsImVhc2VJbiIsInBhcnNlRWFzaW5ncyIsImVhc2UiLCJzZWxlY3RTdHJpbmciLCJub2RlcyIsImZpbHRlckFycmF5IiwiY2FsbGJhY2siLCJsZW4iLCJ0aGlzQXJnIiwiYXJndW1lbnRzIiwicmVzdWx0IiwicHVzaCIsImZsYXR0ZW5BcnJheSIsInJlZHVjZSIsImNvbmNhdCIsInRvQXJyYXkiLCJvIiwiTm9kZUxpc3QiLCJIVE1MQ29sbGVjdGlvbiIsInNsaWNlIiwiYXJyYXlDb250YWlucyIsInNvbWUiLCJjbG9uZU9iamVjdCIsImNsb25lIiwicmVwbGFjZU9iamVjdFByb3BzIiwibzEiLCJvMiIsIm1lcmdlT2JqZWN0cyIsInJnYlRvUmdiYSIsInJnYlZhbHVlIiwiaGV4VG9SZ2JhIiwiaGV4VmFsdWUiLCJyZ3giLCJyZXBsYWNlIiwibSIsInIiLCJnIiwiaHNsVG9SZ2JhIiwiaHNsVmFsdWUiLCJoIiwicyIsImwiLCJodWUycmdiIiwicSIsImNvbG9yVG9SZ2IiLCJnZXRVbml0IiwiZ2V0VHJhbnNmb3JtVW5pdCIsInByb3BOYW1lIiwiZ2V0RnVuY3Rpb25WYWx1ZSIsImFuaW1hdGFibGUiLCJ0b3RhbCIsInByb3AiLCJjb252ZXJ0UHhUb1VuaXQiLCJ1bml0IiwidmFsdWVVbml0IiwiYmFzZWxpbmUiLCJ0ZW1wRWwiLCJjcmVhdGVFbGVtZW50IiwidGFnTmFtZSIsInBhcmVudEVsIiwiYXBwZW5kQ2hpbGQiLCJ3aWR0aCIsImZhY3RvciIsIm9mZnNldFdpZHRoIiwicmVtb3ZlQ2hpbGQiLCJjb252ZXJ0ZWRVbml0IiwiZ2V0Q1NTVmFsdWUiLCJ1cHBlcmNhc2VQcm9wTmFtZSIsInRvTG93ZXJDYXNlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJnZXRBbmltYXRpb25UeXBlIiwiZ2V0RWxlbWVudFRyYW5zZm9ybXMiLCJ0cmFuc2Zvcm0iLCJyZWciLCJ0cmFuc2Zvcm1zIiwiTWFwIiwic2V0IiwiZ2V0VHJhbnNmb3JtVmFsdWUiLCJkZWZhdWx0VmFsIiwiZ2V0IiwibGlzdCIsImdldE9yaWdpbmFsVGFyZ2V0VmFsdWUiLCJnZXRSZWxhdGl2ZVZhbHVlIiwidG8iLCJmcm9tIiwib3BlcmF0b3IiLCJ1IiwieSIsInZhbGlkYXRlVmFsdWUiLCJvcmlnaW5hbFVuaXQiLCJ1bml0TGVzcyIsImdldERpc3RhbmNlIiwicDEiLCJwMiIsImdldENpcmNsZUxlbmd0aCIsImdldFJlY3RMZW5ndGgiLCJnZXRMaW5lTGVuZ3RoIiwiZ2V0UG9seWxpbmVMZW5ndGgiLCJwb2ludHMiLCJ0b3RhbExlbmd0aCIsInByZXZpb3VzUG9zIiwibnVtYmVyT2ZJdGVtcyIsImN1cnJlbnRQb3MiLCJnZXRJdGVtIiwiZ2V0UG9seWdvbkxlbmd0aCIsImdldFRvdGFsTGVuZ3RoIiwic2V0RGFzaG9mZnNldCIsInBhdGhMZW5ndGgiLCJnZXRQYXJlbnRTdmdFbCIsImdldFBhcmVudFN2ZyIsInBhdGhFbCIsInN2Z0RhdGEiLCJwYXJlbnRTdmdFbCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ2aWV3Qm94QXR0ciIsInZpZXdCb3giLCJ3IiwidlciLCJ2SCIsImdldFBhdGgiLCJwYXRoIiwicGVyY2VudCIsInByb3BlcnR5IiwiZ2V0UGF0aFByb2dyZXNzIiwiaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHIiwicG9pbnQiLCJnZXRQb2ludEF0TGVuZ3RoIiwicDAiLCJzY2FsZVgiLCJzY2FsZVkiLCJhdGFuMiIsImRlY29tcG9zZVZhbHVlIiwib3JpZ2luYWwiLCJudW1iZXJzIiwiTnVtYmVyIiwic3RyaW5ncyIsInBhcnNlVGFyZ2V0cyIsInRhcmdldHNBcnJheSIsIml0ZW0iLCJwb3MiLCJzZWxmIiwiZ2V0QW5pbWF0YWJsZXMiLCJwYXJzZWQiLCJub3JtYWxpemVQcm9wZXJ0eVR3ZWVucyIsInR3ZWVuU2V0dGluZ3MiLCJzZXR0aW5ncyIsImlzRnJvbVRvIiwicHJvcEFycmF5IiwidiIsImsiLCJmbGF0dGVuS2V5ZnJhbWVzIiwia2V5ZnJhbWVzIiwicHJvcGVydHlOYW1lcyIsInByb3BlcnRpZXMiLCJuZXdLZXkiLCJnZXRQcm9wZXJ0aWVzIiwidHdlZW5zIiwibm9ybWFsaXplVHdlZW5WYWx1ZXMiLCJ0d2VlbiIsIm5vcm1hbGl6ZVR3ZWVucyIsInByZXZpb3VzVHdlZW4iLCJ0d2VlblZhbHVlIiwidG9Vbml0Iiwib3JpZ2luYWxWYWx1ZSIsInByZXZpb3VzVmFsdWUiLCJmcm9tVW5pdCIsInN0YXJ0IiwiZW5kIiwiaXNQYXRoIiwiaXNDb2xvciIsInNldFByb2dyZXNzVmFsdWUiLCJjc3MiLCJhdHRyaWJ1dGUiLCJvYmplY3QiLCJtYW51YWwiLCJsYXN0Iiwic2V0VGFyZ2V0c1ZhbHVlIiwiYW5pbWF0YWJsZXMiLCJhbmltVHlwZSIsImNyZWF0ZUFuaW1hdGlvbiIsImxhc3RUd2VlbiIsInR5cGUiLCJnZXRBbmltYXRpb25zIiwiZ2V0SW5zdGFuY2VUaW1pbmdzIiwiYW5pbWF0aW9ucyIsImFuaW1MZW5ndGgiLCJnZXRUbE9mZnNldCIsImFuaW0iLCJ0aW1pbmdzIiwiaW5zdGFuY2VJRCIsImNyZWF0ZU5ld0luc3RhbmNlIiwiaW5zdGFuY2VTZXR0aW5ncyIsImNoaWxkcmVuIiwiYWN0aXZlSW5zdGFuY2VzIiwiZW5naW5lIiwicmFmIiwicGxheSIsImlzRG9jdW1lbnRIaWRkZW4iLCJzdXNwZW5kV2hlbkRvY3VtZW50SGlkZGVuIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic3RlcCIsImFjdGl2ZUluc3RhbmNlc0xlbmd0aCIsImFjdGl2ZUluc3RhbmNlIiwicGF1c2VkIiwidGljayIsInNwbGljZSIsInVuZGVmaW5lZCIsImhhbmRsZVZpc2liaWxpdHlDaGFuZ2UiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImluc3RhbmNlIiwiX29uRG9jdW1lbnRWaXNpYmlsaXR5IiwiaGlkZGVuIiwic3RhcnRUaW1lIiwibGFzdFRpbWUiLCJub3ciLCJjaGlsZHJlbkxlbmd0aCIsInJlc29sdmUiLCJtYWtlUHJvbWlzZSIsInByb21pc2UiLCJQcm9taXNlIiwiX3Jlc29sdmUiLCJmaW5pc2hlZCIsInRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uIiwicmV2ZXJzZWQiLCJjaGlsZCIsImFkanVzdFRpbWUiLCJ0aW1lIiwicmVzZXRUaW1lIiwiY3VycmVudFRpbWUiLCJzcGVlZCIsInNlZWtDaGlsZCIsInNlZWsiLCJzeW5jSW5zdGFuY2VDaGlsZHJlbiIsInJldmVyc2VQbGF5YmFjayIsImkkMSIsInNldEFuaW1hdGlvbnNQcm9ncmVzcyIsImluc1RpbWUiLCJhbmltYXRpb25zTGVuZ3RoIiwidHdlZW5MZW5ndGgiLCJlYXNlZCIsImlzTmFOIiwidG9OdW1iZXJzTGVuZ3RoIiwibiIsInRvTnVtYmVyIiwiZnJvbU51bWJlciIsInN0cmluZ3NMZW5ndGgiLCJuJDEiLCJjdXJyZW50VmFsdWUiLCJzZXRDYWxsYmFjayIsImNiIiwicGFzc1Rocm91Z2giLCJjb3VudEl0ZXJhdGlvbiIsInJlbWFpbmluZyIsInNldEluc3RhbmNlUHJvZ3Jlc3MiLCJlbmdpbmVUaW1lIiwiaW5zRHVyYXRpb24iLCJpbnNEZWxheSIsImluc0VuZERlbGF5IiwiYmVnYW4iLCJsb29wQmVnYW4iLCJjaGFuZ2VCZWdhbiIsImNoYW5nZUNvbXBsZXRlZCIsImNvbXBsZXRlZCIsInJlc2V0IiwicGF1c2UiLCJyZXZlcnNlIiwicmVzdGFydCIsInJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UiLCJyZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnMiLCJjIiwiY2hpbGRBbmltYXRpb25zIiwicmVtb3ZlVGFyZ2V0c0Zyb21BY3RpdmVJbnN0YW5jZXMiLCJzdGFnZ2VyIiwiZ3JpZCIsImF4aXMiLCJmcm9tSW5kZXgiLCJmcm9tRmlyc3QiLCJmcm9tQ2VudGVyIiwiZnJvbUxhc3QiLCJpc1JhbmdlIiwidmFsMSIsInZhbDIiLCJ2YWx1ZXMiLCJtYXhWYWx1ZSIsImluZGV4IiwiZnJvbVgiLCJmcm9tWSIsImZsb29yIiwidG9YIiwidG9ZIiwiZGlzdGFuY2VYIiwiZGlzdGFuY2VZIiwic3BhY2luZyIsInRpbWVsaW5lIiwidGwiLCJpbnN0YW5jZVBhcmFtcyIsInRsSW5kZXgiLCJpbnMiLCJpbnNQYXJhbXMiLCJ0bER1cmF0aW9uIiwidmVyc2lvbiIsInJ1bm5pbmciLCJjb252ZXJ0UHgiLCJyYW5kb20iLCJtb2R1bGUiLCJleHBvcnRzIiwia2V5Q291bnRlciIsImFsbFdheXBvaW50cyIsIm9wdGlvbnMiLCJFcnJvciIsIkFkYXB0ZXIiLCJleHRlbmQiLCJkZWZhdWx0cyIsImFkYXB0ZXIiLCJob3Jpem9udGFsIiwiZW5hYmxlZCIsInRyaWdnZXJQb2ludCIsImdyb3VwIiwiR3JvdXAiLCJmaW5kT3JDcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsImZpbmRPckNyZWF0ZUJ5RWxlbWVudCIsIm9mZnNldEFsaWFzZXMiLCJxdWV1ZVRyaWdnZXIiLCJ0cmlnZ2VyIiwiZGlzYWJsZSIsImVuYWJsZSIsInJlZnJlc2giLCJuZXh0IiwicHJldmlvdXMiLCJpbnZva2VBbGwiLCJtZXRob2QiLCJhbGxXYXlwb2ludHNBcnJheSIsIndheXBvaW50S2V5IiwiZGVzdHJveUFsbCIsImRpc2FibGVBbGwiLCJlbmFibGVBbGwiLCJyZWZyZXNoQWxsIiwidmlld3BvcnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsInZpZXdwb3J0V2lkdGgiLCJjbGllbnRXaWR0aCIsImFkYXB0ZXJzIiwiY29udGludW91cyIsIm91dGVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsIm91dGVyV2lkdGgiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWVTaGltIiwiY29udGV4dHMiLCJvbGRXaW5kb3dMb2FkIiwib25sb2FkIiwiZGlkU2Nyb2xsIiwiZGlkUmVzaXplIiwib2xkU2Nyb2xsIiwic2Nyb2xsTGVmdCIsInNjcm9sbFRvcCIsIndheXBvaW50cyIsInZlcnRpY2FsIiwid2F5cG9pbnRDb250ZXh0S2V5Iiwid2luZG93Q29udGV4dCIsImNyZWF0ZVRocm90dGxlZFNjcm9sbEhhbmRsZXIiLCJjcmVhdGVUaHJvdHRsZWRSZXNpemVIYW5kbGVyIiwid2F5cG9pbnQiLCJjaGVja0VtcHR5IiwiaG9yaXpvbnRhbEVtcHR5IiwiaXNFbXB0eU9iamVjdCIsInZlcnRpY2FsRW1wdHkiLCJpc1dpbmRvdyIsIm9mZiIsInJlc2l6ZUhhbmRsZXIiLCJoYW5kbGVSZXNpemUiLCJvbiIsInNjcm9sbEhhbmRsZXIiLCJoYW5kbGVTY3JvbGwiLCJpc1RvdWNoIiwidHJpZ2dlcmVkR3JvdXBzIiwiYXhlcyIsIm5ld1Njcm9sbCIsImZvcndhcmQiLCJiYWNrd2FyZCIsImF4aXNLZXkiLCJpc0ZvcndhcmQiLCJ3YXNCZWZvcmVUcmlnZ2VyUG9pbnQiLCJub3dBZnRlclRyaWdnZXJQb2ludCIsImNyb3NzZWRGb3J3YXJkIiwiY3Jvc3NlZEJhY2t3YXJkIiwiZ3JvdXBLZXkiLCJmbHVzaFRyaWdnZXJzIiwiY29udGV4dE9mZnNldCIsImxlZnQiLCJjb250ZXh0U2Nyb2xsIiwiY29udGV4dERpbWVuc2lvbiIsIm9mZnNldFByb3AiLCJhZGp1c3RtZW50Iiwib2xkVHJpZ2dlclBvaW50IiwiZWxlbWVudE9mZnNldCIsImZyZXNoV2F5cG9pbnQiLCJjb250ZXh0TW9kaWZpZXIiLCJ3YXNCZWZvcmVTY3JvbGwiLCJub3dBZnRlclNjcm9sbCIsInRyaWdnZXJlZEJhY2t3YXJkIiwidHJpZ2dlcmVkRm9yd2FyZCIsImZpbmRCeUVsZW1lbnQiLCJjb250ZXh0SWQiLCJyZXF1ZXN0Rm4iLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJieVRyaWdnZXJQb2ludCIsImJ5UmV2ZXJzZVRyaWdnZXJQb2ludCIsImdyb3VwcyIsImNsZWFyVHJpZ2dlclF1ZXVlcyIsInRyaWdnZXJRdWV1ZXMiLCJ1cCIsImRvd24iLCJyaWdodCIsInNvcnQiLCJpbkFycmF5IiwiaXNMYXN0IiwiZmlyc3QiLCJnZXRXaW5kb3ciLCJkZWZhdWx0VmlldyIsIk5vRnJhbWV3b3JrQWRhcHRlciIsImhhbmRsZXJzIiwiaXNXaW4iLCJldmVudCIsInJlbW92ZUxpc3RlbmVycyIsImxpc3RlbmVycyIsImxpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50UGFydHMiLCJldmVudFR5cGUiLCJuYW1lc3BhY2UiLCJucyIsIm93bmVyRG9jdW1lbnQiLCJ3aW4iLCJwYWdlWU9mZnNldCIsImNsaWVudFRvcCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50TGVmdCIsIm5zSGFuZGxlcnMiLCJuc1R5cGVMaXN0IiwiaW5jbHVkZU1hcmdpbiIsImNvbXB1dGVkU3R5bGUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJtZXJnZSIsImFycmF5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNB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QUFjMUgsT0FBZCxFQUF1QjBNLENBQXZCLENBQTVCO0FBQ0gsR0FGRDs7QUFJQTRjLG9CQUFrQixDQUFDeEQsYUFBbkIsR0FBbUMsVUFBUzNkLEdBQVQsRUFBYztBQUM3QztBQUNBLFNBQUssSUFBSXdHLElBQVQsSUFBaUJ4RyxHQUFqQixFQUFzQjtBQUNsQixhQUFPLEtBQVA7QUFDSDs7QUFDRCxXQUFPLElBQVA7QUFDSCxHQU5EOztBQVFBbEksVUFBUSxDQUFDc2tCLFFBQVQsQ0FBa0IvVSxJQUFsQixDQUF1QjtBQUNuQmIsUUFBSSxFQUFFLGFBRGE7QUFFbkIwVCxXQUFPLEVBQUVpSDtBQUZVLEdBQXZCO0FBSUFycEIsVUFBUSxDQUFDb2lCLE9BQVQsR0FBbUJpSCxrQkFBbkI7QUFDSCxDQTFLQSxHQUFELEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBNb2RhbE1lbnUgZnJvbSBcIi4vbW9kdWxlcy9tb2RhbE1lbnVcIjtcclxuaW1wb3J0IEFuaW1hdGlvbnMgZnJvbSBcIi4vbW9kdWxlcy9hbmltYXRpb25cIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9tb2R1bGVzL3NlYXJjaFwiO1xyXG5pbXBvcnQgRm9ybXMgZnJvbSBcIi4vbW9kdWxlcy9mb3Jtc1wiO1xyXG5cclxuY29uc3QgbW9kYWxNZW51ID0gbmV3IE1vZGFsTWVudSgpO1xyXG5jb25zdCBhbmltYXRpb24gPSBuZXcgQW5pbWF0aW9ucygpO1xyXG5jb25zdCBzZWFyY2ggPSBuZXcgU2VhcmNoKCk7XHJcbmNvbnN0IGZvcm1zID0gbmV3IEZvcm1zKCk7XHJcbiIsImltcG9ydCBhbmltZSBmcm9tICcuLi92ZW5kb3IvYW5pbWUuanMnXHJcbmltcG9ydCB3YXlwb2ludCBmcm9tICcuLi92ZW5kb3Ivbm9mcmFtZXdvcmsud2F5cG9pbnRzLmpzJ1xyXG5jbGFzcyBBbmltYXRpb25zIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm9kZEV2ZW5BbmltYXRpb24oKVxyXG4gICAgfVxyXG5cclxuICAgIG9kZEV2ZW5BbmltYXRpb24oKSB7XHJcbiAgICAgICAgY29uc3Qgb2RkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vZGQnKVxyXG4gICAgICAgIGNvbnN0IGV2ZW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV2ZW4nKVxyXG5cclxuICAgICAgICBldmVucy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgbmV3IFdheXBvaW50KHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IHRoaXMuZWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogWzAsIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiBbMTI1LCAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDE1MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ3NwcmluZygxLCA4MCwgMTAsIDApJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAnMTAwJScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgb2Rkcy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgbmV3IFdheXBvaW50KHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IHRoaXMuZWxlbWVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogWzAsIDFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiBbMTI1LCAwXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNpbmc6ICdzcHJpbmcoMSwgODAsIDEwLCAwKSdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9mZnNldDogJzEwMCUnLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25zXHJcbiIsImltcG9ydCBVdGlsaXR5IGZyb20gXCIuL3V0aWxpdHlcIjtcclxuXHJcbmNsYXNzIEZvcm1zIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwidGV4dGFyZWFcIik7XHJcbiAgICB0aGlzLnNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzZWxlY3RcIik7XHJcbiAgICB0aGlzLmN1c3RvbVNlbGVjdERyb3Bkb3duKCk7XHJcbiAgICB0aGlzLmV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgZXZlbnRzKCkge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnRleHRhcmVhICE9IFwidW5kZWZpbmVkXCIgJiYgdGhpcy50ZXh0YXJlYSAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMudGV4dGFyZWEuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHRoaXMuc2V0VGV4dGFyZWFIZWlnaHQoZWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFRleHRhcmVhSGVpZ2h0KGVsKSB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBlbDtcclxuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBVdGlsaXR5LnRleHRhcmVhSGVpZ2h0KHRhcmdldC52YWx1ZSkgKyBcInB4XCI7XHJcbiAgfVxyXG5cclxuICBjdXN0b21TZWxlY3REcm9wZG93bigpIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5zZWxlY3QgIT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLnNlbGVjdCAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0LmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgLy8gbWFrZSBjdXN0b20gc2VsZWN0IGVsZW1lbnQgaGVyZS5cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtcztcclxuIiwiaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4vdXRpbGl0eVwiXHJcblxyXG5jbGFzcyBNb2RhbE1lbnUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXInKVxyXG4gICAgICAgIHRoaXMudG9nZ2xlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZV0nKVxyXG4gICAgICAgIHRoaXMubWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5hbWVdJylcclxuICAgICAgICB0aGlzLnN1Ym1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3VibWVudS1idG4nKVxyXG4gICAgICAgIHRoaXMuaXNNZW51T3BlbiA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5ldmVudHMoKVxyXG4gICAgICAgIHRoaXMubWFpblBhZGRpbmcoKVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLnRvZ2dsZU1lbnUuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlck1lbnUoZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc3VibWVudUJ0bi5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVTdWJNZW51KGUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB0aGlzLmtleVByZXNzKGUpKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB0aGlzLmNoYW5nZUhlYWRlcigpKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PnRoaXMubWFpblBhZGRpbmcoKSlcclxuICAgIH1cclxuXHJcbiAgICB0cmlnZ2VyTWVudShlKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnKVxyXG4gICAgICAgIGNvbnN0IHRhcmdldE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uYW1lPVwiJyArIHRhcmdldCArICdcIl0nKVxyXG4gICAgICAgIGNvbnN0IG90aGVyTWVudXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1uYW1lXTpub3QoW2RhdGEtbmFtZT1cIicgKyB0YXJnZXQgKyAnXCJdKScpXHJcblxyXG4gICAgICAgIGlmICghdGFyZ2V0TWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICAvLyBDbG9zZSBvdGhlciBvcGVuIG1lbnVzIGZpcnN0XHJcbiAgICAgICAgICAgIG90aGVyTWVudXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTWVudShlbClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMub3Blbk1lbnUodGFyZ2V0TWVudSlcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNZW51KHRhcmdldE1lbnUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wZW5NZW51KG1lbnUpIHtcclxuICAgICAgICBjb25zdCBpZCA9IG1lbnUuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKVxyXG4gICAgICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10b2dnbGU9XCInICsgaWQgKyAnXCJdJylcclxuXHJcbiAgICAgICAgVXRpbGl0eS5ib2R5U2Nyb2xsTG9jaygpXHJcblxyXG4gICAgICAgIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2lzLXNjcm9sbGVkJylcclxuXHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdpcy1vcGVuJylcclxuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgbWVudUJ0bi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpXHJcblxyXG4gICAgICAgIHRoaXMuaXNNZW51T3BlbiA9IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZU1lbnUobWVudSkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gbWVudS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpXHJcbiAgICAgICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRvZ2dsZT1cIicgKyBpZCArICdcIl0nKVxyXG5cclxuICAgICAgICBVdGlsaXR5LmJvZHlTY3JvbGxVbmxvY2soKVxyXG5cclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKVxyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJylcclxuICAgICAgICBtZW51QnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXHJcblxyXG4gICAgICAgIHRoaXMuaXNNZW51T3BlbiA9IGZhbHNlXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVN1Yk1lbnUoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IGJ0biA9IGUuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjb25zdCB0YXJnZXRNZW51ID0gYnRuLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLnN1Ym1lbnUnKVxyXG5cclxuICAgICAgICBpZiAoIXRhcmdldE1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKVxyXG4gICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKVxyXG4gICAgICAgICAgICB0YXJnZXRNZW51LmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKTtcclxuICAgICAgICAgICAgdGFyZ2V0TWVudS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcblxyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdGFyZ2V0TWVudS5jbGllbnRIZWlnaHQgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgdGFyZ2V0TWVudS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRNZW51LnN0eWxlLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgICAgICB0YXJnZXRNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldE1lbnUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG9uY2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJylcclxuICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSB0YXJnZXRNZW51LmNsaWVudEhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgIHRhcmdldE1lbnUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldE1lbnUuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG5cclxuICAgICAgICAgICAgdGFyZ2V0TWVudS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldE1lbnUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG9uY2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBrZXlQcmVzcyhlKSB7XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAyNyAmJiB0aGlzLmlzTWVudU9wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5tZW51LmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1lbnUoZWwpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUhlYWRlcigpIHtcclxuICAgICAgICBsZXQgc2Nyb2xsUG9zID0gd2luZG93LnNjcm9sbFlcclxuICAgICAgICBcclxuICAgICAgICBpZiAoc2Nyb2xsUG9zID49IDc1IHx8IHRoaXMuaXNNZW51T3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QuYWRkKCdpcy1zY3JvbGxlZCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2Nyb2xsZWQnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYWluUGFkZGluZygpIHtcclxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpdGUtY29udGVudCcpXHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyLmlzLWZpeGVkJylcclxuXHJcbiAgICAgICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSBoZWFkZXIub2Zmc2V0SGVpZ2h0XHJcbiAgICAgICAgICAgIG1haW4uc3R5bGUucGFkZGluZ1RvcCA9IGhlYWRlckhlaWdodCArICdweCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbE1lbnVcclxuIiwiY2xhc3MgU2VhcmNoIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXNlYXJjaCcpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtc2VhcmNoLXRvZ2dsZScpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1zZWFyY2gtaW5wdXQnKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1zZWFyY2gtb3ZlcmxheScpXHJcbiAgICAgICAgdGhpcy5pc1NlYXJjaE9wZW4gPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuZXZlbnRzKClcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKSB7XHJcbiAgICAgICAgLy8gT3BlbiBzZWFyY2ggbW9kYWxcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnRvZ2dsZU1vZGFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENsb3NlIHNlYXJjaCBtb2RhbFxyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaE92ZXJsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jbG9zZU1vZGFsKCkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB0aGlzLmtleVByZXNzKGUpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVNb2RhbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3Blbk1vZGFsKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoTW9kYWwuY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hGaWVsZC52YWx1ZSA9ICcnXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNlYXJjaEZpZWxkLmZvY3VzKCksIDMwMSlcclxuICAgICAgICB0aGlzLnNlYXJjaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJylcclxuICAgICAgICB0aGlzLmlzU2VhcmNoT3BlbiA9IHRydWVcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VNb2RhbCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZWFyY2hNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJylcclxuICAgICAgICB0aGlzLnNlYXJjaEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXHJcbiAgICAgICAgdGhpcy5pc1NlYXJjaE9wZW4gPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGtleVByZXNzKGUpIHtcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09IDI3ICYmIHRoaXMuaXNTZWFyY2hPcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iLCJjbGFzcyBVdGlsaXR5IHtcclxuXHJcbiAgICBzdGF0aWMgYm9keVNjcm9sbExvY2soKSB7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCdcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9IC1zY3JvbGxZICsgJ3B4J1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgYm9keVNjcm9sbFVubG9jaygpIHtcclxuICAgICAgICBjb25zdCBib2R5U3R5bGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcDtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSAnJztcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcGFyc2VJbnQoYm9keVN0eWxlIHx8IDApICogLTEpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0ZXh0YXJlYUhlaWdodCh2YWx1ZSkge1xyXG4gICAgICAgICAgICBsZXQgbnVtYmVyT2ZMaW5lQnJlYWtzID0gKHZhbHVlLm1hdGNoKC9cXG4vZykgfHwgW10pLmxlbmd0aDtcclxuICAgICAgICAgICAgLy8gbWluLWhlaWdodCArIGxpbmVzIHggbGluZS1oZWlnaHQgKyBwYWRkaW5nICsgYm9yZGVyXHJcbiAgICAgICAgICAgIGxldCBuZXdIZWlnaHQgPSAyMCArIG51bWJlck9mTGluZUJyZWFrcyAqIDIwICsgMTAgKyAxO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3SGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtb2JpbGVDaGVjaygpIHtcclxuICAgICAgICAvKiBodHRwOi8vZGV0ZWN0bW9iaWxlYnJvd3NlcnMuY29tLyAqL1xyXG4gICAgICAgIGxldCBjaGVjayA9IGZhbHNlO1xyXG4gICAgICAgIChmdW5jdGlvbihhKXtpZigvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vfGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2kudGVzdChhKXx8LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLDQpKSkgY2hlY2sgPSB0cnVlO30pKG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3J8fHdpbmRvdy5vcGVyYSk7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gY2hlY2s7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVdGlsaXR5XHJcbiIsIi8qXHJcbiAqIGFuaW1lLmpzIHYzLjIuMVxyXG4gKiAoYykgMjAyMCBKdWxpYW4gR2FybmllclxyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcclxuICogYW5pbWVqcy5jb21cclxuICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4vLyBEZWZhdWx0c1xyXG5cclxudmFyIGRlZmF1bHRJbnN0YW5jZVNldHRpbmdzID0ge1xyXG4gICAgdXBkYXRlOiBudWxsLFxyXG4gICAgYmVnaW46IG51bGwsXHJcbiAgICBsb29wQmVnaW46IG51bGwsXHJcbiAgICBjaGFuZ2VCZWdpbjogbnVsbCxcclxuICAgIGNoYW5nZTogbnVsbCxcclxuICAgIGNoYW5nZUNvbXBsZXRlOiBudWxsLFxyXG4gICAgbG9vcENvbXBsZXRlOiBudWxsLFxyXG4gICAgY29tcGxldGU6IG51bGwsXHJcbiAgICBsb29wOiAxLFxyXG4gICAgZGlyZWN0aW9uOiAnbm9ybWFsJyxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgdGltZWxpbmVPZmZzZXQ6IDBcclxufTtcclxuXHJcbnZhciBkZWZhdWx0VHdlZW5TZXR0aW5ncyA9IHtcclxuICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgZGVsYXk6IDAsXHJcbiAgICBlbmREZWxheTogMCxcclxuICAgIGVhc2luZzogJ2Vhc2VPdXRFbGFzdGljKDEsIC41KScsXHJcbiAgICByb3VuZDogMFxyXG59O1xyXG5cclxudmFyIHZhbGlkVHJhbnNmb3JtcyA9IFsndHJhbnNsYXRlWCcsICd0cmFuc2xhdGVZJywgJ3RyYW5zbGF0ZVonLCAncm90YXRlJywgJ3JvdGF0ZVgnLCAncm90YXRlWScsICdyb3RhdGVaJywgJ3NjYWxlJywgJ3NjYWxlWCcsICdzY2FsZVknLCAnc2NhbGVaJywgJ3NrZXcnLCAnc2tld1gnLCAnc2tld1knLCAncGVyc3BlY3RpdmUnLCAnbWF0cml4JywgJ21hdHJpeDNkJ107XHJcblxyXG4vLyBDYWNoaW5nXHJcblxyXG52YXIgY2FjaGUgPSB7XHJcbiAgICBDU1M6IHt9LFxyXG4gICAgc3ByaW5nczoge31cclxufTtcclxuXHJcbi8vIFV0aWxzXHJcblxyXG5mdW5jdGlvbiBtaW5NYXgodmFsLCBtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbCwgbWluKSwgbWF4KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RyaW5nQ29udGFpbnMoc3RyLCB0ZXh0KSB7XHJcbiAgICByZXR1cm4gc3RyLmluZGV4T2YodGV4dCkgPiAtMTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlBcmd1bWVudHMoZnVuYywgYXJncykge1xyXG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkobnVsbCwgYXJncyk7XHJcbn1cclxuXHJcbnZhciBpcyA9IHtcclxuICAgIGFycjogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGEpO1xyXG4gICAgfSxcclxuICAgIG9iajogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiBzdHJpbmdDb250YWlucyhPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSksICdPYmplY3QnKTtcclxuICAgIH0sXHJcbiAgICBwdGg6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gaXMub2JqKGEpICYmIGEuaGFzT3duUHJvcGVydHkoJ3RvdGFsTGVuZ3RoJyk7XHJcbiAgICB9LFxyXG4gICAgc3ZnOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIGEgaW5zdGFuY2VvZiBTVkdFbGVtZW50O1xyXG4gICAgfSxcclxuICAgIGlucDogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiBhIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudDtcclxuICAgIH0sXHJcbiAgICBkb206IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gYS5ub2RlVHlwZSB8fCBpcy5zdmcoYSk7XHJcbiAgICB9LFxyXG4gICAgc3RyOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhID09PSAnc3RyaW5nJztcclxuICAgIH0sXHJcbiAgICBmbmM6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIGEgPT09ICdmdW5jdGlvbic7XHJcbiAgICB9LFxyXG4gICAgdW5kOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhID09PSAndW5kZWZpbmVkJztcclxuICAgIH0sXHJcbiAgICBuaWw6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gaXMudW5kKGEpIHx8IGEgPT09IG51bGw7XHJcbiAgICB9LFxyXG4gICAgaGV4OiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIC8oXiNbMC05QS1GXXs2fSQpfCheI1swLTlBLUZdezN9JCkvaS50ZXN0KGEpO1xyXG4gICAgfSxcclxuICAgIHJnYjogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiAvXnJnYi8udGVzdChhKTtcclxuICAgIH0sXHJcbiAgICBoc2w6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gL15oc2wvLnRlc3QoYSk7XHJcbiAgICB9LFxyXG4gICAgY29sOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIChpcy5oZXgoYSkgfHwgaXMucmdiKGEpIHx8IGlzLmhzbChhKSk7XHJcbiAgICB9LFxyXG4gICAga2V5OiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuICFkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShhKSAmJiAhZGVmYXVsdFR3ZWVuU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYSkgJiYgYSAhPT0gJ3RhcmdldHMnICYmIGEgIT09ICdrZXlmcmFtZXMnO1xyXG4gICAgfSxcclxufTtcclxuXHJcbi8vIEVhc2luZ3NcclxuXHJcbmZ1bmN0aW9uIHBhcnNlRWFzaW5nUGFyYW1ldGVycyhzdHJpbmcpIHtcclxuICAgIHZhciBtYXRjaCA9IC9cXCgoW14pXSspXFwpLy5leGVjKHN0cmluZyk7XHJcbiAgICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXS5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbihwKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQocCk7XHJcbiAgICB9KSA6IFtdO1xyXG59XHJcblxyXG4vLyBTcHJpbmcgc29sdmVyIGluc3BpcmVkIGJ5IFdlYmtpdCBDb3B5cmlnaHQgwqkgMjAxNiBBcHBsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuIGh0dHBzOi8vd2Via2l0Lm9yZy9kZW1vcy9zcHJpbmcvc3ByaW5nLmpzXHJcblxyXG5mdW5jdGlvbiBzcHJpbmcoc3RyaW5nLCBkdXJhdGlvbikge1xyXG5cclxuICAgIHZhciBwYXJhbXMgPSBwYXJzZUVhc2luZ1BhcmFtZXRlcnMoc3RyaW5nKTtcclxuICAgIHZhciBtYXNzID0gbWluTWF4KGlzLnVuZChwYXJhbXNbMF0pID8gMSA6IHBhcmFtc1swXSwgLjEsIDEwMCk7XHJcbiAgICB2YXIgc3RpZmZuZXNzID0gbWluTWF4KGlzLnVuZChwYXJhbXNbMV0pID8gMTAwIDogcGFyYW1zWzFdLCAuMSwgMTAwKTtcclxuICAgIHZhciBkYW1waW5nID0gbWluTWF4KGlzLnVuZChwYXJhbXNbMl0pID8gMTAgOiBwYXJhbXNbMl0sIC4xLCAxMDApO1xyXG4gICAgdmFyIHZlbG9jaXR5ID0gbWluTWF4KGlzLnVuZChwYXJhbXNbM10pID8gMCA6IHBhcmFtc1szXSwgLjEsIDEwMCk7XHJcbiAgICB2YXIgdzAgPSBNYXRoLnNxcnQoc3RpZmZuZXNzIC8gbWFzcyk7XHJcbiAgICB2YXIgemV0YSA9IGRhbXBpbmcgLyAoMiAqIE1hdGguc3FydChzdGlmZm5lc3MgKiBtYXNzKSk7XHJcbiAgICB2YXIgd2QgPSB6ZXRhIDwgMSA/IHcwICogTWF0aC5zcXJ0KDEgLSB6ZXRhICogemV0YSkgOiAwO1xyXG4gICAgdmFyIGEgPSAxO1xyXG4gICAgdmFyIGIgPSB6ZXRhIDwgMSA/ICh6ZXRhICogdzAgKyAtdmVsb2NpdHkpIC8gd2QgOiAtdmVsb2NpdHkgKyB3MDtcclxuXHJcbiAgICBmdW5jdGlvbiBzb2x2ZXIodCkge1xyXG4gICAgICAgIHZhciBwcm9ncmVzcyA9IGR1cmF0aW9uID8gKGR1cmF0aW9uICogdCkgLyAxMDAwIDogdDtcclxuICAgICAgICBpZiAoemV0YSA8IDEpIHtcclxuICAgICAgICAgICAgcHJvZ3Jlc3MgPSBNYXRoLmV4cCgtcHJvZ3Jlc3MgKiB6ZXRhICogdzApICogKGEgKiBNYXRoLmNvcyh3ZCAqIHByb2dyZXNzKSArIGIgKiBNYXRoLnNpbih3ZCAqIHByb2dyZXNzKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcHJvZ3Jlc3MgPSAoYSArIGIgKiBwcm9ncmVzcykgKiBNYXRoLmV4cCgtcHJvZ3Jlc3MgKiB3MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0ID09PSAwIHx8IHQgPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAxIC0gcHJvZ3Jlc3M7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RHVyYXRpb24oKSB7XHJcbiAgICAgICAgdmFyIGNhY2hlZCA9IGNhY2hlLnNwcmluZ3Nbc3RyaW5nXTtcclxuICAgICAgICBpZiAoY2FjaGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBmcmFtZSA9IDEgLyA2O1xyXG4gICAgICAgIHZhciBlbGFwc2VkID0gMDtcclxuICAgICAgICB2YXIgcmVzdCA9IDA7XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgZWxhcHNlZCArPSBmcmFtZTtcclxuICAgICAgICAgICAgaWYgKHNvbHZlcihlbGFwc2VkKSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3QgPj0gMTYpIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc3QgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkdXJhdGlvbiA9IGVsYXBzZWQgKiBmcmFtZSAqIDEwMDA7XHJcbiAgICAgICAgY2FjaGUuc3ByaW5nc1tzdHJpbmddID0gZHVyYXRpb247XHJcbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkdXJhdGlvbiA/IHNvbHZlciA6IGdldER1cmF0aW9uO1xyXG5cclxufVxyXG5cclxuLy8gQmFzaWMgc3RlcHMgZWFzaW5nIGltcGxlbWVudGF0aW9uIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2ZyL2RvY3MvV2ViL0NTUy90cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblxyXG5cclxuZnVuY3Rpb24gc3RlcHMoc3RlcHMpIHtcclxuICAgIGlmIChzdGVwcyA9PT0gdm9pZCAwKSBzdGVwcyA9IDEwO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCgobWluTWF4KHQsIDAuMDAwMDAxLCAxKSkgKiBzdGVwcykgKiAoMSAvIHN0ZXBzKTtcclxuICAgIH07XHJcbn1cclxuXHJcbi8vIEJlemllckVhc2luZyBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmdcclxuXHJcbnZhciBiZXppZXIgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdmFyIGtTcGxpbmVUYWJsZVNpemUgPSAxMTtcclxuICAgIHZhciBrU2FtcGxlU3RlcFNpemUgPSAxLjAgLyAoa1NwbGluZVRhYmxlU2l6ZSAtIDEuMCk7XHJcblxyXG4gICAgZnVuY3Rpb24gQShhQTEsIGFBMikge1xyXG4gICAgICAgIHJldHVybiAxLjAgLSAzLjAgKiBhQTIgKyAzLjAgKiBhQTFcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCKGFBMSwgYUEyKSB7XHJcbiAgICAgICAgcmV0dXJuIDMuMCAqIGFBMiAtIDYuMCAqIGFBMVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEMoYUExKSB7XHJcbiAgICAgICAgcmV0dXJuIDMuMCAqIGFBMVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGNCZXppZXIoYVQsIGFBMSwgYUEyKSB7XHJcbiAgICAgICAgcmV0dXJuICgoQShhQTEsIGFBMikgKiBhVCArIEIoYUExLCBhQTIpKSAqIGFUICsgQyhhQTEpKSAqIGFUXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U2xvcGUoYVQsIGFBMSwgYUEyKSB7XHJcbiAgICAgICAgcmV0dXJuIDMuMCAqIEEoYUExLCBhQTIpICogYVQgKiBhVCArIDIuMCAqIEIoYUExLCBhQTIpICogYVQgKyBDKGFBMSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBiaW5hcnlTdWJkaXZpZGUoYVgsIGFBLCBhQiwgbVgxLCBtWDIpIHtcclxuICAgICAgICB2YXIgY3VycmVudFgsIGN1cnJlbnRULCBpID0gMDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XHJcbiAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50WCA+IDAuMCkge1xyXG4gICAgICAgICAgICAgICAgYUIgPSBjdXJyZW50VDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFBID0gY3VycmVudFQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiAwLjAwMDAwMDEgJiYgKytpIDwgMTApO1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50VDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgYUd1ZXNzVCwgbVgxLCBtWDIpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7ICsraSkge1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhR3Vlc3NUO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XHJcbiAgICAgICAgICAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhR3Vlc3NUO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJlemllcihtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcclxuXHJcbiAgICAgICAgaWYgKCEoMCA8PSBtWDEgJiYgbVgxIDw9IDEgJiYgMCA8PSBtWDIgJiYgbVgyIDw9IDEpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNhbXBsZVZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkoa1NwbGluZVRhYmxlU2l6ZSk7XHJcblxyXG4gICAgICAgIGlmIChtWDEgIT09IG1ZMSB8fCBtWDIgIT09IG1ZMikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtTcGxpbmVUYWJsZVNpemU7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICoga1NhbXBsZVN0ZXBTaXplLCBtWDEsIG1YMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldFRGb3JYKGFYKSB7XHJcblxyXG4gICAgICAgICAgICB2YXIgaW50ZXJ2YWxTdGFydCA9IDA7XHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50U2FtcGxlID0gMTtcclxuICAgICAgICAgICAgdmFyIGxhc3RTYW1wbGUgPSBrU3BsaW5lVGFibGVTaXplIC0gMTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9PSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XHJcbiAgICAgICAgICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IGtTYW1wbGVTdGVwU2l6ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLS1jdXJyZW50U2FtcGxlO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlICsgMV0gLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pO1xyXG4gICAgICAgICAgICB2YXIgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBrU2FtcGxlU3RlcFNpemU7XHJcbiAgICAgICAgICAgIHZhciBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbml0aWFsU2xvcGUgPj0gMC4wMDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JULCBtWDEsIG1YMik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBndWVzc0ZvclQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsga1NhbXBsZVN0ZXBTaXplLCBtWDEsIG1YMik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oeCkge1xyXG4gICAgICAgICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh4ID09PSAwIHx8IHggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxjQmV6aWVyKGdldFRGb3JYKHgpLCBtWTEsIG1ZMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYmV6aWVyO1xyXG5cclxufSkoKTtcclxuXHJcbnZhciBwZW5uZXIgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy8gQmFzZWQgb24galF1ZXJ5IFVJJ3MgaW1wbGVtZW5hdGlvbiBvZiBlYXNpbmcgZXF1YXRpb25zIGZyb20gUm9iZXJ0IFBlbm5lciAoaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZylcclxuXHJcbiAgICB2YXIgZWFzZXMgPSB7XHJcbiAgICAgICAgbGluZWFyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIGZ1bmN0aW9uRWFzaW5ncyA9IHtcclxuICAgICAgICBTaW5lOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxIC0gTWF0aC5jb3ModCAqIE1hdGguUEkgLyAyKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIENpcmM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDEgLSBNYXRoLnNxcnQoMSAtIHQgKiB0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIEJhY2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHQgKiB0ICogKDMgKiB0IC0gMik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBCb3VuY2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBvdzIsIGIgPSA0O1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHQgPCAoKHBvdzIgPSBNYXRoLnBvdygyLCAtLWIpKSAtIDEpIC8gMTEpIHt9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMSAvIE1hdGgucG93KDQsIDMgLSBiKSAtIDcuNTYyNSAqIE1hdGgucG93KChwb3cyICogMyAtIDIpIC8gMjIgLSB0LCAyKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgRWxhc3RpYzogZnVuY3Rpb24oYW1wbGl0dWRlLCBwZXJpb2QpIHtcclxuICAgICAgICAgICAgaWYgKGFtcGxpdHVkZSA9PT0gdm9pZCAwKSBhbXBsaXR1ZGUgPSAxO1xyXG4gICAgICAgICAgICBpZiAocGVyaW9kID09PSB2b2lkIDApIHBlcmlvZCA9IC41O1xyXG5cclxuICAgICAgICAgICAgdmFyIGEgPSBtaW5NYXgoYW1wbGl0dWRlLCAxLCAxMCk7XHJcbiAgICAgICAgICAgIHZhciBwID0gbWluTWF4KHBlcmlvZCwgLjEsIDIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0ID09PSAwIHx8IHQgPT09IDEpID8gdCA6XHJcbiAgICAgICAgICAgICAgICAgICAgLWEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC0gMSkpICogTWF0aC5zaW4oKCgodCAtIDEpIC0gKHAgLyAoTWF0aC5QSSAqIDIpICogTWF0aC5hc2luKDEgLyBhKSkpICogKE1hdGguUEkgKiAyKSkgLyBwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhc2VFYXNpbmdzID0gWydRdWFkJywgJ0N1YmljJywgJ1F1YXJ0JywgJ1F1aW50JywgJ0V4cG8nXTtcclxuXHJcbiAgICBiYXNlRWFzaW5ncy5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUsIGkpIHtcclxuICAgICAgICBmdW5jdGlvbkVhc2luZ3NbbmFtZV0gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdyh0LCBpICsgMik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIE9iamVjdC5rZXlzKGZ1bmN0aW9uRWFzaW5ncykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgICAgdmFyIGVhc2VJbiA9IGZ1bmN0aW9uRWFzaW5nc1tuYW1lXTtcclxuICAgICAgICBlYXNlc1snZWFzZUluJyArIG5hbWVdID0gZWFzZUluO1xyXG4gICAgICAgIGVhc2VzWydlYXNlT3V0JyArIG5hbWVdID0gZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDEgLSBlYXNlSW4oYSwgYikoMSAtIHQpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZWFzZXNbJ2Vhc2VJbk91dCcgKyBuYW1lXSA9IGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0IDwgMC41ID8gZWFzZUluKGEsIGIpKHQgKiAyKSAvIDIgOlxyXG4gICAgICAgICAgICAgICAgICAgIDEgLSBlYXNlSW4oYSwgYikodCAqIC0yICsgMikgLyAyO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZWFzZXNbJ2Vhc2VPdXRJbicgKyBuYW1lXSA9IGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0IDwgMC41ID8gKDEgLSBlYXNlSW4oYSwgYikoMSAtIHQgKiAyKSkgLyAyIDpcclxuICAgICAgICAgICAgICAgICAgICAoZWFzZUluKGEsIGIpKHQgKiAyIC0gMSkgKyAxKSAvIDI7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBlYXNlcztcclxuXHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBwYXJzZUVhc2luZ3MoZWFzaW5nLCBkdXJhdGlvbikge1xyXG4gICAgaWYgKGlzLmZuYyhlYXNpbmcpKSB7XHJcbiAgICAgICAgcmV0dXJuIGVhc2luZztcclxuICAgIH1cclxuICAgIHZhciBuYW1lID0gZWFzaW5nLnNwbGl0KCcoJylbMF07XHJcbiAgICB2YXIgZWFzZSA9IHBlbm5lcltuYW1lXTtcclxuICAgIHZhciBhcmdzID0gcGFyc2VFYXNpbmdQYXJhbWV0ZXJzKGVhc2luZyk7XHJcbiAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICBjYXNlICdzcHJpbmcnOlxyXG4gICAgICAgICAgICByZXR1cm4gc3ByaW5nKGVhc2luZywgZHVyYXRpb24pO1xyXG4gICAgICAgIGNhc2UgJ2N1YmljQmV6aWVyJzpcclxuICAgICAgICAgICAgcmV0dXJuIGFwcGx5QXJndW1lbnRzKGJlemllciwgYXJncyk7XHJcbiAgICAgICAgY2FzZSAnc3RlcHMnOlxyXG4gICAgICAgICAgICByZXR1cm4gYXBwbHlBcmd1bWVudHMoc3RlcHMsIGFyZ3MpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBhcHBseUFyZ3VtZW50cyhlYXNlLCBhcmdzKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gU3RyaW5nc1xyXG5cclxuZnVuY3Rpb24gc2VsZWN0U3RyaW5nKHN0cikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB2YXIgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHN0cik7XHJcbiAgICAgICAgcmV0dXJuIG5vZGVzO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxufVxyXG5cclxuLy8gQXJyYXlzXHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJBcnJheShhcnIsIGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcclxuICAgIHZhciB0aGlzQXJnID0gYXJndW1lbnRzLmxlbmd0aCA+PSAyID8gYXJndW1lbnRzWzFdIDogdm9pZCAwO1xyXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgIGlmIChpIGluIGFycikge1xyXG4gICAgICAgICAgICB2YXIgdmFsID0gYXJyW2ldO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2YWwsIGksIGFycikpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBmbGF0dGVuQXJyYXkoYXJyKSB7XHJcbiAgICByZXR1cm4gYXJyLnJlZHVjZShmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGEuY29uY2F0KGlzLmFycihiKSA/IGZsYXR0ZW5BcnJheShiKSA6IGIpO1xyXG4gICAgfSwgW10pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b0FycmF5KG8pIHtcclxuICAgIGlmIChpcy5hcnIobykpIHtcclxuICAgICAgICByZXR1cm4gbztcclxuICAgIH1cclxuICAgIGlmIChpcy5zdHIobykpIHtcclxuICAgICAgICBvID0gc2VsZWN0U3RyaW5nKG8pIHx8IG87XHJcbiAgICB9XHJcbiAgICBpZiAobyBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IG8gaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbikge1xyXG4gICAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKG8pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtvXTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXJyYXlDb250YWlucyhhcnIsIHZhbCkge1xyXG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gYSA9PT0gdmFsO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIE9iamVjdHNcclxuXHJcbmZ1bmN0aW9uIGNsb25lT2JqZWN0KG8pIHtcclxuICAgIHZhciBjbG9uZSA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBvKSB7XHJcbiAgICAgICAgY2xvbmVbcF0gPSBvW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNsb25lO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlT2JqZWN0UHJvcHMobzEsIG8yKSB7XHJcbiAgICB2YXIgbyA9IGNsb25lT2JqZWN0KG8xKTtcclxuICAgIGZvciAodmFyIHAgaW4gbzEpIHtcclxuICAgICAgICBvW3BdID0gbzIuaGFzT3duUHJvcGVydHkocCkgPyBvMltwXSA6IG8xW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG87XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lcmdlT2JqZWN0cyhvMSwgbzIpIHtcclxuICAgIHZhciBvID0gY2xvbmVPYmplY3QobzEpO1xyXG4gICAgZm9yICh2YXIgcCBpbiBvMikge1xyXG4gICAgICAgIG9bcF0gPSBpcy51bmQobzFbcF0pID8gbzJbcF0gOiBvMVtwXTtcclxuICAgIH1cclxuICAgIHJldHVybiBvO1xyXG59XHJcblxyXG4vLyBDb2xvcnNcclxuXHJcbmZ1bmN0aW9uIHJnYlRvUmdiYShyZ2JWYWx1ZSkge1xyXG4gICAgdmFyIHJnYiA9IC9yZ2JcXCgoXFxkKyxcXHMqW1xcZF0rLFxccypbXFxkXSspXFwpL2cuZXhlYyhyZ2JWYWx1ZSk7XHJcbiAgICByZXR1cm4gcmdiID8gKFwicmdiYShcIiArIChyZ2JbMV0pICsgXCIsMSlcIikgOiByZ2JWYWx1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGV4VG9SZ2JhKGhleFZhbHVlKSB7XHJcbiAgICB2YXIgcmd4ID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTtcclxuICAgIHZhciBoZXggPSBoZXhWYWx1ZS5yZXBsYWNlKHJneCwgZnVuY3Rpb24obSwgciwgZywgYikge1xyXG4gICAgICAgIHJldHVybiByICsgciArIGcgKyBnICsgYiArIGI7XHJcbiAgICB9KTtcclxuICAgIHZhciByZ2IgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcclxuICAgIHZhciByID0gcGFyc2VJbnQocmdiWzFdLCAxNik7XHJcbiAgICB2YXIgZyA9IHBhcnNlSW50KHJnYlsyXSwgMTYpO1xyXG4gICAgdmFyIGIgPSBwYXJzZUludChyZ2JbM10sIDE2KTtcclxuICAgIHJldHVybiAoXCJyZ2JhKFwiICsgciArIFwiLFwiICsgZyArIFwiLFwiICsgYiArIFwiLDEpXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoc2xUb1JnYmEoaHNsVmFsdWUpIHtcclxuICAgIHZhciBoc2wgPSAvaHNsXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklXFwpL2cuZXhlYyhoc2xWYWx1ZSkgfHwgL2hzbGFcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKVxcKS9nLmV4ZWMoaHNsVmFsdWUpO1xyXG4gICAgdmFyIGggPSBwYXJzZUludChoc2xbMV0sIDEwKSAvIDM2MDtcclxuICAgIHZhciBzID0gcGFyc2VJbnQoaHNsWzJdLCAxMCkgLyAxMDA7XHJcbiAgICB2YXIgbCA9IHBhcnNlSW50KGhzbFszXSwgMTApIC8gMTAwO1xyXG4gICAgdmFyIGEgPSBoc2xbNF0gfHwgMTtcclxuXHJcbiAgICBmdW5jdGlvbiBodWUycmdiKHAsIHEsIHQpIHtcclxuICAgICAgICBpZiAodCA8IDApIHtcclxuICAgICAgICAgICAgdCArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodCA+IDEpIHtcclxuICAgICAgICAgICAgdCAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodCA8IDEgLyA2KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwICsgKHEgLSBwKSAqIDYgKiB0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodCA8IDEgLyAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodCA8IDIgLyAzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwICsgKHEgLSBwKSAqICgyIC8gMyAtIHQpICogNjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcbiAgICB2YXIgciwgZywgYjtcclxuICAgIGlmIChzID09IDApIHtcclxuICAgICAgICByID0gZyA9IGIgPSBsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgcSA9IGwgPCAwLjUgPyBsICogKDEgKyBzKSA6IGwgKyBzIC0gbCAqIHM7XHJcbiAgICAgICAgdmFyIHAgPSAyICogbCAtIHE7XHJcbiAgICAgICAgciA9IGh1ZTJyZ2IocCwgcSwgaCArIDEgLyAzKTtcclxuICAgICAgICBnID0gaHVlMnJnYihwLCBxLCBoKTtcclxuICAgICAgICBiID0gaHVlMnJnYihwLCBxLCBoIC0gMSAvIDMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcInJnYmEoXCIgKyAociAqIDI1NSkgKyBcIixcIiArIChnICogMjU1KSArIFwiLFwiICsgKGIgKiAyNTUpICsgXCIsXCIgKyBhICsgXCIpXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb2xvclRvUmdiKHZhbCkge1xyXG4gICAgaWYgKGlzLnJnYih2YWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIHJnYlRvUmdiYSh2YWwpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzLmhleCh2YWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIGhleFRvUmdiYSh2YWwpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzLmhzbCh2YWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIGhzbFRvUmdiYSh2YWwpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBVbml0c1xyXG5cclxuZnVuY3Rpb24gZ2V0VW5pdCh2YWwpIHtcclxuICAgIHZhciBzcGxpdCA9IC9bKy1dP1xcZCpcXC4/XFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPyglfHB4fHB0fGVtfHJlbXxpbnxjbXxtbXxleHxjaHxwY3x2d3x2aHx2bWlufHZtYXh8ZGVnfHJhZHx0dXJuKT8kLy5leGVjKHZhbCk7XHJcbiAgICBpZiAoc3BsaXQpIHtcclxuICAgICAgICByZXR1cm4gc3BsaXRbMV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRyYW5zZm9ybVVuaXQocHJvcE5hbWUpIHtcclxuICAgIGlmIChzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3RyYW5zbGF0ZScpIHx8IHByb3BOYW1lID09PSAncGVyc3BlY3RpdmUnKSB7XHJcbiAgICAgICAgcmV0dXJuICdweCc7XHJcbiAgICB9XHJcbiAgICBpZiAoc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICdyb3RhdGUnKSB8fCBzdHJpbmdDb250YWlucyhwcm9wTmFtZSwgJ3NrZXcnKSkge1xyXG4gICAgICAgIHJldHVybiAnZGVnJztcclxuICAgIH1cclxufVxyXG5cclxuLy8gVmFsdWVzXHJcblxyXG5mdW5jdGlvbiBnZXRGdW5jdGlvblZhbHVlKHZhbCwgYW5pbWF0YWJsZSkge1xyXG4gICAgaWYgKCFpcy5mbmModmFsKSkge1xyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsKGFuaW1hdGFibGUudGFyZ2V0LCBhbmltYXRhYmxlLmlkLCBhbmltYXRhYmxlLnRvdGFsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKGVsLCBwcm9wKSB7XHJcbiAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKHByb3ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0UHhUb1VuaXQoZWwsIHZhbHVlLCB1bml0KSB7XHJcbiAgICB2YXIgdmFsdWVVbml0ID0gZ2V0VW5pdCh2YWx1ZSk7XHJcbiAgICBpZiAoYXJyYXlDb250YWlucyhbdW5pdCwgJ2RlZycsICdyYWQnLCAndHVybiddLCB2YWx1ZVVuaXQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgdmFyIGNhY2hlZCA9IGNhY2hlLkNTU1t2YWx1ZSArIHVuaXRdO1xyXG4gICAgaWYgKCFpcy51bmQoY2FjaGVkKSkge1xyXG4gICAgICAgIHJldHVybiBjYWNoZWQ7XHJcbiAgICB9XHJcbiAgICB2YXIgYmFzZWxpbmUgPSAxMDA7XHJcbiAgICB2YXIgdGVtcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbC50YWdOYW1lKTtcclxuICAgIHZhciBwYXJlbnRFbCA9IChlbC5wYXJlbnROb2RlICYmIChlbC5wYXJlbnROb2RlICE9PSBkb2N1bWVudCkpID8gZWwucGFyZW50Tm9kZSA6IGRvY3VtZW50LmJvZHk7XHJcbiAgICBwYXJlbnRFbC5hcHBlbmRDaGlsZCh0ZW1wRWwpO1xyXG4gICAgdGVtcEVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIHRlbXBFbC5zdHlsZS53aWR0aCA9IGJhc2VsaW5lICsgdW5pdDtcclxuICAgIHZhciBmYWN0b3IgPSBiYXNlbGluZSAvIHRlbXBFbC5vZmZzZXRXaWR0aDtcclxuICAgIHBhcmVudEVsLnJlbW92ZUNoaWxkKHRlbXBFbCk7XHJcbiAgICB2YXIgY29udmVydGVkVW5pdCA9IGZhY3RvciAqIHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgY2FjaGUuQ1NTW3ZhbHVlICsgdW5pdF0gPSBjb252ZXJ0ZWRVbml0O1xyXG4gICAgcmV0dXJuIGNvbnZlcnRlZFVuaXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENTU1ZhbHVlKGVsLCBwcm9wLCB1bml0KSB7XHJcbiAgICBpZiAocHJvcCBpbiBlbC5zdHlsZSkge1xyXG4gICAgICAgIHZhciB1cHBlcmNhc2VQcm9wTmFtZSA9IHByb3AucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB2YXIgdmFsdWUgPSBlbC5zdHlsZVtwcm9wXSB8fCBnZXRDb21wdXRlZFN0eWxlKGVsKS5nZXRQcm9wZXJ0eVZhbHVlKHVwcGVyY2FzZVByb3BOYW1lKSB8fCAnMCc7XHJcbiAgICAgICAgcmV0dXJuIHVuaXQgPyBjb252ZXJ0UHhUb1VuaXQoZWwsIHZhbHVlLCB1bml0KSA6IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBbmltYXRpb25UeXBlKGVsLCBwcm9wKSB7XHJcbiAgICBpZiAoaXMuZG9tKGVsKSAmJiAhaXMuaW5wKGVsKSAmJiAoIWlzLm5pbChnZXRBdHRyaWJ1dGUoZWwsIHByb3ApKSB8fCAoaXMuc3ZnKGVsKSAmJiBlbFtwcm9wXSkpKSB7XHJcbiAgICAgICAgcmV0dXJuICdhdHRyaWJ1dGUnO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzLmRvbShlbCkgJiYgYXJyYXlDb250YWlucyh2YWxpZFRyYW5zZm9ybXMsIHByb3ApKSB7XHJcbiAgICAgICAgcmV0dXJuICd0cmFuc2Zvcm0nO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzLmRvbShlbCkgJiYgKHByb3AgIT09ICd0cmFuc2Zvcm0nICYmIGdldENTU1ZhbHVlKGVsLCBwcm9wKSkpIHtcclxuICAgICAgICByZXR1cm4gJ2Nzcyc7XHJcbiAgICB9XHJcbiAgICBpZiAoZWxbcHJvcF0gIT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAnb2JqZWN0JztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RWxlbWVudFRyYW5zZm9ybXMoZWwpIHtcclxuICAgIGlmICghaXMuZG9tKGVsKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBzdHIgPSBlbC5zdHlsZS50cmFuc2Zvcm0gfHwgJyc7XHJcbiAgICB2YXIgcmVnID0gLyhcXHcrKVxcKChbXildKilcXCkvZztcclxuICAgIHZhciB0cmFuc2Zvcm1zID0gbmV3IE1hcCgpO1xyXG4gICAgdmFyIG07XHJcbiAgICB3aGlsZSAobSA9IHJlZy5leGVjKHN0cikpIHtcclxuICAgICAgICB0cmFuc2Zvcm1zLnNldChtWzFdLCBtWzJdKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cmFuc2Zvcm1zO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUcmFuc2Zvcm1WYWx1ZShlbCwgcHJvcE5hbWUsIGFuaW1hdGFibGUsIHVuaXQpIHtcclxuICAgIHZhciBkZWZhdWx0VmFsID0gc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICdzY2FsZScpID8gMSA6IDAgKyBnZXRUcmFuc2Zvcm1Vbml0KHByb3BOYW1lKTtcclxuICAgIHZhciB2YWx1ZSA9IGdldEVsZW1lbnRUcmFuc2Zvcm1zKGVsKS5nZXQocHJvcE5hbWUpIHx8IGRlZmF1bHRWYWw7XHJcbiAgICBpZiAoYW5pbWF0YWJsZSkge1xyXG4gICAgICAgIGFuaW1hdGFibGUudHJhbnNmb3Jtcy5saXN0LnNldChwcm9wTmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIGFuaW1hdGFibGUudHJhbnNmb3Jtc1snbGFzdCddID0gcHJvcE5hbWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5pdCA/IGNvbnZlcnRQeFRvVW5pdChlbCwgdmFsdWUsIHVuaXQpIDogdmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgdW5pdCwgYW5pbWF0YWJsZSkge1xyXG4gICAgc3dpdGNoIChnZXRBbmltYXRpb25UeXBlKHRhcmdldCwgcHJvcE5hbWUpKSB7XHJcbiAgICAgICAgY2FzZSAndHJhbnNmb3JtJzpcclxuICAgICAgICAgICAgcmV0dXJuIGdldFRyYW5zZm9ybVZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIGFuaW1hdGFibGUsIHVuaXQpO1xyXG4gICAgICAgIGNhc2UgJ2Nzcyc6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRDU1NWYWx1ZSh0YXJnZXQsIHByb3BOYW1lLCB1bml0KTtcclxuICAgICAgICBjYXNlICdhdHRyaWJ1dGUnOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0QXR0cmlidXRlKHRhcmdldCwgcHJvcE5hbWUpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcHJvcE5hbWVdIHx8IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJlbGF0aXZlVmFsdWUodG8sIGZyb20pIHtcclxuICAgIHZhciBvcGVyYXRvciA9IC9eKFxcKj18XFwrPXwtPSkvLmV4ZWModG8pO1xyXG4gICAgaWYgKCFvcGVyYXRvcikge1xyXG4gICAgICAgIHJldHVybiB0bztcclxuICAgIH1cclxuICAgIHZhciB1ID0gZ2V0VW5pdCh0bykgfHwgMDtcclxuICAgIHZhciB4ID0gcGFyc2VGbG9hdChmcm9tKTtcclxuICAgIHZhciB5ID0gcGFyc2VGbG9hdCh0by5yZXBsYWNlKG9wZXJhdG9yWzBdLCAnJykpO1xyXG4gICAgc3dpdGNoIChvcGVyYXRvclswXVswXSkge1xyXG4gICAgICAgIGNhc2UgJysnOlxyXG4gICAgICAgICAgICByZXR1cm4geCArIHkgKyB1O1xyXG4gICAgICAgIGNhc2UgJy0nOlxyXG4gICAgICAgICAgICByZXR1cm4geCAtIHkgKyB1O1xyXG4gICAgICAgIGNhc2UgJyonOlxyXG4gICAgICAgICAgICByZXR1cm4geCAqIHkgKyB1O1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVZhbHVlKHZhbCwgdW5pdCkge1xyXG4gICAgaWYgKGlzLmNvbCh2YWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbG9yVG9SZ2IodmFsKTtcclxuICAgIH1cclxuICAgIGlmICgvXFxzL2cudGVzdCh2YWwpKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbDtcclxuICAgIH1cclxuICAgIHZhciBvcmlnaW5hbFVuaXQgPSBnZXRVbml0KHZhbCk7XHJcbiAgICB2YXIgdW5pdExlc3MgPSBvcmlnaW5hbFVuaXQgPyB2YWwuc3Vic3RyKDAsIHZhbC5sZW5ndGggLSBvcmlnaW5hbFVuaXQubGVuZ3RoKSA6IHZhbDtcclxuICAgIGlmICh1bml0KSB7XHJcbiAgICAgICAgcmV0dXJuIHVuaXRMZXNzICsgdW5pdDtcclxuICAgIH1cclxuICAgIHJldHVybiB1bml0TGVzcztcclxufVxyXG5cclxuLy8gZ2V0VG90YWxMZW5ndGgoKSBlcXVpdmFsZW50IGZvciBjaXJjbGUsIHJlY3QsIHBvbHlsaW5lLCBwb2x5Z29uIGFuZCBsaW5lIHNoYXBlc1xyXG4vLyBhZGFwdGVkIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vU2ViTGFtYmxhLzNlMDU1MGM0OTZjMjM2NzA5NzQ0XHJcblxyXG5mdW5jdGlvbiBnZXREaXN0YW5jZShwMSwgcDIpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocDIueCAtIHAxLngsIDIpICsgTWF0aC5wb3cocDIueSAtIHAxLnksIDIpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2lyY2xlTGVuZ3RoKGVsKSB7XHJcbiAgICByZXR1cm4gTWF0aC5QSSAqIDIgKiBnZXRBdHRyaWJ1dGUoZWwsICdyJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJlY3RMZW5ndGgoZWwpIHtcclxuICAgIHJldHVybiAoZ2V0QXR0cmlidXRlKGVsLCAnd2lkdGgnKSAqIDIpICsgKGdldEF0dHJpYnV0ZShlbCwgJ2hlaWdodCcpICogMik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExpbmVMZW5ndGgoZWwpIHtcclxuICAgIHJldHVybiBnZXREaXN0YW5jZSh7XHJcbiAgICAgICAgeDogZ2V0QXR0cmlidXRlKGVsLCAneDEnKSxcclxuICAgICAgICB5OiBnZXRBdHRyaWJ1dGUoZWwsICd5MScpXHJcbiAgICB9LCB7XHJcbiAgICAgICAgeDogZ2V0QXR0cmlidXRlKGVsLCAneDInKSxcclxuICAgICAgICB5OiBnZXRBdHRyaWJ1dGUoZWwsICd5MicpXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UG9seWxpbmVMZW5ndGgoZWwpIHtcclxuICAgIHZhciBwb2ludHMgPSBlbC5wb2ludHM7XHJcbiAgICB2YXIgdG90YWxMZW5ndGggPSAwO1xyXG4gICAgdmFyIHByZXZpb3VzUG9zO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubnVtYmVyT2ZJdGVtczsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRQb3MgPSBwb2ludHMuZ2V0SXRlbShpKTtcclxuICAgICAgICBpZiAoaSA+IDApIHtcclxuICAgICAgICAgICAgdG90YWxMZW5ndGggKz0gZ2V0RGlzdGFuY2UocHJldmlvdXNQb3MsIGN1cnJlbnRQb3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmV2aW91c1BvcyA9IGN1cnJlbnRQb3M7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG90YWxMZW5ndGg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBvbHlnb25MZW5ndGgoZWwpIHtcclxuICAgIHZhciBwb2ludHMgPSBlbC5wb2ludHM7XHJcbiAgICByZXR1cm4gZ2V0UG9seWxpbmVMZW5ndGgoZWwpICsgZ2V0RGlzdGFuY2UocG9pbnRzLmdldEl0ZW0ocG9pbnRzLm51bWJlck9mSXRlbXMgLSAxKSwgcG9pbnRzLmdldEl0ZW0oMCkpO1xyXG59XHJcblxyXG4vLyBQYXRoIGFuaW1hdGlvblxyXG5cclxuZnVuY3Rpb24gZ2V0VG90YWxMZW5ndGgoZWwpIHtcclxuICAgIGlmIChlbC5nZXRUb3RhbExlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBlbC5nZXRUb3RhbExlbmd0aCgpO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoIChlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICBjYXNlICdjaXJjbGUnOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0Q2lyY2xlTGVuZ3RoKGVsKTtcclxuICAgICAgICBjYXNlICdyZWN0JzpcclxuICAgICAgICAgICAgcmV0dXJuIGdldFJlY3RMZW5ndGgoZWwpO1xyXG4gICAgICAgIGNhc2UgJ2xpbmUnOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0TGluZUxlbmd0aChlbCk7XHJcbiAgICAgICAgY2FzZSAncG9seWxpbmUnOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0UG9seWxpbmVMZW5ndGgoZWwpO1xyXG4gICAgICAgIGNhc2UgJ3BvbHlnb24nOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0UG9seWdvbkxlbmd0aChlbCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERhc2hvZmZzZXQoZWwpIHtcclxuICAgIHZhciBwYXRoTGVuZ3RoID0gZ2V0VG90YWxMZW5ndGgoZWwpO1xyXG4gICAgZWwuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgcGF0aExlbmd0aCk7XHJcbiAgICByZXR1cm4gcGF0aExlbmd0aDtcclxufVxyXG5cclxuLy8gTW90aW9uIHBhdGhcclxuXHJcbmZ1bmN0aW9uIGdldFBhcmVudFN2Z0VsKGVsKSB7XHJcbiAgICB2YXIgcGFyZW50RWwgPSBlbC5wYXJlbnROb2RlO1xyXG4gICAgd2hpbGUgKGlzLnN2ZyhwYXJlbnRFbCkpIHtcclxuICAgICAgICBpZiAoIWlzLnN2ZyhwYXJlbnRFbC5wYXJlbnROb2RlKSkge1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50RWwgPSBwYXJlbnRFbC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcmVudEVsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYXJlbnRTdmcocGF0aEVsLCBzdmdEYXRhKSB7XHJcbiAgICB2YXIgc3ZnID0gc3ZnRGF0YSB8fCB7fTtcclxuICAgIHZhciBwYXJlbnRTdmdFbCA9IHN2Zy5lbCB8fCBnZXRQYXJlbnRTdmdFbChwYXRoRWwpO1xyXG4gICAgdmFyIHJlY3QgPSBwYXJlbnRTdmdFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHZhciB2aWV3Qm94QXR0ciA9IGdldEF0dHJpYnV0ZShwYXJlbnRTdmdFbCwgJ3ZpZXdCb3gnKTtcclxuICAgIHZhciB3aWR0aCA9IHJlY3Qud2lkdGg7XHJcbiAgICB2YXIgaGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XHJcbiAgICB2YXIgdmlld0JveCA9IHN2Zy52aWV3Qm94IHx8ICh2aWV3Qm94QXR0ciA/IHZpZXdCb3hBdHRyLnNwbGl0KCcgJykgOiBbMCwgMCwgd2lkdGgsIGhlaWdodF0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlbDogcGFyZW50U3ZnRWwsXHJcbiAgICAgICAgdmlld0JveDogdmlld0JveCxcclxuICAgICAgICB4OiB2aWV3Qm94WzBdIC8gMSxcclxuICAgICAgICB5OiB2aWV3Qm94WzFdIC8gMSxcclxuICAgICAgICB3OiB3aWR0aCxcclxuICAgICAgICBoOiBoZWlnaHQsXHJcbiAgICAgICAgdlc6IHZpZXdCb3hbMl0sXHJcbiAgICAgICAgdkg6IHZpZXdCb3hbM11cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGF0aChwYXRoLCBwZXJjZW50KSB7XHJcbiAgICB2YXIgcGF0aEVsID0gaXMuc3RyKHBhdGgpID8gc2VsZWN0U3RyaW5nKHBhdGgpWzBdIDogcGF0aDtcclxuICAgIHZhciBwID0gcGVyY2VudCB8fCAxMDA7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24ocHJvcGVydHkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwcm9wZXJ0eTogcHJvcGVydHksXHJcbiAgICAgICAgICAgIGVsOiBwYXRoRWwsXHJcbiAgICAgICAgICAgIHN2ZzogZ2V0UGFyZW50U3ZnKHBhdGhFbCksXHJcbiAgICAgICAgICAgIHRvdGFsTGVuZ3RoOiBnZXRUb3RhbExlbmd0aChwYXRoRWwpICogKHAgLyAxMDApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQYXRoUHJvZ3Jlc3MocGF0aCwgcHJvZ3Jlc3MsIGlzUGF0aFRhcmdldEluc2lkZVNWRykge1xyXG4gICAgZnVuY3Rpb24gcG9pbnQob2Zmc2V0KSB7XHJcbiAgICAgICAgaWYgKG9mZnNldCA9PT0gdm9pZCAwKSBvZmZzZXQgPSAwO1xyXG5cclxuICAgICAgICB2YXIgbCA9IHByb2dyZXNzICsgb2Zmc2V0ID49IDEgPyBwcm9ncmVzcyArIG9mZnNldCA6IDA7XHJcbiAgICAgICAgcmV0dXJuIHBhdGguZWwuZ2V0UG9pbnRBdExlbmd0aChsKTtcclxuICAgIH1cclxuICAgIHZhciBzdmcgPSBnZXRQYXJlbnRTdmcocGF0aC5lbCwgcGF0aC5zdmcpO1xyXG4gICAgdmFyIHAgPSBwb2ludCgpO1xyXG4gICAgdmFyIHAwID0gcG9pbnQoLTEpO1xyXG4gICAgdmFyIHAxID0gcG9pbnQoKzEpO1xyXG4gICAgdmFyIHNjYWxlWCA9IGlzUGF0aFRhcmdldEluc2lkZVNWRyA/IDEgOiBzdmcudyAvIHN2Zy52VztcclxuICAgIHZhciBzY2FsZVkgPSBpc1BhdGhUYXJnZXRJbnNpZGVTVkcgPyAxIDogc3ZnLmggLyBzdmcudkg7XHJcbiAgICBzd2l0Y2ggKHBhdGgucHJvcGVydHkpIHtcclxuICAgICAgICBjYXNlICd4JzpcclxuICAgICAgICAgICAgcmV0dXJuIChwLnggLSBzdmcueCkgKiBzY2FsZVg7XHJcbiAgICAgICAgY2FzZSAneSc6XHJcbiAgICAgICAgICAgIHJldHVybiAocC55IC0gc3ZnLnkpICogc2NhbGVZO1xyXG4gICAgICAgIGNhc2UgJ2FuZ2xlJzpcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIocDEueSAtIHAwLnksIHAxLnggLSBwMC54KSAqIDE4MCAvIE1hdGguUEk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIERlY29tcG9zZSB2YWx1ZVxyXG5cclxuZnVuY3Rpb24gZGVjb21wb3NlVmFsdWUodmFsLCB1bml0KSB7XHJcbiAgICAvLyBjb25zdCByZ3ggPSAvLT9cXGQqXFwuP1xcZCsvZzsgLy8gaGFuZGxlcyBiYXNpYyBudW1iZXJzXHJcbiAgICAvLyBjb25zdCByZ3ggPSAvWystXT9cXGQrKD86XFwuXFxkKyk/KD86W2VFXVsrLV0/XFxkKyk/L2c7IC8vIGhhbmRsZXMgZXhwb25lbnRzIG5vdGF0aW9uXHJcbiAgICB2YXIgcmd4ID0gL1srLV0/XFxkKlxcLj9cXGQrKD86XFwuXFxkKyk/KD86W2VFXVsrLV0/XFxkKyk/L2c7IC8vIGhhbmRsZXMgZXhwb25lbnRzIG5vdGF0aW9uXHJcbiAgICB2YXIgdmFsdWUgPSB2YWxpZGF0ZVZhbHVlKChpcy5wdGgodmFsKSA/IHZhbC50b3RhbExlbmd0aCA6IHZhbCksIHVuaXQpICsgJyc7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG9yaWdpbmFsOiB2YWx1ZSxcclxuICAgICAgICBudW1iZXJzOiB2YWx1ZS5tYXRjaChyZ3gpID8gdmFsdWUubWF0Y2gocmd4KS5tYXAoTnVtYmVyKSA6IFswXSxcclxuICAgICAgICBzdHJpbmdzOiAoaXMuc3RyKHZhbCkgfHwgdW5pdCkgPyB2YWx1ZS5zcGxpdChyZ3gpIDogW11cclxuICAgIH1cclxufVxyXG5cclxuLy8gQW5pbWF0YWJsZXNcclxuXHJcbmZ1bmN0aW9uIHBhcnNlVGFyZ2V0cyh0YXJnZXRzKSB7XHJcbiAgICB2YXIgdGFyZ2V0c0FycmF5ID0gdGFyZ2V0cyA/IChmbGF0dGVuQXJyYXkoaXMuYXJyKHRhcmdldHMpID8gdGFyZ2V0cy5tYXAodG9BcnJheSkgOiB0b0FycmF5KHRhcmdldHMpKSkgOiBbXTtcclxuICAgIHJldHVybiBmaWx0ZXJBcnJheSh0YXJnZXRzQXJyYXksIGZ1bmN0aW9uKGl0ZW0sIHBvcywgc2VsZikge1xyXG4gICAgICAgIHJldHVybiBzZWxmLmluZGV4T2YoaXRlbSkgPT09IHBvcztcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBbmltYXRhYmxlcyh0YXJnZXRzKSB7XHJcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xyXG4gICAgcmV0dXJuIHBhcnNlZC5tYXAoZnVuY3Rpb24odCwgaSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRhcmdldDogdCxcclxuICAgICAgICAgICAgaWQ6IGksXHJcbiAgICAgICAgICAgIHRvdGFsOiBwYXJzZWQubGVuZ3RoLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm1zOiB7XHJcbiAgICAgICAgICAgICAgICBsaXN0OiBnZXRFbGVtZW50VHJhbnNmb3Jtcyh0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBQcm9wZXJ0aWVzXHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVQcm9wZXJ0eVR3ZWVucyhwcm9wLCB0d2VlblNldHRpbmdzKSB7XHJcbiAgICB2YXIgc2V0dGluZ3MgPSBjbG9uZU9iamVjdCh0d2VlblNldHRpbmdzKTtcclxuICAgIC8vIE92ZXJyaWRlIGR1cmF0aW9uIGlmIGVhc2luZyBpcyBhIHNwcmluZ1xyXG4gICAgaWYgKC9ec3ByaW5nLy50ZXN0KHNldHRpbmdzLmVhc2luZykpIHtcclxuICAgICAgICBzZXR0aW5ncy5kdXJhdGlvbiA9IHNwcmluZyhzZXR0aW5ncy5lYXNpbmcpO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzLmFycihwcm9wKSkge1xyXG4gICAgICAgIHZhciBsID0gcHJvcC5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGlzRnJvbVRvID0gKGwgPT09IDIgJiYgIWlzLm9iaihwcm9wWzBdKSk7XHJcbiAgICAgICAgaWYgKCFpc0Zyb21Ubykge1xyXG4gICAgICAgICAgICAvLyBEdXJhdGlvbiBkaXZpZGVkIGJ5IHRoZSBudW1iZXIgb2YgdHdlZW5zXHJcbiAgICAgICAgICAgIGlmICghaXMuZm5jKHR3ZWVuU2V0dGluZ3MuZHVyYXRpb24pKSB7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5kdXJhdGlvbiA9IHR3ZWVuU2V0dGluZ3MuZHVyYXRpb24gLyBsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gVHJhbnNmb3JtIFtmcm9tLCB0b10gdmFsdWVzIHNob3J0aGFuZCB0byBhIHZhbGlkIHR3ZWVuIHZhbHVlXHJcbiAgICAgICAgICAgIHByb3AgPSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZhciBwcm9wQXJyYXkgPSBpcy5hcnIocHJvcCkgPyBwcm9wIDogW3Byb3BdO1xyXG4gICAgcmV0dXJuIHByb3BBcnJheS5tYXAoZnVuY3Rpb24odiwgaSkge1xyXG4gICAgICAgIHZhciBvYmogPSAoaXMub2JqKHYpICYmICFpcy5wdGgodikpID8gdiA6IHtcclxuICAgICAgICAgICAgdmFsdWU6IHZcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIERlZmF1bHQgZGVsYXkgdmFsdWUgc2hvdWxkIG9ubHkgYmUgYXBwbGllZCB0byB0aGUgZmlyc3QgdHdlZW5cclxuICAgICAgICBpZiAoaXMudW5kKG9iai5kZWxheSkpIHtcclxuICAgICAgICAgICAgb2JqLmRlbGF5ID0gIWkgPyB0d2VlblNldHRpbmdzLmRlbGF5IDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRGVmYXVsdCBlbmREZWxheSB2YWx1ZSBzaG91bGQgb25seSBiZSBhcHBsaWVkIHRvIHRoZSBsYXN0IHR3ZWVuXHJcbiAgICAgICAgaWYgKGlzLnVuZChvYmouZW5kRGVsYXkpKSB7XHJcbiAgICAgICAgICAgIG9iai5lbmREZWxheSA9IGkgPT09IHByb3BBcnJheS5sZW5ndGggLSAxID8gdHdlZW5TZXR0aW5ncy5lbmREZWxheSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9KS5tYXAoZnVuY3Rpb24oaykge1xyXG4gICAgICAgIHJldHVybiBtZXJnZU9iamVjdHMoaywgc2V0dGluZ3MpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBmbGF0dGVuS2V5ZnJhbWVzKGtleWZyYW1lcykge1xyXG4gICAgdmFyIHByb3BlcnR5TmFtZXMgPSBmaWx0ZXJBcnJheShmbGF0dGVuQXJyYXkoa2V5ZnJhbWVzLm1hcChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGtleSk7XHJcbiAgICAgICAgfSkpLCBmdW5jdGlvbihwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpcy5rZXkocCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgaWYgKGEuaW5kZXhPZihiKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGEucHVzaChiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICB9LCBbXSk7XHJcbiAgICB2YXIgcHJvcGVydGllcyA9IHt9O1xyXG4gICAgdmFyIGxvb3AgPSBmdW5jdGlvbihpKSB7XHJcbiAgICAgICAgdmFyIHByb3BOYW1lID0gcHJvcGVydHlOYW1lc1tpXTtcclxuICAgICAgICBwcm9wZXJ0aWVzW3Byb3BOYW1lXSA9IGtleWZyYW1lcy5tYXAoZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdLZXkgPSB7fTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBrZXkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpcy5rZXkocCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocCA9PSBwcm9wTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdLZXkudmFsdWUgPSBrZXlbcF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdLZXlbcF0gPSBrZXlbcF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ld0tleTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eU5hbWVzLmxlbmd0aDsgaSsrKSBsb29wKGkpO1xyXG4gICAgcmV0dXJuIHByb3BlcnRpZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByb3BlcnRpZXModHdlZW5TZXR0aW5ncywgcGFyYW1zKSB7XHJcbiAgICB2YXIgcHJvcGVydGllcyA9IFtdO1xyXG4gICAgdmFyIGtleWZyYW1lcyA9IHBhcmFtcy5rZXlmcmFtZXM7XHJcbiAgICBpZiAoa2V5ZnJhbWVzKSB7XHJcbiAgICAgICAgcGFyYW1zID0gbWVyZ2VPYmplY3RzKGZsYXR0ZW5LZXlmcmFtZXMoa2V5ZnJhbWVzKSwgcGFyYW1zKTtcclxuICAgIH1cclxuICAgIGZvciAodmFyIHAgaW4gcGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKGlzLmtleShwKSkge1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogcCxcclxuICAgICAgICAgICAgICAgIHR3ZWVuczogbm9ybWFsaXplUHJvcGVydHlUd2VlbnMocGFyYW1zW3BdLCB0d2VlblNldHRpbmdzKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJvcGVydGllcztcclxufVxyXG5cclxuLy8gVHdlZW5zXHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVUd2VlblZhbHVlcyh0d2VlbiwgYW5pbWF0YWJsZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gdHdlZW4pIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSBnZXRGdW5jdGlvblZhbHVlKHR3ZWVuW3BdLCBhbmltYXRhYmxlKTtcclxuICAgICAgICBpZiAoaXMuYXJyKHZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLm1hcChmdW5jdGlvbih2KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0RnVuY3Rpb25WYWx1ZSh2LCBhbmltYXRhYmxlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdFtwXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgdC5kdXJhdGlvbiA9IHBhcnNlRmxvYXQodC5kdXJhdGlvbik7XHJcbiAgICB0LmRlbGF5ID0gcGFyc2VGbG9hdCh0LmRlbGF5KTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVUd2VlbnMocHJvcCwgYW5pbWF0YWJsZSkge1xyXG4gICAgdmFyIHByZXZpb3VzVHdlZW47XHJcbiAgICByZXR1cm4gcHJvcC50d2VlbnMubWFwKGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICB2YXIgdHdlZW4gPSBub3JtYWxpemVUd2VlblZhbHVlcyh0LCBhbmltYXRhYmxlKTtcclxuICAgICAgICB2YXIgdHdlZW5WYWx1ZSA9IHR3ZWVuLnZhbHVlO1xyXG4gICAgICAgIHZhciB0byA9IGlzLmFycih0d2VlblZhbHVlKSA/IHR3ZWVuVmFsdWVbMV0gOiB0d2VlblZhbHVlO1xyXG4gICAgICAgIHZhciB0b1VuaXQgPSBnZXRVbml0KHRvKTtcclxuICAgICAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUoYW5pbWF0YWJsZS50YXJnZXQsIHByb3AubmFtZSwgdG9Vbml0LCBhbmltYXRhYmxlKTtcclxuICAgICAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHByZXZpb3VzVHdlZW4gPyBwcmV2aW91c1R3ZWVuLnRvLm9yaWdpbmFsIDogb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICB2YXIgZnJvbSA9IGlzLmFycih0d2VlblZhbHVlKSA/IHR3ZWVuVmFsdWVbMF0gOiBwcmV2aW91c1ZhbHVlO1xyXG4gICAgICAgIHZhciBmcm9tVW5pdCA9IGdldFVuaXQoZnJvbSkgfHwgZ2V0VW5pdChvcmlnaW5hbFZhbHVlKTtcclxuICAgICAgICB2YXIgdW5pdCA9IHRvVW5pdCB8fCBmcm9tVW5pdDtcclxuICAgICAgICBpZiAoaXMudW5kKHRvKSkge1xyXG4gICAgICAgICAgICB0byA9IHByZXZpb3VzVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHR3ZWVuLmZyb20gPSBkZWNvbXBvc2VWYWx1ZShmcm9tLCB1bml0KTtcclxuICAgICAgICB0d2Vlbi50byA9IGRlY29tcG9zZVZhbHVlKGdldFJlbGF0aXZlVmFsdWUodG8sIGZyb20pLCB1bml0KTtcclxuICAgICAgICB0d2Vlbi5zdGFydCA9IHByZXZpb3VzVHdlZW4gPyBwcmV2aW91c1R3ZWVuLmVuZCA6IDA7XHJcbiAgICAgICAgdHdlZW4uZW5kID0gdHdlZW4uc3RhcnQgKyB0d2Vlbi5kZWxheSArIHR3ZWVuLmR1cmF0aW9uICsgdHdlZW4uZW5kRGVsYXk7XHJcbiAgICAgICAgdHdlZW4uZWFzaW5nID0gcGFyc2VFYXNpbmdzKHR3ZWVuLmVhc2luZywgdHdlZW4uZHVyYXRpb24pO1xyXG4gICAgICAgIHR3ZWVuLmlzUGF0aCA9IGlzLnB0aCh0d2VlblZhbHVlKTtcclxuICAgICAgICB0d2Vlbi5pc1BhdGhUYXJnZXRJbnNpZGVTVkcgPSB0d2Vlbi5pc1BhdGggJiYgaXMuc3ZnKGFuaW1hdGFibGUudGFyZ2V0KTtcclxuICAgICAgICB0d2Vlbi5pc0NvbG9yID0gaXMuY29sKHR3ZWVuLmZyb20ub3JpZ2luYWwpO1xyXG4gICAgICAgIGlmICh0d2Vlbi5pc0NvbG9yKSB7XHJcbiAgICAgICAgICAgIHR3ZWVuLnJvdW5kID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJldmlvdXNUd2VlbiA9IHR3ZWVuO1xyXG4gICAgICAgIHJldHVybiB0d2VlbjtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBUd2VlbiBwcm9ncmVzc1xyXG5cclxudmFyIHNldFByb2dyZXNzVmFsdWUgPSB7XHJcbiAgICBjc3M6IGZ1bmN0aW9uKHQsIHAsIHYpIHtcclxuICAgICAgICByZXR1cm4gdC5zdHlsZVtwXSA9IHY7XHJcbiAgICB9LFxyXG4gICAgYXR0cmlidXRlOiBmdW5jdGlvbih0LCBwLCB2KSB7XHJcbiAgICAgICAgcmV0dXJuIHQuc2V0QXR0cmlidXRlKHAsIHYpO1xyXG4gICAgfSxcclxuICAgIG9iamVjdDogZnVuY3Rpb24odCwgcCwgdikge1xyXG4gICAgICAgIHJldHVybiB0W3BdID0gdjtcclxuICAgIH0sXHJcbiAgICB0cmFuc2Zvcm06IGZ1bmN0aW9uKHQsIHAsIHYsIHRyYW5zZm9ybXMsIG1hbnVhbCkge1xyXG4gICAgICAgIHRyYW5zZm9ybXMubGlzdC5zZXQocCwgdik7XHJcbiAgICAgICAgaWYgKHAgPT09IHRyYW5zZm9ybXMubGFzdCB8fCBtYW51YWwpIHtcclxuICAgICAgICAgICAgdmFyIHN0ciA9ICcnO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm1zLmxpc3QuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgcHJvcCkge1xyXG4gICAgICAgICAgICAgICAgc3RyICs9IHByb3AgKyBcIihcIiArIHZhbHVlICsgXCIpIFwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdC5zdHlsZS50cmFuc2Zvcm0gPSBzdHI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gU2V0IFZhbHVlIGhlbHBlclxyXG5cclxuZnVuY3Rpb24gc2V0VGFyZ2V0c1ZhbHVlKHRhcmdldHMsIHByb3BlcnRpZXMpIHtcclxuICAgIHZhciBhbmltYXRhYmxlcyA9IGdldEFuaW1hdGFibGVzKHRhcmdldHMpO1xyXG4gICAgYW5pbWF0YWJsZXMuZm9yRWFjaChmdW5jdGlvbihhbmltYXRhYmxlKSB7XHJcbiAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gcHJvcGVydGllcykge1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBnZXRGdW5jdGlvblZhbHVlKHByb3BlcnRpZXNbcHJvcGVydHldLCBhbmltYXRhYmxlKTtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IGFuaW1hdGFibGUudGFyZ2V0O1xyXG4gICAgICAgICAgICB2YXIgdmFsdWVVbml0ID0gZ2V0VW5pdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHZhciBvcmlnaW5hbFZhbHVlID0gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZVVuaXQsIGFuaW1hdGFibGUpO1xyXG4gICAgICAgICAgICB2YXIgdW5pdCA9IHZhbHVlVW5pdCB8fCBnZXRVbml0KG9yaWdpbmFsVmFsdWUpO1xyXG4gICAgICAgICAgICB2YXIgdG8gPSBnZXRSZWxhdGl2ZVZhbHVlKHZhbGlkYXRlVmFsdWUodmFsdWUsIHVuaXQpLCBvcmlnaW5hbFZhbHVlKTtcclxuICAgICAgICAgICAgdmFyIGFuaW1UeXBlID0gZ2V0QW5pbWF0aW9uVHlwZSh0YXJnZXQsIHByb3BlcnR5KTtcclxuICAgICAgICAgICAgc2V0UHJvZ3Jlc3NWYWx1ZVthbmltVHlwZV0odGFyZ2V0LCBwcm9wZXJ0eSwgdG8sIGFuaW1hdGFibGUudHJhbnNmb3JtcywgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIEFuaW1hdGlvbnNcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFuaW1hdGlvbihhbmltYXRhYmxlLCBwcm9wKSB7XHJcbiAgICB2YXIgYW5pbVR5cGUgPSBnZXRBbmltYXRpb25UeXBlKGFuaW1hdGFibGUudGFyZ2V0LCBwcm9wLm5hbWUpO1xyXG4gICAgaWYgKGFuaW1UeXBlKSB7XHJcbiAgICAgICAgdmFyIHR3ZWVucyA9IG5vcm1hbGl6ZVR3ZWVucyhwcm9wLCBhbmltYXRhYmxlKTtcclxuICAgICAgICB2YXIgbGFzdFR3ZWVuID0gdHdlZW5zW3R3ZWVucy5sZW5ndGggLSAxXTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiBhbmltVHlwZSxcclxuICAgICAgICAgICAgcHJvcGVydHk6IHByb3AubmFtZSxcclxuICAgICAgICAgICAgYW5pbWF0YWJsZTogYW5pbWF0YWJsZSxcclxuICAgICAgICAgICAgdHdlZW5zOiB0d2VlbnMsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiBsYXN0VHdlZW4uZW5kLFxyXG4gICAgICAgICAgICBkZWxheTogdHdlZW5zWzBdLmRlbGF5LFxyXG4gICAgICAgICAgICBlbmREZWxheTogbGFzdFR3ZWVuLmVuZERlbGF5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRBbmltYXRpb25zKGFuaW1hdGFibGVzLCBwcm9wZXJ0aWVzKSB7XHJcbiAgICByZXR1cm4gZmlsdGVyQXJyYXkoZmxhdHRlbkFycmF5KGFuaW1hdGFibGVzLm1hcChmdW5jdGlvbihhbmltYXRhYmxlKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb3BlcnRpZXMubWFwKGZ1bmN0aW9uKHByb3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFuaW1hdGlvbihhbmltYXRhYmxlLCBwcm9wKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pKSwgZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiAhaXMudW5kKGEpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIENyZWF0ZSBJbnN0YW5jZVxyXG5cclxuZnVuY3Rpb24gZ2V0SW5zdGFuY2VUaW1pbmdzKGFuaW1hdGlvbnMsIHR3ZWVuU2V0dGluZ3MpIHtcclxuICAgIHZhciBhbmltTGVuZ3RoID0gYW5pbWF0aW9ucy5sZW5ndGg7XHJcbiAgICB2YXIgZ2V0VGxPZmZzZXQgPSBmdW5jdGlvbihhbmltKSB7XHJcbiAgICAgICAgcmV0dXJuIGFuaW0udGltZWxpbmVPZmZzZXQgPyBhbmltLnRpbWVsaW5lT2Zmc2V0IDogMDtcclxuICAgIH07XHJcbiAgICB2YXIgdGltaW5ncyA9IHt9O1xyXG4gICAgdGltaW5ncy5kdXJhdGlvbiA9IGFuaW1MZW5ndGggPyBNYXRoLm1heC5hcHBseShNYXRoLCBhbmltYXRpb25zLm1hcChmdW5jdGlvbihhbmltKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFRsT2Zmc2V0KGFuaW0pICsgYW5pbS5kdXJhdGlvbjtcclxuICAgIH0pKSA6IHR3ZWVuU2V0dGluZ3MuZHVyYXRpb247XHJcbiAgICB0aW1pbmdzLmRlbGF5ID0gYW5pbUxlbmd0aCA/IE1hdGgubWluLmFwcGx5KE1hdGgsIGFuaW1hdGlvbnMubWFwKGZ1bmN0aW9uKGFuaW0pIHtcclxuICAgICAgICByZXR1cm4gZ2V0VGxPZmZzZXQoYW5pbSkgKyBhbmltLmRlbGF5O1xyXG4gICAgfSkpIDogdHdlZW5TZXR0aW5ncy5kZWxheTtcclxuICAgIHRpbWluZ3MuZW5kRGVsYXkgPSBhbmltTGVuZ3RoID8gdGltaW5ncy5kdXJhdGlvbiAtIE1hdGgubWF4LmFwcGx5KE1hdGgsIGFuaW1hdGlvbnMubWFwKGZ1bmN0aW9uKGFuaW0pIHtcclxuICAgICAgICByZXR1cm4gZ2V0VGxPZmZzZXQoYW5pbSkgKyBhbmltLmR1cmF0aW9uIC0gYW5pbS5lbmREZWxheTtcclxuICAgIH0pKSA6IHR3ZWVuU2V0dGluZ3MuZW5kRGVsYXk7XHJcbiAgICByZXR1cm4gdGltaW5ncztcclxufVxyXG5cclxudmFyIGluc3RhbmNlSUQgPSAwO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmV3SW5zdGFuY2UocGFyYW1zKSB7XHJcbiAgICB2YXIgaW5zdGFuY2VTZXR0aW5ncyA9IHJlcGxhY2VPYmplY3RQcm9wcyhkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncywgcGFyYW1zKTtcclxuICAgIHZhciB0d2VlblNldHRpbmdzID0gcmVwbGFjZU9iamVjdFByb3BzKGRlZmF1bHRUd2VlblNldHRpbmdzLCBwYXJhbXMpO1xyXG4gICAgdmFyIHByb3BlcnRpZXMgPSBnZXRQcm9wZXJ0aWVzKHR3ZWVuU2V0dGluZ3MsIHBhcmFtcyk7XHJcbiAgICB2YXIgYW5pbWF0YWJsZXMgPSBnZXRBbmltYXRhYmxlcyhwYXJhbXMudGFyZ2V0cyk7XHJcbiAgICB2YXIgYW5pbWF0aW9ucyA9IGdldEFuaW1hdGlvbnMoYW5pbWF0YWJsZXMsIHByb3BlcnRpZXMpO1xyXG4gICAgdmFyIHRpbWluZ3MgPSBnZXRJbnN0YW5jZVRpbWluZ3MoYW5pbWF0aW9ucywgdHdlZW5TZXR0aW5ncyk7XHJcbiAgICB2YXIgaWQgPSBpbnN0YW5jZUlEO1xyXG4gICAgaW5zdGFuY2VJRCsrO1xyXG4gICAgcmV0dXJuIG1lcmdlT2JqZWN0cyhpbnN0YW5jZVNldHRpbmdzLCB7XHJcbiAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICBhbmltYXRhYmxlczogYW5pbWF0YWJsZXMsXHJcbiAgICAgICAgYW5pbWF0aW9uczogYW5pbWF0aW9ucyxcclxuICAgICAgICBkdXJhdGlvbjogdGltaW5ncy5kdXJhdGlvbixcclxuICAgICAgICBkZWxheTogdGltaW5ncy5kZWxheSxcclxuICAgICAgICBlbmREZWxheTogdGltaW5ncy5lbmREZWxheVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIENvcmVcclxuXHJcbnZhciBhY3RpdmVJbnN0YW5jZXMgPSBbXTtcclxuXHJcbnZhciBlbmdpbmUgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgcmFmO1xyXG5cclxuICAgIGZ1bmN0aW9uIHBsYXkoKSB7XHJcbiAgICAgICAgaWYgKCFyYWYgJiYgKCFpc0RvY3VtZW50SGlkZGVuKCkgfHwgIWFuaW1lLnN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4pICYmIGFjdGl2ZUluc3RhbmNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RlcCh0KSB7XHJcbiAgICAgICAgLy8gbWVtbyBvbiBhbGdvcml0aG0gaXNzdWU6XHJcbiAgICAgICAgLy8gZGFuZ2Vyb3VzIGl0ZXJhdGlvbiBvdmVyIG11dGFibGUgYGFjdGl2ZUluc3RhbmNlc2BcclxuICAgICAgICAvLyAodGhhdCBjb2xsZWN0aW9uIG1heSBiZSB1cGRhdGVkIGZyb20gd2l0aGluIGNhbGxiYWNrcyBvZiBgdGlja2AtZWQgYW5pbWF0aW9uIGluc3RhbmNlcylcclxuICAgICAgICB2YXIgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoID0gYWN0aXZlSW5zdGFuY2VzLmxlbmd0aDtcclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgd2hpbGUgKGkgPCBhY3RpdmVJbnN0YW5jZXNMZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGFjdGl2ZUluc3RhbmNlID0gYWN0aXZlSW5zdGFuY2VzW2ldO1xyXG4gICAgICAgICAgICBpZiAoIWFjdGl2ZUluc3RhbmNlLnBhdXNlZCkge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5zdGFuY2UudGljayh0KTtcclxuICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUluc3RhbmNlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbnN0YW5jZXNMZW5ndGgtLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByYWYgPSBpID4gMCA/IHJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKCkge1xyXG4gICAgICAgIGlmICghYW5pbWUuc3VzcGVuZFdoZW5Eb2N1bWVudEhpZGRlbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNEb2N1bWVudEhpZGRlbigpKSB7XHJcbiAgICAgICAgICAgIC8vIHN1c3BlbmQgdGlja3NcclxuICAgICAgICAgICAgcmFmID0gY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmKTtcclxuICAgICAgICB9IGVsc2UgeyAvLyBpcyBiYWNrIHRvIGFjdGl2ZSB0YWJcclxuICAgICAgICAgICAgLy8gZmlyc3QgYWRqdXN0IGFuaW1hdGlvbnMgdG8gY29uc2lkZXIgdGhlIHRpbWUgdGhhdCB0aWNrcyB3ZXJlIHN1c3BlbmRlZFxyXG4gICAgICAgICAgICBhY3RpdmVJbnN0YW5jZXMuZm9yRWFjaChcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLl9vbkRvY3VtZW50VmlzaWJpbGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBlbmdpbmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGxheTtcclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGlzRG9jdW1lbnRIaWRkZW4oKSB7XHJcbiAgICByZXR1cm4gISFkb2N1bWVudCAmJiBkb2N1bWVudC5oaWRkZW47XHJcbn1cclxuXHJcbi8vIFB1YmxpYyBJbnN0YW5jZVxyXG5cclxuZnVuY3Rpb24gYW5pbWUocGFyYW1zKSB7XHJcbiAgICBpZiAocGFyYW1zID09PSB2b2lkIDApIHBhcmFtcyA9IHt9O1xyXG5cclxuXHJcbiAgICB2YXIgc3RhcnRUaW1lID0gMCxcclxuICAgICAgICBsYXN0VGltZSA9IDAsXHJcbiAgICAgICAgbm93ID0gMDtcclxuICAgIHZhciBjaGlsZHJlbiwgY2hpbGRyZW5MZW5ndGggPSAwO1xyXG4gICAgdmFyIHJlc29sdmUgPSBudWxsO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1ha2VQcm9taXNlKGluc3RhbmNlKSB7XHJcbiAgICAgICAgdmFyIHByb21pc2UgPSB3aW5kb3cuUHJvbWlzZSAmJiBuZXcgUHJvbWlzZShmdW5jdGlvbihfcmVzb2x2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSA9IF9yZXNvbHZlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGluc3RhbmNlLmZpbmlzaGVkID0gcHJvbWlzZTtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaW5zdGFuY2UgPSBjcmVhdGVOZXdJbnN0YW5jZShwYXJhbXMpO1xyXG4gICAgdmFyIHByb21pc2UgPSBtYWtlUHJvbWlzZShpbnN0YW5jZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGluc3RhbmNlLmRpcmVjdGlvbjtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uICE9PSAnYWx0ZXJuYXRlJykge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5kaXJlY3Rpb24gPSBkaXJlY3Rpb24gIT09ICdub3JtYWwnID8gJ25vcm1hbCcgOiAncmV2ZXJzZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluc3RhbmNlLnJldmVyc2VkID0gIWluc3RhbmNlLnJldmVyc2VkO1xyXG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoaWxkLnJldmVyc2VkID0gaW5zdGFuY2UucmV2ZXJzZWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRqdXN0VGltZSh0aW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnJldmVyc2VkID8gaW5zdGFuY2UuZHVyYXRpb24gLSB0aW1lIDogdGltZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXNldFRpbWUoKSB7XHJcbiAgICAgICAgc3RhcnRUaW1lID0gMDtcclxuICAgICAgICBsYXN0VGltZSA9IGFkanVzdFRpbWUoaW5zdGFuY2UuY3VycmVudFRpbWUpICogKDEgLyBhbmltZS5zcGVlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2Vla0NoaWxkKHRpbWUsIGNoaWxkKSB7XHJcbiAgICAgICAgaWYgKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLnNlZWsodGltZSAtIGNoaWxkLnRpbWVsaW5lT2Zmc2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3luY0luc3RhbmNlQ2hpbGRyZW4odGltZSkge1xyXG4gICAgICAgIGlmICghaW5zdGFuY2UucmV2ZXJzZVBsYXliYWNrKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc2Vla0NoaWxkKHRpbWUsIGNoaWxkcmVuW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkkMSA9IGNoaWxkcmVuTGVuZ3RoOyBpJDEtLTspIHtcclxuICAgICAgICAgICAgICAgIHNlZWtDaGlsZCh0aW1lLCBjaGlsZHJlbltpJDFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zVGltZSkge1xyXG4gICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICB2YXIgYW5pbWF0aW9ucyA9IGluc3RhbmNlLmFuaW1hdGlvbnM7XHJcbiAgICAgICAgdmFyIGFuaW1hdGlvbnNMZW5ndGggPSBhbmltYXRpb25zLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAoaSA8IGFuaW1hdGlvbnNMZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGFuaW0gPSBhbmltYXRpb25zW2ldO1xyXG4gICAgICAgICAgICB2YXIgYW5pbWF0YWJsZSA9IGFuaW0uYW5pbWF0YWJsZTtcclxuICAgICAgICAgICAgdmFyIHR3ZWVucyA9IGFuaW0udHdlZW5zO1xyXG4gICAgICAgICAgICB2YXIgdHdlZW5MZW5ndGggPSB0d2VlbnMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgdmFyIHR3ZWVuID0gdHdlZW5zW3R3ZWVuTGVuZ3RoXTtcclxuICAgICAgICAgICAgLy8gT25seSBjaGVjayBmb3Iga2V5ZnJhbWVzIGlmIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgdHdlZW5cclxuICAgICAgICAgICAgaWYgKHR3ZWVuTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0d2VlbiA9IGZpbHRlckFycmF5KHR3ZWVucywgZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoaW5zVGltZSA8IHQuZW5kKTtcclxuICAgICAgICAgICAgICAgIH0pWzBdIHx8IHR3ZWVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBlbGFwc2VkID0gbWluTWF4KGluc1RpbWUgLSB0d2Vlbi5zdGFydCAtIHR3ZWVuLmRlbGF5LCAwLCB0d2Vlbi5kdXJhdGlvbikgLyB0d2Vlbi5kdXJhdGlvbjtcclxuICAgICAgICAgICAgdmFyIGVhc2VkID0gaXNOYU4oZWxhcHNlZCkgPyAxIDogdHdlZW4uZWFzaW5nKGVsYXBzZWQpO1xyXG4gICAgICAgICAgICB2YXIgc3RyaW5ncyA9IHR3ZWVuLnRvLnN0cmluZ3M7XHJcbiAgICAgICAgICAgIHZhciByb3VuZCA9IHR3ZWVuLnJvdW5kO1xyXG4gICAgICAgICAgICB2YXIgbnVtYmVycyA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgdG9OdW1iZXJzTGVuZ3RoID0gdHdlZW4udG8ubnVtYmVycy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9ICh2b2lkIDApO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHRvTnVtYmVyc0xlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSAodm9pZCAwKTtcclxuICAgICAgICAgICAgICAgIHZhciB0b051bWJlciA9IHR3ZWVuLnRvLm51bWJlcnNbbl07XHJcbiAgICAgICAgICAgICAgICB2YXIgZnJvbU51bWJlciA9IHR3ZWVuLmZyb20ubnVtYmVyc1tuXSB8fCAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0d2Vlbi5pc1BhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGZyb21OdW1iZXIgKyAoZWFzZWQgKiAodG9OdW1iZXIgLSBmcm9tTnVtYmVyKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZ2V0UGF0aFByb2dyZXNzKHR3ZWVuLnZhbHVlLCBlYXNlZCAqIHRvTnVtYmVyLCB0d2Vlbi5pc1BhdGhUYXJnZXRJbnNpZGVTVkcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodHdlZW4uaXNDb2xvciAmJiBuID4gMikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlICogcm91bmQpIC8gcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbnVtYmVycy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBNYW51YWwgQXJyYXkucmVkdWNlIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2VzXHJcbiAgICAgICAgICAgIHZhciBzdHJpbmdzTGVuZ3RoID0gc3RyaW5ncy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmICghc3RyaW5nc0xlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBudW1iZXJzWzBdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBzdHJpbmdzWzBdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcyA9IDA7IHMgPCBzdHJpbmdzTGVuZ3RoOyBzKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYSA9IHN0cmluZ3Nbc107XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGIgPSBzdHJpbmdzW3MgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbiQxID0gbnVtYmVyc1tzXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKG4kMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcyArPSBuJDEgKyAnICc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcyArPSBuJDEgKyBiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNldFByb2dyZXNzVmFsdWVbYW5pbS50eXBlXShhbmltYXRhYmxlLnRhcmdldCwgYW5pbS5wcm9wZXJ0eSwgcHJvZ3Jlc3MsIGFuaW1hdGFibGUudHJhbnNmb3Jtcyk7XHJcbiAgICAgICAgICAgIGFuaW0uY3VycmVudFZhbHVlID0gcHJvZ3Jlc3M7XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q2FsbGJhY2soY2IpIHtcclxuICAgICAgICBpZiAoaW5zdGFuY2VbY2JdICYmICFpbnN0YW5jZS5wYXNzVGhyb3VnaCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZVtjYl0oaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb3VudEl0ZXJhdGlvbigpIHtcclxuICAgICAgICBpZiAoaW5zdGFuY2UucmVtYWluaW5nICYmIGluc3RhbmNlLnJlbWFpbmluZyAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5yZW1haW5pbmctLTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0SW5zdGFuY2VQcm9ncmVzcyhlbmdpbmVUaW1lKSB7XHJcbiAgICAgICAgdmFyIGluc0R1cmF0aW9uID0gaW5zdGFuY2UuZHVyYXRpb247XHJcbiAgICAgICAgdmFyIGluc0RlbGF5ID0gaW5zdGFuY2UuZGVsYXk7XHJcbiAgICAgICAgdmFyIGluc0VuZERlbGF5ID0gaW5zRHVyYXRpb24gLSBpbnN0YW5jZS5lbmREZWxheTtcclxuICAgICAgICB2YXIgaW5zVGltZSA9IGFkanVzdFRpbWUoZW5naW5lVGltZSk7XHJcbiAgICAgICAgaW5zdGFuY2UucHJvZ3Jlc3MgPSBtaW5NYXgoKGluc1RpbWUgLyBpbnNEdXJhdGlvbikgKiAxMDAsIDAsIDEwMCk7XHJcbiAgICAgICAgaW5zdGFuY2UucmV2ZXJzZVBsYXliYWNrID0gaW5zVGltZSA8IGluc3RhbmNlLmN1cnJlbnRUaW1lO1xyXG4gICAgICAgIGlmIChjaGlsZHJlbikge1xyXG4gICAgICAgICAgICBzeW5jSW5zdGFuY2VDaGlsZHJlbihpbnNUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZS5iZWdhbiAmJiBpbnN0YW5jZS5jdXJyZW50VGltZSA+IDApIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UuYmVnYW4gPSB0cnVlO1xyXG4gICAgICAgICAgICBzZXRDYWxsYmFjaygnYmVnaW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZS5sb29wQmVnYW4gJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLmxvb3BCZWdhbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHNldENhbGxiYWNrKCdsb29wQmVnaW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluc1RpbWUgPD0gaW5zRGVsYXkgJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgIT09IDApIHtcclxuICAgICAgICAgICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKGluc1RpbWUgPj0gaW5zRW5kRGVsYXkgJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgIT09IGluc0R1cmF0aW9uKSB8fCAhaW5zRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc0R1cmF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluc1RpbWUgPiBpbnNEZWxheSAmJiBpbnNUaW1lIDwgaW5zRW5kRGVsYXkpIHtcclxuICAgICAgICAgICAgaWYgKCFpbnN0YW5jZS5jaGFuZ2VCZWdhbikge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuY2hhbmdlQmVnYW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuY2hhbmdlQ29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzZXRDYWxsYmFjaygnY2hhbmdlQmVnaW4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRDYWxsYmFjaygnY2hhbmdlJyk7XHJcbiAgICAgICAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNUaW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UuY2hhbmdlQmVnYW4pIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5jaGFuZ2VCZWdhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2V0Q2FsbGJhY2soJ2NoYW5nZUNvbXBsZXRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW5zdGFuY2UuY3VycmVudFRpbWUgPSBtaW5NYXgoaW5zVGltZSwgMCwgaW5zRHVyYXRpb24pO1xyXG4gICAgICAgIGlmIChpbnN0YW5jZS5iZWdhbikge1xyXG4gICAgICAgICAgICBzZXRDYWxsYmFjaygndXBkYXRlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbmdpbmVUaW1lID49IGluc0R1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGxhc3RUaW1lID0gMDtcclxuICAgICAgICAgICAgY291bnRJdGVyYXRpb24oKTtcclxuICAgICAgICAgICAgaWYgKCFpbnN0YW5jZS5yZW1haW5pbmcpIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLnBhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWluc3RhbmNlLmNvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2FsbGJhY2soJ2xvb3BDb21wbGV0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENhbGxiYWNrKCdjb21wbGV0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5zdGFuY2UucGFzc1Rocm91Z2ggJiYgJ1Byb21pc2UnIGluIHdpbmRvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2UgPSBtYWtlUHJvbWlzZShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lID0gbm93O1xyXG4gICAgICAgICAgICAgICAgc2V0Q2FsbGJhY2soJ2xvb3BDb21wbGV0ZScpO1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UubG9vcEJlZ2FuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2UuZGlyZWN0aW9uID09PSAnYWx0ZXJuYXRlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5zdGFuY2UucmVzZXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZGlyZWN0aW9uID0gaW5zdGFuY2UuZGlyZWN0aW9uO1xyXG4gICAgICAgIGluc3RhbmNlLnBhc3NUaHJvdWdoID0gZmFsc2U7XHJcbiAgICAgICAgaW5zdGFuY2UuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgIGluc3RhbmNlLnByb2dyZXNzID0gMDtcclxuICAgICAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgIGluc3RhbmNlLmJlZ2FuID0gZmFsc2U7XHJcbiAgICAgICAgaW5zdGFuY2UubG9vcEJlZ2FuID0gZmFsc2U7XHJcbiAgICAgICAgaW5zdGFuY2UuY2hhbmdlQmVnYW4gPSBmYWxzZTtcclxuICAgICAgICBpbnN0YW5jZS5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICBpbnN0YW5jZS5jaGFuZ2VDb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICBpbnN0YW5jZS5yZXZlcnNlUGxheWJhY2sgPSBmYWxzZTtcclxuICAgICAgICBpbnN0YW5jZS5yZXZlcnNlZCA9IGRpcmVjdGlvbiA9PT0gJ3JldmVyc2UnO1xyXG4gICAgICAgIGluc3RhbmNlLnJlbWFpbmluZyA9IGluc3RhbmNlLmxvb3A7XHJcbiAgICAgICAgY2hpbGRyZW4gPSBpbnN0YW5jZS5jaGlsZHJlbjtcclxuICAgICAgICBjaGlsZHJlbkxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICBmb3IgKHZhciBpID0gY2hpbGRyZW5MZW5ndGg7IGktLTspIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UuY2hpbGRyZW5baV0ucmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLnJldmVyc2VkICYmIGluc3RhbmNlLmxvb3AgIT09IHRydWUgfHwgKGRpcmVjdGlvbiA9PT0gJ2FsdGVybmF0ZScgJiYgaW5zdGFuY2UubG9vcCA9PT0gMSkpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UucmVtYWluaW5nKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnN0YW5jZS5yZXZlcnNlZCA/IGluc3RhbmNlLmR1cmF0aW9uIDogMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGludGVybmFsIG1ldGhvZCAoZm9yIGVuZ2luZSkgdG8gYWRqdXN0IGFuaW1hdGlvbiB0aW1pbmdzIGJlZm9yZSByZXN0b3JpbmcgZW5naW5lIHRpY2tzIChyQUYpXHJcbiAgICBpbnN0YW5jZS5fb25Eb2N1bWVudFZpc2liaWxpdHkgPSByZXNldFRpbWU7XHJcblxyXG4gICAgLy8gU2V0IFZhbHVlIGhlbHBlclxyXG5cclxuICAgIGluc3RhbmNlLnNldCA9IGZ1bmN0aW9uKHRhcmdldHMsIHByb3BlcnRpZXMpIHtcclxuICAgICAgICBzZXRUYXJnZXRzVmFsdWUodGFyZ2V0cywgcHJvcGVydGllcyk7XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnN0YW5jZS50aWNrID0gZnVuY3Rpb24odCkge1xyXG4gICAgICAgIG5vdyA9IHQ7XHJcbiAgICAgICAgaWYgKCFzdGFydFRpbWUpIHtcclxuICAgICAgICAgICAgc3RhcnRUaW1lID0gbm93O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRJbnN0YW5jZVByb2dyZXNzKChub3cgKyAobGFzdFRpbWUgLSBzdGFydFRpbWUpKSAqIGFuaW1lLnNwZWVkKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zdGFuY2Uuc2VlayA9IGZ1bmN0aW9uKHRpbWUpIHtcclxuICAgICAgICBzZXRJbnN0YW5jZVByb2dyZXNzKGFkanVzdFRpbWUodGltZSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnN0YW5jZS5wYXVzZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGluc3RhbmNlLnBhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgcmVzZXRUaW1lKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGluc3RhbmNlLnBsYXkgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoIWluc3RhbmNlLnBhdXNlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbnN0YW5jZS5jb21wbGV0ZWQpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UucmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5zdGFuY2UucGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgYWN0aXZlSW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpO1xyXG4gICAgICAgIHJlc2V0VGltZSgpO1xyXG4gICAgICAgIGVuZ2luZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnN0YW5jZS5yZXZlcnNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24oKTtcclxuICAgICAgICBpbnN0YW5jZS5jb21wbGV0ZWQgPSBpbnN0YW5jZS5yZXZlcnNlZCA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICByZXNldFRpbWUoKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zdGFuY2UucmVzdGFydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGluc3RhbmNlLnJlc2V0KCk7XHJcbiAgICAgICAgaW5zdGFuY2UucGxheSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnN0YW5jZS5yZW1vdmUgPSBmdW5jdGlvbih0YXJnZXRzKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldHNBcnJheSA9IHBhcnNlVGFyZ2V0cyh0YXJnZXRzKTtcclxuICAgICAgICByZW1vdmVUYXJnZXRzRnJvbUluc3RhbmNlKHRhcmdldHNBcnJheSwgaW5zdGFuY2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnN0YW5jZS5yZXNldCgpO1xyXG5cclxuICAgIGlmIChpbnN0YW5jZS5hdXRvcGxheSkge1xyXG4gICAgICAgIGluc3RhbmNlLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcblxyXG59XHJcblxyXG4vLyBSZW1vdmUgdGFyZ2V0cyBmcm9tIGFuaW1hdGlvblxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgYW5pbWF0aW9ucykge1xyXG4gICAgZm9yICh2YXIgYSA9IGFuaW1hdGlvbnMubGVuZ3RoOyBhLS07KSB7XHJcbiAgICAgICAgaWYgKGFycmF5Q29udGFpbnModGFyZ2V0c0FycmF5LCBhbmltYXRpb25zW2FdLmFuaW1hdGFibGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICBhbmltYXRpb25zLnNwbGljZShhLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UodGFyZ2V0c0FycmF5LCBpbnN0YW5jZSkge1xyXG4gICAgdmFyIGFuaW1hdGlvbnMgPSBpbnN0YW5jZS5hbmltYXRpb25zO1xyXG4gICAgdmFyIGNoaWxkcmVuID0gaW5zdGFuY2UuY2hpbGRyZW47XHJcbiAgICByZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnModGFyZ2V0c0FycmF5LCBhbmltYXRpb25zKTtcclxuICAgIGZvciAodmFyIGMgPSBjaGlsZHJlbi5sZW5ndGg7IGMtLTspIHtcclxuICAgICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltjXTtcclxuICAgICAgICB2YXIgY2hpbGRBbmltYXRpb25zID0gY2hpbGQuYW5pbWF0aW9ucztcclxuICAgICAgICByZW1vdmVUYXJnZXRzRnJvbUFuaW1hdGlvbnModGFyZ2V0c0FycmF5LCBjaGlsZEFuaW1hdGlvbnMpO1xyXG4gICAgICAgIGlmICghY2hpbGRBbmltYXRpb25zLmxlbmd0aCAmJiAhY2hpbGQuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNoaWxkcmVuLnNwbGljZShjLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWFuaW1hdGlvbnMubGVuZ3RoICYmICFjaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICBpbnN0YW5jZS5wYXVzZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVUYXJnZXRzRnJvbUFjdGl2ZUluc3RhbmNlcyh0YXJnZXRzKSB7XHJcbiAgICB2YXIgdGFyZ2V0c0FycmF5ID0gcGFyc2VUYXJnZXRzKHRhcmdldHMpO1xyXG4gICAgZm9yICh2YXIgaSA9IGFjdGl2ZUluc3RhbmNlcy5sZW5ndGg7IGktLTspIHtcclxuICAgICAgICB2YXIgaW5zdGFuY2UgPSBhY3RpdmVJbnN0YW5jZXNbaV07XHJcbiAgICAgICAgcmVtb3ZlVGFyZ2V0c0Zyb21JbnN0YW5jZSh0YXJnZXRzQXJyYXksIGluc3RhbmNlKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gU3RhZ2dlciBoZWxwZXJzXHJcblxyXG5mdW5jdGlvbiBzdGFnZ2VyKHZhbCwgcGFyYW1zKSB7XHJcbiAgICBpZiAocGFyYW1zID09PSB2b2lkIDApIHBhcmFtcyA9IHt9O1xyXG5cclxuICAgIHZhciBkaXJlY3Rpb24gPSBwYXJhbXMuZGlyZWN0aW9uIHx8ICdub3JtYWwnO1xyXG4gICAgdmFyIGVhc2luZyA9IHBhcmFtcy5lYXNpbmcgPyBwYXJzZUVhc2luZ3MocGFyYW1zLmVhc2luZykgOiBudWxsO1xyXG4gICAgdmFyIGdyaWQgPSBwYXJhbXMuZ3JpZDtcclxuICAgIHZhciBheGlzID0gcGFyYW1zLmF4aXM7XHJcbiAgICB2YXIgZnJvbUluZGV4ID0gcGFyYW1zLmZyb20gfHwgMDtcclxuICAgIHZhciBmcm9tRmlyc3QgPSBmcm9tSW5kZXggPT09ICdmaXJzdCc7XHJcbiAgICB2YXIgZnJvbUNlbnRlciA9IGZyb21JbmRleCA9PT0gJ2NlbnRlcic7XHJcbiAgICB2YXIgZnJvbUxhc3QgPSBmcm9tSW5kZXggPT09ICdsYXN0JztcclxuICAgIHZhciBpc1JhbmdlID0gaXMuYXJyKHZhbCk7XHJcbiAgICB2YXIgdmFsMSA9IGlzUmFuZ2UgPyBwYXJzZUZsb2F0KHZhbFswXSkgOiBwYXJzZUZsb2F0KHZhbCk7XHJcbiAgICB2YXIgdmFsMiA9IGlzUmFuZ2UgPyBwYXJzZUZsb2F0KHZhbFsxXSkgOiAwO1xyXG4gICAgdmFyIHVuaXQgPSBnZXRVbml0KGlzUmFuZ2UgPyB2YWxbMV0gOiB2YWwpIHx8IDA7XHJcbiAgICB2YXIgc3RhcnQgPSBwYXJhbXMuc3RhcnQgfHwgMCArIChpc1JhbmdlID8gdmFsMSA6IDApO1xyXG4gICAgdmFyIHZhbHVlcyA9IFtdO1xyXG4gICAgdmFyIG1heFZhbHVlID0gMDtcclxuICAgIHJldHVybiBmdW5jdGlvbihlbCwgaSwgdCkge1xyXG4gICAgICAgIGlmIChmcm9tRmlyc3QpIHtcclxuICAgICAgICAgICAgZnJvbUluZGV4ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZyb21DZW50ZXIpIHtcclxuICAgICAgICAgICAgZnJvbUluZGV4ID0gKHQgLSAxKSAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmcm9tTGFzdCkge1xyXG4gICAgICAgICAgICBmcm9tSW5kZXggPSB0IC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF2YWx1ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWdyaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChNYXRoLmFicyhmcm9tSW5kZXggLSBpbmRleCkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZnJvbVggPSAhZnJvbUNlbnRlciA/IGZyb21JbmRleCAlIGdyaWRbMF0gOiAoZ3JpZFswXSAtIDEpIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZnJvbVkgPSAhZnJvbUNlbnRlciA/IE1hdGguZmxvb3IoZnJvbUluZGV4IC8gZ3JpZFswXSkgOiAoZ3JpZFsxXSAtIDEpIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG9YID0gaW5kZXggJSBncmlkWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b1kgPSBNYXRoLmZsb29yKGluZGV4IC8gZ3JpZFswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlWCA9IGZyb21YIC0gdG9YO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZVkgPSBmcm9tWSAtIHRvWTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBNYXRoLnNxcnQoZGlzdGFuY2VYICogZGlzdGFuY2VYICsgZGlzdGFuY2VZICogZGlzdGFuY2VZKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXhpcyA9PT0gJ3gnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gLWRpc3RhbmNlWDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF4aXMgPT09ICd5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IC1kaXN0YW5jZVk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1heFZhbHVlID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgdmFsdWVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZWFzaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlYXNpbmcodmFsIC8gbWF4VmFsdWUpICogbWF4VmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAncmV2ZXJzZScpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlcyA9IHZhbHVlcy5tYXAoZnVuY3Rpb24odmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF4aXMgPyAodmFsIDwgMCkgPyB2YWwgKiAtMSA6IC12YWwgOiBNYXRoLmFicyhtYXhWYWx1ZSAtIHZhbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3BhY2luZyA9IGlzUmFuZ2UgPyAodmFsMiAtIHZhbDEpIC8gbWF4VmFsdWUgOiB2YWwxO1xyXG4gICAgICAgIHJldHVybiBzdGFydCArIChzcGFjaW5nICogKE1hdGgucm91bmQodmFsdWVzW2ldICogMTAwKSAvIDEwMCkpICsgdW5pdDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gVGltZWxpbmVcclxuXHJcbmZ1bmN0aW9uIHRpbWVsaW5lKHBhcmFtcykge1xyXG4gICAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSBwYXJhbXMgPSB7fTtcclxuXHJcbiAgICB2YXIgdGwgPSBhbmltZShwYXJhbXMpO1xyXG4gICAgdGwuZHVyYXRpb24gPSAwO1xyXG4gICAgdGwuYWRkID0gZnVuY3Rpb24oaW5zdGFuY2VQYXJhbXMsIHRpbWVsaW5lT2Zmc2V0KSB7XHJcbiAgICAgICAgdmFyIHRsSW5kZXggPSBhY3RpdmVJbnN0YW5jZXMuaW5kZXhPZih0bCk7XHJcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGwuY2hpbGRyZW47XHJcbiAgICAgICAgaWYgKHRsSW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICBhY3RpdmVJbnN0YW5jZXMuc3BsaWNlKHRsSW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcGFzc1Rocm91Z2goaW5zKSB7XHJcbiAgICAgICAgICAgIGlucy5wYXNzVGhyb3VnaCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcGFzc1Rocm91Z2goY2hpbGRyZW5baV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaW5zUGFyYW1zID0gbWVyZ2VPYmplY3RzKGluc3RhbmNlUGFyYW1zLCByZXBsYWNlT2JqZWN0UHJvcHMoZGVmYXVsdFR3ZWVuU2V0dGluZ3MsIHBhcmFtcykpO1xyXG4gICAgICAgIGluc1BhcmFtcy50YXJnZXRzID0gaW5zUGFyYW1zLnRhcmdldHMgfHwgcGFyYW1zLnRhcmdldHM7XHJcbiAgICAgICAgdmFyIHRsRHVyYXRpb24gPSB0bC5kdXJhdGlvbjtcclxuICAgICAgICBpbnNQYXJhbXMuYXV0b3BsYXkgPSBmYWxzZTtcclxuICAgICAgICBpbnNQYXJhbXMuZGlyZWN0aW9uID0gdGwuZGlyZWN0aW9uO1xyXG4gICAgICAgIGluc1BhcmFtcy50aW1lbGluZU9mZnNldCA9IGlzLnVuZCh0aW1lbGluZU9mZnNldCkgPyB0bER1cmF0aW9uIDogZ2V0UmVsYXRpdmVWYWx1ZSh0aW1lbGluZU9mZnNldCwgdGxEdXJhdGlvbik7XHJcbiAgICAgICAgcGFzc1Rocm91Z2godGwpO1xyXG4gICAgICAgIHRsLnNlZWsoaW5zUGFyYW1zLnRpbWVsaW5lT2Zmc2V0KTtcclxuICAgICAgICB2YXIgaW5zID0gYW5pbWUoaW5zUGFyYW1zKTtcclxuICAgICAgICBwYXNzVGhyb3VnaChpbnMpO1xyXG4gICAgICAgIGNoaWxkcmVuLnB1c2goaW5zKTtcclxuICAgICAgICB2YXIgdGltaW5ncyA9IGdldEluc3RhbmNlVGltaW5ncyhjaGlsZHJlbiwgcGFyYW1zKTtcclxuICAgICAgICB0bC5kZWxheSA9IHRpbWluZ3MuZGVsYXk7XHJcbiAgICAgICAgdGwuZW5kRGVsYXkgPSB0aW1pbmdzLmVuZERlbGF5O1xyXG4gICAgICAgIHRsLmR1cmF0aW9uID0gdGltaW5ncy5kdXJhdGlvbjtcclxuICAgICAgICB0bC5zZWVrKDApO1xyXG4gICAgICAgIHRsLnJlc2V0KCk7XHJcbiAgICAgICAgaWYgKHRsLmF1dG9wbGF5KSB7XHJcbiAgICAgICAgICAgIHRsLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRsO1xyXG4gICAgfTtcclxuICAgIHJldHVybiB0bDtcclxufVxyXG5cclxuYW5pbWUudmVyc2lvbiA9ICczLjIuMSc7XHJcbmFuaW1lLnNwZWVkID0gMTtcclxuLy8gVE9ETzojcmV2aWV3OiBuYW1pbmcsIGRvY3VtZW50YXRpb25cclxuYW5pbWUuc3VzcGVuZFdoZW5Eb2N1bWVudEhpZGRlbiA9IHRydWU7XHJcbmFuaW1lLnJ1bm5pbmcgPSBhY3RpdmVJbnN0YW5jZXM7XHJcbmFuaW1lLnJlbW92ZSA9IHJlbW92ZVRhcmdldHNGcm9tQWN0aXZlSW5zdGFuY2VzO1xyXG5hbmltZS5nZXQgPSBnZXRPcmlnaW5hbFRhcmdldFZhbHVlO1xyXG5hbmltZS5zZXQgPSBzZXRUYXJnZXRzVmFsdWU7XHJcbmFuaW1lLmNvbnZlcnRQeCA9IGNvbnZlcnRQeFRvVW5pdDtcclxuYW5pbWUucGF0aCA9IGdldFBhdGg7XHJcbmFuaW1lLnNldERhc2hvZmZzZXQgPSBzZXREYXNob2Zmc2V0O1xyXG5hbmltZS5zdGFnZ2VyID0gc3RhZ2dlcjtcclxuYW5pbWUudGltZWxpbmUgPSB0aW1lbGluZTtcclxuYW5pbWUuZWFzaW5nID0gcGFyc2VFYXNpbmdzO1xyXG5hbmltZS5wZW5uZXIgPSBwZW5uZXI7XHJcbmFuaW1lLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYW5pbWU7XHJcbiIsIi8qIVxyXG5XYXlwb2ludHMgLSA0LjAuMVxyXG5Db3B5cmlnaHQgwqkgMjAxMS0yMDE2IENhbGViIFRyb3VnaHRvblxyXG5MaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9pbWFrZXdlYnRoaW5ncy93YXlwb2ludHMvYmxvYi9tYXN0ZXIvbGljZW5zZXMudHh0XHJcbiovXHJcbihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0J1xyXG5cclxuICAgIHZhciBrZXlDb3VudGVyID0gMFxyXG4gICAgdmFyIGFsbFdheXBvaW50cyA9IHt9XHJcblxyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL3dheXBvaW50ICovXHJcbiAgICBmdW5jdGlvbiBXYXlwb2ludChvcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKCFvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gb3B0aW9ucyBwYXNzZWQgdG8gV2F5cG9pbnQgY29uc3RydWN0b3InKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9wdGlvbnMuZWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGVsZW1lbnQgb3B0aW9uIHBhc3NlZCB0byBXYXlwb2ludCBjb25zdHJ1Y3RvcicpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb3B0aW9ucy5oYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gaGFuZGxlciBvcHRpb24gcGFzc2VkIHRvIFdheXBvaW50IGNvbnN0cnVjdG9yJylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMua2V5ID0gJ3dheXBvaW50LScgKyBrZXlDb3VudGVyXHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gV2F5cG9pbnQuQWRhcHRlci5leHRlbmQoe30sIFdheXBvaW50LmRlZmF1bHRzLCBvcHRpb25zKVxyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMub3B0aW9ucy5lbGVtZW50XHJcbiAgICAgICAgdGhpcy5hZGFwdGVyID0gbmV3IFdheXBvaW50LkFkYXB0ZXIodGhpcy5lbGVtZW50KVxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBvcHRpb25zLmhhbmRsZXJcclxuICAgICAgICB0aGlzLmF4aXMgPSB0aGlzLm9wdGlvbnMuaG9yaXpvbnRhbCA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCdcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0aGlzLm9wdGlvbnMuZW5hYmxlZFxyXG4gICAgICAgIHRoaXMudHJpZ2dlclBvaW50ID0gbnVsbFxyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBXYXlwb2ludC5Hcm91cC5maW5kT3JDcmVhdGUoe1xyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm9wdGlvbnMuZ3JvdXAsXHJcbiAgICAgICAgICAgIGF4aXM6IHRoaXMuYXhpc1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gV2F5cG9pbnQuQ29udGV4dC5maW5kT3JDcmVhdGVCeUVsZW1lbnQodGhpcy5vcHRpb25zLmNvbnRleHQpXHJcblxyXG4gICAgICAgIGlmIChXYXlwb2ludC5vZmZzZXRBbGlhc2VzW3RoaXMub3B0aW9ucy5vZmZzZXRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vZmZzZXQgPSBXYXlwb2ludC5vZmZzZXRBbGlhc2VzW3RoaXMub3B0aW9ucy5vZmZzZXRdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ3JvdXAuYWRkKHRoaXMpXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmFkZCh0aGlzKVxyXG4gICAgICAgIGFsbFdheXBvaW50c1t0aGlzLmtleV0gPSB0aGlzXHJcbiAgICAgICAga2V5Q291bnRlciArPSAxXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgV2F5cG9pbnQucHJvdG90eXBlLnF1ZXVlVHJpZ2dlciA9IGZ1bmN0aW9uKGRpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMuZ3JvdXAucXVldWVUcmlnZ2VyKHRoaXMsIGRpcmVjdGlvbilcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBXYXlwb2ludC5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhpcy5jYWxsYmFjay5hcHBseSh0aGlzLCBhcmdzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9kZXN0cm95ICovXHJcbiAgICBXYXlwb2ludC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5yZW1vdmUodGhpcylcclxuICAgICAgICB0aGlzLmdyb3VwLnJlbW92ZSh0aGlzKVxyXG4gICAgICAgIGRlbGV0ZSBhbGxXYXlwb2ludHNbdGhpcy5rZXldXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvZGlzYWJsZSAqL1xyXG4gICAgV2F5cG9pbnQucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvZW5hYmxlICovXHJcbiAgICBXYXlwb2ludC5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnJlZnJlc2goKVxyXG4gICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL25leHQgKi9cclxuICAgIFdheXBvaW50LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXAubmV4dCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL3ByZXZpb3VzICovXHJcbiAgICBXYXlwb2ludC5wcm90b3R5cGUucHJldmlvdXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ncm91cC5wcmV2aW91cyh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIFdheXBvaW50Lmludm9rZUFsbCA9IGZ1bmN0aW9uKG1ldGhvZCkge1xyXG4gICAgICAgIHZhciBhbGxXYXlwb2ludHNBcnJheSA9IFtdXHJcbiAgICAgICAgZm9yICh2YXIgd2F5cG9pbnRLZXkgaW4gYWxsV2F5cG9pbnRzKSB7XHJcbiAgICAgICAgICAgIGFsbFdheXBvaW50c0FycmF5LnB1c2goYWxsV2F5cG9pbnRzW3dheXBvaW50S2V5XSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGVuZCA9IGFsbFdheXBvaW50c0FycmF5Lmxlbmd0aDsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFsbFdheXBvaW50c0FycmF5W2ldW21ldGhvZF0oKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9kZXN0cm95LWFsbCAqL1xyXG4gICAgV2F5cG9pbnQuZGVzdHJveUFsbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFdheXBvaW50Lmludm9rZUFsbCgnZGVzdHJveScpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvZGlzYWJsZS1hbGwgKi9cclxuICAgIFdheXBvaW50LmRpc2FibGVBbGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBXYXlwb2ludC5pbnZva2VBbGwoJ2Rpc2FibGUnKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2VuYWJsZS1hbGwgKi9cclxuICAgIFdheXBvaW50LmVuYWJsZUFsbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFdheXBvaW50LkNvbnRleHQucmVmcmVzaEFsbCgpXHJcbiAgICAgICAgZm9yICh2YXIgd2F5cG9pbnRLZXkgaW4gYWxsV2F5cG9pbnRzKSB7XHJcbiAgICAgICAgICAgIGFsbFdheXBvaW50c1t3YXlwb2ludEtleV0uZW5hYmxlZCA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9yZWZyZXNoLWFsbCAqL1xyXG4gICAgV2F5cG9pbnQucmVmcmVzaEFsbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFdheXBvaW50LkNvbnRleHQucmVmcmVzaEFsbCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvdmlld3BvcnQtaGVpZ2h0ICovXHJcbiAgICBXYXlwb2ludC52aWV3cG9ydEhlaWdodCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL3ZpZXdwb3J0LXdpZHRoICovXHJcbiAgICBXYXlwb2ludC52aWV3cG9ydFdpZHRoID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxyXG4gICAgfVxyXG5cclxuICAgIFdheXBvaW50LmFkYXB0ZXJzID0gW11cclxuXHJcbiAgICBXYXlwb2ludC5kZWZhdWx0cyA9IHtcclxuICAgICAgICBjb250ZXh0OiB3aW5kb3csXHJcbiAgICAgICAgY29udGludW91czogdHJ1ZSxcclxuICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgIGdyb3VwOiAnZGVmYXVsdCcsXHJcbiAgICAgICAgaG9yaXpvbnRhbDogZmFsc2UsXHJcbiAgICAgICAgb2Zmc2V0OiAwXHJcbiAgICB9XHJcblxyXG4gICAgV2F5cG9pbnQub2Zmc2V0QWxpYXNlcyA9IHtcclxuICAgICAgICAnYm90dG9tLWluLXZpZXcnOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5pbm5lckhlaWdodCgpIC0gdGhpcy5hZGFwdGVyLm91dGVySGVpZ2h0KClcclxuICAgICAgICB9LFxyXG4gICAgICAgICdyaWdodC1pbi12aWV3JzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuaW5uZXJXaWR0aCgpIC0gdGhpcy5hZGFwdGVyLm91dGVyV2lkdGgoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuV2F5cG9pbnQgPSBXYXlwb2ludFxyXG59KCkpO1xyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCdcclxuXHJcbiAgICBmdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVTaGltKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MClcclxuICAgIH1cclxuXHJcbiAgICB2YXIga2V5Q291bnRlciA9IDBcclxuICAgIHZhciBjb250ZXh0cyA9IHt9XHJcbiAgICB2YXIgV2F5cG9pbnQgPSB3aW5kb3cuV2F5cG9pbnRcclxuICAgIHZhciBvbGRXaW5kb3dMb2FkID0gd2luZG93Lm9ubG9hZFxyXG5cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9jb250ZXh0ICovXHJcbiAgICBmdW5jdGlvbiBDb250ZXh0KGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5BZGFwdGVyID0gV2F5cG9pbnQuQWRhcHRlclxyXG4gICAgICAgIHRoaXMuYWRhcHRlciA9IG5ldyB0aGlzLkFkYXB0ZXIoZWxlbWVudClcclxuICAgICAgICB0aGlzLmtleSA9ICd3YXlwb2ludC1jb250ZXh0LScgKyBrZXlDb3VudGVyXHJcbiAgICAgICAgdGhpcy5kaWRTY3JvbGwgPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuZGlkUmVzaXplID0gZmFsc2VcclxuICAgICAgICB0aGlzLm9sZFNjcm9sbCA9IHtcclxuICAgICAgICAgICAgeDogdGhpcy5hZGFwdGVyLnNjcm9sbExlZnQoKSxcclxuICAgICAgICAgICAgeTogdGhpcy5hZGFwdGVyLnNjcm9sbFRvcCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud2F5cG9pbnRzID0ge1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbDoge30sXHJcbiAgICAgICAgICAgIGhvcml6b250YWw6IHt9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVtZW50LndheXBvaW50Q29udGV4dEtleSA9IHRoaXMua2V5XHJcbiAgICAgICAgY29udGV4dHNbZWxlbWVudC53YXlwb2ludENvbnRleHRLZXldID0gdGhpc1xyXG4gICAgICAgIGtleUNvdW50ZXIgKz0gMVxyXG4gICAgICAgIGlmICghV2F5cG9pbnQud2luZG93Q29udGV4dCkge1xyXG4gICAgICAgICAgICBXYXlwb2ludC53aW5kb3dDb250ZXh0ID0gdHJ1ZVxyXG4gICAgICAgICAgICBXYXlwb2ludC53aW5kb3dDb250ZXh0ID0gbmV3IENvbnRleHQod2luZG93KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVUaHJvdHRsZWRTY3JvbGxIYW5kbGVyKClcclxuICAgICAgICB0aGlzLmNyZWF0ZVRocm90dGxlZFJlc2l6ZUhhbmRsZXIoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHdheXBvaW50KSB7XHJcbiAgICAgICAgdmFyIGF4aXMgPSB3YXlwb2ludC5vcHRpb25zLmhvcml6b250YWwgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnXHJcbiAgICAgICAgdGhpcy53YXlwb2ludHNbYXhpc11bd2F5cG9pbnQua2V5XSA9IHdheXBvaW50XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoKClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5jaGVja0VtcHR5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGhvcml6b250YWxFbXB0eSA9IHRoaXMuQWRhcHRlci5pc0VtcHR5T2JqZWN0KHRoaXMud2F5cG9pbnRzLmhvcml6b250YWwpXHJcbiAgICAgICAgdmFyIHZlcnRpY2FsRW1wdHkgPSB0aGlzLkFkYXB0ZXIuaXNFbXB0eU9iamVjdCh0aGlzLndheXBvaW50cy52ZXJ0aWNhbClcclxuICAgICAgICB2YXIgaXNXaW5kb3cgPSB0aGlzLmVsZW1lbnQgPT0gdGhpcy5lbGVtZW50LndpbmRvd1xyXG4gICAgICAgIGlmIChob3Jpem9udGFsRW1wdHkgJiYgdmVydGljYWxFbXB0eSAmJiAhaXNXaW5kb3cpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLm9mZignLndheXBvaW50cycpXHJcbiAgICAgICAgICAgIGRlbGV0ZSBjb250ZXh0c1t0aGlzLmtleV1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlVGhyb3R0bGVkUmVzaXplSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpc1xyXG5cclxuICAgICAgICBmdW5jdGlvbiByZXNpemVIYW5kbGVyKCkge1xyXG4gICAgICAgICAgICBzZWxmLmhhbmRsZVJlc2l6ZSgpXHJcbiAgICAgICAgICAgIHNlbGYuZGlkUmVzaXplID0gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWRhcHRlci5vbigncmVzaXplLndheXBvaW50cycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGYuZGlkUmVzaXplKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRpZFJlc2l6ZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIFdheXBvaW50LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZXNpemVIYW5kbGVyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5jcmVhdGVUaHJvdHRsZWRTY3JvbGxIYW5kbGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbEhhbmRsZXIoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuaGFuZGxlU2Nyb2xsKClcclxuICAgICAgICAgICAgc2VsZi5kaWRTY3JvbGwgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hZGFwdGVyLm9uKCdzY3JvbGwud2F5cG9pbnRzJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghc2VsZi5kaWRTY3JvbGwgfHwgV2F5cG9pbnQuaXNUb3VjaCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kaWRTY3JvbGwgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBXYXlwb2ludC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2Nyb2xsSGFuZGxlcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuaGFuZGxlUmVzaXplID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgV2F5cG9pbnQuQ29udGV4dC5yZWZyZXNoQWxsKClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5oYW5kbGVTY3JvbGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgdHJpZ2dlcmVkR3JvdXBzID0ge31cclxuICAgICAgICB2YXIgYXhlcyA9IHtcclxuICAgICAgICAgICAgaG9yaXpvbnRhbDoge1xyXG4gICAgICAgICAgICAgICAgbmV3U2Nyb2xsOiB0aGlzLmFkYXB0ZXIuc2Nyb2xsTGVmdCgpLFxyXG4gICAgICAgICAgICAgICAgb2xkU2Nyb2xsOiB0aGlzLm9sZFNjcm9sbC54LFxyXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgIGJhY2t3YXJkOiAnbGVmdCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdmVydGljYWw6IHtcclxuICAgICAgICAgICAgICAgIG5ld1Njcm9sbDogdGhpcy5hZGFwdGVyLnNjcm9sbFRvcCgpLFxyXG4gICAgICAgICAgICAgICAgb2xkU2Nyb2xsOiB0aGlzLm9sZFNjcm9sbC55LFxyXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogJ2Rvd24nLFxyXG4gICAgICAgICAgICAgICAgYmFja3dhcmQ6ICd1cCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgYXhpc0tleSBpbiBheGVzKSB7XHJcbiAgICAgICAgICAgIHZhciBheGlzID0gYXhlc1theGlzS2V5XVxyXG4gICAgICAgICAgICB2YXIgaXNGb3J3YXJkID0gYXhpcy5uZXdTY3JvbGwgPiBheGlzLm9sZFNjcm9sbFxyXG4gICAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gaXNGb3J3YXJkID8gYXhpcy5mb3J3YXJkIDogYXhpcy5iYWNrd2FyZFxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgd2F5cG9pbnRLZXkgaW4gdGhpcy53YXlwb2ludHNbYXhpc0tleV0pIHtcclxuICAgICAgICAgICAgICAgIHZhciB3YXlwb2ludCA9IHRoaXMud2F5cG9pbnRzW2F4aXNLZXldW3dheXBvaW50S2V5XVxyXG4gICAgICAgICAgICAgICAgaWYgKHdheXBvaW50LnRyaWdnZXJQb2ludCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgd2FzQmVmb3JlVHJpZ2dlclBvaW50ID0gYXhpcy5vbGRTY3JvbGwgPCB3YXlwb2ludC50cmlnZ2VyUG9pbnRcclxuICAgICAgICAgICAgICAgIHZhciBub3dBZnRlclRyaWdnZXJQb2ludCA9IGF4aXMubmV3U2Nyb2xsID49IHdheXBvaW50LnRyaWdnZXJQb2ludFxyXG4gICAgICAgICAgICAgICAgdmFyIGNyb3NzZWRGb3J3YXJkID0gd2FzQmVmb3JlVHJpZ2dlclBvaW50ICYmIG5vd0FmdGVyVHJpZ2dlclBvaW50XHJcbiAgICAgICAgICAgICAgICB2YXIgY3Jvc3NlZEJhY2t3YXJkID0gIXdhc0JlZm9yZVRyaWdnZXJQb2ludCAmJiAhbm93QWZ0ZXJUcmlnZ2VyUG9pbnRcclxuICAgICAgICAgICAgICAgIGlmIChjcm9zc2VkRm9yd2FyZCB8fCBjcm9zc2VkQmFja3dhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB3YXlwb2ludC5xdWV1ZVRyaWdnZXIoZGlyZWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJlZEdyb3Vwc1t3YXlwb2ludC5ncm91cC5pZF0gPSB3YXlwb2ludC5ncm91cFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBncm91cEtleSBpbiB0cmlnZ2VyZWRHcm91cHMpIHtcclxuICAgICAgICAgICAgdHJpZ2dlcmVkR3JvdXBzW2dyb3VwS2V5XS5mbHVzaFRyaWdnZXJzKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMub2xkU2Nyb2xsID0ge1xyXG4gICAgICAgICAgICB4OiBheGVzLmhvcml6b250YWwubmV3U2Nyb2xsLFxyXG4gICAgICAgICAgICB5OiBheGVzLnZlcnRpY2FsLm5ld1Njcm9sbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5pbm5lckhlaWdodCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8qZXNsaW50LWRpc2FibGUgZXFlcWVxICovXHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCA9PSB0aGlzLmVsZW1lbnQud2luZG93KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBXYXlwb2ludC52aWV3cG9ydEhlaWdodCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qZXNsaW50LWVuYWJsZSBlcWVxZXEgKi9cclxuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmlubmVySGVpZ2h0KClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbih3YXlwb2ludCkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLndheXBvaW50c1t3YXlwb2ludC5heGlzXVt3YXlwb2ludC5rZXldXHJcbiAgICAgICAgdGhpcy5jaGVja0VtcHR5KClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5pbm5lcldpZHRoID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLyplc2xpbnQtZGlzYWJsZSBlcWVxZXEgKi9cclxuICAgICAgICBpZiAodGhpcy5lbGVtZW50ID09IHRoaXMuZWxlbWVudC53aW5kb3cpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFdheXBvaW50LnZpZXdwb3J0V2lkdGgoKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKmVzbGludC1lbmFibGUgZXFlcWVxICovXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5pbm5lcldpZHRoKClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9jb250ZXh0LWRlc3Ryb3kgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgYWxsV2F5cG9pbnRzID0gW11cclxuICAgICAgICBmb3IgKHZhciBheGlzIGluIHRoaXMud2F5cG9pbnRzKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHdheXBvaW50S2V5IGluIHRoaXMud2F5cG9pbnRzW2F4aXNdKSB7XHJcbiAgICAgICAgICAgICAgICBhbGxXYXlwb2ludHMucHVzaCh0aGlzLndheXBvaW50c1theGlzXVt3YXlwb2ludEtleV0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGVuZCA9IGFsbFdheXBvaW50cy5sZW5ndGg7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICAgICAgICBhbGxXYXlwb2ludHNbaV0uZGVzdHJveSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2NvbnRleHQtcmVmcmVzaCAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8qZXNsaW50LWRpc2FibGUgZXFlcWVxICovXHJcbiAgICAgICAgdmFyIGlzV2luZG93ID0gdGhpcy5lbGVtZW50ID09IHRoaXMuZWxlbWVudC53aW5kb3dcclxuICAgICAgICAvKmVzbGludC1lbmFibGUgZXFlcWVxICovXHJcbiAgICAgICAgdmFyIGNvbnRleHRPZmZzZXQgPSBpc1dpbmRvdyA/IHVuZGVmaW5lZCA6IHRoaXMuYWRhcHRlci5vZmZzZXQoKVxyXG4gICAgICAgIHZhciB0cmlnZ2VyZWRHcm91cHMgPSB7fVxyXG4gICAgICAgIHZhciBheGVzXHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU2Nyb2xsKClcclxuICAgICAgICBheGVzID0ge1xyXG4gICAgICAgICAgICBob3Jpem9udGFsOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZXh0T2Zmc2V0OiBpc1dpbmRvdyA/IDAgOiBjb250ZXh0T2Zmc2V0LmxlZnQsXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0U2Nyb2xsOiBpc1dpbmRvdyA/IDAgOiB0aGlzLm9sZFNjcm9sbC54LFxyXG4gICAgICAgICAgICAgICAgY29udGV4dERpbWVuc2lvbjogdGhpcy5pbm5lcldpZHRoKCksXHJcbiAgICAgICAgICAgICAgICBvbGRTY3JvbGw6IHRoaXMub2xkU2Nyb2xsLngsXHJcbiAgICAgICAgICAgICAgICBmb3J3YXJkOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgYmFja3dhcmQ6ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgIG9mZnNldFByb3A6ICdsZWZ0J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbDoge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dE9mZnNldDogaXNXaW5kb3cgPyAwIDogY29udGV4dE9mZnNldC50b3AsXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0U2Nyb2xsOiBpc1dpbmRvdyA/IDAgOiB0aGlzLm9sZFNjcm9sbC55LFxyXG4gICAgICAgICAgICAgICAgY29udGV4dERpbWVuc2lvbjogdGhpcy5pbm5lckhlaWdodCgpLFxyXG4gICAgICAgICAgICAgICAgb2xkU2Nyb2xsOiB0aGlzLm9sZFNjcm9sbC55LFxyXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogJ2Rvd24nLFxyXG4gICAgICAgICAgICAgICAgYmFja3dhcmQ6ICd1cCcsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRQcm9wOiAndG9wJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBheGlzS2V5IGluIGF4ZXMpIHtcclxuICAgICAgICAgICAgdmFyIGF4aXMgPSBheGVzW2F4aXNLZXldXHJcbiAgICAgICAgICAgIGZvciAodmFyIHdheXBvaW50S2V5IGluIHRoaXMud2F5cG9pbnRzW2F4aXNLZXldKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2F5cG9pbnQgPSB0aGlzLndheXBvaW50c1theGlzS2V5XVt3YXlwb2ludEtleV1cclxuICAgICAgICAgICAgICAgIHZhciBhZGp1c3RtZW50ID0gd2F5cG9pbnQub3B0aW9ucy5vZmZzZXRcclxuICAgICAgICAgICAgICAgIHZhciBvbGRUcmlnZ2VyUG9pbnQgPSB3YXlwb2ludC50cmlnZ2VyUG9pbnRcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50T2Zmc2V0ID0gMFxyXG4gICAgICAgICAgICAgICAgdmFyIGZyZXNoV2F5cG9pbnQgPSBvbGRUcmlnZ2VyUG9pbnQgPT0gbnVsbFxyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRleHRNb2RpZmllciwgd2FzQmVmb3JlU2Nyb2xsLCBub3dBZnRlclNjcm9sbFxyXG4gICAgICAgICAgICAgICAgdmFyIHRyaWdnZXJlZEJhY2t3YXJkLCB0cmlnZ2VyZWRGb3J3YXJkXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHdheXBvaW50LmVsZW1lbnQgIT09IHdheXBvaW50LmVsZW1lbnQud2luZG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudE9mZnNldCA9IHdheXBvaW50LmFkYXB0ZXIub2Zmc2V0KClbYXhpcy5vZmZzZXRQcm9wXVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYWRqdXN0bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkanVzdG1lbnQgPSBhZGp1c3RtZW50LmFwcGx5KHdheXBvaW50KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYWRqdXN0bWVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGp1c3RtZW50ID0gcGFyc2VGbG9hdChhZGp1c3RtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3YXlwb2ludC5vcHRpb25zLm9mZnNldC5pbmRleE9mKCclJykgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGp1c3RtZW50ID0gTWF0aC5jZWlsKGF4aXMuY29udGV4dERpbWVuc2lvbiAqIGFkanVzdG1lbnQgLyAxMDApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRleHRNb2RpZmllciA9IGF4aXMuY29udGV4dFNjcm9sbCAtIGF4aXMuY29udGV4dE9mZnNldFxyXG4gICAgICAgICAgICAgICAgd2F5cG9pbnQudHJpZ2dlclBvaW50ID0gTWF0aC5mbG9vcihlbGVtZW50T2Zmc2V0ICsgY29udGV4dE1vZGlmaWVyIC0gYWRqdXN0bWVudClcclxuICAgICAgICAgICAgICAgIHdhc0JlZm9yZVNjcm9sbCA9IG9sZFRyaWdnZXJQb2ludCA8IGF4aXMub2xkU2Nyb2xsXHJcbiAgICAgICAgICAgICAgICBub3dBZnRlclNjcm9sbCA9IHdheXBvaW50LnRyaWdnZXJQb2ludCA+PSBheGlzLm9sZFNjcm9sbFxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcmVkQmFja3dhcmQgPSB3YXNCZWZvcmVTY3JvbGwgJiYgbm93QWZ0ZXJTY3JvbGxcclxuICAgICAgICAgICAgICAgIHRyaWdnZXJlZEZvcndhcmQgPSAhd2FzQmVmb3JlU2Nyb2xsICYmICFub3dBZnRlclNjcm9sbFxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZnJlc2hXYXlwb2ludCAmJiB0cmlnZ2VyZWRCYWNrd2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdheXBvaW50LnF1ZXVlVHJpZ2dlcihheGlzLmJhY2t3YXJkKVxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJlZEdyb3Vwc1t3YXlwb2ludC5ncm91cC5pZF0gPSB3YXlwb2ludC5ncm91cFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghZnJlc2hXYXlwb2ludCAmJiB0cmlnZ2VyZWRGb3J3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2F5cG9pbnQucXVldWVUcmlnZ2VyKGF4aXMuZm9yd2FyZClcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyZWRHcm91cHNbd2F5cG9pbnQuZ3JvdXAuaWRdID0gd2F5cG9pbnQuZ3JvdXBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZnJlc2hXYXlwb2ludCAmJiBheGlzLm9sZFNjcm9sbCA+PSB3YXlwb2ludC50cmlnZ2VyUG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB3YXlwb2ludC5xdWV1ZVRyaWdnZXIoYXhpcy5mb3J3YXJkKVxyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJlZEdyb3Vwc1t3YXlwb2ludC5ncm91cC5pZF0gPSB3YXlwb2ludC5ncm91cFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBXYXlwb2ludC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGdyb3VwS2V5IGluIHRyaWdnZXJlZEdyb3Vwcykge1xyXG4gICAgICAgICAgICAgICAgdHJpZ2dlcmVkR3JvdXBzW2dyb3VwS2V5XS5mbHVzaFRyaWdnZXJzKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5maW5kT3JDcmVhdGVCeUVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIENvbnRleHQuZmluZEJ5RWxlbWVudChlbGVtZW50KSB8fCBuZXcgQ29udGV4dChlbGVtZW50KVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucmVmcmVzaEFsbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZvciAodmFyIGNvbnRleHRJZCBpbiBjb250ZXh0cykge1xyXG4gICAgICAgICAgICBjb250ZXh0c1tjb250ZXh0SWRdLnJlZnJlc2goKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9jb250ZXh0LWZpbmQtYnktZWxlbWVudCAqL1xyXG4gICAgQ29udGV4dC5maW5kQnlFbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBjb250ZXh0c1tlbGVtZW50LndheXBvaW50Q29udGV4dEtleV1cclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKG9sZFdpbmRvd0xvYWQpIHtcclxuICAgICAgICAgICAgb2xkV2luZG93TG9hZCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIENvbnRleHQucmVmcmVzaEFsbCgpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIFdheXBvaW50LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIHJlcXVlc3RGbiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZVNoaW1cclxuICAgICAgICByZXF1ZXN0Rm4uY2FsbCh3aW5kb3csIGNhbGxiYWNrKVxyXG4gICAgfVxyXG4gICAgV2F5cG9pbnQuQ29udGV4dCA9IENvbnRleHRcclxufSgpKTtcclxuKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnXHJcblxyXG4gICAgZnVuY3Rpb24gYnlUcmlnZ2VyUG9pbnQoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBhLnRyaWdnZXJQb2ludCAtIGIudHJpZ2dlclBvaW50XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYnlSZXZlcnNlVHJpZ2dlclBvaW50KGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYi50cmlnZ2VyUG9pbnQgLSBhLnRyaWdnZXJQb2ludFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBncm91cHMgPSB7XHJcbiAgICAgICAgdmVydGljYWw6IHt9LFxyXG4gICAgICAgIGhvcml6b250YWw6IHt9XHJcbiAgICB9XHJcbiAgICB2YXIgV2F5cG9pbnQgPSB3aW5kb3cuV2F5cG9pbnRcclxuXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvZ3JvdXAgKi9cclxuICAgIGZ1bmN0aW9uIEdyb3VwKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWVcclxuICAgICAgICB0aGlzLmF4aXMgPSBvcHRpb25zLmF4aXNcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy5uYW1lICsgJy0nICsgdGhpcy5heGlzXHJcbiAgICAgICAgdGhpcy53YXlwb2ludHMgPSBbXVxyXG4gICAgICAgIHRoaXMuY2xlYXJUcmlnZ2VyUXVldWVzKClcclxuICAgICAgICBncm91cHNbdGhpcy5heGlzXVt0aGlzLm5hbWVdID0gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIEdyb3VwLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbih3YXlwb2ludCkge1xyXG4gICAgICAgIHRoaXMud2F5cG9pbnRzLnB1c2god2F5cG9pbnQpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLmNsZWFyVHJpZ2dlclF1ZXVlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlclF1ZXVlcyA9IHtcclxuICAgICAgICAgICAgdXA6IFtdLFxyXG4gICAgICAgICAgICBkb3duOiBbXSxcclxuICAgICAgICAgICAgbGVmdDogW10sXHJcbiAgICAgICAgICAgIHJpZ2h0OiBbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBHcm91cC5wcm90b3R5cGUuZmx1c2hUcmlnZ2VycyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZvciAodmFyIGRpcmVjdGlvbiBpbiB0aGlzLnRyaWdnZXJRdWV1ZXMpIHtcclxuICAgICAgICAgICAgdmFyIHdheXBvaW50cyA9IHRoaXMudHJpZ2dlclF1ZXVlc1tkaXJlY3Rpb25dXHJcbiAgICAgICAgICAgIHZhciByZXZlcnNlID0gZGlyZWN0aW9uID09PSAndXAnIHx8IGRpcmVjdGlvbiA9PT0gJ2xlZnQnXHJcbiAgICAgICAgICAgIHdheXBvaW50cy5zb3J0KHJldmVyc2UgPyBieVJldmVyc2VUcmlnZ2VyUG9pbnQgOiBieVRyaWdnZXJQb2ludClcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGVuZCA9IHdheXBvaW50cy5sZW5ndGg7IGkgPCBlbmQ7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdheXBvaW50ID0gd2F5cG9pbnRzW2ldXHJcbiAgICAgICAgICAgICAgICBpZiAod2F5cG9pbnQub3B0aW9ucy5jb250aW51b3VzIHx8IGkgPT09IHdheXBvaW50cy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2F5cG9pbnQudHJpZ2dlcihbZGlyZWN0aW9uXSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNsZWFyVHJpZ2dlclF1ZXVlcygpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbih3YXlwb2ludCkge1xyXG4gICAgICAgIHRoaXMud2F5cG9pbnRzLnNvcnQoYnlUcmlnZ2VyUG9pbnQpXHJcbiAgICAgICAgdmFyIGluZGV4ID0gV2F5cG9pbnQuQWRhcHRlci5pbkFycmF5KHdheXBvaW50LCB0aGlzLndheXBvaW50cylcclxuICAgICAgICB2YXIgaXNMYXN0ID0gaW5kZXggPT09IHRoaXMud2F5cG9pbnRzLmxlbmd0aCAtIDFcclxuICAgICAgICByZXR1cm4gaXNMYXN0ID8gbnVsbCA6IHRoaXMud2F5cG9pbnRzW2luZGV4ICsgMV1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBHcm91cC5wcm90b3R5cGUucHJldmlvdXMgPSBmdW5jdGlvbih3YXlwb2ludCkge1xyXG4gICAgICAgIHRoaXMud2F5cG9pbnRzLnNvcnQoYnlUcmlnZ2VyUG9pbnQpXHJcbiAgICAgICAgdmFyIGluZGV4ID0gV2F5cG9pbnQuQWRhcHRlci5pbkFycmF5KHdheXBvaW50LCB0aGlzLndheXBvaW50cylcclxuICAgICAgICByZXR1cm4gaW5kZXggPyB0aGlzLndheXBvaW50c1tpbmRleCAtIDFdIDogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIEdyb3VwLnByb3RvdHlwZS5xdWV1ZVRyaWdnZXIgPSBmdW5jdGlvbih3YXlwb2ludCwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyUXVldWVzW2RpcmVjdGlvbl0ucHVzaCh3YXlwb2ludClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBHcm91cC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24od2F5cG9pbnQpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSBXYXlwb2ludC5BZGFwdGVyLmluQXJyYXkod2F5cG9pbnQsIHRoaXMud2F5cG9pbnRzKVxyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2F5cG9pbnRzLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvZmlyc3QgKi9cclxuICAgIEdyb3VwLnByb3RvdHlwZS5maXJzdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndheXBvaW50c1swXVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2xhc3QgKi9cclxuICAgIEdyb3VwLnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2F5cG9pbnRzW3RoaXMud2F5cG9pbnRzLmxlbmd0aCAtIDFdXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgR3JvdXAuZmluZE9yQ3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBncm91cHNbb3B0aW9ucy5heGlzXVtvcHRpb25zLm5hbWVdIHx8IG5ldyBHcm91cChvcHRpb25zKVxyXG4gICAgfVxyXG5cclxuICAgIFdheXBvaW50Lkdyb3VwID0gR3JvdXBcclxufSgpKTtcclxuKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnXHJcblxyXG4gICAgdmFyIFdheXBvaW50ID0gd2luZG93LldheXBvaW50XHJcblxyXG4gICAgZnVuY3Rpb24gaXNXaW5kb3coZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50ID09PSBlbGVtZW50LndpbmRvd1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFdpbmRvdyhlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGlzV2luZG93KGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbGVtZW50LmRlZmF1bHRWaWV3XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gTm9GcmFtZXdvcmtBZGFwdGVyKGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IHt9XHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5pbm5lckhlaWdodCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBpc1dpbiA9IGlzV2luZG93KHRoaXMuZWxlbWVudClcclxuICAgICAgICByZXR1cm4gaXNXaW4gPyB0aGlzLmVsZW1lbnQuaW5uZXJIZWlnaHQgOiB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0XHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5pbm5lcldpZHRoID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGlzV2luID0gaXNXaW5kb3codGhpcy5lbGVtZW50KVxyXG4gICAgICAgIHJldHVybiBpc1dpbiA/IHRoaXMuZWxlbWVudC5pbm5lcldpZHRoIDogdGhpcy5lbGVtZW50LmNsaWVudFdpZHRoXHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycyhlbGVtZW50LCBsaXN0ZW5lcnMsIGhhbmRsZXIpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGVuZCA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpIDwgZW5kOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXVxyXG4gICAgICAgICAgICAgICAgaWYgKCFoYW5kbGVyIHx8IGhhbmRsZXIgPT09IGxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGxpc3RlbmVyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZXZlbnRQYXJ0cyA9IGV2ZW50LnNwbGl0KCcuJylcclxuICAgICAgICB2YXIgZXZlbnRUeXBlID0gZXZlbnRQYXJ0c1swXVxyXG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSBldmVudFBhcnRzWzFdXHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRcclxuXHJcbiAgICAgICAgaWYgKG5hbWVzcGFjZSAmJiB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV0gJiYgZXZlbnRUeXBlKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVycyhlbGVtZW50LCB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV1bZXZlbnRUeXBlXSwgaGFuZGxlcilcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdW2V2ZW50VHlwZV0gPSBbXVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRUeXBlKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG5zIGluIHRoaXMuaGFuZGxlcnMpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVycyhlbGVtZW50LCB0aGlzLmhhbmRsZXJzW25zXVtldmVudFR5cGVdIHx8IFtdLCBoYW5kbGVyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyc1tuc11bZXZlbnRUeXBlXSA9IFtdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKG5hbWVzcGFjZSAmJiB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV0pIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgdHlwZSBpbiB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV0pIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVycyhlbGVtZW50LCB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV1bdHlwZV0sIGhhbmRsZXIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdID0ge31cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogQWRhcHRlZCBmcm9tIGpRdWVyeSAxLnggb2Zmc2V0KCkgKi9cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUub2Zmc2V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGRvY3VtZW50RWxlbWVudCA9IHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxyXG4gICAgICAgIHZhciB3aW4gPSBnZXRXaW5kb3codGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQpXHJcbiAgICAgICAgdmFyIHJlY3QgPSB7XHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgbGVmdDogMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcclxuICAgICAgICAgICAgcmVjdCA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCArIHdpbi5wYWdlWU9mZnNldCAtIGRvY3VtZW50RWxlbWVudC5jbGllbnRUb3AsXHJcbiAgICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbi5wYWdlWE9mZnNldCAtIGRvY3VtZW50RWxlbWVudC5jbGllbnRMZWZ0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbihldmVudCwgaGFuZGxlcikge1xyXG4gICAgICAgIHZhciBldmVudFBhcnRzID0gZXZlbnQuc3BsaXQoJy4nKVxyXG4gICAgICAgIHZhciBldmVudFR5cGUgPSBldmVudFBhcnRzWzBdXHJcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9IGV2ZW50UGFydHNbMV0gfHwgJ19fZGVmYXVsdCdcclxuICAgICAgICB2YXIgbnNIYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXSA9IHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXSB8fCB7fVxyXG4gICAgICAgIHZhciBuc1R5cGVMaXN0ID0gbnNIYW5kbGVyc1tldmVudFR5cGVdID0gbnNIYW5kbGVyc1tldmVudFR5cGVdIHx8IFtdXHJcblxyXG4gICAgICAgIG5zVHlwZUxpc3QucHVzaChoYW5kbGVyKVxyXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlcilcclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLm91dGVySGVpZ2h0ID0gZnVuY3Rpb24oaW5jbHVkZU1hcmdpbikge1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmlubmVySGVpZ2h0KClcclxuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZVxyXG5cclxuICAgICAgICBpZiAoaW5jbHVkZU1hcmdpbiAmJiAhaXNXaW5kb3codGhpcy5lbGVtZW50KSkge1xyXG4gICAgICAgICAgICBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVxyXG4gICAgICAgICAgICBoZWlnaHQgKz0gcGFyc2VJbnQoY29tcHV0ZWRTdHlsZS5tYXJnaW5Ub3AsIDEwKVxyXG4gICAgICAgICAgICBoZWlnaHQgKz0gcGFyc2VJbnQoY29tcHV0ZWRTdHlsZS5tYXJnaW5Cb3R0b20sIDEwKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGhlaWdodFxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUub3V0ZXJXaWR0aCA9IGZ1bmN0aW9uKGluY2x1ZGVNYXJnaW4pIHtcclxuICAgICAgICB2YXIgd2lkdGggPSB0aGlzLmlubmVyV2lkdGgoKVxyXG4gICAgICAgIHZhciBjb21wdXRlZFN0eWxlXHJcblxyXG4gICAgICAgIGlmIChpbmNsdWRlTWFyZ2luICYmICFpc1dpbmRvdyh0aGlzLmVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpXHJcbiAgICAgICAgICAgIHdpZHRoICs9IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUubWFyZ2luTGVmdCwgMTApXHJcbiAgICAgICAgICAgIHdpZHRoICs9IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUubWFyZ2luUmlnaHQsIDEwKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHdpZHRoXHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5zY3JvbGxMZWZ0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHdpbiA9IGdldFdpbmRvdyh0aGlzLmVsZW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIHdpbiA/IHdpbi5wYWdlWE9mZnNldCA6IHRoaXMuZWxlbWVudC5zY3JvbGxMZWZ0XHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5zY3JvbGxUb3AgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgd2luID0gZ2V0V2luZG93KHRoaXMuZWxlbWVudClcclxuICAgICAgICByZXR1cm4gd2luID8gd2luLnBhZ2VZT2Zmc2V0IDogdGhpcy5lbGVtZW50LnNjcm9sbFRvcFxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5leHRlbmQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbWVyZ2UodGFyZ2V0LCBvYmopIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gb2JqW2tleV1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAxLCBlbmQgPSBhcmdzLmxlbmd0aDsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG1lcmdlKGFyZ3NbMF0sIGFyZ3NbaV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcmdzWzBdXHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLmluQXJyYXkgPSBmdW5jdGlvbihlbGVtZW50LCBhcnJheSwgaSkge1xyXG4gICAgICAgIHJldHVybiBhcnJheSA9PSBudWxsID8gLTEgOiBhcnJheS5pbmRleE9mKGVsZW1lbnQsIGkpXHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLmlzRW1wdHlPYmplY3QgPSBmdW5jdGlvbihvYmopIHtcclxuICAgICAgICAvKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IDAgKi9cclxuICAgICAgICBmb3IgKHZhciBuYW1lIGluIG9iaikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICBXYXlwb2ludC5hZGFwdGVycy5wdXNoKHtcclxuICAgICAgICBuYW1lOiAnbm9mcmFtZXdvcmsnLFxyXG4gICAgICAgIEFkYXB0ZXI6IE5vRnJhbWV3b3JrQWRhcHRlclxyXG4gICAgfSlcclxuICAgIFdheXBvaW50LkFkYXB0ZXIgPSBOb0ZyYW1ld29ya0FkYXB0ZXJcclxufSgpKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==