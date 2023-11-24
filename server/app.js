const express = require("express");
const mongoose = require("mongoose");
const EmployeeCreate = require("./employeeCreate");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;

const cors = require("cors");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://zaidaziz33za:oXzhjJpUYCXBQvzM@cluster0.3jcfiim.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((error) => console.log(error));

app.get("/", function (req, res) {
  res.send("Hello World 123");
});
app.get("/employeeData", (req, res) => {
  EmployeeCreate.find()
    .then((emps) => res.json(emps))
    .catch((err) => res.json(err));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
