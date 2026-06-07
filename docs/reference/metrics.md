---
layout: doc
title: Vehicle Performance Metrics
---

# Vehicle Performance Metrics

Vehicle metrics are ways to characterize a physical system. They are not a
single universal score, and they are not meaningful without the maneuver,
operating region, signal definitions, and extraction method that produced them.

BobSim exports a practical set of metrics today. Those exported metrics are
listed on this page, but they are not the end-all reference for vehicle
characterization. Other metrics can be equally valid when they answer a clear
engineering question and remain tied to the original vehicle response.

The right question is not "which metric is best?" The right question is:

- what vehicle behavior is being characterized
- what maneuver or data region supports the metric
- what assumptions are hidden by the reduction
- whether the metric reflects the physical system in the region being used
- how much uncertainty remains

## Reading A Metric

A useful vehicle metric should define:

| Requirement | Meaning |
| :-- | :-- |
| Signal source | Simulation, test data, competition telemetry, or reduced-order model |
| Maneuver | Steady-state sweep, transient steer, four-post sweep, envelope map, track section |
| Operating region | Speed, load, acceleration, steering, tire state, aero state, surface |
| Extraction method | Peak value, gradient, fit, trim condition, frequency response, time-domain event |
| Units and sign convention | The physical direction and scaling of the reported value |
| Coverage | Where the data supports the claim and where it does not |

The same number can mean different things if the maneuver or extraction method
changes. A steering gradient from a ramp-steer path is not automatically the
same as a trim steering gradient from a YMD map.

## Current BobSim Metric Families

BobSim currently exports metrics from StandardSim, FourPostEval, EnvelopeSim,
and OptSim sensitivity workflows. These names are implementation artifacts, but
they also show the major characterization categories BobDyn currently supports.

## Steady-State Handling

SteadyStateEval characterizes quasi-steady lateral response from ramp-steer
velocity isolines.

Current exported groups:

| Group | Current metrics |
| :-- | :-- |
| Run health and source | `n_cases`, `n_successful_cases`, `n_failed_cases`, `standard_sweep_max_ay_mps2`, `metric_target_velocity_mps`, `metric_source_velocity_mps` |
| Lateral range | `ay_min`, `ay_max`, `limit_ay_mps2` |
| Linear response gradients | `sideslip_gradient_rad_per_mps2`, `sideslip_gradient_deg_per_g`, `understeer_gradient_rad_per_mps2`, `understeer_gradient_deg_per_g`, `handwheel_angle_gradient_rad_per_mps2`, `handwheel_angle_gradient_deg_per_g`, `roll_gradient_deg_per_g` |
| Limit response gradients | `limit_sideslip_gradient_rad_per_mps2`, `limit_sideslip_gradient_deg_per_g`, `limit_understeer_gradient_rad_per_mps2`, `limit_understeer_gradient_deg_per_g`, `limit_handwheel_gradient_rad_per_mps2`, `limit_handwheel_gradient_deg_per_g`, `limit_roll_gradient_rad_per_mps2`, `limit_roll_gradient_deg_per_g` |
| Steering effort | `peak_handwheel_torque_Nm`, `peak_handwheel_torque_ay_mps2` |
| Fit quality | `roadwheel_fit_nrmse`, `handwheel_fit_nrmse`, `steer_excess_fit_nrmse`, `roll_fit_nrmse`, `sideslip_fit_nrmse` |
| Velocity sensitivity | `sideslip_gradient_velocity_slope_deg_per_g_per_mps`, `limit_sideslip_gradient_velocity_slope_deg_per_g_per_mps`, `understeer_gradient_velocity_slope_deg_per_g_per_mps`, `limit_understeer_gradient_velocity_slope_deg_per_g_per_mps`, `handwheel_angle_gradient_velocity_slope_deg_per_g_per_mps`, `limit_handwheel_gradient_velocity_slope_deg_per_g_per_mps`, `roll_gradient_velocity_slope_deg_per_g_per_mps`, `limit_roll_gradient_velocity_slope_deg_per_g_per_mps` |

Useful related metrics people may compute:

- roadwheel angle gradient versus measured lateral acceleration
- handwheel torque gradient and steering effort linearity
- curvature or radius tracking error
- yaw-rate gain versus lateral acceleration
- front/rear tire utilization at each lateral acceleration
- tire normal-load range and load-transfer split
- steering hysteresis or compliance steer if test data supports it
- local linearity loss or saturation onset by signal derivative
- confidence intervals on gradients from repeated sweeps

Common formulas:

$$
a_y = \frac{v^2}{R}
$$

$$
K_\delta = \frac{\partial \delta}{\partial a_y}
$$

where $a_y$ is lateral acceleration, $v$ is speed, $R$ is turn radius, and
$\delta$ is a steering measure such as roadwheel or handwheel angle.

## Transient Handling

TransientEval characterizes response to step steer and continuous sine steer
inputs.

Current exported groups:

| Group | Current metrics |
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
| Velocity sensitivity | BobSim also exports `_velocity_slope` versions of the main transient response and frequency response metrics |

Useful related metrics people may compute:

- peak yaw acceleration and time to peak yaw acceleration
- steering input rise time and actuator delay
- 10 to 90 percent rise time instead of 50 to 90 percent rise time
- damping ratio and natural frequency from a fitted reduced model
- control effort required to hold a path after the initial input
- steering correction count, reversal rate, or correction energy
- response repeatability across repeated runs
- tire relaxation contribution to lag
- transient tire load variation
- driver-to-vehicle closed-loop response if driver data is included

Common formulas:

$$
G_r = \frac{r}{\delta}
$$

$$
A_r = \frac{r_{peak}}{r_{ss}}
$$

$$
\phi_r(\omega) = \angle \frac{R(j\omega)}{\Delta(j\omega)}
$$

where $r$ is yaw rate, $\delta$ is steering input, $R(j\omega)$ is yaw-rate
response, and $\Delta(j\omega)$ is steering input in the frequency domain.

## Frequency-Domain Characterization

Frequency-domain metrics describe how the vehicle responds across input
frequency rather than at a single time or trim point.

Current BobSim frequency metrics are exported through TransientEval, but the
valid characterization space is broader:

- gain and phase from steering to yaw rate
- gain and phase from steering to lateral acceleration
- bandwidth
- resonance peak and peak frequency
- phase crossing frequencies such as -45 degrees
- equivalent time lag
- gain and phase slopes versus frequency
- coherence or fit quality when using measured data
- uncertainty bounds from repeated sine sweeps

These metrics are especially useful when comparing driver feel, steering
response, and whether a setup change shifts response timing in a desirable
direction.

## Suspension, Kinematics, And Compliance

FourPostEval characterizes heave and roll response through K&C-style output
records.

Current exported groups:

| Group | Current metrics |
| :-- | :-- |
| Heave alignment gains | `camber_gain_heave_rad_per_m`, `toe_gain_heave_rad_per_m`, `caster_gain_heave_rad_per_m`, `kpi_gain_heave_rad_per_m`, `trail_gain_heave_m_per_m`, `scrub_gain_heave_m_per_m` |
| Roll alignment gains | `camber_gain_roll_rad_per_rad`, `toe_gain_roll_rad_per_rad`, `caster_gain_roll_rad_per_rad`, `kpi_gain_roll_rad_per_rad`, `trail_gain_roll_m_per_rad`, `scrub_gain_roll_m_per_rad` |
| Motion ratios | `avg_motion_ratio_front`, `avg_motion_ratio_rear`, `avg_stabar_motion_ratio_front`, `avg_stabar_motion_ratio_rear` |
| Anti and jacking behavior | `avg_anti_dive_pct`, `avg_anti_squat_pct`, `avg_anti_roll_front_pct`, `avg_anti_roll_rear_pct`, `avg_lateral_jacking_coeff_front`, `avg_lateral_jacking_coeff_rear`, `avg_longitudinal_jacking_coeff_front`, `avg_longitudinal_jacking_coeff_rear` |
| Roll stiffness and LLTD | `spring_roll_stiffness_front_Nm_per_rad`, `spring_roll_stiffness_rear_Nm_per_rad`, `arb_roll_stiffness_front_Nm_per_rad`, `arb_roll_stiffness_rear_Nm_per_rad`, `elastic_roll_stiffness_front_Nm_per_rad`, `elastic_roll_stiffness_rear_Nm_per_rad`, `avg_lltd_front_frac`, `avg_lltd_front_pct` |

Useful related metrics people may compute:

- bump steer and roll steer by wheel and axle
- camber recovery at expected ride and roll states
- compliance steer, compliance camber, and compliance toe under load
- ride rate, roll rate, and pitch rate
- damper motion ratio and damper velocity distribution
- tire normal-load variation through heave and roll
- wheel-center migration and track or wheelbase change
- spring, anti-roll-bar, damper, and jacking contributions to load transfer
- K&C metric uncertainty from hardpoint or compliance uncertainty

## Envelope And Limit Metrics

Envelope metrics describe capability limits from reduced-order calculations.
They are useful when they remain tied to the physical system and are not treated
as a replacement for high-fidelity response validation.

### GGV Metrics

Current exported GGV groups:

| Group | Current metrics |
| :-- | :-- |
| Speed coverage | `reference_speed_mps`, `n_speed_slices`, `speed_min_mps`, `speed_max_mps` |
| Envelope size and reference slice | `ggv_volume_g2_mps`, `ggv_area_ref_g2`, `ggv_cornering_ref_g`, `ggv_accel_ref_g`, `ggv_braking_ref_g` |
| Mean and minimum capability | `ggv_mean_cornering_g`, `ggv_mean_accel_g`, `ggv_mean_braking_g`, `ggv_min_cornering_g`, `ggv_min_accel_g`, `ggv_min_braking_g` |
| Shape and balance | `ggv_area_fill_factor_ref`, `ggv_longitudinal_balance_ref`, `ggv_min_area_g2`, `ggv_min_area_speed_mps`, `ggv_max_area_g2`, `ggv_max_area_speed_mps` |
| Peak capability | `ggv_max_cornering_g`, `ggv_max_cornering_speed_mps`, `ggv_min_cornering_speed_mps`, `ggv_max_accel_g`, `ggv_max_accel_speed_mps`, `ggv_min_accel_speed_mps`, `ggv_max_braking_g`, `ggv_max_braking_speed_mps`, `ggv_min_braking_speed_mps` |
| Track-profile summaries | `track_corner_speed_mean_mps`, `track_corner_speed_min_mps`, `track_velocity_mean_mps`, `track_velocity_peak_mps`, `track_path_distance_m`, `track_straight_distance_m`, `track_straight_speed_mean_mps`, `track_accel_capacity_mean_mps2`, `track_brake_capacity_mean_mps2`, `track_longitudinal_capacity_mean_mps2` |
| Normalized track indices | `track_lateral_performance_index`, `track_longitudinal_performance_index`, `track_accel_performance_index`, `track_brake_performance_index`, `track_combined_performance_index` |

Useful related metrics people may compute:

- tire utilization at each GGV boundary point
- power-limited versus grip-limited regions
- braking bias sensitivity
- aero balance sensitivity with speed
- combined acceleration occupancy for a real track or test section
- uncertainty bounds from tire, mass, aero, or surface assumptions

### YMD Metrics

Current exported YMD groups:

| Group | Current metrics |
| :-- | :-- |
| Map health | `speed_mps`, `converged_fraction` |
| Peak lateral acceleration | `peak_lateral_accel_mps2`, `peak_lateral_accel_g`, `peak_lateral_accel_abs_g`, `yaw_moment_at_peak_lateral_accel_nm`, `beta_at_peak_lateral_accel_deg`, `hwa_at_peak_lateral_accel_deg` |
| Yaw moment authority | `peak_abs_yaw_moment_nm`, `yaw_moment_peak_signed_nm`, `lateral_accel_at_peak_yaw_moment_g`, `max_positive_yaw_moment_nm`, `max_negative_yaw_moment_nm`, `yaw_moment_range_nm`, `yaw_moment_balance` |
| Local yaw moment gradients | `yaw_moment_hwa_gradient_nm_per_deg`, `yaw_moment_beta_gradient_nm_per_deg` |
| Zero-yaw trim | `trim_points_count`, `trim_peak_lateral_accel_mps2`, `trim_peak_lateral_accel_g`, `trim_peak_lateral_accel_abs_g`, `trim_beta_at_peak_lateral_accel_deg`, `trim_hwa_at_peak_lateral_accel_deg`, `trim_max_positive_lateral_accel_g`, `trim_max_negative_lateral_accel_g`, `trim_lateral_accel_range_g`, `trim_lateral_accel_balance`, `trim_steer_gradient_deg_per_g`, `trim_beta_gradient_deg_per_g` |
| Zero-input sanity | `zero_input_lateral_accel_g`, `zero_input_yaw_moment_nm` |
| Speed sweep | `speed_sweep_min_speed_mps`, `speed_sweep_max_speed_mps`, `speed_sweep_peak_lateral_accel_abs_g`, `speed_sweep_peak_lateral_accel_speed_mps`, `speed_sweep_peak_trim_lateral_accel_abs_g`, `speed_sweep_peak_trim_lateral_accel_speed_mps`, `speed_sweep_peak_abs_yaw_moment_nm`, `speed_sweep_peak_abs_yaw_moment_speed_mps` |

Useful related metrics people may compute:

- yaw moment reserve at fixed lateral acceleration
- trim steering requirement over speed
- stable versus unstable trim regions
- yaw moment sensitivity to steering and sideslip over the full map, not only near zero
- asymmetry between left and right capability
- robustness of trim against tire, aero, or mass uncertainty

## Sensitivity And Design Exploration Metrics

OptSim does not create a new physical metric family by itself. It compares
vehicle metrics across design variables.

Current BobSim sensitivity outputs include:

- StandardSim sensitivity results from selected SteadyStateEval metrics
- EnvelopeSim sensitivity results from reduced envelope metrics
- refined response-surface results
- tornado-style effect sizes
- Pearson correlation tables when enabled
- percent or absolute metric deltas from a baseline

Useful related metrics people may compute:

- local derivative of any metric with respect to a design variable
- normalized sensitivity by realistic manufacturing or setup range
- interaction terms between two or more design variables
- Pareto fronts across competing metrics
- confidence intervals on response-surface fits
- robustness metrics under uncertain tire, mass, aero, or driver assumptions

Sensitivity metrics are not automatically design recommendations. They show how
a chosen metric moves under a chosen set of assumptions.

## Driver And Telemetry Metrics

Driver and competition telemetry can characterize behavior that pure vehicle
models do not capture alone.

Useful metrics include:

- steering correction count
- steering reversal rate
- steering, throttle, and brake smoothness
- control input entropy
- time spent near saturation
- yaw-rate correction after entry
- brake-release timing
- throttle pickup timing
- segment repeatability
- response-space coverage against test sections
- driver-to-driver variance

These metrics become especially useful when paired with the FSAE connection
workflow: a test section supports a competition claim only where its response
fingerprint overlaps the competition fingerprint.

## Reliability, Energy, And Operational Metrics

Vehicle performance is not only handling response.

Useful metrics include:

- energy per distance
- power-limited time or distance
- brake energy and temperature margin
- tire temperature and pressure window
- tire degradation or grip fade
- damper temperature margin
- motor, inverter, and battery thermal margin
- setup repeatability
- failure or derate occurrence
- event-operation robustness

These metrics matter whenever the vehicle must deliver repeated performance,
not just peak performance.

## Model Quality And Uncertainty Metrics

A metric extracted from a model or reduced tool should carry information about
how much trust it deserves.

Useful metrics include:

- fit normalized root-mean-square error
- residual bias
- residual distribution by operating region
- confidence intervals from repeated tests
- sensor noise and calibration uncertainty
- coverage of the response space
- simulation-to-test error by signal
- simulation-to-test error by metric
- extrapolation distance from measured data
- failed-run count and convergence fraction

BobSim already exports some of these, such as fit NRMSE, sine-fit errors,
failed-run counts, and YMD convergence fraction. More can and should be added
when the workflow needs stronger uncertainty accounting.

## Choosing Metrics

Choose metrics by the claim being made:

| Claim | Useful metric families |
| :-- | :-- |
| The car has more lateral capability | GGV/YMD limits, measured steady-state lateral acceleration, tire utilization |
| The car is easier to place at corner entry | yaw and lateral acceleration rise times, phase lag, steering correction behavior |
| The setup is more predictable near the limit | limit gradients, yaw moment reserve, sideslip behavior, repeatability |
| The suspension supports the intended platform | motion ratios, roll stiffness, LLTD, camber/toe gains, jacking coefficients |
| The result should transfer to competition | response-space fingerprint coverage, telemetry overlap, uncertainty bounds |
| The model is trustworthy | controlled maneuver correlation, residuals, fit quality, coverage, failed-run rate |

The current BobSim implementation is one useful implementation of these ideas.
It is intentionally open to extension. A new metric is valid when it is tied to
the physical vehicle response, extracted consistently, and honest about its
coverage and uncertainty.
