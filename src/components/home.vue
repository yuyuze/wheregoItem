<template>
  <div>
    <header-content></header-content>
    <rotation-content></rotation-content>
  </div>
</template>

<script>
import header from "@/components/components/header";
import rotation from "@/components/components/rotation";
export default {
  components: {
    "header-content": header,
    "rotation-content": rotation
  }
};
</script>

<style lang="scss">
</style>
