<template>
<div>
  <Son @addnum="apperNum"></Son>
  {{num}}
</div>
</template>

<script>
import Son from "@/components/components/son"
export default {
  data(){
    return{
      num : 0
    }
  },
  components:{
    "Son": Son
  },
  methods:{
    apperNum(num){
      this.num = num;
    }
  }
}
</script>

<style>

</style>
