---
layout: doc
title: BobSim workflow
---

# BobSim workflow

## Vehicle setup

A saved vehicle is the common input to the analysis workspace. Setup contains
architecture, geometry, tires, suspension, mass, aero, and powertrain data.
The [vehicle setup guide](/bobsim/configuration) explains their units and
relationships.

Geometry previews and kinematics plots use KinPy. Tire curves use the selected
front or rear tire definition. These previews check the inputs before a full
analysis.

## Analysis selection

| Question | Analysis |
| --- | --- |
| How does the suspension move or react to rig loads? | Four post |
| How does steering response change over time? | Maneuver |
| What acceleration and braking are feasible at each speed? | GGV |
| How does yaw moment vary with steering and sideslip? | YMD |
| What path fits inside these track boundaries? | Racing line |
| What speed profile can the envelope sustain on that path? | QSS lap |
| Can the driver-controlled vehicle follow its lap reference? | Transient lap |

The category **+** or its context menu adds a simulation. Selecting a simulation
shows its inputs, outputs, and Method explanation. **Setup** holds its settings.

## A linked lap study

1. Add and run a **GGV** under **Performance envelopes**.
2. Add a **Racing line** under **Track**, import paired track boundaries, and run it.
3. Add **QSS lap** under **Laptime**.
4. Connect the completed GGV and Racing line results to the lap. Results can be
   dragged onto the corresponding input in the tree.
5. Run the lap and inspect its speed and acceleration along the saved path.

The lap takes its model fidelity and power limit from the GGV. It does not
have a second power setting or optimize the linked racing line.

## Results

**Results** becomes available after a successful run. Its context menu adds
post-processing children. A Signal Explorer inherits the simulation's signals,
so no source selector is needed. Animation is available for supported transient
runs. GGV, YMD, and QSS Lap use static result views suited to their calculations.

Changing inputs does not retroactively change an archived run. Rerunning updates
the simulation's current Results. [Results](/bobsim/results) explains archives,
comparisons, and available visualizations.
