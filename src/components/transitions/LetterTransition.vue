<template>
  <div class="tw-flex tw-text-4xl tw-font-bold tw-text-white">
    <span
      v-for="(letter, index) in letters"
      :key="`${letter}-${index}`"
      class="tw-inline-block tw-opacity-0"
      :class="{
        'tw-animate-typeIn': isVisible,
        'tw-animate-typeOut': !isVisible,
      }"
      :style="{ animationDelay: `${index * 0.2}s` }"
    >
      <span
        class="tw-h-[2.5rem] tw-w-[2.5rem] tw-flex tw-justify-center tw-items-center"
      >
        {{ letter }}
      </span>
    </span>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  props: {
    letters: {
      type: Array as () => string[],
      default: () => [],
    },
  },
  setup() {
    const isVisible = ref(true);

    onMounted(() => {
      isVisible.value = true;
    });

    onBeforeUnmount(() => {
      isVisible.value = false;
    });

    return { isVisible };
  },
};
</script>

<style scoped>
.letter-enter-active span {
  animation: fadeIn 0.6s forwards;
}
.letter-leave-active span {
  animation: fadeOut 0.6s forwards;
}
</style>
