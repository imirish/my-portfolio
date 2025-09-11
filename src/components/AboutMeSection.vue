<template>
  <div class="relative">

    <div class="absolute z-[-1]">
      <!-- <img
        src="@/assets/common/avatar-2.svg"
        alt="Avatar"
        class="h-[50rem]"
      /> -->
    </div>

    <section class="px-10 text-start">
      <div class="flex flex-col items-end justify-end gap-8">
        <SummaryCard
          title="About Me"
          :iconPath="mdiHandWaveOutline"
          class="w-[40rem] bg-[#000] text-white"
          customClass="text-white"
        >
          <p class="text-12px text-white">
            Hi, I’m Danica Irish Garcia - a front-end developer with a strong
            focus on creating clean, user-friendly interfaces. I work primarily
            with React, Vue (with TypeScript), and TailwindCSS, building
            responsive designs that feel seamless and accessible across devices.
          </p>
        </SummaryCard>

        <SummaryCard
          title="Professional Highlights"
          :iconPath="mdiLaptop"
          class="w-[40rem] bg-white"
        >
          <div
            class="text-12px text-primary-text-light flex flex-col text-start gap-2"
          >
            <div class="flex flex-row text-start gap-2">
              <span class="font-semibold">Languages & Frameworks:</span>
              <span>JavaScript, C#, Vue3 (TS), React (TS), Flutterflow</span>
            </div>
            <div class="flex flex-row gap-2">
              <span class="font-semibold">Styling & UI:</span>
              <span>TailwindCSS, CSS</span>
            </div>
            <div class="flex flex-row gap-2">
              <span class="font-semibold">Backend & Integration:</span>
              <span>
                Firebase, REST APIs, CI/CD pipelines (GitHub & GitLab)
              </span>
            </div>
            <div class="flex flex-row gap-2">
              <span class="font-semibold">Quality Assurance:</span>
              <span>Selenium WebDriver, Katalon Studio, Vitest, Jest</span>
            </div>
          </div>
        </SummaryCard>

        <SummaryCard
          title="Career Snapshots"
          :iconPath="mdiPinOutline"
          cardClass="w-[40rem] bg-[#A2C49F]"
          customClass="text-[#000]"
        >
          <ul class="text-12px text-black flex flex-col gap-2">
            <li>
              Started coding with C# and built a foundation in problem-solving
              and test automation
            </li>
            <li>
              Expanded my skill set into Full Stack Development, ensuring every
              project is stable
            </li>
            <li>
              Transitioned into front-end frameworks to bring designs to life
            </li>
            <li>
              Currently focused on crafting digital user experiences that
              balance design and performance
            </li>
          </ul>
        </SummaryCard>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import SummaryCard from "@/components/common/SummaryCard.vue";
import SlideTransitions from "@/components/transitions/SlideTransitions.vue";
import { mdiHandWaveOutline, mdiLaptop, mdiPinOutline } from "@mdi/js";

export default {
  components: {
    SummaryCard,
    SlideTransitions,
  },
  setup() {
    return { mdiHandWaveOutline, mdiLaptop, mdiPinOutline };
  },
};
</script>

<style scoped>
ul {
  list-style-type: disc; /* ensures bullets are shown */
  padding-left: 20px; /* indent bullets */
}
</style>
