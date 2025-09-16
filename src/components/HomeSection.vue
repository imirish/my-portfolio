<template>
  <section class="relative h-screen flex justify-center md:items-center pt-[5rem]">
    <div
      class="flex flex-row gap-12"
    >
      <div class="absolute bottom-0 md:relative">
        <img
          src="@/assets/homepage/avatar.svg"
          alt="Avatar"
          class="h-[22rem] md:h-[33rem] xl:h-[40rem]"
        />
      </div>
      <div class="flex flex-col gap-12 md:gap-28 px-4 xs:px-0 tracking-tight">
        <div class="flex flex-col items-start leading-none gap-2">
          <h1 class="text-48px xl:text-128px text-[#4997CD] font-semibold">
            Hello!
          </h1>
          <h1
            class="text-30px md:text-36px xl:text-60px text-[#000] font-semibold"
          >
            I'm Danica Irish Garcia
          </h1>
          <h1
            class="text-18px md:text-24px text-primary-text-lighter font-semibold"
          >
            Software Engineer | Frontend Developer
          </h1>
        </div>

        <div
          class="flex flex-col items-start gap-6 justify-start leading-none uppercase text-black text-24px xl:text-36px"
        >
          <div class="flex flex-col items-start justify-start leading-none">
            <h1 class="font-semibold">Your Next</h1>
            <span class="flex items-center font-semibold">
              <span>
                Pr
                <img
                  src="@/assets/homepage/letter-o.svg"
                  alt="Letter O"
                  class="w-6 h-6 inline-block mb-1"
                />
                blem S
                <img
                  src="@/assets/homepage/letter-o.svg"
                  alt="Letter O"
                  class="w-6 h-6 inline-block mb-1"
                />
                lver
              </span>
            </span>
          </div>

          <button
            class="bg-[#6FC1F9] primary-btn"
            v-ripple
            @click="downloadCv"
          >
            <span class="text-12px lg:text-16px">Download CV</span>
            <img
              src="@/assets/common/arrow-right.svg"
              alt="Arrow"
              class="w-8 h-8 md:w-10 md:h-10 inline-block"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { mdiArrowRightThin, mdiGithub, mdiLinkedin } from "@mdi/js";
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
      mdiArrowRightThin,
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
      link.href =
        "https://drive.google.com/uc?export=download&id=1jgjWzX2aZT2S-V4slX4zQOGkYuN00ECu";
      link.download = "Danica-Garcia-CV.pdf";
      link.click();
    },
  },
};
</script>
