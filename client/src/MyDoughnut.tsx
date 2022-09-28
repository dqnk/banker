import { Doughnut } from "react-chartjs-2";
import * as React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
//doughnut chart properties
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
const COLORS = ["#FFBB28", "#FF8042", "#FF2299", "#00C49F", "#0088FE"];

export default function MyDoughnut(props: Props) {
  const rows = props.rows
    //remove the first element from useState in App.tsx
    .slice(0, -1)
    .sort((a, b) => (a.expenseAmount > b.expenseAmount ? -1 : 1))
    //display max 5 elements, might change later
    .slice(0, 5)
    .map((obj, index) => ({
      expenseName: obj.expenseName,
      expenseAmount: obj.expenseAmount,
      color: COLORS[index % 5],
    }));

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
