<template>
  <div class="flex text-4xl font-bold text-white">
    <span
      v-for="(letter, index) in letters"
      :key="`${letter}-${index}`"
      class="inline-block opacity-0"
      :class="{
        'animate-typeIn': isVisible,
        'animate-typeOut': !isVisible,
      }"
      :style="{ animationDelay: `${index * 0.2}s` }"
    >
      <span class="h-[2.5rem] w-[2.5rem] flex justify-center items-center">
        {{ letter }}
      </span>
    </span>
  </div>
</template>

<script lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

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
