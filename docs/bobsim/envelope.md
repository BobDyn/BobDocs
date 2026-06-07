---
layout: doc
title: EnvelopeSim
---

# EnvelopeSim

EnvelopeSim provides an optional, separate implementation of common vehicle
envelope calculations. GGV and YMD maps show up in vehicle dynamics workflows
everywhere; this is BobSim's transparent implementation of those ideas, tied to
the active vehicle definition.

EnvelopeSim is not the gold standard, the key theory reference, or a replacement
for the full Modelica maneuver simulations. It is intended to be sane, readable,
and useful when you want quick envelope calculations without running the full
high-fidelity StandardSim path.

Envelope tools live under:

```text
_2_EnvelopeSim/
```

## Layout

| Path | Role |
| :-- | :-- |
| `_2_EnvelopeSim/vehicle_yaml.py` | Shared active-vehicle input loader |
| `_2_EnvelopeSim/GGV/ggv_config.yml` | GGV envelope config |
| `_2_EnvelopeSim/GGV/ggv_generation.py` | GGV envelope workflow |
| `_2_EnvelopeSim/YMD/ymd_config.yml` | YMD envelope config |
| `_2_EnvelopeSim/YMD/ymd_generation.py` | YMD envelope workflow |
| `_2_EnvelopeSim/Build/` | Intermediate CSV outputs |
| `_2_EnvelopeSim/results/` | Public reports and metrics CSVs |

## Commands

```bash
make envelope-ggv
make envelope-ymd
make envelope-all
```

Use `make envelope-all` when you intentionally want the optional envelope
artifacts alongside a release baseline.

## Shared Vehicle Inputs

EnvelopeSim builds a reduced scalar vehicle model from the same active
`vehicle.yml` that drives generated BobLib models.

It loads:

- wheelbase and track from suspension wheel-center geometry
- sprung, driver, and unsprung mass data
- center-of-gravity data
- tire coefficients from the active tire template
- aero scalars from the active aero map
- useful four-post metrics when available

If four-post metrics are missing, EnvelopeSim falls back to static front mass
fraction for lateral load transfer distribution.

## GGV Envelope

Run:

```bash
make envelope-ggv
```

Config:

```text
_2_EnvelopeSim/GGV/ggv_config.yml
```

Useful outputs:

```text
_2_EnvelopeSim/Build/GGV/ggv_first_principles.csv
_2_EnvelopeSim/Build/GGV/ggv_track_performance_profile.csv
_2_EnvelopeSim/Build/GGV/ggv_track_velocity_profile.csv
_2_EnvelopeSim/results/ggv_report.pdf
_2_EnvelopeSim/results/ggv_report_metrics.csv
```

Use GGV when you want a quick map of combined longitudinal and lateral
capability across speed.

## YMD Envelope

Run:

```bash
make envelope-ymd
```

Config:

```text
_2_EnvelopeSim/YMD/ymd_config.yml
```

Useful outputs:

```text
_2_EnvelopeSim/Build/YMD/ymd_first_principles.csv
_2_EnvelopeSim/Build/YMD/ymd_trim_curve.csv
_2_EnvelopeSim/results/ymd_report.pdf
_2_EnvelopeSim/results/ymd_report_metrics.csv
```

Use YMD when you want to inspect lateral force and yaw moment behavior across
sideslip and steering.

## When To Use EnvelopeSim

EnvelopeSim is useful for:

- fast plausibility checks before expensive Modelica sweeps
- comparing tire, aero, and mass assumptions
- seeing limit trends across speed
- producing compact optional artifacts tied to the active vehicle definition
- cross-checking whether StandardSim behavior aligns with reduced-order expectations

Use StandardSim when the question depends on time-domain multibody behavior,
controller behavior, suspension transient response, or generated model details.

Use BobDyn/BobLib directly when the envelope result points to a model-level
issue that needs inspection or debugging.
