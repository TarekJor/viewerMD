"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import React from "./libs/react/react";
//import ReactDom from "./libs/react/react-dom";

define(function (require, exports, module) {

  var React = require("react");
  var ReactDOM = require("react-dom");

  var ExtensionRoot = function (_React$Component) {
    _inherits(ExtensionRoot, _React$Component);

    function ExtensionRoot() {
      _classCallCheck(this, ExtensionRoot);

      return _possibleConstructorReturn(this, (ExtensionRoot.__proto__ || Object.getPrototypeOf(ExtensionRoot)).apply(this, arguments));
    }

    _createClass(ExtensionRoot, [{
      key: "render",
      value: function render() {
        return React.createElement("iframe", { sandbox: "allow-same-origin allow-scripts allow-modals", id: "iframeViewer", src: this.props.iframeSource });
      }
    }]);

    return ExtensionRoot;
  }(React.Component);

  exports.ExtensionRoot = ExtensionRoot;
});