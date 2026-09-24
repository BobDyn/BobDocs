---
layout: doc
title: BobLib Use Guide
prev:
  text: 'Use Guide'
  link: '/use-guide/'
next:
  text: 'BobSim Use Guide'
  link: '/use-guide/bobsim'
---

# BobDyn/BobLib Use Guide

Use this guide for daily work on the BobLib Modelica library after
[setup](/startup-guide/boblib) is done: edit models and records, run the
checks, and inspect the result in OMEdit or OpenModelica.

::: info Where commands run
Run commands from the root of a direct `BobLib` checkout. Inside BobSim, the
same library is at `_0_Utils/external/BobLib/`.
:::

## Normal BobLib Loop

1. Find the entry point, subsystem package, or record that you need to change.
2. Edit the Modelica models or records in the package that owns that physics.
3. Run the BobLib checks.
4. Load BobLib in OMEdit or translate it with OpenModelica.
5. Hand the model back to BobSim when you need full workflow runs, plots,
   metrics, or reports.

## Main Entry Points

| Model or package | Use it for |
| :-- | :-- |
| `BobLib.Experiments.Standards.VehicleSim` | Primary full-vehicle simulation entry point |
| `BobLib.Experiments.Standards.FourPostSim` | Four-post and K&C-style simulation entry point |
| `BobLib.Experiments.Standards.VehicleFMI` | Driver-input vehicle boundary for FMI export and driver-in-the-loop or software-in-the-loop work |
| `BobLib.Experiments.Standards.Templates` | Explicit redeclare reference models for standard architectures |
| `BobLib.Records.VehicleDefn` | Complete vehicle records assembled from domain-owned records |
| `BobLib.Records.VehicleRecord` | Domain-level record schemas and parameter ownership |

Regression and component fixtures are in the sibling `Tests/BobLibTest`
Modelica package.

## Main Packages

| Area | Use it for |
| :-- | :-- |
| `BobLib.UsersGuide` | Versioned library documentation. Where it and this site disagree, `UsersGuide` is correct. |
| `BobLib.Experiments.Standards` | Complete vehicle entry points: `VehicleSim`, `FourPostSim`, and `VehicleFMI` |
| `BobLib.Records` | Vehicle data schemas and complete vehicle definitions |
| `BobLib.Chassis`, `Aero`, `Atmospheres`, `ElectricDrives`, `Engines`, `Transmissions`, `PowerElectronics`, `Controllers`, `DriverEnvironments`, `Drivelines`, `EnergyStorage` | Vehicle subsystem contracts and BobLib physics implementations |
| `BobLib.Utilities` | Shared mechanics, math, FMI, and helper functionality |

BobLib records its changes in `CHANGELOG.md` at the repository root. For the
full hierarchy, see [Package Map](/boblib/package-map).

## Run Checks

| Command | When |
| :-- | :-- |
| `make lint`, `make test-python`, `make modelica-lint`, `make modelica-smoke` | On most edits. These are fast. |
| `make test` | Before you share changes to package structure, records, or public entry points. This is the full OpenModelica gate and it is slow. |

With a local virtual environment, pass the interpreter:

```bash
make test PYTHON=.venv/bin/python
```

The tests keep class coverage manifests and package expectations aligned. See
[Development](/boblib/development) for what each check covers.

## Work Visually In OMEdit

Load `BobLib/package.mo`. Then open
`BobLib.Experiments.Standards.VehicleSim` or
`BobLib.Experiments.Standards.FourPostSim`.

For the path from a clean OMEdit session with screenshots, see
[OMEdit Workflow](/boblib/omedit-workflow).

## Work From The CLI

Use OpenModelica directly for fast translation checks, headless smoke tests,
or repeatable package validation. See [CLI Workflow](/boblib/cli-workflow).

For standard simulations, use BobSim once the model translates. BobSim owns
case execution, cleanup policy, signal extraction, metrics, and reports.

## Edit Vehicle Data

Vehicle data belongs in Modelica records, not in generated Python or YAML:

| Record area | Owns |
| :-- | :-- |
| `Records.VehicleRecord` | Domain-level schemas and subsystem parameter records |
| `Records.VehicleDefn` | Complete vehicle definitions that aggregate domain-owned records |
| BobSim workflow YAML | Study cases, runtime overrides, and output and report behavior |

Treat records as durable schemas. If a parameter belongs to chassis, aero,
power electronics, controls, driveline, energy storage, or another subsystem,
put it in that subsystem's record path and aggregate it upward.

## When To Switch To BobSim

Switch to [BobSim](/use-guide/bobsim) when you need:

- standard maneuver or four-post evaluation
- envelopes or design-of-experiments sweeps
- reports or metric CSVs
- retained or cleaned per-case run directories
- a comparison of multiple workflow cases

## Related Pages

- [BobDyn/BobLib Overview](/boblib/) for package architecture
- [Package Map](/boblib/package-map) for hierarchy and ownership
- [Entry Points](/boblib/entry-points) for standard models and templates
- [BobSim Use Guide](/use-guide/bobsim) for workflow execution
