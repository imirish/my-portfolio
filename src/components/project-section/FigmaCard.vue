<template>
  <section class="tw-w-full tw-h-screen">
    <div class="tw-w-full tw-h-screen">
      <iframe
        class="tw-w-full tw-h-full tw-border-none"
        :src="`https://www.figma.com/embed?embed_host=share&url=${figmaLink}`"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  components: {},
  setup() {
    const figmaLink = ref(
      "https://www.figma.com/design/zETZbLCcxmnWbZ5eYyg9jH/Collection-of-Simple-Designs?t=I0lG7EM4TqXpKZ49-1"
    );

    return {
      figmaLink,
    };
  },
};
</script>

<style scoped></style>
