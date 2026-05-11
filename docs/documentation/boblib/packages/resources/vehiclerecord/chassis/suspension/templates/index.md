# BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates

Reusable parameter record templates for suspension subsystem models.


This package is parameter-oriented. The records here should generally remain free of simulation logic and should be safe to reuse across models, runners, and standard workflows.

## Package path

```modelica
BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [DoubleWishbone](/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/doublewishbone/) | Package | Parameter records for double-wishbone geometry templates. |
| [Stabar](/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/stabar/) | Package | Parameter records for stabilizer bar templates. |
| [SteeringRack](/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/steeringrack/) | Package | Parameter records for steering rack templates. |
| [Tire](/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/tire/) | Package | Parameter records for tire and wheel templates. |
| `AxleMassRecord` | record | Parameter or output record. |
| `MassRecord` | record | Parameter or output record. |

## How this package fits

This package contains parameter records used to configure physical subsystem models. These records are intended to mirror the structure of the corresponding `Vehicle` package models.

## Models, records, and functions

### `AxleMassRecord`

- **Kind:** `record`
- **File:** `Resources/VehicleRecord/Chassis/Suspension/Templates/AxleMassRecord.mo`
- **Imports:** `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`

**Key parameters**

| Parameter declaration |
|:--|
| `MassRecord unsprungMass "Left unsprung mass record" annotation( Evaluate = false, Dialog(tab = "Mass Properties"))` |
| `MassRecord ucaMass "Left upper control arm mass record" annotation( Evaluate = false, Dialog(tab = "Mass Properties"))` |
| `MassRecord lcaMass "Left lower control arm mass record" annotation( Evaluate = false, Dialog(tab = "Mass Properties"))` |
| `MassRecord tieMass "Left tie rod mass record" annotation( Evaluate = false, Dialog(tab = "Mass Properties"))` |

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

### `MassRecord`

- **Kind:** `record`
- **File:** `Resources/VehicleRecord/Chassis/Suspension/Templates/MassRecord.mo`
- **Imports:** `Modelica.SIunits`

**Key parameters**

| Parameter declaration |
|:--|
| `SIunits.Mass m "Body mass"` |
| `SIunits.Position rCM[3] "Vector to center of mass, resolved in chassis frame"` |
| `SIunits.Inertia inertia[3,3] "Inertia tensor, resolved about frame at rCM"` |

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

## Documentation notes

- Treat records as the canonical parameter interface for the corresponding model.
- Keep names aligned with the physical subsystem they configure.
- Avoid storing derived analysis metrics here; those belong in BobSim outputs or reports.
