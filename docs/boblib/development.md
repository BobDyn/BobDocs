---
layout: doc
title: Development
prev:
  text: 'Tests and Checks'
  link: '/boblib/testing'
next:
  text: 'Troubleshooting'
  link: '/boblib/troubleshooting'
---

# Development

This page lists the package rules and the pre-commit checks for changes to
BobLib itself. For the `make` targets and test files, see
[Tests and Checks](/boblib/testing).

## Architecture rules

BobLib builds its physics inside the VehicleInterfaces contracts. BobLib's
`AGENTS.md` holds the full rule set. The main rules:

- The first level of each public domain package holds the VehicleInterfaces
  adapters and insertion points that experiments use.
- BobLib physics, templates, and helpers start one level deeper, usually in
  `Internal`, `Templates`, `Actuators`, or another purpose-specific package.
- Do not add a duplicate connector or interface when VehicleInterfaces already
  provides the contract.
- Tires live under `Chassis.Suspension`, because the axles own the wheel
  centers, tire load paths, and contact-patch frames.
- Reusable MultiBody helpers go under `Utilities.Mechanics.MultiBody`. Scalar
  and record calculations go under `Utilities.Mechanics.Functions`.
- First-level packages under `Records.VehicleRecord` mirror the public
  subsystem packages. Complete vehicle records live under `Records.VehicleDefn`.
- Test models live in `Tests/BobLibTest`, not in the production package.

## Before you commit

For vehicle architecture or template changes, confirm that:

- the `package.order` files list the new records, subsystem models, templates,
  and fixtures
- public entry points use the intended `BobLib.Experiments.Standards.*` models
- `make ci PYTHON=.venv/bin/python` passes
- OMEdit loads `BobLib/package.mo`, if the change touches package structure or
  diagram annotations
- BobSim builds the standard entry points, if a public model name changed

## OMEdit screenshots

The [OMEdit Workflow](/boblib/omedit-workflow) screenshots live under
`docs/public/images/omedit/` in BobDocs. Refresh them from a clean OMEdit
session when package loading, tree traversal, diagram layout, or Simulation
Setup defaults change. Use PNG and keep the files small.

## Open work areas

- model robustness and initialization behavior
- low-level fixture coverage for every reusable vehicle subsystem
- further VehicleInterfaces alignment and connector cleanup
- tire model validation and more tire records
- standard workflow coverage through BobSim
- OMEdit diagram polish and screenshot documentation

## License

BobLib uses the GNU General Public License v3.0 (GPLv3). See the
[BobLib LICENSE](https://github.com/BobDyn/BobLib/blob/main/LICENSE) file.
