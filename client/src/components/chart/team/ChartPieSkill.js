import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement,
} from "chart.js";
import { Card } from "react-bootstrap";
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement
);
const ChartPie = ({ allSkills }) => {
  const titles = ["A", "B", "D", "P", "R", "S"];
  const colors = ["#007acc", "red", "#ffcc00", "#ff8000", "green", "gray"];
  const labels = titles.map((el) => {
    return el;
  });
  const fields = {
    labels: labels,
    datasets: [
      {
        label: "",
        data: allSkills.map((t) => t),
        backgroundColor: colors,
      },
    ],
  };
  return (
    <Card style={{ width: "400px", marginLeft: "10px" }}>
      <Pie
        options={{
          borderWidth: 3,
          hoverBorderWidth: 2,
          fill: true,
        }}
        data={fields}
      />
    </Card>
  );
};

export default ChartPie;
