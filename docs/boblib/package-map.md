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

This page maps the BobLib repository and the top-level Modelica package areas.

## Repository Layout

| Path | Role |
| :-- | :-- |
| `BobLib/` | Modelica package root |
| `BobLib/Vehicle/` | Physical vehicle models and subsystem assemblies |
| `BobLib/Resources/` | Parameter records, tire records, visual records, vehicle definitions |
| `BobLib/Standards/` | Standard simulation models |
| `BobLib/Utilities/` | Shared math, mechanics, and FMI helpers |
| `BobLib/Tests/` | Modelica validation and regression fixtures |
| `Tests/` | Python regression harness and baselines |
| `Generation/` | YAML/templates/scripts for active package output |
| `Generation/tire_templates/` | MF5.2/PAC-style tire inputs |
| `Generation/vehicle_templates/` | Architecture-specific YAML templates |
| `Generation/vehicle.yml` | Active vehicle generation input |
| `makefile` | Local CI and regression targets |
| `msl_setup.mos` | OpenModelica package install helper |
| `.github/workflows/` | CI workflows |
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

Parameter records, generated vehicle definitions, standard output records, tire
records, and visual records.

Notable areas:

- `Resources.VehicleDefn`
- `Resources.VehicleRecord`
- `Resources.StandardRecord`
- `Resources.VisualRecord`

The generated vehicle definition record bridges YAML input data and Modelica
parameters. The active record in this checkout is:

```text
BobLib.Resources.VehicleDefn.DWBCStabar_DWBCStabarRecord
```

MF52 tire records live under:

```text
BobLib/Resources/VehicleRecord/Chassis/Suspension/Templates/Tire/MF52/
```

The tire record package includes `RelaxationRecord.mo`, which stores the
PAC2002-style relaxation coefficients consumed by transient slip.

## `BobLib.Standards`

Standardized simulation entry points used by BobSim and ad hoc OpenModelica
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

Modelica development and regression models for individual subsystems and full
vehicle configurations.

Useful examples:

- `Tests.Regression.MF52PureSlipSmoke`
- `Tests.Regression.VehicleSimAnimationOn`
- `Tests.TestVehicle.TestChassis.TestSuspension.TestFrAxleDW`
- `Tests.TestVehicle.TestChassis.TestSuspension.TestRrAxleDW`
- `Tests.TestVehicle.TestPowertrain.TestPowertrain`
- `Tests.TestVehicle.TestPowertrain.TestBatteryPack`
- `Tests.TestUtilities.TestMechanics.TestMultibody.TestGroundPhysics`

The root `Tests/` Python harness discovers and checks these Modelica fixtures.

## Root `Tests/`

The repository-level `Tests/` directory contains release guardrails:

| Path | Role |
| :-- | :-- |
| `Tests/modelica_translation_checks.py` | Translates standards, key regressions, and every `BobLib.Tests` fixture |
| `Tests/modelica_initialization_checks.py` | Zero-time simulates fixtures and compares initialization metrics |
| `Tests/modelica_initialization_baseline.csv` | Baseline metrics for initialization checks |
| `Tests/test_modelica_regression.py` | Signal-level Modelica regression simulations |
| `Tests/test_generate_vehicle_model.py` | Generator behavior and output tests |
| `Tests/test_vehicle_test_coverage.py` | Coverage checks for vehicle test fixtures |
