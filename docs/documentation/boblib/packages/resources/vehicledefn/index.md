# BobLib.Resources.VehicleDefn

Concrete vehicle definitions. These records aggregate all subsystem parameter records into a complete vehicle configuration.


This package is parameter-oriented. The records here should generally remain free of simulation logic and should be safe to reuse across models, runners, and standard workflows.

## Package path

```modelica
BobLib.Resources.VehicleDefn
```

## Contents

| Item | Type | Purpose |
|:--|:--|:--|
| `OrionRecord` | record | Parameter or output record. |

## How this package fits

This package contributes to the BobLib Modelica library structure and is documented from the current package contents.

## Models, records, and functions

### `OrionRecord`

- **Kind:** `record`
- **File:** `Resources/VehicleDefn/OrionRecord.mo`
- **Imports:** `BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates…`, `TireModel = BobLib.Resources.VehicleRecord.Chassis.Suspensi…`, `Wheel = BobLib.Resources.VehicleRecord.Chassis.Suspension.T…`, `Rack = BobLib.Resources.VehicleRecord.Chassis.Suspension.Te…`, `Stabar = BobLib.Resources.VehicleRecord.Chassis.Suspension.…`

**Key parameters**

| Parameter declaration |
|:--|
| `Axle.AxleDWRecord pFrAxleDW( bellcrankPivot = {-0.042144464098, 0.250754351932, 0.370010000136}, bellcrankPivotAxis = {0.95754655, -0.26587…` |
| `Axle.AxleDWRecord pRrAxleDW( bellcrankPivot = {-1.39886851, 0.29230126, 0.1016}, bellcrankPivotAxis = {0.8879624105984821, 0.30270851685861…` |
| `Stabar.StabarRecord pFrStabar( leftArmEnd = {-0.03682914, 0.2667, 0.11597939}, leftBarEnd = {-0.10664664, 0.2667, 0.11811}, barRate = 1)` |
| `Stabar.StabarRecord pRrStabar( leftArmEnd = {-1.43001283, 0.3032125, 0.4054766}, leftBarEnd = {-1.3925183, 0.3032125, 0.41224196}, barRate …` |
| `Wheel.Templates.PartialWheelRecord pFrPartialWheel( R0 = 0.2045, rimR0 = 0.2045*0.625, rimWidth = 0.2045*0.625*1.4, staticAlpha = 0, // in …` |
| `Wheel.Templates.PartialWheelRecord pRrPartialWheel( R0 = 0.2045, rimR0 = 0.2045*0.625, rimWidth = 0.2045*0.625*1.4, staticAlpha = 0, // in …` |
| `Rack.RackAndPinionRecord pFrRack( leftPickup = {0.05715, 0.2260092, 0.1137158}, cFactor = 0.0889)` |
| `Rack.RackAndPinionRecord pRrRack( leftPickup = {-1.37634980, 0.28971240, 0.17000220}, cFactor = 0.0889)` |
| `DW.WishboneUprightLoopRecord pFrDW( upperFore_i = {0.1016, 0.237744, 0.2143252}, upperAft_i = {-0.0680974, 0.2356358, 0.215138}, lowerFore_…` |
| `DW.WishboneUprightLoopRecord pRrDW( upperFore_i = {-1.27914400, 0.29723080, 0.24823420}, upperAft_i = {-1.49938740, 0.28384500, 0.24343360}…` |
| `Axle.Templates.AxleMassRecord pFrAxleMass( unsprungMass = MassRecord(m = 7.8160579, rCM = {-0.0061298, 0.60174377, 0.19797979}, inertia = {…` |
| `Axle.Templates.AxleMassRecord pRrAxleMass( unsprungMass = MassRecord(m = 7.35802418, rCM = {-1.54948701, 0.60559861, 0.20104023}, inertia =…` |
| `MassRecord pSprungMass(m = 200, rCM = {-61 / 2 * 0.0254, 0, 11 * 0.0254}, inertia = \{\{30, 1, 1}, {1, 40, 1}, {1, 1, 50\}\})` |
| `Wheel.Wheel1DOF_YRecord pFrTire1DOF_YParams(wheelJ = 0.02)` |
| `Wheel.Wheel1DOF_ZRecord pFrTire1DOF_ZParams(wheelC = 98947, wheelD = 115.844)` |
| `Wheel.Wheel1DOF_YRecord pRrTire1DOF_YParams(wheelJ = 0.02)` |
| `Wheel.Wheel1DOF_ZRecord pRrTire1DOF_ZParams(wheelC = 98947, wheelD = 115.844)` |
| `TireModel.MF52Record pFrTireModel( // Setup setup = TireModel.SetupRecord(FNOMIN = 654.0, UNLOADED_RADIUS = pFrPartialWheel.R0), // Fx - Pu…` |
| `TireModel.MF52Record pRrTireModel( // Setup setup = TireModel.SetupRecord(FNOMIN = 654.0, UNLOADED_RADIUS = pFrPartialWheel.R0), // Fx - Pu…` |

Use this record as a configuration container. The record should be passed into models through `parameter` declarations rather than duplicated as independent scalar parameters.

## Documentation notes

- Treat records as the canonical parameter interface for the corresponding model.
- Keep names aligned with the physical subsystem they configure.
- Avoid storing derived analysis metrics here; those belong in BobSim outputs or reports.
