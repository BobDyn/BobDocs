---
layout: doc
title: Generation
prev:
  text: 'Package Map'
  link: '/boblib/package-map'
next:
  text: 'Entry Points'
  link: '/boblib/entry-points'
---

# Generation

BobLib's active vehicle is generated from:

```text
Generation/vehicle.yml
```

The generation layer lets BobLib keep one active Modelica package shape while
still supporting multiple vehicle architectures through YAML templates.

## What The YAML Controls

The YAML controls:

- front and rear suspension topology
- vehicle record name and generated wrapper model
- BobLib, vehicle-template, and tire-template paths
- sprung mass and driver mass properties
- body torsional stiffness
- front and rear wheel, tire, suspension, steering, actuation, stabar, and mass data
- aero map data
- tire template selection
- standard simulation wrapper settings

Supported suspension topology keys include:

- `direct`
- `bellcrank`
- `bellcrank_stabar`

## Generated Outputs

The generator currently emits or updates:

- `BobLib/Resources/VehicleDefn/<ActiveRecord>.mo`
- `BobLib/Vehicle/Vehicle_<ActiveVariant>.mo`
- `BobLib/Vehicle/Chassis/Suspension/FrAxleDW_*.mo`
- `BobLib/Vehicle/Chassis/Suspension/RrAxleDW_*.mo`
- `BobLib/Standards/VehicleSim.mo`
- `BobLib/Resources/StandardRecord/FourPostEvalRecord.mo`
- `BobLib/Standards/FourPostSim.mo`
- affected `package.order` files

Generated files are part of the active BobLib package. Treat
`Generation/vehicle.yml`, the templates in `Generation/`, and the source model
templates as durable inputs when changing vehicle architecture or data.

## Standalone BobLib Generation

From a standalone BobLib checkout, update the path values in
`Generation/vehicle.yml` before running the generator.

Then run:

```bash
python Generation/generate_vehicle_model.py
```

Lower-level script entry points are available when you only want one generated
area:

```bash
python Generation/scripts/build_records.py
python Generation/scripts/build_axle_models.py
python Generation/scripts/build_vehicle_sim.py
python Generation/scripts/build_four_post_sim.py
```

## Generation From BobSim

When BobLib is used from BobSim, BobSim owns the root `vehicle.yml`. The BobSim
standard build targets copy that file into BobLib's generation workspace,
regenerate the needed Modelica sources, and compile the executable.

From the BobSim root:

```bash
make standard-build
make standard-build-four-post
```

The generated input copy lives at:

```text
_0_Utils/external/BobLib/Generation/vehicle.yml
```

## Tire Records

MF5.2 tire records include pure/combined slip data and a `relaxation` record.
The generated vehicle wires tire relaxation parameters into the transient slip
model for both front and rear tires.

The relaxation record lives under:

```text
BobLib/Resources/VehicleRecord/Chassis/Suspension/Templates/Tire/MF52/RelaxationRecord.mo
```

This keeps the tire's steady-state fit data and transient relaxation
assumptions encoded together in the active Modelica record.

## Active Vehicle Shape

BobLib is generated in an active vehicle shape rather than carrying every
possible generated variant at once. This keeps the Modelica package concise and
loadable, but it means generated files should always be interpreted together
with the active `Generation/vehicle.yml` that produced them.

After regeneration, run:

```bash
make modelica-translation
make modelica-initialization
```

Run `make ci` before release or before committing generated model changes.
