---
layout: doc
title: Setup Solver and Trade Studies
---

# Setup Solver and Trade Studies

This page covers three OptSim features: sweep scopes, the setup solver
(`make opt-solve`), and trade studies (`make opt-trade`). For the sensitivity
sweep they build on, see [OptSim](/bobsim/doe).

::: warning Not on BobSim main yet
These features are in open BobSim pull requests:
[#59](https://github.com/BobDyn/BobSim/pull/59) (sweep scope),
[#61](https://github.com/BobDyn/BobSim/pull/61) (setup solver), and
[#63](https://github.com/BobDyn/BobSim/pull/63) (trade studies). The targets,
variables, and config files below do not exist on `main` until those PRs merge.
:::

| Command | Question | Vehicles it runs | Answer |
| :-- | :-- | :-- | :-- |
| `make opt-standard` | Which parameters matter, and roughly where is a car with these numbers? | many, sampled | sensitivities, response surfaces, nearest sampled car |
| `make opt-solve` | What do I set on *this* car to hit these numbers? | a few, around the current car | one setup, simulated |
| `make opt-trade` | What does each of these specific changes buy, and cost? | the ones you name | a comparison table |

Use the sweep to learn a design space. Use the solver or a trade study when you
have a specific question. All three write their vehicles with the same
generator and compile them the same way, so a variant means the same thing in
each.

None of them finds a "best" car. The sweep ranks influence, the solver hits
targets you state, and the trade study reports facts. What a tenth of a degree
of understeer is worth in settling time stays an engineering judgement.

| Path | Role |
| :-- | :-- |
| `_4_OptSim/StandardSens/configs/solve_config.yaml` | Setup solver: targets, knobs, tolerances |
| `_4_OptSim/StandardSens/configs/trade_study.yaml` | Example trade study: candidates and metrics |
| `_4_OptSim/results/trade/` | Trade study reports, `<name>.md` and `<name>.csv` |

## Sweep scope

Each variable in `vehicle_architecture.yaml` may carry a `scope:` tag.
Without it, the sweep mixes two different studies:

| `scope:` | What it holds |
| :-- | :-- |
| `setup` | Knobs adjustable on the built car between sessions: toe, camber, springs, dampers, anti-roll bars |
| `architecture` | Properties fixed once the car exists: sprung and unsprung mass, CG, inertias, torsional stiffness |
| *(omitted)* | Both, or neither: swept in **every** scope |

```bash
make opt-standard-setup
make opt-standard DOE_SCOPE=architecture DOE_METHOD=lhs DOE_SAMPLES=30
```

`make opt-standard-setup` and `make opt-standard-architecture` run the same
sweep restricted to one scope. The default scope is `all`, so existing
commands do not change.

An untagged variable belongs to every scope on purpose. A new variable is then
never silently dropped from a scoped sweep. Driver mass and CG are untagged
because teams change drivers between events. `aero.load_scale` is untagged
because it scales every aero table together, which no wing adjustment does.

Run `make clean-opt` when you change scope. The variant count changes with it,
so a rerun stops instead of reusing the old population.

### Reverse lookup warnings

With these changes, `make opt-search` prints a warning to stderr for each way
its answer can mislead:

| Warning | Means |
| :-- | :-- |
| Target outside the sampled population | The result is the closest *edge* variant, not a vehicle that meets the target. The overshoot is given in population-widths. |
| Too few variants | A smoke-sized population (under 10) cannot support a nearest neighbour or a response surface. |
| Results predate their inputs | The table is older than the configs or `vehicle.yml` it was built from. |
| Narrower population than the config | The table came from a scoped sweep, so some parameters were never free. |

The warnings do not change the returned row. Read them.

## Solve for a setup

`make opt-solve` answers "what do I set on this car to hit these numbers"
directly, instead of looking one up in a finished sweep:

```bash
make opt-solve                                   # targets from solve_config.yaml
make opt-solve TARGETS="understeer_gradient_deg_per_g=0.31 roll_gradient_deg_per_g=0.85"
make opt-solve TARGETS="..." KNOBS="front.stabar.rate_n_m_per_rad rear.stabar.rate_n_m_per_rad"
```

It simulates a small star of vehicles around the current car: the centre plus
one step each way per knob, `2n + 1` runs. It fits a slope and curvature per
knob, solves for the setup on that fit, and then **simulates the setup it
proposes**. If that misses, the miss corrects the fit and it tries again, up
to four times. Every number it reports comes from a simulation of the exact
setup it returns.

| | `opt-search` | `opt-solve` |
| :-- | :-- | :-- |
| Cost as parameters are added | exponential, to sample the space | linear, `2n + 1` |
| Answer | nearest sampled variant | a continuous setup, snapped to part sizes that exist |
| Answer simulated? | no | yes, always |
| Unreachable target | closest edge variant, with a warning | `UNREACHABLE`, naming the knobs that ran out of range |
| Fewer targets than knobs | many equally near variants | the smallest change from the current car |

`configs/solve_config.yaml` holds the targets, the knobs, a tolerance per
metric, the solver's test matrix, and a CPU count. Only `scope: setup`
variables can be knobs. The driver, the masses, and the aero map are
conditions of the question, not answers to it. Set them in `vehicle.yml`.

As a guide, with four knobs on a 12-CPU container the first solve took about
eight minutes. Each later solve against different targets took about a minute,
because the star does not depend on the targets and is cached.

::: warning Toe and camber cost a compile per value
Springs, anti-roll bars, and dampers are applied to one cached executable with
an OpenModelica `-override`, which was checked against a full recompile. Static
toe and camber cannot be. They build the wheel's rotation matrix, which
OpenModelica evaluates at compile time. The override is accepted without a
warning and the simulated car does not change. Every mass and CG value behaves
the same way. So toe and camber are valid knobs, but each distinct value is its
own compile of roughly two and a half minutes.
:::

The solver fits its gradients through its own, denser test points. A gradient
from `opt-solve` therefore differs slightly from the same one in a StandardSim
report. Compare like with like.

## Trade studies

`make opt-trade` compares vehicles you name, on metrics you choose, across
more than one standard sim:

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
compiled, not overridden, so mass, CG, toe, and camber are all valid.
SteadyStateEval, RampSteerEval, and TransientEval run the same compiled model,
so one compile per vehicle serves all three. Vehicles and results are cached by
content. The baseline, and any candidate two studies share, is built once.

The report is one table per standard. Each cell is the simulated value with
its change from baseline. There is no score and no ranking. The marks keep a
difference from being over-read:

| Mark | Means |
| :-- | :-- |
| `~` | The change is smaller than the metric's `resolution`, the smallest change you said is worth acting on. Shown, but not a finding. |
| `n/c` | That run lost simulation cases, so its fits rest on fewer points and it is not compared. The command exits 2. |
| Interaction | When one candidate is exactly two others combined: the combined effect minus the sum of the parts. It tells you whether "do both" is the sum you budgeted for. |

TransientEval reports a few metrics once per group under one name. Ask for
those by group, such as `step.yaw_gain_dc`. The bare name is an error that
lists the options.

A candidate can only change a variable declared in `vehicle_architecture.yaml`,
because each needs the Modelica record block it maps to. To trade on something
new, declare it there first. FourPostEval is not available in a trade study. It
runs a different model and would need its own compile.

## Failure modes

| Symptom | Likely cause |
| :-- | :-- |
| `opt-solve` reports `UNREACHABLE` | The targets are outside what the knobs can reach. The report names the knobs at their limits. |
| `opt-trade` prints `n/c` and exits 2 | A run lost simulation cases. Check that vehicle's StandardSim report before you compare. |
| `opt-search` reports fewer parameters than expected | The population came from a scoped sweep. Run `make clean-opt && make opt-standard`. |
