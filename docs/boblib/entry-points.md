---
layout: doc
title: Entry Points
prev:
  text: 'Static Templates'
  link: '/boblib/generation'
next:
  text: 'Development'
  link: '/boblib/development'
---

# Entry Points

BobLib standard entry points are Modelica models intended for BobSim workflows
and direct OpenModelica experiments.

## `BobLibVehicleInterfaces.Experiments.Standards.VehicleSim`

`VehicleSim` is the main maneuver simulation wrapper. It follows the
VehicleInterfaces demo-style stack while inserting BobLib's detailed physics
through explicit subsystem redeclares.

The visible vehicle-level assembly includes:

- road and atmosphere models from VehicleInterfaces
- driver environment and brakes from VehicleInterfaces
- BobLib chassis and suspension
- BobLib aero interface and CFD aero map
- BobLib battery pack
- BobLib VCU
- BobLib DC inverter
- BobLib electric motor
- BobLib rear final drive and differential
- Modelica MultiBody world

Current maneuver mode parameter:

| `useMode` | Mode |
| :-- | :-- |
| `0` | open-loop ramp steer |
| `1` | open-loop sinusoidal steer |
| `2` | step steer |

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

BobSim uses this entry point for SteadyStateEval and TransientEval once the
integrated package replaces the legacy standard model.

## Tire Transients

Integrated vehicle wrappers redeclare the MF52 tire slip model to:

```text
BobLibVehicleInterfaces.Chassis.Suspension.Tires.MF52.SlipModel.TransientSlip
```

for front-left, front-right, rear-left, and rear-right tires. The transient slip
model receives relaxation parameters from the matching tire model record:

```text
pVehicle.pFrTireModel.relaxation
pVehicle.pRrTireModel.relaxation
```

The relaxation data is encoded in:

```text
BobLibVehicleInterfaces.Records.VehicleRecord.Chassis.Suspension.Templates.Tire.MF52.RelaxationRecord
```

If the relaxation coefficients are not populated, the transient slip model
falls back to default longitudinal and lateral relaxation lengths.

## Animation And Batch Runs

The integrated package uses:

```text
inner parameter Boolean headless = false
```

by default on the public simulation paths. This means OMEdit examples open with
MultiBody animation geometry visible. Set `headless=true` for batch or CI runs
where visualization geometry is not needed.

## `BobLibVehicleInterfaces.Experiments.Standards.FourPostSim`

`FourPostSim` isolates suspension/chassis response for heave and roll sweeps.
It extends a static four-post architecture template and uses
`FourPostEvalRecord` outputs so K&C-style response data can be extracted
consistently.

Common output records:

- `frKnC`
- `rrKnC`

BobSim uses this entry point for FourPostEval and downstream suspension metrics
once the integrated package replaces the legacy standard model.
