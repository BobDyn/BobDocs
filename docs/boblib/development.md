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
make ci
```

That target runs Python checks and all Modelica regression checks.

For narrower loops:

```bash
make lint
make test-python
make modelica-translation
make modelica-initialization
make modelica-regression
```

## Python Tests

Root Python tests live under:

```text
Tests/
```

The focused Python tests cover:

- generator output behavior
- vehicle test fixture coverage
- selected signal-level Modelica regressions through pytest

Run:

```bash
make test-python
```

## Modelica Translation Checks

`make modelica-translation` runs:

```text
Tests/modelica_translation_checks.py
```

It loads Modelica `3.2.3`, loads `BobLib/package.mo`, and runs `checkModel`.

The core checks include:

- `BobLib.Standards.VehicleSim`
- `BobLib.Standards.FourPostSim`
- `BobLib.Tests.Regression.VehicleSimAnimationOn`
- `BobLib.Tests.Regression.MF52PureSlipSmoke`
- every model fixture under `BobLib/Tests/`

Equation counts are pinned for the standards and key regression models so major
structural changes are visible in CI.

## Initialization Checks

`make modelica-initialization` runs:

```text
Tests/modelica_initialization_checks.py
```

It zero-time simulates every `BobLib.Tests` fixture, extracts compact numeric
initialization metrics, and compares them against:

```text
Tests/modelica_initialization_baseline.csv
```

This catches regressions where a model still translates but initializes to a
different state.

## Signal Regressions

`make modelica-regression` runs:

```text
Tests/test_modelica_regression.py
```

It simulates selected low-level models and checks important output signals.
Current coverage includes:

- MF52 pure-slip force and moment sanity
- bilinear aero interpolation
- CFD aero map output
- speed controller output
- curvature controller output
- VCU request and torque limiting

## Modelica Fixtures

Modelica fixtures live under:

```text
BobLib/Tests/
```

The intent is that low-level vehicle models have analogous test fixtures where
practical. Add fixtures when a subsystem grows enough behavior that translation
alone is not a meaningful guardrail.

## Generated Changes

Before committing generated changes, check:

- generated Modelica files match the active `Generation/vehicle.yml`
- `package.order` files include the active generated model names expected for this package state
- `make modelica-translation` passes
- `make modelica-initialization` passes
- `make modelica-regression` passes when tire, controller, aero, or standard behavior changed
- OMEdit can load `BobLib/package.mo` if the change touches package structure or diagram annotations
- BobSim can build `standard-build` and `standard-build-four-post` if standard entry points changed

## Screenshot Targets

Recommended screenshots for future documentation:

- `docs/images/omedit-library-browser.png` - BobLib expanded in the Libraries browser
- `docs/images/omedit-vehicle-sim-diagram.png` - `BobLib.Standards.VehicleSim` in Diagram View
- `docs/images/omedit-vehicle-wrapper-diagram.png` - active generated vehicle wrapper in Diagram View
- `docs/images/omedit-four-post-sim-diagram.png` - `BobLib.Standards.FourPostSim` in Diagram View
- `docs/images/omedit-vehicle-record-parameters.png` - active vehicle record parameter dialog

Keep screenshots small enough for the repository and prefer PNG for crisp OMEdit
UI captures.

## Useful Work Areas

Useful areas of work include:

- model robustness and initialization behavior
- low-level fixture coverage for every reusable vehicle subsystem
- additional suspension and powertrain templates
- tire model validation and additional `.tir` templates
- standard workflow coverage
- OMEdit diagram polish and screenshot documentation
- generator schema validation for `Generation/vehicle.yml`

## License

BobLib is distributed under the GNU General Public License v3.0 (GPLv3). See the
[BobLib LICENSE](https://github.com/BobDyn/BobLib/blob/main/LICENSE) file for
details.
