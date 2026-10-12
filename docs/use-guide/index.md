---
layout: doc
title: Use Guide
prev:
  text: 'Startup Guide'
  link: '/startup-guide/'
next:
  text: 'BobLib Use Guide'
  link: '/use-guide/boblib'
---

# Use Guide

Use these guides after your environment is set up. If it is not, start with the
[Startup Guide](/startup-guide/).

| Guide | Use it when | You will mostly touch |
| :-- | :-- | :-- |
| [BobDyn/BobLib Use Guide](/use-guide/boblib) | You edit, check, or simulate the Modelica vehicle library directly | Modelica packages, records, OMEdit diagrams, direct OpenModelica workflows |
| [BobDyn/BobSim Use Guide](/use-guide/bobsim) | You run vehicle studies in the app and collect outputs | BobSim app Setup, Simulation, Archive, reports, metrics |
| [BobSim CLI Workflow](/use-guide/bobsim-cli) | You run the same studies from `make` targets, for scripts or CI | `make standard-eval-*`, EnvelopeSim, OptSim, workflow YAML |

## Which Layer To Use

BobLib owns the physical vehicle model: Modelica packages, records,
VehicleInterfaces adapters, subsystem models, and OMEdit diagrams. Use it when
the question is "what is the vehicle model?"

BobSim owns the analysis workflow around that model: app-guided setup, build
orchestration, YAML cases, sweeps, signal extraction, metrics, plots, and
reports. Use it when the question is "what setup or study do I want to run with
that model?"

The two layers stay separate so that the physics stays inspectable and the
analysis workflow stays repeatable.
