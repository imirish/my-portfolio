<template>
  <div
    class="tw-bg-white tw-p-4 tw-rounded tw-shadow tw-text-[#1E1E2E] tw-h-[9rem] tw-relative"
  >
    <!-- <div class="tw-h-40 tw-bg-gray-200 tw-mb-4">[Screenshot]</div> -->
    <div class="tw-pr-3 tw-pb-1">
      <div class="tw-absolute tw-h-[.6rem] tw-w-[.6rem] tw-bg-red-400"></div>
    </div>
    <div>
      <span
        class="tw-font-extrabold tw-text-[1.20rem] tw-tracking-tight tw-leading-tight"
        >{{ title }}</span
      >
      <p class="tw-text-l tw-leading-tight">{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  components: {},
  setup() {},
};
</script>

<style scoped></style>
