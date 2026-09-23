---
layout: doc
title: Data And Computation
---

# Data And Computation

Reference notes on statistics, optimization, and numerical methods.

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
