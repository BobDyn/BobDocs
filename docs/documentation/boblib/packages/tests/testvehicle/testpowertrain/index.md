# BobLib.Tests.TestVehicle.TestPowertrain

Powertrain test models.


This package is primarily for validation, examples, and smoke testing. Test models are useful as executable documentation because they show how subsystem models are instantiated and connected.

## Package path

```modelica
BobLib.Tests.TestVehicle.TestPowertrain
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `TestBatteryInverter` | model | Modelica component/model. |
| `TestBatteryInverterMotor` | model | Modelica component/model. |
| `TestBatteryPack` | model | Modelica component/model. |
| `TestPowertrain` | model | Modelica component/model. |

## How this package fits

This package contributes to the BobLib Modelica library structure and is documented from the current package contents.

## Models, records, and functions

### `TestBatteryInverter`

- **Kind:** `model`
- **File:** `Tests/TestVehicle/TestPowertrain/TestBatteryInverter.mo`
- **Imports:** `Modelica.SIunits`

**Selected internal components**

| Component declaration |
|:--|
| `model TestBatteryInverter import Modelica.SIunits` |
| `BobLib.Vehicle.Powertrain.Battery.BatteryPack batt(Ns = 140, Np = 4, SOC_start = 1.0) annotation( Placement(transformation(origin = {0, -10}, extent = \{\{-10, -…` |
| `BobLib.Vehicle.Powertrain.Electronics.InverterDC inv annotation( Placement(transformation(origin = {0, 40}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Blocks.Sources.Step P_step(height = 80e3, // 80 kW startTime = 1.0) annotation( Placement(transformation(origin = {-30, 60}, extent = \{\{-10, -10}, {10…` |
| `Modelica.Electrical.Analog.Basic.Ground g annotation( Placement(transformation(origin = {-30, -40}, extent = \{\{-10, -10}, {10, 10\}\})))` |

**Connection count:** 4 `connect(...)` equations.

### `TestBatteryInverterMotor`

- **Kind:** `model`
- **File:** `Tests/TestVehicle/TestPowertrain/TestBatteryInverterMotor.mo`
- **Imports:** `Modelica.SIunits`

**Selected internal components**

| Component declaration |
|:--|
| `model TestBatteryInverterMotor import Modelica.SIunits` |
| `BobLib.Vehicle.Powertrain.Battery.BatteryPack batt(Ns = 140, Np = 4, SOC_start = 1.0, E_cell = 38880) annotation( Placement(transformation(origin = {-50, -10},…` |
| `BobLib.Vehicle.Powertrain.Electronics.InverterDC inv annotation( Placement(transformation(origin = {-50, 40}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Electrical.Analog.Basic.Ground g annotation( Placement(transformation(origin = {-80, -40}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Vehicle.Powertrain.Drivetrain.Motor motor annotation( Placement(transformation(origin = {-10, 10}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Mechanics.Rotational.Sensors.TorqueSensor torqueSensor annotation( Placement(transformation(origin = {20, 10}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Mechanics.Rotational.Components.Inertia inertia(J = 2) annotation( Placement(transformation(origin = {50, 10}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Blocks.Sources.CombiTimeTable combiTimeTable(table = [ 0.000000, 0.000000` |

**Connection count:** 7 `connect(...)` equations.

### `TestBatteryPack`

- **Kind:** `model`
- **File:** `Tests/TestVehicle/TestPowertrain/TestBatteryPack.mo`
- **Imports:** `Modelica.Electrical.Analog.Basic.*`, `Modelica.Electrical.Analog.Sensors.*`, `Modelica.SIunits`

**Selected internal components**

| Component declaration |
|:--|
| `model TestBatteryPack import Modelica.Electrical.Analog.Basic.*` |
| `BobLib.Vehicle.Powertrain.Battery.BatteryPack batt(Ns = 140, Np = 4, SOC_start = 1.0, R_cell = 0.020, E_cell = 3.888e4) annotation( Placement(transformation(or…` |
| `Modelica.Electrical.Analog.Basic.Resistor load(R = 4.3) "Electrical load" annotation( Placement(transformation(origin = {30, -30}, extent = \{\{10, -10}, {-10, 1…` |
| `Modelica.Electrical.Analog.Sensors.VoltageSensor V_batt annotation( Placement(transformation(origin = {-50, 0}, extent = \{\{10, -10}, {-10, 10\}\}, rotation = -18…` |
| `Modelica.Electrical.Analog.Sensors.CurrentSensor I_batt annotation( Placement(transformation(origin = {-10, -30}, extent = \{\{-10, -10}, {10, 10\}\}, rotation = 1…` |
| `Modelica.Electrical.Analog.Basic.Ground g annotation( Placement(transformation(origin = {-70, -70}, extent = \{\{-10, -10}, {10, 10\}\})))` |

**Connection count:** 6 `connect(...)` equations.

### `TestPowertrain`

- **Kind:** `model`
- **File:** `Tests/TestVehicle/TestPowertrain/TestPowertrain.mo`
- **Imports:** `Modelica.SIunits`

**Key parameters**

| Parameter declaration |
|:--|
| `Real w_avg = 60 "Average wheel speed [rad/s]"` |
| `Real dw = 0 "Wheel speed difference wL-wR [rad/s]"` |

**Selected internal components**

| Component declaration |
|:--|
| `model TestPowertrain import Modelica.SIunits` |
| `BobLib.Vehicle.Powertrain.Battery.BatteryPack batt(Ns = 140, Np = 4, SOC_start = 1.0) annotation( Placement(transformation(origin = {-80, -20}, extent = \{\{-10,…` |
| `BobLib.Vehicle.Powertrain.Electronics.InverterDC inv annotation( Placement(transformation(origin = {-80, 30}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Blocks.Sources.Step P_step(height = 80e3, // 80 kW startTime = 1.0) annotation( Placement(transformation(origin = {-110, 50}, extent = \{\{-10, -10}, {1…` |
| `Modelica.Electrical.Analog.Basic.Ground g annotation( Placement(transformation(origin = {-110, -50}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Vehicle.Powertrain.Drivetrain.Motor motor annotation( Placement(transformation(origin = {-40, 0}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Mechanics.Rotational.Sensors.TorqueSensor torqueSensor annotation( Placement(transformation(origin = {60, 20}, extent = \{\{10, -10}, {-10, 10\}\}, rotati…` |
| `Modelica.Mechanics.Rotational.Sources.Speed speed annotation( Placement(transformation(origin = {90, 20}, extent = \{\{10, -10}, {-10, 10\}\})))` |
| `Modelica.Blocks.Sources.Step speed_step(height = w_avg + dw/2, startTime = 1.0) annotation( Placement(transformation(origin = {120, 20}, extent = \{\{10, -10}, {…` |
| `Vehicle.Powertrain.Drivetrain.Differential differential(c_lock = 8, T_preload = 25, w_scale = 2) annotation( Placement(transformation(origin = {20, 0}, extent …` |
| `Modelica.Mechanics.Rotational.Components.IdealGear idealGear(ratio = 3.31, useSupport = false) annotation( Placement(transformation(origin = {-10, 0}, extent =…` |
| `Modelica.Mechanics.Rotational.Sensors.TorqueSensor torqueSensor1 annotation( Placement(transformation(origin = {60, -20}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Mechanics.Rotational.Sources.Speed speed1 annotation( Placement(transformation(origin = {90, -20}, extent = \{\{10, -10}, {-10, 10\}\})))` |
| `Modelica.Blocks.Sources.Step speed_step1(height = w_avg - dw/2, startTime = 1.0) annotation( Placement(transformation(origin = {120, -20}, extent = \{\{10, -10},…` |

**Connection count:** 13 `connect(...)` equations.

## Documentation notes

- Use these models as executable examples for subsystem instantiation.
- Keep tests small enough to isolate component behavior.
