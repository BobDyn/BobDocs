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

Use the CLI path for translation, initialization checks, regression checks, and
direct simulation. It does not require OMEdit.

## Make Targets

From the BobLib repository root:

```bash
make help
```

Important targets:

| Target | Action |
| :-- | :-- |
| `make lint` | Run Ruff over the Python test harness |
| `make test-python` | Run Python coverage and regression harness tests |
| `make modelica-deps` | Install OpenModelica library dependencies |
| `make modelica-translation` | Translate legacy standards and legacy `BobLib.Tests` fixtures |
| `make modelica-initialization` | Initialize legacy fixtures and compare the baseline CSV |
| `make modelica-regression` | Simulate signal-level regressions and smoke-check `BobLibVehicleInterfaces` |
| `make test-modelica` | Run all Modelica checks |
| `make test` | Run Python and Modelica checks |
| `make ci` | Run the full local CI suite |

During the transition, `make test` intentionally checks both packages.

For public release confidence, run:

```bash
make test PYTHON=.venv/bin/python
```

## Loading Smoke Test

From the BobLib repository root:

```bash
omc
```

Then in the OpenModelica prompt:

```txt
loadModel(Modelica, {"4.1.0"});
loadModel(VehicleInterfaces, {"2.0.2"});
loadFile("BobLibVehicleInterfaces/package.mo");
loadFile("BobLibVehicleInterfacesTests/package.mo");
getErrorString();
```

A clean load should return `true` for both `loadFile(...)` calls and an empty
or non-critical `getErrorString()` result.

## Translation And Simulation

To translate and build the active maneuver simulation without running it:

```txt
loadModel(Modelica, {"4.1.0"});
loadModel(VehicleInterfaces, {"2.0.2"});
loadFile("BobLibVehicleInterfaces/package.mo");
buildModel(BobLibVehicleInterfaces.Experiments.Standards.VehicleSim);
getErrorString();
```

To simulate the checked-in active package as-is:

```txt
loadModel(Modelica, {"4.1.0"});
loadModel(VehicleInterfaces, {"2.0.2"});
loadFile("BobLibVehicleInterfaces/package.mo");
simulate(BobLibVehicleInterfaces.Experiments.Standards.VehicleSim);
getErrorString();
```

The same pattern works for:

```text
BobLibVehicleInterfaces.Experiments.Standards.FourPostSim
```

## Static Vehicle Templates

Vehicle architectures are checked in as Modelica records, subsystem models,
four-post adapters, and standard templates. The default integrated entry points
are:

```text
BobLibVehicleInterfaces.Experiments.Standards.VehicleSim
BobLibVehicleInterfaces.Experiments.Standards.FourPostSim
```

They extend or redeclare templates under:

```text
BobLibVehicleInterfaces.Experiments.Standards.Templates
```

To switch the front-facing vehicle architecture, update `VehicleSim.mo` or
`FourPostSim.mo` to extend or redeclare the desired template. Project/year-
specific standard models can also extend the desired template and redeclare
explicit values there.

## BobSim Handoff

When BobLib is used as the BobSim submodule, BobSim consumes the checked-in
Modelica package. BobSim owns the workflow YAML, case generation, result
extraction, plotting, and reporting; BobLib owns the physical models and
records.

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
loadModel(Modelica, {"4.1.0"});
loadModel(VehicleInterfaces, {"2.0.2"});
loadFile("$BOBLIB_ROOT/BobLibVehicleInterfaces/package.mo");
buildModel(BobLibVehicleInterfaces.Experiments.Standards.VehicleSim);
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
./BobLibVehicleInterfaces.Experiments.Standards.VehicleSim
```

For the four-post model, use a separate scratch directory and replace the model
class with `BobLibVehicleInterfaces.Experiments.Standards.FourPostSim`.
