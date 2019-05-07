<template>
 <div>
    <childs>
      <!-- <div class="header" slot="header">header</div>
      <div class="footer" slot="footer">footer</div> -->
      <!-- 作用域插槽 -->
      <template slot-scope="props">
        <li>{{props.item}}</li>
      </template>
    </childs>
 </div>
</template>

<script>
import childs from "@/components/components/sonChild"
export default {
  components:{
    "childs" : childs
  }
}
</script>

<style>

</style>
