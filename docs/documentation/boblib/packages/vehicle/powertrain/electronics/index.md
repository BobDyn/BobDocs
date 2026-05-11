# BobLib.Vehicle.Powertrain.Electronics

Powertrain electronics such as inverter and VCU models.


This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.

## Package path

```modelica
BobLib.Vehicle.Powertrain.Electronics
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `InverterDC` | model | Modelica component/model. |
| `VCU` | model | Modelica component/model. |

## How this package fits

This package participates in torque and energy flow modeling. In the current public state, the powertrain layer includes component and placeholder models used by subsystem tests and vehicle-level interfaces.

## Models, records, and functions

### `InverterDC`

- **Kind:** `model`
- **File:** `Vehicle/Powertrain/Electronics/InverterDC.mo`
- **Imports:** `Modelica.SIunits`

**Key parameters**

| Parameter declaration |
|:--|
| `Real eta_mot = 0.97 "Inverter efficiency (motoring)"` |
| `Real eta_reg = 0.95 "Inverter efficiency (regen)"` |
| `SIunits.Voltage V_eps = 1.0 "Small voltage to avoid division by zero"` |

**Interfaces and signals**

| Declaration |
|:--|
| `Modelica.Electrical.Analog.Interfaces.PositivePin p "DC bus positive" annotation( Placement(transformation(origin={-100,0}, extent=\{\{-10,-1…` |
| `Modelica.Electrical.Analog.Interfaces.NegativePin n "DC bus negative" annotation( Placement(transformation(origin={100,0}, extent=\{\{-10,-10…` |
| `Modelica.Blocks.Interfaces.RealInput P_req "Requested mechanical/electrical output power [W] (+motoring, −regen)" annotation( Placement(tra…` |
| `Modelica.Blocks.Interfaces.RealOutput P_out "Electrical power delivered to motor side [W] (+motoring, −regen)" annotation( Placement(transf…` |

**Selected internal components**

| Component declaration |
|:--|
| `model InverterDC import Modelica.SIunits` |
| `Modelica.Electrical.Analog.Sources.SignalCurrent I_dc_source annotation(Placement(transformation(origin={0,0}, extent=\{\{-10,-10},{10,10\}\})))` |
| `SIunits.Voltage V_dc "Measured DC bus voltage"` |
| `SIunits.Current I_dc "DC current drawn from battery (+discharge)"` |
| `SIunits.Power P_dc "DC electrical power from battery"` |
| `SIunits.Power P_loss "Inverter losses"` |

**Connection count:** 2 `connect(...)` equations.

### `VCU`

- **Kind:** `model`
- **File:** `Vehicle/Powertrain/Electronics/VCU.mo`
- **Imports:** `Modelica.SIunits`

**Key parameters**

| Parameter declaration |
|:--|
| `SIunits.Torque tau_max = 240 "Max motoring torque [Nm]"` |
| `SIunits.AngularVelocity w_eps = 1e-2 "Small speed for launch protection"` |

**Interfaces and signals**

| Declaration |
|:--|
| `Modelica.Blocks.Interfaces.RealInput cmd_torque_motor "Requested motor torque [Nm]" annotation( Placement(transformation(origin={-120,40}, …` |
| `Modelica.Blocks.Interfaces.RealInput cmd_regen_limit "Max allowed regen torque (positive magnitude) [Nm]" annotation( Placement(transformat…` |
| `Modelica.Blocks.Interfaces.BooleanInput cmd_inverter_enable "Inverter enable / R2D" annotation( Placement(transformation(origin={-120,0}, e…` |
| `Modelica.Blocks.Interfaces.RealInput sens_motor_speed "Motor speed [rad/s]" annotation( Placement(transformation(origin={-120,80}, extent={…` |
| `Modelica.Blocks.Interfaces.RealInput sens_hv_bus_voltage "HV bus voltage [V]" annotation( Placement(transformation(origin={-120,-80}, exten…` |
| `Modelica.Blocks.Interfaces.RealInput sens_hv_bus_current "HV bus current [A]" annotation( Placement(transformation(origin={-120,-120}, exte…` |
| `Modelica.Blocks.Interfaces.RealOutput P_req "Power request to inverter [W]" annotation( Placement(transformation(origin={120,0}, extent=\{\{-…` |
| `Modelica.Blocks.Interfaces.RealOutput tau_cmd_limited "Final torque command after limits [Nm]" annotation( Placement(transformation(origin=…` |
| `Modelica.Blocks.Interfaces.BooleanOutput vcu_active "VCU active / inverter enabled" annotation( Placement(transformation(origin={120,-40}, …` |

**Selected internal components**

| Component declaration |
|:--|
| `model VCU import Modelica.SIunits` |

## Documentation notes

- Keep physical assumptions in Modelica, close to the component they describe.
- Prefer records from `BobLib.Resources` for parameterization.
- Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.
