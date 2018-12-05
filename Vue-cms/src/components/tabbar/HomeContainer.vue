<template>
  <div>
    <!-- 这是轮播图 -->
    <mt-swipe :auto="4000">
      <!-- 组件中使用v-for，一定要使用key -->
      <mt-swipe-item v-for="item in swipeList" :key="item.url">
        <img :src="item.img" alt="" srcset="">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格到六宫格的改造 -->
     <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu1.png" alt="" srcset="">
              <div class="mui-media-body">Home</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu2.png" alt="" srcset="">
              <div class="mui-media-body">Email</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu3.png" alt="" srcset="">
              <div class="mui-media-body">Chat</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu4.png" alt="" srcset="">
              <div class="mui-media-body">location</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu5.png" alt="" srcset="">
              <div class="mui-media-body">Search</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
              <img src="../../images/menu6.png" alt="" srcset="">
              <div class="mui-media-body">Phone</div></a></li>
    </ul> 
  </div>
</template>

<script>
import {Toast} from "mint-ui"
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
        this.$http.get("").then(result=>{
          console.log(result.body)
          if(result.body.status==0){
            this.swipeList = result.body.message
            Toast('加载轮播图成功')
          }else{
            Toast('加载轮播图失败')
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mint-swipe{
    height: 200px;
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