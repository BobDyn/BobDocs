# TransientEval workflow

The TransientEval workflow is BobSim's transient steering characterization workflow.

## Files

```text
_3_StandardSim/TransientEval/transient_eval_sim.py
_3_StandardSim/TransientEval/transient_eval_config.yml
```

## Purpose

The workflow runs steering step and sine cases, then computes time-domain and frequency-domain response metrics.

## Supported input families

| Input family | Purpose |
|:--|:--|
| Step steer | Time-domain transient response. |
| One-period sine | Single-period response characterization. |
| Continuous sine | Sustained sine response and frequency response extraction. |

## Case generation

The workflow expands directions, amplitudes, frequencies, and enabled input families into case dictionaries. Representative cases are selected for report plots and deterministic summary tables.

Important config keys include:

| Config key | Meaning |
|:--|:--|
| `test.testVel` | Target speed. |
| `test.stepTime` | Steering input start time. |
| `test.run_step` | Enable step cases. |
| `test.run_sine_one_period` | Enable one-period sine cases. |
| `test.run_continuous_sine` | Enable continuous sine cases. |
| `test.directions` | Left/right steering directions. |
| `test.sweep_freq_hz` | Continuous sine frequency sweep. |
| `test.sweep_amp_deg` | Continuous sine amplitude sweep. |
| `test.n_cycles` | Number of cycles for sustained sine tests. |
| `test.analyze_cycles_after` | Number of cycles to skip before analysis. |

## Outputs

The workflow writes:

```text
_3_StandardSim/results/transient_eval_report.pdf
_3_StandardSim/results/transient_eval_report_metrics.csv
```

## Metrics and plots

The summary includes step-response metrics, representative time histories, sine response traces, frequency response gains, phases, and bandwidth-style quantities.

## Current config

```yaml
standard: TransientEval
simulation:
  backend: modelica
  build_dir: _3_StandardSim/Build
  exec_name: BobLib.Standards.VehicleModel
  solver: dassl
  output_format: csv
  log_level: LOG_STATS
  no_grid: true
  no_event_emit: false
  visual: true
execution:
  parallel: true
  max_workers: 8
  cleanup: true
  stream_logs: false
test:
  testVel: 20.0
  stepTime: 1.0
  run_step: true
  run_sine_one_period: true
  run_continuous_sine: true
  directions:
  - left
  - right
  representative_step_deg: 5.0
  representative_step_direction: left
  steerStep_deg:
  - 5.0
  representative_one_freq_hz: 1.0
  representative_one_amp_deg: 5.0
  representative_one_direction: left
  sine_freq_hz:
  - 1.0
  sine_amp_deg:
  - 5.0
  representative_cont_freq_hz: 1.0
  representative_cont_amp_deg: 5.0
  representative_cont_direction: left
  sweep_freq_hz:
  - 0.5
  - 0.75
  - 1.0
  - 1.5
  - 2.0
  sweep_amp_deg:
  - 5.0
  n_cycles: 5
  analyze_cycles_after: 1
  freq_response_amp_deg: 5.0
  freq_response_direction: left
report:
  enabled: true
  brand: BobSim
  title: TransientEval Lateral Transient Response
  subtitle: Comprehensive Open-Loop Characterization
  output_path: _3_StandardSim/results/transient_eval_report.pdf
  notes:
  - One-period sinusoidal input
  - Continuous sinusoidal response
  - Frequency response computed from fixed-amplitude, single-direction sine sweep
  - Steering shown in degrees for readability
  - Representative plots use deterministic reference cases
  - Step input support pending VehicleModel useMode=2
plots:
  step_response:
    layout: triple
    title: Step Steer Response (TransientEval)
    subplots:
    - title: Steering Wheel Angle $\delta_H$
      x:
        key: step_time
        label: Time [s]
      y:
        key: step_steer
        label: $\delta_{HWA}$ [deg]
        scale: 57.3
    - title: Lateral Acceleration $a_y$
      x:
        key: step_time
        label: Time [s]
      y:
        key: step_ay
        label: $a_y$ [m/s^2]
    - title: Yaw Velocity $r$
      x:
        key: step_time
        label: Time [s]
      y:
        key: step_yaw
        label: $r$ [rad/s]
  sine_one_period:
    layout: triple
    title: One-Period Sinusoidal Response (TransientEval)
    subplots:
    - title: Steering Wheel Angle $\delta_H$
      x:
        key: one_time
        label: Time [s]
      y:
        key: one_steer
        label: $\delta_{HWA}$ [deg]
        scale: 57.3
    - title: Lateral Acceleration $a_y$
      x:
        key: one_time
        label: Time [s]
      y:
        key: one_ay
        label: $a_y$ [m/s^2]
    - title: Yaw Velocity $r$
      x:
        key: one_time
        label: Time [s]
      y:
        key: one_yaw
        label: $r$ [rad/s]
  sine_five_period:
    layout: triple
    title: Continuous Sinusoidal Response
    subplots:
    - title: Steering Wheel Angle $\delta_H$
      x:
        key: cont_time
        label: Time [s]
      y:
        key: cont_steer
        label: $\delta_{HWA}$ [deg]
        scale: 57.3
    - title: Lateral Acceleration $a_y$
      x:
        key: cont_time
        label: Time [s]
      y:
        key: cont_ay
        label: $a_y$ [m/s^2]
    - title: Yaw Velocity $r$
      x:
        key: cont_time
        label: Time [s]
      y:
        key: cont_yaw
        label: $r$ [rad/s]
  freq_response_gain:
    layout: dual
    title: "Frequency Response — Gain (TransientEval)"
    xscale: log
    subplots:
    - title: $|a_y / \delta_{HWA}|$
      x:
        key: freq
        label: $f$ [Hz]
      y:
        key: ay_gain
        label: $|a_y / \delta_{HWA}|$ [(m/s^2)/rad]
    - title: $|r / \delta_{HWA}|$
      x:
        key: freq
        label: $f$ [Hz]
      y:
        key: yaw_gain
        label: $|r / \delta_{HWA}|$ [(rad/s)/rad]
  freq_response_phase:
    layout: dual
    title: "Frequency Response — Phase (TransientEval)"
    xscale: log
    subplots:
    - title: 'Phase: $a_y$ vs $\delta_{HWA}$'
      x:
        key: freq
        label: $f$ [Hz]
      y:
        key: ay_phase
        label: Phase [deg]
    - title: 'Phase: $r$ vs $\delta_{HWA}$'
      x:
        key: freq
        label: $f$ [Hz]
      y:
        key: yaw_phase
        label: Phase [deg]
