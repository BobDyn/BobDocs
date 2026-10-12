---
layout: doc
title: Vehicles And Tires
---

# Vehicles And Tires

Reference notes on vehicle dynamics and tire behavior.

## Vehicle Dynamics

Vehicle dynamics studies how vehicles respond to forces, moments, driver
inputs, road inputs, and operating conditions.

Important signals include longitudinal velocity, lateral velocity, yaw rate,
roll angle, pitch angle, sideslip angle, steering angle, slip ratio, slip
angle, normal load, lateral acceleration, and longitudinal acceleration.

For a steady turn:

$$
a_y=\frac{v^2}{R}
$$

A simple linear lateral tire model is:

$$
F_y=C_\alpha\alpha
$$

This is only valid in the approximately linear tire region.

A planar bicycle model is a reduced vehicle model that combines left and right
tires on each axle. It is commonly used for lateral dynamics and path-following
analysis when roll, pitch, and individual wheel effects are not the focus.

Common linearized states include lateral velocity and yaw rate. The model is
useful for controllability, yaw response, sideslip behavior, and steering
sensitivity, but it depends strongly on tire linearity and small-angle
assumptions.

A common planar lateral balance is:

$$
m(\dot{v}_y+v_xr)=F_{y,\text{f}}+F_{y,\text{r}}
$$

$$
I_z\dot{r}=l_{\text{f}}F_{y,\text{f}}-l_{\text{r}}F_{y,\text{r}}
$$

where $v_y$ is lateral velocity, $v_x$ is longitudinal velocity, $r$ is yaw
rate, and $l_f$, $l_r$ are axle distances from the center of gravity.

Understeer gradient describes how steering demand changes with lateral
acceleration. A positive understeer gradient means the vehicle requires more
steering angle as lateral acceleration increases.

Lateral load transfer moves normal load from inside tires to outside tires.
Because tires are load sensitive, the outside tires do not gain as much force
capacity as the inside tires lose. This is a main reason roll stiffness
distribution affects balance.

Longitudinal load transfer changes normal load during acceleration and
braking:

$$
\Delta F_z \approx \frac{mh}{L}a_x
$$

where $h$ is center-of-gravity height and $L$ is wheelbase.

Aerodynamic forces commonly scale with dynamic pressure:

$$
F_{\text{aero}}=\frac{1}{2}\rho V^2 C A
$$

This makes high-speed behavior sensitive to ride height, pitch, yaw, blockage,
and Reynolds-number regime.

Common handling metrics include lateral acceleration capability, understeer
gradient, sideslip gradient, yaw-rate gain, response time, phase lag, roll
gradient, tire utilization, and yaw moment authority.

Vehicle behavior depends on tires, suspension geometry, compliance, damping,
aero, mass distribution, inertia, powertrain behavior, braking, steering, and
driver input.

Quasi-steady-state analysis describes operating capability when transient
states are assumed settled. Multibody dynamics describes physical response
inside that capability envelope. Neither replaces testing. Both need
correlation to measured response.

Reduced vehicle models must preserve the original system behavior relevant to
the claim. A bicycle model, lap simulator, or envelope calculation can be
valuable, but only if its simplifications are connected back to measured or
higher-fidelity behavior.

## Tires

Tires are nonlinear, load-sensitive, pressure-sensitive, temperature-sensitive
components with transient and combined-slip behavior.

Important quantities include normal load $F_z$, longitudinal slip ratio
$\kappa$, slip angle $\alpha$, inclination angle $\gamma$, pressure,
temperature, longitudinal force $F_x$, lateral force $F_y$, and aligning
moment $M_z$.

Slip angle is the angle between wheel heading and contact-patch velocity
direction. Longitudinal slip ratio compares wheel circumferential speed to
vehicle speed, with exact sign conventions varying by model:

$$
\kappa \sim \frac{R\Omega - V_x}{V_x}
$$

Because conventions differ, tire model documentation should define signs,
reference frames, and units explicitly.

Local stiffness values are derivatives:

$$
C_\alpha=\frac{\partial F_y}{\partial \alpha}
$$

$$
C_\kappa=\frac{\partial F_x}{\partial \kappa}
$$

Relaxation length models the distance required for tire force or slip state to
approach steady-state behavior after an input change.

A common first-order transient form is:

$$
\sigma\frac{d\alpha_e}{ds}+\alpha_e=\alpha
$$

where $\sigma$ is relaxation length, $s$ is traveled distance, $\alpha$ is the
kinematic slip angle, and $\alpha_e$ is an effective slip state used by the
force model. Longitudinal slip can be treated similarly. More detailed tire
models define relaxation coefficients as functions of load, pressure, and
model-specific parameters.

Combined slip occurs when the tire is asked to produce longitudinal and lateral
force at the same time. The available force capacity is shared, so pure
longitudinal and pure lateral behavior do not directly describe braking or
driving while cornering.

Magic Formula-style tire models represent measured force and moment behavior
with parameterized nonlinear equations. Their value depends on fit quality,
test coverage, and whether the intended operating region is represented in the
data.

Tire models should state tested loads, pressures, inclinations, slip regions,
fit quality, extrapolations, and borrowed parameters.

Important tire phenomena include load sensitivity, camber thrust, aligning
torque, pneumatic trail, overturning moment, pressure sensitivity, temperature
sensitivity, combined slip, transient relaxation, and wear or aging effects.

The friction coefficient implied by a tire test is not a universal tire
constant:

$$
\mu=\frac{F}{F_z}
$$

It changes with normal load, pressure, temperature, surface, slip state, speed,
conditioning, and operating history.

Tire fitting should separate measured behavior from borrowed or extrapolated
behavior. When untested parameters are borrowed from a related tire, the file
or accompanying validation data should make the donor relationship and scaling
logic visible.
