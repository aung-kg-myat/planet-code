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
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/logo/planet_code.png" }],
    },
  },
  modules: ["@nuxt/ui", "@nuxt/image", "nuxt-aos", "nuxt3-notifications", "@nuxt/icon"],
  aos: {
    duration: 900, // Global duration for all animations
    easing: "ease",
    once: false, // Set to true if you only want animations to run once
  },
});