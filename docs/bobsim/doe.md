---
layout: doc
title: Design of Experiments
---

# Design of Experiments

BobSim includes a design-of-experiments pipeline under `_4_DOE`.

::: warning Current status
The DOE pipeline is real infrastructure, but its public API and output contract should still be treated as in progress.
:::

## Pipeline stages

The current entry point is:

```text
_4_DOE/run_doe.py
```

It runs these stages:

1. `sampler.sample`
2. `generator.generate_variants`
3. `compiler.compile_all`
4. `batch.run_all`
5. `aggregator.aggregate`

## Folder structure

```text
_4_DOE/
├─ configs/
│  ├─ doe_config.yaml
│  ├─ compiler_config.yaml
│  └─ build_template.mos
├─ population/
├─ results/
├─ sampler.py
├─ generator.py
├─ compiler.py
├─ batch.py
├─ aggregator.py
└─ run_doe.py
```

## DOE config concept

A DOE variable maps a high-level design variable to a Modelica record parameter:

```yaml
variables:
  - path: front.stabar.bar_rate
    block: pFrStabar
    param: barRate
    range: [100, 500]
```

The pipeline can then sample the range, generate variant records, compile each variant, run cases, and aggregate results.

## Running the DOE service

```bash
make shell-doe
python run_doe.py
```

or from the makefile:

```bash
make sim-doe
```

## When to use DOE

Use DOE when the question is not “what does this one vehicle do?” but instead:

- which parameters dominate a metric,
- which design variables interact,
- how sensitive the vehicle is to a change,
- where a trade-off begins,
- which regions deserve higher-fidelity simulation.

## Release guidance

For public documentation, keep DOE framed as experimental until the variant generation, compile/run behavior, and aggregated output format are finalized.
