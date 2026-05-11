# BobLib.Tests.TestVehicle.TestChassis.TestSuspension.TestTemplates.TestTire.TestMF52

MF52 tire test models.


This package is primarily for validation, examples, and smoke testing. Test models are useful as executable documentation because they show how subsystem models are instantiated and connected.

## Package path

```modelica
BobLib.Tests.TestVehicle.TestChassis.TestSuspension.TestTemplates.TestTire.TestMF52
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `TestMF52` | model | Modelica component/model. |

## How this package fits

This package contributes to the BobLib Modelica library structure and is documented from the current package contents.

## Models, records, and functions

### `TestMF52`

- **Kind:** `model`
- **File:** `Tests/TestVehicle/TestChassis/TestSuspension/TestTemplates/TestTire/TestMF52/TestMF52.mo`
- **Imports:** `Modelica.SIunits`, `Tire = BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52`, `Vehicle = BobLib.Resources.VehicleDefn`

**Key parameters**

| Parameter declaration |
|:--|
| `Vehicle.OrionRecord car` |
| `SIunits.Force Fz = 654` |
| `SIunits.Angle gamma = 0` |
| `SIunits.Velocity Vx = 10` |
| `Integer nAlpha = 41` |
| `Integer nKappa = 41` |
| `SIunits.Angle alphaMin = -0.25` |
| `SIunits.Angle alphaMax = 0.25` |
| `Real kappaMin = -0.25` |
| `Real kappaMax = 0.25` |

**Selected internal components**

| Component declaration |
|:--|
| `model TestMF52 import Modelica.SIunits` |
| `SIunits.Angle alphaGrid[nAlpha]` |
| `Real kappaGrid[nKappa]` |
| `discrete SIunits.Force Fx[nAlpha, nKappa]` |
| `discrete SIunits.Force Fy[nAlpha, nKappa]` |
| `discrete SIunits.Torque Mx[nAlpha, nKappa]` |
| `discrete SIunits.Torque My[nAlpha, nKappa]` |
| `discrete SIunits.Torque Mz[nAlpha, nKappa]` |
| `discrete SIunits.Length t[nAlpha, nKappa]` |
| `discrete SIunits.Length s[nAlpha, nKappa]` |
| `discrete SIunits.Force Fy_alpha[nAlpha]` |
| `discrete SIunits.Torque Mz_alpha[nAlpha]` |
| `discrete SIunits.Length t_alpha[nAlpha]` |
| `discrete SIunits.Length s_alpha[nAlpha]` |
| `discrete SIunits.Force Fx_kappa[nKappa]` |
| `discrete SIunits.Length t_kappa[nKappa]` |
| `discrete Real Mz_reconstructed[nAlpha, nKappa]` |

## Documentation notes

- Use these models as executable examples for subsystem instantiation.
- Keep tests small enough to isolate component behavior.
