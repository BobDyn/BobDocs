# BobDocs

BobDocs is the VitePress documentation site for BobDyn, the open-source vehicle simulation framework.

The site focuses on the currently public pages:

- startup and usage guides
- BobLib overview
- BobSim overview
- reference material for metrics and control theory

The old `docs/documentation/` tree has been removed. The public docs now live directly under the top-level pages in `docs/`.

## Project Layout

- `docs/index.md` - home page
- `docs/startup-guide/index.md` - setup and first-run workflow
- `docs/use-guide/index.md` - day-to-day BobSim usage
- `docs/boblib/index.md` - BobLib overview
- `docs/bobsim/index.md` - BobSim overview
- `docs/reference/index.md` - reference landing page
- `docs/reference/metrics.md` - vehicle performance metrics
- `docs/reference/control-theory.md` - control theory reference
- `docs/.vitepress/config.ts` - site navigation, sidebar, and markdown configuration

## Tech Stack

- VitePress
- Vue 3
- Mermaid diagrams
- MathJax math rendering
- PDF.js embeds for documentation previews

## Development

```bash
npm install
npm run dev
```

Other useful commands:

```bash
npm run build
npm run preview
```

## Working With Content

Most content is written in Markdown. The main entry points for editing are:

- `docs/index.md` for the homepage
- `docs/startup-guide/index.md` for setup instructions
- `docs/use-guide/index.md` for workflow guidance
- `docs/boblib/index.md` and `docs/bobsim/index.md` for the project overviews

If you need to change navigation or site-wide markdown behavior, edit `docs/.vitepress/config.ts`.

## Notes

- The site is centered on BobLib and BobSim rather than the old generated documentation tree.
- Public links should point at the top-level BobLib, BobSim, and Reference pages.
- The docs build is expected to stay clean under `npm run build`.
