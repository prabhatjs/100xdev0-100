const express=require('express');

const app=express();

/**
 * http://localhost:3000/health-checkup?kidneyid=2
 * middelware :- are function which are used to per-check condition 
 */


app.get('/health-checkup',function(req,res){
    //check username and password
    const kidneyid=req.query.kidneyid;
    const username=req.headers.username;
    const password=req.headers.password;
    if(username!='Prabhat' ||  password!='Password1'){
        res.status(403).json({
            mesg:'User doesnt exist',
        })
        return;
    }
    if(kidneyid!=1 && kidneyid!=2){
        res.status(411).json({
            mesg:"Wrong Inputs"
        })
        return;
    }
        res.send('Heart is healthy');
})

app.listen(3000,()=>{
    console.log("Server is runing");
})