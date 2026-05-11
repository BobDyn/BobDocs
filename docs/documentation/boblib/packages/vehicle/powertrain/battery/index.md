# BobLib.Vehicle.Powertrain.Battery

Battery models used by powertrain tests and future full-vehicle energy flow models.


This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.

## Package path

```modelica
BobLib.Vehicle.Powertrain.Battery
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [Templates](/documentation/boblib/packages/vehicle/powertrain/battery/templates/) | Package | Reusable/partial templates for battery models. |
| `BatteryPack` | model | Modelica component/model. |

## How this package fits

This package participates in torque and energy flow modeling. In the current public state, the powertrain layer includes component and placeholder models used by subsystem tests and vehicle-level interfaces.

## Models, records, and functions

### `BatteryPack`

- **Kind:** `model`
- **File:** `Vehicle/Powertrain/Battery/BatteryPack.mo`
- **Extends:** `BobLib.Vehicle.Powertrain.Battery.Templates.BatteryBase`
- **Imports:** `Modelica.SIunits`, `Modelica.Math.Vectors.interpolate`

**Key parameters**

| Parameter declaration |
|:--|
| `SIunits.Resistance R_cell = 0.003` |
| `SIunits.Energy E_cell = 15e3` |
| `Real SOC_table[:] = {0, 0.1, 0.2, 0.4, 0.6, 0.8, 1.0}` |
| `SIunits.Voltage V_ocv_cell_table[:] = {3.0, 3.3, 3.5, 3.7, 3.85, 4.0, 4.2}` |
| `SIunits.Resistance R_pack = (Ns/Np)*R_cell` |
| `SIunits.Energy E_pack = Ns*Np*E_cell` |

**Selected internal components**

| Component declaration |
|:--|
| `model BatteryPack extends BobLib.Vehicle.Powertrain.Battery.Templates.BatteryBase` |
| `final parameter SIunits.Resistance R_pack = (Ns/Np)*R_cell` |
| `final parameter SIunits.Energy E_pack = Ns*Np*E_cell` |
| `Modelica.Electrical.Analog.Sources.SignalVoltage signalVoltage annotation( Placement(transformation(origin = {-30, 0}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Electrical.Analog.Basic.Resistor resistor(R = R_pack) annotation( Placement(transformation(origin = {30, 0}, extent = \{\{-10, -10}, {10, 10\}\})))` |

**Connection count:** 3 `connect(...)` equations.

## Documentation notes

- Keep physical assumptions in Modelica, close to the component they describe.
- Prefer records from `BobLib.Resources` for parameterization.
- Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.
