<template>
  <div class="tw-relative">
    <div class="tw-absolute tw-pl-8 tw-flex tw-flex-row sm:tw-flex-col">
      <div
        v-for="(icon, key) in icons"
        :key="key"
        class="tw-flex tw-flex-row sm:tw-flex-col tw-items-center tw-justify-center"
      >
        <div class="tw-bg-white tw-h-[.1rem] tw-w-[3rem] sm:tw-h-[3rem] sm:tw-w-[.1rem]"></div>
        <RouterLink :to="{ name: icon.pathName }">
          <SvgIcon
            :iconPath="icon.icon"
            class="tw-my-2 tw-mx-1"
            :iconColor="
              router.currentRoute.value.name === icon.pathName
                ? 'tw-text-[#FFD580]'
                : 'inherit'
            "
          />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mdiAccountOutline, mdiHomeVariantOutline } from "@mdi/js";
import { useRouter } from "vue-router";
import SvgIcon from "./SvgIcon.vue";

export default {
  components: {
    SvgIcon,
  },
  setup() {
    const router = useRouter();
    const icons = {
      home: { pathName: "Home", icon: mdiHomeVariantOutline },
      account: { pathName: "AboutMe", icon: mdiAccountOutline },
      // briefcase: { pathName: "Projects", icon: mdiBriefcaseOutline },
      // card: { pathName: "Contact", icon: mdiCardAccountDetailsOutline },
    };
    return {
      icons,
      router,
    };
  },
};
</script>
