# Utilities

`_0_Utils` contains shared plotting and reporting infrastructure used by the standard-simulation workflows.

```text
_0_Utils
├── plotting
│   ├── plot_engine.py
│   ├── layouts
│   └── plot_types
└── reporting
    ├── report_engine.py
    ├── sections.py
    └── media
```

## Responsibilities

| Package | Purpose |
|:--|:--|
| `_0_Utils.plotting` | Convert plot configuration dictionaries into Matplotlib figures. |
| `_0_Utils.reporting` | Build multipage PDF reports from summary dictionaries and plot definitions. |

## How it fits into BobSim

Standard modules such as ISO 4138 and ISO 7401 produce summary dictionaries. Those dictionaries contain scalar metrics, time histories, and plot-ready arrays. The plotting and reporting utilities consume the summaries and build report pages without embedding standard-specific plotting code into the runner.

Go to [Plotting](./plotting) or [Reporting](./reporting) for implementation details.
