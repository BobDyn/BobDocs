/// <reference types="node" />
import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
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

type SidebarEntry = { text: string; link?: string; items?: SidebarEntry[] };

function collectLinks(entries: SidebarEntry[]): string[] {
  return entries.flatMap((entry) => [
    ...(entry.link ? [entry.link] : []),
    ...(entry.items ? collectLinks(entry.items) : []),
  ]);
}

// Fails the build if a page under docs/<dirName>/ isn't wired into its
// sidebar section below, so a forgotten sidebar entry can't ship as a
// silently unreachable page.
function assertSidebarCoversDir(dirName: string, entries: SidebarEntry[]) {
  const dirPath = fileURLToPath(new URL(`../${dirName}`, import.meta.url));
  const expectedLinks = readdirSync(dirPath)
    .filter((file) => file.endsWith(".md"))
    .map((file) =>
      file === "index.md"
        ? `/${dirName}/`
        : `/${dirName}/${file.replace(/\.md$/, "")}`,
    );

  const actualLinks = new Set(collectLinks(entries));
  const missing = expectedLinks.filter((link) => !actualLinks.has(link));

  if (missing.length > 0) {
    throw new Error(
      `Sidebar for "/${dirName}/" is missing: ${missing.join(", ")}. ` +
        `Add each page to the sidebar in docs/.vitepress/config.ts.`,
    );
  }
}

const sidebar = {
  "/startup-guide/": [
    page("Choose A Startup Path", "/startup-guide/"),
    {
      text: "BobDyn/BobLib",
      items: [
        page("Startup", "/startup-guide/boblib"),
      ],
    },
    {
      text: "BobDyn/BobSim",
      items: [
        page("Startup", "/startup-guide/bobsim"),
      ],
    },
  ],

  "/use-guide/": [
    page("Choose A Use Path", "/use-guide/"),
    {
      text: "BobDyn/BobLib",
      items: [
        page("Use Guide", "/use-guide/boblib"),
      ],
    },
    {
      text: "BobDyn/BobSim",
      items: [
        page("Use Guide", "/use-guide/bobsim"),
      ],
    },
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
        page("Control Bus",     "/boblib/control-bus"),
        page("Static Templates", "/boblib/generation"),
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
        page("App",            "/bobsim/app"),
        page("Configuration",  "/bobsim/configuration"),
        page("StandardSim",    "/bobsim/standard-sim"),
        page("Archive",        "/bobsim/results"),
        page("EnvelopeSim",    "/bobsim/envelope"),
        page("OptSim / DOE",   "/bobsim/doe"),
        page("Development",    "/bobsim/development"),
      ],
    },
    {
      text: "In Progress",
      items: [
        page("VisualSim",      "/bobsim/visualization"),
      ],
    },
  ],

  "/reference/": [
    {
      text: "Reference",
      items: [
        page("Vehicle Dynamics",            "/reference/vehicle-dynamics"),
        page("FSAE Bridge",                 "/reference/fsae-bridge"),
        page("Vehicle Performance Metrics", "/reference/metrics"),
        page("Engineering Knowledge Base",   "/reference/field-notes"),
      ],
    },
  ],

  "/contributing": [
    page("Contributing", "/contributing"),
  ],
};

assertSidebarCoversDir("startup-guide", sidebar["/startup-guide/"]);
assertSidebarCoversDir("use-guide", sidebar["/use-guide/"]);
assertSidebarCoversDir("boblib", sidebar["/boblib/"]);
assertSidebarCoversDir("bobsim", sidebar["/bobsim/"]);
assertSidebarCoversDir("reference", sidebar["/reference/"]);

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
export default withMermaid(
  defineConfig({
    title: "BobDyn",
    description: "A high-fidelity, open-source vehicle simulation framework",

    cleanUrls: true,

    appearance: "force-dark",

    lastUpdated: true,

    sitemap: { hostname: "https://bobdyn.com" },

    head: [
      ["link", { rel: "icon", href: "/bobdyn.png" }],
      ["meta", { property: "og:type", content: "website" }],
      ["meta", { property: "og:site_name", content: "BobDyn" }],
      ["meta", { property: "og:title", content: "BobDyn" }],
      [
        "meta",
        {
          property: "og:description",
          content: "A high-fidelity, open-source vehicle simulation framework",
        },
      ],
      ["meta", { property: "og:url", content: "https://bobdyn.com/" }],
      ["meta", { property: "og:image", content: "https://bobdyn.com/bobdyn.png" }],
      ["meta", { name: "twitter:card", content: "summary" }],
      ["meta", { name: "twitter:title", content: "BobDyn" }],
      [
        "meta",
        {
          name: "twitter:description",
          content: "A high-fidelity, open-source vehicle simulation framework",
        },
      ],
      ["meta", { name: "twitter:image", content: "https://bobdyn.com/bobdyn.png" }],
    ],

    markdown: {
      defaultHighlightLang: "txt",
      languageAlias: { modelica: "txt", mo: "txt" },
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
            { text: "Reference", link: "/reference/vehicle-dynamics" },
          ],
        },
        { text: "Contributing", link: "/contributing" },
      ],

      sidebar,

      socialLinks: [{ icon: "github", link: "https://github.com/BobDyn" }],

      footer: {
        message: "Released as open-source vehicle simulation tooling.",
        copyright: "Copyright © 2026 BobDyn",
      },

      search: { provider: "local" },
    },
  })
);
