<template>
  <div>
    <!-- 这是轮播图 -->
    <mt-swipe :auto="4000">
      <!-- 组件中使用v-for，一定要使用key -->
      <mt-swipe-item v-for="item in swipeList" :key="item.id">
        <img :src="item.urls.small" alt="" >
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格到六宫格的改造 -->
     <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
              <img src="../../images/menu1.png" alt="" >
              <div class="mui-media-body">Home</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
              <img src="../../images/menu2.png" alt="" >
              <div class="mui-media-body">Email</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
              <img src="../../images/menu3.png" alt="" >
              <div class="mui-media-body">Chat</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
              <img src="../../images/menu4.png" alt="" >
              <div class="mui-media-body">location</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
              <img src="../../images/menu5.png" alt="" >
              <div class="mui-media-body">Search</div></router-link></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
              <img src="../../images/menu6.png" alt="" >
              <div class="mui-media-body">Phone</div></router-link></li>
    </ul> 
  </div>
</template>

<script>
import {Toast} from "mint-ui"
import Unsplash from "unsplash-js"

const unsplash = 
  new Unsplash({
    applicationId: '7f1d7e158e9b256c82b7afe69fddeb58044c79ebe041306f77e65296c504821d',
    secret: 'ac33eea90c99b14d20d6c680a232c0cba43aceac49b505149bc9eb98476d0ce8',
    callbackUrl: 'urn:ietf:wg:oauth:2.0:oob'
  })

  export default{
    data(){
      return {
        swipeList: []
      }
    },
    created(){
      this.getSwipe();
    },
    methods:{
      getSwipe(){
        unsplash.photos.getRandomPhoto({query:"cat",count:"3"})
            .then(res=>{
              return res.json()
            })
            .then(photoList=>{
              this.swipeList = photoList
              console.swipeList
            });
            Toast('加载轮播图成功')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mint-swipe{
    height: 267px;
    .mint-swipe-item{
      &:nth-child(1){
        background-color: red;
      }
      &:nth-child(2){
        background-color: yellow;
      }
      &:nth-child(3){
        background-color: blue;
     }

      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .mui-grid-view.mui-grid-9{
    background-color: white;
    border: none;
    img{
      width: 60px;
      height: 60px;
    }
    .mui-media-body{
      font-size: 13px;
    }
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
  }
</style>