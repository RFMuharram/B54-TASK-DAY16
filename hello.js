const express = require('express')
const app = express()
const port = 1905
const path = require ("path")

app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "./pages"))
app.use("/assets", express.static(path.join(__dirname,"./assets")))
app.use(express.urlencoded({extended:false}))

// rute
app.get("/", home)
app.get("/index", home)
app.get("/addProjectBootstrap", project)
app.post("/addProjectBootstrap", addProject)
app.get("/testi", testi)
app.get("/backpageBootstrap", contact)

const data = []

// control
function home(req,res) {
    const data1 = [
        {   tittle :"MOBILE APP 2022",
            content :"App that used for dumbways student.it was deployed and can download on IOS & Android",
            image : "https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            tittle :"MOBILE APP 2023",
            content :"App that used for dumbways student.it was deployed and can download on IOS & Android",
            image :"https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            tittle :"MOBILE APP 2024",
            content :"App that used for dumbways student.it was deployed and can download on IOS & Android",
            image :"https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg?auto=compress&cs=tinysrgb&w=600"
        },

    ]
    res.render("index", {data1 : data1})  
}
function project(req,res) {
    res.render("addProjectBootstrap", {data : data})  
}
function addProject(req,res) {
    const {tittle, content} = req.body
    console.log("Tittle content: ", tittle)
    console.log("Content: ", content)
    data.push({
        tittle,
        content,
    });
    res.redirect("/addProjectBootstrap")
}
function testi(req,res) {
    res.render("testi")  
}
function contact(req,res) {
    res.render("backpageBootstrap")  
}

app.listen (port,()=>{
    console.log("server is running on port:" , port)
})