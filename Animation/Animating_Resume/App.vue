<template>
  <div id="app">
    <!-- 标签可以小写 -->
    <m-header />
    <tab />
    <keep-alive> <router-view /> </keep-alive>
    <player />
  </div>
</template>

<script type="text/ecmascript-6">
// class的书写规范是第一个要大写
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
import Player from 'components/player/player'
export default {
  components: {
    MHeader,
    Tab,
    Player
  }
}
</script>

<style scope lang="scss"></style>
