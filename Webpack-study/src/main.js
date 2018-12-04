import $ from 'jquery'

$(function(){
  $('li:odd').css('backgroundColor','orange')
  $('li:even').css('backgroundColor',function(){
    return "#"+"C0CB41"
  })
})