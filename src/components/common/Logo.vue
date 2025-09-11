<template>
  <div class="sticky top-0 left-0 z-30" >
    <div
      class="absolute flex items-start justify-start cursor-pointer"
      @click="goToHome()"
    >
      <img
        src="@/assets/common/logo.svg"
        alt="Logo"
        class="w-10 h-10 m-4"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";

export default {
  components: {},
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
  methods: {
    goToHome() {
      this.router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped></style>
