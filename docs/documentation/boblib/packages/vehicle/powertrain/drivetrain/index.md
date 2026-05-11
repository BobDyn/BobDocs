# BobLib.Vehicle.Powertrain.Drivetrain

Drivetrain elements such as motor and differential models.


This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.

## Package path

```text
BobLib.Vehicle.Powertrain.Drivetrain
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `Differential` | model | Modelica component/model. |
| `Motor` | model | Modelica component/model. |

## How this package fits

This package participates in torque and energy flow modeling. In the current public state, the powertrain layer includes component and placeholder models used by subsystem tests and vehicle-level interfaces.

## Models, records, and functions

### `Differential`

- **Kind:** `model`
- **File:** `Vehicle/Powertrain/Drivetrain/Differential.mo`
- **Imports:** `Modelica.SIunits`, `Modelica.Math.tanh`

**Key parameters**

| Parameter declaration |
|:--|
| `Real c_lock = 50 "Locking gain [N·m/(rad/s)]"` |
| `SIunits.Torque T_preload = 20 "Preload locking torque [Nm]"` |
| `SIunits.AngularVelocity w_scale = 1.0 "Slip speed scaling for tanh() [rad/s]"` |

**Interfaces and signals**

| Declaration |
|:--|
| `Modelica.Mechanics.Rotational.Interfaces.Flange_a shaft_in "Input from chain/gearbox" annotation( Placement(transformation(origin={-100,0},…` |
| `Modelica.Mechanics.Rotational.Interfaces.Flange_b shaft_left "Left halfshaft output" annotation( Placement(transformation(origin={100,40}, …` |
| `Modelica.Mechanics.Rotational.Interfaces.Flange_b shaft_right "Right halfshaft output" annotation( Placement(transformation(origin={100,-40…` |
| `Modelica.Mechanics.Rotational.Interfaces.Flange_a support annotation( Placement(transformation(origin = {0, -100}, extent = \{\{-10, -10}, {1…` |

**Selected internal components**

| Component declaration |
|:--|
| `model Differential import Modelica.SIunits` |
| `SIunits.AngularVelocity w_in` |
| `SIunits.AngularVelocity w_l` |
| `SIunits.AngularVelocity w_r` |
| `SIunits.AngularVelocity dw` |
| `SIunits.Torque T_in` |
| `SIunits.Torque T_lock` |

### `Motor`

- **Kind:** `model`
- **File:** `Vehicle/Powertrain/Drivetrain/Motor.mo`
- **Imports:** `Modelica.SIunits`, `Modelica.Constants.pi`

**Key parameters**

| Parameter declaration |
|:--|
| `SIunits.Voltage Vdc_max = 670 "Max battery voltage (datasheet) [Vdc]"` |
| `Real rpm_fullLoad_ref = 5300 "Full-load RPM at Vdc_max (datasheet)"` |
| `Real rpm_noLoad_ref = 6500 "No-load RPM at Vdc_max (datasheet)"` |
| `Real rpm_max_cont = 5500 "Max continuous rotation speed (datasheet) [rpm]"` |
| `Real rpm_max_peak = 6500 "Max peak speed for a few seconds (datasheet) [rpm]"` |
| `SIunits.Torque T_peak = 240 "Peak torque for a few seconds [Nm]"` |
| `SIunits.Torque T_cont = 125 "Continuous torque [Nm]"` |
| `SIunits.Current I_peak_2min = 240 "Max motor current for ~2 min if cooled [Arms]"` |
| `SIunits.Current I_cont = 115 "Continuous motor current [Arms]"` |
| `Real Kt_Nm_per_A = 1.1 "Torque per phase current (datasheet) [Nm/A]"` |
| `SIunits.Power P_mech_peak = 100e3 "Peak motor mechanical power capability [W] (datasheet)"` |
| `SIunits.Power P_cont_low = 28e3 "Low end continuous power band (datasheet) [W]"` |
| `SIunits.Power P_cont_high = 42e3 "High end continuous power band (datasheet) [W]"` |
| `Real eta_mot = 0.95 "Motoring efficiency placeholder (swap to 2D map later)"` |
| `Real eta_reg = 0.93 "Regen efficiency placeholder"` |
| `Real lossTable[:,2] = [ 0, 0` |
| `SIunits.Time peakTime = 5 "How long peak limits are allowed (seconds)"` |
| `Boolean enablePeakTimer = true "If true, peak limits ramp down after peakTime"` |
| `SIunits.AngularVelocity w_eps = 1e-3 "Small omega"` |
| `SIunits.Time tau_tau = 0.002 "Torque actuator time constant"` |

**Interfaces and signals**

| Declaration |
|:--|
| `Real tbl[:,2]` |
| `Real xq` |
| `Real yq` |
| `Modelica.Blocks.Interfaces.RealInput P_elec "Electrical power into motor [W] (+motoring, −regen) (connect from inverter P_out)" annotation(…` |
| `Modelica.Mechanics.Rotational.Interfaces.Flange_b shaft annotation( Placement(transformation(origin={100, 0}, extent=\{\{-10, -10}, {10, 10\}\}…` |

**Selected internal components**

| Component declaration |
|:--|
| `model Motor import Modelica.SIunits` |
| `SIunits.AngularVelocity w "Shaft speed [rad/s]"` |
| `Real rpm "Shaft speed [rpm]"` |
| `SIunits.Power P_loss_free "Free-run losses [W]"` |
| `SIunits.Power P_mech_cmd "Commanded mechanical power after eff/loss [W]"` |
| `SIunits.Power P_mech "Actual mechanical power at shaft [W]"` |
| `SIunits.Torque tau_cmd "Commanded torque [Nm]"` |
| `SIunits.Torque tau_lim "Active torque limit [Nm]"` |
| `SIunits.Torque tau_lim_from_power "Torque limit from peak power [Nm]"` |
| `SIunits.Torque tau_lim_from_current "Torque limit from current [Nm]"` |
| `SIunits.Power P_cont_env "Continuous power envelope [W]"` |
| `Modelica.Mechanics.Rotational.Sources.Torque torque annotation( Placement(transformation(extent = \{\{-10, -10}, {10, 10\}\})))` |

**Connection count:** 1 `connect(...)` equations.

## Documentation notes

- Keep physical assumptions in Modelica, close to the component they describe.
- Prefer records from `BobLib.Resources` for parameterization.
- Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.
