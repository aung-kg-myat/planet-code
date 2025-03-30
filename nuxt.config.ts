// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/ui", "@nuxt/image", "nuxt-aos"],
  aos: {
    duration: 900, // Global duration for all animations
    easing: "ease",
    once: false, // Set to true if you only want animations to run once
  },
});
