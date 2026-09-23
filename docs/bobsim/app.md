---
layout: doc
title: BobSim App
description: The BobSim desktop and browser app — install it, set up a vehicle, run a standard simulation, and find the results.
---

# BobSim App

Use the BobSim app to set up a vehicle, generate its Modelica stack, run a
standard simulation, and download the report. It runs the same repository code
as the CLI targets, so nothing you do here is app-only.

The app has four tabs. Use Setup, Simulation, and Archive in that order.
Replay is optional.

```text
Setup  →  Simulation  →  Archive
```

## Install and launch

**Desktop release** — download the BobSim asset for your OS from the
[latest GitHub Release](https://github.com/BobDyn/BobSim/releases/latest),
extract it, and run `BobSim`. It bundles the Python backend and the UI. It does
**not** bundle OpenModelica or prebuilt simulation executables. See
[OpenModelica toolchain](#openmodelica-toolchain).

**Source checkout** — from the BobSim repository root:

```bash
make docker-build
make app
```

Then open `http://127.0.0.1:8765`. The app runs in Docker and uses the image's
OpenModelica, so it needs no local Python or OpenModelica. To pick a different
port:

```bash
make app APP_PORT=8766
```

To run the app on your machine instead, use `make app RUN=`. That needs a
Python environment with `requirements.txt` installed, and a local
OpenModelica to simulate.

## Setup

Setup opens with a vehicle chooser. Pick one of four sources:

![BobSim vehicle chooser dialog with saved vehicle and template creation panels](/images/bobsim/app-vehicle-chooser.png)

| Option | Source |
| :-- | :-- |
| `Load Vehicle` | A vehicle you saved in the app (`_5_App/user_data/config/vehicles/`) |
| `Create Vehicle` | An architecture template from `_0_Utils/vehicle_templates/` |
| `Import YAML` | Any `.yml` / `.yaml` vehicle file on disk |
| `Continue Active File` | The vehicle that is active now |

When a vehicle is open, work left to right through the eight steps:

```text
Architecture → Geometry → Mass → Suspension → Compliances → Tires → Aero → Powertrain
```

The left pane edits the fields for the active step. The right pane shows a live
preview of the result, such as hardpoints, linkage motion, or tire curves. See
[Setup previews](/bobsim/visualization#setup-previews). The `?` button opens a
short reference for the step you are on.

![BobSim Architecture setup step with guided setup tabs, editable architecture controls, and assembly preview](/images/bobsim/app-setup-architecture.png)

::: details More Setup screenshots

![BobSim Geometry setup step with hardpoint coordinate fields and live suspension preview](/images/bobsim/app-setup-geometry.png)

![BobSim Tires setup step with tire load controls, .tir parameter editor, and live tire surface preview](/images/bobsim/app-setup-tires.png)

:::

### Before you can simulate

1. Click **Save Vehicle**.
2. Click **Write to MBD**. This generates the Modelica stack that the workflows
   build.
3. Check the top status strip. The vehicle definition must read as current.

Simulation stays locked until you do both steps and BobSim verifies the
OpenModelica toolchain. If `Write to MBD` is greyed out, hover over it. The
tooltip gives the reason.

## Simulation

Simulation launches the StandardSim workflows. Each card is one workflow:

![BobSim Simulation catalog with workflow cards for Ramp Steer, Steady State, Transient, and Four Post](/images/bobsim/app-simulation-catalog.png)

| Workflow | What it runs |
| :-- | :-- |
| `Ramp Steer` | RampSteerEval, using the active `VehicleSim` definition |
| `Steady State` | SteadyStateEval, settled target lateral-acceleration cases |
| `Transient` | TransientEval, step and sine steering cases |
| `Four Post` | FourPostEval, heave, roll, and vertical-force procedures |

A card opens a configuration modal with two tabs:

| Control | Use |
| :-- | :-- |
| `Configure` tab | Edit the workflow's run fields |
| Run config picker | Load a saved or default run config |
| `Save Config` | Store the current fields as a reusable app run config |
| `Apply Edits` | Commit in-browser changes before running |
| `Build + Run` / `Run` | Launch the workflow. `Build + Run` builds the Modelica executable first if needed. |
| `Run Log` tab | Live job output, plus recent jobs |

![BobSim Ramp Steer configuration modal with run setup fields and Build and Run action](/images/bobsim/app-simulation-config.png)

When a run fails, look at `Run Log` first. OpenModelica, dependency, and
simulation errors all show there.

The app edits a copy of each StandardSim config, not the checked-in file. See
[Where the app keeps its files](#where-the-app-keeps-its-files). For what the
fields do, see [StandardSim](/bobsim/standard-sim) and
[Configuration](/bobsim/configuration).

## OpenModelica toolchain

Simulation unlocks only after BobSim verifies an OpenModelica install. In
Docker (`make app`) the app finds the image's `/usr/bin/omc` and
`/root/.openmodelica/libraries` on its own. You do not need to set anything.

The desktop release and `make app RUN=` use a local OpenModelica. The app
auto-detects common locations and shows a selector when it cannot. Set two
fields:

| Field | What to point it at |
| :-- | :-- |
| `omc` executable | The OpenModelica compiler, or its `bin` directory |
| Library directory | The directory holding `Modelica`, `VehicleInterfaces`, etc. |

| Platform | Typical library directory |
| :-- | :-- |
| Windows | `%APPDATA%\.openmodelica\libraries` |
| macOS | `~/.openmodelica/libraries` |
| Linux | `~/.openmodelica/libraries` |

BobSim runs `omc --version` and checks that `Modelica` and `VehicleInterfaces`
are present before it unlocks Simulation. You do not need an OpenModelica home
path. Linux system installs usually work with only these two fields.

## Replay

Replay plays back a captured run as 3D geometry: suspension links, tires, force
vectors, and tire loads. It lists the scenes in `_1_VisualSim/results/`. To
write a scene, see [Replay a run](/bobsim/visualization#replay-a-run).

## Archive

Each successful Simulation job writes a local archive package for that vehicle
and workflow. Use Archive to download them.

![BobSim Archive view with local runs, downloadable files, and PDF preview](/images/bobsim/app-results-explore.png)

Each package contains the generated PDF report, the metrics CSV, a per-run
signal archive zip, a run description manifest, and snapshots of the vehicle and
run config. `Delete` on a card removes both the saved package and its mirrored
copy in the vehicle workspace.

For what is inside each file and for the CLI output trees, see
[Archive](/bobsim/results).

## Where the app keeps its files

Everything the app writes lives under one runtime root, separate from the code.

In a source checkout that root is `_5_App/user_data/`:

| Path | Contents |
| :-- | :-- |
| `user_data/config/app/` | App settings. The OpenModelica selection is in `openmodelica.docker.json` for the app in Docker and `openmodelica.json` otherwise. |
| `user_data/config/vehicles/` | Vehicles you saved from Setup |
| `user_data/config/active/` | The editable copy of each StandardSim workflow config that the app runs |
| `user_data/config/defaults/` | Unedited snapshots of the configs the app edits in place (EnvelopeSim, OptSim), for `Default` to restore |
| `user_data/config/simulations/` | Run configs you saved from a workflow modal |
| `user_data/results/saved/` | Archive packages |
| `user_data/workspaces/vehicles/` | Per-vehicle generated configs and results |
| `user_data/cache/modelica/` | Cached Modelica builds |

In a desktop release it is a per-user directory instead:

| Platform | Default runtime root |
| :-- | :-- |
| Windows | `%LOCALAPPDATA%\BobDyn\BobSim` |
| macOS | `~/Library/Application Support/BobDyn/BobSim` |
| Linux | `${XDG_DATA_HOME:-~/.local/share}/BobDyn/BobSim` |

Set `BOBSIM_HOME` to override it. `BOBDYN_HOME` still works for older local
builds. On each launch the desktop app refreshes app-owned resources from the
bundle: BobLib, report helpers, build scripts, and the default workflow
configs. It does not touch your saved vehicles, workspaces, results, configs,
or imported templates.

The first time the app uses a StandardSim workflow config, it copies the file
(for example `_3_StandardSim/RampSteerEval/ramp_steer_eval_config.yml`) to
`user_data/config/active/`. It edits that copy from then on. The StandardSim
`make standard-eval-*` targets also read the active copy when one exists, so
the CLI runs the same config as the app. `make clean-app` removes the active
copies.

Read-only app assets stay in the repository: `_5_App/static/` is the UI and
`_5_App/app.py` is the local server.

## Using the CLI instead

For automation, run the same workflows from the command line:

```bash
make standard-eval-ramp-steer
make standard-eval-steady-state
make standard-eval-transient
make standard-eval-four-post
```

## Troubleshooting the app

| Symptom | Fix |
| :-- | :-- |
| Simulation tab is disabled | Save the vehicle, click `Write to MBD`, and verify the OpenModelica toolchain. All three are required. |
| `Write to MBD` is disabled | Hover over it for the reason. Common causes are a missing BobLib submodule, unsaved edits, or no active vehicle. |
| `No module named yaml` | Only with `make app RUN=`: `python -m pip install -r requirements.txt` in the environment that launches the app. |
| `omc: command not found` | Only outside Docker: set the `omc` executable and library directory in the toolchain selector, or use `make app`, which runs in Docker. |
| The page does not load | Open `http://127.0.0.1:8765`, not the `0.0.0.0` address the container prints. If the port is taken, use `make app APP_PORT=8766`. |
| Nothing appears in Archive | Open `Run Log`. A failed build or run leaves the message there. Then check that the report and metrics output paths match what the active config writes. |
| A config edit in `_3_StandardSim/` has no effect | An active copy in `user_data/config/active/` takes precedence. Edit it in the app, or run `make clean-app`. |

## See also

- [Configuration](/bobsim/configuration) — every field in the run configs the app edits
- [Archive](/bobsim/results) — what each output file contains, and the CLI output trees
- [StandardSim](/bobsim/standard-sim) — the workflows behind the four cards
- [Replay](/bobsim/visualization) — setup previews and 3D replay of a run
- [BobDyn/BobSim overview](/bobsim/) — how the app fits the wider repository
