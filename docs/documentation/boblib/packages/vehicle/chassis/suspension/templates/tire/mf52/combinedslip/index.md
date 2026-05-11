# BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52.CombinedSlip

Combined-slip force and moment evaluators for MF52 tire behavior.


This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.

## Package path

```text
BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52.CombinedSlip
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `FxCombinedEval` | function | Reusable function. |
| `FyCombinedEval` | function | Reusable function. |
| `MxCombinedEval` | function | Reusable function. |
| `MyCombinedEval` | function | Reusable function. |
| `MzCombinedEval` | function | Reusable function. |

## How this package fits

This package participates in the MF52 tire implementation. The Modelica side is split between coefficient records, slip state calculation, and force/moment evaluation blocks so that tire behavior can be configured independently of wheel dynamics.

## Models, records, and functions

### `FxCombinedEval`

- **Kind:** `function`
- **File:** `Vehicle/Chassis/Suspension/Templates/Tire/MF52/CombinedSlip/FxCombinedEval.mo`
- **Imports:** `Modelica.SIunits`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52.PureS…`

**Interfaces and signals**

| Declaration |
|:--|
| `SIunits.Force Fz` |
| `SIunits.DimensionlessRatio kappa` |
| `SIunits.Angle alpha` |
| `SIunits.Angle gamma` |
| `FxPureRecord pPure` |
| `FxCombinedRecord pComb` |
| `SetupRecord setup` |
| `SIunits.Force Fx` |

**Selected internal components**

| Component declaration |
|:--|
| `function FxCombinedEval // Modelica units import Modelica.SIunits` |

Use this function as a pure reusable helper in equations or parameter calculations.

### `FyCombinedEval`

- **Kind:** `function`
- **File:** `Vehicle/Chassis/Suspension/Templates/Tire/MF52/CombinedSlip/FyCombinedEval.mo`
- **Imports:** `Modelica.SIunits`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52.PureS…`

**Interfaces and signals**

| Declaration |
|:--|
| `SIunits.Force Fz` |
| `SIunits.Angle alpha` |
| `SIunits.DimensionlessRatio kappa` |
| `SIunits.Angle gamma` |
| `FyPureRecord pPure` |
| `FyCombinedRecord pComb` |
| `SetupRecord setup` |
| `SIunits.Force Fy` |

**Selected internal components**

| Component declaration |
|:--|
| `function FyCombinedEval import Modelica.SIunits` |

Use this function as a pure reusable helper in equations or parameter calculations.

### `MxCombinedEval`

- **Kind:** `function`
- **File:** `Vehicle/Chassis/Suspension/Templates/Tire/MF52/CombinedSlip/MxCombinedEval.mo`
- **Imports:** `Modelica.SIunits`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52.PureS…`

**Interfaces and signals**

| Declaration |
|:--|
| `SIunits.Force Fz` |
| `SIunits.Force Fy` |
| `SIunits.Angle gamma` |
| `MxPureRecord pPure` |
| `MxCombinedRecord pComb` |
| `SetupRecord setup` |
| `SIunits.Torque Mx` |

**Selected internal components**

| Component declaration |
|:--|
| `function MxCombinedEval import Modelica.SIunits` |

Use this function as a pure reusable helper in equations or parameter calculations.

### `MyCombinedEval`

- **Kind:** `function`
- **File:** `Vehicle/Chassis/Suspension/Templates/Tire/MF52/CombinedSlip/MyCombinedEval.mo`
- **Imports:** `Modelica.SIunits`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52.PureS…`

**Interfaces and signals**

| Declaration |
|:--|
| `SIunits.Force Fz` |
| `SIunits.Force Fx` |
| `SIunits.Velocity Vx` |
| `MyPureRecord pPure` |
| `MyCombinedRecord pComb` |
| `SetupRecord setup` |
| `SIunits.Torque My` |

**Selected internal components**

| Component declaration |
|:--|
| `function MyCombinedEval import Modelica.SIunits` |

Use this function as a pure reusable helper in equations or parameter calculations.

### `MzCombinedEval`

- **Kind:** `function`
- **File:** `Vehicle/Chassis/Suspension/Templates/Tire/MF52/CombinedSlip/MzCombinedEval.mo`
- **Imports:** `Modelica.SIunits`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`

**Interfaces and signals**

| Declaration |
|:--|
| `SIunits.Force Fz` |
| `SIunits.Force Fx` |
| `SIunits.Force Fy` |
| `SIunits.Angle alpha` |
| `SIunits.DimensionlessRatio kappa` |
| `SIunits.Angle gamma` |
| `FyPureRecord pFy` |
| `FxPureRecord pFx` |
| `MzPureRecord pPure` |
| `MzCombinedRecord pComb` |
| `SetupRecord setup` |
| `SIunits.Torque Mz` |
| `SIunits.Length t` |
| `SIunits.Length s` |

**Selected internal components**

| Component declaration |
|:--|
| `function MzCombinedEval import Modelica.SIunits` |

Use this function as a pure reusable helper in equations or parameter calculations.

## Documentation notes

- Keep physical assumptions in Modelica, close to the component they describe.
- Prefer records from `BobLib.Resources` for parameterization.
- Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.
