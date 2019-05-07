<template>
  <div>
    <!-- <span @click="handleClassDiv" :class="{actived:isactived}">我会变颜色哦</span> -->
    <!-- <span @click="handleClassDiv" :class="[actived,activedOne]">我会变颜色哦</span> -->
    <span @click="handleClassDiv" :style="[styleObj,{fontSize:'20px'}]">我会变颜色哦</span>
    <!-- 挂载多个用[] -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      styleObj: {
        color: "black"
      }
      // isactived:false
      // actived: "",
      // activedOne:"actived-one"
    };
  },
  methods: {
    handleClassDiv() {
      if (this.styleObj.color == "red") {
        this.styleObj.color = "black";
      } else {
        this.styleObj.color = "red";
      }

      // this.isactived = !this.isactived;
      // if (this.actived == "actived") {
      //   this.actived = "";
      // } else {
      //   this.actived = "actived";
      // }
    }
  }
};
</script>

<style>
.actived {
  color: aqua;
}
span {
  user-select: none;
}
</style>
