---
layout: doc
title: Signals And Controls
---

# Signals And Controls

Reference notes on signals, transforms, linear feedback control, and nonlinear
control.

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
