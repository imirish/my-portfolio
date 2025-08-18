<template>
  <div
    :class="[
      vertical ? `${length} tw-w-px tw-mx-2` : `tw-h-px ${width} tw-my-4`,
      color || 'tw-bg-gray-300',
      thickness || 'tw-border-[.01rem]',
    ]"
  />
</template>

<script lang="ts">
export default {
  props: {
    vertical: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "tw-bg-gray-300",
    },
    thickness: {
      type: String,
      default: "tw-border-[.01rem]",
    },
    length: {
      type: String,
      default: "tw-h-full",
    },
    width: {
      type: String,
      default: "tw-w-full",
    },
  },
};
</script>
