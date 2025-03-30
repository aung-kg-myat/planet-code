<template>
  <div id="team" class="my-8">
    <div class="flex items-center justify-center">
      <SparklesText
        text="Our Team"
        :colors="{ first: '#fff', second: '#FE8BBB' }"
        :sparkles-count="5"
        class="md:text-5xl text-3xl font-bold text-orange-400"
      />
    </div>
    <div class="flex items-center justify-center my-10 gap-4">
      <div>
        <GlareCard class="flex flex-col items-center justify-center relative">
          <nuxt-img
            src="/team/akm.jpg"
            format="webp"
            :srcset="`team/akm.jpg 480w, team/akm.jpg 800w`"
            sizes="(max-width: 600px) 480px, 800px"
            alt="team-member"
            class="w-full h-full z-10"
          />
          <div class="z-20 absolute bottom-[0.7rem] bg-black/60 w-full">
            <h1 class="mt-2 text-lg font-bold text-white text-center">
              Mr Aung Kaung Myat
            </h1>
            <p
              class="mb-2 font-bold font-mono text-xs text-center text-slate-300"
            >
              Software Engineer & Founder
            </p>
          </div>
        </GlareCard>
        <div
          class="flex items-center justify-center gap-2 bg-black/90 dark:bg-white rounded-b-[10px]"
        >
          <nuxt-link
            to="https://www.linkedin.com/in/aung-kaung-myat-a82700222/"
            target="_blank"
            class="z-50"
          >
            <UIcon name="i-mdi:linkedin" class="w-6 h-6 text-[#0077B5]" />
          </nuxt-link>
          <nuxt-link to="https://www.facebook.com/aung.akm2000" target="_blank">
            <UIcon name="i-mdi:facebook-box" class="w-6 h-6 text-[#1877F2]" />
          </nuxt-link>
          <nuxt-link to="https://t.me/aung_kg_myat" target="_blank">
            <UIcon name="i-mdi:telegram" class="w-6 h-6 text-[#0088CC]" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
