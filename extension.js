/* Copyright (c) 2013-2017 The TagSpaces Authors.
 * Use of this source code is governed by the MIT license which can be found in the LICENSE.txt file. */

define(function(require, exports, module) {
  "use strict";

  const TSCORE = require('tscore');
  const React = require('react');
  const ReactDOM = require('react-dom');
  const ExtensionRoot = require('./extension-root').ExtensionRoot;
  const TestComp = require('./test-comp').TestComp;

  const extensionID = "viewerMD"; // ID should be equal to the directory name where the ext. is located
  const extensionDirectory = TSCORE.Config.getExtensionPath() + "/" + extensionID;
  let currentFilePath;

  console.log("Loading " + extensionID);

  class ViewerMD {

    static init(filePath, containerElementID) {
      console.log("Initialization MD Viewer...");
      currentFilePath = filePath;

      $('#' + containerElementID).empty().css("background-color", "white").append($('<iframe>', {
        sandbox: "allow-same-origin allow-scripts allow-modals",
        id: "iframeViewer",
        "src": extensionDirectory + "/index.html?&locale=" + TSCORE.currentLanguage,
      }));

      /*let props = { "iframeSource": extensionDirectory + "/index.html?&locale=" + TSCORE.currentLanguage };
      ReactDOM.render(
        React.createElement(ExtensionRoot, props, null), document.getElementById(containerElementID)
      );*/

      TSCORE.IO.loadTextFilePromise(filePath).then((content) => {
        this.setContent(content)
      });
    }

    static setFileType() {
      console.log("setFileType not supported on this extension")
    }

    static viewerMode(isViewerMode) {
      // set readonly
    }

    static setContent(content) {
      let UTF8_BOM = "\ufeff";

      // removing the UTF8 bom because it brakes thing like #header1 in the beginning of the document
      if (content.indexOf(UTF8_BOM) === 0) {
        content = content.substring(1, content.length);
      }

      let fileDirectory = TSCORE.TagUtils.extractContainingDirectoryPath(currentFilePath);

      if (isWeb) {
        fileDirectory = TSCORE.TagUtils.extractContainingDirectoryPath(location.href) + "/" + fileDirectory;
      }

      let cleanedContent = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
      let mdContent = TSCORE.Utils.convertMarkdown(cleanedContent);

      let contentWindow = document.getElementById("iframeViewer").contentWindow;
      if (typeof contentWindow.setContent === "function") {
        contentWindow.setContent(mdContent, fileDirectory);
      } else {
        // TODO optimize setTimeout
        window.setTimeout(() => {
          contentWindow.setContent(mdContent, fileDirectory);
        }, 500);
      }
    }

    static getContent() {
      console.log("Not implemented");
    }

  }

  exports.init = ViewerMD.init;
  exports.getContent = ViewerMD.getContent;
  exports.setContent = ViewerMD.setContent;
  exports.viewerMode = ViewerMD.viewerMode;
  exports.setFileType = ViewerMD.setFileType;

});
