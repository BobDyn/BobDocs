---
layout: doc
title: EnvelopeSim
---

# EnvelopeSim

EnvelopeSim computes GGV and YMD envelope maps from a reduced vehicle model.
It does not run the full Modelica maneuver simulations.

EnvelopeSim is optional and separate from StandardSim. It is meant to be easy
to read and good enough for quick checks. It is not the reference for envelope
theory, and it does not replace the Modelica simulations.

## Commands

```bash
make envelope-ggv
make envelope-ymd
make envelope-all
```

Add `make envelope-all` to a release baseline only when you want the envelope
reports in it.

## When to use it

| Use EnvelopeSim to | Use something else when |
| :-- | :-- |
| Check plausibility before running expensive Modelica sweeps | The question depends on time-domain multibody behavior: use [StandardSim](/bobsim/standard-sim) |
| Compare tire, aero, and mass assumptions | It depends on controller or suspension transient response: use StandardSim |
| See limit trends across speed | The envelope result points to a model-level issue: inspect it in [BobDyn/BobLib](/boblib/) |
| Cross-check StandardSim results against reduced-order expectations | |

## Layout

| Path | Role |
| :-- | :-- |
| `_2_EnvelopeSim/vehicle_yaml.py` | Projects `vehicle.yml` into the reduced envelope model |
| `_2_EnvelopeSim/vehicle_loader.py` | Loads that projection for the envelope workflows |
| `_2_EnvelopeSim/GGV/ggv_config.yml` | GGV envelope config |
| `_2_EnvelopeSim/GGV/ggv_generation.py` | GGV envelope workflow |
| `_2_EnvelopeSim/YMD/ymd_config.yml` | YMD envelope config |
| `_2_EnvelopeSim/YMD/ymd_generation.py` | YMD envelope workflow |
| `_2_EnvelopeSim/VehicleReview/` | Vehicle review report that cross-checks the vehicle against StandardSim and EnvelopeSim |
| `_2_EnvelopeSim/Build/` | Intermediate CSV outputs |
| `_2_EnvelopeSim/results/` | Reports and metrics CSVs |

## Shared vehicle inputs

EnvelopeSim reads the repository's `vehicle.yml` and reduces it to scalar
inputs. It carries through mass, CG, wheelbase and track, static load split,
lateral load transfer split, nominal aero, and tire peak coefficients. It does
not model kinematics, compliance, damping, or transient effects.

| Input | Source |
| :-- | :-- |
| Wheelbase and track | Suspension wheel-center positions |
| Mass and CG | Sprung, driver, and unsprung mass data |
| Tire coefficients | The vehicle's tire file |
| Aero scalars | The vehicle's aero map |
| Lateral load transfer distribution | Roll stiffnesses from FourPostEval metrics, scaled for the current anti-roll bar rates |

EnvelopeSim reads the FourPostEval metrics from
`_3_StandardSim/results/four_post_eval_report_metrics.csv`. If that file is
missing, it uses built-in nominal roll stiffnesses instead.

::: warning
The shipped FourPostEval config writes its metrics to
`_3_StandardSim/generated_results/`, not `_3_StandardSim/results/`. Unless
you copy the file, EnvelopeSim may use the nominal roll stiffnesses.
:::

## GGV envelope

Use GGV for a quick map of combined longitudinal and lateral capability across
speed.

```bash
make envelope-ggv
```

Config: `_2_EnvelopeSim/GGV/ggv_config.yml`

| Output | Path |
| :-- | :-- |
| Report | `_2_EnvelopeSim/results/ggv_report.pdf` |
| Metrics | `_2_EnvelopeSim/results/ggv_report_metrics.csv` |
| Raw envelope | `_2_EnvelopeSim/Build/GGV/ggv_first_principles.csv` |
| Track performance profile | `_2_EnvelopeSim/Build/GGV/ggv_track_performance_profile.csv` |
| Track velocity profile | `_2_EnvelopeSim/Build/GGV/ggv_track_velocity_profile.csv` |

## YMD envelope

Use YMD to inspect lateral force and yaw moment across sideslip and steering.

```bash
make envelope-ymd
```

Config: `_2_EnvelopeSim/YMD/ymd_config.yml`

| Output | Path |
| :-- | :-- |
| Report | `_2_EnvelopeSim/results/ymd_report.pdf` |
| Metrics | `_2_EnvelopeSim/results/ymd_report_metrics.csv` |
| Raw envelope | `_2_EnvelopeSim/Build/YMD/ymd_first_principles.csv` |
| Trim curve | `_2_EnvelopeSim/Build/YMD/ymd_trim_curve.csv` |
