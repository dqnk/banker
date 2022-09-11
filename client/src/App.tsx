import React, { useState } from "react";
import { MyForm } from "./MyForm";
import BasicTable from "./BasicTable";
import { generate } from "shortid";

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
    <div style={{ textAlign: "center" }}>
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
      <BasicTable rows={rows} />
    </div>
  );
};
export default App;
