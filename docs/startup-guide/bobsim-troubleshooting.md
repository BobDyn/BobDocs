---
layout: doc
title: BobSim Startup Problems
prev:
  text: 'Run BobSim Without Docker'
  link: '/startup-guide/bobsim-without-docker'
next:
  text: 'Use Guide'
  link: '/use-guide/'
---

# BobSim Startup Problems

Find the symptom, then apply the fix. Run the commands from the BobSim
repository root.

## BobLib submodule missing

```bash
make init
```

## make app or another target fails with a Docker error

Make sure that Docker is running and that `docker compose version` works. Then
build the image again:

```bash
make docker-build
```

## The app page does not load

Open `http://127.0.0.1:8765`, not the `0.0.0.0` address that the container
prints. If another program already uses port 8765, start the app with
`make app APP_PORT=8766` and open that port.

## Simulation is locked

Hover over the locked control. It names the reason. The app wants these in
order:

1. The vehicle is saved.
2. The vehicle is written to MBD.
3. The OpenModelica toolchain is verified.

In Docker the toolchain is always present. On the host, see
[Run BobSim Without Docker](/startup-guide/bobsim-without-docker#point-the-app-at-openmodelica).

## No module named yaml

You started the app on the host with `RUN=`, without the dependencies. Install
them into the same interpreter:

```bash
python -m pip install -r requirements.txt
```

## Toolchain saved but a library is reported missing

This happens on the host only. The library directory does not contain that
library. Make sure that `Library directory` points at the folder that
`installPackage` wrote to, and install the exact versions.

## A run failed and you want the raw directory

The directory is already there. All four shipped configs set
`execution.cleanup: false`, so BobSim keeps run directories under the build
directory:

```text
_3_StandardSim/BuildBobLib/VehicleSim/results/run_<id>/
_3_StandardSim/BuildBobLib/FourPostSim/results/run_<id>/
```

If `results/` is not writable, BobSim writes to `runs/` in the same build
directory instead.

Each run directory holds `run.log`, `overrides.txt`, the raw result CSV, and a
manifest. If the directory is gone, something set `execution.cleanup: true`.
Check the app's copy in `_5_App/user_data/config/active/` first, then the
checked-in config. Set it back to `false` and run again.

## Files in the checkout belong to root

On Linux, files written from the container belong to `root`. `make clean-owned`
deletes the generated results and app data through the container, so you do
not need `sudo`.

## You want to start the app from a clean state

This command deletes saved vehicles, configs, toolchain settings, workspaces,
the build cache, and archive packages in `_5_App/user_data/`:

```bash
make clean-app
```

## Next Pages

- [BobSim App troubleshooting](/bobsim/app) for problems inside the app views
- [BobSim Use Guide](/use-guide/bobsim#debug-a-failed-run) to debug a failed run
