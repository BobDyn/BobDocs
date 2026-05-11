# BobLib.Resources.StandardRecord

Records for standard-test and FMI-facing configuration and outputs.

This package is parameter-oriented. The records here stay free of simulation logic so they can be reused across models, runners, and standard workflows without bringing behavior along with the data.

## Package path

```text
BobLib.Resources.StandardRecord
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| SteadyStateEval record | record | Parameter or output record for the steady-state workflow. |
| TransientEval record | record | Parameter or output record for the transient workflow. |
| `KnCRecord` | record | Parameter or output record. |
| `VehicleFMIRecord` | record | Parameter or output record. |

## How this package fits

This package contributes the reusable records that the executable models and BobSim runners depend on.

## Documentation notes

- Treat records as the canonical parameter interface for the corresponding model.
- Keep names aligned with the physical subsystem they configure.
- Avoid storing derived analysis metrics here; those belong in BobSim outputs or reports.
