---
layout: doc
title: Configuration
---

# Configuration

This page is the reference for BobDyn/BobSim configuration: the vehicle
source, the workflow YAML keys, and the OpenModelica build scripts. The app
edits most of these values for you. The files stay plain text, so you can
inspect and version them.

## Vehicle source

The app stores each vehicle as YAML. `Write to MBD` generates the BobLib
Modelica definition that the standard workflows build.

| Path | Contents |
| :-- | :-- |
| `vehicle.yml` | The repository's default vehicle |
| `_5_App/user_data/config/vehicles/` | Vehicles saved in the app |
| `_5_App/user_data/workspaces/vehicles/<vehicle>/config/vehicle.yml` | The per-vehicle workspace copy |

![BobSim Setup view showing vehicle architecture inputs, Save Vehicle, Write to MBD, and Modelica stack status](/images/bobsim/app-setup-architecture.png)

From the command line, `make sync-vehicle` reports whether the BobLib records
match `vehicle.yml`. `make sync-vehicle-write` regenerates them.

BobLib stays the physical model library and owns the standard entry-point
templates. To change model structure, work in BobLib. Keep BobSim workflow YAML
for case definitions and runtime overrides.

## App run configs

| Path | Contents |
| :-- | :-- |
| `_3_StandardSim/*/[name]_config.yml` | Checked-in seed config for each workflow |
| `_5_App/user_data/config/active/` | The app's editable copy of each StandardSim config |
| `_5_App/user_data/config/simulations/` | Named run configs saved from the app |

The app copies a seed config to `config/active/` the first time it uses it,
then edits the copy. The `make standard-eval-*` targets read the active copy
when it exists, and the seed otherwise. Fields that the app form does not show
can still be edited in the YAML.

![BobSim simulation configuration modal with saved config controls and Apply Edits action](/images/bobsim/app-simulation-config.png)

## Workflow config shape

The four standard configs are:

```text
_3_StandardSim/RampSteerEval/ramp_steer_eval_config.yml
_3_StandardSim/SteadyStateEval/steady_state_eval_config.yml
_3_StandardSim/TransientEval/transient_eval_config.yml
_3_StandardSim/FourPostEval/four_post_eval_config.yml
```

They share a common shape:

| Section | Purpose |
| :-- | :-- |
| `standard` | Workflow name used by report dispatch |
| `simulation` | Executable path, solver, runtime flags, output settings |
| `execution` | Parallelism, worker count, cleanup, log streaming |
| `sweep`, `test`, or `procedure` | Workflow-specific case generation |
| `fit` | Workflow-specific fitting and filtering |
| `report` | PDF and CSV output paths, title metadata, summary controls |
| `plots` | Plot pages, layouts, signal keys, labels, scaling, overlays |

For the current values in each config, see [StandardSim](/bobsim/standard-sim).

## `simulation`

The `simulation` section names the executable and the OpenModelica runtime
flags.

```yaml
simulation:
  backend: modelica
  build_dir: _3_StandardSim/BuildBobLib/VehicleSim
  exec_name: BobLib.Experiments.Standards.VehicleSim

  start_time: 0.0
  stop_time: 45.0
  solver: dassl
  tolerance: 1e-6
  output_format: csv

  log_level: LOG_STATS
  extra_args:
    - -jacobian=internalNumerical

  no_grid: true
  no_event_emit: true
```

| Key | Effect |
| :-- | :-- |
| `build_dir` | Directory that holds the executable and init XML |
| `exec_name` | OpenModelica executable name |
| `start_time`, `stop_time` | Default run time bounds, unless a case overrides them |
| `stepSize` or `step_size` | Optional step size, passed as `-stepSize` |
| `solver` | Solver, passed as `-s=<solver>` |
| `tolerance` | Runtime tolerance |
| `log_level` | OpenModelica log flags, passed as `-lv` |
| `variable_filter` | Limits the variables written to the result file |
| `case_timeout_s` | Optional per-case timeout in seconds |
| `extra_args` | Extra runtime arguments, such as `-jacobian=internalNumerical` |
| `no_grid` | Adds `-noEquidistantTimeGrid` |
| `no_event_emit` | Adds `-noEventEmit` |

All four StandardSim configs pass `-jacobian=internalNumerical`.
RampSteerEval and SteadyStateEval also pass `-ls=totalpivot`.

On Windows the executable may have an `.exe` suffix. BobSim accepts both forms
when it checks that a build is ready.

::: tip Compliance and damping studies
Halfshaft compliance and damping are valid study parameters in the integrated
powertrain model. More compliance detail can add faster torsional modes. When
you study them, reduce the step size or output interval, keep the solver
tolerance tight enough for those dynamics, and confirm the solver resolves the
halfshaft transient instead of stepping across it.
:::

### `simulation.init_parameters`

Some workflows set Modelica parameter overrides under
`simulation.init_parameters`. RampSteerEval uses them for handwheel ramp timing
and termination logic. SteadyStateEval uses them for closed-loop target
tracking, settle detection, termination logic, and velocity controller gains.

```yaml
simulation:
  init_parameters:
    steerStart: 2.0
    handwheelRampRate: 0.06
    enableLinearityTermination: true
    linearityNonlinearityFraction: 0.2
    linearityReferenceAy: 4.0
    velGain: 100.0
    velTi: 2.0
```

The workflow layers case-specific overrides on top before the runner writes
`overrides.txt`.

SteadyStateEval sets `useMode: 3` and builds target lateral-acceleration cases
from `sweep.targetAys`. The optional `sweep.maxAyByVelocity` map caps that grid
per velocity. See [SteadyStateEval](/bobsim/standard-sim#steadystateeval).

## `execution`

The `execution` section controls case parallelism and which debug files stay.

```yaml
execution:
  parallel: true
  max_workers: 4
  cleanup: false
  stream_logs: false
```

| Key | Use |
| :-- | :-- |
| `parallel` | Run cases with `ProcessPoolExecutor` when `true` |
| `max_workers` | Limit the parallel case count |
| `cleanup` | Delete each run directory after extraction. Defaults to `false`. |
| `stream_logs` | Print selected solver and log lines while each case runs |
| `fail_fast` | Stop on the first failed case. With `parallel: true` the stop is not immediate. |

The shipped configs set `cleanup: false`. The run directories keep the
overrides, logs, and result CSVs, and the app builds `signals.zip` from them.

## `report`

The `report` section controls the PDF report.

```yaml
report:
  enabled: true
  brand: BobSim
  title: Ramp-Steer Vehicle Characterization
  subtitle: Measured-$a_y$ ramp-response isolines with robust metric fits
  output_path: _3_StandardSim/generated_results/ramp_steer_eval_report.pdf
  metric_target_velocity_mps: 15
```

| Key | Use |
| :-- | :-- |
| `enabled` | Skip report generation when `false` |
| `brand`, `title`, `subtitle` | Title page metadata |
| `output_path` | PDF output path |
| `metrics_csv_path` | Explicit metrics CSV path, where supported |
| `metric_target_velocity_mps` | Velocity used for the exported summary metrics |
| `notes` | Assumptions shown in the report |
| `summary_units` | Per-metric unit and scale overrides for FourPostEval tables |

## `plots`

Plots are declared in YAML and drawn by the shared plot engine. The layouts
are `single`, `dual`, `triple`, and `quad`. Each plot maps result keys to axes:

```yaml
plots:
  freq_response_gain:
    layout: dual
    title: "Frequency Response - Gain"
    xscale: log
    subplots:
      - title: "|a_y / delta_HWA|"
        x: { key: freq, label: "f [Hz]" }
        y: { key: ay_gain, label: "|a_y / delta_HWA|" }
```

Use `scale` to convert a signal's units for display.

## Build scripts

The OpenModelica build scripts are:

```text
_3_StandardSim/build_vehicle_sim.mos
_3_StandardSim/build_four_post_sim.mos
```

Each script sets the OpenModelica command-line options, loads Modelica
`4.1.0`, VehicleInterfaces `2.0.2`, and the BobLib submodule package, creates
the build directory, changes into it, and calls `buildModel(...)`.

Use the make targets instead of calling `omc` directly:

```bash
make standard-build
make standard-build-four-post
```

They write to:

```text
_3_StandardSim/BuildBobLib/VehicleSim/
_3_StandardSim/BuildBobLib/FourPostSim/
```

## Other configs

| Workflow | Configs | Reference |
| :-- | :-- | :-- |
| EnvelopeSim | `_2_EnvelopeSim/GGV/ggv_config.yml`, `_2_EnvelopeSim/YMD/ymd_config.yml` | [EnvelopeSim](/bobsim/envelope) |
| OptSim | `_4_OptSim/StandardSens/configs/`, `_4_OptSim/EnvelopeSens/config.yml` | [OptSim](/bobsim/doe#layout) |

The app edits these configs in place, not as active copies.

## Common changes

To change the vehicle:

1. Edit it in the app and click `Write to MBD`. From the command line, edit
   `vehicle.yml` and run `make sync-vehicle-write`.
2. Run `make standard-build` or `make standard-build-four-post`.
3. Rerun the study.

To change a standard study:

1. Edit the workflow config. Edit the active copy if the app has made one.
2. Run the workflow target. It rebuilds only if the Modelica source or a
   generated vehicle record changed.
3. Check the report and metrics CSV.

To change a report page:

1. For configuration-only changes, edit the workflow's `report` and `plots`
   sections.
2. For report engine behavior, edit `_0_Utils/reporting/` or
   `_0_Utils/plotting/`.
3. Rerun the workflow.

To change a sensitivity sweep:

1. Edit the OptSim config.
2. Run `make clean-opt` if the sample set or variable dimensions changed.
3. Run the matching `make opt-*` target.
