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

Use OMEdit to browse BobLib diagrams, inspect parameters, run manual
experiments, and view animations.

## Prerequisites

- A full OpenModelica installation that includes OMEdit. On Linux, `omc` alone
  is enough for CLI work but not for OMEdit.
- Modelica Standard Library `4.1.0` and VehicleInterfaces `2.0.2`. See
  [Setup](/boblib/setup#install-openmodelica).
- The BobLib repository on a local path without unusual permissions.

| Platform | Notes |
| :-- | :-- |
| Linux | Install the full OpenModelica package set from the official repository. Qt needs desktop X11 or Wayland integration. |
| Windows | Use the standard OpenModelica installer. |
| macOS | Native packages are limited. Use the official macOS notes, a Linux or Windows host, or a VM. |

## Open BobLib

1. Start OMEdit with no BobLib package loaded.
2. Open the File menu with `Alt+F`. Press `Down` until
   `Open Model/Library File(s)` is highlighted, then press `Enter`.

   ![OMEdit File menu with Open Model/Library File(s) highlighted](/images/omedit/open-library-menu.png)

3. In the file chooser, select `BobLib/package.mo` and open it.

   ![OMEdit file chooser with BobLib package.mo selected](/images/omedit/open-library-file-dialog.png)

4. In the Libraries browser, expand `BobLib > Experiments > Standards`.
5. Open `VehicleSim` or `FourPostSim`.

   ![OMEdit Libraries browser with VehicleSim selected](/images/omedit/library-vehicle-sim-traversal.png)

If OMEdit reports a missing `Modelica` or `VehicleInterfaces` package, install
the missing library, restart OMEdit, and load `BobLib/package.mo` again.

## Run a simulation

1. Set a scratch working directory in `Tools > Options > General`, for example
   `/tmp/BobLibOMEdit`.
2. Open `VehicleSim` or `FourPostSim` as above.
3. Click `Check Model` for a quick sanity check.
4. Open `Simulation Setup` from the model toolbar. Review the start and stop
   time, interval, solver, tolerance, output format, and simulation flags. If
   the toolbar is hidden, use `View > Toolbars > Simulation Toolbar`.

   ![VehicleSim diagram in OMEdit with the Simulation Setup toolbar button highlighted](/images/omedit/vehicle-sim-diagram.png)

   ![OMEdit Simulation Setup dialog for VehicleSim](/images/omedit/simulation-setup-dialog.png)

5. Click `Simulate`.
6. Inspect variables in the Plotting perspective after the run finishes.

OMEdit writes each run to a model-named subdirectory of its working directory.
That directory holds the translated model, executable, initialization XML,
logs, and results. If a run behaves unexpectedly, delete that directory and
simulate again.

## Animation

The standard models open with MultiBody animation on (`headless = false`). Set
`headless = true` to run without visualization geometry. See
[Entry Points](/boblib/entry-points#animation-and-batch-runs).
