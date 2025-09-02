<template>
  <div class="flex-col">
    <ContactForm />
    <section class="tw-bg-[#1E1E2E] tw-text-center tw-pb-10">
      <span class="flex-row">
        <h2 class="tw-text-xl tw-text-white tw-font-bold">
          Dont like forms? Send me an
        </h2>
        <a
          href="mailto:imirishgarcia@gmail.com"
          class="tw-text-[#FFD580] tw-pl-2 tw-text-xl"
        >
          email
        </a>
      </span>
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
