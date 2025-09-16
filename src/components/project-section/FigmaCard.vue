<template>
  <section class="w-full h-screen">
    <div class="w-full h-screen">
      <iframe
        class="w-full h-full border-none"
        :src="`https://www.figma.com/embed?embed_host=share&url=${figmaLink}`"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  components: {},
  setup() {
    const figmaLink = import.meta.env.VITE_FIGMA_URL || "";

    return {
      figmaLink,
    };
  },
};
</script>

<style scoped></style>
