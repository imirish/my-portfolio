<template>
  <div
    class="tw-w-full tw-flex tw-flex-col tw-items-center tw-justify-center tw-font-quickpencil"
  >
    <div
      class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-space-y-4 tw-pb-3"
    >
      <img
        class="tw-w-[10rem] tw-h-[10rem] tw-rounded-full tw-object-cover"
        src="@/assets/homepage/profile.svg"
      />

      <div
        class="tw-text-4xl tw-font-bold tw-text-white tw-tracking-[0.1rem] tw-md:tw-tracking-[0.5rem] tw-uppercase"
      >
        {{ name }}
      </div>

      <div
        class="tw-text-2xl tw-font-semibold tw-text-white tw-tracking-[0.1rem] tw-md:tw-tracking-[0.5rem] tw-uppercase"
      >
        {{ workTitle }}
      </div>

      <div
        class="tw-text-xl tw-font-medium tw-text-white tw-tracking-[0.1rem] tw-md:tw-tracking-[0.5rem] tw-uppercase"
      >
        {{ shortPhrase }}
      </div>
    </div>

    <!-- Social Links -->
    <div
      class="tw-flex tw-flex-row tw-items-center tw-justify-center tw-cursor-pointer tw-gap-2"
    >
      <div
        class="tw-h-[2.5rem] tw-w-[2.5rem] tw-flex tw-justify-center tw-items-center"
      >
        <SvgIcon :iconPath="mdiLinkedin" @click="navigateToLinkedIn" />
      </div>
      <div
        class="tw-h-[2.5rem] tw-w-[2.5rem] tw-flex tw-justify-center tw-items-center"
      >
        <SvgIcon :iconPath="mdiGithub" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { mdiLinkedin, mdiGithub } from "@mdi/js";
import SvgIcon from "./common/SvgIcon.vue";

export default {
  components: {
    SvgIcon,
  },
  setup() {
    const name = ref("Danica Irish Garcia");
    const workTitle = ref("Software Engineer | Frontend Developer");
    const shortPhrase = ref("Your next problem-solver");

    return {
      name,
      workTitle,
      shortPhrase,
      mdiLinkedin,
      mdiGithub,
    };
  },
  methods: {
    navigateToLinkedIn() {
      window.open("https://www.linkedin.com/in/danica-irish-garcia/", "_blank");
    },
  },
};
</script>
