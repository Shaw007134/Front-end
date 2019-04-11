<template>
  <div>
    <div v-for="item in items" :key="item.id">{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    items: {
      type: Array,
      default: ()=> {return []}
    }
  }
};
</script>

<style lang="scss" scoped>
</style>