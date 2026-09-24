---
layout: doc
title: Thermal And Fluids
---

# Thermal And Fluids

Reference notes on heat transfer, thermodynamics, and fluid mechanics.

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

Boundary-layer behavior governs convection, drag, skin friction, and
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
