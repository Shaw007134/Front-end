import Vue from 'vue'
import app from './App.vue'

import VueRouter from 'vue-router'
import router from './router.js'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import {Header,Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import axios from 'axios'
Vue.prototype.$axios = axios;

// unsplash.search.photos("explore", 1, 1)
// unsplash.photos.getRandomPhoto({query:"cat",count:"3"})
// .then(res=>{
//   return res.json()
// })
// .then(data=>{
//   console.log(data)
// });

var vm = new Vue({
  el:'#app',
  render:c=>c(app),
  router
})