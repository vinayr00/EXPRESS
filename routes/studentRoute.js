const express = require('express')

const {
    welcomepage,
    getallstudents,
    getstudentsById,
    insertstudent,
    updatestudent,
    deletestudent,
    addstudentToDB
} = require('../controllers/StudentController')
const router = express.Router()
router.get("/",welcomepage)
router.get("/students", getallstudents)
router.get("/students/:id", getstudentsById)
router.post("/students", insertstudent)
router.put("/students/:id", updatestudent)
router.delete("/students/:id", deletestudent)
router.post("/Users", addstudentToDB)

module.exports = router