<template>
  <div @click="handleChange">{{num}}</div>
</template>

<script>
export default {
data(){
  return {
    num:0
  }
},
methods:{
  handleChange(){
    this.num++;
    this.$emit("change")
  }
}
}
</script>

<style>

</style>
