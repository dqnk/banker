import { Doughnut } from "react-chartjs-2";
import * as React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  rows: Array<{
    id: string;
    expenseName: string;
    expenseAmount: number;
    email: string;
  }>;
}
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function MyDoughnut(props: Props) {
  const rows = props.rows.slice(0, -1).reverse();
  const data = {
    labels: rows.map((obj) => obj.expenseName),
    datasets: [
      {
        label: "Portion of spending",
        data: rows.map((obj) => obj.expenseAmount),
        backgroundColor: rows.map((obj, index) => COLORS[index % 4]),
      },
    ],
  };
  return <Doughnut data={data}></Doughnut>;
}
