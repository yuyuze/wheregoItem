<template>
  <div>
    <span @click="addOne">点我</span>
  </div>
</template>

<script>
export default {
  data(){
    return {
      num : 0
    }
  },
  methods:{
    addOne(){
      this.num++;
      this.$emit("addnum",this.num);
    }
  }
}
</script>

<style>

</style>
