<script setup lang="ts">
import FlikeringGrid from "./FlikeringGrid.vue";
</script>

<template>
  <div id="about" class="w-full relative">
    <Gradient />
    <ClientOnly>
      <div
        class="relative h-[1000px] md:h-screen w-full overflow-hidden bg-background"
        data-aos="fade-down"
      >
        <nuxt-img
          src="/images/freepic1.jpg"
          format="webp"
          :srcset="`/images/freepic1.jpg 480w, /images/freepic1.jpg 800w`"
          sizes="(max-width: 600px) 480px, 800px"
          alt="hero-background"
          class="w-full h-[1000px] md:h-screen"
        />
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
        >
          <div class="flex items-center justify-center gap-2 mb-7">
            <div class="flex items-center justify-center">
              <RadiantText
                class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
                :duration="4"
              >
                <span class="md:text-5xl text-2xl font-bold font-carterOne"
                  ><span class="text-white">PLANET</span> CODE</span
                >
              </RadiantText>
            </div>
            <img
              src="/logo/planet_code_full.jpeg"
              alt="logo"
              class="md:w-24 md:h-24 w-16 h-16 rounded-lg"
            />
          </div>
          <h1 class="text-center font-bold section-title px-8 font-carterOne">
            Your Trusted Partner in Software Development
          </h1>
          <p
            class="font-light font-mono text-justify lg:text-lg text-sm px-8 text-gray-400 max-w-7xl mx-auto"
          >
            At
            <span class="font-carterOne"
              >PLANET <span class="!text-[#755dcd]">CODE</span></span
            >, we are your go-to partner for cutting-edge software development,
            specializing in crafting innovative solutions for web, mobile, and
            enterprise platforms. Whether you need a sleek, high-performance
            website, a robust business management system, or a custom software
            solution tailored to your unique requirements, we have the expertise
            to bring your vision to life. <br /><br />
            At
            <span class="font-carterOne"
              >PLANET <span class="!text-[#755dcd]">CODE</span></span
            >, we believe that technology should be a catalyst for success. Our
            approach is deeply collaborative—we take the time to understand your
            challenges, goals, and ambitions, ensuring that our solutions not
            only meet your current needs but also empower your long-term vision.
            With a team of passionate developers, designers, and strategists, we
            combine creativity with technical excellence to deliver
            transformative software solutions that help businesses thrive in the
            digital era. 🚀 Let’s innovate, grow, and redefine possibilities
            together with
            <span class="font-carterOne"
              >PLANET <span class="!text-[#755dcd]">CODE</span></span
            >!
          </p>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>
