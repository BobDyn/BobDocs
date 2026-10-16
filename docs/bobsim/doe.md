---
layout: doc
title: OptSim
---

# OptSim

OptSim answers questions about more than one vehicle. It generates vehicle
variants, compiles and simulates them, and turns their metrics into
sensitivity tables, tornado reports, and response surfaces.

| Command | Question | Answer |
| :-- | :-- | :-- |
| `make opt-standard` | Which parameters move the StandardSim metrics, and by how much? | Sensitivity table and tornado report |
| `make opt-envelope` | Which parameters move the envelope metrics? | Envelope sensitivity table and report |
| `make opt-refined` | How do the influential inputs shape a metric? | Response surfaces |
| `make opt-search` | Which sampled vehicle is nearest to these metrics? | The nearest variant |

None of these finds a "best" car. The sweep ranks influence. Deciding what a
change in a metric is worth stays an engineering judgement.

::: warning Current status
OptSim is narrower than StandardSim. Use StandardSim and EnvelopeSim as the
baseline workflows, and use OptSim for sensitivity studies around them.
:::

The setup solver (`make opt-solve`), trade studies (`make opt-trade`), and
sweep scopes are in open BobSim pull requests. See
[Setup Solver and Trade Studies](/bobsim/optsim-solve-trade).

## Layout

| Path | Role |
| :-- | :-- |
| `_4_OptSim/StandardSens/` | StandardSim sensitivity and response-surface workflow |
| `_4_OptSim/StandardSens/configs/vehicle_architecture.yaml` | Human-edited architecture and sweep source |
| `_4_OptSim/StandardSens/configs/_doe_config.yaml` | Generated DOE config |
| `_4_OptSim/StandardSens/configs/compiler_config.yaml` | BobLib path, standards, OMC settings, batch timeout |
| `_4_OptSim/StandardSens/configs/aggregator_config.yaml` | Metric extraction map |
| `_4_OptSim/StandardSens/pipeline/` | Sampling, generation, compile and run, aggregation, search, and plotting |
| `_4_OptSim/EnvelopeSens/` | Reduced EnvelopeSim sensitivity workflow |
| `_4_OptSim/EnvelopeSens/config.yml` | Envelope sensitivity config |
| `_4_OptSim/Build/` | Generated variants, intermediate outputs, and build artifacts |
| `_4_OptSim/results/` | Sensitivity and response-surface outputs |

## Commands

```bash
make opt-standard
make opt-envelope
make opt-refined
make opt-search METRICS="SteadyStateEval_understeer_gradient_deg_per_g=0.3"
```

For the sweep-size variables, see [Make targets](/bobsim/make-targets#optsim).
For interactive work, run `make shell-opt`.

::: tip Git Bash on Windows
Git Bash rewrites the `/workspace/...` paths these targets pass to Docker, and the
run dies within seconds with a file-not-found. Prefix the command:
`MSYS_NO_PATHCONV=1 make opt-standard`. PowerShell and WSL are unaffected.
:::

## Standard sensitivities

`make opt-standard` runs `_4_OptSim/StandardSens/pre_screen_sensitivities.py`.
Variant generation needs FourPostEval motion ratios, so the target first runs
`make standard-eval-four-post` if
`_3_StandardSim/generated_results/four_post_eval_report_metrics.csv` is
missing.

The workflow:

1. Samples and generates vehicle variants.
2. Builds and simulates the StandardSim variants.
3. Aggregates the StandardSim metrics.
4. Writes a sensitivity table.
5. Plots StandardSim tornado diagrams.

| Output | Path |
| :-- | :-- |
| Sampled inputs | `_4_OptSim/Build/StandardSens/standard_sensitivity_inputs.csv` |
| Raw results | `_4_OptSim/Build/StandardSens/standard_sensitivity_results.parquet` |
| Sensitivity table | `_4_OptSim/results/standard_sensitivity_results.csv` |
| Tornado report | `_4_OptSim/results/standard_sensitivity_report.pdf` |

The sensitivity table joins the sampled inputs with selected StandardSim
metrics, so you can inspect how each design variable moves each metric.

## Envelope sensitivities

`make opt-envelope` runs `_4_OptSim/EnvelopeSens/sensitivities.py`.

The workflow:

1. Generates EnvelopeSim variants.
2. Writes input and scope tables.
3. Runs reduced GGV and YMD sensitivity metrics.
4. Computes relative sensitivities.
5. Writes a report and results CSV.

| Output | Path |
| :-- | :-- |
| Inputs | `_4_OptSim/Build/EnvelopeSens/envelope_sensitivity_inputs.csv` |
| Scope | `_4_OptSim/Build/EnvelopeSens/envelope_sensitivity_scope.csv` |
| Relative sensitivities | `_4_OptSim/Build/EnvelopeSens/envelope_relative_sensitivities.csv` |
| Results table | `_4_OptSim/results/envelope_sensitivity_results.csv` |
| Report | `_4_OptSim/results/envelope_sensitivity_report.pdf` |

## Refined response surfaces

`make opt-refined` runs `_4_OptSim/StandardSens/refined_response_surfaces.py`.
It uses the StandardSim sensitivity results to select the influential inputs,
then builds a refined population for response-surface fitting.

It writes `_4_OptSim/results/refined_response_surface_results.csv`. Depending
on its arguments and the prior results, it can also write selection tables,
coefficient tables, and response-surface PDFs.

## Reverse lookup

`make opt-search` finds the sampled vehicle nearest to the target metrics. It
needs a populated results table, so run `make opt-standard` first.

```bash
make opt-search METRICS="MetricA=1.0 MetricB=2.0" SEARCH_TOP=5
```

It normalizes each metric by its range across the population and returns the
nearest variants. It is a nearest-neighbour lookup over a finite population,
not an optimizer. The result is a sampled variant, not a vehicle that meets
the target.

If a swept parameter is missing from the results table, it prints a warning to
stderr. The table is probably stale. Rerun `make opt-standard`.

## Architecture config

The human-edited StandardSens source is
`_4_OptSim/StandardSens/configs/vehicle_architecture.yaml`. It selects the
vehicle template, sampling method, sample or interval count, random seed, and
sweep variables. The shipped config uses `vehicle.yml` as the template and
`interval_splice` sampling with `4` intervals.

Each variable maps a design path to a parameter inside the variant Modelica
record:

| Field | Meaning |
| :-- | :-- |
| `path` | Stable design-variable name used in sampled rows and aggregate output |
| `block` | Modelica parameter record block in the baseline `.mo` file |
| `param` | Parameter inside that block |
| `index` | Optional element index when the parameter is an array |
| `range` | Sample range for that variable |
| `label` | Optional human-readable label used by sensitivity plots |
| `values` | Optional explicit interval values |
| `intervals` | Optional per-variable interval count |
| `targets` | Optional linked Modelica parameters updated together |
| `scale` | Optional scale factor between design variable and Modelica value |

A variable must have `path`, `range`, and either `block` or `targets`.

Variant `0` is the baseline. Interval-splice studies perturb one input at a
time around that baseline, which is what the tornado reports expect.

## Generated variants

StandardSens writes its variants to `_4_OptSim/Build/StandardSens/population/`.
Each variant can contain:

```text
variant.mo
build/<standard>/
results/<standard>/
run_error_<standard>.log
```

If a sensitivity result looks wrong, open that variant's `variant.mo`, then
check the run log and metrics CSV.

## Cleanup

If sample counts, variable dimensions, or response-surface selections change,
clean the OptSim artifacts before you rerun:

```bash
make clean-opt
```

## Failure modes

| Symptom | Likely cause |
| :-- | :-- |
| BobLib not found | Submodule missing. Run `make init`. |
| Population mismatch | Sample count changed without cleaning the OptSim build artifacts |
| Selected architecture mismatch | The standard model imports a different baseline record or template |
| Compile failure | A variant produced an invalid or difficult Modelica record |
| Missing metrics CSV | The simulation failed or the report wrapper did not finish |
| Partial metrics CSV | The run crashed during the write. Check the failure log, then rerun. |
| Dies in seconds with a `C:/Program Files/Git/workspace/...` path | Git Bash rewrote the container path. Prefix the command with `MSYS_NO_PATHCONV=1`. |
| `opt-search` warns about missing swept parameters | The results table is stale. Rerun `make opt-standard`. |
