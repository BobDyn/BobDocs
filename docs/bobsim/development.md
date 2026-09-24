---
layout: doc
title: Development
---

# Development

This page covers working on BobDyn/BobSim from a source checkout: clone it,
set up Docker or local Python, launch the app, build desktop releases, run the
quality checks, and fix common failures. For every `make` target, see
[Make targets](/bobsim/make-targets).

## Clone

Clone BobSim with submodules. BobLib is a submodule at
`_0_Utils/external/BobLib/`.

```bash
git clone --recurse-submodules https://github.com/BobDyn/BobSim.git
cd BobSim
```

If you cloned without submodules, run:

```bash
make init
```

Clone BobLib on its own only to work on the Modelica model layer without the
BobSim workflows.

## Docker environment

The BobSim image is based on:

```text
openmodelica/openmodelica:v1.26.3-ompython
```

The Dockerfile installs:

- Modelica Standard Library `4.1.0`
- VehicleInterfaces `2.0.2`
- Python 3.11 in a virtual environment at `/opt/venv`
- The Python packages in `requirements.txt`

```bash
make docker-build     # build the image
make docker-rebuild   # rebuild without cache
```

Open a shell in a workflow directory:

```bash
make shell
make shell-standard
make shell-envelope
make shell-opt
```

The compose services mount the repository at `/workspace` and set
`PYTHONPATH=/workspace`. They run with no network, except the `app` service.

## Launch the app

```bash
make docker-build
make app
```

Then open `http://127.0.0.1:8765`.

![BobSim app Setup view after launch, showing guided setup tabs and vehicle preview](/images/bobsim/app-setup-architecture.png)

`make app` runs the app in the `app` compose service. That service has a
network so it can publish its port. The port is published on `127.0.0.1` only.
`APP_PORT` sets the host port. The app in the container uses the image's
OpenModelica, so you do not need a local install.

`make app RUN=` runs the app in the Python environment that launched it. For
that, install `requirements.txt` locally, and install OpenModelica before you
build or run simulations from the app.

For where the app stores its data, see
[Where the app keeps its files](/bobsim/app#where-the-app-keeps-its-files).

## Local Python

Docker is the most repeatable path. Local development works if OpenModelica
and the Python dependencies are installed.

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
```

Check the basics:

```bash
python --version
omc --version
python -c "import yaml, scipy, pandas, matplotlib; print('ok')"
```

To run a make target on the host instead of in Docker, pass `RUN=`, for
example `make test RUN=`. CI runs the quality checks this way.

## Desktop release builds

BobSim desktop artifacts are PyInstaller builds. They bundle the app frontend
and the Python backend. They do not bundle generated Modelica executables,
reports, app caches, or user workspaces.

```bash
make deploy                                      # build for the current OS
make deploy-release DEPLOY_VERSION=2026.06.28    # clean, build, and package
```

Release assets are platform-native. A Linux machine builds the Linux archive,
Windows builds the Windows zip, and macOS builds the macOS zip. The
`Release Builds` GitHub Actions workflow builds all three when you push a `v*`
tag. It uploads them to the GitHub Release with `--clobber`.

Deploy outputs go to:

```text
_0_Utils/deploy/dist/BobSim/
_0_Utils/deploy/dist/releases/
```

For the deploy variables, see [Make targets](/bobsim/make-targets#app-and-deploy).

## Quality checks

```bash
make ci
```

`make ci` runs `make lint` (Ruff), `make typecheck` (MyPy), and `make test`
(pytest). GitHub Actions runs the same three targets on the host with the
BobLib submodule checked out. CI also builds the Docker image, checks
`omc --version` in it, and runs `make opt-doe-smoke`. The pytest suite
includes release-polish checks on the make target list.

## Common loops

| Work | Commands |
| :-- | :-- |
| App-based work | `make app`, then Setup, Simulation, and Archive |
| Maneuver studies | `make standard-build`, then `make standard-eval-ramp-steer`, `-steady-state`, or `-transient` |
| Suspension and K&C | `make standard-build-four-post`, `make standard-eval-four-post` |
| Envelopes | `make standard-eval-four-post`, `make envelope-all` |
| Sensitivities | `make clean-opt`, `make opt-standard`, `make opt-envelope` |
| Release check | `make standard-eval-all`, `make ci` |

Add `make envelope-all` to a release check only when you want the envelope
reports in the release package.

## Troubleshooting

| Symptom | Fix |
| :-- | :-- |
| `Executable not found` | The build directory has no compiled executable. Run `make standard-build` or `make standard-build-four-post`. |
| `Init XML not found` | The OpenModelica build did not finish. Clean the build directory and rebuild. |
| `BobLib not found` | The submodule is missing or a config path is wrong. Run `make init`. |
| Modelica package cannot load | Use Docker first. For local installs, confirm OpenModelica can find Modelica Standard Library `4.1.0` and VehicleInterfaces `2.0.2`. |
| `yaml` import fails | Run `python -m pip install -r requirements.txt` in the Python environment that runs the app or workflow. |
| `omc` is missing from the app run log | This happens only outside Docker. Use `make app`, or set the `omc` executable and library directory in the app's toolchain selector. See [OpenModelica toolchain](/bobsim/app#openmodelica-toolchain). |
| A simulation fails and no run directory remains | Set `execution.cleanup: false` in the workflow config and rerun. Then check the run directory under the build tree. |
| OptSim population mismatch | Sample count or variable dimensions changed while old variants stayed on disk. Run `make clean-opt`, then the `make opt-*` target. |
| The app page does not load | Open `http://127.0.0.1:8765`, not the `0.0.0.0` address the container prints. If the port is taken, use `make app APP_PORT=8766`. |

For app-specific problems, see
[Troubleshooting the app](/bobsim/app#troubleshooting-the-app).
