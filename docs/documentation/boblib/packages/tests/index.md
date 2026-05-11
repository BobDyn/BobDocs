# BobLib.Tests

Modelica test models and smoke tests for vehicle subsystems and utilities.


This package is primarily for validation, examples, and smoke testing. Test models are useful as executable documentation because they show how subsystem models are instantiated and connected.

## Package path

```text
BobLib.Tests
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| [TestUtilities](/documentation/boblib/packages/tests/testutilities/) | Package | Utility test models. |
| [TestVehicle](/documentation/boblib/packages/tests/testvehicle/) | Package | Vehicle subsystem test models. |

## How this package fits

`Tests` contains small executable models that exercise utilities and vehicle subsystems. These tests are valuable both for regression checking and for understanding the minimum set of connections needed to instantiate a component.

## Documentation notes

- Use these models as executable examples for subsystem instantiation.
- Keep tests small enough to isolate component behavior.
