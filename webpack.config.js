'use strict'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

let extractCSS = new ExtractTextPlugin('style/[name].css');

let config = {
  devtool: '#eval-source-map',
  entry: {
    main: path.join(__dirname, 'src/main.js')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'src/dist')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.scss$/,
      loader: extractCSS.extract(['css', 'sass'])
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10,
        name: 'imgs/[name].[hash:7].[ext]'
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: '../fonts/[name].[hash:7].[ext]'
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html'
    }),
    extractCSS
  ],
  resolve: {
    alias: {
      'commons': path.join(__dirname, 'src/commons'),
      'components': path.join(__dirname, 'src/components'),
      'views': path.join(__dirname, 'src/views'),
      'vue': path.join(__dirname, 'node_modules/vue/dist/vue.js'),
    },
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, 'node_modules')]
  },
}

module.exports = config
