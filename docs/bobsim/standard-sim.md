---
layout: doc
title: StandardSim
---

# StandardSim

StandardSim is BobDyn/BobSim's high-fidelity simulation lane. It runs generated BobDyn/BobLib
Modelica executables through Python workflows that define cases, run the solver,
extract signals, compute metrics, and build engineering reports.

The active StandardSim area lives under:

```text
_3_StandardSim/
```

## StandardSim Structure

| Path | Role |
| :-- | :-- |
| `_3_StandardSim/build_vehicle_sim.mos` | OpenModelica build script for `VehicleSim` |
| `_3_StandardSim/build_four_post_sim.mos` | OpenModelica build script for `FourPostSim` |
| `_3_StandardSim/_modelica_runner.py` | Shared OpenModelica executable runner |
| `_3_StandardSim/_fmu_runner.py` | FMU runner scaffold |
| `_3_StandardSim/SteadyStateEval/steady_state_eval_config.yml` | SteadyStateEval workflow config |
| `_3_StandardSim/SteadyStateEval/steady_state_eval_sim.py` | SteadyStateEval workflow implementation |
| `_3_StandardSim/TransientEval/transient_eval_config.yml` | TransientEval workflow config |
| `_3_StandardSim/TransientEval/transient_eval_sim.py` | TransientEval workflow implementation |
| `_3_StandardSim/FourPostEval/four_post_eval_config.yml` | FourPostEval workflow config |
| `_3_StandardSim/FourPostEval/four_post_eval_sim.py` | FourPostEval workflow implementation |
| `_3_StandardSim/Build/` | OpenModelica executables and generated C artifacts |
| `_3_StandardSim/results/` | Public reports and metrics CSVs |

`Build/` contains OpenModelica executables and generated C artifacts. `results/`
contains public reports and metrics CSVs.

## Build Targets

StandardSim has two build paths because the maneuver studies and four-post
study use different BobDyn/BobLib entry points.

| Command | Builds | Output directory |
| :-- | :-- | :-- |
| `make build-vehicle-sim` | `BobLib.Standards.VehicleSim` | `_3_StandardSim/Build/VehicleSim/` |
| `make build-four-post-sim` | `BobLib.Standards.FourPostSim` | `_3_StandardSim/Build/FourPostSim/` |

Both targets run `make sync-vehicle-yaml` first, so the repo-root `vehicle.yml`
is copied into BobDyn/BobLib's active generation workspace before generation/build.

## Run Targets

| Command | Workflow | Main config |
| :-- | :-- | :-- |
| `make steady-state-eval` | Steady-state cornering characterization | `_3_StandardSim/SteadyStateEval/steady_state_eval_config.yml` |
| `make transient-eval` | Step steer and sustained-sine response | `_3_StandardSim/TransientEval/transient_eval_config.yml` |
| `make four-post-eval` | Suspension/chassis K&C-style heave and roll sweeps | `_3_StandardSim/FourPostEval/four_post_eval_config.yml` |

The same workflows can be run directly as Python modules:

```bash
python -m _3_StandardSim.SteadyStateEval.steady_state_eval_sim
python -m _3_StandardSim.TransientEval.transient_eval_sim
python -m _3_StandardSim.FourPostEval.four_post_eval_sim
```

## Shared Modelica Runner

`_3_StandardSim/_modelica_runner.py` is the shared execution layer for the
standard workflows.

For each case it:

1. Creates a unique run directory under the build directory.
2. Writes an `overrides.txt` file with Modelica parameter overrides.
3. Runs the compiled OpenModelica executable from its build directory.
4. Passes solver, start/stop time, output, event, and log flags.
5. Reads the generated CSV result file.
6. Extracts either raw time histories or last-sample steady values.
7. Preserves Python-only metadata such as case labels and result paths.
8. Removes the run directory when `execution.cleanup: true`.

The runner expects the compiled executable and init XML to exist:

```text
<build_dir>/<exec_name>
<build_dir>/<exec_name>_init.xml
```

If either file is missing, rebuild the corresponding Modelica target.

## SteadyStateEval

`SteadyStateEval` characterizes steady-state lateral response using the unified
`VehicleSim` executable.

Current config highlights:

| Key | Current role |
| :-- | :-- |
| `simulation.exec_name` | `BobLib.Standards.VehicleSim` |
| `simulation.build_dir` | `_3_StandardSim/Build/VehicleSim` |
| `simulation.stop_time` | `20.0` seconds |
| `simulation.init_parameters.useMode` | `0`, open-loop ramp steer mode |
| `sweep.testVels` | `12.5`, `15.0`, `17.5`, `20.0` m/s |
| `sweep.maxAy` | Positive ramp target up to `18.0` m/s^2 |
| `fit.ay_linear_max` | Linear fit band upper bound |
| `report.metric_target_velocity_mps` | Velocity used for exported summary metrics |

The analysis extracts steering, acceleration, roll, sideslip, yaw velocity,
wheel loads, handwheel torque, and controller/debug signals. It fits response
curves against measured lateral acceleration and exports gradients, ranges,
tracking errors, and velocity trends.

Main outputs:

```text
_3_StandardSim/results/steady_state_eval_report.pdf
_3_StandardSim/results/steady_state_eval_report_metrics.csv
```

Representative metrics include:

- measured lateral acceleration range
- roadwheel and handwheel angle gradients
- understeer gradient
- sideslip gradient
- roll gradient
- handwheel torque range
- velocity slopes for key gradients

## TransientEval

`TransientEval` characterizes steering response over time using step steer and
sustained sine cases.

Current config highlights:

| Key | Current role |
| :-- | :-- |
| `simulation.exec_name` | `BobLib.Standards.VehicleSim` |
| `test.testVel` | `15.0` and `20.0` m/s velocity groups |
| `test.run_step` | Enables representative step steer cases |
| `test.run_continuous_sine` | Enables sustained sine sweeps |
| `test.steerStep_deg` | `5.0` degree step input |
| `test.sweep_freq_hz` | `0.5`, `0.75`, `1.0` Hz |
| `test.sweep_amp_deg` | `5.0` degree sine amplitude |
| `test.n_cycles` | `4` cycles per sine run |

The step cases use `VehicleSim` step mode. The sine cases use continuous
sinusoidal steering mode. The workflow computes step response metrics and
frequency-response metrics from the extracted time histories.

Main outputs:

```text
_3_StandardSim/results/transient_eval_report.pdf
_3_StandardSim/results/transient_eval_report_metrics.csv
```

Representative metrics include:

- lateral acceleration peak, steady value, rise time, gain, and overshoot
- yaw velocity peak, steady value, rise time, gain, and overshoot
- sideslip and roll response
- gain and phase at frequency points
- equivalent time lags
- response trends across velocity groups
- fit quality for sine-response extraction

## FourPostEval

`FourPostEval` uses `BobLib.Standards.FourPostSim` to evaluate suspension and
chassis response through heave and roll sweeps.

Current config highlights:

| Key | Current role |
| :-- | :-- |
| `simulation.exec_name` | `BobLib.Standards.FourPostSim` |
| `simulation.build_dir` | `_3_StandardSim/Build/FourPostSim` |
| `procedure.heaveMagnitude` | `0.03` m |
| `procedure.rollMagnitude` | `0.035` rad |
| `procedure.forceMagnitude` | `1000` N |
| `report.metrics_csv_path` | `_3_StandardSim/results/four_post_eval_report_metrics.csv` |

The workflow extracts front and rear K&C output records and computes summary
metrics for camber, toe, caster, KPI, mechanical trail, mechanical scrub,
motion ratio, anti/jacking behavior, roll stiffness, anti-roll-bar contribution,
and lateral load transfer distribution.

Main outputs:

```text
_3_StandardSim/results/four_post_eval_report.pdf
_3_StandardSim/results/four_post_eval_report_metrics.csv
```

FourPostEval metrics are also useful to EnvelopeSim. The envelope loader will
use the latest four-post lateral-load-transfer metric when available and fall
back to static front mass fraction when it is not.

## Report Generation

Standard reports are built by `_0_Utils/reporting/report_engine.py`.

The report engine:

- reads the workflow config
- creates a title page
- dispatches to workflow-specific summary pages
- renders plot pages from the `plots` config
- writes a PDF with Matplotlib `PdfPages`

Plot pages are handled by `_0_Utils/plotting/plot_engine.py`, which currently
supports `single`, `dual`, `triple`, and `quad` layouts for signal plots.

## Debugging Runs

The fastest debugging sequence is:

```bash
make build-vehicle-sim
make steady-state-eval
```

If a run fails:

- Confirm the build directory contains the executable and init XML.
- Set `execution.cleanup: false` in the workflow config.
- Rerun the workflow.
- Inspect the retained run directory under the build directory.
- Check `overrides.txt`, `run.log`, and the generated result CSV.

The runner removes per-case directories by default when `cleanup` is enabled, so
turn cleanup off before trying to inspect raw run artifacts.
