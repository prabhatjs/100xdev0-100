const express=require('express');
const app=express();


app.get('/interest',function(req,res){
    const amount=parseInt(req.query.amount);
    const roi=parseInt(req.query.roi);
    const year=parseInt(req.query.year);
    
    const cal=(amount*roi*year)/100;
    const totalvalue=parseInt(cal+amount);
    console.log(cal);
    console.log(amount);
    console.log(roi);
    console.log(year);
    res.send({"IntrestValue":cal,"Total Amount Paid":totalvalue});

})


app.listen(3000,()=>{
    console.log('server running');
})
