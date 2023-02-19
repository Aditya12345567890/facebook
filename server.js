
const express = require("express");
const port = 1234;
let app =express.Router();
const passport = require("passport");
app.set('view engine', 'ejs')

const localStrategy = require("passport-local");

passport.use(new localStrategy(userModel.authenticate()));





app.post(
  "/login",
  passport.authenticate("local",{
    successRedirect: "/profile",
    failureRedirect: "/login"
  }),
  function(req,res) {}
)

app.get("/logout", function(req,res){
  req.logOut();
  res.redirect("/");
});

function isLoggedIn(req,res,next) {
  if (req.isAuthenticated()) {
    return next();
  }else {
    res.redirect("/login")
  }
}

app.get("/",function (req,res){
 res.render("index")
 res.end()
})

app.post("/reg", function(req,res){
  const dets = new userModel({
    name:req.body.name,
    username: req.body.username,
    email: req.body.email
  })
})

userModel.register(dets,req.body.password).then(function(registeredUser){
passport.authenticate("local")(req,res,function(){
  res.redirect("/profile")
});
});

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

