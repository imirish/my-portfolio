<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="[iconSize, iconColor]"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path :d="iconPath" />
  </svg>
</template>

<script lang="ts">
export default {
  props: {
    iconPath: {
      type: String,
      required: true,
    },
    iconSize: {
      type: String,
      default: "tw-w-8 tw-h-8",
    },
    iconColor: {
      type: String,
      default: "tw-text-white",
    },
  },
  components: {},
  setup() {},
};
</script>
