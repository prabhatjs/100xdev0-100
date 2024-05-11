const express=require('express');
const app=express();

 app.use(express.json());

function createQueue(n){
    let qn=0;
    for(let i=0;i<n;i++){
        qn=qn+i;
    }
    return qn;
}

var users=[
    {
    name:'Prabhat',
    Kidenys:[
        {healthy:false},
        {healthy:true}
    ]
    },
{
    name:'Suraj',
    Kidenys:[
        {healthy:false},
        {healthy:true}
    ]
}
];

app.get('/countKidney',(req,res)=>{
    const prabhatkidney=users[0].Kidenys;
    console.log(prabhatkidney);
    const numberofkidney=prabhatkidney.length;
    console.log(numberofkidney);
    let numberofhealthkidney=0;
    for(let i=0;i<prabhatkidney.length;i++){
        if(prabhatkidney[i].healthy){
        numberofhealthkidney=numberofhealthkidney+1;
        }
    }
    const numberofunhealhtykidney=numberofkidney-numberofhealthkidney;
    res.json({
        numberofkidney,
        numberofhealthkidney,
        numberofunhealhtykidney

    })
})
app.get('/allkidney',(req,res)=>{
    var userskidney;
    console.log(users.length)
    userskidney=users.map(users => users.Kidenys);
    res.json({
        userskidney
    })
})
app.post('/addkidneys',(req,res)=>{
        const isHealthy=req.body.isHealthy;
            users[0].Kidenys.push({
                healthy:isHealthy
            })
            res.send({
                message:"Successfully"
            })
})
//change all kidney is healthy
app.put('/chnagekidney',(req,res)=>{
 
        for(let i=0;i<users[1].Kidenys.length;i++){
                users[1].Kidenys[i].healthy=true;
                }
                res.send({
                    message:"done"
                })

})
//remove unhealhy kidney
app.delete('/deletekidney',(req,res)=>{
        const newkidney=[];
        for(let i=0;i<users[0].Kidenys.length;i++){
            if(users[0].Kidenys[i].healthy){
                newkidney.push({
                    healthy:true
                })
            }
        }
        users[0].Kidenys=newkidney;
        res.send({
            mesg:'Done'
        })
})


app.get('/getDocNumber',(req,res)=>{
        const n=req.query.n;
        const docnum=createQueue(n);
        res.send(docnum.toString());
});

app.listen(3000,async()=>{
console.log("server running")
});
