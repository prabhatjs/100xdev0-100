const express=require('express');
const {rateLimiterMiddleware}=require('./middleware/ratelimiting')
const app=express();

/**
 * http://localhost:3000/health-checkup?kidneyid=2
 * middelware :- are function which are used to per-check condition 
 */

function userMiddleware(req,res,next){
     //check username and password
     console.log(Date.now());
    if(req.headers.username!='Prabhat' || req.headers.password!='Password1')
        {
        res.status(403).json({
            mesg:'User doesnt exist',
        })
    }
        else{
            next();
        }
}
function kidneyMiddleware(req,res,next){
    console.log(Date.now());
    const kidneyid=req.query.kidneyid;
    if(kidneyid!=1 && kidneyid!=2){
        res.status(411).json({
            mesg:"Wrong Inputs"
        })
    }else{
        next();
    }
}
let number=0;
function calulateRequest(req,res,next){
   
    number++;
    console.log(number)
    
        next();
    
}
app.use(calulateRequest);
app.use(rateLimiterMiddleware);
app.get('/health-checkup',userMiddleware,kidneyMiddleware, function(req,res){
        res.send('Heart is healthy');
})
app.get('/kideny-checkup',userMiddleware,kidneyMiddleware ,function(req,res){
    console.log(Date.now());
    res.send('Kideny is healty');
})

app.listen(3000,()=>{
    console.log("Server is runing");
})