# SteadyStateEval workflow

The SteadyStateEval workflow is BobSim's steady-state cornering characterization workflow.

## Files

```text
_3_StandardSim/SteadyStateEval/steady_state_eval_sim.py
_3_StandardSim/SteadyStateEval/steady_state_eval_config.yml
```

## Purpose

The workflow generates a radius sweep at constant velocity, runs positive and negative cornering cases, extracts steady-state signals, and summarizes vehicle behavior as a function of lateral acceleration.

## Case generation

The workflow reads values such as:

| Config key | Meaning |
|:--|:--|
| `sweep.testVel` | Target vehicle speed. |
| `sweep.n_cases` | Number of radius samples before left/right duplication. |
| `sweep.r_min` | Minimum radius. |
| `sweep.r_max` | Maximum radius. |
| `sweep.radius_bias_power` | Biasing exponent for radius distribution. |
| `controller.curv_kp` | Curvature control proportional gain. |
| `controller.curv_ti` | Curvature control integral time. |
| `controller.vel_kp` | Velocity control proportional gain. |
| `controller.vel_ti` | Velocity control integral time. |

## Modelica overrides

Typical generated cases override values such as:

```text
initialVel
targetVel
targetRad
curvGain
curvTi
velGain
velTi
useMode
stopTime
```

## Outputs

The workflow writes:

```text
_3_StandardSim/results/steady_state_eval_report.pdf
_3_StandardSim/results/steady_state_eval_report_metrics.csv
```

## Metrics and plots

The summary includes lateral acceleration range, steering behavior, curvature tracking error, roll, sideslip, steering torque, and response gradients. Plot sections are defined in YAML under `plots`.

## Current config

```yaml
standard: SteadyStateEval
simulation:
  backend: modelica
  build_dir: _3_StandardSim/Build
  exec_name: BobLib.Standards.VehicleModel
  stop_time: 10.0
  solver: dassl
  output_format: csv
  log_level: LOG_STDOUT,LOG_ASSERT,LOG_STATS
  variable_filter: time|handwheelAngle|leftSteerAngle|rightSteerAngle|accY|roll|sideslip|handwheelTorque|velX|velY|yawVel
  no_grid: true
  no_event_emit: false
  no_equidistant_output_frequency: false
execution:
  parallel: true
  max_workers: 8
  cleanup: false
  stream_logs: false
sweep:
  testVel: 15.0
  n_cases: 10
  r_min: 12.5
  r_max: 100.0
  radius_bias_power: 2.5
controller:
  curv_kp: 3
  curv_ti: 0.02
  vel_kp: 200.0
  vel_ti: 1.0
fit:
  ay_linear_max: 6.0
report:
  enabled: true
  brand: BobSim
  title: SteadyStateEval Vehicle Characterization
  subtitle: OpenModelica Executable with Modelica PI Control
  output_path: _3_StandardSim/results/steady_state_eval_report.pdf
  notes:
  - SteadyStateEval steady-state circular test performed
  - Constant velocity maintained at 15 m/s
  - Radius sweep from 12.5 m to 100 m
  - Tire model: MF52
  - Configuration: baseline_v3
  - Backend: OpenModelica executable
plots:
  steering:
    layout: dual
    title: Steering Behavior vs $a_y$
    subplots:
    - title: Roadwheel Angle $\delta$
      style: line
      fit: false
      x:
        key: ay_signed
        label: $a_y$ $(m/s^2)$
      y:
        key: roadwheel
        label: $\delta$ (rad)
    - title: Curvature Tracking Error
      style: scatter
      x:
        key: ay_signed
        label: $a_y$ $(m/s^2)$
      y:
        key: curvature_error_pct
        label: $\Delta \kappa / \kappa_{cmd} \times 100$ (%)
  vehicle_states:
    layout: triple
    title: Vehicle States vs $a_y$
    subplots:
    - title: Curvature $\kappa$
      x:
        key: ay_signed
        label: $a_y$ $(m/s^2)$
      y:
        key: curvature
        label: $\kappa$ (1/m)
    - title: Roll Angle $\phi$
      x:
        key: ay_signed
        label: $a_y$ $(m/s^2)$
      y:
        key: roll
        label: $\phi$ (rad)
    - title: Sideslip $\beta$
      x:
        key: ay_signed
        label: $a_y$ $(m/s^2)$
      y:
        key: sideslip
        label: $\beta$ (rad)
  sensitivities:
    layout: triple
    title: Response Sensitivities vs $a_y$
    subplots:
    - title: $d\kappa/da_y$
      x:
        key: ay_signed
        label: $a_y$ $(m/s^2)$
      y:
        key: curvature_gradient
        label: $d\kappa/da_y$
    - title: $d\phi/da_y$
      x:
        key: ay_signed
        label: $a_y$ $(m/s^2)$
      y:
        key: roll_gradient
        label: $d\phi/da_y$
    - title: $d\beta/da_y$
      x:
        key: ay_signed
        label: $a_y$ $(m/s^2)$
      y:
        key: sideslip_gradient
        label: $d\beta/da_y$
  steering_effort:
    layout: dual
    title: Steering Effort vs $a_y$
    subplots:
    - title: Steering Torque $T_{sw}$
      x:
        key: ay_signed
        label: $a_y$ $(m/s^2)$
      y:
        key: torque
        label: $T_{sw}$ (Nm)
    - title: Steering Sensitivity $d\delta/da_y$
      x:
        key: ay_signed
        label: $a_y$ $(m/s^2)$
      y:
        key: steer_gradient
        label: $d\delta/da_y$
