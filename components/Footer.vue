<template>
  <footer class="bg-slate-900 text-white py-4 relative">
    <Gradient />
    <div class="container mx-auto text-center text-md px-3">
      <div
        class="flex flex-col items-center justify-center md:gap-5 gap-3 my-8"
      >
        <nuxt-img
          src="/logo/planet_code_full.jpeg"
          format="webp"
          :srcset="`/logo/planet_code_full.jpeg 50w, /logo/planet_code_full.jpeg 100w`"
          sizes="(max-width: 600px) 100px, 200px"
          alt="hero-background"
          width="45"
          height="45"
          class="mb-2 rounded-md"
        />
        <div class="flex flex-col items-center justify-center gap-4">
          <p class="font-mono text-[0.85rem]">
            {{ $t("footer.title") }}
          </p>
          <div class="flex justify-center space-x-4">
            <Icon name="uil:facebook" class="w-6 h-6" />
            <Icon name="uil:linkedin" class="w-6 h-6" />
            <Icon name="uil:instagram" class="w-6 h-6" />
          </div>
        </div>
      </div>
      <p class="font-mono text-[0.85rem] mb-10">
        Copyright &copy; {{ year }}
        <nuxt-link
          to="https://planet-code.vercel.app"
          target="_blank"
          class="font-carterOne"
        >
          PLANET
          <span class="text-[#755dcd]">CODE</span>
        </nuxt-link>
        - All rights reserved.
      </p>
    </div>
  </footer>
</template>
<script setup lang="ts">
const year = new Date().getFullYear();
</script>
