'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var cx = function cx() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.filter(function (argv) {
    return !!argv;
  }).join(' ').trim() || undefined;
};

var CLASSNAME_PREFIX = 'MyButtonComponent';
var styles = {
  root: CLASSNAME_PREFIX,
  button: "".concat(CLASSNAME_PREFIX, "__button"),
  buttonBackground: "".concat(CLASSNAME_PREFIX, "__button-background"),
  buttonInner: "".concat(CLASSNAME_PREFIX, "__button-inner")
};
var RippleButton = function RippleButton(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var handleClick = React.useCallback(function (e) {
    setActive(true);
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
    window.setTimeout(function () {
      return setActive(false);
    }, 1000);
  }, [onClick]);
  var rootClassName = React.useMemo(function () {
    return cx(styles.root, active && '-active');
  }, [active]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: rootClassName
  }, /*#__PURE__*/React__default.createElement("button", {
    type: "button",
    className: styles.button,
    onClick: !active ? handleClick : undefined
  }, /*#__PURE__*/React__default.createElement("span", {
    className: styles.buttonBackground,
    role: "presentation"
  }), /*#__PURE__*/React__default.createElement("span", {
    className: styles.buttonInner
  }, children)));
};

exports.RippleButton = RippleButton;
//# sourceMappingURL=cjs.js.map
