<template>
<div>
  {{content}}
</div>
</template>

<script>
export default {
  props:{
    content:{
      type:[Number,String],
      required:false,  //可不传值
      default:"default",
      //校验器
      validator:function(value){
        return value.length >5
      }
    }
  }
}
</script>

<style>

</style>
