// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: "static",
  router: { base: "/interior/" },
  compatibilityDate: "2024-04-03",

  devtools: { enabled: true },

  modules: [
    "@nuxt/image",
    "@nuxt/fonts",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "nuxt-typed-router",
    "nuxt-swiper",
  ],

  fonts: {
    families: [{ name: "Montserrat", provider: "google" }],
  },

  css: ["~/assets/scss/global.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/_vars.scss" as *;
            @use "~/assets/scss/_mixins.scss" as *;
          `,
        },
      },
    },
  },

  swiper: {
    styleLang: "css",
    modules: ["navigation", "pagination"],
  },
});
