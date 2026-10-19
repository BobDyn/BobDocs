---
layout: doc
title: Vehicle setup
---

# Vehicle setup

The active vehicle supplies the physical inputs to every analysis. Simulation
Setup contains the operating conditions, such as speed or steering timing.
A linked QSS Lap inherits physical envelope settings from its GGV.

## Setup sections

| Section | Definition |
| --- | --- |
| Architecture | Front and rear axle actuation: direct, bellcrank, or bellcrank with stabilizer bar |
| Geometry | Suspension hardpoints, rack pickup, and actuation geometry |
| Tires | Front and rear tire definitions, wheel properties, static toe and camber |
| Suspension | Spring force curves, damper force curves, and stabilizer properties |
| Mass | Component masses, centers of gravity, and inertia tensors |
| Aero | Ride-height reference points and force and moment maps |
| Powertrain | Drive, torque, speed, and power limits |

The front and rear selectors identify which axle is being edited. The stored
geometry describes the left side. BobSim mirrors it to the right.

## Coordinates and units

The vehicle frame is right-handed: **x forward, y left, z up**. Geometry is
stored in metres. The default longitudinal origin is the front axle. An
imported geometry's vertical datum must be established before using
height-dependent metrics.

YAML field suffixes identify units, such as `_m`, `_kg`, `_deg`, and
`_kg_m2`. UI fields can display millimetres or degrees while the underlying
solver uses SI units. Rack displacement, roadwheel angle, and handwheel angle
are different inputs.

## Geometry editing

<figure class="app-figure">
  <a href="/images/bobsim/geometry-current.png" target="_blank" rel="noreferrer"><img src="/images/bobsim/geometry-current.png" alt="Hardpoint coordinates beside the suspension geometry in the BobSim editor" width="1440" height="960" loading="lazy" /></a>
  <figcaption>Geometry editor, October 2026 source workspace. Image opens at full size.</figcaption>
</figure>

A selected point can move along its highlighted axis. **Tab** cycles axes
while a point is selected. Empty-space clicks, **Esc**, or the close control
clear the selection. **Ctrl/Cmd + Z** undoes edits and **Ctrl/Cmd + Shift + Z**
redoes them.

The camera home control restores the initial view. Expand gives the geometry
and kinematics plots more space. Kinematics plots can share an independent
variable and close individually. Steering sweeps use rack displacement in mm.

Bellcrank pickup assignment uses draggable, named elements with a fixed legend.
Pickup order affects the displayed outline and should match the intended
physical arrangement.

## Tires and suspension

<figure class="app-figure">
  <a href="/images/bobsim/tires-current.png" target="_blank" rel="noreferrer"><img src="/images/bobsim/tires-current.png" alt="Front tire inputs beside the combined-slip friction ellipse" width="1440" height="960" loading="lazy" /></a>
  <figcaption>Tire setup, October 2026 source workspace. Image opens at full size.</figcaption>
</figure>

Front and rear tires can use different MF5.2 data. Tire views select the axle,
pure or combined slip, and force or moment channel. The model includes
$F_x$, $F_y$, $M_x$, $M_y$, and $M_z$.

Spring tables describe force versus displacement. Damper tables describe force
versus velocity. They are constitutive curves, not a second independent linear
rate to tune alongside the same curve. The selected model determines how these
inputs are reduced or used in the simulation.

## Aero reference points

Ride-height reference points are physical locations in the vehicle frame.
They are not automatically wheel-center heights. The 3D preview helps check
placement. Front and rear ride-height grids define the map axes, while the
selected force or moment channel changes the table values.

Aero force and moment definitions must use the same reference convention as
the vehicle data. Moving a force application point without transforming its
moment changes the applied wrench.

## Saved configuration

`vehicle.yml` uses `schema: boblib.vehicle.v1`. Its main groups include
`architecture`, `front`, `rear`, `sprung_mass`, `driver_mass`, `body`, `brake`,
`aero`, and `powertrain`.

```yaml
architecture:
  front: bellcrank_stabar
  rear: bellcrank_stabar
```

This is a fragment, not a complete vehicle. A complete example is the
[default vehicle](https://github.com/BobDyn/BobSim/blob/main/vehicle.yml).
**Save As** creates a distinct vehicle workspace.

## Python and Modelica inputs

Python workflows read the saved YAML. BobLib workflows use generated Modelica
records. **Write to MBD** bridges those representations for the current app.
In a source checkout:

```bash
make sync-vehicle
make sync-vehicle-write
```

The first command checks for drift. The second deliberately regenerates
records. Generated records should not be hand-edited. Changes to geometry,
mass, or architecture can require recompilation even when OpenModelica accepts
a runtime override.

Repository workflow YAML files are seeds. The app's active copies live under
`app/user_data/config/active/`. [Results and saved data](/bobsim/results) covers
per-vehicle settings and archives.
