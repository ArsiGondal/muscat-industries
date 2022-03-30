const express = require("express");
const mongoose = require("mongoose");
const studentRouter = require("./student.route");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/practical").then(() => {
  console.log("Database successfuly connected");
});

app.use("/student", studentRouter);

app.listen(3000, () => {
  console.log("App running on port 3000");
});
