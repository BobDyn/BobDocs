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

This page maps the BobLib repository and its top-level Modelica packages.

## Repository layout

| Path | Role |
| :-- | :-- |
| `BobLib/` | Production Modelica package root |
| `Tests/BobLibTest/` | Sibling Modelica package for regression and component fixtures |
| `Tests/` | Python test harness, baselines, and pinned tool versions |
| `makefile` | Check and dependency targets. See [Tests and Checks](/boblib/testing). |
| `msl_setup.mos` | Installs Modelica `4.1.0` and VehicleInterfaces `2.0.2` |
| `AGENTS.md` | Package architecture rules |
| `CHANGELOG.md` | Release notes |
| `README.md` | Repository readme |
| `LICENSE` | GPLv3 license text |
| `THIRD_PARTY_NOTICES.md` | Dependency license notices |

## Public domains

The first level of each domain package holds the VehicleInterfaces-facing
models. Deeper packages hold BobLib physics and helpers. See the
[architecture rules](/boblib/development#architecture-rules).

| Package | Contents |
| :-- | :-- |
| `UsersGuide` | In-package documentation. BobLib's README treats it as the source of truth for the package version. |
| `Experiments` | Standard entry points and templates |
| `Records` | Vehicle data and standard output schemas |
| `Aero` | Aero interface, CFD aero map, and rigid aero mount |
| `Atmospheres` | Constant atmosphere and the BobLib `AtmosphereBus` |
| `Chassis` | VehicleInterfaces chassis backed by BobLib body, suspension, tire, brake, and contact-patch physics |
| `Controllers` | VCU models: `VCU`, `StandardVCU`, and the internal `VCUCore` |
| `DriverEnvironments` | Driver environments that publish driver intent |
| `Drivelines` | Final drive, differential, and halfshaft models |
| `ElectricDrives` | Electric machine models |
| `EnergyStorage` | Battery pack models |
| `Engines` | A simple IC engine model |
| `PowerElectronics` | DC inverter models |
| `Transmissions` | Fixed-ratio transmission |
| `Utilities` | Math, FMI, and mechanics helpers, including MultiBody helpers |
| `Icons` | Reusable BobLib icon primitives |

## `BobLib.Experiments`

The standard entry points live in `BobLib.Experiments.Standards`:

| Model | Role |
| :-- | :-- |
| `Standards.VehicleSim` | Full-vehicle maneuver simulation |
| `Standards.FourPostSim` | Four-post suspension simulation |
| `Standards.VehicleFMI` | Driver-input vehicle for FMI export and driver-in-the-loop work |
| `Standards.Templates.Vehicle.BaseVehicleSim` | Shared template for `VehicleSim` |
| `Standards.Templates.FourPost.BaseFourPostSim` | Shared template for `FourPostSim` |
| `Standards.Templates.FMI.BaseVehicleFMI` | Shared template for `VehicleFMI` |

Each template package also holds one model per suspension architecture, such as
`Templates.FourPost.FourPostSim_DWBCStabar_DWBCStabar`. See
[Static Vehicle Templates](/boblib/generation) and
[Entry Points](/boblib/entry-points).

## `BobLib.Records`

Records are the Modelica parameter schemas and vehicle data.

| Package | Contents |
| :-- | :-- |
| `Records.VehicleDefn` | Complete vehicle records, one per architecture |
| `Records.VehicleRecord` | Subsystem records, grouped by domain |
| `Records.StandardRecord` | Output records such as `FourPostEvalRecord` |

The default vehicle record is
`BobLib.Records.VehicleDefn.EVBatInvMotDiff_DWBCStabar_DWBCStabarRecord`.

MF52 tire data lives under
`BobLib/Records/VehicleRecord/Chassis/Suspension/Templates/Tire/MF52/`. That
package includes `RelaxationRecord.mo`, which stores the PAC2002-style
relaxation coefficients that transient slip uses.

## `BobLibTest`

Test models live in a sibling package, so the production package holds no test
code. Examples:

- `BobLibTest.Regression.MF52PureSlipSmoke`
- `BobLibTest.Regression.VehicleSimAnimationOn`
- `BobLibTest.TestVehicle.TestAero.TestCFDAeroMap`
- `BobLibTest.TestVehicle.TestChassis.TestSuspension.TestFrAxleDW`
- `BobLibTest.TestVehicle.TestPowertrain.TestPowertrain`
- `BobLibTest.TestUtilities.TestMechanics.TestMultiBody.TestContactMechanics.TestGroundPhysics`

For the root `Tests/` Python files, see
[Tests and Checks](/boblib/testing#what-each-check-runs).
