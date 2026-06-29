---
layout: doc
title: StandardSim
---

# StandardSim

StandardSim is BobDyn/BobSim's high-fidelity simulation lane. It runs
BobDyn/BobLib Modelica executables through Python workflows that define cases,
run the solver, extract signals, compute metrics, and build engineering
reports.

The clearest launch surface is the app's `Simulation` view. Use the CLI targets
when you want scripted or Docker-backed runs.

The active StandardSim area lives under:

```text
_3_StandardSim/
```

## Structure

| Path | Role |
| :-- | :-- |
| `_3_StandardSim/build_vehicle_sim.mos` | OpenModelica build script for `VehicleSim` |
| `_3_StandardSim/build_four_post_sim.mos` | OpenModelica build script for `FourPostSim` |
| `_3_StandardSim/_modelica_runner.py` | Shared OpenModelica executable runner |
| `_3_StandardSim/RampSteerEval/` | Open-loop ramp-steer workflow |
| `_3_StandardSim/SteadyStateEval/` | Settled target lateral-acceleration workflow |
| `_3_StandardSim/TransientEval/` | Step and sine transient workflow |
| `_3_StandardSim/FourPostEval/` | Heave and roll four-post workflow |
| `_3_StandardSim/BuildBobLib/` | OpenModelica executables and generated build artifacts |
| `_3_StandardSim/results/` | Public reports and metrics CSVs |
| `_3_StandardSim/generated_results/` | App-registered reports and metrics CSVs |

## App Workflows

Open `Simulation` in the app after `Setup`, `Save Vehicle`, and `Write to MBD`.

![BobSim Simulation catalog with Ramp Steer, Steady State, Transient, and Four Post workflow cards](/images/bobsim/app-simulation-catalog.png)

| App card | Workflow | Use it for |
| :-- | :-- | :-- |
| `Ramp Steer` | RampSteerEval | Open-loop steering ramp response |
| `Steady State` | SteadyStateEval | Settled lateral-acceleration operating points |
| `Transient` | TransientEval | Step steer and continuous sine response |
| `Four Post` | FourPostEval | Heave, roll, and vertical-force suspension procedures |

Each card opens a run modal with editable config fields, saved config controls,
`Build + Run`, and `Run Log`.

![BobSim Ramp Steer simulation modal with Configure and Run Log tabs](/images/bobsim/app-simulation-config.png)

## Build Targets

| Command | Builds | Output directory |
| :-- | :-- | :-- |
| `make standard-build` | `BobLib.Experiments.Standards.VehicleSim` | `_3_StandardSim/BuildBobLib/VehicleSim/` |
| `make standard-build-four-post` | `BobLib.Experiments.Standards.FourPostSim` | `_3_StandardSim/BuildBobLib/FourPostSim/` |

Both targets compile the active generated BobLib Modelica entry point. The
build scripts create the target directories before `buildModel(...)`, and the
app also ensures the directories exist before invoking OpenModelica.

## Run Targets

| Command | Workflow | Main config |
| :-- | :-- | :-- |
| `make standard-eval-ramp-steer` | Open-loop ramp-steer characterization | `_3_StandardSim/RampSteerEval/ramp_steer_eval_config.yml` |
| `make standard-eval-steady-state` | Steady-state cornering characterization | `_3_StandardSim/SteadyStateEval/steady_state_eval_config.yml` |
| `make standard-eval-transient` | Step steer and continuous sine response | `_3_StandardSim/TransientEval/transient_eval_config.yml` |
| `make standard-eval-four-post` | Suspension/chassis heave and roll sweeps | `_3_StandardSim/FourPostEval/four_post_eval_config.yml` |
| `make standard-eval-all` | All standard evaluations | All four configs above |

Direct Python module entry points are still available for development:

```bash
python -m _3_StandardSim.RampSteerEval.ramp_steer_eval_sim
python -m _3_StandardSim.SteadyStateEval.steady_state_eval_sim
python -m _3_StandardSim.TransientEval.transient_eval_sim
python -m _3_StandardSim.FourPostEval.four_post_eval_sim
```

Prefer the make targets for public workflows because they rebuild missing
executables automatically.

## Shared Runner

`_3_StandardSim/_modelica_runner.py` is the shared execution layer.

For each case it:

1. Creates a run directory under the relevant build tree.
2. Writes `overrides.txt` with Modelica parameter overrides.
3. Runs the compiled OpenModelica executable.
4. Applies solver, time, output, event, log, and extra runtime flags.
5. Reads the generated CSV result file.
6. Extracts raw time histories or final steady values.
7. Preserves case metadata.
8. Removes the run directory when `execution.cleanup: true`.

The runner expects these files to exist:

```text
<build_dir>/<exec_name>
<build_dir>/<exec_name>_init.xml
```

If either file is missing, rerun the matching build target.

On Windows the executable may be written with an `.exe` suffix. BobSim checks
for both forms.

## RampSteerEval

RampSteerEval characterizes open-loop steering ramp behavior using the unified
`VehicleSim` executable.

Use it when you want a first handling proof path from the app or CLI. It sweeps
configured velocity cases, applies a handwheel ramp, records the vehicle
response, and writes report metrics from the measured lateral-acceleration
path.

Main outputs:

```text
_3_StandardSim/generated_results/ramp_steer_eval_report.pdf
_3_StandardSim/generated_results/ramp_steer_eval_report_metrics.csv
```

## SteadyStateEval

SteadyStateEval characterizes quasi-steady lateral response using the unified
`VehicleSim` executable in closed-loop target lateral-acceleration mode.

Current config highlights:

| Key | Current role |
| :-- | :-- |
| `simulation.exec_name` | `BobLib.Experiments.Standards.VehicleSim` |
| `simulation.build_dir` | `_3_StandardSim/BuildBobLib/VehicleSim` |
| `simulation.init_parameters.useMode` | `0`, open-loop ramp steer |
| `simulation.extra_args` | includes `-jacobian=internalNumerical` |
| `sweep.testVels` | `12.5`, `15.0`, `17.5`, `20.0` m/s |
| `sweep.maxAy` | positive ramp target up to `18.0` m/s^2 |
| `fit.ay_linear_max` | linear fit band upper bound |
| `report.metric_target_velocity_mps` | velocity used for exported summary metrics |

The workflow extracts steering, acceleration, roll, sideslip, yaw velocity,
wheel loads, handwheel torque, and controller/debug signals. It fits response
curves against measured lateral acceleration and exports gradients, ranges,
tracking errors, and velocity trends.

Main outputs:

```text
_3_StandardSim/generated_results/steady_state_eval_report.pdf
_3_StandardSim/generated_results/steady_state_eval_report_metrics.csv

_3_StandardSim/results/steady_state_eval_report.pdf
_3_StandardSim/results/steady_state_eval_report_metrics.csv
```

## TransientEval

TransientEval characterizes steering response over time using step-steer and
continuous sine cases.

Current config highlights:

| Key | Current role |
| :-- | :-- |
| `simulation.exec_name` | `BobLib.Experiments.Standards.VehicleSim` |
| `simulation.extra_args` | includes `-jacobian=internalNumerical` |
| `test.testVel` | `15.0` and `20.0` m/s velocity groups |
| `test.run_step` | enables representative step-steer cases |
| `test.run_continuous_sine` | enables sustained sine sweeps |
| `test.steerStep_deg` | `5.0` degree step input |
| `test.sweep_freq_hz` | `0.5`, `0.75`, `1.0` Hz |
| `test.sweep_amp_deg` | `5.0` degree sine amplitude |
| `test.n_cycles` | `4` cycles per sine run |

BobLib's integrated vehicle model uses transient tire slip, with relaxation
parameters supplied by each tire record. That matters most here because the
workflow is explicitly measuring time-domain steering response.

Main outputs:

```text
_3_StandardSim/generated_results/transient_eval_report.pdf
_3_StandardSim/generated_results/transient_eval_report_metrics.csv

_3_StandardSim/results/transient_eval_report.pdf
_3_StandardSim/results/transient_eval_report_metrics.csv
```

Representative metrics include lateral acceleration rise time, yaw-rate rise
time, overshoot, gain, phase, equivalent lag, and frequency-response trends.

## FourPostEval

FourPostEval evaluates suspension and chassis response through heave and roll
sweeps using `BobLib.Experiments.Standards.FourPostSim`.

Current config highlights:

| Key | Current role |
| :-- | :-- |
| `simulation.exec_name` | `BobLib.Experiments.Standards.FourPostSim` |
| `simulation.build_dir` | `_3_StandardSim/BuildBobLib/FourPostSim` |
| `simulation.extra_args` | includes `-jacobian=internalNumerical` |
| `procedure.heaveMagnitude` | `0.03` m |
| `procedure.rollMagnitude` | `0.035` rad |
| `procedure.forceMagnitude` | `1000` N |
| `report.metrics_csv_path` | `_3_StandardSim/results/four_post_eval_report_metrics.csv` |

The workflow extracts front and rear K&C output records and computes summary
metrics for camber, toe, caster, KPI, mechanical trail, mechanical scrub,
motion ratio, anti/jacking behavior, roll stiffness, anti-roll-bar
contribution, and lateral load transfer distribution.

Main outputs:

```text
_3_StandardSim/generated_results/four_post_eval_report.pdf
_3_StandardSim/generated_results/four_post_eval_report_metrics.csv

_3_StandardSim/results/four_post_eval_report.pdf
_3_StandardSim/results/four_post_eval_report_metrics.csv
```

FourPostEval metrics are useful to EnvelopeSim. If available, the envelope
loader can use the latest four-post lateral-load-transfer metric; otherwise it
falls back to static front mass fraction.

## Reports

Standard reports are built by `_0_Utils/reporting/report_engine.py`.

The report engine:

- reads the workflow config
- creates a title page
- dispatches to workflow-specific summary pages
- renders plots from the `plots` config
- writes a PDF with Matplotlib `PdfPages`

Plot pages are handled by `_0_Utils/plotting/plot_engine.py`.

## Debugging

The fastest debugging loop for maneuver studies is:

```bash
make standard-build
make standard-eval-steady-state
```

For four-post work:

```bash
make standard-build-four-post
make standard-eval-four-post
```

If a run fails:

- Confirm the build directory contains the executable and init XML.
- Set `execution.cleanup: false` in the workflow config.
- Rerun the workflow.
- Inspect the retained run directory.
- Check `overrides.txt`, `run.log`, and the generated result CSV.
