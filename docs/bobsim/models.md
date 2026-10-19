---
layout: doc
title: Models and fidelity
---

# Models and fidelity

The model describes the vehicle states. The analysis describes how those
states are evaluated. DOF counts are generalized coordinates, not the number
of values in the saved state vector.

| Model | Dynamic coordinates | Runtime |
| --- | --- | --- |
| DynPy 3 DOF | Longitudinal position, lateral position, yaw | Python |
| DynPy 6 DOF | 3 DOF plus body heave, roll, pitch | Python |
| DynPy 10 DOF | 6 DOF plus four wheel rotations | Python |
| DynPy 14 DOF | 10 DOF plus four unsprung vertical motions | Python |
| BobLib MBD | Body and linkage coordinates subject to mechanical joint constraints | OpenModelica compiled executable |

## Visual representations

| 3 DOF | 14 DOF |
| --- | --- |
| [![Planar vehicle representation in the current replay](/images/examples/composed-3dof.png)](/examples/composed-3dof.mp4) | [![Body and suspension representation in the current replay](/images/examples/composed-14dof.png)](/examples/composed-14dof.mp4) |
| Planar body motion with four tire contacts | Body attitude, wheel rotation, and unsprung motion |

Images open the replay presentations. The examples use different steering inputs.
They illustrate representation, not a fidelity comparison under matched conditions.

## Common inputs

DynPy uses four tire contacts even at 3 DOF. It is not a bicycle model. KinPy
supplies each corner's steering and suspension geometry. Automatic lookups use
rack displacement and corner travel as needed by the selected model.

Independent front and rear MF5.2 tire definitions supply forces and moments.
Vehicle mass, aero maps, suspension properties, drive distribution, brake
balance, torque limits, and power limits come from the vehicle definition.

At 3 DOF, vertical loads and load transfer are algebraic. At 6 DOF, body motion
responds to corner spring, damper, and anti-roll-bar forces. At 10 DOF, wheel
speed and longitudinal slip evolve dynamically. At 14 DOF, the unsprung masses
and vertical tire compliance also evolve.

DynPy remains a reduced model. KinPy geometry does not turn it into a full
multibody suspension or add arbitrary compliant joints.

## Transient and quasi-steady calculations

A transient calculation integrates states over time:

$$
\dot{\mathbf{x}}=\mathbf{f}(\mathbf{x},\mathbf{u},t).
$$

A quasi-steady calculation solves retained balance equations at an operating
point. It does not set every global position derivative to zero. A vehicle
cornering at constant speed still has a nonzero yaw rate.

| Analysis | Meaning of added DOFs |
| --- | --- |
| Maneuver or transient lap | Added states participate in time integration |
| GGV | Retained states enter the local quasi-steady force and moment balance |
| YMD | Retained states are equilibrated subject to the prescribed operating point |
| QSS lap | Fidelity belongs to the linked GGV, with no vehicle-state integration around the lap |

## Model choice

3 DOF provides a planar reference. 6 DOF exposes body attitude effects.
10 DOF adds wheel-speed dynamics. 14 DOF adds unsprung vertical response.
BobLib is the path for detailed mechanical constraints and component behavior.

Runtime depends on geometry, tire data, settings, and convergence. Compilation
is an additional cost for BobLib. A higher DOF count is not a guarantee of a
more accurate prediction without appropriate inputs and correlation.

## Validity

A converged solve establishes numerical consistency with its equations.
Measured vehicle data and model-to-model correlation establish whether those
equations represent the intended vehicle. Tire fit ranges, lookup coverage,
contact loads, power limits, and solver status belong in result review.

Source: [DynPy models](https://github.com/BobDyn/BobSim/blob/main/engines/dynpy/models.py)
and [KinPy adapter](https://github.com/BobDyn/BobSim/tree/main/engines/kinpy).
