# BobLib.Standards

Standard-test and external-interface models.

This package is the executable-facing side of BobLib. It wraps the vehicle model with the maneuver inputs, controller logic, and outputs that BobSim and FMI workflows consume.

## Package path

```text
BobLib.Standards
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [StandardSim](/documentation/boblib/packages/standards/standardsim/) | Package | Concrete standard simulation models for the active steady-state and transient workflows. |
| `VehicleFMI` | model | Modelica component/model. |
| `VehicleModel` | model | Modelica component/model. |
| `BuildVehicleFMI.mos` | script | OpenModelica build/simulation script. |

## How this package fits

`Standards` is where BobLib becomes executable for BobSim. The models here provide the public workflow entry points and keep the maneuver logic close to the vehicle model instead of scattering it across helper code.

## Documentation notes

- Keep maneuver-specific control/input logic here, not inside generic vehicle components.
- Expose the outputs BobSim needs as named public variables.
- Prefer runtime-overridable parameters for sweep and workflow settings.
