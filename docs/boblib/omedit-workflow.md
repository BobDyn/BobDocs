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

## Open BobLib From Scratch

1. Start OMEdit with no BobLib package loaded.
2. Open the File menu with `Alt+F`, press `Down` until
   `Open Model/Library File(s)` is highlighted, then press `Enter`.

   ![OMEdit File menu with Open Model/Library File(s) highlighted](/images/omedit/open-library-menu.png)

3. In the file chooser, browse to the BobLib repository if needed, select the
   package entry point, and open it:

   ```text
   BobLib/package.mo
   ```

   ![OMEdit file chooser with BobLib package.mo selected](/images/omedit/open-library-file-dialog.png)

4. In the Libraries browser, expand:

   ```text
   BobLib > Experiments > Standards
   ```

5. Start with one of the standard experiment models:

   ```text
   BobLib.Experiments.Standards.VehicleSim
   BobLib.Experiments.Standards.FourPostSim
   ```

   ![OMEdit Libraries browser with VehicleSim selected](/images/omedit/library-vehicle-sim-traversal.png)

6. If OMEdit reports a missing `Modelica` or `VehicleInterfaces` package,
   install the missing library, restart OMEdit, and reload
   `BobLib/package.mo`.

## Run Locally In OMEdit

1. Start OMEdit and load `BobLib/package.mo`.
2. Set a scratch working directory from `Tools > Options > General`, for example:

   ```text
   /tmp/BobLibOMEdit
   ```

3. Open one of the standard models:

   ```text
   BobLib.Experiments.Standards.VehicleSim
   BobLib.Experiments.Standards.FourPostSim
   ```

4. Use `Check Model` as a lightweight package/model sanity check.
5. Open `Simulation Setup` from the model toolbar to review start time, stop
   time, communication interval, solver method, tolerance, output format, and
   simulation flags.

   ![VehicleSim diagram in OMEdit with the Simulation Setup toolbar button highlighted](/images/omedit/vehicle-sim-diagram.png)

   ![OMEdit Simulation Setup dialog for VehicleSim](/images/omedit/simulation-setup-dialog.png)

6. Click `Simulate`.
7. Inspect variables in the Plotting perspective after the run finishes.

OMEdit creates a model-named subdirectory under its working directory for each
simulation. That directory contains the translated model artifacts, executable,
initialization XML, logs, and result files. If a run gets weird, clear that
model's scratch directory and simulate again.

## Animation

The public standard models default to animation visible:

```text
inner parameter Boolean headless = false
```

Set `headless=true` on the standard model when you want a batch or CI run
without MultiBody visualization geometry.

## Maintained Screenshots

The OMEdit screenshots used on this page are stored under
`docs/public/images/omedit/` and are served from `/images/omedit/` in the site.
Refresh them from a clean OMEdit session when package loading, tree traversal,
diagram layout, or Simulation Setup defaults change.
