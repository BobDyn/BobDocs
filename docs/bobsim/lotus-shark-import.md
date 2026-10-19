---
layout: doc
title: Lotus SHARK import
---

# Lotus SHARK import

A SHARK `.shk` file supplies single-side suspension geometry in millimetres.
It does not contain the vehicle's mass, aero, tire, or powertrain definition.
The importer merges geometry into a copy of a baseline vehicle.

## Import

From a configured BobSim Python environment:

```bash
python -m common.shark_import suspension.shk -o imported_vehicle.yml
```

`--baseline vehicle.yml` selects the starting vehicle. `--name` sets its name.
The importer checks required hardpoints, axle selection, and agreement with
the baseline x/y frame. Single-side geometry is mirrored across the vehicle.

Anti-roll-bar geometry is dropped by default because SHARK does not supply it.
`--keep-arb` retains a coherent baseline bar. An incompatible pickup is rejected.

## Vertical datum

The rolling-radius field does not establish the vertical datum on its own.
The importer writes a `.datum.json` sidecar keyed to the geometry. Unverified
vertical references withhold z-dependent overlay metrics. Editing the geometry
invalidates a stale verification.

A missing roll-center or jacking curve can therefore indicate an unresolved
reference frame, not a failed kinematics solve.

## Comparison report

```bash
make shark-overlay SHARK=suspension.shk
```

The report compares imported and baseline kinematics over jounce, roll, and
front rack displacement. Steering is plotted against rack travel in mm.
Outputs are `shark_overlay_report.pdf` and `shark_overlay_report.md` under
`simulations/mbd/generated_results/`.

`ARGS=--four-post` adds the experimental Modelica jacking comparison. It needs
the Docker-backed Linux build. The comparison holds baseline actuation force
elements constant so geometry differences can be interpreted separately.

The implementation is in `common/shark_import.py` and
`simulations/response/mbd/four_post/shark_overlay_report.py`.
