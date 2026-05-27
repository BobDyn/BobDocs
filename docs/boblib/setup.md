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

BobDyn/BobLib can be used directly as a standalone Modelica package, or indirectly as
the BobDyn/BobLib submodule inside BobDyn/BobSim. For model development and debugging, clone
BobDyn/BobLib directly.

## Install Paths

BobDyn/BobLib can be used in two distinct ways:

- Pure CLI: use the OpenModelica Compiler (`omc`) and Python generation tools
  without opening a graphical tool.
- Visual OMEdit: install the OpenModelica GUI stack and open `BobLib` in OMEdit
  for package browsing, diagram inspection, parameter edits, and screenshots.

For repeatable simulation work, prefer the pure CLI path. For documentation,
debugging component wiring, or teaching the model structure, use OMEdit.

Useful official OpenModelica links:

- [OpenModelica downloads](https://openmodelica.org/download/)
- [Linux package install](https://openmodelica.org/download/download-linux/)
- [Windows installer](https://openmodelica.org/download/download-windows/)
- [macOS notes](https://openmodelica.org/download/download-mac/)
- [OMEdit user guide](https://openmodelica.org/doc/OpenModelicaUsersGuide/latest/omedit.html)

Arch users: the AUR has `openmodelica` builds. You know the drill. Note that
OMEdit drag-and-drop does not currently work with tiling window managers.

## Get BobDyn/BobLib Source

This page assumes you are working directly with the Modelica models: inspecting
package structure, debugging equations, editing records, regenerating active
vehicle source files, or opening the package in OpenModelica/OMEdit.

Clone BobDyn/BobLib directly and continue from the BobDyn/BobLib repository root:

```bash
git clone https://github.com/BobDyn/BobLib.git
cd BobLib
```

In the rest of the BobDyn/BobLib docs, "this repository root" means this `BobLib`
directory, which contains `BobLib/package.mo`, `Generation/`, and
`msl_setup.mos`.

If you want complete simulation workflows, case execution, signal extraction,
metrics, plots, reports, sensitivity studies, or DOE runs, use the
[BobDyn/BobSim documentation](/bobsim/) instead.

## Python Prerequisite

Python is not required to load the checked-in Modelica package in OMEdit or
`omc`, but it is required when regenerating active Modelica source files from
`Generation/vehicle.yml` or running generator tests.

Install Python 3 with `pip` and `venv` support, then verify:

```bash
python --version
python -m pip --version
python -m venv --help
```

On Linux distributions where `venv` or `pip` is split into separate packages,
install the matching packages for your Python version, commonly `python3-venv`
and `python3-pip`.

## OpenModelica Prerequisites

For CLI use, install:

- `omc` available on `PATH`
- a C/C++ compiler toolchain usable by OpenModelica
- `Modelica 3.2.3+maint.om` installed in the OpenModelica library manager

For OMEdit use, install the full OpenModelica GUI stack, not only the compiler.

Install the expected Modelica Standard Library version:

```bash
omc msl_setup.mos
```

`msl_setup.mos` currently contains:

```txt
installPackage(Modelica, "3.2.3+maint.om", exactMatch=true)
```

If package resolution fails, open `OMShell` or `omc`, run `getErrorString()`,
and confirm that `~/.openmodelica/libraries` contains the installed Modelica
package.

## Python Generation Environment

The checked-in Modelica package can be loaded and simulated without Python, but
new model generation requires the Python helper scripts. Create a local virtual
environment before running those scripts:

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install PyYAML pytest
```

On Windows PowerShell, activate the environment with:

```powershell
.\.venv\Scripts\Activate.ps1
```

`PyYAML` is required for generation. `pytest` is optional, but useful for
running the generator tests.

Verify:

```bash
omc --version
python --version
python -c "import yaml; print(yaml.__version__)"
```
