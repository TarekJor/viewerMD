//import React from "./libs/react/react";
//import ReactDom from "./libs/react/react-dom";

define(function(require, exports, module) {

  const React = require("react");
  const ReactDOM = require("react-dom");

  class ExtensionRoot extends React.Component {
    render() {
      return (
        <iframe sandbox="allow-same-origin allow-scripts allow-modals" id="iframeViewer" src={this.props.iframeSource} />
      );
    }
  }

  exports.ExtensionRoot = ExtensionRoot;
})

