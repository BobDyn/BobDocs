import { defineConfig } from "vitepress";
import mathjax3 from "markdown-it-mathjax3";
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid(
  defineConfig({
    title: "BobDyn",
    description: "A high-fidelity, open-source vehicle simulation framework",

    cleanUrls: true,

    markdown: {
      defaultHighlightLang: "txt",
      languageAlias: {
        modelica: "txt",
      },
      config: (md) => {
        md.use(mathjax3);
      },
    },

    themeConfig: {
      logo: "/bob.png",
      siteTitle: "BobDyn",

      nav: [
        { text: "Startup Guide", link: "/startup-guide/" },
        { text: "Use Guide", link: "/use-guide/" },
        {
          text: "Documentation",
          items: [
            { text: "BobLib", link: "/boblib/" },
            { text: "BobSim", link: "/bobsim/" },
            { text: "Reference", link: "/reference/" },
          ],
        },
      ],

      sidebar: {
        "/startup-guide/": [
          {
            text: "Startup Guide",
            items: [{ text: "Overview", link: "/startup-guide/" }],
          },
        ],

        "/use-guide/": [
          {
            text: "Use Guide",
            items: [{ text: "Overview", link: "/use-guide/" }],
          },
        ],

        "/reference/": [
          {
            text: "Reference",
            collapsed: false,
            items: [
              { text: "Overview", link: "/reference/" },
              {
                text: "Vehicle Dynamics",
                collapsed: false,
                items: [{ text: "Vehicle Performance Metrics", link: "/reference/metrics" }],
              },
              {
                text: "Control Foundations",
                collapsed: false,
                items: [{ text: "Control Theory", link: "/reference/control-theory" }],
              },
            ],
          },
        ],
      },

      socialLinks: [{ icon: "github", link: "https://github.com/BobDyn" }],

      footer: {
        message: "Released as open-source vehicle simulation tooling.",
        copyright: "Copyright © 2026 BobDyn",
      },

      search: {
        provider: "local",
      },
    },
  })
);
