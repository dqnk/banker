import React, { useState } from "react";
import { MyForm } from "./MyForm";
import BasicTable from "./BasicTable";
import { generate } from "shortid";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <header className="App-header">
        <ThemeProvider theme={darkTheme}>
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
          <BasicTable rows={rows} />
        </ThemeProvider>
      </header>
    </div>
  );
};
export default App;
