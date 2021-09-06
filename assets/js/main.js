/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/modules/animation.js":
/*!******************************************!*\
  !*** ./src/scripts/modules/animation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Animations);

/***/ }),

/***/ "./src/scripts/modules/forms.js":
/*!**************************************!*\
  !*** ./src/scripts/modules/forms.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/scripts/modules/utils.js");
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
      target.style.height = _utils__WEBPACK_IMPORTED_MODULE_0__.default.textareaHeight(target.value) + "px";
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Forms);

/***/ }),

/***/ "./src/scripts/modules/modalMenu.js":
/*!******************************************!*\
  !*** ./src/scripts/modules/modalMenu.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/scripts/modules/utils.js");
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
      _utils__WEBPACK_IMPORTED_MODULE_0__.default.bodyScrollLock();
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
      _utils__WEBPACK_IMPORTED_MODULE_0__.default.bodyScrollUnlock();
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalMenu);

/***/ }),

/***/ "./src/scripts/modules/search.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/search.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ }),

/***/ "./src/scripts/modules/utils.js":
/*!**************************************!*\
  !*** ./src/scripts/modules/utils.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Utils = /*#__PURE__*/function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: "bodyScrollLock",
    value: function bodyScrollLock() {
      var html = document.querySelector('html');
      var scrollY = window.scrollY;
      html.style.scrollBehavior = 'initial';
      document.body.classList.add('scroll-locked');
      document.body.style.position = 'fixed';
      document.body.style.top = -scrollY + 'px';
    }
  }, {
    key: "bodyScrollUnlock",
    value: function bodyScrollUnlock() {
      var html = document.querySelector('html');
      var bodyStyle = document.body.style.top;
      document.body.classList.remove('scroll-locked');
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(bodyStyle || 0) * -1);
      html.style.scrollBehavior = 'smooth';
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

  return Utils;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utils);

/***/ }),

/***/ "./src/scripts/vendor/anime.js":
/*!*************************************!*\
  !*** ./src/scripts/vendor/anime.js ***!
  \*************************************/
/***/ ((module) => {

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
/***/ (() => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modalMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modalMenu */ "./src/scripts/modules/modalMenu.js");
/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animation */ "./src/scripts/modules/animation.js");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ "./src/scripts/modules/search.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ "./src/scripts/modules/forms.js");




var modalMenu = new _modules_modalMenu__WEBPACK_IMPORTED_MODULE_0__.default();
var animation = new _modules_animation__WEBPACK_IMPORTED_MODULE_1__.default();
var search = new _modules_search__WEBPACK_IMPORTED_MODULE_2__.default();
var forms = new _modules_forms__WEBPACK_IMPORTED_MODULE_3__.default();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYXNhbmRlLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy9hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vcmFzYW5kZS8uL3NyYy9zY3JpcHRzL21vZHVsZXMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vcmFzYW5kZS8uL3NyYy9zY3JpcHRzL21vZHVsZXMvbW9kYWxNZW51LmpzIiwid2VicGFjazovL3Jhc2FuZGUvLi9zcmMvc2NyaXB0cy9tb2R1bGVzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly9yYXNhbmRlLy4vc3JjL3NjcmlwdHMvbW9kdWxlcy91dGlscy5qcyIsIndlYnBhY2s6Ly9yYXNhbmRlLy4vc3JjL3NjcmlwdHMvdmVuZG9yL2FuaW1lLmpzIiwid2VicGFjazovL3Jhc2FuZGUvLi9zcmMvc2NyaXB0cy92ZW5kb3Ivbm9mcmFtZXdvcmsud2F5cG9pbnRzLmpzIiwid2VicGFjazovL3Jhc2FuZGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmFzYW5kZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yYXNhbmRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yYXNhbmRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmFzYW5kZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jhc2FuZGUvLi9zcmMvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbIkFuaW1hdGlvbnMiLCJvZGRFdmVuQW5pbWF0aW9uIiwib2RkcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImV2ZW5zIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJXYXlwb2ludCIsImhhbmRsZXIiLCJhbmltZSIsInRhcmdldHMiLCJvcGFjaXR5IiwidHJhbnNsYXRlWSIsImRlbGF5IiwiZHVyYXRpb24iLCJlYXNpbmciLCJkZXN0cm95Iiwib2Zmc2V0IiwiRm9ybXMiLCJ0ZXh0YXJlYSIsInNlbGVjdCIsImN1c3RvbVNlbGVjdERyb3Bkb3duIiwiZXZlbnRzIiwiZWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0VGV4dGFyZWFIZWlnaHQiLCJ0YXJnZXQiLCJzdHlsZSIsImhlaWdodCIsIlV0aWxzIiwidmFsdWUiLCJNb2RhbE1lbnUiLCJoZWFkZXIiLCJxdWVyeVNlbGVjdG9yIiwidG9nZ2xlTWVudSIsIm1lbnUiLCJzdWJtZW51QnRuIiwiaXNNZW51T3BlbiIsIm1haW5QYWRkaW5nIiwidHJpZ2dlck1lbnUiLCJ0b2dnbGVTdWJNZW51Iiwia2V5UHJlc3MiLCJ3aW5kb3ciLCJjaGFuZ2VIZWFkZXIiLCJjdXJyZW50VGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwidGFyZ2V0TWVudSIsIm90aGVyTWVudXMiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImNsb3NlTWVudSIsIm9wZW5NZW51IiwiaWQiLCJtZW51QnRuIiwiYWRkIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlIiwiYnRuIiwicGFyZW50Tm9kZSIsImNsaWVudEhlaWdodCIsInNldFRpbWVvdXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJvbmNlIiwia2V5Q29kZSIsInNjcm9sbFBvcyIsInNjcm9sbFkiLCJtYWluIiwiaGVhZGVySGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0IiwicGFkZGluZ1RvcCIsIlNlYXJjaCIsInNlYXJjaE1vZGFsIiwic2VhcmNoQnV0dG9uIiwic2VhcmNoRmllbGQiLCJzZWFyY2hPdmVybGF5IiwiaXNTZWFyY2hPcGVuIiwidG9nZ2xlTW9kYWwiLCJjbG9zZU1vZGFsIiwib3Blbk1vZGFsIiwiZm9jdXMiLCJodG1sIiwic2Nyb2xsQmVoYXZpb3IiLCJib2R5IiwicG9zaXRpb24iLCJ0b3AiLCJib2R5U3R5bGUiLCJzY3JvbGxUbyIsInBhcnNlSW50IiwibnVtYmVyT2ZMaW5lQnJlYWtzIiwibWF0Y2giLCJsZW5ndGgiLCJuZXdIZWlnaHQiLCJjaGVjayIsImEiLCJ0ZXN0Iiwic3Vic3RyIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidmVuZG9yIiwib3BlcmEiLCJkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncyIsInVwZGF0ZSIsImJlZ2luIiwibG9vcEJlZ2luIiwiY2hhbmdlQmVnaW4iLCJjaGFuZ2UiLCJjaGFuZ2VDb21wbGV0ZSIsImxvb3BDb21wbGV0ZSIsImNvbXBsZXRlIiwibG9vcCIsImRpcmVjdGlvbiIsImF1dG9wbGF5IiwidGltZWxpbmVPZmZzZXQiLCJkZWZhdWx0VHdlZW5TZXR0aW5ncyIsImVuZERlbGF5Iiwicm91bmQiLCJ2YWxpZFRyYW5zZm9ybXMiLCJjYWNoZSIsIkNTUyIsInNwcmluZ3MiLCJtaW5NYXgiLCJ2YWwiLCJtaW4iLCJtYXgiLCJNYXRoIiwic3RyaW5nQ29udGFpbnMiLCJzdHIiLCJ0ZXh0IiwiaW5kZXhPZiIsImFwcGx5QXJndW1lbnRzIiwiZnVuYyIsImFyZ3MiLCJhcHBseSIsImlzIiwiYXJyIiwiQXJyYXkiLCJpc0FycmF5Iiwib2JqIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwicHRoIiwiaGFzT3duUHJvcGVydHkiLCJzdmciLCJTVkdFbGVtZW50IiwiaW5wIiwiSFRNTElucHV0RWxlbWVudCIsImRvbSIsIm5vZGVUeXBlIiwiZm5jIiwidW5kIiwibmlsIiwiaGV4IiwicmdiIiwiaHNsIiwiY29sIiwia2V5IiwicGFyc2VFYXNpbmdQYXJhbWV0ZXJzIiwic3RyaW5nIiwiZXhlYyIsInNwbGl0IiwibWFwIiwicCIsInBhcnNlRmxvYXQiLCJzcHJpbmciLCJwYXJhbXMiLCJtYXNzIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsInZlbG9jaXR5IiwidzAiLCJzcXJ0IiwiemV0YSIsIndkIiwiYiIsInNvbHZlciIsInQiLCJwcm9ncmVzcyIsImV4cCIsImNvcyIsInNpbiIsImdldER1cmF0aW9uIiwiY2FjaGVkIiwiZnJhbWUiLCJlbGFwc2VkIiwicmVzdCIsInN0ZXBzIiwiY2VpbCIsImJlemllciIsImtTcGxpbmVUYWJsZVNpemUiLCJrU2FtcGxlU3RlcFNpemUiLCJBIiwiYUExIiwiYUEyIiwiQiIsIkMiLCJjYWxjQmV6aWVyIiwiYVQiLCJnZXRTbG9wZSIsImJpbmFyeVN1YmRpdmlkZSIsImFYIiwiYUEiLCJhQiIsIm1YMSIsIm1YMiIsImN1cnJlbnRYIiwiY3VycmVudFQiLCJpIiwiYWJzIiwibmV3dG9uUmFwaHNvbkl0ZXJhdGUiLCJhR3Vlc3NUIiwiY3VycmVudFNsb3BlIiwibVkxIiwibVkyIiwic2FtcGxlVmFsdWVzIiwiRmxvYXQzMkFycmF5IiwiZ2V0VEZvclgiLCJpbnRlcnZhbFN0YXJ0IiwiY3VycmVudFNhbXBsZSIsImxhc3RTYW1wbGUiLCJkaXN0IiwiZ3Vlc3NGb3JUIiwiaW5pdGlhbFNsb3BlIiwieCIsInBlbm5lciIsImVhc2VzIiwibGluZWFyIiwiZnVuY3Rpb25FYXNpbmdzIiwiU2luZSIsIlBJIiwiQ2lyYyIsIkJhY2siLCJCb3VuY2UiLCJwb3cyIiwicG93IiwiRWxhc3RpYyIsImFtcGxpdHVkZSIsInBlcmlvZCIsImFzaW4iLCJiYXNlRWFzaW5ncyIsIm5hbWUiLCJrZXlzIiwiZWFzZUluIiwicGFyc2VFYXNpbmdzIiwiZWFzZSIsInNlbGVjdFN0cmluZyIsIm5vZGVzIiwiZmlsdGVyQXJyYXkiLCJjYWxsYmFjayIsImxlbiIsInRoaXNBcmciLCJhcmd1bWVudHMiLCJyZXN1bHQiLCJwdXNoIiwiZmxhdHRlbkFycmF5IiwicmVkdWNlIiwiY29uY2F0IiwidG9BcnJheSIsIm8iLCJOb2RlTGlzdCIsIkhUTUxDb2xsZWN0aW9uIiwic2xpY2UiLCJhcnJheUNvbnRhaW5zIiwic29tZSIsImNsb25lT2JqZWN0IiwiY2xvbmUiLCJyZXBsYWNlT2JqZWN0UHJvcHMiLCJvMSIsIm8yIiwibWVyZ2VPYmplY3RzIiwicmdiVG9SZ2JhIiwicmdiVmFsdWUiLCJoZXhUb1JnYmEiLCJoZXhWYWx1ZSIsInJneCIsInJlcGxhY2UiLCJtIiwiciIsImciLCJoc2xUb1JnYmEiLCJoc2xWYWx1ZSIsImgiLCJzIiwibCIsImh1ZTJyZ2IiLCJxIiwiY29sb3JUb1JnYiIsImdldFVuaXQiLCJnZXRUcmFuc2Zvcm1Vbml0IiwicHJvcE5hbWUiLCJnZXRGdW5jdGlvblZhbHVlIiwiYW5pbWF0YWJsZSIsInRvdGFsIiwicHJvcCIsImNvbnZlcnRQeFRvVW5pdCIsInVuaXQiLCJ2YWx1ZVVuaXQiLCJiYXNlbGluZSIsInRlbXBFbCIsImNyZWF0ZUVsZW1lbnQiLCJ0YWdOYW1lIiwicGFyZW50RWwiLCJhcHBlbmRDaGlsZCIsIndpZHRoIiwiZmFjdG9yIiwib2Zmc2V0V2lkdGgiLCJyZW1vdmVDaGlsZCIsImNvbnZlcnRlZFVuaXQiLCJnZXRDU1NWYWx1ZSIsInVwcGVyY2FzZVByb3BOYW1lIiwidG9Mb3dlckNhc2UiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImdldEFuaW1hdGlvblR5cGUiLCJnZXRFbGVtZW50VHJhbnNmb3JtcyIsInRyYW5zZm9ybSIsInJlZyIsInRyYW5zZm9ybXMiLCJNYXAiLCJzZXQiLCJnZXRUcmFuc2Zvcm1WYWx1ZSIsImRlZmF1bHRWYWwiLCJnZXQiLCJsaXN0IiwiZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZSIsImdldFJlbGF0aXZlVmFsdWUiLCJ0byIsImZyb20iLCJvcGVyYXRvciIsInUiLCJ5IiwidmFsaWRhdGVWYWx1ZSIsIm9yaWdpbmFsVW5pdCIsInVuaXRMZXNzIiwiZ2V0RGlzdGFuY2UiLCJwMSIsInAyIiwiZ2V0Q2lyY2xlTGVuZ3RoIiwiZ2V0UmVjdExlbmd0aCIsImdldExpbmVMZW5ndGgiLCJnZXRQb2x5bGluZUxlbmd0aCIsInBvaW50cyIsInRvdGFsTGVuZ3RoIiwicHJldmlvdXNQb3MiLCJudW1iZXJPZkl0ZW1zIiwiY3VycmVudFBvcyIsImdldEl0ZW0iLCJnZXRQb2x5Z29uTGVuZ3RoIiwiZ2V0VG90YWxMZW5ndGgiLCJzZXREYXNob2Zmc2V0IiwicGF0aExlbmd0aCIsImdldFBhcmVudFN2Z0VsIiwiZ2V0UGFyZW50U3ZnIiwicGF0aEVsIiwic3ZnRGF0YSIsInBhcmVudFN2Z0VsIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInZpZXdCb3hBdHRyIiwidmlld0JveCIsInciLCJ2VyIsInZIIiwiZ2V0UGF0aCIsInBhdGgiLCJwZXJjZW50IiwicHJvcGVydHkiLCJnZXRQYXRoUHJvZ3Jlc3MiLCJpc1BhdGhUYXJnZXRJbnNpZGVTVkciLCJwb2ludCIsImdldFBvaW50QXRMZW5ndGgiLCJwMCIsInNjYWxlWCIsInNjYWxlWSIsImF0YW4yIiwiZGVjb21wb3NlVmFsdWUiLCJvcmlnaW5hbCIsIm51bWJlcnMiLCJOdW1iZXIiLCJzdHJpbmdzIiwicGFyc2VUYXJnZXRzIiwidGFyZ2V0c0FycmF5IiwiaXRlbSIsInBvcyIsInNlbGYiLCJnZXRBbmltYXRhYmxlcyIsInBhcnNlZCIsIm5vcm1hbGl6ZVByb3BlcnR5VHdlZW5zIiwidHdlZW5TZXR0aW5ncyIsInNldHRpbmdzIiwiaXNGcm9tVG8iLCJwcm9wQXJyYXkiLCJ2IiwiayIsImZsYXR0ZW5LZXlmcmFtZXMiLCJrZXlmcmFtZXMiLCJwcm9wZXJ0eU5hbWVzIiwicHJvcGVydGllcyIsIm5ld0tleSIsImdldFByb3BlcnRpZXMiLCJ0d2VlbnMiLCJub3JtYWxpemVUd2VlblZhbHVlcyIsInR3ZWVuIiwibm9ybWFsaXplVHdlZW5zIiwicHJldmlvdXNUd2VlbiIsInR3ZWVuVmFsdWUiLCJ0b1VuaXQiLCJvcmlnaW5hbFZhbHVlIiwicHJldmlvdXNWYWx1ZSIsImZyb21Vbml0Iiwic3RhcnQiLCJlbmQiLCJpc1BhdGgiLCJpc0NvbG9yIiwic2V0UHJvZ3Jlc3NWYWx1ZSIsImNzcyIsImF0dHJpYnV0ZSIsIm9iamVjdCIsIm1hbnVhbCIsImxhc3QiLCJzZXRUYXJnZXRzVmFsdWUiLCJhbmltYXRhYmxlcyIsImFuaW1UeXBlIiwiY3JlYXRlQW5pbWF0aW9uIiwibGFzdFR3ZWVuIiwidHlwZSIsImdldEFuaW1hdGlvbnMiLCJnZXRJbnN0YW5jZVRpbWluZ3MiLCJhbmltYXRpb25zIiwiYW5pbUxlbmd0aCIsImdldFRsT2Zmc2V0IiwiYW5pbSIsInRpbWluZ3MiLCJpbnN0YW5jZUlEIiwiY3JlYXRlTmV3SW5zdGFuY2UiLCJpbnN0YW5jZVNldHRpbmdzIiwiY2hpbGRyZW4iLCJhY3RpdmVJbnN0YW5jZXMiLCJlbmdpbmUiLCJyYWYiLCJwbGF5IiwiaXNEb2N1bWVudEhpZGRlbiIsInN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzdGVwIiwiYWN0aXZlSW5zdGFuY2VzTGVuZ3RoIiwiYWN0aXZlSW5zdGFuY2UiLCJwYXVzZWQiLCJ0aWNrIiwic3BsaWNlIiwidW5kZWZpbmVkIiwiaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaW5zdGFuY2UiLCJfb25Eb2N1bWVudFZpc2liaWxpdHkiLCJoaWRkZW4iLCJzdGFydFRpbWUiLCJsYXN0VGltZSIsIm5vdyIsImNoaWxkcmVuTGVuZ3RoIiwicmVzb2x2ZSIsIm1ha2VQcm9taXNlIiwicHJvbWlzZSIsIlByb21pc2UiLCJfcmVzb2x2ZSIsImZpbmlzaGVkIiwidG9nZ2xlSW5zdGFuY2VEaXJlY3Rpb24iLCJyZXZlcnNlZCIsImNoaWxkIiwiYWRqdXN0VGltZSIsInRpbWUiLCJyZXNldFRpbWUiLCJjdXJyZW50VGltZSIsInNwZWVkIiwic2Vla0NoaWxkIiwic2VlayIsInN5bmNJbnN0YW5jZUNoaWxkcmVuIiwicmV2ZXJzZVBsYXliYWNrIiwiaSQxIiwic2V0QW5pbWF0aW9uc1Byb2dyZXNzIiwiaW5zVGltZSIsImFuaW1hdGlvbnNMZW5ndGgiLCJ0d2Vlbkxlbmd0aCIsImVhc2VkIiwiaXNOYU4iLCJ0b051bWJlcnNMZW5ndGgiLCJuIiwidG9OdW1iZXIiLCJmcm9tTnVtYmVyIiwic3RyaW5nc0xlbmd0aCIsIm4kMSIsImN1cnJlbnRWYWx1ZSIsInNldENhbGxiYWNrIiwiY2IiLCJwYXNzVGhyb3VnaCIsImNvdW50SXRlcmF0aW9uIiwicmVtYWluaW5nIiwic2V0SW5zdGFuY2VQcm9ncmVzcyIsImVuZ2luZVRpbWUiLCJpbnNEdXJhdGlvbiIsImluc0RlbGF5IiwiaW5zRW5kRGVsYXkiLCJiZWdhbiIsImxvb3BCZWdhbiIsImNoYW5nZUJlZ2FuIiwiY2hhbmdlQ29tcGxldGVkIiwiY29tcGxldGVkIiwicmVzZXQiLCJwYXVzZSIsInJldmVyc2UiLCJyZXN0YXJ0IiwicmVtb3ZlVGFyZ2V0c0Zyb21JbnN0YW5jZSIsInJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyIsImMiLCJjaGlsZEFuaW1hdGlvbnMiLCJyZW1vdmVUYXJnZXRzRnJvbUFjdGl2ZUluc3RhbmNlcyIsInN0YWdnZXIiLCJncmlkIiwiYXhpcyIsImZyb21JbmRleCIsImZyb21GaXJzdCIsImZyb21DZW50ZXIiLCJmcm9tTGFzdCIsImlzUmFuZ2UiLCJ2YWwxIiwidmFsMiIsInZhbHVlcyIsIm1heFZhbHVlIiwiaW5kZXgiLCJmcm9tWCIsImZyb21ZIiwiZmxvb3IiLCJ0b1giLCJ0b1kiLCJkaXN0YW5jZVgiLCJkaXN0YW5jZVkiLCJzcGFjaW5nIiwidGltZWxpbmUiLCJ0bCIsImluc3RhbmNlUGFyYW1zIiwidGxJbmRleCIsImlucyIsImluc1BhcmFtcyIsInRsRHVyYXRpb24iLCJ2ZXJzaW9uIiwicnVubmluZyIsImNvbnZlcnRQeCIsInJhbmRvbSIsIm1vZHVsZSIsImV4cG9ydHMiLCJrZXlDb3VudGVyIiwiYWxsV2F5cG9pbnRzIiwib3B0aW9ucyIsIkVycm9yIiwiQWRhcHRlciIsImV4dGVuZCIsImRlZmF1bHRzIiwiYWRhcHRlciIsImhvcml6b250YWwiLCJlbmFibGVkIiwidHJpZ2dlclBvaW50IiwiZ3JvdXAiLCJHcm91cCIsImZpbmRPckNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwiZmluZE9yQ3JlYXRlQnlFbGVtZW50Iiwib2Zmc2V0QWxpYXNlcyIsInF1ZXVlVHJpZ2dlciIsInRyaWdnZXIiLCJkaXNhYmxlIiwiZW5hYmxlIiwicmVmcmVzaCIsIm5leHQiLCJwcmV2aW91cyIsImludm9rZUFsbCIsIm1ldGhvZCIsImFsbFdheXBvaW50c0FycmF5Iiwid2F5cG9pbnRLZXkiLCJkZXN0cm95QWxsIiwiZGlzYWJsZUFsbCIsImVuYWJsZUFsbCIsInJlZnJlc2hBbGwiLCJ2aWV3cG9ydEhlaWdodCIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50Iiwidmlld3BvcnRXaWR0aCIsImNsaWVudFdpZHRoIiwiYWRhcHRlcnMiLCJjb250aW51b3VzIiwib3V0ZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwib3V0ZXJXaWR0aCIsInJlcXVlc3RBbmltYXRpb25GcmFtZVNoaW0iLCJjb250ZXh0cyIsIm9sZFdpbmRvd0xvYWQiLCJvbmxvYWQiLCJkaWRTY3JvbGwiLCJkaWRSZXNpemUiLCJvbGRTY3JvbGwiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwid2F5cG9pbnRzIiwidmVydGljYWwiLCJ3YXlwb2ludENvbnRleHRLZXkiLCJ3aW5kb3dDb250ZXh0IiwiY3JlYXRlVGhyb3R0bGVkU2Nyb2xsSGFuZGxlciIsImNyZWF0ZVRocm90dGxlZFJlc2l6ZUhhbmRsZXIiLCJ3YXlwb2ludCIsImNoZWNrRW1wdHkiLCJob3Jpem9udGFsRW1wdHkiLCJpc0VtcHR5T2JqZWN0IiwidmVydGljYWxFbXB0eSIsImlzV2luZG93Iiwib2ZmIiwicmVzaXplSGFuZGxlciIsImhhbmRsZVJlc2l6ZSIsIm9uIiwic2Nyb2xsSGFuZGxlciIsImhhbmRsZVNjcm9sbCIsImlzVG91Y2giLCJ0cmlnZ2VyZWRHcm91cHMiLCJheGVzIiwibmV3U2Nyb2xsIiwiZm9yd2FyZCIsImJhY2t3YXJkIiwiYXhpc0tleSIsImlzRm9yd2FyZCIsIndhc0JlZm9yZVRyaWdnZXJQb2ludCIsIm5vd0FmdGVyVHJpZ2dlclBvaW50IiwiY3Jvc3NlZEZvcndhcmQiLCJjcm9zc2VkQmFja3dhcmQiLCJncm91cEtleSIsImZsdXNoVHJpZ2dlcnMiLCJjb250ZXh0T2Zmc2V0IiwibGVmdCIsImNvbnRleHRTY3JvbGwiLCJjb250ZXh0RGltZW5zaW9uIiwib2Zmc2V0UHJvcCIsImFkanVzdG1lbnQiLCJvbGRUcmlnZ2VyUG9pbnQiLCJlbGVtZW50T2Zmc2V0IiwiZnJlc2hXYXlwb2ludCIsImNvbnRleHRNb2RpZmllciIsIndhc0JlZm9yZVNjcm9sbCIsIm5vd0FmdGVyU2Nyb2xsIiwidHJpZ2dlcmVkQmFja3dhcmQiLCJ0cmlnZ2VyZWRGb3J3YXJkIiwiZmluZEJ5RWxlbWVudCIsImNvbnRleHRJZCIsInJlcXVlc3RGbiIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJ5VHJpZ2dlclBvaW50IiwiYnlSZXZlcnNlVHJpZ2dlclBvaW50IiwiZ3JvdXBzIiwiY2xlYXJUcmlnZ2VyUXVldWVzIiwidHJpZ2dlclF1ZXVlcyIsInVwIiwiZG93biIsInJpZ2h0Iiwic29ydCIsImluQXJyYXkiLCJpc0xhc3QiLCJmaXJzdCIsImdldFdpbmRvdyIsImRlZmF1bHRWaWV3IiwiTm9GcmFtZXdvcmtBZGFwdGVyIiwiaGFuZGxlcnMiLCJpc1dpbiIsImV2ZW50IiwicmVtb3ZlTGlzdGVuZXJzIiwibGlzdGVuZXJzIiwibGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZlbnRQYXJ0cyIsImV2ZW50VHlwZSIsIm5hbWVzcGFjZSIsIm5zIiwib3duZXJEb2N1bWVudCIsIndpbiIsInBhZ2VZT2Zmc2V0IiwiY2xpZW50VG9wIiwicGFnZVhPZmZzZXQiLCJjbGllbnRMZWZ0IiwibnNIYW5kbGVycyIsIm5zVHlwZUxpc3QiLCJpbmNsdWRlTWFyZ2luIiwiY29tcHV0ZWRTdHlsZSIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIm1lcmdlIiwiYXJyYXkiLCJtb2RhbE1lbnUiLCJhbmltYXRpb24iLCJzZWFyY2giLCJmb3JtcyJdLCJtYXBw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QUNBLFNBQUssSUFBSXdHLElBQVQsSUFBaUJ4RyxHQUFqQixFQUFzQjtBQUNsQixhQUFPLEtBQVA7QUFDSDs7QUFDRCxXQUFPLElBQVA7QUFDSCxHQU5EOztBQVFBcEksVUFBUSxDQUFDd2tCLFFBQVQsQ0FBa0IvVSxJQUFsQixDQUF1QjtBQUNuQmIsUUFBSSxFQUFFLGFBRGE7QUFFbkIwVCxXQUFPLEVBQUVpSDtBQUZVLEdBQXZCO0FBSUF2cEIsVUFBUSxDQUFDc2lCLE9BQVQsR0FBbUJpSCxrQkFBbkI7QUFDSCxDQTFLQSxHQUFELEM7Ozs7OztVQ3RrQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU00QixTQUFTLEdBQUcsSUFBSXpwQix1REFBSixFQUFsQjtBQUNBLElBQU0wcEIsU0FBUyxHQUFHLElBQUk1ckIsdURBQUosRUFBbEI7QUFDQSxJQUFNNnJCLE1BQU0sR0FBRyxJQUFJcG5CLG9EQUFKLEVBQWY7QUFDQSxJQUFNcW5CLEtBQUssR0FBRyxJQUFJM3FCLG1EQUFKLEVBQWQsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuaW1lIGZyb20gJy4uL3ZlbmRvci9hbmltZS5qcydcclxuaW1wb3J0IHdheXBvaW50IGZyb20gJy4uL3ZlbmRvci9ub2ZyYW1ld29yay53YXlwb2ludHMuanMnXHJcbmNsYXNzIEFuaW1hdGlvbnMge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub2RkRXZlbkFuaW1hdGlvbigpXHJcbiAgICB9XHJcblxyXG4gICAgb2RkRXZlbkFuaW1hdGlvbigpIHtcclxuICAgICAgICBjb25zdCBvZGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9kZCcpXHJcbiAgICAgICAgY29uc3QgZXZlbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXZlbicpXHJcblxyXG4gICAgICAgIGV2ZW5zLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICBuZXcgV2F5cG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5lbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFsxMjUsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMTUwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiAnc3ByaW5nKDEsIDgwLCAxMCwgMCknXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBvZGRzLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICBuZXcgV2F5cG9pbnQoe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1lKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5lbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFsxMjUsIDBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2luZzogJ3NwcmluZygxLCA4MCwgMTAsIDApJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAnMTAwJScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbnNcclxuIiwiaW1wb3J0IFV0aWxzIGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5jbGFzcyBGb3JtcyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInRleHRhcmVhXCIpO1xyXG4gICAgdGhpcy5zZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2VsZWN0XCIpO1xyXG4gICAgdGhpcy5jdXN0b21TZWxlY3REcm9wZG93bigpO1xyXG4gICAgdGhpcy5ldmVudHMoKTtcclxuICB9XHJcblxyXG4gIGV2ZW50cygpIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy50ZXh0YXJlYSAhPSBcInVuZGVmaW5lZFwiICYmIHRoaXMudGV4dGFyZWEgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnRleHRhcmVhLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICB0aGlzLnNldFRleHRhcmVhSGVpZ2h0KGVsKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRUZXh0YXJlYUhlaWdodChlbCkge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZWw7XHJcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gVXRpbHMudGV4dGFyZWFIZWlnaHQodGFyZ2V0LnZhbHVlKSArIFwicHhcIjtcclxuICB9XHJcblxyXG4gIGN1c3RvbVNlbGVjdERyb3Bkb3duKCkge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnNlbGVjdCAhPSBcInVuZGVmaW5lZFwiICYmIHRoaXMuc2VsZWN0ICE9IG51bGwpIHtcclxuICAgICAgdGhpcy5zZWxlY3QuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAvLyBtYWtlIGN1c3RvbSBzZWxlY3QgZWxlbWVudCBoZXJlLlxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1zO1xyXG4iLCJpbXBvcnQgVXRpbHMgZnJvbSBcIi4vdXRpbHNcIlxyXG5cclxuY2xhc3MgTW9kYWxNZW51IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyJylcclxuICAgICAgICB0aGlzLnRvZ2dsZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2dnbGVdJylcclxuICAgICAgICB0aGlzLm1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1uYW1lXScpXHJcbiAgICAgICAgdGhpcy5zdWJtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1Ym1lbnUtYnRuJylcclxuICAgICAgICB0aGlzLmlzTWVudU9wZW4gPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuZXZlbnRzKClcclxuICAgICAgICB0aGlzLm1haW5QYWRkaW5nKClcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy50b2dnbGVNZW51LmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJNZW51KGUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnN1Ym1lbnVCdG4uZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlU3ViTWVudShlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5rZXlQcmVzcyhlKSlcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4gdGhpcy5jaGFuZ2VIZWFkZXIoKSlcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT50aGlzLm1haW5QYWRkaW5nKCkpXHJcbiAgICB9XHJcblxyXG4gICAgdHJpZ2dlck1lbnUoZSkge1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJylcclxuICAgICAgICBjb25zdCB0YXJnZXRNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbmFtZT1cIicgKyB0YXJnZXQgKyAnXCJdJylcclxuICAgICAgICBjb25zdCBvdGhlck1lbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmFtZV06bm90KFtkYXRhLW5hbWU9XCInICsgdGFyZ2V0ICsgJ1wiXSknKVxyXG5cclxuICAgICAgICBpZiAoIXRhcmdldE1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgLy8gQ2xvc2Ugb3RoZXIgb3BlbiBtZW51cyBmaXJzdFxyXG4gICAgICAgICAgICBvdGhlck1lbnVzLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1lbnUoZWwpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLm9wZW5NZW51KHRhcmdldE1lbnUpXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTWVudSh0YXJnZXRNZW51KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcGVuTWVudShtZW51KSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBtZW51LmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJylcclxuICAgICAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdG9nZ2xlPVwiJyArIGlkICsgJ1wiXScpXHJcblxyXG4gICAgICAgIFV0aWxzLmJvZHlTY3JvbGxMb2NrKClcclxuXHJcbiAgICAgICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaXMtc2Nyb2xsZWQnKVxyXG5cclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKVxyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJylcclxuICAgICAgICBtZW51QnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJylcclxuXHJcbiAgICAgICAgdGhpcy5pc01lbnVPcGVuID0gdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlTWVudShtZW51KSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBtZW51LmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJylcclxuICAgICAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdG9nZ2xlPVwiJyArIGlkICsgJ1wiXScpXHJcblxyXG4gICAgICAgIFV0aWxzLmJvZHlTY3JvbGxVbmxvY2soKVxyXG5cclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKVxyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJylcclxuICAgICAgICBtZW51QnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXHJcblxyXG4gICAgICAgIHRoaXMuaXNNZW51T3BlbiA9IGZhbHNlXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVN1Yk1lbnUoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IGJ0biA9IGUuY3VycmVudFRhcmdldDtcclxuICAgICAgICBjb25zdCB0YXJnZXRNZW51ID0gYnRuLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLnN1Ym1lbnUnKVxyXG5cclxuICAgICAgICBpZiAoIXRhcmdldE1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1vcGVuJykpIHtcclxuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKVxyXG4gICAgICAgICAgICBidG4uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKVxyXG4gICAgICAgICAgICB0YXJnZXRNZW51LmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKTtcclxuICAgICAgICAgICAgdGFyZ2V0TWVudS5zdHlsZS5oZWlnaHQgPSAnYXV0byc7XHJcblxyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gdGFyZ2V0TWVudS5jbGllbnRIZWlnaHQgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgdGFyZ2V0TWVudS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRNZW51LnN0eWxlLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgICAgICB0YXJnZXRNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldE1lbnUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG9uY2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJylcclxuICAgICAgICAgICAgYnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXHJcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSB0YXJnZXRNZW51LmNsaWVudEhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgIHRhcmdldE1lbnUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldE1lbnUuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG5cclxuICAgICAgICAgICAgdGFyZ2V0TWVudS5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW9wZW4nKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldE1lbnUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIG9uY2U6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBrZXlQcmVzcyhlKSB7XHJcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSAyNyAmJiB0aGlzLmlzTWVudU9wZW4pIHtcclxuICAgICAgICAgICAgdGhpcy5tZW51LmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnaXMtb3BlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1lbnUoZWwpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUhlYWRlcigpIHtcclxuICAgICAgICBsZXQgc2Nyb2xsUG9zID0gd2luZG93LnNjcm9sbFlcclxuICAgICAgICBcclxuICAgICAgICBpZiAoc2Nyb2xsUG9zID49IDc1IHx8IHRoaXMuaXNNZW51T3Blbikge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QuYWRkKCdpcy1zY3JvbGxlZCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2Nyb2xsZWQnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYWluUGFkZGluZygpIHtcclxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpdGUtY29udGVudCcpXHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtaGVhZGVyLmlzLWZpeGVkJylcclxuXHJcbiAgICAgICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJIZWlnaHQgPSBoZWFkZXIub2Zmc2V0SGVpZ2h0XHJcbiAgICAgICAgICAgIG1haW4uc3R5bGUucGFkZGluZ1RvcCA9IGhlYWRlckhlaWdodCArICdweCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbE1lbnVcclxuIiwiY2xhc3MgU2VhcmNoIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXNlYXJjaCcpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtc2VhcmNoLXRvZ2dsZScpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1zZWFyY2gtaW5wdXQnKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1zZWFyY2gtb3ZlcmxheScpXHJcbiAgICAgICAgdGhpcy5pc1NlYXJjaE9wZW4gPSBmYWxzZVxyXG4gICAgICAgIHRoaXMuZXZlbnRzKClcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMoKSB7XHJcbiAgICAgICAgLy8gT3BlbiBzZWFyY2ggbW9kYWxcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hCdXR0b24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnRvZ2dsZU1vZGFsKCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENsb3NlIHNlYXJjaCBtb2RhbFxyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaE92ZXJsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jbG9zZU1vZGFsKCkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB0aGlzLmtleVByZXNzKGUpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVNb2RhbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLW9wZW4nKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3Blbk1vZGFsKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoTW9kYWwuY2xhc3NMaXN0LmFkZCgnaXMtb3BlbicpXHJcbiAgICAgICAgdGhpcy5zZWFyY2hGaWVsZC52YWx1ZSA9ICcnXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNlYXJjaEZpZWxkLmZvY3VzKCksIDMwMSlcclxuICAgICAgICB0aGlzLnNlYXJjaEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJylcclxuICAgICAgICB0aGlzLmlzU2VhcmNoT3BlbiA9IHRydWVcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VNb2RhbCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZWFyY2hNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJylcclxuICAgICAgICB0aGlzLnNlYXJjaEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgIHRoaXMuc2VhcmNoQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXHJcbiAgICAgICAgdGhpcy5pc1NlYXJjaE9wZW4gPSBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGtleVByZXNzKGUpIHtcclxuICAgICAgICBpZiAoZS5rZXlDb2RlID09IDI3ICYmIHRoaXMuaXNTZWFyY2hPcGVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xyXG4iLCJjbGFzcyBVdGlscyB7XHJcblxyXG4gICAgc3RhdGljIGJvZHlTY3JvbGxMb2NrKCkge1xyXG4gICAgICAgIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyk7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZXHJcblxyXG4gICAgICAgIGh0bWwuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSAnaW5pdGlhbCdcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1sb2NrZWQnKVxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSAtc2Nyb2xsWSArICdweCdcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGJvZHlTY3JvbGxVbmxvY2soKSB7XHJcbiAgICAgICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKTtcclxuICAgICAgICBjb25zdCBib2R5U3R5bGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcDtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1sb2NrZWQnKVxyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gJyc7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSAnJztcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcGFyc2VJbnQoYm9keVN0eWxlIHx8IDApICogLTEpO1xyXG4gICAgICAgIGh0bWwuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSAnc21vb3RoJ1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyB0ZXh0YXJlYUhlaWdodCh2YWx1ZSkge1xyXG4gICAgICAgICAgICBsZXQgbnVtYmVyT2ZMaW5lQnJlYWtzID0gKHZhbHVlLm1hdGNoKC9cXG4vZykgfHwgW10pLmxlbmd0aDtcclxuICAgICAgICAgICAgLy8gbWluLWhlaWdodCArIGxpbmVzIHggbGluZS1oZWlnaHQgKyBwYWRkaW5nICsgYm9yZGVyXHJcbiAgICAgICAgICAgIGxldCBuZXdIZWlnaHQgPSAyMCArIG51bWJlck9mTGluZUJyZWFrcyAqIDIwICsgMTAgKyAxO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3SGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBtb2JpbGVDaGVjaygpIHtcclxuICAgICAgICAvKiBodHRwOi8vZGV0ZWN0bW9iaWxlYnJvd3NlcnMuY29tLyAqL1xyXG4gICAgICAgIGxldCBjaGVjayA9IGZhbHNlO1xyXG4gICAgICAgIChmdW5jdGlvbihhKXtpZigvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vfGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2kudGVzdChhKXx8LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLDQpKSkgY2hlY2sgPSB0cnVlO30pKG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3J8fHdpbmRvdy5vcGVyYSk7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gY2hlY2s7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVdGlsc1xyXG4iLCIvKlxyXG4gKiBhbmltZS5qcyB2My4yLjFcclxuICogKGMpIDIwMjAgSnVsaWFuIEdhcm5pZXJcclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXHJcbiAqIGFuaW1lanMuY29tXHJcbiAqL1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gRGVmYXVsdHNcclxuXHJcbnZhciBkZWZhdWx0SW5zdGFuY2VTZXR0aW5ncyA9IHtcclxuICAgIHVwZGF0ZTogbnVsbCxcclxuICAgIGJlZ2luOiBudWxsLFxyXG4gICAgbG9vcEJlZ2luOiBudWxsLFxyXG4gICAgY2hhbmdlQmVnaW46IG51bGwsXHJcbiAgICBjaGFuZ2U6IG51bGwsXHJcbiAgICBjaGFuZ2VDb21wbGV0ZTogbnVsbCxcclxuICAgIGxvb3BDb21wbGV0ZTogbnVsbCxcclxuICAgIGNvbXBsZXRlOiBudWxsLFxyXG4gICAgbG9vcDogMSxcclxuICAgIGRpcmVjdGlvbjogJ25vcm1hbCcsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIHRpbWVsaW5lT2Zmc2V0OiAwXHJcbn07XHJcblxyXG52YXIgZGVmYXVsdFR3ZWVuU2V0dGluZ3MgPSB7XHJcbiAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgIGRlbGF5OiAwLFxyXG4gICAgZW5kRGVsYXk6IDAsXHJcbiAgICBlYXNpbmc6ICdlYXNlT3V0RWxhc3RpYygxLCAuNSknLFxyXG4gICAgcm91bmQ6IDBcclxufTtcclxuXHJcbnZhciB2YWxpZFRyYW5zZm9ybXMgPSBbJ3RyYW5zbGF0ZVgnLCAndHJhbnNsYXRlWScsICd0cmFuc2xhdGVaJywgJ3JvdGF0ZScsICdyb3RhdGVYJywgJ3JvdGF0ZVknLCAncm90YXRlWicsICdzY2FsZScsICdzY2FsZVgnLCAnc2NhbGVZJywgJ3NjYWxlWicsICdza2V3JywgJ3NrZXdYJywgJ3NrZXdZJywgJ3BlcnNwZWN0aXZlJywgJ21hdHJpeCcsICdtYXRyaXgzZCddO1xyXG5cclxuLy8gQ2FjaGluZ1xyXG5cclxudmFyIGNhY2hlID0ge1xyXG4gICAgQ1NTOiB7fSxcclxuICAgIHNwcmluZ3M6IHt9XHJcbn07XHJcblxyXG4vLyBVdGlsc1xyXG5cclxuZnVuY3Rpb24gbWluTWF4KHZhbCwgbWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWwsIG1pbiksIG1heCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0cmluZ0NvbnRhaW5zKHN0ciwgdGV4dCkge1xyXG4gICAgcmV0dXJuIHN0ci5pbmRleE9mKHRleHQpID4gLTE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5QXJndW1lbnRzKGZ1bmMsIGFyZ3MpIHtcclxuICAgIHJldHVybiBmdW5jLmFwcGx5KG51bGwsIGFyZ3MpO1xyXG59XHJcblxyXG52YXIgaXMgPSB7XHJcbiAgICBhcnI6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhKTtcclxuICAgIH0sXHJcbiAgICBvYmo6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gc3RyaW5nQ29udGFpbnMoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpLCAnT2JqZWN0Jyk7XHJcbiAgICB9LFxyXG4gICAgcHRoOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzLm9iaihhKSAmJiBhLmhhc093blByb3BlcnR5KCd0b3RhbExlbmd0aCcpO1xyXG4gICAgfSxcclxuICAgIHN2ZzogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiBhIGluc3RhbmNlb2YgU1ZHRWxlbWVudDtcclxuICAgIH0sXHJcbiAgICBpbnA6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gYSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICB9LFxyXG4gICAgZG9tOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIGEubm9kZVR5cGUgfHwgaXMuc3ZnKGEpO1xyXG4gICAgfSxcclxuICAgIHN0cjogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgYSA9PT0gJ3N0cmluZyc7XHJcbiAgICB9LFxyXG4gICAgZm5jOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhID09PSAnZnVuY3Rpb24nO1xyXG4gICAgfSxcclxuICAgIHVuZDogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgYSA9PT0gJ3VuZGVmaW5lZCc7XHJcbiAgICB9LFxyXG4gICAgbmlsOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIGlzLnVuZChhKSB8fCBhID09PSBudWxsO1xyXG4gICAgfSxcclxuICAgIGhleDogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiAvKF4jWzAtOUEtRl17Nn0kKXwoXiNbMC05QS1GXXszfSQpL2kudGVzdChhKTtcclxuICAgIH0sXHJcbiAgICByZ2I6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gL15yZ2IvLnRlc3QoYSk7XHJcbiAgICB9LFxyXG4gICAgaHNsOiBmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIC9eaHNsLy50ZXN0KGEpO1xyXG4gICAgfSxcclxuICAgIGNvbDogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiAoaXMuaGV4KGEpIHx8IGlzLnJnYihhKSB8fCBpcy5oc2woYSkpO1xyXG4gICAgfSxcclxuICAgIGtleTogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgIHJldHVybiAhZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYSkgJiYgIWRlZmF1bHRUd2VlblNldHRpbmdzLmhhc093blByb3BlcnR5KGEpICYmIGEgIT09ICd0YXJnZXRzJyAmJiBhICE9PSAna2V5ZnJhbWVzJztcclxuICAgIH0sXHJcbn07XHJcblxyXG4vLyBFYXNpbmdzXHJcblxyXG5mdW5jdGlvbiBwYXJzZUVhc2luZ1BhcmFtZXRlcnMoc3RyaW5nKSB7XHJcbiAgICB2YXIgbWF0Y2ggPSAvXFwoKFteKV0rKVxcKS8uZXhlYyhzdHJpbmcpO1xyXG4gICAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0uc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24ocCkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHApO1xyXG4gICAgfSkgOiBbXTtcclxufVxyXG5cclxuLy8gU3ByaW5nIHNvbHZlciBpbnNwaXJlZCBieSBXZWJraXQgQ29weXJpZ2h0IMKpIDIwMTYgQXBwbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLiBodHRwczovL3dlYmtpdC5vcmcvZGVtb3Mvc3ByaW5nL3NwcmluZy5qc1xyXG5cclxuZnVuY3Rpb24gc3ByaW5nKHN0cmluZywgZHVyYXRpb24pIHtcclxuXHJcbiAgICB2YXIgcGFyYW1zID0gcGFyc2VFYXNpbmdQYXJhbWV0ZXJzKHN0cmluZyk7XHJcbiAgICB2YXIgbWFzcyA9IG1pbk1heChpcy51bmQocGFyYW1zWzBdKSA/IDEgOiBwYXJhbXNbMF0sIC4xLCAxMDApO1xyXG4gICAgdmFyIHN0aWZmbmVzcyA9IG1pbk1heChpcy51bmQocGFyYW1zWzFdKSA/IDEwMCA6IHBhcmFtc1sxXSwgLjEsIDEwMCk7XHJcbiAgICB2YXIgZGFtcGluZyA9IG1pbk1heChpcy51bmQocGFyYW1zWzJdKSA/IDEwIDogcGFyYW1zWzJdLCAuMSwgMTAwKTtcclxuICAgIHZhciB2ZWxvY2l0eSA9IG1pbk1heChpcy51bmQocGFyYW1zWzNdKSA/IDAgOiBwYXJhbXNbM10sIC4xLCAxMDApO1xyXG4gICAgdmFyIHcwID0gTWF0aC5zcXJ0KHN0aWZmbmVzcyAvIG1hc3MpO1xyXG4gICAgdmFyIHpldGEgPSBkYW1waW5nIC8gKDIgKiBNYXRoLnNxcnQoc3RpZmZuZXNzICogbWFzcykpO1xyXG4gICAgdmFyIHdkID0gemV0YSA8IDEgPyB3MCAqIE1hdGguc3FydCgxIC0gemV0YSAqIHpldGEpIDogMDtcclxuICAgIHZhciBhID0gMTtcclxuICAgIHZhciBiID0gemV0YSA8IDEgPyAoemV0YSAqIHcwICsgLXZlbG9jaXR5KSAvIHdkIDogLXZlbG9jaXR5ICsgdzA7XHJcblxyXG4gICAgZnVuY3Rpb24gc29sdmVyKHQpIHtcclxuICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBkdXJhdGlvbiA/IChkdXJhdGlvbiAqIHQpIC8gMTAwMCA6IHQ7XHJcbiAgICAgICAgaWYgKHpldGEgPCAxKSB7XHJcbiAgICAgICAgICAgIHByb2dyZXNzID0gTWF0aC5leHAoLXByb2dyZXNzICogemV0YSAqIHcwKSAqIChhICogTWF0aC5jb3Mod2QgKiBwcm9ncmVzcykgKyBiICogTWF0aC5zaW4od2QgKiBwcm9ncmVzcykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHByb2dyZXNzID0gKGEgKyBiICogcHJvZ3Jlc3MpICogTWF0aC5leHAoLXByb2dyZXNzICogdzApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodCA9PT0gMCB8fCB0ID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMSAtIHByb2dyZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldER1cmF0aW9uKCkge1xyXG4gICAgICAgIHZhciBjYWNoZWQgPSBjYWNoZS5zcHJpbmdzW3N0cmluZ107XHJcbiAgICAgICAgaWYgKGNhY2hlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZnJhbWUgPSAxIC8gNjtcclxuICAgICAgICB2YXIgZWxhcHNlZCA9IDA7XHJcbiAgICAgICAgdmFyIHJlc3QgPSAwO1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGVsYXBzZWQgKz0gZnJhbWU7XHJcbiAgICAgICAgICAgIGlmIChzb2x2ZXIoZWxhcHNlZCkgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJlc3QrKztcclxuICAgICAgICAgICAgICAgIGlmIChyZXN0ID49IDE2KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN0ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZHVyYXRpb24gPSBlbGFwc2VkICogZnJhbWUgKiAxMDAwO1xyXG4gICAgICAgIGNhY2hlLnNwcmluZ3Nbc3RyaW5nXSA9IGR1cmF0aW9uO1xyXG4gICAgICAgIHJldHVybiBkdXJhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZHVyYXRpb24gPyBzb2x2ZXIgOiBnZXREdXJhdGlvbjtcclxuXHJcbn1cclxuXHJcbi8vIEJhc2ljIHN0ZXBzIGVhc2luZyBpbXBsZW1lbnRhdGlvbiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9mci9kb2NzL1dlYi9DU1MvdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cclxuXHJcbmZ1bmN0aW9uIHN0ZXBzKHN0ZXBzKSB7XHJcbiAgICBpZiAoc3RlcHMgPT09IHZvaWQgMCkgc3RlcHMgPSAxMDtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoKG1pbk1heCh0LCAwLjAwMDAwMSwgMSkpICogc3RlcHMpICogKDEgLyBzdGVwcyk7XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBCZXppZXJFYXNpbmcgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nXHJcblxyXG52YXIgYmV6aWVyID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHZhciBrU3BsaW5lVGFibGVTaXplID0gMTE7XHJcbiAgICB2YXIga1NhbXBsZVN0ZXBTaXplID0gMS4wIC8gKGtTcGxpbmVUYWJsZVNpemUgLSAxLjApO1xyXG5cclxuICAgIGZ1bmN0aW9uIEEoYUExLCBhQTIpIHtcclxuICAgICAgICByZXR1cm4gMS4wIC0gMy4wICogYUEyICsgMy4wICogYUExXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQihhQTEsIGFBMikge1xyXG4gICAgICAgIHJldHVybiAzLjAgKiBhQTIgLSA2LjAgKiBhQTFcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBDKGFBMSkge1xyXG4gICAgICAgIHJldHVybiAzLjAgKiBhQTFcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjQmV6aWVyKGFULCBhQTEsIGFBMikge1xyXG4gICAgICAgIHJldHVybiAoKEEoYUExLCBhQTIpICogYVQgKyBCKGFBMSwgYUEyKSkgKiBhVCArIEMoYUExKSkgKiBhVFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFNsb3BlKGFULCBhQTEsIGFBMikge1xyXG4gICAgICAgIHJldHVybiAzLjAgKiBBKGFBMSwgYUEyKSAqIGFUICogYVQgKyAyLjAgKiBCKGFBMSwgYUEyKSAqIGFUICsgQyhhQTEpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYmluYXJ5U3ViZGl2aWRlKGFYLCBhQSwgYUIsIG1YMSwgbVgyKSB7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRYLCBjdXJyZW50VCwgaSA9IDA7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xyXG4gICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcclxuICAgICAgICAgICAgICAgIGFCID0gY3VycmVudFQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhQSA9IGN1cnJlbnRUO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gMC4wMDAwMDAxICYmICsraSA8IDEwKTtcclxuICAgICAgICByZXR1cm4gY3VycmVudFQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGFHdWVzc1QsIG1YMSwgbVgyKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyArK2kpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYUd1ZXNzVDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xyXG4gICAgICAgICAgICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYUd1ZXNzVDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBiZXppZXIobVgxLCBtWTEsIG1YMiwgbVkyKSB7XHJcblxyXG4gICAgICAgIGlmICghKDAgPD0gbVgxICYmIG1YMSA8PSAxICYmIDAgPD0gbVgyICYmIG1YMiA8PSAxKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzYW1wbGVWYWx1ZXMgPSBuZXcgRmxvYXQzMkFycmF5KGtTcGxpbmVUYWJsZVNpemUpO1xyXG5cclxuICAgICAgICBpZiAobVgxICE9PSBtWTEgfHwgbVgyICE9PSBtWTIpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrU3BsaW5lVGFibGVTaXplOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRURm9yWChhWCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGludGVydmFsU3RhcnQgPSAwO1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudFNhbXBsZSA9IDE7XHJcbiAgICAgICAgICAgIHZhciBsYXN0U2FtcGxlID0ga1NwbGluZVRhYmxlU2l6ZSAtIDE7XHJcblxyXG4gICAgICAgICAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxTdGFydCArPSBrU2FtcGxlU3RlcFNpemU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC0tY3VycmVudFNhbXBsZTtcclxuXHJcbiAgICAgICAgICAgIHZhciBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcclxuICAgICAgICAgICAgdmFyIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICoga1NhbXBsZVN0ZXBTaXplO1xyXG4gICAgICAgICAgICB2YXIgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5pdGlhbFNsb3BlID49IDAuMDAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIGtTYW1wbGVTdGVwU2l6ZSwgbVgxLCBtWDIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHgpIHtcclxuICAgICAgICAgICAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoeCA9PT0gMCB8fCB4ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY2FsY0JlemllcihnZXRURm9yWCh4KSwgbVkxLCBtWTIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGJlemllcjtcclxuXHJcbn0pKCk7XHJcblxyXG52YXIgcGVubmVyID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIC8vIEJhc2VkIG9uIGpRdWVyeSBVSSdzIGltcGxlbWVuYXRpb24gb2YgZWFzaW5nIGVxdWF0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXIgKGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcpXHJcblxyXG4gICAgdmFyIGVhc2VzID0ge1xyXG4gICAgICAgIGxpbmVhcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBmdW5jdGlvbkVhc2luZ3MgPSB7XHJcbiAgICAgICAgU2luZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMSAtIE1hdGguY29zKHQgKiBNYXRoLlBJIC8gMik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBDaXJjOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxIC0gTWF0aC5zcXJ0KDEgLSB0ICogdCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBCYWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0ICogdCAqICgzICogdCAtIDIpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQm91bmNlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwb3cyLCBiID0gNDtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh0IDwgKChwb3cyID0gTWF0aC5wb3coMiwgLS1iKSkgLSAxKSAvIDExKSB7fVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDEgLyBNYXRoLnBvdyg0LCAzIC0gYikgLSA3LjU2MjUgKiBNYXRoLnBvdygocG93MiAqIDMgLSAyKSAvIDIyIC0gdCwgMilcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIEVsYXN0aWM6IGZ1bmN0aW9uKGFtcGxpdHVkZSwgcGVyaW9kKSB7XHJcbiAgICAgICAgICAgIGlmIChhbXBsaXR1ZGUgPT09IHZvaWQgMCkgYW1wbGl0dWRlID0gMTtcclxuICAgICAgICAgICAgaWYgKHBlcmlvZCA9PT0gdm9pZCAwKSBwZXJpb2QgPSAuNTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhID0gbWluTWF4KGFtcGxpdHVkZSwgMSwgMTApO1xyXG4gICAgICAgICAgICB2YXIgcCA9IG1pbk1heChwZXJpb2QsIC4xLCAyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAodCA9PT0gMCB8fCB0ID09PSAxKSA/IHQgOlxyXG4gICAgICAgICAgICAgICAgICAgIC1hICogTWF0aC5wb3coMiwgMTAgKiAodCAtIDEpKSAqIE1hdGguc2luKCgoKHQgLSAxKSAtIChwIC8gKE1hdGguUEkgKiAyKSAqIE1hdGguYXNpbigxIC8gYSkpKSAqIChNYXRoLlBJICogMikpIC8gcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYXNlRWFzaW5ncyA9IFsnUXVhZCcsICdDdWJpYycsICdRdWFydCcsICdRdWludCcsICdFeHBvJ107XHJcblxyXG4gICAgYmFzZUVhc2luZ3MuZm9yRWFjaChmdW5jdGlvbihuYW1lLCBpKSB7XHJcbiAgICAgICAgZnVuY3Rpb25FYXNpbmdzW25hbWVdID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5wb3codCwgaSArIDIpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhmdW5jdGlvbkVhc2luZ3MpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICAgIHZhciBlYXNlSW4gPSBmdW5jdGlvbkVhc2luZ3NbbmFtZV07XHJcbiAgICAgICAgZWFzZXNbJ2Vhc2VJbicgKyBuYW1lXSA9IGVhc2VJbjtcclxuICAgICAgICBlYXNlc1snZWFzZU91dCcgKyBuYW1lXSA9IGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxIC0gZWFzZUluKGEsIGIpKDEgLSB0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGVhc2VzWydlYXNlSW5PdXQnICsgbmFtZV0gPSBmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdCA8IDAuNSA/IGVhc2VJbihhLCBiKSh0ICogMikgLyAyIDpcclxuICAgICAgICAgICAgICAgICAgICAxIC0gZWFzZUluKGEsIGIpKHQgKiAtMiArIDIpIC8gMjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGVhc2VzWydlYXNlT3V0SW4nICsgbmFtZV0gPSBmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdCA8IDAuNSA/ICgxIC0gZWFzZUluKGEsIGIpKDEgLSB0ICogMikpIC8gMiA6XHJcbiAgICAgICAgICAgICAgICAgICAgKGVhc2VJbihhLCBiKSh0ICogMiAtIDEpICsgMSkgLyAyO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZWFzZXM7XHJcblxyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gcGFyc2VFYXNpbmdzKGVhc2luZywgZHVyYXRpb24pIHtcclxuICAgIGlmIChpcy5mbmMoZWFzaW5nKSkge1xyXG4gICAgICAgIHJldHVybiBlYXNpbmc7XHJcbiAgICB9XHJcbiAgICB2YXIgbmFtZSA9IGVhc2luZy5zcGxpdCgnKCcpWzBdO1xyXG4gICAgdmFyIGVhc2UgPSBwZW5uZXJbbmFtZV07XHJcbiAgICB2YXIgYXJncyA9IHBhcnNlRWFzaW5nUGFyYW1ldGVycyhlYXNpbmcpO1xyXG4gICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgY2FzZSAnc3ByaW5nJzpcclxuICAgICAgICAgICAgcmV0dXJuIHNwcmluZyhlYXNpbmcsIGR1cmF0aW9uKTtcclxuICAgICAgICBjYXNlICdjdWJpY0Jlemllcic6XHJcbiAgICAgICAgICAgIHJldHVybiBhcHBseUFyZ3VtZW50cyhiZXppZXIsIGFyZ3MpO1xyXG4gICAgICAgIGNhc2UgJ3N0ZXBzJzpcclxuICAgICAgICAgICAgcmV0dXJuIGFwcGx5QXJndW1lbnRzKHN0ZXBzLCBhcmdzKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gYXBwbHlBcmd1bWVudHMoZWFzZSwgYXJncyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFN0cmluZ3NcclxuXHJcbmZ1bmN0aW9uIHNlbGVjdFN0cmluZyhzdHIpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIG5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzdHIpO1xyXG4gICAgICAgIHJldHVybiBub2RlcztcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEFycmF5c1xyXG5cclxuZnVuY3Rpb24gZmlsdGVyQXJyYXkoYXJyLCBjYWxsYmFjaykge1xyXG4gICAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XHJcbiAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPj0gMiA/IGFyZ3VtZW50c1sxXSA6IHZvaWQgMDtcclxuICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBpZiAoaSBpbiBhcnIpIHtcclxuICAgICAgICAgICAgdmFyIHZhbCA9IGFycltpXTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsLCBpLCBhcnIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gZmxhdHRlbkFycmF5KGFycikge1xyXG4gICAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgIHJldHVybiBhLmNvbmNhdChpcy5hcnIoYikgPyBmbGF0dGVuQXJyYXkoYikgOiBiKTtcclxuICAgIH0sIFtdKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9BcnJheShvKSB7XHJcbiAgICBpZiAoaXMuYXJyKG8pKSB7XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICB9XHJcbiAgICBpZiAoaXMuc3RyKG8pKSB7XHJcbiAgICAgICAgbyA9IHNlbGVjdFN0cmluZyhvKSB8fCBvO1xyXG4gICAgfVxyXG4gICAgaWYgKG8gaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBvIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gW10uc2xpY2UuY2FsbChvKTtcclxuICAgIH1cclxuICAgIHJldHVybiBbb107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFycmF5Q29udGFpbnMoYXJyLCB2YWwpIHtcclxuICAgIHJldHVybiBhcnIuc29tZShmdW5jdGlvbihhKSB7XHJcbiAgICAgICAgcmV0dXJuIGEgPT09IHZhbDtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBPYmplY3RzXHJcblxyXG5mdW5jdGlvbiBjbG9uZU9iamVjdChvKSB7XHJcbiAgICB2YXIgY2xvbmUgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gbykge1xyXG4gICAgICAgIGNsb25lW3BdID0gb1twXTtcclxuICAgIH1cclxuICAgIHJldHVybiBjbG9uZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVwbGFjZU9iamVjdFByb3BzKG8xLCBvMikge1xyXG4gICAgdmFyIG8gPSBjbG9uZU9iamVjdChvMSk7XHJcbiAgICBmb3IgKHZhciBwIGluIG8xKSB7XHJcbiAgICAgICAgb1twXSA9IG8yLmhhc093blByb3BlcnR5KHApID8gbzJbcF0gOiBvMVtwXTtcclxuICAgIH1cclxuICAgIHJldHVybiBvO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtZXJnZU9iamVjdHMobzEsIG8yKSB7XHJcbiAgICB2YXIgbyA9IGNsb25lT2JqZWN0KG8xKTtcclxuICAgIGZvciAodmFyIHAgaW4gbzIpIHtcclxuICAgICAgICBvW3BdID0gaXMudW5kKG8xW3BdKSA/IG8yW3BdIDogbzFbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbztcclxufVxyXG5cclxuLy8gQ29sb3JzXHJcblxyXG5mdW5jdGlvbiByZ2JUb1JnYmEocmdiVmFsdWUpIHtcclxuICAgIHZhciByZ2IgPSAvcmdiXFwoKFxcZCssXFxzKltcXGRdKyxcXHMqW1xcZF0rKVxcKS9nLmV4ZWMocmdiVmFsdWUpO1xyXG4gICAgcmV0dXJuIHJnYiA/IChcInJnYmEoXCIgKyAocmdiWzFdKSArIFwiLDEpXCIpIDogcmdiVmFsdWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhleFRvUmdiYShoZXhWYWx1ZSkge1xyXG4gICAgdmFyIHJneCA9IC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2k7XHJcbiAgICB2YXIgaGV4ID0gaGV4VmFsdWUucmVwbGFjZShyZ3gsIGZ1bmN0aW9uKG0sIHIsIGcsIGIpIHtcclxuICAgICAgICByZXR1cm4gciArIHIgKyBnICsgZyArIGIgKyBiO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgcmdiID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XHJcbiAgICB2YXIgciA9IHBhcnNlSW50KHJnYlsxXSwgMTYpO1xyXG4gICAgdmFyIGcgPSBwYXJzZUludChyZ2JbMl0sIDE2KTtcclxuICAgIHZhciBiID0gcGFyc2VJbnQocmdiWzNdLCAxNik7XHJcbiAgICByZXR1cm4gKFwicmdiYShcIiArIHIgKyBcIixcIiArIGcgKyBcIixcIiArIGIgKyBcIiwxKVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaHNsVG9SZ2JhKGhzbFZhbHVlKSB7XHJcbiAgICB2YXIgaHNsID0gL2hzbFxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJVxcKS9nLmV4ZWMoaHNsVmFsdWUpIHx8IC9oc2xhXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKylcXCkvZy5leGVjKGhzbFZhbHVlKTtcclxuICAgIHZhciBoID0gcGFyc2VJbnQoaHNsWzFdLCAxMCkgLyAzNjA7XHJcbiAgICB2YXIgcyA9IHBhcnNlSW50KGhzbFsyXSwgMTApIC8gMTAwO1xyXG4gICAgdmFyIGwgPSBwYXJzZUludChoc2xbM10sIDEwKSAvIDEwMDtcclxuICAgIHZhciBhID0gaHNsWzRdIHx8IDE7XHJcblxyXG4gICAgZnVuY3Rpb24gaHVlMnJnYihwLCBxLCB0KSB7XHJcbiAgICAgICAgaWYgKHQgPCAwKSB7XHJcbiAgICAgICAgICAgIHQgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHQgPiAxKSB7XHJcbiAgICAgICAgICAgIHQgLT0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHQgPCAxIC8gNikge1xyXG4gICAgICAgICAgICByZXR1cm4gcCArIChxIC0gcCkgKiA2ICogdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHQgPCAxIC8gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gcTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHQgPCAyIC8gMykge1xyXG4gICAgICAgICAgICByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG4gICAgdmFyIHIsIGcsIGI7XHJcbiAgICBpZiAocyA9PSAwKSB7XHJcbiAgICAgICAgciA9IGcgPSBiID0gbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHEgPSBsIDwgMC41ID8gbCAqICgxICsgcykgOiBsICsgcyAtIGwgKiBzO1xyXG4gICAgICAgIHZhciBwID0gMiAqIGwgLSBxO1xyXG4gICAgICAgIHIgPSBodWUycmdiKHAsIHEsIGggKyAxIC8gMyk7XHJcbiAgICAgICAgZyA9IGh1ZTJyZ2IocCwgcSwgaCk7XHJcbiAgICAgICAgYiA9IGh1ZTJyZ2IocCwgcSwgaCAtIDEgLyAzKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXCJyZ2JhKFwiICsgKHIgKiAyNTUpICsgXCIsXCIgKyAoZyAqIDI1NSkgKyBcIixcIiArIChiICogMjU1KSArIFwiLFwiICsgYSArIFwiKVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29sb3JUb1JnYih2YWwpIHtcclxuICAgIGlmIChpcy5yZ2IodmFsKSkge1xyXG4gICAgICAgIHJldHVybiByZ2JUb1JnYmEodmFsKTtcclxuICAgIH1cclxuICAgIGlmIChpcy5oZXgodmFsKSkge1xyXG4gICAgICAgIHJldHVybiBoZXhUb1JnYmEodmFsKTtcclxuICAgIH1cclxuICAgIGlmIChpcy5oc2wodmFsKSkge1xyXG4gICAgICAgIHJldHVybiBoc2xUb1JnYmEodmFsKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gVW5pdHNcclxuXHJcbmZ1bmN0aW9uIGdldFVuaXQodmFsKSB7XHJcbiAgICB2YXIgc3BsaXQgPSAvWystXT9cXGQqXFwuP1xcZCsoPzpcXC5cXGQrKT8oPzpbZUVdWystXT9cXGQrKT8oJXxweHxwdHxlbXxyZW18aW58Y218bW18ZXh8Y2h8cGN8dnd8dmh8dm1pbnx2bWF4fGRlZ3xyYWR8dHVybik/JC8uZXhlYyh2YWwpO1xyXG4gICAgaWYgKHNwbGl0KSB7XHJcbiAgICAgICAgcmV0dXJuIHNwbGl0WzFdO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUcmFuc2Zvcm1Vbml0KHByb3BOYW1lKSB7XHJcbiAgICBpZiAoc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICd0cmFuc2xhdGUnKSB8fCBwcm9wTmFtZSA9PT0gJ3BlcnNwZWN0aXZlJykge1xyXG4gICAgICAgIHJldHVybiAncHgnO1xyXG4gICAgfVxyXG4gICAgaWYgKHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAncm90YXRlJykgfHwgc3RyaW5nQ29udGFpbnMocHJvcE5hbWUsICdza2V3JykpIHtcclxuICAgICAgICByZXR1cm4gJ2RlZyc7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFZhbHVlc1xyXG5cclxuZnVuY3Rpb24gZ2V0RnVuY3Rpb25WYWx1ZSh2YWwsIGFuaW1hdGFibGUpIHtcclxuICAgIGlmICghaXMuZm5jKHZhbCkpIHtcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHZhbChhbmltYXRhYmxlLnRhcmdldCwgYW5pbWF0YWJsZS5pZCwgYW5pbWF0YWJsZS50b3RhbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShlbCwgcHJvcCkge1xyXG4gICAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZShwcm9wKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udmVydFB4VG9Vbml0KGVsLCB2YWx1ZSwgdW5pdCkge1xyXG4gICAgdmFyIHZhbHVlVW5pdCA9IGdldFVuaXQodmFsdWUpO1xyXG4gICAgaWYgKGFycmF5Q29udGFpbnMoW3VuaXQsICdkZWcnLCAncmFkJywgJ3R1cm4nXSwgdmFsdWVVbml0KSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIHZhciBjYWNoZWQgPSBjYWNoZS5DU1NbdmFsdWUgKyB1bml0XTtcclxuICAgIGlmICghaXMudW5kKGNhY2hlZCkpIHtcclxuICAgICAgICByZXR1cm4gY2FjaGVkO1xyXG4gICAgfVxyXG4gICAgdmFyIGJhc2VsaW5lID0gMTAwO1xyXG4gICAgdmFyIHRlbXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWwudGFnTmFtZSk7XHJcbiAgICB2YXIgcGFyZW50RWwgPSAoZWwucGFyZW50Tm9kZSAmJiAoZWwucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQpKSA/IGVsLnBhcmVudE5vZGUgOiBkb2N1bWVudC5ib2R5O1xyXG4gICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQodGVtcEVsKTtcclxuICAgIHRlbXBFbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICB0ZW1wRWwuc3R5bGUud2lkdGggPSBiYXNlbGluZSArIHVuaXQ7XHJcbiAgICB2YXIgZmFjdG9yID0gYmFzZWxpbmUgLyB0ZW1wRWwub2Zmc2V0V2lkdGg7XHJcbiAgICBwYXJlbnRFbC5yZW1vdmVDaGlsZCh0ZW1wRWwpO1xyXG4gICAgdmFyIGNvbnZlcnRlZFVuaXQgPSBmYWN0b3IgKiBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIGNhY2hlLkNTU1t2YWx1ZSArIHVuaXRdID0gY29udmVydGVkVW5pdDtcclxuICAgIHJldHVybiBjb252ZXJ0ZWRVbml0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDU1NWYWx1ZShlbCwgcHJvcCwgdW5pdCkge1xyXG4gICAgaWYgKHByb3AgaW4gZWwuc3R5bGUpIHtcclxuICAgICAgICB2YXIgdXBwZXJjYXNlUHJvcE5hbWUgPSBwcm9wLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gZWwuc3R5bGVbcHJvcF0gfHwgZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZSh1cHBlcmNhc2VQcm9wTmFtZSkgfHwgJzAnO1xyXG4gICAgICAgIHJldHVybiB1bml0ID8gY29udmVydFB4VG9Vbml0KGVsLCB2YWx1ZSwgdW5pdCkgOiB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QW5pbWF0aW9uVHlwZShlbCwgcHJvcCkge1xyXG4gICAgaWYgKGlzLmRvbShlbCkgJiYgIWlzLmlucChlbCkgJiYgKCFpcy5uaWwoZ2V0QXR0cmlidXRlKGVsLCBwcm9wKSkgfHwgKGlzLnN2ZyhlbCkgJiYgZWxbcHJvcF0pKSkge1xyXG4gICAgICAgIHJldHVybiAnYXR0cmlidXRlJztcclxuICAgIH1cclxuICAgIGlmIChpcy5kb20oZWwpICYmIGFycmF5Q29udGFpbnModmFsaWRUcmFuc2Zvcm1zLCBwcm9wKSkge1xyXG4gICAgICAgIHJldHVybiAndHJhbnNmb3JtJztcclxuICAgIH1cclxuICAgIGlmIChpcy5kb20oZWwpICYmIChwcm9wICE9PSAndHJhbnNmb3JtJyAmJiBnZXRDU1NWYWx1ZShlbCwgcHJvcCkpKSB7XHJcbiAgICAgICAgcmV0dXJuICdjc3MnO1xyXG4gICAgfVxyXG4gICAgaWYgKGVsW3Byb3BdICE9IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gJ29iamVjdCc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEVsZW1lbnRUcmFuc2Zvcm1zKGVsKSB7XHJcbiAgICBpZiAoIWlzLmRvbShlbCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgc3RyID0gZWwuc3R5bGUudHJhbnNmb3JtIHx8ICcnO1xyXG4gICAgdmFyIHJlZyA9IC8oXFx3KylcXCgoW14pXSopXFwpL2c7XHJcbiAgICB2YXIgdHJhbnNmb3JtcyA9IG5ldyBNYXAoKTtcclxuICAgIHZhciBtO1xyXG4gICAgd2hpbGUgKG0gPSByZWcuZXhlYyhzdHIpKSB7XHJcbiAgICAgICAgdHJhbnNmb3Jtcy5zZXQobVsxXSwgbVsyXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJhbnNmb3JtcztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VHJhbnNmb3JtVmFsdWUoZWwsIHByb3BOYW1lLCBhbmltYXRhYmxlLCB1bml0KSB7XHJcbiAgICB2YXIgZGVmYXVsdFZhbCA9IHN0cmluZ0NvbnRhaW5zKHByb3BOYW1lLCAnc2NhbGUnKSA/IDEgOiAwICsgZ2V0VHJhbnNmb3JtVW5pdChwcm9wTmFtZSk7XHJcbiAgICB2YXIgdmFsdWUgPSBnZXRFbGVtZW50VHJhbnNmb3JtcyhlbCkuZ2V0KHByb3BOYW1lKSB8fCBkZWZhdWx0VmFsO1xyXG4gICAgaWYgKGFuaW1hdGFibGUpIHtcclxuICAgICAgICBhbmltYXRhYmxlLnRyYW5zZm9ybXMubGlzdC5zZXQocHJvcE5hbWUsIHZhbHVlKTtcclxuICAgICAgICBhbmltYXRhYmxlLnRyYW5zZm9ybXNbJ2xhc3QnXSA9IHByb3BOYW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuaXQgPyBjb252ZXJ0UHhUb1VuaXQoZWwsIHZhbHVlLCB1bml0KSA6IHZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRPcmlnaW5hbFRhcmdldFZhbHVlKHRhcmdldCwgcHJvcE5hbWUsIHVuaXQsIGFuaW1hdGFibGUpIHtcclxuICAgIHN3aXRjaCAoZ2V0QW5pbWF0aW9uVHlwZSh0YXJnZXQsIHByb3BOYW1lKSkge1xyXG4gICAgICAgIGNhc2UgJ3RyYW5zZm9ybSc6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRUcmFuc2Zvcm1WYWx1ZSh0YXJnZXQsIHByb3BOYW1lLCBhbmltYXRhYmxlLCB1bml0KTtcclxuICAgICAgICBjYXNlICdjc3MnOlxyXG4gICAgICAgICAgICByZXR1cm4gZ2V0Q1NTVmFsdWUodGFyZ2V0LCBwcm9wTmFtZSwgdW5pdCk7XHJcbiAgICAgICAgY2FzZSAnYXR0cmlidXRlJzpcclxuICAgICAgICAgICAgcmV0dXJuIGdldEF0dHJpYnV0ZSh0YXJnZXQsIHByb3BOYW1lKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Byb3BOYW1lXSB8fCAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZWxhdGl2ZVZhbHVlKHRvLCBmcm9tKSB7XHJcbiAgICB2YXIgb3BlcmF0b3IgPSAvXihcXCo9fFxcKz18LT0pLy5leGVjKHRvKTtcclxuICAgIGlmICghb3BlcmF0b3IpIHtcclxuICAgICAgICByZXR1cm4gdG87XHJcbiAgICB9XHJcbiAgICB2YXIgdSA9IGdldFVuaXQodG8pIHx8IDA7XHJcbiAgICB2YXIgeCA9IHBhcnNlRmxvYXQoZnJvbSk7XHJcbiAgICB2YXIgeSA9IHBhcnNlRmxvYXQodG8ucmVwbGFjZShvcGVyYXRvclswXSwgJycpKTtcclxuICAgIHN3aXRjaCAob3BlcmF0b3JbMF1bMF0pIHtcclxuICAgICAgICBjYXNlICcrJzpcclxuICAgICAgICAgICAgcmV0dXJuIHggKyB5ICsgdTtcclxuICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgICAgcmV0dXJuIHggLSB5ICsgdTtcclxuICAgICAgICBjYXNlICcqJzpcclxuICAgICAgICAgICAgcmV0dXJuIHggKiB5ICsgdTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVWYWx1ZSh2YWwsIHVuaXQpIHtcclxuICAgIGlmIChpcy5jb2wodmFsKSkge1xyXG4gICAgICAgIHJldHVybiBjb2xvclRvUmdiKHZhbCk7XHJcbiAgICB9XHJcbiAgICBpZiAoL1xccy9nLnRlc3QodmFsKSkge1xyXG4gICAgICAgIHJldHVybiB2YWw7XHJcbiAgICB9XHJcbiAgICB2YXIgb3JpZ2luYWxVbml0ID0gZ2V0VW5pdCh2YWwpO1xyXG4gICAgdmFyIHVuaXRMZXNzID0gb3JpZ2luYWxVbml0ID8gdmFsLnN1YnN0cigwLCB2YWwubGVuZ3RoIC0gb3JpZ2luYWxVbml0Lmxlbmd0aCkgOiB2YWw7XHJcbiAgICBpZiAodW5pdCkge1xyXG4gICAgICAgIHJldHVybiB1bml0TGVzcyArIHVuaXQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5pdExlc3M7XHJcbn1cclxuXHJcbi8vIGdldFRvdGFsTGVuZ3RoKCkgZXF1aXZhbGVudCBmb3IgY2lyY2xlLCByZWN0LCBwb2x5bGluZSwgcG9seWdvbiBhbmQgbGluZSBzaGFwZXNcclxuLy8gYWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL1NlYkxhbWJsYS8zZTA1NTBjNDk2YzIzNjcwOTc0NFxyXG5cclxuZnVuY3Rpb24gZ2V0RGlzdGFuY2UocDEsIHAyKSB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHAyLnggLSBwMS54LCAyKSArIE1hdGgucG93KHAyLnkgLSBwMS55LCAyKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENpcmNsZUxlbmd0aChlbCkge1xyXG4gICAgcmV0dXJuIE1hdGguUEkgKiAyICogZ2V0QXR0cmlidXRlKGVsLCAncicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZWN0TGVuZ3RoKGVsKSB7XHJcbiAgICByZXR1cm4gKGdldEF0dHJpYnV0ZShlbCwgJ3dpZHRoJykgKiAyKSArIChnZXRBdHRyaWJ1dGUoZWwsICdoZWlnaHQnKSAqIDIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMaW5lTGVuZ3RoKGVsKSB7XHJcbiAgICByZXR1cm4gZ2V0RGlzdGFuY2Uoe1xyXG4gICAgICAgIHg6IGdldEF0dHJpYnV0ZShlbCwgJ3gxJyksXHJcbiAgICAgICAgeTogZ2V0QXR0cmlidXRlKGVsLCAneTEnKVxyXG4gICAgfSwge1xyXG4gICAgICAgIHg6IGdldEF0dHJpYnV0ZShlbCwgJ3gyJyksXHJcbiAgICAgICAgeTogZ2V0QXR0cmlidXRlKGVsLCAneTInKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBvbHlsaW5lTGVuZ3RoKGVsKSB7XHJcbiAgICB2YXIgcG9pbnRzID0gZWwucG9pbnRzO1xyXG4gICAgdmFyIHRvdGFsTGVuZ3RoID0gMDtcclxuICAgIHZhciBwcmV2aW91c1BvcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLm51bWJlck9mSXRlbXM7IGkrKykge1xyXG4gICAgICAgIHZhciBjdXJyZW50UG9zID0gcG9pbnRzLmdldEl0ZW0oaSk7XHJcbiAgICAgICAgaWYgKGkgPiAwKSB7XHJcbiAgICAgICAgICAgIHRvdGFsTGVuZ3RoICs9IGdldERpc3RhbmNlKHByZXZpb3VzUG9zLCBjdXJyZW50UG9zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJldmlvdXNQb3MgPSBjdXJyZW50UG9zO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvdGFsTGVuZ3RoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQb2x5Z29uTGVuZ3RoKGVsKSB7XHJcbiAgICB2YXIgcG9pbnRzID0gZWwucG9pbnRzO1xyXG4gICAgcmV0dXJuIGdldFBvbHlsaW5lTGVuZ3RoKGVsKSArIGdldERpc3RhbmNlKHBvaW50cy5nZXRJdGVtKHBvaW50cy5udW1iZXJPZkl0ZW1zIC0gMSksIHBvaW50cy5nZXRJdGVtKDApKTtcclxufVxyXG5cclxuLy8gUGF0aCBhbmltYXRpb25cclxuXHJcbmZ1bmN0aW9uIGdldFRvdGFsTGVuZ3RoKGVsKSB7XHJcbiAgICBpZiAoZWwuZ2V0VG90YWxMZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gZWwuZ2V0VG90YWxMZW5ndGgoKTtcclxuICAgIH1cclxuICAgIHN3aXRjaCAoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgY2FzZSAnY2lyY2xlJzpcclxuICAgICAgICAgICAgcmV0dXJuIGdldENpcmNsZUxlbmd0aChlbCk7XHJcbiAgICAgICAgY2FzZSAncmVjdCc6XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRSZWN0TGVuZ3RoKGVsKTtcclxuICAgICAgICBjYXNlICdsaW5lJzpcclxuICAgICAgICAgICAgcmV0dXJuIGdldExpbmVMZW5ndGgoZWwpO1xyXG4gICAgICAgIGNhc2UgJ3BvbHlsaW5lJzpcclxuICAgICAgICAgICAgcmV0dXJuIGdldFBvbHlsaW5lTGVuZ3RoKGVsKTtcclxuICAgICAgICBjYXNlICdwb2x5Z29uJzpcclxuICAgICAgICAgICAgcmV0dXJuIGdldFBvbHlnb25MZW5ndGgoZWwpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXREYXNob2Zmc2V0KGVsKSB7XHJcbiAgICB2YXIgcGF0aExlbmd0aCA9IGdldFRvdGFsTGVuZ3RoKGVsKTtcclxuICAgIGVsLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIHBhdGhMZW5ndGgpO1xyXG4gICAgcmV0dXJuIHBhdGhMZW5ndGg7XHJcbn1cclxuXHJcbi8vIE1vdGlvbiBwYXRoXHJcblxyXG5mdW5jdGlvbiBnZXRQYXJlbnRTdmdFbChlbCkge1xyXG4gICAgdmFyIHBhcmVudEVsID0gZWwucGFyZW50Tm9kZTtcclxuICAgIHdoaWxlIChpcy5zdmcocGFyZW50RWwpKSB7XHJcbiAgICAgICAgaWYgKCFpcy5zdmcocGFyZW50RWwucGFyZW50Tm9kZSkpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmVudEVsID0gcGFyZW50RWwucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJlbnRFbDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGFyZW50U3ZnKHBhdGhFbCwgc3ZnRGF0YSkge1xyXG4gICAgdmFyIHN2ZyA9IHN2Z0RhdGEgfHwge307XHJcbiAgICB2YXIgcGFyZW50U3ZnRWwgPSBzdmcuZWwgfHwgZ2V0UGFyZW50U3ZnRWwocGF0aEVsKTtcclxuICAgIHZhciByZWN0ID0gcGFyZW50U3ZnRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICB2YXIgdmlld0JveEF0dHIgPSBnZXRBdHRyaWJ1dGUocGFyZW50U3ZnRWwsICd2aWV3Qm94Jyk7XHJcbiAgICB2YXIgd2lkdGggPSByZWN0LndpZHRoO1xyXG4gICAgdmFyIGhlaWdodCA9IHJlY3QuaGVpZ2h0O1xyXG4gICAgdmFyIHZpZXdCb3ggPSBzdmcudmlld0JveCB8fCAodmlld0JveEF0dHIgPyB2aWV3Qm94QXR0ci5zcGxpdCgnICcpIDogWzAsIDAsIHdpZHRoLCBoZWlnaHRdKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZWw6IHBhcmVudFN2Z0VsLFxyXG4gICAgICAgIHZpZXdCb3g6IHZpZXdCb3gsXHJcbiAgICAgICAgeDogdmlld0JveFswXSAvIDEsXHJcbiAgICAgICAgeTogdmlld0JveFsxXSAvIDEsXHJcbiAgICAgICAgdzogd2lkdGgsXHJcbiAgICAgICAgaDogaGVpZ2h0LFxyXG4gICAgICAgIHZXOiB2aWV3Qm94WzJdLFxyXG4gICAgICAgIHZIOiB2aWV3Qm94WzNdXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFBhdGgocGF0aCwgcGVyY2VudCkge1xyXG4gICAgdmFyIHBhdGhFbCA9IGlzLnN0cihwYXRoKSA/IHNlbGVjdFN0cmluZyhwYXRoKVswXSA6IHBhdGg7XHJcbiAgICB2YXIgcCA9IHBlcmNlbnQgfHwgMTAwO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKHByb3BlcnR5KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICBlbDogcGF0aEVsLFxyXG4gICAgICAgICAgICBzdmc6IGdldFBhcmVudFN2ZyhwYXRoRWwpLFxyXG4gICAgICAgICAgICB0b3RhbExlbmd0aDogZ2V0VG90YWxMZW5ndGgocGF0aEVsKSAqIChwIC8gMTAwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGF0aFByb2dyZXNzKHBhdGgsIHByb2dyZXNzLCBpc1BhdGhUYXJnZXRJbnNpZGVTVkcpIHtcclxuICAgIGZ1bmN0aW9uIHBvaW50KG9mZnNldCkge1xyXG4gICAgICAgIGlmIChvZmZzZXQgPT09IHZvaWQgMCkgb2Zmc2V0ID0gMDtcclxuXHJcbiAgICAgICAgdmFyIGwgPSBwcm9ncmVzcyArIG9mZnNldCA+PSAxID8gcHJvZ3Jlc3MgKyBvZmZzZXQgOiAwO1xyXG4gICAgICAgIHJldHVybiBwYXRoLmVsLmdldFBvaW50QXRMZW5ndGgobCk7XHJcbiAgICB9XHJcbiAgICB2YXIgc3ZnID0gZ2V0UGFyZW50U3ZnKHBhdGguZWwsIHBhdGguc3ZnKTtcclxuICAgIHZhciBwID0gcG9pbnQoKTtcclxuICAgIHZhciBwMCA9IHBvaW50KC0xKTtcclxuICAgIHZhciBwMSA9IHBvaW50KCsxKTtcclxuICAgIHZhciBzY2FsZVggPSBpc1BhdGhUYXJnZXRJbnNpZGVTVkcgPyAxIDogc3ZnLncgLyBzdmcudlc7XHJcbiAgICB2YXIgc2NhbGVZID0gaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHID8gMSA6IHN2Zy5oIC8gc3ZnLnZIO1xyXG4gICAgc3dpdGNoIChwYXRoLnByb3BlcnR5KSB7XHJcbiAgICAgICAgY2FzZSAneCc6XHJcbiAgICAgICAgICAgIHJldHVybiAocC54IC0gc3ZnLngpICogc2NhbGVYO1xyXG4gICAgICAgIGNhc2UgJ3knOlxyXG4gICAgICAgICAgICByZXR1cm4gKHAueSAtIHN2Zy55KSAqIHNjYWxlWTtcclxuICAgICAgICBjYXNlICdhbmdsZSc6XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHAxLnkgLSBwMC55LCBwMS54IC0gcDAueCkgKiAxODAgLyBNYXRoLlBJO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBEZWNvbXBvc2UgdmFsdWVcclxuXHJcbmZ1bmN0aW9uIGRlY29tcG9zZVZhbHVlKHZhbCwgdW5pdCkge1xyXG4gICAgLy8gY29uc3Qgcmd4ID0gLy0/XFxkKlxcLj9cXGQrL2c7IC8vIGhhbmRsZXMgYmFzaWMgbnVtYmVyc1xyXG4gICAgLy8gY29uc3Qgcmd4ID0gL1srLV0/XFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPy9nOyAvLyBoYW5kbGVzIGV4cG9uZW50cyBub3RhdGlvblxyXG4gICAgdmFyIHJneCA9IC9bKy1dP1xcZCpcXC4/XFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPy9nOyAvLyBoYW5kbGVzIGV4cG9uZW50cyBub3RhdGlvblxyXG4gICAgdmFyIHZhbHVlID0gdmFsaWRhdGVWYWx1ZSgoaXMucHRoKHZhbCkgPyB2YWwudG90YWxMZW5ndGggOiB2YWwpLCB1bml0KSArICcnO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBvcmlnaW5hbDogdmFsdWUsXHJcbiAgICAgICAgbnVtYmVyczogdmFsdWUubWF0Y2gocmd4KSA/IHZhbHVlLm1hdGNoKHJneCkubWFwKE51bWJlcikgOiBbMF0sXHJcbiAgICAgICAgc3RyaW5nczogKGlzLnN0cih2YWwpIHx8IHVuaXQpID8gdmFsdWUuc3BsaXQocmd4KSA6IFtdXHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEFuaW1hdGFibGVzXHJcblxyXG5mdW5jdGlvbiBwYXJzZVRhcmdldHModGFyZ2V0cykge1xyXG4gICAgdmFyIHRhcmdldHNBcnJheSA9IHRhcmdldHMgPyAoZmxhdHRlbkFycmF5KGlzLmFycih0YXJnZXRzKSA/IHRhcmdldHMubWFwKHRvQXJyYXkpIDogdG9BcnJheSh0YXJnZXRzKSkpIDogW107XHJcbiAgICByZXR1cm4gZmlsdGVyQXJyYXkodGFyZ2V0c0FycmF5LCBmdW5jdGlvbihpdGVtLCBwb3MsIHNlbGYpIHtcclxuICAgICAgICByZXR1cm4gc2VsZi5pbmRleE9mKGl0ZW0pID09PSBwb3M7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QW5pbWF0YWJsZXModGFyZ2V0cykge1xyXG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlVGFyZ2V0cyh0YXJnZXRzKTtcclxuICAgIHJldHVybiBwYXJzZWQubWFwKGZ1bmN0aW9uKHQsIGkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHQsXHJcbiAgICAgICAgICAgIGlkOiBpLFxyXG4gICAgICAgICAgICB0b3RhbDogcGFyc2VkLmxlbmd0aCxcclxuICAgICAgICAgICAgdHJhbnNmb3Jtczoge1xyXG4gICAgICAgICAgICAgICAgbGlzdDogZ2V0RWxlbWVudFRyYW5zZm9ybXModClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gUHJvcGVydGllc1xyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplUHJvcGVydHlUd2VlbnMocHJvcCwgdHdlZW5TZXR0aW5ncykge1xyXG4gICAgdmFyIHNldHRpbmdzID0gY2xvbmVPYmplY3QodHdlZW5TZXR0aW5ncyk7XHJcbiAgICAvLyBPdmVycmlkZSBkdXJhdGlvbiBpZiBlYXNpbmcgaXMgYSBzcHJpbmdcclxuICAgIGlmICgvXnNwcmluZy8udGVzdChzZXR0aW5ncy5lYXNpbmcpKSB7XHJcbiAgICAgICAgc2V0dGluZ3MuZHVyYXRpb24gPSBzcHJpbmcoc2V0dGluZ3MuZWFzaW5nKTtcclxuICAgIH1cclxuICAgIGlmIChpcy5hcnIocHJvcCkpIHtcclxuICAgICAgICB2YXIgbCA9IHByb3AubGVuZ3RoO1xyXG4gICAgICAgIHZhciBpc0Zyb21UbyA9IChsID09PSAyICYmICFpcy5vYmoocHJvcFswXSkpO1xyXG4gICAgICAgIGlmICghaXNGcm9tVG8pIHtcclxuICAgICAgICAgICAgLy8gRHVyYXRpb24gZGl2aWRlZCBieSB0aGUgbnVtYmVyIG9mIHR3ZWVuc1xyXG4gICAgICAgICAgICBpZiAoIWlzLmZuYyh0d2VlblNldHRpbmdzLmR1cmF0aW9uKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3MuZHVyYXRpb24gPSB0d2VlblNldHRpbmdzLmR1cmF0aW9uIC8gbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFRyYW5zZm9ybSBbZnJvbSwgdG9dIHZhbHVlcyBzaG9ydGhhbmQgdG8gYSB2YWxpZCB0d2VlbiB2YWx1ZVxyXG4gICAgICAgICAgICBwcm9wID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb3BcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgcHJvcEFycmF5ID0gaXMuYXJyKHByb3ApID8gcHJvcCA6IFtwcm9wXTtcclxuICAgIHJldHVybiBwcm9wQXJyYXkubWFwKGZ1bmN0aW9uKHYsIGkpIHtcclxuICAgICAgICB2YXIgb2JqID0gKGlzLm9iaih2KSAmJiAhaXMucHRoKHYpKSA/IHYgOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiB2XHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBEZWZhdWx0IGRlbGF5IHZhbHVlIHNob3VsZCBvbmx5IGJlIGFwcGxpZWQgdG8gdGhlIGZpcnN0IHR3ZWVuXHJcbiAgICAgICAgaWYgKGlzLnVuZChvYmouZGVsYXkpKSB7XHJcbiAgICAgICAgICAgIG9iai5kZWxheSA9ICFpID8gdHdlZW5TZXR0aW5ncy5kZWxheSA6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERlZmF1bHQgZW5kRGVsYXkgdmFsdWUgc2hvdWxkIG9ubHkgYmUgYXBwbGllZCB0byB0aGUgbGFzdCB0d2VlblxyXG4gICAgICAgIGlmIChpcy51bmQob2JqLmVuZERlbGF5KSkge1xyXG4gICAgICAgICAgICBvYmouZW5kRGVsYXkgPSBpID09PSBwcm9wQXJyYXkubGVuZ3RoIC0gMSA/IHR3ZWVuU2V0dGluZ3MuZW5kRGVsYXkgOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfSkubWFwKGZ1bmN0aW9uKGspIHtcclxuICAgICAgICByZXR1cm4gbWVyZ2VPYmplY3RzKGssIHNldHRpbmdzKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZmxhdHRlbktleWZyYW1lcyhrZXlmcmFtZXMpIHtcclxuICAgIHZhciBwcm9wZXJ0eU5hbWVzID0gZmlsdGVyQXJyYXkoZmxhdHRlbkFycmF5KGtleWZyYW1lcy5tYXAoZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhrZXkpO1xyXG4gICAgICAgIH0pKSwgZnVuY3Rpb24ocCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXMua2V5KHApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIGlmIChhLmluZGV4T2YoYikgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBhLnB1c2goYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGE7XHJcbiAgICAgICAgfSwgW10pO1xyXG4gICAgdmFyIHByb3BlcnRpZXMgPSB7fTtcclxuICAgIHZhciBsb29wID0gZnVuY3Rpb24oaSkge1xyXG4gICAgICAgIHZhciBwcm9wTmFtZSA9IHByb3BlcnR5TmFtZXNbaV07XHJcbiAgICAgICAgcHJvcGVydGllc1twcm9wTmFtZV0gPSBrZXlmcmFtZXMubWFwKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICB2YXIgbmV3S2V5ID0ge307XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXMua2V5KHApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAgPT0gcHJvcE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3S2V5LnZhbHVlID0ga2V5W3BdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3S2V5W3BdID0ga2V5W3BdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdLZXk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydHlOYW1lcy5sZW5ndGg7IGkrKykgbG9vcChpKTtcclxuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQcm9wZXJ0aWVzKHR3ZWVuU2V0dGluZ3MsIHBhcmFtcykge1xyXG4gICAgdmFyIHByb3BlcnRpZXMgPSBbXTtcclxuICAgIHZhciBrZXlmcmFtZXMgPSBwYXJhbXMua2V5ZnJhbWVzO1xyXG4gICAgaWYgKGtleWZyYW1lcykge1xyXG4gICAgICAgIHBhcmFtcyA9IG1lcmdlT2JqZWN0cyhmbGF0dGVuS2V5ZnJhbWVzKGtleWZyYW1lcyksIHBhcmFtcyk7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBwIGluIHBhcmFtcykge1xyXG4gICAgICAgIGlmIChpcy5rZXkocCkpIHtcclxuICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHAsXHJcbiAgICAgICAgICAgICAgICB0d2VlbnM6IG5vcm1hbGl6ZVByb3BlcnR5VHdlZW5zKHBhcmFtc1twXSwgdHdlZW5TZXR0aW5ncylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByb3BlcnRpZXM7XHJcbn1cclxuXHJcbi8vIFR3ZWVuc1xyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplVHdlZW5WYWx1ZXModHdlZW4sIGFuaW1hdGFibGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHR3ZWVuKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gZ2V0RnVuY3Rpb25WYWx1ZSh0d2VlbltwXSwgYW5pbWF0YWJsZSk7XHJcbiAgICAgICAgaWYgKGlzLmFycih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5tYXAoZnVuY3Rpb24odikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldEZ1bmN0aW9uVmFsdWUodiwgYW5pbWF0YWJsZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRbcF0gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHQuZHVyYXRpb24gPSBwYXJzZUZsb2F0KHQuZHVyYXRpb24pO1xyXG4gICAgdC5kZWxheSA9IHBhcnNlRmxvYXQodC5kZWxheSk7XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplVHdlZW5zKHByb3AsIGFuaW1hdGFibGUpIHtcclxuICAgIHZhciBwcmV2aW91c1R3ZWVuO1xyXG4gICAgcmV0dXJuIHByb3AudHdlZW5zLm1hcChmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgdmFyIHR3ZWVuID0gbm9ybWFsaXplVHdlZW5WYWx1ZXModCwgYW5pbWF0YWJsZSk7XHJcbiAgICAgICAgdmFyIHR3ZWVuVmFsdWUgPSB0d2Vlbi52YWx1ZTtcclxuICAgICAgICB2YXIgdG8gPSBpcy5hcnIodHdlZW5WYWx1ZSkgPyB0d2VlblZhbHVlWzFdIDogdHdlZW5WYWx1ZTtcclxuICAgICAgICB2YXIgdG9Vbml0ID0gZ2V0VW5pdCh0byk7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsVmFsdWUgPSBnZXRPcmlnaW5hbFRhcmdldFZhbHVlKGFuaW1hdGFibGUudGFyZ2V0LCBwcm9wLm5hbWUsIHRvVW5pdCwgYW5pbWF0YWJsZSk7XHJcbiAgICAgICAgdmFyIHByZXZpb3VzVmFsdWUgPSBwcmV2aW91c1R3ZWVuID8gcHJldmlvdXNUd2Vlbi50by5vcmlnaW5hbCA6IG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgdmFyIGZyb20gPSBpcy5hcnIodHdlZW5WYWx1ZSkgPyB0d2VlblZhbHVlWzBdIDogcHJldmlvdXNWYWx1ZTtcclxuICAgICAgICB2YXIgZnJvbVVuaXQgPSBnZXRVbml0KGZyb20pIHx8IGdldFVuaXQob3JpZ2luYWxWYWx1ZSk7XHJcbiAgICAgICAgdmFyIHVuaXQgPSB0b1VuaXQgfHwgZnJvbVVuaXQ7XHJcbiAgICAgICAgaWYgKGlzLnVuZCh0bykpIHtcclxuICAgICAgICAgICAgdG8gPSBwcmV2aW91c1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0d2Vlbi5mcm9tID0gZGVjb21wb3NlVmFsdWUoZnJvbSwgdW5pdCk7XHJcbiAgICAgICAgdHdlZW4udG8gPSBkZWNvbXBvc2VWYWx1ZShnZXRSZWxhdGl2ZVZhbHVlKHRvLCBmcm9tKSwgdW5pdCk7XHJcbiAgICAgICAgdHdlZW4uc3RhcnQgPSBwcmV2aW91c1R3ZWVuID8gcHJldmlvdXNUd2Vlbi5lbmQgOiAwO1xyXG4gICAgICAgIHR3ZWVuLmVuZCA9IHR3ZWVuLnN0YXJ0ICsgdHdlZW4uZGVsYXkgKyB0d2Vlbi5kdXJhdGlvbiArIHR3ZWVuLmVuZERlbGF5O1xyXG4gICAgICAgIHR3ZWVuLmVhc2luZyA9IHBhcnNlRWFzaW5ncyh0d2Vlbi5lYXNpbmcsIHR3ZWVuLmR1cmF0aW9uKTtcclxuICAgICAgICB0d2Vlbi5pc1BhdGggPSBpcy5wdGgodHdlZW5WYWx1ZSk7XHJcbiAgICAgICAgdHdlZW4uaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHID0gdHdlZW4uaXNQYXRoICYmIGlzLnN2ZyhhbmltYXRhYmxlLnRhcmdldCk7XHJcbiAgICAgICAgdHdlZW4uaXNDb2xvciA9IGlzLmNvbCh0d2Vlbi5mcm9tLm9yaWdpbmFsKTtcclxuICAgICAgICBpZiAodHdlZW4uaXNDb2xvcikge1xyXG4gICAgICAgICAgICB0d2Vlbi5yb3VuZCA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZXZpb3VzVHdlZW4gPSB0d2VlbjtcclxuICAgICAgICByZXR1cm4gdHdlZW47XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gVHdlZW4gcHJvZ3Jlc3NcclxuXHJcbnZhciBzZXRQcm9ncmVzc1ZhbHVlID0ge1xyXG4gICAgY3NzOiBmdW5jdGlvbih0LCBwLCB2KSB7XHJcbiAgICAgICAgcmV0dXJuIHQuc3R5bGVbcF0gPSB2O1xyXG4gICAgfSxcclxuICAgIGF0dHJpYnV0ZTogZnVuY3Rpb24odCwgcCwgdikge1xyXG4gICAgICAgIHJldHVybiB0LnNldEF0dHJpYnV0ZShwLCB2KTtcclxuICAgIH0sXHJcbiAgICBvYmplY3Q6IGZ1bmN0aW9uKHQsIHAsIHYpIHtcclxuICAgICAgICByZXR1cm4gdFtwXSA9IHY7XHJcbiAgICB9LFxyXG4gICAgdHJhbnNmb3JtOiBmdW5jdGlvbih0LCBwLCB2LCB0cmFuc2Zvcm1zLCBtYW51YWwpIHtcclxuICAgICAgICB0cmFuc2Zvcm1zLmxpc3Quc2V0KHAsIHYpO1xyXG4gICAgICAgIGlmIChwID09PSB0cmFuc2Zvcm1zLmxhc3QgfHwgbWFudWFsKSB7XHJcbiAgICAgICAgICAgIHZhciBzdHIgPSAnJztcclxuICAgICAgICAgICAgdHJhbnNmb3Jtcy5saXN0LmZvckVhY2goZnVuY3Rpb24odmFsdWUsIHByb3ApIHtcclxuICAgICAgICAgICAgICAgIHN0ciArPSBwcm9wICsgXCIoXCIgKyB2YWx1ZSArIFwiKSBcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHQuc3R5bGUudHJhbnNmb3JtID0gc3RyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbi8vIFNldCBWYWx1ZSBoZWxwZXJcclxuXHJcbmZ1bmN0aW9uIHNldFRhcmdldHNWYWx1ZSh0YXJnZXRzLCBwcm9wZXJ0aWVzKSB7XHJcbiAgICB2YXIgYW5pbWF0YWJsZXMgPSBnZXRBbmltYXRhYmxlcyh0YXJnZXRzKTtcclxuICAgIGFuaW1hdGFibGVzLmZvckVhY2goZnVuY3Rpb24oYW5pbWF0YWJsZSkge1xyXG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIHByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZ2V0RnVuY3Rpb25WYWx1ZShwcm9wZXJ0aWVzW3Byb3BlcnR5XSwgYW5pbWF0YWJsZSk7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBhbmltYXRhYmxlLnRhcmdldDtcclxuICAgICAgICAgICAgdmFyIHZhbHVlVW5pdCA9IGdldFVuaXQodmFsdWUpO1xyXG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IGdldE9yaWdpbmFsVGFyZ2V0VmFsdWUodGFyZ2V0LCBwcm9wZXJ0eSwgdmFsdWVVbml0LCBhbmltYXRhYmxlKTtcclxuICAgICAgICAgICAgdmFyIHVuaXQgPSB2YWx1ZVVuaXQgfHwgZ2V0VW5pdChvcmlnaW5hbFZhbHVlKTtcclxuICAgICAgICAgICAgdmFyIHRvID0gZ2V0UmVsYXRpdmVWYWx1ZSh2YWxpZGF0ZVZhbHVlKHZhbHVlLCB1bml0KSwgb3JpZ2luYWxWYWx1ZSk7XHJcbiAgICAgICAgICAgIHZhciBhbmltVHlwZSA9IGdldEFuaW1hdGlvblR5cGUodGFyZ2V0LCBwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgIHNldFByb2dyZXNzVmFsdWVbYW5pbVR5cGVdKHRhcmdldCwgcHJvcGVydHksIHRvLCBhbmltYXRhYmxlLnRyYW5zZm9ybXMsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBBbmltYXRpb25zXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBbmltYXRpb24oYW5pbWF0YWJsZSwgcHJvcCkge1xyXG4gICAgdmFyIGFuaW1UeXBlID0gZ2V0QW5pbWF0aW9uVHlwZShhbmltYXRhYmxlLnRhcmdldCwgcHJvcC5uYW1lKTtcclxuICAgIGlmIChhbmltVHlwZSkge1xyXG4gICAgICAgIHZhciB0d2VlbnMgPSBub3JtYWxpemVUd2VlbnMocHJvcCwgYW5pbWF0YWJsZSk7XHJcbiAgICAgICAgdmFyIGxhc3RUd2VlbiA9IHR3ZWVuc1t0d2VlbnMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdHlwZTogYW5pbVR5cGUsXHJcbiAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wLm5hbWUsXHJcbiAgICAgICAgICAgIGFuaW1hdGFibGU6IGFuaW1hdGFibGUsXHJcbiAgICAgICAgICAgIHR3ZWVuczogdHdlZW5zLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogbGFzdFR3ZWVuLmVuZCxcclxuICAgICAgICAgICAgZGVsYXk6IHR3ZWVuc1swXS5kZWxheSxcclxuICAgICAgICAgICAgZW5kRGVsYXk6IGxhc3RUd2Vlbi5lbmREZWxheVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QW5pbWF0aW9ucyhhbmltYXRhYmxlcywgcHJvcGVydGllcykge1xyXG4gICAgcmV0dXJuIGZpbHRlckFycmF5KGZsYXR0ZW5BcnJheShhbmltYXRhYmxlcy5tYXAoZnVuY3Rpb24oYW5pbWF0YWJsZSkge1xyXG4gICAgICAgIHJldHVybiBwcm9wZXJ0aWVzLm1hcChmdW5jdGlvbihwcm9wKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVBbmltYXRpb24oYW5pbWF0YWJsZSwgcHJvcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KSksIGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICByZXR1cm4gIWlzLnVuZChhKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBDcmVhdGUgSW5zdGFuY2VcclxuXHJcbmZ1bmN0aW9uIGdldEluc3RhbmNlVGltaW5ncyhhbmltYXRpb25zLCB0d2VlblNldHRpbmdzKSB7XHJcbiAgICB2YXIgYW5pbUxlbmd0aCA9IGFuaW1hdGlvbnMubGVuZ3RoO1xyXG4gICAgdmFyIGdldFRsT2Zmc2V0ID0gZnVuY3Rpb24oYW5pbSkge1xyXG4gICAgICAgIHJldHVybiBhbmltLnRpbWVsaW5lT2Zmc2V0ID8gYW5pbS50aW1lbGluZU9mZnNldCA6IDA7XHJcbiAgICB9O1xyXG4gICAgdmFyIHRpbWluZ3MgPSB7fTtcclxuICAgIHRpbWluZ3MuZHVyYXRpb24gPSBhbmltTGVuZ3RoID8gTWF0aC5tYXguYXBwbHkoTWF0aCwgYW5pbWF0aW9ucy5tYXAoZnVuY3Rpb24oYW5pbSkge1xyXG4gICAgICAgIHJldHVybiBnZXRUbE9mZnNldChhbmltKSArIGFuaW0uZHVyYXRpb247XHJcbiAgICB9KSkgOiB0d2VlblNldHRpbmdzLmR1cmF0aW9uO1xyXG4gICAgdGltaW5ncy5kZWxheSA9IGFuaW1MZW5ndGggPyBNYXRoLm1pbi5hcHBseShNYXRoLCBhbmltYXRpb25zLm1hcChmdW5jdGlvbihhbmltKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFRsT2Zmc2V0KGFuaW0pICsgYW5pbS5kZWxheTtcclxuICAgIH0pKSA6IHR3ZWVuU2V0dGluZ3MuZGVsYXk7XHJcbiAgICB0aW1pbmdzLmVuZERlbGF5ID0gYW5pbUxlbmd0aCA/IHRpbWluZ3MuZHVyYXRpb24gLSBNYXRoLm1heC5hcHBseShNYXRoLCBhbmltYXRpb25zLm1hcChmdW5jdGlvbihhbmltKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFRsT2Zmc2V0KGFuaW0pICsgYW5pbS5kdXJhdGlvbiAtIGFuaW0uZW5kRGVsYXk7XHJcbiAgICB9KSkgOiB0d2VlblNldHRpbmdzLmVuZERlbGF5O1xyXG4gICAgcmV0dXJuIHRpbWluZ3M7XHJcbn1cclxuXHJcbnZhciBpbnN0YW5jZUlEID0gMDtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld0luc3RhbmNlKHBhcmFtcykge1xyXG4gICAgdmFyIGluc3RhbmNlU2V0dGluZ3MgPSByZXBsYWNlT2JqZWN0UHJvcHMoZGVmYXVsdEluc3RhbmNlU2V0dGluZ3MsIHBhcmFtcyk7XHJcbiAgICB2YXIgdHdlZW5TZXR0aW5ncyA9IHJlcGxhY2VPYmplY3RQcm9wcyhkZWZhdWx0VHdlZW5TZXR0aW5ncywgcGFyYW1zKTtcclxuICAgIHZhciBwcm9wZXJ0aWVzID0gZ2V0UHJvcGVydGllcyh0d2VlblNldHRpbmdzLCBwYXJhbXMpO1xyXG4gICAgdmFyIGFuaW1hdGFibGVzID0gZ2V0QW5pbWF0YWJsZXMocGFyYW1zLnRhcmdldHMpO1xyXG4gICAgdmFyIGFuaW1hdGlvbnMgPSBnZXRBbmltYXRpb25zKGFuaW1hdGFibGVzLCBwcm9wZXJ0aWVzKTtcclxuICAgIHZhciB0aW1pbmdzID0gZ2V0SW5zdGFuY2VUaW1pbmdzKGFuaW1hdGlvbnMsIHR3ZWVuU2V0dGluZ3MpO1xyXG4gICAgdmFyIGlkID0gaW5zdGFuY2VJRDtcclxuICAgIGluc3RhbmNlSUQrKztcclxuICAgIHJldHVybiBtZXJnZU9iamVjdHMoaW5zdGFuY2VTZXR0aW5ncywge1xyXG4gICAgICAgIGlkOiBpZCxcclxuICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgYW5pbWF0YWJsZXM6IGFuaW1hdGFibGVzLFxyXG4gICAgICAgIGFuaW1hdGlvbnM6IGFuaW1hdGlvbnMsXHJcbiAgICAgICAgZHVyYXRpb246IHRpbWluZ3MuZHVyYXRpb24sXHJcbiAgICAgICAgZGVsYXk6IHRpbWluZ3MuZGVsYXksXHJcbiAgICAgICAgZW5kRGVsYXk6IHRpbWluZ3MuZW5kRGVsYXlcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBDb3JlXHJcblxyXG52YXIgYWN0aXZlSW5zdGFuY2VzID0gW107XHJcblxyXG52YXIgZW5naW5lID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHJhZjtcclxuXHJcbiAgICBmdW5jdGlvbiBwbGF5KCkge1xyXG4gICAgICAgIGlmICghcmFmICYmICghaXNEb2N1bWVudEhpZGRlbigpIHx8ICFhbmltZS5zdXNwZW5kV2hlbkRvY3VtZW50SGlkZGVuKSAmJiBhY3RpdmVJbnN0YW5jZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0ZXAodCkge1xyXG4gICAgICAgIC8vIG1lbW8gb24gYWxnb3JpdGhtIGlzc3VlOlxyXG4gICAgICAgIC8vIGRhbmdlcm91cyBpdGVyYXRpb24gb3ZlciBtdXRhYmxlIGBhY3RpdmVJbnN0YW5jZXNgXHJcbiAgICAgICAgLy8gKHRoYXQgY29sbGVjdGlvbiBtYXkgYmUgdXBkYXRlZCBmcm9tIHdpdGhpbiBjYWxsYmFja3Mgb2YgYHRpY2tgLWVkIGFuaW1hdGlvbiBpbnN0YW5jZXMpXHJcbiAgICAgICAgdmFyIGFjdGl2ZUluc3RhbmNlc0xlbmd0aCA9IGFjdGl2ZUluc3RhbmNlcy5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgIHdoaWxlIChpIDwgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBhY3RpdmVJbnN0YW5jZSA9IGFjdGl2ZUluc3RhbmNlc1tpXTtcclxuICAgICAgICAgICAgaWYgKCFhY3RpdmVJbnN0YW5jZS5wYXVzZWQpIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUluc3RhbmNlLnRpY2sodCk7XHJcbiAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbnN0YW5jZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5zdGFuY2VzTGVuZ3RoLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmFmID0gaSA+IDAgPyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCkgOiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSgpIHtcclxuICAgICAgICBpZiAoIWFuaW1lLnN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzRG9jdW1lbnRIaWRkZW4oKSkge1xyXG4gICAgICAgICAgICAvLyBzdXNwZW5kIHRpY2tzXHJcbiAgICAgICAgICAgIHJhZiA9IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZik7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8gaXMgYmFjayB0byBhY3RpdmUgdGFiXHJcbiAgICAgICAgICAgIC8vIGZpcnN0IGFkanVzdCBhbmltYXRpb25zIHRvIGNvbnNpZGVyIHRoZSB0aW1lIHRoYXQgdGlja3Mgd2VyZSBzdXNwZW5kZWRcclxuICAgICAgICAgICAgYWN0aXZlSW5zdGFuY2VzLmZvckVhY2goXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbihpbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5fb25Eb2N1bWVudFZpc2liaWxpdHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZW5naW5lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBsYXk7XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBpc0RvY3VtZW50SGlkZGVuKCkge1xyXG4gICAgcmV0dXJuICEhZG9jdW1lbnQgJiYgZG9jdW1lbnQuaGlkZGVuO1xyXG59XHJcblxyXG4vLyBQdWJsaWMgSW5zdGFuY2VcclxuXHJcbmZ1bmN0aW9uIGFuaW1lKHBhcmFtcykge1xyXG4gICAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSBwYXJhbXMgPSB7fTtcclxuXHJcblxyXG4gICAgdmFyIHN0YXJ0VGltZSA9IDAsXHJcbiAgICAgICAgbGFzdFRpbWUgPSAwLFxyXG4gICAgICAgIG5vdyA9IDA7XHJcbiAgICB2YXIgY2hpbGRyZW4sIGNoaWxkcmVuTGVuZ3RoID0gMDtcclxuICAgIHZhciByZXNvbHZlID0gbnVsbDtcclxuXHJcbiAgICBmdW5jdGlvbiBtYWtlUHJvbWlzZShpbnN0YW5jZSkge1xyXG4gICAgICAgIHZhciBwcm9taXNlID0gd2luZG93LlByb21pc2UgJiYgbmV3IFByb21pc2UoZnVuY3Rpb24oX3Jlc29sdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUgPSBfcmVzb2x2ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpbnN0YW5jZS5maW5pc2hlZCA9IHByb21pc2U7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGluc3RhbmNlID0gY3JlYXRlTmV3SW5zdGFuY2UocGFyYW1zKTtcclxuICAgIHZhciBwcm9taXNlID0gbWFrZVByb21pc2UoaW5zdGFuY2UpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uKCkge1xyXG4gICAgICAgIHZhciBkaXJlY3Rpb24gPSBpbnN0YW5jZS5kaXJlY3Rpb247XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiAhPT0gJ2FsdGVybmF0ZScpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UuZGlyZWN0aW9uID0gZGlyZWN0aW9uICE9PSAnbm9ybWFsJyA/ICdub3JtYWwnIDogJ3JldmVyc2UnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnN0YW5jZS5yZXZlcnNlZCA9ICFpbnN0YW5jZS5yZXZlcnNlZDtcclxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGlsZC5yZXZlcnNlZCA9IGluc3RhbmNlLnJldmVyc2VkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkanVzdFRpbWUodGltZSkge1xyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5yZXZlcnNlZCA/IGluc3RhbmNlLmR1cmF0aW9uIC0gdGltZSA6IHRpbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRUaW1lKCkge1xyXG4gICAgICAgIHN0YXJ0VGltZSA9IDA7XHJcbiAgICAgICAgbGFzdFRpbWUgPSBhZGp1c3RUaW1lKGluc3RhbmNlLmN1cnJlbnRUaW1lKSAqICgxIC8gYW5pbWUuc3BlZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlZWtDaGlsZCh0aW1lLCBjaGlsZCkge1xyXG4gICAgICAgIGlmIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5zZWVrKHRpbWUgLSBjaGlsZC50aW1lbGluZU9mZnNldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN5bmNJbnN0YW5jZUNoaWxkcmVuKHRpbWUpIHtcclxuICAgICAgICBpZiAoIWluc3RhbmNlLnJldmVyc2VQbGF5YmFjaykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHNlZWtDaGlsZCh0aW1lLCBjaGlsZHJlbltpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpJDEgPSBjaGlsZHJlbkxlbmd0aDsgaSQxLS07KSB7XHJcbiAgICAgICAgICAgICAgICBzZWVrQ2hpbGQodGltZSwgY2hpbGRyZW5baSQxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0QW5pbWF0aW9uc1Byb2dyZXNzKGluc1RpbWUpIHtcclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgdmFyIGFuaW1hdGlvbnMgPSBpbnN0YW5jZS5hbmltYXRpb25zO1xyXG4gICAgICAgIHZhciBhbmltYXRpb25zTGVuZ3RoID0gYW5pbWF0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKGkgPCBhbmltYXRpb25zTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBhbmltID0gYW5pbWF0aW9uc1tpXTtcclxuICAgICAgICAgICAgdmFyIGFuaW1hdGFibGUgPSBhbmltLmFuaW1hdGFibGU7XHJcbiAgICAgICAgICAgIHZhciB0d2VlbnMgPSBhbmltLnR3ZWVucztcclxuICAgICAgICAgICAgdmFyIHR3ZWVuTGVuZ3RoID0gdHdlZW5zLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIHZhciB0d2VlbiA9IHR3ZWVuc1t0d2Vlbkxlbmd0aF07XHJcbiAgICAgICAgICAgIC8vIE9ubHkgY2hlY2sgZm9yIGtleWZyYW1lcyBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIHR3ZWVuXHJcbiAgICAgICAgICAgIGlmICh0d2Vlbkxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdHdlZW4gPSBmaWx0ZXJBcnJheSh0d2VlbnMsIGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGluc1RpbWUgPCB0LmVuZCk7XHJcbiAgICAgICAgICAgICAgICB9KVswXSB8fCB0d2VlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZWxhcHNlZCA9IG1pbk1heChpbnNUaW1lIC0gdHdlZW4uc3RhcnQgLSB0d2Vlbi5kZWxheSwgMCwgdHdlZW4uZHVyYXRpb24pIC8gdHdlZW4uZHVyYXRpb247XHJcbiAgICAgICAgICAgIHZhciBlYXNlZCA9IGlzTmFOKGVsYXBzZWQpID8gMSA6IHR3ZWVuLmVhc2luZyhlbGFwc2VkKTtcclxuICAgICAgICAgICAgdmFyIHN0cmluZ3MgPSB0d2Vlbi50by5zdHJpbmdzO1xyXG4gICAgICAgICAgICB2YXIgcm91bmQgPSB0d2Vlbi5yb3VuZDtcclxuICAgICAgICAgICAgdmFyIG51bWJlcnMgPSBbXTtcclxuICAgICAgICAgICAgdmFyIHRvTnVtYmVyc0xlbmd0aCA9IHR3ZWVuLnRvLm51bWJlcnMubGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAodm9pZCAwKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCB0b051bWJlcnNMZW5ndGg7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gKHZvaWQgMCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9OdW1iZXIgPSB0d2Vlbi50by5udW1iZXJzW25dO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZyb21OdW1iZXIgPSB0d2Vlbi5mcm9tLm51bWJlcnNbbl0gfHwgMDtcclxuICAgICAgICAgICAgICAgIGlmICghdHdlZW4uaXNQYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBmcm9tTnVtYmVyICsgKGVhc2VkICogKHRvTnVtYmVyIC0gZnJvbU51bWJlcikpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGdldFBhdGhQcm9ncmVzcyh0d2Vlbi52YWx1ZSwgZWFzZWQgKiB0b051bWJlciwgdHdlZW4uaXNQYXRoVGFyZ2V0SW5zaWRlU1ZHKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHR3ZWVuLmlzQ29sb3IgJiYgbiA+IDIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAqIHJvdW5kKSAvIHJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG51bWJlcnMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gTWFudWFsIEFycmF5LnJlZHVjZSBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlc1xyXG4gICAgICAgICAgICB2YXIgc3RyaW5nc0xlbmd0aCA9IHN0cmluZ3MubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAoIXN0cmluZ3NMZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gbnVtYmVyc1swXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gc3RyaW5nc1swXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgc3RyaW5nc0xlbmd0aDsgcysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGEgPSBzdHJpbmdzW3NdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiID0gc3RyaW5nc1tzICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG4kMSA9IG51bWJlcnNbc107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihuJDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gbiQxICsgJyAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gbiQxICsgYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRQcm9ncmVzc1ZhbHVlW2FuaW0udHlwZV0oYW5pbWF0YWJsZS50YXJnZXQsIGFuaW0ucHJvcGVydHksIHByb2dyZXNzLCBhbmltYXRhYmxlLnRyYW5zZm9ybXMpO1xyXG4gICAgICAgICAgICBhbmltLmN1cnJlbnRWYWx1ZSA9IHByb2dyZXNzO1xyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENhbGxiYWNrKGNiKSB7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlW2NiXSAmJiAhaW5zdGFuY2UucGFzc1Rocm91Z2gpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2VbY2JdKGluc3RhbmNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY291bnRJdGVyYXRpb24oKSB7XHJcbiAgICAgICAgaWYgKGluc3RhbmNlLnJlbWFpbmluZyAmJiBpbnN0YW5jZS5yZW1haW5pbmcgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UucmVtYWluaW5nLS07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEluc3RhbmNlUHJvZ3Jlc3MoZW5naW5lVGltZSkge1xyXG4gICAgICAgIHZhciBpbnNEdXJhdGlvbiA9IGluc3RhbmNlLmR1cmF0aW9uO1xyXG4gICAgICAgIHZhciBpbnNEZWxheSA9IGluc3RhbmNlLmRlbGF5O1xyXG4gICAgICAgIHZhciBpbnNFbmREZWxheSA9IGluc0R1cmF0aW9uIC0gaW5zdGFuY2UuZW5kRGVsYXk7XHJcbiAgICAgICAgdmFyIGluc1RpbWUgPSBhZGp1c3RUaW1lKGVuZ2luZVRpbWUpO1xyXG4gICAgICAgIGluc3RhbmNlLnByb2dyZXNzID0gbWluTWF4KChpbnNUaW1lIC8gaW5zRHVyYXRpb24pICogMTAwLCAwLCAxMDApO1xyXG4gICAgICAgIGluc3RhbmNlLnJldmVyc2VQbGF5YmFjayA9IGluc1RpbWUgPCBpbnN0YW5jZS5jdXJyZW50VGltZTtcclxuICAgICAgICBpZiAoY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgc3luY0luc3RhbmNlQ2hpbGRyZW4oaW5zVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaW5zdGFuY2UuYmVnYW4gJiYgaW5zdGFuY2UuY3VycmVudFRpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLmJlZ2FuID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2V0Q2FsbGJhY2soJ2JlZ2luJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaW5zdGFuY2UubG9vcEJlZ2FuICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lID4gMCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5sb29wQmVnYW4gPSB0cnVlO1xyXG4gICAgICAgICAgICBzZXRDYWxsYmFjaygnbG9vcEJlZ2luJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbnNUaW1lIDw9IGluc0RlbGF5ICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcygwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChpbnNUaW1lID49IGluc0VuZERlbGF5ICYmIGluc3RhbmNlLmN1cnJlbnRUaW1lICE9PSBpbnNEdXJhdGlvbikgfHwgIWluc0R1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHNldEFuaW1hdGlvbnNQcm9ncmVzcyhpbnNEdXJhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbnNUaW1lID4gaW5zRGVsYXkgJiYgaW5zVGltZSA8IGluc0VuZERlbGF5KSB7XHJcbiAgICAgICAgICAgIGlmICghaW5zdGFuY2UuY2hhbmdlQmVnYW4pIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmNoYW5nZUNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgc2V0Q2FsbGJhY2soJ2NoYW5nZUJlZ2luJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0Q2FsbGJhY2soJ2NoYW5nZScpO1xyXG4gICAgICAgICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zVGltZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGluc3RhbmNlLmNoYW5nZUJlZ2FuKSB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5jaGFuZ2VDb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuY2hhbmdlQmVnYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHNldENhbGxiYWNrKCdjaGFuZ2VDb21wbGV0ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluc3RhbmNlLmN1cnJlbnRUaW1lID0gbWluTWF4KGluc1RpbWUsIDAsIGluc0R1cmF0aW9uKTtcclxuICAgICAgICBpZiAoaW5zdGFuY2UuYmVnYW4pIHtcclxuICAgICAgICAgICAgc2V0Q2FsbGJhY2soJ3VwZGF0ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZW5naW5lVGltZSA+PSBpbnNEdXJhdGlvbikge1xyXG4gICAgICAgICAgICBsYXN0VGltZSA9IDA7XHJcbiAgICAgICAgICAgIGNvdW50SXRlcmF0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICghaW5zdGFuY2UucmVtYWluaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpbnN0YW5jZS5jb21wbGV0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldENhbGxiYWNrKCdsb29wQ29tcGxldGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDYWxsYmFjaygnY29tcGxldGUnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWluc3RhbmNlLnBhc3NUaHJvdWdoICYmICdQcm9taXNlJyBpbiB3aW5kb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlID0gbWFrZVByb21pc2UoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZSA9IG5vdztcclxuICAgICAgICAgICAgICAgIHNldENhbGxiYWNrKCdsb29wQ29tcGxldGUnKTtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmxvb3BCZWdhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlLmRpcmVjdGlvbiA9PT0gJ2FsdGVybmF0ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVJbnN0YW5jZURpcmVjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluc3RhbmNlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGluc3RhbmNlLmRpcmVjdGlvbjtcclxuICAgICAgICBpbnN0YW5jZS5wYXNzVGhyb3VnaCA9IGZhbHNlO1xyXG4gICAgICAgIGluc3RhbmNlLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICBpbnN0YW5jZS5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgaW5zdGFuY2UucGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICBpbnN0YW5jZS5iZWdhbiA9IGZhbHNlO1xyXG4gICAgICAgIGluc3RhbmNlLmxvb3BCZWdhbiA9IGZhbHNlO1xyXG4gICAgICAgIGluc3RhbmNlLmNoYW5nZUJlZ2FuID0gZmFsc2U7XHJcbiAgICAgICAgaW5zdGFuY2UuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgaW5zdGFuY2UuY2hhbmdlQ29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgaW5zdGFuY2UucmV2ZXJzZVBsYXliYWNrID0gZmFsc2U7XHJcbiAgICAgICAgaW5zdGFuY2UucmV2ZXJzZWQgPSBkaXJlY3Rpb24gPT09ICdyZXZlcnNlJztcclxuICAgICAgICBpbnN0YW5jZS5yZW1haW5pbmcgPSBpbnN0YW5jZS5sb29wO1xyXG4gICAgICAgIGNoaWxkcmVuID0gaW5zdGFuY2UuY2hpbGRyZW47XHJcbiAgICAgICAgY2hpbGRyZW5MZW5ndGggPSBjaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGNoaWxkcmVuTGVuZ3RoOyBpLS07KSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLmNoaWxkcmVuW2ldLnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbnN0YW5jZS5yZXZlcnNlZCAmJiBpbnN0YW5jZS5sb29wICE9PSB0cnVlIHx8IChkaXJlY3Rpb24gPT09ICdhbHRlcm5hdGUnICYmIGluc3RhbmNlLmxvb3AgPT09IDEpKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLnJlbWFpbmluZysrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRBbmltYXRpb25zUHJvZ3Jlc3MoaW5zdGFuY2UucmV2ZXJzZWQgPyBpbnN0YW5jZS5kdXJhdGlvbiA6IDApO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBpbnRlcm5hbCBtZXRob2QgKGZvciBlbmdpbmUpIHRvIGFkanVzdCBhbmltYXRpb24gdGltaW5ncyBiZWZvcmUgcmVzdG9yaW5nIGVuZ2luZSB0aWNrcyAockFGKVxyXG4gICAgaW5zdGFuY2UuX29uRG9jdW1lbnRWaXNpYmlsaXR5ID0gcmVzZXRUaW1lO1xyXG5cclxuICAgIC8vIFNldCBWYWx1ZSBoZWxwZXJcclxuXHJcbiAgICBpbnN0YW5jZS5zZXQgPSBmdW5jdGlvbih0YXJnZXRzLCBwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgc2V0VGFyZ2V0c1ZhbHVlKHRhcmdldHMsIHByb3BlcnRpZXMpO1xyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zdGFuY2UudGljayA9IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBub3cgPSB0O1xyXG4gICAgICAgIGlmICghc3RhcnRUaW1lKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0VGltZSA9IG5vdztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SW5zdGFuY2VQcm9ncmVzcygobm93ICsgKGxhc3RUaW1lIC0gc3RhcnRUaW1lKSkgKiBhbmltZS5zcGVlZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGluc3RhbmNlLnNlZWsgPSBmdW5jdGlvbih0aW1lKSB7XHJcbiAgICAgICAgc2V0SW5zdGFuY2VQcm9ncmVzcyhhZGp1c3RUaW1lKHRpbWUpKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zdGFuY2UucGF1c2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpbnN0YW5jZS5wYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgIHJlc2V0VGltZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpbnN0YW5jZS5wbGF5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZS5wYXVzZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaW5zdGFuY2UuY29tcGxldGVkKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLnJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGluc3RhbmNlLnBhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIGFjdGl2ZUluc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtcclxuICAgICAgICByZXNldFRpbWUoKTtcclxuICAgICAgICBlbmdpbmUoKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zdGFuY2UucmV2ZXJzZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRvZ2dsZUluc3RhbmNlRGlyZWN0aW9uKCk7XHJcbiAgICAgICAgaW5zdGFuY2UuY29tcGxldGVkID0gaW5zdGFuY2UucmV2ZXJzZWQgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgcmVzZXRUaW1lKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGluc3RhbmNlLnJlc3RhcnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpbnN0YW5jZS5yZXNldCgpO1xyXG4gICAgICAgIGluc3RhbmNlLnBsYXkoKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zdGFuY2UucmVtb3ZlID0gZnVuY3Rpb24odGFyZ2V0cykge1xyXG4gICAgICAgIHZhciB0YXJnZXRzQXJyYXkgPSBwYXJzZVRhcmdldHModGFyZ2V0cyk7XHJcbiAgICAgICAgcmVtb3ZlVGFyZ2V0c0Zyb21JbnN0YW5jZSh0YXJnZXRzQXJyYXksIGluc3RhbmNlKTtcclxuICAgIH07XHJcblxyXG4gICAgaW5zdGFuY2UucmVzZXQoKTtcclxuXHJcbiAgICBpZiAoaW5zdGFuY2UuYXV0b3BsYXkpIHtcclxuICAgICAgICBpbnN0YW5jZS5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluc3RhbmNlO1xyXG5cclxufVxyXG5cclxuLy8gUmVtb3ZlIHRhcmdldHMgZnJvbSBhbmltYXRpb25cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVRhcmdldHNGcm9tQW5pbWF0aW9ucyh0YXJnZXRzQXJyYXksIGFuaW1hdGlvbnMpIHtcclxuICAgIGZvciAodmFyIGEgPSBhbmltYXRpb25zLmxlbmd0aDsgYS0tOykge1xyXG4gICAgICAgIGlmIChhcnJheUNvbnRhaW5zKHRhcmdldHNBcnJheSwgYW5pbWF0aW9uc1thXS5hbmltYXRhYmxlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9ucy5zcGxpY2UoYSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVUYXJnZXRzRnJvbUluc3RhbmNlKHRhcmdldHNBcnJheSwgaW5zdGFuY2UpIHtcclxuICAgIHZhciBhbmltYXRpb25zID0gaW5zdGFuY2UuYW5pbWF0aW9ucztcclxuICAgIHZhciBjaGlsZHJlbiA9IGluc3RhbmNlLmNoaWxkcmVuO1xyXG4gICAgcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgYW5pbWF0aW9ucyk7XHJcbiAgICBmb3IgKHZhciBjID0gY2hpbGRyZW4ubGVuZ3RoOyBjLS07KSB7XHJcbiAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5bY107XHJcbiAgICAgICAgdmFyIGNoaWxkQW5pbWF0aW9ucyA9IGNoaWxkLmFuaW1hdGlvbnM7XHJcbiAgICAgICAgcmVtb3ZlVGFyZ2V0c0Zyb21BbmltYXRpb25zKHRhcmdldHNBcnJheSwgY2hpbGRBbmltYXRpb25zKTtcclxuICAgICAgICBpZiAoIWNoaWxkQW5pbWF0aW9ucy5sZW5ndGggJiYgIWNoaWxkLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjaGlsZHJlbi5zcGxpY2UoYywgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFhbmltYXRpb25zLmxlbmd0aCAmJiAhY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgaW5zdGFuY2UucGF1c2UoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlVGFyZ2V0c0Zyb21BY3RpdmVJbnN0YW5jZXModGFyZ2V0cykge1xyXG4gICAgdmFyIHRhcmdldHNBcnJheSA9IHBhcnNlVGFyZ2V0cyh0YXJnZXRzKTtcclxuICAgIGZvciAodmFyIGkgPSBhY3RpdmVJbnN0YW5jZXMubGVuZ3RoOyBpLS07KSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gYWN0aXZlSW5zdGFuY2VzW2ldO1xyXG4gICAgICAgIHJlbW92ZVRhcmdldHNGcm9tSW5zdGFuY2UodGFyZ2V0c0FycmF5LCBpbnN0YW5jZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFN0YWdnZXIgaGVscGVyc1xyXG5cclxuZnVuY3Rpb24gc3RhZ2dlcih2YWwsIHBhcmFtcykge1xyXG4gICAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSBwYXJhbXMgPSB7fTtcclxuXHJcbiAgICB2YXIgZGlyZWN0aW9uID0gcGFyYW1zLmRpcmVjdGlvbiB8fCAnbm9ybWFsJztcclxuICAgIHZhciBlYXNpbmcgPSBwYXJhbXMuZWFzaW5nID8gcGFyc2VFYXNpbmdzKHBhcmFtcy5lYXNpbmcpIDogbnVsbDtcclxuICAgIHZhciBncmlkID0gcGFyYW1zLmdyaWQ7XHJcbiAgICB2YXIgYXhpcyA9IHBhcmFtcy5heGlzO1xyXG4gICAgdmFyIGZyb21JbmRleCA9IHBhcmFtcy5mcm9tIHx8IDA7XHJcbiAgICB2YXIgZnJvbUZpcnN0ID0gZnJvbUluZGV4ID09PSAnZmlyc3QnO1xyXG4gICAgdmFyIGZyb21DZW50ZXIgPSBmcm9tSW5kZXggPT09ICdjZW50ZXInO1xyXG4gICAgdmFyIGZyb21MYXN0ID0gZnJvbUluZGV4ID09PSAnbGFzdCc7XHJcbiAgICB2YXIgaXNSYW5nZSA9IGlzLmFycih2YWwpO1xyXG4gICAgdmFyIHZhbDEgPSBpc1JhbmdlID8gcGFyc2VGbG9hdCh2YWxbMF0pIDogcGFyc2VGbG9hdCh2YWwpO1xyXG4gICAgdmFyIHZhbDIgPSBpc1JhbmdlID8gcGFyc2VGbG9hdCh2YWxbMV0pIDogMDtcclxuICAgIHZhciB1bml0ID0gZ2V0VW5pdChpc1JhbmdlID8gdmFsWzFdIDogdmFsKSB8fCAwO1xyXG4gICAgdmFyIHN0YXJ0ID0gcGFyYW1zLnN0YXJ0IHx8IDAgKyAoaXNSYW5nZSA/IHZhbDEgOiAwKTtcclxuICAgIHZhciB2YWx1ZXMgPSBbXTtcclxuICAgIHZhciBtYXhWYWx1ZSA9IDA7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oZWwsIGksIHQpIHtcclxuICAgICAgICBpZiAoZnJvbUZpcnN0KSB7XHJcbiAgICAgICAgICAgIGZyb21JbmRleCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmcm9tQ2VudGVyKSB7XHJcbiAgICAgICAgICAgIGZyb21JbmRleCA9ICh0IC0gMSkgLyAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZnJvbUxhc3QpIHtcclxuICAgICAgICAgICAgZnJvbUluZGV4ID0gdCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFncmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goTWF0aC5hYnMoZnJvbUluZGV4IC0gaW5kZXgpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZyb21YID0gIWZyb21DZW50ZXIgPyBmcm9tSW5kZXggJSBncmlkWzBdIDogKGdyaWRbMF0gLSAxKSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZyb21ZID0gIWZyb21DZW50ZXIgPyBNYXRoLmZsb29yKGZyb21JbmRleCAvIGdyaWRbMF0pIDogKGdyaWRbMV0gLSAxKSAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvWCA9IGluZGV4ICUgZ3JpZFswXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG9ZID0gTWF0aC5mbG9vcihpbmRleCAvIGdyaWRbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZVggPSBmcm9tWCAtIHRvWDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VZID0gZnJvbVkgLSB0b1k7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gTWF0aC5zcXJ0KGRpc3RhbmNlWCAqIGRpc3RhbmNlWCArIGRpc3RhbmNlWSAqIGRpc3RhbmNlWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGF4aXMgPT09ICd4Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IC1kaXN0YW5jZVg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChheGlzID09PSAneScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAtZGlzdGFuY2VZO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIHZhbHVlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVhc2luZykge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gdmFsdWVzLm1hcChmdW5jdGlvbih2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWFzaW5nKHZhbCAvIG1heFZhbHVlKSAqIG1heFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3JldmVyc2UnKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBheGlzID8gKHZhbCA8IDApID8gdmFsICogLTEgOiAtdmFsIDogTWF0aC5hYnMobWF4VmFsdWUgLSB2YWwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNwYWNpbmcgPSBpc1JhbmdlID8gKHZhbDIgLSB2YWwxKSAvIG1heFZhbHVlIDogdmFsMTtcclxuICAgICAgICByZXR1cm4gc3RhcnQgKyAoc3BhY2luZyAqIChNYXRoLnJvdW5kKHZhbHVlc1tpXSAqIDEwMCkgLyAxMDApKSArIHVuaXQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFRpbWVsaW5lXHJcblxyXG5mdW5jdGlvbiB0aW1lbGluZShwYXJhbXMpIHtcclxuICAgIGlmIChwYXJhbXMgPT09IHZvaWQgMCkgcGFyYW1zID0ge307XHJcblxyXG4gICAgdmFyIHRsID0gYW5pbWUocGFyYW1zKTtcclxuICAgIHRsLmR1cmF0aW9uID0gMDtcclxuICAgIHRsLmFkZCA9IGZ1bmN0aW9uKGluc3RhbmNlUGFyYW1zLCB0aW1lbGluZU9mZnNldCkge1xyXG4gICAgICAgIHZhciB0bEluZGV4ID0gYWN0aXZlSW5zdGFuY2VzLmluZGV4T2YodGwpO1xyXG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHRsLmNoaWxkcmVuO1xyXG4gICAgICAgIGlmICh0bEluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgYWN0aXZlSW5zdGFuY2VzLnNwbGljZSh0bEluZGV4LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHBhc3NUaHJvdWdoKGlucykge1xyXG4gICAgICAgICAgICBpbnMucGFzc1Rocm91Z2ggPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBhc3NUaHJvdWdoKGNoaWxkcmVuW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGluc1BhcmFtcyA9IG1lcmdlT2JqZWN0cyhpbnN0YW5jZVBhcmFtcywgcmVwbGFjZU9iamVjdFByb3BzKGRlZmF1bHRUd2VlblNldHRpbmdzLCBwYXJhbXMpKTtcclxuICAgICAgICBpbnNQYXJhbXMudGFyZ2V0cyA9IGluc1BhcmFtcy50YXJnZXRzIHx8IHBhcmFtcy50YXJnZXRzO1xyXG4gICAgICAgIHZhciB0bER1cmF0aW9uID0gdGwuZHVyYXRpb247XHJcbiAgICAgICAgaW5zUGFyYW1zLmF1dG9wbGF5ID0gZmFsc2U7XHJcbiAgICAgICAgaW5zUGFyYW1zLmRpcmVjdGlvbiA9IHRsLmRpcmVjdGlvbjtcclxuICAgICAgICBpbnNQYXJhbXMudGltZWxpbmVPZmZzZXQgPSBpcy51bmQodGltZWxpbmVPZmZzZXQpID8gdGxEdXJhdGlvbiA6IGdldFJlbGF0aXZlVmFsdWUodGltZWxpbmVPZmZzZXQsIHRsRHVyYXRpb24pO1xyXG4gICAgICAgIHBhc3NUaHJvdWdoKHRsKTtcclxuICAgICAgICB0bC5zZWVrKGluc1BhcmFtcy50aW1lbGluZU9mZnNldCk7XHJcbiAgICAgICAgdmFyIGlucyA9IGFuaW1lKGluc1BhcmFtcyk7XHJcbiAgICAgICAgcGFzc1Rocm91Z2goaW5zKTtcclxuICAgICAgICBjaGlsZHJlbi5wdXNoKGlucyk7XHJcbiAgICAgICAgdmFyIHRpbWluZ3MgPSBnZXRJbnN0YW5jZVRpbWluZ3MoY2hpbGRyZW4sIHBhcmFtcyk7XHJcbiAgICAgICAgdGwuZGVsYXkgPSB0aW1pbmdzLmRlbGF5O1xyXG4gICAgICAgIHRsLmVuZERlbGF5ID0gdGltaW5ncy5lbmREZWxheTtcclxuICAgICAgICB0bC5kdXJhdGlvbiA9IHRpbWluZ3MuZHVyYXRpb247XHJcbiAgICAgICAgdGwuc2VlaygwKTtcclxuICAgICAgICB0bC5yZXNldCgpO1xyXG4gICAgICAgIGlmICh0bC5hdXRvcGxheSkge1xyXG4gICAgICAgICAgICB0bC5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0bDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGw7XHJcbn1cclxuXHJcbmFuaW1lLnZlcnNpb24gPSAnMy4yLjEnO1xyXG5hbmltZS5zcGVlZCA9IDE7XHJcbi8vIFRPRE86I3JldmlldzogbmFtaW5nLCBkb2N1bWVudGF0aW9uXHJcbmFuaW1lLnN1c3BlbmRXaGVuRG9jdW1lbnRIaWRkZW4gPSB0cnVlO1xyXG5hbmltZS5ydW5uaW5nID0gYWN0aXZlSW5zdGFuY2VzO1xyXG5hbmltZS5yZW1vdmUgPSByZW1vdmVUYXJnZXRzRnJvbUFjdGl2ZUluc3RhbmNlcztcclxuYW5pbWUuZ2V0ID0gZ2V0T3JpZ2luYWxUYXJnZXRWYWx1ZTtcclxuYW5pbWUuc2V0ID0gc2V0VGFyZ2V0c1ZhbHVlO1xyXG5hbmltZS5jb252ZXJ0UHggPSBjb252ZXJ0UHhUb1VuaXQ7XHJcbmFuaW1lLnBhdGggPSBnZXRQYXRoO1xyXG5hbmltZS5zZXREYXNob2Zmc2V0ID0gc2V0RGFzaG9mZnNldDtcclxuYW5pbWUuc3RhZ2dlciA9IHN0YWdnZXI7XHJcbmFuaW1lLnRpbWVsaW5lID0gdGltZWxpbmU7XHJcbmFuaW1lLmVhc2luZyA9IHBhcnNlRWFzaW5ncztcclxuYW5pbWUucGVubmVyID0gcGVubmVyO1xyXG5hbmltZS5yYW5kb20gPSBmdW5jdGlvbihtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFuaW1lO1xyXG4iLCIvKiFcclxuV2F5cG9pbnRzIC0gNC4wLjFcclxuQ29weXJpZ2h0IMKpIDIwMTEtMjAxNiBDYWxlYiBUcm91Z2h0b25cclxuTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxyXG5odHRwczovL2dpdGh1Yi5jb20vaW1ha2V3ZWJ0aGluZ3Mvd2F5cG9pbnRzL2Jsb2IvbWFzdGVyL2xpY2Vuc2VzLnR4dFxyXG4qL1xyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICAndXNlIHN0cmljdCdcclxuXHJcbiAgICB2YXIga2V5Q291bnRlciA9IDBcclxuICAgIHZhciBhbGxXYXlwb2ludHMgPSB7fVxyXG5cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS93YXlwb2ludCAqL1xyXG4gICAgZnVuY3Rpb24gV2F5cG9pbnQob3B0aW9ucykge1xyXG4gICAgICAgIGlmICghb3B0aW9ucykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG9wdGlvbnMgcGFzc2VkIHRvIFdheXBvaW50IGNvbnN0cnVjdG9yJylcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFvcHRpb25zLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBlbGVtZW50IG9wdGlvbiBwYXNzZWQgdG8gV2F5cG9pbnQgY29uc3RydWN0b3InKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9wdGlvbnMuaGFuZGxlcikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGhhbmRsZXIgb3B0aW9uIHBhc3NlZCB0byBXYXlwb2ludCBjb25zdHJ1Y3RvcicpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmtleSA9ICd3YXlwb2ludC0nICsga2V5Q291bnRlclxyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IFdheXBvaW50LkFkYXB0ZXIuZXh0ZW5kKHt9LCBXYXlwb2ludC5kZWZhdWx0cywgb3B0aW9ucylcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLm9wdGlvbnMuZWxlbWVudFxyXG4gICAgICAgIHRoaXMuYWRhcHRlciA9IG5ldyBXYXlwb2ludC5BZGFwdGVyKHRoaXMuZWxlbWVudClcclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gb3B0aW9ucy5oYW5kbGVyXHJcbiAgICAgICAgdGhpcy5heGlzID0gdGhpcy5vcHRpb25zLmhvcml6b250YWwgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnXHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdGhpcy5vcHRpb25zLmVuYWJsZWRcclxuICAgICAgICB0aGlzLnRyaWdnZXJQb2ludCA9IG51bGxcclxuICAgICAgICB0aGlzLmdyb3VwID0gV2F5cG9pbnQuR3JvdXAuZmluZE9yQ3JlYXRlKHtcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5vcHRpb25zLmdyb3VwLFxyXG4gICAgICAgICAgICBheGlzOiB0aGlzLmF4aXNcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IFdheXBvaW50LkNvbnRleHQuZmluZE9yQ3JlYXRlQnlFbGVtZW50KHRoaXMub3B0aW9ucy5jb250ZXh0KVxyXG5cclxuICAgICAgICBpZiAoV2F5cG9pbnQub2Zmc2V0QWxpYXNlc1t0aGlzLm9wdGlvbnMub2Zmc2V0XSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMub2Zmc2V0ID0gV2F5cG9pbnQub2Zmc2V0QWxpYXNlc1t0aGlzLm9wdGlvbnMub2Zmc2V0XVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdyb3VwLmFkZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuY29udGV4dC5hZGQodGhpcylcclxuICAgICAgICBhbGxXYXlwb2ludHNbdGhpcy5rZXldID0gdGhpc1xyXG4gICAgICAgIGtleUNvdW50ZXIgKz0gMVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIFdheXBvaW50LnByb3RvdHlwZS5xdWV1ZVRyaWdnZXIgPSBmdW5jdGlvbihkaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmdyb3VwLnF1ZXVlVHJpZ2dlcih0aGlzLCBkaXJlY3Rpb24pXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgV2F5cG9pbnQucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2suYXBwbHkodGhpcywgYXJncylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvZGVzdHJveSAqL1xyXG4gICAgV2F5cG9pbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQucmVtb3ZlKHRoaXMpXHJcbiAgICAgICAgdGhpcy5ncm91cC5yZW1vdmUodGhpcylcclxuICAgICAgICBkZWxldGUgYWxsV2F5cG9pbnRzW3RoaXMua2V5XVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2Rpc2FibGUgKi9cclxuICAgIFdheXBvaW50LnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2VuYWJsZSAqL1xyXG4gICAgV2F5cG9pbnQucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5yZWZyZXNoKClcclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgcmV0dXJuIHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9uZXh0ICovXHJcbiAgICBXYXlwb2ludC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdyb3VwLm5leHQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9wcmV2aW91cyAqL1xyXG4gICAgV2F5cG9pbnQucHJvdG90eXBlLnByZXZpb3VzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXAucHJldmlvdXModGhpcylcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBXYXlwb2ludC5pbnZva2VBbGwgPSBmdW5jdGlvbihtZXRob2QpIHtcclxuICAgICAgICB2YXIgYWxsV2F5cG9pbnRzQXJyYXkgPSBbXVxyXG4gICAgICAgIGZvciAodmFyIHdheXBvaW50S2V5IGluIGFsbFdheXBvaW50cykge1xyXG4gICAgICAgICAgICBhbGxXYXlwb2ludHNBcnJheS5wdXNoKGFsbFdheXBvaW50c1t3YXlwb2ludEtleV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBlbmQgPSBhbGxXYXlwb2ludHNBcnJheS5sZW5ndGg7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICAgICAgICBhbGxXYXlwb2ludHNBcnJheVtpXVttZXRob2RdKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvZGVzdHJveS1hbGwgKi9cclxuICAgIFdheXBvaW50LmRlc3Ryb3lBbGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBXYXlwb2ludC5pbnZva2VBbGwoJ2Rlc3Ryb3knKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2Rpc2FibGUtYWxsICovXHJcbiAgICBXYXlwb2ludC5kaXNhYmxlQWxsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgV2F5cG9pbnQuaW52b2tlQWxsKCdkaXNhYmxlJylcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9lbmFibGUtYWxsICovXHJcbiAgICBXYXlwb2ludC5lbmFibGVBbGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBXYXlwb2ludC5Db250ZXh0LnJlZnJlc2hBbGwoKVxyXG4gICAgICAgIGZvciAodmFyIHdheXBvaW50S2V5IGluIGFsbFdheXBvaW50cykge1xyXG4gICAgICAgICAgICBhbGxXYXlwb2ludHNbd2F5cG9pbnRLZXldLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvcmVmcmVzaC1hbGwgKi9cclxuICAgIFdheXBvaW50LnJlZnJlc2hBbGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBXYXlwb2ludC5Db250ZXh0LnJlZnJlc2hBbGwoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL3ZpZXdwb3J0LWhlaWdodCAqL1xyXG4gICAgV2F5cG9pbnQudmlld3BvcnRIZWlnaHQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS92aWV3cG9ydC13aWR0aCAqL1xyXG4gICAgV2F5cG9pbnQudmlld3BvcnRXaWR0aCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcclxuICAgIH1cclxuXHJcbiAgICBXYXlwb2ludC5hZGFwdGVycyA9IFtdXHJcblxyXG4gICAgV2F5cG9pbnQuZGVmYXVsdHMgPSB7XHJcbiAgICAgICAgY29udGV4dDogd2luZG93LFxyXG4gICAgICAgIGNvbnRpbnVvdXM6IHRydWUsXHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBncm91cDogJ2RlZmF1bHQnLFxyXG4gICAgICAgIGhvcml6b250YWw6IGZhbHNlLFxyXG4gICAgICAgIG9mZnNldDogMFxyXG4gICAgfVxyXG5cclxuICAgIFdheXBvaW50Lm9mZnNldEFsaWFzZXMgPSB7XHJcbiAgICAgICAgJ2JvdHRvbS1pbi12aWV3JzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQuaW5uZXJIZWlnaHQoKSAtIHRoaXMuYWRhcHRlci5vdXRlckhlaWdodCgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAncmlnaHQtaW4tdmlldyc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmlubmVyV2lkdGgoKSAtIHRoaXMuYWRhcHRlci5vdXRlcldpZHRoKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LldheXBvaW50ID0gV2F5cG9pbnRcclxufSgpKTtcclxuKGZ1bmN0aW9uKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnXHJcblxyXG4gICAgZnVuY3Rpb24gcmVxdWVzdEFuaW1hdGlvbkZyYW1lU2hpbShjYWxsYmFjaykge1xyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApXHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGtleUNvdW50ZXIgPSAwXHJcbiAgICB2YXIgY29udGV4dHMgPSB7fVxyXG4gICAgdmFyIFdheXBvaW50ID0gd2luZG93LldheXBvaW50XHJcbiAgICB2YXIgb2xkV2luZG93TG9hZCA9IHdpbmRvdy5vbmxvYWRcclxuXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvY29udGV4dCAqL1xyXG4gICAgZnVuY3Rpb24gQ29udGV4dChlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxyXG4gICAgICAgIHRoaXMuQWRhcHRlciA9IFdheXBvaW50LkFkYXB0ZXJcclxuICAgICAgICB0aGlzLmFkYXB0ZXIgPSBuZXcgdGhpcy5BZGFwdGVyKGVsZW1lbnQpXHJcbiAgICAgICAgdGhpcy5rZXkgPSAnd2F5cG9pbnQtY29udGV4dC0nICsga2V5Q291bnRlclxyXG4gICAgICAgIHRoaXMuZGlkU2Nyb2xsID0gZmFsc2VcclxuICAgICAgICB0aGlzLmRpZFJlc2l6ZSA9IGZhbHNlXHJcbiAgICAgICAgdGhpcy5vbGRTY3JvbGwgPSB7XHJcbiAgICAgICAgICAgIHg6IHRoaXMuYWRhcHRlci5zY3JvbGxMZWZ0KCksXHJcbiAgICAgICAgICAgIHk6IHRoaXMuYWRhcHRlci5zY3JvbGxUb3AoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndheXBvaW50cyA9IHtcclxuICAgICAgICAgICAgdmVydGljYWw6IHt9LFxyXG4gICAgICAgICAgICBob3Jpem9udGFsOiB7fVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxlbWVudC53YXlwb2ludENvbnRleHRLZXkgPSB0aGlzLmtleVxyXG4gICAgICAgIGNvbnRleHRzW2VsZW1lbnQud2F5cG9pbnRDb250ZXh0S2V5XSA9IHRoaXNcclxuICAgICAgICBrZXlDb3VudGVyICs9IDFcclxuICAgICAgICBpZiAoIVdheXBvaW50LndpbmRvd0NvbnRleHQpIHtcclxuICAgICAgICAgICAgV2F5cG9pbnQud2luZG93Q29udGV4dCA9IHRydWVcclxuICAgICAgICAgICAgV2F5cG9pbnQud2luZG93Q29udGV4dCA9IG5ldyBDb250ZXh0KHdpbmRvdylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlVGhyb3R0bGVkU2Nyb2xsSGFuZGxlcigpXHJcbiAgICAgICAgdGhpcy5jcmVhdGVUaHJvdHRsZWRSZXNpemVIYW5kbGVyKClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbih3YXlwb2ludCkge1xyXG4gICAgICAgIHZhciBheGlzID0gd2F5cG9pbnQub3B0aW9ucy5ob3Jpem9udGFsID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJ1xyXG4gICAgICAgIHRoaXMud2F5cG9pbnRzW2F4aXNdW3dheXBvaW50LmtleV0gPSB3YXlwb2ludFxyXG4gICAgICAgIHRoaXMucmVmcmVzaCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuY2hlY2tFbXB0eSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBob3Jpem9udGFsRW1wdHkgPSB0aGlzLkFkYXB0ZXIuaXNFbXB0eU9iamVjdCh0aGlzLndheXBvaW50cy5ob3Jpem9udGFsKVxyXG4gICAgICAgIHZhciB2ZXJ0aWNhbEVtcHR5ID0gdGhpcy5BZGFwdGVyLmlzRW1wdHlPYmplY3QodGhpcy53YXlwb2ludHMudmVydGljYWwpXHJcbiAgICAgICAgdmFyIGlzV2luZG93ID0gdGhpcy5lbGVtZW50ID09IHRoaXMuZWxlbWVudC53aW5kb3dcclxuICAgICAgICBpZiAoaG9yaXpvbnRhbEVtcHR5ICYmIHZlcnRpY2FsRW1wdHkgJiYgIWlzV2luZG93KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5vZmYoJy53YXlwb2ludHMnKVxyXG4gICAgICAgICAgICBkZWxldGUgY29udGV4dHNbdGhpcy5rZXldXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmNyZWF0ZVRocm90dGxlZFJlc2l6ZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmVzaXplSGFuZGxlcigpIHtcclxuICAgICAgICAgICAgc2VsZi5oYW5kbGVSZXNpemUoKVxyXG4gICAgICAgICAgICBzZWxmLmRpZFJlc2l6ZSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFkYXB0ZXIub24oJ3Jlc2l6ZS53YXlwb2ludHMnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCFzZWxmLmRpZFJlc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5kaWRSZXNpemUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICBXYXlwb2ludC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzaXplSGFuZGxlcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuY3JlYXRlVGhyb3R0bGVkU2Nyb2xsSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpc1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBzY3JvbGxIYW5kbGVyKCkge1xyXG4gICAgICAgICAgICBzZWxmLmhhbmRsZVNjcm9sbCgpXHJcbiAgICAgICAgICAgIHNlbGYuZGlkU2Nyb2xsID0gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWRhcHRlci5vbignc2Nyb2xsLndheXBvaW50cycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGYuZGlkU2Nyb2xsIHx8IFdheXBvaW50LmlzVG91Y2gpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZGlkU2Nyb2xsID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgV2F5cG9pbnQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjcm9sbEhhbmRsZXIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLmhhbmRsZVJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFdheXBvaW50LkNvbnRleHQucmVmcmVzaEFsbCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuaGFuZGxlU2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHRyaWdnZXJlZEdyb3VwcyA9IHt9XHJcbiAgICAgICAgdmFyIGF4ZXMgPSB7XHJcbiAgICAgICAgICAgIGhvcml6b250YWw6IHtcclxuICAgICAgICAgICAgICAgIG5ld1Njcm9sbDogdGhpcy5hZGFwdGVyLnNjcm9sbExlZnQoKSxcclxuICAgICAgICAgICAgICAgIG9sZFNjcm9sbDogdGhpcy5vbGRTY3JvbGwueCxcclxuICAgICAgICAgICAgICAgIGZvcndhcmQ6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrd2FyZDogJ2xlZnQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHZlcnRpY2FsOiB7XHJcbiAgICAgICAgICAgICAgICBuZXdTY3JvbGw6IHRoaXMuYWRhcHRlci5zY3JvbGxUb3AoKSxcclxuICAgICAgICAgICAgICAgIG9sZFNjcm9sbDogdGhpcy5vbGRTY3JvbGwueSxcclxuICAgICAgICAgICAgICAgIGZvcndhcmQ6ICdkb3duJyxcclxuICAgICAgICAgICAgICAgIGJhY2t3YXJkOiAndXAnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGF4aXNLZXkgaW4gYXhlcykge1xyXG4gICAgICAgICAgICB2YXIgYXhpcyA9IGF4ZXNbYXhpc0tleV1cclxuICAgICAgICAgICAgdmFyIGlzRm9yd2FyZCA9IGF4aXMubmV3U2Nyb2xsID4gYXhpcy5vbGRTY3JvbGxcclxuICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGlzRm9yd2FyZCA/IGF4aXMuZm9yd2FyZCA6IGF4aXMuYmFja3dhcmRcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIHdheXBvaW50S2V5IGluIHRoaXMud2F5cG9pbnRzW2F4aXNLZXldKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2F5cG9pbnQgPSB0aGlzLndheXBvaW50c1theGlzS2V5XVt3YXlwb2ludEtleV1cclxuICAgICAgICAgICAgICAgIGlmICh3YXlwb2ludC50cmlnZ2VyUG9pbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHdhc0JlZm9yZVRyaWdnZXJQb2ludCA9IGF4aXMub2xkU2Nyb2xsIDwgd2F5cG9pbnQudHJpZ2dlclBvaW50XHJcbiAgICAgICAgICAgICAgICB2YXIgbm93QWZ0ZXJUcmlnZ2VyUG9pbnQgPSBheGlzLm5ld1Njcm9sbCA+PSB3YXlwb2ludC50cmlnZ2VyUG9pbnRcclxuICAgICAgICAgICAgICAgIHZhciBjcm9zc2VkRm9yd2FyZCA9IHdhc0JlZm9yZVRyaWdnZXJQb2ludCAmJiBub3dBZnRlclRyaWdnZXJQb2ludFxyXG4gICAgICAgICAgICAgICAgdmFyIGNyb3NzZWRCYWNrd2FyZCA9ICF3YXNCZWZvcmVUcmlnZ2VyUG9pbnQgJiYgIW5vd0FmdGVyVHJpZ2dlclBvaW50XHJcbiAgICAgICAgICAgICAgICBpZiAoY3Jvc3NlZEZvcndhcmQgfHwgY3Jvc3NlZEJhY2t3YXJkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2F5cG9pbnQucXVldWVUcmlnZ2VyKGRpcmVjdGlvbilcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyZWRHcm91cHNbd2F5cG9pbnQuZ3JvdXAuaWRdID0gd2F5cG9pbnQuZ3JvdXBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgZ3JvdXBLZXkgaW4gdHJpZ2dlcmVkR3JvdXBzKSB7XHJcbiAgICAgICAgICAgIHRyaWdnZXJlZEdyb3Vwc1tncm91cEtleV0uZmx1c2hUcmlnZ2VycygpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9sZFNjcm9sbCA9IHtcclxuICAgICAgICAgICAgeDogYXhlcy5ob3Jpem9udGFsLm5ld1Njcm9sbCxcclxuICAgICAgICAgICAgeTogYXhlcy52ZXJ0aWNhbC5uZXdTY3JvbGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuaW5uZXJIZWlnaHQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvKmVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgPT0gdGhpcy5lbGVtZW50LndpbmRvdykge1xyXG4gICAgICAgICAgICByZXR1cm4gV2F5cG9pbnQudmlld3BvcnRIZWlnaHQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvKmVzbGludC1lbmFibGUgZXFlcWVxICovXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5pbm5lckhlaWdodCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24od2F5cG9pbnQpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy53YXlwb2ludHNbd2F5cG9pbnQuYXhpc11bd2F5cG9pbnQua2V5XVxyXG4gICAgICAgIHRoaXMuY2hlY2tFbXB0eSgpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgQ29udGV4dC5wcm90b3R5cGUuaW5uZXJXaWR0aCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8qZXNsaW50LWRpc2FibGUgZXFlcWVxICovXHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCA9PSB0aGlzLmVsZW1lbnQud2luZG93KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBXYXlwb2ludC52aWV3cG9ydFdpZHRoKClcclxuICAgICAgICB9XHJcbiAgICAgICAgLyplc2xpbnQtZW5hYmxlIGVxZXFlcSAqL1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuaW5uZXJXaWR0aCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvY29udGV4dC1kZXN0cm95ICovXHJcbiAgICBDb250ZXh0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGFsbFdheXBvaW50cyA9IFtdXHJcbiAgICAgICAgZm9yICh2YXIgYXhpcyBpbiB0aGlzLndheXBvaW50cykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB3YXlwb2ludEtleSBpbiB0aGlzLndheXBvaW50c1theGlzXSkge1xyXG4gICAgICAgICAgICAgICAgYWxsV2F5cG9pbnRzLnB1c2godGhpcy53YXlwb2ludHNbYXhpc11bd2F5cG9pbnRLZXldKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBlbmQgPSBhbGxXYXlwb2ludHMubGVuZ3RoOyBpIDwgZW5kOyBpKyspIHtcclxuICAgICAgICAgICAgYWxsV2F5cG9pbnRzW2ldLmRlc3Ryb3koKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9jb250ZXh0LXJlZnJlc2ggKi9cclxuICAgIENvbnRleHQucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvKmVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xyXG4gICAgICAgIHZhciBpc1dpbmRvdyA9IHRoaXMuZWxlbWVudCA9PSB0aGlzLmVsZW1lbnQud2luZG93XHJcbiAgICAgICAgLyplc2xpbnQtZW5hYmxlIGVxZXFlcSAqL1xyXG4gICAgICAgIHZhciBjb250ZXh0T2Zmc2V0ID0gaXNXaW5kb3cgPyB1bmRlZmluZWQgOiB0aGlzLmFkYXB0ZXIub2Zmc2V0KClcclxuICAgICAgICB2YXIgdHJpZ2dlcmVkR3JvdXBzID0ge31cclxuICAgICAgICB2YXIgYXhlc1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNjcm9sbCgpXHJcbiAgICAgICAgYXhlcyA9IHtcclxuICAgICAgICAgICAgaG9yaXpvbnRhbDoge1xyXG4gICAgICAgICAgICAgICAgY29udGV4dE9mZnNldDogaXNXaW5kb3cgPyAwIDogY29udGV4dE9mZnNldC5sZWZ0LFxyXG4gICAgICAgICAgICAgICAgY29udGV4dFNjcm9sbDogaXNXaW5kb3cgPyAwIDogdGhpcy5vbGRTY3JvbGwueCxcclxuICAgICAgICAgICAgICAgIGNvbnRleHREaW1lbnNpb246IHRoaXMuaW5uZXJXaWR0aCgpLFxyXG4gICAgICAgICAgICAgICAgb2xkU2Nyb2xsOiB0aGlzLm9sZFNjcm9sbC54LFxyXG4gICAgICAgICAgICAgICAgZm9yd2FyZDogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgIGJhY2t3YXJkOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRQcm9wOiAnbGVmdCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdmVydGljYWw6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHRPZmZzZXQ6IGlzV2luZG93ID8gMCA6IGNvbnRleHRPZmZzZXQudG9wLFxyXG4gICAgICAgICAgICAgICAgY29udGV4dFNjcm9sbDogaXNXaW5kb3cgPyAwIDogdGhpcy5vbGRTY3JvbGwueSxcclxuICAgICAgICAgICAgICAgIGNvbnRleHREaW1lbnNpb246IHRoaXMuaW5uZXJIZWlnaHQoKSxcclxuICAgICAgICAgICAgICAgIG9sZFNjcm9sbDogdGhpcy5vbGRTY3JvbGwueSxcclxuICAgICAgICAgICAgICAgIGZvcndhcmQ6ICdkb3duJyxcclxuICAgICAgICAgICAgICAgIGJhY2t3YXJkOiAndXAnLFxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0UHJvcDogJ3RvcCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgYXhpc0tleSBpbiBheGVzKSB7XHJcbiAgICAgICAgICAgIHZhciBheGlzID0gYXhlc1theGlzS2V5XVxyXG4gICAgICAgICAgICBmb3IgKHZhciB3YXlwb2ludEtleSBpbiB0aGlzLndheXBvaW50c1theGlzS2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdheXBvaW50ID0gdGhpcy53YXlwb2ludHNbYXhpc0tleV1bd2F5cG9pbnRLZXldXHJcbiAgICAgICAgICAgICAgICB2YXIgYWRqdXN0bWVudCA9IHdheXBvaW50Lm9wdGlvbnMub2Zmc2V0XHJcbiAgICAgICAgICAgICAgICB2YXIgb2xkVHJpZ2dlclBvaW50ID0gd2F5cG9pbnQudHJpZ2dlclBvaW50XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudE9mZnNldCA9IDBcclxuICAgICAgICAgICAgICAgIHZhciBmcmVzaFdheXBvaW50ID0gb2xkVHJpZ2dlclBvaW50ID09IG51bGxcclxuICAgICAgICAgICAgICAgIHZhciBjb250ZXh0TW9kaWZpZXIsIHdhc0JlZm9yZVNjcm9sbCwgbm93QWZ0ZXJTY3JvbGxcclxuICAgICAgICAgICAgICAgIHZhciB0cmlnZ2VyZWRCYWNrd2FyZCwgdHJpZ2dlcmVkRm9yd2FyZFxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh3YXlwb2ludC5lbGVtZW50ICE9PSB3YXlwb2ludC5lbGVtZW50LndpbmRvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPZmZzZXQgPSB3YXlwb2ludC5hZGFwdGVyLm9mZnNldCgpW2F4aXMub2Zmc2V0UHJvcF1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFkanVzdG1lbnQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGp1c3RtZW50ID0gYWRqdXN0bWVudC5hcHBseSh3YXlwb2ludClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFkanVzdG1lbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRqdXN0bWVudCA9IHBhcnNlRmxvYXQoYWRqdXN0bWVudClcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2F5cG9pbnQub3B0aW9ucy5vZmZzZXQuaW5kZXhPZignJScpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRqdXN0bWVudCA9IE1hdGguY2VpbChheGlzLmNvbnRleHREaW1lbnNpb24gKiBhZGp1c3RtZW50IC8gMTAwKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0TW9kaWZpZXIgPSBheGlzLmNvbnRleHRTY3JvbGwgLSBheGlzLmNvbnRleHRPZmZzZXRcclxuICAgICAgICAgICAgICAgIHdheXBvaW50LnRyaWdnZXJQb2ludCA9IE1hdGguZmxvb3IoZWxlbWVudE9mZnNldCArIGNvbnRleHRNb2RpZmllciAtIGFkanVzdG1lbnQpXHJcbiAgICAgICAgICAgICAgICB3YXNCZWZvcmVTY3JvbGwgPSBvbGRUcmlnZ2VyUG9pbnQgPCBheGlzLm9sZFNjcm9sbFxyXG4gICAgICAgICAgICAgICAgbm93QWZ0ZXJTY3JvbGwgPSB3YXlwb2ludC50cmlnZ2VyUG9pbnQgPj0gYXhpcy5vbGRTY3JvbGxcclxuICAgICAgICAgICAgICAgIHRyaWdnZXJlZEJhY2t3YXJkID0gd2FzQmVmb3JlU2Nyb2xsICYmIG5vd0FmdGVyU2Nyb2xsXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyZWRGb3J3YXJkID0gIXdhc0JlZm9yZVNjcm9sbCAmJiAhbm93QWZ0ZXJTY3JvbGxcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWZyZXNoV2F5cG9pbnQgJiYgdHJpZ2dlcmVkQmFja3dhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB3YXlwb2ludC5xdWV1ZVRyaWdnZXIoYXhpcy5iYWNrd2FyZClcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyZWRHcm91cHNbd2F5cG9pbnQuZ3JvdXAuaWRdID0gd2F5cG9pbnQuZ3JvdXBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWZyZXNoV2F5cG9pbnQgJiYgdHJpZ2dlcmVkRm9yd2FyZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdheXBvaW50LnF1ZXVlVHJpZ2dlcihheGlzLmZvcndhcmQpXHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcmVkR3JvdXBzW3dheXBvaW50Lmdyb3VwLmlkXSA9IHdheXBvaW50Lmdyb3VwXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZyZXNoV2F5cG9pbnQgJiYgYXhpcy5vbGRTY3JvbGwgPj0gd2F5cG9pbnQudHJpZ2dlclBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2F5cG9pbnQucXVldWVUcmlnZ2VyKGF4aXMuZm9yd2FyZClcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyZWRHcm91cHNbd2F5cG9pbnQuZ3JvdXAuaWRdID0gd2F5cG9pbnQuZ3JvdXBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgV2F5cG9pbnQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBncm91cEtleSBpbiB0cmlnZ2VyZWRHcm91cHMpIHtcclxuICAgICAgICAgICAgICAgIHRyaWdnZXJlZEdyb3Vwc1tncm91cEtleV0uZmx1c2hUcmlnZ2VycygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIENvbnRleHQuZmluZE9yQ3JlYXRlQnlFbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBDb250ZXh0LmZpbmRCeUVsZW1lbnQoZWxlbWVudCkgfHwgbmV3IENvbnRleHQoZWxlbWVudClcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBDb250ZXh0LnJlZnJlc2hBbGwgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBmb3IgKHZhciBjb250ZXh0SWQgaW4gY29udGV4dHMpIHtcclxuICAgICAgICAgICAgY29udGV4dHNbY29udGV4dElkXS5yZWZyZXNoKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHVibGljICovXHJcbiAgICAvKiBodHRwOi8vaW1ha2V3ZWJ0aGluZ3MuY29tL3dheXBvaW50cy9hcGkvY29udGV4dC1maW5kLWJ5LWVsZW1lbnQgKi9cclxuICAgIENvbnRleHQuZmluZEJ5RWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gY29udGV4dHNbZWxlbWVudC53YXlwb2ludENvbnRleHRLZXldXHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChvbGRXaW5kb3dMb2FkKSB7XHJcbiAgICAgICAgICAgIG9sZFdpbmRvd0xvYWQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBDb250ZXh0LnJlZnJlc2hBbGwoKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBXYXlwb2ludC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciByZXF1ZXN0Rm4gPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcclxuICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWVTaGltXHJcbiAgICAgICAgcmVxdWVzdEZuLmNhbGwod2luZG93LCBjYWxsYmFjaylcclxuICAgIH1cclxuICAgIFdheXBvaW50LkNvbnRleHQgPSBDb250ZXh0XHJcbn0oKSk7XHJcbihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0J1xyXG5cclxuICAgIGZ1bmN0aW9uIGJ5VHJpZ2dlclBvaW50KGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYS50cmlnZ2VyUG9pbnQgLSBiLnRyaWdnZXJQb2ludFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGJ5UmV2ZXJzZVRyaWdnZXJQb2ludChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGIudHJpZ2dlclBvaW50IC0gYS50cmlnZ2VyUG9pbnRcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ3JvdXBzID0ge1xyXG4gICAgICAgIHZlcnRpY2FsOiB7fSxcclxuICAgICAgICBob3Jpem9udGFsOiB7fVxyXG4gICAgfVxyXG4gICAgdmFyIFdheXBvaW50ID0gd2luZG93LldheXBvaW50XHJcblxyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2dyb3VwICovXHJcbiAgICBmdW5jdGlvbiBHcm91cChvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lXHJcbiAgICAgICAgdGhpcy5heGlzID0gb3B0aW9ucy5heGlzXHJcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMubmFtZSArICctJyArIHRoaXMuYXhpc1xyXG4gICAgICAgIHRoaXMud2F5cG9pbnRzID0gW11cclxuICAgICAgICB0aGlzLmNsZWFyVHJpZ2dlclF1ZXVlcygpXHJcbiAgICAgICAgZ3JvdXBzW3RoaXMuYXhpc11bdGhpcy5uYW1lXSA9IHRoaXNcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBHcm91cC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24od2F5cG9pbnQpIHtcclxuICAgICAgICB0aGlzLndheXBvaW50cy5wdXNoKHdheXBvaW50KVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIEdyb3VwLnByb3RvdHlwZS5jbGVhclRyaWdnZXJRdWV1ZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnRyaWdnZXJRdWV1ZXMgPSB7XHJcbiAgICAgICAgICAgIHVwOiBbXSxcclxuICAgICAgICAgICAgZG93bjogW10sXHJcbiAgICAgICAgICAgIGxlZnQ6IFtdLFxyXG4gICAgICAgICAgICByaWdodDogW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLmZsdXNoVHJpZ2dlcnMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBmb3IgKHZhciBkaXJlY3Rpb24gaW4gdGhpcy50cmlnZ2VyUXVldWVzKSB7XHJcbiAgICAgICAgICAgIHZhciB3YXlwb2ludHMgPSB0aGlzLnRyaWdnZXJRdWV1ZXNbZGlyZWN0aW9uXVxyXG4gICAgICAgICAgICB2YXIgcmV2ZXJzZSA9IGRpcmVjdGlvbiA9PT0gJ3VwJyB8fCBkaXJlY3Rpb24gPT09ICdsZWZ0J1xyXG4gICAgICAgICAgICB3YXlwb2ludHMuc29ydChyZXZlcnNlID8gYnlSZXZlcnNlVHJpZ2dlclBvaW50IDogYnlUcmlnZ2VyUG9pbnQpXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBlbmQgPSB3YXlwb2ludHMubGVuZ3RoOyBpIDwgZW5kOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIHZhciB3YXlwb2ludCA9IHdheXBvaW50c1tpXVxyXG4gICAgICAgICAgICAgICAgaWYgKHdheXBvaW50Lm9wdGlvbnMuY29udGludW91cyB8fCBpID09PSB3YXlwb2ludHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdheXBvaW50LnRyaWdnZXIoW2RpcmVjdGlvbl0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbGVhclRyaWdnZXJRdWV1ZXMoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIEdyb3VwLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24od2F5cG9pbnQpIHtcclxuICAgICAgICB0aGlzLndheXBvaW50cy5zb3J0KGJ5VHJpZ2dlclBvaW50KVxyXG4gICAgICAgIHZhciBpbmRleCA9IFdheXBvaW50LkFkYXB0ZXIuaW5BcnJheSh3YXlwb2ludCwgdGhpcy53YXlwb2ludHMpXHJcbiAgICAgICAgdmFyIGlzTGFzdCA9IGluZGV4ID09PSB0aGlzLndheXBvaW50cy5sZW5ndGggLSAxXHJcbiAgICAgICAgcmV0dXJuIGlzTGFzdCA/IG51bGwgOiB0aGlzLndheXBvaW50c1tpbmRleCArIDFdXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLnByZXZpb3VzID0gZnVuY3Rpb24od2F5cG9pbnQpIHtcclxuICAgICAgICB0aGlzLndheXBvaW50cy5zb3J0KGJ5VHJpZ2dlclBvaW50KVxyXG4gICAgICAgIHZhciBpbmRleCA9IFdheXBvaW50LkFkYXB0ZXIuaW5BcnJheSh3YXlwb2ludCwgdGhpcy53YXlwb2ludHMpXHJcbiAgICAgICAgcmV0dXJuIGluZGV4ID8gdGhpcy53YXlwb2ludHNbaW5kZXggLSAxXSA6IG51bGxcclxuICAgIH1cclxuXHJcbiAgICAvKiBQcml2YXRlICovXHJcbiAgICBHcm91cC5wcm90b3R5cGUucXVldWVUcmlnZ2VyID0gZnVuY3Rpb24od2F5cG9pbnQsIGRpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlclF1ZXVlc1tkaXJlY3Rpb25dLnB1c2god2F5cG9pbnQpXHJcbiAgICB9XHJcblxyXG4gICAgLyogUHJpdmF0ZSAqL1xyXG4gICAgR3JvdXAucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKHdheXBvaW50KSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gV2F5cG9pbnQuQWRhcHRlci5pbkFycmF5KHdheXBvaW50LCB0aGlzLndheXBvaW50cylcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLndheXBvaW50cy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFB1YmxpYyAqL1xyXG4gICAgLyogaHR0cDovL2ltYWtld2VidGhpbmdzLmNvbS93YXlwb2ludHMvYXBpL2ZpcnN0ICovXHJcbiAgICBHcm91cC5wcm90b3R5cGUuZmlyc3QgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy53YXlwb2ludHNbMF1cclxuICAgIH1cclxuXHJcbiAgICAvKiBQdWJsaWMgKi9cclxuICAgIC8qIGh0dHA6Ly9pbWFrZXdlYnRoaW5ncy5jb20vd2F5cG9pbnRzL2FwaS9sYXN0ICovXHJcbiAgICBHcm91cC5wcm90b3R5cGUubGFzdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndheXBvaW50c1t0aGlzLndheXBvaW50cy5sZW5ndGggLSAxXVxyXG4gICAgfVxyXG5cclxuICAgIC8qIFByaXZhdGUgKi9cclxuICAgIEdyb3VwLmZpbmRPckNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gZ3JvdXBzW29wdGlvbnMuYXhpc11bb3B0aW9ucy5uYW1lXSB8fCBuZXcgR3JvdXAob3B0aW9ucylcclxuICAgIH1cclxuXHJcbiAgICBXYXlwb2ludC5Hcm91cCA9IEdyb3VwXHJcbn0oKSk7XHJcbihmdW5jdGlvbigpIHtcclxuICAgICd1c2Ugc3RyaWN0J1xyXG5cclxuICAgIHZhciBXYXlwb2ludCA9IHdpbmRvdy5XYXlwb2ludFxyXG5cclxuICAgIGZ1bmN0aW9uIGlzV2luZG93KGVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudCA9PT0gZWxlbWVudC53aW5kb3dcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRXaW5kb3coZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChpc1dpbmRvdyhlbGVtZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWxlbWVudC5kZWZhdWx0Vmlld1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIE5vRnJhbWV3b3JrQWRhcHRlcihlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFxyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSB7fVxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUuaW5uZXJIZWlnaHQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgaXNXaW4gPSBpc1dpbmRvdyh0aGlzLmVsZW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIGlzV2luID8gdGhpcy5lbGVtZW50LmlubmVySGVpZ2h0IDogdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodFxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUuaW5uZXJXaWR0aCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBpc1dpbiA9IGlzV2luZG93KHRoaXMuZWxlbWVudClcclxuICAgICAgICByZXR1cm4gaXNXaW4gPyB0aGlzLmVsZW1lbnQuaW5uZXJXaWR0aCA6IHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aFxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgICAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoZWxlbWVudCwgbGlzdGVuZXJzLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBlbmQgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV1cclxuICAgICAgICAgICAgICAgIGlmICghaGFuZGxlciB8fCBoYW5kbGVyID09PSBsaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsaXN0ZW5lcilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGV2ZW50UGFydHMgPSBldmVudC5zcGxpdCgnLicpXHJcbiAgICAgICAgdmFyIGV2ZW50VHlwZSA9IGV2ZW50UGFydHNbMF1cclxuICAgICAgICB2YXIgbmFtZXNwYWNlID0gZXZlbnRQYXJ0c1sxXVxyXG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50XHJcblxyXG4gICAgICAgIGlmIChuYW1lc3BhY2UgJiYgdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdICYmIGV2ZW50VHlwZSkge1xyXG4gICAgICAgICAgICByZW1vdmVMaXN0ZW5lcnMoZWxlbWVudCwgdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdW2V2ZW50VHlwZV0sIGhhbmRsZXIpXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXVtldmVudFR5cGVdID0gW11cclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50VHlwZSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBucyBpbiB0aGlzLmhhbmRsZXJzKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lcnMoZWxlbWVudCwgdGhpcy5oYW5kbGVyc1tuc11bZXZlbnRUeXBlXSB8fCBbXSwgaGFuZGxlcilcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlcnNbbnNdW2V2ZW50VHlwZV0gPSBbXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lc3BhY2UgJiYgdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHR5cGUgaW4gdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lcnMoZWxlbWVudCwgdGhpcy5oYW5kbGVyc1tuYW1lc3BhY2VdW3R5cGVdLCBoYW5kbGVyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlcnNbbmFtZXNwYWNlXSA9IHt9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIEFkYXB0ZWQgZnJvbSBqUXVlcnkgMS54IG9mZnNldCgpICovXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLm9mZnNldCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcclxuICAgICAgICB2YXIgd2luID0gZ2V0V2luZG93KHRoaXMuZWxlbWVudC5vd25lckRvY3VtZW50KVxyXG4gICAgICAgIHZhciByZWN0ID0ge1xyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGxlZnQ6IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XHJcbiAgICAgICAgICAgIHJlY3QgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRvcDogcmVjdC50b3AgKyB3aW4ucGFnZVlPZmZzZXQgLSBkb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wLFxyXG4gICAgICAgICAgICBsZWZ0OiByZWN0LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQgLSBkb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIpIHtcclxuICAgICAgICB2YXIgZXZlbnRQYXJ0cyA9IGV2ZW50LnNwbGl0KCcuJylcclxuICAgICAgICB2YXIgZXZlbnRUeXBlID0gZXZlbnRQYXJ0c1swXVxyXG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSBldmVudFBhcnRzWzFdIHx8ICdfX2RlZmF1bHQnXHJcbiAgICAgICAgdmFyIG5zSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV0gPSB0aGlzLmhhbmRsZXJzW25hbWVzcGFjZV0gfHwge31cclxuICAgICAgICB2YXIgbnNUeXBlTGlzdCA9IG5zSGFuZGxlcnNbZXZlbnRUeXBlXSA9IG5zSGFuZGxlcnNbZXZlbnRUeXBlXSB8fCBbXVxyXG5cclxuICAgICAgICBuc1R5cGVMaXN0LnB1c2goaGFuZGxlcilcclxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGhhbmRsZXIpXHJcbiAgICB9XHJcblxyXG4gICAgTm9GcmFtZXdvcmtBZGFwdGVyLnByb3RvdHlwZS5vdXRlckhlaWdodCA9IGZ1bmN0aW9uKGluY2x1ZGVNYXJnaW4pIHtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5pbm5lckhlaWdodCgpXHJcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGVcclxuXHJcbiAgICAgICAgaWYgKGluY2x1ZGVNYXJnaW4gJiYgIWlzV2luZG93KHRoaXMuZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudClcclxuICAgICAgICAgICAgaGVpZ2h0ICs9IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUubWFyZ2luVG9wLCAxMClcclxuICAgICAgICAgICAgaGVpZ2h0ICs9IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUubWFyZ2luQm90dG9tLCAxMClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBoZWlnaHRcclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIucHJvdG90eXBlLm91dGVyV2lkdGggPSBmdW5jdGlvbihpbmNsdWRlTWFyZ2luKSB7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5pbm5lcldpZHRoKClcclxuICAgICAgICB2YXIgY29tcHV0ZWRTdHlsZVxyXG5cclxuICAgICAgICBpZiAoaW5jbHVkZU1hcmdpbiAmJiAhaXNXaW5kb3codGhpcy5lbGVtZW50KSkge1xyXG4gICAgICAgICAgICBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KVxyXG4gICAgICAgICAgICB3aWR0aCArPSBwYXJzZUludChjb21wdXRlZFN0eWxlLm1hcmdpbkxlZnQsIDEwKVxyXG4gICAgICAgICAgICB3aWR0aCArPSBwYXJzZUludChjb21wdXRlZFN0eWxlLm1hcmdpblJpZ2h0LCAxMClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB3aWR0aFxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUuc2Nyb2xsTGVmdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB3aW4gPSBnZXRXaW5kb3codGhpcy5lbGVtZW50KVxyXG4gICAgICAgIHJldHVybiB3aW4gPyB3aW4ucGFnZVhPZmZzZXQgOiB0aGlzLmVsZW1lbnQuc2Nyb2xsTGVmdFxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5wcm90b3R5cGUuc2Nyb2xsVG9wID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHdpbiA9IGdldFdpbmRvdyh0aGlzLmVsZW1lbnQpXHJcbiAgICAgICAgcmV0dXJuIHdpbiA/IHdpbi5wYWdlWU9mZnNldCA6IHRoaXMuZWxlbWVudC5zY3JvbGxUb3BcclxuICAgIH1cclxuXHJcbiAgICBOb0ZyYW1ld29ya0FkYXB0ZXIuZXh0ZW5kID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1lcmdlKHRhcmdldCwgb2JqKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IG9ialtrZXldXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMSwgZW5kID0gYXJncy5sZW5ndGg7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICAgICAgICBtZXJnZShhcmdzWzBdLCBhcmdzW2ldKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJnc1swXVxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5pbkFycmF5ID0gZnVuY3Rpb24oZWxlbWVudCwgYXJyYXksIGkpIHtcclxuICAgICAgICByZXR1cm4gYXJyYXkgPT0gbnVsbCA/IC0xIDogYXJyYXkuaW5kZXhPZihlbGVtZW50LCBpKVxyXG4gICAgfVxyXG5cclxuICAgIE5vRnJhbWV3b3JrQWRhcHRlci5pc0VtcHR5T2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgLyogZXNsaW50IG5vLXVudXNlZC12YXJzOiAwICovXHJcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBvYmopIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgV2F5cG9pbnQuYWRhcHRlcnMucHVzaCh7XHJcbiAgICAgICAgbmFtZTogJ25vZnJhbWV3b3JrJyxcclxuICAgICAgICBBZGFwdGVyOiBOb0ZyYW1ld29ya0FkYXB0ZXJcclxuICAgIH0pXHJcbiAgICBXYXlwb2ludC5BZGFwdGVyID0gTm9GcmFtZXdvcmtBZGFwdGVyXHJcbn0oKSk7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTW9kYWxNZW51IGZyb20gXCIuL21vZHVsZXMvbW9kYWxNZW51XCI7XHJcbmltcG9ydCBBbmltYXRpb25zIGZyb20gXCIuL21vZHVsZXMvYW5pbWF0aW9uXCI7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4vbW9kdWxlcy9zZWFyY2hcIjtcclxuaW1wb3J0IEZvcm1zIGZyb20gXCIuL21vZHVsZXMvZm9ybXNcIjtcclxuXHJcbmNvbnN0IG1vZGFsTWVudSA9IG5ldyBNb2RhbE1lbnUoKTtcclxuY29uc3QgYW5pbWF0aW9uID0gbmV3IEFuaW1hdGlvbnMoKTtcclxuY29uc3Qgc2VhcmNoID0gbmV3IFNlYXJjaCgpO1xyXG5jb25zdCBmb3JtcyA9IG5ldyBGb3JtcygpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9