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
for the VehicleInterfaces-integrated replacement package.

## Repository Layout

| Path | Role |
| :-- | :-- |
| `BobLibVehicleInterfaces/` | Integrated Modelica package root |
| `BobLibVehicleInterfacesTests/` | Sibling Modelica test package for the integrated library |
| `BobLib/` | Legacy package kept during the transition window |
| `Tests/` | Python regression harness, baselines, and cross-package smoke tests |
| `makefile` | Local CI and regression targets |
| `msl_setup.mos` | Modelica Standard Library install helper |
| `AGENTS.md` | Repository architecture rules for future agents |
| `README.md` | Repository readme |
| `LICENSE` | GPLv3 license text |

## Public Domains

The integrated package keeps VehicleInterfaces-facing models one level deep in
the root package. Deeper packages hold BobLib physics, records, utilities, and
icons.

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

## `BobLibVehicleInterfaces.Experiments`

Standardized simulation entry points live under:

```text
BobLibVehicleInterfaces.Experiments.Standards
```

Key models:

- `Standards.VehicleSim`
- `Standards.FourPostSim`
- `Standards.Templates.BaseVehicleSim`
- `Standards.Templates.BaseFourPostSim`
- `Standards.Templates.FourPostSim_DWBCStabar_DWBCStabar`

`VehicleSim` follows the VehicleInterfaces demo-style assembly stack while
exposing the BobLib battery, controller, inverter, motor, and driveline as
explicit subsystem redeclares.

## `BobLibVehicleInterfaces.Records`

Records are the Modelica schemas and parameter data for the package.

Notable areas:

- `Records.VehicleDefn`
- `Records.VehicleRecord`
- `Records.StandardRecord`
- `Records.VisualRecord`

The default integrated vehicle definition record is:

```text
BobLibVehicleInterfaces.Records.VehicleDefn.DWBCStabar_DWBCStabarRecord
```

MF52 tire data lives under:

```text
BobLibVehicleInterfaces/Records/VehicleRecord/Chassis/Suspension/Templates/Tire/MF52/
```

The tire record package includes `RelaxationRecord.mo`, which stores the
PAC2002-style relaxation coefficients consumed by transient slip.

## `BobLibVehicleInterfacesTests`

Modelica development and regression models for the integrated library live in a
sibling package so production packages remain focused.

Useful examples:

- `BobLibVehicleInterfacesTests.Regression.MF52PureSlipSmoke`
- `BobLibVehicleInterfacesTests.Regression.VehicleSimAnimationOn`
- `BobLibVehicleInterfacesTests.TestVehicle.TestAero.TestCFDAeroMap`
- `BobLibVehicleInterfacesTests.TestVehicle.TestChassis.TestSuspension.TestFrAxleDW`
- `BobLibVehicleInterfacesTests.TestVehicle.TestPowertrain.TestPowertrain`
- `BobLibVehicleInterfacesTests.TestUtilities.TestMechanics.TestMultiBody.TestContactMechanics.TestGroundPhysics`

## Root `Tests/`

The repository-level `Tests/` directory contains release guardrails:

| Path | Role |
| :-- | :-- |
| `Tests/modelica_translation_checks.py` | Translates legacy standards, key regressions, and every legacy `BobLib.Tests` fixture |
| `Tests/modelica_initialization_checks.py` | Zero-time simulates legacy fixtures and compares initialization metrics |
| `Tests/modelica_initialization_baseline.csv` | Baseline metrics for initialization checks |
| `Tests/test_modelica_regression.py` | Signal-level Modelica regression simulations |
| `Tests/test_boblibvehicleinterfaces_modelica.py` | Loads MSL 4.1.0, VehicleInterfaces 2.0.2, and smoke-checks the integrated package |
| `Tests/test_vehicle_test_coverage.py` | Coverage checks for legacy vehicle test fixtures during transition |
