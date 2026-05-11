# BobLib.Vehicle.Chassis.Suspension.Templates.SteeringRack

Steering rack templates that convert steering input into left/right steering motion.


This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.

## Package path

```modelica
BobLib.Vehicle.Chassis.Suspension.Templates.SteeringRack
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `RackAndPinion` | model | Modelica component/model. |

## How this package fits

This package participates in axle and suspension construction. The library separates axle assemblies from reusable templates so that geometry, wheel/tire behavior, steering, anti-roll bar, and linkage mechanics can be composed cleanly.

## Models, records, and functions

### `RackAndPinion`

- **Kind:** `model`
- **File:** `Vehicle/Chassis/Suspension/Templates/SteeringRack/RackAndPinion.mo`
- **Imports:** `Modelica.SIunits`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`

**Key parameters**

| Parameter declaration |
|:--|
| `RackAndPinionRecord pRack` |
| `SIunits.Length linkDiameter annotation( Evaluate = true, Dialog(tab="Animation"))` |

**Interfaces and signals**

| Declaration |
|:--|
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_a mountFrame annotation( Placement(transformation(origin = {0, -100}, extent = \{\{-16, -16}, {…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b leftFrame annotation( Placement(transformation(origin = {-100, 0}, extent = \{\{-16, -16}, {1…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b rightFrame annotation( Placement(transformation(origin = {100, 0}, extent = \{\{-16, -16}, {1…` |
| `Modelica.Mechanics.Rotational.Interfaces.Flange_a pinionFlange annotation( Placement(transformation(origin = {0, 100}, extent = \{\{-10, -10}…` |

**Selected internal components**

| Component declaration |
|:--|
| `model RackAndPinion "Rack and pinion" import Modelica.SIunits` |
| `Modelica.Mechanics.MultiBody.Joints.Prismatic rackAxis(n = {0, 1, 0}, useAxisFlange = true, animation = false, s(nominal=0.01)) annotation( Placement(transform…` |
| `Modelica.Mechanics.MultiBody.Parts.FixedTranslation fromLeft(r = {0, -pRack.leftPickup[2], 0}, width = linkDiameter, height = linkDiameter) annotation( Placeme…` |
| `Modelica.Mechanics.MultiBody.Parts.FixedTranslation toRight(r = {0, -pRack.leftPickup[2], 0}, width = linkDiameter, height = linkDiameter) annotation( Placemen…` |
| `Modelica.Mechanics.MultiBody.Parts.Mounting1D mounting1D annotation( Placement(transformation(origin = {50, -70}, extent = \{\{10, -10}, {-10, 10\}\}, rotation = -…` |
| `Modelica.Mechanics.MultiBody.Visualizers.FixedShape pinionVisualizer(length = 2*pRack.cFactor/(2*Modelica.Constants.pi), width = 1.25*pRack.cFactor/(2*Modelica…` |
| `Modelica.Mechanics.MultiBody.Visualizers.FixedShape travelVisualizer(shapeType = "cylinder", lengthDirection = {0, 1, 0}, widthDirection = {0, 0, 1}, length = …` |
| `Modelica.Mechanics.Translational.Components.IdealGearR2T idealGearR2T(useSupportR = true, useSupportT = true, ratio = 2*Modelica.Constants.pi/pRack.cFactor) an…` |

**Connection count:** 12 `connect(...)` equations.

## Documentation notes

- Keep physical assumptions in Modelica, close to the component they describe.
- Prefer records from `BobLib.Resources` for parameterization.
- Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.
