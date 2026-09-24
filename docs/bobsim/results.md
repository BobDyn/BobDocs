---
layout: doc
title: Archive
---

# Archive

This page lists where BobDyn/BobSim writes each output and what the files
contain. For most work, use the app's `Archive` tab. It holds the PDF report,
the metrics CSV, and a per-run signal archive for each local run.

## App archive packages

Open `Archive` after a simulation run, or click `Review` on a Simulation card
when outputs exist.

![BobSim Archive view with local runs, downloadable files, and PDF preview](/images/bobsim/app-results-explore.png)

When a Simulation job succeeds, BobSim writes a local archive package. Each
package can include:

| File | Contents |
| :-- | :-- |
| `report.pdf` | The workflow report |
| `metrics.csv` | The exported summary metrics |
| `signals.zip` | Per-run signals, overrides, logs, and descriptions |
| `run-description.json` | What ran, and with which inputs |
| `vehicle.yml` | Snapshot of the active vehicle |
| `config.yml` | Snapshot of the workflow config |
| `manifest.json` | Index of the package |

`signals.zip` has one folder per run:

```text
manifest.json
runs/
  001-case-name/
    signals.csv
    overrides.txt
    run.log
    description.json
```

The app writes packages to `_5_App/user_data/results/saved/` and mirrors them
under `_5_App/user_data/workspaces/vehicles/`. `Delete` on an Archive card
removes both copies.

FourPostEval reports leave out the raw time-series pages by default. Use
`signals.zip` for the per-run signal tables.

## Output locations

| Workflow | Reports and metrics | Intermediate files |
| :-- | :-- | :-- |
| StandardSim | `_3_StandardSim/generated_results/` | `_3_StandardSim/BuildBobLib/<entry point>/` |
| EnvelopeSim | `_2_EnvelopeSim/results/` | `_2_EnvelopeSim/Build/GGV/`, `_2_EnvelopeSim/Build/YMD/` |
| OptSim | `_4_OptSim/results/` | `_4_OptSim/Build/StandardSens/`, `_4_OptSim/Build/EnvelopeSens/` |
| Replay scenes | `_1_VisualSim/results/` | — |

For the file names in each directory, see [StandardSim](/bobsim/standard-sim#outputs),
[EnvelopeSim](/bobsim/envelope), and [OptSim](/bobsim/doe). For Replay scenes,
see [Replay](/bobsim/visualization#replay-a-run).

`_3_StandardSim/results/` is an older output location. The shipped StandardSim
configs write to `generated_results/`.

Use the PDF first when you review a vehicle. Use the metrics CSV to compare
runs, drive a notebook, or feed another analysis stage.

## Metrics CSVs

| Workflow | Example metrics |
| :-- | :-- |
| RampSteerEval | Lateral acceleration range, steering gradients, yaw and roll trends, limit-point derivatives |
| SteadyStateEval | Lateral acceleration range, steering gradients, understeer gradient, roll gradient, handwheel torque range |
| TransientEval | Step response, gain and phase response, time lags, velocity trends, fit quality |
| FourPostEval | Camber, toe, caster, and KPI gains, motion ratios, roll stiffness, jacking, LLTD |

The column layout differs by workflow. Each CSV opens in spreadsheets,
notebooks, and scripts.

## Raw case files

The shared Modelica runner creates a run directory for every case:

```text
_3_StandardSim/BuildBobLib/VehicleSim/results/run_<id>/
_3_StandardSim/BuildBobLib/FourPostSim/results/run_<id>/
```

Each contains:

```text
overrides.txt
run.log
manifest.json
<exec_name>_res.csv
```

The shipped configs set `execution.cleanup: false`, so the directories stay
after a run. The app builds `signals.zip` from them. Set `cleanup: true` to
delete each directory after extraction.

## Build artifacts

OpenModelica writes build outputs to:

```text
_3_StandardSim/BuildBobLib/VehicleSim/
_3_StandardSim/BuildBobLib/FourPostSim/
```

The runner needs two files from each:

```text
BobLib.Experiments.Standards.VehicleSim
BobLib.Experiments.Standards.VehicleSim_init.xml
```

or:

```text
BobLib.Experiments.Standards.FourPostSim
BobLib.Experiments.Standards.FourPostSim_init.xml
```

Windows builds may add an `.exe` suffix to the executable. The init XML keeps
the `<exec_name>_init.xml` name. Generated C files, object files, makefiles,
binary Jacobian data, logs, and runtime support files may also be present.

## Docs samples

BobDocs keeps selected BobSim outputs under `docs/public/`. They are
documentation examples, not the live BobSim working directory. To update them,
regenerate the reports in BobSim, then copy the examples into BobDocs.

## Keep results comparable

- Keep the source config with the result.
- Keep the matching vehicle YAML, generated BobLib record, and workflow config.
- Export metrics CSVs for spreadsheet or notebook comparisons.
- Keep raw case directories only for failures or deep debugging.
- Clean build artifacts before you time compile performance.

Cleanup targets:

| Target | Removes |
| :-- | :-- |
| `make clean-standard` | StandardSim build and result artifacts |
| `make clean-envelope` | EnvelopeSim build and result artifacts |
| `make clean-opt` | OptSim build and result artifacts |
| `make clean-app` | App configs, saved vehicles, archive packages, and workspaces under `_5_App/user_data/` |
| `make clean-all` | All of the above, plus Replay scenes and Python and tool caches |

The cleanup targets keep tracked placeholder files.

::: warning
`make clean-all` runs `make clean-app`. It deletes your saved vehicles and
archive packages in a source checkout.
:::
