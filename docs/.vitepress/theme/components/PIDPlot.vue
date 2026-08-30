<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import type { Chart as ChartType } from "chart.js";
import { loadChart, buildResponseChartConfig } from "../composables/responseChart";

const canvasRef = ref<HTMLCanvasElement | null>(null);
const Kp = ref(8);
const Ki = ref(2);
const Kd = ref(4);
let chart: ChartType | null = null;

function simulate(kp: number, ki: number, kd: number) {
    const dt = 0.04,
        T = 20,
        omega_n = 1.0,
        zeta = 0.05;
    const N = Math.floor(T / dt);
    const r = 1.0;
    let x = 0,
        v = 0,
        integral = 0,
        prevE = r; // prevE = r because x=0 at t=0
    const times = [],
        positions = [];

    for (let i = 0; i < N; i++) {
        const e = r - x;
        integral += e * dt;
        const derivative = (e - prevE) / dt;
        const u = Math.max(
            -25,
            Math.min(25, kp * e + ki * integral + kd * derivative),
        );
        prevE = e;

        const a = u - 2 * zeta * omega_n * v - omega_n ** 2 * x;
        v += a * dt;
        x += v * dt;
        times.push(+(i * dt).toFixed(2));
        positions.push(+x.toFixed(4));
    }
    return { times, positions };
}

function updateChart() {
    if (!chart) return;
    const { positions } = simulate(Kp.value, Ki.value, Kd.value);
    chart.data.datasets[1].data = positions;
    chart.update("none");
}

onMounted(async () => {
    const Chart = await loadChart();

    const { times, positions } = simulate(Kp.value, Ki.value, Kd.value);

    chart = new Chart(
        canvasRef.value!,
        buildResponseChartConfig({
            times,
            setpoint: times.map(() => 1.0),
            response: positions,
            yMin: -0.2,
            yMax: 1.8,
            responseTension: 0.15,
        }),
    );
});

onUnmounted(() => {
    chart?.destroy();
});

watch([Kp, Ki, Kd], updateChart);
</script>

<template>
    <div class="plot-container">
        <div class="sliders">
            <label>
                <span class="label-text">K<sub>p</sub> = {{ Kp }}</span>
                <input
                    type="range"
                    v-model.number="Kp"
                    min="0"
                    max="25"
                    step="0.5"
                    :aria-label="`Proportional gain Kp, currently ${Kp}`"
                />
            </label>
            <label>
                <span class="label-text">K<sub>i</sub> = {{ Ki }}</span>
                <input
                    type="range"
                    v-model.number="Ki"
                    min="0"
                    max="10"
                    step="0.25"
                    :aria-label="`Integral gain Ki, currently ${Ki}`"
                />
            </label>
            <label>
                <span class="label-text">K<sub>d</sub> = {{ Kd }}</span>
                <input
                    type="range"
                    v-model.number="Kd"
                    min="0"
                    max="10"
                    step="0.25"
                    :aria-label="`Derivative gain Kd, currently ${Kd}`"
                />
            </label>
        </div>
        <div class="chart-area">
            <canvas
                ref="canvasRef"
                role="img"
                aria-label="PID controller response plot: position over time versus setpoint"
            />
        </div>
        <p class="hint">
            Try setting K<sub>i</sub> = 0 to see steady-state error, or K<sub
                >d</sub
            >
            = 0 to see overshoot.
        </p>
    </div>
</template>

<style scoped>
.plot-container {
    margin: 1.5rem 0;
}
.sliders {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
}
.sliders label {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}
.label-text {
    font-size: 0.85rem;
    color: var(--vp-c-text-2);
    min-width: 72px;
    font-family: var(--vp-font-family-mono, monospace);
}
input[type="range"] {
    flex: 1;
    accent-color: var(--vp-c-brand-1);
    cursor: pointer;
}
.chart-area {
    position: relative;
    height: 280px;
}
.hint {
    font-size: 0.8rem;
    color: var(--vp-c-text-3);
    margin-top: 0.5rem;
}
@media (max-width: 640px) {
    .chart-area {
        height: 200px;
    }
    .label-text {
        min-width: 60px;
    }
}
</style>
