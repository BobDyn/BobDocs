# BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.SteeringRack

Parameter records for steering rack templates.


This package is parameter-oriented. The records here should generally remain free of simulation logic and should be safe to reuse across models, runners, and standard workflows.

## Package path

```text
BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.SteeringRack
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `RackAndPinionRecord` | record | Parameter or output record. |

## How this package fits

This package contains parameter records used to configure physical subsystem models. These records are intended to mirror the structure of the corresponding `Vehicle` package models.

## Models, records, and functions

### `RackAndPinionRecord`

- **Kind:** `record`
- **File:** `Resources/VehicleRecord/Chassis/Suspension/Templates/SteeringRack/RackAndPinionRecord.mo`
- **Imports:** `Modelica.SIunits`

**Key parameters**

| Parameter declaration |
|:--|
| `SIunits.Position leftPickup[3] "Left pickup coordinate, expressed in chassis frame"` |
| `Real cFactor "Rack C-factor (m rack travel per pinion revolution)"` |

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

## Documentation notes

- Treat records as the canonical parameter interface for the corresponding model.
- Keep names aligned with the physical subsystem they configure.
- Avoid storing derived analysis metrics here; those belong in BobSim outputs or reports.
