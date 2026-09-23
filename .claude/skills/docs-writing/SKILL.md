---
name: docs-writing
description: Write, edit, or review pages on a documentation site so they are short, plain, and easy to scan. Use for new doc pages, rewrites of wordy or LLM-sounding pages, and pages that make the reader scroll too much. Covers page type, page organization, and sentence style. Has notes for VitePress sites.
disable-model-invocation: true
---

# Docs Writing

A reader opens a doc page to do one thing. Your job is to get them to it fast.

Two problems ruin most doc pages:

- **Word soup.** Sentences that sound smart but say little.
- **Too much scrolling.** A long page usually means the content is organized badly, not that the topic is big.

Work in this order: page type, then page shape, then sentences. Sentence edits cannot fix a page that has the wrong shape.

## 1. Decide what the page is for

Every page does one of four jobs. Pick one before you write.

| The reader wants to... | Page type | Shape |
|---|---|---|
| Learn by doing, for the first time | **Tutorial** | Goal, prerequisites, numbered steps. Each step shows a result the reader can check. |
| Do a specific task they already understand | **How-to** | Task title, numbered steps, expected result. No background theory. |
| Look up a fact | **Reference** | Tables or entries in the same format every time. A reader finds one fact in under 30 seconds. |
| Understand why something works the way it does | **Explanation** | Context, the idea, trade-offs. No steps. |

If a page does two of these jobs, it is two pages. Split it and link them.

This framework is Diátaxis (diataxis.fr).

## 2. Shape the page

### Too much scrolling is a signal

When a page feels long, do not trim words first. Ask why it is long:

| Cause | Fix |
|---|---|
| It mixes page types, such as setup steps plus theory | Split into separate pages. Link between them. |
| It explains the same thing twice | Keep one copy. Link to it from the other spot. |
| It has a big block most readers skip | Move it to its own page, or put it in a collapsed block. |
| It lists many options or parameters in prose | Turn them into a table. |
| The intro is long before anything useful | Cut the intro to one or two sentences. |
| It covers several separate topics | Make each topic its own page with a clear title. |

Rough guide: if a reader must scroll more than about three screens to reach what they came for, reorganize. A long reference page is fine if the reader can jump to an entry with the page outline.

Do not delete real content to make a page shorter. Move it to the place where it belongs.

### Page rules

- **Open with the point.** The first sentence says what the page is for or what the thing does.
- **Use headings a reader can scan.** A heading names the task or the thing, such as "Run a sweep" or "Tire parameters". Do not use clever headings.
- **Keep paragraphs short.** Three or four sentences at most. One idea per paragraph.
- **Use steps for procedures.** One action per step. Put the expected result after the step when it helps.
- **Use tables for comparisons and options.** Do not describe a grid of facts in prose.
- **Link, don't repeat.** If another page explains it, link to that page.

## 3. Write the sentences

### Write like this

- Use short sentences with one idea each.
- Talk to the reader as "you". Tell them what to do: "Click **Save**", not "The user should click Save".
- Use active voice for actions. Passive voice is fine in reference text when the actor does not matter ("The value is clamped to ±1").
- Be specific. Name the file, the button, the command, the number.
- Use one name for one thing across the whole site.
- Keep real uncertainty. "May fail on Windows" stays. Do not stack hedges.
- Keep technical terms that carry meaning. Plain does not mean vague.

### Cut this

These patterns make text sound generated and add nothing.

| Pattern | Examples | Fix |
|---|---|---|
| Throat-clearing | "It's worth noting that", "At its core", "When it comes to", "Here's why" | Delete it and state the point. |
| Announcing the page | "In this section, we'll explore", "Let's walk through" | Delete it. The heading already says it. |
| Vague importance | "This is a key part of the workflow", "The implications are significant" | Name the specific effect, or delete the sentence. |
| Fake contrast | "It's not just X, it's Y", "X isn't the problem. Y is." | State Y. |
| Hype words | "powerful", "robust", "seamless", "comprehensive", "leverage", "streamline" | Delete, or say what it does. |
| Filler adverbs | "simply", "just", "easily", "fundamentally", "crucially" | Delete. Keep words that carry meaning, such as "only" or "approximately". |
| Long lists of everything | "configures, builds, runs, extracts, computes, renders, and writes" | Keep the two or three items that matter here. Link to the rest. |
| Noun forms of verbs | "perform an analysis of", "make a selection" | "analyze", "select" |

### Example

Before:

> The Simulation tab is a powerful and flexible part of the workflow. It lets you seamlessly configure, build, and run a wide range of studies. It's worth noting that builds can take some time, so it's important to plan accordingly.

After:

> Use the **Simulation** tab to configure and run a study. The first build takes a few minutes. Later runs reuse it.

The "after" is shorter, but that is not the goal. It tells the reader what to do and what to expect.

## 4. Check before you finish

- [ ] The page does one job: tutorial, how-to, reference, or explanation.
- [ ] The first sentence says what the page is for.
- [ ] A reader can find what they came for without scrolling past unrelated content.
- [ ] Nothing is explained twice on the site. Repeats became links.
- [ ] Options and comparisons are in tables, not prose.
- [ ] No sentence from the "Cut this" table is left.
- [ ] Every fact came from the source, the code, or the author. You did not invent any to make the text more concrete.

## VitePress notes

VitePress has tools that cut scrolling without cutting content:

| Tool | Use it for |
|---|---|
| `::: details Title` | Long optional content, such as full logs, edge cases, or derivations. It stays collapsed until clicked. |
| `::: code-group` | The same command for different platforms. Shows one tab at a time. |
| `::: tip`, `::: warning`, `::: danger` | One short note the reader must not miss. Use few. If every section has a callout, none of them stand out. |
| Page outline (`outline` in frontmatter or config) | Long reference pages. The reader jumps to a heading instead of scrolling. |
| Sidebar groups in `.vitepress/config.ts` | Splitting a long page. Add each new page to the sidebar so readers can find it. |

When you split a page, update the links that pointed to the old page.
