# BobSim package reference

This page maps the current BobSim source tree into documentation areas.

## Top-level areas

| Path | Documentation | Purpose |
|:--|:--|:--|
| `_0_Utils` | [Utilities](/documentation/bobsim/_0_Utils/) | Shared plotting and reporting engines. |
| `_1_VisualSim` | [Visualization](/documentation/bobsim/_1_VisualSIm/) | PyVista/Qt visualizer and MP4 rendering tools. |
| `_2_EnvelopeSim` | [Envelopes](/documentation/bobsim/_2_EnvelopeSim/) | GGV and YMD envelope generation. |
| `_3_StandardSim` | [StandardSim](/documentation/bobsim/_3_StandardSim/) | Standard-test runners and workflow modules. |
| `_4_DOE` | [DOE](/documentation/bobsim/_4_DOE/) | Variant sampling, generation, compilation, execution, and aggregation. |

## Active source inventory

```text
_0_Utils/plotting/layouts/dual.py
_0_Utils/plotting/layouts/quad.py
_0_Utils/plotting/layouts/single.py
_0_Utils/plotting/layouts/triple.py
_0_Utils/plotting/plot_engine.py
_0_Utils/plotting/plot_types/signal_plot.py
_0_Utils/reporting/report_engine.py
_0_Utils/reporting/sections.py
_0_Utils/reporting/media/bob.png
_1_VisualSim/run_visual.py
_1_VisualSim/viewer.py
_1_VisualSim/visual_templates/steady_state_eval_visual.yml
_1_VisualSim/visual_templates/transient_eval_visual.yml
_1_VisualSim/visual_templates/fr_knc_visual.yml
_1_VisualSim/visual_templates/rr_knc_visual.yml
_2_EnvelopeSim/GGV/ggv_generation.py
_2_EnvelopeSim/YMD/ymd_generation.py
_3_StandardSim/SteadyStateEval/steady_state_eval_config.yml
_3_StandardSim/SteadyStateEval/steady_state_eval_sim.py
_3_StandardSim/TransientEval/transient_eval_config.yml
_3_StandardSim/TransientEval/transient_eval_sim.py
_3_StandardSim/KnC/build.mos
_3_StandardSim/KnC/knc_config.yml
_3_StandardSim/KnC/knc_schema.py
_3_StandardSim/KnC/knc_sim.py
_3_StandardSim/_fmu_runner.py
_3_StandardSim/_modelica_runner.py
_3_StandardSim/build.mos
_3_StandardSim/results/steady_state_eval_report.pdf
_3_StandardSim/results/steady_state_eval_report_metrics.csv
_3_StandardSim/results/transient_eval_report.pdf
_3_StandardSim/results/transient_eval_report_metrics.csv
_4_DOE/aggregator.py
_4_DOE/batch.py
_4_DOE/compiler.py
_4_DOE/configs/build_template.mos
_4_DOE/configs/compiler_config.yaml
_4_DOE/configs/doe_config.yaml
_4_DOE/generator.py
_4_DOE/knowledge.md
_4_DOE/results/.gitkeep
_4_DOE/run_doe.py
_4_DOE/sampler.py
_4_DOE/search.py
```

## Source-to-doc map

| Area | Notes |
|:--|:--|
| `SteadyStateEval` | Steady-state cornering workflow with radius sweep, settled-state summary, and PDF reporting. |
| `TransientEval` | Steering transient workflow with step and sine cases, frequency response, and PDF reporting. |
| `KnC` | Kinematics and compliance tooling, still documented as transitional. |
| `VisualSim` | Visual playback and rendering pipeline for saved NPZ bundles. |
| `DOE` | Experimental design pipeline scaffold. |
