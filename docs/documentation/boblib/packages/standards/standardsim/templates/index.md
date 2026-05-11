# BobLib.Standards.StandardSim.Templates

Partial/templates shared by standard simulation models.


This package is part of the standard-workflow layer. Models here wrap the physical vehicle model with maneuver inputs, output records, controllers, and external interfaces.

## Package path

```text
BobLib.Standards.StandardSim.Templates
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `KnC` | partial model | Modelica component/model. |

## How this package fits

This package contributes to the BobLib Modelica library structure and is documented from the current package contents.

## Models, records, and functions

### `KnC`

- **Kind:** `partial model`
- **File:** `Standards/StandardSim/Templates/KnC.mo`
- **Imports:** `Modelica.SIunits`, `BobLib.Resources.StandardRecord.KnCRecord`

**Key parameters**

| Parameter declaration |
|:--|
| `SIunits.Angle steerMagnitude = 0 "Maximum pinion angle magnitude" annotation( Dialog(group = "Test Parameters"))` |
| `SIunits.Length heaveMagnitude = 1.5*0.0254 "Maximum heave magnitude" annotation( Dialog(group = "Test Parameters"))` |
| `SIunits.Angle rollMagnitude = 2*Modelica.Constants.pi/180 "Maximum roll magnitude" annotation( Dialog(group = "Test Parameters"))` |
| `SIunits.Force forceMagnitude = 1000 "Maximum contact patch force" annotation( Placement(visible = false, transformation(origin = {nan, nan}…` |
| `Real rollTable[:, 2] = [0, 0` |
| `Real heaveTable[:, 2] = [0, 0` |
| `Real fxTable[:, 2] = [0, 0` |
| `Real fyTable[:, 2] = [0, 0` |

**Selected internal components**

| Component declaration |
|:--|
| `partial model KnC import Modelica.SIunits` |
| `inner parameter SIunits.Length linkDiameter = 0.020` |
| `inner parameter SIunits.Length jointDiameter = 0.030` |
| `inner Modelica.Mechanics.MultiBody.World world(g = 0, n = {0, 0, -1}) annotation( Placement(transformation(origin = {-130, -110}, extent = \{\{-10, -10}, {10, 10…` |
| `KnCRecord knc` |

**Connection count:** 34 `connect(...)` equations.

## Documentation notes

- Keep maneuver-specific control/input logic here, not inside generic vehicle components.
- Expose the outputs BobSim needs as named public variables.
- Prefer runtime-overridable parameters for sweep and workflow settings.
