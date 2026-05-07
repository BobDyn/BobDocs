import { defineConfig } from "vitepress";

export default defineConfig({
  title: "BobDyn",
  description: "A high-fidelity, open-source vehicle simulation framework",

  cleanUrls: true,

  themeConfig: {
    logo: "/bob.png",
    siteTitle: "BobDyn",

    nav: [
      { text: "Get Started", link: "/get-started/" },
      { text: "Documentation", link: "/docs/" },
      { text: "Reference", link: "/reference/" },
    ],

    sidebar: {
      "/get-started/": [
        {
          text: "Get Started",
          items: [
            { text: "Overview", link: "/get-started/" },
          ],
        },
      ],

      "/docs/": [
        {
          text: "Documentation",
          items: [
            { text: "Overview", link: "/docs/" },
            { text: "Architecture", link: "/docs/architecture" },
            { text: "BobLib", link: "/docs/boblib" },
            { text: "BobSim", link: "/docs/bobsim" },
            { text: "Standards", link: "/docs/standards" },
            { text: "Reporting", link: "/docs/reporting" },
          ],
        },
      ],

      "/reference/": [
        {
          text: "Reference",
          items: [
            { text: "Overview", link: "/reference/" },
            { text: "Configuration", link: "/reference/configuration" },
            { text: "Signals", link: "/reference/signals" },
            { text: "Outputs", link: "/reference/outputs" },
            { text: "Glossary", link: "/reference/glossary" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/BobDyn" },
    ],

    footer: {
      message: "Released as open-source vehicle simulation tooling.",
      copyright: "Copyright © 2026 BobDyn",
    },

    search: {
      provider: "local",
    },
  },
});