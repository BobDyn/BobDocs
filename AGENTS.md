# Agent Notes

BobDocs is the public documentation site for BobLib and BobSim. Follow
[`docs/contributing.md`](docs/contributing.md) for the branch, PR, and build
workflow.

## Keep the docs true

- Update a page when you learn new information that it should contain. You do
  not need to ask first.
- Remove or correct text that is false. Do not keep false text with a warning
  note next to it.
- Verify a claim against the current BobLib or BobSim code, or another primary
  source, before you add, change, or remove it.
- If you think a statement is false but you cannot verify it, do not delete it.
  Name it in the PR description instead.
- In the PR description, state what you changed and the evidence for each
  change.

## Verifying a change

```bash
npm run build
```

The build must pass with no errors before you open a PR.
