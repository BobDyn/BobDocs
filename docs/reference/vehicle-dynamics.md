---
layout: doc
title: Vehicle Dynamics
---

# Vehicle Dynamics

Vehicle dynamics is the study of a coupled, nonlinear dynamic system: states,
constraints, force laws, compliance, actuation, and feedback acting together.
Classical tools like bicycle models, roll centers, and linear tire stiffness
are useful shorthand for that system, not the system itself. They stay useful
as long as you know which assumptions they're hiding.

A metric name does not create a vehicle's response. Forces, moments, inertias,
constraints, and time do. BobDyn keeps raw signals next to the reduced metrics
derived from them so those physical connections stay visible.

You don't need to hand-derive the equations below to use the ideas on this
page. They're here to show the hierarchy: familiar engineering techniques are
reduced models of the real vehicle physics, and knowing the reduction keeps the
assumptions visible.

The full physical vehicle isn't naturally a state-space model. A high-fidelity
multibody vehicle is a differential-algebraic equation (DAE):

$$
F(\dot{x}, x, z, u, p, t) = 0
$$

$$
y = g(x, z, u, p, t)
$$

$x$ holds dynamic states, $z$ holds algebraic variables, $u$ holds driver or
actuator inputs, $p$ holds design parameters, and $y$ is measured behavior. The
algebraic variables are the things an explicit ODE hides: constraints, reaction
forces, contact conditions, tire force laws, actuator relations. A constrained
multibody system is normally written in second-order form:

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
damper, actuator, and contact forces. Motion and force are solved together,
subject to constraints — that's the natural language of high-fidelity vehicle
dynamics.

State-space models are the reduced form: the constrained system simplified,
projected onto independent coordinates, trimmed around an operating point, or
linearized:

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

Bicycle models, understeer gradients, yaw-rate gains, frequency response
functions, and control-oriented handling metrics all live here — legitimate
reduced views of the larger DAE, well-founded as long as you remember what was
reduced to get them.

This page assumes calculus, ODEs, and basic controls language, but the goal
isn't mathematical density — it's a clear physical model. For an FSAE-specific
application, see [FSAE Bridge](/reference/fsae-bridge): that page covers what a
team can responsibly claim about the system using simulation, controlled
tests, and competition telemetry.

## Geometry Is Not The Goal

Suspension geometry matters because it changes tire states, contact patch
loads, force paths, motion ratios, and compliance — a diagram label matters
only insofar as it predicts those effects.

The design target is vehicle response, not geometry that looks good on paper:

- steady-state balance
- transient yaw response
- lateral acceleration buildup
- driver confidence
- contact patch load control
- tire force availability
- robustness to speed, ride height, load, and uncertainty

"What is the roll center height?" is the wrong question. "How does this system
transmit forces and moments, and what response does that produce?" is the
right one. Geometry shapes the dynamic system — it isn't the whole dynamic
system. Good geometry work still ties every metric back to the loads, motions,
and response it's meant to predict.

## Roll Centers

Roll centers are useful visualizations, not physical parts or force
application points.

The classic construction — pinned supports, two four-bar linkages — is a
planar approximation good for fast reasoning about roll gradient, spring and
damper deflection, and rough geometric load transfer. It's still an
approximation.

Instant centers are more fundamental within that approximation: they describe
a linkage's instantaneous motion. For one corner of the car, load transmission
from unsprung to sprung mass can be approximated as a virtual link from the
contact patch toward an instant center. In a full spatial view, the corner
instead has an instantaneous screw axis — it both rotates about and
translates along a virtual axis. That mental model is usually more useful for
design work than roll center height alone.

The strongest quantification is force-based: apply a force, measure the
support reaction, the jacking response, and the change in contact patch load.
That's the response the vehicle actually sees. The roll center is a model
coordinate; the force response is the physics it's trying to summarize.

## Jacking And Anti-Geometry

Anti-dive, anti-squat, and anti-roll describe how geometry changes load
transmission between unsprung and sprung mass. The useful question: when a
force enters the tire contact patch, how much of that path creates a vertical
reaction on the frame?

Draw the front-view and side-view instant centers and connect them — that line
is the virtual axis for the corner. The corner doesn't simply "push through a
roll center"; it has both an instantaneous motion structure and a force
transmission structure.

Anti-geometry is geometric resistance to sprung-mass attitude change. A useful
reference scale is the jacking force that would fully resist the corresponding
attitude moment. For a longitudinal case:

$$
F_{\text{jack, 100\%}} = F_x \frac{h_{\text{cg}}}{L}
$$

For a lateral case:

$$
F_{\text{jack, 100\%}} = F_y \frac{h_{\text{cg}}}{T}
$$

where $h_{\text{cg}}$ is CG height, $L$ is wheelbase, and $T$ is track width.
100% anti-dive doesn't mean the car found a special point in space — it means
the suspension load path matches the jacking response needed to resist the
attitude moment. The exact value still depends on force distribution, sign
convention, suspension force lines, and the case being analyzed. If an instant
center points "the wrong way" relative to a textbook diagram, the physics
hasn't broken — the diagram was only ever a special case.

## Load Transfer

Load transfer starts from force and moment balance for the whole vehicle:

$$
\sum F = m a_G
$$

$$
\sum M_G = I_G \alpha + \omega \times I_G \omega
$$

These aren't optional. Springs, bars, dampers, geometry, and chassis stiffness
change how the required loads are distributed and how fast they appear — they
don't remove the balance requirement itself.

In lateral steady-state analysis, lateral load transfer distribution is:

$$
LLTD = \frac{\Delta F_{z,\text{front}}}
{\Delta F_{z,\text{front}} + \Delta F_{z,\text{rear}}}
$$

Total lateral load transfer is set mostly by mass, CG height, track width, and
lateral acceleration; springs and bars mainly shift the front/rear
distribution of that transfer, not the total.

The fuller picture is compliance: model the chassis as three torsional springs
in series — front roll stiffness, chassis torsional stiffness, rear roll
stiffness. The middle spring matters: if the chassis twists, front and rear no
longer see the same roll input, and the nominal rigid-frame LLTD becomes less
achievable and more dynamic. In a very stiff chassis, front/rear roll
stiffness dominates the elastic distribution; as torsional stiffness drops,
the axles decouple and the real vehicle drifts from the intended rigid-frame
behavior.

A reasonable check is whether achievable LLTD stays within a tolerance band of
the nominal target (a 1% band is a common first cutoff) — but the more
reliable answer is dynamic: change torsional rigidity, run the response, and
look at the steady-state and transient metrics that matter.

## Damping

Springs and bars shape where load transfer wants to settle. Dampers shape how
fast it gets there — one of the most important distinctions in transient
vehicle dynamics. Dampers govern how quickly tire loads build, how quickly yaw
moment appears, how much contact patch load overshoot occurs, and how the car
feels during turn-in, release, braking, and combined maneuvers.

In simple form:

$$
F_d = c v_d
$$

where $F_d$ is damper force, $c$ is the damping coefficient, and $v_d$ is
damper velocity. Real dampers aren't linear, but this captures the core
behavior: force reacts to velocity, not displacement.

So damping isn't just ride tuning — it's a transient load-transfer tool. More
front damping can make front tire loads build sooner and shift the early yaw
moment; more rear damping can stabilize the rear faster, or resist motion in
ways that change phase and driver confidence. High-speed compression damping
needs care too: excessive high-speed force punishes sprung-mass NVH and adds
contact patch load variation. That variation is expensive because tires are
load-sensitive — added normal load doesn't buy proportional force capacity, so
oscillating normal load usually wastes grip.

## Tires

Tires are nonlinear force laws, not scalar friction coefficients — $\mu$ isn't
constant. A tire force model is better understood as a map:

$$
\mu = \mu(F_z, \alpha, \kappa, \gamma, T, p, \text{history}, \text{wear})
$$

where $F_z$ is normal load, $\alpha$ is slip angle, $\kappa$ is slip ratio,
$\gamma$ is camber, $T$ is temperature, and $p$ is pressure.

Slip angle and slip ratio aren't literal rubber-deformation measurements —
they're practical coordinates that correlate with deformation and force
buildup. A simplified slip angle:

$$
\alpha \approx \tan^{-1}\left(\frac{-V_y}{|V_x|}\right)
$$

A simplified slip ratio:

$$
\kappa \approx \frac{R \omega - V_x}{\max(|V_x|, \epsilon)}
$$

In the small-slip region, force buildup is roughly linear:

$$
F_y \approx C_\alpha \alpha
$$

That's spring-like: the tire deforms, and force grows with a deformation-like
input. As slip increases, the rate of buildup drops off, and the tire
eventually plateaus or falls to a lower force level — linear region (mostly
static-friction-like), transition region (mixed static/sliding), saturated
region (sliding-dominated). Real tire behavior adds adhesion, hysteresis,
tread deformation, carcass behavior, pressure, temperature, compound, road
surface, and wear on top of this, but the simple model explains why a tire
feels linear, then nonlinear, then saturated.

Combined slip matters because a tire can't independently spend all of its
longitudinal and lateral capacity: imposing both slip ratio and slip angle
together changes the deformation pattern and the total force available. It's
one deforming structure producing a coupled force and moment response, not two
independent force generators sharing a patch of ground.

## Pneumatic Trail And Scrub

Tires also shift their effective point of force application. Pneumatic trail
and scrub are moment arms created by tire deformation, not extra forces.

Pneumatic trail is usually the fore-aft offset of the lateral force resultant,
and it's a primary source of aligning moment:

$$
M_z \approx -F_y t_p + M_{z,res}
$$

where $t_p$ is pneumatic trail and $M_{z,res}$ is the residual aligning moment
not captured by the offset picture (sign convention depends on the tire
coordinate system). Mechanical trail, pneumatic trail, scrub, caster, KPI, and
compliance together decide how that tire moment becomes steering torque and
upright load.

Pneumatic scrub is the lateral-direction version: the effective force
application point moves sideways as the patch deforms. Under braking, drive,
and combined slip, that shift changes how longitudinal and lateral forces feed
moments back into the wheel, upright, steering system, and suspension.

Many empirical tire models output forces and moments about a common tire
origin instead, where trail and scrub show up as fitted internal quantities —
the applied result is still a force-and-moment system either way. A
force-only tire match can reproduce lateral acceleration while still missing
steering torque, compliance loading, and the feel-fade near saturation: as the
tire nears its limit, pneumatic trail can collapse while lateral force stays
high, which is exactly what the driver and suspension feel.

## Relaxation, Pressure, Temperature, And Wear

Tire force doesn't appear instantly. Relaxation length is a distance-domain
time constant, roughly the distance a tire must roll to build 63.2% of its
steady-state force after a slip input. At vehicle speed $V$, that converts to
an approximate time constant:

$$
\tau \approx \frac{\sigma}{V}
$$

A first-order relaxation model in distance:

$$
\frac{dF_y}{ds} =
\frac{F_{y,ss}(\alpha) - F_y}{\sigma}
$$

where $s$ is distance traveled and $\sigma$ is relaxation length, which also
relates to structural stiffness:

$$
\sigma \sim \frac{C_\alpha}{k_y}
$$

where $C_\alpha$ is cornering stiffness and $k_y$ is lateral shear stiffness.
Higher pressure tends to stretch and stiffen the tire structure, reducing
deformation and often speeding up force buildup — but check against data
rather than assuming.

Temperature can change peak force, stiffness, relaxation behavior, and wear
behavior all at once; the only honest way to know is to look at tire data. For
FSAE teams, TTC data and published Magic Formula fits from experienced fitting
groups (Stackpole Engineering Services is a common one) are the practical
resource. Wear can help or hurt capability depending on the tire, compound,
surface, and operating window — test at multiple life points, and track
lifetime power output as a way to correlate drive-day usage with controlled
force-and-moment testing over time.

## Empirical Tire Models

Magic Formula and Pacejka-style models are empirical force laws, not physics —
and that's fine, because tires are complicated and the point is to reproduce
measured behavior across the operating region you care about.

The discipline is knowing the valid range: normal load, camber, pressure,
temperature, slip angle, slip ratio, surface condition, tire age and wear
state. Outside that range, a beautiful fit becomes a beautiful lie.

## Aero

Aero is platform-sensitive force generation. The easy part is speed-squared
scaling:

$$
q = \frac{1}{2} \rho V^2
$$

$$
F_{\text{aero}} = q S C(\text{platform})
$$

The hard part is knowing $C(\text{platform})$. For a race car, "platform" can
include corner ride heights, pitch, roll, yaw, body slip, roadwheel angle,
wheel wake, ground proximity, and upstream boundary conditions. Downstream
flow control is often the difference in an effective package, so geometric
inaccuracy, surface quality, mounting error, and boundary-condition mismatch
all become real sources of uncertainty.

A common approach: compute steady-state CFD force outputs across a
parameterized attitude space, then interpolate an aero map:

$$
F_{\text{aero}} =
F(V, h_{\text{FL}}, h_{\text{FR}}, h_{\text{RL}}, h_{\text{RR}},
\beta, \delta, ...)
$$

This is powerful with enough compute and a meaningful parameterization, but
the map is only as good as its coverage, input fidelity, and validation.
Platform control matters because aero balance migrates with ride height and
pitch — the car doesn't just gain downforce with speed, it can gain
front-biased or rear-biased downforce, drag, pitch moment, or roll/yaw moment,
all of which change tire loads and dynamic response. Transient aero is harder
still, since a platform change doesn't necessarily produce an instant force
response; a fuller model needs force-generation time constants or transient
CFD-derived dynamics. Aero is a force law coupled to the suspension platform,
not just a coefficient.

## Torsional Rigidity

Treat chassis torsional rigidity as coupled compliance, not a trophy number —
the real question is whether chassis compliance meaningfully changes the
response you're trying to control.

A rigid-frame model assumes front and rear suspension share a common body
motion. A compliant chassis weakens that: the axles roll more independently,
the actual load transfer distribution drifts from the intended rigid-frame
value, and the transient response changes because the chassis adds another
compliance path and energy storage mechanism. Judge torsional rigidity through
its outputs — LLTD error from nominal, available LLTD adjustability, roll
gradient, yaw response, lateral acceleration response, contact patch load
variation, frequency response, driver confidence — not the number itself.

Production vehicles sometimes use compliance deliberately in bushings,
steering, subframes, tires, and structure to filter noise, improve
robustness, shape feel, or protect components. In most FSAE applications the
first goal is minimizing uncontrolled compliance, so the vehicle does what the
engineer thinks it does. Compliance isn't inherently bad — unmodeled
compliance is.

## Suspension

The suspension exists to serve the tire: it's a passive mechanical system
whose job is to keep the tires in useful operating states across the
vehicle's range of motion and loading.

Suspension design changes camber, toe, caster, kingpin inclination, mechanical
trail, scrub radius, motion ratio, spring/damper velocity, jacking response,
anti behavior, roll stiffness distribution, and contact patch load variation.
Each matters because it changes force generation, moment generation, or time
response: camber matters because tires are camber-sensitive, toe creates slip
angle and yaw moment, caster/KPI/trail/scrub matter because contact-patch
forces create moments about steering and suspension axes, and motion ratio
matters because a component-level spring or damper rate isn't the wheel-level
rate.

Kinematics and compliance testing is system identification, not "the answer"
— it lets an engineer compare the theoretical design to its physical
equivalent. Analytical calculations can get close, but physical compliance
(wheel bearings, joints, tires, structural interfaces with unloaded, seated,
and snubbed rates) changes the effective behavior. The cleanest suspension
question is always downstream: what did this do to the tire, and what did the
vehicle do in response?

## Transient Response

Driver confidence is a dynamic systems problem. A driver doesn't feel a roll
center — they feel the time history of yaw rate, lateral acceleration, roll,
steering torque, sideslip, and tire capacity. Frequency response, phase, lag,
damping, and bandwidth are how the vehicle communicates with the driver, not
abstract control theory.

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

Magnitude tells you how much response the vehicle produces; phase tells you
when it arrives. For many driver-confidence targets, useful yaw-rate response
should begin before full lateral acceleration buildup — the car needs to
rotate toward a stable yaw state before the full lateral demand arrives. If
yaw develops too slowly and lateral acceleration arrives suddenly, the driver
gets a poor on-center feel and the tire system takes a sharp contact patch
load event — bad twice: less predictable for the driver, and worse for grip in
a nonlinear tire system.

Open-loop tests (ramp steer, step steer, frequency response) are powerful
because they expose the plant directly: quasi-steady behavior, transient
buildup, overshoot, delay, and phase, without a driver feedback loop hiding
any of it. Closed-loop driver behavior is the final reality, but open-loop
testing is how you learn what the vehicle is before asking a driver to control
it.

## Understeer Gradient

Treat understeer gradient as a local slope, not a personality. In the linear
region (often roughly 0.1 g to 0.4 g for many practical evaluations):

$$
K =
\left.
\frac{\partial \delta_{\text{excess}}}
{\partial a_y}
\right|_{\text{linear}}
$$

where $\delta_{\text{excess}}$ is the steering input above the simple
geometric curvature requirement. It's useful because it shows how required
steering changes with lateral acceleration in a local region — but one slope
can't describe the whole vehicle. A car can have a reasonable linear
understeer gradient and still be poor in transient response, limit behavior,
contact patch load control, or driver confidence. Metrics are measurements,
not complete explanations.

## Why Simulation Matters

The physical picture is too coupled to evaluate from isolated metrics alone. A
change to spring rate, damper curve, tire pressure, aero platform, geometry,
or chassis stiffness rarely affects only one behavior — it propagates through
loads, states, constraints, and force laws.

Simulation makes those connections repeatable: the same vehicle definition
runs through the same maneuvers, with the same signal definitions, fitting
methods, and output metrics. That doesn't make the model automatically
correct, but it makes the assumptions inspectable and the results comparable.
In BobDyn, this is why reports keep both the trace and the summary — a
steady-state sweep may report understeer gradient, but the steering,
curvature, roll, sideslip, and acceleration traces still matter.

Standard tests (ramp steer, step steer, frequency response, K&C-style sweeps,
envelope studies) reduce a complicated vehicle into measurable outputs without
pretending those outputs are the whole vehicle — they're a common language for
correlation, debugging, and design exploration. A K&C sweep identifies
geometry and compliance; a maneuver simulation shows the response those
properties produce. The two are more useful together than either alone.

## The Design Philosophy

Vehicle dynamics gets clear when every named concept is forced back into the
dynamic system:

- What are the states?
- What are the inputs?
- What are the force laws?
- What are the constraints?
- What stores energy?
- What dissipates energy?
- What is measured?
- What response is desired?

Roll centers, LLTD, cornering stiffness, aero balance, damping ratio, natural
frequency, understeer gradient, and bandwidth are useful because they compress
behavior into engineering language — but the vehicle doesn't optimize the
language, it responds to the physical system underneath. The work of vehicle
dynamics is making the physics produce the behavior.
