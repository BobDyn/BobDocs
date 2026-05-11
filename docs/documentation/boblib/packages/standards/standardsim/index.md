# BobLib.Standards.StandardSim

Concrete standard simulation models for ISO-style workflows and kinematics/compliance sweeps.


This package is part of the standard-workflow layer. Models here wrap the physical vehicle model with maneuver inputs, output records, controllers, and external interfaces.

## Package path

```modelica
BobLib.Standards.StandardSim
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [Templates](/documentation/boblib/packages/standards/standardsim/templates/) | Package | Partial/templates shared by standard simulation models. |
| `FrKnC` | model | Modelica component/model. |
| `ISO4138` | model | Modelica component/model. |
| `ISO7401` | model | Modelica component/model. |
| `RrKnC` | model | Modelica component/model. |
| `BuildKnC.mos` | script | OpenModelica build/simulation script. |

## How this package fits

This package contributes to the BobLib Modelica library structure and is documented from the current package contents.

## Models, records, and functions

### `FrKnC`

- **Kind:** `model`
- **File:** `Standards/StandardSim/FrKnC.mo`
- **Extends:** `BobLib.Standards.Templates.KnC(final toAxle(r = {pVehicle.pFrDW.wheelCenter[1],…`
- **Imports:** `Modelica.SIunits`, `Modelica.Constants.pi`, `Modelica.Mechanics.MultiBody.Frames`, `BobLib.Utilities.Math.Vector`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`

**Key parameters**

| Parameter declaration |
|:--|
| `OrionRecord pVehicle annotation( Placement(visible = false, transformation(origin = {nan, nan}, extent = \{\{nan, nan}, {nan, nan\}\})))` |
| `Real leftCPInit[3] = pVehicle.pFrDW.wheelCenter + Frames.resolve1(Frames.axesRotations({1, 2, 3}, {pVehicle.pFrPartialWheel.staticGamma*pi/…` |
| `Real rightCPInit[3] = Vector.mirrorXZ(leftCPInit)` |

**Selected internal components**

| Component declaration |
|:--|
| `model FrKnC import Modelica.SIunits` |
| `final leftCPFixed(r = leftCPInit), final rightCPFixed(r = rightCPInit))` |
| `AxleDW_BC_ARB_VisualRecord vis` |
| `BobLib.Vehicle.Chassis.Suspension.FrAxleDW_BC_ARB frAxleDW(pAxle = AxleDWRecord(bellcrankPivot = pVehicle.pFrAxleDW.bellcrankPivot, bellcrankPivotAxis = pVehic…` |
| `redeclare BobLib.Vehicle.Chassis.Suspension.Templates.Tire.BaseTire leftTire( redeclare BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52.SlipModel.NoSlip …` |

**Connection count:** 7 `connect(...)` equations.

### `ISO4138`

- **Kind:** `model`
- **File:** `Standards/StandardSim/ISO4138.mo`
- **Imports:** `Modelica.SIunits`, `Modelica.Constants.pi`, `Modelica.Math.Vectors.norm`, `Modelica.Mechanics.MultiBody.Frames`, `BobLib.Utilities.Math.Vector`

**Key parameters**

| Parameter declaration |
|:--|
| `OrionRecord pVehicle` |
| `SIunits.Velocity testVel = 15` |
| `SIunits.Length testRad = 20` |
| `Real curvGain = 3` |
| `Real curvTi = 0.02` |
| `Real radErrorTol = 0.002` |
| `Real der_radErrorTol = 0.5` |
| `Real cpInitFL[3] = pVehicle.pFrDW.wheelCenter + Frames.resolve1(Frames.axesRotations({1, 2, 3}, {pVehicle.pFrPartialWheel.staticGamma*pi/18…` |
| `Real cpInitFR[3] = Vector.mirrorXZ(cpInitFL)` |
| `Real cpInitRL[3] = pVehicle.pRrDW.wheelCenter + Frames.resolve1(Frames.axesRotations({1, 2, 3}, {pVehicle.pRrPartialWheel.staticGamma*pi/18…` |
| `Real cpInitRR[3] = Vector.mirrorXZ(cpInitRL)` |

**Selected internal components**

| Component declaration |
|:--|
| `model ISO4138 import Modelica.SIunits` |
| `inner parameter SIunits.Length linkDiameter = 0.020` |
| `inner parameter SIunits.Length jointDiameter = 0.030` |
| `discrete Real t_hit(start = -1)` |
| `Real curvError` |
| `Real radError` |
| `Real bodyVels[3]` |
| `Real bodyAccels[3]` |
| `Real bodyAngles[3]` |
| `Real speedCG` |
| `ISO4138Record iso` |
| `ChassisVisualRecord vis` |
| `inner Modelica.Mechanics.MultiBody.World world(n = {0, 0, -1}) annotation( Placement(transformation(origin = {-130, -110}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `BobLib.Vehicle.VehicleDW_RWD_Lock vehicle(pVehicle = pVehicle) annotation( Placement(transformation(origin = {0, 20}, extent = \{\{-45, -50}, {45, 50\}\})))` |
| `Modelica.Blocks.Continuous.PI curvPI(T = curvTi, k = curvGain, initType = Modelica.Blocks.Types.Init.InitialOutput) annotation( Placement(transformation(origin…` |
| `Modelica.Blocks.Sources.RealExpression curvErrorExpression(y = curvError) annotation( Placement(transformation(origin = {-110, 110}, extent = \{\{-10, -10}, {10,…` |
| `Modelica.Mechanics.MultiBody.Sensors.RelativeAngles sprungAngles annotation( Placement(transformation(origin = {50, -70}, extent = \{\{-10, -10}, {10, 10\}\}, rota…` |

**Connection count:** 17 `connect(...)` equations.

### `ISO7401`

- **Kind:** `model`
- **File:** `Standards/StandardSim/ISO7401.mo`
- **Imports:** `Modelica.SIunits`, `Modelica.Constants.pi`, `Modelica.Math.Vectors.norm`, `Modelica.Mechanics.MultiBody.Frames`, `BobLib.Utilities.Math.Vector`

**Key parameters**

| Parameter declaration |
|:--|
| `OrionRecord pVehicle` |
| `SIunits.Velocity testVel = 15` |
| `Boolean sinusoidal = false` |
| `Integer nCycles = 1 "Number of sine cycles"` |
| `Real steerStep = 10 * pi / 180` |
| `Real stepTime = 1.0` |
| `Real steerAmp = 0.1` |
| `Real steerFreq = 0.5 "Steer input frequency, in Hz"` |
| `Real cpInitFL[3] = pVehicle.pFrDW.wheelCenter + Frames.resolve1(Frames.axesRotations({1, 2, 3}, {pVehicle.pFrPartialWheel.staticGamma*pi/18…` |
| `Real cpInitFR[3] = Vector.mirrorXZ(cpInitFL)` |
| `Real cpInitRL[3] = pVehicle.pRrDW.wheelCenter + Frames.resolve1(Frames.axesRotations({1, 2, 3}, {pVehicle.pRrPartialWheel.staticGamma*pi/18…` |
| `Real cpInitRR[3] = Vector.mirrorXZ(cpInitRL)` |

**Selected internal components**

| Component declaration |
|:--|
| `model ISO7401 import Modelica.SIunits` |
| `inner parameter SIunits.Length linkDiameter = 0.020` |
| `inner parameter SIunits.Length jointDiameter = 0.030` |
| `Real steerValue` |
| `Real bodyVels[3]` |
| `Real bodyAccels[3]` |
| `Real bodyAngles[3]` |
| `Real speedCG` |
| `ISO7401Record iso` |
| `ChassisVisualRecord vis` |
| `inner Modelica.Mechanics.MultiBody.World world(n = {0, 0, -1}) annotation( Placement(transformation(origin = {-130, -110}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `BobLib.Vehicle.VehicleDW_RWD_Lock vehicle(pVehicle = pVehicle) annotation( Placement(transformation(origin = {0, 20}, extent = \{\{-45, -50}, {45, 50\}\})))` |
| `Modelica.Mechanics.MultiBody.Sensors.RelativeAngles sprungAngles annotation( Placement(transformation(origin = {50, -70}, extent = \{\{-10, -10}, {10, 10\}\}, rota…` |
| `Modelica.Blocks.Sources.RealExpression steerExpression(y = steerValue) annotation( Placement(transformation(origin = {-70, 110}, extent = \{\{-10, -10}, {10, 10}…` |

**Connection count:** 16 `connect(...)` equations.

### `RrKnC`

- **Kind:** `model`
- **File:** `Standards/StandardSim/RrKnC.mo`
- **Extends:** `BobLib.Standards.Templates.KnC(final toAxle(r = {pVehicle.pRrDW.wheelCenter[1],…`
- **Imports:** `Modelica.SIunits`, `Modelica.Constants.pi`, `Modelica.Mechanics.MultiBody.Frames`, `BobLib.Utilities.Math.Vector`, `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`

**Key parameters**

| Parameter declaration |
|:--|
| `OrionRecord pVehicle annotation( Placement(visible = false, transformation(origin = {nan, nan}, extent = \{\{nan, nan}, {nan, nan\}\})))` |
| `Real leftCPInit[3] = pVehicle.pRrDW.wheelCenter + Frames.resolve1(Frames.axesRotations({1, 2, 3}, {pVehicle.pRrPartialWheel.staticGamma*pi/…` |
| `Real rightCPInit[3] = Vector.mirrorXZ(leftCPInit)` |

**Selected internal components**

| Component declaration |
|:--|
| `model RrKnC import Modelica.SIunits` |
| `final leftCPFixed(r = leftCPInit), final rightCPFixed(r = rightCPInit))` |
| `AxleDW_BC_ARB_VisualRecord vis` |
| `BobLib.Vehicle.Chassis.Suspension.RrAxleDW_BC_ARB rrAxleDW(pAxle = AxleDWRecord(bellcrankPivot = pVehicle.pRrAxleDW.bellcrankPivot, bellcrankPivotAxis = pVehic…` |
| `redeclare BobLib.Vehicle.Chassis.Suspension.Templates.Tire.BaseTire leftTire( redeclare BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52.SlipModel.NoSlip …` |
| `Modelica.Mechanics.MultiBody.Parts.Mounting1D steerLock annotation( Placement(transformation(origin = {0, 90}, extent = \{\{-10, -10}, {10, 10\}\})))` |

**Connection count:** 7 `connect(...)` equations.

## Build scripts

### `BuildKnC.mos`

"-d=-newInst " + "--simCodeTarget=C " + "--maxSizeLinearTearing=2000 " + "-d=-evaluateAllParameters "

File: `Standards/StandardSim/BuildKnC.mos`

## Documentation notes

- Keep maneuver-specific control/input logic here, not inside generic vehicle components.
- Expose the outputs BobSim needs as named public variables.
- Prefer runtime-overridable parameters for sweep and workflow settings.
