<template>
  <div>
    <counter ref="one" @change="handleChange"></counter>
    <counter ref="two" @change="handleChange"></counter>
    <div>{{total}}</div>
  </div>
</template>

<script>
import Counter from "@/components/components/count";
export default {
  data() {
    return {
      total: 0
    };
  },
  components: {
    counter: Counter
  },
  methods: {
    handleChange() {
      this.total = this.$refs["one"].num + this.$refs["two"].num;
    }
  }
};
</script>

<style>
</style>
