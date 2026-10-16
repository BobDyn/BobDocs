---
layout: doc
title: StandardSim
---

# StandardSim

StandardSim runs the four standard BobDyn/BobLib Modelica studies. Python
workflows define the cases, run the compiled OpenModelica executable, extract
signals, compute metrics, and write a PDF report and a metrics CSV.

Launch it from the app's `Simulation` tab, or with the `make standard-*`
targets. The app cards map to workflows as follows:

| App card | Workflow | Use it for |
| :-- | :-- | :-- |
| `Ramp Steer` | [RampSteerEval](#rampsteereval) | Open-loop steering ramp response |
| `Steady State` | [SteadyStateEval](#steadystateeval) | Settled lateral-acceleration operating points |
| `Transient` | [TransientEval](#transienteval) | Step steer and continuous sine response |
| `Four Post` | [FourPostEval](#fourposteval) | Heave, roll, and vertical-force suspension procedures |

For the app controls, see [Simulation](/bobsim/app#simulation).

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
| `_3_StandardSim/generated_results/` | Reports and metrics CSVs from the workflows |
| `_3_StandardSim/results/` | Older output location. The shipped configs no longer write here. |

## Build and run

| Command | Builds | Output directory |
| :-- | :-- | :-- |
| `make standard-build` | `BobLib.Experiments.Standards.VehicleSim` | `_3_StandardSim/BuildBobLib/VehicleSim/` |
| `make standard-build-four-post` | `BobLib.Experiments.Standards.FourPostSim` | `_3_StandardSim/BuildBobLib/FourPostSim/` |

Both targets compile the generated BobLib Modelica entry point. They rebuild
when the entry point, the build script, or a generated vehicle record changes.

| Command | Workflow | Seed config |
| :-- | :-- | :-- |
| `make standard-eval-ramp-steer` | RampSteerEval | `_3_StandardSim/RampSteerEval/ramp_steer_eval_config.yml` |
| `make standard-eval-steady-state` | SteadyStateEval | `_3_StandardSim/SteadyStateEval/steady_state_eval_config.yml` |
| `make standard-eval-transient` | TransientEval | `_3_StandardSim/TransientEval/transient_eval_config.yml` |
| `make standard-eval-four-post` | FourPostEval | `_3_StandardSim/FourPostEval/four_post_eval_config.yml` |
| `make standard-eval-all` | All four | All four configs above |

Each run target builds its executable first if it is missing or out of date.
If the app has written an active copy of a config to
`_5_App/user_data/config/active/`, the workflow reads that copy instead of the
seed. See [Where the app keeps its files](/bobsim/app#where-the-app-keeps-its-files).

::: details Direct Python entry points

```bash
python -m _3_StandardSim.RampSteerEval.ramp_steer_eval_sim
python -m _3_StandardSim.SteadyStateEval.steady_state_eval_sim
python -m _3_StandardSim.TransientEval.transient_eval_sim
python -m _3_StandardSim.FourPostEval.four_post_eval_sim
```

These do not rebuild the executable. Use the make targets for normal runs.

:::

## Shared runner

`_3_StandardSim/_modelica_runner.py` runs every case. For each case it:

1. Creates a run directory under the build tree.
2. Writes `overrides.txt` with the Modelica parameter overrides.
3. Runs the compiled executable with the solver, time, output, event, log, and
   extra runtime flags from the config.
4. Reads the result CSV and extracts time histories or final values.
5. Removes the run directory if `execution.cleanup` is `true`.

The runner needs these files:

```text
<build_dir>/<exec_name>
<build_dir>/<exec_name>_init.xml
```

If either file is missing, rerun the matching build target. On Windows the
executable may have an `.exe` suffix. BobSim checks for both forms.

## RampSteerEval

RampSteerEval measures open-loop steering ramp response with the `VehicleSim`
executable. It sweeps the configured velocities, applies a handwheel ramp, and
fits metrics against measured lateral acceleration.

| Key | Current value or role |
| :-- | :-- |
| `simulation.exec_name` | `BobLib.Experiments.Standards.VehicleSim` |
| `simulation.build_dir` | `_3_StandardSim/BuildBobLib/VehicleSim` |
| `simulation.init_parameters.useMode` | Not set. The model default `0` is the open-loop ramp. |
| `simulation.init_parameters.enableLinearityTermination` | `true`. Stops the ramp when steering gain drops. |
| `simulation.init_parameters.linearityNonlinearityFraction` | `0.2`. Local lateral-gain loss that stops the ramp. |
| `simulation.init_parameters.linearityReferenceAy` | `4.0`. Measured lateral acceleration used as the linear reference. |
| `sweep.testVels` | `12.5`, `15`, `17.5`, `20` m/s |
| `sweep.maxAy` | `18`. Positive ramp target. Sets the ramp direction and report range. |
| `fit.ay_linear_max` | `4`. Upper bound of the linear fit band. |

The app shows the cutoff controls in the Ramp Steer modal. If high-speed runs
stop before the lateral acceleration you want, increase the cutoff fraction or
turn the cutoff off for that run.

## SteadyStateEval

SteadyStateEval measures quasi-steady lateral response with the `VehicleSim`
executable in closed-loop target lateral-acceleration mode.

| Key | Current value or role |
| :-- | :-- |
| `simulation.exec_name` | `BobLib.Experiments.Standards.VehicleSim` |
| `simulation.build_dir` | `_3_StandardSim/BuildBobLib/VehicleSim` |
| `simulation.init_parameters.useMode` | `3`, closed-loop target lateral acceleration |
| `simulation.init_parameters.steadyStateSettleTimeout` | `30.0` s after the target ramp reaches its final value |
| `simulation.init_parameters.steadyStateAyTolerance` | `0.10`. Settled lateral-acceleration tolerance. |
| `simulation.init_parameters.steadyStateSpeedTolerance` | `0.20`. Settled speed tolerance. |
| `simulation.extra_args` | `-jacobian=internalNumerical`, `-ls=totalpivot` |
| `sweep.testVels` | `12.5`, `15.0`, `17.5`, `20.0` m/s |
| `sweep.targetAys` | Target grid from `2.0` to `18.0` m/s^2 |
| `sweep.maxAyByVelocity` | Per-velocity caps on the target grid, below |
| `fit.ay_linear_max` | `4.0`. Upper bound of the linear fit band. |
| `report.metric_target_velocity_mps` | `15.0`. Velocity for the exported summary metrics. |

The default config caps the target grid by velocity:

| Velocity | Default max target |
| :-- | :-- |
| `12.5` m/s | `16.0` m/s^2 |
| `15.0` m/s | `10.0` m/s^2 |
| `17.5` m/s | `6.0` m/s^2 |
| `20.0` m/s | `4.0` m/s^2 |

Keep the caps for runs that must complete on the default vehicle. Raise or
remove a cap to probe higher lateral acceleration. The app shows the caps and
the settle tolerances in the Steady State modal.

The workflow extracts steering, acceleration, roll, sideslip, yaw velocity,
wheel loads, handwheel torque, and controller signals. It fits response curves
against measured lateral acceleration and exports gradients, ranges, tracking
errors, and velocity trends.

## TransientEval

TransientEval measures steering response over time with step-steer and
continuous sine cases.

| Key | Current value or role |
| :-- | :-- |
| `simulation.exec_name` | `BobLib.Experiments.Standards.VehicleSim` |
| `simulation.extra_args` | `-jacobian=internalNumerical` |
| `test.testVel` | `15.0` and `20.0` m/s velocity groups |
| `test.run_step` | Enables the step-steer cases |
| `test.run_continuous_sine` | Enables the sustained sine cases |
| `test.steerStep_deg` | `5.0` degree step input |
| `test.sweep_freq_hz` | `0.5`, `0.75`, `1.0` Hz |
| `test.sweep_amp_deg` | `5.0` degree sine amplitude |
| `test.n_cycles` | `4` cycles per sine run |

BobLib's integrated vehicle model uses transient tire slip, with relaxation
parameters from each tire record. This matters most here, because the workflow
measures time-domain steering response.

Metrics include lateral acceleration rise time, yaw-rate rise time, overshoot,
gain, phase, equivalent lag, and frequency-response trends.

## FourPostEval

FourPostEval measures suspension and chassis response through heave and roll
sweeps with `BobLib.Experiments.Standards.FourPostSim`.

| Key | Current value or role |
| :-- | :-- |
| `simulation.exec_name` | `BobLib.Experiments.Standards.FourPostSim` |
| `simulation.build_dir` | `_3_StandardSim/BuildBobLib/FourPostSim` |
| `simulation.extra_args` | `-jacobian=internalNumerical` |
| `procedure.heaveMagnitude` | `0.03` m |
| `procedure.rollMagnitude` | `0.01308996938995747` rad (0.75 deg) |
| `procedure.forceMagnitude` | `1000` N |
| `report.metrics_csv_path` | `_3_StandardSim/generated_results/four_post_eval_report_metrics.csv` |
| `report.raw_time_series_appendix` | `false`. Leaves raw time-series pages out of the report. |

The workflow extracts front and rear K&C output records. It computes summary
metrics for camber, toe, caster, KPI, mechanical trail, mechanical scrub,
motion ratio, anti and jacking behavior, roll stiffness, anti-roll-bar
contribution, and lateral load transfer distribution.

The Geometric Anti-Roll vs Roll report page plots the front and rear lateral
jacking anti-roll curves across the roll sweep. Archive packages keep the raw
per-run signals.

EnvelopeSim and OptSim use FourPostEval metrics. See
[Shared vehicle inputs](/bobsim/envelope#shared-vehicle-inputs).

## Outputs

Each workflow writes its report and metrics CSV to
`_3_StandardSim/generated_results/`:

| Workflow | Files |
| :-- | :-- |
| RampSteerEval | `ramp_steer_eval_report.pdf`, `ramp_steer_eval_report_metrics.csv` |
| SteadyStateEval | `steady_state_eval_report.pdf`, `steady_state_eval_report_metrics.csv` |
| TransientEval | `transient_eval_report.pdf`, `transient_eval_report_metrics.csv` |
| FourPostEval | `four_post_eval_report.pdf`, `four_post_eval_report_metrics.csv` |

For the metric groups and the raw case files, see [Archive](/bobsim/results).

## Reports

`_0_Utils/reporting/report_engine.py` builds the standard reports. It reads the
workflow config, writes a title page and the workflow-specific summary pages,
renders the plots from the `plots` config, and writes the PDF with Matplotlib
`PdfPages`. `_0_Utils/plotting/plot_engine.py` draws the plot pages.

## Debug a failed run

1. Confirm the build directory contains the executable and the init XML.
2. Set `execution.cleanup: false` in the workflow config. The shipped configs
   already use `false`.
3. Rerun the workflow.
4. Open the retained run directory under
   `_3_StandardSim/BuildBobLib/<entry point>/results/`.
5. Check `overrides.txt`, `run.log`, and the result CSV.

For a fast loop, rebuild and run one workflow:

```bash
make standard-build
make standard-eval-steady-state
```

For four-post work:

```bash
make standard-build-four-post
make standard-eval-four-post
```
