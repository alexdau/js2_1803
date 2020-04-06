const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    output: {
        filename: 'js/main.js'
      },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../',
                        hmr: process.env.NODE_ENV === 'development',
                    },
                }, 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader"
                }
              }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/style.css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),
        new HtmlWebpackPlugin({
            template: './src/public/index.html'
        }),
        new CopyWebpackPlugin([
            {
                from: './src/public/img',
                to: './img'
            },
            {
                from: './src/public/goods.json',
                to: './goods.json',
                toType: 'file'
            },
        ]),
    ]
}