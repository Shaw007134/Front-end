import Vue from 'vue'
import app from './App.vue'

import VueRouter from 'vue-router'
import router from './router.js'
Vue.use(VueRouter)

import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state:{},//this.$store.state.***
  mutations:{},//this.$store.commit('methods名称','按需传的唯一值')
  getters:{}//this.$store.getter.***
})
//导入时间插件
import moment from 'moment'
//定义全局过滤器
Vue.filter('dateFormat',function(dateStr,pattern='YYYY-MM-DD HH:mm:ss'){
  return moment(dateStr).format(pattern)
})

Vue.filter('titleFormat',function(titleStr){
  let str1 = titleStr.split('-')[0]
  if(str1.indexOf('_')>0)
    return str1.split('_')[0]
  else
    return str1   
})

import VueResource from 'vue-resource'
Vue.use(VueResource)

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import {Header,Swipe, SwipeItem,Button} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
import {Lazyload} from 'mint-ui'
//实现懒加载，需要全部导入
// import MintUI from 'mint-ui'
// Vue.use(MintUI)
// import 'mint-ui/lib/style.css'
Vue.use(Lazyload)

//安装Vue-priview
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

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
  router,
  store
})