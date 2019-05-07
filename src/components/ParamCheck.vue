<template>
  <div>
    <child @click.native="alert" content="helloworld"></child>  <!--.native绑定原生事件-->
  </div>
</template>

<script>
import child from "@/components/components/child"
export default {
  data(){
    return {
      obj:{
        a:1
      }
    }
  },
  methods:{
    alert(){
      alert(1);
    }
  },
  components:{
    "child" :child
  }
}
</script>

<style>

</style>
