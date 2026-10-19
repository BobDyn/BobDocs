---
layout: doc
title: BobSim command line
---

# BobSim command line

The makefile is the command reference. `make help` lists current targets.
Most simulation targets run through Docker. `RUN=` uses the host environment
when the required Python and Modelica tools are installed.

## Analyses

| Task | Command |
| --- | --- |
| Four post, MBD | `make standard-eval-four-post` |
| Ramp steer, MBD | `make standard-eval-ramp-steer` |
| Legacy steady-state response, MBD | `make standard-eval-steady-state` |
| Transient response, MBD | `make standard-eval-transient` |
| Reduced response | `make reduced-eval REDUCED_DOF=6` |
| GGV | `make envelope-ggv` |
| Yaw moment diagram | `make envelope-ymd` |
| QSS lap | `make lap-eval-qss` |
| Transient lap | `make lap-eval-transient` |

The historical `standard-*` names remain CLI entry points. The app groups
ramp, step, and sine inputs under **Maneuver**.
[Models and fidelity](/bobsim/models) explains the engines behind the workflows.

## Configuration and outputs

Active app config copies live under `app/user_data/config/active/`. CLI workflows
can use these instead of checked-in seeds. `BOBSIM_SEED_CONFIGS=1` selects the
seed configs for reproducible baseline work.

[Results](/bobsim/results) lists output locations. Simulation logs and retained
run directories provide the raw solver output when a report fails to generate.

## Modelica records

These host commands compare and regenerate records from the active vehicle:

```bash
make sync-vehicle
make sync-vehicle-write
```

The second writes generated files. Python studies read YAML, while MBD studies
read the generated records. A stale record can produce a valid simulation of
the wrong vehicle.

## Parameter studies

| Task | Command |
| --- | --- |
| Sensitivities | `make opt-standard` |
| Refined response surfaces | `make opt-refined` |
| Target solving | `make opt-solve` |
| Named-vehicle comparison | `make opt-trade` |
| Legacy envelope sensitivities | `make opt-envelope` |

[Parameter studies](/bobsim/doe) explains the distinction.
[Development](/bobsim/development) covers checks and source ownership.
