# BobLib.Vehicle.Powertrain

Powertrain interface and component layer. It contains the placeholder powertrain and subpackages for battery, drivetrain, and electronics.


This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.

## Package path

```text
BobLib.Vehicle.Powertrain
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [Battery](/documentation/boblib/packages/vehicle/powertrain/battery/) | Package | Battery models used by powertrain tests and future full-vehicle energy flow models. |
| [Drivetrain](/documentation/boblib/packages/vehicle/powertrain/drivetrain/) | Package | Drivetrain elements such as motor and differential models. |
| [Electronics](/documentation/boblib/packages/vehicle/powertrain/electronics/) | Package | Powertrain electronics such as inverter and VCU models. |
| `PTNPlaceholder` | model | Modelica component/model. |

## How this package fits

This package participates in torque and energy flow modeling. In the current public state, the powertrain layer includes component and placeholder models used by subsystem tests and vehicle-level interfaces.

## Models, records, and functions

### `PTNPlaceholder`

- **Kind:** `model`
- **File:** `Vehicle/Powertrain/PTNPlaceholder.mo`

**Interfaces and signals**

| Declaration |
|:--|
| `Modelica.Mechanics.MultiBody.Interfaces.Frame_a mountFrame annotation( Placement(transformation(origin = {0, 40}, extent = \{\{-16, -16}, {16…` |
| `Modelica.Mechanics.Rotational.Interfaces.Flange_b leftFlange annotation( Placement(transformation(origin = {-60, 0}, extent = \{\{-10, -10}, …` |
| `Modelica.Mechanics.Rotational.Interfaces.Flange_b rightFlange annotation( Placement(transformation(origin = {60, 0}, extent = \{\{-10, -10}, …` |
| `Modelica.Blocks.Interfaces.RealInput u annotation( Placement(transformation(origin = {0, -50}, extent = \{\{-10, -10}, {10, 10\}\}, rotation = …` |

**Selected internal components**

| Component declaration |
|:--|
| `model PTNPlaceholder Modelica.Mechanics.Rotational.Sources.Torque2 leftTorque annotation( Placement(transformation(origin = {-30, -10}, extent = \{\{-10, -10}, {…` |
| `Modelica.Mechanics.Rotational.Sources.Torque2 rightTorque annotation( Placement(transformation(origin = {30, -10}, extent = \{\{10, -10}, {-10, 10\}\}, rotation = …` |
| `Modelica.Mechanics.MultiBody.Parts.Mounting1D mounting1D annotation( Placement(transformation(origin = {0, -10}, extent = \{\{-10, -10}, {10, 10\}\}, rotation = 18…` |
| `Modelica.Blocks.Math.Gain gain(k = 1/2) annotation( Placement(transformation(origin = {0, -25}, extent = \{\{-5, -5}, {5, 5\}\}, rotation = 90)))` |

**Connection count:** 8 `connect(...)` equations.

## Documentation notes

- Keep physical assumptions in Modelica, close to the component they describe.
- Prefer records from `BobLib.Resources` for parameterization.
- Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.
