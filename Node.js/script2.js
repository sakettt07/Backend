// const data=require('./script');
// console.log(data);

const express = require('express')
const app = express()

app.use(function(req,res,next){
    console.log("hello from i am midle ware0");
    next();
})
app.use(function(req,res,next){
    console.log("hello from i am midle ware01");
    next();
})

app.get("/",function(req,res){
    res.send("kaise ho dostoo stre kuch naya");
})
app.get("/new",function(req,res){
    res.send("kuch toh naya h isme daya");
})
app.listen(3000);