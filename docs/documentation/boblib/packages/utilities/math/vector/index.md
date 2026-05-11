# BobLib.Utilities.Math.Vector

Vector helper functions used by geometry and multibody models.


This package contains reusable helper functions/components. It should stay generic enough to be used by multiple vehicle or standard packages.

## Package path

```text
BobLib.Utilities.Math.Vector
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `angle_between` | function | Reusable function. |
| `cross` | function | Reusable function. |
| `dot` | function | Reusable function. |
| `mirrorXZ` | function | Reusable function. |

## How this package fits

This package contributes to the BobLib Modelica library structure and is documented from the current package contents.

## Models, records, and functions

### `angle_between`

- **Kind:** `function`
- **File:** `Utilities/Math/Vector/angle_between.mo`
- **Imports:** `BobLib.Utilities.Math.Vector.cross`, `BobLib.Utilities.Math.Vector.dot`

**Interfaces and signals**

| Declaration |
|:--|
| `Real a[3]` |
| `Real b[3]` |
| `Real n[3]` |
| `Real theta` |

**Selected internal components**

| Component declaration |
|:--|
| `function angle_between import BobLib.Utilities.Math.Vector.cross` |

Use this function as a pure reusable helper in equations or parameter calculations.

### `cross`

- **Kind:** `function`
- **File:** `Utilities/Math/Vector/cross.mo`

**Interfaces and signals**

| Declaration |
|:--|
| `Real a[3]` |
| `Real b[3]` |
| `Real result[3]` |

**Selected internal components**

| Component declaration |
|:--|
| `function cross input Real a[3]` |

Use this function as a pure reusable helper in equations or parameter calculations.

### `dot`

- **Kind:** `function`
- **File:** `Utilities/Math/Vector/dot.mo`

**Interfaces and signals**

| Declaration |
|:--|
| `Real[:] a` |
| `Real[:] b` |
| `Real result` |

**Selected internal components**

| Component declaration |
|:--|
| `function dot input Real[:] a` |

Use this function as a pure reusable helper in equations or parameter calculations.

### `mirrorXZ`

- **Kind:** `function`
- **File:** `Utilities/Math/Vector/mirrorXZ.mo`

**Interfaces and signals**

| Declaration |
|:--|
| `Real r[3] "Position vector {x, y, z}"` |
| `Real r_m[3] "Mirrored vector about X-Z plane (flip Y)"` |

**Selected internal components**

| Component declaration |
|:--|
| `function mirrorXZ input Real r[3] "Position vector {x, y, z}"` |

Use this function as a pure reusable helper in equations or parameter calculations.

## Documentation notes

- Keep helpers small, reusable, and independent of a specific vehicle definition.
- Add tests under `BobLib.Tests` when behavior is nontrivial.
