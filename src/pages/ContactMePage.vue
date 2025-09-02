<template>
  <div class="tw-h-screen flex-col tw-justify-between">
    <ContactSection />
    <Footer />
  </div>
</template>

<script lang="ts">
import ContactSection from "@/components/ContactSection.vue";
import Footer from "@/components/common/Footer.vue";


export default {
  components: {
    ContactSection,
    Footer
  },
};
</script>
