---
layout: doc
title: Vehicle Dynamics
---

# Vehicle Dynamics

This page explains the physical model behind BobDyn. A vehicle is a coupled,
nonlinear dynamic system: states, constraints, force laws, compliance,
actuation, and feedback act together. Bicycle models, roll centers, and linear
tire stiffness are reduced views of that system. They stay useful when you
know which assumptions they hide.

A metric name does not create a vehicle's response. Forces, moments,
inertias, constraints, and time do. BobDyn keeps raw signals next to the
metrics derived from them, so the physical connection stays visible.

The page assumes calculus, ODEs, and basic controls language. You do not need
to derive the equations to use the ideas. For what an FSAE team can claim from
simulation, tests, and telemetry, see [FSAE Bridge](/reference/fsae-bridge).

## Models and reductions

A high-fidelity multibody vehicle is a differential-algebraic equation (DAE),
not a state-space model. Its algebraic part holds what an explicit ODE hides:
constraints, reaction forces, contact conditions, tire force laws, and
actuator relations. Motion and force are solved together, subject to the
constraints.

A state-space model is a reduced form. It comes from projecting the
constrained system onto independent coordinates, trimming it around an
operating point, or linearizing it. Bicycle models, understeer gradients,
yaw-rate gains, frequency response functions, and control-oriented handling
metrics all live at this level. They are valid reduced views of the DAE when
you remember what the reduction removed.

::: details The DAE and state-space forms

The general form:

$$
F(\dot{x}, x, z, u, p, t) = 0
$$

$$
y = g(x, z, u, p, t)
$$

$x$ holds dynamic states, $z$ holds algebraic variables, $u$ holds driver or
actuator inputs, $p$ holds design parameters, and $y$ is measured behavior.

A constrained multibody system is normally written in second-order form:

$$
M(q, p)\ddot{q} + \Phi_q(q, p, t)^T \lambda =
Q(q, \dot{q}, u, p, t)
$$

$$
\Phi(q, p, t) = 0
$$

$q$ are generalized coordinates, $M$ is the mass matrix, $\Phi$ are kinematic
constraints, $\Phi_q$ is the constraint Jacobian, $\lambda$ are constraint
reaction multipliers, and $Q$ collects applied, inertial, tire, aero, spring,
damper, actuator, and contact forces.

The reduced state-space form:

$$
\dot{x}_r = f_r(x_r, u, p, t)
$$

$$
y = g_r(x_r, u, p, t)
$$

Around a trim point, the local linear model is:

$$
\delta \dot{x}_r = A\delta x_r + B\delta u
$$

$$
\delta y = C\delta x_r + D\delta u
$$

:::

## Geometry and response

Suspension geometry matters because it changes tire states, contact patch
loads, force paths, motion ratios, and compliance. A diagram label matters
only as far as it predicts those effects.

The design target is vehicle response:

- steady-state balance
- transient yaw response
- lateral acceleration buildup
- driver confidence
- contact patch load control
- tire force availability
- robustness to speed, ride height, load, and uncertainty

So ask "how does this system transmit forces and moments, and what response
does that produce?", not "what is the roll center height?". Geometry shapes
the dynamic system, but it is not all of it. Tie every geometry metric back to
the loads, motions, and response it is meant to predict.

## Roll centers

Roll centers are visualizations, not physical parts or force application
points.

The classic construction uses pinned supports and two four-bar linkages. It is
a planar approximation. It is good for fast reasoning about roll gradient,
spring and damper deflection, and rough geometric load transfer.

Instant centers are more fundamental within that approximation. They describe
a linkage's instantaneous motion. For one corner, you can approximate load
transmission from unsprung to sprung mass as a virtual link from the contact
patch toward an instant center. In a full spatial view, the corner has an
instantaneous screw axis: it rotates about and translates along a virtual
axis. That model is usually more useful for design than roll center height
alone.

The strongest quantification is force-based. Apply a force, then measure the
support reaction, the jacking response, and the change in contact patch load.
That is the response the vehicle sees. The roll center is a model coordinate
that tries to summarize it.

## Jacking and anti-geometry

Anti-dive, anti-squat, and anti-roll describe how geometry changes load
transmission between unsprung and sprung mass. The question is: when a force
enters the tire contact patch, how much of it creates a vertical reaction on
the frame?

Draw the front-view and side-view instant centers and connect them. That line
is the virtual axis for the corner. The corner has both an instantaneous
motion structure and a force transmission structure. It does not "push
through a roll center".

Anti-geometry is geometric resistance to sprung-mass attitude change. A useful
reference is the jacking force that would fully resist the attitude moment.
For a longitudinal case:

$$
F_{\text{jack, 100\%}} = F_x \frac{h_{\text{cg}}}{L}
$$

For a lateral case:

$$
F_{\text{jack, 100\%}} = F_y \frac{h_{\text{cg}}}{T}
$$

$h_{\text{cg}}$ is CG height, $L$ is wheelbase, and $T$ is track width. 100%
anti-dive means the suspension load path matches the jacking response needed
to resist the attitude moment. It is not a special point in space. The exact
value still depends on force distribution, sign convention, suspension force
lines, and the case under analysis. An instant center that points "the wrong
way" compared to a textbook diagram does not break the physics. The diagram
was a special case.

FourPostEval reports anti percentages on this scale. See
[Suspension, kinematics, and compliance](/reference/metrics#suspension-kinematics-and-compliance).

## Load transfer

Load transfer starts from force and moment balance for the whole vehicle:

$$
\sum F = m a_G
$$

$$
\sum M_G = I_G \alpha + \omega \times I_G \omega
$$

Springs, bars, dampers, geometry, and chassis stiffness change how the
required loads are distributed and how fast they appear. They do not remove
the balance requirement.

In lateral steady-state analysis, lateral load transfer distribution is:

$$
LLTD = \frac{\Delta F_{z,\text{front}}}
{\Delta F_{z,\text{front}} + \Delta F_{z,\text{rear}}}
$$

Mass, CG height, track width, and lateral acceleration set most of the total
lateral load transfer. Springs and bars mainly shift its front/rear
distribution, not the total.

For the fuller picture, model the chassis as three torsional springs in
series: front roll stiffness, chassis torsional stiffness, and rear roll
stiffness. If the chassis twists, front and rear no longer see the same roll
input. The nominal rigid-frame LLTD then becomes harder to achieve and more
dynamic. In a very stiff chassis, front/rear roll stiffness sets the elastic
distribution. As torsional stiffness drops, the axles decouple and the car
drifts from the intended rigid-frame behavior.

One check is whether achievable LLTD stays within a tolerance band of the
nominal target. A 1% band is a common first cutoff. The more reliable check is
dynamic: change torsional rigidity, run the response, and compare the
steady-state and transient metrics you care about.

## Damping

Springs and bars shape where load transfer settles. Dampers shape how fast it
gets there. Dampers set how quickly tire loads build, how quickly yaw moment
appears, how much contact patch load overshoot occurs, and how the car feels
during turn-in, release, braking, and combined maneuvers.

In simple form:

$$
F_d = c v_d
$$

$F_d$ is damper force, $c$ is the damping coefficient, and $v_d$ is damper
velocity. Real dampers are not linear, but the core behavior holds: force
reacts to velocity, not displacement.

So damping is a transient load-transfer tool as well as a ride tool. More
front damping can make front tire loads build sooner and shift the early yaw
moment. More rear damping can settle the rear faster, or resist motion in
ways that change phase and driver confidence.

Excessive high-speed compression force hurts sprung-mass NVH and adds contact
patch load variation. That variation costs grip because tires are
load-sensitive. Added normal load does not buy proportional force capacity, so
oscillating normal load usually wastes grip.

## Tires

A tire is a nonlinear force law, not a scalar friction coefficient. Its force
depends on normal load, slip angle, slip ratio, camber, temperature, pressure,
history, and wear. It also builds force with a lag and moves its effective
point of force application. For the full explanation, see
[Tire Behavior](/reference/tires).

## Aero

Aero is platform-sensitive force generation. Speed-squared scaling is the easy
part:

$$
q = \frac{1}{2} \rho V^2
$$

$$
F_{\text{aero}} = q S C(\text{platform})
$$

The hard part is $C(\text{platform})$. For a race car, platform can include
corner ride heights, pitch, roll, yaw, body slip, roadwheel angle, wheel wake,
ground proximity, and upstream boundary conditions. Downstream flow control
often decides whether a package works. Geometric inaccuracy, surface quality,
mounting error, and boundary-condition mismatch are all real sources of
uncertainty.

A common approach is to compute steady-state CFD forces across a
parameterized attitude space, then interpolate an aero map:

$$
F_{\text{aero}} =
F(V, h_{\text{FL}}, h_{\text{FR}}, h_{\text{RL}}, h_{\text{RR}},
\beta, \delta, ...)
$$

This works with enough compute and a meaningful parameterization. The map is
only as good as its coverage, input fidelity, and validation.

Platform control matters because aero balance moves with ride height and
pitch. With speed, the car can gain front-biased or rear-biased downforce,
drag, pitch moment, or roll and yaw moment. All of these change tire loads
and dynamic response. Transient aero is harder: a platform change does not
always produce an instant force response. A fuller model needs
force-generation time constants or dynamics from transient CFD. Aero is a
force law coupled to the suspension platform, not a single coefficient.

## Torsional rigidity

Treat chassis torsional rigidity as coupled compliance, not a target number.
The question is whether chassis compliance changes the response you want to
control.

A rigid-frame model assumes front and rear suspension share one body motion.
A compliant chassis weakens that. The axles roll more independently, and the
actual load transfer distribution drifts from the rigid-frame value. The
transient response also changes, because the chassis adds a compliance path
and stores energy.

Judge torsional rigidity by its effects:

- LLTD error from nominal
- available LLTD adjustment range
- roll gradient
- yaw response
- lateral acceleration response
- contact patch load variation
- frequency response
- driver confidence

Production vehicles sometimes use compliance on purpose, in bushings,
steering, subframes, tires, and structure. It can filter noise, improve
robustness, shape feel, or protect components. In most FSAE cars, the first
goal is to minimize uncontrolled compliance, so the car does what the engineer
expects. Compliance is not bad in itself. Unmodeled compliance is.

## Suspension

The suspension serves the tire. It is a passive mechanical system that keeps
the tires in useful operating states across the car's range of motion and
loading.

Suspension design changes these properties, and each one changes force
generation, moment generation, or time response:

| Property | Why it matters |
| :-- | :-- |
| Camber | Tires are camber-sensitive. |
| Toe | Creates slip angle and yaw moment. |
| Caster, KPI, mechanical trail, scrub radius | Contact-patch forces create moments about the steering and suspension axes. |
| Motion ratio, spring and damper velocity | A component-level spring or damper rate is not the wheel-level rate. |

Jacking response, anti behavior, roll stiffness distribution, and contact
patch load variation also change force generation, moment generation, or time
response.

Kinematics and compliance testing is system identification. It lets an
engineer compare the design to the physical car. Analytical calculations can
get close. Physical compliance changes the effective behavior: wheel bearings,
joints, tires, and structural interfaces with unloaded, seated, and snubbed
rates. Ask the downstream question: what did this do to the tire, and what did
the vehicle do in response?

## Transient response

Driver confidence is a dynamic systems problem. A driver does not feel a roll
center. They feel the time history of yaw rate, lateral acceleration, roll,
steering torque, sideslip, and tire capacity. Frequency response, phase, lag,
damping, and bandwidth describe how the car communicates with the driver.

For yaw response:

$$
G_r(j\omega) =
\frac{R(j\omega)}{\Delta_{\text{HWA}}(j\omega)}
$$

For lateral acceleration response:

$$
G_{a_y}(j\omega) =
\frac{A_y(j\omega)}{\Delta_{\text{HWA}}(j\omega)}
$$

Magnitude says how much response the car produces. Phase says when it
arrives.

For many driver-confidence targets, useful yaw-rate response should begin
before full lateral acceleration builds. The car must rotate toward a stable
yaw state before the full lateral demand arrives. If yaw develops too slowly
and lateral acceleration arrives suddenly, two things go wrong. The driver
gets a poor on-center feel. The tires take a sharp contact patch load event,
which costs grip in a nonlinear tire.

Open-loop tests expose the plant directly: ramp steer, step steer, and
frequency response. They show quasi-steady behavior, transient buildup,
overshoot, delay, and phase, with no driver feedback loop to hide them.
Closed-loop driver behavior is the final test. Open-loop testing shows what
the vehicle is before a driver has to control it.

## Understeer gradient

Understeer gradient is a local slope. In the linear region (often about 0.1 g
to 0.4 g in practical evaluations):

$$
K =
\left.
\frac{\partial \delta_{\text{excess}}}
{\partial a_y}
\right|_{\text{linear}}
$$

$\delta_{\text{excess}}$ is the steering input above the geometric curvature
requirement. The gradient shows how required steering changes with lateral
acceleration in a local region. One slope cannot describe the whole vehicle.
A car can have a reasonable linear understeer gradient and still be poor in
transient response, limit behavior, contact patch load control, or driver
confidence. Metrics are measurements, not complete explanations.

BobSim reports linear and limit understeer gradients from steady-state
sweeps. See [Steady-state handling](/reference/metrics#steady-state-handling).

## Why simulation matters

The physical system is too coupled to judge from isolated metrics. A change to
spring rate, damper curve, tire pressure, aero platform, geometry, or chassis
stiffness rarely affects one behavior. It propagates through loads, states,
constraints, and force laws.

Simulation makes those connections repeatable. The same vehicle definition
runs through the same maneuvers, with the same signal definitions, fitting
methods, and output metrics. That does not make the model correct. It makes
the assumptions inspectable and the results comparable. This is why BobDyn
reports keep both the trace and the summary. A steady-state sweep may report
understeer gradient, but the steering, curvature, roll, sideslip, and
acceleration traces still matter.

Standard tests reduce the vehicle to measurable outputs: ramp steer, step
steer, frequency response, K&C-style sweeps, and envelope studies. They give a
common language for correlation, debugging, and design exploration. A K&C
sweep identifies geometry and compliance. A maneuver simulation shows the
response those properties produce. Use them together.

## The design questions

Vehicle dynamics becomes clear when you force every named concept back into
the dynamic system:

- What are the states?
- What are the inputs?
- What are the force laws?
- What are the constraints?
- What stores energy?
- What dissipates energy?
- What is measured?
- What response is desired?

Roll centers, LLTD, cornering stiffness, aero balance, damping ratio, natural
frequency, understeer gradient, and bandwidth compress behavior into
engineering language. The vehicle responds to the physical system underneath,
not to the language. The work of vehicle dynamics is to make the physics
produce the behavior you want.
