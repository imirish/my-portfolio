<template>
  <div
    class="tw-bg-white tw-p-4 tw-rounded tw-shadow tw-text-[#1E1E2E] tw-h-[8.5rem] "
  >
    <!-- <div class="tw-h-40 tw-bg-gray-200 tw-mb-4">[Screenshot]</div> -->
    <span class="tw-font-extrabold tw-text-[1.20rem] tw-tracking-tight tw-leading-tight">{{
      title
    }}</span>
    <p class="tw-text-l tw-leading-tight">{{ description }}</p>
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
