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

Use the CLI path for automated generation, translation, initialization checks,
and direct simulation. It does not require OMEdit.

## Make Targets

From the BobLib repository root:

```bash
make help
```

Important targets:

| Target | Action |
| :-- | :-- |
| `make lint` | Run Ruff over generation and test harness code |
| `make test-python` | Run Python generator and coverage tests |
| `make modelica-deps` | Install OpenModelica library dependencies |
| `make modelica-translation` | Translate standards and all `BobLib.Tests` fixtures |
| `make modelica-initialization` | Initialize all fixtures and compare the baseline CSV |
| `make modelica-regression` | Simulate signal-level Modelica regressions |
| `make test-modelica` | Run all Modelica checks |
| `make test` | Run Python and Modelica checks |
| `make ci` | Run the full local CI suite |

For public release confidence, run:

```bash
make ci
```

## Loading Smoke Test

From the BobLib repository root:

```bash
omc
```

Then in the OpenModelica prompt:

```txt
loadModel(Modelica, {"3.2.3"});
loadFile("BobLib/package.mo");
getErrorString();
```

A clean load should return `true` for `loadFile(...)` and an empty or
non-critical `getErrorString()` result.

## Translation And Simulation

To translate and build the active maneuver simulation without running it:

```txt
loadModel(Modelica, {"3.2.3"});
loadFile("BobLib/package.mo");
buildModel(BobLib.Standards.VehicleSim);
getErrorString();
```

To simulate the checked-in active package as-is:

```txt
loadModel(Modelica, {"3.2.3"});
loadFile("BobLib/package.mo");
simulate(BobLib.Standards.VehicleSim);
getErrorString();
```

The same pattern works for:

```text
BobLib.Standards.FourPostSim
```

## Generation

The active generation input is:

```text
Generation/vehicle.yml
```

Regenerate the active package artifacts with:

```bash
python Generation/generate_vehicle_model.py
```

The generator writes the active vehicle record, generated vehicle wrapper,
standard `VehicleSim`, `FourPostEvalRecord`, and `FourPostSim` sources.

Lower-level script entry points are available when you only want one generated
area:

```bash
python Generation/scripts/build_records.py
python Generation/scripts/build_axle_models.py
python Generation/scripts/build_vehicle_sim.py
python Generation/scripts/build_four_post_sim.py
```

Generated files are part of the active BobLib package. Treat
`Generation/vehicle.yml`, the templates in `Generation/`, and the source model
templates as the durable inputs when changing vehicle architecture or data.

## BobSim Handoff

When BobLib is used as the BobSim submodule, BobSim owns the root `vehicle.yml`.
BobSim's build targets copy that file into:

```text
_0_Utils/external/BobLib/Generation/vehicle.yml
```

Then they run the relevant BobLib generator and OpenModelica build script.

From the BobSim root, use:

```bash
make standard-build
make standard-build-four-post
```

## Scratch Builds

Scratch-directory OMC builds keep generated C, executables, XML, logs, and
result files out of the repository.

From the BobLib repository root:

```bash
BOBLIB_ROOT="$(pwd)"
RUN_DIR="/tmp/BobLibVehicleSim"
mkdir -p "$RUN_DIR"
```

Create a build script in that scratch directory:

```bash
cat > "$RUN_DIR/build_vehicle_sim.mos" <<MOS
OpenModelica.Scripting.cd("$RUN_DIR");
loadModel(Modelica, {"3.2.3"});
loadFile("$BOBLIB_ROOT/BobLib/package.mo");
buildModel(BobLib.Standards.VehicleSim);
getErrorString();
MOS
```

Run it:

```bash
omc "$RUN_DIR/build_vehicle_sim.mos"
```

Run the generated executable from the same scratch directory:

```bash
cd /tmp/BobLibVehicleSim
./BobLib.Standards.VehicleSim
```

For the four-post model, use a separate scratch directory and replace the model
class with `BobLib.Standards.FourPostSim`.
