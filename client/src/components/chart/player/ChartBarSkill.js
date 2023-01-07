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

const labels = ["A", "B", "D", "P", "R", "S"];

const ChartBar = ({ allSkills }) => {
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
        text: "Total Skills",
      },
    },
  };
  const colors = ["#007acc", "red", "#ffcc00", "#ff8000", "green", "gray"];
  const data = {
    labels: labels.map((x) => x),
    datasets: [
      {
        label: "",
        data: allSkills?.map((x) => x),
        backgroundColor: colors,
      },
    ],
  };

  return (
    <Card style={{ width: "90%", marginLeft: "10px" }}>
      <Bar options={options} data={data} />
    </Card>
  );
};
export default ChartBar;
