---
layout: doc
title: Results and saved data
---

# Results and saved data

Each simulation has a Results entry. It opens after a successful run and
contains the plots and report for that simulation. A rerun updates the current
result. Archived runs retain the inputs used when they ran.

## Result views

| View | Use |
| --- | --- |
| Report | Summary, plots, metrics, and method-specific diagnostics |
| Signal Explorer | Available signals against time or another signal |
| Parametric color | A third signal encoded along the plotted curve |
| Animation | Supported transient state histories in the vehicle view |
| Envelope or lap view | Static GGV, YMD, or path-based results |

The Results context menu adds post-processing children. One Animation is
allowed per simulation. Multiple Signal Explorers can be added and renamed.
They inherit their simulation's result source.

## Comparisons

Signal Explorer can overlay a baseline run and show differences in archived
vehicle and analysis settings. This settings comparison does not compare all
referenced file contents or solver versions. Matching names alone are not
proof that two runs used equivalent models.

Before comparing results, check model fidelity, steering convention, tire data,
power limits, initialization, and whether each run completed successfully.
Replay grip ellipses are approximate peak-force diagnostics, not an independent
proof of tire feasibility.

## Stored data

These paths are relative to a source checkout or the desktop runtime root:

| Path | Contents |
| --- | --- |
| `app/user_data/config/vehicles/` | Saved vehicle definitions |
| `app/user_data/config/active/` | Active workflow settings |
| `app/user_data/workspaces/vehicles/` | Per-vehicle analyses and generated results |
| `app/user_data/results/saved/` | Saved result packages |
| `app/user_data/cache/modelica/` | Reusable Modelica build artifacts |

Named analyses are recorded in each vehicle workspace's `simulations.json`.
Deleting a simulation does not remove its saved runs. **Save As** creates a
separate vehicle workspace.

## Command-line outputs

| Workflow | Default output location |
| --- | --- |
| BobLib standard reports | `simulations/mbd/generated_results/` |
| Reduced response | `simulations/reduced/` |
| Envelope reports | `simulations/envelope/results/` |
| Envelope generation artifacts | `simulations/envelope/Build/` |
| Standalone laps | `simulations/lap/results/` |
| Scene capture | `visualization/results/` |

Some output paths retain older names for compatibility even though their source
modules moved. Exact filenames and signals depend on the workflow and config.
The run's own artifact listing is the place to inspect them.

Source: [storage](https://github.com/BobDyn/BobSim/blob/main/app/storage.py)
and [run data services](https://github.com/BobDyn/BobSim/blob/main/app/data_services.py).
