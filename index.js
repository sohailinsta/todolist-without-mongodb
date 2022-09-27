const express = require("express");
const https = require("https");
const request = require("request");
const bodyParser = require('body-parser')
const date = require(__dirname + "/date.js")
const ejs = require('ejs');
const app = express();
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }))
const items = ["office", "college", "school"];
const workitems = [];
app.get("/", function(req,res){
  const today = date.getDay();
res.render("list", {title: today, newitem: items})
})
app.post("/",function(req,res){
const item =  req.body.item; 
if(req.body.list=="work"){
  workitems.push(item)
    res.redirect("/work");
  }
  else{
  items.push(item)
  res.redirect("/");
  }
})
app.get("/work", function(req,res){  
  res.render("list", {title: "work", newitem: workitems})
  })
app.listen(9000,function(){
  console.log("port is listening on 3008");
});