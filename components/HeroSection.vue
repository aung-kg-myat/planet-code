<template>
  <div class="relative" id="home">
    <Gradient />
    <section
      class="relative w-full h-screen bg-cover bg-center"
      :style="{
        backgroundImage: `url('/images/freepic1.jpg')`,
        backgroundAttachment: isDesktop ? 'fixed' : 'scroll',
        backgroundSize: isDesktop ? 'cover' : 'auto',
      }"
    >
      <div class="relative z-10">
        <div class="relative h-screen">
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:p-36 text-center w-full"
          >
            <div
              class="flex flex-col items-center justify-start space-y-5 md:space-y-14"
            >
              <Transition
                name="fade-down"
                appear
                :style="{ '--delay': `${0.6}s` }"
              >
                <h1
                  class="mb-8 md:mb-0 text-center font-bold lg:text-5xl text-2xl text-white font-mono p-2"
                >
                  <Flipwords
                    :words="[
                      'Accelerate your growth with',
                      'Transform your business with',
                      'Unlock new opportunities with',
                      'Build a smarter future with',
                      'Empower your brand with',
                      'Dominate your industry with',
                      'Power your digital brand with',
                    ]"
                    :duration="3000"
                    class="text-center"
                  />
                </h1>
              </Transition>

              <div
                class="flex w-full flex-col items-center justify-center overflow-hidden rounded-md gap-5"
              >
                <Transition
                  name="fade-down"
                  appear
                  :style="{ '--delay': `${1}s` }"
                >
                  <div class="flex items-center justify-center">
                    <h1
                      class="md:text-7xl text-4xl font-bold font-carterOne text-white"
                    >
                      PLANET <span class="text-[#755dcd]">CODE</span>
                    </h1>
                  </div>
                </Transition>
              </div>

              <ClientOnly>
                <Transition
                  name="fade-down"
                  appear
                  :style="{ '--delay': `${1.5}s` }"
                >
                  <Vue3Lottie
                    animationLink="/lottie/globe.json"
                    :height="250"
                    :width="250"
                  />
                </Transition>
              </ClientOnly>
              <div
                class="flex items-center justify-center max-lg:w-full min-md:flex-1 text-gray-400 lg:text-lg text-md text-balance font-mono"
              >
                <TextGenerateEffect
                  words="Empowering businesses with innovative software solutions, cutting-edge technology, and strategic expertise to drive growth and success. 🚀"
                  class="''"
                />
              </div>
            </div>
          </div>
        </div>
        <div ref="lottieContainer"></div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { Vue3Lottie } from "vue3-lottie";

const colorMode = useColorMode();
const particlesColor = computed(() =>
  colorMode.value === "dark" ? "#FFFFFF" : "#000000"
);

// const img = useImage();
// const backgroundStyles = computed(() => {
//   // Mobile-first approach with responsive breakpoints
//   const imageUrl = img("/images/freepic1.jpg", {
//     format: "webp",
//     quality: 90,
//   });

//   return `url('${imageUrl})`;
// });
const isDesktop = ref(false);

onMounted(() => {
  // Check if the screen width is larger than 768px (common mobile breakpoint)
  isDesktop.value = window.innerWidth > 768;

  // Optional: Add event listener for window resize
  window.addEventListener("resize", () => {
    isDesktop.value = window.innerWidth > 768;
  });
});
</script>
