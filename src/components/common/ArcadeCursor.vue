<template>
  <div
    ref="cursor"
    class="tw-fixed tw-pointer-events-none tw-z-[9999] custom-cursor"
    :style="{ transform: `translate(${x}px, ${y}px)` }"
  >
    <!-- Simple pixel arrow using CSS box-shadows -->
    <div class="tw-w-[4px] tw-h-[4px] tw-bg-white tw-relative">
      <div
        class="tw-absolute tw-top-0 tw-left-0 tw-w-[4px] tw-h-[4px] tw-bg-white"
        style="
          box-shadow: 4px 0 0 0 white, 8px 0 0 0 white, 0 4px 0 0 white,
            4px 4px 0 0 white, 8px 4px 0 0 white, 0 8px 0 0 white,
            4px 8px 0 0 white;
        "
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const x = ref(0);
const y = ref(0);

function onMove(e: MouseEvent) {
  x.value = e.clientX;
  y.value = e.clientY;
}

onMounted(() => {
  document.documentElement.classList.add("arcade-cursor-active");
  window.addEventListener("mousemove", onMove, { passive: true });
});

onUnmounted(() => {
  document.documentElement.classList.remove("arcade-cursor-active");
  window.removeEventListener("mousemove", onMove);
});
</script>

<style>
html.arcade-cursor-active,
html.arcade-cursor-active body,
html.arcade-cursor-active #app,
html.arcade-cursor-active * {
  cursor: none !important;
}

/* Ensure custom cursor never blocks pointer events */
[ref="cursor"] {
  pointer-events: none !important;
}
</style>
