"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.P = P;
exports.LI = LI;
exports.UL = UL;
exports.A = A;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = {
  children: null
};
var propTypes = {
  children: _propTypes.default.node
};

function P(_ref) {
  var children = _ref.children;
  var style = {
    fontSize: '15px'
  }; // <P> is oftentimes used as a parent element of
  // <a> and <pre> elements, which is why <div>
  // is used as the outputted element when parsing
  // marksy content rather than <p>.

  return _react.default.createElement("div", {
    style: style
  }, children);
}

P.defaultProps = defaultProps;
P.propTypes = propTypes;

function LI(_ref2) {
  var children = _ref2.children;
  var style = {
    fontSize: '15px'
  };
  return _react.default.createElement("li", {
    style: style
  }, children);
}

LI.defaultProps = defaultProps;
LI.propTypes = propTypes;

function UL(_ref3) {
  var children = _ref3.children;
  var style = {
    fontSize: '15px'
  };
  return _react.default.createElement("ul", {
    style: style
  }, children);
}

UL.defaultProps = defaultProps;
UL.propTypes = propTypes;

function A(_ref4) {
  var href = _ref4.href,
      children = _ref4.children;
  var style = {
    color: '#3498db'
  };
  return _react.default.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    style: style
  }, children);
}

A.defaultProps = defaultProps;
A.propTypes = {
  children: _propTypes.default.node,
  href: _propTypes.default.string.isRequired
};