<template>
  <div class="tw-h-screen tw-flex tw-flex-row tw-relative tw-p-10">
    <nav class="tw-flex tw-flex-col tw-justify-start tw-items-center tw-pt-10">
      <div
        v-for="icon in routes"
        :key="icon.routeName"
        class="tw-h-[2.5rem] tw-w-[2.5rem] hover:tw-bg-[#4D3664] hover:tw-opacity-40 tw-flex tw-justify-center tw-items-center"
      >
        <router-link :to="`/${icon.routePath}`">
          <SvgIcon
            :iconPath="icon.iconPath"
            :iconColor="
              $route.path === `/${icon.routePath}`
                ? 'tw-text-[#1C1124]'
                : 'tw-text-white'
            "
          />
        </router-link>
      </div>
    </nav>

    <main class="tw-w-full tw-overflow-hidden">
      <!-- Page content loads here -->
      <!-- <router-view /> -->
      <Transition
        mode="out-in"
        enter-active-class="tw-transition-all tw-duration-300 tw-ease-out"
        enter-from-class="tw-opacity-0 tw-translate-y-5"
        enter-to-class="tw-opacity-100 tw-translate-y-0"
        leave-active-class="tw-transition-all tw-duration-300 tw-ease-in"
        leave-from-class="tw-opacity-100 tw-translate-y-0"
        leave-to-class="tw-opacity-0 tw--translate-y-5"
      >
        <RouterView :key="$route.fullPath" />
      </Transition>
    </main>
  </div>
</template>

<script lang="ts">
import {
  mdiHomeVariantOutline,
  mdiAccountDetailsOutline,
  mdiBriefcaseAccountOutline,
} from "@mdi/js";
import SvgIcon from "@/components/common/SvgIcon.vue";
import Divider from "@/components/common/Divider.vue";
import { onMounted, onBeforeUnmount } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  components: {
    SvgIcon,
    Divider,
  },
  setup() {
    const routes = [
      { iconPath: mdiHomeVariantOutline, routeName: "Home", routePath: "" },
      {
        iconPath: mdiAccountDetailsOutline,
        routeName: "AboutMe",
        routePath: "about-me",
      },
      // {
      //   iconPath: mdiBriefcaseAccountOutline,
      //   routeName: "Work",
      //   routePath: "work",
      // },
    ];

    const router = useRouter();
    const route = useRoute();

    // Define route navigation order
    // const routeOrder = ["Home", "About", "Contact"];
    let isScrolling = false;

    const goToRoute = (direction: "next" | "prev") => {
      if (isScrolling) return;
      isScrolling = true;

      const currentIndex = routes.findIndex((r) => r.routeName === route.name);

      if (direction === "next" && currentIndex < routes.length - 1) {
        router.push({ name: routes[currentIndex + 1].routeName });
      } else if (direction === "prev" && currentIndex > 0) {
        router.push({ name: routes[currentIndex - 1].routeName });
      }

      setTimeout(() => (isScrolling = false), 800); // debounce
    };

    // --- Wheel handler ---
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) goToRoute("next");
      else goToRoute("prev");
    };

    // --- Keyboard handler ---
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") goToRoute("next");
      if (event.key === "ArrowUp") goToRoute("prev");
    };

    // --- Touch handler (swipe detection) ---
    let touchStartY = 0;
    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };
    const handleTouchEnd = (event: TouchEvent) => {
      const touchEndY = event.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0) goToRoute("next"); // swipe up
        else goToRoute("prev"); // swipe down
      }
    };

    onMounted(() => {
      window.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("keydown", handleKeydown);
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchend", handleTouchEnd);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    });

    return {
      routes,
    };
  },
};
</script>
