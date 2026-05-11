# BobLib.Utilities.Math

Small math helper package for vectors and tensors.


This package contains reusable helper functions/components. It should stay generic enough to be used by multiple vehicle or standard packages.

## Package path

```modelica
BobLib.Utilities.Math
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [Tensor](/documentation/boblib/packages/utilities/math/tensor/) | Package | Tensor helper functions used by geometry mirroring and coordinate transformations. |
| [Vector](/documentation/boblib/packages/utilities/math/vector/) | Package | Vector helper functions used by geometry and multibody models. |

## How this package fits

This package contributes to the BobLib Modelica library structure and is documented from the current package contents.

## Documentation notes

- Keep helpers small, reusable, and independent of a specific vehicle definition.
- Add tests under `BobLib.Tests` when behavior is nontrivial.
