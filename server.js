const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/db')
dotenv.config()

connectDB()
// const students = 

// [
//     { id: 1, name: 'John', age: 20 },
//     { id: 2, name: 'Jane', age: 22 },
//     { id: 3, name: 'Bob', age: 21 }
// ]

const studentRoute = require('./routes/studentRoute')
app.use(express.json())
app.use("/api",studentRoute)
// app.get("/", (req, res) => {
//     res.send("Welcome to our student management system")
// })
// app.get("/about", (req, res) => {
//     res.send("About page")
// })
// app.get("/students", (req, res) => {
//     res.send(students)
// })


// // Get student by id USING FILTER METHOD
// app.get("/students/:id", (req, res) => {
//     const id = req.params.id
//     const student = students.filter(student => student.id === parseInt(id))
//     res.send(student)
//   })

// app.post("/students", (req, res)=>{
//     const { name, age } = req.body
//     const student = {
//         id: students.length + 1,
//         name:name,
//         age:age
//     }
//     students.push(student)
//     res.send(student)
// })

// app.put("/students/:id",(req,res)=>{
//     const {name,age}=req.body
//     const id= parseInt(req.params.id)
//     const student = students.filter(student => student.id === parseInt(id))
//     if(student){
//         students.name=name||student.name
//         studentds.age=age||student.age
//     }
//     res.send(student)

// })

// app.delete("/students/:id",(req,res)=>{
//     const id= parseInt(req.params.id)
//     const index = students.indexOf(students.find(student => student.id === id))
//     if(index !== -1){
//         const deletedStudent = students.splice(index, 1)
//         res.json(deletedStudent[0])
//     }else{
//         res.status(404).json({ message: 'Student not found' })
//     }
   
// })



app.listen(3000,() => {
    console.log('Server is running on port 3000')
})
