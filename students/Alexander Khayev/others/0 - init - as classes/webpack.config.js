const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new miniCss({
        filename: 'css/[name].css',
        chunkFilename: '[id].css',
        ignoreOrder: false
      }
    ),
    new htmlPlugin(
      {
        template: './src/index.html',
      }
    )
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: miniCss.loader,
          options: {
            publicPath: "../",
            hmr: process.env.NODE_ENV === "development",
            esModule: true
          }
        }, 'css-loader'],
      }
    ]
  }
}
