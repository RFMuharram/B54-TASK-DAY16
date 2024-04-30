const express = require('express')
const app = express()
const port = 1904

// rute
app.get("/halo",(req,res)=> {
    res.send("hello world!")
})

app.listen (port,()=>{
    console.log("server is running on port:" , port)
})