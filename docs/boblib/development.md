---
layout: doc
title: Development
prev:
  text: 'Entry Points'
  link: '/boblib/entry-points'
next:
  text: 'Troubleshooting'
  link: '/boblib/troubleshooting'
---

# Development

This page covers checks and conventions for changing BobDyn/BobLib itself.

## Development Checks

Python tests for the generator live under:

```text
Generation/scripts/
```

Run the focused generator tests from the parent BobDyn/BobSim repository root:

```bash
python -m pytest _0_Utils/external/BobLib/Generation/scripts/test_generate_vehicle_model.py
```

From a standalone BobDyn/BobLib directory, run:

```bash
python -m pytest Generation/scripts/test_generate_vehicle_model.py
```

Before committing generated changes, check:

- the generated Modelica files match the active `Generation/vehicle.yml`
- `package.order` files include only the active generated model names expected
  for this package state
- OMEdit can load `BobLib/package.mo` if the change touches package structure or
  diagram annotations
- BobDyn/BobSim can compile `BobLib.Standards.VehicleSim` and
  `BobLib.Standards.FourPostSim` if the change touches standard entry points

## Screenshot Targets

Recommended screenshots for future documentation:

- `docs/images/omedit-library-browser.png` - BobDyn/BobLib expanded in the Libraries
  browser
- `docs/images/omedit-vehicle-sim-diagram.png` - `BobLib.Standards.VehicleSim`
  in Diagram View
- `docs/images/omedit-vehicle-wrapper-diagram.png` - active generated vehicle
  wrapper in Diagram View
- `docs/images/omedit-four-post-sim-diagram.png` - `BobLib.Standards.FourPostSim`
  in Diagram View
- `docs/images/omedit-vehicle-record-parameters.png` - active vehicle record
  parameter dialog

Keep screenshots small enough for the repository and prefer PNG for crisp OMEdit
UI captures.

## Useful Work Areas

Useful areas of work include:

- model robustness and initialization behavior
- additional suspension and powertrain templates
- tire model validation and additional `.tir` templates
- standard workflow coverage
- OMEdit diagram polish and screenshot documentation
- generator tests and schema validation for `Generation/vehicle.yml`

## Maturity Notes

- The library is still evolving, so some subsystems are more complete than
  others.
- The chassis, suspension, tire, and standard-simulation areas are the most
  mature parts of the tree.
- BobDyn/BobLib is generated in an "active vehicle" shape rather than carrying every
  possible generated variant at once.

## License

BobDyn/BobLib is distributed under the GNU General Public License v3.0 (GPLv3). See the
[BobDyn/BobLib LICENSE](https://github.com/BobDyn/BobLib/blob/main/LICENSE) file for
details.
