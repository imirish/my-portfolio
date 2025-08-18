<template>
  <div class="tw-px-10 tw-py-4 tw-w-full tw-h-full tw-rounded-2xl tw-relative">
    <div class="tw-relative tw-rounded-2xl tw-overflow-hidden">
      <div
        class="tw-m-4 tw-absolute tw-inset-0 tw-bg-[#4D3664]/40 tw-rounded-xl"
      ></div>

      <div
        class="tw-relative tw-bg-[#4D3664]/40 tw-p-8 tw-rounded-2xl tw-text-white"
      >
        <div class="tw-flex tw-flex-row tw-gap-8">
          <div class="tw-flex tw-flex-col tw-w-[70rem]">
            <div class="tw-flex tw-flex-col">
              <span class="tw-space-y-4">
                <h1 class="tw-text-2xl tw-font-bold">About Me</h1>
                <p>
                  {{ description }}
                </p>
              </span>
              <p class="tw-mt-4 tw-text-justify">{{ aboutMe }}</p>
            </div>

            <button
              v-ripple
              class="tw-w-[14rem] tw-mt-4 tw-p-2 tw-bg-[#1C1124] hover:tw-bg-[#4D3664] hover:tw-opacity-4 tw-text-white tw-rounded-full"
            >
              Download Resume
            </button>
          </div>

          <div class="tw-flex tw-flex-col tw-w-full tw-gap-8 tw-py-10">
            <ProgressBar :value="85" labelName="Web Development" :showLabel="true" />
            <ProgressBar :value="60" labelName="Test Automation" color="tw-bg-[#E1FFCF]" :showLabel="true" />
            <ProgressBar :value="10" labelName="Game Development" color="tw-bg-[#A45FE6]" :showLabel="true" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import ProgressBar from "./common/ProgressBar.vue";

export default {
  components: { ProgressBar },
  setup() {
    const description = ref(
      "Software Engineer | JavaScript, C#, VueJS, TailwindCSS | Front-End & Test Automation"
    );

    const aboutMe = ref(
      "Hello! I’m Danica Garcia, a web developer with a passion for creating engaging digital experiences. Alongside my web projects, I’m aspiring to grow as a game developer and have been building small practice projects to sharpen my skills and explore game design."
    );

    return {
      description,
      aboutMe,
    };
  },
};
</script>

<style scoped></style>
