---
layout: doc
title: Package Map
prev:
  text: 'OMEdit Workflow'
  link: '/boblib/omedit-workflow'
next:
  text: 'Control Bus'
  link: '/boblib/control-bus'
---

# Package Map

This page maps the BobLib repository and the top-level Modelica package areas
for the VehicleInterfaces-aligned package.

## Repository Layout

| Path | Role |
| :-- | :-- |
| `BobLib/` | Production Modelica package root |
| `Tests/BobLibTest/` | Sibling Modelica test package for regression and component fixtures |
| `Tests/` | Python regression harness, baselines, and Modelica smoke tests |
| `makefile` | Local CI and regression targets |
| `msl_setup.mos` | Modelica Standard Library install helper |
| `AGENTS.md` | Repository architecture rules for future agents |
| `README.md` | Repository readme |
| `LICENSE` | GPLv3 license text |

## Public Domains

BobLib keeps VehicleInterfaces-facing models one level deep in the root
package. Deeper packages hold BobLib physics, records, utilities, and icons.

| Package | Role |
| :-- | :-- |
| `Aero` | BobLib aero interface, CFD map implementation, and rigid aero mount |
| `Chassis` | VehicleInterfaces chassis implementation backed by BobLib body, suspension, tire, and contact-patch physics |
| `Controllers` | Vehicle controller models such as the VCU |
| `Drivelines` | Final drive, differential, and halfshaft driveline models |
| `ElectricDrives` | Electric machine models |
| `EnergyStorage` | Battery pack models |
| `PowerElectronics` | Inverter and DC power-electronics models |
| `Experiments` | Front-facing standards and templates |
| `Records` | Vehicle data, visual data, and standard output schemas |
| `Utilities` | Shared math, FMI, mechanics, and multibody helpers |
| `Icons` | Reusable BobLib icon primitives |

## `BobLib.Experiments`

Standardized simulation entry points live under:

```text
BobLib.Experiments.Standards
```

Key models:

- `Standards.VehicleSim`
- `Standards.FourPostSim`
- `Standards.VehicleFMI`
- `Standards.Templates.Vehicle.BaseVehicleSim`
- `Standards.Templates.FMI.BaseVehicleFMI`
- `Standards.Templates.FourPost.BaseFourPostSim`
- `Standards.Templates.FourPost.FourPostSim_DWBCStabar_DWBCStabar`

`VehicleSim` follows the VehicleInterfaces demo-style assembly stack while
exposing the BobLib battery, controller, inverter, motor, and driveline as
explicit subsystem redeclares.

## `BobLib.Records`

Records are the Modelica schemas and parameter data for the package.

Notable areas:

- `Records.VehicleDefn`
- `Records.VehicleRecord`
- `Records.StandardRecord`
- `Records.VisualRecord`

The default vehicle definition record is:

```text
BobLib.Records.VehicleDefn.EVBatInvMotDiff_DWBCStabar_DWBCStabarRecord
```

MF52 tire data lives under:

```text
BobLib/Records/VehicleRecord/Chassis/Suspension/Templates/Tire/MF52/
```

The tire record package includes `RelaxationRecord.mo`, which stores the
PAC2002-style relaxation coefficients consumed by transient slip.

## `BobLibTest`

Modelica development and regression models live in a sibling package so the
production package remains focused.

Useful examples:

- `BobLibTest.Regression.MF52PureSlipSmoke`
- `BobLibTest.Regression.VehicleSimAnimationOn`
- `BobLibTest.TestVehicle.TestAero.TestCFDAeroMap`
- `BobLibTest.TestVehicle.TestChassis.TestSuspension.TestFrAxleDW`
- `BobLibTest.TestVehicle.TestPowertrain.TestPowertrain`
- `BobLibTest.TestUtilities.TestMechanics.TestMultiBody.TestContactMechanics.TestGroundPhysics`

## Root `Tests/`

The repository-level `Tests/` directory contains release guardrails:

| Path | Role |
| :-- | :-- |
| `Tests/modelica_translation_checks.py` | Translates standard entry points, key regressions, and every `BobLibTest` fixture |
| `Tests/modelica_initialization_checks.py` | Zero-time simulates `BobLibTest` fixtures and compares initialization metrics |
| `Tests/modelica_initialization_baseline.csv` | Baseline metrics for initialization checks |
| `Tests/test_modelica_regression.py` | Signal-level Modelica regression simulations |
| `Tests/test_boblib_modelica.py` | Loads MSL 4.1.0, VehicleInterfaces 2.0.2, and smoke-checks BobLib/BobLibTest |
