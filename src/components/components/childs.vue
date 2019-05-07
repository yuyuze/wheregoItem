<template>
  <div @click="handleClick">{{selfContent}}</div>
</template>

<script>
//子组件不能改变父组件传来的值需要拷贝
// import bus from "../../main.js"
export default {
  data(){
    return {
      selfContent:this.content
    }
  },
  props: ["content"],
  methods:{
    handleClick(){
      this.bus.$emit("change",this.selfContent);
    }
  },
  mounted(){
    this.bus.$on('change',(msg)=>{
       this.selfContent = msg;
    })
  }
};
</script>

<style>
</style>
