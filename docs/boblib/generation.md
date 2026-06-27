---
layout: doc
title: Static Vehicle Templates
prev:
  text: 'Control Bus'
  link: '/boblib/control-bus'
next:
  text: 'Entry Points'
  link: '/boblib/entry-points'
---

# Static Vehicle Templates

BobLib no longer uses a Python/YAML generation step for the active vehicle.
Vehicle architectures are checked in as ordinary Modelica classes and records
so the package can be inspected, edited, translated, and reviewed without
regenerating source files first.

## VehicleInterfaces Boundary

The integrated package is organized so VehicleInterfaces-facing models are
obvious:

- top-level subsystem models extend or adapt the VehicleInterfaces contracts
- deeper packages contain BobLib's reusable physics
- subsystem-specific actuators, records, tires, and helpers live with the
  package that owns them
- shared math, FMI, mechanics, and multibody helpers live under `Utilities`

This keeps the shared contract separate from the physics implementation.

## Standard Template Layer

`BobLibVehicleInterfaces.Experiments.Standards.Templates.BaseVehicleSim`
contains the shared maneuver simulation assembly. It exposes the complete
subsystem set as redeclareable items:

```txt
replaceable record VehicleRecord =
  BobLibVehicleInterfaces.Records.VehicleDefn.DWBCStabar_DWBCStabarRecord;

replaceable BobLibVehicleInterfaces.Chassis.Chassis_DWBCStabar_DWBCStabar chassis;
replaceable BobLibVehicleInterfaces.EnergyStorage.BatteryPack battery;
replaceable BobLibVehicleInterfaces.Controllers.VCU vcu;
replaceable BobLibVehicleInterfaces.PowerElectronics.InverterDC inverter;
replaceable BobLibVehicleInterfaces.ElectricDrives.Motor motor;
replaceable BobLibVehicleInterfaces.Drivelines.RearFinalDriveDifferential driveline;
```

The front-facing entry point stays small:

```txt
model VehicleSim
  extends Templates.BaseVehicleSim(
    redeclare record VehicleRecord =
      BobLibVehicleInterfaces.Records.VehicleDefn.DWBCStabar_DWBCStabarRecord,
    redeclare BobLibVehicleInterfaces.Chassis.Chassis_DWBCStabar_DWBCStabar chassis,
    redeclare BobLibVehicleInterfaces.EnergyStorage.BatteryPack battery,
    redeclare BobLibVehicleInterfaces.Controllers.VCU vcu,
    redeclare BobLibVehicleInterfaces.PowerElectronics.InverterDC inverter,
    redeclare BobLibVehicleInterfaces.ElectricDrives.Motor motor,
    redeclare BobLibVehicleInterfaces.Drivelines.RearFinalDriveDifferential driveline);
end VehicleSim;
```

Users can follow the template pattern, redeclare a different architecture, or
hard-code a year-specific model once the architecture is fixed.

## Four-Post Templates

`BaseFourPostSim` follows the same idea for K&C/four-post evaluation. The
front-facing `FourPostSim` extends the selected architecture template, and the
template redeclares the vehicle record plus matching front and rear four-post
axle adapters.

The current checked-in suspension matrix covers:

- `DWDirect`
- `DWBC`
- `DWBCStabar`

for front and rear axle positions.

## Extending The Matrix

To add a new vehicle architecture, add or update the Modelica sources directly:

1. Add the record under `BobLibVehicleInterfaces/Records/VehicleDefn/`.
2. Add subsystem records under `Records/VehicleRecord/` near the owning domain.
3. Add any needed axle assembly under `Chassis/Suspension/`.
4. Add or update domain models one level below the public package boundary.
5. Add a `VehicleSim` template or direct experiment that exposes the full
   redeclare set.
6. Add a `FourPostSim` template when the architecture needs four-post/K&C
   coverage.
7. Add the new classes to the relevant `package.order` files.
8. Add or update `BobLibVehicleInterfacesTests` fixtures.
9. Run the translation, initialization, and smoke checks.

## Validation

After changing static vehicle templates, run:

```bash
make modelica-translation PYTHON=.venv/bin/python
make modelica-initialization PYTHON=.venv/bin/python
python -m pytest Tests/test_boblibvehicleinterfaces_modelica.py
```

Run `make test PYTHON=.venv/bin/python` before release or before committing
behavior changes.
