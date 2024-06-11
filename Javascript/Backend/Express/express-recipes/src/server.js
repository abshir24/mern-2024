const bodyParser = require("body-parser")
const express = require("express")

const app = express()

app.use(bodyParser.json())

app.get("/", (req,res)=>{
    res.status(200).json({"message":"Hello World Post Man"})
})

app.post("/shorten", (req,res)=>{
    let route = req.body.url.split("/")
    let shortenedRoute = "/" + route[route.length-1]

    res.redirect(shortenedRoute)
})

app.get("/shortenroute", (req,res)=>{
    res.status(200).json({"shortenedurl": "/shortenroute"})
})



const port = 8080

app.listen(port, () =>{
    console.log(`Server is up on port ${port}`)
})