<template>
  <transition
    mode="out-in"
    enter-active-class="transition-transform duration-500 ease-in-out"
    leave-active-class="transition-transform duration-500 ease-in-out absolute w-full"
    :enter-from-class="directionMap[direction || 'right'].enter"
    enter-to-class="translate-x-0 translate-y-0"
    :leave-from-class="'translate-x-0 translate-y-0'"
    :leave-to-class="directionMap[direction || 'right'].leave"
  >
    <slot />
  </transition>
</template>
<script lang="ts">
import type { PropType } from "vue";

export default {
  components: {},
  props: {
    direction: {
      type: String as PropType<"left" | "right" | "up" | "down">,
      default: "left",
    },
  },
  setup() {
    const directionMap: Record<string, { enter: string; leave: string }> = {
      left: {
        enter: "translate-x-full",
        leave: "-translate-x-full",
      },
      right: {
        enter: "-translate-x-full",
        leave: "translate-x-full",
      },
      up: {
        enter: "translate-y-full",
        leave: "-translate-y-full",
      },
      down: {
        enter: "-translate-y-full",
        leave: "translate-y-full",
      },
    };

    return {
      directionMap,
    };
  },
};
</script>

<style scoped></style>
