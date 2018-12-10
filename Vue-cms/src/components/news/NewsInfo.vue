<template>
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{news.title | titleFormat}}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>来源: {{news.source.name}}</span>
      <span>发表时间: {{news.publishedAt | dateFormat}}</span>
    </p>

    <hr>

    <!-- 内容区域 -->
    <!-- <div class="content" v-html=""></div> -->

    <!-- 评论子组件区域 -->
    <comment-box :id="this.news.title"></comment-box>
  </div>
</template>

<script>
  import comments from './subcomponents/comments.vue'
  export default{
    data(){
      return {
        news: this.$route.query.news,
        news_content: ''
      }
    },
    created(){
      this.getNewsInfo()
    },
    methods:{
      getNewsInfo(){
        var config = {
          headers: {'crossdomain': true}
        };
        // console.log(this.news.url)
        //  this.$axios.get(this.news.url,config).then(res=>{
        //    console.log(res)
          //  this.news_content = res.
        //  })
        this.$http.get(this.news.url).then(res=>{
          console.log(res)
          // if(res.body.status===0){
          //   console.log(res.body)
          // }else{
          //   console.log('获取新闻失败')
          // }
        })
      }
    },
    components:{
      'comment-box':comments
    }
  }
</script>

<style lang="scss" scoped>
  .newsinfo-container{
    padding: 0.5px;
    .title{
      font-size: 16px;
      text-align: center;
      margin: 15px 0;
    }
    .subtitle{
      font-size: 13px;
      display: flex;
      justify-content: space-between;
    }
    .content{

    }
  }
</style>