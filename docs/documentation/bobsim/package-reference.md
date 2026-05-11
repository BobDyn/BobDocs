# BobSim package reference

This page maps the current BobSim source tree into documentation areas.

## Top-level areas

| Path | Documentation | Purpose |
|:--|:--|:--|
| `_0_Utils` | [Utilities](./utils/) | Shared plotting and reporting engines. |
| `_1_VisualSim` | [Visualization](./visualsim/) | PyVista/Qt visualizer and MP4 rendering tools. |
| `_2_EnvelopeSim` | [Envelopes](./envelopes/) | GGV and YMD envelope generation. |
| `_3_StandardSim` | [StandardSim](./standardsim/) | Standard-test runners and workflow modules. |
| `_4_DOE` | [DOE](./doe/) | Variant sampling, generation, compilation, execution, and aggregation. |

## Source inventory

```text
.gitignore
.gitmodules
Dockerfile
_0_Utils/plotting/layouts/dual.py
_0_Utils/plotting/layouts/quad.py
_0_Utils/plotting/layouts/single.py
_0_Utils/plotting/layouts/triple.py
_0_Utils/plotting/plot_engine.py
_0_Utils/plotting/plot_types/signal_plot.py
_0_Utils/reporting/media/bob.png
_0_Utils/reporting/report_engine.py
_0_Utils/reporting/sections.py
_1_VisualSim/BobLib.Standards.ISO7401_run_5_visual.npz
_1_VisualSim/results/fr_knc_test.mp4
_1_VisualSim/results/iso4138_test.mp4
_1_VisualSim/results/iso7401_test.mp4
_1_VisualSim/run_visual.py
_1_VisualSim/viewer.py
_1_VisualSim/visual_templates/fr_knc_visual.yml
_1_VisualSim/visual_templates/iso4138_visual.yml
_1_VisualSim/visual_templates/iso7401_visual.yml
_1_VisualSim/visual_templates/rr_knc_visual.yml
_2_EnvelopeSim/GGV/ggv_generation.py
_2_EnvelopeSim/YMD/ymd_generation.py
_3_StandardSim/ISO4138/iso4138_config.yml
_3_StandardSim/ISO4138/iso4138_sim.py
_3_StandardSim/ISO7401/iso7401_config.yml
_3_StandardSim/ISO7401/iso7401_sim.py
_3_StandardSim/KnC/build.mos
_3_StandardSim/KnC/knc_config.yml
_3_StandardSim/KnC/knc_schema.py
_3_StandardSim/KnC/knc_sim.py
_3_StandardSim/_fmu_runner.py
_3_StandardSim/_modelica_runner.py
_3_StandardSim/build.mos
_3_StandardSim/results/iso4138_report.pdf
_3_StandardSim/results/iso4138_report_metrics.csv
_3_StandardSim/results/iso7401_report.pdf
_3_StandardSim/results/iso7401_report_metrics.csv
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
abishek.py
docker-compose.yml
knowledge.md
makefile
pyproject.toml
requirements.txt
ruff.toml
```
