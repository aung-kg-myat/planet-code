<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

const links = [
  { label: "Home", to: "#home" },
  { label: "Services", to: "#services" },
  { label: "About", to: "#about" },
];

const route = useRoute();
const isActive = (path: string) => route.hash === path;
</script>

<template>
  <header
    class="bg-white dark:bg-[#161717]/50 shadow-sm sticky top-0 backdrop-blur-lg z-50 font-mono"
  >
    <UContainer class="flex items-center justify-between py-3">
      <!-- Logo -->
      <NuxtLink to="/" class="text-xl font-bold text-orange-400">
        <nuxt-img
          src="/images/rocket.png"
          format="webp"
          :srcset="`images/rocket.png 480w, images/rocket.png 800w`"
          sizes="(max-width: 600px) 480px, 800px"
          alt="logo"
          class="w-10 h-10"
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
            class="dark:text-white text-sm"
            :class="{ '!text-orange-400': isActive(link.to) }"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </ClientOnly>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden text-gray-700 dark:text-gray-300"
        @click="isMenuOpen = true"
      >
        <UIcon name="i-heroicons-bars-3" class="w-6 h-6" />
      </button>
    </UContainer>

    <!-- Mobile Slide-over Menu -->
    <USlideover v-model="isMenuOpen">
      <UCard class="p-4">
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-semibold">Menu</h2>
          <button @click="isMenuOpen = false">
            <UIcon
              name="i-heroicons-x-mark"
              class="w-6 h-6 text-gray-700 dark:text-gray-300"
            />
          </button>
        </div>

        <nav class="mt-4 space-y-4">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="block text-gray-700 dark:text-gray-300 hover:text-primary"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </UCard>
    </USlideover>
  </header>
</template>
