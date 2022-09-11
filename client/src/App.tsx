import React, { useState } from "react";
import { MyForm } from "./MyForm";
import BasicTable from "./BasicTable";
import { generate } from "shortid";

const App = () => {
  const [rows, setRows] = useState([
    {
      id: "1",
      firstName: "First Name",
      lastName: "Last Name",
      email: "First",
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
