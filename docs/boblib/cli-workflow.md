---
layout: doc
title: CLI Workflow
prev:
  text: 'Setup'
  link: '/boblib/setup'
next:
  text: 'OMEdit Workflow'
  link: '/boblib/omedit-workflow'
---

# CLI Workflow

Use the CLI path for automated generation, translation, and simulation. It does
not require OMEdit.

## Loading Smoke Test

From the BobDyn/BobLib repository root:

```bash
omc
```

Then in the OpenModelica prompt:

```txt
loadFile("BobLib/package.mo");
getErrorString();
```

A clean load should return `true` for `loadFile(...)` and an empty or
non-critical `getErrorString()` result.

## Translation And Simulation

To translate and build the active maneuver simulation without running it:

```txt
loadFile("BobLib/package.mo");
buildModel(BobLib.Standards.VehicleSim);
getErrorString();
```

To simulate the checked-in active package as-is:

```txt
loadFile("BobLib/package.mo");
simulate(BobLib.Standards.VehicleSim);
getErrorString();
```

`simulate(...)` translates first when needed, then runs the generated executable.
The same pattern works for `BobLib.Standards.FourPostSim`.

## CLI Generation

The active generation input is:

```text
Generation/vehicle.yml
```

When BobDyn/BobLib is used as the BobDyn/BobSim submodule, the BobDyn/BobSim repository root owns the
source `vehicle.yml`; `make sync-vehicle-yaml` copies it into:

```text
_0_Utils/external/BobLib/Generation/vehicle.yml
```

From a standalone BobDyn/BobLib repository root, regenerate the active package
artifacts with:

```bash
python Generation/generate_vehicle_model.py
```

The active generator writes the vehicle record, generated vehicle wrapper,
standard `VehicleSim`, `FourPostEvalRecord`, and `FourPostSim` sources.

Lower-level script entry points are available when you only want one part of the
generated output:

```bash
python Generation/scripts/build_records.py
python Generation/scripts/build_axle_models.py
python Generation/scripts/build_vehicle_sim.py
python Generation/scripts/build_four_post_sim.py
```

Generated files are part of the active BobDyn/BobLib package. Treat
`Generation/vehicle.yml`, the templates in `Generation/`, and the source model
templates as the durable inputs when changing vehicle architecture or data.

## Scratch Build To `/tmp`

Scratch-directory OMC builds keep generated C, executables, XML, logs, and
result files out of the repository.

From the BobDyn/BobLib repository root, build the active `VehicleSim` model into a
scratch directory without running it:

```bash
BOBLIB_ROOT="$(pwd)"
RUN_DIR="/tmp/BobLibVehicleSim"
mkdir -p "$RUN_DIR"

cat > "$RUN_DIR/build_vehicle_sim.mos" <<MOS
OpenModelica.Scripting.cd("$RUN_DIR");
loadFile("$BOBLIB_ROOT/BobLib/package.mo");
buildModel(BobLib.Standards.VehicleSim);
getErrorString();
MOS

omc "$RUN_DIR/build_vehicle_sim.mos"
```

Run the generated executable from the same scratch directory so it can find its
generated initialization files:

```bash
cd /tmp/BobLibVehicleSim
./BobLib.Standards.VehicleSim
```

On Windows, the generated executable will have the usual `.exe` suffix.

To translate and run in one step, use `simulate(...)` instead:

```bash
BOBLIB_ROOT="$(pwd)"
RUN_DIR="/tmp/BobLibVehicleSim"
mkdir -p "$RUN_DIR"

cat > "$RUN_DIR/simulate_vehicle_sim.mos" <<MOS
OpenModelica.Scripting.cd("$RUN_DIR");
loadFile("$BOBLIB_ROOT/BobLib/package.mo");
simulate(BobLib.Standards.VehicleSim);
getErrorString();
MOS

omc "$RUN_DIR/simulate_vehicle_sim.mos"
```

For the four-post model, use a separate scratch directory and replace the model
class:

```bash
BOBLIB_ROOT="$(pwd)"
RUN_DIR="/tmp/BobLibFourPostSim"
mkdir -p "$RUN_DIR"

cat > "$RUN_DIR/simulate_four_post_sim.mos" <<MOS
OpenModelica.Scripting.cd("$RUN_DIR");
loadFile("$BOBLIB_ROOT/BobLib/package.mo");
simulate(BobLib.Standards.FourPostSim);
getErrorString();
MOS

omc "$RUN_DIR/simulate_four_post_sim.mos"
```

The `/tmp` directories are disposable build/run sandboxes. The BobDyn/BobLib source
tree should remain clean unless you intentionally run the Python generator.
