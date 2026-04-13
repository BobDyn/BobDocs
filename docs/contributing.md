# Contributing to BobDocs

BobDocs uses **VitePress**, which turns simple text files (Markdown) into the website you see online.

---

## The Rules of the Road

To keep the documentation stable and high-quality, we follow a simple workflow.

1.  **Protect the Main Branch**: You cannot upload changes directly to the `main` branch. It is "protected," meaning it only accepts changes that have been reviewed.
2.  **Use Branches**: Always create a new "feature branch" for your work (e.g., `update-metrics` or `fix-typo`).
3.  **Push to Remote**: You'll upload your branch to GitHub and create a **Pull Request (PR)**.
4.  **Pass CI Checks**: Our automated system (CI) will check your work for errors. These checks must pass before your changes can be merged into the main site.

---

## Step-by-Step Setup

If you don't have the code on your computer yet, follow these steps:

1.  **Get the Code**:
    Open your terminal/command prompt and run:
    ```bash
    git clone https://github.com/BobDyn/BobDocs.git
    cd BobDocs
    ```

2.  **Install Tools**:
    Make sure you have [Node.js](https://nodejs.org/) installed. Then run:
    ```bash
    npm install
    ```

3.  **See Your Changes Live**:
    Run this command to start a private version of the website on your computer:
    ```bash
    npm run dev
    ```
    Open `http://localhost:5173` in your browser. As you save files, the page will update automatically!

---

## How to Contribute (The Workflow)

### 1. Create a Branch
Before you start typing, create a new branch:
```bash
git switch -c your-branch-name
```

### 2. Write Your Content
Most of the work happens in the `docs/` folder. Files end in `.md` (Markdown).

*   **Frontmatter**: Every file needs a small header at the very top:
    ```markdown
    ---
    layout: doc
    title: Your Page Title
    ---
    ```
*   **Math**: We support LaTeX!
    - Inline: `$a = F/m$`
    - Blocks: 
      ```markdown
      $$
      a_y = \frac{v^2}{R}
      $$
      ```
*   **Headings**: Use `#` for the big title, `##` for sections, and `###` for sub-sections.

### 3. Add to the Navigation (If needed)
If you created a *new* file, you might need to add it to the top menu or the sidebar so people can find it.
*   Open `docs/.vitepress/config.ts`.
*   Look for `nav` (top bar) or `sidebar` (left side) and add your link there. Just follow the pattern of the existing lines!

### 4. Check for Errors
Run the build command to make sure there are no broken links or math errors:
```bash
npm run build
```

### 5. Submit Your Work
Once you're happy with your changes:
```bash
git add .
git commit -m "Briefly explain what you changed"
git push origin your-branch-name
```
Then, go to the [GitHub repository](https://github.com/BobDyn/BobDocs) and click the green **"Compare & pull request"** button.

---

## Advanced Features

### Sidebars & "On this page"
The right-hand "On this page" menu is automatic! It pulls from your `##` and `###` headings. The left-hand sidebar order determines the "Next" and "Previous" buttons at the bottom of the page.

### Custom Components
If you need complex interactive plots (like a PID simulator), we use Vue components. You can drop them into Markdown like this:
```markdown
<PIDPlot />
```
Check `docs/.vitepress/theme/components/` to see what's available.
