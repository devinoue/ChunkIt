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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(4);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {



window.autosize = __webpack_require__(3);
window.chunkIt = __webpack_require__(2);

autosize(document.querySelectorAll('.main_text'));

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function () {
    var raw_text = document.trans.txt.value;
    document.trans.txt.value = "";

    if (raw_text == "") return;

    raw_text = raw_text.replace(/\n/g, " ");

    var texts = raw_text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");

    var html = "";

    for (var i = 0; i < texts.length; i++) {
        texts[i] = texts[i].replace(/\"/g, "");

        html += "<textarea class=\"main_text\">" + texts[i] + "<\/textarea><br>";
        html += texts[i] + "<br><br>\n";
    }

    M.toast({ html: '分割しました' });

    var res = document.getElementById("result");
    res.innerHTML = html;

    autosize(document.querySelectorAll('.main_text'));
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Autosize 3.0.20
	license: MIT
	http://www.jacklmoore.com/autosize
*/
!function (e, t) {
	if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ("undefined" != typeof exports && "undefined" != typeof module) t(exports, module);else {
		var n = { exports: {} };t(n.exports, n), e.autosize = n.exports;
	}
}(this, function (e, t) {
	"use strict";
	function n(e) {
		function t() {
			var t = window.getComputedStyle(e, null);"vertical" === t.resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), s = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(s) && (s = 0), l();
		}function n(t) {
			var n = e.style.width;e.style.width = "0px", e.offsetWidth, e.style.width = n, e.style.overflowY = t;
		}function o(e) {
			for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) {
				e.parentNode.scrollTop && t.push({ node: e.parentNode, scrollTop: e.parentNode.scrollTop }), e = e.parentNode;
			}return t;
		}function r() {
			var t = e.style.height,
			    n = o(e),
			    r = document.documentElement && document.documentElement.scrollTop;e.style.height = "auto";var i = e.scrollHeight + s;return 0 === e.scrollHeight ? void (e.style.height = t) : (e.style.height = i + "px", u = e.clientWidth, n.forEach(function (e) {
				e.node.scrollTop = e.scrollTop;
			}), void (r && (document.documentElement.scrollTop = r)));
		}function l() {
			r();var t = Math.round(parseFloat(e.style.height)),
			    o = window.getComputedStyle(e, null),
			    i = Math.round(parseFloat(o.height));if (i !== t ? "visible" !== o.overflowY && (n("visible"), r(), i = Math.round(parseFloat(window.getComputedStyle(e, null).height))) : "hidden" !== o.overflowY && (n("hidden"), r(), i = Math.round(parseFloat(window.getComputedStyle(e, null).height))), a !== i) {
				a = i;var l = d("autosize:resized");try {
					e.dispatchEvent(l);
				} catch (e) {}
			}
		}if (e && e.nodeName && "TEXTAREA" === e.nodeName && !i.has(e)) {
			var s = null,
			    u = e.clientWidth,
			    a = null,
			    p = function p() {
				e.clientWidth !== u && l();
			},
			    c = function (t) {
				window.removeEventListener("resize", p, !1), e.removeEventListener("input", l, !1), e.removeEventListener("keyup", l, !1), e.removeEventListener("autosize:destroy", c, !1), e.removeEventListener("autosize:update", l, !1), Object.keys(t).forEach(function (n) {
					e.style[n] = t[n];
				}), i.delete(e);
			}.bind(e, { height: e.style.height, resize: e.style.resize, overflowY: e.style.overflowY, overflowX: e.style.overflowX, wordWrap: e.style.wordWrap });e.addEventListener("autosize:destroy", c, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", l, !1), window.addEventListener("resize", p, !1), e.addEventListener("input", l, !1), e.addEventListener("autosize:update", l, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", i.set(e, { destroy: c, update: l }), t();
		}
	}function o(e) {
		var t = i.get(e);t && t.destroy();
	}function r(e) {
		var t = i.get(e);t && t.update();
	}var i = "function" == typeof Map ? new Map() : function () {
		var e = [],
		    t = [];return { has: function has(t) {
				return e.indexOf(t) > -1;
			}, get: function get(n) {
				return t[e.indexOf(n)];
			}, set: function set(n, o) {
				e.indexOf(n) === -1 && (e.push(n), t.push(o));
			}, delete: function _delete(n) {
				var o = e.indexOf(n);o > -1 && (e.splice(o, 1), t.splice(o, 1));
			} };
	}(),
	    d = function d(e) {
		return new Event(e, { bubbles: !0 });
	};try {
		new Event("test");
	} catch (e) {
		d = function d(e) {
			var t = document.createEvent("Event");return t.initEvent(e, !0, !1), t;
		};
	}var l = null;"undefined" == typeof window || "function" != typeof window.getComputedStyle ? (l = function l(e) {
		return e;
	}, l.destroy = function (e) {
		return e;
	}, l.update = function (e) {
		return e;
	}) : (l = function l(e, t) {
		return e && Array.prototype.forEach.call(e.length ? e : [e], function (e) {
			return n(e, t);
		}), e;
	}, l.destroy = function (e) {
		return e && Array.prototype.forEach.call(e.length ? e : [e], o), e;
	}, l.update = function (e) {
		return e && Array.prototype.forEach.call(e.length ? e : [e], r), e;
	}), t.exports = l;
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);