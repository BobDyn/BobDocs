# BobLib.Vehicle.Chassis.Body

Sprung-body and frame models. These models represent rigid and compliant frame/body structures used by the chassis assembly.


This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.

## Package path

```text
BobLib.Vehicle.Chassis.Body
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `FrameBase` | partial model | Modelica component/model. |
| `FrameCompX` | model | Modelica component/model. |
| `FrameRigid` | model | Modelica component/model. |

## How this package fits

This package contributes to the BobLib Modelica library structure and is documented from the current package contents.

## Models, records, and functions

### `FrameBase`

- **Kind:** `partial model`
- **File:** `Vehicle/Chassis/Body/FrameBase.mo`
- **Imports:** `Modelica.SIunits`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`

**Key parameters**

| Parameter declaration |
|:--|
| `SIunits.Position frRef[3]` |
| `SIunits.Position rrRef[3]` |
| `MassRecord pSprung` |

**Interfaces and signals**

| Declaration |
|:--|
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_a frontFrame annotation( Placement(transformation(origin = {-100, 0}, extent = \{\{-16, -16}, {…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b rearFrame annotation( Placement(transformation(origin = {100, 0}, extent = \{\{-16, -16}, {16…` |
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_b cgFrame annotation( Placement(transformation(origin = {20, 100}, extent = \{\{-16, -16}, {16,…` |

**Selected internal components**

| Component declaration |
|:--|
| `partial model FrameBase import Modelica.SIunits` |
| `outer parameter SIunits.Length linkDiameter annotation( Placement(visible = false, transformation(origin = {nan, nan}, extent = \{\{nan, nan}, {nan, nan\}\})))` |
| `outer parameter SIunits.Length jointDiameter annotation( Placement(visible = false, transformation(origin = {nan, nan}, extent = \{\{nan, nan}, {nan, nan\}\})))` |
| `Modelica.Mechanics.MultiBody.Parts.Body sprungBody(m = pSprung.m, r_CM = {0, 0, 0}, I_11 = pSprung.inertia[1, 1], I_22 = pSprung.inertia[2, 2], I_33 = pSprung.…` |
| `Modelica.Mechanics.MultiBody.Parts.FixedTranslation midToFore(r = (frRef - rrRef)/2) annotation( Placement(transformation(origin = {-50, 0}, extent = \{\{10, -10…` |
| `Modelica.Mechanics.MultiBody.Parts.FixedTranslation midToAft(r = -1*(frRef - rrRef)/2) annotation( Placement(transformation(origin = {50, 0}, extent = \{\{-10, -…` |
| `Modelica.Mechanics.MultiBody.Parts.FixedTranslation midToCG(r = pSprung.rCM - (frRef + rrRef)/2, animation = false) annotation( Placement(transformation(origin…` |

**Connection count:** 5 `connect(...)` equations.

### `FrameCompX`

- **Kind:** `model`
- **File:** `Vehicle/Chassis/Body/FrameCompX.mo`
- **Extends:** `BobLib.Vehicle.Chassis.Body.FrameBase`

**Selected internal components**

| Component declaration |
|:--|
| `model FrameCompX extends BobLib.Vehicle.Chassis.Body.FrameBase` |
| `Modelica.Mechanics.MultiBody.Joints.Revolute torsionalRevolute(n = {1, 0, 0}, useAxisFlange = true, phi(nominal=1e-4), w(start = 0, fixed = true)) annotation( …` |
| `Modelica.Mechanics.Rotational.Components.Spring spring(c = 500000, phi_rel0 = 0) annotation( Placement(transformation(origin = {20, -30}, extent = \{\{10, -10}, …` |
| `Modelica.Mechanics.Rotational.Components.Damper damper(d = 2000) annotation( Placement(transformation(origin = {20, -50}, extent = \{\{10, -10}, {-10, 10\}\}, rota…` |

**Connection count:** 6 `connect(...)` equations.

### `FrameRigid`

- **Kind:** `model`
- **File:** `Vehicle/Chassis/Body/FrameRigid.mo`
- **Extends:** `BobLib.Vehicle.Chassis.Body.FrameBase`

**Selected internal components**

| Component declaration |
|:--|
| `model FrameRigid extends BobLib.Vehicle.Chassis.Body.FrameBase` |

**Connection count:** 1 `connect(...)` equations.

## Documentation notes

- Keep physical assumptions in Modelica, close to the component they describe.
- Prefer records from `BobLib.Resources` for parameterization.
- Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.
