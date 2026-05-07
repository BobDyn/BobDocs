---
layout: doc
title: BobSim
---

# BobSim

BobSim is the Python orchestration layer for BobDyn. It runs BobLib models, extracts signals, computes metrics, and turns simulation output into reports.

## Repository layout

```text
BobSim/
├─ _0_Utils/        plotting and reporting engines
├─ _1_VisualSim/    visualization renderer and templates
├─ _2_EnvelopeSim/  GGV and YMD first-principles envelope tools
├─ _3_StandardSim/  ISO4138, ISO7401, KnC, and shared runners
└─ _4_DOE/          design-of-experiments pipeline scaffold
```

## Active standard workflow

The active standard workflow is based on:

| File | Role |
|:--|:--|
| `_3_StandardSim/_modelica_runner.py` | Runs the compiled OpenModelica executable. |
| `_3_StandardSim/build.mos` | Builds `BobLib.Standards.VehicleModel`. |
| `_3_StandardSim/ISO4138/iso4138_sim.py` | ISO4138 case generation, execution, summaries, and reporting. |
| `_3_StandardSim/ISO7401/iso7401_sim.py` | ISO7401 case generation, execution, summaries, and reporting. |
| `_0_Utils/reporting/report_engine.py` | Builds PDF reports. |
| `_0_Utils/plotting/plot_engine.py` | Renders configured plots. |

## What BobSim does during a run

```text
YAML config
  ↓
case generation
  ↓
OpenModelica override files
  ↓
compiled executable runs
  ↓
CSV result files
  ↓
signal extraction
  ↓
summary metrics
  ↓
plots + reports
```

## Public APIs versus internal paths

BobSim is still evolving. For public release, the safest user-facing entry points are:

```bash
python3 -m _3_StandardSim.ISO4138.iso4138_sim
python3 -m _3_StandardSim.ISO7401.iso7401_sim
make ISO4138
make ISO7401
```

Treat lower-level modules as useful and inspectable, but not all of them are stable APIs yet.

## Learn more

- [Getting started](/bobsim/getting-started)
- [Configuration](/bobsim/configuration)
- [Modelica runner](/bobsim/modelica-runner)
- [Reports and metrics](/bobsim/reports)
- [Visualization](/bobsim/visualization)
- [Envelope tools](/bobsim/envelope-tools)
- [Design of Experiments](/bobsim/doe)
- [Current status](/bobsim/status)
