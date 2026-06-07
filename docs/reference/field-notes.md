---
layout: doc
title: Engineering Knowledge Base
---

# Engineering Knowledge Base

This page is a public reference-style compilation of technical knowledge from
coursework, projects, labs, and independent engineering work.

It is not a transcript of private notes, homework submissions, lectures, or
course material. The underlying body of work is much larger than what appears
here, and not every topic, derivation, example, or project has been included.
Instead, this page collects information deemed key to the respective areas:
core definitions, governing relationships, assumptions, and engineering
interpretation.

The result is a tailored overview meant to provide exposure across a broad set
of topics. It is closer to an encyclopedic survey than a single cohesive
textbook chapter: useful for orientation, recall, and cross-domain connection,
but not a complete replacement for full course notes or dedicated references.

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

## Coordinate Frames And Kinematics

Kinematics describes motion without requiring force balance.

Position, velocity, and acceleration are related by:

$$
v=\dot{r}
$$

$$
a=\ddot{r}
$$

Coordinate frames define how vectors are represented. A vector can have the
same physical meaning but different components in different frames.

A rotation matrix maps vector components between frames:

$$
v_A=R_{AB}v_B
$$

where $v_B$ is the vector represented in frame $B$ and $v_A$ is the same vector
represented in frame $A$.

Angular velocity describes the rate of frame rotation. For planar motion:

$$
\omega=\dot{\theta}
$$

When a vector is differentiated in a rotating frame, the derivative must
account for the frame motion:

$$
\left(\frac{d a}{dt}\right)_I =
\left(\frac{d a}{dt}\right)_B + \omega_{B/I}\times a
$$

This transport theorem is the source of centripetal, Coriolis, and gyroscopic
terms. Those terms are not extra physics; they are bookkeeping required by
the chosen frame.

Generalized coordinates $q$ describe system configuration using the variables
that best match the constraints. They may be angles, lengths, modal
coordinates, path coordinates, or any independent coordinates sufficient to
describe configuration.

Kinematics is often the hidden source of modeling errors. Sign conventions,
frame definitions, derivative frames, and small-angle assumptions must be made
explicit.

Rigid-body kinematics also separates translation of a reference point from
rotation about that point. For two points $A$ and $B$ on a rigid body:

$$
v_B=v_A+\omega\times r_{B/A}
$$

For planar vehicle and mechanism models, this relationship is often enough to
derive velocity constraints, slip velocities, instantaneous centers, and
relative motion at joints or contacts.

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

## Mechanics And Dynamics

Mechanics relates force, momentum, motion, energy, and constraints.

Newton's second law is most generally a momentum balance:

$$
\sum F = \frac{dp}{dt}
$$

For a constant-mass body in an inertial frame:

$$
\sum F = ma
$$

Angular dynamics follow the same structure:

$$
\sum M_O = \frac{dH_O}{dt}
$$

For a fixed principal axis with constant inertia:

$$
\sum M = I\alpha
$$

Common ideal elements:

| Element | Translational | Rotational |
| :-- | :-- | :-- |
| Inertia | $F=m\dot{v}$ | $\tau=J\dot{\omega}$ |
| Spring | $F=kx$ | $\tau=k_\theta\theta$ |
| Damper | $F=bv$ | $\tau=b_\theta\omega$ |

For a mass-spring-damper system:

$$
m\ddot{x}+b\dot{x}+kx=F(t)
$$

The undamped natural frequency and damping ratio are:

$$
\omega_n=\sqrt{\frac{k}{m}}
$$

$$
\zeta=\frac{b}{2\sqrt{km}}
$$

Mechanical systems are often characterized by mass, stiffness, damping,
geometry, constraints, friction, and forcing.

Generalized coordinates extend the same idea beyond simple Cartesian
coordinates. If $q$ is a generalized coordinate, generalized momentum is often
defined from the kinetic energy or Lagrangian as:

$$
p_q = \frac{\partial L}{\partial \dot{q}}
$$

This makes momentum balance useful even when the system is constrained,
rotating, coupled, or described by non-Cartesian coordinates.

Energy methods are also common:

$$
T = \frac{1}{2}mv^2
$$

$$
V = \frac{1}{2}kx^2
$$

where $T$ is kinetic energy and $V$ is potential energy. Energy methods are
especially useful when constraint forces do no work or when generalized
coordinates are clearer than Cartesian force balances.

Lagrange's equations provide a systematic way to form equations of motion:

$$
\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right)
-\frac{\partial L}{\partial q_i}=Q_i
$$

where $L=T-V$ and $Q_i$ is generalized nonconservative force. This form is
especially useful for multibody systems because constraints and coordinate
choices can be handled more directly than with separate free-body diagrams for
every part.

Virtual work states that ideal constraint forces do no work for allowable
virtual displacements. This is why generalized coordinates can remove many
reaction forces from the equations without ignoring the constraints they
represent.

## Machine Elements And Failure

Mechanical design connects loads, geometry, material behavior, and failure
criteria.

Normal stress and engineering strain are:

$$
\sigma=\frac{F}{A}
$$

$$
\epsilon=\frac{\Delta L}{L}
$$

Linear elastic behavior is:

$$
\sigma=E\epsilon
$$

For shafts, beams, fasteners, springs, and joints, the key design questions
are load path, stress concentration, deformation, fatigue, manufacturability,
assembly, and inspection.

Common failure-related quantities:

| Quantity | Meaning |
| :-- | :-- |
| Yield strength | stress where plastic deformation begins |
| Ultimate strength | maximum stress before failure in a tensile test |
| Endurance limit | stress amplitude below which fatigue failure may not occur for some materials |
| Factor of safety | ratio between allowable capacity and expected demand |
| Stress concentration | local stress amplification due to geometry |

Von Mises stress is commonly used for ductile materials:

$$
\sigma_{\text{vm}} =
\sqrt{\frac{(\sigma_1-\sigma_2)^2+
(\sigma_2-\sigma_3)^2+
(\sigma_3-\sigma_1)^2}{2}}
$$

A design is not fully described by whether the nominal stress is below yield.
Deflection, fatigue, buckling, wear, temperature, corrosion, tolerance stackup,
and assembly method can control the real design.

Fatigue connects stress amplitude, mean stress, surface condition, size,
notches, residual stress, and load history. An $S$-$N$ curve relates stress
amplitude to cycles to failure:

$$
\sigma_a=f(N)
$$

Mean stress corrections such as Goodman-style relations are used when cyclic
loads are not fully reversed:

$$
\frac{\sigma_a}{S_e}+\frac{\sigma_m}{S_{\text{ut}}}\leq \frac{1}{n}
$$

Buckling can control slender members before material yield. For an ideal
pinned column:

$$
P_{\text{cr}}=\frac{\pi^2EI}{(KL)^2}
$$

Connections need the same level of attention as primary members. Bolts,
bearings, welds, bonded joints, press fits, keys, splines, and pins all create
local load paths, stiffness discontinuities, and inspection requirements.

## Manufacturing And Fabrication

Manufacturing converts geometry and material into a physical artifact.

Common manufacturing concerns:

- material selection
- process selection
- tolerances
- surface finish
- fixturing
- tool access
- assembly sequence
- inspection
- repeatability
- rework
- cost

Manufacturing processes impose constraints. Machining, additive manufacturing,
sheet metal forming, casting, welding, bonding, and composites all create
different limits on geometry, strength, surface quality, dimensional accuracy,
and production rate.

Tolerance stackup matters when multiple parts locate each other:

$$
\Delta_{\text{assembly}} \approx \sum_i \Delta_i
$$

for a worst-case linear stack. Statistical tolerance analysis may be less
conservative when independent variations are justified.

Design for manufacturing and assembly reduces part count, simplifies
interfaces, improves access, and makes inspection easier. A design that is
valid analytically can still fail if it cannot be built, assembled, inspected,
or serviced consistently.

GD&T and datums are the language that connect design intent to inspection.
Tolerances should control the features that actually locate, seal, rotate,
align, or transfer load. Over-tolerancing increases cost; under-tolerancing
creates assembly variation and unreliable performance.

Welding and heat treatment can change material properties near the joint or
processed region. Heat-affected zones, distortion, residual stress, porosity,
lack of fusion, and inspection access should be considered part of the design,
not only manufacturing details.

Additive manufacturing expands geometric freedom but adds concerns around
anisotropy, porosity, surface roughness, support removal, thermal distortion,
post-processing, and material qualification.

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

## Embedded And Mechatronic Systems

Mechatronics combines mechanical systems, electronics, sensors, actuators,
software, and control.

A typical embedded control loop:

1. read sensors
2. convert raw signals to physical units
3. estimate state or error
4. compute a command
5. apply actuator output
6. log or transmit data

Microcontrollers interact with physical systems through digital I/O, analog
inputs, PWM outputs, communication buses, interrupts, timers, and memory.

PWM controls average actuator command by changing duty cycle:

$$
D=\frac{t_{\text{on}}}{T}
$$

where $D$ is duty cycle, $t_{\text{on}}$ is on-time, and $T$ is the period.

For a DC motor, voltage, current, torque, and speed are coupled. A common
ideal structure is:

$$
\tau=K_t i
$$

$$
e_b=K_e\omega
$$

where $\tau$ is torque, $i$ is current, $e_b$ is back-emf, and $\omega$ is
angular speed.

Embedded systems are sensitive to timing, quantization, electrical noise,
grounding, communication latency, actuator saturation, sensor calibration, and
failure modes that do not appear in pure simulation.

Analog-to-digital conversion quantizes a continuous voltage into a finite
number of counts. For an $N$-bit converter over range $V_{\text{ref}}$, the nominal
voltage resolution is:

$$
\Delta V=\frac{V_{\text{ref}}}{2^N}
$$

Real ADC quality also depends on noise, reference stability, input impedance,
sample time, filtering, and effective number of bits.

Common embedded buses include I2C, SPI, UART, CAN, and Ethernet. The choice is
not only about maximum data rate. It also affects wiring, addressing, latency,
fault tolerance, timing determinism, and debug workflow.

Control-loop timing should be treated as a design parameter. If the loop period
varies, the controller may see apparent delay, inconsistent derivative terms,
or unstable discrete-time behavior.

## Signals And Transforms

Signals describe quantities that vary over time, frequency, space, or another
independent variable.

Common signal types:

| Type | Meaning |
| :-- | :-- |
| Step | sudden change from one level to another |
| Ramp | linearly increasing or decreasing signal |
| Impulse | idealized concentrated input |
| Sinusoid | periodic signal with amplitude, frequency, and phase |
| Chirp | sinusoid with changing frequency |

The Laplace transform converts time-domain dynamics into the complex
$s$-domain:

$$
F(s)=\int_0^\infty f(t)e^{-st}\,dt
$$

This makes linear differential equations easier to manipulate as algebraic
relationships.

The Fourier transform represents signal content by frequency. Frequency-domain
analysis is useful for bandwidth, phase lag, filtering, resonance, noise, and
system identification.

For an LTI system, convolution relates input, impulse response, and output:

$$
y(t)=\int_0^t h(\tau)u(t-\tau)\,d\tau
$$

In the Laplace domain, convolution becomes multiplication:

$$
Y(s)=H(s)U(s)
$$

For a sinusoidal input at angular frequency $\omega$, an LTI system response is
described by evaluating the transfer function at:

$$
s=j\omega
$$

Sampling a continuous signal introduces a sample frequency $f_s$. To avoid
aliasing for content up to $f_{\text{max}}$:

$$
f_s>2f_{\text{max}}
$$

Filtering can reduce noise, but it can also attenuate real signal content or
introduce phase delay.

Digital filters operate on sampled data. A simple first-order low-pass filter
can be written:

$$
y_k=\alpha x_k+(1-\alpha)y_{k-1}
$$

where $\alpha$ controls the tradeoff between noise attenuation and lag.

The $z$-transform is the discrete-time analog of Laplace-domain analysis. It is
useful for sampled-data controls, digital filters, stability of recursive
algorithms, and discrete-time system identification.

## Controls

Control systems use commands, feedback, and measurement to shape system
response.

Open-loop control applies commands without measuring the output. Closed-loop
control uses measured output to correct the command.

For reference tracking, the error is:

$$
e(t)=r(t)-y(t)
$$

where $r(t)$ is the reference and $y(t)$ is the measured output.

A transfer function relates output to input in the Laplace domain:

$$
G(s)=\frac{Y(s)}{U(s)}
$$

For unity negative feedback:

$$
T(s)=\frac{C(s)G(s)}{1+C(s)G(s)}
$$

Bang-bang control switches between discrete actuator limits:

$$
u(t)=
\begin{cases}
U_{\max}, & e(t)>0 \\
-U_{\max}, & e(t)<0
\end{cases}
$$

It is simple and robust in some relay-like systems, but can chatter or
oscillate around the setpoint.

PID control is:

$$
u(t)=K_pe(t)+K_i\int e(t)\,dt+K_d\frac{de}{dt}
$$

The proportional term reacts to present error, the integral term accumulates
past error, and the derivative term reacts to error rate. Integral action can
remove steady-state error, but actuator saturation can cause windup if not
handled.

Feedforward uses a model to supply the predictable part of the command:

$$
u(t)=u_{\text{ff}}(t)+u_{\text{fb}}(t)
$$

Feedback then corrects disturbances, modeling error, and unmeasured effects.

Common response measures include rise time, settling time, overshoot,
steady-state error, bandwidth, phase margin, gain margin, and phase lag.

Poles describe natural response. For a continuous-time linear system, stable
poles generally require negative real parts.

Zeros shape forced response and can introduce non-minimum-phase behavior. A
right-half-plane zero can make a system initially move opposite the desired
direction, limiting achievable closed-loop speed even if the poles are stable.

Steady-state error depends on loop gain and system type. For unity feedback,
the position error constant is:

$$
K_{\text{pos}}=\lim_{s\to 0}C(s)G(s)
$$

The steady-state error to a unit step is:

$$
e_{\text{ss}}=\frac{1}{1+K_{\text{pos}}}
$$

Integral action increases low-frequency loop gain and can remove step
steady-state error, but it also changes stability margins and saturation
behavior.

Frequency response evaluates the transfer function on the imaginary axis:

$$
G(j\omega)
$$

Bode plots show magnitude and phase versus frequency. Root locus shows how
closed-loop poles move as gain changes. Lead compensation can add phase and
increase stability margin; lag compensation can improve low-frequency gain and
steady-state accuracy.

Gain margin and phase margin quantify how much loop gain or phase lag can be
added before the closed-loop system reaches the stability boundary. They are
not complete robustness proofs, but they are practical indicators of design
fragility.

Root-locus design connects desired closed-loop pole locations to controller
structure. Dominant pole placement is often used to target damping ratio and
natural frequency:

$$
s=-\zeta\omega_n\pm j\omega_n\sqrt{1-\zeta^2}
$$

Pole placement in state space chooses $K$ so the eigenvalues of $A-BK$ match
desired closed-loop locations when the system is controllable.

Controllability describes whether inputs can move the state. For an LTI system,
the controllability matrix is:

$$
\mathcal{C} =
\begin{bmatrix}
B & AB & A^2B & \cdots & A^{n-1}B
\end{bmatrix}
$$

Observability describes whether outputs contain enough information to infer the
state:

$$
\mathcal{O} =
\begin{bmatrix}
C \\
CA \\
CA^2 \\
\vdots \\
CA^{n-1}
\end{bmatrix}
$$

State feedback uses:

$$
u=-Kx
$$

Observers estimate states that are not directly measured:

$$
\dot{\hat{x}}=A\hat{x}+Bu+L(y-C\hat{x})
$$

Control design depends on stability, controllability, observability, actuator
limits, sensor noise, delay, robustness, and model accuracy.

Reference tracking with state feedback often requires a steady-state command
or prefilter, not only $u=-Kx$. A common structure is:

$$
u=u_{\text{ss}}-K(x-x_{\text{ss}})
$$

This separates equilibrium selection from transient regulation.

Linear quadratic regulation chooses feedback by minimizing:

$$
J=\int_0^\infty (x^TQx+u^TRu)\,dt
$$

The matrices $Q$ and $R$ encode state-error and control-effort penalties. LQR
does not remove the need for engineering judgment; it gives a disciplined way
to express tradeoffs once the model and state scaling are meaningful.

Robust control begins with the fact that every plant model is wrong outside
some tolerance. Uncertainty can enter through parameters, unmodeled dynamics,
delay, nonlinearities, disturbances, measurement noise, and actuator limits.

## Nonlinear Dynamics And Control

Nonlinear systems are described by:

$$
\dot{x}=f(x,u)
$$

Linearization near an operating point $(x_0,u_0)$ gives:

$$
\Delta\dot{x}=A\Delta x+B\Delta u
$$

where:

$$
A=\left.\frac{\partial f}{\partial x}\right|_{x_0,u_0}
$$

$$
B=\left.\frac{\partial f}{\partial u}\right|_{x_0,u_0}
$$

Linearization can be useful near an operating point, but it may miss behavior
that appears over larger regions.

An equilibrium point satisfies:

$$
f(x_e,u_e)=0
$$

Stability is local unless a global claim is proven. A system can be stable
near one equilibrium and unstable near another, or stable for small
disturbances but unsafe for larger ones.

Common nonlinear control ideas include feedback linearization, sliding-mode
control, backstepping, Lyapunov analysis, and gain scheduling.

Lyapunov analysis uses an energy-like scalar function. For stability of the
origin, a typical argument seeks:

$$
V(x)>0 \quad x\neq 0
$$

$$
\dot{V}(x)\leq 0
$$

Nonlinear control is sensitive to uncertainty, unmodeled dynamics,
discontinuities, saturation, and actuator limits.

The region of attraction is the set of initial conditions that converge to a
given stable equilibrium. Estimating that region is often more useful than
only classifying the equilibrium itself.

LaSalle's invariance principle can prove convergence when $\dot{V}\leq 0$ but
not strictly negative everywhere. The trajectory must approach the largest
invariant set contained where $\dot{V}=0$.

Feedback linearization cancels nonlinear terms through input transformation.
For some systems, it can produce linear error dynamics. Its weakness is that
it depends directly on model accuracy and can expose unstable internal or zero
dynamics.

Sliding-mode control defines a switching surface, often written:

$$
s(x)=0
$$

The control law drives trajectories toward that surface and then along it.
Sliding control can be robust to matched uncertainty, but discontinuous
switching can create chatter and excite unmodeled high-frequency dynamics.

Gain scheduling uses different locally valid controllers across operating
regions. It is practical for nonlinear plants, but transitions, interpolation,
and validity ranges must be validated directly.

## Heat Transfer

Heat transfer describes thermal energy transport by conduction, convection, and
radiation.

The transient heat equation for a homogeneous solid is:

$$
\frac{\partial T}{\partial t}=\alpha\nabla^2T+\frac{\dot{q}}{\rho c_p}
$$

where $\alpha=k/(\rho c_p)$ is thermal diffusivity and $\dot{q}$ is volumetric
heat generation.

Fourier conduction:

$$
q_x=-kA\frac{dT}{dx}
$$

Newton cooling:

$$
q=hA(T_s-T_\infty)
$$

Radiation to large surroundings:

$$
q=\epsilon\sigma A(T_s^4-T_{\text{sur}}^4)
$$

Thermal resistance gives:

$$
q=\frac{\Delta T}{R_{\text{th}}}
$$

For a plane wall:

$$
R_{\text{cond}}=\frac{L}{kA}
$$

For convection:

$$
R_{\text{conv}}=\frac{1}{hA}
$$

Lumped capacitance assumes spatially uniform body temperature. The Biot number
checks whether internal gradients are likely important:

$$
Bi=\frac{hL_c}{k}
$$

A common lumped transient response is:

$$
\frac{T(t)-T_\infty}{T_i-T_\infty}
=\exp\left(-\frac{hA}{\rho Vc_p}t\right)
$$

Important dimensionless groups:

| Group | Meaning |
| :-- | :-- |
| Biot | internal conduction resistance versus surface convection resistance |
| Fourier | nondimensional diffusion time |
| Nusselt | convection relative to conduction |
| Prandtl | momentum diffusivity versus thermal diffusivity |

Thermal models depend strongly on geometry, material properties, boundary
conditions, flow regime, characteristic length, and whether the response is
steady or transient.

Extended surfaces or fins increase heat transfer area. Their usefulness
depends on whether the added area remains thermally connected to the base.
Fin efficiency compares actual fin heat transfer to an ideal fin at uniform
base temperature.

For heat exchangers, the log-mean temperature difference method uses:

$$
q=UA\Delta T_{\text{lm}}
$$

where $U$ is overall heat-transfer coefficient and $\Delta T_{\text{lm}}$ accounts
for the changing hot-cold temperature difference along the exchanger.

Convection correlations usually have the form:

$$
Nu=f(Re,Pr,\text{geometry},\text{boundary condition})
$$

Using a correlation outside its Reynolds-number range, geometry, surface
condition, or thermal boundary condition can produce precise-looking but
invalid heat-transfer estimates.

## Thermodynamics

Thermodynamics tracks energy, work, heat, state, and property relationships.

For a closed system, the first law can be written:

$$
\Delta E = Q - W
$$

where $Q$ is heat added to the system and $W$ is work done by the system.

For many engineering control volumes at steady state:

$$
\dot{Q}-\dot{W}+
\sum \dot{m}\left(h+\frac{V^2}{2}+gz\right)_{\text{in}}
=
\sum \dot{m}\left(h+\frac{V^2}{2}+gz\right)_{\text{out}}
$$

State properties include pressure, temperature, volume, internal energy,
enthalpy, entropy, and density. Processes may be idealized as isothermal,
isentropic, isobaric, isochoric, adiabatic, or polytropic.

For an ideal gas:

$$
pV=mRT
$$

Enthalpy is:

$$
h=u+pv
$$

It is especially useful in open systems because flow work is included in the
property.

Thermodynamics provides the bookkeeping for energy conversion. Heat transfer
and fluid mechanics often provide the rate laws that determine how fast those
changes occur.

The second law introduces entropy and limits on energy conversion. For a heat
engine, thermal efficiency is:

$$
\eta=\frac{W_{\text{out}}}{Q_{\text{in}}}
$$

Thermodynamic models depend on property data, phase, ideal-gas assumptions,
steady-flow assumptions, heat loss, irreversibility, and whether kinetic or
potential energy terms are negligible.

For a reversible heat engine operating between two reservoirs, the Carnot
efficiency is:

$$
\eta_{\text{Carnot}}=1-\frac{T_L}{T_H}
$$

Real cycles fall below this limit because of irreversibility, finite
temperature differences, friction, pressure losses, heat leakage, and
non-ideal component behavior.

Common thermodynamic devices include nozzles, diffusers, turbines,
compressors, pumps, throttling valves, heat exchangers, engines, refrigerators,
and heat pumps. Each device has a characteristic energy balance and a set of
loss mechanisms that determine performance.

## Fluid Mechanics

Fluid mechanics relates pressure, velocity, density, viscosity, geometry, and
flow rate.

For incompressible steady flow:

$$
Q=AV
$$

Ideal Bernoulli flow along a streamline:

$$
\frac{p}{\rho g}+\frac{V^2}{2g}+z=\text{constant}
$$

Pipe losses are often represented as:

$$
h_f=f\frac{L}{D}\frac{V^2}{2g}
$$

The Reynolds number compares inertial and viscous effects:

$$
Re=\frac{\rho V L}{\mu}
$$

Boundary-layer behavior is central to convection, drag, skin friction, and
separation. Laminar and turbulent regimes require different assumptions.

The incompressible continuity equation is:

$$
\nabla\cdot u=0
$$

The Navier-Stokes momentum equation for a Newtonian incompressible fluid can be
written:

$$
\rho\left(\frac{\partial u}{\partial t}+u\cdot\nabla u\right)
=-\nabla p+\mu\nabla^2u+\rho g
$$

Most practical fluid calculations are simplifications, correlations, or
numerical approximations of mass and momentum conservation under specific
assumptions.

Common fluid modeling assumptions:

- incompressible versus compressible
- inviscid versus viscous
- steady versus transient
- laminar versus turbulent
- fully developed versus developing
- internal versus external flow

Dimensionless groups such as Reynolds, Prandtl, Nusselt, Mach, Froude, Biot,
and Fourier numbers identify which effects dominate and which correlations are
appropriate.

Minor losses represent fittings, entrances, exits, bends, valves, expansions,
and contractions:

$$
h_m=K\frac{V^2}{2g}
$$

External aerodynamic forces are commonly nondimensionalized as:

$$
D=\frac{1}{2}\rho V^2 C_D A
$$

$$
L=\frac{1}{2}\rho V^2 C_L A
$$

Compressibility becomes important when density changes affect the flow. Mach
number is:

$$
M=\frac{V}{a}
$$

where $a$ is the speed of sound.

## Statistics And Data Analysis

Statistics describes uncertainty, variability, inference, and model fit.

Probability assigns likelihood to events:

$$
P(A\cup B)=P(A)+P(B)-P(A\cap B)
$$

Conditional probability is:

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}
$$

Bayes' rule updates probability after observing evidence:

$$
P(B_i\mid A)=
\frac{P(A\mid B_i)P(B_i)}
{\sum_j P(A\mid B_j)P(B_j)}
$$

A random variable maps outcomes to numbers. Discrete variables use a PMF,
continuous variables use a PDF, and both use a CDF:

$$
F_X(x)=P(X\leq x)
$$

Expected value and variance are:

$$
E[X]=\mu
$$

$$
Var(X)=E[(X-\mu)^2]
$$

Covariance and correlation describe how variables vary together:

$$
Cov(X,Y)=E[(X-\mu_X)(Y-\mu_Y)]
$$

$$
\rho_{X,Y}=\frac{Cov(X,Y)}{\sigma_X\sigma_Y}
$$

Common discrete distributions include Bernoulli, binomial, geometric, negative
binomial, hypergeometric, Poisson, and multinomial distributions.

Common continuous distributions include uniform, exponential, gamma, Weibull,
beta, and normal distributions.

Common distribution uses:

| Distribution | Typical use |
| :-- | :-- |
| Bernoulli | one binary trial |
| Binomial | number of successes in fixed independent trials |
| Geometric | trials until first success |
| Hypergeometric | sampling without replacement |
| Poisson | event counts over interval or region |
| Uniform | equal density over an interval |
| Exponential | waiting time for memoryless events |
| Gamma | waiting time for multiple Poisson-process events |
| Weibull | reliability and life data with flexible failure-rate behavior |
| Beta | probability-like quantities bounded between 0 and 1 |
| Normal | measurement variation, CLT approximations, linear model errors |

The normal distribution is:

$$
f(x)=
\frac{1}{\sigma\sqrt{2\pi}}
\exp\left[-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2\right]
$$

Descriptive statistics summarize observed data:

$$
\bar{x}=\frac{1}{n}\sum_{i=1}^{n}x_i
$$

$$
s^2=\frac{1}{n-1}\sum_{i=1}^{n}(x_i-\bar{x})^2
$$

Confidence intervals estimate plausible parameter ranges. For a mean with
unknown population standard deviation:

$$
\bar{x}\pm t_{\alpha/2,n-1}\frac{s}{\sqrt{n}}
$$

Hypothesis tests compare a null hypothesis to an alternative. A p-value
measures how extreme the observed data would be if the null hypothesis were
true. Type I error rejects a true null hypothesis. Type II error fails to
reject a false null hypothesis.

The central limit theorem explains why sample means often become approximately
normal even when the original data are not normal, provided the sample size is
large enough and the assumptions are reasonable:

$$
\frac{\bar{X}-\mu}{\sigma/\sqrt{n}}\Rightarrow N(0,1)
$$

Point estimators can be compared by bias, variance, consistency, and mean
squared error:

$$
MSE(\hat{\theta})=Var(\hat{\theta})+Bias(\hat{\theta})^2
$$

Test selection depends on the data structure. One-sample tests, paired tests,
two-sample tests, proportion tests, variance tests, and nonparametric tests
answer different questions.

Linear regression fits:

$$
y=\beta_0+\beta_1x+\epsilon
$$

Residuals are:

$$
e_i=y_i-\hat{y}_i
$$

Residual analysis checks model form, nonconstant variance, outliers,
non-normal error behavior, missing variables, and regime changes. Regression,
ANOVA, confidence intervals, prediction intervals, and hypothesis tests all
depend on assumptions about sampling, independence, variance, and residual
structure.

One-factor ANOVA compares variation between groups to variation within groups:

$$
F=\frac{MS_{\text{between}}}{MS_{\text{within}}}
$$

It tests whether group means differ more than expected from within-group
variation under the null hypothesis.

For regression, confidence intervals describe uncertainty in the expected
mean response. Prediction intervals describe uncertainty for a new observation.
Prediction intervals are wider because they include both parameter uncertainty
and observation noise.

Correlation does not establish causation. A statistically significant model can
still be physically weak if the experiment is confounded, the operating region
is narrow, the sample is biased, or the variables are only proxies for the
actual mechanism.

## Optimization

Optimization chooses design variables to minimize or maximize an objective
subject to constraints.

General constrained form:

$$
\min_x f(x)
$$

subject to:

$$
g_i(x)\leq 0
$$

$$
h_j(x)=0
$$

The gradient gives first-order local sensitivity:

$$
\nabla f(x)
$$

The Hessian gives second-order curvature:

$$
\nabla^2 f(x)
$$

The Lagrangian is:

$$
\mathcal{L}(x,\lambda,\mu)=
f(x)+\sum_i\lambda_i g_i(x)+\sum_j\mu_j h_j(x)
$$

KKT conditions combine stationarity, primal feasibility, dual feasibility, and
complementary slackness:

$$
\nabla_x \mathcal{L}(x,\lambda,\mu)=0
$$

$$
g_i(x)\leq 0,\qquad h_j(x)=0
$$

$$
\lambda_i\geq 0
$$

$$
\lambda_i g_i(x)=0
$$

First-order optimality for unconstrained problems requires:

$$
\nabla f(x^*)=0
$$

Convex problems are important because local optima are also global optima
under appropriate assumptions.

Common methods include steepest descent, Newton's method, quasi-Newton
methods, conjugate gradient, coordinate descent, line search methods, and
trust-region methods.

A descent direction $p$ satisfies:

$$
\nabla f(x)^Tp<0
$$

Line search chooses a step length $\alpha$ along that direction. The Armijo
condition requires sufficient decrease:

$$
f(x+\alpha p)\leq f(x)+c_1\alpha\nabla f(x)^Tp
$$

The Wolfe curvature condition limits steps that are too short:

$$
\nabla f(x+\alpha p)^Tp\geq c_2\nabla f(x)^Tp
$$

Newton's method uses local quadratic curvature:

$$
\nabla^2 f(x_k)p_k=-\nabla f(x_k)
$$

Quasi-Newton methods build an approximate inverse Hessian from gradient
changes instead of forming the exact Hessian. BFGS satisfies a secant
condition and can maintain positive definiteness under appropriate conditions.

Sequential quadratic programming approximates a nonlinear constrained problem
with a sequence of quadratic subproblems. Interior-point and barrier methods
keep iterates inside inequality constraints by penalizing proximity to the
boundary, often using logarithmic barrier terms.

Constraint qualifications such as LICQ matter because KKT multipliers and
first-order optimality statements require regularity. A solver can return a
point that is numerically feasible without the optimization result being
well-posed.

Optimization results depend on objective choice, constraints, scaling,
parameterization, initial guesses, solver method, tolerances, model fidelity,
and uncertainty.

Optimization is most valuable when the objective and constraints represent the
real design question. A numerically optimal solution to the wrong problem is
still the wrong design.

## Numerical Methods

Numerical methods approximate mathematical operations that are difficult or
impossible to solve exactly.

Common tasks include nonlinear equation solving, linear system solving,
interpolation, numerical differentiation, numerical integration, ODE
integration, optimization, and curve or surface fitting.

Numerical quality depends on truncation error, roundoff error, conditioning,
stability, convergence criteria, and solver tolerances.

A linear system may be solved by direct methods such as factorization or
iterative methods such as Krylov subspace methods. Direct methods can be
reliable for moderate dense systems; iterative methods are often necessary for
large sparse systems.

Condition number describes sensitivity:

$$
\kappa(A)=\|A\|\|A^{-1}\|
$$

Large condition numbers mean small data perturbations can produce large
solution changes.

For ODE integration:

$$
\dot{x}=f(x,t)
$$

a time-stepping method computes approximate states at discrete times. Step
size affects accuracy, runtime, and stability. Stiff systems may require
implicit methods or specialized solvers.

Interpolation estimates values between known data points. Regression estimates
relationships from noisy data. These are different tasks, even when both
produce curves through or near data.

Solver warnings, singular systems, nonconvergence, and sensitivity to
tolerances are part of the technical result, not just software noise.

Newton's method for solving $F(x)=0$ updates:

$$
x_{k+1}=x_k-J_F(x_k)^{-1}F(x_k)
$$

For optimization, the Newton step solves:

$$
\nabla^2 f(x_k)p_k=-\nabla f(x_k)
$$

These methods can converge quickly near a solution but are sensitive to
conditioning, initialization, and whether the local model is trustworthy.

Explicit integration methods compute the next state directly from known
quantities. Implicit methods solve equations involving the unknown next state.
Implicit methods are more expensive per step but can be much more stable for
stiff systems.

A numerical result should usually be accompanied by at least one quality check:
mesh or timestep refinement, residual size, conservation error, comparison to
a limiting case, sensitivity to tolerance, or reproduction of a known result.

## Geometric Modeling And CAD

Geometric modeling represents curves, surfaces, and solids for design,
analysis, manufacturing, and visualization.

A parametric curve is:

$$
\mathbf{r}(u)=[x(u),y(u),z(u)]
$$

A Bezier curve is:

$$
\mathbf{r}(u)=\sum_{i=0}^{n}B_{i,n}(u)\mathbf{P}_i
$$

with Bernstein basis:

$$
B_{i,n}(u)=\binom{n}{i}u^i(1-u)^{n-i}
$$

B-splines provide local control and flexible continuity.

Bezier curves have useful geometric properties: they interpolate the first and
last control points, stay within the convex hull of their control polygon, and
are affine-invariant. The de Casteljau algorithm evaluates the curve through
recursive linear interpolation, which is numerically stable and geometrically
intuitive.

Rational Bezier curves add weights:

$$
\mathbf{r}(u)=
\frac{\sum_{i=0}^{n}w_iB_{i,n}(u)\mathbf{P}_i}
{\sum_{i=0}^{n}w_iB_{i,n}(u)}
$$

Rational representation allows exact conic sections such as circles and
ellipses.

B-splines and NURBS use knots to control continuity, local influence, and
parameterization. Moving one B-spline control point affects only a local
region of the curve rather than the entire curve.

Continuity describes smoothness:

| Type | Meaning |
| :-- | :-- |
| $C^0$ | position continuity |
| $C^1$ | derivative continuity |
| $C^2$ | curvature-related derivative continuity |
| $G^1$ | tangent-direction continuity |
| $G^2$ | curvature-direction continuity |

Surfaces may be represented parametrically:

$$
\mathbf{r}(u,v)=[x(u,v),y(u,v),z(u,v)]
$$

Geometry representation affects intersection robustness, manufacturability,
analysis quality, toolpath generation, meshing, and downstream simulation.

A tensor-product surface combines basis functions in two parameters:

$$
\mathbf{r}(u,v)=\sum_i\sum_j N_i(u)M_j(v)\mathbf{P}_{ij}
$$

Surface-surface intersection solves:

$$
\mathbf{S}_1(u,v)=\mathbf{S}_2(r,s)
$$

This is usually a nonlinear numerical problem. Robust CAD kernels must handle
tolerance, trimming, degeneracy, near-tangency, and topology updates, not only
the analytic surface equations.

## Materials And Microstructure

Materials engineering relates structure, processing, properties, and
performance.

Stress and strain are:

$$
\sigma=\frac{F}{A}
$$

$$
\epsilon=\frac{\Delta L}{L}
$$

Linear elastic behavior is:

$$
\sigma=E\epsilon
$$

Material behavior may include elastic deformation, plastic deformation, yield,
fracture, fatigue, creep, wear, corrosion, thermal expansion, anisotropy, and
manufacturing defects.

Microstructure affects macroscopic behavior through grain size, phases,
defects, inclusions, porosity, texture, and processing history.

Processing affects microstructure, and microstructure affects properties. Heat
treatment, cold work, casting, welding, additive manufacturing, and machining
can change grain size, residual stress, phase distribution, hardness, ductility,
and fatigue behavior.

Fatigue describes failure under repeated loading, often at stresses below
static yield. Creep describes time-dependent deformation under sustained load,
especially at elevated temperature.

Thermal expansion is commonly approximated by:

$$
\Delta L=\alpha L_0\Delta T
$$

Microscopy and materials characterization connect observed structure to
manufacturing route and mechanical performance. Failure theories such as
maximum shear stress and von Mises criteria are models for predicting failure
under multiaxial stress states.

Scanning electron microscopy, optical microscopy, spectroscopy, and related
methods are evidence tools. They can reveal fracture surfaces, inclusions,
porosity, grain morphology, corrosion products, coating defects, and wear
features. The observation is only useful when connected to the loading,
environment, manufacturing route, and failure hypothesis.

Fracture mechanics relates crack size, stress, and material toughness. A common
mode-I stress intensity form is:

$$
K_I=Y\sigma\sqrt{\pi a}
$$

Fracture becomes critical when $K_{\text{I}}$ approaches the fracture toughness
$K_{\text{IC}}$.

Hardness, tensile tests, microscopy, spectroscopy, and fractography answer
different material questions. A useful material investigation connects the
test method to the suspected mechanism instead of treating characterization as
a checklist.

## Corrosion

Corrosion is material degradation driven by chemical or electrochemical
reactions.

An electrochemical corrosion process includes anodic and cathodic reactions.
The anodic reaction removes metal atoms into solution. The cathodic reaction
consumes electrons.

Important concepts include electrode potential, galvanic coupling, reference
electrodes, polarization, passivation, corrosion current density,
concentration effects, environment chemistry, and surface condition.

A corrosion cell requires an anode, cathode, electrolyte, and conductive path.
Changing any one of these can reduce or stop the corrosion mechanism.

The Nernst equation relates electrode potential to reaction conditions:

$$
E=E^\circ-\frac{RT}{nF}\ln Q
$$

Faraday's law relates electric charge transfer to material consumption:

$$
m=\frac{Q M}{nF}
$$

where $m$ is mass, $Q$ is charge, $M$ is molar mass, $n$ is electrons
transferred, and $F$ is Faraday's constant.

Observed degradation depends on material, environment, geometry, time, and
electrochemical compatibility with nearby materials.

Common corrosion forms include uniform corrosion, galvanic corrosion, pitting,
crevice corrosion, stress-corrosion cracking, intergranular corrosion, and
erosion-corrosion.

Corrosion control can involve material selection, coatings, cathodic
protection, inhibitors, geometry changes, isolation of dissimilar metals, and
environment control.

Galvanic corrosion occurs when dissimilar materials are electrically connected
in an electrolyte. The less noble material tends to corrode faster, especially
when a small anodic area is coupled to a large cathodic area.

Passivation forms a protective surface film. It can dramatically reduce
corrosion rate, but local chemistry, chloride concentration, mechanical damage,
or crevices can break down the passive layer.

Corrosion design is geometric as well as chemical. Crevices, stagnant water,
poor drainage, trapped contaminants, inaccessible inspection surfaces, and
coating defects can dominate material selection.

## Sensors, Instrumentation, And Data Acquisition

Sensors convert physical quantities into electrical, digital, or visual
signals.

A measurement chain includes:

- sensor physics
- mounting
- excitation
- signal conditioning
- analog-to-digital conversion
- sampling
- filtering
- calibration
- storage
- analysis

Calibration maps sensor output to physical units. A linear calibration is:

$$
y=mx+b
$$

Sampling must capture the relevant signal content. For a maximum signal
frequency $f_{\text{max}}$, the Nyquist criterion requires:

$$
f_s>2f_{\text{max}}
$$

Filtering can reduce noise but can also add phase lag or remove real signal
content.

Measurement uncertainty can come from sensor noise, quantization, drift,
temperature sensitivity, alignment, calibration error, mounting compliance, or
incorrect signal processing.

Common sensor examples:

| Sensor | Typical quantity |
| :-- | :-- |
| Strain gauge | strain, load, torque through calibrated structure |
| Thermocouple | temperature difference through thermoelectric voltage |
| RTD | temperature through resistance |
| Encoder | angular or linear position |
| IMU | acceleration and angular rate |
| Pressure transducer | fluid or gas pressure |
| Load cell | force through calibrated deformation |
| Potentiometer | position through variable resistance |

Sensor placement affects what is actually measured. A well-calibrated sensor
mounted to a flexible bracket may measure bracket motion more than the intended
state.

Uncertainty propagation can be approximated by linear sensitivity:

$$
\sigma_y^2\approx J\Sigma_xJ^T
$$

where $J$ maps input uncertainties to output uncertainty and $\Sigma_x$ is the
input covariance matrix.

## Software Engineering

Software engineering organizes computation so tools remain maintainable,
testable, reproducible, and understandable.

Important concepts include modularity, interfaces, abstraction, data
structures, algorithms, version control, dependency management, automation,
documentation, and testing.

Algorithms should be evaluated by correctness, complexity, numerical behavior,
and maintainability.

Big-O notation describes growth rate with input size:

$$
O(n),\quad O(n\log n),\quad O(n^2)
$$

Data structures encode access patterns. Arrays, lists, hash maps, trees,
graphs, queues, and stacks are not interchangeable if lookup, insertion,
ordering, or traversal costs matter.

Unit tests check isolated behavior. Integration tests check interactions
between components. Regression tests check that previously working behavior has
not changed unintentionally.

Simulation software usually requires:

- fixed input configuration
- known model version
- known solver settings
- controlled dependencies
- saved outputs
- clear plotting or metric extraction
- reproducible reports

Software architecture is part of the engineering model when the software
defines what can be simulated, measured, compared, or reproduced.

For engineering software, inputs and outputs should usually be structured
data, not implicit state hidden in scripts. Clear schemas, command-line entry
points, configuration files, and reproducible environments make analysis
repeatable.

Relational data models represent information as tables with rows, columns,
keys, and relationships. They are useful when data must be queried, joined,
validated, and kept consistent across entities.

Common relational operations include selection, projection, join, union,
difference, and aggregation. These operations are not only database details;
they define how engineering data can be compared without losing traceability.

Data-interchange formats such as CSV, JSON, YAML, Parquet, HDF5, MAT, and
SQLite each imply different tradeoffs in readability, schema strictness,
precision, compression, random access, and tool compatibility.

Containers isolate runtime dependencies. They are useful for reproducibility,
but they do not automatically make a workflow understandable. The entry point,
mounted data, environment variables, generated artifacts, and version tags
still need to be explicit.

Continuous integration can check formatting, unit tests, smoke simulations,
translation, regression metrics, documentation builds, and dependency health.
The goal is not to prove correctness absolutely; it is to catch drift before it
becomes invisible.

A good simulation tool separates model definition, execution, result
extraction, plotting, and reporting. This makes it easier to rerun workflows,
compare versions, and understand which part changed when results move.

Exceptions and failure handling are part of the public behavior of a tool.
Useful errors identify the failed input, the violated assumption, and the next
debugging surface. Silent failure, broad exception swallowing, and hidden
fallbacks can corrupt an engineering result.

## Networking

Computer networking moves data between processes over connected systems.

A layered model separates concerns:

| Layer | Typical concern |
| :-- | :-- |
| Application | user-facing protocols and messages |
| Transport | process-to-process communication |
| Network | addressing and routing |
| Link | local network frames |
| Physical | signals and media |

Common concepts include sockets, client-server architecture, peer-to-peer
architecture, DNS, HTTP, TCP, UDP, latency, throughput, packet loss,
congestion, and routing.

TCP provides ordered reliable byte streams. UDP provides datagrams with lower
protocol overhead but no built-in delivery guarantee.

A socket identifies an endpoint for process-to-process communication. A
networked application usually defines message format, timing behavior, error
handling, and state management in addition to the socket connection itself.

DNS maps names to network information such as IP addresses. The system is
hierarchical and cached, so behavior depends on resolvers, authoritative
servers, record type, time-to-live, and propagation delay.

HTTP is an application-layer request-response protocol. Performance depends on
connection reuse, headers, caching, compression, protocol version, server
behavior, and the number of objects required by the page or service.

End-to-end delay can include processing delay, queueing delay, transmission
delay, and propagation delay:

$$
d_{\text{total}}=
d_{\text{proc}}+
d_{\text{queue}}+
d_{\text{trans}}+
d_{\text{prop}}
$$

Application behavior depends on protocol semantics, network latency, packet
loss, buffering, retransmission, congestion control, and server/client process
behavior.

Throughput is limited by bandwidth, protocol overhead, congestion, receiver
capacity, and round-trip time. Reliability can be implemented at different
layers, but each choice changes latency, complexity, and failure behavior.

Congestion control protects the network by adapting sender behavior. Flow
control protects the receiver by preventing senders from overwhelming receive
buffers. These are different mechanisms even though both can limit throughput.

## Engineering Economy

Engineering economy evaluates financial implications of engineering decisions.

The time value of money states that money at different times is not directly
equivalent.

Cash-flow diagrams make timing explicit. They are often the simplest way to
avoid mixing present, future, annual, and gradient quantities incorrectly.

Future worth:

$$
F=P(1+i)^n
$$

Present worth:

$$
P=\frac{F}{(1+i)^n}
$$

Uniform annual series present worth:

$$
P=A\frac{(1+i)^n-1}{i(1+i)^n}
$$

Important methods include present worth, future worth, annual worth, rate of
return, payback period, benefit-cost analysis, depreciation, inflation
adjustment, and sensitivity analysis.

Net present value sums discounted cash flows:

$$
NPV=\sum_{t=0}^{n}\frac{C_t}{(1+i)^t}
$$

Inflation separates actual-dollar and constant-dollar analysis. Depreciation
models allocate asset cost over time. Rate-of-return analysis can be
misleading for nonsimple investments or when alternatives are not compared
consistently.

Engineering economy connects design alternatives to cost, time, risk, and
resource allocation.

Nominal and effective interest rates differ when compounding frequency matters.
For a nominal rate $r$ compounded $m$ times per year:

$$
i_{\text{eff}}=\left(1+\frac{r}{m}\right)^m-1
$$

Book depreciation methods include straight-line, declining-balance, and
units-of-production approaches. Depreciation affects accounting and tax
analysis; it is not the same as physical wear.

Incremental rate-of-return analysis compares alternatives by the additional
investment required and the additional return produced. It avoids selecting an
alternative only because it has a high rate of return on a small investment.

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
capacity as the inside tires lose. This is a central reason roll stiffness
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
inside that capability envelope. Neither replaces testing; both need
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

## Project Design

Engineering design converts requirements into a physical or computational
system.

Common artifacts include requirements, functional models, concept generation,
trade studies, calculations, CAD models, prototypes, test plans, validation
results, design reviews, and documentation.

Requirements define what the design must accomplish. Functional models
describe what the system must do before committing to a physical solution.

A functional model separates purpose from implementation. It asks what the
system must transform, transmit, store, support, sense, compute, or control.

Trade studies compare concepts using criteria such as performance, cost, mass,
manufacturability, reliability, usability, schedule, risk, and maintainability.

Decision matrices are useful when criteria are explicit, weights are justified,
and scores are traceable. They are weak when they hide uncertainty or convert
unvalidated preferences into precise-looking numbers.

Manufacturing planning considers material, tolerance, tooling, fixturing,
assembly order, inspection, rework, and serviceability.

Prototypes reduce uncertainty by testing assumptions in hardware or software.

Design reviews should expose assumptions, interfaces, risks, requirements
coverage, test plans, and unresolved decisions.

Interfaces are often where design risk concentrates. Mechanical, electrical,
software, thermal, human, and manufacturing interfaces should be defined early
enough that teams can test compatibility instead of discovering conflicts at
final assembly.

Risk can be tracked by likelihood, severity, detectability, and mitigation
plan. The important part is not the scoring system itself; it is whether the
team can see which uncertainties still threaten the design.

A requirement should be testable. "Lightweight" is a preference; "mass shall
be less than 4.0 kg" is a requirement. Good requirements define value, units,
condition, tolerance, and verification method.

Interfaces should be owned. Every mechanical bolt pattern, electrical signal,
software message, coordinate frame, hydraulic fitting, calibration file, and
mounting datum should have an accountable owner and a change process.

Prototypes can be classified by purpose:

| Prototype type | Purpose |
| :-- | :-- |
| Looks-like | packaging, ergonomics, communication |
| Works-like | function and mechanism risk |
| Test article | validation of a load case or subsystem |
| Manufacturing prototype | process, tooling, tolerance, assembly |
| Software prototype | workflow, interface, algorithm behavior |

The best prototype is the one that removes the most decision-critical
uncertainty per unit of time and cost.

## Validation And Documentation

Validation compares model, calculation, or design behavior against an external
reference such as test data, known solutions, requirements, or independently
computed results.

Common validation evidence includes:

- measured-versus-simulated overlays
- residual plots
- calibration curves
- convergence studies
- sensitivity studies
- uncertainty bounds
- pass/fail records
- repeatability checks
- regression tests

Experimental work should define the measurement objective before data
collection. The objective determines sensor selection, sample rate, calibration
method, excitation signal, environmental control, repetitions, and acceptance
criteria.

A test matrix should cover the operating region needed by the claim. Random
trial order can reduce bias from drift or changing conditions. Repetition
separates random variation from systematic effects.

Documentation records what was modeled, assumptions made, inputs used, outputs
generated, failures observed, changes made, and uncertainty remaining.

Good documentation lets another engineer reproduce the result, understand the
limits of the claim, and extend the work without rebuilding the entire context.

Verification asks whether the model or tool was implemented correctly.
Validation asks whether it represents the real system well enough for the
intended use.

Regression testing preserves known behavior over time. It is especially useful
for simulation tools because small implementation changes can alter equations,
initialization, solver behavior, metrics, or reports.

Uncertainty should be attached to the claim. A result can be valid in one
operating region and unvalidated in another.

A validation claim should include:

- the model or design version
- the test or reference data used
- the operating region covered
- the signals compared
- the metrics used
- the acceptance criteria
- the uncertainty or residual error
- the regions where no claim is made

Overlay plots are useful because they show shape, offset, slope, regime
changes, and outliers. Scalar metrics are useful because they support
comparison across versions. A strong validation workflow usually uses both.

For dynamic systems, validation should compare response space, not only single
summary values. Time histories, phase relationships, frequency response,
steady-state plateaus, transients, saturation behavior, and driver or operator
corrections can all matter.

Regression testing is not the same as validation. A regression test can prove
that a simulation still matches a previous result. It cannot prove that the
previous result represented the real system.

A mature engineering claim refuses to overreach. If a test does not cover a
region, the correct conclusion is not that the model is wrong everywhere; it is
that the model is unvalidated in that region.
