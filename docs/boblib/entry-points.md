---
layout: doc
title: Entry Points
prev:
  text: 'Generation'
  link: '/boblib/generation'
next:
  text: 'Development'
  link: '/boblib/development'
---

# Entry Points

BobLib standard entry points are Modelica models intended for BobSim workflows
and direct OpenModelica experiments.

## `BobLib.Standards.VehicleSim`

`VehicleSim` is the main maneuver simulation wrapper. It instantiates the
active generated vehicle, tire/ground interaction components, steer input,
speed control, and standard response outputs.

Current maneuver mode parameter:

| `useMode` | Mode |
| :-- | :-- |
| `0` | open-loop ramp steer |
| `1` | open-loop sinusoidal steer |
| `2` | step steer |

The model asserts that `useMode` is one of those three values.

Common output variables include:

- `speed`
- `accX`
- `accY`
- `yawVel`
- `roll`
- `sideslip`
- `handwheelAngle`
- `handwheelTorque`
- `leftSteerAngle`
- `rightSteerAngle`
- `Fz_FL`, `Fz_FR`, `Fz_RL`, `Fz_RR`

BobSim uses this entry point for SteadyStateEval and TransientEval.

## Tire Transients

Generated vehicles redeclare the MF52 tire slip model to:

```text
BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52.SlipModel.TransientSlip
```

for front-left, front-right, rear-left, and rear-right tires. The transient slip
model receives relaxation parameters from the matching tire model record:

```text
pVehicle.pFrTireModel.relaxation
pVehicle.pRrTireModel.relaxation
```

The relaxation data is encoded in:

```text
BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.Tire.MF52.RelaxationRecord
```

The implemented PAC2002-style relaxation lengths are:

$$
\sigma_\kappa =
F_z (p_{Tx1} + p_{Tx2} dF_z)
\exp(-p_{Tx3} dF_z)
\left(\frac{R_0}{F_{z0}}\right)
\lambda_{\sigma\kappa}
$$

$$
\sigma_\alpha =
p_{Ty1}\sin\left(2\arctan\left(\frac{F_z}{p_{Ty2}F_{z0}\lambda_{Fz0}}\right)\right)
(1 - p_{Ky3}|\gamma|)
R_0\lambda_{Fz0}\lambda_{\sigma\alpha}
$$

where:

```text
dF_z = (F_z - F_z0 * LFZO) / (F_z0 * LFZO)
```

If the relaxation coefficients are not populated, the transient slip model
falls back to default longitudinal and lateral relaxation lengths.

## Animation

`VehicleSim` exposes:

```text
inner parameter Boolean enableAnimation = false
```

The world and structural components use that inner flag so OMEdit animations can
be enabled from the standard model without editing lower-level components.

## `BobLib.Standards.FourPostSim`

`FourPostSim` isolates suspension/chassis response for heave and roll sweeps.
It uses `FourPostEvalRecord` outputs so K&C-style response data can be extracted
consistently.

Common output records:

- `frKnC`
- `rrKnC`

`FourPostSim` also exposes `inner parameter Boolean enableAnimation = false` for
OMEdit diagram and animation workflows.

BobSim uses this entry point for FourPostEval and downstream suspension metrics.
