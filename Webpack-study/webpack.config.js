const path = require('path')
const wepback = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname,'./src/main.js'),
  output: {
    path: path.join(__dirname,'./dist'),
    filename: 'bundle.js'
  },
  /* devServer:{
    open: true,
    port: 3000,
    contentBase: 'src',
    hot: 'true
   },*/
  plugins:[
    //new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      //根据指定路径，生成内存中的模板页面
      //自动在页面中加载bundle.js
      template: path.join(__dirname,'./src/index.html'),
      filename: 'index.html'
    })
  ],
  module:{
    //这个节点，用于配置所有第三方模块加载器
    rules:[
      //所有第三方模块的匹配规则
      {test: /\.css$/,use:['style-loader','css-loader']},
      //配置处理.css文件的第三方匹配和规则
      //loader调用是从右到左
      {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
      //先调用less-loader处理，处理后交给css-loader处理，最后由style-loader处理样式
      {test:/\.scss$/, use:['style-loader','css-loader','sass-loader']},
      {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=1000&name=[hash:8]-[name].[ext]'}
      // {
      //   test:/\.(jpg|png|gif|bmp|jpeg)$/,
      //   use:{
      //     loader:'url-loader',
      //     options:{
      //       limit:1000,
      //       name:'img/[hash:8][name].[ext]',

      //     }
      //   }
      //limit给定的值是图片的大小，单位为byte，若引用图片大于此值，不会转为base64编码，反之则会
    //   }
    ]
  }
};