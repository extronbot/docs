export default defineNuxtConfig({
  extends: ["@nuxt-themes/docus"],
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/docs/favicon.ico" }]
    }
  }
})