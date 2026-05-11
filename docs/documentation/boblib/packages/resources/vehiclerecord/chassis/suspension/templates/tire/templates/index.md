# BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.Tire.Templates

Partial records shared by tire/wheel parameter records.


This package is parameter-oriented. The records here should generally remain free of simulation logic and should be safe to reuse across models, runners, and standard workflows.

## Package path

```modelica
BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.Tire.Templates
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `PartialWheelRecord` | record | Parameter or output record. |

## How this package fits

This package contains parameter records used to configure physical subsystem models. These records are intended to mirror the structure of the corresponding `Vehicle` package models.

## Models, records, and functions

### `PartialWheelRecord`

- **Kind:** `record`
- **File:** `Resources/VehicleRecord/Chassis/Suspension/Templates/Tire/Templates/PartialWheelRecord.mo`
- **Imports:** `Modelica.SIunits`

**Key parameters**

| Parameter declaration |
|:--|
| `SIunits.Length R0 "Tire unloaded static radius" annotation( Dialog(group = "Dimensions"))` |
| `SIunits.Length rimR0 = R0*0.625 "Rim unloaded static radius" annotation( Dialog(group = "Dimensions"))` |
| `SIunits.Length rimWidth = rimR0*1.4 "Rim unloaded width" annotation( Dialog(group = "Dimensions"))` |
| `SIunits.Angle staticAlpha "Static toe angle in DEGREES, following Z-up convention" annotation( Dialog(group = "Attitude"))` |
| `SIunits.Angle staticGamma "Static inclination angle in DEGREES, following Z-up convention" annotation( Dialog(group = "Attitude"))` |

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

## Documentation notes

- Treat records as the canonical parameter interface for the corresponding model.
- Keep names aligned with the physical subsystem they configure.
- Avoid storing derived analysis metrics here; those belong in BobSim outputs or reports.
