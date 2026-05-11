# BobLib.Resources.VisualRecord.Chassis.Suspension

Visualization records for suspension assemblies.


This package is parameter-oriented. The records here should generally remain free of simulation logic and should be safe to reuse across models, runners, and standard workflows.

## Package path

```text
BobLib.Resources.VisualRecord.Chassis.Suspension
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `AxleDWBaseVisualRecord` | record | Parameter or output record. |
| `AxleDW_BC_ARB_VisualRecord` | record | Parameter or output record. |

## How this package fits

This package contributes to the BobLib Modelica library structure and is documented from the current package contents.

## Models, records, and functions

### `AxleDWBaseVisualRecord`

- **Kind:** `record`
- **File:** `Resources/VisualRecord/Chassis/Suspension/AxleDWBaseVisualRecord.mo`

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

### `AxleDW_BC_ARB_VisualRecord`

- **Kind:** `record`
- **File:** `Resources/VisualRecord/Chassis/Suspension/AxleDW_BC_ARB_VisualRecord.mo`
- **Extends:** `BobLib.Resources.VisualRecord.Chassis.Suspension.AxleDWBaseVisualRecord`

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

## Documentation notes

- Treat records as the canonical parameter interface for the corresponding model.
- Keep names aligned with the physical subsystem they configure.
- Avoid storing derived analysis metrics here; those belong in BobSim outputs or reports.
