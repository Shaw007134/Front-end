<template>
  <div class="photoinfo-container">
    <h3>{{photoinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间{{photoinfo.add_time|dateFormat}}</span>
      <span>点击: {{photoinfo.click}}</span>
    </p>

    <hr>
    <!-- 缩略图区域 -->
    <div class="thumbs">
      <img :src="item.src" class="preview-img" v-for="(item,index) in list"
     :key="item.src" height="100" @click="$preivew.open(index,list)">
    </div>
    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>
    <!-- 评论子组件 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
  import comments from '../subcomponents/comment.vue'
  export default{
    data(){
      return {
        id: this.$route.params.id,
        photoinfo: {},
        list:[]
      };
    },
    created(){
      this.getPhotoInfo(),
      this.getThumbs()
    },
    methods:{
      getPhotoInfo(){
        this.$http.get('api/get'+this.id).then(res=>{
          if(res.body.status===0){
            this.photoinfo = res.body.message[0];
          }else{

          }
        })
      },
      getThumbs(){
        this.$http.get().then(res=>{
          if(res.body.status === 0){
            res.body.message.forEach(item=>{
              item.w=600
              item.h =400
            })
            this.list = res.body.message
          }
        })
      }
    },
    components:{
      'cmt-box':comments
    }
  }
</script>

<style lang="scss" scoped>
  .photoinfo-container{
    padding: 3px;
    h3{
      color: #ddd;
      font-size: 15px;
      text-align: center;
      margin: 15px 0;
    }
    .subtitle{
      display: flex;
      justify-content: space-between;
      font-size: 13px;
    }
    .content{
      font-size: 13px;
      line-height: 30px;
    }
    .thumbs{
      img{
        margin: 10px;
        box-shadow: 0 0 0px #999;
      }
    }
  }
</style>
