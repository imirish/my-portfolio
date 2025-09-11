<template>
  <div class="py-6 h-screen">
    <AboutMeSection />
  </div>
</template>

<script lang="ts">
import AboutMeSection from "@/components/AboutMeSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";

export default {
  components: {
    AboutMeSection,
    SkillsSection,
  },
};
</script>
