<template>
  <h1>Hey There!</h1>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  setup() {
    const count = ref(0);

    return {
      count,
    };
  },
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
