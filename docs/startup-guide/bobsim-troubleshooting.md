---
layout: doc
title: BobSim troubleshooting
---

# BobSim troubleshooting

| Symptom | Check |
| --- | --- |
| Docker cannot connect to its socket | The Docker daemon is stopped or the selected Docker context is wrong. `docker info` and `docker context show` distinguish these cases. |
| The page cannot open | The app process must remain running. Check the port printed by the launcher and whether another process owns it. |
| The interface looks older than these docs | Check the checkout branch or desktop release. `make app` runs from the checkout where it was invoked. |
| BobLib is empty or at the wrong revision | Run `git submodule status`, then `make init`. |
| A run action is unavailable | Hover over the disabled action. BobLib requires its toolchain, while QSS Lap requires valid linked inputs. |
| QSS Lap has no usable input | Run its GGV and Racing line analyses, then connect their Results. Stale or incompatible results need regeneration. |
| MBD ignores a vehicle edit | Check the generated Modelica record and build. YAML alone does not update a compiled model. |
| Windows Docker paths contain `C:/Program Files/Git` | Prefix the command with `MSYS_NO_PATHCONV=1` in Git Bash. |

## Run failures

**Run log** belongs to the Simulation workspace and follows newly started runs.
It records the command and solver output. Cancellation is available there.
A failed run is not a valid replacement for the last successful result.

For a model failure, retain the vehicle, analysis settings, and complete log.
Identify the model fidelity and whether the error occurred during compilation,
initialization, or numerical solution.

## Active settings

The app stores editable settings under `app/user_data/config/active/` and named
simulations in each vehicle workspace. Editing a repository seed file may not
change the active app copy. The [configuration guide](/bobsim/configuration)
explains the distinction.

## Recovery

A restart does not require deleting user data. Before removing a runtime or
workspace, copy its saved vehicles and results. `make clean-app` removes app
state and is not a general fix for a solver error.
