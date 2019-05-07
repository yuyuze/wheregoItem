<template>
  <div>
    <li v-for="(item,index) in list" :key="index">{{index + "&&" +item}}</li>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {};
  }
};
</script>

<style>
</style>
