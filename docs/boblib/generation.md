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

BobDyn/BobLib's active vehicle is generated from:

```text
Generation/vehicle.yml
```

The generation layer is what lets BobDyn/BobLib keep one active Modelica package shape
while still supporting multiple vehicle architectures through YAML templates.

## What The YAML Controls

The YAML controls:

- front and rear suspension topology
- vehicle record name and generated wrapper model
- BobDyn/BobLib, vehicle-template, and tire-template paths
- sprung mass and driver mass properties
- body torsional stiffness
- front and rear wheel, tire, suspension, steering, actuation, stabar, and mass
  data
- aero map data
- tire template selection

Supported suspension topology keys are:

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

Generated files are part of the active BobDyn/BobLib package. Treat
`Generation/vehicle.yml`, the templates in `Generation/`, and the source model
templates as the durable inputs when changing vehicle architecture or data.

## Standalone BobDyn/BobLib Generation

From a standalone BobDyn/BobLib checkout, update the `paths.boblib`,
`paths.vehicle_templates`, and `paths.tire_templates` values in
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

## Generation From BobDyn/BobSim

When BobDyn/BobLib is used from BobDyn/BobSim, the usual sequence is:

```bash
make sync-vehicle-yaml
python _0_Utils/external/BobLib/Generation/generate_vehicle_model.py
```

When working from the BobDyn/BobLib directory inside a BobDyn/BobSim checkout:

```bash
python Generation/generate_vehicle_model.py
```

In that workflow, the BobDyn/BobSim repository root owns the source `vehicle.yml`, and
`make sync-vehicle-yaml` copies it into:

```text
_0_Utils/external/BobLib/Generation/vehicle.yml
```

## Active Vehicle Shape

BobDyn/BobLib is generated in an active vehicle shape rather than carrying every
possible generated variant at once. This keeps the Modelica package concise and
loadable, but it means generated files should always be interpreted together
with the active `Generation/vehicle.yml` that produced them.
