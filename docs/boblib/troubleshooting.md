---
layout: doc
title: Troubleshooting
prev:
  text: 'Development'
  link: '/boblib/development'
---

# Troubleshooting

Common BobDyn/BobLib problems usually come from package loading, OpenModelica library
resolution, stale generated files, or missing Python dependencies.

## OMEdit Cannot Find `BobLib`

Open `BobLib/package.mo` directly with `File > Open Model/Library File(s)`.
Loading the directory instead of the package file can confuse Modelica package
discovery.

## OMEdit Or `omc` Cannot Find `Modelica 3.2.3`

Run:

```bash
omc msl_setup.mos
```

Then restart OMEdit or reload the package in a fresh `omc` session.

## Generation Scripts Cannot Import `yaml`

Install PyYAML in the Python environment used to run the scripts:

```bash
python -m pip install PyYAML
```

Use the same virtual environment for generation and generator tests so Python
dependencies stay consistent.

## `Generation/vehicle.yml` Looks Stale

When BobDyn/BobLib is used inside BobDyn/BobSim, update the staged generation file from the
BobDyn/BobSim root:

```bash
make sync-vehicle-yaml
```

Then rerun:

```bash
python _0_Utils/external/BobLib/Generation/generate_vehicle_model.py
```

## OMEdit Opens But Diagrams Are Incomplete

Regenerate the active package, reload `BobLib/package.mo`, and check
`getErrorString()` for missing package or class errors. If only the CLI package
was installed on Linux, install the full OpenModelica GUI package set.

## Generated Simulations Translate Slowly

The standard models include OpenModelica command-line annotations for matching,
index reduction, initialization diagnostics, and larger tearing systems. Slow
translation is expected for full multibody vehicle models; reuse compiled build
artifacts for repeat runs when possible.
