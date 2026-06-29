---
layout: doc
title: Startup Guide
next:
  text: 'BobLib Startup'
  link: '/startup-guide/boblib'
---

# Startup Guide

BobDyn has two public entry points. Choose the one that matches the work you
are starting.

| Start here | Use it when | First outcome |
| :-- | :-- | :-- |
| [BobDyn/BobLib Startup](/startup-guide/boblib) | You want to inspect, edit, translate, or test the Modelica vehicle library directly | A local BobLib checkout that loads `BobLib` in OpenModelica |
| [BobDyn/BobSim Startup](/startup-guide/bobsim) | You want the complete simulation workspace for setup, cases, sweeps, reports, plots, metrics, and batch studies | The BobSim app launched with a vehicle saved, written to MBD, and ready to simulate |

## How The Pieces Fit

BobDyn/BobLib owns the physical vehicle model: Modelica packages, records,
VehicleInterfaces adapters, subsystem models, and OMEdit diagrams.

BobDyn/BobSim owns the analysis workflow around that model: app-guided setup,
build orchestration, YAML cases, sweeps, signal extraction, metrics, plots, and
reports.

If you are not sure where to begin, start with BobSim. It includes BobLib as a
submodule, launches from a local browser app, and exercises the standard
vehicle entry points end to end. Move to BobLib directly when you need to
change model structure, records, subsystem physics, or diagram annotations.

## Next Pages

- [BobDyn/BobLib Startup](/startup-guide/boblib) for direct Modelica library work
- [BobDyn/BobSim Startup](/startup-guide/bobsim) for full simulation workflows
- [Use Guide](/use-guide/) for daily workflows after setup
