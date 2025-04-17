<template>
  <div class="relative" id="home">
    <Gradient />
    <div class="relative z-10">
      <div class="relative h-screen">
        <nuxt-img
          src="/images/freepic.jpg"
          format="webp"
          :srcset="`/images/freepic.jpg 480w, /images/freepic.jpg 800w`"
          sizes="(max-width: 600px) 480px, 800px"
          alt="hero-background"
          class="w-full h-screen"
        />
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:p-36 text-center w-full"
        >
          <div
            class="flex flex-col items-center justify-start space-y-5 md:space-y-14"
          >
            <h1
              class="mb-8 md:mb-0 text-center font-bold lg:text-5xl text-3xl text-white font-mono"
            >
              <Flipwords
                :words="[
                  'Accelerate your growth with',
                  'Revolutionize your business with',
                  'Unlock new opportunities with',
                  'Build a smarter future with',
                  'Empower your brand with',
                  'Stay ahead of the competition with',
                  'Transform your digital presence with',
                ]"
                :duration="3000"
                class="text-center"
              />
            </h1>
            <div
              class="flex w-full flex-col items-center justify-center overflow-hidden rounded-md gap-5"
            >
              <div class="flex items-center justify-center">
                <h1
                  class="md:text-7xl text-4xl font-bold font-carterOne text-white"
                >
                  PLANET <span class="text-[#755dcd]">CODE</span>
                </h1>
              </div>
            </div>
            <client-only>
              <Vue3Lottie
                animationLink="/lottie/globe.json"
                :height="250"
                :width="250"
              />
            </client-only>
            <!-- <div
              class="relative flex size-full flex-col items-center justify-center overflow-hidden bg-transparent px-40 pb-40 pt-8 md:pb-60 md:shadow-xl h-[220px] md:h-[290px]"
            >
              <Globe class="top-0" />
              <div
                class="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]"
              />
            </div> -->
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
  </div>
</template>
<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { Vue3Lottie } from "vue3-lottie";

const colorMode = useColorMode();
const particlesColor = computed(() =>
  colorMode.value === "dark" ? "#FFFFFF" : "#000000"
);
</script>
