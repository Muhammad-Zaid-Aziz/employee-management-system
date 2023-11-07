const express = require("express");
const mongoose = require("mongoose");
const EmployeeRecord = require("./employeeData");
const EmployeeCreate = require("./employeeCreate");
const bodyParser = require("body-parser");

// To parse URL encoded data

// To parse json data
const cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors);
// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

app.use("./employeeData", EmployeeCreate);

mongoose
  .connect(
    "mongodb+srv://zaidaziz33za:oXzhjJpUYCXBQvzM@cluster0.3jcfiim.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((error) => console.log(error));

app.listen(3033, () => console.log("Example app listening on port 3033!"));
