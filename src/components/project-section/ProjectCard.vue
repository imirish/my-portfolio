<template>
  <div
    class="tw-bg-white tw-p-4 tw-rounded tw-shadow tw-text-[#1E1E2E] tw-h-[12rem] tw-relative"
  >
    <!-- <div class="tw-h-40 tw-bg-gray-200 tw-mb-4">[Screenshot]</div> -->
    <div
      v-if="isInternal"
      class="tw-pr-3 tw-pb-1"
    >
      <div class="tw-absolute tw-h-[.4rem] tw-w-[.4rem] tw-bg-red-400"></div>
    </div>
    <div
      v-if="!isInternal"
      class="tw-pr-3 tw-pb-1"
    >
      <div class="tw-absolute tw-h-[.4rem] tw-w-[.4rem] tw-bg-green-400"></div>
    </div>
    <div class="tw-flex tw-flex-col tw-gap-3">
      <div class="tw-flex tw-flex-col tw-gap-2">
        <span
          class="tw-font-extrabold tw-text-[1.05rem] tw-tracking-tight tw-leading-tight"
          >{{ title }}</span
        >
        <p class="tw-text-base tw-leading-tight">{{ description }}</p>
        <a
          v-if="isExternalProjectLink && projectLink"
          class="tw-text-blue-500 hover:tw-underline"
          :href="projectLink"
          >View Project</a
        >
        <RouterLink
          v-if="!isExternalProjectLink && projectLink"
          class="tw-text-blue-500 hover:tw-underline"
          :to="{ name: projectLink }"
        >
          View Project
        </RouterLink>
      </div>
      <p class="tw-text-sm tw-leading-tight">{{ toolDescription }}</p>
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
    toolDescription: {
      type: String,
      required: true,
    },
    isInternal: {
      type: Boolean,
      required: false,
      default: true,
    },
    isExternalProjectLink: {
      type: Boolean,
      required: false,
      default: true,
    },
    projectLink: {
      type: String,
      required: false,
      default: "",
    },
  },
  components: {},
  setup() {},
};
</script>

<style scoped></style>
