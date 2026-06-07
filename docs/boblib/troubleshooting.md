---
layout: doc
title: Troubleshooting
prev:
  text: 'Development'
  link: '/boblib/development'
---

# Troubleshooting

Common BobLib problems usually come from package loading, OpenModelica library
resolution, stale generated files, initialization changes, or missing Python
dependencies.

## OMEdit Cannot Find `BobLib`

Open `BobLib/package.mo` directly with `File > Open Model/Library File(s)`.
Loading the directory instead of the package file can confuse Modelica package
discovery.

## OMEdit Or `omc` Cannot Find `Modelica 3.2.3`

Run:

```bash
make modelica-deps
```

Then restart OMEdit or reload the package in a fresh `omc` session.

For a manual check:

```txt
loadModel(Modelica, {"3.2.3"});
getErrorString();
```

## Generation Scripts Cannot Import `yaml`

Install PyYAML in the Python environment used to run the scripts:

```bash
python -m pip install PyYAML
```

Use the same virtual environment for generation and tests so Python
dependencies stay consistent.

## `Generation/vehicle.yml` Looks Stale

In standalone BobLib, edit:

```text
Generation/vehicle.yml
```

Then run:

```bash
python Generation/generate_vehicle_model.py
```

When BobLib is used inside BobSim, run the BobSim build target instead:

```bash
make standard-build
```

or:

```bash
make standard-build-four-post
```

Those targets copy BobSim's root `vehicle.yml` into BobLib's generation
workspace before generating and compiling.

## Translation Counts Changed

`make modelica-translation` pins equation counts for the public standards and
key regression models. A count change is not automatically wrong, but it should
be intentional.

If the structural change is expected:

1. Review the generated Modelica diff.
2. Confirm the relevant model still initializes and simulates.
3. Update the expected count in `Tests/modelica_translation_checks.py`.
4. Run `make ci`.

## Initialization Baseline Changed

`make modelica-initialization` compares fixture initialization metrics against:

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

Then inspect the corresponding Modelica fixture under `BobLib/Tests/`.

## OMEdit Opens But Diagrams Are Incomplete

Regenerate the active package, reload `BobLib/package.mo`, and check
`getErrorString()` for missing package or class errors. If only the CLI package
was installed on Linux, install the full OpenModelica GUI package set.

If animation is unexpectedly missing, confirm the standard model has
`enableAnimation = true` for the run you are viewing. The default is false for
faster, cleaner simulation.

## Generated Simulations Translate Slowly

Full multibody vehicle models are large. Slow translation is expected,
especially for `VehicleSim` and `FourPostSim`.

Use the BobSim build targets for repeated workflow runs so compiled artifacts
are reused when inputs have not changed. Use `make modelica-translation` when
you specifically want the regression guardrail.
