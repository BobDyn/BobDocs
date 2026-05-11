# BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.Stabar

Parameter records for stabilizer bar templates.


This package is parameter-oriented. The records here should generally remain free of simulation logic and should be safe to reuse across models, runners, and standard workflows.

## Package path

```text
BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.Stabar
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `StabarRecord` | record | Parameter or output record. |

## How this package fits

This package contains parameter records used to configure physical subsystem models. These records are intended to mirror the structure of the corresponding `Vehicle` package models.

## Models, records, and functions

### `StabarRecord`

- **Kind:** `record`
- **File:** `Resources/VehicleRecord/Chassis/Suspension/Templates/Stabar/StabarRecord.mo`
- **Imports:** `Modelica.SIunits`

**Key parameters**

| Parameter declaration |
|:--|
| `SIunits.Position leftBarEnd[3] "Left end of torsion bar, expressed in chassis frame" annotation( Evaluate = false, Dialog(group = "Geometry…` |
| `SIunits.Position leftArmEnd[3] "Left end of arm, expressed in chassis frame" annotation( Evaluate = false, Dialog(group = "Geometry"))` |
| `SIunits.RotationalSpringConstant barRate "Torsion bar rate" annotation( Evaluate = false, Dialog(group = "Rates"))` |

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

## Documentation notes

- Treat records as the canonical parameter interface for the corresponding model.
- Keep names aligned with the physical subsystem they configure.
- Avoid storing derived analysis metrics here; those belong in BobSim outputs or reports.
