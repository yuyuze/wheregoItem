<template>
  <div>
    <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave = "leave">
      <span v-show="show">我是velocity</span>
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
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, transform:'translateX(-13px)' }, { duration: 300,complete:done })
    },
    leave(el,done){
      console.log(el);
      el.style.transition = "all 3s";
      el.style.transform = "translateX(15px)";
      el.style.opacity = 0;
      // Velocity(el, { translateX: '15', rotateZ: '50',opacity: 0 }, { duration: 600,complete: done })
      // Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      // Velocity(el, {
      //   rotateZ: '45deg',
      //   translateY: '30px',
      //   translateX: '30px',
      //   opacity: 0
      // }, {  })
    },
    handleClick() {
      this.show = !this.show;
    }
  }
};
</script>

<style>
span {
  display: block;
  font-size: 1em;
}
</style>
