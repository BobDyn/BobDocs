---
layout: doc
title: Startup Guide
next:
  text: 'Use Guide'
  link: '/use-guide/'
---

# Startup Guide

Use this guide to get BobDyn's simulation workflow running from a fresh
BobDyn/BobSim checkout.

::: tip Fast path
Use this guide when you want to run the full BobDyn simulation workflow through
BobDyn/BobSim. If you already have BobDyn/BobSim running, jump to the [Use Guide](/use-guide/).
If you only want to inspect, modify, or debug the low-level vehicle models, go
directly to [BobDyn/BobLib](/boblib/).
:::

::: info Starting point
In this guide, the BobDyn/BobSim root means the repository directory created by
the clone step below. Start in that directory before running any commands.

BobDyn/BobSim includes BobDyn/BobLib as a submodule under `_0_Utils/external/BobLib/`, so you only need to clone BobDyn/BobSim.
:::

## What You Need First

Before you run anything, make sure these pieces are available:

- Git
- Docker and Docker Compose
- Python 3 if you plan to run outside Docker
- OpenModelica if you plan to run outside Docker

The Docker path is the recommended first setup because it provides
OpenModelica, `Modelica 3.2.3+maint.om`, and BobDyn/BobSim's Python dependencies in
one reproducible environment.

If you only want to read the docs, you do not need the full simulation stack. If
you want to run the workflows, you do.

## Step 1: Clone BobDyn/BobSim

Clone BobDyn/BobSim with submodules:

```bash
git clone --recurse-submodules https://github.com/BobDyn/BobSim.git
cd BobSim
```

If you already cloned BobDyn/BobSim without submodules, initialize them from the
BobDyn/BobSim repository root:

```bash
make init
```

That step matters because BobDyn/BobSim expects the Modelica library checkout to be available through the submodule path under `_0_Utils/external/BobLib/`.

## Step 2: Build The Simulation Environment

BobDyn/BobSim ships with Docker support so the OpenModelica and Python toolchain can be reproduced consistently.

```bash
make setup
```

If you need a clean rebuild of the image:

```bash
make rebuild
```

The containerized workflow is the safest starting point if you are unsure which local OpenModelica or Python packages are already installed.

Open the container shell:

```bash
make shell-bobsim
```

Run the remaining workflow commands from that shell unless you have a local
OpenModelica/Python environment configured.

## Step 3: Compile The Modelica Executables

The active maneuver studies use one unified OpenModelica executable:

```text
BobLib.Standards.VehicleSim
```

Compile it with:

```bash
make build-vehicle-sim
```

After the build completes, the executable and init XML should live under:

```text
_3_StandardSim/Build/VehicleSim/
```

The four-post workflow uses a separate executable:

```text
BobLib.Standards.FourPostSim
```

Compile it with:

```bash
make build-four-post-sim
```

Its build output lives under:

```text
_3_StandardSim/Build/FourPostSim/
```

## Step 4: Run Standard Simulations

The current active standard workflows are:

- `SteadyStateEval`
- `TransientEval`
- `FourPostEval`

Run them directly with the make targets:

```bash
make steady-state-eval
make transient-eval
make four-post-eval
```

If you prefer Python entry points, you can call the modules directly:

```bash
python3 -m _3_StandardSim.SteadyStateEval.steady_state_eval_sim
python3 -m _3_StandardSim.TransientEval.transient_eval_sim
python3 -m _3_StandardSim.FourPostEval.four_post_eval_sim
```

## Step 5: Check The Outputs

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
_3_StandardSim/results/four_post_eval_report.pdf
_3_StandardSim/results/four_post_eval_report_metrics.csv
```

If you are validating the setup, opening those files is usually enough to confirm that the end-to-end path is working.

## Common problems

- `Executable not found`: the Modelica build step did not finish, or the build directory is missing.
- `Init XML not found`: the OpenModelica build output is incomplete.
- Missing Python modules: BobDyn/BobSim's environment was not built or activated.
- Empty results: check the run log under the per-case results directory and verify the model executable path in the config.

## Where to learn the details

Once the stack is running, the next useful pages are:

- [Use Guide](/use-guide/) for the normal BobDyn workflow after setup
- [BobDyn/BobSim overview](/bobsim/)
- [StandardSim](/bobsim/standard-sim) for the active simulation workflows
- [Configuration](/bobsim/configuration) for YAML and build-script details
- [BobDyn/BobLib overview](/boblib/) for low-level model inspection and debugging
- [Reference index](/reference/)
- [Vehicle performance metrics](/reference/metrics)
- [Control theory](/reference/control-theory)

This startup guide is intentionally practical. For configuration keys, signal names, and workflow-specific behavior, use the BobDyn/BobSim documentation and the Reference section.
