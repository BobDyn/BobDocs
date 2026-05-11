# BobLib.Standards

Standard-test and external-interface models. These models wrap the vehicle model for standard workflows, FMI export, and standard simulation execution.


This package is part of the standard-workflow layer. Models here wrap the physical vehicle model with maneuver inputs, output records, controllers, and external interfaces.

## Package path

```modelica
BobLib.Standards
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [StandardSim](/documentation/boblib/packages/standards/standardsim/) | Package | Concrete standard simulation models for ISO-style workflows and kinematics/compliance sweeps. |
| `VehicleFMI` | model | Modelica component/model. |
| `VehicleModel` | model | Modelica component/model. |
| `BuildVehicleFMI.mos` | script | OpenModelica build/simulation script. |

## How this package fits

`Standards` is where BobLib becomes executable for BobSim. Models in this package wrap a vehicle assembly with a specific maneuver interface, input generation, controller logic, and output signals. BobSim targets these models when compiling and running standard workflows.

## Models, records, and functions

### `VehicleFMI`

- **Kind:** `model`
- **File:** `Standards/VehicleFMI.mo`
- **Imports:** `Modelica.SIunits`, `Modelica.Constants.pi`, `Modelica.Math.Vectors.norm`, `Modelica.Mechanics.MultiBody.Frames`, `BobLib.Utilities.Math.Vector`

**Key parameters**

| Parameter declaration |
|:--|
| `OrionRecord pVehicle` |
| `SIunits.Velocity initialVel = 10 "Initial velocity"` |
| `Real cpInitFL[3] = pVehicle.pFrDW.wheelCenter + Frames.resolve1(Frames.axesRotations({1, 2, 3}, {pVehicle.pFrPartialWheel.staticGamma*pi/18…` |
| `Real cpInitFR[3] = Vector.mirrorXZ(cpInitFL)` |
| `Real cpInitRL[3] = pVehicle.pRrDW.wheelCenter + Frames.resolve1(Frames.axesRotations({1, 2, 3}, {pVehicle.pRrPartialWheel.staticGamma*pi/18…` |
| `Real cpInitRR[3] = Vector.mirrorXZ(cpInitRL)` |

**Interfaces and signals**

| Declaration |
|:--|
| `SIunits.Angle steerCommand` |
| `SIunits.Torque driveTorqueCommand` |
| `SIunits.Acceleration accX` |
| `SIunits.Acceleration accY` |
| `SIunits.Angle handwheelAngle` |
| `SIunits.Torque handwheelTorque` |
| `SIunits.Angle leftSteerAngle` |
| `SIunits.Angle rightSteerAngle` |
| `SIunits.Angle roll` |
| `SIunits.Angle sideslip` |
| `SIunits.Velocity velX` |
| `SIunits.Velocity velY` |
| `SIunits.AngularVelocity yawVel` |

**Selected internal components**

| Component declaration |
|:--|
| `model VehicleFMI import Modelica.SIunits` |
| `inner parameter SIunits.Length linkDiameter = 0.020` |
| `inner parameter SIunits.Length jointDiameter = 0.030` |
| `Real bodyVels[3]` |
| `Real bodyAccels[3]` |
| `Real bodyAngles[3]` |
| `ChassisVisualRecord vis` |
| `inner Modelica.Mechanics.MultiBody.World world(n = {0, 0, -1}) annotation( Placement(transformation(origin = {-130, -110}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `BobLib.Vehicle.VehicleDW_RWD_Lock vehicle(pVehicle = pVehicle) annotation( Placement(transformation(origin = {0, 20}, extent = \{\{-45, -50}, {45, 50\}\})))` |
| `Modelica.Mechanics.MultiBody.Sensors.RelativeAngles sprungAngles annotation( Placement(transformation(origin = {50, -70}, extent = \{\{-10, -10}, {10, 10\}\}, rota…` |
| `Modelica.Blocks.Sources.RealExpression steerExpression(y = steerCommand) annotation( Placement(transformation(origin = {-70, 110}, extent = \{\{-10, -10}, {10, 1…` |
| `Modelica.Blocks.Sources.RealExpression driveTorqueExpression(y = driveTorqueCommand) annotation( Placement(transformation(origin = {-30, -50}, extent = \{\{-10, …` |

**Connection count:** 15 `connect(...)` equations.

### `VehicleModel`

- **Kind:** `model`
- **File:** `Standards/VehicleModel.mo`
- **Imports:** `Modelica.SIunits`, `Modelica.Constants.pi`, `Modelica.Math.Vectors.norm`, `Modelica.Mechanics.MultiBody.Frames`, `BobLib.Utilities.Math.Vector`

**Key parameters**

| Parameter declaration |
|:--|
| `OrionRecord pVehicle` |
| `Integer useMode = 0 "0 - closed-loop radius and velocity` |
| `Boolean closedLoopRadius = (useMode == 0)` |
| `Boolean closedLoopVelocity = (useMode == 0 or useMode == 1 or useMode == 2)` |
| `Modelica.SIunits.Time steerStart = 1.0 "Start time" annotation( Evaluate = false)` |
| `SIunits.Length targetRad = 20 "Target maneuver curvature" annotation( Evaluate = false, Dialog(enable = closedLoopRadius))` |
| `SIunits.Velocity targetVel = 15 "Target maneuver velocity" annotation( Evaluate = false, Dialog(enable = closedLoopVelocity))` |
| `SIunits.Velocity initialVel = targetVel "Initial velocity" annotation( Evaluate = false)` |
| `Real curvGain = 3 "Proportional gain of curvature controller" annotation( Evaluate = false, Dialog(enable = closedLoopRadius))` |
| `Real curvTi = 0.02 "Time constant of curvature controller" annotation( Evaluate = false, Dialog(enable = closedLoopRadius))` |
| `Real velGain = 200 "Proportional gain of velocity controller" annotation( Evaluate = false, Dialog(enable = closedLoopVelocity))` |
| `Real velTi = 1 "Time constant of velocity controller" annotation( Evaluate = false, Dialog(enable = closedLoopVelocity))` |
| `Real radErrorTol = 0.002 "ISO4138 radius error tolerance" annotation( Evaluate = false, Dialog(enable = closedLoopRadius))` |
| `Real der_radErrorTol = 0.5 "ISO4138 radius error derivative tolerance" annotation( Evaluate = false, Dialog(enable = closedLoopRadius))` |
| `Real der_yawVelTol = 0.01` |
| `SIunits.Angle frRampSteerHeight = 5 * Modelica.Constants.pi / 180 "Ramp steer target angle"` |
| `SIunits.Time frRampSteerDuration = 0.001 "Ramp steer duration"` |
| `SIunits.Angle steerAmp = 6*Modelica.Constants.pi/180 "Amplitude" annotation( Evaluate = false)` |
| `SIunits.Frequency steerFreq = 1.0 "Frequency (Hz)" annotation( Evaluate = false)` |
| `Real cpInitFL[3] = pVehicle.pFrDW.wheelCenter + Frames.resolve1(Frames.axesRotations({1, 2, 3}, {pVehicle.pFrPartialWheel.staticGamma*pi/18…` |
| `Real cpInitFR[3] = Vector.mirrorXZ(cpInitFL)` |
| `Real cpInitRL[3] = pVehicle.pRrDW.wheelCenter + Frames.resolve1(Frames.axesRotations({1, 2, 3}, {pVehicle.pRrPartialWheel.staticGamma*pi/18…` |
| `Real cpInitRR[3] = Vector.mirrorXZ(cpInitRL)` |

**Selected internal components**

| Component declaration |
|:--|
| `model VehicleModel import Modelica.SIunits` |
| `inner parameter SIunits.Length linkDiameter = 0.020` |
| `inner parameter SIunits.Length jointDiameter = 0.030` |
| `final parameter Boolean closedLoopRadius = (useMode == 0)` |
| `final parameter Boolean closedLoopVelocity = (useMode == 0 or useMode == 1 or useMode == 2)` |
| `Real frSteerCmd` |
| `Real driveTorqueCmd` |
| `Real bodyVels[3]` |
| `Real bodyAccels[3]` |
| `Real bodyAngles[3]` |
| `Real curvature` |
| `Real speed` |
| `Real curvError` |
| `Real radError` |
| `Real velError` |
| `Real steerSine` |
| `Real steerRamp` |
| `SIunits.Acceleration accX` |
| `SIunits.Acceleration accY` |
| `SIunits.Angle handwheelAngle` |
| `SIunits.Torque handwheelTorque` |
| `SIunits.Angle leftSteerAngle` |
| `SIunits.Angle rightSteerAngle` |
| `SIunits.Angle roll` |
| `SIunits.Angle sideslip` |
| _…and 12 more._ |

**Connection count:** 15 `connect(...)` equations.

## Build scripts

### `BuildVehicleFMI.mos`

export_ISO4138_FMU.mos OpenModelica.Scripting.setCommandLineOptions("-d=bltdump"); OpenModelica.Scripting.setCommandLineOptions("-d=optdaedump"); OpenModelica.Scripting.setCommandLineOptions("-d=dumpSimCode"); Load BobLib Go to build dir res := buildModel(

File: `Standards/BuildVehicleFMI.mos`

## Documentation notes

- Keep maneuver-specific control/input logic here, not inside generic vehicle components.
- Expose the outputs BobSim needs as named public variables.
- Prefer runtime-overridable parameters for sweep and workflow settings.
