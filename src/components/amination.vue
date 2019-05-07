<template>
  <div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <!-- transition以什么动画为准type -->
    <!-- 自定义播放时长duration 能是一个对象{enter:5000,leave:10000}-->
    <transition type="transition" :duration="10000" name="fade" appear appear-active-class="animated bounceInDown" enter-active-class="animated bounceInDown fade-enter-active" leave-active-class="animated swing fade-leave-active"> <!--import animate from 'animate.css'-->
      <span v-show="show">我是動畫</span>
    </transition>
    <button @click="handleClick">改变</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  },
  methods: {
    handleClick() {
      this.show = !this.show;
    }
  }
};
</script>

<style lang="scss">
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.fade-enter,.fade-leave-to{
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 3s;
}
.fade-leave-active {
  transition: opacity 3s;
}
// .active {
//   transform-origin: left center;
//   animation: bounce-in 2s;
// }
// .leave {
//   transform-origin: left center;
//   animation: bounce-in 2s reverse;
// }
span {
  display: inline-block;
}
</style>
