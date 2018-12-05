<template>
  <div>
    <h1>这是Account组件</h1>
    <router-link to="/account/login">Login</router-link>
    <router-link to="/account/register">Register</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  
</script>

<style lang="scss" scoped>
//组件中设置style样式推荐都带上scoped，防止全局生效
  body{
    div{
      font-style: italic;
    }
  }
</style>

