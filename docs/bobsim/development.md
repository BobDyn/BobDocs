---
layout: doc
title: Development
---

# Development

This page covers the practical operations around BobDyn/BobSim: cloning,
app launch, environment setup, make targets, local Python, cleanup, quality
checks, and common failure paths.

## Clone

For simulation workflows, clone BobSim with submodules. BobLib is included as a
submodule.

```bash
git clone --recurse-submodules https://github.com/BobDyn/BobSim.git
cd BobSim
```

If the repository is already cloned without submodules:

```bash
make init
```

The BobLib submodule lives at:

```text
_0_Utils/external/BobLib/
```

Clone BobLib directly only when you want to work on the low-level Modelica model
layer without the BobSim workflow wrapper.

## App Launch

The app is the normal local entry point for setup, simulation launch, and result
review.

From the BobSim root:

```bash
make app
```

Then open:

```text
http://127.0.0.1:8765
```

![BobSim app Setup view after launch, showing guided setup tabs and vehicle preview](/images/bobsim/app-setup-architecture.png)

The app runs in the Python environment that launched it. Install
`requirements.txt` locally before using `make app`; install OpenModelica locally
before building or running simulations from the app.

## Docker Environment

BobSim ships with a Docker image based on:

```text
openmodelica/openmodelica:v1.26.3-ompython
```

The Dockerfile installs:

- OpenModelica runtime
- Modelica Standard Library `4.1.0`
- VehicleInterfaces `2.0.2`
- Python virtual environment under `/opt/venv`
- BobSim Python requirements
- plotting, reporting, PyVista, and video dependencies

Build the image:

```bash
make docker-build
```

Rebuild from scratch:

```bash
make docker-rebuild
```

Open shells:

```bash
make shell
make shell-standard
make shell-envelope
make shell-opt
```

The compose services mount the repository into `/workspace` and set
`PYTHONPATH=/workspace`.

## Local Python

The container is the most repeatable path, but local development is possible if
OpenModelica and Python dependencies are installed.

BobSim commonly uses the repository-local virtual environment:

```bash
source .venv/bin/activate
python -m pip install -r requirements.txt
```

To create it from scratch:

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

Setup and shell targets:

| Target | Action |
| :-- | :-- |
| `make init` | Initialize/update git submodules |
| `make app` | Launch the local BobSim browser app |
| `make docker-build` | Build the Docker image |
| `make docker-rebuild` | Rebuild the Docker image without cache |
| `make shell` | Open the main BobSim shell |
| `make shell-standard` | Open a StandardSim shell |
| `make shell-envelope` | Open an EnvelopeSim shell |
| `make shell-opt` | Open an OptSim shell |

StandardSim targets:

| Target | Action |
| :-- | :-- |
| `make standard-build` | Build the integrated `VehicleSim` entry point |
| `make standard-build-four-post` | Build the integrated `FourPostSim` entry point |
| `make standard-eval-ramp-steer` | Run RampSteerEval |
| `make standard-eval-steady-state` | Run SteadyStateEval |
| `make standard-eval-transient` | Run TransientEval |
| `make standard-eval-four-post` | Run FourPostEval |
| `make standard-eval-all` | Run all standard evaluations |

Envelope and OptSim targets:

| Target | Action |
| :-- | :-- |
| `make envelope-ggv` | Run GGV envelope generation |
| `make envelope-ymd` | Run YMD envelope generation |
| `make envelope-all` | Run all envelope outputs |
| `make opt-standard` | Run StandardSens pre-screen sensitivities |
| `make opt-envelope` | Run EnvelopeSens sensitivities |
| `make opt-refined` | Run StandardSens refined response surfaces |

Quality and cleanup targets:

| Target | Action |
| :-- | :-- |
| `make lint` | Run Ruff checks |
| `make typecheck` | Run MyPy checks |
| `make test` | Run pytest regression checks |
| `make ci` | Run lint, typecheck, and tests |
| `make clean` | Remove Python and tool caches |
| `make clean-standard` | Remove StandardSim build/result artifacts |
| `make clean-envelope` | Remove EnvelopeSim build/result artifacts |
| `make clean-opt` | Remove OptSim build/result artifacts |
| `make clean-all` | Run all cleanup targets |

## Quality Checks

Run the release gate:

```bash
make ci
```

That expands to:

```bash
make lint
make typecheck
make test
```

GitHub Actions runs the same targets with the BobLib submodule checked out
recursively. The pytest suite includes release-polish checks that assert the
public make target language stays coherent.

## Recommended Loops

For normal browser-based work:

```bash
make app
```

Then use `Setup`, `Simulation`, and `Results`.

![BobSim app Simulation catalog used for normal browser-based workflow runs](/images/bobsim/app-simulation-catalog.png)

For standard maneuver work:

```bash
make standard-build
make standard-eval-ramp-steer
make standard-eval-steady-state
make standard-eval-transient
```

For suspension/K&C work:

```bash
make standard-build-four-post
make standard-eval-four-post
```

For envelope work:

```bash
make standard-eval-four-post
make envelope-all
```

For sensitivity work:

```bash
make clean-opt
make opt-standard
make opt-envelope
```

For a public-release check:

```bash
make standard-eval-all
make ci
```

Add `make envelope-all` when you intentionally want the optional envelope
artifacts as part of the release package.

## Troubleshooting

`Executable not found`

The workflow build directory does not contain the compiled OpenModelica
executable. Run `make standard-build` or `make standard-build-four-post`.

`Init XML not found`

The OpenModelica build did not complete cleanly. Clean the matching build
directory and rebuild.

`BobLib not found`

The submodule is missing or the path in a config is wrong. Run:

```bash
make init
```

`Modelica package cannot load`

Use the Docker path first. For local installs, confirm OpenModelica can find
Modelica Standard Library `4.1.0` and VehicleInterfaces `2.0.2`.

`yaml` import fails

Install BobSim requirements in the Python environment that is running the app or
workflow:

```bash
python -m pip install -r requirements.txt
```

`omc` is missing from the app run log

Install OpenModelica locally, or use the Docker-backed CLI workflow targets.

`Simulation fails but no run directory remains`

Set `execution.cleanup: false` in the workflow config and rerun. Then inspect
the retained run directory under the build tree.

`OptSim population mismatch`

Sample count or variable dimensions changed while old variants remained on
disk. Run:

```bash
make clean-opt
```

then rerun the relevant `make opt-*` target.

`Visual render fails on import`

Install the visualization dependencies from `requirements.txt`, and prefer the
Docker shell if local Qt/VTK/PyVista packages are difficult to align.
