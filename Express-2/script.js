// In this file we are going to learn some of the advnaced needed concepts of express js
const express = require('express')
const app = express()

app.set("view engine","ejs");
app.use(express.static("./public"));
app.get('/', function (req, res) {
  res.render("index");
})

app.listen(3000);