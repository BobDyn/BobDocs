---
layout: doc
title: BobSim App
---

# BobSim App

The BobSim app is the primary user interface for local vehicle setup,
simulation launch, result review, and saved run organization.

There are two normal launch paths.

For the released desktop app, download the BobSim asset for your operating
system from the [GitHub Release](https://github.com/BobDyn/BobSim/releases/latest),
extract it, and run `BobSim`. The desktop app bundles the Python backend and
frontend in an embedded desktop window. It does not bundle OpenModelica or
prebuilt simulation executables; those are selected and built
locally on the user's machine.

For a source checkout, start it from the BobSim root:

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

## Desktop Runtime Data

The desktop app seeds a writable BobSim runtime workspace on first launch. User
vehicles, generated Modelica definitions, local OpenModelica builds, saved
configs, and saved results live there instead of inside the downloaded
executable.

Default runtime roots:

| Platform | Default runtime root |
| :-- | :-- |
| Windows | `%LOCALAPPDATA%\BobDyn\BobSim` |
| macOS | `~/Library/Application Support/BobDyn/BobSim` |
| Linux | `${XDG_DATA_HOME:-~/.local/share}/BobDyn/BobSim` |

Set `BOBSIM_HOME` to choose a different runtime root. `BOBDYN_HOME` is still
honored for compatibility with earlier local builds.

On launch, the desktop app refreshes app-owned runtime resources from the
bundle, including BobLib resources, report helpers, build scripts, and default
run configs. User-owned files such as saved vehicles, active workspaces, saved
results, saved configs, and imported templates are preserved.

## What The App Owns

The app wraps the existing BobSim workflow code. It does not replace the CLI
targets; it gives the normal setup and run path a guided browser surface.

| Area | App responsibility |
| :-- | :-- |
| Vehicle setup | Load, create, import, edit, preview, save, and write vehicle definitions |
| Modelica stack status | Show BobLib, generated vehicle definition, `VehicleSim`, and `FourPostSim` readiness |
| Simulation launch | Configure workflows, apply edits, build, run, and stream job logs |
| Result review | Preview registered outputs and download archived run packages |
| Local libraries | Manage saved vehicles, saved run configs, local run archives, and vehicle workspaces |

## Setup

`Setup` is the first stop. The startup dialog offers:

![BobSim vehicle chooser dialog with saved vehicle and template creation panels](/images/bobsim/app-vehicle-chooser.png)

| Option | Source |
| :-- | :-- |
| `Load Vehicle` | Saved vehicles in `_5_App/user_data/config/vehicles/` |
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

![BobSim Tires setup step with tire load controls, .tir parameter editor, and live tire surface preview](/images/bobsim/app-setup-tires.png)

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

The Ramp Steer config exposes the nonlinear steering-gain-loss cutoff used to
stop open-loop ramps before the response becomes strongly nonlinear. The Steady
State config exposes velocity-specific lateral-acceleration caps and the main
closed-loop settle tolerances. The default caps are intentionally conservative
for alpha releases so the public run grid completes cleanly; users can raise or
remove caps for exploratory runs.

## OpenModelica Toolchain

Simulation is available after BobSim verifies an OpenModelica toolchain. The
app auto-detects common installs, then exposes a toolchain selector when manual
selection is needed.

Select:

| Field | Use |
| :-- | :-- |
| `omc` executable | The OpenModelica compiler executable, or its `bin` directory |
| Library directory | Directory containing packages such as `Modelica` and `VehicleInterfaces` |

BobSim only requires a verified `omc` executable and an OpenModelica library
directory. Linux system installs usually do not need an OpenModelica home path.

Common library defaults:

| Platform | Typical library directory |
| :-- | :-- |
| Windows | `%APPDATA%\.openmodelica\libraries` |
| macOS | `~/.openmodelica/libraries` |
| Linux | `~/.openmodelica/libraries` |

The selector verifies `omc --version` and checks that required libraries are
present before Simulation unlocks.

## Archive

`Archive` is the local history of completed Simulation runs. It is focused on
downloadable artifacts instead of in-app plotting.

![BobSim Archive view with local runs, downloadable files, and PDF preview](/images/bobsim/app-results-explore.png)

After a Simulation job succeeds, BobSim automatically creates a local archive
package for that vehicle/workflow. Each package includes:

- the generated PDF report
- the metrics CSV
- a signal archive zip organized by run
- a run description manifest
- vehicle and run-config snapshots

The report includes the configured summary/plot pages. FourPostEval omits the
raw time-series appendix by default so the K&C report stays focused; workflows
can still opt into raw appendix pages through their report config. The signal
archive contains per-run `signals.csv`, `overrides.txt`, `run.log`, and
`description.json` files when those run artifacts are available.

Archive cards include `Delete` for removing local runs. Deleting an archive
removes both the global saved package and the mirrored vehicle workspace copy.

## Local App Paths

| Path | Contents |
| :-- | :-- |
| `_5_App/static/` | Browser UI assets |
| `_5_App/app.py` | Local Python web server and API |
| `_5_App/sim_configs/_defaults/` | Checked-in default run configs |
| `_5_App/user_data/config/vehicles/` | Saved app vehicle YAML files |
| `_5_App/user_data/config/simulations/` | Saved app run configs |
| `_5_App/user_data/config/app/` | App settings, including the OpenModelica toolchain choice |
| `_5_App/user_data/workspaces/vehicles/` | Per-vehicle generated config and result workspaces |
| `_5_App/user_data/results/saved/` | Local archive packages saved from the app |
| `_5_App/user_data/cache/` | Modelica build cache |
| `_3_StandardSim/generated_results/` | Standard outputs registered by the app |

Older CLI outputs remain available on disk, but the alpha app UI focuses on
local archive packages instead of the full CSV explorer.

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
Setup -> Save Vehicle -> Write to MBD -> Simulation -> Archive
```

## Troubleshooting

`Simulation` is disabled

Save the vehicle, click `Write to MBD`, and verify the OpenModelica toolchain.
Simulation is locked until the saved vehicle definition is current and the
external toolchain is ready.

`Write to MBD` is disabled

Hover the button for the reason. Common causes are missing BobLib submodule,
unsaved vehicle edits, or no active vehicle.

`No module named yaml`

Install BobSim Python requirements in the environment that launches the app:

```bash
python -m pip install -r requirements.txt
```

`omc: command not found`

Open Simulation's OpenModelica toolchain selector and choose the `omc`
executable plus the library directory. If you are using the source checkout,
scripted CLI workflows can also run from the Docker environment.

No output appears in `Archive`

Open `Run Log` first. A failed build or simulation usually leaves the useful
message there. Also check that the workflow's report and metrics output paths
match the files written by the active config.
