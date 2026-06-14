---
layout: doc
title: OMEdit Workflow
prev:
  text: 'CLI Workflow'
  link: '/boblib/cli-workflow'
next:
  text: 'Package Map'
  link: '/boblib/package-map'
---

# OMEdit Workflow

Use OMEdit when you want to browse diagrams, inspect parameters visually, run
quick manual experiments, view animations, or capture screenshots for
documentation.

## Prerequisites

- A full OpenModelica installation that includes OMEdit
- Modelica Standard Library `4.1.0`
- VehicleInterfaces `2.0.2`
- The BobLib repository available on a local filesystem path without unusual
  permissions
- On Linux, desktop/X11 or Wayland integration for Qt applications
- On Windows, the standard OpenModelica installer is the preferred route
- On macOS, native OpenModelica packages are limited; use the official macOS
  notes, a supported Linux/Windows host, or a VM if you need a supported OMEdit
  workflow

Linux package note: installing only `omc` is enough for CLI work, but not for
OMEdit. Install the full OpenModelica package set from the official repository
when you need the GUI.

## Open BobLib In OMEdit

1. Start OMEdit.
2. Select `File > Open Model/Library File(s)`.
3. Open:

   ```text
   BobLibVehicleInterfaces/package.mo
   ```

4. In the Libraries browser, expand `BobLibVehicleInterfaces`.
5. Start with:

   ```text
   BobLibVehicleInterfaces.Experiments.Standards.VehicleSim
   BobLibVehicleInterfaces.Experiments.Standards.FourPostSim
   BobLibVehicleInterfaces.Chassis.Chassis_DWBCStabar_DWBCStabar
   ```

6. If OMEdit reports a missing `Modelica` or `VehicleInterfaces` package,
   install the missing library, restart OMEdit, and reload
   `BobLibVehicleInterfaces/package.mo`.

## Run Locally In OMEdit

1. Start OMEdit.
2. Set a scratch working directory from `Tools > Options > General`, for example:

   ```text
   /tmp/BobLibOMEdit
   ```

3. Open `BobLibVehicleInterfaces/package.mo`.
4. Open one of the standard models:

   ```text
   BobLibVehicleInterfaces.Experiments.Standards.VehicleSim
   BobLibVehicleInterfaces.Experiments.Standards.FourPostSim
   ```

5. Use `Check Model` as a lightweight package/model sanity check.
6. Open `Simulation Setup` to review start time, stop time, tolerance, solver,
   output format, and simulation flags.
7. Click `Simulate`.
8. Inspect variables in the Plotting perspective after the run finishes.

OMEdit creates a model-named subdirectory under its working directory for each
simulation. That directory contains the translated model artifacts, executable,
initialization XML, logs, and result files. If a run gets weird, clear that
model's scratch directory and simulate again.

## Animation

The public integrated standard models default to animation visible:

```text
inner parameter Boolean headless = false
```

Set `headless=true` on the standard model when you want a batch or CI run
without MultiBody visualization geometry.

## Screenshot Targets

Recommended screenshots for future documentation:

- `docs/images/omedit-library-browser.png` - `BobLibVehicleInterfaces` expanded in the Libraries browser
- `docs/images/omedit-vehicle-sim-diagram.png` - `VehicleSim` in Diagram View
- `docs/images/omedit-chassis-diagram.png` - active chassis model in Diagram View
- `docs/images/omedit-four-post-sim-diagram.png` - `FourPostSim` in Diagram View
- `docs/images/omedit-vehicle-record-parameters.png` - active vehicle record parameter dialog

Keep screenshots small enough for the repository and prefer PNG for crisp OMEdit
UI captures.
