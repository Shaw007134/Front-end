<template>
  <div>
    <h1>这是App组件</h1>
    <mt-button type="danger" size="normal disabled" plain
      icon="back" @click="show">default</mt-button>
    <router-link to="/account">Account</router-link>
    <router-link to="/goodslist">GoodsList</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default{
    data(){
      return {
        toastInstance: null
      };
    },
    created(){
      this.getList()
    },
    methods:{
      getList(){
        this.show()
        
        setTimeout(()=>{
          this.toastInstance.close()
        },3000)
      },
      show(){
        var toastInstance = Toast({
          message:"提示信息",
          duration: 1000,
          //-1则不会消失
          position: 'top',
          iconClass: 'glyphicon glyphicon-home',
          className: 'mytoast'
        });
      }
    }
  }
</script>

<style>

</style>
