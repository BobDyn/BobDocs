---
layout: doc
title: Plan a Single-Season Validation
---

# Plan a Single-Season Validation

Use these steps to apply the [FSAE Bridge](/reference/fsae-bridge) evidence
chain in one season. The goal is faster learning with fewer unjustified
assumptions, not perfect prediction.

## Steps

1. Build a QSS envelope to understand capability and bottlenecks.
2. Use BobDyn MBD to evaluate physical response inside that envelope.
3. Run standardized steady-state and transient extraction maneuvers.
4. Instrument competition-like test sections with complete telemetry.
5. Instrument the real competition with the same telemetry package.
6. Compare response-space fingerprints by section.
7. Use overlap to make bounded local claims.
8. Treat uncovered regions as uncertainty, not as evidence.

## Minimum version

A single-year team does not need a perfect simulation program. The minimum
version is:

1. Keep a simple QSS envelope current.
2. Run the high-fidelity model on the most important design questions.
3. Log steering, speed, acceleration, yaw rate, throttle, and brake in testing.
4. Repeat a small number of controlled steady-state and transient maneuvers.
5. Log the same signals at competition.
6. Compare only the sections and regimes that the data cover.

Everything beyond this improves resolution. It does not change the rule: claim
only what the evidence covers.

## When time is short

People-hours are the real constraint. Work in this order:

1. Define the few response claims that matter most.
2. Make the logging and units reliable.
3. Validate the model against controlled maneuvers.
4. Compare a small number of competition-like sections.
5. Only then expand the metric library or driver-layer analysis.
