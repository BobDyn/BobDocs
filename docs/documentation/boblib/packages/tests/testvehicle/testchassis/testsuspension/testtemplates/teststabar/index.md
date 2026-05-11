# BobLib.Tests.TestVehicle.TestChassis.TestSuspension.TestTemplates.TestStabar

Stabilizer bar template test models.


This package is primarily for validation, examples, and smoke testing. Test models are useful as executable documentation because they show how subsystem models are instantiated and connected.

## Package path

```modelica
BobLib.Tests.TestVehicle.TestChassis.TestSuspension.TestTemplates.TestStabar
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `TestStabar` | model | Modelica component/model. |

## How this package fits

This package contributes to the BobLib Modelica library structure and is documented from the current package contents.

## Models, records, and functions

### `TestStabar`

- **Kind:** `model`
- **File:** `Tests/TestVehicle/TestChassis/TestSuspension/TestTemplates/TestStabar/TestStabar.mo`
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
| `model TestStabar import BobLib.Resources.VehicleDefn.OrionRecord` |
| `inner Modelica.Mechanics.MultiBody.World world(n = {0, 0, -1}) annotation( Placement(transformation(origin = {-130, -50}, extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Modelica.Mechanics.MultiBody.Parts.Fixed mountFixture(r = {pVehicle.pFrStabar.leftBarEnd[1], 0, pVehicle.pFrStabar.leftBarEnd[3]}, animation = false) annotatio…` |
| `Vehicle.Chassis.Suspension.Templates.Stabar.Stabar stabar(pStabar = pVehicle.pFrStabar, linkDiameter = linkDiameter, jointDiameter = jointDiameter) annotation(…` |
| `Modelica.Mechanics.MultiBody.Parts.Body body(r_CM = {0, 0, 0}, m = 1, sphereDiameter = jointDiameter) annotation( Placement(transformation(origin = {40, 0}, ex…` |

**Connection count:** 2 `connect(...)` equations.

## Documentation notes

- Use these models as executable examples for subsystem instantiation.
- Keep tests small enough to isolate component behavior.
