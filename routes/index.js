var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var User = require("../schema")



router.get('/', (req, res,)=> {
  res.render("index");
});

router.get("/login", (req,res)=>{
  res.render("login")
})

router.get("/register", (req,res)=>{
  res.render("register", {
    surname: "",
    lastname: "",
    age: "",
    username: "",
    password: "",
    email: "",
    someerror: ""
  })
})



//not using
router.post("/profile",(req,res)=>{
 
  const user = new User({
    surname: req.body.Rsurname,
    lastname: req.body.Rlastname,
    age: req.body.Rage,
    username: req.body.Rusername,
    password: req.body.Rpassword,
    email: req.body.Remail
  })
  
  user.save((err,saveduser)=>{
    if (err) {
      
      console.log(err)
      
      
      
    }else{
      res.render("profile")
    }
  })


 
 })


 
//using
 router.post("/register", async (req,res)=>{


function reload(param) {
  res.render("register",{
    surname: req.body.Rsurname,
    lastname: req.body.Rlastname,
    age: req.body.Rage,
    username: req.body.Rusername,
    password: req.body.Rpassword,
    email: req.body.Remail,
    someerror: param
  },
  console.log("nixuasibe"))
}
  
  
  
  
  const user = new User({
    surname: req.body.Rsurname,
    lastname: req.body.Rlastname,
    age: req.body.Rage,
    username: req.body.Rusername,
    password: req.body.Rpassword,
    email: req.body.Remail
  })
  



  user.save((err,saveduser)=>{
    
   if (err) {
      console.log(err)
      console.log(err.code)
      if (err.code==11000) {
        reload(err.code)
      }
     
    }
    else{
      console.log("nigga saved")
      res.redirect("/profile")
    }

    
  })


  
})




router.get("/profile",async (req,res)=>{
  let log = await User.find({username: req.body.Rusername})
  // res.send(...log)
  // console.log(await User.find({username: req.body.Rusername}))
  console.log(`this is fucking req body ${log}`)
  res.render("profile", {profile: await User.find({username: req.body.Rusername})})
})















module.exports = router;
