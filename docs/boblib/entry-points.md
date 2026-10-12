---
layout: doc
title: Entry Points
prev:
  text: 'Static Templates'
  link: '/boblib/generation'
next:
  text: 'Tests and Checks'
  link: '/boblib/testing'
---

# Entry Points

The standard entry points are the Modelica models in
`BobLib.Experiments.Standards`. BobSim workflows and direct OpenModelica runs
both start from them.

| Model | Use it for | BobSim studies |
| :-- | :-- | :-- |
| [`VehicleSim`](#vehiclesim) | Full-vehicle maneuver simulation | RampSteerEval, SteadyStateEval, TransientEval |
| [`FourPostSim`](#fourpostsim) | Suspension and chassis response in heave and roll | FourPostEval |
| [`VehicleFMI`](#vehiclefmi) | FMI export, driver-in-the-loop, and software-in-the-loop work | None |

## `VehicleSim`

`VehicleSim` is the main maneuver simulation. It follows the VehicleInterfaces
demo-style assembly and inserts BobLib physics through subsystem redeclares.
See [Static Vehicle Templates](/boblib/generation) for the template stack.

The vehicle-level assembly contains:

| Subsystem | Default model |
| :-- | :-- |
| Road | `VehicleInterfaces.Roads.FlatRoad` |
| Atmosphere | `BobLib.Atmospheres.ConstantAtmosphere` |
| Driver environment | `BobLib.DriverEnvironments.Internal.Driver` |
| Chassis and suspension | `BobLib.Chassis.Chassis_DW` with bellcrank double-wishbone axles and stabilizer bars |
| Brakes | `BobLib.Chassis.Brakes.BasicVCUBrakes` |
| Aero | `BobLib.Aero.CFDAeroMap` |
| Battery | `BobLib.EnergyStorage.BatteryPack` |
| VCU | `BobLib.Controllers.StandardVCU` |
| Inverter | `BobLib.PowerElectronics.InverterDC` |
| Motor | `BobLib.ElectricDrives.Motor` |
| Transmission | `BobLib.Transmissions.FixedRatioTransmission` |
| Driveline | `BobLib.Drivelines.RearFinalDriveDifferential` |
| World | `Modelica.Mechanics.MultiBody.World` |

Subsystems share signals through one VehicleInterfaces `controlBus` and the
BobLib `AtmosphereBus`. See [Control Bus](/boblib/control-bus).

### Maneuver modes

Set the maneuver with `vcu.useMode` on `StandardVCU`:

| `vcu.useMode` | Maneuver |
| :-- | :-- |
| `0` | Open-loop ramp steer (default) |
| `1` | Open-loop sinusoidal steer |
| `2` | Step steer |
| `3` | Closed-loop steady-state lateral acceleration |

In mode `3`, the VCU ramps `vcu.targetAy` and drives measured `accY` to that
target with a handwheel-angle PI controller. The VCU speed controller holds
longitudinal speed.

### Outputs

| Group | Variables |
| :-- | :-- |
| Motion | `velX`, `velY`, `accX`, `accY`, `yawVel`, `roll`, `sideslip` |
| Steering | `handwheelAngle`, `handwheelTorque`, `steerExcess`, `leftSteerAngle`, `rightSteerAngle` |
| Tire loads | `Fz_FL`, `Fz_FR`, `Fz_RL`, `Fz_RR` |

## Tire transients

The standard chassis models redeclare the MF52 slip model of all four tires to:

```text
BobLib.Chassis.Suspension.Tires.MF52.SlipModel.TransientSlip
```

The transient slip model reads relaxation parameters from the tire model
records `pVehicle.pFrTireModel.relaxation` and
`pVehicle.pRrTireModel.relaxation`. Their type is:

```text
BobLib.Records.VehicleRecord.Chassis.Suspension.Templates.Tire.MF52.RelaxationRecord
```

If the relaxation coefficients are not populated, the model falls back to
default longitudinal and lateral relaxation lengths.

## Animation and batch runs

The standard models declare:

```text
inner parameter Boolean headless = false
```

With the default, OMEdit shows MultiBody animation geometry. Set
`headless = true` for batch or CI runs that do not need it.

## `FourPostSim`

`FourPostSim` isolates suspension and chassis response for heave and roll
sweeps. It extends a four-post architecture template. Its outputs are two
`FourPostEvalRecord` instances, `frKnC` and `rrKnC`, which hold K&C-style
response data for the front and rear axles.

## `VehicleFMI`

`VehicleFMI` is a full vehicle whose only public inputs are the driver
commands: steering-wheel angle, accelerator pedal, and brake pedal. The VCU and
EV plant stay inside the model. Use it when an external source owns the driver
commands, such as an FMI host, a driver-in-the-loop rig, or early
software-in-the-loop work.
