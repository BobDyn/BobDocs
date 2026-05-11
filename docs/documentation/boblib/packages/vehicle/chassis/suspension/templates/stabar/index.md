# BobLib.Vehicle.Chassis.Suspension.Templates.Stabar

Anti-roll bar / stabilizer bar templates. These models connect left and right suspension motion through torsional stiffness.


This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.

## Package path

```modelica
BobLib.Vehicle.Chassis.Suspension.Templates.Stabar
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `Stabar` | model | Modelica component/model. |

## How this package fits

This package participates in axle and suspension construction. The library separates axle assemblies from reusable templates so that geometry, wheel/tire behavior, steering, anti-roll bar, and linkage mechanics can be composed cleanly.

## Models, records, and functions

### `Stabar`

- **Kind:** `model`
- **File:** `Vehicle/Chassis/Suspension/Templates/Stabar/Stabar.mo`
- **Imports:** `Modelica.SIunits`, `BobLib.Utilities.Math.Vector`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`

**Key parameters**

| Parameter declaration |
|:--|
| `StabarRecord pStabar` |
| `SIunits.Length jointDiameter annotation( Evaluate = true, Dialog(tab = "Animation"))` |
| `SIunits.Length linkDiameter annotation( Placement(visible = false, transformation(origin = {nan, nan}, extent = \{\{nan, nan}, {nan, nan\}\})))` |

**Interfaces and signals**

| Declaration |
|:--|
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b leftArmFrame annotation( Placement(transformation(origin = {-100, 0}, extent = \{\{-16, -16},…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b rightArmFrame annotation( Placement(transformation(origin = {100, 0}, extent = \{\{-16, -16},…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_a supportFrame annotation( Placement(transformation(origin = {0, -100}, extent = \{\{-16, -16},…` |

**Selected internal components**

| Component declaration |
|:--|
| `model Stabar "Stabar with rigid arms and compliant torsion bar" import Modelica.SIunits` |
| `Modelica.Mechanics.MultiBody.Parts.FixedTranslation toLeftArmEnd(r = pStabar.leftArmEnd - pStabar.leftBarEnd, width = linkDiameter, height = linkDiameter) anno…` |
| `Modelica.Mechanics.MultiBody.Parts.FixedTranslation toRightArmEnd(r = Vector.mirrorXZ(pStabar.leftArmEnd - pStabar.leftBarEnd), width = linkDiameter, height = …` |
| `Modelica.Mechanics.MultiBody.Joints.Revolute stabarAxis(n = {0, 1, 0}, useAxisFlange = true, cylinderLength = jointDiameter, cylinderDiameter = jointDiameter, …` |
| `Modelica.Mechanics.MultiBody.Joints.Revolute mountAxis(n = {0, 1, 0}, animation = false, phi(displayUnit = "rad"), w(start = 0, fixed = true)) annotation( Plac…` |
| `Modelica.Mechanics.Rotational.Components.Spring spring(c = pStabar.barRate) annotation( Placement(transformation(origin = {-34, -20}, extent = \{\{-10, -10}, {10…` |
| `Modelica.Mechanics.MultiBody.Parts.FixedTranslation toLeftBarEnd(r = pStabar.leftBarEnd - {pStabar.leftBarEnd[1], 0, pStabar.leftBarEnd[3]}, width = linkDiamet…` |
| `Modelica.Mechanics.MultiBody.Parts.FixedTranslation toRightBarEnd(r = Vector.mirrorXZ(pStabar.leftBarEnd) - {pStabar.leftBarEnd[1], 0, pStabar.leftBarEnd[3]}, …` |

**Connection count:** 10 `connect(...)` equations.

## Documentation notes

- Keep physical assumptions in Modelica, close to the component they describe.
- Prefer records from `BobLib.Resources` for parameterization.
- Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.
