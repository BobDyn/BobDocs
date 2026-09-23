---
layout: doc
title: OptSim
---

# OptSim

OptSim is BobDyn/BobSim's lane for questions about more than one vehicle. It
creates vehicle variants, compiles and simulates them, and turns the metrics into
tables and reports.

It asks three different questions, with three separate tools. None replaces
another:

| Command | Question | Vehicles it runs | Answer |
| :-- | :-- | :-- | :-- |
| `make opt-standard` | Which parameters matter, and roughly where is a car with these numbers? | many, sampled | sensitivities, response surfaces, nearest sampled car |
| `make opt-solve` | What do I set on *this* car to hit these numbers? | a few, around the current car | one setup, simulated |
| `make opt-trade` | What does each of these specific changes buy, and cost? | the ones you name | a comparison table |

The sweep is how you learn a design space. The solver and the trade study are
what you reach for once you have a specific question. All three write their
vehicles with the same generator and compile them the same way, so a variant
means the same thing in each.

None of them finds a "best" car. The sweep ranks influence, the solver hits
targets you state, and the trade study reports facts; what a tenth of a degree
of understeer is worth in settling time stays an engineering judgement.

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
| `_4_OptSim/StandardSens/configs/solve_config.yaml` | Setup solver: targets, knobs, tolerances |
| `_4_OptSim/StandardSens/configs/trade_study.yaml` | Example trade study: candidates and metrics |
| `_4_OptSim/StandardSens/pipeline/` | Sampling, generation, compile/run, aggregation, plotting helpers |
| `_4_OptSim/EnvelopeSens/` | Reduced EnvelopeSim sensitivity workflow |
| `_4_OptSim/EnvelopeSens/config.yml` | Envelope sensitivity config |
| `_4_OptSim/Build/` | Generated variants, intermediate outputs, and private build artifacts |
| `_4_OptSim/results/` | Public sensitivity and response-surface outputs |
| `_4_OptSim/results/trade/` | Trade study reports, `<name>.md` and `<name>.csv` |

## Commands

```bash
make opt-standard
make opt-envelope
make opt-refined
make opt-search METRICS="SteadyStateEval_understeer_gradient_deg_per_g=0.3"
make opt-solve
make opt-trade
```

| Command | Purpose |
| :-- | :-- |
| `make opt-standard` | Run StandardSim pre-screen sensitivities |
| `make opt-standard-setup` / `-architecture` | The same sweep, restricted to one [scope](#sweep-scope) |
| `make opt-envelope` | Run EnvelopeSim sensitivities |
| `make opt-refined` | Build refined StandardSim response surfaces from sensitivity results |
| `make opt-search` | Look up the nearest sampled vehicle to target metrics |
| `make opt-solve` | [Solve for the setup](#solving-for-a-setup) that hits target metrics, and simulate it |
| `make opt-trade` | [Compare named vehicles](#trade-studies) across the standard sims |

::: tip Git Bash on Windows
Git Bash rewrites the `/workspace/...` paths these targets pass to Docker, and the
run dies within seconds with a file-not-found. Prefix the command:
`MSYS_NO_PATHCONV=1 make opt-solve`. PowerShell and WSL are unaffected.
:::

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

## Sweep Scope

Each variable in `vehicle_architecture.yaml` may carry a `scope:` tag, because
the sweep otherwise mixes two different studies:

| `scope:` | What it holds |
| :-- | :-- |
| `setup` | Knobs adjustable on the built car between sessions: toe, camber, springs, dampers, anti-roll bars |
| `architecture` | Properties fixed once the car exists: sprung and unsprung mass, CG, inertias, torsional stiffness |
| *(omitted)* | Both, or neither: swept in **every** scope |

```bash
make opt-standard-setup
make opt-standard DOE_SCOPE=architecture DOE_METHOD=lhs DOE_SAMPLES=30
```

The default is `all`, so existing invocations are unchanged. An untagged variable
belongs to every scope on purpose: a newly added variable is then never silently
dropped from a scoped sweep. Driver mass and CG are untagged because teams change
drivers between events; `aero.load_scale` is untagged because it scales every
aero table together, which no wing adjustment does.

Run `make clean-opt` when you change scope. The variant count changes with it, so
a rerun stops rather than quietly reusing the old population.

## Reverse Lookup

`make opt-search` finds the sampled vehicle nearest to target metrics. It is a
nearest-neighbour lookup over a finite population, not an optimizer, and it
prints a warning to stderr for each way that can mislead:

| Warning | Means |
| :-- | :-- |
| Target outside the sampled population | The result is the closest *edge* variant, not a vehicle that meets the target. The overshoot is given in population-widths. |
| Too few variants | A smoke-sized population (under 10) cannot support a nearest neighbour or a response surface. |
| Results predate their inputs | The table is older than the configs or `vehicle.yml` it was built from. |
| Narrower population than the config | The table came from a scoped sweep, so some parameters were never free. |

The warnings do not change the returned row. Read them.

## Solving for a Setup

`make opt-solve` answers "what do I set on this car to hit these numbers"
directly, rather than looking one up in a finished sweep:

```bash
make opt-solve                                   # targets from solve_config.yaml
make opt-solve TARGETS="understeer_gradient_deg_per_g=0.31 roll_gradient_deg_per_g=0.85"
make opt-solve TARGETS="..." KNOBS="front.stabar.rate_n_m_per_rad rear.stabar.rate_n_m_per_rad"
```

It simulates a small star of vehicles around the current car (the centre plus one
step each way per knob, `2n + 1` runs), fits a slope and curvature per knob,
solves for the setup on that fit, and then **simulates the setup it proposes**.
If that misses, the miss corrects the fit and it tries again, up to four times.
Every number it reports comes from a simulation of the exact setup it returns.

| | `opt-search` | `opt-solve` |
| :-- | :-- | :-- |
| Cost as parameters are added | exponential, to sample the space | linear, `2n + 1` |
| Answer | nearest sampled variant | a continuous setup, snapped to part sizes that exist |
| Answer simulated? | no | yes, always |
| Unreachable target | closest edge variant, with a warning | `UNREACHABLE`, naming the knobs that ran out of range |
| Fewer targets than knobs | many equally near variants | the smallest change from the current car |

`configs/solve_config.yaml` holds the targets, the knobs, a tolerance per metric,
the solver's test matrix and a CPU count. Only `scope: setup` variables can be
knobs. The driver, the masses and the aero map are conditions of the question,
not answers to it: set them in `vehicle.yml`.

As a guide, with four knobs on a 12-CPU container the first solve took about
eight minutes, and each later solve against different targets about a minute,
because the star does not depend on the targets and is cached.

::: warning Toe and camber cost a compile per value
Springs, anti-roll bars and dampers are applied to one cached executable with an
OpenModelica `-override`, which was checked against a full recompile. Static toe
and camber cannot be: they build the wheel's rotation matrix, which OpenModelica
evaluates at compile time. The override is accepted without a warning and the
simulated car does not change. Every mass and CG value behaves the same way. So
toe and camber are valid knobs, but each distinct value is its own compile of
roughly two and a half minutes.
:::

The solver fits its gradients through its own, denser test points, so a gradient
from `opt-solve` differs slightly from the same one in a StandardSim report.
Compare like with like.

## Trade Studies

`make opt-trade` compares vehicles you name, on metrics you choose, across more
than one standard sim:

```bash
make opt-trade                                   # configs/trade_study.yaml
make opt-trade STUDY=path/to/another_study.yaml
```

```yaml
name: rear_roll_stiffness
candidates:
  stiff_rear_bar:    {rear.stabar.rate_n_m_per_rad: 961.495352}
  soft_front_spring: {front.actuation.spring_rate_n_per_m: 21015.2202}
  both:              {rear.stabar.rate_n_m_per_rad: 961.495352,
                      front.actuation.spring_rate_n_per_m: 21015.2202}
metrics:
  SteadyStateEval:
    roll_gradient_deg_per_g: {resolution: 0.02}
  TransientEval:
    roll_overshoot_pct: {resolution: 1.0}
```

Each candidate is the baseline with those variables changed. Every candidate is
compiled rather than overridden, so mass, CG, toe and camber are all fair game.
SteadyStateEval, RampSteerEval and TransientEval run the same compiled model, so
one compile per vehicle serves all three. Vehicles and results are cached by
content: the baseline, and any candidate two studies share, is built once.

The report is one table per standard, each cell the simulated value with its
change from baseline. There is no score and no ranking. What it does do is keep a
difference from being over-read:

| Mark | Means |
| :-- | :-- |
| `~` | The change is smaller than the metric's `resolution`, the smallest change you said is worth acting on. Shown, but not a finding. |
| `n/c` | That run lost simulation cases, so its fits rest on fewer points and it is not compared. The command exits 2. |
| Interaction | When one candidate is exactly two others combined, the combined effect minus the sum of the parts. It tells you whether "do both" is the sum you budgeted for. |

TransientEval reports a few metrics once per group under one name. Ask for those
by group, such as `step.yaw_gain_dc`; the bare name is an error that lists the
options.

A candidate can only change a variable declared in `vehicle_architecture.yaml`,
because each needs the Modelica record block it maps to. To trade on something
new, declare it there first. FourPostEval is not available in a trade study: it
runs a different model and would need its own compile.

## Architecture Config

The human-edited StandardSens source is:

```text
_4_OptSim/StandardSens/configs/vehicle_architecture.yaml
```

It selects the vehicle template, sampling strategy, sample count or interval
count, random seed, and sweep variables.

Each variable maps a high-level design path to a parameter inside the variant
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
| `scope` | Optional `setup` or `architecture`; omitted means every [scope](#sweep-scope) |

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
| Selected architecture mismatch | Standard model imports a different baseline record or template |
| Compile failure | Variant produced an invalid or difficult Modelica record |
| Missing metrics CSV | Simulation failed or report wrapper did not finish |
| Partial metrics CSV | Run crashed during write; rerun after inspecting the failure log |
| Dies in seconds with a `C:/Program Files/Git/workspace/...` path | Git Bash rewrote the container path; prefix with `MSYS_NO_PATHCONV=1` |
| `opt-solve` reports `UNREACHABLE` | The targets are outside what the knobs can reach; the report names the knobs at their limits |
| `opt-trade` prints `n/c` and exits 2 | A run lost simulation cases; inspect that vehicle's StandardSim report before comparing |
| `opt-search` reports fewer parameters than expected | The population came from a scoped sweep; run `make clean-opt && make opt-standard` |
