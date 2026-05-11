# StandardSim

`_3_StandardSim` is the active standard-test orchestration layer in BobSim.

It contains shared runners plus workflow-specific modules for the public standard simulations.

```text
_3_StandardSim
├── _modelica_runner.py
├── _fmu_runner.py
├── build.mos
├── SteadyStateEval
├── TransientEval
├── KnC
└── results
```

## Active path

The current active runtime path uses a unified OpenModelica executable:

| Item | Value |
|:--|:--|
| Model | `BobLib.Standards.VehicleModel` |
| Build script | `_3_StandardSim/build.mos` |
| Build directory | `_3_StandardSim/Build` |
| Primary runner | `_3_StandardSim/_modelica_runner.py` |
| Output format | CSV |
| Report location | `_3_StandardSim/results` |

## Workflow modules

| Workflow | Module | Status |
|:--|:--|:--|
| SteadyStateEval | `_3_StandardSim/SteadyStateEval/steady_state_eval_sim.py` | Active. |
| TransientEval | `_3_StandardSim/TransientEval/transient_eval_sim.py` | Active. |
| KnC | `_3_StandardSim/KnC/knc_sim.py` | Present, but more transitional than ISO 4138/ISO 7401. |

## Entry points

```bash
python -m _3_StandardSim.SteadyStateEval.steady_state_eval_sim
python -m _3_StandardSim.TransientEval.transient_eval_sim
```

## Related pages

- [Modelica runner](./modelica-runner)
- [FMU runner](./fmu-runner)
- [SteadyStateEval](./steady-state-eval)
- [TransientEval](./transient-eval)
- [KnC](./knc)
