export default defineAppConfig({
  docus: {
    title: "Extron Documentation",
    //description: "The best place to start your documentation.",
    header: { logo: true },
    footer: {
      iconLinks: [
        {
          href: "https://extron.netlify.app/vote",
          icon: "simple-icons:topdotgg",
          target: "_blank",
          label: "Vote"
        },
        {
          href: "https://extron.netlify.app/support",
          icon: "simple-icons:discord",
          label: "Support Server",
          target: "_blank"
        }
      ]
    }
  }
})