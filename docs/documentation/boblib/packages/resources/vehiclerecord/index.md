# BobLib.Resources.VehicleRecord

Reusable physical vehicle parameter records organized by subsystem.


This package is parameter-oriented. The records here should generally remain free of simulation logic and should be safe to reuse across models, runners, and standard workflows.

## Package path

```text
BobLib.Resources.VehicleRecord
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [Chassis](/documentation/boblib/packages/resources/vehiclerecord/chassis/) | Package | Chassis-related parameter records. |

## How this package fits

This package contains parameter records used to configure physical subsystem models. These records are intended to mirror the structure of the corresponding `Vehicle` package models.

## Documentation notes

- Treat records as the canonical parameter interface for the corresponding model.
- Keep names aligned with the physical subsystem they configure.
- Avoid storing derived analysis metrics here; those belong in BobSim outputs or reports.
