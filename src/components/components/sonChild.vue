<template>
  <div>
    <!-- <slot name="header"></slot>
    <div class="content">content</div>
    <slot name="footer"></slot> -->
    <!-- 写slot里面的是默认内容 -->
    <ul>
      <slot v-for="item of list" :item = "item"></slot>
    </ul>
  </div>
</template>

<script>
export default {
data(){
  return {
    list:[1,2,3,4]
  }
}
}
</script>

<style>

</style>
