export default defineNuxtConfig({
  extends: ["@nuxt-themes/docus"],
  devtools: { enabled: true },
  modules: ["@nuxt/image"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/docs/favicon.ico" }]
    }
  },
  image: {
    format: ['avif', 'webp']
  }
})