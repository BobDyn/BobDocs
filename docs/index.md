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
      text: Get Started
      link: /get-started/
    - theme: alt
      text: Documentation
      link: /docs/
    - theme: alt
      text: Reference
      link: /reference/

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

Vehicles are dynamic systems, and what the driver feels is the response of that system. BobDyn is built around the idea that vehicle design should be guided by meaningful response metrics: acceleration, yaw, roll, settling behavior, steering response, and the other signals that distinguish setups, vehicles, and architectures.

To make those metrics useful, the model behind them has to be inspectable. BobLib provides an open-source Modelica multibody vehicle model whose structure closely follows the real machine. BobSim uses that model as the source of truth for repeatable simulation, signal extraction, plotting, reporting, and design exploration.

The result is a transparent workflow for generating simulation ground truth: characterize the vehicle, compare designs, and correlate reduced-order models against a shared physical reference.

---

## What BobDyn enables

| Capability | Description |
|:--|:--|
| **Standard tests** | Run repeatable vehicle dynamics studies such as steady-state cornering, transient steering response, and kinematics and compliance workflows. |
| **Automated reporting** | Convert simulation outputs into structured metrics, plots, CSV files, and engineering reports without hand-built post-processing. |
| **Model correlation** | Use full-system simulation results as reference data for validating reduced-order models, design tools, and simplifying assumptions. |
| **Design exploration** | Sweep parameters, compare configurations, and study how physical changes propagate through vehicle-level behavior. |

---

## See it in motion

<div class="desktop-visuals">

<table style="table-layout: fixed; width: 100%;">
  <colgroup>
    <col style="width: 50%;">
    <col style="width: 50%;">
  </colgroup>
  <thead>
    <tr>
      <th>ISO4138 — Steady-State Cornering</th>
      <th>ISO7401 — Transient Handling</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <video autoplay loop muted playsinline width="100%">
          <source src="/iso4138.mp4" type="video/mp4">
        </video>
      </td>
      <td>
        <video autoplay loop muted playsinline width="100%">
          <source src="/iso7401.mp4" type="video/mp4">
        </video>
      </td>
    </tr>
    <tr>
      <td>Steady-state cornering at constant velocity with prescribed curvature using closed-loop control.</td>
      <td>Transient steering inputs used to evaluate vehicle response, stability, and handling behavior.</td>
    </tr>
    <tr>
      <td><strong>ISO4138 Report</strong></td>
      <td><strong>ISO7401 Report</strong></td>
    </tr>
    <tr>
      <td>
        <iframe src="/iso4138_report.pdf#toolbar=0&navpanes=0&scrollbar=0" width="100%" height="520px" style="border: 0;"></iframe>
      </td>
      <td>
        <iframe src="/iso7401_report.pdf#toolbar=0&navpanes=0&scrollbar=0" width="100%" height="520px" style="border: 0;"></iframe>
      </td>
    </tr>
  </tbody>
</table>

</div>

<div class="mobile-visuals-message">

Live simulation previews and embedded reports are intended for larger screens.

Please view this page on desktop or open the documentation from a full-size browser window.

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

All models, solvers, workflows, and reports are built from plain-text, version-controlled sources.
