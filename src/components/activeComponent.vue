<template>
  <div>
    <component :is="type"></component>
    <button @click="handleClick">改变</button>
  </div>
</template>

<script>
import one from "@/components/components/one"
import two from "@/components/components/two"
//v-once会把东西放到内存里下次取直接在内存里取了
export default {
  data(){
    return {
      type:"one"
    }
  },
  components:{
    "one":one,
    "two":two
  },
  methods:{
    handleClick(){
      this.type = (this.type === "one"?"two":"one");
    }
  }
}
</script>

<style>

</style>
