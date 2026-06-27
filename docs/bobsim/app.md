---
layout: doc
title: BobSim App
---

# BobSim App

The BobSim app is the primary user interface for local vehicle setup,
simulation launch, result review, and saved run organization.

Start it from the BobSim root:

```bash
make app
```

Then open:

```text
http://127.0.0.1:8765
```

Use a direct command when you need a different host or port:

```bash
python -m _5_App.app --host 127.0.0.1 --port 8766
```

## What The App Owns

The app wraps the existing BobSim workflow code. It does not replace the CLI
targets; it gives the normal setup and run path a guided browser surface.

| Area | App responsibility |
| :-- | :-- |
| Vehicle setup | Load, create, import, edit, preview, save, and write vehicle definitions |
| Modelica stack status | Show BobLib, generated vehicle definition, `VehicleSim`, and `FourPostSim` readiness |
| Simulation launch | Configure workflows, apply edits, build, run, and stream job logs |
| Result review | Preview registered outputs, explore CSV signals, save result snapshots |
| Local libraries | Manage saved vehicles, saved run configs, saved results, and vehicle workspaces |

## Setup

`Setup` is the first stop. The startup dialog offers:

![BobSim vehicle chooser dialog with saved vehicle and template creation panels](/images/bobsim/app-vehicle-chooser.png)

| Option | Source |
| :-- | :-- |
| `Load Vehicle` | Saved vehicles in `_5_App/vehicle_configs/` |
| `Create Vehicle` | Architecture templates from `_0_Utils/vehicle_templates/` |
| `Import YAML` | A user-selected `.yml` or `.yaml` file |
| `Continue Active File` | The currently active vehicle data |

After a vehicle opens, the guided setup path is:

```text
Architecture -> Geometry -> Mass -> Suspension -> Compliances -> Tires -> Aero -> Powertrain
```

The editor pane exposes the active fields. The preview pane shows the vehicle
geometry, hardpoints, mass properties, tire curves, aero maps, suspension
linkage behavior, and powertrain layout. The `?` button opens the active step's
short reference panel.

![BobSim Architecture setup step with guided setup tabs, editable architecture controls, and assembly preview](/images/bobsim/app-setup-architecture.png)

![BobSim Geometry setup step with hardpoint coordinate fields and live suspension preview](/images/bobsim/app-setup-geometry.png)

Before running simulations:

1. Click `Save Vehicle`.
2. Click `Write to MBD`.
3. Confirm the top status strip shows the vehicle definition as current.

`Write to MBD` generates the Modelica stack that the standard simulation
workflows build and run.

## Simulation

`Simulation` is the StandardSim launch surface.

![BobSim Simulation catalog with workflow cards for Ramp Steer, Steady State, Transient, and Four Post](/images/bobsim/app-simulation-catalog.png)

| Workflow | What it runs |
| :-- | :-- |
| `Ramp Steer` | RampSteerEval using the active `VehicleSim` definition |
| `Steady State` | SteadyStateEval settled target lateral-acceleration cases |
| `Transient` | TransientEval step and sine steering cases |
| `Four Post` | FourPostEval heave, roll, and vertical-force procedures |

Each workflow card opens a configuration modal. The modal has:

| Control | Use |
| :-- | :-- |
| `Configure` tab | Edit the workflow's supported run fields |
| Run config picker | Load saved or default run configs |
| `Save Config` | Store a reusable app-side run config |
| `Apply Edits` | Apply in-browser changes before running |
| `Build + Run` or `Run` | Launch the workflow actions |
| `Run Log` tab | Follow job output and inspect recent jobs |

Standard workflows that need a Modelica executable will build it when launched
from the card. The run log is the first place to look for OpenModelica,
dependency, or simulation failures.

![BobSim Ramp Steer configuration modal with run setup fields and Build and Run action](/images/bobsim/app-simulation-config.png)

## Results

`Results` collects generated artifacts and saved snapshots.

![BobSim Results view with saved sources, Explore tab, signal controls, and Save Active Results action](/images/bobsim/app-results-explore.png)

| Tab | Use |
| :-- | :-- |
| `Explore` | Select discovered CSVs, choose an x-axis, filter signals, and plot channels |
| `Saved` | Inspect named app result snapshots |
| `Processing` | Record lightweight processing definitions around source CSVs |

Click `Save Active Results` after a run to preserve the active workflow output
bundle. The saved bundle includes the available report and metrics files plus
vehicle/config snapshots and a manifest.

## Local App Paths

| Path | Contents |
| :-- | :-- |
| `_5_App/static/` | Browser UI assets |
| `_5_App/app.py` | Local Python web server and API |
| `_5_App/vehicle_configs/` | Saved app vehicle YAML files |
| `_5_App/sim_configs/` | Default and saved app run configs |
| `_5_App/vehicle_workspaces/` | Per-vehicle generated config and result workspaces |
| `_5_App/saved_results/` | Named result snapshots saved from the app |
| `_3_StandardSim/generated_results/` | Standard outputs registered by the app |

The app also discovers CSVs under standard BobSim result and build directories
so older CLI outputs can still be explored from the Results view.

## CLI Compatibility

Everything the app runs is still backed by repository code and files. Use the
CLI when you need automation:

```bash
make standard-eval-ramp-steer
make standard-eval-steady-state
make standard-eval-transient
make standard-eval-four-post
```

Use the app when you want the guided path:

```text
Setup -> Save Vehicle -> Write to MBD -> Simulation -> Results
```

## Troubleshooting

`Simulation` is disabled

Save the vehicle, then click `Write to MBD`. The Simulation view is locked
until the saved vehicle definition is current.

`Write to MBD` is disabled

Hover the button for the reason. Common causes are missing BobLib submodule,
unsaved vehicle edits, or no active vehicle.

`No module named yaml`

Install BobSim Python requirements in the environment that launches the app:

```bash
python -m pip install -r requirements.txt
```

`omc: command not found`

Install OpenModelica locally, or run scripted CLI workflows from the Docker
environment.

No output appears in `Review`

Open `Run Log` first. A failed build or simulation usually leaves the useful
message there. Also check that the workflow's report and metrics output paths
match the files written by the active config.
