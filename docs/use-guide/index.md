---
layout: doc
title: Use Guide
prev:
  text: 'Startup Guide'
  link: '/startup-guide/'
---

# Use Guide

This guide explains how to use BobDyn after the environment is set up.

::: info Starting point
In this guide, the BobDyn/BobSim root means the repository directory created by
the BobSim clone step. Start there before running commands or editing workflow
files.
:::

::: tip Choose the right layer
Use [BobDyn/BobSim](/bobsim/) for simulation workflows: cases, sweeps, metrics,
plots, reports, envelopes, sensitivities, and result files.

Use [BobDyn/BobLib](/boblib/) for the low-level Modelica model layer:
suspension assemblies, generated records, tire models, direct OpenModelica
debugging, and OMEdit diagram inspection.
:::

## Normal Workflow

The normal BobSim loop is:

1. Pick a workflow.
2. Edit the workflow YAML or the active `vehicle.yml`.
3. Build the required Modelica executable if the vehicle or model changed.
4. Run the evaluation.
5. Review the report and metrics CSV.

BobDyn keeps these layers separate:

| Layer | Role |
| :-- | :-- |
| BobDyn/BobLib | Modelica vehicle library and generated active vehicle records |
| BobDyn/BobSim | High-fidelity analysis workflows, envelopes, sensitivities, reports |
| BobDocs | Public documentation, examples, and reference material |

That split keeps the physics inspectable while still making the analysis
workflow scriptable.

## StandardSim

StandardSim is the main high-fidelity simulation lane. It lives under:

```text
_3_StandardSim/
```

The fastest release-baseline run is:

```bash
make standard-eval-all
```

That target builds missing executables, runs the active SteadyStateEval,
TransientEval, and FourPostEval configs, then writes reports and metrics under
`_3_StandardSim/results/`.

The active standard studies are:

| Study | Use it for | Target |
| :-- | :-- | :-- |
| SteadyStateEval | Ramp-steer velocity isolines and quasi-steady handling metrics | `make standard-eval-steady-state` |
| TransientEval | Step steer and continuous sine response | `make standard-eval-transient` |
| FourPostEval | Heave and roll K&C-style suspension/chassis metrics | `make standard-eval-four-post` |

For focused maneuver work, build the maneuver model and run either maneuver
evaluation:

```bash
make standard-build
make standard-eval-steady-state
make standard-eval-transient
```

For focused four-post work, build and run the four-post evaluation:

```bash
make standard-build-four-post
make standard-eval-four-post
```

The run targets depend on the matching build targets, so focused runs also
rebuild missing executables automatically.

## SteadyStateEval

Use SteadyStateEval when you want a quasi-steady characterization of lateral
vehicle behavior across ramp-steer velocity isolines.

It:

- holds vehicle speed with the BobLib speed controller
- runs `BobLib.Standards.VehicleSim` in open-loop ramp-steer mode
- terminates when the ramp-steer quasi-steady plateau is reached
- extracts steering, lateral acceleration, yaw, roll, sideslip, tire loads, and handwheel torque
- fits response curves against measured lateral acceleration
- writes a PDF report and metrics CSV

Relevant files:

```text
_3_StandardSim/SteadyStateEval/steady_state_eval_config.yml
_3_StandardSim/SteadyStateEval/steady_state_eval_sim.py
```

## TransientEval

Use TransientEval when you want time-domain steering response.

It:

- runs step-steer cases
- runs continuous sine cases
- uses `BobLib.Standards.VehicleSim` with transient tire slip enabled
- computes step response metrics
- computes frequency-response gain, phase, and equivalent lag from sine cases
- writes a PDF report and metrics CSV

Relevant files:

```text
_3_StandardSim/TransientEval/transient_eval_config.yml
_3_StandardSim/TransientEval/transient_eval_sim.py
```

## FourPostEval

Use FourPostEval when you want suspension and chassis K&C-style metrics.

It:

- builds and runs `BobLib.Standards.FourPostSim`
- sweeps heave and roll positions
- extracts front and rear K&C output records
- computes camber, toe, caster, KPI, trail, scrub, motion ratio, anti/jacking, roll stiffness, and LLTD metrics
- writes a PDF report and metrics CSV

Relevant files:

```text
_3_StandardSim/FourPostEval/four_post_eval_config.yml
_3_StandardSim/FourPostEval/four_post_eval_sim.py
```

## EnvelopeSim

EnvelopeSim is an optional reduced-order lane for common envelope maps. It is a
separate implementation of calculations such as GGV and YMD maps, which are
used widely in vehicle dynamics work.

Run:

```bash
make envelope-ggv
make envelope-ymd
```

or:

```bash
make envelope-all
```

Use these outputs for quick plausibility checks, tire/aero/mass assumption
reviews, and limit-trend inspection. They are not intended to be BobDyn's gold
standard or theory reference for envelope analysis. Use StandardSim when the
question depends on multibody transient behavior.

## OptSim

OptSim is the sensitivity and response-surface lane. It lives under:

```text
_4_OptSim/
```

Run:

```bash
make opt-standard
make opt-envelope
make opt-refined
```

Use `opt-standard` for StandardSim pre-screen sensitivities, `opt-envelope` for
EnvelopeSim sensitivities, and `opt-refined` for refined StandardSim response
surfaces.

## Results

Standard reports and metrics live under:

```text
_3_StandardSim/results/
```

Common public artifacts:

```text
_3_StandardSim/results/steady_state_eval_report.pdf
_3_StandardSim/results/steady_state_eval_report_metrics.csv
_3_StandardSim/results/transient_eval_report.pdf
_3_StandardSim/results/transient_eval_report_metrics.csv
_3_StandardSim/results/four_post_eval_report.pdf
_3_StandardSim/results/four_post_eval_report_metrics.csv
```

Use the PDF first for an engineering readout. Use the metrics CSV when comparing
runs, feeding a notebook, or tracking a release baseline.

## Debugging Runs

If a simulation fails:

1. Confirm the relevant build target completed.
2. Set `execution.cleanup: false` in the workflow config.
3. Rerun the workflow.
4. Inspect the retained run directory under the build tree.
5. Check `overrides.txt`, `run.log`, and the result CSV.

The shared runner deletes per-case directories by default after signal
extraction, so disable cleanup before investigating raw artifacts.

## Related Pages

- [BobDyn/BobSim overview](/bobsim/) for repository structure and target language
- [StandardSim](/bobsim/standard-sim) for the standard high-fidelity evaluations
- [Configuration](/bobsim/configuration) for YAML sections and build settings
- [Results](/bobsim/results) for artifact locations and preservation practices
- [BobDyn/BobLib overview](/boblib/) for Modelica model structure and regression checks
