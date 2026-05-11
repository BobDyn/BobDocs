# BobLib.Vehicle.Electronics.Controllers

Closed-loop controllers used by standard maneuvers and vehicle-level models.


This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.

## Package path

```modelica
BobLib.Vehicle.Electronics.Controllers
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `CurvatureController` | model | Modelica component/model. |
| `SpeedController` | model | Modelica component/model. |

## How this package fits

This package contributes to the BobLib Modelica library structure and is documented from the current package contents.

## Models, records, and functions

### `CurvatureController`

- **Kind:** `model`
- **File:** `Vehicle/Electronics/Controllers/CurvatureController.mo`

**Key parameters**

| Parameter declaration |
|:--|
| `Real kp = 0.25 annotation(Dialog(group="Controller"))` |
| `Real ki = 0.05 annotation(Dialog(group="Controller"))` |
| `Real activation_time = 0 annotation(Dialog(group="Activation"))` |
| `Real activation_duration = 1 annotation(Dialog(group="Activation"))` |
| `Real default_output = 0 annotation(Dialog(group="Activation"))` |
| `Real vx_min = 1.0 "m/s floor for curvature"` |
| `Real Tr = 0.03 "yaw rate filter"` |
| `Real T_rack = 0.05 "rack actuator lag"` |

**Interfaces and signals**

| Declaration |
|:--|
| `model CurvatureController Modelica.Blocks.Interfaces.RealInput yaw_rate annotation( Placement(transformation(origin = {-120, 0}, extent = {…` |
| `Modelica.Blocks.Interfaces.RealInput v annotation( Placement(transformation(origin = {-60, -120}, extent = \{\{-20, -20}, {20, 20\}\}, rotation…` |
| `Modelica.Blocks.Interfaces.RealInput kappa_ref annotation( Placement(transformation(origin = {60, -120}, extent = \{\{-20, -20}, {20, 20\}\}, r…` |
| `Modelica.Blocks.Interfaces.RealOutput rack annotation( Placement(transformation(origin = {110, 0}, extent = \{\{-10, -10}, {10, 10\}\}), iconTr…` |

### `SpeedController`

- **Kind:** `model`
- **File:** `Vehicle/Electronics/Controllers/SpeedController.mo`

**Key parameters**

| Parameter declaration |
|:--|
| `Real kp = 400 annotation(Dialog(group="Controller", tab="Gains"))` |
| `Real ki = 80 annotation(Dialog(group="Controller", tab="Gains"))` |
| `Real torque_max = 4000 annotation(Dialog(group="Limits", tab="Actuator"))` |
| `Real torque_min = -4000 annotation(Dialog(group="Limits", tab="Actuator"))` |
| `Real tau = 0.05 annotation(Dialog(group="Actuator", tab="Dynamics"))` |

**Interfaces and signals**

| Declaration |
|:--|
| `model SpeedController Modelica.Blocks.Interfaces.RealInput v annotation( Placement(transformation(origin = {-120, 0}, extent = \{\{-20, -20},…` |
| `Modelica.Blocks.Interfaces.RealInput v_ref annotation( Placement(transformation(origin = {0, -120}, extent = \{\{-20, -20}, {20, 20\}\}, rotati…` |
| `Modelica.Blocks.Interfaces.RealOutput drive_torque annotation( Placement(transformation(origin = {110, 0}, extent = \{\{-10, -10}, {10, 10\}\})…` |

## Documentation notes

- Keep physical assumptions in Modelica, close to the component they describe.
- Prefer records from `BobLib.Resources` for parameterization.
- Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.
