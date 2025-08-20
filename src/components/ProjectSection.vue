<template>
  <section class="tw-py-20 tw-max-w-5xl tw-mx-auto tw-text-center">
    <h2 class="tw-text-2xl tw-font-bold tw-mb-8">Projects</h2>
    <div class="tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
      <!-- <div class="tw-h-40 tw-bg-gray-200 tw-mb-4">[Screenshot]</div> -->
      <div v-for="value in projects" :key="value.title">
        <ProjectCard :title="value.title" :description="value.description" />
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
        title: "Online/Offline Order Management System",
        description:
          "Designed and implemented a comprehensive order management system that supports both online and offline orders, enhancing the overall customer experience.",
      },
      {
        title: "Vehicle Monitoring",
        description:
          "Developed a vehicle monitoring system that provides real-time tracking and analytics, improving fleet management and operational efficiency.",
      },
      {
        title: "Event Management System",
        description:
          "Developed an event management system that streamlines the planning and execution of events, improving overall efficiency and user experience.",
      },
    ];

    return {
      projects,
    };
  },
};
</script>
