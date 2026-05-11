# BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52.SlipModel

Slip-state models for the MF52 tire, including no-slip, kinematic-slip, and transient-slip variants.


This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.

## Package path

```text
BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52.SlipModel
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `BaseSlipModel` | partial model | Modelica component/model. |
| `KinematicSlip` | model | Modelica component/model. |
| `NoSlip` | model | Modelica component/model. |
| `TransientSlip` | model | Modelica component/model. |

## How this package fits

This package participates in the MF52 tire implementation. The Modelica side is split between coefficient records, slip state calculation, and force/moment evaluation blocks so that tire behavior can be configured independently of wheel dynamics.

## Models, records, and functions

### `BaseSlipModel`

- **Kind:** `partial model`
- **File:** `Vehicle/Chassis/Suspension/Templates/Tire/MF52/SlipModel/BaseSlipModel.mo`
- **Imports:** `Modelica.SIunits`

**Interfaces and signals**

| Declaration |
|:--|
| `SIunits.Velocity Vx "Longitudinal velocity at contact patch"` |
| `SIunits.Velocity Vy "Lateral velocity at contact patch"` |
| `SIunits.AngularVelocity omega "Wheel angular speed"` |
| `SIunits.Length R0 "Unloaded tire radius"` |
| `SIunits.Angle alpha "Slip angle"` |
| `Real kappa "Slip ratio"` |

**Selected internal components**

| Component declaration |
|:--|
| `partial model BaseSlipModel import Modelica.SIunits` |

### `KinematicSlip`

- **Kind:** `model`
- **File:** `Vehicle/Chassis/Suspension/Templates/Tire/MF52/SlipModel/KinematicSlip.mo`
- **Extends:** `BaseSlipModel`

**Key parameters**

| Parameter declaration |
|:--|
| `Real V_min = 0.5 "Low-speed regularization velocity"` |
| `Real kappa_max = 2.0 "Clamp for longitudinal slip"` |
| `Real alpha_max = 1.2 "Clamp for slip angle [rad]"` |

**Selected internal components**

| Component declaration |
|:--|
| `model KinematicSlip extends BaseSlipModel` |

### `NoSlip`

- **Kind:** `model`
- **File:** `Vehicle/Chassis/Suspension/Templates/Tire/MF52/SlipModel/NoSlip.mo`
- **Extends:** `BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52.SlipModel.BaseSlipModel`

**Selected internal components**

| Component declaration |
|:--|
| `model NoSlip extends BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52.SlipModel.BaseSlipModel` |

### `TransientSlip`

- **Kind:** `model`
- **File:** `Vehicle/Chassis/Suspension/Templates/Tire/MF52/SlipModel/TransientSlip.mo`
- **Extends:** `BaseSlipModel`
- **Imports:** `Modelica.SIunits`

**Key parameters**

| Parameter declaration |
|:--|
| `SIunits.Length sigma_kappa = 0.5 "Longitudinal relaxation length"` |
| `SIunits.Length sigma_alpha = 0.5 "Lateral relaxation length"` |
| `Real V_min = 0.5 "Low-speed regularization velocity"` |
| `Real kappa_max = 2.0 "Clamp for longitudinal slip"` |
| `Real alpha_max = 1.2 "Clamp for slip angle [rad]"` |

**Selected internal components**

| Component declaration |
|:--|
| `model TransientSlip extends BaseSlipModel` |
| `SIunits.Length u(nominal=0.1) "Longitudinal deformation state"` |
| `SIunits.Length v(nominal=0.1) "Lateral deformation state"` |

## Documentation notes

- Keep physical assumptions in Modelica, close to the component they describe.
- Prefer records from `BobLib.Resources` for parameterization.
- Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.
