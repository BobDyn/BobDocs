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

Use BobDyn/BobLib for the low-level Modelica model layer: VehicleInterfaces
contracts, subsystem assemblies, vehicle records, direct OpenModelica checks,
OMEdit diagrams, and package-level regression tests.

::: info Starting point
In this guide, the BobDyn/BobLib root means a direct `BobLib` repository
checkout. If you are inside BobSim, the same library lives at
`_0_Utils/external/BobLib/`.
:::

## Normal BobLib Loop

1. Pick the vehicle entry point, subsystem package, or record you need to work
   on.
2. Edit Modelica models or records in the package that owns that physics.
3. Run the BobLib checks.
4. Load the integrated package in OMEdit or translate it with OpenModelica.
5. Hand the model back to BobSim when you need full workflow runs, plots,
   metrics, or reports.

## Main Public Entry Points

| Model or package | Use it for |
| :-- | :-- |
| `BobLibVehicleInterfaces.Experiments.Standards.VehicleSim` | Primary full-vehicle simulation entry point |
| `BobLibVehicleInterfaces.Experiments.Standards.FourPostSim` | Four-post and K&C-style simulation entry point |
| `BobLibVehicleInterfaces.Experiments.Standards.Templates` | Explicit redeclare reference models for standard architectures |
| `BobLibVehicleInterfaces.Records.VehicleDefn` | Complete vehicle records assembled from domain-owned records |
| `BobLibVehicleInterfaces.Records.VehicleRecord` | Domain-level record schemas and parameter ownership |

During the transition, documentation examples use `BobLibVehicleInterfaces.*`
class names. The older `BobLib` package remains only until the final cleanup and
rename.

## Run Checks

From the BobLib root:

```bash
make test
```

With a local virtual environment:

```bash
make test PYTHON=.venv/bin/python
```

Use these checks before sharing package-structure, records, or public entry
point changes. The tests keep class coverage manifests and package expectations
aligned.

## Work Visually In OMEdit

Load the integrated package:

```text
BobLibVehicleInterfaces/package.mo
```

Then open:

```text
BobLibVehicleInterfaces.Experiments.Standards.VehicleSim
BobLibVehicleInterfaces.Experiments.Standards.FourPostSim
```

Use [OMEdit Workflow](/boblib/omedit-workflow) for the screenshot-guided path
from a clean OMEdit session.

## Work From The CLI

Use direct OpenModelica work when you need fast translation checks, headless
smoke tests, or repeatable package validation. The [CLI Workflow](/boblib/cli-workflow)
page documents the current command-line path.

For standard simulations, prefer BobSim once the model translates. BobSim owns
case execution, cleanup policy, signal extraction, metrics, and reports.

## Edit Vehicle Data

Vehicle data should live in Modelica records, not generated Python or YAML.
Keep the ownership split clear:

| Record area | Owns |
| :-- | :-- |
| `Records.VehicleRecord` | Domain-level schemas and subsystem parameter records |
| `Records.VehicleDefn` | Complete vehicle definitions that aggregate domain-owned records |
| BobSim workflow YAML | Study cases, runtime overrides, and output/report behavior |

Treat records as durable schemas. If a parameter belongs to chassis, aero,
power electronics, controls, driveline, energy storage, or another subsystem,
place it in that subsystem's record path and aggregate it upward.

## When To Switch To BobSim

Switch to BobSim when you need:

- standard maneuver evaluation
- four-post evaluation
- envelopes or design-of-experiments sweeps
- report generation
- metric CSVs
- retained or cleaned per-case run directories
- comparison of multiple workflow cases

## Related Pages

- [BobDyn/BobLib Overview](/boblib/) for package architecture
- [Package Map](/boblib/package-map) for hierarchy and ownership
- [Entry Points](/boblib/entry-points) for standard models and templates
- [BobSim Use Guide](/use-guide/bobsim) for workflow execution
