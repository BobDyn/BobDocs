# BobLib.Vehicle.Chassis.Suspension.Templates.Tire.TirePhysics.Templates

Partial wheel templates shared by concrete wheel physics models.


This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.

## Package path

```modelica
BobLib.Vehicle.Chassis.Suspension.Templates.Tire.TirePhysics.Templates
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `PartialWheel` | partial model | Modelica component/model. |

## How this package fits

This package participates in axle and suspension construction. The library separates axle assemblies from reusable templates so that geometry, wheel/tire behavior, steering, anti-roll bar, and linkage mechanics can be composed cleanly.

## Models, records, and functions

### `PartialWheel`

- **Kind:** `partial model`
- **File:** `Vehicle/Chassis/Suspension/Templates/Tire/TirePhysics/Templates/PartialWheel.mo`
- **Imports:** `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`

**Key parameters**

| Parameter declaration |
|:--|
| `PartialWheelRecord partialWheelParams` |

**Interfaces and signals**

| Declaration |
|:--|
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_a cpFrame annotation( Placement(transformation(origin = {0, -100}, extent = \{\{-16, -16}, {16,…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b chassisFrame annotation( Placement(transformation(origin = {-100, 0}, extent = \{\{-16, -16},…` |
| `Modelica.Mechanics.Rotational.Interfaces.Flange_b hubFlange annotation( Placement(transformation(origin = {-100, 40}, extent = \{\{-10, -10},…` |

**Selected internal components**

| Component declaration |
|:--|
| `partial model PartialWheel import BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.Tire.Templates.PartialWheelRecord` |
| `outer parameter Real linkDiameter` |
| `Modelica.Mechanics.MultiBody.Parts.FixedRotation toHub(rotationType = Modelica.Mechanics.MultiBody.Types.RotationTypes.PlanarRotationSequence, sequence = {1, 2…` |
| `Modelica.Mechanics.MultiBody.Joints.Revolute hubAxis(n = {0, 1, 0}, useAxisFlange = true, animation = false, phi(start = 0, fixed = true)) annotation( Placemen…` |
| `Modelica.Mechanics.MultiBody.Joints.Prismatic prismatic_z(useAxisFlange = true, n = {0, 0, -1}, animation = true, boxWidth = linkDiameter, boxHeight = linkDiam…` |
| `Modelica.Mechanics.Rotational.Components.Inertia inertia annotation( Placement(transformation(origin = {40, 30}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Mechanics.Rotational.Sources.Torque tireTorqueSource annotation( Placement(transformation(origin = {30, 60}, extent = \{\{10, -10}, {-10, 10\}\}, rotation…` |
| `Modelica.Blocks.Sources.RealExpression reactionFx(y = -cpFrame.f[1]) annotation( Placement(transformation(origin = {-50, 54}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Blocks.Math.Product tireTorque annotation( Placement(transformation(origin = {-20, 60}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Mechanics.Translational.Sensors.RelPositionSensor radiusSensor annotation( Placement(transformation(origin = {-60, -50}, extent = \{\{-10, -10}, {10, 10…` |
| `Modelica.Mechanics.Rotational.Sensors.SpeedSensor wheelRotSpeedSensor annotation( Placement(transformation(origin = {90, 50}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Mechanics.MultiBody.Sensors.AbsoluteVelocity wheelVelSensor(resolveInFrame = Modelica.Mechanics.MultiBody.Types.ResolveInFrameA.world) annotation( Pla…` |
| `Modelica.Mechanics.MultiBody.Visualizers.VoluminousWheel voluminousWheel(rRim = partialWheelParams.rimR0, rTire = partialWheelParams.R0, width = partialWheelPa…` |

**Connection count:** 15 `connect(...)` equations.

## Documentation notes

- Keep physical assumptions in Modelica, close to the component they describe.
- Prefer records from `BobLib.Resources` for parameterization.
- Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.
