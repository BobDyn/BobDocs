---
layout: doc
title: Choosing Metrics
---

# Choosing Metrics

A vehicle metric reduces a physical response to a number. This page explains
how to read a metric, how to pick metrics for a claim, and what to add beyond
the set BobSim exports. For the exported metrics, see
[Vehicle Performance Metrics](/reference/metrics).

No metric is a universal score. The BobSim set is one practical set. Other
metrics are equally valid when they answer a clear engineering question and
stay tied to the vehicle response they came from.

## Reading a metric

A metric means something only when it states:

| Requirement | Meaning |
| :-- | :-- |
| Signal source | Simulation, test data, competition telemetry, or reduced-order model |
| Maneuver | Steady-state sweep, transient steer, four-post sweep, envelope map, track section |
| Operating region | Speed, load, acceleration, steering, tire state, aero state, surface |
| Extraction method | Peak value, gradient, fit, trim condition, frequency response, time-domain event |
| Units and sign convention | The physical direction and scaling of the reported value |
| Coverage | Where the data supports the claim and where it does not |

The same number can mean different things for a different maneuver or
extraction method. A steering gradient from a ramp-steer path is not
automatically the same as a trim steering gradient from a YMD map.

Before you trust a metric, ask:

- What vehicle behavior does it characterize?
- What maneuver or data region supports it?
- What assumptions does the reduction hide?
- Does it reflect the physical system in the region you use it?
- How much uncertainty remains?

## Choosing metrics for a claim

Choose metrics by the claim you want to make:

| Claim | Useful metric families |
| :-- | :-- |
| The car has more lateral capability | GGV/YMD limits, measured steady-state lateral acceleration, tire utilization |
| The car is easier to place at corner entry | yaw and lateral acceleration rise times, phase lag, steering correction behavior |
| The setup is more predictable near the limit | limit gradients, yaw moment reserve, sideslip behavior, repeatability |
| The suspension supports the intended platform | motion ratios, roll stiffness, LLTD, camber/toe gains, jacking coefficients |
| The result should transfer to competition | response-space fingerprint coverage, telemetry overlap, uncertainty bounds |
| The model is trustworthy | controlled maneuver correlation, residuals, fit quality, coverage, failed-run rate |

Envelope metrics describe capability limits from reduced-order calculations.
Use them with high-fidelity response results, not in place of them. A
sensitivity result shows how a metric moves under a set of assumptions. It is
not a design recommendation by itself.

## Extending the metric set

A new metric is valid when it is tied to the physical vehicle response,
extracted consistently, and honest about its coverage and uncertainty. The
lists below are candidates. BobSim does not export most of them today.

### Steady-state handling

- roadwheel angle gradient versus measured lateral acceleration
- handwheel torque gradient and steering effort linearity
- curvature or radius tracking error
- yaw-rate gain versus lateral acceleration
- front/rear tire utilization at each lateral acceleration
- tire normal-load range and load-transfer split
- steering hysteresis or compliance steer if test data supports it
- local linearity loss or saturation onset by signal derivative
- confidence intervals on gradients from repeated sweeps

### Transient and frequency response

- peak yaw acceleration and time to peak yaw acceleration
- steering input rise time and actuator delay
- 10 to 90 percent rise time, in place of the 50 percent steer to 90 percent
  response time that TransientEval uses
- damping ratio and natural frequency from a fitted reduced model
- control effort required to hold a path after the initial input
- steering correction count, reversal rate, or correction energy
- response repeatability across repeated runs
- tire relaxation contribution to lag
- transient tire load variation
- driver-to-vehicle closed-loop response if driver data is included
- coherence or fit quality when using measured data
- uncertainty bounds from repeated sine sweeps

Frequency-domain metrics describe response across input frequency, not at one
time or trim point. Use them to compare steering response and to check whether
a setup change shifts response timing in the direction you want.

### Suspension, kinematics, and compliance

- bump steer and roll steer by wheel and axle
- camber recovery at expected ride and roll states
- compliance steer, compliance camber, and compliance toe under load
- ride rate, roll rate, and pitch rate
- damper motion ratio and damper velocity distribution
- tire normal-load variation through heave and roll
- wheel-center migration and track or wheelbase change
- spring, anti-roll-bar, damper, and jacking contributions to load transfer
- K&C metric uncertainty from hardpoint or compliance uncertainty

### GGV

- tire utilization at each GGV boundary point
- power-limited versus grip-limited regions
- braking bias sensitivity
- aero balance sensitivity with speed
- combined acceleration occupancy for a real track or test section
- uncertainty bounds from tire, mass, aero, or surface assumptions

### YMD

- yaw moment reserve at fixed lateral acceleration
- trim steering requirement over speed
- stable versus unstable trim regions
- yaw moment sensitivity to steering and sideslip over the full map, not only
  near zero
- asymmetry between left and right capability
- robustness of trim against tire, aero, or mass uncertainty

### Sensitivity and design exploration

- local derivative of any metric with respect to a design variable
- normalized sensitivity by realistic manufacturing or setup range
- interaction terms between two or more design variables
- Pareto fronts across competing metrics
- confidence intervals on response-surface fits
- robustness metrics under uncertain tire, mass, aero, or driver assumptions

### Driver and telemetry

Driver and competition telemetry show behavior that a vehicle model alone does
not capture.

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

Pair these with the [FSAE Bridge](/reference/fsae-bridge) workflow. A test
section supports a competition claim only where its response fingerprint
overlaps the competition fingerprint.

### Reliability, energy, and operations

Use these when the car must deliver repeated performance, not only peak
performance.

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

### Model quality and uncertainty

A metric from a model or reduced tool should state how much trust it deserves.

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

BobSim exports some of these. See
[Model quality metrics](/reference/metrics#model-quality-metrics).
