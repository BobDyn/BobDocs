---
layout: doc
title: BobSim installation
---

# BobSim installation

The source app provides the current Simulation workspace. Docker includes
Python and OpenModelica. A [native Python installation](/startup-guide/bobsim-without-docker)
can run DynPy analyses without OpenModelica.

## Source with Docker

Prerequisites: Git, Make, Docker Engine, and the Docker Compose plugin. The
Docker daemon must be running.

```bash
git clone --recurse-submodules https://github.com/BobDyn/BobSim.git
cd BobSim
make init
make docker-build
make app
```

The app is available at `http://127.0.0.1:8765`. `APP_PORT=8878` selects another
port, for example `make app APP_PORT=8878`.

The first image build downloads Python dependencies and Modelica libraries.
The first BobLib run also compiles the selected vehicle. Later runs can reuse
matching build artifacts.

On Windows Git Bash, container paths need MSYS path conversion disabled:

```bash
MSYS_NO_PATHCONV=1 make app
```

## First analysis

1. Open or create a vehicle, then review its Setup pages.
2. Save the vehicle.
3. Open **Simulation**. The vehicle name at the top of the tree returns to the
   analysis overview.
4. Use the **+** beside **Vehicle response** to add **Maneuver**.
5. In its **Setup**, select a DynPy model, speed, and steering waveform.
6. Run the analysis. **Run log** shows progress and cancellation controls.
7. Open **Results** for plots and the report. Its context menu adds an
   **Animation** or **Signal Explorer** when supported.

A DynPy maneuver is a short first check of the vehicle workflow. The
[model guide](/bobsim/models) explains what each fidelity represents.

## BobLib analyses

Four post and MBD maneuvers require OpenModelica. The Docker image supplies it.
Vehicle YAML and compiled Modelica records are different representations:
**Write to MBD** generates the records from the active vehicle. A changed record
requires a matching build.

The [simulation workspace](/bobsim/app) covers analysis setup and dependencies.
[Startup troubleshooting](/startup-guide/bobsim-troubleshooting) covers Docker,
missing libraries, and unavailable run actions.
