# BobLib.Vehicle

Physical vehicle modeling layer. This package contains the full vehicle assembly and the major subsystem packages used to build it.


This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.

## Package path

```text
BobLib.Vehicle
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [Aero](/documentation/boblib/packages/vehicle/aero/) | Package | Aerodynamics package placeholder for future aerodynamic models/interfaces. |
| [Chassis](/documentation/boblib/packages/vehicle/chassis/) | Package | Chassis assembly layer. It combines the sprung structure, axle assemblies, wheel flanges, chassis frames, and suspension interfaces into a vehicle-level chassis model. |
| [Electronics](/documentation/boblib/packages/vehicle/electronics/) | Package | Vehicle electronics and control-system layer. |
| [Powertrain](/documentation/boblib/packages/vehicle/powertrain/) | Package | Powertrain interface and component layer. It contains the placeholder powertrain and subpackages for battery, drivetrain, and electronics. |
| `VehicleBase` | partial model | Modelica component/model. |
| `VehicleDW_RWD_Lock` | model | Modelica component/model. |

## How this package fits

`Vehicle` is the main physical system layer. It exposes full-vehicle models and subpackages for chassis, powertrain, electronics, and aero. Higher-level standard models instantiate vehicle models from this package and drive them with maneuver-specific inputs.

## Models, records, and functions

### `VehicleBase`

- **Kind:** `partial model`
- **File:** `Vehicle/VehicleBase.mo`
- **Imports:** `Modelica.SIunits`

**Interfaces and signals**

| Declaration |
|:--|
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b frameFL annotation( Placement(transformation(origin = {-100, 40}, extent = \{\{-16, -16}, {16…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b frameFR annotation( Placement(transformation(origin = {100, 40}, extent = \{\{-16, -16}, {16,…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b frameRL annotation( Placement(transformation(origin = {-100, -70}, extent = \{\{-16, -16}, {1…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b frameRR annotation( Placement(transformation(origin = {100, -70}, extent = \{\{-16, -16}, {16…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b cgFrame annotation( Placement(transformation(origin = {100, 0}, extent = \{\{-16, -16}, {16, …` |
| `Modelica.Mechanics.Rotational.Interfaces.Flange_a steerFlange annotation( Placement(transformation(origin = {0, 100}, extent = \{\{-10, -10},…` |

**Selected internal components**

| Component declaration |
|:--|
| `partial model VehicleBase import Modelica.SIunits` |
| `inner parameter SIunits.Length linkDiameter = 0.020` |
| `inner parameter SIunits.Length jointDiameter = 0.030` |
| `replaceable BobLib.Vehicle.Chassis.ChassisBase chassis annotation( Placement(transformation(origin = {-0.2, -0.333347}, extent = \{\{-58.8, -65.3333}, {58.8, 65.…` |

**Connection count:** 6 `connect(...)` equations.

### `VehicleDW_RWD_Lock`

- **Kind:** `model`
- **File:** `Vehicle/VehicleDW_RWD_Lock.mo`
- **Extends:** `BobLib.Vehicle.VehicleBase(redeclare BobLib.Vehicle.Chassis.ChassisDW_BC_ARB ch…`
- **Imports:** `BobLib.Vehicle.Chassis.Suspension.Templates.Tire`, `BobLib.Resources.VehicleDefn.OrionRecord`

**Key parameters**

| Parameter declaration |
|:--|
| `OrionRecord pVehicle` |

**Interfaces and signals**

| Declaration |
|:--|
| `Modelica.Mechanics.Rotational.Interfaces.Flange_b flangeFL annotation( Placement(transformation(origin = {-100, 60}, extent = \{\{-10, -10}, …` |
| `Modelica.Mechanics.Rotational.Interfaces.Flange_b flangeFR annotation( Placement(transformation(origin = {100, 60}, extent = \{\{-10, -10}, {…` |
| `Modelica.Blocks.Interfaces.RealInput uPTNTorque annotation( Placement(transformation(origin = {0, -120}, extent = \{\{-20, -20}, {20, 20\}\}, r…` |

**Selected internal components**

| Component declaration |
|:--|
| `model VehicleDW_RWD_Lock import BobLib.Vehicle.Chassis.Suspension.Templates.Tire` |
| `redeclare Tire.MF52Tire leftTire(pPartialWheel = pVehicle.pFrPartialWheel, pTireModel = pVehicle.pFrTireModel, redeclare Tire.TirePhysics.Wheel1DOF_Y wheelMode…` |
| `Powertrain.PTNPlaceholder ptnPlaceholder annotation( Placement(transformation(origin = {0, -70}, extent = \{\{-20, -4}, {20, 4\}\})))` |

**Connection count:** 6 `connect(...)` equations.

## Documentation notes

- Keep physical assumptions in Modelica, close to the component they describe.
- Prefer records from `BobLib.Resources` for parameterization.
- Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.
