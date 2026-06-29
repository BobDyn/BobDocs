---
layout: doc
title: Troubleshooting
prev:
  text: 'Development'
  link: '/boblib/development'
---

# Troubleshooting

Common BobLib problems usually come from package loading, OpenModelica library
resolution, stale template selections, initialization changes, or missing Python
test dependencies.

## OMEdit Cannot Find `BobLib`

Open `BobLib/package.mo` directly with
`File > Open Model/Library File(s)`. Loading the directory instead of the
package file can confuse Modelica package discovery.

If OMEdit opened an old session or a generated build directory, close it and
open the repository package file again from a clean session.

## OMEdit Or `omc` Cannot Find Required Libraries

BobLib expects:

- Modelica Standard Library `4.1.0`
- VehicleInterfaces `2.0.2`

Run:

```bash
make modelica-deps
```

Then confirm VehicleInterfaces is installed through the OpenModelica package
manager. Restart OMEdit or reload the package in a fresh `omc` session.

For a manual check:

```txt
loadModel(Modelica, {"4.1.0"});
loadModel(VehicleInterfaces, {"2.0.2"});
getErrorString();
```

## Standard Template Looks Wrong

Check which template or base model the front-facing entry point extends:

```text
BobLib/Experiments/Standards/VehicleSim.mo
BobLib/Experiments/Standards/FourPostSim.mo
```

The available standard templates live under:

```text
BobLib/Experiments/Standards/Templates/
```

If a class is missing from OMEdit or `omc`, confirm the relevant `package.order`
file includes the record, subsystem model, axle assembly, or template model.

## Translation Counts Changed

`make modelica-translation` checks the standard entry points, key regressions,
and `BobLibTest` fixtures. A structural change is not automatically wrong, but
it should be intentional.

If the structural change is expected:

1. Review the Modelica diff.
2. Confirm the relevant model still initializes and simulates.
3. Update the expected count in `Tests/modelica_translation_checks.py`.
4. Run `make test PYTHON=.venv/bin/python`.

## BobLib Smoke Check Failed

Run the package smoke check directly:

```bash
python -m pytest Tests/test_boblib_modelica.py -q
```

If it fails at load time, check MSL and VehicleInterfaces versions first. If it
fails during `checkModel`, inspect the failing class under
`BobLib` or `BobLibTest`.

## Initialization Baseline Changed

`make modelica-initialization` compares `BobLibTest` fixture initialization
metrics against:

```text
Tests/modelica_initialization_baseline.csv
```

If a model still translates but the baseline changes, inspect the affected
fixture first. Regenerate the baseline only after confirming the new
initialization state is expected.

## Signal Regression Failed

`make modelica-regression` simulates selected low-level models and checks output
signals. Start by running the failing pytest directly:

```bash
python -m pytest Tests/test_modelica_regression.py -q
```

Then inspect the corresponding Modelica fixture under `BobLib/` or
`Tests/BobLibTest/`.

## OMEdit Opens But Diagrams Are Incomplete

Reload `BobLib/package.mo` and check `getErrorString()` for
missing package or class errors. If only the CLI package was installed on Linux,
install the full OpenModelica GUI package set.

If animation is unexpectedly heavy, set `headless=true` for the run. The public
examples default to `headless=false` so diagrams and animations are visible by
default.

## Full-Vehicle Simulations Translate Slowly

Full multibody vehicle models are large. Slow translation is expected,
especially for `VehicleSim` and `FourPostSim`.

Use the BobSim build targets for repeated workflow runs so compiled artifacts
are reused when inputs have not changed. Use `make modelica-translation` or
`python -m pytest Tests/test_boblib_modelica.py` when you specifically want the
regression guardrail.

## Halfshaft Compliance Studies Run Slowly

Halfshaft compliance and damping are valid study parameters. Increasing
compliance detail can add faster torsional modes, so refine simulation settings
when studying these effects: reduce the default step size or output interval,
keep solver tolerance tight enough for the target dynamics, and confirm the
adaptive solver is resolving the halfshaft transient instead of stepping across
it.
