const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  courses: [],
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
