# BobLib.Vehicle.Chassis.Suspension.Templates.DoubleWishbone

Double-wishbone kinematic templates. These models encode the upright/wishbone loop and expose frames used by axle assemblies.


This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.

## Package path

```text
BobLib.Vehicle.Chassis.Suspension.Templates.DoubleWishbone
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `WishboneUprightLoop` | model | Modelica component/model. |

## How this package fits

This package participates in axle and suspension construction. The library separates axle assemblies from reusable templates so that geometry, wheel/tire behavior, steering, anti-roll bar, and linkage mechanics can be composed cleanly.

## Models, records, and functions

### `WishboneUprightLoop`

- **Kind:** `model`
- **File:** `Vehicle/Chassis/Suspension/Templates/DoubleWishbone/WishboneUprightLoop.mo`
- **Imports:** `Modelica.SIunits`, `Modelica.Math.Vectors`, `Modelica.Mechanics.MultiBody.Frames`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`

**Key parameters**

| Parameter declaration |
|:--|
| `WishboneUprightLoopRecord pDW` |
| `SIunits.Length linkDiameter annotation( Evaluate = true, Dialog(tab = "Animation"))` |
| `SIunits.Length jointDiameter annotation( Evaluate = true, Dialog(tab = "Animation"))` |

**Interfaces and signals**

| Declaration |
|:--|
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_a upperFrame_i annotation( Placement(transformation(origin = {-100, 60}, extent = \{\{-16, -16}…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_a lowerFrame_i annotation( Placement(transformation(origin = {-100, -60}, extent = \{\{-16, -16…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b upperFrame_o annotation( Placement(transformation(origin = {0, 100}, extent = \{\{16, -16}, {…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b lowerFrame_o annotation( Placement(transformation(origin = {0, -100}, extent = \{\{-16, -16},…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b steeringFrame annotation( Placement(transformation(origin = {100, -60}, extent = \{\{16, -16}…` |

**Selected internal components**

| Component declaration |
|:--|
| `model WishboneUprightLoop "Kinematic loop consisting of upright, lower wishbone, and upper wishbone" import Modelica.SIunits` |
| `Modelica.Mechanics.MultiBody.Joints.Assemblies.JointUSR upperWishboneUpright(n1_a = {1, 0, 0}, n_b = Vectors.normalize(pDW.upperFore_i - pDW.upperAft_i), rRod1…` |
| `Modelica.Mechanics.MultiBody.Joints.Revolute lowerJoint_i(n = Vectors.normalize(pDW.lowerFore_i - pDW.lowerAft_i), cylinderLength = Vectors.norm(pDW.lowerFore_…` |
| `Modelica.Mechanics.MultiBody.Parts.FixedTranslation lowerLink(r = pDW.lower_o - (pDW.lowerFore_i + pDW.lowerAft_i)/2, width = linkDiameter, height = linkDiamet…` |
| `Modelica.Mechanics.MultiBody.Joints.Revolute steeringAxis(n = Vectors.normalize(pDW.upper_o - pDW.lower_o), cylinderLength = jointDiameter, cylinderDiameter = …` |
| `Modelica.Mechanics.MultiBody.Parts.FixedTranslation upperFrameToFore(r = (pDW.upperFore_i - pDW.upperAft_i)/2) annotation( Placement(transformation(origin = {-…` |
| `Modelica.Mechanics.MultiBody.Parts.FixedTranslation upperFrameToAft(r = (pDW.upperAft_i - pDW.upperFore_i)/2) annotation( Placement(transformation(origin = {-7…` |
| `Modelica.Mechanics.MultiBody.Visualizers.FixedShape upperForeRod(shapeType = "cylinder", lengthDirection = upperForeLinkDirection, length = upperForeLinkLength…` |
| `Modelica.Mechanics.MultiBody.Visualizers.FixedShape upperAftRod(shapeType = "cylinder", lengthDirection = upperAftLinkDirection, length = upperAftLinkLength, w…` |
| `Modelica.Mechanics.MultiBody.Parts.FixedTranslation lowerFrameToFore(r = (pDW.lowerFore_i - pDW.lowerAft_i)/2) annotation( Placement(transformation(origin = {-…` |
| `Modelica.Mechanics.MultiBody.Parts.FixedTranslation lowerFrameToAft(r = (pDW.lowerAft_i - pDW.lowerFore_i)/2) annotation( Placement(transformation(origin = {-7…` |
| `Modelica.Mechanics.MultiBody.Visualizers.FixedShape lowerForeRod(shapeType = "cylinder", lengthDirection = lowerForeLinkDirection, length = lowerForeLinkLength…` |
| `Modelica.Mechanics.MultiBody.Visualizers.FixedShape lowerAftRod(shapeType = "cylinder", lengthDirection = lowerAftLinkDirection, length = lowerAftLinkLength, w…` |

**Connection count:** 16 `connect(...)` equations.

## Documentation notes

- Keep physical assumptions in Modelica, close to the component they describe.
- Prefer records from `BobLib.Resources` for parameterization.
- Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.
