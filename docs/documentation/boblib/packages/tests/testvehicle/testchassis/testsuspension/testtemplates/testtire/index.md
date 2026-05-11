# BobLib.Tests.TestVehicle.TestChassis.TestSuspension.TestTemplates.TestTire

Tire template test models.


This package is primarily for validation, examples, and smoke testing. Test models are useful as executable documentation because they show how subsystem models are instantiated and connected.

## Package path

```text
BobLib.Tests.TestVehicle.TestChassis.TestSuspension.TestTemplates.TestTire
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [TestMF52](/documentation/boblib/packages/tests/testvehicle/testchassis/testsuspension/testtemplates/testtire/testmf52/) | Package | MF52 tire test models. |
| `TestFourMF52Kinematic` | model | Modelica component/model. |
| `TestFourMF52Transient` | model | Modelica component/model. |

## How this package fits

This package contributes to the BobLib Modelica library structure and is documented from the current package contents.

## Models, records, and functions

### `TestFourMF52Kinematic`

- **Kind:** `model`
- **File:** `Tests/TestVehicle/TestChassis/TestSuspension/TestTemplates/TestTire/TestFourMF52Kinematic.mo`
- **Imports:** `Modelica.SIunits`, `Modelica.Math.Vectors.norm`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Resources.VehicleDefn.OrionRecord`

**Key parameters**

| Parameter declaration |
|:--|
| `OrionRecord pCar` |
| `SIunits.Velocity velocity = 10` |

**Selected internal components**

| Component declaration |
|:--|
| `model TestFourMF52Kinematic import Modelica.SIunits` |
| `inner parameter SIunits.Length linkDiameter = 0.020` |
| `inner parameter SIunits.Length jointDiameter = 0.030` |
| `Real body_accels[3]` |
| `Real normal_loads[4]` |
| `Real long_LT` |
| `Real lat_LT` |
| `Real calc_FL` |
| `Real calc_FR` |
| `Real calc_RL` |
| `Real calc_RR` |
| `Real vCG` |
| `inner Modelica.Mechanics.MultiBody.World world(n = {0, 0, -1}) annotation( Placement(transformation(origin = {-110, -110}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52Tire tireFL(pPartialWheel = pCar.pFrPartialWheel, pTireModel = pCar.pFrTireModel, redeclare BobLib.Vehicle…` |
| `BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52Tire tireFR(pPartialWheel = PartialWheelRecord(R0 = pCar.pFrPartialWheel.R0, rimR0 = pCar.pFrPartialWheel.…` |
| `BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52Tire tireRL(pPartialWheel = pCar.pFrPartialWheel, pTireModel = pCar.pFrTireModel, redeclare BobLib.Vehicle…` |
| `BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52Tire tireRR(pPartialWheel = PartialWheelRecord(R0 = pCar.pFrPartialWheel.R0, rimR0 = pCar.pFrPartialWheel.…` |
| `Utilities.Mechanics.Multibody.GroundPhysics groundFL annotation( Placement(transformation(origin = {-70, 40}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Utilities.Mechanics.Multibody.GroundPhysics groundFR annotation( Placement(transformation(origin = {70, 40}, extent = \{\{10, -10}, {-10, 10\}\})))` |
| `Utilities.Mechanics.Multibody.GroundPhysics groundRL annotation( Placement(transformation(origin = {-70, -40}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Utilities.Mechanics.Multibody.GroundPhysics groundRR annotation( Placement(transformation(origin = {70, -40}, extent = \{\{10, -10}, {-10, 10\}\})))` |
| `Modelica.Blocks.Sources.Ramp steerRamp(duration = 5, height = 5*Modelica.Constants.pi/180, startTime = 0) annotation( Placement(transformation(origin = {-110, …` |
| `Modelica.Mechanics.Rotational.Sources.Position steerPosition(exact = true) annotation( Placement(transformation(origin = {-70, 110}, extent = \{\{-10, -10}, {10,…` |
| `Modelica.Mechanics.MultiBody.Joints.Revolute leftRevolute(useAxisFlange = true) annotation( Placement(transformation(origin = {-46, 80}, extent = \{\{10, -10}, {…` |
| `Modelica.Mechanics.MultiBody.Joints.Revolute rightRevolute(useAxisFlange = true) annotation( Placement(transformation(origin = {46, 80}, extent = \{\{-10, -10}, …` |
| _…and 5 more._ |

**Connection count:** 31 `connect(...)` equations.

### `TestFourMF52Transient`

- **Kind:** `model`
- **File:** `Tests/TestVehicle/TestChassis/TestSuspension/TestTemplates/TestTire/TestFourMF52Transient.mo`
- **Imports:** `Modelica.SIunits`, `Modelica.Math.Vectors.norm`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `BobLib.Resources.VehicleDefn.OrionRecord`

**Key parameters**

| Parameter declaration |
|:--|
| `OrionRecord pCar` |
| `SIunits.Velocity velocity = 10` |

**Selected internal components**

| Component declaration |
|:--|
| `model TestFourMF52Transient import Modelica.SIunits` |
| `inner parameter SIunits.Length linkDiameter = 0.020` |
| `inner parameter SIunits.Length jointDiameter = 0.030` |
| `Real body_accels[3]` |
| `Real normal_loads[4]` |
| `Real long_LT` |
| `Real lat_LT` |
| `Real calc_FL` |
| `Real calc_FR` |
| `Real calc_RL` |
| `Real calc_RR` |
| `Real vCG` |
| `inner Modelica.Mechanics.MultiBody.World world(n = {0, 0, -1}) annotation( Placement(transformation(origin = {-110, -110}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52Tire tireFL(pPartialWheel = pCar.pFrPartialWheel, pTireModel = pCar.pFrTireModel, redeclare BobLib.Vehicle…` |
| `BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52Tire tireFR(pPartialWheel = PartialWheelRecord(R0 = pCar.pFrPartialWheel.R0, rimR0 = pCar.pFrPartialWheel.…` |
| `BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52Tire tireRL(pPartialWheel = pCar.pFrPartialWheel, pTireModel = pCar.pFrTireModel, redeclare BobLib.Vehicle…` |
| `BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52Tire tireRR(pPartialWheel = PartialWheelRecord(R0 = pCar.pFrPartialWheel.R0, rimR0 = pCar.pFrPartialWheel.…` |
| `Utilities.Mechanics.Multibody.GroundPhysics groundFL annotation( Placement(transformation(origin = {-70, 40}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Utilities.Mechanics.Multibody.GroundPhysics groundFR annotation( Placement(transformation(origin = {70, 40}, extent = \{\{10, -10}, {-10, 10\}\})))` |
| `Utilities.Mechanics.Multibody.GroundPhysics groundRL annotation( Placement(transformation(origin = {-70, -40}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Utilities.Mechanics.Multibody.GroundPhysics groundRR annotation( Placement(transformation(origin = {70, -40}, extent = \{\{10, -10}, {-10, 10\}\})))` |
| `Modelica.Blocks.Sources.Ramp steerRamp(duration = 0, height = 5*Modelica.Constants.pi/180, startTime = 1) annotation( Placement(transformation(origin = {-110, …` |
| `Modelica.Mechanics.Rotational.Sources.Position steerPosition(exact = true) annotation( Placement(transformation(origin = {-70, 110}, extent = \{\{-10, -10}, {10,…` |
| `Modelica.Mechanics.MultiBody.Joints.Revolute leftRevolute(useAxisFlange = true) annotation( Placement(transformation(origin = {-46, 80}, extent = \{\{10, -10}, {…` |
| `Modelica.Mechanics.MultiBody.Joints.Revolute rightRevolute(useAxisFlange = true) annotation( Placement(transformation(origin = {46, 80}, extent = \{\{-10, -10}, …` |
| _…and 5 more._ |

**Connection count:** 31 `connect(...)` equations.

## Documentation notes

- Use these models as executable examples for subsystem instantiation.
- Keep tests small enough to isolate component behavior.
