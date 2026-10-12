---
layout: doc
title: Run BobSim Without Docker
prev:
  text: 'BobSim Startup'
  link: '/startup-guide/bobsim'
next:
  text: 'BobSim Startup Problems'
  link: '/startup-guide/bobsim-troubleshooting'
---

# Run BobSim Without Docker

Use this page to run the BobSim app directly on your machine, from a source
checkout or from the released desktop app. Both need a local OpenModelica to
simulate. The [Docker path](/startup-guide/bobsim) does not.

| Path | Python | OpenModelica | Files go to |
| :-- | :-- | :-- | :-- |
| Source checkout with `RUN=` | Your Python 3.11 environment | Local install | The repository checkout |
| Released desktop app | Bundled | Local install | A per-user runtime root |

## Run The App From A Source Checkout

`RUN=` empties the Docker prefix, so a target runs directly on your machine.

1. Create a Python 3.11 environment with the BobSim dependencies:

   ```bash
   python -m venv .venv
   source .venv/bin/activate
   python -m pip install --upgrade pip
   python -m pip install -r requirements.txt
   ```

   On Windows PowerShell, activate with `.venv\Scripts\Activate.ps1` instead.

2. [Install OpenModelica and the libraries](#install-openmodelica).

3. Start the app:

   ```bash
   make app RUN=
   ```

Without a local OpenModelica, the `Simulation` view stays locked. The rest of
the app works.

`RUN=` works the same way for the simulation targets, for example
`make standard-eval-all RUN=`. They then need a local `omc` with the exact
library versions. GitHub Actions uses `RUN=` for its fast gate
(`make lint RUN=`, `make typecheck RUN=`, `make test RUN=`).

## Run The Released Desktop App

The [GitHub Release](https://github.com/BobDyn/BobSim/releases/latest) has a
desktop build of the app. It bundles its own Python and does not use Docker.
To simulate, it needs a local OpenModelica. See
[Install OpenModelica](#install-openmodelica).

1. Download the asset for your operating system.
2. Extract it.
3. Run `BobSim.exe` on Windows, `BobSim.app` on macOS, or `BobSim` on Linux.

| Asset detail | Value |
| :-- | :-- |
| Name | `BobSim-<version>-<os>-<arch>`, for example `BobSim-<version>-windows-x86_64.zip` |
| Archive format | `.zip` on Windows and macOS, `.tar.gz` on Linux |
| Checksum | A `.sha256` file next to each asset |
| macOS architecture | Apple Silicon (`arm64`) |

The desktop app starts the same local server as `make app`, picks a free port,
and opens it in an embedded window. If that window is not available, it opens
your default browser. On Linux the embedded window needs GTK (`gi`) or
PyQt6-WebEngine.

The desktop app keeps its files in a per-user runtime root, not in a
repository:

| Platform | Runtime root |
| :-- | :-- |
| Windows | `%LOCALAPPDATA%\BobDyn\BobSim` |
| macOS | `~/Library/Application Support/BobDyn/BobSim` |
| Linux | `${XDG_DATA_HOME:-~/.local/share}/BobDyn/BobSim` |

Set `BOBSIM_HOME` to put it somewhere else.

## Install OpenModelica

Install OpenModelica, then install the exact library versions in the
OpenModelica shell:

```text
installPackage(Modelica, "4.1.0", exactMatch=true);
installPackage(VehicleInterfaces, "2.0.2", exactMatch=true);
```

## Point The App At OpenModelica

The app looks for OpenModelica every time it checks status. It searches the
usual install locations and these environment variables:

| Variable | Sets |
| :-- | :-- |
| `BOBSIM_OMC`, or `OMC` | The `omc` executable |
| `BOBSIM_OPENMODELICA_HOME`, or `OPENMODELICAHOME` | The OpenModelica install directory |
| `BOBSIM_OPENMODELICA_LIBRARY` | The library directory |

If detection finds nothing, set the paths by hand:

1. Click `OpenModelica` in the top bar to open the `Toolchain` dialog. The
   dialog lists the candidate paths it found.
2. Set **omc executable**: `omc.exe` on Windows, `omc` elsewhere.
3. Set **Library directory**: the folder where `installPackage` put Modelica
   and VehicleInterfaces.
4. Click `Save`.

| Platform | Typical library directory |
| :-- | :-- |
| Windows | `%APPDATA%\.openmodelica\libraries` |
| macOS | `~/.openmodelica/libraries` |
| Linux | `~/.openmodelica/libraries` |

On `Save`, BobSim checks that the executable runs and that both required
libraries are present. If a library is missing, it names it. `Auto` clears
your manual paths and goes back to automatic detection.

::: warning The check does not compare versions
The toolchain check only looks for the library folders. A wrong version passes
the check and then fails at build time.
:::

## Next Pages

- [BobSim Startup Problems](/startup-guide/bobsim-troubleshooting) if the app or
  the toolchain check fails
- [BobSim Use Guide](/use-guide/bobsim) for the daily workflow
- [Development](/bobsim/development) for local Python and desktop release builds
