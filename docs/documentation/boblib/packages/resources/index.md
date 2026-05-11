# BobLib.Resources

Parameter and record library. It stores vehicle definitions, reusable parameter records, standard-test records, and visual-export records.


This package is parameter-oriented. The records here should generally remain free of simulation logic and should be safe to reuse across models, runners, and standard workflows.

## Package path

```modelica
BobLib.Resources
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [StandardRecord](/documentation/boblib/packages/resources/standardrecord/) | Package | Records for standard-test and FMI-facing configuration/outputs. |
| [VehicleDefn](/documentation/boblib/packages/resources/vehicledefn/) | Package | Concrete vehicle definitions. These records aggregate all subsystem parameter records into a complete vehicle configuration. |
| [VehicleRecord](/documentation/boblib/packages/resources/vehiclerecord/) | Package | Reusable physical vehicle parameter records organized by subsystem. |
| [VisualRecord](/documentation/boblib/packages/resources/visualrecord/) | Package | Records describing visualization signal exports. |

## How this package fits

`Resources` separates data from behavior. Vehicle definitions and parameter records are stored here so subsystem models can be reused with different parameter sets and so BobSim can override/select configurations consistently.

## Documentation notes

- Treat records as the canonical parameter interface for the corresponding model.
- Keep names aligned with the physical subsystem they configure.
- Avoid storing derived analysis metrics here; those belong in BobSim outputs or reports.
