/// <reference types="node" />
import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitepress";
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
    page("Getting started", "/startup-guide/"),
    page("BobSim installation", "/startup-guide/bobsim"),
    page("Desktop and native Python", "/startup-guide/bobsim-without-docker"),
    page("BobSim troubleshooting", "/startup-guide/bobsim-troubleshooting"),
    page("BobLib first run", "/startup-guide/boblib"),
  ],
  "/use-guide/": [
    page("Workflows", "/use-guide/"),
    page("BobSim workflow", "/use-guide/bobsim"),
    page("BobSim command line", "/use-guide/bobsim-cli"),
    page("BobLib workflow", "/use-guide/boblib"),
  ],
  "/boblib/": [
    page("BobLib", "/boblib/"),
    {
      text: "Working with the library",
      items: [
        page("Setup", "/boblib/setup"),
        page("OMEdit workflow", "/boblib/omedit-workflow"),
        page("Command line", "/boblib/cli-workflow"),
        page("Troubleshooting", "/boblib/troubleshooting"),
      ],
    },
    {
      text: "Model structure",
      items: [
        page("Package map", "/boblib/package-map"),
        page("Records and templates", "/boblib/generation"),
        page("Entry points", "/boblib/entry-points"),
        page("Control bus", "/boblib/control-bus"),
      ],
    },
    {
      text: "Development",
      items: [
        page("Tests and checks", "/boblib/testing"),
        page("Development", "/boblib/development"),
        page("Unreleased preview", "/boblib/unreleased"),
      ],
    },
  ],
  "/bobsim/": [
    page("BobSim", "/bobsim/"),
    {
      text: "Workspace",
      items: [
        page("Vehicle setup", "/bobsim/configuration"),
        page("Models and fidelity", "/bobsim/models"),
        page("Simulation workspace", "/bobsim/app"),
      ],
    },
    {
      text: "Analyses",
      items: [
        page("Response and four post", "/bobsim/standard-sim"),
        page("GGV and yaw moment diagrams", "/bobsim/envelope"),
        page("Tracks and racing lines", "/bobsim/tracks"),
        page("Lap simulation", "/bobsim/laptime"),
        page("Parameter studies", "/bobsim/doe"),
      ],
    },
    {
      text: "Results and integration",
      items: [
        page("Results and saved data", "/bobsim/results"),
        page("Animation and signals", "/bobsim/visualization"),
        page("Lotus SHARK import", "/bobsim/lotus-shark-import"),
        page("Development", "/bobsim/development"),
      ],
    },
  ],

  "/reference/": [
    {
      text: "Reference",
      items: [
        page("Source versions", "/reference/versions"),
        page("Vehicle Dynamics",            "/reference/vehicle-dynamics"),
        page("Tire Behavior",               "/reference/tires"),
        page("FSAE Bridge",                 "/reference/fsae-bridge"),
        page("Single-Season Validation",    "/reference/fsae-season-plan"),
        page("Vehicle Performance Metrics", "/reference/metrics"),
        page("Choosing Metrics",            "/reference/choosing-metrics"),
      ],
    },
    {
      text: "Engineering Knowledge Base",
      link: "/reference/field-notes/",
      items: [
        page("Math And Modeling",             "/reference/field-notes/math-and-modeling"),
        page("Mechanics And Materials",       "/reference/field-notes/mechanics-and-materials"),
        page("Signals And Controls",          "/reference/field-notes/signals-and-controls"),
        page("Thermal And Fluids",            "/reference/field-notes/thermal-and-fluids"),
        page("Vehicles And Tires",            "/reference/field-notes/vehicles-and-tires"),
        page("Data And Computation",          "/reference/field-notes/data-and-computation"),
        page("Embedded Systems And Software", "/reference/field-notes/embedded-and-software"),
        page("Design And Manufacturing",      "/reference/field-notes/design-and-manufacturing"),
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
assertSidebarCoversDir("reference/field-notes", sidebar["/reference/"]);

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
export default withMermaid(
  defineConfig({
    title: "BobDyn",
    description: "Vehicle models and analysis documentation",

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
          content: "Vehicle models and analysis documentation",
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
          content: "Vehicle models and analysis documentation",
        },
      ],
      ["meta", { name: "twitter:image", content: "https://bobdyn.com/bobdyn.png" }],
    ],

    markdown: {
      defaultHighlightLang: "txt",
      languageAlias: { modelica: "txt", mo: "txt" },
      math: true,
    },

    mermaid: {
      htmlLabels: false,
      fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
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
        { text: "Getting started", link: "/startup-guide/" },
        { text: "BobSim", link: "/bobsim/" },
        { text: "BobLib", link: "/boblib/" },
        { text: "Reference", link: "/reference/vehicle-dynamics" },
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
