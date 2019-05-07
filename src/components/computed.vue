<template>
  <div @click="change">{{name}}
    <span>{{computedName()}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "yyz",
      lastName: "cxw",
      fullName: "yyz cxw"
    };
  },
  methods:{
    computedName(){
      return this.firstName + " " + this.lastName;
    },
    change(){
      this.lastName = "yyz";
    }
  },
  //会缓存firstName和lastName不变就不会再计算
  computed:{
    name(){
      return this.firstName + " " + this.lastName
    }
  },
  watch:{
    firstName: function(){
      this.fullName = this.firstName + " " + this.lastName;
    },
    lastName:function(){
       this.fullName = this.firstName + " " + this.lastName;
       console.log(this.fullName);
    }
  }
};
</script>

<style>
</style>
