---
layout: doc
title: LotusShark Import
---

# LotusShark Import

Lotus SHARK is an external suspension-kinematics tool. Its export file
(`.shk`, plain text) describes one corner of one axle in millimetres: a
`TEMP_SETTINGS` block naming hardpoints, a suspension geometry block of xyz
triples, an optional `TITLES` annotation block, and a trailing scalar
interpreted as the loaded rolling radius. A SHARK file carries no mass, aero,
tyre, or powertrain data, so importing one only merges suspension hardpoints,
the steering rack pickup, and pushrod/bellcrank actuation geometry into a copy
of an existing `vehicle.yml`.

The importer and overlay report live under:

```text
_0_Utils/shark_import.py
_3_StandardSim/FourPostEval/shark_overlay_report.py
```

## Importing a SHARK File

```bash
python -m _0_Utils.shark_import <shark.shk> -o <output vehicle.yml> \
  [--baseline] [--datum-baseline] [--name] [--keep-arb]
```

or via the Docker-backed make target:

```bash
make shark-overlay SHARK=<shark.shk>
```

The import step:

1. Parses named hardpoints from the `.shk` file.
2. Determines axle (front/rear) by wheel-centre proximity.
3. Verifies the SHARK file and the baseline `vehicle.yml` share a coordinate
   frame, within 0.05 mm in x/y.
4. Merges the suspension hardpoints, steering rack pickup, and actuation
   geometry into a copy of the baseline vehicle.
5. Writes the merged `vehicle.yml`, plus a `<name>.datum.json` sidecar
   recording per-axle vertical-datum verdicts, keyed by a geometry digest so
   edited geometry invalidates a stale verdict.

The importer refuses to guess rather than produce a questionable vehicle. It
raises an error when:

- Required hardpoints are missing from the SHARK file.
- The file describes both sides of centreline (asymmetric geometry isn't
  supported; `vehicle.yml` stores one side and mirrors by Y sign flip).
- The SHARK and baseline frames don't agree.
- A carried-over anti-roll-bar pickup becomes geometrically incoherent with a
  new bellcrank pivot.

The anti-roll bar is dropped by default, since SHARK carries no ARB data and
ARB plays no part in the kinematic solve. Pass `--keep-arb` to retain the
baseline's ARB, subject to the coherence check above.

### The Vertical Datum Problem

X/Y frame agreement does not license trusting Z. A SHARK export's rolling
radius scalar is ambiguous between a loaded vs. unloaded interpretation, so a
small Z discrepancy against the baseline can mean either a units/reference
mismatch or a genuine ride-height change — it can't be resolved from the file
alone.

When the datum can't be resolved, every Z-dependent curve (roll-centre
height/migration/z, front-view swing arm, four-post jacking metrics) is
withheld from the overlay report rather than shown as unverified. This
fail-closed check runs on every overlay, not just on first import, so it also
catches geometry edited after the datum was last verified.

## Overlay Report

The overlay report plots the imported ("variant") car's suspension kinematic
curves against the tracked baseline car, for both front and rear axles, across
bump and roll sweeps — the same curve set as the app's own kinematics view
(camber, toe, roll centre, instant centres, and related metrics).

```bash
make shark-overlay SHARK=<shark.shk>
```

Output:

```text
_3_StandardSim/generated_results/shark_overlay_report.pdf
_3_StandardSim/generated_results/shark_overlay_report.md
```

The PDF includes a cover/notes page, paginated summary tables (design-position
values, working-range slope, peak delta, and significance ranked against
configurable tolerances via `--tol-deg`/`--tol-mm`), a headline grid of curves
that exceed tolerance, and a full appendix grid of every curve/axle pair. The
Markdown summary mirrors the same tables.

### Four-Post Section

Pass `--four-post` to add an experimental jacking-geometry comparison
(anti-dive, anti-squat, anti-roll percentages), gated by the same datum check
as the kinematic curves. This section requires the Linux-container-built
Modelica binary and fails fast with a clear message on native Windows — run it
through the Docker-backed target instead:

```bash
make shark-overlay SHARK=<shark.shk> ARGS=--four-post
```

Differing actuation force elements (springs, dampers, ARB rate) between the
baseline and variant would otherwise confound a geometry-only four-post
comparison. The report holds the baseline's actuation force elements constant
so any reported delta is attributable to hardpoint changes alone, and flags
any actuation difference it can't hold constant.

## Limitations

- Single-side SHARK exports only; asymmetric left/right geometry is rejected.
- No mass, aero, tyre, or powertrain data is imported — only suspension
  kinematics.
- Anti-roll bar geometry is not imported and is dropped unless `--keep-arb` is
  passed against a coherent baseline ARB.
- Z-dependent curves are withheld whenever the vertical datum can't be
  verified, even if the rest of the geometry imported cleanly.
- The four-post section requires the Docker-backed Linux build; it does not
  run on native Windows.
