# BobLib.Vehicle.Chassis.Suspension.Linkages.Templates

Partial/reusable linkage templates used by concrete suspension linkage models.


This package is part of the physical modeling layer. Models here should represent physical components, interfaces, and equations rather than post-processing or runner behavior.

## Package path

```modelica
BobLib.Vehicle.Chassis.Suspension.Linkages.Templates
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `TabularCompliant` | partial model | Modelica component/model. |

## How this package fits

This package participates in axle and suspension construction. The library separates axle assemblies from reusable templates so that geometry, wheel/tire behavior, steering, anti-roll bar, and linkage mechanics can be composed cleanly.

## Models, records, and functions

### `TabularCompliant`

- **Kind:** `partial model`
- **File:** `Vehicle/Chassis/Suspension/Linkages/Templates/TabularCompliant.mo`
- **Imports:** `Modelica.SIunits`

**Key parameters**

| Parameter declaration |
|:--|
| `Real eps = 1e-12 "regularization (m)" annotation(Dialog(group="Numerical"))` |

**Interfaces and signals**

| Declaration |
|:--|
| `Modelica.Mechanics.Translational.Interfaces.Flange_a flange_a annotation( Placement(transformation(origin = {-100, 0}, extent = \{\{-10, -10}…` |
| `Modelica.Mechanics.Translational.Interfaces.Flange_b flange_b annotation( Placement(transformation(origin = {100, 0}, extent = \{\{-10, -10},…` |

**Selected internal components**

| Component declaration |
|:--|
| `partial model TabularCompliant "Base compliant element" import Modelica.SIunits` |
| `final parameter Real eps = 1e-12 "regularization (m)" annotation(Dialog(group="Numerical"))` |
| `Modelica.Mechanics.Translational.Sources.Force2 force annotation( Placement(transformation(extent = \{\{-10, -10}, {10, 10\}\})))` |
| `Real s_rel` |

**Connection count:** 2 `connect(...)` equations.

## Documentation notes

- Keep physical assumptions in Modelica, close to the component they describe.
- Prefer records from `BobLib.Resources` for parameterization.
- Expose reusable interfaces with Modelica connectors rather than hard-coding runner-specific behavior.
