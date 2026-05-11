# BobLib.Vehicle.Chassis

Chassis assembly layer. It combines the sprung structure, axle assemblies, wheel flanges, chassis frames, and suspension interfaces into a vehicle-level chassis model.


This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.

## Package path

```text
BobLib.Vehicle.Chassis
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [Body](/documentation/boblib/packages/vehicle/chassis/body/) | Package | Sprung-body and frame models. These models represent rigid and compliant frame/body structures used by the chassis assembly. |
| [Suspension](/documentation/boblib/packages/vehicle/chassis/suspension/) | Package | Axle-level suspension assemblies. This package builds front/rear double-wishbone axle models from linkage templates, tires, steering, anti-roll bar, and mass elements. |
| `ChassisBase` | partial model | Modelica component/model. |
| `ChassisDW_BC_ARB` | model | Modelica component/model. |

## How this package fits

This package contributes to the BobLib Modelica library structure and is documented from the current package contents.

## Models, records, and functions

### `ChassisBase`

- **Kind:** `partial model`
- **File:** `Vehicle/Chassis/ChassisBase.mo`
- **Imports:** `Modelica.SIunits`

**Interfaces and signals**

| Declaration |
|:--|
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b frameFL annotation( Placement(transformation(origin = {-100, 42}, extent = \{\{-16, -16}, {16…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b frameFR annotation( Placement(transformation(origin = {100, 42}, extent = \{\{-16, -16}, {16,…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b frameRL annotation( Placement(transformation(origin = {-100, -90}, extent = \{\{-16, -16}, {1…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b frameRR annotation( Placement(transformation(origin = {100, -90}, extent = \{\{-16, -16}, {16…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b cgFrame annotation( Placement(transformation(origin = {100, 0}, extent = \{\{-16, -16}, {16, …` |
| `Modelica.Mechanics.Rotational.Interfaces.Flange_b flangeFL annotation( Placement(transformation(origin = {-100, 70}, extent = \{\{-10, -10}, …` |
| `Modelica.Mechanics.Rotational.Interfaces.Flange_b flangeFR annotation( Placement(transformation(origin = {100, 70}, extent = \{\{-10, -10}, {…` |
| `Modelica.Mechanics.Rotational.Interfaces.Flange_b flangeRL annotation( Placement(transformation(origin = {-100, -60}, extent = \{\{-10, -10},…` |
| `Modelica.Mechanics.Rotational.Interfaces.Flange_b flangeRR annotation( Placement(transformation(origin = {100, -60}, extent = \{\{-10, -10}, …` |
| `Modelica.Mechanics.Rotational.Interfaces.Flange_a frSteerFlange annotation( Placement(transformation(origin = {0, 100}, extent = \{\{-10, -10…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b frAxleFrame annotation( Placement(transformation(origin = {-40, 100}, extent = \{\{-16, -16},…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b rrAxleFrame annotation( Placement(transformation(origin = {-40, -100}, extent = \{\{-16, -16}…` |

**Selected internal components**

| Component declaration |
|:--|
| `partial model ChassisBase import Modelica.SIunits` |
| `inner parameter SIunits.Length linkDiameter = 0.020` |
| `inner parameter SIunits.Length jointDiameter = 0.030` |
| `replaceable BobLib.Vehicle.Chassis.Suspension.FrAxleDW_BC_ARB frAxleDW annotation( Placement(transformation(origin = {0.464283, 63}, extent = \{\{-64.25, -28.555…` |
| `replaceable BobLib.Vehicle.Chassis.Suspension.RrAxleDW_BC_ARB rrAxleDW annotation( Placement(transformation(origin = {0.285708, -60.2776}, extent = \{\{-60.1429,…` |
| `replaceable BobLib.Vehicle.Chassis.Body.FrameBase spaceFrame annotation( Placement(transformation( extent = \{\{30, -30}, {-30, 30\}\}, rotation = 90)))` |

**Connection count:** 14 `connect(...)` equations.

### `ChassisDW_BC_ARB`

- **Kind:** `model`
- **File:** `Vehicle/Chassis/ChassisDW_BC_ARB.mo`
- **Extends:** `BobLib.Vehicle.Chassis.ChassisBase`

**Selected internal components**

| Component declaration |
|:--|
| `model ChassisDW_BC_ARB "Chassis with locked rear steering" extends BobLib.Vehicle.Chassis.ChassisBase` |

**Connection count:** 2 `connect(...)` equations.

## Documentation notes

- Keep physical assumptions in Modelica, close to the component they describe.
- Prefer records from `BobLib.Resources` for parameterization.
- Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.
