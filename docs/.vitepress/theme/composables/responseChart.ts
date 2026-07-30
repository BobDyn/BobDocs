import type { Chart as ChartType, ChartConfiguration } from "chart.js";

export const CHART_COLORS = {
    brand: "#4ea1ff",
    brandFill: "rgba(78, 161, 255, 0.08)",
    muted: "#7f8796",
    text: "#c9cdd4",
    grid: "#242a38",
};

export async function loadChart(): Promise<typeof ChartType> {
    const { Chart, registerables } = await import("chart.js");
    Chart.register(...registerables);
    return Chart;
}

export function buildResponseChartConfig(opts: {
    times: number[];
    setpoint: number[];
    response: number[];
    yMin: number;
    yMax: number;
    responseTension?: number;
}): ChartConfiguration<"line"> {
    const { times, setpoint, response, yMin, yMax, responseTension = 0 } = opts;

    return {
        type: "line",
        data: {
            labels: times,
            datasets: [
                {
                    label: "Setpoint",
                    data: setpoint,
                    borderColor: CHART_COLORS.muted,
                    borderDash: [6, 4],
                    borderWidth: 1.5,
                    pointRadius: 0,
                    tension: 0,
                },
                {
                    label: "Response",
                    data: response,
                    borderColor: CHART_COLORS.brand,
                    backgroundColor: CHART_COLORS.brandFill,
                    fill: true,
                    borderWidth: 2,
                    pointRadius: 0,
                    tension: responseTension,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            plugins: {
                legend: {
                    labels: { color: CHART_COLORS.text, boxWidth: 28, boxHeight: 2 },
                },
                tooltip: { enabled: false },
            },
            scales: {
                x: {
                    ticks: { color: CHART_COLORS.muted, maxTicksLimit: 8 },
                    grid: { color: CHART_COLORS.grid },
                    title: {
                        display: true,
                        text: "Time (s)",
                        color: CHART_COLORS.muted,
                    },
                },
                y: {
                    ticks: { color: CHART_COLORS.muted },
                    grid: { color: CHART_COLORS.grid },
                    title: {
                        display: true,
                        text: "Output",
                        color: CHART_COLORS.muted,
                    },
                    min: yMin,
                    max: yMax,
                },
            },
        },
    };
}
