<template>
  <div id="team" class="py-28 bg-black relative">
    <Gradient />
    <div
      class="flex items-center justify-center font-carterOne"
      data-aos="fade-down"
    >
      <SparklesText
        :text="$t('team.title')"
        :colors="{ first: '#fff', second: '#FE8BBB' }"
        :sparkles-count="5"
        class="md:text-5xl text-3xl font-bold text-[#755dcd]"
      />
    </div>
    <div class="flex items-center justify-center my-10 gap-4 flex-wrap">
      <div data-aos="fade-down">
        <GlareCard class="flex flex-col items-center justify-center relative">
          <nuxt-img
            src="/team/akm.jpg"
            format="webp"
            :srcset="`team/akm.jpg 480w, team/akm.jpg 800w`"
            sizes="(max-width: 600px) 480px, 800px"
            alt="team-member"
            class="w-full h-full z-10"
          />
          <div class="z-20 absolute bottom-[0.7rem] bg-black/80 w-full">
            <h1 class="text-lg font-bold text-white text-center font-carterOne">
              Mr Aung Kaung Myat
            </h1>
            <p
              class="mb-1 font-bold font-carterOne text-xs text-center text-[#755dcd]"
            >
              Software Engineer & Founder
            </p>
            <p
              class="text-[0.65rem] text-center font-mono font-light text-slate-300 mb-1"
            >
              4 years of experience in software development, specializing in web
              applications development.
            </p>
          </div>
        </GlareCard>
        <div
          class="flex items-center justify-center gap-5 bg-gradient-to-r from-blue-700 to-orange-900 rounded-b-3xl pt-2"
        >
          <nuxt-link
            to="https://www.linkedin.com/in/aung-kaung-myat-a82700222/"
            target="_blank"
            class="z-50"
          >
            <UIcon name="i-mdi:linkedin" class="w-6 h-6 text-white" />
          </nuxt-link>
          <nuxt-link to="https://www.facebook.com/aung.akm2000" target="_blank">
            <UIcon name="i-mdi:facebook-box" class="w-6 h-6 text-white" />
          </nuxt-link>
          <nuxt-link to="https://t.me/aung_kg_myat" target="_blank">
            <UIcon name="i-mdi:telegram" class="w-6 h-6 text-white" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
