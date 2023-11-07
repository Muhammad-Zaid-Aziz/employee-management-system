const express = require("express");

const route = express.Router();

route.post("/employeeData", () =>
  app.post("/", async function (req, res) {
    console.log("inside");

    const empData = req.body;
    console.log(empData);
    try {
      const result = new Users(empData);
      const emp = await result.save();
      return res.send({ emp });
    } catch (error) {
      res.status(500).send({ error });
    }
  })
);

module.exports = route;
