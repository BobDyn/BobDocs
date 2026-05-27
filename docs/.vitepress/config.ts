/// <reference types="node" />
import { defineConfig } from "vitepress";
import mathjax3 from "markdown-it-mathjax3";
import { withMermaid } from "vitepress-plugin-mermaid";

// ---------------------------------------------------------------------------
// Sidebar helpers
// Build page-level sidebar entries. In-page headings are handled by the right
// outline, so the left sidebar stays focused on document navigation.
// ---------------------------------------------------------------------------
function page(title: string, urlPath: string) {
  return { text: title, link: urlPath };
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
export default withMermaid(
  defineConfig({
    title: "BobDyn",
    description: "A high-fidelity, open-source vehicle simulation framework",

    cleanUrls: true,

    head: [["link", { rel: "icon", href: "/bobdyn.png" }]],

    markdown: {
      defaultHighlightLang: "txt",
      languageAlias: { modelica: "txt" },
      config: (md) => { md.use(mathjax3); },
    },

    mermaid: {
      htmlLabels: false,
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Ubuntu, sans-serif",
      themeVariables: {
        fontSize: "15px",
      },
      flowchart: {
        nodeSpacing: 52,
        rankSpacing: 72,
        padding: 24,
      },
    },

    themeConfig: {
      logo: "/bobdyn.png",
      siteTitle: "BobDyn",

      outline: 2,

      nav: [
        { text: "Startup Guide", link: "/startup-guide/" },
        { text: "Use Guide",     link: "/use-guide/" },
        {
          text: "Documentation",
          items: [
            { text: "BobDyn/BobLib", link: "/boblib/" },
            { text: "BobDyn/BobSim", link: "/bobsim/" },
            { text: "Reference", link: "/reference/" },
          ],
        },
        { text: "Contributing", link: "/contributing" },
      ],

      sidebar: {
        "/startup-guide/": [
          page("Startup Guide", "/startup-guide/"),
        ],

        "/use-guide/": [
          page("Use Guide", "/use-guide/"),
        ],

        "/boblib/": [
          {
            text: "BobDyn/BobLib",
            items: [
              page("Overview",        "/boblib/"),
              page("Setup",           "/boblib/setup"),
              page("CLI Workflow",    "/boblib/cli-workflow"),
              page("OMEdit Workflow", "/boblib/omedit-workflow"),
              page("Package Map",     "/boblib/package-map"),
              page("Generation",      "/boblib/generation"),
              page("Entry Points",    "/boblib/entry-points"),
              page("Development",     "/boblib/development"),
              page("Troubleshooting", "/boblib/troubleshooting"),
            ],
          },
        ],

        "/bobsim/": [
          {
            text: "BobDyn/BobSim",
            items: [
              page("Overview",       "/bobsim/"),
              page("Configuration",  "/bobsim/configuration"),
              page("StandardSim",    "/bobsim/standard-sim"),
              page("Results",        "/bobsim/results"),
              page("Visualization",  "/bobsim/visualization"),
              page("EnvelopeSim",    "/bobsim/envelope"),
              page("OptSim / DOE",   "/bobsim/doe"),
              page("Development",    "/bobsim/development"),
            ],
          },
        ],

        "/reference/": [
          {
            text: "Reference",
            items: [
              page("Reference",                   "/reference/"),
              page("Vehicle Dynamics",            "/reference/vehicle-dynamics"),
              page("Vehicle Performance Metrics", "/reference/metrics"),
              page("Control Theory",              "/reference/control-theory"),
            ],
          },
        ],

        "/contributing": [
          page("Contributing", "/contributing"),
        ],
      },

      socialLinks: [{ icon: "github", link: "https://github.com/BobDyn" }],

      footer: {
        message: "Released as open-source vehicle simulation tooling.",
        copyright: "Copyright © 2026 BobDyn",
      },

      search: { provider: "local" },
    },
  })
);
