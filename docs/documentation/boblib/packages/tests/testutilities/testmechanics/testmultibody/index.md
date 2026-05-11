# BobLib.Tests.TestUtilities.TestMechanics.TestMultibody

Multibody utility test models.


This package is primarily for validation, examples, and smoke testing. Test models are useful as executable documentation because they show how subsystem models are instantiated and connected.

## Package path

```text
BobLib.Tests.TestUtilities.TestMechanics.TestMultibody
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `TestGroundPhysics` | model | Modelica component/model. |

## How this package fits

This package contributes to the BobLib Modelica library structure and is documented from the current package contents.

## Models, records, and functions

### `TestGroundPhysics`

- **Kind:** `model`
- **File:** `Tests/TestUtilities/TestMechanics/TestMultibody/TestGroundPhysics.mo`
- **Imports:** `Modelica.Math.Vectors.normalize`

**Selected internal components**

| Component declaration |
|:--|
| `model TestGroundPhysics import Modelica.Math.Vectors.normalize` |
| `Modelica.Mechanics.MultiBody.Sensors.CutForce cut_force(resolveInFrame = Modelica.Mechanics.MultiBody.Types.ResolveInFrameA.world) annotation( Placement(transf…` |

**Connection count:** 5 `connect(...)` equations.

## Documentation notes

- Use these models as executable examples for subsystem instantiation.
- Keep tests small enough to isolate component behavior.
