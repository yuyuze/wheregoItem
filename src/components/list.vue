<template>
  <div>
    <ul>
      <transition-group mode="in-out">
        <li v-for="item of list" :key="item.id" class="newLi">{{item.content}}</li>
         <button @click="handleClick" key="btn">提交</button>
      </transition-group>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      num: 0
    };
  },
  methods: {
    handleClick(){
      this.num++;
      this.list.push({
        id:this.num,
        content:"hello world"
      })
    }
  }
};
</script>

<style>
.v-enter,v-leave-to{
  opacity: 0;
}
.newLi{
  transition: all 1s;
}
.v-leave-active {
  position: absolute;
}
.v-move {
  transition: transform 1s;
}
</style>
