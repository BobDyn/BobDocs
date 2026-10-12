---
layout: doc
title: BobDyn/BobLib Setup
prev:
  text: 'BobDyn/BobLib'
  link: '/boblib/'
next:
  text: 'CLI Workflow'
  link: '/boblib/cli-workflow'
---

# BobDyn/BobLib Setup

This page lists what you need to work on BobLib directly: the source,
OpenModelica, the Modelica libraries, and a Python environment. For a guided
first run, see the [BobLib Startup guide](/startup-guide/boblib).

## Get the source

Clone BobLib directly for model development and debugging:

```bash
git clone https://github.com/BobDyn/BobLib.git
cd BobLib
```

"Repository root" in the BobLib docs means this `BobLib` directory. It holds:

| Path | Contents |
| :-- | :-- |
| `BobLib/package.mo` | The production Modelica package |
| `Tests/BobLibTest/package.mo` | The sibling package of regression and component fixtures |
| `Tests/` | The Python test harness and baselines |
| `makefile` | Check and dependency targets |
| `msl_setup.mos` | The Modelica library install script |

See [Package Map](/boblib/package-map) for the full layout.

## Install OpenModelica

For CLI use, you need:

- `omc` on `PATH`
- a C/C++ compiler toolchain that OpenModelica can use
- Modelica Standard Library `4.1.0`
- VehicleInterfaces `2.0.2`

For OMEdit, install the full OpenModelica GUI stack, not only the compiler.
BobLib CI uses the container `openmodelica/openmodelica:v1.26.3-ompython`.

Official OpenModelica links:

- [OpenModelica downloads](https://openmodelica.org/download/)
- [Linux package install](https://openmodelica.org/download/download-linux/)
- [Windows installer](https://openmodelica.org/download/download-windows/)
- [macOS notes](https://openmodelica.org/download/download-mac/)
- [OMEdit user guide](https://openmodelica.org/doc/OpenModelicaUsersGuide/latest/omedit.html)

Install both Modelica libraries at the exact versions:

```bash
make modelica-deps
```

This target runs `omc msl_setup.mos`, which installs Modelica `4.1.0` and
VehicleInterfaces `2.0.2` through the OpenModelica package manager.

Check the compiler:

```bash
omc --version
```

## Set up Python

The test harness needs Python with `pytest` and `ruff`. The versions are pinned
in `Tests/requirements-dev.txt`.

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip -r Tests/requirements-dev.txt
```

On Windows PowerShell, activate the environment with:

```powershell
.\.venv\Scripts\Activate.ps1
```

Check the install:

```bash
python -c "import pytest; print('ok')"
```

## Run a first check

A small first check:

```bash
make modelica-smoke PYTHON=.venv/bin/python
```

The full local gate takes longer:

```bash
make ci PYTHON=.venv/bin/python
```

See [Tests and Checks](/boblib/testing) for every target.

## Use BobLib inside BobSim

BobSim includes BobLib as a Git submodule at:

```text
_0_Utils/external/BobLib/
```

BobSim uses it as a static Modelica library. Vehicle data comes from
checked-in Modelica records. There is no Python or YAML generation step.
