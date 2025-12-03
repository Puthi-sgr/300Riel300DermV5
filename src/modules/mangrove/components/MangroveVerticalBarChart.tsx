import React from "react";
import {
  Chart,
  ChartConfiguration,
  ChartDataset,
  registerables,
} from "chart.js";

Chart.register(...registerables);

export interface MangroveVerticalBarChartProps {
  labels: string[];
  datasets: ChartDataset<"bar", number[]>[];
  options?: ChartConfiguration<"bar">["options"];
  height?: number | string;
}

const MangroveVerticalBarChart: React.FC<MangroveVerticalBarChartProps> = ({
  labels,
  datasets,
  options,
  height = 320,
}) => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const chartRef = React.useRef<Chart<"bar"> | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    chartRef.current?.destroy();

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const glossyDatasets = datasets.map((dataset) => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "rgba(16,163,82,0.95)");
      gradient.addColorStop(0.6, "rgba(96,219,148,0.75)");
      gradient.addColorStop(1, "rgba(16,163,82,0.85)");

      return {
        borderRadius: 12,
        borderWidth: 0,
        ...dataset,
        backgroundColor: dataset.backgroundColor ?? gradient,
        hoverBackgroundColor: dataset.hoverBackgroundColor ?? gradient,
      };
    });

    const config: ChartConfiguration<"bar"> = {
      type: "bar",
      data: {
        labels,
        datasets: glossyDatasets,
      },
      options: {
        indexAxis: "x",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              usePointStyle: true,
              color: "#134d30",
            },
          },
          tooltip: {
            backgroundColor: "rgba(12,47,28,0.92)",
            titleColor: "#d6ffe4",
            bodyColor: "#fff",
          },
        },
        scales: {
          x: {
            grid: {
              color: "rgba(13,59,36,0.08)",
            },
            ticks: {
              color: "#1f3c2f",
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              color: "rgba(13,59,36,0.06)",
            },
            ticks: {
              color: "#1f3c2f",
            },
          },
        },
        ...options,
      },
    };

    chartRef.current = new Chart(canvas, config);

    return () => {
      chartRef.current?.destroy();
    };
  }, [labels, datasets, options]);

  return (
    <div className="w-full" style={{ height }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default MangroveVerticalBarChart;
