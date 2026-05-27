---
layout: doc
title: Vehicle Dynamics
---

# Vehicle Dynamics

Vehicle dynamics is more than a catalog of geometry metrics. It is the study of a
coupled, nonlinear dynamic system whose useful behavior is governed by states,
constraints, force laws, compliance, actuation, and feedback.

That framing matters. Traditional vehicle dynamics language is useful, but it
often starts from convenient reductions: bicycle models, roll centers, steady
load transfer, linear tire stiffness, and scalar balance metrics. Those tools
are not wrong. They are shorthand. They become dangerous when the shorthand is
treated as the physical cause.

This page does not reject classical vehicle dynamics. It keeps each classical
tool attached to the physical system it approximates. A roll center,
load-transfer estimate, or linear tire model can be enormously useful when the
designer understands what assumptions are being made and what downstream
dynamics those assumptions hide. The approximation becomes more meaningful, not
less, when it is placed in physical context.

A metric name does not create the response. The vehicle responds to forces,
moments, inertias, constraints, and time.

BobDyn exists to make those physical connections explicit, testable, and
reusable. That is why a standard report should keep raw signals close to the
reduced metrics derived from them.

You do not need to manipulate the mathematical formulations below to use the
ideas on this page. They are here to show the hierarchy: widely used
engineering techniques are reduced models of real vehicle physics. The point
is not to make every designer derive DAEs by hand. The point is to keep the
assumptions visible.

The full physical vehicle is not naturally an explicit state-space model. A
high-fidelity multibody vehicle model is more naturally written as a
differential algebraic equation:

$$
F(\dot{x}, x, z, u, p, t) = 0
$$

$$
y = g(x, z, u, p, t)
$$

Here $x$ contains dynamic states, $z$ contains algebraic variables, $u$
contains driver or actuator inputs, $p$ contains design parameters, and $y$
contains measured behavior. The algebraic variables include the things an
explicit ODE tries to hide: constraints, reaction forces, contact conditions,
tire force laws, and actuator relations. A constrained multibody system is
commonly written in second-order form as:

$$
M(q, p)\ddot{q} + \Phi_q(q, p, t)^T \lambda =
Q(q, \dot{q}, u, p, t)
$$

$$
\Phi(q, p, t) = 0
$$

where $q$ are generalized coordinates, $M$ is the mass matrix, $\Phi$ are
kinematic constraints, $\Phi_q$ is the constraint Jacobian, $\lambda$ are
constraint reaction multipliers, and $Q$ contains applied, inertial, tire,
aero, spring, damper, actuator, and contact forces. This is the natural
language of high-fidelity vehicle dynamics: motion and force are solved
together, subject to constraints.

State-space models are still essential. They are the reduced form obtained when
the full constrained system is simplified, projected onto independent
coordinates, trimmed around an operating condition, or linearized for analysis
and control:

$$
\dot{x}_r = f_r(x_r, u, p, t)
$$

$$
y = g_r(x_r, u, p, t)
$$

Around a trim point, the local linear model becomes:

$$
\delta \dot{x}_r = A\delta x_r + B\delta u
$$

$$
\delta y = C\delta x_r + D\delta u
$$

This is where bicycle models, understeer gradients, yaw-rate gains, frequency
response functions, and control-oriented handling metrics live. They are
legitimate reduced views of the larger DAE. The approximation becomes
well-founded when the designer remembers what physical system was reduced to
get it.

This page is written at an advanced undergraduate to early graduate level. It
assumes comfort with calculus, ordinary differential equations, and basic
controls language, but the goal is not mathematical density. The goal is a
clear physical model.

## Geometry Is Not The Goal

Suspension geometry is important because it changes tire states, contact patch
loads, force paths, motion ratios, and compliance. A diagram label matters only
insofar as it predicts those physical effects.

The design target is useful vehicle response, not geometry that only looks good
on paper:

- steady-state balance
- transient yaw response
- lateral acceleration buildup
- driver confidence
- contact patch load control
- tire force availability
- robustness to speed, ride height, load, and uncertainty

The correct question is not "what is the roll center height?" The correct
question is "how does this system transmit forces and moments, and what vehicle
response does that produce?"

Geometry shapes the dynamic system; it should not be mistaken for the whole
dynamic system. Good geometry work is still good engineering; the difference is
that every geometric metric should be tied back to the loads, motions, and
response it is being used to predict.

## Roll Centers

Roll centers are visualizations. They are useful visualizations, but they are
not physical parts, force application points, or the complete model.

The classic roll center construction comes from a planar approximation: pinned
supports and two four-bar linkages. That approximation can be useful for fast
reasoning. It can help estimate roll gradient, spring and damper deflection,
and rough geometric load transfer behavior. But it is still an approximation.

Instant centers are more fundamental within that approximation. They describe
the instantaneous motion of a linkage. Meaningful work can be done there. For a
corner of the car, the load transmission from unsprung mass to sprung mass can
be approximated as a virtual link from the contact patch toward an instant
center. In a more complete spatial view, the corner can be described with an
instantaneous screw axis: it both rotates about and translates along a virtual
axis.

For design work, that mental model is usually more useful than treating roll
center height as the metric of choice.

The strongest quantification is force based. Apply a force. Measure the support
reaction. Measure the jacking response. Measure the change in contact patch
load. That is the response the vehicle sees.

The roll center is a model coordinate. The force response is the physics that
coordinate is trying to summarize.

## Jacking And Anti-Geometry

Jacking deserves its own explanation because it is often hidden inside geometry
language.

Anti-dive, anti-squat, and anti-roll are not mystical properties. They describe
how geometry changes load transmission between the unsprung and sprung masses.
The useful question is: when a force enters the tire contact patch, how much of
that force path creates a vertical reaction on the frame?

A clean mental model is to draw the front-view instant center and side-view
instant center, then connect those instant centers. That connection represents
the virtual axis associated with the corner. The corner does not simply "push
through a roll center." It has an instantaneous motion structure and a force
transmission structure.

Anti-geometry is geometric resistance to sprung-mass attitude change. A useful
reference scaling is the jacking force that would resist the corresponding
sprung-mass attitude moment for the load direction being considered.

For a longitudinal case, the reference scale is:

$$
F_{\text{jack, 100\%}} = F_x \frac{h_{cg}}{L}
$$

For a lateral case, the reference scale is:

$$
F_{\text{jack, 100\%}} = F_y \frac{h_{cg}}{T}
$$

where $h_{cg}$ is CG height, $L$ is wheelbase, and $T$ is track width. The
specific direction and sign depend on the case being analyzed.

This scaling clears away a lot of confusion. A 100% anti-dive statement does
not mean the car has found a special point in space. It means the suspension
load path is being compared against the jacking response needed to resist the
corresponding attitude moment. The exact value still depends on force
distribution, sign convention, suspension force lines, and the case being
analyzed.

If an instant center points "the wrong way" relative to a textbook diagram, the
physics does not break. The diagram was only a special case.

## Load Transfer

Load transfer begins with force and moment balance.

For the whole vehicle:

$$
\sum F = m a_G
$$

$$
\sum M_G = I_G \alpha + \omega \times I_G \omega
$$

Those equations are not optional. The total external force and moment balance
must be satisfied. Springs, bars, dampers, geometry, and chassis stiffness do
not remove that requirement. They change how the required loads are distributed
and how quickly those loads appear.

In lateral steady-state analysis, a useful distribution metric is lateral load
transfer distribution:

$$
LLTD = \frac{\Delta F_{z,\text{front}}}
{\Delta F_{z,\text{front}} + \Delta F_{z,\text{rear}}}
$$

This is a useful metric, but it is not the full behavior of the car. Total
lateral load transfer is largely set by mass, CG height, track width, and
lateral acceleration. Springs and bars primarily change the front/rear
distribution of that load transfer. They do not make the required whole-car
moment balance disappear.

The more complete picture is compliance. A useful reduced model is three
torsional springs in series:

- front suspension roll stiffness
- chassis torsional stiffness
- rear suspension roll stiffness

The middle spring matters. If the chassis twists, the front and rear suspensions
no longer see the same roll input. The outer springs deflect unequally. The
nominal rigid-frame LLTD becomes less obtainable, less precise, and more
dynamic.

In a very stiff chassis, front and rear roll stiffness choices dominate the
elastic load transfer distribution. As chassis torsional stiffness decreases,
the coupling between the axles weakens. The exact limit depends on the reduced
model, but the design consequence is clear: torsional compliance pulls the real
vehicle away from the intended rigid-frame behavior.

One reasonable engineering check is whether the achievable LLTD stays within a
tolerance band of the nominal target and its intended adjustability. A 1%
variation band can be a useful first cutoff. The better answer is dynamic:
change torsional rigidity, run the response, and evaluate the steady-state and
transient metrics that actually matter.

## Damping

Springs and bars shape where load transfer wants to settle. Dampers shape how
load transfer gets there.

This is one of the most important principles in transient vehicle dynamics.
Dampers control rates. They influence how quickly tire loads build, how quickly
yaw moment appears, how much contact patch load overshoot occurs, and how the
vehicle feels during turn-in, release, braking, and combined maneuvers.

In simple form:

$$
F_d = c v_d
$$

where $F_d$ is damper force, $c$ is damping coefficient, and $v_d$ is damper
velocity. Real dampers are not just linear coefficients, but this equation
captures the core role: dampers react to velocity.

That means damping is not just "ride tuning." It is a transient load-transfer
tool.

More front damping can make front tire loads build sooner and change the early
yaw moment. More rear damping can stabilize the rear more quickly or make it
resist motion in ways that change phase and confidence. High-speed compression
damping must also be handled carefully because excessive high-speed force can
punish sprung-mass NVH and create unnecessary contact patch load variation.

Contact patch load variation is expensive because tires are nonlinear. Adding
normal load does not give proportional force capacity. If the tire is
load-sensitive, oscillating normal load usually wastes total grip.

## Tires

Tires are nonlinear force laws. They are not scalar friction coefficients.

The coefficient of friction is not constant.

A tire force model is better understood as a map:

$$
\mu = \mu(F_z, \alpha, \kappa, \gamma, T, p, \text{history}, \text{wear})
$$

where $F_z$ is normal load, $\alpha$ is slip angle, $\kappa$ is slip ratio,
$\gamma$ is camber, $T$ is temperature, and $p$ is pressure.

Engineers commonly define two deformation-like quantities:

- slip angle
- slip ratio

These are not literal rubber deformation measurements. They are practical
coordinates that correlate with tire deformation and force buildup.

A simplified slip angle is:

$$
\alpha \approx \tan^{-1}\left(\frac{-V_y}{|V_x|}\right)
$$

A simplified slip ratio is:

$$
\kappa \approx \frac{R \omega - V_x}{\max(|V_x|, \epsilon)}
$$

In the small-slip region, force buildup often looks roughly linear:

$$
F_y \approx C_\alpha \alpha
$$

That resembles a spring. The tire is being deformed, and force grows with a
deformation-like input. As slip increases, the rate of force buildup decreases.
Eventually the tire approaches a limit, plateaus, or falls to a lower force
level.

A useful mental model is:

- linear region: mostly static-friction-like force generation
- transition region: mixed static and sliding behavior
- saturated region: more sliding-dominated behavior

That is still a simplification. Real tire behavior includes adhesion,
hysteresis, tread deformation, carcass behavior, pressure, temperature,
compound, road surface, and wear. But the model is good enough to explain why a
tire can feel linear, then nonlinear, then saturated.

Combined slip matters because a tire cannot independently spend all of its
longitudinal and lateral capacity. Imposing both slip ratio and slip angle
changes the deformation pattern and force availability. The tire is not two
independent force generators sharing the same patch of ground. It is one
deforming structure producing a coupled force and moment response.

## Pneumatic Trail And Scrub

Tires do not only produce forces. They also move the effective point of force
application.

Pneumatic trail and pneumatic scrub describe how the tire's force application
point shifts relative to the tire center. They are not extra forces. They are
moment arms created by tire deformation.

Pneumatic trail is usually the fore-aft offset associated with the lateral
force resultant. It is one of the reasons a tire produces aligning moment. A
rough steering-system picture is:

$$
M_z \approx -F_y t_p + M_{z,res}
$$

where $t_p$ is pneumatic trail and $M_{z,res}$ is the residual aligning moment
not captured by the simple offset picture. The sign convention depends on the
tire coordinate system. Mechanical trail, pneumatic trail, scrub, caster, KPI,
and compliance all decide how that tire moment becomes steering torque and
upright load.

Pneumatic scrub is the same idea in the lateral direction: the effective force
application point can move sideways as the contact patch deforms. Under
braking, drive, and combined slip, that offset changes how longitudinal and
lateral forces feed moments back into the wheel, upright, steering system, and
suspension.

Many empirical tire models instead output forces and moments about a common
tire origin. In that structure, pneumatic trail and scrub appear as internal
fitted quantities or equivalent moment behavior. The final applied result is
still a force and moment system.

A force-only tire match can reproduce lateral acceleration while still missing
steering torque, compliance loading, and the way feel fades near saturation.
That is why the moment channels matter. As the tire approaches the limit,
pneumatic trail can collapse while lateral force remains high, and that changes
what the driver and suspension system experience.

## Relaxation, Pressure, Temperature, And Wear

Tire force does not appear instantly.

Relaxation length is a distance-domain time constant. It is commonly described
as the distance a tire must roll to build 63.2% of its steady-state force after
a slip input. If the vehicle is moving at speed $V$, that distance can be
converted into an approximate time constant:

$$
\tau \approx \frac{\sigma}{V}
$$

A first-order relaxation model can be written as:

$$
\frac{dF_y}{ds} =
\frac{F_{y,ss}(\alpha) - F_y}{\sigma}
$$

where $s$ is distance traveled and $\sigma$ is relaxation length.

Relaxation length can also be interpreted through stiffness. In simplified
terms, it relates the force buildup capability of the tire to the shear
stiffness of the tire structure:

$$
\sigma \sim \frac{C_\alpha}{k_y}
$$

where $C_\alpha$ is cornering stiffness and $k_y$ is lateral shear stiffness.
Increasing pressure tends to stretch and stiffen the tire structure, reducing
deformation and often making force buildup quicker. The exact behavior must be
checked against data.

Temperature can change everything. A tire at the wrong temperature may not
produce the same peak force, stiffness, relaxation behavior, or wear behavior.
The only honest way to know is to look at tire data. For FSAE teams, TTC data
and published Magic Formula fits from experienced fitting groups are extremely
valuable resources. Stackpole Engineering Services fits are another practical
resource for teams working from the FSAE tire data ecosystem.

Wear can improve or hurt tire capability depending on the tire, compound,
surface, and operating window. Tire testing at multiple life points matters. A
useful practical metric is lifetime power output, which can help correlate
drive-day usage to controlled force and moment testing over time.

## Empirical Tire Models

Magic Formula and Pacejka-style models are empirical force laws. They are not
the physics itself.

That is not an insult. Empirical tire models are useful because tires are
complicated. The purpose of the model is to reproduce measured force and moment
behavior across the operating region of interest.

The important discipline is knowing the valid range:

- normal load range
- camber range
- pressure range
- temperature range
- slip angle range
- slip ratio range
- surface condition
- tire age and wear state

Outside that range, a beautiful fit can become a beautiful lie.

## Aero

Aero is platform-sensitive force generation.

The easy part is speed-squared scaling:

$$
q = \frac{1}{2} \rho V^2
$$

$$
F_{\text{aero}} = q S C(\text{platform})
$$

The hard part is knowing $C(\text{platform})$.

For a race car, "platform" can include corner ride heights, pitch, roll, yaw,
body slip, roadwheel angle, wheel wake, ground proximity, and upstream boundary
conditions. Downstream flow control is often the secret sauce of an effective
package, which means geometric inaccuracy, surface quality, mounting error, and
boundary-condition mismatch can all become meaningful sources of uncertainty.

A common practical approach is to compute steady-state CFD force outputs across
a parameterized attitude space, then interpolate an aero map:

$$
F_{\text{aero}} =
F(V, h_{FL}, h_{FR}, h_{RL}, h_{RR}, \beta, \delta, ...)
$$

With enough compute and a meaningful parameterization, this can be powerful. It
also creates a new responsibility: the map is only as good as its coverage,
input fidelity, and validation.

Platform control matters because aero balance can migrate with ride height and
pitch. The vehicle may not simply gain downforce with speed. It may gain
front-biased downforce, rear-biased downforce, drag, pitch moment, or roll/yaw
moment in ways that change the tire loads and the dynamic response.

Transient aero is harder still. A change in platform does not necessarily
produce an instantaneous force response. A more complete model would include
force-generation time constants or transient CFD-derived dynamics. That is a
difficult problem, but it is approachable in steps: define the platform, build
the map, quantify uncertainty, validate where possible, then decide how much
transient structure the model needs.

The implication is direct: aero is not just a coefficient. It is a force law
coupled to the suspension platform.

## Torsional Rigidity

Treat chassis torsional rigidity as coupled compliance, not a trophy number.

The useful question is whether chassis compliance meaningfully changes the
vehicle response we are trying to control.

A rigid-frame model assumes the front and rear suspension systems share a
common body motion. A compliant chassis weakens that assumption. The axles can
roll more independently. The actual load transfer distribution can drift away
from the intended rigid-frame value. The transient response can also change
because the chassis adds another compliance path and another energy storage
mechanism.

This is why torsional rigidity should be judged through outputs:

- LLTD error from nominal
- available LLTD adjustability
- roll gradient
- yaw response
- lateral acceleration response
- contact patch load variation
- frequency response
- driver confidence

The parameter of interest is torsional rigidity. The design reason it matters
is the response of the dynamic system.

Production vehicles may intentionally use compliance in bushings, steering
systems, subframes, tires, and structures. That can be valuable. Compliance can
filter noise, improve robustness, shape feel, and protect components. In many
FSAE applications, the first goal is usually to minimize uncontrolled
compliance so the vehicle does what the engineer thinks it does.

Compliance is not always bad. Unmodeled compliance is bad.

## Suspension

The suspension exists to serve the tire.

That sentence is more useful than most suspension metrics. The suspension is a
passive mechanical system whose job is to keep the tires in useful operating
states throughout the vehicle's range of motion and loading.

Suspension design changes:

- camber
- toe
- caster
- kingpin inclination
- mechanical trail
- scrub radius
- motion ratio
- spring and damper velocity
- jacking response
- anti behavior
- roll stiffness distribution
- contact patch load variation

Each parameter matters because it changes force generation, moment generation,
or time response.

Camber matters because tires are camber-sensitive. Toe matters because it
creates slip angle and yaw moment. Caster, KPI, trail, and scrub matter because
forces at the contact patch create moments about steering and suspension axes.
Motion ratio matters because a spring or damper rate at the component is not
the same as the effective rate at the wheel.

Kinematics and compliance testing is not "the answer." It is system
identification. It lets an engineer compare the theoretical design to the
physical equivalent and see where they agree or disagree. Analytical
calculations can be close, but physical compliance matters. Wheel bearings,
joints, tires, and structural interfaces can have unloaded, seated, and snubbed
rates that change the effective behavior.

The cleanest suspension question is always downstream:

What did this do to the tire, and what did the vehicle do in response?

## Transient Response

Driver confidence is a dynamic systems problem.

A driver does not feel a roll center. A driver feels the time history of yaw
rate, lateral acceleration, roll, steering torque, sideslip, and tire capacity.

Frequency response, phase, lag, damping, and bandwidth are not abstract control
concepts. They are how the vehicle communicates with the driver.

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

The magnitude tells how much response the vehicle produces. The phase tells
when that response arrives.

For many driver-confidence targets, useful yaw-rate response should begin
before full lateral acceleration buildup. The car needs to rotate toward a
stable yaw state before the full lateral acceleration demand arrives. If yaw
develops too slowly and lateral acceleration arrives suddenly, the driver feels
a poor on-center response and the tire system sees a sharp contact patch load
event.

That is bad twice:

- it is less predictable for the driver
- it increases contact patch load variation in a nonlinear tire system

Open-loop tests are powerful because they expose the plant. Ramp steer,
step steer, and frequency response tests reveal quasi-steady behavior,
transient buildup, overshoot, delay, and phase without hiding everything behind
a driver feedback loop.

Closed-loop driver behavior is the final reality, but open-loop testing is how
the engineer learns what the vehicle is before asking a driver to control it.

## Understeer Gradient

Treat understeer gradient as a local slope, not a personality.

In the linear region, often around roughly 0.1 g to 0.4 g for many practical
vehicle evaluations, understeer gradient can be treated as:

$$
K =
\left.
\frac{\partial \delta_{\text{excess}}}
{\partial a_y}
\right|_{\text{linear}}
$$

where $\delta_{\text{excess}}$ is the steering input above the simple geometric
curvature requirement.

The metric is useful because it tells how the required steering changes with
lateral acceleration in a local operating region. But one slope cannot describe
the full vehicle. A car can have a reasonable linear understeer gradient and
still be poor in transient response, limit behavior, contact patch load
control, or driver confidence.

Metrics are measurements. They are not complete explanations by themselves.

## Why Simulation Matters

The physical picture is too coupled to evaluate reliably from isolated metrics
alone. A change to spring rate, damper curve, tire pressure, aero platform,
geometry, or chassis stiffness rarely affects only one behavior. It propagates
through loads, states, constraints, and force laws.

Simulation is useful because it makes those connections repeatable. The same
vehicle definition can be run through the same maneuvers, with the same signal
definitions, fitting methods, and output metrics. That does not make the model
automatically correct. It makes the assumptions inspectable and the results
comparable.

In BobDyn, this is why reports preserve both the trace and the summary. A
steady-state sweep may report understeer gradient, but the steering, curvature,
roll, sideslip, and acceleration traces still matter.

Standard tests matter for the same reason. Ramp steer, step steer, frequency
response, K&C-style sweeps, and envelope studies reduce a complicated vehicle
into measurable outputs without pretending those outputs are the whole vehicle.
They create a common language for correlation, debugging, and design
exploration.

A K&C sweep can identify geometry and compliance. A maneuver simulation shows
the vehicle response produced by those properties. The two are more useful
together than either one is alone.

Reduced metrics still matter. They are how engineers compare variants, find
trends, and communicate behavior. The discipline is to keep each metric tied to
the physical response that created it.

The framework's job is not to replace engineering judgment. It is to make that
judgment repeatable.

## The Design Philosophy

Vehicle dynamics becomes clear when every named concept is forced back into the
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
behavior into engineering language. But the vehicle does not optimize the
language. The actual response is governed by the physical system underneath.

The work of vehicle dynamics is to make the physics produce the behavior.
