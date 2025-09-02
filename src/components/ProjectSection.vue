<template>
  <section class="tw-pl-[3rem] sm:tw-pl-[6rem] tw-py-[2.3rem] tw-pr-[3rem] tw-max-w-5xl tw-mx-auto tw-text-center">
    <h2 class="tw-text-2xl tw-font-bold tw-mb-8">Projects</h2>
    <div class="tw-flex tw-flex-col tw-gap-4">
      <div class="tw-px-2 tw-flex tw-flex-row tw-gap-3">
        <div
          class="tw-flex tw-flex-row tw-items-center tw-justify-center tw-gap-2"
        >
          <div class="tw-h-[.7rem] tw-w-[.7rem] tw-bg-red-400"></div>
          <span>Internal</span>
        </div>
        <div
          class="tw-flex tw-flex-row tw-items-center tw-justify-center tw-gap-2"
        >
          <div class="tw-h-[.7rem] tw-w-[.7rem] tw-bg-green-400"></div>
          <span>Personal</span>
        </div>
      </div>

      <div class="tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
        <!-- <div class="tw-h-40 tw-bg-gray-200 tw-mb-4">[Screenshot]</div> -->
        <div v-for="value in projects" :key="value.title">
          <ProjectCard
            :title="value.title"
            :description="value.description"
            :toolDescription="value.toolDescription"
          />
        </div>

        <ProjectCard
          title="Figma Designs"
          description="Collection of Figma designs and prototypes"
          :isInternal="false"
          toolDescription="Figma"
          :isExternalProjectLink="false"
          projectLink="FigmaProject"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import ProjectCard from "./project-section/ProjectCard.vue";

export default {
  components: {
    ProjectCard,
  },
  setup() {
    const projects = [
      {
        title: "Test Automation Using Selenium Webdriver",
        description:
          "Developed and maintained an internal test automation framework using Selenium WebDriver, with seamless integration to TestRail for test case management and reporting",
        toolDescription: "Selenium Webdriver, TestRail, C#",
      },
      {
        title: "Online/Offline Order Management System",
        description:
          "Designed and implemented a comprehensive order management system that supports both online and offline orders, enhancing the overall customer experience.",
        toolDescription:
          "VueJS, NuxtJS, TailwindCSS, Firebase, GMaps, Typescript, Jest, REST API",
      },
      {
        title: "Vehicle Monitoring",
        description:
          "Developed a vehicle monitoring system that provides real-time tracking and analytics, improving fleet management and operational efficiency.",
        toolDescription:
          "Vue3, Vite, TailwindCSS, Vitest, Typescript, REST API",
      },
      {
        title: "Event Management System",
        description:
          "Developed an event management system that streamlines the planning and execution of events, improving overall efficiency and user experience.",
        toolDescription: "Flutterflow, Dart, Javascript, REST API",
      },
      // {
      //   title: "Mentored and supported new front-end hires",
      //   description:
      //     "Provided guidance and support to new front-end developers, helping them integrate into the team and improve their skills.",
      //   toolDescription: "Presentation (PPT)",
      // },
    ];

    return {
      projects,
    };
  },
};
</script>
