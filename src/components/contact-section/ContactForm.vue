<template>
  <section
    class="tw-pt-20 tw-pb-10 tw-bg-[#1E1E2E] tw-text-center flex-col tw-gap-4 tw-h-fit tw-items-center tw-justify-start"
  >
    <div class="flex-col">
      <h1 class="tw-text-2xl tw-text-white tw-font-bold">Get in touch</h1>
      <p class="tw-mb-4 tw-text-white">Let’s build something together!</p>
    </div>

    <form
      @submit.prevent="submitForm"
      class="flex-col tw-gap-4 tw-w-[20rem] sm:tw-w-[25rem]"
    >
      <div class="flex-row tw-gap-4">
        <input
          type="text"
          placeholder="Your Name"
          v-model="name"
          class="tw-bg-white tw-text-black tw-px-4 tw-py-2 tw-rounded tw-w-full"
        />
        <input
          type="email"
          placeholder="Your Email"
          v-model="email"
          class="tw-bg-white tw-text-black tw-px-4 tw-py-2 tw-rounded tw-w-full"
        />
      </div>

      <input
        type="text"
        placeholder="Subject"
        v-model="subject"
        class="tw-bg-white tw-text-black tw-px-4 tw-py-2 tw-rounded"
      />
      <textarea
        placeholder="Your Message"
        class="tw-bg-white tw-text-black tw-px-4 tw-py-2 tw-rounded"
        v-model="message"
      ></textarea>
      <button
        type="submit"
        class="tw-bg-[#FFD580] tw-text-black tw-px-4 tw-py-2 tw-rounded hover:tw-bg-[#f9d388]"
      >
        SEND MESSAGE
      </button>
    </form>
  </section>
</template>

<script lang="ts">
import { submitContactUsForm } from "@/service/forms";

export default {
  components: {},
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  setup() {},
  methods: {
    clearInputs() {
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    },
    async submitForm() {
      try {
        const response = await submitContactUsForm({
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        });
        if (response.success) {
          this.clearInputs();
        }
      } catch (error) {}
    },
  },
};
</script>
