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




//1 create schema

const User=mongoose.model('User',{
    name:String,
    email:String,
    password:String
});

const user=new User({name:'Sahil',email:'Sahil@gmail.com',password:"12342WDE"});
user.save().then(()=>{
    console.log("DATA SAVE")
})