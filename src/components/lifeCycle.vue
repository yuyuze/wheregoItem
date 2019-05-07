<template>
  <div>
    <span @click="changeValue">{{contentValue}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentValue: "test"
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
    //创建vue实例初始化触发
  },
  created() {
    console.log("created");
    //下一个就是判断是否有el
    //判断有无template
  },
  beforeMount() {
    //模板和数据即将结合在挂载数据的一瞬间执行
    console.log(this.$el);
    console.log("beforeMount");
  },
  mounted() {
    // 挂载数据之后执行
    console.log(this.$el);
    console.log("mounted");
    // this.$destroy();
  },
  methods: {
    changeValue() {
      this.contentValue = "change";
    }
  },
  beforeDestroy() {
    //用this.$destroy()时才会触发
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
  //当数据发生改变时
  beforeUpdate() {
    //当数据改变之前还没渲染在页面上时
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  }
};
</script>

<style>
</style>
