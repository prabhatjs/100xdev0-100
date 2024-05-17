const express=require('express');
// const {rateLimiterMiddleware}=require('./middleware/ratelimiting')
const app=express();
const zod=require('zod');
/**
 * http://localhost:3000/health-checkup?kidneyid=2
 * middelware :- are function which are used to per-check condition 
 */



//define schema
const schenma=zod.array(zod.number());
app.use(express.json());

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
//app.use(rateLimiterMiddleware);
app.get('/health-checkup',userMiddleware,kidneyMiddleware, function(req,res){
        res.send('Heart is healthy');
})
app.get('/kideny-checkup',userMiddleware,kidneyMiddleware ,function(req,res){
    console.log(Date.now());
    res.send('Kideny is healty');
})

app.post('/heart-check',(req,res)=>{
    const kidenys=req.body.kidenys;
    //kidneys me jo data hona chiaye vo array hoga tabhi response milega
    const response=schenma.safeParse(kidenys);
    const kidneyLength=kidenys.length;
    res.send('You Have '+ kidneyLength +" kidneys");
    if(!response.success){
        req.status(411).json({
            mesg:'input is invalid'
        })
    }else{
    res.send({
        response
    })
}
})


/**multiple case for zod validation 
 * {
 *  email:string,
 * password:atlest 8 latters,
 * contry:"IN","GER",
 * }
 */

const objectSchema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(1,{message:'This is required'}).min(8,{message:"To Sort"}),
    country:zod.literal("IN").or(zod.literal("GER")).optional()
})
app.post('/login2',function(req,res){
    const payloads=req.body;
    const response=objectSchema.safeParse(payloads);

    if(!response.success){
        res.json({
            mesg:'Your Inputs are invalid'
        })
        return;
    }
    else{
        res.json({
            mesg:'Login Successfully'
        })
    }
    
})
/**Another example of validating email,and password */
function validateInputs(obj){
  const loginSchema=zod.object({  
    email:zod.string().email(),
    password:zod.string().min(9)
})
const response=loginSchema.safeParse(obj)
//console.log(response);
return response;
}
app.post('/login',function(req,res){
    console.log(req.body);
        const response=validateInputs(req.body);
        console.log(response);
        if(!response.success){
            res.json({
                mesg:'Your Inputs are invalid'
            })
            return;
        }
        else{
            res.json({
                mesg:'Login Successfully'
            })
        }
})









//how to create global catch end of the program its middelware
// app.use(function(err,req,res,next){
//     res.json({
//       mesg:  "Sorry Somthing is up with our server"
//     })
// })


app.listen(3000,()=>{
    console.log("Server is runing");
})

/*
problem is when api is failed and server gives the error
and we not to want see those error to client machine then we use "global catch"!"
*/