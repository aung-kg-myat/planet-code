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
      <!-- <AuroraBackground> -->
      <Motion
        v-if="isReady"
        as="div"
        :initial="{ opacity: 0, y: 50, filter: 'blur(15px)' }"
        :while-in-view="{
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
        }"
        :transition="{
          delay: 0.5,
          duration: 0.8,
          ease: 'easeInOut',
        }"
        class="relative"
      >
        <div class="relative">
          <img
            src="/images/bg.jpg"
            alt="hero-background"
            class="w-full md:h-[800px] h-[500px]"
          />
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:p-36 w-full text-center"
          >
            <div
              class="flex flex-col items-center justify-start space-y-8 md:space-y-14"
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
                class="flex w-full flex-col items-center justify-center overflow-hidden rounded-md mt-8"
              >
                <div class="flex items-center justify-center">
                  <SparklesText
                    text="Space Lab"
                    :colors="{ first: '#fff', second: '#FE8BBB' }"
                    :sparkles-count="15"
                    class="md:text-7xl text-4xl font-bold text-orange-400"
                  />
                </div>
                <div class="relative md:h-15 md:w-[30rem] h-10 w-[25rem]">
                  <div
                    class="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
                  />
                  <div
                    class="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
                  />
                  <div
                    class="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm"
                  />
                  <div
                    class="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent"
                  />

                  <Sparkles
                    background="transparent"
                    :min-size="0.4"
                    :max-size="0.9"
                    :particle-density="1200"
                    class="size-full"
                    :particle-color="particlesColor"
                  />

                  <div class="absolute inset-0 size-full"></div>
                </div>
              </div>

              <p
                class="text-center font-mono text-gray-400 lg:text-lg text-md text-balance"
              >
                Empowering businesses with innovative software solutions,
                cutting-edge technology, and strategic expertise to drive growth
                and success. 🚀
              </p>
            </div>
          </div>
        </div>
      </Motion>
      <!-- </AuroraBackground> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { useColorMode } from "@vueuse/core";
import { Motion } from "motion-v";

const colorMode = useColorMode();
const particlesColor = computed(() =>
  colorMode.value === "dark" ? "#FFFFFF" : "#000000"
);

const isReady = ref(false);

onMounted(() => {
  isReady.value = true;
});
</script>
