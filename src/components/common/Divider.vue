<template>
  <div
    :class="[
      vertical ? `${length} w-px mx-2` : `h-px ${width} my-4`,
      color || 'bg-gray-300',
      thickness || 'border-[.01rem]',
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
      default: "bg-gray-300",
    },
    thickness: {
      type: String,
      default: "border-[.01rem]",
    },
    length: {
      type: String,
      default: "h-full",
    },
    width: {
      type: String,
      default: "w-full",
    },
  },
};
</script>
