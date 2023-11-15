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
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
};

export default function ScoreChart({ chartData }: BattleAnalyticsProps) {
  return (
    <Line
      data={chartData}
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
        // plugins: {
        //   zoom: {
        //     pan: {
        //       enabled: true,
        //       mode: "x",
        //     },
        //     zoom: {
        //       pinch: {
        //         enabled: true,
        //       },
        //       wheel: {
        //         enabled: true,
        //       },
        //       mode: "x",
        //     },
        //   },
        // },
      }}
    />
  );
}
