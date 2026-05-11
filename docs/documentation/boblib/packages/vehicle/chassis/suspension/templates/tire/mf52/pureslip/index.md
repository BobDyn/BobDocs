# BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52.PureSlip

Pure-slip force and moment evaluators for MF52 tire behavior.


This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.

## Package path

```text
BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52.PureSlip
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `FxPureEval` | function | Reusable function. |
| `FyPureEval` | function | Reusable function. |
| `MxPureEval` | function | Reusable function. |
| `MyPureEval` | function | Reusable function. |
| `MzPureEval` | function | Reusable function. |

## How this package fits

This package participates in the MF52 tire implementation. The Modelica side is split between coefficient records, slip state calculation, and force/moment evaluation blocks so that tire behavior can be configured independently of wheel dynamics.

## Models, records, and functions

### `FxPureEval`

- **Kind:** `function`
- **File:** `Vehicle/Chassis/Suspension/Templates/Tire/MF52/PureSlip/FxPureEval.mo`
- **Imports:** `Modelica.SIunits`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`

**Interfaces and signals**

| Declaration |
|:--|
| `SIunits.Force Fz` |
| `SIunits.DimensionlessRatio kappa` |
| `SIunits.Angle gamma` |
| `FxPureRecord p` |
| `SetupRecord setup` |
| `SIunits.Force Fx` |

**Selected internal components**

| Component declaration |
|:--|
| `function FxPureEval // Modelica units import Modelica.SIunits` |

Use this function as a pure reusable helper in equations or parameter calculations.

### `FyPureEval`

- **Kind:** `function`
- **File:** `Vehicle/Chassis/Suspension/Templates/Tire/MF52/PureSlip/FyPureEval.mo`
- **Imports:** `Modelica.SIunits`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`

**Interfaces and signals**

| Declaration |
|:--|
| `SIunits.Force Fz` |
| `SIunits.Angle alpha` |
| `SIunits.Angle gamma` |
| `FyPureRecord p` |
| `SetupRecord setup` |
| `SIunits.Force Fy` |

**Selected internal components**

| Component declaration |
|:--|
| `function FyPureEval import Modelica.SIunits` |

Use this function as a pure reusable helper in equations or parameter calculations.

### `MxPureEval`

- **Kind:** `function`
- **File:** `Vehicle/Chassis/Suspension/Templates/Tire/MF52/PureSlip/MxPureEval.mo`
- **Imports:** `Modelica.SIunits`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`

**Interfaces and signals**

| Declaration |
|:--|
| `SIunits.Force Fz "Normal force acting on tire"` |
| `SIunits.Force Fy "Lateral force acting on tire"` |
| `SIunits.Angle gamma "Inclination angle (camber), radians"` |
| `MxPureRecord p` |
| `SetupRecord setup` |
| `SIunits.Torque Mx` |

**Selected internal components**

| Component declaration |
|:--|
| `function MxPureEval import Modelica.SIunits` |

Use this function as a pure reusable helper in equations or parameter calculations.

### `MyPureEval`

- **Kind:** `function`
- **File:** `Vehicle/Chassis/Suspension/Templates/Tire/MF52/PureSlip/MyPureEval.mo`
- **Imports:** `Modelica.SIunits`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`

**Interfaces and signals**

| Declaration |
|:--|
| `SIunits.Force Fz "Normal force"` |
| `SIunits.Force Fx "Longitudinal force"` |
| `SIunits.Velocity Vx "Longitudinal velocity"` |
| `MyPureRecord p` |
| `SetupRecord setup` |
| `SIunits.Torque My` |

**Selected internal components**

| Component declaration |
|:--|
| `function MyPureEval import Modelica.SIunits` |

Use this function as a pure reusable helper in equations or parameter calculations.

### `MzPureEval`

- **Kind:** `function`
- **File:** `Vehicle/Chassis/Suspension/Templates/Tire/MF52/PureSlip/MzPureEval.mo`
- **Imports:** `Modelica.SIunits`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`

**Interfaces and signals**

| Declaration |
|:--|
| `SIunits.Force Fz` |
| `SIunits.Force Fy` |
| `SIunits.Angle alpha` |
| `SIunits.DimensionlessRatio kappa` |
| `SIunits.Angle gamma` |
| `FyPureRecord pFy` |
| `FxPureRecord pFx` |
| `MzPureRecord p` |
| `SetupRecord setup` |
| `SIunits.Torque Mz_pure` |

**Selected internal components**

| Component declaration |
|:--|
| `function MzPureEval import Modelica.SIunits` |

Use this function as a pure reusable helper in equations or parameter calculations.

## Documentation notes

- Keep physical assumptions in Modelica, close to the component they describe.
- Prefer records from `BobLib.Resources` for parameterization.
- Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.
