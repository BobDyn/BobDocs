---
layout: doc
title: Simulation workspace
---

# Simulation workspace

The tree belongs to the active vehicle. The top-level vehicle entry opens an
overview with links for suspension motion, grip and balance, steering response,
track geometry, and lap performance.

## Tree structure

```text
Vehicle
├── Kinematics
│   └── Four post
├── Performance envelopes
│   ├── GGV
│   └── YMD
├── Vehicle response
│   └── Maneuver
│       ├── Setup
│       └── Results
│           ├── Animation
│           └── Signal Explorer 1
├── Track
│   └── Racing line
└── Laptime
    └── QSS lap
        ├── GGV input
        ├── Racing line input
        ├── Setup
        └── Results
```

The simulation entries shown here are examples. Categories are present by
default. Each simulation owns its settings and results.

## Controls

| Location | Action |
| --- | --- |
| Category **+** or context menu | Add a simulation in that category |
| Simulation name | Open its overview and Method explanation |
| Simulation name, double-click | Rename it |
| Simulation menu | Duplicate or delete that simulation |
| Setup | Edit analysis settings |
| Results | Open plots and report from the latest successful run |
| Results context menu | Add supported post-processing |
| Run log | Inspect progress, errors, or cancel a running job |

Setup and Results are siblings. Post-processing belongs under Results.
A simulation allows one Animation and multiple named Signal Explorers.
Unavailable actions state their reason on hover.

## Linked inputs

QSS Lap requires a completed GGV and a completed Racing line. The overview
shows both inputs, their source analyses, and their readiness.

A connection can be made from the input control or by dragging a source's
**Results** onto the lap input. A line in the tree shows the connection. The
linked source owns its settings. The lap cannot independently change the
GGV model fidelity or power limit.

Changed vehicle or analysis inputs can invalidate a connection. Regeneration
updates the input result. A missing or incompatible input keeps the lap from
running. The [lap guide](/bobsim/laptime) describes what each input contributes.

## Model and method

Model labels identify DynPy DOF or BobLib MBD. The overview's **Method** section
contains equations, assumptions, and source paths. GGV and YMD belong under
Performance envelopes. New standalone steady-state entries are hidden from the
catalog, while existing saved steady-state studies remain accessible.

The left pane is resizable. Replay and signal exploration stay within the
Simulation workspace. [Visualization](/bobsim/visualization) covers camera
controls and overlays.
