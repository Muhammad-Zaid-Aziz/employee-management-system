const mongoose = require("mongoose");

// Schema and Model
const schemaEmlpoyee = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    idNo: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    workingStatus: {
      type: Boolean,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const EmployeeRecord = mongoose.model("employeeRecords", schemaEmlpoyee);
// exports.EmployeeData = EmployeeRecord;
module.exports = EmployeeRecord;
