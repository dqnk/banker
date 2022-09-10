// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
var express = require("express");
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
var mysql = require("mysql2");
// @ts-expect-error TS(2580): Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
var cors = require("cors");
var app = express();
var db = mysql.createPool({
    host: "mysql_db",
    user: "MYSQL_USER",
    password: "MYSQL_PASSWORD",
    database: "expenses"
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.send("Hi there");
});
app.get("/get", function (req, res) {
    var SelectQuery = "SELECT * FROM  expenses";
    db.query(SelectQuery, function (err, result) {
        res.send(result);
    });
});
app.post("/insert", function (req, res) {
    var expenseName = req.body.expenseName;
    var expenseAmount = req.body.expenseAmount;
    var InsertQuery = "INSERT INTO expenses (book_name, book_review) VALUES (?, ?)";
    db.query(InsertQuery, [expenseName, expenseAmount], function (err, result) {
        console.log(result);
    });
});
// delete a book from the database
app["delete"]("/delete/:expenseId", function (req, res) {
    var expenseId = req.params.expenseId;
    var DeleteQuery = "DELETE FROM books_reviews WHERE id = ?";
    db.query(DeleteQuery, expenseId, function (err, result) {
        if (err)
            console.log(err);
    });
});
// update a book review
app.put("/update/:expenseId", function (req, res) {
    var expenseAmount = req.params.expenseAmount;
    var expenseId = req.params.expenseId;
    var UpdateQuery = "UPDATE books_reviews SET book_review = ? WHERE id = ?";
    db.query(UpdateQuery, [expenseAmount, expenseId], function (err, result) {
        if (err)
            console.log(err);
    });
});
app.listen("3001", function () { });
