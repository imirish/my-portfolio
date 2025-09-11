<template>
  <div
    class="bg-[#EFF9FF] p-8 text-start rounded-md shadow text-[#1E1E2E] h-[13rem] xl:h-[12rem] relative w-[28rem] xl:w-[35rem]"
  >
    <div class="flex flex-col gap-2">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <span class="font-extrabold text-18px tracking-tight leading-tight">
            {{ title }}
          </span>
          <span
            v-if="isInternal"
            class="font-extrabold text-10px tracking-tight leading-tight text-[#FF7262]"
          >
            internal
          </span>
          <span
            v-else
            class="font-extrabold text-10px tracking-tight leading-tight text-[#43C560]"
          >
            personal
          </span>
          <p class="text-12px leading-tight">
            {{ description }}
          </p>
        </div>

        <p class="text-12px font-semibold leading-tight">
          {{ toolDescription }}
        </p>
      </div>
      <slot name="content" />
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
  },
  components: {},
  setup() {},
};
</script>

<style scoped></style>
