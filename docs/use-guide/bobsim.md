---
layout: doc
title: BobSim Use Guide
prev:
  text: 'BobLib Use Guide'
  link: '/use-guide/boblib'
---

# BobDyn/BobSim Use Guide

This guide explains how to use BobDyn/BobSim after the environment is set up.
For normal work, launch the BobSim app first and use the CLI when you need
scripted, Docker, or CI-style workflows.

::: info Starting point
In this guide, the BobDyn/BobSim root means the repository directory created by
the BobSim clone step. Start there before running commands or editing workflow
files.
:::

::: tip Choose the right layer
Use BobDyn/BobSim for simulation workflows: setup, cases, sweeps, metrics,
plots, reports, envelopes, sensitivities, and result files.

Use [BobDyn/BobLib](/use-guide/boblib) for the low-level Modelica model layer:
suspension assemblies, Modelica records, tire models, direct OpenModelica
debugging, and OMEdit diagram inspection.
:::

## Daily App Workflow

Launch the released desktop app by running `BobSim`.

From a source checkout, launch the app from the BobSim root:

```bash
make app
```

Open:

```text
http://127.0.0.1:8765
```

The normal BobSim loop is:

1. Choose or create a vehicle in `Setup`.
2. Work through Architecture, Geometry, Mass, Suspension, Compliances, Tires,
   Aero, and Powertrain.
3. Click `Save Vehicle`.
4. Click `Write to MBD`.
5. Verify the OpenModelica toolchain if Simulation asks for it.
6. Open `Simulation`, choose a workflow, configure it, then `Build + Run`.
7. Open `Results` to review, plot, and save the active outputs.

The app keeps the public workflow visible: vehicle setup on the left rail,
simulation launch in the middle, and result review after the run.

![BobSim Setup view with the guided setup rail and vehicle architecture preview](/images/bobsim/app-setup-architecture.png)

## Setup View

Use `Setup` to manage the active vehicle.

![BobSim vehicle chooser dialog for loading, creating, importing, or continuing a vehicle](/images/bobsim/app-vehicle-chooser.png)

The vehicle chooser supports:

| Action | What it does |
| :-- | :-- |
| `Load Vehicle` | Loads a saved vehicle from `_5_App/vehicle_configs/` |
| `Create Vehicle` | Starts from a checked-in architecture template |
| `Import YAML` | Imports a vehicle YAML file |
| `Continue Active File` | Keeps the currently active vehicle data |

The setup steps expose editable vehicle data while the preview shows the
current vehicle shape, hardpoints, mass placement, suspension behavior, tire
data, aero maps, and powertrain layout. Use `Next` and `Previous` for the
guided path, or jump directly with the parameter tabs.

![BobSim Geometry setup step with hardpoint editors and vehicle preview](/images/bobsim/app-setup-geometry.png)

The Tires step has its own preview mode. Use the `Setup` tab for tire
assignment and the `Load maps` tab to inspect the live pure/combined tire force
surfaces.

![BobSim Tires setup step with load-map controls and live pure and combined slip tire surface preview](/images/bobsim/app-setup-tires.png)

When edits are ready:

```text
Save Vehicle -> Write to MBD -> Simulation
```

`Write to MBD` generates the Modelica vehicle definition used by StandardSim.
The top status strip shows whether BobLib is initialized, the vehicle
definition is current, and the `VehicleSim` and `FourPostSim` builds are ready.

The released desktop app stores generated vehicles, builds, configs, and
results in the per-user BobSim runtime directory instead of inside the
downloaded executable. Source checkouts use the repository working directory.

## Simulation View

Use `Simulation` to run StandardSim workflows against the active vehicle
definition.

![BobSim Simulation view showing workflow cards and Configure actions](/images/bobsim/app-simulation-catalog.png)

| Card | Use it for | Main output |
| :-- | :-- | :-- |
| `Ramp Steer` | Open-loop steering ramp response | PDF report and metrics CSV |
| `Steady State` | Settled lateral-acceleration operating points | PDF report and metrics CSV |
| `Transient` | Step steer and sine response | PDF report and metrics CSV |
| `Four Post` | Heave, roll, and vertical-force suspension procedures | PDF report and metrics CSV |

Each card has:

- `Configure` for editable run inputs and saved run configs
- `Build + Run` or `Run` for launching the workflow
- `Run Log` for active and recent job output
- `Review` when registered outputs exist

If you change a run config in the modal, click `Apply Edits` before running.
Use `Save Config` when the same run setup should be reused later.

![BobSim simulation configuration modal with run config controls and Build and Run button](/images/bobsim/app-simulation-config.png)

Simulation requires a verified OpenModelica toolchain. BobSim auto-detects
common installs and lets you manually select the `omc` executable plus the
OpenModelica library directory when needed. The usual user library directories
are `%APPDATA%\.openmodelica\libraries` on Windows and
`~/.openmodelica/libraries` on macOS/Linux.

## Results View

Use `Results` after a run.

![BobSim Results view with result source list, Explore tab, signal controls, and plot area](/images/bobsim/app-results-explore.png)

| Tab | Use it for |
| :-- | :-- |
| `Explore` | Plot numeric columns from discovered result CSVs |
| `Saved` | Inspect named result snapshots |
| `Processing` | Track lightweight processing definitions around result CSVs |

Click `Save Active Results` to preserve the current workflow outputs with the
active vehicle and config snapshot. Saved app snapshots live under:

```text
_5_App/saved_results/
```

Vehicle-specific app workspaces live under:

```text
_5_App/vehicle_workspaces/
```

Standard app-registered outputs are under:

```text
_3_StandardSim/generated_results/
```

Some CLI configs and older checkouts may write equivalent public reports and
metrics under:

```text
_3_StandardSim/results/
```

## StandardSim Details

StandardSim is the main high-fidelity simulation lane. It lives under:

```text
_3_StandardSim/
```

Use StandardSim when a question depends on the full Modelica vehicle response:
steering behavior, settled balance, transient response, suspension heave/roll
behavior, or K&C-style metrics.

The active standard studies are:

| Study | Use it for | CLI target |
| :-- | :-- | :-- |
| RampSteerEval | Open-loop ramp-steer handling response | `make standard-eval-ramp-steer` |
| SteadyStateEval | Settled lateral-acceleration operating points | `make standard-eval-steady-state` |
| TransientEval | Step steer and continuous sine response | `make standard-eval-transient` |
| FourPostEval | Heave and roll suspension/chassis metrics | `make standard-eval-four-post` |

The app is the clearest launch surface. The make targets are the scriptable
surface.

## CLI Workflow

Use the CLI for batch work, Docker, automation, and CI.

Run the complete standard baseline:

```bash
make standard-eval-all
```

Focused maneuver work:

```bash
make standard-build
make standard-eval-ramp-steer
make standard-eval-steady-state
make standard-eval-transient
```

Focused four-post work:

```bash
make standard-build-four-post
make standard-eval-four-post
```

The run targets depend on the matching build targets, so they rebuild missing
executables automatically.

## EnvelopeSim

EnvelopeSim is an optional reduced-order lane for common envelope maps. It is a
separate implementation of calculations such as GGV and YMD maps, which are
used widely in vehicle dynamics work.

Run:

```bash
make envelope-ggv
make envelope-ymd
```

or:

```bash
make envelope-all
```

Use these outputs for quick plausibility checks, tire/aero/mass assumption
reviews, and limit-trend inspection. Use StandardSim when the question depends
on multibody transient behavior.

## OptSim

OptSim is the sensitivity and response-surface lane. It lives under:

```text
_4_OptSim/
```

Run:

```bash
make opt-standard
make opt-envelope
make opt-refined
```

Use `opt-standard` for StandardSim pre-screen sensitivities, `opt-envelope` for
EnvelopeSim sensitivities, and `opt-refined` for refined StandardSim response
surfaces.

## Debugging Runs

If a simulation fails in the app:

1. Open the workflow modal.
2. Check `Run Log`.
3. Confirm the top status strip is green enough for the workflow you are
   running.
4. Confirm the OpenModelica toolchain selector shows a verified `omc` and
   library directory.
5. Set `execution.cleanup: false` in the run config if you need raw artifacts.
6. Rerun and inspect the retained run directory.

If a simulation fails from the CLI:

1. Confirm the relevant build target completed.
2. Set `execution.cleanup: false` in the workflow config.
3. Rerun the workflow.
4. Inspect the retained run directory under the build tree.
5. Check `overrides.txt`, `run.log`, and the result CSV.

The shared runner deletes per-case directories by default after signal
extraction, so disable cleanup before investigating raw artifacts.

## Related Pages

- [BobSim App](/bobsim/app) for a tour of Setup, Simulation, and Results
- [BobDyn/BobSim overview](/bobsim/) for repository structure and target language
- [StandardSim](/bobsim/standard-sim) for the standard high-fidelity evaluations
- [Configuration](/bobsim/configuration) for YAML sections and build settings
- [Results](/bobsim/results) for artifact locations and preservation practices
- [BobDyn/BobLib use guide](/use-guide/boblib) for Modelica model structure and regression checks
