<template>
  <div id="app">
    <Input @handleInput="addToList"/>
    <List :items="list"></List>
  </div>
</template>

<script>
import List from "./components/List.vue";
import Input from "./components/Input.vue";
export default {
  name: "app",
  data() {
    return {
      list: ["a", "b"]
    };
  },
  components: {
    List,
    Input
  },
  methods: {
    addToList(val) {
      this.list = this.list.concat(val);
      console.log(this.list);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
