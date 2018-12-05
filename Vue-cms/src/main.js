import Vue from 'vue'
import app from './App.vue'

import VueRouter from 'vue-router'
import router from './router.js'
Vue.use(VueRouter)

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import MintUI from  'mint-ui'
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)


var vm = new Vue({
  el:'#app',
  render:c=>c(app),
  router
})