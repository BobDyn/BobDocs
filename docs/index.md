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

New MBD runs show the front suspension alongside synchronized steering and
lateral-acceleration signals. Both use a 15 m/s target speed and 30° handwheel
amplitude, producing about 7.3° mean roadwheel steer. Motion is shown at its
simulated magnitude.

<div class="sample-output-grid animation-grid">
  <article class="sample-output-card">
    <p class="sample-output-label">MBD · Ramp steering</p>
    <video controls loop muted playsinline preload="none" poster="/images/examples/mbd-ramp.png" aria-label="New MBD front-suspension ramp-steering animation">
      <source src="/examples/mbd-ramp.mp4" type="video/mp4" />
      <a href="/examples/mbd-ramp.mp4">Ramp-steering animation</a>
    </video>
    <p>A 30° handwheel ramp from 1–5 s, held through 8 s. Front and perspective views show the same captured suspension geometry.</p>
    <div class="sample-output-links"><a href="/examples/mbd-ramp.mp4" target="_blank" rel="noreferrer">Full-size animation</a></div>
  </article>
  <article class="sample-output-card">
    <p class="sample-output-label">MBD · Sinusoidal steering</p>
    <video controls loop muted playsinline preload="none" poster="/images/examples/mbd-sine.png" aria-label="New MBD front-suspension sinusoidal-steering animation">
      <source src="/examples/mbd-sine.mp4" type="video/mp4" />
      <a href="/examples/mbd-sine.mp4">Sinusoidal-steering animation</a>
    </video>
    <p>A ±30° handwheel sine at 0.5 Hz, starting at 1 s. Four cycles show steering reversal and suspension response.</p>
    <div class="sample-output-links"><a href="/examples/mbd-sine.mp4" target="_blank" rel="noreferrer">Full-size animation</a></div>
  </article>
</div>

<figure class="app-figure">
  <a href="/images/bobsim/replay-14dof.png" target="_blank" rel="noreferrer"><img src="/images/bobsim/replay-14dof.png" alt="Current BobSim replay with the 14 DOF vehicle, playback controls, and per-corner tire-force utilization displays" width="1440" height="960" loading="lazy" /></a>
  <figcaption>The current app replay, shown with a 14 DOF run, with playback controls and approximate peak-grip ellipses. <a href="/bobsim/visualization">Animation and signal exploration →</a></figcaption>
</figure>

## Reports

BobSim generates PDF reports for MBD response studies, DynPy maneuvers, and
lap simulations. Each preview opens the full report. The MBD examples are
existing May–June 2026 reports. The DynPy examples are October 2026 saved runs.

<div class="sample-output-grid">
  <article class="sample-output-card">
    <p class="sample-output-label">MBD · Ramp-steer characterization</p>
    <a href="/steady_state_eval_report_1b607470.pdf#page=7" target="_blank" rel="noreferrer"><img class="report-preview" src="/images/examples/steady_state_eval_report_1b607470.png" alt="MBD report with curvature, roll, and sideslip against lateral acceleration at four speeds" loading="lazy" /></a>
    <p>Velocity isolines, steering effort, and fitted handling metrics from the SteadyStateEval ramp-response study.</p>
    <div class="sample-output-links"><a href="/steady_state_eval_report_1b607470.pdf" target="_blank" rel="noreferrer">Full report (PDF)</a></div>
  </article>
  <article class="sample-output-card">
    <p class="sample-output-label">MBD · Transient response</p>
    <a href="/transient_eval_report_05d3fdda.pdf#page=8" target="_blank" rel="noreferrer"><img class="report-preview" src="/images/examples/transient_eval_report_05d3fdda.png" alt="MBD transient report with lateral acceleration and yaw frequency-response gains" loading="lazy" /></a>
    <p>Step and sine responses, rise time, overshoot, gain, phase, and delay.</p>
    <div class="sample-output-links"><a href="/transient_eval_report_05d3fdda.pdf" target="_blank" rel="noreferrer">Full report (PDF)</a></div>
  </article>
  <article class="sample-output-card">
    <p class="sample-output-label">14 DOF · Ramp steering response</p>
    <a href="/examples/maneuver-14dof-report.pdf#page=3" target="_blank" rel="noreferrer"><img class="report-preview" src="/images/examples/maneuver-14dof-report.png" alt="Current 14 DOF report with steering input, yaw rate, lateral acceleration, and controlled speed" loading="lazy" /></a>
    <p>Steering response, tire forces, camber, and wheel travel from a 14 DOF ramp maneuver.</p>
    <div class="sample-output-links"><a href="/examples/maneuver-14dof-report.pdf" target="_blank" rel="noreferrer">Full report (PDF)</a></div>
  </article>
  <article class="sample-output-card">
    <p class="sample-output-label">6 DOF GGV · QSS lap</p>
    <a href="/examples/qss-6dof-report.pdf#page=4" target="_blank" rel="noreferrer"><img class="report-preview" src="/images/examples/qss-6dof-report.png" alt="QSS lap report with speed, longitudinal and lateral acceleration, and curvature along the Michigan track" loading="lazy" /></a>
    <p>A linked GGV and racing line supply the lap's acceleration limits and path.</p>
    <div class="sample-output-links"><a href="/examples/qss-6dof-report.pdf" target="_blank" rel="noreferrer">Full report (PDF)</a></div>
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
