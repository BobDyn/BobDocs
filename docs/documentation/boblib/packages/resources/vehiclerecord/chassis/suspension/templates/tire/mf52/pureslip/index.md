# BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.Tire.MF52.PureSlip

Pure-slip MF52 coefficient records.


This package is parameter-oriented. The records here should generally remain free of simulation logic and should be safe to reuse across models, runners, and standard workflows.

## Package path

```text
BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.Tire.MF52.PureSlip
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `FxPureRecord` | record | Parameter or output record. |
| `FyPureRecord` | record | Parameter or output record. |
| `MxPureRecord` | record | Parameter or output record. |
| `MyPureRecord` | record | Parameter or output record. |
| `MzPureRecord` | record | Parameter or output record. |

## How this package fits

This package participates in the MF52 tire implementation. The Modelica side is split between coefficient records, slip state calculation, and force/moment evaluation blocks so that tire behavior can be configured independently of wheel dynamics.

## Models, records, and functions

### `FxPureRecord`

- **Kind:** `record`
- **File:** `Resources/VehicleRecord/Chassis/Suspension/Templates/Tire/MF52/PureSlip/FxPureRecord.mo`

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

### `FyPureRecord`

- **Kind:** `record`
- **File:** `Resources/VehicleRecord/Chassis/Suspension/Templates/Tire/MF52/PureSlip/FyPureRecord.mo`

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

### `MxPureRecord`

- **Kind:** `record`
- **File:** `Resources/VehicleRecord/Chassis/Suspension/Templates/Tire/MF52/PureSlip/MxPureRecord.mo`

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

### `MyPureRecord`

- **Kind:** `record`
- **File:** `Resources/VehicleRecord/Chassis/Suspension/Templates/Tire/MF52/PureSlip/MyPureRecord.mo`

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

### `MzPureRecord`

- **Kind:** `record`
- **File:** `Resources/VehicleRecord/Chassis/Suspension/Templates/Tire/MF52/PureSlip/MzPureRecord.mo`

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

## Documentation notes

- Treat records as the canonical parameter interface for the corresponding model.
- Keep names aligned with the physical subsystem they configure.
- Avoid storing derived analysis metrics here; those belong in BobSim outputs or reports.
