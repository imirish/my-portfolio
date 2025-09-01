<script lang="ts">
import { onBeforeUnmount, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  components: {},
  props: {
    pages: {
      type: Array as () => string[],
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const currentRoute = useRoute();

    let isScrolling = false;

    const goToRoute = (direction: "next" | "prev") => {
      if (isScrolling) return;
      isScrolling = true;

      const currentIndex = props.pages.findIndex(
        (r) => r === currentRoute.name
      );

      if (direction === "next" && currentIndex < props.pages.length - 1) {
        router.push({ name: props.pages[currentIndex + 1] });
      } else if (direction === "prev" && currentIndex > 0) {
        router.push({ name: props.pages[currentIndex - 1] });
      }

      setTimeout(() => (isScrolling = false), 800); // debounce
    };

    // --- Wheel handler ---
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) goToRoute("next");
      else goToRoute("prev");
    };

    // --- Keyboard handler ---
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") goToRoute("next");
      if (event.key === "ArrowUp") goToRoute("prev");
    };

    // --- Touch handler (swipe detection) ---
    let touchStartY = 0;
    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };
    const handleTouchEnd = (event: TouchEvent) => {
      const touchEndY = event.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0) goToRoute("next"); // swipe up
        else goToRoute("prev"); // swipe down
      }
    };

    onMounted(() => {
      window.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("keydown", handleKeydown);
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchend", handleTouchEnd);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    });
  },
};
</script>

<style scoped></style>
