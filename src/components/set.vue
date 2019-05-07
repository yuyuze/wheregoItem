<template>
  <div>
    <div v-for="(item,key,index) of userInfo" :key="index" @click="handleEvent">{{item}}--{{key}}---{{index}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        name: "Dell",
        age: 28,
        gender: "male",
        salary: "secret"
      }
    };
  },
  methods:{
    handleEvent(){
      this.$set(this.userInfo,"class","1");
    }
  }
};
</script>

<style>
</style>
