---
layout: doc
title: Tests and Checks
prev:
  text: 'Entry Points'
  link: '/boblib/entry-points'
next:
  text: 'Development'
  link: '/boblib/development'
---

# Tests and Checks

This page lists the BobLib `make` targets and the test files behind them. Run
every command from the BobLib repository root. `make help` prints the current
list.

## Release gate

Run the full local gate before you trust a branch or cut a release:

```bash
make ci PYTHON=.venv/bin/python
```

`make ci` runs `make lint` and then `make test`. `make test` runs the Python
checks and every Modelica check. The Modelica checks load Modelica Standard
Library `4.1.0` and VehicleInterfaces `2.0.2`.

GitHub CI runs a lighter gate on pull requests: `make lint`,
`make test-python`, `make modelica-lint`, `make modelica-smoke`, and
`make modelica-initialization`. The separate **Release Gate** workflow runs the
full Modelica set on demand.

## Make targets

| Target | Action |
| :-- | :-- |
| `make lint` | Run Ruff over `Tests/` |
| `make modelica-lint` | Check Modelica formatting without rewriting files |
| `make modelica-format` | Rewrite Modelica formatting in `BobLib` and `Tests/BobLibTest` |
| `make test-python` | Run the pure Python tests only |
| `make modelica-deps` | Install Modelica `4.1.0` and VehicleInterfaces `2.0.2` through `omc msl_setup.mos` |
| `make modelica-smoke` | Translate the default standard and regression models only |
| `make modelica-translation` | Translate the standard entry points and every `BobLibTest` fixture |
| `make modelica-initialization` | Initialize every `BobLibTest` fixture and compare the baseline CSV |
| `make modelica-physics` | Simulate physical validation baselines with scaled runtime budgets |
| `make modelica-regression` | Simulate signal-level regressions and smoke-check `BobLib` and `BobLibTest` |
| `make test-modelica` | Run translation, initialization, physics, and regression checks |
| `make test` | Run `test-python` and `test-modelica` |
| `make test-pytest` | Run every pytest-collected check in one invocation |
| `make ci` | Run `lint` and `test` |

Every Modelica target runs `make modelica-deps` first. Pass
`PYTHON=.venv/bin/python` to use your virtual environment. The Makefile default
is `python3`.

## What each check runs

| Target | Test files | What it checks |
| :-- | :-- | :-- |
| `test-python` | `Tests/test_modelica_linter.py` | The Modelica formatter and linter |
| `modelica-translation` | `Tests/test_modelica_translation.py`, `Tests/modelica_translation_checks.py` | `checkModel` on `VehicleFMI`, `VehicleSim`, `FourPostSim`, two regression models, and every `BobLibTest` fixture |
| `modelica-initialization` | `Tests/test_modelica_initialization.py`, `Tests/modelica_initialization_checks.py` | Zero-time simulation of every `BobLibTest` fixture, compared against `Tests/modelica_initialization_baseline.csv` |
| `modelica-physics` | `Tests/test_modelica_physics_validation.py` | Short simulations compared against `Tests/modelica_physics_baseline.csv`, with runtime budgets from `Tests/modelica_runtime_baseline.csv` |
| `modelica-regression` | `Tests/test_modelica_regression.py`, `Tests/test_boblib_modelica.py` | Signal-level regressions and `checkModel` smoke checks |

Each model is its own pytest case, so a failure names the model in the node id.
For example:

```text
Tests/test_modelica_translation.py::test_modelica_model_translates[BobLib.Experiments.Standards.VehicleSim]
```

::: details Signal regression coverage

`Tests/test_modelica_regression.py` covers:

- MF52 pure-slip force and moment sanity (`BobLibTest.Regression.MF52PureSlipSmoke`)
- bilinear aero interpolation (`TestAero.TestBilinear2D`)
- CFD aero map drag and downforce (`TestAero.TestCFDAeroMap`)
- VCU power request and torque limit (`TestPowertrain.TestVCU`)

`Tests/test_boblib_modelica.py` runs `checkModel` on the standard entry points,
selected subsystem models, and representative chassis, tire, aero, and
powertrain fixtures. It also checks the VCU motoring power limit, right-wheel
angle mirroring, and source-level structure rules.

:::

## Faster loops

Run one test file directly when you work on one area:

```bash
python -m pytest Tests/test_boblib_modelica.py -q
python -m pytest Tests/test_modelica_regression.py -q
```

`make modelica-smoke` translates only the default standard and regression
models. It skips the fixtures and equation counts.

## Baselines

Initialization and physics baselines are review signals. A change to a
baseline means a model or fixture behaves differently.

To regenerate the initialization baseline after you confirm the new state is
expected:

```bash
python Tests/modelica_initialization_checks.py --update-baseline
```

Physics runtime budgets use a hardware-tolerant scale factor. Set
`BOBLIB_RUNTIME_SCALE` or pass `--boblib-runtime-scale` for strict benchmarks.

When a check fails, see [Troubleshooting](/boblib/troubleshooting).
