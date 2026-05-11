# BobLib.Vehicle.Chassis.Suspension.Linkages

Reusable linkage elements for suspension assemblies, including rod-like members and joint templates.


This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.

## Package path

```text
BobLib.Vehicle.Chassis.Suspension.Linkages
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [Templates](/documentation/boblib/packages/vehicle/chassis/suspension/linkages/templates/) | Package | Partial/reusable linkage templates used by concrete suspension linkage models. |
| `Bellcrank3` | model | Modelica component/model. |
| `ForceOnlyRod` | model | Modelica component/model. |
| `Rod` | model | Modelica component/model. |
| `ShockLinkage` | model | Modelica component/model. |
| `TabularDamper` | model | Modelica component/model. |
| `TabularSpring` | model | Modelica component/model. |

## How this package fits

This package participates in axle and suspension construction. The library separates axle assemblies from reusable templates so that geometry, wheel/tire behavior, steering, anti-roll bar, and linkage mechanics can be composed cleanly.

## Models, records, and functions

### `Bellcrank3`

- **Kind:** `model`
- **File:** `Vehicle/Chassis/Suspension/Linkages/Bellcrank3.mo`
- **Imports:** `Modelica.SIunits`, `Modelica.Math.Vectors`

**Key parameters**

| Parameter declaration |
|:--|
| `SIunits.Position pivot[3] "Pivot coordinates" annotation( Dialog(group = "Geometry"))` |
| `SIunits.Position pivotAxis[3] "Pivot rotational axis" annotation( Dialog(group = "Geometry"))` |
| `SIunits.Position pickup_1[3] "First pickup coordinates" annotation( Dialog(group = "Geometry"))` |
| `SIunits.Position pickup_2[3] "Second pickup coordinates" annotation( Dialog(group = "Geometry"))` |
| `SIunits.Position pickup_3[3] "Third pickup coordinates" annotation( Dialog(group = "Geometry"))` |
| `SIunits.Length linkDiameter annotation( Dialog(tab = "Animation", group = "Sizing"))` |
| `SIunits.Length jointDiameter annotation( Dialog(tab = "Animation", group = "Sizing"))` |

**Interfaces and signals**

| Declaration |
|:--|
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_a mountFrame annotation( Placement(transformation(origin = {-100, 0}, extent = \{\{-16, -16}, {…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b pickupFrame1 annotation( Placement(transformation(origin = {0, -100}, extent = \{\{-16, -16},…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b pickupFrame2 annotation( Placement(transformation(origin = {100, 0}, extent = \{\{-16, -16}, …` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b pickupFrame3 annotation( Placement(transformation(origin = {0, 100}, extent = \{\{-16, -16}, …` |

**Selected internal components**

| Component declaration |
|:--|
| `model Bellcrank3 import Modelica.SIunits` |
| `Modelica.Mechanics.MultiBody.Joints.Revolute revolute(n = Vectors.normalize(pivotAxis), animation = true, cylinderLength = jointDiameter, cylinderDiameter = jo…` |
| `Modelica.Mechanics.MultiBody.Visualizers.FixedShape side_1(lengthDirection = Vectors.normalize(pickup_1 - pivot), length = Vectors.norm(pickup_1 - pivot), widt…` |
| `Modelica.Mechanics.MultiBody.Visualizers.FixedShape side_2(lengthDirection = Vectors.normalize(pickup_2 - pickup_1), widthDirection = Vectors.normalize(pivotAx…` |
| `Modelica.Mechanics.MultiBody.Visualizers.FixedShape side_3(lengthDirection = Vectors.normalize(pickup_3 - pickup_2), length = Vectors.norm(pickup_3 - pickup_2)…` |
| `Modelica.Mechanics.MultiBody.Visualizers.FixedShape side_4(lengthDirection = Vectors.normalize(pivot - pickup_3), widthDirection = Vectors.normalize(pivotAxis)…` |

**Connection count:** 11 `connect(...)` equations.

### `ForceOnlyRod`

- **Kind:** `model`
- **File:** `Vehicle/Chassis/Suspension/Linkages/ForceOnlyRod.mo`
- **Imports:** `Modelica.SIunits`, `Modelica.Math.Vectors.norm`

**Key parameters**

| Parameter declaration |
|:--|
| `SIunits.Position r_a[3] "Vector from origin to frame_a, expressed in world frame" annotation( Evaluate = false, Dialog(group = "Geometry"))` |
| `SIunits.Position r_b[3] "Vector from origin to frame_b, expressed in world frame" annotation( Evaluate = false, Dialog(group = "Geometry"))` |
| `SIunits.Force EA = 8.6e6 "Elastic modulus multiplied by cross-sectional area"` |
| `SIunits.TranslationalDampingConstant d = 2e3 "Axial damping"` |
| `Modelica.Mechanics.MultiBody.Types.Axis n1_a = {1, 0, 0} "Axis 1 of universal joint resolved in frame_a (axis 2 is orthogonal to axis 1 and…` |
| `Boolean kinematicConstraint = false annotation( Evaluate = false, Dialog(group = "Geometry"))` |
| `SIunits.Length linkDiameter annotation( Evaluate = true, Dialog(tab = "Animation"))` |
| `SIunits.Length jointDiameter annotation( Evaluate = true, Dialog(tab = "Animation"))` |
| `Boolean show_universal_axes = true annotation( Evaluate = true, Dialog(tab = "Animation"))` |

**Interfaces and signals**

| Declaration |
|:--|
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_a frame_a annotation( Placement(transformation(origin = {-100, 0}, extent = \{\{-16, -16}, {16,…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b frame_b annotation( Placement(transformation(origin = {100, 0}, extent = \{\{-16, -16}, {16, …` |

**Selected internal components**

| Component declaration |
|:--|
| `model ForceOnlyRod import Modelica.SIunits` |
| `Modelica.Mechanics.MultiBody.Forces.LineForceWithMass lineForceWithMass annotation( Placement(transformation(extent = \{\{-20, -20}, {20, 20\}\})))` |
| `Modelica.Mechanics.Translational.Components.SpringDamper springDamper(s_rel0 = norm(r_b - r_a), c = EA/norm(r_b - r_a), d = d, s_rel(start = norm(r_b - r_a), f…` |

**Connection count:** 4 `connect(...)` equations.

### `Rod`

- **Kind:** `model`
- **File:** `Vehicle/Chassis/Suspension/Linkages/Rod.mo`
- **Imports:** `Modelica.SIunits`

**Key parameters**

| Parameter declaration |
|:--|
| `SIunits.Position r_a[3] "Vector from origin to frame_a, expressed in world frame" annotation( Evaluate = false, Dialog(group = "Geometry"))` |
| `SIunits.Position r_b[3] "Vector from origin to frame_b, expressed in world frame" annotation( Evaluate = false, Dialog(group = "Geometry"))` |
| `Modelica.Mechanics.MultiBody.Types.Axis n1_a = {1, 0, 0} "Axis 1 of universal joint resolved in frame_a (axis 2 is orthogonal to axis 1 and…` |
| `Boolean kinematicConstraint = true annotation( Evaluate = false, Dialog(group = "Geometry"))` |
| `SIunits.Length linkDiameter annotation( Evaluate = true, Dialog(tab="Animation"))` |
| `SIunits.Length jointDiameter annotation( Evaluate = true, Dialog(tab="Animation"))` |
| `Boolean show_universal_axes = true annotation( Evaluate = true, Dialog(tab="Animation"))` |

**Interfaces and signals**

| Declaration |
|:--|
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_a frame_a annotation( Placement(transformation(origin = {-100, 0}, extent = \{\{-16, -16}, {16,…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b frame_b annotation( Placement(transformation(origin = {100, 0}, extent = \{\{-16, -16}, {16, …` |

**Selected internal components**

| Component declaration |
|:--|
| `model Rod import Modelica.SIunits` |

**Connection count:** 2 `connect(...)` equations.

### `ShockLinkage`

- **Kind:** `model`
- **File:** `Vehicle/Chassis/Suspension/Linkages/ShockLinkage.mo`
- **Imports:** `Modelica.SIunits`

**Key parameters**

| Parameter declaration |
|:--|
| `SIunits.Position r_a[3] "Initial vector from origin to frame_a, resolved in world frame" annotation( Dialog(group = "Geometry"))` |
| `SIunits.Position r_b[3] "Initial vector from origin to frame_b, resolved in world frame" annotation( Dialog(group = "Geometry"))` |
| `Modelica.Mechanics.MultiBody.Types.Axis n_a "Axis of revolute joint 1, resolved in world frame" annotation( Dialog(group = "Geometry"))` |
| `Modelica.Mechanics.MultiBody.Types.Axis n_b "Axis of revolute joint 2, resolved in world frame" annotation( Dialog(group = "Geometry"))` |
| `SIunits.Length s_0 "Spring free length" annotation( Dialog(group = "Spring Params"))` |
| `SIunits.TranslationalSpringConstant springTable[:, 2] "Table of spring force vs deflection (change in length)" annotation( Dialog(group = "…` |
| `SIunits.TranslationalDampingConstant damperTable[:, 2] "Table of damper force vs relative velocity" annotation( Dialog(group = "Damper Para…` |
| `SIunits.Length linkDiameter "Link diameter" annotation( Dialog(tab = "Animation"))` |
| `SIunits.Length jointDiameter "Joint diameter" annotation( Dialog(tab = "Animation"))` |

**Interfaces and signals**

| Declaration |
|:--|
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_a frame_a annotation( Placement(transformation(origin = {-100, 0}, extent = \{\{-16, -16}, {16,…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b frame_b annotation( Placement(transformation(origin = {100, 0}, extent = \{\{-16, -16}, {16, …` |

**Selected internal components**

| Component declaration |
|:--|
| `model ShockLinkage import Modelica.SIunits` |
| `BobLib.Vehicle.Chassis.Suspension.Linkages.TabularSpring TabularSpring(springTable = springTable, s_0 = s_0) annotation( Placement(transformation(origin = {0, …` |
| `BobLib.Vehicle.Chassis.Suspension.Linkages.TabularDamper TabularDamper(damperTable = damperTable) annotation( Placement(transformation(origin = {0, 50}, extent…` |
| `Modelica.Mechanics.MultiBody.Forces.LineForceWithMass lineForceWithMass annotation( Placement(transformation(extent = \{\{-10, -10}, {10, 10\}\})))` |

**Connection count:** 6 `connect(...)` equations.

### `TabularDamper`

- **Kind:** `model`
- **File:** `Vehicle/Chassis/Suspension/Linkages/TabularDamper.mo`
- **Extends:** `BobLib.Vehicle.Chassis.Suspension.Linkages.Templates.TabularCompliant`
- **Imports:** `Modelica.SIunits`

**Key parameters**

| Parameter declaration |
|:--|
| `SIunits.TranslationalDampingConstant damperTable[:, 2] "Table of Force vs Relative Velocity (m/s, N)" annotation( Dialog(group = "Damper Pa…` |

**Selected internal components**

| Component declaration |
|:--|
| `model TabularDamper "Tabular translational damper with velocity-force curve" import Modelica.SIunits` |
| `Real v_rel` |
| `Real v_abs` |
| `Real vel_sgn` |
| `Modelica.Blocks.Sources.RealExpression velExpression(y = v_abs) annotation( Placement(transformation(origin = {-90, 36}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Blocks.Sources.RealExpression sgnExpression(y = -vel_sgn) annotation( Placement(transformation(origin = {-90, 24}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Blocks.Math.Product product annotation( Placement(transformation(origin = {-60, 30}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Blocks.Tables.CombiTable1D combiTable1D(columns = {2}, extrapolation = Modelica.Blocks.Types.Extrapolation.LastTwoPoints, smoothness = Modelica.Blocks…` |

**Connection count:** 4 `connect(...)` equations.

### `TabularSpring`

- **Kind:** `model`
- **File:** `Vehicle/Chassis/Suspension/Linkages/TabularSpring.mo`
- **Extends:** `BobLib.Vehicle.Chassis.Suspension.Linkages.Templates.TabularCompliant`
- **Imports:** `Modelica.SIunits`

**Key parameters**

| Parameter declaration |
|:--|
| `SIunits.TranslationalSpringConstant springTable[:, 2] "Table of Force vs Compression (dx, F)" annotation( Evaluate = false, Dialog(group = …` |
| `SIunits.Length s_0 "Free length of spring" annotation( Evaluate = false, Dialog(group = "Spring Parameters"))` |

**Selected internal components**

| Component declaration |
|:--|
| `model TabularSpring "Tabular translational spring with optional mass" import Modelica.SIunits` |
| `Real defl` |
| `Real defl_abs` |
| `Real sgn` |
| `Modelica.Blocks.Sources.RealExpression deflExpression(y = defl_abs) annotation( Placement(transformation(origin = {-90, 36}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Blocks.Sources.RealExpression sgnExpression(y = sgn) annotation( Placement(transformation(origin = {-90, 24}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Blocks.Math.Product product annotation( Placement(transformation(origin = {-60, 30}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Blocks.Tables.CombiTable1D combiTable1D(columns = {2}, extrapolation = Modelica.Blocks.Types.Extrapolation.LastTwoPoints, smoothness = Modelica.Blocks…` |

**Connection count:** 4 `connect(...)` equations.

## Documentation notes

- Keep physical assumptions in Modelica, close to the component they describe.
- Prefer records from `BobLib.Resources` for parameterization.
- Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.
