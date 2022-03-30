const express = require("express");
const router = express.Router();
const studentController = require("./student.controller");

router.get("/getStudents", studentController.getStudents);
router.post("/createStudent", studentController.createStudent);
router.delete("/deleteStudent/:id", studentController.deleteStudent);
router.patch("/updateStudent/:id", studentController.updateStudent);

module.exports = router;
