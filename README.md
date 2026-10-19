# BobDocs

Documentation for [BobSim](https://github.com/BobDyn/BobSim) and
[BobLib](https://github.com/BobDyn/BobLib), published at [bobdyn.com](https://bobdyn.com).

## Local preview

```bash
npm ci
npm run dev
```

## Content

- `docs/startup-guide/`: installation and first runs
- `docs/bobsim/`: vehicle setup, models, analyses, and results
- `docs/boblib/`: Modelica interfaces, experiments, and checks
- `docs/reference/`: engineering reference and source-version scope
- `docs/.vitepress/config.ts`: navigation and site configuration

Claims about software behavior need verification against the corresponding
repository. Unreleased BobLib changes have a separate preview page.

## Checks

```bash
npm run build
npx markdownlint-cli "docs/**/*.md"
npm run lint:ts
```

The build checks internal page links and sidebar coverage. CI also checks
external links. See [Contributing](docs/contributing.md) for the editing workflow.
