import VueRouter from 'vue-router'

// import VueResource from 'vue-resource'
// Vue.use(VueResource)
// Vue.http.options.root = 'http://vue.studyit.io'
// Vue.http.options.emulateJSON = true

//导入对应的路由组件
import HomeContainer from "./components/tabbar/HomeContainer.vue"
import MemberContainer from "./components/tabbar/MemberContainer.vue"
import CartContainer from "./components/tabbar/CartContainer.vue"
import SearchContainer from "./components/tabbar/SearchContainer.vue"
import NewsList from "./components/news/NewsList.vue"
import NewsInfo from './components/news/NewsInfo.vue'
import photolist from './components/photos/photolist.vue'
import photoinfo from './components/photos/photoinfo.vue'
import GoodList from "./components/goods/GoodList.vue"
var router = new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/cart',component:CartContainer},
    {path:'/search',component:SearchContainer},
    {path:'/home/newslist',component:NewsList},
    {path:'/home/newsinfo/:index',component:NewsInfo},
    {path:'/home/photolist',component:photolist},
    {path:'/home/photoinfo/:id',component:photoinfo},
    {path:'/home/goodslist',component:GoodList}
  ],
  linkActiveClass:'mui-active'//覆盖默认路由高亮的类router-link-active
})

export default router