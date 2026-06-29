---
layout: doc
title: BobLib Startup
prev:
  text: 'Startup Guide'
  link: '/startup-guide/'
next:
  text: 'BobSim Startup'
  link: '/startup-guide/bobsim'
---

# BobDyn/BobLib Startup

Use this path when you want to work directly on the Modelica vehicle library:
package structure, records, subsystem models, VehicleInterfaces integration,
OMEdit diagrams, or direct OpenModelica checks.

::: info Starting point
In this guide, the BobDyn/BobLib root means the repository directory created by
the clone step below. Start in that directory before running commands.
:::

## What You Need

Install these first:

- Git
- OpenModelica with OMEdit and `omc`
- Modelica Standard Library `4.1.0`
- VehicleInterfaces `2.0.2`
- Python and pytest if you want to run the repository checks locally

BobLib can also be consumed through BobSim as a submodule, but clone BobLib
directly when you are changing the Modelica layer itself.

## Step 1: Clone BobLib

```bash
git clone https://github.com/BobDyn/BobLib.git
cd BobLib
```

The active package is:

```text
BobLib/package.mo
```

Regression and component fixtures live in `Tests/BobLibTest/package.mo`.

## Step 2: Confirm OpenModelica Libraries

OpenModelica must be able to load:

```text
Modelica 4.1.0
VehicleInterfaces 2.0.2
```

The easiest visual check is OMEdit: open `File > System Libraries` and confirm
both libraries are installed. For CLI work, use the same OpenModelica install
that OMEdit uses.

## Step 3: Run Repository Checks

From the BobLib root, run the Python and Modelica coverage checks:

```bash
make test
```

If you are using a repository-local virtual environment, pass it explicitly:

```bash
make test PYTHON=.venv/bin/python
```

These checks keep the public Modelica package, record coverage, and test
manifests aligned.

## Step 4: Load BobLib In OMEdit

Open the package:

```text
BobLib/package.mo
```

Start with the standard experiment entry points:

```text
BobLib.Experiments.Standards.VehicleSim
BobLib.Experiments.Standards.FourPostSim
```

Use the [OMEdit Workflow](/boblib/omedit-workflow) page for the full visual
package-load sequence and maintained screenshots.

## Step 5: Know The Direct-Use Surface

For daily BobLib work, the main public surfaces are:

| Area | Use it for |
| :-- | :-- |
| `BobLib.Experiments.Standards` | Complete vehicle entry points such as `VehicleSim` and `FourPostSim` |
| `BobLib.Records` | Vehicle data schemas and complete vehicle definitions |
| `BobLib.Chassis`, `Aero`, `ElectricDrives`, `PowerElectronics`, `Controllers`, `Drivelines`, `EnergyStorage` | Vehicle subsystem contracts and BobLib physics implementations |
| `BobLib.Utilities` | Shared mechanics, math, FMI, and helper functionality |

## Next Pages

- [BobLib Use Guide](/use-guide/boblib) for the daily model-development loop
- [BobDyn/BobLib Overview](/boblib/) for package architecture
- [CLI Workflow](/boblib/cli-workflow) for direct OpenModelica command-line work
- [OMEdit Workflow](/boblib/omedit-workflow) for visual loading and simulation
- [BobSim Startup](/startup-guide/bobsim) when you want the full workflow wrapper
