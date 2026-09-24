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
the vehicle subsystems. It carries low-bandwidth control and telemetry signals.
Physical connections stay on explicit connectors.

## Assembly pattern

A vehicle assembly owns one `controlBus`. Each subsystem connects its inherited
`controlBus` to that bus. Inside the subsystem, the model taps only the nested
domain bus that belongs to its contract, such as `controlBus.chassisBus`.

VehicleInterfaces 2.0.2 atmosphere interfaces have no control-bus connector.
BobLib adds a sibling bus, `BobLib.Atmospheres.Interfaces.AtmosphereBus`, for
atmosphere-owned measurements. The stock `controlBus` stays compatible with
ordinary VehicleInterfaces subsystems.

::: details Vehicle-level wiring in `BaseVehicleSim`

```txt
VehicleInterfaces.Interfaces.ControlBus controlBus;

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
connect(atmosphere.atmosphereBus, aeroModel.atmosphereBus);

connect(vcu.steeringAngleCommand, driverEnvironment.steeringAngleCommand);
connect(vcu.acceleratorPedalCommand, driverEnvironment.acceleratorPedalCommand);
connect(vcu.brakePedalCommand, driverEnvironment.brakePedalCommand);
connect(vcu.inverterEnableCommand, controlBus.driverBus.inverterEnable);
connect(driverEnvironment.steeringWheel, chassis.steeringWheel);
```

:::

## Publish and subscribe

BobLib follows one ownership rule:

- The subsystem that owns a value publishes it on its domain bus.
- Any subsystem that needs the value reads it through its own `controlBus`
  connection.
- The vehicle assembly does not relay signals between two subsystem internals.

Examples from the standard vehicle:

| Owner | Publishes | Readers |
| :-- | :-- | :-- |
| Chassis | `chassisBus.rideHeight_1` to `rideHeight_4`, `chassisBus.vehicleSpeed` | Aero reads ride heights. The VCU reads vehicle speed. |
| Driver environment | `driverBus` intent | The VCU. The chassis gets steering through the physical steering-wheel flange. |
| VCU | `electricMotorControlBus.powerRequest`, `brakesControlBus.mechanicalBrakeTorqueRequest` | The inverter reads the power request. The brakes read the brake request. |
| Atmosphere | `AtmosphereBus` wind velocity, density, temperature, humidity, pressure | Aero |

The VCU reads driver intent, chassis speed, battery voltage and current, and
motor speed from the buses. It publishes the electric-drive and brake requests.
For PI speed control, positive torque demand goes to the electric drive.
`regenBrakeBlend` splits negative demand. Its default is `0`, so all negative
demand becomes a mechanical brake request.

Aero reads the `AtmosphereBus` signals. It combines wind and density with its
chassis frame velocity to compute relative airspeed locally. Atmosphere models
do not expose separate `RealOutput` pins for these values.

Bus values are signals even when the producer computes them from parameters. A
constant atmosphere publishes fixed pressure and temperature today. A later
model can publish altitude effects, weather maps, or noise on the same bus
without a change to the aero or controller wiring.

## Signal map

| Signal path | Carries |
| :-- | :-- |
| `controlBus` | Shared VehicleInterfaces coordination between subsystems |
| `controlBus.driverBus` | Driver intent: `steeringWheelAngle`, `acceleratorPedalPosition`, `brakePedalPosition`, `inverterEnable`, `gearboxMode`, `ignition` |
| `controlBus.chassisBus` | Chassis measurements: `rideHeight_1..4`, `vehicleSpeed`, `Fz_1..4`, `bodyAcceleration_2` |
| `controlBus.batteryBus` | Battery terminal measurements: `voltage`, `current`, `power`, `soc`, `soe` |
| `controlBus.electricMotorBus` | Motor measurements: `speed`, `mechanicalPower`, `electricalPower`, `torqueCommand`, `torqueLimit` |
| `controlBus.electricMotorControlBus` | Electric-drive requests: VCU-owned `powerRequest`, `limitedTorqueCommand`, `regenTorqueLimit`, `vcuActive`, and driver-environment `driverTorqueCommand`, `driverRegenTorqueLimit` |
| `controlBus.brakesControlBus` | VCU-owned `mechanicalBrakeTorqueRequest` |
| `controlBus.brakesBus` | Brake-owned `wheelSpeed_1..4` |
| `controlBus.drivelineBus` | Driveline measurements: `motorSideSpeed`, `diffInputSpeed`, `leftHalfshaftTorque`, `rightHalfshaftTorque` |
| `AtmosphereBus` | `windVelocityWorld`, `airDensity`, `airTemperature`, `relativeHumidity`, `pressure` |
| Other domain buses | Telemetry, accepted commands, limits, faults, and status for that subsystem |
| Explicit physical connectors | Plant wiring, load paths, geometry, electrical terminals, frames, and flanges |

## What belongs on the bus

Put a signal on the bus when it is intent, status, a limit, or a measurement
that means something at the vehicle boundary. A controller, logger, display, or
test harness then reads it through its own `controlBus` connection. Publish a
parameter-backed value the same way if it may become time-varying.

This keeps the assembly mostly physical. You do not route each sensed value
through explicit `BaseVehicleSim` signal connectors.

::: details Subsystem wiring examples

A chassis adapter publishes:

```txt
VehicleInterfaces.Interfaces.ChassisBus chassisBus;

connect(controlBus.chassisBus, chassisBus);
connect(rideHeight_1BusSignal.y, chassisBus.rideHeight_1);
connect(rideHeight_2BusSignal.y, chassisBus.rideHeight_2);
connect(rideHeight_3BusSignal.y, chassisBus.rideHeight_3);
connect(rideHeight_4BusSignal.y, chassisBus.rideHeight_4);
connect(vehicleSpeedBusSignal.y, chassisBus.vehicleSpeed);
```

The aero adapter subscribes:

```txt
connect(controlBus.chassisBus, chassisBus);
connect(chassisBus.rideHeight_1, rideHeight_1BusTap);
connect(atmosphereBus.airDensity, airDensityBusTap);
connect(atmosphereBus.windVelocityWorld, windVelocityWorldBusTap);
```

:::

## What stays explicit

The bus does not replace physical connectors. Wheel hubs, MultiBody frames,
rotational flanges, electrical pins, aero load frames, and contact-patch frames
stay explicit.

The bus also does not carry BobLib-private implementation detail unless that
signal becomes part of the public contract. Use direct connectors or equations
for local plant wiring, such as:

- inverter-to-motor power transfer in the current plant path
- raw geometry, frames, flanges, contact mechanics, and dense internal state

Per-corner values such as wheel speeds, normal loads, and ride heights can be
bus signals when a VCU, logger, or subsystem needs them as telemetry. Raw
frames and force paths stay physical.

The public VCU adapter stays bus-shaped. Its internal `VCUCore` uses explicit
command and sensor pins to keep the controller equations small. The vehicle
assembly does not wire raw VCU sensors and commands around the bus.

The bus is a named signal harness, not a sensor or a store. If a subsystem
publishes a value that nothing reads, the value is available and unused. A VCU
turns bus values into control action. A logger or telemetry adapter turns them
into stored data.
