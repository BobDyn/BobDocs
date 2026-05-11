# BobLib.Vehicle.Chassis.Suspension.Templates.Tire

Tire and wheel assembly templates. This package wraps wheel dynamics, slip calculation, and tire force/moment evaluation.


This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.

## Package path

```modelica
BobLib.Vehicle.Chassis.Suspension.Templates.Tire
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [MF52](/documentation/boblib/packages/vehicle/chassis/suspension/templates/tire/mf52/) | Package | Magic-Formula-5.2-style tire evaluation package. It contains the combined/pure slip evaluation models and slip-model variants used by MF52Tire. |
| [TirePhysics](/documentation/boblib/packages/vehicle/chassis/suspension/templates/tire/tirephysics/) | Package | Wheel dynamics and tire contact physics. This package contains wheel DOF variants and partial wheel templates. |
| `BaseTire` | model | Modelica component/model. |
| `MF52Tire` | model | Modelica component/model. |

## How this package fits

This package participates in axle and suspension construction. The library separates axle assemblies from reusable templates so that geometry, wheel/tire behavior, steering, anti-roll bar, and linkage mechanics can be composed cleanly.

## Models, records, and functions

### `BaseTire`

- **Kind:** `model`
- **File:** `Vehicle/Chassis/Suspension/Templates/Tire/BaseTire.mo`
- **Imports:** `Modelica.SIunits`, `Modelica.Math.Vectors.normalize`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`

**Key parameters**

| Parameter declaration |
|:--|
| `PartialWheelRecord pPartialWheel` |

**Interfaces and signals**

| Declaration |
|:--|
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_a cpFrame annotation( Placement(transformation(origin = {0, -100}, extent = \{\{-16, -16}, {16,…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b chassisFrame annotation( Placement(transformation(origin = {-100, 0}, extent = \{\{-16, -16},…` |
| `Modelica.Mechanics.Rotational.Interfaces.Flange_b hubFlange annotation( Placement(transformation(origin = {100, 0}, extent = \{\{-10, -10}, {…` |

**Selected internal components**

| Component declaration |
|:--|
| `model BaseTire import Modelica.SIunits` |
| `SIunits.Force Fz` |
| `SIunits.Angle gamma` |
| `SIunits.Angle alpha` |
| `Real kappa` |
| `replaceable BobLib.Vehicle.Chassis.Suspension.Templates.Tire.TirePhysics.Wheel0DOF wheelModel(partialWheelParams = pPartialWheel) annotation( Placement(transfo…` |
| `replaceable BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52.SlipModel.KinematicSlip slipModel annotation( Placement(transformation(origin = {90, -90}, ex…` |
| `Modelica.Blocks.Sources.RealExpression realExpressionFx(y = 0) annotation( Placement(transformation(origin = {-90, -56}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Blocks.Sources.RealExpression realExpressionFy(y = 0) annotation( Placement(transformation(origin = {-90, -70}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Blocks.Sources.Constant constantZero(k = 0) annotation( Placement(transformation(origin = {-90, -90}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Blocks.Sources.RealExpression realExpressionMx(y = 0) annotation( Placement(transformation(origin = {-90, 54}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Blocks.Sources.RealExpression realExpressionMy(y = 0) annotation( Placement(transformation(origin = {-90, 40}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Blocks.Sources.RealExpression realExpressionMz(y = 0) annotation( Placement(transformation(origin = {-90, 26}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Mechanics.MultiBody.Forces.WorldForceAndTorque forceAndTorque(resolveInFrame = Modelica.Mechanics.MultiBody.Types.ResolveInFrameB.frame_b, animation =…` |

**Connection count:** 10 `connect(...)` equations.

### `MF52Tire`

- **Kind:** `model`
- **File:** `Vehicle/Chassis/Suspension/Templates/Tire/MF52Tire.mo`
- **Extends:** `BobLib.Vehicle.Chassis.Suspension.Templates.Tire.BaseTire(realExpressionFx(y = …`
- **Imports:** `Modelica.SIunits`, `BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`

**Key parameters**

| Parameter declaration |
|:--|
| `MF52Record pTireModel` |

**Selected internal components**

| Component declaration |
|:--|
| `model MF52Tire import Modelica.SIunits` |
| `SIunits.Force Fx` |
| `SIunits.Force Fy` |
| `SIunits.Torque Mx` |
| `SIunits.Torque My` |
| `SIunits.Torque Mz` |
| `SIunits.Length t` |
| `SIunits.Length s` |

## Documentation notes

- Keep physical assumptions in Modelica, close to the component they describe.
- Prefer records from `BobLib.Resources` for parameterization.
- Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.
