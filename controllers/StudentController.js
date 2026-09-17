let students = require('../config/db')
const welcomepage =(req, res) => {
    res.send("Welcome to our student management system")
}

const getallstudents =  (req, res) => {
    res.send(students)
}

const getstudentsById = (req, res) => {
    const id = req.params.id
    const student = students.find((s) => s.id == id)
    res.send(student)
}

const insertstudent = (req,res) => {
    const {name , age} = req.body
    const student = {
        id: students.length + 1,
        name: name,
        age: age
    }
    students.push(student)
    res.send(student)
}

const updatestudent = (req,res) => {
    const {name,age}=req.body
    const id= parseInt(req.params.id)
    const student = students.filter(student => student.id === parseInt(id))
    if(student){
        students.name=name||student.name
        studentds.age=age||student.age
    }
    res.send(student)
}

const deletestudent = (req,res) => {
    const id= parseInt(req.params.id)
    const index = students.indexOf(students.find(student => student.id === id))
    if(index !== -1){
        const deletedStudent = students.splice(index, 1)
        res.json(deletedStudent[0])
    }else{
        res.status(404).json({ message: 'Student not found' })
    }
   
}

module.exports = {welcomepage, getallstudents, getstudentsById, deletestudent, updatestudent, insertstudent}