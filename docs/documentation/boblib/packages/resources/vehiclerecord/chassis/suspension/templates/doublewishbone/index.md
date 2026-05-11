# BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.DoubleWishbone

Parameter records for double-wishbone geometry templates.


This package is parameter-oriented. The records here should generally remain free of simulation logic and should be safe to reuse across models, runners, and standard workflows.

## Package path

```text
BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.DoubleWishbone
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `WishboneUprightLoopRecord` | record | Parameter or output record. |

## How this package fits

This package contains parameter records used to configure physical subsystem models. These records are intended to mirror the structure of the corresponding `Vehicle` package models.

## Models, records, and functions

### `WishboneUprightLoopRecord`

- **Kind:** `record`
- **File:** `Resources/VehicleRecord/Chassis/Suspension/Templates/DoubleWishbone/WishboneUprightLoopRecord.mo`
- **Imports:** `Modelica.SIunits`

**Key parameters**

| Parameter declaration |
|:--|
| `SIunits.Position upperFore_i[3] "Upper control arm fore inboard joint, expressed in chassis frame" annotation( Evaluate = false, Dialog(gro…` |
| `SIunits.Position upperAft_i[3] "Upper control arm aft inboard joint, expressed in chassis frame" annotation( Evaluate = false, Dialog(group…` |
| `SIunits.Position lowerFore_i[3] "Lower control arm fore inboard joint, expressed in chassis frame" annotation( Evaluate = false, Dialog(gro…` |
| `SIunits.Position lowerAft_i[3] "Lower control arm aft inboard joint, expressed in chassis frame" annotation( Evaluate = false, Dialog(group…` |
| `SIunits.Position upper_o[3] "Upper control arm outboard joint, expressed in chassis frame" annotation( Evaluate = false, Dialog(group = "Ge…` |
| `SIunits.Position lower_o[3] "Lower control arm outboard joint, expressed in chassis frame" annotation( Evaluate = false, Dialog(group = "Ge…` |
| `SIunits.Position tie_o[3] "Tie rod outboard joint, expressed in chassis frame" annotation( Evaluate = false, Dialog(group = "Geometry"))` |
| `SIunits.Position wheelCenter[3] "Centroid of volume enclosing wheel, expressed in chassis frame" annotation( Evaluate = false, Dialog(group…` |

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

## Documentation notes

- Treat records as the canonical parameter interface for the corresponding model.
- Keep names aligned with the physical subsystem they configure.
- Avoid storing derived analysis metrics here; those belong in BobSim outputs or reports.
