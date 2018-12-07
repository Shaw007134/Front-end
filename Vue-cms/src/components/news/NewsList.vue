<template>
  <div>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item, index) in newsList"
          :key="item.url">
					<router-link :to="{path:'/home/newsinfo/'+index,query:{news:item}}">
						<img class="mui-media-object mui-pull-left" :src="item.urlToImage">
						<div class="mui-media-body">
              <h1>{{item.title | titleFormat}}</h1>
							<p class='mui-ellipsis'>
                <span>来源: {{item.source.name}}</span>
                <span>发表时间: {{item.publishedAt | dateFormat}}</span>
              </p>
						</div>
					</router-link>
				</li>
			</ul>
  </div>
</template>



<script>
  var url = 'https://newsapi.org/v2/top-headlines?country=cn&apiKey=f0b2036d2c5e42dda2820fee5f9b28b2'
  import {Toast} from 'mint-ui'
  import NewsInfo from './NewsInfo.vue'
  //f0b2036d2c5e42dda2820fee5f9b28b2
  export default {
    // components:{
    //   NewsInfo
    // },
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
          this.newsList = res.data.articles
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