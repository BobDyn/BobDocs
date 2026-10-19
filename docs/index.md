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

## Vehicle setup and analysis

<figure class="app-figure">
  <a href="/images/bobsim/geometry-current.png" target="_blank" rel="noreferrer">
    <img src="/images/bobsim/geometry-current.png" alt="BobSim geometry editor with hardpoint coordinates on the left and front and rear suspension geometry on the right" width="1440" height="960" loading="lazy" />
  </a>
  <figcaption>Geometry editing in BobSim. Hardpoints, axle selection, and the 3D view share one workspace. <a href="/bobsim/configuration">Vehicle setup →</a></figcaption>
</figure>

<div class="sample-output-grid">
  <article class="sample-output-card">
    <p class="sample-output-label">Tire behavior</p>
    <a href="/images/bobsim/tires-current.png" target="_blank" rel="noreferrer"><img src="/images/bobsim/tires-current.png" alt="Front tire definition and its pure and combined-slip friction ellipse in BobSim" width="1440" height="960" loading="lazy" /></a>
    <p>Front and rear tire definitions with force and moment plots. <a href="/bobsim/configuration#tires-and-suspension">Tires and suspension →</a></p>
  </article>
  <article class="sample-output-card">
    <p class="sample-output-label">Simulation workspace</p>
    <a href="/images/bobsim/workspace-current.png" target="_blank" rel="noreferrer"><img src="/images/bobsim/workspace-current.png" alt="BobSim simulation tree and overview showing analysis groups and the GGV plus racing-line dependency for QSS lap" width="1440" height="960" loading="lazy" /></a>
    <p>Analyses belong to the vehicle. Results belong to each analysis. <a href="/bobsim/app">Simulation workspace →</a></p>
  </article>
</div>

App captures from the October 2026 source workspace. Images open at full size.

## Animations

Archived Modelica demonstrations. These clips are separate from the report
runs below and do not show the current app's replay controls.

<div class="sample-output-grid">
  <article class="sample-output-card">
    <p class="sample-output-label">Closed-loop steering</p>
    <video controls loop muted playsinline preload="none" poster="/images/examples/steady_state_eval.png" aria-label="Archived closed-loop steering animation">
      <source src="/steady_state_eval.mp4" type="video/mp4" />
      <a href="/steady_state_eval.mp4">Animation video</a>
    </video>
    <p>A vehicle response with a closed-loop steering input.</p>
  </article>
  <article class="sample-output-card">
    <p class="sample-output-label">Sinusoidal steering</p>
    <video controls loop muted playsinline preload="none" poster="/images/examples/transient_eval.png" aria-label="Archived sinusoidal steering animation">
      <source src="/transient_eval.mp4" type="video/mp4" />
      <a href="/transient_eval.mp4">Animation video</a>
    </video>
    <p>A vehicle response to a prescribed periodic steering input.</p>
  </article>
</div>

## Reports

Archived examples of the plots and metrics produced by the MBD workflows.
Each preview opens its full PDF. The report records its own settings and date.

<div class="sample-output-grid">
  <article class="sample-output-card">
    <p class="sample-output-label">Ramp-steer characterization</p>
    <a href="/steady_state_eval_report_1b607470.pdf#page=6" target="_blank" rel="noreferrer"><img class="report-preview" src="/images/examples/ramp-report.png" alt="Report plots of roadwheel and handwheel angle against measured lateral acceleration at four speeds" loading="lazy" /></a>
    <p>Steering, body response, and handling gradients. June 2026.</p>
    <div class="sample-output-links"><a href="/steady_state_eval_report_1b607470.pdf" target="_blank" rel="noreferrer">Full report (PDF)</a></div>
  </article>
  <article class="sample-output-card">
    <p class="sample-output-label">Transient response</p>
    <a href="/transient_eval_report_05d3fdda.pdf#page=6" target="_blank" rel="noreferrer"><img class="report-preview" src="/images/examples/transient-report.png" alt="Report plots of step steering input, lateral acceleration, and yaw velocity over time" loading="lazy" /></a>
    <p>Step response, sine response, gain, and phase. May 2026.</p>
    <div class="sample-output-links"><a href="/transient_eval_report_05d3fdda.pdf" target="_blank" rel="noreferrer">Full report (PDF)</a></div>
  </article>
</div>

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
