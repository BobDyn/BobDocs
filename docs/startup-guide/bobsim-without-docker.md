---
layout: doc
title: Desktop and native Python
---

# Desktop and native Python

| Installation | Python | OpenModelica |
| --- | --- | --- |
| Desktop package | Bundled | Required for BobLib MBD analyses |
| Source with `RUN=` | Local environment | Required for BobLib MBD analyses |

KinPy and DynPy run in Python. Missing OpenModelica does not disable those
analyses.

## Desktop package

The [release page](https://github.com/BobDyn/BobSim/releases/latest) provides
platform archives and matching SHA-256 files. Extract the archive before
starting `BobSim.exe`, `BobSim.app`, or `BobSim`.

The release checked for this guide is `v2026.10.13`, with Windows x86-64,
Linux x86-64, and macOS arm64 assets. The newer workspace documented here is
on `main`. A release package does not automatically acquire later source changes.

## Native source

From a recursive BobSim clone:

```bash
python3.11 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
python -m app.app --host 127.0.0.1 --port 8765
```

On Windows PowerShell, activation is `.venv\Scripts\Activate.ps1`.
`make app RUN=` is the equivalent Make entry point. Other targets also accept
`RUN=` when their required native tools are available.

## OpenModelica for MBD

The container uses OpenModelica 1.27.1. The required libraries are Modelica
4.1.0 and VehicleInterfaces 2.0.2. In the OpenModelica shell:

```text
installPackage(Modelica, "4.1.0", exactMatch=true);
installPackage(VehicleInterfaces, "2.0.2", exactMatch=true);
```

The app's **OpenModelica** dialog selects and checks the local executable and
library directory. The executable can also be selected with `BOBSIM_OMC`.
The Docker app uses a separate settings file from the host app.

## Saved data

Source runs use `app/user_data/`. Desktop builds seed a writable runtime:

| Platform | Default runtime root |
| --- | --- |
| Windows | `%LOCALAPPDATA%\BobDyn\BobSim` |
| macOS | `~/Library/Application Support/BobDyn/BobSim` |
| Linux | `${XDG_DATA_HOME:-~/.local/share}/BobDyn/BobSim` |

`BOBSIM_HOME` overrides the runtime root. Saved vehicles and runs are user data,
separate from the application bundle. [Results and saved data](/bobsim/results)
describes the workspace layout.
