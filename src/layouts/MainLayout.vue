<template>
  <div
    class="tw-h-full tw-w-full tw-font-arcade2 tw-bg-[#A7C7E7] tw-text-[#2C2C2C] dark:tw-bg-[#1E1E2E] dark:tw-text-[#F8F8F2]"
  >
    <ArcadeCursor v-if="showCursor" />
    <div
      v-if="currentRoute.name == 'Home'"
      class="tw-pointer-events-none tw-absolute tw-z-0 tw-inset-0 tw-bg-[url('@/assets/common/stars.svg')] tw-bg-repeat tw-bg-[length:400px_400px] tw-animate-scrollBg"
    ></div>
    <Navigation />

    <main class="tw-z-10 tw-w-full tw-h-full tw-overflow-hidden">
      <Transition
        mode="out-in"
        enter-active-class="tw-transition-all tw-duration-300 tw-ease-out"
        enter-from-class="tw-opacity-0 tw-translate-y-5"
        enter-to-class="tw-opacity-100 tw-translate-y-0"
        leave-active-class="tw-transition-all tw-duration-300 tw-ease-in"
        leave-from-class="tw-opacity-100 tw-translate-y-0"
        leave-to-class="tw-opacity-0 tw--translate-y-5"
      >
        <RouterView :key="currentRoute.fullPath" />
      </Transition>
    </main>

    <FloatingButton />
  </div>
</template>

<script lang="ts">
import ArcadeCursor from "@/components/common/ArcadeCursor.vue";
import FloatingButton from "@/components/common/FloatingButton.vue";
import Navigation from "@/components/common/Navigation.vue";

import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export default {
  components: {
    Navigation,
    ArcadeCursor,
    FloatingButton,
  },

  setup() {
    const isTouch = ref(false);
    const showCursor = ref(true);
    const currentRoute = useRoute();
    // const pages = ["Home", "AboutMe"];

    onMounted(() => {
      isTouch.value = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      if (isTouch.value) {
        showCursor.value = false;
      }
    });
    return {
      showCursor,
      currentRoute,
    };
  },
};
</script>
