---
layout: doc
title: Use Guide
---

# Use Guide

This guide explains how to work with BobDyn after the environment is set up.

::: info Starting point
In this guide, `/BobSim` means the root of the `../BobSim` checkout. Start there before running commands or editing workflow files.
:::

The short version is:

1. choose a workflow
2. edit its YAML configuration
3. run the simulation
4. inspect the metrics, plots, and report

## What BobDyn is doing

BobDyn keeps the physical model and the simulation workflow separate:

- **BobLib** defines the vehicle and its subsystem architecture
- **BobSim** runs the standard studies, extracts signals, and produces reports
- **BobDocs** explains the workflow, terminology, and outputs

That separation is what lets you change the study without hiding the physics behind a black box.

## The main workflows

The currently active standard workflows in BobSim are:

- `SteadyStateEval` for steady-state cornering characterization
- `TransientEval` for transient steering response and frequency-response analysis

KnC, envelope tools, visualization, and DOE are documented as well, but the standard eval workflows are the most reliable place to start.

## SteadyStateEval

Use `SteadyStateEval` when you want a quasi-steady characterization of the vehicle across a radius sweep.

What it does:

- holds vehicle speed constant
- sweeps turn radius in both directions
- runs the unified `BobLib.Standards.VehicleSim` executable
- averages the settled part of each run
- produces a report and a metrics CSV

Relevant files:

- `_3_StandardSim/SteadyStateEval/steady_state_eval_sim.py`
- `_3_StandardSim/SteadyStateEval/steady_state_eval_config.yml`

Typical output signals include steering, lateral acceleration, roll, sideslip, yaw rate, wheel loads, and handwheel torque.

### Transient Response Checks

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

### What to look for

- steering step response
- yaw-rate settling
- lateral acceleration rise time
- phase lag and gain trends versus frequency

## How to run a study

The most practical way to use BobSim is to edit the YAML config for the workflow you want to run.

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
omc _3_StandardSim/build.mos
make SteadyStateEval
make TransientEval
```

If you want to run only one workflow, just run the corresponding target or module.

## Where results go

BobSim writes the active standard-study outputs under:

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

- [BobSim overview](/bobsim/)
- [BobLib overview](/boblib/)
- [Reference index](/reference/)
- [Vehicle performance metrics](/reference/metrics)
- [Control theory](/reference/control-theory)

## Practical advice

- Start with `SteadyStateEval` if you are validating a new setup.
- Use `TransientEval` when you care about response dynamics instead of a settled operating point.
- Keep the report and metrics CSV under version control only when you intentionally want to show a baseline result.
- When a run fails, check the run log before changing the model. Many issues are configuration or build-path problems, not physics problems.
