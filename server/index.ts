// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const express = require("express");
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const mysql = require("mysql2");
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
const cors = require("cors");
const app = express();

const db = mysql.createPool({
  host: "mysql_db", // the host name MYSQL_DATABASE: node_mysql
  user: "MYSQL_USER", // database user MYSQL_USER: MYSQL_USER
  password: "MYSQL_PASSWORD", // database user password MYSQL_PASSWORD: MYSQL_PASSWORD
  database: "expenses", // database name MYSQL_HOST_IP: mysql_db
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req: any, res: any) => {
  res.send("Hi there");
});

app.get("/get", (req: any, res: any) => {
  const SelectQuery = "SELECT * FROM  expenses";
  db.query(SelectQuery, (err: any, result: any) => {
    res.send(result);
  });
});

app.post("/insert", (req: any, res: any) => {
  const expenseName = req.body.expenseName;
  const expenseAmount = req.body.expenseAmount;
  const InsertQuery =
    "INSERT INTO expenses (book_name, book_review) VALUES (?, ?)";
  db.query(InsertQuery, [expenseName, expenseAmount], (err: any, result: any) => {
    console.log(result);
  });
});

// delete a book from the database
app.delete("/delete/:expenseId", (req: any, res: any) => {
  const expenseId = req.params.expenseId;
  const DeleteQuery = "DELETE FROM books_reviews WHERE id = ?";
  db.query(DeleteQuery, expenseId, (err: any, result: any) => {
    if (err) console.log(err);
  });
});

// update a book review
app.put("/update/:expenseId", (req: any, res: any) => {
  const expenseAmount = req.params.expenseAmount;
  const expenseId = req.params.expenseId;
  const UpdateQuery = "UPDATE books_reviews SET book_review = ? WHERE id = ?";
  db.query(UpdateQuery, [expenseAmount, expenseId], (err: any, result: any) => {
    if (err) console.log(err);
  });
});

app.listen("3001", () => { });
