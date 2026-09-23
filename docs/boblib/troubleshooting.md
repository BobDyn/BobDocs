---
layout: doc
title: Troubleshooting
prev:
  text: 'Development'
  link: '/boblib/development'
---

# Troubleshooting

This page lists common BobLib problems and their fixes. Most come from package
loading, library versions, template selection, or baseline changes. For what
each check does, see [Tests and Checks](/boblib/testing).

## Loading problems

### OMEdit cannot find `BobLib`

Open the `BobLib/package.mo` file with `File > Open Model/Library File(s)`. Do
not open the directory. That can confuse Modelica package discovery.

If OMEdit opened an old session or a generated build directory, close it. Then
open the repository package file from a clean session.

### OMEdit or `omc` cannot find a required library

BobLib needs Modelica Standard Library `4.1.0` and VehicleInterfaces `2.0.2`.
Install both:

```bash
make modelica-deps
```

Restart OMEdit, or load the package again in a new `omc` session. To check the
libraries by hand:

```txt
loadModel(Modelica, {"4.1.0"});
loadModel(VehicleInterfaces, {"2.0.2"});
getErrorString();
```

### OMEdit opens but diagrams are incomplete

Load `BobLib/package.mo` again and check `getErrorString()` for missing package
or class errors. On Linux, if you installed only the CLI package, install the
full OpenModelica GUI package set.

## Model problems

### A standard template looks wrong

Check which template the entry point extends:

```text
BobLib/Experiments/Standards/VehicleSim.mo
BobLib/Experiments/Standards/FourPostSim.mo
```

The templates live under `BobLib/Experiments/Standards/Templates/`. See
[Static Vehicle Templates](/boblib/generation).

If a class is missing from OMEdit or `omc`, check that the relevant
`package.order` file lists the record, subsystem model, axle assembly, or
template.

### Animation is too heavy

Set `headless = true` for the run. The standard models default to
`headless = false`, so animation geometry is on.

### Full-vehicle models translate slowly

`VehicleSim` and `FourPostSim` are large multibody models. Slow translation is
expected.

For repeated workflow runs, use the BobSim build targets. They reuse compiled
artifacts when the inputs have not changed. Use `make modelica-translation` or
`python -m pytest Tests/test_boblib_modelica.py` when you want the regression
check.

### Halfshaft compliance studies run slowly

Halfshaft compliance and damping are valid study parameters. More compliance
detail can add faster torsional modes. When you study these effects:

- reduce the default step size or output interval
- keep the solver tolerance tight enough for the target dynamics
- confirm the adaptive solver resolves the halfshaft transient and does not
  step across it

## Check failures

### Translation failed or an equation count changed

`make modelica-translation` runs `checkModel` on the standard entry points,
two regression models, and every `BobLibTest` fixture. The pytest node id names
the failing model.

A check fails on an equation count only if its `ModelCheck` entry in
`Tests/modelica_translation_checks.py` sets `expected_equations`. A structural
change is not always wrong, but make it on purpose. If the change is expected:

1. Review the Modelica diff.
2. Confirm the model still initializes and simulates.
3. Update `expected_equations` in `Tests/modelica_translation_checks.py`.
4. Run `make ci PYTHON=.venv/bin/python`.

### Smoke check failed

Run the package smoke check directly:

```bash
python -m pytest Tests/test_boblib_modelica.py -q
```

If it fails at load time, check the Modelica and VehicleInterfaces versions
first. If it fails in `checkModel`, inspect the failing class under `BobLib` or
`BobLibTest`.

### Initialization baseline changed

`make modelica-initialization` compares fixture initialization metrics against
`Tests/modelica_initialization_baseline.csv`.

If a model still translates but its metrics changed, inspect the affected
fixture first. Regenerate the baseline only after you confirm the new state is
expected:

```bash
python Tests/modelica_initialization_checks.py --update-baseline
```

### Signal regression failed

`make modelica-regression` simulates selected low-level models and checks their
output signals. Run the failing test directly:

```bash
python -m pytest Tests/test_modelica_regression.py -q
```

Then inspect the matching fixture under `BobLib/` or `Tests/BobLibTest/`.
