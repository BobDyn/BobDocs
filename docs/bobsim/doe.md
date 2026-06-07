---
layout: doc
title: OptSim
---

# OptSim

OptSim is BobDyn/BobSim's sensitivity and response-surface lane. It creates
vehicle variants, runs selected analysis workflows, and aggregates metrics into
tables and reports.

Use OptSim when the question is not just "what does this one vehicle do?" but:

- which parameters dominate a metric
- how sensitive the vehicle is to a change
- which regions deserve higher-fidelity simulation
- where a trade-off begins
- which inputs should be used for a refined response surface

::: warning Current status
OptSim is useful release infrastructure, but it is intentionally narrower than
StandardSim. Treat StandardSim and EnvelopeSim as the primary public baseline
workflows, and use OptSim for sensitivity studies around those baselines.
:::

## Layout

| Path | Role |
| :-- | :-- |
| `_4_OptSim/StandardSens/` | StandardSim sensitivity and response-surface workflow |
| `_4_OptSim/StandardSens/configs/vehicle_architecture.yaml` | Human-edited architecture and sweep source |
| `_4_OptSim/StandardSens/configs/_doe_config.yaml` | Generated DOE config |
| `_4_OptSim/StandardSens/configs/compiler_config.yaml` | Compile/run settings |
| `_4_OptSim/StandardSens/configs/aggregator_config.yaml` | Metric extraction map |
| `_4_OptSim/StandardSens/pipeline/` | Sampling, generation, compile/run, aggregation, plotting helpers |
| `_4_OptSim/EnvelopeSens/` | Reduced EnvelopeSim sensitivity workflow |
| `_4_OptSim/EnvelopeSens/config.yml` | Envelope sensitivity config |
| `_4_OptSim/Build/` | Generated variants, intermediate outputs, and private build artifacts |
| `_4_OptSim/results/` | Public sensitivity and response-surface outputs |

## Commands

```bash
make opt-standard
make opt-envelope
make opt-refined
```

| Command | Purpose |
| :-- | :-- |
| `make opt-standard` | Run StandardSim pre-screen sensitivities |
| `make opt-envelope` | Run EnvelopeSim sensitivities |
| `make opt-refined` | Build refined StandardSim response surfaces from sensitivity results |

For interactive work:

```bash
make shell-opt
```

## Standard Sensitivities

`make opt-standard` runs `_4_OptSim/StandardSens/pre_screen_sensitivities.py`.

The workflow:

1. Samples and generates vehicle variants.
2. Builds and simulates StandardSim variants.
3. Aggregates StandardSim metrics.
4. Writes a public sensitivity table.
5. Plots StandardSim tornado diagrams.

Useful outputs:

```text
_4_OptSim/Build/StandardSens/standard_sensitivity_inputs.csv
_4_OptSim/Build/StandardSens/standard_sensitivity_results.parquet
_4_OptSim/results/standard_sensitivity_results.csv
_4_OptSim/results/standard_sensitivity_report.pdf
```

The public CSV joins sampled inputs with selected StandardSim metrics so the
relationship between design variables and vehicle response remains inspectable.

## Envelope Sensitivities

`make opt-envelope` runs `_4_OptSim/EnvelopeSens/sensitivities.py`.

The workflow:

1. Generates EnvelopeSim variants.
2. Writes input and scope tables.
3. Runs GGV/YMD-style reduced sensitivity metrics.
4. Computes relative sensitivities.
5. Writes a public report and results CSV.

Useful outputs:

```text
_4_OptSim/Build/EnvelopeSens/envelope_sensitivity_inputs.csv
_4_OptSim/Build/EnvelopeSens/envelope_sensitivity_scope.csv
_4_OptSim/Build/EnvelopeSens/envelope_relative_sensitivities.csv
_4_OptSim/results/envelope_sensitivity_results.csv
_4_OptSim/results/envelope_sensitivity_report.pdf
```

## Refined Response Surfaces

`make opt-refined` runs
`_4_OptSim/StandardSens/refined_response_surfaces.py`.

The workflow uses StandardSim sensitivity results to select influential inputs,
then builds a refined population for response-surface fitting.

Useful outputs:

```text
_4_OptSim/results/refined_response_surface_results.csv
```

The script can also write selection tables, coefficient tables, and response
surface PDFs depending on the configured arguments and available prior results.

## Architecture Config

The human-edited StandardSens source is:

```text
_4_OptSim/StandardSens/configs/vehicle_architecture.yaml
```

It selects the vehicle template, sampling strategy, sample count or interval
count, random seed, and sweep variables.

Each variable maps a high-level design path to a parameter inside the generated
Modelica record:

| Field | Meaning |
| :-- | :-- |
| `path` | Stable design-variable name used in sampled rows and aggregate output |
| `block` | Modelica parameter record block in the baseline `.mo` file |
| `param` | Parameter inside that block |
| `range` | Sample range for that variable |
| `label` | Optional human-readable label used by sensitivity plots |
| `values` | Optional explicit interval values |
| `targets` | Optional linked Modelica parameters updated together |
| `scale` | Optional scale factor between design variable and Modelica value |

Variant `0` is the baseline. Interval-splice studies perturb one input at a
time around that baseline, which is what the tornado reports expect.

## Generated Variants

StandardSens generated variants live under:

```text
_4_OptSim/Build/StandardSens/population/
```

Each variant can contain:

```text
variant.mo
build/<standard>/
results/<standard>/
run_error_<standard>.log
```

These are intentionally inspectable Modelica record artifacts. If a sensitivity
result looks suspicious, start by opening the relevant `variant.mo`, then check
the run log and metrics CSV.

## Cleanup

If sample counts, variable dimensions, or response-surface selections change,
clean OptSim artifacts before rerunning:

```bash
make clean-opt
```

For a full release cleanup:

```bash
make clean-all
```

## Failure Modes

| Symptom | Likely cause |
| :-- | :-- |
| BobLib not found | Submodule missing; run `make init` |
| Population mismatch | Sample count changed without cleaning OptSim build artifacts |
| Selected architecture mismatch | Standard model imports a different generated record |
| Compile failure | Variant generated an invalid or difficult Modelica record |
| Missing metrics CSV | Simulation failed or report wrapper did not finish |
| Partial metrics CSV | Run crashed during write; rerun after inspecting the failure log |
