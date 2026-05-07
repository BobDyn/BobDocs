---
layout: doc
title: BobLib
---

# BobLib

BobLib is the Modelica modeling layer of BobDyn. It defines vehicle systems using acausal multibody physics and provides the compiled model that BobSim executes.

## What BobLib contains

```text
BobLib/
├─ Vehicle/      physical vehicle subsystems and assemblies
├─ Resources/    parameter records, vehicle definitions, visual records
├─ Standards/    standard maneuver models and build scripts
├─ Utilities/    reusable math, FMI, and multibody components
└─ Tests/        development and validation test models
```

## Modeling philosophy

BobLib is built around a few rules:

| Principle | Meaning |
|:--|:--|
| Physics first | Geometry, constraints, forces, and motion should come from physical relationships. |
| Acausal modeling | Components connect through Modelica equations rather than prescribed signal flow. |
| Reusable structure | Vehicle components live in `Vehicle/`; data lives in `Resources/`. |
| Inspectable assumptions | Records, parameters, and standard models are plain text and version controlled. |
| Standards reuse the model | Standard maneuvers should exercise the same underlying vehicle model, not a separate reduced model. |

## Current maturity

The chassis side is the most mature part of BobLib. The current public-release model includes:

- double-wishbone suspension architecture,
- bellcrank, rod, spring, damper, and anti-roll-bar linkages,
- rack-and-pinion steering templates,
- MF5.2-style tire evaluation structure,
- full-vehicle double-wishbone RWD assembly,
- standard-output records for ISO4138, ISO7401, KnC, and FMI-facing outputs.

Powertrain, aero, electronics, and additional vehicle architectures exist but should be treated as earlier-stage than the core chassis workflow.

## Main public entry points

| Model/package | Purpose |
|:--|:--|
| `BobLib.Standards.VehicleModel` | Active unified executable target for BobSim standard workflows. |
| `BobLib.Vehicle.VehicleDW_RWD_Lock` | Full vehicle assembly used by the active standard model. |
| `BobLib.Resources.VehicleDefn.OrionRecord` | Vehicle parameter record used by the current standard model. |
| `BobLib.Standards.StandardSim.ISO4138` | Standard-specific Modelica maneuver model. |
| `BobLib.Standards.StandardSim.ISO7401` | Standard-specific transient maneuver model. |
| `BobLib.Standards.VehicleFMI` | FMI-oriented vehicle model target. |

## Learn more

- [BobLib structure](/boblib/structure)
- [Vehicle model](/boblib/vehicle-model)
- [Parameter records](/boblib/records)
- [Modelica conventions](/boblib/modelica-conventions)
