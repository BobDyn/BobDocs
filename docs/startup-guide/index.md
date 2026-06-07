---
layout: doc
title: Startup Guide
next:
  text: 'Use Guide'
  link: '/use-guide/'
---

# Startup Guide

Use this guide to get BobDyn's public simulation workflow running from a fresh
BobDyn/BobSim checkout.

::: tip Fast path
Use BobDyn/BobSim when you want the complete vehicle-analysis workspace:
standard simulations, envelopes, sensitivities, reports, plots, and result
artifacts. Use [BobDyn/BobLib](/boblib/) directly when you want to inspect or
modify the underlying Modelica library.
:::

::: info Starting point
In this guide, the BobDyn/BobSim root means the repository directory created by
the clone step below. Start in that directory before running commands.

BobDyn/BobSim vendors BobDyn/BobLib as a submodule at
`_0_Utils/external/BobLib/`.
:::

## What You Need

The recommended path is Docker. It gives you OpenModelica, the expected
Modelica Standard Library, and BobSim's Python stack in one reproducible
environment.

Install these first:

- Git
- Docker and Docker Compose
- Python 3 only if you plan to run the workflows outside Docker
- OpenModelica only if you plan to run the workflows outside Docker

## Step 1: Clone BobSim

Clone with submodules:

```bash
git clone --recurse-submodules https://github.com/BobDyn/BobSim.git
cd BobSim
```

If the repository was cloned without submodules, initialize them from the
BobSim root:

```bash
make init
```

## Step 2: Build The Environment

Build the Docker image:

```bash
make docker-build
```

For a clean image rebuild:

```bash
make docker-rebuild
```

Open the main development shell:

```bash
make shell
```

The workflow-specific shells use the same naming pattern:

```bash
make shell-standard
make shell-envelope
make shell-opt
```

You can run the make targets from the host or from inside a shell. Outside
Docker, the targets dispatch through Compose. Inside Docker, they run directly.

## Step 3: Build Standard Models

The standard maneuver workflows use:

```text
BobLib.Standards.VehicleSim
```

Build it with:

```bash
make standard-build
```

The four-post/K&C workflow uses:

```text
BobLib.Standards.FourPostSim
```

Build it with:

```bash
make standard-build-four-post
```

Both build targets copy the repo-root `vehicle.yml` into BobLib's generation
workspace before generating and compiling the Modelica source.

## Step 4: Run The Baseline Studies

Run the core public baseline studies:

```bash
make standard-eval-steady-state
make standard-eval-transient
make standard-eval-four-post
```

Or run all three standard evaluations:

```bash
make standard-eval-all
```

Standard reports and metric CSVs are written under:

```text
_3_StandardSim/results/
```

The main artifacts are:

```text
_3_StandardSim/results/steady_state_eval_report.pdf
_3_StandardSim/results/steady_state_eval_report_metrics.csv
_3_StandardSim/results/transient_eval_report.pdf
_3_StandardSim/results/transient_eval_report_metrics.csv
_3_StandardSim/results/four_post_eval_report.pdf
_3_StandardSim/results/four_post_eval_report_metrics.csv
```

## Step 5: Run Release Checks

Before sharing results or opening a PR, run:

```bash
make ci
```

That target runs:

- `make lint`
- `make typecheck`
- `make test`

BobSim's tests include repository-polish checks that guard the public command
language and prevent stale workflow names from creeping back into the release
surface.

## Optional Workflows

Envelope outputs:

```bash
make envelope-ggv
make envelope-ymd
make envelope-all
```

Sensitivity and response-surface workflows:

```bash
make opt-standard
make opt-envelope
make opt-refined
```

## Command Language

BobSim's public make targets intentionally read like a small language:

| Prefix | Meaning |
| :-- | :-- |
| `docker-*` | Build or rebuild the development image |
| `shell-*` | Open a shell in a workflow context |
| `standard-*` | Build or run high-fidelity Modelica evaluations |
| `envelope-*` | Run reduced envelope analyses |
| `opt-*` | Run sensitivity and response-surface workflows |
| `clean-*` | Remove generated artifacts |

Run `make help` for the current target list.

## Common Problems

`BobLib not found`

Run `make init` from the BobSim root.

`Executable not found` or `Init XML not found`

Run `make standard-build` for VehicleSim workflows, or
`make standard-build-four-post` for FourPostEval.

`Modelica package cannot load`

Use the Docker workflow first. For local OpenModelica installs, confirm that the
Modelica Standard Library expected by BobLib is installed.

`Simulation failed but no raw run directory remains`

Set `execution.cleanup: false` in the workflow config and rerun the study.

## Next Pages

- [Use Guide](/use-guide/) for the normal workflow after setup
- [BobDyn/BobSim overview](/bobsim/) for the command language and repo map
- [StandardSim](/bobsim/standard-sim) for SteadyStateEval, TransientEval, and FourPostEval
- [Configuration](/bobsim/configuration) for YAML and build details
- [BobDyn/BobLib overview](/boblib/) for Modelica package development
