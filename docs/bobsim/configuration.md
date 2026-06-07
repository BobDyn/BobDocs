---
layout: doc
title: Configuration
---

# Configuration

BobDyn/BobSim configuration is mostly plain YAML plus a small number of
OpenModelica build scripts. Edit durable sources, then let the build targets
produce generated artifacts.

## Active Vehicle Source

BobSim owns the active vehicle source at:

```text
vehicle.yml
```

BobLib's active generation input is:

```text
_0_Utils/external/BobLib/Generation/vehicle.yml
```

The standard build targets copy the repo-root `vehicle.yml` into that BobLib
generation path before compiling:

```bash
make standard-build
make standard-build-four-post
```

When changing the vehicle, treat `vehicle.yml`, BobLib's templates, and the
generator scripts as durable inputs. Generated Modelica files are active
package artifacts.

## Standard Workflow Configs

The main standard configs are:

```text
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
| `report` | PDF/CSV output paths, title metadata, summary controls |
| `plots` | Plot pages, layouts, signal keys, labels, scaling, overlays |

## Simulation Section

The `simulation` section tells BobSim which executable to run and which
OpenModelica runtime flags to apply.

Typical shape:

```yaml
simulation:
  backend: modelica
  build_dir: _3_StandardSim/Build/VehicleSim
  exec_name: BobLib.Standards.VehicleSim

  start_time: 0.0
  stop_time: 20.0
  solver: dassl
  tolerance: 1e-6
  output_format: csv

  log_level: LOG_STATS
  extra_args:
    - -jacobian=internalNumerical

  no_grid: true
  no_event_emit: true
```

Useful keys:

| Key | Effect |
| :-- | :-- |
| `build_dir` | Directory containing the executable and init XML |
| `exec_name` | OpenModelica executable name |
| `start_time`, `stop_time` | Default run time bounds, unless a case overrides them |
| `stepSize` or `step_size` | Optional OpenModelica output/integration step size |
| `solver` | Solver passed as `-s=<solver>` |
| `tolerance` | Runtime tolerance |
| `log_level` | OpenModelica log flags passed with `-lv` |
| `variable_filter` | Limits variables emitted to the result file |
| `extra_args` | Appended runtime arguments, such as `-jacobian=internalNumerical` |
| `no_grid` | Adds `-noEquidistantTimeGrid` |
| `no_event_emit` | Adds `-noEventEmit` |

The current public StandardSim configs use `-jacobian=internalNumerical` for
the OpenModelica runtime Jacobian path.

## Initial Parameters

Some workflows define common Modelica overrides under
`simulation.init_parameters`. SteadyStateEval uses this for the maneuver mode,
steer timing, ramp behavior, termination logic, and velocity controller gains.

Example:

```yaml
simulation:
  init_parameters:
    useMode: 0
    steerStart: 2.0
    handwheelRampRate: 0.14
    enableLinearityTermination: true
    velGain: 100.0
    velTi: 2.0
```

Case-specific overrides are layered on top by the workflow before the runner
writes `overrides.txt`.

## Execution Section

The `execution` section controls case parallelism and retained debug output.

```yaml
execution:
  parallel: true
  max_workers: 4
  cleanup: true
  stream_logs: false
```

| Key | Use |
| :-- | :-- |
| `parallel` | Run cases with `ProcessPoolExecutor` when true |
| `max_workers` | Limit parallel case count |
| `cleanup` | Delete per-case run directories after extraction |
| `stream_logs` | Print selected solver/log lines while each case runs |
| `fail_fast` | Stop on the first failed case when supported |

Set `cleanup: false` when debugging a failed case. That preserves run
directories with overrides, logs, and result CSVs.

## Report Section

The `report` section controls the public report artifact.

```yaml
report:
  enabled: true
  brand: BobSim
  title: Ramp-Steer Vehicle Characterization
  subtitle: Measured-$a_y$ ramp-response isolines with robust metric fits
  output_path: _3_StandardSim/results/steady_state_eval_report.pdf
  metric_target_velocity_mps: 15.0
```

Common keys:

| Key | Use |
| :-- | :-- |
| `enabled` | Skip report generation when false |
| `brand`, `title`, `subtitle` | Title page metadata |
| `output_path` | PDF output path |
| `metrics_csv_path` | Explicit metrics CSV path when supported |
| `metric_target_velocity_mps` | Velocity used for exported summary metrics |
| `notes` | Human-readable assumptions shown in the report |
| `summary_units` | Per-metric unit and scale overrides for FourPostEval tables |

## Plots Section

Plots are declared in YAML and rendered by the shared plot engine.

Layouts used by the standard workflows include:

- `single`
- `dual`
- `triple`
- `quad`

Each plot maps result dictionary keys to axes:

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

Use `scale` when a signal needs unit conversion for display.

## Build Scripts

The active OpenModelica build scripts are:

```text
_3_StandardSim/build_vehicle_sim.mos
_3_StandardSim/build_four_post_sim.mos
```

They load the BobLib submodule package, set OpenModelica command-line options,
change into the build directory, and call `buildModel(...)`.

Prefer make targets over direct `omc` calls:

```bash
make standard-build
make standard-build-four-post
```

## Envelope Configs

EnvelopeSim is an optional, separate implementation of common GGV/YMD-style
envelope calculations. Its configs live under:

```text
_2_EnvelopeSim/GGV/ggv_config.yml
_2_EnvelopeSim/YMD/ymd_config.yml
```

Run them through:

```bash
make envelope-ggv
make envelope-ymd
make envelope-all
```

EnvelopeSim reads the same active vehicle data and uses the latest useful
standard-study metrics when available. It is intended as a sane, transparent
implementation that can be used when desired, not as the canonical envelope
reference for BobDyn.

## OptSim Configs

OptSim is split by workflow:

```text
_4_OptSim/StandardSens/
_4_OptSim/EnvelopeSens/
```

Key StandardSens configs:

| File | Role |
| :-- | :-- |
| `_4_OptSim/StandardSens/configs/vehicle_architecture.yaml` | Human-edited architecture and sweep source |
| `_4_OptSim/StandardSens/configs/_doe_config.yaml` | Generated DOE config |
| `_4_OptSim/StandardSens/configs/compiler_config.yaml` | BobLib path, standards, OMC settings, batch timeout |
| `_4_OptSim/StandardSens/configs/aggregator_config.yaml` | Metric extraction map |
| `_4_OptSim/EnvelopeSens/config.yml` | Envelope sensitivity config |

Run:

```bash
make opt-standard
make opt-envelope
make opt-refined
```

## Common Changes

To change the active vehicle:

1. Edit `vehicle.yml`.
2. Run `make standard-build` or `make standard-build-four-post`.
3. Rerun the relevant study.

To change a standard study:

1. Edit that workflow's config YAML.
2. Rebuild only if the Modelica source or generated vehicle changed.
3. Run the workflow target.
4. Inspect the report and metrics CSV.

To change a report page:

1. Edit the workflow's `report` and `plots` sections for configuration-only changes.
2. Edit `_0_Utils/reporting/` or `_0_Utils/plotting/` for report engine behavior.
3. Rerun the workflow.

To change a sensitivity sweep:

1. Edit the relevant OptSim config.
2. Run `make clean-opt` if the sample set or variable dimensions changed.
3. Run the matching `make opt-*` target.
