<template>
  <div
    class="leading-4xl font-bold text-white font-mono whitespace-pre-line"
    :class="textSize"
  >
    <div
      v-for="(line, index) in displayedLines"
      :key="index"
    >
      {{ line }}
    </div>
    <span
      v-if="isTyping"
      class="animate-blink"
      >|</span
    >
  </div>
</template>

<script lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

export default {
  props: {
    lines: {
      type: Array as () => string[],
      required: true,
    },
    speeds: {
      type: Array as () => number[],
      required: true,
    },
    pauses: {
      type: Array as () => number[],
      required: true,
    },
    textSize: {
      type: String,
      default: "text-4xl",
    },
  },
  setup(props) {
    const displayedLines = ref<string[]>([]);
    const isTyping = ref(true);

    let lineIndex = 0;
    let charIndex = 0;
    let interval: number | undefined;

    function typeLine() {
      if (lineIndex >= props.lines.length) {
        isTyping.value = false;
        clearInterval(interval);
        return;
      }

      const currentLine = props.lines[lineIndex];
      // const speed = props.speeds[lineIndex] ?? 50;
      const pause = props.pauses[lineIndex] ?? 1000;

      // Add characters one by one
      if (charIndex < currentLine.length) {
        if (!displayedLines.value[lineIndex]) {
          displayedLines.value[lineIndex] = "";
        }
        displayedLines.value[lineIndex] += currentLine[charIndex];
        charIndex++;
      } else {
        // Finished this line, move to next after pause
        clearInterval(interval);
        setTimeout(() => {
          lineIndex++;
          charIndex = 0;
          interval = window.setInterval(
            typeLine,
            props.speeds[lineIndex] ?? 50
          );
        }, pause);
      }
    }

    onMounted(() => {
      interval = window.setInterval(typeLine, props.speeds[0] ?? 50);
    });

    onBeforeUnmount(() => {
      clearInterval(interval);
    });

    return { displayedLines, isTyping };
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
