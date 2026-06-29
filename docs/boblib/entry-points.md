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

## `BobLib.Experiments.Standards.VehicleSim`

`VehicleSim` is the main maneuver simulation wrapper. It follows the
VehicleInterfaces demo-style stack while inserting BobLib's detailed physics
through explicit subsystem redeclares.

The visible vehicle-level assembly includes:

- road and atmosphere models from VehicleInterfaces
- BobLib driver environment and brakes through VehicleInterfaces boundaries
- BobLib chassis and suspension
- BobLib aero interface and CFD aero map
- BobLib battery pack
- BobLib VCU
- BobLib DC inverter
- BobLib electric motor
- BobLib rear final drive and differential
- Modelica MultiBody world

The assembly uses one shared VehicleInterfaces `controlBus`. Subsystems publish
their owned measurements and commands on their domain buses: chassis ride
heights feed aero through `chassisBus`, chassis/battery/motor measurements feed
the VCU through their buses, the driver environment publishes driver intent,
and the VCU publishes electric-drive and mechanical-brake requests for
downstream subscribers. With the default regen blend, negative PI
speed-control torque goes to the mechanical brake request. Because
VehicleInterfaces 2.0.2 atmospheres have no control-bus connector, BobLib also
adds a shared `AtmosphereBus`; atmosphere publishes density and wind there, and
aero subscribes to compute relative airspeed locally.

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

BobSim uses this entry point for RampSteer, SteadyStateEval, and TransientEval
workflows.

## Tire Transients

Vehicle wrappers can redeclare the MF52 tire slip model to:

```text
BobLib.Chassis.Suspension.Tires.MF52.SlipModel.TransientSlip
```

for front-left, front-right, rear-left, and rear-right tires. The transient slip
model receives relaxation parameters from the matching tire model record:

```text
pVehicle.pFrTireModel.relaxation
pVehicle.pRrTireModel.relaxation
```

The relaxation data is encoded in:

```text
BobLib.Records.VehicleRecord.Chassis.Suspension.Templates.Tire.MF52.RelaxationRecord
```

If the relaxation coefficients are not populated, the transient slip model
falls back to default longitudinal and lateral relaxation lengths.

## Animation And Batch Runs

BobLib standard models use:

```text
inner parameter Boolean headless = false
```

by default on the public simulation paths. This means OMEdit examples open with
MultiBody animation geometry visible. Set `headless=true` for batch or CI runs
where visualization geometry is not needed.

## `BobLib.Experiments.Standards.FourPostSim`

`FourPostSim` isolates suspension/chassis response for heave and roll sweeps.
It extends a static four-post architecture template and uses
`FourPostEvalRecord` outputs so K&C-style response data can be extracted
consistently.

Common output records:

- `frKnC`
- `rrKnC`

BobSim uses this entry point for FourPostEval and downstream suspension
metrics.
