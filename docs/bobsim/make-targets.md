---
layout: doc
title: Make Targets
---

# Make Targets

This page lists the BobDyn/BobSim `make` targets, grouped by area. Run
`make help` for the exact list in your checkout. The makefile is the source of
truth.

Most targets run inside the BobSim Docker image. Pass `RUN=` to run a target in
the host Python environment instead, for example `make test RUN=`.

## Setup and shells

| Target | Action |
| :-- | :-- |
| `make init` | Initialize and update the git submodules |
| `make docker-build` | Build the Docker image |
| `make docker-rebuild` | Rebuild the Docker image without cache |
| `make shell` | Open the main BobSim shell |
| `make shell-standard` | Open a shell in `_3_StandardSim/` |
| `make shell-envelope` | Open a shell in `_2_EnvelopeSim/` |
| `make shell-opt` | Open a shell in `_4_OptSim/` |

## App and deploy

| Target | Action |
| :-- | :-- |
| `make app` | Launch the BobSim browser app in Docker. `APP_PORT` sets the host port. `RUN=` runs it on the host. |
| `make deploy` | Build the desktop executable or app bundle for the current OS |
| `make deploy-deps` | Install the deploy packaging dependencies |
| `make deploy-assets` | Generate the BobSim icon assets |
| `make deploy-package` | Package the current deploy artifact for release |
| `make deploy-release` | Clean, build, and package a release artifact |
| `make deploy-clean` | Remove deploy build outputs |

| Deploy variable | Values | Default |
| :-- | :-- | :-- |
| `DEPLOY_MODE` | `onefile`, `onedir` | `onefile` |
| `DEPLOY_INSTALL_DEPS` | `1`, `0` | `1` |
| `DEPLOY_SKIP_CONFLICT_CHECK` | `1`, `0` | `0` |
| `DEPLOY_VERSION` | A release package version | Empty |
| `DEPLOY_UPLOAD_RELEASE` | `1`, `0`. Uploads the package with the GitHub CLI. | `0` |

Deploy output goes to `_0_Utils/deploy/dist/BobSim/<DEPLOY_MODE>`.

## Vehicle sync

| Target | Action |
| :-- | :-- |
| `make sync-vehicle` | Report whether the BobLib records match `vehicle.yml` |
| `make sync-vehicle-write` | Regenerate those records from `vehicle.yml` |

## StandardSim

See [StandardSim](/bobsim/standard-sim).

| Target | Action |
| :-- | :-- |
| `make standard-build` | Build BobLib `VehicleSim` |
| `make standard-build-four-post` | Build BobLib `FourPostSim` |
| `make standard-eval-ramp-steer` | Run RampSteerEval |
| `make standard-eval-steady-state` | Run SteadyStateEval |
| `make standard-eval-transient` | Run TransientEval |
| `make standard-eval-four-post` | Run FourPostEval |
| `make standard-eval-all` | Run all four standard evaluations |
| `make shark-overlay` | Overlay an imported car on the kinematic curves. See [LotusShark Import](/bobsim/lotus-shark-import). |

## Reduced-order and lap time

| Target | Action |
| :-- | :-- |
| `make reduced-eval` | Run an N-DOF step steer. `REDUCED_DOF` is `3`, `6`, `10`, or `14`. `REDUCED_KINEMATICS` is `lookup` or `nonlinear`. `REDUCED_BOBLIB_CSV` adds a BobLib comparison. |
| `make reduced-fidelity-suite` | Overlay 3, 6, 10, and 14 DOF discriminating maneuvers. `REDUCED_MBD_DIR` points to one BobLib CSV per case. |
| `make reduced-suspension-correlation` | Compare instant links with BobLib FourPost metrics |
| `make reduced-kinematics-benchmark` | Compare lookup grids with in-loop nonlinear kinematics |
| `make lap-eval` | Run the QSS optimization and the forward-transient lap |
| `make lap-eval-qss` | Run only the QSS racing-line and speed optimization |
| `make lap-eval-transient` | Run the transient lap against the optimized QSS reference |
| `make lap-eval-all-dof` | Run QSS and transient laps for 3, 6, 10, and 14 DOF |
| `make lap-validation-visuals` | Validate all DOFs and write QSS and transient figures |

The lap targets take `LAP_CONFIG`, `LAP_SCENARIO` (`qss`, `transient`, or
`both`), and `LAP_DOF`.

## Replay scenes

See [Replay](/bobsim/visualization#replay-a-run).

| Target | Action |
| :-- | :-- |
| `make visual-maneuver` | Simulate a VehicleSim maneuver and write its scene. `VISUAL_MANEUVER` is `transient` (default), `ramp_steer`, or `steady_state`. |
| `make visual-rig` | Simulate the four-post rig and write its scene |
| `make visual-capture` | Simulate `VISUAL_EVAL` and write its scene. The default is `four_post`. |
| `make visual-demo` | Write a synthetic scene. No simulation is needed. |

## EnvelopeSim

See [EnvelopeSim](/bobsim/envelope).

| Target | Action |
| :-- | :-- |
| `make envelope-ggv` | Generate the GGV envelope |
| `make envelope-ymd` | Generate the YMD envelope |
| `make envelope-all` | Generate both |

## OptSim

See [OptSim](/bobsim/doe).

| Target | Action |
| :-- | :-- |
| `make opt-doe-smoke` | Check the DOE plumbing without OpenModelica |
| `make opt-standard` | Run StandardSens pre-screen sensitivities |
| `make opt-envelope` | Run EnvelopeSens sensitivities |
| `make opt-refined` | Run StandardSens refined response surfaces |
| `make opt-search` | Reverse lookup from target metrics to the nearest sampled vehicle |

| Variable | Use |
| :-- | :-- |
| `METRICS="NAME=VALUE ..."` | Required target metrics for `opt-search` |
| `SEARCH_TOP=<n>` | Nearest variants to return. The default is `1`. |
| `DOE_METHOD` | `lhs` or `interval_splice` |
| `DOE_SAMPLES` | LHS sample count, plus the baseline |
| `DOE_INTERVALS` | `interval_splice` interval count |

The `DOE_*` variables override `configs/vehicle_architecture.yaml`, for
example `make opt-standard DOE_METHOD=lhs DOE_SAMPLES=3`.

## Quality and regression

| Target | Action |
| :-- | :-- |
| `make lint` | Run Ruff |
| `make typecheck` | Run MyPy |
| `make test` | Run pytest |
| `make ci` | Run lint, typecheck, and test |
| `make regression-invariants` | Check the current regression artifacts for physical consistency |
| `make regression-baseline` | Run the full default StandardSim baseline simulations |
| `make standard-regression-four-post` | Alias for `regression-baseline` |

## Cleanup

| Target | Action |
| :-- | :-- |
| `make clean` | Remove Python and tool caches |
| `make clean-app` | Remove app configs, saved vehicles, archive packages, and workspaces under `_5_App/user_data/` |
| `make clean-visual` | Remove generated Replay scenes |
| `make clean-standard` | Remove StandardSim build and result artifacts |
| `make clean-envelope` | Remove EnvelopeSim build and result artifacts |
| `make clean-opt` | Remove OptSim build and result artifacts |
| `make clean-owned` | Remove root-owned generated artifacts through a no-network Docker container |
| `make clean-all` | Run all of the cleanup targets above |

::: warning
`make clean-all` includes `make clean-app`. It deletes your saved vehicles and
archive packages in a source checkout.
:::
