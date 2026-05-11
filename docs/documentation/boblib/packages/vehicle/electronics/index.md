# BobLib.Vehicle.Electronics

Vehicle electronics and control-system layer.


This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.

## Package path

```modelica
BobLib.Vehicle.Electronics
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [Controllers](/documentation/boblib/packages/vehicle/electronics/controllers/) | Package | Closed-loop controllers used by standard maneuvers and vehicle-level models. |

## How this package fits

This package contributes to the BobLib Modelica library structure and is documented from the current package contents.

## Documentation notes

- Keep physical assumptions in Modelica, close to the component they describe.
- Prefer records from `BobLib.Resources` for parameterization.
- Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.
