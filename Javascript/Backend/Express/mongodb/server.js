const bodyParser = require("body-parser")
const express = require("express")
const User = require('./UserModel')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.json())

app.get("/", (req,res)=>{
    res.status(200).json({"message":"Hello World Post Man"})
})

app.post("/addrecord", async (req,res)=>{
    let user = await User.create(req.body)

    res.send("User was successfully added")
})

app.post("/retreiverecord", async (req,res)=>{
    let user = await User.find( {email: req.body.email} )

    res.send(user).json()
})

app.get("/retreiveallrecords", async (req,res)=>{
    let users = await User.find()

    res.send(users).json()
})

app.get("/retreive/:id", async (req,res)=>{
    let user = await User.findById(req.params.id)

    res.send(user).json()
})

app.post("/updaterecord", async (req,res)=>{
    let user = await User.findOne( {email: req.body.email} )

    user.email = "new@new.com"
    user.password = "newpassword"

    user.save()

    res.send(user).json()
})

app.post("/deleterecord", async (req,res)=>{
    let user = await User.findOneAndDelete( {email: req.body.email} )

    res.send("User was successfully deleted")
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




