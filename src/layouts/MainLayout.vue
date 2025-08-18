<template>
  <div class="tw-h-screen tw-flex tw-flex-row tw-relative tw-p-10">
    <div class="tw-flex tw-flex-row">
      <nav
        class="tw-flex tw-flex-col tw-justify-start tw-items-center tw-py-4 tw-pr-4 tw-gap-4"
      >
        <router-link to="/">
          <SvgIcon :iconPath="mdiHomeVariantOutline" />
        </router-link>
        <router-link to="/">
          <SvgIcon :iconPath="mdiAccountDetailsOutline" />
        </router-link>
        <router-link to="/">
          <SvgIcon :iconPath="mdiBriefcaseAccountOutline" />
        </router-link>
      </nav>

      <Divider :vertical="true" />
    </div>

    <main class="p-6">
      <!-- Page content loads here -->
      <router-view />
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

export default {
  components: {
    SvgIcon,
    Divider,
  },
  setup() {
    return {
      mdiHomeVariantOutline,
      mdiAccountDetailsOutline,
      mdiBriefcaseAccountOutline,
    };
  },
};
</script>
