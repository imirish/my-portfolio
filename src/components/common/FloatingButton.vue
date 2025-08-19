<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);

const checkScroll = () => {
  isVisible.value = window.scrollY > 200; // show after scrolling down
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <button
    v-show="isVisible"
    @click="scrollToTop"
    aria-label="Scroll to top"
    class="tw-fixed tw-bottom-6 tw-right-6 tw-bg-red-500 tw-text-white tw-p-4 tw-rounded-full tw-shadow-lg hover:tw-translate-y-[-6px] tw-transition-transform tw-duration-300 tw-flex tw-items-center tw-justify-center tw-animate-bounce"
  >
    🚀
  </button>
</template>
