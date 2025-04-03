<template>
  <footer class="bg-slate-900 text-white py-4 relative">
    <Gradient />
    <div class="container mx-auto text-center text-md" data-aos="fade-down">
      <nuxt-img
        src="/logo/planet_code.png"
        format="webp"
        :srcset="`/logo/planet_code.png 480w, /logo/planet_code.png 800w`"
        sizes="(max-width: 600px) 480px, 800px"
        alt="hero-background"
        class="w-24 h-24 mx-auto"
      />

      <p class="font-mono text-[0.85rem] mb-1 italic">
        Providing reliable software solutions
      </p>
      <div class="flex justify-center space-x-4 mb-9">
        <Icon name="uil:facebook" class="w-6 h-6" />
        <Icon name="uil:linkedin" class="w-6 h-6" />
        <Icon name="uil:instagram" class="w-6 h-6" />
      </div>
      <p class="font-mono text-[0.85rem]">
        Copyright &copy; {{ year }}
        <nuxt-link
          to="https://planet-code.vercel.app"
          target="_blank"
          class="font-carterOne"
        >
          PLANET
          <span class="text-orange-400">CODE</span>
        </nuxt-link>
        - All rights reserved.
      </p>
    </div>
  </footer>
</template>
<script setup lang="ts">
const year = new Date().getFullYear();
</script>
