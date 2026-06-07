---
layout: doc
title: Visualization
---

# Visualization

BobSim's core visualization path is currently OMEdit. Use OMEdit when you want
to inspect the generated Modelica diagrams, enable animation, and verify vehicle
motion through the standard Modelica toolchain.

VisualSim still exists under `_1_VisualSim/`, but it is not an active primary
workflow right now. Treat it as experimental/offline tooling for rendering
geometry animations from simulation signal arrays, not as the main public
visualization path.

The visualization code lives under:

```text
_1_VisualSim/
```

## VisualSim Layout

| Path | Role |
| :-- | :-- |
| `_1_VisualSim/run_visual.py` | MP4 rendering entry point |
| `_1_VisualSim/viewer.py` | Interactive/viewer support code |
| `_1_VisualSim/BobLib.Standards.TransientEval_run_5_visual.npz` | Checked-in transient visual signal sample |
| `_1_VisualSim/visual_templates/steady_state_eval_visual.yml` | SteadyStateEval visualization template |
| `_1_VisualSim/visual_templates/transient_eval_visual.yml` | TransientEval visualization template |
| `_1_VisualSim/visual_templates/fr_knc_visual.yml` | Front K&C visualization template |
| `_1_VisualSim/visual_templates/rr_knc_visual.yml` | Rear K&C visualization template |
| `_1_VisualSim/results/` | Rendered video outputs |

The renderer uses PyVista/VTK for the 3D scene, Matplotlib/Pillow/ImageIO for
frame handling, and YAML templates for geometry, styling, camera, and signal
mapping.

For the current core visualization workflow, see the BobLib
[OMEdit Workflow](/boblib/omedit-workflow).

## Rendering Command

General form:

```bash
python _1_VisualSim/run_visual.py <visual-template.yml> <signals.npz> --mp4 <output.mp4>
```

Transient example:

```bash
python _1_VisualSim/run_visual.py \
  _1_VisualSim/visual_templates/transient_eval_visual.yml \
  _1_VisualSim/BobLib.Standards.TransientEval_run_5_visual.npz \
  --mp4 _1_VisualSim/results/transient_eval_test.mp4
```

Steady-state template example from the checked-in template comments:

```bash
python _1_VisualSim/run_visual.py \
  _1_VisualSim/visual_templates/steady_state_eval_visual.yml \
  ./_3_StandardSim/SteadyStateEval/results/raw_results/BobLib.Standards.SteadyStateEval_run_0/BobLib.Standards.SteadyStateEval_run_0_visual.npz \
  --mp4 ./_1_VisualSim/results/steady_state_eval_test.mp4
```

## Template Anatomy

Visualization templates are declarative. They describe how arrays from the
`.npz` file become a 3D vehicle view.

Important sections:

| Section | Purpose |
| :-- | :-- |
| `style.joints` | Joint radius and color |
| `style.links.default` | Default link radius and color |
| `style.links.groups` | Per-link-group styling |
| `geometry.points` | Named points built from three signal columns |
| `geometry.links` | Cylinders drawn between named points |
| `geometry.vectors` | Optional arrows from origins and direction signals |
| `camera` | Camera attachment, forward pair, offsets, and framing |
| `render` | Optional display controls such as signal overlays and input stride |

Point definitions map names to three signal arrays:

```yaml
geometry:
  points:
    flWheelCenter:
      - signals/visfrontaxleleftwheelcenter1
      - signals/visfrontaxleleftwheelcenter2
      - signals/visfrontaxleleftwheelcenter3
```

Link definitions connect named points:

```yaml
geometry:
  links:
    upper:
      - [flUpperFore_i, flUpper_o]
      - [flUpperAft_i, flUpper_o]
```

The template is intentionally data-driven. Most visualization changes should be
possible without editing `run_visual.py`.

## Signal Files

VisualSim expects a `.npz` file with:

- `time`
- named signal arrays matching the template
- visual point coordinates exported as separate x/y/z arrays

The checked-in transient sample is:

```text
_1_VisualSim/BobLib.Standards.TransientEval_run_5_visual.npz
```

Generated visual arrays usually come from Modelica visual output signals. If a
template key is missing from the `.npz`, rendering fails early because a point
cannot be assembled.

## Camera Behavior

The renderer can attach the camera to a moving point. When the template defines
a `forward_pair`, the camera computes a yaw-only vehicle frame from those two
points and applies body-frame offsets.

This keeps the view attached to the vehicle without inheriting roll/pitch in a
way that makes debugging uncomfortable.

## Output Control

Use `render.input_stride` in the template to skip source samples before
rendering. This is useful when a simulation exports dense output and the MP4
does not need every point.

Example:

```yaml
render:
  input_stride: 4
```

Keep stride low when debugging fast suspension or tire motion. Increase it for
quick presentation videos.

## Troubleshooting

If rendering fails immediately, check:

- the `.npz` path exists
- every template signal key exists in the `.npz`
- `time` exists in the `.npz`
- PyVista, VTK, ImageIO, and FFmpeg dependencies are installed

If the video is blank or poorly framed:

- check the camera `attach_to` point
- verify the `forward_pair` points move with the vehicle
- reduce `input_stride`
- confirm coordinates are in the expected vehicle/world frame

If the render is slow:

- increase `render.input_stride`
- reduce the number of rendered links/vectors
- render a shorter source signal window upstream
