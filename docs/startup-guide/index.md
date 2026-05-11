---
layout: doc
title: Startup Guide
---

# Startup Guide

Use this guide to get BobDyn’s simulation workflow running from a fresh `../BobSim` checkout.

::: info Starting point
In this guide, `/BobSim` means the root of the `../BobSim` checkout. Start in that directory before running any commands.

BobSim includes BobLib as a submodule under `_0_Utils/external/BobLib/`, so you only need to clone BobSim.
:::

## What you need first

Before you run anything, make sure these pieces are available:

- Git
- Docker and Docker Compose
- OpenModelica tooling inside the Docker image or a local OpenModelica install
- Python dependencies used by BobSim

If you only want to read the docs, you do not need the full simulation stack. If you want to run the workflows, you do.

## Step 1: Initialize BobSim

From `/BobSim`, initialize the submodule state:

```bash
make init
```

That step matters because BobSim expects the Modelica library checkout to be available through the submodule path under `_0_Utils/external/BobLib/`.

## Step 2: Build the simulation environment

BobSim ships with Docker support so the OpenModelica and Python toolchain can be reproduced consistently.

```bash
make setup
```

If you need a clean rebuild of the image:

```bash
make rebuild
```

The containerized workflow is the safest starting point if you are unsure which local OpenModelica or Python packages are already installed.

## Step 3: Compile the Modelica executable

The active standard simulations use one unified OpenModelica executable:

```text
BobLib.Standards.VehicleSim
```

Compile it with the Modelica build script:

```bash
omc _3_StandardSim/build.mos
```

After the build completes, the executable and init XML should live under:

```text
_3_StandardSim/Build/
```

## Step 4: Run a standard simulation

The current active standard workflows are:

- `SteadyStateEval`
- `TransientEval`

Run them directly with the make targets:

```bash
make SteadyStateEval
make TransientEval
```

If you prefer Python entry points, you can call the modules directly:

```bash
python3 -m _3_StandardSim.SteadyStateEval.steady_state_eval_sim
python3 -m _3_StandardSim.TransientEval.transient_eval_sim
```

## Step 5: Check the outputs

Each run writes its results under `_3_StandardSim/results/`.

Typical artifacts include:

- a PDF report
- a metrics CSV
- per-run logs and temporary folders when cleanup is disabled

The main public outputs for the active workflows are:

```text
_3_StandardSim/results/steady_state_eval_report.pdf
_3_StandardSim/results/steady_state_eval_report_metrics.csv
_3_StandardSim/results/transient_eval_report.pdf
_3_StandardSim/results/transient_eval_report_metrics.csv
```

If you are validating the setup, opening those files is usually enough to confirm that the end-to-end path is working.

## Common problems

- `Executable not found`: the Modelica build step did not finish, or the build directory is missing.
- `Init XML not found`: the OpenModelica build output is incomplete.
- Missing Python modules: BobSim’s environment was not built or activated.
- Empty results: check the run log under the per-case results directory and verify the model executable path in the config.

## Where to learn the details

Once the stack is running, the next useful pages are:

- [BobSim overview](/bobsim/)
- [BobLib overview](/boblib/)
- [Reference index](/reference/)
- [Vehicle performance metrics](/reference/metrics)
- [Control theory](/reference/control-theory)

This startup guide is intentionally practical. For configuration keys, signal names, and workflow-specific behavior, use the BobSim documentation and the Reference section.
