---
layout: doc
title: Embedded Systems And Software
---

# Embedded Systems And Software

Reference notes on embedded control, instrumentation, software engineering,
and networking.

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
difference, and aggregation. These operations define how engineering data can be
compared without losing traceability.

Data-interchange formats such as CSV, JSON, YAML, Parquet, HDF5, MAT, and
SQLite each imply different tradeoffs in readability, schema strictness,
precision, compression, random access, and tool compatibility.

Containers isolate runtime dependencies. They are useful for reproducibility,
but they do not automatically make a workflow understandable. The entry point,
mounted data, environment variables, generated artifacts, and version tags
still need to be explicit.

Continuous integration can check formatting, unit tests, smoke simulations,
translation, regression metrics, documentation builds, and dependency health.
The goal is to catch drift before it becomes invisible, not to prove
correctness.

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
