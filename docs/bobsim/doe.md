---
layout: doc
title: OptSim / Design of Experiments
---

# OptSim / Design of Experiments

BobDyn/BobSim's design-exploration pipeline lives under `_4_OptSim`. It creates
architecture-driven Modelica record variants, compiles them, runs standard
analysis wrappers, and aggregates metrics into a table for comparison.

Use OptSim when the question is not "what does this one vehicle do?" but:

- which parameters dominate a metric
- which design variables interact
- how sensitive the vehicle is to a change
- where a trade-off begins
- which regions deserve higher-fidelity simulation

::: warning Current status
OptSim is real infrastructure and is wired into the current BobDyn/BobSim repository,
but it should still be treated as an evolving workflow. Keep generated outputs
and public API expectations loose unless a downstream consumer explicitly pins
them.
:::

## OptSim Layout

| Path | Role |
| :-- | :-- |
| `_4_OptSim/run_doe.py` | Backward-compatible StandardSim sensitivity entry point |
| `_4_OptSim/run_standard_sensitivities.py` | End-to-end StandardSim sensitivity DOE runner |
| `_4_OptSim/run_envelope_sensitivities.py` | End-to-end EnvelopeSim sensitivity runner |
| `_4_OptSim/configs/vehicle_architecture.yaml` | Human-edited architecture and sweep source |
| `_4_OptSim/configs/_doe_config.yaml` | Generated DOE config |
| `_4_OptSim/configs/compiler_config.yaml` | Compile/run settings and standards |
| `_4_OptSim/configs/aggregator_config.yaml` | Metric extraction map |
| `_4_OptSim/configs/build_template.mos` | Per-variant OpenModelica build template |
| `_4_OptSim/pipeline/orchestration.py` | Shared sensitivity-runner orchestration helpers |
| `_4_OptSim/pipeline/generate_configs.py` | Materializes `_doe_config.yaml` |
| `_4_OptSim/pipeline/sampler.py` | LHS and one-factor interval-splice sampling |
| `_4_OptSim/pipeline/generator.py` | Writes per-variant `variant.mo` files |
| `_4_OptSim/pipeline/compiler.py` | Compiles variants |
| `_4_OptSim/pipeline/batch.py` | Runs variant report wrappers |
| `_4_OptSim/pipeline/build_pipeline.py` | Pipelined compile/run worker |
| `_4_OptSim/pipeline/aggregator.py` | Aggregates metrics |
| `_4_OptSim/pipeline/envelope_sensitivity.py` | Runs reduced EnvelopeSim metrics across variants |
| `_4_OptSim/pipeline/plot_results.py` | DOE parallel-coordinate and metric-dashboard visualization |
| `_4_OptSim/pipeline/response_surfaces.py` | Correlation-ranked response-surface report generation |
| `_4_OptSim/pipeline/plot_envelope_sensitivities.py` | EnvelopeSim sensitivity visualization report |
| `_4_OptSim/pipeline/plot_sensitivity_tornado.py` | StandardSim and EnvelopeSim tornado-diagram generator |
| `_4_OptSim/population/` | Generated variant directories |
| `_4_OptSim/results/` | Aggregated DOE tables and PDFs |

## Run Command

From the BobDyn/BobSim root:

```bash
make sim-doe
```

In the sensitivity-enabled workflow, `make sim-doe` is a backward-compatible
entry point for the StandardSim sensitivity DOE. The explicit targets are:

```bash
make sim-standard-sensitivities
make sim-envelope-sensitivities
```

These run inside the Docker `doe` service, whose working directory is:

```text
/workspace/_4_OptSim
```

For interactive DOE work:

```bash
make shell-doe
python run_standard_sensitivities.py
python run_envelope_sensitivities.py
```

## Pipeline Stages

`run_standard_sensitivities.py` first refreshes `_doe_config.yaml` from
`vehicle_architecture.yaml`, then runs four numbered stages:

1. Sample and generate vehicle variants.
2. Build and simulate StandardSim variants.
3. Aggregate StandardSim metrics.
4. Complete and print the aggregate table.

The implementation combines compile and simulation into a pipelined per-variant
worker so each variant is built and run as one unit of work.

`run_envelope_sensitivities.py` uses the same generated variants, writes an
input table, then runs reduced EnvelopeSim sensitivity metrics for GGV and YMD.

## Architecture Config

The human-edited source of truth is:

```text
_4_OptSim/configs/vehicle_architecture.yaml
```

It selects the vehicle template, sampling strategy, sample count or interval
count, random seed, and sweep variables.

Current structure:

```yaml
schema: bobsim.doe.vehicle_architecture.v1
vehicle_template: ../../_0_Utils/vehicle_templates/DWBCStabar_DWBCStabarRecord.yml

sampling:
  method: interval_splice
  intervals: 4

samples: 3
seed: 42

sweep:
  variables:
    - path: front.stabar.bar_rate
      block: pFrStabar
      param: barRate
      range: [100, 200]
```

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
| `targets` | Optional list of linked Modelica parameters updated together |
| `scale` | Optional scale factor between design variable and Modelica value |

Important unit convention:

- `staticAlpha` and `staticGamma` ranges are degree-valued in `_4_OptSim`.
- Those values are passed directly into the wheel rotation setup.

## Generated DOE Config

This file is generated:

```text
_4_OptSim/configs/_doe_config.yaml
```

Do not edit it by hand. It is materialized from
`vehicle_architecture.yaml` and the selected vehicle template.

It contains:

- selected architecture metadata
- baseline Modelica record path
- sweep variables
- sample count
- random seed

The generator also verifies that the selected standard model imports the
expected generated vehicle record. If the architecture record and standard model
do not match, the pipeline stops early.

## Sampling

`pipeline/sampler.py` reads `_doe_config.yaml`, parses the baseline Modelica
record, and generates variants with the configured sampling method.

Variant `0` is always the baseline record.

For exploratory DOE, `sampling.method: lhs` uses Latin hypercube sampling. For
one-factor sensitivity and tornado diagrams, `sampling.method: interval_splice`
creates baseline-plus-one-factor-at-a-time perturbations around the baseline.

For example, LHS with `samples: 3` produces:

```text
variant_0000  baseline
variant_0001  sampled point
variant_0002  sampled point
variant_0003  sampled point
```

Interval splice produces:

```text
variant_0000  baseline
variant_0001  first input at first non-baseline splice value
variant_0002  first input at next non-baseline splice value
variant_0003  second input at first non-baseline splice value
...
```

If the number of existing `variant_????` directories does not match the current
sample count, the pipeline raises a population mismatch. Clean DOE outputs and
rerun:

```bash
make clean-doe
make sim-doe
```

## Variant Generation

`pipeline/generator.py` writes:

```text
_4_OptSim/population/variant_0000/variant.mo
_4_OptSim/population/variant_0001/variant.mo
...
```

For each sampled variable, it finds the configured Modelica block and parameter
inside the baseline record text, then substitutes the sampled scalar value.

This keeps every variant inspectable as a standalone Modelica record artifact.

## Compile And Run

Compile/run behavior is controlled by:

```text
_4_OptSim/configs/compiler_config.yaml
```

Important sections:

| Key | Role |
| :-- | :-- |
| `boblib_path` | BobDyn/BobLib package path used by OpenModelica |
| `max_workers` | Number of variants compiled in parallel |
| `standards` | Standards to compile and run |
| `batch.max_workers` | Simulation worker count inside the batch stage |
| `batch.timeout` | Per-variant simulation timeout |

The active standard is:

```yaml
standards:
  SteadyStateEval:
    model: BobLib.Standards.VehicleSim
    start_time: 0.5
    stop_time: 10
    intervals: 0
    tolerance: 1e-6
    solver: dassl
```

Per-variant outputs follow this shape:

| Path | Role |
| :-- | :-- |
| `_4_OptSim/population/variant_0001/variant.mo` | Generated Modelica record for that DOE point |
| `_4_OptSim/population/variant_0001/build/SteadyStateEval/` | OpenModelica build artifacts for the standard |
| `_4_OptSim/population/variant_0001/results/SteadyStateEval/` | Per-variant standard report outputs |
| `_4_OptSim/population/variant_0001/run_error_SteadyStateEval.log` | Failure log when the standard run fails |

The build stage uses pipeline hashes to detect stale artifacts when important
inputs change.

## Standard Report Wrapper

OptSim runs the standard-study report wrapper for each variant rather than just
running the executable and stopping at raw CSV. That means each variant can
produce standard metrics in the same vocabulary as the normal StandardSim
workflow.

The current active wrapper is SteadyStateEval-oriented, so the DOE aggregator
expects SteadyStateEval metrics.

## Aggregation

Metric extraction is configured here:

```text
_4_OptSim/configs/aggregator_config.yaml
```

The config maps output columns to exact metric names in the standard metrics
CSV.

Example:

```yaml
standards:
  SteadyStateEval:
    steady_state_metrics:
      ay_min: "ay_min"
      ay_max: "ay_max"
      understeer_gradient_deg_per_g: "understeer_gradient_deg_per_g"
```

The aggregator reconstructs sampled inputs from the same seed/config, reads
each variant's metrics CSV, and writes a single table.

Preferred output:

```text
_4_OptSim/results/doe_results.parquet
```

Fallback when no parquet engine is installed:

```text
_4_OptSim/results/doe_results.csv
```

Post-aggregation visualization scripts can also write:

```text
_4_OptSim/results/doe_results_viz.pdf
_4_OptSim/results/doe_response_surfaces.pdf
_4_OptSim/results/standard_sensitivity_tornado.pdf
_4_OptSim/results/envelope_sensitivity_viz.pdf
_4_OptSim/results/envelope_sensitivity_tornado.pdf
```

## Visualization Outputs

OptSim has post-aggregation visualization scripts. Build them after the relevant
aggregate or sensitivity result table exists.

From the BobDyn/BobSim root:

```bash
make sim-standard-sensitivities
make sim-envelope-sensitivities
make shell-doe
```

Then from the `_4_OptSim` shell:

```bash
python pipeline/plot_results.py
python pipeline/response_surfaces.py
python pipeline/plot_envelope_sensitivities.py
python pipeline/plot_sensitivity_tornado.py --source standard
python pipeline/plot_sensitivity_tornado.py --source envelope
```

`pipeline/plot_results.py` generates:

- a parallel-coordinate view of swept input variables
- a compact dashboard of selected report metrics by variant

Run it from `_4_OptSim` with:

```bash
python pipeline/plot_results.py
```

or with explicit paths:

```bash
python pipeline/plot_results.py \
  --input results/doe_results.csv \
  --output results/doe_results_viz.pdf
```

`pipeline/response_surfaces.py` generates sliced response-surface pages. For
each selected metric, it finds the two most correlated swept inputs, fits a
quadratic surface in those two inputs, overlays the DOE points, and prints a
small correlation ranking on the plot.

Run it from `_4_OptSim` with:

```bash
python pipeline/response_surfaces.py
```

or with explicit paths:

```bash
python pipeline/response_surfaces.py \
  --input results/doe_results.csv \
  --output results/doe_response_surfaces.pdf
```

### Tornado Diagrams

Tornado diagrams are generated by:

```bash
python pipeline/plot_sensitivity_tornado.py --source standard
python pipeline/plot_sensitivity_tornado.py --source envelope
```

The standard source reads the one-factor StandardSim sensitivity population,
joins input perturbations with per-variant StandardSim metrics, and writes:

```text
_4_OptSim/results/standard_sensitivity_tornado.pdf
```

The envelope source reads:

```text
_4_OptSim/results/envelope_sensitivity_inputs.csv
_4_OptSim/results/envelope_sensitivities/envelope_sensitivity_metrics.csv
```

and writes:

```text
_4_OptSim/results/envelope_sensitivity_tornado.pdf
```

The tornado generator assumes the interval-splice pattern: `variant_0000` is
the baseline, and later variants perturb one input at a time while all other
inputs stay at baseline. It computes metric deltas from the baseline, sorts
inputs by absolute effect size, and renders horizontal tornado bars. By default,
StandardSim tornado plots focus on steering, sideslip, understeer, and roll
gradient metrics; the script can also accept explicit metric names.

## Adding A DOE Variable

To add a new sweep variable:

1. Find the target parameter block and parameter name in the generated baseline
   vehicle record.
2. Add a variable entry to `vehicle_architecture.yaml`.
3. Use the correct physical units for the Modelica record parameter.
4. Run `make clean-doe` if variable dimensions changed.
5. Run `make sim-doe`.

Example:

```yaml
sweep:
  variables:
    - path: rear.stabar.bar_rate
      block: pRrStabar
      param: barRate
      range: [100, 200]
```

Keep `path` names stable if downstream notebooks or reports depend on them.

## Failure Modes

Common DOE failures:

| Symptom | Likely cause |
| :-- | :-- |
| BobDyn/BobLib not found | Submodule missing; run `make init` |
| Population mismatch | Sample count changed without cleaning `_4_OptSim/population/` |
| Selected architecture mismatch | Standard model imports a different generated record |
| Compile failure | Variant generated an invalid or difficult Modelica record |
| Missing metrics CSV | Simulation failed or report wrapper did not finish |
| Partial metrics CSV | Run crashed during write; batch treats it as invalid |

When debugging a variant, start in:

```text
_4_OptSim/population/variant_XXXX/
```

Inspect `variant.mo`, build logs, `results/<standard>/`, and
`run_error_<standard>.log`.
