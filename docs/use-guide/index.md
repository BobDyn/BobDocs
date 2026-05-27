---
layout: doc
title: Use Guide
prev:
  text: 'Startup Guide'
  link: '/startup-guide/'
---

# Use Guide

This guide explains how to work with BobDyn after the environment is set up.

::: info Starting point
In this guide, the BobDyn/BobSim root means the repository directory created by
the BobDyn/BobSim clone step. Start there before running commands or editing
workflow files.
:::

::: tip Choose the right layer
Go to [BobDyn/BobSim](/bobsim/) when you want simulation workflows: cases, sweeps,
reports, metrics, plots, and result files.

Go to [BobDyn/BobLib](/boblib/) when you want the low-level vehicle model layer:
Modelica package structure, generated vehicle records, suspension assemblies,
tire models, or direct OpenModelica/OMEdit debugging.
:::

The short version is:

1. choose a workflow
2. edit its YAML configuration
3. run the simulation
4. inspect the metrics, plots, and report

## What BobDyn is doing

BobDyn keeps the physical model and the simulation workflow separate:

- **BobDyn/BobLib** defines the vehicle and its subsystem architecture
- **BobDyn/BobSim** runs the standard studies, extracts signals, and produces reports
- **BobDocs** explains the workflow, terminology, and outputs

That separation is what lets you change the study without hiding the physics behind a black box.

## The main workflows

The currently active standard workflows in BobDyn/BobSim are:

- `SteadyStateEval` for steady-state cornering characterization
- `TransientEval` for transient steering response and frequency-response analysis
- `FourPostEval` for suspension/chassis K&C-style heave and roll sweeps

Envelope tools, visualization, and DOE are documented as well, but the standard
eval workflows are the most reliable place to start.

## SteadyStateEval

Use `SteadyStateEval` when you want a quasi-steady characterization of lateral
vehicle behavior across ramp-steer velocity isolines.

What it does:

- holds vehicle speed constant
- runs the open-loop ramp-steer mode in `BobLib.Standards.VehicleSim`
- runs the unified `BobLib.Standards.VehicleSim` executable
- fits response curves against measured lateral acceleration
- produces a report and a metrics CSV

Relevant files:

- `_3_StandardSim/SteadyStateEval/steady_state_eval_sim.py`
- `_3_StandardSim/SteadyStateEval/steady_state_eval_config.yml`

Typical output signals include steering, lateral acceleration, roll, sideslip, yaw rate, wheel loads, and handwheel torque.

### What to look for in SteadyStateEval

- steering angle versus lateral acceleration
- curvature or radius tracking error
- roll and sideslip trends
- understeer behavior across the sweep

## TransientEval

Use `TransientEval` when you want to study response to steering inputs over time.

What it does:

- generates step and sinusoidal steering cases
- runs left and right directions when configured
- measures time histories directly from the simulation output
- computes gain and phase behavior from the sine cases
- writes a report and a metrics CSV

Relevant files:

- `_3_StandardSim/TransientEval/transient_eval_sim.py`
- `_3_StandardSim/TransientEval/transient_eval_config.yml`

### What to look for in TransientEval

- steering step response
- yaw-rate settling
- lateral acceleration rise time
- phase lag and gain trends versus frequency

## FourPostEval

Use `FourPostEval` when you want suspension and chassis K&C-style response
metrics.

What it does:

- builds and runs `BobLib.Standards.FourPostSim`
- performs heave and roll sweeps
- extracts front and rear K&C output records
- computes camber, toe, caster, KPI, trail, scrub, motion-ratio, jacking, roll-stiffness, and LLTD metrics
- writes a report and metrics CSV

Relevant files:

- `_3_StandardSim/FourPostEval/four_post_eval_sim.py`
- `_3_StandardSim/FourPostEval/four_post_eval_config.yml`

### What to look for in FourPostEval

- motion ratio near static position
- camber and toe gains in heave and roll
- roll stiffness split between springs and anti-roll bars
- lateral load transfer distribution
- jacking/anti behavior

## How to run a study

The most practical way to use BobDyn/BobSim is to edit the YAML config for the workflow you want to run.

### Common config sections

|Section|Purpose|
|:--|:--|
|`simulation`|Build directory, executable name, solver, output format, time settings, and runner flags|
|`execution`|Parallelism, worker count, cleanup, and log streaming|
|`sweep` / `test`|Case-generation inputs for the study|
|`report`|Title page metadata and report output path|
|`plots`|Plot layout and signal mapping|
|`fit`|Workflow-specific fitting or curve logic|

### Typical run pattern

```bash
make build-vehicle-sim
make steady-state-eval
make transient-eval
```

For the four-post workflow:

```bash
make build-four-post-sim
make four-post-eval
```

If you want to run only one workflow, just run the corresponding target or module.

## Where results go

BobDyn/BobSim writes the active standard-study outputs under:

```text
_3_StandardSim/results/
```

That directory usually contains:

- a PDF report for human review
- a metrics CSV for downstream analysis
- per-case run folders while a job is executing

The per-run folders are useful when debugging a failed case because they contain the overrides file, log output, and result CSV.

## Reading the outputs

Use the report first if you want a quick engineering readout.

Use the metrics CSV if you want:

- a spreadsheet-friendly summary
- comparison across runs
- post-processing in Python, MATLAB, or a notebook

Use the raw case outputs if you need:

- a specific time history
- a failed-run log
- deeper investigation of a suspicious metric

## Related documentation

If you want to dig deeper, these pages are the next stop:

- [BobDyn/BobSim overview](/bobsim/) for workflow structure and standard-study entry points
- [StandardSim](/bobsim/standard-sim) for SteadyStateEval, TransientEval, and FourPostEval
- [Configuration](/bobsim/configuration) for YAML and build configuration
- [Results](/bobsim/results) for output paths, metrics CSVs, and raw artifacts
- [BobDyn/BobLib overview](/boblib/) for low-level model structure and debugging
- [Reference index](/reference/)
- [Vehicle performance metrics](/reference/metrics)
- [Control theory](/reference/control-theory)

## Practical advice

- Start with `SteadyStateEval` if you are validating a new setup.
- Use `TransientEval` when you care about response dynamics instead of a settled operating point.
- Use `FourPostEval` before envelope review work when you want updated LLTD and suspension metrics.
- Keep the report and metrics CSV under version control only when you intentionally want to show a baseline result.
- When a run fails, check the run log before changing the model. Many issues are configuration or build-path problems, not physics problems.
