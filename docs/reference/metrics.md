---
layout: doc
title: Vehicle Performance Metrics
---

# Vehicle Performance Metrics

This page lists the metrics that BobSim exports, grouped by the workflow that
produces them. Each section gives the workflow, the maneuver, and the metric
table.

A metric has meaning only with its maneuver, operating region, signal
definitions, and extraction method. For how to read, choose, and extend
metrics, see [Choosing Metrics](/reference/choosing-metrics).

| Family | Workflow | Section |
| :-- | :-- | :-- |
| Steady-state handling | RampSteerEval, SteadyStateEval | [Steady-state handling](#steady-state-handling) |
| Transient and frequency response | TransientEval | [Transient handling](#transient-handling) |
| Kinematics and compliance | FourPostEval | [Suspension, kinematics, and compliance](#suspension-kinematics-and-compliance) |
| Envelope limits | EnvelopeSim GGV | [GGV](#ggv) |
| Yaw moment and trim | EnvelopeSim YMD | [YMD](#ymd) |
| Design sensitivity | OptSim | [Sensitivity](#sensitivity) |

## Steady-state handling

| | |
| :-- | :-- |
| Workflows | `RampSteerEval` and `SteadyStateEval` in `_3_StandardSim/` |
| Maneuver | RampSteerEval ramps the handwheel angle at each test velocity. SteadyStateEval holds a closed-loop lateral-acceleration target until the car settles, for each target and velocity. |
| Reduction | Fits each signal against measured $a_y$ along velocity isolines |
| Reported velocity | The velocity nearest `report.metric_target_velocity_mps` (15 m/s in the shipped configs) |

Both workflows export the table below.

| Group | Metrics |
| :-- | :-- |
| Run health and source | `n_cases`, `n_successful_cases`, `n_failed_cases`, `standard_sweep_max_ay_mps2`, `metric_target_velocity_mps`, `metric_source_velocity_mps` |
| Lateral range | `ay_min`, `ay_max`, `limit_ay_mps2` |
| Linear response gradients | `sideslip_gradient_rad_per_mps2`, `sideslip_gradient_deg_per_g`, `understeer_gradient_rad_per_mps2`, `understeer_gradient_deg_per_g`, `handwheel_angle_gradient_rad_per_mps2`, `handwheel_angle_gradient_deg_per_g`, `roll_gradient_deg_per_g` |
| Limit response gradients | `limit_sideslip_gradient_rad_per_mps2`, `limit_sideslip_gradient_deg_per_g`, `limit_understeer_gradient_rad_per_mps2`, `limit_understeer_gradient_deg_per_g`, `limit_handwheel_gradient_rad_per_mps2`, `limit_handwheel_gradient_deg_per_g`, `limit_roll_gradient_rad_per_mps2`, `limit_roll_gradient_deg_per_g` |
| Steering effort | `peak_handwheel_torque_Nm`, `peak_handwheel_torque_ay_mps2` |
| Fit quality | `roadwheel_fit_nrmse`, `handwheel_fit_nrmse`, `steer_excess_fit_nrmse`, `roll_fit_nrmse`, `sideslip_fit_nrmse` |
| Velocity sensitivity | `sideslip_gradient_velocity_slope_deg_per_g_per_mps`, `limit_sideslip_gradient_velocity_slope_deg_per_g_per_mps`, `understeer_gradient_velocity_slope_deg_per_g_per_mps`, `limit_understeer_gradient_velocity_slope_deg_per_g_per_mps`, `handwheel_angle_gradient_velocity_slope_deg_per_g_per_mps`, `limit_handwheel_gradient_velocity_slope_deg_per_g_per_mps`, `roll_gradient_velocity_slope_deg_per_g_per_mps`, `limit_roll_gradient_velocity_slope_deg_per_g_per_mps` |

SteadyStateEval also exports:

| Group | Metrics |
| :-- | :-- |
| Sweep definition | `standard_sweep_target_count`, and `standard_sweep_includes_negative_targets` when `sweep.includeNegative` is on |
| Limit detection | `limit_nonlinearity_fraction`, `limit_nonlinearity_threshold_fraction`, `limit_nonlinearity_reached`, `limit_nonlinearity_metric` |

Definitions:

- Linear gradients are linear slopes versus measured $a_y$.
- Limit gradients are local slopes at `limit_ay_mps2`. That is the fitted
  $a_y$ where local steering-gradient nonlinearity first reaches the
  configured threshold. If the fit never reaches it, the limit is the largest
  settled fitted point.
- Understeer gradients are slopes of steer excess, the steering above the
  geometric curvature requirement.

$$
a_y = \frac{v^2}{R}
\qquad
K_\delta = \frac{\partial \delta}{\partial a_y}
$$

$a_y$ is lateral acceleration, $v$ is speed, $R$ is turn radius, and $\delta$
is a steering measure such as roadwheel or handwheel angle.

## Transient handling

| | |
| :-- | :-- |
| Workflow | `TransientEval` in `_3_StandardSim/` |
| Maneuver | Step steer and continuous (sustained) sine steer |
| Reduction | Step-response features in time, and gain and phase from sine fits |
| Reported velocity | The velocity nearest `report.metric_target_velocity_mps` (15 m/s in the shipped config) |

| Group | Metrics |
| :-- | :-- |
| Run health and source | `n_cases`, `n_successful_cases`, `n_failed_cases`, `representative_testVel_mps`, `metric_target_velocity_mps`, `n_velocity_groups` |
| Lateral acceleration step response | `ay_peak`, `ay_ss`, `ay_rise_time_s`, `ay_peak_response_time_s`, `ay_gain_dc`, `ay_overshoot_pct` |
| Sideslip step response | `sideslip_ss`, `sideslip_rise_time_s`, `sideslip_gain_dc` |
| Yaw step response | `yaw_peak`, `yaw_ss`, `yaw_rise_time_s`, `yaw_peak_response_time_s`, `yaw_gain_dc`, `yaw_overshoot_rad_per_s`, `yaw_overshoot_pct` |
| Roll step response | `roll_peak`, `roll_ss`, `roll_gain_dc`, `roll_overshoot_rad`, `roll_overshoot_pct` |
| Settling | `settling_time_s` |
| Frequency response gain | `ay_gain_dc`, `yaw_gain_dc`, `ay_gain_peak`, `ay_gain_peak_freq`, `yaw_gain_peak`, `yaw_gain_peak_freq`, `bandwidth_hz`, `gain_variation_pct` |
| Frequency response phase and lag | `ay_phase_1hz`, `ay_phase_0p5hz`, `yaw_phase_1hz`, `yaw_phase_0p5hz`, `ay_lag_0p5hz`, `yaw_lag_0p5hz`, `yaw_to_ay_lag_0p5hz`, `ay_lag_1hz`, `yaw_lag_1hz`, `yaw_to_ay_lag_1hz`, `lag_steer_to_ay`, `lag_steer_to_yaw`, `yaw_to_ay_lag`, `ay_phase_45_freq`, `yaw_phase_45_freq` |
| Frequency trend and fit quality | `ay_gain_slope`, `yaw_gain_slope`, `ay_phase_slope`, `yaw_phase_slope`, `ay_fit_error`, `yaw_fit_error` |
| Velocity sensitivity | `<metric>_velocity_slope` for every metric above except the run-health and source group |

Definitions:

- Steady-state values are the mean of the last 20 samples of the step run.
- Rise time is the time from 50% of steady-state steer to 90% of steady-state
  response.
- Peak response time is the time from 50% of steady-state steer to the peak
  response.
- Overshoot is peak absolute response minus absolute steady-state response.
  The `_pct` form divides that by the absolute steady-state response.
- DC gain is steady-state response divided by steady-state steer.
- `_velocity_slope` metrics are linear slopes versus velocity across velocity
  groups, in the metric's units per m/s.

$$
G_r = \frac{r}{\delta}
\qquad
A_r = \frac{r_{\text{peak}}}{r_{\text{ss}}}
\qquad
\phi_r(\omega) = \angle \frac{R(j\omega)}{\Delta(j\omega)}
$$

$r$ is yaw rate, $\delta$ is steering input, $R(j\omega)$ is yaw-rate
response, and $\Delta(j\omega)$ is steering input in the frequency domain.

## Suspension, kinematics, and compliance

| | |
| :-- | :-- |
| Workflow | `FourPostEval` in `_3_StandardSim/` |
| Maneuver | Heave and roll sweeps on a four-post rig |
| Reduction | K&C-style gains and averages over the sweep |

| Group | Metrics |
| :-- | :-- |
| Run health and static balance | `roll_contact_valid_points`, `roll_contact_rejected_points`, `minimum_roll_pulse_contact_fz_n`, `static_balance_iterations`, `static_balance_max_abs_fz_error_n`, `static_balance_max_abs_fz_error_pct`, `static_balance_pass`, `static_motion_ratio_front`, `static_motion_ratio_rear` |
| Heave alignment gains | `camber_gain_heave_rad_per_m`, `toe_gain_heave_rad_per_m`, `caster_gain_heave_rad_per_m`, `kpi_gain_heave_rad_per_m`, `trail_gain_heave_m_per_m`, `scrub_gain_heave_m_per_m` |
| Roll alignment gains | `camber_gain_roll_rad_per_rad`, `toe_gain_roll_rad_per_rad`, `caster_gain_roll_rad_per_rad`, `kpi_gain_roll_rad_per_rad`, `trail_gain_roll_m_per_rad`, `scrub_gain_roll_m_per_rad` |
| Motion ratios | `avg_motion_ratio_front`, `avg_motion_ratio_rear`, `avg_stabar_motion_ratio_front`, `avg_stabar_motion_ratio_rear` |
| Anti and jacking behavior | `avg_anti_dive_pct`, `avg_anti_squat_pct`, `avg_anti_roll_front_pct`, `avg_anti_roll_rear_pct`, `avg_lateral_jacking_coeff_front`, `avg_lateral_jacking_coeff_rear`, `avg_longitudinal_jacking_coeff_front`, `avg_longitudinal_jacking_coeff_rear` |
| Force-based roll center | `avg_fbrc_equivalent_height_front_m`, `avg_fbrc_equivalent_height_rear_m`, `avg_fbrc_differential_jacking_ratio_front`, `avg_fbrc_differential_jacking_ratio_rear` |
| Roll stiffness and LLTD | `spring_roll_stiffness_front_Nm_per_rad`, `spring_roll_stiffness_rear_Nm_per_rad`, `arb_roll_stiffness_front_Nm_per_rad`, `arb_roll_stiffness_rear_Nm_per_rad`, `elastic_roll_stiffness_front_Nm_per_rad`, `elastic_roll_stiffness_rear_Nm_per_rad`, `avg_lltd_front_frac`, `avg_lltd_front_pct`, `avg_roll_rate_distribution_front_pct`, `avg_antiroll_geometry_lltd_delta_pct` |

Definitions:

- Alignment gains are for the front-left corner.
- Anti percentages divide the jacking coefficient by $h_{\text{cg}}/L$ for
  heave and by $h_{\text{cg}}/\bar{T}$ for roll. $\bar{T}$ is the mean of
  front and rear track.
- Elastic roll stiffness is spring plus anti-roll-bar roll stiffness.
- `avg_lltd_front_*` comes from contact-patch load changes in roll.
  `avg_roll_rate_distribution_front_pct` comes from roll stiffness.
  `avg_antiroll_geometry_lltd_delta_pct` is the difference between the two.
- The force-based roll center height is
  $h_{\text{eq}} = \tfrac{T}{2}\,(\Delta F_{z,R} - \Delta F_{z,L}) / F_y$, per
  axle, from loaded contact patches only.

## GGV

| | |
| :-- | :-- |
| Workflow | EnvelopeSim GGV in `_2_EnvelopeSim/GGV/` |
| Maneuver | Reduced-order acceleration envelope over a set of speed slices |
| Reduction | Envelope size, shape, and peaks, plus summaries over a track profile |

| Group | Metrics |
| :-- | :-- |
| Speed coverage | `reference_speed_mps`, `n_speed_slices`, `speed_min_mps`, `speed_max_mps` |
| Envelope size and reference slice | `ggv_volume_g2_mps`, `ggv_area_ref_g2`, `ggv_cornering_ref_g`, `ggv_accel_ref_g`, `ggv_braking_ref_g` |
| Mean and minimum capability | `ggv_mean_cornering_g`, `ggv_mean_accel_g`, `ggv_mean_braking_g`, `ggv_min_cornering_g`, `ggv_min_accel_g`, `ggv_min_braking_g` |
| Shape and balance | `ggv_area_fill_factor_ref`, `ggv_longitudinal_balance_ref`, `ggv_min_area_g2`, `ggv_min_area_speed_mps`, `ggv_max_area_g2`, `ggv_max_area_speed_mps` |
| Peak capability | `ggv_max_cornering_g`, `ggv_max_cornering_speed_mps`, `ggv_min_cornering_speed_mps`, `ggv_max_accel_g`, `ggv_max_accel_speed_mps`, `ggv_min_accel_speed_mps`, `ggv_max_braking_g`, `ggv_max_braking_speed_mps`, `ggv_min_braking_speed_mps` |
| Track-profile summaries | `track_corner_speed_mean_mps`, `track_corner_speed_min_mps`, `track_velocity_mean_mps`, `track_velocity_peak_mps`, `track_path_distance_m`, `track_straight_distance_m`, `track_straight_speed_mean_mps`, `track_accel_capacity_mean_mps2`, `track_brake_capacity_mean_mps2`, `track_longitudinal_capacity_mean_mps2` |
| Normalized track indices | `track_lateral_performance_index`, `track_longitudinal_performance_index`, `track_accel_performance_index`, `track_brake_performance_index`, `track_combined_performance_index` |

## YMD

| | |
| :-- | :-- |
| Workflow | EnvelopeSim YMD in `_2_EnvelopeSim/YMD/` |
| Maneuver | Yaw moment diagram over sideslip and handwheel angle, at one or more speeds |
| Reduction | Peaks, zero-yaw-moment trim, local gradients, and a speed sweep |

| Group | Metrics |
| :-- | :-- |
| Map health | `speed_mps`, `converged_fraction` |
| Peak lateral acceleration | `peak_lateral_accel_mps2`, `peak_lateral_accel_g`, `peak_lateral_accel_abs_g`, `yaw_moment_at_peak_lateral_accel_nm`, `beta_at_peak_lateral_accel_deg`, `hwa_at_peak_lateral_accel_deg` |
| Yaw moment authority | `peak_abs_yaw_moment_nm`, `yaw_moment_peak_signed_nm`, `lateral_accel_at_peak_yaw_moment_g`, `max_positive_yaw_moment_nm`, `max_negative_yaw_moment_nm`, `yaw_moment_range_nm`, `yaw_moment_balance` |
| Local yaw moment gradients | `yaw_moment_hwa_gradient_nm_per_deg`, `yaw_moment_beta_gradient_nm_per_deg` |
| Zero-yaw trim | `trim_points_count`, `trim_peak_lateral_accel_mps2`, `trim_peak_lateral_accel_g`, `trim_peak_lateral_accel_abs_g`, `trim_beta_at_peak_lateral_accel_deg`, `trim_hwa_at_peak_lateral_accel_deg`, `trim_max_positive_lateral_accel_g`, `trim_max_negative_lateral_accel_g`, `trim_lateral_accel_range_g`, `trim_lateral_accel_balance`, `trim_steer_gradient_deg_per_g`, `trim_beta_gradient_deg_per_g` |
| Zero-input sanity | `zero_input_lateral_accel_g`, `zero_input_yaw_moment_nm` |
| Speed sweep | `speed_sweep_min_speed_mps`, `speed_sweep_max_speed_mps`, `speed_sweep_peak_lateral_accel_abs_g`, `speed_sweep_peak_lateral_accel_speed_mps`, `speed_sweep_peak_trim_lateral_accel_abs_g`, `speed_sweep_peak_trim_lateral_accel_speed_mps`, `speed_sweep_peak_abs_yaw_moment_nm`, `speed_sweep_peak_abs_yaw_moment_speed_mps` |

## Sensitivity

| | |
| :-- | :-- |
| Workflow | OptSim in `_4_OptSim/` (StandardSens and EnvelopeSens) |
| Maneuver | None of its own. OptSim reruns the workflows above across design variables. |
| Reduction | Metric change versus design variable |

OptSim does not add a physical metric family. Its outputs are:

- StandardSim sensitivity results from selected SteadyStateEval metrics
- EnvelopeSim sensitivity results from reduced envelope metrics
- refined response-surface results
- tornado-style effect sizes
- Pearson correlation tables when enabled
- percent or absolute metric deltas from a baseline

A sensitivity is not a design recommendation. It shows how a chosen metric
moves under a chosen set of assumptions.

## Model quality metrics

Some exported metrics describe trust in a result, not vehicle behavior:

| Metric | Workflow |
| :-- | :-- |
| `*_fit_nrmse` | RampSteerEval, SteadyStateEval |
| `ay_fit_error`, `yaw_fit_error` | TransientEval |
| `n_failed_cases` | RampSteerEval, SteadyStateEval, TransientEval |
| `converged_fraction` | YMD |

For quality and uncertainty metrics that BobSim does not export yet, see
[Choosing Metrics](/reference/choosing-metrics#model-quality-and-uncertainty).
