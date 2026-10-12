---
layout: doc
title: Startup Guide
next:
  text: 'BobLib Startup'
  link: '/startup-guide/boblib'
---

# Startup Guide

BobDyn has two repositories you can start from. Choose the one that matches
your work.

| Start here | Use it when | First outcome |
| :-- | :-- | :-- |
| [BobDyn/BobLib Startup](/startup-guide/boblib) | You want to inspect, edit, translate, or test the Modelica vehicle library directly | A local BobLib checkout that loads `BobLib` in OpenModelica |
| [BobDyn/BobSim Startup](/startup-guide/bobsim) | You want to set up vehicles, run studies, and get reports, plots, and metrics | The BobSim app running in Docker, with a vehicle saved, written to MBD, and simulated once |

If you are not sure, start with BobSim. It includes BobLib as a submodule and
runs the standard vehicle entry points end to end. Go to BobLib directly when
you need to change model structure, records, subsystem physics, or diagram
annotations. The [Use Guide](/use-guide/) explains how the two layers split
the work.

## BobSim Setup Options

| Page | Use it when |
| :-- | :-- |
| [BobSim Startup](/startup-guide/bobsim) | You have Docker. This is the default path. |
| [Run BobSim Without Docker](/startup-guide/bobsim-without-docker) | You want the released desktop app, or to run the app with your own Python and OpenModelica |
| [BobSim Startup Problems](/startup-guide/bobsim-troubleshooting) | A setup step failed |

After setup, go to the [Use Guide](/use-guide/) for daily workflows.
