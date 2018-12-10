<template>
  <div>
    <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id === 0 ? 'mui-active': '']"  
              v-for="item in cates" :key="item.id" @click="getPhotoListByCateId(item.id)">
							推荐
					</div>
				</div>
			</div>
    
    <ul class=".photo-list">
      <router-link v-for="item in list" :key="item.id" to="'/home/photoinfo/'+
        item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{item.title}}</h1>
          <div class="info-body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  
  </div>
  
</template>

<script>
  import mui from '../../lib/mui/js/mui.min.js'
  
  export default{
    data(){
      return {
        cates: {},
        list: []
      }
    },
    created(){
      this.getAllCategory()
      // this.getPhotoListByCateId(0)
    },
    mounted(){//当组件中DOM结构渲染好并放到页面中，会执行这个钩子函数
    //如果要操作元素，最好在mounted中进行处理
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005
      });
    },
    methods:{
      getAllCategory(){
        // this.$http.get('./').then(res=>{
        //   if(res.body.status === 0){
        //     res.body.message.unshift({this:"全部",id:0});
        //     this.cate = res.body.message;
        //   }
        // })
      },
      getPhotoListByCateId(cateId){
        // this.$http.get('./'+cateId).then(res=>{
        //   if(res.body.status === 0)
        //     this.list = res.body.message;
        // })
      }
    }
  }
</script>


<style lang="scss" scoped>
  *{
    touch-action:pan-y;
  }
  .photo-list{
    list-style:none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    li{
      background-color: #ccc;
      text-align: center;
      margin-bottom: 10px;
      box-shadow: 0 0 9px #999;
      position: relative;
      img{
        width:100%;
        vertical-align: middle;
      }
      img[lazy='loading']{
        width: 40px;
        height: 300px;
        margin: auto;
      }
      .info{
        color:white;
        text-align: left;
        position: absolute;
        bottom: 0;
        background-color: rgb(0,0,0,0.4);
        max-height: 84px;
        .info-title{
          font-size: 14px;
        }
        .info-body{
          font-size: 13px;
        }
      }
    }
  }
  imag[lazy=loading]{
    width: 40px;
    height: 300px;
    margin: auto;
  }
</style>