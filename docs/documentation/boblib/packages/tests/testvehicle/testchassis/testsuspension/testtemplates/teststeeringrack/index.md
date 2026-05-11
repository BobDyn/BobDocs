# BobLib.Tests.TestVehicle.TestChassis.TestSuspension.TestTemplates.TestSteeringRack

Steering rack template test models.


This package is primarily for validation, examples, and smoke testing. Test models are useful as executable documentation because they show how subsystem models are instantiated and connected.

## Package path

```text
BobLib.Tests.TestVehicle.TestChassis.TestSuspension.TestTemplates.TestSteeringRack
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `TestRackAndPinion` | model | Modelica component/model. |

## How this package fits

This package contributes to the BobLib Modelica library structure and is documented from the current package contents.

## Models, records, and functions

### `TestRackAndPinion`

- **Kind:** `model`
- **File:** `Tests/TestVehicle/TestChassis/TestSuspension/TestTemplates/TestSteeringRack/TestRackAndPinion.mo`
- **Imports:** `BobLib.Resources.VehicleDefn.OrionRecord`

**Key parameters**

| Parameter declaration |
|:--|
| `OrionRecord pVehicle` |
| `Real linkDiameter = 0.020` |

**Selected internal components**

| Component declaration |
|:--|
| `model TestRackAndPinion import BobLib.Resources.VehicleDefn.OrionRecord` |
| `inner Modelica.Mechanics.MultiBody.World world(n = {0, 0, -1}) annotation( Placement(transformation(origin = {-90, -90}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Mechanics.MultiBody.Parts.Fixed rackFixed(r = {pVehicle.pRack.leftPickup[1], 0, pVehicle.pRack.leftPickup[3]}, animation = false) annotation( Placemen…` |
| `BobLib.Vehicle.Chassis.Suspension.Templates.SteeringRack.RackAndPinion rackAndPinion(pRack = pVehicle.pRack, linkDiameter = linkDiameter) annotation( Placement…` |
| `Modelica.Blocks.Sources.Ramp pinionRamp(height = 100*Modelica.Constants.pi/180, duration = 1, startTime = 1) annotation( Placement(transformation(origin = {-60…` |
| `Modelica.Mechanics.Rotational.Sources.Position pinionPosition(exact = true) annotation( Placement(transformation(origin = {-20, 30}, extent = \{\{-10, -10}, {10,…` |
| `Modelica.Mechanics.MultiBody.Parts.Fixed springSupport(r = {pVehicle.pRack.leftPickup[1], pVehicle.pRack.leftPickup[2] + 0.5, pVehicle.pRack.leftPickup[3]}, an…` |
| `Modelica.Mechanics.MultiBody.Forces.Spring spring(c = 1e6, s_unstretched = 0.5, width = linkDiameter*2) annotation( Placement(transformation(origin = {-50, 0},…` |

**Connection count:** 5 `connect(...)` equations.

## Documentation notes

- Use these models as executable examples for subsystem instantiation.
- Keep tests small enough to isolate component behavior.
