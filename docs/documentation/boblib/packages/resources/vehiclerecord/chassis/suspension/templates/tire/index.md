# BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.Tire

Parameter records for tire and wheel templates.


This package is parameter-oriented. The records here should generally remain free of simulation logic and should be safe to reuse across models, runners, and standard workflows.

## Package path

```text
BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.Tire
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [MF52](/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/tire/mf52/) | Package | Parameter records for the MF52 tire model. |
| [Templates](/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/tire/templates/) | Package | Partial records shared by tire/wheel parameter records. |
| `Wheel1DOF_YRecord` | record | Parameter or output record. |
| `Wheel1DOF_ZRecord` | record | Parameter or output record. |

## How this package fits

This package contains parameter records used to configure physical subsystem models. These records are intended to mirror the structure of the corresponding `Vehicle` package models.

## Models, records, and functions

### `Wheel1DOF_YRecord`

- **Kind:** `record`
- **File:** `Resources/VehicleRecord/Chassis/Suspension/Templates/Tire/Wheel1DOF_YRecord.mo`
- **Imports:** `Modelica.SIunits`

**Key parameters**

| Parameter declaration |
|:--|
| `SIunits.Inertia wheelJ "Effective inertia of rotating mass" annotation(Dialog(group = "Mass Properties"))` |

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

### `Wheel1DOF_ZRecord`

- **Kind:** `record`
- **File:** `Resources/VehicleRecord/Chassis/Suspension/Templates/Tire/Wheel1DOF_ZRecord.mo`
- **Imports:** `Modelica.SIunits`

**Key parameters**

| Parameter declaration |
|:--|
| `SIunits.TranslationalSpringConstant wheelC "Wheel vertical stiffness" annotation( Dialog(group = "Rate Properties"))` |
| `SIunits.TranslationalDampingConstant wheelD "Wheel vertical damping" annotation( Dialog(group = "Rate Properties"))` |

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

## Documentation notes

- Treat records as the canonical parameter interface for the corresponding model.
- Keep names aligned with the physical subsystem they configure.
- Avoid storing derived analysis metrics here; those belong in BobSim outputs or reports.
