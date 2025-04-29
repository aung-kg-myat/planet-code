<template>
  <div class="w-full py-12 bg-gray-900">
    <div class="mx-auto w-full px-4 md:px-8">
      <div
        v-if="props.title"
        class="text-center text-white font-medium text-muted-foreground font-carterOne md:text-2xl text-lg"
      >
        <div class="flex items-center justify-center">
          <RadiantText
            class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 text-white/70"
            :duration="4"
          >
            {{ props.title }}
          </RadiantText>
        </div>
      </div>
      <div
        :class="
          cn(
            'mask-animation group relative mt-6 flex gap-6 overflow-hidden p-2',
            props.class
          )
        "
      >
        <div
          v-for="index in Array(5).fill(null)"
          :key="index"
          class="animate-logo-cloud flex shrink-0 flex-row justify-around gap-6"
        >
          <div
            v-for="(logo, key) in props.logos"
            :key="key"
            class="flex flex-col items-center justify-center gap-1"
          >
            <img
              :src="logo.path"
              :alt="logo.name"
              class="h-12 w-16 px-2 rounded-xl"
            />
            <p class="font-carterOne text-xs text-white">{{ logo.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";

interface Logo {
  name: string;
  path: string;
}
interface AnimateLogoCloudProps {
  class?: string;
  title?: string;
  logos?: Logo[];
}
const props = defineProps<AnimateLogoCloudProps>();
</script>

<style scoped>
.mask-animation {
  mask-image: linear-gradient(
    to left,
    transparent 0%,
    black 20%,
    black 80%,
    transparent 95%
  );
}

.animate-logo-cloud {
  animation: logo-cloud 30s linear infinite;
}

@keyframes logo-cloud {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-100% - 4rem));
  }
}
</style>
