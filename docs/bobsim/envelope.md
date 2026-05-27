---
layout: doc
title: EnvelopeSim
---

# EnvelopeSim

EnvelopeSim provides reduced first-principles vehicle envelope tools. These are
not replacements for the full Modelica maneuver simulations; they are fast,
transparent analyses that use the active vehicle definition to estimate limit
behavior and produce review artifacts.

Envelope tools live under:

```text
_2_EnvelopeSim/
```

## EnvelopeSim Layout

| Path | Role |
| :-- | :-- |
| `_2_EnvelopeSim/vehicle_loader.py` | Shared active-vehicle input loader |
| `_2_EnvelopeSim/GGV/ggv_config.yml` | GGV envelope config |
| `_2_EnvelopeSim/GGV/ggv_generation.py` | GGV envelope generation script |
| `_2_EnvelopeSim/YMD/ymd_config.yml` | YMD envelope config |
| `_2_EnvelopeSim/YMD/ymd_generation.py` | YMD envelope generation script |
| `_2_EnvelopeSim/VehicleReview/vehicle_review_config.yml` | Vehicle review config |
| `_2_EnvelopeSim/VehicleReview/vehicle_review_sim.py` | Vehicle review workflow |
| `_2_EnvelopeSim/results/` | Envelope outputs, plots, reports, and metrics |

## Shared Vehicle Inputs

`vehicle_loader.py` builds the reduced scalar vehicle model from the same active
vehicle definition that drives the generated BobDyn/BobLib model.

It loads:

- repo-root `vehicle.yml`, falling back to BobDyn/BobLib's synced generation copy
- wheelbase and track from suspension wheel-center geometry
- combined mass and center of gravity from sprung, driver, and unsprung mass data
- tire template coefficients from the active `.tir` file
- nominal aero scalars from the active aero map
- latest FourPostEval lateral-load-transfer metric when available

If FourPostEval metrics are missing, EnvelopeSim falls back to static front mass
fraction for lateral load transfer distribution.

## GGV Envelope

Run:

```bash
make ggv-envelope
```

Config:

```text
_2_EnvelopeSim/GGV/ggv_config.yml
```

Current config highlights:

| Key | Current role |
| :-- | :-- |
| `speeds` | `5`, `10`, `15`, `20`, `25` m/s |
| `ay_max_g` | Lateral acceleration search bound |
| `ay_points` | Lateral grid resolution |
| `ax_search_min_g`, `ax_search_max_g` | Longitudinal search bounds |
| `max_drive_power_w` | Drive power limit |
| `max_drive_force_n` | Drive force limit |
| `max_brake_force_n` | Brake force limit |
| `include_left_right` | Include both lateral directions |

Outputs:

```text
_2_EnvelopeSim/results/GGV/ggv_first_principles.csv
_2_EnvelopeSim/results/GGV/ggv_first_principles.png
_2_EnvelopeSim/results/GGV/ggv_first_principles_metrics.png
_2_EnvelopeSim/results/GGV/ggv_first_principles_surface.png
```

Use GGV when you want a quick map of combined longitudinal/lateral capability
across speed.

## YMD Envelope

Run:

```bash
make ymd-envelope
```

Config:

```text
_2_EnvelopeSim/YMD/ymd_config.yml
```

Current config highlights:

| Key | Current role |
| :-- | :-- |
| `speed` | Primary analysis speed, currently `15.0` m/s |
| `beta_min_deg`, `beta_max_deg` | Sideslip sweep bounds |
| `hwa_min_deg`, `hwa_max_deg` | Handwheel-angle sweep bounds |
| `beta_points`, `hwa_points` | Grid resolution |
| `yaw_rate` | Yaw-rate condition |
| `speed_sweep_*` | Speed sweep range for 3D/hull outputs |

Outputs:

```text
_2_EnvelopeSim/results/YMD/ymd_first_principles.csv
_2_EnvelopeSim/results/YMD/ymd_first_principles_contours.png
_2_EnvelopeSim/results/YMD/ymd_first_principles_beta_slices.png
_2_EnvelopeSim/results/YMD/ymd_first_principles_speed_sweep_surface.png
_2_EnvelopeSim/results/YMD/ymd_first_principles_speed_sweep_hull_surfaces.png
_2_EnvelopeSim/results/YMD/ymd_first_principles_wireframe.png
```

Use YMD when you want to inspect lateral force and moment behavior across
sideslip and steering.

## Vehicle Review

Run:

```bash
make vehicle-review
```

Config:

```text
_2_EnvelopeSim/VehicleReview/vehicle_review_config.yml
```

The vehicle review workflow regenerates GGV and YMD artifacts by default, then
assembles a report that cross-checks the active vehicle definition against
StandardSim and EnvelopeSim outputs.

Outputs:

```text
_2_EnvelopeSim/results/VehicleReview/vehicle_review_report.pdf
_2_EnvelopeSim/results/VehicleReview/vehicle_review_report_metrics.csv
```

Use VehicleReview when you want a compact state-of-the-vehicle artifact for the
active `vehicle.yml`.

## When To Use EnvelopeSim

EnvelopeSim is useful for:

- fast plausibility checks before expensive Modelica sweeps
- comparing tire/aero/mass assumptions
- seeing limit trends across speed
- generating review artifacts tied to the active vehicle definition
- cross-checking whether StandardSim behavior aligns with reduced-order expectations

Use StandardSim when the question depends on time-domain multibody behavior,
controller behavior, suspension transient response, or generated model details.

Use BobDyn/BobLib directly when the envelope result points to a model-level issue that
needs inspection or debugging.
