# Envelopes

`_2_EnvelopeSim` contains first-principles vehicle envelope tools.

```text
_2_EnvelopeSim
├── GGV
│   └── ggv_generation.py
└── YMD
    └── ymd_generation.py
```

These tools are separate from the Modelica runtime simulation path. They are useful for fast vehicle-level envelope studies, sanity checks, and paired analysis alongside higher-fidelity multibody runs.

## Tools

| Tool | Purpose |
|:--|:--|
| [GGV](./ggv) | Generate acceleration envelopes across speed. |
| [YMD](./ymd) | Generate yaw-moment diagrams and speed sweeps. |

## Design intent

The envelope tools provide fast, transparent calculations from vehicle parameters, aero assumptions, tire capacity approximations, and force-balance logic. They are not substitutes for the full multibody model, but they are valuable for interpreting operating limits and comparing designs.
