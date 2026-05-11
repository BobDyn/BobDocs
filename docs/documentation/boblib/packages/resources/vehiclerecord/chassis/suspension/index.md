# BobLib.Resources.VehicleRecord.Chassis.Suspension

Axle and suspension parameter records.


This package is parameter-oriented. The records here should generally remain free of simulation logic and should be safe to reuse across models, runners, and standard workflows.

## Package path

```text
BobLib.Resources.VehicleRecord.Chassis.Suspension
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [Templates](/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/) | Package | Reusable parameter record templates for suspension subsystem models. |
| `AxleDWRecord` | record | Parameter or output record. |

## How this package fits

This package contains parameter records used to configure physical subsystem models. These records are intended to mirror the structure of the corresponding `Vehicle` package models.

## Models, records, and functions

### `AxleDWRecord`

- **Kind:** `record`
- **File:** `Resources/VehicleRecord/Chassis/Suspension/AxleDWRecord.mo`
- **Imports:** `Modelica.SIunits`

**Key parameters**

| Parameter declaration |
|:--|
| `SIunits.Position bellcrankPivot[3] "Vector from origin to bellcrank pivot, resolved in world frame" annotation( Evaluate = false, Dialog(gr…` |
| `SIunits.Position bellcrankPivotAxis[3] "Unit vector along bellcrank pivot axis, resolved in world frame" annotation( Evaluate = false, Dial…` |
| `SIunits.Position bellcrankPickup1[3] "Vector from origin to first bellcrank pickup, resolved in world frame" annotation( Evaluate = false, …` |
| `SIunits.Position bellcrankPickup2[3] "Vector from origin to second bellcrank pickup, resolved in world frame" annotation( Evaluate = false,…` |
| `SIunits.Position bellcrankPickup3[3] "Vector from origin to third bellcrank pickup, resolved in world frame" annotation( Evaluate = false, …` |
| `SIunits.Position rodMount[3] "Vector from origin to push/pullrod wishbone mount, resolved in world frame" annotation( Evaluate = false, Dia…` |
| `SIunits.Position shockMount[3] "Vector from origin to shock chassis mount, resolved in world frame" annotation( Evaluate = false, Dialog(gr…` |
| `SIunits.Position springTable[:,2] "Table of spring force vs deflection, [dx1, F1` |
| `SIunits.Length springFreeLength "Spring free length (zero-force length) = installed length + static compression" annotation( Evaluate = fal…` |
| `SIunits.Position damperTable[:,2] "Table of damper force vs velocity, [v1, F1` |

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

## Documentation notes

- Treat records as the canonical parameter interface for the corresponding model.
- Keep names aligned with the physical subsystem they configure.
- Avoid storing derived analysis metrics here; those belong in BobSim outputs or reports.
