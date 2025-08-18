<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="iconClass"
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
    iconClass: {
      type: String,
      default: "tw-w-8 tw-h-8 tw-text-white",
    },
  },
  components: {},
  setup() {},
};
</script>
