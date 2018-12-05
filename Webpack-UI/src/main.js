import Vue from 'vue'
import VueRouter from 'vue-router'
import MintUI from  'mint-ui'
import 'mint-ui/lib/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'

Vue.use(VueRouter)
Vue.use(MintUI)

import app from './App.vue'

import router from './router.js'

var vm = new Vue({
  el:'#app',
  render:c=>c(app),
  router
})