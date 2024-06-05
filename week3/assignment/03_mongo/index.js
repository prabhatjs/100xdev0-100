const express=require('express');
const adminRouter=require('./routes/admin');
const userRouter=require('./routes/user');
const { json } = require('body-parser');
const bodyParser = require('body-parser');

const app=express();

app.use(bodyParser.json())
app.use('/admin',adminRouter);
app.use('/user',userRouter);


app.listen(3000,()=>{
    console.log('server Runing');
})