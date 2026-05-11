# BobLib.Vehicle.Chassis.Suspension

Axle-level suspension assemblies. This package builds front/rear double-wishbone axle models from linkage templates, tires, steering, anti-roll bar, and mass elements.


This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.

## Package path

```modelica
BobLib.Vehicle.Chassis.Suspension
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [Linkages](/documentation/boblib/packages/vehicle/chassis/suspension/linkages/) | Package | Reusable linkage elements for suspension assemblies, including rod-like members and joint templates. |
| [Templates](/documentation/boblib/packages/vehicle/chassis/suspension/templates/) | Package | Subsystem templates used to construct suspension assemblies, including double wishbone, steering rack, anti-roll bar, and tire models. |
| `AxleDWBase` | partial model | Modelica component/model. |
| `FrAxleDW_BC_ARB` | model | Modelica component/model. |
| `RrAxleDW_BC_ARB` | model | Modelica component/model. |

## How this package fits

This package participates in axle and suspension construction. The library separates axle assemblies from reusable templates so that geometry, wheel/tire behavior, steering, anti-roll bar, and linkage mechanics can be composed cleanly.

## Models, records, and functions

### `AxleDWBase`

- **Kind:** `partial model`
- **File:** `Vehicle/Chassis/Suspension/AxleDWBase.mo`
- **Imports:** `Modelica.SIunits`, `BobLib.Utilities.Math.Vector`, `BobLib.Utilities.Math.Tensor`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`

**Key parameters**

| Parameter declaration |
|:--|
| `PartialWheelRecord pLeftPartialWheel` |
| `PartialWheelRecord pRightPartialWheel(R0 = pLeftPartialWheel.R0, rimR0 = pLeftPartialWheel.rimR0, rimWidth = pLeftPartialWheel.rimWidth, st…` |
| `RackAndPinionRecord pRack` |
| `WishboneUprightLoopRecord pLeftDW` |
| `WishboneUprightLoopRecord pRightDW(upperFore_i = Vector.mirrorXZ(pLeftDW.upperFore_i), upperAft_i = Vector.mirrorXZ(pLeftDW.upperAft_i), lo…` |
| `AxleMassRecord pLeftAxleMass` |
| `AxleMassRecord pRightAxleMass(unsprungMass(m = pLeftAxleMass.unsprungMass.m, rCM = Vector.mirrorXZ(pLeftAxleMass.unsprungMass.rCM), inertia…` |
| `SIunits.Position[3] effectiveCenter = {pLeftDW.wheelCenter[1], 0, pLeftDW.wheelCenter[3]}` |

**Interfaces and signals**

| Declaration |
|:--|
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_a axleFrame annotation( Placement(transformation( extent = \{\{16, -16}, {-16, 16\}\}, rotation =…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b leftCP annotation( Placement(transformation(origin = {-160, 0}, extent = \{\{16, -16}, {-16, …` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b rightCP annotation( Placement(transformation(origin = {160, 0}, extent = \{\{16, -16}, {-16, …` |
| `Modelica.Mechanics.Rotational.Interfaces.Flange_b leftTorque annotation( Placement(transformation(origin = {-180, 50}, extent = \{\{-10, -10}…` |
| `Modelica.Mechanics.Rotational.Interfaces.Flange_b rightTorque annotation( Placement(transformation(origin = {180, 50}, extent = \{\{-10, -10}…` |

**Selected internal components**

| Component declaration |
|:--|
| `partial model AxleDWBase import Modelica.SIunits` |
| `outer parameter SIunits.Length linkDiameter annotation( Dialog(tab = "Animation", group = "Sizing"))` |
| `outer parameter SIunits.Length jointDiameter annotation( Dialog(tab = "Animation", group = "Sizing"))` |
| `final parameter SIunits.Position[3] effectiveCenter = {pLeftDW.wheelCenter[1], 0, pLeftDW.wheelCenter[3]}` |
| `replaceable BobLib.Vehicle.Chassis.Suspension.Templates.Tire.BaseTire leftTire(pPartialWheel = pLeftPartialWheel) annotation( Placement(transformation(origin =…` |
| `replaceable BobLib.Vehicle.Chassis.Suspension.Templates.Tire.BaseTire rightTire(pPartialWheel = pRightPartialWheel) annotation( Placement(transformation(origin…` |
| `BobLib.Vehicle.Chassis.Suspension.Templates.DoubleWishbone.WishboneUprightLoop leftWishboneUprightLoop(pDW = pLeftDW, final linkDiameter = linkDiameter, final …` |
| `BobLib.Vehicle.Chassis.Suspension.Templates.DoubleWishbone.WishboneUprightLoop rightWishboneUprightLoop(pDW = pRightDW, final linkDiameter = linkDiameter, fina…` |
| `BobLib.Vehicle.Chassis.Suspension.Linkages.ForceOnlyRod leftTieRod(r_a = pRack.leftPickup, r_b = pLeftDW.tie_o, show_universal_axes = false, kinematicConstrain…` |
| `BobLib.Vehicle.Chassis.Suspension.Linkages.ForceOnlyRod rightTieRod(r_a = Vector.mirrorXZ(pRack.leftPickup), r_b = pRightDW.tie_o, show_universal_axes = false,…` |
| `BobLib.Vehicle.Chassis.Suspension.Templates.SteeringRack.RackAndPinion rackAndPinion(pRack = pRack, final linkDiameter = linkDiameter) annotation( Placement(tr…` |

**Connection count:** 30 `connect(...)` equations.

### `FrAxleDW_BC_ARB`

- **Kind:** `model`
- **File:** `Vehicle/Chassis/Suspension/FrAxleDW_BC_ARB.mo`
- **Extends:** `BobLib.Vehicle.Chassis.Suspension.AxleDWBase`
- **Imports:** `Modelica.SIunits`, `Modelica.Math.Vectors`, `BobLib.Utilities.Math.Vector.mirrorXZ`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.AxleDWRec…`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`

**Key parameters**

| Parameter declaration |
|:--|
| `AxleDWRecord pAxle` |
| `StabarRecord pStabar` |

**Interfaces and signals**

| Declaration |
|:--|
| `Modelica.Mechanics.Rotational.Interfaces.Flange_a steerFlange annotation( Placement(transformation(origin = {0, 140}, extent = \{\{-10, -10},…` |

**Selected internal components**

| Component declaration |
|:--|
| `model FrAxleDW_BC_ARB "Double wishbone front axle with bellcranks and stabar" import Modelica.SIunits` |
| `BobLib.Vehicle.Chassis.Suspension.Linkages.Rod leftPushrod(r_a = pAxle.bellcrankPickup2, r_b = pAxle.rodMount, n1_a = Vectors.normalize(pAxle.bellcrankPivotAxi…` |
| `Linkages.Bellcrank3 leftBellcrank(pivot = pAxle.bellcrankPivot, pivotAxis = pAxle.bellcrankPivotAxis, pickup_1 = pAxle.bellcrankPickup1, pickup_2 = pAxle.bellc…` |
| `Linkages.ShockLinkage leftShockLinkage(r_a = pAxle.bellcrankPickup3, r_b = pAxle.shockMount, s_0 = pAxle.springFreeLength, springTable = pAxle.springTable, dam…` |
| `BobLib.Vehicle.Chassis.Suspension.Linkages.Rod rightPushrod(r_a = mirrorXZ(pAxle.bellcrankPickup2), r_b = mirrorXZ(pAxle.rodMount), n1_a = Vectors.normalize(mi…` |
| `Linkages.Bellcrank3 rightBellcrank(pivot = mirrorXZ(pAxle.bellcrankPivot), pivotAxis = mirrorXZ(pAxle.bellcrankPivotAxis), pickup_1 = mirrorXZ(pAxle.bellcrankP…` |
| `Linkages.ShockLinkage rightShockLinkage(r_a = mirrorXZ(pAxle.bellcrankPickup3), r_b = mirrorXZ(pAxle.shockMount), s_0 = pAxle.springFreeLength, springTable = p…` |
| `Templates.Stabar.Stabar stabar(pStabar = pStabar, jointDiameter = jointDiameter, linkDiameter = linkDiameter) annotation( Placement(transformation(origin = {0,…` |
| `BobLib.Vehicle.Chassis.Suspension.Linkages.Rod rightDroplink(r_a = mirrorXZ(pStabar.leftArmEnd), r_b = mirrorXZ(pAxle.bellcrankPickup1), n1_a = {0, 1, 0}, kine…` |
| `BobLib.Vehicle.Chassis.Suspension.Linkages.Rod leftDroplink(r_a = pStabar.leftArmEnd, r_b = pAxle.bellcrankPickup1, n1_a = {0, 1, 0}, kinematicConstraint = tru…` |

**Connection count:** 23 `connect(...)` equations.

### `RrAxleDW_BC_ARB`

- **Kind:** `model`
- **File:** `Vehicle/Chassis/Suspension/RrAxleDW_BC_ARB.mo`
- **Extends:** `BobLib.Vehicle.Chassis.Suspension.AxleDWBase`
- **Imports:** `Modelica.SIunits`, `Modelica.Math.Vectors`, `BobLib.Utilities.Math.Vector.mirrorXZ`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.AxleDWRec…`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`

**Key parameters**

| Parameter declaration |
|:--|
| `AxleDWRecord pAxle` |
| `StabarRecord pStabar` |

**Interfaces and signals**

| Declaration |
|:--|
| `Modelica.Mechanics.Rotational.Interfaces.Flange_a steerFlange annotation( Placement(transformation(origin = {0, 140}, extent = \{\{-10, -10},…` |

**Selected internal components**

| Component declaration |
|:--|
| `model RrAxleDW_BC_ARB "Double wishbone rear axle with bellcranks and stabar" import Modelica.SIunits` |
| `BobLib.Vehicle.Chassis.Suspension.Linkages.Rod leftPullrod(r_a = pAxle.bellcrankPickup1, r_b = pAxle.rodMount, n1_a = Vectors.normalize(pAxle.bellcrankPivotAxi…` |
| `Linkages.Bellcrank3 leftBellcrank(pivot = pAxle.bellcrankPivot, pivotAxis = pAxle.bellcrankPivotAxis, pickup_1 = pAxle.bellcrankPickup1, pickup_2 = pAxle.bellc…` |
| `Linkages.ShockLinkage leftShockLinkage(r_a = pAxle.bellcrankPickup2, r_b = pAxle.shockMount, s_0 = pAxle.springFreeLength, springTable = pAxle.springTable, dam…` |
| `BobLib.Vehicle.Chassis.Suspension.Linkages.Rod rightPullrod(r_a = mirrorXZ(pAxle.bellcrankPickup1), r_b = mirrorXZ(pAxle.rodMount), n1_a = Vectors.normalize(mi…` |
| `Linkages.Bellcrank3 rightBellcrank(pivot = mirrorXZ(pAxle.bellcrankPivot), pivotAxis = mirrorXZ(pAxle.bellcrankPivotAxis), pickup_1 = mirrorXZ(pAxle.bellcrankP…` |
| `Linkages.ShockLinkage rightShockLinkage(r_a = mirrorXZ(pAxle.bellcrankPickup2), r_b = mirrorXZ(pAxle.shockMount), s_0 = pAxle.springFreeLength, springTable = p…` |
| `Templates.Stabar.Stabar stabar(pStabar = pStabar, jointDiameter = jointDiameter, linkDiameter = linkDiameter) annotation( Placement(transformation(origin = {0,…` |
| `BobLib.Vehicle.Chassis.Suspension.Linkages.Rod rightDroplink(r_a = mirrorXZ(pStabar.leftArmEnd), r_b = mirrorXZ(pAxle.bellcrankPickup3), n1_a = {0, 1, 0}, kine…` |
| `BobLib.Vehicle.Chassis.Suspension.Linkages.Rod leftDroplink(r_a = pStabar.leftArmEnd, r_b = pAxle.bellcrankPickup3, n1_a = {0, 1, 0}, kinematicConstraint = tru…` |

**Connection count:** 23 `connect(...)` equations.

## Documentation notes

- Keep physical assumptions in Modelica, close to the component they describe.
- Prefer records from `BobLib.Resources` for parameterization.
- Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.
