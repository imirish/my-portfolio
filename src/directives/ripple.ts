// src/directives/v-ripple.ts
import type { DirectiveBinding } from "vue";

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.classList.add("relative", "overflow-hidden");

    el.addEventListener("click", (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const ripple = document.createElement("span");

      // Size: max of width/height
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;

      // Position: center on click
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

      ripple.className =
        "absolute rounded-full bg-gray-100/50 animate-ripple pointer-events-none";

      el.appendChild(ripple);

      ripple.addEventListener("animationend", () => {
        ripple.remove();
      });
    });
  },
};
