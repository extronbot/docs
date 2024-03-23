export default defineNuxtConfig({
  modules: ["@nuxt/image", "nuxt-speedkit"],
  extends: ["@nuxt-themes/docus"],
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/docs/favicon.ico" }]
    }
  },
  speedkit: {
    disableNuxtImage: true,
    disableNuxtFontaine: true
  },
  image: {
    format: ["avif", "webp", "jpg|jpeg|png|gif"],
    /* domains: ["cdn.discord.com"],
    alias: {
      discord: "https://cdn.discord.com"
    } */
  }
})