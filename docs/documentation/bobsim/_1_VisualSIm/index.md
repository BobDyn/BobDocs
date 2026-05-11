# VisualSim

`_1_VisualSim` contains visual playback and rendering tools for BobSim output bundles.

## Files

```text
_1_VisualSim/run_visual.py
_1_VisualSim/viewer.py
_1_VisualSim/visual_templates/
_1_VisualSim/results/
```

## Purpose

VisualSim consumes an NPZ bundle and a visual template YAML file, then renders a 3D scene with PyVista/VTK. It supports links, joints, tire geometry, force vectors, camera presets, timeline playback, and signal plots.

## Data model

Visual bundles use a convention like:

```text
time
points/<name>
signals/<name>
```

- `time` is the simulation time vector.
- `points/<name>` stores 3D point histories.
- `signals/<name>` stores scalar signal histories.

## Visual templates

Templates live under:

```text
_1_VisualSim/visual_templates/
```

Examples include:

```text
steady_state_eval_visual.yml
transient_eval_visual.yml
fr_knc_visual.yml
rr_knc_visual.yml
```

Templates describe scene scale, point names, link connectivity, styling, camera behavior, and optional vector visualization.

## Viewer architecture

`viewer.py` implements the interactive application:

- `SimData` loads configuration and raw arrays,
- `VisualScene` owns PyVista actors,
- `AnimationWorker` handles playback timing,
- `PlotPanel` and `PlotRow` manage signal plots,
- `BobVisWindow` integrates the UI.

## API inventory

### `run_visual.py`

| Symbol | Line | Notes |
|:--|--:|:--|
| `safe_normalize()` | 23 |  |
| `set_vtk_matrix()` | 36 |  |
| `make_frame_from_x()` | 42 |  |
| `make_link_transform()` | 60 |  |
| `update_camera()` | 196 |  |
| `update_frame()` | 518 |  |

### `viewer.py`

| Symbol | Line | Notes |
|:--|--:|:--|
| `class SimData` | 69 | Holds parsed config and raw signal arrays. |
| `SimData.__init__()` | 82 |  |
| `SimData.get_signal()` | 121 | Return signal array by name; raises KeyError if missing. |
| `class VisualScene` | 131 | Owns all PyVista actors.  Attached to a live QtInteractor plotter. |
| `VisualScene.__init__()` | 142 |  |
| `VisualScene._safe_normalize()` | 172 |  |
| `VisualScene._make_frame_from_x()` | 179 |  |
| `VisualScene._make_link_transform()` | 191 |  |
| `VisualScene._set_vtk_matrix()` | 204 |  |
| `VisualScene.build()` | 210 | Parse cfg, pre-load point arrays, create all actors. |
| `VisualScene._build_points()` | 220 | Stack x/y/z signal columns → self._points[name] shape (N, 3). |
| `VisualScene._build_joints()` | 231 | One sphere actor per point. |
| `VisualScene._build_links()` | 242 | One unit cylinder per link pair, transformed each frame. |
| `VisualScene._build_tires()` | 270 | Outer tyre + rim cylinders per tire entry. |
| `VisualScene._build_vectors()` | 330 | Arrow actor per vector entry, collapsed to zero when magnitude < 1e-6. |
| `VisualScene._setup_camera()` | 367 | Read camera config; fall back to reset_camera(). |
| `VisualScene._time_bracket()` | 387 |  |
| `VisualScene._lerp_vec()` | 402 |  |
| `VisualScene._interp_points()` | 405 |  |
| `VisualScene._interp_array3()` | 411 |  |
| `VisualScene._interp_scalar_arr()` | 416 |  |
| `VisualScene.update()` | 421 |  |
| `VisualScene.update_time()` | 424 | Move every actor to its interpolated position at sim_time. |
| `VisualScene._update_joints_interp()` | 433 |  |
| `VisualScene._update_links_interp()` | 437 |  |
| `VisualScene._update_tires_interp()` | 445 |  |
| `VisualScene._update_vectors_interp()` | 474 |  |
| `VisualScene._get_camera_target()` | 494 |  |
| `VisualScene._camera_target_interp()` | 511 |  |
| `VisualScene._update_camera_interp()` | 526 | Update camera for follow mode, or preserve the current manual view relative to the car. |
| `VisualScene._remember_manual_camera()` | 557 |  |
| `VisualScene._set_manual_view()` | 575 |  |
| `VisualScene._set_manual_view_with_azimuth()` | 580 |  |
| `VisualScene._set_flipped_isometric_view()` | 590 |  |
| `VisualScene.set_view_top()` | 599 |  |
| `VisualScene.set_view_rear()` | 602 |  |
| `VisualScene.set_view_front()` | 605 |  |
| `VisualScene.set_view_right()` | 608 |  |
| `VisualScene.set_view_left()` | 611 |  |
| `VisualScene.set_view_iso()` | 614 |  |
| `VisualScene.set_view_free()` | 617 |  |
| `VisualScene.rotate_x()` | 621 |  |
| `VisualScene.rotate_y()` | 626 |  |
| `VisualScene.rotate_z()` | 631 |  |
| `VisualScene.set_focus_point()` | 636 | Override camera follow target at runtime (toolbar Focus dropdown). |
| `class AnimationWorker` | 657 | Emits frame_ready(int) at ~60 Hz while playing. |
| `AnimationWorker.__init__()` | 673 |  |
| `AnimationWorker.run()` | 684 | Thread entry point — internal tick loop. |
| `AnimationWorker.play()` | 715 |  |
| `AnimationWorker.pause()` | 719 |  |
| `AnimationWorker.stop()` | 722 |  |
| `AnimationWorker.seek()` | 725 |  |
| `AnimationWorker.set_speed()` | 730 |  |
| `AnimationWorker.is_playing()` | 734 |  |
| `class PlotRow` | 743 | One subplot row: [X dropdown] vs [Y dropdown] [remove button] + canvas. |
| `PlotRow.__init__()` | 751 |  |
| `PlotRow._populate_combos()` | 802 | Fill X/Y dropdowns: X defaults to 'time', Y to first signal. |
| `PlotRow._replot()` | 820 | Redraw axes when user changes dropdown selection. |
| `PlotRow.update_cursor_time()` | 844 | Move cursor to current simulation time. Called every frame — throttled to ~30 fps. |
| `class PlotPanel` | 865 | Scrollable container of PlotRow widgets. |
| `PlotPanel.__init__()` | 871 |  |
| `PlotPanel.add_plot()` | 903 |  |
| `PlotPanel._remove_row()` | 912 |  |
| `PlotPanel.update_cursor_time()` | 919 |  |
| `class TimelineBar` | 928 | Bottom playback controls. |
| `TimelineBar.__init__()` | 943 |  |
| `TimelineBar._toggle_play()` | 1013 |  |
| `TimelineBar._step()` | 1023 |  |
| `TimelineBar._jump()` | 1028 |  |
| `TimelineBar._on_slider_moved()` | 1032 |  |
| `TimelineBar._on_speed()` | 1035 |  |
| `TimelineBar.sync_time()` | 1041 | Called by main window every frame to keep slider + label in sync. |
| `TimelineBar.on_playback_done()` | 1049 | Worker signals end-of-data — reset play button. |
| `class ViewToolbar` | 1059 | Horizontal toolbar with view and focus controls. |
| `ViewToolbar.__init__()` | 1078 |  |
| `ViewToolbar._build_view_presets()` | 1092 |  |
| `ViewToolbar._build_focus_dropdown()` | 1106 |  |
| `ViewToolbar._build_rotate_controls()` | 1121 |  |
| `ViewToolbar._build_reset()` | 1141 |  |
| `class BobVisWindow` | 1152 | Top-level window. |
| `BobVisWindow.__init__()` | 1167 |  |
| `BobVisWindow._build_ui()` | 1185 |  |
| `BobVisWindow._build_menu()` | 1227 |  |
| `BobVisWindow._reset_camera_from_menu()` | 1262 |  |
| `BobVisWindow._wire_signals()` | 1267 | Connect toolbar + timeline signals to scene / worker. |
| `BobVisWindow._start_worker()` | 1280 |  |
| `BobVisWindow._build_scene()` | 1288 | Called once via QTimer after plotter is shown. |
| `BobVisWindow._on_frame()` | 1313 |  |
| `BobVisWindow._on_play()` | 1330 |  |
| `BobVisWindow._on_pause()` | 1340 |  |
| `BobVisWindow._on_seek()` | 1344 |  |
| `BobVisWindow._on_speed_change()` | 1348 |  |
| `BobVisWindow._on_view_preset()` | 1352 |  |
| `BobVisWindow._on_rotate()` | 1369 |  |
| `BobVisWindow.closeEvent()` | 1383 |  |
| `class FilePickerDialog` | 1395 | Small dialog shown on launch so the user can browse for a template and data bundle. |
| `FilePickerDialog.__init__()` | 1405 |  |
| `FilePickerDialog._browse_yml()` | 1457 |  |
| `FilePickerDialog._browse_data()` | 1465 |  |
| `FilePickerDialog._on_accept()` | 1474 |  |
| `FilePickerDialog.yml_path()` | 1498 |  |
| `FilePickerDialog.data_path()` | 1502 |  |
| `main()` | 1512 |  |
