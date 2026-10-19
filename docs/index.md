---
layout: home
title: BobDyn
hero:
  name: BobDyn
  text: Vehicle models and analysis
  tagline: Documentation for BobSim and BobLib.
  image:
    src: /bobdyn.png
    alt: BobDyn
  actions:
    - theme: brand
      text: Getting started
      link: /startup-guide/
    - theme: alt
      text: Simulation workspace
      link: /bobsim/app
features:
  - title: BobSim
    details: Vehicle setup, suspension kinematics, response studies, envelopes, lap simulation, and results.
    link: /bobsim/
    linkText: BobSim documentation
  - title: BobLib
    details: Modelica vehicle physics, subsystem interfaces, experiment models, and validation checks.
    link: /boblib/
    linkText: BobLib documentation
  - title: Engineering reference
    details: Coordinate conventions, tire behavior, vehicle dynamics, and metric interpretation.
    link: /reference/vehicle-dynamics
    linkText: Engineering reference
---

## Analysis paths

| Question | Documentation |
| --- | --- |
| How is a vehicle defined? | [Vehicle setup](/bobsim/configuration) |
| Which model represents the required dynamics? | [Models and fidelity](/bobsim/models) |
| How does the suspension move? | [Four post](/bobsim/standard-sim#four-post) |
| How does the vehicle respond to steering? | [Vehicle response](/bobsim/standard-sim) |
| What acceleration can it sustain? | [GGV and yaw moment diagrams](/bobsim/envelope) |
| What limits its lap performance? | [Tracks](/bobsim/tracks) and [lap simulation](/bobsim/laptime) |
| How are the Modelica components connected? | [BobLib package map](/boblib/package-map) |

## Documentation scope

The BobSim guides describe current main, including changes newer than the
v2026.10.13 desktop release. BobLib guides describe published main. Its local
architecture changes have a separate [unreleased preview](/boblib/unreleased).
[Source versions](/reference/versions) records the revisions used for this review.
