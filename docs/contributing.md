---
layout: doc
title: Contributing
---

# Contributing

BobDocs is a VitePress site. Content lives in `docs/`, navigation in
`docs/.vitepress/config.ts`, and shared presentation in `docs/.vitepress/theme/`.

## Local preview

```bash
npm ci
npm run dev
```

The preview is available at `http://localhost:5173`.

## Source verification

A page that names a button, command, model input, or solver behavior needs to
match the source repository. The makefile defines CLI targets. The app registry
and UI define available workflows. Model equations and tests define behavior.

[Source versions](/reference/versions) records the scope of this refresh.
Unreleased behavior belongs in a labeled preview, not in published-library
instructions. Existing URLs should remain usable when titles change.

## Page structure

Pages use frontmatter with `layout: doc` and a descriptive `title`, followed by
a matching heading. Internal links omit `.md`. New pages also need sidebar
entries. The build checks sidebar coverage and dead page links.

Short task-oriented pages link to the detailed model and reference pages.
Equations use `$inline$` or `$$` blocks. Mermaid diagrams use text labels.
Screenshots need to match the documented version.

## Checks

```bash
npm run build
npx markdownlint-cli "docs/**/*.md"
npm run lint:ts
```

CI also checks external links. A browser review should cover navigation,
search, equations, and narrow-screen layout.

Changes go on a branch and through a pull request. Publishing follows the
repository's deployment workflow after merge.
