<template>
  <div class="sticky top-0 z-20">
    <div class="relative flex justify-end">
      <div
        class="absolute flex flex-row xs:gap-1 md:gap-4 items-end px-6 xs:px-10 justify-end rounded-full py-3 text-12px xs:text-16px"
      >
        <div
          v-for="(path, key) in paths"
          :key="key"
          class="relative flex items-center justify-center h-[3rem] w-[5rem]"
          :class="
            router.currentRoute.value.name === 'FigmaProject'
              ? 'text-white'
              : 'text-black'
          "
        >
          <RouterLink :to="{ name: path.pathName }">
            <span
              class="cursor-pointer h-[10rem]"
              :class="
                router.currentRoute.value.name === path.pathName
                  ? 'font-bold'
                  : 'font-regular'
              "
            >
              {{ path.name }}
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  mdiBriefcaseOutline,
  mdiCardAccountDetailsOutline,
  mdiHomeVariantOutline,
} from "@mdi/js";
import { useRouter } from "vue-router";
import SvgIcon from "./SvgIcon.vue";

export default {
  components: {
    SvgIcon,
  },
  setup() {
    const router = useRouter();
    const paths = {
      home: { pathName: "Home", icon: mdiHomeVariantOutline, name: "Home" },
      projects: {
        pathName: "Projects",
        icon: mdiBriefcaseOutline,
        name: "Projects",
      },
      card: {
        pathName: "ContactMe",
        icon: mdiCardAccountDetailsOutline,
        name: "Contact",
      },
    };
    return {
      paths,
      router,
    };
  },
};
</script>
