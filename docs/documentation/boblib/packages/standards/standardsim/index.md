# BobLib.Standards.StandardSim

Standard-workflow models for BobSim.

This package holds the Modelica models that BobSim runs for the public steady-state and transient studies.

## Package path

```text
BobLib.Standards.StandardSim
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `SteadyStateEval` | model | Steady-state cornering workflow model. |
| `TransientEval` | model | Transient steering workflow model. |
| `FrKnC` | model | Front kinematics and compliance model. |
| `RrKnC` | model | Rear kinematics and compliance model. |

## How this package fits

`StandardSim` is the executable-facing layer of BobLib. Its models connect the vehicle model to study-specific inputs and output records so BobSim can run the same physics in a repeatable way.

## Documentation notes

- Keep maneuver-specific control/input logic here, not inside generic vehicle components.
- Expose the outputs BobSim needs as named public variables.
- Prefer runtime-overridable parameters for sweep and workflow settings.
