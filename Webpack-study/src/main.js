import $ from 'jquery'
import "./css/index.css"
import "./css/index.less"
import "./css/index.scss"
import "bootstrap/dist/css/bootstrap.css"
//如果通过路径形式引入node_modules中相关的文件，可以直接省略路径前面的node_modules这一层
//直接写包名加具体文件路径

class Person{
  //class是ES6中提供的新语法，实现面向对象编程
  //静态属性是可以通过类名访问
  //实例属性是只能通过实例访问
  static info = {name:'zs',age:20}
}

//配置Babel
//npm i babel-core babel-loader babel-plugin-transform-runtime -D
//npm i babel-preset-env babel-preset-stage-0 -D
//配置webpack.config.js {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
//项目根目录新建.babelrc JSON格式配置文件,不能写注释，字符串双引号
/*{
  "presets":["env","stage-0"],
  "plugins":["transform-runtime"]
}*/
console.log(Person.info)

$(function(){
  $('li:odd').css('backgroundColor','red')
  $('li:even').css('backgroundColor',function(){
    return "#"+"C0CB41"
  })
})