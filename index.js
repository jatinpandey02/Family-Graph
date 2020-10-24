const express = require("express")
const app = express()
const expressLayout=require('express-ejs-layouts')
const familyGraph = require('./Graph.js')

console.log("Working")

app.use(expressLayout)
app.use(express.json())
app.use(express.urlencoded({ extended:false}))
app.set('view engine','ejs')

var a;
var s;

app.get('/',function(req,res){
    res.render('homepage')
})

app.post('/',(req,res)=>{
    a = new familyGraph(req.body.Name)
    res.redirect('/addMember')
})

app.get('/addMember',(req,res)=>{
    res.render('addMember')
})

app.post('/addMember',(req,res)=>{
    a.addMember(req.body.name,req.body.x,req.body.relative,req.body.y)
    res.redirect('/addMember')
})

app.get('/Show',(req,res)=>{
    res.render('show')
})

app.get('/BringGraph',(req,res)=>{
    res.json(JSON.stringify([...a.returnGraph()]));
})

app.get('/ShortPath',(req,res)=>{
    res.render('path')
})


app.post('/ShowPath',(req,res)=>{
    s = a.shortestPath(req.body.name1,req.body.name2);
    
    console.log(s);
    res.render('relation',{path:s});
})


app.listen(3000)