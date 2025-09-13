<template>
  <div class="flex-col">
    <ContactForm />
    <section class="text-center pb-10">
      <span class="flex-row items-center justify-center">
        <span class="text-12px text-black font-regular">
          Not a fan of forms? Check out my
        </span>
        <a
          href="https://linktr.ee/irishgarcia"
          class="text-green-500 text-xl"
        >
          Linktree.
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
