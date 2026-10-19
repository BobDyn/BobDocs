---
layout: doc
title: Workflows
---

# Workflows

| Workflow | Guide |
| --- | --- |
| Setup to first simulation | [BobSim workflow](/use-guide/bobsim) |
| Repeatable studies from a terminal | [BobSim command line](/use-guide/bobsim-cli) |
| Modelica models and experiments | [BobLib workflow](/use-guide/boblib) |

For a lap study, the dependency chain is **Vehicle → GGV + Racing line → QSS
lap → Results**. For a steering study, **Vehicle → Maneuver → Results** is
sufficient. The [Simulation workspace](/bobsim/app) makes those inputs explicit.
