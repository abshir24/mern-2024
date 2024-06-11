const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const Todo = require('./TodoModel')
const bodyParser = require("body-parser")

const app = express()

app.use(cors());

app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send("It works")
})

app.get('/gettodos', async (req,res)=>{
    let todos = await Todo.find()

    res.status(200).json({"data":todos})
})

app.post('/addtodos', async (req,res)=>{
    let todo = await Todo.create(req.body)

    let allTodos = await Todo.find()

    res.status(200).json({"data":allTodos})
})

let connectionString = "mongodb+srv://abshir24:password123456@cluster0.zpya0pe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(connectionString)
.then(()=>{
    const port = 8080

    console.log("Connected To DB")

    app.listen(port, () =>{
        console.log(`Server is up on port ${port}`)
    })
}).catch((error) =>{
    console.log(error)
})