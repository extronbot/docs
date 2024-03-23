export default defineAppConfig({
  docus: {
    title: "404",
    titleTemplate: "%s %separator Extron Documentation",
    //description: "The best place to start your documentation.",
    header: { logo: true },
    footer: {
      iconLinks: [
        {
          href: "/vote",
          icon: "simple-icons:topdotgg",
          target: "_blank",
          label: "Vote"
        },
        {
          href: "/support",
          icon: "simple-icons:discord",
          label: "Support Server",
          target: "_blank"
        }
      ]
    }
  }
})