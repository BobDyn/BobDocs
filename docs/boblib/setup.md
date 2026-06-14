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

BobDyn/BobLib can be used directly as a standalone Modelica package, or
indirectly as the BobLib submodule inside BobSim. For model development and
debugging, clone BobLib directly.

## Get BobLib Source

Clone BobLib directly and continue from the repository root:

```bash
git clone https://github.com/BobDyn/BobLib.git
cd BobLib
```

In the rest of the BobLib docs, "repository root" means this `BobLib`
directory, which currently contains both packages during the transition:

```text
BobLib/package.mo
BobLibVehicleInterfaces/package.mo
BobLibVehicleInterfacesTests/package.mo
Tests/
makefile
msl_setup.mos
```

`BobLibVehicleInterfaces` is the integrated replacement package. The older
`BobLib` package remains available until the final rename.

## OpenModelica Prerequisites

For CLI use, install:

- `omc` available on `PATH`
- a C/C++ compiler toolchain usable by OpenModelica
- Modelica Standard Library `4.1.0`
- VehicleInterfaces `2.0.2`

For OMEdit use, install the full OpenModelica GUI stack, not only the compiler.

Useful official OpenModelica links:

- [OpenModelica downloads](https://openmodelica.org/download/)
- [Linux package install](https://openmodelica.org/download/download-linux/)
- [Windows installer](https://openmodelica.org/download/download-windows/)
- [macOS notes](https://openmodelica.org/download/download-mac/)
- [OMEdit user guide](https://openmodelica.org/doc/OpenModelicaUsersGuide/latest/omedit.html)

Install the expected Modelica Standard Library package:

```bash
make modelica-deps
```

That target runs `omc msl_setup.mos`. VehicleInterfaces `2.0.2` must also be
installed in the OpenModelica package manager for the integrated package checks.

Verify:

```bash
omc --version
```

## Python Environment

Python is required for the regression harness. Create a local environment:

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install pytest ruff
```

On Windows PowerShell:

```powershell
.\.venv\Scripts\Activate.ps1
```

Verify:

```bash
python --version
python -c "import pytest; print('ok')"
```

## First Health Check

Run the full local release gate:

```bash
make test PYTHON=.venv/bin/python
```

For a smaller first check:

```bash
make modelica-translation PYTHON=.venv/bin/python
python -m pytest Tests/test_boblibvehicleinterfaces_modelica.py
```

The full test target verifies the legacy package and the integrated
`BobLibVehicleInterfaces` package during the transition.

## BobSim Submodule Path

When BobLib is used inside BobSim, it lives at:

```text
_0_Utils/external/BobLib/
```

In that workflow, BobSim consumes BobLib as a static Modelica library. Vehicle
architecture data is moving into checked-in Modelica records rather than a
Python/YAML generation step.
