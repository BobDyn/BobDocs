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

Use this path when you want to work directly on the Modelica vehicle library:
package structure, records, subsystem models, VehicleInterfaces integration,
OMEdit diagrams, or direct OpenModelica checks.

::: info Starting point
In this guide, the BobDyn/BobLib root means the repository directory created by
the clone step below. Start in that directory before running commands.
:::

## What You Need

Install these first:

- Git
- OpenModelica with OMEdit and `omc`. The checks target OpenModelica 1.26.3,
  the version in the CI container `openmodelica/openmodelica:v1.26.3-ompython`.
- Modelica Standard Library `4.1.0`
- VehicleInterfaces `2.0.2`
- Python 3.11 and GNU Make, to run the repository checks locally

BobLib can also be consumed through BobSim as a submodule, but clone BobLib
directly when you are changing the Modelica layer itself.

## Step 1: Clone BobLib

```bash
git clone https://github.com/BobDyn/BobLib.git
cd BobLib
```

The active package is:

```text
BobLib/package.mo
```

Regression and component fixtures live in `Tests/BobLibTest/package.mo`.

## Step 2: Install The OpenModelica Libraries

BobLib loads these exact versions:

```text
Modelica 4.1.0
VehicleInterfaces 2.0.2
```

From the BobLib root, install them with the repository script:

```bash
make modelica-deps
```

This runs `omc msl_setup.mos`, which calls `installPackage` with
`exactMatch=true` for both libraries. You can also run those two
`installPackage` lines by hand in the OpenModelica shell.

To check visually, open `File > System Libraries` in OMEdit and confirm that
both libraries are installed. For CLI work, use the same OpenModelica install
that OMEdit uses.

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

Start with the fast checks:

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

List every target with a description:

```bash
make help
```

::: warning The full gate is slow
`make ci` runs `make lint` and `make test`. `make test` runs the full
OpenModelica gate: translation, initialization, physics baselines, and signal
regressions for the whole package. Run it before you trust a branch or cut a
release, not on every edit. On GitHub, the same gate is the manual
`Release Gate` workflow.
:::

A failing model appears in the pytest node ID, for example
`Tests/test_modelica_translation.py::test_modelica_model_translates[BobLib.Experiments.Standards.VehicleSim]`.

CI runs on pull requests and on pushes to `main` and version tags. It does not
run on pushes to feature branches. Open a draft pull request if you want CI
results before the branch is ready for review.

## Step 5: Load BobLib In OMEdit

Open the package with `File > Open Model/Library File(s)`:

```text
BobLib/package.mo
```

Start with the standard experiment entry points in
`BobLib.Experiments.Standards`:

| Model | Use it for |
| :-- | :-- |
| `VehicleSim` | Full-vehicle maneuver benchmark |
| `FourPostSim` | Four-post suspension benchmark |
| `VehicleFMI` | Driver-input vehicle boundary for FMI export and driver-in-the-loop or software-in-the-loop work |

Use the [OMEdit Workflow](/boblib/omedit-workflow) page for the full visual
package-load sequence and maintained screenshots.

## Step 6: Know The Direct-Use Surface

For daily BobLib work, the main public surfaces are:

| Area | Use it for |
| :-- | :-- |
| `BobLib.UsersGuide` | Versioned library documentation. Where it and this site disagree, `UsersGuide` is correct. |
| `BobLib.Experiments.Standards` | Complete vehicle entry points: `VehicleSim`, `FourPostSim`, and `VehicleFMI` |
| `BobLib.Records` | Vehicle data schemas and complete vehicle definitions |
| `BobLib.Chassis`, `Aero`, `Atmospheres`, `ElectricDrives`, `Engines`, `Transmissions`, `PowerElectronics`, `Controllers`, `DriverEnvironments`, `Drivelines`, `EnergyStorage` | Vehicle subsystem contracts and BobLib physics implementations |
| `BobLib.Utilities` | Shared mechanics, math, FMI, and helper functionality |

Library changes are recorded in `CHANGELOG.md` at the BobLib root.

## Next Pages

- [BobLib Use Guide](/use-guide/boblib) for the daily model-development loop
- [BobDyn/BobLib Overview](/boblib/) for package architecture
- [CLI Workflow](/boblib/cli-workflow) for direct OpenModelica command-line work
- [OMEdit Workflow](/boblib/omedit-workflow) for visual loading and simulation
- [BobSim Startup](/startup-guide/bobsim) when you want the full workflow wrapper
