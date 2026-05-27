---
layout: doc
title: Results
---

# Results

BobDyn/BobSim writes results in predictable workflow-specific directories. The public
artifacts are reports, metrics CSVs, plots, animations, and DOE tables. The
debug artifacts are per-case run directories, OpenModelica logs, override
files, generated result CSVs, and compiled build artifacts.

## StandardSim Results

StandardSim public outputs live under:

```text
_3_StandardSim/results/
```

Current report artifacts:

```text
_3_StandardSim/results/steady_state_eval_report.pdf
_3_StandardSim/results/steady_state_eval_report_metrics.csv
_3_StandardSim/results/transient_eval_report.pdf
_3_StandardSim/results/transient_eval_report_metrics.csv
_3_StandardSim/results/four_post_eval_report.pdf
_3_StandardSim/results/four_post_eval_report_metrics.csv
```

Use the PDF first when reviewing a vehicle. Use the metrics CSV when comparing
runs, driving a notebook, or feeding another analysis stage.

## Metrics CSVs

SteadyStateEval and TransientEval metrics CSVs include metadata columns in
addition to metric names and values.

SteadyStateEval shape:

```text
standard,metric,value,units,description
```

TransientEval shape:

```text
standard,group,metric,value,units,description
```

FourPostEval currently writes the compact form:

```text
metric,value
```

Representative metric groups:

| Workflow | Examples |
| :-- | :-- |
| SteadyStateEval | `ay_min`, `ay_max`, steering gradients, understeer gradient, roll gradient, handwheel torque range |
| TransientEval | step response, gain/phase response, time lags, velocity trends, fit quality |
| FourPostEval | camber/toe/caster/KPI gains, motion ratios, roll stiffness, jacking, LLTD |

## Raw Case Artifacts

The shared Modelica runner creates a run directory for every case. The directory
contains:

```text
overrides.txt
run.log
<exec_name>_res.csv
```

By default, the active configs use:

```yaml
execution:
  cleanup: true
```

That means per-case run directories are deleted after signal extraction. To
debug a run, set `cleanup: false`, rerun the workflow, and inspect the retained
directories under the build tree.

Typical retained paths:

```text
_3_StandardSim/Build/VehicleSim/results/run_<id>/
_3_StandardSim/Build/FourPostSim/results/run_<id>/
```

If the build directory's `results/` folder is not writable, the runner falls
back to a `runs/` directory in the same build tree.

## Build Artifacts

OpenModelica build outputs live under:

```text
_3_StandardSim/Build/VehicleSim/
_3_StandardSim/Build/FourPostSim/
```

These directories contain the executable, init XML, generated C files, object
files, makefiles, binary Jacobian data, logs, and runtime support files.

The two files the runner absolutely needs are:

```text
BobLib.Standards.VehicleSim
BobLib.Standards.VehicleSim_init.xml
```

or:

```text
BobLib.Standards.FourPostSim
BobLib.Standards.FourPostSim_init.xml
```

## EnvelopeSim Results

Envelope outputs live under:

```text
_2_EnvelopeSim/results/
```

Current output groups:

```text
_2_EnvelopeSim/results/GGV/
_2_EnvelopeSim/results/YMD/
_2_EnvelopeSim/results/VehicleReview/
```

Common artifacts include CSV tables, PNG plots, and the vehicle review PDF:

```text
_2_EnvelopeSim/results/GGV/ggv_first_principles.csv
_2_EnvelopeSim/results/YMD/ymd_first_principles.csv
_2_EnvelopeSim/results/VehicleReview/vehicle_review_report.pdf
_2_EnvelopeSim/results/VehicleReview/vehicle_review_report_metrics.csv
```

The vehicle review report is the best single artifact when you want a compact
summary that ties active `vehicle.yml` assumptions to StandardSim and
EnvelopeSim outputs.

## Visualization Results

VisualSim MP4 outputs are usually written to:

```text
_1_VisualSim/results/
```

The renderer consumes:

- a visualization template YAML
- a `.npz` file containing visual signal arrays
- an output MP4 path

Example:

```bash
python _1_VisualSim/run_visual.py \
  _1_VisualSim/visual_templates/transient_eval_visual.yml \
  _1_VisualSim/BobLib.Standards.TransientEval_run_5_visual.npz \
  --mp4 _1_VisualSim/results/transient_eval_test.mp4
```

## OptSim Results

OptSim writes generated variants under:

```text
_4_OptSim/population/
```

Each variant directory can contain:

```text
variant.mo
build/<standard>/
results/<standard>/
run_error_<standard>.log
```

Aggregate outputs are written under:

```text
_4_OptSim/results/
```

The aggregator attempts to write:

```text
_4_OptSim/results/doe_results.parquet
```

If no parquet engine is installed, it falls back to:

```text
_4_OptSim/results/doe_results.csv
```

Post-aggregation visualization scripts can write:

```text
_4_OptSim/results/doe_results_viz.pdf
_4_OptSim/results/doe_response_surfaces.pdf
_4_OptSim/results/standard_sensitivity_tornado.pdf
_4_OptSim/results/envelope_sensitivity_viz.pdf
_4_OptSim/results/envelope_sensitivity_tornado.pdf
```

They are built separately after the relevant sensitivity or aggregate run:

```bash
make shell-doe
python pipeline/plot_results.py
python pipeline/response_surfaces.py
python pipeline/plot_envelope_sensitivities.py
python pipeline/plot_sensitivity_tornado.py --source standard
python pipeline/plot_sensitivity_tornado.py --source envelope
```

The tornado PDFs wrap the one-factor sensitivity outputs generated by
`run_standard_sensitivities.py` and `run_envelope_sensitivities.py`.

## Public Docs Samples

BobDocs embeds selected BobDyn/BobSim outputs under:

```text
docs/public/
```

Current public sample artifacts:

```text
docs/public/steady_state_eval.mp4
docs/public/steady_state_eval_report.pdf
docs/public/transient_eval.mp4
docs/public/transient_eval_report.pdf
```

Those files are documentation examples, not the live BobDyn/BobSim working directory.
Regenerate reports in BobDyn/BobSim, then copy intentional public examples into
BobDocs when updating the website.

## Preserving Results

Use these conventions when comparing runs:

- Keep the source config with the result whenever possible.
- Preserve the matching `vehicle.yml`.
- Export metrics CSVs for spreadsheet or notebook comparisons.
- Keep raw case directories only for failures or deep debugging.
- Clean build artifacts before timing compile performance.

Useful cleanup targets:

```bash
make clean-results
make clean-build
make clean-doe
make clean
```

`make clean-results` and `make clean-build` operate on StandardSim directories.
`make clean-doe` clears OptSim population/results while preserving `.gitkeep`
files. `make clean` removes Python caches, common build artifacts, and broad
simulation outputs.
