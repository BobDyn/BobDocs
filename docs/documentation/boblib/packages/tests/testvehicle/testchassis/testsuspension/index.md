# BobLib.Tests.TestVehicle.TestChassis.TestSuspension

Suspension test models.


This package is primarily for validation, examples, and smoke testing. Test models are useful as executable documentation because they show how subsystem models are instantiated and connected.

## Package path

```modelica
BobLib.Tests.TestVehicle.TestChassis.TestSuspension
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [TestLinkages](/documentation/boblib/packages/tests/testvehicle/testchassis/testsuspension/testlinkages/) | Package | Linkage test models. |
| [TestTemplates](/documentation/boblib/packages/tests/testvehicle/testchassis/testsuspension/testtemplates/) | Package | Suspension template test models. |
| `TestFrAxleDW` | model | Modelica component/model. |
| `TestRrAxleDW` | model | Modelica component/model. |

## How this package fits

This package contributes to the BobLib Modelica library structure and is documented from the current package contents.

## Models, records, and functions

### `TestFrAxleDW`

- **Kind:** `model`
- **File:** `Tests/TestVehicle/TestChassis/TestSuspension/TestFrAxleDW.mo`
- **Imports:** `Modelica.Constants.pi`, `Modelica.Mechanics.MultiBody.Frames`, `BobLib.Resources.VehicleDefn.OrionRecord`, `BobLib.Utilities.Math.Vector`

**Key parameters**

| Parameter declaration |
|:--|
| `OrionRecord pVehicle` |
| `Real leftCPInit[3] = pVehicle.pFrDW.wheelCenter + Frames.resolve1(Frames.axesRotations({1, 2, 3}, {pVehicle.pFrPartialWheel.staticGamma*pi/…` |
| `Real rightCPInit[3] = Vector.mirrorXZ(leftCPInit)` |

**Selected internal components**

| Component declaration |
|:--|
| `model TestFrAxleDW import Modelica.Constants.pi` |
| `inner parameter Real linkDiameter = 0.020` |
| `inner parameter Real jointDiameter = 0.030` |
| `inner Modelica.Mechanics.MultiBody.World world(n = {0, 0, -1}) annotation( Placement(transformation(origin = {-110, -90}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Blocks.Sources.Ramp steerRamp(duration = 1, height = 90*Modelica.Constants.pi/180, startTime = 0) annotation( Placement(transformation(origin = {-80, …` |
| `Modelica.Mechanics.Rotational.Sources.Position steerPosition(exact = true) annotation( Placement(transformation(origin = {-50, 70}, extent = \{\{-10, -10}, {10, …` |
| `Modelica.Blocks.Sources.Ramp leftJounceRamp(duration = 1, height = 1*0.0254, startTime = 0) annotation( Placement(transformation(origin = {-110, 0}, extent = {…` |
| `Modelica.Blocks.Sources.Ramp rightJounceRamp(duration = 1, height = -1*0.0254, startTime = 0) annotation( Placement(transformation(origin = {110, 0}, extent = …` |
| `BobLib.Vehicle.Chassis.Suspension.FrAxleDW_BC_ARB frAxleDW(pAxle = pVehicle.pFrAxleDW, pRack = pVehicle.pFrRack, pStabar = pVehicle.pFrStabar, pLeftPartialWhee…` |

**Connection count:** 19 `connect(...)` equations.

### `TestRrAxleDW`

- **Kind:** `model`
- **File:** `Tests/TestVehicle/TestChassis/TestSuspension/TestRrAxleDW.mo`
- **Imports:** `Modelica.Constants.pi`, `Modelica.Mechanics.MultiBody.Frames`, `BobLib.Resources.VehicleDefn.OrionRecord`, `BobLib.Utilities.Math.Vector`

**Key parameters**

| Parameter declaration |
|:--|
| `OrionRecord pVehicle` |
| `Real leftCPInit[3] = pVehicle.pRrDW.wheelCenter + Frames.resolve1(Frames.axesRotations({1, 2, 3}, {pVehicle.pRrPartialWheel.staticGamma*pi/…` |
| `Real rightCPInit[3] = Vector.mirrorXZ(leftCPInit)` |

**Selected internal components**

| Component declaration |
|:--|
| `model TestRrAxleDW import Modelica.Constants.pi` |
| `inner parameter Real linkDiameter = 0.020` |
| `inner parameter Real jointDiameter = 0.030` |
| `inner Modelica.Mechanics.MultiBody.World world(n = {0, 0, -1}) annotation( Placement(transformation(origin = {-110, -90}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Blocks.Sources.Ramp steerRamp(duration = 1, height = 60*Modelica.Constants.pi/180, startTime = 0) annotation( Placement(transformation(origin = {-80, …` |
| `Modelica.Mechanics.Rotational.Sources.Position steerPosition(exact = true) annotation( Placement(transformation(origin = {-50, 70}, extent = \{\{-10, -10}, {10, …` |
| `Modelica.Blocks.Sources.Ramp leftJounceRamp(duration = 1, height = 1*0.0254, startTime = 0) annotation( Placement(transformation(origin = {-110, 0}, extent = {…` |
| `Modelica.Blocks.Sources.Ramp rightJounceRamp(duration = 1, height = -1*0.0254, startTime = 0) annotation( Placement(transformation(origin = {110, 0}, extent = …` |
| `BobLib.Vehicle.Chassis.Suspension.RrAxleDW_BC_ARB rrAxleDW(pAxle = pVehicle.pRrAxleDW, pRack = pVehicle.pRrRack, pStabar = pVehicle.pRrStabar, pLeftPartialWhee…` |

**Connection count:** 19 `connect(...)` equations.

## Documentation notes

- Use these models as executable examples for subsystem instantiation.
- Keep tests small enough to isolate component behavior.
