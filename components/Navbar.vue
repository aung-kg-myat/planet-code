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
const isActive = (path: string) => {
  if (route.hash === path) {
    return true
  }
}
</script>

<template>
  <header
    class="bg-slate-600/80 shadow-sm sticky top-0 backdrop-blur-md z-50 font-mono py-1"
  >
    <UContainer class="flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/">
        <nuxt-img
          src="/logo/planet_code.png"
          format="webp"
          :srcset="`logo/planet_code.png 480w, logo/planet_code.png 800w`"
          sizes="(max-width: 600px) 480px, 800px"
          alt="logo"
          class="w-16 h-16"
        />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <ClientOnly>
        <nav class="hidden md:flex space-x-6 items-center justify-center gap-4">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="text-white text-sm"
            :class="{ '!text-[#755dcd]': isActive(link.to) }"
          >
            <template v-if="link.label === 'Contact'">
              <RainbowButton
                class="font-carterOne"
              >
              {{ link.label }}
              </RainbowButton>
            </template>
            <template v-else>
              {{ link.label }}
            </template> 
          </NuxtLink>
        </nav>
      </ClientOnly>

      <!-- Mobile Menu Button -->
      <button class="md:hidden text-gray-300" @click="isMenuOpen = true">
        <UIcon name="i-heroicons-bars-3" class="w-6 h-6" />
      </button>
    </UContainer>

    <!-- Mobile Slide-over Menu -->
    <div class="flex items-end justify-end w-full">
      <USlideover v-model="isMenuOpen" class="w-[100%] h-full">
        <div class="flex justify-between items-center px-6 py-2 lg:px-8 bg-slate-600/80">
            <NuxtLink to="/">
              <nuxt-img
                src="/logo/planet_code.png"
                format="webp"
                :srcset="`logo/planet_code.png 480w, logo/planet_code.png 800w`"
                sizes="(max-width: 600px) 480px, 800px"
                alt="logo"
                class="w-16 h-16"
              />
            </NuxtLink>
            <button @click="isMenuOpen = false">
              <UIcon name="i-heroicons-x-mark" class="w-6 h-6 text-gray-300" />
            </button>
        </div>
        <UCard class="p-4 flex items-center justify-center h-full">
          <nav class="mt-4 space-y-4 flex flex-col items-center justify-center gap-4">
            <NuxtLink
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="block text-gray-300"
              :class="{ '!text-[#755dcd]': isActive(link.to) && link.to !== '#contact' }"
              @click="isMenuOpen = false"
            >
              <template v-if="link.label === 'Contact'">
                <RainbowButton
                  class="font-carterOne"
                >
                  {{ link.label }}
                </RainbowButton>
              </template>
              <template v-else>
               {{ link.label }}
              </template> 
            </NuxtLink>
          </nav>
        </UCard>
      </USlideover>
    </div>
    
  </header>
</template>
