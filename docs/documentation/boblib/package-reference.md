# BobLib package reference

This reference mirrors the package structure found in the current BobLib source tree. Each package page lists nested packages, Modelica elements, important parameters/interfaces, and notes about how the package fits into the framework.

## Top-level packages

| Package | Purpose |
|:--|:--|
| [BobLib](/documentation/boblib/packages/) | Root BobLib Modelica package. It ties together the vehicle model, standard-test models, reusable records, utilities, and tests. |
| [BobLib.Build](/documentation/boblib/packages/build/) | Build output staging area for generated native executables and FMUs. |
| [BobLib.Resources](/documentation/boblib/packages/resources/) | Parameter and record library. It stores vehicle definitions, reusable parameter records, standard-test records, and visual-export records. |
| [BobLib.Standards](/documentation/boblib/packages/standards/) | Standard-test and external-interface models. These models wrap the vehicle model for standard workflows, FMI export, and standard simulation execution. |
| [BobLib.Tests](/documentation/boblib/packages/tests/) | Modelica test models and smoke tests for vehicle subsystems and utilities. |
| [BobLib.Utilities](/documentation/boblib/packages/utilities/) | Reusable math, mechanics, and FMI utilities used across BobLib. |
| [BobLib.Vehicle](/documentation/boblib/packages/vehicle/) | Physical vehicle modeling layer. This package contains the full vehicle assembly and the major subsystem packages used to build it. |

## Full package list

| Package | Source path |
|:--|:--|
| [BobLib](/documentation/boblib/packages/) | `/` |
| [BobLib.Build](/documentation/boblib/packages/build/) | `Build` |
| [BobLib.Build.FMU](/documentation/boblib/packages/build/fmu/) | `Build/FMU` |
| [BobLib.Build.Native](/documentation/boblib/packages/build/native/) | `Build/Native` |
| [BobLib.Resources](/documentation/boblib/packages/resources/) | `Resources` |
| [BobLib.Resources.StandardRecord](/documentation/boblib/packages/resources/standardrecord/) | `Resources/StandardRecord` |
| [BobLib.Resources.VehicleDefn](/documentation/boblib/packages/resources/vehicledefn/) | `Resources/VehicleDefn` |
| [BobLib.Resources.VehicleRecord](/documentation/boblib/packages/resources/vehiclerecord/) | `Resources/VehicleRecord` |
| [BobLib.Resources.VehicleRecord.Chassis](/documentation/boblib/packages/resources/vehiclerecord/chassis/) | `Resources/VehicleRecord/Chassis` |
| [BobLib.Resources.VehicleRecord.Chassis.Suspension](/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/) | `Resources/VehicleRecord/Chassis/Suspension` |
| [BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates](/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/) | `Resources/VehicleRecord/Chassis/Suspension/Templates` |
| [BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.DoubleWishbone](/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/doublewishbone/) | `Resources/VehicleRecord/Chassis/Suspension/Templates/DoubleWishbone` |
| [BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.Stabar](/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/stabar/) | `Resources/VehicleRecord/Chassis/Suspension/Templates/Stabar` |
| [BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.SteeringRack](/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/steeringrack/) | `Resources/VehicleRecord/Chassis/Suspension/Templates/SteeringRack` |
| [BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.Tire](/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/tire/) | `Resources/VehicleRecord/Chassis/Suspension/Templates/Tire` |
| [BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.Tire.MF52](/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/tire/mf52/) | `Resources/VehicleRecord/Chassis/Suspension/Templates/Tire/MF52` |
| [BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.Tire.MF52.CombinedSlip](/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/tire/mf52/combinedslip/) | `Resources/VehicleRecord/Chassis/Suspension/Templates/Tire/MF52/CombinedSlip` |
| [BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.Tire.MF52.PureSlip](/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/tire/mf52/pureslip/) | `Resources/VehicleRecord/Chassis/Suspension/Templates/Tire/MF52/PureSlip` |
| [BobLib.Resources.VehicleRecord.Chassis.Suspension.Templates.Tire.Templates](/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/tire/templates/) | `Resources/VehicleRecord/Chassis/Suspension/Templates/Tire/Templates` |
| [BobLib.Resources.VisualRecord](/documentation/boblib/packages/resources/visualrecord/) | `Resources/VisualRecord` |
| [BobLib.Resources.VisualRecord.Chassis](/documentation/boblib/packages/resources/visualrecord/chassis/) | `Resources/VisualRecord/Chassis` |
| [BobLib.Resources.VisualRecord.Chassis.Suspension](/documentation/boblib/packages/resources/visualrecord/chassis/suspension/) | `Resources/VisualRecord/Chassis/Suspension` |
| [BobLib.Standards](/documentation/boblib/packages/standards/) | `Standards` |
| [BobLib.Standards.StandardSim](/documentation/boblib/packages/standards/standardsim/) | `Standards/StandardSim` |
| [BobLib.Standards.StandardSim.Templates](/documentation/boblib/packages/standards/standardsim/templates/) | `Standards/StandardSim/Templates` |
| [BobLib.Tests](/documentation/boblib/packages/tests/) | `Tests` |
| [BobLib.Tests.TestUtilities](/documentation/boblib/packages/tests/testutilities/) | `Tests/TestUtilities` |
| [BobLib.Tests.TestUtilities.TestMath](/documentation/boblib/packages/tests/testutilities/testmath/) | `Tests/TestUtilities/TestMath` |
| [BobLib.Tests.TestUtilities.TestMechanics](/documentation/boblib/packages/tests/testutilities/testmechanics/) | `Tests/TestUtilities/TestMechanics` |
| [BobLib.Tests.TestUtilities.TestMechanics.TestMultibody](/documentation/boblib/packages/tests/testutilities/testmechanics/testmultibody/) | `Tests/TestUtilities/TestMechanics/TestMultibody` |
| [BobLib.Tests.TestVehicle](/documentation/boblib/packages/tests/testvehicle/) | `Tests/TestVehicle` |
| [BobLib.Tests.TestVehicle.TestChassis](/documentation/boblib/packages/tests/testvehicle/testchassis/) | `Tests/TestVehicle/TestChassis` |
| [BobLib.Tests.TestVehicle.TestChassis.TestBody](/documentation/boblib/packages/tests/testvehicle/testchassis/testbody/) | `Tests/TestVehicle/TestChassis/TestBody` |
| [BobLib.Tests.TestVehicle.TestChassis.TestSuspension](/documentation/boblib/packages/tests/testvehicle/testchassis/testsuspension/) | `Tests/TestVehicle/TestChassis/TestSuspension` |
| [BobLib.Tests.TestVehicle.TestChassis.TestSuspension.TestLinkages](/documentation/boblib/packages/tests/testvehicle/testchassis/testsuspension/testlinkages/) | `Tests/TestVehicle/TestChassis/TestSuspension/TestLinkages` |
| [BobLib.Tests.TestVehicle.TestChassis.TestSuspension.TestTemplates](/documentation/boblib/packages/tests/testvehicle/testchassis/testsuspension/testtemplates/) | `Tests/TestVehicle/TestChassis/TestSuspension/TestTemplates` |
| [BobLib.Tests.TestVehicle.TestChassis.TestSuspension.TestTemplates.TestDoubleWishbone](/documentation/boblib/packages/tests/testvehicle/testchassis/testsuspension/testtemplates/testdoublewishbone/) | `Tests/TestVehicle/TestChassis/TestSuspension/TestTemplates/TestDoubleWishbone` |
| [BobLib.Tests.TestVehicle.TestChassis.TestSuspension.TestTemplates.TestStabar](/documentation/boblib/packages/tests/testvehicle/testchassis/testsuspension/testtemplates/teststabar/) | `Tests/TestVehicle/TestChassis/TestSuspension/TestTemplates/TestStabar` |
| [BobLib.Tests.TestVehicle.TestChassis.TestSuspension.TestTemplates.TestSteeringRack](/documentation/boblib/packages/tests/testvehicle/testchassis/testsuspension/testtemplates/teststeeringrack/) | `Tests/TestVehicle/TestChassis/TestSuspension/TestTemplates/TestSteeringRack` |
| [BobLib.Tests.TestVehicle.TestChassis.TestSuspension.TestTemplates.TestTire](/documentation/boblib/packages/tests/testvehicle/testchassis/testsuspension/testtemplates/testtire/) | `Tests/TestVehicle/TestChassis/TestSuspension/TestTemplates/TestTire` |
| [BobLib.Tests.TestVehicle.TestChassis.TestSuspension.TestTemplates.TestTire.TestMF52](/documentation/boblib/packages/tests/testvehicle/testchassis/testsuspension/testtemplates/testtire/testmf52/) | `Tests/TestVehicle/TestChassis/TestSuspension/TestTemplates/TestTire/TestMF52` |
| [BobLib.Tests.TestVehicle.TestPowertrain](/documentation/boblib/packages/tests/testvehicle/testpowertrain/) | `Tests/TestVehicle/TestPowertrain` |
| [BobLib.Utilities](/documentation/boblib/packages/utilities/) | `Utilities` |
| [BobLib.Utilities.FMI](/documentation/boblib/packages/utilities/fmi/) | `Utilities/FMI` |
| [BobLib.Utilities.Math](/documentation/boblib/packages/utilities/math/) | `Utilities/Math` |
| [BobLib.Utilities.Math.Tensor](/documentation/boblib/packages/utilities/math/tensor/) | `Utilities/Math/Tensor` |
| [BobLib.Utilities.Math.Vector](/documentation/boblib/packages/utilities/math/vector/) | `Utilities/Math/Vector` |
| [BobLib.Utilities.Mechanics](/documentation/boblib/packages/utilities/mechanics/) | `Utilities/Mechanics` |
| [BobLib.Utilities.Mechanics.Multibody](/documentation/boblib/packages/utilities/mechanics/multibody/) | `Utilities/Mechanics/Multibody` |
| [BobLib.Vehicle](/documentation/boblib/packages/vehicle/) | `Vehicle` |
| [BobLib.Vehicle.Aero](/documentation/boblib/packages/vehicle/aero/) | `Vehicle/Aero` |
| [BobLib.Vehicle.Chassis](/documentation/boblib/packages/vehicle/chassis/) | `Vehicle/Chassis` |
| [BobLib.Vehicle.Chassis.Body](/documentation/boblib/packages/vehicle/chassis/body/) | `Vehicle/Chassis/Body` |
| [BobLib.Vehicle.Chassis.Suspension](/documentation/boblib/packages/vehicle/chassis/suspension/) | `Vehicle/Chassis/Suspension` |
| [BobLib.Vehicle.Chassis.Suspension.Linkages](/documentation/boblib/packages/vehicle/chassis/suspension/linkages/) | `Vehicle/Chassis/Suspension/Linkages` |
| [BobLib.Vehicle.Chassis.Suspension.Linkages.Templates](/documentation/boblib/packages/vehicle/chassis/suspension/linkages/templates/) | `Vehicle/Chassis/Suspension/Linkages/Templates` |
| [BobLib.Vehicle.Chassis.Suspension.Templates](/documentation/boblib/packages/vehicle/chassis/suspension/templates/) | `Vehicle/Chassis/Suspension/Templates` |
| [BobLib.Vehicle.Chassis.Suspension.Templates.DoubleWishbone](/documentation/boblib/packages/vehicle/chassis/suspension/templates/doublewishbone/) | `Vehicle/Chassis/Suspension/Templates/DoubleWishbone` |
| [BobLib.Vehicle.Chassis.Suspension.Templates.Stabar](/documentation/boblib/packages/vehicle/chassis/suspension/templates/stabar/) | `Vehicle/Chassis/Suspension/Templates/Stabar` |
| [BobLib.Vehicle.Chassis.Suspension.Templates.SteeringRack](/documentation/boblib/packages/vehicle/chassis/suspension/templates/steeringrack/) | `Vehicle/Chassis/Suspension/Templates/SteeringRack` |
| [BobLib.Vehicle.Chassis.Suspension.Templates.Tire](/documentation/boblib/packages/vehicle/chassis/suspension/templates/tire/) | `Vehicle/Chassis/Suspension/Templates/Tire` |
| [BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52](/documentation/boblib/packages/vehicle/chassis/suspension/templates/tire/mf52/) | `Vehicle/Chassis/Suspension/Templates/Tire/MF52` |
| [BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52.CombinedSlip](/documentation/boblib/packages/vehicle/chassis/suspension/templates/tire/mf52/combinedslip/) | `Vehicle/Chassis/Suspension/Templates/Tire/MF52/CombinedSlip` |
| [BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52.PureSlip](/documentation/boblib/packages/vehicle/chassis/suspension/templates/tire/mf52/pureslip/) | `Vehicle/Chassis/Suspension/Templates/Tire/MF52/PureSlip` |
| [BobLib.Vehicle.Chassis.Suspension.Templates.Tire.MF52.SlipModel](/documentation/boblib/packages/vehicle/chassis/suspension/templates/tire/mf52/slipmodel/) | `Vehicle/Chassis/Suspension/Templates/Tire/MF52/SlipModel` |
| [BobLib.Vehicle.Chassis.Suspension.Templates.Tire.TirePhysics](/documentation/boblib/packages/vehicle/chassis/suspension/templates/tire/tirephysics/) | `Vehicle/Chassis/Suspension/Templates/Tire/TirePhysics` |
| [BobLib.Vehicle.Chassis.Suspension.Templates.Tire.TirePhysics.Templates](/documentation/boblib/packages/vehicle/chassis/suspension/templates/tire/tirephysics/templates/) | `Vehicle/Chassis/Suspension/Templates/Tire/TirePhysics/Templates` |
| [BobLib.Vehicle.Electronics](/documentation/boblib/packages/vehicle/electronics/) | `Vehicle/Electronics` |
| [BobLib.Vehicle.Electronics.Controllers](/documentation/boblib/packages/vehicle/electronics/controllers/) | `Vehicle/Electronics/Controllers` |
| [BobLib.Vehicle.Powertrain](/documentation/boblib/packages/vehicle/powertrain/) | `Vehicle/Powertrain` |
| [BobLib.Vehicle.Powertrain.Battery](/documentation/boblib/packages/vehicle/powertrain/battery/) | `Vehicle/Powertrain/Battery` |
| [BobLib.Vehicle.Powertrain.Battery.Templates](/documentation/boblib/packages/vehicle/powertrain/battery/templates/) | `Vehicle/Powertrain/Battery/Templates` |
| [BobLib.Vehicle.Powertrain.Drivetrain](/documentation/boblib/packages/vehicle/powertrain/drivetrain/) | `Vehicle/Powertrain/Drivetrain` |
| [BobLib.Vehicle.Powertrain.Electronics](/documentation/boblib/packages/vehicle/powertrain/electronics/) | `Vehicle/Powertrain/Electronics` |