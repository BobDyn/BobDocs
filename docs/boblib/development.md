---
layout: doc
title: Development
prev:
  text: 'Entry Points'
  link: '/boblib/entry-points'
next:
  text: 'Troubleshooting'
  link: '/boblib/troubleshooting'
---

# Development

This page covers checks and conventions for changing BobLib itself.

## Release Gate

From the BobLib repository root:

```bash
make test PYTHON=.venv/bin/python
```

That target runs Python checks and all Modelica regression checks. During the
transition it covers both the legacy `BobLib` package and the integrated
`BobLibVehicleInterfaces` package.

For narrower loops:

```bash
make lint
make test-python PYTHON=.venv/bin/python
make modelica-translation PYTHON=.venv/bin/python
make modelica-initialization PYTHON=.venv/bin/python
make modelica-regression PYTHON=.venv/bin/python
```

## Python Tests

Root Python tests live under:

```text
Tests/
```

The focused Python tests cover:

- vehicle test fixture coverage for the legacy package
- selected signal-level Modelica regressions through pytest
- integrated-package OpenModelica smoke checks

Run:

```bash
make test-python PYTHON=.venv/bin/python
python -m pytest Tests/test_boblibvehicleinterfaces_modelica.py
```

## Modelica Translation Checks

`make modelica-translation` runs:

```text
Tests/modelica_translation_checks.py
```

It loads Modelica `4.1.0`, loads `BobLib/package.mo`, and runs `checkModel`
for the legacy standards and fixtures. Equation counts are pinned for the
legacy standards and key regression models so major structural changes remain
visible while the transition package is developed.

The integrated package smoke check lives in:

```text
Tests/test_boblibvehicleinterfaces_modelica.py
```

It loads Modelica `4.1.0`, VehicleInterfaces `2.0.2`,
`BobLibVehicleInterfaces/package.mo`, and `BobLibVehicleInterfacesTests/package.mo`,
then runs `checkModel` on the integrated standard entry points and representative
fixtures.

## Initialization Checks

`make modelica-initialization` runs:

```text
Tests/modelica_initialization_checks.py
```

It zero-time simulates every legacy `BobLib.Tests` fixture, extracts compact
numeric initialization metrics, and compares them against:

```text
Tests/modelica_initialization_baseline.csv
```

The integrated package currently uses smoke translation and representative test
fixtures while the replacement package is being finalized.

## Signal Regressions

`make modelica-regression` runs:

```text
Tests/test_modelica_regression.py
Tests/test_boblibvehicleinterfaces_modelica.py
```

Current coverage includes:

- MF52 pure-slip force and moment sanity
- bilinear aero interpolation
- CFD aero map output
- VCU bus subscription/publishing and request handling
- integrated `VehicleSim` and `FourPostSim` smoke translation
- representative integrated chassis, tire, aero, and powertrain fixtures

## Architecture Rules

The integrated package should read as though it started from VehicleInterfaces
and then built BobLib physics inside those contracts.

- VehicleInterfaces extensions should live at the first level of each public
  root package.
- Underlying BobLib physics should start one level deeper.
- Avoid duplicate public connector systems when VehicleInterfaces already
  provides the contract.
- Chassis, suspension, tire, aero, powertrain, controls, records, and utilities
  should own their local helpers rather than sharing ambiguous top-level
  dumping grounds.
- Reusable mechanics and multibody helpers belong under `Utilities.Mechanics`.
- Modelica records are the schemas and durable vehicle data.
- Tests for the integrated package live in `BobLibVehicleInterfacesTests`, not
  inside the production package.

## Before Committing

Before committing vehicle architecture or template changes, check:

- `package.order` files include the records, subsystem models, templates, and
  tests expected for the package state
- public entry points use the intended
  `BobLibVehicleInterfaces.Experiments.Standards.*` models
- `make test PYTHON=.venv/bin/python` passes
- OMEdit can load `BobLibVehicleInterfaces/package.mo` if the change touches
  package structure or diagram annotations
- BobSim can build the standard entry points if the public executable names
  changed

## OMEdit Screenshots

The maintained GUI screenshots live in the [OMEdit Workflow](/boblib/omedit-workflow)
page and are stored under `docs/public/images/omedit/`. Refresh them from a
clean OMEdit session when package loading, tree traversal, diagram layout, or
Simulation Setup defaults change. Keep screenshots small enough for the
repository and prefer PNG for crisp OMEdit UI captures.

## Useful Work Areas

Useful areas of work include:

- model robustness and initialization behavior
- low-level fixture coverage for every reusable vehicle subsystem
- further VehicleInterfaces alignment and connector cleanup
- tire model validation and additional tire records
- standard workflow coverage through BobSim
- OMEdit diagram polish and screenshot documentation

## License

BobLib is distributed under the GNU General Public License v3.0 (GPLv3). See the
[BobLib LICENSE](https://github.com/BobDyn/BobLib/blob/main/LICENSE) file for
details.
