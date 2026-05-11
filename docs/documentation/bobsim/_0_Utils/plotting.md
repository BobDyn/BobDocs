# Plotting utilities

The plotting layer converts YAML plot configuration into Matplotlib figures.

## Files

| File | Purpose |
|:--|:--|
| `_0_Utils/plotting/plot_engine.py` | Dispatches configured plot sections to plot types and layouts. |
| `_0_Utils/plotting/plot_types/signal_plot.py` | Handles basic x/y signal plotting and optional polynomial fits. |
| `_0_Utils/plotting/layouts/single.py` | Single-axis figure layout. |
| `_0_Utils/plotting/layouts/dual.py` | Two-axis figure layout. |
| `_0_Utils/plotting/layouts/triple.py` | Three-axis figure layout. |
| `_0_Utils/plotting/layouts/quad.py` | Four-axis figure layout. |

## Configuration pattern

Plot sections in YAML describe a layout, title, and list of subplots.

```yaml
plots:
  response:
    layout: triple
    title: Vehicle Response
    subplots:
      - title: Lateral Acceleration
        x: { key: time, label: Time [s] }
        y: { key: accY, label: ay [m/s^2] }
```

## API inventory

### `plot_engine.py`

| Symbol | Line | Notes |
|:--|--:|:--|
| `class PlotEngine` | 20 |  |
| `PlotEngine.__init__()` | 21 |  |
| `PlotEngine.run()` | 24 |  |

### `signal_plot.py`

| Symbol | Line | Notes |
|:--|--:|:--|
| `class SignalPlot` | 4 |  |
| `SignalPlot.get_xy()` | 5 |  |
| `SignalPlot.compute_fit()` | 24 |  |

### Layouts

| Symbol | Line | Notes |
|:--|--:|:--|
| `class SingleLayout` | 4 |  |
| `SingleLayout.render()` | 5 |  |

| Symbol | Line | Notes |
|:--|--:|:--|
| `class DualLayout` | 4 |  |
| `DualLayout.render()` | 5 |  |

| Symbol | Line | Notes |
|:--|--:|:--|
| `class TripleLayout` | 5 |  |
| `TripleLayout.render()` | 6 |  |

| Symbol | Line | Notes |
|:--|--:|:--|
| `class QuadLayout` | 4 |  |
| `QuadLayout.render()` | 5 |  |
