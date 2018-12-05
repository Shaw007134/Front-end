import Vue from 'vue'
import VueRouter from 'vue-router'

//import 'bootstrap/dist/css/bootstrap.css'


import './lib/mui/css/mui.min.css'
//最完整地导入MintUI
// import MintUI from  'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

Vue.use(VueRouter)

import app from './App.vue'
import router from './router.js'

import {Header} from 'mint-ui'

Vue.component(Button.name,Button)

var vm = new Vue({
  el:'#app',
  render:c=>c(app),
  router
})