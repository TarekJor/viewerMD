define(function(require, exports, module) {
  var React = require("react");
  var ReactDOM = require("react-dom");
  var ExtensionRoot = React.createClass({
    render: function() {
      return <iframe sandbox="allow-same-origin allow-scripts allow-modals" id="iframeViewer" src={this.props.iframeSource} />
    }
  });
  exports.ExtensionRoot = ExtensionRoot;
})