<template>
  <div>
    <input type="text" name="txt" id="txt" v-model="inputValue">
    <button id="btn" v-on:click="addlist">提交</button>
    <ul>
      <newList :list = "list"></newList>
    </ul>
  </div>
</template>

<script>
import newList from "@/components/components/newList"
// M M层 V dom就是v层 VM数据变化页面跟着变化
export default {
  data: function() {
    return {
      inputValue: "",
      list: ["第一课内容", "第二课内容"]
    };
  },
  methods: {
    addlist() {
      this.list.push(this.inputValue);
    }
  },
  components:{
    "newList" : newList
  }
};
</script>

<style lang="scss">
ul,
li {
  list-style: none;
}
</style>
