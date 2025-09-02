<template>
  <div>
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
