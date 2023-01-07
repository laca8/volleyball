import React from "react";
import { Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Card } from "react-bootstrap";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["T", "E", "O", "V"];

const ChartBar = ({ allResults, colors }) => {
  const options = {
    responsive: true,
    animationEnabled: true,
    exportEnabled: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total Results",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: allResults?.map((x) => x),
        backgroundColor: colors,
      },
    ],
  };

  return (
    <Card style={{ width: "90%" }}>
      <Bar options={options} data={data} />
    </Card>
  );
};
export default ChartBar;
