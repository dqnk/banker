import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { MyForm } from "./MyForm";
import BasicTable from "./BasicTable";
import { generate } from "shortid";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PieChart from "./MyChart";

ChartJS.register(ArcElement, Tooltip, Legend);

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  const [rows, setRows] = useState([
    {
      id: "",
      expenseName: "",
      expenseAmount: 0,
      email: "",
    },
  ]);
  const data = {
    labels: rows.slice(0, -1).map((obj) => obj.expenseName),
    datasets: [
      {
        label: "# of Votes",
        data: rows.slice(0, -1).map((obj) => obj.expenseAmount),
      },
    ],
  };
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <header className="App-header">
        <ThemeProvider theme={darkTheme}>
          <div className="app-starter">
            <div className="InputField">
              <MyForm
                onSubmit={(data) => {
                  setRows((currentRows) => [
                    {
                      id: generate(),
                      ...data,
                    },
                    ...currentRows,
                  ]);
                }}
              />
            </div>
            <div className="Chart">
              <Doughnut data={data}></Doughnut>
            </div>
          </div>
          <div className="app-continue">
            <BasicTable rows={rows} />
          </div>
        </ThemeProvider>
      </header>
    </div>
  );
};
export default App;
