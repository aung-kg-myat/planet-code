<template>
  <div class="relative" id="home">
    <div
      class="absolute w-full -top-px transition-all text-orange-400 shrink-0 z-20 duration-500"
    >
      <svg
        viewBox="0 0 1440 181"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="pointer-events-none"
      >
        <mask id="path-1-inside-1_414_5526" fill="white">
          <path d="M0 0H1440V181H0V0Z"></path>
        </mask>
        <path
          d="M0 0H1440V181H0V0Z"
          fill="url(#paint0_linear_414_5526)"
          fill-opacity="0.22"
        ></path>
        <path
          d="M0 2H1440V-2H0V2Z"
          fill="url(#paint1_linear_414_5526)"
          mask="url(#path-1-inside-1_414_5526)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_414_5526"
            x1="720"
            y1="0"
            x2="720"
            y2="181"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="currentColor"></stop>
            <stop offset="1" stop-color="currentColor" stop-opacity="0"></stop>
          </linearGradient>
          <linearGradient
            id="paint1_linear_414_5526"
            x1="0"
            y1="90.5"
            x2="1440"
            y2="90.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="currentColor" stop-opacity="0"></stop>
            <stop offset="0.395" stop-color="currentColor"></stop>
            <stop offset="1" stop-color="currentColor" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div class="relative z-10">
      <div class="relative">
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
                  PLANET <span class="text-orange-400">CODE</span>
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
