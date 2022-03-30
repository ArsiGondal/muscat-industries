const Student = require("./student");

exports.createStudent = async (req, res, next) => {
  try {
    const student = await Student.create(req.body);
    return res.status(200).json({ status: "success", student });
  } catch (err) {
    return res.status(400).json({ status: "failure", err });
  }
};

exports.getStudents = async (req, res, next) => {
  try {
    const students = await Student.find();
    return res.status(200).json({ status: "success", students });
  } catch (err) {
    return res.status(400).json({ status: "failure", err });
  }
};

exports.deleteStudent = async (req, res, next) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    return res.status(200).json({ status: "success" });
  } catch (err) {
    console.log(err.data);
    return res.status(400).json({ status: "failure", err: err.data });
  }
};

exports.updateStudent = async (req, res, next) => {
  try {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).json({ status: "success" });
  } catch (err) {
    return res.status(400).json({ status: "failure", err: err.data });
  }
};
