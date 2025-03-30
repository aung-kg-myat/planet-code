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
          class="absolute w-full h-screen"
        />
        <div class="lg:p-28 text-center w-full">
          <div
            class="flex flex-col items-center justify-start space-y-1 md:space-y-14"
          >
            <h1
              class="text-center font-bold lg:text-5xl text-3xl text-white font-mono"
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
                <SparklesText
                  text="Space Lab"
                  :colors="{ first: '#fff', second: '#FE8BBB' }"
                  :sparkles-count="8"
                  class="md:text-7xl text-4xl font-bold text-orange-400"
                />
              </div>
              <client-only>
                <Vue3Lottie
                  animationLink="/lottie/laptop.json"
                  :height="220"
                  :width="220"
                />
              </client-only>
              <!-- <div class="absolute md:h-40 w-full h-24">
                <Sparkles
                  background="transparent"
                  :min-size="0.4"
                  :max-size="1.9"
                  :particle-density="500"
                  class="size-full"
                  :particle-color="particlesColor"
                />

                <div class="absolute inset-0 size-full"></div>
              </div> -->
            </div>
            <div
              class="flex items-center justify-center max-lg:w-full text-gray-400 lg:text-lg text-md text-balance font-mono"
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
