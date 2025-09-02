<template>
  <div class="flex-col tw-pb-16">
    <ContactForm />
    <section class="tw-bg-[#1E1E2E] tw-text-center">
      <p class="flex-row">
        <p class="tw-text-xl tw-text-white tw-font-bold">
          Dont like forms? Send me an
        </p>
        <a
          href="mailto:imirishgarcia@gmail.com"
          class="tw-text-[#FFD580] tw-pl-2 tw-text-xl"
        >
          email
        </a>
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import ContactForm from "@/components/contact-section/ContactForm.vue";

export default {
  components: {
    ContactForm,
  },
  setup() {},
};
</script>
