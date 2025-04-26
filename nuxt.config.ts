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
      link: [
        {
          rel: "icon",
          type: "image/jpeg",
          href: "/logo/planet_code_full.jpeg",
        },
      ],
    },
  },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "nuxt-aos",
    "nuxt3-notifications",
    "@nuxt/icon",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],
  aos: {
    duration: 500, // Global duration for all animations
    easing: "ease in",
    once: false, // Set to true if you only want animations to run once
  },
  site: {
    url: "https://planet-code.vercel.app",
    name: "Planet Code Software Solution", // Primary name
    // For alternate names (SEO-friendly):
    alternates: {
      names: {
        short: "Planet Code",
        legal: "Planet Code Software Solutions Co., Ltd.",
      },
    },
  },
});
