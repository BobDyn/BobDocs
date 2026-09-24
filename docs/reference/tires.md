---
layout: doc
title: Tire Behavior
---

# Tire Behavior

This page explains how a tire generates force and moment, and what that means
for a vehicle model. For the wider vehicle model, see
[Vehicle Dynamics](/reference/vehicle-dynamics).

## Force as a map

A tire is a nonlinear force law, not a scalar friction coefficient. $\mu$ is
not constant. Think of it as a map:

$$
\mu = \mu(F_z, \alpha, \kappa, \gamma, T, p, \text{history}, \text{wear})
$$

$F_z$ is normal load, $\alpha$ is slip angle, $\kappa$ is slip ratio,
$\gamma$ is camber, $T$ is temperature, and $p$ is pressure.

## Slip and force buildup

Slip angle and slip ratio are not literal rubber-deformation measurements.
They are practical coordinates that correlate with deformation and force
buildup. Simplified forms:

$$
\alpha \approx \tan^{-1}\left(\frac{-V_y}{|V_x|}\right)
\qquad
\kappa \approx \frac{R \omega - V_x}{\max(|V_x|, \epsilon)}
$$

In the small-slip region, force buildup is roughly linear:

$$
F_y \approx C_\alpha \alpha
$$

This is spring-like: the tire deforms, and force grows with a
deformation-like input. As slip increases, force builds more slowly. The tire
then plateaus or falls to a lower force level. The three regions are:

| Region | Behavior |
| :-- | :-- |
| Linear | mostly static-friction-like |
| Transition | mixed static and sliding |
| Saturated | sliding-dominated |

Real tires add adhesion, hysteresis, tread deformation, carcass behavior,
pressure, temperature, compound, road surface, and wear. The simple model
still explains why a tire feels linear, then nonlinear, then saturated.

## Combined slip

Combined slip matters because a tire cannot spend all of its longitudinal and
lateral capacity at once. Slip ratio and slip angle together change the
deformation pattern and the total force available. The tire is one deforming
structure with a coupled force and moment response, not two independent force
generators.

## Pneumatic trail and scrub

Tires also shift their effective point of force application. Pneumatic trail
and scrub are moment arms from tire deformation, not extra forces.

Pneumatic trail is usually the fore-aft offset of the lateral force
resultant. It is a primary source of aligning moment:

$$
M_z \approx -F_y t_p + M_{z,res}
$$

$t_p$ is pneumatic trail. $M_{z,res}$ is the residual aligning moment that the
offset picture does not capture. The sign convention depends on the tire
coordinate system. Mechanical trail, pneumatic trail, scrub, caster, KPI, and
compliance together decide how that moment becomes steering torque and
upright load.

Pneumatic scrub is the lateral version: the effective force application point
moves sideways as the patch deforms. Under braking, drive, and combined slip,
that shift changes how longitudinal and lateral forces feed moments into the
wheel, upright, steering system, and suspension.

Many empirical tire models output forces and moments about a common tire
origin. There, trail and scrub are fitted internal quantities, and the result
is still a force-and-moment system. A force-only tire match can reproduce
lateral acceleration and still miss steering torque, compliance loading, and
the loss of feel near saturation. Near the limit, pneumatic trail can
collapse while lateral force stays high. The driver and suspension feel that
change.

## Relaxation, pressure, temperature, and wear

Tire force does not appear instantly. Relaxation length $\sigma$ is roughly
the distance a tire must roll to build 63.2% of its steady-state force after a
slip input. At vehicle speed $V$, it gives an approximate time constant:

$$
\tau \approx \frac{\sigma}{V}
$$

::: details First-order relaxation model

In distance:

$$
\frac{dF_y}{ds} =
\frac{F_{y,ss}(\alpha) - F_y}{\sigma}
$$

$s$ is distance traveled. Relaxation length also relates to structural
stiffness:

$$
\sigma \sim \frac{C_\alpha}{k_y}
$$

$C_\alpha$ is cornering stiffness and $k_y$ is lateral shear stiffness.

:::

Higher pressure tends to stretch and stiffen the tire structure. That reduces
deformation and often speeds up force buildup. Check this against data rather
than assume it.

Temperature can change peak force, stiffness, relaxation behavior, and wear
at the same time. Tire data is the only reliable way to know. For FSAE teams,
the practical sources are TTC data and published Magic Formula fits from
experienced fitting groups, such as Stackpole Engineering Services.

Wear can help or hurt capability, depending on the tire, compound, surface,
and operating window. Test at several life points. Track lifetime power output
to correlate drive-day usage with controlled force-and-moment testing over
time.

## Empirical tire models

Magic Formula and Pacejka-style models are empirical force laws, not physics.
That is acceptable: tires are complex, and the goal is to reproduce measured
behavior across the operating region you care about.

Know the valid range: normal load, camber, pressure, temperature, slip angle,
slip ratio, surface condition, and tire age and wear state. Outside that
range, a good fit can give confident wrong answers.
