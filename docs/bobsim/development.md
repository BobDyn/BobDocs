---
layout: doc
title: BobSim development
---

# BobSim development

BobSim separates vehicle physics from analysis and presentation. The source
layout below describes current `main`, not the old numbered directories.

## Source layout

| Path | Responsibility |
| --- | --- |
| `engines/boblib/` | Pinned Modelica library submodule |
| `engines/kinpy/` | Suspension geometry |
| `engines/dynpy/` | Reduced vehicle dynamics |
| `simulations/response/` | MBD and reduced response studies |
| `simulations/envelope/` | GGV and yaw moment diagrams |
| `simulations/lap/` | Tracks, racing lines, QSS and transient laps |
| `optimization/` | Parameter studies and target solving |
| `common/` | Vehicle I/O, plotting, reporting, and shared utilities |
| `app/` | Browser UI, job execution, and workspaces |
| `visualization/` | Replay capture and viewer |

Some output directories retain older names. They are runtime artifacts, not
source packages. [Results](/bobsim/results) lists their locations.

## Local setup

[Installation](/startup-guide/bobsim) covers Docker.
[Native Python](/startup-guide/bobsim-without-docker) covers host development.
From the repository root:

```bash
git submodule status
make help
make ci
```

An uninitialized or mismatched BobLib submodule needs attention before an MBD
build. `make init` initializes the expected revision. BobLib changes belong in
the BobLib repository, followed by a submodule pin update in BobSim.

## Validation

`make ci` runs lint, type checking, and tests. It does not establish that a
changed vehicle or Modelica model still matches physical baselines.

| Change | Additional check |
| --- | --- |
| YAML or generated vehicle records | `make sync-vehicle` |
| DOE pipeline or record sampling | `make opt-doe-smoke` |
| Physics, study inputs, or runners | Regenerated simulations and reviewed reports through `make regression-baseline` |
| Desktop packaging | Native startup and workflow checks on the target platform |

The repository's `CONTRIBUTING.md` defines the baseline procedure. Updating a
provenance digest without regenerating the underlying simulation hides stale
results.

## Generated data

Generated records come from the vehicle definition and generator. Hand edits
will be overwritten. Builds, reports, populations, and `app/user_data/` remain
outside version control.

Path strings in portable payloads use forward slashes. Shared path helpers in
`common/vehicle_io.py` resolve repository and vehicle locations.

## Releases

Desktop builds package the app and its Python workflows. Modelica execution
still needs a supported external toolchain. A bundled release can lag behind
`main`, so documentation for a new UI must identify that scope.

The makefile's `deploy-*` targets and CI workflows define packaging. A source
build and a packaged WebKit window both need verification because browser and
asset-loading behavior can differ.
