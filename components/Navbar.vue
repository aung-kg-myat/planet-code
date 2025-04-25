<script setup lang="ts">
import { ref, onMounted } from "vue";

const isMenuOpen = ref(false);
const isMounted = ref(false);

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

// Set mounted state when component is ready
onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <header
    v-if="isMounted"
    class="bg-slate-600/80 shadow-sm sticky top-0 backdrop-blur-md z-50 font-mono py-1"
  >
    <UContainer class="flex items-center justify-between">
      <!-- Logo -->
      <Transition name="fade-down" appear :style="{ '--delay': `${0.6}s` }">
        <NuxtLink to="/" v-if="isMounted">
          <nuxt-img
            src="/logo/planet_code.png"
            format="webp"
            :srcset="`logo/planet_code.png 480w, logo/planet_code.png 800w`"
            sizes="(max-width: 600px) 480px, 800px"
            alt="logo"
            class="w-16 h-16"
          />
        </NuxtLink>
      </Transition>

      <!-- Desktop Navigation -->
      <ClientOnly>
        <nav class="hidden md:flex space-x-6 items-center justify-center gap-4">
          <Transition
            name="fade-down"
            v-for="(link, index) in links"
            :key="link.to"
            appear
            :css="isMounted"
            :style="{ '--delay': `${index * 0.4}s` }"
          >
            <NuxtLink
              :to="link.to"
              class="text-white text-sm"
              :class="{ '!text-[#755dcd]': isActive(link.to) }"
            >
              <template v-if="link.label === 'Contact'">
                <RainbowButton class="font-carterOne">
                  {{ link.label }}
                </RainbowButton>
              </template>
              <template v-else>
                {{ link.label }}
              </template>
            </NuxtLink>
          </Transition>
        </nav>
      </ClientOnly>

      <!-- Mobile Menu Button -->
      <Transition
        name="fade-down"
        appear
        :style="{ '--delay': `${2 * 0.15}s` }"
      >
        <button class="md:hidden text-gray-300" @click="isMenuOpen = true">
          <UIcon name="i-heroicons-bars-3" class="w-6 h-6" />
        </button>
      </Transition>
    </UContainer>

    <!-- Mobile Slide-over Menu -->
    <div class="flex items-end justify-end w-full">
      <USlideover v-model="isMenuOpen" class="w-[100%] h-full">
        <div
          class="flex justify-between items-center px-6 py-2 lg:px-8 bg-slate-600/80"
        >
          <Transition
            name="fade-down"
            appear
            :style="{ '--delay': `${2 * 0.15}s` }"
          >
            <NuxtLink to="/" v-if="isMounted">
              <nuxt-img
                src="/logo/planet_code.png"
                format="webp"
                :srcset="`logo/planet_code.png 480w, logo/planet_code.png 800w`"
                sizes="(max-width: 600px) 480px, 800px"
                alt="logo"
                class="w-16 h-16"
              />
            </NuxtLink>
          </Transition>
          <Transition
            name="fade-down"
            appear
            :style="{ '--delay': `${2 * 0.15}s` }"
          >
            <button @click="isMenuOpen = false">
              <UIcon name="i-heroicons-x-mark" class="w-6 h-6 text-gray-300" />
            </button>
          </Transition>
        </div>

        <UCard class="p-4 flex items-center justify-center h-full">
          <nav
            class="mt-4 space-y-4 flex flex-col items-center justify-center gap-4"
          >
            <Transition
              name="fade-down"
              v-for="(link, index) in links"
              :key="link.to"
              appear
              :css="isMounted"
              :style="{ '--delay': `${index * 0.15}s` }"
            >
              <NuxtLink
                :to="link.to"
                class="block text-gray-300"
                :class="{
                  '!text-[#755dcd]':
                    isActive(link.to) && link.to !== '#contact',
                }"
                @click="isMenuOpen = false"
              >
                <template v-if="link.label === 'Contact'">
                  <RainbowButton class="font-carterOne">
                    {{ link.label }}
                  </RainbowButton>
                </template>
                <template v-else>
                  {{ link.label }}
                </template>
              </NuxtLink>
            </Transition>
          </nav>
        </UCard>
      </USlideover>
    </div>
  </header>
</template>

<style>
.fade-down-enter-active {
  transition: all 1s ease;
  transition-delay: var(--delay, 0);
}

.fade-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
