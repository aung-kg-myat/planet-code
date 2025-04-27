<template>
  <transition name="fade">
    <button
      v-show="isVisible"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-[#755dcd] transition-all duration-1000 focus:outline-none animate-bounce"
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  const scrollDuration = 1500; // Total duration of the scroll (in ms)
  const start = window.scrollY; // Starting scroll position
  const startTime = performance.now(); // Time when the scroll starts

  const scrollStep = (timestamp: number) => {
    const timeElapsed = timestamp - startTime;
    const progress = Math.min(timeElapsed / scrollDuration, 1); // Calculate the progress (0 to 1)

    // Apply ease-in to make it slow at the beginning and fast at the end
    const easing = Math.pow(progress, 3); // Quadratic easing (slow at first, fast later)

    // Scroll by an amount that accelerates over time
    window.scrollTo(0, start * (1 - easing));

    if (progress < 1) {
      requestAnimationFrame(scrollStep); // Continue the animation until reaching the target
    }
  };

  requestAnimationFrame(scrollStep); // Start the scroll animation
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
