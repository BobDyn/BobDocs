# Agent Notes

BobDocs is the VitePress site published at [bobdyn.com](https://bobdyn.com). It
documents two other repos: **BobSim** (the analysis workspace) and **BobLib**
(the Modelica vehicle library). Nothing here is the source of truth for how
those work.

## The rule that matters most

**Verify claims against the code, not against this site.** Pages here drift
behind the repos they describe. Before editing a page that names a path, a
`make` target, a button, a config key, or a version, open the real thing:

| Claim about | Check |
| --- | --- |
| A `make` target, or what a command does | BobSim's `makefile` and `make help` — authoritative over any doc |
| App paths, saved files, UI labels | `_5_App/storage.py`, `_5_App/registry.py`, `_5_App/static/index.html` |
| Study settings, solver options, sweeps | `_3_StandardSim/*/[name]_config.yml` |
| Modelica library versions | `_3_StandardSim/build_vehicle_sim.mos` and the `Dockerfile` |
| Repo conventions | BobSim's `AGENTS.md`, `docs/architecture.md` |

If a doc and the code disagree, the code wins and the doc gets fixed.

## Layout

- `docs/**.md` — every page. Content is plain Markdown.
- `docs/.vitepress/config.ts` — nav, sidebar, markdown and mermaid settings.
- `docs/.vitepress/theme/components/` — Vue components usable inside Markdown:
  `PdfEmbed`, `PIDPlot`, `BangBangPlot`, `ScrollIndicator`.
- `docs/public/` — static assets, served from the root. An image at
  `docs/public/images/bobsim/x.png` is referenced as `/images/bobsim/x.png`.

## Adding a page

1. Create `docs/<section>/<name>.md` with frontmatter:

   ```markdown
   ---
   layout: doc
   title: Page Title
   ---
   ```

   `prev:` and `next:` are optional and set the footer links.

2. **Add it to the sidebar in `docs/.vitepress/config.ts`.** `assertSidebarCoversDir`
   fails the build for any page under `startup-guide/`, `use-guide/`, `boblib/`,
   `bobsim/`, or `reference/` that no sidebar entry links to. This is the most
   common way to break the build.

Links are written without `.md` (`cleanUrls: true`), and a dead internal link
fails the build rather than warning.

## Conventions

- The site is dark-only (`appearance: "force-dark"`). Do not write copy or
  assets that assume a light background.
- Mermaid diagrams go in ` ```mermaid ` fences. `htmlLabels` is off; `<br/>`
  inside node labels works and is the house style for multi-line nodes.
- Math is MathJax: `$inline$` and `$$block$$`.
- `.markdownlint.json` turns off MD013 (line length), MD033 (inline HTML) and
  MD025 (multiple H1). Every other rule applies — keep blank lines around
  headings, lists and fences, and give every fence a language (`text` when it
  is not code).
- Prose wraps at roughly 80 columns in most existing pages. Match the file you
  are editing.

## Before you push

All four run in CI on every PR:

```bash
npm run build                          # dead links, sidebar coverage, render errors
npx markdownlint-cli "docs/**/*.md"    # markdown lint
npm run lint:ts                        # eslint over docs/.vitepress
```

The fourth is an external link check (`.github/mlc-config.json`); it skips
root-relative links, so it only catches dead links to the outside world.

`main` is protected. Branch, push, open a PR. See
[`docs/contributing.md`](docs/contributing.md) for the contributor-facing
version of this.
