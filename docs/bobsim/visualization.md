---
layout: doc
title: Replay
---

# Replay

BobSim shows vehicle geometry in two places in the app. Setup previews the
vehicle while you edit it. The Replay tab plays back a simulated run as 3D
geometry. For Modelica diagrams and MultiBody animation, use OMEdit. See the
BobLib [OMEdit Workflow](/boblib/omedit-workflow).

## Setup previews

The right pane in `Setup` previews the step you are editing: architecture,
hardpoints, mass properties, suspension, tires, aero, and powertrain.

![BobSim Geometry setup preview showing hardpoints, suspension links, and kinematic plot controls](/images/bobsim/app-setup-geometry.png)

The kinematic plots cover bump, roll, and steer sweeps. Steer plots are front
axle only. See [Overlay Report](/bobsim/lotus-shark-import#overlay-report) for
the sweep ranges.

The `Load Maps` tab on the Tires step renders pure longitudinal, pure lateral,
combined longitudinal, and combined lateral tire force surfaces from the active
`.tir` data.

![BobSim Tires setup preview showing pure and combined slip tire load-map surfaces](/images/bobsim/app-setup-tires.png)

## Replay a run

Replay draws suspension links, uprights and tires, force vectors, and tire
loads on the ground. It needs a scene: a `<name>_visual.yml` and
`<name>_visual.npz` pair in `_1_VisualSim/results/`. The make targets write
scenes. Each runs in Docker.

1. Write a scene:

   | Target | Scene |
   | :-- | :-- |
   | `make visual-maneuver` | A VehicleSim maneuver. `VISUAL_MANEUVER` picks `transient` (default), `ramp_steer`, or `steady_state`. |
   | `make visual-rig` | The four-post rig: suspension travel with the car held still |
   | `make visual-capture` | The general form. `VISUAL_EVAL` names the evaluation, `four_post` by default. |
   | `make visual-demo` | A synthetic scene. It needs no simulation and no OpenModelica. |

2. Run `make app` and open the `Replay` tab.
3. Pick the scene from the run list.

Example:

```bash
make visual-rig && make app
```

Scenes are generated and never committed. `make clean-visual` removes them.

### Replay controls

| Control | Action |
| :-- | :-- |
| Drag | Orbit around the centre |
| Shift + drag, or middle or right drag | Pan |
| Scroll | Zoom toward the cursor |
| Shift + scroll | Pan |
| Double-click | Re-centre on the ground under the cursor |
| Space | Play and pause |
| F1 | Show or hide the controls list |
| `Export video` | Render the whole run to a video file and download it |

The side panel has a `Layers` list and two tabs. `Tires` shows each tire's
force against its MF5.2 peak grip, and the lateral load transfer distribution.
`Metrics` shows the run's metrics CSV.

The friction circle is an ellipse built from pure-slip peak μ, not the MF5.2
combined-slip envelope. Read its edge as "at the limit", not as a hard wall.

::: details Why a capture step is needed

The evaluations do not write geometry. Each one sets a `variable_filter` that
names only the scalars its metrics need, so its result CSV has no positions to
draw.

`make visual-capture` reruns the evaluation with a wider filter. The filter
adds the MultiBody frame origins behind each hardpoint, at a finer output step.
Then `_1_VisualSim/from_results.py` converts the result into the scene pair.
The filter keeps the evaluation's own signals, because the evaluation rereads
them to compute its metrics.

OpenModelica removes some variables it can prove redundant, such as the
wheel-centre frames. The converter refits those points from three outboard
points on the rigid upright. The run reports which points it refit.

A scene captured before tire forces or metrics were added has neither. Rerun
`make visual-capture` to get them.

:::

## Scene files

| Path | Role |
| :-- | :-- |
| `_1_VisualSim/capture.py` | Writes the geometry-capture eval config, then converts the result |
| `_1_VisualSim/from_results.py` | Maps BobLib frames to hardpoints and turns a result CSV into a scene |
| `_1_VisualSim/sim_data.py` | Resolves a visual config against the signals it names |
| `_1_VisualSim/navigation.py` | Camera arithmetic. The browser camera is tested against it. |
| `_1_VisualSim/tire_state.py` | Friction-circle and LLTD arithmetic |
| `_1_VisualSim/demo.py` | Generates the scene for `make visual-demo` |
| `_1_VisualSim/visual_templates/` | Older templates. They are stale. |
| `_1_VisualSim/results/` | Generated scenes |
| `_5_App/visual.py` | Resolves a scene into the payload the browser draws |
| `_5_App/static/visual.js` | The camera and the WebGL renderer |
| `_5_App/static/visual_panel.js` | The Replay screen: run picker, timeline, layers, tire and metric tabs |

::: warning Bundled templates are stale
The four templates in `_1_VisualSim/visual_templates/` name signals such as
`signals/visfrontaxleleftlowerfore_i1`. No current model writes those signals.
Use `make visual-maneuver` or `make visual-rig` instead.
:::

## Template anatomy

A visual template is YAML. It says which signals are 3D points, how the points
connect into links, where the tires and force vectors are, and how the camera
follows the car. The signal file holds hardpoint positions over time, as
`.npz` or as a `.csv` with a `time` column.

| Section | Purpose |
| :-- | :-- |
| `style.joints` | Joint radius and color |
| `style.links.default` | Default link radius and color |
| `style.links.groups` | Per-link-group styling |
| `geometry.points` | Named points, each built from three signals for x, y, z |
| `geometry.links` | Link groups, each a list of point-name pairs |
| `geometry.tires` | Per-corner tire center, axis vectors, radius, and width |
| `geometry.vectors` | Arrows from an origin point along direction signals |
| `ground.loads` | Tire load discs on the ground |
| `ground.tracks` | Contact-patch trails |
| `render` | `speed` (default export speed) and `input_stride` (keep every nth sample) |
| `plots` | Signals for the signal panel and the export strip |
| `camera` | The point the camera follows, the forward pair, and offsets |

Points:

```yaml
geometry:
  points:
    flUpper_o: [sig/x, sig/y, sig/z]
```

Links:

```yaml
geometry:
  links:
    upper: [[flUpperFore_i, flUpper_o]]
```

Camera:

```yaml
camera:
  attach_to: rlWheelCenter
  forward_pair: [rl, fl]
  origin_offset: {x: 0.6, y: 0.6, z: 0.0}
  camera_offsets: {back: 3.0, height: 2.0}
```

Point coordinates are world frame, in metres. Wheel spin comes from the
wheel-center velocity, so tires roll without a spin-angle signal.
`input_stride` applies to every signal, including `time`, so geometry, plots,
and the timeline stay on one index.

For the full template example, see `_1_VisualSim/README.md` in BobSim.

## Troubleshooting

| Symptom | Fix |
| :-- | :-- |
| The Replay run list is empty | Write a scene with `make visual-rig`, `make visual-maneuver`, or `make visual-demo`. Replay lists only `_1_VisualSim/results/`. |
| Replay lists missing signal names | The template names signals that the data file does not have. Rerun `make visual-capture` so the data and template come from the same run. |
| A bundled template does not open | The templates in `visual_templates/` are stale. Use `make visual-maneuver`. |
| The Tires or Metrics tab is missing | The scene predates those features. Rerun `make visual-capture`. |
| Playback is slow | Increase `render.input_stride` in the scene YAML. |
