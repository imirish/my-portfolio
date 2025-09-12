<template>
  <section
    class="pt-20 pb-10 text-center flex flex-col gap-4 items-center justify-center w-screen"
  >
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-2xl text-black font-bold">Get in touch</h1>
      <p class="text-[12px] md:text-16px mb-4 text-[#1D1B1B]">
        Have a question or project in mind? Get in touch
      </p>
    </div>

    <div class="flex flex-col items-center justify-center gap-4 w-[25rem]">
      <form
        @submit.prevent="submitForm"
        class="flex flex-col items-center justify-center gap-4 text-12px"
      >
        <div class="flex flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Your Name"
            v-model="name"
            class="h-[3rem] bg-[#EFF9FF] text-black px-4 py-2 rounded  w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            v-model="email"
            class="h-[3rem] bg-[#EFF9FF] text-black px-4 py-2 rounded w-full"
          />
        </div>

        <input
          type="text"
          placeholder="Subject"
          v-model="subject"
          class="h-[3rem] bg-[#EFF9FF] text-black px-4 py-2 rounded w-full"
        />
        <textarea
          placeholder="Your Message"
          class="h-[7rem] bg-[#EFF9FF] text-black px-4 py-2 rounded w-full"
          v-model="message"
        ></textarea>

        <button
          class="bg-[#6FC1F9] py-1 px-1 text-12px text-black rounded-full h-[3rem] w-[10rem]"
          type="submit"
          v-ripple
        >
          <span class="flex flex-row items-center gap-2 justify-center">
            <span>Send Message</span>
            <img
              src="@/assets/common/arrow-right.svg"
              alt="Arrow"
              class="w-6 h-6 inline-block"
            />
          </span>
        </button>
      </form>
    </div>
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
