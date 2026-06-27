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

Use this section after your environment is set up. BobDyn usage splits cleanly
by layer.

| Guide | Use it when | You will mostly touch |
| :-- | :-- | :-- |
| [BobDyn/BobLib Use Guide](/use-guide/boblib) | You are editing, checking, or simulating the Modelica vehicle library directly | Modelica packages, records, OMEdit diagrams, direct OpenModelica workflows |
| [BobDyn/BobSim Use Guide](/use-guide/bobsim) | You are running vehicle studies and collecting outputs | BobSim app Setup, Simulation, Results, workflow YAML, reports, metrics |

## Rule Of Thumb

Use BobLib when the question is "what is the vehicle model?" Use BobSim when
the question is "what setup or study do I want to run with that model?"

The two layers stay separate on purpose: BobLib keeps the physics inspectable,
and BobSim keeps the analysis workflow repeatable.

## Next Pages

- [BobLib Use Guide](/use-guide/boblib) for direct Modelica model work
- [BobSim Use Guide](/use-guide/bobsim) for daily simulation workflows
- [BobLib Startup](/startup-guide/boblib) and [BobSim Startup](/startup-guide/bobsim) if setup is not complete yet
