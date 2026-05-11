# BobLib.Resources.VisualRecord

Records describing visualization signal exports.


This package is parameter-oriented. The records here should generally remain free of simulation logic and should be safe to reuse across models, runners, and standard workflows.

## Package path

```modelica
BobLib.Resources.VisualRecord
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [Chassis](/documentation/boblib/packages/resources/visualrecord/chassis/) | Package | Visualization records for chassis-level entities. |

## How this package fits

This package contributes to the BobLib Modelica library structure and is documented from the current package contents.

## Documentation notes

- Treat records as the canonical parameter interface for the corresponding model.
- Keep names aligned with the physical subsystem they configure.
- Avoid storing derived analysis metrics here; those belong in BobSim outputs or reports.
