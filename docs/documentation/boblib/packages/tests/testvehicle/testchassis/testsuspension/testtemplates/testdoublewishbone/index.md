# BobLib.Tests.TestVehicle.TestChassis.TestSuspension.TestTemplates.TestDoubleWishbone

Double-wishbone template test models.


This package is primarily for validation, examples, and smoke testing. Test models are useful as executable documentation because they show how subsystem models are instantiated and connected.

## Package path

```text
BobLib.Tests.TestVehicle.TestChassis.TestSuspension.TestTemplates.TestDoubleWishbone
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `TestDoubleWishbone` | model | Modelica component/model. |

## How this package fits

This package contributes to the BobLib Modelica library structure and is documented from the current package contents.

## Models, records, and functions

### `TestDoubleWishbone`

- **Kind:** `model`
- **File:** `Tests/TestVehicle/TestChassis/TestSuspension/TestTemplates/TestDoubleWishbone/TestDoubleWishbone.mo`
- **Imports:** `BobLib.Resources.VehicleDefn.OrionRecord`

**Key parameters**

| Parameter declaration |
|:--|
| `OrionRecord pVehicle` |
| `Real linkDiameter = 0.020` |
| `Real jointDiameter = 0.030` |

**Selected internal components**

| Component declaration |
|:--|
| `model TestDoubleWishbone import BobLib.Resources.VehicleDefn.OrionRecord` |
| `inner Modelica.Mechanics.MultiBody.World world(n = {0, 0, -1}) annotation( Placement(transformation(origin = {-90, -90}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Blocks.Sources.Ramp steerRamp(duration = 1, height = 100*Modelica.Constants.pi/180, startTime = 1) annotation( Placement(transformation(origin = {-20,…` |
| `Modelica.Mechanics.Rotational.Sources.Position steerjouncePosition(exact = true) annotation( Placement(transformation(origin = {20, 80}, extent = \{\{-10, -10}, …` |
| `Modelica.Mechanics.MultiBody.Parts.Fixed jounceRef(r = pVehicle.pFrDW.lower_o, animation = false) annotation( Placement(transformation(origin = {90, -90}, exte…` |
| `Modelica.Blocks.Sources.Ramp jounceRamp(height = 2*0.0254, duration = 1, startTime = 1) annotation( Placement(transformation(origin = {-90, -50}, extent = \{\{-1…` |
| `Modelica.Mechanics.Translational.Sources.Position jouncePosition(useSupport = true, exact = true) annotation( Placement(transformation(origin = {-50, -50}, ext…` |
| `Modelica.Mechanics.MultiBody.Parts.Fixed upperFixed_i(r = (pVehicle.pFrDW.upperFore_i + pVehicle.pFrDW.upperAft_i) / 2, animation = false) annotation( Placemen…` |
| `Modelica.Mechanics.MultiBody.Parts.Fixed lowerFixed_i(r = (pVehicle.pFrDW.lowerFore_i + pVehicle.pFrDW.lowerAft_i) / 2, animation = false) annotation( Placemen…` |
| `Modelica.Mechanics.MultiBody.Parts.Fixed rackFixed(r = {pVehicle.pFrRack.leftPickup[1], 0, pVehicle.pFrRack.leftPickup[3]}, animation = false) annotation( Plac…` |
| `BobLib.Vehicle.Chassis.Suspension.Templates.SteeringRack.RackAndPinion rackAndPinion(pRack = pVehicle.pFrRack, linkDiameter = linkDiameter) annotation( Placeme…` |
| `BobLib.Vehicle.Chassis.Suspension.Templates.DoubleWishbone.WishboneUprightLoop wishboneUprightLoop(pDW = pVehicle.pFrDW, linkDiameter = linkDiameter, jointDiam…` |
| `Modelica.Mechanics.MultiBody.Parts.FixedTranslation tieConnection(r = pVehicle.pFrDW.lower_o - pVehicle.pFrDW.tie_o) annotation( Placement(transformation(origi…` |
| `BobLib.Vehicle.Chassis.Suspension.Linkages.Rod tieRod(r_a = pVehicle.pFrRack.leftPickup, r_b = pVehicle.pFrDW.tie_o, n1_a = {1, 0, 0}, linkDiameter = linkDiame…` |

**Connection count:** 16 `connect(...)` equations.

## Documentation notes

- Use these models as executable examples for subsystem instantiation.
- Keep tests small enough to isolate component behavior.
