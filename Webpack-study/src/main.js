import $ from 'jquery'
import "./css/index.css"
import "./css/index.less"
import "./css/index.scss"
$(function(){
  $('li:odd').css('backgroundColor','red')
  $('li:even').css('backgroundColor',function(){
    return "#"+"C0CB41"
  })
})