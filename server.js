
const express = require("express");
const port = 1234;
let app =express();
app.set('view engine', 'ejs')

app.get("/",function (req,res){
 res.render("index")
 res.end()
})

app.get("/login",function (req,res){

  res.render("login");
  res.end();
})

app.get("/profile",function (req,res){

    res.render("profile");
    res.end();
  })

app.listen(port, function (){
    console.log("Server is working.")
});

