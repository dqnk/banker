import { Doughnut } from "react-chartjs-2";
import * as React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.font.size = 20;
ChartJS.defaults.color = "#fff";

interface Props {
  rows: Array<{
    id: string;
    expenseName: string;
    expenseAmount: number;
    email: string;
  }>;
}
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF2299"];

export default function MyDoughnut(props: Props) {
  const rows = props.rows
    .slice(0, -1)
    .sort((a, b) => (a.expenseAmount < b.expenseAmount ? -1 : 1))
    .map((obj, index) => ({
      expenseName: obj.expenseName,
      expenseAmount: obj.expenseAmount,
      color: COLORS[index % 5],
    }))
    .reverse()
    .slice(0, 5);
  const data = {
    labels: rows.map((obj) => obj.expenseName),

    datasets: [
      {
        label: "Portion of spending",
        data: rows.map((obj) => obj.expenseAmount),
        backgroundColor: rows.map((obj) => obj.color),
      },
    ],
  };
  return <Doughnut data={data}></Doughnut>;
}
