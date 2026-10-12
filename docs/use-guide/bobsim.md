---
layout: doc
title: BobSim Use Guide
prev:
  text: 'BobLib Use Guide'
  link: '/use-guide/boblib'
next:
  text: 'BobSim CLI Workflow'
  link: '/use-guide/bobsim-cli'
---

# BobDyn/BobSim Use Guide

Use this guide for daily work in the BobSim app after setup is done. To run the
same studies from `make` targets, for scripts or CI, see
[BobSim CLI Workflow](/use-guide/bobsim-cli).

Use BobSim for simulation workflows: setup, cases, sweeps, metrics, plots, and
reports. Use [BobLib](/use-guide/boblib) for the Modelica model layer:
subsystem assemblies, records, tire models, and OMEdit diagrams.

## Daily App Workflow

Start the app:

| You have | Run | Then open |
| :-- | :-- | :-- |
| A source checkout | `make app` from the BobSim root | `http://127.0.0.1:8765` |
| The released desktop app | `BobSim` | The app opens its own window |

Then:

1. Choose or create a vehicle in `Setup`.
2. Edit the Setup steps that you need to change.
3. Click `Save Vehicle`.
4. Click `Write to MBD`.
5. Outside Docker only, verify the OpenModelica toolchain if `Simulation` asks
   for it.
6. Open `Simulation`, select a workflow, configure it, then click
   `Build + Run`.
7. Open `Archive` to review the PDF, metrics, and signal archive.

If you have not done this once yet, follow the
[BobSim Startup](/startup-guide/bobsim) tutorial first.

## Setup View

Use `Setup` to manage the active vehicle.

![BobSim vehicle chooser dialog for loading, creating, importing, or continuing a vehicle](/images/bobsim/app-vehicle-chooser.png)

| Action | What it does |
| :-- | :-- |
| `Load Vehicle` | Loads a saved vehicle from `_5_App/user_data/config/vehicles/` |
| `Create Vehicle` | Starts from a checked-in architecture template |
| `Import YAML` | Imports a vehicle YAML file |
| `Continue Active File` | Keeps the currently active vehicle data |

The eight steps are Architecture, Geometry, Mass, Suspension, Compliances,
Tires, Aero, and Powertrain. Use `Next` and `Previous` to go in order, or
select a step tab to go to it directly. The preview shows what the current step
affects: vehicle shape, hardpoints, mass placement, suspension, tire data, aero
maps, or powertrain layout.

![BobSim Geometry setup step with hardpoint editors and vehicle preview](/images/bobsim/app-setup-geometry.png)

The Tires step has two tabs. Use `Setup` to assign tires and `Load Maps` to
inspect the live pure and combined slip force surfaces.

![BobSim Tires setup step with load-map controls and live pure and combined slip tire surface preview](/images/bobsim/app-setup-tires.png)

When your edits are ready, click `Save Vehicle`, then `Write to MBD`.
`Write to MBD` generates the Modelica vehicle definition that StandardSim uses.
The top status strip shows whether BobLib is initialized, whether the vehicle
definition is current, and whether the `VehicleSim` and `FourPostSim` builds
are ready.

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

Each card has these controls:

| Control | What it does |
| :-- | :-- |
| `Configure` | Opens the editable run inputs and saved run configs |
| `Build + Run` or `Run` | Launches the workflow |
| `Run Log` | Shows output from active and recent jobs |
| `Review` | Opens the outputs, when they exist |

If you change a run config in the modal, click `Apply Edits` before you run.
Click `Save Config` to keep the run setup for later.

![BobSim simulation configuration modal with run config controls and Build and Run button](/images/bobsim/app-simulation-config.png)

Simulation needs a verified OpenModelica toolchain. With `make app`, the app
uses the image's OpenModelica and you set nothing. The desktop release and
`make app RUN=` need a local install. See
[Run BobSim Without Docker](/startup-guide/bobsim-without-docker).

## Archive View

Use `Archive` after a run, or click `Review` on the Simulation workflow card.

![BobSim Archive view with local runs, downloadable files, and PDF preview](/images/bobsim/app-results-explore.png)

Each successful workflow run creates a local run package. You can download:

- the generated PDF report
- the metrics CSV
- `signals.zip`, organized by run
- `run-description.json`

The PDF holds the configured report pages. FourPostEval leaves out raw
time-series appendix pages by default. The per-run data is in `signals.zip`.

Click `Delete` to remove a run from both the saved archive and the vehicle
workspace.

## Where BobSim Puts Your Files

A source checkout writes to these paths in the repository. The released
desktop app stores its vehicles, builds, configs, and results in its
[per-user runtime root](/startup-guide/bobsim-without-docker#run-the-released-desktop-app)
instead.

| Path | Contents |
| :-- | :-- |
| `_3_StandardSim/generated_results/` | Reports and metric CSVs from the standard studies |
| `_3_StandardSim/BuildBobLib/VehicleSim/` | Compiled `VehicleSim` and its run directories |
| `_3_StandardSim/BuildBobLib/FourPostSim/` | Compiled `FourPostSim` and its run directories |
| `_5_App/user_data/config/vehicles/` | Saved vehicles, one YAML per vehicle |
| `_5_App/user_data/config/simulations/` | Saved simulation configs |
| `_5_App/user_data/config/active/` | The app's editable copies of the study configs |
| `_5_App/user_data/config/defaults/` | Original copies of the EnvelopeSim and OptSim configs |
| `_5_App/user_data/config/app/` | App settings. The app in Docker keeps its OpenModelica choice in `openmodelica.docker.json`, the app on the host in `openmodelica.json`. |
| `_5_App/user_data/results/saved/` | Archive packages |
| `_5_App/user_data/workspaces/vehicles/<vehicle>/` | Per-vehicle builds, results, and processing |
| `_5_App/user_data/cache/modelica/` | Modelica build cache |

The shipped StandardSim configs write reports to
`_3_StandardSim/generated_results/`. Older checkouts may write them to
`_3_StandardSim/results/`.

## Replay A Captured Run

The `Replay` view plays back a run in 3D. A normal simulation run does not
feed it, because a normal run keeps only the signals its metrics need. Until
you capture a scene, `Replay` shows "No captured runs yet".

To see `Replay` work without a simulation, write the synthetic demo scene. Then
start the app and open `Replay`:

```bash
make visual-demo
make app
```

To capture a real run, BobSim runs one study again and records the suspension
geometry:

```bash
make visual-rig
make visual-maneuver VISUAL_MANEUVER=transient
```

| Target | Captures |
| :-- | :-- |
| `visual-rig` | The four-post rig |
| `visual-maneuver` | A maneuver. `VISUAL_MANEUVER` takes `transient`, `ramp_steer`, or `steady_state`. |

All of these targets run in Docker. Scenes go to `_1_VisualSim/results/`. In
the view, `Controls` shows the camera keys and `Export video` saves a
recording.

## Debug A Failed Run

1. Open the workflow modal.
2. Read `Run Log`.
3. Check that the top status strip shows the builds the workflow needs as
   ready.
4. Outside Docker, check that the `Toolchain` dialog shows a verified `omc`
   and library directory.
5. Inspect the retained run directory under the build tree. See
   [A run failed and you want the raw directory](/startup-guide/bobsim-troubleshooting#a-run-failed-and-you-want-the-raw-directory).

## Related Pages

- [BobSim CLI Workflow](/use-guide/bobsim-cli) for `make` targets, EnvelopeSim,
  and OptSim
- [BobSim App](/bobsim/app) for a tour of Setup, Simulation, and Archive
- [Archive](/bobsim/results) for artifact locations and how to keep results
- [Configuration](/bobsim/configuration) for YAML sections and build settings
- [BobDyn/BobLib Use Guide](/use-guide/boblib) for Modelica model work
