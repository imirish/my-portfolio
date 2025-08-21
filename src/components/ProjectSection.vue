<template>
  <section class="tw-py-20 tw-max-w-5xl tw-mx-auto tw-text-center">
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
          <ProjectCard :title="value.title" :description="value.description"/>
        </div>

        <ProjectCard
          title="Under Development"
          description="Description of the project under development"
          :isInternal="false"
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
      },
      {
        title: "Online/Offline Order Management System using React",
        description:
          "Designed and implemented a comprehensive order management system that supports both online and offline orders, enhancing the overall customer experience.",
      },
      {
        title: "Vehicle Monitoring using Vue",
        description:
          "Developed a vehicle monitoring system that provides real-time tracking and analytics, improving fleet management and operational efficiency.",
      },
      {
        title: "Event Management System using Flutterflow",
        description:
          "Developed an event management system that streamlines the planning and execution of events, improving overall efficiency and user experience.",
      },
      {
        title: "Mentored and supported new front-end hires",
        description:
          "Provided guidance and support to new front-end developers, helping them integrate into the team and improve their skills.",
      },
    ];

    return {
      projects,
    };
  },
};
</script>
