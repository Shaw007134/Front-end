import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from "./components/tabbar/HomeContainer.vue"
import MemberContainer from "./components/tabbar/MemberContainer.vue"
import CartContainer from "./components/tabbar/CartContainer.vue"
import SearchContainer from "./components/tabbar/SearchContainer.vue"

var router = new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/cart',component:CartContainer},
    {path:'/search',component:SearchContainer},
  ],
  linkActiveClass:'mui-active'//覆盖默认路由高亮的类router-link-active
})

export default router