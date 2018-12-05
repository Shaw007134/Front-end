<template>
  <div>
    <h1>这是登录组件{{msg}}，使用.vue文件定义</h1>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        msg:'123'
      }
    },
    methods:{
      show(){
        console.log('调用了login.vue中的show方法')
      }
    }
  }
</script>

<style>
  
</style>