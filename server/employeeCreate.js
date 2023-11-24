const express = require("express");
const mongoose = require("mongoose");
const EmployeeRecord = require("./employeeData");

const route = express.Router();
const createEmployee = async (req, res) => {
  console.log(req);
  const employeeData = req.body;
  console.log(employeeData);

  try {
    // const result = new EmployeeRecord(employeeData);
    // const employee = await result.save();

    // if (!employee) {
    //   throw new Error(`Employee could not be created .`);
    // }

    return res.status(200).json({ message: "Employee created successfully!" });
  } catch (error) {
    console.log("++++++++++++++++++");
    res.status(
      error.statusCode
        ? error.statusCode
        : res.statusCode
        ? res.statusCode
        : 500
    );
    throw new Error(
      `${
        error.statusCode !== 400 && res.statusCode !== 400
          ? "Something went wrong in user creation: "
          : ""
      }${error.message}`
    );
  }
};

console.log("inside");

route.post("/", createEmployee);

module.exports = route;
