# BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.Tire.MF52.CombinedSlip

Combined-slip MF52 coefficient records.


This package is parameter-oriented. The records here should generally remain free of simulation logic and should be safe to reuse across models, runners, and standard workflows.

## Package path

```modelica
BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.Tire.MF52.CombinedSlip
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `FxCombinedRecord` | record | Parameter or output record. |
| `FyCombinedRecord` | record | Parameter or output record. |
| `MxCombinedRecord` | record | Parameter or output record. |
| `MyCombinedRecord` | record | Parameter or output record. |
| `MzCombinedRecord` | record | Parameter or output record. |

## How this package fits

This package participates in the MF52 tire implementation. The Modelica side is split between coefficient records, slip state calculation, and force/moment evaluation blocks so that tire behavior can be configured independently of wheel dynamics.

## Models, records, and functions

### `FxCombinedRecord`

- **Kind:** `record`
- **File:** `Resources/VehicleRecord/Chassis/Suspension/Templates/Tire/MF52/CombinedSlip/FxCombinedRecord.mo`

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

### `FyCombinedRecord`

- **Kind:** `record`
- **File:** `Resources/VehicleRecord/Chassis/Suspension/Templates/Tire/MF52/CombinedSlip/FyCombinedRecord.mo`

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

### `MxCombinedRecord`

- **Kind:** `record`
- **File:** `Resources/VehicleRecord/Chassis/Suspension/Templates/Tire/MF52/CombinedSlip/MxCombinedRecord.mo`

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

### `MyCombinedRecord`

- **Kind:** `record`
- **File:** `Resources/VehicleRecord/Chassis/Suspension/Templates/Tire/MF52/CombinedSlip/MyCombinedRecord.mo`

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

### `MzCombinedRecord`

- **Kind:** `record`
- **File:** `Resources/VehicleRecord/Chassis/Suspension/Templates/Tire/MF52/CombinedSlip/MzCombinedRecord.mo`

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

## Documentation notes

- Treat records as the canonical parameter interface for the corresponding model.
- Keep names aligned with the physical subsystem they configure.
- Avoid storing derived analysis metrics here; those belong in BobSim outputs or reports.
