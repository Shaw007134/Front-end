<template>
  <div class="newsinfo-container">
    <h3 class="title">{{news.title | titleFormat}}</h3>
    <p class="subtitle">
      <span>来源: {{news.source.name}}</span>
      <span>发表时间: {{news.publishedAt | dateFormat}}</span>
    </p>
  </div>
</template>

<script>

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
         this.$axios.get(this.news.url,config).then(res=>{
           console.log(res)
          //  this.news_content = res.
         })
        // this.$http.get(this.news.url).then(res=>{
        //   if(res.body.status===0){
        //     console.log(res.body)
        //   }else{
        //     console.log('获取新闻失败')
        //   }
        // })
      }
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