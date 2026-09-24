---
layout: doc
title: BobLib Startup
prev:
  text: 'Startup Guide'
  link: '/startup-guide/'
next:
  text: 'BobSim Startup'
  link: '/startup-guide/bobsim'
---

# BobDyn/BobLib Startup

This tutorial sets up a direct BobLib checkout. At the end, the repository
checks pass and `BobLib` loads in OMEdit. Use this path when you change the
Modelica vehicle library itself. To run simulations and reports, use
[BobSim Startup](/startup-guide/bobsim) instead.

::: info Where commands run
Run every command in this guide from the BobLib repository root, the directory
the clone step creates.
:::

## What You Need

| Tool | Notes |
| :-- | :-- |
| Git | Clone BobLib |
| OpenModelica with OMEdit and `omc` | The checks target OpenModelica 1.26.3, the version in the CI container `openmodelica/openmodelica:v1.26.3-ompython` |
| Modelica Standard Library `4.1.0` | Step 2 installs it |
| VehicleInterfaces `2.0.2` | Step 2 installs it |
| Python 3.11 and GNU Make | Run the repository checks locally |

BobSim also includes BobLib as a submodule. Clone BobLib directly when you
change the Modelica layer.

## Step 1: Clone BobLib

```bash
git clone https://github.com/BobDyn/BobLib.git
cd BobLib
```

The library package is `BobLib/package.mo`. Regression and component fixtures
are in `Tests/BobLibTest/package.mo`.

## Step 2: Install The OpenModelica Libraries

BobLib loads Modelica `4.1.0` and VehicleInterfaces `2.0.2`, exact versions.
Install them with the repository script:

```bash
make modelica-deps
```

This runs `omc msl_setup.mos`, which calls `installPackage` with
`exactMatch=true` for both libraries. You can also run those two
`installPackage` lines by hand in the OpenModelica shell.

To check, open `File > System Libraries` in OMEdit and confirm that both
libraries are installed. For CLI work, use the same OpenModelica install that
OMEdit uses.

## Step 3: Set Up Python

The test harness pins its tools in `Tests/requirements-dev.txt` (`pytest` and
`ruff`):

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install -r Tests/requirements-dev.txt
```

On Windows PowerShell, activate with `.venv\Scripts\Activate.ps1` instead.

The makefile calls `python3` by default. Pass `PYTHON=` to use a different
interpreter:

```bash
make test-python PYTHON=.venv/bin/python
```

On Windows the path is `.venv/Scripts/python.exe`.

## Step 4: Run The Quick Checks

Run the fast checks:

```bash
make lint
make test-python
make modelica-lint
make modelica-smoke
```

`make modelica-smoke` needs `omc` on your `PATH`. It translates the default
standard and regression models to confirm that the package loads and compiles.

Pull request CI runs these four checks and also `make modelica-initialization`,
which initializes every `BobLibTest` fixture and compares it to its baseline.

To list every target with a description, run `make help`.

::: warning The full gate is slow
`make ci` runs `make lint` and `make test`. `make test` runs the full
OpenModelica gate: translation, initialization, physics baselines, and signal
regressions for the whole package. Run it before you trust a branch or cut a
release, not on every edit. On GitHub, the same gate is the manual
`Release Gate` workflow.
:::

A failing model appears in the pytest node ID, for example
`Tests/test_modelica_translation.py::test_modelica_model_translates[BobLib.Experiments.Standards.VehicleSim]`.

::: details When CI runs
CI runs on pull requests and on pushes to `main` and version tags. It does not
run on pushes to feature branches. To get CI results before the branch is
ready for review, open a draft pull request.
:::

## Step 5: Load BobLib In OMEdit

Open the package with `File > Open Model/Library File(s)`:

```text
BobLib/package.mo
```

Open a standard experiment entry point in `BobLib.Experiments.Standards`:

| Model | Use it for |
| :-- | :-- |
| `VehicleSim` | Full-vehicle maneuver benchmark |
| `FourPostSim` | Four-post suspension benchmark |
| `VehicleFMI` | Driver-input vehicle boundary for FMI export and driver-in-the-loop or software-in-the-loop work |

You now have a working BobLib checkout. For the full load sequence with
screenshots, see [OMEdit Workflow](/boblib/omedit-workflow).

## Next Pages

- [BobLib Use Guide](/use-guide/boblib) for the daily model-development loop
  and the main packages
- [BobDyn/BobLib Overview](/boblib/) for package architecture
- [CLI Workflow](/boblib/cli-workflow) for direct OpenModelica command-line work
- [OMEdit Workflow](/boblib/omedit-workflow) for visual loading and simulation
- [BobSim Startup](/startup-guide/bobsim) when you want the full workflow wrapper
