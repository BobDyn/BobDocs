---
layout: doc
title: Math And Modeling
---

# Math And Modeling

Reference notes on the math, model structure, balance laws, scaling, and
energy-domain models used across engineering analysis.

## Mathematical Foundations

Engineering analysis relies on algebra, calculus, linear algebra, differential
equations, and numerical approximation.

Common mathematical objects:

| Object | Engineering role |
| :-- | :-- |
| Scalar | single magnitude |
| Vector | magnitude and direction, state, coordinate, or stacked variables |
| Matrix | linear map, coordinate transform, system operator |
| Derivative | local rate of change or sensitivity |
| Integral | accumulation over time, space, area, or probability |
| Differential equation | rule for how a system evolves |
| Jacobian | first-order sensitivity matrix for vector functions |
| Hessian | second-order curvature matrix for scalar functions |
| Norm | magnitude measure for vectors, matrices, errors, or residuals |

Linear systems are often written:

$$
Ax=b
$$

where $A$ maps unknowns $x$ to known quantities $b$.

Eigenvalues and eigenvectors satisfy:

$$
Av=\lambda v
$$

In engineering, eigenvalues commonly describe natural modes, stability,
frequency, decay rate, stiffness direction, or matrix conditioning.

A first-order Taylor approximation is:

$$
f(x+\Delta x) \approx f(x) + \nabla f(x)^T\Delta x
$$

A second-order approximation is:

$$
f(x+\Delta x) \approx
f(x) + \nabla f(x)^T\Delta x +
\frac{1}{2}\Delta x^T\nabla^2 f(x)\Delta x
$$

Taylor approximations connect calculus, linearization, uncertainty
propagation, optimization, and numerical methods.

For a vector function $f(x)$, first-order linearization uses the Jacobian:

$$
f(x+\Delta x)\approx f(x)+J_f(x)\Delta x
$$

This is the mathematical bridge between nonlinear models and local linear
models. It appears in state-space linearization, Newton methods, Kalman-style
estimation, sensitivity studies, and uncertainty propagation.

Conditioning describes how strongly input errors affect output errors. A
linear solve can be mathematically correct but numerically fragile if the
matrix is ill-conditioned. Scaling variables so their magnitudes are similar is
often as important as the solver choice.

## Modeling

An engineering model is a structured representation of a physical,
computational, economic, or organizational system. Models are used to predict
behavior, explain behavior, compare alternatives, size components, estimate
uncertainty, or guide design decisions.

A model usually defines:

- system boundary
- inputs
- outputs
- states
- parameters
- governing equations
- initial conditions
- boundary conditions
- assumptions and validity range

Common model forms include algebraic equations, ordinary differential
equations, partial differential equations, state-space models, transfer
functions, empirical regressions, lookup tables, finite-element models,
multibody models, optimization problems, and discrete-event simulations.

The system boundary is critical. Anything outside the boundary is treated as
an input, ignored, or absorbed into a parameter.

Models can be physical, empirical, data-driven, or hybrid. A physical model
uses conservation laws and constitutive relationships. An empirical model is
fit to observed data. A useful engineering model often combines both.

Reduced-order models are useful only when they preserve the behavior relevant
to the question being asked. Removing states, geometry, or nonlinear effects
is not automatically wrong, but the reduced model must still reflect the
original system over the claimed operating region.

Model fidelity is not a single ladder from bad to good. A low-order model can
be the correct tool for architecture decisions, control intuition, or envelope
studies. A high-fidelity model can still be misleading if its parameters,
inputs, or validation evidence are weak.

## Balance Laws

Many engineering models begin with a balance statement:

$$
\frac{d}{dt}(\text{stored quantity}) =
\text{rate in} - \text{rate out} + \text{rate generated}
$$

Examples include:

- mass balance
- linear momentum balance
- angular momentum balance
- energy balance
- charge balance
- species balance

The storage term usually determines the state. Forces, flows, heat rates,
currents, torques, and reactions appear as terms that change stored quantity.

For a control volume, the generic mass balance is:

$$
\frac{dm}{dt} = \dot{m}_{\text{in}} - \dot{m}_{\text{out}}
$$

For a rigid body, the fundamental linear momentum balance is:

$$
\sum F = \frac{dp}{dt}
$$

where $p$ is linear momentum. For constant mass with inertial-frame velocity,
this reduces to:

$$
\sum F = ma
$$

The angular momentum balance is:

$$
\sum M_O = \frac{dH_O}{dt}
$$

where $H_O$ is angular momentum about point $O$. For rotation about a fixed
principal axis with constant inertia, this reduces to:

$$
\sum M = I\alpha
$$

The main modeling task is identifying what is stored, what crosses the system
boundary, and what is generated or dissipated inside the boundary.

## Dimensional Analysis And Scaling

Dimensional analysis checks whether equations are physically consistent and
identifies nondimensional groups that govern similarity.

Every term in an equation must have compatible dimensions. For example, in:

$$
m\ddot{x}+b\dot{x}+kx=F
$$

each term has units of force.

Nondimensionalization rewrites variables using characteristic scales. If
$x_c$ is a characteristic length and $t_c$ is a characteristic time:

$$
x^*=\frac{x}{x_c}
$$

$$
t^*=\frac{t}{t_c}
$$

This can reveal which effects dominate and which parameters can be grouped
together.

Buckingham Pi analysis states that a physical relationship with $n$ variables
and $k$ independent dimensions can be written using $n-k$ nondimensional
groups.

Scaling is especially important when transferring results between models,
tests, simulations, and real systems.

Common nondimensional groups include:

| Group | Typical role |
| :-- | :-- |
| Reynolds number | inertial versus viscous effects |
| Mach number | flow speed relative to sound speed |
| Froude number | inertial versus gravitational effects |
| Prandtl number | momentum diffusivity versus thermal diffusivity |
| Nusselt number | convection relative to conduction |
| Biot number | internal conduction resistance versus surface convection resistance |

Nondimensional groups are not decoration. They describe which physical
similarity conditions must hold before one test, simulation, or scale model can
support claims about another.

## System Modeling And Energy Domains

System modeling organizes physical systems by energy storage, energy
dissipation, and energy transfer.

Across domains, idealized systems can be described by effort and flow:

| Domain | Effort | Flow |
| :-- | :-- | :-- |
| Translational mechanical | force | velocity |
| Rotational mechanical | torque | angular velocity |
| Electrical | voltage | current |
| Hydraulic | pressure | volumetric flow |
| Thermal | temperature | heat or entropy flow |

Power is the product of effort and flow:

$$
P=ef
$$

State-space form describes system evolution:

$$
\dot{x}=f(x,u,t)
$$

$$
y=g(x,u,t)
$$

For linear time-invariant systems:

$$
\dot{x}=Ax+Bu
$$

$$
y=Cx+Du
$$

The state vector should contain enough information to determine future system
behavior when inputs are known.

Bond graphs, block diagrams, free-body diagrams, circuit diagrams, and
state-space models are different representations of the same underlying task:
track storage, dissipation, transformation, and input-output behavior.

Across energy domains, ideal elements tend to fall into storage, dissipation,
source, and transformation categories:

| Role | Meaning | Examples |
| :-- | :-- | :-- |
| Inertial storage | stores kinetic-like energy | mass, rotational inertia, fluid inertance, inductor |
| Compliant storage | stores potential-like energy | spring, capacitor, hydraulic accumulator, thermal capacitance |
| Dissipation | removes usable energy | damper, resistor, flow restriction, friction |
| Source | imposes effort or flow | voltage source, force input, pump, heat input |
| Transformer | changes effort-flow ratio | lever, gear, transformer, piston area |
| Gyrator | swaps effort-flow relationship | motor, generator, electromechanical transducer |

Causality matters because a model may imply impossible information flow. For
example, commanding both force and displacement of an ideal mass without a
compliance or constraint model usually over-specifies the system.

## Electrical And Hydraulic Systems

Electrical and hydraulic systems often behave like energy-domain analogs of
mechanical systems.

Electrical ideal elements:

| Element | Law |
| :-- | :-- |
| Resistor | $v=Ri$ |
| Capacitor | $i=C\dot{v}$ |
| Inductor | $v=L\dot{i}$ |

Kirchhoff's current law states that current sums to zero at a node. Kirchhoff's
voltage law states that voltage sums to zero around a loop. These are charge
and energy conservation statements in circuit form.

An RC circuit has a characteristic time constant:

$$
\tau=RC
$$

An RL circuit has:

$$
\tau=\frac{L}{R}
$$

Hydraulic analogs:

| Element | Typical relation |
| :-- | :-- |
| Resistance | $\Delta p = RQ$ |
| Compliance | $Q=C\dot{p}$ |
| Inertance | $\Delta p = I\dot{Q}$ |

Hydraulic power is:

$$
P=pQ
$$

Electrical power is:

$$
P=vi
$$

Electrical and hydraulic systems are frequently coupled to mechanical systems
through motors, pumps, pistons, valves, actuators, sensors, and controllers.
Important assumptions include linearity, leakage, compressibility, saturation,
deadband, inductance, capacitance, and actuator bandwidth.

A common ideal orifice relation is:

$$
Q=C_d A\sqrt{\frac{2\Delta p}{\rho}}
$$

This square-root relation is nonlinear, so hydraulic actuator behavior can
change strongly with pressure, valve opening, fluid density, and operating
point.

Hydraulic compliance can come from fluid compressibility, hose expansion,
trapped air, accumulator behavior, or structural flexibility. Ignoring
compliance can make simulated actuators unrealistically stiff and
instantaneous.
