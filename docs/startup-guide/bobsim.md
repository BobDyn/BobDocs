---
layout: doc
title: BobSim Startup
prev:
  text: 'BobLib Startup'
  link: '/startup-guide/boblib'
next:
  text: 'Use Guide'
  link: '/use-guide/'
---

# BobDyn/BobSim Startup

Use this guide to launch BobDyn/BobSim from the desktop app or local browser
app, choose or create a vehicle, write the generated Modelica vehicle
definition, run the first simulation, and inspect the result artifacts.

::: tip Start with the app
The BobSim app is the recommended first path. It guides setup, shows the active
Modelica stack status, launches StandardSim workflows, previews reports and
metrics, and keeps saved result snapshots together.

The command-line targets still exist and are listed after the app workflow.
:::

::: info Starting point
In this guide, the BobDyn/BobSim root means the repository directory created by
the clone step below. Start in that directory before running commands.

BobDyn/BobSim vendors BobDyn/BobLib as a submodule at
`_0_Utils/external/BobLib/`.
:::

## What You Need

Install these first:

- OpenModelica if you want to build or run simulations
- Git and Python 3 with `venv` and `pip` if you are running from source
- Docker and Docker Compose if you want the reproducible CLI workflow

The released desktop app bundles the Python backend and browser frontend. It
does not bundle OpenModelica or prebuilt simulation executables; those are
selected and generated locally. The source checkout path runs the same app with
your local Python environment.

## Step 1: Get BobSim

For the released desktop app, download the BobSim asset for your operating
system from the [GitHub Release](https://github.com/BobDyn/BobSim/releases/latest),
extract it, and run `BobSim`.

The app creates its runtime workspace in the normal per-user application data
location:

| Platform | Default runtime root |
| :-- | :-- |
| Windows | `%LOCALAPPDATA%\BobDyn\BobSim` |
| macOS | `~/Library/Application Support/BobDyn/BobSim` |
| Linux | `${XDG_DATA_HOME:-~/.local/share}/BobDyn/BobSim` |

Set `BOBSIM_HOME` if you want to place generated vehicles, builds, configs,
and results somewhere else.

For development or scripted CLI work, clone with submodules:


```bash
git clone --recurse-submodules https://github.com/BobDyn/BobSim.git
cd BobSim
```

If the repository was cloned without submodules, initialize them from the
BobSim root:

```bash
make init
```

## Step 2: Prepare The Source App Environment

Skip this step when you are using the released desktop app.

Create and activate a local Python environment:

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
```

Verify the two things the app needs most often:

```bash
python -c "import yaml, scipy, pandas, matplotlib; print('python deps ok')"
omc --version
```

If `omc --version` fails from the shell, the app can still be used for setup
work. Simulation builds and runs will stay locked until OpenModelica is
auto-detected or selected in the app.

## Step 3: Launch The App

For the released desktop app, run `BobSim`.

For a source checkout, start the browser app:

```bash
make app
```

Open:

```text
http://127.0.0.1:8765
```

Use the direct Python command when you need a different port:

```bash
python -m _5_App.app --port 8766
```

Stop the app with `Ctrl+C` in the terminal that launched it.

## Step 4: Choose A Vehicle

The first screen opens a vehicle setup dialog.

![BobSim vehicle chooser dialog with saved vehicle, template creation, import, and continue-active options](/images/bobsim/app-vehicle-chooser.png)

Choose one path:

| Path | Use it when |
| :-- | :-- |
| `Load Vehicle` | You already saved a vehicle under `_5_App/vehicle_configs/` |
| `Create Vehicle` | You want a new vehicle from a checked-in architecture template |
| `Import YAML` | You have an external vehicle YAML file |
| `Continue Active File` | You want to keep working from the current active vehicle data |

After the vehicle opens, use the Setup view to work through:

1. Architecture
2. Geometry
3. Mass
4. Suspension
5. Compliances
6. Tires
7. Aero
8. Powertrain

The left pane is the editor. The right pane is the live preview. Use
`Next`/`Previous` to move through the setup steps, and use the `?` reference
button when you want the app's quick "why/view/check" hints for the active
step.

![BobSim Setup view on the Architecture step with editable architecture fields and assembly preview](/images/bobsim/app-setup-architecture.png)

![BobSim Setup view on the Geometry step with hardpoint fields, axle toggles, and kinematic preview](/images/bobsim/app-setup-geometry.png)

The Tires step includes `.tir` assignment/editing plus a live load-map preview
that redraws from the active tire evaluation.

![BobSim Setup view on the Tires step with tire load controls, .tir editor, and live pure and combined slip load-map preview](/images/bobsim/app-setup-tires.png)

## Step 5: Save And Write To MBD

Before Simulation unlocks:

1. Click `Save Vehicle`.
2. Click `Write to MBD`.
3. Verify the OpenModelica toolchain if Simulation asks for it.
4. Watch the top status strip.

The status strip tracks:

| Status | Meaning |
| :-- | :-- |
| `BobLib` | The BobLib submodule is present |
| `Vehicle Definition` | The saved vehicle has been written to the generated Modelica stack |
| `VehicleSim` | The StandardSim vehicle build is ready, missing, or stale |
| `FourPostSim` | The four-post build is ready, missing, or stale |

If `Write to MBD` is disabled, hover it for the reason. The usual fixes are
initializing BobLib or saving the vehicle first.

If `Simulation` is disabled because OpenModelica is not ready, open the
toolchain selector from Simulation and choose the `omc` executable plus the
OpenModelica library directory. Common library defaults are:

| Platform | Typical library directory |
| :-- | :-- |
| Windows | `%APPDATA%\.openmodelica\libraries` |
| macOS | `~/.openmodelica/libraries` |
| Linux | `~/.openmodelica/libraries` |

![BobSim Setup view showing the Save Vehicle and Write to MBD actions and top Modelica stack status](/images/bobsim/app-setup-architecture.png)

## Step 6: Run The First Simulation

Open the `Simulation` view.

![BobSim Simulation view with Ramp Steer, Steady State, Transient, and Four Post workflow cards](/images/bobsim/app-simulation-catalog.png)

For a first proof run:

1. Select `Ramp Steer`.
2. Click `Configure`.
3. Review the editable run fields.
4. Click `Apply Edits` if you changed anything.
5. Click `Build + Run`.
6. Open `Run Log` while the job is running.
7. Click `Review` when outputs exist.

![BobSim Ramp Steer simulation configuration modal with Build and Run action, config controls, and run log tab](/images/bobsim/app-simulation-config.png)

The other standard cards follow the same pattern:

| Card | Use it for |
| :-- | :-- |
| `Ramp Steer` | Open-loop steering ramp response |
| `Steady State` | Settled lateral-acceleration operating points |
| `Transient` | Step and sine steering response |
| `Four Post` | Heave, roll, and vertical-force suspension procedures |

The app registers standard reports and metric CSVs under
`_3_StandardSim/generated_results/`. Some CLI configs and older checkouts may
write comparable public artifacts under `_3_StandardSim/results/`.

## Step 7: Inspect And Save Results

Open the `Results` view after a run.

![BobSim Results view with saved result sources, Explore tab, signal controls, and Save Active Results action](/images/bobsim/app-results-explore.png)

Use:

| Tab | Use it for |
| :-- | :-- |
| `Explore` | Pick result CSVs, choose an x-axis, filter signals, and plot selected channels |
| `Saved` | Review named result snapshots saved from the active vehicle/workflow |
| `Processing` | Define lightweight processing records around source CSVs |

To preserve an app run, enter a name and click `Save Active Results`. The app
copies the report, metrics, vehicle snapshot, run config, and manifest under:

```text
_5_App/saved_results/
```

Vehicle-specific workspaces live under:

```text
_5_App/vehicle_workspaces/
```

## CLI Path

Use the CLI when you want scripted runs, CI, or Docker-managed reproducibility.

Build the Docker image:

```bash
make docker-build
```

Show the current target list:

```bash
make help
```

Run the complete StandardSim baseline:

```bash
make standard-eval-all
```

Run release checks:

```bash
make ci
```

Common focused targets:

```bash
make standard-build
make standard-eval-ramp-steer
make standard-eval-steady-state
make standard-eval-transient

make standard-build-four-post
make standard-eval-four-post
```

Optional envelope and sensitivity workflows:

```bash
make envelope-all
make opt-standard
make opt-envelope
make opt-refined
```

## Common Problems

`No module named yaml`

Install the Python requirements in the environment that launches the app:

```bash
python -m pip install -r requirements.txt
```

`BobLib submodule missing`

Run:

```bash
make init
```

`Simulation is locked`

Save the vehicle, then click `Write to MBD`. Simulation stays locked until the
saved vehicle definition is current in the generated Modelica stack.

`omc: command not found`

Use the OpenModelica toolchain selector in the app to choose the `omc`
executable and library directory. For source-checkout CLI work, install
OpenModelica locally or use the Docker CLI targets for scripted workflow runs.

`Executable not found` or `Init XML not found`

Build from the app with `Build + Run`, or use:

```bash
make standard-build
make standard-build-four-post
```

`Simulation failed but no raw run directory remains`

Set `execution.cleanup: false` in the run config, rerun the study, then inspect
the retained run directory and job log.

## Next Pages

- [BobSim App](/bobsim/app) for a tour of Setup, Simulation, and Results
- [BobSim Use Guide](/use-guide/bobsim) for the normal workflow after setup
- [BobDyn/BobSim overview](/bobsim/) for the repo map and CLI target language
- [StandardSim](/bobsim/standard-sim) for the high-fidelity evaluation details
- [Configuration](/bobsim/configuration) for YAML and build details
