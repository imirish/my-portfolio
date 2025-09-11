<template>
  <section class="flex items-center justify-center py-20">
    <div class="grid grid-cols-2 gap-8">
      <div
        v-for="(project, index) in projects"
        :key="index"
      >
        <ProjectCard
          :title="project.title"
          :description="project.description"
          :toolDescription="project.toolDescription"
        />
      </div>
      <ProjectCard
        title="Figma Designs"
        :isInternal="false"
        description="Collection of Figma designs and prototypes."
        toolDescription="Figma"
      >
        <template #content>
          <div class="flex items-end justify-end">
            <RouterLink :to="{ name: 'FigmaProject' }">
              <button
                class="bg-[#6FC1F9] py-1 px-1 text-12px text-black rounded-full h-[2rem] w-[10rem] xl:w-[13rem]"
                v-ripple
              >
                <span class="flex flex-row items-center gap-2 justify-center">
                  <span>View Project</span>
                  <img
                    src="@/assets/common/arrow-right.svg"
                    alt="Arrow"
                    class="w-6 h-6 inline-block mb-1"
                  />
                </span>
              </button>
            </RouterLink>
          </div>
        </template>
      </ProjectCard>
    </div>
  </section>
</template>

<script lang="ts">
import SummaryCard from "./common/SummaryCard.vue";
import ProjectCard from "./project-section/ProjectCard.vue";

export default {
  components: {
    ProjectCard,
    SummaryCard,
  },
  setup() {
    const projects = [
      {
        title: "Test Automation",
        description:
          "Developed and maintained an internal test automation framework using Selenium WebDriver, with seamless integration to TestRail for test case management and reporting",
        toolDescription: "Selenium Webdriver, TestRail, C#",
        isGreen: true,
      },
      {
        title: "Order Management System",
        description:
          "Designed and implemented a comprehensive order management system that supports both online and offline orders, enhancing the overall customer experience.",
        toolDescription:
          "VueJS, NuxtJS, TailwindCSS, Firebase, GMaps, Typescript, Jest, REST API",
        isGreen: false,
      },
      {
        title: "Vehicle Monitoring",
        description:
          "Developed a vehicle monitoring system that provides real-time tracking and analytics, improving fleet management and operational efficiency.",
        toolDescription:
          "Vue3, Vite, TailwindCSS, Vitest, Typescript, REST API",
        isGreen: false,
      },
      {
        title: "Event Management System",
        description:
          "Developed an event management system that streamlines the planning and execution of events, improving overall efficiency and user experience.",
        toolDescription: "Flutterflow, Dart, Javascript, REST API",
        isGreen: true,
      },
    ];

    return {
      projects,
    };
  },
};
</script>
