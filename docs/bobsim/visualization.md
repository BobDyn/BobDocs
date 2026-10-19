---
layout: doc
title: Animation and signal exploration
---

# Animation and signal exploration

Visualization is part of the Simulation workspace. The parent simulation
supplies the saved result. Animation and Signal Explorer do not need a second
source selection.

## Animation

[![BobSim 14 DOF replay with vehicle geometry and per-corner grip displays](/images/bobsim/replay-14dof.png)](/images/bobsim/replay-14dof.png)

The current viewer displaying a saved October 2026 run.
[Playable exports](/#animations) show both 3 DOF and 14 DOF representations.

Supported transient results use the vehicle view with the states retained by
the model. A 3 DOF vehicle has planar body motion and four tire contacts.
Body heave, roll, pitch, wheel rotation dynamics, and unsprung vertical motion
appear according to the selected fidelity.

| Control | Behavior |
| --- | --- |
| Drag | Orbit |
| Ctrl + drag or middle drag | Pan |
| Scroll or pinch | Zoom toward the cursor |
| Home | Initial camera view |
| View selector | Isometric, bird's eye, front, or side |
| World frame | Camera orientation stays in the world frame |
| Vehicle frame | Camera follows vehicle position and heading |
| Play/pause and scrubber | Playback and selected time |
| Display settings | Available paths, forces, loads, and other overlays |

Vehicle-frame front view keeps the vehicle facing the same screen direction
through a turn while retaining visible body motion. Tire-force dots and grip
utilization use the run's archived tire information where available. The
friction ellipses are approximate peak-grip estimates.

## Static analyses

GGV and YMD describe operating-point maps. QSS Lap describes a spatial speed
profile. Their primary views are static plots or track maps, not invented
transient animations. Racing line Results show the boundaries and saved path.

## Signal Explorer

The X axis can be time or another saved signal. Multiple Y signals can be
selected, and **Color by** supplies a third variable for parametric plots.
Each explorer can have its own name and selection. Units and available signals
come from the run.

## Modelica scene captures

The command-line capture workflows remain available for detailed BobLib scenes:

```bash
make visual-demo
make visual-maneuver
make visual-rig
```

`visual-demo` creates a synthetic scene without a Modelica run. Captured scenes
are distinct from ordinary result histories and appear under Simulation's
captured-scene support. Files live in `visualization/results/`.

Source: [visualization](https://github.com/BobDyn/BobSim/tree/main/visualization)
and [app replay](https://github.com/BobDyn/BobSim/blob/main/app/visual.py).
