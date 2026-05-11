# BobLib.Utilities.Mechanics.Multibody

Reusable multibody components and constraints not directly provided by the Modelica Standard Library in the form needed by BobLib.


This package contains reusable helper functions/components. It should stay generic enough to be used by multiple vehicle or standard packages.

## Package path

```modelica
BobLib.Utilities.Mechanics.Multibody
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `GroundPhysics` | model | Modelica component/model. |
| `LinearActuator` | model | Modelica component/model. |
| `PlanarMotion` | model | Modelica component/model. |
| `RodConstraint` | model | Modelica component/model. |
| `TranslationalJoint` | model | Modelica component/model. |

## How this package fits

This package contributes to the BobLib Modelica library structure and is documented from the current package contents.

## Models, records, and functions

### `GroundPhysics`

- **Kind:** `model`
- **File:** `Utilities/Mechanics/Multibody/GroundPhysics.mo`

**Key parameters**

| Parameter declaration |
|:--|
| `Real c = 100000 "Vertical contact stiffness"` |
| `Real d = 750 "Vertical contact damping"` |
| `Real eps = 1e-6 "Smoothing length"` |

**Interfaces and signals**

| Declaration |
|:--|
| `model GroundPhysics Modelica.Mechanics.MultiBody.Interfaces.Frame_a frame_a annotation( Placement(transformation(origin={-100,0}, extent=\{\{…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b frame_b annotation( Placement(transformation(origin={100,0}, extent=\{\{-16,-16},{16,16\}\}), i…` |

**Selected internal components**

| Component declaration |
|:--|
| `Real pen "Smooth penetration"` |

### `LinearActuator`

- **Kind:** `model`
- **File:** `Utilities/Mechanics/Multibody/LinearActuator.mo`

**Key parameters**

| Parameter declaration |
|:--|
| `String axis = "z" annotation(choices(choice="x", choice="y", choice="z"))` |
| `Integer axisIndex = if axis == "x" then 1 elseif axis == "y" then 2 else 3` |

**Interfaces and signals**

| Declaration |
|:--|
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_a frame_a annotation( Placement(transformation(origin = {-100, 0}, extent = \{\{-16, -16}, {16,…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b frame_b annotation( Placement(transformation(origin = {100, 0}, extent = \{\{-16, -16}, {16, …` |
| `Modelica.Blocks.Interfaces.RealInput u_position annotation( Placement(transformation(origin = {0, 120}, extent = \{\{-20, -20}, {20, 20\}\}, ro…` |

**Selected internal components**

| Component declaration |
|:--|
| `model LinearActuator parameter String axis = "z" annotation(choices(choice="x", choice="y", choice="z"))` |
| `Modelica.Mechanics.MultiBody.Joints.Prismatic prismatic_x(n = {1, 0, 0}, useAxisFlange = true, animation = false, stateSelect = StateSelect.avoid) annotation( …` |
| `Modelica.Mechanics.MultiBody.Joints.Prismatic prismatic_y(n = {0, 1, 0}, useAxisFlange = true, animation = false, stateSelect = StateSelect.avoid) annotation( …` |
| `Modelica.Mechanics.MultiBody.Joints.Prismatic prismatic_z(n = {0, 0, 1}, useAxisFlange = true, animation = false, stateSelect = StateSelect.avoid) annotation( …` |
| `Modelica.Mechanics.Translational.Sources.Position position(useSupport = true) annotation( Placement(transformation(origin = {0, 70}, extent = \{\{-10, -10}, {10,…` |

**Connection count:** 11 `connect(...)` equations.

### `PlanarMotion`

- **Kind:** `model`
- **File:** `Utilities/Mechanics/Multibody/PlanarMotion.mo`

**Interfaces and signals**

| Declaration |
|:--|
| `model PlanarMotion Modelica.Mechanics.MultiBody.Interfaces.Frame_a frame_a annotation( Placement(transformation(origin = {-100, 0}, extent …` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b frame_b annotation( Placement(transformation(origin = {100, 0}, extent = \{\{-16, -16}, {16, …` |

**Selected internal components**

| Component declaration |
|:--|
| `Modelica.Mechanics.MultiBody.Joints.Prismatic free_x(n = {1, 0, 0}) annotation( Placement(transformation(origin = {-50, 0}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Mechanics.MultiBody.Joints.Prismatic free_y(n = {0, 1, 0}) annotation( Placement(transformation(extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Mechanics.MultiBody.Joints.Spherical spherical annotation( Placement(transformation(origin = {50, 0}, extent = \{\{-10, -10}, {10, 10\}\})))` |

**Connection count:** 4 `connect(...)` equations.

### `RodConstraint`

- **Kind:** `model`
- **File:** `Utilities/Mechanics/Multibody/RodConstraint.mo`
- **Extends:** `Modelica.Mechanics.MultiBody.Interfaces.LineForceBase`

**Key parameters**

| Parameter declaration |
|:--|
| `Modelica.Units.SI.Length L0` |
| `Real k` |
| `Real d` |

**Interfaces and signals**

| Declaration |
|:--|
| `model RodConstraint extends Modelica.Mechanics.MultiBody.Interfaces.LineForceBase` |

### `TranslationalJoint`

- **Kind:** `model`
- **File:** `Utilities/Mechanics/Multibody/TranslationalJoint.mo`
- **Imports:** `Modelica.SIunits`

**Key parameters**

| Parameter declaration |
|:--|
| `SIunits.Length x0=0 "Initial x-position" annotation(Dialog(group="Initialization"))` |
| `SIunits.Length y0=0 "Initial y-position" annotation(Dialog(group="Initialization"))` |
| `SIunits.Length z0=0 "Initial z-position" annotation(Dialog(group="Initialization"))` |
| `SIunits.Velocity vx0=0 "Initial x-velocity" annotation(Dialog(group="Initialization"))` |
| `SIunits.Velocity vy0=0 "Initial y-velocity" annotation(Dialog(group="Initialization"))` |
| `SIunits.Velocity vz0=0 "Initial z-velocity" annotation(Dialog(group="Initialization"))` |

**Interfaces and signals**

| Declaration |
|:--|
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_a frame_a annotation( Placement(transformation(origin = {-100, 0}, extent = \{\{-16, -16}, {16,…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b frame_b annotation( Placement(transformation(origin = {100, 0}, extent = \{\{-16, -16}, {16, …` |

**Selected internal components**

| Component declaration |
|:--|
| `model TranslationalJoint import Modelica.SIunits` |
| `Modelica.Mechanics.MultiBody.Joints.Prismatic FreeX(n = {1, 0, 0}, s(start = x0, fixed = true), v(start = vx0, fixed = true)) annotation( Placement(transformat…` |
| `Modelica.Mechanics.MultiBody.Joints.Prismatic FreeY(n = {0, 1, 0}, s(start = y0, fixed = true), v(start = vy0, fixed = true)) annotation( Placement(transformat…` |
| `Modelica.Mechanics.MultiBody.Joints.Prismatic FreeZ(n = {0, 0, 1}, s(start = z0, fixed = true), v(start = vz0, fixed = true)) annotation( Placement(transformat…` |

**Connection count:** 4 `connect(...)` equations.

## Documentation notes

- Keep helpers small, reusable, and independent of a specific vehicle definition.
- Add tests under `BobLib.Tests` when behavior is nontrivial.
