---
layout: doc
title: BobSim CLI Workflow
prev:
  text: 'BobSim Use Guide'
  link: '/use-guide/bobsim'
---

# BobSim CLI Workflow

Use the `make` targets to run BobSim studies without the app, for batch work,
scripts, and CI. Run them from the BobSim repository root. Most targets run
inside the BobSim Docker image and share the builds in
`_3_StandardSim/BuildBobLib/` with the app.

To list every target with a description, run `make help`.

## Run The Standard Studies

StandardSim is the high-fidelity simulation lane under `_3_StandardSim/`. Use it
when a question depends on the full Modelica vehicle response.

| Study | Use it for | Target |
| :-- | :-- | :-- |
| RampSteerEval | Open-loop ramp-steer handling response | `make standard-eval-ramp-steer` |
| SteadyStateEval | Settled lateral-acceleration operating points | `make standard-eval-steady-state` |
| TransientEval | Step steer and continuous sine response | `make standard-eval-transient` |
| FourPostEval | Heave and roll suspension and chassis metrics | `make standard-eval-four-post` |

To run all four:

```bash
make standard-eval-all
```

Each target builds what it needs first. The three maneuver studies depend on
`make standard-build`. FourPostEval depends on `make standard-build-four-post`.
The build targets depend on the records in `BobLib/Records/VehicleDefn/`, so
after `Write to MBD` changes them, `make` rebuilds before it runs.

Reports go to `_3_StandardSim/generated_results/`, for example
`ramp_steer_eval_report.pdf`.

::: warning The CLI reads the app's config copies
When you edit a study config in the app, BobSim writes the change to
`_5_App/user_data/config/active/`. After that, the `make standard-eval-*`
targets read that copy, not the checked-in file under `_3_StandardSim/`. Set
`BOBSIM_SEED_CONFIGS=1` to force the checked-in file.
:::

See [StandardSim](/bobsim/standard-sim) for what each study does.

## Run EnvelopeSim

EnvelopeSim is a reduced-order lane for GGV and YMD envelope maps. It is a
separate implementation of these calculations.

```bash
make envelope-ggv
make envelope-ymd
make envelope-all
```

`envelope-all` runs both. Use these outputs for quick plausibility checks,
reviews of tire, aero, and mass assumptions, and limit trends. Use StandardSim
when the question depends on multibody transient behavior.

See [EnvelopeSim](/bobsim/envelope) for details.

## Run OptSim

OptSim is the sensitivity and response-surface lane under `_4_OptSim/`.

| Target | Runs |
| :-- | :-- |
| `make opt-standard` | StandardSim pre-screen sensitivities |
| `make opt-envelope` | EnvelopeSim sensitivities |
| `make opt-refined` | Refined StandardSim response surfaces |

See [OptSim / DOE](/bobsim/doe) for details.

## Check Vehicle Records

Check that the BobLib records match the active `vehicle.yml` without the app:

```bash
make sync-vehicle
make sync-vehicle-write
```

`make sync-vehicle` reports stale records and exits with an error if it finds
any. `make sync-vehicle-write` regenerates them.

These two targets run on the host, not in Docker. They need a Python
environment with the BobSim dependencies. See
[Run BobSim Without Docker](/startup-guide/bobsim-without-docker#run-the-app-from-a-source-checkout).

## Other Targets

| Target | What it does |
| :-- | :-- |
| `make shell` | Opens a shell inside the container |
| `make ci` | Runs lint, typecheck, and tests |
| `make clean-app` | Resets app state in `_5_App/user_data/` |
| `make clean-owned` | Deletes root-owned generated results and app data through the container |

Add `RUN=` to a Docker target to run it on the host instead of in Docker. See
[Run BobSim Without Docker](/startup-guide/bobsim-without-docker).

## Debug A Failed CLI Run

1. Check that the build target completed.
2. Check that `execution.cleanup` is `false` in the workflow config. The
   runner default and all four shipped configs use `false`.
3. Run the workflow again.
4. Inspect the retained run directory under the build tree.
5. Read `overrides.txt`, `run.log`, and the result CSV.

See
[A run failed and you want the raw directory](/startup-guide/bobsim-troubleshooting#a-run-failed-and-you-want-the-raw-directory)
for the paths.

## Related Pages

- [BobSim Use Guide](/use-guide/bobsim) for the app workflow
- [BobDyn/BobSim overview](/bobsim/) for the repository structure and target
  names
- [Configuration](/bobsim/configuration) for YAML sections and build settings
- [Development](/bobsim/development) for the full `make` target reference
