const express = require('express')
const app = express()
const port = 1904
const path = require ("path")
const config = require("./config/config.json")
const {Sequelize, QueryTypes} = require("sequelize")
const sequelize = new Sequelize(config.development)

app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "./pages"))
app.use("/assets", express.static(path.join(__dirname,"./assets")))
app.use(express.urlencoded({extended:false}))

// rute
app.get("/", home)
app.get("/index", home)
app.post("/edited", editedBlog)
app.post("/delete-post/:id", deletePost)
app.get("/blog-Edit/:id", blogEdit)
app.get("/addProjectBootstrap", project)
app.post("/addProjectBootstrap", addProject)
app.get("/testi", testi)
app.get("/backpageBootstrap", contact)

// const data = []

// control
async function home(req,res) {
    const query ="SELECT * FROM tb_blogs";
    const data = await sequelize.query(query, { type: QueryTypes.SELECT });
    res.render("index", {data : data})  
}
function project(req,res) {
    res.render("addProjectBootstrap")  
}
function deletePost(req,res) {
    const {id} = req.params; 
    data.splice(id,1)
    
    res.redirect("/")
}
function blogEdit(req,res) {
    const {id} = req.params;

    const selectedData = data[id];
    selectedData.id = id

    res.render("blog-Edit", {data : selectedData})  
}
function editedBlog(req,res) {
    const {tittle, content, id} = req.body
    
    data[id] = {
        tittle,
        content 
    }
    res.redirect("/")
}
function addProject(req,res) {
    const {tittle, content} = req.body
    data.unshift({
        tittle,
        content,
    });
    res.redirect("/")
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