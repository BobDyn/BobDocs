---
layout: doc
title: Development
---

# Development

This page covers the practical operations around BobDyn/BobSim: cloning, environment
setup, make targets, local Python, cleanup, quality checks, and common failure
paths.

## Clone BobDyn/BobSim

For simulation workflows, clone BobDyn/BobSim. BobDyn/BobLib is included as a submodule.

```bash
git clone --recurse-submodules https://github.com/BobDyn/BobSim.git
cd BobSim
```

If the repository is already cloned without submodules:

```bash
make init
```

or:

```bash
git submodule update --init --recursive
```

The BobDyn/BobLib submodule lives at:

```text
_0_Utils/external/BobLib/
```

Clone BobDyn/BobLib directly only when you want to work on the low-level Modelica model
layer without the BobDyn/BobSim workflow wrapper.

## Docker Environment

BobDyn/BobSim ships with a Docker image based on:

```text
openmodelica/openmodelica:v1.26.3-ompython
```

The Dockerfile installs:

- OpenModelica runtime and package setup
- `Modelica 3.2.3+maint.om`
- Python virtual environment under `/opt/venv`
- BobDyn/BobSim Python requirements
- plotting, reporting, PyVista, and video dependencies

Build the image:

```bash
make setup
```

Rebuild from scratch:

```bash
make rebuild
```

Open an interactive BobDyn/BobSim shell:

```bash
make shell-bobsim
```

Open the DOE-focused shell:

```bash
make shell-doe
```

The compose services mount the repository into `/workspace` and set
`PYTHONPATH=/workspace`.

## Local Python Environment

The container is the most repeatable path, but local development is possible if
OpenModelica and Python dependencies are installed.

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
```

Verify the basics:

```bash
python --version
omc --version
python -c "import yaml, scipy, pandas, matplotlib; print('ok')"
```

VisualSim also needs the PyVista/Qt/VTK stack and FFmpeg support through
ImageIO.

## Make Target Reference

Setup:

| Target | Action |
| :-- | :-- |
| `make init` | Initialize/update git submodules |
| `make setup` | Build the Docker image |
| `make rebuild` | Rebuild the Docker image without cache |

Shells:

| Target | Action |
| :-- | :-- |
| `make shell-bobsim` | Open `/workspace` in the BobDyn/BobSim service |
| `make shell-doe` | Open `/workspace/_4_OptSim` in the DOE service |

Generation and build:

| Target | Action |
| :-- | :-- |
| `make sync-vehicle-yaml` | Copy `vehicle.yml` into BobDyn/BobLib's generation workspace |
| `make build-records` | Generate active vehicle records |
| `make build-axle-models` | Generate active axle models |
| `make build-vehicle-sim` | Generate/build `BobLib.Standards.VehicleSim` |
| `make build-standard` | Alias path for syncing and building the vehicle sim |
| `make build-four-post-sim` | Generate/build `BobLib.Standards.FourPostSim` |
| `make build-four-post` | Alias path for syncing and building the four-post sim |

Run workflows:

| Target | Action |
| :-- | :-- |
| `make steady-state-eval` | Run SteadyStateEval |
| `make transient-eval` | Run TransientEval |
| `make four-post-eval` | Run FourPostEval |
| `make ggv-envelope` | Run GGV envelope generation |
| `make ymd-envelope` | Run YMD envelope generation |
| `make vehicle-review` | Run the active vehicle review report |
| `make sim-doe` | Run the OptSim DOE pipeline in Docker |
| `make sim-standard-sensitivities` | Run the StandardSim one-factor sensitivity DOE |
| `make sim-envelope-sensitivities` | Run EnvelopeSim sensitivities from the OptSim variant set |

DOE visualization PDFs are built after the relevant DOE or sensitivity run.
Open the DOE shell and build the visual reports directly:

```bash
make shell-doe
python pipeline/plot_results.py
python pipeline/response_surfaces.py
python pipeline/plot_envelope_sensitivities.py
python pipeline/plot_sensitivity_tornado.py --source standard
python pipeline/plot_sensitivity_tornado.py --source envelope
```

Cleanup:

| Target | Action |
| :-- | :-- |
| `make clean-doe` | Clear OptSim population/results while preserving `.gitkeep` |
| `make clean-build` | Empty StandardSim build directories |
| `make clean-results` | Empty StandardSim result directories |
| `make clean` | Remove Python caches, broad simulation outputs, and common local artifacts |

## Quality Checks

BobDyn/BobSim includes Ruff and MyPy configuration.

```bash
python -m ruff check .
python -m mypy
```

`pyproject.toml` configures MyPy over the main BobDyn/BobSim package directories, and
`ruff.toml` currently selects `E` and `F` rules with a 120-character line
length.

There are no broad repository-level pytest tests documented in the current
checkout. BobDyn/BobLib generator tests live under the BobDyn/BobLib submodule and are covered
in the [BobDyn/BobLib documentation](/boblib/).

## Recommended Development Loops

For standard maneuver work:

```bash
make build-vehicle-sim
make steady-state-eval
make transient-eval
```

For suspension/K&C work:

```bash
make build-four-post-sim
make four-post-eval
make vehicle-review
```

For envelope work:

```bash
make four-post-eval
make ggv-envelope
make ymd-envelope
make vehicle-review
```

For DOE work:

```bash
make clean-doe
make sim-doe
```

## Troubleshooting

`Executable not found`

The workflow build directory does not contain the compiled OpenModelica
executable. Run `make build-vehicle-sim` or `make build-four-post-sim`.

`Init XML not found`

The OpenModelica build did not complete cleanly. Clean the build directory and
rebuild.

`BobLib not found`

The submodule is missing or the path in a config is wrong. Run:

```bash
make init
```

`Modelica package cannot load`

Confirm OpenModelica can find `Modelica 3.2.3+maint.om`. The Docker image
installs it during build. For local installs, use the BobDyn/BobLib `msl_setup.mos`
helper or OpenModelica's package manager.

`yaml` import fails`

Install BobDyn/BobSim requirements in the Python environment that is running the
workflow:

```bash
python -m pip install -r requirements.txt
```

`Simulation fails but no run directory remains`

Set `execution.cleanup: false` in the workflow config and rerun. Then inspect
the retained run directory under the build tree.

`DOE population mismatch`

Sample count or variable dimensions changed while old variants remained on
disk. Run:

```bash
make clean-doe
make sim-doe
```

`Visual render fails on import`

Install the visualization dependencies from `requirements.txt`, and prefer the
Docker shell if local Qt/VTK/PyVista packages are difficult to align.
