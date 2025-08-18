<template>
  <div class="tw-w-full tw-flex tw-flex-col tw-gap-1">
    <div
      v-if="showLabel"
      class="tw-flex tw-justify-between tw-text-md tw-font-medium tw-text-white"
    >
      <span>{{ labelName }}</span>
      <span v-if="!indeterminate">{{ percent }}%</span>
      <span v-else>…</span>
    </div>

    <div
      class="tw-w-full tw-bg-gray-200 tw-overflow-hidden"
      :class="roundedClass + ' ' + heightClass"
      role="progressbar"
      :aria-valuemin="indeterminate ? undefined : 0"
      :aria-valuemax="indeterminate ? undefined : 100"
      :aria-valuenow="indeterminate ? undefined : percent"
    >
      <!-- Determinate -->
      <div
        v-if="!indeterminate"
        :class="[
          color,
          heightClass,
          roundedClass,
          'tw-transition-all tw-duration-300 tw-ease-out',
        ]"
        :style="{ width: percent + '%' }"
      />
      <!-- Indeterminate -->
      <div
        v-else
        :class="[
          color,
          heightClass,
          roundedClass,
          'animate-indeterminate tw-w-1/3',
        ]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";

export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
    labelName: {
      type: String,
      default: "Progress",
    },
    showLabel: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "tw-bg-primary",
    },
    heightClass: {
      type: String,
      default: "tw-h-3",
    },
    roundedClass: {
      type: String,
      default: "tw-rounded-full",
    },
  },

  setup(props) {
    const clamp = (n: number) => Math.max(0, Math.min(100, Math.round(n)));
    const percent = computed(() => clamp(props.value));
    return { percent };
  },
};
</script>

<style scoped>
@keyframes indeterminate {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(15%);
  }
  100% {
    transform: translateX(100%);
  }
}
.animate-indeterminate {
  animation: indeterminate 1.2s ease-in-out infinite;
}
</style>
