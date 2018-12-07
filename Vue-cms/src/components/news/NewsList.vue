<template>
  <div>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newsList"
          :key="item.url">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.urlToImage">
						<div class="mui-media-body">
              <h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
                <span>发表时间: {{item.publishedAt}}</span>
                <span>来源: {{item.source.name}}</span>
              </p>
						</div>
					</a>
				</li>
			</ul>
  </div>
</template>



<script>
  import {Toast} from 'mint-ui'
  //f0b2036d2c5e42dda2820fee5f9b28b2
  var url = 'https://newsapi.org/v2/top-headlines?country=cn&apiKey=f0b2036d2c5e42dda2820fee5f9b28b2'
  export default {
    data(){
      return {
        newsList: []
      }
    },
    created(){
      this.getNewsList()
    },
    methods:{
      getNewsList(){
        this.$axios.get(url,{
          params:{}
        }).then(res=>{
          // res = JSON.parse(res)
          
          this.newsList = res.data.articles
          console.log(this.newsList)
        })
      }
    }
    
  }
</script>

<style lang="scss" scoped>
  .mui-table-view{
    li{
      h1{font-size: 14px;}
      .mui-ellipsis{
        font-size: 12px;
        display:flex;
        justify-content: space-between;
      }
    }
  }
</style>