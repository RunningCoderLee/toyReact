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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ToyReact.js":
/*!*********************!*\
  !*** ./ToyReact.js ***!
  \*********************/
/*! exports provided: Component, ToyReact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToyReact", function() { return ToyReact; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ElementWrapper = /*#__PURE__*/function () {
  function ElementWrapper(type) {
    _classCallCheck(this, ElementWrapper);

    this.root = document.createElement(type);
  }

  _createClass(ElementWrapper, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      var attributeName = name;

      if (attributeName === 'className') {
        attributeName = 'class';
      }

      if (name.match(/^on([\s\S]+)$/)) {
        this.root.addEventListener(RegExp.$1.replace(/^[\s\S]/, function (c) {
          return c.toLowerCase();
        }), value);
      } else {
        this.root.setAttribute(attributeName, value);
      }
    }
  }, {
    key: "appendChild",
    value: function appendChild(vChild) {
      var range = document.createRange();

      if (this.root.children.length) {
        range.setStartAfter(this.root.lastChild);
        range.setEndAfter(this.root.lastChild);
      } else {
        range.setStart(this.root, 0);
        range.setEnd(this.root, 0);
      }

      vChild.mountTo(range);
    }
  }, {
    key: "mountTo",
    value: function mountTo(range) {
      range.deleteContents();
      range.insertNode(this.root);
    }
  }]);

  return ElementWrapper;
}();

var TextWrapper = /*#__PURE__*/function () {
  function TextWrapper(type) {
    _classCallCheck(this, TextWrapper);

    this.root = document.createTextNode(type);
  }

  _createClass(TextWrapper, [{
    key: "mountTo",
    value: function mountTo(range) {
      range.deleteContents();
      range.insertNode(this.root);
    }
  }]);

  return TextWrapper;
}();

var Component = /*#__PURE__*/function () {
  function Component() {
    _classCallCheck(this, Component);

    this.children = [];
    this.props = Object.create(null);
  }

  _createClass(Component, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this.props[name] = value;

      if (name === 'className') {
        this["class"] = value;
      } else if (name.match(/^on[\s\S]+/)) {
        console.log(1);
      } else {
        this[name] = value;
      }
    }
  }, {
    key: "mountTo",
    value: function mountTo(range) {
      this.range = range;
      this.update();
    }
  }, {
    key: "update",
    value: function update() {
      var placeholder = document.createComment('placeholder');
      var range = document.createRange();
      range.setStart(this.range.endContainer, this.range.endOffset);
      range.setEnd(this.range.endContainer, this.range.endOffset);
      range.insertNode(placeholder);
      this.range.deleteContents();
      var vDom = this.render();
      vDom.mountTo(this.range); // placeholder.parentNode.removeChild(placeholder)
    }
  }, {
    key: "appendChild",
    value: function appendChild(vChild) {
      this.children.push(vChild);
    }
  }, {
    key: "setState",
    value: function setState(state) {
      var merge = function merge(prevState, newState) {
        for (var key in newState) {
          if (Object.hasOwnProperty.call(newState, key)) {
            if (_typeof(newState[key]) === 'object') {
              if (_typeof(prevState) !== 'object') {
                prevState[key] = {};
              }

              merge(prevState[key], newState[key]);
            } else {
              prevState[key] = newState[key];
            }
          }
        }
      };

      if (!this.state && state) {
        this.state = {};
      }

      merge(this.state, state);
      this.update();
    }
  }]);

  return Component;
}();
var ToyReact = {
  createElement: function createElement(type, attributes) {
    var element;

    if (typeof type === 'string') {
      element = new ElementWrapper(type);
    } else {
      // prettier-ignore
      element = new type();
    }

    if (attributes) {
      Object.entries(attributes).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            name = _ref2[0],
            value = _ref2[1];

        element.setAttribute(name, value);
      });
    }

    var insertChildren = function insertChildren(children) {
      children.forEach(function (child) {
        var newChild = child;

        if (Array.isArray(child)) {
          insertChildren(child);
        } else {
          if (!(child instanceof Component || child instanceof ElementWrapper || child instanceof TextWrapper)) {
            newChild = String(child);
          }

          if (typeof newChild === 'string') {
            newChild = new TextWrapper(child);
          }

          element.appendChild(newChild);
        }
      });
    };

    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    insertChildren(children);
    return element;
  },
  render: function render(vDom, element) {
    var range = document.createRange();

    if (element.children) {
      range.setStartAfter(element.lastChild);
      range.setEndAfter(element.lastChild);
    } else {
      range.setStart(element, 0);
      range.setEnd(element, 0);
    }

    vDom.mountTo(range);
  }
};

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToyReact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToyReact */ "./ToyReact.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

 // console.log(ToyReact)

var Square = /*#__PURE__*/function (_Component) {
  _inherits(Square, _Component);

  var _super = _createSuper(Square);

  function Square(props) {
    var _this;

    _classCallCheck(this, Square);

    _this = _super.call(this, props);
    _this.state = {
      value: null
    };
    return _this;
  }

  _createClass(Square, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _ToyReact__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("button", {
        className: "square",
        onClick: function onClick() {
          return _this2.setState({
            value: 'X'
          });
        }
      }, this.props.value, '-', this.state.value ? this.state.value : '');
    }
  }]);

  return Square;
}(_ToyReact__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var Board = /*#__PURE__*/function (_Component2) {
  _inherits(Board, _Component2);

  var _super2 = _createSuper(Board);

  function Board(props) {
    var _this3;

    _classCallCheck(this, Board);

    _this3 = _super2.call(this, props);

    _defineProperty(_assertThisInitialized(_this3), "handleClick", function (i) {
      console.log('i: ', i);
    });

    _this3.state = {
      squares: Array(9).fill(null)
    };
    return _this3;
  }

  _createClass(Board, [{
    key: "renderSquare",
    value: function renderSquare(i) {
      var _this4 = this;

      return _ToyReact__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement(Square, {
        value: i,
        onClick: function onClick() {
          return _this4.handleClick(i);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var status = 'Next player: X';
      return _ToyReact__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("div", null, _ToyReact__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("div", {
        className: "status"
      }, status), _ToyReact__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("div", {
        className: "board-row"
      }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), _ToyReact__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("div", {
        className: "board-row"
      }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), _ToyReact__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("div", {
        className: "board-row"
      }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));
    }
  }]);

  return Board;
}(_ToyReact__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_ToyReact__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].render(_ToyReact__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement(Board, null), document.body);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map