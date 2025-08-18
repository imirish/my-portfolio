<template>
  <div>
    <!-- Hidden canvas for rendering -->
    <canvas ref="canvasRef" :width="width" :height="height" class="hidden"></canvas>

    <!-- Render canvas output as image -->
    <img v-if="imageSrc" :src="imageSrc" :alt="text" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from "vue";

export default defineComponent({
  name: "TextToImage",
  props: {
    text: { type: String, required: true },
    width: { type: Number, default: 600 },
    height: { type: Number, default: 200 },
    fontSize: { type: Number, default: 24 },
    fontFamily: { type: String, default: "Arial" },
    textColor: { type: String, default: "#111827" }, // Tailwind gray-900
    bgColor: { type: String, default: "#f9fafb" },  // Tailwind gray-50
  },
  setup(props) {
    const canvasRef = ref<HTMLCanvasElement | null>(null);
    const imageSrc = ref<string | null>(null);

    const renderText = () => {
      if (!canvasRef.value) return;

      const canvas = canvasRef.value;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Background
      ctx.fillStyle = props.bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Text
      ctx.fillStyle = props.textColor;
      ctx.font = `${props.fontSize}px ${props.fontFamily}`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(props.text, canvas.width / 2, canvas.height / 2);

      // Convert canvas to image
      imageSrc.value = canvas.toDataURL("image/png");
    };

    // Run once on mount
    onMounted(renderText);

    // Re-render when text changes
    watch(() => props.text, renderText);

    return {
      canvasRef,
      imageSrc,
    };
  },
});
</script>
