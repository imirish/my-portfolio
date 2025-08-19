<template>
  <div
    class="tw-text-2xl tw-font-bold tw-font-mono tw-whitespace-pre-line"
    :class="color"
  >
    {{ displayedText }}<span class="animate-blink" :class="blinkColor">_</span>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    speed: {
      type: Number,
      default: 60,
    },
    pause: {
      type: Number,
      default: 1000,
    },
    color: {
      type: String,
      default: "tw-text-white",
    },
    blinkColor: {
      type: String,
      default: "tw-text-white",
    },
  },
  setup(props) {
    const displayedText = ref("");
    let currentIndex = 0;
    let interval: number | undefined;

    function typeWriter() {
      if (currentIndex < props.text.length) {
        const currentChar = props.text[currentIndex];
        displayedText.value += currentChar;
        currentIndex++;

        // If we hit punctuation (end of sentence), pause a bit longer
        if (/[.!?]/.test(currentChar)) {
          clearInterval(interval);
          setTimeout(() => {
            interval = window.setInterval(typeWriter, props.speed);
          }, props.pause);
        }
      } else {
        clearInterval(interval);
      }
    }

    onMounted(() => {
      interval = window.setInterval(typeWriter, props.speed);
    });

    onBeforeUnmount(() => {
      clearInterval(interval);
    });

    return { displayedText };
  },
};
</script>

<style scoped>
@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  50.01%,
  100% {
    opacity: 0;
  }
}

.animate-blink {
  display: inline-block;
  margin-left: 2px;
  width: 1ch;
  animation: blink 1s step-end infinite;
}
</style>
