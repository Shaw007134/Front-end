import $ from 'jquery'
import "./css/index.css"
import "./css/index.less"
import "./css/index.scss"
import "bootstrap/dist/css/bootstrap.css"
//如果通过路径形式引入node_modules中相关的文件，可以直接省略路径前面的node_modules这一层
//直接写包名加具体文件路径
$(function(){
  $('li:odd').css('backgroundColor','red')
  $('li:even').css('backgroundColor',function(){
    return "#"+"C0CB41"
  })
})