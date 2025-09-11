<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

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
    class="fixed bottom-6 right-6 bg-red-500 text-white p-4 rounded-full shadow-lg hover:translate-y-[-6px] transition-transform duration-300 flex items-center justify-center animate-bounce"
  >
    🚀
  </button>
</template>
