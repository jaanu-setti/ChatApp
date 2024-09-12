const express = require('express');
const router = express.Router();
const User = require('../models/user');
const validate = require('validator')
const bcrypt = require('bcryptjs');
const jwt  = require('jsonwebtoken')

router.post('/register' , async(req,res)=>{
   try{
    const {name , email , password}=req.body;
    const hashedpassword = bcrypt.hash(password,10)
   const userexists = await User.findOne({email});
   if(userexists){
    res.status(400).json({message : "user already exists with this email"})
   }
   if(!validate.isEmail(email)){
    res.status(400).json({message : "please give a valid email"})
   }
   if(!validate.isStrongPassword(password)){
    res.send(400).json({message : "password should contain special characters"})
   }
   const user = await  User.create({
    name ,
    email,
    password : hashedpassword
     })
    res.status(200).json({message : 'registration successfull'})
   }
   catch(err){
      res.status(500).json({message : err.message})
   }

})
router.get('/',async(req,res)=>{
    try{
        const userdata = await User.find();
    res.status(200).json({message : userdata})
    }
    catch(err){
        res.status(500).json({message : err.message})
    }
})

module.exports=router;