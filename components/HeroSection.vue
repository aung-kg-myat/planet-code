<template>
  <div class="relative" id="home">
    <Gradient />
    <section
      class="relative w-full bg-cover bg-center py-20"
      :style="{
        backgroundImage: `url('/images/freepic1.jpg')`,
        backgroundPosition: backgroundPosition,
      }"
    >
      <div class="flex items-center justify-center text-center">
        <div
          class="flex flex-col items-center justify-center space-y-5 md:space-y-5"
        >
          <Transition name="fade-down" appear :style="{ '--delay': `${0.6}s` }">
            <h1
              class="mb-8 md:mb-0 h-[200px] md:h-[145px] text-center font-bold lg:text-5xl text-2xl text-white p-2"
            >
              <Flipwords
                :words="words"
                :duration="3000"
                class="text-center h-full"
              />
            </h1>
          </Transition>

          <div
            class="flex w-full flex-col items-center justify-center overflow-hidden rounded-md gap-5"
          >
            <Transition name="fade-down" appear :style="{ '--delay': `${1}s` }">
              <div class="flex items-center justify-center mt-10">
                <h1
                  class="md:text-7xl text-4xl font-bold font-carterOne text-white"
                >
                  PLANET <span class="text-[#755dcd]">CODE</span>
                </h1>
              </div>
            </Transition>
          </div>

          <ClientOnly>
            <Transition
              name="fade-down"
              appear
              :style="{ '--delay': `${1.5}s` }"
            >
              <Vue3Lottie
                animationLink="/lottie/globe.json"
                :height="250"
                :width="250"
              />
            </Transition>
          </ClientOnly>
          <Transition name="fade-down" appear :style="{ '--delay': `${1.5}s` }">
            <div
              class="flex items-center justify-center max-lg:w-full min-md:flex-1 text-gray-400 lg:text-lg text-md text-balance font-mono leading-10"
            >
              {{ $t("heroSection.message") + " 🚀" }}
            </div>
          </Transition>
        </div>
      </div>
      <div ref="lottieContainer"></div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { Vue3Lottie } from "vue3-lottie";

const backgroundPosition = ref("center 0px");

const updateBackgroundPosition = () => {
  const offset = window.pageYOffset; // Get the current scroll position
  backgroundPosition.value = `center ${offset * 0.5}px`; // Adjust speed (1s for parallax effect)
};

const { t } = useI18n();
const words = computed(() => [
  t("heroSection.phraseOne"),
  t("heroSection.phraseTwo"),
  t("heroSection.phraseThree"),
  t("heroSection.phraseFour"),
  t("heroSection.phraseFive"),
  t("heroSection.phraseSix"),
  t("heroSection.phraseSeven"),
]);

onMounted(() => {
  window.addEventListener("scroll", updateBackgroundPosition);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateBackgroundPosition);
});
</script>
