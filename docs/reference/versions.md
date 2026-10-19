---
layout: doc
title: Source versions
---

# Source versions

This documentation refresh was checked against source on 19 October 2026.

| Source | Revision | Scope |
| --- | --- | --- |
| BobSim main | `22c50565e516babb0f320ca24c140e6614b4beb3` | Current workspace, analyses, and Python models |
| BobSim desktop release | `v2026.10.13` | Published bundle, which predates some current workspace changes |
| BobLib main | `ea7dda2` | Published library guides |
| BobLib local development | Uncommitted work based on `ea7dda2` | Only the explicitly labeled development preview |

BobSim pins BobLib as a submodule. That pin can differ from standalone BobLib
main. Its Modelica workflows should be interpreted against the pinned source.

## Reproducibility

A result needs its vehicle definition, simulation settings, model revision,
tire data, and linked inputs. A QSS lap also depends on the GGV and racing line
that supplied its limits and path. Re-running a parent analysis replaces the
active result, while saved runs retain their archived inputs.

Documentation review is not simulation validation. The unreleased BobLib
snapshot was inspected but not translated or regression-tested for this site
refresh. The [BobLib test guide](/boblib/testing) and BobSim's repository
`CONTRIBUTING.md` define the corresponding checks.
