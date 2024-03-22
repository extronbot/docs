export default defineNuxtConfig({
  extends: ["@nuxt-themes/docus"],
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/docs/favicon.ico" }]
    }
  },
  routeRules:{
    "/docs/support": { redirect: { to: "https://extron.netlify.app/support", statusCode: 301 } },
    "/docs/invite": { redirect: { to: "https://extron.netlify.app/invite", statusCode: 301 } },
    "/docs/vote": { redirect: { to: "https://extron.netlify.app/vote", statusCode: 301 } }
  }
})