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

Use `omc` to load, build, and simulate BobLib models without OMEdit. For the
`make` check targets, see [Tests and Checks](/boblib/testing).

## Load the package

From the BobLib repository root, start `omc` and run:

```txt
loadModel(Modelica, {"4.1.0"});
loadModel(VehicleInterfaces, {"2.0.2"});
loadFile("BobLib/package.mo");
loadFile("Tests/BobLibTest/package.mo");
getErrorString();
```

Both `loadFile(...)` calls should return `true`. `getErrorString()` should be
empty or show only non-critical messages.

## Build or simulate an entry point

After you load the package, build the model without running it:

```txt
buildModel(BobLib.Experiments.Standards.VehicleSim);
getErrorString();
```

Or build and run it with the model's default experiment settings:

```txt
simulate(BobLib.Experiments.Standards.VehicleSim);
getErrorString();
```

The same calls work for `BobLib.Experiments.Standards.FourPostSim`. See
[Entry Points](/boblib/entry-points) for the other models.

To change which vehicle architecture the entry points use, see
[Static Vehicle Templates](/boblib/generation).

## Build in a scratch directory

A scratch directory keeps the generated C code, executables, XML, logs, and
results out of the repository.

1. Set the paths from the BobLib repository root:

   ```bash
   BOBLIB_ROOT="$(pwd)"
   RUN_DIR="/tmp/BobLibVehicleSim"
   mkdir -p "$RUN_DIR"
   ```

2. Write a build script into the scratch directory:

   ```bash
   cat > "$RUN_DIR/build_vehicle_sim.mos" <<MOS
   OpenModelica.Scripting.cd("$RUN_DIR");
   loadModel(Modelica, {"4.1.0"});
   loadModel(VehicleInterfaces, {"2.0.2"});
   loadFile("$BOBLIB_ROOT/BobLib/package.mo");
   buildModel(BobLib.Experiments.Standards.VehicleSim);
   getErrorString();
   MOS
   ```

3. Run the script:

   ```bash
   omc "$RUN_DIR/build_vehicle_sim.mos"
   ```

4. Run the executable from the scratch directory:

   ```bash
   cd "$RUN_DIR"
   ./BobLib.Experiments.Standards.VehicleSim
   ```

For the four-post model, use a separate scratch directory and replace the model
class with `BobLib.Experiments.Standards.FourPostSim`.

## Build through BobSim

Inside BobSim, BobLib is a submodule. BobSim owns the workflow YAML, case
generation, result extraction, plots, and reports. BobLib owns the physical
models and records. From the BobSim root:

```bash
make standard-build
make standard-build-four-post
```
