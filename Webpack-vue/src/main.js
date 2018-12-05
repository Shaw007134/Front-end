import Vue from 'vue'

// var login = {
//   template: "<h1>这是登录组件，使用Vue+template</h1>"
// }

import login from './login.vue'
//默认webpack无法打包.vue文件，需要安装
//npm i vue-loader vue-template-compiler -D
//web.config.js新增rule{test:/\.vue$/,use:'vue-loader'}
var vm = new Vue({
  el:'#app',
  data:{
    msg:'345'
  },
  // components:{
  //   login
  // },
  render: function(createElements){
    return createElements(login)
  }
})



