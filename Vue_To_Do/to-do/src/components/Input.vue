<template>
  <div>
    <input v-model="title" type="text">
    <button v-on:click="onClick">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    onClick() {
      console.log(this.title);
      this.$emit("handleInput", this.title);
      this.title = ''
    }
  }
};
</script>

<style lang="scss" scoped>
</style>