<template>
  <div>
    <header-content></header-content>
    <rotation-content></rotation-content>
    <icon-content></icon-content>
  </div>
</template>

<script>
import header from "@/components/components/header";
import rotation from "@/components/components/rotation";
import icon from "@/components/components/icons";
export default {
  components: {
    "header-content": header,
    "rotation-content": rotation,
    'icon-content':icon
  }
};
</script>

<style lang="scss">
</style>
