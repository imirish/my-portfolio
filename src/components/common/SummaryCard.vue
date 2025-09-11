<template>
  <div
    :class="[
      'flex flex-col p-8 gap-4 rounded-2xl border-2 border-black',
      cardClass,
    ]"
  >
    <span class="flex flex-row items-center gap-4">
      <SvgIcon
        v-if="iconPath"
        :iconPath="iconPath ? iconPath : ''"
        :class="[
          customClass ? customClass : 'text-[#616161]',
          'w-8 h-8 inline-block mb-1 ',
        ]"
      />
      <h2
        :class="[
          customClass ? customClass : 'text-primary-text',
          'text-[24px] font-semibold ',
        ]"
      >
        {{ title }}
      </h2>
    </span>

    <slot />
  </div>
</template>

<script lang="ts">
import SvgIcon from "./SvgIcon.vue";

export default {
  components: {
    SvgIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    iconPath: {
      type: String,
      required: false,
    },
    cardClass: {
      type: String,
      default: "",
    },
    customClass: {
      type: String,
      default: "",
    },
  },
  setup() {},
};
</script>
