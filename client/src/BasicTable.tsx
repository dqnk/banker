import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@material-ui/core";

interface Props {
  rows: Array<{
    id: string;
    expenseName: string;
    expenseAmount: number;
    email: string;
  }>;
}

const useStyles = makeStyles({
  container: {
    maxWidth: 1000,
  },
});

function BasicTable({ rows }: Props) {
  //remove last element, which is just the placeholder for initial state
  // TODO: make this better
  rows = rows.slice(0, -1);

  const classes = useStyles();
  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>Expense Name</TableCell>
            <TableCell>Expense Amount</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.expenseName}</TableCell>
              <TableCell component="th" scope="row">
                {row.expenseAmount}
              </TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;
