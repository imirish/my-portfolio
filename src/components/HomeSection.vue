<template>
  <section class="relative h-screen flex justify-center pt-20 md:pt-[10rem]">
    <div class="flex flex-col gap-20 md:pl-[15rem] xl:pl-0">
      <div class=" flex flex-col gap-28 tracking-tight">
        <div class="absolute z-0 left-0 bottom-0">
          <img
            src="@/assets/homepage/avatar.svg"
            alt="Avatar"
            class="h-[22rem] md:h-[33rem] xl:h-[40rem]"
          />
        </div>

        <div class="flex flex-col items-start leading-none">
          <h1 class="text-48px xl:text-128px text-[#4997CD] font-semibold">
            Hello!
          </h1>
          <h1 class="text-30px md:text-36px xl:text-60px text-[#000] font-semibold">
            I'm Danica Irish Garcia
          </h1>
          <h1 class="text-18px md:text-24px text-primary-text-lighter font-semibold">
            Software Engineer | Frontend Developer
          </h1>
        </div>
      </div>

      <div
        class="flex flex-col items-end gap-6 justify-end leading-none uppercase text-black text-24px xl:text-36px"
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
          class="bg-[#6FC1F9] py-4 px-5 xl:px-8 text-20px text-black rounded-full h-[3rem] l:h-[4rem] flex flex-row items-center gap-4 justify-center"
          v-ripple
          @click="navigateToLinkedIn"
        >
          <span class="text-12px l:text-16px">Connect With Me</span>
          <img
            src="@/assets/common/arrow-right.svg"
            alt="Arrow"
            class="w-8 h-8 md:w-10 md:h-10 inline-block"
          />
        </button>
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
      link.href = "./files/cv.pdf";
      link.download = "Danica-Garcia-CV.pdf";
      link.click();
    },
  },
};
</script>
