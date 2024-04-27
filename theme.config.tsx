import { defineTheme, directory, group, link, social } from "@neato/guider/theme"
import { Logo } from "./components/logo"

export default defineTheme({
  settings: {
    colors: {
      primary: "#337FD5",
      primaryDarker: "#2465af",
      primaryLighter: "#669fdf",
      textLighter: "#337fd5",
      background: "#050e1e",
      backgroundLighter: "#07142a",
      backgroundLightest: "#07142a",
      backgroundDarker: "#07142a",
      line: "#1b4c83",
  
      codeWarning: "#222D20",
      codeError: "#2B1B1F",
      codeGreen: "#0B2823",
      codeHighlight: "#0E2429", 
      codeWordHighlight: "#365C68",
  
      /* semanticTip: "#39B864",
      semanticTipLighter: "#75F2B6", */
      semanticNote: "#337fd5",
      semanticNoteLighter: "#669fdf",
      /* semanticImportant: "#A958E8",
      semanticImportantLighter: "#D3A2F9", */
      /* semanticWarning: "#C0BC43",
      semanticWarningLighter: "#ECE873", */
      /* semanticCaution: "#FC6359",
      semanticCautionLighter: "#FFA59F" */
    },
    backgroundPattern: "flare",
    logo: () => <Logo/>
  },
  contentFooter: {
    text: "© 2024 Extron - All rights reserved",
    socials: [
      social.discord("https://extron.netlify.app/support"),
      social.github("https://extron.netlify.app/github")
    ]
  },
  meta: {
    /* <meta property="og:title" content="Extron | Discord Bot">
    <meta property="og:image" content="https://extron.netlify.app/banner.png">
    <meta property="og:description" content="Extron is a quality music bot which makes you feel the music and its beats. It supports Spotify, Youtube & more!">
    <meta property="og:url" content="https://extron.netlify.app"></meta> */
    titleTemplate: "%s | Extron Documentation",
    themeColor: "#050e1e",
    twitter: {
      cardType: "summary_large_image"
    },
    additionalLinkTags: [{
      rel: "icon",
      href: "/favicon.ico"
    }],
    openGraph: {
      title: "Extron Documentation",
      url: "https://extron.netlify.app/docs",
      description: "Extron is a quality music bot which makes you feel the music and its beats. It supports Spotify, Youtube & more!",
      images: [{
        url: "https://extron.netlify.app/banner.png",
        width: 1200,
        height: 630,
        alt: "Extron Banner"
      }]
    }
  },
  navigation: [
    link("Invite", "https://extron.netlify.app/invite", { newTab: true, icon: "mdi:link-variant" }),
    link("Support", "https://extron.netlify.app/support", { newTab: true, icon: "fa6-brands:discord" })
  ],
  directories: [
    directory("main", {
      sidebar: [
        link("Documentation", "/"),
        link("Invite Extron to your server", "https://extron.netlify.app/invite", { newTab: true, icon: "mdi:link-variant" }),
        group("Getting Started", [
          link.nested("Setting up the bot", [
            link("Granting permissions", "/setup/granting-permissions"),
            link("Bot prefix", "/setup/bot-prefix")
          ]),
          link("Voting rewards", "/setup/voting-rewards"),
          link("Commands", "/setup/commands")
        ]),
        group("Features", [
          link("Music", "/features/music")
        ]),
        group("Troubleshooting", [
          link("Common issues", "/troubleshooting/common-issues"),
          link("Server status", "https://extron.netlify.app/status", { newTab: true, icon: "mdi:link-variant" })
        ]),
        group("Legal", [
          link("Privacy Policy", "https://extron.netlify.app/privacy", { newTab: true, icon: "mdi:link-variant" }),
          link("Terms of Use", "https://extron.netlify.app/terms", { newTab: true, icon: "mdi:link-variant" })
        ])
      ]
    })
  ]
})