// In this file we are going to learn about express js
//  THis is the main backend file for the whole project.
const express=require('express');
const app=express();

app.use(function(req,res,next){
    console.log("heloo i ama middleware");
    next();
})
app.set("view engine","ejs");
// setting up the static filess
app.use(express.static('./public'));

app.get('/',function(req,res){
    res.render("index",{name:"indian"});
})
app.get('/profile',function(req,res){
    res.render("profile",{age:56});
})
app.get('/profile/:username',function(req,res){
    res.render("me");
})
app.get('/error',function(req,res,next){
    throw Error("something went wrong on this site")
})
app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })
app.listen(3000);