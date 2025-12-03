import React from "react";
import {
  Chart,
  ChartConfiguration,
  ChartDataset,
  registerables,
} from "chart.js";

Chart.register(...registerables);

export interface MangroveBarChartProps {
  labels: string[];
  datasets: ChartDataset<"bar", number[]>[];
  options?: ChartConfiguration<"bar">["options"];
  height?: number;
}

const MangroveBarChart: React.FC<MangroveBarChartProps> = ({
  labels,
  datasets,
  options,
  height = 320,
}) => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const chartRef = React.useRef<Chart<"bar"> | null>(null);

  React.useEffect(() => {
    const ctx = canvasRef.current;
    if (!ctx) return;

    chartRef.current?.destroy();

    const glossyDatasets = datasets.map((dataset) => {
      const gradient = ctx
        .getContext("2d")!
        .createLinearGradient(0, 0, 600, 0);
      gradient.addColorStop(0, "rgba(199, 230, 212, 0.85)");
      gradient.addColorStop(0.5, "rgba(152, 210, 180, 0.75)");
      gradient.addColorStop(1, "rgba(118, 196, 157, 0.9)");

      return {
        borderRadius: 18,
        borderWidth: 0,
        ...dataset,
        backgroundColor: dataset.backgroundColor ?? gradient,
        hoverBackgroundColor: dataset.hoverBackgroundColor ?? gradient,
      };
    });

    const chartConfig: ChartConfiguration<"bar"> = {
      type: "bar",
      data: {
        labels,
        datasets: glossyDatasets,
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            align: "start",
            labels: {
              color: "#1a3d2e",
              usePointStyle: true,
            },
          },
          tooltip: {
            backgroundColor: "rgba(21, 71, 52, 0.92)",
            titleColor: "#e5f4ec",
            bodyColor: "#f8fffb",
            borderColor: "rgba(229, 244, 236, 0.7)",
            borderWidth: 1,
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              color: "rgba(26, 61, 46, 0.08)",
            },
            ticks: {
              color: "#274a38",
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        },
        ...options,
      },
    };

    chartRef.current = new Chart(ctx, chartConfig);

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

export default MangroveBarChart;
