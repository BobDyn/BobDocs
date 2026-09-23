---
layout: doc
title: Contributing
---

# Contributing to BobDocs

This page shows how to change the BobDocs site and get the change merged.
BobDocs is a [VitePress](https://vitepress.dev/) site. Every page is a Markdown
file under `docs/`.

## How Changes Get Merged

1. You cannot push to `main`. It is protected and accepts reviewed changes
   only.
2. Make your changes on a new branch, for example `update-metrics` or
   `fix-typo`.
3. Push the branch to GitHub and open a pull request (PR).
4. CI checks the PR. All checks must pass before the PR can merge.

## Set Up

1. Clone the repository:

    ```bash
    git clone https://github.com/BobDyn/BobDocs.git
    cd BobDocs
    ```

2. Install [Node.js](https://nodejs.org/). CI uses Node.js 20. Then install
   the dependencies:

    ```bash
    npm install
    ```

3. Start a local copy of the site:

    ```bash
    npm run dev
    ```

    Open `http://localhost:5173` in your browser. The page reloads when you
    save a file.

## Make A Change

### 1. Create a branch

```bash
git switch -c your-branch-name
```

### 2. Edit or add a page

Pages are `.md` files in `docs/`. Every page starts with frontmatter:

```markdown
---
layout: doc
title: Your Page Title
---
```

| Feature | Syntax |
| :-- | :-- |
| Headings | `#` for the page title, `##` for sections, `###` for subsections |
| Inline math | `$a = F/m$` |
| Block math | `$$` on its own line before and after the equation |
| Internal links | No `.md` extension, for example `[Metrics](/reference/metrics)` |

Block math example:

```markdown
$$
a_y = \frac{v^2}{R}
$$
```

### 3. Add a new page to the sidebar

If you create a new file, add one entry for it to the `sidebar` section of
`docs/.vitepress/config.ts`: a page title and a URL path. For pages under
`startup-guide/`, `use-guide/`, `boblib/`, `bobsim/`, and `reference/`, the
build fails with an error if you forget.

You do not need to change the config when you edit `##` and `###` headings.
They fill the "On this page" outline on the right automatically. The sidebar
on the left lists whole pages only.

### 4. Run the checks

CI runs these checks on every PR. Run them before you push:

```bash
npm run build                          # dead links, sidebar coverage, render errors
npx markdownlint-cli "docs/**/*.md"    # markdown lint
npm run lint:ts                        # eslint over docs/.vitepress
```

CI also checks external links.

### 5. Open a pull request

```bash
git add .
git commit -m "Briefly explain what you changed"
git push origin your-branch-name
```

Then go to the [GitHub repository](https://github.com/BobDyn/BobDocs) and
click **Compare & pull request**.

## Page Navigation

The "On this page" outline on the right comes from your `##` and `###`
headings. The sidebar on the left is the list in `config.ts`. The **Next** and
**Previous** buttons at the bottom of a page default to the neighboring pages
in the sidebar. To change them, set `prev` or `next` in the page frontmatter.
Most guide pages do this to control the link text.

## Custom Components

For interactive content, such as a PID simulator plot, use a Vue component in
Markdown:

```markdown
<PIDPlot />
```

The components are in `docs/.vitepress/theme/components/`.
