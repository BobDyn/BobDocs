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

## Install Paths

BobLib can be used in two distinct ways:

- Pure CLI: use `omc`, make targets, and Python generation tools.
- Visual OMEdit: open `BobLib/package.mo` for package browsing, diagram
  inspection, parameter edits, manual simulation, and screenshots.

For repeatable regression work, prefer the CLI path. For diagram polish and
model-structure debugging, use OMEdit.

Useful official OpenModelica links:

- [OpenModelica downloads](https://openmodelica.org/download/)
- [Linux package install](https://openmodelica.org/download/download-linux/)
- [Windows installer](https://openmodelica.org/download/download-windows/)
- [macOS notes](https://openmodelica.org/download/download-mac/)
- [OMEdit user guide](https://openmodelica.org/doc/OpenModelicaUsersGuide/latest/omedit.html)

## Get BobLib Source

Clone BobLib directly and continue from the repository root:

```bash
git clone https://github.com/BobDyn/BobLib.git
cd BobLib
```

In the rest of the BobLib docs, "repository root" means this `BobLib`
directory, which contains:

```text
BobLib/package.mo
Generation/
Tests/
makefile
msl_setup.mos
```

If you want complete vehicle-analysis workflows, use the
[BobDyn/BobSim documentation](/bobsim/) instead.

## OpenModelica Prerequisites

For CLI use, install:

- `omc` available on `PATH`
- a C/C++ compiler toolchain usable by OpenModelica
- `Complex`, `ModelicaServices`, and `Modelica` `3.2.3+maint.om`

For OMEdit use, install the full OpenModelica GUI stack, not only the compiler.

Install the expected Modelica libraries:

```bash
make modelica-deps
```

That target runs `omc msl_setup.mos`, which installs the Modelica Standard
Library packages expected by the test harness.

Verify:

```bash
omc --version
```

## Python Environment

Python is required for generation and the regression harness. Create a local
environment:

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install PyYAML pytest ruff
```

On Windows PowerShell:

```powershell
.\.venv\Scripts\Activate.ps1
```

Verify:

```bash
python --version
python -c "import yaml, pytest; print('ok')"
```

## First Health Check

Run the full local release gate:

```bash
make ci
```

For a smaller first check:

```bash
make modelica-translation
```

That verifies OpenModelica can load BobLib, translate the public standards, and
translate the `BobLib.Tests` fixtures.

## BobSim Submodule Path

When BobLib is used inside BobSim, it lives at:

```text
_0_Utils/external/BobLib/
```

In that workflow, BobSim owns the repo-root `vehicle.yml` and its standard
build targets copy that file into BobLib's generation workspace automatically.
