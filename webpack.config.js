var path = require('path');

module.exports = {
  entry: './ExtensionComponent.jsx',
  output: { path: __dirname, filename: 'extension-component.js' },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-1']
        }
      }
    ]
  },
};