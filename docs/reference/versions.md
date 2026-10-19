---
layout: doc
title: Source versions
---

# Source versions

This documentation refresh was checked against source on 19 October 2026.

| Source | Revision | Scope |
| --- | --- | --- |
| BobSim main | `22c50565e516babb0f320ca24c140e6614b4beb3` | Current workspace, analyses, and Python models |
| BobSim desktop release | `v2026.10.13` | Published bundle, which predates some current workspace changes |
| BobLib main | `ea7dda2` | Published library guides |
| BobLib local development | Uncommitted work based on `ea7dda2` | Only the explicitly labeled development preview |

BobSim pins BobLib as a submodule. That pin can differ from standalone BobLib
main. Its Modelica workflows should be interpreted against the pinned source.

## Reproducibility

A result needs its vehicle definition, simulation settings, model revision,
tire data, and linked inputs. A QSS lap also depends on the GGV and racing line
that supplied its limits and path. Re-running a parent analysis replaces the
active result, while saved runs retain their archived inputs.

Documentation review is not simulation validation. The unreleased BobLib
snapshot was inspected but not translated or regression-tested for this site
refresh. The [BobLib test guide](/boblib/testing) and BobSim's repository
`CONTRIBUTING.md` define the corresponding checks.

## Visual examples

The homepage uses captures from the October 2026 BobSim source workspace.
The homepage animations were simulated on 19 October 2026 with BobSim
`22c5056` and its pinned BobLib `1bd6d78`, using the checked-in
`EVBatInvMotDiff_DWBCStabar_DWBCStabarRecord`. OpenModelica 1.27.1 compiled
and ran the full MBD vehicle. The figures show its captured front suspension
from two vehicle-relative camera angles, with unscaled motion and synchronized
handwheel and lateral-acceleration signals. The presentation reuses the original
PyVista renderer from BobSim `943d989`, with its translucent tires and linkage
colors. Only the rendering style is historical. Geometry and signals come from
the new runs.

| Setting | Ramp | Sine |
| --- | --- | --- |
| Target speed | 15 m/s | 15 m/s |
| Handwheel amplitude | 30° | ±30° |
| Start time | 1 s | 1 s |
| Input | 4 s ramp, then hold | 0.5 Hz |
| End time | 8 s | 9 s |
| Peak mean roadwheel angle | 7.31° | 7.31° |
| Peak lateral acceleration magnitude | 18.91 m/s² | 17.93 m/s² |
| Minimum corner normal load | 141.25 N | 140.46 N |

Both runs completed with finite signals and all four tires loaded. The ramp
uses the step maneuver's finite-rise input with its early-settling stop disabled
(`der_yawVelTol = 0`) so the hold remains visible. This is an illustrative
simulation check, not a vehicle validation or a regenerated regression baseline.

The detailed MBD report examples were generated on June 6, 2026 (ramp
characterization) and May 27, 2026 (transient response). They are separate
studies from these animations. Both report workflows remain in BobSim's
`simulations/response/mbd` package.

The model-fidelity page and DynPy reports use these existing saved runs:

| Example | Saved run | Input |
| --- | --- | --- |
| 14 DOF replay and report | `20261019-134809-maneuver-review` | 15 m/s target, 2° roadwheel ramp, 8 s duration |
| 3 DOF replay | `20261016-150101-maneuver-review` | 15 m/s target, 2° roadwheel sine at 0.5 Hz, 5 s duration |
| QSS report | `20261019-143250-qss-lap-review` | Michigan track, linked 6 DOF GGV and racing line |

These are examples of the current outputs, not newly rerun validation cases.
The presentations reuse the app renderer with fixed vehicle-relative cameras,
no floor grid, and higher-contrast linkage colors. Steering and lateral
acceleration plots use the same saved signals and time cursor. Playback is
recorded in real time at the original maneuver duration.
