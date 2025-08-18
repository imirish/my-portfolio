<template>
  <div
    class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-space-y-2"
  >
    <!-- <img
      class="tw-w-[10rem] tw-h-[10rem] tw-rounded-full tw-object-cover"
      src="@/assets/homepage/profile-3.svg"
    /> -->

    <div class="tw-flex tw-flex-col tw-text-white tw-text-lg tw-font-medium">
      
      <span>Web Developer</span>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import TextToImage from "@/components/common/TextToImage.vue";

export default {
  components: {
    TextToImage,
  },
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  setup() {
    const count = ref(0);

    return {
      count,
    };
  },
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
