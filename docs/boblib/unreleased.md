---
layout: doc
title: BobLib development preview
---

# BobLib development preview

::: warning Unreleased local work
This page describes an uncommitted development snapshot inspected on
19 October 2026, based on BobLib `ea7dda2`. These interfaces are not yet
available on published `main`. They may change before release.

The rest of the BobLib guide describes published `main`. Current BobSim
integration still targets its pinned BobLib revision, not this preview.
:::

## Direction

The new structure separates the vehicle plant, driver policy, and experiment
setup. Shared axle models replace separate front and rear class families.
Vehicle records follow the subsystem hierarchy.

| Area | Published main | Development snapshot |
| --- | --- | --- |
| Experiment composition | Architecture templates | Shared `Experiments.Standards.BaseClasses` |
| Maneuver and speed control | `Controllers.StandardVCU` | `Drivers.StandardDriver`, with actuator and torque policy in the VCU |
| Axles | Separate `FrAxle*` and `RrAxle*` classes | Shared `DoubleWishboneDirect`, `DoubleWishboneBellcrank`, and `DoubleWishboneBellcrankStabar` |
| Chassis | Architecture-specific assemblies | `Chassis.DoubleWishbone` with selected axle models |
| Vehicle records | Front and rear record fields | Nested chassis and axle records, such as `pVehicle.chassis.frontAxle.stabilizer` |
| Shared signals | VehicleInterfaces control bus and a separate atmosphere bus | Typed domain buses collected by `BobLib.Utilities.Interfaces.ControlBus` |
| Atmosphere | Bus signals | VehicleInterfaces position-dependent functions |
| Brakes | Under chassis | Top-level `Brakes` package |

## Experiments

All names below are under `BobLib.Experiments.Standards` in the local snapshot.

| Entry point | Purpose |
| --- | --- |
| `VehicleSim` | Vehicle response with a separate driver and explicit initialization record |
| `FourPostSim` | Double-wishbone four-post rig with replaceable axles |
| `KnCSteerable` | Single-axle kinematics and compliance with steering-angle sweeps |
| `KnCLocked` | Single-axle kinematics and compliance at a locked rack position |
| `VehicleFMI` | Vehicle plant interface for external integration |
| `ManeuverFMI` | Driver policy separated from the vehicle plant |

`ManeuverFMI` takes speed, lateral acceleration, and four normal loads. It
outputs steering angle, accelerator, brake, and maneuver status signals.
That separation allows a driver and a vehicle plant to be connected outside
one Modelica experiment.

The new `VehicleSim` carries an explicit initialization record. Its pose must
match the requested operating point. The local `FourPostSim` also explicitly
sets stabilizer rates to zero by default. Results should not be compared with
older defaults without checking these settings.

## Integration boundary

These changes affect class names, record paths, bus contracts, and experiment
composition. BobSim's Modelica generator, runner overrides, signal extraction,
and correlation tests will need to target the new interfaces together.
Existing YAML and result files should not be assumed compatible with the new
Modelica records merely because both describe the same vehicle.

This documentation review checked source structure. It did not validate the
local snapshot's translation, physics regressions, or FMU exports. Those checks
remain necessary before publishing a stable integration guide.
