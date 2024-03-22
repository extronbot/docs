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
    detection: {
      performance: true,
      browserSupport: true
    },

    performanceMetrics: {
      timing: {
        fcp: 800,
        dcl: 1200
      }
    },

    /* fonts: [{
      family: "Font A",
      locals: ["Font A"],
      fallback: ["Arial", "sans-serif"],
      variances: [
        {
          style: "normal",
          weight: 400,
          sources: [
            { src: "@/assets/fonts/font-a-regular.woff", type:"woff" },
            { src: "@/assets/fonts/font-a-regular.woff2", type:"woff2" }
          ]
        }, {
          style: "italic",
          weight: 400,
          sources: [
            { src: "@/assets/fonts/font-a-regularItalic.woff", type:"woff" },
            { src: "@/assets/fonts/font-a-regularItalic.woff2", type:"woff2" }
          ]
        }, {
          style: "normal",
          weight: 700,
          sources: [
            { src: "@/assets/fonts/font-a-700.woff", type:"woff" },
            { src: "@/assets/fonts/font-a-700.woff2", type:"woff2" }
          ]
        }
      ]
    }], */

    //targetFormats: ["webp", "avif", "jpg|jpeg|png|gif"],

    componentAutoImport: false,
    componentPrefix: undefined,

    lazyOffset: {
      component: "0%",
      asset: "0%"
    }
  },
  image: {
    screens: {
      default: 320,
      xxs: 480,
      xs: 576,
      sm: 768,
      md: 996,
      lg: 1200,
      xl: 1367,
      xxl: 1600,
      "4k": 1921
    },
    format: ["avif", "webp"],
    domains: ["img.youtube.com", "i.vimeocdn.com"],
    alias: {
      youtube: "https://img.youtube.com",
      vimeo: "https://i.vimeocdn.com",
    }
  }
})