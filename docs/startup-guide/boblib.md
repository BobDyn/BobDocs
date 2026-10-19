---
layout: doc
title: BobLib first run
---

# BobLib first run

BobLib runs directly in OpenModelica. BobSim is optional.

The [setup guide](/boblib/setup) covers the compiler, Modelica libraries, and
Python test dependencies. With those installed, the first translation check
from the BobLib repository root is:

```bash
make modelica-smoke PYTHON=.venv/bin/python
```

This translates the standard smoke models. It does not run the full physics
regression suite.

| Next task | Guide |
| --- | --- |
| Diagram inspection and simulation | [OMEdit workflow](/boblib/omedit-workflow) |
| Scripted simulation | [Command line](/boblib/cli-workflow) |
| Vehicle parameters and architecture | [Records and templates](/boblib/generation) |
| Model checks | [Tests and checks](/boblib/testing) |

The main guides describe the published library. The
[development preview](/boblib/unreleased) covers the unreleased restructuring
separately.
