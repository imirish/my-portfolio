<template>
  <div
    class="tw-h-full tw-w-full tw-font-sans tw-bg-[#A7C7E7] tw-text-[#2C2C2C] dark:tw-bg-[#1E1E2E] dark:tw-text-[#F8F8F2]"
  >
    <ArcadeCursor />
    <div
      class="tw-pointer-events-none tw-absolute tw-z-0 tw-inset-0 tw-bg-[url('@/assets/common/stars.svg')] tw-bg-repeat tw-bg-[length:400px_400px] tw-animate-scrollBg"
    ></div>
    <main class="tw-z-10 tw-w-full tw-h-full">
      <SinglePage />
    </main>
  </div>
</template>

<script lang="ts">
import SinglePage from "@/pages/SinglePage.vue";
import ArcadeCursor from "@/components/common/ArcadeCursor.vue";

export default {
  components: {
    SinglePage,
    ArcadeCursor,
  },
};
</script>
