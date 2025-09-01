<template>
  <HomeSection />
  <AboutMeSection />
  <SkillsSection />
  <ProjectSection />
  <ContactSection />

  <footer
    class="tw-text-center tw-py-6 tw-text-sm tw-bg-[#2C2C2C] tw-text-white"
  >
    © 2025 Danica Irish Garcia. Built with Vue3 + Tailwind.
  </footer>
</template>

<script lang="ts">
import ArcadeCursor from "@/components/common/ArcadeCursor.vue";
import HomeSection from "@/components/HomeSection.vue";
import AboutMeSection from "@/components/AboutMeSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import ProjectSection from "@/components/ProjectSection.vue";
import ContactSection from "@/components/ContactSection.vue";


export default {
  components: {
    ArcadeCursor,
    HomeSection,
    AboutMeSection,
    SkillsSection,
    ProjectSection,
    ContactSection,
  },
};
</script>
