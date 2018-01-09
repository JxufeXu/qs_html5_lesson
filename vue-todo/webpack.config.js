// 运行环境是node, common.js 规范
const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname + '/src/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/dist/js')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      { 
        test: /\.styl$/, 
        loader: 'style-loader!css-loader!stylus-loader' 
      }
    ]
  },
  resolve:{
    extensions: ['.js', '.vue', '.styl'],
    alias:{
      'vue$':'vue/dist/vue.js'
    }
  },
  devtool: 'source-map',
  watch: true,
  watchOptions: {
    ignored: /node_modules|dist|build|docs|css/,
    poll: 1000
  }
}