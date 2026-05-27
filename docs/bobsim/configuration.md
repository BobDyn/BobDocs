---
layout: doc
title: Configuration
---

# Configuration

BobDyn/BobSim configuration is mostly plain YAML plus a small number of OpenModelica
build scripts. The important rule is simple: edit the durable source files, then
let the generation/build scripts produce derived artifacts.

## Active Vehicle Source

The vehicle source owned by BobDyn/BobSim is:

```text
vehicle.yml
```

BobDyn/BobLib's active generation input is:

```text
_0_Utils/external/BobLib/Generation/vehicle.yml
```

Sync them with:

```bash
make sync-vehicle-yaml
```

The build targets do this automatically:

```bash
make build-vehicle-sim
make build-four-post-sim
```

When changing vehicle architecture or vehicle data, treat the repo-root
`vehicle.yml`, BobDyn/BobLib's templates, and the generator scripts as the durable
inputs. Generated Modelica files are active package artifacts.

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
| `simulation` | Executable path, solver, time settings, output flags, variable filters |
| `execution` | Parallelism, worker count, cleanup, log streaming |
| `sweep`, `test`, or `procedure` | Workflow-specific case generation |
| `fit` | Workflow-specific curve fitting and filtering |
| `report` | PDF/CSV output paths, title metadata, summary controls |
| `plots` | Plot pages, layouts, signal keys, labels, scaling, optional overlays |

## Simulation Section

The `simulation` section tells BobDyn/BobSim which executable to run and which
OpenModelica runtime flags to apply.

Typical keys:

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
  no_grid: false
  no_event_emit: true
```

`build_dir` must match the directory produced by the relevant build script.
`exec_name` must match the OpenModelica executable name in that directory.

Useful runtime flags:

| Key | Effect |
| :-- | :-- |
| `start_time`, `stop_time` | Default run time bounds, unless a case overrides them |
| `stepSize` or `step_size` | Optional OpenModelica output/integration step size |
| `solver` | Solver passed as `-s=<solver>` |
| `tolerance` | Runtime tolerance passed to the executable |
| `log_level` | OpenModelica log flags passed as `-lv=...` |
| `variable_filter` | Limits variables emitted to the result file |
| `no_grid` | Adds `-noEquidistantTimeGrid` |
| `no_event_emit` | Adds `-noEventEmit` |
| `extra_args` | Appends additional runtime arguments |

## Initial Parameters

Some workflows define common Modelica overrides under
`simulation.init_parameters`. SteadyStateEval uses this for the maneuver mode,
steer timing, ramp duration, settling behavior, and velocity controller gains.

Example:

```yaml
simulation:
  init_parameters:
    useMode: 0
    steerStart: 2.0
    ayRampDuration: 8.0
    velGain: 100.0
    velTi: 2.0
```

Case-specific overrides are layered on top by the workflow before the runner
writes `overrides.txt`.

## Execution Section

The `execution` section controls how many simulation cases run and how much
debug output is retained.

```yaml
execution:
  parallel: true
  max_workers: 8
  cleanup: true
  stream_logs: false
```

| Key | Use |
| :-- | :-- |
| `parallel` | Run cases with `ProcessPoolExecutor` when true |
| `max_workers` | Limit parallel case count |
| `cleanup` | Delete per-case run directories after extraction |
| `stream_logs` | Print selected solver/log lines while each case runs |

Set `cleanup: false` when debugging a failed case. That preserves run
directories with overrides, logs, and result CSVs.

## Report Section

The `report` section controls the public report artifact.

```yaml
report:
  enabled: true
  brand: BobSim
  title: SteadyStateEval Vehicle Characterization
  subtitle: Measured-a_y ramp-steer isolines with robust fits
  output_path: _3_StandardSim/results/steady_state_eval_report.pdf
  metric_target_velocity_mps: 15.0
```

Common keys:

| Key | Use |
| :-- | :-- |
| `enabled` | Skip report generation when false |
| `brand`, `title`, `subtitle` | Title page metadata |
| `output_path` | PDF output path |
| `metrics_csv_path` | Explicit metrics CSV path when supported by the workflow |
| `metric_target_velocity_mps` | Velocity used for exported summary metrics |
| `notes` | Human-readable assumptions shown in the report |
| `summary_units` | Per-metric unit/scale overrides for FourPostEval tables |

## Plots Section

Plots are declared in YAML and rendered by the shared plot engine.

Layouts currently used by the docs:

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

Use `scale` when a signal needs unit conversion for display. For example, many
steering angles are stored in radians and plotted in degrees.

## Build Scripts

The active OpenModelica build scripts are:

```text
_3_StandardSim/build_vehicle_sim.mos
_3_StandardSim/build_four_post_sim.mos
```

They load the vendored BobDyn/BobLib package, configure OpenModelica command-line
options, change into the build directory, and call `buildModel(...)`.

Important build options currently used:

- C simulation code target
- larger linear tearing systems
- dynamic state selection for index-reduced multibody systems
- `PFPlusExt` matching algorithm
- optimized C flags
- analytic Jacobians for FourPostSim nonlinear components

Prefer the make targets over calling `omc` directly:

```bash
make build-vehicle-sim
make build-four-post-sim
```

## OptSim Configs

OptSim uses its own configs under:

```text
_4_OptSim/configs/
```

| File | Role |
| :-- | :-- |
| `vehicle_architecture.yaml` | Source of truth for selected template, sampling method, sample/interval count, seed, and sweep variables |
| `_doe_config.yaml` | Generated private DOE config; do not edit by hand |
| `compiler_config.yaml` | BobDyn/BobLib path, standards to build, OMC settings, batch timeout |
| `aggregator_config.yaml` | Mapping from report metric names to aggregate output columns |
| `build_template.mos` | Per-variant OpenModelica build template |

For one-factor sensitivity and tornado diagrams, use
`sampling.method: interval_splice` in `vehicle_architecture.yaml`. For broader
exploratory DOE, use `sampling.method: lhs`.

Regenerate `_doe_config.yaml` by running the DOE or sensitivity pipeline:

```bash
make sim-doe
make sim-standard-sensitivities
make sim-envelope-sensitivities
```

or by calling the config generator from `_4_OptSim` during development.

## Common Changes

To change the active vehicle:

1. Edit `vehicle.yml`.
2. Run `make build-vehicle-sim` or `make build-four-post-sim`.
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

To change a DOE sweep:

1. Edit `_4_OptSim/configs/vehicle_architecture.yaml`.
2. Run `make clean-doe` if sample count or variable dimensions changed.
3. Run `make sim-doe`.
