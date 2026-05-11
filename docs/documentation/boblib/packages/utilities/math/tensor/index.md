# BobLib.Utilities.Math.Tensor

Tensor helper functions used by geometry mirroring and coordinate transformations.


This package contains reusable helper functions/components. It should stay generic enough to be used by multiple vehicle or standard packages.

## Package path

```text
BobLib.Utilities.Math.Tensor
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `mirrorXZ` | function | Reusable function. |

## How this package fits

This package contributes to the BobLib Modelica library structure and is documented from the current package contents.

## Models, records, and functions

### `mirrorXZ`

- **Kind:** `function`
- **File:** `Utilities/Math/Tensor/mirrorXZ.mo`

**Interfaces and signals**

| Declaration |
|:--|
| `Real T[3,3]` |
| `Real T_m[3,3]` |

**Selected internal components**

| Component declaration |
|:--|
| `function mirrorXZ input Real T[3,3]` |

Use this function as a pure reusable helper in equations or parameter calculations.

## Documentation notes

- Keep helpers small, reusable, and independent of a specific vehicle definition.
- Add tests under `BobLib.Tests` when behavior is nontrivial.
