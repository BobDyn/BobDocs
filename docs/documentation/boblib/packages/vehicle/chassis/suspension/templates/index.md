# BobLib.Vehicle.Chassis.Suspension.Templates

Subsystem templates used to construct suspension assemblies, including double wishbone, steering rack, anti-roll bar, and tire models.


This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.

## Package path

```modelica
BobLib.Vehicle.Chassis.Suspension.Templates
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [DoubleWishbone](/documentation/boblib/packages/vehicle/chassis/suspension/templates/doublewishbone/) | Package | Double-wishbone kinematic templates. These models encode the upright/wishbone loop and expose frames used by axle assemblies. |
| [Stabar](/documentation/boblib/packages/vehicle/chassis/suspension/templates/stabar/) | Package | Anti-roll bar / stabilizer bar templates. These models connect left and right suspension motion through torsional stiffness. |
| [SteeringRack](/documentation/boblib/packages/vehicle/chassis/suspension/templates/steeringrack/) | Package | Steering rack templates that convert steering input into left/right steering motion. |
| [Tire](/documentation/boblib/packages/vehicle/chassis/suspension/templates/tire/) | Package | Tire and wheel assembly templates. This package wraps wheel dynamics, slip calculation, and tire force/moment evaluation. |

## How this package fits

This package participates in axle and suspension construction. The library separates axle assemblies from reusable templates so that geometry, wheel/tire behavior, steering, anti-roll bar, and linkage mechanics can be composed cleanly.

## Documentation notes

- Keep physical assumptions in Modelica, close to the component they describe.
- Prefer records from `BobLib.Resources` for parameterization.
- Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.
