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
const ChartPie = ({ allResults, colors }) => {
  const titles = ["T", "E", "O", "V"];
  const labels = titles.map((el) => {
    return el;
  });
  const fields = {
    labels: labels,
    datasets: [
      {
        data: allResults.map((t) => t),
        backgroundColor: colors,
      },
    ],
  };
  return (
    <Card style={{ width: "400px" }}>
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
