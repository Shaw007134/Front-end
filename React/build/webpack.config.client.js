const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    app: path.join(__dirname, '../client/app.js')
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/public'
    // 存放静态资源路径，用于区分不同文件以及可设置cdn域名
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: [path.join(__dirname, '../node_modules')]
      }
    ]
  },
  plugins: [
    // 生成一个html页面，同时在webpack编译时将所有entry
    // 注入到html，名字按照output中设置的进行拼接
    new HTMLPlugin({
      template: path.join(__dirname, '../client/template.html')
    })
  ]
}
