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

BobLib vehicle architectures are checked-in Modelica classes and records. There
is no Python or YAML generation step. You can inspect, edit, translate, and
review the package without regenerating source files.

## Template layers

Each standard entry point sits on three layers:

| Layer | Example | Role |
| :-- | :-- | :-- |
| Base template | `Templates.Vehicle.BaseVehicleSim` | Plant wiring, maneuver monitors, and the full replaceable subsystem set |
| Architecture template | `Templates.Vehicle.VehicleSim_EVBatInvMotDiff_DWBCStabar_DWBCStabar` | Redeclares the vehicle record and the front and rear axles for one architecture |
| Entry point | `Standards.VehicleSim` | Extends one architecture template and sets the experiment |

`BaseVehicleSim` exposes each subsystem as a replaceable component:

```txt
replaceable record VehicleRecord =
  BobLib.Records.VehicleDefn.EVBatInvMotDiff_DWBCStabar_DWBCStabarRecord;

replaceable BobLib.Chassis.Chassis_DWBCStabar_DWBCStabar chassis;
replaceable BobLib.EnergyStorage.BatteryPack battery;
replaceable BobLib.Controllers.StandardVCU vcu;
replaceable BobLib.PowerElectronics.InverterDC inverter;
replaceable BobLib.ElectricDrives.Motor motor;
replaceable BobLib.Transmissions.FixedRatioTransmission transmission;
replaceable BobLib.Drivelines.RearFinalDriveDifferential driveline;
replaceable BobLib.Chassis.Brakes.BasicVCUBrakes brakes;
```

The road, atmosphere, and MultiBody world are also replaceable.

An architecture template redeclares the record and the chassis axles. This is
a shortened copy of
`VehicleSim_EVBatInvMotDiff_DWBCStabar_DWBCStabar`:

```txt
model VehicleSim_EVBatInvMotDiff_DWBCStabar_DWBCStabar
  extends BaseVehicleSim(
    redeclare record VehicleRecord =
      BobLib.Records.VehicleDefn.EVBatInvMotDiff_DWBCStabar_DWBCStabarRecord,
    redeclare BobLib.Chassis.Chassis_DW chassis(
      redeclare model FrAxleModel = BobLib.Chassis.Suspension.FrAxleDW_BC_Stabar,
      redeclare model RrAxleModel = BobLib.Chassis.Suspension.RrAxleDW_BC_Stabar,
      ...));
end VehicleSim_EVBatInvMotDiff_DWBCStabar_DWBCStabar;
```

`Standards.VehicleSim` extends that template and adds the initial chassis pose
and the experiment settings.

You can follow this pattern, redeclare a different architecture, or hard-code a
year-specific model once the architecture is fixed.

## Suspension matrix

The checked-in templates cover every front and rear combination of three axle
types:

| Name | Axle models |
| :-- | :-- |
| `DWDirect` | `FrAxleDW_Direct`, `RrAxleDW_Direct` |
| `DWBC` | `FrAxleDW_BC`, `RrAxleDW_BC` |
| `DWBCStabar` | `FrAxleDW_BC_Stabar`, `RrAxleDW_BC_Stabar` |

That gives nine `VehicleSim_EVBatInvMotDiff_<front>_<rear>` templates, nine
`FourPostSim_<front>_<rear>` templates, and nine matching records under
`Records.VehicleDefn`.

`Templates.FourPost.BaseFourPostSim` applies the same idea to four-post and K&C
runs. Each four-post template redeclares the vehicle record and the front and
rear axle models.

## Switch the architecture

To change the architecture of a standard entry point, edit
`BobLib/Experiments/Standards/VehicleSim.mo` or `FourPostSim.mo` so it extends a
different architecture template. A project- or year-specific model can also
extend a template and set explicit values there.

## Add an architecture

1. Add the vehicle record under `BobLib/Records/VehicleDefn/`.
2. Add subsystem records under `Records/VehicleRecord/`, near the owning domain.
3. Add any new axle assembly under `Chassis/Suspension/`.
4. Add or update domain models one level below the public package boundary.
5. Add a `VehicleSim` template, or a direct experiment that exposes the full
   redeclare set.
6. Add a `FourPostSim` template if the architecture needs four-post or K&C
   coverage.
7. Add the new classes to the relevant `package.order` files.
8. Add or update `BobLibTest` fixtures.
9. Run the checks below.

## Validate a change

```bash
make modelica-translation PYTHON=.venv/bin/python
make modelica-initialization PYTHON=.venv/bin/python
python -m pytest Tests/test_boblib_modelica.py
```

Run `make ci PYTHON=.venv/bin/python` before you commit a behavior change. See
[Tests and Checks](/boblib/testing).
