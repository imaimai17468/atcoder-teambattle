"use client";

import { Line } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";
import "chartjs-adapter-moment";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  zoomPlugin,
);

type BattleAnalyticsProps = {
  chartData: {
    labels: number[];
    datasets: {
      label: string;
      data: (number | null)[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
};

export const ScoreChart: React.FC<BattleAnalyticsProps> = ({
  chartData,
}: BattleAnalyticsProps) => {
  return (
    <Line
      data={chartData}
      height={300}
      options={{
        responsive: true,
        scales: {
          x: {
            type: "time",
            time: {
              unit: "hour",
              tooltipFormat: "MM-DD hh:mm",
              displayFormats: {
                hour: "MM/DD hh:mm",
              },
            },
          },
        },
        plugins: {
          legend: {
            position: "bottom",
            align: "start",
          },
          zoom: {
            pan: {
              enabled: true,
              mode: "x",
            },
          },
        },
      }}
    />
  );
};

export default ScoreChart;
