<template>
  <div class="tw-h-screen tw-flex tw-flex-row tw-relative tw-p-10">
    <nav class="tw-flex tw-flex-col tw-justify-start tw-items-center tw-pt-10">
      <div
        v-for="icon in icons"
        :key="icon.routeName"
        class="tw-h-[2.5rem] tw-w-[2.5rem] hover:tw-bg-primary-darker hover:tw-opacity-40 tw-flex tw-justify-center tw-items-center"
      >
        <router-link :to="`/${icon.routeName}`">
          <SvgIcon
            :iconPath="icon.iconPath"
            :iconColor="
              $route.path === `/${icon.routeName}`
                ? 'tw-text-primary'
                : 'tw-text-white'
            "
          />
        </router-link>
      </div>
    </nav>

    <main class="tw-w-full">
      <!-- Page content loads here -->
      <!-- <router-view /> -->
      <RouterView v-slot="{ Component }">
        <transition mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
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
    const icons = [
      { iconPath: mdiHomeVariantOutline, routeName: "" },
      { iconPath: mdiAccountDetailsOutline, routeName: "about-me" },
      { iconPath: mdiBriefcaseAccountOutline, routeName: "work" },
    ];
    return {
      icons,
    };
  },
  methods: {
    navigateToHome() {
      this.$router.push("/");
    },
  },
};
</script>
