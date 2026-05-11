---
layout: home

hero:
  name: BobDyn
  text: A high-fidelity, open-source vehicle simulation framework
  image:
    src: /bob.png
    alt: BobDyn
  actions:
    - theme: brand
      text: Startup Guide
      link: /startup-guide/
    - theme: alt
      text: Use Guide
      link: /use-guide/

features:
  - icon: "🧱"
    title: BobLib
    details: A Modelica library for representing the vehicle as an acausal multibody dynamic system with explicit geometry, constraints, tires, suspension, steering, chassis, and powertrain interfaces.

  - icon: "⚙️"
    title: BobSim
    details: A Python simulation runner that uses BobLib models to build executables, run studies, extract signals, generate plots, compute metrics, and produce reports.

  - icon: "📊"
    title: BobDyn
    details: The parent framework that connects physical modeling, automated simulation, analysis, reporting, and design correlation into one transparent workflow.
---

## A physical model for vehicle characterization

Vehicles are dynamic systems, and the driver experiences their response rather than their equations. BobDyn is built around that idea: use meaningful response metrics, keep the model inspectable, and make every study traceable from configuration to report.

BobLib provides the physical vehicle model in Modelica. BobSim takes that model, runs repeatable studies, extracts signals, and turns the results into plots, metrics, and reports.

The result is a workflow for generating simulation ground truth that you can inspect, compare, and reuse across design iterations.

---

## What BobDyn enables

|Capability|Description|
|:--|:--|
|**Standard tests**|Run repeatable studies such as steady-state cornering, transient steering response, and kinematics/compliance workflows.|
|**Automated reporting**|Turn simulation output into metrics, plots, CSV files, and engineering reports without hand-built post-processing.|
|**Model correlation**|Use full-system simulation results as reference data for reduced-order models, design tools, and simplifying assumptions.|
|**Design exploration**|Sweep parameters, compare configurations, and see how physical changes propagate through vehicle-level behavior.|

---

## Sample reports

The sample outputs below come from the active BobSim workflows and live in `docs/public/` for easy embedding.

<div class="desktop-visuals" style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; width: 100%;">
  <div>
    <video autoplay loop muted playsinline width="100%" style="display: block;">
      <source src="/steady_state_eval.mp4" type="video/mp4">
    </video>
    <div style="height: 1rem;"></div>
    <PdfViewer src="/steady_state_eval_report.pdf" />
  </div>
  <div>
    <video autoplay loop muted playsinline width="100%" style="display: block;">
      <source src="/transient_eval.mp4" type="video/mp4">
    </video>
    <div style="height: 1rem;"></div>
    <PdfViewer src="/transient_eval_report.pdf" />
  </div>
</div>

---

## Transparent by design

BobDyn is built to eliminate black-box behavior through an explicit, inspectable, and reproducible simulation pipeline.

- **Physical models are defined from first principles**  
  Geometry, constraints, and force generation are implemented directly in Modelica.

- **Configuration is human-readable**  
  Vehicle definitions, test setups, and simulation parameters are defined in plain-text YAML and Modelica `.mo` files.

- **Execution is visible and scriptable**  
  Simulation, extraction, analysis, and reporting workflows are implemented in Python and designed to be built upon, modified, or replaced.

- **Results are directly traceable**  
  Outputs can be linked back to the model structure, configuration, and equations that produced them.

All models, solvers, workflows, and reports come from plain-text, version-controlled sources.
