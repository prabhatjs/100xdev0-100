//JWt to create token 
//user gets back a token after the signin request user send back tokens in all authanticated request
//how does the backend connect to the db
// Express lets u Create an HTTP Server
// Jsonwebtokens libary lets you create 
// Mongoose lets you connect to your database.

const express=require('express');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
const jwtPassword="123456";

const app=express();
app.use(express.json());
// mongoose.connect(`mongodb+srv://USerNAme:PAssword@testingcluster.hduwizt.mongodb.net/`);


//1 create schema

const User=mongoose.model('User',{
    name:String,
    email:String,
    password:String
});

app.post('/signup',async (req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;

    const existUser= await User.findOne({email:email});

    if(existUser){
        return res.status(400).send("User Email already in use");
    }

    const user=new User({
        name:name,
        email:email,
        password:password
    })
    user.save();
    res.json({
    mesg:"Save Data"
});
})
 app.listen(3000,()=>{
    console.log("server Rrun");
 })