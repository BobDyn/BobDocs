# BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52

Magic-Formula-5.2-style tire evaluation package. It contains the combined/pure slip evaluation models and slip-model variants used by MF52Tire.


This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.

## Package path

```text
BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [CombinedSlip](/documentation/boblib/packages/vehicle/chassis/suspension/templates/tire/mf52/combinedslip/) | Package | Combined-slip force and moment evaluators for MF52 tire behavior. |
| [PureSlip](/documentation/boblib/packages/vehicle/chassis/suspension/templates/tire/mf52/pureslip/) | Package | Pure-slip force and moment evaluators for MF52 tire behavior. |
| [SlipModel](/documentation/boblib/packages/vehicle/chassis/suspension/templates/tire/mf52/slipmodel/) | Package | Slip-state models for the MF52 tire, including no-slip, kinematic-slip, and transient-slip variants. |
| `Eval` | function | Reusable function. |

## How this package fits

This package participates in the MF52 tire implementation. The Modelica side is split between coefficient records, slip state calculation, and force/moment evaluation blocks so that tire behavior can be configured independently of wheel dynamics.

## Models, records, and functions

### `Eval`

- **Kind:** `function`
- **File:** `Vehicle/Chassis/Suspension/Templates/Tire/MF52/Eval.mo`
- **Imports:** `Modelica.SIunits`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52.PureS…`

**Interfaces and signals**

| Declaration |
|:--|
| `SIunits.Force Fz` |
| `SIunits.Angle alpha` |
| `SIunits.DimensionlessRatio kappa` |
| `SIunits.Angle gamma` |
| `SIunits.Velocity Vx` |
| `MF52Record tire` |
| `SIunits.Force Fx` |
| `SIunits.Force Fy` |
| `SIunits.Torque Mx` |
| `SIunits.Torque My` |
| `SIunits.Torque Mz` |
| `SIunits.Length t` |
| `SIunits.Length s` |

**Selected internal components**

| Component declaration |
|:--|
| `function Eval import Modelica.SIunits` |

Use this function as a pure reusable helper in equations or parameter calculations.

## Documentation notes

- Keep physical assumptions in Modelica, close to the component they describe.
- Prefer records from `BobLib.Resources` for parameterization.
- Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.
