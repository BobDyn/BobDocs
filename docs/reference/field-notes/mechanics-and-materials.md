---
layout: doc
title: Mechanics And Materials
---

# Mechanics And Materials

Reference notes on kinematics, rigid-body dynamics, machine elements,
materials, and corrosion.

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
