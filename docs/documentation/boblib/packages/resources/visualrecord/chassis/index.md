# BobLib.Resources.VisualRecord.Chassis

Visualization records for chassis-level entities.


This package is parameter-oriented. The records here should generally remain free of simulation logic and should be safe to reuse across models, runners, and standard workflows.

## Package path

```text
BobLib.Resources.VisualRecord.Chassis
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [Suspension](/documentation/boblib/packages/resources/visualrecord/chassis/suspension/) | Package | Visualization records for suspension assemblies. |
| `ChassisVisualRecord` | record | Parameter or output record. |

## How this package fits

This package contributes to the BobLib Modelica library structure and is documented from the current package contents.

## Models, records, and functions

### `ChassisVisualRecord`

- **Kind:** `record`
- **File:** `Resources/VisualRecord/Chassis/ChassisVisualRecord.mo`
- **Imports:** `BobLib.Resources.VisualRecord.Chassis.Suspension.AxleDW_BC_…`

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

## Documentation notes

- Treat records as the canonical parameter interface for the corresponding model.
- Keep names aligned with the physical subsystem they configure.
- Avoid storing derived analysis metrics here; those belong in BobSim outputs or reports.
