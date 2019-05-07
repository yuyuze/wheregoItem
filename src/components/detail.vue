<template>
  <table>
    <tbody @click="handleClick" ref="tbody">
      <tr is="row"></tr>
      <tr is="row"></tr>
      <tr is="row"></tr>
    </tbody>
  </table>
</template>

<script>
import row from "@/components/components/row"
export default {
  components:{
    "row" : row
  },
  methods:{
    handleClick(){
      console.log(this.$refs["tbody"])
    }
  }
}
</script>

<style>

</style>
