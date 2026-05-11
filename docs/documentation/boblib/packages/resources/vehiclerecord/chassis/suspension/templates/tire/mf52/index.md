# BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.Tire.MF52

Parameter records for the MF52 tire model.


This package is parameter-oriented. The records here should generally remain free of simulation logic and should be safe to reuse across models, runners, and standard workflows.

## Package path

```modelica
BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.Tire.MF52
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [CombinedSlip](/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/tire/mf52/combinedslip/) | Package | Combined-slip MF52 coefficient records. |
| [PureSlip](/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/tire/mf52/pureslip/) | Package | Pure-slip MF52 coefficient records. |
| `MF52Record` | record | Parameter or output record. |
| `SetupRecord` | record | Parameter or output record. |

## How this package fits

This package participates in the MF52 tire implementation. The Modelica side is split between coefficient records, slip state calculation, and force/moment evaluation blocks so that tire behavior can be configured independently of wheel dynamics.

## Models, records, and functions

### `MF52Record`

- **Kind:** `record`
- **File:** `Resources/VehicleRecord/Chassis/Suspension/Templates/Tire/MF52/MF52Record.mo`
- **Imports:** `Modelica.SIunits`

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

### `SetupRecord`

- **Kind:** `record`
- **File:** `Resources/VehicleRecord/Chassis/Suspension/Templates/Tire/MF52/SetupRecord.mo`
- **Imports:** `Modelica.SIunits`

**Key parameters**

| Parameter declaration |
|:--|
| `SIunits.Force FNOMIN "Nominal vertical load used for normalization (Fz0 in MF formulations)"` |
| `SIunits.Length UNLOADED_RADIUS "Unloaded tire radius (used for kinematics and moment calculations)"` |

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

## Documentation notes

- Treat records as the canonical parameter interface for the corresponding model.
- Keep names aligned with the physical subsystem they configure.
- Avoid storing derived analysis metrics here; those belong in BobSim outputs or reports.
