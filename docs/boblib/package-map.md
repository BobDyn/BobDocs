---
layout: doc
title: Package Map
prev:
  text: 'OMEdit Workflow'
  link: '/boblib/omedit-workflow'
next:
  text: 'Generation'
  link: '/boblib/generation'
---

# Package Map

This page maps the BobDyn/BobLib repository and the top-level Modelica package areas.

## Repository Layout

| Path | Role |
| :-- | :-- |
| `BobLib/` | Modelica package root |
| `BobLib/Vehicle/` | Physical vehicle models and subsystem assemblies |
| `BobLib/Resources/` | Parameter records and visual/vehicle definitions |
| `BobLib/Standards/` | Standard simulation models |
| `BobLib/Utilities/` | Shared math, mechanics, and FMI helpers |
| `BobLib/Tests/` | Validation and development test models |
| `BobLib/package.mo` | Root Modelica package definition |
| `Generation/` | YAML/templates/scripts for active package output |
| `Generation/scripts/` | Python generation helpers |
| `Generation/tire_templates/` | MF5.2/PAC-style `.tir` inputs |
| `Generation/vehicle_templates/` | Architecture-specific YAML templates |
| `Generation/vehicle.yml` | Active vehicle generation input |
| `msl_setup.mos` | OpenModelica package install helper |
| `README.md` | Repository readme |
| `LICENSE` | GPLv3 license text |

## `BobLib.Vehicle`

Physical vehicle models and subsystem assemblies.

Notable areas:

- `Vehicle.VehicleBase`
- `Vehicle.Vehicle_DWBCStabar_DWBCStabar`
- `Vehicle.Chassis`
- `Vehicle.Chassis.Body`
- `Vehicle.Chassis.Suspension`
- `Vehicle.Chassis.Suspension.Linkages`
- `Vehicle.Chassis.Suspension.Templates`
- `Vehicle.Powertrain`
- `Vehicle.Powertrain.Battery`
- `Vehicle.Powertrain.Drivetrain`
- `Vehicle.Powertrain.Electronics`
- `Vehicle.Electronics.Controllers`
- `Vehicle.Aero`

## `BobLib.Resources`

Parameter records, generated vehicle definitions, standard output records, and
visual records.

Notable areas:

- `Resources.VehicleDefn`
- `Resources.VehicleRecord`
- `Resources.StandardRecord`
- `Resources.VisualRecord`

The generated vehicle definition record is the bridge between YAML input data
and Modelica parameters. The active record in this checkout is:

```text
BobLib.Resources.VehicleDefn.DWBCStabar_DWBCStabarRecord
```

## `BobLib.Standards`

Standardized simulation entry points used by BobDyn/BobSim and ad hoc OpenModelica
runs.

Key models:

- `Standards.VehicleSim`
- `Standards.FourPostSim`

## `BobLib.Utilities`

Shared helper functions and components used throughout the library.

Notable areas:

- `Utilities.Math.Vector`
- `Utilities.Math.Tensor`
- `Utilities.Mechanics`
- `Utilities.Mechanics.Multibody`
- `Utilities.FMI`

## `BobLib.Tests`

Development and validation models for individual subsystems and full vehicle
configurations.

Useful examples:

- `Tests.TestVehicle.TestChassis.TestSuspension.TestFrAxleDW`
- `Tests.TestVehicle.TestChassis.TestSuspension.TestRrAxleDW`
- `Tests.TestVehicle.TestPowertrain.TestPowertrain`
- `Tests.TestVehicle.TestPowertrain.TestBatteryPack`
- `Tests.TestUtilities.TestMechanics.TestMultibody.TestGroundPhysics`
