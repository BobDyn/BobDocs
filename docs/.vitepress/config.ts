import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid(
  defineConfig({
    title: "BobDyn",
    description: "A high-fidelity, open-source vehicle simulation framework",

    cleanUrls: true,

    themeConfig: {
      logo: "/bob.png",
      siteTitle: "BobDyn",

      nav: [
        { text: "Startup Guide", link: "/startup-guide/" },
        { text: "Use Guide", link: "/use-guide/" },
        { text: "Documentation", link: "/documentation/" },
        { text: "Reference", link: "/reference/" },
      ],

      sidebar: {
        "/startup-guide/": [
          {
            text: "Startup Guide",
            items: [{ text: "Overview", link: "/startup-guide/" }],
          },
        ],

        "/use-guide/": [
          {
            text: "Use Guide",
            items: [{ text: "Overview", link: "/use-guide/" }],
          },
        ],

        "/documentation/": [
          {
            text: "Documentation",
            collapsed: false,
            items: [
              { text: "Overview", link: "/documentation/" },
              {
                text: "BobLib",
                collapsed: true,
                items: [
                  { text: "Overview", link: "/documentation/boblib/" },
                  {
                    text: "Modelica Sub-Packages",
                    collapsed: true,
                    items: [
                      {
                        text: "Vehicle",
                        collapsed: true,
                        items: [
                          { text: "Overview", link: "/documentation/boblib/packages/vehicle/" },
                          { text: "Aero", link: "/documentation/boblib/packages/vehicle/aero/" },
                          {
                            text: "Chassis",
                            collapsed: true,
                            items: [
                              { text: "Overview", link: "/documentation/boblib/packages/vehicle/chassis/" },
                              { text: "Body", link: "/documentation/boblib/packages/vehicle/chassis/body/" },
                              {
                                text: "Suspension",
                                collapsed: true,
                                items: [
                                  { text: "Overview", link: "/documentation/boblib/packages/vehicle/chassis/suspension/" },
                                  {
                                    text: "Linkages",
                                    collapsed: true,
                                    items: [
                                      { text: "Overview", link: "/documentation/boblib/packages/vehicle/chassis/suspension/linkages/" },
                                      { text: "Templates", link: "/documentation/boblib/packages/vehicle/chassis/suspension/linkages/templates/" },
                                    ],
                                  },
                                  {
                                    text: "Templates",
                                    collapsed: true,
                                    items: [
                                      { text: "Overview", link: "/documentation/boblib/packages/vehicle/chassis/suspension/templates/" },
                                      { text: "DoubleWishbone", link: "/documentation/boblib/packages/vehicle/chassis/suspension/templates/doublewishbone/" },
                                      { text: "Stabar", link: "/documentation/boblib/packages/vehicle/chassis/suspension/templates/stabar/" },
                                      { text: "SteeringRack", link: "/documentation/boblib/packages/vehicle/chassis/suspension/templates/steeringrack/" },
                                      {
                                        text: "Tire",
                                        collapsed: true,
                                        items: [
                                          { text: "Overview", link: "/documentation/boblib/packages/vehicle/chassis/suspension/templates/tire/" },
                                          {
                                            text: "MF52",
                                            collapsed: true,
                                            items: [
                                              { text: "Overview", link: "/documentation/boblib/packages/vehicle/chassis/suspension/templates/tire/mf52/" },
                                              { text: "CombinedSlip", link: "/documentation/boblib/packages/vehicle/chassis/suspension/templates/tire/mf52/combinedslip/" },
                                              { text: "PureSlip", link: "/documentation/boblib/packages/vehicle/chassis/suspension/templates/tire/mf52/pureslip/" },
                                              { text: "SlipModel", link: "/documentation/boblib/packages/vehicle/chassis/suspension/templates/tire/mf52/slipmodel/" },
                                            ],
                                          },
                                          {
                                            text: "TirePhysics",
                                            collapsed: true,
                                            items: [
                                              { text: "Overview", link: "/documentation/boblib/packages/vehicle/chassis/suspension/templates/tire/tirephysics/" },
                                              { text: "Templates", link: "/documentation/boblib/packages/vehicle/chassis/suspension/templates/tire/tirephysics/templates/" },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            text: "Electronics",
                            collapsed: true,
                            items: [
                              { text: "Overview", link: "/documentation/boblib/packages/vehicle/electronics/" },
                              { text: "Controllers", link: "/documentation/boblib/packages/vehicle/electronics/controllers/" },
                            ],
                          },
                          {
                            text: "Powertrain",
                            collapsed: true,
                            items: [
                              { text: "Overview", link: "/documentation/boblib/packages/vehicle/powertrain/" },
                              {
                                text: "Battery",
                                collapsed: true,
                                items: [
                                  { text: "Overview", link: "/documentation/boblib/packages/vehicle/powertrain/battery/" },
                                  { text: "Templates", link: "/documentation/boblib/packages/vehicle/powertrain/battery/templates/" },
                                ],
                              },
                              { text: "Drivetrain", link: "/documentation/boblib/packages/vehicle/powertrain/drivetrain/" },
                              { text: "Electronics", link: "/documentation/boblib/packages/vehicle/powertrain/electronics/" },
                            ],
                          },
                        ],
                      },
                      {
                        text: "Standards",
                        collapsed: true,
                        items: [
                          { text: "Overview", link: "/documentation/boblib/packages/standards/" },
                          {
                            text: "StandardSim",
                            collapsed: true,
                            items: [
                              { text: "Overview", link: "/documentation/boblib/packages/standards/standardsim/" },
                              { text: "Templates", link: "/documentation/boblib/packages/standards/standardsim/templates/" },
                            ],
                          },
                        ],
                      },
                      {
                        text: "Resources",
                        collapsed: true,
                        items: [
                          { text: "Overview", link: "/documentation/boblib/packages/resources/" },
                          { text: "StandardRecord", link: "/documentation/boblib/packages/resources/standardrecord/" },
                          { text: "VehicleDefn", link: "/documentation/boblib/packages/resources/vehicledefn/" },
                          {
                            text: "VehicleRecord",
                            collapsed: true,
                            items: [
                              { text: "Overview", link: "/documentation/boblib/packages/resources/vehiclerecord/" },
                              {
                                text: "Chassis",
                                collapsed: true,
                                items: [
                                  { text: "Overview", link: "/documentation/boblib/packages/resources/vehiclerecord/chassis/" },
                                  {
                                    text: "Suspension",
                                    collapsed: true,
                                    items: [
                                      { text: "Overview", link: "/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/" },
                                      {
                                        text: "Templates",
                                        collapsed: true,
                                        items: [
                                          { text: "Overview", link: "/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/" },
                                          { text: "DoubleWishbone", link: "/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/doublewishbone/" },
                                          { text: "Stabar", link: "/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/stabar/" },
                                          { text: "SteeringRack", link: "/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/steeringrack/" },
                                          {
                                            text: "Tire",
                                            collapsed: true,
                                            items: [
                                              { text: "Overview", link: "/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/tire/" },
                                              {
                                                text: "MF52",
                                                collapsed: true,
                                                items: [
                                                  { text: "Overview", link: "/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/tire/mf52/" },
                                                  { text: "CombinedSlip", link: "/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/tire/mf52/combinedslip/" },
                                                  { text: "PureSlip", link: "/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/tire/mf52/pureslip/" },
                                                ],
                                              },
                                              { text: "Templates", link: "/documentation/boblib/packages/resources/vehiclerecord/chassis/suspension/templates/tire/templates/" },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                          {
                            text: "VisualRecord",
                            collapsed: true,
                            items: [
                              { text: "Overview", link: "/documentation/boblib/packages/resources/visualrecord/" },
                              {
                                text: "Chassis",
                                collapsed: true,
                                items: [
                                  { text: "Overview", link: "/documentation/boblib/packages/resources/visualrecord/chassis/" },
                                  { text: "Suspension", link: "/documentation/boblib/packages/resources/visualrecord/chassis/suspension/" },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        text: "Utilities",
                        collapsed: true,
                        items: [
                          { text: "Overview", link: "/documentation/boblib/packages/utilities/" },
                          { text: "FMI", link: "/documentation/boblib/packages/utilities/fmi/" },
                          {
                            text: "Math",
                            collapsed: true,
                            items: [
                              { text: "Overview", link: "/documentation/boblib/packages/utilities/math/" },
                              { text: "Tensor", link: "/documentation/boblib/packages/utilities/math/tensor/" },
                              { text: "Vector", link: "/documentation/boblib/packages/utilities/math/vector/" },
                            ],
                          },
                          {
                            text: "Mechanics",
                            collapsed: true,
                            items: [
                              { text: "Overview", link: "/documentation/boblib/packages/utilities/mechanics/" },
                              { text: "Multibody", link: "/documentation/boblib/packages/utilities/mechanics/multibody/" },
                            ],
                          },
                        ],
                      },
                      {
                        text: "Tests",
                        collapsed: true,
                        items: [
                          { text: "Overview", link: "/documentation/boblib/packages/tests/" },
                          {
                            text: "TestUtilities",
                            collapsed: true,
                            items: [
                              { text: "Overview", link: "/documentation/boblib/packages/tests/testutilities/" },
                              { text: "TestMath", link: "/documentation/boblib/packages/tests/testutilities/testmath/" },
                              {
                                text: "TestMechanics",
                                collapsed: true,
                                items: [
                                  { text: "Overview", link: "/documentation/boblib/packages/tests/testutilities/testmechanics/" },
                                  { text: "TestMultibody", link: "/documentation/boblib/packages/tests/testutilities/testmechanics/testmultibody/" },
                                ],
                              },
                            ],
                          },
                          {
                            text: "TestVehicle",
                            collapsed: true,
                            items: [
                              { text: "Overview", link: "/documentation/boblib/packages/tests/testvehicle/" },
                              {
                                text: "TestChassis",
                                collapsed: true,
                                items: [
                                  { text: "Overview", link: "/documentation/boblib/packages/tests/testvehicle/testchassis/" },
                                  { text: "TestBody", link: "/documentation/boblib/packages/tests/testvehicle/testchassis/testbody/" },
                                  {
                                    text: "TestSuspension",
                                    collapsed: true,
                                    items: [
                                      { text: "Overview", link: "/documentation/boblib/packages/tests/testvehicle/testchassis/testsuspension/" },
                                      { text: "TestLinkages", link: "/documentation/boblib/packages/tests/testvehicle/testchassis/testsuspension/testlinkages/" },
                                      {
                                        text: "TestTemplates",
                                        collapsed: true,
                                        items: [
                                          { text: "Overview", link: "/documentation/boblib/packages/tests/testvehicle/testchassis/testsuspension/testtemplates/" },
                                          { text: "TestDoubleWishbone", link: "/documentation/boblib/packages/tests/testvehicle/testchassis/testsuspension/testtemplates/testdoublewishbone/" },
                                          { text: "TestStabar", link: "/documentation/boblib/packages/tests/testvehicle/testchassis/testsuspension/testtemplates/teststabar/" },
                                          { text: "TestSteeringRack", link: "/documentation/boblib/packages/tests/testvehicle/testchassis/testsuspension/testtemplates/teststeeringrack/" },
                                          {
                                            text: "TestTire",
                                            collapsed: true,
                                            items: [
                                              { text: "Overview", link: "/documentation/boblib/packages/tests/testvehicle/testchassis/testsuspension/testtemplates/testtire/" },
                                              { text: "TestMF52", link: "/documentation/boblib/packages/tests/testvehicle/testchassis/testsuspension/testtemplates/testtire/testmf52/" },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                              { text: "TestPowertrain", link: "/documentation/boblib/packages/tests/testvehicle/testpowertrain/" },
                            ],
                          },
                        ],
                      },
                      {
                        text: "Build",
                        collapsed: true,
                        items: [
                          { text: "Overview", link: "/documentation/boblib/packages/build/" },
                          { text: "FMU", link: "/documentation/boblib/packages/build/fmu/" },
                          { text: "Native", link: "/documentation/boblib/packages/build/native/" },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                text: "BobSim",
                collapsed: true,
                items: [
                  { text: "Overview", link: "/documentation/bobsim/" },
                  {
                    text: "_0_Utils",
                    collapsed: true,
                    items: [
                      { text: "Overview", link: "/documentation/bobsim/_0_Utils/" },
                      { text: "Plotting", link: "/documentation/bobsim/_0_Utils/plotting" },
                      { text: "Reporting", link: "/documentation/bobsim/_0_Utils/reporting" },
                    ],
                  },
                  { text: "_1_VisualSim", link: "/documentation/bobsim/_1_VisualSim/" },
                  {
                    text: "_2_EnvelopeSim",
                    collapsed: true,
                    items: [
                      { text: "Overview", link: "/documentation/bobsim/_2_EnvelopeSim/" },
                      { text: "GGV", link: "/documentation/bobsim/_2_EnvelopeSim/ggv" },
                      { text: "YMD", link: "/documentation/bobsim/_2_EnvelopeSim/ymd" },
                    ],
                  },
                  {
                    text: "_3_StandardSim",
                    collapsed: true,
                    items: [
                      { text: "Overview", link: "/documentation/bobsim/_3_StandardSim/" },
                      { text: "Modelica Runner", link: "/documentation/bobsim/_3_StandardSim/modelica-runner" },
                      { text: "FMU Runner", link: "/documentation/bobsim/_3_StandardSim/fmu-runner" },
                      { text: "ISO 4138", link: "/documentation/bobsim/_3_StandardSim/iso4138" },
                      { text: "ISO 7401", link: "/documentation/bobsim/_3_StandardSim/iso7401" },
                      { text: "KnC", link: "/documentation/bobsim/_3_StandardSim/knc" },
                    ],
                  },
                  { text: "_4_DOE", link: "/documentation/bobsim/_4_DOE/" },
                ],
              }

            ],
          },
        ],

        "/reference/": [
          {
            text: "Reference",
            items: [
              { text: "Overview", link: "/reference/" },
              { text: "Configuration", link: "/reference/configuration" },
              { text: "Signals", link: "/reference/signals" },
              { text: "Outputs", link: "/reference/outputs" },
              { text: "Glossary", link: "/reference/glossary" },
            ],
          },
        ],
      },

      socialLinks: [{ icon: "github", link: "https://github.com/BobDyn" }],

      footer: {
        message: "Released as open-source vehicle simulation tooling.",
        copyright: "Copyright © 2026 BobDyn",
      },

      search: {
        provider: "local",
      },
    },
  })
);