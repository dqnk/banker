import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "expenseName", headerName: "Expense Name", width: 200 },
  { field: "expenseAmount", headerName: "Expense Amount", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
];
interface Props {
  rows: Array<{
    id: string;
    expenseName: string;
    expenseAmount: number;
    email: string;
  }>;
}

function BasicTable({ rows }: Props) {
  //remove last element, which is just the placeholder for initial state
  // TODO: make this better
  rows = rows.slice(0, -1);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}

export default BasicTable;
