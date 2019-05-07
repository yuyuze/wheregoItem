<template>
  <div @click="change">{{fullName}}</div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "Dell",
      lastName: "lee"
    };
  },
  methods:{
    change(){
      this.fullName = "mike nike"
    }
  },
  computed:{
    fullName:{
      get(){
        return this.firstName + " " + this.lastName;
      },
      set(value){
        var arr = value.split(" ");
        this.firstName = arr[0];
        this.lastName = arr[1] + "我是set";
      }
    }
  }
};
</script>

<style>
</style>
