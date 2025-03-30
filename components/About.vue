<script setup lang="ts">
import FlikeringGrid from "./FlikeringGrid.vue";
</script>

<template>
  <div id="about" class="max-w-7xl mx-auto">
    <ClientOnly>
      <div class="relative size-[100%] w-full overflow-hidden bg-background">
        <FlikeringGrid
          class="relative inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
          :square-size="4"
          :grid-gap="6"
          color="#FB923C"
          :max-opacity="0.5"
          :flicker-chance="0.1"
          :width="1400"
          :height="700"
        />
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
        >
          <div class="flex items-center justify-center md:gap-8 gap-4 mb-7">
            <div class="flex items-center justify-center">
              <RadiantText
                class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
                :duration="4"
              >
                <span class="md:text-5xl text-3xl font-bold">Space Lab</span>
              </RadiantText>
            </div>
            <img src="/images/rocket.png" alt="logo" class="w-14 h-14" />
          </div>
          <h1 class="text-center font-bold section-title">
            Your Trusted Partner in Software Development
          </h1>
          <p
            class="font-light font-mono text-justify lg:text-lg text-sm px-3 text-gray-400"
          >
            At Space Lab, we are your go-to partner for cutting-edge software
            development, specializing in crafting innovative solutions for web,
            mobile, and enterprise platforms. Whether you need a sleek,
            high-performance website, a robust business management system, or a
            custom software solution tailored to your unique requirements, we
            have the expertise to bring your vision to life. <br /><br />
            At Space Lab, we believe that technology should be a catalyst for
            success. Our approach is deeply collaborative—we take the time to
            understand your challenges, goals, and ambitions, ensuring that our
            solutions not only meet your current needs but also empower your
            long-term vision. With a team of passionate developers, designers,
            and strategists, we combine creativity with technical excellence to
            deliver transformative software solutions that help businesses
            thrive in the digital era. 🚀 Let’s innovate, grow, and redefine
            possibilities together with Space Lab!
          </p>
        </div>
      </div>
    </ClientOnly>
    <!-- <ClientOnly>
        <Tetris
          class="h-[500px] w-full [mask-image:radial-gradient(450px_circle_at_center,#00C16A,transparent)]"
          :base="15"
          square-color="#FB923C"
        />
      </ClientOnly> -->
  </div>
</template>
