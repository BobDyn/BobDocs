# BobLib

Root BobLib Modelica package. It ties together the vehicle model, standard-test models, reusable records, utilities, and tests.


## Package path

```modelica
BobLib
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [Resources](/documentation/boblib/packages/resources/) | Package | Parameter and record library. It stores vehicle definitions, reusable parameter records, standard-test records, and visual-export records. |
| [Standards](/documentation/boblib/packages/standards/) | Package | Standard-test and external-interface models. These models wrap the vehicle model for standard workflows, FMI export, and standard simulation execution. |
| [Tests](/documentation/boblib/packages/tests/) | Package | Modelica test models and smoke tests for vehicle subsystems and utilities. |
| [Utilities](/documentation/boblib/packages/utilities/) | Package | Reusable math, mechanics, and FMI utilities used across BobLib. |
| [Vehicle](/documentation/boblib/packages/vehicle/) | Package | Physical vehicle modeling layer. This package contains the full vehicle assembly and the major subsystem packages used to build it. |
| `msl_setup.mos` | script | OpenModelica build/simulation script. |

## How this package fits

This package contributes to the BobLib Modelica library structure and is documented from the current package contents.

## Build scripts

### `msl_setup.mos`

File: `msl_setup.mos`

## Documentation notes

- Keep this package aligned with the surrounding BobLib package hierarchy.
