---
layout: doc
title: Design And Manufacturing
---

# Design And Manufacturing

Reference notes on manufacturing, geometric modeling, project design,
validation, and engineering economy.

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
