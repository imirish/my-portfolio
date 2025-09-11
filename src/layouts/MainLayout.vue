<template>
  <div class="h-screen w-screen font-poppins">
    <Logo />
    <NavigationV2 />
    <main class="overflow-hidden">
      <Transition
        mode="out-in"
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-5"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-5"
      >
        <RouterView :key="currentRoute.fullPath" />
      </Transition>
    </main>

    <AutoScrollPage :pages="pages" />
  </div>
</template>

<script lang="ts">
import AutoScrollPage from "@/components/common/AutoScrollPage.vue";
import Logo from "@/components/common/Logo.vue";
import NavigationV2 from "@/components/common/NavigationV2.vue";

import { useRoute } from "vue-router";

export default {
  components: {
    NavigationV2,
    AutoScrollPage,
    Logo,
  },

  setup() {
    const currentRoute = useRoute();
    const pages = ["Home", "Projects", "ContactMe"];

    return {
      currentRoute,
      pages,
    };
  },
};
</script>

<style scoped>
body {
  background-color: #ffffff !important;
  background-image: radial-gradient(#e0e0e0 1px, transparent 1px) !important;
  background-size: 20px 20px !important;
}
</style>
