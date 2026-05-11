# BobLib.Resources.StandardRecord

Records for standard-test and FMI-facing configuration/outputs.


This package is parameter-oriented. The records here should generally remain free of simulation logic and should be safe to reuse across models, runners, and standard workflows.

## Package path

```modelica
BobLib.Resources.StandardRecord
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `ISO4138Record` | record | Parameter or output record. |
| `ISO7401Record` | record | Parameter or output record. |
| `KnCRecord` | record | Parameter or output record. |
| `VehicleFMIRecord` | record | Parameter or output record. |

## How this package fits

This package contributes to the BobLib Modelica library structure and is documented from the current package contents.

## Models, records, and functions

### `ISO4138Record`

- **Kind:** `record`
- **File:** `Resources/StandardRecord/ISO4138Record.mo`
- **Imports:** `Modelica.SIunits`

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

### `ISO7401Record`

- **Kind:** `record`
- **File:** `Resources/StandardRecord/ISO7401Record.mo`
- **Imports:** `Modelica.SIunits`

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

### `KnCRecord`

- **Kind:** `record`
- **File:** `Resources/StandardRecord/KnCRecord.mo`
- **Imports:** `Modelica.SIunits`

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

### `VehicleFMIRecord`

- **Kind:** `record`
- **File:** `Resources/StandardRecord/VehicleFMIRecord.mo`
- **Imports:** `Modelica.SIunits`

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

## Documentation notes

- Treat records as the canonical parameter interface for the corresponding model.
- Keep names aligned with the physical subsystem they configure.
- Avoid storing derived analysis metrics here; those belong in BobSim outputs or reports.
