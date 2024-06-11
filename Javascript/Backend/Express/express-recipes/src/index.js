const bodyParser = require("body-parser")
const express = require("express")
const path = require('path')

const app = express()

//const publicDirectoryPath = path.join(__dirname,'./public')

app.use(bodyParser.json())
//app.use(express.static(publicDirectoryPath))


app.get("/", (req,res)=>{
    res.status(200).json({"message":"Hello World Post Man"})
})

app.get("/test", (req,res)=>{
    res.status(200).json({"message":"This is the test route"})
})

app.post("/postdata", async (req,res)=>{
    console.log(req.body)

    res.status(200).json({})
})


const port = 8080

app.listen(port, () =>{
    console.log(`Server is up on port ${port}`)
})
