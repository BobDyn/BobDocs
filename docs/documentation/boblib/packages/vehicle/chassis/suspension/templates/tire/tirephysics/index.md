# BobLib.Vehicle.Chassis.Suspension.Templates.Tire.TirePhysics

Wheel dynamics and tire contact physics. This package contains wheel DOF variants and partial wheel templates.


This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.

## Package path

```modelica
BobLib.Vehicle.Chassis.Suspension.Templates.Tire.TirePhysics
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [Templates](/documentation/boblib/packages/vehicle/chassis/suspension/templates/tire/tirephysics/templates/) | Package | Partial wheel templates shared by concrete wheel physics models. |
| `Wheel0DOF` | model | Modelica component/model. |
| `Wheel1DOF_Y` | model | Modelica component/model. |
| `Wheel1DOF_Z` | model | Modelica component/model. |
| `Wheel2DOF_YZ` | model | Modelica component/model. |

## How this package fits

This package participates in axle and suspension construction. The library separates axle assemblies from reusable templates so that geometry, wheel/tire behavior, steering, anti-roll bar, and linkage mechanics can be composed cleanly.

## Models, records, and functions

### `Wheel0DOF`

- **Kind:** `model`
- **File:** `Vehicle/Chassis/Suspension/Templates/Tire/TirePhysics/Wheel0DOF.mo`
- **Extends:** `BobLib.Vehicle.Chassis.Suspension.Templates.Tire.TirePhysics.Templates.PartialW…`

**Selected internal components**

| Component declaration |
|:--|
| `model Wheel0DOF extends BobLib.Vehicle.Chassis.Suspension.Templates.Tire.TirePhysics.Templates.PartialWheel(inertia(J = 0.01), prismatic_z(stateSelect = StateS…` |
| `Modelica.Mechanics.Translational.Components.Rod fixedRadius(L = partialWheelParams.R0) annotation( Placement(transformation(origin = {-30, -46}, extent = \{\{-10…` |

**Connection count:** 3 `connect(...)` equations.

### `Wheel1DOF_Y`

- **Kind:** `model`
- **File:** `Vehicle/Chassis/Suspension/Templates/Tire/TirePhysics/Wheel1DOF_Y.mo`
- **Extends:** `BobLib.Vehicle.Chassis.Suspension.Templates.Tire.TirePhysics.Templates.PartialW…`
- **Imports:** `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`

**Key parameters**

| Parameter declaration |
|:--|
| `Wheel1DOF_YRecord wheel1DOF_YParams` |

**Selected internal components**

| Component declaration |
|:--|
| `model Wheel1DOF_Y import BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.Tire.Wheel1DOF_YRecord` |
| `Modelica.Mechanics.Translational.Components.Rod fixedRadius(L = partialWheelParams.R0) annotation( Placement(transformation(origin = {-30, -46}, extent = \{\{-10…` |

**Connection count:** 2 `connect(...)` equations.

### `Wheel1DOF_Z`

- **Kind:** `model`
- **File:** `Vehicle/Chassis/Suspension/Templates/Tire/TirePhysics/Wheel1DOF_Z.mo`
- **Extends:** `BobLib.Vehicle.Chassis.Suspension.Templates.Tire.TirePhysics.Templates.PartialW…`
- **Imports:** `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`

**Key parameters**

| Parameter declaration |
|:--|
| `Wheel1DOF_ZRecord wheel1DOF_ZParams` |

**Selected internal components**

| Component declaration |
|:--|
| `model Wheel1DOF_Z import BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.Tire.Wheel1DOF_ZRecord` |
| `Modelica.Mechanics.Translational.Components.SpringDamper springDamper(c = wheel1DOF_ZParams.wheelC, d = wheel1DOF_ZParams.wheelD, s_rel0 = partialWheelParams.R…` |

**Connection count:** 3 `connect(...)` equations.

### `Wheel2DOF_YZ`

- **Kind:** `model`
- **File:** `Vehicle/Chassis/Suspension/Templates/Tire/TirePhysics/Wheel2DOF_YZ.mo`
- **Extends:** `BobLib.Vehicle.Chassis.Suspension.Templates.Tire.TirePhysics.Templates.PartialW…`
- **Imports:** `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`

**Key parameters**

| Parameter declaration |
|:--|
| `Wheel1DOF_YRecord wheel1DOF_YParams` |
| `Wheel1DOF_ZRecord wheel1DOF_ZParams` |

**Selected internal components**

| Component declaration |
|:--|
| `model Wheel2DOF_YZ import BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.Tire.Wheel1DOF_YRecord` |
| `Modelica.Mechanics.Translational.Components.SpringDamper springDamper(c = wheel1DOF_ZParams.wheelC, d = wheel1DOF_ZParams.wheelD, s_rel0 = partialWheelParams.R…` |

**Connection count:** 2 `connect(...)` equations.

## Documentation notes

- Keep physical assumptions in Modelica, close to the component they describe.
- Prefer records from `BobLib.Resources` for parameterization.
- Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.
