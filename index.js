const express = require("express")
const app = express()
const http = require("http")
const port = 5000
const expressServer = http.createServer(app)



app.get("/", (req, res) =>{
    res.sendFile(__dirname+"/index.html")
})

app.listen(port, () =>{
    console.log("server is running from port:", port)
})