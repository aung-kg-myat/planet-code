<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

const links = [
  { label: "Home", to: "#home" },
  { label: "Services", to: "#services" },
  { label: "About", to: "#about" },
  { label: "Projects", to: "#projects" },
  { label: "Testimonials", to: "#testimonials" },
  { label: "Contact", to: "#contact" },
];

const route = useRoute();
const isActive = (path: string) => route.hash === path;
</script>

<template>
  <header
    class="bg-slate-900 shadow-sm sticky top-0 backdrop-blur-md z-50 font-mono py-1"
  >
    <UContainer class="flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="text-xl font-bold text-orange-400">
        <nuxt-img
          src="/logo/planet_code.png"
          format="webp"
          :srcset="`logo/planet_code.png 480w, logo/planet_code.png 800w`"
          sizes="(max-width: 600px) 480px, 800px"
          alt="logo"
          class="w-14 h-14"
        />
        <!-- Space <span class="text-white">Lab</span> -->
      </NuxtLink>

      <!-- Desktop Navigation -->
      <ClientOnly>
        <nav class="hidden md:flex space-x-6">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="text-white text-sm"
            :class="{ '!text-orange-400': isActive(link.to) }"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </ClientOnly>

      <!-- Mobile Menu Button -->
      <button class="md:hidden text-gray-300" @click="isMenuOpen = true">
        <UIcon name="i-heroicons-bars-3" class="w-6 h-6" />
      </button>
    </UContainer>

    <!-- Mobile Slide-over Menu -->
    <USlideover v-model="isMenuOpen">
      <UCard class="p-4">
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-semibold">Menu</h2>
          <button @click="isMenuOpen = false">
            <UIcon name="i-heroicons-x-mark" class="w-6 h-6 text-gray-300" />
          </button>
        </div>

        <nav class="mt-4 space-y-4">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="block text-gray-300 hover:text-primary"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </UCard>
    </USlideover>
  </header>
</template>
