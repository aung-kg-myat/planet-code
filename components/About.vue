<script setup lang="ts">
const backgroundPosition = ref("center 0px");

const updateBackgroundPosition = () => {
  const offset = window.pageYOffset; // Get the current scroll position
  backgroundPosition.value = `center ${offset * 0.5}px`; // Adjust speed (0.5s for parallax effect)
};

onMounted(() => {
  window.addEventListener("scroll", updateBackgroundPosition);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateBackgroundPosition);
});
</script>

<template>
  <div id="about" class="w-full relative">
    <Gradient />
    <section
      class="relative w-full md:h-screen h-full py-10 bg-cover bg-center"
      :style="{
        backgroundImage: `url('/images/freepic1.jpg')`,
        backgroundPosition: backgroundPosition,
      }"
    >
      <ClientOnly>
        <div
          class="relative w-full h-full overflow-hidden bg-background flex items-center justify-center"
          data-aos="fade-down"
        >
          <div>
            <div class="flex items-center justify-center gap-2 mb-7">
              <div class="flex items-center justify-center">
                <RadiantText
                  class="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400"
                  :duration="4"
                >
                  <span class="md:text-5xl text-2xl font-bold font-carterOne">
                    <span class="text-white">PLANET</span> CODE
                  </span>
                </RadiantText>
              </div>
              <img
                src="/logo/planet_code_full.jpeg"
                alt="logo"
                class="md:w-24 md:h-24 w-16 h-16 rounded-lg"
              />
            </div>
            <h1 class="text-center font-bold section-title font-carterOne">
              {{ $t("about.title") }}
            </h1>
            <p
              class="font-light font-mono text-justify lg:text-lg text-sm px-8 text-gray-400 max-w-7xl mx-auto !leading-[2rem]"
            >
              {{ $t("about.paragraphOne") }} <br /><br />
              {{ $t("about.paragraphTwo") }}
            </p>
          </div>
        </div>
      </ClientOnly>
    </section>
  </div>
</template>
