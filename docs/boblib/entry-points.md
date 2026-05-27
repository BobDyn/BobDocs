---
layout: doc
title: Entry Points
prev:
  text: 'Generation'
  link: '/boblib/generation'
next:
  text: 'Development'
  link: '/boblib/development'
---

# Entry Points

BobDyn/BobLib standard entry points are Modelica models intended for BobDyn/BobSim workflows
and direct OpenModelica experiments.

## `BobLib.Standards.VehicleSim`

`VehicleSim` is the main maneuver simulation wrapper. It instantiates the active
generated vehicle, tire/ground interaction components, steer input, speed
control, and standard response outputs.

Current maneuver mode parameter:

```text
useMode = 0  open-loop ramp steer
useMode = 1  open-loop sinusoidal steer
useMode = 2  step steer
useMode = 3  chirp steer
```

Common output variables include:

- `speed`
- `accX`
- `accY`
- `yawVel`
- `roll`
- `sideslip`
- `handwheelAngle`
- `handwheelTorque`
- `leftSteerAngle`
- `rightSteerAngle`
- `Fz_FL`, `Fz_FR`, `Fz_RL`, `Fz_RR`

BobDyn/BobSim uses this entry point for StandardSim workflows such as SteadyStateEval
and TransientEval.

## `BobLib.Standards.FourPostSim`

`FourPostSim` isolates the suspension/chassis response for heave, roll, and
contact-patch load pulse sweeps. It uses `FourPostEvalRecord` outputs and
zero-stiffness stabar overrides where appropriate so K&C-style response data can
be extracted consistently.

Common output records:

- `frKnC`
- `rrKnC`

BobDyn/BobSim uses this entry point for FourPostEval and downstream review workflows
that depend on K&C-style metrics.
