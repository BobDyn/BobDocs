---
layout: doc
title: Control Bus
prev:
  text: 'Package Map'
  link: '/boblib/package-map'
next:
  text: 'Static Templates'
  link: '/boblib/generation'
---

# Control Bus

`VehicleInterfaces.Interfaces.ControlBus` is the shared signal namespace between
standard vehicle subsystem interfaces. It is the low-bandwidth control and
telemetry harness for the assembled vehicle, not a dumping ground for every wire
and not a replacement for physical connectors.

## Assembly Pattern

A vehicle assembly owns one shared `controlBus`. Each VehicleInterfaces
subsystem connects its inherited `controlBus` to that same vehicle-level bus.
Inside the subsystem, the model taps only the nested domain bus that belongs to
its public contract.

Typical vehicle-level wiring:

```txt
VehicleInterfaces.Interfaces.ControlBus controlBus;
BobLib.Atmospheres.Interfaces.AtmosphereBus atmosphereBus;

connect(controlBus, chassis.controlBus);
connect(controlBus, brakes.controlBus);
connect(controlBus, transmission.controlBus);
connect(controlBus, driveline.controlBus);
connect(controlBus, battery.controlBus);
connect(controlBus, vcu.controlBus);
connect(controlBus, inverter.controlBus);
connect(controlBus, motor.controlBus);
connect(controlBus, aeroModel.controlBus);
connect(controlBus, driverEnvironment.controlBus);
connect(atmosphere.atmosphereBus, atmosphereBus);
connect(atmosphereBus, aeroModel.atmosphereBus);

connect(steerCommand.y, driverEnvironment.steeringAngleCommand);
connect(inverterEnableCommand.y, driverEnvironment.inverterEnableCommand);
connect(requestedGearCommand.y, driverEnvironment.requestedGearCommand);
connect(gearboxModeCommand.y, driverEnvironment.gearboxModeCommand);
connect(ignitionCommand.y, driverEnvironment.ignitionCommand);
connect(driverEnvironment.steeringWheel, chassis.steeringWheel);
```

Typical subsystem-local wiring:

```txt
VehicleInterfaces.Interfaces.ChassisBus chassisBus;

connect(controlBus.chassisBus, chassisBus);
connect(rideHeight_1BusSignal, chassisBus.rideHeight_1);
connect(vehicleSpeedBusSignal, chassisBus.vehicleSpeed);
```

The nested buses are the shared names that other standard subsystems can see:
`controlBus.driverBus`, `controlBus.chassisBus`, `controlBus.engineBus`,
`controlBus.transmissionBus`, `controlBus.drivelineBus`,
`controlBus.batteryBus`, and other VehicleInterfaces domain buses.

VehicleInterfaces 2.0.2 atmosphere interfaces do not include a control-bus
connector. BobLib keeps the stock `controlBus` compatible with ordinary
VehicleInterfaces subsystems and adds a sibling
`BobLib.Atmospheres.Interfaces.AtmosphereBus` for
atmosphere-owned measurements.

## Broadcast/Subscribe Rule

The BobLib convention is:

- the subsystem that owns a value publishes it on its VehicleInterfaces domain
  bus
- any other subsystem that needs that value subscribes through its own
  `controlBus` connection
- the vehicle assembly should avoid relay wiring between two subsystem internals

For example, chassis owns corner ride-height measurements, so it publishes
`controlBus.chassisBus.rideHeight_1` through `rideHeight_4`. Aero subscribes to
those chassis signals through its own `controlBus` tap. The chassis also owns
vehicle speed for controller purposes, so the VCU reads
`controlBus.chassisBus.vehicleSpeed` instead of receiving a direct template
equation.

The driver environment owns driver intent. It receives maneuver or external
driver commands, publishes `controlBus.driverBus`, and drives the physical
steering-wheel flange. When speed control is active, the template can publish
zero accelerator/brake pedal intent through the driver environment while the
VCU still controls actuator requests downstream.

The same pattern applies to the VCU. The VCU is a controller subscriber and
publisher, not a bag of raw public pins: it reads driver intent, chassis speed,
battery voltage/current, and motor speed from the buses, then publishes
inverter/motor requests such as
`controlBus.electricMotorControlBus.powerRequest` and mechanical brake requests
such as `controlBus.brakesControlBus.mechanicalBrakeTorqueRequest`.
For PI speed control, positive torque demand goes to the electric-drive path.
Negative torque demand is split by the regen blend; the default blend is zero,
so the negative demand is published as a mechanical brake request.

Atmosphere follows the same ownership rule through the BobLib `AtmosphereBus`:
the atmosphere model publishes wind velocity, density, temperature, humidity,
and pressure; aero subscribes to wind and density and combines those values with
its connected chassis frame velocity to compute relative airspeed locally.
Atmosphere models should not expose separate public `RealOutput` pins for these
shared measurements; the bus is the consumer-facing signal surface.

Bus values are signals, even when today's producer computes them from
parameters. A constant atmosphere may publish pressure and temperature from
fixed parameters now, but the same bus contract can later carry altitude
effects, weather maps, stochastic pressure or temperature noise, or sensitivity
study perturbations without changing the aero or controller wiring.

## What Belongs On The Bus

Use the bus for standardized cross-subsystem intent, status, limits, and
measured values that are meaningful at the vehicle boundary.

Good candidates:

- driver intent: steering-wheel angle, accelerator pedal, brake pedal, inverter
  enable, gear request, gearbox mode, ignition, and direct EV torque intent
  published by a driver-environment adapter onto the appropriate domain bus
- chassis telemetry: vehicle speed, per-corner ride heights, yaw rate,
  steering-wheel angle, or other broadly useful motion states
- driveline telemetry: motor-side speed, differential input speed, halfshaft
  torque
- battery, inverter, and motor telemetry: voltage, current, speed, torque,
  power, thermal limits, state, faults, and mode flags
- brake requests and telemetry: VCU-owned mechanical brake torque requests and
  brake-owned wheel-speed measurements
- atmosphere telemetry: wind velocity, density, temperature, humidity, and
  pressure on BobLib's `AtmosphereBus`
- controller or logger inputs that should read the standard vehicle signal
  namespace

For measured values, the owning subsystem should publish the signal to its
domain bus. A controller, logger, display, or test harness then reads the value
through its own `controlBus` connection.
Treat parameter-backed values the same way when they may become time varying:
publish the resulting signal on the bus rather than wiring consumers directly
to the parameter owner.

```txt
// Inside a chassis adapter
VehicleInterfaces.Interfaces.ChassisBus chassisBus;

connect(controlBus.chassisBus, chassisBus);

connect(rideHeight_1BusSignal, chassisBus.rideHeight_1);
connect(rideHeight_2BusSignal, chassisBus.rideHeight_2);
connect(rideHeight_3BusSignal, chassisBus.rideHeight_3);
connect(rideHeight_4BusSignal, chassisBus.rideHeight_4);
connect(vehicleSpeedBusSignal, chassisBus.vehicleSpeed);
```

```txt
// Inside aero or VCU adapter
connect(controlBus.chassisBus, chassisBus);
connect(chassisBus.rideHeight_1, rideHeight_1BusTap);
connect(chassisBus.vehicleSpeed, vehicleSpeedBusTap);
```

```txt
// Inside aero adapter
connect(atmosphereBus.airDensity, airDensityBusTap);
connect(atmosphereBus.windVelocityWorld, windVelocityWorldBusTap);
```

This is cleaner than routing every standard-ish sensed value through explicit
`BaseVehicleSim` signal connectors. The assembly stays mostly physical, and the
controller or telemetry model becomes the place where measured signals become
useful.

## What Stays Explicit

The control bus should not replace physical connectors. Wheel hubs, MultiBody
frames, rotational flanges, electrical pins, aero load frames, and contact-patch
frames should remain explicit physical connections.

It also should not carry BobLib-private implementation detail unless that
signal is intentionally promoted into the public VehicleInterfaces-level
contract. Use direct connectors or equations for local plant wiring, such as:

- inverter-to-motor modeled power transfer in the current explicit plant path
- raw geometry, frames, flanges, contact mechanics, and dense internal state

Per-corner values such as wheel speeds, normal loads, ride heights, and steering
angles can be bus signals when a VCU, logger, or standard subsystem needs them
as control telemetry. Raw frames and force paths should stay physical.

## BobLib Split

For BobLib, use this split:

| Signal path | Use it for |
| :-- | :-- |
| `controlBus` | Shared VehicleInterfaces-standard coordination between subsystems |
| `controlBus.driverBus` | Driver-environment-owned intent such as steering, pedals, inverter enable, gear request, gearbox mode, and ignition |
| `controlBus.chassisBus` | Chassis-owned measurements such as `rideHeight_1..4` and `vehicleSpeed` |
| `controlBus.batteryBus` | Battery-owned terminal measurements such as `voltage`, `current`, `power`, `soc`, and `soe` |
| `controlBus.electricMotorBus` | Motor-owned measurements such as `speed`, `mechanicalPower`, `torqueCommand`, and `torqueLimit` |
| `controlBus.electricMotorControlBus` | Electric-drive requests, including driver-environment direct EV intent and VCU-owned requests such as `powerRequest`, `limitedTorqueCommand`, `regenTorqueLimit`, and `vcuActive` |
| `controlBus.brakesControlBus` | VCU-owned mechanical brake requests such as `mechanicalBrakeTorqueRequest` |
| `controlBus.brakesBus` | Brake-owned measurements such as wheel speeds |
| `AtmosphereBus` | Atmosphere-owned measurements such as `windVelocityWorld`, `airDensity`, `airTemperature`, `relativeHumidity`, and `pressure` |
| other subsystem domain buses | Published telemetry, accepted commands, limits, faults, and status for that subsystem |
| explicit physical connectors | Plant wiring, load paths, geometry, electrical terminals, frames, flanges, and local implementation detail |

Keep the public VCU adapter bus-shaped. Its internal `VCUCore` can still use
explicit command and sensor pins so controller equations stay small, but the
vehicle assembly should not wire raw VCU sensors and commands around the
shared bus.

The mental model: the control bus is not the sensor and not the storage. It is
the named signal harness. If a sensor publishes a value and no subsystem reads
it, the value is simply available. A VCU turns those values into control action;
a logger or telemetry adapter can turn them into formatted or stored data.
