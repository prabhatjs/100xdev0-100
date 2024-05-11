const express=require('express');
const connectiondb=require('./connection')

















const app=express();
app.listen(3000,async()=>{
   await connectiondb();
    console.log('sever is runing');
})