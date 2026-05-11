# BobLib.Vehicle.Powertrain.Battery.Templates

Reusable/partial templates for battery models.


This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.

## Package path

```modelica
BobLib.Vehicle.Powertrain.Battery.Templates
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `BatteryBase` | partial model | Modelica component/model. |

## How this package fits

This package participates in torque and energy flow modeling. In the current public state, the powertrain layer includes component and placeholder models used by subsystem tests and vehicle-level interfaces.

## Models, records, and functions

### `BatteryBase`

- **Kind:** `partial model`
- **File:** `Vehicle/Powertrain/Battery/Templates/BatteryBase.mo`
- **Imports:** `Modelica.SIunits`

**Key parameters**

| Parameter declaration |
|:--|
| `Integer Ns(min=1) "Number of cells in series"` |
| `Integer Np(min=1) "Number of cells in parallel"` |
| `Real SOC_start(unit="1", min=0, max=1) = 1 "Initial battery state of charge"` |

**Interfaces and signals**

| Declaration |
|:--|
| `Modelica.Electrical.Analog.Interfaces.PositivePin p "Positive DC terminal" annotation( Placement(transformation(origin = {-100, 0}, extent …` |
| `Modelica.Electrical.Analog.Interfaces.NegativePin n "Negative DC terminal" annotation( Placement(transformation(origin = {100, 0}, extent =…` |

**Selected internal components**

| Component declaration |
|:--|
| `partial model BatteryBase import Modelica.SIunits` |
| `Real SOC(unit="1", min=0, max=1) "Pack state of charge"` |
| `SIunits.Voltage v "Terminal voltage (p.v - n.v)"` |
| `SIunits.Current i "Battery current (positive -> discharge)"` |
| `SIunits.Power P "Electrical power (i * v)"` |

## Documentation notes

- Keep physical assumptions in Modelica, close to the component they describe.
- Prefer records from `BobLib.Resources` for parameterization.
- Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.
