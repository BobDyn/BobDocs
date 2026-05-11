# FMU runner

`FMURunner` is an FMI 2.0 Model Exchange runner included in BobSim.

It is not the primary backend for the active standard workflows in this checkout, but it mirrors the same runner concept for FMU-based integration and experimentation.

## File

```text
_3_StandardSim/_fmu_runner.py
```

## Responsibilities

The FMU runner:

- reads FMU model descriptions with FMPy,
- extracts FMU resources,
- instantiates `FMU2Model`,
- integrates with `scipy.integrate.solve_ivp`,
- supports cached initialization snapshots,
- supports serial and process-pool case execution,
- supports raw and final-sample extraction,
- supports constant inputs, input profiles, and Python-side controller hooks.

## Current controller hook

The runner includes a Python-side radius-and-velocity control hook for experimentation. This is useful when you want to test FMU behavior before moving a concept into the compiled Modelica workflow.

## API inventory

| Symbol | Line | Notes |
|:--|--:|:--|
| `class FMURunner` | 15 |  |
| `FMURunner.__init__()` | 16 |  |
| `FMURunner.from_config()` | 105 |  |
| `FMURunner.run()` | 128 |  |
| `FMURunner.run_cases()` | 152 |  |
| `FMURunner.run_cases_parallel()` | 182 |  |
| `FMURunner.run_case()` | 235 |  |
| `FMURunner._instantiate()` | 279 |  |
| `FMURunner._initialize_case()` | 288 |  |
| `FMURunner.terminate()` | 324 |  |
| `FMURunner._ensure_initialized_snapshot()` | 344 |  |
| `FMURunner._simulate_case()` | 430 |  |
| `FMURunner.rhs()` | 491 |  |
| `FMURunner._apply_inputs_and_controller()` | 531 |  |
| `FMURunner._controller_initial_state()` | 575 |  |
| `FMURunner._controller_outputs()` | 594 |  |
| `FMURunner._radius_velocity_pi()` | 613 |  |
| `FMURunner._smooth_ramp()` | 698 |  |
| `FMURunner._set_inputs()` | 708 |  |
| `FMURunner._profile_value()` | 725 |  |
| `FMURunner._extract_raw()` | 748 |  |
| `FMURunner._extract_last()` | 764 |  |
| `FMURunner._sample_outputs()` | 767 |  |
| `FMURunner._get_real()` | 791 |  |
| `FMURunner._apply_init_values()` | 805 |  |
| `FMURunner._make_events()` | 812 |  |
| `FMURunner._steady_state_event()` | 826 |  |
| `FMURunner._case_duration()` | 875 |  |
| `FMURunner._make_t_eval()` | 887 |  |
| `FMURunner._set_real()` | 905 |  |
| `FMURunner._extract_state_names()` | 915 |  |
| `FMURunner._ptr()` | 944 |  |
| `FMURunner._split_state()` | 948 |  |
| `FMURunner._global_time()` | 952 |  |
| `FMURunner._case_label()` | 955 |  |
| `FMURunner._worker_config()` | 976 |  |
| `_run_fmu_case_worker()` | 996 |  |
