# BobLib.Utilities

Reusable math, mechanics, and FMI utilities used across BobLib.


This package contains reusable helper functions/components. It should stay generic enough to be used by multiple vehicle or standard packages.

## Package path

```text
BobLib.Utilities
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [FMI](/documentation/boblib/packages/utilities/fmi/) | Package | FMI helper package placeholder for external interfaces. |
| [Math](/documentation/boblib/packages/utilities/math/) | Package | Small math helper package for vectors and tensors. |
| [Mechanics](/documentation/boblib/packages/utilities/mechanics/) | Package | Mechanics helper package. |

## How this package fits

`Utilities` supports the rest of the library with reusable math and mechanics helpers. These models/functions should avoid vehicle-specific assumptions unless the package name makes that scope explicit.

## Documentation notes

- Keep helpers small, reusable, and independent of a specific vehicle definition.
- Add tests under `BobLib.Tests` when behavior is nontrivial.
