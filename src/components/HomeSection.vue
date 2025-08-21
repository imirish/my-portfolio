<template>
  <section
    class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen tw-text-center tw-gap-4 tw-overflow-y-auto"
  >
    <!-- Avatar -->
    <img
      src="@/assets/homepage/profile.svg"
      alt="Pixel Avatar"
      class="tw-w-32 tw-h-32 tw-rounded-full tw-border-4 tw-border-white tw-animate-float"
    />

    <!-- Name + Title -->
    <h1 class="tw-font-bold">
      <TypewriterTransition
        text="Danica Irish Garcia"
        blinkColor="tw-text-[#FF79C6]"
        textSize="tw-text-3xl"
      />
    </h1>
    <p class="tw-text-xl">Software Engineer | Front-End Developer</p>
    <p class="tw-text-l tw-uppercase">Your Next Problem-Solver</p>

    <!-- Social Links -->
    <div class="tw-flex tw-gap-6 tw-mt-4">
      <div class="hover:tw-scale-110 tw-transition">
        <SvgIcon :iconPath="mdiLinkedin" @click="navigateToLinkedIn" />
      </div>
      <div class="hover:tw-scale-110 tw-transition">
        <SvgIcon :iconPath="mdiGithub" @click="navigateToGithub" />
      </div>
    </div>

    <!-- Resume Button -->
    <div
      @click="downloadCv"
      class="tw-mt-6 tw-bg-[#FFD580] tw-text-black tw-px-4 tw-py-2 tw-rounded tw-font-bold hover:tw-bg-yellow-400 tw-transition tw-animation-bouncePixel"
    >
      Download CV
    </div>
  </section>
</template>

<script lang="ts">
import { mdiLinkedin, mdiGithub } from "@mdi/js";
import SvgIcon from "./common/SvgIcon.vue";
import TypewriterTransition from "./transitions/TypewriterTransition.vue";

export default {
  components: {
    SvgIcon,
    TypewriterTransition,
  },
  setup() {
    return {
      mdiLinkedin,
      mdiGithub,
    };
  },
  methods: {
    navigateToLinkedIn() {
      window.open("https://www.linkedin.com/in/irishgarcia/", "_blank");
    },
    navigateToGithub() {
      window.open("https://github.com/imirish", "_blank");
    },
    downloadCv() {
      const link = document.createElement("a");
      link.href = "./files/cv.pdf";
      link.download = "Danica-Garcia-CV.pdf";
      link.click();
    },
  },
};
</script>
